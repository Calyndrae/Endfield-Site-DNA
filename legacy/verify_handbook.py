"""Check the single-page guide and starter in installed Chrome; no installs."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent
report = {}
with sync_playwright() as playwright:
    browser = playwright.chromium.launch(
        executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        headless=True,
        args=["--disable-background-networking", "--disable-component-update",
              "--disable-default-apps", "--no-first-run", "--disk-cache-size=1048576"],
    )
    try:
        context = browser.new_context(viewport={"width":1440,"height":900}, device_scale_factor=1)
        page = context.new_page()
        errors = []
        page.on("pageerror", lambda error: errors.append(str(error)))
        page.goto((root / "handbook/index.html").as_uri(), wait_until="load", timeout=45000)
        page.evaluate("document.querySelectorAll('img').forEach(image=>image.loading='eager')")
        page.wait_for_function("[...document.images].every(image=>image.complete && image.naturalWidth > 0)", timeout=15000)
        assert page.locator(".handbook-chapter").count() == 29
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
        page.screenshot(path=str(root / "screenshots/handbook-desktop.png"))
        page.locator('.nav-group a[href="#text-rhythm"]').click()
        page.wait_for_function("location.hash === '#text-rhythm'")
        page.wait_for_timeout(900)
        page.locator("#text-rhythm").scroll_into_view_if_needed()
        page.screenshot(path=str(root / "screenshots/handbook-spacing.png"))
        page.locator(".demo-filter-trigger").click()
        page.wait_for_timeout(180)
        assert page.locator(".demo-filter-trigger").get_attribute("aria-expanded") == "true"
        assert page.locator(".demo-filter-panel").evaluate("e=>getComputedStyle(e).opacity") == "1"
        page.locator("#entrance [data-replay]").click()
        assert page.locator("#entrance .demo-stage").evaluate("e=>e.classList.contains('replaying')")
        report["handbook_desktop"] = {"sections":29,"images":page.locator('img').count(),"overflow":False,"anchor":"text-rhythm","filter_and_replay":"pass"}

        page.set_viewport_size({"width":390,"height":844})
        page.goto((root / "handbook/index.html").as_uri(), wait_until="load", timeout=30000)
        page.locator(".mobile-nav-toggle").click()
        page.locator('.nav-group a[href="#audio"]').click()
        assert page.locator(".mobile-nav-toggle").get_attribute("aria-expanded") == "false"
        page.wait_for_function("location.hash === '#audio'")
        page.wait_for_function("Math.abs(document.querySelector('#audio').getBoundingClientRect().top - 48) < 3", timeout=15000)
        page.wait_for_timeout(250)
        assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
        page.screenshot(path=str(root / "screenshots/handbook-mobile.png"))
        report["handbook_mobile"] = {"viewport":"390x844","menu_anchor":"audio","anchor_top":page.locator('#audio').evaluate('e=>e.getBoundingClientRect().top'),"overflow":False}

        for width,height in ((1440,900),(390,844)):
            page.set_viewport_size({"width":width,"height":height})
            page.goto((root / "starter/index.html").as_uri(), wait_until="load", timeout=30000)
            page.wait_for_function("!document.querySelector('#loader')", timeout=15000)
            assert page.locator(".record-card").count() == 8
            page.locator("#categoryFilter").select_option("signal")
            assert page.locator(".record-card").count() == 3
            page.locator("#zoneFilter").select_option("north")
            assert page.locator(".record-card").count() == 1
            page.locator(".record-card").click()
            assert page.locator("#detailDialog").evaluate("e=>e.open")
            assert page.locator("#detailTitle").inner_text() == "Beacon"
            page.locator("#detailBack").click()
            assert not page.locator("#detailDialog").evaluate("e=>e.open")
            assert page.evaluate("document.documentElement.scrollWidth <= innerWidth")
            page.evaluate("scrollTo(0,0)")
            page.wait_for_timeout(400)
            page.screenshot(path=str(root / f"screenshots/starter-{width}.png"))
            report[f"starter_{width}"] = {"filters":"8 -> 3 -> 1","detail":"Beacon / close pass","overflow":False}
        assert not errors, errors
        report["javascript_errors"] = errors
        context.close()
    finally:
        browser.close()
(root / "handbook_verification.json").write_text(json.dumps(report, indent=2), encoding="utf-8")
print(json.dumps(report, indent=2))
