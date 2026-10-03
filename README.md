# Endfield-Site-DNA

A technical "DNA" study of the Arknights: Endfield official website (`https://endfield.gryphline.com/en-us`, depth 1): the raw archive of every script, stylesheet and font the pages load, the deobfuscated and semantically renamed first-party code, the measured design tokens (colour, typography, spacing, layers, motion, hover, audio), and a **single-page handbook that runs inside the site's own article template** with real components embedded and the real runtime around them.

Nothing in the handbook is invented: every wrapper, stylesheet, font, script, sound and animation is the original site's. The handbook's text is tagged **OBSERVED** (read from shipped code/responses), **MEASURED** (reported by headless Chromium on 2026-10-03) or **INFERRED** (interpretation).

## Open the handbook

```bash
cd tools && npm install          # playwright, prettier, @babel/*, postcss (one time)
node tools/serve.mjs 8786        # local mirror of the original pages + the handbook
# http://127.0.0.1:8786/en-us/news/7013   ← the handbook (35 chapters, one page)
# http://127.0.0.1:8786/en-us             ← original home page through the mirror
# http://127.0.0.1:8786/en-us/operator    ← original operator catalogue
# http://127.0.0.1:8786/en-us/news        ← original news index
```

Windows: `OPEN-HANDBOOK.ps1` starts the mirror and opens the page. The mirror serves the archived original HTML at the original routes, proxies Next.js RSC navigation to the live origin, and answers the article's own data refetch of `/api/bulletin/7013` with `handbook/handbook-bulletin.json`. The page is therefore the untouched article shell (body byte-identical to the live response, verified) whose title and body data are the handbook.

## Layout of the repository

| Path | What it is |
| --- | --- |
| `handbook/` | `index.html` (original article shell + data adapter + two extra *original* stylesheets), `handbook-bulletin.json` (the handbook as bulletin data), `coverage.json` |
| `capture/` | Raw archive: `js/` (31 chunks), `css/` (12 stylesheets), `fonts/` (woff2), `assets/` (small CSS/JS-referenced assets), `pages/<route>/` (SSR+hydrated DOM, portrait DOM, screenshots, computed styles, hover diffs, style-mutation timelines, media logs), `states/` (interaction states: rail hover, share list, dropdown open, operator detail, news tabs, footer language picker, mobile menu, loader frames), `network-manifest.json` (every response: URL, type, bytes, SHA-256) |
| `source/` | `beautified/` (prettier output of every chunk), `modules/<chunk>/<id>.js` (708 split webpack modules), `module-map.json` + `MODULE-MAP.md` (every module named: site / site-vendor / vendor / css-module / asset / i18n-bundle), `stage1/` (library aliases resolved, short names made unique), `rename-maps/` (semantic rename maps with summaries), `readable/` (45 first-party modules renamed scope-aware with Babel; values and control flow unchanged) |
| `analysis/` | `css-rules.json` (every rule with media context), `colors.json`, `typography.json`, `spacing.json`, `layers.json`, `motion.json`, `breakpoints.json`, `hover-states.json`, `motion-timelines.json`, `components/<Component>.json` (per-component CSS, real markup, computed styles, hover, keyframes), `css-digest.md`, `DNA.md` (written specification) |
| `verification/` | `report.json` + screenshots from `tools/verify.mjs` |
| `original/` | The SSR responses the mirror serves (`*-response.html`), `routes.json` |
| `tools/` | Node scripts (below) |
| `legacy/` | The earlier session's Python tooling and invented presentation, kept for provenance only |
| `COVERAGE.md`, `CHUNK_MAP.md`, `PLAN.md` | Component coverage proof, archived-file map, plan and status |

## Tooling (`tools/`)

| Script | Purpose |
| --- | --- |
| `capture.mjs [urls…]` | Depth-1 crawl in headless Chromium with instrumentation (network manifest, DOM, screenshots at 1440×900 and 390×844, computed styles, hover diffs for every class with a `:hover` rule, style-mutation timelines, media/audio log) |
| `capture-states.mjs`, `capture-loader.mjs`, `capture-mobile-dom.mjs` | Interaction states, loader frames, portrait DOM snapshots |
| `beautify.mjs`, `split-modules.mjs`, `hint-modules.mjs`, `name-modules.mjs` (+ `source/module-names.json`), `rename.mjs`, `stage2.mjs` (+ `source/rename-maps/*.json`), `write-module-map.mjs` | Deobfuscation pipeline |
| `analyze-css.mjs`, `css-digest.mjs`, `analyze-hover.mjs`, `analyze-motion.mjs`, `extract-components.mjs` | Design-token and component evidence extraction |
| `build-handbook.mjs` (+ `handbook/chapters-*.mjs`, `handbook/lib.mjs`) | Builds the single-page handbook from the data |
| `serve.mjs [port]` | Local mirror |
| `verify.mjs` | Headless verification (shell untouched, loader finishes, anchors, specimen geometry, hover parity with live measurements, live rail/footer/back-to-top, mobile overflow) |
| `write-docs.mjs` | Regenerates `CHUNK_MAP.md` and `COVERAGE.md` |

Rebuild everything: `node capture.mjs && node analyze-css.mjs && node split-modules.mjs && node name-modules.mjs && node rename.mjs && node stage2.mjs && node extract-components.mjs && node analyze-hover.mjs && node analyze-motion.mjs && node build-handbook.mjs && node verify.mjs` (from `tools/`). Chromium must trust the network path it runs on; in this repository's development container that meant adding the egress CA to Chromium's NSS store.

## What was found, in one paragraph

A Next.js App Router site (React 19) with CSS Modules and a rem canvas (16px × min(w/2560, h/1440) landscape, min(w/1080, h/1920) portrait; 9px at 1440×900) that branches on orientation only. Ink `#191919` on white, one signal colour `#fffa00`, a 20-step grey ladder, mint/magenta only as hairline gradients. HarmonyOS Sans (aliases SansRegular/Medium/Bold/Black) for text, Gilroy for English captions, Novecento Sans Wide for digits and ghost words. A 7.5rem navigation rail, a 160rem centred canvas, hatched/dotted textures, block-and-marker controls with 0.2 s hovers, a loader curtain with a percentage, anime.js entrances staggered at 300/600/1200 ms, 5–8 s hero drifts, RGB+alpha side-by-side MP4 characters composited in WebGL, a three.js r178 point-cloud lore scene with benchmarked quality tiers, a looping theme with 1 s fades and twelve click cues. No encrypted assets; no decryption is involved anywhere.
