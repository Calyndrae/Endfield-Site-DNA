/**
 * TransVideo — readable reconstruction of webpack module 25221 (chunk 8498-2c5f8c0351c886c2.js)
 * Original: https://web-static.hg-cdn.com/endfield/official-v4/_next/static/chunks/8498-2c5f8c0351c886c2.js
 *
 * Hypergryph's @hg-web/trans-video module: it exports a TransVideo class that takes a canvas plus options and plays an MP4 whose frame carries RGB colour in one region and a grayscale alpha mask in another, compositing them into a transparent canvas. Two renderer classes extend a tiny BaseRenderer (canvas, option): WebGLRenderer compiles a fullscreen-quad vertex shader and a mode-specific fragment shader where alpha = 0.3R + 0.59G + 0.11B (getBrightness in GLSL, mirrored by a JS getBrightness for the fallback), uploads each video frame as an RGB texture and draws a TRIANGLE_STRIP with SRC_ALPHA/DST_ALPHA blending; Canvas2DRenderer is the fallback and does the same with drawImage/getImageData/putImageData per pixel. Three modes are supported via mode-handler tables (webglModeHandlers / canvas2dModeHandlers): 'video' samples colour and mask sub-rectangles chosen by texturePlacement (left-right, right-left, top-bottom, bottom-top), 'image' uses a separate mask image (uploaded as TEXTURE1 or precomputed into a maskData array), and 'luminance' uses the frame's own brightness with an optional reverse flag. TransVideo normalises options into modeConfig, picks WebGL unless forceContext2d/context2d is set, computes the output size from the video metadata (halving width or height for side-by-side layouts unless an explicit size is given), waits for loadedmetadata/canplay, seeks to time 0 and waits for 'seeked', then either renders one frame (manualStart) or calls start(). The ticker re-renders whenever the video has current data and reschedules itself via requestVideoFrameCallback, falling back to requestAnimationFrame when that API is missing or on Android; activate/deactivate toggle the loop and dispose releases GL textures, buffers, shaders and programs. Also present are inlined tslib helpers (__extends twice, __read, __spreadArray).
 *
 * Exports (minified key → meaning):
 *   A → TransVideo
 *
 * Identifiers were renamed scope-aware from the minified bundle; values, strings, class names and
 * control flow are unchanged. Library aliases resolve to the module map in source/MODULE-MAP.md.
 */
