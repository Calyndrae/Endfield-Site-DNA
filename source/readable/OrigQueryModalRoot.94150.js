/**
 * OrigQueryModalRoot — readable reconstruction of webpack module 94150 (chunk 3696-03b8256f1fece6bb.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/3696-03b8256f1fece6bb.js
 *
 * Originium ('orig') balance query modal shown only when lang === 'ja-jp' (Japanese paid-currency disclosure). A zustand store holds isActive; useActivateOrigQueryModal returns its activate action. On activation it awaits Tracking.sdkReady(), calls Role.API.getActiveRoleV2('ef') and, with the role's serverId and token, posts AccountApi.getOrigData to load {paid, free, total}; the user can switch role via Role.UI.showSelectDialog('ef'). A status ref ('default'|'loading'|'success'|'error') plus loading/role-error/request-error flags drive the UI: a 12-spoke 100x100 spinner SVG, an error block with 'modal.origQuery.content.networkError' and a confirm button, a header with globe (server name) and swap-arrows (role nickname / switch) icons, and the orig list rendering origPaid/origFree/origTotal through SiteUtils' thousands-separator formatter, a plus-square divider icon and 'modal.origQuery.content.notice'. State resets when the account from the SDK hook becomes null; the root export wraps the modal in module 44990's container.
 *
 * Exports (minified key → meaning):
 *   Ay → OrigQueryModalRoot
 *   YV → useActivateOrigQueryModal
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 94150 from 3696-03b8256f1fece6bb.js
// deps: 96424, 97028, 73235, 99880, 22060, 2142, 19460, 95823, 70246, 44990, 79549, 4948, 1162, 21086, 97521, 80500, 95141
const module_94150 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ay: () => OrigQueryModalRoot,
    YV: () => useActivateOrigQueryModal,
  });
  var plusSquareIconPath,
    globeIconPath,
    spinnerSpoke1,
    spinnerSpoke2,
    spinnerSpoke3,
    spinnerSpoke4,
    spinnerSpoke5,
    spinnerSpoke6,
    spinnerSpoke7,
    spinnerSpoke8,
    spinnerSpoke9,
    spinnerSpoke10,
    spinnerSpoke11,
    spinnerSpoke12,
    switchArrowsIconPath,
    jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    zustandCreate = webpackRequire(99880),
    ReactDOM = webpackRequire(22060),
    React2 = webpackRequire(2142);
  function extendProps() {
    return (extendProps = Object.assign
      ? Object.assign.bind()
      : function (target) {
          for (var argIndex = 1; argIndex < arguments.length; argIndex++) {
            var source = arguments[argIndex];
            for (var key in source) ({}).hasOwnProperty.call(source, key) && (target[key] = source[key]);
          }
          return target;
        }).apply(null, arguments);
  }
  let SvgPlusSquare = function (plusSquareProps) {
    return React2.createElement(
      "svg",
      extendProps(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 19 19",
        },
        plusSquareProps,
      ),
      plusSquareIconPath ||
        (plusSquareIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M-0.000,18.335 L-0.000,0.191 L18.144,0.191 L18.144,18.335 L-0.000,18.335 ZM16.733,1.602 L1.411,1.602 L1.411,16.924 L16.733,16.924 L16.733,1.602 ZM8.189,4.501 L9.955,4.501 L9.955,8.380 L13.835,8.380 L13.835,10.146 L9.955,10.146 L9.955,14.025 L8.189,14.025 L8.189,10.146 L4.310,10.146 L4.310,8.380 L8.189,8.380 L8.189,4.501 Z",
        })),
    );
  };
  function extendProps2() {
    return (extendProps2 = Object.assign
      ? Object.assign.bind()
      : function (target2) {
          for (var argIndex2 = 1; argIndex2 < arguments.length; argIndex2++) {
            var source2 = arguments[argIndex2];
            for (var key2 in source2)
              ({}).hasOwnProperty.call(source2, key2) && (target2[key2] = source2[key2]);
          }
          return target2;
        }).apply(null, arguments);
  }
  let SvgGlobe = function (globeProps) {
    return React2.createElement(
      "svg",
      extendProps2(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 22 22",
        },
        globeProps,
      ),
      globeIconPath ||
        (globeIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M13.714,16.490 C13.493,15.949 12.760,15.024 11.540,13.739 C11.213,13.395 11.233,13.133 11.352,12.351 L11.352,12.261 C11.430,11.725 11.565,11.409 13.366,11.123 C14.283,10.980 14.520,11.344 14.856,11.851 L14.966,12.019 C15.177,12.358 15.496,12.616 15.871,12.752 C16.031,12.826 16.227,12.916 16.494,13.067 C17.140,13.423 17.140,13.829 17.140,14.721 L17.140,14.823 C17.190,15.702 16.933,16.570 16.412,17.280 C15.624,17.960 14.716,18.486 13.734,18.831 C14.226,17.910 13.849,16.817 13.734,16.502 L13.714,16.490 L13.714,16.490 ZM10.1000,2.714 C12.242,2.713 13.468,2.993 14.586,3.533 C13.912,3.923 13.302,4.413 12.776,4.986 C12.646,5.166 12.535,5.334 12.429,5.490 C12.085,6.010 11.917,6.243 11.610,6.280 C11.412,6.297 11.214,6.297 11.016,6.280 C10.415,6.239 9.596,6.190 9.334,6.902 C9.166,7.357 9.137,8.585 9.678,9.223 C9.770,9.375 9.787,9.561 9.723,9.727 C9.670,9.902 9.569,10.060 9.432,10.181 C9.281,10.060 9.144,9.923 9.023,9.772 C8.729,9.357 8.323,9.034 7.852,8.843 C7.676,8.793 7.479,8.753 7.291,8.712 C6.759,8.601 6.161,8.474 6.022,8.175 C5.934,7.912 5.899,7.634 5.920,7.357 C5.948,6.914 5.881,6.470 5.723,6.055 C5.577,5.720 5.291,5.465 4.941,5.359 C6.504,3.673 8.700,2.714 10.1000,2.714 L10.1000,2.714 ZM0.730,11.000 C0.730,16.672 5.328,21.270 10.1000,21.270 C16.672,21.270 21.270,16.672 21.270,11.000 C21.270,5.328 16.672,0.730 10.1000,0.730 C5.328,0.730 0.730,5.328 0.730,11.000 L0.730,11.000 Z",
        })),
    );
  };
  function extendProps3() {
    return (extendProps3 = Object.assign
      ? Object.assign.bind()
      : function (target3) {
          for (var argIndex3 = 1; argIndex3 < arguments.length; argIndex3++) {
            var source3 = arguments[argIndex3];
            for (var key3 in source3)
              ({}).hasOwnProperty.call(source3, key3) && (target3[key3] = source3[key3]);
          }
          return target3;
        }).apply(null, arguments);
  }
  let SvgSpinner = function (spinnerProps) {
    return React2.createElement(
      "svg",
      extendProps3(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 100 100",
          fill: "none",
        },
        spinnerProps,
      ),
      spinnerSpoke1 ||
        (spinnerSpoke1 = React2.createElement("path", {
          opacity: 0.75,
          d: "M49.9995 0C52.5099 0 54.5449 2.03505 54.5449 4.54542V18.1817C54.5449 20.692 52.5099 22.7271 49.9995 22.7271C47.4892 22.7271 45.4541 20.692 45.4541 18.1817V4.54542C45.4541 2.03505 47.4892 0 49.9995 0Z",
          fill: "white",
        })),
      spinnerSpoke2 ||
        (spinnerSpoke2 = React2.createElement("path", {
          opacity: 0.8,
          d: "M75 6.70102C77.1739 7.95624 77.9187 10.7361 76.6636 12.9101L69.8455 24.7213C69.0393 26.1393 67.5351 27.0166 65.904 27.0202C64.2729 27.0237 62.765 26.1531 61.9526 24.7387C61.1402 23.3243 61.1479 21.583 61.9728 20.1759L68.7909 8.36464C70.0461 6.19071 72.826 5.44589 75 6.70102Z",
          fill: "white",
        })),
      spinnerSpoke3 ||
        (spinnerSpoke3 = React2.createElement("path", {
          opacity: 0.9,
          d: "M93.3028 24.9989C94.5579 27.1729 93.8131 29.9527 91.6392 31.208L79.8279 38.0261C77.6558 39.261 74.8942 38.5113 73.6449 36.3474C72.3956 34.1836 73.127 31.4171 75.2825 30.1534L87.0938 23.3353C89.2677 22.0802 92.0476 22.825 93.3028 24.9989Z",
          fill: "white",
        })),
      spinnerSpoke4 ||
        (spinnerSpoke4 = React2.createElement("path", {
          d: "M99.9996 50.0005C99.9996 51.206 99.5207 52.3622 98.6682 53.2146C97.8158 54.067 96.6597 54.5459 95.4541 54.5459H81.8179C79.3075 54.5459 77.2725 52.5109 77.2725 50.0005C77.2725 47.4901 79.3075 45.4551 81.8179 45.4551H95.4541C97.9645 45.4551 99.9996 47.4901 99.9996 50.0005Z",
          fill: "white",
        })),
      spinnerSpoke5 ||
        (spinnerSpoke5 = React2.createElement("path", {
          opacity: 0.2,
          d: "M93.3016 75C92.0463 77.1739 89.2665 77.9187 87.0925 76.6636L75.2813 69.8455C73.8633 69.0393 72.986 67.5351 72.9824 65.904C72.9789 64.2729 73.8495 62.765 75.2639 61.9526C76.6783 61.1402 78.4195 61.1479 79.8267 61.9728L91.6379 68.7909C93.8119 70.0461 94.5567 72.826 93.3016 75Z",
          fill: "white",
        })),
      spinnerSpoke6 ||
        (spinnerSpoke6 = React2.createElement("path", {
          opacity: 0.3,
          d: "M74.9989 93.3023C72.8249 94.5574 70.0451 93.8126 68.7899 91.6387L61.9717 79.8274C60.7368 77.6553 61.4865 74.8937 63.6504 73.6444C65.8142 72.3951 68.5807 73.1265 69.8444 75.282L76.6625 87.0933C77.9176 89.2673 77.1728 92.0471 74.9989 93.3023Z",
          fill: "white",
        })),
      spinnerSpoke7 ||
        (spinnerSpoke7 = React2.createElement("path", {
          opacity: 0.4,
          d: "M49.9995 99.9976C48.794 99.9976 47.6379 99.5187 46.7854 98.6663C45.933 97.8138 45.4541 96.6577 45.4541 95.4522V81.8159C45.4541 79.3056 47.4892 77.2705 49.9995 77.2705C52.5099 77.2705 54.5449 79.3056 54.5449 81.8159V95.4522C54.5449 97.9625 52.5099 99.9976 49.9995 99.9976Z",
          fill: "white",
        })),
      spinnerSpoke8 ||
        (spinnerSpoke8 = React2.createElement("path", {
          opacity: 0.5,
          d: "M24.9989 93.305C22.825 92.0498 22.0802 89.2699 23.3353 87.0959L30.1534 75.2847C30.9596 73.8667 32.4637 72.9894 34.0948 72.9859C35.7259 72.9823 37.2339 73.8529 38.0463 75.2673C38.8587 76.6817 38.851 78.423 38.0261 79.8301L31.208 91.6414C29.9527 93.8153 27.1729 94.5601 24.9989 93.305Z",
          fill: "white",
        })),
      spinnerSpoke9 ||
        (spinnerSpoke9 = React2.createElement("path", {
          opacity: 0.55,
          d: "M6.6976 74.9989C5.44248 72.8249 6.18729 70.0451 8.36122 68.7899L20.1725 61.9717C22.3446 60.7368 25.1062 61.4865 26.3555 63.6504C27.6048 65.8142 26.8734 68.5807 24.7179 69.8444L12.9066 76.6625C10.7327 77.9176 7.95282 77.1728 6.6976 74.9989Z",
          fill: "white",
        })),
      spinnerSpoke10 ||
        (spinnerSpoke10 = React2.createElement("path", {
          opacity: 0.6,
          d: "M0 50.0005C0 47.4901 2.03505 45.4551 4.54542 45.4551H18.1817C20.692 45.4551 22.7271 47.4901 22.7271 50.0005C22.7271 52.5109 20.692 54.5459 18.1817 54.5459H4.54542C2.03505 54.5459 0 52.5109 0 50.0005Z",
          fill: "white",
        })),
      spinnerSpoke11 ||
        (spinnerSpoke11 = React2.createElement("path", {
          opacity: 0.65,
          d: "M6.6976 24.9989C7.95282 22.825 10.7327 22.0802 12.9066 23.3353L24.7179 30.1534C26.1359 30.9596 27.0131 32.4637 27.0167 34.0948C27.0203 35.7259 26.1497 37.2339 24.7353 38.0463C23.3209 38.8587 21.5796 38.851 20.1725 38.0261L8.36122 31.208C6.18729 29.9527 5.44248 27.1729 6.6976 24.9989Z",
          fill: "white",
        })),
      spinnerSpoke12 ||
        (spinnerSpoke12 = React2.createElement("path", {
          opacity: 0.7,
          d: "M24.9989 6.70102C27.1729 5.44589 29.9527 6.19071 31.208 8.36464L38.0261 20.1759C39.261 22.348 38.5113 25.1096 36.3474 26.3589C34.1836 27.6083 31.4171 26.8768 30.1534 24.7213L23.3353 12.9101C22.0802 10.7361 22.825 7.95624 24.9989 6.70102Z",
          fill: "white",
        })),
    );
  };
  var SvgIcon19460 = webpackRequire(19460);
  function extendProps4() {
    return (extendProps4 = Object.assign
      ? Object.assign.bind()
      : function (target4) {
          for (var argIndex4 = 1; argIndex4 < arguments.length; argIndex4++) {
            var source4 = arguments[argIndex4];
            for (var key4 in source4)
              ({}).hasOwnProperty.call(source4, key4) && (target4[key4] = source4[key4]);
          }
          return target4;
        }).apply(null, arguments);
  }
  let SvgSwitchArrows = function (switchArrowsProps) {
    return React2.createElement(
      "svg",
      extendProps4(
        {
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 19 19",
        },
        switchArrowsProps,
      ),
      switchArrowsIconPath ||
        (switchArrowsIconPath = React2.createElement("path", {
          fillRule: "evenodd",
          fill: "currentColor",
          d: "M4.787,13.926 L7.016,16.184 L5.152,18.073 L0.288,13.144 L0.288,11.256 L18.622,11.256 L18.622,13.926 L4.787,13.926 ZM0.288,5.010 L14.123,5.010 L11.894,2.752 L13.758,0.864 L18.622,5.793 L18.622,7.681 L0.288,7.681 L0.288,5.010 Z",
        })),
    );
  };
  var SvgIcon95823 = webpackRequire(95823),
    module70246 = webpackRequire(70246),
    module44990 = webpackRequire(44990),
    module79549 = webpackRequire(79549),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
    AccountApi = webpackRequire(21086),
    SiteUtils = webpackRequire(97521),
    SvgIcon80500 = webpackRequire(80500),
    stylesModule = webpackRequire(95141),
    styles = webpackRequire.n(stylesModule);
  let useOrigQueryModalStore = (0, zustandCreate.v)((set) => ({
      isActive: !1,
      activate: () =>
        set({
          isActive: !0,
        }),
    })),
    useActivateOrigQueryModal = () => useOrigQueryModalStore((state) => state.activate),
    OrigQueryModal = (props) => {
      let { className: className, style: style } = props,
        { t: t } = (0, I18nProviderUseI18n.Bd)(),
        { isActive: isActive } = useOrigQueryModalStore(),
        { lang: lang } = (0, I18nProviderUseI18n.PO)(),
        { account: account } = (0, ReactDOM.F7)(),
        queryStatusRef = (0, React.useRef)("default"),
        [isLoading, setLoading] = (0, React.useState)(!0),
        [hasRoleError, setRoleError] = (0, React.useState)(!1),
        [hasRequestError, setRequestError] = (0, React.useState)(!1),
        [serverRole, setServerRole] = (0, React.useState)(null),
        [origData, setOrigData] = (0, React.useState)({
          paid: 0,
          free: 0,
          total: 0,
        }),
        fetchOrigData = (0, React.useCallback)(
          async (role, roleToken, targetServerRole) =>
            new Promise(async (resolve, reject) => {
              if (!role || !roleToken || !targetServerRole) return void reject(Error("Invalid role"));
              try {
                var dataForPaid, dataForFree, dataForTotal;
                let origResponse = await (0, AccountApi.BV)(targetServerRole.serverId, roleToken);
                (null == origResponse ? void 0 : origResponse.data) &&
                "number" ==
                  typeof (null == origResponse || null == (dataForPaid = origResponse.data)
                    ? void 0
                    : dataForPaid.paid) &&
                "number" ==
                  typeof (null == origResponse || null == (dataForFree = origResponse.data)
                    ? void 0
                    : dataForFree.free) &&
                "number" ==
                  typeof (null == origResponse || null == (dataForTotal = origResponse.data)
                    ? void 0
                    : dataForTotal.total)
                  ? (setOrigData(null == origResponse ? void 0 : origResponse.data),
                    setServerRole(targetServerRole),
                    resolve())
                  : (setServerRole(targetServerRole), reject(Error("Request failed")));
              } catch (fetchError) {
                (console.error(fetchError), setServerRole(targetServerRole), reject(Error("Request failed")));
              }
            }),
          [],
        ),
        openRoleSelectDialog = (0, React.useCallback)(async () => {
          (await Tracking.A.sdkReady()).Role.UI.showSelectDialog("ef", {
            onSelectRole: (pickedRole, pickedToken, pickedServerRole) => {
              "loading" !== queryStatusRef.current &&
                ((queryStatusRef.current = "loading"),
                setLoading(!0),
                fetchOrigData(pickedRole, pickedToken, pickedServerRole)
                  .then(() => {
                    ((queryStatusRef.current = "success"), setLoading(!1), setRequestError(!1));
                  })
                  .catch((selectError) => {
                    (console.error(selectError),
                      (queryStatusRef.current = "error"),
                      setLoading(!1),
                      setRequestError(!0));
                  }));
            },
          });
        }, [fetchOrigData]);
      ((0, module79549.w)(() => {
        isActive &&
          "default" === queryStatusRef.current &&
          ((queryStatusRef.current = "loading"),
          setLoading(!0),
          Tracking.A.sdkReady().then((sdk) => {
            sdk.Role.API.getActiveRoleV2("ef").then((activeRole) => {
              if (!activeRole || !activeRole.serverRole) {
                ((queryStatusRef.current = "error"),
                  setRoleError(!0),
                  setLoading(!1),
                  useOrigQueryModalStore.setState({
                    isActive: !0,
                  }));
                return;
              }
              fetchOrigData(activeRole.role, activeRole.token, activeRole.serverRole)
                .then(() => {
                  ((queryStatusRef.current = "success"),
                    setRequestError(!1),
                    setLoading(!1),
                    useOrigQueryModalStore.setState({
                      isActive: !0,
                    }));
                })
                .catch((activeRoleError) => {
                  (console.error(activeRoleError),
                    (queryStatusRef.current = "error"),
                    setRequestError(!0),
                    setLoading(!1),
                    useOrigQueryModalStore.setState({
                      isActive: !0,
                    }));
                });
            });
          }));
      }, [isActive]),
        (0, module79549.w)(() => {
          account ||
            ((queryStatusRef.current = "default"),
            setLoading(!1),
            setRoleError(!1),
            setRequestError(!1),
            setServerRole(null),
            setOrigData({
              paid: 0,
              free: 0,
              total: 0,
            }));
        }, [account]));
      let closeModal = (0, React.useCallback)(() => {
        useOrigQueryModalStore.setState({
          isActive: !1,
        });
      }, []);
      return "ja-jp" !== lang
        ? (0, jsx.jsx)(jsx.Fragment, {})
        : (0, jsx.jsx)("div", {
            className: classnamesDefault()(styles().origQueryModal, isActive && styles().active, className),
            style: style,
            children: (0, jsx.jsx)(SvgIcon80500.A, {
              title: t("modal.origQuery.title"),
              className: styles().modalContainer,
              onClose: () =>
                useOrigQueryModalStore.setState({
                  isActive: !1,
                }),
              hideDecoLB: !0,
              children: (0, jsx.jsxs)("div", {
                className: styles().contentFrame,
                children: [
                  isLoading &&
                    (0, jsx.jsx)(SvgSpinner, {
                      className: styles().loadingIcon,
                    }),
                  (hasRoleError || hasRequestError) &&
                    !isLoading &&
                    (0, jsx.jsxs)("div", {
                      className: styles().error,
                      children: [
                        (0, jsx.jsx)("div", {
                          className: styles().text,
                          children: t("modal.origQuery.content.networkError"),
                        }),
                        (0, jsx.jsx)(module70246.A, {
                          className: styles().button,
                          onClick: closeModal,
                          children: t("modal.origQuery.content.confirm"),
                        }),
                      ],
                    }),
                  !hasRoleError &&
                    !isLoading &&
                    (0, jsx.jsxs)("div", {
                      className: styles().header,
                      children: [
                        (0, jsx.jsx)(SvgIcon19460.A, {
                          className: styles().decoLB,
                        }),
                        (0, jsx.jsxs)("div", {
                          className: styles().userInfo,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles().server,
                              children: [
                                (0, jsx.jsx)(SvgGlobe, {
                                  className: styles().icon,
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles().serverName,
                                  children: null == serverRole ? void 0 : serverRole.serverName,
                                }),
                              ],
                            }),
                            (0, jsx.jsx)("div", {
                              className: styles().divider,
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles().role,
                              children: [
                                (0, jsx.jsx)(SvgIcon95823.A, {
                                  className: styles().icon,
                                }),
                                (0, jsx.jsx)("span", {
                                  className: styles().roleName,
                                  onClick: openRoleSelectDialog,
                                  children: null == serverRole ? void 0 : serverRole.nickName,
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles().switch,
                                  onClick: openRoleSelectDialog,
                                  children: (0, jsx.jsx)(SvgSwitchArrows, {
                                    className: styles().icon,
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  !hasRoleError &&
                    !hasRequestError &&
                    !isLoading &&
                    (0, jsx.jsxs)("div", {
                      className: styles().contentContainer,
                      children: [
                        (0, jsx.jsxs)("div", {
                          className: styles().origList,
                          children: [
                            (0, jsx.jsxs)("div", {
                              className: styles().origItem,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles().label,
                                  children: t("modal.origQuery.content.origPaid"),
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles().cnt,
                                  children: (0, SiteUtils.ZV)(origData.paid),
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles().origItem,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles().label,
                                  children: t("modal.origQuery.content.origFree"),
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles().cnt,
                                  children: (0, SiteUtils.ZV)(origData.free),
                                }),
                              ],
                            }),
                            (0, jsx.jsxs)("div", {
                              className: styles().origItem,
                              children: [
                                (0, jsx.jsx)("div", {
                                  className: styles().label,
                                  children: t("modal.origQuery.content.origTotal"),
                                }),
                                (0, jsx.jsx)("div", {
                                  className: styles().cnt,
                                  children: (0, SiteUtils.ZV)(origData.total),
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles().dividerLine,
                          children: (0, jsx.jsx)(SvgPlusSquare, {
                            className: styles().icon,
                          }),
                        }),
                        (0, jsx.jsx)("div", {
                          className: styles().notice,
                          children: t("modal.origQuery.content.notice"),
                        }),
                        (0, jsx.jsx)(module70246.A, {
                          className: styles().button,
                          onClick: closeModal,
                          children: t("modal.origQuery.content.confirm"),
                        }),
                      ],
                    }),
                ],
              }),
            }),
          });
    },
    OrigQueryModalRoot = () =>
      (0, jsx.jsx)(module44990.D, {
        children: (0, jsx.jsx)(OrigQueryModal, {}),
      });
};
