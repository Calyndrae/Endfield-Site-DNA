// Assemble the single-page handbook inside the untouched original article shell.
// - handbook/index.html: the original SSR response for /en-us/news/7013 plus (a) a data adapter that
//   redirects only the client refetch of /api/bulletin/7013 to the local handbook data and (b) two extra
//   ORIGINAL stylesheets (operator catalogue + news index CSS modules) so the embedded live components
//   render with their own shipped CSS. No authored CSS, classes, wrappers or animation code.
// - handbook/handbook-bulletin.json: the bulletin record with the handbook as its `data` HTML.
// - handbook/coverage.json: which components are used where (proof of coverage).
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { root, data, p, h, br, a, link, esc, t, table } from './handbook/lib.mjs';
import { chapters as A } from './handbook/chapters-a.mjs';
import { chapters as B } from './handbook/chapters-b.mjs';
import { chapters as C } from './handbook/chapters-c.mjs';
import { chapters as D } from './handbook/chapters-d.mjs';
import { chapters as E } from './handbook/chapters-e.mjs';
const TITLE = 'Endfield website DNA — technical handbook (single page)';
const chapters = [...A, ...B, ...C, ...E, ...D];
mkdirSync(join(root, 'handbook'), { recursive: true });
const used = new Set();
let body = '';
body += p('<strong>Single-page technical handbook.</strong> Everything around this text is the original Endfield site runtime served by the local mirror: navigation rail, footer, fonts, stylesheets, scripts, sounds. Only this article\'s title and body data were replaced. Specimens inside the page are verbatim markup captured from the live site and are styled by the live stylesheets, so their hover states are the real ones. The only normalisation applied to specimens is the removal of inline opacity/transform/visibility values that the site\'s animation code writes during entrances, so each specimen is shown in its settled state.', { id: 'handbook-top' });
body += p('How to read: <strong>OBSERVED</strong> = read from shipped code or responses · <strong>MEASURED</strong> = reported by headless Chromium on 2026-10-03 · <strong>INFERRED</strong> = interpretation, never a fact · <strong>RULE FOR A CHILD SITE</strong> = transferable instruction derived from the above.');
body += h('CONTENTS', 'contents');
body += chapters.map((c, i) => link(`${String(i + 1).padStart(2, '0')} / ${c.title}`, '#' + c.slug)).join('');
const rendered = {};
const render = (c, arg) => { let html; try { html = c.html(arg); } catch (e) { html = p('<strong>BUILD ERROR in chapter ' + esc(c.slug) + ':</strong> ' + esc(String(e.stack || e).slice(0, 400))); console.error('chapter', c.slug, e); } return html; };
for (const c of chapters) if (!c.late) { rendered[c.slug] = render(c); for (const m of rendered[c.slug].matchAll(/class="([^"]*)"/g)) for (const cls of m[1].split(/\s+/)) { const mm = cls.match(/^((?:__\d\d-)?[A-Za-z][A-Za-z0-9-]*?)_[A-Za-z0-9]+__[A-Za-z0-9_]{5}$/); if (mm) used.add(mm[1] + '\u0000' + c.slug); } }
const coverage = {}; for (const u of used) { const [comp, slug] = u.split('\u0000'); (coverage[comp] = coverage[comp] || []).push(slug); }
const coverageDoc = { components: Object.keys(data.cssComponents).sort(), embedded: coverage, chapters: chapters.map(c => c.slug) };
for (const c of chapters) if (c.late) rendered[c.slug] = render(c, coverageDoc);
chapters.forEach((c, i) => { body += br() + h(`${String(i + 1).padStart(2, '0')} // ${c.title.toUpperCase()}`, c.slug) + rendered[c.slug] + link('↑ Back to contents', '#contents'); });
writeFileSync(join(root, 'handbook/coverage.json'), JSON.stringify(coverageDoc, null, 1));
const CONTENT = body;
// --- bulletin data (what the site's own provider will render)
const raw = readFileSync(join(root, 'original/article-response.html'), 'utf8');
const flightParts = []; for (const m of raw.matchAll(/<script>self\.__next_f\.push\((\[.*?\])\)<\/script>/gs)) { const d = JSON.parse(m[1]); if (d.length > 1 && d[0] === 1) flightParts.push(d[1]); }
const flight = flightParts.join('');
const bStart = flight.indexOf('"bulletin":') + '"bulletin":'.length;
// parse the bulletin object with a small balanced-brace scan (it is plain JSON inside the flight string)
let depth = 0, i = bStart, inStr = false; for (; i < flight.length; i++) { const ch = flight[i]; if (inStr) { if (ch === '\\') i++; else if (ch === '"') inStr = false; continue; } if (ch === '"') inStr = true; else if (ch === '{') depth++; else if (ch === '}') { depth--; if (depth === 0) { i++; break; } } }
const bulletin = JSON.parse(flight.slice(bStart, i));
const originalTitle = bulletin.title;
bulletin.title = TITLE; bulletin.data = CONTENT; bulletin.displayTime = Math.floor(Date.now() / 1000);
writeFileSync(join(root, 'handbook/handbook-bulletin.json'), JSON.stringify({ code: 0, data: bulletin }));
// --- shell: untouched SSR + data adapter + two extra original stylesheets
const adapter = `<script>
(() => {
  // Data adapter only: the original NoticeDetailContextProvider refetches /api/bulletin/7013 after mount.
  // That one GET is answered with the local handbook record; every other request is untouched.
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function (method, url, ...rest) {
    try { const target = new URL(url, location.href); if (String(method).toUpperCase() === "GET" && /\\/api\\/bulletin\\/7013$/.test(target.pathname)) url = location.origin + "/handbook/handbook-bulletin.json"; } catch (e) {}
    return originalOpen.call(this, method, url, ...rest);
  };
})();
</script>`;
const extraCss = ['cca0e7eae4809d1e.css', '2174f0c4d179760f.css'].map(f => `<link rel="stylesheet" href="https://web-static.hg-cdn.com/endfield/official-v4/_next/static/css/${f}" crossorigin="anonymous" data-precedence="next"/>`).join('');
let shell = raw.replace('<head>', '<head>' + adapter);
shell = shell.replace('</head>', extraCss + '</head>');
writeFileSync(join(root, 'handbook/index.html'), shell);
// --- GitHub Pages variant: same shell and content, served from a static host under a base path.
// The repository root is the Pages site root, so the shell lives at /index.html and the content's
// root-absolute links (/capture, /source, /analysis, /verification) get the base prefix; links to the
// mirrored original routes (/en-us…) point at the live site because a static host cannot proxy them.
const PAGES_BASE = (process.argv.find(a => a.startsWith('--base=')) || '--base=/Endfield-Site-DNA').slice(7).replace(/\/$/, '');
// A static host has no directory listings, so links to folders go to the repository tree on GitHub.
const REPO_URL = (process.argv.find(a => a.startsWith('--repo=')) || '--repo=https://github.com/Calyndrae/Endfield-Site-DNA').slice(7).replace(/\/$/, '');
const pagesContent = CONTENT.replace(/href="\/([^"]*\/)"/g, (m, dir) => `href="${REPO_URL}/tree/main/${dir.replace(/\/$/, '')}"`).replace(/(src|href)="\/(?!\/)/g, (m, attr) => `${attr}="${PAGES_BASE}/`).replace(new RegExp(`href="${PAGES_BASE.replace(/[/.]/g, '\\$&')}/en-us`, 'g'), 'href="https://endfield.gryphline.com/en-us');
writeFileSync(join(root, 'handbook/handbook-bulletin.pages.json'), JSON.stringify({ code: 0, data: { ...bulletin, data: pagesContent } }));
// The article's own provider parses window.location.pathname with /\/news\/(\d+)/ before it refetches the
// bulletin (NoticeDetailContextProvider), so the Pages shell must live under a /news/7013 path too.
mkdirSync(join(root, 'en-us/news/7013'), { recursive: true });
writeFileSync(join(root, 'en-us/news/7013/index.html'), shell.replace('location.origin + "/handbook/handbook-bulletin.json"', `location.origin + "${PAGES_BASE}/handbook/handbook-bulletin.pages.json"`));
writeFileSync(join(root, 'index.html'), `<!doctype html><meta charset="utf-8"><meta http-equiv="refresh" content="0; url=en-us/news/7013/"><title>Endfield site DNA</title><a href="en-us/news/7013/">Endfield website DNA — technical handbook</a>`);
console.log(`pages variant: en-us/news/7013/index.html (+ root redirect) + handbook/handbook-bulletin.pages.json (base ${PAGES_BASE})`);
console.log(`built: ${chapters.length} chapters, ${CONTENT.length} chars of content, ${Object.keys(coverage).length}/${Object.keys(data.cssComponents).length} components embedded; original title was "${originalTitle}"`);
