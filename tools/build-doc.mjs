// Builds the downloadable edition of the handbook: a printed PDF in the layout of the supplied template
// (beige page, bold sans title page, serif body, light sans headings, grey running footer with page
// numbers) and a Markdown twin. The document is generated from the same chapter sources as the live
// handbook page, rendered in "doc" mode (semantic HTML instead of the article vocabulary), so the two
// never drift apart. Live components (specimens) are rendered with the site's own stylesheets and their
// verbatim markup is printed beneath them; the full beautified CSS and the readable first-party
// JavaScript form the code appendix. Large data archives (JSON, vendor chunks, captures) are NOT inlined:
// they are listed with their URLs on the hosted site.
//
// Output: handbook/Endfield-Site-DNA-Handbook.pdf, handbook/Endfield-Site-DNA-Handbook.md,
//         handbook/doc/ (the HTML the PDF was printed from and the intermediate PDFs; git-ignored).
import http from 'node:http';
import { readFileSync, writeFileSync, mkdirSync, existsSync, statSync, createReadStream, readdirSync } from 'node:fs';
import { join, extname } from 'node:path';
import { execFileSync } from 'node:child_process';
import { chromium } from 'playwright';
import { setMode, root, data, esc, p, h, a, link, t, SITE_URL } from './handbook/lib.mjs';
setMode('doc');
const { chapters: A } = await import('./handbook/chapters-a.mjs');
const { chapters: B } = await import('./handbook/chapters-b.mjs');
const { chapters: C } = await import('./handbook/chapters-c.mjs');
const { chapters: D } = await import('./handbook/chapters-d.mjs');
const { chapters: E } = await import('./handbook/chapters-e.mjs');
const chapters = [...A, ...B, ...C, ...E, ...D];
const OUT = join(root, 'handbook/doc'); mkdirSync(OUT, { recursive: true });
const TITLE = 'Endfield Website DNA';
const SUBTITLE = 'A technical handbook of the Arknights: Endfield official site — colours, type, layout, components, motion, sound and code — written so that a child site can be built from it';
const DATE = 'October 2026';
const REPO = 'https://github.com/Calyndrae/Endfield-Site-DNA';
const PORT = 8795;
const pm = id => `<span class="pm">[[pm:${id}]]</span>`;

// ---------- static server for the print run (repository root at /)
const types = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.png': 'image/png', '.jpg': 'image/jpeg', '.svg': 'image/svg+xml', '.woff2': 'font/woff2', '.woff': 'font/woff', '.md': 'text/markdown' };
const server = http.createServer((req, res) => { const path = decodeURIComponent(new URL(req.url, 'http://x').pathname); const file = join(root, path); if (!file.startsWith(root) || !existsSync(file) || !statSync(file).isFile()) { res.writeHead(404); return res.end(); } res.writeHead(200, { 'Content-Type': types[extname(file)] || 'application/octet-stream', 'Access-Control-Allow-Origin': '*' }); createReadStream(file).pipe(res); }).listen(PORT, '127.0.0.1');

