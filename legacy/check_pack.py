"""Small offline integrity check for the finished research pack."""
import ast
import json
import re
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote

root = Path(__file__).resolve().parent
for script in root.glob("*.py"):
    ast.parse(script.read_text(encoding="utf-8"))

evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
board = (root / "mood-board.html").read_text(encoding="utf-8")
images = re.findall(r'<img[^>]*src="([^"]+)"', board)
assert len(images) == 3 and all((root / image).is_file() for image in images)
assert len(evidence["pages"]) == 3
assert len(evidence["scripts"]) == 30
assert len(evidence["stylesheets"]) == 11
assert len(evidence["external_first_depth"]) == 1
clips = (root / "readable" / "operator-video-assets.js").read_text(encoding="utf-8")
assert clips.count('"enter"') == 33

class LocalReferences(HTMLParser):
    def __init__(self):
        super().__init__()
        self.ids = set()
        self.references = []
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get("id"):
            assert attrs["id"] not in self.ids, f"Duplicate id: {attrs['id']}"
            self.ids.add(attrs["id"])
        for key in ("src", "href"):
            if attrs.get(key): self.references.append(attrs[key])

handbook = root / "handbook" / "index.html"
assert list((root / "handbook").glob("*.html")) == [handbook]
html = handbook.read_text(encoding="utf-8")
assert html.count('class="handbook-chapter"') == 29
for path in (handbook, root / "starter" / "index.html", root / "mood-board.html"):
    parsed = LocalReferences()
    parsed.feed(path.read_text(encoding="utf-8"))
    for href in parsed.references:
        url = urlsplit(href)
        if url.scheme or url.netloc: continue
        target = (path.parent / unquote(url.path)).resolve() if url.path else path
        assert target.is_file(), f"Missing local reference from {path.name}: {href}"
        if url.fragment and target.suffix == ".html":
            dest = LocalReferences()
            dest.feed(target.read_text(encoding="utf-8"))
            assert unquote(url.fragment) in dest.ids, f"Missing anchor: {href}"
assert not (root / "chrome-cdp-temp").exists()
assert not (root / "chrome-profile-temp").exists()
size = sum(file.stat().st_size for file in root.rglob("*") if file.is_file()) / 1048576
print(f"PASS: 3 pages, 1 external depth-one page, 30 JS, 11 CSS, 33 clip pairs, 3 board images")
print("PASS: single HTML handbook, 29 anchored sections, no broken local links or duplicate IDs")
print(f"Project size: {size:.2f} MB; temporary Chrome profiles removed")
