# Arknights: Endfield — site DNA

Captured 2026-10-03 (Pacific/Auckland). Source entry: <https://endfield.gryphline.com/en-us#operator>. This is a measured research guide for creating a *related visual family*, not an assertion that every proprietary artwork or asset can be reused. The local [mood board](mood-board.html) is the visual companion. Raw HTML, stylesheets, bundles, fonts, pictures and videos were not archived; `evidence.json` stores URL, size and SHA-256 evidence plus extracted statistics.

## Scope and confidence

**Fetched and rendered:** the home page `/en-us` including `#operator`, its “All Operators” destination `/en-us/operator`, and the directly reachable news index `/en-us/news`. A homepage CTA also points to <https://endfield.hypergryph.com/news/8568>; its first HTML response was fetched in memory (200, 192,595 bytes, SHA-256 `fb2ab378e22e895286fd8eed77d3475b68fe9a5027eda189a74e0f17ec5ea174`). No links from those destinations were traversed. News article IDs are generated at runtime; individual article pages were not expanded. Official app-store, launcher and social links were inventoried as destinations, not crawled as design pages. This is a bounded depth-one study rather than a claim to have covered every localized route.

**Verified** below means visible in the live page, present in the shipped source, or measured by Chrome. **Inferred** means a practical design rule derived from those facts. CSS colour occurrence counts are declarations, not pixels or brand hierarchy. Hashed asset URLs can change with a deployment.

## The site's visual grammar

The core grammar is an editorial white page framed by narrow industrial controls. A fixed 68px left rail carries brand, section navigation and utility actions at the 1440px desktop render. The site places large character art against broad white negative space, then lets a nearly fluorescent yellow panel cut across the page as a section handoff or directional marker. Small technical marks—`//` prefixes, `[ REC ]`, two-digit counters, micro-rules, crosshairs, faint grid/stripe textures and modular labels—make the interface resemble a field dossier. The character artwork remains the strongest colour event; chrome around it stays restrained.

For a related site, preserve the *relationship* between elements: an oversized hero image or motion layer, slim navigation, compact diagnostic typography, and exact hard-edged colour interventions. Avoid spreading yellow over every component; the reference uses it as a signal against white and charcoal. Use vivid pink and mint as thin accent lines and classification details, not whole-page fills. This recommendation is **inferred** from the screenshot and CSS balance.

### Exact colour tokens

| Role | Value | Evidence and placement |
| --- | --- | --- |
| Main ink | `#191919` | 88 declarations across inspected CSS; body text, navigation, dark controls |
| Paper | `#FFFFFF` / CSS `#fff` | 67 declarations; page field and negative space |
| Signal yellow | `#FFFA00` | 43 declarations; buttons, divider bands, selected detail |
| Rule grey | `#D9D9D9` | 21 declarations; separators and subdued UI geometry |
| Muted label | `#999999` / CSS `#999` | 18 declarations; secondary text |
| Soft field | `#F2F2F2` | 13 declarations; light panel background |
| Alternate yellow in index deco | `#FFFA08` | Operator index stylesheet; right-edge panel |
| Three-part rule | `#FFFA00`, `#00FFA2`, `#FF00F0` | Operator card accent segmentation |
| Rarity accents | `#FE5A00`, `#FFBB03`, `#9452FA` | Operator CSS card rarity selectors |

Do not substitute a generic black/yellow palette. The page gets its feel from white space, multiple low-contrast greys, and small high-saturation classification marks. Use `#191919` rather than pure `#000` for most interface ink; pure black still appears in a few declarations.

### Exact typography inventory and roles

The shipped font stylesheet `637308dda4dd7f2d.css` declares **ProtestStrike-Regular**, **Roboto-Regular**, **Roboto-Black**, **Gilroy-Light**, **Gilroy-Medium**, **Gilroy-ExtraBold**, **Novecentosanswide-Medium**, **Novecentosanswide-DemiBold**, **Novecentosanswide-Bold**, and **SpaceGrotesk** as separate faces. Another stylesheet contains Swiper's icon font. The exact WOFF2 URLs are in `evidence.json` and the mood board uses the official CDN URLs for key specimens.

