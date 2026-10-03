/**
 * NoticeListSection — readable reconstruction of webpack module 92731 (chunk [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(subpage)/news/page-e5ae1407cb8bddb1.js
 *
 * News index section. Defines NEWS_TABS (latest/notices/events/news with i18n labels common.latest, notice.tab.*) and renders SubpageHeader (title subpage.news.title, titleEn "News", type "pumper"), the tab bar, a framer-motion fade (opacity 0->1->0, duration 0.3s, easeOut, AnimatePresence mode "wait", keyed by `<page>-<tab>`) around the bulletin cards, and pagination. Page size is 4 in portrait or BulletinApi.a in landscape; pageCount = ceil(total / pageSize). goToPage fetches BulletinApi.PZ(lang, page+1, pageSize, tab or undefined for 'latest') guarded by an in-flight ref and frontBulletinReady, filters hidden bulletins via SiteUtils.jx, and shows Toast 'toast.networkError' on failure; prev/next clamp the page index into [0, pageCount-1]. Cards open `/<lang>/news/<cid>` in a new tab with the common_click sound, show cover or images['bulletin.<tab>'], tab label, dayjs(displayTime*1000) formatted by information.displayTimeFormat, and in portrait the title goes through TextShrink (font HarmonySansRegular, length 20). Landscape uses 'nav' pagination with goToPage; portrait uses 'number' pagination plus an optional back button from useCloseButton.
 *
 * Exports (minified key → meaning):
 *   NoticeListSection → NoticeListSection
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 92731 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js
// deps: 96424, 97028, 73235, 53079, 80187, 30998, 60705, 70246, 44990, 2682, 86797, 62534, 71985, 51967, 90286, 67002, 79549, 4948, 26097, 91627, 30257, 97521, 47290, 83219
const module_92731 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    NoticeListSection: () => NoticeListSection,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    dayjs = webpackRequire(53079),
    dayjsDefault = webpackRequire.n(dayjs),
    swiper = webpackRequire(80187),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    module70246 = webpackRequire(70246),
    module44990 = webpackRequire(44990),
    Pagination = webpackRequire(2682),
    NewsPageComponents = webpackRequire(86797),
    module62534 = webpackRequire(62534),
    Toast = webpackRequire(71985),
    TextShrink = webpackRequire(51967),
    useOrientation = webpackRequire(90286),
    useCloseButton = webpackRequire(67002),
    module79549 = webpackRequire(79549),
    I18nProviderUseI18n = webpackRequire(4948),
    SoundEffects = webpackRequire(26097),
    BulletinApi = webpackRequire(91627),
    BulletinListContextProvider = webpackRequire(30257),
    SiteUtils = webpackRequire(97521),
    SvgIcon47290 = webpackRequire(47290),
    stylesModule = webpackRequire(83219),
    styles = webpackRequire.n(stylesModule);
  let NEWS_TABS = [
      {
        label: "common.latest",
        value: "latest",
      },
      {
        label: "notice.tab.notices",
        value: "notices",
      },
      {
        label: "notice.tab.events",
        value: "events",
      },
      {
        label: "notice.tab.news",
        value: "news",
      },
    ],
    NoticeListSection = () => {
      let orientation = (0, useOrientation.M)(),
        { lang: lang, images: images } = (0, I18nProviderUseI18n.PO)(),
        { t: translate } = (0, I18nProviderUseI18n.Bd)(),
        {
          bulletins: bulletins,
          total: total,
          frontBulletinReady: frontBulletinReady,
        } = (0, BulletinListContextProvider.b)(),
        [currentTab, setCurrentTab] = (0, React.useState)("latest"),
        [pageCount, setPageCount] = (0, React.useState)(
          Math.ceil(total / ("portrait" === orientation ? 4 : BulletinApi.a)),
        );
      (0, React.useEffect)(() => {
        (setPageCount(Math.ceil(total / ("portrait" === orientation ? 4 : BulletinApi.a))),
          setPageItems(bulletins.slice(0, "portrait" === orientation ? 4 : BulletinApi.a)));
      }, [bulletins, total]);
      let isFetchingRef = (0, React.useRef)(!1),
        [pageItems, setPageItems] = (0, React.useState)(bulletins),
        [currentPage, setCurrentPage] = (0, React.useState)(0),
        goToPage = (0, React.useCallback)(
          async (pageIndex, tab) => {
            let pageSize = "portrait" === orientation ? 4 : BulletinApi.a;
            if (!isFetchingRef.current && frontBulletinReady) {
              isFetchingRef.current = !0;
              try {
                let { code: code, data: data } = await (0, BulletinApi.PZ)(
                  lang,
                  pageIndex + 1,
                  pageSize,
                  "latest" === tab ? void 0 : tab,
                );
                (0 === code &&
                  (null == data ? void 0 : data.list) &&
                  (setPageItems(data.list.filter((bulletin) => (0, SiteUtils.jx)(bulletin.cid, lang))),
                  setCurrentPage(pageIndex),
                  setPageCount(Math.ceil(data.total / pageSize))),
                  (isFetchingRef.current = !1));
              } catch (error) {
                (console.error(error),
                  Toast.A.message(translate("toast.networkError")),
                  (isFetchingRef.current = !1));
              }
            }
          },
          [frontBulletinReady, lang, translate, orientation],
        ),
        goPrev = (0, React.useCallback)(() => {
          goToPage((0, swiper.A)(currentPage - 1, 0, pageCount - 1), currentTab);
        }, [currentPage, goToPage, pageCount, currentTab]),
        goNext = (0, React.useCallback)(() => {
          goToPage((0, swiper.A)(currentPage + 1, 0, pageCount - 1), currentTab);
        }, [currentPage, goToPage, pageCount, currentTab]),
        disablePrev = (0, React.useMemo)(() => 0 === currentPage, [currentPage]),
        disableNext = (0, React.useMemo)(
          () => currentPage === pageCount - 1 || 0 === pageCount,
          [currentPage, pageCount],
        ),
        handleTabChange = (0, React.useCallback)(
          (nextTab) => {
            nextTab !== currentTab &&
              !isFetchingRef.current &&
              frontBulletinReady &&
              (setCurrentTab(nextTab), goToPage(0, nextTab));
          },
          [goToPage, frontBulletinReady, currentTab],
        );
      (0, module79549.w)(() => {
        goToPage(0, currentTab);
      }, [orientation]);
      let { showClose: showClose, handleClose: handleClose } = (0, useCloseButton.R)();
      return (0, jsx.jsxs)("div", {
        className: styles().sectionContainer,
        suppressHydrationWarning: !0,
        children: [
          (0, jsx.jsx)(NewsPageComponents.A, {
            title: translate("subpage.news.title"),
            titleEn: "News",
            icon: (0, jsx.jsx)(SvgIcon47290.A, {
              className: styles().titleIcon,
            }),
            type: "pumper",
          }),
          (0, jsx.jsx)(module62534.A, {
            className: styles().tabs,
            tabs: NEWS_TABS,
            currentTab: currentTab,
            onChange: handleTabChange,
          }),
          (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
            mode: "wait",
            children: (0, jsx.jsxs)(
              framerMotion.P.div,
              {
                className: styles().items,
                initial: {
                  opacity: 0,
                },
                animate: {
                  opacity: 1,
                },
                exit: {
                  opacity: 0,
                },
                transition: {
                  duration: 0.3,
                  ease: "easeOut",
                },
                suppressHydrationWarning: !0,
                children: [
                  pageItems.map((item) =>
                    (0, jsx.jsxs)(
                      "div",
                      {
                        className: styles().item,
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles().imageWrapper,
                            onClick: () => {
                              (SoundEffects.A.play(SoundEffects.d.common_click),
                                window.open("".concat("/" + lang, "/news/").concat(item.cid), "_blank"));
                            },
                            children: (0, jsx.jsx)("img", {
                              src: item.cover ? item.cover : images["bulletin.".concat(item.tab)],
                              alt: item.title,
                              className: styles().image,
                            }),
                          }),
                          (0, jsx.jsxs)("div", {
                            className: styles().subtitle,
                            children: [
                              (0, jsx.jsx)("span", {
                                className: styles().type,
                                children: translate("notice.tab.".concat(item.tab)),
                              }),
                              (0, jsx.jsx)("span", {
                                className: styles().date,
                                children: dayjsDefault()(1e3 * item.displayTime).format(
                                  translate("information.displayTimeFormat"),
                                ),
                              }),
                            ],
                          }),
                          (0, jsx.jsx)("div", {
                            className: styles().title,
                            children:
                              "portrait" === orientation
                                ? (0, jsx.jsx)(TextShrink.A, {
                                    text: item.title,
                                    options: {
                                      font: "HarmonySansRegular",
                                      length: 20,
                                    },
                                  })
                                : item.title,
                          }),
                        ],
                      },
                      item.cid,
                    ),
                  ),
                  0 === pageItems.length &&
                    (0, jsx.jsx)("div", {
                      className: styles().empty,
                      children: translate("subpage.news.empty"),
                    }),
                ],
              },
              "".concat(currentPage, "-").concat(currentTab),
            ),
          }),
          (0, jsx.jsx)(module44990.D, {
            children:
              "landscape" === orientation
                ? (0, jsx.jsx)(Pagination.Ay, {
                    pagination: "nav",
                    disablePrev: disablePrev,
                    disableNext: disableNext,
                    prev: goPrev,
                    next: goNext,
                    className: styles().pagination,
                    current: currentPage,
                    total: pageCount,
                    goToPage: goToPage,
                  })
                : (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(
                      styles().paginationWrapper,
                      showClose && styles().showBackButton,
                    ),
                    children: [
                      (0, jsx.jsx)(Pagination.Ay, {
                        pagination: "number",
                        disablePrev: disablePrev,
                        disableNext: disableNext,
                        prev: goPrev,
                        next: goNext,
                        className: styles().pagination,
                        current: currentPage,
                        total: pageCount,
                      }),
                      showClose &&
                        (0, jsx.jsx)(module70246.A, {
                          className: styles().backButton,
                          onClick: handleClose,
                          children: translate("common.back"),
                        }),
                    ],
                  }),
          }),
        ],
      });
    };
};
