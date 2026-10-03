# Plan and status

Goal: a technical mood board / "DNA" of the Endfield official site that (1) fetches the site at depth 1, (2) archives and deobfuscates its code with meaningful names, (3) derives the site's own rules (colour, type, spacing, layout, motion, hover, sound, rendering), and (4) presents everything as **one page built only from the site's own components**, so that anyone can build a "child" site of the same family.

## Phases

1. **Archive** — done. Every chunk/stylesheet/font the depth-1 pages load (`capture/`), with hashes; large media listed by URL/size/hash only.
2. **Deobfuscate** — done. Beautified (`source/beautified`), split into 708 modules (`source/modules`), every module named (`source/MODULE-MAP.md`), 45 first-party modules renamed scope-aware with Babel into `source/readable/` (library aliases from the module map, CSS modules → `styles`, every minified local mapped to a meaningful name; values and control flow untouched). Vendor libraries identified by name/version (React 19, Next.js, framer-motion, anime.js 3.2.1, swiper, three.js r178, lottie-web 5.12.2, axios, dayjs, zustand, @emotion, Gryphline SDK v1.8.0). No encryption was found, so no key hunting was needed.
3. **Capture** — done. Instrumented headless-Chromium crawl of `/en-us`, `/en-us/operator`, `/en-us/news`, `/en-us/news/7013` and the two footer protocol pages: DOM, portrait DOM, screenshots, computed styles, hover diffs for every class with a `:hover` rule, style-mutation timelines (entrance animations), media/audio log, interaction states (rail hover, share list, dropdown open, operator detail, news tabs, mobile menu, footer language picker, loader frames).
4. **Analyse** — done. `analysis/` (1984 CSS rules with media context; colour, typography, spacing, layer, motion, breakpoint, hover and per-component evidence; `DNA.md`).
5. **Handbook** — done. `handbook/index.html` is the untouched article shell of `/en-us/news/7013` (body byte-identical) plus a data adapter and two extra *original* stylesheets; the article data is the handbook: 35 anchored chapters, verbatim live specimens (cards, buttons, pagination, dropdowns, tabs, masthead, section title, LORE band, back-to-top), exact CSS per component, measured timelines and hover diffs, readable code links, OBSERVED/MEASURED/INFERRED tagging, a coverage matrix for all 52 CSS-module components, and the transferable rules.
6. **Verify** — done. `tools/verify.mjs` → `verification/report.json` (shell untouched, loader finishes locally, all anchors, specimen geometry, hover parity with live measurements, live rail/footer/back-to-top, no overflow at 390 px).

## Known limits

- Depth 1 only; the pre-launch landing routes, other locales and account flows are out of scope (their CSS is still inventoried).
- Components whose CSS is scoped under their section container (`__02-Operator`, `__06-Notice`, `__10-NoticeList`, `__03-Lore`) and the download panel (store badges are `<img>` sized by a rule the article template overrides) are shown by screenshot + exact CSS rather than live specimens; their captured markup is in `capture/states/states.json`.
- This container's Chromium has no H.264 decoder, so the transparent-video (3D) clips could not be rendered during capture; the renderer code, clip map and CSS are documented.
- The Gryphline SDK consent banner and analytics are third-party; the mirror's local origin blocks some of their calls (expected).
