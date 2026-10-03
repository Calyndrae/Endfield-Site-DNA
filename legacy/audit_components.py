"""Extract CSS asset, typography and geometry rules without saving source CSS."""
from pathlib import Path
import json
import re
import urllib.request

root = Path(__file__).resolve().parent
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
output = {"assets": [], "typography": [], "geometry": []}
for stylesheet in evidence["stylesheets"]:
    url = stylesheet["url"]
    with urllib.request.urlopen(url, timeout=45) as response:
        css = response.read().decode("utf-8", "replace")
    for match in re.finditer(r"([^{}]+)\{([^{}]*)\}", css):
        selector = match.group(1).strip().split("}")[-1].strip()
        if not selector or len(selector) > 700:
            continue
        body = match.group(2)
        declarations = dict((key.strip(), value.strip()) for key, value in
                            re.findall(r"([\w-]+)\s*:\s*([^;{}]+)", body))
        for asset in re.findall(r"url\(['\"]?(https?://[^)'\"]+)", body):
            if "data:" not in asset:
                output["assets"].append({"selector": selector, "url": asset, "css": url})
        typography = {key: value for key, value in declarations.items() if key in
                      ("font-family", "font-size", "font-weight", "line-height", "letter-spacing", "text-transform", "text-align")}
        if typography and not selector.startswith(("0%", "to", "50%")):
            output["typography"].append({"selector": selector, "properties": typography, "css": url})
        geometry = {key: value for key, value in declarations.items() if key in
                    ("position", "display", "width", "height", "top", "left", "right", "bottom", "gap", "padding", "margin", "flex-direction", "justify-content", "align-items", "grid-template-columns", "overflow", "z-index", "background-color", "border-radius")}
        if len(geometry) >= 4 and any(word in selector for word in
                ("Header_", "footer_", "__02-Operator_", "OperatorItem_", "Dropdown_", "__12-OperatorList_", "__00-Loading_", "SubpageHeader_", "Button_")):
            output["geometry"].append({"selector": selector, "properties": geometry, "css": url})

(root / "component_catalog.json").write_text(json.dumps(output, indent=2, ensure_ascii=False), encoding="utf-8")
print({key: len(value) for key, value in output.items()})
