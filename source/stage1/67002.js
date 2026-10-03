// useCloseButton (window.opener aware close) — module 67002 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1
// module 67002 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js
// deps: 97028, 97521, 15723
const module_67002 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    R: () => n_1,
  });
  var React = webpackRequire(97028),
    SiteUtils = webpackRequire(97521),
    DeviceUtils = webpackRequire(15723);
  let n_1 = () => {
    let [e_2, L_3] = (0, React.useState)(!1);
    return (
      (0, React.useEffect)(() => {
        let e_4 = (0, DeviceUtils.Jc)(SiteUtils.isServer ? "" : window.navigator.userAgent);
        try {
          let t_5 = window.opener;
          t_5 && t_5.location.hostname === window.location.hostname && !e_4 && L_3(!0);
        } catch (e_6) {
          L_3(!1);
        }
      }, []),
      {
        showClose: e_2,
        handleClose: (0, React.useCallback)(() => {
          window.close();
        }, []),
      }
    );
  };
};
