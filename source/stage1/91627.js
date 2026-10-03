// BulletinApi (axios client for /api/bulletin) — module 91627 from [lang]__(main)__(home)__layout-282874dd3834757d
// module 91627 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 13269, 56006
const module_91627 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Jq: () => i_4,
    PZ: () => a_3,
    a: () => s_2,
  });
  var axios = webpackRequire(13269),
    SiteConfig = webpackRequire(56006);
  let l_1 = axios.A.create({
    baseURL: SiteConfig.a.cms.host,
    responseType: "json",
    timeout: 5e3,
  });
  (l_1.interceptors.request.use(
    (e_5) => e_5,
    (e_6) => {
      var t_7;
      return {
        code: -1,
        msg: null != (t_7 = e_6.message) ? t_7 : "请求错误",
      };
    },
  ),
    l_1.interceptors.response.use(
      (e_8) => e_8.data,
      (e_9) => {
        var t_10, n_11, r_12, o_13, l_14, s_15, a_16;
        let i_17 = null == (t_10 = e_9.response) ? void 0 : t_10.data;
        return i_17 && "string" != typeof i_17
          ? {
              statusCode: null == (r_12 = e_9.response) ? void 0 : r_12.status,
              code: null != (o_13 = i_17.code) ? o_13 : i_17.statusCode,
              msg: null != (l_14 = i_17.msg) ? l_14 : i_17.message,
            }
          : {
              code: -1,
              msg:
                null !=
                (a_16 =
                  null != (s_15 = null == (n_11 = e_9.response) ? void 0 : n_11.statusText)
                    ? s_15
                    : e_9.message)
                  ? a_16
                  : "请求错误",
            };
      },
    ));
  let s_2 = 9,
    a_3 = async (e_18, t_19, n_20, r_21) =>
      l_1.get("/api/bulletin", {
        params: {
          lang: e_18,
          code: SiteConfig.a.cms.appCode,
          page: null != t_19 ? t_19 : 1,
          pageSize: null != n_20 ? n_20 : s_2,
          tabs: [r_21],
        },
      }),
    i_4 = async (e_22, t_23) =>
      l_1.get("/api/bulletin/".concat(e_22), {
        params: {
          lang: t_23,
          code: SiteConfig.a.cms.appCode,
        },
      });
};
