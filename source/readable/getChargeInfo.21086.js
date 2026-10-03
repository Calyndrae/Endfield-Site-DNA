/**
 * getChargeInfo — readable reconstruction of webpack module 21086 (chunk 3696-03b8256f1fece6bb.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/3696-03b8256f1fece6bb.js
 *
 * Axios client for the site's own account endpoints under '/api/account', using baseURL SiteConfig.serverPrefix (empty string), responseType json and a 5000 ms timeout, with the same request/response interceptors as the bulletin client (errors normalized to {statusCode, code, msg}, default msg '请求错误'). getChargeInfo() fetches the SDK token via Tracking.getToken() and POSTs /api/account/charge-info with {token}, returning {total:null, data:null} when no token; getOrigData(serverId, roleToken) POSTs /api/account/orig-data with {roleToken, serverId}.
 *
 * Exports (minified key → meaning):
 *   Ys → getChargeInfo
 *   BV → getOrigData
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 21086 from 3696-03b8256f1fece6bb.js
// deps: 1162, 13269, 56006
const module_21086 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ys: () => getChargeInfo,
    BV: () => getOrigData,
  });
  var Tracking = webpackRequire(1162),
    axios = webpackRequire(13269);
  let clientConfig = {
      baseURL: webpackRequire(56006).a.serverPrefix,
      responseType: "json",
      timeout: 5e3,
    },
    accountClient = axios.A.create(clientConfig);
  (accountClient.interceptors.request.use(
    (requestConfig) => requestConfig,
    (requestError) => {
      var requestErrorMessage;
      return {
        code: -1,
        msg: null != (requestErrorMessage = requestError.message) ? requestErrorMessage : "请求错误",
      };
    },
  ),
    accountClient.interceptors.response.use(
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
  let ACCOUNT_API_BASE = "/api/account",
    getChargeInfo = async () => {
      let token = await Tracking.A.getToken();
      return token
        ? accountClient.post(ACCOUNT_API_BASE + "/charge-info", {
            token: token,
          })
        : {
            total: null,
            data: null,
          };
    },
    getOrigData = async (serverId, roleToken) =>
      accountClient.post(ACCOUNT_API_BASE + "/orig-data", {
        roleToken: roleToken,
        serverId: serverId,
      });
};
