/**
 * clipRevealAnimation — readable reconstruction of webpack module 84245 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * TextRevealAnimations holds anime.js helpers used across sections. zI (flickerReveal) runs three chained opacity 0->1 easeOutQuad steps of 100/85/70ms for an enter (70/85/100ms for an exit) and leaves the element at opacity 1 or 0. An internal uniform variant uses 3x100ms. iv (RevealPresence) is a div wrapper bound to framer-motion usePresence: on mount it runs the optional enter(el) callback (after enterDelay ms, preceded by a flicker), and on exit awaits exit(el) plus an exit flicker before calling safeToRemove. WO (clipRevealAnimation) returns an anime.js step config that animates clip-path polygons from a collapsed edge (left/right/top/bottom) with an ease-out-quart curve 1-(1-p)^4, in reveal or wipe-out mode, over the given duration. iI (addStaggeredReveal) appends elements (or {ele, portrait, options} entries) to a timeline as 300ms steps offset by -100ms, skipping display:none elements and portrait-mismatched entries by setting them straight to opacity 1.
 *
 * Exports (minified key → meaning):
 *   WO → clipRevealAnimation
 *   iI → addStaggeredReveal
 *   iv → RevealPresence
 *   zI → flickerReveal
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 84245 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 56578, 29671
const module_84245 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    WO: () => clipRevealAnimation,
    iI: () => addStaggeredReveal,
    iv: () => RevealPresence,
    zI: () => flickerReveal,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    animeJsDefault = webpackRequire(56578),
    framerMotion = webpackRequire(29671);
  let flickerReveal = (flickerElement, isExit) => {
      let flickerTimeline = animeJsDefault.A.timeline();
      return (
        flickerTimeline.add({
          targets: flickerElement,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: isExit ? 70 : 100,
        }),
        flickerTimeline.add({
          targets: flickerElement,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 85,
        }),
        flickerTimeline.add({
          targets: flickerElement,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: isExit ? 100 : 70,
          complete: () => {
            isExit
              ? flickerElement && (flickerElement.style.opacity = "0")
              : flickerElement && (flickerElement.style.opacity = "1");
          },
        }),
        flickerTimeline.finished
      );
    },
    flickerRevealUniform = (uniformElement, uniformIsExit) => {
      let uniformTimeline = animeJsDefault.A.timeline();
      return (
        uniformTimeline.add({
          targets: uniformElement,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 100,
        }),
        uniformTimeline.add({
          targets: uniformElement,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 100,
        }),
        uniformTimeline.add({
          targets: uniformElement,
          opacity: [0, 1],
          easing: "easeOutQuad",
          duration: 100,
          complete: () => {
            uniformIsExit
              ? uniformElement && (uniformElement.style.opacity = "0")
              : uniformElement && (uniformElement.style.opacity = "1");
          },
        }),
        uniformTimeline.finished
      );
    },
    RevealPresence = (props) => {
      let {
          className: className,
          style: style,
          children: children,
          enter: enter,
          exit: exit,
          enterDelay: enterDelay,
          ...restProps
        } = props,
        elementRef = (0, React.useRef)(null),
        [isPresent, safeToRemove] = (0, framerMotion.xQ)();
      return (
        (0, React.useEffect)(() => {
          if (isPresent)
            enterDelay
              ? setTimeout(() => {
                  (flickerReveal(elementRef.current, !1), null == enter || enter(elementRef.current));
                }, enterDelay)
              : null == enter || enter(elementRef.current);
          else {
            var exitPromise;
            Promise.all([
              null != (exitPromise = null == exit ? void 0 : exit(elementRef.current))
                ? exitPromise
                : Promise.resolve(),
              flickerReveal(elementRef.current, !0),
            ]).then(() => {
              safeToRemove();
            });
          }
        }, [isPresent]),
        (0, jsx.jsx)("div", {
          className: className,
          style: style,
          ref: elementRef,
          ...restProps,
          children: children,
        })
      );
    },
    clipRevealAnimation = (clipElement, direction, isReveal, clipDuration) => (
      clipElement &&
        ("left" === direction && isReveal
          ? (clipElement.style.clipPath = "polygon(0 0, 0 0, 0 100%, 0 100%)")
          : "right" === direction && isReveal
            ? (clipElement.style.clipPath = "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)")
            : "top" === direction && isReveal
              ? (clipElement.style.clipPath = "polygon(0 0, 100% 0, 100% 0, 0 0)")
              : "bottom" === direction && isReveal
                ? (clipElement.style.clipPath = "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)")
                : (clipElement.style.clipPath = "polygon(0 0, 100% 0, 100% 100%, 0 100%)")),
      {
        targets: clipElement,
        begin: () => {},
        update: (anim) => {
          if (!clipElement) return;
          let easedPercent = (1 - Math.pow(1 - 0.01 * anim.progress, 4)) * 100,
            percentString = "".concat(easedPercent, "%"),
            inversePercentString = "".concat(100 - easedPercent, "%");
          "left" === direction && isReveal
            ? (clipElement.style.clipPath = "polygon(0 0, "
                .concat(percentString, " 0, ")
                .concat(percentString, " 100%, 0 100%)"))
            : "right" === direction && isReveal
              ? (clipElement.style.clipPath = "polygon("
                  .concat(inversePercentString, " 0, 100% 0, 100% 100%, ")
                  .concat(inversePercentString, " 100%)"))
              : "top" === direction && isReveal
                ? (clipElement.style.clipPath = "polygon(0 0, 100% 0, 100% "
                    .concat(percentString, ", 0 ")
                    .concat(percentString, ")"))
                : "bottom" === direction && isReveal
                  ? (clipElement.style.clipPath = "polygon(0 "
                      .concat(inversePercentString, ", 100% ")
                      .concat(inversePercentString, ", 100% 100%, 0 100%)"))
                  : "left" !== direction || isReveal
                    ? "right" !== direction || isReveal
                      ? "top" !== direction || isReveal
                        ? "bottom" !== direction ||
                          isReveal ||
                          (clipElement.style.clipPath = "polygon(0 0, 100% 0, 100% "
                            .concat(inversePercentString, ", 0 ")
                            .concat(inversePercentString, ")"))
                        : (clipElement.style.clipPath = "polygon(0 "
                            .concat(percentString, ", 100% ")
                            .concat(percentString, ", 100% 100%, 0 100%)"))
                      : (clipElement.style.clipPath = "polygon(0 0, "
                          .concat(inversePercentString, " 0, ")
                          .concat(inversePercentString, " 100%, 0 100%)"))
                    : (clipElement.style.clipPath = "polygon("
                        .concat(percentString, " 0, 100% 0, 100% 100%, ")
                        .concat(percentString, " 100%)"));
        },
        duration: clipDuration,
      }
    ),
    addStaggeredReveal = (revealItems, existingTimeline, isPortrait) => {
      let timeline = null != existingTimeline ? existingTimeline : animeJsDefault.A.timeline(),
        animatedCount = 0;
      for (let revealItem of revealItems)
        if (revealItem)
          if (revealItem instanceof Element) {
            let itemElement = revealItem;
            "none" === getComputedStyle(itemElement).display
              ? timeline.add({
                  targets: itemElement,
                  duration: 1,
                  begin: () => {
                    itemElement && (itemElement.style.opacity = "1");
                  },
                })
              : (timeline.add(
                  {
                    targets: itemElement,
                    duration: 300,
                    begin: () => {
                      flickerRevealUniform(itemElement, !1);
                    },
                  },
                  "-=100",
                ),
                animatedCount++);
          } else {
            if (!revealItem || !("ele" in revealItem)) continue;
            let itemTargetElement = revealItem.ele;
            isPortrait !== revealItem.portrait || "none" === getComputedStyle(itemTargetElement).display
              ? timeline.add({
                  targets: itemTargetElement,
                  duration: 1,
                  complete: () => {
                    itemTargetElement && (itemTargetElement.style.opacity = "1");
                  },
                })
              : (timeline.add(
                  {
                    targets: itemTargetElement,
                    duration: 300,
                    begin: () => {
                      itemTargetElement && flickerRevealUniform(itemTargetElement, !1);
                    },
                    ...revealItem.options,
                  },
                  "-=100",
                ),
                animatedCount++);
          }
      return timeline;
    };
};
