/**
 * applyRootFontSize — readable reconstruction of webpack module 14577 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * RootFontSizeScaler (export Z) sets the <html> font-size so rem units map to a design canvas: base 16px scaled by height/1920 or width/1080 in portrait (threshold aspect 0.5625) and by height/1440 or width/2560 in landscape (threshold 2560/1440), picking the axis that keeps the canvas fully visible. It caches the last viewport size and skips when unchanged, or when only one dimension changed on a mobile UA (DeviceUtils.Fr) to ignore address-bar resizes. On HarmonyOS/OpenHarmony/bdhonorbrowser/HeyTap/Huawei user agents it rewrites the viewport meta to width=outerWidth*dpr with initial/maximum-scale of 1/dpr, user-scalable=0 and viewport-fit=cover.
 *
 * Exports (minified key → meaning):
 *   Z → applyRootFontSize
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 14577 from 8963-234f979bdd6b491c.js
// deps: 15723
const module_14577 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Z: () => applyRootFontSize,
  });
  var DeviceUtils = webpackRequire(15723);
  let lastWidth = 0,
    lastHeight = 0;
  function applyRootFontSize() {
    let baseFontSize = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16;
    void 0 === baseFontSize && (baseFontSize = 16);
    let viewportWidth = window.innerWidth,
      viewportHeight = window.innerHeight;
    if (
      ((lastWidth === viewportWidth || lastHeight === viewportHeight) &&
        (0, DeviceUtils.Fr)(window.navigator.userAgent)) ||
      (viewportWidth === lastWidth && viewportHeight === lastHeight)
    )
      return;
    ((lastWidth = viewportWidth), (lastHeight = viewportHeight));
    let scaledFontSize = baseFontSize;
    viewportHeight >= viewportWidth
      ? viewportWidth / viewportHeight > 0.5625
        ? (scaledFontSize *= viewportHeight / 1920)
        : (scaledFontSize *= viewportWidth / 1080)
      : viewportWidth / viewportHeight > 2560 / 1440
        ? (scaledFontSize *= viewportHeight / 1440)
        : (scaledFontSize *= viewportWidth / 2560);
    let htmlElement = document.querySelector("html");
    if (
      htmlElement &&
      ((htmlElement.style.fontSize = scaledFontSize + "px"),
      window.navigator.userAgent.includes("HarmonyOS") ||
        window.navigator.userAgent.includes("OpenHarmony") ||
        window.navigator.userAgent.includes("bdhonorbrowser") ||
        window.navigator.userAgent.includes("HeyTap") ||
        window.navigator.userAgent.includes("Huawei"))
    ) {
      let viewportMeta = document.querySelector("meta[name=viewport]"),
        devicePixelRatio = window.devicePixelRatio;
      null == viewportMeta ||
        viewportMeta.setAttribute(
          "content",
          "width=" +
            window.outerWidth * devicePixelRatio +
            "px, initial-scale=" +
            (1 / devicePixelRatio).toFixed(3) +
            ", maximum-scale=" +
            (1 / devicePixelRatio).toFixed(3) +
            ", user-scalable=0, viewport-fit=cover",
        );
    }
  }
};
