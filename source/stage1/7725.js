// BackgroundMusic (bgm.mp3 loop with fades) — module 7725 from 226-d5292700ff68fd13
// module 7725 from 226-d5292700ff68fd13.js
// deps: 58572, 97521, 15723
const module_7725 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    K: () => o_2,
  });
  var GryphlineWebSDK = webpackRequire(58572),
    SiteUtils = webpackRequire(97521),
    DeviceUtils = webpackRequire(15723);
  let s_1 = webpackRequire.p + "static/media/sound/bgm.3ce37f.mp3",
    o_2 = SiteUtils.isServer
      ? {
          enable: () => {},
          disable: () => {},
        }
      : new GryphlineWebSDK.Mj({
          src: s_1,
          loop: !0,
          autoPlay: !0,
          fade: !0,
          suspendWhenHidden: !0,
          suspendWhenHiddenInSkland: !0,
          volume: (0, DeviceUtils.Fr)(window.navigator.userAgent) ? 0.1 : 1,
        });
};
