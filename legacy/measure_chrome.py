from playwright.sync_api import sync_playwright
from pathlib import Path
import json
root=Path(r'D:\Endfield-Site-DNA-2026-10-03');shots=root/'screenshots'
with sync_playwright() as p:
 browser=p.chromium.connect_over_cdp('http://127.0.0.1:9224');context=browser.contexts[0]
 page=context.new_page();page.set_viewport_size({'width':1440,'height':900})
 page.goto('https://endfield.gryphline.com/en-us/operator',wait_until='domcontentloaded',timeout=60000);page.wait_for_timeout(5000)
 page.screenshot(path=str(shots/'operator-index-verified.png'))
 metrics=page.evaluate('''() => {
   const card=document.querySelector('[class*="OperatorItem_operatorItem"]');
   const grid=document.querySelector('[class*="OperatorList_list__"]');
   const filter=document.querySelector('[class*="OperatorList_dropdowns"]');
   const cs=e=>e?{rect:JSON.parse(JSON.stringify(e.getBoundingClientRect())),css:{fontFamily:getComputedStyle(e).fontFamily,fontSize:getComputedStyle(e).fontSize,backgroundColor:getComputedStyle(e).backgroundColor,gap:getComputedStyle(e).gap}}:null;
   return {innerWidth,innerHeight,rootRem:getComputedStyle(document.documentElement).fontSize,card:cs(card),grid:cs(grid),filters:cs(filter),cardCount:document.querySelectorAll('[class*="OperatorItem_operatorItem"]').length,pageTitle:document.title,links:[...document.querySelectorAll('a[href]')].map(a=>a.href).slice(0,30)};
 }''')
 page.set_viewport_size({'width':390,'height':844});page.wait_for_timeout(1000)
 page.screenshot(path=str(shots/'operator-index-mobile-verified.png'))
 metrics['mobile']=page.evaluate('''() => ({innerWidth,innerHeight,scrollWidth:document.documentElement.scrollWidth,rootRem:getComputedStyle(document.documentElement).fontSize,cardRect:JSON.parse(JSON.stringify(document.querySelector('[class*="OperatorItem_operatorItem"]').getBoundingClientRect()))})''')
 page.goto('https://endfield.gryphline.com/en-us',wait_until='domcontentloaded',timeout=60000);page.set_viewport_size({'width':1440,'height':900});page.wait_for_timeout(6000)
 page.locator('[class*="Operator_sectionContainer"]').first.scroll_into_view_if_needed();page.wait_for_timeout(3500)
 metrics['operator_section']=page.evaluate('''() => ({videos:[...document.querySelectorAll('video')].map(v=>({src:v.currentSrc||v.src,paused:v.paused,width:v.videoWidth,height:v.videoHeight})).filter(v=>v.src).slice(0,8),canvases:document.querySelectorAll('canvas').length,allOperators:[...document.querySelectorAll('*')].filter(e=>e.textContent?.trim()==='All Operators'&&e.children.length===0).map(e=>({tag:e.tagName,className:e.className})).slice(0,3)})''')
 page.close();browser.close()
 (root/'visual_measurements.json').write_text(json.dumps(metrics,indent=2),encoding='utf-8')
 print(json.dumps(metrics,indent=2)[:4200])
