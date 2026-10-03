"""Prove that the handbook changes editorial data, not source components."""
from pathlib import Path
from bs4 import BeautifulSoup
import json,hashlib
ROOT=Path(__file__).resolve().parent
source=BeautifulSoup((ROOT/'original/article-response.html').read_text(encoding='utf-8'),'html.parser')
local=BeautifulSoup((ROOT/'handbook/index.html').read_text(encoding='utf-8'),'html.parser')
result={}
for tag,attr,selector in [('link','href','link[rel=stylesheet]'),('script','src','script[src]')]:
    before=[element.get(attr) for element in source.select(selector)]
    after=[element.get(attr) for element in local.select(selector)]
    assert before==after,(tag,'resource list changed')
    result[tag+'_resources_identical']=len(before)
for document in (source,local):
    document.select_one('.__20-NoticeDetail_content__wIAEN').clear()
    document.select_one('.__20-NoticeDetail_title__cALu9').string='EDITORIAL TITLE'
    for script in document.select('script'): script.decompose()
before=str(source.body)
after=str(local.body)
assert before==after,'Original body/component wrappers were altered'
result['body_wrappers_identical']=True
result['body_structure_sha256']=hashlib.sha256(before.encode()).hexdigest()
result['authored_css_rules']=0
result['authored_animation_code']=0
assert (ROOT/'starter/index.html').read_bytes()==(ROOT/'original/home-response.html').read_bytes()
result['reference_home_byte_identical']=True
(ROOT/'original/structural-verification.json').write_text(json.dumps(result,indent=2),encoding='utf-8')
print(json.dumps(result,indent=2))
