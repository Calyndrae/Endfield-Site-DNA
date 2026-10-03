/**
 * useCloseButton — readable reconstruction of webpack module 67002 (chunk [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(subpage)/news/page-e5ae1407cb8bddb1.js
 *
 * useCloseButton hook for the news detail page. On mount it checks DeviceUtils' Honor-browser user-agent test (/bdhonorbrowser/i, with an empty UA on the server) and whether window.opener exists on the same hostname; when the page was opened from the same site and not in that browser it sets showClose = true (any cross-origin access error resets it to false). It returns {showClose, handleClose} where handleClose calls window.close().
 *
 * Exports (minified key → meaning):
 *   R → useCloseButton
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 67002 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js
// deps: 97028, 97521, 15723
const module_67002 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    R: () => useCloseButton,
  });
  var React = webpackRequire(97028),
    SiteUtils = webpackRequire(97521),
    DeviceUtils = webpackRequire(15723);
  let useCloseButton = () => {
    let [showClose, setShowClose] = (0, React.useState)(!1);
    return (
      (0, React.useEffect)(() => {
        let isHonorBrowser = (0, DeviceUtils.Jc)(SiteUtils.isServer ? "" : window.navigator.userAgent);
        try {
          let openerWindow = window.opener;
          openerWindow &&
            openerWindow.location.hostname === window.location.hostname &&
            !isHonorBrowser &&
            setShowClose(!0);
        } catch (error) {
          setShowClose(!1);
        }
      }, []),
      {
        showClose: showClose,
        handleClose: (0, React.useCallback)(() => {
          window.close();
        }, []),
      }
    );
  };
};
