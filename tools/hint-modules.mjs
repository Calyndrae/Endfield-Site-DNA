// Print per-module hints so modules can be named; also auto-detect vendor libraries by signature.
import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const graph = JSON.parse(readFileSync(join(root, 'source/module-graph.json'), 'utf8'));
const sig = [
  [/Minified React error|react\.element|__reactFiber|react-dom/i, 'react / react-dom runtime'],
  [/scheduler|unstable_scheduleCallback/i, 'scheduler (React)'],
  [/THREE|WebGLRenderer|BufferGeometry|ShaderMaterial/, 'three.js'],
  [/anime\.js|easeOutQuad|cubicBezier|anime\.timeline/i, 'anime.js (easing/timeline)'],
  [/framer|AnimatePresence|useMotionValue|whileHover|usePresence/i, 'framer-motion'],
  [/swiper|Swiper/, 'swiper'],
  [/axios|XMLHttpRequest adapter|isAxiosError/i, 'axios'],
  [/dayjs|customParseFormat|\$d\.getFullYear/i, 'dayjs'],
  [/zustand|setState|getState/i, 'zustand store'],
  [/lodash|debounce|throttle/i, 'lodash-style utility'],
  [/sentry|__SENTRY__|captureException/i, 'sentry'],
  [/next\/router|__next_f|next\/navigation|useRouter/i, 'next.js runtime'],
  [/classnames|classNames/i, 'classnames'],
];
const rows = [];
for (const [id, m] of Object.entries(graph)) {
  const src = readFileSync(join(root, 'source/modules', m.chunk, id + '.js'), 'utf8');
  const libs = sig.filter(([re]) => re.test(src)).map(([, n]) => n);
  const css = m.cssClasses.slice(0, 4).join(' ');
  const strs = m.strings.filter(s => !s.startsWith('data:')).slice(0, 6).join(' | ').slice(0, 160);
  rows.push({ id: Number(id), chunk: m.chunk, bytes: m.bytes, exports: m.exports.join(','), css, libs: libs.join(';'), strs, deps: m.deps.length });
}
rows.sort((a, b) => a.chunk.localeCompare(b.chunk) || b.bytes - a.bytes);
let out = '';
for (const r of rows) out += `${r.chunk}\t${r.id}\t${r.bytes}\t${r.exports}\t${r.css}\t${r.libs}\t${r.deps}\t${r.strs}\n`;
writeFileSync(join(root, 'source/module-hints.tsv'), out);
console.log('rows', rows.length);
