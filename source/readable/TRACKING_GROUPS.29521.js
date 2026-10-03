/**
 * TRACKING_GROUPS — readable reconstruction of webpack module 29521 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * TrackingGroups (export Z) maps homepage section ids to the analytics group names sent with Tracking.collect: home -> section_homepage, notice -> section_announcement, operator -> section_character, lore -> section_lore, information -> section_video, aic -> section_knowledge, gameplay -> section_gameplay and milestone -> section_reservation_reward.
 *
 * Exports (minified key → meaning):
 *   Z → TRACKING_GROUPS
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 29521 from 8963-234f979bdd6b491c.js
// deps:
const module_29521 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Z: () => TRACKING_GROUPS,
  });
  let TRACKING_GROUPS = {
    home: "section_homepage",
    notice: "section_announcement",
    operator: "section_character",
    lore: "section_lore",
    information: "section_video",
    aic: "section_knowledge",
    gameplay: "section_gameplay",
    milestone: "section_reservation_reward",
  };
};
