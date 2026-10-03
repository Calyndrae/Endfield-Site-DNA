"""Build one long, source-linked technical handbook with anchored chapters."""
from pathlib import Path
from html import escape
import json
import re
from handbook_content import CHAPTERS

root = Path(__file__).resolve().parent
out = root / "handbook"
out.mkdir(exist_ok=True)
evidence = json.loads((root / "evidence.json").read_text(encoding="utf-8"))
motion = json.loads((root / "motion_catalog.json").read_text(encoding="utf-8"))
assets = json.loads((root / "asset_role_manifest.json").read_text(encoding="utf-8"))
measure = json.loads((root / "visual_measurements.json").read_text(encoding="utf-8"))
audio = json.loads((root / "audio_manifest.json").read_text(encoding="utf-8"))

HOME = "https://endfield.gryphline.com/en-us#operator"
OPERATORS = "https://endfield.gryphline.com/en-us/operator"
NEWS = "https://endfield.gryphline.com/en-us/news"
CDN = "https://web-static.hg-cdn.com/endfield/official-v4/_next/static/"
OP_CSS = CDN + "css/cca0e7eae4809d1e.css"
FONT_CSS = CDN + "css/637308dda4dd7f2d.css"
HOME_JS = CDN + "chunks/226-d5292700ff68fd13.js"
OP_JS = CDN + "chunks/app/%5Blang%5D/(main)/(subpage)/operator/page-3a80441c18fd566a.js"
VIDEO_JS = CDN + "chunks/8498-2c5f8c0351c886c2.js"
ASSET_JS = CDN + "chunks/8963-234f979bdd6b491c.js"

def a(label, href):
    return f'<a href="{escape(href, quote=True)}" target="_blank" rel="noreferrer">{escape(label)} ↗</a>'

def table(headers, rows):
    header = "".join(f"<th>{escape(str(h))}</th>" for h in headers)
    body = "".join("<tr>" + "".join(f"<td>{cell}</td>" for cell in row) + "</tr>" for row in rows)
    return f'<div class="table-wrap"><table><thead><tr>{header}</tr></thead><tbody>{body}</tbody></table></div>'

def code(value):
    return f"<code>{escape(str(value))}</code>"

def link_filename(url):
    return a(url.rsplit("/", 1)[-1], url)

