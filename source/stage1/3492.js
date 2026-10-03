// OperatorSection (homepage character stage) — module 3492 from 226-d5292700ff68fd13
// module 3492 from 226-d5292700ff68fd13.js
// deps: 96424, 97028, 56578, 73235, 19213, 30998, 60705, 49095, 73422, 29190, 52271, 2142, 7919, 52652, 96664, 90286, 4948, 1162, 29521, 26097, 97521, 15723, 71272, 89748, 29671, 22715, 2682, 40489, 84245, 68408, 9704
const module_3492 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    W: () => V_13,
  });
  var n_1,
    jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    animeJsDefault = webpackRequire(56578),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotionUseInView = webpackRequire(19213),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    SvgIcon73422 = webpackRequire(73422),
    SvgIcon29190 = webpackRequire(29190),
    SvgIcon52271 = webpackRequire(52271),
    React2 = webpackRequire(2142);
  function f_2() {
    return (f_2 = Object.assign
      ? Object.assign.bind()
      : function (e_14) {
          for (var t_15 = 1; t_15 < arguments.length; t_15++) {
            var a_16 = arguments[t_15];
            for (var n_17 in a_16) ({}).hasOwnProperty.call(a_16, n_17) && (e_14[n_17] = a_16[n_17]);
          }
          return e_14;
        }).apply(null, arguments);
  }
  let x_3 = function (e_18) {
    return React2.createElement(
      "svg",
      f_2(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 42 42",
        },
        e_18,
      ),
      n_1 ||
        (n_1 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M41.091,35.670 L32.104,26.683 C33.714,24.098 34.646,21.049 34.646,17.780 C34.646,13.122 32.759,8.906 29.706,5.854 L25.366,10.194 C27.309,12.137 28.513,14.821 28.513,17.780 C28.513,23.698 23.698,28.513 17.780,28.513 C11.862,28.513 7.047,23.698 7.047,17.780 C7.047,11.862 11.862,7.047 17.780,7.047 C17.869,7.047 17.955,7.058 18.043,7.060 L18.043,0.920 C17.955,0.919 17.868,0.913 17.780,0.913 C8.465,0.913 0.914,8.465 0.914,17.780 C0.914,27.095 8.465,34.646 17.780,34.646 C21.049,34.646 24.099,33.714 26.683,32.104 L35.670,41.090 L41.091,35.670 Z",
        })),
    );
  };
  var stylesModule = webpackRequire(7919),
    styles = webpackRequire.n(stylesModule);
  let C_4 = (e_19) => {
    let { className: t_20, style: a_21, text: n_22, onClick: r_23 } = e_19;
    return (0, jsx.jsx)("div", {
      className: classnamesDefault()(styles().backButton, t_20),
      style: a_21,
      onClick: r_23,
      children: n_22,
    });
  };
  var HollowText = webpackRequire(52652),
    EasingFunctions = webpackRequire(96664),
    useOrientation = webpackRequire(90286),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
    TrackingGroupsEnum = webpackRequire(29521),
    SoundEffects = webpackRequire(26097),
    SiteUtils = webpackRequire(97521),
    DeviceUtils = webpackRequire(15723),
    LoadingScreenFirstLoadProgressLoadedStore = webpackRequire(71272),
    animeJsHelpersSmallVendorUtils = webpackRequire(89748),
    framerMotion2 = webpackRequire(29671),
    SvgIcon22715 = webpackRequire(22715),
    Pagination = webpackRequire(2682),
    TransparentVideo = webpackRequire(40489),
    TextRevealAnimations = webpackRequire(84245),
    OperatorVideoClips = webpackRequire(68408),
    stylesModule2 = webpackRequire(9704),
    styles2 = webpackRequire.n(stylesModule2);
  let H_5 = (e_24, t_25) => ((t_25 % e_24.length) + e_24.length) % e_24.length,
    W_6 = (e_26, t_27, a_28) => {
      let n_29 = e_26 - t_27;
      return a_28
        ? "translateX(".concat((n_29 + 1) * 13 + 1.875, "rem)")
        : "translateY(".concat((n_29 + 1) * 12.25 + 1.875, "rem)");
    },
    Y_7 = function (e_30) {
      let t_31 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        a_32 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        [n_33, i_34] = (0, React.useState)(a_32);
      return {
        props: {
          currentIndex: n_33,
          setCurrentIndex: i_34,
          list: e_30,
          initIndex: t_31,
        },
        currentIndex: H_5(e_30, n_33),
      };
    },
    q_8 = (e_35) => {
      let { currentIndex: t_36, inView: a_37 } = e_35,
        n_38 = (0, React.useRef)(null),
        o_39 = (0, I18nProviderUseI18n.gL)()[t_36],
        [l_40, c_41] = (0, framerMotion2.xQ)(),
        d_42 = (0, React.useRef)(!1),
        __43 = (0, React.useRef)(a_37),
        u_44 = (0, React.useRef)(null),
        m_45 = (0, React.useRef)(null),
        h_46 = (0, React.useRef)(null),
        p_47 = (0, React.useCallback)(async () => {
          var e_48;
          let t_49 = n_38.current;
          if (!t_49) return;
          let a_50 = t_49.video,
            i_51 = new Promise((e_55) => {
              a_50.addEventListener("canplaythrough", () => {
                e_55();
              });
            });
          ((a_50.src = null == (e_48 = OperatorVideoClips.p[o_39.key]) ? void 0 : e_48.enter),
            a_50.load(),
            a_50.pause());
          let r_52 = animeJsDefault.A.timeline();
          (r_52.add({
            targets: u_44.current,
            opacity: [0, 1],
            translateY: ["-20%", "-50%"],
            translateX: ["-50%", "-50%"],
            duration: 300,
            easing: "easeOutQuad",
          }),
            r_52.add({
              targets: {},
              duration: 500,
            }));
          let l_53 = r_52.finished;
          await Promise.all([i_51, l_53]);
          let c_54 = animeJsDefault.A.timeline();
          (c_54.add(
            {
              targets: u_44.current,
              opacity: [1, 0],
              translateY: ["-50%", "-70%"],
              translateX: ["-50%", "-50%"],
              duration: 300,
              easing: "easeInCubic",
            },
            0,
          ),
            c_54.add(
              {
                targets: m_45.current,
                opacity: [0, 1],
                duration: 200,
                easing: "easeOutCubic",
                begin: () => {
                  (console.log("play3", __43.current),
                    __43.current && t_49.trans.activate(),
                    __43.current && a_50.play().catch(animeJsHelpersSmallVendorUtils.A));
                  let e_56 = () => {
                    var a_57;
                    ((d_42.current = !0),
                      (t_49.video.src = null == (a_57 = OperatorVideoClips.p[o_39.key]) ? void 0 : a_57.idle),
                      t_49.video.play().catch(animeJsHelpersSmallVendorUtils.A),
                      (t_49.video.loop = !0),
                      t_49.video.removeEventListener("ended", e_56));
                  };
                  t_49.video.addEventListener("ended", e_56);
                },
                complete: () => {},
              },
              200,
            ));
        }, [o_39.key]);
      return (
        (0, React.useEffect)(() => {
          var e_58, t_59;
          (a_37 ? (__43.current = !0) : (__43.current = !1),
            a_37
              ? d_42.current &&
                (null == (e_58 = n_38.current) || e_58.video.play().catch(animeJsHelpersSmallVendorUtils.A))
              : d_42.current && (null == (t_59 = n_38.current) || t_59.video.pause()));
        }, [a_37]),
        (0, React.useEffect)(() => {
          l_40
            ? p_47()
            : (0, TextRevealAnimations.zI)(h_46.current, !1).then(() => {
                c_41();
              });
        }, [l_40, p_47, c_41]),
        (0, jsx.jsxs)("div", {
          className: styles2().videoContainer,
          ref: h_46,
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().loadingContainer,
              ref: u_44,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().videoEleContainer,
              ref: m_45,
              "data-key": o_39.key,
              children: (0, jsx.jsx)(TransparentVideo.y, {
                className: styles2().video,
                ref: n_38,
              }),
            }),
          ],
        })
      );
    },
    z_9 = (e_60) => {
      let { currentIndex: t_61, is3dActive: a_62, inView: n_63, downgrade: r_64, detailMode: o_65 } = e_60,
        c_66 = (0, I18nProviderUseI18n.gL)()[t_61];
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles2().illustrationContainer, {
          [styles2().detailMode]: o_65,
        }),
        children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
          mode: "wait",
          propagate: !0,
          children: a_62
            ? (0, jsx.jsx)(
                q_8,
                {
                  inView: n_63,
                  currentIndex: t_61,
                },
                c_66.key,
              )
            : (0, jsx.jsx)(TextRevealAnimations.iv, {
                enter: (e_67) =>
                  animeJsDefault.A.timeline()
                    .add({
                      targets: e_67,
                      duration: 300,
                      opacity: [0, 1],
                      easing: "easeOutCubic",
                    })
                    .add(
                      {
                        targets: e_67,
                        easing: "cubicBezier(0,1,0,.97)",
                        duration: 8e3,
                        translateX: ["18rem", "0rem"],
                      },
                      0,
                    ).finished,
                className: styles2().illustration,
                "data-key": c_66.key,
              }),
        }),
      });
    },
    Q_10 = (e_68) => {
      let {
          className: t_69,
          style: a_70,
          currentIndex: n_71,
          setCurrentIndex: s_72,
          initIndex: o_73,
          list: c_74 = [],
        } = e_68,
        [d_75, __76] = (0, React.useState)(o_73 || 0),
        u_77 = (0, React.useMemo)(() => {
          let e_82 = d_75 - 1,
            t_83 = d_75 + 2,
            a_84 = [];
          for (let n_85 = e_82 - 4; n_85 <= t_83 + 4; n_85++) a_84.push(n_85);
          return a_84;
        }, [d_75]),
        m_78 = (0, React.useCallback)(() => {
          __76((e_86) => e_86 + 4);
        }, []),
        h_79 = (0, React.useCallback)(() => {
          __76((e_87) => e_87 - 4);
        }, []),
        p_80 = (0, React.useCallback)((e_88) => {
          (s_72(e_88), __76(e_88));
        }, []),
        v_81 = "portrait" === (0, useOrientation.M)();
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles2().operatorSwitcher, t_69),
        style: a_70,
        children: [
          (0, jsx.jsx)("div", {
            className: styles2().itemContainer,
            children: u_77.map((e_89) => {
              var t_90;
              return (0, jsx.jsxs)(
                "div",
                {
                  className: classnamesDefault()(styles2().switchItem, {
                    [styles2().active]: H_5(c_74, e_89) === H_5(c_74, n_71),
                  }),
                  style: {
                    transform: W_6(e_89, d_75, v_81),
                  },
                  onClick: () => {
                    (p_80(e_89), SoundEffects.A.play(SoundEffects.d.char_click));
                  },
                  children: [
                    (0, jsx.jsx)(SvgIcon22715.A, {
                      className: styles2().activeBg,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().border,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().image,
                      "data-key": null == (t_90 = c_74[H_5(c_74, e_89)]) ? void 0 : t_90.key,
                    }),
                  ],
                },
                e_89,
              );
            }),
          }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().button, styles2().top),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), h_79());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles2().border,
              }),
              (0, jsx.jsx)(Pagination.MS, {
                className: styles2().arrow,
              }),
            ],
          }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().button, styles2().bottom),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), m_78());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles2().border,
              }),
              (0, jsx.jsx)(Pagination.MS, {
                className: styles2().arrow,
              }),
            ],
          }),
        ],
      });
    },
    X_11 = (e_91) => {
      let { className: t_92 } = e_91;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 285 24",
        className: t_92,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M278.754,16.964 L278.754,14.031 L284.472,14.031 L284.472,16.964 L278.754,16.964 ZM278.754,8.164 L284.472,8.164 L284.472,11.096 L278.754,11.096 L278.754,8.164 ZM273.031,14.031 L275.892,14.031 L275.892,16.964 L273.031,16.964 L273.031,14.031 ZM267.313,8.164 L273.031,8.164 L273.031,11.096 L267.313,11.096 L267.313,8.164 ZM224.409,14.031 L264.451,14.031 L264.451,16.964 L224.409,16.964 L224.409,14.031 ZM238.711,8.164 L264.451,8.164 L264.451,11.096 L238.711,11.096 L238.711,8.164 ZM224.409,8.164 L235.850,8.164 L235.850,11.096 L224.409,11.096 L224.409,8.164 ZM218.690,14.031 L221.551,14.031 L221.551,16.964 L218.690,16.964 L218.690,14.031 ZM218.690,8.164 L221.551,8.164 L221.551,11.096 L218.690,11.096 L218.690,8.164 ZM195.1000,-0.000 L198.1000,-0.000 L198.1000,23.1000 L195.1000,23.1000 L195.1000,-0.000 ZM169.872,13.817 L175.813,13.817 L175.813,16.870 L169.872,16.870 L169.872,13.817 ZM169.872,7.709 L175.813,7.709 L175.813,10.762 L169.872,10.762 L169.872,7.709 ZM163.927,13.817 L166.899,13.817 L166.899,16.870 L163.927,16.870 L163.927,13.817 ZM157.986,7.709 L163.927,7.709 L163.927,10.762 L157.986,10.762 L157.986,7.709 ZM113.415,13.817 L155.014,13.817 L155.014,16.870 L113.415,16.870 L113.415,13.817 ZM128.273,7.709 L155.014,7.709 L155.014,10.762 L128.273,10.762 L128.273,7.709 ZM113.415,7.709 L125.301,7.709 L125.301,10.762 L113.415,10.762 L113.415,7.709 ZM104.502,16.870 L104.502,13.817 L107.474,13.817 L110.447,13.817 L110.447,16.870 L107.474,16.870 L104.502,16.870 ZM107.474,7.709 L110.447,7.709 L110.447,10.762 L107.474,10.762 L107.474,7.709 ZM98.561,13.817 L101.529,13.817 L101.529,16.870 L98.561,16.870 L98.561,13.817 ZM92.616,13.817 L95.589,13.817 L95.589,16.870 L92.616,16.870 L92.616,13.817 ZM83.703,13.817 L89.648,13.817 L89.648,16.870 L83.703,16.870 L83.703,13.817 ZM83.703,7.709 L89.648,7.709 L89.648,10.762 L83.703,10.762 L83.703,7.709 ZM77.762,13.817 L80.730,13.817 L80.730,16.870 L77.762,16.870 L77.762,13.817 ZM71.817,7.709 L77.762,7.709 L77.762,10.762 L71.817,10.762 L71.817,7.709 ZM27.250,13.817 L68.849,13.817 L68.849,16.870 L27.250,16.870 L27.250,13.817 ZM42.105,7.709 L68.849,7.709 L68.849,10.762 L42.105,10.762 L42.105,7.709 ZM27.250,7.709 L39.136,7.709 L39.136,10.762 L27.250,10.762 L27.250,7.709 ZM10.455,4.298 L20.492,4.298 L15.473,12.975 L10.455,4.298 ZM0.347,4.298 L10.384,4.298 L5.365,12.975 L0.347,4.298 ZM10.455,21.701 L5.436,13.024 L15.473,13.024 L10.455,21.701 Z",
        }),
      });
    },
    U_12 = (e_93) => {
      let { className: t_94 } = e_93;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 333",
        className: t_94,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M16.828,319.932 L16.828,332.334 L15.173,332.334 L15.173,319.932 L0.458,319.932 L0.458,318.279 L15.173,318.279 L15.173,305.878 L16.828,305.878 L16.828,318.279 L31.542,318.279 L31.542,319.932 L16.828,319.932 ZM16.828,230.597 L15.173,230.597 L15.173,218.195 L0.458,218.195 L0.458,216.542 L15.173,216.542 L15.173,204.140 L16.828,204.140 L16.828,216.542 L31.542,216.542 L31.542,218.195 L16.828,218.195 L16.828,230.597 ZM16.828,128.859 L15.173,128.859 L15.173,116.458 L0.458,116.458 L0.458,114.805 L15.173,114.805 L15.173,102.403 L16.828,102.403 L16.828,114.805 L31.542,114.805 L31.542,116.458 L16.828,116.458 L16.828,128.859 ZM16.828,27.122 L15.173,27.122 L15.173,14.720 L0.458,14.720 L0.458,13.067 L15.173,13.067 L15.173,0.665 L16.828,0.665 L16.828,13.067 L31.542,13.067 L31.542,14.720 L16.828,14.720 L16.828,27.122 Z",
        }),
      });
    },
    V_13 = (e_95) => {
      let { detailMode: t_97 = !1, detailIndex: a_98 = 0, detailBack: n_96 } = e_95,
        { t: o_99 } = (0, I18nProviderUseI18n.Bd)(),
        [u_100, L_101] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        let e_121 = SiteUtils.isServer ? "" : window.navigator.userAgent;
        L_101(
          (0, DeviceUtils.TN)(e_121) ||
            (0, DeviceUtils.zZ)(e_121) ||
            (0, DeviceUtils.I7)(e_121) ||
            (0, DeviceUtils.B$)(e_121),
        );
      }, [u_100]);
      let f_102 = (0, React.useRef)(null),
        g_103 = (0, framerMotionUseInView.W)(f_102, {
          margin: "-40% 0%",
        }),
        { lang: y_104 } = (0, I18nProviderUseI18n.PO)(),
        O_105 = (0, I18nProviderUseI18n.gL)(),
        { props: R_106, currentIndex: B_107 } = Y_7(O_105, t_97 ? a_98 : 1, t_97 ? a_98 : 0),
        P_108 = (0, React.useMemo)(() => O_105[B_107], [B_107, O_105]),
        [Z_109, T_110] = (0, React.useState)(!1),
        [D_111, F_112] = (0, React.useState)(!1),
        H_113 = (0, React.useRef)({});
      (0, React.useEffect)(() => {
        g_103 &&
          !H_113.current[P_108.key] &&
          ((H_113.current[P_108.key] = !0),
          Tracking.A.collect("content_view", {
            group: TrackingGroupsEnum.Z.operator,
            target: P_108.key,
          }));
      }, [g_103, P_108]);
      let [W_114, q_115] = (0, React.useState)(!1),
        { loaded: V_116 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
      (0, React.useEffect)(() => {
        g_103 && V_116 && q_115(!0);
      }, [g_103, V_116]);
      let K_117 = (0, useOrientation.M)();
      ((0, React.useLayoutEffect)(() => {
        let e_122 = f_102.current.querySelector(
          ".".concat(styles2().h5Container, " .").concat(styles2().contentContainer),
        );
        ((e_122.style.transition = "none"), (e_122.style.transform = "translateY(100%)"));
      }, []),
        (0, React.useEffect)(() => {
          if (W_114) {
            let e_123 = animeJsDefault.A.timeline(),
              t_124 = f_102.current;
            (e_123.add({
              targets: {},
              duration: 300,
            }),
              e_123.add(
                {
                  targets: t_124.querySelector(
                    ".".concat(styles2().pcContainer, " .").concat(styles2().decoFlag),
                  ),
                  opacity: [0, 1],
                  duration: "portrait" === K_117 ? 1 : 400,
                  easing: "easeOutQuad",
                },
                300,
              ),
              e_123.add(
                {
                  targets: [
                    t_124.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoText)),
                    t_124.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoTape)),
                    t_124.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoLine)),
                  ],
                  translateX: ["110%", "0"],
                  duration: "portrait" === K_117 ? 1 : 400,
                  easing: "easeOutQuad",
                },
                300,
              ),
              e_123.add(
                {
                  targets: [
                    t_124.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().titleInnerContainer),
                    ),
                    ,
                    t_124.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().contentInnerContainer),
                    ),
                    t_124.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().headerInnerContainer),
                    ),
                  ],
                  duration: "portrait" === K_117 ? 1 : 300,
                  translateX: ["-100%", "0"],
                  easing: "easeOutQuad",
                },
                600,
              ),
              e_123.add(
                {
                  targets: t_124.querySelector(".".concat(styles2().illustrationContainer)),
                  duration: 300,
                  opacity: [0, 1],
                  easing: "easeOutQuad",
                },
                "landscape" === K_117 ? 600 : 300,
              ),
              e_123.add(
                {
                  targets: t_124.querySelector(".".concat(styles2().illustrationContainer)),
                  duration: 5e3,
                  translateX: ["15rem", "0"],
                  easing: "cubicBezier(0,1,0,.95)",
                },
                "landscape" === K_117 ? 600 : 300,
              ),
              (t_124.querySelector(
                ".".concat(styles2().h5Container, " .").concat(styles2().contentContainer),
              ).style.transition = "none"));
            let a_125 = t_124.querySelector(
              ".".concat(styles2().h5Container, " .").concat(styles2().contentContainer),
            );
            e_123.add(
              {
                targets: a_125,
                complete: () => {
                  ((a_125.style.transition = "transform 0.3s ease"), (a_125.style.transform = ""));
                },
                duration: "landscape" === K_117 ? 1 : 400,
                translateY: ["100%", "0"],
                easing: "easeOutQuad",
              },
              600,
            );
            let n_126 = [
                t_124.querySelector(".".concat(styles2().switcher3d)),
                t_124.querySelector(".".concat(styles2().switcher)),
              ],
              i_127 = t_124.querySelector(".".concat(styles2().listButton)),
              r_128 = t_124.querySelector(".".concat(styles2().backButton));
            (i_127 && n_126.push(i_127),
              r_128 && n_126.push(r_128),
              e_123.add(
                {
                  targets: n_126,
                  opacity: [0, 1],
                  duration: 300,
                  easing: "easeOutQuad",
                },
                "landscape" === K_117 ? 1200 : 800,
              ));
          }
        }, [W_114, K_117]),
        (0, React.useLayoutEffect)(() => {
          let e_129 = f_102.current,
            t_130 = e_129.querySelector(".".concat(styles2().switcher)),
            a_131 = e_129.querySelector(".".concat(styles2().switcher3d)),
            n_132 = [
              e_129.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoFlag)),
              e_129.querySelector(".".concat(styles2().illustrationContainer)),
            ];
          ([
            e_129.querySelector(
              ".".concat(styles2().pcContainer, " .").concat(styles2().titleInnerContainer),
            ),
            ,
            e_129.querySelector(
              ".".concat(styles2().pcContainer, " .").concat(styles2().contentInnerContainer),
            ),
            e_129.querySelector(
              ".".concat(styles2().pcContainer, " .").concat(styles2().headerInnerContainer),
            ),
          ].forEach((e_133) => {
            e_133.style.transform = "translateX(-100%)";
          }),
            [
              e_129.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoText)),
              e_129.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoTape)),
              e_129.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoLine)),
            ].forEach((e_134) => {
              e_134.style.transform = "translateX(100%)";
            }),
            (t_130.style.opacity = "0"),
            (a_131.style.opacity = "0"),
            n_132.forEach((e_135) => {
              e_135.style.opacity = "0";
            }));
        }, []));
      let J_118 = (0, React.useRef)(null),
        $_119 = (0, framerMotionUseInView.W)(J_118, {
          once: !0,
        }),
        ee_120 = (0, React.useMemo)(() => Object.entries(P_108.cv).length > 1, [P_108]);
      return (0, jsx.jsxs)(jsx.Fragment, {
        children: [
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().sectionContainer, t_97 && styles2().detail),
            ref: f_102,
            children: [
              (0, jsx.jsx)("div", {
                className: styles2().pcContainer,
                children: (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles2().backgroundDeco),
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().shallowBg,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().decoFlag,
                    }),
                    (0, jsx.jsx)(HollowText.A, {
                      className: styles2().decoText,
                      text: "ENDFIELD",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().decoTape,
                      children: (0, jsx.jsx)("div", {
                        className: styles2().decoLineTri,
                      }),
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().decoLine,
                      children: (0, jsx.jsx)(X_11, {
                        className: styles2().decoLineIcon,
                      }),
                    }),
                    (0, jsx.jsx)(U_12, {
                      className: styles2().decoPlus,
                    }),
                  ],
                }),
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().h5Container,
                children: [
                  (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(styles2().headerDeco),
                    children: [
                      (0, jsx.jsxs)("div", {
                        className: styles2().decoText,
                        children: [
                          (0, jsx.jsx)("span", {
                            className: styles2().leftBracket,
                            children: "[",
                          }),
                          (0, jsx.jsx)("span", {
                            className: styles2().title,
                            children: "REC",
                          }),
                          (0, jsx.jsx)("span", {
                            className: styles2().rightBracket,
                            children: "]",
                          }),
                        ],
                      }),
                      (0, jsx.jsx)(SvgIcon52271.A, {
                        className: styles2().decoTextIcon,
                      }),
                    ],
                  }),
                  (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(styles2().backgroundDeco),
                    children: [
                      (0, jsx.jsx)("div", {
                        className: styles2().shallowBg,
                      }),
                      (0, jsx.jsx)(HollowText.A, {
                        className: styles2().decoText,
                        text: "ENDFIELD",
                      }),
                      (0, jsx.jsx)("div", {
                        className: styles2().whiteCover,
                      }),
                    ],
                  }),
                ],
              }),
              (0, jsx.jsxs)("div", {
                className: classnamesDefault()(styles2().illustLayer),
                children: [
                  (0, jsx.jsx)("div", {
                    className: styles2().h5illustrationContainer,
                    children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                      mode: "wait",
                      children: (0, jsx.jsx)(
                        z_9,
                        {
                          downgrade: u_100,
                          inView: g_103,
                          currentIndex: B_107,
                          is3dActive: Z_109,
                          detailMode: t_97,
                        },
                        P_108.key,
                      ),
                    }),
                  }),
                  (0, jsx.jsx)(Q_10, {
                    ...R_106,
                    className: classnamesDefault()(styles2().switcher),
                  }),
                ],
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().pcContainer,
                children: [
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().headerDeco),
                    children: (0, jsx.jsxs)("div", {
                      className: classnamesDefault()(styles2().headerInnerContainer),
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles2().decoText,
                          children: [
                            (0, jsx.jsx)("span", {
                              className: styles2().leftBracket,
                              children: "[",
                            }),
                            (0, jsx.jsx)("span", {
                              className: styles2().title,
                              children: "REC",
                            }),
                            (0, jsx.jsx)("span", {
                              className: styles2().rightBracket,
                              children: "]",
                            }),
                          ],
                        }),
                        (0, jsx.jsx)(SvgIcon52271.A, {
                          className: styles2().decoTextIcon,
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles2().nameContainer,
                          children: [
                            (0, jsx.jsx)("span", {
                              className: styles2().nameEn,
                              children: P_108.codename,
                            }),
                            (0, jsx.jsxs)("span", {
                              className: styles2().nameIndex,
                              children: [B_107 + 1, " / ", O_105.length],
                            }),
                          ],
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().stars,
                          children: Array(P_108.rarity)
                            .fill(0)
                            .map((e_136, t_137) =>
                              (0, jsx.jsx)(
                                "div",
                                {
                                  className: styles2().star,
                                },
                                t_137,
                              ),
                            ),
                        }),
                      ],
                    }),
                  }),
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().titleContainer),
                    children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                      mode: "wait",
                      children: (0, jsx.jsxs)(
                        framerMotion.P.div,
                        {
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
                          className: styles2().titleInnerContainer,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().icons,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": P_108.prof,
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": P_108.elem,
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles2().nameContainer,
                              children: [
                                (0, jsx.jsx)("span", {
                                  className: styles2().leftBracket,
                                  children: "[",
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().title,
                                  children: P_108.name,
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().rightBracket,
                                  children: "]",
                                }),
                              ],
                            }),
                          ],
                        },
                        "".concat(P_108.codename, "-title"),
                      ),
                    }),
                  }),
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().contentContainer),
                    children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                      mode: "wait",
                      children: (0, jsx.jsxs)(
                        framerMotion.P.div,
                        {
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
                          className: styles2().contentInnerContainer,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().tagContainer,
                              children: [
                                (0, jsx.jsxs)("div", {
                                  className: styles2().tag,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: o_99("operator.camp"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: P_108.camp,
                                    }),
                                  ],
                                }),
                                (0, jsx.jsxs)("div", {
                                  className: styles2().tag,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: o_99("operator.race"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: P_108.race,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().tagContainer,
                              children: Object.entries(P_108.cv).map((e_138) => {
                                let [t_139, a_140] = e_138;
                                return (0, jsx.jsxs)(
                                  "div",
                                  {
                                    className: styles2().tag,
                                    children: [
                                      (0, jsx.jsxs)("div", {
                                        className: classnamesDefault()(
                                          styles2().label,
                                          styles2().cv,
                                          ee_120 && styles2().showText,
                                        ),
                                        children: [
                                          (0, jsx.jsx)(SvgIcon73422.A, {
                                            className: styles2().icon,
                                          }),
                                          ee_120 && o_99("operator.cv.".concat(t_139)),
                                        ],
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: styles2().value,
                                        children: a_140,
                                      }),
                                    ],
                                  },
                                  t_139,
                                );
                              }),
                            }),
                            (0, jsx.jsx)(
                              nextJsRuntimeDefault(),
                              {
                                className: classnamesDefault()(
                                  styles2().detail,
                                  "fr-fr" === y_104 && "ember" === P_108.key && styles2().longer,
                                ),
                                direction: "y",
                                children: P_108.intro.split("\n").map((e_141, t_142) =>
                                  (0, jsx.jsx)(
                                    "div",
                                    {
                                      className: styles2().line,
                                      children: e_141,
                                    },
                                    t_142,
                                  ),
                                ),
                              },
                              P_108.key,
                            ),
                          ],
                        },
                        "".concat(P_108.codename, "-content"),
                      ),
                    }),
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().characterLayer,
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().switchLayer,
                    children: (0, jsx.jsx)("div", {
                      className: classnamesDefault()(
                        styles2().switcher3d,
                        Z_109 && styles2().active,
                        u_100 && styles2().noDisplay,
                      ),
                      onClick: () => {
                        (T_110(!Z_109), SoundEffects.A.play(SoundEffects.d.char_click));
                      },
                    }),
                  }),
                ],
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().h5Container,
                children: [
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().drawerWrapper, D_111 && styles2().active),
                    children: (0, jsx.jsxs)("div", {
                      className: classnamesDefault()(styles2().contentContainer),
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles2().header,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().icons,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": P_108.prof,
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": P_108.elem,
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().decoLine,
                              children: (0, jsx.jsx)(X_11, {
                                className: styles2().decoLineIcon,
                              }),
                            }),
                            (0, jsx.jsxs)("div", {
                              className: classnamesDefault()(
                                styles2().nameContainer,
                                "zh-cn" !== y_104 && "zh-tw" !== y_104 && styles2().small,
                              ),
                              children: [
                                (0, jsx.jsx)("span", {
                                  className: styles2().leftBracket,
                                  children: "[",
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().title,
                                  children: P_108.name,
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().rightBracket,
                                  children: "]",
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles2().nameEnContainer,
                              children: [
                                (0, jsx.jsx)("span", {
                                  className: styles2().nameEn,
                                  children: P_108.codename,
                                }),
                                (0, jsx.jsxs)("span", {
                                  className: styles2().nameIndex,
                                  children: ["//", "\xa0", (B_107 + 1).toString().padStart(2, "0")],
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().stars,
                              children: Array(P_108.rarity)
                                .fill(0)
                                .map((e_143, t_144) =>
                                  (0, jsx.jsx)(
                                    "div",
                                    {
                                      className: styles2().star,
                                    },
                                    t_144,
                                  ),
                                ),
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().deco,
                            }),
                          ],
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles2().detail,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().tagContainer,
                              children: [
                                (0, jsx.jsxs)("div", {
                                  className: classnamesDefault()(styles2().tag, styles2().longer),
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: o_99("operator.camp"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: (0, jsx.jsx)(
                                        EasingFunctions.A,
                                        {
                                          children: P_108.camp,
                                        },
                                        P_108.key,
                                      ),
                                    }),
                                  ],
                                }),
                                (0, jsx.jsxs)("div", {
                                  className: styles2().tag,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: o_99("operator.race"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: P_108.race,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles2().tagContainer,
                              children: [
                                Object.entries(P_108.cv).map((e_145) => {
                                  let [t_146, a_147] = e_145;
                                  return (0, jsx.jsxs)(
                                    "div",
                                    {
                                      className: classnamesDefault()(styles2().tag),
                                      children: [
                                        (0, jsx.jsxs)("div", {
                                          className: classnamesDefault()(
                                            styles2().label,
                                            styles2().cv,
                                            ee_120 && styles2().showText,
                                          ),
                                          children: [
                                            (0, jsx.jsx)(SvgIcon73422.A, {
                                              className: styles2().icon,
                                            }),
                                            ee_120 && o_99("operator.cv.".concat(t_146)),
                                          ],
                                        }),
                                        (0, jsx.jsx)("div", {
                                          className: styles2().value,
                                          children: a_147,
                                        }),
                                      ],
                                    },
                                    t_146,
                                  );
                                }),
                                !ee_120 &&
                                  (0, jsx.jsx)("div", {
                                    className: styles2().tag,
                                  }),
                              ],
                            }),
                            (0, jsx.jsx)(nextJsRuntimeDefault(), {
                              className: styles2().detail,
                              direction: "y",
                              children: P_108.intro.split("\n").map((e_148, t_149) =>
                                (0, jsx.jsx)(
                                  "div",
                                  {
                                    className: styles2().line,
                                    children: e_148,
                                  },
                                  t_149,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().detailButton,
                          onClick: () => {
                            (SoundEffects.A.play(
                              D_111 ? SoundEffects.d.close_click : SoundEffects.d.char_detail_enter,
                            ),
                              F_112(!D_111));
                          },
                          children: (0, jsx.jsx)("div", {
                            className: styles2().inner,
                            children: D_111
                              ? (0, jsx.jsx)(SvgIcon29190.A, {
                                  className: styles2().closeIcon,
                                })
                              : (0, jsx.jsx)(x_3, {
                                  className: styles2().closeIcon,
                                }),
                          }),
                        }),
                        (0, jsx.jsx)("div", {
                          className: classnamesDefault()(
                            styles2().switcher3d,
                            Z_109 && styles2().active,
                            D_111 && styles2().hidden,
                            u_100 && styles2().noDisplay,
                          ),
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.char_click), T_110(!Z_109));
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, jsx.jsxs)("div", {
                    className: styles2().index,
                    children: [(B_107 + 1).toString().padStart(2, "0"), " /", " ", O_105.length],
                  }),
                ],
              }),
              t_97 &&
                (0, jsx.jsx)(C_4, {
                  className: styles2().backButton,
                  text: o_99("operator.detail.back"),
                  onClick: () => {
                    null == n_96 || n_96();
                  },
                }),
              !t_97 &&
                (0, jsx.jsx)("div", {
                  className: classnamesDefault()(styles2().listButton),
                  onClick: () => {
                    window.open("".concat("/" + y_104, "/operator"), "_blank");
                  },
                  children: o_99("operator.more"),
                }),
            ],
          }),
          !t_97 &&
            (0, jsx.jsxs)("div", {
              className: classnamesDefault()(styles2().sectionDivider, $_119 && V_116 && styles2().active),
              ref: J_118,
              children: [
                (0, jsx.jsx)("div", {
                  className: styles2().dividerSubtitle,
                  children: "ARKNIGHTS: ENDFIELD",
                }),
                (0, jsx.jsx)("div", {
                  className: styles2().dividerTitle,
                  children: "LORE",
                }),
              ],
            }),
        ],
      });
    };
};
