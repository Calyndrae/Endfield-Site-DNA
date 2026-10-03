// Depth-1 instrumented capture of the live site in headless Chromium.
// Records: network manifest, DOM snapshots (after the loader leaves), screenshots,
// computed styles, hover-state diffs, style-mutation timelines (entrance motion),
// audio/media activity, fonts, and link discovery at depth 1 from /en-us.
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, existsSync, readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { join } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const OUT = join(root, 'capture'); mkdirSync(join(OUT, 'pages'), { recursive: true });
const ORIGIN = 'https://endfield.gryphline.com';
const START = ORIGIN + '/en-us';
const BIG = 400 * 1024; // store bodies only below this; larger media is listed by url/size/hash
const manifest = new Map(); // url -> {type,status,bytes,sha256,stored,pages:Set}
const hoverRules = JSON.parse(readFileSync(join(root, 'analysis/motion.json'), 'utf8')).hoverRules;
const hoverClasses = [...new Set(hoverRules.flatMap(r => (r.selector.match(/\.[A-Za-z0-9_-]+__[A-Za-z0-9_]{5}(?=:hover|[\s>.:,]|$)/g) || []).map(s => s.slice(1))))];
const INIT = `
(() => {
  window.__cap = { media: [], mutations: [], audio: [] };
  const t0 = performance.now();
  const A = window.Audio; window.Audio = function(src){ const a = new A(src); window.__cap.audio.push({ t: performance.now()-t0, kind:'new Audio', src: src||'' }); return a; }; window.Audio.prototype = A.prototype;
  const play = HTMLMediaElement.prototype.play; HTMLMediaElement.prototype.play = function(){ window.__cap.media.push({ t: performance.now()-t0, kind:this.tagName, src:(this.currentSrc||this.src||'').slice(0,160), loop:this.loop, muted:this.muted, volume:this.volume }); return play.apply(this, arguments); };
  const AC = window.AudioContext || window.webkitAudioContext; if (AC) { window.AudioContext = function(...a){ window.__cap.audio.push({ t: performance.now()-t0, kind:'AudioContext' }); return new AC(...a); }; }
  const obs = new MutationObserver(list => { for (const m of list) { if (window.__cap.mutations.length > 20000) return; const el = m.target; if (!(el instanceof Element)) continue; window.__cap.mutations.push({ t: Math.round(performance.now()-t0), attr: m.attributeName, cls: el.className && typeof el.className === 'string' ? el.className.slice(0,120) : '', tag: el.tagName, style: m.attributeName==='style' ? (el.getAttribute('style')||'').slice(0,240) : undefined, old: (m.oldValue||'').slice(0,160) }); } });
  document.addEventListener('DOMContentLoaded', () => obs.observe(document.documentElement, { attributes: true, subtree: true, attributeFilter: ['style','class'], attributeOldValue: true }));
})();`;
const sha = b => createHash('sha256').update(b).digest('hex');
const slug = u => u.replace(ORIGIN, '').replace(/^\//, '').replace(/[\/?#&=]+/g, '_') || 'root';
const browser = await chromium.launch({ args: ['--mute-audio', '--autoplay-policy=no-user-gesture-required'] });
async function capturePage(url, { discover = false } = {}) {
  const name = slug(url); const dir = join(OUT, 'pages', name); mkdirSync(dir, { recursive: true });
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 });
  await ctx.addInitScript(INIT);
  const page = await ctx.newPage();
  const errors = [], console_ = [];
  page.on('pageerror', e => errors.push(String(e).slice(0, 300)));
  page.on('console', m => { if (['error', 'warning'].includes(m.type())) console_.push(m.type() + ': ' + m.text().slice(0, 200)); });
  page.on('response', async r => {
    const u = r.url(); if (u.startsWith('data:')) return;
    try {
      const h = r.headers(); const type = (h['content-type'] || '').split(';')[0];
      let body = null; try { body = await r.body(); } catch { }
      const rec = manifest.get(u) || { url: u, type, status: r.status(), bytes: body ? body.length : Number(h['content-length'] || 0), sha256: body ? sha(body) : null, stored: null, pages: [] };
      rec.pages.push(name);
      if (body && rec.stored === null && /^(text|application\/(javascript|json|x-component))|svg|font|woff/.test(type + u) && body.length < BIG && !u.includes('/_next/static/chunks/') && !u.includes('/_next/static/css/')) {
        const ext = (u.split('?')[0].match(/\.[a-z0-9]+$/i) || [''])[0] || (type.includes('json') ? '.json' : '.txt');
        const f = join(OUT, 'assets', sha(u).slice(0, 12) + ext); if (!existsSync(f)) writeFileSync(f, body); rec.stored = 'capture/assets/' + sha(u).slice(0, 12) + ext;
      } else if (body && rec.stored === null && /image\/(png|jpeg|webp|gif)/.test(type) && body.length < 150 * 1024) {
        const ext = '.' + type.split('/')[1].replace('jpeg', 'jpg'); const f = join(OUT, 'assets', sha(u).slice(0, 12) + ext); if (!existsSync(f)) writeFileSync(f, body); rec.stored = 'capture/assets/' + sha(u).slice(0, 12) + ext;
      }
      manifest.set(u, rec);
    } catch { }
  });
  const t0 = Date.now();
  await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 120000 });
  // wait for loader to leave (max 60s)
  let loaderGone = false;
  for (let i = 0; i < 60; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) { loaderGone = true; break; } }
  const loaderMs = Date.now() - t0;
  await page.waitForTimeout(3000);
  try { await page.getByText('OK', { exact: true }).first().click({ timeout: 1500 }); } catch { }
  await page.waitForTimeout(500);
  const info = await page.evaluate(() => ({
    title: document.title, lang: document.documentElement.lang, htmlClass: document.documentElement.className,
    rootFontSize: getComputedStyle(document.documentElement).fontSize, bodyFont: getComputedStyle(document.body).fontFamily,
    links: [...document.querySelectorAll('a[href]')].map(a => ({ text: (a.textContent || '').trim().slice(0, 60), href: a.href, target: a.target })),
    fonts: [...document.fonts].map(f => ({ family: f.family, status: f.status, weight: f.weight })).filter((f, i, a) => a.findIndex(x => x.family === f.family) === i),
    stylesheets: [...document.querySelectorAll('link[rel=stylesheet]')].map(l => l.href),
    scripts: [...document.querySelectorAll('script[src]')].map(s => s.src),
    sections: [...document.querySelectorAll('[class*="sectionContainer"]')].map(e => ({ cls: e.className, id: e.id, rect: e.getBoundingClientRect().toJSON() })),
    components: [...new Set([...document.querySelectorAll('[class]')].flatMap(e => (typeof e.className === 'string' ? e.className : '').split(/\s+/)).filter(c => /__[A-Za-z0-9_]{5}$/.test(c)))].sort(),
  }));
  writeFileSync(join(dir, 'dom.html'), await page.content());
  await page.screenshot({ path: join(dir, 'desktop-1440x900.png') });
  await page.screenshot({ path: join(dir, 'desktop-full.png'), fullPage: true }).catch(() => { });
  // computed styles for every distinct component class (first instance)
  const computed = await page.evaluate((classes) => {
    const props = ['position', 'display', 'width', 'height', 'top', 'left', 'right', 'bottom', 'z-index', 'font-family', 'font-size', 'font-weight', 'line-height', 'letter-spacing', 'text-transform', 'color', 'background-color', 'background-image', 'opacity', 'transform', 'transition', 'animation', 'mix-blend-mode', 'clip-path', '-webkit-mask-image', 'mask-image', 'filter', 'backdrop-filter', 'box-shadow', 'border', 'border-radius', 'padding', 'margin', 'gap', 'pointer-events', 'overflow', 'cursor', 'text-shadow', 'writing-mode'];
    const out = {};
    for (const c of classes) { const el = document.getElementsByClassName(c)[0]; if (!el) continue; const cs = getComputedStyle(el); const o = { tag: el.tagName, rect: el.getBoundingClientRect().toJSON(), text: (el.textContent || '').trim().slice(0, 80) }; for (const p of props) { const v = cs.getPropertyValue(p); if (v && v !== 'none' && v !== 'normal' && v !== 'auto' && v !== '0px' && v !== 'static' && v !== 'visible') o[p] = v; } out[c] = o; }
    return out;
  }, info.components);
  // hover diffs for classes that have :hover rules
  const hover = [];
  for (const c of hoverClasses) {
    const els = await page.$$('.' + c); if (!els.length) continue;
    const el = els[0];
    try {
      const before = await el.evaluate(e => { const cs = getComputedStyle(e); const g = p => cs.getPropertyValue(p); const all = {}; const walk = (n, d) => { if (d > 3) return; const s = getComputedStyle(n); const o = {}; for (const p of ['transform', 'opacity', 'color', 'background-color', 'background-image', 'filter', 'width', 'height', 'clip-path', 'box-shadow', 'border-color', 'transition', 'left', 'top', 'right', 'bottom', 'visibility', 'mix-blend-mode', 'text-shadow', 'letter-spacing']) o[p] = s.getPropertyValue(p); all[(n.className && typeof n.className === 'string' ? n.className.split(' ')[0] : n.tagName) + '#' + d + '#' + [...(n.parentNode?.children || [])].indexOf(n)] = o; for (const ch of n.children) walk(ch, d + 1); }; walk(e, 0); return all; });
      const box = await el.boundingBox(); if (!box) continue;
      await el.hover({ force: true, timeout: 3000 }); await page.waitForTimeout(700);
      const after = await el.evaluate(e => { const all = {}; const walk = (n, d) => { if (d > 3) return; const s = getComputedStyle(n); const o = {}; for (const p of ['transform', 'opacity', 'color', 'background-color', 'background-image', 'filter', 'width', 'height', 'clip-path', 'box-shadow', 'border-color', 'transition', 'left', 'top', 'right', 'bottom', 'visibility', 'mix-blend-mode', 'text-shadow', 'letter-spacing']) o[p] = s.getPropertyValue(p); all[(n.className && typeof n.className === 'string' ? n.className.split(' ')[0] : n.tagName) + '#' + d + '#' + [...(n.parentNode?.children || [])].indexOf(n)] = o; for (const ch of n.children) walk(ch, d + 1); }; walk(e, 0); return all; });
      const diff = {}; for (const k of Object.keys(after)) { for (const p of Object.keys(after[k])) { if (before[k] && before[k][p] !== after[k][p]) { diff[k] = diff[k] || {}; diff[k][p] = { before: before[k][p], after: after[k][p] }; } } }
      if (Object.keys(diff).length) hover.push({ page: name, cls: c, diff, transition: before[Object.keys(before)[0]].transition });
      await page.mouse.move(5, 5); await page.waitForTimeout(400);
    } catch (e) { hover.push({ page: name, cls: c, error: String(e).slice(0, 120) }); }
  }
  const cap = await page.evaluate(() => window.__cap);
  // mobile
  await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(2500);
  await page.screenshot({ path: join(dir, 'mobile-390x844.png') });
  const mobile = await page.evaluate(() => ({ rootFontSize: getComputedStyle(document.documentElement).fontSize, overflow: document.documentElement.scrollWidth > innerWidth, sections: [...document.querySelectorAll('[class*="sectionContainer"]')].map(e => ({ cls: e.className, rect: e.getBoundingClientRect().toJSON() })) }));
  writeFileSync(join(dir, 'page.json'), JSON.stringify({ url, capturedAt: new Date().toISOString(), loaderGone, loaderMs, errors, console: console_, ...info, mobile, computed }, null, 1));
  writeFileSync(join(dir, 'motion-timeline.json'), JSON.stringify(cap.mutations, null, 0));
  writeFileSync(join(dir, 'media-log.json'), JSON.stringify({ media: cap.media, audio: cap.audio }, null, 1));
  writeFileSync(join(dir, 'hover-states.json'), JSON.stringify(hover, null, 1));
  console.log('captured', name, 'loader', loaderGone, loaderMs + 'ms', 'links', info.links.length, 'components', info.components.length, 'hover diffs', hover.filter(h => h.diff).length, 'mutations', cap.mutations.length, 'errors', errors.length);
  await ctx.close();
  return info;
}
const argUrls = process.argv.slice(2);
if (argUrls.length) { for (const u of argUrls) await capturePage(u); const prev = existsSync(join(OUT, 'network-manifest.json')) ? JSON.parse(readFileSync(join(OUT, 'network-manifest.json'), 'utf8')) : []; const merged = new Map(prev.map(r => [r.url, r])); for (const r of manifest.values()) { const o = merged.get(r.url); if (o) o.pages = [...new Set([...o.pages, ...r.pages])]; else merged.set(r.url, { ...r, pages: [...new Set(r.pages)] }); } writeFileSync(join(OUT, 'network-manifest.json'), JSON.stringify([...merged.values()], null, 1)); await browser.close(); process.exit(0); }
const home = await capturePage(START, { discover: true });
// Depth-1: same-origin links from home DOM + routes opened by code (window.open) seen in modules
const codeRoutes = ['/en-us/operator', '/en-us/news', '/en-us/news/7013'];
const found = new Set(codeRoutes.map(p => ORIGIN + p));
for (const l of home.links) { try { const u = new URL(l.href); if (u.origin === ORIGIN) found.add(u.origin + u.pathname.replace(/\/$/, '')); } catch { } }
const external = home.links.filter(l => { try { return new URL(l.href).origin !== ORIGIN; } catch { return false; } });
writeFileSync(join(OUT, 'depth1-links.json'), JSON.stringify({ sameOrigin: [...found], external }, null, 1));
for (const u of found) if (u !== START && u !== START + '/') await capturePage(u);
writeFileSync(join(OUT, 'network-manifest.json'), JSON.stringify([...manifest.values()].map(r => ({ ...r, pages: [...new Set(r.pages)] })), null, 1));
console.log('manifest entries', manifest.size, 'stored', [...manifest.values()].filter(r => r.stored).length);
await browser.close();
