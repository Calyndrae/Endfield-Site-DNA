/**
 * VideoListContextProvider — readable reconstruction of webpack module 3787 (chunk [lang]__(main)__(home)__layout-282874dd3834757d.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(home)/layout-282874dd3834757d.js
 *
 * React context provider for the home-page video list. It seeds state from the SSR value {videos, total}, then on mount calls getVideoList({lang}) (module 60108, /api/content/info_video); on success it stores list and total and sets frontVideoReady = true, and on any thrown error logs '拉取视频列表失败' and shows Toast.message(t('toast.networkError')). The memoized context value is {frontVideoReady, videos, total}; useVideoList reads it.
 *
 * Exports (minified key → meaning):
 *   VideoListContextProvider → VideoListContextProvider
 *   X → useVideoList
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 3787 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 96424, 97028, 71985, 4948, 60108
const module_3787 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    VideoListContextProvider: () => VideoListContextProvider,
    X: () => useVideoList,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    Toast = webpackRequire(71985),
    I18nProviderUseI18n = webpackRequire(4948),
    VideoListApi = webpackRequire(60108);
  let VideoListContext = (0, React.createContext)({
      frontVideoReady: !1,
      videos: [],
      total: 0,
    }),
    VideoListContextProvider = (props) => {
      let { value: initialValue, children: children } = props,
        { lang: lang } = (0, I18nProviderUseI18n.PO)(),
        { t: t } = (0, I18nProviderUseI18n.Bd)(),
        { videos: initialVideos, total: initialTotal } = initialValue,
        [videos, setVideos] = (0, React.useState)(null != initialVideos ? initialVideos : []),
        [total, setTotal] = (0, React.useState)(null != initialTotal ? initialTotal : 0),
        [frontVideoReady, setFrontVideoReady] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        (async () => {
          try {
            let { list: list, total: fetchedTotal } = await (0, VideoListApi.A)({
              lang: lang,
            });
            (setVideos(list), setTotal(fetchedTotal), setFrontVideoReady(!0));
          } catch (error) {
            (console.log("拉取视频列表失败", error), Toast.A.message(t("toast.networkError")));
          }
        })();
      }, []);
      let contextValue = (0, React.useMemo)(
        () => ({
          frontVideoReady: frontVideoReady,
          videos: videos,
          total: total,
        }),
        [videos, frontVideoReady, total],
      );
      return (0, jsx.jsx)(VideoListContext.Provider, {
        value: contextValue,
        children: children,
      });
    },
    useVideoList = () => (0, React.useContext)(VideoListContext);
};
