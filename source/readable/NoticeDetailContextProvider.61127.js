/**
 * NoticeDetailContextProvider — readable reconstruction of webpack module 61127 (chunk [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(subpage)/news/[cid]/page-8dbf59fd3d1ac5ac.js
 *
 * React context for the news article page. NoticeDetailContextProvider seeds state with props.value.bulletin (server-provided), then on mount parses window.location.pathname with /\/news\/(\d+)/ and, if a cid is found, refetches via BulletinApi.Jq(cid, lang); on code 0 with data it replaces the bulletin, otherwise shows Toast 'toast.networkError'. The memoized context value is { bulletin }. Export z is the useNoticeDetail hook returning the current bulletin.
 *
 * Exports (minified key → meaning):
 *   NoticeDetailContextProvider → NoticeDetailContextProvider
 *   z → useNoticeDetail
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 61127 from [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac.js
// deps: 96424, 97028, 71985, 4948, 91627
const module_61127 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    NoticeDetailContextProvider: () => NoticeDetailContextProvider,
    z: () => useNoticeDetail,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    Toast = webpackRequire(71985),
    I18nProviderUseI18n = webpackRequire(4948),
    BulletinApi = webpackRequire(91627);
  let NoticeDetailContext = (0, React.createContext)({}),
    NoticeDetailContextProvider = (props) => {
      let { value: value, children: children } = props,
        { t: translate } = (0, I18nProviderUseI18n.Bd)(),
        { lang: lang } = (0, I18nProviderUseI18n.PO)(),
        { bulletin: initialBulletin } = value,
        [bulletin, setBulletin] = (0, React.useState)(initialBulletin);
      (0, React.useEffect)(() => {
        (async () => {
          let pathname = window.location.pathname,
            cidMatch = /\/news\/(\d+)/.exec(pathname);
          if (cidMatch) {
            let cid = cidMatch[1],
              { code: code, data: data } = await (0, BulletinApi.Jq)(cid, lang);
            0 === code && data ? setBulletin(data) : Toast.A.message(translate("toast.networkError"));
          }
        })();
      }, []);
      let contextValue = (0, React.useMemo)(
        () => ({
          bulletin: bulletin,
        }),
        [bulletin],
      );
      return (0, jsx.jsx)(NoticeDetailContext.Provider, {
        value: contextValue,
        children: children,
      });
    },
    useNoticeDetail = () => (0, React.useContext)(NoticeDetailContext).bulletin;
};
