/**
 * useOrientation — readable reconstruction of webpack module 90286 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * useOrientation (export M) returns 'landscape' or 'portrait' by comparing window.innerWidth >= window.innerHeight, defaulting to 'landscape' for SSR. It relies on an internal useResizeEffect hook that runs the callback immediately and again on window resize, debounced to 100ms through the helper imported from module 90145 (aliased framerMotion here, but used as a debounce function).
 *
 * Exports (minified key → meaning):
 *   M → useOrientation
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 90286 from 8963-234f979bdd6b491c.js
// deps: 97028, 90145
const module_90286 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    M: () => useOrientation,
  });
  var React = webpackRequire(97028),
    lodashDebounce = webpackRequire(90145);
  let useResizeEffect = function (effectCallback) {
      let effectDeps = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [null];
      (0, React.useEffect)(() => {
        effectCallback();
        let debouncedCallback = (0, lodashDebounce.A)(effectCallback, 100);
        return (
          window.addEventListener("resize", debouncedCallback),
          () => window.removeEventListener("resize", debouncedCallback)
        );
      }, effectDeps);
    },
    useOrientation = () => {
      let [orientation, setOrientation] = (0, React.useState)("landscape");
      return (
        useResizeEffect(() => {
          setOrientation(window.innerWidth >= window.innerHeight ? "landscape" : "portrait");
        }),
        orientation
      );
    };
};
