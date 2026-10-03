from pathlib import Path
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent
board = (root / "mood-board.html").as_uri()
with sync_playwright() as playwright:
    browser = playwright.chromium.connect_over_cdp("http://127.0.0.1:9224")
    context = browser.contexts[0]
    for width, height, label in [(1440, 900, "desktop"), (390, 844, "mobile")]:
        page = context.new_page()
        page.set_viewport_size({"width": width, "height": height})
        page.goto(board, wait_until="load", timeout=30000)
        page.screenshot(path=str(root / "screenshots" / f"mood-board-{label}.png"), full_page=True)
        result = page.evaluate("""() => ({
          title: document.title,
          images: [...document.images].map(image => ({loaded: image.complete && image.naturalWidth > 0, src: image.getAttribute('src')})),
          sections: document.querySelectorAll('section[id]').length,
          horizontalOverflow: document.documentElement.scrollWidth > innerWidth,
          font: getComputedStyle(document.querySelector('h1')).fontFamily
        })""")
        print(label, result)
        page.close()
    browser.close()
