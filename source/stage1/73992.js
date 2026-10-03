// VideoPlayers (VideoBasic + canvas frame-limited video) — module 73992 from 8963-234f979bdd6b491c
// module 73992 from 8963-234f979bdd6b491c.js
// deps: 97028, 97521, 96424, 73235, 44752
const module_73992 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Q: () => Z_10,
  });
  var L_1,
    a_2,
    n_3,
    React = webpackRequire(97028),
    SiteUtils = webpackRequire(97521),
    jsx = webpackRequire(96424),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames);
  let d_4 = {
    baiduApp: /baiduboxapp/i,
    quark: /quark/i,
    wechat: /micromessenger/i,
    huawei: /huawei/i,
    harmonyOS: /harmonyos/i,
    oppo: /heytap/i,
    vivo: /vivo/i,
    android: /android/i,
    ios: /iphone|ipad/i,
    qq: /\b(qq)\/([\w\.]+)/i,
    qqBrowser: /m?qqbrowser\/([\w\.]+)/i,
    honor: /bdhonorbrowser/i,
  };
  class c_5 {
    testUA(e_11) {
      return !!this.ua.match(this.patterns[e_11]);
    }
    constructor(e_12, t_13) {
      ((this.ua = e_12),
        (this.patterns = {
          ...d_4,
          ...t_13,
        }));
    }
  }
  var stylesModule = webpackRequire(44752),
    styles = webpackRequire.n(stylesModule);
  let m_6 = React.forwardRef((e_14, t_15) => {
    let { classNames: i_16, style: L_17, src: a_18, autoplay: n_19 } = e_14,
      l_20 = (0, React.useRef)(null),
      {
        mp4: s_21,
        webm: d_22,
        image: u_23,
      } = (0, React.useMemo)(
        () =>
          "string" == typeof a_18
            ? {
                mp4: a_18,
              }
            : a_18,
        [],
      );
    (0, React.useEffect)(() => {
      let e_26 = new c_5(window.navigator.userAgent);
      (l_20.current.setAttribute("x5-video-player-type", "h5"),
        l_20.current.setAttribute("x5-playsinline", ""));
      let t_27 = () => {
        l_20.current.play().catch((e_28) => {
          var t_29;
          (null == (t_29 = l_20.current) ? void 0 : t_29.paused) &&
            (console.log("[backgroundVideo] autoplay failed, waiting for user interaction, err:", e_28),
            window.addEventListener(
              "click",
              () => {
                l_20.current.play();
              },
              {
                once: !0,
              },
            ));
        });
      };
      (n_19 &&
        (e_26.testUA("ios") &&
          e_26.testUA("wechat") &&
          document.addEventListener("WeixinJSBridgeReady", t_27, !1),
        t_27()),
        l_20.current.addEventListener("loadedmetadata", () => {
          l_20.current &&
            ((l_20.current.width = l_20.current.videoWidth / window.devicePixelRatio),
            (l_20.current.height = l_20.current.videoHeight / window.devicePixelRatio));
        }));
    }, []);
    let [m_24, g_25] = React.useState(null);
    return (
      (0, React.useImperativeHandle)(
        t_15,
        () => ({
          videoElement: m_24,
          play: () => l_20.current.play(),
          pause: () => l_20.current.pause(),
        }),
        [m_24],
      ),
      (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles().videoContainer, i_16),
        style: L_17,
        children: (0, jsx.jsxs)("video", {
          autoPlay: n_19,
          preload: "auto",
          muted: !0,
          loop: !0,
          playsInline: !0,
          controls: !1,
          ref: (e_30) => {
            ((l_20.current = e_30), g_25(e_30));
          },
          poster: u_23,
          children: [
            d_22 &&
              (0, jsx.jsx)("source", {
                src: d_22,
                type: "video/webm",
              }),
            (0, jsx.jsx)("source", {
              src: s_21,
              type: "video/mp4",
            }),
          ],
        }),
      })
    );
  });
  m_6.displayName = "VideoBasic";
  let g_7 = function (e_31) {
      let t_32 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
        i_33 = 1e3 / t_32,
        L_34 = !0,
        a_35 = 0,
        n_36 = window.performance,
        r_37 = 0,
        l_38 = () => {
          let t_39 = n_36.now();
          ((a_35 += t_39 - r_37),
            (r_37 = t_39),
            a_35 > i_33 && ((a_35 -= Math.floor(a_35 / i_33) * i_33), e_31()),
            L_34 && requestAnimationFrame(l_38));
        };
      return (
        l_38(),
        () => {
          L_34 = !1;
        }
      );
    },
    v_8 = React.forwardRef((e_40, t_41) => {
      let { classNames: i_42, style: L_43, src: a_44, autoplay: n_45, frameLimit: l_46 = 30 } = e_40,
        s_47 = (0, React.useRef)(null),
        {
          mp4: d_48,
          webm: c_49,
          image: u_50,
        } = (0, React.useMemo)(
          () =>
            "string" == typeof a_44
              ? {
                  mp4: a_44,
                }
              : a_44,
          [],
        ),
        m_51 = (0, React.useRef)(null),
        [v_52, M_53] = React.useState(null);
      return (
        (0, React.useEffect)(() => {
          let e_54 = document.createElement("video");
          if (((m_51.current = e_54), M_53(e_54), c_49)) {
            let t_58 = document.createElement("source");
            ((t_58.src = c_49), e_54.appendChild(t_58));
          }
          let t_55 = document.createElement("source");
          ((t_55.src = d_48),
            e_54.appendChild(t_55),
            (e_54.muted = !0),
            (e_54.autoplay = !!n_45),
            (e_54.preload = "auto"),
            (e_54.loop = !0),
            (e_54.playsInline = !0),
            u_50 && (e_54.poster = u_50),
            n_45 &&
              e_54.play().catch((t_59) => {
                e_54.paused &&
                  (console.log(
                    "[backgroundVideo] canvas video autoplay failed, waiting for user interaction, err:",
                    t_59,
                  ),
                  window.addEventListener(
                    "click",
                    () => {
                      e_54.play();
                    },
                    {
                      once: !0,
                    },
                  ));
              }));
          let i_56 = s_47.current,
            L_57 = g_7(() => {
              let t_60 = i_56.getContext("2d");
              t_60 &&
                ((i_56.width = e_54.videoWidth),
                (i_56.height = e_54.videoHeight),
                t_60.drawImage(e_54, 0, 0, i_56.width, i_56.height));
            }, l_46);
          return () => {
            L_57();
          };
        }, []),
        (0, React.useImperativeHandle)(
          t_41,
          () => ({
            videoElement: v_52,
            play: () => m_51.current.play(),
            pause: () => m_51.current.pause(),
          }),
          [v_52],
        ),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(styles().videoContainer, i_42),
          style: L_43,
          children: (0, jsx.jsx)("canvas", {
            ref: s_47,
          }),
        })
      );
    });
  v_8.displayName = "VideoCanvas";
  let M_9 = !1;
  if (!SiteUtils.isServer) {
    let e_61 = new c_5(
      null != (n_3 = null == (a_2 = window) || null == (L_1 = a_2.navigator) ? void 0 : L_1.userAgent)
        ? n_3
        : "",
    );
    M_9 =
      e_61.testUA("qqBrowser") || (e_61.testUA("ios") && (e_61.testUA("quark") || e_61.testUA("baiduApp")));
  }
  let Z_10 = M_9 ? v_8 : m_6;
};
