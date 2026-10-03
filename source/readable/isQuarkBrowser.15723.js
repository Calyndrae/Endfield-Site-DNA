/**
 * isQuarkBrowser — readable reconstruction of webpack module 15723 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * DeviceUtils exports eight case-insensitive user-agent regex predicates: I7 MiuiBrowser, TN VivoBrowser, zZ HeyTapBrowser|OppoBrowser, Jc bdhonorbrowser (Honor), B$ Quark, un iPhone|iPad|iPod, Fr Mobi|Android|iPhone|Huawei (generic mobile) and Cb skland (the HyperGryph Skland app webview). OperatorSection uses TN/zZ/I7/B$ to disable the 3D video mode, and RootFontSizeScaler and BackgroundMusic use Fr.
 *
 * Exports (minified key → meaning):
 *   B$ → isQuarkBrowser
 *   Cb → isSklandApp
 *   Fr → isMobile
 *   I7 → isMiuiBrowser
 *   Jc → isHonorBrowser
 *   TN → isVivoBrowser
 *   un → isIos
 *   zZ → isOppoBrowser
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 15723 from 8963-234f979bdd6b491c.js
// deps:
const module_15723 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  function isMiuiBrowser(uaMiui) {
    return /MiuiBrowser/i.test(uaMiui);
  }
  function isVivoBrowser(uaVivo) {
    return /VivoBrowser/i.test(uaVivo);
  }
  function isOppoBrowser(uaOppo) {
    return /HeyTapBrowser|OppoBrowser/i.test(uaOppo);
  }
  function isHonorBrowser(uaHonor) {
    return /bdhonorbrowser/i.test(uaHonor);
  }
  function isQuarkBrowser(uaQuark) {
    return /Quark/i.test(uaQuark);
  }
  function isIos(uaIos) {
    return /iPhone|iPad|iPod/i.test(uaIos);
  }
  function isMobile(uaMobile) {
    return /Mobi|Android|iPhone|Huawei/i.test(uaMobile);
  }
  function isSklandApp(uaSkland) {
    return /skland/i.test(uaSkland);
  }
  webpackRequire.d(webpackExports, {
    B$: () => isQuarkBrowser,
    Cb: () => isSklandApp,
    Fr: () => isMobile,
    I7: () => isMiuiBrowser,
    Jc: () => isHonorBrowser,
    TN: () => isVivoBrowser,
    un: () => isIos,
    zZ: () => isOppoBrowser,
  });
};
