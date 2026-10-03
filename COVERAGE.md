# Component coverage

Every CSS-module component of the live site (depth-1 en-us pages), the pages it renders on, and how the single-page handbook uses it. "specimen" = verbatim live markup embedded in the handbook and styled by the live stylesheets; "live" = the component is part of the article shell the handbook runs in; "screenshot + CSS" = shown by capture and exact rules (either nested-scoped CSS that only applies inside its section, or an `<img>` rule conflict with the article template); "CSS only" = declared in the stylesheets but never rendered on the captured pages.

| Component | Rules | Stylesheet(s) | Renders on | Hover diffs | In the handbook |
| --- | ---: | --- | --- | ---: | --- |
| BackButton | 4 | 0ff6a898df0edefb.css | — | 0 | CSS only (not rendered at depth 1) |
| Button | 15 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 1 | specimen (#notice) |
| Carousel | 3 | dd1a1cedef0d47ea.css | / | 0 | screenshot + CSS |
| Dropdown | 48 | cca0e7eae4809d1e.css | //operator | 1 | specimen (#catalogue) |
| GameplayAlbum | 46 | dd1a1cedef0d47ea.css | / | 0 | screenshot + CSS |
| HallowText | 1 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| Header | 193 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 40 | live in the article shell |
| HomeButton | 25 | 0ff6a898df0edefb.css | — | 0 | CSS only (not rendered at depth 1) |
| LandingBottom | 20 | 0ff6a898df0edefb.css | — | 0 | CSS only (not rendered at depth 1) |
| LandingGameplay | 46 | 0ff6a898df0edefb.css | — | 0 | CSS only (not rendered at depth 1) |
| Media | 12 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| ModalFrame | 25 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| OperatorItem | 27 | cca0e7eae4809d1e.css | //operator | 1 | specimen (#catalogue) |
| OrigQuery | 52 | 3bd8ebba7b8795c3.css | — | 0 | CSS only (not rendered at depth 1) |
| Pagination | 28 | 0ff6a898df0edefb.css | /, //news | 2 | specimen (#notice, #news) |
| ReserveModal | 72 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| RollingContent | 12 | 0ff6a898df0edefb.css | / | 0 | screenshot + CSS |
| ScrollViewer | 4 | 1ef245f541070a31.css | — | 0 | CSS only (not rendered at depth 1) |
| SectionTitle | 11 | 0ff6a898df0edefb.css | / | 0 | specimen (#information) |
| SectionViewer | 5 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| SubpageHeader | 27 | 0ff6a898df0edefb.css | //news | 0 | specimen (#news) |
| SubpageTab | 21 | 0ff6a898df0edefb.css | //news | 1 | specimen (#news) |
| TextShrink | 2 | 3bd8ebba7b8795c3.css | — | 0 | CSS only (not rendered at depth 1) |
| Toast | 3 | 1ef245f541070a31.css | — | 0 | CSS only (not rendered at depth 1) |
| TransparentVideo | 3 | 6b6d9a58b4c43339.css | — | 0 | CSS only (not rendered at depth 1) |
| UserModal | 11 | 3bd8ebba7b8795c3.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| __00-Loading | 30 | 3bd8ebba7b8795c3.css | / | 0 | screenshot + CSS |
| __00-landing | 52 | 0ff6a898df0edefb.css | — | 0 | CSS only (not rendered at depth 1) |
| __01-Home | 2 | 0ff6a898df0edefb.css | / | 0 | screenshot + CSS |
| __02-Operator | 324 | 5db72e0ba5b54b39.css | / | 2 | specimen (#operator-stage) |
| __03-Lore | 134 | 0ff6a898df0edefb.css | / | 0 | specimen (#information) |
| __03-gameplay | 35 | 0ff6a898df0edefb.css | — | 0 | CSS only (not rendered at depth 1) |
| __04-Information | 73 | 89618c72836110eb.css | / | 2 | screenshot + CSS |
| __04-finalpage | 40 | 1ef245f541070a31.css | — | 0 | CSS only (not rendered at depth 1) |
| __05-Gameplay | 28 | dd1a1cedef0d47ea.css | / | 0 | screenshot + CSS |
| __06-Notice | 52 | dd1a1cedef0d47ea.css | / | 0 | specimen (#notice) |
| __08-AIC | 35 | dd1a1cedef0d47ea.css | / | 0 | screenshot + CSS |
| __09-Calendar | 23 | dd1a1cedef0d47ea.css | / | 0 | screenshot + CSS |
| __10-NoticeList | 32 | 2174f0c4d179760f.css | //news | 0 | specimen (#news) |
| __12-OperatorList | 20 | cca0e7eae4809d1e.css | //operator | 0 | screenshot + CSS |
| __20-NoticeDetail | 64 | 3bd8ebba7b8795c3.css | //news/7013 | 0 | specimen (#article) |
| __21-ProtocolDetail | 35 | 1a7ed5873254240b.css | //protocol/privacy/policy, //protocol/terms/of/service | 0 | screenshot + CSS |
| bg | 56 | 0ff6a898df0edefb.css | / | 0 | screenshot + CSS |
| downloader | 60 | 79293df1a997d2da.css | / | 1 | screenshot + CSS |
| footer | 32 | 0ff6a898df0edefb.css | /, //news, //news/7013, //operator | 0 | live in the article shell |
| h5-cn | 18 | 79293df1a997d2da.css | — | 0 | CSS only (not rendered at depth 1) |
| h5-oversea | 15 | 79293df1a997d2da.css | en-us (portrait) | 0 | screenshot + CSS |
| pc-cn | 22 | 79293df1a997d2da.css | — | 0 | CSS only (not rendered at depth 1) |
| pc-oversea | 8 | 79293df1a997d2da.css | / | 0 | screenshot + CSS |
| players | 4 | 3bd8ebba7b8795c3.css | / | 0 | screenshot + CSS |
| protocol | 3 | 637308dda4dd7f2d.css | //protocol/privacy/policy, //protocol/terms/of/service | 0 | screenshot + CSS |
| sections | 6 | dd1a1cedef0d47ea.css | /, //news, //news/7013, //operator | 0 | live in the article shell |

Embedded components: 12; live shell components: 10; total: 52. Interaction states captured for the rest are in `capture/states/states.json` and `capture/states/*.png`.
