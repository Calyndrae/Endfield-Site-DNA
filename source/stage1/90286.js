// useOrientation (landscape/portrait) — module 90286 from 8963-234f979bdd6b491c
// module 90286 from 8963-234f979bdd6b491c.js
// deps: 97028, 90145
const module_90286 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    M: () => r_2,
  });
  var React = webpackRequire(97028),
    framerMotion = webpackRequire(90145);
  let n_1 = function (e_3) {
      let t_4 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [null];
      (0, React.useEffect)(() => {
        e_3();
        let t_5 = (0, framerMotion.A)(e_3, 100);
        return (window.addEventListener("resize", t_5), () => window.removeEventListener("resize", t_5));
      }, t_4);
    },
    r_2 = () => {
      let [e_6, t_7] = (0, React.useState)("landscape");
      return (
        n_1(() => {
          t_7(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
        }),
        e_6
      );
    };
};
