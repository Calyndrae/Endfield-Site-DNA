"""Capture real site components using the installed Chrome, no crawler."""
from pathlib import Path
import json
from playwright.sync_api import sync_playwright

root = Path(__file__).resolve().parent
shots = root / "screenshots"
shots.mkdir(exist_ok=True)
measurements = {}

def dismiss_consent(page):
    try:
        page.get_by_text("OK", exact=True).first.click(timeout=2000)
    except Exception:
        pass

with sync_playwright() as playwright:
    browser = playwright.chromium.launch(
        executable_path=r"C:\Program Files\Google\Chrome\Application\chrome.exe",
        headless=True,
        args=["--disable-background-networking", "--disable-component-update",
              "--disable-default-apps", "--no-first-run", "--disk-cache-size=1048576",
              "--media-cache-size=1048576"],
    )
    context = browser.new_context(viewport={"width": 1440, "height": 900}, device_scale_factor=1)
    page = context.new_page()
    page.goto("https://endfield.gryphline.com/en-us/operator", wait_until="domcontentloaded", timeout=60000)
    page.wait_for_timeout(5000)
    dismiss_consent(page)
    page.wait_for_timeout(1000)

    targets = {
        "real-operator-card.png": ".OperatorItem_operatorItem__gPezu",
        "real-filters.png": ".__12-OperatorList_dropdowns__xnSNd",
        "real-navigation-rail.png": ".Header_pcHeaderContainer__Sy_8l",
        "real-footer.png": ".footer_footer__6jTqE",
    }
    for name, selector in targets.items():
        locator = page.locator(selector).first
        try:
            locator.screenshot(path=str(shots / name), timeout=15000)
            print(name, (shots / name).stat().st_size)
        except Exception as exc:
            print("capture failed", name, str(exc)[:200])

    card = page.locator(".OperatorItem_operatorItem__gPezu").first
    measurements["card_before_hover"] = card.evaluate("el => ({transform:getComputedStyle(el).transform,transition:getComputedStyle(el).transition})")
    card.hover()
    page.wait_for_timeout(300)
    measurements["card_after_hover"] = card.evaluate("el => ({transform:getComputedStyle(el).transform,rect:el.getBoundingClientRect().toJSON()})")
    card.screenshot(path=str(shots / "real-operator-card-hover.png"))

    dropdown = page.locator(".Dropdown_trigger__mA0mP").first
    dropdown.click()
    page.wait_for_timeout(250)
    panel = page.locator(".Dropdown_panel__ujBcP").first
    panel.screenshot(path=str(shots / "real-filter-open.png"))
    measurements["dropdown_open"] = panel.evaluate("el => ({opacity:getComputedStyle(el).opacity,transform:getComputedStyle(el).transform,visibility:getComputedStyle(el).visibility})")

    (root / "interaction_measurements.json").write_text(json.dumps(measurements, indent=2), encoding="utf-8")
    context.close()
    browser.close()
