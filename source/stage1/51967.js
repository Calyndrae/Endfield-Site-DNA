// TextShrink (canvas text measuring) — module 51967 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1
// module 51967 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js
// deps: 97028, 97521
const module_51967 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => n_2,
  });
  var React = webpackRequire(97028),
    SiteUtils = webpackRequire(97521);
  let i_1 = (e_3, L_4) => {
      var t_5;
      if (0 === L_4.length || e_3.length < L_4.length) return e_3;
      let a_6 = null == (t_5 = document) ? void 0 : t_5.createElement("canvas").getContext("2d");
      if (!a_6) return e_3.slice(0, L_4.length - 3 > 0 ? L_4.length - 3 : 0) + "...";
      a_6.font = "".concat(16, "px ").concat(L_4.font);
      let s_7 = e_3.slice(0, L_4.length - 3);
      for (let t_8 = L_4.length - 3; t_8 < e_3.length; t_8++) {
        let i_9 = e_3.slice(0, t_8),
          { width: n_10 } = a_6.measureText(i_9 + "...");
        if (n_10 < 16 * L_4.length) s_7 = i_9;
        else {
          let { width: e_11 } = a_6.measureText(i_9);
          if (e_11 < 16 * L_4.length) continue;
          return s_7 + "...";
        }
      }
      return e_3;
    },
    n_2 = (e_12) => {
      let { text: L_13, options: t_14 } = e_12,
        [n_15, l_16] = (0, React.useState)(L_13);
      return (
        (0, React.useEffect)(() => {
          l_16(SiteUtils.isServer ? L_13 : i_1(L_13, t_14));
        }, [L_13, t_14]),
        n_15
      );
    };
};
