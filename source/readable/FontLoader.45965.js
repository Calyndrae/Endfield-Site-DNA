/**
 * FontLoader — readable reconstruction of webpack module 45965 (chunk [lang]__(main)__layout-493920d1b65733f5.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/layout-493920d1b65733f5.js
 *
 * Headless FontLoader component that renders null. On first render (run-once hook from module 9995) it reads the font map from useI18n().font and, for every [family, source] entry, creates a FontFace(family, source), adds it to document.fonts and awaits load(). If loading fails the FontFace is removed and it retries with only the comma-separated source part containing '.woff2' (falling back to the full source string); any remaining error is logged with console.error.
 *
 * Exports (minified key → meaning):
 *   default → FontLoader
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 45965 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 9995, 4948
const module_45965 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    default: () => FontLoader,
  });
  var useRunOnceHook = webpackRequire(9995);
  let loadFontFace = async (family, source) => {
    try {
      let fontFace = new FontFace(family, source);
      document.fonts.add(fontFace);
      try {
        await fontFace.load();
      } catch (loadError) {
        var woff2Source;
        document.fonts.delete(fontFace);
        let fallbackSource =
            null != (woff2Source = source.split(",").filter((sourcePart) => sourcePart.includes(".woff2"))[0])
              ? woff2Source
              : source,
          fallbackFontFace = new FontFace(family, fallbackSource);
        (document.fonts.add(fallbackFontFace), await fallbackFontFace.load());
      }
    } catch (error) {
      console.error(error);
    }
  };
  var I18nProviderUseI18n = webpackRequire(4948);
  let useLoadI18nFonts = () => {
      let { font: fontMap } = (0, I18nProviderUseI18n.PO)();
      (0, useRunOnceHook.i)(() => {
        Object.entries(fontMap).forEach((fontEntry) => {
          let [familyName, fontSource] = fontEntry;
          loadFontFace(familyName, fontSource);
        });
      }, !0);
    },
    FontLoader = () => (useLoadI18nFonts(), null);
};
