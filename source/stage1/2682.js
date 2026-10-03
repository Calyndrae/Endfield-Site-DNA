// Pagination (number/arrow pagination) — module 2682 from 8963-234f979bdd6b491c
// module 2682 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 26097, 96970
const module_2682 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ay: () => p_5,
    MS: () => u_4,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    SoundEffects = webpackRequire(26097),
    stylesModule = webpackRequire(96970),
    styles = webpackRequire.n(stylesModule);
  let C_1 = Math.ceil(2) - 1,
    d_2 = (e_6, t_7, i_8, L_9) => {
      if (i_8 <= 4) return "translateX(".concat(t_7 * L_9, "rem)");
      let a_10 = 0;
      return (
        (a_10 = e_6 <= C_1 ? t_7 : e_6 >= i_8 - 4 + C_1 ? t_7 - i_8 + 4 : t_7 - e_6 + C_1),
        "translateX(".concat(a_10 * L_9, "rem)")
      );
    },
    c_3 = (e_11) => {
      let {
          className: t_12,
          style: i_13,
          current: n_14,
          total: o_15,
          blockWidth: c_17 = 4,
          goToPage: u_16,
        } = e_11,
        p_18 = (0, React.useMemo)(() => {
          if (o_15 <= 4)
            return Array.from(
              {
                length: o_15,
              },
              (e_22, t_23) => t_23 + 1,
            );
          let e_19 = n_14 - C_1,
            t_20 = n_14 - C_1 + 4;
          (e_19 < 0 && ((e_19 = 0), (t_20 = 4)), t_20 > o_15 && ((t_20 = o_15), (e_19 = o_15 - 4)));
          let i_21 = Math.max(e_19 - 4, 0);
          return Array.from(
            {
              length: Math.min(t_20 + 4, o_15) - i_21,
            },
            (e_24, t_25) => i_21 + t_25 + 1,
          );
        }, [n_14, o_15]);
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles().carousel, t_12),
        style: {
          ...i_13,
          width: "".concat(Math.min(o_15, 4) * c_17, "rem"),
        },
        children: p_18.map((e_26) =>
          (0, jsx.jsx)(
            "div",
            {
              className: classnamesDefault()(styles().block, e_26 === n_14 + 1 && styles().active),
              style: {
                width: "".concat(c_17, "rem"),
                transform: d_2(n_14, e_26 - 1, o_15, c_17),
              },
              onClick: () => {
                (SoundEffects.A.play(SoundEffects.d.common_click), null == u_16 || u_16(e_26 - 1));
              },
              children: e_26.toString().padStart(2, "0"),
            },
            e_26,
          ),
        ),
      });
    },
    u_4 = (e_27) => {
      let { className: t_28 } = e_27;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 18 27",
        className: t_28,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M14.142,0.127 L17.753,3.737 L7.963,13.527 L17.753,23.318 L14.142,26.928 L0.743,13.527 L14.142,0.127 Z",
        }),
      });
    },
    p_5 = (e_29) => {
      let {
        className: t_30,
        style: i_31,
        disablePrev: a_32,
        disableNext: n_33,
        prev: o_34,
        next: C_35,
        pagination: d_36,
        goToPage: p_37,
        current: m_38,
        total: g_39,
        type: v_40 = "light",
      } = e_29;
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(
          styles().pagination,
          "number" === d_36 && styles().number,
          "nav" === d_36 && styles().nav,
          t_30,
          styles()[v_40],
        ),
        style: i_31,
        children: [
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles().button, a_32 && styles().disabled),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), null == o_34 || o_34());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles().border,
              }),
              (0, jsx.jsx)(u_4, {
                className: styles().arrow,
              }),
            ],
          }),
          "number" === d_36 &&
            (0, jsx.jsxs)("div", {
              className: styles().paginationNumber,
              children: [
                (0, jsx.jsx)("span", {
                  children: (null != m_38 ? m_38 : 0) + 1,
                }),
                (0, jsx.jsx)("span", {
                  className: styles().divider,
                  children: "/",
                }),
                (0, jsx.jsx)("span", {
                  children: g_39,
                }),
              ],
            }),
          "nav" === d_36 &&
            (0, jsx.jsx)(c_3, {
              current: null != m_38 ? m_38 : 0,
              total: g_39 || 1,
              goToPage: p_37,
            }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles().button, n_33 && styles().disabled),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), null == C_35 || C_35());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles().border,
              }),
              (0, jsx.jsx)(u_4, {
                className: classnamesDefault()(styles().arrow, styles().right),
              }),
            ],
          }),
        ],
      });
    };
};
