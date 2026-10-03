# Endfield website DNA — written specification

Companion to the single-page handbook (`handbook/index.html`, served at `/en-us/news/7013` by `tools/serve.mjs`). Everything here is derived from the archived stylesheets (`capture/css`), the split and renamed JavaScript (`source/`), and headless-Chromium measurements of the live pages on 2026-10-03 (`capture/pages`, `capture/states`). Labels: **OBSERVED** (read from shipped code/responses), **MEASURED** (reported by Chromium), **INFERRED** (interpretation, never a fact).

Scope: `/en-us`, `/en-us/operator`, `/en-us/news`, `/en-us/news/7013`, `/en-us/protocol/terms_of_service`, `/en-us/protocol/privacy_policy` (depth 1). 1984 CSS rules, 13 keyframes, 11 @font-face declarations, 124 colour literals, 52 CSS-module components, 67 hover/active/focus rules, 134 transition/animation declarations, 45 z-index rules.

## 1. Rendering scale (OBSERVED / MEASURED)

- Root font-size = 16px × min(w/2560, h/1440) in landscape, 16px × min(w/1080, h/1920) in portrait (`applyRootFontSize`, module 14577). Measured: **9px at 1440×900**, **5.7778px at 390×844**. Every size below is in rem; multiply by 9 for the reference desktop.
- Media queries use orientation only: 435 portrait conditions, 138 landscape, 43 any-hover. No width breakpoints.
- Desktop columns are anchored to a 160rem canvas: `calc(50% - 80rem + 3.75rem + <offset>)`. The rail is 7.5rem × 100vh.

## 2. Colour (OBSERVED, declaration counts)

| value | declarations | properties | components |
| --- | --- | --- | --- |
| #191919 | 91 | color 74, border-left 2, background-color 15 | footer, Pagination, SubpageHeader, SubpageTab, HomeButton |
| #fff | 81 | background-color 28, color 35, border 3 | LandingBottom, bg, __00-landing, Pagination, SubpageHeader |
| #fffa00 | 59 | color 7, background-color 34, background-image 15 | LandingBottom, __00-landing, Pagination, SubpageHeader, HomeButton |
| #d9d9d9 | 24 | background-color 18, border 1, border-right 1 | SubpageTab, HomeButton, SectionTitle, __03-gameplay, __21-ProtocolDetail |
| #999 | 19 | color 15, border-color 1, background-color 2 | SubpageTab, HomeButton, __03-gameplay, __03-Lore, __04-finalpage |
| #000 | 17 | background-color 10, text-shadow 2, color 4 | LandingBottom, __03-Lore, Button, Header, players |
| rgba(0,0,0,.5) | 17 | background-color 11, box-shadow 1, border-left 1 | Media, OrigQuery, ReserveModal, UserModal, __02-Operator |
| #35373c | 15 | border 2, border-top 6, border-left 4 | __03-Lore, __04-Information |
| #f2f2f2 | 14 | background-color 12, color 1, border 1 | HomeButton, __21-ProtocolDetail, __10-NoticeList, __20-NoticeDetail, Header |
| #e5e5e5 | 13 | background-color 11, border 2 | SubpageTab, __20-NoticeDetail, OrigQuery, ReserveModal, UserModal |
| #00ffa2 | 13 | background-image 13 | __03-Lore, __02-Operator, Dropdown, OperatorItem |
| #e6e6e6 | 11 | border 4, background-color 7 | Pagination, __21-ProtocolDetail, __10-NoticeList, __20-NoticeDetail, ReserveModal |
| #ccc | 11 | border-left 1, color 4, background-color 4 | HomeButton, ModalFrame, OrigQuery, Header, __02-Operator |
| #ffffff | 11 | filter 9, background-image 2 | __21-ProtocolDetail, __20-NoticeDetail, ModalFrame, OrigQuery |
| #666 | 10 | color 4, border-left 2, border-right 2 | __00-landing, __03-Lore, Button, __00-Loading, __02-Operator |
| #fafafa | 10 | background-color 7, background 3 | Pagination, SubpageTab, __03-Lore, __10-NoticeList, ModalFrame |
| #b3b3b3 | 10 | color 9, background-color 1 | __21-ProtocolDetail, __20-NoticeDetail, ModalFrame, OrigQuery, ReserveModal |
| #424242 | 9 | background-image 8, color 1 | BackButton, Header, __02-Operator |
| #888 | 8 | background-color 3, color 5 | footer, __00-landing, HomeButton, __10-NoticeList, Button |
| #f0f0f0 | 7 | background-color 4, color 1, background-image 2 | footer, Button, OrigQuery |
| rgba(0,0,0,.25) | 7 | background-color 1, box-shadow 5, filter 1 | __10-NoticeList, Button, Dropdown, __06-Notice |
| #ff00f0 | 7 | background-image 7 | __02-Operator, Dropdown, OperatorItem |
| #2e2e2e | 6 | color 5, background-color 1 | LandingBottom, __00-landing, ModalFrame, __06-Notice |
| #ff1aac | 6 | background-image 6 | __03-Lore |
| #fff000 | 6 | color 2, background-color 2, box-shadow 2 | __03-Lore |
| rgba(109,109,109,.5) | 6 | background-color 6 | __03-Lore |
| #bfbfbf | 6 | color 2, background-image 4 | Header, __02-Operator |
| #333 | 6 | border 3, background-color 3 | __02-Operator, downloader, pc-cn |
| #fdfd1f | 6 | background-image 2, background-color 2, color 2 | __04-Information |
| rgba(255,255,255,0) | 5 | background-image 5 | __00-landing, __00-Loading, __09-Calendar |

