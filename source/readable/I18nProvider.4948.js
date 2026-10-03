/**
 * I18nProvider — readable reconstruction of webpack module 4948 (chunk 4948-4c0b17ed78d1fd30.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/4948-4c0b17ed78d1fd30.js
 *
 * I18n context provider and hooks for the Endfield site. Holds a hard-coded JSON table of 33 operators (key, codename, camp, race, rarity, prof, elem) and three CDN image maps (avatar, illust, portrait) served from https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/<key>.<hash>.png; the available language list comes from SiteConfig.i18n (first entry is the default lang) and a display-name table maps codes such as en-us, zh-cn, ja-jp to native names. useI18n reads the context {lang, langs, images, text, font, data, components}; useText returns t(key) which first tries a flat key then walks dotted paths (e.g. 'operator.content.<key>.name'); useOperators memoizes operator records merging the table, images and localized name/intro/camp/race plus cv voice actors for zh-cn, ja-jp, ko-kr and en-us.
 *
 * Exports (minified key → meaning):
 *   I18nProvider → I18nProvider
 *   lX → LANG_DISPLAY_NAMES
 *   YZ → AVAILABLE_LANGS
 *   PO → useI18n
 *   gL → useOperators
 *   Bd → useText
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 4948 from 4948-4c0b17ed78d1fd30.js
// deps: 96424, 97028, 56006, 75583, 97916, 80689, 22519, 60459, 9184, 1841, 79755, 63875, 92880, 26673, 78074, 73803, 3147, 49929, 35300, 93577, 89808, 82405, 57236, 32343, 52151, 90746, 37602, 29269, 11502
const module_4948 = (webpackModule, webpackExports, webpackRequire) => {
  webpackRequire.d(webpackExports, {
    I18nProvider: () => I18nProvider,
    lX: () => LANG_DISPLAY_NAMES,
    YZ: () => AVAILABLE_LANGS,
    PO: () => useI18n,
    gL: () => useOperators,
    Bd: () => useText,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    SiteConfig = webpackRequire(56006);
  let OPERATOR_BASE_TABLE = JSON.parse(
    '[{"key":"typhoea","codename":"Typhoeus","camp":5,"race":14,"rarity":6,"prof":"assault","elem":"nature"},{"key":"purrche","codename":"Purrchena","camp":4,"race":4,"rarity":5,"prof":"shielder","elem":"physic"},{"key":"endministrator2","codename":"Endministrator","camp":0,"race":0,"rarity":6,"prof":"guard","elem":"physic"},{"key":"endministrator1","codename":"Endministrator","camp":0,"race":0,"rarity":6,"prof":"guard","elem":"physic"},{"key":"perlica","codename":"Perlica","camp":0,"race":6,"rarity":5,"prof":"caster","elem":"electric"},{"key":"chen","codename":"Chen Qianyu","camp":0,"race":7,"rarity":5,"prof":"guard","elem":"physic"},{"key":"lizhiyan","codename":"Arcane","camp":6,"race":6,"rarity":6,"prof":"caster","elem":"nature"},{"key":"liino","codename":"Liino","camp":4,"race":14,"rarity":6,"prof":"support","elem":"electric"},{"key":"mifu","codename":"Mi Fu","camp":6,"race":14,"rarity":6,"prof":"guard","elem":"physic"},{"key":"camille","codename":"Camille","camp":8,"race":14,"rarity":6,"prof":"vanguard","elem":"fire"},{"key":"zhuangfy","codename":"Zhuang Fangyi","camp":6,"race":18,"rarity":6,"prof":"assault","elem":"electric"},{"key":"tangtang","codename":"Tangtang","camp":0,"race":4,"rarity":6,"prof":"caster","elem":"ice"},{"key":"rossi","codename":"Rossi","camp":0,"race":8,"rarity":6,"prof":"guard","elem":"physic"},{"key":"laevatain","codename":"Laevatain","camp":5,"race":14,"rarity":6,"prof":"assault","elem":"fire"},{"key":"yvonne","codename":"Yvonne","camp":0,"race":15,"rarity":6,"prof":"assault","elem":"ice"},{"key":"gilberta","codename":"Gilberta","camp":5,"race":16,"rarity":6,"prof":"support","elem":"nature"},{"key":"ardelia","codename":"Ardelia","camp":5,"race":10,"rarity":6,"prof":"support","elem":"nature"},{"key":"ember","codename":"Ember","camp":2,"race":13,"rarity":6,"prof":"shielder","elem":"fire"},{"key":"lastrite","codename":"Last Rite","camp":8,"race":14,"rarity":6,"prof":"assault","elem":"ice"},{"key":"lifeng","codename":"Lifeng","camp":6,"race":1,"rarity":6,"prof":"guard","elem":"physic"},{"key":"pogranichnik","codename":"Pogranichnik","camp":5,"race":6,"rarity":6,"prof":"vanguard","elem":"physic"},{"key":"alesh","codename":"Alesh","camp":7,"race":2,"rarity":5,"prof":"vanguard","elem":"ice"},{"key":"arclight","codename":"Arclight","camp":1,"race":5,"rarity":5,"prof":"vanguard","elem":"electric"},{"key":"avywenna","codename":"Avywenna","camp":4,"race":11,"rarity":5,"prof":"assault","elem":"electric"},{"key":"dapan","codename":"Da Pan","camp":6,"race":17,"rarity":5,"prof":"assault","elem":"physic"},{"key":"snowshine","codename":"Snowshine","camp":5,"race":17,"rarity":5,"prof":"shielder","elem":"ice"},{"key":"wulfgard","codename":"Wulfgard","camp":0,"race":8,"rarity":5,"prof":"caster","elem":"fire"},{"key":"xaihi","codename":"Xaihi","camp":3,"race":14,"rarity":5,"prof":"support","elem":"ice"},{"key":"akekuri","codename":"Akekuri","camp":0,"race":9,"rarity":4,"prof":"vanguard","elem":"fire"},{"key":"antal","codename":"Antal","camp":0,"race":12,"rarity":4,"prof":"support","elem":"electric"},{"key":"catcher","codename":"Catcher","camp":0,"race":9,"rarity":4,"prof":"shielder","elem":"physic"},{"key":"estella","codename":"Estella","camp":0,"race":4,"rarity":4,"prof":"guard","elem":"ice"},{"key":"fluorite","codename":"Fluorite","camp":0,"race":3,"rarity":4,"prof":"caster","elem":"nature"}]',
  );
  var akekuriImage = webpackRequire(75583),
    aleshImage = webpackRequire(97916),
    antalImage = webpackRequire(80689),
    arclightImage = webpackRequire(22519),
    ardeliaImage = webpackRequire(60459),
    avywennaImage = webpackRequire(9184),
    catcherImage = webpackRequire(1841),
    chenImage = webpackRequire(79755),
    dapanImage = webpackRequire(63875),
    emberImage = webpackRequire(92880),
    endministrator1Image = webpackRequire(26673),
    endministrator2Image = webpackRequire(78074),
    estellaImage = webpackRequire(73803),
    fluoriteImage = webpackRequire(3147),
    gilbertaImage = webpackRequire(49929),
    laevatainImage = webpackRequire(35300),
    lastriteImage = webpackRequire(93577),
    lifengImage = webpackRequire(89808),
    perlicaImage = webpackRequire(82405),
    pogranichnikImage = webpackRequire(57236),
    snowshineImage = webpackRequire(32343),
    wulfgardImage = webpackRequire(52151),
    xaihiImage = webpackRequire(90746),
    yvonneImage = webpackRequire(37602),
    endministrator1Image2 = webpackRequire(29269),
    endministrator2Image2 = webpackRequire(11502);
  let OPERATOR_AVATAR_SRC = {
      akekuri: akekuriImage.A.src,
      alesh: aleshImage.A.src,
      antal: antalImage.A.src,
      arclight: arclightImage.A.src,
      ardelia: ardeliaImage.A.src,
      avywenna: avywennaImage.A.src,
      catcher: catcherImage.A.src,
      chen: chenImage.A.src,
      dapan: dapanImage.A.src,
      ember: emberImage.A.src,
      endministrator1: endministrator1Image.A.src,
      endministrator2: endministrator2Image.A.src,
      estella: estellaImage.A.src,
      fluorite: fluoriteImage.A.src,
      gilberta: gilbertaImage.A.src,
      laevatain: laevatainImage.A.src,
      lastrite: lastriteImage.A.src,
      lifeng: lifengImage.A.src,
      perlica: perlicaImage.A.src,
      pogranichnik: pogranichnikImage.A.src,
      rossi: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/rossi.4431f348.png",
      snowshine: snowshineImage.A.src,
      tangtang: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/tangtang.049b8a47.png",
      wulfgard: wulfgardImage.A.src,
      xaihi: xaihiImage.A.src,
      yvonne: yvonneImage.A.src,
      zhuangfy: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/zhuangfy.4369b1a5.png",
      mifu: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/mifu.02645cad.png",
      camille: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/camille.5f50680f.png",
      lizhiyan: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lizhiyan.9b1b7f82.png",
      liino: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/liino.f1730ac7.png",
      typhoea: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/typhoea.c68596a8.png",
      purrche: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/purrche.d14c39f4.png",
    },
    OPERATOR_ILLUST_SRC = {
      akekuri: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/akekuri.751608ae.png",
      alesh: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/alesh.bfe6a583.png",
      antal: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/antal.5a3548af.png",
      arclight: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/arclight.e46ed671.png",
      ardelia: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/ardelia.36d836c7.png",
      avywenna: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/avywenna.3346feee.png",
      catcher: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/catcher.d4e72ab0.png",
      chen: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/chen.2a091fd4.png",
      dapan: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/dapan.8a1d195a.png",
      ember: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/ember.9364370e.png",
      endministrator1: endministrator1Image2.A.src,
      endministrator2: endministrator2Image2.A.src,
      estella: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/estella.0c009bcd.png",
      fluorite: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/fluorite.cf452cf1.png",
      gilberta: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/gilberta.92aa17d4.png",
      laevatain:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/laevatain.d0ca2837.png",
      lastrite: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lastrite.4a02d8bb.png",
      lifeng: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lifeng.7253579c.png",
      perlica: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/perlica.6710bc97.png",
      pogranichnik:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/pogranichnik.6983f122.png",
      rossi: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/rossi.b7ae95b5.png",
      snowshine:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/snowshine.1f6d3a0e.png",
      tangtang: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/tangtang.2602b587.png",
      wulfgard: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/wulfgard.53a6686b.png",
      xaihi: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/xaihi.43d608d9.png",
      yvonne: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/yvonne.a74396e6.png",
      zhuangfy: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/zhuangfy.c6750f9c.png",
      mifu: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/mifu.7b3a74cf.png",
      camille: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/camille.81d81ef7.png",
      lizhiyan: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lizhiyan.5e6e07c8.png",
      liino: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/liino.f5676406.png",
      typhoea: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/typhoea.c4a79f82.png",
      purrche: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/purrche.bdb051d3.png",
    },
    OPERATOR_PORTRAIT_SRC = {
      akekuri: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/akekuri.3603d013.png",
      alesh: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/alesh.d7f457d2.png",
      antal: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/antal.763c87e4.png",
      arclight: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/arclight.e31580d7.png",
      ardelia: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/ardelia.565c75af.png",
      avywenna: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/avywenna.2a592659.png",
      catcher: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/catcher.bc6bcfaa.png",
      chen: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/chen.b0afd1ba.png",
      dapan: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/dapan.7cdb6a4e.png",
      ember: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/ember.6391acf9.png",
      endministrator1:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/endministrator1.c391b13d.png",
      endministrator2:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/endministrator2.5ccb44a8.png",
      estella: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/estella.38c423af.png",
      fluorite: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/fluorite.5a8add29.png",
      gilberta: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/gilberta.724f3503.png",
      laevatain:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/laevatain.edd103d4.png",
      lastrite: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lastrite.3860f541.png",
      lifeng: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lifeng.ef41bc3a.png",
      perlica: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/prelica.d0bbdb53.png",
      pogranichnik:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/pogranichnik.80f2ddbb.png",
      rossi: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/rossi.c58b721b.png",
      snowshine:
        "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/snowshine.bb2c0bdc.png",
      tangtang: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/tangtang.b5cd99e9.png",
      wulfgard: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/wulfgard.609a252f.png",
      xaihi: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/xaihi.9ba3eb36.png",
      yvonne: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/yvonne.9695c304.png",
      zhuangfy: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/zhuangfy.50a608b8.png",
      mifu: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/mifu.e1d79970.png",
      camille: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/camille.a26b2443.png",
      lizhiyan: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/lizhiyan.7ada7b83.png",
      liino: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/liino.8d027d2a.png",
      typhoea: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/typhoea.87cfb4cd.png",
      purrche: "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/purrche.d6659019.png",
    },
    OPERATOR_RECORDS = OPERATOR_BASE_TABLE.map((operatorRow) => ({
      ...operatorRow,
      portrait: OPERATOR_PORTRAIT_SRC[operatorRow.key],
      illust: OPERATOR_ILLUST_SRC[operatorRow.key],
      avatar: OPERATOR_AVATAR_SRC[operatorRow.key],
    })),
    AVAILABLE_LANGS = SiteConfig.a.i18n,
    DEFAULT_LANG = AVAILABLE_LANGS[0],
    LANG_DISPLAY_NAMES = {
      "en-us": "English",
      "zh-cn": "简体中文",
      "zh-tw": "繁體中文",
      "ja-jp": "日本語",
      "ko-kr": "한국어",
      "es-mx": "Espa\xf1ol",
      "pt-br": "Portugu\xeas",
      "fr-fr": "Fran\xe7ais",
      "de-de": "Deutsch",
      "ru-ru": "Русский",
      "it-it": "Italiano",
      "id-id": "Indonesia",
      "th-th": "ไทย",
      "vi-vn": "Tiếng Việt",
    },
    I18nContext = (0, React.createContext)({
      lang: DEFAULT_LANG,
      langs: [],
      images: {},
      text: {},
      font: {},
      data: {
        share: [],
        operator: [],
      },
      components: {
        footer: () => (0, jsx.jsx)(jsx.Fragment, {}),
        SvgLogo: () => (0, jsx.jsx)(jsx.Fragment, {}),
      },
    }),
    useI18n = () => (0, React.useContext)(I18nContext),
    I18nProvider = (props) => {
      let { ssrBundle: ssrBundle, children: children } = props;
      return (0, jsx.jsx)(I18nContext.Provider, {
        value: ssrBundle,
        children: children,
      });
    },
    useText = () => {
      let { text: textTable } = useI18n();
      return {
        t: (0, React.useCallback)(
          (textKey) => {
            if (textKey in textTable) return textTable[textKey];
            let pathSegments = textKey.split("."),
              cursor = textTable;
            for (let segment of pathSegments)
              if (void 0 === (cursor = null == cursor ? void 0 : cursor[segment])) return;
            return cursor;
          },
          [textTable],
        ),
        text: textTable,
      };
    },
    useOperators = () => {
      let { t: t } = useText();
      return (0, React.useMemo)(
        () =>
          OPERATOR_RECORDS.map((operator) => {
            var localizedName, localizedIntro, localizedCamp, localizedRace;
            return {
              key: operator.key,
              codename: operator.codename,
              name:
                null != (localizedName = t("operator.content.".concat(operator.key, ".name")))
                  ? localizedName
                  : "",
              intro:
                null != (localizedIntro = t("operator.content.".concat(operator.key, ".intro")))
                  ? localizedIntro
                  : "",
              camp: null != (localizedCamp = t("operator.camps.".concat(operator.camp))) ? localizedCamp : "",
              race: null != (localizedRace = t("operator.races.".concat(operator.race))) ? localizedRace : "",
              rarity: operator.rarity,
              prof: operator.prof,
              elem: operator.elem,
              portrait: operator.portrait,
              illust: operator.illust,
              avatar: operator.avatar,
              cv: Object.fromEntries(
                ["zh-cn", "ja-jp", "ko-kr", "en-us"]
                  .map((cvLang) => {
                    var cvName;
                    return [
                      cvLang,
                      null != (cvName = t("operator.content.".concat(operator.key, ".cv.").concat(cvLang)))
                        ? cvName
                        : "",
                    ];
                  })
                  .filter((cvEntry) => {
                    let [, cvValue] = cvEntry;
                    return cvValue;
                  }),
              ),
            };
          }),
        [t],
      );
    };
};
