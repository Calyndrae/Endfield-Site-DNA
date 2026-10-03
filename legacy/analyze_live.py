"""Stream live public pages, CSS, and JS into memory; save compact evidence only.
No crawler dependency and no raw website source files are retained.
"""
from urllib.request import Request,urlopen
from urllib.parse import urljoin,urlparse
from html.parser import HTMLParser
from collections import Counter,defaultdict
from concurrent.futures import ThreadPoolExecutor
from pathlib import Path
import re,json,hashlib,time
ROOT=Path(r'D:\Endfield-Site-DNA-2026-10-03')
PAGES={'home':'https://endfield.gryphline.com/en-us','operators':'https://endfield.gryphline.com/en-us/operator','news':'https://endfield.gryphline.com/en-us/news'}
class Tags(HTMLParser):
 def __init__(self):super().__init__();self.tags=[]
 def handle_starttag(self,tag,attrs):
  if tag in ('script','link','a','video','source','img'):self.tags.append((tag,dict(attrs)))
def fetch(url):
 try:
  with urlopen(Request(url,headers={'User-Agent':'Mozilla/5.0'}),timeout=25) as response:
   b=response.read();return {'url':url,'status':response.status,'bytes':len(b),'sha256':hashlib.sha256(b).hexdigest(),'body':b.decode('utf-8','replace'),'final_url':response.url}
 except Exception as e:return {'url':url,'error':str(e)}
htmls={k:fetch(u) for k,u in PAGES.items()}
for k,v in htmls.items():print('PAGE',k,v.get('status'),v.get('bytes'),v.get('final_url'),v.get('error'))
pages={};all_css=set();all_js=set()
for key,v in htmls.items():
 if 'body' not in v:continue
 parser=Tags();parser.feed(v['body']);css=set();js=set();links=[];media=[]
 for tag,attrs in parser.tags:
  if tag=='link' and attrs.get('rel')=='stylesheet' and attrs.get('href'):css.add(urljoin(v['url'],attrs['href']))
  if tag=='script' and attrs.get('src'):js.add(urljoin(v['url'],attrs['src']))
  if tag=='a' and attrs.get('href'):links.append(urljoin(v['url'],attrs['href']))
  if tag in ('video','source','img') and attrs.get('src'):media.append(urljoin(v['url'],attrs['src']))
 all_css|=css;all_js|=js
 pages[key]={'url':v['url'],'status':v.get('status'),'bytes':v.get('bytes'),'sha256':v.get('sha256'),'stylesheets':sorted(css),'scripts':sorted(js),'html_links':sorted(set(links)),'html_media':sorted(set(media)),'next_build_id':(re.search(r'"buildId":"([^"]+)',v['body']) or [None,None])[1]}
print('Unique stylesheets',len(all_css),'scripts',len(all_js))
source_urls=sorted(u for u in all_css|all_js if 'web-static.hg-cdn.com/endfield/official-v4' in u)
with ThreadPoolExecutor(max_workers=10) as pool:sources=list(pool.map(fetch,source_urls))
source_map={s['url']:s for s in sources}
color_count=Counter();color_context=defaultdict(Counter);font_families=Counter();font_face=[];sizes=Counter();space=Counter();media_rules=Counter();layout_rules=[];css_assets=[]
for u in sorted(all_css):
 s=source_map.get(u,{}).get('body','')
 # CSS is minified but individual declarations remain measurable.
 for prop,value in re.findall(r'([\w-]+)\s*:\s*([^;{}]+)',s):
  val=value.strip();p=prop.lower()
  if p in ('color','background-color','border-color','fill','stroke','box-shadow','background','border'):
   for token in re.findall(r'#[0-9a-fA-F]{3,8}\b|rgba?\([^)]*\)|hsla?\([^)]*\)',val):
    color_count[token.lower()]+=1;color_context[token.lower()][p]+=1
  if p=='font-family':font_families[val]+=1
  if p in ('font-size','line-height','letter-spacing'):sizes[(p,val)]+=1
  if p in ('padding','margin','gap','column-gap','row-gap'):space[(p,val)]+=1
  if p in ('display','grid-template-columns','position') and ('operator' in s.lower() or 'footer' in s.lower()):
   pass
 for ff in re.findall(r'@font-face\s*\{([^}]*)\}',s,re.I):font_face.append({'css':u,'declarations':ff})
 media_rules.update(re.findall(r'@media\s*\(([^)]+)\)',s))
 css_assets.extend([{'css':u,'asset':urljoin(u,x.strip("'\""))} for x in re.findall(r'url\(([^)]+)\)',s)])
js_assets=[];js_routes=Counter();script_meta=[];external_origins=Counter()
for u in sorted(all_js):
 s=source_map.get(u,{}).get('body','')
 if not s:continue
 js_assets.extend([{'script':u,'asset':urljoin(u,x)} for x in re.findall(r'"(static/media/[^" ]+\.(?:png|jpg|jpeg|webp|gif|svg|woff2?|ttf|mp4|webm|mp3|bin))"',s)])
 for path in re.findall(r'/(?:operator|news|media|lore|gameplay|calendar)(?:/[A-Za-z0-9_-]+)?',s):js_routes[path]+=1
 for ext in re.findall(r'https?://[A-Za-z0-9._-]+(?:/[A-Za-z0-9_./?-]+)?',s):
  host=urlparse(ext).netloc
  if host and host not in ('web-static.hg-cdn.com','endfield.gryphline.com'):external_origins[host]+=1
 script_meta.append({'url':u,'bytes':source_map[u]['bytes'],'sha256':source_map[u]['sha256'],'module_count_estimate':len(re.findall(r'[,\{](\d+):(?:\(e|function)',s)),'threejs':('THREE.WebGLRenderer' in s),'transparent_video':('@hg-web/trans-video' in s),'operator_logic':('operator.more' in s),'module_ids':re.findall(r'[,\{](\d+):(?:\(e|function)',s)[:80]})
summary={'scope':'Homepage plus directly linked English operator and news routes; no deeper URLs fetched. All JS/CSS processed in memory; only compact metadata retained.','captured_at_local':'2026-10-03 Pacific/Auckland','pages':pages,'stylesheets':[{'url':u,'bytes':source_map.get(u,{}).get('bytes'),'sha256':source_map.get(u,{}).get('sha256')} for u in sorted(all_css)],'scripts':script_meta,'css':{'colors':[{'value':v,'count':c,'properties':dict(color_context[v])} for v,c in color_count.most_common(120)],'font_families':font_families.most_common(80),'font_faces':font_face,'font_size_lineheight_letterspacing':[{'property':p,'value':v,'count':c} for (p,v),c in sizes.most_common(120)],'space_declarations':[{'property':p,'value':v,'count':c} for (p,v),c in space.most_common(80)],'media_queries':media_rules.most_common(80),'asset_urls':css_assets},'js':{'routes':js_routes.most_common(),'external_origins':external_origins.most_common(40),'asset_urls':js_assets}}
(ROOT/'evidence.json').write_text(json.dumps(summary,indent=2,ensure_ascii=False),encoding='utf-8')
for label,items in [('colors',color_count.most_common(25)),('font_families',font_families.most_common(12)),('media_queries',media_rules.most_common(12)),('routes',js_routes.most_common(16))]:print(label,items)
print('font faces',len(font_face),'CSS asset refs',len(css_assets),'JS asset refs',len(js_assets),'evidence bytes',(ROOT/'evidence.json').stat().st_size)
