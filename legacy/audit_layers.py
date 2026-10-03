"""Map explicit stacking, compositing, masks and pointer hit regions."""
from pathlib import Path
import json
import re
import urllib.request

root = Path(__file__).resolve().parent
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
records = []
for sheet in evidence["stylesheets"]:
    with urllib.request.urlopen(sheet["url"], timeout=35) as response:
        css = response.read().decode("utf-8", "replace")
    for match in re.finditer(r"([^{}]+)\{([^{}]*)\}", css):
        selector = match.group(1).strip().split("}")[-1].strip()
        if len(selector) > 600: continue
        props = dict(re.findall(r"([\w-]+)\s*:\s*([^;{}]+)", match.group(2)))
        detail = {key: value for key,value in props.items() if key in
                  ("z-index","position","opacity","pointer-events","clip-path","-webkit-clip-path","mask-image","-webkit-mask-image","mix-blend-mode","isolation","filter","overflow")}
        if detail and any(component in selector for component in
                          ("Header_", "__02-Operator_", "__12-OperatorList_", "OperatorItem_", "__00-Loading_", "footer_")):
            records.append({"selector": selector,"properties":detail,"css":sheet["url"]})
(root / "layer_catalog.json").write_text(json.dumps(records,indent=2),encoding="utf-8")
print("layer declarations",len(records))
