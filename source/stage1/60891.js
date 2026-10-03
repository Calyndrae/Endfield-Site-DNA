// SvgTextFit (getBBox-based sizing) — module 60891 from 4231-53da7c4de7468a06
// module 60891 from 4231-53da7c4de7468a06.js
// deps: 36849, 89221, 97028, 10712, 96464, 49421, 60479, 98731, 18925, 85582, 72396, 63257, 75795, 26408, 61914, 28851
const module_60891 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  let r_1, n_2;
  webpackRequire.d(webpackExports, {
    L: () => Y_29,
  });
  var framerMotion = webpackRequire(36849),
    framerMotion2 = webpackRequire(89221),
    React = webpackRequire(97028),
    framerMotion3 = webpackRequire(10712),
    framerMotion4 = webpackRequire(96464);
  function u_3(e_30, t_31) {
    let i_32,
      r_33 = () => {
        let { currentTime: r_34 } = t_31,
          n_35 = (null === r_34 ? 0 : r_34.value) / 100;
        (i_32 !== n_35 && e_30(n_35), (i_32 = n_35));
      };
    return (framerMotion4.Gt.preUpdate(r_33, !0), () => (0, framerMotion4.WG)(r_33));
  }
  var framerMotion5 = webpackRequire(49421),
    framerMotion6 = webpackRequire(60479),
    framerMotion7 = webpackRequire(98731);
  let h_4 = new WeakMap(),
    v_5 = (e_36, t_37, i_38) => (r_39, n_40) =>
      n_40 && n_40[0]
        ? n_40[0][e_36 + "Size"]
        : (0, framerMotion6.x)(r_39) && "getBBox" in r_39
          ? r_39.getBBox()[t_37]
          : r_39[i_38],
    m_6 = v_5("inline", "width", "offsetWidth"),
    g_7 = v_5("block", "height", "offsetHeight");
  function y_8({ target: e_41, borderBoxSize: t_42 }) {
    h_4.get(e_41)?.forEach((i_43) => {
      i_43(e_41, {
        get width() {
          return m_6(e_41, t_42);
        },
        get height() {
          return g_7(e_41, t_42);
        },
      });
    });
  }
  function w_9(e_44) {
    e_44.forEach(y_8);
  }
  let b_10 = new Set();
  var framerMotion8 = webpackRequire(18925),
    framerMotion9 = webpackRequire(85582);
  let x_11 = () => ({
      current: 0,
      offset: [],
      progress: 0,
      scrollLength: 0,
      targetOffset: 0,
      targetLength: 0,
      containerLength: 0,
      velocity: 0,
    }),
    T_12 = () => ({
      time: 0,
      x: x_11(),
      y: x_11(),
    }),
    __13 = {
      x: {
        length: "Width",
        position: "Left",
      },
      y: {
        length: "Height",
        position: "Top",
      },
    };
  function P_14(e_45, t_46, i_47, r_48) {
    let n_49 = i_47[t_46],
      { length: s_50, position: o_51 } = __13[t_46],
      a_52 = n_49.current,
      l_53 = i_47.time;
    ((n_49.current = e_45[`scroll${o_51}`]),
      (n_49.scrollLength = e_45[`scroll${s_50}`] - e_45[`client${s_50}`]),
      (n_49.offset.length = 0),
      (n_49.offset[0] = 0),
      (n_49.offset[1] = n_49.scrollLength),
      (n_49.progress = (0, framerMotion8.q)(0, n_49.scrollLength, n_49.current)));
    let d_54 = r_48 - l_53;
    n_49.velocity = d_54 > 50 ? 0 : (0, framerMotion9.f)(n_49.current - a_52, d_54);
  }
  var framerMotion10 = webpackRequire(72396),
    framerMotion11 = webpackRequire(63257),
    framerMotion12 = webpackRequire(75795),
    framerMotion13 = webpackRequire(26408);
  let A_15 = {
    start: 0,
    center: 0.5,
    end: 1,
  };
  function L_16(e_55, t_56, i_57 = 0) {
    let r_58 = 0;
    if ((e_55 in A_15 && (e_55 = A_15[e_55]), "string" == typeof e_55)) {
      let t_59 = parseFloat(e_55);
      e_55.endsWith("px")
        ? (r_58 = t_59)
        : e_55.endsWith("%")
          ? (e_55 = t_59 / 100)
          : e_55.endsWith("vw")
            ? (r_58 = (t_59 / 100) * document.documentElement.clientWidth)
            : e_55.endsWith("vh")
              ? (r_58 = (t_59 / 100) * document.documentElement.clientHeight)
              : (e_55 = t_59);
    }
    return ("number" == typeof e_55 && (r_58 = t_56 * e_55), i_57 + r_58);
  }
  let I_17 = [0, 0],
    j_18 = {
      All: [
        [0, 0],
        [1, 1],
      ],
    },
    z_19 = {
      x: 0,
      y: 0,
    },
    D_20 = new WeakMap(),
    N_21 = new WeakMap(),
    V_22 = new WeakMap(),
    G_23 = (e_60) => (e_60 === document.scrollingElement ? window : e_60);
  function H_24(e_61, { container: t_63 = document.scrollingElement, ...i_62 } = {}) {
    if (!t_63) return framerMotion3.l;
    let s_64 = V_22.get(t_63);
    s_64 || ((s_64 = new Set()), V_22.set(t_63, s_64));
    let o_65 = (function (e_67, t_68, i_69, r_70 = {}) {
      return {
        measure: (t_71) => {
          (!(function (e_72, t_73 = e_72, i_74) {
            if (((i_74.x.targetOffset = 0), (i_74.y.targetOffset = 0), t_73 !== e_72)) {
              let r_75 = t_73;
              for (; r_75 && r_75 !== e_72;)
                ((i_74.x.targetOffset += r_75.offsetLeft),
                  (i_74.y.targetOffset += r_75.offsetTop),
                  (r_75 = r_75.offsetParent));
            }
            ((i_74.x.targetLength = t_73 === e_72 ? t_73.scrollWidth : t_73.clientWidth),
              (i_74.y.targetLength = t_73 === e_72 ? t_73.scrollHeight : t_73.clientHeight),
              (i_74.x.containerLength = e_72.clientWidth),
              (i_74.y.containerLength = e_72.clientHeight));
          })(e_67, r_70.target, i_69),
            P_14(e_67, "x", i_69, t_71),
            P_14(e_67, "y", i_69, t_71),
            (i_69.time = t_71),
            (r_70.offset || r_70.target) &&
              (function (e_76, t_77, i_78) {
                let { offset: r_79 = j_18.All } = i_78,
                  { target: n_80 = e_76, axis: s_81 = "y" } = i_78,
                  o_82 = "y" === s_81 ? "height" : "width",
                  a_83 =
                    n_80 !== e_76
                      ? (function (e_88, t_89) {
                          let i_90 = {
                              x: 0,
                              y: 0,
                            },
                            r_91 = e_88;
                          for (; r_91 && r_91 !== t_89;)
                            if ((0, framerMotion13.s)(r_91))
                              ((i_90.x += r_91.offsetLeft),
                                (i_90.y += r_91.offsetTop),
                                (r_91 = r_91.offsetParent));
                            else if ("svg" === r_91.tagName) {
                              let e_92 = r_91.getBoundingClientRect(),
                                t_93 = (r_91 = r_91.parentElement).getBoundingClientRect();
                              ((i_90.x += e_92.left - t_93.left), (i_90.y += e_92.top - t_93.top));
                            } else if (r_91 instanceof SVGGraphicsElement) {
                              let { x: e_94, y: t_95 } = r_91.getBBox();
                              ((i_90.x += e_94), (i_90.y += t_95));
                              let n_96 = null,
                                s_97 = r_91.parentNode;
                              for (; !n_96;)
                                ("svg" === s_97.tagName && (n_96 = s_97), (s_97 = r_91.parentNode));
                              r_91 = n_96;
                            } else break;
                          return i_90;
                        })(n_80, e_76)
                      : z_19,
                  l_84 =
                    n_80 === e_76
                      ? {
                          width: e_76.scrollWidth,
                          height: e_76.scrollHeight,
                        }
                      : "getBBox" in n_80 && "svg" !== n_80.tagName
                        ? n_80.getBBox()
                        : {
                            width: n_80.clientWidth,
                            height: n_80.clientHeight,
                          },
                  d_85 = {
                    width: e_76.clientWidth,
                    height: e_76.clientHeight,
                  };
                t_77[s_81].offset.length = 0;
                let u_86 = !t_77[s_81].interpolate,
                  c_87 = r_79.length;
                for (let e_98 = 0; e_98 < c_87; e_98++) {
                  let i_99 = (function (e_100, t_101, i_102, r_103) {
                    let n_104 = Array.isArray(e_100) ? e_100 : I_17,
                      s_105 = 0,
                      o_106 = 0;
                    return (
                      "number" == typeof e_100
                        ? (n_104 = [e_100, e_100])
                        : "string" == typeof e_100 &&
                          (n_104 = (e_100 = e_100.trim()).includes(" ")
                            ? e_100.split(" ")
                            : [e_100, A_15[e_100] ? e_100 : "0"]),
                      (s_105 = L_16(n_104[0], i_102, r_103)) - L_16(n_104[1], t_101)
                    );
                  })(r_79[e_98], d_85[o_82], l_84[o_82], a_83[s_81]);
                  (u_86 || i_99 === t_77[s_81].interpolatorOffsets[e_98] || (u_86 = !0),
                    (t_77[s_81].offset[e_98] = i_99));
                }
                (u_86 &&
                  ((t_77[s_81].interpolate = (0, framerMotion10.G)(
                    t_77[s_81].offset,
                    (0, framerMotion11.Z)(r_79),
                    {
                      clamp: !1,
                    },
                  )),
                  (t_77[s_81].interpolatorOffsets = [...t_77[s_81].offset])),
                  (t_77[s_81].progress = (0, framerMotion12.q)(
                    0,
                    1,
                    t_77[s_81].interpolate(t_77[s_81].current),
                  )));
              })(e_67, i_69, r_70));
        },
        notify: () => t_68(i_69),
      };
    })(t_63, e_61, T_12(), i_62);
    if ((s_64.add(o_65), !D_20.has(t_63))) {
      let e_107 = () => {
          for (let e_111 of s_64) e_111.measure(framerMotion4.uv.timestamp);
          framerMotion4.Gt.preUpdate(i_108);
        },
        i_108 = () => {
          for (let e_112 of s_64) e_112.notify();
        },
        o_109 = () => framerMotion4.Gt.read(e_107);
      D_20.set(t_63, o_109);
      let a_110 = G_23(t_63);
      (window.addEventListener("resize", o_109, {
        passive: !0,
      }),
        t_63 !== document.documentElement &&
          N_21.set(
            t_63,
            "function" == typeof t_63
              ? (b_10.add(t_63),
                n_2 ||
                  ((n_2 = () => {
                    let e_113 = {
                      get width() {
                        return window.innerWidth;
                      },
                      get height() {
                        return window.innerHeight;
                      },
                    };
                    b_10.forEach((t_114) => t_114(e_113));
                  }),
                  window.addEventListener("resize", n_2)),
                () => {
                  (b_10.delete(t_63),
                    b_10.size ||
                      "function" != typeof n_2 ||
                      (window.removeEventListener("resize", n_2), (n_2 = void 0)));
                })
              : (function (e_115, t_116) {
                  r_1 || ("undefined" != typeof ResizeObserver && (r_1 = new ResizeObserver(w_9)));
                  let i_117 = (0, framerMotion7.K)(e_115);
                  return (
                    i_117.forEach((e_118) => {
                      let i_119 = h_4.get(e_118);
                      (i_119 || ((i_119 = new Set()), h_4.set(e_118, i_119)),
                        i_119.add(t_116),
                        r_1?.observe(e_118));
                    }),
                    () => {
                      i_117.forEach((e_120) => {
                        let i_121 = h_4.get(e_120);
                        (i_121?.delete(t_116), i_121?.size || r_1?.unobserve(e_120));
                      });
                    }
                  );
                })(t_63, o_109),
          ),
        a_110.addEventListener("scroll", o_109, {
          passive: !0,
        }),
        o_109());
    }
    let a_66 = D_20.get(t_63);
    return (
      framerMotion4.Gt.read(a_66, !1, !0),
      () => {
        (0, framerMotion4.WG)(a_66);
        let e_122 = V_22.get(t_63);
        if (!e_122 || (e_122.delete(o_65), e_122.size)) return;
        let i_123 = D_20.get(t_63);
        (D_20.delete(t_63),
          i_123 &&
            (G_23(t_63).removeEventListener("scroll", i_123),
            N_21.get(t_63)?.(),
            window.removeEventListener("resize", i_123)));
      }
    );
  }
  let B_25 = new Map();
  function R_26({ source: e_124, container: t_125, ...i_126 }) {
    let { axis: r_127 } = i_126;
    e_124 && (t_125 = e_124);
    let n_128 = B_25.get(t_125) ?? new Map();
    B_25.set(t_125, n_128);
    let s_129 = i_126.target ?? "self",
      o_130 = n_128.get(s_129) ?? {},
      a_131 = r_127 + (i_126.offset ?? []).join(",");
    return (
      o_130[a_131] ||
        (o_130[a_131] =
          !i_126.target && (0, framerMotion5.J)()
            ? new ScrollTimeline({
                source: t_125,
                axis: r_127,
              })
            : (function (e_132) {
                let t_133 = {
                    value: 0,
                  },
                  i_134 = H_24((i_135) => {
                    t_133.value = 100 * i_135[e_132.axis].progress;
                  }, e_132);
                return {
                  currentTime: t_133,
                  cancel: i_134,
                };
              })({
                container: t_125,
                ...i_126,
              })),
      o_130[a_131]
    );
  }
  var framerMotion14 = webpackRequire(61914),
    framerMotion15 = webpackRequire(28851);
  let $_27 = () => ({
      scrollX: (0, framerMotion.OQ)(0),
      scrollY: (0, framerMotion.OQ)(0),
      scrollXProgress: (0, framerMotion.OQ)(0),
      scrollYProgress: (0, framerMotion.OQ)(0),
    }),
    q_28 = (e_136) => !!e_136 && !e_136.current;
  function Y_29({ container: e_137, target: t_138, ...i_139 } = {}) {
    let r_140 = (0, framerMotion14.M)($_27),
      n_141 = (0, React.useRef)(null),
      s_142 = (0, React.useRef)(!1),
      d_143 = (0, React.useCallback)(
        () => (
          (n_141.current = (function (
            e_144,
            { axis: t_146 = "y", container: i_147 = document.scrollingElement, ...r_145 } = {},
          ) {
            var n_148, s_149;
            if (!i_147) return framerMotion3.l;
            let o_150 = {
              axis: t_146,
              container: i_147,
              ...r_145,
            };
            return "function" == typeof e_144
              ? ((n_148 = e_144),
                (s_149 = o_150),
                2 === n_148.length
                  ? H_24((e_151) => {
                      n_148(e_151[s_149.axis].progress, e_151);
                    }, s_149)
                  : u_3(n_148, R_26(s_149)))
              : (function (e_152, t_153) {
                  let i_154 = R_26(t_153);
                  return e_152.attachTimeline({
                    timeline: t_153.target ? void 0 : i_154,
                    observe: (e_155) => (
                      e_155.pause(),
                      u_3((t_156) => {
                        e_155.time = e_155.duration * t_156;
                      }, i_154)
                    ),
                  });
                })(e_144, o_150);
          })(
            (e_157, { x: t_158, y: i_159 }) => {
              (r_140.scrollX.set(t_158.current),
                r_140.scrollXProgress.set(t_158.progress),
                r_140.scrollY.set(i_159.current),
                r_140.scrollYProgress.set(i_159.progress));
            },
            {
              ...i_139,
              container: e_137?.current || void 0,
              target: t_138?.current || void 0,
            },
          )),
          () => {
            n_141.current?.();
          }
        ),
        [e_137, t_138, JSON.stringify(i_139.offset)],
      );
    return (
      (0, framerMotion15.E)(() => {
        if (((s_142.current = !1), !(q_28(e_137) || q_28(t_138)))) return d_143();
        s_142.current = !0;
      }, [d_143]),
      (0, React.useEffect)(
        () =>
          s_142.current
            ? ((0, framerMotion2.V)(
                !q_28(e_137),
                "Container ref is defined but not hydrated",
                "use-scroll-ref",
              ),
              (0, framerMotion2.V)(!q_28(t_138), "Target ref is defined but not hydrated", "use-scroll-ref"),
              d_143())
            : void 0,
        [d_143],
      ),
      r_140
    );
  }
};
