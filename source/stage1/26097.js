// SoundEffects (SFX manager: arrow_click, char_click, ...) — module 26097 from 8963-234f979bdd6b491c
// module 26097 from 8963-234f979bdd6b491c.js
// deps: 97521, 2285
const module_26097 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    d: () => m_11,
    A: () => M_14,
  });
  var SiteUtils = webpackRequire(97521),
    SoundControlStore = webpackRequire(2285);
  let n_1 = webpackRequire.p + "static/media/sound/arrow_click.a72c10.mp3",
    r_2 = webpackRequire.p + "static/media/sound/char_click.beff5b.mp3",
    l_3 = webpackRequire.p + "static/media/sound/char_detail_enter.babc4e.mp3",
    o_4 = webpackRequire.p + "static/media/sound/char_list_enter.d29f74.mp3",
    s_5 = webpackRequire.p + "static/media/sound/close_click.fe1dc4.mp3",
    C_6 = webpackRequire.p + "static/media/sound/common_click.52e9d4.mp3",
    d_7 = webpackRequire.p + "static/media/sound/enter_click.4f6fd3.mp3",
    c_8 = webpackRequire.p + "static/media/sound/home_enter.6aefd5.mp3",
    u_9 = webpackRequire.p + "static/media/sound/menu_click.d51e70.mp3",
    p_10 = webpackRequire.p + "static/media/sound/model.569c5b.mp3",
    m_11 = {
      arrow_click: n_1,
      char_click: r_2,
      char_detail_enter: l_3,
      char_list_enter: o_4,
      close_click: s_5,
      common_click: C_6,
      enter_click: d_7,
      home_enter: c_8,
      menu_click: u_9,
      model: p_10,
      news_cate_click: webpackRequire.p + "static/media/sound/news_cate_click.cb3c01.mp3",
      reserve_click: webpackRequire.p + "static/media/sound/reserve_click.782b06.mp3",
    },
    g_12 = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
  class v_13 {
    static getInst() {
      return (this.__inst || (this.__inst = new v_13(10)), this.__inst);
    }
    play(e_15) {
      if (!SoundControlStore.E.getState().enabled) return this;
      let t_16 = this.pool.pop();
      if (!t_16) return this;
      if (
        ((t_16.volume = 1),
        (t_16.onended = () => {
          (t_16.setAttribute("src", g_12), t_16.load(), this.pool.push(t_16));
        }),
        t_16.setAttribute("src", e_15),
        t_16.load(),
        t_16.play().catch((e_17) => {
          (console.warn(e_17), this.pool.push(t_16));
        }),
        !this.allBulletReady)
      ) {
        for (let e_18 of this.pool) e_18.play().catch((e_19) => console.warn(e_19));
        this.allBulletReady = !0;
      }
      return this;
    }
    constructor(e_20) {
      if (((this.allBulletReady = !1), (this.pool = []), !SiteUtils.isServer))
        for (let t_21 = 0; t_21 < e_20; t_21++) {
          let e_22 = document.createElement("audio");
          (e_22.setAttribute("src", g_12), e_22.load(), this.pool.push(document.createElement("audio")));
        }
    }
  }
  let M_14 = v_13.getInst();
};
