// Toast (anime fade message) — module 71985 from [lang]__(main)__(home)__layout-282874dd3834757d
// module 71985 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 96424, 97028, 2268, 56578, 14000, 9399
const module_71985 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => f_2,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    nextJsAppRouterRuntime = webpackRequire(2268),
    animeJsDefault = webpackRequire(56578),
    animeJs321 = webpackRequire(14e3),
    animeJs321Default = webpackRequire.n(animeJs321),
    stylesModule = webpackRequire(9399),
    styles = webpackRequire.n(stylesModule);
  let d_1 = (e_3) => {
    let { visible: t_5 = !1, afterClose: n_6 = animeJs321Default(), children: l_4 } = e_3,
      a_7 = (0, React.useRef)(null);
    return (
      (0, React.useEffect)(() => {
        (0, animeJsDefault.A)({
          targets: a_7.current,
          opacity: t_5 ? [0, 1] : [1, 0],
          duration: 300,
          easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
          complete: () => {
            t_5 || n_6();
          },
        });
      }, [t_5]),
      (0, jsx.jsx)("div", {
        ref: a_7,
        className: styles().toast,
        children: (0, jsx.jsx)("div", {
          className: styles().content,
          children: l_4,
        }),
      })
    );
  };
  d_1.message = function (e_8) {
    let t_9 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { duration: n_10 = 2e3 } = t_9,
      o_11 = document.createElement("div");
    document.body.appendChild(o_11);
    let s_12 = (0, nextJsAppRouterRuntime.createRoot)(o_11);
    function a_13(e_14) {
      let { content: t_15, ...n_16 } = e_14;
      setTimeout(() => {
        s_12.render(
          (0, jsx.jsx)(d_1, {
            ...n_16,
            children: t_15,
          }),
        );
      });
    }
    (a_13({
      visible: !0,
      content: e_8,
    }),
      setTimeout(() => {
        a_13({
          visible: !1,
          content: e_8,
          afterClose: () => {
            (s_12.unmount(), o_11.parentNode && o_11.parentNode.removeChild(o_11));
          },
        });
      }, n_10));
  };
  let f_2 = d_1;
};
