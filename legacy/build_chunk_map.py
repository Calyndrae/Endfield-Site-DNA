"""Render a compact provenance table from evidence.json without storing raw assets."""

from pathlib import Path
import json

root = Path(__file__).resolve().parent
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
page_sets = {
    name: {"scripts": set(page["scripts"]), "stylesheets": set(page["stylesheets"])}
    for name, page in evidence["pages"].items()
}

lines = [
    "# Asset and chunk map",
    "",
    "Generated from `evidence.json`. Every URL was fetched in memory with the self-written analyser; raw bundles were not saved. Byte size and SHA-256 record the response inspected on 2026-10-03. H = home, O = operators, N = news.",
    "",
    "## JavaScript chunks",
    "",
    "| Page | Chunk | Bytes | SHA-256 | Notes |",
    "| --- | --- | ---: | --- | --- |",
]

for chunk in evidence["scripts"]:
    url = chunk["url"]
    used = "".join(letter for name, letter in (("home", "H"), ("operators", "O"), ("news", "N")) if url in page_sets[name]["scripts"])
    notes = []
    if chunk.get("threejs"):
        notes.append("Three.js code")
    if chunk.get("transparent_video"):
        notes.append("transparent video")
    if chunk.get("operator_logic"):
        notes.append("operator/page logic")
    if "operator/page-" in url:
        notes.append("operator index entry")
    if "news/page-" in url:
        notes.append("news index entry")
    label = url.rsplit("/", 1)[-1]
    lines.append(f"| {used or '—'} | [{label}]({url}) | {chunk['bytes']:,} | `{chunk['sha256']}` | {', '.join(notes) or 'shared/runtime/vendor or other site code'} |")

lines += ["", "## Stylesheets", "", "| Page | Stylesheet | Bytes | SHA-256 |", "| --- | --- | ---: | --- |"]
for sheet in evidence["stylesheets"]:
    url = sheet["url"]
    used = "".join(letter for name, letter in (("home", "H"), ("operators", "O"), ("news", "N")) if url in page_sets[name]["stylesheets"])
    label = url.rsplit("/", 1)[-1]
    lines.append(f"| {used or '—'} | [{label}]({url}) | {sheet['bytes']:,} | `{sheet['sha256']}` |")

lines += [
    "", "## Reconstruction boundary", "",
    "Site-specific operator logic, asset mapping, responsive scaling and video compositing are reconstructed with meaningful names under `readable/`. All other hashed chunks remain URL/hash inventory entries; numeric module IDs and one-letter minified identifiers in those files have not been guessed into source-level names. There is no evidence of encrypted code or a required decryption key in the inspected resources.", "",
]
(root / "CHUNK_MAP.md").write_text("\n".join(lines), encoding="utf-8")
print(f"Mapped {len(evidence['scripts'])} JS and {len(evidence['stylesheets'])} CSS responses")
