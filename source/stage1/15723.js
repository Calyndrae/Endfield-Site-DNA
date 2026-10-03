// DeviceUtils (user-agent checks) — module 15723 from 8963-234f979bdd6b491c
// module 15723 from 8963-234f979bdd6b491c.js
// deps:
const module_15723 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  function L_1(e_9) {
    return /MiuiBrowser/i.test(e_9);
  }
  function a_2(e_10) {
    return /VivoBrowser/i.test(e_10);
  }
  function n_3(e_11) {
    return /HeyTapBrowser|OppoBrowser/i.test(e_11);
  }
  function r_4(e_12) {
    return /bdhonorbrowser/i.test(e_12);
  }
  function l_5(e_13) {
    return /Quark/i.test(e_13);
  }
  function o_6(e_14) {
    return /iPhone|iPad|iPod/i.test(e_14);
  }
  function s_7(e_15) {
    return /Mobi|Android|iPhone|Huawei/i.test(e_15);
  }
  function C_8(e_16) {
    return /skland/i.test(e_16);
  }
  webpackRequire.d(webpackExports, {
    B$: () => l_5,
    Cb: () => C_8,
    Fr: () => s_7,
    I7: () => L_1,
    Jc: () => r_4,
    TN: () => a_2,
    un: () => o_6,
    zZ: () => n_3,
  });
};
