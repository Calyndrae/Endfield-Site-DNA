/**
 * BulletinListContextProvider — readable reconstruction of webpack module 30257 (chunk [lang]__(main)__(home)__layout-282874dd3834757d.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(home)/layout-282874dd3834757d.js
 *
 * React context provider for the home-page bulletin (news) list. It seeds state from the SSR-provided value {bulletins, total}, then on mount calls getBulletinList(lang, 1, 10); when code === 0 it stores data.list filtered through SiteUtils' hidden-bulletin check (cid vs SiteConfig.hide_bulletin_dict for the current lang), stores data.total and sets frontBulletinReady = true, otherwise logs '拉取公告列表失败' and shows Toast.message(t('toast.networkError')). The memoized context value is {frontBulletinReady, bulletins, total}; useBulletinList reads it.
 *
 * Exports (minified key → meaning):
 *   BulletinListContextProvider → BulletinListContextProvider
 *   b → useBulletinList
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 30257 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 96424, 97028, 71985, 4948, 91627, 97521
const module_30257 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    BulletinListContextProvider: () => BulletinListContextProvider,
    b: () => useBulletinList,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    Toast = webpackRequire(71985),
    I18nProviderUseI18n = webpackRequire(4948),
    BulletinApi = webpackRequire(91627),
    SiteUtils = webpackRequire(97521);
  let BulletinListContext = (0, React.createContext)({
      frontBulletinReady: !1,
      bulletins: [],
      total: 0,
    }),
    BulletinListContextProvider = (props) => {
      let { value: initialValue, children: children } = props,
        { lang: lang } = (0, I18nProviderUseI18n.PO)(),
        { t: t } = (0, I18nProviderUseI18n.Bd)(),
        { bulletins: initialBulletins, total: initialTotal } = initialValue,
        [bulletins, setBulletins] = (0, React.useState)(null != initialBulletins ? initialBulletins : []),
        [total, setTotal] = (0, React.useState)(null != initialTotal ? initialTotal : 0),
        [frontBulletinReady, setFrontBulletinReady] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        (async () => {
          let { code: code, data: data } = await (0, BulletinApi.PZ)(lang, 1, 10);
          0 === code && (null == data ? void 0 : data.list)
            ? (setBulletins(data.list.filter((bulletin) => (0, SiteUtils.jx)(bulletin.cid, lang))),
              setTotal(data.total),
              setFrontBulletinReady(!0))
            : (console.log("拉取公告列表失败", code), Toast.A.message(t("toast.networkError")));
        })();
      }, []);
      let contextValue = (0, React.useMemo)(
        () => ({
          frontBulletinReady: frontBulletinReady,
          bulletins: bulletins,
          total: total,
        }),
        [bulletins, frontBulletinReady, total],
      );
      return (0, jsx.jsx)(BulletinListContext.Provider, {
        value: contextValue,
        children: children,
      });
    },
    useBulletinList = () => (0, React.useContext)(BulletinListContext);
};
