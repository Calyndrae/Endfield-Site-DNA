/**
 * LoadingScreen — readable reconstruction of webpack module 71272 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * LoadingScreen (export E) runs every task function from the `tasks` prop on mount and counts completions; a framer-motion spring (stiffness 120, damping 20) and tween transitions of 0.5s drive a background blur from 8px to 0px, a progress bar (height in landscape, width in portrait) and a percent label that follows the bar (left 3.125rem in landscape), with the numeric text updated via onUpdate. When all tasks finish it calls onLeaving, adds the leaving class, sets the shared zustand store (export r) to loaded:true after 1500ms and calls onFinished after 2400ms. The layout shows the i18n SvgLogo component, the slogan 'OVER THE FRONTIER / INTO THE FRONT' and an 'Updating...' caption.
 *
 * Exports (minified key → meaning):
 *   E → LoadingScreen
 *   r → useLoadedStore
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 71272 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 60705, 6780, 45359, 99880, 90286, 4948, 11850
const module_71272 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    E: () => LoadingScreen,
    r: () => useLoadedStore,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotion = webpackRequire(60705),
    framerMotionUseMotionValue = webpackRequire(6780),
    framerMotionUseSpring = webpackRequire(45359),
    zustandCreate = webpackRequire(99880),
    useOrientation = webpackRequire(90286),
    I18nProviderUseI18n = webpackRequire(4948),
    stylesModule = webpackRequire(11850),
    styles = webpackRequire.n(stylesModule);
  let useLoadedStore = (0, zustandCreate.v)(() => ({
      loaded: !1,
    })),
    LoadingScreen = (props) => {
      let { tasks = [], onLeaving: onLeaving, onFinished: onFinished } = props,
        taskList = (0, React.useMemo)(() => [...tasks], [tasks]),
        {
          components: { SvgLogo: SvgLogo },
        } = (0, I18nProviderUseI18n.PO)(),
        [isLeaving, setIsLeaving] = (0, React.useState)(!1);
      (0, React.useRef)(null);
      let [completedCount, setCompletedCount] = (0, React.useState)(0),
        totalTasks = taskList.length,
        runTasks = () => {
          for (let task of (setCompletedCount(0), taskList))
            task().finally(() => {
              setCompletedCount((prevCompleted) => prevCompleted + 1);
            });
        },
        progressMotionValue = (0, framerMotionUseMotionValue.d)(0),
        progressSpring = (0, framerMotionUseSpring.z)(progressMotionValue, {
          stiffness: 120,
          damping: 20,
        });
      ((0, React.useEffect)(() => {
        progressSpring.set((completedCount / totalTasks) * 100);
      }, [completedCount, totalTasks, progressSpring]),
        (0, React.useEffect)(() => {
          runTasks();
        }, []),
        (0, React.useEffect)(() => {
          if (completedCount >= totalTasks) {
            (null == onLeaving || onLeaving(),
              setIsLeaving(!0),
              setTimeout(() => {
                useLoadedStore.setState({
                  loaded: !0,
                });
              }, 1500));
            let finishTimer = setTimeout(() => {
              null == onFinished || onFinished();
            }, 2400);
            return () => clearTimeout(finishTimer);
          }
          setIsLeaving(!1);
        }, [completedCount]));
      let isLandscape = "landscape" === (0, useOrientation.M)(),
        percentTextRef = (0, React.useRef)(null);
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles().container, {
          [styles().leaving]: isLeaving,
        }),
        onClick: () => {},
        children: [
          (0, jsx.jsx)(framerMotion.P.div, {
            className: styles().bg,
            animate: {
              filter: "blur(".concat(8 - (completedCount / totalTasks) * 8, "px)"),
            },
            transition: {
              type: "tween",
              duration: 0.5,
            },
          }),
          (0, jsx.jsx)("div", {
            className: styles().logo,
            children: (0, jsx.jsx)(SvgLogo, {}),
          }),
          (0, jsx.jsxs)("div", {
            className: styles().moreDeco,
            children: [
              (0, jsx.jsx)("div", {
                className: styles().deco,
              }),
              (0, jsx.jsx)("div", {
                className: styles().divider,
              }),
              (0, jsx.jsx)("div", {
                className: styles().slogan,
                children: "OVER THE FRONTIER / INTO THE FRONT",
              }),
              (0, jsx.jsx)("div", {
                className: styles().triangles,
              }),
            ],
          }),
          (0, jsx.jsxs)("div", {
            className: styles().progress,
            children: [
              (0, jsx.jsx)(framerMotion.P.div, {
                className: styles().progressBar,
                animate: isLandscape
                  ? {
                      height: "".concat((completedCount / totalTasks) * 100, "%"),
                      width: "100%",
                    }
                  : {
                      width: "".concat((completedCount / totalTasks) * 100, "%"),
                      height: "100%",
                    },
                transition: {
                  type: "tween",
                  duration: 0.5,
                },
              }),
              (0, jsx.jsxs)(framerMotion.P.div, {
                className: styles().progressText,
                animate: isLandscape
                  ? {
                      top: "".concat((completedCount / totalTasks) * 100, "%"),
                      left: "3.125rem",
                    }
                  : {
                      top: "unset",
                      left: "".concat((completedCount / totalTasks) * 100, "%"),
                    },
                transition: {
                  type: "tween",
                  duration: 0.5,
                },
                onUpdate: (latestAnimated) => {
                  percentTextRef.current &&
                    (percentTextRef.current.textContent = "".concat(
                      parseInt(
                        isLandscape ? latestAnimated.top.toString() : latestAnimated.left.toString(),
                      ) || 0,
                    ));
                },
                children: [
                  (0, jsx.jsxs)("div", {
                    className: styles().core,
                    children: [
                      (0, jsx.jsx)("span", {
                        ref: percentTextRef,
                        className: styles().value,
                        children: "0",
                      }),
                      (0, jsx.jsx)("span", {
                        className: styles().symbol,
                        children: "%",
                      }),
                    ],
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles().deco,
                    children: "Updating...",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
};
