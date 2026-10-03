// BulletinListContextProvider — module 30257 from [lang]__(main)__(home)__layout-282874dd3834757d
// module 30257 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 96424, 97028, 71985, 4948, 91627, 97521
const module_30257 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    BulletinListContextProvider: () => c_2,
    b: () => d_3,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    Toast = webpackRequire(71985),
    I18nProviderUseI18n = webpackRequire(4948),
    BulletinApi = webpackRequire(91627),
    SiteUtils = webpackRequire(97521);
  let u_1 = (0, React.createContext)({
      frontBulletinReady: !1,
      bulletins: [],
      total: 0,
    }),
    c_2 = (e_4) => {
      let { value: t_5, children: n_6 } = e_4,
        { lang: c_7 } = (0, I18nProviderUseI18n.PO)(),
        { t: d_8 } = (0, I18nProviderUseI18n.Bd)(),
        { bulletins: f_9, total: v_10 } = t_5,
        [b_11, p_12] = (0, React.useState)(null != f_9 ? f_9 : []),
        [g_13, m_14] = (0, React.useState)(null != v_10 ? v_10 : 0),
        [h_15, y_16] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        (async () => {
          let { code: e_18, data: t_19 } = await (0, BulletinApi.PZ)(c_7, 1, 10);
          0 === e_18 && (null == t_19 ? void 0 : t_19.list)
            ? (p_12(t_19.list.filter((e_20) => (0, SiteUtils.jx)(e_20.cid, c_7))), m_14(t_19.total), y_16(!0))
            : (console.log("拉取公告列表失败", e_18), Toast.A.message(d_8("toast.networkError")));
        })();
      }, []);
      let A_17 = (0, React.useMemo)(
        () => ({
          frontBulletinReady: h_15,
          bulletins: b_11,
          total: g_13,
        }),
        [b_11, h_15, g_13],
      );
      return (0, jsx.jsx)(u_1.Provider, {
        value: A_17,
        children: n_6,
      });
    },
    d_3 = () => (0, React.useContext)(u_1);
};
