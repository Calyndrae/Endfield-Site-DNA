// Verifies the self-contained mirror on a plain static server (as GitHub Pages serves it): the routes load
// from the archive, the loader finishes, API and RSC requests are answered locally, client navigation
// works, and nothing archived is fetched from the live CDN. Writes verification/mirror-report.json.
import http from 'node:http';
import { readFileSync, writeFileSync, existsSync, statSync, createReadStream } from 'node:fs';
import { join, extname, resolve } from 'node:path';
import { chromium } from 'playwright';
const root = resolve(new URL('..', import.meta.url).pathname);
const PORT = 8797;
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.mp4': 'video/mp4', '.mp3': 'audio/mpeg', '.txt': 'text/plain' };
const server = http.createServer((req, res) => { let path = decodeURIComponent(new URL(req.url, 'http://x').pathname); let file = join(root, path); if (existsSync(file) && statSync(file).isDirectory()) file = join(file, 'index.html'); if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); return res.end('not found'); } res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream' }); createReadStream(file).pipe(res); }).listen(PORT, '127.0.0.1');
const results = []; const check = (name, ok, detail) => { results.push({ name, ok: !!ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail !== undefined ? ' — ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)).slice(0, 320) : '')); };
const browser = await chromium.launch(); const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage(); const reqs = []; const failed = [];
page.on('request', r => reqs.push({ url: r.url(), type: r.resourceType() })); page.on('requestfailed', r => { if ((r.failure() || {}).errorText !== 'net::ERR_ABORTED') failed.push(r.url()); }); page.on('response', r => { if (r.status() >= 400 && r.url().includes('127.0.0.1')) failed.push(r.status() + ' ' + r.url()); });
const errors = []; page.on('pageerror', e => errors.push(String(e.message).slice(0, 160)));
const loaderGone = async () => { for (let i = 0; i < 30; i++) { if (await page.$('[class*="Loading_container"], [class*="_sectionContainer__"], .OperatorItem_operatorItem__gPezu, .__10-NoticeList_item__W4sd2, .__20-NoticeDetail_title__cALu9')) break; await page.waitForTimeout(500); } for (let i = 0; i < 60; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) return true; } return false; };
const hostCounts = () => reqs.reduce((a, r) => { const h = new URL(r.url).host; a[h] = (a[h] || 0) + 1; return a; }, {});
try {
  const t0 = Date.now(); await page.goto(`http://127.0.0.1:${PORT}/en-us/`, { waitUntil: 'domcontentloaded', timeout: 90000 });
  check('home: loader finished from the archive', await loaderGone(), `${Date.now() - t0} ms`);
  const hosts = hostCounts(); check('home: chunks, stylesheets, fonts, images, videos and audio came from this host', (hosts['127.0.0.1:' + PORT] || 0) > 40, hosts);
  const cdnStatic = reqs.filter(r => /^https:\/\/web-static\.hg-cdn\.com\//.test(r.url)).map(r => decodeURIComponent(r.url).replace(/^.*_next\/static\//, '')); check('home: nothing was fetched from the live CDN', cdnStatic.length === 0, cdnStatic.slice(0, 6));
  const apiLocal = reqs.filter(r => /\/(archive|mirror)\/api\//.test(r.url)).length; const apiLive = reqs.filter(r => /\/api\/(bulletin|content)/.test(r.url) && !/127\.0\.0\.1/.test(r.url)).length; check('home: news and video data answered from the archive', apiLocal >= 2 && apiLive === 0, { apiLocal, apiLive });
  check('home: rail, sections and footer rendered', await page.$('.Header_pcHeaderContainer__Sy_8l') && await page.$('.footer_footer__6jTqE') && (await page.$$('[class*="_sectionContainer__"]')).length >= 6, (await page.$$('[class*="_sectionContainer__"]')).length + ' sections');
  const bgm = reqs.filter(r => /bgm\./.test(r.url)).map(r => new URL(r.url).host); check('home: background music requested from this host', bgm.length > 0 && bgm.every(h => h.startsWith('127.0.0.1')), bgm);
  // client navigation: the router asks for a React Server Components payload (header rsc: 1); the adapter answers from the archive
  const rsc = await page.evaluate(async () => { const r = await fetch('/en-us/operator', { headers: { rsc: '1' } }); return { type: r.headers.get('content-type'), head: (await r.text()).slice(0, 40) }; }).catch(e => ({ error: String(e) }));
  check('router navigation payload (rsc: 1) answered from the archive as text/x-component', rsc.type === 'text/x-component' && /^\d+:/.test(rsc.head), rsc);
  // operator catalogue
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/en-us/operator/`, { waitUntil: 'domcontentloaded' }); check('operator catalogue: loader finished and cards rendered', await loaderGone() && (await page.$$('.OperatorItem_operatorItem__gPezu')).length >= 30, (await page.$$('.OperatorItem_operatorItem__gPezu')).length + ' cards');
  // news index: tabs and pagination from archived lists
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/en-us/news/`, { waitUntil: 'domcontentloaded' }); await loaderGone(); const cards0 = (await page.$$('.__10-NoticeList_item__W4sd2')).length;
  const tabs = await page.$$('[class*="SubpageTab_tab__"]'); if (tabs[1]) { await tabs[1].evaluate(el => el.click()); await page.waitForTimeout(1500); } const blocks = await page.$$('.__10-NoticeList_pagination__goU3_ .Pagination_block__RqQAA'); if (blocks[1]) { await blocks[1].evaluate(el => el.click()); await page.waitForTimeout(1500); }
  const listsLocal = reqs.filter(r => /\/(archive|mirror)\/api\//.test(r.url)).length; const listsLive = reqs.filter(r => /web-news\.gryphline\.com\/api/.test(r.url)).length; check('news index: initial list, second tab and second page all answered from the archive', cards0 >= 9 && listsLocal >= 3 && listsLive === 0, { cards: cards0, listsLocal, listsLive });
  // an archived article page
  const idx = JSON.parse(readFileSync(join(root, 'archive/api/index.json'), 'utf8')); const cid = (idx.map(a => (a.url.match(/\/api\/bulletin\/(\d+)\?/) || [])[1]).filter(c => c && c !== '7013'))[0];
  reqs.length = 0; await page.goto(`http://127.0.0.1:${PORT}/en-us/news/${cid}/`, { waitUntil: 'domcontentloaded' }); const gone = await loaderGone(); const title = await page.$eval('.__20-NoticeDetail_title__cALu9', e => e.textContent.trim()).catch(() => ''); const want = JSON.parse(readFileSync(join(root, idx.find(a => a.url.includes(`/api/bulletin/${cid}?`)).file), 'utf8')).data.title; check(`article ${cid}: renders its own archived data (title matches the archived record)`, gone && title === want, { title, want });
  const imgHosts = reqs.filter(r => r.type === 'image').reduce((a, r) => { const h = new URL(r.url).host; a[h] = (a[h] || 0) + 1; return a; }, {}); check(`article ${cid}: images served from this host where archived (others fall back to the CDN)`, (imgHosts['127.0.0.1:' + PORT] || 0) > 0, imgHosts);
  check('no JavaScript errors other than the site\'s own React #418 hydration notice', errors.every(e => /#418/.test(e)), errors.slice(0, 4));
  const localFailed = failed.filter(f => /127\.0\.0\.1/.test(f) && !/\/api\/|cdn-cgi|favicon|\.ico/.test(f)); check('no missing files on this host', localFailed.length === 0, localFailed.slice(0, 6));
  await page.screenshot({ path: join(root, 'verification/mirror-home.png') }).catch(() => null);
} catch (e) { check('verification run completed', false, String(e).slice(0, 400)); }
await browser.close(); server.close();
writeFileSync(join(root, 'verification/mirror-report.json'), JSON.stringify({ at: new Date().toISOString(), results }, null, 1));
console.log(`\n${results.filter(r => r.ok).length} passed, ${results.filter(r => !r.ok).length} failed`); process.exit(results.every(r => r.ok) ? 0 : 1);
