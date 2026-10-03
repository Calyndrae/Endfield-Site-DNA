// SoundControlStore (zustand persist 'ef-official-sound-control') — module 2285 from 8963-234f979bdd6b491c
// module 2285 from 8963-234f979bdd6b491c.js
// deps: 99880, 50144, 97521
const module_2285 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    E: () => n_1,
  });
  var zustandCreate = webpackRequire(99880),
    zustandPersistMiddleware = webpackRequire(50144);
  let n_1 = webpackRequire(97521).isServer
    ? {
        getState: () => ({
          enabled: !0,
        }),
        setState: () => {},
      }
    : (0, zustandCreate.v)(
        (0, zustandPersistMiddleware.Zr)(
          (e_2, t_3) => ({
            enabled: !0,
          }),
          {
            name: "ef-official-sound-control",
          },
        ),
      );
};
