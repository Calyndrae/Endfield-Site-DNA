"""Inventory audio URLs and verified BGM implementation constants."""
from pathlib import Path
import json
import re
import urllib.request

root = Path(__file__).resolve().parent
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
audio = {}
for chunk in evidence["scripts"]:
    with urllib.request.urlopen(chunk["url"], timeout=35) as response:
        js = response.read().decode("utf-8", "replace")
    for local in set(re.findall(r"static/media/sound/[\w.-]+\.(?:mp3|wav|ogg)", js)):
        url = "https://web-static.hg-cdn.com/endfield/official-v4/_next/" + local
        audio.setdefault(url, []).append(chunk["url"])

out = {
    "asset_references": [{"url": url, "chunks": chunks} for url,chunks in sorted(audio.items())],
    "background_music": {
        "source_module": "7725 in 226-d5292700ff68fd13.js",
        "player_module": "58572 in 4231-53da7c4de7468a06.js",
        "url": "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/sound/bgm.3ce37f.mp3",
        "options": {"loop": True, "autoPlay": True, "fade": True, "suspendWhenHidden": True},
        "default_volume": 0.5,
        "default_fade_duration_ms": 1000,
        "effective_default_fade_ms": 500,
        "duration_note": "The easing helper multiplies nominal duration by absolute volume change; 0→0.5 and 0.5→0 therefore take about 500ms.",
        "fade_interval_ms": 10,
        "fade_in_easing": "progress²",
        "fade_out_easing": "1 - (1 - progress)²",
        "visibility": "pause immediately without fade when document.hidden; resume if playing before hide",
        "autoplay_recovery": "retry play on first window click if autoplay was blocked",
    },
}
(root / "audio_manifest.json").write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding="utf-8")
print("Audio asset references", len(audio))
