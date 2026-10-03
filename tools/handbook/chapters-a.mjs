// Foundation chapters: scope, routes, technical structure, scaling, layers, colour, typography, rhythm, grid.
import { data, comp, p, t, h, sub, br, a, link, img, observed, measured, inferred, rule, table, code, cssBlock, esc, readableLink, chunkUrl, rem, shotIf, rulesFor, excerpt, ORIGIN, CDN } from './lib.mjs';
const pg = n => data.pages[n];
const fmtBytes = b => b > 1e6 ? (b / 1e6).toFixed(2) + ' MB' : b > 1e3 ? (b / 1e3).toFixed(1) + ' KB' : b + ' B';
export const chapters = [
  { slug: 'scope', title: 'Scope, evidence rules and how to read this page', html() {
    const pages = Object.values(data.pages);
    return [
      t('This handbook is one article page of the Arknights: Endfield official site served from a local mirror. Every wrapper, stylesheet, font, script and interaction around this text is the original site runtime: the navigation rail on the left, the footer below, the first-load screen you just saw, the background music and the sound effects are not re-implementations. Only the article data (title and body) was replaced through the site\'s own bulletin data path.'),
      t('Three labels are used throughout. OBSERVED means the statement is read directly from shipped CSS, JavaScript, HTML or network responses. MEASURED means a headless Chromium (Playwright 1.56, 1440×900 and 390×844) reported the value on the live site on 2026-10-03. INFERRED means a design reason that the publisher never states; it is an interpretation and is marked as such so that it is never mistaken for a fact.'),
      sub('Crawl set (depth 1 from /en-us)'),
      table(['Page', 'Loader finished', 'Root font-size', 'Components in DOM', 'Fonts loaded', 'JS errors'], pages.map(x => [a(x.url.replace(ORIGIN, '') || '/', x.url), x.loaderGone ? `${x.loaderMs} ms` : 'no', `${esc(x.rootFontSize)} / mobile ${esc(x.mobile.rootFontSize)}`, String(new Set(x.components.map(c => c.split('_')[0])).size), String(x.fonts.filter(f => f.status === 'loaded').length), String(x.errors.length)])),
      observed('The home page has no <a> links at all: every navigation target is produced by JavaScript (window.open or location changes), so the depth-1 set was built from the routes the code opens (/en-us/operator, /en-us/news, /en-us/news/<cid>) plus the footer\'s two legal links. External destinations (helpshift, launcher, user center, store badges, social links) are inventoried but not crawled.'),
      observed(`${data.manifest.length} distinct network responses were recorded across the crawl: ${data.manifest.filter(m => m.stored).length} small text/asset bodies are archived in capture/assets, the ${data.manifest.filter(m => /javascript|css/.test(m.type)).length} scripts/stylesheets in capture/js and capture/css, and large media (three MP4 files of 45–53 MB, portrait PNGs up to 13 MB, the 2.9 MB BGM) are listed with URL, size and SHA-256 only.`),
      inferred('The site treats the article template as a neutral, white, single-column reading surface. That is why this handbook can live inside it: the template already styles paragraphs, bold runs, images and tables, and nothing else.'),
      link('Archive manifest (every URL, type, bytes, hash)', '/capture/network-manifest.json'),
      link('Original home page served by this mirror (full runtime)', '/en-us'),
      link('Original operator catalogue', '/en-us/operator'), link('Original news index', '/en-us/news'),
    ].join('');
  } },
  { slug: 'routes', title: 'Page graph, routes and data flow', html() {
    return [
      observed('Routes under /{lang}/ are a Next.js App Router tree: (main)/(home) for the homepage, (main)/(subpage)/operator, (main)/(subpage)/news and (main)/(subpage)/news/[cid]. The protocol pages /{lang}/protocol/terms_of_service and privacy_policy use a separate __21-ProtocolDetail layout. Thirteen languages are configured (en-us, zh-tw, ja-jp, ko-kr, es-mx, pt-br, fr-fr, de-de, ru-ru, it-it, id-id, th-th, vi-vn); the footer language picker rewrites the first path segment and keeps the hash.'),
      observed('Client navigation inside the home page never changes the URL except the hash: the section viewer tracks which section is centred and the rail highlights it. The "All Operators" control opens /{lang}/operator in a new tab; news cards open /{lang}/news/<cid> in a new tab (both play the common_click sound first).'),
      observed('Content data comes from two origins. Bulletins (news) are fetched from https://web-news.gryphline.com/api/bulletin and /api/bulletin/<cid> with axios (5 s timeout, params lang + code=arknights_endfield_official). The video list comes from https://endfield.gryphline.com/api/content/info_video with fetch. Account calls (/api/account/charge-info, /orig-data) go to the site origin. The server render already contains the first page of each list; the client refetches on mount and shows a Toast on error.'),
      observed('This very page is the proof of that data path: the server HTML still carried the original article, the client refetched /api/bulletin/7013, and the mirror answered with the handbook data instead. The React warning #418 in the console exists on the live article too (server/client text mismatch in the date formatting); it is not introduced here.'),
      table(['Route', 'Layout chunk', 'Page chunk', 'Section component'], [
        ['/en-us', 'app/[lang]/(main)/(home)/layout', 'app/[lang]/(main)/(home)/page', 'HomeLayout (8 sections)'],
        ['/en-us/operator', 'app/[lang]/(main)/layout', 'app/[lang]/(main)/(subpage)/operator/page', 'OperatorListSection'],
        ['/en-us/news', 'app/[lang]/(main)/layout', 'app/[lang]/(main)/(subpage)/news/page', 'NoticeListSection'],
        ['/en-us/news/7013', 'app/[lang]/(main)/layout', 'app/[lang]/(main)/(subpage)/news/[cid]/page', 'NoticeDetailSection (this page)'],
        ['/en-us/protocol/*', '—', '—', '__21-ProtocolDetail'],
      ]),
      inferred('Opening catalogue and article pages in new tabs keeps the heavy homepage (videos, three.js scene, 33 preloaded portraits) alive instead of reloading it; the home page is treated as an application shell, the subpages as documents.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout') + ', ' + readableLink(91627, 'bulletin API client') + ', ' + readableLink(61127, 'NoticeDetailContextProvider') + ', ' + readableLink(60108, 'video list API') + '.'),
    ].join('');
  } },
  { slug: 'structure', title: 'Technical structure: Next.js, chunks, CSS modules, SDK', html() {
    const mm = Object.values(data.moduleMap);
    const byChunk = {}; for (const m of mm) { const c = byChunk[m.chunk] = byChunk[m.chunk] || { chunk: m.chunk, modules: 0, bytes: 0, kinds: {}, names: new Set() }; c.modules++; c.bytes += m.bytes; c.kinds[m.kind] = (c.kinds[m.kind] || 0) + 1; if (['site', 'site-vendor', 'vendor'].includes(m.kind) && m.bytes > 2500) c.names.add(m.name.split(' (')[0]); }
    const rows = Object.values(byChunk).sort((x, y) => y.bytes - x.bytes).map(c => [a(c.chunk.replace(/__/g, '/') + '.js', chunkUrl(c.chunk)), String(c.modules), fmtBytes(c.bytes), esc(Object.entries(c.kinds).map(([k, v]) => `${k}:${v}`).join(' ')), esc([...c.names].slice(0, 6).join('; '))]);
    return [
      observed('The site is a Next.js App Router build (React 19 client runtime, build id q1Rl9fbC1l2OSKA2BXhEw) emitted as hashed webpack chunks under /_next/static/chunks/ and CSS Modules under /_next/static/css/. Styles use CSS-module class names of the form Component_local__hash; the numeric prefixes (__00-Loading, __02-Operator, __20-NoticeDetail) are the authors\' own section ordering kept by the bundler. 708 webpack modules were split out of 31 chunks; ' + Object.keys(data.cssComponents).length + ' CSS-module components exist in ' + data.summary.stylesheets.length + ' stylesheets.'),
      observed('Third-party libraries identified by signature: React 19 + react-dom, Next.js app-router runtime, framer-motion (motion-dom), anime.js 3.2.1, swiper, three.js r178 (two chunks), lottie-web 5.12.2, axios, dayjs, zustand (+persist), classnames, lodash helpers, @emotion/react + stylis, buffer/base64-js/ieee754 polyfills, core-js polyfills, and the Gryphline/Hypergryph web SDK v1.8.0 (account, tracking, cookie banner, footer rendering). Hypergryph\'s own @hg-web/trans-video renderer ships inside chunk 8498.'),
      table(['Chunk', 'Modules', 'Bytes', 'Kinds', 'Notable contents'], rows),
      p('Complete module map with roles and readable reconstructions: ' + a('source/MODULE-MAP.md', '/source/MODULE-MAP.md') + '. Beautified chunks: ' + a('source/beautified/', '/source/beautified/') + '. Per-module split: ' + a('source/modules/', '/source/modules/') + '.'),
      observed('Fonts are declared in two places: ten Latin display faces via @font-face in 637308dda4dd7f2d.css, and four body faces (SansRegular, SansMedium, SansBold, SansBlack) created at runtime with new FontFace() from the per-language bundle; for en-us those resolve to HarmonyOS Sans Regular/Medium/Bold/Black woff2 (woff/ttf fallbacks). The runtime loader retries with the .woff2 source alone if the full source list fails.'),
      observed('No encrypted assets were encountered. Videos, images, fonts, three.js point-cloud binaries (.bin) and audio are plain files on the CDN; the only "secrets" in the bundle are public configuration (CDN host, CMS host, analytics ids, Sentry DSN).'),
      inferred('Splitting the home page into one large section chunk (226) plus shared chunks lets the catalogue and article pages stay light while the home carries the heavy three.js and video code; a child site should keep the same split: shell layout, per-section code, per-route page code.'),
    ].join('');
  } },
  { slug: 'scaling', title: 'Rendering scale: the rem canvas and orientation axis', html() {
    const home = pg('en-us');
    return [
      observed('Every dimension in the stylesheets is written in rem, and the root font-size is computed by applyRootFontSize from a design canvas: landscape uses 2560×1440, portrait uses 1080×1920. The scale is 16px × min(viewportWidth/2560, viewportHeight/1440) in landscape (the branch that keeps the whole canvas visible), and 16px × min(width/1080, height/1920) in portrait. The function re-runs every second and on debounced resize (200 ms), ignores single-axis changes on mobile user agents (address bar) and rewrites the viewport meta on HarmonyOS/Honor/HeyTap/Huawei browsers.'),
      excerpt(14577, 'function applyRootFontSize', 40),
      measured(`At 1440×900 the root font-size is ${home.rootFontSize} (16 × 1440/2560); at 390×844 it is ${home.mobile.rootFontSize} (16 × 390/1080). Therefore 1rem = 9px on the reference desktop and every rem value in this handbook is also given in px at that size.`),
      observed(`Orientation is the only layout axis: the CSS contains ${data.breakpoints.conditions.find(c => c[0] === '(orientation:portrait)')[1]} portrait conditions, ${data.breakpoints.conditions.find(c => c[0] === '(orientation:landscape)')[1]} landscape conditions and ${data.breakpoints.conditions.find(c => c[0] === '(any-hover:hover)')[1]} any-hover conditions. There are no width breakpoints. The desktop rail is display:none in portrait and the mobile header is display:none in landscape.`),
      observed('A --vh-offset custom property (vh-check library) stores the mobile browser-chrome offset; the home section height in portrait is calc(100vh - var(--vh-offset) - 9.625rem), i.e. the viewport minus the 9.625rem mobile header.'),
      inferred('Using a canvas-relative rem instead of px breakpoints keeps proportions identical on any desktop size; the authors design once at 2560×1440 and once at 1080×1920. A child site that wants the same feel must adopt the same two canvases, otherwise card sizes, letter sizes and paddings drift apart.'),
      rule('Write every size in rem, set html font-size from the two canvases, and branch layout only on orientation and any-hover.'),
      p('Readable code: ' + readableLink(14577) + ', ' + readableLink(90286) + '.'),
    ].join('');
  } },
  { slug: 'layers', title: 'Layer stack and hit testing', html() {
    const rows = data.layers.map(z => [esc(z.zIndex), esc(z.position || '—'), esc(z.selector.replace(/__[A-Za-z0-9_]{5}/g, '')), esc(z.media.join(' ').replace(/@media /g, ''))]);
    return [
      observed('Forty-four z-index declarations define the stacking order. The Toast sits at 2000, the footer language dropdown at 1000, the article back-to-top button at 200, the loading screen, the modal layer and the Toast content at 100, the reservation modal at 90, the mobile menu at 60, both headers at 50, the catalogue dropdown panel at 20, the sticky section header at 10. Everything else lives at 0–2 inside its section.'),
      table(['z-index', 'position', 'selector', 'media'], rows),
      observed('Decorative layers are removed from hit testing: pointer-events:none is set on the rail overlay, the nav item backgrounds (:before), the operator illustration/video layers, the hidden share list and the inactive back-to-top button; interactive layers re-enable pointer-events:auto only in their active state.'),
      inferred('The order is pragmatic rather than token-based (100/90/60/50): system feedback (toast) beats everything, then blocking screens, then modals, then chrome, then in-page popovers. A child site can reuse these exact numbers.'),
    ].join('');
  } },
  { slug: 'colour', title: 'Colour tokens and where each one is used', html() {
    const rows = data.colors.filter(c => !/^rgba?\(0,0,0,0\)$|^rgb\(0,0,0\)$/.test(c.value)).slice(0, 48).map(c => [esc(c.value), String(c.count), esc(Object.entries(c.properties).slice(0, 4).map(([k, v]) => `${k} ${v}`).join(', ')), esc(Object.keys(c.components).slice(0, 7).join(', '))]);
    return [
      observed(`${data.colors.length} distinct colour literals appear in the stylesheets. Counting declarations (not pixels): #191919 ink ×90, #fff paper ×81, #fffa00 signal yellow ×59, #d9d9d9 rule grey ×23, #999 muted label ×19, #000 ×17, rgba(0,0,0,.5) scrims ×17, #35373c dark panel borders ×15, #e5e5e5 and #f2f2f2 light fields ×13 each, #00ffa2 mint ×13 (always in background-image gradients), #ff00f0 magenta ×7 (same), rarity accents #fe5a00 / #ffbb03 / #9452fa on operator cards, and #ffcc1a as the language-picker active colour. The pure black rgb(0,0,0) entries are mask-image gradients, not paint.`),
      table(['Value', 'Declarations', 'Properties', 'Components'], rows),
      observed('The three-part rule (yellow #fffa00, mint #00ffa2, magenta #ff00f0) exists only as linear-gradient stripes in __02-Operator, Dropdown and OperatorItem. Yellow is also the loading progress bar, the LORE band, the hover fill of pagination buttons, the th decoration bar in article tables and the mobile menu active item.'),
      observed('Greys form a ladder used for depth without shadows: #fafafa (pagination button), #f3f3f3 (tab hover), #f2f2f2 (rail button frame, light fields), #f0f0f0, #e6e6e6 (pagination ring, article type badge), #e5e5e5 (nav item hover, table borders), #d9d9d9 (dividers, section-title block), #ccc, #b3b3b3 (inactive share icons), #999, #858585 (rail icon hover), #7c7c7c (rail action icons), #666, #4d4d4d, #424242, #383838 (dark button), #35373c, #2e2e2e, #222, #191919 (ink), #141414 (loader background), #000.'),
      inferred('Colour is annotation, not decoration: the page field stays white or #191919, and the saturated colours are reserved for state (progress, hover, active, rarity) and for the thin three-colour rule that marks "character data". Spreading yellow across large areas would break the family resemblance.'),
      rule('Ink #191919 (never #000 for text), paper #fff, one signal colour #fffa00 for progress/active/hover, a 20-step grey ladder for depth, mint/magenta only as thin gradient rules.'),
      p('Full table with example selectors: ' + a('analysis/colors.json', '/analysis/colors.json')),
    ].join('');
  } },
  { slug: 'typography', title: 'Typography: faces, roles, sizes', html() {
    const ff = data.typography.fontFamilies.filter(f => f.family.length < 40);
    const faces = data.fonts.fonts.filter(f => f.path).map(f => [esc(f.family), a(f.path.split('/').pop(), '/' + f.path), fmtBytes(f.bytes)]);
    const rt = data.fonts.runtime_fonts.filter(f => f.path).map(f => [esc(f.alias + ' → ' + f.path.split('/').pop().split('.')[0].replace(/_/g, ' ')), a(f.path.split('/').pop(), '/' + f.path), fmtBytes(f.bytes)]);
    const sizes = data.typography.sizes.slice(0, 24).map(([v, n]) => [esc(v), /rem$/.test(v) ? (parseFloat(v) * 9).toFixed(2) + ' px' : '—', String(n)]);
    return [
      observed('Fourteen families are referenced. Body and UI text is HarmonyOS Sans under the aliases SansRegular/SansMedium/SansBold/SansBlack (41 + 25 + 9 + 2 declarations). Gilroy-Medium (19) and Gilroy-Light (5) carry English subtitles and small labels. Novecentosanswide Medium/DemiBold/Bold (6/6/5) is the wide uppercase display face for counters, pagination digits, the hollow ENDFIELD word and the table decoration. SpaceGrotesk (2) appears only in the operator stage annotations. Roboto and ProtestStrike are declared but unused by the captured pages. The footer and notice carousel fall back to a long system stack starting with Segoe UI.'),
      table(['Family', 'Declarations', 'Components'], ff.map(f => [esc(f.family), String(f.count), esc(Object.keys(f.components).join(', '))])),
      sub('Declared @font-face files (woff2 kept in capture/fonts)'), table(['Family', 'File', 'Size'], faces),
      sub('Runtime FontFace aliases for en-us'), table(['Alias → file', 'File', 'Size'], rt),
      observed('Size scale (rem → px at 1440×900). The most frequent sizes are 1.5rem (13.5px) ×26, 1.25rem ×18, 1.875rem ×17, 2rem ×15, 1.375rem ×15, 2.25rem ×15, 2.5rem ×13, 3rem (27px) ×12, 1.125rem ×12, 1.75rem ×11. Display sizes: 4.375rem loader percentage, 4.875rem operator name, 6rem table ENDFIELD ghost, 8.125rem and 20rem hollow text. Line-height is 1 in 69 declarations; letter-spacing is negative (-.02em to -.1em) on display text and +.05/.08em on small caps labels.'),
      table(['font-size', 'px @1440', 'declarations'], sizes),
      observed('The operator card name is not a fixed size: a layout effect bisects the font size 28 times between 0.5625rem and 1.6875rem with canvas measureText in "SansBold" until the name fits 11.1875rem, re-running after document.fonts.ready and on resize. The portrait news list truncates titles with TextShrink (canvas-measured ellipsis at a 20-character budget).'),
      inferred('Three voices: a neutral humanist sans for reading (HarmonyOS Sans), a geometric sans for English captions (Gilroy), and a wide grotesque for numerals and signage (Novecento). Their contrast, not their size alone, builds hierarchy.'),
      rule('Use one reading face in four weights for all UI text, one caption face for English sub-labels, and one wide display face only for digits, counters and ghost words. Keep line-height 1 on display text.'),
      p('Full rule list: ' + a('analysis/typography.json', '/analysis/typography.json') + '. Specimens below use the live faces loaded by this page.'),
      table(['Face', 'Specimen (rendered by this page\'s own fonts)'], [
        ['SansRegular (body)', '<span>Over the frontier, into the front. 0123456789</span>'],
        ['SansMedium (labels, buttons)', '<strong>OVER THE FRONTIER / INTO THE FRONT</strong>'],
        ['Novecentosanswide-Bold (th decoration)', 'See the yellow ENDFIELD ghost word in every table header on this page: that is Novecentosanswide-Bold at 6rem, letter-spacing -.06em.'],
      ]),
    ].join('');
  } },
  { slug: 'rhythm', title: 'Text rhythm, spacing scale and why', html() {
    const sp = data.spacing.slice(0, 40).map(([k, n]) => [esc(k), String(n)]);
    const nd = rulesFor('__20-NoticeDetail', r => /content__|title__|subtitle__|divider__|date__|type__/.test(r.selector) && !r.media.length).slice(0, 12);
    return [
      observed('The spacing scale is a rem ladder with a 0.25rem base: .25 .5 .75 1 1.125 1.25 1.5 1.875 2 2.25 2.5 2.625 3 3.75 5rem. The most frequent vertical rhythm is margin-top 1.25rem (×10), 1rem (×9), 1.5rem (×8), 2rem (×6), 2.5rem (×4); the most frequent gaps are 2.5rem, .625rem, .5rem.'),
      table(['Declaration', 'Count'], sp),
      observed('This article template (the page you are reading): the type badge is 2rem tall with 1.5rem text; the date sits 2rem to its right; the title is 3rem with a 7.75rem minimum height and 1rem margin; a .1875rem #d9d9d9 divider follows after 1rem; the body starts 1rem later at 1.625rem (14.6px) with the browser default line-height; images are max-width 100% with .5rem gaps; tables use 5.625rem cells with 1rem 2rem padding.'),
      cssBlock(nd),
      measured('On the live article the body text is 14.625px HarmonyOS Sans with 9px root margin; the content column is 97.75rem = 879.75px wide, left-padded by calc(50% − 80rem + 3.75rem + 20.4375rem), which places it at the same x as the home sections\' text (see Alignment).'),
      inferred('The rhythm is built from multiples of the 1.25rem label height: badges 2rem, rows 2.5rem, blocks 5rem. Paragraph spacing in articles is left to empty <p><br></p> lines written by editors, which is why this handbook also uses them. The site relies on white space and thin #d9d9d9 rules instead of boxes to separate text groups.'),
      rule('Adopt a 0.25rem ladder, a 1.25rem label height, 2rem badge height, and separate text groups with 1rem–2.5rem margins and 0.1875rem hairlines rather than borders around groups.'),
    ].join('');
  } },
  { slug: 'alignment', title: 'Alignment, the 160rem desktop canvas and the rail', html() {
    const home = pg('en-us'); const secs = home.sections.map(s => [esc(s.cls.split(' ')[0].replace(/__[A-Za-z0-9_]{5}$/, '')), `${Math.round(s.rect.height)} px`]);
    return [
      observed('Desktop content is positioned against a 160rem-wide canvas centred in the viewport: the article column starts at calc(50% − 80rem + 3.75rem + 20.4375rem), i.e. the canvas left edge plus a 3.75rem gutter plus a 20.4375rem left block. The same calc(50% − 80rem …) expression appears across sections (operator stage, lore, information, calendar, notice) so that all text columns share one left edge regardless of viewport width. At 1440px the canvas (160rem = 1440px) exactly fills the viewport.'),
      measured(`The navigation rail is 7.5rem = 67.5px wide and 100vh tall (rect 0,0,67.5,900 measured); its white :before panel extends 16rem to the right under the page when expanded. Home section heights at 1440×900: ${secs.map(s => s.join(' ')).join('; ')}.`),
      table(['Home section (DOM order)', 'Height at 1440×900'], secs),
      observed('Sections are 100vh (home hero) or 90vh-ish stages (810px measured for operator and information) stacked in a flex column; the SectionViewer header (rail) is position:sticky at top 0, and in portrait every section gets scroll-margin-top 9.625rem for the mobile header.'),
      inferred('Anchoring to a fixed-width canvas rather than to fluid percentages is what keeps the composition identical on 1440, 1920 and 2560 wide screens: only the empty margin outside the 160rem canvas grows. The rail is deliberately narrow (7.5rem) so the canvas, not the chrome, owns the width.'),
      rule('Place all desktop columns with calc(50% − 80rem + gutter) offsets on a 160rem canvas; keep chrome outside the canvas narrow and fixed.'),
      shotIf('capture/pages/en-us/desktop-1440x900.png', 'home page at 1440×900, hero section, after the loader'),
      shotIf('capture/pages/en-us_news_7013/desktop-1440x900.png', 'the original article page at 1440×900 whose template hosts this handbook'),
    ].join('');
  } },
];
