// Gryphline web SDK v1.8.0 (account, qrcode, dayjs) — module 68973 from 7349-5fc72e5aa1e8149a
// module 68973 from 7349-5fc72e5aa1e8149a.js
// deps:
const module_68973 = (webpackModule, webpackExports, webpackRequire) => {
  "use strict";

  webpackRequire.d(webpackExports, {
    C6: () => a_2,
    Cl: () => r_3,
    Ju: () => l_7,
    Tt: () => o_4,
    YH: () => c_6,
    fX: () => d_9,
    sH: () => s_5,
    zs: () => u_8,
  });
  var n_1 = function (e_10, t_11) {
    return (n_1 =
      Object.setPrototypeOf ||
      ({
        __proto__: [],
      } instanceof Array &&
        function (e_12, t_13) {
          e_12.__proto__ = t_13;
        }) ||
      function (e_14, t_15) {
        for (var i_16 in t_15) Object.prototype.hasOwnProperty.call(t_15, i_16) && (e_14[i_16] = t_15[i_16]);
      })(e_10, t_11);
  };
  function a_2(e_17, t_18) {
    if ("function" != typeof t_18 && null !== t_18)
      throw TypeError("Class extends value " + String(t_18) + " is not a constructor or null");
    function i_19() {
      this.constructor = e_17;
    }
    (n_1(e_17, t_18),
      (e_17.prototype =
        null === t_18 ? Object.create(t_18) : ((i_19.prototype = t_18.prototype), new i_19())));
  }
  var r_3 = function () {
    return (r_3 =
      Object.assign ||
      function (e_20) {
        for (var t_21, i_22 = 1, n_23 = arguments.length; i_22 < n_23; i_22++)
          for (var a_24 in (t_21 = arguments[i_22]))
            Object.prototype.hasOwnProperty.call(t_21, a_24) && (e_20[a_24] = t_21[a_24]);
        return e_20;
      }).apply(this, arguments);
  };
  function o_4(e_25, t_26) {
    var i_27 = {};
    for (var n_28 in e_25)
      Object.prototype.hasOwnProperty.call(e_25, n_28) && 0 > t_26.indexOf(n_28) && (i_27[n_28] = e_25[n_28]);
    if (null != e_25 && "function" == typeof Object.getOwnPropertySymbols)
      for (var a_29 = 0, n_28 = Object.getOwnPropertySymbols(e_25); a_29 < n_28.length; a_29++)
        0 > t_26.indexOf(n_28[a_29]) &&
          Object.prototype.propertyIsEnumerable.call(e_25, n_28[a_29]) &&
          (i_27[n_28[a_29]] = e_25[n_28[a_29]]);
    return i_27;
  }
  function s_5(e_30, t_31, i_32, n_33) {
    return new (i_32 || (i_32 = Promise))(function (a_34, r_35) {
      function o_36(e_39) {
        try {
          c_38(n_33.next(e_39));
        } catch (e_40) {
          r_35(e_40);
        }
      }
      function s_37(e_41) {
        try {
          c_38(n_33.throw(e_41));
        } catch (e_42) {
          r_35(e_42);
        }
      }
      function c_38(e_43) {
        var t_44;
        e_43.done
          ? a_34(e_43.value)
          : ((t_44 = e_43.value) instanceof i_32
              ? t_44
              : new i_32(function (e_45) {
                  e_45(t_44);
                })
            ).then(o_36, s_37);
      }
      c_38((n_33 = n_33.apply(e_30, t_31 || [])).next());
    });
  }
  function c_6(e_46, t_47) {
    var i_48,
      n_49,
      a_50,
      r_51 = {
        label: 0,
        sent: function () {
          if (1 & a_50[0]) throw a_50[1];
          return a_50[1];
        },
        trys: [],
        ops: [],
      },
      o_52 = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
    return (
      (o_52.next = s_53(0)),
      (o_52.throw = s_53(1)),
      (o_52.return = s_53(2)),
      "function" == typeof Symbol &&
        (o_52[Symbol.iterator] = function () {
          return this;
        }),
      o_52
    );
    function s_53(s_54) {
      return function (c_55) {
        var l_56 = [s_54, c_55];
        if (i_48) throw TypeError("Generator is already executing.");
        for (; o_52 && ((o_52 = 0), l_56[0] && (r_51 = 0)), r_51;)
          try {
            if (
              ((i_48 = 1),
              n_49 &&
                (a_50 =
                  2 & l_56[0]
                    ? n_49.return
                    : l_56[0]
                      ? n_49.throw || ((a_50 = n_49.return) && a_50.call(n_49), 0)
                      : n_49.next) &&
                !(a_50 = a_50.call(n_49, l_56[1])).done)
            )
              return a_50;
            switch (((n_49 = 0), a_50 && (l_56 = [2 & l_56[0], a_50.value]), l_56[0])) {
              case 0:
              case 1:
                a_50 = l_56;
                break;
              case 4:
                return (
                  r_51.label++,
                  {
                    value: l_56[1],
                    done: !1,
                  }
                );
              case 5:
                (r_51.label++, (n_49 = l_56[1]), (l_56 = [0]));
                continue;
              case 7:
                ((l_56 = r_51.ops.pop()), r_51.trys.pop());
                continue;
              default:
                if (
                  !(a_50 = (a_50 = r_51.trys).length > 0 && a_50[a_50.length - 1]) &&
                  (6 === l_56[0] || 2 === l_56[0])
                ) {
                  r_51 = 0;
                  continue;
                }
                if (3 === l_56[0] && (!a_50 || (l_56[1] > a_50[0] && l_56[1] < a_50[3]))) {
                  r_51.label = l_56[1];
                  break;
                }
                if (6 === l_56[0] && r_51.label < a_50[1]) {
                  ((r_51.label = a_50[1]), (a_50 = l_56));
                  break;
                }
                if (a_50 && r_51.label < a_50[2]) {
                  ((r_51.label = a_50[2]), r_51.ops.push(l_56));
                  break;
                }
                (a_50[2] && r_51.ops.pop(), r_51.trys.pop());
                continue;
            }
            l_56 = t_47.call(e_46, r_51);
          } catch (e_57) {
            ((l_56 = [6, e_57]), (n_49 = 0));
          } finally {
            i_48 = a_50 = 0;
          }
        if (5 & l_56[0]) throw l_56[1];
        return {
          value: l_56[0] ? l_56[1] : void 0,
          done: !0,
        };
      };
    }
  }
  function l_7(e_58) {
    var t_59 = "function" == typeof Symbol && Symbol.iterator,
      i_60 = t_59 && e_58[t_59],
      n_61 = 0;
    if (i_60) return i_60.call(e_58);
    if (e_58 && "number" == typeof e_58.length)
      return {
        next: function () {
          return (
            e_58 && n_61 >= e_58.length && (e_58 = void 0),
            {
              value: e_58 && e_58[n_61++],
              done: !e_58,
            }
          );
        },
      };
    throw TypeError(t_59 ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }
  function u_8(e_62, t_63) {
    var i_64 = "function" == typeof Symbol && e_62[Symbol.iterator];
    if (!i_64) return e_62;
    var n_65,
      a_66,
      r_67 = i_64.call(e_62),
      o_68 = [];
    try {
      for (; (void 0 === t_63 || t_63-- > 0) && !(n_65 = r_67.next()).done;) o_68.push(n_65.value);
    } catch (e_69) {
      a_66 = {
        error: e_69,
      };
    } finally {
      try {
        n_65 && !n_65.done && (i_64 = r_67.return) && i_64.call(r_67);
      } finally {
        if (a_66) throw a_66.error;
      }
    }
    return o_68;
  }
  function d_9(e_70, t_71, i_72) {
    if (i_72 || 2 == arguments.length)
      for (var n_73, a_74 = 0, r_75 = t_71.length; a_74 < r_75; a_74++)
        (!n_73 && a_74 in t_71) ||
          (n_73 || (n_73 = Array.prototype.slice.call(t_71, 0, a_74)), (n_73[a_74] = t_71[a_74]));
    return e_70.concat(n_73 || Array.prototype.slice.call(t_71));
  }
  Object.create;
  (Object.create, "function" == typeof SuppressedError && SuppressedError);
};
