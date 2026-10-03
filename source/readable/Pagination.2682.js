/**
 * Pagination — readable reconstruction of webpack module 2682 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * Pagination (export Ay) renders prev/next arrow buttons (each plays arrow_click) around either a 'number' readout (current+1 / total) or a 'nav' carousel of zero-padded page blocks. The carousel keeps a sliding window of 4 visible blocks (CENTER_OFFSET = Math.ceil(2)-1 = 1), renders up to 4 extra blocks on each side for the slide animation, positions each block with translateX in multiples of blockWidth (default 4rem) and sets the container width to min(total,4)*blockWidth rem; clicking a block plays common_click and calls goToPage(index). The type prop (default 'light') maps to a CSS-module class and disablePrev/disableNext add the disabled class. Export MS is the 18x27 left-chevron SVG used by the arrow buttons and reused by OperatorSection.
 *
 * Exports (minified key → meaning):
 *   Ay → Pagination
 *   MS → SvgArrowLeftIcon
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 2682 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 26097, 96970
const module_2682 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ay: () => Pagination,
    MS: () => SvgArrowLeftIcon,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    SoundEffects = webpackRequire(26097),
    stylesModule = webpackRequire(96970),
    styles = webpackRequire.n(stylesModule);
  let CENTER_OFFSET = Math.ceil(2) - 1,
    getBlockTransform = (currentPage, blockIndex, totalPages, blockWidthRem) => {
      if (totalPages <= 4) return "translateX(".concat(blockIndex * blockWidthRem, "rem)");
      let slotPosition = 0;
      return (
        (slotPosition =
          currentPage <= CENTER_OFFSET
            ? blockIndex
            : currentPage >= totalPages - 4 + CENTER_OFFSET
              ? blockIndex - totalPages + 4
              : blockIndex - currentPage + CENTER_OFFSET),
        "translateX(".concat(slotPosition * blockWidthRem, "rem)")
      );
    },
    PageNumberCarousel = (carouselProps) => {
      let {
          className: carouselClassName,
          style: carouselStyle,
          current: carouselCurrent,
          total: carouselTotal,
          blockWidth = 4,
          goToPage: carouselGoToPage,
        } = carouselProps,
        visiblePages = (0, React.useMemo)(() => {
          if (carouselTotal <= 4)
            return Array.from(
              {
                length: carouselTotal,
              },
              (unusedSmallValue, smallPageIndex) => smallPageIndex + 1,
            );
          let windowStart = carouselCurrent - CENTER_OFFSET,
            windowEnd = carouselCurrent - CENTER_OFFSET + 4;
          (windowStart < 0 && ((windowStart = 0), (windowEnd = 4)),
            windowEnd > carouselTotal && ((windowEnd = carouselTotal), (windowStart = carouselTotal - 4)));
          let renderStart = Math.max(windowStart - 4, 0);
          return Array.from(
            {
              length: Math.min(windowEnd + 4, carouselTotal) - renderStart,
            },
            (unusedLargeValue, largePageOffset) => renderStart + largePageOffset + 1,
          );
        }, [carouselCurrent, carouselTotal]);
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles().carousel, carouselClassName),
        style: {
          ...carouselStyle,
          width: "".concat(Math.min(carouselTotal, 4) * blockWidth, "rem"),
        },
        children: visiblePages.map((pageNumber) =>
          (0, jsx.jsx)(
            "div",
            {
              className: classnamesDefault()(
                styles().block,
                pageNumber === carouselCurrent + 1 && styles().active,
              ),
              style: {
                width: "".concat(blockWidth, "rem"),
                transform: getBlockTransform(carouselCurrent, pageNumber - 1, carouselTotal, blockWidth),
              },
              onClick: () => {
                (SoundEffects.A.play(SoundEffects.d.common_click),
                  null == carouselGoToPage || carouselGoToPage(pageNumber - 1));
              },
              children: pageNumber.toString().padStart(2, "0"),
            },
            pageNumber,
          ),
        ),
      });
    },
    SvgArrowLeftIcon = (arrowProps) => {
      let { className: arrowClassName } = arrowProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 18 27",
        className: arrowClassName,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M14.142,0.127 L17.753,3.737 L7.963,13.527 L17.753,23.318 L14.142,26.928 L0.743,13.527 L14.142,0.127 Z",
        }),
      });
    },
    Pagination = (props) => {
      let {
        className: className,
        style: style,
        disablePrev: disablePrev,
        disableNext: disableNext,
        prev: onPrev,
        next: onNext,
        pagination: paginationMode,
        goToPage: goToPage,
        current: current,
        total: total,
        type: theme = "light",
      } = props;
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(
          styles().pagination,
          "number" === paginationMode && styles().number,
          "nav" === paginationMode && styles().nav,
          className,
          styles()[theme],
        ),
        style: style,
        children: [
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles().button, disablePrev && styles().disabled),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), null == onPrev || onPrev());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles().border,
              }),
              (0, jsx.jsx)(SvgArrowLeftIcon, {
                className: styles().arrow,
              }),
            ],
          }),
          "number" === paginationMode &&
            (0, jsx.jsxs)("div", {
              className: styles().paginationNumber,
              children: [
                (0, jsx.jsx)("span", {
                  children: (null != current ? current : 0) + 1,
                }),
                (0, jsx.jsx)("span", {
                  className: styles().divider,
                  children: "/",
                }),
                (0, jsx.jsx)("span", {
                  children: total,
                }),
              ],
            }),
          "nav" === paginationMode &&
            (0, jsx.jsx)(PageNumberCarousel, {
              current: null != current ? current : 0,
              total: total || 1,
              goToPage: goToPage,
            }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles().button, disableNext && styles().disabled),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), null == onNext || onNext());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles().border,
              }),
              (0, jsx.jsx)(SvgArrowLeftIcon, {
                className: classnamesDefault()(styles().arrow, styles().right),
              }),
            ],
          }),
        ],
      });
    };
};
