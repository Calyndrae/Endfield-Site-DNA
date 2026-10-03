/**
 * UserModalRoot — readable reconstruction of webpack module 92610 (chunk 3696-03b8256f1fece6bb.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/3696-03b8256f1fece6bb.js
 *
 * Account/user modal. A zustand store holds isActive and useActivateUserModal returns its activate action. The modal (SvgIcon80500 frame titled 'modal.user.title') shows the 'modal.user.currentUser' label and account.displayName from the SDK account hook, a 'modal.user.userCenter' button that opens SiteConfig.user_center_link (https://user.gryphline.com/) with an i18n_lang query param in a new tab, a 'modal.user.orig' button only for ja-jp that activates the Originium query modal from module 94150, and a 'modal.user.logout' button (hidden when a local flag is set) that closes the modal and calls the SDK logout action after 300 ms. The root export wraps it in module 44990's container.
 *
 * Exports (minified key → meaning):
 *   Ay → UserModalRoot
 *   GW → useActivateUserModal
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 92610 from 3696-03b8256f1fece6bb.js
// deps: 96424, 97028, 73235, 99880, 22060, 70246, 44990, 56006, 4948, 15723, 80500, 94150, 66792
const module_92610 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ay: () => UserModalRoot,
    GW: () => useActivateUserModal,
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
    OrigQueryModal = webpackRequire(94150),
    stylesModule = webpackRequire(66792),
    styles = webpackRequire.n(stylesModule);
  let useUserModalStore = (0, zustandCreate.v)((set) => ({
      isActive: !1,
      activate: () =>
        set({
          isActive: !0,
        }),
    })),
    useActivateUserModal = () => useUserModalStore((state) => state.activate),
    UserModal = (props) => {
      let { className: className, style: style } = props,
        { t: t } = (0, I18nProviderUseI18n.Bd)(),
        { isActive: isActive } = useUserModalStore(),
        { account: account, loading: isAccountLoading } = (0, ReactDOM.F7)(),
        { lang: lang } = (0, I18nProviderUseI18n.PO)(),
        logoutAccount = (0, ReactDOM.N4)(),
        handleLogout = (0, React.useCallback)(() => {
          (useUserModalStore.setState({
            isActive: !1,
          }),
            setTimeout(() => {
              logoutAccount();
            }, 300));
        }, [logoutAccount]),
        openUserCenter = (0, React.useCallback)(() => {
          let userCenterUrl = new URL(SiteConfig.a.user_center_link);
          (userCenterUrl.searchParams.set("i18n_lang", lang),
            window.open(userCenterUrl.toString(), "_blank"));
        }, [lang]),
        [hideLogout, setHideLogout] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {}, []);
      let activateOrigQueryModal = (0, OrigQueryModal.YV)(),
        handleOpenOrigQuery = (0, React.useCallback)(() => {
          activateOrigQueryModal();
        }, [activateOrigQueryModal]);
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles().userModal, isActive && styles().active, className),
        style: style,
        children: (0, jsx.jsx)(SvgIcon80500.A, {
          title: t("modal.user.title"),
          className: styles().modalContainer,
          onClose: () =>
            useUserModalStore.setState({
              isActive: !1,
            }),
          children: (0, jsx.jsxs)("div", {
            className: styles().contentFrame,
            children: [
              (0, jsx.jsx)("div", {
                className: styles().label,
                children: t("modal.user.currentUser"),
              }),
              (0, jsx.jsx)("div", {
                className: styles().currentUser,
                children: null == account ? void 0 : account.displayName,
              }),
              (0, jsx.jsx)(module70246.A, {
                className: styles().button,
                onClick: openUserCenter,
                children: t("modal.user.userCenter"),
              }),
              "ja-jp" === lang &&
                (0, jsx.jsx)(module70246.A, {
                  className: styles().button,
                  onClick: handleOpenOrigQuery,
                  children: t("modal.user.orig"),
                }),
              !hideLogout &&
                (0, jsx.jsx)(module70246.A, {
                  className: styles().button,
                  onClick: handleLogout,
                  children: t("modal.user.logout"),
                }),
            ],
          }),
        }),
      });
    },
    UserModalRoot = () =>
      (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(UserModal, {}),
      });
};