Roles (INFERRED from placement): ink `#191919`; paper `#fff`; signal `#fffa00` (progress bar, LORE band, pagination hover, th decoration bar, mobile active item, go-to-game hover); rule grey `#d9d9d9`; muted `#999`; light fields `#f2f2f2` / `#e5e5e5` / `#e6e6e6`; mint `#00ffa2` and magenta `#ff00f0` only inside gradient hairlines; rarity `#fe5a00` (6★) `#ffbb03` (5★) `#9452fa` (4★); language-picker active `#ffcc1a`; information-section accent `#fdfd1f`.

## 3. Typography (OBSERVED)

Faces declared by @font-face (woff2 archived in `capture/fonts`): Gilroy-ExtraBold, Gilroy-Light, Gilroy-Medium, Novecentosanswide-Bold, Novecentosanswide-DemiBold, Novecentosanswide-Medium, ProtestStrike-Regular, Roboto-Black, Roboto-Regular, SpaceGrotesk. Runtime aliases created with `new FontFace()` from the en-us bundle: SansBlack → HarmonyOS Sans Black, SansBold → HarmonyOS Sans Bold, SansMedium → HarmonyOS Sans Medium, SansRegular → HarmonyOS Sans Regular.

| family | declarations | components |
| --- | --- | --- |
| SansMedium | 42 | footer, __00-landing, SubpageTab, HomeButton, BackButton, LandingGameplay |
| SansRegular | 27 | __00-landing, __03-Lore, __21-ProtocolDetail, __10-NoticeList, __20-NoticeDetail, ModalFrame |
| Gilroy-Medium | 19 | __00-landing, SubpageHeader, SectionTitle, __03-gameplay, LandingGameplay, __03-Lore |
| SansBold | 9 | LandingBottom, SubpageHeader, SectionTitle, OrigQuery, __02-Operator, OperatorItem |
| Novecentosanswide-Medium | 6 | LandingBottom, Pagination, LandingGameplay, OperatorItem, GameplayAlbum |
| Novecentosanswide-DemiBold | 6 | LandingGameplay, __02-Operator, GameplayAlbum |
| Novecentosanswide-Bold | 5 | Pagination, __20-NoticeDetail, HallowText, __02-Operator |
| Gilroy-Light | 5 | SubpageHeader, __03-Lore, __02-Operator |
| Segoe UI,Roboto,Helvetica Neue,Arial,Pin | 3 | footer, __06-Notice |
| sans-serif | 3 | Header, protocol |
| SansBlack | 2 | LandingBottom, __00-landing |
| SpaceGrotesk | 2 | __02-Operator |

Font-size ladder (declarations): 1.5rem ×28, 1.25rem ×18, 2.25rem ×17, 1.875rem ×17, 2rem ×15, 1.375rem ×15, 3rem ×14, 2.5rem ×13, 1.125rem ×12, 1.75rem ×11, 1rem ×9, 1.625rem ×9, .9em ×6, .75em ×6, .8em ×6, 4.5rem ×4. Line-height 1 in 69 declarations. Letter-spacing: -.02em ×10, -.03em ×10, 0 ×4, -1px ×3, -.04em ×2, -.06em ×2. The operator-card name is auto-fitted by bisection (28 steps, 0.5625–1.6875rem, box 11.1875rem, canvas measureText in "SansBold").

## 4. Spacing (OBSERVED)

Most frequent declarations: margin-top: 1rem ×12, margin-top: 1.25rem ×11, margin-top: 1.5rem ×8, margin-left: auto ×8, margin-right: auto ×7, margin-top: 2rem ×7, margin-left: 2rem ×6, gap: 2.5rem ×6, margin-left: 0 ×5, margin-right: 0 ×5, margin-top: 0 ×5, margin: 0 ×5, padding: 0 ×5, gap: .625rem ×5, margin-top: 2.5rem ×4, margin-left: .75rem ×4, gap: .5rem ×4, padding-top: 2.25rem ×4, margin-top: .5rem ×4, margin-left: 1.25rem ×4, padding: 0 .75rem ×4, padding: 1rem ×4, padding: 0 2rem ×4, margin-bottom: 2.5rem ×3. Rhythm (INFERRED): a 0.25rem ladder; labels 1.25rem, badges 2rem, rows 2.5rem, blocks 5rem; hairlines `.1875rem #d9d9d9` instead of boxes.

