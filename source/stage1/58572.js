// SoundPlayer (sound list manager: enable/disable, fade envelopes, visibility pause) — module 58572 from 4231-53da7c4de7468a06
// module 58572 from 4231-53da7c4de7468a06.js
// deps:
const module_58572 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  (webpackRequire.d(webpackExports, {
    Mj: () => v_13,
  }),
    (function () {
      function e_14(e_15) {
        var t_16;
        ((this._listener = []),
          (this._isEnable = e_15.initEnable),
          (this.soundList = null != (t_16 = e_15.sounds) ? t_16 : []),
          this.broadcast());
      }
      ((e_14.prototype.broadcast = function () {
        var e_17 = this;
        (this.soundList.forEach(function (t_18) {
          e_17._isEnable ? t_18.enable() : t_18.disable();
        }),
          this._listener.forEach(function (t_19) {
            return t_19(e_17._isEnable);
          }));
      }),
        (e_14.prototype.addSound = function (e_20) {
          ((e_20.isEnable = this._isEnable), this.soundList.push(e_20));
        }),
        Object.defineProperty(e_14.prototype, "isEnable", {
          get: function () {
            return this._isEnable;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (e_14.prototype.enable = function () {
          ((this._isEnable = !0), this.broadcast());
        }),
        (e_14.prototype.disable = function () {
          ((this._isEnable = !1), this.broadcast());
        }),
        (e_14.prototype.onEnableStatusChange = function (e_21) {
          var t_22 = this;
          return (
            this._listener.push(e_21),
            function () {
              t_22._listener = t_22._listener.filter(function (t_23) {
                return t_23 !== e_21;
              });
            }
          );
        }));
    })());
  var r_1 = function () {
    this.isEnable = !0;
  };
  function n_2(e_24, t_25) {
    try {
      var i_26 = e_24.play();
      void 0 !== i_26 && i_26.catch(t_25);
    } catch (e_27) {
      t_25(e_27);
    }
  }
  function s_3(e_28) {
    return e_28 * e_28;
  }
  function o_4(e_29) {
    return 1 - Math.pow(1 - e_29, 2);
  }
  var a_5 = (function () {
      function e_30() {
        ((this.timer = null), (this.isEasing = !1));
      }
      return (
        (e_30.prototype.fadeIn = function (e_31) {
          var t_32 = this;
          this.isEasing && this.timer && clearInterval(this.timer);
          var i_33 = e_31.audio,
            r_34 = e_31.targetVolume,
            n_35 = e_31.duration,
            o_36 = e_31.onStart,
            a_37 = this.isEasing ? i_33.volume : 0;
          return this.easing({
            startValue: a_37,
            endValue: r_34,
            duration: n_35,
            ease: s_3,
            onStart: function () {
              ((t_32.isEasing = !0), null == o_36 || o_36());
            },
            onUpdate: function (e_38) {
              i_33.volume = e_38;
            },
            onEnd: function () {
              ((i_33.volume = r_34), (t_32.isEasing = !1));
            },
          });
        }),
        (e_30.prototype.fadeOut = function (e_39) {
          var t_40 = this;
          this.isEasing && this.timer && clearInterval(this.timer);
          var i_41 = e_39.audio,
            r_42 = e_39.duration,
            n_43 = e_39.onEnd;
          return this.easing({
            startValue: i_41.volume,
            endValue: 0,
            duration: r_42,
            ease: o_4,
            onStart: function () {
              t_40.isEasing = !0;
            },
            onUpdate: function (e_44) {
              i_41.volume = e_44;
            },
            onEnd: function () {
              ((i_41.volume = 0), (t_40.isEasing = !1), null == n_43 || n_43());
            },
          });
        }),
        (e_30.prototype.easing = function (e_45) {
          var t_46 = this,
            i_47 = e_45.startValue,
            r_48 = e_45.endValue,
            n_49 = e_45.duration,
            s_50 = e_45.ease,
            o_51 = e_45.onStart,
            a_52 = e_45.onUpdate,
            l_53 = e_45.onEnd,
            d_54 = n_49 * Math.abs(r_48 - i_47);
          return new Promise(function (e_55) {
            var n_56 = Date.now(),
              u_57 = 0;
            (null == o_51 || o_51(),
              (t_46.timer = setInterval(function () {
                u_57 >= d_54
                  ? (t_46.timer && clearInterval(t_46.timer), null == l_53 || l_53(), e_55())
                  : (a_52(i_47 + (r_48 - i_47) * s_50(u_57 / d_54)), (u_57 = Date.now() - n_56));
              }, 10)));
          });
        }),
        e_30
      );
    })(),
    l_6 = (function () {
      var e_58 = function (t_59, i_60) {
        return (e_58 =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (e_61, t_62) {
              e_61.__proto__ = t_62;
            }) ||
          function (e_63, t_64) {
            for (var i_65 in t_64)
              Object.prototype.hasOwnProperty.call(t_64, i_65) && (e_63[i_65] = t_64[i_65]);
          })(t_59, i_60);
      };
      return function (t_66, i_67) {
        if ("function" != typeof i_67 && null !== i_67)
          throw TypeError("Class extends value " + String(i_67) + " is not a constructor or null");
        function r_68() {
          this.constructor = t_66;
        }
        (e_58(t_66, i_67),
          (t_66.prototype =
            null === i_67 ? Object.create(i_67) : ((r_68.prototype = i_67.prototype), new r_68())));
      };
    })(),
    d_7 = function (e_69) {
      var t_70 = "function" == typeof Symbol && Symbol.iterator,
        i_71 = t_70 && e_69[t_70],
        r_72 = 0;
      if (i_71) return i_71.call(e_69);
      if (e_69 && "number" == typeof e_69.length)
        return {
          next: function () {
            return (
              e_69 && r_72 >= e_69.length && (e_69 = void 0),
              {
                value: e_69 && e_69[r_72++],
                done: !e_69,
              }
            );
          },
        };
      throw TypeError(t_70 ? "Object is not iterable." : "Symbol.iterator is not defined.");
    },
    u_8 = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA";
  !(function (e_73) {
    function t_74(t_75) {
      var i_76,
        r_77,
        n_78 = e_73.call(this) || this;
      ((n_78._pool = []),
        (n_78._allBulletReady = !1),
        (n_78._defaultVolume = null != (i_76 = t_75.volume) ? i_76 : 0.5),
        (n_78._effectsDict = null != (r_77 = t_75.effectsDict) ? r_77 : {}));
      for (var s_79 = t_75.poolSize, o_80 = void 0 === s_79 ? 10 : s_79, a_81 = 0; a_81 < o_80; a_81++) {
        var l_82 = document.createElement("audio");
        (l_82.setAttribute("src", u_8), l_82.load(), n_78._pool.push(l_82));
      }
      return n_78;
    }
    (l_6(t_74, e_73),
      (t_74.prototype._loadAllBullet = function () {
        var e_83, t_84;
        if (!this._allBulletReady) {
          try {
            for (var i_85 = d_7(this._pool), r_86 = i_85.next(); !r_86.done; r_86 = i_85.next()) {
              var s_87 = r_86.value;
              n_2(s_87, function (e_88) {
                return console.warn(e_88);
              });
            }
          } catch (t_89) {
            e_83 = {
              error: t_89,
            };
          } finally {
            try {
              r_86 && !r_86.done && (t_84 = i_85.return) && t_84.call(i_85);
            } finally {
              if (e_83) throw e_83.error;
            }
          }
          this._allBulletReady = !0;
        }
      }),
      (t_74.prototype.enable = function () {
        this.isEnable = !0;
      }),
      (t_74.prototype.disable = function () {
        this.isEnable = !1;
      }),
      (t_74.prototype.play = function (e_90, t_91) {
        var i_92 = this;
        if (!1 !== this.isEnable) {
          var r_93 = this._pool.pop();
          if (r_93) {
            var s_94 = (t_91 || {}).volume;
            r_93.volume = void 0 === s_94 ? this._defaultVolume : s_94;
            var o_95 = this._effectsDict[e_90] || e_90;
            (r_93.setAttribute("src", o_95),
              r_93.load(),
              (r_93.onended = function () {
                (r_93.setAttribute("src", u_8), r_93.load(), i_92._pool.push(r_93));
              }),
              n_2(r_93, function (e_96) {
                (console.warn(e_96), i_92._pool.push(r_93));
              }),
              this._loadAllBullet());
          }
        }
      }));
  })(r_1);
  var c_9 = function () {},
    p_10 = (function () {
      var e_97 = function (t_98, i_99) {
        return (e_97 =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (e_100, t_101) {
              e_100.__proto__ = t_101;
            }) ||
          function (e_102, t_103) {
            for (var i_104 in t_103)
              Object.prototype.hasOwnProperty.call(t_103, i_104) && (e_102[i_104] = t_103[i_104]);
          })(t_98, i_99);
      };
      return function (t_105, i_106) {
        if ("function" != typeof i_106 && null !== i_106)
          throw TypeError("Class extends value " + String(i_106) + " is not a constructor or null");
        function r_107() {
          this.constructor = t_105;
        }
        (e_97(t_105, i_106),
          (t_105.prototype =
            null === i_106 ? Object.create(i_106) : ((r_107.prototype = i_106.prototype), new r_107())));
      };
    })(),
    f_11 = function (e_108, t_109, i_110, r_111) {
      return new (i_110 || (i_110 = Promise))(function (n_112, s_113) {
        function o_114(e_117) {
          try {
            l_116(r_111.next(e_117));
          } catch (e_118) {
            s_113(e_118);
          }
        }
        function a_115(e_119) {
          try {
            l_116(r_111.throw(e_119));
          } catch (e_120) {
            s_113(e_120);
          }
        }
        function l_116(e_121) {
          var t_122;
          e_121.done
            ? n_112(e_121.value)
            : ((t_122 = e_121.value) instanceof i_110
                ? t_122
                : new i_110(function (e_123) {
                    e_123(t_122);
                  })
              ).then(o_114, a_115);
        }
        l_116((r_111 = r_111.apply(e_108, t_109 || [])).next());
      });
    },
    h_12 = function (e_124, t_125) {
      var i_126,
        r_127,
        n_128,
        s_129,
        o_130 = {
          label: 0,
          sent: function () {
            if (1 & n_128[0]) throw n_128[1];
            return n_128[1];
          },
          trys: [],
          ops: [],
        };
      return (
        (s_129 = {
          next: a_131(0),
          throw: a_131(1),
          return: a_131(2),
        }),
        "function" == typeof Symbol &&
          (s_129[Symbol.iterator] = function () {
            return this;
          }),
        s_129
      );
      function a_131(a_132) {
        return function (l_133) {
          var d_134 = [a_132, l_133];
          if (i_126) throw TypeError("Generator is already executing.");
          for (; s_129 && ((s_129 = 0), d_134[0] && (o_130 = 0)), o_130;)
            try {
              if (
                ((i_126 = 1),
                r_127 &&
                  (n_128 =
                    2 & d_134[0]
                      ? r_127.return
                      : d_134[0]
                        ? r_127.throw || ((n_128 = r_127.return) && n_128.call(r_127), 0)
                        : r_127.next) &&
                  !(n_128 = n_128.call(r_127, d_134[1])).done)
              )
                return n_128;
              switch (((r_127 = 0), n_128 && (d_134 = [2 & d_134[0], n_128.value]), d_134[0])) {
                case 0:
                case 1:
                  n_128 = d_134;
                  break;
                case 4:
                  return (
                    o_130.label++,
                    {
                      value: d_134[1],
                      done: !1,
                    }
                  );
                case 5:
                  (o_130.label++, (r_127 = d_134[1]), (d_134 = [0]));
                  continue;
                case 7:
                  ((d_134 = o_130.ops.pop()), o_130.trys.pop());
                  continue;
                default:
                  if (
                    !(n_128 = (n_128 = o_130.trys).length > 0 && n_128[n_128.length - 1]) &&
                    (6 === d_134[0] || 2 === d_134[0])
                  ) {
                    o_130 = 0;
                    continue;
                  }
                  if (3 === d_134[0] && (!n_128 || (d_134[1] > n_128[0] && d_134[1] < n_128[3]))) {
                    o_130.label = d_134[1];
                    break;
                  }
                  if (6 === d_134[0] && o_130.label < n_128[1]) {
                    ((o_130.label = n_128[1]), (n_128 = d_134));
                    break;
                  }
                  if (n_128 && o_130.label < n_128[2]) {
                    ((o_130.label = n_128[2]), o_130.ops.push(d_134));
                    break;
                  }
                  (n_128[2] && o_130.ops.pop(), o_130.trys.pop());
                  continue;
              }
              d_134 = t_125.call(e_124, o_130);
            } catch (e_135) {
              ((d_134 = [6, e_135]), (r_127 = 0));
            } finally {
              i_126 = n_128 = 0;
            }
          if (5 & d_134[0]) throw d_134[1];
          return {
            value: d_134[0] ? d_134[1] : void 0,
            done: !0,
          };
        };
      }
    },
    v_13 = (function (e_136) {
      function t_137(t_138) {
        var r_139,
          n_140,
          s_141,
          o_142,
          l_143,
          d_144 = e_136.call(this) || this;
        ((d_144._isPlay = !1),
          (d_144._touched = !1),
          (d_144._listener = []),
          (d_144._isSuspend = !1),
          (d_144._isPlayWhenLeave = !1),
          (d_144._isPausePlaying = !1));
        var u_145 = document.createElement("audio");
        if (
          ((d_144._audioElem = u_145),
          (d_144._volume = null != (n_140 = t_138.volume) ? n_140 : 0.5),
          (d_144.fade = null != (s_141 = t_138.fade) && s_141),
          (d_144.fadeDuration = null != (o_142 = t_138.fadeDuration) ? o_142 : 1e3),
          (u_145.src = t_138.src),
          (u_145.crossOrigin = "anonymous"),
          (u_145.volume = d_144._volume),
          (u_145.loop = null != (l_143 = t_138.loop) && l_143),
          u_145.load(),
          (d_144.fadeUtil = new a_5()),
          t_138.autoPlay)
        ) {
          d_144.play();
          var c_146 = function () {
            (d_144.play(), null == window || window.removeEventListener("click", c_146));
          };
          null == window || window.addEventListener("click", c_146);
        }
        return (
          t_138.suspendWhenHidden &&
            document.addEventListener("visibilitychange", function () {
              document.hidden ? d_144.exit() : d_144.enter();
            }),
          t_138.suspendWhenHiddenInSkland &&
            Promise.resolve()
              .then(webpackRequire.bind(webpackRequire, 31563))
              .then(function (e_147) {
                var t_148 = e_147.default;
                t_148.getSystemInfo().isApp &&
                  (t_148.onLifecycle("pageDidAppear", d_144.enter.bind(d_144)),
                  t_148.onLifecycle("appWillEnterForeground", d_144.enter.bind(d_144)),
                  t_148.onLifecycle("pageDidDisappear", d_144.exit.bind(d_144)),
                  t_148.onLifecycle("appDidEnterBackground", d_144.exit.bind(d_144)));
              }),
          d_144._audioElem.addEventListener("ended", function () {
            d_144._updatePlayStatus();
          }),
          (r_139 = function (e_149) {
            var t_150,
              i_151 = null == (t_150 = null == e_149 ? void 0 : e_149.detail) ? void 0 : t_150.type;
            "PAUSE" === i_151 ? d_144.pause() : "RESUME" === i_151 && d_144.resume();
          }),
          window.addEventListener("HG_MEDIA_BGM_EVENT", r_139),
          d_144
        );
      }
      return (
        p_10(t_137, e_136),
        (t_137.prototype.enter = function () {
          !1 !== this._isSuspend && ((this._isSuspend = !1), this._isPlayWhenLeave && this.resume());
        }),
        (t_137.prototype.exit = function () {
          if (!this._isSuspend)
            if (((this._isSuspend = !0), this.isPlaying)) {
              this._isPlayWhenLeave = !0;
              var e_152 = this.fade;
              ((this.fade = !1), this.pause(), (this.fade = e_152));
            } else this._isPlayWhenLeave = !1;
        }),
        Object.defineProperty(t_137.prototype, "audioElem", {
          get: function () {
            return this._audioElem;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t_137.prototype.enable = function () {
          ((this.isEnable = !0),
            this._isPausePlaying ? (this.resume(), (this._isPausePlaying = !1)) : this.play());
        }),
        (t_137.prototype.disable = function () {
          ((this.isEnable = !1), this._isPlay && (this._isPausePlaying = !0), this.pause());
        }),
        Object.defineProperty(t_137.prototype, "isPlaying", {
          get: function () {
            return this._isPlay;
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t_137.prototype._play = function () {
          n_2(this._audioElem, function (e_153) {
            console.warn(e_153);
          });
        }),
        (t_137.prototype._pause = function () {
          this._audioElem.pause();
        }),
        (t_137.prototype.play = function () {
          return f_11(this, void 0, void 0, function () {
            var e_154 = this;
            return h_12(this, function (t_155) {
              switch (t_155.label) {
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
                        return e_154._play();
                      },
                    }),
                  ];
                case 1:
                  return (t_155.sent(), [3, 3]);
                case 2:
                  (this._play(), (t_155.label = 3));
                case 3:
                  return (this._updatePlayStatus(), [2]);
              }
            });
          });
        }),
        (t_137.prototype.pause = function () {
          return f_11(this, void 0, void 0, function () {
            var e_156 = this;
            return h_12(this, function (t_157) {
              switch (t_157.label) {
                case 0:
                  if (!1 === this._isPlay) return [2];
                  if (((this._isPlay = !1), !this.fade)) return [3, 2];
                  return [
                    4,
                    this.fadeUtil.fadeOut({
                      audio: this._audioElem,
                      duration: this.fadeDuration,
                      onEnd: function () {
                        e_156._pause();
                      },
                    }),
                  ];
                case 1:
                  return (t_157.sent(), [3, 3]);
                case 2:
                  (this._pause(), (t_157.label = 3));
                case 3:
                  return (this._updatePlayStatus(), [2]);
              }
            });
          });
        }),
        (t_137.prototype.resume = function () {
          return f_11(this, void 0, void 0, function () {
            return h_12(this, function (e_158) {
              switch (e_158.label) {
                case 0:
                  if (!1 === this._touched) return [2];
                  return [4, this.play()];
                case 1:
                  return (e_158.sent(), [2]);
              }
            });
          });
        }),
        (t_137.prototype.toggle = function () {
          return f_11(this, void 0, void 0, function () {
            return h_12(this, function (e_159) {
              switch (e_159.label) {
                case 0:
                  if (!this._isPlay) return [3, 2];
                  return [4, this.pause()];
                case 1:
                  return (e_159.sent(), [3, 4]);
                case 2:
                  return [4, this.play()];
                case 3:
                  (e_159.sent(), (e_159.label = 4));
                case 4:
                  return [2];
              }
            });
          });
        }),
        (t_137.prototype.reset = function () {
          return f_11(this, void 0, void 0, function () {
            return h_12(this, function (e_160) {
              switch (e_160.label) {
                case 0:
                  return [4, this.pause()];
                case 1:
                  return (e_160.sent(), (this._audioElem.currentTime = 0), [2]);
              }
            });
          });
        }),
        Object.defineProperty(t_137.prototype, "volume", {
          get: function () {
            return this._volume;
          },
          set: function (e_161) {
            var t_162 = Math.max(0, Math.min(e_161, 1));
            ((this._volume = t_162), (this._audioElem.volume = t_162));
          },
          enumerable: !1,
          configurable: !0,
        }),
        (t_137.prototype._updatePlayStatus = function () {
          var e_163 = !this._audioElem.paused;
          ((this._isPlay = e_163),
            this._listener.forEach(function (t_164) {
              return t_164(e_163);
            }));
        }),
        (t_137.prototype.onPlayStatusChange = function (e_165) {
          var t_166 = this;
          return (
            this._listener.push(e_165),
            function () {
              t_166._listener = t_166._listener.filter(function (t_167) {
                return t_167 !== e_165;
              });
            }
          );
        }),
        t_137
      );
    })(r_1);
  !(function () {
    function e_168(e_169) {
      ((this._freeCallback = []), (this.video = e_169.videoElem), (this.src = e_169.src));
    }
    (Object.defineProperty(e_168.prototype, "videoElem", {
      get: function () {
        return this.video;
      },
      enumerable: !1,
      configurable: !0,
    }),
      (e_168.prototype._play = function () {
        var e_170 = this.video;
        ((e_170.src = this.src),
          e_170.addEventListener("loadedmetadata", function () {
            e_170.play().catch(c_9);
          }));
      }),
      (e_168.prototype._playByHls = function () {
        var e_171,
          t_172 = this,
          r_173 = this.src,
          n_174 = this.video;
        webpackRequire
          .e(5746)
          .then(webpackRequire.bind(webpackRequire, 88739))
          .then(function (i_175) {
            var s_176 = i_175.default;
            s_176.isSupported() &&
              ((e_171 = new s_176()).loadSource(r_173),
              e_171.attachMedia(n_174),
              e_171.on(s_176.Events.MEDIA_ATTACHED, function () {
                n_174.play().catch(c_9);
              }),
              t_172._freeCallback.push(function () {
                e_171.destroy();
              }));
          });
      }),
      (e_168.prototype.play = function () {
        var e_177 = this.src,
          t_178 = this.video;
        (e_177.endsWith("mp4") && this._play(),
          e_177.endsWith("m3u8") &&
            (t_178.canPlayType("application/vnd.apple.mpegurl") ? this._play() : this._playByHls()));
      }),
      (e_168.prototype.pause = function () {
        this.video.pause();
      }),
      (e_168.prototype.destroy = function () {
        (this._freeCallback.forEach(function (e_179) {
          return e_179();
        }),
          (this._freeCallback = []));
      }));
  })();
};
