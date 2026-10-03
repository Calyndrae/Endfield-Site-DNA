// Generate CHUNK_MAP.md, COVERAGE.md and the DNA token appendix tables from the analysis data.
import { readFileSync, writeFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join } from 'node:path';
import { createHash } from 'node:crypto';
const root = new URL('..', import.meta.url).pathname;
const J = p => JSON.parse(readFileSync(join(root, p), 'utf8'));
const manifest = J('capture/js-css-manifest.json'); const pages = readdirSync(join(root, 'capture/pages')).filter(p => existsSync(join(root, 'capture/pages', p, 'page.json'))).map(p => [p, J(`capture/pages/${p}/page.json`)]);
// CHUNK_MAP
let md = '# Chunk and stylesheet map\n\nEvery script and stylesheet loaded by the depth-1 pages, archived verbatim in `capture/js` and `capture/css` (SHA-256 of the archived bytes). Beautified copies: `source/beautified/`; split modules: `source/modules/`; names and roles: `source/MODULE-MAP.md`.\n\n| Page | File | Bytes | SHA-256 | Local copy |\n| --- | --- | ---: | --- | --- |\n';
for (const m of manifest.sort((a, b) => a.path.localeCompare(b.path))) { const used = pages.filter(([p, x]) => (x.scripts || []).includes(m.url) || (x.stylesheets || []).includes(m.url)).map(([p]) => p.replace('en-us', '/').replace('_', '/')).join(', '); md += `| ${used || '(route chunk)'} | [${m.path.split('/').pop()}](${m.url}) | ${m.bytes} | \`${m.sha256}\` | ${m.path} |\n`; }
md += '\n## Pages captured (depth 1 from /en-us)\n\n| Page | Loader | Root rem | Components | Errors |\n| --- | --- | --- | --- | --- |\n' + pages.map(([p, x]) => `| ${x.url} | ${x.loaderGone ? x.loaderMs + ' ms' : 'no'} | ${x.rootFontSize} / ${x.mobile.rootFontSize} | ${new Set(x.components.map(c => c.split('_')[0])).size} | ${x.errors.length} |`).join('\n') + '\n';
writeFileSync(join(root, 'CHUNK_MAP.md'), md);
// COVERAGE
const cov = J('handbook/coverage.json'); const comps = J('analysis/components-summary.json'); const cssComponents = J('capture/css-components.json');
let c = '# Component coverage\n\nEvery CSS-module component of the live site (depth-1 en-us pages), the pages it renders on, and how the single-page handbook uses it. "specimen" = verbatim live markup embedded in the handbook and styled by the live stylesheets; "live" = the component is part of the article shell the handbook runs in; "screenshot + CSS" = shown by capture and exact rules (either nested-scoped CSS that only applies inside its section, or an `<img>` rule conflict with the article template); "CSS only" = declared in the stylesheets but never rendered on the captured pages.\n\n| Component | Rules | Stylesheet(s) | Renders on | Hover diffs | In the handbook |\n| --- | ---: | --- | --- | ---: | --- |\n';
const live = new Set(['Header', 'footer', 'SectionViewer', 'sections', '__20-NoticeDetail', 'HallowText', 'Media', 'ModalFrame', 'ReserveModal', 'UserModal']);
for (const comp of Object.keys(cssComponents).sort()) { const s = comps.find(x => x.component === comp) || {}; const emb = cov.embedded[comp] || []; const how = emb.length ? `specimen (${emb.map(x => '#' + x).join(', ')})` : live.has(comp) ? 'live in the article shell' : (s.markup ? 'screenshot + CSS' : 'CSS only (not rendered at depth 1)'); c += `| ${comp} | ${s.rules ?? ''} | ${(cssComponents[comp].files || []).join(', ')} | ${(s.appearsOn || []).map(p => p.replace('en-us', '/').replace(/_/g, '/')).join(', ') || (s.markupPage ? s.markupPage.replace('@mobile', ' (portrait)') : '—')} | ${s.hoverDiffs ?? 0} | ${how} |\n`; }
c += `\nEmbedded components: ${Object.keys(cov.embedded).length}; live shell components: ${[...live].filter(l => cssComponents[l]).length}; total: ${Object.keys(cssComponents).length}. Interaction states captured for the rest are in \`capture/states/states.json\` and \`capture/states/*.png\`.\n`;
writeFileSync(join(root, 'COVERAGE.md'), c);
console.log('CHUNK_MAP.md', md.length, 'COVERAGE.md', c.length);
