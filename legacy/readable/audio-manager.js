/** Semantic reconstruction of site-owned BGM module 7725 and player module
 * 58572. Replace the source URL with licensed audio for a child site.
 */
export class FadingBackgroundMusic {
  constructor({ source, volume = 0.5, fadeDurationMs = 1000 } = {}) {
    this.audio = new Audio(source);
    this.audio.crossOrigin = "anonymous";
    this.audio.loop = true;
    this.targetVolume = volume;
    this.fadeDurationMs = fadeDurationMs;
    this.audio.volume = volume;
    this.enabled = true;
    this.wasPlayingBeforeHidden = false;
    this.fadeTimer = null;
    this.audio.load();
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) {
        this.wasPlayingBeforeHidden = !this.audio.paused;
        this.pauseImmediately();
      } else if (this.wasPlayingBeforeHidden && this.enabled) {
        this.play();
      }
    });
    window.addEventListener("HG_MEDIA_BGM_EVENT", (event) => {
      if (event.detail?.type === "PAUSE") this.pause();
      if (event.detail?.type === "RESUME") this.play();
    });
    window.addEventListener("click", () => {
      if (this.enabled && this.audio.paused) this.play();
    }, { once: true });
  }

  fadeTo(nextVolume, easing, onStart, onEnd) {
    if (this.fadeTimer) clearInterval(this.fadeTimer);
    const initialVolume = this.audio.volume;
    const volumeDistance = Math.abs(nextVolume - initialVolume);
    // The shipped helper scales duration by the volume change: 0→0.5 uses
    // about 500ms although fadeDurationMs defaults to 1000ms.
    const effectiveDurationMs = this.fadeDurationMs * volumeDistance;
    const startedAt = Date.now();
    onStart?.();
    return new Promise((resolve) => {
      this.fadeTimer = setInterval(() => {
        const elapsedMs = Date.now() - startedAt;
        const progress = effectiveDurationMs ? Math.min(elapsedMs / effectiveDurationMs, 1) : 1;
        this.audio.volume = initialVolume + (nextVolume - initialVolume) * easing(progress);
        if (progress === 1) {
          clearInterval(this.fadeTimer);
          this.fadeTimer = null;
          this.audio.volume = nextVolume;
          onEnd?.();
          resolve();
        }
      }, 10);
    });
  }

  async play() {
    if (!this.enabled || !this.audio.paused) return;
    this.audio.volume = 0;
    await this.fadeTo(this.targetVolume, (progress) => progress ** 2,
      () => this.audio.play().catch(() => {}));
  }

  async pause() {
    if (this.audio.paused) return;
    await this.fadeTo(0, (progress) => 1 - (1 - progress) ** 2,
      undefined, () => this.audio.pause());
  }

  pauseImmediately() {
    if (this.fadeTimer) clearInterval(this.fadeTimer);
    this.fadeTimer = null;
    this.audio.pause();
  }

  setEnabled(enabled) {
    this.enabled = enabled;
    if (enabled) this.play();
    else this.pause();
  }
}

export const officialBgmReference =
  "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/media/sound/bgm.3ce37f.mp3";
