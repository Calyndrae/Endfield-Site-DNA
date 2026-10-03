// LoadingScreen (first-load progress) + loadedStore — module 71272 from 8963-234f979bdd6b491c
// module 71272 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 60705, 6780, 45359, 99880, 90286, 4948, 11850
const module_71272 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    E: () => g_2,
    r: () => m_1,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotion = webpackRequire(60705),
    framerMotionUseMotionValue = webpackRequire(6780),
    framerMotionUseSpring = webpackRequire(45359),
    zustandCreate = webpackRequire(99880),
    useOrientation = webpackRequire(90286),
    I18nProviderUseI18n = webpackRequire(4948),
    stylesModule = webpackRequire(11850),
    styles = webpackRequire.n(stylesModule);
  let m_1 = (0, zustandCreate.v)(() => ({
      loaded: !1,
    })),
    g_2 = (e_3) => {
      let { tasks: t_6 = [], onLeaving: i_4, onFinished: n_5 } = e_3,
        C_7 = (0, React.useMemo)(() => [...t_6], [t_6]),
        {
          components: { SvgLogo: u_8 },
        } = (0, I18nProviderUseI18n.PO)(),
        [g_9, v_10] = (0, React.useState)(!1);
      (0, React.useRef)(null);
      let [M_11, Z_12] = (0, React.useState)(0),
        h_13 = C_7.length,
        A_14 = () => {
          for (let e_19 of (Z_12(0), C_7))
            e_19().finally(() => {
              Z_12((e_20) => e_20 + 1);
            });
        },
        f_15 = (0, framerMotionUseMotionValue.d)(0),
        __16 = (0, framerMotionUseSpring.z)(f_15, {
          stiffness: 120,
          damping: 20,
        });
      ((0, React.useEffect)(() => {
        __16.set((M_11 / h_13) * 100);
      }, [M_11, h_13, __16]),
        (0, React.useEffect)(() => {
          A_14();
        }, []),
        (0, React.useEffect)(() => {
          if (M_11 >= h_13) {
            (null == i_4 || i_4(),
              v_10(!0),
              setTimeout(() => {
                m_1.setState({
                  loaded: !0,
                });
              }, 1500));
            let e_21 = setTimeout(() => {
              null == n_5 || n_5();
            }, 2400);
            return () => clearTimeout(e_21);
          }
          v_10(!1);
        }, [M_11]));
      let w_17 = "landscape" === (0, useOrientation.M)(),
        y_18 = (0, React.useRef)(null);
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles().container, {
          [styles().leaving]: g_9,
        }),
        onClick: () => {},
        children: [
          (0, jsx.jsx)(framerMotion.P.div, {
            className: styles().bg,
            animate: {
              filter: "blur(".concat(8 - (M_11 / h_13) * 8, "px)"),
            },
            transition: {
              type: "tween",
              duration: 0.5,
            },
          }),
          (0, jsx.jsx)("div", {
            className: styles().logo,
            children: (0, jsx.jsx)(u_8, {}),
          }),
          (0, jsx.jsxs)("div", {
            className: styles().moreDeco,
            children: [
              (0, jsx.jsx)("div", {
                className: styles().deco,
              }),
              (0, jsx.jsx)("div", {
                className: styles().divider,
              }),
              (0, jsx.jsx)("div", {
                className: styles().slogan,
                children: "OVER THE FRONTIER / INTO THE FRONT",
              }),
              (0, jsx.jsx)("div", {
                className: styles().triangles,
              }),
            ],
          }),
          (0, jsx.jsxs)("div", {
            className: styles().progress,
            children: [
              (0, jsx.jsx)(framerMotion.P.div, {
                className: styles().progressBar,
                animate: w_17
                  ? {
                      height: "".concat((M_11 / h_13) * 100, "%"),
                      width: "100%",
                    }
                  : {
                      width: "".concat((M_11 / h_13) * 100, "%"),
                      height: "100%",
                    },
                transition: {
                  type: "tween",
                  duration: 0.5,
                },
              }),
              (0, jsx.jsxs)(framerMotion.P.div, {
                className: styles().progressText,
                animate: w_17
                  ? {
                      top: "".concat((M_11 / h_13) * 100, "%"),
                      left: "3.125rem",
                    }
                  : {
                      top: "unset",
                      left: "".concat((M_11 / h_13) * 100, "%"),
                    },
                transition: {
                  type: "tween",
                  duration: 0.5,
                },
                onUpdate: (e_22) => {
                  y_18.current &&
                    (y_18.current.textContent = "".concat(
                      parseInt(w_17 ? e_22.top.toString() : e_22.left.toString()) || 0,
                    ));
                },
                children: [
                  (0, jsx.jsxs)("div", {
                    className: styles().core,
                    children: [
                      (0, jsx.jsx)("span", {
                        ref: y_18,
                        className: styles().value,
                        children: "0",
                      }),
                      (0, jsx.jsx)("span", {
                        className: styles().symbol,
                        children: "%",
                      }),
                    ],
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles().deco,
                    children: "Updating...",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
};
