"""Extract the site's 33 rendered card records from HTML, in memory only."""
from html import unescape
from pathlib import Path
import json
import re
import urllib.request

root = Path(__file__).resolve().parent
request = urllib.request.Request("https://endfield.gryphline.com/en-us/operator",
                                 headers={"User-Agent": "Mozilla/5.0"})
with urllib.request.urlopen(request, timeout=30) as response:
    html = response.read().decode("utf-8", "replace")

cards = []
pattern = re.compile(r'<div class="OperatorItem_operatorItem[^>]*>(.*?)(?=<div class="OperatorItem_operatorItem|</div></div></div></div></div>)', re.S)
for match in pattern.finditer(html):
    block = match.group(1)
    image = re.search(r'class="OperatorItem_image[^>]*data-key="([^"]+)"[^>]*background-image:url\(([^)]+)\)', block)
    name = re.search(r'class="OperatorItem_nameText[^>]*>([^<]+)</span>', block)
    code = re.search(r'class="OperatorItem_codename[^>]*>//\s*([^<]+)</div>', block)
    rarity = re.search(r'class="OperatorItem_contentBlock[^>]*data-rarity="([^"]+)"', block)
    icons = re.findall(r'class="OperatorItem_icon[^>]*data-key="([^"]+)"', block)
    number = re.search(r'class="OperatorItem_index[^>]*>(\d+)', block)
    if image and name and rarity and len(icons) == 2:
        cards.append({"index": int(number.group(1)) if number else len(cards) + 1,
                      "key": image.group(1), "name": unescape(name.group(1)),
                      "codename": unescape(code.group(1)) if code else None,
                      "rarity": int(rarity.group(1)), "profession": icons[0],
                      "element": icons[1], "portrait_url": image.group(2)})

if len(cards) != 33:
    raise ValueError(f"Expected 33 operator cards, extracted {len(cards)}")
(root / "operator_data.json").write_text(json.dumps(cards, indent=2, ensure_ascii=False), encoding="utf-8")
print("33 operator card records with portrait URLs and taxonomy")