## 5. Layers (OBSERVED)

| z-index | position | selector |
| --- | --- | --- |
| 2000 | fixed | .Toast_toast_ZnoVW |
| 1000 | absolute | .footer_footer_6jTqE .footer_topContainer_sMUtI .footer_languageItem_TXB_u .footer_dropDow |
| 200 | fixed | ._21-ProtocolDetail_sectionContainer_XZ_gX ._21-ProtocolDetail_contentContainer_VjiZj ._21 |
| 200 | fixed | ._20-NoticeDetail_sectionContainer_06Hmx ._20-NoticeDetail_backButton_pWmC1 |
| 100 | fixed | .Toast_toast_ZnoVW .Toast_content_a8lPb |
| 100 | fixed | ._00-Loading_container_aBijT |
| 100 | fixed | .sections_modalLayer_0Rqmm |
| 90 | fixed | .ReserveModal_reserveModal_xb3np |
| 70 | absolute | .Header_h5HeaderContainer_ctquk .Header_logo_s3lE_ |
| 70 | absolute | .Header_h5HeaderContainer_ctquk .Header_menuIcon_X_Cn9 |
| 60 | fixed | .Header_h5Menu_Tl_yj |
| 50 | relative | .Header_pcHeaderContainer_Sy_8l |
| 50 | relative | .Header_h5HeaderContainer_ctquk |
| 20 | absolute | .Dropdown_panel_ujBcP |
| 10 | absolute | .swiper-3d .swiper-slide-shadow,.swiper-3d .swiper-slide-shadow-bottom,.swiper-3d .swiper- |
| 10 | absolute | .swiper-lazy-preloader |


## 6. Motion (OBSERVED / MEASURED)

- CSS keyframes: RollingContent_carousel__Yi3KP, __03-gameplay_flashing__wp7NK, __04-finalpage_flashing__w5gJk, ScrollViewer_scrollTipMove__4X_XG, ScrollViewer_scrollBreathing__ijjPq, OrigQuery_rotate__o1MMK, __00-Loading_fadeIn__CDcQn, h5-cn_scrollTipMove__uvZzG, h5-oversea_scrollTipMove__ObqWD, swiper-preloader-spin, __05-Gameplay_flashing__W8_Z1, __08-AIC_flashing__pEebW, __09-Calendar_downloadBgBreath__9_Ko0.
- JavaScript: anime.js 3.2.1 timelines (operator stage: deco at 300 ms, text at 600 ms, buttons at 1200 ms, 400/300 ms easeOutQuad; illustration 5000 ms cubicBezier(0,1,0,.95) and 8000 ms cubicBezier(0,1,0,.97)); text flicker 100/85/70 ms; clip-path wipes with quart ease-out; framer-motion spring (stiffness 120, damping 20) and 0.5 s tweens in the loader; 0.3 s easeOut cross-fades in the catalogue and news list; RollingText marquee 40px/s with 1 s holds.
- Hover: 67 rules, 43 under `@media (any-hover:hover)`; durations .15/.2/.3 s; the only movements are the card lift (translateY(-.5rem)) and the Button marker (translateX(.875rem)).
- Loader exit: `.leaving` → opacity 1s delayed 1.4s + yellow wipe .6s cubic-bezier(1,0,.7,1) delayed .5s; store `loaded` after 1500 ms; unmount after 2400 ms.

## 7. Audio (OBSERVED)

`bgm.3ce37f.mp3` looped with 1000 ms fades (easeInQuad/easeOutQuad, 10 ms ticks), volume 1 desktop / 0.1 mobile, suspended on visibilitychange; twelve SFX cues (arrow_click, char_click, char_detail_enter, char_list_enter, close_click, common_click, enter_click, home_enter, menu_click, model, news_cate_click, reserve_click) through a 10-element audio pool; persisted mute flag `ef-official-sound-control`.

## 8. Structure (OBSERVED)

Next.js App Router (React 19), CSS Modules, webpack chunks: 708 modules / 31 chunks; libraries: framer-motion, anime.js 3.2.1, swiper, three.js r178, lottie-web 5.12.2, axios, dayjs, zustand, classnames, @emotion, lodash helpers, Gryphline web SDK v1.8.0, @hg-web/trans-video. Routes, data flow and the readable reconstructions are listed in `source/MODULE-MAP.md`.

## 9. Rules for a child site (INFERRED)

See handbook chapter 35 (“Build a child site”). In one line each: two design canvases and rem everywhere; a 160rem centred canvas with a 7.5rem rail; ink/paper/one signal colour plus a grey ladder; one reading face in four weights, one caption face, one wide display face; 0.25rem spacing ladder with hairlines; a fixed z-index order; block-and-texture controls with 0.2 s hover; loader curtain with a percentage; staggered ease-out entrances and one slow hero drift; RGB+alpha video for characters; one looping theme with fades and persisted mute; native scrolling with a nearest-centre highlighter.
