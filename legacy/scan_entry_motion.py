"""Locate first-load animation code in already inventoried live JS chunks."""
from pathlib import Path
import json
import urllib.request

root = Path(__file__).resolve().parent
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
terms = ["__00-Loading", "Loading_leaving", "onLeaving", "onFinished", "SDKInitializer", "SectionTitle_sectionTitle"]
for chunk in evidence["scripts"]:
    url = chunk["url"]
    with urllib.request.urlopen(url, timeout=35) as response:
        js = response.read().decode("utf-8", "replace")
    counts = {term: js.count(term) for term in terms if term in js}
    if counts:
        print(url.rsplit("/", 1)[-1], counts)
        for term in ("__00-Loading", "Loading_leaving"):
            where = js.find(term)
            if where >= 0:
                print(js[max(0, where - 250):where + 1000])
