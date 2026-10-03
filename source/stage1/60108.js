// VideoListApi (/api/content/info_video) — module 60108 from [lang]__(main)__(home)__layout-282874dd3834757d
// module 60108 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 56006
const module_60108 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => o_1,
  });
  var SiteConfig = webpackRequire(56006);
  let o_1 = async (e_2) => {
    let { lang: t_4 = "zh-cn", cate: n_3, page: o_5 = 1, pageSize: l_6 = 10 } = e_2,
      s_7 = "/api/content/info_video?lang=".concat(t_4, "&page=").concat(o_5, "&pageSize=").concat(l_6);
    n_3 && (s_7 += "&cate=".concat(n_3));
    let a_8 = await fetch("".concat(SiteConfig.a.api_server_host).concat(s_7));
    if (a_8.status >= 200 && a_8.status < 400) {
      let e_9 = await a_8.json();
      if (0 === e_9.code) return e_9.data;
    }
    throw Error("Failed to fetch video list");
  };
};
