// VideoListContextProvider — module 3787 from [lang]__(main)__(home)__layout-282874dd3834757d
// module 3787 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 96424, 97028, 71985, 4948, 60108
const module_3787 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    VideoListContextProvider: () => u_2,
    X: () => c_3,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    Toast = webpackRequire(71985),
    I18nProviderUseI18n = webpackRequire(4948),
    VideoListApi = webpackRequire(60108);
  let i_1 = (0, React.createContext)({
      frontVideoReady: !1,
      videos: [],
      total: 0,
    }),
    u_2 = (e_4) => {
      let { value: t_5, children: n_6 } = e_4,
        { lang: u_7 } = (0, I18nProviderUseI18n.PO)(),
        { t: c_8 } = (0, I18nProviderUseI18n.Bd)(),
        { videos: d_9, total: f_10 } = t_5,
        [v_11, b_12] = (0, React.useState)(null != d_9 ? d_9 : []),
        [p_13, g_14] = (0, React.useState)(null != f_10 ? f_10 : 0),
        [m_15, h_16] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        (async () => {
          try {
            let { list: e_18, total: t_19 } = await (0, VideoListApi.A)({
              lang: u_7,
            });
            (b_12(e_18), g_14(t_19), h_16(!0));
          } catch (e_20) {
            (console.log("拉取视频列表失败", e_20), Toast.A.message(c_8("toast.networkError")));
          }
        })();
      }, []);
      let y_17 = (0, React.useMemo)(
        () => ({
          frontVideoReady: m_15,
          videos: v_11,
          total: p_13,
        }),
        [v_11, m_15, p_13],
      );
      return (0, jsx.jsx)(i_1.Provider, {
        value: y_17,
        children: n_6,
      });
    },
    c_3 = () => (0, React.useContext)(i_1);
};
