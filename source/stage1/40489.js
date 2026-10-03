// TransparentVideo (React wrapper over @hg-web/trans-video) — module 40489 from 8963-234f979bdd6b491c
// module 40489 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 25221, 34169
const module_40489 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    y: () => C_1,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    HgWebTransVideo = webpackRequire(25221),
    stylesModule = webpackRequire(34169),
    styles = webpackRequire.n(stylesModule);
  let C_1 = React.forwardRef((e_2, t_3) => {
    let { className: i_4 } = e_2,
      n_5 = (0, React.useRef)(null),
      o_6 = (0, React.useRef)(null),
      C_7 = (0, React.useRef)(null);
    return (
      (0, React.useEffect)(() => {
        if (n_5.current && o_6.current) {
          C_7.current = new HgWebTransVideo.A(n_5.current, {
            manualStart: !0,
            video: o_6.current,
          });
          let e_8 = {
            video: o_6.current,
            trans: C_7.current,
            controller: {
              fadeOut: () => {},
            },
          };
          t_3 && ("function" == typeof t_3 ? t_3(e_8) : (t_3.current = e_8));
        }
        return () => {
          var e_9;
          null == (e_9 = C_7.current) || e_9.dispose();
        };
      }, []),
      (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles().container, i_4),
        children: [
          (0, jsx.jsx)("canvas", {
            ref: n_5,
          }),
          (0, jsx.jsx)("video", {
            muted: !0,
            "webkit-playsinline": "true",
            playsInline: !0,
            ref: o_6,
            crossOrigin: "anonymous",
            style: {
              display: "none",
            },
          }),
        ],
      })
    );
  });
  C_1.displayName = "TransparentVideo";
};
