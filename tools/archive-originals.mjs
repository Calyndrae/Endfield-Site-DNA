// Archives the originals the depth-1 pages use, so the hosted site can serve them itself and the
// handbook can link to them instead of describing them:
//   archive/files/<host>/<path>   every response in capture/network-manifest.json (chunks, CSS, fonts,
//                                 images, videos, audio, Lottie, SDK scripts), verbatim, plus the images
//                                 referenced by every archived article, plus operator clips (a subset by
//                                 default, --clips=all for the whole 785 MB set)
//   archive/api/<sha>.json        every API response the pages request, keyed by the exact URL the client
//                                 builds (news list for every tab and page, every article, video list,
//                                 SDK config), captured by driving the live pages + direct calls
//   archive/rsc/<route>.txt       the React Server Components payload of every route (client navigation)
//   archive/index.json            everything above with bytes and SHA-256; archive/README.md
// Usage: node archive-originals.mjs [--clips=all|subset] [--budget-mb=700]
import { mkdirSync, writeFileSync, existsSync, readFileSync, statSync, copyFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { createHash } from 'node:crypto';
import { chromium } from 'playwright';
const root = new URL('..', import.meta.url).pathname;
const ORIGIN = 'https://endfield.gryphline.com';
const CODE = 'arknights_endfield_official';
const ARCH = join(root, 'archive');
const args = Object.fromEntries(process.argv.slice(2).map(a => a.replace(/^--/, '').split('=')));
const CLIPS = args.clips || 'subset'; const BUDGET = Number(args['budget-mb'] || 700) * 1048576;
mkdirSync(join(ARCH, 'files'), { recursive: true }); mkdirSync(join(ARCH, 'api'), { recursive: true }); mkdirSync(join(ARCH, 'rsc'), { recursive: true });
const sha = b => createHash('sha256').update(b).digest('hex');
const entries = []; let archivedBytes = 0;
const localPath = url => { const u = new URL(url); return join('archive/files', u.host, decodeURIComponent(u.pathname).replace(/^\//, '')); };
async function download(url, { expectSha = null, note = '' } = {}) {
  const rel = localPath(url); const abs = join(root, rel);
  if (existsSync(abs)) { const b = readFileSync(abs); const e = { url, file: rel, bytes: b.length, sha256: sha(b), note }; entries.push(e); archivedBytes += b.length; return e; }
  for (let attempt = 0; attempt < 3; attempt++) {
    try { const r = await fetch(url); if (!r.ok) { if (r.status === 404) { entries.push({ url, file: null, status: r.status, note: note + ' (missing upstream)' }); return null; } throw new Error('HTTP ' + r.status); } const b = Buffer.from(await r.arrayBuffer()); mkdirSync(dirname(abs), { recursive: true }); writeFileSync(abs, b); const e = { url, file: rel, bytes: b.length, sha256: sha(b), type: r.headers.get('content-type') || '', note }; if (expectSha && expectSha !== e.sha256) e.note += ' (content changed since capture)'; entries.push(e); archivedBytes += b.length; return e; }
    catch (err) { if (attempt === 2) { entries.push({ url, file: null, error: String(err).slice(0, 120), note }); return null; } await new Promise(r => setTimeout(r, 1500)); }
  }
}
// ---------- 1. everything in the depth-1 manifest
const manifest = JSON.parse(readFileSync(join(root, 'capture/network-manifest.json'), 'utf8'));
console.log('manifest entries', manifest.length);
for (const m of manifest) {
  if (!/^https?:/.test(m.url) || /\/api\//.test(m.url) || /web-api\.gryphline\.com\/(regular|cookie_store)/.test(m.url) || /event-log-api|cdn-cgi|googletagmanager|google-analytics|doubleclick|cloudflareinsights/.test(m.url)) continue;
  await download(m.url.split('?')[0].includes('?') ? m.url : m.url, { expectSha: m.sha256, note: 'depth-1 response (' + (m.type || '').split(';')[0] + ')' });
}
console.log('depth-1 files archived:', entries.filter(e => e.file).length, (archivedBytes / 1048576).toFixed(0) + ' MB');
// ---------- 2. API + RSC responses: drive the live pages, record every API response the client requests
const api = []; const seenApi = new Set();
const recordApi = (url, status, type, body, source) => { const key = url.replace(/^https?:\/\//, ''); if (seenApi.has(key)) return; seenApi.add(key); const file = 'archive/api/' + sha(key).slice(0, 16) + '.json'; writeFileSync(join(root, file), body); api.push({ url, key, status, type, file, bytes: body.length, sha256: sha(body), source }); };
const browser = await chromium.launch(); const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } }); const page = await ctx.newPage();
page.on('response', async r => { try { const u = r.url(); if (/\/api\//.test(u) || /grayscale\.json/.test(u)) { const ct = r.headers()['content-type'] || ''; if (/json/.test(ct)) recordApi(u, r.status(), ct, Buffer.from(await r.body()), 'page'); } } catch (e) { } });
const settle = async (url) => { await page.goto(ORIGIN + url, { waitUntil: 'domcontentloaded', timeout: 90000 }); for (let i = 0; i < 60; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) break; } await page.waitForTimeout(2500); try { await page.evaluate(() => { for (const el of document.querySelectorAll('button, div, span')) if (/^(ok|accept|agree|同意)$/i.test((el.textContent || '').trim()) && el.closest('[class*="cookie" i], [class*="consent" i], [id*="cookie" i]')) el.click(); }); } catch (e) { } };
await settle('/en-us'); await settle('/en-us/operator'); await settle('/en-us/news/7013');
await settle('/en-us');
// the news index: every tab, every page, through the real controls so the query strings are the client's own
await settle('/en-us/news');
const tabs = await page.$$('[class*="SubpageTab_tab__"]');
for (let t = 0; t < tabs.length; t++) {
  const tabsNow = await page.$$('[class*="SubpageTab_tab__"]'); await tabsNow[t].evaluate(el => el.click()); await page.waitForTimeout(1800);
  let pageCount = await page.$$eval('.__10-NoticeList_pagination__goU3_ .Pagination_block__RqQAA', es => es.length).catch(() => 0);
  for (let pnum = 2; pnum <= pageCount; pnum++) { const ok = await page.evaluate(n => { const b = [...document.querySelectorAll('.__10-NoticeList_pagination__goU3_ .Pagination_block__RqQAA')].find(x => x.textContent.trim() === String(n).padStart(2, '0')); if (!b) return false; b.click(); return true; }, pnum); if (!ok) break; await page.waitForTimeout(1500); pageCount = Math.max(pageCount, await page.$$eval('.__10-NoticeList_pagination__goU3_ .Pagination_block__RqQAA', es => es.length).catch(() => 0)); }
}
await browser.close();
console.log('API responses recorded from pages:', api.length);
// every article the lists mention, and every page of the video list, by direct calls in the client's URL form
const cids = new Set(); for (const a of api) { try { const j = JSON.parse(readFileSync(join(root, a.file), 'utf8')); const list = j && j.data && (j.data.list || j.data.bulletins || []); for (const b of list || []) if (b && (b.cid || b.id)) cids.add(String(b.cid || b.id)); } catch (e) { } }
cids.add('7013');
for (const cid of [...cids].sort()) { const url = `https://web-news.gryphline.com/api/bulletin/${cid}?lang=en-us&code=${CODE}`; const key = url.replace(/^https?:\/\//, ''); if (seenApi.has(key)) continue; try { const r = await fetch(url); const b = Buffer.from(await r.arrayBuffer()); recordApi(url, r.status, r.headers.get('content-type') || '', b, 'direct'); } catch (e) { } }
for (let pnum = 1; pnum <= 20; pnum++) { const url = `${ORIGIN}/api/content/info_video?lang=en-us&page=${pnum}&pageSize=10`; const key = url.replace(/^https?:\/\//, ''); if (seenApi.has(key)) continue; try { const r = await fetch(url); const b = Buffer.from(await r.arrayBuffer()); recordApi(url, r.status, r.headers.get('content-type') || '', b, 'direct'); const j = JSON.parse(b.toString()); const list = j && j.data && (j.data.list || []); if (!list || list.length < 10) break; } catch (e) { break; } }
console.log('API responses total:', api.length, 'articles:', cids.size);
// article images (the articles' HTML references upload/ images not in the depth-1 manifest)
let articleImages = 0; const bulletinImages = new Set();
for (const a of api) { if (!/\/api\/bulletin\/\d+/.test(a.url)) continue; try { const j = JSON.parse(readFileSync(join(root, a.file), 'utf8')); const html = (j.data && (j.data.data || j.data.content)) || ''; for (const m of String(html).matchAll(/https:\/\/web-static\.hg-cdn\.com\/[^"'\s)]+/g)) bulletinImages.add(m[0]); if (j.data && j.data.cover) bulletinImages.add(j.data.cover); if (j.data && j.data.bannerUrl) bulletinImages.add(j.data.bannerUrl); } catch (e) { } }
for (const a of api) { try { const j = JSON.parse(readFileSync(join(root, a.file), 'utf8')); const walk = v => { if (typeof v === 'string') { if (/^https:\/\/web-static\.hg-cdn\.com\//.test(v)) bulletinImages.add(v); } else if (v && typeof v === 'object') Object.values(v).forEach(walk); }; walk(j); } catch (e) { } }
for (const u of bulletinImages) { if (archivedBytes > BUDGET) { entries.push({ url: u, file: null, note: 'article image (over budget, left on the CDN)' }); continue; } const e = await download(u.split('?')[0], { note: 'referenced by archived API data' }); if (e && e.file) articleImages++; }
console.log('article/API images archived:', articleImages, 'total now', (archivedBytes / 1048576).toFixed(0) + ' MB');
// SSR responses for the routes whose raw response was not kept by the first capture (the protocol pages)
for (const [route, file] of [['/en-us/protocol/privacy_policy', 'original/protocol-privacy_policy-response.html'], ['/en-us/protocol/terms_of_service', 'original/protocol-terms_of_service-response.html']]) { if (existsSync(join(root, file))) continue; try { const r = await fetch(ORIGIN + route, { headers: { accept: 'text/html' } }); if (r.ok) { writeFileSync(join(root, file), Buffer.from(await r.arrayBuffer())); console.log('SSR response saved', file); } } catch (e) { console.warn('SSR fetch failed', route); } }
// RSC payloads for client-side navigation
const routes = ['/en-us', '/en-us/operator', '/en-us/news', '/en-us/news/7013', '/en-us/protocol/privacy_policy', '/en-us/protocol/terms_of_service'];
const rsc = [];
for (const route of routes) { try { const r = await fetch(ORIGIN + route, { headers: { rsc: '1', accept: '*/*' } }); const b = Buffer.from(await r.arrayBuffer()); const ct = r.headers.get('content-type') || ''; if (!/x-component/.test(ct)) { console.warn('no RSC payload for', route, ct); continue; } const file = 'archive/rsc/' + route.replace(/^\//, '').replace(/[^A-Za-z0-9-]+/g, '_') + '.txt'; writeFileSync(join(root, file), b); rsc.push({ route, file, bytes: b.length, sha256: sha(b), type: ct }); } catch (e) { console.warn('rsc failed', route, String(e).slice(0, 80)); } }
console.log('RSC payloads:', rsc.length);
// ---------- 3. operator clips (the transparent-video character animations)
const { operatorClips } = await import('./handbook/lib.mjs');
const clipMap = operatorClips(); const clips = [];
const interactions = existsSync(join(root, 'capture/interactions.json')) ? JSON.parse(readFileSync(join(root, 'capture/interactions.json'), 'utf8')) : {};
const requested = new Set((((interactions.switch3d || {}).toggle || {}).videoRequests) || []);
const operators = Object.keys(clipMap); const subset = new Set(operators.slice(0, 3));
for (const op of operators) for (const [kind, url] of Object.entries(clipMap[op] || {})) { if (typeof url !== 'string') continue; let head = null; try { const r = await fetch(url, { method: 'HEAD' }); head = Number(r.headers.get('content-length') || 0); } catch (e) { } const wanted = CLIPS === 'all' || subset.has(op) || [...requested].some(f => url.endsWith(f)); let e = null; if (wanted && (CLIPS === 'all' || archivedBytes + (head || 0) < BUDGET + 300 * 1048576)) e = await download(url, { note: `operator clip ${op}/${kind}` }); clips.push({ operator: op, kind, url, bytes: head, archived: !!(e && e.file), file: e && e.file }); }
console.log('clips archived:', clips.filter(c => c.archived).length, '/', clips.length, 'total archive', (archivedBytes / 1048576).toFixed(0) + ' MB');
// ---------- indices
const human = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n > 1024 ? (n / 1024).toFixed(0) + ' KB' : n + ' B';
writeFileSync(join(ARCH, 'api/index.json'), JSON.stringify(api, null, 1));
writeFileSync(join(ARCH, 'rsc/index.json'), JSON.stringify(rsc, null, 1));
writeFileSync(join(ARCH, 'clips-index.json'), JSON.stringify(clips, null, 1));
const summary = { archivedAt: new Date().toISOString(), files: entries.filter(e => e.file).length, missing: entries.filter(e => !e.file).length, bytes: archivedBytes, api: api.length, rsc: rsc.length, clips: { archived: clips.filter(c => c.archived).length, total: clips.length, totalBytes: clips.reduce((n, c) => n + (c.bytes || 0), 0) } };
writeFileSync(join(ARCH, 'index.json'), JSON.stringify({ summary, files: entries, api, rsc, clips }, null, 1));
writeFileSync(join(ARCH, 'README.md'), `# Originals archive\n\nArchived ${summary.archivedAt.slice(0, 10)} from the live site and its CDN.\n\n| What | Count | Size |\n| --- | --- | --- |\n| Files under files/<host>/<path> (chunks, stylesheets, fonts, images, videos, audio, Lottie, SDK scripts, article images) | ${summary.files} | ${human(summary.bytes - clips.filter(c => c.archived).reduce((n, c) => n + (c.bytes || 0), 0))} |\n| API responses under api/ (news lists for every tab and page, every article, video list, SDK config) | ${summary.api} | ${human(api.reduce((n, a) => n + a.bytes, 0))} |\n| RSC payloads under rsc/ (client navigation for every route) | ${summary.rsc} | ${human(rsc.reduce((n, a) => n + a.bytes, 0))} |\n| Operator clips (transparent-video character animations) | ${summary.clips.archived} of ${summary.clips.total} | ${human(clips.filter(c => c.archived).reduce((n, c) => n + (c.bytes || 0), 0))} archived of ${human(summary.clips.totalBytes)} |\n\nEvery entry is in index.json with its original URL, bytes and SHA-256. The full clip set is ${human(summary.clips.totalBytes)}; GitHub Pages serves at most 1 GB per site, so by default only the first three operators' clips and the clips the measurements requested are archived; \`node tools/archive-originals.mjs --clips=all\` fetches the rest for a local copy. Responses the pages make to the SDK's own services (regular/check, cookie_store/account_token, event logging) are not archivable: they are per-session answers from Gryphline's servers.\n`);
console.log(JSON.stringify(summary));