def extra_table(kind):
    if kind == "rhythm":
        return table(["Element", "Official value", "At 1440 × 900", "Effect"], [
            ("REC heading", "1.5625rem / width 8.75rem", "14.06px / 78.75px", "A compact caption, not a hero"),
            ("Metadata strip", "margin-top .875rem / height 1.25rem", "7.875px / 11.25px", "Tight annotation cluster"),
            ("Stars", "margin-top 1.25rem / gap .1875rem", "11.25px / 1.69px", "Small pause, then tight internal rhythm"),
            ("Name", "4.875rem / line-height 1", "43.875px / 43.875px", "Dominant reading event"),
            ("Title-to-content", "10rem vertical anchor delta", "90px", "Separates identity from details"),
            ("Tags", "height 2rem / row gap 2.5rem", "18px / 22.5px", "Labels read as discrete records"),
            ("Biography", "margin-top 2rem / line gap .5rem", "18px / 4.5px", "A calm block after tags")])
    if kind == "layers":
        return table(["Plane", "Evidence", "Interaction rule"], [
            ("Loader", "position:fixed; full viewport; z-index:100; #141414", "Blocks stage until ready"),
            ("Global rail", "Fixed navigation with expanding label and active overlay", "Stays above scene"),
            ("Character art", "Absolute image, vertical CSS mask", "pointer-events:none"),
            ("Enter/idle video", "Masked 5–85% vertically; inner horizontal 10–90%", "pointer-events:none"),
            ("Text and metadata", "Absolute content with three-ring white text-shadow", "pointer-events:auto"),
            ("Portrait drawer", "z-index:1; clipped polygon edge", "Controls remain clickable"),
            ("Ambient decoration", "opacity .05 or .08; mask and clip shapes", "No hit target"),
            ("Footer", "Full-width #101010 closing plate", "Normal document flow")])
    if kind == "rendering":
        return table(["Part", "Verified implementation", "Child-site implication"], [
            ("Scene", "Three.js WebGLRenderer({antialias:true,alpha:true})", "Optional separate real-time chapter"),
            ("Camera", "PerspectiveCamera(75, aspect, .1, 10000); z=2000", "Preserve stage scale"),
            ("Geometry", "Six fetched Float32Array .bin point clouds", "No encrypted model payload found"),
            ("Points", "position + pointMoreData attributes; transparent ShaderMaterial", "Vertex and fragment shaders drive look"),
            ("Scan", "Three moving scan lines; 20-unit width; yellow point emphasis", "Turn geometry reveal into motion"),
            ("Quality", "10k-point benchmark; >30ms level 1; >60ms level 2", "Adapt rays and pixel ratio"),
            ("Rays", "Instanced buffer geometry; 8 / 14 / 20 per batch", "Keep streaks budgeted"),
            ("Interaction", "Auto spin .005 rad/frame; drag .01 rad/pixel", "Allow exploration without forcing it"),
            ("Character stage", "33 pre-rendered enter/idle MP4 pairs", "Separate from the Three.js scene")])
    if kind == "audio":
        return table(["Cue", "Shipped asset", "Source"], [
            (escape(item["url"].rsplit("/",1)[-1].split(".")[0]), link_filename(item["url"]), link_filename(item["chunks"][0]))
            for item in audio["asset_references"]])
    if kind == "sources":
        return table(["Depth", "Destination", "Evidence"], [
            ("0", a("Home / #operator", HOME), "Live page, CSS/JS and Chrome render"),
            ("1", a("All Operators", OPERATORS), "33 server-rendered cards, filters and detail JS"),
            ("1", a("News index", NEWS), "Yellow masthead and white card field"),
            ("1", a("Official external announcement", "https://endfield.hypergryph.com/news/8568"), "200 response; metadata in evidence.json"),
        ])
    if kind == "routes":
        return table(["Trigger", "Target", "Behaviour"], [
            ("All Operators", code("/{lang}/operator"), "window.open(..., '_blank')"),
            ("News index", code("/{lang}/news"), "new tab from home section"),
            ("News article", code("/{lang}/news/{cid}"), "dynamic content ID; no depth-two expansion"),
            ("Operator card", "Detail state in same page", "index in full 33-item array; .3s fade"),
        ])
    if kind == "colours":
        values = [("Ink", "#191919", 88, "rail, text, dark controls"), ("Paper", "#fff", 67, "main field"),
                  ("Signal", "#fffa00", 43, "chapter band, CTA, selected"), ("Rule", "#d9d9d9", 21, "separators"),
                  ("Muted", "#999", 18, "secondary labels"), ("Soft", "#f2f2f2", 13, "pale surfaces"),
                  ("Mint", "#00ffa2", "—", "card micro-rule"), ("Magenta", "#ff00f0", "—", "card micro-rule"),
                  ("Rarity 6", "#fe5a00", "—", "card base"), ("Rarity 5", "#ffbb03", "—", "card base"),
                  ("Rarity 4", "#9452fa", "—", "card base")]
        return table(["Role", "Value", "CSS count", "Placement"],
                     [(escape(role), f'<span class="swatch-dot" style="background:{value}"></span>{code(value)}', str(count), escape(placement)) for role,value,count,placement in values])
    if kind == "fonts":
        rows = []
        for face in evidence["css"]["font_faces"]:
            family = re.search(r"font-family:([^;]+)", face["declarations"])
            url = re.search(r"url\((https?://[^)]+\.woff2)\)", face["declarations"])
            if family and url and family.group(1) != "swiper-icons":
                rows.append((escape(family.group(1)), a("WOFF2", url.group(1)), link_filename(face["css"])))
        return table(["Declared face", "Font asset", "CSS source"], rows)
    if kind == "icons":
        return table(["Data key", "Role", "Original asset", "Appears in"], [
            (code(key), "Profession" if key in ("guard","caster","support","shielder","vanguard","assault") else "Element" if key != "none" else "Clear", link_filename(icon["url"]), escape(", ".join(icon["used_in"])))
            for key,icon in assets["taxonomy_icons"].items()])
    if kind == "portraits":
        return table(["#", "Name", "Profession / element", "Rarity", "Portrait"], [
            (f"{op['index']:02d}", escape(op["name"]), f"{code(op['profession'])} / {code(op['element'])}", str(op["rarity"]), link_filename(op["portrait_url"]))
            for op in assets["operator_portraits"]])
    if kind == "textures":
        return table(["Asset", "Use selector", "Open"], [
            (escape(item["name"]), code(item["selector"][:100]), a("source asset", item["url"]))
            for item in assets["interface_textures"]])
    if kind == "videos":
        return table(["Operator key", "Entrance clip", "Idle clip"], [
            (code(key), link_filename(pair["enter"]), link_filename(pair["idle"]))
            for key,pair in assets["operator_motion_clips"].items()])
    if kind == "entrance":
        return table(["Offset", "Target", "From → to", "Duration/easing"], [
            ("+0ms", "Lead-in", "still", "300ms"),
            ("+300ms", "Flag + deco text/tape/line", "opacity 0→1; X 110%→0", "400ms easeOutQuad"),
            ("+600ms", "Title/content/header", "X -100%→0", "300ms easeOutQuad"),
            ("+600ms desktop", "Art", "opacity 0→1; X 15rem→0", "300ms fade; 5000ms cubicBezier(0,1,0,.95)"),
            ("+600ms", "Portrait drawer", "Y 100%→0", "400ms easeOutQuad"),
            ("+1200 / +800ms", "Switcher, toggle, archive/back", "opacity 0→1", "300ms easeOutQuad")])
    if kind == "hover":
        return table(["Component", "Rest", "Hover/open", "Duration"], [
            ("Operator card", "transform:none", "translateY(-.5rem)", ".2s ease"),
            ("Avatar circle", "3px pale border", "2px #fffa00 border", ".3s ease-in-out"),
            ("Carousel arrow", "#fafafa", "#fffa00", ".2s ease"),
            ("Dropdown panel", "opacity 0, Y -.25rem", "opacity 1, Y 0", ".15s ease"),
            ("Dropdown option", "white", "rgba(0,0,0,.06)", ".2s ease"),
            ("Dark CTA", "#383838 / bar", "#484848 / arrow wedge", ".2s ease"),
            ("Share list", "opacity 0, X -1rem", "opacity 1, X 0", ".3s"),
            ("Header icon", "#d9d9d9", "#858585", ".2s colour")])
    if kind == "keyframes":
        return table(["@keyframes", "Official CSS", "Motion excerpt"], [
            (code(item["name"]), link_filename(item["source"]), code(item["css"][:220] + ("…" if len(item["css"]) > 220 else "")))
            for item in motion["keyframes"]])
    if kind == "chunks":
        return table(["Chunk", "Bytes", "SHA-256", "Purpose"], [
            (link_filename(item["url"]), f"{item['bytes']:,}", code(item["sha256"][:16] + "…"),
             "operator logic" if "operator/page-" in item["url"] else "video compositor" if "8498-" in item["url"] else "home behaviour" if "226-" in item["url"] else "clip map and scaling" if "8963-" in item["url"] else "runtime/vendor or other route")
            for item in evidence["scripts"]])
    if kind == "blueprint":
        return table(["Gate", "Review question", "Evidence"], [
            ("Content", "Are portrait, hero and motion separate roles?", "asset_role_manifest.json"),
            ("Desktop", "Do rail, card and filter rectangles match the intended canvas?", "1440×900 screenshot"),
            ("Portrait", "Do three cards fit without overflow?", "390×844 screenshot"),
            ("Motion", "Do loader and entrance finish after tasks and in-view?", "loader + entrance chapters"),
            ("Input", "Can keyboard/touch users filter and return from detail?", "manual interaction check"),
            ("Performance", "Are non-visible clips paused and heavy code lazy-loaded?", "network and browser check")])
    return ""

