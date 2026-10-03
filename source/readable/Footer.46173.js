/**
 * Footer — readable reconstruction of webpack module 46173 (chunk [lang]__(main)__layout-493920d1b65733f5.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/layout-493920d1b65733f5.js
 *
 * Site footer component. The top row shows the 'common.selectLanguage' label and a language picker (globe SVG, current language name from LANG_DISPLAY_NAMES, a chevron arrow SVG and a scrollable dropdown of availableLangs, defaulting to AVAILABLE_LANGS) that toggles an 'active' class and closes via a click-outside ref hook; picking a language rewrites window.location.pathname by replacing '/<currentLang>' with '/<newLang>' and preserves the hash. The bottom container is a ref passed to Tracking.insertFooter so the Gryphline SDK renders the legal/footer links into it. Two inline SVG components (31x31 globe, 25x65 arrow) use an Object.assign polyfill to spread props.
 *
 * Exports (minified key → meaning):
 *   A → Footer
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 46173 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 96424, 97028, 73235, 49095, 44705, 4948, 1162, 2142, 2718
const module_46173 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => Footer,
  });
  var globeIconPaths,
    arrowIconPath,
    jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    useClickOutsideHook = webpackRequire(44705),
    I18nProviderUseI18n = webpackRequire(4948),
    Tracking = webpackRequire(1162),
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
  let SvgGlobe = function (globeProps) {
    return React2.createElement(
      "svg",
      extendProps(
        {
          viewBox: "0 0 31 31",
          xmlns: "http://www.w3.org/2000/svg",
        },
        globeProps,
      ),
      globeIconPaths ||
        (globeIconPaths = React2.createElement(
          "g",
          {
            fill: "currentColor",
          },
          React2.createElement("path", {
            fillRule: "evenodd",
            d: "M26.908,25.635 C24.394,28.416 21.222,30.133 17.461,30.501 C12.580,30.979 8.342,29.433 4.911,25.940 C2.615,23.603 1.216,20.734 0.824,17.462 C0.257,12.734 1.600,8.554 4.850,5.084 C7.549,2.201 10.933,0.637 14.918,0.407 C19.266,0.155 23.068,1.538 26.185,4.479 C29.311,7.430 30.906,11.161 30.885,15.967 C30.965,19.447 29.478,22.789 26.908,25.635 ZM2.085,14.434 C2.046,14.947 2.020,15.464 2.034,15.979 C2.043,16.305 2.167,16.629 2.171,16.955 C2.185,18.116 2.534,19.195 2.919,20.271 C3.641,22.286 4.883,23.953 6.337,25.486 C6.514,25.673 6.635,25.912 6.791,26.140 C7.286,25.721 7.251,25.383 7.166,25.037 C7.126,24.870 7.053,24.709 7.027,24.540 C6.890,23.623 6.715,22.707 6.650,21.784 C6.605,21.158 6.323,20.728 5.868,20.372 C4.995,19.688 4.717,18.149 5.226,17.079 C5.539,16.424 5.481,16.313 4.792,15.933 C4.609,15.831 4.445,15.671 4.314,15.504 C3.810,14.857 3.144,14.467 2.369,14.254 C2.292,14.233 2.091,14.363 2.085,14.434 ZM28.648,13.257 C27.513,14.085 27.224,15.081 27.930,16.321 C27.067,15.802 26.578,15.052 26.394,14.149 C26.235,13.361 25.711,12.972 25.065,12.699 C24.630,12.514 24.431,12.676 24.459,13.124 C24.498,13.758 24.162,14.134 23.661,14.439 C23.286,14.667 22.935,14.934 22.573,15.184 C22.598,15.231 22.623,15.278 22.647,15.325 C22.982,15.282 23.316,15.239 23.696,15.190 C23.568,15.592 23.521,15.892 23.383,16.143 C23.018,16.805 22.567,17.424 22.241,18.104 C22.030,18.544 21.803,19.020 22.067,19.574 C22.290,20.042 22.089,20.558 21.763,20.873 C21.262,21.355 21.012,21.923 20.775,22.549 C20.581,23.063 20.416,23.676 19.762,23.844 C19.500,23.912 19.086,24.023 18.971,23.900 C18.723,23.636 18.574,23.244 18.476,22.881 C18.348,22.405 18.304,21.906 18.231,21.415 C18.103,20.555 17.878,19.693 17.886,18.834 C17.893,18.019 17.516,17.332 17.436,16.563 C16.888,16.563 16.369,16.583 15.852,16.558 C15.160,16.524 14.577,16.311 14.269,15.598 C13.888,14.717 13.802,13.820 14.188,12.944 C14.441,12.373 14.818,11.853 15.166,11.329 C15.316,11.102 15.360,10.934 15.233,10.666 C14.961,10.086 15.158,9.673 15.750,9.390 C15.894,9.322 16.013,9.204 16.156,9.099 C15.793,8.660 15.468,8.267 15.119,7.845 C15.394,7.710 15.721,7.417 15.910,7.490 C16.197,7.598 16.388,7.959 16.628,8.225 C16.827,8.062 17.023,7.902 17.235,7.728 C17.144,7.612 17.035,7.530 17.014,7.431 C16.976,7.254 16.912,6.999 16.999,6.892 C17.563,6.202 18.281,5.787 19.207,5.878 C19.661,5.924 20.120,6.114 20.555,6.062 C21.109,5.994 21.681,5.838 22.067,5.338 C22.230,5.128 22.254,5.148 22.393,5.412 C22.251,5.525 22.113,5.636 21.975,5.746 C22.002,5.804 22.028,5.863 22.054,5.921 C22.981,5.696 23.948,5.667 24.953,5.273 C23.874,4.331 22.851,3.538 21.648,3.025 C20.775,2.651 19.880,2.315 18.969,2.046 C18.417,1.884 17.806,1.928 17.239,1.800 C16.307,1.592 15.392,1.647 14.453,1.757 C13.215,1.901 12.016,2.141 10.850,2.593 C9.579,3.084 8.427,3.755 7.408,4.656 C7.302,4.750 7.242,4.896 7.160,5.018 C7.306,5.054 7.452,5.120 7.598,5.122 C9.891,5.131 12.185,5.129 14.478,5.139 C14.570,5.140 14.661,5.222 14.752,5.265 C14.685,5.343 14.634,5.449 14.550,5.491 C13.617,5.963 12.679,6.425 11.742,6.889 C11.528,6.997 11.288,7.198 11.105,6.892 C10.930,6.601 10.559,6.348 10.837,5.912 C11.004,5.652 10.887,5.517 10.593,5.487 C10.282,5.457 9.974,5.398 9.663,5.367 C9.490,5.350 9.313,5.364 9.138,5.364 C9.135,5.413 9.131,5.462 9.127,5.511 C9.416,5.734 9.705,5.958 10.001,6.187 C9.733,6.392 9.475,6.589 9.198,6.801 C9.441,7.444 9.680,8.074 9.934,8.745 C7.864,9.331 6.058,10.207 5.375,12.537 C5.263,12.378 5.174,12.246 5.080,12.119 C5.025,12.044 4.960,11.908 4.903,11.910 C4.522,11.927 4.113,11.898 3.766,12.026 C3.200,12.236 3.159,12.787 3.116,13.311 C3.093,13.585 3.217,13.716 3.459,13.665 C3.734,13.608 3.996,13.482 4.336,13.359 C4.184,13.864 4.354,14.286 4.599,14.696 C4.660,14.798 4.633,14.949 4.686,15.059 C4.799,15.294 4.897,15.569 5.086,15.720 C5.165,15.783 5.464,15.576 5.660,15.487 C5.844,15.404 6.020,15.291 6.211,15.229 C6.738,15.059 7.158,15.333 7.572,15.597 C8.029,15.888 8.589,16.106 8.907,16.511 C9.508,17.272 10.136,17.926 11.054,18.306 C11.252,18.389 11.426,18.808 11.413,19.061 C11.390,19.500 11.237,19.938 11.094,20.362 C10.903,20.928 10.855,21.542 10.286,21.962 C10.002,22.171 9.886,22.622 9.727,22.979 C9.479,23.539 9.260,24.091 8.831,24.569 C8.011,25.482 7.946,26.116 8.719,27.082 C9.451,27.995 10.580,28.222 11.617,28.571 C12.232,28.777 12.876,28.914 13.519,29.010 C14.364,29.138 15.220,29.262 16.071,29.257 C16.835,29.252 17.600,29.091 18.359,28.962 C19.013,28.852 19.680,28.750 20.304,28.536 C22.050,27.940 23.612,26.997 24.970,25.757 C26.100,24.724 27.088,23.549 27.803,22.186 C28.252,21.329 28.610,20.421 28.954,19.515 C29.144,19.016 29.262,18.481 29.341,17.951 C29.466,17.122 29.546,16.286 29.611,15.451 C29.629,15.217 29.471,14.970 29.488,14.735 C29.539,14.026 29.084,13.653 28.648,13.257 ZM22.423,22.166 C22.046,21.252 22.423,20.566 23.044,19.916 C23.464,20.307 23.103,21.676 22.423,22.166 ZM6.822,14.003 C6.095,13.723 5.418,13.462 4.668,13.173 C5.208,12.959 6.715,13.513 6.822,14.003 Z",
          }),
        )),
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
  let SvgArrow = function (arrowProps) {
    return React2.createElement(
      "svg",
      extendProps2(
        {
          viewBox: "0 0 25 65",
          xmlns: "http://www.w3.org/2000/svg",
        },
        arrowProps,
      ),
      arrowIconPath ||
        (arrowIconPath = React2.createElement("path", {
          fill: "currentColor",
          d: "M20 0h5l-20 32 20 33h-5l-20-33z",
        })),
    );
  };
  var stylesModule = webpackRequire(2718),
    styles = webpackRequire.n(stylesModule);
  let Footer = (props) => {
    let { availableLangs = I18nProviderUseI18n.YZ } = props,
      sdkFooterRef = (0, React.useRef)(null),
      { lang: lang } = (0, I18nProviderUseI18n.PO)(),
      { t: t } = (0, I18nProviderUseI18n.Bd)();
    (0, React.useEffect)(() => {
      sdkFooterRef.current && Tracking.A.insertFooter(sdkFooterRef.current);
    }, [null]);
    let [isDropdownOpen, setDropdownOpen] = (0, React.useState)(!1),
      switchLanguage = (0, React.useCallback)(
        (targetLang) => {
          let newPathname = window.location.pathname.replace("/".concat(lang), "/".concat(targetLang));
          window.location.href = "".concat(newPathname).concat(window.location.hash);
        },
        [lang],
      ),
      clickOutsideRef = (0, useClickOutsideHook.W)(() => setDropdownOpen(!1));
    return (0, jsx.jsxs)("div", {
      className: styles().footer,
      children: [
        (0, jsx.jsxs)("div", {
          className: styles().topContainer,
          children: [
            (0, jsx.jsx)("div", {
              className: styles().label,
              children: t("common.selectLanguage"),
            }),
            (0, jsx.jsxs)("div", {
              className: classnamesDefault()(styles().languageItem, isDropdownOpen && styles().active),
              onClick: () => setDropdownOpen(!isDropdownOpen),
              ref: clickOutsideRef,
              children: [
                (0, jsx.jsx)(SvgGlobe, {
                  className: styles().globe,
                }),
                (0, jsx.jsx)("span", {
                  className: styles().text,
                  children: I18nProviderUseI18n.lX[lang],
                }),
                (0, jsx.jsx)(SvgArrow, {
                  className: styles().arrow,
                }),
                (0, jsx.jsx)("div", {
                  className: styles().dropDown,
                  children: (0, jsx.jsx)(nextJsRuntimeDefault(), {
                    className: styles().dropDownScroll,
                    direction: "y",
                    children: (0, jsx.jsx)("div", {
                      className: styles().contentContainer,
                      children: availableLangs.map((langCode) =>
                        (0, jsx.jsx)(
                          "div",
                          {
                            className: styles().dropDownItem,
                            onClick: () => {
                              switchLanguage(langCode);
                            },
                            children: I18nProviderUseI18n.lX[langCode],
                          },
                          langCode,
                        ),
                      ),
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
        (0, jsx.jsx)("div", {
          className: styles().bottomContainer,
          ref: sdkFooterRef,
        }),
      ],
    });
  };
};
