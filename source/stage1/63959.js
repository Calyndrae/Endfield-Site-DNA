// default — module 63959 from global-error-0b005263e0e74557
// module 63959 from global-error-0b005263e0e74557.js
// deps: 96424, 97028, 51113, 58694
const module_63959 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, {
      default: () => c_1,
    }));
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    sentry = webpackRequire(51113),
    nextJsRuntime = webpackRequire(58694),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime);
  function c_1(e_2) {
    let { error: s_3 } = e_2;
    return (
      (0, React.useEffect)(() => {
        sentry.Cp(s_3);
      }, [s_3]),
      (0, jsx.jsx)("html", {
        children: (0, jsx.jsx)("body", {
          children: (0, jsx.jsx)(nextJsRuntimeDefault(), {
            statusCode: void 0,
          }),
        }),
      })
    );
  }
};
