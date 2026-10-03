# Endfield-Site-DNA

A technical "DNA" study of the Arknights: Endfield official website (`https://endfield.gryphline.com/en-us`, depth 1): the raw archive of every script, stylesheet and font the pages load, the deobfuscated and semantically renamed first-party code, the measured design tokens (colour, typography, spacing, layers, motion, hover, audio), and a **single-page handbook that runs inside the site's own article template** with real components embedded and the real runtime around them.

Nothing in the handbook is invented: every wrapper, stylesheet, font, script, sound and animation is the original site's. Interactive behaviour is not inferred from images: each mechanism was driven live in headless Chromium and its effect recorded, and the reconstructed code that produces it is quoted next to the measurement. The handbook's text is tagged **OBSERVED** (read from shipped code/responses), **MEASURED** (reported by headless Chromium on 2026-10-03) or **INFERRED** (interpretation).

## Open the handbook

```bash
cd tools && npm install          # playwright, prettier, @babel/*, postcss (one time)
node tools/serve.mjs 8786        # local mirror of the original pages + the handbook
# http://127.0.0.1:8786/en-us/news/7013   ← the handbook (36 chapters, one page)
# http://127.0.0.1:8786/en-us             ← original home page through the mirror
# http://127.0.0.1:8786/en-us/operator    ← original operator catalogue
# http://127.0.0.1:8786/en-us/news        ← original news index
```

Windows: `OPEN-HANDBOOK.ps1` starts the mirror and opens the page. The mirror serves the archived original HTML at the original routes, proxies Next.js RSC navigation to the live origin, and answers the article's own data refetch of `/api/bulletin/7013` with `handbook/handbook-bulletin.json`. The page is therefore the untouched article shell (body byte-identical to the live response, verified) whose title and body data are the handbook.

## Hosting

The handbook needs three things from its host: the untouched article shell, the data file the shell's adapter points at, and the repository's own files (`capture/`, `source/`, `analysis/`, `verification/`) for its images and links. Three ways to provide them:

| Option | Who can reach it | What it gives |
| --- | --- | --- |
| **Local mirror** — `node tools/serve.mjs 8786` | Only this machine (binds 127.0.0.1). Add `--host=0.0.0.0 --allow=172.20.10.2,fe80::f4a6:62d:5349:1c1e` to serve on the LAN and answer **403 to every client address not listed** | Everything: the handbook plus the original pages at their routes, with RSC navigation proxied to the live site |
| **GitHub Codespaces** — open the repo in a codespace (`.devcontainer/devcontainer.json` installs the tools and starts the mirror on port 8786) | Only the GitHub account that created the codespace: the forwarded port is **private** by default and GitHub asks for your login before proxying | Same as the local mirror, hosted by GitHub, repository stays private |
| **GitHub Pages** — Settings → Pages → Source "Deploy from a branch", branch `main`, folder `/ (root)` | **Anyone with the URL.** GitHub Pages is a public static host: it cannot restrict visitors by IP address, and a private LAN address such as 172.20.10.2 is never seen by a public server anyway. On the Free plan Pages also requires the repository to be public; the archived site assets would then be public too | The handbook only, at `https://<owner>.github.io/Endfield-Site-DNA/` (root redirect → `/en-us/news/7013/`), served as plain files. Links to the mirrored original pages point at the live site instead; folder links point at the repository tree |

**Custom domain.** The root `CNAME` file names `sitedna.endfield.github.calyndrae.com`; when it exists the Pages build uses an empty base path, because GitHub then serves the site at the domain root. DNS (Cloudflare, zone `calyndrae.com`): a `CNAME` record with name `sitedna.endfield.github` and target `calyndrae.github.io`, proxy status **DNS only** (grey cloud) at least until GitHub has issued the certificate; optionally the `TXT` record `_github-pages-challenge-calyndrae.sitedna.endfield.github` with the value GitHub shows under Settings → Pages → Add a verified domain. Then Settings → Pages → Custom domain → the name above → Save, wait for the DNS check, tick **Enforce HTTPS**. Deleting `CNAME` switches the build back to the `/Endfield-Site-DNA` base path.

