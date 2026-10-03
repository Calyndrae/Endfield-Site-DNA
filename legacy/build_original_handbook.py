"""Replace article DATA, retaining the original SSR DOM and Next/React runtime.

No authored CSS, motion implementation, component classes or layout wrappers.
Original scripts and styles continue loading from the official CDN.
"""
from pathlib import Path
from html import escape, unescape
from urllib.request import urlopen
from bs4 import BeautifulSoup
import json, re, hashlib
from handbook_content import CHAPTERS

ROOT = Path(__file__).resolve().parent
ORIGINAL = ROOT / 'original'
ORIGINAL.mkdir(exist_ok=True)
ORIGIN = 'https://endfield.gryphline.com'
ARTICLE = '/en-us/news/7013'
TITLE = 'Endfield website — technical handbook / 29 sections'
CONTENT_CLASS = '__20-NoticeDetail_content__wIAEN'

def paragraph(text, strong=False, identifier=None):
    inner = escape(text).replace('\n', '<br>')
    if strong: inner = '<strong>' + inner + '</strong>'
    attr = f' id="{escape(identifier, quote=True)}"' if identifier else ''
    return f'<p{attr}><span>{inner}</span></p>'

def spacer(): return '<p><br></p>'

def image(url): return f'<img src="{escape(url, quote=True)}">'

def link(label, url):
    return f'<p><span><a href="{escape(url,quote=True)}">{escape(label)}</a></span></p>'

motion = json.loads((ROOT/'motion_catalog.json').read_text(encoding='utf-8'))
components = json.loads((ROOT/'component_catalog.json').read_text(encoding='utf-8'))
assets = json.loads((ROOT/'asset_role_manifest.json').read_text(encoding='utf-8'))
layers = json.loads((ROOT/'layer_catalog.json').read_text(encoding='utf-8'))
audio = json.loads((ROOT/'audio_manifest.json').read_text(encoding='utf-8'))
evidence = json.loads((ROOT/'evidence.json').read_text(encoding='utf-8'))
terms = {
 'colour':'OperatorItem_', 'typography':'OperatorItem_', 'alignment':'__12-OperatorList_',
 'text-rhythm':'__02-Operator_', 'responsive':'__12-OperatorList_', 'navigation':'Header_pcHeaderContainer',
 'footer':'footer_footer', 'controls':'CommonButton_', 'icons':'OperatorItem_',
 'imagery':'__02-Operator_', 'textures':'__02-Operator_backgroundDeco',
 'catalogue':'__12-OperatorList_', 'cards':'OperatorItem_operatorItem',
 'filters':'Dropdown_', 'stage':'__02-Operator_', 'video':'__02-Operator_',
 'layer-stack':'__02-Operator_', 'loader':'__00-Loading_',
 'entrance':'__02-Operator_', 'hover':'OperatorItem_operatorItem',
 'scroll':'__03-Lore_', 'motion-system':'Loading_',
}
source_chunk = {
 'video':'8498-2c5f8c0351c886c2.js', 'responsive':'8963-234f979bdd6b491c.js',
 'loader':'8963-234f979bdd6b491c.js', 'audio':'4231-53da7c4de7468a06.js',
 'rendering-engine':'226-d5292700ff68fd13.js', 'entrance':'226-d5292700ff68fd13.js'
}
readable = {
 'video':'rendering-and-scale.js', 'responsive':'rendering-and-scale.js',
 'loader':'site-loader.jsx', 'audio':'audio-manager.js', 'rendering-engine':'particle-scene.js',
 'entrance':'operator-entrance.js', 'javascript':'SYMBOL_MAP.md',
 'cards':'operator-page.jsx', 'filters':'operator-page.jsx'
}

parts = [
 paragraph('Single-page handbook. The surrounding article layout, global navigation, footer, fonts, CSS and runtime are the original Endfield components. Only article text/data has been replaced.'),
 paragraph('Scope: captured English homepage and directly reached Operators, News and article pages. “All” below refers to this recorded page family; it is not a claim to have inspected every language, account flow or unpublished state.'),
 paragraph('Evidence rule: exact declarations and runtime observations are identified as such. A design reason that the publisher has not documented is not stated as a fact. Screenshots are reference captures, not recreated controls.'),
 link('Original homepage and all its original interactive sections', '/en-us'),
 link('Original operator catalogue and original filters/detail behavior', '/en-us/operator'),
 link('Original news index', '/en-us/news'),
 link('Source/component coverage inventory', '/original/coverage.json'),
 paragraph('CONTENTS', True, 'handbook-top')
]
for index, chapter in enumerate(CHAPTERS, 1):
    parts.append(link(f'{index:02d} / {chapter["title"]}', '#'+chapter['slug']))

