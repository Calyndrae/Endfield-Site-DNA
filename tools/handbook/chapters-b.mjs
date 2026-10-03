// Home-page chapters.
import { data, p, t, sub, a, link, observed, measured, inferred, rule, table, code, cssBlock, specimen, esc, readableLink, rulesFor, extractAll, stateMarkup, shotIf, pageDom, operatorClips, excerpt, CDN } from './lib.mjs';
const tl = (page, re) => (data.timelines[page] || []).filter(e => re.test(e.element));
const tlRows = (page, re, max = 14) => tl(page, re).slice(0, max).map(e => [esc(e.element.replace(/__[A-Za-z0-9_]{5}/g, '')), `${e.first}–${e.last} ms`, esc(Object.entries(e.props).map(([k, v]) => `${k}: ${String(v.from).slice(0, 30)} → ${String(v.to).slice(0, 30)}`).join(' · ')).slice(0, 220) || esc(e.classChanges.slice(0, 3).map(c => `${c.t}ms +${c.added.map(x => x.replace(/__[A-Za-z0-9_]{5}$/, '')).join(',')}`).join('; '))]);
const hoverRows = cls => data.hover.filter(x => x.cls.startsWith(cls)).flatMap(x => x.changes.slice(0, 4).map(c => [esc(x.cls.replace(/__[A-Za-z0-9_]{5}$/, '')), esc(c.node.replace(/__[A-Za-z0-9_]{5}/g, '').split('#')[0]), esc(Object.entries(c.props).map(([k, v]) => `${k}: ${v.before} → ${v.after}`).join(' · ')).slice(0, 220), esc(x.transition || '')]));
const first = (html, cls, cap) => (html ? extractAll(html, cls, 1, cap)[0] : null);
const sec = key => (data.states['section_' + key] && data.states['section_' + key].markup) || null;
export const chapters = [
  { slug: 'rail', title: 'Navigation rail (Header): live, hover and expanded states', html() {
    const rs = rulesFor('Header', r => !r.media.length && /pcHeaderContainer__Sy_8l( |\.|$)/.test(r.selector)).slice(0, 14);
    return [
      t('The rail on the left of this page is the live Header component. Hover it: it expands from 7.5rem to show section labels; the dark "go to game" block, the share button and the mute toggle are the same elements the home page uses.'),
      observed('Structure: a 7.5rem × 100vh white column (z-index 50) whose :before panel is calc(100% + 16rem) wide and slides 15rem to the right when the rail gets the detailActive class (expanded); nav items are 4.5rem tall absolute rows whose icon sits at left 3.75rem / top 2.25rem in #d9d9d9 (active #191919, hover #858585); a 13.25rem label at left 6.9375rem fades in (opacity .2s, transform .3s) when expanded; a #e6e6e6 overlay bar with a .75rem #191919 left border slides to the active item (transform .3s). The action group (user, top-up, creator, mute) lives in a 3.75rem-wide #f2f2f2 rounded frame 9.5625rem from the bottom; the dark #191919 "go to game" block (4.5rem × 9.75rem, hatched :before, yellow hover fill) and the share button (4.5rem × 2.75rem) complete the column.'),
      measured('Hover diffs recorded on four pages: nav icon colour #d9d9d9 → #858585 (transition color .2s, transform .3s); go-to-game block background opacity 0 → 1 (yellow #fffa00) with text, triangle and dividers turning from #fff to #191919 (.3s); share button background → #191919 with icon → #fffa00 and the share list sliding in (opacity .3s, transform .3s, translate3d(-1rem) → 0).'),
      table(['Element', 'Node', 'Computed change', 'Transition'], hoverRows('Header_')),
      table(['Element', 'Window', 'Rail expansion recorded on the news page'], tlRows('en-us_news', /^Header_/, 8)),
      observed('When the rail expands, the action buttons translate down in 3.25rem steps (translate3d(0.6875rem, −3.25rem … 8rem)) and the frame grows to 19.5rem wide with .25rem radius. In portrait the mobile header (9.625rem tall, box-shadow 0 0 2rem rgba(0,0,0,.3)) replaces it, with a 15.5–17.5rem "go to game" button and a hamburger that opens a fixed white menu (translate3d(−105%) → 0 in .3s) listing sections as 6.75rem #f2f2f2 rows that turn #fffa00 when active.'),
      excerpt(83597, '"ontouchstart" in window || setHeaderExpanded(!0)', 8, { skip: -3 }),
      cssBlock(rs, { max: 14 }),
      shotIf('capture/states/header-rail.png', 'rail at rest, 1440×900'), shotIf('capture/states/header-rail-hover.png', 'rail expanded on hover'), shotIf('capture/states/header-share-open.png', 'share list open'), shotIf('capture/states/mobile-home.png', 'mobile header, 390×844'), shotIf('capture/states/mobile-menu-open.png', 'mobile menu open'),
      inferred('The rail is a vertical tab bar that behaves like a dock: it only reveals labels on intent (hover), so the 160rem canvas is never obstructed. The yellow hover fill on the game block is the only saturated colour in the chrome, which makes "play" the single loudest call to action on every page.'),
      rule('Keep chrome to one narrow fixed column, reveal labels on hover with 0.2–0.3 s transitions, highlight the active item with a sliding bar rather than a filled background, and reserve the signal colour for the primary action.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → SiteHeader / NavRailItem / HeaderActionButton / GoToGameButton / ShareButton') + '.'),
    ].join('');
  } },
  { slug: 'loading', title: 'First-load screen', html() {
    const rs = rulesFor('__00-Loading', r => !r.media.length).slice(0, 12);
    const kf = data.cssRules.keyframes.find(k => k.name.startsWith('__00-Loading'));
    return [
      observed('LoadingScreen receives a list of task functions (home: 33 portrait preloads through a 5-slot Image pool plus the point-cloud setup; subpages: their own shorter list) and counts settled promises. A framer-motion spring (stiffness 120, damping 20) drives the percentage; tweens of 0.5 s drive the yellow progress bar (vertical in landscape at left 0 / width 1.25rem, horizontal in portrait) and the blur of the background photo from 8px to 0. The percent label (4.375rem SansMedium digits, 3.25rem "%" in SansRegular, #fffa00) rides along the bar at left 3.125rem; the grey "Updating…" caption uses #666; the logo sits at left 64.45% / top 27.625rem with the slogan OVER THE FRONTIER / INTO THE FRONT at 1.5rem SansRegular under a 70rem gradient hairline.'),
      observed('Exit: when every task has settled the container gets the leaving class → opacity 0 with transition opacity 1s delayed 1.4s, while a yellow :after sheet scales from 0 with the fadeIn keyframe (.6s cubic-bezier(1,0,.7,1) delayed .5s); the shared loaded store flips after 1500 ms (sections start their entrances) and onFinished unmounts the screen after 2400 ms.'),
      measured(`Headless Chromium saw the bar go 0 → 100% between 2.9 s and 7.6 s on the home page (44 frames logged) and 3.5 → 5.8 s on the news page; the screen left at ${data.pages['en-us_news'] ? data.pages['en-us_news'].loaderMs : '—'} ms on the news page and ${data.pages['en-us_news_7013'] ? data.pages['en-us_news_7013'].loaderMs : '—'} ms on the article page. On the home page the percentage stays at 0 for the first seconds because every task is a multi-megabyte portrait.`),
      table(['Element', 'Window', 'Animated properties'], tlRows('en-us', /^__00-Loading/, 6)),
      excerpt(71272, 'runTasks = () => {', 40),
      cssBlock(rs, { max: 12 }), kf ? code(kf.css) : '',
      shotIf('capture/states/loading-home-2200ms.png', 'home page loader at 2.2 s, 1440×900'), shotIf('capture/states/loading-article-4500ms.png', 'article page loader at 4.5 s (37 %)'), shotIf('capture/states/loading-mobile-2200ms.png', 'portrait loader at 390×844'),
      inferred('The loader is a progress curtain rather than a spinner: it is honest about asset weight and hands over with the brand colour sweeping across, which also hides the first paint of the sections.'),
      rule('Gate the first paint on a real task list, show a numeric percentage, and exit with a one-colour wipe timed so that section entrances start just before the curtain is gone (1.5 s store flip vs 2.4 s unmount).'),
      p('Readable code: ' + readableLink(71272) + '.'),
    ].join('');
  } },
  { slug: 'viewer', title: 'Section viewer: chapter navigation by wheel, scroll and hash', html() {
    return [
      observed('SectionViewer renders the rail (sticky) and a column of section wrappers. A lodash-throttled (100 ms) handler on window scroll and wheel picks the section whose vertical centre is the smallest positive distance from the viewport top (within 2× innerHeight), stores it in a zustand store and mirrors it to the URL hash with history.replaceState. Clicking a rail item calls setCurrentSection: it sets a programmatic flag, scrolls the section into view with behavior:"smooth" and ignores scroll events until that section is reached. On mount a matching hash (except #home) scrolls to the section. There is no keyboard handling.'),
      excerpt(83597, 'handleScrollThrottled = (0, lodashThrottle.A)', 46),
      measured('Home section order and heights at 1440×900: home 900, operator 810, information 810, calendar 1990, gameplay 943, aic 695, notice 767 px. Each 600px wheel step in the capture advanced the active section by one.'),
      observed('Wrappers: .sections_sectionViewer / .SectionViewer_contentContainer (flex:1, overflow-x hidden) with scroll-margin-top 9.625rem in portrait. The hero (__01-Home) is exactly 100vh with overflow hidden; the other sections are fixed rem heights (operator stage, information 90rem #000, gameplay 104.75rem, aic 77.25rem, notice 85.25rem + 10rem margin).'),
      inferred('Native document scrolling with a smart highlighter rather than scroll-jacking: trackpads, touch and the back button behave normally while the rail still reads like a chapter index.'),
      rule('Do not hijack scrolling. Track the nearest section centre, throttle it, and let the chrome follow the document.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → SectionViewer, useSectionViewerStore') + '.'),
    ].join('');
  } },
  { slug: 'operator-stage', title: 'Homepage character stage (__02-Operator)', html() {
    const rs = rulesFor('__02-Operator', r => !r.media.length && /(sectionContainer__D66c4 \.__02-Operator_(pcContainer|illustrationContainer|illustration__|decoFlag|decoText|listButton|operatorSwitcher|switchItem|nameContainer|titleContainer|tagContainer|videoContainer|header__))/.test(r.selector)).slice(0, 24);
    const listBtn = stateMarkup('list_button') || first(pageDom('en-us'), '__02-Operator_listButton__jKExN');
    const switcher3d = data.states.switcher3d_markup || null;
    const divider = data.states.lore_divider && data.states.lore_divider.markup;
    return [
      observed('The stage is a 90rem-tall white section. Left: a wrap-around avatar rail (OperatorSwitcher) whose items are spaced 12.25rem vertically in landscape (13rem horizontally in portrait) with a 1.875rem base offset and page by four; the active avatar carries a circular SVG ring. Centre-left: the REC header, the name block (4.875rem SansBold), classification icons, faction/race/CV rows, a biography and the dark "All Operators" button. Right: a 2D illustration that slides in from 18rem over 8000 ms with cubicBezier(0,1,0,.97), or in 3D mode a TransparentVideo canvas that plays the operator\'s enter clip once and then loops idle (loading badge fades 300 ms easeOutQuad in / easeInCubic out). Low-end browsers (Vivo/Oppo/MIUI/Quark) hide the 3D switch.'),
      observed('Entrance timeline (anime.js), started when the section is 40% in view and the loader store says loaded: at 300 ms the deco flag fades in and the hollow ENDFIELD text, tape and line slide from translateX(110%) (400 ms easeOutQuad, 1 ms in portrait); at 600 ms title/content/header containers slide from translateX(−100%) (300 ms easeOutQuad); the illustration fades in over 300 ms and slides from 15rem over 5000 ms with cubicBezier(0,1,0,.95); buttons fade in at 1200 ms (landscape) or 800 ms (portrait). Sounds: char_click on avatar change, arrow_click on paging, char_detail_enter on entering detail, close_click on leaving; a content_view tracking event per operator.'),
      measured('Chromium logged the same choreography as inline style mutations: illustration container opacity 0 → 1 and translateX(15rem) → 0 across 218 frames, deco text/tape/line translateX(100%) → 0 across 34 frames, title/content/header translateX(−100%) → 0 across 15 frames, switcher opacity 0 → 1 across 11 frames.'),
      table(['Element', 'Window', 'Animated properties'], tlRows('en-us', /^__02-Operator|HallowText/, 14)),
      sub('Live specimens (verbatim markup styled by the live stylesheets)'),
      p('<strong>Why some stage elements are shown as screenshots, not live specimens:</strong> every __02-Operator rule except the LORE divider is written as a descendant of .__02-Operator_sectionContainer, so the "All Operators" button, the avatar rail and the 2D/3D switch only receive their styles inside the 90rem stage. Reproducing the stage here would mean embedding the whole section; the exact markup of those elements is in the captured DOM (capture/states/states.json) and their CSS is listed below.'),
      divider ? specimen('__02-Operator_sectionDivider — the yellow LORE hand-off band (9.125rem tall; its :before slides from translateX(100%) in .4s ease .2s when the active class is set)', divider) : '',
      excerpt(3492, '".".concat(styles2().pcContainer, " .").concat(styles2().decoFlag)', 70, { skip: -8 }),
      cssBlock(rs, { max: 24 }),
      shotIf('capture/states/operator-stage.png', 'operator stage after its entrance, 1440×900'), shotIf('screenshots/home-operator-verified.png', 'operator stage (installed Chrome capture from the earlier session)'),
      inferred('The stage is composed like a dossier: the character art is the only large colour event, the data column is small and left-aligned to the canvas edge, and the hollow ENDFIELD word plus tape and line decorations enter from the right to frame the art. The 5–8 s illustration drift is far longer than the UI motion, so the art keeps moving after the interface has settled.'),
      rule('One oversized expressive asset plus a compact factual column; stagger entrances at 300/600/1200 ms with ease-out quads; give the hero asset a slow long-tail drift (5–8 s) after the UI settles.'),
      p('Readable code: ' + readableLink(3492) + ', ' + readableLink(84245) + ', ' + readableLink(96664) + '.'),
    ].join('');
  } },
  { slug: 'transparent-video', title: 'Transparent video renderer (the "3D" mode)', html() {
    const clips = operatorClips(); const rs = rulesFor('TransparentVideo').concat(rulesFor('players'));
    return [
      observed('The "3D" view is not a mesh: it is a pre-rendered MP4 whose frame carries RGB in one half and a grayscale alpha mask in the other half. Hypergryph\'s @hg-web/trans-video class draws it into a canvas: WebGL path (fullscreen quad, fragment shader alpha = 0.3R + 0.59G + 0.11B, SRC_ALPHA/DST_ALPHA blending), Canvas2D fallback doing the same per pixel; layouts left-right / right-left / top-bottom / bottom-top, image-mask and luminance modes; frames scheduled with requestVideoFrameCallback (requestAnimationFrame on Android). The React wrapper renders a canvas plus a hidden muted playsInline crossOrigin video and exposes {video, trans, controller}.'),
      excerpt(25221, 'float getBrightness(vec3 color)', 10, { skip: -1 }), excerpt(25221, '? requestAnimationFrame(selfRef.ticker)', 14, { skip: -10 }),
      observed(`OPERATOR_VIDEO_CLIPS maps ${Object.keys(clips).length} operators to enter/idle pairs under /_next/static/media/video/. The stage sets video.src to enter, calls trans.activate(), and on ended switches to idle with loop. (This Chromium has no H.264 decoder, so the clips could not be rendered in the capture; the URLs below are the originals.)`),
      table(['Operator', 'enter clip', 'idle clip'], Object.entries(clips).map(([k, v]) => [esc(k), a(v.enter.split('/').pop(), v.enter), a(v.idle.split('/').pop(), v.idle)])),
      cssBlock(rs),
      inferred('Pre-rendering the characters as alpha videos gives film-quality lighting without shipping meshes or a game engine; the WebGL compositor only costs one texture upload per frame.'),
      rule('For hero characters, ship side-by-side RGB+alpha MP4s and composite them in a tiny WebGL quad; keep a Canvas2D fallback and a luminance mode for simple masks.'),
      p('Readable code: ' + readableLink(25221) + ', ' + readableLink(40489) + ', ' + readableLink(68408) + ', ' + readableLink(73992) + '.'),
    ].join('');
  } },
  { slug: 'lore-3d', title: 'LORE: three.js point-cloud scene and particles', html() {
    const rs = rulesFor('__03-Lore', r => !r.media.length && /(canvasContainer|ring__|container__ZiS0O|activeIntro|sectionDivider|dividerTitle|dividerSubtitle|modelName|tab|intro)/.test(r.selector)).slice(0, 18);
    const lore = data.states.lore_divider && data.states.lore_divider.lore;
    return [
      observed('Below the operator stage, the LORE section renders a three.js r178 scene (data-engine="three.js r178" on the canvas, measured 1830×1080 at 1440×900) into .__03-Lore_canvasContainer with cursor:grab. PointCloudModelPlayer loads six binary point models (spaceship, anchor, factory, pile, trinity, enemy — .bin files under /_next/static/media/model/) and draws them as a point cloud with a scan-line reveal, laser rays, glitch effects and drag-to-rotate (mouse and touch). setup() runs during the loader: it benchmarks a 10 000-point render and picks renderLevel 2/1/0 (rays per batch 8/14/20, maximum rays 500/1000/2000, pixel ratio 0.75 at level 2), then normalises every model binary. Switching models plays the "model" sound and fires content_view tracking.'),
      observed('Model binaries referenced from chunk 226: spaceship.752e25.bin, factory.bd9a36.bin, trinity.d6c060.bin, anchor.0e6c6a.bin, enemy.6a1a19.bin, pile.251dc1.bin (plain Float32 position buffers; not encrypted).'),
      excerpt(83597, '? (this.renderLevel = 2)', 12, { skip: -10 }), excerpt(83597, 'static get renderLevelValue()', 10),
      cssBlock(rs, { max: 18 }),
      shotIf('capture/states/section-information.png', 'scrolling past LORE into INFORMATION, 1440×900'),
      inferred('The point cloud is the site\'s "signal" motif made literal: objects are rendered as data rather than surfaces, which matches the dossier/telemetry language of the typography (REC, counters, hairlines). The quality tiers protect frame rate on weak GPUs instead of disabling the effect.'),
      rule('If a real-time scene is used, benchmark once during the loader and pick a quality tier; keep interaction to drag-rotate and reuse the same ease-out language as the DOM animations.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → PointCloudModelPlayer, PointCloudActor, PerlinNoise, TypewriterText') + '.'),
    ].join('');
  } },
  { slug: 'information', title: 'INFORMATION section: background video, swiper and media modal', html() {
    const rs = rulesFor('__04-Information', r => !r.media.length).slice(0, 22);
    const m = sec('information');
    const title = (data.states.section_titles || [])[0];
    return [
      observed('A 90rem black section. A muted looping background video (VideoBasic/VideoCanvas depending on UA; 90% × 90% object-fit cover, fades out .6s via the fadeOut class) sits under a black gradient scrim; a 1px yellow decoLine (linear-gradient(90deg,#fdfd1f 40%, transparent 75%)) at bottom 16.875rem; a 47rem blurred logo at top 39rem; the current video\'s tag (#38383a chip), date (#fdfd1f SansRegular), title (2rem/1.8 auto-fitted with a hidden probe) and two buttons (play: 4.5rem #fdfd1f square whose triangle scales 1.25 on hover; "more": Button component). Right: a swiper of 33.75rem covers (height 19rem); the active slide is brightness 1 / scale 1, the others brightness .5 / scale .8 (.3s ease-out), with a yellow gradient footer on the active cover; prev/next 4.5rem circular #fafafa buttons with #35373c chevrons and a "01 / 03" readout.'),
      observed('Playing a video opens the Media modal (fixed, rgba(0,0,0,.5), opacity .3s ease-in-out) with a 125rem × 70.3rem YouTube iframe and a yellow 4rem close button whose icon rotates 90° on hover; while open the background music is disabled and video_play_start/end tracking fires.'),
      measured('Swiper classes switched at 2.84 s and 3.49 s (swiper-slide-active / __04-Information_active); the section title arrow block translated from −58.5px to 0 and the title text flickered to opacity 1 (SectionTitle reveal, 400/600 ms after in-view).'),
      table(['Element', 'Window', 'Animated properties'], tlRows('en-us', /^__04-Information|swiper/, 8)),
      title ? specimen('SectionTitle — the section heading component (wordmark 0 0 122 6 at top −.875rem, a 6.5rem #d9d9d9 arrow block that slides in .5s ease-out with a rotating arrow, 3rem SansBold title)', title) : '',
      excerpt(12914, '(0, React.useEffect)(() => {', 24),
      cssBlock(rs, { max: 22 }),
      shotIf('capture/states/section-information.png', 'INFORMATION at 1440×900'),
      inferred('The only dark section on the home page is the one that frames video: black makes the covers read like a cinema wall and lets the yellow date/line act as a cursor. The scale/brightness pair on inactive slides is a focus metaphor rather than a carousel border.'),
      rule('Use one dark chapter for motion media; indicate focus with brightness + scale (not borders); keep the accent as a thin line and a chip, not a panel.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → InformationSection, InfoVideoTitle') + ', ' + readableLink(12914) + ', ' + readableLink(73992) + ', ' + readableLink(73560) + '.'),
    ].join('');
  } },
  { slug: 'calendar', title: 'CALENDAR section: sticky title and timeline images', html() {
    const rs = rulesFor('__09-Calendar', r => !r.media.length).slice(0, 12);
    const kf = data.cssRules.keyframes.find(k => k.name.startsWith('__09-Calendar'));
    return [
      observed('A max-content-height section padded 6rem 0 2rem. A 142.8rem-wide stick container (title + timeline images) starts absolute at left calc(50% − 66.5625rem) with opacity 0; in landscape it becomes position:fixed at top 0 (z-index 2) while the section scrolls and is parked absolute at the bottom at the end (stickFixed / stickBottom classes), with a white gradient fade under it. The calendar artwork (141.375rem wide, margin-top 25rem) fades in; in portrait a horizontally draggable 63.75rem calendar scroll replaces it. The download-button background breathes with the downloadBgBreath keyframe.'),
      kf ? code(kf.css) : '',
      excerpt(83597, '[styles17().stickFixed]: "fixed" === stickMode', 6, { skip: -3 }),
      cssBlock(rs, { max: 12 }),
      shotIf('capture/states/section-calendar.png', 'CALENDAR at 1440×900'),
      inferred('The calendar is the one section that relies on scroll position as a timeline: fixing the title while the body scrolls turns the page into a long poster you read downward. It is also the only place using position:fixed inside content, which is why it needs the parked bottom state.'),
      rule('When one section is much taller than the viewport, pin its title with a fixed/parked pair instead of sticky so the pin can be released at a precise scroll offset.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → CalendarSection') + '.'),
    ].join('');
  } },
  { slug: 'gameplay-aic', title: 'GAMEPLAY and AIC: the GameplayAlbum carousel', html() {
    const rs = rulesFor('GameplayAlbum', r => !r.media.length).slice(0, 16).concat(rulesFor('__05-Gameplay', r => !r.media.length).slice(0, 8));
    const kf = data.cssRules.keyframes.filter(k => /Gameplay|AIC/.test(k.name));
    const album = stateMarkup('gameplay_album');
    return [
      observed('Both sections reuse GameplayAlbum: a 111.5rem × 54.375rem image container with three stacked layers (bottom #191919 plate, middle image with filter grayscale(1) brightness(.76) contrast(200) url(#red-green) and a #fffa00 div variant, top video via the players component), a 19rem yellow right strip carrying a rotated 51.5rem white line with the ENDFIELD wordmark, the section title in 4.5rem Novecentosanswide-DemiBold and a Gilroy-Medium caption; below it a detail block (2rem index scaled .5, 3rem SansMedium title, 1.875rem/1.5 description within 90.125rem) and a Pagination. The GAMEPLAY variant is positioned at calc(50% − 80rem + 3.75rem + 38rem) / top 30.375rem; the AIC variant is mirrored (row-reverse, #ededed strip) at + 28.3125rem / top 5.75rem and is hidden from the rail (hideNav).'),
      observed('Item changes play the clip-reveal animation: anime.js animates clip-path polygons from a collapsed edge with an ease-out-quart curve (1 − (1 − p)^4); the decoLeft code-printer block flashes once with the flashing keyframe (1s ease-out).'),
      measured('Chromium logged the album layers\' clip-path going from polygon(100% 0, 100% 0, 100% 100%, …) to polygon(0 0, 100% 0, 100% 100%, 0 100%) (bottom 2.84–3.49 s, middle to 3.57 s, top video to 4.34 s) and the index/title/description opacity 0 → 1 over 46 frames each.'),
      table(['Element', 'Window', 'Animated properties'], tlRows('en-us', /^GameplayAlbum|__05-Gameplay|__08-AIC/, 10)),
      kf.map(k => code(k.css)).join(''),
      excerpt(84245, 'clipRevealAnimation = (clipElement, direction, isReveal, clipDuration) =>', 30),
      cssBlock(rs, { max: 24 }),
      shotIf('capture/states/section-gameplay.png', 'GAMEPLAY at 1440×900'), shotIf('capture/states/section-aic.png', 'AIC at 1440×900'),
      inferred('The album is a wipe-reveal slideshow: each change redraws the picture from one edge, which reads as a shutter rather than a slide. The three-layer stack (plate, duotone still, live video) is why the transition never shows an empty frame.'),
      rule('Reveal media with clip-path wipes (300–600 ms, quart ease-out) over a dark plate; stack a still under the video so the wipe always has pixels to show.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → GameplayAlbum, GameplayMarquee, AicSection') + ', ' + readableLink(84245) + ', ' + readableLink(26915) + ', ' + readableLink(89622) + '.'),
    ].join('');
  } },
  { slug: 'notice', title: 'NOTICE section: bulletin carousel, Pagination and Button', html() {
    const rs = rulesFor('__06-Notice', r => !r.media.length && /(noticeItem|carouselContainer|titleContainer|detailButton|leftDeco__ML9u3 |carouselPagination|pageTitle)/.test(r.selector)).slice(0, 14).concat(rulesFor('Carousel'));
    const carousel = stateMarkup('notice_carousel');
    const item = first(carousel, '__06-Notice_noticeItem__7v58F', 20000);
    const pagination = first(carousel, 'Pagination_pagination__3IDBu', 8000) || first(pageDom('en-us'), 'Pagination_pagination__3IDBu', 8000);
    const button = first(carousel, 'Button_button__njqVS', 4000) || first(pageDom('en-us'), 'Button_button__njqVS', 4000);
    return [
      observed('An 85.25rem section (margin-bottom 10rem). A 152.5rem carousel container, masked with a horizontal gradient (transparent 0 → black 1.5rem … 151rem → transparent), holds 55rem × 30.9rem notice cards: the active card is scale(1), the others scale(.818) with an rgba(0,0,0,.5) overlay (transform/opacity .4s ease-in-out). Above it the subtitle (tab + time, 1.5rem SansMedium gray) and a 2.25rem title with a 149.5rem #d9d9d9 hairline; below, the Pagination (number type) at top 50.625rem and a Button ("detail") at top 51rem / left 18.75rem. The left column is an 8.25rem yellow deco bar with masked images and the word LATEST (2.25rem SansBold #2e2e2e). Clicking a card plays common_click and opens /news/<cid> in a new tab; the mobile variant shows two cards per page with number pagination.'),
      sub('Live specimens'),
      p('<strong>The bulletin card (__06-Notice_noticeItem) is styled only inside .__06-Notice_sectionContainer</strong>, so it is shown in the section screenshot below and by its CSS; its captured markup is in capture/states/states.json (notice_carousel).'),
      pagination ? `<table><tbody><tr><th colspan="3"><p>Pagination (number type) — prev/next 4.625rem #fafafa discs on a #e6e6e6 pill with a hatched :before at 5% opacity. Hover a disc: background → #fffa00, texture opacity .4 → 1 (.2s)</p></th></tr><tr><td><p>In the section it is absolutely positioned and shrink-wrapped; here the middle cell approximates that width.</p></td><td>${pagination}</td><td><p>Arrow buttons play arrow_click; the readout is current+1 / total in Novecentosanswide-Medium.</p></td></tr></tbody></table>` : '',
      button ? specimen('Button — 20rem × 4.5rem #383838 block with a textured :before and a yellow clip-path marker :after. Hover: background #484848, radius 6px, marker becomes an arrow and shifts .875rem (.2s)', button) : '',
      table(['Element', 'Node', 'Computed change', 'Transition'], hoverRows('Pagination_').concat(hoverRows('Button_'))),
      excerpt(83597, 'carouselItemTransform = (slotIndex, activeSlot) => {', 16),
      cssBlock(rs, { max: 17 }),
      cssBlock(rulesFor('Button', r => !r.media.length), { max: 15 }),
      shotIf('capture/states/section-notice.png', 'NOTICE at 1440×900'),
      inferred('Cards are presented like a film strip with a focused frame: scale + dim instead of arrows-and-dots. The Button\'s yellow marker turning into an arrow on hover is the site\'s signature micro-interaction and appears everywhere a Button is used.'),
      rule('Carousels: one focused card at scale 1, siblings at ~0.82 and dimmed 50%, .4 s ease-in-out; buttons: dark textured block, 2px radius that rounds to 6px on hover, and a left marker that animates into an arrow.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → NoticeCarousel, NoticeCarouselItem, NoticePagination') + ', ' + readableLink(2682) + ', ' + readableLink(30257) + '.'),
    ].join('');
  } },
  { slug: 'download-modals', title: 'Download panel, reservation and account modals', html() {
    const dl = stateMarkup('downloader'); const rs = rulesFor('downloader', r => !r.media.length).slice(0, 14);
    const modal = rulesFor('ModalFrame', r => !r.media.length).slice(0, 8).concat(rulesFor('ReserveModal', r => !r.media.length).slice(0, 6), rulesFor('UserModal', r => !r.media.length).slice(0, 4), rulesFor('Media', r => !r.media.length).slice(0, 4));
    return [
      observed('The download panel (downloader + pc-oversea layout) is a 12.5rem translucent block (rgba(0,0,0,.5) with a .9375rem border-left of the same colour, radius .25rem) holding a yellow 1.6875rem icon square, a SansMedium title with a #4d4d4d left rule, and platform items: 12.25rem × 3.625rem black tiles with a 1px #8f8f8f border on the overseas build, hover #222 / active #333 (.2s). Store badges are sized per platform (App Store 3.375rem tall, Google Play 100%, Epic 6.3125rem wide, PS5 7.5rem, Windows inverted). Clicking a tile goes through Tracking.download or the launcher deep link.'),
      p('<strong>Why the panel is not embedded live:</strong> its store badges are &lt;img&gt; elements sized by the two-class rule .downloader_item img.downloader_appStore (height 3.375rem), and this article template\'s own rule .__20-NoticeDetail_content img { max-width:100%; height:auto } has higher specificity, so inside an article the badges would fall back to their natural pixel size. The panel is therefore shown by screenshot and CSS; its captured markup is in capture/states/states.json (downloader).'),
      table(['Element', 'Node', 'Computed change', 'Transition'], hoverRows('downloader_')),
      cssBlock(rs, { max: 14 }),
      observed('Modals share ModalFrame: a 109rem #fafafa frame with a dotted points-bg texture, an 8.75rem #1f1f1f header with the hatched gradient and a 3.75em SansRegular title, a close icon that rotates 90° on hover (.2s ease-in-out), and a decoLB corner mark. ReserveModal (z-index 90), UserModal (52.5rem container, 37.5rem content), the ja-jp Originium query modal and the Media modal all fade in with opacity .3s ease-in-out over an rgba(0,0,0,.5) scrim; Toast (z-index 2000) fades 300 ms with cubic-bezier(.25,.1,.25,1) and lasts 2000 ms.'),
      cssBlock(modal, { max: 22 }),
      shotIf('capture/states/user-modal.png', 'user modal open'),
      inferred('Every overlay uses the same three ingredients (half-black scrim, hatched dark header, dotted light body), so dialogs feel like printed forms rather than web pop-ups. The reservation and account flows are SDK-driven; the site only styles the frame.'),
      rule('One modal frame for everything: 50% scrim, dark textured header with a single centred title, light dotted body, close icon with a 90° hover twist.'),
      p('Readable code: ' + readableLink(83597, 'HomeLayout → DownloadPanel, DownloadPlatformItem, ReserveModal') + ', ' + readableLink(92610) + ', ' + readableLink(94150) + ', ' + readableLink(12914) + ', ' + readableLink(71985) + '.'),
    ].join('');
  } },
  { slug: 'footer', title: 'Footer and language picker (live below)', html() {
    const rs = rulesFor('footer', r => !r.media.length).slice(0, 16);
    return [
      t('Scroll to the bottom of this page: the footer there is the live component.'),
      observed('A #101010 band. The top container (border-bottom 1px rgba(81,81,81,.5)) centres a 1.25rem SansMedium #6e6e6e label, a 23.25rem × 4.5rem #f0f0f0 language picker (globe SVG at left 1.375rem, text in the system stack, an arrow rotated 90° that turns 270° when active) whose dropdown (opacity .2s, z-index 1000, 17.25rem scroll area, 3.75rem rows separated by 90% #888 hairlines) lists the 13 languages; picking one rewrites the first path segment. The legal links (1.25rem SansMedium #f0f0f0, separated by 3rem gutters and rgba(240,240,240,.3) rules) are rendered into the bottom container by the Gryphline SDK (Tracking.insertFooter).'),
      excerpt(46173, 'switchLanguage = (0, React.useCallback)', 8),
      cssBlock(rs, { max: 16 }),
      shotIf('capture/states/footer.png', 'footer at rest'), shotIf('capture/states/footer-language-open.png', 'language dropdown open'),
      inferred('The footer is deliberately utilitarian and near-black so the white canvas above ends with a hard stop; the only control is language, which is the one setting every visitor may need.'),
      rule('End with a near-black utility band; put only global settings and legal links there; use a light button for the one interactive control so it reads against the dark field.'),
      p('Readable code: ' + readableLink(46173) + ', ' + readableLink(1162) + '.'),
    ].join('');
  } },
];
