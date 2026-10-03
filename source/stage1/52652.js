// HollowText (outlined text) — module 52652 from 8963-234f979bdd6b491c
// module 52652 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 71460
const module_52652 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => C_2,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    stylesModule = webpackRequire(71460),
    styles = webpackRequire.n(stylesModule);
  let s_1 = React.forwardRef((e_3, t_4) => {
    let { text: i_5, className: a_6, style: n_7 } = e_3;
    return (0, jsx.jsx)("div", {
      ref: t_4,
      className: classnamesDefault()(styles().hollowText, a_6),
      style: n_7,
      children: i_5,
    });
  });
  s_1.displayName = "HollowText";
  let C_2 = s_1;
};