used_rules = []
for index, chapter in enumerate(CHAPTERS, 1):
    slug = chapter['slug']
    parts += [spacer(), paragraph(f'{index:02d} // {chapter["title"]}', True, slug)]
    if slug == 'build-blueprint':
        parts += [paragraph('Assembly rule: retain the original component DOM, stylesheets and JavaScript. Edit content data or move complete original components. Do not introduce a new CSS value, wrapper, button, grid or animation.'),
                  paragraph('Verification: compare the original and local computed styles, DOM class sequence and hover state. Maintain a manifest of original resources. An untested component remains marked unverified; it is not described as faithfully reproduced.')]
    else:
        parts.append(paragraph(chapter['summary']))
        # Exclude the old invented child-site examples and prescriptive rule lists.
        for text in chapter['paragraphs'][:2]: parts.append(paragraph(text))
    for label, value in chapter['facts']: parts.append(paragraph(f'{label}: {value}'))
    picture = chapter.get('image')
    if picture and not picture.startswith('mood-board'):
        parts += [image('/screenshots/'+picture), paragraph('Reference: capture of an original live-site page/component. The image is not an interactive replica.')]
    term = terms.get(slug)
    rows = [row for row in motion['rules'] if term and term in row['selector']][:3]
    if not rows and term:
        rows = [row for row in components['geometry'] if term in row['selector']][:3]
    if rows:
        parts.append(paragraph('EXACT SHIPPED CSS — formatted, values unchanged',True))
        for row in rows:
            declarations = row.get('declarations', row['properties'])
            snippet = row['selector'] + ' {\n' + '\n'.join(f'  {key}: {value};' for key,value in declarations.items()) + '\n}'
            parts.append(paragraph(snippet))
            url = row.get('source',row.get('css'))
            parts.append(link('Original stylesheet (includes media-query context)',url))
            used_rules.append({'chapter':slug,'selector':row['selector'],'stylesheet':url})
    if slug in source_chunk:
        parts.append(link('Original JavaScript chunk','https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/'+source_chunk[slug]))
    if slug in readable:
        parts += [paragraph('Readable interpretation of selected source logic. The UI runs the original bundle; this explanation file is not substituted for it.'),
                  link('Open annotated code: '+readable[slug],'/readable/'+readable[slug])]
    if slug == 'icons':
        for key, icon in assets['taxonomy_icons'].items():
            parts += [paragraph(key,True), image(icon['url']),link('Original icon asset',icon['url'])]
    if slug == 'imagery':
        # Real illustrations and portraits, with original article image styling.
        for operator in assets['operator_portraits'][:2]:
            parts += [paragraph(operator['name']+' / full illustration',True),image(assets['hero_illustrations'][operator['key']]),
                      paragraph(operator['name']+' / separate card portrait'),image(operator['portrait_url'])]
        for operator in assets['operator_portraits']:
            parts += [paragraph(operator['name']+' / '+operator['key'],True),
                      link('Original portrait',operator['portrait_url']),
                      link('Original full illustration',assets['hero_illustrations'][operator['key']])]
    if slug == 'video':
        for key,pair in assets['operator_motion_clips'].items():
            parts += [paragraph(key,True),link('Original entrance video',pair['enter']),link('Original idle video',pair['idle'])]
    if slug == 'textures':
        for asset in assets['interface_textures']:
            parts += [paragraph(asset['selector']),link(asset['name'],asset['url'])]
    if slug == 'typography':
        for face in evidence['css']['font_faces']:
            parts += [paragraph(face['declarations']),link('Original font declaration stylesheet',face['css'])]
    if slug == 'audio':
        for item in audio['asset_references']: parts.append(link(item['url'].rsplit('/',1)[-1],item['url']))
    if slug == 'motion-system':
        for item in motion['keyframes']:
            parts += [paragraph(item['name'],True),paragraph(item['css']),link('Original keyframe source',item['source'])]
    if slug == 'javascript':
        for item in evidence['scripts']:
            parts += [link(item['url'].rsplit('/',1)[-1],item['url']),paragraph(f"Bytes: {item['bytes']} / SHA-256: {item['sha256']}")]
    parts += [link('Source: official home',ORIGIN+'/en-us'),link('Source: official Operators',ORIGIN+'/en-us/operator'),link('Back to contents','#handbook-top')]

CONTENT = ''.join(parts)
raw = (ORIGINAL/'article-response.html').read_text(encoding='utf-8')
soup = BeautifulSoup(raw,'html.parser')
old_title = soup.select_one('.__20-NoticeDetail_title__cALu9').get_text()
content_match = re.search(r'(<div class="'+re.escape(CONTENT_CLASS)+r'">)(.*?)(</div>)',raw,re.S)
assert content_match
old_body = content_match.group(2)
raw = raw[:content_match.start(2)] + CONTENT + raw[content_match.end(2):]
# Join the original Flight chunks so replacing a text record cannot split a UTF-8 payload.
flight_pattern = re.compile(r'<script>self\.__next_f\.push\((\[.*?\])\)</script>',re.S)
flight_parts = []
for match in flight_pattern.finditer(raw):
    data = json.loads(match.group(1))
    if len(data)>1 and data[0]==1: flight_parts.append(data[1])
