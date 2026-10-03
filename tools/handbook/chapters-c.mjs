// Subpages, controls, hover, motion, audio, imagery, responsive, textures, i18n.
import { data, p, t, sub, br, a, link, img, observed, measured, inferred, rule, table, code, cssBlock, specimen, esc, readableLink, rulesFor, extractAll, stateMarkup, shotIf, pageDom, soundSources, imageAssetModules, svgIconCount, mediaLogs, CDN } from './lib.mjs';
const first = (html, cls, cap) => (html ? extractAll(html, cls, 1, cap)[0] : null);
const hoverRows = cls => data.hover.filter(x => x.cls.startsWith(cls)).flatMap(x => x.changes.slice(0, 4).map(c => [esc(x.cls.replace(/__[A-Za-z0-9_]{5}$/, '')), esc(c.node.replace(/__[A-Za-z0-9_]{5}/g, '').split('#')[0]), esc(Object.entries(c.props).map(([k, v]) => `${k}: ${v.before} → ${v.after}`).join(' · ')).slice(0, 220), esc(x.transition || '')]));
const count = arr => { const m = new Map(); for (const k of arr) m.set(k, (m.get(k) || 0) + 1); return [...m.entries()].sort((x, y) => y[1] - x[1]); };
export const chapters = [
  { slug: 'catalogue', title: 'Operator catalogue (/en-us/operator): cards, filters, detail', html() {
    const dom = pageDom('en-us_operator');
    const cards = extractAll(dom, 'OperatorItem_operatorItem__gPezu', 3, 6000);
    const dropdownClosed = first(dom, 'Dropdown_root__O4Qqi', 6000);
    const dropdownOpen = stateMarkup('dropdown_open');
    const rs = rulesFor('OperatorItem', r => !r.media.length).slice(0, 16).concat(rulesFor('__12-OperatorList', r => !r.media.length).slice(0, 8));
    const drs = rulesFor('Dropdown', r => !r.media.length && !/data-key=(guard|caster|support|shielder|vanguard|assault|fire|ice|electric|nature|physic)/.test(r.selector)).slice(0, 16);
    return [
      observed('A 100vh catalogue over a background deco (hollow ENDFIELD at 31rem / opacity .35 masked downward, a hatched shallow field 32.8rem tall at the bottom, a 23rem illustrated strip on the right). Two FilterDropdowns (Class: guard, caster, support, shielder, vanguard, assault; Element: fire, ice, electric, nature, physic; "all" clears) sit at calc(50% − 80rem + 3.75rem + 13rem) / top 9.5rem with a 2.375rem gap; the list container starts at top 16.375rem, is 134.4375rem wide, calc(100vh − 18.125rem) tall, has a .625rem white custom scrollbar with a #b6b6b6 thumb and lays cards out with flex-wrap, padding 2rem 4.25rem and gap 2.375rem. Filters combine with AND; the index on each card follows the filtered order but the total stays 33.'),
      measured('Six cards per row at 1440×900 (card 19rem × 24.25rem = 171 × 218.25px, gap 21.375px); three per row at 390×844. Hovering a card translates it −4.5px (translateY(−.5rem), transition transform .2s). The dropdown trigger\'s border turns hsla(0,0%,100%,.45) on hover (.15s).'),
      sub('Live specimens — hover the cards and the dropdown trigger'),
      cards.length ? `<table><tbody><tr><th colspan="${cards.length}"><p>OperatorItem — three catalogue cards as captured (portrait layer, three-colour rule, SansBold auto-fitted name, codename, 01 / 33 index, class and element icons, rarity-coloured .5625rem base: 6★ #fe5a00, 5★ #ffbb03, 4★ #9452fa)</p></th></tr><tr>${cards.map(c => `<td>${c}</td>`).join('')}</tr></tbody></table>` : '',
      dropdownClosed ? specimen('Dropdown (closed) — 18.9375rem root, 4rem #3a3a3a trigger with the selected icon at right and an arrow that rotates 180° when open', dropdownClosed) : '',
      dropdownOpen ? specimen('Dropdown (open state as captured; static here because the listbox logic lives in React) — white panel, 4.5rem options, selected option on a hatched #8f8f8f plate with a magenta/mint left rule', dropdownOpen, 'The open panel is position:absolute and may overlap the next rows; that is the real behaviour of the component.') : '',
      table(['Element', 'Node', 'Computed change', 'Transition'], hoverRows('OperatorItem_').concat(hoverRows('Dropdown_'))),
      observed('Selecting a card switches the list for a detail panel: AnimatePresence (mode wait) fades the list out and the detail in with 0.3 s easeOut opacity; the detail reuses the homepage OperatorSection with a detail class (same avatar rail, same illustration/3D switch). The name-fit algorithm (28 bisection steps between .5625 and 1.6875rem against an 11.1875rem box) runs per card.'),
      code(`function fitOperatorName(text, rootPx) {\n  const maxWidth = 11.1875 * rootPx; let low = 0.5625, high = 1.6875;\n  for (let i = 0; i < 28; i++) { const mid = (low + high) / 2; if (measure(text, mid * rootPx) <= maxWidth) low = mid; else high = mid; }\n  return low; // rem\n}`),
      cssBlock(rs, { max: 24 }), cssBlock(drs, { max: 16 }),
      shotIf('capture/pages/en-us_operator/desktop-1440x900.png', 'catalogue at 1440×900'), shotIf('capture/states/dropdown-open.png', 'Class dropdown open'), shotIf('capture/states/operator-list-filtered.png', 'list filtered to one class'), shotIf('capture/states/operator-detail.png', 'detail panel after clicking a card'), shotIf('capture/pages/en-us_operator/mobile-390x844.png', 'catalogue at 390×844'),
      inferred('The catalogue is a denser restatement of the stage: same taxonomy icons, same rarity colours, same hollow word in the background, but as a grid with a stage-like backdrop rather than a neutral list. The custom scrollbar keeps the page itself from scrolling so the chrome stays fixed.'),
      rule('Catalogue pages: keep the global rail, put filters above a self-scrolling grid, size cards from the rem canvas (six per row on the desktop canvas), lift cards .5rem on hover, and open details in place with a 0.3 s cross-fade.'),
      p('Readable code: ' + readableLink(50999) + ', ' + readableLink(4948, 'I18nProvider → useOperators (33-operator table)') + '.'),
    ].join('');
  } },
  { slug: 'news', title: 'News index (/en-us/news): subpage header, tabs, cards', html() {
    const dom = pageDom('en-us_news');
    const header = (data.states.news_tabs && data.states.news_tabs.header) || first(dom, 'SubpageHeader_subpageHeader__eGnaM', 30000);
    const tabs = stateMarkup('news_tabs') || first(dom, 'SubpageTab_subpageTab__A3JdU', 8000);
    const item = stateMarkup('news_item') || first(dom, '__10-NoticeList_item__W4sd2', 8000);
    const pag = first(dom, 'Pagination_pagination__3IDBu', 8000);
    const rs = rulesFor('SubpageHeader', r => !r.media.length).slice(0, 10).concat(rulesFor('SubpageTab', r => !r.media.length).slice(0, 10), rulesFor('__10-NoticeList', r => !r.media.length).slice(0, 10));
    return [
      observed('The news index is a document page: a 31.625rem SubpageHeader whose background is white for 15.5625rem and #fffa00 below (border-bottom 1rem #c6c6c6), carrying a 4.375rem #191919 icon square, a colon glyph, the ENDFIELD wordmark (viewBox 0 0 354 57), the English subtitle and a dotted deco SVG at the canvas left edge; then the SubpageTab bar (3.75rem tall; tabs padded 0 3rem, radius 4px, hover #f3f3f3, active #e5e5e5 with the text shifted −1.75rem and a 2.3125rem #fafafa arrow disc); then a 114.375rem flex-wrap grid (gap 5rem 1.5rem) of 37rem × 33.375rem cards (20.8125rem image with radius .5rem and a 25% black hover scrim, 2rem type badge on #e6e6e6, 1.5rem SansRegular date, 1.75rem ellipsised title); finally a 30rem Pagination (nav type) centred with margin 3.125rem auto 16.25rem.'),
      observed('Tabs: latest / notices / events / news. Page size is DEFAULT_PAGE_SIZE 9 in landscape and 4 in portrait; the list fades 0 → 1 → 0 (0.3 s easeOut, AnimatePresence wait, key page-tab); cards open /en-us/news/<cid> in a new tab after common_click; portrait titles are truncated by TextShrink at 20 characters.'),
      sub('Live specimens'),
      header ? specimen('SubpageHeader — the yellow/white masthead as captured (position:relative, 31.625rem tall)', header) : '',
      tabs ? specimen('SubpageTab — tab bar as captured (hover a tab: #f3f3f3)', tabs) : '',
      p('<strong>The news card (__10-NoticeList_item) is styled only inside .__10-NoticeList_sectionContainer</strong>, so it is shown in the screenshots below and by its CSS; its captured markup is in capture/states/states.json (news_item).'),
      pag ? `<table><tbody><tr><th colspan="3"><p>Pagination (nav type) — zero-padded page blocks in Novecentosanswide-Medium with a sliding window of four and a horizontal mask</p></th></tr><tr><td><p>On the news index it sits in a 30rem wrapper centred under the grid.</p></td><td>${pag}</td><td><p>Clicking a block plays common_click and calls goToPage(index).</p></td></tr></tbody></table>` : '',
      table(['Element', 'Node', 'Computed change', 'Transition'], hoverRows('SubpageTab_')),
      cssBlock(rs, { max: 30 }),
      shotIf('capture/pages/en-us_news/desktop-1440x900.png', 'news index at 1440×900'), shotIf('capture/states/news-tab2.png', 'second tab selected'), shotIf('capture/pages/en-us_news/mobile-390x844.png', 'news index at 390×844'),
      inferred('The masthead\'s hard white-to-yellow split restates the LORE band of the home page at document scale: one colour event, then disciplined white cards. Tabs are segmented controls, not links, and the active tab physically makes room for an arrow — a small mechanical gesture typical of the whole site.'),
      rule('Secondary indexes: one bold two-tone masthead, a segmented tab bar with a mechanical active state, a 3-column card grid on the 160rem canvas and the shared Pagination.'),
      p('Readable code: ' + readableLink(92731) + ', ' + readableLink(86797) + ', ' + readableLink(51967) + ', ' + readableLink(2682) + '.'),
    ].join('');
  } },
  { slug: 'article', title: 'Article page (this page): template, tables, back-to-top', html() {
    const rs = rulesFor('__20-NoticeDetail', r => !r.media.length && /(sectionContainer__06Hmx(:before|:after)?$|backButton|bgBottom|decoLB|table th|table td|notice-detail-table-title|close__)/.test(r.selector)).slice(0, 16);
    const back = stateMarkup('back_to_top');
    return [
      observed('The section is min-height 100vh with two decorative corners (:before 39.25rem × 23.375rem top-right and :after 43.0625rem × 43.125rem bottom-left background images, hidden in portrait), a 37.5rem points-bg band at the bottom (1.5em dots, masked) and a decoLB corner mark at the canvas left edge. The content column is 97.75rem wide, padded 13.75rem top and bottom. Tables are the richest element: every th receives a deco wrapper (hatched #f2f2f2 plate, a yellow .5rem bottom bar, the 6rem Novecentosanswide-Bold ENDFIELD ghost word in yellow, corner marks) inserted by decorateNoticeHtml; td cells are 5.625rem tall with #e5e5e5 borders; a special notice-detail-formula-table variant uses #d9d9d9 hairlines and column widths 15/50/35%.'),
      observed('A fixed 5rem circular #f1f1f1 back-to-top button (bottom/right 2rem, z-index 200) becomes active when documentElement.scrollTop > 600 (throttled 300 ms on scroll and wheel); clicking scrolls to top smoothly and plays arrow_click. A close icon appears in the title when the page was opened from the site (window.opener on the same host) and rotates 90° on hover; it calls window.close().'),
      measured('Back-to-top opacity was 1 after scrolling the live article to 1200px. The title row is 3rem with min-height 7.75rem; the date is formatted as information.displayTimeFormat + " HH:mm" by dayjs.'),
      back ? specimen('__20-NoticeDetail_backButton — the back-to-top control as captured (on this page it is live at the bottom-right once you scroll)', back) : '',
      cssBlock(rs, { max: 16 }),
      shotIf('capture/states/article-back-to-top.png', 'live article scrolled, back-to-top visible'),
      inferred('The article template is the quietest surface on the site, which is exactly why its tables are so decorated: editorial tables are the only place the brand voice can appear inside CMS content.'),
      rule('Keep long-form pages plain (one column, hairline divider, 1.625rem body) and let the decoration live in reusable editorial elements such as table headers.'),
      p('Readable code: ' + readableLink(36979) + ', ' + readableLink(61127) + ', ' + readableLink(67002) + '.'),
    ].join('');
  } },
  { slug: 'controls', title: 'Buttons and controls inventory', html() {
    const home = rulesFor('HomeButton', r => !r.media.length).slice(0, 12); const back = rulesFor('BackButton');
    const rows = [
      ['Button (.Button_button)', 'home, news, article, catalogue', '20rem × 4.5rem, #383838 textured, yellow marker; light variant #fff/#000; disabled #888', 'hover #484848 + radius 6px + marker → arrow translateX(.875rem) (.2s)', 'embedded above (NOTICE)'],
      ['HomeButton', 'declared only (landing variants)', 'border + divider; white variant', 'hover border #efe701 / #aaa; active #e6de01 / #999', 'CSS only'],
      ['BackButton', 'declared only', '—', 'hover #626262; active #282828', 'CSS only'],
      ['__02-Operator_listButton', 'home stage, catalogue detail', 'dark block', 'hover #626262; active #282828 (.2s)', 'embedded above (stage)'],
      ['Pagination buttons', 'home notice, news index', '4.625rem #fafafa discs', 'hover #fffa00 + texture; active #eeea00 (.2s)', 'embedded above'],
      ['Dropdown trigger / option', 'catalogue', '4rem #3a3a3a; options 4.5rem', 'trigger border hsla(0,0%,100%,.45) (.15s); option rgba(0,0,0,.06) (.2s); focus-visible outline 2px rgba(255,204,26,.85)', 'embedded above'],
      ['SubpageTab tab', 'news', 'padding 0 3rem, radius 4px', 'hover #f3f3f3 (.2s); active #e5e5e5 + text shift', 'embedded above'],
      ['Header nav item / action icons', 'all pages', 'rail', 'icon #858585 / #424242 on hover (.2s)', 'live rail'],
      ['Go-to-game block', 'rail', '4.5rem × 9.75rem #191919', 'yellow fill, ink text (.3s)', 'live rail'],
      ['Share button', 'rail', '4.5rem × 2.75rem', 'bg #191919, icon #fffa00, list slides in (.3s)', 'live rail'],
      ['downloader item', 'home', '12.25rem × 3.625rem black tile', 'hover #222; active #333 (.2s)', 'embedded above'],
      ['Information play button', 'home', '4.5rem #fdfd1f square', 'hover #fafafa, triangle scale(1.25)', 'screenshot'],
      ['Media / ModalFrame close', 'modals', '4rem yellow / icon', 'icon rotate(90deg) (.2–.3s)', 'CSS'],
      ['footer language item', 'footer', '23.25rem × 4.5rem #f0f0f0', 'arrow 90° → 270° when active; dropdown opacity .2s', 'live footer'],
      ['Mobile preserve button / menu items', 'mobile header', '15.5rem hatched #191919; 6.75rem rows', 'active brightness(.95); active row #fffa00', 'screenshot'],
    ];
    return [
      observed('Fourteen interactive control families exist across the captured pages. All of them follow the same recipe: a rectangular block with 2–4px radius, a hatched or dotted texture layer, a 0.2 s colour transition on hover, and either a yellow fill or a yellow marker as the active signal. There are no outlined "ghost" buttons and no gradients on controls.'),
      table(['Control', 'Where', 'Size / colour', 'Hover / active', 'In this handbook'], rows.map(r => r.map(esc))),
      cssBlock(home, { max: 12 }), cssBlock(back),
      inferred('Controls are "mechanical": hover states change material (texture opacity, fill) and move a marker rather than scaling the whole control. That restraint keeps motion for content (cards, media) and makes controls feel like switches.'),
      rule('One control recipe: block + texture + 2px radius + 0.2 s colour transition; express hover by fill/marker, not by scale or shadow; disabled = #888/#666 with pointer-events none.'),
    ].join('');
  } },
  { slug: 'hover', title: 'Hover and focus states: complete inventory', html() {
    const measuredRows = data.hover.flatMap(x => x.changes.slice(0, 3).map(c => [esc(x.cls.replace(/__[A-Za-z0-9_]{5}$/, '')), esc(x.pages.map(pg => pg.replace('en-us', '/en-us')).join(', ')), esc(c.node.replace(/__[A-Za-z0-9_]{5}/g, '').split('#')[0]), esc(Object.entries(c.props).map(([k, v]) => `${k}: ${v.before} → ${v.after}`).join(' · ')).slice(0, 200), esc(x.transition || '')]));
    const ruleRows = data.motion.hoverRules.map(r => [esc(r.selector.replace(/__[A-Za-z0-9_]{5}/g, '')), esc(Object.entries(r.declarations).map(([k, v]) => `${k}: ${v}`).join('; ')), esc(r.media.join(' ').replace(/@media /g, ''))]);
    return [
      observed(`${data.motion.hoverRules.length} :hover / :active / :focus rules exist in the stylesheets; ${data.motion.hoverRules.filter(r => r.media.some(m => /any-hover/.test(m))).length} of them are wrapped in @media (any-hover:hover) so touch devices never get stuck hover states. Hover durations are .15s (dropdown), .2s (most) and .3s (rail, share); easing is the default ease or ease-out; no hover uses a spring.`),
      sub('Measured on the live site (computed style before → after, 700 ms after pointer entry)'),
      table(['Element', 'Pages', 'Node', 'Change', 'Transition'], measuredRows),
      sub('Every shipped hover/active/focus rule'),
      table(['Selector', 'Declarations', 'Media'], ruleRows),
      inferred('Hover is treated as a material change (fill, texture, colour) at a fixed 0.2 s; movement is limited to a −.5rem card lift and the Button marker. Consistency of duration matters more than variety.'),
      rule('Wrap hover rules in any-hover:hover; use 0.2 s for colour/fill, 0.3 s for layout reveals; move at most one element per control.'),
      p('Data: ' + a('analysis/hover-states.json', '/analysis/hover-states.json') + ' and ' + a('analysis/motion.json', '/analysis/motion.json') + '.'),
    ].join('');
  } },
  { slug: 'motion', title: 'Entrance, scroll and transition motion: keyframes, transitions, timelines', html() {
    const kfRows = data.cssRules.keyframes.map(k => [esc(k.name.replace(/__[A-Za-z0-9_]{5}$/, '')), esc(k.file), esc(k.steps.map(s => `${s.at} {${Object.entries(s.declarations).map(([a2, b]) => a2 + ': ' + b).join('; ')}}`).join(' | ')).slice(0, 260)]);
    const trRows = count(data.motion.transitions.map(r => r.transition || r.animation).filter(Boolean)).slice(0, 36).map(([v, n]) => [esc(v), String(n)]);
    const tlRows = (data.timelines['en-us'] || []).filter(e => e.count > 2 && !/^Header_|^__00-Loading|^HTML$|^DIV$|^SPAN$/.test(e.element)).slice(0, 40).map(e => [esc(e.element.replace(/__[A-Za-z0-9_]{5}/g, '')), `${e.first}–${e.last} ms`, String(e.count), esc(Object.entries(e.props).map(([k, v]) => `${k}: ${String(v.from).slice(0, 26)} → ${String(v.to).slice(0, 26)}`).join(' · ')).slice(0, 200)]);
    return [
      observed(`Motion is split between CSS and JavaScript. CSS holds ${data.cssRules.keyframes.length} keyframe animations (loader fadeIn, scroll-tip move/breathing, rolling marquee, code-printer flashing in gameplay/AIC/finalpage, OrigQuery rotate, calendar breath, swiper preloader) and ${data.motion.transitions.length} transition/animation declarations. JavaScript (anime.js 3.2.1 timelines and framer-motion springs/tweens) drives entrances: section reveals, clip-path wipes, text flickers, the loader, carousels and the rail expansion.`),
      sub('JavaScript motion vocabulary (readable reconstructions)'),
      table(['Helper', 'What it does', 'Values'], [
        ['flickerReveal (TextRevealAnimations.zI)', 'three chained opacity 0→1 steps', '100 / 85 / 70 ms easeOutQuad (exit 70/85/100)'],
        ['clipRevealAnimation (WO)', 'clip-path polygon from a collapsed edge', 'ease-out-quart 1−(1−p)^4; reveal or wipe-out; given duration'],
        ['addStaggeredReveal (iI)', 'appends elements to a timeline as 300 ms steps', 'offset −100 ms each; skips display:none and wrong orientation'],
        ['OperatorSection timeline', 'deco → text → illustration → buttons', '300 / 600 / 1200 ms offsets; 400 & 300 ms easeOutQuad; 5000 ms cubicBezier(0,1,0,.95)'],
        ['Illustration slide', '2D art drift', '18rem → 0 over 8000 ms cubicBezier(0,1,0,.97)'],
        ['LoadingScreen', 'progress + blur', 'spring stiffness 120 damping 20; tween .5 s; loaded at 1500 ms, unmount 2400 ms'],
        ['SectionTitle reveal', 'EN then CN title', 'flicker at 400 ms and 600 ms after in-view'],
        ['RollingText marquee', 'overflow text scroll', '1000 ms hold, 40px/s linear, 300 ms easeInCubic/easeOutCubic fades'],
        ['Toast', 'fade in/out', '300 ms cubic-bezier(.25,.1,.25,1), 2000 ms visible'],
        ['News list / catalogue detail', 'cross-fade', 'framer-motion 0.3 s easeOut, AnimatePresence mode wait'],
        ['Carousel item', 'slide', 'transform .4s ease-in-out (CSS)'],
      ].map(r => r.map(esc))),
      sub('Measured entrance timeline on the home page (inline style mutations after the loader)'),
      table(['Element', 'Window', 'Frames', 'Properties'], tlRows),
      sub('CSS keyframes (all)'), table(['Keyframes', 'File', 'Steps'], kfRows),
      sub('Transition / animation declarations by frequency'), table(['Declaration', 'Count'], trRows),
      inferred('Three tempos coexist: micro (70–100 ms flickers that make text "boot up"), interface (200–600 ms ease-out moves) and cinematic (5–8 s art drifts). Entrances always move toward the canvas centre from the nearest edge, which is why the composition feels like it assembles.'),
      rule('Use ease-out quads for interface moves, three-step flickers for labels, quart ease-out for wipes, and one slow drift per hero; never animate layout properties on hover.'),
      p('Readable code: ' + readableLink(84245) + ', ' + readableLink(3492) + ', ' + readableLink(71272) + ', ' + readableLink(96664) + ', ' + readableLink(71985) + '. Data: ' + a('analysis/motion-timelines.json', '/analysis/motion-timelines.json') + '.'),
    ].join('');
  } },
  { slug: 'audio', title: 'Audio: background music, sound effects, mute state', html() {
    const sfx = soundSources();
    const logs = mediaLogs();
    return [
      observed('BackgroundMusic wraps the BgmPlayer class with static/media/sound/bgm.3ce37f.mp3 (2.9 MB): loop, autoPlay (retried on first click), fade (VolumeFader ticks every 10 ms, duration scaled by the volume distance, easeInQuad in / easeOutQuad out, default 1000 ms), suspend on visibilitychange and on Skland app lifecycle events, PAUSE/RESUME via the window event HG_MEDIA_BGM_EVENT, volume 1 on desktop and 0.1 on mobile user agents. The rail\'s mute button toggles the SoundControlStore (zustand persist key "ef-official-sound-control", enabled by default); the Media modal disables music while a video plays.'),
      observed(`Sound effects: a SoundEffectPlayer with a pool of 10 <audio> elements primed with a silent WAV (to unlock audio on touch); play(key) returns early when the store is disabled. Twelve cues ship under static/media/sound/: ${sfx.map(s => s.key).join(', ')}.`),
      table(['Cue', 'Triggered by', 'File'], [
        ['common_click', 'rail buttons, menu items, share links, notice cards, video thumbnails, play/more, mute', 'common_click'],
        ['arrow_click', 'pagination arrows, avatar paging, back-to-top, reserve platform toggles, information prev/next', 'arrow_click'],
        ['menu_click', 'rail section items', 'menu_click'],
        ['char_click', 'avatar change on the stage', 'char_click'],
        ['char_detail_enter / char_list_enter', 'entering detail / opening the catalogue', 'char_detail_enter, char_list_enter'],
        ['close_click', 'closing detail / modals', 'close_click'],
        ['enter_click, home_enter', 'entering the site / home', 'enter_click, home_enter'],
        ['model', 'switching the LORE point-cloud model', 'model'],
        ['news_cate_click', 'news tabs', 'news_cate_click'],
        ['reserve_click', 'reservation button', 'reserve_click'],
      ].map(r => [esc(r[0]), esc(r[1]), r[2].split(', ').map(k => { const s = sfx.find(x => x.key === k); return s ? a(s.url.split('/').pop(), s.url) : esc(k); }).join(', ')])),
      measured('Media log from the capture: bgm.3ce37f.mp3 play() was called 1.3 s after navigation on the home page (loop true, muted false, volume 1) and 2.5–3.7 s on the subpages; the INFORMATION background video (01.1e0eb1.mp4, 53 MB) and the gameplay upload videos play muted and looped.'),
      table(['Page', 'Media play() calls (t, kind, src, loop, volume)'], logs.map(([pg, l]) => [esc(pg), esc(l.media.map(m => `${Math.round(m.t)}ms ${m.kind} ${m.src.split('/').pop()} loop=${m.loop} vol=${m.volume}`).join(' | ')).slice(0, 400)])),
      inferred('Sound is treated as part of the interface grammar: every click class has its own cue, and the music fades rather than cuts. The persisted mute flag respects the visitor across visits, and the mobile volume of 0.1 avoids startling users on phones.'),
      rule('Ship one looping theme with 1 s fades and a persisted mute; give each interaction class (menu, arrow, confirm, close) its own short cue; never play audio before a user gesture.'),
      p('Readable code: ' + readableLink(7725) + ', ' + readableLink(58572) + ', ' + readableLink(26097) + ', ' + readableLink(2285) + '.'),
    ].join('');
  } },
  { slug: 'imagery', title: 'Icons, imagery and textures', html() {
    const images = imageAssetModules();
    const portraits = images.filter(i => !/^(obt-title|title|mobile_title|checker_title|home_title|TF0|join_us|content|kv|share|appStore|googlePlay|zh-|en-|ja-|ko-|es-|pt-|fr-|de-|ru-|it-|id-|th-|vi-|0[1-5]\.)/.test(i.file));
    const cssAssets = data.fonts.css_assets;
    const textures = cssAssets.filter(x => /(points-bg|th-deco|deco|button-texture|pag-button|block-bg|triangles|color-bar|switcher|arrow|none|section_divider|bg\.|bg_m|test-notice|qrcode|deco-right)/.test(x.url));
    const taxonomy = rulesFor('Dropdown', r => /data-key=(guard|caster|support|shielder|vanguard|assault|fire|ice|electric|nature|physic)\]$/.test(r.selector) && /Dropdown_trigger/.test(r.selector)).map(r => [esc(r.selector.match(/data-key=(\w+)/)[1]), a(r.declarations['background-image'].match(/url\(([^)]+)\)/)[1].split('/').pop(), r.declarations['background-image'].match(/url\(([^)]+)\)/)[1])]);
    return [
      observed(`${svgIconCount()} inline SVG icon components are compiled into the bundles (logos, arrows, chevrons, close, globe, share-network glyphs, triangles, colon marks, section icons keyed home/operator/lore/information/gameplay/notice/aicGameplay/milestone/calendar). ${images.length} image assets are imported as modules (with blur placeholders): 33 operator avatars (120px), 33 portraits, 33 full illustrations (up to 13 MB PNGs), per-language title images, store badges, section decorations. ${cssAssets.length} further assets are referenced from CSS (textures, masks, decorations), ${cssAssets.filter(x => x.path).length} of which are archived in capture/assets/css.`),
      sub('Taxonomy icons (class and element) — the same files are used on cards, dropdowns and the stage'),
      table(['Key', 'File'], taxonomy),
      sub('Textures and decorations referenced from CSS'),
      table(['Asset', 'Size', 'Used by'], textures.slice(0, 40).map(x => [a(x.url.split('/').pop(), x.url), x.bytes ? (x.bytes / 1024).toFixed(1) + ' KB' : '—', esc(data.cssRules.rules.filter(r => Object.values(r.declarations).some(v => v.includes(x.url.split('/').pop()))).map(r => r.component).filter(Boolean).filter((v, i, arr) => arr.indexOf(v) === i).join(', '))])),
      observed('Recurring texture vocabulary: a 45° hatch (linear-gradient(−45deg, transparent, transparent n%, black 0, black m%, …) at .5rem tiles, opacity .05–.1) on pagination pills, button frames, modal headers and the mobile menu; a dotted points-bg.png (1.5em tiles) on modals and the article bottom; mask-image gradients to fade carousels, the hollow ENDFIELD word and the stage illustration; drop-shadow stacks of white (#ffffff .25rem/.5rem/.5rem) behind corner marks; the HallowText outline made from the same hatch gradient with background-clip text.'),
      sub('Operator image assets (module imports)'),
      table(['File', 'URL'], portraits.slice(0, 60).map(i => [esc(i.file), a('open', i.url)])),
      inferred('Imagery follows a strict division: photographic/painted assets are only characters and key visuals; everything else is vector, hatch or dots in two inks. That is what lets the saturated art stand out on a page full of structure.'),
      rule('Allow colour photography only for hero art; build all other decoration from one hatch gradient, one dot texture, hairlines and outlined words.'),
      p('Data: ' + a('capture/fonts-and-css-assets.json', '/capture/fonts-and-css-assets.json') + ', ' + a('source/module-map.json', '/source/module-map.json') + '.'),
    ].join('');
  } },
  { slug: 'responsive', title: 'Responsive behaviour: portrait rules and measured mobile layout', html() {
    const prs = count(data.cssRules.rules.filter(r => r.media.some(m => /portrait/.test(m))).map(r => r.component || 'other')).slice(0, 20).map(([c, n]) => [esc(c), String(n)]);
    const home = data.pages['en-us']; const op = data.pages['en-us_operator'];
    return [
      observed(`${data.cssRules.rules.filter(r => r.media.some(m => /portrait/.test(m))).length} rules apply only in portrait. The rail hides, the 9.625rem mobile header appears, sections switch to calc(100vh − var(--vh-offset) − 9.625rem) heights, the operator stage becomes a drawer (contentContainer translateY(100%) → 0 with transition transform .3s ease after entrance), the calendar becomes a draggable scroll, the notice carousel becomes a two-per-page list, the news grid uses page size 4, and the catalogue shows three cards per row.`),
      measured(`Root font-size at 390×844: ${home.mobile.rootFontSize}; no horizontal overflow on any page (scrollWidth ≤ innerWidth: home ${!home.mobile.overflow}, catalogue ${!op.mobile.overflow}). Section heights at 390×844: ${home.mobile.sections.map(s => `${s.cls.split(' ')[0].replace(/__[A-Za-z0-9_]{5}$/, '')} ${Math.round(s.rect.height)}`).join(', ')} px.`),
      table(['Component', 'Portrait-only rules'], prs),
      shotIf('capture/pages/en-us/mobile-390x844.png', 'home at 390×844'), shotIf('capture/pages/en-us_operator/mobile-390x844.png', 'catalogue at 390×844'), shotIf('capture/pages/en-us_news_7013/mobile-390x844.png', 'article at 390×844'),
      inferred('Portrait is a second design, not a reflow: the 1080×1920 canvas has its own compositions (drawer, vertical bands with rotated wordmarks, stacked cards). Because both canvases scale with rem, there is exactly one phone layout and one desktop layout.'),
      rule('Design two canvases (2560×1440 and 1080×1920) and switch on orientation only; do not add intermediate breakpoints.'),
    ].join('');
  } },
  { slug: 'i18n', title: 'Internationalisation and runtime fonts', html() {
    const bundles = Object.values(data.moduleMap).filter(m => m.kind === 'i18n-bundle').map(m => [esc(m.name.split(' ')[0]), String(m.bytes)]);
    return [
      observed('Each of the 13 locales ships as its own module in the main layout chunk (26–97 KB): UI text keys (operator.content.<key>.name, notice.tab.*, modal.user.*, gameplay.items.N.title …), per-locale title images, the font map (SansRegular/Medium/Bold/Black → HarmonyOS Sans for en-us; HarmonyOS Sans SC/TC, Noto Sans JP/KR/Thai Looped for other scripts) and locale components (footer, SvgLogo). I18nProvider exposes {lang, langs, images, text, font, data, components}; useText resolves flat keys first, then dotted paths. FontLoader creates a FontFace per alias, falls back to the .woff2 entry alone, and logs failures.'),
      table(['Locale bundle', 'Minified bytes'], bundles),
      observed('Language-specific CSS exists for widths that differ by script: html[lang=ja-jp] uses vertical-rl text in the rail\'s game button, de/es/ru/th get larger letter-spaced labels, zh-cn/zh-tw/ja-jp get taller button groups, ko-kr sets word-break keep-all, and portrait titles are capitalised on the overseas build (html[data-oversea=true]).'),
      inferred('Shipping fonts per locale through the i18n bundle (not CSS) lets the same alias names (SansMedium…) resolve to different families, so component CSS never changes per language.'),
      rule('Alias your body faces (SansRegular/Medium/Bold/Black) and bind the alias to a family per locale at runtime; keep per-locale overrides as html[lang] selectors.'),
      p('Readable code: ' + readableLink(4948) + ', ' + readableLink(45965) + ', ' + readableLink(56006) + '.'),
    ].join('');
  } },
];