// ---------- chapters (same assembly as the live page, including the coverage proof)
const used = new Set(); const rendered = {};
const render = (c, arg) => { try { return c.html(arg); } catch (e) { console.error('chapter', c.slug, e); return p('<strong>BUILD ERROR in chapter ' + esc(c.slug) + ':</strong> ' + esc(String(e.stack || e).slice(0, 400))); } };
for (const c of chapters) if (!c.late) { rendered[c.slug] = render(c); for (const m of rendered[c.slug].matchAll(/class="([^"]*)"/g)) for (const cls of m[1].split(/\s+/)) { const mm = cls.match(/^((?:__\d\d-)?[A-Za-z][A-Za-z0-9-]*?)_[A-Za-z0-9]+__[A-Za-z0-9_]{5}$/); if (mm && data.cssComponents[mm[1]]) used.add(mm[1] + '\u0000' + c.slug); } }
const coverage = {}; for (const u of used) { const [comp, slug] = u.split('\u0000'); (coverage[comp] = coverage[comp] || []).push(slug); }
const coverageDoc = { components: Object.keys(data.cssComponents).sort(), embedded: coverage, chapters: chapters.map(c => c.slug) };
for (const c of chapters) if (c.late) rendered[c.slug] = render(c, coverageDoc);

// ---------- code appendix sources
const cssFiles = readdirSync(join(root, 'source/beautified')).filter(f => f.endsWith('.css')).sort();
const cssMeta = f => { const comps = Object.entries(data.cssComponents).filter(([, v]) => (v.files || v.sources || []).includes && (v.files || v.sources || []).includes(f)).map(([k]) => k); const raw = join(root, 'capture/css', f); return { bytes: existsSync(raw) ? statSync(raw).size : null, comps }; };
const jsFiles = readdirSync(join(root, 'source/readable')).filter(f => f.endsWith('.js')).sort((x, y) => x.localeCompare(y));
const jsMeta = f => data.readable.find(r => r.file === f) || {};
const anchorOf = f => f.replace(/[^A-Za-z0-9]/g, '-');
const numbered = (text, long = true) => { const lines = text.replace(/\t/g, '  ').split('\n'); const w = String(lines.length).length; return `<pre class="code long"><code>${lines.map((l, i) => `<span class="ln">${String(i + 1).padStart(w, ' ')}</span>${esc(l.replace(/\s+$/, ''))}`).join('\n')}</code></pre>`; };

// ---------- data archives that are linked, not inlined
const human = n => n > 1048576 ? (n / 1048576).toFixed(1) + ' MB' : n > 1024 ? (n / 1024).toFixed(0) + ' KB' : n + ' B';
const dirSize = d => { let n = 0; const walk = x => { for (const e of readdirSync(x, { withFileTypes: true })) { const q = join(x, e.name); if (e.isDirectory()) walk(q); else n += statSync(q).size; } }; walk(d); return n; };
const archives = [
  ['analysis/css-rules.json', 'every CSS rule with its media context, component and source file'], ['analysis/colors.json', 'colour ladder with counts, properties and components'], ['analysis/typography.json', 'font-family / size / weight / line-height rules'], ['analysis/spacing.json', 'spacing values'], ['analysis/layers.json', 'z-index stack'], ['analysis/motion.json', 'transitions and keyframes'], ['analysis/breakpoints.json', 'media queries'], ['analysis/hover-states.json', 'measured hover diffs'], ['analysis/motion-timelines.json', 'measured entrance timelines'], ['analysis/components/', 'one JSON per component: CSS, markup, computed styles, hover, keyframes'], ['analysis/DNA.md', 'written specification'],
  ['capture/interactions.json', 'everything the interactions chapter measured'], ['capture/network-manifest.json', 'every archived response with URL, type, bytes and SHA-256'], ['capture/css-components.json', 'component → stylesheet map'], ['capture/fonts-and-css-assets.json', 'fonts and CSS-referenced assets'], ['capture/pages/', 'per-route DOM, portrait DOM, screenshots, computed styles, hover diffs, timelines, media logs'], ['capture/states/', 'interaction-state markup and screenshots'], ['capture/js/', 'the 31 original script chunks, verbatim'], ['capture/css/', 'the 12 original stylesheets, verbatim (minified)'], ['capture/fonts/', 'the woff2 files'], ['capture/assets/', 'small CSS/JS-referenced assets'],
  ['source/beautified/', 'prettier output of every chunk and stylesheet'], ['source/modules/', '708 split webpack modules'], ['source/module-map.json', 'every module named'], ['source/MODULE-MAP.md', 'the module map as a table'], ['source/stage1/', 'library aliases resolved, short names made unique'], ['source/rename-maps/', 'semantic rename maps with summaries'], ['source/readable/', 'the readable first-party modules (also printed in Appendix B)'],
  ['original/', 'the SSR responses the mirror serves'], ['verification/report.json', 'the 29-check verification report'], ['verification/pages-report.json', 'the static-host verification'], ['handbook/handbook-bulletin.json', 'the live handbook as article data'],
].map(([path, what]) => { const abs = join(root, path); const exists = existsSync(abs); const size = exists ? (statSync(abs).isDirectory() ? dirSize(abs) : statSync(abs).size) : 0; return { path, what, size, url: SITE_URL + '/' + path }; });

// ---------- document CSS (the template's look) + the site's own stylesheets for live specimens
// Geometry measured from the supplied template PDF (pdftohtml -xml, 1.5 units per pt): text column from
// 108pt to 555pt, headings at 54pt from the top, body 11.3pt on a 17.7pt line, section heading 24pt and
// sub-heading 15.3pt in a humanist sans, footer 8pt grey (#919497) with the running title at 54pt from the
// left and the page number flush with the column's right edge, link colour #205c9d, page colour #e3dcd2.
// Fonts: Noto Serif for text (requested), Noto Sans for headings and the footer (the template's Lucida Sans role).
const fontFace = (fam, file, weight, style = 'normal') => `@font-face{font-family:'${fam}';src:url(${file}) format('woff2');font-weight:${weight};font-style:${style};font-display:block}`;
const docCss = `
${fontFace('Noto Serif', '/tools/fonts/noto-serif-latin-400-normal.woff2', 400)}${fontFace('Noto Serif', '/tools/fonts/noto-serif-latin-400-italic.woff2', 400, 'italic')}${fontFace('Noto Serif', '/tools/fonts/noto-serif-latin-700-normal.woff2', 700)}${fontFace('Noto Serif', '/tools/fonts/noto-serif-latin-ext-400-normal.woff2', 400)}${fontFace('Noto Serif', '/tools/fonts/noto-serif-latin-ext-700-normal.woff2', 700)}
${fontFace('Noto Sans', '/tools/fonts/noto-sans-latin-300-normal.woff2', 300)}${fontFace('Noto Sans', '/tools/fonts/noto-sans-latin-400-normal.woff2', 400)}${fontFace('Noto Sans', '/tools/fonts/noto-sans-latin-500-normal.woff2', 500)}${fontFace('Noto Sans', '/tools/fonts/noto-sans-latin-700-normal.woff2', 700)}${fontFace('Noto Sans', '/tools/fonts/noto-sans-latin-800-normal.woff2', 800)}${fontFace('Noto Sans', '/tools/fonts/noto-sans-latin-ext-400-normal.woff2', 400)}
@page { size: Letter; margin: 54pt 57pt 83pt 108pt; }
html { background: #e3dcd2; -webkit-print-color-adjust: exact; print-color-adjust: exact; font-size: 9px; overflow: visible !important; }
html, body { margin: 0 !important; padding: 0 !important; -webkit-user-select: text !important; user-select: text !important; }
body.doc { font-family: 'Noto Serif', serif !important; font-size: 11.3pt; line-height: 17.7pt; color: #000000; text-align: left; hyphens: none; }
h1 { font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 24pt; line-height: 28pt; margin: 0 0 20pt; }
h2.chapter { page-break-before: always; font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 24pt; line-height: 28pt; margin: 0 0 20pt; }
h2.chapter .num, h1 .num { display: block; font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 8pt; line-height: 11pt; letter-spacing: .18em; color: #919497; margin-bottom: 8pt; text-transform: uppercase; }
h3 { font-family: 'Noto Sans', sans-serif; font-weight: 400; font-size: 15.3pt; line-height: 19pt; margin: 34pt 0 19pt; page-break-after: avoid; }
h2.chapter + h3, h2.chapter + section > h3:first-child { margin-top: 0; }
h4 { font-family: 'Noto Sans', sans-serif; font-weight: 500; font-size: 11.3pt; line-height: 15pt; margin: 20pt 0 8pt; page-break-after: avoid; }
p { margin: 0 0 14pt; }
p.ind1 { margin-left: 1.2em } p.ind2 { margin-left: 2.4em } p.ind3 { margin-left: 3.6em } p.ind4 { margin-left: 4.8em } p.ind5 { margin-left: 6em } p.ind6 { margin-left: 7.2em }
em { font-style: italic; }
a { color: #205c9d; text-decoration: underline; text-underline-offset: 2px; word-break: break-word; }
.tag .lbl { font-family: 'Noto Sans', sans-serif; font-size: 7.2pt; font-weight: 500; letter-spacing: .12em; padding: 1.5pt 4.5pt 1pt; border-radius: 2pt; margin-right: 5pt; vertical-align: 1.5pt; white-space: nowrap; }
.observed .lbl { background: #191919; color: #ffffff; } .measured .lbl { background: #fffa00; color: #191919; } .inferred .lbl { border: 1px solid #191919; color: #191919; padding-top: .5pt; } .rule .lbl { background: #cdc6b9; color: #191919; }
pre.code { font-family: 'DejaVu Sans Mono', 'Liberation Mono', monospace; font-size: 7.3pt; line-height: 10pt; background: #ede7dc; border: 1px solid #d3ccbf; border-radius: 2pt; padding: 7pt 9pt; white-space: pre-wrap; word-break: break-all; page-break-inside: avoid; margin: 4pt 0 14pt; color: #191919; text-align: left; }
pre.code.long { page-break-inside: auto; }
pre.code .ln { display: inline-block; width: 3.2em; color: #919497; user-select: none; }
table.data { border-collapse: collapse; width: 100%; font-size: 8.6pt; line-height: 11.5pt; margin: 4pt 0 16pt; text-align: left; }
table.data th { text-align: left; font-family: 'Noto Sans', sans-serif; font-weight: 500; font-size: 8pt; letter-spacing: .03em; border-bottom: 1pt solid #000; padding: 4pt 5pt; vertical-align: bottom; }
table.data td { border-bottom: .5pt solid #c9c2b6; padding: 3.5pt 5pt; vertical-align: top; word-break: break-word; }
table.data td pre.code { margin: 2pt 0; }
figure { margin: 0; }
figure.shot { margin: 4pt 0 16pt; page-break-inside: avoid; }
figure.shot img { display: block; max-width: 100%; max-height: 7.2in; border: 1px solid #c9c2b6; background: #fff; }
figcaption, p.note, details summary { font-family: 'Noto Sans', sans-serif; font-size: 8pt; line-height: 11pt; color: #5f5950; margin: 4pt 0 0; }
figure.specimen { margin: 6pt 0 16pt; }
figure.specimen figcaption { margin: 0 0 4pt; }
figure.specimen .frame { position: relative; background: #ffffff; border: 1px solid #c9c2b6; padding: 12px; overflow: hidden; page-break-inside: avoid; }
figure.specimen details { margin-top: 5pt; }
figure.specimen details summary { margin-bottom: 3pt; cursor: default; }
figure.specimen details pre.code { page-break-inside: auto; }
.toc .row { display: flex; align-items: baseline; margin: 0 0 3pt; font-size: 10.2pt; line-height: 14pt; }
.toc .row.sec { margin-top: 12pt; font-family: 'Noto Sans', sans-serif; font-weight: 500; font-size: 9.6pt; }
.toc .row.sub { padding-left: 16pt; font-size: 9pt; }
.toc .lbl { flex: 0 1 auto; }
.toc .dots { flex: 1 1 auto; border-bottom: 1px dotted #919497; margin: 0 6pt; min-width: 12pt; height: .72em; }
.toc .pg { flex: 0 0 auto; font-family: 'Noto Sans', sans-serif; font-size: 8.8pt; }
.toc a { color: inherit; text-decoration: none; }
.index { column-count: 2; column-gap: 26pt; font-size: 8.8pt; line-height: 12pt; }
.index .entry { break-inside: avoid; margin: 0 0 1.6pt; padding-left: 10pt; text-indent: -10pt; }
.index .entry .pgs { color: #5f5950; }
.index h4 { column-span: all; }
h1, h2.chapter, h3 { position: relative; }
.pm { position: absolute; left: 0; top: 100%; font-family: 'Liberation Mono', monospace; font-size: 6pt; line-height: 1; color: #e3dcd2; white-space: nowrap; pointer-events: none; }
section.appendix h3 { page-break-before: always; }
.filebox { font-family: 'Noto Sans', sans-serif; font-size: 8pt; line-height: 11pt; color: #5f5950; margin: -12pt 0 10pt; }
hr.sep { border: 0; border-top: 1px solid #919497; margin: 16pt 0; }
`;
const siteCss = readdirSync(join(root, 'capture/css')).filter(f => f.endsWith('.css')).map(f => `<link rel="stylesheet" href="/capture/css/${f}">`).join('');

// ---------- assembling the body
const tocRows = [];
const addToc = (id, label, kind = 'row') => tocRows.push({ id, label, kind });
let body = '';
// contents
body += `<section class="toc" id="contents"><h1>${pm('contents')}Contents</h1><div id="toc-rows"></div></section>`;
// preface
addToc('preface', 'Preface — what this handbook is and how to read it', 'sec');
body += `<section class="chapter"><h2 class="chapter" id="preface"><span class="num">Preface</span>${pm('preface')}What this handbook is and how to read it</h2>`;
body += t('This handbook describes one website, the official Arknights: Endfield site (https://endfield.gryphline.com/en-us), at the depth of its public pages: the home page, the operator catalogue, the news index and a news article. It is written so that a reader can build a "child" site of the same family: same colours, type, rhythm, components, motion, sound and rendering behaviour. Nothing in it is invented. Every value was read from the shipped code, measured in a headless browser on the live site, or is marked as an interpretation.');
body += p('<strong>Evidence tags.</strong> Every claim carries one of four labels. <span class="tag observed"><span class="lbl">OBSERVED</span></span> means read directly from shipped code, stylesheets or server responses. <span class="tag measured"><span class="lbl">MEASURED</span></span> means reported by headless Chromium driving the live site on 2026-10-03: clicks, hovers, drags, keyboard, resizes and the real-time calculations re-run in the page. <span class="tag inferred"><span class="lbl">INFERRED</span></span> is interpretation and never a fact. <span class="tag rule"><span class="lbl">RULE FOR A CHILD SITE</span></span> is a transferable instruction derived from the three above.');
body += p('<strong>Specimens.</strong> Where a component could be captured verbatim from the live page it is shown rendered with the site\'s own stylesheets (the same twelve files printed in Appendix A), followed by its exact markup. The only normalisation applied is the removal of inline opacity, transform, visibility and transition values that the site\'s animation code writes during entrances, so each specimen is in its settled state. Specimens are rendered at the 1440×900 scale (root font-size 9px), so measurements quoted "at 1440×900" match what is printed.');
body += p('<strong>Code.</strong> Short excerpts of the reconstructed, readable JavaScript sit next to the behaviour they produce; the complete modules are in Appendix B and the complete stylesheets in Appendix A. Minified identifiers were renamed scope-aware; values, strings and control flow are unchanged. Vendor libraries (React 19, Next.js, framer-motion, anime.js 3.2.1, swiper, three.js r178, lottie-web 5.12.2, axios, dayjs, zustand, @emotion, the Gryphline web SDK) are identified, not reprinted.');
body += p(`<strong>Where the files are.</strong> The live single-page edition of this handbook, with the real runtime around it, is at ${a(SITE_URL + '/en-us/news/7013/', SITE_URL + '/en-us/news/7013/')}. Every archive this document links to (data, captures, chunks, module maps) is hosted at the same site and listed with sizes in Appendix C; large data files are deliberately not reprinted here. The source repository is ${a(REPO, REPO)}.`);
body += p('<strong>Order of chapters.</strong> Chapters 01–09 establish the frame: scope, routes, technical structure, the rem canvas, the layer stack, colour, typography, rhythm and alignment. Chapters 10–21 go through the home page section by section. Chapters 22–31 cover the catalogue, the news pages, controls, hover, motion, audio, imagery, responsive behaviour and localisation. Chapter 32 is the live-interaction record. Chapters 33–36 cover the JavaScript, the unrendered components, the coverage proof and the blueprint for a child site. An index of components, files, fonts, colours and terms follows the chapters.');
body += '</section>';
// chapters
chapters.forEach((c, i) => { const n = String(i + 1).padStart(2, '0'); addToc(c.slug, `${n}  ${c.title}`); body += `<section class="chapter"><h2 class="chapter" id="${esc(c.slug)}"><span class="num">Chapter ${n}</span>${pm(c.slug)}${esc(c.title)}</h2>${rendered[c.slug]}</section>`; });
// index placeholder
addToc('index', 'Index', 'sec');
body += `<section class="chapter"><h2 class="chapter" id="index"><span class="num">Index</span>${pm('index')}Components, files, fonts, colours and terms</h2><p>Page numbers refer to the chapters (the code appendices are not indexed; use Contents for them). Identifiers are matched exactly; terms are matched regardless of case.</p><div class="index" id="index-body"></div></section>`;
// appendix A: CSS
addToc('appendix-a', 'Appendix A — The twelve stylesheets, complete and beautified', 'sec');
body += `<section class="chapter appendix" id="appendix-a"><h2 class="chapter"><span class="num">Appendix A</span>${pm('appendix-a')}The twelve stylesheets, complete and beautified</h2>`;
body += t('These are the site\'s own CSS files, archived verbatim from the CDN and reformatted with prettier (no rule changed, no selector renamed). Class names carry the CSS-module hash the site ships with; a child site built with CSS modules will generate its own hashes, so copy the rules, not the hashed names. Font and image URLs point at the original CDN.');
body += `<table class="data"><thead><tr><th>#</th><th>File</th><th>Minified bytes</th><th>Lines (beautified)</th><th>Components styled</th></tr></thead><tbody>${cssFiles.map((f, i) => { const m = cssMeta(f); const lines = readFileSync(join(root, 'source/beautified', f), 'utf8').split('\n').length; const comps = Object.entries(data.cssComponents).filter(([, v]) => JSON.stringify(v).includes(f)).map(([k]) => k); return `<tr><td>A.${i + 1}</td><td><a href="#css-${anchorOf(f)}">${esc(f)}</a></td><td>${m.bytes ?? ''}</td><td>${lines}</td><td>${esc(comps.join(', '))}</td></tr>`; }).join('')}</tbody></table>`;
cssFiles.forEach((f, i) => { const src = readFileSync(join(root, 'source/beautified', f), 'utf8'); addToc('css-' + anchorOf(f), `A.${i + 1}  ${f}`, 'sub'); body += `<h3 id="css-${anchorOf(f)}">${pm('css-' + anchorOf(f))}A.${i + 1} ${esc(f)}</h3><p class="filebox">${esc(SITE_URL + '/capture/css/' + f)} · ${src.split('\n').length} lines</p>${numbered(src)}`; });
body += '</section>';
// appendix B: readable JS
addToc('appendix-b', 'Appendix B — The readable first-party JavaScript, complete', 'sec');
body += `<section class="chapter appendix" id="appendix-b"><h2 class="chapter"><span class="num">Appendix B</span>${pm('appendix-b')}The readable first-party JavaScript, complete</h2>`;
body += t('Each file is one webpack module of the site\'s own code, split out of its chunk, with every minified identifier renamed to a meaningful one (library aliases resolved from the module map, CSS modules as styles, locals named for what they hold). The header comment of each file states its origin, exports and a summary. Vendor libraries are not reprinted; their names and versions are in chapter 33.');
body += `<table class="data"><thead><tr><th>#</th><th>Module</th><th>File</th><th>Chunk</th><th>Lines</th></tr></thead><tbody>${jsFiles.map((f, i) => { const m = jsMeta(f); const lines = readFileSync(join(root, 'source/readable', f), 'utf8').split('\n').length; return `<tr><td>B.${i + 1}</td><td>${esc(m.name || f.replace(/\.\d+\.js$/, ''))}</td><td><a href="#js-${anchorOf(f)}">${esc(f)}</a></td><td>${esc(m.chunk || '')}</td><td>${lines}</td></tr>`; }).join('')}</tbody></table>`;
jsFiles.forEach((f, i) => { const src = readFileSync(join(root, 'source/readable', f), 'utf8'); const m = jsMeta(f); addToc('js-' + anchorOf(f), `B.${i + 1}  ${f}`, 'sub'); body += `<h3 id="js-${anchorOf(f)}">${pm('js-' + anchorOf(f))}B.${i + 1} ${esc(m.name || f)} <span style="font-weight:400;color:#5f5950">— ${esc(f)}</span></h3><p class="filebox">${esc(SITE_URL + '/source/readable/' + f)} · chunk ${esc(m.chunk || '?')} · ${src.split('\n').length} lines · ${m.renames ?? '?'} identifiers renamed</p>${m.summary ? p(esc(m.summary)) : ''}${numbered(src)}`; });
body += '</section>';
// appendix C: archives
addToc('appendix-c', 'Appendix C — Data archives and captures (hosted, not reprinted)', 'sec');
body += `<section class="chapter appendix" id="appendix-c"><h2 class="chapter"><span class="num">Appendix C</span>${pm('appendix-c')}Data archives and captures (hosted, not reprinted)</h2>`;
body += t('The analysis and capture archives behind the chapters are large machine-readable files. Printing them would add thousands of pages without adding understanding, so they stay on the hosted site and are listed here with their sizes. Every link in the chapters that points at one of these files resolves to the same host.');
body += `<table class="data"><thead><tr><th>Path</th><th>What it holds</th><th>Size</th><th>URL</th></tr></thead><tbody>${archives.map(x => `<tr><td>${esc(x.path)}</td><td>${esc(x.what)}</td><td>${human(x.size)}</td><td><a href="${esc(x.url)}">${esc(x.url)}</a></td></tr>`).join('')}</tbody></table>`;
body += p(`The complete repository, including the tools that produced every file above and this document, is at ${a(REPO, REPO)}.`);
body += '</section>';

// ---------- index terms
const colorTerms = (Array.isArray(data.colors) ? data.colors : []).slice(0, 28).map(c => c.value).filter(v => /^#/.test(v));
const identifiers = [...Object.keys(data.cssComponents).sort(), ...jsFiles.map(f => f.replace(/\.\d+\.js$/, '')), 'HarmonyOS Sans', 'Gilroy', 'Novecento', 'SpaceGrotesk', 'Roboto', 'Protest Strike', 'SansRegular', 'SansMedium', 'SansBold', 'SansBlack', 'React', 'Next.js', 'framer-motion', 'anime.js', 'swiper', 'three.js', 'lottie', 'axios', 'dayjs', 'zustand', 'emotion', 'Gryphline', 'trans-video', 'WebGL', 'webpack', 'RSC', 'ARIA', 'YouTube', 'Cloudflare', ...colorTerms];
const terms = ['rem canvas', 'root font-size', 'orientation', 'portrait', 'landscape', 'breakpoint', 'media query', 'z-index', 'layer', 'loader', 'loading screen', 'curtain', 'navigation rail', 'rail', 'footer', 'pagination', 'dropdown', 'carousel', 'modal', 'hover', 'timeline', 'entrance', 'stagger', 'easing', 'cubic-bezier', 'keyframes', 'transition', 'transform', 'opacity', 'clip-path', 'mask-image', 'gradient', 'hatched', 'dotted', 'texture', 'ghost', 'calendar', 'LORE', 'point cloud', 'transparent video', 'alpha', 'mute', 'sound', 'click cue', 'background music', 'cookie', 'consent', 'locale', 'i18n', 'language', 'hash', 'scroll', 'drag', 'keyboard', 'focus', 'mobile menu', 'hamburger', 'avatar', '2D/3D', 'operator', 'catalogue', 'filter', 'name-fit', 'news', 'article', 'share', 'back-to-top', 'typography', 'colour', 'spacing', 'alignment', 'grid', 'canvas', 'specimen', 'coverage', 'blueprint', 'child site', 'rounded', 'border-radius', 'box-shadow', 'drop-shadow', 'SVG', 'icon', 'lottie', 'video', 'image', 'webp', 'png', 'jpg', 'preload', 'lazy', 'hydration', 'App Router', 'CSS modules', 'chunk', 'SDK', 'analytics', 'tracking', 'download', 'launcher', 'store badge', 'protocol', 'privacy', 'terms'];

// ---------- page helpers
const htmlDoc = (inner, extraHead = '') => `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(TITLE)} — technical handbook</title>${siteCss}<style>${docCss}</style>${extraHead}</head><body class="doc">${inner}</body></html>`;
const coverHtml = () => `<!doctype html><html lang="en"><head><meta charset="utf-8"><style>${docCss}@page{margin:0} body.doc{position:relative;height:792pt;width:612pt;overflow:hidden}
.abs{position:absolute} .ctitle{left:0;right:0;top:146pt;text-align:center;font-family:'Noto Sans',sans-serif;font-weight:800;font-size:42pt;line-height:46pt;letter-spacing:-0.015em;color:#000}
.pub{left:85pt;top:264pt;font-size:11.3pt;line-height:15.7pt} .auth{left:391pt;top:259pt;width:170pt;font-size:11.3pt;line-height:15.7pt}
.ackh{left:85pt;top:641pt;font-size:11.3pt;line-height:15.7pt} .ack{left:86pt;top:657pt;width:412pt;font-family:'Noto Sans',sans-serif;font-size:8pt;line-height:11pt}
.lead{left:83pt;top:701pt;font-family:'Noto Sans',sans-serif;font-size:8pt;line-height:11pt}
.mark{left:0;right:0;top:737pt;text-align:center;font-family:'Noto Sans',sans-serif;font-weight:800;font-size:14pt;line-height:18pt;letter-spacing:.28em;color:#000}</style></head><body class="doc">
<div class="abs ctitle">${esc(TITLE)}</div>
<div class="abs pub">Published ${DATE}</div>
<div class="abs auth">Author<br>Calyndrae,* with the Endfield-Site-DNA toolchain (archive, deobfuscation, live measurement, handbook build, verification)</div>
<div class="abs ackh">Acknowledgements</div>
<div class="abs ack">The subject of this handbook is the official Arknights: Endfield website by Hypergryph / Gryphline. All markup, stylesheets, scripts, fonts, images, sounds and names reproduced here belong to their owners and are reproduced for the study of the site's construction; nothing in this document was invented.</div>
<div class="abs lead">*Measurements taken 2026-10-03 against the live site, which may change after that date.</div>
<div class="abs mark">CALYNDRAE</div></body></html>`;
const footerTemplate = `<div style="width:100%;height:83pt;box-sizing:border-box;padding:9pt 54pt 0 54pt;font-family:'Liberation Sans',Arial,sans-serif;font-size:8pt;line-height:10pt;color:#919497;display:flex;justify-content:space-between;align-items:flex-start"><span>${esc(TITLE)}—${DATE}</span><span class="pageNumber"></span></div>`;

const settleFrames = async page => { await page.evaluate(() => { for (const f of document.querySelectorAll('figure.specimen .frame')) { const kids = [...f.querySelectorAll('*')]; let maxBottom = 0, maxRight = 0; const fr = f.getBoundingClientRect(); for (const k of kids) { const r = k.getBoundingClientRect(); if (r.width && r.height) { maxBottom = Math.max(maxBottom, r.bottom - fr.top); maxRight = Math.max(maxRight, r.right - fr.left); } } if (f.clientHeight < 24 && maxBottom > 0) f.style.minHeight = Math.ceil(maxBottom + 12) + 'px'; const inner = f.clientWidth - 24; if (maxRight - 12 > inner && inner > 0) f.style.zoom = String(Math.max(0.3, inner / (maxRight - 12))); } }); };
async function print(page, html, out, withFooter) { writeFileSync(join(OUT, 'index.html'), html); await page.goto(`http://127.0.0.1:${PORT}/handbook/doc/index.html`, { waitUntil: 'load', timeout: 180000 }); await page.evaluate(() => Promise.all([...document.fonts].map(f => f.load().catch(() => null)))); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(1500); await settleFrames(page); await page.waitForTimeout(500); await page.pdf({ path: out, printBackground: true, preferCSSPageSize: true, displayHeaderFooter: withFooter, headerTemplate: '<span></span>', footerTemplate: withFooter ? footerTemplate : '<span></span>', outline: true, timeout: 0 }); }
const pagesOf = pdf => execFileSync('pdftotext', [pdf, '-'], { maxBuffer: 1 << 30 }).toString().split('\f');
const tocHtml = pages => tocRows.map(r => `<div class="row ${r.kind}"><a class="lbl" href="#${esc(r.id)}">${esc(r.label)}</a><span class="dots"></span><span class="pg">${pages ? (pages[r.id] ?? '') : ''}</span></div>`).join('');
const indexHtml = (pageTexts, lastPage) => { const texts = pageTexts.slice(0, lastPage); const find = (term, exact) => { const re = exact ? new RegExp('(^|[^A-Za-z0-9_])' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![A-Za-z0-9_])') : new RegExp('(^|[^A-Za-z0-9])' + term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + '(?![A-Za-z0-9])', 'i'); const out = []; texts.forEach((tx, i) => { if (re.test(tx)) out.push(i + 1); }); return out; }; const entries = []; for (const term of identifiers) { const pg = find(term, true); if (pg.length) entries.push([term, pg]); } for (const term of terms) { const pg = find(term, false); if (pg.length) entries.push([term, pg]); } entries.sort((x, y) => x[0].localeCompare(y[0], 'en', { sensitivity: 'base' })); const fmt = pg => pg.length > 14 ? pg.slice(0, 12).join(', ') + ` … (${pg.length} pages)` : pg.join(', '); let cur = ''; let html = ''; for (const [term, pg] of entries) { const letter = /^[#0-9]/.test(term) ? '#' : term[0].toUpperCase(); if (letter !== cur) { cur = letter; html += `<h4>${letter}</h4>`; } html += `<div class="entry">${esc(term)} <span class="pgs">${fmt(pg)}</span></div>`; } return { html, count: entries.length }; };

// ---------- pass 1: layout to learn the page numbers
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
const bodyHtml = html => html.replace('<div id="toc-rows"></div>', '<div id="toc-rows">' + tocHtml(null) + '</div>');
await print(page, htmlDoc(bodyHtml(body)), join(OUT, 'body-pass1.pdf'), true);
let texts = pagesOf(join(OUT, 'body-pass1.pdf'));
const pageOf = {}; texts.forEach((tx, i) => { for (const m of tx.matchAll(/\[\[pm:([A-Za-z0-9_-]+)\]\]/g)) if (!(m[1] in pageOf)) pageOf[m[1]] = i + 1; });
const missing = tocRows.filter(r => !(r.id in pageOf)).map(r => r.id); if (missing.length) console.warn('markers not found for', missing);
const idx = indexHtml(texts, (pageOf.index || texts.length) - 1);
console.log(`pass 1: ${texts.length} pages; index entries ${idx.count}; chapters start at page ${pageOf[chapters[0].slug]}, index at ${pageOf.index}, appendix A at ${pageOf['appendix-a']}, B at ${pageOf['appendix-b']}, C at ${pageOf['appendix-c']}`);
// ---------- pass 2: numbers in place (same pagination: the TOC and index keep their line counts)
const final = htmlDoc(body.replace('<div id="toc-rows"></div>', '<div id="toc-rows">' + tocHtml(pageOf) + '</div>').replace('<div class="index" id="index-body"></div>', '<div class="index" id="index-body">' + idx.html + '</div>'));
await print(page, final, join(OUT, 'body.pdf'), true);
const texts2 = pagesOf(join(OUT, 'body.pdf'));
const pageOf2 = {}; texts2.forEach((tx, i) => { for (const m of tx.matchAll(/\[\[pm:([A-Za-z0-9_-]+)\]\]/g)) if (!(m[1] in pageOf2)) pageOf2[m[1]] = i + 1; });
const drift = Object.keys(pageOf).filter(k => pageOf[k] !== pageOf2[k]);
if (drift.length) { console.warn('pagination drifted for', drift.slice(0, 10), '→ third pass'); const final3 = htmlDoc(body.replace('<div id="toc-rows"></div>', '<div id="toc-rows">' + tocHtml(pageOf2) + '</div>').replace('<div class="index" id="index-body"></div>', '<div class="index" id="index-body">' + indexHtml(texts2, (pageOf2.index || texts2.length) - 1).html + '</div>')); await print(page, final3, join(OUT, 'body.pdf'), true); }
// cover (no footer) + body → final
writeFileSync(join(OUT, 'cover.html'), coverHtml());
await page.goto(`http://127.0.0.1:${PORT}/handbook/doc/cover.html`, { waitUntil: 'load' }); await page.evaluate(() => Promise.all([...document.fonts].map(f => f.load().catch(() => null)))); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(800);
await page.pdf({ path: join(OUT, 'cover.pdf'), printBackground: true, preferCSSPageSize: true });
await browser.close(); server.close();
const PDF = join(root, 'handbook/Endfield-Site-DNA-Handbook.pdf');
execFileSync('pdfunite', [join(OUT, 'cover.pdf'), join(OUT, 'body.pdf'), PDF]);
const info = execFileSync('pdfinfo', [PDF]).toString();
console.log('PDF:', PDF, (statSync(PDF).size / 1048576).toFixed(1) + ' MB', info.match(/Pages:\s+(\d+)/)[1] + ' pages');

// ---------- Markdown twin (from the same HTML)
const un = s => String(s).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&');
const inline = s => un(String(s).replace(/<span class="pm">[^<]*<\/span>/g, '').replace(/<span class="lbl">([^<]*)<\/span>/g, '**$1**').replace(/<strong>([\s\S]*?)<\/strong>/g, '**$1**').replace(/<em>([\s\S]*?)<\/em>/g, '_$1_').replace(/<code>([\s\S]*?)<\/code>/g, '`$1`').replace(/<a href="([^"]*)">([\s\S]*?)<\/a>/g, (m, href, text) => `[${text.replace(/<[^>]+>/g, '')}](${href.startsWith('/') ? SITE_URL + href : href})`).replace(/<br\s*\/?>/g, '  \n').replace(/<[^>]+>/g, '')).replace(/[ \t]+\n/g, '\n').trim();
const cell = s => inline(s).replace(/\|/g, '\\|').replace(/\s*\n\s*/g, ' ');
const tableMd = html => { const rows = [...html.matchAll(/<tr>([\s\S]*?)<\/tr>/g)].map(r => [...r[1].matchAll(/<t[hd][^>]*>([\s\S]*?)<\/t[hd]>/g)].map(c => cell(c[1]))); if (!rows.length) return ''; const w = Math.max(...rows.map(r => r.length)); const pad = r => { while (r.length < w) r.push(''); return r; }; return pad(rows[0]).map(c => `| ${c} `).join('') + '|\n' + rows[0].map(() => '| --- ').join('') + '|\n' + rows.slice(1).map(r => pad(r).map(c => `| ${c} `).join('') + '|').join('\n') + '\n\n'; };
function toMd(html) { let md = ''; const re = /<figure class="specimen">([\s\S]*?)<\/figure>|<figure class="shot">([\s\S]*?)<\/figure>|<pre class="code[^"]*"><code>([\s\S]*?)<\/code><\/pre>|<table[^>]*>([\s\S]*?)<\/table>|<h1>([\s\S]*?)<\/h1>|<h2[^>]*>([\s\S]*?)<\/h2>|<h3[^>]*>([\s\S]*?)<\/h3>|<h4>([\s\S]*?)<\/h4>|<p[^>]*>([\s\S]*?)<\/p>|<div class="(?:row|entry)[^"]*">([\s\S]*?)<\/div>/g; let m; while ((m = re.exec(html))) { if (m[1] !== undefined) { const cap = (m[1].match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || ''; const note = (m[1].match(/<p class="note">([\s\S]*?)<\/p>/) || [])[1]; const mk = (m[1].match(/<pre class="code"><code>([\s\S]*?)<\/code><\/pre>/) || [])[1] || ''; md += `**${inline(cap)}**\n\n` + (note ? inline(note) + '\n\n' : '') + '```html\n' + un(mk) + '\n```\n\n'; } else if (m[2] !== undefined) { const src = (m[2].match(/src="([^"]*)"/) || [])[1] || ''; const cap = (m[2].match(/<figcaption>([\s\S]*?)<\/figcaption>/) || [])[1] || ''; md += `![${inline(cap)}](${src.startsWith('/') ? SITE_URL + src : src})\n\n`; } else if (m[3] !== undefined) { const text = un(m[3].replace(/<span class="ln">[^<]*<\/span>/g, '')); md += '```' + (/^\s*[.@:#][^\n]*\{|^\s*\/\*/.test(text) && !/\b(function|const|let|var|=>)\b/.test(text.slice(0, 400)) ? 'css' : 'js') + '\n' + text + '\n```\n\n'; } else if (m[4] !== undefined) { md += /class="data"/.test(m[0]) ? tableMd(m[4]) : '```html\n' + un(m[0]) + '\n```\n\n'; } else if (m[5] !== undefined) md += `# ${inline(m[5])}\n\n`; else if (m[6] !== undefined) { const num = (m[6].match(/<span class="num">([^<]*)<\/span>/) || [])[1]; md += `## ${num ? num + ' — ' : ''}${inline(m[6].replace(/<span class="num">[^<]*<\/span>/, ''))}\n\n`; } else if (m[7] !== undefined) md += `### ${inline(m[7])}\n\n`; else if (m[8] !== undefined) md += `#### ${inline(m[8])}\n\n`; else if (m[9] !== undefined) { const text = inline(m[9]); if (text) md += text + '\n\n'; } else if (m[10] !== undefined) { const text = inline(m[10]); if (text) md += '- ' + text + '\n'; } } return md.replace(/\n{3,}/g, '\n\n'); }
const md = `# ${TITLE}\n\n${SUBTITLE}\n\nPublished ${DATE} · Author: Calyndrae · Live edition: ${SITE_URL}/en-us/news/7013/ · Repository: ${REPO}\n\n` + toMd(final.replace(/<div class="(?:row)[^"]*"><a class="lbl" href="([^"]*)">([^<]*)<\/a><span class="dots"><\/span><span class="pg">([^<]*)<\/span><\/div>/g, (mm, href, label, pg) => `<div class="row"><a href="${href}">${label}</a>${pg ? ' · p. ' + pg : ''}</div>`));
const MD = join(root, 'handbook/Endfield-Site-DNA-Handbook.md'); writeFileSync(MD, md);
console.log('MD:', MD, (statSync(MD).size / 1048576).toFixed(2) + ' MB', md.split('\n').length + ' lines');
