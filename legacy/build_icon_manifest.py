"""Map CSS data-key icon taxonomy to exact official asset URLs."""
from pathlib import Path
import json
import re
import urllib.request

root = Path(__file__).resolve().parent
url = "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/css/cca0e7eae4809d1e.css"
with urllib.request.urlopen(url, timeout=30) as response:
    css = response.read().decode("utf-8", "replace")

icons = {}
for match in re.finditer(r"([^{}]*\[data-key=([^\]]+)\][^{}]*)\{([^{}]*)\}", css):
    selector, key, body = match.groups()
    asset = re.search(r"background-image:url\(([^)]+)\)", body)
    if asset:
        item = icons.setdefault(key, {"url": asset.group(1), "used_in": []})
        context = "operator card" if "OperatorItem_" in selector else "dropdown option" if "Dropdown_option" in selector else "dropdown trigger"
        if context not in item["used_in"]:
            item["used_in"].append(context)

(root / "icon_manifest.json").write_text(json.dumps(icons, indent=2, ensure_ascii=False), encoding="utf-8")
print(f"Mapped {len(icons)} keyed icon images")
