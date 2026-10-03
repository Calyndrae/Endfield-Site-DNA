# legacy/ — the earlier session's working files (superseded)

These files came from the first pass (Codex/GPT on Windows) and are kept for provenance only. They are superseded by the Node tooling in `tools/`, the raw archive in `capture/`, the deobfuscated code in `source/`, the analysis in `analysis/` and the handbook in `handbook/`.

- `*.py` — Python/Playwright scripts that used the installed Chrome on Windows; `build_original_handbook.py` was the last approach (article shell + XHR data adapter) and is reimplemented by `tools/build-handbook.mjs`.
- `mood-board.html`, `starter/`, `guide.css`, `guide.js` — the earlier *invented* presentation (authored CSS/JS). Not used anywhere; retained only so the history is visible.
- `readable/` — hand-written semantic reconstructions of a few modules; superseded by the scope-aware renamed modules in `source/readable/`.
- `*.json`, `SITE_DNA.md`, `handbook_verification.json` — earlier catalogs and notes.
