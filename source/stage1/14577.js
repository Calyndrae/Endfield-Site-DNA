// RootFontSizeScaler (2560x1440 / 1080x1920 design canvas) — module 14577 from 8963-234f979bdd6b491c
// module 14577 from 8963-234f979bdd6b491c.js
// deps: 15723
const module_14577 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Z: () => r_3,
  });
  var DeviceUtils = webpackRequire(15723);
  let a_1 = 0,
    n_2 = 0;
  function r_3() {
    let e_4 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 16;
    void 0 === e_4 && (e_4 = 16);
    let t_5 = window.innerWidth,
      i_6 = window.innerHeight;
    if (
      ((a_1 === t_5 || n_2 === i_6) && (0, DeviceUtils.Fr)(window.navigator.userAgent)) ||
      (t_5 === a_1 && i_6 === n_2)
    )
      return;
    ((a_1 = t_5), (n_2 = i_6));
    let r_7 = e_4;
    i_6 >= t_5
      ? t_5 / i_6 > 0.5625
        ? (r_7 *= i_6 / 1920)
        : (r_7 *= t_5 / 1080)
      : t_5 / i_6 > 2560 / 1440
        ? (r_7 *= i_6 / 1440)
        : (r_7 *= t_5 / 2560);
    let l_8 = document.querySelector("html");
    if (
      l_8 &&
      ((l_8.style.fontSize = r_7 + "px"),
      window.navigator.userAgent.includes("HarmonyOS") ||
        window.navigator.userAgent.includes("OpenHarmony") ||
        window.navigator.userAgent.includes("bdhonorbrowser") ||
        window.navigator.userAgent.includes("HeyTap") ||
        window.navigator.userAgent.includes("Huawei"))
    ) {
      let e_9 = document.querySelector("meta[name=viewport]"),
        t_10 = window.devicePixelRatio;
      null == e_9 ||
        e_9.setAttribute(
          "content",
          "width=" +
            window.outerWidth * t_10 +
            "px, initial-scale=" +
            (1 / t_10).toFixed(3) +
            ", maximum-scale=" +
            (1 / t_10).toFixed(3) +
            ", user-scalable=0, viewport-fit=cover",
        );
    }
  }
};
