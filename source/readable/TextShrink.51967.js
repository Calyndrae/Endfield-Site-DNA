/**
 * TextShrink — readable reconstruction of webpack module 51967 (chunk [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/app/[lang]/(main)/(subpage)/news/page-e5ae1407cb8bddb1.js
 *
 * TextShrink: a component (export A) that returns a string, truncating `text` with '...' so it fits options.length character widths. shrinkText measures with a 2D canvas context using font '16px <options.font>' and a width budget of 16 * options.length px: starting at length-3 characters it grows the candidate while candidate+'...' still fits, and returns candidate+'...' once the plain candidate also overflows; if no canvas is available it falls back to slice(0, length-3)+'...'. Returns the text unchanged when length is 0 or the text is already shorter. On the server it returns the raw text; on the client the result is recomputed in an effect whenever text or options change.
 *
 * Exports (minified key → meaning):
 *   A → TextShrink
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 51967 from [lang]__(main)__(subpage)__news__page-e5ae1407cb8bddb1.js
// deps: 97028, 97521
const module_51967 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => TextShrink,
  });
  var React = webpackRequire(97028),
    SiteUtils = webpackRequire(97521);
  let shrinkText = (sourceText, shrinkOptions) => {
      var doc;
      if (0 === shrinkOptions.length || sourceText.length < shrinkOptions.length) return sourceText;
      let canvasContext = null == (doc = document) ? void 0 : doc.createElement("canvas").getContext("2d");
      if (!canvasContext)
        return sourceText.slice(0, shrinkOptions.length - 3 > 0 ? shrinkOptions.length - 3 : 0) + "...";
      canvasContext.font = "".concat(16, "px ").concat(shrinkOptions.font);
      let truncated = sourceText.slice(0, shrinkOptions.length - 3);
      for (let cutIndex = shrinkOptions.length - 3; cutIndex < sourceText.length; cutIndex++) {
        let candidate = sourceText.slice(0, cutIndex),
          { width: widthWithEllipsis } = canvasContext.measureText(candidate + "...");
        if (widthWithEllipsis < 16 * shrinkOptions.length) truncated = candidate;
        else {
          let { width: widthPlain } = canvasContext.measureText(candidate);
          if (widthPlain < 16 * shrinkOptions.length) continue;
          return truncated + "...";
        }
      }
      return sourceText;
    },
    TextShrink = (props) => {
      let { text: text, options: options } = props,
        [displayText, setDisplayText] = (0, React.useState)(text);
      return (
        (0, React.useEffect)(() => {
          setDisplayText(SiteUtils.isServer ? text : shrinkText(text, options));
        }, [text, options]),
        displayText
      );
    };
};
