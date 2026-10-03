// HomeLayout (all homepage sections, header, modals, loader tasks) — module 83597 from 226-d5292700ff68fd13
// module 83597 from 226-d5292700ff68fd13.js
// deps: 96424, 97028, 17540, 89102, 12914, 94150, 73235, 30998, 60705, 99880, 22060, 2142, 70246, 44990, 71985, 35038, 4948, 1162, 26097, 97521, 80500, 72535, 92610, 9995, 79549, 36624, 6921, 29190, 81222, 18109, 27014, 47290, 95823, 56006, 44705, 2285, 7725, 15723, 52652, 33811, 54925, 21953, 14577, 59288, 21789, 91618, 56578, 94167, 24106, 61617, 27663, 96741, 25576, 6777, 54335, 90928, 71272, 19213, 90286, 29521, 40226, 84245, 56604, 2878, 94534, 49876, 17224, 83768, 3492, 73560, 60687, 41409, 53079, 25477, 14000, 74517, 60658, 3787, 95308, 60891, 20944, 92418, 91251, 92182, 29671, 49095, 15889, 73992, 2682, 51067, 26915, 43837, 80187, 98220, 30257, 13920, 89622, 1287, 36563, 87346, 93297, 84343, 29269, 11502, 75583, 97916, 80689, 22519, 60459, 9184, 1841, 79755, 63875, 92880, 26673, 78074, 73803, 3147, 49929, 35300, 93577, 89808, 82405, 57236, 32343, 52151, 90746, 37602, 34573, 71494, 93247, 48056, 80753
const module_83597 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Layout: () => aK_112,
  });
  var n_1,
    i_2,
    r_3,
    s_4,
    o_5,
    l_6,
    c_7,
    d_8,
    __9,
    u_10,
    m_11,
    h_12,
    jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    lodashThrottle = webpackRequire(17540),
    vhCheck = webpackRequire(89102),
    vhCheckDefault = webpackRequire.n(vhCheck),
    MediaModalStore = webpackRequire(12914),
    UserModalAccountMenu = webpackRequire(94150),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    zustandCreate = webpackRequire(99880),
    ReactDOM = webpackRequire(22060),
    React2 = webpackRequire(2142);
  function M_13() {
    return (M_13 = Object.assign
      ? Object.assign.bind()
      : function (e_113) {
          for (var t_114 = 1; t_114 < arguments.length; t_114++) {
            var a_115 = arguments[t_114];
            for (var n_116 in a_115) ({}).hasOwnProperty.call(a_115, n_116) && (e_113[n_116] = a_115[n_116]);
          }
          return e_113;
        }).apply(null, arguments);
  }
  let S_14 = function (e_117) {
    return React2.createElement(
      "svg",
      M_13(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 21 22",
        },
        e_117,
      ),
      n_1 ||
        (n_1 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M20.956,10.957 C20.956,15.921 17.454,20.065 12.785,21.064 L12.785,18.098 C15.849,17.167 18.080,14.323 18.080,10.956 C18.080,8.420 16.813,6.183 14.879,4.834 L12.785,6.951 L12.785,3.814 L12.785,0.849 L12.785,0.741 L18.932,0.738 L16.919,2.773 C19.372,4.663 20.956,7.622 20.956,10.957 ZM4.307,19.146 C1.850,17.256 0.263,14.295 0.263,10.957 C0.263,5.992 3.765,1.849 8.434,0.850 L8.434,3.814 C5.370,4.745 3.139,7.590 3.139,10.956 C3.139,13.501 4.416,15.744 6.362,17.091 L8.437,15.017 L8.437,21.231 L2.220,21.231 L4.307,19.146 Z",
        })),
    );
  };
  var module70246 = webpackRequire(70246),
    module44990 = webpackRequire(44990),
    Toast = webpackRequire(71985),
    module35038 = webpackRequire(35038),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
    SoundEffects = webpackRequire(26097),
    SiteUtils = webpackRequire(97521);
  let D_15 = (e_118) => {
    SiteUtils.isServer || window.gtag("event", e_118);
  };
  var SvgIcon80500 = webpackRequire(80500),
    stylesModule = webpackRequire(72535),
    styles = webpackRequire.n(stylesModule);
  let W_16 = {
      ios: "iOS",
      android: "Android",
      pc: "PC",
      ps: "PS",
    },
    Y_17 = ["ios", "android", "pc", "ps"],
    q_18 = ["pc", "android", "ios", "ps"],
    z_19 = (0, zustandCreate.v)((e_119) => ({
      isActive: !1,
      activate: () =>
        e_119({
          isActive: !0,
        }),
      platformsReserved: [],
    })),
    Q_20 = () => z_19((e_120) => e_120.activate),
    X_21 = (e_121) => {
      let { className: t_122, style: a_123 } = e_121,
        { isActive: n_124, platformsReserved: i_125 } = z_19(),
        { t: r_126 } = (0, I18nProviderUseI18n.Bd)(),
        { account: s_127, loading: o_128 } = (0, ReactDOM.F7)(),
        [l_129, c_130] = (0, React.useState)(!1),
        [d_131, __132] = (0, React.useState)([]);
      (0, React.useEffect)(() => {
        n_124 ||
          setTimeout(() => {
            c_130(!1);
          }, 300);
      }, [n_124]);
      let u_133 = (0, React.useMemo)(
          () =>
            q_18.map((e_141) => ({
              key: e_141,
              status: i_125.includes(e_141) ? "reserved" : d_131.includes(e_141) ? "selected" : "unselected",
            })),
          [i_125, d_131],
        ),
        m_134 = (0, React.useCallback)(
          (e_142) => {
            !h_135.current &&
              s_127 &&
              (SoundEffects.A.play(SoundEffects.d.arrow_click),
              __132((t_143) =>
                t_143.includes(e_142) ? t_143.filter((t_144) => t_144 !== e_142) : [...t_143, e_142],
              ));
          },
          [s_127],
        ),
        h_135 = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        if (!s_127) {
          (z_19.setState({
            platformsReserved: [],
          }),
            __132([]));
          return;
        }
        ((h_135.current = !0),
          Tracking.A.queryReserve()
            .then((e_145) => {
              let t_146 = (null == e_145 ? void 0 : e_145.map((e_147) => Y_17[e_147])) || [];
              (z_19.setState({
                platformsReserved: t_146,
              }),
                (h_135.current = !1));
            })
            .catch((e_148) => {
              (console.error(e_148), (h_135.current = !1));
            }));
      }, [s_127]);
      let L_136 = (0, React.useMemo)(() => d_131.some((e_149) => !i_125.includes(e_149)), [i_125, d_131]),
        f_137 = (0, React.useMemo)(() => q_18.every((e_150) => i_125.includes(e_150)), [i_125]),
        x_138 = (0, React.useCallback)(() => {
          if (h_135.current || !s_127 || !L_136) return;
          h_135.current = !0;
          let e_151 = d_131.filter((e_152) => !i_125.includes(e_152));
          Tracking.A.submitReserve(e_151.map((e_153) => Y_17.indexOf(e_153)))
            .then((t_154) => {
              ((null == t_154 ? void 0 : t_154.status) === 0
                ? (c_130(!0),
                  z_19.setState({
                    platformsReserved: [...i_125, ...d_131],
                  }),
                  Tracking.A.collect("book_success", {
                    platform: JSON.stringify(e_151.map((e_155) => W_16[e_155])),
                  }),
                  D_15("Registration-complete"))
                : Toast.A.message(r_126("toast.networkError")),
                (h_135.current = !1));
            })
            .catch((e_156) => {
              (console.error(e_156), Toast.A.message(r_126("toast.networkError")), (h_135.current = !1));
            });
        }, [s_127, L_136, i_125, d_131, r_126]),
        g_139 = (0, module35038.$)(),
        y_140 = (0, React.useCallback)(() => {
          (SoundEffects.A.play(SoundEffects.d.common_click), g_139());
        }, [g_139]);
      return (
        (0, React.useEffect)(() => {
          n_124 && __132([]);
        }, [n_124]),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(
            styles().reserveModal,
            n_124 && styles().active,
            styles().oversea,
            t_122,
          ),
          style: a_123,
          children: (0, jsx.jsx)(SvgIcon80500.A, {
            title: r_126("modal.reserve.title"),
            onClose: () =>
              z_19.setState({
                isActive: !1,
              }),
            className: styles().modalContainer,
            children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
              mode: "wait",
              children: l_129
                ? (0, jsx.jsxs)(
                    framerMotion.P.div,
                    {
                      className: styles().contentFrame,
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
                      },
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles().cong,
                          children: r_126("modal.reserve.cong")
                            .split("\n")
                            .map((e_157, t_158) =>
                              (0, jsx.jsx)(
                                "div",
                                {
                                  children: e_157,
                                },
                                t_158,
                              ),
                            ),
                        }),
                        (0, jsx.jsx)(module70246.A, {
                          className: styles().successButton,
                          onClick: () => {
                            z_19.setState({
                              isActive: !1,
                            });
                          },
                          children: r_126("modal.reserve.button.confirm"),
                        }),
                      ],
                    },
                    "success",
                  )
                : (0, jsx.jsxs)(
                    framerMotion.P.div,
                    {
                      className: styles().contentFrame,
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
                      },
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles().contentContainer,
                          children: [
                            (0, jsx.jsx)("div", {
                              className: styles().label,
                              children: r_126("modal.reserve.label.currentAccount"),
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles().currentAccount,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles().number,
                                  children: null == s_127 ? void 0 : s_127.displayName,
                                }),
                                (0, jsx.jsxs)("div", {
                                  className: styles().switch,
                                  onClick: y_140,
                                  children: [
                                    (0, jsx.jsx)("span", {
                                      className: styles().text,
                                      children: r_126("modal.reserve.label.switch"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles().switchButton,
                                      children: (0, jsx.jsx)(S_14, {
                                        className: styles().switchIcon,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles().label,
                              children: r_126("modal.reserve.label.select"),
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles().platforms,
                              children: u_133.map((e_159) =>
                                (0, jsx.jsxs)(
                                  "div",
                                  {
                                    className: classnamesDefault()(styles().platform, styles()[e_159.status]),
                                    children: [
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles().ratio),
                                        onClick: () => m_134(e_159.key),
                                      }),
                                      (0, jsx.jsxs)("div", {
                                        className: classnamesDefault()(
                                          styles().name,
                                          "reserved" === e_159.status && styles().reserved,
                                        ),
                                        children: [
                                          (0, jsx.jsx)("div", {
                                            className: styles().key,
                                            children: r_126("modal.reserve.platform.".concat(e_159.key)),
                                          }),
                                          (0, jsx.jsx)("div", {
                                            className: classnamesDefault()(styles().reservedText),
                                            children: r_126("modal.reserve.reserved"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  e_159.key,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles().buttonContainer,
                          children: [
                            !f_137 &&
                              (0, jsx.jsx)(module70246.A, {
                                className: classnamesDefault()(styles().button),
                                disabled: !L_136,
                                onClick: x_138,
                                children: r_126("modal.reserve.button.reserve"),
                              }),
                            (0, jsx.jsx)(module70246.A, {
                              theme: f_137 ? "dark" : "light",
                              className: styles().button,
                              onClick: () => {
                                h_135.current ||
                                  z_19.setState({
                                    isActive: !1,
                                  });
                              },
                              children: f_137
                                ? r_126("modal.reserve.button.confirm")
                                : r_126("modal.reserve.button.cancel"),
                            }),
                          ],
                        }),
                      ],
                    },
                    "normal",
                  ),
            }),
          }),
        })
      );
    },
    U_22 = (e_160) => {
      let { className: t_161, style: a_162 } = e_160;
      return (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(X_21, {
          className: t_161,
          style: a_162,
        }),
      });
    };
  var UserModalTextLinks = webpackRequire(92610),
    module9995 = webpackRequire(9995),
    module79549 = webpackRequire(79549),
    zustand = webpackRequire(36624),
    SvgIcon6921 = webpackRequire(6921),
    SvgIcon29190 = webpackRequire(29190);
  function ea_23() {
    return (ea_23 = Object.assign
      ? Object.assign.bind()
      : function (e_163) {
          for (var t_164 = 1; t_164 < arguments.length; t_164++) {
            var a_165 = arguments[t_164];
            for (var n_166 in a_165) ({}).hasOwnProperty.call(a_165, n_166) && (e_163[n_166] = a_165[n_166]);
          }
          return e_163;
        }).apply(null, arguments);
  }
  let en_24 = function (e_167) {
    return React2.createElement(
      "svg",
      ea_23(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 31 31",
        },
        e_167,
      ),
      i_2 ||
        (i_2 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M24.249,24.503 C24.770,24.859 25.612,25.123 26.207,25.443 C26.896,25.813 29.949,27.537 30.054,28.210 C30.082,28.385 29.927,28.586 29.914,28.791 C29.906,28.918 29.992,29.062 29.976,29.152 C29.905,29.544 28.714,29.893 28.359,29.978 C26.551,30.407 24.666,30.081 22.863,29.792 C23.153,30.571 22.568,30.701 21.934,30.757 C20.445,30.887 18.682,30.823 17.179,30.760 C17.005,30.753 16.887,30.628 16.750,30.629 C16.526,30.631 16.059,30.804 15.770,30.831 C14.605,30.940 13.129,30.999 12.070,30.447 C11.556,30.180 11.780,30.212 11.187,30.074 C10.704,29.962 9.749,29.369 9.717,28.825 C8.195,29.183 6.657,27.686 5.928,26.487 C5.287,25.433 5.323,24.564 6.746,25.333 C6.750,24.948 6.684,24.572 6.914,24.237 C7.624,23.875 8.082,24.563 8.528,24.1000 L9.494,26.521 C9.595,25.858 9.757,25.212 10.163,24.665 C9.553,24.425 8.872,23.705 8.497,23.173 C8.410,23.051 8.255,22.629 8.215,22.600 C8.143,22.549 6.830,22.311 6.506,22.193 C5.133,21.690 4.093,20.630 3.517,19.312 C3.359,18.950 3.384,18.662 3.106,18.347 L2.837,18.552 C2.397,18.566 2.236,17.529 2.164,17.173 C1.908,15.910 1.855,14.555 1.547,13.293 C1.501,13.252 1.131,13.452 0.927,13.300 C0.725,13.149 0.542,11.215 0.730,11.022 C1.599,10.918 2.495,10.679 3.368,10.619 C3.908,10.582 4.461,10.653 5.001,10.617 C5.804,10.564 7.350,10.196 8.066,10.524 C8.130,10.553 8.187,10.603 8.224,10.663 C8.310,10.799 8.364,11.907 8.341,12.116 C8.291,12.551 7.949,12.841 7.560,12.970 L7.560,14.581 L9.123,15.523 C9.180,14.430 9.618,13.622 10.132,12.705 C10.782,11.547 11.231,10.250 11.933,9.082 C12.618,7.941 13.357,7.284 14.133,6.305 C14.228,6.186 14.227,6.016 14.320,5.897 C14.728,5.374 15.473,5.429 15.923,5.858 C16.231,6.150 16.806,7.061 17.072,7.458 C17.392,7.937 17.652,8.458 17.963,8.944 L20.581,9.562 C21.880,9.162 23.124,8.755 24.472,8.549 C24.985,8.471 27.561,8.136 27.822,8.406 C27.883,8.468 27.986,8.982 27.987,9.095 C27.997,10.316 26.236,13.891 25.626,15.129 C25.561,15.262 25.420,15.328 25.390,15.487 C25.287,16.022 25.469,16.959 25.466,17.570 C25.464,17.915 25.358,18.226 25.386,18.610 C25.417,19.050 25.654,19.438 25.496,19.904 C25.377,20.256 23.913,21.324 23.533,21.507 C22.827,21.846 21.904,21.876 21.155,22.174 C21.859,22.720 22.628,23.170 23.344,23.700 C23.649,23.925 23.953,24.300 24.249,24.503 ZM10.524,4.960 C9.802,5.190 9.093,5.485 8.459,5.907 C8.330,5.942 8.197,5.688 8.173,5.586 C7.903,4.435 7.977,3.176 7.865,2.031 C7.845,1.823 7.591,1.633 7.805,1.421 C7.907,1.320 8.416,1.234 8.588,1.202 C9.047,1.114 9.917,0.966 10.357,0.964 C10.512,0.963 10.735,1.017 10.826,1.148 C11.164,1.640 10.425,4.229 10.524,4.960 ZM5.461,7.334 C5.273,7.203 4.037,6.270 4.010,6.181 C3.956,6.003 4.021,5.862 4.114,5.716 C4.199,5.582 5.442,4.342 5.538,4.314 C5.910,4.204 6.373,4.746 6.600,5.005 C6.983,5.442 7.280,5.969 7.629,6.433 C7.271,6.955 6.792,7.414 6.746,8.091 C6.670,8.159 5.612,7.441 5.461,7.334 Z",
        })),
    );
  };
  function ei_25() {
    return (ei_25 = Object.assign
      ? Object.assign.bind()
      : function (e_168) {
          for (var t_169 = 1; t_169 < arguments.length; t_169++) {
            var a_170 = arguments[t_169];
            for (var n_171 in a_170) ({}).hasOwnProperty.call(a_170, n_171) && (e_168[n_171] = a_170[n_171]);
          }
          return e_168;
        }).apply(null, arguments);
  }
  let er_26 = function (e_172) {
    return React2.createElement(
      "svg",
      ei_25(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 53 42",
        },
        e_172,
      ),
      r_3 ||
        (r_3 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M-0.000,41.1000 L-0.000,33.625 L52.1000,33.625 L52.1000,41.1000 L-0.000,41.1000 ZM-0.000,16.792 L52.1000,16.792 L52.1000,25.208 L-0.000,25.208 L-0.000,16.792 ZM-0.000,-0.000 L52.1000,-0.000 L52.1000,8.416 L-0.000,8.416 L-0.000,-0.000 Z",
        })),
    );
  };
  function es_27() {
    return (es_27 = Object.assign
      ? Object.assign.bind()
      : function (e_173) {
          for (var t_174 = 1; t_174 < arguments.length; t_174++) {
            var a_175 = arguments[t_174];
            for (var n_176 in a_175) ({}).hasOwnProperty.call(a_175, n_176) && (e_173[n_176] = a_175[n_176]);
          }
          return e_173;
        }).apply(null, arguments);
  }
  let eo_28 = function (e_177) {
    return React2.createElement(
      "svg",
      es_27(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 57 47",
        },
        e_177,
      ),
      s_4 ||
        (s_4 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M27.127,12.817 C21.471,12.817 16.885,17.503 16.885,23.282 C16.885,29.065 21.471,33.751 27.127,33.751 C27.557,33.751 27.981,33.721 28.397,33.668 L28.397,46.516 L14.001,46.516 L0.876,23.282 L14.001,0.052 L40.253,0.052 L50.379,17.969 L35.953,17.969 C34.170,14.886 30.886,12.817 27.127,12.817 ZM40.479,26.382 L36.055,21.862 L46.634,21.862 L46.631,30.607 L46.631,31.722 L56.119,41.418 L50.711,46.944 L41.223,37.249 L31.572,37.249 L31.572,26.443 L35.995,30.963 L40.479,26.382 Z",
        })),
    );
  };
  function el_29() {
    return (el_29 = Object.assign
      ? Object.assign.bind()
      : function (e_178) {
          for (var t_179 = 1; t_179 < arguments.length; t_179++) {
            var a_180 = arguments[t_179];
            for (var n_181 in a_180) ({}).hasOwnProperty.call(a_180, n_181) && (e_178[n_181] = a_180[n_181]);
          }
          return e_178;
        }).apply(null, arguments);
  }
  function ec_30() {
    return (ec_30 = Object.assign
      ? Object.assign.bind()
      : function (e_182) {
          for (var t_183 = 1; t_183 < arguments.length; t_183++) {
            var a_184 = arguments[t_183];
            for (var n_185 in a_184) ({}).hasOwnProperty.call(a_184, n_185) && (e_182[n_185] = a_184[n_185]);
          }
          return e_182;
        }).apply(null, arguments);
  }
  var SvgIcon81222 = webpackRequire(81222),
    SvgIcon18109 = webpackRequire(18109),
    SvgIcon27014 = webpackRequire(27014);
  function em_31() {
    return (em_31 = Object.assign
      ? Object.assign.bind()
      : function (e_186) {
          for (var t_187 = 1; t_187 < arguments.length; t_187++) {
            var a_188 = arguments[t_187];
            for (var n_189 in a_188) ({}).hasOwnProperty.call(a_188, n_189) && (e_186[n_189] = a_188[n_189]);
          }
          return e_186;
        }).apply(null, arguments);
  }
  function eh_32() {
    return (eh_32 = Object.assign
      ? Object.assign.bind()
      : function (e_190) {
          for (var t_191 = 1; t_191 < arguments.length; t_191++) {
            var a_192 = arguments[t_191];
            for (var n_193 in a_192) ({}).hasOwnProperty.call(a_192, n_193) && (e_190[n_193] = a_192[n_193]);
          }
          return e_190;
        }).apply(null, arguments);
  }
  function ep_33() {
    return (ep_33 = Object.assign
      ? Object.assign.bind()
      : function (e_194) {
          for (var t_195 = 1; t_195 < arguments.length; t_195++) {
            var a_196 = arguments[t_195];
            for (var n_197 in a_196) ({}).hasOwnProperty.call(a_196, n_197) && (e_194[n_197] = a_196[n_197]);
          }
          return e_194;
        }).apply(null, arguments);
  }
  let ev_34 = function (e_198) {
    return React2.createElement(
      "svg",
      ep_33(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 39",
        },
        e_198,
      ),
      __9 ||
        (__9 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M5.743,38.153 L0.666,33.076 L14.434,19.307 L0.666,5.538 L5.743,0.462 L24.587,19.307 L5.743,38.153 Z",
        })),
    );
  };
  var SvgIcon47290 = webpackRequire(47290);
  function ef_35() {
    return (ef_35 = Object.assign
      ? Object.assign.bind()
      : function (e_199) {
          for (var t_200 = 1; t_200 < arguments.length; t_200++) {
            var a_201 = arguments[t_200];
            for (var n_202 in a_201) ({}).hasOwnProperty.call(a_201, n_202) && (e_199[n_202] = a_201[n_202]);
          }
          return e_199;
        }).apply(null, arguments);
  }
  function ex_36() {
    return (ex_36 = Object.assign
      ? Object.assign.bind()
      : function (e_203) {
          for (var t_204 = 1; t_204 < arguments.length; t_204++) {
            var a_205 = arguments[t_204];
            for (var n_206 in a_205) ({}).hasOwnProperty.call(a_205, n_206) && (e_203[n_206] = a_205[n_206]);
          }
          return e_203;
        }).apply(null, arguments);
  }
  let eg_37 = function (e_207) {
    return React2.createElement(
      "svg",
      ex_36(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 31 28",
        },
        e_207,
      ),
      m_11 ||
        (m_11 = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M23.146,13.962 L15.554,0.843 L30.739,0.843 L23.146,13.962 ZM0.261,0.843 L15.446,0.843 L7.854,13.962 L0.261,0.843 ZM15.554,27.156 L7.961,14.036 L23.146,14.036 L15.554,27.156 Z",
        })),
    );
  };
  var SvgIcon95823 = webpackRequire(95823),
    SiteConfig = webpackRequire(56006),
    module44705 = webpackRequire(44705),
    SoundControlStore = webpackRequire(2285),
    BackgroundMusic = webpackRequire(7725),
    DeviceUtils = webpackRequire(15723),
    HollowText = webpackRequire(52652),
    module33811 = webpackRequire(33811),
    module33811Default = webpackRequire.n(module33811);
  let eS_38 = (e_208) => {
      let { className: t_209, style: a_210, children: n_211 } = e_208;
      return (0, jsx.jsx)(framerMotion.P.div, {
        className: classnamesDefault()(module33811Default().clipTransition, t_209),
        style: a_210,
        initial: {
          opacity: 0,
          pointerEvents: "none",
        },
        animate: {
          opacity: 1,
          pointerEvents: "auto",
        },
        exit: {
          opacity: 0,
          pointerEvents: "none",
        },
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
        children: n_211,
      });
    },
    eI_39 = (e_212) => {
      let { className: t_213, style: a_214, onClick: n_215 } = e_212;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 28",
        className: t_213,
        style: a_214,
        onClick: n_215,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M30.466,24.955 L29.363,26.560 L24.987,23.505 L24.987,27.714 L13.611,20.665 L13.611,20.631 L6.356,20.631 L6.356,10.500 L0.639,6.513 L2.793,3.387 L2.859,3.434 L8.495,7.368 L10.209,8.564 L10.648,8.872 L24.987,18.879 L31.513,23.434 L30.466,24.955 ZM24.987,0.286 L24.987,15.704 L13.303,7.550 L24.987,0.286 Z",
        }),
      });
    },
    eE_40 = (e_216) => {
      let { className: t_217, style: a_218, onClick: n_219 } = e_216;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 28",
        className: t_217,
        style: a_218,
        onClick: n_219,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M7.405,7.332 L7.405,7.367 L0.932,7.367 L0.932,20.633 L7.405,20.633 L7.405,20.667 L19.275,27.718 L19.275,0.281 L7.405,7.332 Z",
        }),
      });
    },
    eO_41 = (e_220) => {
      let { className: t_221, style: a_222, onClick: n_223 } = e_220;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 20",
        className: t_221,
        style: a_222,
        onClick: n_223,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M0.724,19.567 L0.724,-0.014 L18.789,-0.014 L18.789,3.217 L3.930,3.217 L3.930,16.337 L28.460,16.337 L28.460,12.699 L31.666,12.699 L31.666,19.567 L0.724,19.567 ZM28.460,5.500 L21.148,12.869 L18.881,10.584 L26.193,3.217 L21.526,3.217 L21.526,-0.014 L31.666,-0.014 L31.666,10.203 L28.460,10.203 L28.460,5.500 Z",
        }),
      });
    },
    eR_42 = (e_224) => {
      let { className: t_225, style: a_226, onClick: n_227 } = e_224;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 51 14",
        className: t_225,
        style: a_226,
        onClick: n_227,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M46.832,5.217 L46.832,3.841 L50.325,3.841 L50.325,5.217 L46.832,5.217 ZM46.832,0.982 L50.325,0.982 L50.325,3.627 L46.832,3.627 L46.832,0.982 ZM42.891,3.137 L41.941,0.982 L46.432,0.982 L45.483,3.137 L42.891,3.137 ZM41.157,2.187 C41.033,2.187 40.921,2.154 40.821,2.086 C40.722,2.018 40.651,1.930 40.608,1.819 L41.632,5.227 L37.797,5.227 L37.797,0.987 L40.357,0.987 L40.571,1.707 C40.564,1.668 40.560,1.629 40.560,1.590 C40.560,1.426 40.619,1.286 40.736,1.169 C40.853,1.051 40.994,0.993 41.157,0.993 C41.321,0.993 41.461,1.051 41.579,1.169 C41.696,1.286 41.755,1.427 41.755,1.593 C41.755,1.758 41.696,1.898 41.579,2.014 C41.461,2.130 41.321,2.187 41.157,2.187 ZM39.947,9.707 C39.940,9.668 39.936,9.629 39.936,9.590 C39.936,9.426 39.995,9.286 40.112,9.169 C40.229,9.051 40.370,8.993 40.533,8.993 C40.697,8.993 40.837,9.051 40.955,9.169 C41.072,9.286 41.131,9.427 41.131,9.593 C41.131,9.758 41.072,9.898 40.955,10.014 C40.837,10.130 40.697,10.187 40.533,10.187 C40.409,10.187 40.297,10.154 40.197,10.086 C40.098,10.018 40.027,9.930 39.984,9.819 L41.008,13.227 L37.173,13.227 L37.173,8.987 L39.733,8.987 L39.947,9.707 ZM36.448,2.246 L36.955,2.246 L36.955,4.033 L36.448,4.033 L36.448,2.246 ZM34.731,0.987 L36.235,0.987 L36.235,5.217 L34.731,5.217 L34.731,0.987 ZM35.640,9.291 C35.848,9.498 35.952,9.747 35.952,10.041 C35.952,10.334 35.848,10.584 35.640,10.790 C35.432,10.996 35.181,11.099 34.888,11.099 C34.595,11.099 34.345,10.996 34.139,10.790 C33.932,10.584 33.829,10.334 33.829,10.041 C33.829,9.747 33.932,9.498 34.139,9.291 C34.345,9.085 34.595,8.982 34.888,8.982 C35.181,8.982 35.432,9.085 35.640,9.291 ZM34.016,2.246 L34.517,2.246 L34.517,4.033 L34.016,4.033 L34.016,2.246 ZM35.952,13.222 L33.787,13.222 L35.952,10.417 L35.952,13.222 ZM32.160,10.187 C32.036,10.187 31.924,10.154 31.824,10.086 C31.724,10.018 31.653,9.930 31.611,9.819 L32.635,13.227 L28.800,13.227 L28.800,8.987 L31.360,8.987 L31.573,9.707 C31.566,9.668 31.563,9.629 31.563,9.590 C31.563,9.426 31.621,9.286 31.739,9.169 C31.856,9.051 31.996,8.993 32.160,8.993 C32.324,8.993 32.464,9.051 32.581,9.169 C32.699,9.286 32.757,9.427 32.757,9.593 C32.757,9.758 32.699,9.898 32.581,10.014 C32.464,10.130 32.324,10.187 32.160,10.187 ZM32.395,2.417 L32.395,5.222 L30.229,5.222 L32.395,2.417 ZM31.331,3.099 C31.037,3.099 30.788,2.996 30.581,2.790 C30.375,2.584 30.272,2.334 30.272,2.041 C30.272,1.747 30.375,1.498 30.581,1.291 C30.788,1.085 31.037,0.982 31.331,0.982 C31.624,0.982 31.875,1.085 32.083,1.291 C32.291,1.498 32.395,1.747 32.395,2.041 C32.395,2.334 32.291,2.584 32.083,2.790 C31.875,2.996 31.624,3.099 31.331,3.099 ZM28.277,5.254 L26.837,5.254 L26.139,5.254 L26.139,3.862 L27.056,3.862 L27.088,3.649 L25.760,3.649 L25.760,2.214 L26.640,0.982 L27.509,0.982 L28.277,0.982 L29.072,0.982 L28.389,5.254 L28.277,5.254 ZM24.176,5.254 L22.736,5.254 L22.037,5.254 L22.037,3.862 L22.955,3.862 L22.987,3.649 L21.659,3.649 L21.659,2.214 L22.539,0.982 L23.408,0.982 L24.176,0.982 L24.971,0.982 L24.288,5.254 L24.176,5.254 ZM17.323,1.035 L20.779,1.035 L20.779,3.654 L17.323,3.654 L17.323,1.035 ZM14.224,3.841 L16.491,3.841 L16.491,5.217 L12.997,5.217 L14.224,3.841 ZM12.997,0.982 L16.491,0.982 L16.491,3.633 L15.909,3.633 L12.997,0.982 ZM11.419,2.246 L11.925,2.246 L11.925,4.033 L11.419,4.033 L11.419,2.246 ZM9.701,0.987 L11.205,0.987 L11.205,5.217 L9.701,5.217 L9.701,0.987 ZM11.173,8.982 L10.491,13.254 L10.379,13.254 L8.939,13.254 L8.240,13.254 L8.240,11.862 L9.157,11.862 L9.189,11.649 L7.861,11.649 L7.861,10.214 L8.741,8.982 L9.611,8.982 L10.379,8.982 L11.173,8.982 ZM8.987,2.246 L9.488,2.246 L9.488,4.033 L8.987,4.033 L8.987,2.246 ZM5.024,3.846 L7.984,3.846 L7.984,5.222 L5.024,5.222 L5.024,3.846 ZM4.491,2.209 L5.712,0.987 L7.984,0.987 L7.984,3.633 L4.491,3.633 L4.491,2.209 ZM2.139,3.227 L2.939,0.971 L3.739,0.971 L2.939,3.227 L2.139,3.227 ZM0.944,5.217 L0.944,0.971 L2.139,0.971 L2.139,3.227 L2.139,5.217 L0.944,5.217 ZM15.360,10.337 L11.872,10.337 L11.872,8.987 L15.360,8.987 L15.360,10.337 ZM13.477,11.713 L11.872,11.713 L11.872,10.459 L13.477,10.459 L13.477,11.713 ZM15.360,13.217 L11.872,13.217 L11.872,11.841 L15.360,11.841 L15.360,13.217 ZM17.323,3.857 L18.896,3.857 L18.896,5.222 L17.323,5.222 L17.323,3.857 ZM19.653,8.987 L19.653,11.633 L16.160,11.633 L16.160,10.209 L17.381,8.987 L19.653,8.987 ZM19.653,13.222 L16.693,13.222 L16.693,11.846 L19.653,11.846 L19.653,13.222 ZM23.909,11.654 L20.453,11.654 L20.453,9.035 L23.909,9.035 L23.909,11.654 ZM22.027,13.222 L20.453,13.222 L20.453,11.857 L22.027,11.857 L22.027,13.222 ZM28.181,11.654 L24.725,11.654 L24.725,9.035 L28.181,9.035 L28.181,11.654 ZM26.299,13.222 L24.725,13.222 L24.725,11.857 L26.299,11.857 L26.299,13.222 ZM45.237,8.982 L43.643,11.633 L41.733,11.633 L43.312,8.982 L45.237,8.982 ZM44.187,3.163 L45.365,5.206 L43.013,5.206 L44.187,3.163 ZM45.237,13.227 L43.643,13.227 L43.643,11.846 L45.237,11.846 L45.237,13.227 Z",
        }),
      });
    };
  var stylesModule2 = webpackRequire(54925),
    styles2 = webpackRequire.n(stylesModule2);
  let eZ_43 = {
      home: SvgIcon18109.A,
      lore: function (e_228) {
        return React2.createElement(
          "svg",
          em_31(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 42 42",
            },
            e_228,
          ),
          c_7 ||
            (c_7 = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M36.038,32.520 L36.038,5.876 L15.483,5.876 L15.483,0.188 L41.891,0.188 L41.891,32.520 L36.038,32.520 ZM15.614,9.516 L15.483,9.643 L15.483,9.787 L11.414,13.741 L6.027,8.506 L1.825,4.423 L1.861,4.388 L1.787,4.316 L6.060,0.164 L11.829,5.769 L15.445,9.283 L15.649,9.482 L15.614,9.516 ZM6.027,35.043 L22.791,35.043 L22.791,40.731 L0.173,40.731 L0.173,13.742 L6.027,13.742 L6.027,35.043 ZM15.652,24.914 L15.652,31.990 L8.255,31.990 L8.255,24.800 L15.535,24.800 L15.652,24.800 L15.652,9.476 L31.421,9.476 L31.421,24.800 L23.479,24.800 L23.479,32.518 L23.479,32.520 L15.652,24.914 ZM31.513,32.808 L34.107,35.331 L36.934,38.078 L33.068,41.835 L32.228,41.019 L26.374,35.331 L23.778,32.808 L23.479,32.518 L27.347,28.759 L31.513,32.808 Z",
            })),
        );
      },
      information: SvgIcon27014.A,
      gameplay: SvgIcon81222.A,
      notice: SvgIcon47290.A,
      operator: function (e_229) {
        return React2.createElement(
          "svg",
          ef_35(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 44 49",
            },
            e_229,
          ),
          u_10 ||
            (u_10 = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M43.057,48.470 L37.334,48.470 L6.667,48.470 L0.942,48.470 L0.942,40.719 L0.942,15.502 L0.941,15.502 L0.941,6.304 L0.942,6.304 L0.942,6.301 L6.667,6.301 L6.667,6.304 L9.743,6.304 L9.743,10.903 L34.526,10.903 L34.526,6.304 L37.334,6.304 L37.334,6.301 L43.058,6.301 L43.058,48.470 L43.057,48.470 ZM37.334,15.502 L6.667,15.502 L6.667,40.719 L10.448,40.719 L10.448,35.267 C10.448,32.112 12.951,29.554 16.037,29.554 L27.963,29.554 C31.049,29.554 33.551,32.112 33.551,35.267 L33.551,40.719 L37.334,40.719 L37.334,15.502 ZM22.000,27.793 C19.155,27.793 16.848,25.434 16.848,22.526 C16.848,19.617 19.155,17.259 22.000,17.259 C24.845,17.259 27.152,19.617 27.152,22.526 C27.152,25.434 24.845,27.793 22.000,27.793 ZM9.743,0.506 L34.526,0.506 L34.526,6.304 L9.743,6.304 L9.743,0.506 Z",
            })),
        );
      },
      milestone: function (e_230) {
        return React2.createElement(
          "svg",
          eh_32(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 42",
            },
            e_230,
          ),
          d_8 ||
            (d_8 = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M38.973,27.409 L47.236,35.988 L37.931,35.988 L35.532,35.988 L23.041,35.988 C20.926,33.892 19.741,32.717 17.626,30.622 L23.041,30.622 L35.532,30.622 L35.532,18.830 L47.236,18.830 L38.973,27.409 ZM47.236,7.231 C42.666,11.761 40.103,14.300 35.532,18.830 L35.532,7.231 L47.236,7.231 ZM6.598,41.469 L0.332,41.469 L0.332,27.337 L0.332,4.646 L0.332,0.530 L32.378,0.530 L32.378,27.337 L6.598,27.337 L6.598,41.469 Z",
            })),
        );
      },
      aic: eo_28,
      aicGameplay: function (e_231) {
        return React2.createElement(
          "svg",
          el_29(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 41 50",
            },
            e_231,
          ),
          o_5 ||
            (o_5 = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M23.312,44.301 L18.497,49.105 L12.435,43.800 L17.195,43.800 L17.195,41.198 L17.195,38.997 L12.435,38.997 L17.542,34.527 L18.497,33.692 L18.757,33.952 L19.966,35.157 L20.654,35.844 L23.312,38.496 L25.259,38.496 L35.436,38.496 L36.242,38.496 L36.948,38.496 L37.859,38.496 L40.277,38.496 L40.791,38.496 L40.791,44.301 L23.312,44.301 ZM36.948,36.085 L36.242,36.085 L24.317,36.085 L20.214,31.986 L19.966,31.739 L19.966,23.492 L20.306,23.294 L30.347,17.513 L36.948,21.315 L40.729,23.492 L40.729,36.085 L39.626,36.085 L36.948,36.085 ZM30.347,24.808 C27.763,24.808 25.668,26.898 25.668,29.470 C25.668,32.048 27.763,34.137 30.347,34.137 C32.926,34.137 35.021,32.048 35.021,29.470 C35.021,26.898 32.926,24.808 30.347,24.808 ZM30.347,14.731 L29.139,15.424 L18.757,21.402 L17.542,22.101 L17.542,31.318 L16.904,31.875 L10.842,37.179 L6.249,41.198 L0.002,41.198 L0.002,0.895 L27.651,0.895 C31.283,4.518 33.316,6.546 36.948,10.169 L36.948,18.527 L31.556,15.424 L30.347,14.731 ZM7.898,4.605 L3.720,4.605 L3.720,8.765 L7.898,8.765 L7.898,4.605 ZM13.947,4.605 L9.776,4.605 L9.776,8.765 L13.947,8.765 L13.947,4.605 Z",
            })),
        );
      },
      calendar: function (e_232) {
        return React2.createElement(
          "svg",
          ec_30(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 42 40",
            },
            e_232,
          ),
          l_6 ||
            (l_6 = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M-0.002,40.010 L-0.002,5.448 L5.894,5.448 L5.894,10.171 L6.956,10.171 L6.956,8.485 L6.956,5.448 L6.956,-0.008 L12.072,-0.008 L12.072,5.448 L12.072,8.485 L12.072,10.171 L13.134,10.171 L13.134,5.448 L28.881,5.448 L28.881,10.171 L29.943,10.171 L29.943,8.485 L29.940,8.485 L29.940,-0.008 L35.056,-0.008 L35.056,5.448 L35.059,5.448 L35.059,10.171 L36.121,10.171 L36.121,5.448 L42.014,5.448 L42.014,40.010 L-0.002,40.010 ZM38.159,16.680 L3.853,16.680 L3.853,35.999 L38.159,35.999 L38.159,16.680 ZM9.511,22.456 L6.956,22.456 L6.956,19.889 L9.511,19.889 L9.511,22.456 ZM12.065,25.023 L9.511,25.023 L9.511,22.456 L12.065,22.456 L12.065,25.023 ZM12.065,30.156 L9.511,30.156 L9.511,27.590 L12.065,27.590 L12.065,30.156 ZM17.174,27.590 L17.174,30.156 L14.620,30.156 L14.620,27.590 L17.174,27.590 ZM22.283,27.590 L22.283,30.156 L19.729,30.156 L19.729,27.590 L22.283,27.590 ZM27.392,27.590 L27.392,30.156 L24.838,30.156 L24.838,27.590 L27.392,27.590 ZM32.501,27.590 L32.501,30.156 L29.947,30.156 L29.947,27.590 L32.501,27.590 ZM29.947,22.456 L32.501,22.456 L32.501,25.023 L29.947,25.023 L29.947,22.456 ZM24.838,25.023 L24.838,22.456 L27.392,22.456 L27.392,25.023 L24.838,25.023 ZM19.729,25.023 L19.729,22.456 L22.283,22.456 L22.283,25.023 L19.729,25.023 ZM14.620,25.023 L14.620,22.456 L17.174,22.456 L17.174,25.023 L14.620,25.023 ZM14.620,27.590 L12.065,27.590 L12.065,25.023 L14.620,25.023 L14.620,27.590 ZM19.729,25.023 L19.729,27.590 L17.174,27.590 L17.174,25.023 L19.729,25.023 ZM24.838,25.023 L24.838,27.590 L22.283,27.590 L22.283,25.023 L24.838,25.023 ZM29.947,25.023 L29.947,27.590 L27.392,27.590 L27.392,25.023 L29.947,25.023 ZM12.065,19.889 L14.620,19.889 L14.620,22.456 L12.065,22.456 L12.065,19.889 ZM17.174,19.889 L19.729,19.889 L19.729,22.456 L17.174,22.456 L17.174,19.889 ZM22.283,19.889 L24.838,19.889 L24.838,22.456 L22.283,22.456 L22.283,19.889 ZM27.392,19.889 L29.947,19.889 L29.947,22.456 L27.392,22.456 L27.392,19.889 ZM35.056,19.889 L35.056,22.456 L32.501,22.456 L32.501,19.889 L35.056,19.889 ZM35.056,25.023 L35.056,27.590 L32.501,27.590 L32.501,25.023 L35.056,25.023 ZM35.056,32.724 L32.501,32.724 L32.501,30.156 L35.056,30.156 L35.056,32.724 ZM29.947,32.724 L27.392,32.724 L27.392,30.156 L29.947,30.156 L29.947,32.724 ZM24.838,32.724 L22.283,32.724 L22.283,30.156 L24.838,30.156 L24.838,32.724 ZM19.729,32.724 L17.174,32.724 L17.174,30.156 L19.729,30.156 L19.729,32.724 ZM14.620,32.724 L12.065,32.724 L12.065,30.156 L14.620,30.156 L14.620,32.724 ZM6.956,32.724 L6.956,30.156 L9.511,30.156 L9.511,32.724 L6.956,32.724 ZM6.956,27.590 L6.956,25.023 L9.511,25.023 L9.511,27.590 L6.956,27.590 Z",
            })),
        );
      },
    },
    eT_44 = (e_233) => "translateY(".concat(((202 + 80 * e_233 + 4) / 16).toFixed(3), "rem)"),
    eD_45 = (e_234) => "translateY(".concat(((202 + 80 * e_234) / 16).toFixed(3), "rem)"),
    eF_46 = (e_235, t_236) =>
      "translate3d("
        .concat(t_236 ? "0.6875rem" : "0", ", ")
        .concat(((8 + 60 * e_235) / 16).toFixed(3), "rem, 0)"),
    eG_47 = (e_237, t_238) =>
      "translate3d("
        .concat(t_238 ? "1.125rem" : "1.25rem", ", ")
        .concat(((62 + 60 * e_237) / 16).toFixed(3), "rem, 0) scaleX(")
        .concat(t_238 ? 13.8 : 1, ")"),
    eH_48 = (e_239) => {
      let { sectionKey: t_240, active: a_241, onClick: n_242 } = e_239,
        { t: i_243 } = (0, I18nProviderUseI18n.Bd)(),
        r_244 = eZ_43[t_240];
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles2().menuItem, {
          [styles2().active]: a_241,
        }),
        onClick: n_242,
        children: [
          (0, jsx.jsx)(r_244, {
            className: styles2().icon,
          }),
          (0, jsx.jsx)("div", {
            className: styles2().divider,
          }),
          (0, jsx.jsx)("div", {
            className: styles2().text,
            "data-key": t_240,
            children: i_243("nav.".concat(t_240)),
          }),
          (0, jsx.jsx)(ev_34, {
            className: styles2().arrow,
          }),
        ],
      });
    },
    eW_49 = (e_245) => {
      let { active: t_246, onClick: a_247, item: n_248, index: i_249, detailActive: r_250 } = e_245,
        { lang: s_251 } = (0, I18nProviderUseI18n.PO)(),
        o_252 = "gameplay" === n_248.key ? eZ_43.aicGameplay : eZ_43[n_248.key],
        { t: l_253 } = (0, I18nProviderUseI18n.Bd)();
      return (0, jsx.jsxs)(
        "div",
        {
          className: classnamesDefault()(styles2().navItem, {
            [styles2().active]: t_246,
            [styles2().detailActive]: r_250,
          }),
          style: {
            transform: eT_44(i_249),
          },
          onClick: () => {
            (t_246 || SoundEffects.A.play(SoundEffects.d.menu_click), a_247());
          },
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().iconWrapper,
              children: (0, jsx.jsx)(o_252, {
                "data-key": "gameplay" === n_248.key ? "aicGameplay" : n_248.key,
                className: styles2().icon,
              }),
            }),
            (0, jsx.jsx)("div", {
              className: classnamesDefault()(
                styles2().textWrapper,
                ("it-it" === s_251 || "pt-br" === s_251) && "gameplay" === n_248.key && styles2().small,
              ),
              children:
                "gameplay" === n_248.key
                  ? ""
                      .concat(l_253("nav.gameplay"), " ")
                      .concat("pt-br" === s_251 ? "e" : "&", " ")
                      .concat(l_253("nav.aic"))
                  : l_253("nav.".concat(n_248.key)),
            }),
          ],
        },
        n_248.key,
      );
    },
    eY_50 = {
      user: SvgIcon95823.A,
      charge: (e_254) => {
        let { className: t_255, style: a_256, onClick: n_257 } = e_254;
        return (0, jsx.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 27 30",
          className: t_255,
          style: a_256,
          onClick: n_257,
          children: (0, jsx.jsx)("path", {
            fillRule: "evenodd",
            fill: "currentColor",
            d: "M26.273,12.842 L25.645,11.890 L24.903,10.756 L25.645,9.622 L26.273,8.671 L25.645,8.671 L9.058,8.671 L9.058,7.007 L24.432,7.007 L13.186,0.503 L0.726,7.711 L0.726,22.135 L13.186,29.343 L24.432,22.838 L9.058,22.838 L9.058,21.183 L25.645,21.183 L26.273,21.183 L25.645,20.231 L24.903,19.098 L25.645,17.964 L26.273,17.012 L25.645,16.061 L24.903,14.927 L25.645,13.793 L26.273,12.842 ZM4.277,11.062 L6.374,11.062 L6.374,18.783 L4.277,18.783 L4.277,11.062 Z",
          }),
        });
      },
      mute: eI_39,
      creator: en_24,
    },
    eq_51 = (e_258) => {
      let { index: t_259, detailActive: a_260, onClick: n_261, iconKey: i_262, muteActive: r_263 } = e_258,
        s_264 = eY_50[i_262],
        { t: o_265 } = (0, I18nProviderUseI18n.Bd)(),
        l_266 = (0, ReactDOM.F7)(),
        c_267 = (0, React.useCallback)(() => {
          ("mute" !== i_262 && SoundEffects.A.play(SoundEffects.d.common_click), null == n_261 || n_261());
        }, [n_261, i_262]);
      return (0, jsx.jsxs)("div", {
        className: styles2().button,
        style: {
          transform: eF_46(t_259, a_260),
        },
        onClick: a_260 ? c_267 : void 0,
        children: [
          "mute" === i_262 &&
            (r_263
              ? (0, jsx.jsx)(eI_39, {
                  className: styles2().icon,
                  style: {
                    color: "#cccccc",
                  },
                  onClick: a_260 ? void 0 : c_267,
                })
              : (0, jsx.jsx)(eE_40, {
                  className: styles2().icon,
                  onClick: a_260 ? void 0 : c_267,
                })),
          "mute" !== i_262 &&
            (0, jsx.jsx)(s_264, {
              className: styles2().icon,
              onClick: a_260 ? void 0 : c_267,
            }),
          "creator" === i_262 &&
            (0, jsx.jsx)(s_264, {
              className: styles2().icon,
              onClick: a_260 ? void 0 : c_267,
            }),
          (0, jsx.jsx)("div", {
            className: styles2().textWrapper,
            children: o_265(
              "charge" === i_262
                ? "header.charge"
                : "creator" === i_262
                  ? "header.creator"
                  : "user" === i_262
                    ? l_266
                      ? "header.user"
                      : "header.login"
                    : r_263
                      ? "header.mute.on"
                      : "header.mute.off",
            ),
          }),
        ],
      });
    },
    ez_52 = (e_268) => {
      let { index: t_269, detailActive: a_270 } = e_268;
      return (0, jsx.jsx)("div", {
        className: styles2().divider,
        style: {
          transform: eG_47(t_269, a_270),
        },
      });
    },
    eQ_53 = (e_271) => {
      let { onClick: t_272 } = e_271,
        { t: a_273 } = (0, I18nProviderUseI18n.Bd)(),
        { lang: n_274 } = (0, I18nProviderUseI18n.PO)();
      return (0, jsx.jsx)(jsx.Fragment, {
        children: (0, jsx.jsxs)("div", {
          className: classnamesDefault()(styles2().buttonPreserveBg, "zh-tw" !== n_274 && styles2().oversea),
          onClick: t_272,
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().bg,
            }),
            (0, jsx.jsx)(eg_37, {
              className: styles2().tri,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().divider,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().divider2,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().text,
              children: a_273("header.goToGame"),
            }),
            (0, jsx.jsx)("div", {
              className: styles2().text2,
              children: a_273("header.goToGame"),
            }),
          ],
        }),
      });
    },
    eX_54 = (e_275) => {
      let { detailActive: t_276 } = e_275,
        [a_277, n_278] = (0, React.useState)(!1),
        {
          data: { share: i_279 },
        } = (0, I18nProviderUseI18n.PO)(),
        r_280 = (0, module44705.W)(() => {
          n_278(!1);
        });
      return (
        (0, React.useEffect)(() => {
          n_278(!1);
        }, [t_276]),
        (0, jsx.jsxs)(jsx.Fragment, {
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().buttonShareBg,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().shareListDetailActive,
              children: i_279.map((e_281) =>
                (0, jsx.jsx)(
                  e_281.icon,
                  {
                    className: styles2().shareItem,
                    onClick: (t_282) => {
                      (t_282.stopPropagation(),
                        SoundEffects.A.play(SoundEffects.d.common_click),
                        window.open(e_281.url, "_blank"),
                        Tracking.A.collect("social_media_redirect", {
                          channel: e_281.key,
                        }));
                    },
                  },
                  e_281.key,
                ),
              ),
            }),
            (0, jsx.jsxs)("div", {
              className: classnamesDefault()(styles2().buttonShare, {
                [styles2().active]: a_277,
              }),
              ref: r_280,
              onClick: () => n_278(!a_277),
              children: [
                (0, jsx.jsx)(eO_41, {
                  className: styles2().shareIcon,
                }),
                (0, jsx.jsx)("div", {
                  className: styles2().shareList,
                  onClick: (e_283) => {
                    e_283.stopPropagation();
                  },
                  children: (0, jsx.jsx)("div", {
                    className: styles2().wrapper,
                    children: i_279.map((e_284) =>
                      (0, jsx.jsx)(
                        e_284.icon,
                        {
                          className: styles2().shareItem,
                          onClick: (t_285) => {
                            (t_285.stopPropagation(),
                              SoundEffects.A.play(SoundEffects.d.common_click),
                              window.open(e_284.url, "_blank"),
                              Tracking.A.collect("social_media_redirect", {
                                channel: e_284.key,
                              }));
                          },
                        },
                        e_284.key,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          ],
        })
      );
    },
    eU_55 = (e_286) => {
      let { className: t_287, style: a_288, sections: n_289, subPage: i_290 = !1 } = e_286,
        { t: r_291 } = (0, I18nProviderUseI18n.Bd)(),
        { lang: s_292 } = (0, I18nProviderUseI18n.PO)(),
        {
          components: { SvgLogo: o_293 },
          data: { share: l_294 },
        } = (0, I18nProviderUseI18n.PO)(),
        { currentSection: c_295, setCurrentSection: d_296 } = eJ_56(),
        __297 = (0, React.useMemo)(() => n_289.filter((e_317) => !e_317.hideNav), [n_289]),
        u_298 = (0, React.useMemo)(() => {
          let e_318 = __297.findIndex((e_319) => e_319.key === c_295);
          if (-1 === e_318) {
            let e_320 = n_289.findIndex((e_321) => e_321.key === c_295);
            if (-1 === e_320) return 0;
            for (let t_322 = e_320 - 1; t_322 >= 0; t_322--) if (!n_289[t_322].hideNav) return t_322;
            return 0;
          }
          return e_318;
        }, [c_295, n_289, __297]),
        [m_299, h_300] = (0, React.useState)(!1),
        [L_301, f_302] = (0, React.useState)(!SoundControlStore.E.getState().enabled),
        [x_303, g_304] = (0, React.useState)(!1),
        y_305 = Q_20(),
        C_306 = (0, UserModalTextLinks.GW)(),
        { account: j_307 } = (0, ReactDOM.F7)(),
        N_308 = (0, module35038.$)(),
        k_309 = (0, React.useCallback)(() => {
          j_307
            ? C_306()
            : N_308(() => {
                C_306();
              });
        }, [j_307, C_306, N_308]),
        M_310 = (0, module35038.V)(y_305),
        S_311 = (0, React.useCallback)(() => {
          (window.open(SiteConfig.a.payment_link, "_blank"),
            Tracking.A.collect("click", {
              target: "recharge_center",
            }));
        }, []),
        I_312 = (0, React.useCallback)(
          (e_323) => {
            i_290 ? (window.location.href = "/".concat(s_292, "/#").concat(e_323)) : d_296(e_323);
          },
          [i_290, d_296, s_292],
        );
      (0, React.useCallback)(() => {
        (M_310(),
          SoundEffects.A.play(SoundEffects.d.reserve_click),
          Tracking.A.collect("click", {
            target: "reserve_button",
          }));
      }, [M_310]);
      let O_313 = (0, React.useCallback)(() => {
        window.open(SiteConfig.a.creator_link + s_292, "_blank");
      }, [s_292]);
      (0, React.useEffect)(() => {
        L_301
          ? (BackgroundMusic.K.disable(),
            SoundControlStore.E.setState({
              enabled: !1,
            }))
          : (BackgroundMusic.K.enable(),
            SoundControlStore.E.setState({
              enabled: !0,
            }));
      }, [L_301]);
      let T_314 = "zh-tw" !== s_292,
        {
          data: { shop: D_315 },
        } = (0, I18nProviderUseI18n.PO)(),
        F_316 = (0, React.useCallback)(() => {
          var e_324, t_325, a_326, n_327, i_328, r_329;
          if ((0, DeviceUtils.un)(window.navigator.userAgent))
            "vi-vn" !== s_292
              ? (window.location.href =
                  null != (t_325 = null == (e_324 = SiteConfig.a.game_link) ? void 0 : e_324.ios)
                    ? t_325
                    : "")
              : (window.location.href = "https://endfield.hhgame.vn/u-link/");
          else if ((0, DeviceUtils.Fr)(window.navigator.userAgent))
            "vi-vn" !== s_292
              ? (window.location.href =
                  null != (n_327 = null == (a_326 = SiteConfig.a.game_link) ? void 0 : a_326.android)
                    ? n_327
                    : "")
              : (window.location.href = "https://endfield.hhgame.vn/u-link/");
          else {
            let e_330 =
                (null == D_315
                  ? void 0
                  : D_315.find((e_338) => (null == e_338 ? void 0 : e_338.key) === "pc")) ||
                (null == D_315
                  ? void 0
                  : D_315.find((e_339) => (null == e_339 ? void 0 : e_339.key) === "windows")),
              t_331 = () => {
                e_330
                  ? Tracking.A.download({
                      channel: e_330.key,
                      url: e_330.url,
                    })
                  : console.error("No download target found");
              },
              a_332 =
                null != (r_329 = null == (i_328 = SiteConfig.a.game_link) ? void 0 : i_328.pc) ? r_329 : "";
            if (!a_332) return void t_331();
            let n_333 = !1,
              s_334 = () => {
                n_333 = !0;
              },
              o_335 = () => {
                "hidden" === document.visibilityState && s_334();
              },
              l_336 = document.createElement("iframe"),
              c_337 = () => {
                (window.removeEventListener("blur", s_334),
                  window.removeEventListener("pagehide", s_334),
                  document.removeEventListener("visibilitychange", o_335),
                  l_336.remove());
              };
            (window.addEventListener("blur", s_334),
              window.addEventListener("pagehide", s_334),
              document.addEventListener("visibilitychange", o_335),
              window.setTimeout(() => {
                (c_337(), n_333 || t_331());
              }, 1e3),
              (l_336.style.display = "none"),
              (l_336.src = a_332),
              document.body.appendChild(l_336));
          }
        }, [D_315, s_292]);
      return (0, jsx.jsxs)(jsx.Fragment, {
        children: [
          (0, jsx.jsx)(zustand.Qp, {
            className: classnamesDefault()(
              styles2().pcHeaderContainer,
              m_299 && styles2().detailActive,
              "vi-vn" !== s_292 && styles2().showPreserveButton,
              t_287,
            ),
            onMouseEnter: () => {
              "ontouchstart" in window || h_300(!0);
            },
            onMouseLeave: () => {
              "ontouchstart" in window || h_300(!1);
            },
            style: a_288,
            mode: "padding",
            edges: ["left"],
            children: (0, jsx.jsxs)("div", {
              className: styles2().innerContainer,
              children: [
                (0, jsx.jsx)(o_293, {
                  className: classnamesDefault()(
                    styles2().logo,
                    T_314 && "ja-jp" !== s_292 && "ko-kr" !== s_292 && styles2().oversea,
                  ),
                }),
                !i_290 &&
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().overlay),
                    style: {
                      transform: eD_45(u_298),
                    },
                  }),
                __297.map((e_340, t_341) =>
                  (0, jsx.jsx)(
                    eW_49,
                    {
                      item: e_340,
                      index: t_341,
                      active: !i_290 && u_298 === t_341,
                      detailActive: m_299,
                      onClick: () => I_312(e_340.key),
                    },
                    e_340.key,
                  ),
                ),
                (0, jsx.jsx)("div", {
                  className: classnamesDefault()(
                    styles2().buttonFrameBg,
                    T_314 && styles2().oversea,
                    styles2().ele4,
                  ),
                }),
                (0, jsx.jsx)("div", {
                  className: classnamesDefault()(styles2().buttonFrameContainer, T_314 && styles2().oversea),
                  children: (0, jsx.jsxs)(jsx.Fragment, {
                    children: [
                      (0, jsx.jsx)(eq_51, {
                        index: -1,
                        detailActive: m_299,
                        onClick: k_309,
                        iconKey: "user",
                      }),
                      (0, jsx.jsx)(ez_52, {
                        index: -1,
                        detailActive: m_299,
                      }),
                      (0, jsx.jsx)(eq_51, {
                        index: 0,
                        detailActive: m_299,
                        iconKey: "charge",
                        onClick: S_311,
                      }),
                      (0, jsx.jsx)(ez_52, {
                        index: 0,
                        detailActive: m_299,
                      }),
                      (0, jsx.jsx)(eq_51, {
                        index: 1,
                        detailActive: m_299,
                        iconKey: "creator",
                        onClick: O_313,
                      }),
                      (0, jsx.jsx)(ez_52, {
                        index: 1,
                        detailActive: m_299,
                      }),
                      (0, jsx.jsx)(module44990.D, {
                        children: (0, jsx.jsx)(eq_51, {
                          index: 2,
                          detailActive: m_299,
                          onClick: () => f_302(!L_301),
                          iconKey: "mute",
                          muteActive: L_301,
                        }),
                      }),
                    ],
                  }),
                }),
                "vi-vn" !== s_292 &&
                  (0, jsx.jsx)(eQ_53, {
                    onClick: F_316,
                  }),
                (0, jsx.jsx)(eX_54, {
                  detailActive: m_299,
                }),
                (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles2().switcher, {
                    [styles2().active]: m_299,
                  }),
                  onClick: () => {
                    h_300(!m_299);
                  },
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().switcherImage,
                    }),
                    (0, jsx.jsx)(eR_42, {
                      className: styles2().switcherDeco,
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().h5HeaderContainer, t_287),
            style: a_288,
            children: [
              (0, jsx.jsx)(o_293, {
                className: classnamesDefault()(
                  styles2().logo,
                  x_303 && styles2().active,
                  T_314 && "ja-jp" !== s_292 && "ko-kr" !== s_292 && styles2().oversea,
                ),
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().buttonGroup,
                children: [
                  (0, jsx.jsx)(module44990.D, {
                    children: (0, jsx.jsx)("div", {
                      className: styles2().iconButton,
                      onClick: () => f_302(!L_301),
                      children: L_301
                        ? (0, jsx.jsx)(eI_39, {
                            className: styles2().icon,
                            style: {
                              color: "#cccccc",
                            },
                          })
                        : (0, jsx.jsx)(eE_40, {
                            className: styles2().icon,
                          }),
                    }),
                  }),
                  "vi-vn" !== s_292 &&
                    (0, jsx.jsxs)("div", {
                      className: classnamesDefault()(styles2().preserveButton, styles2().oversea),
                      onClick: F_316,
                      children: [
                        (0, jsx.jsx)(eg_37, {
                          className: styles2().tri,
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().divider,
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().text,
                          children: r_291("header.goToGame"),
                        }),
                      ],
                    }),
                ],
              }),
              (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                children: x_303
                  ? (0, jsx.jsx)(
                      eS_38,
                      {
                        className: styles2().menuIcon,
                        children: (0, jsx.jsx)(SvgIcon29190.A, {
                          className: styles2().icon,
                          onClick: () => g_304(!1),
                        }),
                      },
                      "close",
                    )
                  : (0, jsx.jsx)(
                      eS_38,
                      {
                        className: styles2().menuIcon,
                        children: (0, jsx.jsx)(er_26, {
                          className: styles2().icon,
                          onClick: () => g_304(!0),
                        }),
                      },
                      "open",
                    ),
              }),
              (0, jsx.jsxs)("div", {
                className: classnamesDefault()(styles2().h5Menu, x_303 && styles2().active),
                children: [
                  (0, jsx.jsxs)("div", {
                    className: styles2().menuButtons,
                    children: [
                      (0, jsx.jsxs)("div", {
                        className: styles2().button,
                        onClick: () => {
                          (SoundEffects.A.play(SoundEffects.d.common_click), k_309());
                        },
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles2().text,
                            children: r_291(j_307 ? "header.user" : "header.login"),
                          }),
                          (0, jsx.jsx)("div", {
                            className: styles2().iconWrapper,
                            children: (0, jsx.jsx)(SvgIcon6921.A, {
                              className: styles2().icon,
                            }),
                          }),
                        ],
                      }),
                      (0, jsx.jsxs)(jsx.Fragment, {
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles2().divider,
                          }),
                          (0, jsx.jsxs)("div", {
                            className: classnamesDefault()(styles2().button, styles2().creator),
                            onClick: () => {
                              (SoundEffects.A.play(SoundEffects.d.common_click), O_313());
                            },
                            children: [
                              (0, jsx.jsx)(en_24, {
                                className: styles2().icon,
                              }),
                              (0, jsx.jsx)("div", {
                                className: styles2().text,
                                children: r_291("header.creator"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx.jsx)(module44990.D, {
                        children: (0, jsx.jsx)("div", {
                          className: classnamesDefault()(styles2().mute, {
                            [styles2().active]: L_301,
                          }),
                          onClick: () => f_302(!L_301),
                          children: L_301
                            ? (0, jsx.jsx)(eI_39, {
                                className: styles2().icon,
                              })
                            : (0, jsx.jsx)(eE_40, {
                                className: styles2().icon,
                              }),
                        }),
                      }),
                    ],
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().navList,
                    children: n_289.map((e_342) =>
                      (0, jsx.jsx)(
                        eH_48,
                        {
                          sectionKey: e_342.key,
                          active: !i_290 && c_295 === e_342.key,
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.common_click), I_312(e_342.key), g_304(!1));
                          },
                        },
                        e_342.key,
                      ),
                    ),
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().mediaList,
                    children: l_294.map((e_343) =>
                      (0, jsx.jsx)(
                        e_343.icon,
                        {
                          className: styles2().mediaItem,
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              window.open(e_343.url, "_blank"),
                              Tracking.A.collect("social_media_redirect", {
                                channel: e_343.key,
                              }));
                          },
                        },
                        e_343.key,
                      ),
                    ),
                  }),
                  (0, jsx.jsx)(HollowText.A, {
                    className: styles2().hallowText,
                    text: "ENDFIELD",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
  var stylesModule3 = webpackRequire(21953),
    styles3 = webpackRequire.n(stylesModule3);
  let eJ_56 = (0, zustandCreate.v)((e_344) => ({
      currentSection: "",
      setCurrentSection: () => void 0,
    })),
    e$_57 = (e_345) => {
      let { className: t_346, style: a_347, sections: n_348, children: i_349 } = e_345;
      (0, module9995.i)(() => {
        eJ_56.setState({
          currentSection: n_348[0].key,
        });
      });
      let r_350 = (0, React.useRef)(null),
        s_351 = (0, React.useMemo)(
          () => n_348.reduce((e_356, t_357) => ((e_356[t_357.key] = (0, React.createRef)()), e_356), {}),
          [n_348],
        );
      (0, React.useRef)({});
      let o_352 = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        var e_358, t_359;
        let a_360 = !1,
          n_361 = (0, lodashThrottle.A)(() => {
            let e_362 = "",
              t_363 = 2 * window.innerHeight;
            if (
              (Object.entries(s_351).forEach((a_364) => {
                let [n_365, i_366] = a_364;
                if (i_366.current) {
                  let a_367 = i_366.current.getBoundingClientRect(),
                    r_368 = a_367.height / 2 + a_367.top;
                  r_368 < t_363 && r_368 > 0 && ((t_363 = r_368), (e_362 = n_365));
                }
              }),
              o_352.current || ((o_352.current = !0), Tracking.A.collect("web_page_swipe", {})),
              a_360)
            )
              if (eJ_56.getState().currentSection !== e_362) return;
              else {
                a_360 = !1;
                return;
              }
            eJ_56.getState().currentSection !== e_362 &&
              e_362 &&
              eJ_56.setState({
                currentSection: e_362,
              });
          }, 100);
        return (
          null == (e_358 = window) || e_358.addEventListener("scroll", n_361),
          null == (t_359 = window) || t_359.addEventListener("wheel", n_361),
          eJ_56.setState({
            setCurrentSection: (e_369) => {
              var t_370;
              ((a_360 = !0),
                eJ_56.setState({
                  currentSection: e_369,
                }),
                null == (t_370 = s_351[e_369].current) ||
                  t_370.scrollIntoView({
                    behavior: "smooth",
                  }));
            },
          }),
          () => {
            var e_371, t_372;
            (null == (e_371 = window) || e_371.removeEventListener("scroll", n_361),
              null == (t_372 = window) || t_372.removeEventListener("wheel", n_361));
          }
        );
      }, []);
      let { currentSection: l_353, setCurrentSection: c_354 } = eJ_56();
      ((0, React.useEffect)(() => {
        let e_373 = window.location.hash.slice(1);
        if (e_373 && n_348.some((t_375) => t_375.key === e_373) && "home" !== e_373) {
          var t_374;
          (eJ_56.setState({
            currentSection: e_373,
          }),
            null == (t_374 = s_351[e_373].current) ||
              t_374.scrollIntoView({
                behavior: "smooth",
              }));
        }
      }, []),
        (0, module79549.w)(() => {
          i_349 || window.history.replaceState(null, "", "#".concat(l_353));
        }, [l_353]));
      let d_355 = (0, React.useMemo)(() => !i_349, [i_349]);
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles3().sectionViewer, t_346),
        style: a_347,
        ref: r_350,
        children: [
          (0, jsx.jsx)(eU_55, {
            className: styles3().header,
            sections: n_348,
            subPage: !d_355,
          }),
          (0, jsx.jsx)("div", {
            className: styles3().contentContainer,
            children: d_355
              ? (0, jsx.jsx)(jsx.Fragment, {
                  children: n_348.map((e_376) =>
                    (0, jsx.jsx)(
                      "div",
                      {
                        className: styles3().section,
                        ref: s_351[e_376.key],
                        children: (0, jsx.jsx)(e_376.component, {}),
                      },
                      e_376.key,
                    ),
                  ),
                })
              : i_349,
          }),
        ],
      });
    },
    e0_58 = (function () {
      let e_377 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        t_378 = SiteUtils.isServer
          ? []
          : Array.from(
              {
                length: e_377,
              },
              () => new Image(),
            ),
        a_379 = 0;
      return {
        preloadImage: (n_380) =>
          n_380
            ? new Promise((i_381, r_382) => {
                let s_383 = () => {
                  if (a_379 >= e_377) return void setTimeout(s_383, 50);
                  a_379++;
                  let o_384 = t_378.pop() || new Image();
                  ((o_384.onload = () => {
                    (a_379--, t_378.push(o_384), i_381(!0));
                  }),
                    (o_384.onerror = () => {
                      (a_379--, t_378.push(o_384), r_382(Error("图片加载失败: ".concat(n_380))));
                    }),
                    (o_384.src = n_380));
                };
                s_383();
              })
            : Promise.reject(Error("图片地址为空")),
        getPoolSize: () => t_378.length,
        getActiveCount: () => a_379,
      };
    })(5).preloadImage;
  var RootFontSizeScaler = webpackRequire(14577),
    swiper = webpackRequire(59288),
    swiper2 = webpackRequire(21789),
    swiper3 = webpackRequire(91618),
    animeJsDefault = webpackRequire(56578),
    swiper4 = webpackRequire(94167),
    swiperDefault = webpackRequire.n(swiper4),
    threeJs = webpackRequire(24106),
    threeJs2 = webpackRequire(61617);
  let te_59 = (e_385) => (1080 * e_385.clientWidth) / e_385.clientHeight;
  class tt_60 {
    generatePermutation(e_386) {
      let t_387 = [];
      for (let e_389 = 0; e_389 < 256; e_389++) t_387[e_389] = e_389;
      let a_388 = e_386;
      for (let e_390 = 255; e_390 > 0; e_390--) {
        let n_391 = (a_388 = (9301 * a_388 + 49297) % 233280) % (e_390 + 1),
          i_392 = t_387[e_390];
        ((t_387[e_390] = t_387[n_391]), (t_387[n_391] = i_392));
      }
      return t_387.concat(t_387);
    }
    lerp(e_393, t_394, a_395) {
      return t_394 + e_393 * (a_395 - t_394);
    }
    fade(e_396) {
      return e_396 * e_396 * e_396 * (e_396 * (6 * e_396 - 15) + 10);
    }
    grad(e_397, t_398) {
      let a_399 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        n_400 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        i_401 = 15 & e_397,
        r_402 = i_401 < 8 ? t_398 : a_399,
        s_403 = i_401 < 4 ? a_399 : 12 === i_401 || 14 === i_401 ? t_398 : n_400;
      return ((1 & i_401) == 0 ? r_402 : -r_402) + ((2 & i_401) == 0 ? s_403 : -s_403);
    }
    noise2D(e_404, t_405) {
      let a_406 = this.permutation,
        n_407 = 255 & Math.floor(e_404),
        i_408 = 255 & Math.floor(t_405),
        r_409 = e_404 - Math.floor(e_404),
        s_410 = t_405 - Math.floor(t_405),
        o_411 = this.fade(r_409),
        l_412 = this.fade(s_410),
        c_413 = a_406[a_406[n_407] + i_408],
        d_414 = a_406[a_406[n_407] + i_408 + 1],
        __415 = a_406[a_406[n_407 + 1] + i_408],
        u_416 = a_406[a_406[n_407 + 1] + i_408 + 1],
        m_417 = this.lerp(o_411, this.grad(c_413, r_409, s_410), this.grad(__415, r_409 - 1, s_410)),
        h_418 = this.lerp(o_411, this.grad(d_414, r_409, s_410 - 1), this.grad(u_416, r_409 - 1, s_410 - 1));
      return (this.lerp(l_412, m_417, h_418) + 1) / 2;
    }
    noise1D(e_419) {
      let t_420 = this.permutation,
        a_421 = 255 & Math.floor(e_419),
        n_422 = e_419 - Math.floor(e_419),
        i_423 = this.fade(n_422),
        r_424 = t_420[a_421],
        s_425 = t_420[a_421 + 1],
        o_426 = this.grad(r_424, n_422),
        l_427 = this.grad(s_425, n_422 - 1);
      return (this.lerp(i_423, o_426, l_427) + 1) / 2;
    }
    constructor(e_428 = 0) {
      ((this.seed = e_428), (this.permutation = this.generatePermutation(e_428)));
    }
  }
  var ta_61 = new WeakMap(),
    tn_62 = new WeakMap();
  class ti_63 {
    updateResolution(e_429) {
      this.material.uniforms.resolution.value = e_429;
    }
    generateNoiseTexture() {
      let e_430 = new Float32Array(65536);
      for (let t_432 = 0; t_432 < 256; t_432++)
        for (let a_433 = 0; a_433 < 256; a_433++) {
          let n_434 = (t_432 / 256) * 8,
            i_435 = (a_433 / 256) * 8,
            r_436 = 0.5 * this.noise.noise2D(n_434, i_435);
          ((r_436 +=
            0.25 * this.noise.noise2D(2 * n_434, 2 * i_435) +
            0.125 * this.noise.noise2D(4 * n_434, 4 * i_435)),
            (e_430[256 * t_432 + a_433] = r_436));
        }
      let t_431 = new threeJs2.GYF(e_430, 256, 256, threeJs2.VT0, threeJs2.RQf);
      return ((t_431.wrapS = threeJs2.GJx), (t_431.wrapT = threeJs2.GJx), (t_431.needsUpdate = !0), t_431);
    }
    regenerateNoise(e_437) {
      (void 0 !== e_437 && (this.noise = new tt_60(e_437)),
        this.noiseTexture.dispose(),
        (this.noiseTexture = this.generateNoiseTexture()),
        (this.material.uniforms.noiseTexture.value = this.noiseTexture));
    }
    init(e_438, t_439) {
      if (!(0, swiper._)(this, ta_61))
        if (((0, swiper3._)(this, ta_61, !0), t_439)) {
          let [e_440, a_441] = t_439,
            n_442 = new threeJs2.THS(e_440, 3);
          this.geometry.setAttribute("position", n_442);
          let i_443 = new threeJs2.THS(a_441, 4);
          this.geometry.setAttribute("pointMoreData", i_443);
        } else {
          let t_444 = new Float32Array(3 * e_438),
            a_445 = new Float32Array(4 * e_438);
          for (let n_448 = 0; n_448 < e_438; n_448++) {
            for (let e_449 = 0; e_449 < 3; e_449++) t_444[3 * n_448 + e_449] = 0;
            for (let e_450 = 0; e_450 < 4; e_450++) a_445[4 * n_448 + e_450] = 0;
          }
          let n_446 = new threeJs2.THS(t_444, 3);
          this.geometry.setAttribute("position", n_446);
          let i_447 = new threeJs2.THS(a_445, 4);
          this.geometry.setAttribute("pointMoreData", i_447);
        }
    }
    setActive(e_451) {
      this.material.uniforms.isActive.value = e_451;
    }
    setScanLineY(e_452) {
      ((this.scanLineYs[0] = e_452), (this.material.uniforms.scanLineY1.value = e_452));
    }
    setPointSizeScale(e_453) {
      this.material.uniforms.pointSizeScale.value = e_453;
    }
    setCameraFadeDistance(e_454) {
      this.material.uniforms.cameraFadeDistance.value = e_454;
    }
    async fadeIn(e_455) {
      let [t_456, a_457] = e_455,
        n_458 = new threeJs2.THS(t_456, 3);
      this.geometry.setAttribute("position", n_458);
      let i_459 = new threeJs2.THS(a_457, 4);
      return (
        this.geometry.setAttribute("pointMoreData", i_459),
        (this.material.uniforms.isActive.value = !0),
        (this.scanLineYs = [-1150, -1150, -1150]),
        (this.material.uniforms.scanLineY1.value = -1150),
        (this.material.uniforms.scanLineY2.value = -1150),
        (this.material.uniforms.scanLineY3.value = -1150),
        new Promise((e_460) => {
          let t_461 = 0,
            a_462 = (e_464, t_465) => {
              ((this.scanLineYs[e_464] = t_465),
                (this.material.uniforms["scanLineY".concat(e_464 + 1)].value = t_465 - 200));
            },
            n_463 = () => {
              3 == ++t_461 && e_460();
            };
          for (let e_466 = 0; e_466 < 3; e_466++)
            (0, animeJsDefault.A)({
              targets: {
                value: -1150,
              },
              value: 1350,
              duration: 3e3 / (e_466 + 1),
              delay: 2e3 * Math.log(e_466 + 1),
              easing: "easeInOutQuad",
              update: (t_467) => {
                a_462(e_466, Number(t_467.animations[0].currentValue));
              },
              complete: () => {
                (a_462(e_466, 1350), n_463());
              },
            });
        })
      );
    }
    async fadeOut() {
      return (
        (this.material.uniforms.isActive.value = !1),
        (this.scanLineYs = [-1150, -1150, -1150]),
        (this.material.uniforms.scanLineY1.value = -1150),
        (this.material.uniforms.scanLineY2.value = -1150),
        (this.material.uniforms.scanLineY3.value = -1150),
        new Promise((e_468) => {
          let t_469 = 0,
            a_470 = (e_472, t_473) => {
              ((this.scanLineYs[e_472] = t_473),
                (this.material.uniforms["scanLineY".concat(e_472 + 1)].value = t_473));
            },
            n_471 = () => {
              3 == ++t_469 && e_468();
            };
          for (let e_474 = 0; e_474 < 3; e_474++)
            (0, animeJsDefault.A)({
              targets: {
                value: -1150,
              },
              value: 1150,
              duration: 2e3,
              delay: 0,
              easing: "easeInOutQuad",
              update: (t_475) => {
                a_470(e_474, Number(t_475.animations[0].currentValue));
              },
              complete: () => {
                (a_470(e_474, 1150), n_471());
              },
            });
        })
      );
    }
    setGlitchEffects(e_476) {
      e_476.length < 16 ||
        ((this.material.uniforms.glitchEffects0.value = new threeJs2.IUQ(
          e_476[0],
          e_476[1],
          e_476[2],
          e_476[3],
        )),
        (this.material.uniforms.glitchEffects1.value = new threeJs2.IUQ(
          e_476[4],
          e_476[5],
          e_476[6],
          e_476[7],
        )),
        (this.material.uniforms.glitchEffects2.value = new threeJs2.IUQ(
          e_476[8],
          e_476[9],
          e_476[10],
          e_476[11],
        )),
        (this.material.uniforms.glitchEffects3.value = new threeJs2.IUQ(
          e_476[12],
          e_476[13],
          e_476[14],
          e_476[15],
        )));
    }
    dispose() {
      ((0, swiper._)(this, tn_62) && ((0, swiper._)(this, tn_62).pause(), (0, swiper3._)(this, tn_62, null)),
        this.geometry.dispose(),
        this.material.dispose(),
        this.noiseTexture.dispose());
    }
    constructor() {
      ((0, swiper2._)(this, ta_61, {
        writable: !0,
        value: void 0,
      }),
        (0, swiper2._)(this, tn_62, {
          writable: !0,
          value: void 0,
        }),
        (0, swiper3._)(this, ta_61, !1),
        (this.scanLineYs = [-1150, -1150, -1150]),
        (0, swiper3._)(this, tn_62, null),
        (this.noise = new tt_60(Math.floor(1e4 * Math.random()))),
        (this.noiseTexture = this.generateNoiseTexture()),
        (this.geometry = new threeJs2.LoY()),
        (this.material = new threeJs2.BKk({
          vertexShader: tr_64,
          fragmentShader: ts_65,
          uniforms: {
            scanLineY1: {
              value: -1150,
            },
            scanLineY2: {
              value: -1150,
            },
            scanLineY3: {
              value: -1150,
            },
            scanLineWidth: {
              value: 20,
            },
            isActive: {
              value: !1,
            },
            cameraFadeDistance: {
              value: 3500,
            },
            cameraFadeStart: {
              value: 1e3,
            },
            noiseTexture: {
              value: this.noiseTexture,
            },
            pointSizeScale: {
              value: 10,
            },
            scanLineYOffsetStrength: {
              value: 30,
            },
            scanLineYOffsetNoiseStrength: {
              value: 180,
            },
            featherWidth: {
              value: 0.1,
            },
            coreRadius: {
              value: 0.1,
            },
            innerGlowStrength: {
              value: 0.6,
            },
            compressStrength: {
              value: 0.5,
            },
            resolution: {
              value: new threeJs2.I9Y(1920, 1080),
            },
            glitchEffects0: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
            glitchEffects1: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
            glitchEffects2: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
            glitchEffects3: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
          },
          transparent: !0,
          depthWrite: !1,
          blending: threeJs2.EZo,
        })),
        (this.mesh = new threeJs2.ONl(this.geometry, this.material)));
    }
  }
  let tr_64 =
      "\n    attribute vec4 pointMoreData;\n    \n    uniform float scanLineY1;\n    uniform float scanLineY2;\n    uniform float scanLineY3;\n    uniform float scanLineWidth;\n    uniform bool isActive;\n    uniform float cameraFadeDistance;\n    uniform float cameraFadeStart;\n    uniform float pointSizeScale;\n    uniform float scanLineYOffsetStrength;\n    uniform float scanLineYOffsetNoiseStrength;\n    uniform vec4 glitchEffects0;\n    uniform vec4 glitchEffects1;\n    uniform vec4 glitchEffects2;\n    uniform vec4 glitchEffects3;\n    uniform vec2 resolution;\n    \n    varying float vAlpha;\n    varying vec3 vColor;\n    varying float vDistanceAlpha;\n\n    void main() {\n        float pointActive = pointMoreData.x;\n        float size = pointMoreData.y;\n        float layer = pointMoreData.z;\n        float delay = pointMoreData.w;\n\n        float scanLineY = scanLineY1;\n        if (abs(layer - 2.0) < 0.1) scanLineY = scanLineY2;\n        if (abs(layer - 3.0) < 0.1) scanLineY = scanLineY3;\n\n        float adjustedScanLineY = scanLineY - delay;\n\n        float y = position.y;\n        float scanLineDelta = adjustedScanLineY - y;\n        float scanLineDist = abs(scanLineDelta);\n        vec3 newPosition = position;\n\n        float alpha = pointActive;\n        if (scanLineDist > 0.0 && scanLineDist < scanLineWidth) {\n            vColor = vec3(1.0, 1.0, 0.2);\n        } else {\n            vColor = vec3(0.8, 0.8, 0.8);\n        }\n        float range = 100.0;\n        if (isActive) {\n            if (y > adjustedScanLineY) {\n                // newPosition.y += 0.01 * scanLineDist * scanLineDist;\n                if (scanLineDist >= range) {\n                    alpha = 0.0;\n                } else {\n                    alpha = clamp(cos(scanLineDist * 3.1415926 / (range * 2.0)), 0.0, 1.0);\n                }\n            }\n        } else {\n            if (y < adjustedScanLineY) {\n                newPosition.y -= 0.05 * scanLineDist * scanLineDist;\n                if (scanLineDist >= range) {\n                    alpha = 0.0;\n                } else {\n                    alpha = clamp(cos(scanLineDist * 3.1415926 / (range * 2.0)), 0.0, 1.0);\n                }\n            }\n        }\n\n        vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);\n        float viewZ = -mvPosition.z;\n        float fadeStart = cameraFadeStart;\n        float fadeEnd = cameraFadeDistance;\n        float distanceAlpha = 1.0 - clamp((viewZ - fadeStart) / (fadeEnd - fadeStart), 0.0, 1.0);\n        vAlpha = 0.6 * alpha * distanceAlpha * (-0.25 * layer + 1.25) * pointActive;\n        vDistanceAlpha = distanceAlpha;\n        gl_Position = projectionMatrix * mvPosition;\n        // === glitch效果 ===\n        float glitchYRange = 10.0; // 屏幕空间y范围\n        float glitchXOffset = 20.0; // 屏幕空间x偏移\n        vec4 glitchs[4];\n        glitchs[0] = glitchEffects0;\n        glitchs[1] = glitchEffects1;\n        glitchs[2] = glitchEffects2;\n        glitchs[3] = glitchEffects3;\n        for (int i = 0; i < 4; i++) {\n            float gy0 = glitchs[i].x;\n            float gx0 = glitchs[i].y;\n            float gy1 = glitchs[i].z;\n            float gx1 = glitchs[i].w;\n            // 屏幕空间y坐标\n            float screenY = mvPosition.y;\n            if (abs(screenY - gy0) < glitchYRange) {\n                mvPosition.x += glitchXOffset * gx0;\n            }\n            if (abs(screenY - gy1) < glitchYRange) {\n                mvPosition.x += glitchXOffset * gx1;\n            }\n        }\n        gl_Position = projectionMatrix * mvPosition;\n        gl_PointSize = size * pointSizeScale * distanceAlpha + 4.0;\n    }\n",
    ts_65 =
      "\n    varying float vAlpha;\n    varying vec3 vColor;\n    varying float vDistanceAlpha;\n    \n    uniform float featherWidth;\n    uniform float coreRadius;\n    uniform float innerGlowStrength;\n    uniform float compressStrength;\n    uniform vec2 resolution;\n    \n    void main() {\n        vec2 center = gl_PointCoord - vec2(0.5);\n        float dist = length(center);\n        \n        float radius = 0.5;\n        \n        if (dist > radius) {\n            discard;\n        }\n        \n        float alpha = vAlpha;\n        \n        if (dist <= coreRadius * vDistanceAlpha) {\n            alpha = vAlpha;\n        } else {\n            float featherStart = coreRadius;\n            float featherEnd = radius;\n            \n            float fadeOut1 = smoothstep(featherEnd, featherStart, dist);\n            float fadeOut2 = smoothstep(featherEnd * 0.8, featherStart, dist);\n            \n            float mixRatio = clamp(featherWidth, 0.1, 1.0);\n            float featherAlpha = mix(fadeOut1, fadeOut2, mixRatio);\n            \n            float distanceFade = 1.0 - pow(dist / radius, 2.0);\n            \n            float additionalFeather = 1.0 - pow(dist / radius, 1.0 + featherWidth * 2.0);\n            \n            alpha = vAlpha * featherAlpha * distanceFade * additionalFeather;\n        }\n        \n        float innerGlow = 1.0 - smoothstep(0.0, coreRadius * 3.0, dist);\n        vec3 finalColor = vColor + vColor * innerGlow * innerGlowStrength;\n        \n        // 亮度压缩插值，防止高密度过曝，低密度不变\n        vec3 compressed = finalColor / (finalColor + vec3(1.0));\n        finalColor = mix(finalColor, compressed, compressStrength);\n        \n        float colorBrightness = dot(vColor, vec3(0.299, 0.587, 0.114));\n        if (colorBrightness > 0.6) {\n            alpha *= 1.0 + (colorBrightness - 0.6) * 0.5;\n        }\n        // === 镜头暗角 ===\n        vec2 uv = gl_FragCoord.xy / resolution;\n        float vignetteDist;\n        if (uv.x < 0.4) {\n            vignetteDist = distance(vec2((uv.x - 0.4) * 0.8 + 0.4, uv.y), vec2(0.4, 0.5));\n        } else {\n            vignetteDist = distance(vec2((uv.x - 0.4) * 0.6 + 0.4, uv.y), vec2(0.4, 0.5));\n        }\n        float vignette = 1.0;\n        if (vignetteDist > 0.3) {\n            vignette = 1.0 - smoothstep(0.4, 0.5, vignetteDist);\n        }\n        alpha *= vignette;\n        \n        gl_FragColor = vec4(finalColor, alpha);\n    }\n",
    to_66 = {
      factory: webpackRequire(27663),
      enemy: webpackRequire(96741),
      anchor: webpackRequire(25576),
      spaceship: webpackRequire(6777),
      pile: webpackRequire(54335),
      trinity: webpackRequire(90928),
    },
    tl_67 = {
      factory: {
        key: "factory",
        binarySrc: to_66.factory,
        pointSizeScale: 1,
        offset: {
          x: -550,
          y: 300,
          z: -300,
        },
        pivot: {
          x: -50,
          y: 0,
          z: 0,
        },
        scale: 1.25,
        cameraFadeDistance: 4e3,
        cameraFadeStart: 600,
        laserMode: "ceiling",
      },
      enemy: {
        key: "enemy",
        binarySrc: to_66.enemy,
        pointSizeScale: 1,
        offset: {
          x: -600,
          y: -200,
          z: -400,
        },
        pivot: {
          x: 200,
          y: 0,
          z: 400,
        },
        scale: 1,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "ceiling",
      },
      anchor: {
        key: "anchor",
        binarySrc: to_66.anchor,
        pointSizeScale: 1.5,
        offset: {
          x: -550,
          y: 0,
          z: 0,
        },
        pivot: {
          x: -5,
          y: 0,
          z: 10,
        },
        scale: 2,
        cameraFadeDistance: 2300,
        cameraFadeStart: 1800,
        laserMode: "random",
      },
      spaceship: {
        key: "spaceship",
        binarySrc: to_66.spaceship,
        pointSizeScale: 1,
        offset: {
          x: 400,
          y: 150,
          z: 0,
        },
        pivot: {
          x: -800,
          y: 0,
          z: 0,
        },
        scale: 0.75,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "ceiling",
      },
      pile: {
        key: "pile",
        binarySrc: to_66.pile,
        pointSizeScale: 1,
        offset: {
          x: -350,
          y: 200,
          z: 0,
        },
        pivot: {
          x: -220,
          y: 0,
          z: 40,
        },
        scale: 1.2,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "ceiling",
      },
      trinity: {
        key: "trinity",
        binarySrc: to_66.trinity,
        pointSizeScale: 1.25,
        offset: {
          x: -550,
          y: -400,
          z: -200,
        },
        pivot: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: 1.25,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "random",
      },
    },
    tc_68 = [tl_67.spaceship, tl_67.anchor, tl_67.factory, tl_67.pile, tl_67.trinity, tl_67.enemy];
  var td_69 = new WeakMap();
  class t__70 {
    static get renderLevelValue() {
      return this.renderLevel;
    }
    static getRayPerBatch() {
      return 2 === this.renderLevel ? 8 : 1 === this.renderLevel ? 14 : 20;
    }
    static getMaxRays() {
      return 2 === this.renderLevel ? 500 : 1 === this.renderLevel ? 1e3 : 2e3;
    }
    setupInteraction() {
      (this.container.addEventListener("mousedown", this.handleMouseDown),
        this.container.addEventListener("mousemove", this.handleMouseMove),
        this.container.addEventListener("mouseup", this.handleMouseUp),
        this.container.addEventListener("mouseleave", this.handleMouseUp),
        this.container.addEventListener("touchstart", this.handleTouchStart),
        this.container.addEventListener("touchmove", this.handleTouchMove),
        this.container.addEventListener("touchend", this.handleTouchEnd));
    }
    get actor() {
      return this.currentActor;
    }
    getRotationInfo() {
      return {
        currentRotation: this.currentRotationY,
        targetRotation: this.targetRotationY,
      };
    }
    updateCameraLookAt() {
      window.innerWidth > window.innerHeight ? this.camera.lookAt(0, 0, 0) : this.camera.lookAt(-550, 0, 0);
    }
    pauseRender() {
      this.animationId &&
        (cancelAnimationFrame(this.animationId), (this.animationId = null), (this.isPaused = !0));
    }
    resumeRender() {
      !this.animationId && this.isPaused && ((this.isPaused = !1), this.animate());
    }
    updateRotation() {
      (this.autoRotation && !this.isDragging && (this.targetRotationY += this.autoRotationSpeed),
        (this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1),
        this.currentGroup && (this.currentGroup.rotation.y = this.currentRotationY),
        this.backupGroup && (this.backupGroup.rotation.y = this.currentRotationY));
    }
    setAutoRotation(e_477) {
      this.autoRotation = e_477;
    }
    setRotationSpeed(e_478) {
      this.rotationSpeed = e_478;
    }
    setAutoRotationSpeed(e_479) {
      this.autoRotationSpeed = e_479;
    }
    rotateTo(e_480) {
      this.targetRotationY = e_480;
    }
    static async loadModels() {
      return (
        this.loadModelsPromise ||
          (this.loadModelsPromise = (async () => {
            let e_481 = [];
            for (let t_482 of tc_68) {
              let a_483 = await this.loadBinary(t_482.binarySrc);
              e_481.push({
                binary: a_483,
                key: t_482.key,
                pointSizeScale: t_482.pointSizeScale,
                offset: t_482.offset,
                pivot: t_482.pivot,
                scale: t_482.scale,
                cameraFadeDistance: t_482.cameraFadeDistance,
                cameraFadeStart: t_482.cameraFadeStart,
                laserMode: t_482.laserMode,
              });
            }
            return ((this.loadModelsPromise = null), e_481);
          })()),
        this.loadModelsPromise
      );
    }
    static async setup() {
      return (
        this.setupPromise ||
          (this.setupPromise = (async () => {
            let e_484 = 0,
              t_485 = await t__70.loadModels();
            for (let a_497 of t_485) {
              let t_498 = a_497.binary.length / 3;
              t_498 > 0 && t_498 > e_484 && (e_484 = t_498);
            }
            this.maxPointCount = Math.max(e_484, 1);
            let a_486 = document.createElement("canvas");
            ((a_486.width = 800), (a_486.height = 600));
            let n_487 = new threeJs.JeP({
                canvas: a_486,
              }),
              i_488 = new threeJs2.Z58(),
              r_489 = new threeJs2.ubm(75, 800 / 600, 0.1, 1e4);
            r_489.position.set(0, 0, 2e3);
            let s_490 = new Float32Array(3e4);
            for (let e_499 = 0; e_499 < 3e4; e_499++) s_490[e_499] = 2e3 * Math.random() - 1e3;
            let o_491 = new threeJs2.LoY();
            o_491.setAttribute("position", new threeJs2.THS(s_490, 3));
            let l_492 = new threeJs2.BH$({
                size: 10,
                color: 0xffffff,
              }),
              c_493 = new threeJs2.ONl(o_491, l_492);
            i_488.add(c_493);
            let d_494 = performance.now();
            n_487.render(i_488, r_489);
            let __495 = performance.now();
            n_487.dispose();
            let u_496 = __495 - d_494;
            for (let a_500 of (u_496 > 60
              ? (this.renderLevel = 2)
              : u_496 > 30
                ? (this.renderLevel = 1)
                : (this.renderLevel = 0),
            console.log("[E.P.S] performance test duration", u_496),
            console.log("[E.P.S] renderLevel", this.renderLevel),
            t_485)) {
              let t_501 = a_500.binary.length / 3;
              if (0 === t_501) continue;
              let n_502 = 1,
                i_503 = 0,
                r_504 = 0,
                s_505 = 0,
                o_506 = 1 / 0,
                l_507 = -1 / 0,
                c_508 = 1 / 0,
                d_509 = -1 / 0,
                __510 = 1 / 0,
                u_511 = -1 / 0;
              for (let e_518 = 0; e_518 < a_500.binary.length; e_518 += 3) {
                let t_519 = a_500.binary[e_518],
                  n_520 = a_500.binary[e_518 + 1],
                  i_521 = a_500.binary[e_518 + 2];
                ((o_506 = Math.min(o_506, t_519)),
                  (l_507 = Math.max(l_507, t_519)),
                  (c_508 = Math.min(c_508, n_520)),
                  (d_509 = Math.max(d_509, n_520)),
                  (__510 = Math.min(__510, i_521)),
                  (u_511 = Math.max(u_511, i_521)));
              }
              let m_512 = l_507 - o_506,
                h_513 = d_509 - c_508,
                p_514 = u_511 - __510;
              ((n_502 = 1900 / h_513),
                (i_503 = -0.5 * m_512 - o_506),
                (r_504 = -0.5 * h_513 - c_508),
                (s_505 = -0.5 * p_514 - __510));
              let v_515 = [],
                L_516 = [];
              for (let t_522 = 0; t_522 < e_484; t_522++)
                if (3 * t_522 >= a_500.binary.length) (v_515.push(0, 0, 0), L_516.push(0, 0, 0, 0));
                else {
                  let e_523 = (a_500.binary[3 * t_522] + i_503) * n_502,
                    o_524 = (a_500.binary[3 * t_522 + 1] + r_504) * n_502,
                    l_525 = (a_500.binary[3 * t_522 + 2] + s_505) * n_502,
                    c_526 = swiperDefault()(4, 8);
                  (v_515.push(e_523, o_524, l_525),
                    L_516.push(1, c_526, swiperDefault()(1, 3), swiperDefault()(-100, 100)));
                }
              let f_517 = {
                key: a_500.key,
                pointDataArray: new Float32Array(v_515),
                pointMoreDataArray: new Float32Array(L_516),
                count: t_501,
                pointSizeScale: a_500.pointSizeScale,
                offset: a_500.offset || {
                  x: -800,
                  y: 200,
                  z: 0,
                },
                scale: a_500.scale || 1,
                pivot: a_500.pivot || {
                  x: 0,
                  y: 0,
                  z: 0,
                },
                cameraFadeDistance: a_500.cameraFadeDistance || 3500,
                cameraFadeStart: a_500.cameraFadeStart || 1e3,
                laserMode: a_500.laserMode || "ceiling",
              };
              this.models.push(f_517);
            }
          })()),
        this.setupPromise
      );
    }
    get canSwitch() {
      return !(0, swiper._)(this, td_69);
    }
    startGlitchLoop(e_527) {
      if (!e_527) return;
      let t_528 = () => {
        let a_529 = 4e3 + 2e3 * Math.random();
        (this.activateGlitch(e_527), (this.glitchTimer = window.setTimeout(t_528, a_529)));
      };
      t_528();
    }
    stopGlitchLoop() {
      (this.glitchTimer && (clearTimeout(this.glitchTimer), (this.glitchTimer = null)),
        this.currentActor && this.currentActor.setGlitchEffects(Array(16).fill(0)),
        this.backupActor && this.backupActor.setGlitchEffects(Array(16).fill(0)));
    }
    activateGlitch(e_530) {
      let t_531 = () => {
          let t_533 = swiperDefault()(6, 8),
            a_534 = Array(16).fill(0);
          for (let e_535 = 0; e_535 < t_533; e_535++)
            ((a_534[2 * e_535] = -2e3 + 4e3 * Math.random()),
              (a_534[2 * e_535 + 1] = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 5));
          e_530.setGlitchEffects(a_534);
        },
        a_532 = 3 + swiperDefault()(0, 3);
      for (let e_536 = 0; e_536 < a_532; e_536++)
        setTimeout(() => {
          t_531();
        }, 80 * e_536);
      setTimeout(
        () => {
          e_530.setGlitchEffects(Array(16).fill(0));
        },
        80 * a_532 + 80,
      );
    }
    async switchTo(e_537) {
      if ((await t__70.setup(), e_537 < 0 || e_537 >= t__70.models.length))
        return void console.warn("Invalid model index: ".concat(e_537));
      if (e_537 === this.modelIndex || (0, swiper._)(this, td_69)) return;
      ((0, swiper3._)(this, td_69, !0), (this.modelIndex = e_537), this.stopGlitchLoop());
      let t_538 = t__70.models[e_537],
        a_539 = this.currentGroup,
        n_540 = this.backupGroup,
        i_541 = this.currentActor,
        r_542 = this.backupActor;
      ((this.currentGroup = n_540),
        (this.backupGroup = a_539),
        (this.currentActor = r_542),
        (this.backupActor = i_541),
        this.currentActor.setPointSizeScale(t_538.pointSizeScale),
        this.currentActor.setCameraFadeDistance(t_538.cameraFadeDistance),
        this.currentActor.material.uniforms.cameraFadeStart &&
          (this.currentActor.material.uniforms.cameraFadeStart.value = t_538.cameraFadeStart),
        this.rayInstMesh &&
          this.rayInstMesh.material &&
          this.rayInstMesh.material.uniforms &&
          this.rayInstMesh.material.uniforms.cameraFadeDistance &&
          ((this.rayInstMesh.material.uniforms.cameraFadeDistance.value = t_538.cameraFadeDistance),
          this.rayInstMesh.material.uniforms.cameraFadeStart &&
            (this.rayInstMesh.material.uniforms.cameraFadeStart.value = t_538.cameraFadeStart)),
        this.currentGroup.position.set(
          t_538.offset.x + t_538.pivot.x,
          t_538.offset.y + t_538.pivot.y,
          t_538.offset.z + t_538.pivot.z,
        ),
        this.currentGroup.scale.setScalar(t_538.scale),
        this.currentActor.mesh.position.set(-t_538.pivot.x, -t_538.pivot.y, -t_538.pivot.z));
      try {
        ((this.isScanLineAnimating = !0),
          await Promise.all([
            this.backupActor.fadeOut(),
            this.currentActor.fadeIn([t_538.pointDataArray, t_538.pointMoreDataArray]),
            new Promise((e_543) => {
              let t_544 = this.autoRotationSpeed;
              (0, animeJsDefault.A)({
                targets: this,
                autoRotationSpeed: 20 * t_544,
                duration: 400,
                easing: "easeInOutQuad",
                complete: () => {
                  (0, animeJsDefault.A)({
                    targets: this,
                    autoRotationSpeed: t_544,
                    delay: 800,
                    duration: 800,
                    easing: "easeInOutQuad",
                    complete: e_543,
                  });
                },
              });
            }),
          ]),
          this.startGlitchLoop(this.currentActor),
          this.backupActor && this.backupActor.setGlitchEffects(Array(16).fill(0)));
      } catch (e_545) {
        console.error(e_545);
      } finally {
        ((this.isScanLineAnimating = !1), (0, swiper3._)(this, td_69, !1));
      }
    }
    create1DNoiseTexture() {
      let e_546 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256,
        t_547 = new tt_60(Math.floor(1e4 * Math.random())),
        a_548 = new Float32Array(e_546);
      for (let n_550 = 0; n_550 < e_546; n_550++) a_548[n_550] = t_547.noise1D((n_550 / e_546) * 8);
      let n_549 = new threeJs2.GYF(a_548, e_546, 1, threeJs2.VT0, threeJs2.RQf);
      return ((n_549.wrapS = threeJs2.GJx), (n_549.wrapT = threeJs2.GJx), (n_549.needsUpdate = !0), n_549);
    }
    spawnLaserRays(e_551, t_552) {
      let a_553 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t__70.getRayPerBatch(),
        n_554 = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        i_555 = t__70.models[this.modelIndex],
        r_556 = i_555.pointDataArray,
        s_557 = i_555.count,
        o_558 = 0;
      for (let l_559 = 0; l_559 < 500 && o_558 < a_553 * n_554; l_559++) {
        let a_560,
          l_561,
          c_562 = new threeJs2.Pq0((0, SiteUtils.aT)([-3e3, 400, 3e3]), swiperDefault()(2e3, 2e3), 0);
        if (s_557 > 0) {
          let n_565 = Math.floor(Math.random() * s_557),
            o_566 = r_556[3 * n_565];
          l_561 = r_556[3 * n_565 + 1];
          let d_567 = r_556[3 * n_565 + 2];
          if ("scanLine" === e_551) {
            if (Math.abs(l_561 - t_552) > 40) continue;
          } else if (l_561 - t_552 > 0) continue;
          let __568 = new threeJs2.Pq0(o_566, l_561, d_567);
          ((a_560 = __568), "ceiling" === i_555.laserMode && (c_562.setX(__568.x), c_562.setZ(__568.z)));
        } else ((l_561 = t_552), (a_560 = new threeJs2.Pq0(0, t_552, 0)));
        let d_563 = () => 0.8 * Math.random() * n_554,
          __564 = this.rayInstances.findIndex((e_569) => !e_569.active);
        if (-1 === __564) break;
        ((this.rayInstances[__564] = {
          src: c_562,
          target: a_560.clone(),
          targetActor: this.currentActor,
          targetGroup: this.currentGroup,
          baseOpacity: d_563(),
          randomOffset: Math.random(),
          startTime: performance.now(),
          duration: (0.5 + Math.random()) * 400 * n_554,
          lifetime: (0.5 + Math.random()) * 400 * n_554,
          laserMode: i_555.laserMode,
          active: !0,
        }),
          o_558++);
      }
    }
    updateRayInstances() {
      let e_570 = performance.now(),
        t_571 = this.rayInstGeom.getAttribute("src"),
        a_572 = this.rayInstGeom.getAttribute("target"),
        n_573 = this.rayInstGeom.getAttribute("baseOpacity"),
        i_574 = this.rayInstGeom.getAttribute("randomOffset"),
        r_575 = this.rayInstGeom.getAttribute("progress");
      for (let s_576 = 0; s_576 < t__70.getMaxRays(); s_576++) {
        let o_577 = this.rayInstances[s_576];
        if (!o_577 || !o_577.active) {
          r_575.setX(s_576, 0);
          continue;
        }
        let l_578 = Math.min(1, (e_570 - o_577.startTime) / o_577.duration);
        r_575.setX(s_576, l_578);
        let c_579 = o_577.src.clone(),
          d_580 = o_577.target.clone();
        (o_577.targetActor &&
          (d_580.add(o_577.targetActor.mesh.position),
          "ceiling" === o_577.laserMode && c_579.add(o_577.targetActor.mesh.position)),
          o_577.targetGroup &&
            (d_580.multiply(o_577.targetGroup.scale),
            d_580.applyAxisAngle(new threeJs2.Pq0(0, 1, 0), o_577.targetGroup.rotation.y),
            d_580.add(o_577.targetGroup.position),
            "ceiling" === o_577.laserMode &&
              (c_579.multiply(o_577.targetGroup.scale),
              c_579.applyAxisAngle(new threeJs2.Pq0(0, 1, 0), o_577.targetGroup.rotation.y),
              c_579.add(o_577.targetGroup.position))),
          t_571.setXYZ(s_576, c_579.x, c_579.y, c_579.z),
          a_572.setXYZ(s_576, d_580.x, d_580.y, d_580.z),
          n_573.setX(s_576, o_577.baseOpacity),
          i_574.setX(s_576, o_577.randomOffset),
          l_578 >= 1 && e_570 - o_577.startTime > o_577.duration + o_577.lifetime && (o_577.active = !1));
      }
      ((t_571.needsUpdate = !0),
        (a_572.needsUpdate = !0),
        (n_573.needsUpdate = !0),
        (i_574.needsUpdate = !0),
        (r_575.needsUpdate = !0));
    }
    static async loadBinary(e_581) {
      if (this.binaryCache[e_581]) return this.binaryCache[e_581];
      try {
        let t_582 = await fetch(e_581);
        if (!t_582.ok) throw Error("网络请求失败");
        let a_583 = await t_582.arrayBuffer(),
          n_584 = new Float32Array(a_583);
        return ((this.binaryCache[e_581] = n_584), n_584);
      } catch (e_585) {
        return (console.error("加载二进制文件失败:", e_585), new Float32Array(0));
      }
    }
    dispose() {
      (this.animationId && (cancelAnimationFrame(this.animationId), (this.animationId = null)),
        this.currentActor.dispose(),
        this.backupActor.dispose(),
        this.renderer.dispose(),
        this.container.removeEventListener("mousedown", this.handleMouseDown),
        this.container.removeEventListener("mousemove", this.handleMouseMove),
        this.container.removeEventListener("mouseup", this.handleMouseUp),
        this.container.removeEventListener("mouseleave", this.handleMouseUp),
        this.container.removeEventListener("touchstart", this.handleTouchStart),
        this.container.removeEventListener("touchmove", this.handleTouchMove),
        this.container.removeEventListener("touchend", this.handleTouchEnd),
        window.removeEventListener("resize", this.handleResize));
    }
    constructor(e_586) {
      ((0, swiper2._)(this, td_69, {
        writable: !0,
        value: void 0,
      }),
        (this.modelIndex = -1),
        (this.animationId = null),
        (this.isPaused = !0),
        (this.isDragging = !1),
        (this.previousMouseX = 0),
        (this.rotationSpeed = 0.01),
        (this.currentRotationY = 0),
        (this.targetRotationY = 0),
        (this.autoRotation = !0),
        (this.autoRotationSpeed = 0.005),
        (this.isScanLineAnimating = !1),
        (this.rayFrameCount = 0),
        (this.rayInstances = Array.from(
          {
            length: 1e3,
          },
          () => ({
            src: new threeJs2.Pq0(),
            target: new threeJs2.Pq0(),
            targetActor: null,
            targetGroup: null,
            baseOpacity: 0,
            randomOffset: 0,
            startTime: 0,
            duration: 0,
            lifetime: 0,
            active: !1,
            laserMode: "random",
          }),
        )),
        (this.glitchTimer = null),
        (this.handleMouseDown = (e_595) => {
          ((this.isDragging = !0),
            (this.previousMouseX = e_595.clientX),
            (this.autoRotation = !1),
            (this.container.style.cursor = "grabbing"));
        }),
        (this.handleMouseMove = (e_596) => {
          if (!this.isDragging) return;
          let t_597 = e_596.clientX - this.previousMouseX;
          ((this.targetRotationY += t_597 * this.rotationSpeed), (this.previousMouseX = e_596.clientX));
        }),
        (this.handleMouseUp = () => {
          ((this.isDragging = !1), (this.container.style.cursor = "grab"), (this.autoRotation = !0));
        }),
        (this.handleTouchStart = (e_598) => {
          1 === e_598.touches.length &&
            ((this.isDragging = !0),
            (this.previousMouseX = e_598.touches[0].clientX),
            (this.autoRotation = !1),
            (this.container.style.cursor = "grabbing"));
        }),
        (this.handleTouchMove = (e_599) => {
          if (!this.isDragging || 1 !== e_599.touches.length) return;
          let t_600 = e_599.touches[0].clientX - this.previousMouseX;
          ((this.targetRotationY += t_600 * this.rotationSpeed),
            (this.previousMouseX = e_599.touches[0].clientX));
        }),
        (this.handleTouchEnd = () => {
          ((this.isDragging = !1), (this.container.style.cursor = "grab"), (this.autoRotation = !0));
        }),
        (this.handleResize = () => {
          ((this.camera.aspect = this.container.clientWidth / this.container.clientHeight),
            this.camera.updateProjectionMatrix());
          let e_601 = te_59(this.container);
          (this.renderer.setSize(e_601, 1080),
            this.currentActor.updateResolution(new threeJs2.I9Y(e_601, 1080)),
            this.backupActor.updateResolution(new threeJs2.I9Y(e_601, 1080)),
            this.updateCameraLookAt());
        }),
        (this.animate = () => {
          if (
            ((this.animationId = requestAnimationFrame(this.animate)),
            this.updateRotation(),
            this.renderer.render(this.scene, this.camera),
            this.isScanLineAnimating && (this.rayFrameCount++, this.rayFrameCount >= 2))
          ) {
            this.rayFrameCount = 0;
            let e_602 = this.currentActor.material.uniforms.scanLineY1.value,
              t_603 = this.currentActor.material.uniforms.scanLineY2.value;
            this.isScanLineAnimating &&
              (this.spawnLaserRays("scanLine", e_602, t__70.getRayPerBatch(), 1),
              this.spawnLaserRays("scanLine", t_603, t__70.getRayPerBatch(), 0.4));
          }
          this.updateRayInstances();
        }),
        (0, swiper3._)(this, td_69, !1),
        (this.container = e_586),
        (this.scene = new threeJs2.Z58()),
        (this.scene.background = null));
      let t_587 = te_59(this.container);
      ((this.camera = new threeJs2.ubm(75, t_587 / 1080, 0.1, 1e4)),
        this.camera.position.set(0, 300, 2e3),
        this.updateCameraLookAt(),
        (this.renderer = new threeJs.JeP({
          antialias: !0,
          alpha: !0,
        })),
        this.renderer.setSize(t_587, 1080),
        e_586.appendChild(this.renderer.domElement),
        (this.currentActor = new ti_63()),
        (this.backupActor = new ti_63()),
        this.currentActor.updateResolution(new threeJs2.I9Y(t_587, 1080)),
        this.backupActor.updateResolution(new threeJs2.I9Y(t_587, 1080)),
        (this.currentGroup = new threeJs2.YJl()),
        (this.currentGroup.position.x = -800),
        (this.currentGroup.position.y = 200),
        this.currentGroup.add(this.currentActor.mesh),
        (this.backupGroup = new threeJs2.YJl()),
        (this.backupGroup.position.x = -800),
        (this.backupGroup.position.y = 200),
        this.backupGroup.add(this.backupActor.mesh),
        (this.rayNoiseTexture = this.create1DNoiseTexture()));
      let a_588 = new threeJs2.LoY();
      a_588.setAttribute("position", new threeJs2.qtW([0, 0, 0, 1, 0, 0], 3));
      let n_589 = new Float32Array(3 * t__70.getMaxRays()),
        i_590 = new Float32Array(3 * t__70.getMaxRays()),
        r_591 = new Float32Array(t__70.getMaxRays()),
        s_592 = new Float32Array(t__70.getMaxRays()),
        o_593 = new Float32Array(t__70.getMaxRays());
      ((this.rayInstGeom = new threeJs2.CmU()),
        (this.rayInstGeom.instanceCount = t__70.getMaxRays()),
        this.rayInstGeom.setAttribute("position", a_588.getAttribute("position")),
        this.rayInstGeom.setAttribute("src", new threeJs2.uWO(n_589, 3)),
        this.rayInstGeom.setAttribute("target", new threeJs2.uWO(i_590, 3)),
        this.rayInstGeom.setAttribute("baseOpacity", new threeJs2.uWO(r_591, 1)),
        this.rayInstGeom.setAttribute("randomOffset", new threeJs2.uWO(s_592, 1)),
        this.rayInstGeom.setAttribute("progress", new threeJs2.uWO(o_593, 1)));
      let l_594 = new threeJs2.BKk({
        uniforms: {
          noiseTexture: {
            value: this.rayNoiseTexture,
          },
          cameraFadeDistance: {
            value: 3e3,
          },
          cameraPosition: {
            value: this.camera.position,
          },
        },
        vertexShader:
          "\n                attribute vec3 src;\n                attribute vec3 target;\n                attribute float progress;\n                attribute float randomOffset;\n                attribute float baseOpacity;\n                varying vec3 vWorldPos;\n                varying float vT;\n                varying float vBaseOpacity;\n                varying float vRandomOffset;\n                void main() {\n                    float t = clamp(progress, 0.0, 1.0);\n                    vT = position.x * t;\n                    vec3 pos = mix(src, target, vT);\n                    vBaseOpacity = baseOpacity;\n                    vRandomOffset = randomOffset;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n                    vWorldPos = gl_Position.xyz;\n                }\n            ",
        fragmentShader:
          "\n                uniform sampler2D noiseTexture;\n                uniform float cameraFadeDistance;\n                varying vec3 vWorldPos;\n                varying float vT;\n                varying float vBaseOpacity;\n                varying float vRandomOffset;\n                void main() {\n                    float dist = distance(vWorldPos, cameraPosition);\n                    float distanceAlpha = 1.0 - clamp(dist / cameraFadeDistance, 0.0, 1.0);\n                    float noise = texture2D(noiseTexture, vec2(fract(vT + vRandomOffset), 0.5)).r;\n                    float alpha = vBaseOpacity * distanceAlpha * noise * vT;\n                    if (alpha < 0.01) discard;\n                    gl_FragColor = vec4("
            .concat("1.000000", ", ")
            .concat("1.000000", ", ")
            .concat("1.000000", ", alpha);\n                }\n            "),
        transparent: !0,
        depthWrite: !1,
        blending: threeJs2.EZo,
      });
      ((this.rayInstMesh = new threeJs2.DXC(this.rayInstGeom, l_594)),
        this.scene.add(this.rayInstMesh),
        t__70
          .setup()
          .then(() => {
            if (0 === t__70.models.length) return void console.error("No available model data");
            (2 === t__70.renderLevel && this.renderer.setPixelRatio(0.75),
              this.currentActor.init(t__70.maxPointCount),
              this.backupActor.init(t__70.maxPointCount),
              this.scene.add(this.currentGroup),
              this.scene.add(this.backupGroup));
          })
          .catch((e_604) => {
            console.error("ModelPlayer init failed:", e_604);
          }),
        (this.container.style.cursor = "grab"),
        this.setupInteraction(),
        window.addEventListener("resize", this.handleResize));
    }
  }
  ((t__70.maxPointCount = 0),
    (t__70.renderLevel = 0),
    (t__70.models = []),
    (t__70.loadModelsPromise = null),
    (t__70.setupPromise = null),
    (t__70.binaryCache = {}));
  var LoadingScreenFirstLoadProgressLoadedStore = webpackRequire(71272),
    framerMotionUseInView = webpackRequire(19213),
    useOrientation = webpackRequire(90286),
    TrackingGroupsEnum = webpackRequire(29521);
  function tv_71() {
    return (tv_71 = Object.assign
      ? Object.assign.bind()
      : function (e_605) {
          for (var t_606 = 1; t_606 < arguments.length; t_606++) {
            var a_607 = arguments[t_606];
            for (var n_608 in a_607) ({}).hasOwnProperty.call(a_607, n_608) && (e_605[n_608] = a_607[n_608]);
          }
          return e_605;
        }).apply(null, arguments);
  }
  let tL_72 = function (e_609) {
      return React2.createElement(
        "svg",
        tv_71(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 45 50",
          },
          e_609,
        ),
        h_12 ||
          (h_12 = React2.createElement("path", {
            fillRule: "evenodd",
            fill: "currentColor",
            d: "M44.478,28.633 L42.442,31.734 L42.169,32.146 L42.442,32.559 L44.478,35.659 L42.442,35.659 L35.593,35.659 L20.796,35.659 L11.519,35.659 L11.519,32.740 C12.013,32.842 12.525,32.893 13.047,32.893 C17.328,32.893 20.796,29.412 20.796,25.116 C20.796,20.824 17.328,17.344 13.047,17.344 C12.525,17.344 12.013,17.395 11.519,17.497 L11.519,14.577 L20.796,14.577 L35.593,14.577 L42.442,14.577 L44.478,14.577 L42.442,17.677 L42.169,18.090 L42.442,18.502 L44.478,21.603 L42.442,24.703 L42.169,25.116 L42.442,25.533 L44.478,28.633 ZM37.634,17.107 L23.567,17.107 L22.768,20.977 L32.120,20.977 L27.470,24.842 L25.752,33.124 L29.603,33.124 L32.120,20.977 L37.075,20.977 L37.634,18.284 L37.879,17.107 L37.634,17.107 ZM11.070,30.311 L11.070,26.562 L10.978,26.562 L7.334,26.562 L7.334,23.674 L10.978,23.674 L11.070,23.674 L11.070,19.925 L13.943,19.925 L13.943,23.674 L17.683,23.674 L17.683,26.562 L13.943,26.562 L13.943,30.311 L11.070,30.311 ZM21.480,6.397 L5.326,15.759 L5.326,24.550 L5.326,25.686 L5.326,34.478 L21.480,43.835 L31.520,38.018 L41.139,38.018 L21.480,49.410 L0.514,37.263 L0.514,12.969 L21.480,0.821 L41.144,12.218 L31.524,12.218 L21.480,6.397 Z",
          })),
      );
    },
    tf_73 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/android-icon.dd9c0fd6.png",
    },
    tx_74 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/download-icon.3efcbfc6.png",
    },
    tg_75 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/epic.7b9f0f97.png",
    },
    ty_76 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/gpg.37836d7a.png",
    },
    tC_77 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/pc.9c65ea0f.png",
    },
    tA_78 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/ps5.ff9ebc6a.png",
    },
    tw_79 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/taptap.d490d888.png",
    },
    tj_80 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/taptap-h5.69ec3145.png",
    },
    tN_81 = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/windows.f03ec02f.png",
    };
  var stylesModule4 = webpackRequire(40226),
    styles4 = webpackRequire.n(stylesModule4);
  let tM_82 = (e_610) => {
      let { className: t_611 } = e_610;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 10",
        className: t_611,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M23.663,3.332 L23.663,0.445 L31.361,0.445 L31.361,3.332 L23.663,3.332 ZM17.963,4.058 C16.941,4.058 16.113,3.250 16.113,2.252 C16.113,1.254 16.941,0.445 17.963,0.445 C18.985,0.445 19.813,1.254 19.813,2.252 C19.813,3.250 18.985,4.058 17.963,4.058 ZM12.782,9.117 C11.760,9.117 10.931,8.308 10.931,7.310 C10.931,6.313 11.760,5.504 12.782,5.504 C13.804,5.504 14.632,6.313 14.632,7.310 C14.632,8.308 13.804,9.117 12.782,9.117 ZM12.782,4.058 C11.760,4.058 10.931,3.250 10.931,2.252 C10.931,1.254 11.760,0.445 12.782,0.445 C13.804,0.445 14.632,1.254 14.632,2.252 C14.632,3.250 13.804,4.058 12.782,4.058 ZM7.601,9.117 C6.579,9.117 5.750,8.308 5.750,7.310 C5.750,6.313 6.579,5.504 7.601,5.504 C8.622,5.504 9.451,6.313 9.451,7.310 C9.451,8.308 8.622,9.117 7.601,9.117 ZM7.601,4.058 C6.579,4.058 5.750,3.250 5.750,2.252 C5.750,1.254 6.579,0.445 7.601,0.445 C8.622,0.445 9.451,1.254 9.451,2.252 C9.451,3.250 8.622,4.058 7.601,4.058 ZM2.419,9.117 C1.397,9.117 0.569,8.308 0.569,7.310 C0.569,6.313 1.397,5.504 2.419,5.504 C3.441,5.504 4.270,6.313 4.270,7.310 C4.270,8.308 3.441,9.117 2.419,9.117 ZM2.419,4.058 C1.397,4.058 0.569,3.250 0.569,2.252 C0.569,1.254 1.397,0.445 2.419,0.445 C3.441,0.445 4.270,1.254 4.270,2.252 C4.270,3.250 3.441,4.058 2.419,4.058 Z",
        }),
      });
    },
    tS_83 = (e_612) => {
      let { className: t_613 } = e_612;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: t_613,
        viewBox: "0 0 28 29",
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M20.836,14.872 L20.836,0.013 L7.162,0.013 L7.162,7.976 L13.999,14.872 L-0.006,14.872 L13.999,28.999 L28.004,14.872 L20.836,14.872 Z",
        }),
      });
    },
    tI_84 = (e_614) => {
      let { type: t_615, className: a_616, url: n_617 } = e_614,
        { images: i_618 } = (0, I18nProviderUseI18n.PO)(),
        { t: r_619 } = (0, I18nProviderUseI18n.Bd)();
      return t_615
        ? (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles4().item, !n_617 && styles4().disabled, a_616),
            onClick: () => {
              if (n_617)
                switch (t_615) {
                  case "downloadIOS":
                  case "downloadAndroid":
                    Tracking.A.download();
                    break;
                  default:
                    Tracking.A.download({
                      channel: t_615,
                      url: n_617,
                    });
                }
            },
            children: [
              "ps5" === t_615 &&
                (0, jsx.jsx)("img", {
                  className: styles4().ps5,
                  src: tA_78.src,
                  alt: "PS5",
                }),
              "epic" === t_615 &&
                (0, jsx.jsx)("img", {
                  className: styles4().epic,
                  src: tg_75.src,
                  alt: "Epic",
                }),
              "appStore" === t_615 &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().appStore,
                    src: i_618["shop.get.appStore"],
                    alt: "App Store",
                  }),
                }),
              "gpg" === t_615 &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().gpg,
                    src: ty_76.src,
                    alt: "GPG",
                  }),
                }),
              "googlePlay" === t_615 &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().googlePlay,
                    src: i_618["shop.get.googlePlay"],
                    alt: "Google Play",
                  }),
                }),
              "galaxyStore" === t_615 &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().galaxyStore,
                    src: i_618["shop.get.galaxyStore"],
                    alt: "Galaxy Store",
                  }),
                }),
              "windows" === t_615 &&
                (0, jsx.jsx)("img", {
                  className: styles4().windows,
                  src: tN_81.src,
                  alt: "Windows",
                }),
              "android" === t_615 &&
                (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("img", {
                      className: styles4().android,
                      src: tf_73.src,
                      alt: "Android",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles4().text,
                      children: r_619("home.downloadAndroid"),
                    }),
                  ],
                }),
              "pc" === t_615 &&
                (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("img", {
                      className: styles4().pc,
                      src: tC_77.src,
                      alt: "PC",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles4().text,
                      children: r_619("home.downloadPc"),
                    }),
                  ],
                }),
              "taptap" === t_615 &&
                (0, jsx.jsx)("img", {
                  className: styles4().taptap,
                  src: tw_79.src,
                  alt: "TapTap",
                }),
              "taptapAndroid" === t_615 &&
                (0, jsx.jsx)("img", {
                  className: styles4().taptap,
                  src: tj_80.src,
                  alt: "TapTap",
                }),
              ("downloadIOS" === t_615 || "downloadAndroid" === t_615) &&
                (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("img", {
                      className: styles4().download,
                      src: tx_74.src,
                      alt: "Download",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles4().text,
                      children: r_619("home.downloadMobile"),
                    }),
                  ],
                }),
            ],
          })
        : (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles4().item, a_616, styles4().hidden),
          });
    };
  function tE_85(e_620) {
    let { className: t_621 } = e_620,
      { t: a_622 } = (0, I18nProviderUseI18n.Bd)(),
      {
        data: { shop: n_623 },
      } = (0, I18nProviderUseI18n.PO)(),
      i_624 = (0, React.useMemo)(
        () =>
          n_623
            ? n_623.filter(
                (e_628) =>
                  (null == e_628 ? void 0 : e_628.key) !== "downloadIOS" &&
                  (null == e_628 ? void 0 : e_628.key) !== "downloadAndroid" &&
                  (null == e_628 ? void 0 : e_628.key) !== "taptapAndroid",
              )
            : [],
        [n_623],
      ),
      r_625 = (0, React.useMemo)(() => {
        if (!i_624) return [];
        let e_629 = [];
        for (let t_630 = 0; t_630 < Math.ceil(i_624.length / 2); t_630++)
          e_629.push([i_624[t_630], i_624[t_630 + Math.ceil(i_624.length / 2)]]);
        return e_629;
      }, [i_624]),
      s_626 = (0, React.useMemo)(() => {
        var e_631;
        if (!n_623) return [];
        let t_632 = (0, DeviceUtils.un)(null != (e_631 = window.navigator.userAgent) ? e_631 : "");
        return n_623.filter(
          (e_633) =>
            (!t_632 && (null == e_633 ? void 0 : e_633.key) === "googlePlay") ||
            (t_632 && (null == e_633 ? void 0 : e_633.key) === "appStore") ||
            (!t_632 && (null == e_633 ? void 0 : e_633.key) === "galaxyStore"),
        );
      }, [n_623]),
      o_627 = (0, useOrientation.M)();
    return (0, jsx.jsxs)("div", {
      className: classnamesDefault()(t_621, styles4().downloadContainer),
      children: [
        (0, jsx.jsx)(tM_82, {
          className: styles4().decoRt,
        }),
        (0, jsx.jsx)("div", {
          className: styles4().iconContainer,
          children: (0, jsx.jsx)(tS_83, {
            className: styles4().icon,
          }),
        }),
        (0, jsx.jsx)("div", {
          className: styles4().downloadTitle,
          children: a_622("home.download"),
        }),
        (0, jsx.jsx)("div", {
          className: styles4().contentContainer,
          children: (0, jsx.jsxs)(module44990.D, {
            children: [
              (0, jsx.jsx)("div", {
                className: styles4().qrcode,
              }),
              (0, jsx.jsxs)("div", {
                className: styles4().platforms,
                children: [
                  "landscape" === o_627 &&
                    r_625.map((e_634, t_635) =>
                      (0, jsx.jsx)(
                        "div",
                        {
                          className: styles4().row,
                          children: e_634.map((e_636, t_637) => {
                            var a_638;
                            return (0, jsx.jsx)(
                              tI_84,
                              {
                                type: null == e_636 ? void 0 : e_636.key,
                                url: null == e_636 ? void 0 : e_636.url,
                              },
                              null != (a_638 = null == e_636 ? void 0 : e_636.key) ? a_638 : t_637,
                            );
                          }),
                        },
                        t_635,
                      ),
                    ),
                  "portrait" === o_627 &&
                    (0, jsx.jsx)("div", {
                      className: styles4().line,
                      children: s_626.map((e_639, t_640) => {
                        var a_641;
                        return (0, jsx.jsx)(
                          tI_84,
                          {
                            type: null == e_639 ? void 0 : e_639.key,
                            url: null == e_639 ? void 0 : e_639.url,
                          },
                          null != (a_641 = null == e_639 ? void 0 : e_639.key) ? a_641 : t_640,
                        );
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
  var TextRevealAnimations = webpackRequire(84245);
  let tR_86 = (e_642) => {
    let t_643 = (0, React.useRef)(null),
      { loaded: a_644 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
    return (
      (0, React.useEffect)(() => {
        var e_645;
        null == (e_645 = t_643.current) ||
          e_645.querySelectorAll("[data-animation-element]").forEach((e_646) => {
            e_646.style.opacity = "0";
          });
      }, []),
      (0, React.useEffect)(() => {
        if (!a_644 || !t_643.current) return;
        let n_647 = Array.from(t_643.current.querySelectorAll("[data-animation-element]"));
        (0, TextRevealAnimations.iI)(n_647, animeJsDefault.A.timeline(), e_642);
      }, [e_642, a_644]),
      t_643
    );
  };
  var stylesModule5 = webpackRequire(56604),
    styles5 = webpackRequire.n(stylesModule5);
  function tZ_87() {
    let {
        data: { skland: e_648 },
      } = (0, I18nProviderUseI18n.PO)(),
      { t: t_649 } = (0, I18nProviderUseI18n.Bd)(),
      a_650 = tR_86(!0),
      n_651 = (0, React.useCallback)(() => {
        SiteConfig.a.cloud_game_link && window.open(SiteConfig.a.cloud_game_link, "_blank");
      }, []),
      i_652 = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          window.open(SiteConfig.a.payment_link, "_blank"),
          Tracking.A.collect("click", {
            target: "recharge_center",
          }));
      }, []),
      r_653 = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          e_648 && window.open(e_648, "_blank"),
          Tracking.A.collect("click", {
            target: "official_community",
          }));
      }, [e_648]),
      s_654 = (0, React.useCallback)(() => {
        window.open("https://endfield.hypergryph.com/news/8568", "_blank");
      }, []);
    return (0, jsx.jsxs)("div", {
      className: styles5().container,
      ref: a_650,
      children: [
        (0, jsx.jsxs)("div", {
          className: styles5().rbContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles5().downloadWrapper,
              "data-animation-element": !0,
              children: (0, jsx.jsx)(tE_85, {
                className: styles5().downloadContainer,
              }),
            }),
            (0, jsx.jsxs)("div", {
              className: styles5().extraContainer,
              "data-animation-element": !0,
              children: [
                (0, jsx.jsxs)("div", {
                  className: styles5().lineButton,
                  onClick: n_651,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles5().cloudGameIcon,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles5().text,
                      children: t_649("home.cloudGame"),
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles5().line,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles5().button,
                      onClick: i_652,
                      children: (0, jsx.jsx)(tL_72, {
                        className: styles5().iconCharge,
                      }),
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles5().button,
                      onClick: r_653,
                      children: (0, jsx.jsx)("div", {
                        className: styles5().iconSkland,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles5().age,
          onClick: s_654,
          "data-animation-element": !0,
        }),
        (0, jsx.jsx)("div", {
          className: styles5().scrollTip,
        }),
      ],
    });
  }
  let tT_88 = {
    src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/rank-vi.87efb3f8.png",
  };
  var stylesModule6 = webpackRequire(2878),
    styles6 = webpackRequire.n(stylesModule6);
  function tG_89() {
    let { lang: e_655 } = (0, I18nProviderUseI18n.PO)(),
      t_656 = tR_86(!0),
      a_657 = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          window.open(SiteConfig.a.payment_link, "_blank"),
          Tracking.A.collect("click", {
            target: "recharge_center",
          }));
      }, []);
    return (0, jsx.jsxs)("div", {
      className: styles6().container,
      ref: t_656,
      children: [
        "vi-vn" === e_655 &&
          (0, jsx.jsx)("img", {
            src: tT_88.src,
            className: styles6().rankImage,
            alt: "",
            "data-animation-element": !0,
          }),
        (0, jsx.jsxs)("div", {
          className: styles6().rbContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles6().downloadWrapper,
              "data-animation-element": !0,
              children: (0, jsx.jsx)(tE_85, {
                className: styles6().downloadContainer,
              }),
            }),
            (0, jsx.jsx)("div", {
              className: styles6().extraContainer,
              "data-animation-element": !0,
              children: (0, jsx.jsx)("div", {
                className: styles6().button,
                onClick: a_657,
                children: (0, jsx.jsx)(tL_72, {
                  className: styles6().iconCharge,
                }),
              }),
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles6().scrollTip,
        }),
      ],
    });
  }
  var stylesModule7 = webpackRequire(94534),
    styles7 = webpackRequire.n(stylesModule7);
  function tY_90() {
    let { t: e_658 } = (0, I18nProviderUseI18n.Bd)(),
      {
        data: { skland: t_659 },
      } = (0, I18nProviderUseI18n.PO)(),
      a_660 = tR_86(!1),
      n_661 = (0, React.useCallback)(() => {
        SiteConfig.a.cloud_game_link && window.open(SiteConfig.a.cloud_game_link, "_blank");
      }, []),
      i_662 = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          window.open(SiteConfig.a.payment_link, "_blank"),
          Tracking.A.collect("click", {
            target: "recharge_center",
          }));
      }, []),
      r_663 = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          t_659 && window.open(t_659, "_blank"),
          Tracking.A.collect("click", {
            target: "official_community",
          }));
      }, [t_659]),
      s_664 = (0, React.useCallback)(() => {
        window.open("https://endfield.hypergryph.com/news/8568", "_blank");
      }, []);
    return (0, jsx.jsxs)("div", {
      className: styles7().container,
      ref: a_660,
      children: [
        SiteConfig.a.cloud_game_link &&
          (0, jsx.jsx)("div", {
            className: styles7().cloudGameButton,
            onClick: n_661,
            "data-animation-element": !0,
          }),
        (0, jsx.jsxs)("div", {
          className: styles7().rbContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles7().downloadWrapper,
              "data-animation-element": !0,
              children: (0, jsx.jsx)(tE_85, {
                className: styles7().downloadContainer,
              }),
            }),
            (0, jsx.jsxs)("div", {
              className: styles7().extraContainer,
              "data-animation-element": !0,
              children: [
                (0, jsx.jsxs)("div", {
                  className: styles7().button,
                  onClick: i_662,
                  children: [
                    (0, jsx.jsx)(tL_72, {
                      className: styles7().iconCharge,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles7().text,
                      children: e_658("home.charge"),
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles7().button,
                  onClick: r_663,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles7().iconSkland,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles7().text,
                      children: e_658("home.skland"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles7().age,
          onClick: s_664,
          "data-animation-element": !0,
        }),
      ],
    });
  }
  var stylesModule8 = webpackRequire(49876),
    styles8 = webpackRequire.n(stylesModule8);
  function tQ_91() {
    let { lang: e_665 } = (0, I18nProviderUseI18n.PO)(),
      t_666 = tR_86(!1);
    return (0, jsx.jsxs)("div", {
      className: styles8().container,
      ref: t_666,
      children: [
        "vi-vn" === e_665 &&
          (0, jsx.jsx)("img", {
            src: tT_88.src,
            className: styles8().rankImage,
            alt: "",
            "data-animation-element": !0,
          }),
        (0, jsx.jsx)("div", {
          className: styles8().rbContainer,
          children: (0, jsx.jsx)("div", {
            className: styles8().downloadWrapper,
            "data-animation-element": !0,
            children: (0, jsx.jsx)(tE_85, {
              className: styles8().downloadContainer,
            }),
          }),
        }),
      ],
    });
  }
  var module17224 = webpackRequire(17224),
    stylesModule9 = webpackRequire(83768),
    styles9 = webpackRequire.n(stylesModule9),
    OperatorSection = webpackRequire(3492),
    SectionTitle = webpackRequire(73560);
  let t$_92 = (e_667) =>
    (0, jsx.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 84 85",
      ...e_667,
      children: (0, jsx.jsx)("path", {
        fillRule: "evenodd",
        fill: "rgb(255, 255, 255)",
        d: "M78.500,67.968 L62.482,0.714 L55.861,0.714 L64.071,67.968 L56.075,67.968 L56.075,62.382 L58.638,62.382 L58.638,48.873 L52.336,48.873 L43.793,0.714 L43.144,0.714 L40.590,0.714 L39.940,0.714 L31.396,48.873 L25.095,48.873 L25.095,62.382 L27.658,62.382 L27.658,67.968 L19.662,67.968 L27.872,0.714 L21.251,0.714 L5.231,67.968 L-0.001,67.968 L-0.001,84.942 L40.590,84.942 L43.144,84.942 L83.734,84.942 L83.734,67.968 L78.500,67.968 ZM26.638,79.355 L20.729,79.355 L20.729,73.485 L26.638,73.485 L26.638,79.355 ZM63.376,79.355 L57.467,79.355 L57.467,73.485 L63.376,73.485 L63.376,79.355 Z",
      }),
    });
  var stylesModule10 = webpackRequire(60687),
    styles10 = webpackRequire.n(stylesModule10);
  let t2_93 = (e_668) => {
      let { className: t_669 } = e_668;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: t_669,
        viewBox: "0 0 176 18",
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M169.872,12.870 L169.872,9.817 L175.813,9.817 L175.813,12.870 L169.872,12.870 ZM169.872,3.709 L175.813,3.709 L175.813,6.762 L169.872,6.762 L169.872,3.709 ZM163.927,9.817 L166.899,9.817 L166.899,12.870 L163.927,12.870 L163.927,9.817 ZM157.986,3.709 L163.927,3.709 L163.927,6.762 L157.986,6.762 L157.986,3.709 ZM113.415,9.817 L155.013,9.817 L155.013,12.870 L113.415,12.870 L113.415,9.817 ZM128.273,3.709 L155.013,3.709 L155.013,6.762 L128.273,6.762 L128.273,3.709 ZM113.415,3.709 L125.301,3.709 L125.301,6.762 L113.415,6.762 L113.415,3.709 ZM104.502,12.870 L104.502,9.817 L107.474,9.817 L110.447,9.817 L110.447,12.870 L107.474,12.870 L104.502,12.870 ZM107.474,3.709 L110.447,3.709 L110.447,6.762 L107.474,6.762 L107.474,3.709 ZM98.561,9.817 L101.529,9.817 L101.529,12.870 L98.561,12.870 L98.561,9.817 ZM92.616,9.817 L95.589,9.817 L95.589,12.870 L92.616,12.870 L92.616,9.817 ZM83.703,9.817 L89.648,9.817 L89.648,12.870 L83.703,12.870 L83.703,9.817 ZM83.703,3.709 L89.648,3.709 L89.648,6.762 L83.703,6.762 L83.703,3.709 ZM77.762,9.817 L80.730,9.817 L80.730,12.870 L77.762,12.870 L77.762,9.817 ZM71.817,3.709 L77.762,3.709 L77.762,6.762 L71.817,6.762 L71.817,3.709 ZM27.250,9.817 L68.849,9.817 L68.849,12.870 L27.250,12.870 L27.250,9.817 ZM42.105,3.709 L68.849,3.709 L68.849,6.762 L42.105,6.762 L42.105,3.709 ZM27.250,3.709 L39.136,3.709 L39.136,6.762 L27.250,6.762 L27.250,3.709 ZM10.455,0.298 L20.492,0.298 L15.473,8.975 L10.455,0.298 ZM0.347,0.298 L10.384,0.298 L5.365,8.975 L0.347,0.298 ZM10.455,17.700 L5.436,9.024 L15.473,9.024 L10.455,17.700 Z",
        }),
      });
    },
    t3_94 = (e_670) => {
      let { text: t_671, fps: a_672 = 30, speed: n_673 = 1 } = e_670,
        i_674 = (0, React.useRef)(null);
      return (
        (0, React.useEffect)(() => {
          let e_675;
          if (!i_674.current) return;
          let r_676 = i_674.current,
            s_677 = t_671.split("").map((e_681) => {
              let t_682 = document.createElement("span");
              return ((t_682.textContent = e_681), (t_682.style.opacity = "0"), t_682);
            });
          ((r_676.innerHTML = ""), r_676.append(...s_677));
          let o_678 = 0,
            l_679 = 1e3 / a_672,
            c_680 = performance.now();
          return (
            (e_675 = requestAnimationFrame(function t_683() {
              let a_684 = performance.now();
              if (a_684 - c_680 >= l_679 && ((c_680 = a_684), o_678 < s_677.length)) {
                for (let e_685 = 0; e_685 < n_673 && !(o_678 + e_685 >= s_677.length); e_685++)
                  s_677[o_678 + e_685].style.opacity = "1";
                o_678 += n_673;
              }
              o_678 < s_677.length && (e_675 = requestAnimationFrame(t_683));
            })),
            () => {
              cancelAnimationFrame(e_675);
            }
          );
        }, [t_671, a_672]),
        (0, jsx.jsx)("span", {
          className: styles10().typewriter,
          ref: i_674,
        })
      );
    };
  var swiper5 = webpackRequire(41409),
    dayjs = webpackRequire(53079),
    dayjsDefault = webpackRequire.n(dayjs),
    swiper6 = webpackRequire(25477),
    swiperDefault2 = webpackRequire.n(swiper6),
    animeJs321 = webpackRequire(14e3),
    animeJs321Default = webpackRequire.n(animeJs321),
    swiper7 = webpackRequire(74517);
  webpackRequire(60658);
  var VideoListContextProvider = webpackRequire(3787);
  let an_95 = {
    src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/blurred_logo.eccbe4f3.png",
  };
  var stylesModule11 = webpackRequire(95308),
    styles11 = webpackRequire.n(stylesModule11);
  function as_96(e_686) {
    if ("undefined" == typeof document) return 16 * e_686;
    let t_687 = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return e_686 * (Number.isFinite(t_687) ? t_687 : 16);
  }
  let ao_97 = (e_688) => {
    let { title: t_689, textIndent: a_690 } = e_688,
      [n_691, i_692] = (0, React.useState)(!1),
      [r_693, s_694] = (0, React.useState)(null),
      [o_695, l_696] = (0, React.useState)(() => ({
        max: Math.round(as_96(3)),
        min: Math.max(8, Math.round(as_96(0.5))),
      }));
    return (
      (0, React.useLayoutEffect)(() => {
        let e_697 = window.matchMedia("(orientation: portrait)"),
          t_698 = () => {
            let t_699 = e_697.matches;
            (i_692(t_699),
              t_699 &&
                l_696({
                  max: Math.round(as_96(3)),
                  min: Math.max(8, Math.round(as_96(0.5))),
                }));
          };
        return (
          t_698(),
          e_697.addEventListener("change", t_698),
          window.addEventListener("resize", t_698),
          () => {
            (e_697.removeEventListener("change", t_698), window.removeEventListener("resize", t_698));
          }
        );
      }, []),
      (0, React.useEffect)(() => {
        s_694(null);
      }, [t_689]),
      (0, jsx.jsx)(framerMotion.P.div, {
        className: styles11().title,
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
          ease: "easeInOut",
        },
        style: {
          textIndent: a_690,
        },
        children: (0, jsx.jsx)("div", {
          className: styles11().titleInner,
          children: t_689.trim()
            ? n_691
              ? (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles11().titleFitProbe,
                      "aria-hidden": !0,
                      children: (0, jsx.jsx)(swiper5.zb, {
                        className: styles11().titleFitProbeInner,
                        mode: "multi",
                        max: o_695.max,
                        min: o_695.min,
                        onReady: (e_700) => {
                          s_694(e_700);
                        },
                        children: t_689,
                      }),
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles11().titleTextVisible,
                      style:
                        null != r_693
                          ? {
                              fontSize: "".concat(r_693, "px"),
                            }
                          : void 0,
                      children: t_689,
                    }),
                  ],
                })
              : (0, jsx.jsx)("div", {
                  className: styles11().titleTextLandscape,
                  children: t_689,
                })
            : null,
        }),
      })
    );
  };
  var SvgTextFit = webpackRequire(60891),
    framerMotion2 = webpackRequire(20944),
    SvgIcon92418 = webpackRequire(92418),
    SvgIcon91251 = webpackRequire(91251),
    SvgIcon92182 = webpackRequire(92182),
    framerMotion3 = webpackRequire(29671),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    SvgIcon15889 = webpackRequire(15889),
    VideoPlayers = webpackRequire(73992),
    Pagination = webpackRequire(2682),
    stylesModule12 = webpackRequire(51067),
    styles12 = webpackRequire.n(stylesModule12);
  let ay_98 = (e_701, t_702) => ((e_701 % t_702) + t_702) % t_702,
    aC_99 = async (e_703, t_704, a_705, n_706) => {
      let i_707 = e_703.querySelector(".".concat(styles12().bottom)),
        r_708 = e_703.querySelector(".".concat(styles12().middle)),
        s_709 = e_703.querySelector(".".concat(styles12().top)),
        o_710 = animeJsDefault.A.timeline();
      return (
        o_710.add((0, TextRevealAnimations.WO)(i_707, t_704, !0, a_705), 0),
        o_710.add((0, TextRevealAnimations.WO)(r_708, t_704, !0, a_705), n_706),
        o_710.add((0, TextRevealAnimations.WO)(s_709, t_704, !0, a_705), 2 * n_706),
        o_710.finished
      );
    },
    aA_100 = (e_711) => {
      let { src: t_712, direction: a_713, type: n_714 } = e_711,
        i_715 = (0, React.useRef)(null),
        [r_716, s_717] = (0, framerMotion3.xQ)(),
        o_718 = (0, React.useMemo)(() => a_713, []);
      (0, React.useEffect)(() => {
        r_716
          ? aC_99(i_715.current, o_718, 400, 250)
          : setTimeout(() => {
              s_717();
            }, 1e3);
      }, [r_716]);
      let l_719 = (0, framerMotionUseInView.W)(i_715),
        c_720 = (0, React.useRef)(null);
      return (
        (0, React.useEffect)(() => {
          var e_721, t_722;
          l_719
            ? null == (e_721 = c_720.current) || e_721.play()
            : null == (t_722 = c_720.current) || t_722.pause();
        }, [l_719]),
        (0, jsx.jsxs)("div", {
          className: styles12().wrapper,
          ref: i_715,
          children: [
            (0, jsx.jsx)("div", {
              className: styles12().bottom,
            }),
            "image" === n_714 &&
              (0, jsx.jsx)("img", {
                className: styles12().middle,
                src: t_712,
              }),
            "image" === n_714 &&
              (0, jsx.jsx)("img", {
                className: styles12().top,
                src: t_712,
              }),
            "video" === n_714 &&
              (0, jsx.jsx)("div", {
                className: styles12().middle,
              }),
            "video" === n_714 &&
              (0, jsx.jsx)(VideoPlayers.Q, {
                ref: c_720,
                classNames: styles12().top,
                autoplay: l_719,
                src: t_712,
              }),
          ],
        })
      );
    },
    aw_101 = (e_723) => {
      var t_724;
      let {
        className: a_725,
        style: n_726,
        items: i_727,
        inView: r_728,
        type: s_729,
        loadingEable: o_730 = !0,
      } = e_723;
      (0, React.useRef)(!1);
      let [l_731, c_732] = (0, React.useState)(!1),
        [d_733, __734] = (0, React.useState)(0);
      (0, React.useRef)(null);
      let u_735 = (0, React.useMemo)(() => i_727[d_733], [d_733, i_727]),
        [m_736, h_737] = (0, React.useState)("right"),
        L_738 = (0, React.useCallback)(async () => {
          f_739.current ||
            ((f_739.current = !0),
            __734(ay_98(d_733 - 1, i_727.length)),
            h_737("left"),
            setTimeout(() => {
              f_739.current = !1;
            }, 900));
        }, [d_733, i_727.length, __734]),
        f_739 = (0, React.useRef)(!1),
        x_740 = (0, React.useCallback)(async () => {
          f_739.current ||
            ((f_739.current = !0),
            __734(ay_98(d_733 + 1, i_727.length)),
            h_737("right"),
            setTimeout(() => {
              f_739.current = !1;
            }, 900));
        }, [d_733, i_727.length, __734]),
        g_741 = (0, React.useCallback)(async () => {}, []),
        y_742 = (0, React.useRef)({});
      (0, React.useEffect)(() => {
        r_728 &&
          (null == u_735 ? void 0 : u_735.key) &&
          !y_742.current[u_735.key] &&
          ((y_742.current[u_735.key] = !0),
          Tracking.A.collect("content_view", {
            group: TrackingGroupsEnum.Z[s_729],
            target: u_735.key,
          }));
      }, [r_728, u_735]);
      let C_743 = (0, React.useRef)(null),
        { loaded: N_744 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
      (0, module9995.p)(() => {
        if (C_743.current) {
          let e_746 = C_743.current;
          [
            e_746.querySelector(".".concat(styles12().detail, " .").concat(styles12().index)),
            e_746.querySelector(".".concat(styles12().detail, " .").concat(styles12().title)),
            e_746.querySelector(".".concat(styles12().detail, " .").concat(styles12().description)),
          ].forEach((e_747) => {
            e_747 && (e_747.style.opacity = "0");
          });
        }
      });
      let b_745 = (0, useOrientation.M)();
      return (
        (0, React.useEffect)(() => {
          if ((!o_730 || N_744) && r_728) {
            let e_748 = C_743.current,
              t_749 = animeJsDefault.A.timeline();
            ("portrait" === b_745 &&
              t_749.add({
                targets: {},
                duration: 400,
              }),
              t_749.add(
                (0, TextRevealAnimations.WO)(
                  e_748.querySelector(".".concat(styles12().imageContainer)),
                  "portrait" === b_745 || "aic" === s_729 ? "right" : "left",
                  !0,
                  600,
                ),
              ));
            let a_750 = [
              e_748.querySelector(".".concat(styles12().pagination)),
              e_748.querySelector(".".concat(styles12().detail, " .").concat(styles12().index)),
              e_748.querySelector(".".concat(styles12().detail, " .").concat(styles12().title)),
              e_748.querySelector(".".concat(styles12().detail, " .").concat(styles12().description)),
              e_748.querySelector(".".concat(styles12().paginationH5)),
            ];
            (0, TextRevealAnimations.iI)(a_750, t_749);
          }
        }, [N_744, r_728, o_730]),
        (0, jsx.jsxs)("div", {
          className: classnamesDefault()(styles12().gameplayAlbum, styles12()[s_729], a_725),
          style: n_726,
          ref: C_743,
          children: [
            (0, jsx.jsx)("svg", {
              style: {
                display: "none",
              },
              children: (0, jsx.jsx)("filter", {
                id: "red-green",
                children: (0, jsx.jsx)("feColorMatrix", {
                  type: "matrix",
                  values: "1 0 0 0 0 0 0.95 0 0 0  0 0 0 0 0  0 0 0 1 0",
                }),
              }),
            }),
            (0, jsx.jsx)("div", {
              className: styles12().H5DecoLine,
              children: (0, jsx.jsxs)("div", {
                className: styles12().line,
                children: [
                  (0, jsx.jsx)("div", {
                    className: styles12().title,
                    children: s_729,
                  }),
                  (0, jsx.jsx)(SvgIcon15889.A, {
                    className: styles12().deco,
                  }),
                ],
              }),
            }),
            (0, jsx.jsxs)("div", {
              className: styles12().imageContainer,
              children: [
                (0, jsx.jsx)("div", {
                  className: styles12().image,
                  children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                    children: (0, jsx.jsx)(
                      aA_100,
                      {
                        direction: m_736,
                        type: "aic" === s_729 ? "image" : "video",
                        src: null != (t_724 = null == u_735 ? void 0 : u_735.image) ? t_724 : "",
                      },
                      d_733,
                    ),
                  }),
                }),
                (0, jsx.jsx)(
                  "div",
                  {
                    className: styles12().rightDeco,
                    onClick: g_741,
                    children: (0, jsx.jsxs)("div", {
                      className: styles12().line,
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles12().title,
                          children: s_729,
                        }),
                        (0, jsx.jsx)(SvgIcon15889.A, {
                          className: styles12().deco,
                        }),
                      ],
                    }),
                  },
                  "deco",
                ),
              ],
            }),
            (0, jsx.jsx)(Pagination.Ay, {
              className: styles12().pagination,
              type: "dark",
              next: x_740,
              prev: L_738,
            }),
            (0, jsx.jsx)(Pagination.Ay, {
              className: styles12().paginationH5,
              pagination: "number",
              current: d_733,
              total: i_727.length,
              next: x_740,
              prev: L_738,
            }),
            (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
              mode: "wait",
              children: (0, jsx.jsxs)(
                framerMotion.P.div,
                {
                  className: styles12().detail,
                  initial: {
                    opacity: 0,
                    x: "-2rem",
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: "2rem",
                    transition: {
                      duration: 0.5,
                      ease: "easeIn",
                    },
                  },
                  children: [
                    (0, jsx.jsxs)("div", {
                      className: styles12().index,
                      children: [d_733 + 1, " / ", i_727.length],
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles12().title,
                      children: null == u_735 ? void 0 : u_735.title,
                    }),
                    (0, jsx.jsx)(nextJsRuntimeDefault(), {
                      className: styles12().descriptionContainer,
                      direction: "y",
                      children: (0, jsx.jsx)("div", {
                        className: styles12().description,
                        children: null == u_735 ? void 0 : u_735.description,
                      }),
                    }),
                  ],
                },
                d_733,
              ),
            }),
          ],
        })
      );
    };
  var GameplayItemsText = webpackRequire(26915),
    stylesModule13 = webpackRequire(43837),
    styles13 = webpackRequire.n(stylesModule13);
  let ak_102 = () => {
    let e_751 = (0, React.useRef)(window.document.documentElement),
      { scrollYProgress: t_752 } = (0, SvgTextFit.L)({
        container: e_751,
      }),
      a_753 = (0, framerMotion2.G)(t_752, (e_755) => "".concat(-(300 * e_755) % 120, "%")),
      n_754 = (0, framerMotion2.G)(t_752, (e_756) => "".concat(120 - ((300 * e_756) % 120), "%"));
    return "landscape" === (0, useOrientation.M)()
      ? (0, jsx.jsxs)(framerMotion.P.div, {
          className: styles13().endfieldPre,
          children: [
            (0, jsx.jsx)(framerMotion.P.div, {
              className: styles13().icon,
              style: {
                translateX: a_753,
              },
              children: (0, jsx.jsx)(SvgIcon91251.A, {
                className: styles13().ef,
              }),
            }),
            (0, jsx.jsx)(framerMotion.P.div, {
              className: styles13().icon,
              style: {
                translateX: n_754,
              },
              children: (0, jsx.jsx)(SvgIcon91251.A, {
                className: styles13().ef,
              }),
            }),
          ],
        })
      : (0, jsx.jsx)(SvgIcon91251.A, {
          className: styles13().h5Icon,
        });
  };
  var swiper8 = webpackRequire(80187),
    stylesModule14 = webpackRequire(98220),
    styles14 = webpackRequire.n(stylesModule14);
  let aE_103 = 36 - 880 * 0.18200000000000005,
    aO_104 = (e_757, t_758) => {
      let a_759 = e_757 - t_758,
        n_760 =
          aE_103 * (e_757 - t_758) +
          (e_757 > t_758 ? (880 * 0.18200000000000005) / 2 : e_757 < t_758 ? -80.08000000000003 : 0);
      return n_760 > 0
        ? "translateX(calc(".concat(100 * a_759, "% + ").concat(n_760 / 16, "rem))")
        : n_760 < 0
          ? "translateX(calc(".concat(100 * a_759, "% - ").concat(-n_760 / 16, "rem))")
          : "translateX(".concat(100 * a_759, "%)");
    },
    aR_105 = (e_761) => {
      let {
          className: t_762,
          containerClassName: a_763,
          style: n_764,
          items: i_765,
          renderer: r_766,
          paginationRenderer: s_767,
          loop: o_768 = !0,
          autoPlay: l_769 = !0,
          interval: c_770 = 4e3,
        } = e_761,
        [d_771, __772] = (0, React.useState)(0),
        u_773 = (0, React.useRef)(!1),
        m_774 = (0, React.useRef)(0),
        h_775 = (0, React.useCallback)(
          (e_781) => ((e_781 % i_765.length) + i_765.length) % i_765.length,
          [i_765],
        ),
        L_776 = (0, React.useCallback)(
          (e_782) => {
            ((m_774.current = o_768 ? e_782 : h_775(e_782)), __772(m_774.current));
          },
          [o_768, h_775],
        ),
        f_777 = (0, React.useCallback)(() => {
          u_773.current ||
            ((u_773.current = !0), L_776(m_774.current + 1), setTimeout(() => (u_773.current = !1), 500));
        }, [L_776]),
        x_778 = (0, React.useCallback)(() => {
          u_773.current ||
            ((u_773.current = !0), L_776(m_774.current - 1), setTimeout(() => (u_773.current = !1), 500));
        }, [L_776]);
      (0, React.useEffect)(() => {
        if (!l_769) return;
        let e_783 = null,
          t_784 = () => {
            e_783 = window.setTimeout(() => {
              (f_777(), null !== e_783 && window.clearTimeout(e_783), t_784());
            }, c_770);
          };
        return (
          t_784(),
          () => {
            null !== e_783 && window.clearTimeout(e_783);
          }
        );
      }, [l_769, c_770, d_771]);
      let g_779 = (0, React.useMemo)(() => {
          let e_785 = d_771 - 1,
            t_786 = d_771 + 2,
            a_787 = [];
          for (
            let n_788 = o_768 ? e_785 - 2 : (0, swiper8.A)(e_785 - 2, 0, i_765.length - 1);
            n_788 <= (o_768 ? t_786 + 2 : (0, swiper8.A)(t_786 + 2, 0, i_765.length - 1));
            n_788++
          )
            a_787.push(n_788);
          return a_787;
        }, [d_771, i_765, o_768]),
        y_780 = (0, React.useCallback)(
          (e_789) => {
            L_776(Math.floor(m_774.current / i_765.length) * i_765.length + e_789);
          },
          [L_776],
        );
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles14().carousel, t_762),
        style: n_764,
        children: [
          (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles14().container, a_763),
            children: g_779.map((e_790) =>
              (0, jsx.jsx)(
                "div",
                {
                  className: classnamesDefault()(styles14().item),
                  style: {
                    transform: aO_104(e_790, d_771),
                  },
                  children: r_766({
                    index: e_790,
                    item: i_765[h_775(e_790)],
                    active: e_790 === d_771,
                    jumpTo: L_776,
                  }),
                },
                e_790,
              ),
            ),
          }),
          (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles14().arrow, styles14().left),
            onClick: x_778,
          }),
          (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles14().arrow, styles14().right),
            onClick: f_777,
          }),
          s_767 &&
            s_767({
              items: i_765,
              disablePrev: !o_768 && 0 === d_771,
              disableNext: !o_768 && d_771 === i_765.length - 1,
              currentIndex: h_775(d_771),
              jumpTo: y_780,
            }),
        ],
      });
    };
  var BulletinListContextProvider = webpackRequire(30257),
    stylesModule15 = webpackRequire(13920),
    styles15 = webpackRequire.n(stylesModule15);
  let aT_106 = (e_791) => {
      let { index: t_792, item: a_793, active: n_794, jumpTo: i_795 } = e_791,
        { lang: r_796, images: s_797 } = (0, I18nProviderUseI18n.PO)();
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles15().noticeItem, n_794 && styles15().active),
        onClick: () => {
          (SoundEffects.A.play(SoundEffects.d.common_click),
            n_794 ? window.open("/".concat(r_796, "/news/").concat(a_793.cid), "_blank") : i_795(t_792));
        },
        children: (0, jsx.jsx)("div", {
          className: styles15().image,
          style: {
            backgroundImage: (null == a_793 ? void 0 : a_793.cover)
              ? "url(".concat(null == a_793 ? void 0 : a_793.cover, ")")
              : "url(".concat(s_797["bulletin.".concat(null == a_793 ? void 0 : a_793.tab)], ")"),
          },
        }),
      });
    },
    aD_107 = (e_798) => {
      let {
          items: t_799,
          currentIndex: a_800,
          disablePrev: n_801,
          disableNext: i_802,
          jumpTo: r_803,
          handleList: s_804,
        } = e_798,
        { t: o_805 } = (0, I18nProviderUseI18n.Bd)(),
        l_806 = (0, React.useCallback)(() => {
          n_801 || r_803(a_800 - 1);
        }, [a_800, n_801, r_803]),
        c_807 = (0, React.useCallback)(() => {
          i_802 || r_803(a_800 + 1);
        }, [a_800, i_802, r_803]);
      return (0, jsx.jsxs)(jsx.Fragment, {
        children: [
          (0, jsx.jsx)(Pagination.Ay, {
            disablePrev: n_801,
            disableNext: i_802,
            prev: l_806,
            next: c_807,
            className: styles15().carouselPagination,
          }),
          (0, jsx.jsx)(module70246.A, {
            className: styles15().detailButton,
            onClick: s_804,
            children: (0, jsx.jsx)("span", {
              className: styles15().text,
              children: o_805("notice.detail"),
            }),
          }),
        ],
      });
    },
    aF_108 = (e_808) => {
      var t_809;
      let { item: a_810 } = e_808,
        { t: n_811 } = (0, I18nProviderUseI18n.Bd)();
      return (0, jsx.jsx)("div", {
        className: styles15().titleContainer,
        children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
          mode: "wait",
          children: (0, jsx.jsxs)(
            React.Fragment,
            {
              children: [
                (0, jsx.jsxs)(framerMotion.P.div, {
                  className: styles15().subtitle,
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
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                  children: [
                    (0, jsx.jsxs)("span", {
                      children: ["//", " ", n_811("notice.tab.".concat(null == a_810 ? void 0 : a_810.tab))],
                    }),
                    (0, jsx.jsx)("span", {
                      className: styles15().time,
                      children: dayjsDefault()((null == a_810 ? void 0 : a_810.displayTime) * 1e3).format(
                        n_811("information.displayTimeFormat"),
                      ),
                    }),
                  ],
                }),
                (0, jsx.jsx)(framerMotion.P.div, {
                  className: styles15().title,
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
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                  children: null == a_810 ? void 0 : a_810.title,
                }),
              ],
            },
            "".concat(null != (t_809 = null == a_810 ? void 0 : a_810.cid) ? t_809 : "none"),
          ),
        }),
      });
    },
    aG_109 = {
      initial: {
        y: "30%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    };
  var AicItemsText = webpackRequire(89622),
    stylesModule16 = webpackRequire(1287),
    styles16 = webpackRequire.n(stylesModule16),
    stylesModule17 = webpackRequire(36563),
    styles17 = webpackRequire.n(stylesModule17),
    stylesModule18 = webpackRequire(87346),
    styles18 = webpackRequire.n(stylesModule18);
  vhCheckDefault()({
    force: !0,
  });
  let aU_110 = [
      {
        key: "home",
        component: () => {
          let e_812 = (0, React.useRef)(null),
            t_813 = (0, framerMotionUseInView.W)(e_812),
            a_814 = (0, React.useRef)(!1),
            n_815 = (0, useOrientation.M)();
          return (
            (0, React.useEffect)(() => {
              t_813 &&
                !a_814.current &&
                ((a_814.current = !0),
                Tracking.A.collect("content_view", {
                  group: TrackingGroupsEnum.Z.home,
                }));
            }, [t_813]),
            (0, React.useEffect)(() => {
              if (SiteUtils.isServer) return;
              let t_816 = {
                  w: 0,
                  h: 0,
                },
                a_817 = () => {
                  let a_819 = window.innerWidth,
                    n_820 = window.innerHeight,
                    i_821 = a_819 !== t_816.w && n_820 !== t_816.h,
                    r_822 = a_819 >= n_820,
                    s_823 = e_812.current;
                  (s_823 &&
                    (r_822
                      ? i_821 && (s_823.style.height = "".concat(n_820, "px"))
                      : s_823.style.removeProperty("height")),
                    (t_816.w = a_819),
                    (t_816.h = n_820));
                };
              a_817();
              let n_818 = window.setInterval(a_817, 500);
              return (
                window.addEventListener("resize", a_817),
                () => {
                  (window.clearInterval(n_818), window.removeEventListener("resize", a_817));
                }
              );
            }, []),
            (0, jsx.jsxs)("div", {
              className: styles9().sectionContainer,
              ref: e_812,
              children: [
                (0, jsx.jsx)(module17224.A, {}),
                (0, jsx.jsx)("portrait" === n_815 ? tG_89 : tQ_91, {}),
              ],
            })
          );
        },
      },
      {
        key: "operator",
        component: OperatorSection.W,
      },
      {
        key: "lore",
        component: () => {
          let { lang: e_824 } = (0, I18nProviderUseI18n.PO)(),
            { t: t_825 } = (0, I18nProviderUseI18n.Bd)(),
            a_826 = (0, React.useRef)(null),
            n_827 = (0, React.useRef)(null),
            i_828 = (0, React.useRef)(null),
            [r_829, s_830] = (0, React.useState)(0);
          ((0, React.useEffect)(() => {
            if (!a_826.current) return;
            let e_841 = a_826.current;
            return (
              (n_827.current = new t__70(e_841)),
              () => {
                (s_830(0),
                  (e_841.innerHTML = ""),
                  n_827.current && (n_827.current.dispose(), (n_827.current = null)));
              }
            );
          }, []),
            (0, React.useEffect)(() => {
              if (!n_827.current) return;
              let e_842 = !0;
              return (
                !(function t_843() {
                  if (n_827.current && i_828.current) {
                    let e_844 = n_827.current.getRotationInfo().currentRotation;
                    i_828.current.style.transform = "rotate(".concat(e_844, "rad)");
                  }
                  e_842 && requestAnimationFrame(t_843);
                })(),
                () => {
                  e_842 = !1;
                }
              );
            }, []));
          let o_831 = async (e_845) => {
              let t_846 = e_845;
              (r_829 !== e_845 && SoundEffects.A.play(SoundEffects.d.model),
                e_845 < 0 ? (t_846 = tc_68.length - 1) : e_845 >= tc_68.length && (t_846 = 0),
                n_827.current &&
                  n_827.current.canSwitch &&
                  (s_830(t_846), await n_827.current.switchTo(t_846)));
            },
            l_832 = tc_68[r_829],
            c_833 = (0, React.useRef)(!1),
            d_834 = (0, framerMotionUseInView.W)(a_826);
          (0, React.useEffect)(() => {
            var e_847, t_848, a_849;
            d_834
              ? (c_833.current ||
                  ((c_833.current = !0), null == (t_848 = n_827.current) || t_848.switchTo(0)),
                null == (e_847 = n_827.current) || e_847.resumeRender())
              : null == (a_849 = n_827.current) || a_849.pauseRender();
          }, [d_834]);
          let __835 = (0, React.useRef)(null),
            u_836 = (0, framerMotionUseInView.W)(__835, {
              once: !0,
            }),
            m_837 = (0, React.useRef)(null),
            h_838 = (0, React.useRef)(null),
            L_839 = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            if (!u_836) return;
            let e_850 = m_837.current,
              t_851 = h_838.current,
              a_852 = L_839.current;
            e_850 &&
              t_851 &&
              a_852 &&
              (0, animeJsDefault.A)({
                targets: [e_850, t_851, a_852],
                opacity: [0, 1],
                translateY: ["2rem", 0],
                duration: 600,
                delay: animeJsDefault.A.stagger(100, {
                  start: 600,
                }),
                easing: "easeOutQuad",
              });
          }, [u_836]);
          let f_840 = (0, React.useRef)({});
          return (
            (0, React.useEffect)(() => {
              let e_853 = tc_68[r_829].key;
              d_834 &&
                !f_840.current[e_853] &&
                ((f_840.current[e_853] = !0),
                Tracking.A.collect("content_view", {
                  group: TrackingGroupsEnum.Z.lore,
                  target: e_853,
                }));
            }, [d_834, r_829]),
            (0, jsx.jsxs)("div", {
              className: styles10().container,
              children: [
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine1,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine2,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine3,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine4,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine5,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine6,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().safeArea,
                  children: (0, jsx.jsx)("div", {
                    className: styles10().ringWrapper,
                    children: (0, jsx.jsx)("div", {
                      className: styles10().ring,
                      ref: i_828,
                    }),
                  }),
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().lattice,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().colorBlock,
                }),
                (0, jsx.jsx)(SectionTitle.A, {
                  className: styles10().title,
                  titleEn: "lore",
                  titleCn: t_825("section.lore"),
                  theme: "dark",
                }),
                (0, jsx.jsx)("div", {
                  ref: a_826,
                  className: styles10().canvasContainer,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().iconLoreWrapper,
                  children: (0, jsx.jsx)(t$_92, {
                    className: styles10().iconLore,
                  }),
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().safeArea,
                  children: (0, jsx.jsx)("div", {
                    className: styles10().infoWrapper,
                    ref: __835,
                    children:
                      "en-us" === e_824
                        ? (0, jsx.jsxs)("div", {
                            className: styles10().infoEn,
                            children: [
                              (0, jsx.jsx)("div", {
                                className: styles10().gameCode,
                                children: "ARKNIGHTS: ENDFIELD-LORE",
                              }),
                              (0, jsx.jsx)("div", {
                                className: styles10().activeCodename,
                                children: (0, jsx.jsx)(t3_94, {
                                  text: t_825("lore.models.".concat(l_832.key, ".codename")),
                                }),
                              }),
                              (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                mode: "wait",
                                children: (0, jsx.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, jsx.jsx)(framerMotion.P.div, {
                                      className: styles10().activeIntro,
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
                                        ease: "circInOut",
                                      },
                                      children: t_825("lore.models.".concat(l_832.key, ".intro")),
                                    }),
                                  },
                                  l_832.key,
                                ),
                              }),
                              (0, jsx.jsxs)("div", {
                                className: styles10().navigation,
                                children: [
                                  (0, jsx.jsxs)("div", {
                                    className: styles10().paging,
                                    children: [r_829 + 1, " / ", tc_68.length],
                                  }),
                                  (0, jsx.jsx)(t2_93, {
                                    className: styles10().decoIcon,
                                  }),
                                  (0, jsx.jsx)("div", {
                                    className: styles10().naviDots,
                                    children: tc_68.map((e_854, t_855) =>
                                      (0, jsx.jsx)(
                                        "div",
                                        {
                                          className: classnamesDefault()(styles10().naviDot, {
                                            [styles10().active]: t_855 === r_829,
                                          }),
                                          onClick: () => o_831(t_855),
                                        },
                                        e_854.key,
                                      ),
                                    ),
                                  }),
                                  (0, jsx.jsxs)("div", {
                                    className: styles10().navigator,
                                    children: [
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().prev),
                                        onClick: () => o_831(r_829 - 1),
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().next),
                                        onClick: () => o_831(r_829 + 1),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, jsx.jsxs)("div", {
                            className: styles10().info,
                            children: [
                              (0, jsx.jsx)("div", {
                                ref: m_837,
                                children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                  mode: "wait",
                                  children: (0, jsx.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        (0, jsx.jsx)(framerMotion.P.div, {
                                          className: styles10().activeCodename,
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
                                            duration: 0.6,
                                            ease: "circInOut",
                                          },
                                          children: t_825("lore.models.".concat(l_832.key, ".codename")),
                                        }),
                                        (0, jsx.jsx)(framerMotion.P.div, {
                                          className: styles10().gameCode,
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
                                            duration: 0.6,
                                            ease: "circInOut",
                                          },
                                          children: "ARKNIGHTS: ENDFIELD",
                                        }),
                                      ],
                                    },
                                    l_832.key,
                                  ),
                                }),
                              }),
                              (0, jsx.jsxs)("div", {
                                ref: h_838,
                                className: styles10().navigation,
                                children: [
                                  (0, jsx.jsxs)("div", {
                                    className: styles10().navigator,
                                    children: [
                                      (0, jsx.jsx)("div", {
                                        className: styles10().activeName,
                                        children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                          mode: "wait",
                                          children: (0, jsx.jsxs)(
                                            framerMotion.P.div,
                                            {
                                              className: styles10().inner,
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
                                                duration: 0.6,
                                                ease: "circInOut",
                                              },
                                              children: [
                                                (0, jsx.jsxs)("span", {
                                                  className: styles10().paging,
                                                  children: [r_829 + 1, " /", " ", tc_68.length],
                                                }),
                                                (0, jsx.jsx)("span", {
                                                  className: styles10().name,
                                                  children: t_825("lore.models.".concat(l_832.key, ".name")),
                                                }),
                                              ],
                                            },
                                            l_832.key,
                                          ),
                                        }),
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().prev),
                                        onClick: () => o_831(r_829 - 1),
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().next),
                                        onClick: () => o_831(r_829 + 1),
                                      }),
                                    ],
                                  }),
                                  (0, jsx.jsx)("div", {
                                    className: styles10().naviDots,
                                    children: tc_68.map((e_856, t_857) =>
                                      (0, jsx.jsx)(
                                        "div",
                                        {
                                          className: classnamesDefault()(styles10().naviDot, {
                                            [styles10().active]: t_857 === r_829,
                                          }),
                                          onClick: () => o_831(t_857),
                                        },
                                        e_856.key,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              (0, jsx.jsx)("div", {
                                ref: L_839,
                                children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                  mode: "wait",
                                  children: (0, jsx.jsx)(
                                    framerMotion.P.div,
                                    {
                                      className: styles10().activeIntro,
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
                                        duration: 0.6,
                                        ease: "circInOut",
                                      },
                                      children: t_825("lore.models.".concat(l_832.key, ".intro")),
                                    },
                                    l_832.key,
                                  ),
                                }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().colorLine,
                }),
              ],
            })
          );
        },
      },
      {
        key: "information",
        component: () => {
          var e_858, t_859;
          let { t: a_860 } = (0, I18nProviderUseI18n.Bd)(),
            { videos: n_861 } = (0, VideoListContextProvider.X)(),
            [i_862, r_863] = (0, React.useState)(0),
            s_864 = n_861[i_862],
            { lang: o_865 } = (0, I18nProviderUseI18n.PO)(),
            l_866 = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            if (!n_861.length || n_861.length <= 3) return;
            let e_876 = i_862 - 1;
            (e_876 < 0 && (e_876 = n_861.length - 1),
              setTimeout(() => {
                var t_877;
                null == (t_877 = l_866.current) || t_877.swiper.slideToLoop(e_876);
              }, 100));
          }, [n_861]);
          let c_867 = (0, React.useRef)(null),
            d_868 = (0, framerMotionUseInView.W)(c_867, {
              margin: "-50% 0%",
            }),
            __869 = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            var e_878, t_879;
            d_868
              ? null == (e_878 = __869.current) || e_878.play().catch(animeJs321Default())
              : null == (t_879 = __869.current) || t_879.pause();
          }, [d_868]);
          let u_870 = (0, MediaModalStore.C)(),
            m_871 = (0, React.useRef)(null),
            h_872 = (0, framerMotionUseInView.W)(m_871, {
              once: !0,
            }),
            L_873 = (0, React.useRef)(null),
            f_874 = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            if (!h_872) return;
            let e_880 = L_873.current,
              t_881 = f_874.current;
            e_880 &&
              t_881 &&
              (0, animeJsDefault.A)({
                targets: [e_880, t_881],
                opacity: [0, 1],
                translateY: ["2rem", 0],
                duration: 600,
                delay: animeJsDefault.A.stagger(200, {
                  start: 600,
                }),
                easing: "easeOutQuad",
              });
          }, [h_872]);
          let x_875 = (0, React.useRef)(!1);
          return (
            (0, React.useEffect)(() => {
              h_872 &&
                !x_875.current &&
                ((x_875.current = !0),
                Tracking.A.collect("content_view", {
                  group: TrackingGroupsEnum.Z.information,
                }));
            }, [h_872]),
            (0, jsx.jsxs)("div", {
              ref: c_867,
              className: styles11().sectionContainer,
              children: [
                (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                  mode: "wait",
                  children: (0, jsx.jsx)(
                    framerMotion.P.div,
                    {
                      className: styles11().bgVideo,
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
                        ease: "easeInOut",
                      },
                      children:
                        !!s_864 &&
                        (0, jsx.jsx)("video", {
                          ref: __869,
                          onTimeUpdate: () => {
                            __869.current &&
                              (__869.current.currentTime > __869.current.duration - 0.6
                                ? __869.current.classList.add(styles11().fadeOut)
                                : __869.current.classList.remove(styles11().fadeOut));
                          },
                          src:
                            (null == s_864 || null == (e_858 = s_864.content.preview) ? void 0 : e_858.url) ||
                            (null == s_864 ? void 0 : s_864.content.video.url),
                          autoPlay: d_868,
                          muted: !0,
                          loop: !0,
                          poster: null == s_864 ? void 0 : s_864.content.cover.url,
                          playsInline: !0,
                        }),
                    },
                    (null == s_864 ? void 0 : s_864.cid) || "",
                  ),
                }),
                (0, jsx.jsx)(SectionTitle.A, {
                  className: styles11().sectionTitle,
                  titleEn: "information",
                  titleCn: a_860("section.information"),
                  theme: "dark",
                }),
                (0, jsx.jsx)("img", {
                  className: styles11().blurredLogo,
                  src: an_95.src,
                  alt: "",
                }),
                (0, jsx.jsx)("div", {
                  className: styles11().decoLine,
                }),
                (0, jsx.jsxs)("div", {
                  className: styles11().infoVideos,
                  children: [
                    n_861.length > 3
                      ? (0, jsx.jsx)(swiper7.RC, {
                          ref: l_866,
                          loop: !0,
                          speed: 600,
                          slidesPerView: 3,
                          onSlideChange: (e_882) => {
                            if (swiperDefault2()(e_882.realIndex)) return;
                            let t_883 = e_882.realIndex + 1;
                            (t_883 < 0 ? (t_883 = n_861.length - 1) : t_883 >= n_861.length && (t_883 = 0),
                              r_863(t_883));
                          },
                          children: n_861.map((e_884, t_885) =>
                            (0, jsx.jsx)(
                              swiper7.qr,
                              {
                                className: classnamesDefault()(styles11().infoVideo, {
                                  [styles11().active]: i_862 === t_885,
                                }),
                                onClick: () => {
                                  var e_886;
                                  SoundEffects.A.play(SoundEffects.d.common_click);
                                  let a_887 = t_885 - 1;
                                  (a_887 < 0
                                    ? (a_887 = n_861.length - 1)
                                    : a_887 >= n_861.length && (a_887 = 0),
                                    null == (e_886 = l_866.current) || e_886.swiper.slideToLoop(a_887));
                                },
                                children: (0, jsx.jsxs)("div", {
                                  className: styles11().coverBox,
                                  children: [
                                    (0, jsx.jsx)("img", {
                                      src: e_884.content.cover.url,
                                      alt: e_884.content.title,
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles11().mask,
                                    }),
                                  ],
                                }),
                              },
                              e_884.cid,
                            ),
                          ),
                        })
                      : (0, jsx.jsx)("div", {
                          className: styles11().infoVideoListFallback,
                          children: n_861.map((e_888, t_889) =>
                            (0, jsx.jsx)(
                              "div",
                              {
                                className: classnamesDefault()(styles11().infoVideo, {
                                  [styles11().active]: i_862 === t_889,
                                }),
                                onClick: () => {
                                  (SoundEffects.A.play(SoundEffects.d.common_click), r_863(t_889));
                                },
                                children: (0, jsx.jsxs)("div", {
                                  className: styles11().coverBox,
                                  children: [
                                    (0, jsx.jsx)("img", {
                                      src: e_888.content.cover.url,
                                      alt: e_888.content.title,
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles11().mask,
                                    }),
                                  ],
                                }),
                              },
                              e_888.cid,
                            ),
                          ),
                        }),
                    n_861.length > 3 &&
                      (0, jsx.jsxs)("div", {
                        className: styles11().navContainer,
                        children: [
                          (0, jsx.jsxs)("div", {
                            className: classnamesDefault()(styles11().navInfo, styles11().prev),
                            children: [
                              "0".concat(i_862 <= 0 ? n_861.length : i_862, " / 0").concat(n_861.length),
                              (0, jsx.jsx)("span", {
                                className: styles11().tag,
                                children: "LAST",
                              }),
                            ],
                          }),
                          (0, jsx.jsxs)("div", {
                            className: classnamesDefault()(styles11().navInfo, styles11().next),
                            children: [
                              (0, jsx.jsx)("span", {
                                className: styles11().tag,
                                children: "NEXT",
                              }),
                              "0"
                                .concat(i_862 + 2 >= n_861.length + 1 ? 1 : i_862 + 2, " / 0")
                                .concat(n_861.length),
                            ],
                          }),
                          (0, jsx.jsx)("div", {
                            className: classnamesDefault()(styles11().navBtn, styles11().prev),
                            onClick: () => {
                              var e_890;
                              SoundEffects.A.play(SoundEffects.d.arrow_click);
                              let t_891 = i_862 - 1 - 1;
                              (t_891 < 0 && (t_891 = n_861.length + t_891),
                                null == (e_890 = l_866.current) || e_890.swiper.slideToLoop(t_891));
                            },
                          }),
                          (0, jsx.jsx)("div", {
                            className: classnamesDefault()(styles11().navBtn, styles11().next),
                            onClick: () => {
                              var e_892;
                              SoundEffects.A.play(SoundEffects.d.arrow_click);
                              let t_893 = i_862 + 1 - 1;
                              (t_893 >= n_861.length && (t_893 = n_861.length - 1),
                                null == (e_892 = l_866.current) || e_892.swiper.slideToLoop(t_893));
                            },
                          }),
                        ],
                      }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  ref: m_871,
                  className: styles11().infoCurrent,
                  children: [
                    (0, jsx.jsx)("div", {
                      ref: L_873,
                      children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                        mode: "wait",
                        children: (0, jsx.jsxs)(
                          React.Fragment,
                          {
                            children: [
                              (0, jsx.jsxs)(framerMotion.P.div, {
                                className: styles11().tagAndDate,
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
                                  ease: "easeInOut",
                                },
                                children: [
                                  !!(null == s_864 ? void 0 : s_864.content.cate) &&
                                    (0, jsx.jsx)("span", {
                                      className: styles11().tag,
                                      children: a_860("information.cate.".concat(s_864.content.cate)),
                                    }),
                                  !!s_864 &&
                                    (0, jsx.jsx)("span", {
                                      className: styles11().date,
                                      children: dayjsDefault()(s_864.content.displayTime).format(
                                        a_860("information.displayTimeFormat"),
                                      ),
                                    }),
                                ],
                              }),
                              (0, jsx.jsx)(
                                ao_97,
                                {
                                  title: (null == s_864 ? void 0 : s_864.content.title) || "",
                                  textIndent: /^[《【（「『]/.test(
                                    (null == s_864 ? void 0 : s_864.content.title) || "",
                                  )
                                    ? "-0.5em"
                                    : void 0,
                                },
                                null != (t_859 = null == s_864 ? void 0 : s_864.cid) ? t_859 : "",
                              ),
                            ],
                          },
                          (null == s_864 ? void 0 : s_864.cid) || "",
                        ),
                      }),
                    }),
                    (0, jsx.jsxs)("div", {
                      className: styles11().buttons,
                      ref: f_874,
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles11().playBtn,
                          onClick: () => {
                            var e_894;
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              s_864 &&
                                (null == (e_894 = __869.current) || e_894.pause(),
                                u_870(s_864.content.title || "", s_864.content.video, () => {
                                  var e_895;
                                  null == (e_895 = __869.current) || e_895.play();
                                })));
                          },
                        }),
                        (0, jsx.jsx)(module70246.A, {
                          className: styles11().button,
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              window.open("/".concat(o_865, "/video"), "_blank"));
                          },
                          children: a_860("information.more"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
      },
      {
        key: "calendar",
        component: () => {
          let {
              data: {},
            } = (0, I18nProviderUseI18n.PO)(),
            e_896 = (0, React.useRef)(null),
            t_897 = (0, React.useRef)(null),
            [a_898, n_899] = (0, React.useState)("normal"),
            [i_900, r_901] = (0, React.useState)({
              width: 0,
            }),
            s_902 = (0, React.useRef)(null),
            o_903 = (0, React.useRef)(null),
            l_904 = (0, React.useRef)(null),
            c_905 = (0, React.useRef)(null),
            d_906 = (0, framerMotionUseInView.W)(e_896, {
              once: !0,
              margin: "-20% 0%",
            }),
            __907 = (0, useOrientation.M)(),
            { loaded: u_908 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
          ((0, React.useEffect)(() => {
            if (u_908 && d_906) {
              let t_910 = e_896.current,
                a_911 = animeJsDefault.A.timeline();
              a_911.add({
                targets: {},
                duration: 300,
              });
              let n_912 =
                "portrait" !== __907
                  ? [
                      t_910.querySelector(".".concat(styles17().stickContainer)),
                      t_910.querySelector(".".concat(styles17().calendar)),
                    ]
                  : [
                      t_910.querySelector(".".concat(styles17().stickContainer)),
                      t_910.querySelector(".".concat(styles17().calendarScroll)),
                    ];
              (0, TextRevealAnimations.iI)(n_912, a_911);
            }
          }, [u_908, d_906, __907]),
            (0, React.useEffect)(() => {
              let e_913 = s_902.current,
                a_914 = t_897.current,
                i_915 = l_904.current,
                d_916 = c_905.current;
              if (!e_913 || !a_914) return;
              let __917 = () => {
                  var e_923, t_924;
                  let n_925 = a_914.getBoundingClientRect(),
                    s_926 =
                      null != (e_923 = null == i_915 ? void 0 : i_915.getBoundingClientRect().height)
                        ? e_923
                        : 0,
                    l_927 =
                      null != (t_924 = null == d_916 ? void 0 : d_916.getBoundingClientRect().height)
                        ? t_924
                        : 0,
                    c_928 = o_903.current;
                  (c_928 &&
                    s_926 + l_927 > 0 &&
                    (c_928.style.marginTop = "".concat(s_926 + l_927 + 10, "px")),
                    r_901({
                      width: n_925.width,
                    }));
                },
                u_918 = () => {
                  let t_929 = e_913.getBoundingClientRect(),
                    i_930 = window.scrollY,
                    s_931 = i_930 + t_929.top,
                    l_932 = s_931 + t_929.height,
                    c_933 = a_914.getBoundingClientRect().height;
                  if (i_930 < s_931) return void n_899("normal");
                  i_930 + c_933 < l_932
                    ? (r_901((e_934) => {
                        var t_935;
                        return {
                          width: e_934.width || a_914.getBoundingClientRect().width,
                          left: "".concat(
                            null == (t_935 = o_903.current) ? void 0 : t_935.getBoundingClientRect().left,
                            "px",
                          ),
                        };
                      }),
                      n_899("fixed"))
                    : n_899("bottom");
                },
                m_919 = 0,
                h_920 = !1,
                p_921 = () => {
                  ((h_920 = !1), __917(), u_918());
                },
                v_922 = () => {
                  h_920 || ((h_920 = !0), (m_919 = window.requestAnimationFrame(p_921)));
                };
              return (
                p_921(),
                null == i_915 || i_915.addEventListener("load", v_922),
                null == d_916 || d_916.addEventListener("load", v_922),
                window.addEventListener("scroll", v_922, {
                  passive: !0,
                }),
                window.addEventListener("resize", v_922),
                () => {
                  (null == i_915 || i_915.removeEventListener("load", v_922),
                    null == d_916 || d_916.removeEventListener("load", v_922),
                    window.removeEventListener("scroll", v_922),
                    window.removeEventListener("resize", v_922),
                    m_919 && cancelAnimationFrame(m_919));
                }
              );
            }, []));
          let { images: m_909 } = (0, I18nProviderUseI18n.PO)();
          return (0, jsx.jsx)("div", {
            className: styles17().sectionContainer,
            ref: e_896,
            children: (0, jsx.jsxs)("div", {
              className: styles17().calendarContainer,
              ref: s_902,
              children: [
                (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles17().stickContainer, {
                    [styles17().stickFixed]: "fixed" === a_898,
                    [styles17().stickBottom]: "bottom" === a_898,
                  }),
                  ref: t_897,
                  style: "fixed" === a_898 ? i_900 : void 0,
                  children: [
                    (0, jsx.jsx)("div", {
                      style: {
                        position: "relative",
                      },
                      children: (0, jsx.jsx)("img", {
                        ref: l_904,
                        className: styles17().title,
                        src: m_909["calendar.title"],
                        alt: "calendar.title",
                      }),
                    }),
                    (0, jsx.jsx)("img", {
                      ref: c_905,
                      className: styles17().timeline,
                      src: m_909["calendar.timeline"],
                      alt: "calendar.timeline",
                    }),
                  ],
                }),
                (0, jsx.jsx)("img", {
                  ref: o_903,
                  className: styles17().calendar,
                  src: m_909["calendar.content"],
                  alt: "calendar.content",
                }),
                (0, jsx.jsx)(nextJsRuntimeDefault(), {
                  direction: "x",
                  scrollByDrag: !0,
                  scrollBar: !1,
                  className: styles17().calendarScroll,
                  children: (0, jsx.jsx)("div", {
                    className: styles17().content,
                    children: (0, jsx.jsxs)("div", {
                      className: styles17().scrollContainer,
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles17().timeScrollContainer,
                          children: [
                            (0, jsx.jsx)("img", {
                              className: styles17().timelineScroll,
                              src: m_909["calendar.timeline"],
                              alt: "calendar.timeline",
                            }),
                            " ",
                          ],
                        }),
                        (0, jsx.jsx)("img", {
                          className: styles17().calendarH5,
                          src: m_909["calendar.content"],
                          alt: "calendar.content",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
      },
      {
        key: "gameplay",
        component: () => {
          let { t: e_936 } = (0, I18nProviderUseI18n.Bd)(),
            t_937 = (0, React.useRef)(null),
            a_938 = (0, framerMotionUseInView.W)(t_937, {
              once: !0,
              margin: "-30% 0%",
            }),
            { loaded: n_939 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
          (0, React.useEffect)(() => {
            if (n_939 && a_938) {
              let e_941 = t_937.current,
                a_942 = animeJsDefault.A.timeline();
              a_942.add({
                targets: {},
                duration: 300,
              });
              let n_943 = [
                e_941.querySelector(".".concat(styles13().decoLeft)),
                e_941.querySelector(".".concat(styles13().itemIcon)),
              ];
              (0, TextRevealAnimations.iI)(n_943, a_942);
            }
          }, [n_939, a_938]);
          let i_940 = (0, React.useMemo)(
            () =>
              GameplayItemsText.g.map((t_944) => ({
                ...t_944,
                title: e_936(t_944.titleKey),
                description: e_936(t_944.descriptionKey),
              })),
            [e_936],
          );
          return (0, jsx.jsxs)("div", {
            className: styles13().sectionContainer,
            ref: t_937,
            children: [
              (0, jsx.jsx)(module44990.D, {
                children: (0, jsx.jsx)(ak_102, {}),
              }),
              (0, jsx.jsx)(SectionTitle.A, {
                className: styles13().pageTitle,
                titleEn: "gameplay",
                titleCn: e_936("section.gameplay"),
              }),
              (0, jsx.jsxs)("div", {
                className: classnamesDefault()(styles13().decoLeft, a_938 && styles13().active),
                children: [
                  (0, jsx.jsx)(SvgIcon92182.A, {
                    className: styles13().title,
                  }),
                  (0, jsx.jsx)(SvgIcon92418.A, {
                    className: styles13().blocks,
                  }),
                ],
              }),
              (0, jsx.jsx)(aw_101, {
                items: i_940,
                inView: a_938,
                type: "gameplay",
              }),
              (0, jsx.jsx)("div", {
                className: styles13().itemIcon,
                children: (0, jsx.jsx)(SvgIcon81222.A, {
                  className: styles13().icon,
                }),
              }),
            ],
          });
        },
      },
      {
        key: "aic",
        component: () => {
          let { t: e_945 } = (0, I18nProviderUseI18n.Bd)(),
            {
              data: { blueprint: t_946 },
            } = (0, I18nProviderUseI18n.PO)(),
            a_947 = (0, React.useMemo)(
              () =>
                AicItemsText.j.map((t_951) => ({
                  ...t_951,
                  image: t_951.image.src,
                  title: e_945(t_951.titleKey),
                  description: e_945(t_951.descriptionKey),
                })),
              [e_945],
            ),
            n_948 = (0, React.useRef)(null),
            i_949 = (0, framerMotionUseInView.W)(n_948, {
              once: !0,
            }),
            { loaded: r_950 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
          return (
            (0, React.useEffect)(() => {
              if (r_950 && i_949) {
                let e_952 = n_948.current,
                  t_953 = animeJsDefault.A.timeline();
                t_953.add({
                  targets: {},
                  duration: 300,
                });
                let a_954 = [
                  e_952.querySelector(".".concat(styles16().decoLeft)),
                  e_952.querySelector(".".concat(styles16().itemIcon)),
                ];
                (0, TextRevealAnimations.iI)(a_954, t_953);
              }
            }, [r_950, i_949]),
            (0, jsx.jsxs)("div", {
              className: styles16().sectionContainer,
              ref: n_948,
              children: [
                (0, jsx.jsx)(SvgIcon91251.A, {
                  className: styles16().h5Icon,
                }),
                (0, jsx.jsx)(SectionTitle.A, {
                  keepTitleH5: !0,
                  className: styles16().pageTitle,
                  titleEn: "aic",
                  titleCn: e_945("section.aic"),
                  titleClassName: styles16().aicTitle,
                }),
                (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles16().decoLeft, i_949 && styles16().active),
                  children: [
                    (0, jsx.jsx)(SvgIcon92182.A, {
                      className: styles16().title,
                    }),
                    (0, jsx.jsx)(SvgIcon92418.A, {
                      className: styles16().blocks,
                    }),
                  ],
                }),
                (0, jsx.jsx)(aw_101, {
                  items: a_947,
                  inView: i_949,
                  type: "aic",
                }),
                (0, jsx.jsx)("div", {
                  className: styles16().itemIcon,
                  children: (0, jsx.jsx)(eo_28, {
                    className: styles16().icon,
                  }),
                }),
              ],
            })
          );
        },
        hideNav: !0,
      },
      {
        key: "notice",
        component: () => {
          let { images: e_955 } = (0, I18nProviderUseI18n.PO)(),
            { bulletins: t_956 } = (0, BulletinListContextProvider.b)(),
            { lang: a_957 } = (0, I18nProviderUseI18n.PO)(),
            { t: n_958 } = (0, I18nProviderUseI18n.Bd)(),
            i_959 = (0, React.useRef)(null),
            r_960 = (0, framerMotionUseInView.W)(i_959, {
              once: !0,
              margin: "-40% 0%",
            }),
            [s_961, o_962] = (0, React.useState)(0),
            l_963 = Math.ceil(t_956.length / 2),
            c_964 = (0, React.useCallback)(() => {
              window.open("/".concat(a_957, "/news"), "_blank");
            }, [a_957]),
            { loaded: d_965 } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)(),
            __966 = r_960 && d_965;
          (0, module9995.p)(() => {
            let e_968 = i_959.current;
            [
              e_968.querySelector(".".concat(styles15().titleContainer)),
              e_968.querySelector(".".concat(styles15().carouselPagination)),
              e_968.querySelector(".".concat(styles15().detailButton)),
              e_968.querySelector(
                ".".concat(styles15().h5ContentContainer, " .").concat(styles15().h5ContentWrapper),
              ),
              e_968.querySelector(
                ".".concat(styles15().h5ContentContainer, " .").concat(styles15().pagination),
              ),
              e_968.querySelector(
                ".".concat(styles15().h5ContentContainer, " .").concat(styles15().detailButton),
              ),
            ].forEach((e_969) => {
              e_969 && (e_969.style.opacity = "0");
            });
          });
          let u_967 = (0, useOrientation.M)();
          return (
            (0, React.useEffect)(() => {
              if (__966) {
                let e_970 = i_959.current,
                  t_971 = animeJsDefault.A.timeline();
                t_971.add({
                  targets: {},
                  duration: 100,
                });
                let a_972 = [
                  e_970.querySelector(".".concat(styles15().titleContainer)),
                  e_970.querySelector(".".concat(styles15().carouselPagination)),
                  e_970.querySelector(".".concat(styles15().detailButton)),
                  {
                    ele: e_970.querySelector(
                      ".".concat(styles15().h5ContentContainer, " .").concat(styles15().h5ContentWrapper),
                    ),
                    portrait: !0,
                  },
                  {
                    ele: e_970.querySelector(
                      ".".concat(styles15().h5ContentContainer, " .").concat(styles15().pagination),
                    ),
                    portrait: !0,
                  },
                  {
                    ele: e_970.querySelector(
                      ".".concat(styles15().h5ContentContainer, " .").concat(styles15().detailButton),
                    ),
                    portrait: !0,
                  },
                ];
                (t_971.add(
                  {
                    targets: [e_970.querySelector(".".concat(styles15().carouselContentContainer))],
                    translateX: ["100%", "0"],
                    opacity: [0, 1],
                    duration: 300,
                    easing: "easeOutQuad",
                  },
                  300,
                ),
                  (0, TextRevealAnimations.iI)(a_972, t_971, "portrait" === u_967));
              }
            }, [__966, d_965]),
            (0, jsx.jsxs)("div", {
              className: styles15().sectionContainer,
              ref: i_959,
              children: [
                (0, jsx.jsx)(SectionTitle.A, {
                  className: styles15().pageTitle,
                  titleEn: "notice",
                  titleCn: n_958("section.notice"),
                }),
                __966 &&
                  (0, jsx.jsxs)(framerMotion.P.div, {
                    className: styles15().leftDeco,
                    initial: {
                      clipPath: "polygon(-100% 0%, 200% 0%, 200% 0, -100% 0%)",
                    },
                    animate: {
                      clipPath: "polygon(-100% 0%, 200% 0%, 200% 100%, -100% 100%)",
                    },
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                    children: [
                      (0, jsx.jsx)("div", {
                        className: styles15().wrapper,
                        children: (0, jsx.jsx)(framerMotion.P.div, {
                          ...aG_109,
                          className: styles15().bottomPart,
                        }),
                      }),
                      (0, jsx.jsx)(framerMotion.P.div, {
                        ...aG_109,
                        className: styles15().topPart,
                      }),
                      (0, jsx.jsxs)(framerMotion.P.div, {
                        className: styles15().textWrapper,
                        ...aG_109,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.3,
                        },
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles15().latest,
                            children: n_958("common.latest"),
                          }),
                          (0, jsx.jsx)("div", {
                            className: styles15().divider,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, jsx.jsx)(aR_105, {
                  className: styles15().carouselContainer,
                  containerClassName: styles15().carouselContentContainer,
                  items: t_956,
                  loop: !1,
                  autoPlay: !1,
                  renderer: (e_973) => {
                    let { item: t_974, active: a_975, jumpTo: n_976, index: i_977 } = e_973;
                    return (0, jsx.jsx)(aT_106, {
                      index: i_977,
                      item: t_974,
                      active: a_975,
                      jumpTo: n_976,
                    });
                  },
                  paginationRenderer: (e_978) => {
                    let {
                      items: t_979,
                      currentIndex: a_980,
                      disablePrev: n_981,
                      disableNext: i_982,
                      jumpTo: r_983,
                    } = e_978;
                    return (0, jsx.jsxs)(jsx.Fragment, {
                      children: [
                        (0, jsx.jsx)(aD_107, {
                          items: t_979,
                          currentIndex: a_980,
                          disablePrev: null != n_981 && n_981,
                          disableNext: null != i_982 && i_982,
                          jumpTo: r_983,
                          handleList: c_964,
                        }),
                        (0, jsx.jsx)(aF_108, {
                          item: t_979[a_980],
                        }),
                      ],
                    });
                  },
                }),
                (0, jsx.jsxs)("div", {
                  className: styles15().h5ContentContainer,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles15().h5ContentWrapper,
                      children: (0, jsx.jsx)(
                        framerMotion.P.div,
                        {
                          initial: {
                            opacity: 0,
                            x: "-5rem",
                          },
                          animate: {
                            opacity: 1,
                            x: 0,
                          },
                          exit: {
                            opacity: 0,
                            x: "5rem",
                          },
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                          className: styles15().bulletinList,
                          children: t_956.slice(2 * s_961, (s_961 + 1) * 2).map((t_984, a_985) => {
                            var i_986;
                            return (0, jsx.jsxs)(
                              "div",
                              {
                                className: styles15().bulletinItem,
                                children: [
                                  (0, jsx.jsx)("div", {
                                    className: styles15().image,
                                    onClick: () => {
                                      (SoundEffects.A.play(SoundEffects.d.common_click),
                                        window.open("/news/".concat(t_984.cid), "_blank"));
                                    },
                                    children: (0, jsx.jsx)("img", {
                                      src: t_984.cover
                                        ? t_984.cover
                                        : null != (i_986 = e_955["bulletin.".concat(t_984.tab)])
                                          ? i_986
                                          : void 0,
                                      alt: t_984.title,
                                    }),
                                  }),
                                  (0, jsx.jsxs)("div", {
                                    className: styles15().subtitle,
                                    children: [
                                      (0, jsx.jsx)("span", {
                                        className: styles15().type,
                                        children: n_958("notice.tab.".concat(t_984.tab)),
                                      }),
                                      (0, jsx.jsx)("span", {
                                        className: styles15().date,
                                        children: dayjsDefault()(1e3 * t_984.displayTime).format(
                                          n_958("information.displayTimeFormat"),
                                        ),
                                      }),
                                    ],
                                  }),
                                  (0, jsx.jsx)("div", {
                                    className: styles15().title,
                                    children: t_984.title,
                                  }),
                                ],
                              },
                              a_985,
                            );
                          }),
                        },
                        s_961,
                      ),
                    }),
                    (0, jsx.jsx)(Pagination.Ay, {
                      className: styles15().pagination,
                      pagination: "number",
                      current: s_961,
                      total: l_963,
                      prev: () => {
                        s_961 > 0 && o_962(s_961 - 1);
                      },
                      next: () => {
                        s_961 < l_963 - 1 && o_962(s_961 + 1);
                      },
                    }),
                    (0, jsx.jsx)(module70246.A, {
                      className: styles15().detailButton,
                      onClick: c_964,
                      children: n_958("notice.detail"),
                    }),
                  ],
                }),
              ],
            })
          );
        },
      },
    ],
    aV_111 = [
      () => e0_58(webpackRequire(93297).A.src),
      () => e0_58(webpackRequire(84343).A.src),
      () => e0_58(webpackRequire(29269).A.src),
      () => e0_58(webpackRequire(11502).A.src),
      () => e0_58(webpackRequire(75583).A.src),
      () => e0_58(webpackRequire(97916).A.src),
      () => e0_58(webpackRequire(80689).A.src),
      () => e0_58(webpackRequire(22519).A.src),
      () => e0_58(webpackRequire(60459).A.src),
      () => e0_58(webpackRequire(9184).A.src),
      () => e0_58(webpackRequire(1841).A.src),
      () => e0_58(webpackRequire(79755).A.src),
      () => e0_58(webpackRequire(63875).A.src),
      () => e0_58(webpackRequire(92880).A.src),
      () => e0_58(webpackRequire(26673).A.src),
      () => e0_58(webpackRequire(78074).A.src),
      () => e0_58(webpackRequire(73803).A.src),
      () => e0_58(webpackRequire(3147).A.src),
      () => e0_58(webpackRequire(49929).A.src),
      () => e0_58(webpackRequire(35300).A.src),
      () => e0_58(webpackRequire(93577).A.src),
      () => e0_58(webpackRequire(89808).A.src),
      () => e0_58(webpackRequire(82405).A.src),
      () => e0_58(webpackRequire(57236).A.src),
      () => e0_58(webpackRequire(32343).A.src),
      () => e0_58(webpackRequire(52151).A.src),
      () => e0_58(webpackRequire(90746).A.src),
      () => e0_58(webpackRequire(37602).A.src),
      () => e0_58(webpackRequire(34573).A.src),
      () => e0_58(webpackRequire(71494).A.src),
      () => e0_58(webpackRequire(93247).A.src),
      () => e0_58(webpackRequire(48056).A.src),
      () => e0_58(webpackRequire(80753).A.src),
      () => t__70.setup(),
    ],
    aK_112 = (e_987) => {
      let { children: t_988 } = e_987,
        {
          components: { footer: a_989 },
        } = (0, I18nProviderUseI18n.PO)(),
        [n_990, i_991] = (0, React.useState)(!0);
      return (
        (0, React.useEffect)(() => {
          let e_992 = () => {
            ((0, RootFontSizeScaler.Z)(),
              setTimeout(() => {
                e_992();
              }, 1e3));
          };
          (SiteUtils.isServer || e_992(),
            SiteUtils.isServer ||
              window.addEventListener(
                "resize",
                (0, lodashThrottle.A)(() => {
                  (0, RootFontSizeScaler.Z)();
                }, 200),
              ));
        }, []),
        (0, jsx.jsxs)(jsx.Fragment, {
          children: [
            (0, jsx.jsxs)("div", {
              className: styles18().sectionViewer,
              children: [
                (0, jsx.jsx)(e$_57, {
                  sections: aU_110,
                  children: t_988,
                }),
                (0, jsx.jsx)(a_989, {}),
              ],
            }),
            n_990 &&
              (0, jsx.jsx)(LoadingScreenFirstLoadProgressLoadedStore.E, {
                tasks: aV_111,
                onFinished: () => i_991(!1),
              }),
            (0, jsx.jsxs)("div", {
              className: styles18().modalLayer,
              children: [
                (0, jsx.jsx)(U_22, {}),
                (0, jsx.jsx)(UserModalTextLinks.Ay, {}),
                (0, jsx.jsx)(MediaModalStore.A, {}),
                (0, jsx.jsx)(UserModalAccountMenu.Ay, {}),
              ],
            }),
          ],
        })
      );
    };
};
