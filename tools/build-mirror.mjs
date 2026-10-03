// Builds a self-contained static mirror of the depth-1 routes from the originals archive, so the hosted
// site serves the real pages with their real assets, data and client navigation:
//   <route>/index.html           the archived SSR response: static asset tags and the flight data pointed at the
//                                archive (or at a rewritten copy), plus one head adapter
//   en-us/news/<cid>/index.html  the article shell with that article's archived record in its flight data and
//                                its SSR body
//   mirror/files/<host>/<path>   rewritten copies of the archived scripts and stylesheets that name CDN URLs
//                                (the webpack runtime's public path, the SDK's font and asset URLs, url() in CSS)
//   mirror/api/*.json            the archived API answers with their media URLs pointed at the archive
//   mirror/rsc/*.txt             the archived RSC payloads, rewritten row by row (T-row byte lengths recomputed)
// Everything else in archive/ is served byte for byte. The adapter (head only; the body stays the original)
// answers the site's API and RSC requests from these copies, redirects script/image/video loads to archived
// copies when they exist, and lets anything that is not archived (the rest of the operator clips, the SDK
// services) reach its original URL. The handbook route (/en-us/news/7013) is left to the handbook.
import { readFileSync, writeFileSync, mkdirSync, existsSync, readdirSync, rmSync } from 'node:fs';
import { join, dirname } from 'node:path';
const root = new URL('..', import.meta.url).pathname;
const arch = JSON.parse(readFileSync(join(root, 'archive/index.json'), 'utf8'));
const CDN = 'https://web-static.hg-cdn.com/'; const CDN_NEXT = CDN + 'endfield/official-v4/_next/';
const ARCH_NEXT = '/archive/files/web-static.hg-cdn.com/endfield/official-v4/_next/';
// hosts whose archived files stand in for the originals (the depth-1 HTML responses and analytics beacons do not)
const ASSET_HOSTS = new Set(['web-static.hg-cdn.com', 'web-api.gryphline.com', 'user.gryphline.com']);
const archivedPaths = new Set(arch.files.filter(f => f.file && ASSET_HOSTS.has(f.file.split('/')[2])).map(f => '/' + f.file));
const toArchive = url => { try { const u = new URL(url); return '/archive/files/' + u.host + decodeURIComponent(u.pathname); } catch (e) { return null; } };
// where each archived file is served from: itself, or (text files that name CDN URLs) a rewritten copy under mirror/
const local = new Map([...archivedPaths].map(p => [p, p]));
const rewriteUrls = s => s
  .replace(/https:\/\/[a-z0-9.-]+\/[^"'\\\s<>]+/g, u => { const a = toArchive(u.split('?')[0]); return a && local.has(a) ? local.get(a) : u; })
  .replace(/url\((['"]?)(https:\/\/[^)'"\s]+)\1\)/g, (m, q, u) => { const a = toArchive(u.split('?')[0]); return a && local.has(a) ? `url(${q}${local.get(a)}${q})` : m; })
  // the asset prefix the client runtime prepends to the chunk paths in the flight data
  .replace(/https:\/\/web-static\.hg-cdn\.com\/endfield\/official-v4(?=\\?")/g, '/archive/files/web-static.hg-cdn.com/endfield/official-v4');
const runtimeName = readdirSync(join(root, 'capture/js')).find(f => /^webpack-.*\.js$/.test(f));
// webpack bundles compose asset URLs at run time (x.p + "assets/…", x.p = "https://…/" in the entry bundle): where the
// composed URL names an archived file the expression becomes that file's served path, so the archived assets are
// local and the rest still resolve against the original public path. The site's own runtime gets its public path
// pointed at the archive tree (every chunk/media load it builds is then local, the adapter sends unarchived ones on)
const publicPaths = []; const pubOf = p => publicPaths.find(u => p.startsWith(toArchive(u)));
const rewriteText = (p, src) => { let out = src; if (p.endsWith('/' + runtimeName)) { if (!src.includes(CDN_NEXT)) throw new Error('webpack runtime without the expected public path'); out = out.split(CDN_NEXT).join(ARCH_NEXT); }
  const pub = /\.js$/.test(p) && pubOf(p); if (pub) out = out.replace(/\b[A-Za-z_$][\w$]*\.p\+"([^"]+)"/g, (m, rel) => { const a = toArchive(pub + rel); return a && local.has(a) ? JSON.stringify(local.get(a)) : m; });
  return rewriteUrls(out); };
rmSync(join(root, 'mirror'), { recursive: true, force: true });
const textFiles = [...archivedPaths].filter(p => /\.(js|css)$/.test(p) && existsSync(join(root, p)));
const sources = new Map(textFiles.map(p => [p, readFileSync(join(root, p), 'utf8')]));
for (const [p, src] of sources) if (p.endsWith('.js')) for (const m of src.matchAll(/\b[A-Za-z_$][\w$]*\.p="(https:\/\/[^"]+\/)"/g)) if (!publicPaths.includes(m[1])) publicPaths.push(m[1]);
for (const p of textFiles) if (rewriteText(p, sources.get(p)) !== sources.get(p)) local.set(p, p.replace(/^\/archive\/files\//, '/mirror/files/'));
let copies = 0;
for (const p of textFiles) if (local.get(p) !== p) { const out = join(root, local.get(p).slice(1)); mkdirSync(dirname(out), { recursive: true }); writeFileSync(out, rewriteText(p, sources.get(p))); copies++; }
// React flight rows: `id:J…\n` model rows, `id:T<hex byte length>,<text>` text rows; URLs inside a text row change
// its byte length, so each row is rewritten on its own and the length prefix recomputed
const rewriteFlight = text => {
  const buf = Buffer.from(text, 'utf8'); const out = []; let pos = 0;
  while (pos < buf.length) {
    const colon = buf.indexOf(0x3a, pos); const id = colon >= 0 ? buf.slice(pos, colon).toString() : '';
    if (colon < 0 || !/^[0-9a-f]+$/i.test(id)) { const nl = buf.indexOf(0x0a, pos); const end = nl < 0 ? buf.length : nl + 1; out.push(Buffer.from(rewriteUrls(buf.slice(pos, end).toString('utf8')), 'utf8')); pos = end; continue; }
    if (buf[colon + 1] === 0x54) { const comma = buf.indexOf(0x2c, colon + 2); const len = parseInt(buf.slice(colon + 2, comma).toString(), 16); const body = Buffer.from(rewriteUrls(buf.slice(comma + 1, comma + 1 + len).toString('utf8')), 'utf8'); out.push(Buffer.from(`${id}:T${body.length.toString(16)},`), body); pos = comma + 1 + len; continue; }
    const nl = buf.indexOf(0x0a, colon); const end = nl < 0 ? buf.length : nl + 1; out.push(Buffer.from(rewriteUrls(buf.slice(pos, end).toString('utf8')), 'utf8')); pos = end;
  }
  return Buffer.concat(out).toString('utf8');
};
const flightRows = text => { const rows = {}; const buf = Buffer.from(text, 'utf8'); let pos = 0; while (pos < buf.length) { const colon = buf.indexOf(0x3a, pos); if (colon < 0) break; const id = buf.slice(pos, colon).toString(); if (buf[colon + 1] === 0x54) { const comma = buf.indexOf(0x2c, colon + 2); const len = parseInt(buf.slice(colon + 2, comma).toString(), 16); rows[id] = buf.slice(comma + 1, comma + 1 + len).toString('utf8'); pos = comma + 1 + len; } else { const nl = buf.indexOf(0x0a, colon); const end = nl < 0 ? buf.length : nl; rows[id] = buf.slice(colon + 1, end).toString('utf8'); pos = end + 1; } } return rows; };
// API answers and RSC payloads: rewritten copies where a URL changed, else the archive file itself
const serveCopy = (file, text, out) => { const rewritten = out(text); if (rewritten === text) return '/' + file; const dst = file.replace(/^archive\//, 'mirror/'); mkdirSync(dirname(join(root, dst)), { recursive: true }); writeFileSync(join(root, dst), rewritten); copies++; return '/' + dst; };
const apiMap = Object.fromEntries(arch.api.filter(a => existsSync(join(root, a.file))).map(a => [a.key, serveCopy(a.file, readFileSync(join(root, a.file), 'utf8'), rewriteUrls)]));
const rscMap = Object.fromEntries(arch.rsc.filter(r => existsSync(join(root, r.file))).map(r => [r.route, serveCopy(r.file, readFileSync(join(root, r.file), 'utf8'), rewriteFlight)]));
const LOCAL = Object.fromEntries([...local].filter(([p, l]) => p !== l));
// the adapter
const adapter = `<script>
(() => {
  // Mirror adapter: serve this page's API, RSC and asset requests from the originals archive on this host;
  // anything not archived goes to its original URL. Head-only; the page body is the original response.
  const API = ${JSON.stringify(apiMap)};
  const RSC = ${JSON.stringify(rscMap)};
  const FILES = new Set(${JSON.stringify([...archivedPaths])});
  const LOCAL = ${JSON.stringify(LOCAL)};
  const hostOf = ${JSON.stringify(Object.fromEntries([...ASSET_HOSTS, 'endfield.gryphline.com', 'web-news.gryphline.com'].map(h => [h, 1])))};
  const key = u => { try { const x = new URL(u, location.href); return x.host + x.pathname + x.search; } catch (e) { return null; } };
  const archived = u => { try { const x = new URL(u, location.href); if (!hostOf[x.host]) return null; const p = '/archive/files/' + x.host + decodeURIComponent(x.pathname); return FILES.has(p) ? (LOCAL[p] || p) : null; } catch (e) { return null; } };
  const unarchived = u => { try { const x = new URL(u, location.href); if (x.host !== location.host || !x.pathname.startsWith('/archive/files/')) return null; if (FILES.has(x.pathname)) return LOCAL[x.pathname] || null; const rest = x.pathname.slice('/archive/files/'.length); const i = rest.indexOf('/'); return 'https://' + rest.slice(0, i) + rest.slice(i) + x.search; } catch (e) { return null; } };
  const mapSrc = v => { if (typeof v !== 'string') return v; return archived(v) || unarchived(v) || v; };
  for (const [proto, attr] of [[HTMLScriptElement.prototype, 'src'], [HTMLImageElement.prototype, 'src'], [HTMLMediaElement.prototype, 'src'], [HTMLSourceElement.prototype, 'src'], [HTMLLinkElement.prototype, 'href']]) { const d = Object.getOwnPropertyDescriptor(proto, attr); if (d && d.set) Object.defineProperty(proto, attr, { get: d.get, set(v) { d.set.call(this, mapSrc(v)); }, configurable: true }); }
  const setAttr = Element.prototype.setAttribute; Element.prototype.setAttribute = function (n, v) { if ((n === 'src' || n === 'href' || n === 'srcset') && typeof v === 'string' && !/\\s/.test(v)) v = mapSrc(v); return setAttr.call(this, n, v); };
  const open = XMLHttpRequest.prototype.open; XMLHttpRequest.prototype.open = function (m, u, ...r) { const k = key(u); if (String(m).toUpperCase() === 'GET' && k && API[k]) u = location.origin + API[k]; else { const a = typeof u === 'string' && archived(u); if (a) u = a; } return open.call(this, m, u, ...r); };
  const f = window.fetch; window.fetch = async function (input, init) { const u = typeof input === 'string' ? input : (input && input.url) || ''; const h = new Headers((init && init.headers) || (input && input.headers) || {}); const x = (() => { try { return new URL(u, location.href); } catch (e) { return null; } })();
    if (x && h.get('rsc') === '1' && x.host === location.host && RSC[x.pathname.replace(/\\/$/, '') || '/']) { const r = await f(RSC[x.pathname.replace(/\\/$/, '') || '/']); return new Response(await r.text(), { status: 200, headers: { 'content-type': 'text/x-component' } }); }
    const k = key(u); if (k && API[k] && (!init || !init.method || init.method === 'GET')) return f(API[k], { method: 'GET' });
    const a = archived(u); if (a) return f(a, init);
    return f(input, init); };
})();
</script>`;
// the SSR pages: the flight data (all self.__next_f.push([1,…]) scripts) is joined, rewritten row by row and re-emitted
// as one push escaped the way Next.js escapes it (< > & as \uXXXX); the rest of the document gets the URL rewrite
const pushRe = /<script>self\.__next_f\.push\((\[.*?\])\)<\/script>/gs;
const isData = d => Array.isArray(d) && d[0] === 1 && typeof d[1] === 'string';
const joinFlight = html => [...html.matchAll(pushRe)].map(m => JSON.parse(m[1])).filter(isData).map(d => d[1]).join('');
const escFlight = j => j.replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026').replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
const pushScript = flight => `<script>self.__next_f.push(${escFlight(JSON.stringify([1, flight]))})</script>`;
const emitFlight = (html, script) => { let first = true; return html.replace(pushRe, (m, j) => { if (!isData(JSON.parse(j))) return m; if (!first) return ''; first = false; return script; }); };
const MARK = '\u0000FLIGHT\u0000';
const rewriteHtml = html => { const flight = rewriteFlight(joinFlight(html)); return rewriteUrls(emitFlight(html, MARK)).replace(MARK, () => pushScript(flight)).replace('<head>', '<head>' + adapter); };
// routes
const routes = { '/en-us': 'original/home-response.html', '/en-us/operator': 'original/operators-response.html', '/en-us/news': 'original/news-response.html' };
for (const f of readdirSync(join(root, 'original'))) if (/^protocol-.*-response\.html$/.test(f) || /^(privacy|terms).*-response\.html$/.test(f)) routes['/en-us/protocol/' + f.replace(/^protocol-/, '').replace(/-response\.html$/, '').replace(/-/g, '_')] = 'original/' + f;
let built = 0;
for (const [route, file] of Object.entries(routes)) { if (!existsSync(join(root, file))) continue; const dir = join(root, route.replace(/^\//, '')); mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, 'index.html'), rewriteHtml(readFileSync(join(root, file), 'utf8'))); built++; }
// articles: the article shell with each archived article's record in its flight data and SSR body (7013 stays the handbook)
const shellRaw = readFileSync(join(root, 'original/article-response.html'), 'utf8');
const joined = joinFlight(shellRaw); const rows = flightRows(joined);
const bStart = joined.indexOf('"bulletin":') + '"bulletin":'.length;
let depth = 0, i = bStart, inStr = false; for (; i < joined.length; i++) { const ch = joined[i]; if (inStr) { if (ch === '\\') i++; else if (ch === '"') inStr = false; continue; } if (ch === '"') inStr = true; else if (ch === '{') depth++; else if (ch === '}') { depth--; if (depth === 0) { i++; break; } } }
const originalBulletin = JSON.parse(joined.slice(bStart, i)); const originalTitle = originalBulletin.title;
const originalBody = /^\$[0-9a-f]+$/.test(originalBulletin.data || '') ? rows[originalBulletin.data.slice(1)] : originalBulletin.data;
const escText = t => String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#x27;');
let articles = 0, bodiesReplaced = 0;
for (const a of arch.api) { const m = a.url.match(/\/api\/bulletin\/(\d+)\?/); if (!m || m[1] === '7013' || !existsSync(join(root, a.file))) continue; let data; try { data = JSON.parse(readFileSync(join(root, a.file), 'utf8')).data; } catch (e) { continue; } if (!data || !data.cid) continue;
  const newJoined = joined.slice(0, bStart) + JSON.stringify(data) + joined.slice(i);
  let html = emitFlight(shellRaw, pushScript(newJoined));
  const title = String(data.title || originalTitle);
  html = html.replace(/<title>[^<]*<\/title>/, () => `<title>${escText(title)}</title>`).split('>' + escText(originalTitle) + '<').join('>' + escText(title) + '<');
  if (originalBody && typeof data.data === 'string' && html.includes(originalBody)) { html = html.split(originalBody).join(data.data); bodiesReplaced++; }
  const dir = join(root, 'en-us/news', String(data.cid)); mkdirSync(dir, { recursive: true }); writeFileSync(join(dir, 'index.html'), rewriteHtml(html)); articles++; }
writeFileSync(join(root, 'mirror/index.json'), JSON.stringify({ builtAt: new Date().toISOString(), routes: Object.keys(routes), articles, copies: Object.fromEntries([...local].filter(([p, l]) => p !== l)), api: apiMap, rsc: rscMap }, null, 1));
console.log(`mirror: public paths ${JSON.stringify(publicPaths)}\nmirror: ${built} routes, ${articles} article pages (${bodiesReplaced} SSR bodies replaced), ${copies} rewritten copies under mirror/ (${Object.keys(LOCAL).length} scripts/stylesheets), adapter maps ${Object.keys(apiMap).length} API URLs, ${Object.keys(rscMap).length} RSC routes, ${archivedPaths.size} archived files`);