def demos(slug):
    if slug == "hover":
        return '<div class="demo-row"><button class="demo-card">HOVER OR FOCUS ME <span>↗</span></button><button class="demo-cta">OPEN DETAIL</button></div><p class="demo-caption">Local demonstration: card lift and clipped arrow follow the captured timings.</p>'
    if slug == "entrance":
        return '<div class="demo-stage"><span class="demo-flag">[ REC ]</span><div class="demo-data">FIELD RECORD<br><strong>CHARACTER 01</strong></div><div class="demo-art">VISUAL</div><div class="demo-controls">01 / 33 &nbsp; ◉</div></div><button class="replay" data-replay>REPLAY SEQUENCE ↺</button>'
    if slug == "loader":
        return '<div class="demo-loader"><span>FIELD RECORD / LOADING</span><strong>0% → 100%</strong><div class="demo-loader-bar"></div></div><button class="replay" data-replay>REPLAY WIPE ↺</button>'
    if slug == "scroll":
        return '<div class="demo-divider"><small>FIELD RECORD</small><strong>NEXT CHAPTER ↗</strong></div><button class="replay" data-replay>REPLAY DIVIDER ↺</button>'
    if slug == "filters":
        return '<div class="demo-filter"><button class="demo-filter-trigger" aria-expanded="false">CLASS <span>⌄</span></button><div class="demo-filter-panel">ALL<br>GUARD<br>CASTER<br>SUPPORTER</div></div><p class="demo-caption">Click the local trigger to inspect the 150ms panel and 200ms arrow.</p>'
    return ""

