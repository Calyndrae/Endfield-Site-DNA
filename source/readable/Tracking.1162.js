/**
 * Tracking — readable reconstruction of webpack module 1162 (chunk [lang]__(main)__layout-493920d1b65733f5.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/layout-493920d1b65733f5.js
 *
 * Static Tracking facade over the Gryphline web SDK. init(lang) builds an ETL config {domain:'endfield', sub_domain:'official', third_domain: 'psn_access_checker'|'access_checker'|'' by pathname, pageProperties:{language, source, share_type, share_by from SdkInit}, config:{appId: etl_app_id}} and obtains sdkReady via getSDKReadyFunc({src: SiteConfig.sdk, language, etl, cookiesReminder:{enabled:true, theme:'dark'}}). Every method awaits sdkReady() and throws 'Invalid SDK configuration.' unless SDK_TYPE === 'GL': insertFooter renders projects.endfield.renderFooter(el), checkAnswerStatus/survey, download, getToken, getUserInfo (user.checkSession -> formatUserInfo with hgId/email/phone or displayName/reservePlatforms), showLoginDialog (user.auth), logout, queryReserve/submitReserve (reservation API for 'endfield'), getProtocol('endfield/game/<name>'), collect (ETL.event), ADcollect (ETL instance for ad_app_code) and jumpURL which appends a 'ua' tracking-code query param and calls projects.endfield.download with ad_landing/mkt properties. SDKInitializer is a render-null component that calls init once with langProp or the context lang.
 *
 * Exports (minified key → meaning):
 *   A → Tracking
 *   SDKInitializer → SDKInitializer
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 1162 from [lang]__(main)__layout-493920d1b65733f5.js
// deps: 97028, 1801, 56006, 4948, 73690
const module_1162 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => TrackingAlias,
    SDKInitializer: () => SDKInitializer,
  });
  var React = webpackRequire(97028),
    GryphlineAccountWebSDKV180 = webpackRequire(1801),
    SiteConfig = webpackRequire(56006),
    I18nProviderUseI18n = webpackRequire(4948),
    SdkInit = webpackRequire(73690);
  class Tracking {
    static async insertFooter(footerContainer) {
      let sdk = await this.sdkReady();
      if ("GL" === sdk.SDK_TYPE) return void sdk.projects.endfield.renderFooter(footerContainer);
      throw Error("Invalid SDK configuration.");
    }
    static async checkAnswerStatus(surveyId) {
      return (await this.sdkReady()).survey.checkAnswerStatus(surveyId);
    }
    static async download(downloadTarget) {
      return (await this.sdkReady()).projects.endfield.download({
        target: downloadTarget,
      });
    }
  }
  ((Tracking.init = async (lang) => {
    var initSource, initShare, initShare2;
    Tracking.lang = lang;
    let etlConfig = {
      domain: "endfield",
      sub_domain: "official",
      third_domain: /\/psCheckAccess/.test(location.pathname)
        ? "psn_access_checker"
        : /\/checkAccess/.test(location.pathname)
          ? "access_checker"
          : "",
      pageProperties: {
        language: lang,
        source:
          (null === SdkInit.O || void 0 === SdkInit.O || null == (initSource = SdkInit.O.source)
            ? void 0
            : initSource.from) || "",
        share_type:
          (null === SdkInit.O || void 0 === SdkInit.O || null == (initShare = SdkInit.O.share)
            ? void 0
            : initShare.type) || "",
        share_by:
          (null === SdkInit.O || void 0 === SdkInit.O || null == (initShare2 = SdkInit.O.share)
            ? void 0
            : initShare2.by) || "",
      },
      config: {
        appId: SiteConfig.a.etl_app_id || "",
      },
    };
    Tracking.sdkReady = GryphlineAccountWebSDKV180.getSDKReadyFunc({
      src: SiteConfig.a.sdk,
      language: lang.toLocaleLowerCase(),
      etl: etlConfig,
      cookiesReminder: {
        enabled: !0,
        theme: "dark",
      },
    });
  }),
    (Tracking.formatUserInfo = (accountInfo, reservePlatforms) => {
      let { hgId: hgId, email: email } = accountInfo,
        platforms = reservePlatforms || [];
      return "phone" in accountInfo
        ? {
            hgId: hgId,
            phone: accountInfo.phone,
            email: email,
            reservePlatforms: platforms,
          }
        : {
            hgId: hgId,
            email: email,
            displayName: accountInfo.displayName,
            reservePlatforms: platforms,
          };
    }),
    (Tracking.getToken = async () => {
      let sdkForToken = await Tracking.sdkReady();
      if ("GL" === sdkForToken.SDK_TYPE) return sdkForToken.Account.API.getToken();
      throw Error("Invalid SDK configuration.");
    }),
    (Tracking.getUserInfo = async () => {
      let sdkForUser = await Tracking.sdkReady();
      if ("GL" === sdkForUser.SDK_TYPE) {
        let sessionAccount = await new Promise((resolve) => {
          sdkForUser.user.checkSession({}, (sessionCode, sessionResult) => {
            0 === sessionCode && sessionResult ? resolve(sessionResult.accountInfo) : resolve(void 0);
          });
        });
        return sessionAccount ? Tracking.formatUserInfo(sessionAccount) : null;
      }
      throw Error("Invalid SDK configuration.");
    }),
    (Tracking.showLoginDialog = async (onLogin) => {
      let sdkForLogin = await Tracking.sdkReady();
      throw (
        "GL" === sdkForLogin.SDK_TYPE &&
          sdkForLogin.user.auth({}, (authCode, authResult) => {
            0 === authCode && authResult && onLogin(Tracking.formatUserInfo(authResult.accountInfo));
          }),
        Error("Invalid SDK configuration.")
      );
    }),
    (Tracking.logout = async () => {
      let sdkForLogout = await Tracking.sdkReady();
      if ("GL" === sdkForLogout.SDK_TYPE) return sdkForLogout.user.API.logout();
      throw Error("Invalid SDK configuration.");
    }),
    (Tracking.queryReserve = async () => {
      let sdkForReserve = await Tracking.sdkReady();
      if ("GL" === sdkForReserve.SDK_TYPE) {
        let reservation = await sdkForReserve.reservation.checkReservation("endfield");
        return reservation.result && reservation.data ? reservation.data.platform || [] : void 0;
      }
      throw Error("Invalid SDK configuration.");
    }),
    (Tracking.submitReserve = async (platformsToReserve) => {
      if (!platformsToReserve.length) return;
      let sdkForSubmit = await Tracking.sdkReady();
      if ("GL" === sdkForSubmit.SDK_TYPE)
        return await sdkForSubmit.reservation.doReservation("endfield", {
          platform: platformsToReserve,
        });
      throw Error("Invalid SDK configuration.");
    }),
    (Tracking.getProtocol = async (protocolName) => {
      let sdkForProtocol = await Tracking.sdkReady();
      if ("GL" === sdkForProtocol.SDK_TYPE)
        return sdkForProtocol.protocol.get("endfield/game/".concat(protocolName), {
          lang: document.documentElement.lang,
        });
      throw Error("Invalid SDK configuration.");
    }),
    (Tracking.collect = async (eventName, eventProps) => {
      (await Tracking.sdkReady()).ETL.event(eventName, eventProps);
    }),
    (Tracking.ADcollect = async (adEventName, adEventProps) => {
      let sdkForAd = await Tracking.sdkReady();
      (await sdkForAd.ETL.getInstanceAsync(SiteConfig.a.ad_app_code)).event(adEventName, adEventProps);
    }),
    (Tracking.jumpURL = async (url) => {
      var jumpSource;
      if (!Tracking.sdkReady || !url) return;
      let sdkForJump = await Tracking.sdkReady(),
        trackedUrl = (() => {
          try {
            let trackingCode = sdkForJump.ETL.getInstanceByAppId(SiteConfig.a.ad_app_code).getTrackingCode(),
              uaParam = null != trackingCode ? trackingCode : "";
            if (url.startsWith("http")) {
              let parsedUrl = new URL(url);
              return (parsedUrl.searchParams.set("ua", uaParam), parsedUrl.toString());
            }
            let hasQuery = url.includes("?");
            return ""
              .concat(url)
              .concat(hasQuery ? "&" : "?", "ua=")
              .concat(encodeURIComponent(uaParam));
          } catch (trackingError) {
            let hasQueryFallback = url.includes("?");
            return "".concat(url).concat(hasQueryFallback ? "&" : "?", "ua=");
          }
        })();
      sdkForJump.projects.endfield.download({
        target: {
          url: trackedUrl,
          channel: "auto",
        },
        etlOptions: {
          appId: SiteConfig.a.ad_app_code,
          properties: {
            source:
              (null === SdkInit.O || void 0 === SdkInit.O || null == (jumpSource = SdkInit.O.source)
                ? void 0
                : jumpSource.from) || "",
            domain: "endfield",
            sub_domain: "ad_landing",
            third_domain: "mkt",
          },
        },
      });
    }));
  let SDKInitializer = (props) => {
      let { langProp: langProp } = props,
        { lang: contextLang } = (0, I18nProviderUseI18n.PO)(),
        initializedRef = (0, React.useRef)(!1);
      return (
        initializedRef.current ||
          ((initializedRef.current = !0), langProp ? Tracking.init(langProp) : Tracking.init(contextLang)),
        null
      );
    },
    TrackingAlias = Tracking;
};
