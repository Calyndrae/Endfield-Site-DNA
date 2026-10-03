/**
 * HomeLayout — readable reconstruction of webpack module 83597 (chunk 226-d5292700ff68fd13.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/226-d5292700ff68fd13.js
 *
 * Webpack module 83597 is the Arknights: Endfield homepage layout (export Layout -> HomeLayout). HomeLayout mounts a SectionViewer with the HOME_SECTIONS list in this order: home (hero with OperatorSection-less hero module 17224 plus a portrait/landscape download overlay), operator (OperatorSection.W from module 3492), lore (three.js point-cloud PointCloudModelPlayer with scan-line fade in/out, laser rays, glitch effects and drag-to-rotate; models spaceship, anchor, factory, pile, trinity, enemy), information (background video, swiper of video thumbnails, title auto-fit, media modal), calendar (sticky title/timeline images with a horizontally draggable calendar on portrait), gameplay (GameplayAlbum carousel of videos + scroll-linked marquee), aic (GameplayAlbum of blueprint images, hidden from nav), and notice (NoticeCarousel of bulletins with pagination/detail button and a paged mobile list). Around the sections it renders the i18n footer, the loading screen (loadingScreen.E) with LOADER_TASKS = 33 image preloads through a 5-slot Image pool plus PointCloudModelPlayer.setup() (which benchmarks a 10k-point render to choose renderLevel 0/1/2 and normalizes every model binary), and a modal layer (ReserveModal, user text-links modal, media modal, account menu). SiteHeader provides the desktop navigation rail (NavRailItem per non-hidden section, overlay transform by active index, user/charge/creator/mute action buttons, Go-To-Game launcher that probes a custom URL scheme via hidden iframe before falling back to download, share dropdown, expand switcher) and the mobile header with hamburger menu; it also toggles BackgroundMusic/SoundControlStore. Section navigation: SectionViewer registers throttled window scroll and wheel listeners that pick the section whose vertical center is closest to the top (within 2x viewport height), stores it in a zustand store, mirrors it into the URL hash, and reads the hash on mount; setCurrentSection scrolls the target section into view smoothly and suppresses the scroll listener until it arrives; the lore canvas additionally handles mousedown/mousemove/mouseup and touchstart/touchmove/touchend for rotation, and the mobile calendar uses drag scrolling; there is no keyboard handling in this module. Sounds: common_click on header buttons, menu items, share links, notice items, video thumbnails, play/more buttons and mute; arrow_click on platform toggles in the reserve modal and information prev/next; menu_click on nav rail items; reserve_click on the reserve button; model when switching lore models. Tracking: book_success and gtag Registration-complete after a reservation, social_media_redirect for share links, click with targets recharge_center/reserve_button/official_community, web_page_swipe on first scroll, content_view per section/model/album item, and Tracking.download for store links.
 *
 * Exports (minified key → meaning):
 *   Layout → HomeLayout
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 83597 from 226-d5292700ff68fd13.js
// deps: 96424, 97028, 17540, 89102, 12914, 94150, 73235, 30998, 60705, 99880, 22060, 2142, 70246, 44990, 71985, 35038, 4948, 1162, 26097, 97521, 80500, 72535, 92610, 9995, 79549, 36624, 6921, 29190, 81222, 18109, 27014, 47290, 95823, 56006, 44705, 2285, 7725, 15723, 52652, 33811, 54925, 21953, 14577, 59288, 21789, 91618, 56578, 94167, 24106, 61617, 27663, 96741, 25576, 6777, 54335, 90928, 71272, 19213, 90286, 29521, 40226, 84245, 56604, 2878, 94534, 49876, 17224, 83768, 3492, 73560, 60687, 41409, 53079, 25477, 14000, 74517, 60658, 3787, 95308, 60891, 20944, 92418, 91251, 92182, 29671, 49095, 15889, 73992, 2682, 51067, 26915, 43837, 80187, 98220, 30257, 13920, 89622, 1287, 36563, 87346, 93297, 84343, 29269, 11502, 75583, 97916, 80689, 22519, 60459, 9184, 1841, 79755, 63875, 92880, 26673, 78074, 73803, 3147, 49929, 35300, 93577, 89808, 82405, 57236, 32343, 52151, 90746, 37602, 34573, 71494, 93247, 48056, 80753
const module_83597 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Layout: () => HomeLayout,
  });
  var switchIconPath,
    creatorIconPath,
    menuIconPath,
    aicIconPath,
    aicGameplayIconPath,
    calendarIconPath,
    loreIconPath,
    milestoneIconPath,
    chevronIconPath,
    operatorIconPath,
    triangleIconPath,
    chargeIconPath,
    jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    lodashThrottle = webpackRequire(17540),
    vhCheck = webpackRequire(89102),
    vhCheckDefault = webpackRequire.n(vhCheck),
    MediaModalStore = webpackRequire(12914),
    OrigQueryModal = webpackRequire(94150),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    zustandCreate = webpackRequire(99880),
    ReactDOM = webpackRequire(22060),
    React2 = webpackRequire(2142);
  function extendsSwitchIcon() {
    return (extendsSwitchIcon = Object.assign
      ? Object.assign.bind()
      : function (target1) {
          for (var argIndex1 = 1; argIndex1 < arguments.length; argIndex1++) {
            var source1 = arguments[argIndex1];
            for (var sourceKey1 in source1)
              ({}).hasOwnProperty.call(source1, sourceKey1) && (target1[sourceKey1] = source1[sourceKey1]);
          }
          return target1;
        }).apply(null, arguments);
  }
  let SwitchAccountIcon = function (switchIconProps) {
    return React2.createElement(
      "svg",
      extendsSwitchIcon(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 21 22",
        },
        switchIconProps,
      ),
      switchIconPath ||
        (switchIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M20.956,10.957 C20.956,15.921 17.454,20.065 12.785,21.064 L12.785,18.098 C15.849,17.167 18.080,14.323 18.080,10.956 C18.080,8.420 16.813,6.183 14.879,4.834 L12.785,6.951 L12.785,3.814 L12.785,0.849 L12.785,0.741 L18.932,0.738 L16.919,2.773 C19.372,4.663 20.956,7.622 20.956,10.957 ZM4.307,19.146 C1.850,17.256 0.263,14.295 0.263,10.957 C0.263,5.992 3.765,1.849 8.434,0.850 L8.434,3.814 C5.370,4.745 3.139,7.590 3.139,10.956 C3.139,13.501 4.416,15.744 6.362,17.091 L8.437,15.017 L8.437,21.231 L2.220,21.231 L4.307,19.146 Z",
        })),
    );
  };
  var module70246 = webpackRequire(70246),
    module44990 = webpackRequire(44990),
    Toast = webpackRequire(71985),
    module35038 = webpackRequire(35038),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
    SoundEffects = webpackRequire(26097),
    SiteUtils = webpackRequire(97521);
  let sendGtagEvent = (gtagEventName) => {
    SiteUtils.isServer || window.gtag("event", gtagEventName);
  };
  var SvgIcon80500 = webpackRequire(80500),
    stylesModule = webpackRequire(72535),
    styles = webpackRequire.n(stylesModule);
  let PLATFORM_LABELS = {
      ios: "iOS",
      android: "Android",
      pc: "PC",
      ps: "PS",
    },
    PLATFORM_KEYS_BY_INDEX = ["ios", "android", "pc", "ps"],
    PLATFORM_DISPLAY_ORDER = ["pc", "android", "ios", "ps"],
    useReserveModalStore = (0, zustandCreate.v)((setReserveState) => ({
      isActive: !1,
      activate: () =>
        setReserveState({
          isActive: !0,
        }),
      platformsReserved: [],
    })),
    useActivateReserveModal = () => useReserveModalStore((reserveStoreState) => reserveStoreState.activate),
    ReserveModal = (reserveModalProps) => {
      let { className: reserveModalClassName, style: reserveModalStyle } = reserveModalProps,
        { isActive: isReserveModalActive, platformsReserved: platformsReserved } = useReserveModalStore(),
        { t: tReserve } = (0, I18nProviderUseI18n.Bd)(),
        { account: account, loading: accountLoading } = (0, ReactDOM.F7)(),
        [showSuccess, setShowSuccess] = (0, React.useState)(!1),
        [selectedPlatforms, setSelectedPlatforms] = (0, React.useState)([]);
      (0, React.useEffect)(() => {
        isReserveModalActive ||
          setTimeout(() => {
            setShowSuccess(!1);
          }, 300);
      }, [isReserveModalActive]);
      let platformItems = (0, React.useMemo)(
          () =>
            PLATFORM_DISPLAY_ORDER.map((platformKey) => ({
              key: platformKey,
              status: platformsReserved.includes(platformKey)
                ? "reserved"
                : selectedPlatforms.includes(platformKey)
                  ? "selected"
                  : "unselected",
            })),
          [platformsReserved, selectedPlatforms],
        ),
        togglePlatform = (0, React.useCallback)(
          (platformToToggle) => {
            !isSubmittingRef.current &&
              account &&
              (SoundEffects.A.play(SoundEffects.d.arrow_click),
              setSelectedPlatforms((prevSelected) =>
                prevSelected.includes(platformToToggle)
                  ? prevSelected.filter((selectedKey) => selectedKey !== platformToToggle)
                  : [...prevSelected, platformToToggle],
              ));
          },
          [account],
        ),
        isSubmittingRef = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        if (!account) {
          (useReserveModalStore.setState({
            platformsReserved: [],
          }),
            setSelectedPlatforms([]));
          return;
        }
        ((isSubmittingRef.current = !0),
          Tracking.A.queryReserve()
            .then((reservedIndices) => {
              let reservedKeys =
                (null == reservedIndices
                  ? void 0
                  : reservedIndices.map((reservedIndex) => PLATFORM_KEYS_BY_INDEX[reservedIndex])) || [];
              (useReserveModalStore.setState({
                platformsReserved: reservedKeys,
              }),
                (isSubmittingRef.current = !1));
            })
            .catch((queryReserveError) => {
              (console.error(queryReserveError), (isSubmittingRef.current = !1));
            }));
      }, [account]);
      let hasNewSelection = (0, React.useMemo)(
          () => selectedPlatforms.some((selectedPlatform) => !platformsReserved.includes(selectedPlatform)),
          [platformsReserved, selectedPlatforms],
        ),
        allPlatformsReserved = (0, React.useMemo)(
          () =>
            PLATFORM_DISPLAY_ORDER.every((platformKeyToCheck) =>
              platformsReserved.includes(platformKeyToCheck),
            ),
          [platformsReserved],
        ),
        submitReserve = (0, React.useCallback)(() => {
          if (isSubmittingRef.current || !account || !hasNewSelection) return;
          isSubmittingRef.current = !0;
          let platformsToReserve = selectedPlatforms.filter(
            (candidateKey) => !platformsReserved.includes(candidateKey),
          );
          Tracking.A.submitReserve(
            platformsToReserve.map((platformToIndex) => PLATFORM_KEYS_BY_INDEX.indexOf(platformToIndex)),
          )
            .then((submitResponse) => {
              ((null == submitResponse ? void 0 : submitResponse.status) === 0
                ? (setShowSuccess(!0),
                  useReserveModalStore.setState({
                    platformsReserved: [...platformsReserved, ...selectedPlatforms],
                  }),
                  Tracking.A.collect("book_success", {
                    platform: JSON.stringify(
                      platformsToReserve.map((platformToLabel) => PLATFORM_LABELS[platformToLabel]),
                    ),
                  }),
                  sendGtagEvent("Registration-complete"))
                : Toast.A.message(tReserve("toast.networkError")),
                (isSubmittingRef.current = !1));
            })
            .catch((submitReserveError) => {
              (console.error(submitReserveError),
                Toast.A.message(tReserve("toast.networkError")),
                (isSubmittingRef.current = !1));
            });
        }, [account, hasNewSelection, platformsReserved, selectedPlatforms, tReserve]),
        openLoginModal = (0, module35038.$)(),
        handleSwitchAccount = (0, React.useCallback)(() => {
          (SoundEffects.A.play(SoundEffects.d.common_click), openLoginModal());
        }, [openLoginModal]);
      return (
        (0, React.useEffect)(() => {
          isReserveModalActive && setSelectedPlatforms([]);
        }, [isReserveModalActive]),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(
            styles().reserveModal,
            isReserveModalActive && styles().active,
            styles().oversea,
            reserveModalClassName,
          ),
          style: reserveModalStyle,
          children: (0, jsx.jsx)(SvgIcon80500.A, {
            title: tReserve("modal.reserve.title"),
            onClose: () =>
              useReserveModalStore.setState({
                isActive: !1,
              }),
            className: styles().modalContainer,
            children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
              mode: "wait",
              children: showSuccess
                ? (0, jsx.jsxs)(
                    framerMotion.P.div,
                    {
                      className: styles().contentFrame,
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
                      },
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles().cong,
                          children: tReserve("modal.reserve.cong")
                            .split("\n")
                            .map((congLine, congLineIndex) =>
                              (0, jsx.jsx)(
                                "div",
                                {
                                  children: congLine,
                                },
                                congLineIndex,
                              ),
                            ),
                        }),
                        (0, jsx.jsx)(module70246.A, {
                          className: styles().successButton,
                          onClick: () => {
                            useReserveModalStore.setState({
                              isActive: !1,
                            });
                          },
                          children: tReserve("modal.reserve.button.confirm"),
                        }),
                      ],
                    },
                    "success",
                  )
                : (0, jsx.jsxs)(
                    framerMotion.P.div,
                    {
                      className: styles().contentFrame,
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
                      },
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles().contentContainer,
                          children: [
                            (0, jsx.jsx)("div", {
                              className: styles().label,
                              children: tReserve("modal.reserve.label.currentAccount"),
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles().currentAccount,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles().number,
                                  children: null == account ? void 0 : account.displayName,
                                }),
                                (0, jsx.jsxs)("div", {
                                  className: styles().switch,
                                  onClick: handleSwitchAccount,
                                  children: [
                                    (0, jsx.jsx)("span", {
                                      className: styles().text,
                                      children: tReserve("modal.reserve.label.switch"),
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles().switchButton,
                                      children: (0, jsx.jsx)(SwitchAccountIcon, {
                                        className: styles().switchIcon,
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles().label,
                              children: tReserve("modal.reserve.label.select"),
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles().platforms,
                              children: platformItems.map((platformItem) =>
                                (0, jsx.jsxs)(
                                  "div",
                                  {
                                    className: classnamesDefault()(
                                      styles().platform,
                                      styles()[platformItem.status],
                                    ),
                                    children: [
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles().ratio),
                                        onClick: () => togglePlatform(platformItem.key),
                                      }),
                                      (0, jsx.jsxs)("div", {
                                        className: classnamesDefault()(
                                          styles().name,
                                          "reserved" === platformItem.status && styles().reserved,
                                        ),
                                        children: [
                                          (0, jsx.jsx)("div", {
                                            className: styles().key,
                                            children: tReserve(
                                              "modal.reserve.platform.".concat(platformItem.key),
                                            ),
                                          }),
                                          (0, jsx.jsx)("div", {
                                            className: classnamesDefault()(styles().reservedText),
                                            children: tReserve("modal.reserve.reserved"),
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  platformItem.key,
                                ),
                              ),
                            }),
                          ],
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles().buttonContainer,
                          children: [
                            !allPlatformsReserved &&
                              (0, jsx.jsx)(module70246.A, {
                                className: classnamesDefault()(styles().button),
                                disabled: !hasNewSelection,
                                onClick: submitReserve,
                                children: tReserve("modal.reserve.button.reserve"),
                              }),
                            (0, jsx.jsx)(module70246.A, {
                              theme: allPlatformsReserved ? "dark" : "light",
                              className: styles().button,
                              onClick: () => {
                                isSubmittingRef.current ||
                                  useReserveModalStore.setState({
                                    isActive: !1,
                                  });
                              },
                              children: allPlatformsReserved
                                ? tReserve("modal.reserve.button.confirm")
                                : tReserve("modal.reserve.button.cancel"),
                            }),
                          ],
                        }),
                      ],
                    },
                    "normal",
                  ),
            }),
          }),
        })
      );
    },
    ReserveModalWrapper = (reserveWrapperProps) => {
      let { className: reserveWrapperClassName, style: reserveWrapperStyle } = reserveWrapperProps;
      return (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(ReserveModal, {
          className: reserveWrapperClassName,
          style: reserveWrapperStyle,
        }),
      });
    };
  var UserModal = webpackRequire(92610),
    useRunOnceHook = webpackRequire(9995),
    module79549 = webpackRequire(79549),
    zustand = webpackRequire(36624),
    SvgIcon6921 = webpackRequire(6921),
    SvgIcon29190 = webpackRequire(29190);
  function extendsCreatorIcon() {
    return (extendsCreatorIcon = Object.assign
      ? Object.assign.bind()
      : function (target2) {
          for (var argIndex2 = 1; argIndex2 < arguments.length; argIndex2++) {
            var source2 = arguments[argIndex2];
            for (var sourceKey2 in source2)
              ({}).hasOwnProperty.call(source2, sourceKey2) && (target2[sourceKey2] = source2[sourceKey2]);
          }
          return target2;
        }).apply(null, arguments);
  }
  let CreatorIcon = function (creatorIconProps) {
    return React2.createElement(
      "svg",
      extendsCreatorIcon(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 31 31",
        },
        creatorIconProps,
      ),
      creatorIconPath ||
        (creatorIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M24.249,24.503 C24.770,24.859 25.612,25.123 26.207,25.443 C26.896,25.813 29.949,27.537 30.054,28.210 C30.082,28.385 29.927,28.586 29.914,28.791 C29.906,28.918 29.992,29.062 29.976,29.152 C29.905,29.544 28.714,29.893 28.359,29.978 C26.551,30.407 24.666,30.081 22.863,29.792 C23.153,30.571 22.568,30.701 21.934,30.757 C20.445,30.887 18.682,30.823 17.179,30.760 C17.005,30.753 16.887,30.628 16.750,30.629 C16.526,30.631 16.059,30.804 15.770,30.831 C14.605,30.940 13.129,30.999 12.070,30.447 C11.556,30.180 11.780,30.212 11.187,30.074 C10.704,29.962 9.749,29.369 9.717,28.825 C8.195,29.183 6.657,27.686 5.928,26.487 C5.287,25.433 5.323,24.564 6.746,25.333 C6.750,24.948 6.684,24.572 6.914,24.237 C7.624,23.875 8.082,24.563 8.528,24.1000 L9.494,26.521 C9.595,25.858 9.757,25.212 10.163,24.665 C9.553,24.425 8.872,23.705 8.497,23.173 C8.410,23.051 8.255,22.629 8.215,22.600 C8.143,22.549 6.830,22.311 6.506,22.193 C5.133,21.690 4.093,20.630 3.517,19.312 C3.359,18.950 3.384,18.662 3.106,18.347 L2.837,18.552 C2.397,18.566 2.236,17.529 2.164,17.173 C1.908,15.910 1.855,14.555 1.547,13.293 C1.501,13.252 1.131,13.452 0.927,13.300 C0.725,13.149 0.542,11.215 0.730,11.022 C1.599,10.918 2.495,10.679 3.368,10.619 C3.908,10.582 4.461,10.653 5.001,10.617 C5.804,10.564 7.350,10.196 8.066,10.524 C8.130,10.553 8.187,10.603 8.224,10.663 C8.310,10.799 8.364,11.907 8.341,12.116 C8.291,12.551 7.949,12.841 7.560,12.970 L7.560,14.581 L9.123,15.523 C9.180,14.430 9.618,13.622 10.132,12.705 C10.782,11.547 11.231,10.250 11.933,9.082 C12.618,7.941 13.357,7.284 14.133,6.305 C14.228,6.186 14.227,6.016 14.320,5.897 C14.728,5.374 15.473,5.429 15.923,5.858 C16.231,6.150 16.806,7.061 17.072,7.458 C17.392,7.937 17.652,8.458 17.963,8.944 L20.581,9.562 C21.880,9.162 23.124,8.755 24.472,8.549 C24.985,8.471 27.561,8.136 27.822,8.406 C27.883,8.468 27.986,8.982 27.987,9.095 C27.997,10.316 26.236,13.891 25.626,15.129 C25.561,15.262 25.420,15.328 25.390,15.487 C25.287,16.022 25.469,16.959 25.466,17.570 C25.464,17.915 25.358,18.226 25.386,18.610 C25.417,19.050 25.654,19.438 25.496,19.904 C25.377,20.256 23.913,21.324 23.533,21.507 C22.827,21.846 21.904,21.876 21.155,22.174 C21.859,22.720 22.628,23.170 23.344,23.700 C23.649,23.925 23.953,24.300 24.249,24.503 ZM10.524,4.960 C9.802,5.190 9.093,5.485 8.459,5.907 C8.330,5.942 8.197,5.688 8.173,5.586 C7.903,4.435 7.977,3.176 7.865,2.031 C7.845,1.823 7.591,1.633 7.805,1.421 C7.907,1.320 8.416,1.234 8.588,1.202 C9.047,1.114 9.917,0.966 10.357,0.964 C10.512,0.963 10.735,1.017 10.826,1.148 C11.164,1.640 10.425,4.229 10.524,4.960 ZM5.461,7.334 C5.273,7.203 4.037,6.270 4.010,6.181 C3.956,6.003 4.021,5.862 4.114,5.716 C4.199,5.582 5.442,4.342 5.538,4.314 C5.910,4.204 6.373,4.746 6.600,5.005 C6.983,5.442 7.280,5.969 7.629,6.433 C7.271,6.955 6.792,7.414 6.746,8.091 C6.670,8.159 5.612,7.441 5.461,7.334 Z",
        })),
    );
  };
  function extendsMenuIcon() {
    return (extendsMenuIcon = Object.assign
      ? Object.assign.bind()
      : function (target3) {
          for (var argIndex3 = 1; argIndex3 < arguments.length; argIndex3++) {
            var source3 = arguments[argIndex3];
            for (var sourceKey3 in source3)
              ({}).hasOwnProperty.call(source3, sourceKey3) && (target3[sourceKey3] = source3[sourceKey3]);
          }
          return target3;
        }).apply(null, arguments);
  }
  let HamburgerMenuIcon = function (menuIconProps) {
    return React2.createElement(
      "svg",
      extendsMenuIcon(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 53 42",
        },
        menuIconProps,
      ),
      menuIconPath ||
        (menuIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M-0.000,41.1000 L-0.000,33.625 L52.1000,33.625 L52.1000,41.1000 L-0.000,41.1000 ZM-0.000,16.792 L52.1000,16.792 L52.1000,25.208 L-0.000,25.208 L-0.000,16.792 ZM-0.000,-0.000 L52.1000,-0.000 L52.1000,8.416 L-0.000,8.416 L-0.000,-0.000 Z",
        })),
    );
  };
  function extendsAicIcon() {
    return (extendsAicIcon = Object.assign
      ? Object.assign.bind()
      : function (target4) {
          for (var argIndex4 = 1; argIndex4 < arguments.length; argIndex4++) {
            var source4 = arguments[argIndex4];
            for (var sourceKey4 in source4)
              ({}).hasOwnProperty.call(source4, sourceKey4) && (target4[sourceKey4] = source4[sourceKey4]);
          }
          return target4;
        }).apply(null, arguments);
  }
  let AicIcon = function (aicIconProps) {
    return React2.createElement(
      "svg",
      extendsAicIcon(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 57 47",
        },
        aicIconProps,
      ),
      aicIconPath ||
        (aicIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M27.127,12.817 C21.471,12.817 16.885,17.503 16.885,23.282 C16.885,29.065 21.471,33.751 27.127,33.751 C27.557,33.751 27.981,33.721 28.397,33.668 L28.397,46.516 L14.001,46.516 L0.876,23.282 L14.001,0.052 L40.253,0.052 L50.379,17.969 L35.953,17.969 C34.170,14.886 30.886,12.817 27.127,12.817 ZM40.479,26.382 L36.055,21.862 L46.634,21.862 L46.631,30.607 L46.631,31.722 L56.119,41.418 L50.711,46.944 L41.223,37.249 L31.572,37.249 L31.572,26.443 L35.995,30.963 L40.479,26.382 Z",
        })),
    );
  };
  function extendsAicGameplayIcon() {
    return (extendsAicGameplayIcon = Object.assign
      ? Object.assign.bind()
      : function (target5) {
          for (var argIndex5 = 1; argIndex5 < arguments.length; argIndex5++) {
            var source5 = arguments[argIndex5];
            for (var sourceKey5 in source5)
              ({}).hasOwnProperty.call(source5, sourceKey5) && (target5[sourceKey5] = source5[sourceKey5]);
          }
          return target5;
        }).apply(null, arguments);
  }
  function extendsCalendarIcon() {
    return (extendsCalendarIcon = Object.assign
      ? Object.assign.bind()
      : function (target6) {
          for (var argIndex6 = 1; argIndex6 < arguments.length; argIndex6++) {
            var source6 = arguments[argIndex6];
            for (var sourceKey6 in source6)
              ({}).hasOwnProperty.call(source6, sourceKey6) && (target6[sourceKey6] = source6[sourceKey6]);
          }
          return target6;
        }).apply(null, arguments);
  }
  var SvgIcon81222 = webpackRequire(81222),
    SvgIcon18109 = webpackRequire(18109),
    SvgIcon27014 = webpackRequire(27014);
  function extendsLoreIcon() {
    return (extendsLoreIcon = Object.assign
      ? Object.assign.bind()
      : function (target7) {
          for (var argIndex7 = 1; argIndex7 < arguments.length; argIndex7++) {
            var source7 = arguments[argIndex7];
            for (var sourceKey7 in source7)
              ({}).hasOwnProperty.call(source7, sourceKey7) && (target7[sourceKey7] = source7[sourceKey7]);
          }
          return target7;
        }).apply(null, arguments);
  }
  function extendsMilestoneIcon() {
    return (extendsMilestoneIcon = Object.assign
      ? Object.assign.bind()
      : function (target8) {
          for (var argIndex8 = 1; argIndex8 < arguments.length; argIndex8++) {
            var source8 = arguments[argIndex8];
            for (var sourceKey8 in source8)
              ({}).hasOwnProperty.call(source8, sourceKey8) && (target8[sourceKey8] = source8[sourceKey8]);
          }
          return target8;
        }).apply(null, arguments);
  }
  function extendsChevronIcon() {
    return (extendsChevronIcon = Object.assign
      ? Object.assign.bind()
      : function (target9) {
          for (var argIndex9 = 1; argIndex9 < arguments.length; argIndex9++) {
            var source9 = arguments[argIndex9];
            for (var sourceKey9 in source9)
              ({}).hasOwnProperty.call(source9, sourceKey9) && (target9[sourceKey9] = source9[sourceKey9]);
          }
          return target9;
        }).apply(null, arguments);
  }
  let ChevronRightIcon = function (chevronIconProps) {
    return React2.createElement(
      "svg",
      extendsChevronIcon(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 25 39",
        },
        chevronIconProps,
      ),
      chevronIconPath ||
        (chevronIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M5.743,38.153 L0.666,33.076 L14.434,19.307 L0.666,5.538 L5.743,0.462 L24.587,19.307 L5.743,38.153 Z",
        })),
    );
  };
  var SvgIcon47290 = webpackRequire(47290);
  function extendsOperatorIcon() {
    return (extendsOperatorIcon = Object.assign
      ? Object.assign.bind()
      : function (target10) {
          for (var argIndex10 = 1; argIndex10 < arguments.length; argIndex10++) {
            var source10 = arguments[argIndex10];
            for (var sourceKey10 in source10)
              ({}).hasOwnProperty.call(source10, sourceKey10) &&
                (target10[sourceKey10] = source10[sourceKey10]);
          }
          return target10;
        }).apply(null, arguments);
  }
  function extendsTriangleIcon() {
    return (extendsTriangleIcon = Object.assign
      ? Object.assign.bind()
      : function (target11) {
          for (var argIndex11 = 1; argIndex11 < arguments.length; argIndex11++) {
            var source11 = arguments[argIndex11];
            for (var sourceKey11 in source11)
              ({}).hasOwnProperty.call(source11, sourceKey11) &&
                (target11[sourceKey11] = source11[sourceKey11]);
          }
          return target11;
        }).apply(null, arguments);
  }
  let TriangleDecoIcon = function (triangleIconProps) {
    return React2.createElement(
      "svg",
      extendsTriangleIcon(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 31 28",
        },
        triangleIconProps,
      ),
      triangleIconPath ||
        (triangleIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M23.146,13.962 L15.554,0.843 L30.739,0.843 L23.146,13.962 ZM0.261,0.843 L15.446,0.843 L7.854,13.962 L0.261,0.843 ZM15.554,27.156 L7.961,14.036 L23.146,14.036 L15.554,27.156 Z",
        })),
    );
  };
  var SvgIcon95823 = webpackRequire(95823),
    SiteConfig = webpackRequire(56006),
    useClickOutsideHook = webpackRequire(44705),
    SoundControlStore = webpackRequire(2285),
    BackgroundMusic = webpackRequire(7725),
    DeviceUtils = webpackRequire(15723),
    HollowText = webpackRequire(52652),
    module33811 = webpackRequire(33811),
    module33811Default = webpackRequire.n(module33811);
  let FadeClipTransition = (fadeTransitionProps) => {
      let { className: fadeClassName, style: fadeStyle, children: fadeChildren } = fadeTransitionProps;
      return (0, jsx.jsx)(framerMotion.P.div, {
        className: classnamesDefault()(module33811Default().clipTransition, fadeClassName),
        style: fadeStyle,
        initial: {
          opacity: 0,
          pointerEvents: "none",
        },
        animate: {
          opacity: 1,
          pointerEvents: "auto",
        },
        exit: {
          opacity: 0,
          pointerEvents: "none",
        },
        transition: {
          duration: 0.2,
          ease: "easeOut",
        },
        children: fadeChildren,
      });
    },
    MutedIcon = (mutedIconProps) => {
      let {
        className: mutedIconClassName,
        style: mutedIconStyle,
        onClick: onMutedIconClick,
      } = mutedIconProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 28",
        className: mutedIconClassName,
        style: mutedIconStyle,
        onClick: onMutedIconClick,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M30.466,24.955 L29.363,26.560 L24.987,23.505 L24.987,27.714 L13.611,20.665 L13.611,20.631 L6.356,20.631 L6.356,10.500 L0.639,6.513 L2.793,3.387 L2.859,3.434 L8.495,7.368 L10.209,8.564 L10.648,8.872 L24.987,18.879 L31.513,23.434 L30.466,24.955 ZM24.987,0.286 L24.987,15.704 L13.303,7.550 L24.987,0.286 Z",
        }),
      });
    },
    UnmutedIcon = (unmutedIconProps) => {
      let {
        className: unmutedIconClassName,
        style: unmutedIconStyle,
        onClick: onUnmutedIconClick,
      } = unmutedIconProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 20 28",
        className: unmutedIconClassName,
        style: unmutedIconStyle,
        onClick: onUnmutedIconClick,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M7.405,7.332 L7.405,7.367 L0.932,7.367 L0.932,20.633 L7.405,20.633 L7.405,20.667 L19.275,27.718 L19.275,0.281 L7.405,7.332 Z",
        }),
      });
    },
    ShareIcon = (shareIconProps) => {
      let {
        className: shareIconClassName,
        style: shareIconStyle,
        onClick: onShareIconClick,
      } = shareIconProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 20",
        className: shareIconClassName,
        style: shareIconStyle,
        onClick: onShareIconClick,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M0.724,19.567 L0.724,-0.014 L18.789,-0.014 L18.789,3.217 L3.930,3.217 L3.930,16.337 L28.460,16.337 L28.460,12.699 L31.666,12.699 L31.666,19.567 L0.724,19.567 ZM28.460,5.500 L21.148,12.869 L18.881,10.584 L26.193,3.217 L21.526,3.217 L21.526,-0.014 L31.666,-0.014 L31.666,10.203 L28.460,10.203 L28.460,5.500 Z",
        }),
      });
    },
    SwitcherDecoIcon = (switcherDecoProps) => {
      let {
        className: switcherDecoClassName,
        style: switcherDecoStyle,
        onClick: onSwitcherDecoClick,
      } = switcherDecoProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 51 14",
        className: switcherDecoClassName,
        style: switcherDecoStyle,
        onClick: onSwitcherDecoClick,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M46.832,5.217 L46.832,3.841 L50.325,3.841 L50.325,5.217 L46.832,5.217 ZM46.832,0.982 L50.325,0.982 L50.325,3.627 L46.832,3.627 L46.832,0.982 ZM42.891,3.137 L41.941,0.982 L46.432,0.982 L45.483,3.137 L42.891,3.137 ZM41.157,2.187 C41.033,2.187 40.921,2.154 40.821,2.086 C40.722,2.018 40.651,1.930 40.608,1.819 L41.632,5.227 L37.797,5.227 L37.797,0.987 L40.357,0.987 L40.571,1.707 C40.564,1.668 40.560,1.629 40.560,1.590 C40.560,1.426 40.619,1.286 40.736,1.169 C40.853,1.051 40.994,0.993 41.157,0.993 C41.321,0.993 41.461,1.051 41.579,1.169 C41.696,1.286 41.755,1.427 41.755,1.593 C41.755,1.758 41.696,1.898 41.579,2.014 C41.461,2.130 41.321,2.187 41.157,2.187 ZM39.947,9.707 C39.940,9.668 39.936,9.629 39.936,9.590 C39.936,9.426 39.995,9.286 40.112,9.169 C40.229,9.051 40.370,8.993 40.533,8.993 C40.697,8.993 40.837,9.051 40.955,9.169 C41.072,9.286 41.131,9.427 41.131,9.593 C41.131,9.758 41.072,9.898 40.955,10.014 C40.837,10.130 40.697,10.187 40.533,10.187 C40.409,10.187 40.297,10.154 40.197,10.086 C40.098,10.018 40.027,9.930 39.984,9.819 L41.008,13.227 L37.173,13.227 L37.173,8.987 L39.733,8.987 L39.947,9.707 ZM36.448,2.246 L36.955,2.246 L36.955,4.033 L36.448,4.033 L36.448,2.246 ZM34.731,0.987 L36.235,0.987 L36.235,5.217 L34.731,5.217 L34.731,0.987 ZM35.640,9.291 C35.848,9.498 35.952,9.747 35.952,10.041 C35.952,10.334 35.848,10.584 35.640,10.790 C35.432,10.996 35.181,11.099 34.888,11.099 C34.595,11.099 34.345,10.996 34.139,10.790 C33.932,10.584 33.829,10.334 33.829,10.041 C33.829,9.747 33.932,9.498 34.139,9.291 C34.345,9.085 34.595,8.982 34.888,8.982 C35.181,8.982 35.432,9.085 35.640,9.291 ZM34.016,2.246 L34.517,2.246 L34.517,4.033 L34.016,4.033 L34.016,2.246 ZM35.952,13.222 L33.787,13.222 L35.952,10.417 L35.952,13.222 ZM32.160,10.187 C32.036,10.187 31.924,10.154 31.824,10.086 C31.724,10.018 31.653,9.930 31.611,9.819 L32.635,13.227 L28.800,13.227 L28.800,8.987 L31.360,8.987 L31.573,9.707 C31.566,9.668 31.563,9.629 31.563,9.590 C31.563,9.426 31.621,9.286 31.739,9.169 C31.856,9.051 31.996,8.993 32.160,8.993 C32.324,8.993 32.464,9.051 32.581,9.169 C32.699,9.286 32.757,9.427 32.757,9.593 C32.757,9.758 32.699,9.898 32.581,10.014 C32.464,10.130 32.324,10.187 32.160,10.187 ZM32.395,2.417 L32.395,5.222 L30.229,5.222 L32.395,2.417 ZM31.331,3.099 C31.037,3.099 30.788,2.996 30.581,2.790 C30.375,2.584 30.272,2.334 30.272,2.041 C30.272,1.747 30.375,1.498 30.581,1.291 C30.788,1.085 31.037,0.982 31.331,0.982 C31.624,0.982 31.875,1.085 32.083,1.291 C32.291,1.498 32.395,1.747 32.395,2.041 C32.395,2.334 32.291,2.584 32.083,2.790 C31.875,2.996 31.624,3.099 31.331,3.099 ZM28.277,5.254 L26.837,5.254 L26.139,5.254 L26.139,3.862 L27.056,3.862 L27.088,3.649 L25.760,3.649 L25.760,2.214 L26.640,0.982 L27.509,0.982 L28.277,0.982 L29.072,0.982 L28.389,5.254 L28.277,5.254 ZM24.176,5.254 L22.736,5.254 L22.037,5.254 L22.037,3.862 L22.955,3.862 L22.987,3.649 L21.659,3.649 L21.659,2.214 L22.539,0.982 L23.408,0.982 L24.176,0.982 L24.971,0.982 L24.288,5.254 L24.176,5.254 ZM17.323,1.035 L20.779,1.035 L20.779,3.654 L17.323,3.654 L17.323,1.035 ZM14.224,3.841 L16.491,3.841 L16.491,5.217 L12.997,5.217 L14.224,3.841 ZM12.997,0.982 L16.491,0.982 L16.491,3.633 L15.909,3.633 L12.997,0.982 ZM11.419,2.246 L11.925,2.246 L11.925,4.033 L11.419,4.033 L11.419,2.246 ZM9.701,0.987 L11.205,0.987 L11.205,5.217 L9.701,5.217 L9.701,0.987 ZM11.173,8.982 L10.491,13.254 L10.379,13.254 L8.939,13.254 L8.240,13.254 L8.240,11.862 L9.157,11.862 L9.189,11.649 L7.861,11.649 L7.861,10.214 L8.741,8.982 L9.611,8.982 L10.379,8.982 L11.173,8.982 ZM8.987,2.246 L9.488,2.246 L9.488,4.033 L8.987,4.033 L8.987,2.246 ZM5.024,3.846 L7.984,3.846 L7.984,5.222 L5.024,5.222 L5.024,3.846 ZM4.491,2.209 L5.712,0.987 L7.984,0.987 L7.984,3.633 L4.491,3.633 L4.491,2.209 ZM2.139,3.227 L2.939,0.971 L3.739,0.971 L2.939,3.227 L2.139,3.227 ZM0.944,5.217 L0.944,0.971 L2.139,0.971 L2.139,3.227 L2.139,5.217 L0.944,5.217 ZM15.360,10.337 L11.872,10.337 L11.872,8.987 L15.360,8.987 L15.360,10.337 ZM13.477,11.713 L11.872,11.713 L11.872,10.459 L13.477,10.459 L13.477,11.713 ZM15.360,13.217 L11.872,13.217 L11.872,11.841 L15.360,11.841 L15.360,13.217 ZM17.323,3.857 L18.896,3.857 L18.896,5.222 L17.323,5.222 L17.323,3.857 ZM19.653,8.987 L19.653,11.633 L16.160,11.633 L16.160,10.209 L17.381,8.987 L19.653,8.987 ZM19.653,13.222 L16.693,13.222 L16.693,11.846 L19.653,11.846 L19.653,13.222 ZM23.909,11.654 L20.453,11.654 L20.453,9.035 L23.909,9.035 L23.909,11.654 ZM22.027,13.222 L20.453,13.222 L20.453,11.857 L22.027,11.857 L22.027,13.222 ZM28.181,11.654 L24.725,11.654 L24.725,9.035 L28.181,9.035 L28.181,11.654 ZM26.299,13.222 L24.725,13.222 L24.725,11.857 L26.299,11.857 L26.299,13.222 ZM45.237,8.982 L43.643,11.633 L41.733,11.633 L43.312,8.982 L45.237,8.982 ZM44.187,3.163 L45.365,5.206 L43.013,5.206 L44.187,3.163 ZM45.237,13.227 L43.643,13.227 L43.643,11.846 L45.237,11.846 L45.237,13.227 Z",
        }),
      });
    };
  var stylesModule2 = webpackRequire(54925),
    styles2 = webpackRequire.n(stylesModule2);
  let NAV_SECTION_ICONS = {
      home: SvgIcon18109.A,
      lore: function (loreIconProps) {
        return React2.createElement(
          "svg",
          extendsLoreIcon(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 42 42",
            },
            loreIconProps,
          ),
          loreIconPath ||
            (loreIconPath = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M36.038,32.520 L36.038,5.876 L15.483,5.876 L15.483,0.188 L41.891,0.188 L41.891,32.520 L36.038,32.520 ZM15.614,9.516 L15.483,9.643 L15.483,9.787 L11.414,13.741 L6.027,8.506 L1.825,4.423 L1.861,4.388 L1.787,4.316 L6.060,0.164 L11.829,5.769 L15.445,9.283 L15.649,9.482 L15.614,9.516 ZM6.027,35.043 L22.791,35.043 L22.791,40.731 L0.173,40.731 L0.173,13.742 L6.027,13.742 L6.027,35.043 ZM15.652,24.914 L15.652,31.990 L8.255,31.990 L8.255,24.800 L15.535,24.800 L15.652,24.800 L15.652,9.476 L31.421,9.476 L31.421,24.800 L23.479,24.800 L23.479,32.518 L23.479,32.520 L15.652,24.914 ZM31.513,32.808 L34.107,35.331 L36.934,38.078 L33.068,41.835 L32.228,41.019 L26.374,35.331 L23.778,32.808 L23.479,32.518 L27.347,28.759 L31.513,32.808 Z",
            })),
        );
      },
      information: SvgIcon27014.A,
      gameplay: SvgIcon81222.A,
      notice: SvgIcon47290.A,
      operator: function (operatorIconProps) {
        return React2.createElement(
          "svg",
          extendsOperatorIcon(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 44 49",
            },
            operatorIconProps,
          ),
          operatorIconPath ||
            (operatorIconPath = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M43.057,48.470 L37.334,48.470 L6.667,48.470 L0.942,48.470 L0.942,40.719 L0.942,15.502 L0.941,15.502 L0.941,6.304 L0.942,6.304 L0.942,6.301 L6.667,6.301 L6.667,6.304 L9.743,6.304 L9.743,10.903 L34.526,10.903 L34.526,6.304 L37.334,6.304 L37.334,6.301 L43.058,6.301 L43.058,48.470 L43.057,48.470 ZM37.334,15.502 L6.667,15.502 L6.667,40.719 L10.448,40.719 L10.448,35.267 C10.448,32.112 12.951,29.554 16.037,29.554 L27.963,29.554 C31.049,29.554 33.551,32.112 33.551,35.267 L33.551,40.719 L37.334,40.719 L37.334,15.502 ZM22.000,27.793 C19.155,27.793 16.848,25.434 16.848,22.526 C16.848,19.617 19.155,17.259 22.000,17.259 C24.845,17.259 27.152,19.617 27.152,22.526 C27.152,25.434 24.845,27.793 22.000,27.793 ZM9.743,0.506 L34.526,0.506 L34.526,6.304 L9.743,6.304 L9.743,0.506 Z",
            })),
        );
      },
      milestone: function (milestoneIconProps) {
        return React2.createElement(
          "svg",
          extendsMilestoneIcon(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 48 42",
            },
            milestoneIconProps,
          ),
          milestoneIconPath ||
            (milestoneIconPath = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M38.973,27.409 L47.236,35.988 L37.931,35.988 L35.532,35.988 L23.041,35.988 C20.926,33.892 19.741,32.717 17.626,30.622 L23.041,30.622 L35.532,30.622 L35.532,18.830 L47.236,18.830 L38.973,27.409 ZM47.236,7.231 C42.666,11.761 40.103,14.300 35.532,18.830 L35.532,7.231 L47.236,7.231 ZM6.598,41.469 L0.332,41.469 L0.332,27.337 L0.332,4.646 L0.332,0.530 L32.378,0.530 L32.378,27.337 L6.598,27.337 L6.598,41.469 Z",
            })),
        );
      },
      aic: AicIcon,
      aicGameplay: function (aicGameplayIconProps) {
        return React2.createElement(
          "svg",
          extendsAicGameplayIcon(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 41 50",
            },
            aicGameplayIconProps,
          ),
          aicGameplayIconPath ||
            (aicGameplayIconPath = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M23.312,44.301 L18.497,49.105 L12.435,43.800 L17.195,43.800 L17.195,41.198 L17.195,38.997 L12.435,38.997 L17.542,34.527 L18.497,33.692 L18.757,33.952 L19.966,35.157 L20.654,35.844 L23.312,38.496 L25.259,38.496 L35.436,38.496 L36.242,38.496 L36.948,38.496 L37.859,38.496 L40.277,38.496 L40.791,38.496 L40.791,44.301 L23.312,44.301 ZM36.948,36.085 L36.242,36.085 L24.317,36.085 L20.214,31.986 L19.966,31.739 L19.966,23.492 L20.306,23.294 L30.347,17.513 L36.948,21.315 L40.729,23.492 L40.729,36.085 L39.626,36.085 L36.948,36.085 ZM30.347,24.808 C27.763,24.808 25.668,26.898 25.668,29.470 C25.668,32.048 27.763,34.137 30.347,34.137 C32.926,34.137 35.021,32.048 35.021,29.470 C35.021,26.898 32.926,24.808 30.347,24.808 ZM30.347,14.731 L29.139,15.424 L18.757,21.402 L17.542,22.101 L17.542,31.318 L16.904,31.875 L10.842,37.179 L6.249,41.198 L0.002,41.198 L0.002,0.895 L27.651,0.895 C31.283,4.518 33.316,6.546 36.948,10.169 L36.948,18.527 L31.556,15.424 L30.347,14.731 ZM7.898,4.605 L3.720,4.605 L3.720,8.765 L7.898,8.765 L7.898,4.605 ZM13.947,4.605 L9.776,4.605 L9.776,8.765 L13.947,8.765 L13.947,4.605 Z",
            })),
        );
      },
      calendar: function (calendarIconProps) {
        return React2.createElement(
          "svg",
          extendsCalendarIcon(
            {
              xmlns: "http://www.w3.org/2000/svg",
              viewBox: "0 0 42 40",
            },
            calendarIconProps,
          ),
          calendarIconPath ||
            (calendarIconPath = React2.createElement("path", {
              fillRule: "evenodd",
              fill: "currentColor",
              d: "M-0.002,40.010 L-0.002,5.448 L5.894,5.448 L5.894,10.171 L6.956,10.171 L6.956,8.485 L6.956,5.448 L6.956,-0.008 L12.072,-0.008 L12.072,5.448 L12.072,8.485 L12.072,10.171 L13.134,10.171 L13.134,5.448 L28.881,5.448 L28.881,10.171 L29.943,10.171 L29.943,8.485 L29.940,8.485 L29.940,-0.008 L35.056,-0.008 L35.056,5.448 L35.059,5.448 L35.059,10.171 L36.121,10.171 L36.121,5.448 L42.014,5.448 L42.014,40.010 L-0.002,40.010 ZM38.159,16.680 L3.853,16.680 L3.853,35.999 L38.159,35.999 L38.159,16.680 ZM9.511,22.456 L6.956,22.456 L6.956,19.889 L9.511,19.889 L9.511,22.456 ZM12.065,25.023 L9.511,25.023 L9.511,22.456 L12.065,22.456 L12.065,25.023 ZM12.065,30.156 L9.511,30.156 L9.511,27.590 L12.065,27.590 L12.065,30.156 ZM17.174,27.590 L17.174,30.156 L14.620,30.156 L14.620,27.590 L17.174,27.590 ZM22.283,27.590 L22.283,30.156 L19.729,30.156 L19.729,27.590 L22.283,27.590 ZM27.392,27.590 L27.392,30.156 L24.838,30.156 L24.838,27.590 L27.392,27.590 ZM32.501,27.590 L32.501,30.156 L29.947,30.156 L29.947,27.590 L32.501,27.590 ZM29.947,22.456 L32.501,22.456 L32.501,25.023 L29.947,25.023 L29.947,22.456 ZM24.838,25.023 L24.838,22.456 L27.392,22.456 L27.392,25.023 L24.838,25.023 ZM19.729,25.023 L19.729,22.456 L22.283,22.456 L22.283,25.023 L19.729,25.023 ZM14.620,25.023 L14.620,22.456 L17.174,22.456 L17.174,25.023 L14.620,25.023 ZM14.620,27.590 L12.065,27.590 L12.065,25.023 L14.620,25.023 L14.620,27.590 ZM19.729,25.023 L19.729,27.590 L17.174,27.590 L17.174,25.023 L19.729,25.023 ZM24.838,25.023 L24.838,27.590 L22.283,27.590 L22.283,25.023 L24.838,25.023 ZM29.947,25.023 L29.947,27.590 L27.392,27.590 L27.392,25.023 L29.947,25.023 ZM12.065,19.889 L14.620,19.889 L14.620,22.456 L12.065,22.456 L12.065,19.889 ZM17.174,19.889 L19.729,19.889 L19.729,22.456 L17.174,22.456 L17.174,19.889 ZM22.283,19.889 L24.838,19.889 L24.838,22.456 L22.283,22.456 L22.283,19.889 ZM27.392,19.889 L29.947,19.889 L29.947,22.456 L27.392,22.456 L27.392,19.889 ZM35.056,19.889 L35.056,22.456 L32.501,22.456 L32.501,19.889 L35.056,19.889 ZM35.056,25.023 L35.056,27.590 L32.501,27.590 L32.501,25.023 L35.056,25.023 ZM35.056,32.724 L32.501,32.724 L32.501,30.156 L35.056,30.156 L35.056,32.724 ZM29.947,32.724 L27.392,32.724 L27.392,30.156 L29.947,30.156 L29.947,32.724 ZM24.838,32.724 L22.283,32.724 L22.283,30.156 L24.838,30.156 L24.838,32.724 ZM19.729,32.724 L17.174,32.724 L17.174,30.156 L19.729,30.156 L19.729,32.724 ZM14.620,32.724 L12.065,32.724 L12.065,30.156 L14.620,30.156 L14.620,32.724 ZM6.956,32.724 L6.956,30.156 L9.511,30.156 L9.511,32.724 L6.956,32.724 ZM6.956,27.590 L6.956,25.023 L9.511,25.023 L9.511,27.590 L6.956,27.590 Z",
            })),
        );
      },
    },
    navItemTransform = (navItemIndex) =>
      "translateY(".concat(((202 + 80 * navItemIndex + 4) / 16).toFixed(3), "rem)"),
    navOverlayTransform = (overlayIndex) =>
      "translateY(".concat(((202 + 80 * overlayIndex) / 16).toFixed(3), "rem)"),
    headerButtonTransform = (buttonIndex, isButtonDetailActive) =>
      "translate3d("
        .concat(isButtonDetailActive ? "0.6875rem" : "0", ", ")
        .concat(((8 + 60 * buttonIndex) / 16).toFixed(3), "rem, 0)"),
    headerDividerTransform = (dividerIndex, isDividerDetailActive) =>
      "translate3d("
        .concat(isDividerDetailActive ? "1.125rem" : "1.25rem", ", ")
        .concat(((62 + 60 * dividerIndex) / 16).toFixed(3), "rem, 0) scaleX(")
        .concat(isDividerDetailActive ? 13.8 : 1, ")"),
    MobileMenuItem = (menuItemProps) => {
      let { sectionKey: menuSectionKey, active: isMenuItemActive, onClick: onMenuItemClick } = menuItemProps,
        { t: tMenuItem } = (0, I18nProviderUseI18n.Bd)(),
        MenuItemIcon = NAV_SECTION_ICONS[menuSectionKey];
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles2().menuItem, {
          [styles2().active]: isMenuItemActive,
        }),
        onClick: onMenuItemClick,
        children: [
          (0, jsx.jsx)(MenuItemIcon, {
            className: styles2().icon,
          }),
          (0, jsx.jsx)("div", {
            className: styles2().divider,
          }),
          (0, jsx.jsx)("div", {
            className: styles2().text,
            "data-key": menuSectionKey,
            children: tMenuItem("nav.".concat(menuSectionKey)),
          }),
          (0, jsx.jsx)(ChevronRightIcon, {
            className: styles2().arrow,
          }),
        ],
      });
    },
    NavRailItem = (navItemProps) => {
      let {
          active: isNavItemActive,
          onClick: onNavItemClick,
          item: navItem,
          index: navItemPosition,
          detailActive: navDetailActive,
        } = navItemProps,
        { lang: navLang } = (0, I18nProviderUseI18n.PO)(),
        NavItemIcon =
          "gameplay" === navItem.key ? NAV_SECTION_ICONS.aicGameplay : NAV_SECTION_ICONS[navItem.key],
        { t: tNavItem } = (0, I18nProviderUseI18n.Bd)();
      return (0, jsx.jsxs)(
        "div",
        {
          className: classnamesDefault()(styles2().navItem, {
            [styles2().active]: isNavItemActive,
            [styles2().detailActive]: navDetailActive,
          }),
          style: {
            transform: navItemTransform(navItemPosition),
          },
          onClick: () => {
            (isNavItemActive || SoundEffects.A.play(SoundEffects.d.menu_click), onNavItemClick());
          },
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().iconWrapper,
              children: (0, jsx.jsx)(NavItemIcon, {
                "data-key": "gameplay" === navItem.key ? "aicGameplay" : navItem.key,
                className: styles2().icon,
              }),
            }),
            (0, jsx.jsx)("div", {
              className: classnamesDefault()(
                styles2().textWrapper,
                ("it-it" === navLang || "pt-br" === navLang) && "gameplay" === navItem.key && styles2().small,
              ),
              children:
                "gameplay" === navItem.key
                  ? ""
                      .concat(tNavItem("nav.gameplay"), " ")
                      .concat("pt-br" === navLang ? "e" : "&", " ")
                      .concat(tNavItem("nav.aic"))
                  : tNavItem("nav.".concat(navItem.key)),
            }),
          ],
        },
        navItem.key,
      );
    },
    HEADER_BUTTON_ICONS = {
      user: SvgIcon95823.A,
      charge: (chargeBtnIconProps) => {
        let {
          className: chargeBtnIconClassName,
          style: chargeBtnIconStyle,
          onClick: onChargeBtnIconClick,
        } = chargeBtnIconProps;
        return (0, jsx.jsx)("svg", {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 27 30",
          className: chargeBtnIconClassName,
          style: chargeBtnIconStyle,
          onClick: onChargeBtnIconClick,
          children: (0, jsx.jsx)("path", {
            fillRule: "evenodd",
            fill: "currentColor",
            d: "M26.273,12.842 L25.645,11.890 L24.903,10.756 L25.645,9.622 L26.273,8.671 L25.645,8.671 L9.058,8.671 L9.058,7.007 L24.432,7.007 L13.186,0.503 L0.726,7.711 L0.726,22.135 L13.186,29.343 L24.432,22.838 L9.058,22.838 L9.058,21.183 L25.645,21.183 L26.273,21.183 L25.645,20.231 L24.903,19.098 L25.645,17.964 L26.273,17.012 L25.645,16.061 L24.903,14.927 L25.645,13.793 L26.273,12.842 ZM4.277,11.062 L6.374,11.062 L6.374,18.783 L4.277,18.783 L4.277,11.062 Z",
          }),
        });
      },
      mute: MutedIcon,
      creator: CreatorIcon,
    },
    HeaderActionButton = (actionButtonProps) => {
      let {
          index: actionButtonIndex,
          detailActive: actionDetailActive,
          onClick: onActionClick,
          iconKey: actionIconKey,
          muteActive: isMuteActive,
        } = actionButtonProps,
        ActionIcon = HEADER_BUTTON_ICONS[actionIconKey],
        { t: tAction } = (0, I18nProviderUseI18n.Bd)(),
        authState = (0, ReactDOM.F7)(),
        handleActionClick = (0, React.useCallback)(() => {
          ("mute" !== actionIconKey && SoundEffects.A.play(SoundEffects.d.common_click),
            null == onActionClick || onActionClick());
        }, [onActionClick, actionIconKey]);
      return (0, jsx.jsxs)("div", {
        className: styles2().button,
        style: {
          transform: headerButtonTransform(actionButtonIndex, actionDetailActive),
        },
        onClick: actionDetailActive ? handleActionClick : void 0,
        children: [
          "mute" === actionIconKey &&
            (isMuteActive
              ? (0, jsx.jsx)(MutedIcon, {
                  className: styles2().icon,
                  style: {
                    color: "#cccccc",
                  },
                  onClick: actionDetailActive ? void 0 : handleActionClick,
                })
              : (0, jsx.jsx)(UnmutedIcon, {
                  className: styles2().icon,
                  onClick: actionDetailActive ? void 0 : handleActionClick,
                })),
          "mute" !== actionIconKey &&
            (0, jsx.jsx)(ActionIcon, {
              className: styles2().icon,
              onClick: actionDetailActive ? void 0 : handleActionClick,
            }),
          "creator" === actionIconKey &&
            (0, jsx.jsx)(ActionIcon, {
              className: styles2().icon,
              onClick: actionDetailActive ? void 0 : handleActionClick,
            }),
          (0, jsx.jsx)("div", {
            className: styles2().textWrapper,
            children: tAction(
              "charge" === actionIconKey
                ? "header.charge"
                : "creator" === actionIconKey
                  ? "header.creator"
                  : "user" === actionIconKey
                    ? authState
                      ? "header.user"
                      : "header.login"
                    : isMuteActive
                      ? "header.mute.on"
                      : "header.mute.off",
            ),
          }),
        ],
      });
    },
    HeaderDivider = (dividerProps) => {
      let { index: dividerPosition, detailActive: dividerDetailActive } = dividerProps;
      return (0, jsx.jsx)("div", {
        className: styles2().divider,
        style: {
          transform: headerDividerTransform(dividerPosition, dividerDetailActive),
        },
      });
    },
    GoToGameButton = (goToGameProps) => {
      let { onClick: onGoToGameClick } = goToGameProps,
        { t: tGoToGame } = (0, I18nProviderUseI18n.Bd)(),
        { lang: goToGameLang } = (0, I18nProviderUseI18n.PO)();
      return (0, jsx.jsx)(jsx.Fragment, {
        children: (0, jsx.jsxs)("div", {
          className: classnamesDefault()(
            styles2().buttonPreserveBg,
            "zh-tw" !== goToGameLang && styles2().oversea,
          ),
          onClick: onGoToGameClick,
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().bg,
            }),
            (0, jsx.jsx)(TriangleDecoIcon, {
              className: styles2().tri,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().divider,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().divider2,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().text,
              children: tGoToGame("header.goToGame"),
            }),
            (0, jsx.jsx)("div", {
              className: styles2().text2,
              children: tGoToGame("header.goToGame"),
            }),
          ],
        }),
      });
    },
    ShareButton = (shareButtonProps) => {
      let { detailActive: shareDetailActive } = shareButtonProps,
        [isShareOpen, setShareOpen] = (0, React.useState)(!1),
        {
          data: { share: shareLinks },
        } = (0, I18nProviderUseI18n.PO)(),
        shareClickOutsideRef = (0, useClickOutsideHook.W)(() => {
          setShareOpen(!1);
        });
      return (
        (0, React.useEffect)(() => {
          setShareOpen(!1);
        }, [shareDetailActive]),
        (0, jsx.jsxs)(jsx.Fragment, {
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().buttonShareBg,
            }),
            (0, jsx.jsx)("div", {
              className: styles2().shareListDetailActive,
              children: shareLinks.map((shareLinkDetail) =>
                (0, jsx.jsx)(
                  shareLinkDetail.icon,
                  {
                    className: styles2().shareItem,
                    onClick: (shareDetailClickEvent) => {
                      (shareDetailClickEvent.stopPropagation(),
                        SoundEffects.A.play(SoundEffects.d.common_click),
                        window.open(shareLinkDetail.url, "_blank"),
                        Tracking.A.collect("social_media_redirect", {
                          channel: shareLinkDetail.key,
                        }));
                    },
                  },
                  shareLinkDetail.key,
                ),
              ),
            }),
            (0, jsx.jsxs)("div", {
              className: classnamesDefault()(styles2().buttonShare, {
                [styles2().active]: isShareOpen,
              }),
              ref: shareClickOutsideRef,
              onClick: () => setShareOpen(!isShareOpen),
              children: [
                (0, jsx.jsx)(ShareIcon, {
                  className: styles2().shareIcon,
                }),
                (0, jsx.jsx)("div", {
                  className: styles2().shareList,
                  onClick: (shareListClickEvent) => {
                    shareListClickEvent.stopPropagation();
                  },
                  children: (0, jsx.jsx)("div", {
                    className: styles2().wrapper,
                    children: shareLinks.map((shareLink) =>
                      (0, jsx.jsx)(
                        shareLink.icon,
                        {
                          className: styles2().shareItem,
                          onClick: (shareClickEvent) => {
                            (shareClickEvent.stopPropagation(),
                              SoundEffects.A.play(SoundEffects.d.common_click),
                              window.open(shareLink.url, "_blank"),
                              Tracking.A.collect("social_media_redirect", {
                                channel: shareLink.key,
                              }));
                          },
                        },
                        shareLink.key,
                      ),
                    ),
                  }),
                }),
              ],
            }),
          ],
        })
      );
    },
    SiteHeader = (headerProps) => {
      let {
          className: headerClassName,
          style: headerStyle,
          sections: headerSections,
          subPage: isSubPage = !1,
        } = headerProps,
        { t: tHeader } = (0, I18nProviderUseI18n.Bd)(),
        { lang: headerLang } = (0, I18nProviderUseI18n.PO)(),
        {
          components: { SvgLogo: SvgLogo },
          data: { share: headerShareLinks },
        } = (0, I18nProviderUseI18n.PO)(),
        { currentSection: currentSectionKey, setCurrentSection: setCurrentSectionKey } =
          useSectionViewerStore(),
        navSections = (0, React.useMemo)(
          () => headerSections.filter((sectionForNav) => !sectionForNav.hideNav),
          [headerSections],
        ),
        activeNavIndex = (0, React.useMemo)(() => {
          let navIndex = navSections.findIndex(
            (navSectionCandidate) => navSectionCandidate.key === currentSectionKey,
          );
          if (-1 === navIndex) {
            let rawSectionIndex = headerSections.findIndex(
              (rawSectionCandidate) => rawSectionCandidate.key === currentSectionKey,
            );
            if (-1 === rawSectionIndex) return 0;
            for (let fallbackNavIndex = rawSectionIndex - 1; fallbackNavIndex >= 0; fallbackNavIndex--)
              if (!headerSections[fallbackNavIndex].hideNav) return fallbackNavIndex;
            return 0;
          }
          return navIndex;
        }, [currentSectionKey, headerSections, navSections]),
        [isHeaderExpanded, setHeaderExpanded] = (0, React.useState)(!1),
        [isMuted, setMuted] = (0, React.useState)(!SoundControlStore.E.getState().enabled),
        [isMobileMenuOpen, setMobileMenuOpen] = (0, React.useState)(!1),
        activateReserveModal = useActivateReserveModal(),
        openUserMenu = (0, UserModal.GW)(),
        { account: headerAccount } = (0, ReactDOM.F7)(),
        requireLogin = (0, module35038.$)(),
        handleUserButtonClick = (0, React.useCallback)(() => {
          headerAccount
            ? openUserMenu()
            : requireLogin(() => {
                openUserMenu();
              });
        }, [headerAccount, openUserMenu, requireLogin]),
        activateReserveWithLogin = (0, module35038.V)(activateReserveModal),
        handleChargeClick = (0, React.useCallback)(() => {
          (window.open(SiteConfig.a.payment_link, "_blank"),
            Tracking.A.collect("click", {
              target: "recharge_center",
            }));
        }, []),
        navigateToSection = (0, React.useCallback)(
          (targetSectionKey) => {
            isSubPage
              ? (window.location.href = "/".concat(headerLang, "/#").concat(targetSectionKey))
              : setCurrentSectionKey(targetSectionKey);
          },
          [isSubPage, setCurrentSectionKey, headerLang],
        );
      (0, React.useCallback)(() => {
        (activateReserveWithLogin(),
          SoundEffects.A.play(SoundEffects.d.reserve_click),
          Tracking.A.collect("click", {
            target: "reserve_button",
          }));
      }, [activateReserveWithLogin]);
      let handleCreatorClick = (0, React.useCallback)(() => {
        window.open(SiteConfig.a.creator_link + headerLang, "_blank");
      }, [headerLang]);
      (0, React.useEffect)(() => {
        isMuted
          ? (BackgroundMusic.K.disable(),
            SoundControlStore.E.setState({
              enabled: !1,
            }))
          : (BackgroundMusic.K.enable(),
            SoundControlStore.E.setState({
              enabled: !0,
            }));
      }, [isMuted]);
      let isOverseaLang = "zh-tw" !== headerLang,
        {
          data: { shop: shopLinks },
        } = (0, I18nProviderUseI18n.PO)(),
        handleGoToGame = (0, React.useCallback)(() => {
          var gameLinkForIos, iosGameUrl, gameLinkForAndroid, androidGameUrl, gameLinkForPc, pcGameUrl;
          if ((0, DeviceUtils.un)(window.navigator.userAgent))
            "vi-vn" !== headerLang
              ? (window.location.href =
                  null !=
                  (iosGameUrl =
                    null == (gameLinkForIos = SiteConfig.a.game_link) ? void 0 : gameLinkForIos.ios)
                    ? iosGameUrl
                    : "")
              : (window.location.href = "https://endfield.hhgame.vn/u-link/");
          else if ((0, DeviceUtils.Fr)(window.navigator.userAgent))
            "vi-vn" !== headerLang
              ? (window.location.href =
                  null !=
                  (androidGameUrl =
                    null == (gameLinkForAndroid = SiteConfig.a.game_link)
                      ? void 0
                      : gameLinkForAndroid.android)
                    ? androidGameUrl
                    : "")
              : (window.location.href = "https://endfield.hhgame.vn/u-link/");
          else {
            let pcDownloadTarget =
                (null == shopLinks
                  ? void 0
                  : shopLinks.find(
                      (shopEntryPc) => (null == shopEntryPc ? void 0 : shopEntryPc.key) === "pc",
                    )) ||
                (null == shopLinks
                  ? void 0
                  : shopLinks.find(
                      (shopEntryWindows) =>
                        (null == shopEntryWindows ? void 0 : shopEntryWindows.key) === "windows",
                    )),
              fallbackToDownload = () => {
                pcDownloadTarget
                  ? Tracking.A.download({
                      channel: pcDownloadTarget.key,
                      url: pcDownloadTarget.url,
                    })
                  : console.error("No download target found");
              },
              pcLaunchUrl =
                null !=
                (pcGameUrl = null == (gameLinkForPc = SiteConfig.a.game_link) ? void 0 : gameLinkForPc.pc)
                  ? pcGameUrl
                  : "";
            if (!pcLaunchUrl) return void fallbackToDownload();
            let launchDetected = !1,
              markLaunched = () => {
                launchDetected = !0;
              },
              onVisibilityChange = () => {
                "hidden" === document.visibilityState && markLaunched();
              },
              launchIframe = document.createElement("iframe"),
              cleanupLaunchProbe = () => {
                (window.removeEventListener("blur", markLaunched),
                  window.removeEventListener("pagehide", markLaunched),
                  document.removeEventListener("visibilitychange", onVisibilityChange),
                  launchIframe.remove());
              };
            (window.addEventListener("blur", markLaunched),
              window.addEventListener("pagehide", markLaunched),
              document.addEventListener("visibilitychange", onVisibilityChange),
              window.setTimeout(() => {
                (cleanupLaunchProbe(), launchDetected || fallbackToDownload());
              }, 1e3),
              (launchIframe.style.display = "none"),
              (launchIframe.src = pcLaunchUrl),
              document.body.appendChild(launchIframe));
          }
        }, [shopLinks, headerLang]);
      return (0, jsx.jsxs)(jsx.Fragment, {
        children: [
          (0, jsx.jsx)(zustand.Qp, {
            className: classnamesDefault()(
              styles2().pcHeaderContainer,
              isHeaderExpanded && styles2().detailActive,
              "vi-vn" !== headerLang && styles2().showPreserveButton,
              headerClassName,
            ),
            onMouseEnter: () => {
              "ontouchstart" in window || setHeaderExpanded(!0);
            },
            onMouseLeave: () => {
              "ontouchstart" in window || setHeaderExpanded(!1);
            },
            style: headerStyle,
            mode: "padding",
            edges: ["left"],
            children: (0, jsx.jsxs)("div", {
              className: styles2().innerContainer,
              children: [
                (0, jsx.jsx)(SvgLogo, {
                  className: classnamesDefault()(
                    styles2().logo,
                    isOverseaLang && "ja-jp" !== headerLang && "ko-kr" !== headerLang && styles2().oversea,
                  ),
                }),
                !isSubPage &&
                  (0, jsx.jsx)("div", {
                    className: classnamesDefault()(styles2().overlay),
                    style: {
                      transform: navOverlayTransform(activeNavIndex),
                    },
                  }),
                navSections.map((navSection, navSectionIndex) =>
                  (0, jsx.jsx)(
                    NavRailItem,
                    {
                      item: navSection,
                      index: navSectionIndex,
                      active: !isSubPage && activeNavIndex === navSectionIndex,
                      detailActive: isHeaderExpanded,
                      onClick: () => navigateToSection(navSection.key),
                    },
                    navSection.key,
                  ),
                ),
                (0, jsx.jsx)("div", {
                  className: classnamesDefault()(
                    styles2().buttonFrameBg,
                    isOverseaLang && styles2().oversea,
                    styles2().ele4,
                  ),
                }),
                (0, jsx.jsx)("div", {
                  className: classnamesDefault()(
                    styles2().buttonFrameContainer,
                    isOverseaLang && styles2().oversea,
                  ),
                  children: (0, jsx.jsxs)(jsx.Fragment, {
                    children: [
                      (0, jsx.jsx)(HeaderActionButton, {
                        index: -1,
                        detailActive: isHeaderExpanded,
                        onClick: handleUserButtonClick,
                        iconKey: "user",
                      }),
                      (0, jsx.jsx)(HeaderDivider, {
                        index: -1,
                        detailActive: isHeaderExpanded,
                      }),
                      (0, jsx.jsx)(HeaderActionButton, {
                        index: 0,
                        detailActive: isHeaderExpanded,
                        iconKey: "charge",
                        onClick: handleChargeClick,
                      }),
                      (0, jsx.jsx)(HeaderDivider, {
                        index: 0,
                        detailActive: isHeaderExpanded,
                      }),
                      (0, jsx.jsx)(HeaderActionButton, {
                        index: 1,
                        detailActive: isHeaderExpanded,
                        iconKey: "creator",
                        onClick: handleCreatorClick,
                      }),
                      (0, jsx.jsx)(HeaderDivider, {
                        index: 1,
                        detailActive: isHeaderExpanded,
                      }),
                      (0, jsx.jsx)(module44990.D, {
                        children: (0, jsx.jsx)(HeaderActionButton, {
                          index: 2,
                          detailActive: isHeaderExpanded,
                          onClick: () => setMuted(!isMuted),
                          iconKey: "mute",
                          muteActive: isMuted,
                        }),
                      }),
                    ],
                  }),
                }),
                "vi-vn" !== headerLang &&
                  (0, jsx.jsx)(GoToGameButton, {
                    onClick: handleGoToGame,
                  }),
                (0, jsx.jsx)(ShareButton, {
                  detailActive: isHeaderExpanded,
                }),
                (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles2().switcher, {
                    [styles2().active]: isHeaderExpanded,
                  }),
                  onClick: () => {
                    setHeaderExpanded(!isHeaderExpanded);
                  },
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().switcherImage,
                    }),
                    (0, jsx.jsx)(SwitcherDecoIcon, {
                      className: styles2().switcherDeco,
                    }),
                  ],
                }),
              ],
            }),
          }),
          (0, jsx.jsxs)("div", {
            className: classnamesDefault()(styles2().h5HeaderContainer, headerClassName),
            style: headerStyle,
            children: [
              (0, jsx.jsx)(SvgLogo, {
                className: classnamesDefault()(
                  styles2().logo,
                  isMobileMenuOpen && styles2().active,
                  isOverseaLang && "ja-jp" !== headerLang && "ko-kr" !== headerLang && styles2().oversea,
                ),
              }),
              (0, jsx.jsxs)("div", {
                className: styles2().buttonGroup,
                children: [
                  (0, jsx.jsx)(module44990.D, {
                    children: (0, jsx.jsx)("div", {
                      className: styles2().iconButton,
                      onClick: () => setMuted(!isMuted),
                      children: isMuted
                        ? (0, jsx.jsx)(MutedIcon, {
                            className: styles2().icon,
                            style: {
                              color: "#cccccc",
                            },
                          })
                        : (0, jsx.jsx)(UnmutedIcon, {
                            className: styles2().icon,
                          }),
                    }),
                  }),
                  "vi-vn" !== headerLang &&
                    (0, jsx.jsxs)("div", {
                      className: classnamesDefault()(styles2().preserveButton, styles2().oversea),
                      onClick: handleGoToGame,
                      children: [
                        (0, jsx.jsx)(TriangleDecoIcon, {
                          className: styles2().tri,
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().divider,
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles2().text,
                          children: tHeader("header.goToGame"),
                        }),
                      ],
                    }),
                ],
              }),
              (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                children: isMobileMenuOpen
                  ? (0, jsx.jsx)(
                      FadeClipTransition,
                      {
                        className: styles2().menuIcon,
                        children: (0, jsx.jsx)(SvgIcon29190.A, {
                          className: styles2().icon,
                          onClick: () => setMobileMenuOpen(!1),
                        }),
                      },
                      "close",
                    )
                  : (0, jsx.jsx)(
                      FadeClipTransition,
                      {
                        className: styles2().menuIcon,
                        children: (0, jsx.jsx)(HamburgerMenuIcon, {
                          className: styles2().icon,
                          onClick: () => setMobileMenuOpen(!0),
                        }),
                      },
                      "open",
                    ),
              }),
              (0, jsx.jsxs)("div", {
                className: classnamesDefault()(styles2().h5Menu, isMobileMenuOpen && styles2().active),
                children: [
                  (0, jsx.jsxs)("div", {
                    className: styles2().menuButtons,
                    children: [
                      (0, jsx.jsxs)("div", {
                        className: styles2().button,
                        onClick: () => {
                          (SoundEffects.A.play(SoundEffects.d.common_click), handleUserButtonClick());
                        },
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles2().text,
                            children: tHeader(headerAccount ? "header.user" : "header.login"),
                          }),
                          (0, jsx.jsx)("div", {
                            className: styles2().iconWrapper,
                            children: (0, jsx.jsx)(SvgIcon6921.A, {
                              className: styles2().icon,
                            }),
                          }),
                        ],
                      }),
                      (0, jsx.jsxs)(jsx.Fragment, {
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles2().divider,
                          }),
                          (0, jsx.jsxs)("div", {
                            className: classnamesDefault()(styles2().button, styles2().creator),
                            onClick: () => {
                              (SoundEffects.A.play(SoundEffects.d.common_click), handleCreatorClick());
                            },
                            children: [
                              (0, jsx.jsx)(CreatorIcon, {
                                className: styles2().icon,
                              }),
                              (0, jsx.jsx)("div", {
                                className: styles2().text,
                                children: tHeader("header.creator"),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, jsx.jsx)(module44990.D, {
                        children: (0, jsx.jsx)("div", {
                          className: classnamesDefault()(styles2().mute, {
                            [styles2().active]: isMuted,
                          }),
                          onClick: () => setMuted(!isMuted),
                          children: isMuted
                            ? (0, jsx.jsx)(MutedIcon, {
                                className: styles2().icon,
                              })
                            : (0, jsx.jsx)(UnmutedIcon, {
                                className: styles2().icon,
                              }),
                        }),
                      }),
                    ],
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().navList,
                    children: headerSections.map((menuSection) =>
                      (0, jsx.jsx)(
                        MobileMenuItem,
                        {
                          sectionKey: menuSection.key,
                          active: !isSubPage && currentSectionKey === menuSection.key,
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              navigateToSection(menuSection.key),
                              setMobileMenuOpen(!1));
                          },
                        },
                        menuSection.key,
                      ),
                    ),
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles2().mediaList,
                    children: headerShareLinks.map((headerShareLink) =>
                      (0, jsx.jsx)(
                        headerShareLink.icon,
                        {
                          className: styles2().mediaItem,
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              window.open(headerShareLink.url, "_blank"),
                              Tracking.A.collect("social_media_redirect", {
                                channel: headerShareLink.key,
                              }));
                          },
                        },
                        headerShareLink.key,
                      ),
                    ),
                  }),
                  (0, jsx.jsx)(HollowText.A, {
                    className: styles2().hallowText,
                    text: "ENDFIELD",
                  }),
                ],
              }),
            ],
          }),
        ],
      });
    };
  var stylesModule3 = webpackRequire(21953),
    styles3 = webpackRequire.n(stylesModule3);
  let useSectionViewerStore = (0, zustandCreate.v)((setViewerState) => ({
      currentSection: "",
      setCurrentSection: () => void 0,
    })),
    SectionViewer = (viewerProps) => {
      let {
        className: viewerClassName,
        style: viewerStyle,
        sections: sections,
        children: subPageChildren,
      } = viewerProps;
      (0, useRunOnceHook.i)(() => {
        useSectionViewerStore.setState({
          currentSection: sections[0].key,
        });
      });
      let viewerRef = (0, React.useRef)(null),
        sectionRefs = (0, React.useMemo)(
          () =>
            sections.reduce(
              (refsAcc, sectionDef) => ((refsAcc[sectionDef.key] = (0, React.createRef)()), refsAcc),
              {},
            ),
          [sections],
        );
      (0, React.useRef)({});
      let hasTrackedSwipeRef = (0, React.useRef)(!1);
      (0, React.useEffect)(() => {
        var windowForScroll, windowForWheel;
        let isProgrammaticScroll = !1,
          handleScrollThrottled = (0, lodashThrottle.A)(() => {
            let nearestSectionKey = "",
              nearestDistance = 2 * window.innerHeight;
            if (
              (Object.entries(sectionRefs).forEach((refEntry) => {
                let [entryKey, entryRef] = refEntry;
                if (entryRef.current) {
                  let sectionRect = entryRef.current.getBoundingClientRect(),
                    sectionCenterY = sectionRect.height / 2 + sectionRect.top;
                  sectionCenterY < nearestDistance &&
                    sectionCenterY > 0 &&
                    ((nearestDistance = sectionCenterY), (nearestSectionKey = entryKey));
                }
              }),
              hasTrackedSwipeRef.current ||
                ((hasTrackedSwipeRef.current = !0), Tracking.A.collect("web_page_swipe", {})),
              isProgrammaticScroll)
            )
              if (useSectionViewerStore.getState().currentSection !== nearestSectionKey) return;
              else {
                isProgrammaticScroll = !1;
                return;
              }
            useSectionViewerStore.getState().currentSection !== nearestSectionKey &&
              nearestSectionKey &&
              useSectionViewerStore.setState({
                currentSection: nearestSectionKey,
              });
          }, 100);
        return (
          null == (windowForScroll = window) ||
            windowForScroll.addEventListener("scroll", handleScrollThrottled),
          null == (windowForWheel = window) ||
            windowForWheel.addEventListener("wheel", handleScrollThrottled),
          useSectionViewerStore.setState({
            setCurrentSection: (sectionKeyToScroll) => {
              var sectionElToScroll;
              ((isProgrammaticScroll = !0),
                useSectionViewerStore.setState({
                  currentSection: sectionKeyToScroll,
                }),
                null == (sectionElToScroll = sectionRefs[sectionKeyToScroll].current) ||
                  sectionElToScroll.scrollIntoView({
                    behavior: "smooth",
                  }));
            },
          }),
          () => {
            var windowRemoveScroll, windowRemoveWheel;
            (null == (windowRemoveScroll = window) ||
              windowRemoveScroll.removeEventListener("scroll", handleScrollThrottled),
              null == (windowRemoveWheel = window) ||
                windowRemoveWheel.removeEventListener("wheel", handleScrollThrottled));
          }
        );
      }, []);
      let { currentSection: currentSection, setCurrentSection: setCurrentSection } = useSectionViewerStore();
      ((0, React.useEffect)(() => {
        let hashSectionKey = window.location.hash.slice(1);
        if (
          hashSectionKey &&
          sections.some((sectionMatchingHash) => sectionMatchingHash.key === hashSectionKey) &&
          "home" !== hashSectionKey
        ) {
          var hashSectionEl;
          (useSectionViewerStore.setState({
            currentSection: hashSectionKey,
          }),
            null == (hashSectionEl = sectionRefs[hashSectionKey].current) ||
              hashSectionEl.scrollIntoView({
                behavior: "smooth",
              }));
        }
      }, []),
        (0, module79549.w)(() => {
          subPageChildren || window.history.replaceState(null, "", "#".concat(currentSection));
        }, [currentSection]));
      let isHomeView = (0, React.useMemo)(() => !subPageChildren, [subPageChildren]);
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles3().sectionViewer, viewerClassName),
        style: viewerStyle,
        ref: viewerRef,
        children: [
          (0, jsx.jsx)(SiteHeader, {
            className: styles3().header,
            sections: sections,
            subPage: !isHomeView,
          }),
          (0, jsx.jsx)("div", {
            className: styles3().contentContainer,
            children: isHomeView
              ? (0, jsx.jsx)(jsx.Fragment, {
                  children: sections.map((sectionEntry) =>
                    (0, jsx.jsx)(
                      "div",
                      {
                        className: styles3().section,
                        ref: sectionRefs[sectionEntry.key],
                        children: (0, jsx.jsx)(sectionEntry.component, {}),
                      },
                      sectionEntry.key,
                    ),
                  ),
                })
              : subPageChildren,
          }),
        ],
      });
    },
    preloadImage = (function () {
      let poolSize = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 5,
        imagePool = SiteUtils.isServer
          ? []
          : Array.from(
              {
                length: poolSize,
              },
              () => new Image(),
            ),
        activeLoadCount = 0;
      return {
        preloadImage: (imageUrl) =>
          imageUrl
            ? new Promise((resolvePreload, rejectPreload) => {
                let tryLoadImage = () => {
                  if (activeLoadCount >= poolSize) return void setTimeout(tryLoadImage, 50);
                  activeLoadCount++;
                  let imageEl = imagePool.pop() || new Image();
                  ((imageEl.onload = () => {
                    (activeLoadCount--, imagePool.push(imageEl), resolvePreload(!0));
                  }),
                    (imageEl.onerror = () => {
                      (activeLoadCount--,
                        imagePool.push(imageEl),
                        rejectPreload(Error("图片加载失败: ".concat(imageUrl))));
                    }),
                    (imageEl.src = imageUrl));
                };
                tryLoadImage();
              })
            : Promise.reject(Error("图片地址为空")),
        getPoolSize: () => imagePool.length,
        getActiveCount: () => activeLoadCount,
      };
    })(5).preloadImage;
  var RootFontSizeScaler = webpackRequire(14577),
    swiper = webpackRequire(59288),
    swiper2 = webpackRequire(21789),
    swiper3 = webpackRequire(91618),
    animeJsDefault = webpackRequire(56578),
    swiper4 = webpackRequire(94167),
    swiperDefault = webpackRequire.n(swiper4),
    threeJs = webpackRequire(24106),
    threeJs2 = webpackRequire(61617);
  let widthFor1080Height = (measuredElement) =>
    (1080 * measuredElement.clientWidth) / measuredElement.clientHeight;
  class PerlinNoise {
    generatePermutation(seed) {
      let permutation = [];
      for (let fillIndex = 0; fillIndex < 256; fillIndex++) permutation[fillIndex] = fillIndex;
      let rngState = seed;
      for (let shuffleIndex = 255; shuffleIndex > 0; shuffleIndex--) {
        let swapIndex = (rngState = (9301 * rngState + 49297) % 233280) % (shuffleIndex + 1),
          swapTemp = permutation[shuffleIndex];
        ((permutation[shuffleIndex] = permutation[swapIndex]), (permutation[swapIndex] = swapTemp));
      }
      return permutation.concat(permutation);
    }
    lerp(lerpT, lerpA, lerpB) {
      return lerpA + lerpT * (lerpB - lerpA);
    }
    fade(fadeT) {
      return fadeT * fadeT * fadeT * (fadeT * (6 * fadeT - 15) + 10);
    }
    grad(gradHash, gradX) {
      let gradY = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
        gradZ = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
        hashLow4 = 15 & gradHash,
        gradU = hashLow4 < 8 ? gradX : gradY,
        gradV = hashLow4 < 4 ? gradY : 12 === hashLow4 || 14 === hashLow4 ? gradX : gradZ;
      return ((1 & hashLow4) == 0 ? gradU : -gradU) + ((2 & hashLow4) == 0 ? gradV : -gradV);
    }
    noise2D(noiseX, noiseY) {
      let perm = this.permutation,
        cellX = 255 & Math.floor(noiseX),
        cellY = 255 & Math.floor(noiseY),
        fracX = noiseX - Math.floor(noiseX),
        fracY = noiseY - Math.floor(noiseY),
        fadedX = this.fade(fracX),
        fadedY = this.fade(fracY),
        hashAA = perm[perm[cellX] + cellY],
        hashAB = perm[perm[cellX] + cellY + 1],
        hashBA = perm[perm[cellX + 1] + cellY],
        hashBB = perm[perm[cellX + 1] + cellY + 1],
        lerpBottom = this.lerp(fadedX, this.grad(hashAA, fracX, fracY), this.grad(hashBA, fracX - 1, fracY)),
        lerpTop = this.lerp(
          fadedX,
          this.grad(hashAB, fracX, fracY - 1),
          this.grad(hashBB, fracX - 1, fracY - 1),
        );
      return (this.lerp(fadedY, lerpBottom, lerpTop) + 1) / 2;
    }
    noise1D(noiseX1d) {
      let perm1d = this.permutation,
        cell1d = 255 & Math.floor(noiseX1d),
        frac1d = noiseX1d - Math.floor(noiseX1d),
        faded1d = this.fade(frac1d),
        hashA1d = perm1d[cell1d],
        hashB1d = perm1d[cell1d + 1],
        gradA1d = this.grad(hashA1d, frac1d),
        gradB1d = this.grad(hashB1d, frac1d - 1);
      return (this.lerp(faded1d, gradA1d, gradB1d) + 1) / 2;
    }
    constructor(noiseSeed = 0) {
      ((this.seed = noiseSeed), (this.permutation = this.generatePermutation(noiseSeed)));
    }
  }
  var initializedField = new WeakMap(),
    fadeAnimationField = new WeakMap();
  class PointCloudActor {
    updateResolution(resolutionVec) {
      this.material.uniforms.resolution.value = resolutionVec;
    }
    generateNoiseTexture() {
      let noiseData = new Float32Array(65536);
      for (let noiseRow = 0; noiseRow < 256; noiseRow++)
        for (let noiseCol = 0; noiseCol < 256; noiseCol++) {
          let sampleX = (noiseRow / 256) * 8,
            sampleY = (noiseCol / 256) * 8,
            noiseValue = 0.5 * this.noise.noise2D(sampleX, sampleY);
          ((noiseValue +=
            0.25 * this.noise.noise2D(2 * sampleX, 2 * sampleY) +
            0.125 * this.noise.noise2D(4 * sampleX, 4 * sampleY)),
            (noiseData[256 * noiseRow + noiseCol] = noiseValue));
        }
      let noiseDataTexture = new threeJs2.GYF(noiseData, 256, 256, threeJs2.VT0, threeJs2.RQf);
      return (
        (noiseDataTexture.wrapS = threeJs2.GJx),
        (noiseDataTexture.wrapT = threeJs2.GJx),
        (noiseDataTexture.needsUpdate = !0),
        noiseDataTexture
      );
    }
    regenerateNoise(newSeed) {
      (void 0 !== newSeed && (this.noise = new PerlinNoise(newSeed)),
        this.noiseTexture.dispose(),
        (this.noiseTexture = this.generateNoiseTexture()),
        (this.material.uniforms.noiseTexture.value = this.noiseTexture));
    }
    init(pointCount, initialData) {
      if (!(0, swiper._)(this, initializedField))
        if (((0, swiper3._)(this, initializedField, !0), initialData)) {
          let [initialPositions, initialMoreData] = initialData,
            positionAttr = new threeJs2.THS(initialPositions, 3);
          this.geometry.setAttribute("position", positionAttr);
          let moreDataAttr = new threeJs2.THS(initialMoreData, 4);
          this.geometry.setAttribute("pointMoreData", moreDataAttr);
        } else {
          let zeroPositions = new Float32Array(3 * pointCount),
            zeroMoreData = new Float32Array(4 * pointCount);
          for (let pointIdx = 0; pointIdx < pointCount; pointIdx++) {
            for (let posComponent = 0; posComponent < 3; posComponent++)
              zeroPositions[3 * pointIdx + posComponent] = 0;
            for (let moreComponent = 0; moreComponent < 4; moreComponent++)
              zeroMoreData[4 * pointIdx + moreComponent] = 0;
          }
          let zeroPositionAttr = new threeJs2.THS(zeroPositions, 3);
          this.geometry.setAttribute("position", zeroPositionAttr);
          let zeroMoreDataAttr = new threeJs2.THS(zeroMoreData, 4);
          this.geometry.setAttribute("pointMoreData", zeroMoreDataAttr);
        }
    }
    setActive(isActive) {
      this.material.uniforms.isActive.value = isActive;
    }
    setScanLineY(scanLineY) {
      ((this.scanLineYs[0] = scanLineY), (this.material.uniforms.scanLineY1.value = scanLineY));
    }
    setPointSizeScale(pointSizeScale) {
      this.material.uniforms.pointSizeScale.value = pointSizeScale;
    }
    setCameraFadeDistance(cameraFadeDistance) {
      this.material.uniforms.cameraFadeDistance.value = cameraFadeDistance;
    }
    async fadeIn(fadeInData) {
      let [fadeInPositions, fadeInMoreData] = fadeInData,
        fadeInPositionAttr = new threeJs2.THS(fadeInPositions, 3);
      this.geometry.setAttribute("position", fadeInPositionAttr);
      let fadeInMoreDataAttr = new threeJs2.THS(fadeInMoreData, 4);
      return (
        this.geometry.setAttribute("pointMoreData", fadeInMoreDataAttr),
        (this.material.uniforms.isActive.value = !0),
        (this.scanLineYs = [-1150, -1150, -1150]),
        (this.material.uniforms.scanLineY1.value = -1150),
        (this.material.uniforms.scanLineY2.value = -1150),
        (this.material.uniforms.scanLineY3.value = -1150),
        new Promise((resolveFadeIn) => {
          let fadeInDoneCount = 0,
            setFadeInScanLine = (scanLineIdx, scanLineValue) => {
              ((this.scanLineYs[scanLineIdx] = scanLineValue),
                (this.material.uniforms["scanLineY".concat(scanLineIdx + 1)].value = scanLineValue - 200));
            },
            onFadeInLineDone = () => {
              3 == ++fadeInDoneCount && resolveFadeIn();
            };
          for (let fadeInLineIdx = 0; fadeInLineIdx < 3; fadeInLineIdx++)
            (0, animeJsDefault.A)({
              targets: {
                value: -1150,
              },
              value: 1350,
              duration: 3e3 / (fadeInLineIdx + 1),
              delay: 2e3 * Math.log(fadeInLineIdx + 1),
              easing: "easeInOutQuad",
              update: (fadeInAnim) => {
                setFadeInScanLine(fadeInLineIdx, Number(fadeInAnim.animations[0].currentValue));
              },
              complete: () => {
                (setFadeInScanLine(fadeInLineIdx, 1350), onFadeInLineDone());
              },
            });
        })
      );
    }
    async fadeOut() {
      return (
        (this.material.uniforms.isActive.value = !1),
        (this.scanLineYs = [-1150, -1150, -1150]),
        (this.material.uniforms.scanLineY1.value = -1150),
        (this.material.uniforms.scanLineY2.value = -1150),
        (this.material.uniforms.scanLineY3.value = -1150),
        new Promise((resolveFadeOut) => {
          let fadeOutDoneCount = 0,
            setFadeOutScanLine = (fadeOutScanLineIdx, fadeOutScanLineValue) => {
              ((this.scanLineYs[fadeOutScanLineIdx] = fadeOutScanLineValue),
                (this.material.uniforms["scanLineY".concat(fadeOutScanLineIdx + 1)].value =
                  fadeOutScanLineValue));
            },
            onFadeOutLineDone = () => {
              3 == ++fadeOutDoneCount && resolveFadeOut();
            };
          for (let fadeOutLineIdx = 0; fadeOutLineIdx < 3; fadeOutLineIdx++)
            (0, animeJsDefault.A)({
              targets: {
                value: -1150,
              },
              value: 1150,
              duration: 2e3,
              delay: 0,
              easing: "easeInOutQuad",
              update: (fadeOutAnim) => {
                setFadeOutScanLine(fadeOutLineIdx, Number(fadeOutAnim.animations[0].currentValue));
              },
              complete: () => {
                (setFadeOutScanLine(fadeOutLineIdx, 1150), onFadeOutLineDone());
              },
            });
        })
      );
    }
    setGlitchEffects(glitchValues) {
      glitchValues.length < 16 ||
        ((this.material.uniforms.glitchEffects0.value = new threeJs2.IUQ(
          glitchValues[0],
          glitchValues[1],
          glitchValues[2],
          glitchValues[3],
        )),
        (this.material.uniforms.glitchEffects1.value = new threeJs2.IUQ(
          glitchValues[4],
          glitchValues[5],
          glitchValues[6],
          glitchValues[7],
        )),
        (this.material.uniforms.glitchEffects2.value = new threeJs2.IUQ(
          glitchValues[8],
          glitchValues[9],
          glitchValues[10],
          glitchValues[11],
        )),
        (this.material.uniforms.glitchEffects3.value = new threeJs2.IUQ(
          glitchValues[12],
          glitchValues[13],
          glitchValues[14],
          glitchValues[15],
        )));
    }
    dispose() {
      ((0, swiper._)(this, fadeAnimationField) &&
        ((0, swiper._)(this, fadeAnimationField).pause(), (0, swiper3._)(this, fadeAnimationField, null)),
        this.geometry.dispose(),
        this.material.dispose(),
        this.noiseTexture.dispose());
    }
    constructor() {
      ((0, swiper2._)(this, initializedField, {
        writable: !0,
        value: void 0,
      }),
        (0, swiper2._)(this, fadeAnimationField, {
          writable: !0,
          value: void 0,
        }),
        (0, swiper3._)(this, initializedField, !1),
        (this.scanLineYs = [-1150, -1150, -1150]),
        (0, swiper3._)(this, fadeAnimationField, null),
        (this.noise = new PerlinNoise(Math.floor(1e4 * Math.random()))),
        (this.noiseTexture = this.generateNoiseTexture()),
        (this.geometry = new threeJs2.LoY()),
        (this.material = new threeJs2.BKk({
          vertexShader: POINT_VERTEX_SHADER,
          fragmentShader: POINT_FRAGMENT_SHADER,
          uniforms: {
            scanLineY1: {
              value: -1150,
            },
            scanLineY2: {
              value: -1150,
            },
            scanLineY3: {
              value: -1150,
            },
            scanLineWidth: {
              value: 20,
            },
            isActive: {
              value: !1,
            },
            cameraFadeDistance: {
              value: 3500,
            },
            cameraFadeStart: {
              value: 1e3,
            },
            noiseTexture: {
              value: this.noiseTexture,
            },
            pointSizeScale: {
              value: 10,
            },
            scanLineYOffsetStrength: {
              value: 30,
            },
            scanLineYOffsetNoiseStrength: {
              value: 180,
            },
            featherWidth: {
              value: 0.1,
            },
            coreRadius: {
              value: 0.1,
            },
            innerGlowStrength: {
              value: 0.6,
            },
            compressStrength: {
              value: 0.5,
            },
            resolution: {
              value: new threeJs2.I9Y(1920, 1080),
            },
            glitchEffects0: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
            glitchEffects1: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
            glitchEffects2: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
            glitchEffects3: {
              value: new threeJs2.IUQ(0, 0, 0, 0),
            },
          },
          transparent: !0,
          depthWrite: !1,
          blending: threeJs2.EZo,
        })),
        (this.mesh = new threeJs2.ONl(this.geometry, this.material)));
    }
  }
  let POINT_VERTEX_SHADER =
      "\n    attribute vec4 pointMoreData;\n    \n    uniform float scanLineY1;\n    uniform float scanLineY2;\n    uniform float scanLineY3;\n    uniform float scanLineWidth;\n    uniform bool isActive;\n    uniform float cameraFadeDistance;\n    uniform float cameraFadeStart;\n    uniform float pointSizeScale;\n    uniform float scanLineYOffsetStrength;\n    uniform float scanLineYOffsetNoiseStrength;\n    uniform vec4 glitchEffects0;\n    uniform vec4 glitchEffects1;\n    uniform vec4 glitchEffects2;\n    uniform vec4 glitchEffects3;\n    uniform vec2 resolution;\n    \n    varying float vAlpha;\n    varying vec3 vColor;\n    varying float vDistanceAlpha;\n\n    void main() {\n        float pointActive = pointMoreData.x;\n        float size = pointMoreData.y;\n        float layer = pointMoreData.z;\n        float delay = pointMoreData.w;\n\n        float scanLineY = scanLineY1;\n        if (abs(layer - 2.0) < 0.1) scanLineY = scanLineY2;\n        if (abs(layer - 3.0) < 0.1) scanLineY = scanLineY3;\n\n        float adjustedScanLineY = scanLineY - delay;\n\n        float y = position.y;\n        float scanLineDelta = adjustedScanLineY - y;\n        float scanLineDist = abs(scanLineDelta);\n        vec3 newPosition = position;\n\n        float alpha = pointActive;\n        if (scanLineDist > 0.0 && scanLineDist < scanLineWidth) {\n            vColor = vec3(1.0, 1.0, 0.2);\n        } else {\n            vColor = vec3(0.8, 0.8, 0.8);\n        }\n        float range = 100.0;\n        if (isActive) {\n            if (y > adjustedScanLineY) {\n                // newPosition.y += 0.01 * scanLineDist * scanLineDist;\n                if (scanLineDist >= range) {\n                    alpha = 0.0;\n                } else {\n                    alpha = clamp(cos(scanLineDist * 3.1415926 / (range * 2.0)), 0.0, 1.0);\n                }\n            }\n        } else {\n            if (y < adjustedScanLineY) {\n                newPosition.y -= 0.05 * scanLineDist * scanLineDist;\n                if (scanLineDist >= range) {\n                    alpha = 0.0;\n                } else {\n                    alpha = clamp(cos(scanLineDist * 3.1415926 / (range * 2.0)), 0.0, 1.0);\n                }\n            }\n        }\n\n        vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);\n        float viewZ = -mvPosition.z;\n        float fadeStart = cameraFadeStart;\n        float fadeEnd = cameraFadeDistance;\n        float distanceAlpha = 1.0 - clamp((viewZ - fadeStart) / (fadeEnd - fadeStart), 0.0, 1.0);\n        vAlpha = 0.6 * alpha * distanceAlpha * (-0.25 * layer + 1.25) * pointActive;\n        vDistanceAlpha = distanceAlpha;\n        gl_Position = projectionMatrix * mvPosition;\n        // === glitch效果 ===\n        float glitchYRange = 10.0; // 屏幕空间y范围\n        float glitchXOffset = 20.0; // 屏幕空间x偏移\n        vec4 glitchs[4];\n        glitchs[0] = glitchEffects0;\n        glitchs[1] = glitchEffects1;\n        glitchs[2] = glitchEffects2;\n        glitchs[3] = glitchEffects3;\n        for (int i = 0; i < 4; i++) {\n            float gy0 = glitchs[i].x;\n            float gx0 = glitchs[i].y;\n            float gy1 = glitchs[i].z;\n            float gx1 = glitchs[i].w;\n            // 屏幕空间y坐标\n            float screenY = mvPosition.y;\n            if (abs(screenY - gy0) < glitchYRange) {\n                mvPosition.x += glitchXOffset * gx0;\n            }\n            if (abs(screenY - gy1) < glitchYRange) {\n                mvPosition.x += glitchXOffset * gx1;\n            }\n        }\n        gl_Position = projectionMatrix * mvPosition;\n        gl_PointSize = size * pointSizeScale * distanceAlpha + 4.0;\n    }\n",
    POINT_FRAGMENT_SHADER =
      "\n    varying float vAlpha;\n    varying vec3 vColor;\n    varying float vDistanceAlpha;\n    \n    uniform float featherWidth;\n    uniform float coreRadius;\n    uniform float innerGlowStrength;\n    uniform float compressStrength;\n    uniform vec2 resolution;\n    \n    void main() {\n        vec2 center = gl_PointCoord - vec2(0.5);\n        float dist = length(center);\n        \n        float radius = 0.5;\n        \n        if (dist > radius) {\n            discard;\n        }\n        \n        float alpha = vAlpha;\n        \n        if (dist <= coreRadius * vDistanceAlpha) {\n            alpha = vAlpha;\n        } else {\n            float featherStart = coreRadius;\n            float featherEnd = radius;\n            \n            float fadeOut1 = smoothstep(featherEnd, featherStart, dist);\n            float fadeOut2 = smoothstep(featherEnd * 0.8, featherStart, dist);\n            \n            float mixRatio = clamp(featherWidth, 0.1, 1.0);\n            float featherAlpha = mix(fadeOut1, fadeOut2, mixRatio);\n            \n            float distanceFade = 1.0 - pow(dist / radius, 2.0);\n            \n            float additionalFeather = 1.0 - pow(dist / radius, 1.0 + featherWidth * 2.0);\n            \n            alpha = vAlpha * featherAlpha * distanceFade * additionalFeather;\n        }\n        \n        float innerGlow = 1.0 - smoothstep(0.0, coreRadius * 3.0, dist);\n        vec3 finalColor = vColor + vColor * innerGlow * innerGlowStrength;\n        \n        // 亮度压缩插值，防止高密度过曝，低密度不变\n        vec3 compressed = finalColor / (finalColor + vec3(1.0));\n        finalColor = mix(finalColor, compressed, compressStrength);\n        \n        float colorBrightness = dot(vColor, vec3(0.299, 0.587, 0.114));\n        if (colorBrightness > 0.6) {\n            alpha *= 1.0 + (colorBrightness - 0.6) * 0.5;\n        }\n        // === 镜头暗角 ===\n        vec2 uv = gl_FragCoord.xy / resolution;\n        float vignetteDist;\n        if (uv.x < 0.4) {\n            vignetteDist = distance(vec2((uv.x - 0.4) * 0.8 + 0.4, uv.y), vec2(0.4, 0.5));\n        } else {\n            vignetteDist = distance(vec2((uv.x - 0.4) * 0.6 + 0.4, uv.y), vec2(0.4, 0.5));\n        }\n        float vignette = 1.0;\n        if (vignetteDist > 0.3) {\n            vignette = 1.0 - smoothstep(0.4, 0.5, vignetteDist);\n        }\n        alpha *= vignette;\n        \n        gl_FragColor = vec4(finalColor, alpha);\n    }\n",
    MODEL_BINARY_SOURCES = {
      factory: webpackRequire(27663),
      enemy: webpackRequire(96741),
      anchor: webpackRequire(25576),
      spaceship: webpackRequire(6777),
      pile: webpackRequire(54335),
      trinity: webpackRequire(90928),
    },
    MODEL_CONFIGS = {
      factory: {
        key: "factory",
        binarySrc: MODEL_BINARY_SOURCES.factory,
        pointSizeScale: 1,
        offset: {
          x: -550,
          y: 300,
          z: -300,
        },
        pivot: {
          x: -50,
          y: 0,
          z: 0,
        },
        scale: 1.25,
        cameraFadeDistance: 4e3,
        cameraFadeStart: 600,
        laserMode: "ceiling",
      },
      enemy: {
        key: "enemy",
        binarySrc: MODEL_BINARY_SOURCES.enemy,
        pointSizeScale: 1,
        offset: {
          x: -600,
          y: -200,
          z: -400,
        },
        pivot: {
          x: 200,
          y: 0,
          z: 400,
        },
        scale: 1,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "ceiling",
      },
      anchor: {
        key: "anchor",
        binarySrc: MODEL_BINARY_SOURCES.anchor,
        pointSizeScale: 1.5,
        offset: {
          x: -550,
          y: 0,
          z: 0,
        },
        pivot: {
          x: -5,
          y: 0,
          z: 10,
        },
        scale: 2,
        cameraFadeDistance: 2300,
        cameraFadeStart: 1800,
        laserMode: "random",
      },
      spaceship: {
        key: "spaceship",
        binarySrc: MODEL_BINARY_SOURCES.spaceship,
        pointSizeScale: 1,
        offset: {
          x: 400,
          y: 150,
          z: 0,
        },
        pivot: {
          x: -800,
          y: 0,
          z: 0,
        },
        scale: 0.75,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "ceiling",
      },
      pile: {
        key: "pile",
        binarySrc: MODEL_BINARY_SOURCES.pile,
        pointSizeScale: 1,
        offset: {
          x: -350,
          y: 200,
          z: 0,
        },
        pivot: {
          x: -220,
          y: 0,
          z: 40,
        },
        scale: 1.2,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "ceiling",
      },
      trinity: {
        key: "trinity",
        binarySrc: MODEL_BINARY_SOURCES.trinity,
        pointSizeScale: 1.25,
        offset: {
          x: -550,
          y: -400,
          z: -200,
        },
        pivot: {
          x: 0,
          y: 0,
          z: 0,
        },
        scale: 1.25,
        cameraFadeDistance: 3500,
        cameraFadeStart: 500,
        laserMode: "random",
      },
    },
    LORE_MODEL_ORDER = [
      MODEL_CONFIGS.spaceship,
      MODEL_CONFIGS.anchor,
      MODEL_CONFIGS.factory,
      MODEL_CONFIGS.pile,
      MODEL_CONFIGS.trinity,
      MODEL_CONFIGS.enemy,
    ];
  var switchingField = new WeakMap();
  class PointCloudModelPlayer {
    static get renderLevelValue() {
      return this.renderLevel;
    }
    static getRayPerBatch() {
      return 2 === this.renderLevel ? 8 : 1 === this.renderLevel ? 14 : 20;
    }
    static getMaxRays() {
      return 2 === this.renderLevel ? 500 : 1 === this.renderLevel ? 1e3 : 2e3;
    }
    setupInteraction() {
      (this.container.addEventListener("mousedown", this.handleMouseDown),
        this.container.addEventListener("mousemove", this.handleMouseMove),
        this.container.addEventListener("mouseup", this.handleMouseUp),
        this.container.addEventListener("mouseleave", this.handleMouseUp),
        this.container.addEventListener("touchstart", this.handleTouchStart),
        this.container.addEventListener("touchmove", this.handleTouchMove),
        this.container.addEventListener("touchend", this.handleTouchEnd));
    }
    get actor() {
      return this.currentActor;
    }
    getRotationInfo() {
      return {
        currentRotation: this.currentRotationY,
        targetRotation: this.targetRotationY,
      };
    }
    updateCameraLookAt() {
      window.innerWidth > window.innerHeight ? this.camera.lookAt(0, 0, 0) : this.camera.lookAt(-550, 0, 0);
    }
    pauseRender() {
      this.animationId &&
        (cancelAnimationFrame(this.animationId), (this.animationId = null), (this.isPaused = !0));
    }
    resumeRender() {
      !this.animationId && this.isPaused && ((this.isPaused = !1), this.animate());
    }
    updateRotation() {
      (this.autoRotation && !this.isDragging && (this.targetRotationY += this.autoRotationSpeed),
        (this.currentRotationY += (this.targetRotationY - this.currentRotationY) * 0.1),
        this.currentGroup && (this.currentGroup.rotation.y = this.currentRotationY),
        this.backupGroup && (this.backupGroup.rotation.y = this.currentRotationY));
    }
    setAutoRotation(autoRotationEnabled) {
      this.autoRotation = autoRotationEnabled;
    }
    setRotationSpeed(rotationSpeedValue) {
      this.rotationSpeed = rotationSpeedValue;
    }
    setAutoRotationSpeed(autoRotationSpeedValue) {
      this.autoRotationSpeed = autoRotationSpeedValue;
    }
    rotateTo(targetRotation) {
      this.targetRotationY = targetRotation;
    }
    static async loadModels() {
      return (
        this.loadModelsPromise ||
          (this.loadModelsPromise = (async () => {
            let loadedModels = [];
            for (let modelConfig of LORE_MODEL_ORDER) {
              let modelBinary = await this.loadBinary(modelConfig.binarySrc);
              loadedModels.push({
                binary: modelBinary,
                key: modelConfig.key,
                pointSizeScale: modelConfig.pointSizeScale,
                offset: modelConfig.offset,
                pivot: modelConfig.pivot,
                scale: modelConfig.scale,
                cameraFadeDistance: modelConfig.cameraFadeDistance,
                cameraFadeStart: modelConfig.cameraFadeStart,
                laserMode: modelConfig.laserMode,
              });
            }
            return ((this.loadModelsPromise = null), loadedModels);
          })()),
        this.loadModelsPromise
      );
    }
    static async setup() {
      return (
        this.setupPromise ||
          (this.setupPromise = (async () => {
            let maxPoints = 0,
              rawModels = await PointCloudModelPlayer.loadModels();
            for (let rawModelForCount of rawModels) {
              let rawPointCount = rawModelForCount.binary.length / 3;
              rawPointCount > 0 && rawPointCount > maxPoints && (maxPoints = rawPointCount);
            }
            this.maxPointCount = Math.max(maxPoints, 1);
            let benchCanvas = document.createElement("canvas");
            ((benchCanvas.width = 800), (benchCanvas.height = 600));
            let benchRenderer = new threeJs.JeP({
                canvas: benchCanvas,
              }),
              benchScene = new threeJs2.Z58(),
              benchCamera = new threeJs2.ubm(75, 800 / 600, 0.1, 1e4);
            benchCamera.position.set(0, 0, 2e3);
            let benchPositions = new Float32Array(3e4);
            for (let benchIdx = 0; benchIdx < 3e4; benchIdx++)
              benchPositions[benchIdx] = 2e3 * Math.random() - 1e3;
            let benchGeometry = new threeJs2.LoY();
            benchGeometry.setAttribute("position", new threeJs2.THS(benchPositions, 3));
            let benchMaterial = new threeJs2.BH$({
                size: 10,
                color: 0xffffff,
              }),
              benchPoints = new threeJs2.ONl(benchGeometry, benchMaterial);
            benchScene.add(benchPoints);
            let benchStart = performance.now();
            benchRenderer.render(benchScene, benchCamera);
            let benchEnd = performance.now();
            benchRenderer.dispose();
            let benchDuration = benchEnd - benchStart;
            for (let rawModel of (benchDuration > 60
              ? (this.renderLevel = 2)
              : benchDuration > 30
                ? (this.renderLevel = 1)
                : (this.renderLevel = 0),
            console.log("[E.P.S] performance test duration", benchDuration),
            console.log("[E.P.S] renderLevel", this.renderLevel),
            rawModels)) {
              let modelPointCount = rawModel.binary.length / 3;
              if (0 === modelPointCount) continue;
              let normalizeScale = 1,
                offsetX = 0,
                offsetY = 0,
                offsetZ = 0,
                minX = 1 / 0,
                maxX = -1 / 0,
                minY = 1 / 0,
                maxY = -1 / 0,
                minZ = 1 / 0,
                maxZ = -1 / 0;
              for (let binaryIdx = 0; binaryIdx < rawModel.binary.length; binaryIdx += 3) {
                let px = rawModel.binary[binaryIdx],
                  py = rawModel.binary[binaryIdx + 1],
                  pz = rawModel.binary[binaryIdx + 2];
                ((minX = Math.min(minX, px)),
                  (maxX = Math.max(maxX, px)),
                  (minY = Math.min(minY, py)),
                  (maxY = Math.max(maxY, py)),
                  (minZ = Math.min(minZ, pz)),
                  (maxZ = Math.max(maxZ, pz)));
              }
              let rangeX = maxX - minX,
                rangeY = maxY - minY,
                rangeZ = maxZ - minZ;
              ((normalizeScale = 1900 / rangeY),
                (offsetX = -0.5 * rangeX - minX),
                (offsetY = -0.5 * rangeY - minY),
                (offsetZ = -0.5 * rangeZ - minZ));
              let pointData = [],
                pointMoreData = [];
              for (let pointSlotIdx = 0; pointSlotIdx < maxPoints; pointSlotIdx++)
                if (3 * pointSlotIdx >= rawModel.binary.length)
                  (pointData.push(0, 0, 0), pointMoreData.push(0, 0, 0, 0));
                else {
                  let normX = (rawModel.binary[3 * pointSlotIdx] + offsetX) * normalizeScale,
                    normY = (rawModel.binary[3 * pointSlotIdx + 1] + offsetY) * normalizeScale,
                    normZ = (rawModel.binary[3 * pointSlotIdx + 2] + offsetZ) * normalizeScale,
                    pointSize = swiperDefault()(4, 8);
                  (pointData.push(normX, normY, normZ),
                    pointMoreData.push(1, pointSize, swiperDefault()(1, 3), swiperDefault()(-100, 100)));
                }
              let preparedModel = {
                key: rawModel.key,
                pointDataArray: new Float32Array(pointData),
                pointMoreDataArray: new Float32Array(pointMoreData),
                count: modelPointCount,
                pointSizeScale: rawModel.pointSizeScale,
                offset: rawModel.offset || {
                  x: -800,
                  y: 200,
                  z: 0,
                },
                scale: rawModel.scale || 1,
                pivot: rawModel.pivot || {
                  x: 0,
                  y: 0,
                  z: 0,
                },
                cameraFadeDistance: rawModel.cameraFadeDistance || 3500,
                cameraFadeStart: rawModel.cameraFadeStart || 1e3,
                laserMode: rawModel.laserMode || "ceiling",
              };
              this.models.push(preparedModel);
            }
          })()),
        this.setupPromise
      );
    }
    get canSwitch() {
      return !(0, swiper._)(this, switchingField);
    }
    startGlitchLoop(glitchActor) {
      if (!glitchActor) return;
      let scheduleGlitch = () => {
        let glitchDelay = 4e3 + 2e3 * Math.random();
        (this.activateGlitch(glitchActor),
          (this.glitchTimer = window.setTimeout(scheduleGlitch, glitchDelay)));
      };
      scheduleGlitch();
    }
    stopGlitchLoop() {
      (this.glitchTimer && (clearTimeout(this.glitchTimer), (this.glitchTimer = null)),
        this.currentActor && this.currentActor.setGlitchEffects(Array(16).fill(0)),
        this.backupActor && this.backupActor.setGlitchEffects(Array(16).fill(0)));
    }
    activateGlitch(glitchTarget) {
      let applyGlitchFrame = () => {
          let glitchLineCount = swiperDefault()(6, 8),
            glitchFrame = Array(16).fill(0);
          for (let glitchLineIdx = 0; glitchLineIdx < glitchLineCount; glitchLineIdx++)
            ((glitchFrame[2 * glitchLineIdx] = -2e3 + 4e3 * Math.random()),
              (glitchFrame[2 * glitchLineIdx + 1] = (Math.random() > 0.5 ? 1 : -1) * Math.random() * 5));
          glitchTarget.setGlitchEffects(glitchFrame);
        },
        glitchFrameCount = 3 + swiperDefault()(0, 3);
      for (let glitchFrameIdx = 0; glitchFrameIdx < glitchFrameCount; glitchFrameIdx++)
        setTimeout(() => {
          applyGlitchFrame();
        }, 80 * glitchFrameIdx);
      setTimeout(
        () => {
          glitchTarget.setGlitchEffects(Array(16).fill(0));
        },
        80 * glitchFrameCount + 80,
      );
    }
    async switchTo(nextModelIndex) {
      if (
        (await PointCloudModelPlayer.setup(),
        nextModelIndex < 0 || nextModelIndex >= PointCloudModelPlayer.models.length)
      )
        return void console.warn("Invalid model index: ".concat(nextModelIndex));
      if (nextModelIndex === this.modelIndex || (0, swiper._)(this, switchingField)) return;
      ((0, swiper3._)(this, switchingField, !0), (this.modelIndex = nextModelIndex), this.stopGlitchLoop());
      let nextModel = PointCloudModelPlayer.models[nextModelIndex],
        prevCurrentGroup = this.currentGroup,
        prevBackupGroup = this.backupGroup,
        prevCurrentActor = this.currentActor,
        prevBackupActor = this.backupActor;
      ((this.currentGroup = prevBackupGroup),
        (this.backupGroup = prevCurrentGroup),
        (this.currentActor = prevBackupActor),
        (this.backupActor = prevCurrentActor),
        this.currentActor.setPointSizeScale(nextModel.pointSizeScale),
        this.currentActor.setCameraFadeDistance(nextModel.cameraFadeDistance),
        this.currentActor.material.uniforms.cameraFadeStart &&
          (this.currentActor.material.uniforms.cameraFadeStart.value = nextModel.cameraFadeStart),
        this.rayInstMesh &&
          this.rayInstMesh.material &&
          this.rayInstMesh.material.uniforms &&
          this.rayInstMesh.material.uniforms.cameraFadeDistance &&
          ((this.rayInstMesh.material.uniforms.cameraFadeDistance.value = nextModel.cameraFadeDistance),
          this.rayInstMesh.material.uniforms.cameraFadeStart &&
            (this.rayInstMesh.material.uniforms.cameraFadeStart.value = nextModel.cameraFadeStart)),
        this.currentGroup.position.set(
          nextModel.offset.x + nextModel.pivot.x,
          nextModel.offset.y + nextModel.pivot.y,
          nextModel.offset.z + nextModel.pivot.z,
        ),
        this.currentGroup.scale.setScalar(nextModel.scale),
        this.currentActor.mesh.position.set(-nextModel.pivot.x, -nextModel.pivot.y, -nextModel.pivot.z));
      try {
        ((this.isScanLineAnimating = !0),
          await Promise.all([
            this.backupActor.fadeOut(),
            this.currentActor.fadeIn([nextModel.pointDataArray, nextModel.pointMoreDataArray]),
            new Promise((resolveSpin) => {
              let baseAutoRotationSpeed = this.autoRotationSpeed;
              (0, animeJsDefault.A)({
                targets: this,
                autoRotationSpeed: 20 * baseAutoRotationSpeed,
                duration: 400,
                easing: "easeInOutQuad",
                complete: () => {
                  (0, animeJsDefault.A)({
                    targets: this,
                    autoRotationSpeed: baseAutoRotationSpeed,
                    delay: 800,
                    duration: 800,
                    easing: "easeInOutQuad",
                    complete: resolveSpin,
                  });
                },
              });
            }),
          ]),
          this.startGlitchLoop(this.currentActor),
          this.backupActor && this.backupActor.setGlitchEffects(Array(16).fill(0)));
      } catch (switchError) {
        console.error(switchError);
      } finally {
        ((this.isScanLineAnimating = !1), (0, swiper3._)(this, switchingField, !1));
      }
    }
    create1DNoiseTexture() {
      let noiseTexSize = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 256,
        rayNoise = new PerlinNoise(Math.floor(1e4 * Math.random())),
        rayNoiseData = new Float32Array(noiseTexSize);
      for (let rayNoiseIdx = 0; rayNoiseIdx < noiseTexSize; rayNoiseIdx++)
        rayNoiseData[rayNoiseIdx] = rayNoise.noise1D((rayNoiseIdx / noiseTexSize) * 8);
      let noiseTexture1d = new threeJs2.GYF(rayNoiseData, noiseTexSize, 1, threeJs2.VT0, threeJs2.RQf);
      return (
        (noiseTexture1d.wrapS = threeJs2.GJx),
        (noiseTexture1d.wrapT = threeJs2.GJx),
        (noiseTexture1d.needsUpdate = !0),
        noiseTexture1d
      );
    }
    spawnLaserRays(spawnMode, spawnY) {
      let raysPerBatch =
          arguments.length > 2 && void 0 !== arguments[2]
            ? arguments[2]
            : PointCloudModelPlayer.getRayPerBatch(),
        rayIntensity = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 1,
        activeModel = PointCloudModelPlayer.models[this.modelIndex],
        activePointData = activeModel.pointDataArray,
        activePointCount = activeModel.count,
        spawnedCount = 0;
      for (
        let spawnAttempt = 0;
        spawnAttempt < 500 && spawnedCount < raysPerBatch * rayIntensity;
        spawnAttempt++
      ) {
        let rayTarget,
          rayTargetY,
          raySource = new threeJs2.Pq0((0, SiteUtils.aT)([-3e3, 400, 3e3]), swiperDefault()(2e3, 2e3), 0);
        if (activePointCount > 0) {
          let randomPointIdx = Math.floor(Math.random() * activePointCount),
            randomPointX = activePointData[3 * randomPointIdx];
          rayTargetY = activePointData[3 * randomPointIdx + 1];
          let randomPointZ = activePointData[3 * randomPointIdx + 2];
          if ("scanLine" === spawnMode) {
            if (Math.abs(rayTargetY - spawnY) > 40) continue;
          } else if (rayTargetY - spawnY > 0) continue;
          let randomPoint = new threeJs2.Pq0(randomPointX, rayTargetY, randomPointZ);
          ((rayTarget = randomPoint),
            "ceiling" === activeModel.laserMode &&
              (raySource.setX(randomPoint.x), raySource.setZ(randomPoint.z)));
        } else ((rayTargetY = spawnY), (rayTarget = new threeJs2.Pq0(0, spawnY, 0)));
        let randomOpacity = () => 0.8 * Math.random() * rayIntensity,
          freeRaySlot = this.rayInstances.findIndex((rayInstance) => !rayInstance.active);
        if (-1 === freeRaySlot) break;
        ((this.rayInstances[freeRaySlot] = {
          src: raySource,
          target: rayTarget.clone(),
          targetActor: this.currentActor,
          targetGroup: this.currentGroup,
          baseOpacity: randomOpacity(),
          randomOffset: Math.random(),
          startTime: performance.now(),
          duration: (0.5 + Math.random()) * 400 * rayIntensity,
          lifetime: (0.5 + Math.random()) * 400 * rayIntensity,
          laserMode: activeModel.laserMode,
          active: !0,
        }),
          spawnedCount++);
      }
    }
    updateRayInstances() {
      let now = performance.now(),
        srcAttr = this.rayInstGeom.getAttribute("src"),
        targetAttr = this.rayInstGeom.getAttribute("target"),
        baseOpacityAttr = this.rayInstGeom.getAttribute("baseOpacity"),
        randomOffsetAttr = this.rayInstGeom.getAttribute("randomOffset"),
        progressAttr = this.rayInstGeom.getAttribute("progress");
      for (let rayIdx = 0; rayIdx < PointCloudModelPlayer.getMaxRays(); rayIdx++) {
        let ray = this.rayInstances[rayIdx];
        if (!ray || !ray.active) {
          progressAttr.setX(rayIdx, 0);
          continue;
        }
        let rayProgress = Math.min(1, (now - ray.startTime) / ray.duration);
        progressAttr.setX(rayIdx, rayProgress);
        let raySrcWorld = ray.src.clone(),
          rayTargetWorld = ray.target.clone();
        (ray.targetActor &&
          (rayTargetWorld.add(ray.targetActor.mesh.position),
          "ceiling" === ray.laserMode && raySrcWorld.add(ray.targetActor.mesh.position)),
          ray.targetGroup &&
            (rayTargetWorld.multiply(ray.targetGroup.scale),
            rayTargetWorld.applyAxisAngle(new threeJs2.Pq0(0, 1, 0), ray.targetGroup.rotation.y),
            rayTargetWorld.add(ray.targetGroup.position),
            "ceiling" === ray.laserMode &&
              (raySrcWorld.multiply(ray.targetGroup.scale),
              raySrcWorld.applyAxisAngle(new threeJs2.Pq0(0, 1, 0), ray.targetGroup.rotation.y),
              raySrcWorld.add(ray.targetGroup.position))),
          srcAttr.setXYZ(rayIdx, raySrcWorld.x, raySrcWorld.y, raySrcWorld.z),
          targetAttr.setXYZ(rayIdx, rayTargetWorld.x, rayTargetWorld.y, rayTargetWorld.z),
          baseOpacityAttr.setX(rayIdx, ray.baseOpacity),
          randomOffsetAttr.setX(rayIdx, ray.randomOffset),
          rayProgress >= 1 && now - ray.startTime > ray.duration + ray.lifetime && (ray.active = !1));
      }
      ((srcAttr.needsUpdate = !0),
        (targetAttr.needsUpdate = !0),
        (baseOpacityAttr.needsUpdate = !0),
        (randomOffsetAttr.needsUpdate = !0),
        (progressAttr.needsUpdate = !0));
    }
    static async loadBinary(binaryUrl) {
      if (this.binaryCache[binaryUrl]) return this.binaryCache[binaryUrl];
      try {
        let binaryResponse = await fetch(binaryUrl);
        if (!binaryResponse.ok) throw Error("网络请求失败");
        let binaryBuffer = await binaryResponse.arrayBuffer(),
          binaryFloats = new Float32Array(binaryBuffer);
        return ((this.binaryCache[binaryUrl] = binaryFloats), binaryFloats);
      } catch (loadBinaryError) {
        return (console.error("加载二进制文件失败:", loadBinaryError), new Float32Array(0));
      }
    }
    dispose() {
      (this.animationId && (cancelAnimationFrame(this.animationId), (this.animationId = null)),
        this.currentActor.dispose(),
        this.backupActor.dispose(),
        this.renderer.dispose(),
        this.container.removeEventListener("mousedown", this.handleMouseDown),
        this.container.removeEventListener("mousemove", this.handleMouseMove),
        this.container.removeEventListener("mouseup", this.handleMouseUp),
        this.container.removeEventListener("mouseleave", this.handleMouseUp),
        this.container.removeEventListener("touchstart", this.handleTouchStart),
        this.container.removeEventListener("touchmove", this.handleTouchMove),
        this.container.removeEventListener("touchend", this.handleTouchEnd),
        window.removeEventListener("resize", this.handleResize));
    }
    constructor(containerEl) {
      ((0, swiper2._)(this, switchingField, {
        writable: !0,
        value: void 0,
      }),
        (this.modelIndex = -1),
        (this.animationId = null),
        (this.isPaused = !0),
        (this.isDragging = !1),
        (this.previousMouseX = 0),
        (this.rotationSpeed = 0.01),
        (this.currentRotationY = 0),
        (this.targetRotationY = 0),
        (this.autoRotation = !0),
        (this.autoRotationSpeed = 0.005),
        (this.isScanLineAnimating = !1),
        (this.rayFrameCount = 0),
        (this.rayInstances = Array.from(
          {
            length: 1e3,
          },
          () => ({
            src: new threeJs2.Pq0(),
            target: new threeJs2.Pq0(),
            targetActor: null,
            targetGroup: null,
            baseOpacity: 0,
            randomOffset: 0,
            startTime: 0,
            duration: 0,
            lifetime: 0,
            active: !1,
            laserMode: "random",
          }),
        )),
        (this.glitchTimer = null),
        (this.handleMouseDown = (mouseDownEvent) => {
          ((this.isDragging = !0),
            (this.previousMouseX = mouseDownEvent.clientX),
            (this.autoRotation = !1),
            (this.container.style.cursor = "grabbing"));
        }),
        (this.handleMouseMove = (mouseMoveEvent) => {
          if (!this.isDragging) return;
          let mouseDeltaX = mouseMoveEvent.clientX - this.previousMouseX;
          ((this.targetRotationY += mouseDeltaX * this.rotationSpeed),
            (this.previousMouseX = mouseMoveEvent.clientX));
        }),
        (this.handleMouseUp = () => {
          ((this.isDragging = !1), (this.container.style.cursor = "grab"), (this.autoRotation = !0));
        }),
        (this.handleTouchStart = (touchStartEvent) => {
          1 === touchStartEvent.touches.length &&
            ((this.isDragging = !0),
            (this.previousMouseX = touchStartEvent.touches[0].clientX),
            (this.autoRotation = !1),
            (this.container.style.cursor = "grabbing"));
        }),
        (this.handleTouchMove = (touchMoveEvent) => {
          if (!this.isDragging || 1 !== touchMoveEvent.touches.length) return;
          let touchDeltaX = touchMoveEvent.touches[0].clientX - this.previousMouseX;
          ((this.targetRotationY += touchDeltaX * this.rotationSpeed),
            (this.previousMouseX = touchMoveEvent.touches[0].clientX));
        }),
        (this.handleTouchEnd = () => {
          ((this.isDragging = !1), (this.container.style.cursor = "grab"), (this.autoRotation = !0));
        }),
        (this.handleResize = () => {
          ((this.camera.aspect = this.container.clientWidth / this.container.clientHeight),
            this.camera.updateProjectionMatrix());
          let resizedWidth = widthFor1080Height(this.container);
          (this.renderer.setSize(resizedWidth, 1080),
            this.currentActor.updateResolution(new threeJs2.I9Y(resizedWidth, 1080)),
            this.backupActor.updateResolution(new threeJs2.I9Y(resizedWidth, 1080)),
            this.updateCameraLookAt());
        }),
        (this.animate = () => {
          if (
            ((this.animationId = requestAnimationFrame(this.animate)),
            this.updateRotation(),
            this.renderer.render(this.scene, this.camera),
            this.isScanLineAnimating && (this.rayFrameCount++, this.rayFrameCount >= 2))
          ) {
            this.rayFrameCount = 0;
            let scanLineY1 = this.currentActor.material.uniforms.scanLineY1.value,
              scanLineY2 = this.currentActor.material.uniforms.scanLineY2.value;
            this.isScanLineAnimating &&
              (this.spawnLaserRays("scanLine", scanLineY1, PointCloudModelPlayer.getRayPerBatch(), 1),
              this.spawnLaserRays("scanLine", scanLineY2, PointCloudModelPlayer.getRayPerBatch(), 0.4));
          }
          this.updateRayInstances();
        }),
        (0, swiper3._)(this, switchingField, !1),
        (this.container = containerEl),
        (this.scene = new threeJs2.Z58()),
        (this.scene.background = null));
      let initialWidth = widthFor1080Height(this.container);
      ((this.camera = new threeJs2.ubm(75, initialWidth / 1080, 0.1, 1e4)),
        this.camera.position.set(0, 300, 2e3),
        this.updateCameraLookAt(),
        (this.renderer = new threeJs.JeP({
          antialias: !0,
          alpha: !0,
        })),
        this.renderer.setSize(initialWidth, 1080),
        containerEl.appendChild(this.renderer.domElement),
        (this.currentActor = new PointCloudActor()),
        (this.backupActor = new PointCloudActor()),
        this.currentActor.updateResolution(new threeJs2.I9Y(initialWidth, 1080)),
        this.backupActor.updateResolution(new threeJs2.I9Y(initialWidth, 1080)),
        (this.currentGroup = new threeJs2.YJl()),
        (this.currentGroup.position.x = -800),
        (this.currentGroup.position.y = 200),
        this.currentGroup.add(this.currentActor.mesh),
        (this.backupGroup = new threeJs2.YJl()),
        (this.backupGroup.position.x = -800),
        (this.backupGroup.position.y = 200),
        this.backupGroup.add(this.backupActor.mesh),
        (this.rayNoiseTexture = this.create1DNoiseTexture()));
      let rayLineGeometry = new threeJs2.LoY();
      rayLineGeometry.setAttribute("position", new threeJs2.qtW([0, 0, 0, 1, 0, 0], 3));
      let raySrcArray = new Float32Array(3 * PointCloudModelPlayer.getMaxRays()),
        rayTargetArray = new Float32Array(3 * PointCloudModelPlayer.getMaxRays()),
        rayBaseOpacityArray = new Float32Array(PointCloudModelPlayer.getMaxRays()),
        rayRandomOffsetArray = new Float32Array(PointCloudModelPlayer.getMaxRays()),
        rayProgressArray = new Float32Array(PointCloudModelPlayer.getMaxRays());
      ((this.rayInstGeom = new threeJs2.CmU()),
        (this.rayInstGeom.instanceCount = PointCloudModelPlayer.getMaxRays()),
        this.rayInstGeom.setAttribute("position", rayLineGeometry.getAttribute("position")),
        this.rayInstGeom.setAttribute("src", new threeJs2.uWO(raySrcArray, 3)),
        this.rayInstGeom.setAttribute("target", new threeJs2.uWO(rayTargetArray, 3)),
        this.rayInstGeom.setAttribute("baseOpacity", new threeJs2.uWO(rayBaseOpacityArray, 1)),
        this.rayInstGeom.setAttribute("randomOffset", new threeJs2.uWO(rayRandomOffsetArray, 1)),
        this.rayInstGeom.setAttribute("progress", new threeJs2.uWO(rayProgressArray, 1)));
      let rayMaterial = new threeJs2.BKk({
        uniforms: {
          noiseTexture: {
            value: this.rayNoiseTexture,
          },
          cameraFadeDistance: {
            value: 3e3,
          },
          cameraPosition: {
            value: this.camera.position,
          },
        },
        vertexShader:
          "\n                attribute vec3 src;\n                attribute vec3 target;\n                attribute float progress;\n                attribute float randomOffset;\n                attribute float baseOpacity;\n                varying vec3 vWorldPos;\n                varying float vT;\n                varying float vBaseOpacity;\n                varying float vRandomOffset;\n                void main() {\n                    float t = clamp(progress, 0.0, 1.0);\n                    vT = position.x * t;\n                    vec3 pos = mix(src, target, vT);\n                    vBaseOpacity = baseOpacity;\n                    vRandomOffset = randomOffset;\n                    gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);\n                    vWorldPos = gl_Position.xyz;\n                }\n            ",
        fragmentShader:
          "\n                uniform sampler2D noiseTexture;\n                uniform float cameraFadeDistance;\n                varying vec3 vWorldPos;\n                varying float vT;\n                varying float vBaseOpacity;\n                varying float vRandomOffset;\n                void main() {\n                    float dist = distance(vWorldPos, cameraPosition);\n                    float distanceAlpha = 1.0 - clamp(dist / cameraFadeDistance, 0.0, 1.0);\n                    float noise = texture2D(noiseTexture, vec2(fract(vT + vRandomOffset), 0.5)).r;\n                    float alpha = vBaseOpacity * distanceAlpha * noise * vT;\n                    if (alpha < 0.01) discard;\n                    gl_FragColor = vec4("
            .concat("1.000000", ", ")
            .concat("1.000000", ", ")
            .concat("1.000000", ", alpha);\n                }\n            "),
        transparent: !0,
        depthWrite: !1,
        blending: threeJs2.EZo,
      });
      ((this.rayInstMesh = new threeJs2.DXC(this.rayInstGeom, rayMaterial)),
        this.scene.add(this.rayInstMesh),
        PointCloudModelPlayer.setup()
          .then(() => {
            if (0 === PointCloudModelPlayer.models.length)
              return void console.error("No available model data");
            (2 === PointCloudModelPlayer.renderLevel && this.renderer.setPixelRatio(0.75),
              this.currentActor.init(PointCloudModelPlayer.maxPointCount),
              this.backupActor.init(PointCloudModelPlayer.maxPointCount),
              this.scene.add(this.currentGroup),
              this.scene.add(this.backupGroup));
          })
          .catch((setupError) => {
            console.error("ModelPlayer init failed:", setupError);
          }),
        (this.container.style.cursor = "grab"),
        this.setupInteraction(),
        window.addEventListener("resize", this.handleResize));
    }
  }
  ((PointCloudModelPlayer.maxPointCount = 0),
    (PointCloudModelPlayer.renderLevel = 0),
    (PointCloudModelPlayer.models = []),
    (PointCloudModelPlayer.loadModelsPromise = null),
    (PointCloudModelPlayer.setupPromise = null),
    (PointCloudModelPlayer.binaryCache = {}));
  var LoadingScreenFirstLoadProgressLoadedStore = webpackRequire(71272),
    framerMotionUseInView = webpackRequire(19213),
    useOrientation = webpackRequire(90286),
    TrackingGroupsEnum = webpackRequire(29521);
  function extendsChargeIcon() {
    return (extendsChargeIcon = Object.assign
      ? Object.assign.bind()
      : function (target12) {
          for (var argIndex12 = 1; argIndex12 < arguments.length; argIndex12++) {
            var source12 = arguments[argIndex12];
            for (var sourceKey12 in source12)
              ({}).hasOwnProperty.call(source12, sourceKey12) &&
                (target12[sourceKey12] = source12[sourceKey12]);
          }
          return target12;
        }).apply(null, arguments);
  }
  let ChargeIcon = function (chargeIconProps) {
      return React2.createElement(
        "svg",
        extendsChargeIcon(
          {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 45 50",
          },
          chargeIconProps,
        ),
        chargeIconPath ||
          (chargeIconPath = React2.createElement("path", {
            fillRule: "evenodd",
            fill: "currentColor",
            d: "M44.478,28.633 L42.442,31.734 L42.169,32.146 L42.442,32.559 L44.478,35.659 L42.442,35.659 L35.593,35.659 L20.796,35.659 L11.519,35.659 L11.519,32.740 C12.013,32.842 12.525,32.893 13.047,32.893 C17.328,32.893 20.796,29.412 20.796,25.116 C20.796,20.824 17.328,17.344 13.047,17.344 C12.525,17.344 12.013,17.395 11.519,17.497 L11.519,14.577 L20.796,14.577 L35.593,14.577 L42.442,14.577 L44.478,14.577 L42.442,17.677 L42.169,18.090 L42.442,18.502 L44.478,21.603 L42.442,24.703 L42.169,25.116 L42.442,25.533 L44.478,28.633 ZM37.634,17.107 L23.567,17.107 L22.768,20.977 L32.120,20.977 L27.470,24.842 L25.752,33.124 L29.603,33.124 L32.120,20.977 L37.075,20.977 L37.634,18.284 L37.879,17.107 L37.634,17.107 ZM11.070,30.311 L11.070,26.562 L10.978,26.562 L7.334,26.562 L7.334,23.674 L10.978,23.674 L11.070,23.674 L11.070,19.925 L13.943,19.925 L13.943,23.674 L17.683,23.674 L17.683,26.562 L13.943,26.562 L13.943,30.311 L11.070,30.311 ZM21.480,6.397 L5.326,15.759 L5.326,24.550 L5.326,25.686 L5.326,34.478 L21.480,43.835 L31.520,38.018 L41.139,38.018 L21.480,49.410 L0.514,37.263 L0.514,12.969 L21.480,0.821 L41.144,12.218 L31.524,12.218 L21.480,6.397 Z",
          })),
      );
    },
    ANDROID_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/android-icon.dd9c0fd6.png",
    },
    DOWNLOAD_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/download-icon.3efcbfc6.png",
    },
    EPIC_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/epic.7b9f0f97.png",
    },
    GPG_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/gpg.37836d7a.png",
    },
    PC_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/pc.9c65ea0f.png",
    },
    PS5_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/ps5.ff9ebc6a.png",
    },
    TAPTAP_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/taptap.d490d888.png",
    },
    TAPTAP_H5_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/taptap-h5.69ec3145.png",
    },
    WINDOWS_ICON_IMG = {
      src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/windows.f03ec02f.png",
    };
  var stylesModule4 = webpackRequire(40226),
    styles4 = webpackRequire.n(stylesModule4);
  let DotsDecoIcon = (dotsDecoProps) => {
      let { className: dotsDecoClassName } = dotsDecoProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 32 10",
        className: dotsDecoClassName,
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M23.663,3.332 L23.663,0.445 L31.361,0.445 L31.361,3.332 L23.663,3.332 ZM17.963,4.058 C16.941,4.058 16.113,3.250 16.113,2.252 C16.113,1.254 16.941,0.445 17.963,0.445 C18.985,0.445 19.813,1.254 19.813,2.252 C19.813,3.250 18.985,4.058 17.963,4.058 ZM12.782,9.117 C11.760,9.117 10.931,8.308 10.931,7.310 C10.931,6.313 11.760,5.504 12.782,5.504 C13.804,5.504 14.632,6.313 14.632,7.310 C14.632,8.308 13.804,9.117 12.782,9.117 ZM12.782,4.058 C11.760,4.058 10.931,3.250 10.931,2.252 C10.931,1.254 11.760,0.445 12.782,0.445 C13.804,0.445 14.632,1.254 14.632,2.252 C14.632,3.250 13.804,4.058 12.782,4.058 ZM7.601,9.117 C6.579,9.117 5.750,8.308 5.750,7.310 C5.750,6.313 6.579,5.504 7.601,5.504 C8.622,5.504 9.451,6.313 9.451,7.310 C9.451,8.308 8.622,9.117 7.601,9.117 ZM7.601,4.058 C6.579,4.058 5.750,3.250 5.750,2.252 C5.750,1.254 6.579,0.445 7.601,0.445 C8.622,0.445 9.451,1.254 9.451,2.252 C9.451,3.250 8.622,4.058 7.601,4.058 ZM2.419,9.117 C1.397,9.117 0.569,8.308 0.569,7.310 C0.569,6.313 1.397,5.504 2.419,5.504 C3.441,5.504 4.270,6.313 4.270,7.310 C4.270,8.308 3.441,9.117 2.419,9.117 ZM2.419,4.058 C1.397,4.058 0.569,3.250 0.569,2.252 C0.569,1.254 1.397,0.445 2.419,0.445 C3.441,0.445 4.270,1.254 4.270,2.252 C4.270,3.250 3.441,4.058 2.419,4.058 Z",
        }),
      });
    },
    DownloadArrowIcon = (downloadArrowProps) => {
      let { className: downloadArrowClassName } = downloadArrowProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: downloadArrowClassName,
        viewBox: "0 0 28 29",
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M20.836,14.872 L20.836,0.013 L7.162,0.013 L7.162,7.976 L13.999,14.872 L-0.006,14.872 L13.999,28.999 L28.004,14.872 L20.836,14.872 Z",
        }),
      });
    },
    DownloadPlatformItem = (platformItemProps) => {
      let { type: platformType, className: platformItemClassName, url: platformUrl } = platformItemProps,
        { images: i18nImages } = (0, I18nProviderUseI18n.PO)(),
        { t: tPlatform } = (0, I18nProviderUseI18n.Bd)();
      return platformType
        ? (0, jsx.jsxs)("div", {
            className: classnamesDefault()(
              styles4().item,
              !platformUrl && styles4().disabled,
              platformItemClassName,
            ),
            onClick: () => {
              if (platformUrl)
                switch (platformType) {
                  case "downloadIOS":
                  case "downloadAndroid":
                    Tracking.A.download();
                    break;
                  default:
                    Tracking.A.download({
                      channel: platformType,
                      url: platformUrl,
                    });
                }
            },
            children: [
              "ps5" === platformType &&
                (0, jsx.jsx)("img", {
                  className: styles4().ps5,
                  src: PS5_ICON_IMG.src,
                  alt: "PS5",
                }),
              "epic" === platformType &&
                (0, jsx.jsx)("img", {
                  className: styles4().epic,
                  src: EPIC_ICON_IMG.src,
                  alt: "Epic",
                }),
              "appStore" === platformType &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().appStore,
                    src: i18nImages["shop.get.appStore"],
                    alt: "App Store",
                  }),
                }),
              "gpg" === platformType &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().gpg,
                    src: GPG_ICON_IMG.src,
                    alt: "GPG",
                  }),
                }),
              "googlePlay" === platformType &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().googlePlay,
                    src: i18nImages["shop.get.googlePlay"],
                    alt: "Google Play",
                  }),
                }),
              "galaxyStore" === platformType &&
                (0, jsx.jsx)(jsx.Fragment, {
                  children: (0, jsx.jsx)("img", {
                    className: styles4().galaxyStore,
                    src: i18nImages["shop.get.galaxyStore"],
                    alt: "Galaxy Store",
                  }),
                }),
              "windows" === platformType &&
                (0, jsx.jsx)("img", {
                  className: styles4().windows,
                  src: WINDOWS_ICON_IMG.src,
                  alt: "Windows",
                }),
              "android" === platformType &&
                (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("img", {
                      className: styles4().android,
                      src: ANDROID_ICON_IMG.src,
                      alt: "Android",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles4().text,
                      children: tPlatform("home.downloadAndroid"),
                    }),
                  ],
                }),
              "pc" === platformType &&
                (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("img", {
                      className: styles4().pc,
                      src: PC_ICON_IMG.src,
                      alt: "PC",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles4().text,
                      children: tPlatform("home.downloadPc"),
                    }),
                  ],
                }),
              "taptap" === platformType &&
                (0, jsx.jsx)("img", {
                  className: styles4().taptap,
                  src: TAPTAP_ICON_IMG.src,
                  alt: "TapTap",
                }),
              "taptapAndroid" === platformType &&
                (0, jsx.jsx)("img", {
                  className: styles4().taptap,
                  src: TAPTAP_H5_ICON_IMG.src,
                  alt: "TapTap",
                }),
              ("downloadIOS" === platformType || "downloadAndroid" === platformType) &&
                (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("img", {
                      className: styles4().download,
                      src: DOWNLOAD_ICON_IMG.src,
                      alt: "Download",
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles4().text,
                      children: tPlatform("home.downloadMobile"),
                    }),
                  ],
                }),
            ],
          })
        : (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles4().item, platformItemClassName, styles4().hidden),
          });
    };
  function DownloadPanel(downloadPanelProps) {
    let { className: downloadPanelClassName } = downloadPanelProps,
      { t: tDownload } = (0, I18nProviderUseI18n.Bd)(),
      {
        data: { shop: shopEntries },
      } = (0, I18nProviderUseI18n.PO)(),
      desktopShopEntries = (0, React.useMemo)(
        () =>
          shopEntries
            ? shopEntries.filter(
                (shopEntryToFilter) =>
                  (null == shopEntryToFilter ? void 0 : shopEntryToFilter.key) !== "downloadIOS" &&
                  (null == shopEntryToFilter ? void 0 : shopEntryToFilter.key) !== "downloadAndroid" &&
                  (null == shopEntryToFilter ? void 0 : shopEntryToFilter.key) !== "taptapAndroid",
              )
            : [],
        [shopEntries],
      ),
      shopEntryRows = (0, React.useMemo)(() => {
        if (!desktopShopEntries) return [];
        let rows = [];
        for (let rowIdx = 0; rowIdx < Math.ceil(desktopShopEntries.length / 2); rowIdx++)
          rows.push([
            desktopShopEntries[rowIdx],
            desktopShopEntries[rowIdx + Math.ceil(desktopShopEntries.length / 2)],
          ]);
        return rows;
      }, [desktopShopEntries]),
      mobileShopEntries = (0, React.useMemo)(() => {
        var userAgentRaw;
        if (!shopEntries) return [];
        let isIosDevice = (0, DeviceUtils.un)(
          null != (userAgentRaw = window.navigator.userAgent) ? userAgentRaw : "",
        );
        return shopEntries.filter(
          (mobileShopEntry) =>
            (!isIosDevice && (null == mobileShopEntry ? void 0 : mobileShopEntry.key) === "googlePlay") ||
            (isIosDevice && (null == mobileShopEntry ? void 0 : mobileShopEntry.key) === "appStore") ||
            (!isIosDevice && (null == mobileShopEntry ? void 0 : mobileShopEntry.key) === "galaxyStore"),
        );
      }, [shopEntries]),
      downloadOrientation = (0, useOrientation.M)();
    return (0, jsx.jsxs)("div", {
      className: classnamesDefault()(downloadPanelClassName, styles4().downloadContainer),
      children: [
        (0, jsx.jsx)(DotsDecoIcon, {
          className: styles4().decoRt,
        }),
        (0, jsx.jsx)("div", {
          className: styles4().iconContainer,
          children: (0, jsx.jsx)(DownloadArrowIcon, {
            className: styles4().icon,
          }),
        }),
        (0, jsx.jsx)("div", {
          className: styles4().downloadTitle,
          children: tDownload("home.download"),
        }),
        (0, jsx.jsx)("div", {
          className: styles4().contentContainer,
          children: (0, jsx.jsxs)(module44990.D, {
            children: [
              (0, jsx.jsx)("div", {
                className: styles4().qrcode,
              }),
              (0, jsx.jsxs)("div", {
                className: styles4().platforms,
                children: [
                  "landscape" === downloadOrientation &&
                    shopEntryRows.map((shopRow, shopRowIdx) =>
                      (0, jsx.jsx)(
                        "div",
                        {
                          className: styles4().row,
                          children: shopRow.map((shopRowEntry, shopRowEntryIdx) => {
                            var shopRowEntryKey;
                            return (0, jsx.jsx)(
                              DownloadPlatformItem,
                              {
                                type: null == shopRowEntry ? void 0 : shopRowEntry.key,
                                url: null == shopRowEntry ? void 0 : shopRowEntry.url,
                              },
                              null != (shopRowEntryKey = null == shopRowEntry ? void 0 : shopRowEntry.key)
                                ? shopRowEntryKey
                                : shopRowEntryIdx,
                            );
                          }),
                        },
                        shopRowIdx,
                      ),
                    ),
                  "portrait" === downloadOrientation &&
                    (0, jsx.jsx)("div", {
                      className: styles4().line,
                      children: mobileShopEntries.map((mobileEntry, mobileEntryIdx) => {
                        var mobileEntryKey;
                        return (0, jsx.jsx)(
                          DownloadPlatformItem,
                          {
                            type: null == mobileEntry ? void 0 : mobileEntry.key,
                            url: null == mobileEntry ? void 0 : mobileEntry.url,
                          },
                          null != (mobileEntryKey = null == mobileEntry ? void 0 : mobileEntry.key)
                            ? mobileEntryKey
                            : mobileEntryIdx,
                        );
                      }),
                    }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  }
  var TextRevealAnimations = webpackRequire(84245);
  let useRevealOnLoaded = (isPortraitReveal) => {
    let revealContainerRef = (0, React.useRef)(null),
      { loaded: isFirstLoadDone } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
    return (
      (0, React.useEffect)(() => {
        var revealContainerEl;
        null == (revealContainerEl = revealContainerRef.current) ||
          revealContainerEl.querySelectorAll("[data-animation-element]").forEach((animationEl) => {
            animationEl.style.opacity = "0";
          });
      }, []),
      (0, React.useEffect)(() => {
        if (!isFirstLoadDone || !revealContainerRef.current) return;
        let animationElements = Array.from(
          revealContainerRef.current.querySelectorAll("[data-animation-element]"),
        );
        (0, TextRevealAnimations.iI)(animationElements, animeJsDefault.A.timeline(), isPortraitReveal);
      }, [isPortraitReveal, isFirstLoadDone]),
      revealContainerRef
    );
  };
  var stylesModule5 = webpackRequire(56604),
    styles5 = webpackRequire.n(stylesModule5);
  function HomeOverlayPortraitFull() {
    let {
        data: { skland: sklandUrl },
      } = (0, I18nProviderUseI18n.PO)(),
      { t: tOverlayFull } = (0, I18nProviderUseI18n.Bd)(),
      overlayFullRef = useRevealOnLoaded(!0),
      openCloudGame = (0, React.useCallback)(() => {
        SiteConfig.a.cloud_game_link && window.open(SiteConfig.a.cloud_game_link, "_blank");
      }, []),
      openRechargeCenter = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          window.open(SiteConfig.a.payment_link, "_blank"),
          Tracking.A.collect("click", {
            target: "recharge_center",
          }));
      }, []),
      openSkland = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          sklandUrl && window.open(sklandUrl, "_blank"),
          Tracking.A.collect("click", {
            target: "official_community",
          }));
      }, [sklandUrl]),
      openAgeRatingNews = (0, React.useCallback)(() => {
        window.open("https://endfield.hypergryph.com/news/8568", "_blank");
      }, []);
    return (0, jsx.jsxs)("div", {
      className: styles5().container,
      ref: overlayFullRef,
      children: [
        (0, jsx.jsxs)("div", {
          className: styles5().rbContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles5().downloadWrapper,
              "data-animation-element": !0,
              children: (0, jsx.jsx)(DownloadPanel, {
                className: styles5().downloadContainer,
              }),
            }),
            (0, jsx.jsxs)("div", {
              className: styles5().extraContainer,
              "data-animation-element": !0,
              children: [
                (0, jsx.jsxs)("div", {
                  className: styles5().lineButton,
                  onClick: openCloudGame,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles5().cloudGameIcon,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles5().text,
                      children: tOverlayFull("home.cloudGame"),
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles5().line,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles5().button,
                      onClick: openRechargeCenter,
                      children: (0, jsx.jsx)(ChargeIcon, {
                        className: styles5().iconCharge,
                      }),
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles5().button,
                      onClick: openSkland,
                      children: (0, jsx.jsx)("div", {
                        className: styles5().iconSkland,
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles5().age,
          onClick: openAgeRatingNews,
          "data-animation-element": !0,
        }),
        (0, jsx.jsx)("div", {
          className: styles5().scrollTip,
        }),
      ],
    });
  }
  let RANK_VI_IMG = {
    src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/rank-vi.87efb3f8.png",
  };
  var stylesModule6 = webpackRequire(2878),
    styles6 = webpackRequire.n(stylesModule6);
  function HomeOverlayPortrait() {
    let { lang: overlayLang } = (0, I18nProviderUseI18n.PO)(),
      overlayPortraitRef = useRevealOnLoaded(!0),
      openRechargeCenterPortrait = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          window.open(SiteConfig.a.payment_link, "_blank"),
          Tracking.A.collect("click", {
            target: "recharge_center",
          }));
      }, []);
    return (0, jsx.jsxs)("div", {
      className: styles6().container,
      ref: overlayPortraitRef,
      children: [
        "vi-vn" === overlayLang &&
          (0, jsx.jsx)("img", {
            src: RANK_VI_IMG.src,
            className: styles6().rankImage,
            alt: "",
            "data-animation-element": !0,
          }),
        (0, jsx.jsxs)("div", {
          className: styles6().rbContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles6().downloadWrapper,
              "data-animation-element": !0,
              children: (0, jsx.jsx)(DownloadPanel, {
                className: styles6().downloadContainer,
              }),
            }),
            (0, jsx.jsx)("div", {
              className: styles6().extraContainer,
              "data-animation-element": !0,
              children: (0, jsx.jsx)("div", {
                className: styles6().button,
                onClick: openRechargeCenterPortrait,
                children: (0, jsx.jsx)(ChargeIcon, {
                  className: styles6().iconCharge,
                }),
              }),
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles6().scrollTip,
        }),
      ],
    });
  }
  var stylesModule7 = webpackRequire(94534),
    styles7 = webpackRequire.n(stylesModule7);
  function HomeOverlayLandscapeFull() {
    let { t: tOverlayLandscapeFull } = (0, I18nProviderUseI18n.Bd)(),
      {
        data: { skland: sklandUrlLandscape },
      } = (0, I18nProviderUseI18n.PO)(),
      overlayLandscapeFullRef = useRevealOnLoaded(!1),
      openCloudGameLandscape = (0, React.useCallback)(() => {
        SiteConfig.a.cloud_game_link && window.open(SiteConfig.a.cloud_game_link, "_blank");
      }, []),
      openRechargeCenterLandscape = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          window.open(SiteConfig.a.payment_link, "_blank"),
          Tracking.A.collect("click", {
            target: "recharge_center",
          }));
      }, []),
      openSklandLandscape = (0, React.useCallback)(() => {
        (SoundEffects.A.play(SoundEffects.d.common_click),
          sklandUrlLandscape && window.open(sklandUrlLandscape, "_blank"),
          Tracking.A.collect("click", {
            target: "official_community",
          }));
      }, [sklandUrlLandscape]),
      openAgeRatingNewsLandscape = (0, React.useCallback)(() => {
        window.open("https://endfield.hypergryph.com/news/8568", "_blank");
      }, []);
    return (0, jsx.jsxs)("div", {
      className: styles7().container,
      ref: overlayLandscapeFullRef,
      children: [
        SiteConfig.a.cloud_game_link &&
          (0, jsx.jsx)("div", {
            className: styles7().cloudGameButton,
            onClick: openCloudGameLandscape,
            "data-animation-element": !0,
          }),
        (0, jsx.jsxs)("div", {
          className: styles7().rbContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles7().downloadWrapper,
              "data-animation-element": !0,
              children: (0, jsx.jsx)(DownloadPanel, {
                className: styles7().downloadContainer,
              }),
            }),
            (0, jsx.jsxs)("div", {
              className: styles7().extraContainer,
              "data-animation-element": !0,
              children: [
                (0, jsx.jsxs)("div", {
                  className: styles7().button,
                  onClick: openRechargeCenterLandscape,
                  children: [
                    (0, jsx.jsx)(ChargeIcon, {
                      className: styles7().iconCharge,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles7().text,
                      children: tOverlayLandscapeFull("home.charge"),
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles7().button,
                  onClick: openSklandLandscape,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles7().iconSkland,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles7().text,
                      children: tOverlayLandscapeFull("home.skland"),
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles7().age,
          onClick: openAgeRatingNewsLandscape,
          "data-animation-element": !0,
        }),
      ],
    });
  }
  var stylesModule8 = webpackRequire(49876),
    styles8 = webpackRequire.n(stylesModule8);
  function HomeOverlayLandscape() {
    let { lang: overlayLandscapeLang } = (0, I18nProviderUseI18n.PO)(),
      overlayLandscapeRef = useRevealOnLoaded(!1);
    return (0, jsx.jsxs)("div", {
      className: styles8().container,
      ref: overlayLandscapeRef,
      children: [
        "vi-vn" === overlayLandscapeLang &&
          (0, jsx.jsx)("img", {
            src: RANK_VI_IMG.src,
            className: styles8().rankImage,
            alt: "",
            "data-animation-element": !0,
          }),
        (0, jsx.jsx)("div", {
          className: styles8().rbContainer,
          children: (0, jsx.jsx)("div", {
            className: styles8().downloadWrapper,
            "data-animation-element": !0,
            children: (0, jsx.jsx)(DownloadPanel, {
              className: styles8().downloadContainer,
            }),
          }),
        }),
      ],
    });
  }
  var module17224 = webpackRequire(17224),
    stylesModule9 = webpackRequire(83768),
    styles9 = webpackRequire.n(stylesModule9),
    OperatorSection = webpackRequire(3492),
    SectionTitle = webpackRequire(73560);
  let LoreEmblemIcon = (loreEmblemProps) =>
    (0, jsx.jsx)("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      xmlnsXlink: "http://www.w3.org/1999/xlink",
      viewBox: "0 0 84 85",
      ...loreEmblemProps,
      children: (0, jsx.jsx)("path", {
        fillRule: "evenodd",
        fill: "rgb(255, 255, 255)",
        d: "M78.500,67.968 L62.482,0.714 L55.861,0.714 L64.071,67.968 L56.075,67.968 L56.075,62.382 L58.638,62.382 L58.638,48.873 L52.336,48.873 L43.793,0.714 L43.144,0.714 L40.590,0.714 L39.940,0.714 L31.396,48.873 L25.095,48.873 L25.095,62.382 L27.658,62.382 L27.658,67.968 L19.662,67.968 L27.872,0.714 L21.251,0.714 L5.231,67.968 L-0.001,67.968 L-0.001,84.942 L40.590,84.942 L43.144,84.942 L83.734,84.942 L83.734,67.968 L78.500,67.968 ZM26.638,79.355 L20.729,79.355 L20.729,73.485 L26.638,73.485 L26.638,79.355 ZM63.376,79.355 L57.467,79.355 L57.467,73.485 L63.376,73.485 L63.376,79.355 Z",
      }),
    });
  var stylesModule10 = webpackRequire(60687),
    styles10 = webpackRequire.n(stylesModule10);
  let LoreNavDecoIcon = (loreNavDecoProps) => {
      let { className: loreNavDecoClassName } = loreNavDecoProps;
      return (0, jsx.jsx)("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        className: loreNavDecoClassName,
        viewBox: "0 0 176 18",
        children: (0, jsx.jsx)("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M169.872,12.870 L169.872,9.817 L175.813,9.817 L175.813,12.870 L169.872,12.870 ZM169.872,3.709 L175.813,3.709 L175.813,6.762 L169.872,6.762 L169.872,3.709 ZM163.927,9.817 L166.899,9.817 L166.899,12.870 L163.927,12.870 L163.927,9.817 ZM157.986,3.709 L163.927,3.709 L163.927,6.762 L157.986,6.762 L157.986,3.709 ZM113.415,9.817 L155.013,9.817 L155.013,12.870 L113.415,12.870 L113.415,9.817 ZM128.273,3.709 L155.013,3.709 L155.013,6.762 L128.273,6.762 L128.273,3.709 ZM113.415,3.709 L125.301,3.709 L125.301,6.762 L113.415,6.762 L113.415,3.709 ZM104.502,12.870 L104.502,9.817 L107.474,9.817 L110.447,9.817 L110.447,12.870 L107.474,12.870 L104.502,12.870 ZM107.474,3.709 L110.447,3.709 L110.447,6.762 L107.474,6.762 L107.474,3.709 ZM98.561,9.817 L101.529,9.817 L101.529,12.870 L98.561,12.870 L98.561,9.817 ZM92.616,9.817 L95.589,9.817 L95.589,12.870 L92.616,12.870 L92.616,9.817 ZM83.703,9.817 L89.648,9.817 L89.648,12.870 L83.703,12.870 L83.703,9.817 ZM83.703,3.709 L89.648,3.709 L89.648,6.762 L83.703,6.762 L83.703,3.709 ZM77.762,9.817 L80.730,9.817 L80.730,12.870 L77.762,12.870 L77.762,9.817 ZM71.817,3.709 L77.762,3.709 L77.762,6.762 L71.817,6.762 L71.817,3.709 ZM27.250,9.817 L68.849,9.817 L68.849,12.870 L27.250,12.870 L27.250,9.817 ZM42.105,3.709 L68.849,3.709 L68.849,6.762 L42.105,6.762 L42.105,3.709 ZM27.250,3.709 L39.136,3.709 L39.136,6.762 L27.250,6.762 L27.250,3.709 ZM10.455,0.298 L20.492,0.298 L15.473,8.975 L10.455,0.298 ZM0.347,0.298 L10.384,0.298 L5.365,8.975 L0.347,0.298 ZM10.455,17.700 L5.436,9.024 L15.473,9.024 L10.455,17.700 Z",
        }),
      });
    },
    TypewriterText = (typewriterProps) => {
      let { text: typewriterText, fps: typewriterFps = 30, speed: typewriterSpeed = 1 } = typewriterProps,
        typewriterRef = (0, React.useRef)(null);
      return (
        (0, React.useEffect)(() => {
          let typewriterFrameId;
          if (!typewriterRef.current) return;
          let typewriterEl = typewriterRef.current,
            charSpans = typewriterText.split("").map((charText) => {
              let charSpan = document.createElement("span");
              return ((charSpan.textContent = charText), (charSpan.style.opacity = "0"), charSpan);
            });
          ((typewriterEl.innerHTML = ""), typewriterEl.append(...charSpans));
          let revealedCount = 0,
            frameInterval = 1e3 / typewriterFps,
            lastFrameTime = performance.now();
          return (
            (typewriterFrameId = requestAnimationFrame(function typewriterTick() {
              let tickNow = performance.now();
              if (
                tickNow - lastFrameTime >= frameInterval &&
                ((lastFrameTime = tickNow), revealedCount < charSpans.length)
              ) {
                for (
                  let revealStep = 0;
                  revealStep < typewriterSpeed && !(revealedCount + revealStep >= charSpans.length);
                  revealStep++
                )
                  charSpans[revealedCount + revealStep].style.opacity = "1";
                revealedCount += typewriterSpeed;
              }
              revealedCount < charSpans.length && (typewriterFrameId = requestAnimationFrame(typewriterTick));
            })),
            () => {
              cancelAnimationFrame(typewriterFrameId);
            }
          );
        }, [typewriterText, typewriterFps]),
        (0, jsx.jsx)("span", {
          className: styles10().typewriter,
          ref: typewriterRef,
        })
      );
    };
  var swiper5 = webpackRequire(41409),
    dayjs = webpackRequire(53079),
    dayjsDefault = webpackRequire.n(dayjs),
    swiper6 = webpackRequire(25477),
    swiperDefault2 = webpackRequire.n(swiper6),
    animeJs321 = webpackRequire(14e3),
    animeJs321Default = webpackRequire.n(animeJs321),
    swiper7 = webpackRequire(74517);
  webpackRequire(60658);
  var VideoListContextProvider = webpackRequire(3787);
  let BLURRED_LOGO_IMG = {
    src: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/blurred_logo.eccbe4f3.png",
  };
  var stylesModule11 = webpackRequire(95308),
    styles11 = webpackRequire.n(stylesModule11);
  function remToPx(remValue) {
    if ("undefined" == typeof document) return 16 * remValue;
    let rootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
    return remValue * (Number.isFinite(rootFontSize) ? rootFontSize : 16);
  }
  let InfoVideoTitle = (videoTitleProps) => {
    let { title: videoTitle, textIndent: videoTitleIndent } = videoTitleProps,
      [isPortraitTitle, setPortraitTitle] = (0, React.useState)(!1),
      [fittedFontSize, setFittedFontSize] = (0, React.useState)(null),
      [fontSizeBounds, setFontSizeBounds] = (0, React.useState)(() => ({
        max: Math.round(remToPx(3)),
        min: Math.max(8, Math.round(remToPx(0.5))),
      }));
    return (
      (0, React.useLayoutEffect)(() => {
        let portraitMediaQuery = window.matchMedia("(orientation: portrait)"),
          updatePortraitTitle = () => {
            let matchesPortrait = portraitMediaQuery.matches;
            (setPortraitTitle(matchesPortrait),
              matchesPortrait &&
                setFontSizeBounds({
                  max: Math.round(remToPx(3)),
                  min: Math.max(8, Math.round(remToPx(0.5))),
                }));
          };
        return (
          updatePortraitTitle(),
          portraitMediaQuery.addEventListener("change", updatePortraitTitle),
          window.addEventListener("resize", updatePortraitTitle),
          () => {
            (portraitMediaQuery.removeEventListener("change", updatePortraitTitle),
              window.removeEventListener("resize", updatePortraitTitle));
          }
        );
      }, []),
      (0, React.useEffect)(() => {
        setFittedFontSize(null);
      }, [videoTitle]),
      (0, jsx.jsx)(framerMotion.P.div, {
        className: styles11().title,
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
          ease: "easeInOut",
        },
        style: {
          textIndent: videoTitleIndent,
        },
        children: (0, jsx.jsx)("div", {
          className: styles11().titleInner,
          children: videoTitle.trim()
            ? isPortraitTitle
              ? (0, jsx.jsxs)(jsx.Fragment, {
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles11().titleFitProbe,
                      "aria-hidden": !0,
                      children: (0, jsx.jsx)(swiper5.zb, {
                        className: styles11().titleFitProbeInner,
                        mode: "multi",
                        max: fontSizeBounds.max,
                        min: fontSizeBounds.min,
                        onReady: (readyFontSize) => {
                          setFittedFontSize(readyFontSize);
                        },
                        children: videoTitle,
                      }),
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles11().titleTextVisible,
                      style:
                        null != fittedFontSize
                          ? {
                              fontSize: "".concat(fittedFontSize, "px"),
                            }
                          : void 0,
                      children: videoTitle,
                    }),
                  ],
                })
              : (0, jsx.jsx)("div", {
                  className: styles11().titleTextLandscape,
                  children: videoTitle,
                })
            : null,
        }),
      })
    );
  };
  var framerMotionUseScrollScrollTimeline = webpackRequire(60891),
    framerMotion2 = webpackRequire(20944),
    SvgIcon92418 = webpackRequire(92418),
    SvgIcon91251 = webpackRequire(91251),
    SvgIcon92182 = webpackRequire(92182),
    framerMotion3 = webpackRequire(29671),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    SvgIcon15889 = webpackRequire(15889),
    VideoPlayers = webpackRequire(73992),
    Pagination = webpackRequire(2682),
    stylesModule12 = webpackRequire(51067),
    styles12 = webpackRequire.n(stylesModule12);
  let wrapIndex = (rawIndex, modulo) => ((rawIndex % modulo) + modulo) % modulo,
    playLayeredReveal = async (revealRoot, revealDirection, revealDuration, revealStagger) => {
      let bottomLayer = revealRoot.querySelector(".".concat(styles12().bottom)),
        middleLayer = revealRoot.querySelector(".".concat(styles12().middle)),
        topLayer = revealRoot.querySelector(".".concat(styles12().top)),
        revealTimeline = animeJsDefault.A.timeline();
      return (
        revealTimeline.add((0, TextRevealAnimations.WO)(bottomLayer, revealDirection, !0, revealDuration), 0),
        revealTimeline.add(
          (0, TextRevealAnimations.WO)(middleLayer, revealDirection, !0, revealDuration),
          revealStagger,
        ),
        revealTimeline.add(
          (0, TextRevealAnimations.WO)(topLayer, revealDirection, !0, revealDuration),
          2 * revealStagger,
        ),
        revealTimeline.finished
      );
    },
    AlbumMedia = (albumMediaProps) => {
      let { src: mediaSrc, direction: mediaDirection, type: mediaType } = albumMediaProps,
        mediaWrapperRef = (0, React.useRef)(null),
        [isPresent, safeToRemove] = (0, framerMotion3.xQ)(),
        initialDirection = (0, React.useMemo)(() => mediaDirection, []);
      (0, React.useEffect)(() => {
        isPresent
          ? playLayeredReveal(mediaWrapperRef.current, initialDirection, 400, 250)
          : setTimeout(() => {
              safeToRemove();
            }, 1e3);
      }, [isPresent]);
      let isMediaInView = (0, framerMotionUseInView.W)(mediaWrapperRef),
        mediaVideoRef = (0, React.useRef)(null);
      return (
        (0, React.useEffect)(() => {
          var videoToPlay, videoToPause;
          isMediaInView
            ? null == (videoToPlay = mediaVideoRef.current) || videoToPlay.play()
            : null == (videoToPause = mediaVideoRef.current) || videoToPause.pause();
        }, [isMediaInView]),
        (0, jsx.jsxs)("div", {
          className: styles12().wrapper,
          ref: mediaWrapperRef,
          children: [
            (0, jsx.jsx)("div", {
              className: styles12().bottom,
            }),
            "image" === mediaType &&
              (0, jsx.jsx)("img", {
                className: styles12().middle,
                src: mediaSrc,
              }),
            "image" === mediaType &&
              (0, jsx.jsx)("img", {
                className: styles12().top,
                src: mediaSrc,
              }),
            "video" === mediaType &&
              (0, jsx.jsx)("div", {
                className: styles12().middle,
              }),
            "video" === mediaType &&
              (0, jsx.jsx)(VideoPlayers.Q, {
                ref: mediaVideoRef,
                classNames: styles12().top,
                autoplay: isMediaInView,
                src: mediaSrc,
              }),
          ],
        })
      );
    },
    GameplayAlbum = (albumProps) => {
      var currentImageSrc;
      let {
        className: albumClassName,
        style: albumStyle,
        items: albumItems,
        inView: isAlbumInView,
        type: albumType,
        loadingEable: waitForLoading = !0,
      } = albumProps;
      (0, React.useRef)(!1);
      let [unusedAlbumFlag, setUnusedAlbumFlag] = (0, React.useState)(!1),
        [albumIndex, setAlbumIndex] = (0, React.useState)(0);
      (0, React.useRef)(null);
      let currentAlbumItem = (0, React.useMemo)(() => albumItems[albumIndex], [albumIndex, albumItems]),
        [slideDirection, setSlideDirection] = (0, React.useState)("right"),
        goPrevAlbum = (0, React.useCallback)(async () => {
          isAlbumSlidingRef.current ||
            ((isAlbumSlidingRef.current = !0),
            setAlbumIndex(wrapIndex(albumIndex - 1, albumItems.length)),
            setSlideDirection("left"),
            setTimeout(() => {
              isAlbumSlidingRef.current = !1;
            }, 900));
        }, [albumIndex, albumItems.length, setAlbumIndex]),
        isAlbumSlidingRef = (0, React.useRef)(!1),
        goNextAlbum = (0, React.useCallback)(async () => {
          isAlbumSlidingRef.current ||
            ((isAlbumSlidingRef.current = !0),
            setAlbumIndex(wrapIndex(albumIndex + 1, albumItems.length)),
            setSlideDirection("right"),
            setTimeout(() => {
              isAlbumSlidingRef.current = !1;
            }, 900));
        }, [albumIndex, albumItems.length, setAlbumIndex]),
        noopDecoClick = (0, React.useCallback)(async () => {}, []),
        viewedAlbumKeysRef = (0, React.useRef)({});
      (0, React.useEffect)(() => {
        isAlbumInView &&
          (null == currentAlbumItem ? void 0 : currentAlbumItem.key) &&
          !viewedAlbumKeysRef.current[currentAlbumItem.key] &&
          ((viewedAlbumKeysRef.current[currentAlbumItem.key] = !0),
          Tracking.A.collect("content_view", {
            group: TrackingGroupsEnum.Z[albumType],
            target: currentAlbumItem.key,
          }));
      }, [isAlbumInView, currentAlbumItem]);
      let albumRef = (0, React.useRef)(null),
        { loaded: isLoadedForAlbum } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
      (0, useRunOnceHook.p)(() => {
        if (albumRef.current) {
          let albumElForHide = albumRef.current;
          [
            albumElForHide.querySelector(".".concat(styles12().detail, " .").concat(styles12().index)),
            albumElForHide.querySelector(".".concat(styles12().detail, " .").concat(styles12().title)),
            albumElForHide.querySelector(".".concat(styles12().detail, " .").concat(styles12().description)),
          ].forEach((detailElToHide) => {
            detailElToHide && (detailElToHide.style.opacity = "0");
          });
        }
      });
      let albumOrientation = (0, useOrientation.M)();
      return (
        (0, React.useEffect)(() => {
          if ((!waitForLoading || isLoadedForAlbum) && isAlbumInView) {
            let albumEl = albumRef.current,
              albumAnimTimeline = animeJsDefault.A.timeline();
            ("portrait" === albumOrientation &&
              albumAnimTimeline.add({
                targets: {},
                duration: 400,
              }),
              albumAnimTimeline.add(
                (0, TextRevealAnimations.WO)(
                  albumEl.querySelector(".".concat(styles12().imageContainer)),
                  "portrait" === albumOrientation || "aic" === albumType ? "right" : "left",
                  !0,
                  600,
                ),
              ));
            let albumRevealElements = [
              albumEl.querySelector(".".concat(styles12().pagination)),
              albumEl.querySelector(".".concat(styles12().detail, " .").concat(styles12().index)),
              albumEl.querySelector(".".concat(styles12().detail, " .").concat(styles12().title)),
              albumEl.querySelector(".".concat(styles12().detail, " .").concat(styles12().description)),
              albumEl.querySelector(".".concat(styles12().paginationH5)),
            ];
            (0, TextRevealAnimations.iI)(albumRevealElements, albumAnimTimeline);
          }
        }, [isLoadedForAlbum, isAlbumInView, waitForLoading]),
        (0, jsx.jsxs)("div", {
          className: classnamesDefault()(styles12().gameplayAlbum, styles12()[albumType], albumClassName),
          style: albumStyle,
          ref: albumRef,
          children: [
            (0, jsx.jsx)("svg", {
              style: {
                display: "none",
              },
              children: (0, jsx.jsx)("filter", {
                id: "red-green",
                children: (0, jsx.jsx)("feColorMatrix", {
                  type: "matrix",
                  values: "1 0 0 0 0 0 0.95 0 0 0  0 0 0 0 0  0 0 0 1 0",
                }),
              }),
            }),
            (0, jsx.jsx)("div", {
              className: styles12().H5DecoLine,
              children: (0, jsx.jsxs)("div", {
                className: styles12().line,
                children: [
                  (0, jsx.jsx)("div", {
                    className: styles12().title,
                    children: albumType,
                  }),
                  (0, jsx.jsx)(SvgIcon15889.A, {
                    className: styles12().deco,
                  }),
                ],
              }),
            }),
            (0, jsx.jsxs)("div", {
              className: styles12().imageContainer,
              children: [
                (0, jsx.jsx)("div", {
                  className: styles12().image,
                  children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                    children: (0, jsx.jsx)(
                      AlbumMedia,
                      {
                        direction: slideDirection,
                        type: "aic" === albumType ? "image" : "video",
                        src:
                          null !=
                          (currentImageSrc = null == currentAlbumItem ? void 0 : currentAlbumItem.image)
                            ? currentImageSrc
                            : "",
                      },
                      albumIndex,
                    ),
                  }),
                }),
                (0, jsx.jsx)(
                  "div",
                  {
                    className: styles12().rightDeco,
                    onClick: noopDecoClick,
                    children: (0, jsx.jsxs)("div", {
                      className: styles12().line,
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles12().title,
                          children: albumType,
                        }),
                        (0, jsx.jsx)(SvgIcon15889.A, {
                          className: styles12().deco,
                        }),
                      ],
                    }),
                  },
                  "deco",
                ),
              ],
            }),
            (0, jsx.jsx)(Pagination.Ay, {
              className: styles12().pagination,
              type: "dark",
              next: goNextAlbum,
              prev: goPrevAlbum,
            }),
            (0, jsx.jsx)(Pagination.Ay, {
              className: styles12().paginationH5,
              pagination: "number",
              current: albumIndex,
              total: albumItems.length,
              next: goNextAlbum,
              prev: goPrevAlbum,
            }),
            (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
              mode: "wait",
              children: (0, jsx.jsxs)(
                framerMotion.P.div,
                {
                  className: styles12().detail,
                  initial: {
                    opacity: 0,
                    x: "-2rem",
                  },
                  animate: {
                    opacity: 1,
                    x: 0,
                    transition: {
                      duration: 0.5,
                      ease: "easeOut",
                    },
                  },
                  exit: {
                    opacity: 0,
                    x: "2rem",
                    transition: {
                      duration: 0.5,
                      ease: "easeIn",
                    },
                  },
                  children: [
                    (0, jsx.jsxs)("div", {
                      className: styles12().index,
                      children: [albumIndex + 1, " / ", albumItems.length],
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles12().title,
                      children: null == currentAlbumItem ? void 0 : currentAlbumItem.title,
                    }),
                    (0, jsx.jsx)(nextJsRuntimeDefault(), {
                      className: styles12().descriptionContainer,
                      direction: "y",
                      children: (0, jsx.jsx)("div", {
                        className: styles12().description,
                        children: null == currentAlbumItem ? void 0 : currentAlbumItem.description,
                      }),
                    }),
                  ],
                },
                albumIndex,
              ),
            }),
          ],
        })
      );
    };
  var GameplayItemsText = webpackRequire(26915),
    stylesModule13 = webpackRequire(43837),
    styles13 = webpackRequire.n(stylesModule13);
  let GameplayMarquee = () => {
    let documentElRef = (0, React.useRef)(window.document.documentElement),
      { scrollYProgress: scrollYProgress } = (0, framerMotionUseScrollScrollTimeline.L)({
        container: documentElRef,
      }),
      marqueeTranslateA = (0, framerMotion2.G)(scrollYProgress, (progressA) =>
        "".concat(-(300 * progressA) % 120, "%"),
      ),
      marqueeTranslateB = (0, framerMotion2.G)(scrollYProgress, (progressB) =>
        "".concat(120 - ((300 * progressB) % 120), "%"),
      );
    return "landscape" === (0, useOrientation.M)()
      ? (0, jsx.jsxs)(framerMotion.P.div, {
          className: styles13().endfieldPre,
          children: [
            (0, jsx.jsx)(framerMotion.P.div, {
              className: styles13().icon,
              style: {
                translateX: marqueeTranslateA,
              },
              children: (0, jsx.jsx)(SvgIcon91251.A, {
                className: styles13().ef,
              }),
            }),
            (0, jsx.jsx)(framerMotion.P.div, {
              className: styles13().icon,
              style: {
                translateX: marqueeTranslateB,
              },
              children: (0, jsx.jsx)(SvgIcon91251.A, {
                className: styles13().ef,
              }),
            }),
          ],
        })
      : (0, jsx.jsx)(SvgIcon91251.A, {
          className: styles13().h5Icon,
        });
  };
  var swiper8 = webpackRequire(80187),
    stylesModule14 = webpackRequire(98220),
    styles14 = webpackRequire.n(stylesModule14);
  let CAROUSEL_SLOT_OFFSET_PX = 36 - 880 * 0.18200000000000005,
    carouselItemTransform = (slotIndex, activeSlot) => {
      let slotDelta = slotIndex - activeSlot,
        slotOffsetPx =
          CAROUSEL_SLOT_OFFSET_PX * (slotIndex - activeSlot) +
          (slotIndex > activeSlot
            ? (880 * 0.18200000000000005) / 2
            : slotIndex < activeSlot
              ? -80.08000000000003
              : 0);
      return slotOffsetPx > 0
        ? "translateX(calc(".concat(100 * slotDelta, "% + ").concat(slotOffsetPx / 16, "rem))")
        : slotOffsetPx < 0
          ? "translateX(calc(".concat(100 * slotDelta, "% - ").concat(-slotOffsetPx / 16, "rem))")
          : "translateX(".concat(100 * slotDelta, "%)");
    },
    NoticeCarousel = (carouselProps) => {
      let {
          className: carouselClassName,
          containerClassName: carouselContainerClassName,
          style: carouselStyle,
          items: carouselItems,
          renderer: renderCarouselItem,
          paginationRenderer: renderCarouselPagination,
          loop: isLoop = !0,
          autoPlay: isAutoPlay = !0,
          interval: autoPlayInterval = 4e3,
        } = carouselProps,
        [carouselIndex, setCarouselIndex] = (0, React.useState)(0),
        isCarouselMovingRef = (0, React.useRef)(!1),
        carouselIndexRef = (0, React.useRef)(0),
        normalizeIndex = (0, React.useCallback)(
          (indexToNormalize) =>
            ((indexToNormalize % carouselItems.length) + carouselItems.length) % carouselItems.length,
          [carouselItems],
        ),
        jumpToIndex = (0, React.useCallback)(
          (jumpTarget) => {
            ((carouselIndexRef.current = isLoop ? jumpTarget : normalizeIndex(jumpTarget)),
              setCarouselIndex(carouselIndexRef.current));
          },
          [isLoop, normalizeIndex],
        ),
        carouselNext = (0, React.useCallback)(() => {
          isCarouselMovingRef.current ||
            ((isCarouselMovingRef.current = !0),
            jumpToIndex(carouselIndexRef.current + 1),
            setTimeout(() => (isCarouselMovingRef.current = !1), 500));
        }, [jumpToIndex]),
        carouselPrev = (0, React.useCallback)(() => {
          isCarouselMovingRef.current ||
            ((isCarouselMovingRef.current = !0),
            jumpToIndex(carouselIndexRef.current - 1),
            setTimeout(() => (isCarouselMovingRef.current = !1), 500));
        }, [jumpToIndex]);
      (0, React.useEffect)(() => {
        if (!isAutoPlay) return;
        let autoPlayTimer = null,
          scheduleAutoPlay = () => {
            autoPlayTimer = window.setTimeout(() => {
              (carouselNext(),
                null !== autoPlayTimer && window.clearTimeout(autoPlayTimer),
                scheduleAutoPlay());
            }, autoPlayInterval);
          };
        return (
          scheduleAutoPlay(),
          () => {
            null !== autoPlayTimer && window.clearTimeout(autoPlayTimer);
          }
        );
      }, [isAutoPlay, autoPlayInterval, carouselIndex]);
      let visibleSlots = (0, React.useMemo)(() => {
          let slotRangeStart = carouselIndex - 1,
            slotRangeEnd = carouselIndex + 2,
            slots = [];
          for (
            let slot = isLoop
              ? slotRangeStart - 2
              : (0, swiper8.A)(slotRangeStart - 2, 0, carouselItems.length - 1);
            slot <=
            (isLoop ? slotRangeEnd + 2 : (0, swiper8.A)(slotRangeEnd + 2, 0, carouselItems.length - 1));
            slot++
          )
            slots.push(slot);
          return slots;
        }, [carouselIndex, carouselItems, isLoop]),
        jumpToNormalized = (0, React.useCallback)(
          (normalizedTarget) => {
            jumpToIndex(
              Math.floor(carouselIndexRef.current / carouselItems.length) * carouselItems.length +
                normalizedTarget,
            );
          },
          [jumpToIndex],
        );
      return (0, jsx.jsxs)("div", {
        className: classnamesDefault()(styles14().carousel, carouselClassName),
        style: carouselStyle,
        children: [
          (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles14().container, carouselContainerClassName),
            children: visibleSlots.map((visibleSlot) =>
              (0, jsx.jsx)(
                "div",
                {
                  className: classnamesDefault()(styles14().item),
                  style: {
                    transform: carouselItemTransform(visibleSlot, carouselIndex),
                  },
                  children: renderCarouselItem({
                    index: visibleSlot,
                    item: carouselItems[normalizeIndex(visibleSlot)],
                    active: visibleSlot === carouselIndex,
                    jumpTo: jumpToIndex,
                  }),
                },
                visibleSlot,
              ),
            ),
          }),
          (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles14().arrow, styles14().left),
            onClick: carouselPrev,
          }),
          (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles14().arrow, styles14().right),
            onClick: carouselNext,
          }),
          renderCarouselPagination &&
            renderCarouselPagination({
              items: carouselItems,
              disablePrev: !isLoop && 0 === carouselIndex,
              disableNext: !isLoop && carouselIndex === carouselItems.length - 1,
              currentIndex: normalizeIndex(carouselIndex),
              jumpTo: jumpToNormalized,
            }),
        ],
      });
    };
  var BulletinListContextProvider = webpackRequire(30257),
    stylesModule15 = webpackRequire(13920),
    styles15 = webpackRequire.n(stylesModule15);
  let NoticeCarouselItem = (noticeItemProps) => {
      let {
          index: noticeIndex,
          item: noticeItem,
          active: isNoticeActive,
          jumpTo: jumpToNotice,
        } = noticeItemProps,
        { lang: noticeLang, images: noticeImages } = (0, I18nProviderUseI18n.PO)();
      return (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles15().noticeItem, isNoticeActive && styles15().active),
        onClick: () => {
          (SoundEffects.A.play(SoundEffects.d.common_click),
            isNoticeActive
              ? window.open("/".concat(noticeLang, "/news/").concat(noticeItem.cid), "_blank")
              : jumpToNotice(noticeIndex));
        },
        children: (0, jsx.jsx)("div", {
          className: styles15().image,
          style: {
            backgroundImage: (null == noticeItem ? void 0 : noticeItem.cover)
              ? "url(".concat(null == noticeItem ? void 0 : noticeItem.cover, ")")
              : "url(".concat(
                  noticeImages["bulletin.".concat(null == noticeItem ? void 0 : noticeItem.tab)],
                  ")",
                ),
          },
        }),
      });
    },
    NoticePagination = (noticePaginationProps) => {
      let {
          items: noticeItems,
          currentIndex: noticeCurrentIndex,
          disablePrev: noticeDisablePrev,
          disableNext: noticeDisableNext,
          jumpTo: noticeJumpTo,
          handleList: handleNoticeList,
        } = noticePaginationProps,
        { t: tNoticePagination } = (0, I18nProviderUseI18n.Bd)(),
        noticePrev = (0, React.useCallback)(() => {
          noticeDisablePrev || noticeJumpTo(noticeCurrentIndex - 1);
        }, [noticeCurrentIndex, noticeDisablePrev, noticeJumpTo]),
        noticeNext = (0, React.useCallback)(() => {
          noticeDisableNext || noticeJumpTo(noticeCurrentIndex + 1);
        }, [noticeCurrentIndex, noticeDisableNext, noticeJumpTo]);
      return (0, jsx.jsxs)(jsx.Fragment, {
        children: [
          (0, jsx.jsx)(Pagination.Ay, {
            disablePrev: noticeDisablePrev,
            disableNext: noticeDisableNext,
            prev: noticePrev,
            next: noticeNext,
            className: styles15().carouselPagination,
          }),
          (0, jsx.jsx)(module70246.A, {
            className: styles15().detailButton,
            onClick: handleNoticeList,
            children: (0, jsx.jsx)("span", {
              className: styles15().text,
              children: tNoticePagination("notice.detail"),
            }),
          }),
        ],
      });
    },
    NoticeTitle = (noticeTitleProps) => {
      var noticeTitleCid;
      let { item: noticeTitleItem } = noticeTitleProps,
        { t: tNoticeTitle } = (0, I18nProviderUseI18n.Bd)();
      return (0, jsx.jsx)("div", {
        className: styles15().titleContainer,
        children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
          mode: "wait",
          children: (0, jsx.jsxs)(
            React.Fragment,
            {
              children: [
                (0, jsx.jsxs)(framerMotion.P.div, {
                  className: styles15().subtitle,
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
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                  children: [
                    (0, jsx.jsxs)("span", {
                      children: [
                        "//",
                        " ",
                        tNoticeTitle(
                          "notice.tab.".concat(null == noticeTitleItem ? void 0 : noticeTitleItem.tab),
                        ),
                      ],
                    }),
                    (0, jsx.jsx)("span", {
                      className: styles15().time,
                      children: dayjsDefault()(
                        (null == noticeTitleItem ? void 0 : noticeTitleItem.displayTime) * 1e3,
                      ).format(tNoticeTitle("information.displayTimeFormat")),
                    }),
                  ],
                }),
                (0, jsx.jsx)(framerMotion.P.div, {
                  className: styles15().title,
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
                    duration: 0.2,
                    ease: "easeInOut",
                  },
                  children: null == noticeTitleItem ? void 0 : noticeTitleItem.title,
                }),
              ],
            },
            "".concat(
              null != (noticeTitleCid = null == noticeTitleItem ? void 0 : noticeTitleItem.cid)
                ? noticeTitleCid
                : "none",
            ),
          ),
        }),
      });
    },
    NOTICE_DECO_MOTION = {
      initial: {
        y: "30%",
        opacity: 0,
      },
      animate: {
        y: 0,
        opacity: 1,
      },
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    };
  var AicItemsText = webpackRequire(89622),
    stylesModule16 = webpackRequire(1287),
    styles16 = webpackRequire.n(stylesModule16),
    stylesModule17 = webpackRequire(36563),
    styles17 = webpackRequire.n(stylesModule17),
    stylesModule18 = webpackRequire(87346),
    styles18 = webpackRequire.n(stylesModule18);
  vhCheckDefault()({
    force: !0,
  });
  let HOME_SECTIONS = [
      {
        key: "home",
        component: () => {
          let homeSectionRef = (0, React.useRef)(null),
            isHomeInView = (0, framerMotionUseInView.W)(homeSectionRef),
            hasTrackedHomeRef = (0, React.useRef)(!1),
            homeOrientation = (0, useOrientation.M)();
          return (
            (0, React.useEffect)(() => {
              isHomeInView &&
                !hasTrackedHomeRef.current &&
                ((hasTrackedHomeRef.current = !0),
                Tracking.A.collect("content_view", {
                  group: TrackingGroupsEnum.Z.home,
                }));
            }, [isHomeInView]),
            (0, React.useEffect)(() => {
              if (SiteUtils.isServer) return;
              let lastViewport = {
                  w: 0,
                  h: 0,
                },
                syncHomeHeight = () => {
                  let viewportWidth = window.innerWidth,
                    viewportHeight = window.innerHeight,
                    viewportChanged = viewportWidth !== lastViewport.w && viewportHeight !== lastViewport.h,
                    isLandscapeViewport = viewportWidth >= viewportHeight,
                    homeSectionEl = homeSectionRef.current;
                  (homeSectionEl &&
                    (isLandscapeViewport
                      ? viewportChanged && (homeSectionEl.style.height = "".concat(viewportHeight, "px"))
                      : homeSectionEl.style.removeProperty("height")),
                    (lastViewport.w = viewportWidth),
                    (lastViewport.h = viewportHeight));
                };
              syncHomeHeight();
              let homeHeightInterval = window.setInterval(syncHomeHeight, 500);
              return (
                window.addEventListener("resize", syncHomeHeight),
                () => {
                  (window.clearInterval(homeHeightInterval),
                    window.removeEventListener("resize", syncHomeHeight));
                }
              );
            }, []),
            (0, jsx.jsxs)("div", {
              className: styles9().sectionContainer,
              ref: homeSectionRef,
              children: [
                (0, jsx.jsx)(module17224.A, {}),
                (0, jsx.jsx)("portrait" === homeOrientation ? HomeOverlayPortrait : HomeOverlayLandscape, {}),
              ],
            })
          );
        },
      },
      {
        key: "operator",
        component: OperatorSection.W,
      },
      {
        key: "lore",
        component: () => {
          let { lang: loreLang } = (0, I18nProviderUseI18n.PO)(),
            { t: tLore } = (0, I18nProviderUseI18n.Bd)(),
            canvasContainerRef = (0, React.useRef)(null),
            modelPlayerRef = (0, React.useRef)(null),
            ringRef = (0, React.useRef)(null),
            [modelIndex, setModelIndex] = (0, React.useState)(0);
          ((0, React.useEffect)(() => {
            if (!canvasContainerRef.current) return;
            let canvasContainerEl = canvasContainerRef.current;
            return (
              (modelPlayerRef.current = new PointCloudModelPlayer(canvasContainerEl)),
              () => {
                (setModelIndex(0),
                  (canvasContainerEl.innerHTML = ""),
                  modelPlayerRef.current &&
                    (modelPlayerRef.current.dispose(), (modelPlayerRef.current = null)));
              }
            );
          }, []),
            (0, React.useEffect)(() => {
              if (!modelPlayerRef.current) return;
              let isRingLoopActive = !0;
              return (
                !(function ringTick() {
                  if (modelPlayerRef.current && ringRef.current) {
                    let currentRotation = modelPlayerRef.current.getRotationInfo().currentRotation;
                    ringRef.current.style.transform = "rotate(".concat(currentRotation, "rad)");
                  }
                  isRingLoopActive && requestAnimationFrame(ringTick);
                })(),
                () => {
                  isRingLoopActive = !1;
                }
              );
            }, []));
          let switchModel = async (requestedModelIndex) => {
              let wrappedModelIndex = requestedModelIndex;
              (modelIndex !== requestedModelIndex && SoundEffects.A.play(SoundEffects.d.model),
                requestedModelIndex < 0
                  ? (wrappedModelIndex = LORE_MODEL_ORDER.length - 1)
                  : requestedModelIndex >= LORE_MODEL_ORDER.length && (wrappedModelIndex = 0),
                modelPlayerRef.current &&
                  modelPlayerRef.current.canSwitch &&
                  (setModelIndex(wrappedModelIndex),
                  await modelPlayerRef.current.switchTo(wrappedModelIndex)));
            },
            activeModelConfig = LORE_MODEL_ORDER[modelIndex],
            hasInitialSwitchRef = (0, React.useRef)(!1),
            isLoreInView = (0, framerMotionUseInView.W)(canvasContainerRef);
          (0, React.useEffect)(() => {
            var playerToResume, playerToSwitch, playerToPause;
            isLoreInView
              ? (hasInitialSwitchRef.current ||
                  ((hasInitialSwitchRef.current = !0),
                  null == (playerToSwitch = modelPlayerRef.current) || playerToSwitch.switchTo(0)),
                null == (playerToResume = modelPlayerRef.current) || playerToResume.resumeRender())
              : null == (playerToPause = modelPlayerRef.current) || playerToPause.pauseRender();
          }, [isLoreInView]);
          let loreInfoRef = (0, React.useRef)(null),
            isLoreInfoInView = (0, framerMotionUseInView.W)(loreInfoRef, {
              once: !0,
            }),
            loreCodenameRef = (0, React.useRef)(null),
            loreNavigationRef = (0, React.useRef)(null),
            loreIntroRef = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            if (!isLoreInfoInView) return;
            let loreCodenameEl = loreCodenameRef.current,
              loreNavigationEl = loreNavigationRef.current,
              loreIntroEl = loreIntroRef.current;
            loreCodenameEl &&
              loreNavigationEl &&
              loreIntroEl &&
              (0, animeJsDefault.A)({
                targets: [loreCodenameEl, loreNavigationEl, loreIntroEl],
                opacity: [0, 1],
                translateY: ["2rem", 0],
                duration: 600,
                delay: animeJsDefault.A.stagger(100, {
                  start: 600,
                }),
                easing: "easeOutQuad",
              });
          }, [isLoreInfoInView]);
          let viewedModelKeysRef = (0, React.useRef)({});
          return (
            (0, React.useEffect)(() => {
              let activeModelKey = LORE_MODEL_ORDER[modelIndex].key;
              isLoreInView &&
                !viewedModelKeysRef.current[activeModelKey] &&
                ((viewedModelKeysRef.current[activeModelKey] = !0),
                Tracking.A.collect("content_view", {
                  group: TrackingGroupsEnum.Z.lore,
                  target: activeModelKey,
                }));
            }, [isLoreInView, modelIndex]),
            (0, jsx.jsxs)("div", {
              className: styles10().container,
              children: [
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine1,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine2,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine3,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine4,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine5,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().decoLine6,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().safeArea,
                  children: (0, jsx.jsx)("div", {
                    className: styles10().ringWrapper,
                    children: (0, jsx.jsx)("div", {
                      className: styles10().ring,
                      ref: ringRef,
                    }),
                  }),
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().lattice,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().colorBlock,
                }),
                (0, jsx.jsx)(SectionTitle.A, {
                  className: styles10().title,
                  titleEn: "lore",
                  titleCn: tLore("section.lore"),
                  theme: "dark",
                }),
                (0, jsx.jsx)("div", {
                  ref: canvasContainerRef,
                  className: styles10().canvasContainer,
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().iconLoreWrapper,
                  children: (0, jsx.jsx)(LoreEmblemIcon, {
                    className: styles10().iconLore,
                  }),
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().safeArea,
                  children: (0, jsx.jsx)("div", {
                    className: styles10().infoWrapper,
                    ref: loreInfoRef,
                    children:
                      "en-us" === loreLang
                        ? (0, jsx.jsxs)("div", {
                            className: styles10().infoEn,
                            children: [
                              (0, jsx.jsx)("div", {
                                className: styles10().gameCode,
                                children: "ARKNIGHTS: ENDFIELD-LORE",
                              }),
                              (0, jsx.jsx)("div", {
                                className: styles10().activeCodename,
                                children: (0, jsx.jsx)(TypewriterText, {
                                  text: tLore("lore.models.".concat(activeModelConfig.key, ".codename")),
                                }),
                              }),
                              (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                mode: "wait",
                                children: (0, jsx.jsx)(
                                  React.Fragment,
                                  {
                                    children: (0, jsx.jsx)(framerMotion.P.div, {
                                      className: styles10().activeIntro,
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
                                        ease: "circInOut",
                                      },
                                      children: tLore("lore.models.".concat(activeModelConfig.key, ".intro")),
                                    }),
                                  },
                                  activeModelConfig.key,
                                ),
                              }),
                              (0, jsx.jsxs)("div", {
                                className: styles10().navigation,
                                children: [
                                  (0, jsx.jsxs)("div", {
                                    className: styles10().paging,
                                    children: [modelIndex + 1, " / ", LORE_MODEL_ORDER.length],
                                  }),
                                  (0, jsx.jsx)(LoreNavDecoIcon, {
                                    className: styles10().decoIcon,
                                  }),
                                  (0, jsx.jsx)("div", {
                                    className: styles10().naviDots,
                                    children: LORE_MODEL_ORDER.map((modelDotEn, modelDotEnIdx) =>
                                      (0, jsx.jsx)(
                                        "div",
                                        {
                                          className: classnamesDefault()(styles10().naviDot, {
                                            [styles10().active]: modelDotEnIdx === modelIndex,
                                          }),
                                          onClick: () => switchModel(modelDotEnIdx),
                                        },
                                        modelDotEn.key,
                                      ),
                                    ),
                                  }),
                                  (0, jsx.jsxs)("div", {
                                    className: styles10().navigator,
                                    children: [
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().prev),
                                        onClick: () => switchModel(modelIndex - 1),
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().next),
                                        onClick: () => switchModel(modelIndex + 1),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                        : (0, jsx.jsxs)("div", {
                            className: styles10().info,
                            children: [
                              (0, jsx.jsx)("div", {
                                ref: loreCodenameRef,
                                children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                  mode: "wait",
                                  children: (0, jsx.jsxs)(
                                    React.Fragment,
                                    {
                                      children: [
                                        (0, jsx.jsx)(framerMotion.P.div, {
                                          className: styles10().activeCodename,
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
                                            duration: 0.6,
                                            ease: "circInOut",
                                          },
                                          children: tLore(
                                            "lore.models.".concat(activeModelConfig.key, ".codename"),
                                          ),
                                        }),
                                        (0, jsx.jsx)(framerMotion.P.div, {
                                          className: styles10().gameCode,
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
                                            duration: 0.6,
                                            ease: "circInOut",
                                          },
                                          children: "ARKNIGHTS: ENDFIELD",
                                        }),
                                      ],
                                    },
                                    activeModelConfig.key,
                                  ),
                                }),
                              }),
                              (0, jsx.jsxs)("div", {
                                ref: loreNavigationRef,
                                className: styles10().navigation,
                                children: [
                                  (0, jsx.jsxs)("div", {
                                    className: styles10().navigator,
                                    children: [
                                      (0, jsx.jsx)("div", {
                                        className: styles10().activeName,
                                        children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                          mode: "wait",
                                          children: (0, jsx.jsxs)(
                                            framerMotion.P.div,
                                            {
                                              className: styles10().inner,
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
                                                duration: 0.6,
                                                ease: "circInOut",
                                              },
                                              children: [
                                                (0, jsx.jsxs)("span", {
                                                  className: styles10().paging,
                                                  children: [
                                                    modelIndex + 1,
                                                    " /",
                                                    " ",
                                                    LORE_MODEL_ORDER.length,
                                                  ],
                                                }),
                                                (0, jsx.jsx)("span", {
                                                  className: styles10().name,
                                                  children: tLore(
                                                    "lore.models.".concat(activeModelConfig.key, ".name"),
                                                  ),
                                                }),
                                              ],
                                            },
                                            activeModelConfig.key,
                                          ),
                                        }),
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().prev),
                                        onClick: () => switchModel(modelIndex - 1),
                                      }),
                                      (0, jsx.jsx)("div", {
                                        className: classnamesDefault()(styles10().navBtn, styles10().next),
                                        onClick: () => switchModel(modelIndex + 1),
                                      }),
                                    ],
                                  }),
                                  (0, jsx.jsx)("div", {
                                    className: styles10().naviDots,
                                    children: LORE_MODEL_ORDER.map((modelDot, modelDotIdx) =>
                                      (0, jsx.jsx)(
                                        "div",
                                        {
                                          className: classnamesDefault()(styles10().naviDot, {
                                            [styles10().active]: modelDotIdx === modelIndex,
                                          }),
                                          onClick: () => switchModel(modelDotIdx),
                                        },
                                        modelDot.key,
                                      ),
                                    ),
                                  }),
                                ],
                              }),
                              (0, jsx.jsx)("div", {
                                ref: loreIntroRef,
                                children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                                  mode: "wait",
                                  children: (0, jsx.jsx)(
                                    framerMotion.P.div,
                                    {
                                      className: styles10().activeIntro,
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
                                        duration: 0.6,
                                        ease: "circInOut",
                                      },
                                      children: tLore("lore.models.".concat(activeModelConfig.key, ".intro")),
                                    },
                                    activeModelConfig.key,
                                  ),
                                }),
                              }),
                            ],
                          }),
                  }),
                }),
                (0, jsx.jsx)("div", {
                  className: styles10().colorLine,
                }),
              ],
            })
          );
        },
      },
      {
        key: "information",
        component: () => {
          var previewMedia, videoCidForTitle;
          let { t: tInformation } = (0, I18nProviderUseI18n.Bd)(),
            { videos: videos } = (0, VideoListContextProvider.X)(),
            [videoIndex, setVideoIndex] = (0, React.useState)(0),
            currentVideo = videos[videoIndex],
            { lang: informationLang } = (0, I18nProviderUseI18n.PO)(),
            videoSwiperRef = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            if (!videos.length || videos.length <= 3) return;
            let initialSlideIndex = videoIndex - 1;
            (initialSlideIndex < 0 && (initialSlideIndex = videos.length - 1),
              setTimeout(() => {
                var swiperForInit;
                null == (swiperForInit = videoSwiperRef.current) ||
                  swiperForInit.swiper.slideToLoop(initialSlideIndex);
              }, 100));
          }, [videos]);
          let informationRef = (0, React.useRef)(null),
            isInformationInView = (0, framerMotionUseInView.W)(informationRef, {
              margin: "-50% 0%",
            }),
            bgVideoRef = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            var bgVideoToPlay, bgVideoToPause;
            isInformationInView
              ? null == (bgVideoToPlay = bgVideoRef.current) ||
                bgVideoToPlay.play().catch(animeJs321Default())
              : null == (bgVideoToPause = bgVideoRef.current) || bgVideoToPause.pause();
          }, [isInformationInView]);
          let openMediaModal = (0, MediaModalStore.C)(),
            infoCurrentRef = (0, React.useRef)(null),
            isInfoCurrentInView = (0, framerMotionUseInView.W)(infoCurrentRef, {
              once: !0,
            }),
            infoTitleRef = (0, React.useRef)(null),
            infoButtonsRef = (0, React.useRef)(null);
          (0, React.useEffect)(() => {
            if (!isInfoCurrentInView) return;
            let infoTitleEl = infoTitleRef.current,
              infoButtonsEl = infoButtonsRef.current;
            infoTitleEl &&
              infoButtonsEl &&
              (0, animeJsDefault.A)({
                targets: [infoTitleEl, infoButtonsEl],
                opacity: [0, 1],
                translateY: ["2rem", 0],
                duration: 600,
                delay: animeJsDefault.A.stagger(200, {
                  start: 600,
                }),
                easing: "easeOutQuad",
              });
          }, [isInfoCurrentInView]);
          let hasTrackedInformationRef = (0, React.useRef)(!1);
          return (
            (0, React.useEffect)(() => {
              isInfoCurrentInView &&
                !hasTrackedInformationRef.current &&
                ((hasTrackedInformationRef.current = !0),
                Tracking.A.collect("content_view", {
                  group: TrackingGroupsEnum.Z.information,
                }));
            }, [isInfoCurrentInView]),
            (0, jsx.jsxs)("div", {
              ref: informationRef,
              className: styles11().sectionContainer,
              children: [
                (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                  mode: "wait",
                  children: (0, jsx.jsx)(
                    framerMotion.P.div,
                    {
                      className: styles11().bgVideo,
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
                        ease: "easeInOut",
                      },
                      children:
                        !!currentVideo &&
                        (0, jsx.jsx)("video", {
                          ref: bgVideoRef,
                          onTimeUpdate: () => {
                            bgVideoRef.current &&
                              (bgVideoRef.current.currentTime > bgVideoRef.current.duration - 0.6
                                ? bgVideoRef.current.classList.add(styles11().fadeOut)
                                : bgVideoRef.current.classList.remove(styles11().fadeOut));
                          },
                          src:
                            (null == currentVideo || null == (previewMedia = currentVideo.content.preview)
                              ? void 0
                              : previewMedia.url) ||
                            (null == currentVideo ? void 0 : currentVideo.content.video.url),
                          autoPlay: isInformationInView,
                          muted: !0,
                          loop: !0,
                          poster: null == currentVideo ? void 0 : currentVideo.content.cover.url,
                          playsInline: !0,
                        }),
                    },
                    (null == currentVideo ? void 0 : currentVideo.cid) || "",
                  ),
                }),
                (0, jsx.jsx)(SectionTitle.A, {
                  className: styles11().sectionTitle,
                  titleEn: "information",
                  titleCn: tInformation("section.information"),
                  theme: "dark",
                }),
                (0, jsx.jsx)("img", {
                  className: styles11().blurredLogo,
                  src: BLURRED_LOGO_IMG.src,
                  alt: "",
                }),
                (0, jsx.jsx)("div", {
                  className: styles11().decoLine,
                }),
                (0, jsx.jsxs)("div", {
                  className: styles11().infoVideos,
                  children: [
                    videos.length > 3
                      ? (0, jsx.jsx)(swiper7.RC, {
                          ref: videoSwiperRef,
                          loop: !0,
                          speed: 600,
                          slidesPerView: 3,
                          onSlideChange: (swiperInstance) => {
                            if (swiperDefault2()(swiperInstance.realIndex)) return;
                            let nextVideoIndex = swiperInstance.realIndex + 1;
                            (nextVideoIndex < 0
                              ? (nextVideoIndex = videos.length - 1)
                              : nextVideoIndex >= videos.length && (nextVideoIndex = 0),
                              setVideoIndex(nextVideoIndex));
                          },
                          children: videos.map((videoSlide, videoSlideIdx) =>
                            (0, jsx.jsx)(
                              swiper7.qr,
                              {
                                className: classnamesDefault()(styles11().infoVideo, {
                                  [styles11().active]: videoIndex === videoSlideIdx,
                                }),
                                onClick: () => {
                                  var swiperForSlide;
                                  SoundEffects.A.play(SoundEffects.d.common_click);
                                  let slideTarget = videoSlideIdx - 1;
                                  (slideTarget < 0
                                    ? (slideTarget = videos.length - 1)
                                    : slideTarget >= videos.length && (slideTarget = 0),
                                    null == (swiperForSlide = videoSwiperRef.current) ||
                                      swiperForSlide.swiper.slideToLoop(slideTarget));
                                },
                                children: (0, jsx.jsxs)("div", {
                                  className: styles11().coverBox,
                                  children: [
                                    (0, jsx.jsx)("img", {
                                      src: videoSlide.content.cover.url,
                                      alt: videoSlide.content.title,
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles11().mask,
                                    }),
                                  ],
                                }),
                              },
                              videoSlide.cid,
                            ),
                          ),
                        })
                      : (0, jsx.jsx)("div", {
                          className: styles11().infoVideoListFallback,
                          children: videos.map((videoFallback, videoFallbackIdx) =>
                            (0, jsx.jsx)(
                              "div",
                              {
                                className: classnamesDefault()(styles11().infoVideo, {
                                  [styles11().active]: videoIndex === videoFallbackIdx,
                                }),
                                onClick: () => {
                                  (SoundEffects.A.play(SoundEffects.d.common_click),
                                    setVideoIndex(videoFallbackIdx));
                                },
                                children: (0, jsx.jsxs)("div", {
                                  className: styles11().coverBox,
                                  children: [
                                    (0, jsx.jsx)("img", {
                                      src: videoFallback.content.cover.url,
                                      alt: videoFallback.content.title,
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles11().mask,
                                    }),
                                  ],
                                }),
                              },
                              videoFallback.cid,
                            ),
                          ),
                        }),
                    videos.length > 3 &&
                      (0, jsx.jsxs)("div", {
                        className: styles11().navContainer,
                        children: [
                          (0, jsx.jsxs)("div", {
                            className: classnamesDefault()(styles11().navInfo, styles11().prev),
                            children: [
                              "0"
                                .concat(videoIndex <= 0 ? videos.length : videoIndex, " / 0")
                                .concat(videos.length),
                              (0, jsx.jsx)("span", {
                                className: styles11().tag,
                                children: "LAST",
                              }),
                            ],
                          }),
                          (0, jsx.jsxs)("div", {
                            className: classnamesDefault()(styles11().navInfo, styles11().next),
                            children: [
                              (0, jsx.jsx)("span", {
                                className: styles11().tag,
                                children: "NEXT",
                              }),
                              "0"
                                .concat(videoIndex + 2 >= videos.length + 1 ? 1 : videoIndex + 2, " / 0")
                                .concat(videos.length),
                            ],
                          }),
                          (0, jsx.jsx)("div", {
                            className: classnamesDefault()(styles11().navBtn, styles11().prev),
                            onClick: () => {
                              var swiperForPrev;
                              SoundEffects.A.play(SoundEffects.d.arrow_click);
                              let prevSlideTarget = videoIndex - 1 - 1;
                              (prevSlideTarget < 0 && (prevSlideTarget = videos.length + prevSlideTarget),
                                null == (swiperForPrev = videoSwiperRef.current) ||
                                  swiperForPrev.swiper.slideToLoop(prevSlideTarget));
                            },
                          }),
                          (0, jsx.jsx)("div", {
                            className: classnamesDefault()(styles11().navBtn, styles11().next),
                            onClick: () => {
                              var swiperForNext;
                              SoundEffects.A.play(SoundEffects.d.arrow_click);
                              let nextSlideTarget = videoIndex + 1 - 1;
                              (nextSlideTarget >= videos.length && (nextSlideTarget = videos.length - 1),
                                null == (swiperForNext = videoSwiperRef.current) ||
                                  swiperForNext.swiper.slideToLoop(nextSlideTarget));
                            },
                          }),
                        ],
                      }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  ref: infoCurrentRef,
                  className: styles11().infoCurrent,
                  children: [
                    (0, jsx.jsx)("div", {
                      ref: infoTitleRef,
                      children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
                        mode: "wait",
                        children: (0, jsx.jsxs)(
                          React.Fragment,
                          {
                            children: [
                              (0, jsx.jsxs)(framerMotion.P.div, {
                                className: styles11().tagAndDate,
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
                                  ease: "easeInOut",
                                },
                                children: [
                                  !!(null == currentVideo ? void 0 : currentVideo.content.cate) &&
                                    (0, jsx.jsx)("span", {
                                      className: styles11().tag,
                                      children: tInformation(
                                        "information.cate.".concat(currentVideo.content.cate),
                                      ),
                                    }),
                                  !!currentVideo &&
                                    (0, jsx.jsx)("span", {
                                      className: styles11().date,
                                      children: dayjsDefault()(currentVideo.content.displayTime).format(
                                        tInformation("information.displayTimeFormat"),
                                      ),
                                    }),
                                ],
                              }),
                              (0, jsx.jsx)(
                                InfoVideoTitle,
                                {
                                  title: (null == currentVideo ? void 0 : currentVideo.content.title) || "",
                                  textIndent: /^[《【（「『]/.test(
                                    (null == currentVideo ? void 0 : currentVideo.content.title) || "",
                                  )
                                    ? "-0.5em"
                                    : void 0,
                                },
                                null != (videoCidForTitle = null == currentVideo ? void 0 : currentVideo.cid)
                                  ? videoCidForTitle
                                  : "",
                              ),
                            ],
                          },
                          (null == currentVideo ? void 0 : currentVideo.cid) || "",
                        ),
                      }),
                    }),
                    (0, jsx.jsxs)("div", {
                      className: styles11().buttons,
                      ref: infoButtonsRef,
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles11().playBtn,
                          onClick: () => {
                            var bgVideoToPauseForModal;
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              currentVideo &&
                                (null == (bgVideoToPauseForModal = bgVideoRef.current) ||
                                  bgVideoToPauseForModal.pause(),
                                openMediaModal(
                                  currentVideo.content.title || "",
                                  currentVideo.content.video,
                                  () => {
                                    var bgVideoToResume;
                                    null == (bgVideoToResume = bgVideoRef.current) || bgVideoToResume.play();
                                  },
                                )));
                          },
                        }),
                        (0, jsx.jsx)(module70246.A, {
                          className: styles11().button,
                          onClick: () => {
                            (SoundEffects.A.play(SoundEffects.d.common_click),
                              window.open("/".concat(informationLang, "/video"), "_blank"));
                          },
                          children: tInformation("information.more"),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
      },
      {
        key: "calendar",
        component: () => {
          let {
              data: {},
            } = (0, I18nProviderUseI18n.PO)(),
            calendarSectionRef = (0, React.useRef)(null),
            stickRef = (0, React.useRef)(null),
            [stickMode, setStickMode] = (0, React.useState)("normal"),
            [stickStyle, setStickStyle] = (0, React.useState)({
              width: 0,
            }),
            calendarContainerRef = (0, React.useRef)(null),
            calendarImageRef = (0, React.useRef)(null),
            calendarTitleRef = (0, React.useRef)(null),
            calendarTimelineRef = (0, React.useRef)(null),
            isCalendarInView = (0, framerMotionUseInView.W)(calendarSectionRef, {
              once: !0,
              margin: "-20% 0%",
            }),
            calendarOrientation = (0, useOrientation.M)(),
            { loaded: isLoadedForCalendar } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
          ((0, React.useEffect)(() => {
            if (isLoadedForCalendar && isCalendarInView) {
              let calendarSectionEl = calendarSectionRef.current,
                calendarAnimTimeline = animeJsDefault.A.timeline();
              calendarAnimTimeline.add({
                targets: {},
                duration: 300,
              });
              let calendarRevealElements =
                "portrait" !== calendarOrientation
                  ? [
                      calendarSectionEl.querySelector(".".concat(styles17().stickContainer)),
                      calendarSectionEl.querySelector(".".concat(styles17().calendar)),
                    ]
                  : [
                      calendarSectionEl.querySelector(".".concat(styles17().stickContainer)),
                      calendarSectionEl.querySelector(".".concat(styles17().calendarScroll)),
                    ];
              (0, TextRevealAnimations.iI)(calendarRevealElements, calendarAnimTimeline);
            }
          }, [isLoadedForCalendar, isCalendarInView, calendarOrientation]),
            (0, React.useEffect)(() => {
              let calendarContainerEl = calendarContainerRef.current,
                stickEl = stickRef.current,
                calendarTitleEl = calendarTitleRef.current,
                calendarTimelineEl = calendarTimelineRef.current;
              if (!calendarContainerEl || !stickEl) return;
              let measureStick = () => {
                  var titleHeightRaw, timelineHeightRaw;
                  let stickRect = stickEl.getBoundingClientRect(),
                    titleHeight =
                      null !=
                      (titleHeightRaw =
                        null == calendarTitleEl ? void 0 : calendarTitleEl.getBoundingClientRect().height)
                        ? titleHeightRaw
                        : 0,
                    timelineHeight =
                      null !=
                      (timelineHeightRaw =
                        null == calendarTimelineEl
                          ? void 0
                          : calendarTimelineEl.getBoundingClientRect().height)
                        ? timelineHeightRaw
                        : 0,
                    calendarImageEl = calendarImageRef.current;
                  (calendarImageEl &&
                    titleHeight + timelineHeight > 0 &&
                    (calendarImageEl.style.marginTop = "".concat(titleHeight + timelineHeight + 10, "px")),
                    setStickStyle({
                      width: stickRect.width,
                    }));
                },
                updateStickMode = () => {
                  let containerRect = calendarContainerEl.getBoundingClientRect(),
                    scrollY = window.scrollY,
                    containerTop = scrollY + containerRect.top,
                    containerBottom = containerTop + containerRect.height,
                    stickHeight = stickEl.getBoundingClientRect().height;
                  if (scrollY < containerTop) return void setStickMode("normal");
                  scrollY + stickHeight < containerBottom
                    ? (setStickStyle((prevStickStyle) => {
                        var calendarImageForLeft;
                        return {
                          width: prevStickStyle.width || stickEl.getBoundingClientRect().width,
                          left: "".concat(
                            null == (calendarImageForLeft = calendarImageRef.current)
                              ? void 0
                              : calendarImageForLeft.getBoundingClientRect().left,
                            "px",
                          ),
                        };
                      }),
                      setStickMode("fixed"))
                    : setStickMode("bottom");
                },
                stickFrameId = 0,
                isStickUpdateQueued = !1,
                runStickUpdate = () => {
                  ((isStickUpdateQueued = !1), measureStick(), updateStickMode());
                },
                requestStickUpdate = () => {
                  isStickUpdateQueued ||
                    ((isStickUpdateQueued = !0),
                    (stickFrameId = window.requestAnimationFrame(runStickUpdate)));
                };
              return (
                runStickUpdate(),
                null == calendarTitleEl || calendarTitleEl.addEventListener("load", requestStickUpdate),
                null == calendarTimelineEl || calendarTimelineEl.addEventListener("load", requestStickUpdate),
                window.addEventListener("scroll", requestStickUpdate, {
                  passive: !0,
                }),
                window.addEventListener("resize", requestStickUpdate),
                () => {
                  (null == calendarTitleEl || calendarTitleEl.removeEventListener("load", requestStickUpdate),
                    null == calendarTimelineEl ||
                      calendarTimelineEl.removeEventListener("load", requestStickUpdate),
                    window.removeEventListener("scroll", requestStickUpdate),
                    window.removeEventListener("resize", requestStickUpdate),
                    stickFrameId && cancelAnimationFrame(stickFrameId));
                }
              );
            }, []));
          let { images: calendarImages } = (0, I18nProviderUseI18n.PO)();
          return (0, jsx.jsx)("div", {
            className: styles17().sectionContainer,
            ref: calendarSectionRef,
            children: (0, jsx.jsxs)("div", {
              className: styles17().calendarContainer,
              ref: calendarContainerRef,
              children: [
                (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles17().stickContainer, {
                    [styles17().stickFixed]: "fixed" === stickMode,
                    [styles17().stickBottom]: "bottom" === stickMode,
                  }),
                  ref: stickRef,
                  style: "fixed" === stickMode ? stickStyle : void 0,
                  children: [
                    (0, jsx.jsx)("div", {
                      style: {
                        position: "relative",
                      },
                      children: (0, jsx.jsx)("img", {
                        ref: calendarTitleRef,
                        className: styles17().title,
                        src: calendarImages["calendar.title"],
                        alt: "calendar.title",
                      }),
                    }),
                    (0, jsx.jsx)("img", {
                      ref: calendarTimelineRef,
                      className: styles17().timeline,
                      src: calendarImages["calendar.timeline"],
                      alt: "calendar.timeline",
                    }),
                  ],
                }),
                (0, jsx.jsx)("img", {
                  ref: calendarImageRef,
                  className: styles17().calendar,
                  src: calendarImages["calendar.content"],
                  alt: "calendar.content",
                }),
                (0, jsx.jsx)(nextJsRuntimeDefault(), {
                  direction: "x",
                  scrollByDrag: !0,
                  scrollBar: !1,
                  className: styles17().calendarScroll,
                  children: (0, jsx.jsx)("div", {
                    className: styles17().content,
                    children: (0, jsx.jsxs)("div", {
                      className: styles17().scrollContainer,
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles17().timeScrollContainer,
                          children: [
                            (0, jsx.jsx)("img", {
                              className: styles17().timelineScroll,
                              src: calendarImages["calendar.timeline"],
                              alt: "calendar.timeline",
                            }),
                            " ",
                          ],
                        }),
                        (0, jsx.jsx)("img", {
                          className: styles17().calendarH5,
                          src: calendarImages["calendar.content"],
                          alt: "calendar.content",
                        }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          });
        },
      },
      {
        key: "gameplay",
        component: () => {
          let { t: tGameplay } = (0, I18nProviderUseI18n.Bd)(),
            gameplaySectionRef = (0, React.useRef)(null),
            isGameplayInView = (0, framerMotionUseInView.W)(gameplaySectionRef, {
              once: !0,
              margin: "-30% 0%",
            }),
            { loaded: isLoadedForGameplay } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
          (0, React.useEffect)(() => {
            if (isLoadedForGameplay && isGameplayInView) {
              let gameplaySectionEl = gameplaySectionRef.current,
                gameplayAnimTimeline = animeJsDefault.A.timeline();
              gameplayAnimTimeline.add({
                targets: {},
                duration: 300,
              });
              let gameplayRevealElements = [
                gameplaySectionEl.querySelector(".".concat(styles13().decoLeft)),
                gameplaySectionEl.querySelector(".".concat(styles13().itemIcon)),
              ];
              (0, TextRevealAnimations.iI)(gameplayRevealElements, gameplayAnimTimeline);
            }
          }, [isLoadedForGameplay, isGameplayInView]);
          let gameplayItems = (0, React.useMemo)(
            () =>
              GameplayItemsText.g.map((gameplayItemDef) => ({
                ...gameplayItemDef,
                title: tGameplay(gameplayItemDef.titleKey),
                description: tGameplay(gameplayItemDef.descriptionKey),
              })),
            [tGameplay],
          );
          return (0, jsx.jsxs)("div", {
            className: styles13().sectionContainer,
            ref: gameplaySectionRef,
            children: [
              (0, jsx.jsx)(module44990.D, {
                children: (0, jsx.jsx)(GameplayMarquee, {}),
              }),
              (0, jsx.jsx)(SectionTitle.A, {
                className: styles13().pageTitle,
                titleEn: "gameplay",
                titleCn: tGameplay("section.gameplay"),
              }),
              (0, jsx.jsxs)("div", {
                className: classnamesDefault()(styles13().decoLeft, isGameplayInView && styles13().active),
                children: [
                  (0, jsx.jsx)(SvgIcon92182.A, {
                    className: styles13().title,
                  }),
                  (0, jsx.jsx)(SvgIcon92418.A, {
                    className: styles13().blocks,
                  }),
                ],
              }),
              (0, jsx.jsx)(GameplayAlbum, {
                items: gameplayItems,
                inView: isGameplayInView,
                type: "gameplay",
              }),
              (0, jsx.jsx)("div", {
                className: styles13().itemIcon,
                children: (0, jsx.jsx)(SvgIcon81222.A, {
                  className: styles13().icon,
                }),
              }),
            ],
          });
        },
      },
      {
        key: "aic",
        component: () => {
          let { t: tAic } = (0, I18nProviderUseI18n.Bd)(),
            {
              data: { blueprint: blueprintData },
            } = (0, I18nProviderUseI18n.PO)(),
            aicItems = (0, React.useMemo)(
              () =>
                AicItemsText.j.map((aicItemDef) => ({
                  ...aicItemDef,
                  image: aicItemDef.image.src,
                  title: tAic(aicItemDef.titleKey),
                  description: tAic(aicItemDef.descriptionKey),
                })),
              [tAic],
            ),
            aicSectionRef = (0, React.useRef)(null),
            isAicInView = (0, framerMotionUseInView.W)(aicSectionRef, {
              once: !0,
            }),
            { loaded: isLoadedForAic } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)();
          return (
            (0, React.useEffect)(() => {
              if (isLoadedForAic && isAicInView) {
                let aicSectionEl = aicSectionRef.current,
                  aicAnimTimeline = animeJsDefault.A.timeline();
                aicAnimTimeline.add({
                  targets: {},
                  duration: 300,
                });
                let aicRevealElements = [
                  aicSectionEl.querySelector(".".concat(styles16().decoLeft)),
                  aicSectionEl.querySelector(".".concat(styles16().itemIcon)),
                ];
                (0, TextRevealAnimations.iI)(aicRevealElements, aicAnimTimeline);
              }
            }, [isLoadedForAic, isAicInView]),
            (0, jsx.jsxs)("div", {
              className: styles16().sectionContainer,
              ref: aicSectionRef,
              children: [
                (0, jsx.jsx)(SvgIcon91251.A, {
                  className: styles16().h5Icon,
                }),
                (0, jsx.jsx)(SectionTitle.A, {
                  keepTitleH5: !0,
                  className: styles16().pageTitle,
                  titleEn: "aic",
                  titleCn: tAic("section.aic"),
                  titleClassName: styles16().aicTitle,
                }),
                (0, jsx.jsxs)("div", {
                  className: classnamesDefault()(styles16().decoLeft, isAicInView && styles16().active),
                  children: [
                    (0, jsx.jsx)(SvgIcon92182.A, {
                      className: styles16().title,
                    }),
                    (0, jsx.jsx)(SvgIcon92418.A, {
                      className: styles16().blocks,
                    }),
                  ],
                }),
                (0, jsx.jsx)(GameplayAlbum, {
                  items: aicItems,
                  inView: isAicInView,
                  type: "aic",
                }),
                (0, jsx.jsx)("div", {
                  className: styles16().itemIcon,
                  children: (0, jsx.jsx)(AicIcon, {
                    className: styles16().icon,
                  }),
                }),
              ],
            })
          );
        },
        hideNav: !0,
      },
      {
        key: "notice",
        component: () => {
          let { images: noticeSectionImages } = (0, I18nProviderUseI18n.PO)(),
            { bulletins: bulletins } = (0, BulletinListContextProvider.b)(),
            { lang: noticeSectionLang } = (0, I18nProviderUseI18n.PO)(),
            { t: tNotice } = (0, I18nProviderUseI18n.Bd)(),
            noticeSectionRef = (0, React.useRef)(null),
            isNoticeInView = (0, framerMotionUseInView.W)(noticeSectionRef, {
              once: !0,
              margin: "-40% 0%",
            }),
            [bulletinPage, setBulletinPage] = (0, React.useState)(0),
            bulletinPageCount = Math.ceil(bulletins.length / 2),
            openNewsList = (0, React.useCallback)(() => {
              window.open("/".concat(noticeSectionLang, "/news"), "_blank");
            }, [noticeSectionLang]),
            { loaded: isLoadedForNotice } = (0, LoadingScreenFirstLoadProgressLoadedStore.r)(),
            shouldRevealNotice = isNoticeInView && isLoadedForNotice;
          (0, useRunOnceHook.p)(() => {
            let noticeElForHide = noticeSectionRef.current;
            [
              noticeElForHide.querySelector(".".concat(styles15().titleContainer)),
              noticeElForHide.querySelector(".".concat(styles15().carouselPagination)),
              noticeElForHide.querySelector(".".concat(styles15().detailButton)),
              noticeElForHide.querySelector(
                ".".concat(styles15().h5ContentContainer, " .").concat(styles15().h5ContentWrapper),
              ),
              noticeElForHide.querySelector(
                ".".concat(styles15().h5ContentContainer, " .").concat(styles15().pagination),
              ),
              noticeElForHide.querySelector(
                ".".concat(styles15().h5ContentContainer, " .").concat(styles15().detailButton),
              ),
            ].forEach((noticeElToHide) => {
              noticeElToHide && (noticeElToHide.style.opacity = "0");
            });
          });
          let noticeOrientation = (0, useOrientation.M)();
          return (
            (0, React.useEffect)(() => {
              if (shouldRevealNotice) {
                let noticeSectionEl = noticeSectionRef.current,
                  noticeAnimTimeline = animeJsDefault.A.timeline();
                noticeAnimTimeline.add({
                  targets: {},
                  duration: 100,
                });
                let noticeRevealElements = [
                  noticeSectionEl.querySelector(".".concat(styles15().titleContainer)),
                  noticeSectionEl.querySelector(".".concat(styles15().carouselPagination)),
                  noticeSectionEl.querySelector(".".concat(styles15().detailButton)),
                  {
                    ele: noticeSectionEl.querySelector(
                      ".".concat(styles15().h5ContentContainer, " .").concat(styles15().h5ContentWrapper),
                    ),
                    portrait: !0,
                  },
                  {
                    ele: noticeSectionEl.querySelector(
                      ".".concat(styles15().h5ContentContainer, " .").concat(styles15().pagination),
                    ),
                    portrait: !0,
                  },
                  {
                    ele: noticeSectionEl.querySelector(
                      ".".concat(styles15().h5ContentContainer, " .").concat(styles15().detailButton),
                    ),
                    portrait: !0,
                  },
                ];
                (noticeAnimTimeline.add(
                  {
                    targets: [noticeSectionEl.querySelector(".".concat(styles15().carouselContentContainer))],
                    translateX: ["100%", "0"],
                    opacity: [0, 1],
                    duration: 300,
                    easing: "easeOutQuad",
                  },
                  300,
                ),
                  (0, TextRevealAnimations.iI)(
                    noticeRevealElements,
                    noticeAnimTimeline,
                    "portrait" === noticeOrientation,
                  ));
              }
            }, [shouldRevealNotice, isLoadedForNotice]),
            (0, jsx.jsxs)("div", {
              className: styles15().sectionContainer,
              ref: noticeSectionRef,
              children: [
                (0, jsx.jsx)(SectionTitle.A, {
                  className: styles15().pageTitle,
                  titleEn: "notice",
                  titleCn: tNotice("section.notice"),
                }),
                shouldRevealNotice &&
                  (0, jsx.jsxs)(framerMotion.P.div, {
                    className: styles15().leftDeco,
                    initial: {
                      clipPath: "polygon(-100% 0%, 200% 0%, 200% 0, -100% 0%)",
                    },
                    animate: {
                      clipPath: "polygon(-100% 0%, 200% 0%, 200% 100%, -100% 100%)",
                    },
                    transition: {
                      duration: 0.5,
                      ease: "easeInOut",
                    },
                    children: [
                      (0, jsx.jsx)("div", {
                        className: styles15().wrapper,
                        children: (0, jsx.jsx)(framerMotion.P.div, {
                          ...NOTICE_DECO_MOTION,
                          className: styles15().bottomPart,
                        }),
                      }),
                      (0, jsx.jsx)(framerMotion.P.div, {
                        ...NOTICE_DECO_MOTION,
                        className: styles15().topPart,
                      }),
                      (0, jsx.jsxs)(framerMotion.P.div, {
                        className: styles15().textWrapper,
                        ...NOTICE_DECO_MOTION,
                        transition: {
                          duration: 0.5,
                          ease: "easeOut",
                          delay: 0.3,
                        },
                        children: [
                          (0, jsx.jsx)("div", {
                            className: styles15().latest,
                            children: tNotice("common.latest"),
                          }),
                          (0, jsx.jsx)("div", {
                            className: styles15().divider,
                          }),
                        ],
                      }),
                    ],
                  }),
                (0, jsx.jsx)(NoticeCarousel, {
                  className: styles15().carouselContainer,
                  containerClassName: styles15().carouselContentContainer,
                  items: bulletins,
                  loop: !1,
                  autoPlay: !1,
                  renderer: (carouselRenderProps) => {
                    let {
                      item: renderItem,
                      active: renderActive,
                      jumpTo: renderJumpTo,
                      index: renderIndex,
                    } = carouselRenderProps;
                    return (0, jsx.jsx)(NoticeCarouselItem, {
                      index: renderIndex,
                      item: renderItem,
                      active: renderActive,
                      jumpTo: renderJumpTo,
                    });
                  },
                  paginationRenderer: (paginationRenderProps) => {
                    let {
                      items: paginationItems,
                      currentIndex: paginationCurrentIndex,
                      disablePrev: paginationDisablePrev,
                      disableNext: paginationDisableNext,
                      jumpTo: paginationJumpTo,
                    } = paginationRenderProps;
                    return (0, jsx.jsxs)(jsx.Fragment, {
                      children: [
                        (0, jsx.jsx)(NoticePagination, {
                          items: paginationItems,
                          currentIndex: paginationCurrentIndex,
                          disablePrev: null != paginationDisablePrev && paginationDisablePrev,
                          disableNext: null != paginationDisableNext && paginationDisableNext,
                          jumpTo: paginationJumpTo,
                          handleList: openNewsList,
                        }),
                        (0, jsx.jsx)(NoticeTitle, {
                          item: paginationItems[paginationCurrentIndex],
                        }),
                      ],
                    });
                  },
                }),
                (0, jsx.jsxs)("div", {
                  className: styles15().h5ContentContainer,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles15().h5ContentWrapper,
                      children: (0, jsx.jsx)(
                        framerMotion.P.div,
                        {
                          initial: {
                            opacity: 0,
                            x: "-5rem",
                          },
                          animate: {
                            opacity: 1,
                            x: 0,
                          },
                          exit: {
                            opacity: 0,
                            x: "5rem",
                          },
                          transition: {
                            duration: 0.3,
                            ease: "easeOut",
                          },
                          className: styles15().bulletinList,
                          children: bulletins
                            .slice(2 * bulletinPage, (bulletinPage + 1) * 2)
                            .map((bulletin, bulletinIdx) => {
                              var bulletinFallbackCover;
                              return (0, jsx.jsxs)(
                                "div",
                                {
                                  className: styles15().bulletinItem,
                                  children: [
                                    (0, jsx.jsx)("div", {
                                      className: styles15().image,
                                      onClick: () => {
                                        (SoundEffects.A.play(SoundEffects.d.common_click),
                                          window.open("/news/".concat(bulletin.cid), "_blank"));
                                      },
                                      children: (0, jsx.jsx)("img", {
                                        src: bulletin.cover
                                          ? bulletin.cover
                                          : null !=
                                              (bulletinFallbackCover =
                                                noticeSectionImages["bulletin.".concat(bulletin.tab)])
                                            ? bulletinFallbackCover
                                            : void 0,
                                        alt: bulletin.title,
                                      }),
                                    }),
                                    (0, jsx.jsxs)("div", {
                                      className: styles15().subtitle,
                                      children: [
                                        (0, jsx.jsx)("span", {
                                          className: styles15().type,
                                          children: tNotice("notice.tab.".concat(bulletin.tab)),
                                        }),
                                        (0, jsx.jsx)("span", {
                                          className: styles15().date,
                                          children: dayjsDefault()(1e3 * bulletin.displayTime).format(
                                            tNotice("information.displayTimeFormat"),
                                          ),
                                        }),
                                      ],
                                    }),
                                    (0, jsx.jsx)("div", {
                                      className: styles15().title,
                                      children: bulletin.title,
                                    }),
                                  ],
                                },
                                bulletinIdx,
                              );
                            }),
                        },
                        bulletinPage,
                      ),
                    }),
                    (0, jsx.jsx)(Pagination.Ay, {
                      className: styles15().pagination,
                      pagination: "number",
                      current: bulletinPage,
                      total: bulletinPageCount,
                      prev: () => {
                        bulletinPage > 0 && setBulletinPage(bulletinPage - 1);
                      },
                      next: () => {
                        bulletinPage < bulletinPageCount - 1 && setBulletinPage(bulletinPage + 1);
                      },
                    }),
                    (0, jsx.jsx)(module70246.A, {
                      className: styles15().detailButton,
                      onClick: openNewsList,
                      children: tNotice("notice.detail"),
                    }),
                  ],
                }),
              ],
            })
          );
        },
      },
    ],
    LOADER_TASKS = [
      () => preloadImage(webpackRequire(93297).A.src),
      () => preloadImage(webpackRequire(84343).A.src),
      () => preloadImage(webpackRequire(29269).A.src),
      () => preloadImage(webpackRequire(11502).A.src),
      () => preloadImage(webpackRequire(75583).A.src),
      () => preloadImage(webpackRequire(97916).A.src),
      () => preloadImage(webpackRequire(80689).A.src),
      () => preloadImage(webpackRequire(22519).A.src),
      () => preloadImage(webpackRequire(60459).A.src),
      () => preloadImage(webpackRequire(9184).A.src),
      () => preloadImage(webpackRequire(1841).A.src),
      () => preloadImage(webpackRequire(79755).A.src),
      () => preloadImage(webpackRequire(63875).A.src),
      () => preloadImage(webpackRequire(92880).A.src),
      () => preloadImage(webpackRequire(26673).A.src),
      () => preloadImage(webpackRequire(78074).A.src),
      () => preloadImage(webpackRequire(73803).A.src),
      () => preloadImage(webpackRequire(3147).A.src),
      () => preloadImage(webpackRequire(49929).A.src),
      () => preloadImage(webpackRequire(35300).A.src),
      () => preloadImage(webpackRequire(93577).A.src),
      () => preloadImage(webpackRequire(89808).A.src),
      () => preloadImage(webpackRequire(82405).A.src),
      () => preloadImage(webpackRequire(57236).A.src),
      () => preloadImage(webpackRequire(32343).A.src),
      () => preloadImage(webpackRequire(52151).A.src),
      () => preloadImage(webpackRequire(90746).A.src),
      () => preloadImage(webpackRequire(37602).A.src),
      () => preloadImage(webpackRequire(34573).A.src),
      () => preloadImage(webpackRequire(71494).A.src),
      () => preloadImage(webpackRequire(93247).A.src),
      () => preloadImage(webpackRequire(48056).A.src),
      () => preloadImage(webpackRequire(80753).A.src),
      () => PointCloudModelPlayer.setup(),
    ],
    HomeLayout = (layoutProps) => {
      let { children: layoutChildren } = layoutProps,
        {
          components: { footer: Footer },
        } = (0, I18nProviderUseI18n.PO)(),
        [isLoadingScreenVisible, setLoadingScreenVisible] = (0, React.useState)(!0);
      return (
        (0, React.useEffect)(() => {
          let scheduleRootFontScale = () => {
            ((0, RootFontSizeScaler.Z)(),
              setTimeout(() => {
                scheduleRootFontScale();
              }, 1e3));
          };
          (SiteUtils.isServer || scheduleRootFontScale(),
            SiteUtils.isServer ||
              window.addEventListener(
                "resize",
                (0, lodashThrottle.A)(() => {
                  (0, RootFontSizeScaler.Z)();
                }, 200),
              ));
        }, []),
        (0, jsx.jsxs)(jsx.Fragment, {
          children: [
            (0, jsx.jsxs)("div", {
              className: styles18().sectionViewer,
              children: [
                (0, jsx.jsx)(SectionViewer, {
                  sections: HOME_SECTIONS,
                  children: layoutChildren,
                }),
                (0, jsx.jsx)(Footer, {}),
              ],
            }),
            isLoadingScreenVisible &&
              (0, jsx.jsx)(LoadingScreenFirstLoadProgressLoadedStore.E, {
                tasks: LOADER_TASKS,
                onFinished: () => setLoadingScreenVisible(!1),
              }),
            (0, jsx.jsxs)("div", {
              className: styles18().modalLayer,
              children: [
                (0, jsx.jsx)(ReserveModalWrapper, {}),
                (0, jsx.jsx)(UserModal.Ay, {}),
                (0, jsx.jsx)(MediaModalStore.A, {}),
                (0, jsx.jsx)(OrigQueryModal.Ay, {}),
              ],
            }),
          ],
        })
      );
    };
};
