/**
 * BgmPlayer — readable reconstruction of webpack module 58572 (chunk 4231-53da7c4de7468a06.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/4231-53da7c4de7468a06.js
 *
 * SoundPlayer is a compiled TypeScript audio library (tslib __extends/__awaiter/__generator helpers inlined). It defines an unexported SoundListManager (enable/disable broadcast to a sound list), a SoundBase class, a VolumeFader whose easing() ticks every 10ms with duration scaled by |end-start| (fadeIn uses easeInQuad, fadeOut uses easeOutQuad), an unexported SoundEffectsPool (default volume 0.5, 10 pooled <audio> elements primed with a silent WAV data URI), and the exported BgmPlayer class (export Mj) that wraps one <audio> with volume default 0.5, optional fade (default fadeDuration 1000ms), autoPlay retried on first window click, suspend/resume on document visibilitychange and on Skland SDK lifecycle events (pageDidAppear/appWillEnterForeground/pageDidDisappear/appDidEnterBackground), and PAUSE/RESUME control via the window event HG_MEDIA_BGM_EVENT. A trailing unexported VideoSourcePlayer plays mp4 directly or m3u8 through a lazily loaded hls.js chunk.
 *
 * Exports (minified key → meaning):
 *   Mj → BgmPlayer
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 58572 from 4231-53da7c4de7468a06.js
// deps:
const module_58572 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  (webpackRequire.d(webpackExports, {
    Mj: () => BgmPlayer,
  }),
    (function () {
      function SoundListManager(managerOptions) {
        var soundsOption;
        ((this._listener = []),
          (this._isEnable = managerOptions.initEnable),
          (this.soundList = null != (soundsOption = managerOptions.sounds) ? soundsOption : []),
          this.broadcast());
      }
      ((SoundListManager.prototype.broadcast = function () {
        var managerSelf = this;
        (this.soundList.forEach(function (managedSound) {
          managerSelf._isEnable ? managedSound.enable() : managedSound.disable();
        }),
          this._listener.forEach(function (enableListener) {
            return enableListener(managerSelf._isEnable);
          }));
      }),
        (SoundListManager.prototype.addSound = function (soundToAdd) {
          ((soundToAdd.isEnable = this._isEnable), this.soundList.push(soundToAdd));
        }),
        Object.defineProperty(SoundListManager.prototype, "isEnable", {
          get: function () {
            return this._isEnable;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (SoundListManager.prototype.enable = function () {
          ((this._isEnable = !0), this.broadcast());
        }),
        (SoundListManager.prototype.disable = function () {
          ((this._isEnable = !1), this.broadcast());
        }),
        (SoundListManager.prototype.onEnableStatusChange = function (statusListener) {
          var managerThis = this;
          return (
            this._listener.push(statusListener),
            function () {
              managerThis._listener = managerThis._listener.filter(function (candidateListener) {
                return candidateListener !== statusListener;
              });
            }
          );
        }));
    })());
  var SoundBase = function () {
    this.isEnable = !0;
  };
  function safePlay(mediaElement, onPlayError) {
    try {
      var playPromise = mediaElement.play();
      void 0 !== playPromise && playPromise.catch(onPlayError);
    } catch (playException) {
      onPlayError(playException);
    }
  }
  function easeInQuad(quadProgress) {
    return quadProgress * quadProgress;
  }
  function easeOutQuad(outQuadProgress) {
    return 1 - Math.pow(1 - outQuadProgress, 2);
  }
  var VolumeFader = (function () {
      function VolumeFaderClass() {
        ((this.timer = null), (this.isEasing = !1));
      }
      return (
        (VolumeFaderClass.prototype.fadeIn = function (fadeInOptions) {
          var faderThisIn = this;
          this.isEasing && this.timer && clearInterval(this.timer);
          var fadeInAudio = fadeInOptions.audio,
            fadeInTargetVolume = fadeInOptions.targetVolume,
            fadeInDuration = fadeInOptions.duration,
            fadeInOnStart = fadeInOptions.onStart,
            fadeInStartVolume = this.isEasing ? fadeInAudio.volume : 0;
          return this.easing({
            startValue: fadeInStartVolume,
            endValue: fadeInTargetVolume,
            duration: fadeInDuration,
            ease: easeInQuad,
            onStart: function () {
              ((faderThisIn.isEasing = !0), null == fadeInOnStart || fadeInOnStart());
            },
            onUpdate: function (fadeInVolume) {
              fadeInAudio.volume = fadeInVolume;
            },
            onEnd: function () {
              ((fadeInAudio.volume = fadeInTargetVolume), (faderThisIn.isEasing = !1));
            },
          });
        }),
        (VolumeFaderClass.prototype.fadeOut = function (fadeOutOptions) {
          var faderThisOut = this;
          this.isEasing && this.timer && clearInterval(this.timer);
          var fadeOutAudio = fadeOutOptions.audio,
            fadeOutDuration = fadeOutOptions.duration,
            fadeOutOnEnd = fadeOutOptions.onEnd;
          return this.easing({
            startValue: fadeOutAudio.volume,
            endValue: 0,
            duration: fadeOutDuration,
            ease: easeOutQuad,
            onStart: function () {
              faderThisOut.isEasing = !0;
            },
            onUpdate: function (fadeOutVolume) {
              fadeOutAudio.volume = fadeOutVolume;
            },
            onEnd: function () {
              ((fadeOutAudio.volume = 0),
                (faderThisOut.isEasing = !1),
                null == fadeOutOnEnd || fadeOutOnEnd());
            },
          });
        }),
        (VolumeFaderClass.prototype.easing = function (easingOptions) {
          var faderThisEasing = this,
            startValue = easingOptions.startValue,
            endValue = easingOptions.endValue,
            durationPerUnit = easingOptions.duration,
            easeFn = easingOptions.ease,
            easingOnStart = easingOptions.onStart,
            easingOnUpdate = easingOptions.onUpdate,
            easingOnEnd = easingOptions.onEnd,
            totalDuration = durationPerUnit * Math.abs(endValue - startValue);
          return new Promise(function (resolveEasing) {
            var easingStartTime = Date.now(),
              elapsed = 0;
            (null == easingOnStart || easingOnStart(),
              (faderThisEasing.timer = setInterval(function () {
                elapsed >= totalDuration
                  ? (faderThisEasing.timer && clearInterval(faderThisEasing.timer),
                    null == easingOnEnd || easingOnEnd(),
                    resolveEasing())
                  : (easingOnUpdate(startValue + (endValue - startValue) * easeFn(elapsed / totalDuration)),
                    (elapsed = Date.now() - easingStartTime));
              }, 10)));
          });
        }),
        VolumeFaderClass
      );
    })(),
    extendsHelper = (function () {
      var extendStatics = function (derivedCtor, baseCtor) {
        return (extendStatics =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (protoTarget, protoSource) {
              protoTarget.__proto__ = protoSource;
            }) ||
          function (copyTarget, copySource) {
            for (var copyKey in copySource)
              Object.prototype.hasOwnProperty.call(copySource, copyKey) &&
                (copyTarget[copyKey] = copySource[copyKey]);
          })(derivedCtor, baseCtor);
      };
      return function (derivedClass, baseClass) {
        if ("function" != typeof baseClass && null !== baseClass)
          throw TypeError("Class extends value " + String(baseClass) + " is not a constructor or null");
        function ProtoBridge() {
          this.constructor = derivedClass;
        }
        (extendStatics(derivedClass, baseClass),
          (derivedClass.prototype =
            null === baseClass
              ? Object.create(baseClass)
              : ((ProtoBridge.prototype = baseClass.prototype), new ProtoBridge())));
      };
    })(),
    getIterator = function (iterable) {
      var symbolIterator = "function" == typeof Symbol && Symbol.iterator,
        iteratorMethod = symbolIterator && iterable[symbolIterator],
        iterIndex = 0;
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if (iterable && "number" == typeof iterable.length)
        return {
          next: function () {
            return (
              iterable && iterIndex >= iterable.length && (iterable = void 0),
              {
                value: iterable && iterable[iterIndex++],
                done: !iterable,
              }
            );
          },
        };
      throw TypeError(symbolIterator ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    SILENT_WAV_DATA_URI =
      "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
  !(function (SoundBaseForEffects) {
    function SoundEffectsPool(poolOptions) {
      var volumeOption,
        effectsDictOption,
        poolSelf = SoundBaseForEffects.call(this) || this;
      ((poolSelf._pool = []),
        (poolSelf._allBulletReady = !1),
        (poolSelf._defaultVolume = null != (volumeOption = poolOptions.volume) ? volumeOption : 0.5),
        (poolSelf._effectsDict =
          null != (effectsDictOption = poolOptions.effectsDict) ? effectsDictOption : {}));
      for (
        var poolSizeOption = poolOptions.poolSize,
          poolSize = void 0 === poolSizeOption ? 10 : poolSizeOption,
          poolIndex = 0;
        poolIndex < poolSize;
        poolIndex++
      ) {
        var pooledAudio = document.createElement("audio");
        (pooledAudio.setAttribute("src", SILENT_WAV_DATA_URI),
          pooledAudio.load(),
          poolSelf._pool.push(pooledAudio));
      }
      return poolSelf;
    }
    (extendsHelper(SoundEffectsPool, SoundBaseForEffects),
      (SoundEffectsPool.prototype._loadAllBullet = function () {
        var iterError, iterReturn;
        if (!this._allBulletReady) {
          try {
            for (
              var poolIterator = getIterator(this._pool), poolIterResult = poolIterator.next();
              !poolIterResult.done;
              poolIterResult = poolIterator.next()
            ) {
              var bulletAudio = poolIterResult.value;
              safePlay(bulletAudio, function (bulletPlayError) {
                return console.warn(bulletPlayError);
              });
            }
          } catch (caughtError) {
            iterError = {
              error: caughtError,
            };
          } finally {
            try {
              poolIterResult &&
                !poolIterResult.done &&
                (iterReturn = poolIterator.return) &&
                iterReturn.call(poolIterator);
            } finally {
              if (iterError) throw iterError.error;
            }
          }
          this._allBulletReady = !0;
        }
      }),
      (SoundEffectsPool.prototype.enable = function () {
        this.isEnable = !0;
      }),
      (SoundEffectsPool.prototype.disable = function () {
        this.isEnable = !1;
      }),
      (SoundEffectsPool.prototype.play = function (effectKey, playOptions) {
        var poolThis = this;
        if (!1 !== this.isEnable) {
          var playAudio = this._pool.pop();
          if (playAudio) {
            var volumeOverride = (playOptions || {}).volume;
            playAudio.volume = void 0 === volumeOverride ? this._defaultVolume : volumeOverride;
            var effectSrc = this._effectsDict[effectKey] || effectKey;
            (playAudio.setAttribute("src", effectSrc),
              playAudio.load(),
              (playAudio.onended = function () {
                (playAudio.setAttribute("src", SILENT_WAV_DATA_URI),
                  playAudio.load(),
                  poolThis._pool.push(playAudio));
              }),
              safePlay(playAudio, function (effectPlayError) {
                (console.warn(effectPlayError), poolThis._pool.push(playAudio));
              }),
              this._loadAllBullet());
          }
        }
      }));
  })(SoundBase);
  var noop = function () {},
    extendsHelper2 = (function () {
      var extendStatics2 = function (derivedCtor2, baseCtor2) {
        return (extendStatics2 =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (protoTarget2, protoSource2) {
              protoTarget2.__proto__ = protoSource2;
            }) ||
          function (copyTarget2, copySource2) {
            for (var copyKey2 in copySource2)
              Object.prototype.hasOwnProperty.call(copySource2, copyKey2) &&
                (copyTarget2[copyKey2] = copySource2[copyKey2]);
          })(derivedCtor2, baseCtor2);
      };
      return function (derivedClass2, baseClass2) {
        if ("function" != typeof baseClass2 && null !== baseClass2)
          throw TypeError("Class extends value " + String(baseClass2) + " is not a constructor or null");
        function ProtoBridge2() {
          this.constructor = derivedClass2;
        }
        (extendStatics2(derivedClass2, baseClass2),
          (derivedClass2.prototype =
            null === baseClass2
              ? Object.create(baseClass2)
              : ((ProtoBridge2.prototype = baseClass2.prototype), new ProtoBridge2())));
      };
    })(),
    awaiter = function (thisArg, awaiterArgs, PromiseCtor, generator) {
      return new (PromiseCtor || (PromiseCtor = Promise))(function (resolveAwaiter, rejectAwaiter) {
        function fulfilled(fulfilledValue) {
          try {
            step(generator.next(fulfilledValue));
          } catch (fulfilledError) {
            rejectAwaiter(fulfilledError);
          }
        }
        function rejected(rejectedValue) {
          try {
            step(generator.throw(rejectedValue));
          } catch (rejectedError) {
            rejectAwaiter(rejectedError);
          }
        }
        function step(stepResult) {
          var stepValue;
          stepResult.done
            ? resolveAwaiter(stepResult.value)
            : ((stepValue = stepResult.value) instanceof PromiseCtor
                ? stepValue
                : new PromiseCtor(function (adoptResolve) {
                    adoptResolve(stepValue);
                  })
              ).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, awaiterArgs || [])).next());
      });
    },
    generatorRuntime = function (genThisArg, genBody) {
      var isExecuting,
        delegate,
        genTemp,
        genIterator,
        genState = {
          label: 0,
          sent: function () {
            if (1 & genTemp[0]) throw genTemp[1];
            return genTemp[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (genIterator = {
          next: makeStep(0),
          throw: makeStep(1),
          return: makeStep(2),
        }),
        "function" == typeof Symbol &&
          (genIterator[Symbol.iterator] = function () {
            return this;
          }),
        genIterator
      );
      function makeStep(opCode) {
        return function (opValue) {
          var op = [opCode, opValue];
          if (isExecuting) throw TypeError("Generator is already executing.");
          for (; genIterator && ((genIterator = 0), op[0] && (genState = 0)), genState;)
            try {
              if (
                ((isExecuting = 1),
                delegate &&
                  (genTemp =
                    2 & op[0]
                      ? delegate.return
                      : op[0]
                        ? delegate.throw || ((genTemp = delegate.return) && genTemp.call(delegate), 0)
                        : delegate.next) &&
                  !(genTemp = genTemp.call(delegate, op[1])).done)
              )
                return genTemp;
              switch (((delegate = 0), genTemp && (op = [2 & op[0], genTemp.value]), op[0])) {
                case 0:
                case 1:
                  genTemp = op;
                  break;
                case 4:
                  return (
                    genState.label++,
                    {
                      value: op[1],
                      done: !1,
                    }
                  );
                case 5:
                  (genState.label++, (delegate = op[1]), (op = [0]));
                  continue;
                case 7:
                  ((op = genState.ops.pop()), genState.trys.pop());
                  continue;
                default:
                  if (
                    !(genTemp = (genTemp = genState.trys).length > 0 && genTemp[genTemp.length - 1]) &&
                    (6 === op[0] || 2 === op[0])
                  ) {
                    genState = 0;
                    continue;
                  }
                  if (3 === op[0] && (!genTemp || (op[1] > genTemp[0] && op[1] < genTemp[3]))) {
                    genState.label = op[1];
                    break;
                  }
                  if (6 === op[0] && genState.label < genTemp[1]) {
                    ((genState.label = genTemp[1]), (genTemp = op));
                    break;
                  }
                  if (genTemp && genState.label < genTemp[2]) {
                    ((genState.label = genTemp[2]), genState.ops.push(op));
                    break;
                  }
                  (genTemp[2] && genState.ops.pop(), genState.trys.pop());
                  continue;
              }
              op = genBody.call(genThisArg, genState);
            } catch (genError) {
              ((op = [6, genError]), (delegate = 0));
            } finally {
              isExecuting = genTemp = 0;
            }
          if (5 & op[0]) throw op[1];
          return {
            value: op[0] ? op[1] : void 0,
            done: !0,
          };
        };
      }
    },
    BgmPlayer = (function (SoundBaseForBgm) {
      function BgmPlayerClass(bgmOptions) {
        var bgmEventHandler,
          bgmVolumeOption,
          bgmFadeOption,
          bgmFadeDurationOption,
          bgmLoopOption,
          bgmSelf = SoundBaseForBgm.call(this) || this;
        ((bgmSelf._isPlay = !1),
          (bgmSelf._touched = !1),
          (bgmSelf._listener = []),
          (bgmSelf._isSuspend = !1),
          (bgmSelf._isPlayWhenLeave = !1),
          (bgmSelf._isPausePlaying = !1));
        var bgmAudio = document.createElement("audio");
        if (
          ((bgmSelf._audioElem = bgmAudio),
          (bgmSelf._volume = null != (bgmVolumeOption = bgmOptions.volume) ? bgmVolumeOption : 0.5),
          (bgmSelf.fade = null != (bgmFadeOption = bgmOptions.fade) && bgmFadeOption),
          (bgmSelf.fadeDuration =
            null != (bgmFadeDurationOption = bgmOptions.fadeDuration) ? bgmFadeDurationOption : 1e3),
          (bgmAudio.src = bgmOptions.src),
          (bgmAudio.crossOrigin = "anonymous"),
          (bgmAudio.volume = bgmSelf._volume),
          (bgmAudio.loop = null != (bgmLoopOption = bgmOptions.loop) && bgmLoopOption),
          bgmAudio.load(),
          (bgmSelf.fadeUtil = new VolumeFader()),
          bgmOptions.autoPlay)
        ) {
          bgmSelf.play();
          var playOnFirstClick = function () {
            (bgmSelf.play(), null == window || window.removeEventListener("click", playOnFirstClick));
          };
          null == window || window.addEventListener("click", playOnFirstClick);
        }
        return (
          bgmOptions.suspendWhenHidden &&
            document.addEventListener("visibilitychange", function () {
              document.hidden ? bgmSelf.exit() : bgmSelf.enter();
            }),
          bgmOptions.suspendWhenHiddenInSkland &&
            Promise.resolve()
              .then(webpackRequire.bind(webpackRequire, 31563))
              .then(function (sklandSdkModule) {
                var sklandSdk = sklandSdkModule.default;
                sklandSdk.getSystemInfo().isApp &&
                  (sklandSdk.onLifecycle("pageDidAppear", bgmSelf.enter.bind(bgmSelf)),
                  sklandSdk.onLifecycle("appWillEnterForeground", bgmSelf.enter.bind(bgmSelf)),
                  sklandSdk.onLifecycle("pageDidDisappear", bgmSelf.exit.bind(bgmSelf)),
                  sklandSdk.onLifecycle("appDidEnterBackground", bgmSelf.exit.bind(bgmSelf)));
              }),
          bgmSelf._audioElem.addEventListener("ended", function () {
            bgmSelf._updatePlayStatus();
          }),
          (bgmEventHandler = function (bgmEvent) {
            var bgmEventDetail,
              bgmEventType =
                null == (bgmEventDetail = null == bgmEvent ? void 0 : bgmEvent.detail)
                  ? void 0
                  : bgmEventDetail.type;
            "PAUSE" === bgmEventType ? bgmSelf.pause() : "RESUME" === bgmEventType && bgmSelf.resume();
          }),
          window.addEventListener("HG_MEDIA_BGM_EVENT", bgmEventHandler),
          bgmSelf
        );
      }
      return (
        extendsHelper2(BgmPlayerClass, SoundBaseForBgm),
        (BgmPlayerClass.prototype.enter = function () {
          !1 !== this._isSuspend && ((this._isSuspend = !1), this._isPlayWhenLeave && this.resume());
        }),
        (BgmPlayerClass.prototype.exit = function () {
          if (!this._isSuspend)
            if (((this._isSuspend = !0), this.isPlaying)) {
              this._isPlayWhenLeave = !0;
              var savedFade = this.fade;
              ((this.fade = !1), this.pause(), (this.fade = savedFade));
            } else this._isPlayWhenLeave = !1;
        }),
        Object.defineProperty(BgmPlayerClass.prototype, "audioElem", {
          get: function () {
            return this._audioElem;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (BgmPlayerClass.prototype.enable = function () {
          ((this.isEnable = !0),
            this._isPausePlaying ? (this.resume(), (this._isPausePlaying = !1)) : this.play());
        }),
        (BgmPlayerClass.prototype.disable = function () {
          ((this.isEnable = !1), this._isPlay && (this._isPausePlaying = !0), this.pause());
        }),
        Object.defineProperty(BgmPlayerClass.prototype, "isPlaying", {
          get: function () {
            return this._isPlay;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (BgmPlayerClass.prototype._play = function () {
          safePlay(this._audioElem, function (bgmPlayError) {
            console.warn(bgmPlayError);
          });
        }),
        (BgmPlayerClass.prototype._pause = function () {
          this._audioElem.pause();
        }),
        (BgmPlayerClass.prototype.play = function () {
          return awaiter(this, void 0, void 0, function () {
            var bgmThisPlay = this;
            return generatorRuntime(this, function (playGenState) {
              switch (playGenState.label) {
                case 0:
                  if (!1 === this.isEnable || this._isPlay) return [2];
                  if (((this._isPlay = !0), (this._touched = !0), !this.fade)) return [3, 2];
                  return [
                    4,
                    this.fadeUtil.fadeIn({
                      audio: this._audioElem,
                      targetVolume: this._volume,
                      duration: this.fadeDuration,
                      onStart: function () {
                        return bgmThisPlay._play();
                      },
                    }),
                  ];
                case 1:
                  return (playGenState.sent(), [3, 3]);
                case 2:
                  (this._play(), (playGenState.label = 3));
                case 3:
                  return (this._updatePlayStatus(), [2]);
              }
            });
          });
        }),
        (BgmPlayerClass.prototype.pause = function () {
          return awaiter(this, void 0, void 0, function () {
            var bgmThisPause = this;
            return generatorRuntime(this, function (pauseGenState) {
              switch (pauseGenState.label) {
                case 0:
                  if (!1 === this._isPlay) return [2];
                  if (((this._isPlay = !1), !this.fade)) return [3, 2];
                  return [
                    4,
                    this.fadeUtil.fadeOut({
                      audio: this._audioElem,
                      duration: this.fadeDuration,
                      onEnd: function () {
                        bgmThisPause._pause();
                      },
                    }),
                  ];
                case 1:
                  return (pauseGenState.sent(), [3, 3]);
                case 2:
                  (this._pause(), (pauseGenState.label = 3));
                case 3:
                  return (this._updatePlayStatus(), [2]);
              }
            });
          });
        }),
        (BgmPlayerClass.prototype.resume = function () {
          return awaiter(this, void 0, void 0, function () {
            return generatorRuntime(this, function (resumeGenState) {
              switch (resumeGenState.label) {
                case 0:
                  if (!1 === this._touched) return [2];
                  return [4, this.play()];
                case 1:
                  return (resumeGenState.sent(), [2]);
              }
            });
          });
        }),
        (BgmPlayerClass.prototype.toggle = function () {
          return awaiter(this, void 0, void 0, function () {
            return generatorRuntime(this, function (toggleGenState) {
              switch (toggleGenState.label) {
                case 0:
                  if (!this._isPlay) return [3, 2];
                  return [4, this.pause()];
                case 1:
                  return (toggleGenState.sent(), [3, 4]);
                case 2:
                  return [4, this.play()];
                case 3:
                  (toggleGenState.sent(), (toggleGenState.label = 4));
                case 4:
                  return [2];
              }
            });
          });
        }),
        (BgmPlayerClass.prototype.reset = function () {
          return awaiter(this, void 0, void 0, function () {
            return generatorRuntime(this, function (resetGenState) {
              switch (resetGenState.label) {
                case 0:
                  return [4, this.pause()];
                case 1:
                  return (resetGenState.sent(), (this._audioElem.currentTime = 0), [2]);
              }
            });
          });
        }),
        Object.defineProperty(BgmPlayerClass.prototype, "volume", {
          get: function () {
            return this._volume;
          },
          set: function (volumeInput) {
            var clampedVolume = Math.max(0, Math.min(volumeInput, 1));
            ((this._volume = clampedVolume), (this._audioElem.volume = clampedVolume));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (BgmPlayerClass.prototype._updatePlayStatus = function () {
          var isNowPlaying = !this._audioElem.paused;
          ((this._isPlay = isNowPlaying),
            this._listener.forEach(function (playStatusListener) {
              return playStatusListener(isNowPlaying);
            }));
        }),
        (BgmPlayerClass.prototype.onPlayStatusChange = function (statusCallback) {
          var bgmThisListener = this;
          return (
            this._listener.push(statusCallback),
            function () {
              bgmThisListener._listener = bgmThisListener._listener.filter(function (candidateCallback) {
                return candidateCallback !== statusCallback;
              });
            }
          );
        }),
        BgmPlayerClass
      );
    })(SoundBase);
  !(function () {
    function VideoSourcePlayer(videoOptions) {
      ((this._freeCallback = []), (this.video = videoOptions.videoElem), (this.src = videoOptions.src));
    }
    (Object.defineProperty(VideoSourcePlayer.prototype, "videoElem", {
      get: function () {
        return this.video;
      },
      enumerable: !1,
      configurable: !0,
    }),
      (VideoSourcePlayer.prototype._play = function () {
        var mp4VideoElement = this.video;
        ((mp4VideoElement.src = this.src),
          mp4VideoElement.addEventListener("loadedmetadata", function () {
            mp4VideoElement.play().catch(noop);
          }));
      }),
      (VideoSourcePlayer.prototype._playByHls = function () {
        var hlsInstance,
          videoSelf = this,
          hlsSrc = this.src,
          hlsVideoElement = this.video;
        webpackRequire
          .e(5746)
          .then(webpackRequire.bind(webpackRequire, 88739))
          .then(function (hlsModule) {
            var Hls = hlsModule.default;
            Hls.isSupported() &&
              ((hlsInstance = new Hls()).loadSource(hlsSrc),
              hlsInstance.attachMedia(hlsVideoElement),
              hlsInstance.on(Hls.Events.MEDIA_ATTACHED, function () {
                hlsVideoElement.play().catch(noop);
              }),
              videoSelf._freeCallback.push(function () {
                hlsInstance.destroy();
              }));
          });
      }),
      (VideoSourcePlayer.prototype.play = function () {
        var videoSrc = this.src,
          videoElement = this.video;
        (videoSrc.endsWith("mp4") && this._play(),
          videoSrc.endsWith("m3u8") &&
            (videoElement.canPlayType("application/vnd.apple.mpegurl") ? this._play() : this._playByHls()));
      }),
      (VideoSourcePlayer.prototype.pause = function () {
        this.video.pause();
      }),
      (VideoSourcePlayer.prototype.destroy = function () {
        (this._freeCallback.forEach(function (freeCallback) {
          return freeCallback();
        }),
          (this._freeCallback = []));
      }));
  })();
};
