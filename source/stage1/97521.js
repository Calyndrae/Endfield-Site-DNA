// SiteUtils (isServer, formatNumber, hidden bulletin filter) — module 97521 from [lang]__(main)__layout-493920d1b65733f5
// module 97521 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 15790, 56006
const module_97521 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    ZV: () => r_1,
    aT: () => o_2,
    isServer: () => s_3,
    jx: () => d_5,
  });
  var module15790 = webpackRequire(15790),
    SiteConfig = webpackRequire(56006);
  let r_1 = (e_6) => {
      if (!e_6) return "0";
      let a_7 = e_6.toFixed(0),
        n_8 = "";
      for (let e_9 = 0; e_9 < a_7.length; e_9++) {
        let i_10 = a_7[a_7.length - 1 - e_9];
        n_8 = e_9 && !(e_9 % 3) ? i_10 + "," + n_8 : i_10 + n_8;
      }
      return n_8;
    },
    o_2 = (e_11) => e_11[(0, module15790.A)(0, e_11.length - 1)],
    s_3 = !1,
    l_4 = SiteConfig.a.hide_bulletin_dict ? Object.values(SiteConfig.a.hide_bulletin_dict).flat() : [],
    d_5 = (e_12, a_13) => {
      var n_14;
      return (
        !(SiteConfig.a.hide_bulletin_dict && l_4.includes(e_12)) ||
        !!(null == (n_14 = SiteConfig.a.hide_bulletin_dict[a_13]) ? void 0 : n_14.includes(e_12))
      );
    };
};
