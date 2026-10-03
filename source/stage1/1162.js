// Tracking (collect events, insertFooter) — module 1162 from [lang]__(main)__layout-493920d1b65733f5
// module 1162 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 97028, 1801, 56006, 4948, 73690
const module_1162 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => c_3,
    SDKInitializer: () => d_2,
  });
  var React = webpackRequire(97028),
    GryphlineWebSDK = webpackRequire(1801),
    SiteConfig = webpackRequire(56006),
    I18nProviderUseI18n = webpackRequire(4948),
    SdkInit = webpackRequire(73690);
  class l_1 {
    static async insertFooter(e_4) {
      let a_5 = await this.sdkReady();
      if ("GL" === a_5.SDK_TYPE) return void a_5.projects.endfield.renderFooter(e_4);
      throw Error("Invalid SDK configuration.");
    }
    static async checkAnswerStatus(e_6) {
      return (await this.sdkReady()).survey.checkAnswerStatus(e_6);
    }
    static async download(e_7) {
      return (await this.sdkReady()).projects.endfield.download({
        target: e_7,
      });
    }
  }
  ((l_1.init = async (e_8) => {
    var a_9, n_10, i_11;
    l_1.lang = e_8;
    let o_12 = {
      domain: "endfield",
      sub_domain: "official",
      third_domain: /\/psCheckAccess/.test(location.pathname)
        ? "psn_access_checker"
        : /\/checkAccess/.test(location.pathname)
          ? "access_checker"
          : "",
      pageProperties: {
        language: e_8,
        source:
          (null === SdkInit.O || void 0 === SdkInit.O || null == (a_9 = SdkInit.O.source)
            ? void 0
            : a_9.from) || "",
        share_type:
          (null === SdkInit.O || void 0 === SdkInit.O || null == (n_10 = SdkInit.O.share)
            ? void 0
            : n_10.type) || "",
        share_by:
          (null === SdkInit.O || void 0 === SdkInit.O || null == (i_11 = SdkInit.O.share)
            ? void 0
            : i_11.by) || "",
      },
      config: {
        appId: SiteConfig.a.etl_app_id || "",
      },
    };
    l_1.sdkReady = GryphlineWebSDK.getSDKReadyFunc({
      src: SiteConfig.a.sdk,
      language: e_8.toLocaleLowerCase(),
      etl: o_12,
      cookiesReminder: {
        enabled: !0,
        theme: "dark",
      },
    });
  }),
    (l_1.formatUserInfo = (e_13, a_14) => {
      let { hgId: n_15, email: i_16 } = e_13,
        t_17 = a_14 || [];
      return "phone" in e_13
        ? {
            hgId: n_15,
            phone: e_13.phone,
            email: i_16,
            reservePlatforms: t_17,
          }
        : {
            hgId: n_15,
            email: i_16,
            displayName: e_13.displayName,
            reservePlatforms: t_17,
          };
    }),
    (l_1.getToken = async () => {
      let e_18 = await l_1.sdkReady();
      if ("GL" === e_18.SDK_TYPE) return e_18.Account.API.getToken();
      throw Error("Invalid SDK configuration.");
    }),
    (l_1.getUserInfo = async () => {
      let e_19 = await l_1.sdkReady();
      if ("GL" === e_19.SDK_TYPE) {
        let a_20 = await new Promise((a_21) => {
          e_19.user.checkSession({}, (e_22, n_23) => {
            0 === e_22 && n_23 ? a_21(n_23.accountInfo) : a_21(void 0);
          });
        });
        return a_20 ? l_1.formatUserInfo(a_20) : null;
      }
      throw Error("Invalid SDK configuration.");
    }),
    (l_1.showLoginDialog = async (e_24) => {
      let a_25 = await l_1.sdkReady();
      throw (
        "GL" === a_25.SDK_TYPE &&
          a_25.user.auth({}, (a_26, n_27) => {
            0 === a_26 && n_27 && e_24(l_1.formatUserInfo(n_27.accountInfo));
          }),
        Error("Invalid SDK configuration.")
      );
    }),
    (l_1.logout = async () => {
      let e_28 = await l_1.sdkReady();
      if ("GL" === e_28.SDK_TYPE) return e_28.user.API.logout();
      throw Error("Invalid SDK configuration.");
    }),
    (l_1.queryReserve = async () => {
      let e_29 = await l_1.sdkReady();
      if ("GL" === e_29.SDK_TYPE) {
        let a_30 = await e_29.reservation.checkReservation("endfield");
        return a_30.result && a_30.data ? a_30.data.platform || [] : void 0;
      }
      throw Error("Invalid SDK configuration.");
    }),
    (l_1.submitReserve = async (e_31) => {
      if (!e_31.length) return;
      let a_32 = await l_1.sdkReady();
      if ("GL" === a_32.SDK_TYPE)
        return await a_32.reservation.doReservation("endfield", {
          platform: e_31,
        });
      throw Error("Invalid SDK configuration.");
    }),
    (l_1.getProtocol = async (e_33) => {
      let a_34 = await l_1.sdkReady();
      if ("GL" === a_34.SDK_TYPE)
        return a_34.protocol.get("endfield/game/".concat(e_33), {
          lang: document.documentElement.lang,
        });
      throw Error("Invalid SDK configuration.");
    }),
    (l_1.collect = async (e_35, a_36) => {
      (await l_1.sdkReady()).ETL.event(e_35, a_36);
    }),
    (l_1.ADcollect = async (e_37, a_38) => {
      let n_39 = await l_1.sdkReady();
      (await n_39.ETL.getInstanceAsync(SiteConfig.a.ad_app_code)).event(e_37, a_38);
    }),
    (l_1.jumpURL = async (e_40) => {
      var a_41;
      if (!l_1.sdkReady || !e_40) return;
      let n_42 = await l_1.sdkReady(),
        i_43 = (() => {
          try {
            let a_44 = n_42.ETL.getInstanceByAppId(SiteConfig.a.ad_app_code).getTrackingCode(),
              i_45 = null != a_44 ? a_44 : "";
            if (e_40.startsWith("http")) {
              let a_47 = new URL(e_40);
              return (a_47.searchParams.set("ua", i_45), a_47.toString());
            }
            let t_46 = e_40.includes("?");
            return ""
              .concat(e_40)
              .concat(t_46 ? "&" : "?", "ua=")
              .concat(encodeURIComponent(i_45));
          } catch (n_48) {
            let a_49 = e_40.includes("?");
            return "".concat(e_40).concat(a_49 ? "&" : "?", "ua=");
          }
        })();
      n_42.projects.endfield.download({
        target: {
          url: i_43,
          channel: "auto",
        },
        etlOptions: {
          appId: SiteConfig.a.ad_app_code,
          properties: {
            source:
              (null === SdkInit.O || void 0 === SdkInit.O || null == (a_41 = SdkInit.O.source)
                ? void 0
                : a_41.from) || "",
            domain: "endfield",
            sub_domain: "ad_landing",
            third_domain: "mkt",
          },
        },
      });
    }));
  let d_2 = (e_50) => {
      let { langProp: a_51 } = e_50,
        { lang: n_52 } = (0, I18nProviderUseI18n.PO)(),
        t_53 = (0, React.useRef)(!1);
      return (t_53.current || ((t_53.current = !0), a_51 ? l_1.init(a_51) : l_1.init(n_52)), null);
    },
    c_3 = l_1;
};
