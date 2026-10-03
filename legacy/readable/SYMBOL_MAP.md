# Minified-symbol interpretation for reconstructed modules

This map is scoped by webpack module. A one-letter identifier in one module does not necessarily mean the same thing in another. The accompanying readable files replace these symbols consistently throughout each reconstruction; they do not patch the live vendor bundle.

| Official chunk / module | Minified symbol | Meaning in readable reconstruction |
| --- | --- | --- |
| operator page / 50999 | `h` | `OperatorFilter` |
| operator page / 50999 | `j` | `OperatorCard` |
| operator page / 50999 | `w` | `OperatorListSection` |
| operator page / 50999 | `g` (outer component) | `filteredOperators` |
| operator page / 50999 | `v` (outer component) | `professionFilter` |
| operator page / 50999 | `y` (outer component) | `elementFilter` |
| operator page / 50999 | `m` (outer component) | `openDetail` |
| operator page / 50999 | `N` (outer component) | `closeDetail` |
| operator page / 50999 | `e` (outer component state) | `detailVisible` |
| operator page / 50999 | `a` (outer component state) | `selectedOperatorIndex` |
| operator page / 50999 | `N` (module-level) | `measurementCanvas` |
| operator page / 50999 | `g` (module-level) | `nameFont` |
| operator page / 50999 | `p` (card state setter) | `setNameSizeRem` |
| operator page / 50999 | `d` (card ref) | `nameContainer` |
| clip map / 68408 | `eu` | `operatorVideoClips` |
| clip map / 68408 | `L`, `a`, `n`… | individual enter/idle asset URLs, inlined under descriptive operator keys |
| viewport / 14577 | `r` | `updateRootFontSize` |
| viewport / 14577 | `a`, `n` | `previousViewportWidth`, `previousViewportHeight` |
| transparent video / 25221 | `s` | `grayscaleMask` (`0.3R + 0.59G + 0.11B`) |
| homepage operator stage / 226 | `q` | character stage video component |

For the operator index, `framer-motion`-style `AnimatePresence` and `motion.div` imports are expressed by their source-level concepts in the readable JSX. The names of the original private source modules cannot be recovered reliably from numerical webpack IDs alone. The asset map resolves webpack's `i.p` public-path expression into full CDN URLs, which eliminates the original one-letter alias variables entirely.

Additional named reconstructions:

| File | Original location | Documented role |
| --- | --- | --- |
| `site-loader.jsx` | chunk 8963, module 71272 | Task progress, readiness and departure timing |
| `operator-entrance.js` | home chunk 226 | Staggered operator section entrance; retained CSS hashes identify targets |
| `particle-scene.js` | home chunk 226 | Separate Three.js point-cloud scene, binary format and quality tiers; shader logic is summarized |
| `audio-manager.js` | home module 7725 and player module 58572 in chunk 4231 | BGM enable state, visibility suspension and volume envelopes |

These files use meaningful names consistently within each reconstruction. They do not claim a global symbol rename of the full minified vendor/runtime graph.
