/**
 * GAMEPLAY_ITEMS — readable reconstruction of webpack module 26915 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * GameplayItemsText exports (as g) the four-entry list for the gameplay section: keys '01' to '04', each with an i18n titleKey 'gameplay.items.N.title', descriptionKey 'gameplay.items.N.description' and an image required inline from modules 51282, 46301, 63376 and 20371.
 *
 * Exports (minified key → meaning):
 *   g → GAMEPLAY_ITEMS
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 26915 from 8963-234f979bdd6b491c.js
// deps: 51282, 46301, 63376, 20371
const module_26915 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    g: () => GAMEPLAY_ITEMS,
  });
  let GAMEPLAY_ITEMS = [
    {
      key: "01",
      titleKey: "gameplay.items.0.title",
      descriptionKey: "gameplay.items.0.description",
      image: webpackRequire(51282),
    },
    {
      key: "02",
      titleKey: "gameplay.items.1.title",
      descriptionKey: "gameplay.items.1.description",
      image: webpackRequire(46301),
    },
    {
      key: "03",
      titleKey: "gameplay.items.2.title",
      descriptionKey: "gameplay.items.2.description",
      image: webpackRequire(63376),
    },
    {
      key: "04",
      titleKey: "gameplay.items.3.title",
      descriptionKey: "gameplay.items.3.description",
      image: webpackRequire(20371),
    },
  ];
};
