(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [9236],
  {
    4721: (e) => {
      e.exports = {
        sectionContainer: "__12-OperatorList_sectionContainer__KC5gP",
        totalContainer: "__12-OperatorList_totalContainer__86kgK",
        detail: "__12-OperatorList_detail__l3dwR",
        dropdowns: "__12-OperatorList_dropdowns__xnSNd",
        listContainer: "__12-OperatorList_listContainer__3RzVi",
        scrollBar: "__12-OperatorList_scrollBar__cociH",
        thumb: "__12-OperatorList_thumb__OQEKX",
        list: "__12-OperatorList_list__JDzsq",
        backgroundDeco: "__12-OperatorList_backgroundDeco__4RkDZ",
        shallowBg: "__12-OperatorList_shallowBg__lw6mP",
        decoText: "__12-OperatorList_decoText__A14Ui",
        decoRight: "__12-OperatorList_decoRight__73_eX",
      };
    },
    50999: (e, t, a) => {
      "use strict";
      a.d(t, { OperatorListSection: () => w });
      var o = a(96424),
        r = a(97028),
        s = a(73235),
        n = a.n(s),
        i = a(30998),
        l = a(60705),
        c = a(49095),
        d = a.n(c),
        _ = a(52652),
        p = a(4948),
        u = a(3492),
        m = a(44705),
        v = a(61759),
        x = a.n(v);
      function h(e) {
        var t, a;
        let {
            options: s,
            value: i,
            onChange: c,
            placeholder: d = "请选择",
            className: _,
            disabled: u = !1,
            showPlaceholderWhenEmpty: v = !0,
            type: h,
          } = e,
          [y, k] = (0, r.useState)(!1),
          g = (0, m.W)((0, r.useCallback)(() => k(!1), [])),
          N = (0, r.useMemo)(() => s.find((e) => e.value === i), [s, i]),
          j = null != (t = null == N ? void 0 : N.key) ? t : v ? d : null,
          f = (0, r.useMemo)(
            () =>
              null == j
                ? "none"
                : "string" == typeof j || "number" == typeof j
                  ? String(j)
                  : null != i
                    ? String(i)
                    : "__placeholder__",
            [j, i],
          ),
          b = () => {
            u || k((e) => !e);
          },
          w = (e) => {
            (c(e), k(!1));
          },
          { t: O } = (0, p.Bd)();
        return (0, o.jsxs)("div", {
          ref: g,
          className: n()(x().root, _, x()[h], { [x().open]: y, [x().disabled]: u }),
          children: [
            (0, o.jsxs)("div", {
              className: x().trigger,
              role: "button",
              tabIndex: u ? -1 : 0,
              "aria-haspopup": "listbox",
              "aria-expanded": y,
              onClick: b,
              onKeyDown: (e) => {
                u ||
                  (("Enter" === e.key || " " === e.key) && (e.preventDefault(), b()),
                  "Escape" === e.key && k(!1));
              },
              children: [
                (0, o.jsx)("div", { className: x().label, children: O("operator.filter.".concat(h)) }),
                (0, o.jsx)("div", { className: x().arrow }),
                (0, o.jsx)("div", { className: x().divider }),
                (0, o.jsx)(
                  l.P.div,
                  { className: x().icon, "data-key": null != (a = null == N ? void 0 : N.key) ? a : "none" },
                  f,
                ),
              ],
            }),
            (0, o.jsxs)("div", {
              className: x().panel,
              role: "listbox",
              "aria-hidden": !y,
              children: [
                (0, o.jsxs)("div", {
                  role: "option",
                  "aria-selected": null === i,
                  className: n()(x().option, { [x().optionSelected]: null === i }),
                  onClick: () => w(null),
                  children: [
                    (0, o.jsx)("div", { className: x().bg }),
                    (0, o.jsx)("div", { className: x().icon, "data-key": "none" }),
                    (0, o.jsx)("div", { className: x().text, children: O("operator.filter.all") }),
                  ],
                }),
                s.map((e) =>
                  (0, o.jsxs)(
                    "div",
                    {
                      role: "option",
                      "aria-selected": e.value === i,
                      className: n()(x().option, { [x().optionSelected]: e.value === i }),
                      onClick: () => w(e.value),
                      children: [
                        (0, o.jsx)("div", { className: x().bg }),
                        (0, o.jsx)("div", { className: x().icon, "data-key": e.value }),
                        (0, o.jsx)("div", {
                          className: x().text,
                          children: O("operator.".concat(h, ".").concat(e.key)),
                        }),
                      ],
                    },
                    e.value,
                  ),
                ),
              ],
            }),
          ],
        });
      }
      var y = a(87001),
        k = a.n(y);
      let g = '"SansBold", sans-serif',
        N = null,
        j = (e) => {
          let { index: t, operator: a, className: s, style: i, total: l, onClick: c } = e,
            d = (0, r.useRef)(null),
            [_, p] = (0, r.useState)(1.6875);
          return (
            (0, r.useLayoutEffect)(() => {
              let e = d.current;
              if (!e) return;
              let t = () => {
                let e = (function () {
                    if ("undefined" == typeof document) return 16;
                    let e = parseFloat(getComputedStyle(document.documentElement).fontSize);
                    return Number.isFinite(e) && e > 0 ? e : 16;
                  })(),
                  t = 11.1875 * e,
                  o = () => {
                    p(
                      (function (e, t, a, o, r) {
                        if (!e) return 1.6875;
                        let s = 0.5625,
                          n = 1.6875;
                        for (let a = 0; a < 28; a++) {
                          let a = (s + n) / 2;
                          (function (e, t, a) {
                            N || (N = document.createElement("canvas"));
                            let o = N.getContext("2d");
                            return o ? ((o.font = "".concat(t, "px ").concat(a)), o.measureText(e).width) : 0;
                          })(e, a * r, g) <= t
                            ? (s = a)
                            : (n = a);
                        }
                        return s;
                      })(a.name, t, 0, 1.6875, e),
                    );
                  };
                (o(),
                  Promise.all([
                    document.fonts.ready,
                    document.fonts.load("".concat(1.6875 * e, "px ").concat(g)),
                  ]).then(o));
              };
              t();
              let o = new ResizeObserver(() => t());
              return (o.observe(e), () => o.disconnect());
            }, [a.name]),
            (0, o.jsxs)("div", {
              className: n()(k().operatorItem, s),
              style: i,
              onClick: c,
              children: [
                (0, o.jsx)("div", {
                  className: k().image,
                  "data-key": a.key,
                  style: a.portrait ? { backgroundImage: "url(".concat(a.portrait, ")") } : void 0,
                }),
                (0, o.jsxs)("div", {
                  className: k().contentBlock,
                  "data-rarity": a.rarity,
                  children: [
                    (0, o.jsx)("div", {
                      ref: d,
                      className: k().name,
                      children: (0, o.jsx)("span", {
                        className: k().nameText,
                        style: { fontSize: "".concat(_, "rem") },
                        children: a.name,
                      }),
                    }),
                    (0, o.jsxs)("div", {
                      className: k().subTitle,
                      children: [
                        (0, o.jsx)("div", { className: k().codename, children: "// " + a.codename }),
                        (0, o.jsxs)("div", {
                          className: k().index,
                          children: [(t + 1).toString().padStart(2, "0"), " / ", l],
                        }),
                      ],
                    }),
                    (0, o.jsxs)("div", {
                      className: k().icons,
                      children: [
                        (0, o.jsx)("div", { className: k().icon, "data-key": a.prof }),
                        (0, o.jsx)("div", { className: k().icon, "data-key": a.elem }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      var f = a(4721),
        b = a.n(f);
      let w = () => {
        let [e, t] = (0, r.useState)(!1),
          [a, s] = (0, r.useState)(0),
          c = (0, p.gL)(),
          m = (0, r.useCallback)(
            (e) => {
              t(!0);
              let a = c.findIndex((t) => t.key === e);
              s(-1 !== a ? a : 0);
            },
            [c],
          ),
          [v, x] = (0, r.useState)(null),
          [y, k] = (0, r.useState)(null),
          g = (0, r.useMemo)(() => c.filter((e) => (!v || v === e.prof) && (!y || y === e.elem)), [c, v, y]),
          N = (0, r.useCallback)(() => {
            t(!1);
          }, []);
        return (0, o.jsx)("div", {
          className: b().sectionContainer,
          children: (0, o.jsx)(i.N, {
            mode: "wait",
            children: e
              ? (0, o.jsx)(
                  l.P.div,
                  {
                    className: n()(b().totalContainer, b().detail),
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.3, ease: "easeOut" },
                    children: (0, o.jsx)(u.W, { detailMode: !0, detailIndex: a, detailBack: N }),
                  },
                  "detail",
                )
              : (0, o.jsxs)(
                  l.P.div,
                  {
                    className: b().totalContainer,
                    initial: { opacity: 0 },
                    animate: { opacity: 1 },
                    exit: { opacity: 0 },
                    transition: { duration: 0.3, ease: "easeOut" },
                    children: [
                      (0, o.jsxs)("div", {
                        className: n()(b().backgroundDeco),
                        children: [
                          (0, o.jsx)("div", { className: b().shallowBg }),
                          (0, o.jsx)(_.A, { className: b().decoText, text: "ENDFIELD" }),
                          (0, o.jsx)("div", { className: b().decoRight }),
                        ],
                      }),
                      (0, o.jsx)("div", { className: b().bgBottom }),
                      (0, o.jsxs)("div", {
                        className: b().dropdowns,
                        children: [
                          (0, o.jsx)(h, {
                            className: b().dropdown,
                            type: "prof",
                            options: [
                              { value: "guard", key: "guard" },
                              { value: "caster", key: "caster" },
                              { value: "support", key: "support" },
                              { value: "shielder", key: "shielder" },
                              { value: "vanguard", key: "vanguard" },
                              { value: "assault", key: "assault" },
                            ],
                            value: v,
                            onChange: x,
                          }),
                          (0, o.jsx)(h, {
                            className: b().dropdown,
                            type: "elem",
                            options: [
                              { value: "fire", key: "fire" },
                              { value: "ice", key: "ice" },
                              { value: "electric", key: "electric" },
                              { value: "nature", key: "nature" },
                              { value: "physic", key: "physic" },
                            ],
                            value: y,
                            onChange: k,
                          }),
                        ],
                      }),
                      (0, o.jsx)(d(), {
                        className: b().listContainer,
                        direction: "y",
                        scrollBar: !0,
                        scrollBarClassName: b().scrollBar,
                        thumbClassName: b().thumb,
                        autoHideScrollBar: !1,
                        children: (0, o.jsx)("div", {
                          className: b().list,
                          children: g.map((e, t) =>
                            (0, o.jsx)(
                              j,
                              { operator: e, index: t, total: c.length, onClick: () => m(e.key) },
                              e.key,
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
    },
    58272: (e, t, a) => {
      (Promise.resolve().then(a.bind(a, 50999)), Promise.resolve().then(a.bind(a, 83597)));
    },
    61759: (e) => {
      e.exports = {
        root: "Dropdown_root__O4Qqi",
        disabled: "Dropdown_disabled__XU9e7",
        prof: "Dropdown_prof__WoV4u",
        trigger: "Dropdown_trigger__mA0mP",
        icon: "Dropdown_icon__yfwMq",
        elem: "Dropdown_elem__qJRg3",
        arrow: "Dropdown_arrow__gjWRH",
        divider: "Dropdown_divider__mwtOR",
        triggerLabel: "Dropdown_triggerLabel__Gsp_U",
        open: "Dropdown_open__c3u8K",
        panel: "Dropdown_panel__ujBcP",
        option: "Dropdown_option__fXjKe",
        bg: "Dropdown_bg__0iRXw",
        text: "Dropdown_text__FG9X4",
        optionSelected: "Dropdown_optionSelected__2OEOQ",
      };
    },
    87001: (e) => {
      e.exports = {
        operatorItem: "OperatorItem_operatorItem__gPezu",
        image: "OperatorItem_image__fyd3C",
        contentBlock: "OperatorItem_contentBlock__I_0_3",
        name: "OperatorItem_name__OvU8c",
        nameText: "OperatorItem_nameText__ibYGO",
        subTitle: "OperatorItem_subTitle___c7GD",
        codename: "OperatorItem_codename__U3_VI",
        index: "OperatorItem_index__ivv9h",
        icons: "OperatorItem_icons__x_ht1",
        icon: "OperatorItem_icon__jOzZV",
      };
    },
  },
  (e) => {
    var t = (t) => e((e.s = t));
    (e.O(
      0,
      [
        1281, 6084, 7556, 7509, 9814, 6605, 7783, 5803, 5573, 4150, 3428, 6553, 8830, 1862, 7349, 1434, 3407,
        5578, 3877, 2060, 3269, 8498, 4231, 4948, 8963, 3696, 226, 6297, 491, 7358,
      ],
      () => t(58272),
    ),
      (_N_E = e.O()));
  },
]);
