"""Join portrait, illustration, icon, clip and texture provenance."""
from pathlib import Path
import json
import re

root = Path(__file__).resolve().parent
components = json.loads((root / "component_catalog.json").read_text(encoding="utf-8"))
portraits = json.loads((root / "operator_data.json").read_text(encoding="utf-8"))
icons = json.loads((root / "icon_manifest.json").read_text(encoding="utf-8"))
clips_source = (root / "readable" / "operator-video-assets.js").read_text(encoding="utf-8")
clips = json.loads(clips_source.split("export const operatorVideoClips = ", 1)[1].rsplit(";", 1)[0])

illustrations = {}
for asset in components["assets"]:
    selector = asset["selector"]
    if "__02-Operator_illustration" not in selector:
        continue
    match = re.search(r"data-key=([\w-]+)", selector)
    if match:
        illustrations[match.group(1)] = asset["url"]

textures = []
for asset in components["assets"]:
    name = asset["url"].rsplit("/", 1)[-1]
    if any(term in name.lower() for term in
           ("texture", "card-bg", "section_divider", "deco", "bg", "pattern")):
        textures.append({"name": name, "url": asset["url"], "selector": asset["selector"]})

out = {"operator_portraits": portraits, "hero_illustrations": illustrations,
       "taxonomy_icons": icons, "operator_motion_clips": clips,
       "interface_textures": textures}
(root / "asset_role_manifest.json").write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
print("asset roles", {key: len(value) for key, value in out.items()})