def source_links(chapter):
    slug = chapter["slug"]
    links = [("Official home", HOME), ("Official operators", OPERATORS)]
    if slug in {"site-map", "scope"}: links.append(("Official news", NEWS))
    if slug in {"typography", "text-rhythm"}: links.append(("Font CSS", FONT_CSS))
    if slug in {"catalogue", "cards", "filters", "icons", "alignment", "responsive"}: links += [("Operator CSS", OP_CSS), ("Operator page JS", OP_JS)]
    if slug in {"stage", "entrance", "hover", "scroll", "navigation", "controls", "layer-stack", "rendering-engine", "audio"}: links.append(("Homepage JS", HOME_JS))
    if slug in {"video"}: links += [("Video compositor JS", VIDEO_JS), ("Clip-map JS", ASSET_JS)]
    if slug in {"loader", "responsive"}: links.append(("Scaling/loading JS", ASSET_JS))
    if slug == "audio": links.append(("Audio player JS", CDN + "chunks/4231-53da7c4de7468a06.js"))
    return '<div class="source-links">' + "".join(a(label,url) for label,url in dict(links).items()) + '</div>'

def shipped_css_excerpt(slug):
    terms = {"cards":"OperatorItem_operatorItem", "hover":"OperatorItem_operatorItem",
             "footer":"footer_footer", "navigation":"Header_pcHeaderContainer",
             "filters":"Dropdown_dropdown", "loader":"Loading_", "controls":"CommonButton_"}
    term = terms.get(slug)
    if not term: return ""
    matches = [rule for rule in motion["rules"] if term in rule["selector"]][:2]
    if not matches: return ""
    snippets = []
    for rule in matches:
        declarations = rule.get("declarations", rule["properties"])
        snippets.append(rule["selector"] + " {\n" + "\n".join(f"  {key}: {value};" for key,value in declarations.items()) + "\n}")
    text = "\n\n".join(snippets)
    return '<div class="code-source"><span class="section-label">SHIPPED CSS / FORMATTED EXCERPT</span><p>Original hashed selectors and declaration values. Surrounding media-query context remains in the linked stylesheet.</p><pre><code>' + escape(text) + '</code></pre>' + a("Open original stylesheet",matches[0]["source"]) + '</div>'

def nav(current=None):
    categories = []
    for chapter in CHAPTERS:
        if chapter["category"] not in categories: categories.append(chapter["category"])
    groups = []
    for category in categories:
        links = "".join(f'<a class="{"active" if current==c["slug"] else ""}" href="#{c["slug"]}"><span>{CHAPTERS.index(c)+1:02d}</span>{escape(c["title"])}</a>' for c in CHAPTERS if c["category"]==category)
        groups.append(f'<div class="nav-group"><small>{escape(category)}</small>{links}</div>')
    return f'<aside class="sidebar"><a class="sidebar-brand" href="#top"><span>FIELD<br>NOTES</span><b>DNA / {len(CHAPTERS):02d}</b></a><a class="sidebar-home" href="#top">00 / HANDBOOK INDEX ↗</a>' + ''.join(groups) + '</aside>'

