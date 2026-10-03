/**
 * Semantic reconstruction of official chunks 8963 module 14577 and 8498.
 * This documents the shipped calculations using descriptive identifiers.
 * The transparent renderer below is a compact behavioral equivalent; the
 * original library also supports image masks, reverse masks and four layouts.
 */

let previousViewportWidth = 0;
let previousViewportHeight = 0;

export function updateRootFontSize(baseSizePx = 16) {
  const viewportWidth = window.innerWidth;
  const viewportHeight = window.innerHeight;
  if (viewportWidth === previousViewportWidth && viewportHeight === previousViewportHeight) return;
  previousViewportWidth = viewportWidth;
  previousViewportHeight = viewportHeight;

  const isPortrait = viewportHeight >= viewportWidth;
  const portraitDesignRatio = 1080 / 1920;
  const landscapeDesignRatio = 2560 / 1440;
  const scale = isPortrait
    ? (viewportWidth / viewportHeight > portraitDesignRatio
      ? viewportHeight / 1920 : viewportWidth / 1080)
    : (viewportWidth / viewportHeight > landscapeDesignRatio
      ? viewportHeight / 1440 : viewportWidth / 2560);
  document.documentElement.style.fontSize = `${baseSizePx * scale}px`;

  // The shipped code applies this viewport correction to several Android
  // browser/user-agent families, including HarmonyOS and Huawei.
  if (/HarmonyOS|OpenHarmony|bdhonorbrowser|HeyTap|Huawei/.test(navigator.userAgent)) {
    const viewportMeta = document.querySelector('meta[name="viewport"]');
    const inversePixelRatio = (1 / window.devicePixelRatio).toFixed(3);
    viewportMeta?.setAttribute("content",
      `width=${window.outerWidth * window.devicePixelRatio}px, ` +
      `initial-scale=${inversePixelRatio}, maximum-scale=${inversePixelRatio}, ` +
      "user-scalable=0, viewport-fit=cover");
  }
}

export const transparentVideoFragmentShader = `
precision mediump float;
uniform sampler2D videoTexture;
varying vec2 textureCoordinate;

float grayscaleMask(vec3 rgb) {
  return rgb.r * 0.3 + rgb.g * 0.59 + rgb.b * 0.11;
}

void main() {
  // Left half stores RGB; right half stores a grayscale alpha mask.
  vec3 color = texture2D(videoTexture,
    vec2(textureCoordinate.x * 0.5, textureCoordinate.y)).rgb;
  vec3 mask = texture2D(videoTexture,
    vec2(0.5 + textureCoordinate.x * 0.5, textureCoordinate.y)).rgb;
  gl_FragColor = vec4(color, grayscaleMask(mask));
}`;

export function drawTransparentVideoFrameInCanvas2D(video, canvas) {
  const context = canvas.getContext("2d", { willReadFrequently: true });
  if (!context || !video.videoWidth) return;
  const { width, height } = canvas;
  const halfVideoWidth = video.videoWidth / 2;
  context.drawImage(video, 0, 0, halfVideoWidth, video.videoHeight,
    0, 0, width, height);
  const colorPixels = context.getImageData(0, 0, width, height);
  context.drawImage(video, halfVideoWidth, 0, halfVideoWidth, video.videoHeight,
    0, 0, width, height);
  const maskPixels = context.getImageData(0, 0, width, height);
  for (let pixel = 0; pixel < colorPixels.data.length; pixel += 4) {
    colorPixels.data[pixel + 3] =
      0.3 * maskPixels.data[pixel] +
      0.59 * maskPixels.data[pixel + 1] +
      0.11 * maskPixels.data[pixel + 2];
  }
  context.putImageData(colorPixels, 0, 0);
}

export async function playOperatorEntranceThenIdle(video, clips, setLoading) {
  // The homepage waits for both media readiness and its loading transition.
  setLoading(true);
  video.pause();
  video.src = clips.enter;
  video.load();
  await new Promise((resolve) => video.addEventListener("canplaythrough", resolve, { once: true }));
  setLoading(false);
  video.loop = false;
  await video.play();
  video.addEventListener("ended", async function switchToIdle() {
    video.src = clips.idle;
    video.loop = true;
    await video.play();
  }, { once: true });
}
