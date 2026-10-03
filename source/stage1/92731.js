// NoticeListSection (news index) — module 92731 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1
// module 92731 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js
// deps: 96424, 97028, 73235, 53079, 80187, 30998, 60705, 70246, 44990, 2682, 86797, 62534, 71985, 51967, 90286, 67002, 79549, 4948, 26097, 91627, 30257, 97521, 47290, 83219
const module_92731 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    NoticeListSection: () => H_2,
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
  let k_1 = [
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
    H_2 = () => {
      let e_3 = (0, useOrientation.M)(),
        { lang: L_4, images: t_5 } = (0, I18nProviderUseI18n.PO)(),
        { t: i_6 } = (0, I18nProviderUseI18n.Bd)(),
        { bulletins: l_7, total: S_8, frontBulletinReady: H_9 } = (0, BulletinListContextProvider.b)(),
        [T_10, A_11] = (0, React.useState)("latest"),
        [E_12, B_13] = (0, React.useState)(Math.ceil(S_8 / ("portrait" === e_3 ? 4 : BulletinApi.a)));
      (0, React.useEffect)(() => {
        (B_13(Math.ceil(S_8 / ("portrait" === e_3 ? 4 : BulletinApi.a))),
          O_16(l_7.slice(0, "portrait" === e_3 ? 4 : BulletinApi.a)));
      }, [l_7, S_8]);
      let P_14 = (0, React.useRef)(!1),
        [W_15, O_16] = (0, React.useState)(l_7),
        [I_17, R_18] = (0, React.useState)(0),
        D_19 = (0, React.useCallback)(
          async (t_27, a_28) => {
            let s_29 = "portrait" === e_3 ? 4 : BulletinApi.a;
            if (!P_14.current && H_9) {
              P_14.current = !0;
              try {
                let { code: e_30, data: i_31 } = await (0, BulletinApi.PZ)(
                  L_4,
                  t_27 + 1,
                  s_29,
                  "latest" === a_28 ? void 0 : a_28,
                );
                (0 === e_30 &&
                  (null == i_31 ? void 0 : i_31.list) &&
                  (O_16(i_31.list.filter((e_32) => (0, SiteUtils.jx)(e_32.cid, L_4))),
                  R_18(t_27),
                  B_13(Math.ceil(i_31.total / s_29))),
                  (P_14.current = !1));
              } catch (e_33) {
                (console.error(e_33), Toast.A.message(i_6("toast.networkError")), (P_14.current = !1));
              }
            }
          },
          [H_9, L_4, i_6, e_3],
        ),
        V_20 = (0, React.useCallback)(() => {
          D_19((0, swiper.A)(I_17 - 1, 0, E_12 - 1), T_10);
        }, [I_17, D_19, E_12, T_10]),
        q_21 = (0, React.useCallback)(() => {
          D_19((0, swiper.A)(I_17 + 1, 0, E_12 - 1), T_10);
        }, [I_17, D_19, E_12, T_10]),
        U_22 = (0, React.useMemo)(() => 0 === I_17, [I_17]),
        F_23 = (0, React.useMemo)(() => I_17 === E_12 - 1 || 0 === E_12, [I_17, E_12]),
        G_24 = (0, React.useCallback)(
          (e_34) => {
            e_34 !== T_10 && !P_14.current && H_9 && (A_11(e_34), D_19(0, e_34));
          },
          [D_19, H_9, T_10],
        );
      (0, module79549.w)(() => {
        D_19(0, T_10);
      }, [e_3]);
      let { showClose: J_25, handleClose: Q_26 } = (0, useCloseButton.R)();
      return (0, jsx.jsxs)("div", {
        className: styles().sectionContainer,
        suppressHydrationWarning: !0,
        children: [
          (0, jsx.jsx)(NewsPageComponents.A, {
            title: i_6("subpage.news.title"),
            titleEn: "News",
            icon: (0, jsx.jsx)(SvgIcon47290.A, {
              className: styles().titleIcon,
            }),
            type: "pumper",
          }),
          (0, jsx.jsx)(module62534.A, {
            className: styles().tabs,
            tabs: k_1,
            currentTab: T_10,
            onChange: G_24,
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
                  W_15.map((s_35) =>
                    (0, jsx.jsxs)(
                      "div",
                      {
                        className: styles().item,
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles().imageWrapper,
                            onClick: () => {
                              (SoundEffects.A.play(SoundEffects.d.common_click),
                                window.open("".concat("/" + L_4, "/news/").concat(s_35.cid), "_blank"));
                            },
                            children: (0, jsx.jsx)("img", {
                              src: s_35.cover ? s_35.cover : t_5["bulletin.".concat(s_35.tab)],
                              alt: s_35.title,
                              className: styles().image,
                            }),
                          }),
                          (0, jsx.jsxs)("div", {
                            className: styles().subtitle,
                            children: [
                              (0, jsx.jsx)("span", {
                                className: styles().type,
                                children: i_6("notice.tab.".concat(s_35.tab)),
                              }),
                              (0, jsx.jsx)("span", {
                                className: styles().date,
                                children: dayjsDefault()(1e3 * s_35.displayTime).format(
                                  i_6("information.displayTimeFormat"),
                                ),
                              }),
                            ],
                          }),
                          (0, jsx.jsx)("div", {
                            className: styles().title,
                            children:
                              "portrait" === e_3
                                ? (0, jsx.jsx)(TextShrink.A, {
                                    text: s_35.title,
                                    options: {
                                      font: "HarmonySansRegular",
                                      length: 20,
                                    },
                                  })
                                : s_35.title,
                          }),
                        ],
                      },
                      s_35.cid,
                    ),
                  ),
                  0 === W_15.length &&
                    (0, jsx.jsx)("div", {
                      className: styles().empty,
                      children: i_6("subpage.news.empty"),
                    }),
                ],
              },
              "".concat(I_17, "-").concat(T_10),
            ),
          }),
          (0, jsx.jsx)(module44990.D, {
            children:
              "landscape" === e_3
                ? (0, jsx.jsx)(Pagination.Ay, {
                    pagination: "nav",
                    disablePrev: U_22,
                    disableNext: F_23,
                    prev: V_20,
                    next: q_21,
                    className: styles().pagination,
                    current: I_17,
                    total: E_12,
                    goToPage: D_19,
                  })
                : (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(
                      styles().paginationWrapper,
                      J_25 && styles().showBackButton,
                    ),
                    children: [
                      (0, jsx.jsx)(Pagination.Ay, {
                        pagination: "number",
                        disablePrev: U_22,
                        disableNext: F_23,
                        prev: V_20,
                        next: q_21,
                        className: styles().pagination,
                        current: I_17,
                        total: E_12,
                      }),
                      J_25 &&
                        (0, jsx.jsx)(module70246.A, {
                          className: styles().backButton,
                          onClick: Q_26,
                          children: i_6("common.back"),
                        }),
                    ],
                  }),
          }),
        ],
      });
    };
};
