// Code map, unrendered components, coverage matrix (late), child-site blueprint.
import { data, root, p, t, sub, a, link, observed, measured, inferred, rule, table, code, cssBlock, esc, readableLink, rulesFor, chunkUrl, CDN } from './lib.mjs';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
export const chapters = [
  { slug: 'javascript', title: 'JavaScript map: chunks, modules, readable reconstructions', html() {
    const site = Object.values(data.moduleMap).filter(m => ['site', 'site-vendor'].includes(m.kind) && m.bytes > 200).sort((x, y) => y.bytes - x.bytes);
    const vendors = Object.values(data.moduleMap).filter(m => m.kind === 'vendor').reduce((acc, m) => { const k = m.name.split(' (')[0]; acc[k] = (acc[k] || 0) + m.bytes; return acc; }, {});
    const readableRows = data.readable.sort((x, y) => y.bytesMinified - x.bytesMinified).map(r => [a(r.file, '/source/readable/' + r.file), esc(String(r.id)), esc(r.chunk.replace(/__/g, '/')), String(r.bytesMinified), String(r.renames), esc((r.summary || '').slice(0, 160) + '…')]);
    return [
      observed(`Deobfuscation pipeline: every chunk was beautified (source/beautified), split into its 708 webpack modules (source/modules), named by evidence (exports, CSS-module classes, strings, library signatures), and the ${site.length} site-owned modules were renamed scope-aware with Babel: library aliases from the module map, CSS-module objects → styles, then every remaining minified binding was made unique and mapped to a meaningful name by reading the code. Values, strings, class names and control flow are unchanged. Vendor libraries are identified by name/version instead of being renamed (their readable sources are public).`),
      table(['Readable file', 'Module', 'Chunk', 'Minified bytes', 'Renames', 'Summary'], readableRows),
      sub('Vendor code by library (bytes, minified)'), table(['Library', 'Bytes'], Object.entries(vendors).sort((x, y) => y[1] - x[1]).map(([k, v]) => [esc(k), String(v)])),
      observed('Runtime data stores (zustand): section viewer (currentSection), loader (loaded), sound control (persisted), media modal, reserve modal, user modal, orig-query modal. Context providers: I18n, BulletinList, VideoList, NoticeDetail. Tracking: Gryphline SDK ETL events (content_view, web_page_swipe, click, download, book_success, social_media_redirect, video_play_start/end) plus Google Analytics gtag.'),
      inferred('The code is organised by section, not by widget: each home section is a self-contained component with its own CSS module, its own entrance timeline and its own tracking calls, and shared primitives (Button, Pagination, SectionTitle, HollowText, TransparentVideo, RollingText) are few and small.'),
      rule('Structure a child site as sections with co-located CSS modules and timelines; keep a short list of shared primitives; put all cross-section state in tiny stores.'),
      p('Full map: ' + a('source/MODULE-MAP.md', '/source/MODULE-MAP.md') + ' · raw archive: ' + a('capture/js', '/capture/js/') + ' · beautified: ' + a('source/beautified', '/source/beautified/') + '.'),
    ].join('');
  } },
  { slug: 'unrendered', title: 'Components declared in CSS but not rendered on the captured pages', html() {
    const missing = Object.keys(data.cssComponents).filter(c => { try { const j = JSON.parse(readFileSync(join(root, 'analysis/components', c.replace(/[^A-Za-z0-9_-]/g, '') + '.json'), 'utf8')); return !j.markup; } catch { return true; } });
    const notes = { '__00-landing': 'pre-launch landing route (outside the depth-1 crawl)', LandingBottom: 'landing route', LandingGameplay: 'landing route', '__03-gameplay': 'landing route', '__04-finalpage': 'landing route', HomeButton: 'landing route buttons', ScrollViewer: 'landing route scroll tip', OrigQuery: 'renders only when lang = ja-jp', Toast: 'renders only on network errors', TextShrink: 'portrait news titles only', TransparentVideo: 'mounts only after switching the stage to 3D', BackButton: 'unused on the captured pages', 'pc-cn': 'mainland-China build of the hero download panel', 'h5-cn': 'mainland-China portrait download panel' };
    return [
      observed(`${missing.length} of ${Object.keys(data.cssComponents).length} CSS-module components ship in the stylesheets but never appeared in the DOM of any captured en-us page (desktop or portrait snapshot): ${missing.join(', ')}. Their exact CSS is listed so that the inventory is complete; nothing is invented for them.`),
      ...missing.map(c => { const rs = rulesFor(c, r => !r.media.length); return sub(`${c} — ${rs.length} landscape rules (${(data.cssComponents[c].files || []).join(', ')})${notes[c] ? ' — ' + notes[c] : ''}`) + cssBlock(rs, { max: 10 }); }),
      inferred('The landing family shows the same grammar (yellow progress, hatched buttons, hollow words), confirming that the DNA predates the current home page.'),
    ].join('');
  } },
  { slug: 'coverage', title: 'Coverage matrix: every component and where it is used here', late: true, html(coverage) {
    const live = { Header: 'live on this page (rail)', footer: 'live on this page (footer)', SectionViewer: 'live (wrapper of this page)', sections: 'live (sections_sectionViewer wrapper)', '__20-NoticeDetail': 'this page is the component', HallowText: 'live (rail hollow text) + specimens', Media: 'live (hidden modal in this page)', ModalFrame: 'live (hidden modals)', ReserveModal: 'live (hidden modal)', UserModal: 'live (hidden modal)', Button: 'specimen', bg: 'home hero background (screenshot + CSS)', '__00-Loading': 'seen on load; screenshots + CSS', '__01-Home': 'home hero (screenshot + CSS)', '__03-Lore': 'screenshot + CSS (nested-scoped)', 'pc-oversea': 'home hero download layout (screenshot + CSS)', 'h5-oversea': 'portrait download layout (portrait snapshot + CSS)', '__21-ProtocolDetail': 'protocol pages (captured at depth 1; screenshot + CSS)', downloader: 'screenshot + CSS (img rule conflict, see chapter)', '__02-Operator': 'LORE divider specimen + screenshots + CSS', '__06-Notice': 'screenshot + CSS (nested-scoped)', '__10-NoticeList': 'screenshot + CSS (nested-scoped)' };
    const rows = Object.keys(data.cssComponents).sort().map(c => { const emb = (coverage.embedded[c] || []); const where = emb.length ? 'specimen in ' + emb.map(s => a(s, '#' + s)).join(', ') : (live[c] ? esc(live[c]) : 'CSS listed in ' + a('unrendered', '#unrendered')); return [esc(c), String(data.componentsIndex[c] ? data.componentsIndex[c].rules : ''), esc((data.cssComponents[c].files || []).join(', ')), where]; });
    return [
      t('Proof of the rule "use all of them": every CSS-module component of the site is either live on this page, embedded as verbatim markup, shown by screenshot with its exact CSS, or listed as not rendered at depth 1.'),
      table(['Component', 'Rules', 'Stylesheet', 'Used in this handbook'], rows),
      observed(`${Object.keys(coverage.embedded).length} components are embedded as verbatim markup in ${new Set(Object.values(coverage.embedded).flat()).size} chapters; the remaining ones are live chrome of this page, screenshots with CSS, or declared-only components.`),
    ].join('');
  } },
  { slug: 'blueprint', title: 'Build a child site: the transferable rules', html() {
    const rules = [
      ['Canvas', 'Design once at 2560×1440 and once at 1080×1920; set html font-size = 16px × min(w/2560, h/1440) (landscape) or min(w/1080, h/1920) (portrait); write every size in rem; branch only on orientation and any-hover.'],
      ['Grid', 'Centre a 160rem canvas; place columns with calc(50% − 80rem + 3.75rem + offset); keep chrome outside the canvas narrow (7.5rem rail).'],
      ['Colour', 'Ink #191919, paper #fff, signal #fffa00 for progress/active/hover, a 20-step grey ladder for depth, mint #00ffa2 and magenta #ff00f0 only as thin gradient rules, rarity/category colours as .5625rem bases.'],
      ['Type', 'One humanist sans in four weights under aliases (SansRegular/Medium/Bold/Black), one caption face (Gilroy), one wide display face (Novecento) for digits and ghost words; line-height 1 on display; sizes from the 1.125–3rem ladder.'],
      ['Rhythm', '0.25rem ladder; 1.25rem labels, 2rem badges, 2.5rem rows; hairlines (.1875rem #d9d9d9) instead of boxes.'],
      ['Layers', 'toast 2000 > dropdown 1000 > back-to-top 200 > loader/modal layer 100 > reserve 90 > mobile menu 60 > headers 50 > popovers 20 > sticky 10; decoration pointer-events:none.'],
      ['Controls', 'Block + hatch/dot texture + 2px radius; hover = fill/marker change in 0.2 s; one yellow primary action per page.'],
      ['Motion', 'Loader curtain with percentage; entrances staggered 300/600/1200 ms easeOutQuad toward the canvas centre; text flickers 100/85/70 ms; clip-path wipes with quart ease-out; one 5–8 s hero drift; hover never scales.'],
      ['Media', 'Hero characters as RGB+alpha side-by-side MP4 composited in WebGL; stills under videos; videos muted and looped; a dark chapter for cinema.'],
      ['Sound', 'One looping theme with 1 s fades, 0.1 volume on mobile, persisted mute; a short cue per interaction class; audio only after a gesture.'],
      ['Navigation', 'Native scrolling with a nearest-centre highlighter, hash mirroring, smooth scrollIntoView on rail clicks, new tabs for heavy sub-routes.'],
      ['Content', 'CMS articles in a plain single column with decorated table headers; indexes with a two-tone masthead, segmented tabs and a 3-column card grid.'],
      ['i18n', 'Per-locale bundles that bind font aliases to families; html[lang] overrides only for width-sensitive labels.'],
      ['Build', 'Next.js App Router + CSS Modules; one heavy section chunk for the home page; shared primitives small; state in tiny stores.'],
    ];
    return [
      t('These are the inferred, transferable rules. Each one is derived from an OBSERVED or MEASURED fact earlier on this page; the facts are the authority, the rules are the interpretation.'),
      table(['Area', 'Rule'], rules.map(r => r.map(esc))),
      sub('How to work with this repository'),
      code(`# archive & analysis (already produced; re-run to refresh)\nnode tools/capture.mjs            # depth-1 capture with instrumentation\nnode tools/analyze-css.mjs        # rule database and token tables\nnode tools/split-modules.mjs && node tools/name-modules.mjs && node tools/rename.mjs && node tools/stage2.mjs\nnode tools/extract-components.mjs # per-component evidence\n# handbook\nnode tools/build-handbook.mjs     # writes handbook/index.html + handbook-bulletin.json\nnode tools/serve.mjs 8786         # local mirror: http://127.0.0.1:8786/en-us/news/7013\nnode tools/verify.mjs             # headless checks + screenshots → verification/`),
      p('Original pages through the mirror: ' + a('/en-us', '/en-us') + ' · ' + a('/en-us/operator', '/en-us/operator') + ' · ' + a('/en-us/news', '/en-us/news') + '. Everything in this handbook that is not an original component is text, and the text is tagged.'),
    ].join('');
  } },
];
