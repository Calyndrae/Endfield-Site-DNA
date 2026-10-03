// MediaModalStore (video modal state, YouTube iframe) — module 12914 from 226-d5292700ff68fd13
// module 12914 from 226-d5292700ff68fd13.js
// deps: 96424, 97028, 73235, 99880, 29190, 44990, 79549, 1162, 2285, 7725, 26097, 22104
const module_12914 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => f_4,
    C: () => v_2,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    zustandCreate = webpackRequire(99880),
    SvgIcon29190 = webpackRequire(29190),
    module44990 = webpackRequire(44990);
  webpackRequire(79549);
  var Tracking = webpackRequire(1162),
    SoundControlStore = webpackRequire(2285),
    BackgroundMusic = webpackRequire(7725);
  webpackRequire(26097);
  var stylesModule = webpackRequire(22104),
    styles = webpackRequire.n(stylesModule);
  let p_1 = (0, zustandCreate.v)((e_5) => ({
      visible: !1,
      title: "",
      src: "",
      activate: (t_6, a_7, n_8) =>
        e_5({
          visible: !0,
          title: t_6,
          src: a_7,
          onClose: n_8,
        }),
    })),
    v_2 = () => p_1((e_9) => e_9.activate),
    L_3 = (e_10) => {
      let { className: t_11, style: a_12 } = e_10,
        { visible: r_13, title: o_14, src: c_15, onClose: m_16 } = p_1();
      return (
        (0, React.useEffect)(() => {
          if (r_13)
            return (
              BackgroundMusic.K.disable(),
              Tracking.A.collect("video_play_start", {
                video_title: o_14,
                video_url: c_15,
              }),
              () => {
                Tracking.A.collect("video_play_end", {
                  video_title: o_14,
                  video_url: c_15,
                });
              }
            );
          r_13 ||
            (SoundControlStore.E.getState().enabled && BackgroundMusic.K.enable(),
            setTimeout(() => {
              p_1.setState({
                src: "",
              });
            }, 300));
        }, [r_13]),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(styles().mediaModal, r_13 && styles().active, t_11),
          style: a_12,
          children: (0, jsx.jsxs)("div", {
            className: styles().modalContainer,
            children: [
              (0, jsx.jsx)("div", {
                className: styles().closeBtn,
                onClick: () => {
                  (p_1.setState({
                    visible: !1,
                  }),
                    null == m_16 || m_16());
                },
                children: (0, jsx.jsx)(SvgIcon29190.A, {
                  className: styles().closeIcon,
                }),
              }),
              c_15 &&
                (0, jsx.jsx)("iframe", {
                  src: c_15,
                  className: styles().mediaIframe,
                  title: "YouTube video player",
                  frameBorder: "0",
                  allow:
                    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: !0,
                }),
            ],
          }),
        })
      );
    },
    f_4 = (e_17) => {
      let { className: t_18, style: a_19 } = e_17;
      return (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(L_3, {
          className: t_18,
          style: a_19,
        }),
      });
    };
};