Use Novecentosanswide for uppercase signage, section titles, oversized pale background wording and counters; Gilroy for UI/body text; Space Grotesk for small technical annotations. The official CSS also uses `SansRegular`, `SansMedium`, `SansBold` frequently, with `SansBold` on operator card names and `SansMedium` on codenames. These aliases are visible in CSS, but their backing font files were not established by this capture; do not relabel them as Gilroy without evidence. The live card title is variable-sized: the page measures a name in a hidden canvas, waits for fonts to load and binary-searches a font size between **0.5625rem** and **1.6875rem** so it fits an **11.1875rem** line.

### Home page hierarchy

1. The left rail remains a narrow utility column. Icon-only sections sit in vertically spaced slots, with the selected section made dark against a very light rail.
2. The `#operator` stage presents a circular avatar rail near the left edge of the content area. A count and `REC` annotation sit above the character data. The character name, classification icons, faction/race/voice rows and short biography occupy the left-centre white field.
3. A dominant 2D illustration occupies the right half and can bleed into the centre. The content may switch to a 3D display, represented by pre-rendered transparent motion video. The `2D`/`3D` control is part of the composition, not a general-purpose media player.
4. A small dark **All Operators** control sits at the base of the avatar rail and opens `/en-us/operator` in a new tab. A full-width yellow **LORE** band begins the next section underneath, making the page feel like stacked chapters rather than ordinary scrolling cards.

Verified desktop screenshot: `screenshots/home-operator-verified.png`. The home hero screenshot in `screenshots/home-1440.png` includes an initial consent overlay and is retained only as capture evidence.

### All Operators page hierarchy

The dedicated index deliberately changes scale and density. It keeps the global rail but switches to a light catalogue field. At 1440×900, the top filters start near x=177,y=85.5 and each measured dropdown is 36px tall. The grid starts near x=138.75,y=147.375. Card tiles begin at x=177,y=165.375. A huge, pale, partly masked **ENDFIELD** word and diagonal hatching occupy the background; a saturated yellow illustrated strip lines the right side. This is a catalogue *with a stage backdrop*, not a neutral e-commerce list.

The card CSS defines **19rem × 24.25rem**, approximately **171×218.25px** at the measured 9px root rem. Cards have a light patterned portrait area; a narrow yellow/mint/pink rule; a 5.125rem information block; title and codename; an index such as `01 / 33`; profession and element symbols; and a **0.5625rem** rarity-colour base. A subtle drop shadow `0 0.5rem 0.5rem rgba(0,0,0,.15)` lifts them from the white field. Hover moves a card up **0.5rem**. The source uses flex wrap, a **2.375rem** gap and **2rem 1.875rem** list padding. Chrome measured a 21.375px desktop gap, which matches 2.375×9. The desktop render shows **six columns**; at 390×844 portrait it shows **three columns**, each about 109.77px wide.

The filters are exact site taxonomy: **Class** = guard, caster, support, shielder, vanguard, assault; **Element** = fire, ice, electric, nature, physic. Selection matches both fields with logical AND. “All” clears a filter. Dropdowns expose button/listbox/option roles, Enter/Space/Escape handling and outside-click closing. Selecting a card uses its key to find its index in the complete operator array, then swaps the grid for a detail panel using a **0.3s opacity transition** with `easeOut`. The index numbers rendered on cards follow filtered position but show `/ 33` as the total.

### News index in the same family

The directly reachable `/en-us/news` page reuses the global framework but leads with a large yellow news masthead and a white three-column card field. This is a useful template for secondary content: a bold single-colour title zone, then disciplined white cards. The homepage opens its news index as well as article-detail URLs generated from runtime `cid` values. Those detail routes are depth two when reached from the index and were not crawled here.

## Responsive construction

The site sets the root font size from an explicit design canvas instead of relying only on static `px` breakpoints. Module 14577 in chunk `8963-234f979bdd6b491c.js` uses a 2560×1440 landscape basis or 1080×1920 portrait basis. In readable form:

```js
const portrait = height >= width;
const remPx = portrait
  ? 16 * (width / height > 1080 / 1920 ? height / 1920 : width / 1080)
  : 16 * (width / height > 2560 / 1440 ? height / 1440 : width / 2560);
document.documentElement.style.fontSize = `${remPx}px`;
```

