"""Inspect live DOM templates with installed Chrome; no crawler package."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright
root = Path(__file__).resolve().parent
out = root / 'original'
out.mkdir(exist_ok=True)
with sync_playwright() as p:
    browser = p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe', headless=True)
    context = browser.new_context(viewport={'width':1440,'height':900})
    page = context.new_page()
    result = {}
    for key, url in [('home','https://endfield.gryphline.com/en-us'),('operators','https://endfield.gryphline.com/en-us/operator')]:
        page.goto(url, wait_until='domcontentloaded', timeout=60000)
        page.wait_for_selector('.__02-Operator_sectionContainer__D66c4' if key == 'home' else '.OperatorItem_operatorItem__gPezu', state='attached', timeout=60000)
        page.wait_for_timeout(2000)
        result[key] = page.evaluate('''() => ({
            links:[...document.querySelectorAll('a[href]')].map(e=>({text:e.textContent.trim().slice(0,60),url:e.href})),
            sections:[...document.querySelectorAll('[class*=sectionContainer]')].map(e=>({tag:e.tagName,classes:e.className,id:e.id})),
            styles:[...document.querySelectorAll('link[rel=stylesheet]')].map(e=>e.href),
            html:document.documentElement.outerHTML
        })''')
        (out / f'{key}-dom.html').write_text(result[key].pop('html'),encoding='utf-8')
        print(key, json.dumps({k:v for k,v in result[key].items() if k!='styles'},ensure_ascii=True)[:10000],flush=True)
        if key == 'home':
            print('news cards',page.locator('.__06-Notice_noticeItem__7v58F').count(),flush=True)
            try:
                page.get_by_text('OK',exact=True).first.click(timeout=2000)
            except Exception: pass
            if page.locator('.__06-Notice_noticeItem__7v58F').count():
                with context.expect_page(timeout=15000) as opened:
                    page.locator('.__06-Notice_noticeItem__7v58F').first.evaluate('(element)=>element.click()')
                article=opened.value
                article.wait_for_load_state('domcontentloaded')
                article.wait_for_selector('.__20-NoticeDetail_content__wIAEN',timeout=60000)
                (out/'article-dom.html').write_text(article.content(),encoding='utf-8')
                result['article']={'url':article.url,'styles':article.locator('link[rel=stylesheet]').evaluate_all('(elements)=>elements.map(e=>e.href)')}
                print('article',article.url,flush=True)
                article.close()
    (out/'template-audit.json').write_text(json.dumps(result,indent=2,ensure_ascii=False),encoding='utf-8')
    browser.close()
