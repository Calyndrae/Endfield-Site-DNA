// EasingFunctions (linear, easeInCubic, easeOutCubic) — module 96664 from 8963-234f979bdd6b491c
// module 96664 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 56578, 73235, 45876
const module_96664 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => d_2,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    animeJsDefault = webpackRequire(56578),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    stylesModule = webpackRequire(45876),
    styles = webpackRequire.n(stylesModule);
  let C_1 = (e_3, t_4) => {
      let i_5 = animeJsDefault.A.timeline({
        loop: !0,
      });
      return (
        console.log(t_4),
        i_5.add({
          duration: 1e3,
        }),
        i_5.add({
          targets: e_3,
          easing: "linear",
          duration: 1e3 * Math.ceil(t_4 / 40),
          translateX: -t_4,
        }),
        i_5.add({
          duration: 1e3,
        }),
        i_5.add({
          targets: e_3,
          duration: 300,
          easing: "easeInCubic",
          opacity: [1, 0],
        }),
        i_5.add({
          targets: e_3,
          duration: 10,
          translateX: 0,
        }),
        i_5.add({
          targets: e_3,
          duration: 300,
          easing: "easeOutCubic",
          opacity: [0, 1],
        }),
        i_5
      );
    },
    d_2 = (e_6) => {
      let { className: t_7, style: i_8, children: n_9 } = e_6,
        r_10 = React.useRef(null),
        o_11 = React.useRef(null);
      return (
        (0, React.useEffect)(() => {
          let e_12 = window.setTimeout(() => {
            if (r_10.current && o_11.current) {
              let e_13 = r_10.current.clientWidth,
                t_14 = o_11.current.clientWidth;
              t_14 > e_13
                ? (r_10.current.classList.add(styles().rolling), C_1(o_11.current, t_14 - e_13).play())
                : r_10.current.classList.remove(styles().rolling);
            }
          }, 0);
          return () => window.clearTimeout(e_12);
        }, [n_9]),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(styles().rollingContent, t_7),
          ref: r_10,
          style: i_8,
          children: (0, jsx.jsx)("div", {
            className: styles().overflowWrapper,
            children: (0, jsx.jsx)("div", {
              ref: o_11,
              className: styles().contentContainer,
              children: (0, jsx.jsx)("div", {
                className: styles().realContent,
                children: n_9,
              }),
            }),
          }),
        })
      );
    };
};
