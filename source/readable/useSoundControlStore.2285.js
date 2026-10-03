/**
 * useSoundControlStore — readable reconstruction of webpack module 2285 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * SoundControlStore (export E) is a zustand store persisted under the localStorage key 'ef-official-sound-control' holding a single `enabled` flag that defaults to true. On the server it is replaced by a stub whose getState() returns {enabled: true} and whose setState() is a no-op. SoundEffects and MediaModal read it to decide whether to play SFX or re-enable background music.
 *
 * Exports (minified key → meaning):
 *   E → useSoundControlStore
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 2285 from 8963-234f979bdd6b491c.js
// deps: 99880, 50144, 97521
const module_2285 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    E: () => useSoundControlStore,
  });
  var zustandCreate = webpackRequire(99880),
    zustandPersistMiddleware = webpackRequire(50144);
  let useSoundControlStore = webpackRequire(97521).isServer
    ? {
        getState: () => ({
          enabled: !0,
        }),
        setState: () => {},
      }
    : (0, zustandCreate.v)(
        (0, zustandPersistMiddleware.Zr)(
          (set, get) => ({
            enabled: !0,
          }),
          {
            name: "ef-official-sound-control",
          },
        ),
      );
};
