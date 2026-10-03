// @hg-web/trans-video (Hypergryph transparent video renderer: WebGL/Canvas2D) — module 25221 from 8498-2c5f8c0351c886c2
// module 25221 from 8498-2c5f8c0351c886c2.js
// deps:
const module_25221 = (webpackModule, webpackExports, webpackRequire) => {
  webpackRequire.d(webpackExports, {
    A: () => p_15,
  });
  var n_1 = function (e_16, t_17) {
      ((this.canvas = e_16), (this.option = t_17));
    },
    o_2 = (function () {
      var e_18 = function (t_19, r_20) {
        return (e_18 =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (e_21, t_22) {
              e_21.__proto__ = t_22;
            }) ||
          function (e_23, t_24) {
            for (var r_25 in t_24)
              Object.prototype.hasOwnProperty.call(t_24, r_25) && (e_23[r_25] = t_24[r_25]);
          })(t_19, r_20);
      };
      return function (t_26, r_27) {
        if ("function" != typeof r_27 && null !== r_27)
          throw TypeError("Class extends value " + String(r_27) + " is not a constructor or null");
        function n_28() {
          this.constructor = t_26;
        }
        (e_18(t_26, r_27),
          (t_26.prototype =
            null === r_27 ? Object.create(r_27) : ((n_28.prototype = r_27.prototype), new n_28())));
      };
    })(),
    i_3 = (function (e_29) {
      function t_30(t_31, r_32) {
        var n_33 = e_29.call(this, t_31, r_32) || this;
        return ((n_33.store = {}), (n_33.ctx = t_31.getContext("2d")), n_33);
      }
      return (
        o_2(t_30, e_29),
        (t_30.prototype.resize = function () {
          var e_34,
            t_35,
            r_36 =
              null == (t_35 = (e_34 = a_4[this.option.modeConfig.mode]).setup)
                ? void 0
                : t_35.call(e_34, this.ctx, this.option.modeConfig);
          r_36 && (this.store = r_36);
        }),
        (t_30.prototype.render = function (e_37) {
          var t_38 = this.ctx;
          (t_38.clearRect(0, 0, t_38.canvas.width, t_38.canvas.height),
            a_4[this.option.modeConfig.mode].render(t_38, e_37, this.option.modeConfig, this.store));
        }),
        (t_30.prototype.dispose = function () {}),
        t_30
      );
    })(n_1),
    a_4 = {
      luminance: {
        setup: function () {
          return {};
        },
        render: function (e_39, t_40, r_41) {
          var n_42 = e_39.canvas,
            o_43 = n_42.width,
            i_44 = n_42.height;
          e_39.drawImage(t_40, 0, 0, t_40.videoWidth, t_40.videoHeight, 0, 0, o_43, i_44);
          for (var a_45 = e_39.getImageData(0, 0, o_43, i_44), c_46 = 0; c_46 < a_45.data.length; c_46 += 4) {
            var u_47 = s_5(a_45.data[c_46], a_45.data[c_46 + 1], a_45.data[c_46 + 2]);
            a_45.data[c_46 + 3] = r_41.reverse ? 1 - u_47 : u_47;
          }
          e_39.putImageData(a_45, 0, 0);
        },
      },
      image: {
        setup: function (e_48, t_49) {
          var r_50 = t_49.image,
            n_51 = e_48.canvas,
            o_52 = n_51.width,
            i_53 = n_51.height,
            a_54 = {};
          function c_55() {
            (e_48.save(),
              e_48.drawImage(r_50, 0, 0, r_50.naturalWidth, r_50.naturalHeight, 0, 0, o_52, i_53));
            for (
              var t_56 = e_48.getImageData(0, 0, o_52, i_53), n_57 = [], c_58 = 0;
              c_58 < t_56.data.length;
              c_58 += 4
            )
              n_57[Math.floor(c_58 / 4)] = s_5(t_56.data[c_58], t_56.data[c_58 + 1], t_56.data[c_58 + 2]);
            ((a_54.maskData = n_57), e_48.clearRect(0, 0, o_52, i_53), e_48.restore());
          }
          return (r_50.complete ? c_55() : r_50.addEventListener("load", c_55), a_54);
        },
        render: function (e_59, t_60, r_61, n_62) {
          var o_63 = e_59.canvas,
            i_64 = o_63.width,
            a_65 = o_63.height;
          if (
            (e_59.drawImage(t_60, 0, 0, t_60.videoWidth, t_60.videoHeight, 0, 0, i_64, a_65),
            null == n_62 ? void 0 : n_62.maskData)
          ) {
            for (var s_66 = e_59.getImageData(0, 0, i_64, a_65), c_67 = 0; c_67 < s_66.data.length; c_67 += 4)
              s_66.data[c_67 + 3] = n_62.maskData[Math.floor(c_67 / 4)];
            e_59.putImageData(s_66, 0, 0);
          }
        },
      },
      video: {
        setup: function (e_68, t_69) {
          switch (t_69.texturePlacement) {
            case "left-right":
            default:
              return {
                colorRect: [0, 0, 0.5, 1],
                maskRect: [0.5, 0, 0.5, 1],
              };
            case "right-left":
              return {
                colorRect: [0.5, 0, 0.5, 1],
                maskRect: [0, 0, 0.5, 1],
              };
            case "top-bottom":
              return {
                colorRect: [0, 0, 1, 0.5],
                maskRect: [0, 0.5, 1, 0.5],
              };
            case "bottom-top":
              return {
                colorRect: [0, 0.5, 1, 0.5],
                maskRect: [0, 0, 1, 0.5],
              };
          }
        },
        render: function (e_70, t_71, r_72, n_73) {
          var o_74 = e_70.canvas,
            i_75 = o_74.width,
            a_76 = o_74.height,
            c_77 = n_73.colorRect,
            u_78 = n_73.maskRect;
          e_70.drawImage(
            t_71,
            c_77[0] * t_71.videoWidth,
            c_77[1] * t_71.videoHeight,
            c_77[2] * t_71.videoWidth,
            c_77[3] * t_71.videoHeight,
            0,
            0,
            i_75,
            a_76,
          );
          var l_79 = e_70.getImageData(0, 0, i_75, a_76);
          e_70.drawImage(
            t_71,
            u_78[0] * t_71.videoWidth,
            u_78[1] * t_71.videoHeight,
            u_78[2] * t_71.videoWidth,
            u_78[3] * t_71.videoHeight,
            0,
            0,
            i_75,
            a_76,
          );
          for (var d_80 = e_70.getImageData(0, 0, i_75, a_76), f_81 = 0; f_81 < l_79.data.length; f_81 += 4)
            l_79.data[f_81 + 3] = s_5(d_80.data[f_81], d_80.data[f_81 + 1], d_80.data[f_81 + 2]);
          e_70.putImageData(l_79, 0, 0);
        },
      },
    };
  function s_5(e_82, t_83, r_84) {
    return 0.3 * e_82 + 0.59 * t_83 + 0.11 * r_84;
  }
  var c_6 = (function () {
      var e_85 = function (t_86, r_87) {
        return (e_85 =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (e_88, t_89) {
              e_88.__proto__ = t_89;
            }) ||
          function (e_90, t_91) {
            for (var r_92 in t_91)
              Object.prototype.hasOwnProperty.call(t_91, r_92) && (e_90[r_92] = t_91[r_92]);
          })(t_86, r_87);
      };
      return function (t_93, r_94) {
        if ("function" != typeof r_94 && null !== r_94)
          throw TypeError("Class extends value " + String(r_94) + " is not a constructor or null");
        function n_95() {
          this.constructor = t_93;
        }
        (e_85(t_93, r_94),
          (t_93.prototype =
            null === r_94 ? Object.create(r_94) : ((n_95.prototype = r_94.prototype), new n_95())));
      };
    })(),
    u_7 = function (e_96, t_97) {
      var r_98 = "function" == typeof Symbol && e_96[Symbol.iterator];
      if (!r_98) return e_96;
      var n_99,
        o_100,
        i_101 = r_98.call(e_96),
        a_102 = [];
      try {
        for (; (void 0 === t_97 || t_97-- > 0) && !(n_99 = i_101.next()).done;) a_102.push(n_99.value);
      } catch (e_103) {
        o_100 = {
          error: e_103,
        };
      } finally {
        try {
          n_99 && !n_99.done && (r_98 = i_101.return) && r_98.call(i_101);
        } finally {
          if (o_100) throw o_100.error;
        }
      }
      return a_102;
    },
    l_8 = function (e_104, t_105, r_106) {
      if (r_106 || 2 == arguments.length)
        for (var n_107, o_108 = 0, i_109 = t_105.length; o_108 < i_109; o_108++)
          (!n_107 && o_108 in t_105) ||
            (n_107 || (n_107 = Array.prototype.slice.call(t_105, 0, o_108)), (n_107[o_108] = t_105[o_108]));
      return e_104.concat(n_107 || Array.prototype.slice.call(t_105));
    },
    d_9 = (function (e_110) {
      function t_111(t_112, r_113) {
        var n_114 = e_110.call(this, t_112, r_113) || this;
        ((n_114.textures = []), (n_114.buffers = []), (n_114.shaders = []), (n_114.programs = []));
        var o_115 = t_112.getContext("webgl2");
        return (
          o_115 ? (n_114.gl = o_115) : (n_114.gl = n_114.canvas.getContext("webgl")),
          n_114.init(),
          n_114
        );
      }
      return (
        c_6(t_111, e_110),
        (t_111.prototype.resize = function () {
          var e_116 = this.gl;
          e_116.viewport(0, 0, e_116.canvas.width, e_116.canvas.height);
        }),
        (t_111.prototype.render = function (e_117) {
          var t_118 = this.gl;
          (t_118.clearColor(0, 0, 0, 0),
            t_118.clear(t_118.COLOR_BUFFER_BIT),
            t_118.texImage2D(t_118.TEXTURE_2D, 0, t_118.RGB, t_118.RGB, t_118.UNSIGNED_BYTE, e_117),
            t_118.drawArrays(t_118.TRIANGLE_STRIP, 0, 4));
        }),
        (t_111.prototype.dispose = function () {
          var e_119 = this.gl;
          (this.textures.forEach(function (t_120) {
            e_119.deleteTexture(t_120);
          }),
            this.buffers.forEach(function (t_121) {
              e_119.deleteBuffer(t_121);
            }),
            this.shaders.forEach(function (t_122) {
              e_119.deleteShader(t_122);
            }),
            this.programs.forEach(function (t_123) {
              e_119.deleteProgram(t_123);
            }));
        }),
        (t_111.prototype.init = function () {
          var e_124,
            t_125 = this.gl;
          (t_125.enable(t_125.BLEND), t_125.blendFunc(t_125.SRC_ALPHA, t_125.DST_ALPHA));
          var r_126 = this.createProgram(),
            n_127 = m_13[this.option.modeConfig.mode].createUniform;
          if (!r_126) throw Error("Create WebGL program failed");
          t_125.useProgram(r_126);
          var o_128 = t_125.createBuffer();
          (t_125.bindBuffer(t_125.ARRAY_BUFFER, o_128),
            t_125.bufferData(t_125.ARRAY_BUFFER, f_10, t_125.STATIC_DRAW),
            o_128 && this.buffers.push(o_128));
          var i_129 = t_125.getAttribLocation(r_126, "vPos");
          (t_125.enableVertexAttribArray(i_129), t_125.vertexAttribPointer(i_129, 2, t_125.FLOAT, !1, 0, 0));
          var a_130 = t_125.getUniformLocation(r_126, "uTexture");
          t_125.uniform1i(a_130, 0);
          var s_131 = g_14(t_125, t_125.RGB);
          if ((s_131 && this.textures.push(s_131), n_127)) {
            var c_132 = null == n_127 ? void 0 : n_127(t_125, r_126, this.option.modeConfig);
            c_132.textures &&
              c_132.textures.length > 0 &&
              (e_124 = this.textures).push.apply(e_124, l_8([], u_7(c_132.textures), !1));
          }
        }),
        (t_111.prototype.createProgram = function () {
          var e_133 = this.gl,
            t_134 = m_13[this.option.modeConfig.mode].fs,
            r_135 = this.createShader(e_133.VERTEX_SHADER, h_11),
            n_136 = this.createShader(e_133.FRAGMENT_SHADER, t_134);
          (r_135 && this.shaders.push(r_135), n_136 && this.shaders.push(n_136));
          var o_137 = e_133.createProgram();
          return (o_137 && this.programs.push(o_137), o_137 && r_135 && n_136)
            ? (e_133.attachShader(o_137, r_135),
              e_133.attachShader(o_137, n_136),
              e_133.linkProgram(o_137),
              e_133.getProgramParameter(o_137, e_133.LINK_STATUS))
              ? o_137
              : (console.warn(
                  "Unable to initialize the shader program: ".concat(e_133.getProgramInfoLog(o_137)),
                ),
                null)
            : null;
        }),
        (t_111.prototype.createShader = function (e_138, t_139) {
          var r_140 = this.gl,
            n_141 = r_140.createShader(e_138);
          return n_141
            ? (r_140.shaderSource(n_141, t_139),
              r_140.compileShader(n_141),
              r_140.getShaderParameter(n_141, r_140.COMPILE_STATUS))
              ? n_141
              : (console.warn(
                  "An error occurred compiling the shaders: ".concat(r_140.getShaderInfoLog(n_141)),
                ),
                r_140.deleteShader(n_141),
                null)
            : null;
        }),
        t_111
      );
    })(n_1),
    f_10 = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    h_11 =
      "\nprecision mediump float;\n\nattribute vec2 vPos;\nvarying vec2 vUv;\n\nvoid main() {\n    gl_Position = vec4(vPos.x, vPos.y, 0.0, 1.0);\n    vUv = vPos * 0.5 + 0.5;\n    vUv.y = 1.0 - vUv.y;\n}\n",
    v_12 =
      "\nfloat getBrightness(vec3 color) {\n    return color.x * 0.3 + color.y * 0.59 + color.z * 0.11;\n}\n",
    m_13 = {
      luminance: {
        fs: "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform bool uReverse;\nvarying vec2 vUv;\n\n".concat(
          v_12,
          "\n\nvoid main() {\n    vec3 color = texture2D(uTexture, vUv).xyz;\n    float brightness = getBrightness(color);\n    gl_FragColor = vec4(color, uReverse ? 1.0 - brightness : brightness);\n}\n",
        ),
        createUniform: function (e_142, t_143, r_144) {
          var n_145 = e_142.getUniformLocation(t_143, "uReverse");
          return (e_142.uniform1i(n_145, +!!r_144.reverse), {});
        },
      },
      image: {
        fs: "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMask;\nvarying vec2 vUv;\n\n".concat(
          v_12,
          "\n\nvoid main() {\n    vec3 color = texture2D(uTexture, vUv).xyz;\n    float brightness = getBrightness(texture2D(uMask, vUv).xyz);\n    gl_FragColor = vec4(color, brightness);\n}\n",
        ),
        createUniform: function (e_146, t_147, r_148) {
          var n_149 = e_146.getUniformLocation(t_147, "uMask");
          (e_146.uniform1i(n_149, 1), e_146.activeTexture(e_146.TEXTURE1));
          var o_150 = g_14(e_146, e_146.RGB);
          function i_151() {
            (e_146.activeTexture(e_146.TEXTURE1),
              e_146.texImage2D(e_146.TEXTURE_2D, 0, e_146.RGBA, e_146.RGBA, e_146.UNSIGNED_BYTE, r_148.image),
              e_146.activeTexture(e_146.TEXTURE0));
          }
          return (
            r_148.image.addEventListener("load", i_151),
            r_148.image.complete && i_151(),
            {
              textures: o_150 ? [o_150] : void 0,
            }
          );
        },
      },
      video: {
        fs: "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform vec4 uColorRect;\nuniform vec4 uMaskRect;\nvarying vec2 vUv;\n\n".concat(
          v_12,
          "\n\nvoid main() {\n    vec3 color = texture2D(uTexture, vec2(vUv.x * uColorRect.z + uColorRect.x, vUv.y * uColorRect.w + uColorRect.y)).xyz;\n    float brightness = getBrightness(texture2D(uTexture, vec2(vUv.x * uMaskRect.z + uMaskRect.x, vUv.y * uMaskRect.w + uMaskRect.y)).xyz);\n    gl_FragColor = vec4(color, brightness);\n}\n",
        ),
        createUniform: function (e_152, t_153, r_154) {
          var n_155 = (function () {
              switch (r_154.texturePlacement) {
                case "left-right":
                default:
                  return {
                    colorRect: [0, 0, 0.5, 1],
                    maskRect: [0.5, 0, 0.5, 1],
                  };
                case "right-left":
                  return {
                    colorRect: [0.5, 0, 0.5, 1],
                    maskRect: [0, 0, 0.5, 1],
                  };
                case "top-bottom":
                  return {
                    colorRect: [0, 0, 1, 0.5],
                    maskRect: [0, 0.5, 1, 0.5],
                  };
                case "bottom-top":
                  return {
                    colorRect: [0, 0.5, 1, 0.5],
                    maskRect: [0, 0, 1, 0.5],
                  };
              }
            })(),
            o_156 = n_155.colorRect,
            i_157 = n_155.maskRect,
            a_158 = e_152.getUniformLocation(t_153, "uColorRect"),
            s_159 = e_152.getUniformLocation(t_153, "uMaskRect");
          return (
            e_152.uniform4f.apply(e_152, l_8([a_158], u_7(o_156), !1)),
            e_152.uniform4f.apply(e_152, l_8([s_159], u_7(i_157), !1)),
            {}
          );
        },
      },
    };
  function g_14(e_160, t_161) {
    var r_162 = e_160.createTexture();
    e_160.bindTexture(e_160.TEXTURE_2D, r_162);
    var n_163 = e_160.UNSIGNED_BYTE,
      o_164 = new Uint8Array([0, 0, 0, 0]);
    return (
      e_160.texImage2D(e_160.TEXTURE_2D, 0, t_161, 1, 1, 0, t_161, n_163, o_164),
      e_160.texParameteri(e_160.TEXTURE_2D, e_160.TEXTURE_WRAP_S, e_160.CLAMP_TO_EDGE),
      e_160.texParameteri(e_160.TEXTURE_2D, e_160.TEXTURE_WRAP_T, e_160.CLAMP_TO_EDGE),
      e_160.texParameteri(e_160.TEXTURE_2D, e_160.TEXTURE_MIN_FILTER, e_160.LINEAR),
      e_160.texParameteri(e_160.TEXTURE_2D, e_160.TEXTURE_MAG_FILTER, e_160.LINEAR),
      r_162
    );
  }
  let p_15 = (function () {
    function e_165(e_166, t_167) {
      var r_168 = this;
      if (
        ((this.canvas = e_166),
        (this.option = t_167),
        (this._active = !1),
        (this._size = [0, 0]),
        (this.renderer = null),
        (this.fallbackAnimeFrameRequest = !1),
        (this.initiateVideoMeta = function () {
          return new Promise(function (e_169) {
            var t_170 = function () {
              var t_171,
                n_172 = (r_168.option || {}).size;
              (n_172
                ? (r_168._size = [n_172[0], n_172[1]])
                : (r_168._size = (function (e_173, t_174, r_175) {
                    if ("video" === r_175.mode)
                      switch (r_175.texturePlacement) {
                        case "bottom-top":
                        case "top-bottom":
                          return [e_173, t_174 / 2];
                        default:
                          return [e_173 / 2, t_174];
                      }
                    return [e_173, t_174];
                  })(r_168.video.videoWidth, r_168.video.videoHeight, r_168.modeConfig)),
                (r_168.canvas.width = r_168._size[0]),
                (r_168.canvas.height = r_168._size[1]),
                null == (t_171 = r_168.renderer) || t_171.resize(),
                e_169());
            };
            r_168.video.readyState < 1
              ? r_168.video.addEventListener("loadedmetadata", t_170, {
                  once: !0,
                })
              : t_170();
          });
        }),
        (this.initiatVideoFrame = function () {
          return new Promise(function (e_176) {
            var t_177 = function () {
              (r_168.video.addEventListener(
                "seeked",
                function () {
                  e_176();
                },
                {
                  once: !0,
                },
              ),
                (r_168.video.currentTime = 0));
            };
            r_168.video.readyState < 2
              ? r_168.video.addEventListener("canplay", t_177, {
                  once: !0,
                })
              : t_177();
          });
        }),
        (this.ticker = function () {
          var e_178,
            t_179 = !1;
          r_168._active &&
            (r_168.video.readyState >= r_168.video.HAVE_CURRENT_DATA && (t_179 = !0),
            t_179 && (null == (e_178 = r_168.renderer) || e_178.render(r_168.video)),
            r_168.fallbackAnimeFrameRequest
              ? requestAnimationFrame(r_168.ticker)
              : r_168.video.requestVideoFrameCallback(r_168.ticker));
        }),
        (this.video = (null == t_167 ? void 0 : t_167.video) || document.createElement("video")),
        (this.video.crossOrigin = "anonymous"),
        (this.video.playsInline = !0),
        (this.context2d = (null == t_167 ? void 0 : t_167.context2d) || !1),
        (this.modeConfig = (function (e_180) {
          switch (null == e_180 ? void 0 : e_180.mode) {
            case "luminance":
              return {
                mode: "luminance",
                reverse: e_180.reverse,
              };
            case "image":
              var t_181 = (function () {
                if ("string" == typeof e_180.image) {
                  var t_182 = new Image();
                  return ((t_182.src = e_180.image), t_182);
                }
                return e_180.image;
              })();
              return (
                (t_181.crossOrigin = "anonymous"),
                {
                  mode: "image",
                  image: t_181,
                }
              );
            default:
              return {
                mode: "video",
                texturePlacement: e_180.texturePlacement || "left-right",
              };
          }
        })(t_167)),
        (this.fallbackAnimeFrameRequest =
          !("requestVideoFrameCallback" in this.video) || /Android/i.test(navigator.userAgent)),
        !(null == t_167 ? void 0 : t_167.forceContext2d) &&
          (e_166.getContext("webgl") || e_166.getContext("experimental-webgl")) instanceof
            WebGLRenderingContext)
      )
        this.renderer = new d_9(e_166, {
          modeConfig: this.modeConfig,
        });
      else
        (null == t_167 ? void 0 : t_167.forceContext2d) || (null == t_167 ? void 0 : t_167.context2d)
          ? (this.renderer = new i_3(e_166, {
              modeConfig: this.modeConfig,
            }))
          : console.warn("[@hg-web/trans-video] Device can't play.");
      (this.video.load(), this.prepareVideo());
    }
    return (
      Object.defineProperty(e_165.prototype, "active", {
        get: function () {
          return this._active;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e_165.prototype, "size", {
        get: function () {
          return [this._size[0], this._size[1]];
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e_165.prototype.prepareVideo = function () {
        var e_183 = this;
        this.initiateVideoMeta()
          .then(function () {
            return e_183.initiatVideoFrame();
          })
          .then(function () {
            var t_184;
            (e_183.option || {}).manualStart
              ? null == (t_184 = e_183.renderer) || t_184.render(e_183.video)
              : e_183.start();
          });
      }),
      (e_165.prototype.start = function () {
        (this.video.play(), this.activate());
      }),
      (e_165.prototype.activate = function () {
        this._active || ((this._active = !0), this.ticker());
      }),
      (e_165.prototype.deactivate = function () {
        this._active && (this._active = !1);
      }),
      (e_165.prototype.dispose = function () {
        var e_185;
        ((this._active = !1), null == (e_185 = this.renderer) || e_185.dispose());
      }),
      e_165
    );
  })();
};
