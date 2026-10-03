// Gryphline SDK adapter — module 3301 from 7349-5fc72e5aa1e8149a
// module 3301 from 7349-5fc72e5aa1e8149a.js
// deps: 31563
const module_3301 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, {
      adapter: () => w_21,
      default: () => E_22,
    }));
  var n_1 = [
      {
        key: "ui_header",
        convertTo: "boolean",
      },
      {
        key: "ui_nav",
        convertTo: "boolean",
      },
      {
        key: "ui_footer",
        convertTo: "boolean",
      },
      {
        key: "ui_return",
        convertTo: "boolean",
      },
      {
        key: "ui_share",
        convertTo: "boolean",
      },
      {
        key: "ui_theme",
      },
      {
        key: "ui_style",
      },
      {
        key: "ctr_orientation",
      },
      {
        key: "ctr_webview",
        convertTo: "boolean",
      },
      {
        key: "i18n_lang",
      },
      {
        key: "media_audio",
        convertTo: "boolean",
      },
      {
        key: "media_video",
        convertTo: "boolean",
      },
      {
        key: "func_accountSwitch",
        convertTo: "boolean",
      },
      {
        key: "func_downloadGuide",
        convertTo: "boolean",
      },
      {
        key: "source_from",
      },
      {
        key: "source_uid",
      },
      {
        key: "share_type",
      },
      {
        key: "share_by",
      },
      {
        key: "collect_uid",
      },
      {
        key: "collect_phone",
      },
    ],
    a_2 = {
      isInContainer: !1,
      onReturn: function () {},
    };
  try {
    var r_3 = webpackRequire(31563).default;
    a_2 = {
      isInContainer: r_3.getSystemInfo().isApp,
      onReturn: r_3.pop,
    };
  } catch (e_23) {}
  var o_4 = {
      onReturn: function () {
        a_2.isInContainer && a_2.onReturn();
      },
    },
    s_5 = a_2.isInContainer;
  function c_6(e_24) {
    return "0" === e_24 || 0 === e_24 || !1 === e_24 || "false" === e_24;
  }
  function l_7() {
    var e_25 = [];
    return (
      new URL(location.href).searchParams.forEach(function (t_26, i_27) {
        e_25.push({
          key: i_27,
          value: t_26,
        });
      }),
      e_25
    );
  }
  function u_8(e_28) {
    var t_29 = "object" == typeof e_28,
      i_30 = (t_29 && e_28.storeKey) || "hg-adapt-sdk-store",
      n_31 = (t_29 && e_28.storeType) || "sessionStorage";
    if (n_31 && !1 === ["localStorage", "sessionStorage"].includes(n_31))
      throw Error("adapt sdk's [storeType] should be localStorage or sessionStorage, please check it");
    return {
      storeKey: i_30,
      storeType: n_31,
    };
  }
  var d_9 = [
      {
        enable: s_5,
        modifiers: [
          {
            key: "ui_return",
            when: function (e_32) {
              return c_6(e_32.header);
            },
            to: !0,
          },
        ],
      },
    ],
    A_10 = [
      {
        ua: "HgWebview",
        modifiers: [
          {
            key: "ui_header",
            to: !1,
          },
          {
            key: "ctr_webview",
            to: 1,
          },
        ],
      },
    ],
    f_11 = (function () {
      function e_33(e_34) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_34.adapter));
      }
      return (
        Object.defineProperty(e_33.prototype, "lang", {
          get: function () {
            return this.adapter.getStore().i18n_lang;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_33
      );
    })(),
    p_12 = (function () {
      function e_35(e_36) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_36.adapter));
      }
      return (
        Object.defineProperty(e_35.prototype, "header", {
          get: function () {
            return this.adapter.getStore().ui_header;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_35.prototype, "nav", {
          get: function () {
            return this.adapter.getStore().ui_nav;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_35.prototype, "footer", {
          get: function () {
            return this.adapter.getStore().ui_footer;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_35.prototype, "returnButton", {
          get: function () {
            var e_37 = this.adapter.getStore(),
              t_38 = e_37.ui_return,
              i_39 = e_37.header;
            return void 0 !== t_38 ? t_38 : !!(s_5 && c_6(i_39)) || void 0;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_35.prototype, "onReturn", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_40;
            if (!0 !== this.returnButton)
              return void console.warn("should not use onReturn when returnButton is false");
            null == (e_40 = o_4.onReturn) || e_40.call(o_4);
          },
        }),
        Object.defineProperty(e_35.prototype, "share", {
          get: function () {
            return this.adapter.getStore().ui_share;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_35.prototype, "theme", {
          get: function () {
            var e_41 = this.adapter.getStore().ui_theme;
            if ("string" != typeof e_41 || !1 !== ["normal", "light", "dark"].includes(e_41)) return e_41;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_35.prototype, "style", {
          get: function () {
            return this.adapter.getStore().ui_style;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_35
      );
    })(),
    x_13 = (function () {
      function e_42(e_43) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_43.adapter));
      }
      return (
        Object.defineProperty(e_42.prototype, "audio", {
          get: function () {
            return this.adapter.getStore().media_audio;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_42.prototype, "video", {
          get: function () {
            return this.adapter.getStore().media_video;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_42
      );
    })(),
    h_14 = (function () {
      function e_44(e_45) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_45.adapter));
      }
      return (
        Object.defineProperty(e_44.prototype, "accountSwitch", {
          get: function () {
            return this.adapter.getStore().func_accountSwitch;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_44.prototype, "downloadGuide", {
          get: function () {
            return this.adapter.getStore().func_downloadGuide;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_44
      );
    })(),
    y_15 = (function () {
      function e_46(e_47) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_47.adapter));
      }
      return (
        Object.defineProperty(e_46.prototype, "from", {
          get: function () {
            return this.adapter.getStore().source_from;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_46.prototype, "uid", {
          get: function () {
            return this.adapter.getStore().source_uid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_46
      );
    })(),
    m_16 = (function () {
      function e_48(e_49) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_49.adapter));
      }
      return (
        Object.defineProperty(e_48.prototype, "type", {
          get: function () {
            return this.adapter.getStore().share_type;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_48.prototype, "by", {
          get: function () {
            return this.adapter.getStore().share_by;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_48
      );
    })(),
    g_17 = (function () {
      function e_50(e_51) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_51.adapter));
      }
      return (
        Object.defineProperty(e_50.prototype, "webview", {
          get: function () {
            return this.adapter.getStore().ctr_webview;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_50.prototype, "orientation", {
          get: function () {
            var e_52 = this.adapter.getStore().ctr_orientation;
            if ("string" != typeof e_52 || !1 !== ["landscape", "portrait", "auto"].includes(e_52))
              return e_52;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_50
      );
    })(),
    v_18 = function (e_53) {},
    k_19 = (function () {
      function e_54(e_55) {
        (Object.defineProperty(this, "adapter", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: void 0,
        }),
          (this.adapter = e_55.adapter));
      }
      return (
        Object.defineProperty(e_54.prototype, "uid", {
          get: function () {
            return this.adapter.getStore().collect_uid;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_54.prototype, "phone", {
          get: function () {
            return this.adapter.getStore().collect_phone;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_54
      );
    })(),
    b_20 = function (e_56, t_57, i_58) {
      if (i_58 || 2 == arguments.length)
        for (var n_59, a_60 = 0, r_61 = t_57.length; a_60 < r_61; a_60++)
          (!n_59 && a_60 in t_57) ||
            (n_59 || (n_59 = Array.prototype.slice.call(t_57, 0, a_60)), (n_59[a_60] = t_57[a_60]));
      return e_56.concat(n_59 || Array.prototype.slice.call(t_57));
    },
    w_21 = new ((function () {
      function e_62() {
        (Object.defineProperty(this, "store", {
          enumerable: !0,
          configurable: !0,
          writable: !0,
          value: {},
        }),
          Object.defineProperty(this, "hideParamsInUrl", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "ignoreKeys", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: [],
          }),
          Object.defineProperty(this, "ignoreUserAgent", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "modifiers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: d_9,
          }),
          Object.defineProperty(this, "userAgentModifiers", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: A_10,
          }),
          Object.defineProperty(this, "params", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: n_1,
          }),
          Object.defineProperty(this, "extraParams", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "isInitialized", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: !1,
          }),
          Object.defineProperty(this, "ui", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "i18n", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "media", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "func", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "source", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "share", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "container", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "account", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }),
          Object.defineProperty(this, "collect", {
            enumerable: !0,
            configurable: !0,
            writable: !0,
            value: void 0,
          }));
      }
      return (
        Object.defineProperty(e_62.prototype, "init", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (e_63) {
            if (this.isInitialized) return void console.warn("adapter has already initialized");
            var t_64 = e_63 || {},
              i_65 = t_64.hideParamsInUrl,
              n_66 = t_64.ignoreKeys,
              a_67 = t_64.ignoreUserAgent,
              r_68 = t_64.extraParams,
              o_69 = void 0 === r_68 ? [] : r_68;
            ((this.hideParamsInUrl = i_65),
              (this.ignoreUserAgent = void 0 !== a_67 && a_67),
              (this.extraParams = o_69),
              (this.params = b_20(b_20([], this.params, !0), o_69, !0)),
              (this.ignoreKeys = n_66 || []),
              (this.userAgentModifiers = b_20([], this.userAgentModifiers, !0)),
              (this.ui = new p_12({
                adapter: this,
              })),
              (this.i18n = new f_11({
                adapter: this,
              })),
              (this.media = new x_13({
                adapter: this,
              })),
              (this.func = new h_14({
                adapter: this,
              })),
              (this.source = new y_15({
                adapter: this,
              })),
              (this.share = new m_16({
                adapter: this,
              })),
              (this.container = new g_17({
                adapter: this,
              })),
              (this.account = new v_18({
                adapter: this,
              })),
              (this.collect = new k_19({
                adapter: this,
              })),
              !1 === this.ignoreUserAgent && this.checkUA(),
              this.checkModifiers(),
              this.save(),
              this.hideParamsInUrl && this.clearQueries(),
              (this.isInitialized = !0));
          },
        }),
        Object.defineProperty(e_62.prototype, "isEmpty", {
          get: function () {
            return 0 === Object.keys(this.store).length;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_62.prototype, "validValues", {
          get: function () {
            var e_70 = this;
            return l_7().filter(function (t_71) {
              var i_72 = t_71.key;
              return (
                !e_70.ignoreKeys.includes(i_72) &&
                !1 !==
                  e_70.params.some(function (e_73) {
                    return e_73.key === i_72;
                  })
              );
            });
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_62.prototype, "getStore", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_74 = this;
            return (
              this.isEmpty && (this.store = this.getDataFromStorage()),
              this.params.forEach(function (t_75) {
                var i_76 = t_75.key,
                  n_77 = t_75.convertTo;
                n_77 &&
                  void 0 !== e_74.store[i_76] &&
                  (e_74.store[i_76] = (function (e_78, t_79) {
                    switch (e_78) {
                      case "boolean":
                        var i_80;
                        if (void 0 === t_79) return;
                        if ("1" === (i_80 = t_79) || 1 === i_80 || !0 === i_80 || "true" === i_80) return !0;
                        if (c_6(t_79)) return !1;
                        return;
                      case "number":
                        if (void 0 === t_79 || isNaN(+t_79)) return;
                        return +t_79;
                      default:
                        return t_79 + "";
                    }
                  })(n_77, e_74.store[i_76]));
              }),
              this.store
            );
          },
        }),
        Object.defineProperty(e_62.prototype, "clearAll", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            ((this.store = {}), this.clearStorage());
          },
        }),
        Object.defineProperty(e_62.prototype, "clearQueries", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_81 = "object" == typeof this.hideParamsInUrl ? this.hideParamsInUrl.replaceFunc : void 0,
              t_82 = this.validValues.map(function (e_84) {
                return e_84.key;
              }),
              i_83 = new URL(location.href);
            if (
              (t_82.forEach(function (e_85) {
                i_83.searchParams.delete(e_85);
              }),
              e_81)
            )
              return void e_81(i_83.href);
            window.history.replaceState({}, "", i_83.href);
          },
        }),
        Object.defineProperty(e_62.prototype, "getExtraParams", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_86 = this;
            return this.extraParams.reduce(function (t_87, i_88) {
              return ((t_87[i_88.key] = e_86.getStore()[i_88.key]), t_87);
            }, {});
          },
        }),
        Object.defineProperty(e_62.prototype, "setParam", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (e_89, t_90) {
            if (
              !1 ===
              this.params
                .map(function (e_92) {
                  return e_92.key;
                })
                .includes(e_89)
            )
              return void console.warn(
                "setParam's 1st parameter [key] is not in default params or extraParams when init",
              );
            var i_91 = new URL(location.href);
            (i_91.searchParams.has(e_89)
              ? i_91.searchParams.set(e_89, t_90 + "")
              : i_91.searchParams.append(e_89, t_90 + ""),
              window.history.replaceState({}, "", i_91.href),
              (this.store[e_89] = t_90),
              this.saveToStorage(this.store),
              this.hideParamsInUrl && this.clearQueries());
          },
        }),
        Object.defineProperty(e_62.prototype, "save", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_93 = this;
            (this.validValues.forEach(function (t_94) {
              var i_95 = t_94.key,
                n_96 = t_94.value;
              e_93.store[i_95] = n_96;
            }),
              !1 === this.isEmpty && this.saveToStorage(this.store));
          },
        }),
        Object.defineProperty(e_62.prototype, "getDataFromStorage", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            if (!this.hideParamsInUrl) return {};
            var e_97 = u_8(this.hideParamsInUrl),
              t_98 = e_97.storeKey,
              i_99 = e_97.storeType,
              n_100 = window[i_99].getItem(t_98);
            if (!n_100) return {};
            try {
              return JSON.parse(n_100);
            } catch (e_101) {
              return (this.clearStorage(), {});
            }
          },
        }),
        Object.defineProperty(e_62.prototype, "saveToStorage", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function (e_102) {
            if (!e_102 || !this.hideParamsInUrl) return !1;
            var t_103 = u_8(this.hideParamsInUrl),
              i_104 = t_103.storeKey,
              n_105 = t_103.storeType;
            return (window[n_105].setItem(i_104, JSON.stringify(e_102)), !0);
          },
        }),
        Object.defineProperty(e_62.prototype, "clearStorage", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            if (this.hideParamsInUrl) {
              var e_106 = u_8(this.hideParamsInUrl),
                t_107 = e_106.storeKey,
                i_108 = e_106.storeType;
              window[i_108].removeItem(t_107);
            }
          },
        }),
        Object.defineProperty(e_62.prototype, "checkModifiers", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_109 = this,
              t_110 = l_7().reduce(function (e_111, t_112) {
                return ((e_111[t_112.key] = t_112.value), e_111);
              }, {});
            this.modifiers.forEach(function (i_113) {
              var n_114 = i_113.enable,
                a_115 = i_113.modifiers;
              n_114 &&
                a_115.forEach(function (i_116) {
                  var n_117 = i_116.key,
                    a_118 = i_116.to,
                    r_119 = i_116.when;
                  (r_119 && !1 === r_119(t_110)) || (e_109.store[n_117] = a_118);
                });
            });
          },
        }),
        Object.defineProperty(e_62.prototype, "checkUA", {
          enumerable: !1,
          configurable: !0,
          writable: !0,
          value: function () {
            var e_120 = this;
            this.userAgentModifiers.forEach(function (t_121) {
              var i_122 = t_121.ua,
                n_123 = t_121.modifiers;
              navigator.userAgent.includes(i_122) &&
                n_123.forEach(function (t_124) {
                  var i_125 = t_124.key,
                    n_126 = t_124.to;
                  e_120.store[i_125] = n_126;
                });
            });
          },
        }),
        e_62
      );
    })())();
  let E_22 = w_21;
};