def shell(title, current, body):
    return f'''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>{escape(title)} — Endfield Site DNA</title><link rel="stylesheet" href="guide.css"></head><body><button class="mobile-nav-toggle" aria-expanded="false" aria-controls="mobile-nav">INDEX / {len(CHAPTERS):02d} <span>☰</span></button><div id="mobile-nav" class="nav-wrap">{nav(current)}</div><main class="main">{body}</main><script src="guide.js"></script></body></html>'''

READABLE_EXCERPTS = {
    "catalogue": ("operator-page.jsx", 1, 33),
    "cards": ("operator-page.jsx", 35, 75),
    "filters": ("operator-page.jsx", 77, 112),
    "responsive": ("rendering-and-scale.js", 1, 47),
    "video": ("rendering-and-scale.js", 49, 100),
    "loader": ("site-loader.jsx", 7, 61),
    "entrance": ("operator-entrance.js", 1, 75),
    "rendering-engine": ("particle-scene.js", 1, 90),
    "audio": ("audio-manager.js", 1, 88),
}

def chapter_section(chapter, index):
    slug = chapter["slug"]
    number = index + 1
    facts = "".join(f'<div class="fact"><small>{escape(label)}</small><strong>{escape(value)}</strong></div>' for label, value in chapter["facts"])
    paragraphs = "".join(f"<p>{escape(p)}</p>" for p in chapter["paragraphs"])
    rules = "".join(f"<li>{escape(rule)}</li>" for rule in chapter["rules"])
    image = chapter.get("image")
    figure = ""
    if image:
        png_header = (root / "screenshots" / image).read_bytes()[:24]
        image_width = int.from_bytes(png_header[16:20], "big")
        image_height = int.from_bytes(png_header[20:24], "big")
        official_page = OPERATORS if image.startswith("real-") or "operator-index" in image else HOME
        is_local_study = image.startswith("mood-board")
        label = "LOCAL VISUAL STUDY" if is_local_study else "REAL PAGE CHUNK / LIVE REFERENCE"
        caption = 'Local visual study based on the captured rules.' if is_local_study else f'Captured from the live site in installed Chrome. {a("View official page", official_page)}.'
        if slug == "rendering-engine": caption += ' This image shows the operator media stage; the separate particle scene is documented below from its JavaScript.'
        figure = f'<figure class="reference"><div class="figure-top"><span>{label}</span><span>↗</span></div><img loading="lazy" width="{image_width}" height="{image_height}" src="../screenshots/{escape(image,quote=True)}" alt="{escape(chapter["title"])} reference"><figcaption>{caption}</figcaption></figure>'
    source_html = f'<div class="reference-note"><span class="section-label">SOURCE TRAIL</span><p>Official pages and shipped chunks support the measured observations. The local JSON files retain exact selectors, URLs and hashes.</p>{source_links(chapter)}<a href="../evidence.json">Response evidence ↗</a><a href="../motion_catalog.json">Motion declarations ↗</a><a href="../asset_role_manifest.json">Asset roles ↗</a></div>'
    data_html = extra_table(chapter.get("table")) if chapter.get("table") else ""
    demo_html = demos(slug)
    excerpt_html = shipped_css_excerpt(slug)
    if slug in READABLE_EXCERPTS:
        filename, first, last = READABLE_EXCERPTS[slug]
        source = root / "readable" / filename
        if source.exists():
            lines = source.read_text(encoding="utf-8").splitlines()
            excerpt = "\n".join(lines[first - 1:last])
            excerpt_html += f'<div class="code-source"><span class="section-label">READABLE SOURCE RECONSTRUCTION / {escape(filename)}</span><p>Meaningful names replace selected minified site-owned identifiers. This is a documented reconstruction, not recovered original source.</p><pre><code>{escape(excerpt)}</code></pre><a href="../readable/{escape(filename,quote=True)}">Open full readable file ↗</a></div>'
    prev_href = "#top" if index == 0 else f'#{CHAPTERS[index - 1]["slug"]}'
    next_href = "#top" if index + 1 == len(CHAPTERS) else f'#{CHAPTERS[index + 1]["slug"]}'
    return f'''<section class="handbook-chapter" id="{escape(slug,quote=True)}" aria-labelledby="chapter-title-{number}"><header class="chapter-hero"><div class="hero-mark">{number:02d} / {len(CHAPTERS):02d}</div><p class="eyebrow">{escape(chapter["category"])} / TECHNICAL FIELD GUIDE</p><h2 id="chapter-title-{number}">{escape(chapter["title"])}</h2><p class="hero-summary">{escape(chapter["summary"])}</p></header><div class="chapter-body"><div class="facts">{facts}</div><div class="two-col"><article class="prose"><span class="section-label">01 / VERIFIED OBSERVATIONS & EXPLANATION</span>{paragraphs}<h3>Build rules for a child site</h3><ol class="rule-list">{rules}</ol></article><aside class="side-evidence">{figure}{source_html}</aside></div><div class="technical"><span class="section-label">02 / IMPLEMENTATION CONTRACT</span><h3>Make the rule concrete</h3><pre><code>{escape(chapter["code"])}</code></pre>{f'<div class="demo-box"><div class="demo-head">INTERACTIVE LOCAL MOTION STUDY</div>{demo_html}</div>' if demo_html else ''}{excerpt_html}</div>{f'<div class="technical"><span class="section-label">03 / EXACT SOURCE DATA</span><h3>Records and values</h3>{data_html}</div>' if data_html else ''}<div class="page-links"><a href="{prev_href}">← PREVIOUS</a><a href="#top">TOP / INDEX ↑</a><a href="{next_href}">NEXT →</a></div></div></section>'''

