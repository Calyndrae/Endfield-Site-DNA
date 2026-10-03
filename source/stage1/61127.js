// NoticeDetailContextProvider (bulletin data + client refetch) — module 61127 from [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac
// module 61127 from [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac.js
// deps: 96424, 97028, 71985, 4948, 91627
const module_61127 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    NoticeDetailContextProvider: () => s_2,
    z: () => __3,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    Toast = webpackRequire(71985),
    I18nProviderUseI18n = webpackRequire(4948),
    BulletinApi = webpackRequire(91627);
  let r_1 = (0, React.createContext)({}),
    s_2 = (e_4) => {
      let { value: t_5, children: i_6 } = e_4,
        { t: s_7 } = (0, I18nProviderUseI18n.Bd)(),
        { lang: __8 } = (0, I18nProviderUseI18n.PO)(),
        { bulletin: d_9 } = t_5,
        [u_10, m_11] = (0, React.useState)(d_9);
      (0, React.useEffect)(() => {
        (async () => {
          let e_13 = window.location.pathname,
            t_14 = /\/news\/(\d+)/.exec(e_13);
          if (t_14) {
            let e_15 = t_14[1],
              { code: i_16, data: l_17 } = await (0, BulletinApi.Jq)(e_15, __8);
            0 === i_16 && l_17 ? m_11(l_17) : Toast.A.message(s_7("toast.networkError"));
          }
        })();
      }, []);
      let v_12 = (0, React.useMemo)(
        () => ({
          bulletin: u_10,
        }),
        [u_10],
      );
      return (0, jsx.jsx)(r_1.Provider, {
        value: v_12,
        children: i_6,
      });
    },
    __3 = () => (0, React.useContext)(r_1).bulletin;
};