The Pages variant is built by `build-handbook.mjs` alongside the mirror variant: `en-us/news/7013/index.html` (the same shell, data path base-prefixed; the article's provider parses `/news/(\d+)` from `location.pathname`, so the shell must live under that path), `handbook/handbook-bulletin.pages.json` (the same content with `/capture…` links prefixed by `/Endfield-Site-DNA`), `index.html` (redirect) and `.nojekyll` (so GitHub serves every file verbatim). `node tools/verify-pages.mjs` serves the repository as a static project site under `/Endfield-Site-DNA/` and checks it in headless Chromium → `verification/pages-report.json`. Pass `--base=/other-name` (and `--repo=`) to both scripts if the repository is renamed.

## Layout of the repository

| Path | What it is |
| --- | --- |
| `handbook/` | `index.html` (original article shell + data adapter + two extra *original* stylesheets), `handbook-bulletin.json` (the handbook as bulletin data), `handbook-bulletin.pages.json` (same content, base-prefixed for GitHub Pages), `coverage.json` |
| `en-us/news/7013/index.html`, `index.html`, `.nojekyll`, `.devcontainer/` | GitHub Pages shell and root redirect, Jekyll bypass, Codespaces configuration (see Hosting) |
| `capture/` | Raw archive: `interactions.json` (what every interaction actually does, measured live), `js/` (31 chunks), `css/` (12 stylesheets), `fonts/` (woff2), `assets/` (small CSS/JS-referenced assets), `pages/<route>/` (SSR+hydrated DOM, portrait DOM, screenshots, computed styles, hover diffs, style-mutation timelines, media logs), `states/` (interaction states: rail hover, share list, dropdown open, operator detail, news tabs, footer language picker, mobile menu, loader frames), `network-manifest.json` (every response: URL, type, bytes, SHA-256) |
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
| `capture-interactions.mjs` | Drives the live site (rail clicks, mute, avatar and 2D/3D switch, lore drag and model switch, information prev/next and media modal, calendar pin states, gameplay and notice pagination, footer language, dropdown keyboard, filters, card → detail, news tabs/pagination/opener close, mobile menu) and re-runs the real-time calculations in the page (root font-size at eight viewports, name-fit for every card) → `capture/interactions.json` |
| `beautify.mjs`, `split-modules.mjs`, `hint-modules.mjs`, `name-modules.mjs` (+ `source/module-names.json`), `rename.mjs`, `stage2.mjs` (+ `source/rename-maps/*.json`), `write-module-map.mjs` | Deobfuscation pipeline |
| `analyze-css.mjs`, `css-digest.mjs`, `analyze-hover.mjs`, `analyze-motion.mjs`, `extract-components.mjs` | Design-token and component evidence extraction |
| `build-handbook.mjs` (+ `handbook/chapters-*.mjs`, `handbook/lib.mjs`) | Builds the single-page handbook from the data |
| `serve.mjs [port] [--host=0.0.0.0] [--allow=ip,ip]` | Local mirror; optional LAN binding with a client-address allow list |
| `verify-pages.mjs [--base=/Endfield-Site-DNA]` | Serves the repository as a static GitHub Pages project site and verifies the Pages variant in headless Chromium |
| `verify.mjs` | Headless verification (shell untouched, loader finishes, anchors, specimen geometry, hover parity with live measurements, live rail/footer/back-to-top, mobile overflow, every code excerpt anchored in the readable source, interaction chapter and `capture/interactions.json` complete and self-consistent) |
| `write-docs.mjs` | Regenerates `CHUNK_MAP.md` and `COVERAGE.md` |

Rebuild everything: `node capture.mjs && node analyze-css.mjs && node split-modules.mjs && node name-modules.mjs && node rename.mjs && node stage2.mjs && node extract-components.mjs && node analyze-hover.mjs && node analyze-motion.mjs && node build-handbook.mjs && node verify.mjs` (from `tools/`). Chromium must trust the network path it runs on; in this repository's development container that meant adding the egress CA to Chromium's NSS store.

## What was found, in one paragraph

A Next.js App Router site (React 19) with CSS Modules and a rem canvas (16px × min(w/2560, h/1440) landscape, min(w/1080, h/1920) portrait; 9px at 1440×900) that branches on orientation only. Ink `#191919` on white, one signal colour `#fffa00`, a 20-step grey ladder, mint/magenta only as hairline gradients. HarmonyOS Sans (aliases SansRegular/Medium/Bold/Black) for text, Gilroy for English captions, Novecento Sans Wide for digits and ghost words. A 7.5rem navigation rail, a 160rem centred canvas, hatched/dotted textures, block-and-marker controls with 0.2 s hovers, a loader curtain with a percentage, anime.js entrances staggered at 300/600/1200 ms, 5–8 s hero drifts, RGB+alpha side-by-side MP4 characters composited in WebGL, a three.js r178 point-cloud lore scene with benchmarked quality tiers, a looping theme with 1 s fades and twelve click cues. No encrypted assets; no decryption is involved anywhere.
