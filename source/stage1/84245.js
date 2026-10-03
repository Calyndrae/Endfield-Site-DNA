// TextRevealAnimations (anime helpers WO/iI/iv/zI) — module 84245 from 8963-234f979bdd6b491c
// module 84245 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 56578, 29671
const module_84245 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    WO: () => C_4,
    iI: () => d_5,
    iv: () => s_3,
    zI: () => l_1,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    animeJsDefault = webpackRequire(56578),
    framerMotion = webpackRequire(29671);
  let l_1 = (e_6, t_7) => {
      let i_8 = animeJsDefault.A.timeline();
      return (
        i_8.add({
          targets: e_6,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: t_7 ? 70 : 100,
        }),
        i_8.add({
          targets: e_6,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 85,
        }),
        i_8.add({
          targets: e_6,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: t_7 ? 100 : 70,
          complete: () => {
            t_7 ? e_6 && (e_6.style.opacity = "0") : e_6 && (e_6.style.opacity = "1");
          },
        }),
        i_8.finished
      );
    },
    o_2 = (e_9, t_10) => {
      let i_11 = animeJsDefault.A.timeline();
      return (
        i_11.add({
          targets: e_9,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 100,
        }),
        i_11.add({
          targets: e_9,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 100,
        }),
        i_11.add({
          targets: e_9,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 100,
          complete: () => {
            t_10 ? e_9 && (e_9.style.opacity = "0") : e_9 && (e_9.style.opacity = "1");
          },
        }),
        i_11.finished
      );
    },
    s_3 = (e_12) => {
      let {
          className: t_13,
          style: i_14,
          children: n_15,
          enter: o_16,
          exit: s_17,
          enterDelay: C_18,
          ...d_19
        } = e_12,
        c_20 = (0, React.useRef)(null),
        [u_21, p_22] = (0, framerMotion.xQ)();
      return (
        (0, React.useEffect)(() => {
          if (u_21)
            C_18
              ? setTimeout(() => {
                  (l_1(c_20.current, !1), null == o_16 || o_16(c_20.current));
                }, C_18)
              : null == o_16 || o_16(c_20.current);
          else {
            var e_23;
            Promise.all([
              null != (e_23 = null == s_17 ? void 0 : s_17(c_20.current)) ? e_23 : Promise.resolve(),
              l_1(c_20.current, !0),
            ]).then(() => {
              p_22();
            });
          }
        }, [u_21]),
        (0, jsx.jsx)("div", {
          className: t_13,
          style: i_14,
          ref: c_20,
          ...d_19,
          children: n_15,
        })
      );
    },
    C_4 = (e_24, t_25, i_26, L_27) => (
      e_24 &&
        ("left" === t_25 && i_26
          ? (e_24.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)")
          : "right" === t_25 && i_26
            ? (e_24.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)")
            : "top" === t_25 && i_26
              ? (e_24.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)")
              : "bottom" === t_25 && i_26
                ? (e_24.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)")
                : (e_24.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)")),
      {
        targets: e_24,
        begin: () => {},
        update: (L_28) => {
          if (!e_24) return;
          let a_29 = (1 - Math.pow(1 - 0.01 * L_28.progress, 4)) * 100,
            n_30 = "".concat(a_29, "%"),
            r_31 = "".concat(100 - a_29, "%");
          "left" === t_25 && i_26
            ? (e_24.style.clipPath = "polygon(0 0, ".concat(n_30, " 0, ").concat(n_30, " 100%, 0 100%)"))
            : "right" === t_25 && i_26
              ? (e_24.style.clipPath = "polygon("
                  .concat(r_31, " 0, 100% 0, 100% 100%, ")
                  .concat(r_31, " 100%)"))
              : "top" === t_25 && i_26
                ? (e_24.style.clipPath = "polygon(0 0, 100% 0, 100% ".concat(n_30, ", 0 ").concat(n_30, ")"))
                : "bottom" === t_25 && i_26
                  ? (e_24.style.clipPath = "polygon(0 "
                      .concat(r_31, ", 100% ")
                      .concat(r_31, ", 100% 100%, 0 100%)"))
                  : "left" !== t_25 || i_26
                    ? "right" !== t_25 || i_26
                      ? "top" !== t_25 || i_26
                        ? "bottom" !== t_25 ||
                          i_26 ||
                          (e_24.style.clipPath = "polygon(0 0, 100% 0, 100% "
                            .concat(r_31, ", 0 ")
                            .concat(r_31, ")"))
                        : (e_24.style.clipPath = "polygon(0 "
                            .concat(n_30, ", 100% ")
                            .concat(n_30, ", 100% 100%, 0 100%)"))
                      : (e_24.style.clipPath = "polygon(0 0, "
                          .concat(r_31, " 0, ")
                          .concat(r_31, " 100%, 0 100%)"))
                    : (e_24.style.clipPath = "polygon("
                        .concat(n_30, " 0, 100% 0, 100% 100%, ")
                        .concat(n_30, " 100%)"));
        },
        duration: L_27,
      }
    ),
    d_5 = (e_32, t_33, i_34) => {
      let L_35 = null != t_33 ? t_33 : animeJsDefault.A.timeline(),
        a_36 = 0;
      for (let t_37 of e_32)
        if (t_37)
          if (t_37 instanceof Element) {
            let e_38 = t_37;
            "none" === getComputedStyle(e_38).display
              ? L_35.add({
                  targets: e_38,
                  duration: 1,
                  begin: () => {
                    e_38 && (e_38.style.opacity = "1");
                  },
                })
              : (L_35.add(
                  {
                    targets: e_38,
                    duration: 300,
                    begin: () => {
                      o_2(e_38, !1);
                    },
                  },
                  "-=100",
                ),
                a_36++);
          } else {
            if (!t_37 || !("ele" in t_37)) continue;
            let e_39 = t_37.ele;
            i_34 !== t_37.portrait || "none" === getComputedStyle(e_39).display
              ? L_35.add({
                  targets: e_39,
                  duration: 1,
                  complete: () => {
                    e_39 && (e_39.style.opacity = "1");
                  },
                })
              : (L_35.add(
                  {
                    targets: e_39,
                    duration: 300,
                    begin: () => {
                      e_39 && o_2(e_39, !1);
                    },
                    ...t_37.options,
                  },
                  "-=100",
                ),
                a_36++);
          }
      return L_35;
    };
};
