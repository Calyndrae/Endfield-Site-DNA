/**
 * HollowText — readable reconstruction of webpack module 52652 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * HollowText (export A) is a forwardRef div with the CSS-module `hollowText` class (outlined text) that renders the `text` prop, merging className and style. displayName is set to 'HollowText'. OperatorSection uses it for the large 'ENDFIELD' background decoration.
 *
 * Exports (minified key → meaning):
 *   A → HollowText
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 52652 from 8963-234f979bdd6b491c.js
// deps: 96424, 97028, 73235, 71460
const module_52652 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    A: () => HollowText,
  });
  var jsx = webpackRequire(96424),
    React = webpackRequire(97028),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames),
    stylesModule = webpackRequire(71460),
    styles = webpackRequire.n(stylesModule);
  let HollowTextForwardRef = React.forwardRef((props, ref) => {
    let { text: text, className: className, style: style } = props;
    return (0, jsx.jsx)("div", {
      ref: ref,
      className: classnamesDefault()(styles().hollowText, className),
      style: style,
      children: text,
    });
  });
  HollowTextForwardRef.displayName = "HollowText";
  let HollowText = HollowTextForwardRef;
};
