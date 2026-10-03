/**
 * Toast — readable reconstruction of webpack module 71985 (chunk [lang]__(main)__(home)__layout-282874dd3834757d.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(home)/layout-282874dd3834757d.js
 *
 * Toast component with an imperative Toast.message(content, {duration=2000}) helper. The component animates its root div with anime.js (opacity [0,1] when visible, [1,0] when hidden, 300 ms, easing cubicBezier(0.25, 0.1, 0.25, 1)) and calls afterClose (default: a no-op from the anime.js 3.2.1 alias) once the hide animation completes. message() appends a div to document.body, creates a React root (createRoot), renders the toast visible inside a setTimeout, then after `duration` ms re-renders it hidden with an afterClose that unmounts the root and removes the container. CSS classes used: styles.toast and styles.content.
 *
 * Exports (minified key → meaning):
 *   A → Toast
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 71985 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 96424, 97028, 2268, 56578, 14000, 9399
const module_71985 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => ToastAlias,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    nextJsAppRouterRuntime = webpackRequire(2268),
    animeJsDefault = webpackRequire(56578),
    animeJs321 = webpackRequire(14e3),
    animeJs321Default = webpackRequire.n(animeJs321),
    stylesModule = webpackRequire(9399),
    styles = webpackRequire.n(stylesModule);
  let Toast = (props) => {
    let { visible = !1, afterClose = animeJs321Default(), children: children } = props,
      toastRef = (0, React.useRef)(null);
    return (
      (0, React.useEffect)(() => {
        (0, animeJsDefault.A)({
          targets: toastRef.current,
          opacity: visible ? [0, 1] : [1, 0],
          duration: 300,
          easing: "cubicBezier(0.25, 0.1, 0.25, 1)",
          complete: () => {
            visible || afterClose();
          },
        });
      }, [visible]),
      (0, jsx.jsx)("div", {
        ref: toastRef,
        className: styles().toast,
        children: (0, jsx.jsx)("div", {
          className: styles().content,
          children: children,
        }),
      })
    );
  };
  Toast.message = function (content) {
    let options = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
      { duration = 2e3 } = options,
      container = document.createElement("div");
    document.body.appendChild(container);
    let root = (0, nextJsAppRouterRuntime.createRoot)(container);
    function renderToast(renderProps) {
      let { content: renderContent, ...restProps } = renderProps;
      setTimeout(() => {
        root.render(
          (0, jsx.jsx)(Toast, {
            ...restProps,
            children: renderContent,
          }),
        );
      });
    }
    (renderToast({
      visible: !0,
      content: content,
    }),
      setTimeout(() => {
        renderToast({
          visible: !1,
          content: content,
          afterClose: () => {
            (root.unmount(), container.parentNode && container.parentNode.removeChild(container));
          },
        });
      }, duration));
  };
  let ToastAlias = Toast;
};
