/**
 * getBulletinDetail — readable reconstruction of webpack module 91627 (chunk [lang]__(main)__(home)__layout-282874dd3834757d.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(home)/layout-282874dd3834757d.js
 *
 * Axios client for the CMS bulletin (news) API. The instance uses baseURL SiteConfig.cms.host (https://web-news.gryphline.com), responseType json and a 5000 ms timeout; a request interceptor turns request errors into {code:-1, msg} (default '请求错误') and a response interceptor unwraps response.data on success or normalizes failures to {statusCode, code, msg} from the error body (falling back to statusText/message). getBulletinList(lang, page=1, pageSize=9, tab) GETs /api/bulletin with params {lang, code: cms.appCode, page, pageSize, tabs:[tab]}; getBulletinDetail(cid, lang) GETs /api/bulletin/<cid> with {lang, code}. The default page size 9 is also exported.
 *
 * Exports (minified key → meaning):
 *   Jq → getBulletinDetail
 *   PZ → getBulletinList
 *   a → DEFAULT_PAGE_SIZE
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 91627 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 13269, 56006
const module_91627 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Jq: () => getBulletinDetail,
    PZ: () => getBulletinList,
    a: () => DEFAULT_PAGE_SIZE,
  });
  var axios = webpackRequire(13269),
    SiteConfig = webpackRequire(56006);
  let cmsClient = axios.A.create({
    baseURL: SiteConfig.a.cms.host,
    responseType: "json",
    timeout: 5e3,
  });
  (cmsClient.interceptors.request.use(
    (requestConfig) => requestConfig,
    (requestError) => {
      var requestErrorMessage;
      return {
        code: -1,
        msg: null != (requestErrorMessage = requestError.message) ? requestErrorMessage : "请求错误",
      };
    },
  ),
    cmsClient.interceptors.response.use(
      (response) => response.data,
      (responseError) => {
        var errorResponseForData,
          errorResponseForText,
          errorResponseForStatus,
          errorCode,
          errorMsg,
          statusText,
          fallbackMsg;
        let errorData =
          null == (errorResponseForData = responseError.response) ? void 0 : errorResponseForData.data;
        return errorData && "string" != typeof errorData
          ? {
              statusCode:
                null == (errorResponseForStatus = responseError.response)
                  ? void 0
                  : errorResponseForStatus.status,
              code: null != (errorCode = errorData.code) ? errorCode : errorData.statusCode,
              msg: null != (errorMsg = errorData.msg) ? errorMsg : errorData.message,
            }
          : {
              code: -1,
              msg:
                null !=
                (fallbackMsg =
                  null !=
                  (statusText =
                    null == (errorResponseForText = responseError.response)
                      ? void 0
                      : errorResponseForText.statusText)
                    ? statusText
                    : responseError.message)
                  ? fallbackMsg
                  : "请求错误",
            };
      },
    ));
  let DEFAULT_PAGE_SIZE = 9,
    getBulletinList = async (lang, page, pageSize, tab) =>
      cmsClient.get("/api/bulletin", {
        params: {
          lang: lang,
          code: SiteConfig.a.cms.appCode,
          page: null != page ? page : 1,
          pageSize: null != pageSize ? pageSize : DEFAULT_PAGE_SIZE,
          tabs: [tab],
        },
      }),
    getBulletinDetail = async (cid, detailLang) =>
      cmsClient.get("/api/bulletin/".concat(cid), {
        params: {
          lang: detailLang,
          code: SiteConfig.a.cms.appCode,
        },
      });
};
