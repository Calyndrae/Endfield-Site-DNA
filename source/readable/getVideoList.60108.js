/**
 * getVideoList — readable reconstruction of webpack module 60108 (chunk [lang]__(main)__(home)__layout-282874dd3834757d.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(home)/layout-282874dd3834757d.js
 *
 * Fetch-based video list API. getVideoList({lang='zh-cn', cate, page=1, pageSize=10}) builds '/api/content/info_video?lang=<lang>&page=<page>&pageSize=<pageSize>' (plus '&cate=<cate>' when given), requests it from SiteConfig.api_server_host (https://endfield.gryphline.com) with fetch, and returns body.data when the HTTP status is 2xx/3xx and body.code === 0; otherwise it throws Error('Failed to fetch video list').
 *
 * Exports (minified key → meaning):
 *   A → getVideoList
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 60108 from [lang]__(main)__(home)__layout-282874dd3834757d.js
// deps: 56006
const module_60108 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => getVideoList,
  });
  var SiteConfig = webpackRequire(56006);
  let getVideoList = async (params) => {
    let { lang = "zh-cn", cate: cate, page = 1, pageSize = 10 } = params,
      path = "/api/content/info_video?lang="
        .concat(lang, "&page=")
        .concat(page, "&pageSize=")
        .concat(pageSize);
    cate && (path += "&cate=".concat(cate));
    let response = await fetch("".concat(SiteConfig.a.api_server_host).concat(path));
    if (response.status >= 200 && response.status < 400) {
      let body = await response.json();
      if (0 === body.code) return body.data;
    }
    throw Error("Failed to fetch video list");
  };
};
