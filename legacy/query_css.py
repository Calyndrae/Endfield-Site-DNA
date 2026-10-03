"""Print compact site CSS declarations for a selector substring (read-only)."""
from pathlib import Path
import json
import re
import sys
import urllib.request

term = sys.argv[1]
limit = int(sys.argv[2]) if len(sys.argv) > 2 else 30
root = Path(__file__).resolve().parent
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
matches = 0
for stylesheet in evidence["stylesheets"]:
    with urllib.request.urlopen(stylesheet["url"], timeout=35) as response:
        css = response.read().decode("utf-8", "replace")
    for match in re.finditer(r"([^{}]+)\{([^{}]*)\}", css):
        selector = match.group(1).strip().split("}")[-1].strip()
        if term.lower() not in selector.lower():
            continue
        print(selector[:220], "{", match.group(2)[:900], "}")
        matches += 1
        if matches >= limit:
            raise SystemExit()
