/**
 * formatNumberWithCommas — readable reconstruction of webpack module 97521 (chunk [lang]__(main)__layout-493920d1b65733f5.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/layout-493920d1b65733f5.js
 *
 * SiteUtils exports isServer (a constant false in this client bundle), ZV formatNumberWithCommas (toFixed(0) then inserts a comma every three digits from the right, returning '0' for falsy input), aT pickRandom (returns a random element using the random-int helper from module 15790) and jx isBulletinVisible(bulletinId, regionKey), which hides a bulletin when SiteConfig.hide_bulletin_dict lists it under any region unless the given region's own list also contains it. The flattened list of all hidden bulletin ids is precomputed at module load.
 *
 * Exports (minified key → meaning):
 *   ZV → formatNumberWithCommas
 *   aT → pickRandom
 *   isServer → isServer
 *   jx → isBulletinVisible
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 97521 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 15790, 56006
const module_97521 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    ZV: () => formatNumberWithCommas,
    aT: () => pickRandom,
    isServer: () => isServer,
    jx: () => isBulletinVisible,
  });
  var module15790 = webpackRequire(15790),
    SiteConfig = webpackRequire(56006);
  let formatNumberWithCommas = (numberValue) => {
      if (!numberValue) return "0";
      let digitString = numberValue.toFixed(0),
        formatted = "";
      for (let digitPosition = 0; digitPosition < digitString.length; digitPosition++) {
        let digitChar = digitString[digitString.length - 1 - digitPosition];
        formatted =
          digitPosition && !(digitPosition % 3) ? digitChar + "," + formatted : digitChar + formatted;
      }
      return formatted;
    },
    pickRandom = (candidates) => candidates[(0, module15790.A)(0, candidates.length - 1)],
    isServer = !1,
    allHiddenBulletinIds = SiteConfig.a.hide_bulletin_dict
      ? Object.values(SiteConfig.a.hide_bulletin_dict).flat()
      : [],
    isBulletinVisible = (bulletinId, regionKey) => {
      var regionHiddenList;
      return (
        !(SiteConfig.a.hide_bulletin_dict && allHiddenBulletinIds.includes(bulletinId)) ||
        !!(null == (regionHiddenList = SiteConfig.a.hide_bulletin_dict[regionKey])
          ? void 0
          : regionHiddenList.includes(bulletinId))
      );
    };
};