flight = ''.join(flight_parts)
record = re.search(r'([0-9a-f]+):T([0-9a-f]+),(<img[^\n]+)',flight)
assert record, 'Original article text record not found'
start = record.start(3)
old_size = int(record.group(2),16)
tail_bytes = flight[start:].encode('utf-8')
original_data = tail_bytes[:old_size].decode('utf-8')
assert 'Event Time' in original_data
new_size = len(CONTENT.encode('utf-8'))
flight = flight[:record.start()] + f'{record.group(1)}:T{new_size:x},' + CONTENT + tail_bytes[old_size:].decode('utf-8')
flight = flight.replace(json.dumps(old_title,ensure_ascii=False),json.dumps(TITLE,ensure_ascii=False))
bulletin_start = flight.index('"bulletin":') + len('"bulletin":')
bulletin, _ = json.JSONDecoder().raw_decode(flight[bulletin_start:])
bulletin['title'] = TITLE
bulletin['data'] = CONTENT
(ORIGINAL/'handbook-bulletin.json').write_text(json.dumps({'code':0,'data':bulletin},ensure_ascii=False),encoding='utf-8')
written = False
def replace_flight(match):
    global written
    data = json.loads(match.group(1))
    if len(data)<2 or data[0]!=1: return match.group(0)
    if written: return ''
    written=True
    payload=json.dumps([1,flight],ensure_ascii=False).replace('<','\\u003c').replace('>','\\u003e').replace('&','\\u0026')
    return '<script>self.__next_f.push('+payload+')</script>'
raw=flight_pattern.sub(replace_flight,raw)
raw=raw.replace(escape(old_title),escape(TITLE)).replace(old_title,TITLE)
# The untouched provider refetches its bulletin on mount. Redirect only that
# public content-data GET to the same local content, leaving all UI logic alone.
data_adapter = '''<script>
(() => {
  const originalOpen = XMLHttpRequest.prototype.open;
  XMLHttpRequest.prototype.open = function(method, url, ...options) {
    const target = new URL(url, location.href);
    if (String(method).toUpperCase() === "GET" && target.pathname === "/api/bulletin/7013") {
      url = location.origin + "/original/handbook-bulletin.json";
    }
    return originalOpen.call(this, method, url, ...options);
  };
})();
</script>'''
# Let the untouched server payload hydrate first. Its original provider then
# applies our bulletin through the source application's ordinary data update.
# This avoids changing the private React Flight serialization contract.
raw=(ORIGINAL/'article-response.html').read_text(encoding='utf-8')
raw=raw.replace('<head>','<head>'+data_adapter,1)
(ROOT/'handbook/index.html').write_text(raw,encoding='utf-8')

routes = {ARTICLE:'handbook/index.html'}
for name,path in [('home','/en-us'),('operators','/en-us/operator'),('news','/en-us/news')]:
    target=ORIGINAL/(name+'-response.html')
    if not target.exists():
        with urlopen(ORIGIN+path,timeout=45) as response: target.write_bytes(response.read())
    routes[path]=str(target.relative_to(ROOT)).replace('\\','/')
    if name=='home': (ROOT/'starter/index.html').write_bytes(target.read_bytes())
(ORIGINAL/'routes.json').write_text(json.dumps(routes,indent=2),encoding='utf-8')
coverage = {
 'scope':'Original English home, operators, news and directly linked article 7013; depth one.',
 'handbook':{'template_url':ORIGIN+ARTICLE,'sections':len(CHAPTERS),'authored_css_rules':0,
             'authored_component_classes':0,'authored_animations':0,'change':'Article content and title data only, through the original bulletin provider. Original SSR and Flight payloads are unchanged.'},
 'runtime':'Unmodified original CDN scripts; React owns original controls and layout. A data-only XHR adapter routes bulletin 7013 to the local handbook JSON.',
 'routes':routes,
 'used_source_rules':used_rules,
 'materials':{'portrait_records':len(assets['operator_portraits']),'hero_illustrations':len(assets['hero_illustrations']),
              'video_pairs':len(assets['operator_motion_clips']),'taxonomy_icons':len(assets['taxonomy_icons']),
              'audio_references':len(audio['asset_references']),'css_files':len(evidence['stylesheets']),'js_chunks':len(evidence['scripts'])},
 'limits':['All homepage and catalogue components are retained through the original page runtime; not every interaction has yet been browser-tested.',
           'Account/payment actions and deeper linked routes are outside this local depth-one mirror.',
           'Large images, video, fonts and audio remain remote original assets; no local media archive.'],
 'raw_response_hashes':{p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in ORIGINAL.glob('*-response.html')}
}
(ORIGINAL/'coverage.json').write_text(json.dumps(coverage,indent=2,ensure_ascii=False),encoding='utf-8')
print('Built original article runtime with 29 handbook sections; original home replaces abstract starter.')
