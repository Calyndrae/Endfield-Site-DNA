/**
 * SOUND_EFFECT_SOURCES — readable reconstruction of webpack module 26097 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * SoundEffects defines the SFX key map (export d) of twelve mp3 files under static/media/sound/: arrow_click, char_click, char_detail_enter, char_list_enter, close_click, common_click, enter_click, home_enter, menu_click, model, news_cate_click and reserve_click. Export A is a SoundEffectPlayer singleton with a pool of 10 <audio> elements primed with a silent WAV data URI; play(src) returns early when SoundControlStore is disabled, pops an element, sets volume 1, loads the src and returns it to the pool on ended or on a play() rejection, and on the first call also plays every pooled element once to unlock audio on touch devices. Note the constructor primes a throwaway element but pushes a fresh document.createElement('audio') into the pool.
 *
 * Exports (minified key → meaning):
 *   d → SOUND_EFFECT_SOURCES
 *   A → soundEffectsPlayer
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 26097 from 8963-234f979bdd6b491c.js
// deps: 97521, 2285
const module_26097 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    d: () => SOUND_EFFECT_SOURCES,
    A: () => soundEffectsPlayer,
  });
  var SiteUtils = webpackRequire(97521),
    SoundControlStore = webpackRequire(2285);
  let ARROW_CLICK_SOUND = webpackRequire.p + "static/media/sound/arrow_click.a72c10.mp3",
    CHAR_CLICK_SOUND = webpackRequire.p + "static/media/sound/char_click.beff5b.mp3",
    CHAR_DETAIL_ENTER_SOUND = webpackRequire.p + "static/media/sound/char_detail_enter.babc4e.mp3",
    CHAR_LIST_ENTER_SOUND = webpackRequire.p + "static/media/sound/char_list_enter.d29f74.mp3",
    CLOSE_CLICK_SOUND = webpackRequire.p + "static/media/sound/close_click.fe1dc4.mp3",
    COMMON_CLICK_SOUND = webpackRequire.p + "static/media/sound/common_click.52e9d4.mp3",
    ENTER_CLICK_SOUND = webpackRequire.p + "static/media/sound/enter_click.4f6fd3.mp3",
    HOME_ENTER_SOUND = webpackRequire.p + "static/media/sound/home_enter.6aefd5.mp3",
    MENU_CLICK_SOUND = webpackRequire.p + "static/media/sound/menu_click.d51e70.mp3",
    MODEL_SOUND = webpackRequire.p + "static/media/sound/model.569c5b.mp3",
    SOUND_EFFECT_SOURCES = {
      arrow_click: ARROW_CLICK_SOUND,
      char_click: CHAR_CLICK_SOUND,
      char_detail_enter: CHAR_DETAIL_ENTER_SOUND,
      char_list_enter: CHAR_LIST_ENTER_SOUND,
      close_click: CLOSE_CLICK_SOUND,
      common_click: COMMON_CLICK_SOUND,
      enter_click: ENTER_CLICK_SOUND,
      home_enter: HOME_ENTER_SOUND,
      menu_click: MENU_CLICK_SOUND,
      model: MODEL_SOUND,
      news_cate_click: webpackRequire.p + "static/media/sound/news_cate_click.cb3c01.mp3",
      reserve_click: webpackRequire.p + "static/media/sound/reserve_click.782b06.mp3",
    },
    SILENT_WAV_DATA_URI =
      "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
  class SoundEffectPlayer {
    static getInst() {
      return (this.__inst || (this.__inst = new SoundEffectPlayer(10)), this.__inst);
    }
    play(soundSrc) {
      if (!SoundControlStore.E.getState().enabled) return this;
      let audioElement = this.pool.pop();
      if (!audioElement) return this;
      if (
        ((audioElement.volume = 1),
        (audioElement.onended = () => {
          (audioElement.setAttribute("src", SILENT_WAV_DATA_URI),
            audioElement.load(),
            this.pool.push(audioElement));
        }),
        audioElement.setAttribute("src", soundSrc),
        audioElement.load(),
        audioElement.play().catch((playError) => {
          (console.warn(playError), this.pool.push(audioElement));
        }),
        !this.allBulletReady)
      ) {
        for (let pooledAudio of this.pool)
          pooledAudio.play().catch((warmupError) => console.warn(warmupError));
        this.allBulletReady = !0;
      }
      return this;
    }
    constructor(poolSize) {
      if (((this.allBulletReady = !1), (this.pool = []), !SiteUtils.isServer))
        for (let poolIndex = 0; poolIndex < poolSize; poolIndex++) {
          let primedAudio = document.createElement("audio");
          (primedAudio.setAttribute("src", SILENT_WAV_DATA_URI),
            primedAudio.load(),
            this.pool.push(document.createElement("audio")));
        }
    }
  }
  let soundEffectsPlayer = SoundEffectPlayer.getInst();
};
