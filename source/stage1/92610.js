// UserModal text/links (modal.user.*) — module 92610 from 3696-03b8256f1fece6bb
// module 92610 from 3696-03b8256f1fece6bb.js
// deps: 96424, 97028, 73235, 99880, 22060, 70246, 44990, 56006, 4948, 15723, 80500, 94150, 66792
const module_92610 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ay: () => p_4,
    GW: () => h_2,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    zustandCreate = webpackRequire(99880),
    ReactDOM = webpackRequire(22060),
    module70246 = webpackRequire(70246),
    module44990 = webpackRequire(44990),
    SiteConfig = webpackRequire(56006),
    I18nProviderUseI18n = webpackRequire(4948);
  webpackRequire(15723);
  var SvgIcon80500 = webpackRequire(80500),
    UserModalAccountMenu = webpackRequire(94150),
    stylesModule = webpackRequire(66792),
    styles = webpackRequire.n(stylesModule);
  let g_1 = (0, zustandCreate.v)((e_5) => ({
      isActive: !1,
      activate: () =>
        e_5({
          isActive: !0,
        }),
    })),
    h_2 = () => g_1((e_6) => e_6.activate),
    f_3 = (e_7) => {
      let { className: t_8, style: r_9 } = e_7,
        { t: n_10 } = (0, I18nProviderUseI18n.Bd)(),
        { isActive: L_11 } = g_1(),
        { account: c_12, loading: m_13 } = (0, ReactDOM.F7)(),
        { lang: h_14 } = (0, I18nProviderUseI18n.PO)(),
        f_15 = (0, ReactDOM.N4)(),
        p_16 = (0, React.useCallback)(() => {
          (g_1.setState({
            isActive: !1,
          }),
            setTimeout(() => {
              f_15();
            }, 300));
        }, [f_15]),
        w_17 = (0, React.useCallback)(() => {
          let e_22 = new URL(SiteConfig.a.user_center_link);
          (e_22.searchParams.set("i18n_lang", h_14), window.open(e_22.toString(), "_blank"));
        }, [h_14]),
        [M_18, x_19] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {}, []);
      let y_20 = (0, UserModalAccountMenu.YV)(),
        j_21 = (0, React.useCallback)(() => {
          y_20();
        }, [y_20]);
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles().userModal, L_11 && styles().active, t_8),
        style: r_9,
        children: (0, jsx.jsx)(SvgIcon80500.A, {
          title: n_10("modal.user.title"),
          className: styles().modalContainer,
          onClose: () =>
            g_1.setState({
              isActive: !1,
            }),
          children: (0, jsx.jsxs)("div", {
            className: styles().contentFrame,
            children: [
              (0, jsx.jsx)("div", {
                className: styles().label,
                children: n_10("modal.user.currentUser"),
              }),
              (0, jsx.jsx)("div", {
                className: styles().currentUser,
                children: null == c_12 ? void 0 : c_12.displayName,
              }),
              (0, jsx.jsx)(module70246.A, {
                className: styles().button,
                onClick: w_17,
                children: n_10("modal.user.userCenter"),
              }),
              "ja-jp" === h_14 &&
                (0, jsx.jsx)(module70246.A, {
                  className: styles().button,
                  onClick: j_21,
                  children: n_10("modal.user.orig"),
                }),
              !M_18 &&
                (0, jsx.jsx)(module70246.A, {
                  className: styles().button,
                  onClick: p_16,
                  children: n_10("modal.user.logout"),
                }),
            ],
          }),
        }),
      });
    },
    p_4 = () =>
      (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(f_3, {}),
      });
};
