// OperatorListSection (catalogue: filters, cards, detail) — module 50999 from [lang]__(main)__(subpage)__operator__page-3a80441c18fd566a
// module 50999 from [lang]__(main)__(subpage)__operator__page-3a80441c18fd566a.js
// deps: 96424, 97028, 73235, 30998, 60705, 49095, 52652, 4948, 3492, 44705, 61759, 87001, 4721
const module_50999 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    OperatorListSection: () => w_5,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    HollowText = webpackRequire(52652),
    I18nProviderUseI18n = webpackRequire(4948),
    OperatorSection = webpackRequire(3492),
    module44705 = webpackRequire(44705),
    stylesModule = webpackRequire(61759),
    styles = webpackRequire.n(stylesModule);
  function h_1(e_6) {
    var t_7, a_8;
    let {
        options: s_9,
        value: i_10,
        onChange: c_11,
        placeholder: d_14 = "请选择",
        className: __12,
        disabled: u_15 = !1,
        showPlaceholderWhenEmpty: v_16 = !0,
        type: h_13,
      } = e_6,
      [y_17, k_18] = (0, React.useState)(!1),
      g_19 = (0, module44705.W)((0, React.useCallback)(() => k_18(!1), [])),
      N_20 = (0, React.useMemo)(() => s_9.find((e_26) => e_26.value === i_10), [s_9, i_10]),
      j_21 = null != (t_7 = null == N_20 ? void 0 : N_20.key) ? t_7 : v_16 ? d_14 : null,
      f_22 = (0, React.useMemo)(
        () =>
          null == j_21
            ? "none"
            : "string" == typeof j_21 || "number" == typeof j_21
              ? String(j_21)
              : null != i_10
                ? String(i_10)
                : "__placeholder__",
        [j_21, i_10],
      ),
      b_23 = () => {
        u_15 || k_18((e_27) => !e_27);
      },
      w_24 = (e_28) => {
        (c_11(e_28), k_18(!1));
      },
      { t: O_25 } = (0, I18nProviderUseI18n.Bd)();
    return (0, jsx.jsxs)("div", {
      ref: g_19,
      className: classnamesDefault()(styles().root, __12, styles()[h_13], {
        [styles().open]: y_17,
        [styles().disabled]: u_15,
      }),
      children: [
        (0, jsx.jsxs)("div", {
          className: styles().trigger,
          role: "button",
          tabIndex: u_15 ? -1 : 0,
          "aria-haspopup": "listbox",
          "aria-expanded": y_17,
          onClick: b_23,
          onKeyDown: (e_29) => {
            u_15 ||
              (("Enter" === e_29.key || " " === e_29.key) && (e_29.preventDefault(), b_23()),
              "Escape" === e_29.key && k_18(!1));
          },
          children: [
            (0, jsx.jsx)("div", {
              className: styles().label,
              children: O_25("operator.filter.".concat(h_13)),
            }),
            (0, jsx.jsx)("div", {
              className: styles().arrow,
            }),
            (0, jsx.jsx)("div", {
              className: styles().divider,
            }),
            (0, jsx.jsx)(
              framerMotion.P.div,
              {
                className: styles().icon,
                "data-key": null != (a_8 = null == N_20 ? void 0 : N_20.key) ? a_8 : "none",
              },
              f_22,
            ),
          ],
        }),
        (0, jsx.jsxs)("div", {
          className: styles().panel,
          role: "listbox",
          "aria-hidden": !y_17,
          children: [
            (0, jsx.jsxs)("div", {
              role: "option",
              "aria-selected": null === i_10,
              className: classnamesDefault()(styles().option, {
                [styles().optionSelected]: null === i_10,
              }),
              onClick: () => w_24(null),
              children: [
                (0, jsx.jsx)("div", {
                  className: styles().bg,
                }),
                (0, jsx.jsx)("div", {
                  className: styles().icon,
                  "data-key": "none",
                }),
                (0, jsx.jsx)("div", {
                  className: styles().text,
                  children: O_25("operator.filter.all"),
                }),
              ],
            }),
            s_9.map((e_30) =>
              (0, jsx.jsxs)(
                "div",
                {
                  role: "option",
                  "aria-selected": e_30.value === i_10,
                  className: classnamesDefault()(styles().option, {
                    [styles().optionSelected]: e_30.value === i_10,
                  }),
                  onClick: () => w_24(e_30.value),
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles().bg,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles().icon,
                      "data-key": e_30.value,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles().text,
                      children: O_25("operator.".concat(h_13, ".").concat(e_30.key)),
                    }),
                  ],
                },
                e_30.value,
              ),
            ),
          ],
        }),
      ],
    });
  }
  var stylesModule2 = webpackRequire(87001),
    styles2 = webpackRequire.n(stylesModule2);
  let g_2 = '"SansBold", sans-serif',
    N_3 = null,
    j_4 = (e_31) => {
      let { index: t_32, operator: a_33, className: s_34, style: i_35, total: l_36, onClick: c_37 } = e_31,
        d_38 = (0, React.useRef)(null),
        [__39, p_40] = (0, React.useState)(1.6875);
      return (
        (0, React.useLayoutEffect)(() => {
          let e_41 = d_38.current;
          if (!e_41) return;
          let t_42 = () => {
            let e_44 = (function () {
                if ("undefined" == typeof document) return 16;
                let e_47 = parseFloat(getComputedStyle(document.documentElement).fontSize);
                return Number.isFinite(e_47) && e_47 > 0 ? e_47 : 16;
              })(),
              t_45 = 11.1875 * e_44,
              o_46 = () => {
                p_40(
                  (function (e_48, t_49, a_50, o_51, r_52) {
                    if (!e_48) return 1.6875;
                    let s_53 = 0.5625,
                      n_54 = 1.6875;
                    for (let a_55 = 0; a_55 < 28; a_55++) {
                      let a_56 = (s_53 + n_54) / 2;
                      (function (e_57, t_58, a_59) {
                        N_3 || (N_3 = document.createElement("canvas"));
                        let o_60 = N_3.getContext("2d");
                        return o_60
                          ? ((o_60.font = "".concat(t_58, "px ").concat(a_59)), o_60.measureText(e_57).width)
                          : 0;
                      })(e_48, a_56 * r_52, g_2) <= t_49
                        ? (s_53 = a_56)
                        : (n_54 = a_56);
                    }
                    return s_53;
                  })(a_33.name, t_45, 0, 1.6875, e_44),
                );
              };
            (o_46(),
              Promise.all([
                document.fonts.ready,
                document.fonts.load("".concat(1.6875 * e_44, "px ").concat(g_2)),
              ]).then(o_46));
          };
          t_42();
          let o_43 = new ResizeObserver(() => t_42());
          return (o_43.observe(e_41), () => o_43.disconnect());
        }, [a_33.name]),
        (0, jsx.jsxs)("div", {
          className: classnamesDefault()(styles2().operatorItem, s_34),
          style: i_35,
          onClick: c_37,
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().image,
              "data-key": a_33.key,
              style: a_33.portrait
                ? {
                    backgroundImage: "url(".concat(a_33.portrait, ")"),
                  }
                : void 0,
            }),
            (0, jsx.jsxs)("div", {
              className: styles2().contentBlock,
              "data-rarity": a_33.rarity,
              children: [
                (0, jsx.jsx)("div", {
                  ref: d_38,
                  className: styles2().name,
                  children: (0, jsx.jsx)("span", {
                    className: styles2().nameText,
                    style: {
                      fontSize: "".concat(__39, "rem"),
                    },
                    children: a_33.name,
                  }),
                }),
                (0, jsx.jsxs)("div", {
                  className: styles2().subTitle,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().codename,
                      children: "// " + a_33.codename,
                    }),
                    (0, jsx.jsxs)("div", {
                      className: styles2().index,
                      children: [(t_32 + 1).toString().padStart(2, "0"), " / ", l_36],
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles2().icons,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().icon,
                      "data-key": a_33.prof,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().icon,
                      "data-key": a_33.elem,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    };
  var stylesModule3 = webpackRequire(4721),
    styles3 = webpackRequire.n(stylesModule3);
  let w_5 = () => {
    let [e_61, t_62] = (0, React.useState)(!1),
      [a_63, s_64] = (0, React.useState)(0),
      c_65 = (0, I18nProviderUseI18n.gL)(),
      m_66 = (0, React.useCallback)(
        (e_73) => {
          t_62(!0);
          let a_74 = c_65.findIndex((t_75) => t_75.key === e_73);
          s_64(-1 !== a_74 ? a_74 : 0);
        },
        [c_65],
      ),
      [v_67, x_68] = (0, React.useState)(null),
      [y_69, k_70] = (0, React.useState)(null),
      g_71 = (0, React.useMemo)(
        () => c_65.filter((e_76) => (!v_67 || v_67 === e_76.prof) && (!y_69 || y_69 === e_76.elem)),
        [c_65, v_67, y_69],
      ),
      N_72 = (0, React.useCallback)(() => {
        t_62(!1);
      }, []);
    return (0, jsx.jsx)("div", {
      className: styles3().sectionContainer,
      children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
        mode: "wait",
        children: e_61
          ? (0, jsx.jsx)(
              framerMotion.P.div,
              {
                className: classnamesDefault()(styles3().totalContainer, styles3().detail),
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
                children: (0, jsx.jsx)(OperatorSection.W, {
                  detailMode: !0,
                  detailIndex: a_63,
                  detailBack: N_72,
                }),
              },
              "detail",
            )
          : (0, jsx.jsxs)(
              framerMotion.P.div,
              {
                className: styles3().totalContainer,
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
                children: [
                  (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(styles3().backgroundDeco),
                    children: [
                      (0, jsx.jsx)("div", {
                        className: styles3().shallowBg,
                      }),
                      (0, jsx.jsx)(HollowText.A, {
                        className: styles3().decoText,
                        text: "ENDFIELD",
                      }),
                      (0, jsx.jsx)("div", {
                        className: styles3().decoRight,
                      }),
                    ],
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles3().bgBottom,
                  }),
                  (0, jsx.jsxs)("div", {
                    className: styles3().dropdowns,
                    children: [
                      (0, jsx.jsx)(h_1, {
                        className: styles3().dropdown,
                        type: "prof",
                        options: [
                          {
                            value: "guard",
                            key: "guard",
                          },
                          {
                            value: "caster",
                            key: "caster",
                          },
                          {
                            value: "support",
                            key: "support",
                          },
                          {
                            value: "shielder",
                            key: "shielder",
                          },
                          {
                            value: "vanguard",
                            key: "vanguard",
                          },
                          {
                            value: "assault",
                            key: "assault",
                          },
                        ],
                        value: v_67,
                        onChange: x_68,
                      }),
                      (0, jsx.jsx)(h_1, {
                        className: styles3().dropdown,
                        type: "elem",
                        options: [
                          {
                            value: "fire",
                            key: "fire",
                          },
                          {
                            value: "ice",
                            key: "ice",
                          },
                          {
                            value: "electric",
                            key: "electric",
                          },
                          {
                            value: "nature",
                            key: "nature",
                          },
                          {
                            value: "physic",
                            key: "physic",
                          },
                        ],
                        value: y_69,
                        onChange: k_70,
                      }),
                    ],
                  }),
                  (0, jsx.jsx)(nextJsRuntimeDefault(), {
                    className: styles3().listContainer,
                    direction: "y",
                    scrollBar: !0,
                    scrollBarClassName: styles3().scrollBar,
                    thumbClassName: styles3().thumb,
                    autoHideScrollBar: !1,
                    children: (0, jsx.jsx)("div", {
                      className: styles3().list,
                      children: g_71.map((e_77, t_78) =>
                        (0, jsx.jsx)(
                          j_4,
                          {
                            operator: e_77,
                            index: t_78,
                            total: c_65.length,
                            onClick: () => m_66(e_77.key),
                          },
                          e_77.key,
                        ),
                      ),
                    }),
                  }),
                ],
              },
              "list",
            ),
      }),
    });
  };
};
