// FontLoader (new FontFace from i18n font bundle) — module 45965 from [lang]__(main)__layout-493920d1b65733f5
// module 45965 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 9995, 4948
const module_45965 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    default: () => s_3,
  });
  var module9995 = webpackRequire(9995);
  let t_1 = async (e_4, a_5) => {
    try {
      let i_7 = new FontFace(e_4, a_5);
      document.fonts.add(i_7);
      try {
        await i_7.load();
      } catch (o_8) {
        var n_6;
        document.fonts.delete(i_7);
        let t_9 = null != (n_6 = a_5.split(",").filter((e_11) => e_11.includes(".woff2"))[0]) ? n_6 : a_5,
          r_10 = new FontFace(e_4, t_9);
        (document.fonts.add(r_10), await r_10.load());
      }
    } catch (e_12) {
      console.error(e_12);
    }
  };
  var I18nProviderUseI18n = webpackRequire(4948);
  let o_2 = () => {
      let { font: e_13 } = (0, I18nProviderUseI18n.PO)();
      (0, module9995.i)(() => {
        Object.entries(e_13).forEach((e_14) => {
          let [a_15, n_16] = e_14;
          t_1(a_15, n_16);
        });
      }, !0);
    },
    s_3 = () => (o_2(), null);
};
