// NoticeDetailSection (article page) — module 36979 from [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac
// module 36979 from [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac.js
// deps: 96424, 97028, 73235, 53079, 17540, 29190, 19460, 67002, 4948, 1162, 29521, 26097, 61127, 97521, 831
const module_36979 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    NoticeDetailSection: () => D_3,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    dayjs = webpackRequire(53079),
    dayjsDefault = webpackRequire.n(dayjs),
    lodashThrottle = webpackRequire(17540),
    SvgIcon29190 = webpackRequire(29190),
    SvgIcon19460 = webpackRequire(19460),
    useCloseButton = webpackRequire(67002),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
    TrackingGroupsEnum = webpackRequire(29521),
    SoundEffects = webpackRequire(26097),
    NoticeDetailContextProvider = webpackRequire(61127),
    SiteUtils = webpackRequire(97521),
    stylesModule = webpackRequire(831),
    styles = webpackRequire.n(stylesModule);
  let f_1 = (e_4) => {
      let { className: t_5 } = e_4;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17 14",
        className: t_5,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M1.311,0.541 L15.685,0.541 L15.685,3.021 L1.311,3.021 L1.311,0.541 ZM16.198,11.703 L14.446,13.457 L8.498,7.504 L2.551,13.457 L0.798,11.703 L8.498,3.996 L16.198,11.703 Z",
        }),
      });
    },
    E_2 = (e_6) => {
      if (SiteUtils.isServer) return e_6;
      if (!e_6) return "";
      let t_7 = new DOMParser().parseFromString(e_6, "text/html");
      return (
        t_7.querySelectorAll("th").forEach((e_8) => {
          let i_9 = t_7.createElement("div");
          i_9.className = styles().deco;
          let l_10 = t_7.createElement("div");
          ((l_10.className = styles().bg), i_9.appendChild(l_10));
          let n_11 = t_7.createElement("div");
          ((n_11.className = styles().l), i_9.appendChild(n_11));
          let a_12 = t_7.createElement("div");
          ((a_12.className = styles().rt), i_9.appendChild(a_12));
          let o_13 = t_7.createElement("div");
          ((o_13.className = styles().b), i_9.appendChild(o_13), e_8.prepend(i_9));
        }),
        t_7.querySelectorAll("p[data-indent]").forEach((e_14) => {
          let t_15 = e_14.style;
          t_15 && (t_15.paddingLeft = "calc(".concat(e_14.getAttribute("data-indent"), " * 1.5em)"));
        }),
        t_7.body.innerHTML
      );
    },
    D_3 = () => {
      let e_16 = (0, NoticeDetailContextProvider.z)(),
        { t: t_17 } = (0, I18nProviderUseI18n.Bd)(),
        i_18 = (0, React.useMemo)(() => {
          var t_25;
          return E_2(null != (t_25 = null == e_16 ? void 0 : e_16.data) ? t_25 : "");
        }, [null == e_16 ? void 0 : e_16.data]),
        { showClose: a_19, handleClose: c_20 } = (0, useCloseButton.R)(),
        w_21 = (0, React.useRef)(!1),
        [b_22, D_23] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        let e_26 = window.document.documentElement,
          t_27 = (0, lodashThrottle.A)(() => {
            e_26.scrollTop > 600
              ? (w_21.current || D_23(!0), (w_21.current = !0))
              : (w_21.current && D_23(!1), (w_21.current = !1));
          }, 300);
        return (
          e_26.addEventListener("scroll", t_27),
          e_26.addEventListener("wheel", t_27),
          () => {
            (e_26.removeEventListener("scroll", t_27), e_26.removeEventListener("wheel", t_27));
          }
        );
      }, []);
      let L_24 = (0, React.useRef)(!1);
      return (
        (0, React.useEffect)(() => {
          !L_24.current &&
            ((L_24.current = !0),
            (null == e_16 ? void 0 : e_16.cid) &&
              Tracking.A.collect("content_view", {
                group: TrackingGroupsEnum.Z.notice,
                target: e_16.cid,
              }));
        }, [null == e_16 ? void 0 : e_16.cid]),
        (0, jsx.jsxs)("div", {
          className: styles().sectionContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: classnamesDefault()(styles().backButton, b_22 && styles().active),
              onClick: () => {
                (window.document.documentElement.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }),
                  D_23(!1),
                  SoundEffects.A.play(SoundEffects.d.arrow_click));
              },
              children: (0, jsx.jsx)(f_1, {
                className: styles().icon,
              }),
            }),
            (0, jsx.jsx)("div", {
              className: styles().bgBottom,
            }),
            (0, jsx.jsx)(SvgIcon19460.A, {
              className: styles().decoLB,
            }),
            (0, jsx.jsxs)("div", {
              className: styles().contentContainer,
              children: [
                (0, jsx.jsxs)("div", {
                  className: styles().subtitle,
                  children: [
                    (0, jsx.jsx)("span", {
                      className: styles().type,
                      children: t_17("notice.tab.".concat(null == e_16 ? void 0 : e_16.tab)),
                    }),
                    (0, jsx.jsx)("span", {
                      className: styles().date,
                      children: dayjsDefault()(
                        (null == e_16 ? void 0 : e_16.displayTime) ? 1e3 * e_16.displayTime : 0,
                      ).format(t_17("information.displayTimeFormat") + " HH:mm"),
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles().title,
                  children: [
                    null == e_16 ? void 0 : e_16.title,
                    a_19 &&
                      (0, jsx.jsx)(SvgIcon29190.A, {
                        className: styles().close,
                        onClick: c_20,
                      }),
                  ],
                }),
                (0, jsx.jsx)("div", {
                  className: styles().divider,
                }),
                (0, jsx.jsx)("div", {
                  className: styles().content,
                  suppressHydrationWarning: !0,
                  dangerouslySetInnerHTML: {
                    __html: i_18,
                  },
                }),
              ],
            }),
          ],
        })
      );
    };
};
