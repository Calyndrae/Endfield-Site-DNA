/**
 * AIC_ITEMS — readable reconstruction of webpack module 89622 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * AicItemsText exports (as j) the five-entry list for the AIC (knowledge) section: keys '01' to '05', each pairing an i18n titleKey 'aic.items.N.title' and descriptionKey 'aic.items.N.description' with an imported image module (m01Image to m05Image). Components resolve the keys through the i18n t() function at render time.
 *
 * Exports (minified key → meaning):
 *   j → AIC_ITEMS
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 89622 from 8963-234f979bdd6b491c.js
// deps: 34573, 71494, 93247, 48056, 80753
const module_89622 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    j: () => AIC_ITEMS,
  });
  var m01Image = webpackRequire(34573),
    m02Image = webpackRequire(71494),
    m03Image = webpackRequire(93247),
    m04Image = webpackRequire(48056),
    m05Image = webpackRequire(80753);
  let AIC_ITEMS = [
    {
      key: "01",
      titleKey: "aic.items.0.title",
      descriptionKey: "aic.items.0.description",
      image: m01Image.A,
    },
    {
      key: "02",
      titleKey: "aic.items.1.title",
      descriptionKey: "aic.items.1.description",
      image: m02Image.A,
    },
    {
      key: "03",
      titleKey: "aic.items.2.title",
      descriptionKey: "aic.items.2.description",
      image: m03Image.A,
    },
    {
      key: "04",
      titleKey: "aic.items.3.title",
      descriptionKey: "aic.items.3.description",
      image: m04Image.A,
    },
    {
      key: "05",
      titleKey: "aic.items.4.title",
      descriptionKey: "aic.items.4.description",
      image: m05Image.A,
    },
  ];
};
