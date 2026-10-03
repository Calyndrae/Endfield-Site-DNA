"""Stream official CSS to memory and save only compact motion declarations."""
from collections import Counter
from pathlib import Path
import json
import re
import urllib.request

ROOT = Path(__file__).resolve().parent
evidence = json.loads((ROOT / "evidence.json").read_text(encoding="utf-8"))
pages = {name: set(page["stylesheets"]) for name, page in evidence["pages"].items()}

def get_text(url):
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(request, timeout=45) as response:
        return response.read().decode("utf-8", "replace")

def split_declarations(body):
    return {name.strip(): value.strip() for name, value in re.findall(r"([\w-]+)\s*:\s*([^;{}]+)", body)}

data = {"stylesheets": [], "rules": [], "keyframes": []}
for stylesheet in evidence["stylesheets"]:
    url = stylesheet["url"]
    css = get_text(url)
    sources = [name for name, set_of_urls in pages.items() if url in set_of_urls]
    data["stylesheets"].append({"url": url, "pages": sources, "bytes": len(css.encode("utf-8"))})

    # Keep each keyframe block intact using brace counting.
    for match in re.finditer(r"@(?:-webkit-)?keyframes\s+([\w-]+)\s*\{", css):
        depth = 1
        cursor = match.end()
        while cursor < len(css) and depth:
            depth += (css[cursor] == "{") - (css[cursor] == "}")
            cursor += 1
        data["keyframes"].append({"name": match.group(1), "css": css[match.start():cursor], "source": url, "pages": sources})

    for match in re.finditer(r"([^{}]+)\{([^{}]*)\}", css):
        selector = match.group(1).strip().split("}")[-1].strip()
        if not selector or selector.startswith("@") or len(selector) > 800:
            continue
        declarations = split_declarations(match.group(2))
        motion = {key: value for key, value in declarations.items()
                  if key.startswith(("transition", "animation", "transform", "filter", "opacity", "will-change"))}
        if motion or any(state in selector for state in (":hover", ":active", ":focus", ":before", ":after")):
            data["rules"].append({"selector": selector, "properties": motion,
                                  "declarations": declarations,
                                  "source": url, "pages": sources})

(ROOT / "motion_catalog.json").write_text(json.dumps(data, indent=2, ensure_ascii=False), encoding="utf-8")
print("rules", len(data["rules"]), "keyframes", len(data["keyframes"]))
print("keyframe names", Counter(item["name"] for item in data["keyframes"]))
print("operator css rules", sum("cca0e7" in item["source"] for item in data["rules"]))
