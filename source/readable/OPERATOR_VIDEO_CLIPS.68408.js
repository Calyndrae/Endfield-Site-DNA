/**
 * OPERATOR_VIDEO_CLIPS — readable reconstruction of webpack module 68408 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * OperatorVideoClips builds a lookup (export p) from operator key to a pair of transparent-video URLs under static/media/video/: an `enter` clip played once when 3D mode activates and an `idle` clip looped afterwards. It covers 33 operators (akekuri, alesh, antal, arclight, ardelia, avywenna, camille, catcher, chen, dapan, ember, endministrator1, endministrator2, estella, fluorite, gilberta, laevatain, lastrite, lifeng, liino, lizhiyan, mifu, perlica, pogranichnik, purrche, rossi, snowshine, tangtang, typhoea, wulfgard, xaihi, yvonne, zhuangfy); zhuangfy's enter.418594.mp4 / idle.7168ff.mp4 are inlined rather than hoisted. Each URL is webpack public path + hashed file name (e.g. akekuri enter.a66d56.mp4 / idle.5c433b.mp4).
 *
 * Exports (minified key → meaning):
 *   p → OPERATOR_VIDEO_CLIPS
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 68408 from 8963-234f979bdd6b491c.js
// deps:
const module_68408 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    p: () => OPERATOR_VIDEO_CLIPS,
  });
  let AKEKURI_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.a66d56.mp4",
    AKEKURI_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.5c433b.mp4",
    ALESH_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.bb0080.mp4",
    ALESH_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.ce391f.mp4",
    ANTAL_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.7df9b2.mp4",
    ANTAL_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.4197d2.mp4",
    ARCLIGHT_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.da7c54.mp4",
    ARCLIGHT_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.4b776c.mp4",
    ARDELIA_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.c84d04.mp4",
    ARDELIA_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.2e6c26.mp4",
    AVYWENNA_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.940700.mp4",
    AVYWENNA_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.b4df19.mp4",
    CAMILLE_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.378087.mp4",
    CAMILLE_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.a0ab37.mp4",
    CATCHER_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.7dce7b.mp4",
    CATCHER_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.c9b4aa.mp4",
    CHEN_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.ed8d5e.mp4",
    CHEN_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.c3a71d.mp4",
    DAPAN_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.bc2b7b.mp4",
    DAPAN_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.d01501.mp4",
    EMBER_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.949a3d.mp4",
    EMBER_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.804e0a.mp4",
    ENDMINISTRATOR1_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.13649e.mp4",
    ENDMINISTRATOR1_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.12d14a.mp4",
    ENDMINISTRATOR2_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.0a2d0e.mp4",
    ENDMINISTRATOR2_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.810977.mp4",
    ESTELLA_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.7100b5.mp4",
    ESTELLA_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.77b33e.mp4",
    FLUORITE_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.eef9fe.mp4",
    FLUORITE_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.289409.mp4",
    GILBERTA_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.1180d2.mp4",
    GILBERTA_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.1f28ab.mp4",
    LAEVATAIN_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.8c50d1.mp4",
    LAEVATAIN_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.cb64d4.mp4",
    LASTRITE_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.ed2da1.mp4",
    LASTRITE_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.e6e3ed.mp4",
    LIFENG_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.3dc320.mp4",
    LIFENG_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.68bcf2.mp4",
    LIINO_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.88cbb6.mp4",
    LIINO_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.cd38eb.mp4",
    LIZHIYAN_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.49352f.mp4",
    LIZHIYAN_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.da7be7.mp4",
    MIFU_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.8a5a49.mp4",
    MIFU_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.5864d8.mp4",
    PERLICA_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.6546d3.mp4",
    PERLICA_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.f95544.mp4",
    POGRANICHNIK_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.4f53eb.mp4",
    POGRANICHNIK_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.0bdba0.mp4",
    PURRCHE_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.5809fa.mp4",
    PURRCHE_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.885f2f.mp4",
    ROSSI_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.b3fe92.mp4",
    ROSSI_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.a3c7a9.mp4",
    SNOWSHINE_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.674f13.mp4",
    SNOWSHINE_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.5460af.mp4",
    TANGTANG_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.29f069.mp4",
    TANGTANG_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.1688c4.mp4",
    TYPHOEA_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.f77ca5.mp4",
    TYPHOEA_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.b4f2dd.mp4",
    WULFGARD_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.2e3172.mp4",
    WULFGARD_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.24e819.mp4",
    XAIHI_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.d2a51a.mp4",
    XAIHI_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.7beb0c.mp4",
    YVONNE_ENTER_CLIP = webpackRequire.p + "static/media/video/enter.7be713.mp4",
    YVONNE_IDLE_CLIP = webpackRequire.p + "static/media/video/idle.befed4.mp4",
    OPERATOR_VIDEO_CLIPS = {
      akekuri: {
        enter: AKEKURI_ENTER_CLIP,
        idle: AKEKURI_IDLE_CLIP,
      },
      antal: {
        enter: ANTAL_ENTER_CLIP,
        idle: ANTAL_IDLE_CLIP,
      },
      chen: {
        enter: CHEN_ENTER_CLIP,
        idle: CHEN_IDLE_CLIP,
      },
      catcher: {
        enter: CATCHER_ENTER_CLIP,
        idle: CATCHER_IDLE_CLIP,
      },
      ember: {
        enter: EMBER_ENTER_CLIP,
        idle: EMBER_IDLE_CLIP,
      },
      estella: {
        enter: ESTELLA_ENTER_CLIP,
        idle: ESTELLA_IDLE_CLIP,
      },
      fluorite: {
        enter: FLUORITE_ENTER_CLIP,
        idle: FLUORITE_IDLE_CLIP,
      },
      alesh: {
        enter: ALESH_ENTER_CLIP,
        idle: ALESH_IDLE_CLIP,
      },
      arclight: {
        enter: ARCLIGHT_ENTER_CLIP,
        idle: ARCLIGHT_IDLE_CLIP,
      },
      ardelia: {
        enter: ARDELIA_ENTER_CLIP,
        idle: ARDELIA_IDLE_CLIP,
      },
      avywenna: {
        enter: AVYWENNA_ENTER_CLIP,
        idle: AVYWENNA_IDLE_CLIP,
      },
      camille: {
        enter: CAMILLE_ENTER_CLIP,
        idle: CAMILLE_IDLE_CLIP,
      },
      dapan: {
        enter: DAPAN_ENTER_CLIP,
        idle: DAPAN_IDLE_CLIP,
      },
      endministrator1: {
        enter: ENDMINISTRATOR1_ENTER_CLIP,
        idle: ENDMINISTRATOR1_IDLE_CLIP,
      },
      endministrator2: {
        enter: ENDMINISTRATOR2_ENTER_CLIP,
        idle: ENDMINISTRATOR2_IDLE_CLIP,
      },
      gilberta: {
        enter: GILBERTA_ENTER_CLIP,
        idle: GILBERTA_IDLE_CLIP,
      },
      laevatain: {
        enter: LAEVATAIN_ENTER_CLIP,
        idle: LAEVATAIN_IDLE_CLIP,
      },
      lastrite: {
        enter: LASTRITE_ENTER_CLIP,
        idle: LASTRITE_IDLE_CLIP,
      },
      lifeng: {
        enter: LIFENG_ENTER_CLIP,
        idle: LIFENG_IDLE_CLIP,
      },
      mifu: {
        enter: MIFU_ENTER_CLIP,
        idle: MIFU_IDLE_CLIP,
      },
      perlica: {
        enter: PERLICA_ENTER_CLIP,
        idle: PERLICA_IDLE_CLIP,
      },
      pogranichnik: {
        enter: POGRANICHNIK_ENTER_CLIP,
        idle: POGRANICHNIK_IDLE_CLIP,
      },
      snowshine: {
        enter: SNOWSHINE_ENTER_CLIP,
        idle: SNOWSHINE_IDLE_CLIP,
      },
      wulfgard: {
        enter: WULFGARD_ENTER_CLIP,
        idle: WULFGARD_IDLE_CLIP,
      },
      xaihi: {
        enter: XAIHI_ENTER_CLIP,
        idle: XAIHI_IDLE_CLIP,
      },
      yvonne: {
        enter: YVONNE_ENTER_CLIP,
        idle: YVONNE_IDLE_CLIP,
      },
      tangtang: {
        enter: TANGTANG_ENTER_CLIP,
        idle: TANGTANG_IDLE_CLIP,
      },
      rossi: {
        enter: ROSSI_ENTER_CLIP,
        idle: ROSSI_IDLE_CLIP,
      },
      zhuangfy: {
        enter: webpackRequire.p + "static/media/video/enter.418594.mp4",
        idle: webpackRequire.p + "static/media/video/idle.7168ff.mp4",
      },
      lizhiyan: {
        enter: LIZHIYAN_ENTER_CLIP,
        idle: LIZHIYAN_IDLE_CLIP,
      },
      liino: {
        enter: LIINO_ENTER_CLIP,
        idle: LIINO_IDLE_CLIP,
      },
      typhoea: {
        enter: TYPHOEA_ENTER_CLIP,
        idle: TYPHOEA_IDLE_CLIP,
      },
      purrche: {
        enter: PURRCHE_ENTER_CLIP,
        idle: PURRCHE_IDLE_CLIP,
      },
    };
};
