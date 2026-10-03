/**
 * TransparentVideo — readable reconstruction of webpack module 40489 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * TransparentVideo (export y) is a forwardRef React wrapper over the @hg-web/trans-video class from module 25221: it renders a <canvas> plus a hidden muted, playsInline, crossOrigin='anonymous' <video>, constructs the trans-video instance with manualStart:true on mount, exposes {video, trans, controller:{fadeOut}} through the forwarded ref (function or object ref) and disposes the instance on unmount. OperatorSection drives it by setting video.src to the operator's enter/idle clips and calling trans.activate().
 *
 * Exports (minified key → meaning):
 *   y → TransparentVideo
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 40489 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 25221, 34169
const module_40489 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    y: () => TransparentVideo,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    HgWebTransVideo = webpackRequire(25221),
    stylesModule = webpackRequire(34169),
    styles = webpackRequire.n(stylesModule);
  let TransparentVideo = React.forwardRef((props, forwardedRef) => {
    let { className: className } = props,
      canvasRef = (0, React.useRef)(null),
      videoRef = (0, React.useRef)(null),
      transVideoRef = (0, React.useRef)(null);
    return (
      (0, React.useEffect)(() => {
        if (canvasRef.current && videoRef.current) {
          transVideoRef.current = new HgWebTransVideo.A(canvasRef.current, {
            manualStart: !0,
            video: videoRef.current,
          });
          let handle = {
            video: videoRef.current,
            trans: transVideoRef.current,
            controller: {
              fadeOut: () => {},
            },
          };
          forwardedRef &&
            ("function" == typeof forwardedRef ? forwardedRef(handle) : (forwardedRef.current = handle));
        }
        return () => {
          var transVideoInstance;
          null == (transVideoInstance = transVideoRef.current) || transVideoInstance.dispose();
        };
      }, []),
      (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles().container, className),
        children: [
          (0, jsx.jsx)("canvas", {
            ref: canvasRef,
          }),
          (0, jsx.jsx)("video", {
            muted: !0,
            "webkit-playsinline": "true",
            playsInline: !0,
            ref: videoRef,
            crossOrigin: "anonymous",
            style: {
              display: "none",
            },
          }),
        ],
      })
    );
  });
  TransparentVideo.displayName = "TransparentVideo";
};
