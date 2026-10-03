"""Build a small, readable asset map from the live webpack chunk in memory."""

from pathlib import Path
import json
import re
import urllib.request

ROOT = Path(__file__).resolve().parent
PUBLIC_PATH = "https://web-static.hg-cdn.com/endfield/official-v4/_next/"
CHUNK_URL = PUBLIC_PATH + "static/chunks/8963-234f979bdd6b491c.js"
with urllib.request.urlopen(CHUNK_URL, timeout=30) as response:
    chunk = response.read().decode("utf-8")

module = chunk.split("68408:", 1)[1].split("},71272:", 1)[0]
declarations = dict(
    re.findall(r"([A-Za-z_$][\w$]*)=i\.p\+\"(static/media/video/[^\"]+)\"", module)
)
map_text = module.split("eu={", 1)[1].rsplit("}", 1)[0]
entries = []
for match in re.finditer(r"([A-Za-z][\w]*):\{enter:([^,]+),idle:([^}]+)\}", map_text):
    name, enter, idle = match.groups()

    def url(expression):
        expression = expression.strip()
        if expression in declarations:
            return PUBLIC_PATH + declarations[expression]
        inline = re.fullmatch(r'i\.p\+"([^"]+)"', expression)
        if inline:
            return PUBLIC_PATH + inline.group(1)
        raise ValueError((name, expression))

    entries.append((name, url(enter), url(idle)))

if len(entries) != 33:
    raise ValueError(f"Expected 33 operators, found {len(entries)}")

output = [
    "/**",
    " * Readable equivalent of webpack module 68408 in 8963-234f979bdd6b491c.js.",
    " * URLs are exact values resolved against the site's webpack public path.",
    " * Original media is referenced; no video files are downloaded.",
    " */",
    "export const operatorVideoClips = " + json.dumps(
        {name: {"enter": enter, "idle": idle} for name, enter, idle in entries},
        indent=2,
        ensure_ascii=False,
    ) + ";",
    "",
]
destination = ROOT / "readable" / "operator-video-assets.js"
destination.parent.mkdir(exist_ok=True)
destination.write_text("\n".join(output), encoding="utf-8")
print(f"Wrote {destination} with {len(entries)} pairs")
