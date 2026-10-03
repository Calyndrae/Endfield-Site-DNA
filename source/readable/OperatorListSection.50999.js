/**
 * OperatorListSection — readable reconstruction of webpack module 50999 (chunk [lang]__(main)__(subpage)__operator__page-3a80441c18fd566a.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(subpage)/operator/page-3a80441c18fd566a.js
 *
 * Operator catalogue page. FilterDropdown is an accessible listbox (role button/listbox/option, Enter/Space toggle, Escape closes, click-outside closes via module44705.W) with an 'all' option plus options for type 'prof' (guard, caster, support, shielder, vanguard, assault) or 'elem' (fire, ice, electric, nature, physic); labels come from operator.filter.<type> and operator.<type>.<key>, and the icon div is keyed so it re-mounts on change. OperatorCard shows portrait, name, '// codename', zero-padded index / total, and prof/elem icons; a layout effect fits the name into 11.1875rem by bisecting the font size 28 times between 0.5625rem and 1.6875rem using canvas measureText with font '"SansBold", sans-serif', re-running after document.fonts.ready/load and on ResizeObserver. OperatorListSection keeps isDetailMode/detailIndex, prof and elem filters, filters I18n operators (gL), and swaps between the list (background deco with hollow 'ENDFIELD' text, dropdowns, a vertical scroll container) and OperatorSection in detailMode inside AnimatePresence mode 'wait' with 0.3s easeOut opacity fades.
 *
 * Exports (minified key → meaning):
 *   OperatorListSection → OperatorListSection
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 50999 from [lang]__(main)__(subpage)__operator__page-3a80441c18fd566a.js
// deps: 96424, 97028, 73235, 30998, 60705, 49095, 52652, 4948, 3492, 44705, 61759, 87001, 4721
const module_50999 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    OperatorListSection: () => OperatorListSection,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    framerMotionAnimatePresencePopLayout = webpackRequire(30998),
    framerMotion = webpackRequire(60705),
    nextJsRuntime = webpackRequire(49095),
    nextJsRuntimeDefault = webpackRequire.n(nextJsRuntime),
    HollowText = webpackRequire(52652),
    I18nProviderUseI18n = webpackRequire(4948),
    OperatorSection = webpackRequire(3492),
    useClickOutsideHook = webpackRequire(44705),
    stylesModule = webpackRequire(61759),
    styles = webpackRequire.n(stylesModule);
  function FilterDropdown(props) {
    var tmpSelectedKey, tmpIconKey;
    let {
        options: options,
        value: value,
        onChange: onChange,
        placeholder = "请选择",
        className: className,
        disabled = !1,
        showPlaceholderWhenEmpty = !0,
        type: filterType,
      } = props,
      [isOpen, setIsOpen] = (0, React.useState)(!1),
      containerRef = (0, useClickOutsideHook.W)((0, React.useCallback)(() => setIsOpen(!1), [])),
      selectedOption = (0, React.useMemo)(
        () => options.find((option) => option.value === value),
        [options, value],
      ),
      displayKey =
        null != (tmpSelectedKey = null == selectedOption ? void 0 : selectedOption.key)
          ? tmpSelectedKey
          : showPlaceholderWhenEmpty
            ? placeholder
            : null,
      iconMotionKey = (0, React.useMemo)(
        () =>
          null == displayKey
            ? "none"
            : "string" == typeof displayKey || "number" == typeof displayKey
              ? String(displayKey)
              : null != value
                ? String(value)
                : "__placeholder__",
        [displayKey, value],
      ),
      toggleOpen = () => {
        disabled || setIsOpen((prevOpen) => !prevOpen);
      },
      selectOption = (nextValue) => {
        (onChange(nextValue), setIsOpen(!1));
      },
      { t: translate } = (0, I18nProviderUseI18n.Bd)();
    return (0, jsx.jsxs)("div", {
      ref: containerRef,
      className: classnamesDefault()(styles().root, className, styles()[filterType], {
        [styles().open]: isOpen,
        [styles().disabled]: disabled,
      }),
      children: [
        (0, jsx.jsxs)("div", {
          className: styles().trigger,
          role: "button",
          tabIndex: disabled ? -1 : 0,
          "aria-haspopup": "listbox",
          "aria-expanded": isOpen,
          onClick: toggleOpen,
          onKeyDown: (keyEvent) => {
            disabled ||
              (("Enter" === keyEvent.key || " " === keyEvent.key) &&
                (keyEvent.preventDefault(), toggleOpen()),
              "Escape" === keyEvent.key && setIsOpen(!1));
          },
          children: [
            (0, jsx.jsx)("div", {
              className: styles().label,
              children: translate("operator.filter.".concat(filterType)),
            }),
            (0, jsx.jsx)("div", {
              className: styles().arrow,
            }),
            (0, jsx.jsx)("div", {
              className: styles().divider,
            }),
            (0, jsx.jsx)(
              framerMotion.P.div,
              {
                className: styles().icon,
                "data-key":
                  null != (tmpIconKey = null == selectedOption ? void 0 : selectedOption.key)
                    ? tmpIconKey
                    : "none",
              },
              iconMotionKey,
            ),
          ],
        }),
        (0, jsx.jsxs)("div", {
          className: styles().panel,
          role: "listbox",
          "aria-hidden": !isOpen,
          children: [
            (0, jsx.jsxs)("div", {
              role: "option",
              "aria-selected": null === value,
              className: classnamesDefault()(styles().option, {
                [styles().optionSelected]: null === value,
              }),
              onClick: () => selectOption(null),
              children: [
                (0, jsx.jsx)("div", {
                  className: styles().bg,
                }),
                (0, jsx.jsx)("div", {
                  className: styles().icon,
                  "data-key": "none",
                }),
                (0, jsx.jsx)("div", {
                  className: styles().text,
                  children: translate("operator.filter.all"),
                }),
              ],
            }),
            options.map((optionItem) =>
              (0, jsx.jsxs)(
                "div",
                {
                  role: "option",
                  "aria-selected": optionItem.value === value,
                  className: classnamesDefault()(styles().option, {
                    [styles().optionSelected]: optionItem.value === value,
                  }),
                  onClick: () => selectOption(optionItem.value),
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles().bg,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles().icon,
                      "data-key": optionItem.value,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles().text,
                      children: translate("operator.".concat(filterType, ".").concat(optionItem.key)),
                    }),
                  ],
                },
                optionItem.value,
              ),
            ),
          ],
        }),
      ],
    });
  }
  var stylesModule2 = webpackRequire(87001),
    styles2 = webpackRequire.n(stylesModule2);
  let NAME_FONT_FAMILY = '"SansBold", sans-serif',
    measureCanvas = null,
    OperatorCard = (cardProps) => {
      let {
          index: index,
          operator: operator,
          className: cardClassName,
          style: cardStyle,
          total: total,
          onClick: onCardClick,
        } = cardProps,
        nameRef = (0, React.useRef)(null),
        [nameFontSizeRem, setNameFontSizeRem] = (0, React.useState)(1.6875);
      return (
        (0, React.useLayoutEffect)(() => {
          let nameElement = nameRef.current;
          if (!nameElement) return;
          let fitName = () => {
            let rootFontSizePx = (function () {
                if ("undefined" == typeof document) return 16;
                let parsedRootFontSize = parseFloat(getComputedStyle(document.documentElement).fontSize);
                return Number.isFinite(parsedRootFontSize) && parsedRootFontSize > 0
                  ? parsedRootFontSize
                  : 16;
              })(),
              maxNameWidthPx = 11.1875 * rootFontSizePx,
              applyFit = () => {
                setNameFontSizeRem(
                  (function (nameText, maxWidthPx, unusedMinArg, unusedMaxArg, remPx) {
                    if (!nameText) return 1.6875;
                    let lowRem = 0.5625,
                      highRem = 1.6875;
                    for (let iteration = 0; iteration < 28; iteration++) {
                      let midRem = (lowRem + highRem) / 2;
                      (function (measureString, fontSizePx, fontFamily) {
                        measureCanvas || (measureCanvas = document.createElement("canvas"));
                        let measureContext = measureCanvas.getContext("2d");
                        return measureContext
                          ? ((measureContext.font = "".concat(fontSizePx, "px ").concat(fontFamily)),
                            measureContext.measureText(measureString).width)
                          : 0;
                      })(nameText, midRem * remPx, NAME_FONT_FAMILY) <= maxWidthPx
                        ? (lowRem = midRem)
                        : (highRem = midRem);
                    }
                    return lowRem;
                  })(operator.name, maxNameWidthPx, 0, 1.6875, rootFontSizePx),
                );
              };
            (applyFit(),
              Promise.all([
                document.fonts.ready,
                document.fonts.load("".concat(1.6875 * rootFontSizePx, "px ").concat(NAME_FONT_FAMILY)),
              ]).then(applyFit));
          };
          fitName();
          let resizeObserver = new ResizeObserver(() => fitName());
          return (resizeObserver.observe(nameElement), () => resizeObserver.disconnect());
        }, [operator.name]),
        (0, jsx.jsxs)("div", {
          className: classnamesDefault()(styles2().operatorItem, cardClassName),
          style: cardStyle,
          onClick: onCardClick,
          children: [
            (0, jsx.jsx)("div", {
              className: styles2().image,
              "data-key": operator.key,
              style: operator.portrait
                ? {
                    backgroundImage: "url(".concat(operator.portrait, ")"),
                  }
                : void 0,
            }),
            (0, jsx.jsxs)("div", {
              className: styles2().contentBlock,
              "data-rarity": operator.rarity,
              children: [
                (0, jsx.jsx)("div", {
                  ref: nameRef,
                  className: styles2().name,
                  children: (0, jsx.jsx)("span", {
                    className: styles2().nameText,
                    style: {
                      fontSize: "".concat(nameFontSizeRem, "rem"),
                    },
                    children: operator.name,
                  }),
                }),
                (0, jsx.jsxs)("div", {
                  className: styles2().subTitle,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().codename,
                      children: "// " + operator.codename,
                    }),
                    (0, jsx.jsxs)("div", {
                      className: styles2().index,
                      children: [(index + 1).toString().padStart(2, "0"), " / ", total],
                    }),
                  ],
                }),
                (0, jsx.jsxs)("div", {
                  className: styles2().icons,
                  children: [
                    (0, jsx.jsx)("div", {
                      className: styles2().icon,
                      "data-key": operator.prof,
                    }),
                    (0, jsx.jsx)("div", {
                      className: styles2().icon,
                      "data-key": operator.elem,
                    }),
                  ],
                }),
              ],
            }),
          ],
        })
      );
    };
  var stylesModule3 = webpackRequire(4721),
    styles3 = webpackRequire.n(stylesModule3);
  let OperatorListSection = () => {
    let [isDetailMode, setIsDetailMode] = (0, React.useState)(!1),
      [detailIndex, setDetailIndex] = (0, React.useState)(0),
      operators = (0, I18nProviderUseI18n.gL)(),
      openDetail = (0, React.useCallback)(
        (operatorKey) => {
          setIsDetailMode(!0);
          let foundIndex = operators.findIndex((candidateOperator) => candidateOperator.key === operatorKey);
          setDetailIndex(-1 !== foundIndex ? foundIndex : 0);
        },
        [operators],
      ),
      [profFilter, setProfFilter] = (0, React.useState)(null),
      [elemFilter, setElemFilter] = (0, React.useState)(null),
      filteredOperators = (0, React.useMemo)(
        () =>
          operators.filter(
            (op) => (!profFilter || profFilter === op.prof) && (!elemFilter || elemFilter === op.elem),
          ),
        [operators, profFilter, elemFilter],
      ),
      closeDetail = (0, React.useCallback)(() => {
        setIsDetailMode(!1);
      }, []);
    return (0, jsx.jsx)("div", {
      className: styles3().sectionContainer,
      children: (0, jsx.jsx)(framerMotionAnimatePresencePopLayout.N, {
        mode: "wait",
        children: isDetailMode
          ? (0, jsx.jsx)(
              framerMotion.P.div,
              {
                className: classnamesDefault()(styles3().totalContainer, styles3().detail),
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
                children: (0, jsx.jsx)(OperatorSection.W, {
                  detailMode: !0,
                  detailIndex: detailIndex,
                  detailBack: closeDetail,
                }),
              },
              "detail",
            )
          : (0, jsx.jsxs)(
              framerMotion.P.div,
              {
                className: styles3().totalContainer,
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
                children: [
                  (0, jsx.jsxs)("div", {
                    className: classnamesDefault()(styles3().backgroundDeco),
                    children: [
                      (0, jsx.jsx)("div", {
                        className: styles3().shallowBg,
                      }),
                      (0, jsx.jsx)(HollowText.A, {
                        className: styles3().decoText,
                        text: "ENDFIELD",
                      }),
                      (0, jsx.jsx)("div", {
                        className: styles3().decoRight,
                      }),
                    ],
                  }),
                  (0, jsx.jsx)("div", {
                    className: styles3().bgBottom,
                  }),
                  (0, jsx.jsxs)("div", {
                    className: styles3().dropdowns,
                    children: [
                      (0, jsx.jsx)(FilterDropdown, {
                        className: styles3().dropdown,
                        type: "prof",
                        options: [
                          {
                            value: "guard",
                            key: "guard",
                          },
                          {
                            value: "caster",
                            key: "caster",
                          },
                          {
                            value: "support",
                            key: "support",
                          },
                          {
                            value: "shielder",
                            key: "shielder",
                          },
                          {
                            value: "vanguard",
                            key: "vanguard",
                          },
                          {
                            value: "assault",
                            key: "assault",
                          },
                        ],
                        value: profFilter,
                        onChange: setProfFilter,
                      }),
                      (0, jsx.jsx)(FilterDropdown, {
                        className: styles3().dropdown,
                        type: "elem",
                        options: [
                          {
                            value: "fire",
                            key: "fire",
                          },
                          {
                            value: "ice",
                            key: "ice",
                          },
                          {
                            value: "electric",
                            key: "electric",
                          },
                          {
                            value: "nature",
                            key: "nature",
                          },
                          {
                            value: "physic",
                            key: "physic",
                          },
                        ],
                        value: elemFilter,
                        onChange: setElemFilter,
                      }),
                    ],
                  }),
                  (0, jsx.jsx)(nextJsRuntimeDefault(), {
                    className: styles3().listContainer,
                    direction: "y",
                    scrollBar: !0,
                    scrollBarClassName: styles3().scrollBar,
                    thumbClassName: styles3().thumb,
                    autoHideScrollBar: !1,
                    children: (0, jsx.jsx)("div", {
                      className: styles3().list,
                      children: filteredOperators.map((listOperator, listIndex) =>
                        (0, jsx.jsx)(
                          OperatorCard,
                          {
                            operator: listOperator,
                            index: listIndex,
                            total: operators.length,
                            onClick: () => openDetail(listOperator.key),
                          },
                          listOperator.key,
                        ),
                      ),
                    }),
                  }),
                ],
              },
              "list",
            ),
      }),
    });
  };
};
