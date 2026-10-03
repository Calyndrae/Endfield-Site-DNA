// AccountApi (/api/account, /charge-info, /orig-data) — module 21086 from 3696-03b8256f1fece6bb
// module 21086 from 3696-03b8256f1fece6bb.js
// deps: 1162, 13269, 56006
const module_21086 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Ys: () => i_4,
    BV: () => o_5,
  });
  var Tracking = webpackRequire(1162),
    axios = webpackRequire(13269);
  let n_1 = {
      baseURL: webpackRequire(56006).a.serverPrefix,
      responseType: "json",
      timeout: 5e3,
    },
    s_2 = axios.A.create(n_1);
  (s_2.interceptors.request.use(
    (e_6) => e_6,
    (e_7) => {
      var t_8;
      return {
        code: -1,
        msg: null != (t_8 = e_7.message) ? t_8 : "请求错误",
      };
    },
  ),
    s_2.interceptors.response.use(
      (e_9) => e_9.data,
      (e_10) => {
        var t_11, r_12, l_13, a_14, n_15, s_16, L_17;
        let i_18 = null == (t_11 = e_10.response) ? void 0 : t_11.data;
        return i_18 && "string" != typeof i_18
          ? {
              statusCode: null == (l_13 = e_10.response) ? void 0 : l_13.status,
              code: null != (a_14 = i_18.code) ? a_14 : i_18.statusCode,
              msg: null != (n_15 = i_18.msg) ? n_15 : i_18.message,
            }
          : {
              code: -1,
              msg:
                null !=
                (L_17 =
                  null != (s_16 = null == (r_12 = e_10.response) ? void 0 : r_12.statusText)
                    ? s_16
                    : e_10.message)
                  ? L_17
                  : "请求错误",
            };
      },
    ));
  let L_3 = "/api/account",
    i_4 = async () => {
      let e_19 = await Tracking.A.getToken();
      return e_19
        ? s_2.post(L_3 + "/charge-info", {
            token: e_19,
          })
        : {
            total: null,
            data: null,
          };
    },
    o_5 = async (e_20, t_21) =>
      s_2.post(L_3 + "/orig-data", {
        roleToken: t_21,
        serverId: e_20,
      });
};
