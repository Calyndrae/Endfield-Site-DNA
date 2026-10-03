// Rule-based module naming + manual overrides → source/module-map.json
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const graph = JSON.parse(readFileSync(join(root, 'source/module-graph.json'), 'utf8'));
const overrides = existsSync(join(root, 'source/module-names.json')) ? JSON.parse(readFileSync(join(root, 'source/module-names.json'), 'utf8')) : {};
const vendorSig = [
  [/Minified React error #\d+.*react-dom|__reactFiber|__reactProps|createRoot|hydrateRoot/s, 'react-dom', 'vendor'],
  [/react\.element|react\.fragment|react\.strict_mode|"react-stack-top-frame"/, 'react', 'vendor'],
  [/unstable_now|unstable_scheduleCallback|unstable_runWithPriority/, 'scheduler', 'vendor'],
  [/WebGLRenderer|BufferGeometry|ShaderMaterial|"THREE"|Object3D|PerspectiveCamera/, 'three.js', 'vendor'],
  [/easeOutElastic|easeInOutBack|"anime"|animatables|penner/i, 'anime.js', 'vendor'],
  [/AnimatePresence|usePresence|framer|motionValue|whileHover|MotionConfig/i, 'framer-motion', 'vendor'],
  [/swiper-wrapper|swiper-slide|Swiper|slidesPerView/, 'swiper', 'vendor'],
  [/isAxiosError|AxiosError|"axios"|xsrfCookieName/, 'axios', 'vendor'],
  [/customParseFormat|isDayjsObject|\$isDayjsObject|dayjs/i, 'dayjs', 'vendor'],
  [/__lodash_hash_undefined__|lodash/i, 'lodash', 'vendor'],
  [/@sentry|__SENTRY__|captureException|getCurrentHub|sentry\./i, 'sentry', 'vendor'],
  [/next\/dist|__next_|NEXT_ROUTER|RSC|next-router-state-tree|segmentPath|flightRouterState/i, 'next.js runtime', 'vendor'],
  [/"zustand"|zustand|createStore|persist|setState.*getState/i, 'zustand', 'vendor'],
  [/classNames|classnames/i, 'classnames', 'vendor'],
  [/core-js|__core-js_shared__|es\.array|modules\/es\./i, 'core-js polyfills', 'vendor'],
  [/webpackChunk|__webpack_require__|\.webpackJsonp/, 'webpack runtime', 'vendor'],
  [/@hg-web\/trans-video|TransparentVideo|trans-video/i, '@hg-web/trans-video (Hypergryph transparent video)', 'site-vendor'],
  [/gl_web_sdk|gl_account|GryphlineSDK|hgSdk|HG_MEDIA/i, 'Gryphline web SDK', 'site-vendor'],
  [/gtag|googletagmanager|GA_MEASUREMENT|dataLayer/i, 'Google Analytics', 'vendor'],
  [/tslib|__extends|__assign|__awaiter|__generator/, 'tslib helpers', 'vendor'],
  [/regeneratorRuntime|_regeneratorRuntime/, 'regenerator runtime', 'vendor'],
];
const chunkDefaults = {"491-": ["next.js app router runtime", "vendor"], "8544-": ["next.js runtime (error pages, head)", "vendor"], "1434-": ["react core / classnames", "vendor"], "1862-": ["buffer polyfill bundle", "vendor"], "2060-": ["@emotion + stylis + classnames", "vendor"], "3269-": ["axios", "vendor"], "3877-": ["anime.js 3.2.1", "vendor"], "3407-": ["anime.js helpers / small vendor utils", "vendor"], "4231-": ["swiper (+ small vendor utils)", "vendor"], "5578-": ["framer-motion (motion-dom)", "vendor"], "7349-": ["Gryphline web SDK bundle v1.8.0", "site-vendor"], "18b16e15-": ["lottie-web 5.12.2", "vendor"], "44ba29dc-": ["vendor bundle (crypto-js AES, html2canvas, idb)", "vendor"], "86478c97-": ["react-dom (client)", "vendor"], "89e1c093-": ["three.js (part 2: addons/shaders)", "vendor"], "a8f12803-": ["three.js (core)", "vendor"], "polyfills-": ["next.js polyfills (core-js)", "vendor"], "webpack-": ["webpack runtime", "vendor"], "main-app-": ["next.js main-app entry", "vendor"], "global-error-": ["next.js global error", "vendor"]};
const map = {};
for (const [id, m] of Object.entries(graph)) {
  const src = readFileSync(join(root, 'source/modules', m.chunk, id + '.js'), 'utf8');
  let name = null, kind = null, note = '';
  const img = src.match(/src:\s*"(https:[^"]+\/static\/media\/([^"]+))"/);
  const asset = src.match(/e\.exports\s*=\s*[a-z]\.p\s*\+\s*"(static\/media\/[^"]+)"/);
  if (m.exports.length === 0 && m.cssClasses.length > 0 && /e\.exports\s*=\s*\{/.test(src)) { kind = 'css-module'; name = 'styles:' + m.cssClasses[0].split('_')[0].replace(/^__\d\d-/, s => s) ; note = m.cssClasses[0]; }
  else if (img && m.bytes < 1500) { kind = 'image-asset'; name = 'image:' + img[2]; note = img[1]; }
  else if (asset) { kind = 'asset-url'; name = 'asset:' + asset[1].split('/').pop(); note = asset[1]; }
  else if (/http:\/\/www\.w3\.org\/2000\/svg/.test(src) && m.bytes < 30000 && !/useState|useEffect/.test(src)) { kind = 'svg-icon'; name = 'SvgIcon'; const vb = src.match(/viewBox:\s*"([^"]+)"/); note = vb ? 'viewBox ' + vb[1] : ''; }
  for (const [re, lib, k] of vendorSig) { if (!name && re.test(src) && (m.bytes > 3000 || k === 'site-vendor')) { kind = k; name = lib; break; } }
  if (!name && m.exports.length) { const ex = m.exports.filter(e => e.length > 2); if (ex.length) { name = ex[0]; kind = 'site'; } }
  if (!name && m.cssClasses.length) { name = m.cssClasses[0].replace(/__[A-Za-z0-9_]{5}$/, '').replace(/^__\d\d-/, '') + ' (component)'; kind = 'site'; }
  if (!name) { for (const [pre, [n, k]] of Object.entries(chunkDefaults)) if (m.chunk.startsWith(pre)) { name = n; kind = k; break; } }
  if (overrides[id]) { name = overrides[id].name; kind = overrides[id].kind || kind || 'site'; note = overrides[id].note || note; }
  map[id] = { id: Number(id), chunk: m.chunk, bytes: m.bytes, kind: kind || 'unresolved', name: name || 'unresolved', note, exports: m.exports, deps: m.deps };
}
writeFileSync(join(root, 'source/module-map.json'), JSON.stringify(map, null, 1));
const kinds = {}; for (const v of Object.values(map)) kinds[v.kind] = (kinds[v.kind] || 0) + 1;
console.log(kinds);
const unresolved = Object.values(map).filter(v => v.kind === 'unresolved' && v.bytes > 400).sort((a, b) => b.bytes - a.bytes);
console.log('unresolved >400B:', unresolved.length);
for (const u of unresolved) { const m = graph[u.id]; console.log(`${u.chunk.replace(/-[0-9a-f]{16}/, '')}\t${u.id}\t${u.bytes}\texp=${m.exports.join(',')}\t${m.strings.filter(s => !s.startsWith('data:')).slice(0, 5).join(' | ').slice(0, 120)}`); }
