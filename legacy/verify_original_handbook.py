"""Verify source-preserving article hydration and original controls in Chrome."""
from pathlib import Path
import json, os
os.environ['PW_TEST_SCREENSHOT_NO_FONTS_READY']='1'
from playwright.sync_api import sync_playwright
ROOT=Path(__file__).resolve().parent
REPORT={}
with sync_playwright() as p:
    browser=p.chromium.launch(executable_path=r'C:\Program Files\Google\Chrome\Application\chrome.exe',headless=True,args=['--mute-audio','--disk-cache-size=1048576'])
    try:
        context=browser.new_context(viewport={'width':1440,'height':900})
        page=context.new_page();errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        with page.expect_response(lambda response: '/original/handbook-bulletin.json' in response.url, timeout=90000) as data_response:
            page.goto('http://127.0.0.1:8786/en-us/news/7013',wait_until='domcontentloaded',timeout=60000)
        data_response.value.finished()
        page.wait_for_selector('.__20-NoticeDetail_title__cALu9',timeout=60000)
        page.wait_for_timeout(1500)
        print('TITLE',page.locator('.__20-NoticeDetail_title__cALu9').inner_text(),flush=True)
        print('ERRORS',json.dumps(errors),flush=True)
        assert 'technical handbook' in page.locator('.__20-NoticeDetail_title__cALu9').inner_text()
        assert page.locator('#build-blueprint').count()==1
        assert page.locator('link[href*="guide.css"]').count()==0
        assert page.locator('.orb,.record-card,.sidebar').count()==0
        page.screenshot(path=str(ROOT/'screenshots/original-handbook-desktop.png'))
        REPORT['desktop']={'title':page.locator('.__20-NoticeDetail_title__cALu9').inner_text(),'content_nodes':page.locator('.__20-NoticeDetail_content__wIAEN > *').count(),
          'styles':page.locator('link[rel=stylesheet]').evaluate_all('(items)=>items.map(e=>e.href)'),
          'body_style':page.locator('.__20-NoticeDetail_content__wIAEN').evaluate('(e)=>({font:getComputedStyle(e).fontFamily,size:getComputedStyle(e).fontSize,margin:getComputedStyle(e).marginTop})')}
        page.set_viewport_size({'width':390,'height':844});page.wait_for_timeout(800)
        page.screenshot(path=str(ROOT/'screenshots/original-handbook-mobile.png'))
        REPORT['mobile']={'width':390,'horizontal_overflow':page.evaluate('document.documentElement.scrollWidth>innerWidth')}
        REPORT['errors']=errors
        REPORT['native_provider_refresh']='local handbook bulletin received'
        assert 'technical handbook' in page.locator('.__20-NoticeDetail_title__cALu9').inner_text()
        assert page.locator('#build-blueprint').count()==1
        (ROOT/'original/verification.json').write_text(json.dumps(REPORT,indent=2),encoding='utf-8')
        print(json.dumps(REPORT),flush=True)
    finally: browser.close()
