/**
 * BackgroundVideo — readable reconstruction of webpack module 73992 (chunk 8963-234f979bdd6b491c.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8963-234f979bdd6b491c.js
 *
 * VideoPlayers exports a single BackgroundVideo component (export Q) chosen at module load from the user agent: VideoCanvas when the UA is QQ Browser, or iOS with Quark/Baidu app; otherwise VideoBasic. VideoBasic renders a muted, looped, playsInline <video> with webm then mp4 <source>s, sets Tencent x5-video-player-type=h5 / x5-playsinline attributes, retries play on WeixinJSBridgeReady for iOS WeChat, falls back to a one-time window click when autoplay is rejected, and scales width/height by devicePixelRatio on loadedmetadata. VideoCanvas creates an offscreen <video> and draws it into a <canvas> via a requestAnimationFrame loop throttled to frameLimit fps (default 30) using an accumulator against 1000/fps ms. Both expose {videoElement, play, pause} through useImperativeHandle, and a UserAgentMatcher class tests UA regexes for baiduApp, quark, wechat, huawei, harmonyOS, oppo, vivo, android, ios, qq, qqBrowser and honor.
 *
 * Exports (minified key → meaning):
 *   Q → BackgroundVideo
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 73992 from 8963-234f979bdd6b491c.js
// deps: 97028, 97521, 96424, 73235, 44752
const module_73992 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    Q: () => BackgroundVideo,
  });
  var navigatorRef,
    windowRef,
    userAgentValue,
    React = webpackRequire(97028),
    SiteUtils = webpackRequire(97521),
    jsx = webpackRequire(96424),
    classnames = webpackRequire(73235),
    classnamesDefault = webpackRequire.n(classnames);
  let UA_PATTERNS = {
    baiduApp: /baiduboxapp/i,
    quark: /quark/i,
    wechat: /micromessenger/i,
    huawei: /huawei/i,
    harmonyOS: /harmonyos/i,
    oppo: /heytap/i,
    vivo: /vivo/i,
    android: /android/i,
    ios: /iphone|ipad/i,
    qq: /\b(qq)\/([\w\.]+)/i,
    qqBrowser: /m?qqbrowser\/([\w\.]+)/i,
    honor: /bdhonorbrowser/i,
  };
  class UserAgentMatcher {
    testUA(patternKey) {
      return !!this.ua.match(this.patterns[patternKey]);
    }
    constructor(userAgent, extraPatterns) {
      ((this.ua = userAgent),
        (this.patterns = {
          ...UA_PATTERNS,
          ...extraPatterns,
        }));
    }
  }
  var stylesModule = webpackRequire(44752),
    styles = webpackRequire.n(stylesModule);
  let VideoBasic = React.forwardRef((basicProps, basicRef) => {
    let {
        classNames: basicClassNames,
        style: basicStyle,
        src: basicSrc,
        autoplay: basicAutoplay,
      } = basicProps,
      basicVideoRef = (0, React.useRef)(null),
      {
        mp4: basicMp4,
        webm: basicWebm,
        image: basicPoster,
      } = (0, React.useMemo)(
        () =>
          "string" == typeof basicSrc
            ? {
                mp4: basicSrc,
              }
            : basicSrc,
        [],
      );
    (0, React.useEffect)(() => {
      let basicUaMatcher = new UserAgentMatcher(window.navigator.userAgent);
      (basicVideoRef.current.setAttribute("x5-video-player-type", "h5"),
        basicVideoRef.current.setAttribute("x5-playsinline", ""));
      let tryAutoplay = () => {
        basicVideoRef.current.play().catch((autoplayError) => {
          var pausedVideo;
          (null == (pausedVideo = basicVideoRef.current) ? void 0 : pausedVideo.paused) &&
            (console.log(
              "[backgroundVideo] autoplay failed, waiting for user interaction, err:",
              autoplayError,
            ),
            window.addEventListener(
              "click",
              () => {
                basicVideoRef.current.play();
              },
              {
                once: !0,
              },
            ));
        });
      };
      (basicAutoplay &&
        (basicUaMatcher.testUA("ios") &&
          basicUaMatcher.testUA("wechat") &&
          document.addEventListener("WeixinJSBridgeReady", tryAutoplay, !1),
        tryAutoplay()),
        basicVideoRef.current.addEventListener("loadedmetadata", () => {
          basicVideoRef.current &&
            ((basicVideoRef.current.width = basicVideoRef.current.videoWidth / window.devicePixelRatio),
            (basicVideoRef.current.height = basicVideoRef.current.videoHeight / window.devicePixelRatio));
        }));
    }, []);
    let [basicVideoElement, setBasicVideoElement] = React.useState(null);
    return (
      (0, React.useImperativeHandle)(
        basicRef,
        () => ({
          videoElement: basicVideoElement,
          play: () => basicVideoRef.current.play(),
          pause: () => basicVideoRef.current.pause(),
        }),
        [basicVideoElement],
      ),
      (0, jsx.jsx)("div", {
        className: classnamesDefault()(styles().videoContainer, basicClassNames),
        style: basicStyle,
        children: (0, jsx.jsxs)("video", {
          autoPlay: basicAutoplay,
          preload: "auto",
          muted: !0,
          loop: !0,
          playsInline: !0,
          controls: !1,
          ref: (basicVideoNode) => {
            ((basicVideoRef.current = basicVideoNode), setBasicVideoElement(basicVideoNode));
          },
          poster: basicPoster,
          children: [
            basicWebm &&
              (0, jsx.jsx)("source", {
                src: basicWebm,
                type: "video/webm",
              }),
            (0, jsx.jsx)("source", {
              src: basicMp4,
              type: "video/mp4",
            }),
          ],
        }),
      })
    );
  });
  VideoBasic.displayName = "VideoBasic";
  let createFrameLoop = function (frameCallback) {
      let fps = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 60,
        frameInterval = 1e3 / fps,
        isRunning = !0,
        accumulated = 0,
        perf = window.performance,
        lastTime = 0,
        tick = () => {
          let now = perf.now();
          ((accumulated += now - lastTime),
            (lastTime = now),
            accumulated > frameInterval &&
              ((accumulated -= Math.floor(accumulated / frameInterval) * frameInterval), frameCallback()),
            isRunning && requestAnimationFrame(tick));
        };
      return (
        tick(),
        () => {
          isRunning = !1;
        }
      );
    },
    VideoCanvas = React.forwardRef((canvasProps, canvasRef) => {
      let {
          classNames: canvasClassNames,
          style: canvasStyle,
          src: canvasSrc,
          autoplay: canvasAutoplay,
          frameLimit = 30,
        } = canvasProps,
        canvasElementRef = (0, React.useRef)(null),
        {
          mp4: canvasMp4,
          webm: canvasWebm,
          image: canvasPoster,
        } = (0, React.useMemo)(
          () =>
            "string" == typeof canvasSrc
              ? {
                  mp4: canvasSrc,
                }
              : canvasSrc,
          [],
        ),
        offscreenVideoRef = (0, React.useRef)(null),
        [canvasVideoElement, setCanvasVideoElement] = React.useState(null);
      return (
        (0, React.useEffect)(() => {
          let offscreenVideo = document.createElement("video");
          if (
            ((offscreenVideoRef.current = offscreenVideo), setCanvasVideoElement(offscreenVideo), canvasWebm)
          ) {
            let webmSource = document.createElement("source");
            ((webmSource.src = canvasWebm), offscreenVideo.appendChild(webmSource));
          }
          let mp4Source = document.createElement("source");
          ((mp4Source.src = canvasMp4),
            offscreenVideo.appendChild(mp4Source),
            (offscreenVideo.muted = !0),
            (offscreenVideo.autoplay = !!canvasAutoplay),
            (offscreenVideo.preload = "auto"),
            (offscreenVideo.loop = !0),
            (offscreenVideo.playsInline = !0),
            canvasPoster && (offscreenVideo.poster = canvasPoster),
            canvasAutoplay &&
              offscreenVideo.play().catch((canvasAutoplayError) => {
                offscreenVideo.paused &&
                  (console.log(
                    "[backgroundVideo] canvas video autoplay failed, waiting for user interaction, err:",
                    canvasAutoplayError,
                  ),
                  window.addEventListener(
                    "click",
                    () => {
                      offscreenVideo.play();
                    },
                    {
                      once: !0,
                    },
                  ));
              }));
          let canvasElement = canvasElementRef.current,
            stopFrameLoop = createFrameLoop(() => {
              let canvasContext = canvasElement.getContext("2d");
              canvasContext &&
                ((canvasElement.width = offscreenVideo.videoWidth),
                (canvasElement.height = offscreenVideo.videoHeight),
                canvasContext.drawImage(offscreenVideo, 0, 0, canvasElement.width, canvasElement.height));
            }, frameLimit);
          return () => {
            stopFrameLoop();
          };
        }, []),
        (0, React.useImperativeHandle)(
          canvasRef,
          () => ({
            videoElement: canvasVideoElement,
            play: () => offscreenVideoRef.current.play(),
            pause: () => offscreenVideoRef.current.pause(),
          }),
          [canvasVideoElement],
        ),
        (0, jsx.jsx)("div", {
          className: classnamesDefault()(styles().videoContainer, canvasClassNames),
          style: canvasStyle,
          children: (0, jsx.jsx)("canvas", {
            ref: canvasElementRef,
          }),
        })
      );
    });
  VideoCanvas.displayName = "VideoCanvas";
  let useCanvasPlayer = !1;
  if (!SiteUtils.isServer) {
    let globalUaMatcher = new UserAgentMatcher(
      null !=
        (userAgentValue =
          null == (windowRef = window) || null == (navigatorRef = windowRef.navigator)
            ? void 0
            : navigatorRef.userAgent)
        ? userAgentValue
        : "",
    );
    useCanvasPlayer =
      globalUaMatcher.testUA("qqBrowser") ||
      (globalUaMatcher.testUA("ios") &&
        (globalUaMatcher.testUA("quark") || globalUaMatcher.testUA("baiduApp")));
  }
  let BackgroundVideo = useCanvasPlayer ? VideoCanvas : VideoBasic;
};