// module 25221 from 8498-2c5f8c0351c886c2.js
// deps:
const module_25221 = (webpackModule, webpackExports, webpackRequire) => {
  webpackRequire.d(webpackExports, {
    A: () => TransVideo,
  });
  var BaseRenderer = function (baseCanvas, baseOption) {
      ((this.canvas = baseCanvas), (this.option = baseOption));
    },
    extendsHelperCanvas = (function () {
      var extendStatics2d = function (derived2d, base2d) {
        return (extendStatics2d =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (protoTarget2d, protoSource2d) {
              protoTarget2d.__proto__ = protoSource2d;
            }) ||
          function (copyTarget2d, copySource2d) {
            for (var copyKey2d in copySource2d)
              Object.prototype.hasOwnProperty.call(copySource2d, copyKey2d) &&
                (copyTarget2d[copyKey2d] = copySource2d[copyKey2d]);
          })(derived2d, base2d);
      };
      return function (derivedClass2d, baseClass2d) {
        if ("function" != typeof baseClass2d && null !== baseClass2d)
          throw TypeError("Class extends value " + String(baseClass2d) + " is not a constructor or null");
        function ProtoBridge2d() {
          this.constructor = derivedClass2d;
        }
        (extendStatics2d(derivedClass2d, baseClass2d),
          (derivedClass2d.prototype =
            null === baseClass2d
              ? Object.create(baseClass2d)
              : ((ProtoBridge2d.prototype = baseClass2d.prototype), new ProtoBridge2d())));
      };
    })(),
    Canvas2DRenderer = (function (superRenderer2d) {
      function Canvas2DRendererCtor(canvas2d, option2d) {
        var selfRef2d = superRenderer2d.call(this, canvas2d, option2d) || this;
        return ((selfRef2d.store = {}), (selfRef2d.ctx = canvas2d.getContext("2d")), selfRef2d);
      }
      return (
        extendsHelperCanvas(Canvas2DRendererCtor, superRenderer2d),
        (Canvas2DRendererCtor.prototype.resize = function () {
          var modeHandler2d,
            setupFn2d,
            setupStore2d =
              null == (setupFn2d = (modeHandler2d = canvas2dModeHandlers[this.option.modeConfig.mode]).setup)
                ? void 0
                : setupFn2d.call(modeHandler2d, this.ctx, this.option.modeConfig);
          setupStore2d && (this.store = setupStore2d);
        }),
        (Canvas2DRendererCtor.prototype.render = function (videoFrame2d) {
          var ctx2d = this.ctx;
          (ctx2d.clearRect(0, 0, ctx2d.canvas.width, ctx2d.canvas.height),
            canvas2dModeHandlers[this.option.modeConfig.mode].render(
              ctx2d,
              videoFrame2d,
              this.option.modeConfig,
              this.store,
            ));
        }),
        (Canvas2DRendererCtor.prototype.dispose = function () {}),
        Canvas2DRendererCtor
      );
    })(BaseRenderer),
    canvas2dModeHandlers = {
      luminance: {
        setup: function () {
          return {};
        },
        render: function (lumCtx, lumVideo, lumModeConfig) {
          var lumCanvas = lumCtx.canvas,
            lumWidth = lumCanvas.width,
            lumHeight = lumCanvas.height;
          lumCtx.drawImage(
            lumVideo,
            0,
            0,
            lumVideo.videoWidth,
            lumVideo.videoHeight,
            0,
            0,
            lumWidth,
            lumHeight,
          );
          for (
            var lumImageData = lumCtx.getImageData(0, 0, lumWidth, lumHeight), lumPixelOffset = 0;
            lumPixelOffset < lumImageData.data.length;
            lumPixelOffset += 4
          ) {
            var lumBrightness = getBrightness(
              lumImageData.data[lumPixelOffset],
              lumImageData.data[lumPixelOffset + 1],
              lumImageData.data[lumPixelOffset + 2],
            );
            lumImageData.data[lumPixelOffset + 3] = lumModeConfig.reverse ? 1 - lumBrightness : lumBrightness;
          }
          lumCtx.putImageData(lumImageData, 0, 0);
        },
      },
      image: {
        setup: function (imgSetupCtx, imgSetupModeConfig) {
          var imgSetupMaskImage = imgSetupModeConfig.image,
            imgSetupCanvas = imgSetupCtx.canvas,
            imgSetupWidth = imgSetupCanvas.width,
            imgSetupHeight = imgSetupCanvas.height,
            imgSetupStore = {};
          function computeMaskData() {
            (imgSetupCtx.save(),
              imgSetupCtx.drawImage(
                imgSetupMaskImage,
                0,
                0,
                imgSetupMaskImage.naturalWidth,
                imgSetupMaskImage.naturalHeight,
                0,
                0,
                imgSetupWidth,
                imgSetupHeight,
              ));
            for (
              var maskImageData2d = imgSetupCtx.getImageData(0, 0, imgSetupWidth, imgSetupHeight),
                maskAlphaValues = [],
                maskPixelOffset = 0;
              maskPixelOffset < maskImageData2d.data.length;
              maskPixelOffset += 4
            )
              maskAlphaValues[Math.floor(maskPixelOffset / 4)] = getBrightness(
                maskImageData2d.data[maskPixelOffset],
                maskImageData2d.data[maskPixelOffset + 1],
                maskImageData2d.data[maskPixelOffset + 2],
              );
            ((imgSetupStore.maskData = maskAlphaValues),
              imgSetupCtx.clearRect(0, 0, imgSetupWidth, imgSetupHeight),
              imgSetupCtx.restore());
          }
          return (
            imgSetupMaskImage.complete
              ? computeMaskData()
              : imgSetupMaskImage.addEventListener("load", computeMaskData),
            imgSetupStore
          );
        },
        render: function (imgRenderCtx, imgRenderVideo, imgRenderModeConfig, imgRenderStore) {
          var imgRenderCanvas = imgRenderCtx.canvas,
            imgRenderWidth = imgRenderCanvas.width,
            imgRenderHeight = imgRenderCanvas.height;
          if (
            (imgRenderCtx.drawImage(
              imgRenderVideo,
              0,
              0,
              imgRenderVideo.videoWidth,
              imgRenderVideo.videoHeight,
              0,
              0,
              imgRenderWidth,
              imgRenderHeight,
            ),
            null == imgRenderStore ? void 0 : imgRenderStore.maskData)
          ) {
            for (
              var imgRenderImageData = imgRenderCtx.getImageData(0, 0, imgRenderWidth, imgRenderHeight),
                imgRenderPixelOffset = 0;
              imgRenderPixelOffset < imgRenderImageData.data.length;
              imgRenderPixelOffset += 4
            )
              imgRenderImageData.data[imgRenderPixelOffset + 3] =
                imgRenderStore.maskData[Math.floor(imgRenderPixelOffset / 4)];
            imgRenderCtx.putImageData(imgRenderImageData, 0, 0);
          }
        },
      },
      video: {
        setup: function (vidSetupCtx, vidSetupModeConfig) {
          switch (vidSetupModeConfig.texturePlacement) {
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
        render: function (vidRenderCtx, vidRenderVideo, vidRenderModeConfig, vidRenderStore) {
          var vidRenderCanvas = vidRenderCtx.canvas,
            vidRenderWidth = vidRenderCanvas.width,
            vidRenderHeight = vidRenderCanvas.height,
            vidColorRect = vidRenderStore.colorRect,
            vidMaskRect = vidRenderStore.maskRect;
          vidRenderCtx.drawImage(
            vidRenderVideo,
            vidColorRect[0] * vidRenderVideo.videoWidth,
            vidColorRect[1] * vidRenderVideo.videoHeight,
            vidColorRect[2] * vidRenderVideo.videoWidth,
            vidColorRect[3] * vidRenderVideo.videoHeight,
            0,
            0,
            vidRenderWidth,
            vidRenderHeight,
          );
          var colorImageData = vidRenderCtx.getImageData(0, 0, vidRenderWidth, vidRenderHeight);
          vidRenderCtx.drawImage(
            vidRenderVideo,
            vidMaskRect[0] * vidRenderVideo.videoWidth,
            vidMaskRect[1] * vidRenderVideo.videoHeight,
            vidMaskRect[2] * vidRenderVideo.videoWidth,
            vidMaskRect[3] * vidRenderVideo.videoHeight,
            0,
            0,
            vidRenderWidth,
            vidRenderHeight,
          );
          for (
            var maskImageData = vidRenderCtx.getImageData(0, 0, vidRenderWidth, vidRenderHeight),
              vidRenderPixelOffset = 0;
            vidRenderPixelOffset < colorImageData.data.length;
            vidRenderPixelOffset += 4
          )
            colorImageData.data[vidRenderPixelOffset + 3] = getBrightness(
              maskImageData.data[vidRenderPixelOffset],
              maskImageData.data[vidRenderPixelOffset + 1],
              maskImageData.data[vidRenderPixelOffset + 2],
            );
          vidRenderCtx.putImageData(colorImageData, 0, 0);
        },
      },
    };
  function getBrightness(red, green, blue) {
    return 0.3 * red + 0.59 * green + 0.11 * blue;
  }
  var extendsHelperWebgl = (function () {
      var extendStaticsGl = function (derivedGl, baseGl) {
        return (extendStaticsGl =
          Object.setPrototypeOf ||
          ({
            __proto__: [],
          } instanceof Array &&
            function (protoTargetGl, protoSourceGl) {
              protoTargetGl.__proto__ = protoSourceGl;
            }) ||
          function (copyTargetGl, copySourceGl) {
            for (var copyKeyGl in copySourceGl)
              Object.prototype.hasOwnProperty.call(copySourceGl, copyKeyGl) &&
                (copyTargetGl[copyKeyGl] = copySourceGl[copyKeyGl]);
          })(derivedGl, baseGl);
      };
      return function (derivedClassGl, baseClassGl) {
        if ("function" != typeof baseClassGl && null !== baseClassGl)
          throw TypeError("Class extends value " + String(baseClassGl) + " is not a constructor or null");
        function ProtoBridgeGl() {
          this.constructor = derivedClassGl;
        }
        (extendStaticsGl(derivedClassGl, baseClassGl),
          (derivedClassGl.prototype =
            null === baseClassGl
              ? Object.create(baseClassGl)
              : ((ProtoBridgeGl.prototype = baseClassGl.prototype), new ProtoBridgeGl())));
      };
    })(),
    readIterable = function (iterable, readCount) {
      var iteratorMethod = "function" == typeof Symbol && iterable[Symbol.iterator];
      if (!iteratorMethod) return iterable;
      var iterResult,
        iterError,
        iterator = iteratorMethod.call(iterable),
        iterValues = [];
      try {
        for (; (void 0 === readCount || readCount-- > 0) && !(iterResult = iterator.next()).done;)
          iterValues.push(iterResult.value);
      } catch (caughtError) {
        iterError = {
          error: caughtError,
        };
      } finally {
        try {
          iterResult &&
            !iterResult.done &&
            (iteratorMethod = iterator.return) &&
            iteratorMethod.call(iterator);
        } finally {
          if (iterError) throw iterError.error;
        }
      }
      return iterValues;
    },
    spreadArray = function (spreadTarget, spreadSource, spreadPack) {
      if (spreadPack || 2 == arguments.length)
        for (
          var spreadCopy, spreadIndex = 0, spreadLength = spreadSource.length;
          spreadIndex < spreadLength;
          spreadIndex++
        )
          (!spreadCopy && spreadIndex in spreadSource) ||
            (spreadCopy || (spreadCopy = Array.prototype.slice.call(spreadSource, 0, spreadIndex)),
            (spreadCopy[spreadIndex] = spreadSource[spreadIndex]));
      return spreadTarget.concat(spreadCopy || Array.prototype.slice.call(spreadSource));
    },
    WebGLRenderer = (function (superRendererGl) {
      function WebGLRendererCtor(canvasGl, optionGl) {
        var selfRefGl = superRendererGl.call(this, canvasGl, optionGl) || this;
        ((selfRefGl.textures = []),
          (selfRefGl.buffers = []),
          (selfRefGl.shaders = []),
          (selfRefGl.programs = []));
        var webgl2Context = canvasGl.getContext("webgl2");
        return (
          webgl2Context
            ? (selfRefGl.gl = webgl2Context)
            : (selfRefGl.gl = selfRefGl.canvas.getContext("webgl")),
          selfRefGl.init(),
          selfRefGl
        );
      }
      return (
        extendsHelperWebgl(WebGLRendererCtor, superRendererGl),
        (WebGLRendererCtor.prototype.resize = function () {
          var glInResize = this.gl;
          glInResize.viewport(0, 0, glInResize.canvas.width, glInResize.canvas.height);
        }),
        (WebGLRendererCtor.prototype.render = function (videoFrameGl) {
          var glInRender = this.gl;
          (glInRender.clearColor(0, 0, 0, 0),
            glInRender.clear(glInRender.COLOR_BUFFER_BIT),
            glInRender.texImage2D(
              glInRender.TEXTURE_2D,
              0,
              glInRender.RGB,
              glInRender.RGB,
              glInRender.UNSIGNED_BYTE,
              videoFrameGl,
            ),
            glInRender.drawArrays(glInRender.TRIANGLE_STRIP, 0, 4));
        }),
        (WebGLRendererCtor.prototype.dispose = function () {
          var glInDispose = this.gl;
          (this.textures.forEach(function (disposedTexture) {
            glInDispose.deleteTexture(disposedTexture);
          }),
            this.buffers.forEach(function (disposedBuffer) {
              glInDispose.deleteBuffer(disposedBuffer);
            }),
            this.shaders.forEach(function (disposedShader) {
              glInDispose.deleteShader(disposedShader);
            }),
            this.programs.forEach(function (disposedProgram) {
              glInDispose.deleteProgram(disposedProgram);
            }));
        }),
        (WebGLRendererCtor.prototype.init = function () {
          var textureList,
            glInInit = this.gl;
          (glInInit.enable(glInInit.BLEND), glInInit.blendFunc(glInInit.SRC_ALPHA, glInInit.DST_ALPHA));
          var initProgram = this.createProgram(),
            createUniformFn = webglModeHandlers[this.option.modeConfig.mode].createUniform;
          if (!initProgram) throw Error("Create WebGL program failed");
          glInInit.useProgram(initProgram);
          var vertexBuffer = glInInit.createBuffer();
          (glInInit.bindBuffer(glInInit.ARRAY_BUFFER, vertexBuffer),
            glInInit.bufferData(glInInit.ARRAY_BUFFER, quadVertices, glInInit.STATIC_DRAW),
            vertexBuffer && this.buffers.push(vertexBuffer));
          var positionAttribLocation = glInInit.getAttribLocation(initProgram, "vPos");
          (glInInit.enableVertexAttribArray(positionAttribLocation),
            glInInit.vertexAttribPointer(positionAttribLocation, 2, glInInit.FLOAT, !1, 0, 0));
          var textureUniformLocation = glInInit.getUniformLocation(initProgram, "uTexture");
          glInInit.uniform1i(textureUniformLocation, 0);
          var videoTexture = createBlankTexture(glInInit, glInInit.RGB);
          if ((videoTexture && this.textures.push(videoTexture), createUniformFn)) {
            var uniformResult =
              null == createUniformFn
                ? void 0
                : createUniformFn(glInInit, initProgram, this.option.modeConfig);
            uniformResult.textures &&
              uniformResult.textures.length > 0 &&
              (textureList = this.textures).push.apply(
                textureList,
                spreadArray([], readIterable(uniformResult.textures), !1),
              );
          }
        }),
        (WebGLRendererCtor.prototype.createProgram = function () {
          var glInCreateProgram = this.gl,
            fragmentShaderSource = webglModeHandlers[this.option.modeConfig.mode].fs,
            vertexShader = this.createShader(glInCreateProgram.VERTEX_SHADER, vertexShaderSource),
            fragmentShader = this.createShader(glInCreateProgram.FRAGMENT_SHADER, fragmentShaderSource);
          (vertexShader && this.shaders.push(vertexShader),
            fragmentShader && this.shaders.push(fragmentShader));
          var linkedProgram = glInCreateProgram.createProgram();
          return (linkedProgram && this.programs.push(linkedProgram),
          linkedProgram && vertexShader && fragmentShader)
            ? (glInCreateProgram.attachShader(linkedProgram, vertexShader),
              glInCreateProgram.attachShader(linkedProgram, fragmentShader),
              glInCreateProgram.linkProgram(linkedProgram),
              glInCreateProgram.getProgramParameter(linkedProgram, glInCreateProgram.LINK_STATUS))
              ? linkedProgram
              : (console.warn(
                  "Unable to initialize the shader program: ".concat(
                    glInCreateProgram.getProgramInfoLog(linkedProgram),
                  ),
                ),
                null)
            : null;
        }),
        (WebGLRendererCtor.prototype.createShader = function (shaderType, shaderSource) {
          var glInCreateShader = this.gl,
            compiledShader = glInCreateShader.createShader(shaderType);
          return compiledShader
            ? (glInCreateShader.shaderSource(compiledShader, shaderSource),
              glInCreateShader.compileShader(compiledShader),
              glInCreateShader.getShaderParameter(compiledShader, glInCreateShader.COMPILE_STATUS))
              ? compiledShader
              : (console.warn(
                  "An error occurred compiling the shaders: ".concat(
                    glInCreateShader.getShaderInfoLog(compiledShader),
                  ),
                ),
                glInCreateShader.deleteShader(compiledShader),
                null)
            : null;
        }),
        WebGLRendererCtor
      );
    })(BaseRenderer),
    quadVertices = new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]),
    vertexShaderSource =
      "\nprecision mediump float;\n\nattribute vec2 vPos;\nvarying vec2 vUv;\n\nvoid main() {\n    gl_Position = vec4(vPos.x, vPos.y, 0.0, 1.0);\n    vUv = vPos * 0.5 + 0.5;\n    vUv.y = 1.0 - vUv.y;\n}\n",
    brightnessGlsl =
      "\nfloat getBrightness(vec3 color) {\n    return color.x * 0.3 + color.y * 0.59 + color.z * 0.11;\n}\n",
    webglModeHandlers = {
      luminance: {
        fs: "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform bool uReverse;\nvarying vec2 vUv;\n\n".concat(
          brightnessGlsl,
          "\n\nvoid main() {\n    vec3 color = texture2D(uTexture, vUv).xyz;\n    float brightness = getBrightness(color);\n    gl_FragColor = vec4(color, uReverse ? 1.0 - brightness : brightness);\n}\n",
        ),
        createUniform: function (glLuminance, lumProgram, lumGlModeConfig) {
          var reverseUniformLocation = glLuminance.getUniformLocation(lumProgram, "uReverse");
          return (glLuminance.uniform1i(reverseUniformLocation, +!!lumGlModeConfig.reverse), {});
        },
      },
      image: {
        fs: "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform sampler2D uMask;\nvarying vec2 vUv;\n\n".concat(
          brightnessGlsl,
          "\n\nvoid main() {\n    vec3 color = texture2D(uTexture, vUv).xyz;\n    float brightness = getBrightness(texture2D(uMask, vUv).xyz);\n    gl_FragColor = vec4(color, brightness);\n}\n",
        ),
        createUniform: function (glImage, imgProgram, imgGlModeConfig) {
          var maskUniformLocation = glImage.getUniformLocation(imgProgram, "uMask");
          (glImage.uniform1i(maskUniformLocation, 1), glImage.activeTexture(glImage.TEXTURE1));
          var maskTexture = createBlankTexture(glImage, glImage.RGB);
          function uploadMaskImage() {
            (glImage.activeTexture(glImage.TEXTURE1),
              glImage.texImage2D(
                glImage.TEXTURE_2D,
                0,
                glImage.RGBA,
                glImage.RGBA,
                glImage.UNSIGNED_BYTE,
                imgGlModeConfig.image,
              ),
              glImage.activeTexture(glImage.TEXTURE0));
          }
          return (
            imgGlModeConfig.image.addEventListener("load", uploadMaskImage),
            imgGlModeConfig.image.complete && uploadMaskImage(),
            {
              textures: maskTexture ? [maskTexture] : void 0,
            }
          );
        },
      },
      video: {
        fs: "\nprecision mediump float;\n\nuniform sampler2D uTexture;\nuniform vec4 uColorRect;\nuniform vec4 uMaskRect;\nvarying vec2 vUv;\n\n".concat(
          brightnessGlsl,
          "\n\nvoid main() {\n    vec3 color = texture2D(uTexture, vec2(vUv.x * uColorRect.z + uColorRect.x, vUv.y * uColorRect.w + uColorRect.y)).xyz;\n    float brightness = getBrightness(texture2D(uTexture, vec2(vUv.x * uMaskRect.z + uMaskRect.x, vUv.y * uMaskRect.w + uMaskRect.y)).xyz);\n    gl_FragColor = vec4(color, brightness);\n}\n",
        ),
        createUniform: function (glVideo, vidProgram, vidGlModeConfig) {
          var placementRects = (function () {
              switch (vidGlModeConfig.texturePlacement) {
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
            glColorRect = placementRects.colorRect,
            glMaskRect = placementRects.maskRect,
            colorRectUniformLocation = glVideo.getUniformLocation(vidProgram, "uColorRect"),
            maskRectUniformLocation = glVideo.getUniformLocation(vidProgram, "uMaskRect");
          return (
            glVideo.uniform4f.apply(
              glVideo,
              spreadArray([colorRectUniformLocation], readIterable(glColorRect), !1),
            ),
            glVideo.uniform4f.apply(
              glVideo,
              spreadArray([maskRectUniformLocation], readIterable(glMaskRect), !1),
            ),
            {}
          );
        },
      },
    };
  function createBlankTexture(glInCreateTexture, textureFormat) {
    var blankTexture = glInCreateTexture.createTexture();
    glInCreateTexture.bindTexture(glInCreateTexture.TEXTURE_2D, blankTexture);
    var pixelType = glInCreateTexture.UNSIGNED_BYTE,
      blankPixel = new Uint8Array([0, 0, 0, 0]);
    return (
      glInCreateTexture.texImage2D(
        glInCreateTexture.TEXTURE_2D,
        0,
        textureFormat,
        1,
        1,
        0,
        textureFormat,
        pixelType,
        blankPixel,
      ),
      glInCreateTexture.texParameteri(
        glInCreateTexture.TEXTURE_2D,
        glInCreateTexture.TEXTURE_WRAP_S,
        glInCreateTexture.CLAMP_TO_EDGE,
      ),
      glInCreateTexture.texParameteri(
        glInCreateTexture.TEXTURE_2D,
        glInCreateTexture.TEXTURE_WRAP_T,
        glInCreateTexture.CLAMP_TO_EDGE,
      ),
      glInCreateTexture.texParameteri(
        glInCreateTexture.TEXTURE_2D,
        glInCreateTexture.TEXTURE_MIN_FILTER,
        glInCreateTexture.LINEAR,
      ),
      glInCreateTexture.texParameteri(
        glInCreateTexture.TEXTURE_2D,
        glInCreateTexture.TEXTURE_MAG_FILTER,
        glInCreateTexture.LINEAR,
      ),
      blankTexture
    );
  }
  let TransVideo = (function () {
    function TransVideoCtor(targetCanvas, options) {
      var selfRef = this;
      if (
        ((this.canvas = targetCanvas),
        (this.option = options),
        (this._active = !1),
        (this._size = [0, 0]),
        (this.renderer = null),
        (this.fallbackAnimeFrameRequest = !1),
        (this.initiateVideoMeta = function () {
          return new Promise(function (resolveMeta) {
            var applyVideoMeta = function () {
              var metaRenderer,
                sizeOption = (selfRef.option || {}).size;
              (sizeOption
                ? (selfRef._size = [sizeOption[0], sizeOption[1]])
                : (selfRef._size = (function (sourceWidth, sourceHeight, sizeModeConfig) {
                    if ("video" === sizeModeConfig.mode)
                      switch (sizeModeConfig.texturePlacement) {
                        case "bottom-top":
                        case "top-bottom":
                          return [sourceWidth, sourceHeight / 2];
                        default:
                          return [sourceWidth / 2, sourceHeight];
                      }
                    return [sourceWidth, sourceHeight];
                  })(selfRef.video.videoWidth, selfRef.video.videoHeight, selfRef.modeConfig)),
                (selfRef.canvas.width = selfRef._size[0]),
                (selfRef.canvas.height = selfRef._size[1]),
                null == (metaRenderer = selfRef.renderer) || metaRenderer.resize(),
                resolveMeta());
            };
            selfRef.video.readyState < 1
              ? selfRef.video.addEventListener("loadedmetadata", applyVideoMeta, {
                  once: !0,
                })
              : applyVideoMeta();
          });
        }),
        (this.initiatVideoFrame = function () {
          return new Promise(function (resolveFrame) {
            var seekToStart = function () {
              (selfRef.video.addEventListener(
                "seeked",
                function () {
                  resolveFrame();
                },
                {
                  once: !0,
                },
              ),
                (selfRef.video.currentTime = 0));
            };
            selfRef.video.readyState < 2
              ? selfRef.video.addEventListener("canplay", seekToStart, {
                  once: !0,
                })
              : seekToStart();
          });
        }),
        (this.ticker = function () {
          var tickRenderer,
            hasFrame = !1;
          selfRef._active &&
            (selfRef.video.readyState >= selfRef.video.HAVE_CURRENT_DATA && (hasFrame = !0),
            hasFrame && (null == (tickRenderer = selfRef.renderer) || tickRenderer.render(selfRef.video)),
            selfRef.fallbackAnimeFrameRequest
              ? requestAnimationFrame(selfRef.ticker)
              : selfRef.video.requestVideoFrameCallback(selfRef.ticker));
        }),
        (this.video = (null == options ? void 0 : options.video) || document.createElement("video")),
        (this.video.crossOrigin = "anonymous"),
        (this.video.playsInline = !0),
        (this.context2d = (null == options ? void 0 : options.context2d) || !1),
        (this.modeConfig = (function (rawOptions) {
          switch (null == rawOptions ? void 0 : rawOptions.mode) {
            case "luminance":
              return {
                mode: "luminance",
                reverse: rawOptions.reverse,
              };
            case "image":
              var maskImageElement = (function () {
                if ("string" == typeof rawOptions.image) {
                  var createdImage = new Image();
                  return ((createdImage.src = rawOptions.image), createdImage);
                }
                return rawOptions.image;
              })();
              return (
                (maskImageElement.crossOrigin = "anonymous"),
                {
                  mode: "image",
                  image: maskImageElement,
                }
              );
            default:
              return {
                mode: "video",
                texturePlacement: rawOptions.texturePlacement || "left-right",
              };
          }
        })(options)),
        (this.fallbackAnimeFrameRequest =
          !("requestVideoFrameCallback" in this.video) || /Android/i.test(navigator.userAgent)),
        !(null == options ? void 0 : options.forceContext2d) &&
          (targetCanvas.getContext("webgl") || targetCanvas.getContext("experimental-webgl")) instanceof
            WebGLRenderingContext)
      )
        this.renderer = new WebGLRenderer(targetCanvas, {
          modeConfig: this.modeConfig,
        });
      else
        (null == options ? void 0 : options.forceContext2d) || (null == options ? void 0 : options.context2d)
          ? (this.renderer = new Canvas2DRenderer(targetCanvas, {
              modeConfig: this.modeConfig,
            }))
          : console.warn("[@hg-web/trans-video] Device can't play.");
      (this.video.load(), this.prepareVideo());
    }
    return (
      Object.defineProperty(TransVideoCtor.prototype, "active", {
        get: function () {
          return this._active;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(TransVideoCtor.prototype, "size", {
        get: function () {
          return [this._size[0], this._size[1]];
        },
        enumerable: !1,
        configurable: !0,
      }),
      (TransVideoCtor.prototype.prepareVideo = function () {
        var prepareSelf = this;
        this.initiateVideoMeta()
          .then(function () {
            return prepareSelf.initiatVideoFrame();
          })
          .then(function () {
            var prepareRenderer;
            (prepareSelf.option || {}).manualStart
              ? null == (prepareRenderer = prepareSelf.renderer) || prepareRenderer.render(prepareSelf.video)
              : prepareSelf.start();
          });
      }),
      (TransVideoCtor.prototype.start = function () {
        (this.video.play(), this.activate());
      }),
      (TransVideoCtor.prototype.activate = function () {
        this._active || ((this._active = !0), this.ticker());
      }),
      (TransVideoCtor.prototype.deactivate = function () {
        this._active && (this._active = !1);
      }),
      (TransVideoCtor.prototype.dispose = function () {
        var disposeRenderer;
        ((this._active = !1), null == (disposeRenderer = this.renderer) || disposeRenderer.dispose());
      }),
      TransVideoCtor
    );
  })();
};
