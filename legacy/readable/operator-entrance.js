/**
 * Descriptive reconstruction of the operator-section timeline in official
 * homepage chunk 226-d5292700ff68fd13.js. Times are milliseconds from the
 * start of the timeline and come from the shipped `anime.timeline()` calls.
 */
export function playOperatorSectionEntrance(section, anime, orientation) {
  const portrait = orientation === "portrait";
  const landscape = orientation === "landscape";
  const desktop = (name) => section.querySelector(`.__02-Operator_pcContainer___7vsU .${name}`);
  const mobile = (name) => section.querySelector(`.__02-Operator_h5Container__KAmr7 .${name}`);
  const find = (name) => section.querySelector(`.${name}`);
  const timeline = anime.timeline();

  timeline.add({ targets: {}, duration: 300 });
  timeline.add({ targets: desktop("__02-Operator_decoFlag__xm7_G"),
    opacity: [0, 1], duration: portrait ? 1 : 400, easing: "easeOutQuad" }, 300);
  timeline.add({ targets: [
    desktop("__02-Operator_decoText__3RgCN"),
    desktop("__02-Operator_decoTape__9rSYk"),
    desktop("__02-Operator_decoLine___SBw8")],
    translateX: ["110%", "0"], duration: portrait ? 1 : 400,
    easing: "easeOutQuad" }, 300);
  timeline.add({ targets: [
    desktop("__02-Operator_titleInnerContainer__1rOJW"),
    desktop("__02-Operator_contentInnerContainer__G4CVt"),
    desktop("__02-Operator_headerInnerContainer__VBx3B")],
    translateX: ["-100%", "0"], duration: portrait ? 1 : 300,
    easing: "easeOutQuad" }, 600);
  timeline.add({ targets: find("__02-Operator_illustrationContainer__1Ubvh"),
    opacity: [0, 1], duration: 300, easing: "easeOutQuad" },
  landscape ? 600 : 300);
  timeline.add({ targets: find("__02-Operator_illustrationContainer__1Ubvh"),
    translateX: ["15rem", "0"], duration: 5000,
    easing: "cubicBezier(0,1,0,.95)" }, landscape ? 600 : 300);
  const mobileDrawer = mobile("__02-Operator_contentContainer__4GC_U");
  timeline.add({ targets: mobileDrawer, translateY: ["100%", "0"],
    duration: landscape ? 1 : 400, easing: "easeOutQuad",
    complete: () => { if (mobileDrawer) mobileDrawer.style.transition = "transform .3s ease"; }
  }, 600);
  timeline.add({ targets: [
    find("__02-Operator_switcher3d__I_Eai"),
    find("__02-Operator_operatorSwitcher__mVB3Y"),
    find("__02-Operator_listButton__jKExN"),
    find("__02-Operator_backButton__XytXx")].filter(Boolean),
    opacity: [0, 1], duration: 300, easing: "easeOutQuad" },
  landscape ? 1200 : 800);
  return timeline.finished;
}

// Class hashes above are from the captured build. Treat them as provenance;
// use stable local names when implementing a new child site.