cards = "".join(f'<a class="chapter-card" href="#{c["slug"]}"><span>{i+1:02d} / {escape(c["category"])}</span><strong>{escape(c["title"])}</strong><p>{escape(c["summary"])}</p><b>JUMP TO SECTION ↘</b></a>' for i,c in enumerate(CHAPTERS))
index_body = f'''<div id="top" class="topbar"><span>ARKNIGHTS: ENDFIELD / RESEARCH / EN-US</span><a href="../mood-board.html">VISUAL BOARD ↗</a></div><header class="index-hero"><div class="index-kicker">ONE LONG PAGE / {len(CHAPTERS)} SECTIONS / DEPTH ONE</div><h1>BUILD A<br>CHILD SITE.</h1><p>This single-page technical handbook turns the live site's CSS, JavaScript, pictures, type, measurements, motion, audio and rendering into reusable rules. Follow the left index or read straight down.</p><div class="index-actions"><a href="#scope">START READING ↘</a><a href="../starter/index.html">OPEN WORKING STARTER ↗</a></div></header><div class="index-feature"><figure><img src="../screenshots/home-operator-verified.png" alt="Real Endfield operator section"><figcaption>Real homepage operator section captured in installed Chrome. {a("Open source page", HOME)}</figcaption></figure><div><span class="section-label">THE REFERENCE IS REAL</span><h2>One system, many states.</h2><p>Each section joins a real page crop to observations, exact values, implementation rules and source links. Code excerpts are semantically named reconstructions tied to shipped chunks.</p><div class="index-stats"><span><b>33</b> portrait records</span><span><b>33</b> 2D illustrations</span><span><b>33</b> motion pairs</span><span><b>12</b> keyed icons</span></div></div></div><section class="chapter-index"><span class="section-label">ON THIS SINGLE PAGE</span><h2>{len(CHAPTERS)} deep sections.</h2><div class="chapter-cards">{cards}</div></section>{''.join(chapter_section(chapter,index) for index,chapter in enumerate(CHAPTERS))}<footer class="guide-footer"><strong>FIELD NOTES / SITE DNA</strong><span>Sources: {a("home", HOME)} · {a("operators", OPERATORS)} · {a("news", NEWS)} · Captured 03 Oct 2026</span></footer>'''
(out / "index.html").write_text(shell("Single-page technical handbook", None, index_body), encoding="utf-8")
for stale in out.glob("*.html"):
    if stale.name != "index.html" and stale.resolve().parent == out.resolve():
        stale.unlink()
print(f"Built one HTML page with {len(CHAPTERS)} anchored sections")
