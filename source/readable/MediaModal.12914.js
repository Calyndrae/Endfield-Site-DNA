/**
 * MediaModal — readable reconstruction of webpack module 12914 (chunk 226-d5292700ff68fd13.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/226-d5292700ff68fd13.js
 *
 * MediaModalStore keeps a zustand store {visible, title, src, onClose} with an activate(title, src, onClose) action; export C is a hook returning that action and export A is the MediaModal component wrapped in the module 44990 `D` container. While visible it disables BackgroundMusic and sends a video_play_start tracking event (video_title, video_url), sending video_play_end on cleanup; when hidden it re-enables music if SoundControlStore is enabled and clears src after 300ms so the iframe unmounts after the close transition. The body renders a close button (SvgIcon29190) and a YouTube iframe with allow 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' and allowFullScreen.
 *
 * Exports (minified key → meaning):
 *   A → MediaModal
 *   C → useActivateMediaModal
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 12914 from 226-d5292700ff68fd13.js
// deps: 96424, 97028, 73235, 99880, 29190, 44990, 79549, 1162, 2285, 7725, 26097, 22104
const module_12914 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => MediaModal,
    C: () => useActivateMediaModal,
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
  let useMediaModalStore = (0, zustandCreate.v)((set) => ({
      visible: !1,
      title: "",
      src: "",
      activate: (modalTitle, modalSrc, modalOnClose) =>
        set({
          visible: !0,
          title: modalTitle,
          src: modalSrc,
          onClose: modalOnClose,
        }),
    })),
    useActivateMediaModal = () => useMediaModalStore((modalState) => modalState.activate),
    MediaModalInner = (innerProps) => {
      let { className: innerClassName, style: innerStyle } = innerProps,
        { visible: visible, title: title, src: src, onClose: onClose } = useMediaModalStore();
      return (
        (0, React.useEffect)(() => {
          if (visible)
            return (
              BackgroundMusic.K.disable(),
              Tracking.A.collect("video_play_start", {
                video_title: title,
                video_url: src,
              }),
              () => {
                Tracking.A.collect("video_play_end", {
                  video_title: title,
                  video_url: src,
                });
              }
            );
          visible ||
            (SoundControlStore.E.getState().enabled && BackgroundMusic.K.enable(),
            setTimeout(() => {
              useMediaModalStore.setState({
                src: "",
              });
            }, 300));
        }, [visible]),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(styles().mediaModal, visible && styles().active, innerClassName),
          style: innerStyle,
          children: (0, jsx.jsxs)("div", {
            className: styles().modalContainer,
            children: [
              (0, jsx.jsx)("div", {
                className: styles().closeBtn,
                onClick: () => {
                  (useMediaModalStore.setState({
                    visible: !1,
                  }),
                    null == onClose || onClose());
                },
                children: (0, jsx.jsx)(SvgIcon29190.A, {
                  className: styles().closeIcon,
                }),
              }),
              src &&
                (0, jsx.jsx)("iframe", {
                  src: src,
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
    MediaModal = (props) => {
      let { className: className, style: style } = props;
      return (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(MediaModalInner, {
          className: className,
          style: style,
        }),
      });
    };
};
