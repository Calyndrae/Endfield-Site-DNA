/**
 * OperatorSection — readable reconstruction of webpack module 3492 (chunk 226-d5292700ff68fd13.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/226-d5292700ff68fd13.js
 *
 * OperatorSection renders the homepage character stage: a wrap-around avatar rail (OperatorSwitcher, items spaced 13rem horizontally in portrait or 12.25rem vertically in landscape with a 1.875rem base offset, paging by 4), a 2D illustration that slides in from 18rem over 8000ms with cubicBezier(0,1,0,.97), and a 3D mode that swaps in a TransparentVideo playing the operator's `enter` clip then looping `idle` (loading badge fades in over 300ms easeOutQuad, out over 300ms easeInCubic). Once the section is 40% in view and the LoadingScreen store reports loaded, an anime.js entrance timeline runs: deco flag/text/tape/line slide in at 300ms (400ms easeOutQuad, 1ms in portrait), title/content/header slide from -100% at 600ms, illustration fades in and slides from 15rem over 5000ms cubicBezier(0,1,0,.95), buttons fade in at 1200ms (landscape) or 800ms (portrait). Clicks play char_click / arrow_click / close_click / char_detail_enter sounds; viewing an operator fires a content_view tracking event in group section_character; the 'All Operators' button opens /{lang}/operator in a new tab, and low-end browsers (Vivo/Oppo/MIUI/Quark) hide the 3D switch.
 *
 * Exports (minified key → meaning):
 *   W → OperatorSection
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 3492 from 226-d5292700ff68fd13.js
// deps: 96424, 97028, 56578, 73235, 19213, 30998, 60705, 49095, 73422, 29190, 52271, 2142, 7919, 52652, 96664, 90286, 4948, 1162, 29521, 26097, 97521, 15723, 71272, 89748, 29671, 22715, 2682, 40489, 84245, 68408, 9704
const module_3492 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    W: () => OperatorSection,
  });
  var magnifierIconPath,
    jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    animeJsDefault = webpackRequire(56578),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotionUseInView = webpackRequire(19213),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    SvgIcon73422 = webpackRequire(73422),
    SvgIcon29190 = webpackRequire(29190),
    SvgIcon52271 = webpackRequire(52271),
    React2 = webpackRequire(2142);
  function extendsPolyfill() {
    return (extendsPolyfill = Object.assign
      ? Object.assign.bind()
      : function (extendsTarget) {
          for (var extendsArgIndex = 1; extendsArgIndex < arguments.length; extendsArgIndex++) {
            var extendsSource = arguments[extendsArgIndex];
            for (var extendsKey in extendsSource)
              ({}).hasOwnProperty.call(extendsSource, extendsKey) &&
                (extendsTarget[extendsKey] = extendsSource[extendsKey]);
          }
          return extendsTarget;
        }).apply(null, arguments);
  }
  let SvgMagnifierIcon = function (svgProps) {
    return React2.createElement(
      "svg",
      extendsPolyfill(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 42 42",
        },
        svgProps,
      ),
      magnifierIconPath ||
        (magnifierIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M41.091,35.670 L32.104,26.683 C33.714,24.098 34.646,21.049 34.646,17.780 C34.646,13.122 32.759,8.906 29.706,5.854 L25.366,10.194 C27.309,12.137 28.513,14.821 28.513,17.780 C28.513,23.698 23.698,28.513 17.780,28.513 C11.862,28.513 7.047,23.698 7.047,17.780 C7.047,11.862 11.862,7.047 17.780,7.047 C17.869,7.047 17.955,7.058 18.043,7.060 L18.043,0.920 C17.955,0.919 17.868,0.913 17.780,0.913 C8.465,0.913 0.914,8.465 0.914,17.780 C0.914,27.095 8.465,34.646 17.780,34.646 C21.049,34.646 24.099,33.714 26.683,32.104 L35.670,41.090 L41.091,35.670 Z",
        })),
    );
  };
  var stylesModule = webpackRequire(7919),
    styles = webpackRequire.n(stylesModule);
  let BackButton = (backButtonProps) => {
    let {
      className: backButtonClassName,
      style: backButtonStyle,
      text: backButtonText,
      onClick: backButtonOnClick,
    } = backButtonProps;
    return (0, jsx.jsx)("div", {
      className: classnamesDefault()(styles().backButton, backButtonClassName),
      style: backButtonStyle,
      onClick: backButtonOnClick,
      children: backButtonText,
    });
  };
  var HollowText = webpackRequire(52652),
    RollingText = webpackRequire(96664),
    useOrientation = webpackRequire(90286),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
    TrackingGroupsEnum = webpackRequire(29521),
    SoundEffects = webpackRequire(26097),
    SiteUtils = webpackRequire(97521),
    DeviceUtils = webpackRequire(15723),
    LoadingScreenFirstLoadProgressLoadedStore = webpackRequire(71272),
    animeJsHelpersSmallVendorUtils = webpackRequire(89748),
    framerMotion2 = webpackRequire(29671),
    SvgIcon22715 = webpackRequire(22715),
    Pagination = webpackRequire(2682),
    TransparentVideo = webpackRequire(40489),
    TextRevealAnimations = webpackRequire(84245),
    OperatorVideoClips = webpackRequire(68408),
    stylesModule2 = webpackRequire(9704),
    styles2 = webpackRequire.n(stylesModule2);
  let wrapIndex = (wrapList, wrapRawIndex) =>
      ((wrapRawIndex % wrapList.length) + wrapList.length) % wrapList.length,
    getSwitchItemTransform = (railItemIndex, railCenterIndex, railIsPortrait) => {
      let railOffset = railItemIndex - railCenterIndex;
      return railIsPortrait
        ? "translateX(".concat((railOffset + 1) * 13 + 1.875, "rem)")
        : "translateY(".concat((railOffset + 1) * 12.25 + 1.875, "rem)");
    },
    useOperatorIndex = function (indexHookList) {
      let initIndex = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
        initialRawIndex = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        [rawIndex, setRawIndex] = (0, React.useState)(initialRawIndex);
      return {
        props: {
          currentIndex: rawIndex,
          setCurrentIndex: setRawIndex,
          list: indexHookList,
          initIndex: initIndex,
        },
        currentIndex: wrapIndex(indexHookList, rawIndex),
      };
    },
    Operator3dVideo = (video3dProps) => {
      let { currentIndex: video3dIndex, inView: video3dInView } = video3dProps,
        transVideoRef = (0, React.useRef)(null),
        video3dOperator = (0, I18nProviderUseI18n.gL)()[video3dIndex],
        [isPresent, safeToRemove] = (0, framerMotion2.xQ)(),
        idleStartedRef = (0, React.useRef)(!1),
        inViewRef = (0, React.useRef)(video3dInView),
        loadingContainerRef = (0, React.useRef)(null),
        videoEleContainerRef = (0, React.useRef)(null),
        videoContainerRef = (0, React.useRef)(null),
        playEnterSequence = (0, React.useCallback)(async () => {
          var enterClipLookup;
          let transVideoHandle = transVideoRef.current;
          if (!transVideoHandle) return;
          let videoElement = transVideoHandle.video,
            canPlayThroughPromise = new Promise((resolveCanPlay) => {
              videoElement.addEventListener("canplaythrough", () => {
                resolveCanPlay();
              });
            });
          ((videoElement.src =
            null == (enterClipLookup = OperatorVideoClips.p[video3dOperator.key])
              ? void 0
              : enterClipLookup.enter),
            videoElement.load(),
            videoElement.pause());
          let loadingInTimeline = animeJsDefault.A.timeline();
          (loadingInTimeline.add({
            targets: loadingContainerRef.current,
            opacity: [0, 1],
            translateY: ["-20%", "-50%"],
            translateX: ["-50%", "-50%"],
            duration: 300,
            easing: "easeOutQuad",
          }),
            loadingInTimeline.add({
              targets: {},
              duration: 500,
            }));
          let loadingInFinished = loadingInTimeline.finished;
          await Promise.all([canPlayThroughPromise, loadingInFinished]);
          let revealTimeline = animeJsDefault.A.timeline();
          (revealTimeline.add(
            {
              targets: loadingContainerRef.current,
              opacity: [1, 0],
              translateY: ["-50%", "-70%"],
              translateX: ["-50%", "-50%"],
              duration: 300,
              easing: "easeInCubic",
            },
            0,
          ),
            revealTimeline.add(
              {
                targets: videoEleContainerRef.current,
                opacity: [0, 1],
                duration: 200,
                easing: "easeOutCubic",
                begin: () => {
                  (console.log("play3", inViewRef.current),
                    inViewRef.current && transVideoHandle.trans.activate(),
                    inViewRef.current && videoElement.play().catch(animeJsHelpersSmallVendorUtils.A));
                  let onEnterEnded = () => {
                    var idleClipLookup;
                    ((idleStartedRef.current = !0),
                      (transVideoHandle.video.src =
                        null == (idleClipLookup = OperatorVideoClips.p[video3dOperator.key])
                          ? void 0
                          : idleClipLookup.idle),
                      transVideoHandle.video.play().catch(animeJsHelpersSmallVendorUtils.A),
                      (transVideoHandle.video.loop = !0),
                      transVideoHandle.video.removeEventListener("ended", onEnterEnded));
                  };
                  transVideoHandle.video.addEventListener("ended", onEnterEnded);
                },
                complete: () => {},
              },
              200,
            ));
        }, [video3dOperator.key]);
      return (
        (0, React.useEffect)(() => {
          var playHandle, pauseHandle;
          (video3dInView ? (inViewRef.current = !0) : (inViewRef.current = !1),
            video3dInView
              ? idleStartedRef.current &&
                (null == (playHandle = transVideoRef.current) ||
                  playHandle.video.play().catch(animeJsHelpersSmallVendorUtils.A))
              : idleStartedRef.current &&
                (null == (pauseHandle = transVideoRef.current) || pauseHandle.video.pause()));
        }, [video3dInView]),
        (0, React.useEffect)(() => {
          isPresent
            ? playEnterSequence()
            : (0, TextRevealAnimations.zI)(videoContainerRef.current, !1).then(() => {
                safeToRemove();
              });
        }, [isPresent, playEnterSequence, safeToRemove]),
        (0, jsx.jsxs)("div", {
          className: styles2().videoContainer,
          ref: videoContainerRef,
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().loadingContainer,
              ref: loadingContainerRef,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().videoEleContainer,
              ref: videoEleContainerRef,
              "data-key": video3dOperator.key,
              children: (0, jsx.jsx)(TransparentVideo.y, {
                className: styles2().video,
                ref: transVideoRef,
              }),
            }),
          ],
        })
      );
    },
    OperatorIllustration = (illustrationProps) => {
      let {
          currentIndex: illustrationIndex,
          is3dActive: is3dActive,
          inView: illustrationInView,
          downgrade: downgrade,
          detailMode: illustrationDetailMode,
        } = illustrationProps,
        illustrationOperator = (0, I18nProviderUseI18n.gL)()[illustrationIndex];
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles2().illustrationContainer, {
          [styles2().detailMode]: illustrationDetailMode,
        }),
        children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
          mode: "wait",
          propagate: !0,
          children: is3dActive
            ? (0, jsx.jsx)(
                Operator3dVideo,
                {
                  inView: illustrationInView,
                  currentIndex: illustrationIndex,
                },
                illustrationOperator.key,
              )
            : (0, jsx.jsx)(TextRevealAnimations.iv, {
                enter: (illustrationElement) =>
                  animeJsDefault.A.timeline()
                    .add({
                      targets: illustrationElement,
                      duration: 300,
                      opacity: [0, 1],
                      easing: "easeOutCubic",
                    })
                    .add(
                      {
                        targets: illustrationElement,
                        easing: "cubicBezier(0,1,0,.97)",
                        duration: 8e3,
                        translateX: ["18rem", "0rem"],
                      },
                      0,
                    ).finished,
                className: styles2().illustration,
                "data-key": illustrationOperator.key,
              }),
        }),
      });
    },
    OperatorSwitcher = (switcherProps) => {
      let {
          className: switcherClassName,
          style: switcherStyle,
          currentIndex: switcherCurrentIndex,
          setCurrentIndex: setSwitcherCurrentIndex,
          initIndex: switcherInitIndex,
          list: switcherList = [],
        } = switcherProps,
        [centerIndex, setCenterIndex] = (0, React.useState)(switcherInitIndex || 0),
        visibleItemIndices = (0, React.useMemo)(() => {
          let rangeStart = centerIndex - 1,
            rangeEnd = centerIndex + 2,
            indexList = [];
          for (let rangeIndex = rangeStart - 4; rangeIndex <= rangeEnd + 4; rangeIndex++)
            indexList.push(rangeIndex);
          return indexList;
        }, [centerIndex]),
        shiftForward = (0, React.useCallback)(() => {
          setCenterIndex((prevCenterForward) => prevCenterForward + 4);
        }, []),
        shiftBackward = (0, React.useCallback)(() => {
          setCenterIndex((prevCenterBackward) => prevCenterBackward - 4);
        }, []),
        selectItem = (0, React.useCallback)((selectedIndex) => {
          (setSwitcherCurrentIndex(selectedIndex), setCenterIndex(selectedIndex));
        }, []),
        isPortraitSwitcher = "portrait" === (0, useOrientation.M)();
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles2().operatorSwitcher, switcherClassName),
        style: switcherStyle,
        children: [
          (0, jsx.jsx)("div", {
            className: styles2().itemContainer,
            children: visibleItemIndices.map((itemIndex) => {
              var itemOperator;
              return (0, jsx.jsxs)(
                "div",
                {
                  className: classnamesDefault()(styles2().switchItem, {
                    [styles2().active]:
                      wrapIndex(switcherList, itemIndex) === wrapIndex(switcherList, switcherCurrentIndex),
                  }),
                  style: {
                    transform: getSwitchItemTransform(itemIndex, centerIndex, isPortraitSwitcher),
                  },
                  onClick: () => {
                    (selectItem(itemIndex), SoundEffects.A.play(SoundEffects.d.char_click));
                  },
                  children: [
                    (0, jsx.jsx)(SvgIcon22715.A, {
                      className: styles2().activeBg,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().border,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().image,
                      "data-key":
                        null == (itemOperator = switcherList[wrapIndex(switcherList, itemIndex)])
                          ? void 0
                          : itemOperator.key,
                    }),
                  ],
                },
                itemIndex,
              );
            }),
          }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().button, styles2().top),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), shiftBackward());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles2().border,
              }),
              (0, jsx.jsx)(Pagination.MS, {
                className: styles2().arrow,
              }),
            ],
          }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().button, styles2().bottom),
            onClick: () => {
              (SoundEffects.A.play(SoundEffects.d.arrow_click), shiftForward());
            },
            children: [
              (0, jsx.jsx)("div", {
                className: styles2().border,
              }),
              (0, jsx.jsx)(Pagination.MS, {
                className: styles2().arrow,
              }),
            ],
          }),
        ],
      });
    },
    SvgDecoLineIcon = (decoLineProps) => {
      let { className: decoLineClassName } = decoLineProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 285 24",
        className: decoLineClassName,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M278.754,16.964 L278.754,14.031 L284.472,14.031 L284.472,16.964 L278.754,16.964 ZM278.754,8.164 L284.472,8.164 L284.472,11.096 L278.754,11.096 L278.754,8.164 ZM273.031,14.031 L275.892,14.031 L275.892,16.964 L273.031,16.964 L273.031,14.031 ZM267.313,8.164 L273.031,8.164 L273.031,11.096 L267.313,11.096 L267.313,8.164 ZM224.409,14.031 L264.451,14.031 L264.451,16.964 L224.409,16.964 L224.409,14.031 ZM238.711,8.164 L264.451,8.164 L264.451,11.096 L238.711,11.096 L238.711,8.164 ZM224.409,8.164 L235.850,8.164 L235.850,11.096 L224.409,11.096 L224.409,8.164 ZM218.690,14.031 L221.551,14.031 L221.551,16.964 L218.690,16.964 L218.690,14.031 ZM218.690,8.164 L221.551,8.164 L221.551,11.096 L218.690,11.096 L218.690,8.164 ZM195.1000,-0.000 L198.1000,-0.000 L198.1000,23.1000 L195.1000,23.1000 L195.1000,-0.000 ZM169.872,13.817 L175.813,13.817 L175.813,16.870 L169.872,16.870 L169.872,13.817 ZM169.872,7.709 L175.813,7.709 L175.813,10.762 L169.872,10.762 L169.872,7.709 ZM163.927,13.817 L166.899,13.817 L166.899,16.870 L163.927,16.870 L163.927,13.817 ZM157.986,7.709 L163.927,7.709 L163.927,10.762 L157.986,10.762 L157.986,7.709 ZM113.415,13.817 L155.014,13.817 L155.014,16.870 L113.415,16.870 L113.415,13.817 ZM128.273,7.709 L155.014,7.709 L155.014,10.762 L128.273,10.762 L128.273,7.709 ZM113.415,7.709 L125.301,7.709 L125.301,10.762 L113.415,10.762 L113.415,7.709 ZM104.502,16.870 L104.502,13.817 L107.474,13.817 L110.447,13.817 L110.447,16.870 L107.474,16.870 L104.502,16.870 ZM107.474,7.709 L110.447,7.709 L110.447,10.762 L107.474,10.762 L107.474,7.709 ZM98.561,13.817 L101.529,13.817 L101.529,16.870 L98.561,16.870 L98.561,13.817 ZM92.616,13.817 L95.589,13.817 L95.589,16.870 L92.616,16.870 L92.616,13.817 ZM83.703,13.817 L89.648,13.817 L89.648,16.870 L83.703,16.870 L83.703,13.817 ZM83.703,7.709 L89.648,7.709 L89.648,10.762 L83.703,10.762 L83.703,7.709 ZM77.762,13.817 L80.730,13.817 L80.730,16.870 L77.762,16.870 L77.762,13.817 ZM71.817,7.709 L77.762,7.709 L77.762,10.762 L71.817,10.762 L71.817,7.709 ZM27.250,13.817 L68.849,13.817 L68.849,16.870 L27.250,16.870 L27.250,13.817 ZM42.105,7.709 L68.849,7.709 L68.849,10.762 L42.105,10.762 L42.105,7.709 ZM27.250,7.709 L39.136,7.709 L39.136,10.762 L27.250,10.762 L27.250,7.709 ZM10.455,4.298 L20.492,4.298 L15.473,12.975 L10.455,4.298 ZM0.347,4.298 L10.384,4.298 L5.365,12.975 L0.347,4.298 ZM10.455,21.701 L5.436,13.024 L15.473,13.024 L10.455,21.701 Z",
        }),
      });
    },
    SvgDecoPlusIcon = (decoPlusProps) => {
      let { className: decoPlusClassName } = decoPlusProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 333",
        className: decoPlusClassName,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M16.828,319.932 L16.828,332.334 L15.173,332.334 L15.173,319.932 L0.458,319.932 L0.458,318.279 L15.173,318.279 L15.173,305.878 L16.828,305.878 L16.828,318.279 L31.542,318.279 L31.542,319.932 L16.828,319.932 ZM16.828,230.597 L15.173,230.597 L15.173,218.195 L0.458,218.195 L0.458,216.542 L15.173,216.542 L15.173,204.140 L16.828,204.140 L16.828,216.542 L31.542,216.542 L31.542,218.195 L16.828,218.195 L16.828,230.597 ZM16.828,128.859 L15.173,128.859 L15.173,116.458 L0.458,116.458 L0.458,114.805 L15.173,114.805 L15.173,102.403 L16.828,102.403 L16.828,114.805 L31.542,114.805 L31.542,116.458 L16.828,116.458 L16.828,128.859 ZM16.828,27.122 L15.173,27.122 L15.173,14.720 L0.458,14.720 L0.458,13.067 L15.173,13.067 L15.173,0.665 L16.828,0.665 L16.828,13.067 L31.542,13.067 L31.542,14.720 L16.828,14.720 L16.828,27.122 Z",
        }),
      });
    },
    OperatorSection = (props) => {
      let { detailMode = !1, detailIndex = 0, detailBack: detailBack } = props,
        { t: translate } = (0, I18nProviderUseI18n.Bd)(),
        [isDowngraded, setIsDowngraded] = (0, React.useState)(!1);
      (0, React.useEffect)(() => {
        let userAgent = SiteUtils.isServer ? "" : window.navigator.userAgent;
        setIsDowngraded(
          (0, DeviceUtils.TN)(userAgent) ||
            (0, DeviceUtils.zZ)(userAgent) ||
            (0, DeviceUtils.I7)(userAgent) ||
            (0, DeviceUtils.B$)(userAgent),
        );
      }, [isDowngraded]);
      let sectionRef = (0, React.useRef)(null),
        sectionInView = (0, framerMotionUseInView.W)(sectionRef, {
          margin: "-40% 0%",
        }),
        { lang: lang } = (0, I18nProviderUseI18n.PO)(),
        operators = (0, I18nProviderUseI18n.gL)(),
        { props: switcherBindProps, currentIndex: currentIndex } = useOperatorIndex(
          operators,
          detailMode ? detailIndex : 1,
          detailMode ? detailIndex : 0,
        ),
        currentOperator = (0, React.useMemo)(() => operators[currentIndex], [currentIndex, operators]),
        [is3dMode, setIs3dMode] = (0, React.useState)(!1),
        [isDrawerOpen, setIsDrawerOpen] = (0, React.useState)(!1),
        viewedOperatorsRef = (0, React.useRef)({});
      (0, React.useEffect)(() => {
        sectionInView &&
          !viewedOperatorsRef.current[currentOperator.key] &&
          ((viewedOperatorsRef.current[currentOperator.key] = !0),
          Tracking.A.collect("content_view", {
            group: TrackingGroupsEnum.Z.operator,
            target: currentOperator.key,
          }));
      }, [sectionInView, currentOperator]);
      let [isEntranceReady, setIsEntranceReady] = (0, React.useState)(!1),
        { loaded: loaded } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
      (0, React.useEffect)(() => {
        sectionInView && loaded && setIsEntranceReady(!0);
      }, [sectionInView, loaded]);
      let orientation = (0, useOrientation.M)();
      ((0, React.useLayoutEffect)(() => {
        let h5ContentContainer = sectionRef.current.querySelector(
          ".".concat(styles2().h5Container, " .").concat(styles2().contentContainer),
        );
        ((h5ContentContainer.style.transition = "none"),
          (h5ContentContainer.style.transform = "translateY(100%)"));
      }, []),
        (0, React.useEffect)(() => {
          if (isEntranceReady) {
            let entranceTimeline = animeJsDefault.A.timeline(),
              sectionElement = sectionRef.current;
            (entranceTimeline.add({
              targets: {},
              duration: 300,
            }),
              entranceTimeline.add(
                {
                  targets: sectionElement.querySelector(
                    ".".concat(styles2().pcContainer, " .").concat(styles2().decoFlag),
                  ),
                  opacity: [0, 1],
                  duration: "portrait" === orientation ? 1 : 400,
                  easing: "easeOutQuad",
                },
                300,
              ),
              entranceTimeline.add(
                {
                  targets: [
                    sectionElement.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().decoText),
                    ),
                    sectionElement.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().decoTape),
                    ),
                    sectionElement.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().decoLine),
                    ),
                  ],
                  translateX: ["110%", "0"],
                  duration: "portrait" === orientation ? 1 : 400,
                  easing: "easeOutQuad",
                },
                300,
              ),
              entranceTimeline.add(
                {
                  targets: [
                    sectionElement.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().titleInnerContainer),
                    ),
                    ,
                    sectionElement.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().contentInnerContainer),
                    ),
                    sectionElement.querySelector(
                      ".".concat(styles2().pcContainer, " .").concat(styles2().headerInnerContainer),
                    ),
                  ],
                  duration: "portrait" === orientation ? 1 : 300,
                  translateX: ["-100%", "0"],
                  easing: "easeOutQuad",
                },
                600,
              ),
              entranceTimeline.add(
                {
                  targets: sectionElement.querySelector(".".concat(styles2().illustrationContainer)),
                  duration: 300,
                  opacity: [0, 1],
                  easing: "easeOutQuad",
                },
                "landscape" === orientation ? 600 : 300,
              ),
              entranceTimeline.add(
                {
                  targets: sectionElement.querySelector(".".concat(styles2().illustrationContainer)),
                  duration: 5e3,
                  translateX: ["15rem", "0"],
                  easing: "cubicBezier(0,1,0,.95)",
                },
                "landscape" === orientation ? 600 : 300,
              ),
              (sectionElement.querySelector(
                ".".concat(styles2().h5Container, " .").concat(styles2().contentContainer),
              ).style.transition = "none"));
            let h5ContentElement = sectionElement.querySelector(
              ".".concat(styles2().h5Container, " .").concat(styles2().contentContainer),
            );
            entranceTimeline.add(
              {
                targets: h5ContentElement,
                complete: () => {
                  ((h5ContentElement.style.transition = "transform 0.3s ease"),
                    (h5ContentElement.style.transform = ""));
                },
                duration: "landscape" === orientation ? 1 : 400,
                translateY: ["100%", "0"],
                easing: "easeOutQuad",
              },
              600,
            );
            let fadeInTargets = [
                sectionElement.querySelector(".".concat(styles2().switcher3d)),
                sectionElement.querySelector(".".concat(styles2().switcher)),
              ],
              listButtonElement = sectionElement.querySelector(".".concat(styles2().listButton)),
              backButtonElement = sectionElement.querySelector(".".concat(styles2().backButton));
            (listButtonElement && fadeInTargets.push(listButtonElement),
              backButtonElement && fadeInTargets.push(backButtonElement),
              entranceTimeline.add(
                {
                  targets: fadeInTargets,
                  opacity: [0, 1],
                  duration: 300,
                  easing: "easeOutQuad",
                },
                "landscape" === orientation ? 1200 : 800,
              ));
          }
        }, [isEntranceReady, orientation]),
        (0, React.useLayoutEffect)(() => {
          let sectionRoot = sectionRef.current,
            switcherElement = sectionRoot.querySelector(".".concat(styles2().switcher)),
            switcher3dElement = sectionRoot.querySelector(".".concat(styles2().switcher3d)),
            hiddenElements = [
              sectionRoot.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoFlag)),
              sectionRoot.querySelector(".".concat(styles2().illustrationContainer)),
            ];
          ([
            sectionRoot.querySelector(
              ".".concat(styles2().pcContainer, " .").concat(styles2().titleInnerContainer),
            ),
            ,
            sectionRoot.querySelector(
              ".".concat(styles2().pcContainer, " .").concat(styles2().contentInnerContainer),
            ),
            sectionRoot.querySelector(
              ".".concat(styles2().pcContainer, " .").concat(styles2().headerInnerContainer),
            ),
          ].forEach((slideLeftElement) => {
            slideLeftElement.style.transform = "translateX(-100%)";
          }),
            [
              sectionRoot.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoText)),
              sectionRoot.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoTape)),
              sectionRoot.querySelector(".".concat(styles2().pcContainer, " .").concat(styles2().decoLine)),
            ].forEach((slideRightElement) => {
              slideRightElement.style.transform = "translateX(100%)";
            }),
            (switcherElement.style.opacity = "0"),
            (switcher3dElement.style.opacity = "0"),
            hiddenElements.forEach((fadeElement) => {
              fadeElement.style.opacity = "0";
            }));
        }, []));
      let dividerRef = (0, React.useRef)(null),
        dividerInView = (0, framerMotionUseInView.W)(dividerRef, {
          once: !0,
        }),
        hasMultipleCv = (0, React.useMemo)(
          () => Object.entries(currentOperator.cv).length > 1,
          [currentOperator],
        );
      return (0, jsx.jsxs)(jsx.Fragment, {
        children: [
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().sectionContainer, detailMode && styles2().detail),
            ref: sectionRef,
            children: [
              (0, jsx.jsx)("div", {
                className: styles2().pcContainer,
                children: (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles2().backgroundDeco),
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().shallowBg,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().decoFlag,
                    }),
                    (0, jsx.jsx)(HollowText.A, {
                      className: styles2().decoText,
                      text: "ENDFIELD",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().decoTape,
                      children: (0, jsx.jsx)("div", {
                        className: styles2().decoLineTri,
                      }),
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().decoLine,
                      children: (0, jsx.jsx)(SvgDecoLineIcon, {
                        className: styles2().decoLineIcon,
                      }),
                    }),
                    (0, jsx.jsx)(SvgDecoPlusIcon, {
                      className: styles2().decoPlus,
                    }),
                  ],
                }),
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().h5Container,
                children: [
                  (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(styles2().headerDeco),
                    children: [
                      (0, jsx.jsxs)("div", {
                        className: styles2().decoText,
                        children: [
                          (0, jsx.jsx)("span", {
                            className: styles2().leftBracket,
                            children: "[",
                          }),
                          (0, jsx.jsx)("span", {
                            className: styles2().title,
                            children: "REC",
                          }),
                          (0, jsx.jsx)("span", {
                            className: styles2().rightBracket,
                            children: "]",
                          }),
                        ],
                      }),
                      (0, jsx.jsx)(SvgIcon52271.A, {
                        className: styles2().decoTextIcon,
                      }),
                    ],
                  }),
                  (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(styles2().backgroundDeco),
                    children: [
                      (0, jsx.jsx)("div", {
                        className: styles2().shallowBg,
                      }),
                      (0, jsx.jsx)(HollowText.A, {
                        className: styles2().decoText,
                        text: "ENDFIELD",
                      }),
                      (0, jsx.jsx)("div", {
                        className: styles2().whiteCover,
                      }),
                    ],
                  }),
                ],
              }),
              (0, jsx.jsxs)("div", {
                className: classnamesDefault()(styles2().illustLayer),
                children: [
                  (0, jsx.jsx)("div", {
                    className: styles2().h5illustrationContainer,
                    children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                      mode: "wait",
                      children: (0, jsx.jsx)(
                        OperatorIllustration,
                        {
                          downgrade: isDowngraded,
                          inView: sectionInView,
                          currentIndex: currentIndex,
                          is3dActive: is3dMode,
                          detailMode: detailMode,
                        },
                        currentOperator.key,
                      ),
                    }),
                  }),
                  (0, jsx.jsx)(OperatorSwitcher, {
                    ...switcherBindProps,
                    className: classnamesDefault()(styles2().switcher),
                  }),
                ],
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().pcContainer,
                children: [
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().headerDeco),
                    children: (0, jsx.jsxs)("div", {
                      className: classnamesDefault()(styles2().headerInnerContainer),
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles2().decoText,
                          children: [
                            (0, jsx.jsx)("span", {
                              className: styles2().leftBracket,
                              children: "[",
                            }),
                            (0, jsx.jsx)("span", {
                              className: styles2().title,
                              children: "REC",
                            }),
                            (0, jsx.jsx)("span", {
                              className: styles2().rightBracket,
                              children: "]",
                            }),
                          ],
                        }),
                        (0, jsx.jsx)(SvgIcon52271.A, {
                          className: styles2().decoTextIcon,
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles2().nameContainer,
                          children: [
                            (0, jsx.jsx)("span", {
                              className: styles2().nameEn,
                              children: currentOperator.codename,
                            }),
                            (0, jsx.jsxs)("span", {
                              className: styles2().nameIndex,
                              children: [currentIndex + 1, " / ", operators.length],
                            }),
                          ],
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().stars,
                          children: Array(currentOperator.rarity)
                            .fill(0)
                            .map((starPlaceholder, starIndex) =>
                              (0, jsx.jsx)(
                                "div",
                                {
                                  className: styles2().star,
                                },
                                starIndex,
                              ),
                            ),
                        }),
                      ],
                    }),
                  }),
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().titleContainer),
                    children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                      mode: "wait",
                      children: (0, jsx.jsxs)(
                        framerMotion.P.div,
                        {
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
                          className: styles2().titleInnerContainer,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().icons,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": currentOperator.prof,
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": currentOperator.elem,
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles2().nameContainer,
                              children: [
                                (0, jsx.jsx)("span", {
                                  className: styles2().leftBracket,
                                  children: "[",
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().title,
                                  children: currentOperator.name,
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().rightBracket,
                                  children: "]",
                                }),
                              ],
                            }),
                          ],
                        },
                        "".concat(currentOperator.codename, "-title"),
                      ),
                    }),
                  }),
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().contentContainer),
                    children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                      mode: "wait",
                      children: (0, jsx.jsxs)(
                        framerMotion.P.div,
                        {
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
                          className: styles2().contentInnerContainer,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().tagContainer,
                              children: [
                                (0, jsx.jsxs)("div", {
                                  className: styles2().tag,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: translate("operator.camp"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: currentOperator.camp,
                                    }),
                                  ],
                                }),
                                (0, jsx.jsxs)("div", {
                                  className: styles2().tag,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: translate("operator.race"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: currentOperator.race,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().tagContainer,
                              children: Object.entries(currentOperator.cv).map((cvEntry) => {
                                let [cvLang, cvName] = cvEntry;
                                return (0, jsx.jsxs)(
                                  "div",
                                  {
                                    className: styles2().tag,
                                    children: [
                                      (0, jsx.jsxs)("div", {
                                        className: classnamesDefault()(
                                          styles2().label,
                                          styles2().cv,
                                          hasMultipleCv && styles2().showText,
                                        ),
                                        children: [
                                          (0, jsx.jsx)(SvgIcon73422.A, {
                                            className: styles2().icon,
                                          }),
                                          hasMultipleCv && translate("operator.cv.".concat(cvLang)),
                                        ],
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: styles2().value,
                                        children: cvName,
                                      }),
                                    ],
                                  },
                                  cvLang,
                                );
                              }),
                            }),
                            (0, jsx.jsx)(
                              nextJsRuntimeDefault(),
                              {
                                className: classnamesDefault()(
                                  styles2().detail,
                                  "fr-fr" === lang && "ember" === currentOperator.key && styles2().longer,
                                ),
                                direction: "y",
                                children: currentOperator.intro.split("\n").map((introLine, introLineIndex) =>
                                  (0, jsx.jsx)(
                                    "div",
                                    {
                                      className: styles2().line,
                                      children: introLine,
                                    },
                                    introLineIndex,
                                  ),
                                ),
                              },
                              currentOperator.key,
                            ),
                          ],
                        },
                        "".concat(currentOperator.codename, "-content"),
                      ),
                    }),
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().characterLayer,
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().switchLayer,
                    children: (0, jsx.jsx)("div", {
                      className: classnamesDefault()(
                        styles2().switcher3d,
                        is3dMode && styles2().active,
                        isDowngraded && styles2().noDisplay,
                      ),
                      onClick: () => {
                        (setIs3dMode(!is3dMode), SoundEffects.A.play(SoundEffects.d.char_click));
                      },
                    }),
                  }),
                ],
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().h5Container,
                children: [
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().drawerWrapper, isDrawerOpen && styles2().active),
                    children: (0, jsx.jsxs)("div", {
                      className: classnamesDefault()(styles2().contentContainer),
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles2().header,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().icons,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": currentOperator.prof,
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles2().icon,
                                  "data-key": currentOperator.elem,
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().decoLine,
                              children: (0, jsx.jsx)(SvgDecoLineIcon, {
                                className: styles2().decoLineIcon,
                              }),
                            }),
                            (0, jsx.jsxs)("div", {
                              className: classnamesDefault()(
                                styles2().nameContainer,
                                "zh-cn" !== lang && "zh-tw" !== lang && styles2().small,
                              ),
                              children: [
                                (0, jsx.jsx)("span", {
                                  className: styles2().leftBracket,
                                  children: "[",
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().title,
                                  children: currentOperator.name,
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles2().rightBracket,
                                  children: "]",
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles2().nameEnContainer,
                              children: [
                                (0, jsx.jsx)("span", {
                                  className: styles2().nameEn,
                                  children: currentOperator.codename,
                                }),
                                (0, jsx.jsxs)("span", {
                                  className: styles2().nameIndex,
                                  children: ["//", "\xa0", (currentIndex + 1).toString().padStart(2, "0")],
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().stars,
                              children: Array(currentOperator.rarity)
                                .fill(0)
                                .map((h5StarPlaceholder, h5StarIndex) =>
                                  (0, jsx.jsx)(
                                    "div",
                                    {
                                      className: styles2().star,
                                    },
                                    h5StarIndex,
                                  ),
                                ),
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles2().deco,
                            }),
                          ],
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles2().detail,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles2().tagContainer,
                              children: [
                                (0, jsx.jsxs)("div", {
                                  className: classnamesDefault()(styles2().tag, styles2().longer),
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: translate("operator.camp"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: (0, jsx.jsx)(
                                        RollingText.A,
                                        {
                                          children: currentOperator.camp,
                                        },
                                        currentOperator.key,
                                      ),
                                    }),
                                  ],
                                }),
                                (0, jsx.jsxs)("div", {
                                  className: styles2().tag,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles2().label,
                                      children: translate("operator.race"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles2().value,
                                      children: currentOperator.race,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles2().tagContainer,
                              children: [
                                Object.entries(currentOperator.cv).map((h5CvEntry) => {
                                  let [h5CvLang, h5CvName] = h5CvEntry;
                                  return (0, jsx.jsxs)(
                                    "div",
                                    {
                                      className: classnamesDefault()(styles2().tag),
                                      children: [
                                        (0, jsx.jsxs)("div", {
                                          className: classnamesDefault()(
                                            styles2().label,
                                            styles2().cv,
                                            hasMultipleCv && styles2().showText,
                                          ),
                                          children: [
                                            (0, jsx.jsx)(SvgIcon73422.A, {
                                              className: styles2().icon,
                                            }),
                                            hasMultipleCv && translate("operator.cv.".concat(h5CvLang)),
                                          ],
                                        }),
                                        (0, jsx.jsx)("div", {
                                          className: styles2().value,
                                          children: h5CvName,
                                        }),
                                      ],
                                    },
                                    h5CvLang,
                                  );
                                }),
                                !hasMultipleCv &&
                                  (0, jsx.jsx)("div", {
                                    className: styles2().tag,
                                  }),
                              ],
                            }),
                            (0, jsx.jsx)(nextJsRuntimeDefault(), {
                              className: styles2().detail,
                              direction: "y",
                              children: currentOperator.intro
                                .split("\n")
                                .map((h5IntroLine, h5IntroLineIndex) =>
                                  (0, jsx.jsx)(
                                    "div",
                                    {
                                      className: styles2().line,
                                      children: h5IntroLine,
                                    },
                                    h5IntroLineIndex,
                                  ),
                                ),
                            }),
                          ],
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().detailButton,
                          onClick: () => {
                            (SoundEffects.A.play(
                              isDrawerOpen ? SoundEffects.d.close_click : SoundEffects.d.char_detail_enter,
                            ),
                              setIsDrawerOpen(!isDrawerOpen));
                          },
                          children: (0, jsx.jsx)("div", {
                            className: styles2().inner,
                            children: isDrawerOpen
                              ? (0, jsx.jsx)(SvgIcon29190.A, {
                                  className: styles2().closeIcon,
                                })
                              : (0, jsx.jsx)(SvgMagnifierIcon, {
                                  className: styles2().closeIcon,
                                }),
                          }),
                        }),
                        (0, jsx.jsx)("div", {
                          className: classnamesDefault()(
                            styles2().switcher3d,
                            is3dMode && styles2().active,
                            isDrawerOpen && styles2().hidden,
                            isDowngraded && styles2().noDisplay,
                          ),
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.char_click), setIs3dMode(!is3dMode));
                          },
                        }),
                      ],
                    }),
                  }),
                  (0, jsx.jsxs)("div", {
                    className: styles2().index,
                    children: [(currentIndex + 1).toString().padStart(2, "0"), " /", " ", operators.length],
                  }),
                ],
              }),
              detailMode &&
                (0, jsx.jsx)(BackButton, {
                  className: styles2().backButton,
                  text: translate("operator.detail.back"),
                  onClick: () => {
                    null == detailBack || detailBack();
                  },
                }),
              !detailMode &&
                (0, jsx.jsx)("div", {
                  className: classnamesDefault()(styles2().listButton),
                  onClick: () => {
                    window.open("".concat("/" + lang, "/operator"), "_blank");
                  },
                  children: translate("operator.more"),
                }),
            ],
          }),
          !detailMode &&
            (0, jsx.jsxs)("div", {
              className: classnamesDefault()(
                styles2().sectionDivider,
                dividerInView && loaded && styles2().active,
              ),
              ref: dividerRef,
              children: [
                (0, jsx.jsx)("div", {
                  className: styles2().dividerSubtitle,
                  children: "ARKNIGHTS: ENDFIELD",
                }),
                (0, jsx.jsx)("div", {
                  className: styles2().dividerTitle,
                  children: "LORE",
                }),
              ],
            }),
        ],
      });
    };
};
