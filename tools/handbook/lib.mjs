// Shared helpers and data for the handbook builder. Output HTML uses ONLY the element vocabulary the
// site's own article renderer styles (p/span/strong/br/a/img/table/th/td and p[data-indent]) plus
// verbatim component markup captured from the live site. No authored CSS, classes or scripts.
import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { join } from 'node:path';
export const root = new URL('../..', import.meta.url).pathname;
export const ORIGIN = 'https://endfield.gryphline.com';
export const CDN = 'https://web-static.hg-cdn.com/endfield/official-v4/_next/static/';
const J = p => JSON.parse(readFileSync(join(root, p), 'utf8'));
export const data = {
  cssRules: J('analysis/css-rules.json'), colors: J('analysis/colors.json'), typography: J('analysis/typography.json'),
  spacing: J('analysis/spacing.json'), layers: J('analysis/layers.json'), motion: J('analysis/motion.json'),
  breakpoints: J('analysis/breakpoints.json'), componentsIndex: J('analysis/components.json'), hover: J('analysis/hover-states.json'),
  timelines: J('analysis/motion-timelines.json'), moduleMap: J('source/module-map.json'), readable: J('source/readable/index.json'),
  manifest: J('capture/network-manifest.json'), fonts: J('capture/fonts-and-css-assets.json'), cssComponents: J('capture/css-components.json'),
  states: existsSync(join(root, 'capture/states/states.json')) ? J('capture/states/states.json') : {},
  summary: J('analysis/summary.json'),
  renameMaps: Object.fromEntries(readdirSync(join(root, 'source/rename-maps')).filter(f => f.endsWith('.json')).map(f => [f.replace('.json', ''), J('source/rename-maps/' + f)])),
};
data.pages = Object.fromEntries(readdirSync(join(root, 'capture/pages')).filter(p => existsSync(join(root, 'capture/pages', p, 'page.json'))).map(p => [p, J(`capture/pages/${p}/page.json`)]));
export const comp = name => J('analysis/components/' + name.replace(/[^A-Za-z0-9_-]/g, '') + '.json');
// --- output mode: 'site' = article vocabulary for the live handbook page; 'doc' = semantic HTML for the printed document
export let mode = 'site'; export const setMode = m => { mode = m; };
export const SITE_URL = 'https://sitedna.endfield.calyndrae.com';
const docHref = href => { if (!href.startsWith('/')) return href; const m = href.match(/^\/source\/readable\/([^/#?]+)$/); if (m) return '#js-' + m[1].replace(/[^A-Za-z0-9]/g, '-'); const c = href.match(/^\/capture\/css\/([^/#?]+)$/); if (c) return '#css-' + c[1].replace(/[^A-Za-z0-9]/g, '-'); return SITE_URL + href; };
export const esc = s => String(s ?? '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
// --- site-vocabulary builders
export const p = (text, { strong = false, id = null, indent = 0 } = {}) => mode === 'doc' ? `<p${id ? ` id="${esc(id)}"` : ''}${indent ? ` class="ind${indent}"` : ''}>${strong ? '<strong>' : ''}${text}${strong ? '</strong>' : ''}</p>` : `<p${id ? ` id="${esc(id)}"` : ''}${indent ? ` data-indent="${indent}"` : ''}><span>${strong ? '<strong>' : ''}${text}${strong ? '</strong>' : ''}</span></p>`;
export const t = s => p(esc(s));
export const h = (text, id) => mode === 'doc' ? `<h2${id ? ` id="${esc(id)}"` : ''}>${esc(text)}</h2>` : p(esc(text), { strong: true, id });
export const sub = text => mode === 'doc' ? `<h3>${esc(text)}</h3>` : p('<strong>' + esc(text) + '</strong>');
export const br = () => mode === 'doc' ? '' : '<p><br></p>';
export const a = (label, href) => `<a href="${esc(mode === 'doc' ? docHref(String(href)) : href)}">${esc(label)}</a>`;
export const link = (label, href, note = '') => p(a(label, href) + (note ? ' ' + esc(note) : ''));
export const img = (src, caption) => mode === 'doc' ? `<figure class="shot"><img src="${esc(src)}">${caption ? `<figcaption>Capture — ${esc(caption)}</figcaption>` : ''}</figure>` : `<img src="${esc(src)}">` + (caption ? p('<strong>Capture:</strong> ' + esc(caption)) : '');
const tagged = (cls, label, text) => mode === 'doc' ? `<p class="tag ${cls}"><span class="lbl">${label}</span> ${esc(text)}</p>` : p('<strong>' + label + ' — </strong>' + esc(text));
export const observed = text => tagged('observed', 'OBSERVED', text);
export const measured = text => tagged('measured', 'MEASURED', text);
export const inferred = text => tagged('inferred', 'INFERRED', text);
export const rule = text => tagged('rule', 'RULE FOR A CHILD SITE', text);
export const table = (headers, rows) => mode === 'doc' ? `<table class="data"><thead><tr>${headers.map(x => `<th>${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table>` : `<table><tbody><tr>${headers.map(x => `<th><p>${esc(x)}</p></th>`).join('')}</tr>${rows.map(r => `<tr>${r.map(c => `<td><p>${c}</p></td>`).join('')}</tr>`).join('')}</tbody></table>`;
export const code = (text, { max = 60 } = {}) => { const lines = String(text).replace(/\t/g, '  ').split('\n'); if (mode === 'doc') { const shown = lines.slice(0, max).map(l => esc(l.replace(/\s+$/, ''))).join('\n'); return `<pre class="code"><code>${shown}</code></pre>` + (lines.length > max ? p(`<em>… ${lines.length - max} more lines; the complete file is in the code appendix.</em>`) : ''); } const out = lines.slice(0, max).map(l => { const m = l.match(/^( *)/); const ind = Math.min(6, Math.floor(m[1].length / 2)); const body = l.trim() === '' ? '&nbsp;' : esc(l.trimStart()); return `<p${ind ? ` data-indent="${ind}"` : ''}><span>${body}</span></p>`; }); if (lines.length > max) out.push(p(`<strong>… ${lines.length - max} more lines in the linked file</strong>`)); return out.join(''); };
export const cssBlock = (rules, { max = 40 } = {}) => code(rules.slice(0, max).map(r => `${r.selector}${r.media && r.media.length ? '  /* ' + r.media.join(' & ').replace(/@media /g, '') + ' */' : ''} {\n` + Object.entries(r.declarations).map(([k, v]) => `  ${k}: ${v};`).join('\n') + '\n}').join('\n'), { max: 400 }) + (rules.length > max ? p(`<strong>… ${rules.length - max} more rules for this component in analysis/css-rules.json</strong>`) : '');
// A specimen frame uses the site's own article table styling (th deco + td cell) to hold verbatim live markup.
// Inline animation state (anime.js / framer-motion write opacity/transform/visibility inline during entrances)
// is removed from specimens so they are shown in their settled state; all other attributes are verbatim.
export const settle = html => String(html).replace(/ style="([^"]*)"/g, (m, v) => { const kept = v.split(';').map(x => x.trim()).filter(Boolean).filter(d => !/^(opacity|transform|visibility|transition)\s*:/i.test(d)); return kept.length ? ` style="${kept.join('; ')}"` : ''; });
export const prettyMarkup = html => String(html).replace(/>\s*</g, '>\n<').split('\n').reduce((acc, line) => { const closes = /^<\//.test(line); if (closes) acc.depth = Math.max(0, acc.depth - 1); acc.out.push('  '.repeat(acc.depth) + line); const selfClosing = /^<(img|br|input|source|meta|link|hr|wbr|path|circle|rect|line|polygon|use)\b/.test(line) || /\/>$/.test(line); if (!closes && /^<[a-zA-Z]/.test(line) && !selfClosing && !/<\/[a-zA-Z0-9]+>$/.test(line)) acc.depth++; return acc; }, { depth: 0, out: [] }).out.join('\n');
export const specimen = (label, markup, note) => mode === 'doc' ? `<figure class="specimen"><figcaption>Specimen — ${esc(label)}</figcaption><div class="frame">${settle(markup)}</div>${note ? `<p class="note">${esc(note)}</p>` : ''}<details open><summary>Markup of this specimen (verbatim from the live page; animation inline styles removed)</summary>${code(prettyMarkup(settle(markup)), { max: 120 })}</details></figure>` : `<table><tbody><tr><th><p>${esc(label)}</p></th></tr><tr><td>${settle(markup)}</td></tr>${note ? `<tr><td><p>${esc(note)}</p></td></tr>` : ''}</tbody></table>`;
export const readableFile = id => data.readable.find(r => String(r.id) === String(id));
export const readableLink = (id, label) => { const r = readableFile(id); return r ? a(label || r.file, '/source/readable/' + r.file) : esc(label || `module ${id}`); };
export const chunkUrl = chunk => CDN + 'chunks/' + (chunk.includes('__') ? 'app/' + chunk.replace(/__/g, '/') : chunk) + '.js';
export const rem = (remValue, px = 9) => `${remValue}rem = ${+(parseFloat(remValue) * px).toFixed(2)}px at 1440×900`;
export function extractAll(html, cls, limit = 3, cap = 20000) {
  const out = []; const re = new RegExp(`<([a-zA-Z0-9]+)([^>]*class="[^"]*\\b${cls.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&')}\\b[^"]*"[^>]*)>`, 'g'); let m;
  const voids = new Set(['img', 'br', 'input', 'source', 'meta', 'link', 'hr', 'wbr']);
  while ((m = re.exec(html)) && out.length < limit) {
    const start = m.index; if (out.some(o => start < o.end && start >= o.start)) continue;
    if (voids.has(m[1])) { out.push({ start, end: start + m[0].length, html: m[0] }); continue; }
    let depth = 0; const tagRe = /<\/?([a-zA-Z0-9]+)[^>]*?(\/?)>/g; tagRe.lastIndex = start; let tg, end = null;
    while ((tg = tagRe.exec(html))) { const close = tg[0].startsWith('</'); const self = tg[2] === '/' || voids.has(tg[1]); if (!close && !self) depth++; else if (close) depth--; if (depth === 0) { end = tg.index + tg[0].length; break; } if (tg.index - start > cap * 4) break; }
    if (end) out.push({ start, end, html: html.slice(start, end) });
  }
  return out.map(o => settle(o.html));
}
export const pageDom = name => readFileSync(join(root, 'capture/pages', name, 'dom.html'), 'utf8');
export const stateMarkup = key => (data.states[key] && data.states[key].markup) || null;
export const shotIf = (rel, caption) => existsSync(join(root, rel)) ? img('/' + rel, caption) : '';
export const rulesFor = (component, filter) => data.cssRules.rules.filter(r => r.component === component && (!filter || filter(r)));
export const hoverFor = cls => data.hover.filter(hh => hh.cls === cls || hh.cls.startsWith(cls));
export const compIndex = () => data.cssComponents;
// --- parsed site data from raw modules
const PUBLIC = 'https://web-static.hg-cdn.com/endfield/official-v4/_next/';
export function operatorClips() {
  const m = data.moduleMap['68408']; const src = readFileSync(join(root, 'source/modules', m.chunk, '68408.js'), 'utf8');
  const decl = Object.fromEntries([...src.matchAll(/([A-Za-z_$][\w$]*)=\w\.p\+"(static\/media\/video\/[^"]+)"/g)].map(x => [x[1], PUBLIC + x[2]]));
  const body = src.slice(src.indexOf('={') + 2);
  const out = {}; for (const x of body.matchAll(/([A-Za-z][\w]*):\{enter:([^,]+),idle:([^}]+)\}/g)) { const u = e => decl[e.trim()] || (e.match(/"([^"]+)"/) ? PUBLIC + e.match(/"([^"]+)"/)[1] : e); out[x[1]] = { enter: u(x[2]), idle: u(x[3]) }; }
  return out;
}
export function soundSources() {
  const m = data.moduleMap['26097']; const src = readFileSync(join(root, 'source/modules', m.chunk, '26097.js'), 'utf8');
  return [...src.matchAll(/(\w+):\s*\w\.p\+"(static\/media\/sound\/[^"]+)"/g)].map(x => ({ key: x[1], url: PUBLIC + x[2] }));
}
export function imageAssetModules() { return Object.values(data.moduleMap).filter(m => m.kind === 'image-asset').map(m => ({ id: m.id, file: m.name.replace('image:', ''), url: m.note })); }
export function svgIconCount() { return Object.values(data.moduleMap).filter(m => m.kind === 'svg-icon').length; }
export function mediaLogs() { return Object.keys(data.pages).map(pg => { try { return [pg, JSON.parse(readFileSync(join(root, 'capture/pages', pg, 'media-log.json'), 'utf8'))]; } catch { return null; } }).filter(Boolean); }
// Real code excerpt from a readable module: from the first line matching `start` for `lines` lines.
export function excerpt(id, start, lines = 30, { skip = 0 } = {}) {
  const r = readableFile(id); if (!r) return p('<strong>excerpt unavailable for module ' + esc(String(id)) + '</strong>');
  const src = readFileSync(join(root, 'source/readable', r.file), 'utf8').split('\n');
  const re = start instanceof RegExp ? start : new RegExp(start.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  let i = src.findIndex(l => re.test(l)); if (i < 0) return p('<strong>excerpt anchor not found in ' + esc(r.file) + ': ' + esc(String(start)) + '</strong>');
  i += skip; const slice = src.slice(i, i + lines);
  // drop a common leading indent so excerpts start at indent 0
  const indent = Math.min(...slice.filter(l => l.trim()).map(l => l.match(/^ */)[0].length));
  return p(`<strong>Code — ${esc(r.file)} lines ${i + 1}–${i + slice.length} (readable reconstruction of the shipped module; values and control flow unchanged):</strong>`) + code(slice.map(l => l.slice(indent)).join('\n'), { max: lines + 2 });
}
export const interactions = existsSync(join(root, 'capture/interactions.json')) ? J('capture/interactions.json') : null;
