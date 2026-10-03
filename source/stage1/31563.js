// call — module 31563 from 7349-5fc72e5aa1e8149a
// module 31563 from 7349-5fc72e5aa1e8149a.js
// deps: 68973, 11862, 53079, 15257, 0, 2, 6, 8147, 31489
const module_31563 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, {
      call: () => eA_63,
      checkInSklandApp: () => ix_187,
      default: () => iy_189,
      native: () => tn_115,
      navigation: () => ih_188,
    }));
  var n_1,
    a_2,
    r_3,
    o_4,
    s_5,
    c_6,
    l_7,
    u_8,
    d_9,
    A_10,
    f_11,
    p_12,
    x_13,
    h_14,
    y_15,
    m_16 = {};
  (webpackRequire.r(m_16),
    webpackRequire.d(m_16, {
      alertModal: () => t7_170,
      applyPermissions: () => t9_173,
      call: () => eA_63,
      canAutoImgShare: () => io_179,
      canIUse: () => ef_64,
      canVersion: () => ep_65,
      compareVersion: () => eJ_102,
      deInitList: () => tI_138,
      downloadApp: () => t1_165,
      emit: () => tT_151,
      getCache: () => eU_95,
      getCommonInfo: () => eZ_101,
      getGameAppInfo: () => iA_185,
      getPageInfo: () => e__100,
      getStorage: () => eL_92,
      getSystemInfo: () => eF_97,
      getUserInfo: () => eq_99,
      hasApp: () => iu_183,
      hideLoading: () => tX_156,
      off: () => tR_150,
      offLifecycle: () => tB_137,
      on: () => tj_149,
      onLifecycle: () => tE_136,
      openApp: () => t3_166,
      openAuthPage: () => tN_143,
      openGameApp: () => id_184,
      openGameCenter: () => ip_186,
      openPhoto: () => tP_144,
      openURL: () => tM_142,
      pop: () => tS_140,
      push: () => tC_139,
      readText: () => t8_172,
      ready: () => g_17,
      readyApp: () => t0_164,
      removeStorage: () => eY_94,
      schema: () => tD_141,
      setCache: () => eX_96,
      setNavbar: () => t2_167,
      setScreen: () => t4_168,
      setStatusBarStyle: () => t5_169,
      setStorage: () => ez_93,
      shareImage: () => tA_124,
      shareImg: () => td_123,
      shareLink: () => ty_129,
      shareQRCode: () => tg_131,
      showErrorToast: () => es_58,
      showLoading: () => tU_155,
      showToast: () => eo_57,
      uploadPhoto: () => tG_145,
      writeText: () => t6_171,
    }));
  var g_17 = function (e_190) {
      null == e_190 || e_190();
    },
    GryphlineWebSDKV180 = webpackRequire(68973),
    k_18 = {
      name: "@skland/one-bridge",
      version: "1.8.0",
    };
  let b_19 = new ((function () {
    function e_191() {}
    return (
      (e_191.prototype.log = function (e_192, t_193) {
        void 0 === t_193 && (t_193 = "info");
        var i_194 = "[".concat(k_18.name, ":").concat(k_18.version, "]"),
          n_195 = "[".concat(t_193.toUpperCase(), "]: ").concat(e_192);
        switch (t_193) {
          case "debug":
            console.debug(n_195);
            break;
          case "info":
            console.info(n_195);
            break;
          case "warn":
            console.warn(n_195);
            break;
          case "error":
            var a_196 = Error(n_195);
            ((a_196.name = i_194), console.error(a_196));
            break;
          default:
            console.log(n_195);
        }
      }),
      (e_191.prototype.info = function (e_197) {
        this.log(e_197, "info");
      }),
      (e_191.prototype.warn = function (e_198) {
        this.log(e_198, "warn");
      }),
      (e_191.prototype.error = function (e_199) {
        this.log(e_199, "error");
      }),
      e_191
    );
  })())();
  var w_20 = (function () {
      var e_200 = "https://assets.skland.com",
        t_201 = location.hostname.endsWith("skland.com")
          ? "prod"
          : location.hostname.includes("pre")
            ? "pre"
            : location.hostname.includes("staging")
              ? "staging"
              : location.hostname.includes("stable")
                ? "stable"
                : "prod";
      return (
        "prod" !== t_201 && (e_200 = "https://assets-skland-".concat(t_201, ".hypergryph.net")),
        "".concat(e_200).concat("/common-config/json/app-config.json")
      );
    })(),
    E_21 = !1,
    B_22 = !1,
    I_23 = !1;
  try {
    (null == navigator ? void 0 : navigator.product) === "ReactNative"
      ? (E_21 = !0)
      : (null == (n_1 = null == navigator ? void 0 : navigator.userAgent)
          ? void 0
          : n_1.includes("ReactNative")) && (E_21 = !0);
    var C_24 = null == (a_2 = null == navigator ? void 0 : navigator.userAgent) ? void 0 : a_2.toLowerCase();
    (null == C_24 ? void 0 : C_24.includes("skland")) && (B_22 = !0);
    try {
      document.createEvent("TouchEvent");
    } catch (e_202) {
      I_23 = !0;
    }
  } catch (e_203) {
    b_19.error(e_203.message);
  }
  var S_25 = !1,
    D_26 = !1,
    M_27 = !1,
    N_28 = -1,
    P_29 = !1,
    G_30 = -1,
    V_31 = "";
  try {
    var C_24 = null == (r_3 = null == navigator ? void 0 : navigator.userAgent) ? void 0 : r_3.toLowerCase();
    if (
      (/windows/i.test(C_24) && (S_25 = !0),
      /mac|iphone|ipad|ipod|ios|safari/i.test(C_24) && (D_26 = !0),
      /android|adr|linux|xiaomi/i.test(C_24) && ((P_29 = !0), (D_26 = !1)),
      D_26)
    ) {
      var O_32 = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
      (null == O_32 ? void 0 : O_32[1]) &&
        ((M_27 = 9 > Number.parseInt(O_32[1], 10)),
        (N_28 = Number.parseInt(O_32[1], 10)),
        isNaN(N_28) && (N_28 = -1));
    } else if (P_29) {
      var Q_33 = C_24.match(/android (.*?);/);
      ((null == Q_33 ? void 0 : Q_33[1]) && (G_30 = parseInt(Q_33[1])), isNaN(G_30) && (G_30 = -1));
    }
    var j_34 = null == C_24 ? void 0 : C_24.match(/skland\/([\d|.]+)/);
    j_34 && (V_31 = j_34[1]);
  } catch (e_204) {
    b_19.error(e_204.message);
  }
  var R_35 = !1,
    T_36 = !1,
    W_37 = !1,
    H_38 = !1,
    L_39 = !1,
    z_40 = !1;
  try {
    var C_24 = null == (o_4 = null == navigator ? void 0 : navigator.userAgent) ? void 0 : o_4.toLowerCase();
    ((/micromessenger/i.test(C_24) || void 0 !== (null == navigator ? void 0 : navigator.wxuserAgent)) &&
      (R_35 = !0),
      (T_36 = /weibo/i.test(C_24)),
      (W_37 = /baidu/i.test(C_24)),
      (H_38 = /qq/i.test(C_24)),
      (L_39 = /qqbrowser/i.test(C_24)),
      (z_40 = /qzone/i.test(C_24)),
      L_39 && (/qqtheme/i.test(C_24) ? ((H_38 = !0), (L_39 = !1)) : ((H_38 = !1), (L_39 = !0))));
  } catch (e_205) {
    b_19.error(e_205.message);
  }
  var Y_41 = !1,
    U_42 = !1,
    X_43 = !1;
  try {
    var C_24 = null == (s_5 = null == navigator ? void 0 : navigator.userAgent) ? void 0 : s_5.toLowerCase();
    (D_26 &&
      (C_24.indexOf("applewebkit") > -1 &&
        C_24.indexOf("version") > -1 &&
        C_24.indexOf("mobile") > -1 &&
        C_24.indexOf("safari") > -1 &&
        -1 === C_24.indexOf("linux") &&
        -1 === C_24.indexOf("android") &&
        -1 === C_24.indexOf("chrome") &&
        -1 === C_24.indexOf("ios") &&
        C_24.indexOf("browser"),
      navigator.vendor && "Apple Computer, Inc." === navigator.vendor && (X_43 = !0)),
      C_24.indexOf("firefox") > -1 && (U_42 = !0),
      C_24.indexOf("ubrowser") > -1 && (Y_41 = !0));
  } catch (e_206) {
    b_19.error(e_206.message);
  }
  var F_44 = !1;
  try {
    new URLSearchParams(location.search).get("isDownload") && (F_44 = !0);
  } catch (e_207) {
    b_19.error(e_207.message);
  }
  var K_45 = function (e_208) {
      void 0 === e_208 && (e_208 = "");
      var t_209 = e_208.match(/(\d+)\.(\d+)\.(\d+)/);
      if (t_209) return t_209.slice(1, 4);
    },
    q_46 = function (e_210, t_211) {
      var i_212 = K_45(e_210),
        n_213 = K_45(t_211);
      return (
        !!i_212 &&
        (!n_213 ||
          +""
            .concat([, , ,].fill(0).join("").slice(i_212[0].length, 3))
            .concat(i_212[0])
            .concat([, , ,].fill(0).join("").slice(i_212[1].length, 3))
            .concat(i_212[1])
            .concat([, ,].fill(0).join("").slice(i_212[2].length, 2))
            .concat(i_212[2]) >=
            +""
              .concat([, , ,].fill(0).join("").slice(n_213[0].length, 3))
              .concat(n_213[0])
              .concat([, , ,].fill(0).join("").slice(n_213[1].length, 3))
              .concat(n_213[1])
              .concat([, ,].fill(0).join("").slice(n_213[2].length, 2))
              .concat(n_213[2]))
      );
    },
    __47 = {
      SKPage_userInfo: {
        version: {
          android: "1.7.0",
          ios: "1.7.0",
        },
        apiName: ["getUserInfo"],
        ignoreToast: !0,
      },
      SKPage_pageInfo: {
        version: {
          android: "1.0.0",
          ios: "1.0.0",
        },
        apiName: ["getPageInfo"],
        ignoreToast: !1,
      },
      SKPage_pop: {
        version: {
          android: "1.0.0",
          ios: "1.0.0",
        },
        apiName: ["pop"],
        ignoreToast: !1,
      },
      SKPage_lifeCycle: {
        version: {
          android: "1.7.0",
          ios: "1.7.0",
        },
        apiName: ["onLifecycle", "offLifecycle"],
        ignoreToast: !0,
      },
      SKNavigation_dispatch: {
        version: {
          android: "1.0.0",
          ios: "1.0.0",
        },
        apiName: ["schema"],
        ignoreToast: !1,
      },
      SKNavigation_openURL: {
        version: {
          android: "1.8.0",
          ios: "1.8.0",
        },
        apiName: ["openURL"],
        ignoreToast: !1,
      },
      SKNavigation_openAuthenticationPage: {
        version: {
          android: "1.28.0",
          ios: "1.28.0",
        },
        apiName: ["openAuthPage"],
        ignoreToast: !1,
      },
      SKNavigation_openGame: {
        version: {
          android: "1.36.0",
          ios: "1.36.0",
        },
        apiName: ["openGame"],
        ignoreToast: !1,
      },
      SKNavigation_isAppInstalled: {
        version: {
          android: "1.36.0",
        },
        apiName: ["hasApp"],
        ignoreToast: !1,
      },
      SKGame_getChannels: {
        version: {
          android: "1.37.0",
        },
        apiName: ["getGameAppInfo"],
        ignoreToast: !1,
      },
      SKShare_shareImg: {
        version: {
          android: "1.4.0",
          ios: "1.4.0",
        },
        apiName: ["shareImg", "shareImage"],
        ignoreToast: !1,
      },
      SKShare_shareLink: {
        version: {
          android: "1.8.0",
          ios: "1.8.0",
        },
        apiName: ["shareLink"],
        ignoreToast: !1,
      },
      SKHandle_handleNavBar: {
        version: {
          android: "1.10.0",
          ios: "1.10.0",
        },
        apiName: ["setNavbar"],
        ignoreToast: !1,
      },
      SKHandle_handleOrientation: {
        version: {
          android: "1.10.0",
          ios: "1.10.0",
        },
        apiName: ["setScreen"],
        ignoreToast: !1,
      },
      SKHandle_handleStatusBarAppearance: {
        version: {
          android: "1.12.0",
          ios: "1.12.0",
        },
        apiName: ["setStatusBarStyle"],
        ignoreToast: !0,
      },
      SKNavigation_openGallery: {
        version: {
          android: "1.14.0",
          ios: "1.14.0",
        },
        apiName: ["openPhoto"],
        ignoreToast: !1,
      },
      SKNetwork_executeUpload: {
        version: {
          android: "1.14.0",
          ios: "1.14.0",
        },
        apiName: ["uploadPhoto"],
        ignoreToast: !1,
      },
      SKMessage_register: {
        version: {
          android: "1.14.0",
          ios: "1.14.0",
        },
        apiName: ["on"],
        ignoreToast: !1,
      },
      SKMessage_unregister: {
        version: {
          android: "1.14.0",
          ios: "1.14.0",
        },
        apiName: ["off"],
        ignoreToast: !1,
      },
      SKMessage_sendMessage: {
        version: {
          android: "1.14.0",
          ios: "1.14.0",
        },
        apiName: ["emit"],
        ignoreToast: !1,
      },
      SKModal_alert: {
        version: {
          android: "1.21.0",
          ios: "1.21.0",
        },
        apiName: ["alertModal"],
        ignoreToast: !1,
      },
      SKPermission_applyPermissions: {
        version: {
          android: "1.26.0",
          ios: "1.27.0",
        },
        apiName: ["applyPermissions"],
        ignoreToast: !0,
      },
    },
    Z_48 = {};
  Object.values(__47).forEach(function (e_214) {
    (e_214.apiName || []).forEach(function (t_215) {
      Z_48[t_215] = e_214;
    });
  });
  var J_49 = null,
    $_50 = null,
    ee_51 = !1,
    et_52 = null,
    ei_53 =
      "\n  position: fixed;\n  left: 50%;\n  transform: translateX(-50%);\n\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n\n  z-index: 100000;\n",
    en_54 = "\n  "
      .concat(
        ei_53,
        "\n  bottom: 20%;\n  height: 40px;\n  padding: 0 18px;\n  border-radius: 6px;\n  background-color: #6b6b6b;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 18px;\n  color: #fff;\n\n  transition: opacity ",
      )
      .concat(320, "ms ease-in-out;\n  opacity: 0;\n"),
    ea_55 = "\n  "
      .concat(
        ei_53,
        "\n  top: 108px;\n  max-width: 708px;\n  height: 44px;\n  padding: 12px 16px;\n  border-radius: 12px;\n  background-color: #6b6b6b;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 20px;\n  letter-spacing: 0.4px;\n  color: #fff;\n\n  transition: all ",
      )
      .concat(
        320,
        "ms cubic-bezier(0.78, 0.14, 0.15, 0.86);\n  transform: translateX(-50%) translateY(-10px);\n  opacity: 0;\n",
      ),
    er_56 = I_23 ? ea_55 : en_54,
    eo_57 = function (e_216, t_217, i_218) {
      if ((void 0 === t_217 && (t_217 = 2e3), e_216)) {
        if (E_21) return void b_19.error("showToast is not support RN Env");
        (J_49
          ? (J_49.setAttribute("style", er_56), (c_6.innerText = e_216))
          : ((J_49 = document.createElement("div")),
            (c_6 = document.createElement("span")).setAttribute(
              "style",
              "overflow: hidden; white-space: nowrap; text-overflow: ellipsis;",
            ),
            (c_6.innerText = e_216),
            J_49.appendChild(c_6),
            J_49.setAttribute("style", er_56)),
          ee_51 && (eu_61(J_49), et_52 && clearTimeout(et_52)),
          i_218 &&
            (($_50 = document.createElement("div")).style.setProperty(
              "background-image",
              'url("'.concat(
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 18 18' fill='none'%3E%3Ccircle cx='9' cy='9' r='8' fill='%23FF6647'/%3E%3Crect width='1.5' height='5' rx='.75' transform='matrix(1 0 0 -1 8.25 13)' fill='%23fff'/%3E%3Ccircle cx='.75' cy='.75' r='.75' transform='matrix(1 0 0 -1 8.25 6.5)' fill='%23fff'/%3E%3C/svg%3E",
                '")',
              ),
            ),
            $_50.style.setProperty("width", "18px"),
            $_50.style.setProperty("height", "18px"),
            $_50.style.setProperty("margin-right", "8px"),
            J_49.insertBefore($_50, c_6)),
          (ee_51 = !0),
          document.body.appendChild(J_49),
          (et_52 = setTimeout(function () {
            (ec_59(J_49),
              (et_52 = setTimeout(function () {
                (el_60(J_49),
                  (et_52 = setTimeout(function () {
                    (null == J_49 || J_49.remove(), eu_61(J_49));
                  }, 320)));
              }, t_217 + 320)));
          }, 0)));
      }
    },
    es_58 = function (e_219, t_220) {
      return eo_57(e_219, t_220, "error");
    },
    ec_59 = function (e_221) {
      var t_222;
      if (e_221)
        if (I_23) ((e_221.style.opacity = "1"), (e_221.style.transform = "translateX(-50%) translateY(0px)"));
        else {
          var i_223 = (null == (t_222 = window.visualViewport) ? void 0 : t_222.height) || window.innerHeight,
            n_224 = e_221.getBoundingClientRect().top;
          (n_224 > i_223 - 80 &&
            (e_221.style.transform = "translateX(-50%) translateY(-".concat(n_224 - i_223 + 80, "px)")),
            (e_221.style.opacity = "1"));
        }
    },
    el_60 = function (e_225) {
      e_225 && (e_225.style.opacity = "0");
    },
    eu_61 = function (e_226) {
      e_226 && (null == e_226 || e_226.setAttribute("style", er_56), $_50 && ($_50.remove(), ($_50 = null)));
    },
    ed_62 = function (e_227, t_228) {
      return function (i_229, n_230) {
        try {
          var a_231 = {};
          if (n_230 && "string" == typeof n_230)
            try {
              ((n_230 = JSON.parse(n_230)).code && (n_230.code = Number(n_230.code)),
                Object.assign(a_231, n_230));
            } catch (e_232) {}
          i_229 && "string" == typeof i_229 && ((i_229 = JSON.parse(i_229)), Object.assign(a_231, i_229));
          try {
            null == t_228 || t_228(a_231);
          } catch (e_233) {
            b_19.error(e_233.message);
          }
          return a_231;
        } catch (t_234) {
          b_19.error("bridge api(".concat(e_227, ") json parse fail"));
        }
        return null;
      };
    },
    eA_63 = function (e_235, t_236, i_237, n_238) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var a_239, r_240, o_241, s_242, c_243;
        return (0, GryphlineWebSDKV180.YH)(this, function (l_244) {
          if (
            !ef_64(
              (null ==
              (c_243 =
                null == (r_240 = __47[(a_239 = "".concat(e_235, "_").concat(t_236))])
                  ? void 0
                  : r_240.apiName)
                ? void 0
                : c_243[0]) || "",
              !0,
            )
          )
            return [2, Promise.resolve(void 0)];
          if (!tn_115.callbackIdMap[a_239])
            return (
              (s_242 = ed_62(a_239)),
              [
                2,
                new Promise(function (n_245) {
                  tn_115.postMessage(e_235, t_236, i_237, function (e_246, t_247) {
                    var i_248 = s_242(e_246, t_247);
                    null === i_248 ? n_245(e_246) : n_245(i_248);
                  });
                }),
              ]
            );
          if ("function" != typeof i_237)
            throw Error("bridge api(".concat(a_239, ") params is not function"));
          return (
            (o_241 = ed_62(a_239, i_237)),
            tn_115.postMessage(e_235, t_236, (0, GryphlineWebSDKV180.Cl)({}, n_238), o_241),
            [2, Promise.resolve(void 0)]
          );
        });
      });
    },
    ef_64 = function (e_249, t_250) {
      if (B_22) {
        var i_251 = Z_48[e_249];
        if (!i_251)
          return (
            t_250 && eo_57("当前功能暂不支持，请联系客服人员反馈"),
            b_19.error("unknown bridge api(".concat(e_249, ")")),
            !1
          );
        var n_252 = i_251.version,
          a_253 = i_251.ignoreToast,
          r_254 = void 0;
        return (D_26 && (r_254 = n_252.ios), P_29 && (r_254 = n_252.android), r_254)
          ? !!q_46(V_31, r_254) ||
              (t_250 && !a_253 && eo_57("当前版本过低，请前往【设置-关于森空岛】检查更新"), !1)
          : (eo_57("当前功能暂不支持在当前系统上运行"), !1);
      }
      return !E_21 || (b_19.error("unknown bridge api(".concat(e_249, ")")), !1);
    },
    ep_65 = function (e_255) {
      return q_46(V_31, e_255);
    },
    ex_66 = webpackRequire(11862).hp;
  let eh_67 = "function" == typeof ex_66,
    ey_68 =
      ("function" == typeof TextDecoder && new TextDecoder(),
      "function" == typeof TextEncoder ? new TextEncoder() : void 0),
    em_69 = Array.prototype.slice.call("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/="),
    eg_70 = ((e_256) => {
      let t_257 = {};
      return (e_256.forEach((e_258, i_259) => (t_257[e_258] = i_259)), t_257);
    })(em_69),
    ev_71 = /^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/,
    ek_72 = String.fromCharCode.bind(String),
    eb_73 =
      "function" == typeof Uint8Array.from
        ? Uint8Array.from.bind(Uint8Array)
        : (e_260) => new Uint8Array(Array.prototype.slice.call(e_260, 0)),
    ew_74 = (e_261) => e_261.replace(/=/g, "").replace(/[+\/]/g, (e_262) => ("+" == e_262 ? "-" : "_")),
    eE_75 = (e_263) => e_263.replace(/[^A-Za-z0-9\+\/]/g, ""),
    eB_76 =
      "function" == typeof btoa
        ? (e_264) => btoa(e_264)
        : eh_67
          ? (e_265) => ex_66.from(e_265, "binary").toString("base64")
          : (e_266) => {
              let t_267,
                i_268,
                n_269,
                a_270,
                r_271 = "",
                o_272 = e_266.length % 3;
              for (let o_273 = 0; o_273 < e_266.length;) {
                if (
                  (i_268 = e_266.charCodeAt(o_273++)) > 255 ||
                  (n_269 = e_266.charCodeAt(o_273++)) > 255 ||
                  (a_270 = e_266.charCodeAt(o_273++)) > 255
                )
                  throw TypeError("invalid character found");
                r_271 +=
                  em_69[((t_267 = (i_268 << 16) | (n_269 << 8) | a_270) >> 18) & 63] +
                  em_69[(t_267 >> 12) & 63] +
                  em_69[(t_267 >> 6) & 63] +
                  em_69[63 & t_267];
              }
              return o_272 ? r_271.slice(0, o_272 - 3) + "===".substring(o_272) : r_271;
            },
    eI_77 = eh_67
      ? (e_274) => ex_66.from(e_274).toString("base64")
      : (e_275) => {
          let t_276 = [];
          for (let i_277 = 0, n_278 = e_275.length; i_277 < n_278; i_277 += 4096)
            t_276.push(ek_72.apply(null, e_275.subarray(i_277, i_277 + 4096)));
          return eB_76(t_276.join(""));
        },
    eC_78 = (e_279) => {
      if (e_279.length < 2) {
        var t_280 = e_279.charCodeAt(0);
        return t_280 < 128
          ? e_279
          : t_280 < 2048
            ? ek_72(192 | (t_280 >>> 6)) + ek_72(128 | (63 & t_280))
            : ek_72(224 | ((t_280 >>> 12) & 15)) +
              ek_72(128 | ((t_280 >>> 6) & 63)) +
              ek_72(128 | (63 & t_280));
      }
      var t_280 = 65536 + (e_279.charCodeAt(0) - 55296) * 1024 + (e_279.charCodeAt(1) - 56320);
      return (
        ek_72(240 | ((t_280 >>> 18) & 7)) +
        ek_72(128 | ((t_280 >>> 12) & 63)) +
        ek_72(128 | ((t_280 >>> 6) & 63)) +
        ek_72(128 | (63 & t_280))
      );
    },
    eS_79 = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g,
    eD_80 = (e_281) => e_281.replace(eS_79, eC_78),
    eM_81 = eh_67
      ? (e_282) => ex_66.from(e_282, "utf8").toString("base64")
      : ey_68
        ? (e_283) => eI_77(ey_68.encode(e_283))
        : (e_284) => eB_76(eD_80(e_284)),
    eN_82 = (e_285, t_286 = !1) => (t_286 ? ew_74(eM_81(e_285)) : eM_81(e_285)),
    eP_83 = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g,
    eG_84 = (e_287) => {
      switch (e_287.length) {
        case 4:
          var t_288 =
            (((7 & e_287.charCodeAt(0)) << 18) |
              ((63 & e_287.charCodeAt(1)) << 12) |
              ((63 & e_287.charCodeAt(2)) << 6) |
              (63 & e_287.charCodeAt(3))) -
            65536;
          return ek_72((t_288 >>> 10) + 55296) + ek_72((1023 & t_288) + 56320);
        case 3:
          return ek_72(
            ((15 & e_287.charCodeAt(0)) << 12) |
              ((63 & e_287.charCodeAt(1)) << 6) |
              (63 & e_287.charCodeAt(2)),
          );
        default:
          return ek_72(((31 & e_287.charCodeAt(0)) << 6) | (63 & e_287.charCodeAt(1)));
      }
    },
    eV_85 =
      "function" == typeof atob
        ? (e_289) => atob(eE_75(e_289))
        : eh_67
          ? (e_290) => ex_66.from(e_290, "base64").toString("binary")
          : (e_291) => {
              if (((e_291 = e_291.replace(/\s+/g, "")), !ev_71.test(e_291)))
                throw TypeError("malformed base64.");
              e_291 += "==".slice(2 - (3 & e_291.length));
              let t_292,
                i_293 = "",
                n_294,
                a_295;
              for (let r_296 = 0; r_296 < e_291.length;)
                ((t_292 =
                  (eg_70[e_291.charAt(r_296++)] << 18) |
                  (eg_70[e_291.charAt(r_296++)] << 12) |
                  ((n_294 = eg_70[e_291.charAt(r_296++)]) << 6) |
                  (a_295 = eg_70[e_291.charAt(r_296++)])),
                  (i_293 +=
                    64 === n_294
                      ? ek_72((t_292 >> 16) & 255)
                      : 64 === a_295
                        ? ek_72((t_292 >> 16) & 255, (t_292 >> 8) & 255)
                        : ek_72((t_292 >> 16) & 255, (t_292 >> 8) & 255, 255 & t_292)));
              return i_293;
            };
  var eO_86 = function (e_297) {
      return new Promise(function (t_298) {
        setTimeout(function () {
          t_298(void 0);
        }, e_297);
      });
    },
    eQ_87 = function (e_299) {
      for (
        var t_300 = eN_82(e_299),
          i_301 = "1a8df8bcb5bb81d412de4b64c77dc8f8".slice(0, 18 - t_300.length - 1).toLocaleUpperCase(),
          n_302 = "",
          a_303 = 0;
        a_303 < i_301.length;
        a_303++
      )
        ((n_302 += t_300[a_303] || ""), (n_302 += i_301[a_303] || ""));
      return ((n_302 += "="), i_301.length < t_300.length && (n_302 += t_300.slice(i_301.length)), n_302);
    },
    ej_88 = function (e_304) {
      return new URLSearchParams(location.search).get(e_304);
    },
    eR_89 = "0" !== ej_88("header");
  B_22 && (eR_89 = !1);
  var eT_90 = "landscape" === ej_88("ctr_orientation");
  B_22 && (eT_90 = !1);
  var dayjs = webpackRequire(53079),
    eH_91 = webpackRequire.n(dayjs)()().format("YYYYMMDD"),
    eL_92 = function (e_305, t_306) {
      void 0 === t_306 && (t_306 = !0);
      var i_307 = "".concat(eH_91, ":").concat(location.pathname);
      t_306 || (i_307 = location.pathname);
      var n_308 = localStorage.getItem("".concat(i_307, "@").concat(e_305));
      if (n_308)
        try {
          n_308 = JSON.parse(n_308);
        } catch (e_309) {
          console.error("[one-bridge getStorage]: jsonParse failed");
        }
      return n_308;
    },
    ez_93 = function (e_310, t_311, i_312) {
      void 0 === i_312 && (i_312 = !0);
      var n_313 = "".concat(eH_91, ":").concat(location.pathname);
      i_312 || (n_313 = location.pathname);
      try {
        t_311 = JSON.stringify(t_311);
      } catch (e_314) {
        console.error("[one-bridge setStorage]: jsonStringify failed");
        return;
      }
      localStorage.setItem("".concat(n_313, "@").concat(e_310), t_311);
    },
    eY_94 = function (e_315, t_316) {
      void 0 === t_316 && (t_316 = !0);
      var i_317 = "".concat(eH_91, ":").concat(location.pathname);
      (t_316 || (i_317 = location.pathname), localStorage.removeItem("".concat(i_317, "@").concat(e_315)));
    },
    eU_95 = function (e_318) {
      var t_319 = "".concat(location.pathname),
        i_320 = sessionStorage.getItem("".concat(t_319, "@").concat(e_318));
      if (i_320)
        try {
          i_320 = JSON.parse(i_320);
        } catch (e_321) {
          console.error("[one-bridge getStorage]: jsonParse failed");
        }
      return i_320;
    },
    eX_96 = function (e_322, t_323) {
      var i_324 = "".concat(location.pathname);
      try {
        t_323 = JSON.stringify(t_323);
      } catch (e_325) {
        console.error("[one-bridge setStorage]: jsonStringify failed");
        return;
      }
      sessionStorage.setItem("".concat(i_324, "@").concat(e_322), t_323);
    },
    eF_97 = function () {
      return {
        isIOS: D_26,
        isAndroid: P_29,
        isApp: B_22,
        appVersion: V_31,
        isRN: E_21,
        isSafari: X_43,
        isWeChat: R_35,
        isMobile: D_26 || P_29,
        isPC: I_23,
        version: {
          app: V_31,
          ios: N_28,
          android: G_30,
        },
      };
    },
    eK_98 = null,
    eq_99 = function () {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var e_326;
        return (0, GryphlineWebSDKV180.YH)(this, function (t_327) {
          switch (t_327.label) {
            case 0:
              if (eK_98) return [2, eK_98];
              return [4, eA_63("SKPage", "userInfo")];
            case 1:
              return (0 === (e_326 = t_327.sent()).code && (eK_98 = e_326), [2, e_326]);
          }
        });
      });
    },
    e__100 = function (e_328) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_329, i_330, n_331, a_332;
        return (0, GryphlineWebSDKV180.YH)(this, function (r_333) {
          switch (r_333.label) {
            case 0:
              if (!e_328 && (t_329 = eU_95("pageInfo"))) return [2, t_329];
              return [4, eA_63("SKPage", "pageInfo")];
            case 1:
              return (
                0 === (i_330 = r_333.sent()).code &&
                  ((n_331 = i_330.top),
                  (a_332 = i_330.status_bar_height),
                  (i_330.top = Math.max(n_331, a_332)),
                  e_328 || eX_96("pageInfo", i_330)),
                [2, i_330]
              );
          }
        });
      });
    },
    eZ_101 = function () {
      return {
        isHeader: eR_89,
        isLandscape: eT_90,
      };
    },
    eJ_102 = function (e_334) {
      var t_335 = eF_97().version.app,
        i_336 = /^(\d+)\.(\d+)\.(\d+)$/,
        n_337 = t_335.match(i_336),
        a_338 = e_334.match(i_336);
      if (!n_337 || !a_338) throw Error("错误的版本号格式");
      var r_339 = 1e6 * n_337[1] + 1e3 * n_337[2] + +n_337[3],
        o_340 = 1e6 * a_338[1] + 1e3 * a_338[2] + +a_338[3];
      return r_339 < o_340 ? -1 : +(r_339 > o_340);
    },
    vendorBundleCryptoJsAESHtml2canvasIdb = webpackRequire(15257),
    vendorBundleCryptoJsAESHtml2canvasIdbDefault = webpackRequire.n(vendorBundleCryptoJsAESHtml2canvasIdb),
    e1_103 = function (e_341) {
      void 0 === e_341 && (e_341 = 16);
      for (
        var t_342 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          i_343 = t_342.length,
          n_344 = "",
          a_345 = 0;
        a_345 < e_341;
        a_345++
      )
        n_344 += t_342[Math.floor(Math.random() * i_343)];
      return n_344;
    };
  if (
    (window.skland ||
      (window.skland = {
        voidCallbackId: e1_103(8),
      }),
    window.skland.callbackMap || (window.skland.callbackMap = new Map()),
    !window.skland.callbackIdMap)
  ) {
    var e3_104 = e1_103(8);
    window.skland.callbackIdMap = {
      SKPage_lifeCycle: e1_103(8),
      SKMessage_register: e3_104,
      SKMessage_unregister: e3_104,
    };
  }
  var e2_105 = (function () {
      function e_346() {
        var e_347 = this;
        ((this.setCallback = function (t_348, i_349) {
          return (void 0 === i_349 && (i_349 = e1_103(8)), e_347.callbackMap.set(i_349, t_348), i_349);
        }),
          (this.callback = function (t_350) {
            for (var i_351 = [], n_352 = 1; n_352 < arguments.length; n_352++)
              i_351[n_352 - 1] = arguments[n_352];
            if (t_350 !== e_347.voidCallbackId) {
              if (!e_347.callbackMap.has(t_350))
                return void b_19.log("callbackId[".concat(t_350, "] is not exist"), "error");
              var a_353 = e_347.callbackMap.get(t_350);
              (null == a_353 ||
                a_353.apply(void 0, (0, GryphlineWebSDKV180.fX)([], (0, GryphlineWebSDKV180.zs)(i_351), !1)),
                Object.values(e_347.callbackIdMap).some(function (e_354) {
                  return e_354 === t_350;
                }) || e_347.callbackMap.delete(t_350));
            }
          }),
          (this.postMessage = function (t_355, i_356, n_357, a_358) {
            try {
              var r_359 = e_347.voidCallbackId;
              if (a_358) {
                var o_360 = "".concat(t_355, "_").concat(i_356);
                ((r_359 = e_347.callbackIdMap[o_360] || e1_103(8)), e_347.callbackMap.set(r_359, a_358));
              }
              e_347.getCallHandler(t_355, i_356)(r_359, n_357);
            } catch (e_361) {
              a_358 && a_358(e_361, null);
            }
          }),
          window.skland.callBack || (window.skland.callBack = this.callback));
      }
      return (
        Object.defineProperty(e_346.prototype, "callbackIdMap", {
          get: function () {
            return window.skland.callbackIdMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_346.prototype, "voidCallbackId", {
          get: function () {
            return window.skland.voidCallbackId;
          },
          enumerable: !1,
          configurable: !0,
        }),
        Object.defineProperty(e_346.prototype, "callbackMap", {
          get: function () {
            return window.skland.callbackMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        e_346
      );
    })(),
    e4_106 = (function (e_362) {
      function t_363() {
        return (null !== e_362 && e_362.apply(this, arguments)) || this;
      }
      return (
        (0, GryphlineWebSDKV180.C6)(t_363, e_362),
        (t_363.prototype.getCallHandler = function (e_364, t_365) {
          var i_366,
            n_367 =
              (null == (i_366 = null == window ? void 0 : window[e_364]) ? void 0 : i_366[t_365]) || null;
          if (!n_367) throw Error("no bridge api[".concat(e_364, ".").concat(t_365, "]"));
          return (
            (n_367 = n_367.bind(window[e_364])),
            function (e_368, t_369) {
              (t_369 && "string" != typeof t_369 && (t_369 = JSON.stringify(t_369)),
                n_367(t_369 || void 0, e_368));
            }
          );
        }),
        t_363
      );
    })(e2_105),
    e5_107 = (function (e_370) {
      function t_371() {
        return (null !== e_370 && e_370.apply(this, arguments)) || this;
      }
      return (
        (0, GryphlineWebSDKV180.C6)(t_371, e_370),
        (t_371.prototype.getCallHandler = function (e_372, t_373) {
          var i_374,
            n_375,
            a_376,
            r_377 =
              null ==
              (a_376 =
                null ==
                (n_375 =
                  null == (i_374 = null == window ? void 0 : window.webkit) ? void 0 : i_374.messageHandlers)
                  ? void 0
                  : n_375.jsToNativeChannel)
                ? void 0
                : a_376.postMessage;
          if (!r_377) throw Error("no bridge api");
          return (
            (r_377 = r_377.bind(window.webkit.messageHandlers.jsToNativeChannel)),
            function (i_378, n_379) {
              var a_380 = JSON.stringify({
                target: e_372,
                method: t_373,
                params: n_379 ? JSON.stringify(n_379) : void 0,
                callBack: i_378,
              });
              r_377(a_380);
            }
          );
        }),
        t_371
      );
    })(e2_105),
    e7_108 = (function (e_381) {
      function t_382() {
        return (null !== e_381 && e_381.apply(this, arguments)) || this;
      }
      return (
        (0, GryphlineWebSDKV180.C6)(t_382, e_381),
        (t_382.prototype.getCallHandler = function (e_383, t_384) {
          return function (e_385, t_386) {};
        }),
        t_382
      );
    })(e2_105),
    e6_109 = null,
    e8_110 = !1,
    e9_111 = null,
    te_112 = function (e_387, t_388) {
      (void 0 === t_388 && (t_388 = 1500),
        e_387 &&
          (e6_109
            ? (l_7.innerText = e_387)
            : ((e6_109 = document.createElement("div")),
              ((l_7 = document.createElement("span")).innerText = e_387),
              e6_109.appendChild(l_7),
              e6_109.setAttribute(
                "style",
                "\n          position: fixed;\n          left: 50%;\n          bottom: 20%;\n          height: 40px;\n          padding: 0 18px;\n          border-radius: 6px;\n          display: inline-flex;\n          align-items: center;\n          justify-content: center;\n          background-color: #6b6b6b;\n          font-weight: 400;\n          font-size: 14px;\n          line-height: 18px;\n          color: #fff;\n          overflow: hidden;\n          white-space: nowrap;\n          z-index: 100000;\n          transform: translateX(-50%);\n          transition: all 0.4s ease-in-out;\n          opacity: 0;\n      ",
              )),
          e8_110 && (null == e6_109 || (e6_109.style.opacity = 0), e9_111 && clearTimeout(e9_111)),
          (e8_110 = !0),
          document.body.appendChild(e6_109),
          (e9_111 = setTimeout(function () {
            (null == e6_109 || (e6_109.style.opacity = 1),
              (e9_111 = setTimeout(function () {
                (null == e6_109 || (e6_109.style.opacity = 0),
                  (e9_111 = setTimeout(function () {
                    null == e6_109 || e6_109.remove();
                  }, 400)));
              }, t_388 + 400)));
          }, 0))));
    },
    tt_113 = {
      SKPage: {
        userInfo: function () {
          throw Error("SKPage_userInfo is not defined");
        },
        pageInfo: function () {
          return {
            screen_width: window.innerWidth,
            screen_height: window.innerHeight,
            has_navigation_bar: !1,
            navigation_bar_height: 0,
            status_bar_height: 0,
            top: 0,
            left: 0,
            bottom: 0,
            right: 0,
          };
        },
        pop: function () {},
        lifeCycle: function () {},
      },
      SKNavigation: {
        dispatch: function (e_389) {},
        openURL: function (e_390) {},
      },
      SKShare: {
        shareImg: function (e_391) {},
      },
      SKHandle: {
        handleNavBar: function () {},
        handleOrientation: function () {},
      },
      web: {
        showToast: function (e_392) {
          te_112(e_392.text, e_392.timeout);
        },
      },
    },
    ti_114 = (function (e_393) {
      function t_394() {
        return (null !== e_393 && e_393.apply(this, arguments)) || this;
      }
      return (
        (0, GryphlineWebSDKV180.C6)(t_394, e_393),
        (t_394.prototype.getCallHandler = function (e_395, t_396) {
          var i_397,
            n_398 = this,
            a_399 =
              (null == (i_397 = null == tt_113 ? void 0 : tt_113[e_395]) ? void 0 : i_397[t_396]) || null;
          if (!a_399) throw Error("no bridge api[".concat(e_395, ".").concat(t_396, "]"));
          return (
            (a_399 = a_399.bind(tt_113[e_395])),
            function (e_400, t_401) {
              return (0, GryphlineWebSDKV180.sH)(n_398, void 0, void 0, function () {
                var i_402;
                return (0, GryphlineWebSDKV180.YH)(this, function (n_403) {
                  switch (n_403.label) {
                    case 0:
                      return [4, a_399(t_401)];
                    case 1:
                      return ((i_402 = n_403.sent()), [2, this.callback(e_400, JSON.stringify(i_402))]);
                  }
                });
              });
            }
          );
        }),
        t_394
      );
    })(e2_105),
    tn_115 = new ((function () {
      function e_404() {
        E_21
          ? (this.platformNative = new e7_108())
          : B_22
            ? D_26
              ? (this.platformNative = new e5_107())
              : P_29
                ? (this.platformNative = new e4_106())
                : (this.platformNative = new ti_114())
            : (this.platformNative = new ti_114());
      }
      return (
        Object.defineProperty(e_404.prototype, "callbackIdMap", {
          get: function () {
            return this.platformNative.callbackIdMap;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e_404.prototype.postMessage = function (e_405, t_406, i_407, n_408) {
          this.platformNative.postMessage(e_405, t_406, i_407, n_408);
        }),
        (e_404.prototype.setCallback = function (e_409, t_410) {
          return this.platformNative.setCallback(e_409, t_410);
        }),
        e_404
      );
    })())(),
    ta_116 = {
      title: "森空岛-鹰角网络官方社区",
      description:
        "为明日方舟、来自星尘、明日方舟：终末地等游戏玩家提供官方资讯、玩家讨论、游戏攻略、同人衍生、游戏工具等",
    };
  (!(function (e_411) {
    var t_412 = (function () {
      function t_417(e_418, i_419, n_420, r_421) {
        if (
          ((this.version = e_418),
          (this.errorCorrectionLevel = i_419),
          (this.modules = []),
          (this.isFunction = []),
          e_418 < t_417.MIN_VERSION || e_418 > t_417.MAX_VERSION)
        )
          throw RangeError("Version value out of range");
        if (r_421 < -1 || r_421 > 7) throw RangeError("Mask value out of range");
        this.size = 4 * e_418 + 17;
        for (var o_422 = [], s_423 = 0; s_423 < this.size; s_423++) o_422.push(!1);
        for (var s_423 = 0; s_423 < this.size; s_423++)
          (this.modules.push(o_422.slice()), this.isFunction.push(o_422.slice()));
        this.drawFunctionPatterns();
        var c_424 = this.addEccAndInterleave(n_420);
        if ((this.drawCodewords(c_424), -1 == r_421))
          for (var l_425 = 1e9, s_423 = 0; s_423 < 8; s_423++) {
            (this.applyMask(s_423), this.drawFormatBits(s_423));
            var u_426 = this.getPenaltyScore();
            (u_426 < l_425 && ((r_421 = s_423), (l_425 = u_426)), this.applyMask(s_423));
          }
        (a_415(0 <= r_421 && r_421 <= 7),
          (this.mask = r_421),
          this.applyMask(r_421),
          this.drawFormatBits(r_421),
          (this.isFunction = []));
      }
      return (
        (t_417.encodeText = function (i_427, n_428) {
          var a_429 = e_411.QrSegment.makeSegments(i_427);
          return t_417.encodeSegments(a_429, n_428);
        }),
        (t_417.encodeBinary = function (i_430, n_431) {
          var a_432 = e_411.QrSegment.makeBytes(i_430);
          return t_417.encodeSegments([a_432], n_431);
        }),
        (t_417.encodeSegments = function (e_433, n_434, o_435, s_436, c_437, l_438) {
          if (
            (void 0 === o_435 && (o_435 = 1),
            void 0 === s_436 && (s_436 = 40),
            void 0 === c_437 && (c_437 = -1),
            void 0 === l_438 && (l_438 = !0),
            !(t_417.MIN_VERSION <= o_435 && o_435 <= s_436 && s_436 <= t_417.MAX_VERSION) ||
              c_437 < -1 ||
              c_437 > 7)
          )
            throw RangeError("Invalid value");
          for (h_445 = o_435; ; h_445++) {
            var u_439,
              d_440,
              A_441,
              f_442,
              p_443,
              x_444,
              h_445,
              y_446,
              m_447 = 8 * t_417.getNumDataCodewords(h_445, n_434),
              g_448 = r_416.getTotalBits(e_433, h_445);
            if (g_448 <= m_447) {
              y_446 = g_448;
              break;
            }
            if (h_445 >= s_436) throw RangeError("Data too long");
          }
          try {
            for (
              var k_449 = (0, GryphlineWebSDKV180.Ju)([t_417.Ecc.MEDIUM, t_417.Ecc.QUARTILE, t_417.Ecc.HIGH]),
                b_450 = k_449.next();
              !b_450.done;
              b_450 = k_449.next()
            ) {
              var w_451 = b_450.value;
              l_438 && y_446 <= 8 * t_417.getNumDataCodewords(h_445, w_451) && (n_434 = w_451);
            }
          } catch (e_462) {
            u_439 = {
              error: e_462,
            };
          } finally {
            try {
              b_450 && !b_450.done && (d_440 = k_449.return) && d_440.call(k_449);
            } finally {
              if (u_439) throw u_439.error;
            }
          }
          var E_452 = [];
          try {
            for (
              var B_453 = (0, GryphlineWebSDKV180.Ju)(e_433), I_454 = B_453.next();
              !I_454.done;
              I_454 = B_453.next()
            ) {
              var C_455 = I_454.value;
              (i_413(C_455.mode.modeBits, 4, E_452),
                i_413(C_455.numChars, C_455.mode.numCharCountBits(h_445), E_452));
              try {
                for (
                  var S_456 = ((p_443 = void 0), (0, GryphlineWebSDKV180.Ju)(C_455.getData())),
                    D_457 = S_456.next();
                  !D_457.done;
                  D_457 = S_456.next()
                ) {
                  var M_458 = D_457.value;
                  E_452.push(M_458);
                }
              } catch (e_463) {
                p_443 = {
                  error: e_463,
                };
              } finally {
                try {
                  D_457 && !D_457.done && (x_444 = S_456.return) && x_444.call(S_456);
                } finally {
                  if (p_443) throw p_443.error;
                }
              }
            }
          } catch (e_464) {
            A_441 = {
              error: e_464,
            };
          } finally {
            try {
              I_454 && !I_454.done && (f_442 = B_453.return) && f_442.call(B_453);
            } finally {
              if (A_441) throw A_441.error;
            }
          }
          a_415(E_452.length == y_446);
          var N_459 = 8 * t_417.getNumDataCodewords(h_445, n_434);
          (a_415(E_452.length <= N_459),
            i_413(0, Math.min(4, N_459 - E_452.length), E_452),
            i_413(0, (8 - (E_452.length % 8)) % 8, E_452),
            a_415(E_452.length % 8 == 0));
          for (var P_460 = 236; E_452.length < N_459; P_460 ^= 253) i_413(P_460, 8, E_452);
          for (var G_461 = []; 8 * G_461.length < E_452.length;) G_461.push(0);
          return (
            E_452.forEach(function (e_465, t_466) {
              return (G_461[t_466 >>> 3] |= e_465 << (7 - (7 & t_466)));
            }),
            new t_417(h_445, n_434, G_461, c_437)
          );
        }),
        (t_417.prototype.getModule = function (e_467, t_468) {
          return (
            0 <= e_467 && e_467 < this.size && 0 <= t_468 && t_468 < this.size && this.modules[t_468][e_467]
          );
        }),
        (t_417.prototype.getModules = function () {
          return this.modules;
        }),
        (t_417.prototype.drawFunctionPatterns = function () {
          for (var e_469 = 0; e_469 < this.size; e_469++)
            (this.setFunctionModule(6, e_469, e_469 % 2 == 0),
              this.setFunctionModule(e_469, 6, e_469 % 2 == 0));
          (this.drawFinderPattern(3, 3),
            this.drawFinderPattern(this.size - 4, 3),
            this.drawFinderPattern(3, this.size - 4));
          for (
            var t_470 = this.getAlignmentPatternPositions(), i_471 = t_470.length, e_469 = 0;
            e_469 < i_471;
            e_469++
          )
            for (var n_472 = 0; n_472 < i_471; n_472++)
              (0 != e_469 || 0 != n_472) &&
                (0 != e_469 || n_472 != i_471 - 1) &&
                (e_469 != i_471 - 1 || 0 != n_472) &&
                this.drawAlignmentPattern(t_470[e_469], t_470[n_472]);
          (this.drawFormatBits(0), this.drawVersion());
        }),
        (t_417.prototype.drawFormatBits = function (e_473) {
          for (
            var t_474 = (this.errorCorrectionLevel.formatBits << 3) | e_473, i_475 = t_474, r_476 = 0;
            r_476 < 10;
            r_476++
          )
            i_475 = (i_475 << 1) ^ ((i_475 >>> 9) * 1335);
          var o_477 = ((t_474 << 10) | i_475) ^ 21522;
          a_415(o_477 >>> 15 == 0);
          for (var r_476 = 0; r_476 <= 5; r_476++) this.setFunctionModule(8, r_476, n_414(o_477, r_476));
          (this.setFunctionModule(8, 7, n_414(o_477, 6)),
            this.setFunctionModule(8, 8, n_414(o_477, 7)),
            this.setFunctionModule(7, 8, n_414(o_477, 8)));
          for (var r_476 = 9; r_476 < 15; r_476++) this.setFunctionModule(14 - r_476, 8, n_414(o_477, r_476));
          for (var r_476 = 0; r_476 < 8; r_476++)
            this.setFunctionModule(this.size - 1 - r_476, 8, n_414(o_477, r_476));
          for (var r_476 = 8; r_476 < 15; r_476++)
            this.setFunctionModule(8, this.size - 15 + r_476, n_414(o_477, r_476));
          this.setFunctionModule(8, this.size - 8, !0);
        }),
        (t_417.prototype.drawVersion = function () {
          if (!(this.version < 7)) {
            for (var e_478 = this.version, t_479 = 0; t_479 < 12; t_479++)
              e_478 = (e_478 << 1) ^ ((e_478 >>> 11) * 7973);
            var i_480 = (this.version << 12) | e_478;
            a_415(i_480 >>> 18 == 0);
            for (var t_479 = 0; t_479 < 18; t_479++) {
              var r_481 = n_414(i_480, t_479),
                o_482 = this.size - 11 + (t_479 % 3),
                s_483 = Math.floor(t_479 / 3);
              (this.setFunctionModule(o_482, s_483, r_481), this.setFunctionModule(s_483, o_482, r_481));
            }
          }
        }),
        (t_417.prototype.drawFinderPattern = function (e_484, t_485) {
          for (var i_486 = -4; i_486 <= 4; i_486++)
            for (var n_487 = -4; n_487 <= 4; n_487++) {
              var a_488 = Math.max(Math.abs(n_487), Math.abs(i_486)),
                r_489 = e_484 + n_487,
                o_490 = t_485 + i_486;
              0 <= r_489 &&
                r_489 < this.size &&
                0 <= o_490 &&
                o_490 < this.size &&
                this.setFunctionModule(r_489, o_490, 2 != a_488 && 4 != a_488);
            }
        }),
        (t_417.prototype.drawAlignmentPattern = function (e_491, t_492) {
          for (var i_493 = -2; i_493 <= 2; i_493++)
            for (var n_494 = -2; n_494 <= 2; n_494++)
              this.setFunctionModule(
                e_491 + n_494,
                t_492 + i_493,
                1 != Math.max(Math.abs(n_494), Math.abs(i_493)),
              );
        }),
        (t_417.prototype.setFunctionModule = function (e_495, t_496, i_497) {
          ((this.modules[t_496][e_495] = i_497), (this.isFunction[t_496][e_495] = !0));
        }),
        (t_417.prototype.addEccAndInterleave = function (e_498) {
          var i_499 = this.version,
            n_500 = this.errorCorrectionLevel;
          if (e_498.length != t_417.getNumDataCodewords(i_499, n_500)) throw RangeError("Invalid argument");
          for (
            var r_501 = t_417.NUM_ERROR_CORRECTION_BLOCKS[n_500.ordinal][i_499],
              o_502 = t_417.ECC_CODEWORDS_PER_BLOCK[n_500.ordinal][i_499],
              s_503 = Math.floor(t_417.getNumRawDataModules(i_499) / 8),
              c_504 = r_501 - (s_503 % r_501),
              l_505 = Math.floor(s_503 / r_501),
              u_506 = [],
              d_507 = t_417.reedSolomonComputeDivisor(o_502),
              A_508 = 0,
              f_509 = 0;
            A_508 < r_501;
            A_508++
          ) {
            var p_510 = e_498.slice(f_509, f_509 + l_505 - o_502 + (A_508 < c_504 ? 0 : 1));
            f_509 += p_510.length;
            var x_511 = t_417.reedSolomonComputeRemainder(p_510, d_507);
            (A_508 < c_504 && p_510.push(0), u_506.push(p_510.concat(x_511)));
          }
          for (
            var h_512 = [],
              y_513 = function (e_514) {
                u_506.forEach(function (t_515, i_516) {
                  (e_514 != l_505 - o_502 || i_516 >= c_504) && h_512.push(t_515[e_514]);
                });
              },
              A_508 = 0;
            A_508 < u_506[0].length;
            A_508++
          )
            y_513(A_508);
          return (a_415(h_512.length == s_503), h_512);
        }),
        (t_417.prototype.drawCodewords = function (e_517) {
          if (e_517.length != Math.floor(t_417.getNumRawDataModules(this.version) / 8))
            throw RangeError("Invalid argument");
          for (var i_518 = 0, r_519 = this.size - 1; r_519 >= 1; r_519 -= 2) {
            6 == r_519 && (r_519 = 5);
            for (var o_520 = 0; o_520 < this.size; o_520++)
              for (var s_521 = 0; s_521 < 2; s_521++) {
                var c_522 = r_519 - s_521,
                  l_523 = ((r_519 + 1) & 2) == 0 ? this.size - 1 - o_520 : o_520;
                !this.isFunction[l_523][c_522] &&
                  i_518 < 8 * e_517.length &&
                  ((this.modules[l_523][c_522] = n_414(e_517[i_518 >>> 3], 7 - (7 & i_518))), i_518++);
              }
          }
          a_415(i_518 == 8 * e_517.length);
        }),
        (t_417.prototype.applyMask = function (e_524) {
          if (e_524 < 0 || e_524 > 7) throw RangeError("Mask value out of range");
          for (var t_525 = 0; t_525 < this.size; t_525++)
            for (var i_526 = 0; i_526 < this.size; i_526++) {
              var n_527 = void 0;
              switch (e_524) {
                case 0:
                  n_527 = (i_526 + t_525) % 2 == 0;
                  break;
                case 1:
                  n_527 = t_525 % 2 == 0;
                  break;
                case 2:
                  n_527 = i_526 % 3 == 0;
                  break;
                case 3:
                  n_527 = (i_526 + t_525) % 3 == 0;
                  break;
                case 4:
                  n_527 = (Math.floor(i_526 / 3) + Math.floor(t_525 / 2)) % 2 == 0;
                  break;
                case 5:
                  n_527 = ((i_526 * t_525) % 2) + ((i_526 * t_525) % 3) == 0;
                  break;
                case 6:
                  n_527 = (((i_526 * t_525) % 2) + ((i_526 * t_525) % 3)) % 2 == 0;
                  break;
                case 7:
                  n_527 = (((i_526 + t_525) % 2) + ((i_526 * t_525) % 3)) % 2 == 0;
                  break;
                default:
                  throw Error("Unreachable");
              }
              !this.isFunction[t_525][i_526] &&
                n_527 &&
                (this.modules[t_525][i_526] = !this.modules[t_525][i_526]);
            }
        }),
        (t_417.prototype.getPenaltyScore = function () {
          for (var e_528, i_529, n_530 = 0, r_531 = 0; r_531 < this.size; r_531++) {
            for (
              var o_532 = !1, s_533 = 0, c_534 = [0, 0, 0, 0, 0, 0, 0], l_535 = 0;
              l_535 < this.size;
              l_535++
            )
              this.modules[r_531][l_535] == o_532
                ? 5 == ++s_533
                  ? (n_530 += t_417.PENALTY_N1)
                  : s_533 > 5 && n_530++
                : (this.finderPenaltyAddHistory(s_533, c_534),
                  o_532 || (n_530 += this.finderPenaltyCountPatterns(c_534) * t_417.PENALTY_N3),
                  (o_532 = this.modules[r_531][l_535]),
                  (s_533 = 1));
            n_530 += this.finderPenaltyTerminateAndCount(o_532, s_533, c_534) * t_417.PENALTY_N3;
          }
          for (var l_535 = 0; l_535 < this.size; l_535++) {
            for (
              var o_532 = !1, u_536 = 0, c_534 = [0, 0, 0, 0, 0, 0, 0], r_531 = 0;
              r_531 < this.size;
              r_531++
            )
              this.modules[r_531][l_535] == o_532
                ? 5 == ++u_536
                  ? (n_530 += t_417.PENALTY_N1)
                  : u_536 > 5 && n_530++
                : (this.finderPenaltyAddHistory(u_536, c_534),
                  o_532 || (n_530 += this.finderPenaltyCountPatterns(c_534) * t_417.PENALTY_N3),
                  (o_532 = this.modules[r_531][l_535]),
                  (u_536 = 1));
            n_530 += this.finderPenaltyTerminateAndCount(o_532, u_536, c_534) * t_417.PENALTY_N3;
          }
          for (var r_531 = 0; r_531 < this.size - 1; r_531++)
            for (var l_535 = 0; l_535 < this.size - 1; l_535++) {
              var d_537 = this.modules[r_531][l_535];
              d_537 == this.modules[r_531][l_535 + 1] &&
                d_537 == this.modules[r_531 + 1][l_535] &&
                d_537 == this.modules[r_531 + 1][l_535 + 1] &&
                (n_530 += t_417.PENALTY_N2);
            }
          var A_538 = 0;
          try {
            for (
              var f_539 = (0, GryphlineWebSDKV180.Ju)(this.modules), p_540 = f_539.next();
              !p_540.done;
              p_540 = f_539.next()
            )
              A_538 = p_540.value.reduce(function (e_543, t_544) {
                return e_543 + +!!t_544;
              }, A_538);
          } catch (t_545) {
            e_528 = {
              error: t_545,
            };
          } finally {
            try {
              p_540 && !p_540.done && (i_529 = f_539.return) && i_529.call(f_539);
            } finally {
              if (e_528) throw e_528.error;
            }
          }
          var x_541 = this.size * this.size,
            h_542 = Math.ceil(Math.abs(20 * A_538 - 10 * x_541) / x_541) - 1;
          return (
            a_415(0 <= h_542 && h_542 <= 9),
            a_415(0 <= (n_530 += h_542 * t_417.PENALTY_N4) && n_530 <= 2568888),
            n_530
          );
        }),
        (t_417.prototype.getAlignmentPatternPositions = function () {
          if (1 == this.version) return [];
          for (
            var e_546 = Math.floor(this.version / 7) + 2,
              t_547 = 32 == this.version ? 26 : 2 * Math.ceil((4 * this.version + 4) / (2 * e_546 - 2)),
              i_548 = [6],
              n_549 = this.size - 7;
            i_548.length < e_546;
            n_549 -= t_547
          )
            i_548.splice(1, 0, n_549);
          return i_548;
        }),
        (t_417.getNumRawDataModules = function (e_550) {
          if (e_550 < t_417.MIN_VERSION || e_550 > t_417.MAX_VERSION)
            throw RangeError("Version number out of range");
          var i_551 = (16 * e_550 + 128) * e_550 + 64;
          if (e_550 >= 2) {
            var n_552 = Math.floor(e_550 / 7) + 2;
            ((i_551 -= (25 * n_552 - 10) * n_552 - 55), e_550 >= 7 && (i_551 -= 36));
          }
          return (a_415(208 <= i_551 && i_551 <= 29648), i_551);
        }),
        (t_417.getNumDataCodewords = function (e_553, i_554) {
          return (
            Math.floor(t_417.getNumRawDataModules(e_553) / 8) -
            t_417.ECC_CODEWORDS_PER_BLOCK[i_554.ordinal][e_553] *
              t_417.NUM_ERROR_CORRECTION_BLOCKS[i_554.ordinal][e_553]
          );
        }),
        (t_417.reedSolomonComputeDivisor = function (e_555) {
          if (e_555 < 1 || e_555 > 255) throw RangeError("Degree out of range");
          for (var i_556 = [], n_557 = 0; n_557 < e_555 - 1; n_557++) i_556.push(0);
          i_556.push(1);
          for (var a_558 = 1, n_557 = 0; n_557 < e_555; n_557++) {
            for (var r_559 = 0; r_559 < i_556.length; r_559++)
              ((i_556[r_559] = t_417.reedSolomonMultiply(i_556[r_559], a_558)),
                r_559 + 1 < i_556.length && (i_556[r_559] ^= i_556[r_559 + 1]));
            a_558 = t_417.reedSolomonMultiply(a_558, 2);
          }
          return i_556;
        }),
        (t_417.reedSolomonComputeRemainder = function (e_560, i_561) {
          var n_562,
            a_563,
            r_564 = i_561.map(function (e_568) {
              return 0;
            });
          try {
            for (
              var o_565 = (0, GryphlineWebSDKV180.Ju)(e_560), s_566 = o_565.next();
              !s_566.done;
              s_566 = o_565.next()
            ) {
              var c_567 = s_566.value;
              !(function (e_569) {
                var n_570 = e_569 ^ r_564.shift();
                (r_564.push(0),
                  i_561.forEach(function (e_571, i_572) {
                    return (r_564[i_572] ^= t_417.reedSolomonMultiply(e_571, n_570));
                  }));
              })(c_567);
            }
          } catch (e_573) {
            n_562 = {
              error: e_573,
            };
          } finally {
            try {
              s_566 && !s_566.done && (a_563 = o_565.return) && a_563.call(o_565);
            } finally {
              if (n_562) throw n_562.error;
            }
          }
          return r_564;
        }),
        (t_417.reedSolomonMultiply = function (e_574, t_575) {
          if (e_574 >>> 8 != 0 || t_575 >>> 8 != 0) throw RangeError("Byte out of range");
          for (var i_576 = 0, n_577 = 7; n_577 >= 0; n_577--)
            i_576 = (i_576 << 1) ^ ((i_576 >>> 7) * 285) ^ (((t_575 >>> n_577) & 1) * e_574);
          return (a_415(i_576 >>> 8 == 0), i_576);
        }),
        (t_417.prototype.finderPenaltyCountPatterns = function (e_578) {
          var t_579 = e_578[1];
          a_415(t_579 <= 3 * this.size);
          var i_580 =
            t_579 > 0 && e_578[2] == t_579 && e_578[3] == 3 * t_579 && e_578[4] == t_579 && e_578[5] == t_579;
          return (
            (i_580 && e_578[0] >= 4 * t_579 && e_578[6] >= t_579 ? 1 : 0) +
            (i_580 && e_578[6] >= 4 * t_579 && e_578[0] >= t_579 ? 1 : 0)
          );
        }),
        (t_417.prototype.finderPenaltyTerminateAndCount = function (e_581, t_582, i_583) {
          return (
            e_581 && (this.finderPenaltyAddHistory(t_582, i_583), (t_582 = 0)),
            (t_582 += this.size),
            this.finderPenaltyAddHistory(t_582, i_583),
            this.finderPenaltyCountPatterns(i_583)
          );
        }),
        (t_417.prototype.finderPenaltyAddHistory = function (e_584, t_585) {
          (0 == t_585[0] && (e_584 += this.size), t_585.pop(), t_585.unshift(e_584));
        }),
        (t_417.MIN_VERSION = 1),
        (t_417.MAX_VERSION = 40),
        (t_417.PENALTY_N1 = 3),
        (t_417.PENALTY_N2 = 3),
        (t_417.PENALTY_N3 = 40),
        (t_417.PENALTY_N4 = 10),
        (t_417.ECC_CODEWORDS_PER_BLOCK = [
          [
            -1, 7, 10, 15, 20, 26, 18, 20, 24, 30, 18, 20, 24, 26, 30, 22, 24, 28, 30, 28, 28, 28, 28, 30, 30,
            26, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 10, 16, 26, 18, 24, 16, 18, 22, 22, 26, 30, 22, 22, 24, 24, 28, 28, 26, 26, 26, 26, 28, 28,
            28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28, 28,
          ],
          [
            -1, 13, 22, 18, 26, 18, 24, 18, 22, 20, 24, 28, 26, 24, 20, 30, 24, 28, 28, 26, 30, 28, 30, 30,
            30, 30, 28, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
          ],
          [
            -1, 17, 28, 22, 16, 22, 28, 26, 26, 24, 28, 24, 28, 22, 24, 24, 30, 28, 28, 26, 28, 30, 24, 30,
            30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
          ],
        ]),
        (t_417.NUM_ERROR_CORRECTION_BLOCKS = [
          [
            -1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 4, 4, 4, 4, 4, 6, 6, 6, 6, 7, 8, 8, 9, 9, 10, 12, 12, 12, 13, 14,
            15, 16, 17, 18, 19, 19, 20, 21, 22, 24, 25,
          ],
          [
            -1, 1, 1, 1, 2, 2, 4, 4, 4, 5, 5, 5, 8, 9, 9, 10, 10, 11, 13, 14, 16, 17, 17, 18, 20, 21, 23, 25,
            26, 28, 29, 31, 33, 35, 37, 38, 40, 43, 45, 47, 49,
          ],
          [
            -1, 1, 1, 2, 2, 4, 4, 6, 6, 8, 8, 8, 10, 12, 16, 12, 17, 16, 18, 21, 20, 23, 23, 25, 27, 29, 34,
            34, 35, 38, 40, 43, 45, 48, 51, 53, 56, 59, 62, 65, 68,
          ],
          [
            -1, 1, 1, 2, 4, 4, 4, 5, 6, 8, 8, 11, 11, 16, 16, 18, 16, 19, 21, 25, 25, 25, 34, 30, 32, 35, 37,
            40, 42, 45, 48, 51, 54, 57, 60, 63, 66, 70, 74, 77, 81,
          ],
        ]),
        t_417
      );
    })();
    function i_413(e_586, t_587, i_588) {
      if (t_587 < 0 || t_587 > 31 || e_586 >>> t_587 != 0) throw RangeError("Value out of range");
      for (var n_589 = t_587 - 1; n_589 >= 0; n_589--) i_588.push((e_586 >>> n_589) & 1);
    }
    function n_414(e_590, t_591) {
      return ((e_590 >>> t_591) & 1) != 0;
    }
    function a_415(e_592) {
      if (!e_592) throw Error("Assertion error");
    }
    e_411.QrCode = t_412;
    var r_416 = (function () {
      function e_593(e_594, t_595, i_596) {
        if (((this.mode = e_594), (this.numChars = t_595), (this.bitData = i_596), t_595 < 0))
          throw RangeError("Invalid argument");
        this.bitData = i_596.slice();
      }
      return (
        (e_593.makeBytes = function (t_597) {
          var n_598,
            a_599,
            r_600 = [];
          try {
            for (
              var o_601 = (0, GryphlineWebSDKV180.Ju)(t_597), s_602 = o_601.next();
              !s_602.done;
              s_602 = o_601.next()
            ) {
              var c_603 = s_602.value;
              i_413(c_603, 8, r_600);
            }
          } catch (e_604) {
            n_598 = {
              error: e_604,
            };
          } finally {
            try {
              s_602 && !s_602.done && (a_599 = o_601.return) && a_599.call(o_601);
            } finally {
              if (n_598) throw n_598.error;
            }
          }
          return new e_593(e_593.Mode.BYTE, t_597.length, r_600);
        }),
        (e_593.makeNumeric = function (t_605) {
          if (!e_593.isNumeric(t_605)) throw RangeError("String contains non-numeric characters");
          for (var n_606 = [], a_607 = 0; a_607 < t_605.length;) {
            var r_608 = Math.min(t_605.length - a_607, 3);
            (i_413(parseInt(t_605.substring(a_607, a_607 + r_608), 10), 3 * r_608 + 1, n_606),
              (a_607 += r_608));
          }
          return new e_593(e_593.Mode.NUMERIC, t_605.length, n_606);
        }),
        (e_593.makeAlphanumeric = function (t_609) {
          if (!e_593.isAlphanumeric(t_609))
            throw RangeError("String contains unencodable characters in alphanumeric mode");
          var n_610,
            a_611 = [];
          for (n_610 = 0; n_610 + 2 <= t_609.length; n_610 += 2) {
            var r_612 = 45 * e_593.ALPHANUMERIC_CHARSET.indexOf(t_609.charAt(n_610));
            i_413((r_612 += e_593.ALPHANUMERIC_CHARSET.indexOf(t_609.charAt(n_610 + 1))), 11, a_611);
          }
          return (
            n_610 < t_609.length && i_413(e_593.ALPHANUMERIC_CHARSET.indexOf(t_609.charAt(n_610)), 6, a_611),
            new e_593(e_593.Mode.ALPHANUMERIC, t_609.length, a_611)
          );
        }),
        (e_593.makeSegments = function (t_613) {
          return "" == t_613
            ? []
            : e_593.isNumeric(t_613)
              ? [e_593.makeNumeric(t_613)]
              : e_593.isAlphanumeric(t_613)
                ? [e_593.makeAlphanumeric(t_613)]
                : [e_593.makeBytes(e_593.toUtf8ByteArray(t_613))];
        }),
        (e_593.makeEci = function (t_614) {
          var n_615 = [];
          if (t_614 < 0) throw RangeError("ECI assignment value out of range");
          if (t_614 < 128) i_413(t_614, 8, n_615);
          else if (t_614 < 16384) (i_413(2, 2, n_615), i_413(t_614, 14, n_615));
          else if (t_614 < 1e6) (i_413(6, 3, n_615), i_413(t_614, 21, n_615));
          else throw RangeError("ECI assignment value out of range");
          return new e_593(e_593.Mode.ECI, 0, n_615);
        }),
        (e_593.isNumeric = function (t_616) {
          return e_593.NUMERIC_REGEX.test(t_616);
        }),
        (e_593.isAlphanumeric = function (t_617) {
          return e_593.ALPHANUMERIC_REGEX.test(t_617);
        }),
        (e_593.prototype.getData = function () {
          return this.bitData.slice();
        }),
        (e_593.getTotalBits = function (e_618, t_619) {
          var i_620,
            n_621,
            a_622 = 0;
          try {
            for (
              var r_623 = (0, GryphlineWebSDKV180.Ju)(e_618), o_624 = r_623.next();
              !o_624.done;
              o_624 = r_623.next()
            ) {
              var s_625 = o_624.value,
                c_626 = s_625.mode.numCharCountBits(t_619);
              if (s_625.numChars >= 1 << c_626) return 1 / 0;
              a_622 += 4 + c_626 + s_625.bitData.length;
            }
          } catch (e_627) {
            i_620 = {
              error: e_627,
            };
          } finally {
            try {
              o_624 && !o_624.done && (n_621 = r_623.return) && n_621.call(r_623);
            } finally {
              if (i_620) throw i_620.error;
            }
          }
          return a_622;
        }),
        (e_593.toUtf8ByteArray = function (e_628) {
          e_628 = encodeURI(e_628);
          for (var t_629 = [], i_630 = 0; i_630 < e_628.length; i_630++)
            "%" != e_628.charAt(i_630)
              ? t_629.push(e_628.charCodeAt(i_630))
              : (t_629.push(parseInt(e_628.substring(i_630 + 1, i_630 + 3), 16)), (i_630 += 2));
          return t_629;
        }),
        (e_593.NUMERIC_REGEX = /^[0-9]*$/),
        (e_593.ALPHANUMERIC_REGEX = /^[A-Z0-9 $%*+.\/:-]*$/),
        (e_593.ALPHANUMERIC_CHARSET = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:"),
        e_593
      );
    })();
    e_411.QrSegment = r_416;
  })(u_8 || (u_8 = {})),
    (function (e_631) {
      (e_631.QrCode || (e_631.QrCode = {})).Ecc = (function () {
        function e_632(e_633, t_634) {
          ((this.ordinal = e_633), (this.formatBits = t_634));
        }
        return (
          (e_632.LOW = new e_632(0, 1)),
          (e_632.MEDIUM = new e_632(1, 0)),
          (e_632.QUARTILE = new e_632(2, 3)),
          (e_632.HIGH = new e_632(3, 2)),
          e_632
        );
      })();
    })(u_8 || (u_8 = {})),
    (function (e_635) {
      (e_635.QrSegment || (e_635.QrSegment = {})).Mode = (function () {
        function e_636(e_637, t_638) {
          ((this.modeBits = e_637), (this.numBitsCharCount = t_638));
        }
        return (
          (e_636.prototype.numCharCountBits = function (e_639) {
            return this.numBitsCharCount[Math.floor((e_639 + 7) / 17)];
          }),
          (e_636.NUMERIC = new e_636(1, [10, 12, 14])),
          (e_636.ALPHANUMERIC = new e_636(2, [9, 11, 13])),
          (e_636.BYTE = new e_636(4, [8, 16, 16])),
          (e_636.KANJI = new e_636(8, [8, 10, 12])),
          (e_636.ECI = new e_636(7, [0, 0, 0])),
          e_636
        );
      })();
    })(u_8 || (u_8 = {})));
  let tr_117 = u_8;
  var to_118 = (function () {
      try {
        new Path2D().addPath(new Path2D());
      } catch (e_640) {
        return !1;
      }
      return !0;
    })(),
    ts_119 = ep_65("1.26.0"),
    tc_120 = ep_65("1.32.1"),
    tl_121 = "shareImage_".concat(e1_103(8)),
    tu_122 = function (e_641, t_642) {
      var i_643 = JSON.parse(t_642);
      if (0 != i_643.code) return void console.log(i_643.message);
      var n_644 = JSON.parse(e_641).channel;
      null == d_9 || d_9(n_644 || "");
    },
    td_123 = function (e_645) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_646, i_647, n_648, a_649;
        return (0, GryphlineWebSDKV180.YH)(this, function (r_650) {
          switch (r_650.label) {
            case 0:
              if (B_22 && ((D_26 && -1 !== N_28 && N_28 < 14) || (P_29 && -1 !== G_30 && G_30 < 8)))
                return (eo_57("当前系统环境不支持分享图片"), [2]);
              return (
                tn_115.setCallback(tu_122, tl_121),
                (t_646 = e_645.handler),
                (i_647 = (0, GryphlineWebSDKV180.Tt)(e_645, ["handler"])),
                (d_9 = t_646),
                (n_648 = (0, GryphlineWebSDKV180.Cl)((0, GryphlineWebSDKV180.Cl)({}, i_647), {
                  handleId: tl_121,
                  url: location.href,
                })),
                ts_119 ||
                  setTimeout(function () {
                    null == t_646 || t_646("SUPPORT");
                  }, 600),
                [4, eA_63("SKShare", "shareImg", n_648)]
              );
            case 1:
              return ((a_649 = r_650.sent()), [4, eO_86(400)]);
            case 2:
              return (r_650.sent(), [2, a_649]);
          }
        });
      });
    },
    tA_124 = function (e_651) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_652, i_653, n_654, a_655, r_656, o_657, s_658, c_659, l_660, u_661, d_662, A_663, f_664;
        return (0, GryphlineWebSDKV180.YH)(this, function (p_665) {
          switch (p_665.label) {
            case 0:
              if (B_22 && ((D_26 && -1 !== N_28 && N_28 < 14) || (P_29 && -1 !== G_30 && G_30 < 8)))
                return (eo_57("当前系统环境不支持分享图片"), [2]);
              if (!(P_29 && (null == e_651 ? void 0 : e_651.url)) || !ep_65("1.31.0")) return [3, 2];
              return (
                (t_652 = e_651.url),
                (i_653 = e_651.handler),
                (n_654 = e_651.callback),
                [
                  4,
                  td_123({
                    imageUrl: t_652,
                    handler: i_653,
                  }),
                ]
              );
            case 1:
              return (
                p_665.sent(),
                null == n_654 ||
                  n_654({
                    url: t_652,
                  }),
                [2]
              );
            case 2:
              if (!(null == e_651 ? void 0 : e_651.html)) return [2];
              if (
                ((a_655 = e_651.html),
                (r_656 = e_651.base64),
                (o_657 = e_651.scale),
                (s_658 = e_651.callback),
                (c_659 = e_651.handler),
                (l_660 = r_656),
                r_656)
              )
                return [3, 6];
              return (console.time("parse base64"), [4, eO_86(50)]);
            case 3:
              return (
                p_665.sent(),
                (u_661 = o_657 || 2),
                (d_662 = a_655.clientWidth * u_661),
                (A_663 = a_655.clientHeight * u_661),
                [
                  4,
                  vendorBundleCryptoJsAESHtml2canvasIdbDefault()(a_655, {
                    backgroundColor: "transparent",
                    useCORS: !0,
                    windowWidth: d_662,
                    windowHeight: A_663,
                    scale: 1,
                    canvasScale: u_661,
                  }),
                ]
              );
            case 4:
              return ((f_664 = p_665.sent()), [4, eO_86(200)]);
            case 5:
              return (p_665.sent(), console.timeEnd("parse base64"), (l_660 = f_664.toDataURL()), [3, 8]);
            case 6:
              if (!(r_656 instanceof Promise)) return [3, 8];
              return [4, r_656];
            case 7:
              ((l_660 = p_665.sent()), (p_665.label = 8));
            case 8:
              return (
                console.time("bridge shareImg"),
                [
                  4,
                  td_123({
                    imageBase64: l_660.slice(22),
                    handler: c_659,
                  }),
                ]
              );
            case 9:
              return (
                p_665.sent(),
                console.timeEnd("bridge shareImg"),
                null == s_658 ||
                  s_658({
                    html: a_655,
                    base64: l_660,
                  }),
                [2]
              );
          }
        });
      });
    },
    tf_125 = "shareLink_".concat(e1_103(8)),
    tp_126 = {
      imgNode: {
        title: "图片分享",
        icon: "https://bbs.hycdn.cn/public/common-config/image/0510e6779bf397031b4eb79b14d916a0.png",
        callback: tA_124,
      },
    },
    tx_127 = [],
    th_128 = function (e_666, t_667) {
      (console.log("props", e_666), console.log("res", t_667));
      var i_668 = JSON.parse(t_667);
      if (0 != i_668.code) return void console.log(i_668.message);
      var n_669 = JSON.parse(e_666),
        a_670 = n_669.index,
        r_671 = void 0 === a_670 ? -1 : a_670,
        o_672 = n_669.channel;
      if (-1 === r_671) {
        null == A_10 || A_10(o_672 || "");
        return;
      }
      var s_673 = tx_127[r_671];
      if (!s_673) {
        (console.log(r_671, tx_127), console.log("没有匹配的内容"));
        return;
      }
      s_673.callback(s_673.params);
    },
    ty_129 = function (e_674, t_675) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var i_676,
          n_677,
          a_678,
          r_679,
          o_680,
          s_681,
          c_682,
          l_683,
          u_684,
          d_685,
          f_686,
          p_687,
          x_688,
          h_689,
          y_690;
        return (0, GryphlineWebSDKV180.YH)(this, function (m_691) {
          switch (m_691.label) {
            case 0:
              if ((tn_115.setCallback(th_128, tf_125), (A_10 = e_674.handler), (tx_127 = []), t_675)) {
                i_676 = function (e_692) {
                  var i_693 = (0, GryphlineWebSDKV180.Cl)({}, tp_126[e_692]),
                    n_694 = t_675[e_692];
                  if (n_694) {
                    var a_695 = (0, GryphlineWebSDKV180.Cl)({}, n_694);
                    if ("imgNode" === e_692) {
                      ts_119 && (a_695.handler = A_10);
                      var r_696 = n_694.html,
                        o_697 = n_694.scale,
                        s_698 = n_694.handler;
                      if (s_698) {
                        var c_699 = i_693.callback;
                        i_693.callback = function (e_700) {
                          return s_698(function () {
                            return c_699(e_700);
                          });
                        };
                      }
                      n_694.base64 ||
                        (a_695.base64 = new Promise(function (e_701) {
                          return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
                            var t_702, i_703;
                            return (0, GryphlineWebSDKV180.YH)(this, function (n_704) {
                              switch (n_704.label) {
                                case 0:
                                  return (
                                    (t_702 = r_696.clientWidth * (o_697 || 2)),
                                    (i_703 = r_696.clientHeight * (o_697 || 2)),
                                    [
                                      4,
                                      vendorBundleCryptoJsAESHtml2canvasIdbDefault()(r_696, {
                                        backgroundColor: "transparent",
                                        useCORS: !0,
                                        windowWidth: t_702,
                                        windowHeight: i_703,
                                        scale: 1,
                                      }),
                                    ]
                                  );
                                case 1:
                                  return (e_701(n_704.sent().toDataURL()), [2]);
                              }
                            });
                          });
                        }));
                    }
                    (Object.assign(i_693, {
                      params: a_695,
                    }),
                      tx_127.push(i_693));
                  }
                };
                try {
                  for (
                    a_678 = (n_677 = (0, GryphlineWebSDKV180.Ju)(Object.keys(tp_126))).next();
                    !a_678.done;
                    a_678 = n_677.next()
                  )
                    ((r_679 = a_678.value), i_676(r_679));
                } catch (e_705) {
                  h_689 = {
                    error: e_705,
                  };
                } finally {
                  try {
                    a_678 && !a_678.done && (y_690 = n_677.return) && y_690.call(n_677);
                  } finally {
                    if (h_689) throw h_689.error;
                  }
                }
              }
              return (
                tx_127.push.apply(
                  tx_127,
                  (0, GryphlineWebSDKV180.fX)([], (0, GryphlineWebSDKV180.zs)(e_674.handleList || []), !1),
                ),
                (o_680 = (0, GryphlineWebSDKV180.Cl)(
                  (0, GryphlineWebSDKV180.Cl)((0, GryphlineWebSDKV180.Cl)({}, ta_116), e_674),
                  {
                    handleId: tf_125,
                    handleList: tx_127.map(function (e_706) {
                      return {
                        title: e_706.title,
                        icon: e_706.icon,
                      };
                    }),
                    url: location.href,
                  },
                )),
                [4, eq_99()]
              );
            case 1:
              if (
                ((s_681 = m_691.sent()),
                (c_682 = o_680.link),
                (l_683 = "?"),
                -1 !== (u_684 = c_682.indexOf("?")) && (l_683 = "&"),
                (d_685 = eQ_87(s_681.uid)),
                (null == t_675 ? void 0 : t_675.isSharePath) &&
                  ((f_686 = d_685.slice(0, -1)),
                  (c_682 =
                    -1 === u_684
                      ? "".concat(c_682, "/").concat(f_686)
                      : "".concat(c_682.slice(0, u_684), "/").concat(f_686).concat(c_682.slice(u_684)))),
                (p_687 = "".concat(c_682).concat(l_683, "s_c=").concat(d_685)),
                (o_680.link = p_687),
                ts_119 ||
                  setTimeout(function () {
                    null == A_10 || A_10("SUPPORT");
                  }, 600),
                P_29 && !tc_120 && o_680.sendAsMessage && (o_680.sendAsMessage = !1),
                !["1.8.0", "1.9.0"].includes(V_31))
              )
                return [3, 3];
              return (eA_63("SKShare", "shareLink", o_680), [4, eO_86(350)]);
            case 2:
              return (
                m_691.sent(),
                [
                  2,
                  {
                    code: 0,
                    message: "ok",
                  },
                ]
              );
            case 3:
              return [4, eA_63("SKShare", "shareLink", o_680)];
            case 4:
              return ((x_688 = m_691.sent()), [4, eO_86(50)]);
            case 5:
              return (m_691.sent(), [2, x_688]);
          }
        });
      });
    },
    tm_130 = {},
    tg_131 = function (e_707, t_708) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var i_709,
          n_710,
          a_711,
          r_712,
          o_713,
          s_714,
          c_715,
          l_716,
          u_717,
          d_718,
          A_719,
          f_720,
          p_721,
          x_722,
          h_723;
        return (0, GryphlineWebSDKV180.YH)(this, function (y_724) {
          var m_725, g_726, k_727;
          return tm_130[e_707]
            ? [2, tm_130[e_707]]
            : ((a_711 =
                  void 0 === (n_710 = (i_709 = t_708 || {}).logo)
                    ? "data:image/png;base64,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"
                    : n_710),
                (o_713 = void 0 === (r_712 = i_709.size) ? 128 : r_712),
                (c_715 = (s_714 = tr_117.QrCode.encodeText(e_707, tr_117.QrCode.Ecc.HIGH).getModules())
                  .length),
                (l_716 = document.createElement("div")).setAttribute(
                  "style",
                  "\n    position: absolute;\n    top: -100000px;\n    left: 20px;\n    width: "
                    .concat(o_713, "px;\n    height: ")
                    .concat(o_713, "px;\n    background-color: #fff;\n    z-index: -1;\n  "),
                ),
                (d_718 = (u_717 = document.createElement("canvas")).getContext("2d")))
              ? (((A_719 = []),
                window.devicePixelRatio,
                ((f_720 = document.createElement("img")).src = a_711),
                (f_720.width = o_713 / 4),
                (f_720.height = o_713 / 4),
                f_720.setAttribute("style", "display: none;"),
                (null ==
                (p_721 = (function (e_728, t_729, i_730, n_731) {
                  if (null == n_731) return null;
                  var a_732 = e_728.length + 0,
                    r_733 = Math.floor(+t_729),
                    o_734 = a_732 / t_729,
                    s_735 = (n_731.width || r_733) * o_734,
                    c_736 = (n_731.height || r_733) * o_734,
                    l_737 = null == n_731.x ? e_728.length / 2 - s_735 / 2 : n_731.x * o_734,
                    u_738 = null == n_731.y ? e_728.length / 2 - c_736 / 2 : n_731.y * o_734,
                    d_739 = null;
                  if (n_731.excavate) {
                    var A_740 = Math.floor(l_737),
                      f_741 = Math.floor(u_738),
                      p_742 = Math.ceil(s_735 + l_737 - A_740),
                      x_743 = Math.ceil(c_736 + u_738 - f_741);
                    d_739 = {
                      x: A_740,
                      y: f_741,
                      w: p_742,
                      h: x_743,
                    };
                  }
                  return {
                    x: l_737,
                    y: u_738,
                    h: c_736,
                    w: s_735,
                    excavation: d_739,
                  };
                })(s_714, o_713, 0, {
                  src: a_711,
                  width: o_713 / 4,
                  height: o_713 / 4,
                  excavate: !1,
                }))
                  ? void 0
                  : p_721.excavation) &&
                  ((m_725 = s_714),
                  (g_726 = p_721.excavation),
                  (s_714 = m_725.slice().map(function (e_744, t_745) {
                    return t_745 < g_726.y || t_745 >= g_726.y + g_726.h
                      ? e_744
                      : e_744.map(function (e_746, t_747) {
                          return (t_747 < g_726.x || t_747 >= g_726.x + g_726.w) && e_746;
                        });
                  }))),
                (u_717.width = o_713),
                (u_717.height = o_713),
                (x_722 = o_713 / c_715),
                d_718.scale(x_722, x_722),
                (d_718.fillStyle = "#fff"),
                d_718.fillRect(0, 0, c_715, c_715),
                (d_718.fillStyle = "#000"),
                to_118)
                  ? d_718.fill(
                      new Path2D(
                        ((k_727 = []),
                        s_714.forEach(function (e_748, t_749) {
                          var i_750 = null;
                          e_748.forEach(function (n_751, a_752) {
                            if (!n_751 && null !== i_750) {
                              (k_727.push(
                                "M"
                                  .concat(i_750 + 0, " ")
                                  .concat(t_749 + 0, "h")
                                  .concat(a_752 - i_750, "v1H")
                                  .concat(i_750 + 0, "z"),
                              ),
                                (i_750 = null));
                              return;
                            }
                            if (a_752 === e_748.length - 1) {
                              if (!n_751) return;
                              null === i_750
                                ? k_727.push(
                                    "M"
                                      .concat(a_752 + 0, ",")
                                      .concat(t_749 + 0, " h1v1H")
                                      .concat(a_752 + 0, "z"),
                                  )
                                : k_727.push(
                                    "M"
                                      .concat(i_750 + 0, ",")
                                      .concat(t_749 + 0, " h")
                                      .concat(a_752 + 1 - i_750, "v1H")
                                      .concat(i_750 + 0, "z"),
                                  );
                              return;
                            }
                            n_751 && null === i_750 && (i_750 = a_752);
                          });
                        }),
                        k_727.join("")),
                      ),
                    )
                  : s_714.forEach(function (e_753, t_754) {
                      e_753.forEach(function (e_755, i_756) {
                        e_755 && d_718.fillRect(i_756, t_754, 1, 1);
                      });
                    }),
                (h_723 = new Promise(function (e_757) {
                  ((f_720.onload = function () {
                    var t_758 = o_713 / 4,
                      i_759 = (o_713 - t_758) / 2 / x_722,
                      n_760 = t_758 / x_722;
                    (d_718.drawImage(f_720, i_759, i_759, n_760, n_760), e_757());
                  }),
                    (f_720.onerror = function () {
                      e_757();
                    }));
                })),
                A_719.push(h_723),
                l_716.appendChild(u_717),
                l_716.appendChild(f_720),
                document.body.appendChild(l_716),
                [
                  2,
                  new Promise(function (t_761) {
                    return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
                      var i_762;
                      return (0, GryphlineWebSDKV180.YH)(this, function (n_763) {
                        switch (n_763.label) {
                          case 0:
                            return [4, Promise.all(A_719)];
                          case 1:
                            return (
                              n_763.sent(),
                              (i_762 = u_717.toDataURL()),
                              l_716.remove(),
                              (tm_130[e_707] = i_762),
                              t_761(i_762),
                              [2]
                            );
                        }
                      });
                    });
                  }),
                ])
              : [2, ""];
        });
      });
    },
    tv_132 = {
      pageDidAppear: [],
      pageDidDisappear: [],
      pageDeinit: [],
      appWillEnterForeground: [],
      appDidEnterBackground: [],
    },
    tk_133 = function (e_764) {
      e_764 &&
        tv_132[e_764.type].forEach(function (e_765) {
          try {
            e_765();
          } catch (e_766) {}
        });
    },
    tb_134 = !1,
    tw_135 = new Promise(function (e_767) {
      setTimeout(function () {
        e_767(!0);
      }, 1e3);
    }),
    tE_136 = function (e_768, t_769) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var i_770;
        return (0, GryphlineWebSDKV180.YH)(this, function (n_771) {
          switch (n_771.label) {
            case 0:
              return [
                4,
                (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
                  return (0, GryphlineWebSDKV180.YH)(this, function (e_772) {
                    switch (e_772.label) {
                      case 0:
                        if (!B_22) return [2];
                        return [4, tw_135];
                      case 1:
                        if ((e_772.sent(), tb_134)) return [2];
                        return ((tb_134 = !0), eA_63("SKPage", "lifeCycle", tk_133), [2]);
                    }
                  });
                }),
              ];
            case 1:
              if ((n_771.sent(), !B_22)) return (console.warn("event api can only be used in app."), [2]);
              if ("pageDeinit" === e_768) return (tI_138.push(t_769), [2]);
              if ((i_770 = tv_132[e_768]).includes(t_769)) return [2];
              return (i_770.push(t_769), [2]);
          }
        });
      });
    },
    tB_137 = function (e_773, t_774) {
      if (!B_22) return void console.warn("event api can only be used in app.");
      if ("pageDeinit" === e_773) {
        var i_775 = tI_138.indexOf(t_774);
        -1 !== i_775 && tI_138.splice(i_775, 1);
        return;
      }
      var n_776 = tv_132[e_773],
        a_777 = n_776.indexOf(t_774);
      -1 !== a_777 && n_776.splice(a_777, 1);
    },
    tI_138 = [],
    tC_139 = function () {},
    tS_140 = function () {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        return (0, GryphlineWebSDKV180.YH)(this, function (e_778) {
          return (
            null == tI_138 ||
              tI_138.forEach(function (e_779) {
                null == e_779 || e_779();
              }),
            setTimeout(function () {
              eA_63("SKPage", "pop");
            }, 120),
            [2]
          );
        });
      });
    },
    tD_141 = function (e_780) {
      var t_781 = e_780;
      return (
        D_26 &&
          (t_781 = {
            schema: e_780,
          }),
        eA_63("SKNavigation", "dispatch", t_781)
      );
    },
    tM_142 = function (e_782) {
      return eA_63("SKNavigation", "openURL", {
        url: e_782,
      });
    },
    tN_143 = function () {
      return eA_63("SKNavigation", "openAuthenticationPage");
    },
    tP_144 = function (e_783) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_784, i_785, n_786;
        return (0, GryphlineWebSDKV180.YH)(this, function (a_787) {
          switch (a_787.label) {
            case 0:
              return [
                4,
                eA_63("SKNavigation", "openGallery", {
                  files: (t_784 = (null == e_783 ? void 0 : e_783.images) || []).map(function (e_788) {
                    return e_788.path;
                  }),
                  limit: (null == e_783 ? void 0 : e_783.limit) || 9,
                }),
              ];
            case 1:
              if (
                ((n_786 = (i_785 = a_787.sent()).files.map(function (e_789) {
                  var i_790 = t_784.find(function (t_791) {
                    return t_791.path === e_789;
                  });
                  return (
                    i_790 || {
                      path: e_789,
                    }
                  );
                })),
                0 === i_785.code)
              )
                return [
                  2,
                  (0, GryphlineWebSDKV180.Cl)((0, GryphlineWebSDKV180.Cl)({}, i_785), {
                    images: n_786,
                  }),
                ];
              return [
                2,
                (0, GryphlineWebSDKV180.Cl)((0, GryphlineWebSDKV180.Cl)({}, i_785), {
                  images: t_784,
                }),
              ];
          }
        });
      });
    },
    tG_145 = function (e_792) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_793, i_794, n_795, a_796, r_797, o_798, s_799;
        return (0, GryphlineWebSDKV180.YH)(this, function (c_800) {
          switch (c_800.label) {
            case 0:
              if (
                !(i_794 = (t_793 = e_792.images).filter(function (e_801) {
                  return !e_801.url;
                })).length
              )
                return [
                  2,
                  {
                    code: 0,
                    message: "ok",
                    images: t_793,
                  },
                ];
              return [
                4,
                eA_63("SKNetwork", "executeUpload", {
                  files: i_794.map(function (e_802) {
                    return e_802.path;
                  }),
                }),
              ];
            case 1:
              return (
                (a_796 = (n_795 = c_800.sent()).code),
                (r_797 = n_795.files),
                (o_798 = (0, GryphlineWebSDKV180.Tt)(n_795, ["code", "files"])),
                (s_799 = (0, GryphlineWebSDKV180.Cl)(
                  {
                    code: a_796,
                    images: [],
                  },
                  o_798,
                )),
                0 === a_796 &&
                  ((s_799.isCompleted = i_794.length === r_797.length),
                  (s_799.images = t_793.map(function (e_803) {
                    return (
                      r_797.find(function (t_804) {
                        return t_804.path === e_803.path;
                      }) || e_803
                    );
                  }))),
                [2, s_799]
              );
          }
        });
      });
    },
    tV_146 = (function (e_805) {
      return {
        all: (e_805 = e_805 || new Map()),
        on: function (t_806, i_807) {
          var n_808 = e_805.get(t_806);
          (n_808 && n_808.push(i_807)) || e_805.set(t_806, [i_807]);
        },
        off: function (t_809, i_810) {
          var n_811 = e_805.get(t_809);
          n_811 && n_811.splice(n_811.indexOf(i_810) >>> 0, 1);
        },
        emit: function (t_812, i_813) {
          ((e_805.get(t_812) || []).slice().map(function (e_814) {
            e_814(i_813);
          }),
            (e_805.get("*") || []).slice().map(function (e_815) {
              e_815(t_812, i_813);
            }));
        },
      };
    })(),
    tO_147 = new Promise(function (e_816) {
      setTimeout(function () {
        e_816(!0);
      }, 1e3);
    }),
    tQ_148 = function (e_817) {
      var t_818 = e_817.eventName,
        i_819 = e_817.data;
      tV_146.emit(t_818, {
        eventName: t_818,
        data: i_819,
      });
    },
    tj_149 = function (e_820, t_821) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var i_822;
        return (0, GryphlineWebSDKV180.YH)(this, function (n_823) {
          switch (n_823.label) {
            case 0:
              return [4, tO_147];
            case 1:
              if ((n_823.sent(), !B_22)) return (console.warn("eventBus api can only be used in app."), [2]);
              if (null == (i_822 = tV_146.all.get(e_820)) ? void 0 : i_822.includes(t_821)) return [2];
              return (
                (null == i_822 ? void 0 : i_822.length) ||
                  eA_63("SKMessage", "register", tQ_148, {
                    eventName: e_820,
                  }),
                tV_146.on(e_820, t_821),
                [2]
              );
          }
        });
      });
    },
    tR_150 = function (e_824, t_825) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var i_826;
        return (0, GryphlineWebSDKV180.YH)(this, function (n_827) {
          switch (n_827.label) {
            case 0:
              return [4, tO_147];
            case 1:
              if ((n_827.sent(), !B_22)) return (console.warn("eventBus api can only be used in app."), [2]);
              return (
                tV_146.off(e_824, t_825),
                (null == (i_826 = tV_146.all.get(e_824)) ? void 0 : i_826.length) ||
                  eA_63("SKMessage", "unregister", function () {}, {
                    eventName: e_824,
                  }),
                [2]
              );
          }
        });
      });
    },
    tT_151 = function (e_828, t_829) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        return (0, GryphlineWebSDKV180.YH)(this, function (i_830) {
          switch (i_830.label) {
            case 0:
              return [4, tO_147];
            case 1:
              return (
                i_830.sent(),
                eA_63("SKMessage", "sendMessage", {
                  eventName: e_828,
                  data: t_829 || {},
                }),
                [2]
              );
          }
        });
      });
    },
    framerMotion = webpackRequire(8147),
    framerMotionDefault = webpackRequire.n(framerMotion);
  let tL_152 = JSON.parse(
      '{"v":"5.10.0","fr":60,"ip":0,"op":141,"w":1000,"h":1000,"nm":"小鹰_CUT","ddd":0,"assets":[{"id":"comp_0","nm":"IP形象循环","fr":60,"layers":[{"ddd":0,"ind":3,"ty":3,"nm":"控制器 2","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2302,508,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":0,"nm":"IP形象","parent":3,"refId":"comp_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.3],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":80,"s":[4]},{"t":140,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[-1292,28,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":80,"s":[-1292,-72,0],"to":[0,0,0],"ti":[0,0,0]},{"t":140,"s":[-1292,28,0]}],"ix":2,"l":2},"a":{"a":0,"k":[1000,1000,0],"ix":1,"l":2},"s":{"a":0,"k":[40,40,100],"ix":6,"l":2}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":140,"s":[2.333]}],"ix":2},"w":2000,"h":2000,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":0,"nm":"效果线","refId":"comp_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[960,540,0],"ix":2,"l":2},"a":{"a":0,"k":[960,540,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"tm":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"t":140,"s":[2.333]}],"ix":2},"w":1920,"h":1080,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"云 3","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-50,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-23,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":-3,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":32,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":52,"s":[0]},{"t":90,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":-50,"s":[654.959,331.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":90,"s":[1426.959,331.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-217.041,273.5,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[83,0],[0,0],[21.346,-12.341],[-5,-20],[0,0],[-14,0],[-4,22],[17.471,7.779],[0,0]],"o":[[-81,0],[0,0],[-20.354,11.767],[6.366,25.465],[0,0],[14,0],[3.157,-17.364],[-24.855,-11.067],[0,0]],"v":[[-221,210],[-323,258],[-378.846,261.341],[-400.5,310],[-356.5,337],[-80,337],[-32.5,309.5],[-57.576,263.17],[-118,258]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.639215686275,0.639215686275,0.639215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":-50,"op":1750,"st":-50,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"云","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":27,"s":[0]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":47,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":82,"s":[100]},{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":102,"s":[0]},{"t":140,"s":[0]}],"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":0,"s":[666.959,711.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":140,"s":[1326.959,711.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-217.041,273.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[83,0],[0,0],[21.346,-12.341],[-5,-20],[0,0],[-14,0],[-4,22],[17.471,7.779],[0,0]],"o":[[-81,0],[0,0],[-20.354,11.767],[6.366,25.465],[0,0],[14,0],[3.157,-17.364],[-24.855,-11.067],[0,0]],"v":[[-221,210],[-323,258],[-378.846,261.341],[-400.5,310],[-356.5,337],[-80,337],[-32.5,309.5],[-57.576,263.17],[-118,258]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.639215686275,0.639215686275,0.639215686275,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0}]},{"id":"comp_1","nm":"IP形象","fr":60,"layers":[{"ddd":0,"ind":3,"ty":3,"nm":"总体控制器","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[992,2332,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"手1","parent":24,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":5,"s":[56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":17,"s":[56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":23,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":28,"s":[56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":34.285,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":40,"s":[56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":45.715,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":51.428,"s":[56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":57.143,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":62.857,"s":[56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":68.572,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":74,"s":[56]},{"t":80,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[234.536,381.975,0],"to":[0,0,0],"ti":[0,0,0]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":80,"s":[243.581,400.474,0],"to":[0,0,0],"ti":[0,0,0]},{"t":140,"s":[234.536,381.975,0]}],"ix":2,"l":2},"a":{"a":0,"k":[172,401.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[13.122,-33.252],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-17.893,45.344],[-80.201,46.27]],"v":[[172,401],[297.109,349.664],[373.525,335.435],[356.357,397.181],[252,542]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":2,"s":[{"i":[[-65.967,66.799],[-52.837,15.053],[-11.214,-8.169],[10.787,-27.591],[64.453,-41.517]],"o":[[40.287,-41.46],[49.786,-14.227],[5.68,4.283],[-14.948,38.254],[-77.91,49.964]],"v":[[172,401],[300.98,356.537],[386.227,335.129],[384.194,390.171],[290.591,516.675]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":3,"s":[{"i":[[-60.355,73.379],[-52.503,15.224],[-14.299,-10.02],[9.163,-25.961],[65.855,-43.843]],"o":[[38.279,-46.542],[52.495,-15.222],[6.865,4.82],[-12.686,35.979],[-77.108,51.257]],"v":[[172,401],[302.536,345.237],[392.937,327.127],[394.3,378.473],[316.572,485.754]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":4,"s":[{"i":[[-61.38,72.176],[-52.366,15.77],[-12.998,-10.209],[10.958,-26.9],[30.442,-27.935]],"o":[[38.646,-45.613],[52.795,-15.947],[6.269,5.502],[-13.203,33.283],[-77.255,51.021]],"v":[[172,401],[308.979,341.809],[400.04,325.35],[397.176,379.37],[344.872,458.2]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":5,"s":[{"i":[[-63.18,70.066],[-52.124,16.728],[-10.715,-10.541],[14.109,-28.549],[11.842,-12.79]],"o":[[39.29,-43.983],[53.321,-17.221],[5.224,6.699],[-14.109,28.549],[-77.512,50.606]],"v":[[172,401],[320.286,335.791],[412.508,322.23],[402.223,380.944],[363.717,434.619]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":6,"s":[{"i":[[-65.915,66.86],[-51.757,18.185],[-7.247,-11.045],[19.157,-34.634],[17.322,-26.041]],"o":[[40.268,-41.507],[54.122,-19.157],[3.635,8.518],[-16.274,30.006],[-77.903,49.976]],"v":[[172,401],[307.099,330.644],[402.817,318.989],[379.536,384.972],[340.956,454.69]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":8,"s":[{"i":[[-71.169,60.699],[-51.051,20.983],[-0.583,-12.013],[28.857,-46.327],[22.138,-54.197]],"o":[[42.148,-36.749],[55.659,-22.877],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[281.762,320.755],[379.131,320.06],[335.949,392.709],[286.475,507.684]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":9,"s":[{"i":[[-75.221,55.948],[-44.917,14.435],[-1.264,-8.596],[23.832,-41.059],[36.47,-46.967]],"o":[[43.598,-33.079],[47.283,-15.408],[1.223,8.547],[-20.799,37.275],[-79.232,47.831]],"v":[[172,401],[289.231,339.159],[379.008,333.47],[349.61,405.183],[264.655,532.549]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":10,"s":[{"i":[[-79.495,50.937],[-38.449,7.531],[-1.981,-4.992],[18.533,-35.504],[51.585,-39.342]],"o":[[45.127,-29.209],[38.449,-7.531],[1.897,4.892],[-21.184,41.99],[-79.843,46.847]],"v":[[172,401],[297.107,358.568],[378.878,347.613],[359.566,414.6],[252.628,545.434]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":11,"s":[{"i":[[-81.486,48.603],[-50.026,11.169],[-2.316,-3.314],[16.065,-32.915],[58.627,-35.789]],"o":[[45.839,-27.406],[42.774,-9.55],[2.212,3.189],[-21.364,44.186],[-80.127,46.388]],"v":[[172,401],[302.124,360.464],[380.165,347.055],[361.691,411.577],[258.99,541.319]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":12,"s":[{"i":[[-76.12,54.894],[-49.457,8.974],[-5.362,-5.015],[14.306,-31.143],[60.478,-37.829]],"o":[[43.919,-32.265],[45.828,-8.316],[3.395,3.6],[-19.159,42.105],[-79.361,47.624]],"v":[[172,401],[296.655,360.7],[383.5,343.834],[367.104,401.706],[274.549,533.939]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":13,"s":[{"i":[[-66.353,66.346],[-52.86,15.041],[-10.906,-8.11],[11.104,-27.916],[63.848,-41.541]],"o":[[40.425,-41.11],[49.6,-14.159],[5.549,4.348],[-15.145,38.317],[-77.965,49.875]],"v":[[172,401],[291.966,360.7],[385.285,333.032],[378.449,385.832],[293.819,517.04]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":14,"s":[{"i":[[-60.788,72.87],[-52.529,15.211],[-14.064,-9.874],[9.28,-26.078],[65.768,-43.655]],"o":[[38.434,-46.149],[52.285,-15.145],[6.775,4.774],[-12.859,36.159],[-77.17,51.157]],"v":[[172,401],[288.716,360.958],[389.826,328.543],[388.436,378.454],[309.87,489.428]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":15,"s":[{"i":[[-61.513,72.021],[-52.572,15.189],[-13.124,-10.023],[10.964,-26.687],[32.257,-31.969]],"o":[[38.693,-45.493],[51.936,-15.016],[6.343,5.279],[-13.877,34.891],[-77.274,50.99]],"v":[[172,401],[291.841,356.842],[398.438,324.901],[393.069,376.669],[330.383,470.007]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":16,"s":[{"i":[[-63.095,70.166],[-52.666,15.141],[-11.069,-10.349],[14.645,-28.018],[19.101,-21.289]],"o":[[39.259,-44.06],[51.172,-14.736],[5.4,6.383],[-16.101,32.12],[-77.5,50.626]],"v":[[172,401],[298.669,347.848],[405.989,321.118],[391.925,376.943],[344.639,445.858]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":17,"s":[{"i":[[-64.677,68.311],[-52.761,15.092],[-9.014,-10.675],[18.325,-29.348],[9.816,-11.022]],"o":[[39.825,-42.628],[50.409,-14.456],[4.456,7.486],[-18.325,29.348],[-77.726,50.261]],"v":[[172,401],[305.497,338.854],[410.179,319.723],[387.419,379.604],[349.009,426.583]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":18,"s":[{"i":[[-66.899,65.705],[-52.53,16.176],[-6.128,-11.133],[20.844,-35.642],[8.531,-17.352]],"o":[[40.62,-40.615],[51.033,-15.775],[3.13,9.036],[-18.321,30.953],[-78.043,49.749]],"v":[[172,401],[299.396,334.255],[398.824,318.838],[368.942,385.083],[334.35,442.205]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":20,"s":[{"i":[[-71.169,60.699],[-52.087,18.258],[-0.583,-12.013],[25.683,-47.734],[6.062,-29.513]],"o":[[42.148,-36.749],[52.233,-18.309],[0.583,12.013],[-18.312,34.035],[-78.653,48.765]],"v":[[172,401],[287.676,325.418],[377.008,317.138],[333.442,395.61],[295.832,493.402]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":21,"s":[{"i":[[-75.589,55.517],[-53.41,14.76],[-1.325,-8.286],[23.376,-40.581],[37.771,-46.311]],"o":[[43.729,-32.746],[45.143,-12.522],[1.281,8.233],[-20.832,37.681],[-79.285,47.747]],"v":[[172,401],[286.021,345.135],[382.698,341.131],[344.46,413.062],[276.548,520.424]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":22,"s":[{"i":[[-80.25,50.051],[-49.307,10.556],[-2.108,-4.356],[17.597,-34.522],[54.257,-37.994]],"o":[[45.397,-28.525],[43.475,-9.308],[2.017,4.246],[-21.253,42.823],[-79.951,46.673]],"v":[[172,401],[296.77,358.992],[381.317,349.949],[353.708,412.8],[257.977,539.23]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":23,"s":[{"i":[[-81.844,48.183],[-53.782,14.57],[-2.488,-2.932],[12.372,-33.474],[60.485,-34.937]],"o":[[45.967,-27.082],[42.125,-11.413],[2.326,2.764],[-17.191,46.51],[-80.178,46.306]],"v":[[172,401],[300.645,359.292],[377.243,344.825],[360.691,406.025],[249.046,548.346]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":24,"s":[{"i":[[-75.377,55.766],[-53.397,14.767],[-6.046,-5.062],[13.503,-30.315],[62.12,-37.61]],"o":[[43.653,-32.938],[45.246,-12.559],[3.694,3.379],[-18.739,42.072],[-79.254,47.796]],"v":[[172,401],[295.843,360.548],[377.739,340.877],[364.141,397.544],[259.848,536.532]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":25,"s":[{"i":[[-64.026,69.074],[-52.722,15.112],[-12.291,-8.802],[10.204,-27.005],[64.991,-42.302]],"o":[[39.592,-43.217],[50.723,-14.571],[6.095,4.458],[-14.161,37.477],[-77.633,50.412]],"v":[[172,401],[290.517,359.089],[381.817,335.819],[377.767,387.21],[282.739,507.871]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":26,"s":[{"i":[[-60.403,73.322],[-52.506,15.223],[-14.237,-10.029],[9.251,-26.052],[65.66,-43.889]],"o":[[38.296,-46.498],[52.471,-15.213],[6.837,4.852],[-12.721,35.965],[-77.115,51.246]],"v":[[172,401],[290.379,360.309],[388.13,329.639],[390.519,381.577],[306.404,477.112]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":27,"s":[{"i":[[-61.424,72.125],[-52.567,15.192],[-12.943,-10.217],[13.035,-28.988],[35.205,-31.801]],"o":[[38.661,-45.574],[51.979,-15.032],[6.244,5.531],[-13.035,28.988],[-77.261,51.011]],"v":[[172,401],[304.13,348.258],[401.174,320.788],[398.549,374.882],[333.523,455.3]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":28,"s":[{"i":[[-63.216,70.024],[-52.674,15.137],[-10.67,-10.547],[12.581,-24.677],[13.974,-14.213]],"o":[[39.302,-43.951],[51.114,-14.715],[5.203,6.723],[-12.581,24.677],[-77.517,50.598]],"v":[[172,401],[310.738,336.854],[406.541,315.002],[395.113,372.878],[352.106,433.212]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":29,"s":[{"i":[[-65.929,66.843],[-52.835,15.054],[-7.229,-11.047],[18.133,-32.063],[16.759,-27.854]],"o":[[40.273,-41.494],[49.805,-14.234],[3.627,8.528],[-15.26,27.45],[-77.905,49.973]],"v":[[172,401],[305.927,332.208],[399.849,318.864],[375.093,382.467],[336.437,447.135]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":30,"s":[{"i":[[-68.642,63.662],[-52.997,14.972],[-3.788,-11.547],[23.686,-39.449],[19.544,-41.495]],"o":[[41.244,-39.037],[48.495,-13.753],[2.051,10.332],[-17.939,30.223],[-78.292,49.348]],"v":[[172,401],[301.115,327.563],[393.158,322.726],[355.073,392.057],[315.862,469.435]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":31,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.856,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[296.634,323.237],[386.926,326.322],[336.429,400.987],[295.463,492.042]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":33,"s":[{"i":[[-78.575,52.015],[-53.587,14.669],[-1.827,-5.768],[19.674,-36.699],[48.332,-40.983]],"o":[[44.798,-30.042],[43.702,-11.993],[1.752,5.678],[-21.101,40.975],[-79.711,47.059]],"v":[[172,401],[288.31,346.897],[375.55,338.131],[344.858,410.608],[259.234,537.43]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":34,"s":[{"i":[[-81.684,48.371],[-53.772,14.575],[-2.349,-3.147],[15.819,-32.658],[59.327,-35.436]],"o":[[45.91,-27.226],[42.202,-11.442],[2.243,3.02],[-21.381,44.404],[-80.155,46.342]],"v":[[172,401],[300.288,357.192],[377.703,343.467],[357.01,403.774],[245.759,552.007]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":35,"s":[{"i":[[-76.575,54.36],[-53.468,14.73],[-5.214,-4.791],[14.219,-31.048],[60.906,-37.444]],"o":[[44.082,-31.853],[44.667,-12.347],[3.352,3.448],[-19.298,42.389],[-79.425,47.52]],"v":[[172,401],[292.17,362.199],[375.371,340.457],[359.404,398.22],[249.208,539.133]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":36,"s":[{"i":[[-66.868,65.742],[-52.891,15.026],[-10.658,-7.915],[11.178,-27.988],[63.906,-41.26]],"o":[[40.609,-40.643],[49.351,-14.067],[5.458,4.262],[-15.338,38.56],[-78.039,49.756]],"v":[[172,401],[303.857,359.586],[381.386,338.905],[377.152,396.461],[268.534,526.205]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":37,"s":[{"i":[[-60.551,73.148],[-52.515,15.218],[-14.2,-9.948],[9.199,-25.996],[65.858,-43.743]],"o":[[38.349,-46.364],[52.4,-15.187],[6.828,4.791],[-12.761,36.069],[-77.137,51.212]],"v":[[172,401],[299.479,355.69],[382.921,332.475],[381.775,382.258],[287.422,495.985]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":38,"s":[{"i":[[-61.536,71.994],[-52.574,15.188],[-12.937,-10.14],[10.496,-26.547],[55.898,-38.019]],"o":[[38.701,-45.472],[51.924,-15.012],[6.249,5.461],[-13.394,34.744],[-77.277,50.985]],"v":[[172,401],[306.186,344.777],[391.137,324.433],[387.002,375.819],[310.093,475.338]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":39,"s":[{"i":[[-63.688,69.471],[-52.702,15.123],[-10.178,-10.558],[13.329,-27.752],[34.137,-25.512]],"o":[[39.471,-43.524],[50.886,-14.631],[4.984,6.924],[-14.778,31.85],[-77.585,50.489]],"v":[[172,401],[312.2,333.234],[400.448,319.162],[389.783,374.052],[328.901,449.387]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":40,"s":[{"i":[[-65.839,66.948],[-52.83,15.057],[-7.418,-10.977],[16.161,-28.956],[12.377,-13.006]],"o":[[40.241,-41.575],[49.848,-14.25],[3.718,8.388],[-16.161,28.956],[-77.892,49.993]],"v":[[172,401],[314.777,326.709],[406.322,318.911],[389.127,377.303],[344.731,433.748]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":41,"s":[{"i":[[-68.575,63.741],[-52.993,14.974],[-3.91,-11.509],[22.678,-37.872],[17.387,-34.149]],"o":[[41.22,-39.098],[48.528,-13.765],[2.109,10.249],[-18.354,30.931],[-78.283,49.363]],"v":[[172,401],[303.218,323.025],[397.274,317.573],[363.274,387.015],[328.618,449.103]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":42,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[12.841,-27.067]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[290.302,325.767],[386.738,322.54],[336.804,402.459],[302.068,466.642]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":44,"s":[{"i":[[-76.604,54.327],[-53.47,14.729],[-1.496,-7.43],[22.118,-39.262],[41.36,-44.5]],"o":[[44.092,-31.827],[44.653,-12.342],[1.441,7.365],[-20.924,38.8],[-79.43,47.513]],"v":[[172,401],[286.983,348.73],[374.791,342.439],[329.787,419.821],[265.498,527.892]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":45,"s":[{"i":[[-80.542,49.71],[-53.704,14.609],[-2.157,-4.11],[17.235,-34.143],[55.287,-37.474]],"o":[[45.501,-28.261],[42.753,-11.644],[2.063,3.997],[-21.279,43.144],[-79.992,46.606]],"v":[[172,401],[292.727,355.952],[373.752,344.049],[347.549,406.383],[246.768,545.112]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":46,"s":[{"i":[[-81.396,48.708],[-53.755,14.583],[-2.735,-3.079],[15.252,-32.071],[60.598,-35.122]],"o":[[45.807,-27.487],[42.341,-11.493],[2.421,2.807],[-21.166,44.508],[-80.114,46.409]],"v":[[172,401],[289.678,359.099],[369.245,346.012],[350.585,405.477],[241.414,547.832]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":47,"s":[{"i":[[-74.323,57.002],[-53.334,14.799],[-6.626,-5.41],[13.196,-30.008],[62.387,-38.046]],"o":[[43.276,-33.893],[45.754,-12.746],[3.917,3.479],[-18.314,41.645],[-79.104,48.039]],"v":[[172,401],[299.898,357.07],[375.294,345.444],[362.583,401.622],[254.86,529.532]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":48,"s":[{"i":[[-63.357,69.859],[-52.682,15.133],[-12.659,-9.022],[10.01,-26.81],[65.16,-42.579]],"o":[[39.353,-43.823],[51.046,-14.69],[6.236,4.522],[-13.891,37.206],[-77.537,50.566]],"v":[[172,401],[289.531,360.129],[378.19,336.984],[374.702,388.064],[276.663,510.561]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":49,"s":[{"i":[[-60.338,73.398],[-52.503,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[312.416,343.965],[388.714,327.542],[391.156,382.787],[294.79,483.101]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":50,"s":[{"i":[[-61.343,72.22],[-52.562,15.194],[-13.046,-10.202],[10.312,-26.145],[37.544,-26.358]],"o":[[38.632,-45.647],[52.018,-15.047],[6.291,5.477],[-13.194,34.327],[-77.25,51.029]],"v":[[172,401],[316.16,335.691],[393.552,320.967],[391.536,378.174],[317.91,462.375]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":51,"s":[{"i":[[-63.537,69.647],[-52.693,15.127],[-10.262,-10.607],[12.888,-26.616],[26.19,-21.468]],"o":[[39.418,-43.66],[50.959,-14.658],[5.016,6.937],[-14.329,30.707],[-77.563,50.524]],"v":[[172,401],[322.911,324.314],[402.691,313.305],[390.938,374.8],[336.573,440.023]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":52,"s":[{"i":[[-65.732,67.074],[-52.823,15.06],[-7.478,-11.011],[15.465,-27.086],[14.836,-16.579]],"o":[[40.203,-41.672],[49.899,-14.269],[3.741,8.397],[-15.465,27.086],[-77.877,50.018]],"v":[[172,401],[319.237,321.264],[401.406,313.968],[379.914,379.752],[332.714,444.48]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":53,"s":[{"i":[[-68.523,63.802],[-52.989,14.975],[-3.939,-11.525],[22.339,-36.962],[13.813,-30.045]],"o":[[41.201,-39.145],[48.553,-13.774],[2.12,10.253],[-18.015,30.021],[-78.275,49.375]],"v":[[172,401],[304.16,322.189],[389.366,319.616],[355.493,390.851],[313.172,465.529]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":54,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[12.843,-42.813]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[289.864,323.066],[377.95,324.971],[332.336,401.376],[292.663,493.227]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":55,"s":[{"i":[[-74.478,56.82],[-53.344,14.794],[-1.139,-9.223],[15.794,-43.011],[33.839,-48.294]],"o":[[43.332,-33.753],[45.679,-12.719],[1.105,9.183],[-11.504,31.328],[-79.126,48.003]],"v":[[172,401],[293.449,339.923],[375.038,334.647],[334.71,408.997],[272.384,523.042]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":56,"s":[{"i":[[-78.975,51.547],[-53.611,14.657],[-1.894,-5.431],[19.178,-36.18],[49.746,-40.27]],"o":[[44.941,-29.68],[43.509,-11.922],[1.815,5.337],[-21.137,41.416],[-79.769,46.967]],"v":[[172,401],[286.671,349.522],[372.648,340.119],[343.119,410.037],[248.943,544.64]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":57,"s":[{"i":[[-81.901,48.116],[-53.785,14.568],[-2.386,-2.964],[15.55,-32.376],[60.096,-35.049]],"o":[[45.988,-27.03],[42.097,-11.403],[2.277,2.834],[-21.401,44.644],[-80.186,46.292]],"v":[[172,401],[292.816,358.945],[369.545,344.874],[349.9,404.796],[239.518,547.043]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":58,"s":[{"i":[[-76.311,54.671],[-53.453,14.738],[-5.48,-4.792],[13.886,-30.704],[61.607,-37.324]],"o":[[43.988,-32.092],[44.795,-12.394],[3.469,3.346],[-19.138,42.399],[-79.388,47.58]],"v":[[172,401],[293.925,361.037],[374.172,345.401],[359.374,402.667],[245.105,537.46]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":59,"s":[{"i":[[-66.135,66.601],[-52.847,15.048],[-11.112,-8.121],[10.858,-27.662],[64.357,-41.467]],"o":[[40.347,-41.307],[49.705,-14.197],[5.639,4.278],[-15.02,38.312],[-77.934,49.925]],"v":[[172,401],[287.475,351.548],[371.95,330.125],[365.975,382.556],[261.142,518.501]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":60,"s":[{"i":[[-60.338,73.398],[-52.502,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[312.416,343.965],[383.777,333.951],[382.828,383.628],[283.879,496.374]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":61,"s":[{"i":[[-61.365,72.194],[-52.564,15.193],[-13.018,-10.206],[11.003,-27.863],[51.502,-37.034]],"o":[[38.64,-45.627],[52.007,-15.043],[6.278,5.492],[-13.41,35.683],[-77.253,51.024]],"v":[[172,401],[315.981,338.651],[389.661,329.81],[387.424,384.461],[307.228,477.185]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":62,"s":[{"i":[[-63.168,70.081],[-52.671,15.138],[-10.731,-10.538],[14.285,-31.258],[26.189,-25.111]],"o":[[39.285,-43.995],[51.137,-14.723],[5.231,6.691],[-14.701,35.154],[-77.51,50.609]],"v":[[172,401],[322.239,329.322],[399.99,322.542],[385.909,379.086],[329.927,455.811]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":63,"s":[{"i":[[-65.907,66.869],[-52.834,15.055],[-7.257,-11.043],[18.606,-28.285],[20.133,-25.348]],"o":[[40.265,-41.514],[49.816,-14.238],[3.64,8.513],[-18.606,28.285],[-77.902,49.978]],"v":[[172,401],[323.423,324.079],[407.359,320.43],[385.682,376.833],[338.02,440.647]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":64,"s":[{"i":[[-68.608,63.702],[-52.995,14.973],[-3.831,-11.541],[23.868,-37.546],[13.206,-27.787]],"o":[[41.232,-39.068],[48.512,-13.759],[2.071,10.309],[-19.544,30.605],[-78.287,49.355]],"v":[[172,401],[307.857,321.079],[397.893,320.518],[361.055,386.961],[320.632,459.012]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":65,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[6.636,-30.099]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[287.409,323.563],[383.229,325.93],[332.015,401.894],[299.078,483.844]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":66,"s":[{"i":[[-74.145,57.21],[-53.324,14.804],[-1.083,-9.504],[25.167,-42.459],[24.705,-36.519]],"o":[[43.213,-34.054],[45.84,-12.778],[1.053,9.468],[-20.702,36.087],[-79.078,48.08]],"v":[[172,401],[289.447,334.255],[377.271,332.822],[333.001,409.36],[278.865,506.141]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":67,"s":[{"i":[[-77.282,53.531],[-53.51,14.709],[-1.61,-6.858],[21.277,-38.38],[43.76,-43.29]],"o":[[44.335,-31.212],[44.326,-12.222],[1.548,6.784],[-20.985,39.549],[-79.526,47.357]],"v":[[172,401],[291.595,345.529],[370.988,340.09],[334.04,417.233],[257.549,529.655]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":68,"s":[{"i":[[-80.982,49.194],[-53.731,14.596],[-2.231,-3.739],[16.69,-33.571],[56.843,-36.689]],"o":[[45.659,-27.862],[42.541,-11.566],[2.132,3.62],[-21.318,43.629],[-80.055,46.504]],"v":[[172,401],[295.82,357.827],[370.872,348.614],[346.792,410.167],[245.973,542.292]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":69,"s":[{"i":[[-80.687,49.539],[-53.713,14.605],[-3.124,-3.313],[15.046,-31.864],[60.777,-35.415]],"o":[[45.553,-28.129],[42.683,-11.618],[2.571,2.874],[-20.88,44.222],[-80.013,46.572]],"v":[[172,401],[298.372,362.214],[373.227,348.38],[355.164,407.516],[240.083,540.951]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":70,"s":[{"i":[[-73.174,58.348],[-53.266,14.834],[-7.258,-5.788],[12.862,-29.673],[62.677,-38.521]],"o":[[42.865,-34.933],[46.309,-12.95],[4.16,3.589],[-17.85,41.18],[-78.94,48.303]],"v":[[172,401],[292.254,362.169],[375.544,342.295],[362.196,409.104],[263.896,521.23]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":71,"s":[{"i":[[-62.332,71.06],[-52.621,15.164],[-13.223,-9.36],[9.712,-26.511],[65.419,-43.002]],"o":[[38.986,-44.751],[51.54,-14.871],[6.453,4.619],[-13.478,36.792],[-77.391,50.801]],"v":[[172,401],[315.149,343.201],[378.228,331.67],[375.602,382.274],[276.063,501.602]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":72,"s":[{"i":[[-62.926,70.364],[-52.656,15.146],[-12.373,-9.538],[11.593,-27.159],[56.257,-38.099]],"o":[[39.199,-44.213],[51.254,-14.766],[6.058,5.116],[-14.658,35.526],[-77.476,50.664]],"v":[[172,401],[317.445,340.426],[384.018,330.099],[377.029,383.038],[298.445,482.31]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":73,"s":[{"i":[[-64.224,68.843],[-52.734,15.106],[-10.517,-9.928],[15.704,-28.576],[28.825,-25.086]],"o":[[39.663,-43.038],[50.628,-14.536],[5.196,6.202],[-17.236,32.759],[-77.661,50.366]],"v":[[172,401],[322.461,334.364],[396.669,326.666],[380.147,384.706],[321.355,456.671]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":74,"s":[{"i":[[-65.521,67.321],[-52.811,15.067],[-8.661,-10.317],[19.814,-29.993],[16.221,-16.671]],"o":[[40.127,-41.863],[50.001,-14.306],[4.335,7.288],[-19.814,29.993],[-77.846,50.067]],"v":[[172,401],[327.477,328.302],[409.32,323.233],[383.264,386.375],[337.718,441.525]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.167},"t":75,"s":[{"i":[[-67.455,65.054],[-52.926,15.008],[-5.896,-10.898],[22.909,-35.584],[18.246,-29.516]],"o":[[40.819,-40.112],[49.068,-13.963],[3.05,8.905],[-20.026,30.956],[-78.123,49.621]],"v":[[172,401],[316.257,325.581],[401.915,323.689],[364.742,389.967],[326.869,453.633]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":76,"s":[{"i":[[-69.361,62.819],[-53.039,14.95],[-3.169,-11.47],[25.962,-41.098],[20.243,-42.185]],"o":[[41.501,-38.386],[48.148,-13.626],[1.784,10.5],[-20.236,31.905],[-78.395,49.182]],"v":[[172,401],[305.192,322.898],[391.458,325.275],[346.475,393.51],[310.035,474.367]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.167,"y":0.131},"t":77,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[294.699,320.354],[381.542,326.78],[329.154,396.869],[292.072,497.899]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.167},"t":79,"s":[{"i":[[-79.732,50.659],[-53.656,14.634],[-2.021,-4.793],[18.239,-35.195],[52.424,-38.919]],"o":[[45.212,-28.994],[43.144,-11.788],[1.935,4.689],[-21.206,42.251],[-79.877,46.792]],"v":[[172,401],[286.835,351.502],[370.418,340.891],[341.657,410.087],[253.665,541.213]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":80,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[13.122,-33.252],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-17.893,45.344],[-80.201,46.27]],"v":[[172,401],[297.109,349.664],[373.525,335.435],[356.357,397.181],[252,542]],"c":false}]},{"t":140,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[13.122,-33.252],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-17.893,45.344],[-80.201,46.27]],"v":[[172,401],[297.109,349.664],[373.525,335.435],[356.357,397.181],[252,542]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":3,"nm":"控制器","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":80,"s":[20]},{"t":140,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[194.75,-644.75,0],"to":[12.5,0.583,0],"ti":[-4.75,-13.333,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[227.75,-617.25,0],"to":[-4.597,-13.756,0],"ti":[13.098,0.166,0]},{"t":140,"s":[194.75,-644.75,0]}],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"角2线","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.894,12.25,0],"ix":2,"l":2},"a":{"a":0,"k":[-456.356,-170.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[0,0],[1,20.5],[-3.75,0.25],[1.25,-39.75]],"o":[[0,0],[-1,-20.5],[3.75,-0.25],[-0.998,31.743]],"v":[[-478.5,-170.5],[-469.5,-219],[-467,-268.25],[-434.25,-204.75]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[0,0],[-2.233,20.402],[-3.75,0.25],[3.947,-43.486]],"o":[[0,0],[3.526,-32.216],[3.75,-0.25],[-2.87,31.629]],"v":[[-478.5,-170.5],[-469.5,-219],[-458.8,-274.959],[-426.473,-198.003]],"c":false}]},{"t":140,"s":[{"i":[[0,0],[1,20.5],[-3.75,0.25],[1.25,-39.75]],"o":[[0,0],[-1,-20.5],[3.75,-0.25],[-0.998,31.743]],"v":[[-478.5,-170.5],[-469.5,-219],[-467,-268.25],[-434.25,-204.75]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":4,"nm":"角2面","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.894,31.75,0],"ix":2,"l":2},"a":{"a":0,"k":[-456.356,-151,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[3.75,-0.25],[-1,-20.5],[0,0],[0,0],[-0.998,31.743]],"o":[[-3.75,0.25],[1,20.5],[0,0],[0,0],[1.25,-39.75]],"v":[[-467,-268.25],[-469.5,-219],[-478.5,-170.5],[-451.75,-151],[-434.25,-204.75]],"c":true}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[3.75,-0.25],[1.733,-28.371],[0,0],[0,0],[-0.998,31.743]],"o":[[-3.75,0.25],[-1.252,20.486],[0,0],[0,0],[1.25,-39.75]],"v":[[-457.475,-272.781],[-469.5,-219],[-478.5,-170.5],[-451.75,-151],[-425.107,-200.096]],"c":true}]},{"t":140,"s":[{"i":[[3.75,-0.25],[-1,-20.5],[0,0],[0,0],[-0.998,31.743]],"o":[[-3.75,0.25],[1,20.5],[0,0],[0,0],[1.25,-39.75]],"v":[[-467,-268.25],[-469.5,-219],[-478.5,-170.5],[-451.75,-151],[-434.25,-204.75]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":8,"ty":4,"nm":"角1线","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[47.581,47.75,0],"ix":2,"l":2},"a":{"a":0,"k":[-427.669,-135,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[0,0],[-2,70.5],[11,-0.5],[13,-59.5],[0,0]],"o":[[0,0],[2,-70.5],[-11,0.5],[-13,59.5],[0,0]],"v":[[-424,-135],[-389.5,-249.5],[-415.5,-397.5],[-439,-254.5],[-466,-172]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[0,0],[-8.577,70.005],[11,-0.5],[13,-59.5],[0,0]],"o":[[0,0],[8.771,-71.585],[-11,0.5],[-13,59.5],[0,0]],"v":[[-424.917,-130.941],[-389.5,-249.5],[-398.755,-398.274],[-439,-254.5],[-466,-172]],"c":false}]},{"t":140,"s":[{"i":[[0,0],[-2,70.5],[11,-0.5],[13,-59.5],[0,0]],"o":[[0,0],[2,-70.5],[-11,0.5],[-13,59.5],[0,0]],"v":[[-424,-135],[-389.5,-249.5],[-415.5,-397.5],[-439,-254.5],[-466,-172]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":9,"ty":4,"nm":"角1面","parent":5,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[47.581,47.75,0],"ix":2,"l":2},"a":{"a":0,"k":[-427.669,-135,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[11,-0.5],[13,-59.5],[0,0],[0,0],[0,0],[-2,70.5]],"o":[[-11,0.5],[-13,59.5],[0,0],[0,0],[0,0],[2,-70.5]],"v":[[-415.5,-397.5],[-439,-254.5],[-466,-172],[-443.996,-152.615],[-424,-135],[-389.5,-249.5]],"c":true}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[11,-0.5],[13,-59.5],[0,0],[-13.565,-12.292],[0,0],[-8.736,69.985]],"o":[[-11,0.5],[-13,59.5],[0,0],[15.232,13.803],[0,0],[9.709,-77.779]],"v":[[-398.071,-396.395],[-439,-254.5],[-478.131,-170.245],[-455.924,-144.391],[-424.745,-127.545],[-389.5,-249.5]],"c":true}]},{"t":140,"s":[{"i":[[11,-0.5],[13,-59.5],[0,0],[0,0],[0,0],[-2,70.5]],"o":[[-11,0.5],[-13,59.5],[0,0],[0,0],[0,0],[2,-70.5]],"v":[[-415.5,-397.5],[-439,-254.5],[-466,-172],[-443.996,-152.615],[-424,-135],[-389.5,-249.5]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":10,"ty":3,"nm":"头部控制器","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[62,-435,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":4,"nm":"眼睛","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":80,"s":[20]},{"t":140,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[117.516,-167.609,0],"to":[2.333,-21,0],"ti":[-27.333,-5.5,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[160.516,-197.609,0],"to":[-27.94,-6.889,0],"ti":[0.451,-16.061,0]},{"t":140,"s":[117.516,-167.609,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-462.242,-37.305,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[38.516,110.391],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"椭圆路径 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[1,1,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[-462.242,-37.305],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"椭圆 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":12,"ty":4,"nm":"嘴巴线","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":80,"s":[18]},{"t":140,"s":[0]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[-208,-412,0],"to":[26.167,-29.667,0],"ti":[-31.167,10.667,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[-108,-485,0],"to":[-30.977,10.318,0],"ti":[26.35,-30.525,0]},{"t":140,"s":[-208,-412,0]}],"ix":2,"l":2},"a":{"a":0,"k":[-687,-154,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[0,0],[30.944,8.455],[0,0],[-29.221,48.739],[-6.495,9.282]],"o":[[0,0],[-30.944,-8.455],[0,0],[23.382,-39],[0,0]],"v":[[-700.25,58.75],[-736.306,39.955],[-799,31.5],[-749.727,-80.536],[-687,-154]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[0,0],[30.944,8.455],[0,0],[-29.221,48.739],[-13.363,10.651]],"o":[[0,0],[-30.944,-8.455],[0,0],[23.382,-39],[0,0]],"v":[[-709.606,62.316],[-752.475,45.208],[-799,31.5],[-749.727,-80.536],[-687.476,-153.845]],"c":false}]},{"t":140,"s":[{"i":[[0,0],[30.944,8.455],[0,0],[-29.221,48.739],[-6.495,9.282]],"o":[[0,0],[-30.944,-8.455],[0,0],[23.382,-39],[0,0]],"v":[[-700.25,58.75],[-736.306,39.955],[-799,31.5],[-749.727,-80.536],[-687,-154]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":13,"ty":4,"nm":"嘴巴暗面","parent":12,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-687,-154,0],"ix":2,"l":2},"a":{"a":0,"k":[-687,-154,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[36.727,8.036],[0,0],[-30.944,-8.455],[0,0],[0,0],[0,0]],"o":[[-29.165,-6.382],[0,0],[30.944,8.455],[0,0],[0,0],[0,0]],"v":[[-745.227,35.464],[-799,31.5],[-736.306,39.955],[-700.25,58.75],[-699.233,58.916],[-697.771,59.156]],"c":true}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[75.24,7.529],[0,0],[-30.944,-8.455],[0,0],[-26.496,6.029],[0,0]],"o":[[-86.555,-8.661],[0,0],[30.944,8.455],[0,0],[26.496,-6.029],[0,0]],"v":[[-708.008,26.826],[-799,31.5],[-744.433,48.115],[-703.734,59.356],[-672.271,45.246],[-619.013,42.115]],"c":true}]},{"t":140,"s":[{"i":[[36.727,8.036],[0,0],[-30.944,-8.455],[0,0],[0,0],[0,0]],"o":[[-29.165,-6.382],[0,0],[30.944,8.455],[0,0],[0,0],[0,0]],"v":[[-745.227,35.464],[-799,31.5],[-736.306,39.955],[-700.25,58.75],[-699.233,58.916],[-697.771,59.156]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.188235294118,0.188235294118,0.188235294118,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":14,"ty":4,"nm":"嘴巴面","parent":12,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-687,-154,0],"ix":2,"l":2},"a":{"a":0,"k":[-687,-154,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[0,0],[23.382,-39],[0,0],[-30.944,-8.455],[0,0]],"o":[[-6.495,9.282],[-29.221,48.739],[0,0],[30.944,8.455],[0,0]],"v":[[-687,-154],[-749.727,-80.536],[-799,31.5],[-736.306,39.955],[-700.25,58.75]],"c":true}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[0,0],[23.382,-39],[0,0],[-30.944,-8.455],[0,0]],"o":[[-6.495,9.282],[-29.221,48.739],[0,0],[30.944,8.455],[0,0]],"v":[[-687,-154],[-749.727,-80.536],[-799,31.5],[-744.433,48.115],[-703.734,59.356]],"c":true}]},{"t":140,"s":[{"i":[[0,0],[23.382,-39],[0,0],[-30.944,-8.455],[0,0]],"o":[[-6.495,9.282],[-29.221,48.739],[0,0],[30.944,8.455],[0,0]],"v":[[-687,-154],[-749.727,-80.536],[-799,31.5],[-736.306,39.955],[-700.25,58.75]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":15,"ty":4,"nm":"头部线","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[53.5,-526,0],"ix":2,"l":2},"a":{"a":0,"k":[-556.25,-211,0],"ix":1,"l":2},"s":{"a":0,"k":[-200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[-60,0],[0,-137],[0,0]],"o":[[60,0],[0,127.5],[0,0]],"v":[[-556.25,-211],[-382.5,-33],[-492,97.5]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[-60,0],[1.705,-136.989],[0,0]],"o":[[60,0],[-1.5,120.5],[0,0]],"v":[[-556.25,-211],[-382.5,-33],[-464.5,91.5]],"c":false}]},{"t":140,"s":[{"i":[[-60,0],[0,-137],[0,0]],"o":[[60,0],[0,127.5],[0,0]],"v":[[-556.25,-211],[-382.5,-33],[-492,97.5]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":16,"ty":4,"nm":"头部线","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[53.5,-526,0],"ix":2,"l":2},"a":{"a":0,"k":[-556.25,-211,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[-60,0],[0,-137],[0,0]],"o":[[60,0],[0,127.5],[0,0]],"v":[[-556.25,-211],[-382.5,-33],[-492,97.5]],"c":false}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[-60,0],[27.96,-155.725],[0,0]],"o":[[60,0],[-22.532,125.493],[0,0]],"v":[[-556.25,-211],[-380.96,-11.275],[-512.005,97.573]],"c":false}]},{"t":140,"s":[{"i":[[-60,0],[0,-137],[0,0]],"o":[[60,0],[0,127.5],[0,0]],"v":[[-556.25,-211],[-382.5,-33],[-492,97.5]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":17,"ty":4,"nm":"头部面","parent":10,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[53.5,-217,0],"ix":2,"l":2},"a":{"a":0,"k":[-556.25,-56.5,0],"ix":1,"l":2},"s":{"a":0,"k":[200,200,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":0,"s":[{"i":[[83.5,0],[0,-118],[0,0],[0,0],[0,134.5]],"o":[[-83.5,0],[0,127],[0,0],[0,0],[0,-107.5]],"v":[[-558.5,-211],[-730,-35],[-624,98],[-491.5,98],[-382.5,-38.5]],"c":true}]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[{"i":[[83.5,0],[0,-118],[0,0],[0,0],[-8.604,134.224]],"o":[[-83.5,0],[0,127],[0,0],[0,0],[7.5,-117]],"v":[[-558.5,-211],[-730,-35],[-624,98],[-491.5,98],[-378,-37]],"c":true}]},{"t":140,"s":[{"i":[[83.5,0],[0,-118],[0,0],[0,0],[0,134.5]],"o":[[-83.5,0],[0,127],[0,0],[0,0],[0,-107.5]],"v":[[-558.5,-211],[-730,-35],[-624,98],[-491.5,98],[-382.5,-38.5]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":18,"ty":3,"nm":"控制器 2","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[-27]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":80,"s":[-3]},{"t":140,"s":[-27]}],"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":0.605},"o":{"x":0.2,"y":0},"t":0,"s":[13.25,-664.75,0],"to":[25.149,-9.479,0],"ti":[-13.223,-17.9,0]},{"i":{"x":0.2,"y":1},"o":{"x":0.2,"y":0},"t":80,"s":[68.176,-650.685,0],"to":[0.119,0.161,0],"ti":[36.945,-15.768,0]},{"t":140,"s":[13.25,-664.75,0]}],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":19,"ty":4,"nm":"角2线 2","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.894,12.25,0],"ix":2,"l":2},"a":{"a":0,"k":[-456.356,-170.5,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[1,20.5],[-3.75,0.25],[1.25,-39.75]],"o":[[0,0],[-1,-20.5],[3.75,-0.25],[-0.998,31.743]],"v":[[-477.117,-175.968],[-469.5,-219],[-467,-268.25],[-434.25,-204.75]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":20,"ty":4,"nm":"角2面 2","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[18.894,31.75,0],"ix":2,"l":2},"a":{"a":0,"k":[-456.356,-151,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[3.75,-0.25],[-1,-20.5],[0,0],[0,0],[-0.381,11.665]],"o":[[-3.75,0.25],[1,20.5],[0,0],[0,0],[1.298,-39.748]],"v":[[-467,-268.25],[-469.5,-219],[-478.5,-170.5],[-438.214,-181.42],[-434.25,-204.75]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":21,"ty":4,"nm":"角1线 2","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[47.581,47.75,0],"ix":2,"l":2},"a":{"a":0,"k":[-427.669,-135,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[-1.902,47.016],[11,-0.5],[13,-59.5],[0,0]],"o":[[0,0],[2.851,-70.471],[-11,0.5],[-13,59.5],[0,0]],"v":[[-401.431,-177.092],[-389.5,-249.5],[-415.5,-397.5],[-439,-254.5],[-463.011,-182.823]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":22,"ty":4,"nm":"角1面 2","parent":18,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[47.581,47.75,0],"ix":2,"l":2},"a":{"a":0,"k":[-427.669,-135,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[11,-0.5],[13,-59.5],[0,0],[-20.124,-0.097],[0,0],[-0.717,52.951]],"o":[[-11,0.5],[-13,59.5],[0,0],[20.124,0.097],[0,0],[0.955,-70.522]],"v":[[-415.5,-397.5],[-439,-254.5],[-477.983,-169.408],[-434.675,-172.569],[-399.805,-170.371],[-389.5,-249.5]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":23,"ty":3,"nm":"身体控制器","parent":3,"sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.2],"y":[1]},"o":{"x":[0.2],"y":[0]},"t":80,"s":[5]},{"t":140,"s":[0]}],"ix":10},"p":{"a":0,"k":[-32,-420,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[50,50,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":24,"ty":4,"nm":"new身体线","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":80,"s":[-3]},{"t":140,"s":[0]}],"ix":10},"p":{"a":0,"k":[816,1324,0],"ix":2,"l":2},"a":{"a":0,"k":[-184,324,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":80,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":85,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-52.606,8.161],[-1.087,77.484],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[24.406,-3.786],[2.336,-166.539],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[203.642,684.06],[304.232,778.366],[359.664,642.539],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":90,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":95,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-52.606,8.161],[-1.087,77.484],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[24.406,-3.786],[2.336,-166.539],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[203.642,684.06],[304.232,778.366],[359.664,642.539],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":100,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":105,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-52.606,8.161],[-1.087,77.484],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[24.406,-3.786],[2.336,-166.539],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[203.642,684.06],[304.232,778.366],[359.664,642.539],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":110,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":115,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-52.606,8.161],[-1.087,77.484],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[24.406,-3.786],[2.336,-166.539],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[203.642,684.06],[304.232,778.366],[359.664,642.539],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":120,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":125,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-52.606,8.161],[-1.087,77.484],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[24.406,-3.786],[2.336,-166.539],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[203.642,684.06],[304.232,778.366],[359.664,642.539],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":130,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]},{"i":{"x":0.833,"y":1},"o":{"x":0.167,"y":0},"t":135,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-52.606,8.161],[-1.087,77.484],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[24.406,-3.786],[2.336,-166.539],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[203.642,684.06],[304.232,778.366],[359.664,642.539],[231,315]],"c":true}]},{"t":140,"s":[{"i":[[0,0],[0,0],[-107.693,-77.147],[0,0],[-47,25],[23,74],[0,0]],"o":[[0,0],[0,0],[104.008,74.508],[0,0],[21.805,-11.599],[-29.877,-96.127],[0,0]],"v":[[8,213],[-183,320],[-49.008,667.492],[252,708],[378,764],[377,629],[231,315]],"c":true}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":26,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":25,"ty":4,"nm":"new内腿","parent":24,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":80,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":85,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":90,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":95,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":100,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":105,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":110,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":115,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":120,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":125,"s":[-10]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":130,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":135,"s":[-10]},{"t":140,"s":[0]}],"ix":10},"p":{"a":0,"k":[11.952,571,0],"ix":2,"l":2},"a":{"a":0,"k":[11.952,571,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-98.173,23.561]],"o":[[0,0],[0,0],[50,-12]],"v":[[95,571],[-105,588],[110,792]],"c":true},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":26,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":28,"ty":4,"nm":"手2","parent":24,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":6,"s":[-56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":17.143,"s":[-56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":23,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":29,"s":[-56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":35,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":40,"s":[-56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":46,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":52,"s":[-56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":57,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":62.857,"s":[-56]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":68,"s":[0]},{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.167],"y":[0]},"t":74.285,"s":[-56]},{"t":80,"s":[0]}],"ix":10},"p":{"a":0,"k":[-46.957,379.815,0],"ix":2,"l":2},"a":{"a":0,"k":[172,401.5,0],"ix":1,"l":2},"s":{"a":0,"k":[-100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":1,"k":[{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":0,"s":[{"i":[[-82,48],[-55.596,3.835],[-1.797,-3.292],[21.399,-28.635],[66.069,-22.462]],"o":[[46.023,-26.94],[43.46,-2.998],[1.715,3.142],[-29.698,39.739],[-87.663,29.803]],"v":[[172,401],[320.226,385.072],[397.951,385.964],[367.539,440.846],[221.52,553.437]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":3,"s":[{"i":[[-60.338,73.398],[-54.37,5.678],[-14.32,-10.017],[9.132,-25.929],[51.88,-18.898]],"o":[[38.273,-46.557],[50.123,-5.234],[6.875,4.809],[-12.674,35.984],[-86.998,31.691]],"v":[[172,401],[304.311,366.108],[396.179,353.06],[395.23,402.737],[297.265,492.125]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":6,"s":[{"i":[[-64.898,68.052],[-52.774,15.086],[-8.537,-10.857],[23.788,-36.056],[47.491,-48.192]],"o":[[39.904,-42.428],[50.302,-14.417],[4.226,7.842],[-23.788,36.056],[-77.757,50.21]],"v":[[172,401],[288.541,326.781],[410.211,321.317],[378.253,397.685],[294.138,494.53]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":9,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.856,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[293.53,323.792],[376.443,317.677],[332.757,405.805],[289.837,497.838]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":12,"s":[{"i":[[-82,48],[-58.113,-4.9],[-2.402,-2.88],[15.427,-32.247],[55.549,-15.392]],"o":[[46.023,-26.94],[43.41,3.66],[2.293,2.749],[-21.41,44.753],[-89.228,24.725]],"v":[[172,401],[321.315,400.73],[392.76,395.518],[373.592,455.264],[266.573,543.036]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.333,"y":0},"t":15,"s":[{"i":[[-60.338,73.398],[-54.665,-0.29],[-10.891,-13.667],[15.263,-22.864],[41.714,-22.221]],"o":[[38.273,-46.557],[54.665,0.29],[5.229,6.561],[-24.362,36.494],[-81.719,43.532]],"v":[[172,401],[307.93,361.387],[404.924,353.989],[389.926,401.358],[298.039,490.443]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":20,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.856,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[291.097,328.654],[385.209,321.52],[330.324,410.667],[289.837,497.838]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":23,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[15.427,-32.247],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-21.41,44.753],[-80.201,46.27]],"v":[[172,401],[311.425,365.987],[387.842,351.759],[368.674,411.505],[247.317,550.324]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":26,"s":[{"i":[[-60.338,73.398],[-52.503,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[293.727,357.956],[388.743,330.901],[387.794,380.578],[276.413,509.836]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":29,"s":[{"i":[[-65.089,67.828],[-52.785,15.08],[-8.294,-10.893],[22.183,-35.95],[46.718,-48.376]],"o":[[39.973,-42.255],[50.21,-14.383],[4.115,7.969],[-22.692,36.775],[-77.785,50.166]],"v":[[172,401],[292.392,312.108],[404.719,317.01],[374.863,385.616],[282.301,504.574]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":32,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[281.136,336.694],[391.782,339.74],[320.363,418.708],[262.68,528.798]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":35,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[15.427,-32.247],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-21.41,44.753],[-80.201,46.27]],"v":[[172,401],[314.86,371.252],[391.277,357.023],[372.109,416.769],[250.752,555.588]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":38,"s":[{"i":[[-60.338,73.398],[-52.503,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[299.191,351.114],[392.477,324.482],[391.527,374.159],[280.146,503.418]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":40,"s":[{"i":[[-64.396,68.641],[-52.744,15.101],[-9.174,-10.765],[16.522,-33.57],[49.521,-47.712]],"o":[[39.725,-42.883],[50.545,-14.506],[4.518,7.508],[-15.581,34.793],[-77.686,50.326]],"v":[[173.925,386.812],[290.777,314.668],[408.039,325.7],[382.605,390.075],[276.615,511.071]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":42,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[284.067,321.8],[394.713,324.846],[328.402,413.758],[270.719,523.848]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":46,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[15.427,-32.247],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-21.41,44.753],[-80.201,46.27]],"v":[[172,401],[313.341,374.605],[389.757,360.376],[370.589,420.122],[249.232,558.941]],"c":false}]},{"i":{"x":0.833,"y":0.833},"o":{"x":0.333,"y":0},"t":49,"s":[{"i":[[-60.338,73.398],[-52.502,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[302.726,358.529],[393.493,337.476],[392.544,387.153],[281.163,516.411]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.167,"y":0.167},"t":52,"s":[{"i":[[-65.732,67.074],[-52.823,15.06],[-7.478,-11.011],[18.956,-36.088],[44.116,-48.992]],"o":[[40.203,-41.672],[49.899,-14.269],[3.741,8.397],[-16.539,34.401],[-77.877,50.018]],"v":[[179.244,376.07],[297.685,305.016],[412.086,317.444],[376.041,381.709],[285.483,507.161]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":54,"s":[{"i":[[-71.169,60.699],[-67.481,32.599],[-0.583,-12.013],[28.857,-46.327],[22.137,-54.198]],"o":[[42.148,-36.749],[44.223,-21.363],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[275.183,315.364],[385.829,318.409],[317.314,410.999],[273.623,509.591]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":57,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[15.427,-32.247],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-21.41,44.753],[-80.201,46.27]],"v":[[172,401],[311.931,355.945],[388.347,341.716],[369.179,401.462],[247.822,540.281]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.333,"y":0},"t":60,"s":[{"i":[[-60.338,73.398],[-52.502,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[294.979,344.936],[388.181,323.24],[387.232,372.917],[275.851,502.176]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":65,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[22.137,-54.197]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[282.582,317.898],[393.228,320.944],[333.89,404.814],[289.837,497.838]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.333,"y":0},"t":68,"s":[{"i":[[-82,48],[-53.791,14.565],[-2.402,-2.88],[15.427,-32.247],[60.445,-34.872]],"o":[[46.023,-26.94],[42.049,-11.386],[2.293,2.749],[-21.41,44.753],[-80.201,46.27]],"v":[[172,401],[314.028,355.068],[390.445,340.839],[371.277,400.585],[249.92,539.404]],"c":false}]},{"i":{"x":0.833,"y":0.869},"o":{"x":0.333,"y":0},"t":71,"s":[{"i":[[-60.338,73.398],[-52.503,15.225],[-14.32,-10.017],[9.132,-25.929],[65.923,-43.827]],"o":[[38.273,-46.557],[52.503,-15.225],[6.875,4.809],[-12.674,35.984],[-77.106,51.261]],"v":[[172,401],[287.463,354.326],[382.393,318.963],[381.444,368.64],[270.063,497.898]],"c":false}]},{"i":{"x":0.667,"y":1},"o":{"x":0.167,"y":0.131},"t":77,"s":[{"i":[[-71.169,60.699],[-53.147,14.895],[-0.583,-12.013],[28.857,-46.327],[34.135,-45.993]],"o":[[42.148,-36.749],[47.276,-13.305],[0.583,12.013],[-20.434,32.805],[-78.653,48.765]],"v":[[172,401],[276.67,321.257],[387.315,324.303],[324.898,411.754],[258.213,513.361]],"c":false}]},{"t":80,"s":[{"i":[[-82,48],[-55.596,3.835],[-1.797,-3.292],[21.399,-28.635],[66.069,-22.462]],"o":[[46.023,-26.94],[43.46,-2.998],[1.715,3.142],[-29.698,39.739],[-87.663,29.803]],"v":[[172,401],[320.226,385.072],[397.951,385.964],[367.539,440.846],[221.52,553.437]],"c":false}]}],"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.003921568627,0.003921568627,0.003921568627,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":24,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"fl","c":{"a":0,"k":[0.262745098039,0.262745098039,0.262745098039,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"填充 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0}]},{"id":"comp_2","nm":"效果线","fr":60,"layers":[{"ddd":0,"ind":2,"ty":3,"nm":"控制器","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[2302,508,0],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"line 4","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1134,19,0],"ix":2,"l":2},"a":{"a":0,"k":[196,84,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[196,84],[492,84]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":64,"s":[0]},{"t":82,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":52,"s":[0]},{"t":70,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":52,"op":83,"st":52,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"line 2","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1130,119,0],"ix":2,"l":2},"a":{"a":0,"k":[196,84,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[196,84],[492,84]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":36,"s":[0]},{"t":54,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":24,"s":[0]},{"t":42,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":24,"op":55,"st":24,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"line 3","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1117,56,0],"ix":2,"l":2},"a":{"a":0,"k":[196,84,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[196,84],[482,84]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":23,"s":[0]},{"t":41,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":11,"s":[0]},{"t":29,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":11,"op":42,"st":11,"ct":1,"bm":0},{"ddd":0,"ind":6,"ty":4,"nm":"line","parent":2,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1048,226,0],"ix":2,"l":2},"a":{"a":0,"k":[196,84,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[196,84],[408,84]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":8,"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":12,"s":[0]},{"t":30,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.833],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":18,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":31,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":7,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1134,6,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":67,"op":107,"st":65,"bm":0},{"ddd":0,"ind":8,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1132,136,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":51,"op":91,"st":49,"bm":0},{"ddd":0,"ind":9,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1133,64,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":40,"op":80,"st":38,"bm":0},{"ddd":0,"ind":10,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1130,-8,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":30,"op":70,"st":28,"bm":0},{"ddd":0,"ind":11,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1134,206,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":20,"op":60,"st":18,"bm":0},{"ddd":0,"ind":12,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1130,4,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":11,"op":51,"st":9,"bm":0},{"ddd":0,"ind":13,"ty":0,"nm":"星2","parent":2,"refId":"comp_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[-1129,126,0],"ix":2,"l":2},"a":{"a":0,"k":[300,100,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"w":600,"h":200,"ip":2,"op":42,"st":0,"bm":0}]},{"id":"comp_3","nm":"星2","fr":60,"layers":[{"ddd":0,"ind":1,"ty":3,"nm":"控制器 3","sr":1,"ks":{"o":{"a":0,"k":0,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":1,"k":[{"i":{"x":0.2,"y":1},"o":{"x":0.3,"y":0},"t":0,"s":[135.75,101.5,0],"to":[0,0,0],"ti":[0,0,0]},{"t":44,"s":[487.75,101.5,0]}],"ix":2,"l":2},"a":{"a":0,"k":[50,50,0],"ix":1,"l":2},"s":{"a":0,"k":[60,60,100],"ix":6,"l":2}},"ao":0,"ip":0,"op":1800,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"line 12","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":270,"ix":10},"p":{"a":0,"k":[63.25,50.25,0],"ix":2,"l":2},"a":{"a":0,"k":[-265,137,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-265,137],[-265,156.5]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":17,"s":[15]},{"t":44,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14.664,"s":[0]},{"t":44,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":29.3359375,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":3,"ty":4,"nm":"line 11","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":180,"ix":10},"p":{"a":0,"k":[50.25,36.5,0],"ix":2,"l":2},"a":{"a":0,"k":[-265,137,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-265,137],[-265,156.5]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":17,"s":[15]},{"t":44,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14.664,"s":[0]},{"t":44,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":29.3359375,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":4,"ty":4,"nm":"line 10","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":90,"ix":10},"p":{"a":0,"k":[37.25,50.25,0],"ix":2,"l":2},"a":{"a":0,"k":[-265,137,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-265,137],[-265,156.5]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":17,"s":[15]},{"t":44,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14.664,"s":[0]},{"t":44,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":29.3359375,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0},{"ddd":0,"ind":5,"ty":4,"nm":"line 9","parent":1,"sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[50.25,63.5,0],"ix":2,"l":2},"a":{"a":0,"k":[-265,137,0],"ix":1,"l":2},"s":{"a":0,"k":[100,100,100],"ix":6,"l":2}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0]],"o":[[0,0],[0,0]],"v":[[-265,137],[-265,156.5]],"c":false},"ix":2},"nm":"路径 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.419607843137,0.419607843137,0.419607843137,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":10,"s":[15]},{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":17,"s":[15]},{"t":44,"s":[0]}],"ix":5},"lc":2,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[0,0],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"变换"}],"nm":"形状 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":14.664,"s":[0]},{"t":44,"s":[100]}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.667],"y":[1]},"o":{"x":[0.333],"y":[0]},"t":0,"s":[0]},{"t":29.3359375,"s":[100]}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"修剪路径 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":1800,"st":0,"ct":1,"bm":0}]}],"layers":[{"ddd":0,"ind":1,"ty":0,"nm":"IP形象循环","refId":"comp_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[460,592,0],"ix":2,"l":2},"a":{"a":0,"k":[960,540,0],"ix":1,"l":2},"s":{"a":0,"k":[146,146,100],"ix":6,"l":2}},"ao":0,"w":1920,"h":1080,"ip":0,"op":1800,"st":0,"bm":0}],"markers":[{"tm":140,"cm":"结束","dr":0}]}',
    ),
    tz_153 = {
      skland: {
        json: tL_152,
        size: 82,
        top: 30,
        shadowColor: "transparent",
      },
      arknights: {
        json: JSON.parse(
          '{"v":"5.6.3","fr":60,"ip":0,"op":60,"w":240,"h":240,"nm":"01 - 菱形加载","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"动","sr":1,"ks":{"o":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[100]},{"t":40,"s":[0]}],"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":1,"k":[{"i":{"x":[0.833,0.833],"y":[0.833,0.833]},"o":{"x":[0.167,0.167],"y":[0.167,0.167]},"t":0,"s":[78,78]},{"t":40,"s":[155,155]}],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":1,"k":[{"i":{"x":[0.833],"y":[0.833]},"o":{"x":[0.167],"y":[0.167]},"t":0,"s":[12]},{"t":40,"s":[0]}],"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"不动","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":45,"ix":10},"p":{"a":0,"k":[120,120,0],"ix":2},"a":{"a":0,"k":[0,0,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"shapes":[{"ty":"rc","d":1,"s":{"a":0,"k":[78,78],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"r":{"a":0,"k":0,"ix":4},"nm":"矩形路径 1","mn":"ADBE Vector Shape - Rect","hd":false},{"ty":"st","c":{"a":0,"k":[1,1,1,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":12,"ix":5},"lc":1,"lj":1,"ml":4,"bm":0,"nm":"描边 1","mn":"ADBE Vector Graphic - Stroke","hd":false}],"ip":0,"op":60,"st":0,"bm":0}],"markers":[]}',
        ),
        size: 112,
        top: 40,
        shadowColor: "transparent",
      },
      popucom: {
        json: JSON.parse(
          '{"v":"5.6.3","fr":60,"ip":0,"op":30,"w":306,"h":108,"nm":"01 - 加载态","ddd":0,"assets":[{"id":"image_0","w":408,"h":144,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_1","w":408,"h":144,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAACQCAYAAAA1H32MAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAGcklEQVR4nO3dMYgUVxwG8DUxnEUOUqQRgilSWQgXiCKIaYSINldYCLHSa20sBVnJIViksLFVKwMWFgfhgpJLEREkWBxYWEcCNikCpvAwYgpNE+ZJnnnfzczu71fO7c28ndvbjwcf/9kxgTmwdfbLVzWvX7j6844hnR/G6L2+FwDAbBIwAEQIGAAiBAwAEQIGgAgBA0CEgAEgQsAAECFgAIgQMABECBgAInb2vQDYDqXZX7UzxFpdF+aBHQwAEQIGgAgBA0CEgAEgQsAAECFgAIgQMABECBgAIgQMABECBoAIAQNAhDlJzJQ///gtOlss7cOPPvE/ycywgwEgQsAAECFgAIgQMABECBgAIjRWGKXattjCnfOppbyTraOXq16vXcYY2cEAECFgAIgQMABECBgAIgQMABG9NVOO3HveZGbU+q2vql5//OTdFpct6ms9G4d3jbpldORK9+dh7fTvVecptsX2vt95+NCZzc7j968vVV23+jyPX3Yerm2XLd/4uPP4xrmRfx5OtPl+4LWN2/18HuxgAIgQMABECBgAIgQMABECBoCInekLtGqL8Xal+zy0dlmpLVZr4cmF7h8U2mKDU1hn6X1t7blUdfrSfR5au0xbbHuU7nO6XWYHA0CEgAEgQsAAECFgAIgQMABENGsQjKUtVpoVVjsTrNV5+tKqXXbgi6XOv/viqQctTl+cRVZskTVybfq46vUrq3tDK3mt1CIrzSKr9ezmwc7jvzzcbPI56asttr67cjbg0/CswoGtp6RVu8wOBoAIAQNAhIABIELAABAhYACIiM8iS1vbV/fEwxf7vus+z6Sf8yw/atMCmjuFJ0IWVc4oS7fCqte/J7MMSLKDASBCwAAQIWAAiBAwAEQIGAAiRtMiq22LLdw5H1rJu9k6ernzeOl9jaVdVppVdWBysGpG2erSD4Ur7H+3hf1bqbWVfgJmbVusUum+TTePdR5PzxwbmheXutueJbUt0FovJnXrmaxk1rFd7GAAiBAwAEQIGAAiBAwAEQIGgIjBtciatcXS7aBKpXXOarus1BYrtZgmSxerzl+6b0NrD9Yqva9apftcfNLow11NrtuXtWsz2jItvK/llXF8D9jBABAhYACIEDAARAgYACIEDAARg2uRlSw8udD9g4G1xYoK6yy9r609l5Kr6U2xxTQpzSKr06qF1UxPT6Is3+dxa9YWG9j3RnXLdCTtMjsYACIEDAARAgaACAEDQISAASBiNC2yVg6d2ew8fv/6Ui/nAf4/LdNhsoMBIELAABAhYACIEDAARAgYACLG0yJ7/LLu9UNrj9Suv6cZVn2Zbh7rPL72ed3sqXlTum8wBHYwAEQIGAAiBAwAEQIGgAgBA0BEby2y1b9KTzDc3+YChdZWaVbYtenjqtMXZ47VtsUqle7bdOdstomWb3Q/oW/t9Hy1y0r3gTcatUx7m1U4oy1TOxgAIgQMABECBoAIAQNAhIABIGI0s8i2jl7uPL5w53yT86+s7m1ynlql98Xb1baqnt082Hl88dSDFssZ3HXHbvWslum7KN236dV+WqZ2MABECBgAIgQMABECBoAIAQNARLxF9uxcd4tm8u3FJucfXAurpxlBpfu8eEVbidmnZTpMdjAARAgYACIEDAARAgaACAEDQMRoZpHBf1F80uXp7zsPL98ILmYymfz0Y/d1J5Pudc7bkyuf/VpomU60TFsq3efFT7MtUzsYACIEDAARAgaACAEDQISAASCiWYusdhbWtHCetUK7htemO7ufTLd4pft4cRbcjPrgwtd1v/DZ3cxC3hjaemA72cEAECFgAIgQMABECBgAIgQMABGDm0W2/Kh7FtPavvlql5XuA293fGAtrKGtZyymV7tbkWvX5ut7oFbpvk0m32zrOv5hBwNAhIABIELAABAhYACIEDAARDRrkZVmjrVS26qqnY3WSl/XLSle9/Cu7V0INLC8UmiZzlm7rHQfhsYOBoAIAQNAhIABIELAABAhYACI2JG+wJF7z18lz187oyw942to69k4vCv+N65x5Er288DbbZwb2OfhRPj7obJdlm5nDW09G7eznwc7GAAiBAwAEQIGgAgBA0CEgAEgordGSat22fqtr6pef/xk9gmDfa1naG2xWtplbQ2tLVarVbtsfXfl/+PT8PdDT+tJt8VK7GAAiBAwAEQIGAAiBAwAEQIGgIi/AeJOks8MixV7AAAAAElFTkSuQmCC","e":1},{"id":"image_2","w":408,"h":144,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZgAAACQCAYAAAA1H32MAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFyUlEQVR4nO3dMWhVVxwG8Gdr0cXNxUUHJwchhVaEYpeApVkyOAh1sq4uGQuSQih06OCS1TpZcHAIlJSK6VAplOIQcHDq0C4ublmUttjBLoV3XvtPz9d7r/n9xpeXc8+79773ceDj3NkMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgoDg09Afg/vLj+/svK+49sfl/6bqTHhyl6Y+gJAPB6EjAARAgYACIEDAARAgaAiMNDT+C/Glt7Z2zzARiKFQwAEQIGgAgBA0CEgAEgQsAAEDFYi2z54fNS26rp7sVhjtsy0Hx2LhyddBtt+Wb2uqw0Xt/+ef71Ks+nMc7K6fuN8WfRz7uzNvH74VKf+2H7RO37uPJ0/vXqZaj57Nwb5n6wggEgQsAAECFgAIgQMABECBgAIuLNgnhrq2i70fJauVxra/QaJ21s7bJ0W2zr6rPk8HGrt49Hxx9bu6xXW6xFi2yxdLvMCgaACAEDQISAASBCwAAQIWAAiOjWIBiqLbZ1duKtocfZ1lBLul02trbYkW8/Cc1kf1588Hnp/VNvl6XbYr20Wl7VNlevcYbSq11mBQNAhIABIELAABAhYACIEDAARAz2RMuqaltsKq2h1ucaql02Nt3aYmfe7DCbflrzbN4njfOQbpdN3dat2v3z2+yr+ePMhhln9dq0r68VDAARAgaACAEDQISAASBCwAAQMboWWbe22NRbQ9plCx359cb8P4zsujc15tn6XC9OfpaczeRV22KTaZk2PtdU2mVWMABECBgAIgQMABECBoAIAQNAxOhaZC1aQyS89/Hu3Nd/+HJpkHFYrFtbbGS/G+WW6UTaZVYwAEQIGAAiBAwAEQIGgAgBA0DEZFpk8DdP/qi9f2StofL8T2am8brQMh0nKxgAIgQMABECBoAIAQNAhIABIGI6LbJOraHB9p7SGlpoY+mbxl/e7XOAxvlvXa9b609Kw3e77kWt87a++2H0uK8re9P1ZQUDQISAASBCwAAQIWAAiBAwAEQM1iLb+F1raD9a52398MFqDbWe9Nd8gmHRtY0zXcapan0u/oG96UbJCgaACAEDQISAASBCwAAQIWAAiJjMXmRaQ9Oyd+d87R+WPu1y3NGdz4HaPuXzPzIb17VM96N13tY3h2mZWsEAECFgAIgQMABECBgAIgQMABHdWmR7a8XWyhdaQz2Vz3/RuXeWXlbef+zKj8UjtFpD7Ef1/J+bnS9d358e7R4qHSBMy3ScrGAAiBAwAEQIGAAiBAwAEQIGgIhmi6zcGrpZbA01n2jJflTP/7m1bGto+cqsNP767vy9krbeflYZ5sBpnbeqoVphe7+02o9apj21zvOxU9W2Z40VDAARAgaACAEDQISAASBCwAAQ0WyRlVtDs2Jr6HCjNTTTGlqkdd6qxraXVMvq7eNzX9+6erDuk9Z5gDGzggEgQsAAECFgAIgQMABECBgAIro90bKX1ceN1tDZA9YaapwHXqm2qvbuNPZiKj95s2ao445NdS+s9c3542zdOli/A1Xrm/NbpsdOzX+9vRdcH1YwAEQIGAAiBAwAEQIGgAgBA0DE6FpkLdVW1d5ao7VSffJm0VDH5ZXmHmVXv5778urt4GRms9l3D+Yfd9bYc8+eY4utXmu0TA9Yu6x1HsbGCgaACAEDQISAASBCwAAQIWAAiJhMiwz+jbdufFT7h9P3MxP5y9jmM5TWnmO9VFtV1b3RehnquC3N4z462mV8KxgAIgQMABECBoAIAQNAhIABIOJQ+gDLD5+/TI5ffdJl+kmRY5vPzoWj8WtcsXwzez+w2M7ayO6HS+Hfh+IeZek9vsY2n5172fvBCgaACAEDQISAASBCwAAQIWAAiBisUdKrXbZ992Lp/SuXs3s9DTWfsbXFqrTL+hpbW6yqV7ts+0Tx+/g0/Psw0HzSbbEWKxgAIgQMABECBoAIAQNAhIABIOJPMX6ory83vZcAAAAASUVORK5CYII=","e":1},{"id":"image_3","w":408,"h":144,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_4","w":408,"h":144,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_5","w":408,"h":144,"u":"","p":"data:image/png;base64,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","e":1}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"1.png","cl":"png","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153,54,0],"ix":2},"a":{"a":0,"k":[204,72,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":0,"op":5,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"2.png","cl":"png","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153,54,0],"ix":2},"a":{"a":0,"k":[204,72,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":5,"op":10,"st":5,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"3.png","cl":"png","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153,54,0],"ix":2},"a":{"a":0,"k":[204,72,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":10,"op":15,"st":10,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"4.png","cl":"png","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153,54,0],"ix":2},"a":{"a":0,"k":[204,72,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":15,"op":20,"st":15,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"5.png","cl":"png","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153,54,0],"ix":2},"a":{"a":0,"k":[204,72,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":20,"op":25,"st":20,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"6.png","cl":"png","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[153,54,0],"ix":2},"a":{"a":0,"k":[204,72,0],"ix":1},"s":{"a":0,"k":[75,75,100],"ix":6}},"ao":0,"ip":25,"op":30,"st":25,"bm":0}],"markers":[]}',
        ),
        size: 102,
        width: 102,
        height: 36,
        noPadding: !0,
        top: 40,
        shadowColor: "transparent",
      },
    };
  var tY_154 = new Map(),
    tU_155 = function (e_831) {
      var t_832 = e_831 || {},
        i_833 = t_832.type,
        n_834 = t_832.dom,
        a_835 = t_832.loading,
        r_836 = t_832.shadowColor;
      if (E_21) return void b_19.error("showLoading is not support RN Env");
      f_11 || (f_11 = document.body);
      var o_837 = n_834 || f_11;
      if (!tY_154.get(o_837)) {
        var s_838 = document.createElement("div");
        s_838.attachShadow({
          mode: "open",
        });
        var c_839 = s_838.shadowRoot || s_838,
          l_840 = tz_153.skland.json,
          u_841 = r_836,
          d_842 = 82;
        if (a_835) c_839.appendChild(a_835);
        else {
          var A_843 = i_833 || "skland";
          tz_153[A_843] || (A_843 = "skland");
          var p_844 = tz_153[A_843],
            x_845 = p_844.json,
            h_846 = p_844.size,
            y_847 = p_844.width,
            m_848 = p_844.height,
            g_849 = p_844.noPadding,
            v_850 = p_844.shadowColor,
            k_851 = p_844.top;
          (x_845 && (l_840 = x_845),
            v_850 && !u_841 && (u_841 = v_850),
            h_846 && (d_842 = h_846),
            s_838.setAttribute(
              "style",
              "\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n        display: flex;\n        justify-content: center;\n        z-index: 1000000;\n        ".concat(
                u_841 ? "background-color: ".concat(u_841, ";") : "",
                "\n    ",
              ),
            ));
          var w_852 = document.createElement("span");
          (c_839.appendChild(w_852),
            framerMotionDefault().setIDPrefix("skland_bridge"),
            framerMotionDefault().loadAnimation({
              container: w_852,
              renderer: "svg",
              loop: !0,
              autoplay: !0,
              animationData: l_840,
            }),
            w_852.setAttribute(
              "style",
              "\n        position: relative;\n        top: "
                .concat(k_851, "%;\n        width: ")
                .concat(y_847 || d_842, "px;\n        height: ")
                .concat(m_848 || d_842, "px;\n        ")
                .concat(
                  g_849
                    ? ""
                    : "\n        padding: 16px;\n        border-radius: 16px;\n        box-sizing: border-box;\n        ",
                  "\n        ",
                )
                .concat(u_841 ? "" : "background-color: rgba(107, 107, 107, 1);", "\n\n    "),
            ));
        }
        (tY_154.set(o_837, s_838), o_837.appendChild(s_838));
      }
    },
    tX_156 = function (e_853) {
      var t_854 = (e_853 || {}).dom || f_11,
        i_855 = tY_154.get(t_854);
      i_855 && (i_855.remove(), tY_154.delete(t_854));
    };
  webpackRequire(31489);
  var tF_157 = function (e_856) {
    var t_857 = window.fetch;
    return new Promise(function (i_858) {
      t_857(e_856, {
        headers: {
          "x-client-app": "skland",
        },
      })
        .then(function (e_859) {
          return e_859.json();
        })
        .then(function (e_860) {
          i_858({
            code: 0,
            data: e_860,
            message: "",
          });
        })
        .catch(function (e_861) {
          i_858({
            code: -1,
            data: null,
            message: e_861.message,
          });
        });
    });
  };
  function tK_158(e_862) {
    window.top.location.href = e_862;
  }
  function tq_159(e_863) {
    p_12 ||
      (((p_12 = document.createElement("iframe")).src = e_863),
      (p_12.style.cssText = "display:none;border:0;width:0;height:0;"),
      document.body.appendChild(p_12),
      p_12.remove(),
      (p_12 = void 0));
  }
  function t__160(e_864, t_865) {
    var i_866 = !1,
      n_867 = function () {
        ((i_866 = !0), document.removeEventListener("visibilitychange", n_867));
      };
    (document.addEventListener("visibilitychange", n_867),
      setTimeout(function () {
        i_866 || e_864();
      }, t_865));
  }
  var tZ_161 = null,
    tJ_162 = null,
    t$_163 = R_35 || T_36 || W_37 || H_38 || z_40;
  try {
    E_21 ||
      B_22 ||
      ((x_13 = document.createElement("img")), (h_14 = document.createElement("div")).appendChild(x_13));
  } catch (e_868) {}
  var t0_164 = function () {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        return (0, GryphlineWebSDKV180.YH)(this, function (e_869) {
          if (E_21 || B_22 || tJ_162) return [2];
          if (tZ_161) return [2, tZ_161];
          try {
            tZ_161 = tF_157(w_20).then(function (e_870) {
              if (
                ((tZ_161 = null),
                0 === e_870.code &&
                  e_870.data &&
                  ((tJ_162 = e_870.data), t$_163 && (null == tJ_162 ? void 0 : tJ_162.wechatImgUrl)))
              ) {
                var t_871 = tJ_162.wechatBgUrl,
                  i_872 = tJ_162.wechatImgUrl;
                (x_13.setAttribute("src", i_872),
                  x_13.setAttribute("style", "width: 100%;"),
                  h_14.setAttribute(
                    "style",
                    "\n      position: fixed;\n      top: 0;\n      left: 0;\n      right: 0;\n      bottom: 0;\n      background-image: url(".concat(
                      t_871,
                      ");\n      background-position: center;\n      background-repeat: repeat;\n      background-size: 100%;\n      z-index: -1;\n      visibility: hidden;\n    ",
                    ),
                  ),
                  document.body.appendChild(h_14));
              }
            });
          } catch (e_873) {}
          return [2, tZ_161];
        });
      });
    },
    t1_165 = function (e_874) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_875, i_876, n_877, a_878, r_879;
        return (0, GryphlineWebSDKV180.YH)(this, function (o_880) {
          switch (o_880.label) {
            case 0:
              if (E_21 || B_22) return (b_19.warn("森空岛APP内部不支持 web 下载"), [2]);
              if (!tZ_161) return [3, 2];
              return [4, tZ_161];
            case 1:
              (o_880.sent(), (o_880.label = 2));
            case 2:
              if (tJ_162) return [3, 4];
              return [4, t0_164()];
            case 3:
              (o_880.sent(), (o_880.label = 4));
            case 4:
              if (!tJ_162) return (alert("网络开小差，请稍后再试"), [2]);
              return (
                (t_875 = null == e_874 ? void 0 : e_874.toLocaleLowerCase()) ||
                  (t_875 = D_26 ? "ios" : "android"),
                t$_163
                  ? ((h_14.style.zIndex = "1000000"), (h_14.style.visibility = "visible"))
                  : "ios" === t_875
                    ? ((n_877 = (i_876 = tJ_162.downloadUrl || {}).ios),
                      (a_878 = i_876.iosUrl),
                      n_877
                        ? S_25
                          ? window.open(a_878)
                          : D_26
                            ? (window.location.href = n_877)
                            : window.open(a_878)
                        : alert("系统开小差，请稍后再试"))
                    : "android" === t_875 &&
                      ((r_879 = (tJ_162.downloadUrl || {}).android)
                        ? (window.location.href = r_879)
                        : alert("系统开小差，请稍后再试")),
                [2]
              );
          }
        });
      });
    },
    t3_166 = function (e_881, t_882, i_883) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        return (0, GryphlineWebSDKV180.YH)(this, function (i_884) {
          switch (i_884.label) {
            case 0:
              if ((t_882 || (t_882 = t1_165), 0 !== e_881.indexOf("skland://"))) return [2];
              if (!t$_163) return [3, 5];
              if (!tZ_161) return [3, 2];
              return [4, tZ_161];
            case 1:
              (i_884.sent(), (i_884.label = 2));
            case 2:
              if (tJ_162) return [3, 4];
              return [4, t0_164()];
            case 3:
              (i_884.sent(), (i_884.label = 4));
            case 4:
              return ((h_14.style.zIndex = "1000000"), (h_14.style.visibility = "visible"), [3, 10]);
            case 5:
              if (!tZ_161) return [3, 7];
              return [4, tZ_161];
            case 6:
              (i_884.sent(), (i_884.label = 7));
            case 7:
              if (tJ_162) return [3, 9];
              return [4, t0_164()];
            case 8:
              (i_884.sent(), (i_884.label = 9));
            case 9:
              (I_23 || F_44
                ? t1_165()
                : D_26
                  ? M_27
                    ? (tq_159(e_881),
                      t__160(function () {
                        null == t_882 || t_882();
                      }, 2e3))
                    : (tK_158(e_881),
                      t__160(function () {
                        null == t_882 || t_882();
                      }, 2e3))
                  : (U_42 || L_39 || Y_41 ? tK_158(e_881) : tq_159(e_881),
                    t__160(function () {
                      null == t_882 || t_882();
                    }, 2e3)),
                (i_884.label = 10));
            case 10:
              return [2];
          }
        });
      });
    },
    t2_167 = function (e_885) {
      var t_886 = e_885.isShow;
      return (
        (eR_89 = t_886),
        eA_63("SKHandle", "handleNavBar", {
          isShow: t_886 ? "1" : "0",
        })
      );
    },
    t4_168 = function (e_887) {
      var t_888 = e_887.orientation;
      return (
        (eT_90 = "landscape" === t_888),
        eA_63("SKHandle", "handleOrientation", {
          orientation: t_888,
        })
      );
    },
    t5_169 = function (e_889) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        return (0, GryphlineWebSDKV180.YH)(this, function (t_890) {
          return [
            2,
            eA_63("SKHandle", "handleStatusBarAppearance", {
              statusBarAppearance: e_889.style,
            }),
          ];
        });
      });
    },
    t7_170 = function (e_891) {
      if (!B_22) return void es_58("当前功能暂不支持");
      var t_892 = e_891.callback,
        i_893 = (0, GryphlineWebSDKV180.Tt)(e_891, ["callback"]),
        n_894 = tn_115.setCallback(function (e_895) {
          var i_896 = void 0;
          try {
            i_896 = !!JSON.parse(e_895).data;
          } catch (e_897) {}
          null == t_892 || t_892(i_896);
        });
      return eA_63(
        "SKModal",
        "alert",
        (0, GryphlineWebSDKV180.Cl)((0, GryphlineWebSDKV180.Cl)({}, i_893), {
          callbackId: n_894,
        }),
      );
    },
    t6_171 = function (e_898) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_899, i_900;
        return (0, GryphlineWebSDKV180.YH)(this, function (n_901) {
          return e_898
            ? ((t_899 = document.createElement("input")),
              document.body.appendChild(t_899),
              (t_899.value = e_898),
              (t_899.style.position = "fixed"),
              (t_899.style.top = "50px"),
              (t_899.style.opacity = "0"),
              (t_899.inputMode = "none"),
              t_899.setSelectionRange(0, e_898.length),
              t_899.focus(),
              (i_900 = document.execCommand("copy")),
              t_899.blur(),
              t_899.remove(),
              [2, i_900])
            : [2, !1];
        });
      });
    },
    t8_172 = function () {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var e_902, t_903;
        return (0, GryphlineWebSDKV180.YH)(this, function (i_904) {
          return (
            (e_902 = document.createElement("input")),
            document.body.appendChild(e_902),
            (e_902.value = ""),
            (e_902.style.position = "fixed"),
            (e_902.style.top = "50px"),
            (e_902.style.opacity = "0"),
            (e_902.inputMode = "none"),
            e_902.focus(),
            document.execCommand("paste"),
            (t_903 = e_902.value),
            e_902.blur(),
            e_902.remove(),
            [2, t_903]
          );
        });
      });
    },
    t9_173 = function (e_905) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_906;
        return (0, GryphlineWebSDKV180.YH)(this, function (i_907) {
          switch (i_907.label) {
            case 0:
              if (!B_22 || !ef_64("applyPermissions")) return [2, !0];
              return [
                4,
                eA_63("SKPermission", "applyPermissions", {
                  permissions: e_905,
                }),
              ];
            case 1:
              if (0 == (t_906 = i_907.sent()).code) return [2, !0];
              return (1 == t_906.code || t_906.code, [2, !1]);
          }
        });
      });
    },
    ie_174 = ep_65("1.31.0"),
    it_175 = {
      lock: !1,
      startPosition: [0, 0],
    },
    ii_176 = function (e_908) {
      if (!it_175.lock && 1 === e_908.touches.length) {
        var t_909 = e_908.target;
        if ("IMG" === t_909.tagName) {
          var i_910 = t_909.getAttribute("src"),
            n_911 = null != t_909.getAttribute("data-share");
          if (i_910 && n_911) {
            it_175.lock = !0;
            var a_912 = e_908.touches[0];
            ((it_175.startPosition = [a_912.clientX, a_912.clientY]),
              clearTimeout(y_15),
              (y_15 = setTimeout(function () {
                return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
                  var e_913;
                  return (0, GryphlineWebSDKV180.YH)(this, function (n_914) {
                    switch (n_914.label) {
                      case 0:
                        if ((tU_155(), !ie_174)) return [3, 2];
                        return [
                          4,
                          tA_124({
                            url: i_910,
                          }),
                        ];
                      case 1:
                        return (n_914.sent(), [3, 4]);
                      case 2:
                        return (
                          ((e_913 = document.createElement("img")).width = t_909.naturalWidth),
                          (e_913.height = t_909.naturalHeight),
                          (e_913.src = i_910),
                          (e_913.style.position = "absolute"),
                          (e_913.style.top = "-100000px"),
                          (e_913.style.left = "-100000px"),
                          document.body.appendChild(e_913),
                          [
                            4,
                            tA_124({
                              html: e_913,
                            }),
                          ]
                        );
                      case 3:
                        (n_914.sent(), e_913.remove(), ia_177(), (n_914.label = 4));
                      case 4:
                        return (tX_156(), [2]);
                    }
                  });
                });
              }, 1500)));
          }
        }
      }
    },
    ia_177 = function () {
      it_175.lock && ((it_175.lock = !1), clearTimeout(y_15));
    },
    ir_178 = function (e_915) {
      if (it_175.lock) {
        if (1 !== e_915.touches.length) return void ia_177();
        var t_916 = e_915.touches[0],
          i_917 = t_916.clientX,
          n_918 = t_916.clientY,
          a_919 = (0, GryphlineWebSDKV180.zs)(it_175.startPosition, 2),
          r_920 = a_919[0],
          o_921 = Math.abs(n_918 - a_919[1]);
        if (Math.abs(i_917 - r_920) > 10 || o_921 > 10) return void ia_177();
      }
    },
    io_179 = function (e_922) {
      (console.log(B_22, P_29),
        B_22 &&
          P_29 &&
          (e_922
            ? (document.addEventListener("touchstart", ii_176),
              document.addEventListener("touchend", ia_177),
              document.addEventListener("touchmove", ir_178))
            : (document.removeEventListener("touchstart", ii_176),
              document.removeEventListener("touchend", ia_177),
              document.removeEventListener("touchmove", ir_178))));
    },
    is_180 = null,
    ic_181 = null,
    il_182 = function () {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        return (0, GryphlineWebSDKV180.YH)(this, function (e_923) {
          switch (e_923.label) {
            case 0:
              return (
                is_180 ||
                  (is_180 = tF_157("https://assets.skland.com/common-config/json/game-config.json").then(
                    function (e_924) {
                      ((is_180 = null), 0 === e_924.code && e_924.data && (ic_181 = e_924.data));
                    },
                  )),
                [4, is_180]
              );
            case 1:
              return (e_923.sent(), [2]);
          }
        });
      });
    },
    iu_183 = function (e_925) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_926, i_927, n_928;
        return (0, GryphlineWebSDKV180.YH)(this, function (a_929) {
          switch (a_929.label) {
            case 0:
              if (!B_22) return [2, !1];
              if (((t_926 = e_925.pkgName), (i_927 = e_925.gameName), (n_928 = t_926), !i_927)) return [3, 3];
              if (ic_181) return [3, 2];
              return [4, il_182()];
            case 1:
              (a_929.sent(), (a_929.label = 2));
            case 2:
              if (!ic_181) return (eo_57("网络开小差，请稍后再试"), [2, !1]);
              (i_927 && ic_181[i_927] && (n_928 = ic_181[i_927].packageName), (a_929.label = 3));
            case 3:
              if (!n_928) return (eo_57("包名不能为空"), [2, !1]);
              return [
                4,
                eA_63("SKNavigation", "isAppInstalled", {
                  packageName: n_928,
                }),
              ];
            case 4:
              return [2, 0 === a_929.sent().code];
          }
        });
      });
    },
    id_184 = function (e_930) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_931;
        return (0, GryphlineWebSDKV180.YH)(this, function (i_932) {
          switch (i_932.label) {
            case 0:
              if (!B_22) return [2];
              if (ic_181) return [3, 2];
              return [4, il_182()];
            case 1:
              (i_932.sent(), (i_932.label = 2));
            case 2:
              if (!ic_181) return (eo_57("网络开小差，请稍后再试"), [2]);
              if (
                !(t_931 = ic_181[e_930.name]) ||
                (D_26 && (!t_931.iosAppStoreId || !t_931.iosDeeplink)) ||
                (P_29 && !t_931.packageName)
              )
                return (eo_57("游戏尚未上线，请敬请期待"), [2]);
              return [4, eA_63("SKNavigation", "openGame", t_931)];
            case 3:
              return (i_932.sent(), [2]);
          }
        });
      });
    },
    iA_185 = function (e_933) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_934, i_935, n_936, a_937, r_938;
        return (0, GryphlineWebSDKV180.YH)(this, function (o_939) {
          switch (o_939.label) {
            case 0:
              if (!B_22 || D_26) return [2];
              if (ic_181) return [3, 2];
              return [4, il_182()];
            case 1:
              (o_939.sent(), (o_939.label = 2));
            case 2:
              if (!ic_181) return (eo_57("网络开小差，请稍后再试"), [2]);
              if (
                !(t_934 = e_933.names).every(function (e_940) {
                  return !!ic_181 && !!ic_181[e_940] && !!ic_181[e_940].packageName;
                })
              )
                return (eo_57("部分游戏尚未上线，请敬请期待"), [2]);
              return (
                (i_935 = []),
                t_934.forEach(function (e_941) {
                  if (ic_181) {
                    var t_942 = ic_181[e_941],
                      n_943 = t_942.packageName,
                      a_944 = t_942.appCode;
                    n_943 &&
                      i_935.push({
                        packageName: n_943,
                        appCode: a_944,
                      });
                  }
                }),
                [
                  4,
                  eA_63("SKGame", "getChannels", {
                    games: i_935,
                  }),
                ]
              );
            case 3:
              if (0 === (n_936 = o_939.sent()).code)
                return (
                  (r_938 = (a_937 = n_936.channels).reduce(function (e_945, i_946, n_947) {
                    return (i_946.channel && (e_945[t_934[n_947]] = i_946), e_945);
                  }, {})),
                  [
                    2,
                    {
                      code: 0,
                      data: {
                        channels: a_937,
                        channelMap: r_938,
                      },
                    },
                  ]
                );
              return [
                2,
                (0, GryphlineWebSDKV180.Cl)((0, GryphlineWebSDKV180.Cl)({}, n_936), {
                  data: void 0,
                }),
              ];
          }
        });
      });
    },
    ip_186 = function (e_948) {
      return (0, GryphlineWebSDKV180.sH)(void 0, void 0, void 0, function () {
        var t_949;
        return (0, GryphlineWebSDKV180.YH)(this, function (i_950) {
          switch (i_950.label) {
            case 0:
              if (!B_22) return [2];
              if (!ep_65("1.30.0")) return (eo_57("当前版本过低，请前往【设置-关于森空岛】检查更新"), [2]);
              if (!e_948) return (tD_141("skland://gameCenter"), [2]);
              if (ic_181) return [3, 2];
              return [4, il_182()];
            case 1:
              (i_950.sent(), (i_950.label = 2));
            case 2:
              if (!ic_181) return (eo_57("网络开小差，请稍后再试"), [2]);
              if (!(t_949 = ic_181[e_948.name])) return (eo_57("游戏尚未上线，请敬请期待"), [2]);
              return (tD_141("skland://gameCenterDetail?appCode=".concat(t_949.appCode)), [2]);
          }
        });
      });
    },
    ix_187 = function () {
      return navigator.userAgent.toLowerCase().includes("skland");
    },
    ih_188 = {
      schema: tD_141,
      pop: tS_140,
    };
  let iy_189 = m_16;
};
