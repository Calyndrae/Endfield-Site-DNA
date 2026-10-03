from playwright.sync_api import sync_playwright
from pathlib import Path
import json
out=Path(r'D:\Endfield-Site-DNA-2026-10-03\screenshots')
with sync_playwright() as p:
 browser=p.chromium.connect_over_cdp('http://127.0.0.1:9224')
 context=browser.contexts[0]
 page=context.new_page();page.set_viewport_size({'width':1440,'height':900})
 page.goto('https://endfield.gryphline.com/en-us',wait_until='domcontentloaded',timeout=60000)
 page.wait_for_timeout(8500)
 print('title',page.title(),'url',page.url)
 print('matching IDs',page.evaluate("Array.from(document.querySelectorAll('[id]')).map(e=>e.id).filter(x=>/operator/i.test(x))"))
 print('cookie candidates',page.evaluate("Array.from(document.querySelectorAll('*')).filter(e=>e.textContent?.trim()==='OK'&&e.children.length===0).slice(0,5).map(e=>({tag:e.tagName,cls:e.className}))"))
 page.get_by_text('OK',exact=True).first.click(timeout=3000)
 page.wait_for_timeout(400)
 operator=page.locator('[id="operator"]')
 print('operator count',operator.count())
 if operator.count():
  operator.scroll_into_view_if_needed(timeout=10000);page.wait_for_timeout(2500)
  print('operator y',page.evaluate('window.scrollY'),'rect',operator.bounding_box())
 else:
  page.evaluate("document.querySelector('[class*=Operator_sectionContainer]')?.scrollIntoView()")
  page.wait_for_timeout(2500)
 page.screenshot(path=str(out/'home-operator-verified.png'))
 print('screenshot bytes',(out/'home-operator-verified.png').stat().st_size)
 page.close();browser.close()
