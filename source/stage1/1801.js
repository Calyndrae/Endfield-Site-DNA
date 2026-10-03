// Gryphline web SDK — module 1801 from 7349-5fc72e5aa1e8149a
// module 1801 from 7349-5fc72e5aa1e8149a.js
// deps: 68973
const module_1801 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  (webpackRequire.r(webpackExports),
    webpackRequire.d(webpackExports, {
      getSDKReadyFunc: () => r_2,
    }));
  var GryphlineWebSDKV180 = webpackRequire(68973),
    a_1 = (function (e_3) {
      void 0 === e_3 && (e_3 = 16);
      for (
        var t_4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
          i_5 = t_4.length,
          n_6 = "",
          a_7 = 0;
        a_7 < e_3;
        a_7++
      )
        n_6 += t_4[Math.floor(Math.random() * i_5)];
      return n_6;
    })(16);
  function r_2(e_8) {
    void 0 === e_8 && (e_8 = {});
    var t_9 = e_8.src,
      i_10 = void 0 === t_9 ? "" : t_9,
      r_11 = (0, GryphlineWebSDKV180.Tt)(e_8, ["src"]);
    return (
      "undefined" != typeof window && (window._GL_WEB_SDK_INIT_OPTIONS = r_11),
      Object.assign(
        function e_13(t_12) {
          return (0, GryphlineWebSDKV180.sH)(this, void 0, void 0, function () {
            var r_14 = this;
            return (0, GryphlineWebSDKV180.YH)(this, function (o_15) {
              return [
                2,
                new Promise(function (o_16, s_17) {
                  var c_18 = window.GL_WEB_SDK;
                  if (c_18) {
                    (null == t_12 || t_12(c_18), o_16(c_18));
                    return;
                  }
                  ((window._GL_WEB_SDK_CALLBACK_QUEUE = window._GL_WEB_SDK_CALLBACK_QUEUE || []),
                    window._GL_WEB_SDK_CALLBACK_QUEUE.push(function () {
                      return (0, GryphlineWebSDKV180.sH)(r_14, void 0, void 0, function () {
                        var i_20;
                        return (0, GryphlineWebSDKV180.YH)(this, function (n_21) {
                          switch (n_21.label) {
                            case 0:
                              return ((i_20 = o_16), [4, e_13(t_12)]);
                            case 1:
                              return (i_20.apply(void 0, [n_21.sent()]), [2]);
                          }
                        });
                      });
                    }));
                  var l_19 = window.document.getElementById(a_1);
                  (l_19 ||
                    (((l_19 = window.document.createElement("script")).defer = !0),
                    (l_19.src = i_10),
                    (l_19.id = a_1),
                    window.document.head.appendChild(l_19)),
                    l_19.addEventListener("error", s_17));
                }),
              ];
            });
          });
        },
        {
          SDK_TYPE: "GL",
        },
      )
    );
  }
};