The shipped code additionally caches the previous viewport size and changes the viewport meta tag for selected HarmonyOS/Android browser user agents. `readable/rendering-and-scale.js` documents that behavior. At **1440×900**, root rem is **9px**; at **390×844**, it is **5.77778px**. The CSS contains hundreds of `orientation:portrait` conditions, plus `orientation:landscape` and hover rules, so orientation is a first-class layout axis. A related site can simplify this system, but matching the visual proportions requires a shared scaling basis across spacing, typography and card dimensions.

## Rendering and JavaScript structure

The fetched pages are a **Next.js/React** build emitted as hashed webpack chunks under `/_next/static/chunks/` and CSS Modules under `/_next/static/css/`. The page HTML is server-rendered enough to provide titles and content, while interactive navigation, filters and media are controlled by client code. `evidence.json` records the 30 unique script URLs and 11 unique stylesheet URLs encountered, with sizes and SHA-256 hashes; `CHUNK_MAP.md` links each to the pages that loaded it. Modules are numeric due to bundling, and many one-letter names are minifier output rather than meaningful source identifiers.

Relevant chunks and their readable counterparts:

| Shipped source | Site-owned behavior | Readable artifact |
| --- | --- | --- |
| `.../operator/page-3a80441c18fd566a.js`, module 50999 | Filters, card, detail state and fades | `readable/operator-page.jsx` |
| `.../8963-234f979bdd6b491c.js`, modules 68408 and 14577 | 33 enter/idle MP4 URL pairs and responsive rem | `readable/operator-video-assets.js`, `readable/rendering-and-scale.js` |
| `.../8498-2c5f8c0351c886c2.js` | WebGL transparent video and Canvas2D fallback | `readable/rendering-and-scale.js` |
| `.../226-d5292700ff68fd13.js` | Home operator stage, All Operators route, enter/idle switching | `readable/rendering-and-scale.js` (behavioral reconstruction) |

The readable files are **semantic reconstructions**, with descriptive local names and full relationships, not byte-for-byte beautification or an installable fork. They intentionally omit unrelated SDK, framework and vendor internals. A global rename of every one-letter symbol in a third-party/minified bundle would be speculative and could change behavior; `CHUNK_MAP.md` inventories those untouched files so the boundary is explicit. No encrypted asset or decryption key was encountered. The binary `.bin` files seen in other page sections are ordinary referenced model assets based on the URL structure; there is no evidence they are encrypted.

The operator “3D” display deserves special care. Its visible motion comes from pre-rendered **enter** and looping **idle** MP4 files. The video stores RGB in one half and a grayscale alpha mask in the other. The renderer samples colour and mask separately and computes alpha as `0.3R + 0.59G + 0.11B` in a WebGL fragment shader; a Canvas2D implementation uses the same channel weights. The component uses WebGL2/WebGL where available, otherwise Canvas2D, and video-frame callbacks or animation-frame scheduling. The homepage starts the entrance clip after `canplaythrough` and an animated loading transition, then switches to the idle clip at `ended`. There are **33** named pairs in the shipped map; these URLs are written in readable form without saving the videos. **Three.js is present elsewhere in the website** for other scene effects and models, but its presence alone does not make these operator characters live 3D meshes.

## Reusable rules for a related site

1. Build the frame first: fixed narrow left navigation, generous white content canvas, a dark utility layer, and one deliberate yellow directional field per major scene.
2. Pair one oversized expressive asset with small factual labels. Keep labels aligned to a rigid modular grid and write counters as two digits with slashes.
3. Treat colour as annotation. Reserve the yellow/mint/pink micro-strip for information hierarchy and the rarity colours for categorical status.
4. Use the wide caps display face for chapter names, a strong rounded geometric face for character names, and compact utility text for metadata. Preserve the scale contrast.
5. Make the secondary index denser than the homepage stage: six-column desktop / three-column portrait at the measured sizes, portrait-first cards and a large ghosted background word.
6. Let state changes feel staged: avatar selection, media readiness, fade and detail transition should have timing, while basic controls remain responsive and keyboard reachable.

These are **inferred design rules** from the official pages; the tokens, dimensions, routes and code behavior above are directly evidenced. The mood board translates the rules into a browsable artifact without copying the site's source HTML or archiving its large media files.
