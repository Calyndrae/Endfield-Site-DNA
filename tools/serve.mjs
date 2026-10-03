// Local-only mirror: serves archived original pages at their original routes,
// proxies Next.js RSC navigation requests to the live origin, and serves the
// handbook at the article route. Static files are served from the repo root.
import http from 'node:http';
import { readFileSync, existsSync, statSync, createReadStream } from 'node:fs';
import { join, extname, resolve } from 'node:path';
const root = resolve(new URL('..', import.meta.url).pathname);
const port = Number(process.argv[2] || 8786);
const ORIGIN = 'https://endfield.gryphline.com';
const routes = JSON.parse(readFileSync(join(root, 'original/routes.json'), 'utf8'));
const types = { '.html':'text/html; charset=utf-8', '.js':'text/javascript', '.mjs':'text/javascript', '.css':'text/css', '.json':'application/json', '.png':'image/png', '.jpg':'image/jpeg', '.svg':'image/svg+xml', '.md':'text/markdown; charset=utf-8', '.txt':'text/plain; charset=utf-8', '.woff2':'font/woff2' };
http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://127.0.0.1:${port}`);
  let path = url.pathname.replace(/\/+$/, '') || '/';
  if (['/', '/handbook', '/handbook/index.html'].includes(path)) { res.writeHead(302, { Location: '/en-us/news/7013' }); return res.end(); }
  if (path in routes) {
    if (req.headers['rsc'] === '1') {
      try {
        const h = {}; for (const k of ['rsc','next-router-state-tree','next-router-prefetch','next-url','accept']) if (req.headers[k]) h[k] = req.headers[k];
        const r = await fetch(ORIGIN + req.url, { headers: h });
        const body = Buffer.from(await r.arrayBuffer());
        res.writeHead(r.status, { 'Content-Type': r.headers.get('content-type') || 'text/x-component', 'Cache-Control': 'no-store' }); return res.end(body);
      } catch (e) { res.writeHead(502); return res.end('origin unavailable'); }
    }
    const body = readFileSync(join(root, routes[path]));
    res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' }); return res.end(body);
  }
  const file = join(root, decodeURIComponent(path));
  if (file.startsWith(root) && existsSync(file) && statSync(file).isFile()) {
    res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Cache-Control': 'no-store', 'Access-Control-Allow-Origin': '*' });
    return createReadStream(file).pipe(res);
  }
  res.writeHead(404); res.end('not found');
}).listen(port, '127.0.0.1', () => console.log(`mirror on http://127.0.0.1:${port}/en-us/news/7013`));
