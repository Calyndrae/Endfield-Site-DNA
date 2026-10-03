/**
 * backgroundMusic — readable reconstruction of webpack module 7725 (chunk 226-d5292700ff68fd13.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/226-d5292700ff68fd13.js
 *
 * BackgroundMusic (export K) instantiates the BgmPlayer class from module 58572 (aliased GryphlineWebSDK) with static/media/sound/bgm.3ce37f.mp3, loop, autoPlay, fade, suspendWhenHidden and suspendWhenHiddenInSkland all enabled, and volume 0.1 on mobile user agents (DeviceUtils.Fr) or 1 otherwise. On the server it is a stub exposing no-op enable() and disable().
 *
 * Exports (minified key → meaning):
 *   K → backgroundMusic
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 7725 from 226-d5292700ff68fd13.js
// deps: 58572, 97521, 15723
const module_7725 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    K: () => backgroundMusic,
  });
  var SoundPlayer = webpackRequire(58572),
    SiteUtils = webpackRequire(97521),
    DeviceUtils = webpackRequire(15723);
  let BGM_SOURCE = webpackRequire.p + "static/media/sound/bgm.3ce37f.mp3",
    backgroundMusic = SiteUtils.isServer
      ? {
          enable: () => {},
          disable: () => {},
        }
      : new SoundPlayer.Mj({
          src: BGM_SOURCE,
          loop: !0,
          autoPlay: !0,
          fade: !0,
          suspendWhenHidden: !0,
          suspendWhenHiddenInSkland: !0,
          volume: (0, DeviceUtils.Fr)(window.navigator.userAgent) ? 0.1 : 1,
        });
};
