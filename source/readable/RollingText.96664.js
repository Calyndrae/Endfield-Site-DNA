/**
 * RollingText — readable reconstruction of webpack module 96664 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * Despite the 'EasingFunctions' label, this module is a RollingText marquee component (export A): after a 0ms timeout it measures the inner content against its container and, when the content is wider, adds the `rolling` class and plays a looping anime.js timeline: 1000ms hold, linear scroll by the overflow width at 1000ms per 40px (duration 1000*ceil(overflow/40)), 1000ms hold, 300ms easeInCubic fade out, a 10ms reset of translateX to 0, then a 300ms easeOutCubic fade in. It is used in OperatorSection for the operator camp value, which may overflow in some locales. Named easings used here are linear, easeInCubic and easeOutCubic.
 *
 * Exports (minified key → meaning):
 *   A → RollingText
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 96664 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 56578, 73235, 45876
const module_96664 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => RollingText,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    animeJsDefault = webpackRequire(56578),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    stylesModule = webpackRequire(45876),
    styles = webpackRequire.n(stylesModule);
  let createRollingTimeline = (rollingTarget, overflowWidth) => {
      let rollingTimeline = animeJsDefault.A.timeline({
        loop: !0,
      });
      return (
        console.log(overflowWidth),
        rollingTimeline.add({
          duration: 1e3,
        }),
        rollingTimeline.add({
          targets: rollingTarget,
          easing: "linear",
          duration: 1e3 * Math.ceil(overflowWidth / 40),
          translateX: -overflowWidth,
        }),
        rollingTimeline.add({
          duration: 1e3,
        }),
        rollingTimeline.add({
          targets: rollingTarget,
          duration: 300,
          easing: "easeInCubic",
          opacity: [1, 0],
        }),
        rollingTimeline.add({
          targets: rollingTarget,
          duration: 10,
          translateX: 0,
        }),
        rollingTimeline.add({
          targets: rollingTarget,
          duration: 300,
          easing: "easeOutCubic",
          opacity: [0, 1],
        }),
        rollingTimeline
      );
    },
    RollingText = (props) => {
      let { className: className, style: style, children: children } = props,
        containerRef = React.useRef(null),
        contentRef = React.useRef(null);
      return (
        (0, React.useEffect)(() => {
          let measureTimer = window.setTimeout(() => {
            if (containerRef.current && contentRef.current) {
              let containerWidth = containerRef.current.clientWidth,
                contentWidth = contentRef.current.clientWidth;
              contentWidth > containerWidth
                ? (containerRef.current.classList.add(styles().rolling),
                  createRollingTimeline(contentRef.current, contentWidth - containerWidth).play())
                : containerRef.current.classList.remove(styles().rolling);
            }
          }, 0);
          return () => window.clearTimeout(measureTimer);
        }, [children]),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(styles().rollingContent, className),
          ref: containerRef,
          style: style,
          children: (0, jsx.jsx)("div", {
            className: styles().overflowWrapper,
            children: (0, jsx.jsx)("div", {
              ref: contentRef,
              className: styles().contentContainer,
              children: (0, jsx.jsx)("div", {
                className: styles().realContent,
                children: children,
              }),
            }),
          }),
        })
      );
    };
};
