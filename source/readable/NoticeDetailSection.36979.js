/**
 * NoticeDetailSection — readable reconstruction of webpack module 36979 (chunk [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(subpage)/news/[cid]/page-8dbf59fd3d1ac5ac.js
 *
 * News article page section. Reads the bulletin from NoticeDetailContextProvider and renders a back-to-top button (SVG viewBox 0 0 17 14; becomes `active` when documentElement.scrollTop > 600, checked by a lodash-throttled 300ms handler on scroll/wheel; click scrolls to top smoothly, hides the button and plays arrow_click), a bottom background, a left-bottom deco icon, a subtitle with the tab label and dayjs(displayTime*1000) formatted as information.displayTimeFormat + ' HH:mm', the title with an optional close icon from useCloseButton, a divider, and the HTML content. decorateNoticeHtml runs on the client only: it parses the HTML with DOMParser, prepends to every <th> a deco wrapper containing bg/l/rt/b divs, and sets paddingLeft = calc(<data-indent> * 1.5em) on p[data-indent]. A ref ensures Tracking.collect('content_view', {group: notice, target: cid}) fires once per cid.
 *
 * Exports (minified key → meaning):
 *   NoticeDetailSection → NoticeDetailSection
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 36979 from [lang]__(main)__(subpage)__news__[cid]__page-8dbf59fd3d1ac5ac.js
// deps: 96424, 97028, 73235, 53079, 17540, 29190, 19460, 67002, 4948, 1162, 29521, 26097, 61127, 97521, 831
const module_36979 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    NoticeDetailSection: () => NoticeDetailSection,
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
  let BackToTopIconSvg = (iconProps) => {
      let { className: iconClassName } = iconProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 17 14",
        className: iconClassName,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M1.311,0.541 L15.685,0.541 L15.685,3.021 L1.311,3.021 L1.311,0.541 ZM16.198,11.703 L14.446,13.457 L8.498,7.504 L2.551,13.457 L0.798,11.703 L8.498,3.996 L16.198,11.703 Z",
        }),
      });
    },
    decorateNoticeHtml = (html) => {
      if (SiteUtils.isServer) return html;
      if (!html) return "";
      let doc = new DOMParser().parseFromString(html, "text/html");
      return (
        doc.querySelectorAll("th").forEach((tableHeaderCell) => {
          let decoWrapper = doc.createElement("div");
          decoWrapper.className = styles().deco;
          let decoBg = doc.createElement("div");
          ((decoBg.className = styles().bg), decoWrapper.appendChild(decoBg));
          let decoLeft = doc.createElement("div");
          ((decoLeft.className = styles().l), decoWrapper.appendChild(decoLeft));
          let decoRightTop = doc.createElement("div");
          ((decoRightTop.className = styles().rt), decoWrapper.appendChild(decoRightTop));
          let decoBottom = doc.createElement("div");
          ((decoBottom.className = styles().b),
            decoWrapper.appendChild(decoBottom),
            tableHeaderCell.prepend(decoWrapper));
        }),
        doc.querySelectorAll("p[data-indent]").forEach((indentedParagraph) => {
          let paragraphStyle = indentedParagraph.style;
          paragraphStyle &&
            (paragraphStyle.paddingLeft = "calc(".concat(
              indentedParagraph.getAttribute("data-indent"),
              " * 1.5em)",
            ));
        }),
        doc.body.innerHTML
      );
    },
    NoticeDetailSection = () => {
      let bulletin = (0, NoticeDetailContextProvider.z)(),
        { t: translate } = (0, I18nProviderUseI18n.Bd)(),
        contentHtml = (0, React.useMemo)(() => {
          var rawContent;
          return decorateNoticeHtml(
            null != (rawContent = null == bulletin ? void 0 : bulletin.data) ? rawContent : "",
          );
        }, [null == bulletin ? void 0 : bulletin.data]),
        { showClose: showClose, handleClose: handleClose } = (0, useCloseButton.R)(),
        isPastThresholdRef = (0, React.useRef)(!1),
        [showBackToTop, setShowBackToTop] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        let docElement = window.document.documentElement,
          handleScroll = (0, lodashThrottle.A)(() => {
            docElement.scrollTop > 600
              ? (isPastThresholdRef.current || setShowBackToTop(!0), (isPastThresholdRef.current = !0))
              : (isPastThresholdRef.current && setShowBackToTop(!1), (isPastThresholdRef.current = !1));
          }, 300);
        return (
          docElement.addEventListener("scroll", handleScroll),
          docElement.addEventListener("wheel", handleScroll),
          () => {
            (docElement.removeEventListener("scroll", handleScroll),
              docElement.removeEventListener("wheel", handleScroll));
          }
        );
      }, []);
      let hasTrackedViewRef = (0, React.useRef)(!1);
      return (
        (0, React.useEffect)(() => {
          !hasTrackedViewRef.current &&
            ((hasTrackedViewRef.current = !0),
            (null == bulletin ? void 0 : bulletin.cid) &&
              Tracking.A.collect("content_view", {
                group: TrackingGroupsEnum.Z.notice,
                target: bulletin.cid,
              }));
        }, [null == bulletin ? void 0 : bulletin.cid]),
        (0, jsx.jsxs)("div", {
          className: styles().sectionContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: classnamesDefault()(styles().backButton, showBackToTop && styles().active),
              onClick: () => {
                (window.document.documentElement.scrollTo({
                  top: 0,
                  behavior: "smooth",
                }),
                  setShowBackToTop(!1),
                  SoundEffects.A.play(SoundEffects.d.arrow_click));
              },
              children: (0, jsx.jsx)(BackToTopIconSvg, {
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
                      children: translate("notice.tab.".concat(null == bulletin ? void 0 : bulletin.tab)),
                    }),
                    (0, jsx.jsx)("span", {
                      className: styles().date,
                      children: dayjsDefault()(
                        (null == bulletin ? void 0 : bulletin.displayTime) ? 1e3 * bulletin.displayTime : 0,
                      ).format(translate("information.displayTimeFormat") + " HH:mm"),
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles().title,
                  children: [
                    null == bulletin ? void 0 : bulletin.title,
                    showClose &&
                      (0, jsx.jsx)(SvgIcon29190.A, {
                        className: styles().close,
                        onClick: handleClose,
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
                    __html: contentHtml,
                  },
                }),
              ],
            }),
          ],
        })
      );
    };
};
