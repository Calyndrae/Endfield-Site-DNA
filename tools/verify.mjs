// Verify the handbook in headless Chromium against the local mirror, and prove the shell is untouched.
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';
import { spawn } from 'node:child_process';
import net from 'node:net';
const root = new URL('..', import.meta.url).pathname; const OUT = join(root, 'verification'); mkdirSync(OUT, { recursive: true });
const PORT = 8786; const BASE = `http://127.0.0.1:${PORT}`;
const report = { startedAt: new Date().toISOString(), checks: [] };
const check = (name, ok, detail) => { report.checks.push({ name, ok: !!ok, detail }); console.log((ok ? 'PASS ' : 'FAIL ') + name + (detail ? ' — ' + (typeof detail === 'string' ? detail : JSON.stringify(detail)).slice(0, 300) : '')); };
// 1) structure: body byte-identical to the original response; head adds only the adapter + 2 original stylesheets
const orig = readFileSync(join(root, 'original/article-response.html'), 'utf8'); const shell = readFileSync(join(root, 'handbook/index.html'), 'utf8');
const bodyOf = s => s.slice(s.indexOf('<body')); check('body of handbook/index.html is byte-identical to the original SSR response', bodyOf(orig) === bodyOf(shell), { originalBodyBytes: bodyOf(orig).length });
const scripts = s => [...s.matchAll(/<script[^>]*src="([^"]+)"/g)].map(m => m[1]); check('script src list identical', JSON.stringify(scripts(orig)) === JSON.stringify(scripts(shell)), scripts(orig).length + ' scripts');
const links = s => [...s.matchAll(/<link rel="stylesheet" href="([^"]+)"/g)].map(m => m[1]); const extra = links(shell).filter(l => !links(orig).includes(l)); check('stylesheets = original + two original CSS-module files', links(orig).every(l => links(shell).includes(l)) && extra.length === 2 && extra.every(l => /cca0e7eae4809d1e|2174f0c4d179760f/.test(l)), extra);
check('no authored <style> block in the shell', !/<style[^>]*>(?![\s\S]*?data-emotion)/.test(shell.replace(orig, '')) && (shell.match(/<style/g) || []).length === (orig.match(/<style/g) || []).length);
const bulletin = JSON.parse(readFileSync(join(root, 'handbook/handbook-bulletin.json'), 'utf8')); check('bulletin record keeps original fields, replaces title + data', bulletin.code === 0 && bulletin.data.cid && bulletin.data.title.includes('handbook') && bulletin.data.data.length > 50000, { cid: bulletin.data.cid, chars: bulletin.data.data.length });
check('handbook content uses only article vocabulary + captured component markup (no <style>, <script>, <link>)', !/<(style|script|link)\b/i.test(bulletin.data.data));
check('no chapter build errors and every code excerpt anchor resolved', !/BUILD ERROR in chapter|excerpt anchor not found|excerpt unavailable/.test(bulletin.data.data), { excerpts: (bulletin.data.data.match(/Code — [A-Za-z0-9.]+ lines \d+–\d+/g) || []).length });
const interactionsHtml = (bulletin.data.data.split('id="interactions"')[1] || '').split('id="javascript"')[0]; const measuredCount = (interactionsHtml.match(/MEASURED — /g) || []).length, tableCount = (interactionsHtml.match(/<table/g) || []).length, excerptCount = (interactionsHtml.match(/Code — /g) || []).length;
check('interactions chapter carries live measurements, tables and code excerpts', measuredCount >= 15 && tableCount >= 8 && excerptCount >= 12, { measuredCount, tableCount, excerptCount });
const interactions = JSON.parse(readFileSync(join(root, 'capture/interactions.json'), 'utf8')); check('root font-size formula matched the live value at all captured viewports', Array.isArray(interactions.rootFontSize) && interactions.rootFontSize.length >= 8 && interactions.rootFontSize.every(r => r.match), interactions.rootFontSize && interactions.rootFontSize.map(r => `${r.viewport}: ${r.measured}`));
check('every interaction scenario produced data (no scenario-level errors)', !interactions.error && (!interactions.errors || Object.keys(interactions.errors).length === 0), interactions.errors || interactions.error || 'none');
// 2) server
const portOpen = await new Promise(r => { const s = net.createConnection(PORT, '127.0.0.1'); s.on('connect', () => { s.end(); r(true); }); s.on('error', () => r(false)); });
let server = null; if (!portOpen) { server = spawn(process.execPath, [join(root, 'tools/serve.mjs'), String(PORT)], { env: { ...process.env, NODE_USE_ENV_PROXY: '1' }, stdio: 'ignore' }); await new Promise(r => setTimeout(r, 1200)); }
const browser = await chromium.launch({ args: ['--mute-audio', '--autoplay-policy=no-user-gesture-required'] });
try {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } }); const page = await ctx.newPage();
  const errors = [], failed = []; page.on('pageerror', e => errors.push(String(e).slice(0, 200))); page.on('requestfailed', r => failed.push(r.url().slice(0, 140)));
  const t0 = Date.now();
  const dataResp = page.waitForResponse(r => r.url().includes('/handbook/handbook-bulletin.json'), { timeout: 90000 });
  await page.goto(BASE + '/en-us/news/7013', { waitUntil: 'domcontentloaded', timeout: 90000 });
  const dr = await dataResp; check('client refetch of /api/bulletin/7013 was answered by the local handbook record', dr.status() === 200, `${Date.now() - t0} ms`);
  let gone = false; for (let i = 0; i < 70; i++) { await page.waitForTimeout(1000); if (!(await page.$('[class*="Loading_container"]'))) { gone = true; break; } }
  check('first-load screen finished and left', gone, `${Date.now() - t0} ms`);
  await page.waitForTimeout(1500); await page.screenshot({ path: join(OUT, 'handbook-top-1440.png') });
  const title = await page.$eval('.__20-NoticeDetail_title__cALu9', e => e.textContent); check('article title replaced by the handbook title', /handbook/i.test(title), title);
  const cov = JSON.parse(readFileSync(join(root, 'handbook/coverage.json'), 'utf8'));
  const anchors = await page.evaluate(ids => ids.map(id => [id, !!document.getElementById(id)]), cov.chapters); check('every chapter anchor exists in the rendered content', anchors.every(a => a[1]), anchors.filter(a => !a[1]).map(a => a[0]));
  const contentRect = await page.$eval('.__20-NoticeDetail_content__wIAEN', e => e.getBoundingClientRect().toJSON());
  const specimens = await page.evaluate(() => [...document.querySelectorAll('.__20-NoticeDetail_content__wIAEN td > [class]')].map(el => { let r = el.getBoundingClientRect(); if (r.width === 0 || r.height === 0) { let l = Infinity, t = Infinity, rr = -Infinity, bb = -Infinity; for (const d of el.querySelectorAll('*')) { const k = d.getBoundingClientRect(); if (k.width && k.height) { l = Math.min(l, k.left); t = Math.min(t, k.top); rr = Math.max(rr, k.right); bb = Math.max(bb, k.bottom); } } if (rr > l) r = { left: l, top: t, right: rr, bottom: bb, width: rr - l, height: bb - t }; } return { cls: (el.getAttribute('class') || '').split(' ')[0], w: Math.round(r.width), h: Math.round(r.height), x: Math.round(r.left), right: Math.round(r.right), visible: r.width > 0 && r.height > 0 }; }));
  const pagCount = await page.$$eval('.__20-NoticeDetail_content__wIAEN td > .Pagination_pagination__3IDBu', e => e.length); check('Pagination specimens present (notice + news)', pagCount >= 2, pagCount);
  check('embedded specimens render with non-zero size', specimens.length > 10 && specimens.every(s => s.visible), { count: specimens.length, zero: specimens.filter(s => !s.visible).map(s => s.cls) });
  const docW = await page.evaluate(() => document.documentElement.scrollWidth); check('specimens stay inside the document width (no horizontal overflow at 1440)', docW <= 1440, { scrollWidth: docW, widest: specimens.sort((a, b) => b.right - a.right).slice(0, 3) });
  // hover parity with live measurements
  const live = JSON.parse(readFileSync(join(root, 'analysis/hover-states.json'), 'utf8'));
  async function hoverCheck(cls, prop, node = null) { const el = page.locator('.__20-NoticeDetail_content__wIAEN .' + cls).first(); const key = cls.split(':')[0]; if (!(await el.count())) return check(`hover parity ${cls}`, false, 'no specimen'); await el.scrollIntoViewIfNeeded(); await page.waitForTimeout(300); const before = await el.evaluate((e, p) => getComputedStyle(e).getPropertyValue(p), prop); await el.hover(); await page.waitForTimeout(700); const after = await el.evaluate((e, p) => getComputedStyle(e).getPropertyValue(p), prop); const exp = live.find(h => h.cls === key); const expAfter = exp && exp.changes[0] && exp.changes[0].props[prop] ? exp.changes[0].props[prop].after : null; check(`hover parity ${key} ${prop}: live after=${expAfter}`, after !== before && (!expAfter || after === expAfter), { before, after }); await page.mouse.move(5, 5); await page.waitForTimeout(400); }
  await hoverCheck('OperatorItem_operatorItem__gPezu', 'transform');
  await hoverCheck('Button_button__njqVS', 'background-color');
  await hoverCheck('Pagination_button__cVH8L:not(.Pagination_disabled__WlgMt)', 'background-color');
  await hoverCheck('Dropdown_trigger__mA0mP', 'border-color');
  await hoverCheck('SubpageTab_tab__qSWqv:not(.SubpageTab_active__fHDLL)', 'background-color');
  // live chrome
  await page.evaluate(() => window.scrollTo(0, 0)); await page.mouse.move(700, 450); await page.waitForTimeout(600);
  const railBefore = await page.$eval('.Header_pcHeaderContainer__Sy_8l', e => e.className); await page.hover('.Header_pcHeaderContainer__Sy_8l'); await page.waitForTimeout(900); const railAfter = await page.$eval('.Header_pcHeaderContainer__Sy_8l', e => e.className);
  check('live rail expands on hover (detailActive class)', railAfter.includes('detailActive') && !railBefore.includes('detailActive')); await page.screenshot({ path: join(OUT, 'handbook-rail-hover.png') }); await page.mouse.move(700, 450); await page.waitForTimeout(500);
  await page.mouse.move(700, 450); for (let i = 0; i < 6; i++) { await page.mouse.wheel(0, 500); await page.waitForTimeout(150); } await page.waitForTimeout(900);
  const btt = await page.$eval('.__20-NoticeDetail_backButton__pWmC1', e => getComputedStyle(e).opacity); check('live back-to-top button appears after scrolling (opacity 1)', btt === '1', btt);
  const specShots = [['operator-stage', 'handbook-operator-stage.png'], ['catalogue', 'handbook-catalogue.png'], ['notice', 'handbook-notice.png'], ['news', 'handbook-news.png'], ['typography', 'handbook-typography.png'], ['coverage', 'handbook-coverage.png']];
  for (const [id, file] of specShots) { await page.evaluate(i => document.getElementById(i)?.scrollIntoView(), id); await page.waitForTimeout(600); await page.screenshot({ path: join(OUT, file) }); }
  await page.evaluate(() => document.documentElement.scrollTo(0, document.documentElement.scrollHeight)); await page.waitForTimeout(1200);
  const footer = await page.$('.footer_footer__6jTqE'); check('live footer present at the end of the page', !!footer); await page.screenshot({ path: join(OUT, 'handbook-footer.png') });
  const lang = page.locator('[class*="footer_languageItem"]').first(); if (await lang.count()) { await lang.click({ force: true }); await page.waitForTimeout(500); const cls = await lang.evaluate(e => e.className); check('live footer language picker opens (active class)', cls.includes('active'), cls.slice(0, 80)); await page.screenshot({ path: join(OUT, 'handbook-language-open.png') }); }
  report.pageErrors = errors; report.failedRequests = failed.filter(u => !/analytics|doubleclick|googletagmanager|event-log|cookie_store|regular\/check|grayscale|bgm\./.test(u));
  check('no JavaScript errors other than the site\'s own React #418 hydration notice', errors.every(e => /#418/.test(e)), errors);
  check('no failed requests other than third-party SDK/analytics calls blocked by the local origin', report.failedRequests.length === 0, report.failedRequests);
  // mobile
  await page.setViewportSize({ width: 390, height: 844 }); await page.waitForTimeout(2500); await page.evaluate(() => window.scrollTo(0, 0)); await page.waitForTimeout(500);
  const mob = await page.evaluate(() => ({ scrollWidth: document.documentElement.scrollWidth, inner: innerWidth, rem: getComputedStyle(document.documentElement).fontSize })); check('no horizontal overflow at 390×844', mob.scrollWidth <= mob.inner + 1, mob);
  await page.screenshot({ path: join(OUT, 'handbook-mobile-390.png') });
  await page.evaluate(i => document.getElementById(i)?.scrollIntoView(), 'catalogue'); await page.waitForTimeout(600); await page.screenshot({ path: join(OUT, 'handbook-mobile-catalogue.png') });
  report.stats = { specimens: specimens.length, chapters: cov.chapters.length, contentChars: bulletin.data.data.length, loaderMs: Date.now() - t0 };
  await ctx.close();
} catch (e) { check('verification run completed', false, String(e).slice(0, 400)); }
await browser.close(); if (server) server.kill();
report.passed = report.checks.filter(c => c.ok).length; report.failed = report.checks.filter(c => !c.ok).length; report.finishedAt = new Date().toISOString();
writeFileSync(join(OUT, 'report.json'), JSON.stringify(report, null, 1));
console.log(`\n${report.passed} passed, ${report.failed} failed`);
