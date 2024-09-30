import Y, { createContext as ht, useContext as _e, memo as lt, Children as zt, isValidElement as Ku, cloneElement as Xu, useState as $, useRef as qe, useEffect as B, PureComponent as Ge, createRef as ti, useMemo as qt, useId as Gc, forwardRef as va, useCallback as Ve, useReducer as Yc, useLayoutEffect as Kc, Component as Xc } from "react";
import { Info as Wi, AlertTriangle as Jc, XCircle as Ju, CheckCircle2 as Qu, MapPinned as Qc, Loader2 as Ln, Check as el, Heading1 as ef, Heading2 as tf, Quote as nf, Bold as rf, Italic as af, Underline as of, Code as sf, AlignLeft as uf, AlignRight as lf, AlignCenter as cf, AlignJustify as ff, ChevronDown as df, ChevronRight as Ui, ChevronLeft as pf, Ellipsis as Ka, X as tl, AlertCircle as hf } from "lucide-react";
import * as nl from "react-dom";
import ga, { createPortal as ni } from "react-dom";
import { useActionData as rl, useLocation as il, Link as vf, useNavigate as gf } from "@remix-run/react";
import { InputMask as mf } from "@react-input/mask";
import { AnimatePresence as al, motion as rr } from "framer-motion";
var rn = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ma(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Hi = { exports: {} }, Hn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xa;
function yf() {
  if (Xa) return Hn;
  Xa = 1;
  var t = Y, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, a = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(s, u, l) {
    var c, p = {}, d = null, h = null;
    l !== void 0 && (d = "" + l), u.key !== void 0 && (d = "" + u.key), u.ref !== void 0 && (h = u.ref);
    for (c in u) r.call(u, c) && !a.hasOwnProperty(c) && (p[c] = u[c]);
    if (s && s.defaultProps) for (c in u = s.defaultProps, u) p[c] === void 0 && (p[c] = u[c]);
    return { $$typeof: e, type: s, key: d, ref: h, props: p, _owner: i.current };
  }
  return Hn.Fragment = n, Hn.jsx = o, Hn.jsxs = o, Hn;
}
var Vn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ja;
function Cf() {
  return Ja || (Ja = 1, process.env.NODE_ENV !== "production" && function() {
    var t = Y, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), a = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), p = Symbol.for("react.memo"), d = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), y = Symbol.iterator, v = "@@iterator";
    function f(L) {
      if (L === null || typeof L != "object")
        return null;
      var re = y && L[y] || L[v];
      return typeof re == "function" ? re : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(L) {
      {
        for (var re = arguments.length, ue = new Array(re > 1 ? re - 1 : 0), be = 1; be < re; be++)
          ue[be - 1] = arguments[be];
        b("error", L, ue);
      }
    }
    function b(L, re, ue) {
      {
        var be = C.ReactDebugCurrentFrame, je = be.getStackAddendum();
        je !== "" && (re += "%s", ue = ue.concat([je]));
        var $e = ue.map(function(Pe) {
          return String(Pe);
        });
        $e.unshift("Warning: " + re), Function.prototype.apply.call(console[L], console, $e);
      }
    }
    var S = !1, D = !1, E = !1, A = !1, F = !1, V;
    V = Symbol.for("react.module.reference");
    function M(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === r || L === a || F || L === i || L === l || L === c || A || L === h || S || D || E || typeof L == "object" && L !== null && (L.$$typeof === d || L.$$typeof === p || L.$$typeof === o || L.$$typeof === s || L.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === V || L.getModuleId !== void 0));
    }
    function z(L, re, ue) {
      var be = L.displayName;
      if (be)
        return be;
      var je = re.displayName || re.name || "";
      return je !== "" ? ue + "(" + je + ")" : ue;
    }
    function j(L) {
      return L.displayName || "Context";
    }
    function T(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case a:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case s:
            var re = L;
            return j(re) + ".Consumer";
          case o:
            var ue = L;
            return j(ue._context) + ".Provider";
          case u:
            return z(L, L.render, "ForwardRef");
          case p:
            var be = L.displayName || null;
            return be !== null ? be : T(L.type) || "Memo";
          case d: {
            var je = L, $e = je._payload, Pe = je._init;
            try {
              return T(Pe($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, N = 0, J, _, te, ae, k, I, Z;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function ee() {
      {
        if (N === 0) {
          J = console.log, _ = console.info, te = console.warn, ae = console.error, k = console.group, I = console.groupCollapsed, Z = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        N++;
      }
    }
    function X() {
      {
        if (N--, N === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, L, {
              value: J
            }),
            info: R({}, L, {
              value: _
            }),
            warn: R({}, L, {
              value: te
            }),
            error: R({}, L, {
              value: ae
            }),
            group: R({}, L, {
              value: k
            }),
            groupCollapsed: R({}, L, {
              value: I
            }),
            groupEnd: R({}, L, {
              value: Z
            })
          });
        }
        N < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var m = C.ReactCurrentDispatcher, U;
    function W(L, re, ue) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (je) {
            var be = je.stack.trim().match(/\n( *(at )?)/);
            U = be && be[1] || "";
          }
        return `
` + U + L;
      }
    }
    var P = !1, Q;
    {
      var ie = typeof WeakMap == "function" ? WeakMap : Map;
      Q = new ie();
    }
    function G(L, re) {
      if (!L || P)
        return "";
      {
        var ue = Q.get(L);
        if (ue !== void 0)
          return ue;
      }
      var be;
      P = !0;
      var je = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = m.current, m.current = null, ee();
      try {
        if (re) {
          var Pe = function() {
            throw Error();
          };
          if (Object.defineProperty(Pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pe, []);
            } catch (ut) {
              be = ut;
            }
            Reflect.construct(L, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (ut) {
              be = ut;
            }
            L.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ut) {
            be = ut;
          }
          L();
        }
      } catch (ut) {
        if (ut && be && typeof ut.stack == "string") {
          for (var Oe = ut.stack.split(`
`), st = be.stack.split(`
`), Ke = Oe.length - 1, et = st.length - 1; Ke >= 1 && et >= 0 && Oe[Ke] !== st[et]; )
            et--;
          for (; Ke >= 1 && et >= 0; Ke--, et--)
            if (Oe[Ke] !== st[et]) {
              if (Ke !== 1 || et !== 1)
                do
                  if (Ke--, et--, et < 0 || Oe[Ke] !== st[et]) {
                    var vt = `
` + Oe[Ke].replace(" at new ", " at ");
                    return L.displayName && vt.includes("<anonymous>") && (vt = vt.replace("<anonymous>", L.displayName)), typeof L == "function" && Q.set(L, vt), vt;
                  }
                while (Ke >= 1 && et >= 0);
              break;
            }
        }
      } finally {
        P = !1, m.current = $e, X(), Error.prepareStackTrace = je;
      }
      var Wt = L ? L.displayName || L.name : "", Ut = Wt ? W(Wt) : "";
      return typeof L == "function" && Q.set(L, Ut), Ut;
    }
    function ce(L, re, ue) {
      return G(L, !1);
    }
    function se(L) {
      var re = L.prototype;
      return !!(re && re.isReactComponent);
    }
    function he(L, re, ue) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return G(L, se(L));
      if (typeof L == "string")
        return W(L);
      switch (L) {
        case l:
          return W("Suspense");
        case c:
          return W("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case u:
            return ce(L.render);
          case p:
            return he(L.type, re, ue);
          case d: {
            var be = L, je = be._payload, $e = be._init;
            try {
              return he($e(je), re, ue);
            } catch {
            }
          }
        }
      return "";
    }
    var ve = Object.prototype.hasOwnProperty, De = {}, Ce = C.ReactDebugCurrentFrame;
    function me(L) {
      if (L) {
        var re = L._owner, ue = he(L.type, L._source, re ? re.type : null);
        Ce.setExtraStackFrame(ue);
      } else
        Ce.setExtraStackFrame(null);
    }
    function ge(L, re, ue, be, je) {
      {
        var $e = Function.call.bind(ve);
        for (var Pe in L)
          if ($e(L, Pe)) {
            var Oe = void 0;
            try {
              if (typeof L[Pe] != "function") {
                var st = Error((be || "React class") + ": " + ue + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw st.name = "Invariant Violation", st;
              }
              Oe = L[Pe](re, Pe, be, ue, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ke) {
              Oe = Ke;
            }
            Oe && !(Oe instanceof Error) && (me(je), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", be || "React class", ue, Pe, typeof Oe), me(null)), Oe instanceof Error && !(Oe.message in De) && (De[Oe.message] = !0, me(je), w("Failed %s type: %s", ue, Oe.message), me(null));
          }
      }
    }
    var Ie = Array.isArray;
    function le(L) {
      return Ie(L);
    }
    function Ne(L) {
      {
        var re = typeof Symbol == "function" && Symbol.toStringTag, ue = re && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return ue;
      }
    }
    function pe(L) {
      try {
        return Be(L), !1;
      } catch {
        return !0;
      }
    }
    function Be(L) {
      return "" + L;
    }
    function Me(L) {
      if (pe(L))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(L)), Be(L);
    }
    var We = C.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, dt, ct;
    ct = {};
    function kt(L) {
      if (ve.call(L, "ref")) {
        var re = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function mt(L) {
      if (ve.call(L, "key")) {
        var re = Object.getOwnPropertyDescriptor(L, "key").get;
        if (re && re.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Bt(L, re) {
      if (typeof L.ref == "string" && We.current && re && We.current.stateNode !== re) {
        var ue = T(We.current.type);
        ct[ue] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', T(We.current.type), L.ref), ct[ue] = !0);
      }
    }
    function jt(L, re) {
      {
        var ue = function() {
          we || (we = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ue.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: ue,
          configurable: !0
        });
      }
    }
    function yt(L, re) {
      {
        var ue = function() {
          dt || (dt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", re));
        };
        ue.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: ue,
          configurable: !0
        });
      }
    }
    var Yt = function(L, re, ue, be, je, $e, Pe) {
      var Oe = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: L,
        key: re,
        ref: ue,
        props: Pe,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return Oe._store = {}, Object.defineProperty(Oe._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Oe, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: be
      }), Object.defineProperty(Oe, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: je
      }), Object.freeze && (Object.freeze(Oe.props), Object.freeze(Oe)), Oe;
    };
    function Ee(L, re, ue, be, je) {
      {
        var $e, Pe = {}, Oe = null, st = null;
        ue !== void 0 && (Me(ue), Oe = "" + ue), mt(re) && (Me(re.key), Oe = "" + re.key), kt(re) && (st = re.ref, Bt(re, je));
        for ($e in re)
          ve.call(re, $e) && !Ye.hasOwnProperty($e) && (Pe[$e] = re[$e]);
        if (L && L.defaultProps) {
          var Ke = L.defaultProps;
          for ($e in Ke)
            Pe[$e] === void 0 && (Pe[$e] = Ke[$e]);
        }
        if (Oe || st) {
          var et = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Oe && jt(Pe, et), st && yt(Pe, et);
        }
        return Yt(L, Oe, st, je, be, We.current, Pe);
      }
    }
    var Te = C.ReactCurrentOwner, Re = C.ReactDebugCurrentFrame;
    function ot(L) {
      if (L) {
        var re = L._owner, ue = he(L.type, L._source, re ? re.type : null);
        Re.setExtraStackFrame(ue);
      } else
        Re.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Tt(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function cn() {
      {
        if (Te.current) {
          var L = T(Te.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function An(L) {
      {
        if (L !== void 0) {
          var re = L.fileName.replace(/^.*[\\\/]/, ""), ue = L.lineNumber;
          return `

Check your code at ` + re + ":" + ue + ".";
        }
        return "";
      }
    }
    var zn = {};
    function yr(L) {
      {
        var re = cn();
        if (!re) {
          var ue = typeof L == "string" ? L : L.displayName || L.name;
          ue && (re = `

Check the top-level render call using <` + ue + ">.");
        }
        return re;
      }
    }
    function fn(L, re) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var ue = yr(re);
        if (zn[ue])
          return;
        zn[ue] = !0;
        var be = "";
        L && L._owner && L._owner !== Te.current && (be = " It was passed a child from " + T(L._owner.type) + "."), ot(L), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ue, be), ot(null);
      }
    }
    function _n(L, re) {
      {
        if (typeof L != "object")
          return;
        if (le(L))
          for (var ue = 0; ue < L.length; ue++) {
            var be = L[ue];
            Tt(be) && fn(be, re);
          }
        else if (Tt(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var je = f(L);
          if (typeof je == "function" && je !== L.entries)
            for (var $e = je.call(L), Pe; !(Pe = $e.next()).done; )
              Tt(Pe.value) && fn(Pe.value, re);
        }
      }
    }
    function Cr(L) {
      {
        var re = L.type;
        if (re == null || typeof re == "string")
          return;
        var ue;
        if (typeof re == "function")
          ue = re.propTypes;
        else if (typeof re == "object" && (re.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        re.$$typeof === p))
          ue = re.propTypes;
        else
          return;
        if (ue) {
          var be = T(re);
          ge(ue, L.props, "prop", be, L);
        } else if (re.PropTypes !== void 0 && !ft) {
          ft = !0;
          var je = T(re);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", je || "Unknown");
        }
        typeof re.getDefaultProps == "function" && !re.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function On(L) {
      {
        for (var re = Object.keys(L.props), ue = 0; ue < re.length; ue++) {
          var be = re[ue];
          if (be !== "children" && be !== "key") {
            ot(L), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", be), ot(null);
            break;
          }
        }
        L.ref !== null && (ot(L), w("Invalid attribute `ref` supplied to `React.Fragment`."), ot(null));
      }
    }
    var Wn = {};
    function Un(L, re, ue, be, je, $e) {
      {
        var Pe = M(L);
        if (!Pe) {
          var Oe = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Oe += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var st = An(je);
          st ? Oe += st : Oe += cn();
          var Ke;
          L === null ? Ke = "null" : le(L) ? Ke = "array" : L !== void 0 && L.$$typeof === e ? (Ke = "<" + (T(L.type) || "Unknown") + " />", Oe = " Did you accidentally export a JSX literal instead of a component?") : Ke = typeof L, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ke, Oe);
        }
        var et = Ee(L, re, ue, je, $e);
        if (et == null)
          return et;
        if (Pe) {
          var vt = re.children;
          if (vt !== void 0)
            if (be)
              if (le(vt)) {
                for (var Wt = 0; Wt < vt.length; Wt++)
                  _n(vt[Wt], L);
                Object.freeze && Object.freeze(vt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _n(vt, L);
        }
        if (ve.call(re, "key")) {
          var Ut = T(L), ut = Object.keys(re).filter(function(Zc) {
            return Zc !== "key";
          }), xe = ut.length > 0 ? "{key: someKey, " + ut.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Wn[Ut + xe]) {
            var qc = ut.length > 0 ? "{" + ut.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, xe, Ut, qc, Ut), Wn[Ut + xe] = !0;
          }
        }
        return L === r ? On(et) : Cr(et), et;
      }
    }
    function Sn(L, re, ue) {
      return Un(L, re, ue, !0);
    }
    function Dr(L, re, ue) {
      return Un(L, re, ue, !1);
    }
    var br = Dr, Fn = Sn;
    Vn.Fragment = r, Vn.jsx = br, Vn.jsxs = Fn;
  }()), Vn;
}
process.env.NODE_ENV === "production" ? Hi.exports = yf() : Hi.exports = Cf();
var x = Hi.exports;
function Df(t) {
  const { className: e, ...n } = t, r = `arkynAlertTitle ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
const ol = ht({});
function bf() {
  return _e(ol);
}
function HD(t) {
  const { schema: e, children: n, className: r, ...i } = t, s = !((l) => {
    let c = !1;
    const p = (d) => {
      Array.isArray(d) ? d.forEach(p) : d && typeof d == "object" && "type" in d && (d.type === Df ? c = !0 : d.props && d.props.children && p(d.props.children));
    };
    return p(l), c;
  })(n) ? "nonExistsAlertTitle" : "existsAlertTitle", u = `arkynAlertContainer ${e} ${s} ${r}`;
  return /* @__PURE__ */ x.jsx(ol.Provider, { value: t, children: /* @__PURE__ */ x.jsx("div", { className: u.trim(), ...i, children: n }) });
}
function VD(t) {
  const { className: e, ...n } = t, r = `arkynAlertContent ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
function qD(t) {
  const { className: e, ...n } = t, r = `arkynAlertDescription ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
function ZD(t) {
  const { className: e, ...n } = t, { schema: r } = bf(), i = `arkynAlertIcon ${r} ${e}`;
  switch (r) {
    case "success":
      return /* @__PURE__ */ x.jsx(Qu, { className: i, ...n });
    case "danger":
      return /* @__PURE__ */ x.jsx(Ju, { className: i, ...n });
    case "warning":
      return /* @__PURE__ */ x.jsx(Jc, { className: i, ...n });
    case "info":
      return /* @__PURE__ */ x.jsx(Wi, { className: i, ...n });
  }
}
function qr(t, e) {
  return e ? /* @__PURE__ */ x.jsx(e, { size: t, strokeWidth: 2.5 }) : /* @__PURE__ */ x.jsx(x.Fragment, {});
}
function sl(t, e) {
  return [...new Array(e - t)].map((n, r) => t + r + 1).filter((n) => n > 0);
}
function Ef(t, e, n) {
  return t >= n ? [] : sl(t, t + e);
}
function wf(t, e) {
  return t <= 1 ? [] : sl(t - 1 - e, t - 1);
}
function Bf(t, e, n) {
  if (!t) return /* @__PURE__ */ x.jsx(x.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ x.jsx("p", { className: n, children: t });
  const r = t;
  return /* @__PURE__ */ x.jsx("p", { className: n, children: /* @__PURE__ */ x.jsx(r, { color: "var(--secondary-600)", size: e, strokeWidth: 2.5 }) });
}
function GD(t) {
  const {
    variant: e = "ghost",
    scheme: n = "primary",
    size: r = "md",
    leftIcon: i,
    rightIcon: a,
    className: o = "",
    children: s,
    ...u
  } = t, c = { md: 12, lg: 14 }[r], p = `arkynBadge ${e} ${n} ${r} ${o}`;
  return /* @__PURE__ */ x.jsxs("div", { className: p.trim(), ...u, children: [
    qr(c, i),
    s,
    qr(c, i)
  ] });
}
function YD(t) {
  const { className: e, ...n } = t, r = `arkynCard ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
function KD(t) {
  const {
    className: e,
    orientation: n = "horizontal",
    ...r
  } = t, i = `arkynDivider ${n} ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: i.trim(), ...r });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Vi = function(t, e) {
  return Vi = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Vi(t, e);
};
function Ze(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Vi(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ye = function() {
  return ye = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
    }
    return e;
  }, ye.apply(this, arguments);
};
function ya(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function xf(t, e, n, r) {
  function i(a) {
    return a instanceof n ? a : new n(function(o) {
      o(a);
    });
  }
  return new (n || (n = Promise))(function(a, o) {
    function s(c) {
      try {
        l(r.next(c));
      } catch (p) {
        o(p);
      }
    }
    function u(c) {
      try {
        l(r.throw(c));
      } catch (p) {
        o(p);
      }
    }
    function l(c) {
      c.done ? a(c.value) : i(c.value).then(s, u);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function Lf(t, e) {
  var n = { label: 0, sent: function() {
    if (a[0] & 1) throw a[1];
    return a[1];
  }, trys: [], ops: [] }, r, i, a, o;
  return o = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
    return this;
  }), o;
  function s(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, i && (a = l[0] & 2 ? i.return : l[0] ? i.throw || ((a = i.return) && a.call(i), 0) : i.next) && !(a = a.call(i, l[1])).done) return a;
      switch (i = 0, a && (l = [l[0] & 2, a.value]), l[0]) {
        case 0:
        case 1:
          a = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (a = n.trys, !(a = a.length > 0 && a[a.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!a || l[1] > a[0] && l[1] < a[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < a[1]) {
            n.label = a[1], a = l;
            break;
          }
          if (a && n.label < a[2]) {
            n.label = a[2], n.ops.push(l);
            break;
          }
          a[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = e.call(t, n);
    } catch (c) {
      l = [6, c], i = 0;
    } finally {
      r = a = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function ul(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Af = process.env.NODE_ENV, Of = function(t, e, n, r, i, a, o, s) {
  if (Af !== "production" && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var u;
    if (e === void 0)
      u = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var l = [n, r, i, a, o, s], c = 0;
      u = new Error(
        e.replace(/%s/g, function() {
          return l[c++];
        })
      ), u.name = "Invariant Violation";
    }
    throw u.framesToPop = 1, u;
  }
}, Sf = Of, at = /* @__PURE__ */ ul(Sf), Ae = ht(null);
function Ff() {
  at(!!_e, "useGoogleMap is React hook and requires React version 16.8+");
  var t = _e(Ae);
  return at(!!t, "useGoogleMap needs a GoogleMap available up in the tree"), t;
}
function Mf(t, e, n) {
  return Object.keys(t).reduce(function(i, a) {
    return e(i, t[a], a);
  }, n);
}
function Pf(t, e) {
  Object.keys(t).forEach(function(n) {
    return e(t[n], n);
  });
}
function kf(t, e, n, r) {
  var i = {}, a = function(o, s) {
    var u = n[s];
    u !== e[s] && (i[s] = u, o(r, u));
  };
  return Pf(t, a), i;
}
function Tf(t, e, n) {
  var r = Mf(n, function(a, o, s) {
    return typeof t[s] == "function" && a.push(google.maps.event.addListener(e, o, t[s])), a;
  }, []);
  return r;
}
function Rf(t) {
  google.maps.event.removeListener(t);
}
function ke(t) {
  t === void 0 && (t = []), t.forEach(Rf);
}
function Fe(t) {
  var e = t.updaterMap, n = t.eventMap, r = t.prevProps, i = t.nextProps, a = t.instance, o = Tf(i, a, n);
  return kf(e, r, i, a), o;
}
var Qa = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
}, eo = {
  extraMapTypes: function(t, e) {
    e.forEach(function(r, i) {
      t.mapTypes.set(String(i), r);
    });
  },
  center: function(t, e) {
    t.setCenter(e);
  },
  clickableIcons: function(t, e) {
    t.setClickableIcons(e);
  },
  heading: function(t, e) {
    t.setHeading(e);
  },
  mapTypeId: function(t, e) {
    t.setMapTypeId(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  streetView: function(t, e) {
    t.setStreetView(e);
  },
  tilt: function(t, e) {
    t.setTilt(e);
  },
  zoom: function(t, e) {
    t.setZoom(e);
  }
};
function jf(t) {
  var e = t.children, n = t.options, r = t.id, i = t.mapContainerStyle, a = t.mapContainerClassName, o = t.center, s = t.onClick, u = t.onDblClick, l = t.onDrag, c = t.onDragEnd, p = t.onDragStart, d = t.onMouseMove, h = t.onMouseOut, y = t.onMouseOver, v = t.onMouseDown, f = t.onMouseUp, C = t.onRightClick, w = t.onCenterChanged, b = t.onLoad, S = t.onUnmount, D = $(null), E = D[0], A = D[1], F = qe(null), V = $(null), M = V[0], z = V[1], j = $(null), T = j[0], R = j[1], N = $(null), J = N[0], _ = N[1], te = $(null), ae = te[0], k = te[1], I = $(null), Z = I[0], H = I[1], ee = $(null), X = ee[0], m = ee[1], U = $(null), W = U[0], P = U[1], Q = $(null), ie = Q[0], G = Q[1], ce = $(null), se = ce[0], he = ce[1], ve = $(null), De = ve[0], Ce = ve[1], me = $(null), ge = me[0], Ie = me[1], le = $(null), Ne = le[0], pe = le[1];
  return B(function() {
    n && E !== null && E.setOptions(n);
  }, [E, n]), B(function() {
    E !== null && typeof o < "u" && E.setCenter(o);
  }, [E, o]), B(function() {
    E && u && (T !== null && google.maps.event.removeListener(T), R(google.maps.event.addListener(E, "dblclick", u)));
  }, [u]), B(function() {
    E && c && (J !== null && google.maps.event.removeListener(J), _(google.maps.event.addListener(E, "dragend", c)));
  }, [c]), B(function() {
    E && p && (ae !== null && google.maps.event.removeListener(ae), k(google.maps.event.addListener(E, "dragstart", p)));
  }, [p]), B(function() {
    E && v && (Z !== null && google.maps.event.removeListener(Z), H(google.maps.event.addListener(E, "mousedown", v)));
  }, [v]), B(function() {
    E && d && (X !== null && google.maps.event.removeListener(X), m(google.maps.event.addListener(E, "mousemove", d)));
  }, [d]), B(function() {
    E && h && (W !== null && google.maps.event.removeListener(W), P(google.maps.event.addListener(E, "mouseout", h)));
  }, [h]), B(function() {
    E && y && (ie !== null && google.maps.event.removeListener(ie), G(google.maps.event.addListener(E, "mouseover", y)));
  }, [y]), B(function() {
    E && f && (se !== null && google.maps.event.removeListener(se), he(google.maps.event.addListener(E, "mouseup", f)));
  }, [f]), B(function() {
    E && C && (De !== null && google.maps.event.removeListener(De), Ce(google.maps.event.addListener(E, "rightclick", C)));
  }, [C]), B(function() {
    E && s && (ge !== null && google.maps.event.removeListener(ge), Ie(google.maps.event.addListener(E, "click", s)));
  }, [s]), B(function() {
    E && l && (Ne !== null && google.maps.event.removeListener(Ne), pe(google.maps.event.addListener(E, "drag", l)));
  }, [l]), B(function() {
    E && w && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(E, "center_changed", w)));
  }, [s]), B(function() {
    var Be = F.current === null ? null : new google.maps.Map(F.current, n);
    return A(Be), Be !== null && b && b(Be), function() {
      Be !== null && S && S(Be);
    };
  }, []), x.jsx("div", { id: r, ref: F, style: i, className: a, children: x.jsx(Ae.Provider, { value: E, children: E !== null ? e : null }) });
}
lt(jf);
var If = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.state = {
        map: null
      }, n.registeredEvents = [], n.mapRef = null, n.getInstance = function() {
        return n.mapRef === null ? null : new google.maps.Map(n.mapRef, n.props.options);
      }, n.panTo = function(r) {
        var i = n.getInstance();
        i && i.panTo(r);
      }, n.setMapCallback = function() {
        n.state.map !== null && n.props.onLoad && n.props.onLoad(n.state.map);
      }, n.getRef = function(r) {
        n.mapRef = r;
      }, n;
    }
    return e.prototype.componentDidMount = function() {
      var n = this.getInstance();
      this.registeredEvents = Fe({
        updaterMap: eo,
        eventMap: Qa,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(function() {
        return {
          map: n
        };
      }, this.setMapCallback);
    }, e.prototype.componentDidUpdate = function(n) {
      this.state.map !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
        updaterMap: eo,
        eventMap: Qa,
        prevProps: n,
        nextProps: this.props,
        instance: this.state.map
      }));
    }, e.prototype.componentWillUnmount = function() {
      this.state.map !== null && (this.props.onUnmount && this.props.onUnmount(this.state.map), ke(this.registeredEvents));
    }, e.prototype.render = function() {
      return x.jsx("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName, children: x.jsx(Ae.Provider, { value: this.state.map, children: this.state.map !== null ? this.props.children : null }) });
    }, e;
  }(Ge)
), mn = typeof document < "u";
function ll(t) {
  var e = t.url, n = t.id, r = t.nonce;
  return mn ? new Promise(function(a, o) {
    var s = document.getElementById(n), u = window;
    if (s) {
      var l = s.getAttribute("data-state");
      if (s.src === e && l !== "error") {
        if (l === "ready")
          return a(n);
        var c = u.initMap, p = s.onerror;
        u.initMap = function() {
          c && c(), a(n);
        }, s.onerror = function(h) {
          p && p(h), o(h);
        };
        return;
      } else
        s.remove();
    }
    var d = document.createElement("script");
    d.type = "text/javascript", d.src = e, d.id = n, d.async = !0, d.nonce = r || "", d.onerror = function(y) {
      d.setAttribute("data-state", "error"), o(y);
    }, u.initMap = function() {
      d.setAttribute("data-state", "ready"), a(n);
    }, document.head.appendChild(d);
  }).catch(function(i) {
    throw console.error("injectScript error: ", i), i;
  }) : Promise.reject(new Error("document is undefined"));
}
function to(t) {
  var e = t.href;
  return e && (e.indexOf("https://fonts.googleapis.com/css?family=Roboto") === 0 || e.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text") === 0) ? !0 : (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.styleSheet.cssText && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.styleSheet.cssText.replace(`\r
`, "").indexOf(".gm-style") === 0 ? (t.styleSheet.cssText = "", !0) : (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      t.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      t.innerHTML && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      t.innerHTML.replace(`\r
`, "").indexOf(".gm-style") === 0 ? (t.innerHTML = "", !0) : (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !t.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !t.innerHTML
      )
    )
  );
}
function cl() {
  var t = document.getElementsByTagName("head")[0];
  if (t) {
    var e = t.insertBefore.bind(t);
    t.insertBefore = function(i, a) {
      return to(i) || Reflect.apply(e, t, [i, a]), i;
    };
    var n = t.appendChild.bind(t);
    t.appendChild = function(i) {
      return to(i) || Reflect.apply(n, t, [i]), i;
    };
  }
}
function fl(t) {
  var e = t.googleMapsApiKey, n = t.googleMapsClientId, r = t.version, i = r === void 0 ? "weekly" : r, a = t.language, o = t.region, s = t.libraries, u = t.channel, l = t.mapIds, c = t.authReferrerPolicy, p = [];
  return at(e && n || !(e && n), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."), e ? p.push("key=".concat(e)) : n && p.push("client=".concat(n)), i && p.push("v=".concat(i)), a && p.push("language=".concat(a)), o && p.push("region=".concat(o)), s && s.length && p.push("libraries=".concat(s.sort().join(","))), u && p.push("channel=".concat(u)), l && l.length && p.push("map_ids=".concat(l.join(","))), c && p.push("auth_referrer_policy=".concat(c)), p.push("callback=initMap"), "https://maps.googleapis.com/maps/api/js?".concat(p.join("&"));
}
var qn = !1;
function dl() {
  return x.jsx("div", { children: "Loading..." });
}
var qi = {
  id: "script-loader",
  version: "weekly"
}, Nf = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.check = ti(), n.state = {
        loaded: !1
      }, n.cleanupCallback = function() {
        delete window.google.maps, n.injectScript();
      }, n.isCleaningUp = function() {
        return xf(n, void 0, void 0, function() {
          function r(i) {
            if (!qn)
              i();
            else if (mn)
              var a = window.setInterval(function() {
                qn || (window.clearInterval(a), i());
              }, 1);
          }
          return Lf(this, function(i) {
            return [2, new Promise(r)];
          });
        });
      }, n.cleanup = function() {
        qn = !0;
        var r = document.getElementById(n.props.id);
        r && r.parentNode && r.parentNode.removeChild(r), Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(a) {
          return typeof a.src == "string" && a.src.includes("maps.googleapis");
        }).forEach(function(a) {
          a.parentNode && a.parentNode.removeChild(a);
        }), Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(a) {
          return a.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
        }).forEach(function(a) {
          a.parentNode && a.parentNode.removeChild(a);
        }), Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(a) {
          return a.innerText !== void 0 && a.innerText.length > 0 && a.innerText.includes(".gm-");
        }).forEach(function(a) {
          a.parentNode && a.parentNode.removeChild(a);
        });
      }, n.injectScript = function() {
        n.props.preventGoogleFontsLoading && cl(), at(!!n.props.id, 'LoadScript requires "id" prop to be a string: %s', n.props.id);
        var r = {
          id: n.props.id,
          nonce: n.props.nonce,
          url: fl(n.props)
        };
        ll(r).then(function() {
          n.props.onLoad && n.props.onLoad(), n.setState(function() {
            return {
              loaded: !0
            };
          });
        }).catch(function(i) {
          n.props.onError && n.props.onError(i), console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(n.props.googleMapsApiKey || "-", ") or Client ID (").concat(n.props.googleMapsClientId || "-", `) to <LoadScript />
          Otherwise it is a Network issue.
        `));
        });
      }, n;
    }
    return e.prototype.componentDidMount = function() {
      if (mn) {
        if (window.google && window.google.maps && !qn) {
          console.error("google api is already presented");
          return;
        }
        this.isCleaningUp().then(this.injectScript).catch(function(r) {
          console.error("Error at injecting script after cleaning up: ", r);
        });
      }
    }, e.prototype.componentDidUpdate = function(n) {
      this.props.libraries !== n.libraries && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), mn && n.language !== this.props.language && (this.cleanup(), this.setState(function() {
        return {
          loaded: !1
        };
      }, this.cleanupCallback));
    }, e.prototype.componentWillUnmount = function() {
      var n = this;
      if (mn) {
        this.cleanup();
        var r = function() {
          n.check.current || (delete window.google, qn = !1);
        };
        window.setTimeout(r, 1), this.props.onUnmount && this.props.onUnmount();
      }
    }, e.prototype.render = function() {
      return x.jsxs(x.Fragment, { children: [x.jsx("div", { ref: this.check }), this.state.loaded ? this.props.children : this.props.loadingElement || x.jsx(dl, {})] });
    }, e.defaultProps = qi, e;
  }(Ge)
), no;
function $f(t) {
  var e = t.id, n = e === void 0 ? qi.id : e, r = t.version, i = r === void 0 ? qi.version : r, a = t.nonce, o = t.googleMapsApiKey, s = t.googleMapsClientId, u = t.language, l = t.region, c = t.libraries, p = t.preventGoogleFontsLoading, d = t.channel, h = t.mapIds, y = t.authReferrerPolicy, v = qe(!1), f = $(!1), C = f[0], w = f[1], b = $(void 0), S = b[0], D = b[1];
  B(function() {
    return v.current = !0, function() {
      v.current = !1;
    };
  }, []), B(function() {
    mn && p && cl();
  }, [p]), B(function() {
    C && at(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.");
  }, [C]);
  var E = fl({
    version: i,
    googleMapsApiKey: o,
    googleMapsClientId: s,
    language: u,
    region: l,
    libraries: c,
    channel: d,
    mapIds: h,
    authReferrerPolicy: y
  });
  B(function() {
    if (!mn)
      return;
    function V() {
      v.current && (w(!0), no = E);
    }
    if (window.google && window.google.maps && no === E) {
      V();
      return;
    }
    ll({ id: n, url: E, nonce: a }).then(V).catch(function(z) {
      v.current && D(z), console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(o || "-", ") or Client ID (").concat(s || "-", `)
        Otherwise it is a Network issue.
      `)), console.error(z);
    });
  }, [n, E, a]);
  var A = qe();
  return B(function() {
    A.current && c !== A.current && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), A.current = c;
  }, [c]), { isLoaded: C, loadError: S, url: E };
}
var zf = x.jsx(dl, {});
function _f(t) {
  var e = t.loadingElement, n = t.onLoad, r = t.onError, i = t.onUnmount, a = t.children, o = ya(t, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]), s = $f(o), u = s.isLoaded, l = s.loadError;
  return B(function() {
    u && typeof n == "function" && n();
  }, [u, n]), B(function() {
    l && typeof r == "function" && r(l);
  }, [l, r]), B(function() {
    return function() {
      i && i();
    };
  }, [i]), u ? a : e || zf;
}
lt(_f);
var ro;
(function(t) {
  t[t.INITIALIZED = 0] = "INITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.SUCCESS = 2] = "SUCCESS", t[t.FAILURE = 3] = "FAILURE";
})(ro || (ro = {}));
var io = {}, ao = {
  options: function(t, e) {
    t.setOptions(e);
  }
};
function Wf(t) {
  var e = t.options, n = t.onLoad, r = t.onUnmount, i = _e(Ae), a = $(null), o = a[0], s = a[1];
  return B(function() {
    o !== null && o.setMap(i);
  }, [i]), B(function() {
    e && o !== null && o.setOptions(e);
  }, [o, e]), B(function() {
    var u = new google.maps.TrafficLayer(ye(ye({}, e || {}), { map: i }));
    return s(u), n && n(u), function() {
      o !== null && (r && r(o), o.setMap(null));
    };
  }, []), null;
}
lt(Wf);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      trafficLayer: null
    }, n.setTrafficLayerCallback = function() {
      n.state.trafficLayer !== null && n.props.onLoad && n.props.onLoad(n.state.trafficLayer);
    }, n.registeredEvents = [], n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.TrafficLayer(ye(ye({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: ao,
      eventMap: io,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        trafficLayer: n
      };
    }, this.setTrafficLayerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.trafficLayer !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: ao,
      eventMap: io,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.trafficLayer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.trafficLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.trafficLayer), ke(this.registeredEvents), this.state.trafficLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
function Uf(t) {
  var e = t.onLoad, n = t.onUnmount, r = _e(Ae), i = $(null), a = i[0], o = i[1];
  return B(function() {
    a !== null && a.setMap(r);
  }, [r]), B(function() {
    var s = new google.maps.BicyclingLayer();
    return o(s), s.setMap(r), e && e(s), function() {
      s !== null && (n && n(s), s.setMap(null));
    };
  }, []), null;
}
lt(Uf);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      bicyclingLayer: null
    }, n.setBicyclingLayerCallback = function() {
      n.state.bicyclingLayer !== null && (n.state.bicyclingLayer.setMap(n.context), n.props.onLoad && n.props.onLoad(n.state.bicyclingLayer));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.BicyclingLayer();
    this.setState(function() {
      return {
        bicyclingLayer: n
      };
    }, this.setBicyclingLayerCallback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.bicyclingLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.bicyclingLayer), this.state.bicyclingLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
function Hf(t) {
  var e = t.onLoad, n = t.onUnmount, r = _e(Ae), i = $(null), a = i[0], o = i[1];
  return B(function() {
    a !== null && a.setMap(r);
  }, [r]), B(function() {
    var s = new google.maps.TransitLayer();
    return o(s), s.setMap(r), e && e(s), function() {
      a !== null && (n && n(a), a.setMap(null));
    };
  }, []), null;
}
lt(Hf);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      transitLayer: null
    }, n.setTransitLayerCallback = function() {
      n.state.transitLayer !== null && (n.state.transitLayer.setMap(n.context), n.props.onLoad && n.props.onLoad(n.state.transitLayer));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.TransitLayer();
    this.setState(function() {
      return {
        transitLayer: n
      };
    }, this.setTransitLayerCallback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.transitLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.transitLayer), this.state.transitLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var oo = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
}, so = {
  drawingMode: function(t, e) {
    t.setDrawingMode(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  }
};
function Vf(t) {
  var e = t.options, n = t.drawingMode, r = t.onCircleComplete, i = t.onMarkerComplete, a = t.onOverlayComplete, o = t.onPolygonComplete, s = t.onPolylineComplete, u = t.onRectangleComplete, l = t.onLoad, c = t.onUnmount, p = _e(Ae), d = $(null), h = d[0], y = d[1], v = $(null), f = v[0], C = v[1], w = $(null), b = w[0], S = w[1], D = $(null), E = D[0], A = D[1], F = $(null), V = F[0], M = F[1], z = $(null), j = z[0], T = z[1], R = $(null), N = R[0], J = R[1];
  return B(function() {
    h !== null && h.setMap(p);
  }, [p]), B(function() {
    e && h !== null && h.setOptions(e);
  }, [h, e]), B(function() {
    h !== null && h.setDrawingMode(n ?? null);
  }, [h, n]), B(function() {
    h && r && (f !== null && google.maps.event.removeListener(f), C(google.maps.event.addListener(h, "circlecomplete", r)));
  }, [h, r]), B(function() {
    h && i && (b !== null && google.maps.event.removeListener(b), S(google.maps.event.addListener(h, "markercomplete", i)));
  }, [h, i]), B(function() {
    h && a && (E !== null && google.maps.event.removeListener(E), A(google.maps.event.addListener(h, "overlaycomplete", a)));
  }, [h, a]), B(function() {
    h && o && (V !== null && google.maps.event.removeListener(V), M(google.maps.event.addListener(h, "polygoncomplete", o)));
  }, [h, o]), B(function() {
    h && s && (j !== null && google.maps.event.removeListener(j), T(google.maps.event.addListener(h, "polylinecomplete", s)));
  }, [h, s]), B(function() {
    h && u && (N !== null && google.maps.event.removeListener(N), J(google.maps.event.addListener(h, "rectanglecomplete", u)));
  }, [h, u]), B(function() {
    at(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    var _ = new google.maps.drawing.DrawingManager(ye(ye({}, e || {}), { map: p }));
    return n && _.setDrawingMode(n), r && C(google.maps.event.addListener(_, "circlecomplete", r)), i && S(google.maps.event.addListener(_, "markercomplete", i)), a && A(google.maps.event.addListener(_, "overlaycomplete", a)), o && M(google.maps.event.addListener(_, "polygoncomplete", o)), s && T(google.maps.event.addListener(_, "polylinecomplete", s)), u && J(google.maps.event.addListener(_, "rectanglecomplete", u)), y(_), l && l(_), function() {
      h !== null && (f && google.maps.event.removeListener(f), b && google.maps.event.removeListener(b), E && google.maps.event.removeListener(E), V && google.maps.event.removeListener(V), j && google.maps.event.removeListener(j), N && google.maps.event.removeListener(N), c && c(h), h.setMap(null));
    };
  }, []), null;
}
lt(Vf);
(function(t) {
  Ze(e, t);
  function e(n) {
    var r = t.call(this, n) || this;
    return r.registeredEvents = [], r.state = {
      drawingManager: null
    }, r.setDrawingManagerCallback = function() {
      r.state.drawingManager !== null && r.props.onLoad && r.props.onLoad(r.state.drawingManager);
    }, at(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing), r;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.drawing.DrawingManager(ye(ye({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: so,
      eventMap: oo,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        drawingManager: n
      };
    }, this.setDrawingManagerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.drawingManager !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: so,
      eventMap: oo,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.drawingManager
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.drawingManager !== null && (this.props.onUnmount && this.props.onUnmount(this.state.drawingManager), ke(this.registeredEvents), this.state.drawingManager.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var uo = {
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDraggableChanged: "draggable_changed",
  onDragStart: "dragstart",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onPositionChanged: "position_changed",
  onRightClick: "rightclick",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
}, lo = {
  animation: function(t, e) {
    t.setAnimation(e);
  },
  clickable: function(t, e) {
    t.setClickable(e);
  },
  cursor: function(t, e) {
    t.setCursor(e);
  },
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  icon: function(t, e) {
    t.setIcon(e);
  },
  label: function(t, e) {
    t.setLabel(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  opacity: function(t, e) {
    t.setOpacity(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  position: function(t, e) {
    t.setPosition(e);
  },
  shape: function(t, e) {
    t.setShape(e);
  },
  title: function(t, e) {
    t.setTitle(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
}, Zr = {};
function qf(t) {
  var e = t.position, n = t.options, r = t.clusterer, i = t.noClustererRedraw, a = t.children, o = t.draggable, s = t.visible, u = t.animation, l = t.clickable, c = t.cursor, p = t.icon, d = t.label, h = t.opacity, y = t.shape, v = t.title, f = t.zIndex, C = t.onClick, w = t.onDblClick, b = t.onDrag, S = t.onDragEnd, D = t.onDragStart, E = t.onMouseOut, A = t.onMouseOver, F = t.onMouseUp, V = t.onMouseDown, M = t.onRightClick, z = t.onClickableChanged, j = t.onCursorChanged, T = t.onAnimationChanged, R = t.onDraggableChanged, N = t.onFlatChanged, J = t.onIconChanged, _ = t.onPositionChanged, te = t.onShapeChanged, ae = t.onTitleChanged, k = t.onVisibleChanged, I = t.onZindexChanged, Z = t.onLoad, H = t.onUnmount, ee = _e(Ae), X = $(null), m = X[0], U = X[1], W = $(null), P = W[0], Q = W[1], ie = $(null), G = ie[0], ce = ie[1], se = $(null), he = se[0], ve = se[1], De = $(null), Ce = De[0], me = De[1], ge = $(null), Ie = ge[0], le = ge[1], Ne = $(null), pe = Ne[0], Be = Ne[1], Me = $(null), We = Me[0], Ye = Me[1], we = $(null), dt = we[0], ct = we[1], kt = $(null), mt = kt[0], Bt = kt[1], jt = $(null), yt = jt[0], Yt = jt[1], Ee = $(null), Te = Ee[0], Re = Ee[1], ot = $(null), ft = ot[0], Tt = ot[1], cn = $(null), An = cn[0], zn = cn[1], yr = $(null), fn = yr[0], _n = yr[1], Cr = $(null), On = Cr[0], Wn = Cr[1], Un = $(null), Sn = Un[0], Dr = Un[1], br = $(null), Fn = br[0], L = br[1], re = $(null), ue = re[0], be = re[1], je = $(null), $e = je[0], Pe = je[1], Oe = $(null), st = Oe[0], Ke = Oe[1], et = $(null), vt = et[0], Wt = et[1];
  B(function() {
    m !== null && m.setMap(ee);
  }, [ee]), B(function() {
    typeof n < "u" && m !== null && m.setOptions(n);
  }, [m, n]), B(function() {
    typeof o < "u" && m !== null && m.setDraggable(o);
  }, [m, o]), B(function() {
    e && m !== null && m.setPosition(e);
  }, [m, e]), B(function() {
    typeof s < "u" && m !== null && m.setVisible(s);
  }, [m, s]), B(function() {
    m == null || m.setAnimation(u);
  }, [m, u]), B(function() {
    m && l !== void 0 && m.setClickable(l);
  }, [m, l]), B(function() {
    m && c !== void 0 && m.setCursor(c);
  }, [m, c]), B(function() {
    m && p !== void 0 && m.setIcon(p);
  }, [m, p]), B(function() {
    m && d !== void 0 && m.setLabel(d);
  }, [m, d]), B(function() {
    m && h !== void 0 && m.setOpacity(h);
  }, [m, h]), B(function() {
    m && y !== void 0 && m.setShape(y);
  }, [m, y]), B(function() {
    m && v !== void 0 && m.setTitle(v);
  }, [m, v]), B(function() {
    m && f !== void 0 && m.setZIndex(f);
  }, [m, f]), B(function() {
    m && w && (P !== null && google.maps.event.removeListener(P), Q(google.maps.event.addListener(m, "dblclick", w)));
  }, [w]), B(function() {
    m && S && (G !== null && google.maps.event.removeListener(G), ce(google.maps.event.addListener(m, "dragend", S)));
  }, [S]), B(function() {
    m && D && (he !== null && google.maps.event.removeListener(he), ve(google.maps.event.addListener(m, "dragstart", D)));
  }, [D]), B(function() {
    m && V && (Ce !== null && google.maps.event.removeListener(Ce), me(google.maps.event.addListener(m, "mousedown", V)));
  }, [V]), B(function() {
    m && E && (Ie !== null && google.maps.event.removeListener(Ie), le(google.maps.event.addListener(m, "mouseout", E)));
  }, [E]), B(function() {
    m && A && (pe !== null && google.maps.event.removeListener(pe), Be(google.maps.event.addListener(m, "mouseover", A)));
  }, [A]), B(function() {
    m && F && (We !== null && google.maps.event.removeListener(We), Ye(google.maps.event.addListener(m, "mouseup", F)));
  }, [F]), B(function() {
    m && M && (dt !== null && google.maps.event.removeListener(dt), ct(google.maps.event.addListener(m, "rightclick", M)));
  }, [M]), B(function() {
    m && C && (mt !== null && google.maps.event.removeListener(mt), Bt(google.maps.event.addListener(m, "click", C)));
  }, [C]), B(function() {
    m && b && (yt !== null && google.maps.event.removeListener(yt), Yt(google.maps.event.addListener(m, "drag", b)));
  }, [b]), B(function() {
    m && z && (Te !== null && google.maps.event.removeListener(Te), Re(google.maps.event.addListener(m, "clickable_changed", z)));
  }, [z]), B(function() {
    m && j && (ft !== null && google.maps.event.removeListener(ft), Tt(google.maps.event.addListener(m, "cursor_changed", j)));
  }, [j]), B(function() {
    m && T && (An !== null && google.maps.event.removeListener(An), zn(google.maps.event.addListener(m, "animation_changed", T)));
  }, [T]), B(function() {
    m && R && (fn !== null && google.maps.event.removeListener(fn), _n(google.maps.event.addListener(m, "draggable_changed", R)));
  }, [R]), B(function() {
    m && N && (On !== null && google.maps.event.removeListener(On), Wn(google.maps.event.addListener(m, "flat_changed", N)));
  }, [N]), B(function() {
    m && J && (Sn !== null && google.maps.event.removeListener(Sn), Dr(google.maps.event.addListener(m, "icon_changed", J)));
  }, [J]), B(function() {
    m && _ && (Fn !== null && google.maps.event.removeListener(Fn), L(google.maps.event.addListener(m, "position_changed", _)));
  }, [_]), B(function() {
    m && te && (ue !== null && google.maps.event.removeListener(ue), be(google.maps.event.addListener(m, "shape_changed", te)));
  }, [te]), B(function() {
    m && ae && ($e !== null && google.maps.event.removeListener($e), Pe(google.maps.event.addListener(m, "title_changed", ae)));
  }, [ae]), B(function() {
    m && k && (st !== null && google.maps.event.removeListener(st), Ke(google.maps.event.addListener(m, "visible_changed", k)));
  }, [k]), B(function() {
    m && I && (vt !== null && google.maps.event.removeListener(vt), Wt(google.maps.event.addListener(m, "zindex_changed", I)));
  }, [I]), B(function() {
    var ut = ye(ye(ye({}, n || Zr), r ? Zr : { map: ee }), { position: e }), xe = new google.maps.Marker(ut);
    return r ? r.addMarker(xe, !!i) : xe.setMap(ee), e && xe.setPosition(e), typeof s < "u" && xe.setVisible(s), typeof o < "u" && xe.setDraggable(o), typeof l < "u" && xe.setClickable(l), typeof c == "string" && xe.setCursor(c), p && xe.setIcon(p), typeof d < "u" && xe.setLabel(d), typeof h < "u" && xe.setOpacity(h), y && xe.setShape(y), typeof v == "string" && xe.setTitle(v), typeof f == "number" && xe.setZIndex(f), w && Q(google.maps.event.addListener(xe, "dblclick", w)), S && ce(google.maps.event.addListener(xe, "dragend", S)), D && ve(google.maps.event.addListener(xe, "dragstart", D)), V && me(google.maps.event.addListener(xe, "mousedown", V)), E && le(google.maps.event.addListener(xe, "mouseout", E)), A && Be(google.maps.event.addListener(xe, "mouseover", A)), F && Ye(google.maps.event.addListener(xe, "mouseup", F)), M && ct(google.maps.event.addListener(xe, "rightclick", M)), C && Bt(google.maps.event.addListener(xe, "click", C)), b && Yt(google.maps.event.addListener(xe, "drag", b)), z && Re(google.maps.event.addListener(xe, "clickable_changed", z)), j && Tt(google.maps.event.addListener(xe, "cursor_changed", j)), T && zn(google.maps.event.addListener(xe, "animation_changed", T)), R && _n(google.maps.event.addListener(xe, "draggable_changed", R)), N && Wn(google.maps.event.addListener(xe, "flat_changed", N)), J && Dr(google.maps.event.addListener(xe, "icon_changed", J)), _ && L(google.maps.event.addListener(xe, "position_changed", _)), te && be(google.maps.event.addListener(xe, "shape_changed", te)), ae && Pe(google.maps.event.addListener(xe, "title_changed", ae)), k && Ke(google.maps.event.addListener(xe, "visible_changed", k)), I && Wt(google.maps.event.addListener(xe, "zindex_changed", I)), U(xe), Z && Z(xe), function() {
      P !== null && google.maps.event.removeListener(P), G !== null && google.maps.event.removeListener(G), he !== null && google.maps.event.removeListener(he), Ce !== null && google.maps.event.removeListener(Ce), Ie !== null && google.maps.event.removeListener(Ie), pe !== null && google.maps.event.removeListener(pe), We !== null && google.maps.event.removeListener(We), dt !== null && google.maps.event.removeListener(dt), mt !== null && google.maps.event.removeListener(mt), Te !== null && google.maps.event.removeListener(Te), ft !== null && google.maps.event.removeListener(ft), An !== null && google.maps.event.removeListener(An), fn !== null && google.maps.event.removeListener(fn), On !== null && google.maps.event.removeListener(On), Sn !== null && google.maps.event.removeListener(Sn), Fn !== null && google.maps.event.removeListener(Fn), $e !== null && google.maps.event.removeListener($e), st !== null && google.maps.event.removeListener(st), vt !== null && google.maps.event.removeListener(vt), H && H(xe), r ? r.removeMarker(xe, !!i) : xe && xe.setMap(null);
    };
  }, []);
  var Ut = qt(function() {
    return a ? zt.map(a, function(ut) {
      if (!Ku(ut))
        return ut;
      var xe = ut;
      return Xu(xe, { anchor: m });
    }) : null;
  }, [a, m]);
  return x.jsx(x.Fragment, { children: Ut }) || null;
}
lt(qf);
var Zf = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.registeredEvents = [], n;
    }
    return e.prototype.componentDidMount = function() {
      var n = ye(ye(ye({}, this.props.options || Zr), this.props.clusterer ? Zr : { map: this.context }), { position: this.props.position });
      this.marker = new google.maps.Marker(n), this.props.clusterer ? this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw) : this.marker.setMap(this.context), this.registeredEvents = Fe({
        updaterMap: lo,
        eventMap: uo,
        prevProps: {},
        nextProps: this.props,
        instance: this.marker
      }), this.props.onLoad && this.props.onLoad(this.marker);
    }, e.prototype.componentDidUpdate = function(n) {
      this.marker && (ke(this.registeredEvents), this.registeredEvents = Fe({
        updaterMap: lo,
        eventMap: uo,
        prevProps: n,
        nextProps: this.props,
        instance: this.marker
      }));
    }, e.prototype.componentWillUnmount = function() {
      this.marker && (this.props.onUnmount && this.props.onUnmount(this.marker), ke(this.registeredEvents), this.props.clusterer ? this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw) : this.marker && this.marker.setMap(null));
    }, e.prototype.render = function() {
      var n = this, r = null;
      return this.props.children && (r = zt.map(this.props.children, function(i) {
        if (!Ku(i))
          return i;
        var a = i;
        return Xu(a, { anchor: n.marker });
      })), r || null;
    }, e.contextType = Ae, e;
  }(Ge)
), Gf = (
  /** @class */
  function() {
    function t(e, n) {
      e.getClusterer().extend(t, google.maps.OverlayView), this.cluster = e, this.clusterClassName = this.cluster.getClusterer().getClusterClass(), this.className = this.clusterClassName, this.styles = n, this.center = void 0, this.div = null, this.sums = null, this.visible = !1, this.boundsChangedListener = null, this.url = "", this.height = 0, this.width = 0, this.anchorText = [0, 0], this.anchorIcon = [0, 0], this.textColor = "black", this.textSize = 11, this.textDecoration = "none", this.fontWeight = "bold", this.fontStyle = "normal", this.fontFamily = "Arial,sans-serif", this.backgroundPosition = "0 0", this.cMouseDownInCluster = null, this.cDraggingMapByCluster = null, this.timeOut = null, this.setMap(e.getMap()), this.onBoundsChanged = this.onBoundsChanged.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onClick = this.onClick.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onAdd = this.onAdd.bind(this), this.onRemove = this.onRemove.bind(this), this.draw = this.draw.bind(this), this.hide = this.hide.bind(this), this.show = this.show.bind(this), this.useStyle = this.useStyle.bind(this), this.setCenter = this.setCenter.bind(this), this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    return t.prototype.onBoundsChanged = function() {
      this.cDraggingMapByCluster = this.cMouseDownInCluster;
    }, t.prototype.onMouseDown = function() {
      this.cMouseDownInCluster = !0, this.cDraggingMapByCluster = !1;
    }, t.prototype.onClick = function(e) {
      if (this.cMouseDownInCluster = !1, !this.cDraggingMapByCluster) {
        var n = this.cluster.getClusterer();
        if (google.maps.event.trigger(n, "click", this.cluster), google.maps.event.trigger(n, "clusterclick", this.cluster), n.getZoomOnClick()) {
          var r = n.getMaxZoom(), i = this.cluster.getBounds(), a = n.getMap();
          a !== null && "fitBounds" in a && a.fitBounds(i), this.timeOut = window.setTimeout(function() {
            var o = n.getMap();
            if (o !== null) {
              "fitBounds" in o && o.fitBounds(i);
              var s = o.getZoom() || 0;
              r !== null && s > r && o.setZoom(r + 1);
            }
          }, 100);
        }
        e.cancelBubble = !0, e.stopPropagation && e.stopPropagation();
      }
    }, t.prototype.onMouseOver = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseover", this.cluster);
    }, t.prototype.onMouseOut = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseout", this.cluster);
    }, t.prototype.onAdd = function() {
      var e;
      this.div = document.createElement("div"), this.div.className = this.className, this.visible && this.show(), (e = this.getPanes()) === null || e === void 0 || e.overlayMouseTarget.appendChild(this.div);
      var n = this.getMap();
      n !== null && (this.boundsChangedListener = google.maps.event.addListener(n, "bounds_changed", this.onBoundsChanged), this.div.addEventListener("mousedown", this.onMouseDown), this.div.addEventListener("click", this.onClick), this.div.addEventListener("mouseover", this.onMouseOver), this.div.addEventListener("mouseout", this.onMouseOut));
    }, t.prototype.onRemove = function() {
      this.div && this.div.parentNode && (this.hide(), this.boundsChangedListener !== null && google.maps.event.removeListener(this.boundsChangedListener), this.div.removeEventListener("mousedown", this.onMouseDown), this.div.removeEventListener("click", this.onClick), this.div.removeEventListener("mouseover", this.onMouseOver), this.div.removeEventListener("mouseout", this.onMouseOut), this.div.parentNode.removeChild(this.div), this.timeOut !== null && (window.clearTimeout(this.timeOut), this.timeOut = null), this.div = null);
    }, t.prototype.draw = function() {
      if (this.visible && this.div !== null && this.center) {
        var e = this.getPosFromLatLng(this.center);
        this.div.style.top = e !== null ? "".concat(e.y, "px") : "0", this.div.style.left = e !== null ? "".concat(e.x, "px") : "0";
      }
    }, t.prototype.hide = function() {
      this.div && (this.div.style.display = "none"), this.visible = !1;
    }, t.prototype.show = function() {
      var e, n, r, i, a, o;
      if (this.div && this.center) {
        var s = this.sums === null || typeof this.sums.title > "u" || this.sums.title === "" ? this.cluster.getClusterer().getTitle() : this.sums.title, u = this.backgroundPosition.split(" "), l = parseInt(((e = u[0]) === null || e === void 0 ? void 0 : e.replace(/^\s+|\s+$/g, "")) || "0", 10), c = parseInt(((n = u[1]) === null || n === void 0 ? void 0 : n.replace(/^\s+|\s+$/g, "")) || "0", 10), p = this.getPosFromLatLng(this.center);
        this.div.className = this.className, this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(p !== null ? "".concat(p.y, "px") : "0", "; left: ").concat(p !== null ? "".concat(p.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
        var d = document.createElement("img");
        d.alt = s, d.src = this.url, d.width = this.width, d.height = this.height, d.setAttribute("style", "position: absolute; top: ".concat(c, "px; left: ").concat(l, "px")), this.cluster.getClusterer().enableRetinaIcons || (d.style.clip = "rect(-".concat(c, "px, -").concat(l + this.width, "px, -").concat(c + this.height, ", -").concat(l, ")"));
        var h = document.createElement("div");
        h.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px")), !((r = this.sums) === null || r === void 0) && r.text && (h.innerText = "".concat((i = this.sums) === null || i === void 0 ? void 0 : i.text)), !((a = this.sums) === null || a === void 0) && a.html && (h.innerHTML = "".concat((o = this.sums) === null || o === void 0 ? void 0 : o.html)), this.div.innerHTML = "", this.div.appendChild(d), this.div.appendChild(h), this.div.title = s, this.div.style.display = "";
      }
      this.visible = !0;
    }, t.prototype.useStyle = function(e) {
      this.sums = e;
      var n = this.cluster.getClusterer().getStyles(), r = n[Math.min(n.length - 1, Math.max(0, e.index - 1))];
      r && (this.url = r.url, this.height = r.height, this.width = r.width, r.className && (this.className = "".concat(this.clusterClassName, " ").concat(r.className)), this.anchorText = r.anchorText || [0, 0], this.anchorIcon = r.anchorIcon || [this.height / 2, this.width / 2], this.textColor = r.textColor || "black", this.textSize = r.textSize || 11, this.textDecoration = r.textDecoration || "none", this.fontWeight = r.fontWeight || "bold", this.fontStyle = r.fontStyle || "normal", this.fontFamily = r.fontFamily || "Arial,sans-serif", this.backgroundPosition = r.backgroundPosition || "0 0");
    }, t.prototype.setCenter = function(e) {
      this.center = e;
    }, t.prototype.getPosFromLatLng = function(e) {
      var n = this.getProjection().fromLatLngToDivPixel(e);
      return n !== null && (n.x -= this.anchorIcon[1], n.y -= this.anchorIcon[0]), n;
    }, t;
  }()
), Yf = (
  /** @class */
  function() {
    function t(e) {
      this.markerClusterer = e, this.map = this.markerClusterer.getMap(), this.gridSize = this.markerClusterer.getGridSize(), this.minClusterSize = this.markerClusterer.getMinimumClusterSize(), this.averageCenter = this.markerClusterer.getAverageCenter(), this.markers = [], this.center = void 0, this.bounds = null, this.clusterIcon = new Gf(this, this.markerClusterer.getStyles()), this.getSize = this.getSize.bind(this), this.getMarkers = this.getMarkers.bind(this), this.getCenter = this.getCenter.bind(this), this.getMap = this.getMap.bind(this), this.getClusterer = this.getClusterer.bind(this), this.getBounds = this.getBounds.bind(this), this.remove = this.remove.bind(this), this.addMarker = this.addMarker.bind(this), this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this), this.calculateBounds = this.calculateBounds.bind(this), this.updateIcon = this.updateIcon.bind(this), this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
    }
    return t.prototype.getSize = function() {
      return this.markers.length;
    }, t.prototype.getMarkers = function() {
      return this.markers;
    }, t.prototype.getCenter = function() {
      return this.center;
    }, t.prototype.getMap = function() {
      return this.map;
    }, t.prototype.getClusterer = function() {
      return this.markerClusterer;
    }, t.prototype.getBounds = function() {
      for (var e = new google.maps.LatLngBounds(this.center, this.center), n = this.getMarkers(), r = 0, i = n; r < i.length; r++) {
        var a = i[r], o = a.getPosition();
        o && e.extend(o);
      }
      return e;
    }, t.prototype.remove = function() {
      this.clusterIcon.setMap(null), this.markers = [], delete this.markers;
    }, t.prototype.addMarker = function(e) {
      var n;
      if (this.isMarkerAlreadyAdded(e))
        return !1;
      if (this.center) {
        if (this.averageCenter) {
          var r = e.getPosition();
          if (r) {
            var i = this.markers.length + 1;
            this.center = new google.maps.LatLng((this.center.lat() * (i - 1) + r.lat()) / i, (this.center.lng() * (i - 1) + r.lng()) / i), this.calculateBounds();
          }
        }
      } else {
        var r = e.getPosition();
        r && (this.center = r, this.calculateBounds());
      }
      e.isAdded = !0, this.markers.push(e);
      var a = this.markers.length, o = this.markerClusterer.getMaxZoom(), s = (n = this.map) === null || n === void 0 ? void 0 : n.getZoom();
      if (o !== null && typeof s < "u" && s > o)
        e.getMap() !== this.map && e.setMap(this.map);
      else if (a < this.minClusterSize)
        e.getMap() !== this.map && e.setMap(this.map);
      else if (a === this.minClusterSize)
        for (var u = 0, l = this.markers; u < l.length; u++) {
          var c = l[u];
          c.setMap(null);
        }
      else
        e.setMap(null);
      return !0;
    }, t.prototype.isMarkerInClusterBounds = function(e) {
      if (this.bounds !== null) {
        var n = e.getPosition();
        if (n)
          return this.bounds.contains(n);
      }
      return !1;
    }, t.prototype.calculateBounds = function() {
      this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    }, t.prototype.updateIcon = function() {
      var e, n = this.markers.length, r = this.markerClusterer.getMaxZoom(), i = (e = this.map) === null || e === void 0 ? void 0 : e.getZoom();
      if (r !== null && typeof i < "u" && i > r) {
        this.clusterIcon.hide();
        return;
      }
      if (n < this.minClusterSize) {
        this.clusterIcon.hide();
        return;
      }
      this.center && this.clusterIcon.setCenter(this.center), this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length)), this.clusterIcon.show();
    }, t.prototype.isMarkerAlreadyAdded = function(e) {
      if (this.markers.includes)
        return this.markers.includes(e);
      for (var n = 0; n < this.markers.length; n++)
        if (e === this.markers[n])
          return !0;
      return !1;
    }, t;
  }()
);
function Kf(t, e) {
  var n = t.length, r = n.toString().length, i = Math.min(r, e);
  return {
    text: n.toString(),
    index: i,
    title: ""
  };
}
var Xf = 2e3, Jf = 500, Qf = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", ed = "png", td = [53, 56, 66, 78, 90], nd = "cluster", pl = (
  /** @class */
  function() {
    function t(e, n, r) {
      n === void 0 && (n = []), r === void 0 && (r = {}), this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this), this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this), this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this), this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this), this.addToClosestCluster = this.addToClosestCluster.bind(this), this.getImageExtension = this.getImageExtension.bind(this), this.setImageExtension = this.setImageExtension.bind(this), this.getExtendedBounds = this.getExtendedBounds.bind(this), this.getAverageCenter = this.getAverageCenter.bind(this), this.setAverageCenter = this.setAverageCenter.bind(this), this.getTotalClusters = this.getTotalClusters.bind(this), this.fitMapToMarkers = this.fitMapToMarkers.bind(this), this.getIgnoreHidden = this.getIgnoreHidden.bind(this), this.setIgnoreHidden = this.setIgnoreHidden.bind(this), this.getClusterClass = this.getClusterClass.bind(this), this.setClusterClass = this.setClusterClass.bind(this), this.getTotalMarkers = this.getTotalMarkers.bind(this), this.getZoomOnClick = this.getZoomOnClick.bind(this), this.setZoomOnClick = this.setZoomOnClick.bind(this), this.getBatchSizeIE = this.getBatchSizeIE.bind(this), this.setBatchSizeIE = this.setBatchSizeIE.bind(this), this.createClusters = this.createClusters.bind(this), this.onZoomChanged = this.onZoomChanged.bind(this), this.getImageSizes = this.getImageSizes.bind(this), this.setImageSizes = this.setImageSizes.bind(this), this.getCalculator = this.getCalculator.bind(this), this.setCalculator = this.setCalculator.bind(this), this.removeMarkers = this.removeMarkers.bind(this), this.resetViewport = this.resetViewport.bind(this), this.getImagePath = this.getImagePath.bind(this), this.setImagePath = this.setImagePath.bind(this), this.pushMarkerTo = this.pushMarkerTo.bind(this), this.removeMarker = this.removeMarker.bind(this), this.clearMarkers = this.clearMarkers.bind(this), this.setupStyles = this.setupStyles.bind(this), this.getGridSize = this.getGridSize.bind(this), this.setGridSize = this.setGridSize.bind(this), this.getClusters = this.getClusters.bind(this), this.getMaxZoom = this.getMaxZoom.bind(this), this.setMaxZoom = this.setMaxZoom.bind(this), this.getMarkers = this.getMarkers.bind(this), this.addMarkers = this.addMarkers.bind(this), this.getStyles = this.getStyles.bind(this), this.setStyles = this.setStyles.bind(this), this.addMarker = this.addMarker.bind(this), this.onRemove = this.onRemove.bind(this), this.getTitle = this.getTitle.bind(this), this.setTitle = this.setTitle.bind(this), this.repaint = this.repaint.bind(this), this.onIdle = this.onIdle.bind(this), this.redraw = this.redraw.bind(this), this.onAdd = this.onAdd.bind(this), this.draw = this.draw.bind(this), this.extend = this.extend.bind(this), this.extend(t, google.maps.OverlayView), this.markers = [], this.clusters = [], this.listeners = [], this.activeMap = null, this.ready = !1, this.gridSize = r.gridSize || 60, this.minClusterSize = r.minimumClusterSize || 2, this.maxZoom = r.maxZoom || null, this.styles = r.styles || [], this.title = r.title || "", this.zoomOnClick = !0, r.zoomOnClick !== void 0 && (this.zoomOnClick = r.zoomOnClick), this.averageCenter = !1, r.averageCenter !== void 0 && (this.averageCenter = r.averageCenter), this.ignoreHidden = !1, r.ignoreHidden !== void 0 && (this.ignoreHidden = r.ignoreHidden), this.enableRetinaIcons = !1, r.enableRetinaIcons !== void 0 && (this.enableRetinaIcons = r.enableRetinaIcons), this.imagePath = r.imagePath || Qf, this.imageExtension = r.imageExtension || ed, this.imageSizes = r.imageSizes || td, this.calculator = r.calculator || Kf, this.batchSize = r.batchSize || Xf, this.batchSizeIE = r.batchSizeIE || Jf, this.clusterClass = r.clusterClass || nd, navigator.userAgent.toLowerCase().indexOf("msie") !== -1 && (this.batchSize = this.batchSizeIE), this.timerRefStatic = null, this.setupStyles(), this.addMarkers(n, !0), this.setMap(e);
    }
    return t.prototype.onZoomChanged = function() {
      var e, n;
      this.resetViewport(!1), (((e = this.getMap()) === null || e === void 0 ? void 0 : e.getZoom()) === (this.get("minZoom") || 0) || ((n = this.getMap()) === null || n === void 0 ? void 0 : n.getZoom()) === this.get("maxZoom")) && google.maps.event.trigger(this, "idle");
    }, t.prototype.onIdle = function() {
      this.redraw();
    }, t.prototype.onAdd = function() {
      var e = this.getMap();
      this.activeMap = e, this.ready = !0, this.repaint(), e !== null && (this.listeners = [
        google.maps.event.addListener(e, "zoom_changed", this.onZoomChanged),
        google.maps.event.addListener(e, "idle", this.onIdle)
      ]);
    }, t.prototype.onRemove = function() {
      for (var e = 0, n = this.markers; e < n.length; e++) {
        var r = n[e];
        r.getMap() !== this.activeMap && r.setMap(this.activeMap);
      }
      for (var i = 0, a = this.clusters; i < a.length; i++) {
        var o = a[i];
        o.remove();
      }
      this.clusters = [];
      for (var s = 0, u = this.listeners; s < u.length; s++) {
        var l = u[s];
        google.maps.event.removeListener(l);
      }
      this.listeners = [], this.activeMap = null, this.ready = !1;
    }, t.prototype.draw = function() {
    }, t.prototype.getMap = function() {
      return null;
    }, t.prototype.getPanes = function() {
      return null;
    }, t.prototype.getProjection = function() {
      return {
        fromContainerPixelToLatLng: function() {
          return null;
        },
        fromDivPixelToLatLng: function() {
          return null;
        },
        fromLatLngToContainerPixel: function() {
          return null;
        },
        fromLatLngToDivPixel: function() {
          return null;
        },
        getVisibleRegion: function() {
          return null;
        },
        getWorldWidth: function() {
          return 0;
        }
      };
    }, t.prototype.setMap = function() {
    }, t.prototype.addListener = function() {
      return {
        remove: function() {
        }
      };
    }, t.prototype.bindTo = function() {
    }, t.prototype.get = function() {
    }, t.prototype.notify = function() {
    }, t.prototype.set = function() {
    }, t.prototype.setValues = function() {
    }, t.prototype.unbind = function() {
    }, t.prototype.unbindAll = function() {
    }, t.prototype.setupStyles = function() {
      if (!(this.styles.length > 0))
        for (var e = 0; e < this.imageSizes.length; e++)
          this.styles.push({
            url: "".concat(this.imagePath + (e + 1), ".").concat(this.imageExtension),
            height: this.imageSizes[e] || 0,
            width: this.imageSizes[e] || 0
          });
    }, t.prototype.fitMapToMarkers = function() {
      for (var e = this.getMarkers(), n = new google.maps.LatLngBounds(), r = 0, i = e; r < i.length; r++) {
        var a = i[r], o = a.getPosition();
        o && n.extend(o);
      }
      var s = this.getMap();
      s !== null && "fitBounds" in s && s.fitBounds(n);
    }, t.prototype.getGridSize = function() {
      return this.gridSize;
    }, t.prototype.setGridSize = function(e) {
      this.gridSize = e;
    }, t.prototype.getMinimumClusterSize = function() {
      return this.minClusterSize;
    }, t.prototype.setMinimumClusterSize = function(e) {
      this.minClusterSize = e;
    }, t.prototype.getMaxZoom = function() {
      return this.maxZoom;
    }, t.prototype.setMaxZoom = function(e) {
      this.maxZoom = e;
    }, t.prototype.getStyles = function() {
      return this.styles;
    }, t.prototype.setStyles = function(e) {
      this.styles = e;
    }, t.prototype.getTitle = function() {
      return this.title;
    }, t.prototype.setTitle = function(e) {
      this.title = e;
    }, t.prototype.getZoomOnClick = function() {
      return this.zoomOnClick;
    }, t.prototype.setZoomOnClick = function(e) {
      this.zoomOnClick = e;
    }, t.prototype.getAverageCenter = function() {
      return this.averageCenter;
    }, t.prototype.setAverageCenter = function(e) {
      this.averageCenter = e;
    }, t.prototype.getIgnoreHidden = function() {
      return this.ignoreHidden;
    }, t.prototype.setIgnoreHidden = function(e) {
      this.ignoreHidden = e;
    }, t.prototype.getEnableRetinaIcons = function() {
      return this.enableRetinaIcons;
    }, t.prototype.setEnableRetinaIcons = function(e) {
      this.enableRetinaIcons = e;
    }, t.prototype.getImageExtension = function() {
      return this.imageExtension;
    }, t.prototype.setImageExtension = function(e) {
      this.imageExtension = e;
    }, t.prototype.getImagePath = function() {
      return this.imagePath;
    }, t.prototype.setImagePath = function(e) {
      this.imagePath = e;
    }, t.prototype.getImageSizes = function() {
      return this.imageSizes;
    }, t.prototype.setImageSizes = function(e) {
      this.imageSizes = e;
    }, t.prototype.getCalculator = function() {
      return this.calculator;
    }, t.prototype.setCalculator = function(e) {
      this.calculator = e;
    }, t.prototype.getBatchSizeIE = function() {
      return this.batchSizeIE;
    }, t.prototype.setBatchSizeIE = function(e) {
      this.batchSizeIE = e;
    }, t.prototype.getClusterClass = function() {
      return this.clusterClass;
    }, t.prototype.setClusterClass = function(e) {
      this.clusterClass = e;
    }, t.prototype.getMarkers = function() {
      return this.markers;
    }, t.prototype.getTotalMarkers = function() {
      return this.markers.length;
    }, t.prototype.getClusters = function() {
      return this.clusters;
    }, t.prototype.getTotalClusters = function() {
      return this.clusters.length;
    }, t.prototype.addMarker = function(e, n) {
      this.pushMarkerTo(e), n || this.redraw();
    }, t.prototype.addMarkers = function(e, n) {
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var i = e[r];
          i && this.pushMarkerTo(i);
        }
      n || this.redraw();
    }, t.prototype.pushMarkerTo = function(e) {
      var n = this;
      e.getDraggable() && google.maps.event.addListener(e, "dragend", function() {
        n.ready && (e.isAdded = !1, n.repaint());
      }), e.isAdded = !1, this.markers.push(e);
    }, t.prototype.removeMarker_ = function(e) {
      var n = -1;
      if (this.markers.indexOf)
        n = this.markers.indexOf(e);
      else
        for (var r = 0; r < this.markers.length; r++)
          if (e === this.markers[r]) {
            n = r;
            break;
          }
      return n === -1 ? !1 : (e.setMap(null), this.markers.splice(n, 1), !0);
    }, t.prototype.removeMarker = function(e, n) {
      var r = this.removeMarker_(e);
      return !n && r && this.repaint(), r;
    }, t.prototype.removeMarkers = function(e, n) {
      for (var r = !1, i = 0, a = e; i < a.length; i++) {
        var o = a[i];
        r = r || this.removeMarker_(o);
      }
      return !n && r && this.repaint(), r;
    }, t.prototype.clearMarkers = function() {
      this.resetViewport(!0), this.markers = [];
    }, t.prototype.repaint = function() {
      var e = this.clusters.slice();
      this.clusters = [], this.resetViewport(!1), this.redraw(), setTimeout(function() {
        for (var r = 0, i = e; r < i.length; r++) {
          var a = i[r];
          a.remove();
        }
      }, 0);
    }, t.prototype.getExtendedBounds = function(e) {
      var n = this.getProjection(), r = n.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(e.getNorthEast().lat(), e.getNorthEast().lng())
      );
      r !== null && (r.x += this.gridSize, r.y -= this.gridSize);
      var i = n.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(e.getSouthWest().lat(), e.getSouthWest().lng())
      );
      if (i !== null && (i.x -= this.gridSize, i.y += this.gridSize), r !== null) {
        var a = n.fromDivPixelToLatLng(r);
        a !== null && e.extend(a);
      }
      if (i !== null) {
        var o = n.fromDivPixelToLatLng(i);
        o !== null && e.extend(o);
      }
      return e;
    }, t.prototype.redraw = function() {
      this.createClusters(0);
    }, t.prototype.resetViewport = function(e) {
      for (var n = 0, r = this.clusters; n < r.length; n++) {
        var i = r[n];
        i.remove();
      }
      this.clusters = [];
      for (var a = 0, o = this.markers; a < o.length; a++) {
        var s = o[a];
        s.isAdded = !1, e && s.setMap(null);
      }
    }, t.prototype.distanceBetweenPoints = function(e, n) {
      var r = 6371, i = (n.lat() - e.lat()) * Math.PI / 180, a = (n.lng() - e.lng()) * Math.PI / 180, o = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(e.lat() * Math.PI / 180) * Math.cos(n.lat() * Math.PI / 180) * Math.sin(a / 2) * Math.sin(a / 2);
      return r * (2 * Math.atan2(Math.sqrt(o), Math.sqrt(1 - o)));
    }, t.prototype.isMarkerInBounds = function(e, n) {
      var r = e.getPosition();
      return r ? n.contains(r) : !1;
    }, t.prototype.addToClosestCluster = function(e) {
      for (var n, r = 4e4, i = null, a = 0, o = this.clusters; a < o.length; a++) {
        var s = o[a];
        n = s;
        var u = n.getCenter(), l = e.getPosition();
        if (u && l) {
          var c = this.distanceBetweenPoints(u, l);
          c < r && (r = c, i = n);
        }
      }
      i && i.isMarkerInClusterBounds(e) ? i.addMarker(e) : (n = new Yf(this), n.addMarker(e), this.clusters.push(n));
    }, t.prototype.createClusters = function(e) {
      var n = this;
      if (this.ready) {
        e === 0 && (google.maps.event.trigger(this, "clusteringbegin", this), this.timerRefStatic !== null && (window.clearTimeout(this.timerRefStatic), delete this.timerRefStatic));
        for (var r = this.getMap(), i = r !== null && ("getBounds" in r) ? r.getBounds() : null, a = (r == null ? void 0 : r.getZoom()) || 0, o = a > 3 ? new google.maps.LatLngBounds(i == null ? void 0 : i.getSouthWest(), i == null ? void 0 : i.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625)), s = this.getExtendedBounds(o), u = Math.min(e + this.batchSize, this.markers.length), l = e; l < u; l++) {
          var c = this.markers[l];
          c && !c.isAdded && this.isMarkerInBounds(c, s) && (!this.ignoreHidden || this.ignoreHidden && c.getVisible()) && this.addToClosestCluster(c);
        }
        if (u < this.markers.length)
          this.timerRefStatic = window.setTimeout(function() {
            n.createClusters(u);
          }, 0);
        else {
          this.timerRefStatic = null, google.maps.event.trigger(this, "clusteringend", this);
          for (var p = 0, d = this.clusters; p < d.length; p++) {
            var h = d[p];
            h.updateIcon();
          }
        }
      }
    }, t.prototype.extend = function(e, n) {
      return (function(i) {
        for (var a in i.prototype) {
          var o = a;
          this.prototype[o] = i.prototype[o];
        }
        return this;
      }).apply(e, [n]);
    }, t;
  }()
), Ft = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
}, ze = {
  averageCenter: function(t, e) {
    t.setAverageCenter(e);
  },
  batchSizeIE: function(t, e) {
    t.setBatchSizeIE(e);
  },
  calculator: function(t, e) {
    t.setCalculator(e);
  },
  clusterClass: function(t, e) {
    t.setClusterClass(e);
  },
  enableRetinaIcons: function(t, e) {
    t.setEnableRetinaIcons(e);
  },
  gridSize: function(t, e) {
    t.setGridSize(e);
  },
  ignoreHidden: function(t, e) {
    t.setIgnoreHidden(e);
  },
  imageExtension: function(t, e) {
    t.setImageExtension(e);
  },
  imagePath: function(t, e) {
    t.setImagePath(e);
  },
  imageSizes: function(t, e) {
    t.setImageSizes(e);
  },
  maxZoom: function(t, e) {
    t.setMaxZoom(e);
  },
  minimumClusterSize: function(t, e) {
    t.setMinimumClusterSize(e);
  },
  styles: function(t, e) {
    t.setStyles(e);
  },
  title: function(t, e) {
    t.setTitle(e);
  },
  zoomOnClick: function(t, e) {
    t.setZoomOnClick(e);
  }
}, rd = {};
function id(t) {
  var e = t.children, n = t.options, r = t.averageCenter, i = t.batchSizeIE, a = t.calculator, o = t.clusterClass, s = t.enableRetinaIcons, u = t.gridSize, l = t.ignoreHidden, c = t.imageExtension, p = t.imagePath, d = t.imageSizes, h = t.maxZoom, y = t.minimumClusterSize, v = t.styles, f = t.title, C = t.zoomOnClick, w = t.onClick, b = t.onClusteringBegin, S = t.onClusteringEnd, D = t.onMouseOver, E = t.onMouseOut, A = t.onLoad, F = t.onUnmount, V = $(null), M = V[0], z = V[1], j = _e(Ae), T = $(null), R = T[0], N = T[1], J = $(null), _ = J[0], te = J[1], ae = $(null), k = ae[0], I = ae[1], Z = $(null), H = Z[0], ee = Z[1], X = $(null), m = X[0], U = X[1];
  return B(function() {
    M && E && (H !== null && google.maps.event.removeListener(H), ee(google.maps.event.addListener(M, Ft.onMouseOut, E)));
  }, [E]), B(function() {
    M && D && (m !== null && google.maps.event.removeListener(m), U(google.maps.event.addListener(M, Ft.onMouseOver, D)));
  }, [D]), B(function() {
    M && w && (R !== null && google.maps.event.removeListener(R), N(google.maps.event.addListener(M, Ft.onClick, w)));
  }, [w]), B(function() {
    M && b && (_ !== null && google.maps.event.removeListener(_), te(google.maps.event.addListener(M, Ft.onClusteringBegin, b)));
  }, [b]), B(function() {
    M && S && (k !== null && google.maps.event.removeListener(k), te(google.maps.event.addListener(M, Ft.onClusteringEnd, S)));
  }, [S]), B(function() {
    typeof r < "u" && M !== null && ze.averageCenter(M, r);
  }, [M, r]), B(function() {
    typeof i < "u" && M !== null && ze.batchSizeIE(M, i);
  }, [M, i]), B(function() {
    typeof a < "u" && M !== null && ze.calculator(M, a);
  }, [M, a]), B(function() {
    typeof o < "u" && M !== null && ze.clusterClass(M, o);
  }, [M, o]), B(function() {
    typeof s < "u" && M !== null && ze.enableRetinaIcons(M, s);
  }, [M, s]), B(function() {
    typeof u < "u" && M !== null && ze.gridSize(M, u);
  }, [M, u]), B(function() {
    typeof l < "u" && M !== null && ze.ignoreHidden(M, l);
  }, [M, l]), B(function() {
    typeof c < "u" && M !== null && ze.imageExtension(M, c);
  }, [M, c]), B(function() {
    typeof p < "u" && M !== null && ze.imagePath(M, p);
  }, [M, p]), B(function() {
    typeof d < "u" && M !== null && ze.imageSizes(M, d);
  }, [M, d]), B(function() {
    typeof h < "u" && M !== null && ze.maxZoom(M, h);
  }, [M, h]), B(function() {
    typeof y < "u" && M !== null && ze.minimumClusterSize(M, y);
  }, [M, y]), B(function() {
    typeof v < "u" && M !== null && ze.styles(M, v);
  }, [M, v]), B(function() {
    typeof f < "u" && M !== null && ze.title(M, f);
  }, [M, f]), B(function() {
    typeof C < "u" && M !== null && ze.zoomOnClick(M, C);
  }, [M, C]), B(function() {
    if (j) {
      var W = ye({}, n || rd), P = new pl(j, [], W);
      return r && ze.averageCenter(P, r), i && ze.batchSizeIE(P, i), a && ze.calculator(P, a), o && ze.clusterClass(P, o), s && ze.enableRetinaIcons(P, s), u && ze.gridSize(P, u), l && ze.ignoreHidden(P, l), c && ze.imageExtension(P, c), p && ze.imagePath(P, p), d && ze.imageSizes(P, d), h && ze.maxZoom(P, h), y && ze.minimumClusterSize(P, y), v && ze.styles(P, v), f && ze.title(P, f), C && ze.zoomOnClick(P, C), E && ee(google.maps.event.addListener(P, Ft.onMouseOut, E)), D && U(google.maps.event.addListener(P, Ft.onMouseOver, D)), w && N(google.maps.event.addListener(P, Ft.onClick, w)), b && te(google.maps.event.addListener(P, Ft.onClusteringBegin, b)), S && I(google.maps.event.addListener(P, Ft.onClusteringEnd, S)), z(P), A && A(P), function() {
        H !== null && google.maps.event.removeListener(H), m !== null && google.maps.event.removeListener(m), R !== null && google.maps.event.removeListener(R), _ !== null && google.maps.event.removeListener(_), k !== null && google.maps.event.removeListener(k), F && F(P);
      };
    }
  }, []), M !== null && e(M) || null;
}
lt(id);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      markerClusterer: null
    }, n.setClustererCallback = function() {
      n.state.markerClusterer !== null && n.props.onLoad && n.props.onLoad(n.state.markerClusterer);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    if (this.context) {
      var n = new pl(this.context, [], this.props.options);
      this.registeredEvents = Fe({
        updaterMap: ze,
        eventMap: Ft,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(function() {
        return {
          markerClusterer: n
        };
      }, this.setClustererCallback);
    }
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.markerClusterer && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: ze,
      eventMap: Ft,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.markerClusterer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.markerClusterer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.markerClusterer), ke(this.registeredEvents), this.state.markerClusterer.setMap(null));
  }, e.prototype.render = function() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  }, e.contextType = Ae, e;
})(Ge);
function co(t) {
  t.cancelBubble = !0, t.stopPropagation && t.stopPropagation();
}
var hl = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.getCloseClickHandler = this.getCloseClickHandler.bind(this), this.closeClickHandler = this.closeClickHandler.bind(this), this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this), this.addClickHandler = this.addClickHandler.bind(this), this.getCloseBoxImg = this.getCloseBoxImg.bind(this), this.getBoxWidths = this.getBoxWidths.bind(this), this.setBoxStyle = this.setBoxStyle.bind(this), this.setPosition = this.setPosition.bind(this), this.getPosition = this.getPosition.bind(this), this.setOptions = this.setOptions.bind(this), this.setContent = this.setContent.bind(this), this.setVisible = this.setVisible.bind(this), this.getContent = this.getContent.bind(this), this.getVisible = this.getVisible.bind(this), this.setZIndex = this.setZIndex.bind(this), this.getZIndex = this.getZIndex.bind(this), this.onRemove = this.onRemove.bind(this), this.panBox = this.panBox.bind(this), this.extend = this.extend.bind(this), this.close = this.close.bind(this), this.draw = this.draw.bind(this), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.open = this.open.bind(this), this.extend(t, google.maps.OverlayView), this.content = e.content || "", this.disableAutoPan = e.disableAutoPan || !1, this.maxWidth = e.maxWidth || 0, this.pixelOffset = e.pixelOffset || new google.maps.Size(0, 0), this.position = e.position || new google.maps.LatLng(0, 0), this.zIndex = e.zIndex || null, this.boxClass = e.boxClass || "infoBox", this.boxStyle = e.boxStyle || {}, this.closeBoxMargin = e.closeBoxMargin || "2px", this.closeBoxURL = e.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", e.closeBoxURL === "" && (this.closeBoxURL = ""), this.infoBoxClearance = e.infoBoxClearance || new google.maps.Size(1, 1), typeof e.visible > "u" && (typeof e.isHidden > "u" ? e.visible = !0 : e.visible = !e.isHidden), this.isHidden = !e.visible, this.alignBottom = e.alignBottom || !1, this.pane = e.pane || "floatPane", this.enableEventPropagation = e.enableEventPropagation || !1, this.div = null, this.closeListener = null, this.moveListener = null, this.mapListener = null, this.contextListener = null, this.eventListeners = null, this.fixedWidthSet = null;
    }
    return t.prototype.createInfoBoxDiv = function() {
      var e = this, n = function(l) {
        l.returnValue = !1, l.preventDefault && l.preventDefault(), e.enableEventPropagation || co(l);
      };
      if (!this.div) {
        this.div = document.createElement("div"), this.setBoxStyle(), typeof this.content == "string" ? this.div.innerHTML = this.getCloseBoxImg() + this.content : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(this.content));
        var r = this.getPanes();
        if (r !== null && r[this.pane].appendChild(this.div), this.addClickHandler(), this.div.style.width)
          this.fixedWidthSet = !0;
        else if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth)
          this.div.style.width = this.maxWidth + "px", this.fixedWidthSet = !0;
        else {
          var i = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - i.left - i.right + "px", this.fixedWidthSet = !1;
        }
        if (this.panBox(this.disableAutoPan), !this.enableEventPropagation) {
          this.eventListeners = [];
          for (var a = [
            "mousedown",
            "mouseover",
            "mouseout",
            "mouseup",
            "click",
            "dblclick",
            "touchstart",
            "touchend",
            "touchmove"
          ], o = 0, s = a; o < s.length; o++) {
            var u = s[o];
            this.eventListeners.push(google.maps.event.addListener(this.div, u, co));
          }
          this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", function() {
            e.div && (e.div.style.cursor = "default");
          }));
        }
        this.contextListener = google.maps.event.addListener(this.div, "contextmenu", n), google.maps.event.trigger(this, "domready");
      }
    }, t.prototype.getCloseBoxImg = function() {
      var e = "";
      return this.closeBoxURL !== "" && (e = '<img alt=""', e += ' aria-hidden="true"', e += " src='" + this.closeBoxURL + "'", e += " align=right", e += " style='", e += " position: relative;", e += " cursor: pointer;", e += " margin: " + this.closeBoxMargin + ";", e += "'>"), e;
    }, t.prototype.addClickHandler = function() {
      this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== "" ? google.maps.event.addListener(this.div.firstChild, "click", this.getCloseClickHandler()) : null;
    }, t.prototype.closeClickHandler = function(e) {
      e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), google.maps.event.trigger(this, "closeclick"), this.close();
    }, t.prototype.getCloseClickHandler = function() {
      return this.closeClickHandler;
    }, t.prototype.panBox = function(e) {
      if (this.div && !e) {
        var n = this.getMap();
        if (n instanceof google.maps.Map) {
          var r = 0, i = 0, a = n.getBounds();
          a && !a.contains(this.position) && n.setCenter(this.position);
          var o = n.getDiv(), s = o.offsetWidth, u = o.offsetHeight, l = this.pixelOffset.width, c = this.pixelOffset.height, p = this.div.offsetWidth, d = this.div.offsetHeight, h = this.infoBoxClearance.width, y = this.infoBoxClearance.height, v = this.getProjection(), f = v.fromLatLngToContainerPixel(this.position);
          f !== null && (f.x < -l + h ? r = f.x + l - h : f.x + p + l + h > s && (r = f.x + p + l + h - s), this.alignBottom ? f.y < -c + y + d ? i = f.y + c - y - d : f.y + c + y > u && (i = f.y + c + y - u) : f.y < -c + y ? i = f.y + c - y : f.y + d + c + y > u && (i = f.y + d + c + y - u)), r === 0 && i === 0 || n.panBy(r, i);
        }
      }
    }, t.prototype.setBoxStyle = function() {
      if (this.div) {
        this.div.className = this.boxClass, this.div.style.cssText = "";
        var e = this.boxStyle;
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (this.div.style[n] = e[n]);
        if (this.div.style.webkitTransform = "translateZ(0)", typeof this.div.style.opacity < "u" && this.div.style.opacity !== "") {
          var r = parseFloat(this.div.style.opacity || "");
          this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + r * 100 + ')"', this.div.style.filter = "alpha(opacity=" + r * 100 + ")";
        }
        this.div.style.position = "absolute", this.div.style.visibility = "hidden", this.zIndex !== null && (this.div.style.zIndex = this.zIndex + ""), this.div.style.overflow || (this.div.style.overflow = "auto");
      }
    }, t.prototype.getBoxWidths = function() {
      var e = { top: 0, bottom: 0, left: 0, right: 0 };
      if (!this.div)
        return e;
      if (document.defaultView) {
        var n = this.div.ownerDocument, r = n && n.defaultView ? n.defaultView.getComputedStyle(this.div, "") : null;
        r && (e.top = parseInt(r.borderTopWidth || "", 10) || 0, e.bottom = parseInt(r.borderBottomWidth || "", 10) || 0, e.left = parseInt(r.borderLeftWidth || "", 10) || 0, e.right = parseInt(r.borderRightWidth || "", 10) || 0);
      } else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle
      ) {
        var i = this.div.currentStyle;
        i && (e.top = parseInt(i.borderTopWidth || "", 10) || 0, e.bottom = parseInt(i.borderBottomWidth || "", 10) || 0, e.left = parseInt(i.borderLeftWidth || "", 10) || 0, e.right = parseInt(i.borderRightWidth || "", 10) || 0);
      }
      return e;
    }, t.prototype.onRemove = function() {
      this.div && this.div.parentNode && (this.div.parentNode.removeChild(this.div), this.div = null);
    }, t.prototype.draw = function() {
      if (this.createInfoBoxDiv(), this.div) {
        var e = this.getProjection(), n = e.fromLatLngToDivPixel(this.position);
        n !== null && (this.div.style.left = n.x + this.pixelOffset.width + "px", this.alignBottom ? this.div.style.bottom = -(n.y + this.pixelOffset.height) + "px" : this.div.style.top = n.y + this.pixelOffset.height + "px"), this.isHidden ? this.div.style.visibility = "hidden" : this.div.style.visibility = "visible";
      }
    }, t.prototype.setOptions = function(e) {
      e === void 0 && (e = {}), typeof e.boxClass < "u" && (this.boxClass = e.boxClass, this.setBoxStyle()), typeof e.boxStyle < "u" && (this.boxStyle = e.boxStyle, this.setBoxStyle()), typeof e.content < "u" && this.setContent(e.content), typeof e.disableAutoPan < "u" && (this.disableAutoPan = e.disableAutoPan), typeof e.maxWidth < "u" && (this.maxWidth = e.maxWidth), typeof e.pixelOffset < "u" && (this.pixelOffset = e.pixelOffset), typeof e.alignBottom < "u" && (this.alignBottom = e.alignBottom), typeof e.position < "u" && this.setPosition(e.position), typeof e.zIndex < "u" && this.setZIndex(e.zIndex), typeof e.closeBoxMargin < "u" && (this.closeBoxMargin = e.closeBoxMargin), typeof e.closeBoxURL < "u" && (this.closeBoxURL = e.closeBoxURL), typeof e.infoBoxClearance < "u" && (this.infoBoxClearance = e.infoBoxClearance), typeof e.isHidden < "u" && (this.isHidden = e.isHidden), typeof e.visible < "u" && (this.isHidden = !e.visible), typeof e.enableEventPropagation < "u" && (this.enableEventPropagation = e.enableEventPropagation), this.div && this.draw();
    }, t.prototype.setContent = function(e) {
      this.content = e, this.div && (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.fixedWidthSet || (this.div.style.width = ""), typeof e == "string" ? this.div.innerHTML = this.getCloseBoxImg() + e : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(e)), this.fixedWidthSet || (this.div.style.width = this.div.offsetWidth + "px", typeof e == "string" ? this.div.innerHTML = this.getCloseBoxImg() + e : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(e))), this.addClickHandler()), google.maps.event.trigger(this, "content_changed");
    }, t.prototype.setPosition = function(e) {
      this.position = e, this.div && this.draw(), google.maps.event.trigger(this, "position_changed");
    }, t.prototype.setVisible = function(e) {
      this.isHidden = !e, this.div && (this.div.style.visibility = this.isHidden ? "hidden" : "visible");
    }, t.prototype.setZIndex = function(e) {
      this.zIndex = e, this.div && (this.div.style.zIndex = e + ""), google.maps.event.trigger(this, "zindex_changed");
    }, t.prototype.getContent = function() {
      return this.content;
    }, t.prototype.getPosition = function() {
      return this.position;
    }, t.prototype.getZIndex = function() {
      return this.zIndex;
    }, t.prototype.getVisible = function() {
      var e = this.getMap();
      return typeof e > "u" || e === null ? !1 : !this.isHidden;
    }, t.prototype.show = function() {
      this.isHidden = !1, this.div && (this.div.style.visibility = "visible");
    }, t.prototype.hide = function() {
      this.isHidden = !0, this.div && (this.div.style.visibility = "hidden");
    }, t.prototype.open = function(e, n) {
      var r = this;
      n && (this.position = n.getPosition(), this.moveListener = google.maps.event.addListener(n, "position_changed", function() {
        var i = n.getPosition();
        r.setPosition(i);
      }), this.mapListener = google.maps.event.addListener(n, "map_changed", function() {
        r.setMap(n.map);
      })), this.setMap(e), this.div && this.panBox();
    }, t.prototype.close = function() {
      if (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.eventListeners) {
        for (var e = 0, n = this.eventListeners; e < n.length; e++) {
          var r = n[e];
          google.maps.event.removeListener(r);
        }
        this.eventListeners = null;
      }
      this.moveListener && (google.maps.event.removeListener(this.moveListener), this.moveListener = null), this.mapListener && (google.maps.event.removeListener(this.mapListener), this.mapListener = null), this.contextListener && (google.maps.event.removeListener(this.contextListener), this.contextListener = null), this.setMap(null);
    }, t.prototype.extend = function(e, n) {
      return (function(i) {
        for (var a in i.prototype)
          Object.prototype.hasOwnProperty.call(this, a) || (this.prototype[a] = i.prototype[a]);
        return this;
      }).apply(e, [n]);
    }, t;
  }()
), fo = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, po = {
  options: function(t, e) {
    t.setOptions(e);
  },
  position: function(t, e) {
    e instanceof google.maps.LatLng ? t.setPosition(e) : t.setPosition(new google.maps.LatLng(e.lat, e.lng));
  },
  visible: function(t, e) {
    t.setVisible(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
}, ad = {};
function od(t) {
  var e = t.children, n = t.anchor, r = t.options, i = t.position, a = t.zIndex, o = t.onCloseClick, s = t.onDomReady, u = t.onContentChanged, l = t.onPositionChanged, c = t.onZindexChanged, p = t.onLoad, d = t.onUnmount, h = _e(Ae), y = $(null), v = y[0], f = y[1], C = $(null), w = C[0], b = C[1], S = $(null), D = S[0], E = S[1], A = $(null), F = A[0], V = A[1], M = $(null), z = M[0], j = M[1], T = $(null), R = T[0], N = T[1], J = qe(null);
  return B(function() {
    h && v !== null && (v.close(), n ? v.open(h, n) : v.getPosition() && v.open(h));
  }, [h, v, n]), B(function() {
    r && v !== null && v.setOptions(r);
  }, [v, r]), B(function() {
    if (i && v !== null) {
      var _ = i instanceof google.maps.LatLng ? i : new google.maps.LatLng(i.lat, i.lng);
      v.setPosition(_);
    }
  }, [i]), B(function() {
    typeof a == "number" && v !== null && v.setZIndex(a);
  }, [a]), B(function() {
    v && o && (w !== null && google.maps.event.removeListener(w), b(google.maps.event.addListener(v, "closeclick", o)));
  }, [o]), B(function() {
    v && s && (D !== null && google.maps.event.removeListener(D), E(google.maps.event.addListener(v, "domready", s)));
  }, [s]), B(function() {
    v && u && (F !== null && google.maps.event.removeListener(F), V(google.maps.event.addListener(v, "content_changed", u)));
  }, [u]), B(function() {
    v && l && (z !== null && google.maps.event.removeListener(z), j(google.maps.event.addListener(v, "position_changed", l)));
  }, [l]), B(function() {
    v && c && (R !== null && google.maps.event.removeListener(R), N(google.maps.event.addListener(v, "zindex_changed", c)));
  }, [c]), B(function() {
    if (h) {
      var _ = r || ad, te = _.position, ae = ya(_, ["position"]), k = void 0;
      te && !(te instanceof google.maps.LatLng) && (k = new google.maps.LatLng(te.lat, te.lng));
      var I = new hl(ye(ye({}, ae), k ? { position: k } : {}));
      J.current = document.createElement("div"), f(I), o && b(google.maps.event.addListener(I, "closeclick", o)), s && E(google.maps.event.addListener(I, "domready", s)), u && V(google.maps.event.addListener(I, "content_changed", u)), l && j(google.maps.event.addListener(I, "position_changed", l)), c && N(google.maps.event.addListener(I, "zindex_changed", c)), I.setContent(J.current), n ? I.open(h, n) : I.getPosition() ? I.open(h) : at(!1, "You must provide either an anchor or a position prop for <InfoBox>."), p && p(I);
    }
    return function() {
      v !== null && (w && google.maps.event.removeListener(w), F && google.maps.event.removeListener(F), D && google.maps.event.removeListener(D), z && google.maps.event.removeListener(z), R && google.maps.event.removeListener(R), d && d(v), v.close());
    };
  }, []), J.current ? ni(zt.only(e), J.current) : null;
}
lt(od);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.containerElement = null, n.state = {
      infoBox: null
    }, n.open = function(r, i) {
      i ? n.context !== null && r.open(n.context, i) : r.getPosition() ? n.context !== null && r.open(n.context) : at(!1, "You must provide either an anchor or a position prop for <InfoBox>.");
    }, n.setInfoBoxCallback = function() {
      n.state.infoBox !== null && n.containerElement !== null && (n.state.infoBox.setContent(n.containerElement), n.open(n.state.infoBox, n.props.anchor), n.props.onLoad && n.props.onLoad(n.state.infoBox));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = this.props.options || {}, r = n.position, i = ya(n, ["position"]), a;
    r && !(r instanceof google.maps.LatLng) && (a = new google.maps.LatLng(r.lat, r.lng));
    var o = new hl(ye(ye({}, i), a ? { position: a } : {}));
    this.containerElement = document.createElement("div"), this.registeredEvents = Fe({
      updaterMap: po,
      eventMap: fo,
      prevProps: {},
      nextProps: this.props,
      instance: o
    }), this.setState({ infoBox: o }, this.setInfoBoxCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    var r = this.state.infoBox;
    r !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: po,
      eventMap: fo,
      prevProps: n,
      nextProps: this.props,
      instance: r
    }));
  }, e.prototype.componentWillUnmount = function() {
    var n = this.props.onUnmount, r = this.state.infoBox;
    r !== null && (n && n(r), ke(this.registeredEvents), r.close());
  }, e.prototype.render = function() {
    return this.containerElement ? ni(zt.only(this.props.children), this.containerElement) : null;
  }, e.contextType = Ae, e;
})(Ge);
var sd = function t(e, n) {
  if (e === n) return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor) return !1;
    var r, i, a;
    if (Array.isArray(e)) {
      if (r = e.length, r != n.length) return !1;
      for (i = r; i-- !== 0; )
        if (!t(e[i], n[i])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === n.toString();
    if (a = Object.keys(e), r = a.length, r !== Object.keys(n).length) return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
    for (i = r; i-- !== 0; ) {
      var o = a[i];
      if (!t(e[o], n[o])) return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}, ho = /* @__PURE__ */ ul(sd);
const vo = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], gi = 1, Zn = 8;
class Ca {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(e) {
    if (!(e instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [n, r] = new Uint8Array(e, 0, 2);
    if (n !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const i = r >> 4;
    if (i !== gi)
      throw new Error(`Got v${i} data when expected v${gi}.`);
    const a = vo[r & 15];
    if (!a)
      throw new Error("Unrecognized array type.");
    const [o] = new Uint16Array(e, 2, 1), [s] = new Uint32Array(e, 4, 1);
    return new Ca(s, o, a, e);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(e, n = 64, r = Float64Array, i) {
    if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
    this.numItems = +e, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.ArrayType = r, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
    const a = vo.indexOf(this.ArrayType), o = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, s = e * this.IndexArrayType.BYTES_PER_ELEMENT, u = (8 - s % 8) % 8;
    if (a < 0)
      throw new Error(`Unexpected typed array class: ${r}.`);
    i && i instanceof ArrayBuffer ? (this.data = i, this.ids = new this.IndexArrayType(this.data, Zn, e), this.coords = new this.ArrayType(this.data, Zn + s + u, e * 2), this._pos = e * 2, this._finished = !0) : (this.data = new ArrayBuffer(Zn + o + s + u), this.ids = new this.IndexArrayType(this.data, Zn, e), this.coords = new this.ArrayType(this.data, Zn + s + u, e * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (gi << 4) + a]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = e);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(e, n) {
    const r = this._pos >> 1;
    return this.ids[r] = r, this.coords[this._pos++] = e, this.coords[this._pos++] = n, r;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const e = this._pos >> 1;
    if (e !== this.numItems)
      throw new Error(`Added ${e} items when expected ${this.numItems}.`);
    return Zi(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(e, n, r, i) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const { ids: a, coords: o, nodeSize: s } = this, u = [0, a.length - 1, 0], l = [];
    for (; u.length; ) {
      const c = u.pop() || 0, p = u.pop() || 0, d = u.pop() || 0;
      if (p - d <= s) {
        for (let f = d; f <= p; f++) {
          const C = o[2 * f], w = o[2 * f + 1];
          C >= e && C <= r && w >= n && w <= i && l.push(a[f]);
        }
        continue;
      }
      const h = d + p >> 1, y = o[2 * h], v = o[2 * h + 1];
      y >= e && y <= r && v >= n && v <= i && l.push(a[h]), (c === 0 ? e <= y : n <= v) && (u.push(d), u.push(h - 1), u.push(1 - c)), (c === 0 ? r >= y : i >= v) && (u.push(h + 1), u.push(p), u.push(1 - c));
    }
    return l;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(e, n, r) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: a, nodeSize: o } = this, s = [0, i.length - 1, 0], u = [], l = r * r;
    for (; s.length; ) {
      const c = s.pop() || 0, p = s.pop() || 0, d = s.pop() || 0;
      if (p - d <= o) {
        for (let f = d; f <= p; f++)
          go(a[2 * f], a[2 * f + 1], e, n) <= l && u.push(i[f]);
        continue;
      }
      const h = d + p >> 1, y = a[2 * h], v = a[2 * h + 1];
      go(y, v, e, n) <= l && u.push(i[h]), (c === 0 ? e - r <= y : n - r <= v) && (s.push(d), s.push(h - 1), s.push(1 - c)), (c === 0 ? e + r >= y : n + r >= v) && (s.push(h + 1), s.push(p), s.push(1 - c));
    }
    return u;
  }
}
function Zi(t, e, n, r, i, a) {
  if (i - r <= n) return;
  const o = r + i >> 1;
  vl(t, e, o, r, i, a), Zi(t, e, n, r, o - 1, 1 - a), Zi(t, e, n, o + 1, i, 1 - a);
}
function vl(t, e, n, r, i, a) {
  for (; i > r; ) {
    if (i - r > 600) {
      const l = i - r + 1, c = n - r + 1, p = Math.log(l), d = 0.5 * Math.exp(2 * p / 3), h = 0.5 * Math.sqrt(p * d * (l - d) / l) * (c - l / 2 < 0 ? -1 : 1), y = Math.max(r, Math.floor(n - c * d / l + h)), v = Math.min(i, Math.floor(n + (l - c) * d / l + h));
      vl(t, e, n, y, v, a);
    }
    const o = e[2 * n + a];
    let s = r, u = i;
    for (Gn(t, e, r, n), e[2 * i + a] > o && Gn(t, e, r, i); s < u; ) {
      for (Gn(t, e, s, u), s++, u--; e[2 * s + a] < o; ) s++;
      for (; e[2 * u + a] > o; ) u--;
    }
    e[2 * r + a] === o ? Gn(t, e, r, u) : (u++, Gn(t, e, u, i)), u <= n && (r = u + 1), n <= u && (i = u - 1);
  }
}
function Gn(t, e, n, r) {
  mi(t, n, r), mi(e, 2 * n, 2 * r), mi(e, 2 * n + 1, 2 * r + 1);
}
function mi(t, e, n) {
  const r = t[e];
  t[e] = t[n], t[n] = r;
}
function go(t, e, n, r) {
  const i = t - n, a = e - r;
  return i * i + a * a;
}
const ud = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (t) => t
  // props => ({sum: props.my_value})
}, mo = Math.fround || /* @__PURE__ */ ((t) => (e) => (t[0] = +e, t[0]))(new Float32Array(1)), dn = 2, en = 3, yi = 4, Qt = 5, gl = 6;
class ld {
  constructor(e) {
    this.options = Object.assign(Object.create(ud), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(e) {
    const { log: n, minZoom: r, maxZoom: i } = this.options;
    n && console.time("total time");
    const a = `prepare ${e.length} points`;
    n && console.time(a), this.points = e;
    const o = [];
    for (let u = 0; u < e.length; u++) {
      const l = e[u];
      if (!l.geometry) continue;
      const [c, p] = l.geometry.coordinates, d = mo(Er(c)), h = mo(wr(p));
      o.push(
        d,
        h,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        u,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && o.push(0);
    }
    let s = this.trees[i + 1] = this._createTree(o);
    n && console.timeEnd(a);
    for (let u = i; u >= r; u--) {
      const l = +Date.now();
      s = this.trees[u] = this._createTree(this._cluster(s, u)), n && console.log("z%d: %d clusters in %dms", u, s.numItems, +Date.now() - l);
    }
    return n && console.timeEnd("total time"), this;
  }
  getClusters(e, n) {
    let r = ((e[0] + 180) % 360 + 360) % 360 - 180;
    const i = Math.max(-90, Math.min(90, e[1]));
    let a = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
    const o = Math.max(-90, Math.min(90, e[3]));
    if (e[2] - e[0] >= 360)
      r = -180, a = 180;
    else if (r > a) {
      const p = this.getClusters([r, i, 180, o], n), d = this.getClusters([-180, i, a, o], n);
      return p.concat(d);
    }
    const s = this.trees[this._limitZoom(n)], u = s.range(Er(r), wr(o), Er(a), wr(i)), l = s.data, c = [];
    for (const p of u) {
      const d = this.stride * p;
      c.push(l[d + Qt] > 1 ? yo(l, d, this.clusterProps) : this.points[l[d + en]]);
    }
    return c;
  }
  getChildren(e) {
    const n = this._getOriginId(e), r = this._getOriginZoom(e), i = "No cluster with the specified id.", a = this.trees[r];
    if (!a) throw new Error(i);
    const o = a.data;
    if (n * this.stride >= o.length) throw new Error(i);
    const s = this.options.radius / (this.options.extent * Math.pow(2, r - 1)), u = o[n * this.stride], l = o[n * this.stride + 1], c = a.within(u, l, s), p = [];
    for (const d of c) {
      const h = d * this.stride;
      o[h + yi] === e && p.push(o[h + Qt] > 1 ? yo(o, h, this.clusterProps) : this.points[o[h + en]]);
    }
    if (p.length === 0) throw new Error(i);
    return p;
  }
  getLeaves(e, n, r) {
    n = n || 10, r = r || 0;
    const i = [];
    return this._appendLeaves(i, e, n, r, 0), i;
  }
  getTile(e, n, r) {
    const i = this.trees[this._limitZoom(e)], a = Math.pow(2, e), { extent: o, radius: s } = this.options, u = s / o, l = (r - u) / a, c = (r + 1 + u) / a, p = {
      features: []
    };
    return this._addTileFeatures(
      i.range((n - u) / a, l, (n + 1 + u) / a, c),
      i.data,
      n,
      r,
      a,
      p
    ), n === 0 && this._addTileFeatures(
      i.range(1 - u / a, l, 1, c),
      i.data,
      a,
      r,
      a,
      p
    ), n === a - 1 && this._addTileFeatures(
      i.range(0, l, u / a, c),
      i.data,
      -1,
      r,
      a,
      p
    ), p.features.length ? p : null;
  }
  getClusterExpansionZoom(e) {
    let n = this._getOriginZoom(e) - 1;
    for (; n <= this.options.maxZoom; ) {
      const r = this.getChildren(e);
      if (n++, r.length !== 1) break;
      e = r[0].properties.cluster_id;
    }
    return n;
  }
  _appendLeaves(e, n, r, i, a) {
    const o = this.getChildren(n);
    for (const s of o) {
      const u = s.properties;
      if (u && u.cluster ? a + u.point_count <= i ? a += u.point_count : a = this._appendLeaves(e, u.cluster_id, r, i, a) : a < i ? a++ : e.push(s), e.length === r) break;
    }
    return a;
  }
  _createTree(e) {
    const n = new Ca(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let r = 0; r < e.length; r += this.stride) n.add(e[r], e[r + 1]);
    return n.finish(), n.data = e, n;
  }
  _addTileFeatures(e, n, r, i, a, o) {
    for (const s of e) {
      const u = s * this.stride, l = n[u + Qt] > 1;
      let c, p, d;
      if (l)
        c = ml(n, u, this.clusterProps), p = n[u], d = n[u + 1];
      else {
        const v = this.points[n[u + en]];
        c = v.properties;
        const [f, C] = v.geometry.coordinates;
        p = Er(f), d = wr(C);
      }
      const h = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (p * a - r)),
          Math.round(this.options.extent * (d * a - i))
        ]],
        tags: c
      };
      let y;
      l || this.options.generateId ? y = n[u + en] : y = this.points[n[u + en]].id, y !== void 0 && (h.id = y), o.features.push(h);
    }
  }
  _limitZoom(e) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
  }
  _cluster(e, n) {
    const { radius: r, extent: i, reduce: a, minPoints: o } = this.options, s = r / (i * Math.pow(2, n)), u = e.data, l = [], c = this.stride;
    for (let p = 0; p < u.length; p += c) {
      if (u[p + dn] <= n) continue;
      u[p + dn] = n;
      const d = u[p], h = u[p + 1], y = e.within(u[p], u[p + 1], s), v = u[p + Qt];
      let f = v;
      for (const C of y) {
        const w = C * c;
        u[w + dn] > n && (f += u[w + Qt]);
      }
      if (f > v && f >= o) {
        let C = d * v, w = h * v, b, S = -1;
        const D = ((p / c | 0) << 5) + (n + 1) + this.points.length;
        for (const E of y) {
          const A = E * c;
          if (u[A + dn] <= n) continue;
          u[A + dn] = n;
          const F = u[A + Qt];
          C += u[A] * F, w += u[A + 1] * F, u[A + yi] = D, a && (b || (b = this._map(u, p, !0), S = this.clusterProps.length, this.clusterProps.push(b)), a(b, this._map(u, A)));
        }
        u[p + yi] = D, l.push(C / f, w / f, 1 / 0, D, -1, f), a && l.push(S);
      } else {
        for (let C = 0; C < c; C++) l.push(u[p + C]);
        if (f > 1)
          for (const C of y) {
            const w = C * c;
            if (!(u[w + dn] <= n)) {
              u[w + dn] = n;
              for (let b = 0; b < c; b++) l.push(u[w + b]);
            }
          }
      }
    }
    return l;
  }
  // get index of the point from which the cluster originated
  _getOriginId(e) {
    return e - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(e) {
    return (e - this.points.length) % 32;
  }
  _map(e, n, r) {
    if (e[n + Qt] > 1) {
      const o = this.clusterProps[e[n + gl]];
      return r ? Object.assign({}, o) : o;
    }
    const i = this.points[e[n + en]].properties, a = this.options.map(i);
    return r && a === i ? Object.assign({}, a) : a;
  }
}
function yo(t, e, n) {
  return {
    type: "Feature",
    id: t[e + en],
    properties: ml(t, e, n),
    geometry: {
      type: "Point",
      coordinates: [cd(t[e]), fd(t[e + 1])]
    }
  };
}
function ml(t, e, n) {
  const r = t[e + Qt], i = r >= 1e4 ? `${Math.round(r / 1e3)}k` : r >= 1e3 ? `${Math.round(r / 100) / 10}k` : r, a = t[e + gl], o = a === -1 ? {} : Object.assign({}, n[a]);
  return Object.assign(o, {
    cluster: !0,
    cluster_id: t[e + en],
    point_count: r,
    point_count_abbreviated: i
  });
}
function Er(t) {
  return t / 360 + 0.5;
}
function wr(t) {
  const e = Math.sin(t * Math.PI / 180), n = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function cd(t) {
  return (t - 0.5) * 360;
}
function fd(t) {
  const e = (180 - t * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function dd(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
class Lt {
  static isAdvancedMarkerAvailable(e) {
    return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(e) {
    return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(e, n) {
    this.isAdvancedMarker(e) ? e.map = n : e.setMap(n);
  }
  static getPosition(e) {
    if (this.isAdvancedMarker(e)) {
      if (e.position) {
        if (e.position instanceof google.maps.LatLng)
          return e.position;
        if (e.position.lat && e.position.lng)
          return new google.maps.LatLng(e.position.lat, e.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return e.getPosition();
  }
  static getVisible(e) {
    return this.isAdvancedMarker(e) ? !0 : e.getVisible();
  }
}
class Gi {
  constructor({ markers: e, position: n }) {
    this.markers = e, n && (n instanceof google.maps.LatLng ? this._position = n : this._position = new google.maps.LatLng(n));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const e = new google.maps.LatLngBounds(this._position, this._position);
    for (const n of this.markers)
      e.extend(Lt.getPosition(n));
    return e;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((e) => Lt.getVisible(e)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(e) {
    this.markers.push(e);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    this.marker && (Lt.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class pd {
  constructor({ maxZoom: e = 16 }) {
    this.maxZoom = e;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({ markers: e }) {
    return hd(e);
  }
}
const hd = (t) => t.map((n) => new Gi({
  position: Lt.getPosition(n),
  markers: [n]
}));
class vd extends pd {
  constructor(e) {
    var { maxZoom: n, radius: r = 60 } = e, i = dd(e, ["maxZoom", "radius"]);
    super({ maxZoom: n }), this.state = { zoom: -1 }, this.superCluster = new ld(Object.assign({ maxZoom: this.maxZoom, radius: r }, i));
  }
  calculate(e) {
    let n = !1;
    const r = { zoom: e.map.getZoom() };
    if (!ho(e.markers, this.markers)) {
      n = !0, this.markers = [...e.markers];
      const i = this.markers.map((a) => {
        const o = Lt.getPosition(a);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [o.lng(), o.lat()]
          },
          properties: { marker: a }
        };
      });
      this.superCluster.load(i);
    }
    return n || (this.state.zoom <= this.maxZoom || r.zoom <= this.maxZoom) && (n = !ho(this.state, r)), this.state = r, n && (this.clusters = this.cluster(e)), { clusters: this.clusters, changed: n };
  }
  cluster({ map: e }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster({ geometry: { coordinates: [e, n] }, properties: r }) {
    if (r.cluster)
      return new Gi({
        markers: this.superCluster.getLeaves(r.cluster_id, 1 / 0).map((a) => a.properties.marker),
        position: { lat: n, lng: e }
      });
    const i = r.marker;
    return new Gi({
      markers: [i],
      position: Lt.getPosition(i)
    });
  }
}
class gd {
  constructor(e, n) {
    this.markers = { sum: e.length };
    const r = n.map((a) => a.count), i = r.reduce((a, o) => a + o, 0);
    this.clusters = {
      count: n.length,
      markers: {
        mean: i / n.length,
        sum: i,
        min: Math.min(...r),
        max: Math.max(...r)
      }
    };
  }
}
class md {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count: e, position: n }, r, i) {
    const o = `<svg fill="${e > Math.max(10, r.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, s = `Cluster of ${e} markers`, u = Number(google.maps.Marker.MAX_ZINDEX) + e;
    if (Lt.isAdvancedMarkerAvailable(i)) {
      const p = new DOMParser().parseFromString(o, "image/svg+xml").documentElement;
      p.setAttribute("transform", "translate(0 25)");
      const d = {
        map: i,
        position: n,
        zIndex: u,
        title: s,
        content: p
      };
      return new google.maps.marker.AdvancedMarkerElement(d);
    }
    const l = {
      position: n,
      zIndex: u,
      title: s,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(o)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(l);
  }
}
function yd(t, e) {
  for (let n in e.prototype)
    t.prototype[n] = e.prototype[n];
}
class Da {
  constructor() {
    yd(Da, google.maps.OverlayView);
  }
}
var Jn;
(function(t) {
  t.CLUSTERING_BEGIN = "clusteringbegin", t.CLUSTERING_END = "clusteringend", t.CLUSTER_CLICK = "click";
})(Jn || (Jn = {}));
const Cd = (t, e, n) => {
  n.fitBounds(e.bounds);
};
class Dd extends Da {
  constructor({ map: e, markers: n = [], algorithmOptions: r = {}, algorithm: i = new vd(r), renderer: a = new md(), onClusterClick: o = Cd }) {
    super(), this.markers = [...n], this.clusters = [], this.algorithm = i, this.renderer = a, this.onClusterClick = o, e && this.setMap(e);
  }
  addMarker(e, n) {
    this.markers.includes(e) || (this.markers.push(e), n || this.render());
  }
  addMarkers(e, n) {
    e.forEach((r) => {
      this.addMarker(r, !0);
    }), n || this.render();
  }
  removeMarker(e, n) {
    const r = this.markers.indexOf(e);
    return r === -1 ? !1 : (Lt.setMap(e, null), this.markers.splice(r, 1), n || this.render(), !0);
  }
  removeMarkers(e, n) {
    let r = !1;
    return e.forEach((i) => {
      r = this.removeMarker(i, !0) || r;
    }), r && !n && this.render(), r;
  }
  clearMarkers(e) {
    this.markers.length = 0, e || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const e = this.getMap();
    if (e instanceof google.maps.Map && e.getProjection()) {
      google.maps.event.trigger(this, Jn.CLUSTERING_BEGIN, this);
      const { clusters: n, changed: r } = this.algorithm.calculate({
        markers: this.markers,
        map: e,
        mapCanvasProjection: this.getProjection()
      });
      if (r || r == null) {
        const i = /* @__PURE__ */ new Set();
        for (const o of n)
          o.markers.length == 1 && i.add(o.markers[0]);
        const a = [];
        for (const o of this.clusters)
          o.marker != null && (o.markers.length == 1 ? i.has(o.marker) || Lt.setMap(o.marker, null) : a.push(o.marker));
        this.clusters = n, this.renderClusters(), requestAnimationFrame(() => a.forEach((o) => Lt.setMap(o, null)));
      }
      google.maps.event.trigger(this, Jn.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((e) => Lt.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
  }
  renderClusters() {
    const e = new gd(this.markers, this.clusters), n = this.getMap();
    this.clusters.forEach((r) => {
      r.markers.length === 1 ? r.marker = r.markers[0] : (r.marker = this.renderer.render(r, e, n), r.markers.forEach((i) => Lt.setMap(i, null)), this.onClusterClick && r.marker.addListener(
        "click",
        /* istanbul ignore next */
        (i) => {
          google.maps.event.trigger(this, Jn.CLUSTER_CLICK, r), this.onClusterClick(i, r, n);
        }
      )), Lt.setMap(r.marker, n);
    });
  }
}
function bd(t) {
  var e = Ff(), n = $(null), r = n[0], i = n[1];
  return B(function() {
    if (e && r === null) {
      var a = new Dd(ye(ye({}, t), { map: e }));
      i(a);
    }
  }, [e]), r;
}
function Ed(t) {
  var e = t.children, n = t.options, r = bd(n);
  return r !== null ? e(r) : null;
}
lt(Ed);
var Co = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, Do = {
  options: function(t, e) {
    t.setOptions(e);
  },
  position: function(t, e) {
    t.setPosition(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
};
function wd(t) {
  var e = t.children, n = t.anchor, r = t.options, i = t.position, a = t.zIndex, o = t.onCloseClick, s = t.onDomReady, u = t.onContentChanged, l = t.onPositionChanged, c = t.onZindexChanged, p = t.onLoad, d = t.onUnmount, h = _e(Ae), y = $(null), v = y[0], f = y[1], C = $(null), w = C[0], b = C[1], S = $(null), D = S[0], E = S[1], A = $(null), F = A[0], V = A[1], M = $(null), z = M[0], j = M[1], T = $(null), R = T[0], N = T[1], J = qe(null);
  return B(function() {
    v !== null && (v.close(), n ? v.open(h, n) : v.getPosition() && v.open(h));
  }, [h, v, n]), B(function() {
    r && v !== null && v.setOptions(r);
  }, [v, r]), B(function() {
    i && v !== null && v.setPosition(i);
  }, [i]), B(function() {
    typeof a == "number" && v !== null && v.setZIndex(a);
  }, [a]), B(function() {
    v && o && (w !== null && google.maps.event.removeListener(w), b(google.maps.event.addListener(v, "closeclick", o)));
  }, [o]), B(function() {
    v && s && (D !== null && google.maps.event.removeListener(D), E(google.maps.event.addListener(v, "domready", s)));
  }, [s]), B(function() {
    v && u && (F !== null && google.maps.event.removeListener(F), V(google.maps.event.addListener(v, "content_changed", u)));
  }, [u]), B(function() {
    v && l && (z !== null && google.maps.event.removeListener(z), j(google.maps.event.addListener(v, "position_changed", l)));
  }, [l]), B(function() {
    v && c && (R !== null && google.maps.event.removeListener(R), N(google.maps.event.addListener(v, "zindex_changed", c)));
  }, [c]), B(function() {
    var _ = new google.maps.InfoWindow(ye({}, r || {}));
    return f(_), J.current = document.createElement("div"), o && b(google.maps.event.addListener(_, "closeclick", o)), s && E(google.maps.event.addListener(_, "domready", s)), u && V(google.maps.event.addListener(_, "content_changed", u)), l && j(google.maps.event.addListener(_, "position_changed", l)), c && N(google.maps.event.addListener(_, "zindex_changed", c)), _.setContent(J.current), i && _.setPosition(i), a && _.setZIndex(a), n ? _.open(h, n) : _.getPosition() ? _.open(h) : at(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."), p && p(_), function() {
      w && google.maps.event.removeListener(w), F && google.maps.event.removeListener(F), D && google.maps.event.removeListener(D), z && google.maps.event.removeListener(z), R && google.maps.event.removeListener(R), d && d(_), _.close();
    };
  }, []), J.current ? ni(zt.only(e), J.current) : null;
}
lt(wd);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.containerElement = null, n.state = {
      infoWindow: null
    }, n.open = function(r, i) {
      i ? r.open(n.context, i) : r.getPosition() ? r.open(n.context) : at(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
    }, n.setInfoWindowCallback = function() {
      n.state.infoWindow !== null && n.containerElement !== null && (n.state.infoWindow.setContent(n.containerElement), n.open(n.state.infoWindow, n.props.anchor), n.props.onLoad && n.props.onLoad(n.state.infoWindow));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.InfoWindow(ye({}, this.props.options || {}));
    this.containerElement = document.createElement("div"), this.registeredEvents = Fe({
      updaterMap: Do,
      eventMap: Co,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        infoWindow: n
      };
    }, this.setInfoWindowCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.infoWindow !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Do,
      eventMap: Co,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.infoWindow
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.infoWindow !== null && (ke(this.registeredEvents), this.props.onUnmount && this.props.onUnmount(this.state.infoWindow), this.state.infoWindow.close());
  }, e.prototype.render = function() {
    return this.containerElement ? ni(zt.only(this.props.children), this.containerElement) : null;
  }, e.contextType = Ae, e;
})(Ge);
var bo = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Eo = {
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  path: function(t, e) {
    t.setPath(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
}, Bd = {};
function xd(t) {
  var e = t.options, n = t.draggable, r = t.editable, i = t.visible, a = t.path, o = t.onDblClick, s = t.onDragEnd, u = t.onDragStart, l = t.onMouseDown, c = t.onMouseMove, p = t.onMouseOut, d = t.onMouseOver, h = t.onMouseUp, y = t.onRightClick, v = t.onClick, f = t.onDrag, C = t.onLoad, w = t.onUnmount, b = _e(Ae), S = $(null), D = S[0], E = S[1], A = $(null), F = A[0], V = A[1], M = $(null), z = M[0], j = M[1], T = $(null), R = T[0], N = T[1], J = $(null), _ = J[0], te = J[1], ae = $(null), k = ae[0], I = ae[1], Z = $(null), H = Z[0], ee = Z[1], X = $(null), m = X[0], U = X[1], W = $(null), P = W[0], Q = W[1], ie = $(null), G = ie[0], ce = ie[1], se = $(null), he = se[0], ve = se[1], De = $(null), Ce = De[0], me = De[1];
  return B(function() {
    D !== null && D.setMap(b);
  }, [b]), B(function() {
    typeof e < "u" && D !== null && D.setOptions(e);
  }, [D, e]), B(function() {
    typeof n < "u" && D !== null && D.setDraggable(n);
  }, [D, n]), B(function() {
    typeof r < "u" && D !== null && D.setEditable(r);
  }, [D, r]), B(function() {
    typeof i < "u" && D !== null && D.setVisible(i);
  }, [D, i]), B(function() {
    typeof a < "u" && D !== null && D.setPath(a);
  }, [D, a]), B(function() {
    D && o && (F !== null && google.maps.event.removeListener(F), V(google.maps.event.addListener(D, "dblclick", o)));
  }, [o]), B(function() {
    D && s && (z !== null && google.maps.event.removeListener(z), j(google.maps.event.addListener(D, "dragend", s)));
  }, [s]), B(function() {
    D && u && (R !== null && google.maps.event.removeListener(R), N(google.maps.event.addListener(D, "dragstart", u)));
  }, [u]), B(function() {
    D && l && (_ !== null && google.maps.event.removeListener(_), te(google.maps.event.addListener(D, "mousedown", l)));
  }, [l]), B(function() {
    D && c && (k !== null && google.maps.event.removeListener(k), I(google.maps.event.addListener(D, "mousemove", c)));
  }, [c]), B(function() {
    D && p && (H !== null && google.maps.event.removeListener(H), ee(google.maps.event.addListener(D, "mouseout", p)));
  }, [p]), B(function() {
    D && d && (m !== null && google.maps.event.removeListener(m), U(google.maps.event.addListener(D, "mouseover", d)));
  }, [d]), B(function() {
    D && h && (P !== null && google.maps.event.removeListener(P), Q(google.maps.event.addListener(D, "mouseup", h)));
  }, [h]), B(function() {
    D && y && (G !== null && google.maps.event.removeListener(G), ce(google.maps.event.addListener(D, "rightclick", y)));
  }, [y]), B(function() {
    D && v && (he !== null && google.maps.event.removeListener(he), ve(google.maps.event.addListener(D, "click", v)));
  }, [v]), B(function() {
    D && f && (Ce !== null && google.maps.event.removeListener(Ce), me(google.maps.event.addListener(D, "drag", f)));
  }, [f]), B(function() {
    var ge = new google.maps.Polyline(ye(ye({}, e || Bd), { map: b }));
    return a && ge.setPath(a), typeof i < "u" && ge.setVisible(i), typeof r < "u" && ge.setEditable(r), typeof n < "u" && ge.setDraggable(n), o && V(google.maps.event.addListener(ge, "dblclick", o)), s && j(google.maps.event.addListener(ge, "dragend", s)), u && N(google.maps.event.addListener(ge, "dragstart", u)), l && te(google.maps.event.addListener(ge, "mousedown", l)), c && I(google.maps.event.addListener(ge, "mousemove", c)), p && ee(google.maps.event.addListener(ge, "mouseout", p)), d && U(google.maps.event.addListener(ge, "mouseover", d)), h && Q(google.maps.event.addListener(ge, "mouseup", h)), y && ce(google.maps.event.addListener(ge, "rightclick", y)), v && ve(google.maps.event.addListener(ge, "click", v)), f && me(google.maps.event.addListener(ge, "drag", f)), E(ge), C && C(ge), function() {
      F !== null && google.maps.event.removeListener(F), z !== null && google.maps.event.removeListener(z), R !== null && google.maps.event.removeListener(R), _ !== null && google.maps.event.removeListener(_), k !== null && google.maps.event.removeListener(k), H !== null && google.maps.event.removeListener(H), m !== null && google.maps.event.removeListener(m), P !== null && google.maps.event.removeListener(P), G !== null && google.maps.event.removeListener(G), he !== null && google.maps.event.removeListener(he), w && w(ge), ge.setMap(null);
    };
  }, []), null;
}
lt(xd);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      polyline: null
    }, n.setPolylineCallback = function() {
      n.state.polyline !== null && n.props.onLoad && n.props.onLoad(n.state.polyline);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Polyline(ye(ye({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: Eo,
      eventMap: bo,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        polyline: n
      };
    }, this.setPolylineCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.polyline !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Eo,
      eventMap: bo,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.polyline
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.polyline !== null && (this.props.onUnmount && this.props.onUnmount(this.state.polyline), ke(this.registeredEvents), this.state.polyline.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var wo = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Bo = {
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  path: function(t, e) {
    t.setPath(e);
  },
  paths: function(t, e) {
    t.setPaths(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
};
function Ld(t) {
  var e = t.options, n = t.draggable, r = t.editable, i = t.visible, a = t.path, o = t.paths, s = t.onDblClick, u = t.onDragEnd, l = t.onDragStart, c = t.onMouseDown, p = t.onMouseMove, d = t.onMouseOut, h = t.onMouseOver, y = t.onMouseUp, v = t.onRightClick, f = t.onClick, C = t.onDrag, w = t.onLoad, b = t.onUnmount, S = t.onEdit, D = _e(Ae), E = $(null), A = E[0], F = E[1], V = $(null), M = V[0], z = V[1], j = $(null), T = j[0], R = j[1], N = $(null), J = N[0], _ = N[1], te = $(null), ae = te[0], k = te[1], I = $(null), Z = I[0], H = I[1], ee = $(null), X = ee[0], m = ee[1], U = $(null), W = U[0], P = U[1], Q = $(null), ie = Q[0], G = Q[1], ce = $(null), se = ce[0], he = ce[1], ve = $(null), De = ve[0], Ce = ve[1], me = $(null), ge = me[0], Ie = me[1];
  return B(function() {
    A !== null && A.setMap(D);
  }, [D]), B(function() {
    typeof e < "u" && A !== null && A.setOptions(e);
  }, [A, e]), B(function() {
    typeof n < "u" && A !== null && A.setDraggable(n);
  }, [A, n]), B(function() {
    typeof r < "u" && A !== null && A.setEditable(r);
  }, [A, r]), B(function() {
    typeof i < "u" && A !== null && A.setVisible(i);
  }, [A, i]), B(function() {
    typeof a < "u" && A !== null && A.setPath(a);
  }, [A, a]), B(function() {
    typeof o < "u" && A !== null && A.setPaths(o);
  }, [A, o]), B(function() {
    A && s && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(A, "dblclick", s)));
  }, [s]), B(function() {
    A && (google.maps.event.addListener(A.getPath(), "insert_at", function() {
      S == null || S(A);
    }), google.maps.event.addListener(A.getPath(), "set_at", function() {
      S == null || S(A);
    }));
  }, [A, S]), B(function() {
    A && u && (T !== null && google.maps.event.removeListener(T), R(google.maps.event.addListener(A, "dragend", u)));
  }, [u]), B(function() {
    A && l && (J !== null && google.maps.event.removeListener(J), _(google.maps.event.addListener(A, "dragstart", l)));
  }, [l]), B(function() {
    A && c && (ae !== null && google.maps.event.removeListener(ae), k(google.maps.event.addListener(A, "mousedown", c)));
  }, [c]), B(function() {
    A && p && (Z !== null && google.maps.event.removeListener(Z), H(google.maps.event.addListener(A, "mousemove", p)));
  }, [p]), B(function() {
    A && d && (X !== null && google.maps.event.removeListener(X), m(google.maps.event.addListener(A, "mouseout", d)));
  }, [d]), B(function() {
    A && h && (W !== null && google.maps.event.removeListener(W), P(google.maps.event.addListener(A, "mouseover", h)));
  }, [h]), B(function() {
    A && y && (ie !== null && google.maps.event.removeListener(ie), G(google.maps.event.addListener(A, "mouseup", y)));
  }, [y]), B(function() {
    A && v && (se !== null && google.maps.event.removeListener(se), he(google.maps.event.addListener(A, "rightclick", v)));
  }, [v]), B(function() {
    A && f && (De !== null && google.maps.event.removeListener(De), Ce(google.maps.event.addListener(A, "click", f)));
  }, [f]), B(function() {
    A && C && (ge !== null && google.maps.event.removeListener(ge), Ie(google.maps.event.addListener(A, "drag", C)));
  }, [C]), B(function() {
    var le = new google.maps.Polygon(ye(ye({}, e || {}), { map: D }));
    return a && le.setPath(a), o && le.setPaths(o), typeof i < "u" && le.setVisible(i), typeof r < "u" && le.setEditable(r), typeof n < "u" && le.setDraggable(n), s && z(google.maps.event.addListener(le, "dblclick", s)), u && R(google.maps.event.addListener(le, "dragend", u)), l && _(google.maps.event.addListener(le, "dragstart", l)), c && k(google.maps.event.addListener(le, "mousedown", c)), p && H(google.maps.event.addListener(le, "mousemove", p)), d && m(google.maps.event.addListener(le, "mouseout", d)), h && P(google.maps.event.addListener(le, "mouseover", h)), y && G(google.maps.event.addListener(le, "mouseup", y)), v && he(google.maps.event.addListener(le, "rightclick", v)), f && Ce(google.maps.event.addListener(le, "click", f)), C && Ie(google.maps.event.addListener(le, "drag", C)), F(le), w && w(le), function() {
      M !== null && google.maps.event.removeListener(M), T !== null && google.maps.event.removeListener(T), J !== null && google.maps.event.removeListener(J), ae !== null && google.maps.event.removeListener(ae), Z !== null && google.maps.event.removeListener(Z), X !== null && google.maps.event.removeListener(X), W !== null && google.maps.event.removeListener(W), ie !== null && google.maps.event.removeListener(ie), se !== null && google.maps.event.removeListener(se), De !== null && google.maps.event.removeListener(De), b && b(le), le.setMap(null);
    };
  }, []), null;
}
lt(Ld);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      polygon: null
    }, n.setPolygonCallback = function() {
      n.state.polygon !== null && n.props.onLoad && n.props.onLoad(n.state.polygon);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Polygon(ye(ye({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: Bo,
      eventMap: wo,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        polygon: n
      };
    }, this.setPolygonCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.polygon !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Bo,
      eventMap: wo,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.polygon
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.polygon !== null && (this.props.onUnmount && this.props.onUnmount(this.state.polygon), ke(this.registeredEvents), this.state.polygon && this.state.polygon.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var xo = {
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Lo = {
  bounds: function(t, e) {
    t.setBounds(e);
  },
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
};
function Ad(t) {
  var e = t.options, n = t.bounds, r = t.draggable, i = t.editable, a = t.visible, o = t.onDblClick, s = t.onDragEnd, u = t.onDragStart, l = t.onMouseDown, c = t.onMouseMove, p = t.onMouseOut, d = t.onMouseOver, h = t.onMouseUp, y = t.onRightClick, v = t.onClick, f = t.onDrag, C = t.onBoundsChanged, w = t.onLoad, b = t.onUnmount, S = _e(Ae), D = $(null), E = D[0], A = D[1], F = $(null), V = F[0], M = F[1], z = $(null), j = z[0], T = z[1], R = $(null), N = R[0], J = R[1], _ = $(null), te = _[0], ae = _[1], k = $(null), I = k[0], Z = k[1], H = $(null), ee = H[0], X = H[1], m = $(null), U = m[0], W = m[1], P = $(null), Q = P[0], ie = P[1], G = $(null), ce = G[0], se = G[1], he = $(null), ve = he[0], De = he[1], Ce = $(null), me = Ce[0], ge = Ce[1], Ie = $(null), le = Ie[0], Ne = Ie[1];
  return B(function() {
    E !== null && E.setMap(S);
  }, [S]), B(function() {
    typeof e < "u" && E !== null && E.setOptions(e);
  }, [E, e]), B(function() {
    typeof r < "u" && E !== null && E.setDraggable(r);
  }, [E, r]), B(function() {
    typeof i < "u" && E !== null && E.setEditable(i);
  }, [E, i]), B(function() {
    typeof a < "u" && E !== null && E.setVisible(a);
  }, [E, a]), B(function() {
    typeof n < "u" && E !== null && E.setBounds(n);
  }, [E, n]), B(function() {
    E && o && (V !== null && google.maps.event.removeListener(V), M(google.maps.event.addListener(E, "dblclick", o)));
  }, [o]), B(function() {
    E && s && (j !== null && google.maps.event.removeListener(j), T(google.maps.event.addListener(E, "dragend", s)));
  }, [s]), B(function() {
    E && u && (N !== null && google.maps.event.removeListener(N), J(google.maps.event.addListener(E, "dragstart", u)));
  }, [u]), B(function() {
    E && l && (te !== null && google.maps.event.removeListener(te), ae(google.maps.event.addListener(E, "mousedown", l)));
  }, [l]), B(function() {
    E && c && (I !== null && google.maps.event.removeListener(I), Z(google.maps.event.addListener(E, "mousemove", c)));
  }, [c]), B(function() {
    E && p && (ee !== null && google.maps.event.removeListener(ee), X(google.maps.event.addListener(E, "mouseout", p)));
  }, [p]), B(function() {
    E && d && (U !== null && google.maps.event.removeListener(U), W(google.maps.event.addListener(E, "mouseover", d)));
  }, [d]), B(function() {
    E && h && (Q !== null && google.maps.event.removeListener(Q), ie(google.maps.event.addListener(E, "mouseup", h)));
  }, [h]), B(function() {
    E && y && (ce !== null && google.maps.event.removeListener(ce), se(google.maps.event.addListener(E, "rightclick", y)));
  }, [y]), B(function() {
    E && v && (ve !== null && google.maps.event.removeListener(ve), De(google.maps.event.addListener(E, "click", v)));
  }, [v]), B(function() {
    E && f && (me !== null && google.maps.event.removeListener(me), ge(google.maps.event.addListener(E, "drag", f)));
  }, [f]), B(function() {
    E && C && (le !== null && google.maps.event.removeListener(le), Ne(google.maps.event.addListener(E, "bounds_changed", C)));
  }, [C]), B(function() {
    var pe = new google.maps.Rectangle(ye(ye({}, e || {}), { map: S }));
    return typeof a < "u" && pe.setVisible(a), typeof i < "u" && pe.setEditable(i), typeof r < "u" && pe.setDraggable(r), typeof n < "u" && pe.setBounds(n), o && M(google.maps.event.addListener(pe, "dblclick", o)), s && T(google.maps.event.addListener(pe, "dragend", s)), u && J(google.maps.event.addListener(pe, "dragstart", u)), l && ae(google.maps.event.addListener(pe, "mousedown", l)), c && Z(google.maps.event.addListener(pe, "mousemove", c)), p && X(google.maps.event.addListener(pe, "mouseout", p)), d && W(google.maps.event.addListener(pe, "mouseover", d)), h && ie(google.maps.event.addListener(pe, "mouseup", h)), y && se(google.maps.event.addListener(pe, "rightclick", y)), v && De(google.maps.event.addListener(pe, "click", v)), f && ge(google.maps.event.addListener(pe, "drag", f)), C && Ne(google.maps.event.addListener(pe, "bounds_changed", C)), A(pe), w && w(pe), function() {
      V !== null && google.maps.event.removeListener(V), j !== null && google.maps.event.removeListener(j), N !== null && google.maps.event.removeListener(N), te !== null && google.maps.event.removeListener(te), I !== null && google.maps.event.removeListener(I), ee !== null && google.maps.event.removeListener(ee), U !== null && google.maps.event.removeListener(U), Q !== null && google.maps.event.removeListener(Q), ce !== null && google.maps.event.removeListener(ce), ve !== null && google.maps.event.removeListener(ve), me !== null && google.maps.event.removeListener(me), le !== null && google.maps.event.removeListener(le), b && b(pe), pe.setMap(null);
    };
  }, []), null;
}
lt(Ad);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      rectangle: null
    }, n.setRectangleCallback = function() {
      n.state.rectangle !== null && n.props.onLoad && n.props.onLoad(n.state.rectangle);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Rectangle(ye(ye({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: Lo,
      eventMap: xo,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        rectangle: n
      };
    }, this.setRectangleCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.rectangle !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Lo,
      eventMap: xo,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.rectangle
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.rectangle !== null && (this.props.onUnmount && this.props.onUnmount(this.state.rectangle), ke(this.registeredEvents), this.state.rectangle.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var Ao = {
  onCenterChanged: "center_changed",
  onRadiusChanged: "radius_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Oo = {
  center: function(t, e) {
    t.setCenter(e);
  },
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  radius: function(t, e) {
    t.setRadius(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
}, Od = {};
function Sd(t) {
  var e = t.options, n = t.center, r = t.radius, i = t.draggable, a = t.editable, o = t.visible, s = t.onDblClick, u = t.onDragEnd, l = t.onDragStart, c = t.onMouseDown, p = t.onMouseMove, d = t.onMouseOut, h = t.onMouseOver, y = t.onMouseUp, v = t.onRightClick, f = t.onClick, C = t.onDrag, w = t.onCenterChanged, b = t.onRadiusChanged, S = t.onLoad, D = t.onUnmount, E = _e(Ae), A = $(null), F = A[0], V = A[1], M = $(null), z = M[0], j = M[1], T = $(null), R = T[0], N = T[1], J = $(null), _ = J[0], te = J[1], ae = $(null), k = ae[0], I = ae[1], Z = $(null), H = Z[0], ee = Z[1], X = $(null), m = X[0], U = X[1], W = $(null), P = W[0], Q = W[1], ie = $(null), G = ie[0], ce = ie[1], se = $(null), he = se[0], ve = se[1], De = $(null), Ce = De[0], me = De[1], ge = $(null), Ie = ge[0], le = ge[1], Ne = $(null), pe = Ne[0], Be = Ne[1], Me = $(null), We = Me[0], Ye = Me[1];
  return B(function() {
    F !== null && F.setMap(E);
  }, [E]), B(function() {
    typeof e < "u" && F !== null && F.setOptions(e);
  }, [F, e]), B(function() {
    typeof i < "u" && F !== null && F.setDraggable(i);
  }, [F, i]), B(function() {
    typeof a < "u" && F !== null && F.setEditable(a);
  }, [F, a]), B(function() {
    typeof o < "u" && F !== null && F.setVisible(o);
  }, [F, o]), B(function() {
    typeof r == "number" && F !== null && F.setRadius(r);
  }, [F, r]), B(function() {
    typeof n < "u" && F !== null && F.setCenter(n);
  }, [F, n]), B(function() {
    F && s && (z !== null && google.maps.event.removeListener(z), j(google.maps.event.addListener(F, "dblclick", s)));
  }, [s]), B(function() {
    F && u && (R !== null && google.maps.event.removeListener(R), N(google.maps.event.addListener(F, "dragend", u)));
  }, [u]), B(function() {
    F && l && (_ !== null && google.maps.event.removeListener(_), te(google.maps.event.addListener(F, "dragstart", l)));
  }, [l]), B(function() {
    F && c && (k !== null && google.maps.event.removeListener(k), I(google.maps.event.addListener(F, "mousedown", c)));
  }, [c]), B(function() {
    F && p && (H !== null && google.maps.event.removeListener(H), ee(google.maps.event.addListener(F, "mousemove", p)));
  }, [p]), B(function() {
    F && d && (m !== null && google.maps.event.removeListener(m), U(google.maps.event.addListener(F, "mouseout", d)));
  }, [d]), B(function() {
    F && h && (P !== null && google.maps.event.removeListener(P), Q(google.maps.event.addListener(F, "mouseover", h)));
  }, [h]), B(function() {
    F && y && (G !== null && google.maps.event.removeListener(G), ce(google.maps.event.addListener(F, "mouseup", y)));
  }, [y]), B(function() {
    F && v && (he !== null && google.maps.event.removeListener(he), ve(google.maps.event.addListener(F, "rightclick", v)));
  }, [v]), B(function() {
    F && f && (Ce !== null && google.maps.event.removeListener(Ce), me(google.maps.event.addListener(F, "click", f)));
  }, [f]), B(function() {
    F && C && (Ie !== null && google.maps.event.removeListener(Ie), le(google.maps.event.addListener(F, "drag", C)));
  }, [C]), B(function() {
    F && w && (pe !== null && google.maps.event.removeListener(pe), Be(google.maps.event.addListener(F, "center_changed", w)));
  }, [f]), B(function() {
    F && b && (We !== null && google.maps.event.removeListener(We), Ye(google.maps.event.addListener(F, "radius_changed", b)));
  }, [b]), B(function() {
    var we = new google.maps.Circle(ye(ye({}, e || Od), { map: E }));
    return typeof r == "number" && we.setRadius(r), typeof n < "u" && we.setCenter(n), typeof r == "number" && we.setRadius(r), typeof o < "u" && we.setVisible(o), typeof a < "u" && we.setEditable(a), typeof i < "u" && we.setDraggable(i), s && j(google.maps.event.addListener(we, "dblclick", s)), u && N(google.maps.event.addListener(we, "dragend", u)), l && te(google.maps.event.addListener(we, "dragstart", l)), c && I(google.maps.event.addListener(we, "mousedown", c)), p && ee(google.maps.event.addListener(we, "mousemove", p)), d && U(google.maps.event.addListener(we, "mouseout", d)), h && Q(google.maps.event.addListener(we, "mouseover", h)), y && ce(google.maps.event.addListener(we, "mouseup", y)), v && ve(google.maps.event.addListener(we, "rightclick", v)), f && me(google.maps.event.addListener(we, "click", f)), C && le(google.maps.event.addListener(we, "drag", C)), w && Be(google.maps.event.addListener(we, "center_changed", w)), b && Ye(google.maps.event.addListener(we, "radius_changed", b)), V(we), S && S(we), function() {
      z !== null && google.maps.event.removeListener(z), R !== null && google.maps.event.removeListener(R), _ !== null && google.maps.event.removeListener(_), k !== null && google.maps.event.removeListener(k), H !== null && google.maps.event.removeListener(H), m !== null && google.maps.event.removeListener(m), P !== null && google.maps.event.removeListener(P), G !== null && google.maps.event.removeListener(G), he !== null && google.maps.event.removeListener(he), Ce !== null && google.maps.event.removeListener(Ce), pe !== null && google.maps.event.removeListener(pe), We !== null && google.maps.event.removeListener(We), D && D(we), we.setMap(null);
    };
  }, []), null;
}
lt(Sd);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      circle: null
    }, n.setCircleCallback = function() {
      n.state.circle !== null && n.props.onLoad && n.props.onLoad(n.state.circle);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Circle(ye(ye({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: Oo,
      eventMap: Ao,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        circle: n
      };
    }, this.setCircleCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.circle !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Oo,
      eventMap: Ao,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.circle
    }));
  }, e.prototype.componentWillUnmount = function() {
    var n;
    this.state.circle !== null && (this.props.onUnmount && this.props.onUnmount(this.state.circle), ke(this.registeredEvents), (n = this.state.circle) === null || n === void 0 || n.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var So = {
  onClick: "click",
  onDblClick: "dblclick",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAddFeature: "addfeature",
  onRemoveFeature: "removefeature",
  onRemoveProperty: "removeproperty",
  onSetGeometry: "setgeometry",
  onSetProperty: "setproperty"
}, Fo = {
  add: function(t, e) {
    t.add(e);
  },
  addgeojson: function(t, e, n) {
    t.addGeoJson(e, n);
  },
  contains: function(t, e) {
    t.contains(e);
  },
  foreach: function(t, e) {
    t.forEach(e);
  },
  loadgeojson: function(t, e, n, r) {
    t.loadGeoJson(e, n, r);
  },
  overridestyle: function(t, e, n) {
    t.overrideStyle(e, n);
  },
  remove: function(t, e) {
    t.remove(e);
  },
  revertstyle: function(t, e) {
    t.revertStyle(e);
  },
  controlposition: function(t, e) {
    t.setControlPosition(e);
  },
  controls: function(t, e) {
    t.setControls(e);
  },
  drawingmode: function(t, e) {
    t.setDrawingMode(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  style: function(t, e) {
    t.setStyle(e);
  },
  togeojson: function(t, e) {
    t.toGeoJson(e);
  }
};
function Fd(t) {
  var e = t.options, n = t.onClick, r = t.onDblClick, i = t.onMouseDown, a = t.onMouseMove, o = t.onMouseOut, s = t.onMouseOver, u = t.onMouseUp, l = t.onRightClick, c = t.onAddFeature, p = t.onRemoveFeature, d = t.onRemoveProperty, h = t.onSetGeometry, y = t.onSetProperty, v = t.onLoad, f = t.onUnmount, C = _e(Ae), w = $(null), b = w[0], S = w[1], D = $(null), E = D[0], A = D[1], F = $(null), V = F[0], M = F[1], z = $(null), j = z[0], T = z[1], R = $(null), N = R[0], J = R[1], _ = $(null), te = _[0], ae = _[1], k = $(null), I = k[0], Z = k[1], H = $(null), ee = H[0], X = H[1], m = $(null), U = m[0], W = m[1], P = $(null), Q = P[0], ie = P[1], G = $(null), ce = G[0], se = G[1], he = $(null), ve = he[0], De = he[1], Ce = $(null), me = Ce[0], ge = Ce[1], Ie = $(null), le = Ie[0], Ne = Ie[1];
  return B(function() {
    b !== null && b.setMap(C);
  }, [C]), B(function() {
    b && r && (E !== null && google.maps.event.removeListener(E), A(google.maps.event.addListener(b, "dblclick", r)));
  }, [r]), B(function() {
    b && i && (V !== null && google.maps.event.removeListener(V), M(google.maps.event.addListener(b, "mousedown", i)));
  }, [i]), B(function() {
    b && a && (j !== null && google.maps.event.removeListener(j), T(google.maps.event.addListener(b, "mousemove", a)));
  }, [a]), B(function() {
    b && o && (N !== null && google.maps.event.removeListener(N), J(google.maps.event.addListener(b, "mouseout", o)));
  }, [o]), B(function() {
    b && s && (te !== null && google.maps.event.removeListener(te), ae(google.maps.event.addListener(b, "mouseover", s)));
  }, [s]), B(function() {
    b && u && (I !== null && google.maps.event.removeListener(I), Z(google.maps.event.addListener(b, "mouseup", u)));
  }, [u]), B(function() {
    b && l && (ee !== null && google.maps.event.removeListener(ee), X(google.maps.event.addListener(b, "rightclick", l)));
  }, [l]), B(function() {
    b && n && (U !== null && google.maps.event.removeListener(U), W(google.maps.event.addListener(b, "click", n)));
  }, [n]), B(function() {
    b && c && (Q !== null && google.maps.event.removeListener(Q), ie(google.maps.event.addListener(b, "addfeature", c)));
  }, [c]), B(function() {
    b && p && (ce !== null && google.maps.event.removeListener(ce), se(google.maps.event.addListener(b, "removefeature", p)));
  }, [p]), B(function() {
    b && d && (ve !== null && google.maps.event.removeListener(ve), De(google.maps.event.addListener(b, "removeproperty", d)));
  }, [d]), B(function() {
    b && h && (me !== null && google.maps.event.removeListener(me), ge(google.maps.event.addListener(b, "setgeometry", h)));
  }, [h]), B(function() {
    b && y && (le !== null && google.maps.event.removeListener(le), Ne(google.maps.event.addListener(b, "setproperty", y)));
  }, [y]), B(function() {
    if (C !== null) {
      var pe = new google.maps.Data(ye(ye({}, e || {}), { map: C }));
      r && A(google.maps.event.addListener(pe, "dblclick", r)), i && M(google.maps.event.addListener(pe, "mousedown", i)), a && T(google.maps.event.addListener(pe, "mousemove", a)), o && J(google.maps.event.addListener(pe, "mouseout", o)), s && ae(google.maps.event.addListener(pe, "mouseover", s)), u && Z(google.maps.event.addListener(pe, "mouseup", u)), l && X(google.maps.event.addListener(pe, "rightclick", l)), n && W(google.maps.event.addListener(pe, "click", n)), c && ie(google.maps.event.addListener(pe, "addfeature", c)), p && se(google.maps.event.addListener(pe, "removefeature", p)), d && De(google.maps.event.addListener(pe, "removeproperty", d)), h && ge(google.maps.event.addListener(pe, "setgeometry", h)), y && Ne(google.maps.event.addListener(pe, "setproperty", y)), S(pe), v && v(pe);
    }
    return function() {
      b && (E !== null && google.maps.event.removeListener(E), V !== null && google.maps.event.removeListener(V), j !== null && google.maps.event.removeListener(j), N !== null && google.maps.event.removeListener(N), te !== null && google.maps.event.removeListener(te), I !== null && google.maps.event.removeListener(I), ee !== null && google.maps.event.removeListener(ee), U !== null && google.maps.event.removeListener(U), Q !== null && google.maps.event.removeListener(Q), ce !== null && google.maps.event.removeListener(ce), ve !== null && google.maps.event.removeListener(ve), me !== null && google.maps.event.removeListener(me), le !== null && google.maps.event.removeListener(le), f && f(b), b.setMap(null));
    };
  }, []), null;
}
lt(Fd);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      data: null
    }, n.setDataCallback = function() {
      n.state.data !== null && n.props.onLoad && n.props.onLoad(n.state.data);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    if (this.context !== null) {
      var n = new google.maps.Data(ye(ye({}, this.props.options || {}), { map: this.context }));
      this.registeredEvents = Fe({
        updaterMap: Fo,
        eventMap: So,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(function() {
        return {
          data: n
        };
      }, this.setDataCallback);
    }
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.data !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Fo,
      eventMap: So,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.data
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.data !== null && (this.props.onUnmount && this.props.onUnmount(this.state.data), ke(this.registeredEvents), this.state.data && this.state.data.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var Mo = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
}, Po = {
  options: function(t, e) {
    t.setOptions(e);
  },
  url: function(t, e) {
    t.setUrl(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
};
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      kmlLayer: null
    }, n.setKmlLayerCallback = function() {
      n.state.kmlLayer !== null && n.props.onLoad && n.props.onLoad(n.state.kmlLayer);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.KmlLayer(ye(ye({}, this.props.options), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: Po,
      eventMap: Mo,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        kmlLayer: n
      };
    }, this.setKmlLayerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.kmlLayer !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Po,
      eventMap: Mo,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.kmlLayer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.kmlLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.kmlLayer), ke(this.registeredEvents), this.state.kmlLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
function yl(t, e) {
  return typeof e == "function" ? e(t.offsetWidth, t.offsetHeight) : {
    x: 0,
    y: 0
  };
}
function Md(t, e) {
  return new e(t.lat, t.lng);
}
function Pd(t, e) {
  return new e(new google.maps.LatLng(t.ne.lat, t.ne.lng), new google.maps.LatLng(t.sw.lat, t.sw.lng));
}
function kd(t, e, n) {
  return t instanceof e ? t : n(t, e);
}
function Td(t, e, n) {
  return t instanceof e ? t : n(t, e);
}
function Rd(t, e, n) {
  var r = t && t.fromLatLngToDivPixel(n.getNorthEast()), i = t && t.fromLatLngToDivPixel(n.getSouthWest());
  return r && i ? {
    left: "".concat(i.x + e.x, "px"),
    top: "".concat(r.y + e.y, "px"),
    width: "".concat(r.x - i.x - e.x, "px"),
    height: "".concat(i.y - r.y - e.y, "px")
  } : {
    left: "-9999px",
    top: "-9999px"
  };
}
function jd(t, e, n) {
  var r = t && t.fromLatLngToDivPixel(n);
  if (r) {
    var i = r.x, a = r.y;
    return {
      left: "".concat(i + e.x, "px"),
      top: "".concat(a + e.y, "px")
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function Cl(t, e, n, r) {
  return n !== void 0 ? Rd(t, e, Td(n, google.maps.LatLngBounds, Pd)) : jd(t, e, kd(r, google.maps.LatLng, Md));
}
function Id(t, e) {
  return t.left === e.left && t.top === e.top && t.width === e.height && t.height === e.height;
}
function Nd(t, e, n, r, i) {
  var a = (
    /** @class */
    function(o) {
      Ze(s, o);
      function s(u, l, c, p) {
        var d = o.call(this) || this;
        return d.container = u, d.pane = l, d.position = c, d.bounds = p, d;
      }
      return s.prototype.onAdd = function() {
        var u, l = (u = this.getPanes()) === null || u === void 0 ? void 0 : u[this.pane];
        l == null || l.appendChild(this.container);
      }, s.prototype.draw = function() {
        for (var u = this.getProjection(), l = ye({}, this.container ? yl(this.container, i) : {
          x: 0,
          y: 0
        }), c = Cl(u, l, this.bounds, this.position), p = 0, d = Object.entries(c); p < d.length; p++) {
          var h = d[p], y = h[0], v = h[1];
          this.container.style[y] = v;
        }
      }, s.prototype.onRemove = function() {
        this.container.parentNode !== null && this.container.parentNode.removeChild(this.container);
      }, s;
    }(google.maps.OverlayView)
  );
  return new a(t, e, n, r);
}
function ko(t) {
  if (!t)
    return "";
  var e = t instanceof google.maps.LatLng ? t : new google.maps.LatLng(t.lat, t.lng);
  return e + "";
}
function To(t) {
  if (!t)
    return "";
  var e = t instanceof google.maps.LatLngBounds ? t : new google.maps.LatLngBounds(new google.maps.LatLng(t.south, t.east), new google.maps.LatLng(t.north, t.west));
  return e + "";
}
function $d(t) {
  var e = t.position, n = t.bounds, r = t.mapPaneName, i = t.zIndex, a = t.onLoad, o = t.onUnmount, s = t.getPixelPositionOffset, u = t.children, l = _e(Ae), c = qt(function() {
    var d = document.createElement("div");
    return d.style.position = "absolute", d;
  }, []), p = qt(function() {
    return Nd(c, r, e, n, s);
  }, [c, r, e, n]);
  return B(function() {
    return a == null || a(p), p == null || p.setMap(l), function() {
      o == null || o(p), p == null || p.setMap(null);
    };
  }, [l, p]), B(function() {
    c.style.zIndex = "".concat(i);
  }, [i, c]), nl.createPortal(u, c);
}
lt($d);
(function(t) {
  Ze(e, t);
  function e(n) {
    var r = t.call(this, n) || this;
    r.state = {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: "absolute"
      }
    }, r.updatePane = function() {
      var a = r.props.mapPaneName, o = r.overlayView.getPanes();
      at(!!a, "OverlayView requires props.mapPaneName but got %s", a), o ? r.setState({
        paneEl: o[a]
      }) : r.setState({
        paneEl: null
      });
    }, r.onAdd = function() {
      var a, o;
      r.updatePane(), (o = (a = r.props).onLoad) === null || o === void 0 || o.call(a, r.overlayView);
    }, r.onPositionElement = function() {
      var a = r.overlayView.getProjection(), o = ye({ x: 0, y: 0 }, r.containerRef.current ? yl(r.containerRef.current, r.props.getPixelPositionOffset) : {}), s = Cl(a, o, r.props.bounds, r.props.position), u = r.state.containerStyle, l = u.left, c = u.top, p = u.width, d = u.height;
      Id(s, { left: l, top: c, width: p, height: d }) || r.setState({
        containerStyle: {
          top: s.top || 0,
          left: s.left || 0,
          width: s.width || 0,
          height: s.height || 0,
          position: "absolute"
        }
      });
    }, r.draw = function() {
      r.onPositionElement();
    }, r.onRemove = function() {
      var a, o;
      r.setState(function() {
        return {
          paneEl: null
        };
      }), (o = (a = r.props).onUnmount) === null || o === void 0 || o.call(a, r.overlayView);
    }, r.containerRef = ti();
    var i = new google.maps.OverlayView();
    return i.onAdd = r.onAdd, i.draw = r.draw, i.onRemove = r.onRemove, r.overlayView = i, r;
  }
  return e.prototype.componentDidMount = function() {
    this.overlayView.setMap(this.context);
  }, e.prototype.componentDidUpdate = function(n) {
    var r = ko(n.position), i = ko(this.props.position), a = To(n.bounds), o = To(this.props.bounds);
    (r !== i || a !== o) && this.overlayView.draw(), n.mapPaneName !== this.props.mapPaneName && this.updatePane();
  }, e.prototype.componentWillUnmount = function() {
    this.overlayView.setMap(null);
  }, e.prototype.render = function() {
    var n = this.state.paneEl;
    return n ? nl.createPortal(x.jsx("div", { ref: this.containerRef, style: this.state.containerStyle, children: zt.only(this.props.children) }), n) : null;
  }, e.FLOAT_PANE = "floatPane", e.MAP_PANE = "mapPane", e.MARKER_LAYER = "markerLayer", e.OVERLAY_LAYER = "overlayLayer", e.OVERLAY_MOUSE_TARGET = "overlayMouseTarget", e.contextType = Ae, e;
})(Ge);
function zd() {
}
var Ro = {
  onDblClick: "dblclick",
  onClick: "click"
}, jo = {
  opacity: function(t, e) {
    t.setOpacity(e);
  }
};
function _d(t) {
  var e = t.url, n = t.bounds, r = t.options, i = t.visible, a = _e(Ae), o = new google.maps.LatLngBounds(new google.maps.LatLng(n.south, n.west), new google.maps.LatLng(n.north, n.east)), s = qt(function() {
    var u = new google.maps.GroundOverlay(e, o, ye({}, r));
    return u;
  }, []);
  return B(function() {
    s !== null && s.setMap(a);
  }, [a]), B(function() {
    typeof e < "u" && s !== null && (s.set("url", e), s.setMap(a));
  }, [s, e]), B(function() {
    typeof i < "u" && s !== null && s.setOpacity(i ? 1 : 0);
  }, [s, i]), B(function() {
    var u = new google.maps.LatLngBounds(new google.maps.LatLng(n.south, n.west), new google.maps.LatLng(n.north, n.east));
    typeof n < "u" && s !== null && (s.set("bounds", u), s.setMap(a));
  }, [s, n]), null;
}
lt(_d);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      groundOverlay: null
    }, n.setGroundOverlayCallback = function() {
      n.state.groundOverlay !== null && n.props.onLoad && n.props.onLoad(n.state.groundOverlay);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    at(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
    var n = new google.maps.GroundOverlay(this.props.url, this.props.bounds, ye(ye({}, this.props.options), { map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: jo,
      eventMap: Ro,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        groundOverlay: n
      };
    }, this.setGroundOverlayCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.groundOverlay !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: jo,
      eventMap: Ro,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.groundOverlay
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.groundOverlay && (this.props.onUnmount && this.props.onUnmount(this.state.groundOverlay), this.state.groundOverlay.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.defaultProps = {
    onLoad: zd
  }, e.contextType = Ae, e;
})(Ge);
var Io = {}, No = {
  data: function(t, e) {
    t.setData(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  }
};
function Wd(t) {
  var e = t.data, n = t.onLoad, r = t.onUnmount, i = t.options, a = _e(Ae), o = $(null), s = o[0], u = o[1];
  return B(function() {
    google.maps.visualization || at(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
  }, []), B(function() {
    at(!!e, "data property is required in HeatmapLayer %s", e);
  }, [e]), B(function() {
    s !== null && s.setMap(a);
  }, [a]), B(function() {
    i && s !== null && s.setOptions(i);
  }, [s, i]), B(function() {
    var l = new google.maps.visualization.HeatmapLayer(ye(ye({}, i || {}), { data: e, map: a }));
    return u(l), n && n(l), function() {
      s !== null && (r && r(s), s.setMap(null));
    };
  }, []), null;
}
lt(Wd);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      heatmapLayer: null
    }, n.setHeatmapLayerCallback = function() {
      n.state.heatmapLayer !== null && n.props.onLoad && n.props.onLoad(n.state.heatmapLayer);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    at(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization), at(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
    var n = new google.maps.visualization.HeatmapLayer(ye(ye({}, this.props.options || {}), { data: this.props.data, map: this.context }));
    this.registeredEvents = Fe({
      updaterMap: No,
      eventMap: Io,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        heatmapLayer: n
      };
    }, this.setHeatmapLayerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: No,
      eventMap: Io,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  }, e.prototype.componentWillUnmount = function() {
    this.state.heatmapLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.heatmapLayer), ke(this.registeredEvents), this.state.heatmapLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
var $o = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
}, zo = {
  register: function(t, e, n) {
    t.registerPanoProvider(e, n);
  },
  links: function(t, e) {
    t.setLinks(e);
  },
  motionTracking: function(t, e) {
    t.setMotionTracking(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  pano: function(t, e) {
    t.setPano(e);
  },
  position: function(t, e) {
    t.setPosition(e);
  },
  pov: function(t, e) {
    t.setPov(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  },
  zoom: function(t, e) {
    t.setZoom(e);
  }
};
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      streetViewPanorama: null
    }, n.setStreetViewPanoramaCallback = function() {
      n.state.streetViewPanorama !== null && n.props.onLoad && n.props.onLoad(n.state.streetViewPanorama);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n, r, i = (r = (n = this.context) === null || n === void 0 ? void 0 : n.getStreetView()) !== null && r !== void 0 ? r : null;
    this.registeredEvents = Fe({
      updaterMap: zo,
      eventMap: $o,
      prevProps: {},
      nextProps: this.props,
      instance: i
    }), this.setState(function() {
      return {
        streetViewPanorama: i
      };
    }, this.setStreetViewPanoramaCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.streetViewPanorama !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: zo,
      eventMap: $o,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.streetViewPanorama
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.streetViewPanorama !== null && (this.props.onUnmount && this.props.onUnmount(this.state.streetViewPanorama), ke(this.registeredEvents), this.state.streetViewPanorama.setVisible(!1));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      streetViewService: null
    }, n.setStreetViewServiceCallback = function() {
      n.state.streetViewService !== null && n.props.onLoad && n.props.onLoad(n.state.streetViewService);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.StreetViewService();
    this.setState(function() {
      return {
        streetViewService: n
      };
    }, this.setStreetViewServiceCallback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.streetViewService !== null && this.props.onUnmount && this.props.onUnmount(this.state.streetViewService);
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = Ae, e;
})(Ge);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      directionsService: null
    }, n.setDirectionsServiceCallback = function() {
      n.state.directionsService !== null && n.props.onLoad && n.props.onLoad(n.state.directionsService);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    at(!!this.props.options, "DirectionsService expected options object as parameter, but got %s", this.props.options);
    var n = new google.maps.DirectionsService();
    this.setState(function() {
      return {
        directionsService: n
      };
    }, this.setDirectionsServiceCallback);
  }, e.prototype.componentDidUpdate = function() {
    this.state.directionsService !== null && this.state.directionsService.route(this.props.options, this.props.callback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.directionsService !== null && this.props.onUnmount && this.props.onUnmount(this.state.directionsService);
  }, e.prototype.render = function() {
    return null;
  }, e;
})(Ge);
var _o = {
  onDirectionsChanged: "directions_changed"
}, Wo = {
  directions: function(t, e) {
    t.setDirections(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  panel: function(t, e) {
    t.setPanel(e);
  },
  routeIndex: function(t, e) {
    t.setRouteIndex(e);
  }
};
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      directionsRenderer: null
    }, n.setDirectionsRendererCallback = function() {
      n.state.directionsRenderer !== null && (n.state.directionsRenderer.setMap(n.context), n.props.onLoad && n.props.onLoad(n.state.directionsRenderer));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = Fe({
      updaterMap: Wo,
      eventMap: _o,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        directionsRenderer: n
      };
    }, this.setDirectionsRendererCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.directionsRenderer !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: Wo,
      eventMap: _o,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.directionsRenderer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.directionsRenderer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.directionsRenderer), ke(this.registeredEvents), this.state.directionsRenderer && this.state.directionsRenderer.setMap(null));
  }, e.prototype.render = function() {
    return x.jsx(x.Fragment, {});
  }, e.contextType = Ae, e;
})(Ge);
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      distanceMatrixService: null
    }, n.setDistanceMatrixServiceCallback = function() {
      n.state.distanceMatrixService !== null && n.props.onLoad && n.props.onLoad(n.state.distanceMatrixService);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    at(!!this.props.options, "DistanceMatrixService expected options object as parameter, but go %s", this.props.options);
    var n = new google.maps.DistanceMatrixService();
    this.setState(function() {
      return {
        distanceMatrixService: n
      };
    }, this.setDistanceMatrixServiceCallback);
  }, e.prototype.componentDidUpdate = function() {
    this.state.distanceMatrixService !== null && this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.distanceMatrixService !== null && this.props.onUnmount && this.props.onUnmount(this.state.distanceMatrixService);
  }, e.prototype.render = function() {
    return null;
  }, e;
})(Ge);
var Uo = {
  onPlacesChanged: "places_changed"
}, Ho = {
  bounds: function(t, e) {
    t.setBounds(e);
  }
}, Ud = (
  /** @class */
  function(t) {
    Ze(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.registeredEvents = [], n.containerElement = ti(), n.state = {
        searchBox: null
      }, n.setSearchBoxCallback = function() {
        n.state.searchBox !== null && n.props.onLoad && n.props.onLoad(n.state.searchBox);
      }, n;
    }
    return e.prototype.componentDidMount = function() {
      if (at(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places), this.containerElement !== null && this.containerElement.current !== null) {
        var n = this.containerElement.current.querySelector("input");
        if (n !== null) {
          var r = new google.maps.places.SearchBox(n, this.props.options);
          this.registeredEvents = Fe({
            updaterMap: Ho,
            eventMap: Uo,
            prevProps: {},
            nextProps: this.props,
            instance: r
          }), this.setState(function() {
            return {
              searchBox: r
            };
          }, this.setSearchBoxCallback);
        }
      }
    }, e.prototype.componentDidUpdate = function(n) {
      this.state.searchBox !== null && (ke(this.registeredEvents), this.registeredEvents = Fe({
        updaterMap: Ho,
        eventMap: Uo,
        prevProps: n,
        nextProps: this.props,
        instance: this.state.searchBox
      }));
    }, e.prototype.componentWillUnmount = function() {
      this.state.searchBox !== null && (this.props.onUnmount && this.props.onUnmount(this.state.searchBox), ke(this.registeredEvents));
    }, e.prototype.render = function() {
      return x.jsx("div", { ref: this.containerElement, children: zt.only(this.props.children) });
    }, e.contextType = Ae, e;
  }(Ge)
), Vo = {
  onPlaceChanged: "place_changed"
}, qo = {
  bounds: function(t, e) {
    t.setBounds(e);
  },
  restrictions: function(t, e) {
    t.setComponentRestrictions(e);
  },
  fields: function(t, e) {
    t.setFields(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  types: function(t, e) {
    t.setTypes(e);
  }
};
(function(t) {
  Ze(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.containerElement = ti(), n.state = {
      autocomplete: null
    }, n.setAutocompleteCallback = function() {
      n.state.autocomplete !== null && n.props.onLoad && n.props.onLoad(n.state.autocomplete);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n;
    at(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    var r = (n = this.containerElement.current) === null || n === void 0 ? void 0 : n.querySelector("input");
    if (r) {
      var i = new google.maps.places.Autocomplete(r, this.props.options);
      this.registeredEvents = Fe({
        updaterMap: qo,
        eventMap: Vo,
        prevProps: {},
        nextProps: this.props,
        instance: i
      }), this.setState(function() {
        return {
          autocomplete: i
        };
      }, this.setAutocompleteCallback);
    }
  }, e.prototype.componentDidUpdate = function(n) {
    ke(this.registeredEvents), this.registeredEvents = Fe({
      updaterMap: qo,
      eventMap: Vo,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  }, e.prototype.componentWillUnmount = function() {
    this.state.autocomplete !== null && ke(this.registeredEvents);
  }, e.prototype.render = function() {
    return x.jsx("div", { ref: this.containerElement, className: this.props.className, children: zt.only(this.props.children) });
  }, e.defaultProps = {
    className: ""
  }, e.contextType = Ae, e;
})(Ge);
function XD({
  coordinates: t,
  zoom: e = 18,
  draggable: n = !1,
  className: r,
  ...i
}) {
  return t ? /* @__PURE__ */ x.jsx("div", { className: "arkynGoogleMapPinned " + r, ...i, children: /* @__PURE__ */ x.jsx(
    If,
    {
      zoom: e,
      center: t,
      mapContainerStyle: {
        borderRadius: "var(--rounded-cards)",
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ x.jsx(Zf, { draggable: n, position: t })
    }
  ) }) : /* @__PURE__ */ x.jsx("div", { className: "arkynGoogleMapPinnedEmpty " + r, ...i, children: /* @__PURE__ */ x.jsx(Qc, {}) });
}
function JD(t) {
  const { className: e, ...n } = t, r = `arkynSkeleton ${e}`;
  return /* @__PURE__ */ x.jsx("aside", { className: r.trim(), ...n });
}
function QD(t) {
  const {
    emptyMessage: e = "Nenhum dado adicionado.",
    className: n,
    children: r,
    ...i
  } = t, a = `arkynTableBody ${n}`, o = zt.count(r) === 0;
  return /* @__PURE__ */ x.jsx("tbody", { className: a.trim(), ...i, children: o ? /* @__PURE__ */ x.jsx("tr", { className: "arkynTableBodyEmptyLine", children: /* @__PURE__ */ x.jsx("td", { colSpan: 100, children: /* @__PURE__ */ x.jsx("div", { children: e }) }) }) : r });
}
function eb(t) {
  const { className: e, children: n, ...r } = t, i = `arkynTableCaption ${e}`;
  return /* @__PURE__ */ x.jsx("caption", { className: i.trim(), ...r, children: /* @__PURE__ */ x.jsx("div", { className: "arkynTableCaptionContent", children: n }) });
}
function tb(t) {
  const { children: e, className: n, ...r } = t, i = `arkynTableContainer ${n}`;
  return /* @__PURE__ */ x.jsx("div", { className: i.trim(), ...r, children: /* @__PURE__ */ x.jsx("table", { children: e }) });
}
function nb(t) {
  const { className: e, children: n, ...r } = t, i = `arkynTableFooter ${e}`;
  return /* @__PURE__ */ x.jsxs("tfoot", { className: i.trim(), ...r, children: [
    /* @__PURE__ */ x.jsx("tr", { className: "spacingRow" }),
    /* @__PURE__ */ x.jsx("tr", { children: /* @__PURE__ */ x.jsx("th", { colSpan: 100, children: /* @__PURE__ */ x.jsx("div", { className: "arkynTableFooterContent", children: n }) }) })
  ] });
}
function rb(t) {
  const { className: e, children: n, ...r } = t, i = `arkynTableHeader ${e}`;
  return /* @__PURE__ */ x.jsxs("thead", { className: i.trim(), ...r, children: [
    /* @__PURE__ */ x.jsx("tr", { children: n }),
    /* @__PURE__ */ x.jsx("tr", { className: "spacingRow" })
  ] });
}
function ib(t) {
  const {
    isLoading: e = !1,
    scheme: n = "primary",
    variant: r = "solid",
    loadingText: i,
    size: a = "md",
    leftIcon: o,
    rightIcon: s,
    disabled: u,
    className: l = "",
    children: c,
    ...p
  } = t, h = { xs: 12, sm: 16, md: 20, lg: 24 }[a], f = `arkynButton ${e ? "loadingTrue" : "loadingFalse"} ${r} ${n} ${a} ${i ? "loadingTextTrue" : "loadingTextFalse"} ${l}`;
  return /* @__PURE__ */ x.jsxs("button", { className: f, disabled: u || e, ...p, children: [
    /* @__PURE__ */ x.jsxs("div", { className: "arkynButtonSpinner", children: [
      /* @__PURE__ */ x.jsx(Ln, { size: h, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "arkynButtonContent", children: [
      qr(h, o),
      c,
      qr(h, s)
    ] })
  ] });
}
const Dl = ht({});
function ab(t) {
  var p, d;
  const e = rl(), {
    children: n,
    className: r,
    id: i,
    ...a
  } = t, o = qe(null), s = ((p = o.current) == null ? void 0 : p.name) || "", u = ((d = e == null ? void 0 : e.fieldErrors) == null ? void 0 : d[s]) || null, l = Gc(), c = `arkynFormController ${r}`;
  return /* @__PURE__ */ x.jsx(Dl.Provider, { value: { error: u, id: l, inputRef: o }, children: /* @__PURE__ */ x.jsx(
    "section",
    {
      id: i || s || void 0,
      className: c.trim(),
      ...a,
      children: n
    }
  ) });
}
function St() {
  return _e(Dl);
}
function ob(t) {
  const {
    name: e,
    className: n = "",
    size: r = "md",
    isError: i,
    defaultChecked: a = !1,
    checked: o = null,
    onCheck: s,
    value: u,
    ...l
  } = t, { id: c, inputRef: p, error: d } = St(), h = i || !!d, [y, v] = $(a || !1), f = typeof o == "boolean" ? o : y, b = `arkynCheckbox ${r} ${h ? "errorTrue" : "errorFalse"} ${f ? "checkedTrue" : "checkedFalse"} ${n}`;
  function S() {
    const D = y;
    v(!D), s && s(D ? "" : u || "checked");
  }
  return /* @__PURE__ */ x.jsxs(
    "button",
    {
      id: c,
      type: "button",
      className: b,
      onClick: S,
      ...l,
      children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "hidden",
            name: e,
            ref: p,
            value: f ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ x.jsx(el, {})
      ]
    }
  );
}
function sb(t) {
  const { children: e, className: n, ...r } = t, i = `arkynFormError ${n}`, { error: a } = St();
  return e ? /* @__PURE__ */ x.jsx("strong", { className: i.trim(), ...r, children: e }) : a ? /* @__PURE__ */ x.jsx("strong", { className: i.trim(), ...r, children: a }) : /* @__PURE__ */ x.jsx(x.Fragment, {});
}
function ub(t) {
  const {
    showAsterisk: e = !1,
    className: n = "",
    ...r
  } = t, { id: i } = St(), o = `arkynFormLabel ${e ? "asteriskTrue" : "asteriskFalse"} ${n}`;
  return /* @__PURE__ */ x.jsx("label", { className: o.trim(), htmlFor: i, ...r });
}
function sn(t, e, n) {
  if (!t) return /* @__PURE__ */ x.jsx(x.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ x.jsx("p", { className: n, children: t });
  const r = t;
  return /* @__PURE__ */ x.jsx("p", { className: n, children: /* @__PURE__ */ x.jsx(r, { color: "var(--secondary-600)", size: e, strokeWidth: 2.5 }) });
}
function ba(t) {
  return t && t.replace(/[^0-9]/g, "");
}
function bl(t, e) {
  let n = "", r = 0;
  return Array.from(t).forEach((i, a) => {
    e[a + r].match(/[0-9]/) || (n += e[a + r], r++), n += i;
  }), n;
}
function El(t) {
  return t.length > 11 ? "CNPJ" : "CPF";
}
const Ea = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, wl = ba(Ea.CNPJ).length;
function Hd(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: a = "",
    variant: o = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: p,
    defaultValue: d,
    readOnly: h,
    onFocus: y,
    onBlur: v,
    title: f,
    style: C,
    onChange: w,
    ...b
  } = t;
  function S(R) {
    let N = ba(R);
    const J = El(N);
    if (!(N.length > wl))
      return N = bl(N, Ea[J]), N;
  }
  const D = c ? "right" : "left", z = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${o} ${i} ${p || h || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${a}`, T = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: z,
    prefix: sn(s, T, "prefix"),
    sufix: sn(u, T, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    defaultValue: S(d || ""),
    disabled: p,
    readOnly: h,
    onFocus: y,
    onBlur: v,
    title: f,
    style: C,
    onChange: w,
    loadingPosition: D,
    iconSize: T,
    Spinner: /* @__PURE__ */ x.jsx(Ln, { className: "spinner", size: T, strokeWidth: 2.5 }),
    ...b
  };
}
function Vd(t) {
  const [e, n] = $(!1), r = qe(null), { inputRef: i, id: a, error: o } = St(), s = i || r, u = t.isError || !!o, {
    disabled: l,
    title: c,
    style: p,
    className: d,
    prefix: h,
    sufix: y,
    iconSize: v,
    loadingPosition: f,
    isLoading: C,
    LeftIcon: w,
    readOnly: b,
    onFocus: S,
    onBlur: D,
    RightIcon: E,
    Spinner: A,
    onChange: F,
    value: V,
    defaultValue: M,
    ...z
  } = Hd({ ...t, id: a, isError: u }, e), [j, T] = $(M), R = w && !C, N = E && !C, J = f === "left" && C, _ = f === "right" && C;
  function te() {
    l || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function ae(Z) {
    let H = ba(Z.target.value);
    const ee = El(H);
    H.length > wl || (H = bl(H, Ea[ee]), Z.target.value = H, T(H), F && F(Z));
  }
  function k(Z) {
    n(!0), S && S(Z);
  }
  function I(Z) {
    n(!1), D && D(Z);
  }
  return /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: c,
      style: p,
      onClick: te,
      className: d,
      children: [
        h,
        J && A,
        R && /* @__PURE__ */ x.jsx(w, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            disabled: l || C,
            readOnly: b,
            ref: s,
            value: V || j,
            onFocus: k,
            onChange: ae,
            onBlur: I,
            ...z
          }
        ),
        N && /* @__PURE__ */ x.jsx(E, { size: v, strokeWidth: 2.5 }),
        _ && A,
        y
      ]
    }
  );
}
const qd = 3, Zd = (t = "pt-BR", e, n = "BRL", r = !0) => new Intl.NumberFormat(t, {
  style: "currency",
  currency: n,
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(e).slice(r ? qd : 0), Br = 2, Zo = (t) => typeof t == "number" ? t : Number(t.toString().replace(/[^0-9-]/g, "")), Yi = (t) => {
  let e = t;
  return typeof t == "string" ? (e = Zo(t), e % 1 !== 0 && (e = e.toFixed(Br))) : e = Number.isInteger(t) ? Number(t) * 10 ** Br : t.toFixed(Br), Zo(e) / 10 ** Br;
}, Go = (t, e, n) => {
  if (!e) return [0, ""];
  const r = Yi(e), i = Zd(t, r, n);
  return [r, i];
};
function Gd(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: a = "",
    variant: o = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: p,
    readOnly: d,
    onFocus: h,
    onBlur: y,
    title: v,
    style: f,
    // showCents = false,
    max: C = 1e9,
    locale: w = "pt-BR",
    currency: b = "BRL",
    ...S
  } = t, D = c ? "right" : "left", z = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${o} ${i} ${p || d || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${a}`, T = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: z,
    prefix: sn(s, T, "prefix"),
    sufix: sn(u, T, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: p,
    locale: w,
    currency: b,
    readOnly: d,
    onFocus: h,
    onBlur: y,
    title: v,
    style: f,
    max: C,
    // showCents,
    loadingPosition: D,
    iconSize: T,
    Spinner: /* @__PURE__ */ x.jsx(Ln, { className: "spinner", size: T, strokeWidth: 2.5 }),
    ...S
  };
}
function Yd(t) {
  const [e, n] = $(!1), [r, i] = $("0"), a = qe(null), { inputRef: o, id: s, error: u } = St(), l = o || a, c = t.isError || !!u, {
    disabled: p,
    title: d,
    style: h,
    className: y,
    prefix: v,
    sufix: f,
    iconSize: C,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: S,
    readOnly: D,
    onFocus: E,
    onBlur: A,
    RightIcon: F,
    Spinner: V,
    value: M,
    max: z,
    onChangeValue: j,
    onKeyPress: T,
    currency: R,
    locale: N,
    name: J,
    defaultValue: _,
    ...te
  } = Gd({ ...t, id: s, isError: c }, e), ae = S && !b, k = F && !b, I = w === "left" && b, Z = w === "right" && b;
  function H() {
    p || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function ee(P) {
    n(!0), E && E(P);
  }
  function X(P) {
    n(!1), A && A(P);
  }
  const m = (P) => {
    const [Q, ie] = Go(
      N,
      P,
      R
    );
    return !z || Q <= z ? (i(ie), [Q, ie]) : [Yi(r), r];
  }, U = (P) => {
    P.preventDefault();
    const [Q, ie] = m(P.target.value);
    j(P, String(Q), String(ie));
  }, W = (P) => T && T(P, P.key, P.key);
  return B(() => {
    const P = M || +_ || void 0, [, Q] = Go(N, P, R);
    i(Q);
  }, [R, _, M]), /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: d,
      style: h,
      onClick: H,
      className: y,
      children: [
        v,
        I && V,
        ae && /* @__PURE__ */ x.jsx(S, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            value: r,
            onChange: U,
            onBlur: X,
            onFocus: ee,
            onKeyUp: W,
            disabled: p || b,
            readOnly: D,
            ...te
          }
        ),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "hidden",
            ref: l,
            name: J,
            value: Yi(r)
          }
        ),
        Z && V,
        k && /* @__PURE__ */ x.jsx(F, { size: C, strokeWidth: 2.5 }),
        f
      ]
    }
  );
}
function Kd(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: a = "",
    variant: o = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: p,
    readOnly: d,
    onFocus: h,
    onBlur: y,
    title: v,
    style: f,
    onChange: C,
    showMask: w = !1,
    type: b,
    ...S
  } = t, D = c ? "right" : "left", z = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${o} ${i} ${p || d || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${a}`, T = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: z,
    prefix: sn(s, T, "prefix"),
    sufix: sn(u, T, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: p,
    readOnly: d,
    onFocus: h,
    onBlur: y,
    title: v,
    style: f,
    onChange: C,
    loadingPosition: D,
    iconSize: T,
    showMask: w,
    Spinner: /* @__PURE__ */ x.jsx(Ln, { className: "spinner", size: T, strokeWidth: 2.5 }),
    ...S
  };
}
const Xd = va((t, e) => /* @__PURE__ */ x.jsx("input", { ref: e, ...t }));
function Jd(t) {
  const [e, n] = $(!1), r = qe(null), { inputRef: i, id: a, error: o } = St(), s = i || r, u = t.isError || !!o, {
    disabled: l,
    title: c,
    style: p,
    className: d,
    prefix: h,
    sufix: y,
    iconSize: v,
    loadingPosition: f,
    isLoading: C,
    LeftIcon: w,
    readOnly: b,
    onFocus: S,
    onBlur: D,
    RightIcon: E,
    Spinner: A,
    ...F
  } = Kd({ ...t, id: a, isError: u }, e), V = w && !C, M = E && !C, z = f === "left" && C, j = f === "right" && C;
  function T() {
    l || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function R(J) {
    n(!0), S && S(J);
  }
  function N(J) {
    n(!1), D && D(J);
  }
  return /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: c,
      style: p,
      onClick: T,
      className: d,
      children: [
        h,
        z && A,
        V && /* @__PURE__ */ x.jsx(w, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          mf,
          {
            component: Xd,
            ref: s,
            onFocus: R,
            onBlur: N,
            disabled: l,
            ...F
          }
        ),
        M && /* @__PURE__ */ x.jsx(E, { size: v, strokeWidth: 2.5 }),
        j && A,
        y
      ]
    }
  );
}
function Qd(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: a = "",
    variant: o = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: p,
    readOnly: d,
    onFocus: h,
    onBlur: y,
    title: v,
    style: f,
    onChange: C,
    ...w
  } = t, b = c ? "right" : "left", V = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${o} ${i} ${p || d || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${a}`, z = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: V,
    prefix: sn(s, z, "prefix"),
    sufix: sn(u, z, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: p,
    readOnly: d,
    onFocus: h,
    onBlur: y,
    title: v,
    style: f,
    onChange: C,
    loadingPosition: b,
    iconSize: z,
    Spinner: /* @__PURE__ */ x.jsx(Ln, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...w
  };
}
function ep(t) {
  const [e, n] = $(!1), r = qe(null), { inputRef: i, id: a, error: o } = St(), s = i || r, u = t.isError || !!o, {
    disabled: l,
    title: c,
    style: p,
    className: d,
    prefix: h,
    sufix: y,
    iconSize: v,
    loadingPosition: f,
    isLoading: C,
    LeftIcon: w,
    readOnly: b,
    onFocus: S,
    onBlur: D,
    RightIcon: E,
    type: A,
    Spinner: F,
    ...V
  } = Qd({ ...t, id: a, isError: u }, e), M = w && !C, z = E && !C, j = f === "left" && C, T = f === "right" && C;
  function R() {
    l || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function N(_) {
    n(!0), S && S(_);
  }
  function J(_) {
    n(!1), D && D(_);
  }
  return A === "hidden" ? /* @__PURE__ */ x.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: s,
      ...V
    }
  ) : /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: c,
      style: p,
      onClick: R,
      className: d,
      children: [
        h,
        j && F,
        M && /* @__PURE__ */ x.jsx(w, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            disabled: l || C,
            readOnly: b,
            ref: s,
            onFocus: N,
            onBlur: J,
            type: A,
            ...V
          }
        ),
        z && /* @__PURE__ */ x.jsx(E, { size: v, strokeWidth: 2.5 }),
        T && F,
        y
      ]
    }
  );
}
function tp(t) {
  return t.type === "currency" ? /* @__PURE__ */ x.jsx(Yd, { ...t }) : t.type === "masked" ? /* @__PURE__ */ x.jsx(Jd, { ...t }) : t.type === "cpf-cnpj" ? /* @__PURE__ */ x.jsx(Vd, { ...t }) : /* @__PURE__ */ x.jsx(ep, { ...t });
}
function lb({
  onChange: t,
  onPlaceChanged: e,
  options: n,
  ...r
}) {
  const [i, a] = $(null), o = (u) => a(u), s = () => {
    var h, y, v, f;
    const l = i.getPlaces()[0], c = l == null ? void 0 : l.address_components;
    function p(C) {
      const w = c.find((b) => b.types[0] === C);
      return w ? w.long_name : "";
    }
    function d(C) {
      const w = c.find((b) => b.types[0] === C);
      return w ? w.short_name : "";
    }
    if (l) {
      const C = p("route"), w = p("street_number"), b = p("sublocality_level_1"), S = p("administrative_area_level_2"), D = p("administrative_area_level_1"), E = d("administrative_area_level_1"), A = p("postal_code"), F = (y = (h = l.geometry) == null ? void 0 : h.location) == null ? void 0 : y.lat(), V = (f = (v = l.geometry) == null ? void 0 : v.location) == null ? void 0 : f.lng();
      e && e({
        street: C,
        city: S,
        state: D,
        district: b,
        cep: A,
        streetNumber: w,
        stateShortName: E,
        coordinates: { lat: F, lng: V }
      });
    }
  };
  return /* @__PURE__ */ x.jsx(
    Ud,
    {
      onLoad: o,
      onPlacesChanged: s,
      options: n,
      children: /* @__PURE__ */ x.jsx(tp, { type: "text", onChange: (u) => t(u.target.value), ...r })
    }
  );
}
function cb(t) {
  const {
    isLoading: e = !1,
    scheme: n = "primary",
    variant: r = "solid",
    size: i = "md",
    icon: a,
    disabled: o,
    className: s = "",
    ...u
  } = t, l = { xs: 12, sm: 16, md: 20, lg: 24 }, p = `arkynIconButton ${r} ${n} ${i} ${e ? "loadingTrue" : "loadingFalse"} ${s}`;
  return /* @__PURE__ */ x.jsxs(
    "button",
    {
      disabled: o || e,
      className: p.trim(),
      ...u,
      children: [
        /* @__PURE__ */ x.jsx("div", { className: "arkynIconButtonSpinner", children: /* @__PURE__ */ x.jsx(Ln, { size: l[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ x.jsx("div", { className: "arkynIconButtonContent", children: /* @__PURE__ */ x.jsx(a, { size: l[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
const Bl = ht({});
function np() {
  return _e(Bl);
}
function fb(t) {
  const {
    defaultValue: e,
    name: n,
    value: r,
    onChange: i,
    size: a = "md",
    className: o = "",
    ...s
  } = t, [u, l] = $(e || ""), { inputRef: c, id: p } = St();
  function d(y) {
    l(y), i && i(y);
  }
  const h = `arkynRadioGroup ${a} ${o}`;
  return /* @__PURE__ */ x.jsxs(
    Bl.Provider,
    {
      value: { onChange: d, value: r || u, size: a },
      children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: p,
            readOnly: !0,
            name: n,
            ref: c,
            value: r || u
          }
        ),
        /* @__PURE__ */ x.jsx("div", { className: h.trim(), ...s })
      ]
    }
  );
}
function db(t) {
  const {
    value: e,
    size: n,
    disabled: r,
    children: i,
    className: a = "",
    ...o
  } = t, { onChange: s, size: u, value: l } = np(), { error: c } = St(), v = `arkynRadioBox ${n || u} ${l === e ? "checkedTrue" : "checkedFalse"} ${c ? "errorTrue" : "errorFalse"} ${r ? "disabledTrue" : "disabledFalse"} ${a}`;
  return /* @__PURE__ */ x.jsxs("label", { className: v.trim(), children: [
    /* @__PURE__ */ x.jsx(
      "button",
      {
        type: "button",
        disabled: r,
        onClick: () => s(e),
        onFocus: () => s(e),
        ...o
      }
    ),
    i
  ] });
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
var rp = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), Ci = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, xl = {
  add: "+",
  break: "pause",
  cmd: "meta",
  command: "meta",
  ctl: "control",
  ctrl: "control",
  del: "delete",
  down: "arrowdown",
  esc: "escape",
  ins: "insert",
  left: "arrowleft",
  mod: rp ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, wa = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  " ": 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ";": 186,
  "=": 187,
  ",": 188,
  "-": 189,
  ".": 190,
  "/": 191,
  "`": 192,
  "[": 219,
  "\\": 220,
  "]": 221,
  "'": 222
};
for (var xr = 1; xr < 20; xr++)
  wa["f" + xr] = 111 + xr;
function ri(t, e, n) {
  e && !("byKey" in e) && (n = e, e = null), Array.isArray(t) || (t = [t]);
  var r = t.map(function(o) {
    return Ll(o, e);
  }), i = function(s) {
    return r.some(function(u) {
      return Al(u, s);
    });
  }, a = n == null ? i : i(n);
  return a;
}
function ip(t, e) {
  return ri(t, e);
}
function ap(t, e) {
  return ri(t, { byKey: !0 }, e);
}
function Ll(t, e) {
  var n = e && e.byKey, r = {};
  t = t.replace("++", "+add");
  var i = t.split("+"), a = i.length;
  for (var o in Ci)
    r[Ci[o]] = !1;
  var s = !0, u = !1, l = void 0;
  try {
    for (var c = i[Symbol.iterator](), p; !(s = (p = c.next()).done); s = !0) {
      var d = p.value, h = d.endsWith("?") && d.length > 1;
      h && (d = d.slice(0, -1));
      var y = Ba(d), v = Ci[y];
      if (d.length > 1 && !v && !xl[d] && !wa[y])
        throw new TypeError('Unknown modifier: "' + d + '"');
      (a === 1 || !v) && (n ? r.key = y : r.which = Ol(d)), v && (r[v] = h ? null : !0);
    }
  } catch (f) {
    u = !0, l = f;
  } finally {
    try {
      !s && c.return && c.return();
    } finally {
      if (u)
        throw l;
    }
  }
  return r;
}
function Al(t, e) {
  for (var n in t) {
    var r = t[n], i = void 0;
    if (r != null && (n === "key" && e.key != null ? i = e.key.toLowerCase() : n === "which" ? i = r === 91 && e.which === 93 ? 91 : e.which : i = e[n], !(i == null && r === !1) && i !== r))
      return !1;
  }
  return !0;
}
function Ol(t) {
  t = Ba(t);
  var e = wa[t] || t.toUpperCase().charCodeAt(0);
  return e;
}
function Ba(t) {
  return t = t.toLowerCase(), t = xl[t] || t, t;
}
var op = Gt.default = ri, Di = Gt.isHotkey = ri;
Gt.isCodeHotkey = ip;
Gt.isKeyHotkey = ap;
Gt.parseHotkey = Ll;
Gt.compareHotkey = Al;
Gt.toKeyCode = Ol;
Gt.toKeyName = Ba;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Yo(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function gt(t) {
  var e, n;
  return Yo(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (n = e.prototype, !(Yo(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
var Sl = Symbol.for("immer-nothing"), Ko = Symbol.for("immer-draftable"), At = Symbol.for("immer-state"), sp = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function wt(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const n = sp[t], r = typeof n == "function" ? n.apply(null, e) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Rn = Object.getPrototypeOf;
function wn(t) {
  return !!t && !!t[At];
}
function Bn(t) {
  var e;
  return t ? Fl(t) || Array.isArray(t) || !!t[Ko] || !!((e = t.constructor) != null && e[Ko]) || ai(t) || oi(t) : !1;
}
var up = Object.prototype.constructor.toString();
function Fl(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = Rn(t);
  if (e === null)
    return !0;
  const n = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === up;
}
function Gr(t, e) {
  ii(t) === 0 ? Reflect.ownKeys(t).forEach((n) => {
    e(n, t[n], t);
  }) : t.forEach((n, r) => e(r, n, t));
}
function ii(t) {
  const e = t[At];
  return e ? e.type_ : Array.isArray(t) ? 1 : ai(t) ? 2 : oi(t) ? 3 : 0;
}
function Ki(t, e) {
  return ii(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function Ml(t, e, n) {
  const r = ii(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : t[e] = n;
}
function lp(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function ai(t) {
  return t instanceof Map;
}
function oi(t) {
  return t instanceof Set;
}
function vn(t) {
  return t.copy_ || t.base_;
}
function Xi(t, e) {
  if (ai(t))
    return new Map(t);
  if (oi(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const n = Fl(t);
  if (e === !0 || e === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(t);
    delete r[At];
    let i = Reflect.ownKeys(r);
    for (let a = 0; a < i.length; a++) {
      const o = i[a], s = r[o];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[o] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: t[o]
      });
    }
    return Object.create(Rn(t), r);
  } else {
    const r = Rn(t);
    if (r !== null && n)
      return { ...t };
    const i = Object.create(r);
    return Object.assign(i, t);
  }
}
function xa(t, e = !1) {
  return si(t) || wn(t) || !Bn(t) || (ii(t) > 1 && (t.set = t.add = t.clear = t.delete = cp), Object.freeze(t), e && Object.entries(t).forEach(([n, r]) => xa(r, !0))), t;
}
function cp() {
  wt(2);
}
function si(t) {
  return Object.isFrozen(t);
}
var fp = {};
function xn(t) {
  const e = fp[t];
  return e || wt(0, t), e;
}
var ir;
function Pl() {
  return ir;
}
function dp(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Xo(t, e) {
  e && (xn("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function Ji(t) {
  Qi(t), t.drafts_.forEach(pp), t.drafts_ = null;
}
function Qi(t) {
  t === ir && (ir = t.parent_);
}
function Jo(t) {
  return ir = dp(ir, t);
}
function pp(t) {
  const e = t[At];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function Qo(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const n = e.drafts_[0];
  return t !== void 0 && t !== n ? (n[At].modified_ && (Ji(e), wt(4)), Bn(t) && (t = Yr(e, t), e.parent_ || Kr(e, t)), e.patches_ && xn("Patches").generateReplacementPatches_(
    n[At].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = Yr(e, n, []), Ji(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== Sl ? t : void 0;
}
function Yr(t, e, n) {
  if (si(e))
    return e;
  const r = e[At];
  if (!r)
    return Gr(
      e,
      (i, a) => es(t, r, e, i, a, n)
    ), e;
  if (r.scope_ !== t)
    return e;
  if (!r.modified_)
    return Kr(t, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let a = i, o = !1;
    r.type_ === 3 && (a = new Set(i), i.clear(), o = !0), Gr(
      a,
      (s, u) => es(t, r, i, s, u, n, o)
    ), Kr(t, i, !1), n && t.patches_ && xn("Patches").generatePatches_(
      r,
      n,
      t.patches_,
      t.inversePatches_
    );
  }
  return r.copy_;
}
function es(t, e, n, r, i, a, o) {
  if (process.env.NODE_ENV !== "production" && i === n && wt(5), wn(i)) {
    const s = a && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Ki(e.assigned_, r) ? a.concat(r) : void 0, u = Yr(t, i, s);
    if (Ml(n, r, u), wn(u))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else o && n.add(i);
  if (Bn(i) && !si(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    Yr(t, i), (!e || !e.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && Kr(t, i);
  }
}
function Kr(t, e, n = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && xa(e, n);
}
function hp(t, e) {
  const n = Array.isArray(t), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Pl(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, a = La;
  n && (i = [r], a = ar);
  const { revoke: o, proxy: s } = Proxy.revocable(i, a);
  return r.draft_ = s, r.revoke_ = o, s;
}
var La = {
  get(t, e) {
    if (e === At)
      return t;
    const n = vn(t);
    if (!Ki(n, e))
      return vp(t, n, e);
    const r = n[e];
    return t.finalized_ || !Bn(r) ? r : r === bi(t.base_, e) ? (Ei(t), t.copy_[e] = ta(r, t)) : r;
  },
  has(t, e) {
    return e in vn(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(vn(t));
  },
  set(t, e, n) {
    const r = kl(vn(t), e);
    if (r != null && r.set)
      return r.set.call(t.draft_, n), !0;
    if (!t.modified_) {
      const i = bi(vn(t), e), a = i == null ? void 0 : i[At];
      if (a && a.base_ === n)
        return t.copy_[e] = n, t.assigned_[e] = !1, !0;
      if (lp(n, i) && (n !== void 0 || Ki(t.base_, e)))
        return !0;
      Ei(t), ea(t);
    }
    return t.copy_[e] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = n, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return bi(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, Ei(t), ea(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const n = vn(t), r = Reflect.getOwnPropertyDescriptor(n, e);
    return r && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: r.enumerable,
      value: n[e]
    };
  },
  defineProperty() {
    wt(11);
  },
  getPrototypeOf(t) {
    return Rn(t.base_);
  },
  setPrototypeOf() {
    wt(12);
  }
}, ar = {};
Gr(La, (t, e) => {
  ar[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
ar.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && wt(13), ar.set.call(this, t, e, void 0);
};
ar.set = function(t, e, n) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && wt(14), La.set.call(this, t[0], e, n, t[0]);
};
function bi(t, e) {
  const n = t[At];
  return (n ? vn(n) : t)[e];
}
function vp(t, e, n) {
  var i;
  const r = kl(e, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function kl(t, e) {
  if (!(e in t))
    return;
  let n = Rn(t);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, e);
    if (r)
      return r;
    n = Rn(n);
  }
}
function ea(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && ea(t.parent_));
}
function Ei(t) {
  t.copy_ || (t.copy_ = Xi(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var gp = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, n, r) => {
      if (typeof e == "function" && typeof n != "function") {
        const a = n;
        n = e;
        const o = this;
        return function(u = a, ...l) {
          return o.produce(u, (c) => n.call(this, c, ...l));
        };
      }
      typeof n != "function" && wt(6), r !== void 0 && typeof r != "function" && wt(7);
      let i;
      if (Bn(e)) {
        const a = Jo(this), o = ta(e, void 0);
        let s = !0;
        try {
          i = n(o), s = !1;
        } finally {
          s ? Ji(a) : Qi(a);
        }
        return Xo(a, r), Qo(i, a);
      } else if (!e || typeof e != "object") {
        if (i = n(e), i === void 0 && (i = e), i === Sl && (i = void 0), this.autoFreeze_ && xa(i, !0), r) {
          const a = [], o = [];
          xn("Patches").generateReplacementPatches_(e, i, a, o), r(a, o);
        }
        return i;
      } else
        wt(1, e);
    }, this.produceWithPatches = (e, n) => {
      if (typeof e == "function")
        return (o, ...s) => this.produceWithPatches(o, (u) => e(u, ...s));
      let r, i;
      return [this.produce(e, n, (o, s) => {
        r = o, i = s;
      }), r, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Bn(t) || wt(8), wn(t) && (t = mp(t));
    const e = Jo(this), n = ta(t, void 0);
    return n[At].isManual_ = !0, Qi(e), n;
  }
  finishDraft(t, e) {
    const n = t && t[At];
    (!n || !n.isManual_) && wt(9);
    const { scope_: r } = n;
    return Xo(r, e), Qo(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let n;
    for (n = e.length - 1; n >= 0; n--) {
      const i = e[n];
      if (i.path.length === 0 && i.op === "replace") {
        t = i.value;
        break;
      }
    }
    n > -1 && (e = e.slice(n + 1));
    const r = xn("Patches").applyPatches_;
    return wn(t) ? r(t, e) : this.produce(
      t,
      (i) => r(i, e)
    );
  }
};
function ta(t, e) {
  const n = ai(t) ? xn("MapSet").proxyMap_(t, e) : oi(t) ? xn("MapSet").proxySet_(t, e) : hp(t, e);
  return (e ? e.scope_ : Pl()).drafts_.push(n), n;
}
function mp(t) {
  return wn(t) || wt(10, t), Tl(t);
}
function Tl(t) {
  if (!Bn(t) || si(t))
    return t;
  const e = t[At];
  let n;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, n = Xi(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    n = Xi(t, !0);
  return Gr(n, (r, i) => {
    Ml(n, r, Tl(i));
  }), e && (e.finalized_ = !1), n;
}
var Ot = new gp(), Aa = Ot.produce;
Ot.produceWithPatches.bind(
  Ot
);
Ot.setAutoFreeze.bind(Ot);
Ot.setUseStrictShallowCopy.bind(Ot);
Ot.applyPatches.bind(Ot);
var ts = Ot.createDraft.bind(Ot), ns = Ot.finishDraft.bind(Ot), yp = {
  transform(t, e) {
    var {
      current: n,
      affinity: r
    } = t;
    if (n != null) {
      var i = O.transform(n, e, {
        affinity: r
      });
      t.current = i, i == null && t.unref();
    }
  }
}, Cp = {
  transform(t, e) {
    var {
      current: n,
      affinity: r
    } = t;
    if (n != null) {
      var i = Se.transform(n, e, {
        affinity: r
      });
      t.current = i, i == null && t.unref();
    }
  }
}, Dp = {
  transform(t, e) {
    var {
      current: n,
      affinity: r
    } = t;
    if (n != null) {
      var i = q.transform(n, e, {
        affinity: r
      });
      t.current = i, i == null && t.unref();
    }
  }
}, Xr = /* @__PURE__ */ new WeakMap(), Jr = /* @__PURE__ */ new WeakMap(), Qn = /* @__PURE__ */ new WeakMap(), Rl = /* @__PURE__ */ new WeakMap(), rs = /* @__PURE__ */ new WeakMap(), is = /* @__PURE__ */ new WeakMap(), as = /* @__PURE__ */ new WeakMap(), O = {
  ancestors(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = e, r = O.levels(t, e);
    return n ? r = r.slice(1) : r = r.slice(0, -1), r;
  },
  common(t, e) {
    for (var n = [], r = 0; r < t.length && r < e.length; r++) {
      var i = t[r], a = e[r];
      if (i !== a)
        break;
      n.push(i);
    }
    return n;
  },
  compare(t, e) {
    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
      if (t[r] < e[r]) return -1;
      if (t[r] > e[r]) return 1;
    }
    return 0;
  },
  endsAfter(t, e) {
    var n = t.length - 1, r = t.slice(0, n), i = e.slice(0, n), a = t[n], o = e[n];
    return O.equals(r, i) && a > o;
  },
  endsAt(t, e) {
    var n = t.length, r = t.slice(0, n), i = e.slice(0, n);
    return O.equals(r, i);
  },
  endsBefore(t, e) {
    var n = t.length - 1, r = t.slice(0, n), i = e.slice(0, n), a = t[n], o = e[n];
    return O.equals(r, i) && a < o;
  },
  equals(t, e) {
    return t.length === e.length && t.every((n, r) => n === e[r]);
  },
  hasPrevious(t) {
    return t[t.length - 1] > 0;
  },
  isAfter(t, e) {
    return O.compare(t, e) === 1;
  },
  isAncestor(t, e) {
    return t.length < e.length && O.compare(t, e) === 0;
  },
  isBefore(t, e) {
    return O.compare(t, e) === -1;
  },
  isChild(t, e) {
    return t.length === e.length + 1 && O.compare(t, e) === 0;
  },
  isCommon(t, e) {
    return t.length <= e.length && O.compare(t, e) === 0;
  },
  isDescendant(t, e) {
    return t.length > e.length && O.compare(t, e) === 0;
  },
  isParent(t, e) {
    return t.length + 1 === e.length && O.compare(t, e) === 0;
  },
  isPath(t) {
    return Array.isArray(t) && (t.length === 0 || typeof t[0] == "number");
  },
  isSibling(t, e) {
    if (t.length !== e.length)
      return !1;
    var n = t.slice(0, -1), r = e.slice(0, -1), i = t[t.length - 1], a = e[e.length - 1];
    return i !== a && O.equals(n, r);
  },
  levels(t) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = e, r = [], i = 0; i <= t.length; i++)
      r.push(t.slice(0, i));
    return n && r.reverse(), r;
  },
  next(t) {
    if (t.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(t, "], because it has no next index."));
    var e = t[t.length - 1];
    return t.slice(0, -1).concat(e + 1);
  },
  operationCanTransformPath(t) {
    switch (t.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(t) {
    if (t.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(t, "]."));
    return t.slice(0, -1);
  },
  previous(t) {
    if (t.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(t, "], because it has no previous index."));
    var e = t[t.length - 1];
    if (e <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(t, "] because it would result in a negative index."));
    return t.slice(0, -1).concat(e - 1);
  },
  relative(t, e) {
    if (!O.isAncestor(e, t) && !O.equals(t, e))
      throw new Error("Cannot get the relative path of [".concat(t, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return t.slice(e.length);
  },
  transform(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t) return null;
    var r = [...t], {
      affinity: i = "forward"
    } = n;
    if (t.length === 0)
      return r;
    switch (e.type) {
      case "insert_node": {
        var {
          path: a
        } = e;
        (O.equals(a, r) || O.endsBefore(a, r) || O.isAncestor(a, r)) && (r[a.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: o
        } = e;
        if (O.equals(o, r) || O.isAncestor(o, r))
          return null;
        O.endsBefore(o, r) && (r[o.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: s,
          position: u
        } = e;
        O.equals(s, r) || O.endsBefore(s, r) ? r[s.length - 1] -= 1 : O.isAncestor(s, r) && (r[s.length - 1] -= 1, r[s.length] += u);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = e;
        if (O.equals(l, r)) {
          if (i === "forward")
            r[r.length - 1] += 1;
          else if (i !== "backward") return null;
        } else O.endsBefore(l, r) ? r[l.length - 1] += 1 : O.isAncestor(l, r) && t[l.length] >= c && (r[l.length - 1] += 1, r[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: p,
          newPath: d
        } = e;
        if (O.equals(p, d))
          return r;
        if (O.isAncestor(p, r) || O.equals(p, r)) {
          var h = d.slice();
          return O.endsBefore(p, d) && p.length < d.length && (h[p.length - 1] -= 1), h.concat(r.slice(p.length));
        } else O.isSibling(p, d) && (O.isAncestor(d, r) || O.equals(d, r)) ? O.endsBefore(p, r) ? r[p.length - 1] -= 1 : r[p.length - 1] += 1 : O.endsBefore(d, r) || O.equals(d, r) || O.isAncestor(d, r) ? (O.endsBefore(p, r) && (r[p.length - 1] -= 1), r[d.length - 1] += 1) : O.endsBefore(p, r) && (O.equals(d, r) && (r[d.length - 1] += 1), r[p.length - 1] -= 1);
        break;
      }
    }
    return r;
  }
};
function or(t) {
  "@babel/helpers - typeof";
  return or = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, or(t);
}
function bp(t, e) {
  if (or(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (or(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Ep(t) {
  var e = bp(t, "string");
  return or(e) === "symbol" ? e : String(e);
}
function bt(t, e, n) {
  return e = Ep(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function os(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? os(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : os(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var wp = (t, e, n) => {
  switch (n.type) {
    case "insert_node": {
      var {
        path: r,
        node: i
      } = n, a = oe.parent(t, r), o = r[r.length - 1];
      if (o > a.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
      if (a.children.splice(o, 0, i), e)
        for (var [s, u] of q.points(e))
          e[u] = Se.transform(s, n);
      break;
    }
    case "insert_text": {
      var {
        path: l,
        offset: c,
        text: p
      } = n;
      if (p.length === 0) break;
      var d = oe.leaf(t, l), h = d.text.slice(0, c), y = d.text.slice(c);
      if (d.text = h + p + y, e)
        for (var [v, f] of q.points(e))
          e[f] = Se.transform(v, n);
      break;
    }
    case "merge_node": {
      var {
        path: C
      } = n, w = oe.get(t, C), b = O.previous(C), S = oe.get(t, b), D = oe.parent(t, C), E = C[C.length - 1];
      if (de.isText(w) && de.isText(S))
        S.text += w.text;
      else if (!de.isText(w) && !de.isText(S))
        S.children.push(...w.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(C, "] to nodes of different interfaces: ").concat(pt.stringify(w), " ").concat(pt.stringify(S)));
      if (D.children.splice(E, 1), e)
        for (var [A, F] of q.points(e))
          e[F] = Se.transform(A, n);
      break;
    }
    case "move_node": {
      var {
        path: V,
        newPath: M
      } = n;
      if (O.isAncestor(V, M))
        throw new Error("Cannot move a path [".concat(V, "] to new path [").concat(M, "] because the destination is inside itself."));
      var z = oe.get(t, V), j = oe.parent(t, V), T = V[V.length - 1];
      j.children.splice(T, 1);
      var R = O.transform(V, n), N = oe.get(t, O.parent(R)), J = R[R.length - 1];
      if (N.children.splice(J, 0, z), e)
        for (var [_, te] of q.points(e))
          e[te] = Se.transform(_, n);
      break;
    }
    case "remove_node": {
      var {
        path: ae
      } = n, k = ae[ae.length - 1], I = oe.parent(t, ae);
      if (I.children.splice(k, 1), e)
        for (var [Z, H] of q.points(e)) {
          var ee = Se.transform(Z, n);
          if (e != null && ee != null)
            e[H] = ee;
          else {
            var X = void 0, m = void 0;
            for (var [U, W] of oe.texts(t))
              if (O.compare(W, ae) === -1)
                X = [U, W];
              else {
                m = [U, W];
                break;
              }
            var P = !1;
            X && m && (O.equals(m[1], ae) ? P = !O.hasPrevious(m[1]) : P = O.common(X[1], ae).length < O.common(m[1], ae).length), X && !P ? (Z.path = X[1], Z.offset = X[0].text.length) : m ? (Z.path = m[1], Z.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: Q,
        offset: ie,
        text: G
      } = n;
      if (G.length === 0) break;
      var ce = oe.leaf(t, Q), se = ce.text.slice(0, ie), he = ce.text.slice(ie + G.length);
      if (ce.text = se + he, e)
        for (var [ve, De] of q.points(e))
          e[De] = Se.transform(ve, n);
      break;
    }
    case "set_node": {
      var {
        path: Ce,
        properties: me,
        newProperties: ge
      } = n;
      if (Ce.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var Ie = oe.get(t, Ce);
      for (var le in ge) {
        if (le === "children" || le === "text")
          throw new Error('Cannot set the "'.concat(le, '" property of nodes!'));
        var Ne = ge[le];
        Ne == null ? delete Ie[le] : Ie[le] = Ne;
      }
      for (var pe in me)
        ge.hasOwnProperty(pe) || delete Ie[pe];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Be
      } = n;
      if (Be == null)
        e = Be;
      else {
        if (e == null) {
          if (!q.isRange(Be))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(pt.stringify(Be), " when there is no current selection."));
          e = Yn({}, Be);
        }
        for (var Me in Be) {
          var We = Be[Me];
          if (We == null) {
            if (Me === "anchor" || Me === "focus")
              throw new Error('Cannot remove the "'.concat(Me, '" selection property'));
            delete e[Me];
          } else
            e[Me] = We;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: Ye,
        position: we,
        properties: dt
      } = n;
      if (Ye.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(Ye, "] because the root node cannot be split."));
      var ct = oe.get(t, Ye), kt = oe.parent(t, Ye), mt = Ye[Ye.length - 1], Bt;
      if (de.isText(ct)) {
        var jt = ct.text.slice(0, we), yt = ct.text.slice(we);
        ct.text = jt, Bt = Yn(Yn({}, dt), {}, {
          text: yt
        });
      } else {
        var Yt = ct.children.slice(0, we), Ee = ct.children.slice(we);
        ct.children = Yt, Bt = Yn(Yn({}, dt), {}, {
          children: Ee
        });
      }
      if (kt.children.splice(mt + 1, 0, Bt), e)
        for (var [Te, Re] of q.points(e))
          e[Re] = Se.transform(Te, n);
      break;
    }
  }
  return e;
}, Bp = {
  transform(t, e) {
    t.children = ts(t.children);
    var n = t.selection && ts(t.selection);
    try {
      n = wp(t, n, e);
    } finally {
      t.children = ns(t.children), n ? t.selection = wn(n) ? ns(n) : n : t.selection = null;
    }
  }
}, xp = {
  insertNodes(t, e, n) {
    t.insertNodes(e, n);
  },
  liftNodes(t, e) {
    t.liftNodes(e);
  },
  mergeNodes(t, e) {
    t.mergeNodes(e);
  },
  moveNodes(t, e) {
    t.moveNodes(e);
  },
  removeNodes(t, e) {
    t.removeNodes(e);
  },
  setNodes(t, e, n) {
    t.setNodes(e, n);
  },
  splitNodes(t, e) {
    t.splitNodes(e);
  },
  unsetNodes(t, e, n) {
    t.unsetNodes(e, n);
  },
  unwrapNodes(t, e) {
    t.unwrapNodes(e);
  },
  wrapNodes(t, e, n) {
    t.wrapNodes(e, n);
  }
}, Lp = {
  collapse(t, e) {
    t.collapse(e);
  },
  deselect(t) {
    t.deselect();
  },
  move(t, e) {
    t.move(e);
  },
  select(t, e) {
    t.select(e);
  },
  setPoint(t, e, n) {
    t.setPoint(e, n);
  },
  setSelection(t, e) {
    t.setSelection(e);
  }
}, jl = (t, e) => {
  for (var n in t) {
    var r = t[n], i = e[n];
    if (gt(r) && gt(i)) {
      if (!jl(r, i)) return !1;
    } else if (Array.isArray(r) && Array.isArray(i)) {
      if (r.length !== i.length) return !1;
      for (var a = 0; a < r.length; a++)
        if (r[a] !== i[a]) return !1;
    } else if (r !== i)
      return !1;
  }
  for (var o in e)
    if (t[o] === void 0 && e[o] !== void 0)
      return !1;
  return !0;
};
function Ap(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Zt(t, e) {
  if (t == null) return {};
  var n = Ap(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
var Op = ["anchor", "focus"];
function ss(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Sp(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ss(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ss(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var q = {
  edges(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = e, {
      anchor: r,
      focus: i
    } = t;
    return q.isBackward(t) === n ? [r, i] : [i, r];
  },
  end(t) {
    var [, e] = q.edges(t);
    return e;
  },
  equals(t, e) {
    return Se.equals(t.anchor, e.anchor) && Se.equals(t.focus, e.focus);
  },
  includes(t, e) {
    if (q.isRange(e)) {
      if (q.includes(t, e.anchor) || q.includes(t, e.focus))
        return !0;
      var [n, r] = q.edges(t), [i, a] = q.edges(e);
      return Se.isBefore(n, i) && Se.isAfter(r, a);
    }
    var [o, s] = q.edges(t), u = !1, l = !1;
    return Se.isPoint(e) ? (u = Se.compare(e, o) >= 0, l = Se.compare(e, s) <= 0) : (u = O.compare(e, o.path) >= 0, l = O.compare(e, s.path) <= 0), u && l;
  },
  intersection(t, e) {
    var n = Zt(t, Op), [r, i] = q.edges(t), [a, o] = q.edges(e), s = Se.isBefore(r, a) ? a : r, u = Se.isBefore(i, o) ? i : o;
    return Se.isBefore(u, s) ? null : Sp({
      anchor: s,
      focus: u
    }, n);
  },
  isBackward(t) {
    var {
      anchor: e,
      focus: n
    } = t;
    return Se.isAfter(e, n);
  },
  isCollapsed(t) {
    var {
      anchor: e,
      focus: n
    } = t;
    return Se.equals(e, n);
  },
  isExpanded(t) {
    return !q.isCollapsed(t);
  },
  isForward(t) {
    return !q.isBackward(t);
  },
  isRange(t) {
    return gt(t) && Se.isPoint(t.anchor) && Se.isPoint(t.focus);
  },
  *points(t) {
    yield [t.anchor, "anchor"], yield [t.focus, "focus"];
  },
  start(t) {
    var [e] = q.edges(t);
    return e;
  },
  transform(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Aa(t, (r) => {
      if (r === null)
        return null;
      var {
        affinity: i = "inward"
      } = n, a, o;
      if (i === "inward") {
        var s = q.isCollapsed(r);
        q.isForward(r) ? (a = "forward", o = s ? a : "backward") : (a = "backward", o = s ? a : "forward");
      } else i === "outward" ? q.isForward(r) ? (a = "backward", o = "forward") : (a = "forward", o = "backward") : (a = i, o = i);
      var u = Se.transform(r.anchor, e, {
        affinity: a
      }), l = Se.transform(r.focus, e, {
        affinity: o
      });
      if (!u || !l)
        return null;
      r.anchor = u, r.focus = l;
    });
  }
}, us = (t) => gt(t) && oe.isNodeList(t.children) && !g.isEditor(t), fe = {
  isAncestor(t) {
    return gt(t) && oe.isNodeList(t.children);
  },
  isElement: us,
  isElementList(t) {
    return Array.isArray(t) && t.every((e) => fe.isElement(e));
  },
  isElementProps(t) {
    return t.children !== void 0;
  },
  isElementType: function(e, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return us(e) && e[r] === n;
  },
  matches(t, e) {
    for (var n in e)
      if (n !== "children" && t[n] !== e[n])
        return !1;
    return !0;
  }
}, Fp = ["children"], Mp = ["text"], ls = /* @__PURE__ */ new WeakMap(), oe = {
  ancestor(t, e) {
    var n = oe.get(t, e);
    if (de.isText(n))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(pt.stringify(n)));
    return n;
  },
  ancestors(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var r of O.ancestors(e, n)) {
        var i = oe.ancestor(t, r), a = [i, r];
        yield a;
      }
    }();
  },
  child(t, e) {
    if (de.isText(t))
      throw new Error("Cannot get the child of a text node: ".concat(pt.stringify(t)));
    var n = t.children[e];
    if (n == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(pt.stringify(t)));
    return n;
  },
  children(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: r = !1
      } = n, i = oe.ancestor(t, e), {
        children: a
      } = i, o = r ? a.length - 1 : 0; r ? o >= 0 : o < a.length; ) {
        var s = oe.child(i, o), u = e.concat(o);
        yield [s, u], o = r ? o - 1 : o + 1;
      }
    }();
  },
  common(t, e, n) {
    var r = O.common(e, n), i = oe.get(t, r);
    return [i, r];
  },
  descendant(t, e) {
    var n = oe.get(t, e);
    if (g.isEditor(n))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(pt.stringify(n)));
    return n;
  },
  descendants(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of oe.nodes(t, e))
        r.length !== 0 && (yield [n, r]);
    }();
  },
  elements(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of oe.nodes(t, e))
        fe.isElement(n) && (yield [n, r]);
    }();
  },
  extractProps(t) {
    if (fe.isAncestor(t)) {
      var e = Zt(t, Fp);
      return e;
    } else {
      var e = Zt(t, Mp);
      return e;
    }
  },
  first(t, e) {
    for (var n = e.slice(), r = oe.get(t, n); r && !(de.isText(r) || r.children.length === 0); )
      r = r.children[0], n.push(0);
    return [r, n];
  },
  fragment(t, e) {
    if (de.isText(t))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(pt.stringify(t)));
    var n = Aa({
      children: t.children
    }, (r) => {
      var [i, a] = q.edges(e), o = oe.nodes(r, {
        reverse: !0,
        pass: (d) => {
          var [, h] = d;
          return !q.includes(e, h);
        }
      });
      for (var [, s] of o) {
        if (!q.includes(e, s)) {
          var u = oe.parent(r, s), l = s[s.length - 1];
          u.children.splice(l, 1);
        }
        if (O.equals(s, a.path)) {
          var c = oe.leaf(r, s);
          c.text = c.text.slice(0, a.offset);
        }
        if (O.equals(s, i.path)) {
          var p = oe.leaf(r, s);
          p.text = p.text.slice(i.offset);
        }
      }
      g.isEditor(r) && (r.selection = null);
    });
    return n.children;
  },
  get(t, e) {
    for (var n = t, r = 0; r < e.length; r++) {
      var i = e[r];
      if (de.isText(n) || !n.children[i])
        throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(pt.stringify(t)));
      n = n.children[i];
    }
    return n;
  },
  has(t, e) {
    for (var n = t, r = 0; r < e.length; r++) {
      var i = e[r];
      if (de.isText(n) || !n.children[i])
        return !1;
      n = n.children[i];
    }
    return !0;
  },
  isNode(t) {
    return de.isText(t) || fe.isElement(t) || g.isEditor(t);
  },
  isNodeList(t) {
    if (!Array.isArray(t))
      return !1;
    var e = ls.get(t);
    if (e !== void 0)
      return e;
    var n = t.every((r) => oe.isNode(r));
    return ls.set(t, n), n;
  },
  last(t, e) {
    for (var n = e.slice(), r = oe.get(t, n); r && !(de.isText(r) || r.children.length === 0); ) {
      var i = r.children.length - 1;
      r = r.children[i], n.push(i);
    }
    return [r, n];
  },
  leaf(t, e) {
    var n = oe.get(t, e);
    if (!de.isText(n))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(pt.stringify(n)));
    return n;
  },
  levels(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var r of O.levels(e, n)) {
        var i = oe.get(t, r);
        yield [i, r];
      }
    }();
  },
  matches(t, e) {
    return fe.isElement(t) && fe.isElementProps(e) && fe.matches(t, e) || de.isText(t) && de.isTextProps(e) && de.matches(t, e);
  },
  nodes(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: n,
        reverse: r = !1
      } = e, {
        from: i = [],
        to: a
      } = e, o = /* @__PURE__ */ new Set(), s = [], u = t; !(a && (r ? O.isBefore(s, a) : O.isAfter(s, a))); ) {
        if (o.has(u) || (yield [u, s]), !o.has(u) && !de.isText(u) && u.children.length !== 0 && (n == null || n([u, s]) === !1)) {
          o.add(u);
          var l = r ? u.children.length - 1 : 0;
          O.isAncestor(s, i) && (l = i[s.length]), s = s.concat(l), u = oe.get(t, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!r) {
          var c = O.next(s);
          if (oe.has(t, c)) {
            s = c, u = oe.get(t, s);
            continue;
          }
        }
        if (r && s[s.length - 1] !== 0) {
          var p = O.previous(s);
          s = p, u = oe.get(t, s);
          continue;
        }
        s = O.parent(s), u = oe.get(t, s), o.add(u);
      }
    }();
  },
  parent(t, e) {
    var n = O.parent(e), r = oe.get(t, n);
    if (de.isText(r))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return r;
  },
  string(t) {
    return de.isText(t) ? t.text : t.children.map(oe.string).join("");
  },
  texts(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of oe.nodes(t, e))
        de.isText(n) && (yield [n, r]);
    }();
  }
};
function cs(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Xe(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? cs(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cs(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var an = {
  isNodeOperation(t) {
    return an.isOperation(t) && t.type.endsWith("_node");
  },
  isOperation(t) {
    if (!gt(t))
      return !1;
    switch (t.type) {
      case "insert_node":
        return O.isPath(t.path) && oe.isNode(t.node);
      case "insert_text":
        return typeof t.offset == "number" && typeof t.text == "string" && O.isPath(t.path);
      case "merge_node":
        return typeof t.position == "number" && O.isPath(t.path) && gt(t.properties);
      case "move_node":
        return O.isPath(t.path) && O.isPath(t.newPath);
      case "remove_node":
        return O.isPath(t.path) && oe.isNode(t.node);
      case "remove_text":
        return typeof t.offset == "number" && typeof t.text == "string" && O.isPath(t.path);
      case "set_node":
        return O.isPath(t.path) && gt(t.properties) && gt(t.newProperties);
      case "set_selection":
        return t.properties === null && q.isRange(t.newProperties) || t.newProperties === null && q.isRange(t.properties) || gt(t.properties) && gt(t.newProperties);
      case "split_node":
        return O.isPath(t.path) && typeof t.position == "number" && gt(t.properties);
      default:
        return !1;
    }
  },
  isOperationList(t) {
    return Array.isArray(t) && t.every((e) => an.isOperation(e));
  },
  isSelectionOperation(t) {
    return an.isOperation(t) && t.type.endsWith("_selection");
  },
  isTextOperation(t) {
    return an.isOperation(t) && t.type.endsWith("_text");
  },
  inverse(t) {
    switch (t.type) {
      case "insert_node":
        return Xe(Xe({}, t), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Xe(Xe({}, t), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Xe(Xe({}, t), {}, {
          type: "split_node",
          path: O.previous(t.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: n
        } = t;
        if (O.equals(e, n))
          return t;
        if (O.isSibling(n, e))
          return Xe(Xe({}, t), {}, {
            path: e,
            newPath: n
          });
        var r = O.transform(n, t), i = O.transform(O.next(n), t);
        return Xe(Xe({}, t), {}, {
          path: r,
          newPath: i
        });
      }
      case "remove_node":
        return Xe(Xe({}, t), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Xe(Xe({}, t), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: a,
          newProperties: o
        } = t;
        return Xe(Xe({}, t), {}, {
          properties: o,
          newProperties: a
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: u
        } = t;
        return s == null ? Xe(Xe({}, t), {}, {
          properties: u,
          newProperties: null
        }) : u == null ? Xe(Xe({}, t), {}, {
          properties: null,
          newProperties: s
        }) : Xe(Xe({}, t), {}, {
          properties: u,
          newProperties: s
        });
      }
      case "split_node":
        return Xe(Xe({}, t), {}, {
          type: "merge_node",
          path: O.next(t.path)
        });
    }
  }
}, fs = /* @__PURE__ */ new WeakMap(), Pp = (t) => {
  var e = fs.get(t);
  if (e !== void 0)
    return e;
  if (!gt(t))
    return !1;
  var n = typeof t.addMark == "function" && typeof t.apply == "function" && typeof t.deleteFragment == "function" && typeof t.insertBreak == "function" && typeof t.insertSoftBreak == "function" && typeof t.insertFragment == "function" && typeof t.insertNode == "function" && typeof t.insertText == "function" && typeof t.isElementReadOnly == "function" && typeof t.isInline == "function" && typeof t.isSelectable == "function" && typeof t.isVoid == "function" && typeof t.normalizeNode == "function" && typeof t.onChange == "function" && typeof t.removeMark == "function" && typeof t.getDirtyPaths == "function" && (t.marks === null || gt(t.marks)) && (t.selection === null || q.isRange(t.selection)) && oe.isNodeList(t.children) && an.isOperationList(t.operations);
  return fs.set(t, n), n;
}, g = {
  above(t, e) {
    return t.above(e);
  },
  addMark(t, e, n) {
    t.addMark(e, n);
  },
  after(t, e, n) {
    return t.after(e, n);
  },
  before(t, e, n) {
    return t.before(e, n);
  },
  deleteBackward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: n = "character"
    } = e;
    t.deleteBackward(n);
  },
  deleteForward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: n = "character"
    } = e;
    t.deleteForward(n);
  },
  deleteFragment(t, e) {
    t.deleteFragment(e);
  },
  edges(t, e) {
    return t.edges(e);
  },
  elementReadOnly(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return t.elementReadOnly(e);
  },
  end(t, e) {
    return t.end(e);
  },
  first(t, e) {
    return t.first(e);
  },
  fragment(t, e) {
    return t.fragment(e);
  },
  hasBlocks(t, e) {
    return t.hasBlocks(e);
  },
  hasInlines(t, e) {
    return t.hasInlines(e);
  },
  hasPath(t, e) {
    return t.hasPath(e);
  },
  hasTexts(t, e) {
    return t.hasTexts(e);
  },
  insertBreak(t) {
    t.insertBreak();
  },
  insertFragment(t, e, n) {
    t.insertFragment(e, n);
  },
  insertNode(t, e) {
    t.insertNode(e);
  },
  insertSoftBreak(t) {
    t.insertSoftBreak();
  },
  insertText(t, e) {
    t.insertText(e);
  },
  isBlock(t, e) {
    return t.isBlock(e);
  },
  isEdge(t, e, n) {
    return t.isEdge(e, n);
  },
  isEditor(t) {
    return Pp(t);
  },
  isElementReadOnly(t, e) {
    return t.isElementReadOnly(e);
  },
  isEmpty(t, e) {
    return t.isEmpty(e);
  },
  isEnd(t, e, n) {
    return t.isEnd(e, n);
  },
  isInline(t, e) {
    return t.isInline(e);
  },
  isNormalizing(t) {
    return t.isNormalizing();
  },
  isSelectable(t, e) {
    return t.isSelectable(e);
  },
  isStart(t, e, n) {
    return t.isStart(e, n);
  },
  isVoid(t, e) {
    return t.isVoid(e);
  },
  last(t, e) {
    return t.last(e);
  },
  leaf(t, e, n) {
    return t.leaf(e, n);
  },
  levels(t, e) {
    return t.levels(e);
  },
  marks(t) {
    return t.getMarks();
  },
  next(t, e) {
    return t.next(e);
  },
  node(t, e, n) {
    return t.node(e, n);
  },
  nodes(t, e) {
    return t.nodes(e);
  },
  normalize(t, e) {
    t.normalize(e);
  },
  parent(t, e, n) {
    return t.parent(e, n);
  },
  path(t, e, n) {
    return t.path(e, n);
  },
  pathRef(t, e, n) {
    return t.pathRef(e, n);
  },
  pathRefs(t) {
    return t.pathRefs();
  },
  point(t, e, n) {
    return t.point(e, n);
  },
  pointRef(t, e, n) {
    return t.pointRef(e, n);
  },
  pointRefs(t) {
    return t.pointRefs();
  },
  positions(t, e) {
    return t.positions(e);
  },
  previous(t, e) {
    return t.previous(e);
  },
  range(t, e, n) {
    return t.range(e, n);
  },
  rangeRef(t, e, n) {
    return t.rangeRef(e, n);
  },
  rangeRefs(t) {
    return t.rangeRefs();
  },
  removeMark(t, e) {
    t.removeMark(e);
  },
  setNormalizing(t, e) {
    t.setNormalizing(e);
  },
  start(t, e) {
    return t.start(e);
  },
  string(t, e, n) {
    return t.string(e, n);
  },
  unhangRange(t, e, n) {
    return t.unhangRange(e, n);
  },
  void(t, e) {
    return t.void(e);
  },
  withoutNormalizing(t, e) {
    t.withoutNormalizing(e);
  },
  shouldMergeNodesRemovePrevNode: (t, e, n) => t.shouldMergeNodesRemovePrevNode(e, n)
}, kp = {
  isSpan(t) {
    return Array.isArray(t) && t.length === 2 && t.every(O.isPath);
  }
};
function ds(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ps(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ds(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ds(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Se = {
  compare(t, e) {
    var n = O.compare(t.path, e.path);
    return n === 0 ? t.offset < e.offset ? -1 : t.offset > e.offset ? 1 : 0 : n;
  },
  isAfter(t, e) {
    return Se.compare(t, e) === 1;
  },
  isBefore(t, e) {
    return Se.compare(t, e) === -1;
  },
  equals(t, e) {
    return t.offset === e.offset && O.equals(t.path, e.path);
  },
  isPoint(t) {
    return gt(t) && typeof t.offset == "number" && O.isPath(t.path);
  },
  transform(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return Aa(t, (r) => {
      if (r === null)
        return null;
      var {
        affinity: i = "forward"
      } = n, {
        path: a,
        offset: o
      } = r;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          r.path = O.transform(a, e, n);
          break;
        }
        case "insert_text": {
          O.equals(e.path, a) && (e.offset < o || e.offset === o && i === "forward") && (r.offset += e.text.length);
          break;
        }
        case "merge_node": {
          O.equals(e.path, a) && (r.offset += e.position), r.path = O.transform(a, e, n);
          break;
        }
        case "remove_text": {
          O.equals(e.path, a) && e.offset <= o && (r.offset -= Math.min(o - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (O.equals(e.path, a) || O.isAncestor(e.path, a))
            return null;
          r.path = O.transform(a, e, n);
          break;
        }
        case "split_node": {
          if (O.equals(e.path, a)) {
            if (e.position === o && i == null)
              return null;
            (e.position < o || e.position === o && i === "forward") && (r.offset -= e.position, r.path = O.transform(a, e, ps(ps({}, n), {}, {
              affinity: "forward"
            })));
          } else
            r.path = O.transform(a, e, n);
          break;
        }
      }
    });
  }
}, hs = void 0, pt = {
  setScrubber(t) {
    hs = t;
  },
  stringify(t) {
    return JSON.stringify(t, hs);
  }
}, Tp = ["text"], Rp = ["anchor", "focus"];
function vs(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ht(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? vs(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : vs(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var de = {
  equals(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: r = !1
    } = n;
    function i(a) {
      var o = Zt(a, Tp);
      return o;
    }
    return jl(r ? i(t) : t, r ? i(e) : e);
  },
  isText(t) {
    return gt(t) && typeof t.text == "string";
  },
  isTextList(t) {
    return Array.isArray(t) && t.every((e) => de.isText(e));
  },
  isTextProps(t) {
    return t.text !== void 0;
  },
  matches(t, e) {
    for (var n in e)
      if (n !== "text" && (!t.hasOwnProperty(n) || t[n] !== e[n]))
        return !1;
    return !0;
  },
  decorations(t, e) {
    var n = [Ht({}, t)];
    for (var r of e) {
      var i = Zt(r, Rp), [a, o] = q.edges(r), s = [], u = 0, l = a.offset, c = o.offset;
      for (var p of n) {
        var {
          length: d
        } = p.text, h = u;
        if (u += d, l <= h && u <= c) {
          Object.assign(p, i), s.push(p);
          continue;
        }
        if (l !== c && (l === u || c === h) || l > u || c < h || c === h && h !== 0) {
          s.push(p);
          continue;
        }
        var y = p, v = void 0, f = void 0;
        if (c < u) {
          var C = c - h;
          f = Ht(Ht({}, y), {}, {
            text: y.text.slice(C)
          }), y = Ht(Ht({}, y), {}, {
            text: y.text.slice(0, C)
          });
        }
        if (l > h) {
          var w = l - h;
          v = Ht(Ht({}, y), {}, {
            text: y.text.slice(0, w)
          }), y = Ht(Ht({}, y), {}, {
            text: y.text.slice(w)
          });
        }
        Object.assign(y, i), v && s.push(v), s.push(y), f && s.push(f);
      }
      n = s;
    }
    return n;
  }
}, Oa = (t) => t.selection ? t.selection : t.children.length > 0 ? g.end(t, []) : [0], Nn = (t, e) => {
  var [n] = g.node(t, e);
  return (r) => r === n;
}, Sa = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = !n, i = n ? _p(e) : e, a = Le.None, o = Le.None, s = 0, u = null, l = null;
  for (var c of i) {
    var p = c.codePointAt(0);
    if (!p) break;
    var d = Qp(c, p);
    if ([a, o] = r ? [o, d] : [d, a], Pn(a, Le.ZWJ) && Pn(o, Le.ExtPict) && (r ? u = gs(e.substring(0, s)) : u = gs(e.substring(0, e.length - s)), !u) || Pn(a, Le.RI) && Pn(o, Le.RI) && (l !== null ? l = !l : r ? l = !0 : l = ih(e.substring(0, e.length - s)), !l) || a !== Le.None && o !== Le.None && th(a, o))
      break;
    s += c.length;
  }
  return s || 1;
}, jp = /\s/, Ip = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Np = /['\u2018\u2019]/, $p = function(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = 0, i = !1; e.length > 0; ) {
    var a = Sa(e, n), [o, s] = Fa(e, a, n);
    if (zp(o, s, n))
      i = !0, r += a;
    else if (!i)
      r += a;
    else
      break;
    e = s;
  }
  return r;
}, Fa = (t, e, n) => {
  if (n) {
    var r = t.length - e;
    return [t.slice(r, t.length), t.slice(0, r)];
  }
  return [t.slice(0, e), t.slice(e)];
}, zp = function t(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (jp.test(e))
    return !1;
  if (Np.test(e)) {
    var i = Sa(n, r), [a, o] = Fa(n, i, r);
    if (t(a, o, r))
      return !0;
  }
  return !Ip.test(e);
}, _p = function* (e) {
  for (var n = e.length - 1, r = 0; r < e.length; r++) {
    var i = e.charAt(n - r);
    if (Up(i.charCodeAt(0))) {
      var a = e.charAt(n - r - 1);
      if (Wp(a.charCodeAt(0))) {
        yield a + i, r++;
        continue;
      }
    }
    yield i;
  }
}, Wp = (t) => t >= 55296 && t <= 56319, Up = (t) => t >= 56320 && t <= 57343, Le;
(function(t) {
  t[t.None = 0] = "None", t[t.Extend = 1] = "Extend", t[t.ZWJ = 2] = "ZWJ", t[t.RI = 4] = "RI", t[t.Prepend = 8] = "Prepend", t[t.SpacingMark = 16] = "SpacingMark", t[t.L = 32] = "L", t[t.V = 64] = "V", t[t.T = 128] = "T", t[t.LV = 256] = "LV", t[t.LVT = 512] = "LVT", t[t.ExtPict = 1024] = "ExtPict", t[t.Any = 2048] = "Any";
})(Le || (Le = {}));
var Hp = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Vp = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, qp = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, Zp = /^[\u1100-\u115F\uA960-\uA97C]$/, Gp = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, Yp = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, Kp = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, Xp = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, Jp = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, Qp = (t, e) => {
  var n = Le.Any;
  return t.search(Hp) !== -1 && (n |= Le.Extend), e === 8205 && (n |= Le.ZWJ), e >= 127462 && e <= 127487 && (n |= Le.RI), t.search(Vp) !== -1 && (n |= Le.Prepend), t.search(qp) !== -1 && (n |= Le.SpacingMark), t.search(Zp) !== -1 && (n |= Le.L), t.search(Gp) !== -1 && (n |= Le.V), t.search(Yp) !== -1 && (n |= Le.T), t.search(Kp) !== -1 && (n |= Le.LV), t.search(Xp) !== -1 && (n |= Le.LVT), t.search(Jp) !== -1 && (n |= Le.ExtPict), n;
};
function Pn(t, e) {
  return (t & e) !== 0;
}
var eh = [
  // GB6
  [Le.L, Le.L | Le.V | Le.LV | Le.LVT],
  // GB7
  [Le.LV | Le.V, Le.V | Le.T],
  // GB8
  [Le.LVT | Le.T, Le.T],
  // GB9
  [Le.Any, Le.Extend | Le.ZWJ],
  // GB9a
  [Le.Any, Le.SpacingMark],
  // GB9b
  [Le.Prepend, Le.Any],
  // GB11
  [Le.ZWJ, Le.ExtPict],
  // GB12 and GB13
  [Le.RI, Le.RI]
];
function th(t, e) {
  return eh.findIndex((n) => Pn(t, n[0]) && Pn(e, n[1])) === -1;
}
var nh = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, gs = (t) => t.search(nh) !== -1, rh = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, ih = (t) => {
  var e = t.match(rh);
  if (e === null)
    return !1;
  var n = e[0].length / 2;
  return n % 2 === 1;
}, ah = {
  delete(t, e) {
    t.delete(e);
  },
  insertFragment(t, e, n) {
    t.insertFragment(e, n);
  },
  insertText(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    g.withoutNormalizing(t, () => {
      var {
        voids: r = !1
      } = n, {
        at: i = Oa(t)
      } = n;
      if (O.isPath(i) && (i = g.range(t, i)), q.isRange(i))
        if (q.isCollapsed(i))
          i = i.anchor;
        else {
          var a = q.end(i);
          if (!r && g.void(t, {
            at: a
          }))
            return;
          var o = q.start(i), s = g.pointRef(t, o), u = g.pointRef(t, a);
          ne.delete(t, {
            at: i,
            voids: r
          });
          var l = s.unref(), c = u.unref();
          i = l || c, ne.setSelection(t, {
            anchor: i,
            focus: i
          });
        }
      if (!(!r && g.void(t, {
        at: i
      }) || g.elementReadOnly(t, {
        at: i
      }))) {
        var {
          path: p,
          offset: d
        } = i;
        e.length > 0 && t.apply({
          type: "insert_text",
          path: p,
          offset: d,
          text: e
        });
      }
    });
  }
};
function ms(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ms(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ms(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var ne = Lr(Lr(Lr(Lr({}, Bp), xp), Lp), ah), zr = /* @__PURE__ */ new WeakMap(), oh = (t) => zr.get(t) || !1, sh = (t, e, n) => {
  var r = zr.get(t) || !1;
  zr.set(t, !0);
  try {
    e(), n();
  } finally {
    zr.set(t, r);
  }
};
function Il(t, e, n) {
  var r = Xr.get(t) || [], i = Jr.get(t) || /* @__PURE__ */ new Set(), a, o, s = (p) => {
    if (p) {
      var d = p.join(",");
      o.has(d) || (o.add(d), a.push(p));
    }
  };
  if (n) {
    a = [], o = /* @__PURE__ */ new Set();
    for (var u of r) {
      var l = n(u);
      s(l);
    }
  } else
    a = r, o = i;
  for (var c of e)
    s(c);
  Xr.set(t, a), Jr.set(t, o);
}
var uh = (t, e) => {
  for (var n of g.pathRefs(t))
    yp.transform(n, e);
  for (var r of g.pointRefs(t))
    Cp.transform(r, e);
  for (var i of g.rangeRefs(t))
    Dp.transform(i, e);
  if (!oh(t)) {
    var a = O.operationCanTransformPath(e) ? (o) => O.transform(o, e) : void 0;
    Il(t, t.getDirtyPaths(e), a);
  }
  ne.transform(t, e), t.operations.push(e), g.normalize(t, {
    operation: e
  }), e.type === "set_selection" && (t.marks = null), Qn.get(t) || (Qn.set(t, !0), Promise.resolve().then(() => {
    Qn.set(t, !1), t.onChange({
      operation: e
    }), t.operations = [];
  }));
}, lh = (t, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: n
      } = e;
      return O.levels(n);
    }
    case "insert_node": {
      var {
        node: r,
        path: i
      } = e, a = O.levels(i), o = de.isText(r) ? [] : Array.from(oe.nodes(r), (M) => {
        var [, z] = M;
        return i.concat(z);
      });
      return [...a, ...o];
    }
    case "merge_node": {
      var {
        path: s
      } = e, u = O.ancestors(s), l = O.previous(s);
      return [...u, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: p
      } = e;
      if (O.equals(c, p))
        return [];
      var d = [], h = [];
      for (var y of O.ancestors(c)) {
        var v = O.transform(y, e);
        d.push(v);
      }
      for (var f of O.ancestors(p)) {
        var C = O.transform(f, e);
        h.push(C);
      }
      var w = h[h.length - 1], b = p[p.length - 1], S = w.concat(b);
      return [...d, ...h, S];
    }
    case "remove_node": {
      var {
        path: D
      } = e, E = O.ancestors(D);
      return [...E];
    }
    case "split_node": {
      var {
        path: A
      } = e, F = O.levels(A), V = O.next(A);
      return [...F, V];
    }
    default:
      return [];
  }
}, ch = (t) => {
  var {
    selection: e
  } = t;
  return e ? oe.fragment(t, e) : [];
}, fh = (t, e) => {
  var [n, r] = e;
  if (!de.isText(n)) {
    if (fe.isElement(n) && n.children.length === 0) {
      var i = {
        text: ""
      };
      ne.insertNodes(t, i, {
        at: r.concat(0),
        voids: !0
      });
      return;
    }
    for (var a = g.isEditor(n) ? !1 : fe.isElement(n) && (t.isInline(n) || n.children.length === 0 || de.isText(n.children[0]) || t.isInline(n.children[0])), o = 0, s = 0; s < n.children.length; s++, o++) {
      var u = oe.get(t, r);
      if (!de.isText(u)) {
        var l = u.children[o], c = u.children[o - 1], p = s === n.children.length - 1, d = de.isText(l) || fe.isElement(l) && t.isInline(l);
        if (d !== a)
          ne.removeNodes(t, {
            at: r.concat(o),
            voids: !0
          }), o--;
        else if (fe.isElement(l)) {
          if (t.isInline(l)) {
            if (c == null || !de.isText(c)) {
              var h = {
                text: ""
              };
              ne.insertNodes(t, h, {
                at: r.concat(o),
                voids: !0
              }), o++;
            } else if (p) {
              var y = {
                text: ""
              };
              ne.insertNodes(t, y, {
                at: r.concat(o + 1),
                voids: !0
              }), o++;
            }
          }
        } else {
          if (!de.isText(l) && !("children" in l)) {
            var v = l;
            v.children = [];
          }
          c != null && de.isText(c) && (de.equals(l, c, {
            loose: !0
          }) ? (ne.mergeNodes(t, {
            at: r.concat(o),
            voids: !0
          }), o--) : c.text === "" ? (ne.removeNodes(t, {
            at: r.concat(o - 1),
            voids: !0
          }), o--) : l.text === "" && (ne.removeNodes(t, {
            at: r.concat(o),
            voids: !0
          }), o--));
        }
      }
    }
  }
}, dh = (t, e) => {
  var {
    iteration: n,
    initialDirtyPathsLength: r
  } = e, i = r * 42;
  if (n > i)
    throw new Error("Could not completely normalize the editor after ".concat(i, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, ph = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: r = !1,
    mode: i = "lowest",
    at: a = e.selection,
    match: o
  } = n;
  if (a) {
    var s = g.path(e, a), u = i === "lowest";
    for (var [l, c] of g.levels(e, {
      at: s,
      voids: r,
      match: o,
      reverse: u
    }))
      if (!de.isText(l)) {
        if (q.isRange(a)) {
          if (O.isAncestor(c, a.anchor.path) && O.isAncestor(c, a.focus.path))
            return [l, c];
        } else if (!O.equals(s, c))
          return [l, c];
      }
  }
};
function ys(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Cs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ys(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ys(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var hh = (t, e, n) => {
  var {
    selection: r
  } = t;
  if (r) {
    var i = (p, d) => {
      if (!de.isText(p))
        return !1;
      var [h, y] = g.parent(t, d);
      return !t.isVoid(h) || t.markableVoid(h);
    }, a = q.isExpanded(r), o = !1;
    if (!a) {
      var [s, u] = g.node(t, r);
      if (s && i(s, u)) {
        var [l] = g.parent(t, u);
        o = l && t.markableVoid(l);
      }
    }
    if (a || o)
      ne.setNodes(t, {
        [e]: n
      }, {
        match: i,
        split: !0,
        voids: !0
      });
    else {
      var c = Cs(Cs({}, g.marks(t) || {}), {}, {
        [e]: n
      });
      t.marks = c, Qn.get(t) || t.onChange();
    }
  }
};
function Ds(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ds(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ds(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var vh = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.point(e, n, {
    edge: "end"
  }), a = g.end(e, []), o = {
    anchor: i,
    focus: a
  }, {
    distance: s = 1
  } = r, u = 0, l;
  for (var c of g.positions(e, bs(bs({}, r), {}, {
    at: o
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
};
function Es(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ws(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Es(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Es(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var gh = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.start(e, []), a = g.point(e, n, {
    edge: "start"
  }), o = {
    anchor: i,
    focus: a
  }, {
    distance: s = 1
  } = r, u = 0, l;
  for (var c of g.positions(e, ws(ws({}, r), {}, {
    at: o,
    reverse: !0
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
}, mh = (t, e) => {
  var {
    selection: n
  } = t;
  n && q.isCollapsed(n) && ne.delete(t, {
    unit: e,
    reverse: !0
  });
}, yh = (t, e) => {
  var {
    selection: n
  } = t;
  n && q.isCollapsed(n) && ne.delete(t, {
    unit: e
  });
}, Ch = function(e) {
  var {
    direction: n = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: r
  } = e;
  r && q.isExpanded(r) && ne.delete(e, {
    reverse: n === "backward"
  });
}, Dh = (t, e) => [g.start(t, e), g.end(t, e)];
function Bs(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xs(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bs(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bs(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var bh = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g.above(e, xs(xs({}, n), {}, {
    match: (r) => fe.isElement(r) && g.isElementReadOnly(e, r)
  }));
}, Eh = (t, e) => g.point(t, e, {
  edge: "end"
}), wh = (t, e) => {
  var n = g.path(t, e, {
    edge: "start"
  });
  return g.node(t, n);
}, Bh = (t, e) => {
  var n = g.range(t, e);
  return oe.fragment(t, n);
};
function Ls(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function As(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ls(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ls(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var xh = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g.above(e, As(As({}, n), {}, {
    match: (r) => fe.isElement(r) && g.isVoid(e, r)
  }));
}, Lh = (t, e) => e.children.some((n) => fe.isElement(n) && g.isBlock(t, n)), Ah = (t, e) => e.children.some((n) => de.isText(n) || g.isInline(t, n)), Oh = (t, e) => oe.has(t, e), Sh = (t, e) => e.children.every((n) => de.isText(n)), Fh = (t) => {
  ne.splitNodes(t, {
    always: !0
  });
}, Mh = (t, e, n) => {
  ne.insertNodes(t, e, n);
}, Ph = (t) => {
  ne.splitNodes(t, {
    always: !0
  });
};
function Os(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function kh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Os(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Os(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Th = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: i,
    marks: a
  } = e;
  if (i) {
    if (a) {
      var o = kh({
        text: n
      }, a);
      ne.insertNodes(e, o, {
        at: r.at,
        voids: r.voids
      });
    } else
      ne.insertText(e, n, r);
    e.marks = null;
  }
}, Rh = (t, e) => !t.isInline(e), jh = (t, e, n) => g.isStart(t, e, n) || g.isEnd(t, e, n), Ih = (t, e) => {
  var {
    children: n
  } = e, [r] = n;
  return n.length === 0 || n.length === 1 && de.isText(r) && r.text === "" && !t.isVoid(e);
}, Nh = (t, e, n) => {
  var r = g.end(t, n);
  return Se.equals(e, r);
}, $h = (t) => {
  var e = Rl.get(t);
  return e === void 0 ? !0 : e;
}, zh = (t, e, n) => {
  if (e.offset !== 0)
    return !1;
  var r = g.start(t, n);
  return Se.equals(e, r);
}, _h = (t, e) => {
  var n = g.path(t, e, {
    edge: "end"
  });
  return g.node(t, n);
}, Wh = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.path(e, n, r), a = oe.leaf(e, i);
  return [a, i];
};
function Uh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: n = t.selection,
      reverse: r = !1,
      voids: i = !1
    } = e, {
      match: a
    } = e;
    if (a == null && (a = () => !0), !!n) {
      var o = [], s = g.path(t, n);
      for (var [u, l] of oe.levels(t, s))
        if (a(u, l) && (o.push([u, l]), !i && fe.isElement(u) && g.isVoid(t, u)))
          break;
      r && o.reverse(), yield* o;
    }
  }();
}
var Hh = ["text"], Vh = ["text"], qh = function(e) {
  var {
    marks: n,
    selection: r
  } = e;
  if (!r)
    return null;
  var {
    anchor: i,
    focus: a
  } = r;
  if (n)
    return n;
  if (q.isExpanded(r)) {
    var o = g.isEnd(e, i, i.path);
    if (o) {
      var s = g.after(e, i);
      s && (i = s);
    }
    var [u] = g.nodes(e, {
      match: de.isText,
      at: {
        anchor: i,
        focus: a
      }
    });
    if (u) {
      var [l] = u, c = Zt(l, Hh);
      return c;
    } else
      return {};
  }
  var {
    path: p
  } = i, [d] = g.leaf(e, p);
  if (i.offset === 0) {
    var h = g.previous(e, {
      at: p,
      match: de.isText
    }), y = g.above(e, {
      match: (S) => fe.isElement(S) && g.isVoid(e, S) && e.markableVoid(S)
    });
    if (!y) {
      var v = g.above(e, {
        match: (S) => fe.isElement(S) && g.isBlock(e, S)
      });
      if (h && v) {
        var [f, C] = h, [, w] = v;
        O.isAncestor(w, C) && (d = f);
      }
    }
  }
  var b = Zt(d, Vh);
  return b;
}, Zh = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: r = "lowest",
    voids: i = !1
  } = n, {
    match: a,
    at: o = e.selection
  } = n;
  if (o) {
    var s = g.after(e, o, {
      voids: i
    });
    if (s) {
      var [, u] = g.last(e, []), l = [s.path, u];
      if (O.isPath(o) && o.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (a == null)
        if (O.isPath(o)) {
          var [c] = g.parent(e, o);
          a = (d) => c.children.includes(d);
        } else
          a = () => !0;
      var [p] = g.nodes(e, {
        at: l,
        match: a,
        mode: r,
        voids: i
      });
      return p;
    }
  }
}, Gh = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.path(e, n, r), a = oe.get(e, i);
  return [a, i];
};
function Yh(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: n = t.selection,
      mode: r = "all",
      universal: i = !1,
      reverse: a = !1,
      voids: o = !1,
      ignoreNonSelectable: s = !1
    } = e, {
      match: u
    } = e;
    if (u || (u = () => !0), !!n) {
      var l, c;
      if (kp.isSpan(n))
        l = n[0], c = n[1];
      else {
        var p = g.path(t, n, {
          edge: "start"
        }), d = g.path(t, n, {
          edge: "end"
        });
        l = a ? d : p, c = a ? p : d;
      }
      var h = oe.nodes(t, {
        reverse: a,
        from: l,
        to: c,
        pass: (S) => {
          var [D] = S;
          return fe.isElement(D) ? !!(!o && (g.isVoid(t, D) || g.isElementReadOnly(t, D)) || s && !g.isSelectable(t, D)) : !1;
        }
      }), y = [], v;
      for (var [f, C] of h)
        if (!(s && fe.isElement(f) && !g.isSelectable(t, f))) {
          var w = v && O.compare(C, v[1]) === 0;
          if (!(r === "highest" && w)) {
            if (!u(f, C)) {
              if (i && !w && de.isText(f))
                return;
              continue;
            }
            if (r === "lowest" && w) {
              v = [f, C];
              continue;
            }
            var b = r === "lowest" ? v : [f, C];
            b && (i ? y.push(b) : yield b), v = [f, C];
          }
        }
      r === "lowest" && v && (i ? y.push(v) : yield v), i && (yield* y);
    }
  }();
}
var Kh = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: r = !1,
    operation: i
  } = n, a = (c) => Xr.get(c) || [], o = (c) => Jr.get(c) || /* @__PURE__ */ new Set(), s = (c) => {
    var p = a(c).pop(), d = p.join(",");
    return o(c).delete(d), p;
  };
  if (g.isNormalizing(e)) {
    if (r) {
      var u = Array.from(oe.nodes(e), (c) => {
        var [, p] = c;
        return p;
      }), l = new Set(u.map((c) => c.join(",")));
      Xr.set(e, u), Jr.set(e, l);
    }
    a(e).length !== 0 && g.withoutNormalizing(e, () => {
      for (var c of a(e))
        if (oe.has(e, c)) {
          var p = g.node(e, c), [d, h] = p;
          fe.isElement(d) && d.children.length === 0 && e.normalizeNode(p, {
            operation: i
          });
        }
      for (var y = a(e), v = y.length, f = 0; y.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: y,
          iteration: f,
          initialDirtyPathsLength: v,
          operation: i
        }))
          return;
        var C = s(e);
        if (oe.has(e, C)) {
          var w = g.node(e, C);
          e.normalizeNode(w, {
            operation: i
          });
        }
        f++, y = a(e);
      }
    });
  }
}, Xh = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.path(e, n, r), a = O.parent(i), o = g.node(e, a);
  return o;
}, Jh = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: i = "forward"
  } = r, a = {
    current: n,
    affinity: i,
    unref() {
      var {
        current: s
      } = a, u = g.pathRefs(e);
      return u.delete(a), a.current = null, s;
    }
  }, o = g.pathRefs(e);
  return o.add(a), a;
}, Qh = (t) => {
  var e = rs.get(t);
  return e || (e = /* @__PURE__ */ new Set(), rs.set(t, e)), e;
}, ev = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: i,
    edge: a
  } = r;
  if (O.isPath(n)) {
    if (a === "start") {
      var [, o] = oe.first(e, n);
      n = o;
    } else if (a === "end") {
      var [, s] = oe.last(e, n);
      n = s;
    }
  }
  return q.isRange(n) && (a === "start" ? n = q.start(n) : a === "end" ? n = q.end(n) : n = O.common(n.anchor.path, n.focus.path)), Se.isPoint(n) && (n = n.path), i != null && (n = n.slice(0, i)), n;
}, tv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: i = "forward"
  } = r, a = {
    current: n,
    affinity: i,
    unref() {
      var {
        current: s
      } = a, u = g.pointRefs(e);
      return u.delete(a), a.current = null, s;
    }
  }, o = g.pointRefs(e);
  return o.add(a), a;
}, nv = (t) => {
  var e = is.get(t);
  return e || (e = /* @__PURE__ */ new Set(), is.set(t, e)), e;
}, rv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: i = "start"
  } = r;
  if (O.isPath(n)) {
    var a;
    if (i === "end") {
      var [, o] = oe.last(e, n);
      a = o;
    } else {
      var [, s] = oe.first(e, n);
      a = s;
    }
    var u = oe.get(e, a);
    if (!de.isText(u))
      throw new Error("Cannot get the ".concat(i, " point in the node at path [").concat(n, "] because it has no ").concat(i, " text node."));
    return {
      path: a,
      offset: i === "end" ? u.text.length : 0
    };
  }
  if (q.isRange(n)) {
    var [l, c] = q.edges(n);
    return i === "start" ? l : c;
  }
  return n;
};
function iv(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: n = t.selection,
      unit: r = "offset",
      reverse: i = !1,
      voids: a = !1,
      ignoreNonSelectable: o = !1
    } = e;
    if (!n)
      return;
    var s = g.range(t, n), [u, l] = q.edges(s), c = i ? l : u, p = !1, d = "", h = 0, y = 0, v = 0;
    for (var [f, C] of g.nodes(t, {
      at: n,
      reverse: i,
      voids: a,
      ignoreNonSelectable: o
    })) {
      if (fe.isElement(f)) {
        if (!a && (t.isVoid(f) || t.isElementReadOnly(f))) {
          yield g.start(t, C);
          continue;
        }
        if (t.isInline(f)) continue;
        if (g.hasInlines(t, f)) {
          var w = O.isAncestor(C, l.path) ? l : g.end(t, C), b = O.isAncestor(C, u.path) ? u : g.start(t, C);
          d = g.string(t, {
            anchor: b,
            focus: w
          }, {
            voids: a
          }), p = !0;
        }
      }
      if (de.isText(f)) {
        var S = O.equals(C, c.path);
        for (S ? (y = i ? c.offset : f.text.length - c.offset, v = c.offset) : (y = f.text.length, v = i ? y : 0), (S || p || r === "offset") && (yield {
          path: C,
          offset: v
        }, p = !1); ; ) {
          if (h === 0) {
            if (d === "") break;
            h = D(d, r, i), d = Fa(d, h, i)[1];
          }
          if (v = i ? v - h : v + h, y = y - h, y < 0) {
            h = -y;
            break;
          }
          h = 0, yield {
            path: C,
            offset: v
          };
        }
      }
    }
    function D(E, A, F) {
      return A === "character" ? Sa(E, F) : A === "word" ? $p(E, F) : A === "line" || A === "block" ? E.length : 1;
    }
  }();
}
var av = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: r = "lowest",
    voids: i = !1
  } = n, {
    match: a,
    at: o = e.selection
  } = n;
  if (o) {
    var s = g.before(e, o, {
      voids: i
    });
    if (s) {
      var [, u] = g.first(e, []), l = [s.path, u];
      if (O.isPath(o) && o.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (a == null)
        if (O.isPath(o)) {
          var [c] = g.parent(e, o);
          a = (d) => c.children.includes(d);
        } else
          a = () => !0;
      var [p] = g.nodes(e, {
        reverse: !0,
        at: l,
        match: a,
        mode: r,
        voids: i
      });
      return p;
    }
  }
}, ov = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: i = "forward"
  } = r, a = {
    current: n,
    affinity: i,
    unref() {
      var {
        current: s
      } = a, u = g.rangeRefs(e);
      return u.delete(a), a.current = null, s;
    }
  }, o = g.rangeRefs(e);
  return o.add(a), a;
}, sv = (t) => {
  var e = as.get(t);
  return e || (e = /* @__PURE__ */ new Set(), as.set(t, e)), e;
}, uv = (t, e, n) => {
  if (q.isRange(e) && !n)
    return e;
  var r = g.start(t, e), i = g.end(t, n || e);
  return {
    anchor: r,
    focus: i
  };
};
function Ss(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ss(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ss(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var cv = (t, e) => {
  var {
    selection: n
  } = t;
  if (n) {
    var r = (c, p) => {
      if (!de.isText(c))
        return !1;
      var [d, h] = g.parent(t, p);
      return !t.isVoid(d) || t.markableVoid(d);
    }, i = q.isExpanded(n), a = !1;
    if (!i) {
      var [o, s] = g.node(t, n);
      if (o && r(o, s)) {
        var [u] = g.parent(t, s);
        a = u && t.markableVoid(u);
      }
    }
    if (i || a)
      ne.unsetNodes(t, e, {
        match: r,
        split: !0,
        voids: !0
      });
    else {
      var l = lv({}, g.marks(t) || {});
      delete l[e], t.marks = l, Qn.get(t) || t.onChange();
    }
  }
}, fv = (t, e) => {
  Rl.set(t, e);
}, dv = (t, e) => g.point(t, e, {
  edge: "start"
}), pv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: i = !1
  } = r, a = g.range(e, n), [o, s] = q.edges(a), u = "";
  for (var [l, c] of g.nodes(e, {
    at: a,
    match: de.isText,
    voids: i
  })) {
    var p = l.text;
    O.equals(c, s.path) && (p = p.slice(0, s.offset)), O.equals(c, o.path) && (p = p.slice(o.offset)), u += p;
  }
  return u;
}, hv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: i = !1
  } = r, [a, o] = q.edges(n);
  if (a.offset !== 0 || o.offset !== 0 || q.isCollapsed(n) || O.hasPrevious(o.path))
    return n;
  var s = g.above(e, {
    at: o,
    match: (y) => fe.isElement(y) && g.isBlock(e, y),
    voids: i
  }), u = s ? s[1] : [], l = g.start(e, a), c = {
    anchor: l,
    focus: o
  }, p = !0;
  for (var [d, h] of g.nodes(e, {
    at: c,
    match: de.isText,
    reverse: !0,
    voids: i
  })) {
    if (p) {
      p = !1;
      continue;
    }
    if (d.text !== "" || O.isBefore(h, u)) {
      o = {
        path: h,
        offset: d.text.length
      };
      break;
    }
  }
  return {
    anchor: a,
    focus: o
  };
}, vv = (t, e) => {
  var n = g.isNormalizing(t);
  g.setNormalizing(t, !1);
  try {
    e();
  } finally {
    g.setNormalizing(t, n);
  }
  g.normalize(t);
}, gv = (t, e, n) => {
  var [r, i] = e;
  return fe.isElement(r) && g.isEmpty(t, r) || de.isText(r) && r.text === "" && i[i.length - 1] !== 0;
}, mv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var r, i, {
      reverse: a = !1,
      unit: o = "character",
      distance: s = 1,
      voids: u = !1
    } = n, {
      at: l = e.selection,
      hanging: c = !1
    } = n;
    if (l) {
      var p = !1;
      if (q.isRange(l) && q.isCollapsed(l) && (p = !0, l = l.anchor), Se.isPoint(l)) {
        var d = g.void(e, {
          at: l,
          mode: "highest"
        });
        if (!u && d) {
          var [, h] = d;
          l = h;
        } else {
          var y = {
            unit: o,
            distance: s
          }, v = a ? g.before(e, l, y) || g.start(e, []) : g.after(e, l, y) || g.end(e, []);
          l = {
            anchor: l,
            focus: v
          }, c = !0;
        }
      }
      if (O.isPath(l)) {
        ne.removeNodes(e, {
          at: l,
          voids: u
        });
        return;
      }
      if (!q.isCollapsed(l)) {
        if (!c) {
          var [, f] = q.edges(l), C = g.end(e, []);
          Se.equals(f, C) || (l = g.unhangRange(e, l, {
            voids: u
          }));
        }
        var [w, b] = q.edges(l), S = g.above(e, {
          match: (se) => fe.isElement(se) && g.isBlock(e, se),
          at: w,
          voids: u
        }), D = g.above(e, {
          match: (se) => fe.isElement(se) && g.isBlock(e, se),
          at: b,
          voids: u
        }), E = S && D && !O.equals(S[1], D[1]), A = O.equals(w.path, b.path), F = u ? null : (r = g.void(e, {
          at: w,
          mode: "highest"
        })) !== null && r !== void 0 ? r : g.elementReadOnly(e, {
          at: w,
          mode: "highest"
        }), V = u ? null : (i = g.void(e, {
          at: b,
          mode: "highest"
        })) !== null && i !== void 0 ? i : g.elementReadOnly(e, {
          at: b,
          mode: "highest"
        });
        if (F) {
          var M = g.before(e, w);
          M && S && O.isAncestor(S[1], M.path) && (w = M);
        }
        if (V) {
          var z = g.after(e, b);
          z && D && O.isAncestor(D[1], z.path) && (b = z);
        }
        var j = [], T;
        for (var R of g.nodes(e, {
          at: l,
          voids: u
        })) {
          var [N, J] = R;
          T && O.compare(J, T) === 0 || (!u && fe.isElement(N) && (g.isVoid(e, N) || g.isElementReadOnly(e, N)) || !O.isCommon(J, w.path) && !O.isCommon(J, b.path)) && (j.push(R), T = J);
        }
        var _ = Array.from(j, (se) => {
          var [, he] = se;
          return g.pathRef(e, he);
        }), te = g.pointRef(e, w), ae = g.pointRef(e, b), k = "";
        if (!A && !F) {
          var I = te.current, [Z] = g.leaf(e, I), {
            path: H
          } = I, {
            offset: ee
          } = w, X = Z.text.slice(ee);
          X.length > 0 && (e.apply({
            type: "remove_text",
            path: H,
            offset: ee,
            text: X
          }), k = X);
        }
        if (_.reverse().map((se) => se.unref()).filter((se) => se !== null).forEach((se) => ne.removeNodes(e, {
          at: se,
          voids: u
        })), !V) {
          var m = ae.current, [U] = g.leaf(e, m), {
            path: W
          } = m, P = A ? w.offset : 0, Q = U.text.slice(P, b.offset);
          Q.length > 0 && (e.apply({
            type: "remove_text",
            path: W,
            offset: P,
            text: Q
          }), k = Q);
        }
        !A && E && ae.current && te.current && ne.mergeNodes(e, {
          at: ae.current,
          hanging: !0,
          voids: u
        }), p && a && o === "character" && k.length > 1 && k.match(/[\u0E00-\u0E7F]+/) && ne.insertText(e, k.slice(0, k.length - s));
        var ie = te.unref(), G = ae.unref(), ce = a ? ie || G : G || ie;
        n.at == null && ce && ne.select(e, ce);
      }
    }
  });
}, yv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: i = !1,
      voids: a = !1
    } = r, {
      at: o = Oa(e),
      batchDirty: s = !0
    } = r;
    if (n.length) {
      if (q.isRange(o))
        if (i || (o = g.unhangRange(e, o, {
          voids: a
        })), q.isCollapsed(o))
          o = o.anchor;
        else {
          var [, u] = q.edges(o);
          if (!a && g.void(e, {
            at: u
          }))
            return;
          var l = g.pointRef(e, u);
          ne.delete(e, {
            at: o
          }), o = l.unref();
        }
      else O.isPath(o) && (o = g.start(e, o));
      if (!(!a && g.void(e, {
        at: o
      }))) {
        var c = g.above(e, {
          at: o,
          match: (X) => fe.isElement(X) && g.isInline(e, X),
          mode: "highest",
          voids: a
        });
        if (c) {
          var [, p] = c;
          if (g.isEnd(e, o, p)) {
            var d = g.after(e, p);
            o = d;
          } else if (g.isStart(e, o, p)) {
            var h = g.before(e, p);
            o = h;
          }
        }
        var y = g.above(e, {
          match: (X) => fe.isElement(X) && g.isBlock(e, X),
          at: o,
          voids: a
        }), [, v] = y, f = g.isStart(e, o, v), C = g.isEnd(e, o, v), w = f && C, b = !f || f && C, S = !C, [, D] = oe.first({
          children: n
        }, []), [, E] = oe.last({
          children: n
        }, []), A = [], F = (X) => {
          var [m, U] = X, W = U.length === 0;
          return W ? !1 : w ? !0 : !(b && O.isAncestor(U, D) && fe.isElement(m) && !e.isVoid(m) && !e.isInline(m) || S && O.isAncestor(U, E) && fe.isElement(m) && !e.isVoid(m) && !e.isInline(m));
        };
        for (var V of oe.nodes({
          children: n
        }, {
          pass: F
        }))
          F(V) && A.push(V);
        var M = [], z = [], j = [], T = !0, R = !1;
        for (var [N] of A)
          fe.isElement(N) && !e.isInline(N) ? (T = !1, R = !0, z.push(N)) : T ? M.push(N) : j.push(N);
        var [J] = g.nodes(e, {
          at: o,
          match: (X) => de.isText(X) || g.isInline(e, X),
          mode: "highest",
          voids: a
        }), [, _] = J, te = g.isStart(e, o, _), ae = g.isEnd(e, o, _), k = g.pathRef(e, C && !j.length ? O.next(v) : v), I = g.pathRef(e, ae ? O.next(_) : _);
        ne.splitNodes(e, {
          at: o,
          match: (X) => R ? fe.isElement(X) && g.isBlock(e, X) : de.isText(X) || g.isInline(e, X),
          mode: R ? "lowest" : "highest",
          always: R && (!f || M.length > 0) && (!C || j.length > 0),
          voids: a
        });
        var Z = g.pathRef(e, !te || te && ae ? O.next(_) : _);
        if (ne.insertNodes(e, M, {
          at: Z.current,
          match: (X) => de.isText(X) || g.isInline(e, X),
          mode: "highest",
          voids: a,
          batchDirty: s
        }), w && !M.length && z.length && !j.length && ne.delete(e, {
          at: v,
          voids: a
        }), ne.insertNodes(e, z, {
          at: k.current,
          match: (X) => fe.isElement(X) && g.isBlock(e, X),
          mode: "lowest",
          voids: a,
          batchDirty: s
        }), ne.insertNodes(e, j, {
          at: I.current,
          match: (X) => de.isText(X) || g.isInline(e, X),
          mode: "highest",
          voids: a,
          batchDirty: s
        }), !r.at) {
          var H;
          if (j.length > 0 && I.current ? H = O.previous(I.current) : z.length > 0 && k.current ? H = O.previous(k.current) : Z.current && (H = O.previous(Z.current)), H) {
            var ee = g.end(e, H);
            ne.select(e, ee);
          }
        }
        Z.unref(), k.unref(), I.unref();
      }
    }
  });
}, Cv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: r = "anchor"
  } = n, {
    selection: i
  } = e;
  if (i) {
    if (r === "anchor")
      ne.select(e, i.anchor);
    else if (r === "focus")
      ne.select(e, i.focus);
    else if (r === "start") {
      var [a] = q.edges(i);
      ne.select(e, a);
    } else if (r === "end") {
      var [, o] = q.edges(i);
      ne.select(e, o);
    }
  } else return;
}, Dv = (t) => {
  var {
    selection: e
  } = t;
  e && t.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, bv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: r
  } = e, {
    distance: i = 1,
    unit: a = "character",
    reverse: o = !1
  } = n, {
    edge: s = null
  } = n;
  if (r) {
    s === "start" && (s = q.isBackward(r) ? "focus" : "anchor"), s === "end" && (s = q.isBackward(r) ? "anchor" : "focus");
    var {
      anchor: u,
      focus: l
    } = r, c = {
      distance: i,
      unit: a,
      ignoreNonSelectable: !0
    }, p = {};
    if (s == null || s === "anchor") {
      var d = o ? g.before(e, u, c) : g.after(e, u, c);
      d && (p.anchor = d);
    }
    if (s == null || s === "focus") {
      var h = o ? g.before(e, l, c) : g.after(e, l, c);
      h && (p.focus = h);
    }
    ne.setSelection(e, p);
  }
}, Ev = (t, e) => {
  var {
    selection: n
  } = t;
  if (e = g.range(t, e), n) {
    ne.setSelection(t, e);
    return;
  }
  if (!q.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(pt.stringify(e)));
  t.apply({
    type: "set_selection",
    properties: n,
    newProperties: e
  });
};
function Fs(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ms(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fs(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fs(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var wv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: i
  } = e, {
    edge: a = "both"
  } = r;
  if (i) {
    a === "start" && (a = q.isBackward(i) ? "focus" : "anchor"), a === "end" && (a = q.isBackward(i) ? "anchor" : "focus");
    var {
      anchor: o,
      focus: s
    } = i, u = a === "anchor" ? o : s;
    ne.setSelection(e, {
      [a === "anchor" ? "anchor" : "focus"]: Ms(Ms({}, u), n)
    });
  }
}, Bv = (t, e) => {
  var {
    selection: n
  } = t, r = {}, i = {};
  if (n) {
    for (var a in e)
      (a === "anchor" && e.anchor != null && !Se.equals(e.anchor, n.anchor) || a === "focus" && e.focus != null && !Se.equals(e.focus, n.focus) || a !== "anchor" && a !== "focus" && e[a] !== n[a]) && (r[a] = n[a], i[a] = e[a]);
    Object.keys(r).length > 0 && t.apply({
      type: "set_selection",
      properties: r,
      newProperties: i
    });
  }
}, xv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: i = !1,
      voids: a = !1,
      mode: o = "lowest",
      batchDirty: s = !0
    } = r, {
      at: u,
      match: l,
      select: c
    } = r;
    if (oe.isNode(n) && (n = [n]), n.length !== 0) {
      var [p] = n;
      if (u || (u = Oa(e), c !== !1 && (c = !0)), c == null && (c = !1), q.isRange(u))
        if (i || (u = g.unhangRange(e, u, {
          voids: a
        })), q.isCollapsed(u))
          u = u.anchor;
        else {
          var [, d] = q.edges(u), h = g.pointRef(e, d);
          ne.delete(e, {
            at: u
          }), u = h.unref();
        }
      if (Se.isPoint(u)) {
        l == null && (de.isText(p) ? l = (M) => de.isText(M) : e.isInline(p) ? l = (M) => de.isText(M) || g.isInline(e, M) : l = (M) => fe.isElement(M) && g.isBlock(e, M));
        var [y] = g.nodes(e, {
          at: u.path,
          match: l,
          mode: o,
          voids: a
        });
        if (y) {
          var [, v] = y, f = g.pathRef(e, v), C = g.isEnd(e, u, v);
          ne.splitNodes(e, {
            at: u,
            match: l,
            mode: o,
            voids: a
          });
          var w = f.unref();
          u = C ? O.next(w) : w;
        } else
          return;
      }
      var b = O.parent(u), S = u[u.length - 1];
      if (!(!a && g.void(e, {
        at: b
      }))) {
        if (s) {
          var D = [], E = O.levels(b);
          sh(e, () => {
            var M = function() {
              var T = b.concat(S);
              S++;
              var R = {
                type: "insert_node",
                path: T,
                node: z
              };
              e.apply(R), u = O.next(u), D.push(R), de.isText ? E.push(...Array.from(oe.nodes(z), (N) => {
                var [, J] = N;
                return T.concat(J);
              })) : E.push(T);
            };
            for (var z of n)
              M();
          }, () => {
            Il(e, E, (M) => {
              var z = M;
              for (var j of D)
                if (O.operationCanTransformPath(j) && (z = O.transform(z, j), !z))
                  return null;
              return z;
            });
          });
        } else
          for (var A of n) {
            var F = b.concat(S);
            S++, e.apply({
              type: "insert_node",
              path: F,
              node: A
            }), u = O.next(u);
          }
        if (u = O.previous(u), c) {
          var V = g.end(e, u);
          V && ne.select(e, V);
        }
      }
    }
  });
}, Lv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      at: r = e.selection,
      mode: i = "lowest",
      voids: a = !1
    } = n, {
      match: o
    } = n;
    if (o == null && (o = O.isPath(r) ? Nn(e, r) : (S) => fe.isElement(S) && g.isBlock(e, S)), !!r) {
      var s = g.nodes(e, {
        at: r,
        match: o,
        mode: i,
        voids: a
      }), u = Array.from(s, (S) => {
        var [, D] = S;
        return g.pathRef(e, D);
      });
      for (var l of u) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var p = g.node(e, O.parent(c)), [d, h] = p, y = c[c.length - 1], {
          length: v
        } = d.children;
        if (v === 1) {
          var f = O.next(h);
          ne.moveNodes(e, {
            at: c,
            to: f,
            voids: a
          }), ne.removeNodes(e, {
            at: h,
            voids: a
          });
        } else if (y === 0)
          ne.moveNodes(e, {
            at: c,
            to: h,
            voids: a
          });
        else if (y === v - 1) {
          var C = O.next(h);
          ne.moveNodes(e, {
            at: c,
            to: C,
            voids: a
          });
        } else {
          var w = O.next(c), b = O.next(h);
          ne.splitNodes(e, {
            at: w,
            voids: a
          }), ne.moveNodes(e, {
            at: c,
            to: b,
            voids: a
          });
        }
      }
    }
  });
}, Av = ["text"], Ov = ["children"], Nl = (t, e) => {
  if (fe.isElement(e)) {
    var n = e;
    return g.isVoid(t, e) ? !0 : n.children.length === 1 ? Nl(t, n.children[0]) : !1;
  } else return !g.isEditor(e);
}, Sv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      match: r,
      at: i = e.selection
    } = n, {
      hanging: a = !1,
      voids: o = !1,
      mode: s = "lowest"
    } = n;
    if (i) {
      if (r == null)
        if (O.isPath(i)) {
          var [u] = g.parent(e, i);
          r = (M) => u.children.includes(M);
        } else
          r = (M) => fe.isElement(M) && g.isBlock(e, M);
      if (!a && q.isRange(i) && (i = g.unhangRange(e, i, {
        voids: o
      })), q.isRange(i))
        if (q.isCollapsed(i))
          i = i.anchor;
        else {
          var [, l] = q.edges(i), c = g.pointRef(e, l);
          ne.delete(e, {
            at: i
          }), i = c.unref(), n.at == null && ne.select(e, i);
        }
      var [p] = g.nodes(e, {
        at: i,
        match: r,
        voids: o,
        mode: s
      }), d = g.previous(e, {
        at: i,
        match: r,
        voids: o,
        mode: s
      });
      if (!(!p || !d)) {
        var [h, y] = p, [v, f] = d;
        if (!(y.length === 0 || f.length === 0)) {
          var C = O.next(f), w = O.common(y, f), b = O.isSibling(y, f), S = Array.from(g.levels(e, {
            at: y
          }), (M) => {
            var [z] = M;
            return z;
          }).slice(w.length).slice(0, -1), D = g.above(e, {
            at: y,
            mode: "highest",
            match: (M) => S.includes(M) && Nl(e, M)
          }), E = D && g.pathRef(e, D[1]), A, F;
          if (de.isText(h) && de.isText(v)) {
            var V = Zt(h, Av);
            F = v.text.length, A = V;
          } else if (fe.isElement(h) && fe.isElement(v)) {
            var V = Zt(h, Ov);
            F = v.children.length, A = V;
          } else
            throw new Error("Cannot merge the node at path [".concat(y, "] with the previous sibling because it is not the same kind: ").concat(pt.stringify(h), " ").concat(pt.stringify(v)));
          b || ne.moveNodes(e, {
            at: y,
            to: C,
            voids: o
          }), E && ne.removeNodes(e, {
            at: E.current,
            voids: o
          }), g.shouldMergeNodesRemovePrevNode(e, d, p) ? ne.removeNodes(e, {
            at: f,
            voids: o
          }) : e.apply({
            type: "merge_node",
            path: C,
            position: F,
            properties: A
          }), E && E.unref();
        }
      }
    }
  });
}, Fv = (t, e) => {
  g.withoutNormalizing(t, () => {
    var {
      to: n,
      at: r = t.selection,
      mode: i = "lowest",
      voids: a = !1
    } = e, {
      match: o
    } = e;
    if (r) {
      o == null && (o = O.isPath(r) ? Nn(t, r) : (h) => fe.isElement(h) && g.isBlock(t, h));
      var s = g.pathRef(t, n), u = g.nodes(t, {
        at: r,
        match: o,
        mode: i,
        voids: a
      }), l = Array.from(u, (h) => {
        var [, y] = h;
        return g.pathRef(t, y);
      });
      for (var c of l) {
        var p = c.unref(), d = s.current;
        p.length !== 0 && t.apply({
          type: "move_node",
          path: p,
          newPath: d
        }), s.current && O.isSibling(d, p) && O.isAfter(d, p) && (s.current = O.next(s.current));
      }
      s.unref();
    }
  });
}, Mv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: r = !1,
      voids: i = !1,
      mode: a = "lowest"
    } = n, {
      at: o = e.selection,
      match: s
    } = n;
    if (o) {
      s == null && (s = O.isPath(o) ? Nn(e, o) : (h) => fe.isElement(h) && g.isBlock(e, h)), !r && q.isRange(o) && (o = g.unhangRange(e, o, {
        voids: i
      }));
      var u = g.nodes(e, {
        at: o,
        match: s,
        mode: a,
        voids: i
      }), l = Array.from(u, (h) => {
        var [, y] = h;
        return g.pathRef(e, y);
      });
      for (var c of l) {
        var p = c.unref();
        if (p) {
          var [d] = g.node(e, p);
          e.apply({
            type: "remove_node",
            path: p,
            node: d
          });
        }
      }
    }
  });
}, Pv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      match: i,
      at: a = e.selection,
      compare: o,
      merge: s
    } = r, {
      hanging: u = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: p = !1
    } = r;
    if (a) {
      if (i == null && (i = O.isPath(a) ? Nn(e, a) : (F) => fe.isElement(F) && g.isBlock(e, F)), !u && q.isRange(a) && (a = g.unhangRange(e, a, {
        voids: p
      })), c && q.isRange(a)) {
        if (q.isCollapsed(a) && g.leaf(e, a.anchor)[0].text.length > 0)
          return;
        var d = g.rangeRef(e, a, {
          affinity: "inward"
        }), [h, y] = q.edges(a), v = l === "lowest" ? "lowest" : "highest", f = g.isEnd(e, y, y.path);
        ne.splitNodes(e, {
          at: y,
          match: i,
          mode: v,
          voids: p,
          always: !f
        });
        var C = g.isStart(e, h, h.path);
        ne.splitNodes(e, {
          at: h,
          match: i,
          mode: v,
          voids: p,
          always: !C
        }), a = d.unref(), r.at == null && ne.select(e, a);
      }
      o || (o = (F, V) => F !== V);
      for (var [w, b] of g.nodes(e, {
        at: a,
        match: i,
        mode: l,
        voids: p
      })) {
        var S = {}, D = {};
        if (b.length !== 0) {
          var E = !1;
          for (var A in n)
            A === "children" || A === "text" || o(n[A], w[A]) && (E = !0, w.hasOwnProperty(A) && (S[A] = w[A]), s ? n[A] != null && (D[A] = s(w[A], n[A])) : n[A] != null && (D[A] = n[A]));
          E && e.apply({
            type: "set_node",
            path: b,
            properties: S,
            newProperties: D
          });
        }
      }
    }
  });
}, kv = (t, e) => {
  if (q.isCollapsed(e))
    return e.anchor;
  var [, n] = q.edges(e), r = g.pointRef(t, n);
  return ne.delete(t, {
    at: e
  }), r.unref();
}, Tv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: r = "lowest",
      voids: i = !1
    } = n, {
      match: a,
      at: o = e.selection,
      height: s = 0,
      always: u = !1
    } = n;
    if (a == null && (a = (ae) => fe.isElement(ae) && g.isBlock(e, ae)), q.isRange(o) && (o = kv(e, o)), O.isPath(o)) {
      var l = o, c = g.point(e, l), [p] = g.parent(e, l);
      a = (ae) => ae === p, s = c.path.length - l.length + 1, o = c, u = !0;
    }
    if (o) {
      var d = g.pointRef(e, o, {
        affinity: "backward"
      }), h;
      try {
        var [y] = g.nodes(e, {
          at: o,
          match: a,
          mode: r,
          voids: i
        });
        if (!y)
          return;
        var v = g.void(e, {
          at: o,
          mode: "highest"
        }), f = 0;
        if (!i && v) {
          var [C, w] = v;
          if (fe.isElement(C) && e.isInline(C)) {
            var b = g.after(e, w);
            if (!b) {
              var S = {
                text: ""
              }, D = O.next(w);
              ne.insertNodes(e, S, {
                at: D,
                voids: i
              }), b = g.point(e, D);
            }
            o = b, u = !0;
          }
          var E = o.path.length - w.length;
          s = E + 1, u = !0;
        }
        h = g.pointRef(e, o);
        var A = o.path.length - s, [, F] = y, V = o.path.slice(0, A), M = s === 0 ? o.offset : o.path[A] + f;
        for (var [z, j] of g.levels(e, {
          at: V,
          reverse: !0,
          voids: i
        })) {
          var T = !1;
          if (j.length < F.length || j.length === 0 || !i && fe.isElement(z) && g.isVoid(e, z))
            break;
          var R = d.current, N = g.isEnd(e, R, j);
          if (u || !d || !g.isEdge(e, R, j)) {
            T = !0;
            var J = oe.extractProps(z);
            e.apply({
              type: "split_node",
              path: j,
              position: M,
              properties: J
            });
          }
          M = j[j.length - 1] + (T || N ? 1 : 0);
        }
        if (n.at == null) {
          var _ = h.current || g.end(e, []);
          ne.select(e, _);
        }
      } finally {
        var te;
        d.unref(), (te = h) === null || te === void 0 || te.unref();
      }
    }
  });
}, Rv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(n) || (n = [n]);
  var i = {};
  for (var a of n)
    i[a] = null;
  ne.setNodes(e, i, r);
}, jv = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: r = "lowest",
      split: i = !1,
      voids: a = !1
    } = n, {
      at: o = e.selection,
      match: s
    } = n;
    if (o) {
      s == null && (s = O.isPath(o) ? Nn(e, o) : (h) => fe.isElement(h) && g.isBlock(e, h)), O.isPath(o) && (o = g.range(e, o));
      var u = q.isRange(o) ? g.rangeRef(e, o) : null, l = g.nodes(e, {
        at: o,
        match: s,
        mode: r,
        voids: a
      }), c = Array.from(
        l,
        (h) => {
          var [, y] = h;
          return g.pathRef(e, y);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), p = function() {
        var y = d.unref(), [v] = g.node(e, y), f = g.range(e, y);
        i && u && (f = q.intersection(u.current, f)), ne.liftNodes(e, {
          at: f,
          match: (C) => fe.isAncestor(v) && v.children.includes(C),
          voids: a
        });
      };
      for (var d of c)
        p();
      u && u.unref();
    }
  });
};
function Ps(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ks(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ps(Object(n), !0).forEach(function(r) {
      bt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ps(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Iv = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: i = "lowest",
      split: a = !1,
      voids: o = !1
    } = r, {
      match: s,
      at: u = e.selection
    } = r;
    if (u) {
      if (s == null && (O.isPath(u) ? s = Nn(e, u) : e.isInline(n) ? s = (f) => fe.isElement(f) && g.isInline(e, f) || de.isText(f) : s = (f) => fe.isElement(f) && g.isBlock(e, f)), a && q.isRange(u)) {
        var [l, c] = q.edges(u), p = g.rangeRef(e, u, {
          affinity: "inward"
        });
        ne.splitNodes(e, {
          at: c,
          match: s,
          voids: o
        }), ne.splitNodes(e, {
          at: l,
          match: s,
          voids: o
        }), u = p.unref(), r.at == null && ne.select(e, u);
      }
      var d = Array.from(g.nodes(e, {
        at: u,
        match: e.isInline(n) ? (f) => fe.isElement(f) && g.isBlock(e, f) : (f) => g.isEditor(f),
        mode: "lowest",
        voids: o
      })), h = function() {
        var C = q.isRange(u) ? q.intersection(u, g.range(e, v)) : u;
        if (!C)
          return 0;
        var w = Array.from(g.nodes(e, {
          at: C,
          match: s,
          mode: i,
          voids: o
        }));
        if (w.length > 0) {
          var [b] = w, S = w[w.length - 1], [, D] = b, [, E] = S;
          if (D.length === 0 && E.length === 0)
            return 0;
          var A = O.equals(D, E) ? O.parent(D) : O.common(D, E), F = g.range(e, D, E), V = g.node(e, A), [M] = V, z = A.length + 1, j = O.next(E.slice(0, z)), T = ks(ks({}, n), {}, {
            children: []
          });
          ne.insertNodes(e, T, {
            at: j,
            voids: o
          }), ne.moveNodes(e, {
            at: F,
            match: (R) => fe.isAncestor(M) && M.children.includes(R),
            to: j.concat(0),
            voids: o
          });
        }
      }, y;
      for (var [, v] of d)
        y = h();
    }
  });
}, Nv = () => {
  var t = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => !1,
    isInline: () => !1,
    isSelectable: () => !0,
    isVoid: () => !1,
    markableVoid: () => !1,
    onChange: () => {
    },
    // Core
    apply: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return uh(t, ...r);
    },
    // Editor
    addMark: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return hh(t, ...r);
    },
    deleteBackward: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return mh(t, ...r);
    },
    deleteForward: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return yh(t, ...r);
    },
    deleteFragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ch(t, ...r);
    },
    getFragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ch(t, ...r);
    },
    insertBreak: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Fh(t, ...r);
    },
    insertSoftBreak: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ph(t, ...r);
    },
    insertFragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return yv(t, ...r);
    },
    insertNode: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Mh(t, ...r);
    },
    insertText: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Th(t, ...r);
    },
    normalizeNode: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return fh(t, ...r);
    },
    removeMark: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return cv(t, ...r);
    },
    getDirtyPaths: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return lh(t, ...r);
    },
    shouldNormalize: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return dh(t, ...r);
    },
    // Editor interface
    above: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ph(t, ...r);
    },
    after: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return vh(t, ...r);
    },
    before: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return gh(t, ...r);
    },
    collapse: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Cv(t, ...r);
    },
    delete: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return mv(t, ...r);
    },
    deselect: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Dv(t, ...r);
    },
    edges: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Dh(t, ...r);
    },
    elementReadOnly: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return bh(t, ...r);
    },
    end: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Eh(t, ...r);
    },
    first: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return wh(t, ...r);
    },
    fragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Bh(t, ...r);
    },
    getMarks: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return qh(t, ...r);
    },
    hasBlocks: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Lh(t, ...r);
    },
    hasInlines: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ah(t, ...r);
    },
    hasPath: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Oh(t, ...r);
    },
    hasTexts: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Sh(t, ...r);
    },
    insertNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return xv(t, ...r);
    },
    isBlock: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Rh(t, ...r);
    },
    isEdge: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return jh(t, ...r);
    },
    isEmpty: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ih(t, ...r);
    },
    isEnd: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Nh(t, ...r);
    },
    isNormalizing: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return $h(t, ...r);
    },
    isStart: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return zh(t, ...r);
    },
    last: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return _h(t, ...r);
    },
    leaf: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Wh(t, ...r);
    },
    levels: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Uh(t, ...r);
    },
    liftNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Lv(t, ...r);
    },
    mergeNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Sv(t, ...r);
    },
    move: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return bv(t, ...r);
    },
    moveNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Fv(t, ...r);
    },
    next: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Zh(t, ...r);
    },
    node: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Gh(t, ...r);
    },
    nodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Yh(t, ...r);
    },
    normalize: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Kh(t, ...r);
    },
    parent: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Xh(t, ...r);
    },
    path: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ev(t, ...r);
    },
    pathRef: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Jh(t, ...r);
    },
    pathRefs: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Qh(t, ...r);
    },
    point: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return rv(t, ...r);
    },
    pointRef: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return tv(t, ...r);
    },
    pointRefs: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return nv(t, ...r);
    },
    positions: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return iv(t, ...r);
    },
    previous: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return av(t, ...r);
    },
    range: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return uv(t, ...r);
    },
    rangeRef: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ov(t, ...r);
    },
    rangeRefs: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return sv(t, ...r);
    },
    removeNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Mv(t, ...r);
    },
    select: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ev(t, ...r);
    },
    setNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Pv(t, ...r);
    },
    setNormalizing: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return fv(t, ...r);
    },
    setPoint: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return wv(t, ...r);
    },
    setSelection: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Bv(t, ...r);
    },
    splitNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Tv(t, ...r);
    },
    start: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return dv(t, ...r);
    },
    string: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return pv(t, ...r);
    },
    unhangRange: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return hv(t, ...r);
    },
    unsetNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Rv(t, ...r);
    },
    unwrapNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return jv(t, ...r);
    },
    void: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return xh(t, ...r);
    },
    withoutNormalizing: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return vv(t, ...r);
    },
    wrapNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Iv(t, ...r);
    },
    shouldMergeNodesRemovePrevNode: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return gv(t, ...r);
    }
  };
  return t;
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Ts(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function $v(t) {
  var e, n;
  return Ts(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (n = e.prototype, !(Ts(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
var zv = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(t) {
    return $v(t) && Array.isArray(t.redos) && Array.isArray(t.undos) && (t.redos.length === 0 || an.isOperationList(t.redos[0].operations)) && (t.undos.length === 0 || an.isOperationList(t.undos[0].operations));
  }
}, wi = /* @__PURE__ */ new WeakMap(), Kn = /* @__PURE__ */ new WeakMap(), yn = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(t) {
    return zv.isHistory(t.history) && g.isEditor(t);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(t) {
    return Kn.get(t);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(t) {
    return wi.get(t);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(t) {
    t.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(t) {
    t.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, These operations will
   * be merged into the previous history.
   */
  withMerging(t, e) {
    var n = yn.isMerging(t);
    Kn.set(t, !0), e(), Kn.set(t, n);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(t, e) {
    var n = yn.isMerging(t);
    Kn.set(t, !1), e(), Kn.set(t, n);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(t, e) {
    var n = yn.isSaving(t);
    wi.set(t, !1), e(), wi.set(t, n);
  }
}, _v = (t) => {
  var e = t, {
    apply: n
  } = e;
  return e.history = {
    undos: [],
    redos: []
  }, e.redo = () => {
    var {
      history: r
    } = e, {
      redos: i
    } = r;
    if (i.length > 0) {
      var a = i[i.length - 1];
      a.selectionBefore && ne.setSelection(e, a.selectionBefore), yn.withoutSaving(e, () => {
        g.withoutNormalizing(e, () => {
          for (var o of a.operations)
            e.apply(o);
        });
      }), r.redos.pop(), e.writeHistory("undos", a);
    }
  }, e.undo = () => {
    var {
      history: r
    } = e, {
      undos: i
    } = r;
    if (i.length > 0) {
      var a = i[i.length - 1];
      yn.withoutSaving(e, () => {
        g.withoutNormalizing(e, () => {
          var o = a.operations.map(an.inverse).reverse();
          for (var s of o)
            e.apply(s);
          a.selectionBefore && ne.setSelection(e, a.selectionBefore);
        });
      }), e.writeHistory("redos", a), r.undos.pop();
    }
  }, e.apply = (r) => {
    var {
      operations: i,
      history: a
    } = e, {
      undos: o
    } = a, s = o[o.length - 1], u = s && s.operations[s.operations.length - 1], l = yn.isSaving(e), c = yn.isMerging(e);
    if (l == null && (l = Uv(r)), l) {
      if (c == null && (s == null ? c = !1 : i.length !== 0 ? c = !0 : c = Wv(r, u)), s && c)
        s.operations.push(r);
      else {
        var p = {
          operations: [r],
          selectionBefore: e.selection
        };
        e.writeHistory("undos", p);
      }
      for (; o.length > 100; )
        o.shift();
      a.redos = [];
    }
    n(r);
  }, e.writeHistory = (r, i) => {
    e.history[r].push(i);
  }, e;
}, Wv = (t, e) => !!(e && t.type === "insert_text" && e.type === "insert_text" && t.offset === e.offset + e.text.length && O.equals(t.path, e.path) || e && t.type === "remove_text" && e.type === "remove_text" && t.offset + t.text.length === e.offset && O.equals(t.path, e.path)), Uv = (t, e) => t.type !== "set_selection", Hv = Zv, $l = "֑-߿יִ-﷽ﹰ-ﻼ", zl = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Vv = new RegExp("^[^" + zl + "]*[" + $l + "]"), qv = new RegExp("^[^" + $l + "]*[" + zl + "]");
function Zv(t) {
  return t = String(t || ""), Vv.test(t) ? "rtl" : qv.test(t) ? "ltr" : "neutral";
}
const _l = /* @__PURE__ */ ma(Hv);
function Gv(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ma = Gv, Yv = typeof rn == "object" && rn && rn.Object === Object && rn, Kv = Yv, Xv = Kv, Jv = typeof self == "object" && self && self.Object === Object && self, Qv = Xv || Jv || Function("return this")(), Wl = Qv, eg = Wl, tg = function() {
  return eg.Date.now();
}, ng = tg, rg = /\s/;
function ig(t) {
  for (var e = t.length; e-- && rg.test(t.charAt(e)); )
    ;
  return e;
}
var ag = ig, og = ag, sg = /^\s+/;
function ug(t) {
  return t && t.slice(0, og(t) + 1).replace(sg, "");
}
var lg = ug, cg = Wl, fg = cg.Symbol, Ul = fg, Rs = Ul, Hl = Object.prototype, dg = Hl.hasOwnProperty, pg = Hl.toString, Xn = Rs ? Rs.toStringTag : void 0;
function hg(t) {
  var e = dg.call(t, Xn), n = t[Xn];
  try {
    t[Xn] = void 0;
    var r = !0;
  } catch {
  }
  var i = pg.call(t);
  return r && (e ? t[Xn] = n : delete t[Xn]), i;
}
var vg = hg, gg = Object.prototype, mg = gg.toString;
function yg(t) {
  return mg.call(t);
}
var Cg = yg, js = Ul, Dg = vg, bg = Cg, Eg = "[object Null]", wg = "[object Undefined]", Is = js ? js.toStringTag : void 0;
function Bg(t) {
  return t == null ? t === void 0 ? wg : Eg : Is && Is in Object(t) ? Dg(t) : bg(t);
}
var xg = Bg;
function Lg(t) {
  return t != null && typeof t == "object";
}
var Ag = Lg, Og = xg, Sg = Ag, Fg = "[object Symbol]";
function Mg(t) {
  return typeof t == "symbol" || Sg(t) && Og(t) == Fg;
}
var Pg = Mg, kg = lg, Ns = Ma, Tg = Pg, $s = NaN, Rg = /^[-+]0x[0-9a-f]+$/i, jg = /^0b[01]+$/i, Ig = /^0o[0-7]+$/i, Ng = parseInt;
function $g(t) {
  if (typeof t == "number")
    return t;
  if (Tg(t))
    return $s;
  if (Ns(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ns(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = kg(t);
  var n = jg.test(t);
  return n || Ig.test(t) ? Ng(t.slice(2), n ? 2 : 8) : Rg.test(t) ? $s : +t;
}
var zg = $g, _g = Ma, Bi = ng, zs = zg, Wg = "Expected a function", Ug = Math.max, Hg = Math.min;
function Vg(t, e, n) {
  var r, i, a, o, s, u, l = 0, c = !1, p = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(Wg);
  e = zs(e) || 0, _g(n) && (c = !!n.leading, p = "maxWait" in n, a = p ? Ug(zs(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d);
  function h(E) {
    var A = r, F = i;
    return r = i = void 0, l = E, o = t.apply(F, A), o;
  }
  function y(E) {
    return l = E, s = setTimeout(C, e), c ? h(E) : o;
  }
  function v(E) {
    var A = E - u, F = E - l, V = e - A;
    return p ? Hg(V, a - F) : V;
  }
  function f(E) {
    var A = E - u, F = E - l;
    return u === void 0 || A >= e || A < 0 || p && F >= a;
  }
  function C() {
    var E = Bi();
    if (f(E))
      return w(E);
    s = setTimeout(C, v(E));
  }
  function w(E) {
    return s = void 0, d && r ? h(E) : (r = i = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0;
  }
  function S() {
    return s === void 0 ? o : w(Bi());
  }
  function D() {
    var E = Bi(), A = f(E);
    if (r = arguments, i = this, u = E, A) {
      if (s === void 0)
        return y(u);
      if (p)
        return clearTimeout(s), s = setTimeout(C, e), h(u);
    }
    return s === void 0 && (s = setTimeout(C, e)), o;
  }
  return D.cancel = b, D.flush = S, D;
}
var Vl = Vg;
const qg = /* @__PURE__ */ ma(Vl);
var Zg = Vl, Gg = Ma, Yg = "Expected a function";
function Kg(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(Yg);
  return Gg(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), Zg(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
var Xg = Kg;
const Jg = /* @__PURE__ */ ma(Xg), _s = (t) => typeof t == "object" && t != null && t.nodeType === 1, Ws = (t, e) => (!e || t !== "hidden") && t !== "visible" && t !== "clip", xi = (t, e) => {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    const n = getComputedStyle(t, null);
    return Ws(n.overflowY, e) || Ws(n.overflowX, e) || ((r) => {
      const i = ((a) => {
        if (!a.ownerDocument || !a.ownerDocument.defaultView) return null;
        try {
          return a.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!i && (i.clientHeight < r.scrollHeight || i.clientWidth < r.scrollWidth);
    })(t);
  }
  return !1;
}, Ar = (t, e, n, r, i, a, o, s) => a < t && o > e || a > t && o < e ? 0 : a <= t && s <= n || o >= e && s >= n ? a - t - r : o > e && s < n || a < t && s > n ? o - e + i : 0, Qg = (t) => {
  const e = t.parentElement;
  return e ?? (t.getRootNode().host || null);
}, Us = (t, e) => {
  var n, r, i, a;
  if (typeof document > "u") return [];
  const { scrollMode: o, block: s, inline: u, boundary: l, skipOverflowHiddenElements: c } = e, p = typeof l == "function" ? l : (J) => J !== l;
  if (!_s(t)) throw new TypeError("Invalid target");
  const d = document.scrollingElement || document.documentElement, h = [];
  let y = t;
  for (; _s(y) && p(y); ) {
    if (y = Qg(y), y === d) {
      h.push(y);
      break;
    }
    y != null && y === document.body && xi(y) && !xi(document.documentElement) || y != null && xi(y, c) && h.push(y);
  }
  const v = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, f = (a = (i = window.visualViewport) == null ? void 0 : i.height) != null ? a : innerHeight, { scrollX: C, scrollY: w } = window, { height: b, width: S, top: D, right: E, bottom: A, left: F } = t.getBoundingClientRect(), { top: V, right: M, bottom: z, left: j } = ((J) => {
    const _ = window.getComputedStyle(J);
    return { top: parseFloat(_.scrollMarginTop) || 0, right: parseFloat(_.scrollMarginRight) || 0, bottom: parseFloat(_.scrollMarginBottom) || 0, left: parseFloat(_.scrollMarginLeft) || 0 };
  })(t);
  let T = s === "start" || s === "nearest" ? D - V : s === "end" ? A + z : D + b / 2 - V + z, R = u === "center" ? F + S / 2 - j + M : u === "end" ? E + M : F - j;
  const N = [];
  for (let J = 0; J < h.length; J++) {
    const _ = h[J], { height: te, width: ae, top: k, right: I, bottom: Z, left: H } = _.getBoundingClientRect();
    if (o === "if-needed" && D >= 0 && F >= 0 && A <= f && E <= v && D >= k && A <= Z && F >= H && E <= I) return N;
    const ee = getComputedStyle(_), X = parseInt(ee.borderLeftWidth, 10), m = parseInt(ee.borderTopWidth, 10), U = parseInt(ee.borderRightWidth, 10), W = parseInt(ee.borderBottomWidth, 10);
    let P = 0, Q = 0;
    const ie = "offsetWidth" in _ ? _.offsetWidth - _.clientWidth - X - U : 0, G = "offsetHeight" in _ ? _.offsetHeight - _.clientHeight - m - W : 0, ce = "offsetWidth" in _ ? _.offsetWidth === 0 ? 0 : ae / _.offsetWidth : 0, se = "offsetHeight" in _ ? _.offsetHeight === 0 ? 0 : te / _.offsetHeight : 0;
    if (d === _) P = s === "start" ? T : s === "end" ? T - f : s === "nearest" ? Ar(w, w + f, f, m, W, w + T, w + T + b, b) : T - f / 2, Q = u === "start" ? R : u === "center" ? R - v / 2 : u === "end" ? R - v : Ar(C, C + v, v, X, U, C + R, C + R + S, S), P = Math.max(0, P + w), Q = Math.max(0, Q + C);
    else {
      P = s === "start" ? T - k - m : s === "end" ? T - Z + W + G : s === "nearest" ? Ar(k, Z, te, m, W + G, T, T + b, b) : T - (k + te / 2) + G / 2, Q = u === "start" ? R - H - X : u === "center" ? R - (H + ae / 2) + ie / 2 : u === "end" ? R - I + U + ie : Ar(H, I, ae, X, U + ie, R, R + S, S);
      const { scrollLeft: he, scrollTop: ve } = _;
      P = se === 0 ? 0 : Math.max(0, Math.min(ve + P / se, _.scrollHeight - te / se + G)), Q = ce === 0 ? 0 : Math.max(0, Math.min(he + Q / ce, _.scrollWidth - ae / ce + ie)), T += ve - P, R += he - Q;
    }
    N.push({ el: _, top: P, left: Q });
  }
  return N;
}, em = (t) => t === !1 ? { block: "end", inline: "nearest" } : ((e) => e === Object(e) && Object.keys(e).length !== 0)(t) ? t : { block: "start", inline: "nearest" };
function tm(t, e) {
  if (!t.isConnected || !((i) => {
    let a = i;
    for (; a && a.parentNode; ) {
      if (a.parentNode === document) return !0;
      a = a.parentNode instanceof ShadowRoot ? a.parentNode.host : a.parentNode;
    }
    return !1;
  })(t)) return;
  const n = ((i) => {
    const a = window.getComputedStyle(i);
    return { top: parseFloat(a.scrollMarginTop) || 0, right: parseFloat(a.scrollMarginRight) || 0, bottom: parseFloat(a.scrollMarginBottom) || 0, left: parseFloat(a.scrollMarginLeft) || 0 };
  })(t);
  if (((i) => typeof i == "object" && typeof i.behavior == "function")(e)) return e.behavior(Us(t, e));
  const r = typeof e == "boolean" || e == null ? void 0 : e.behavior;
  for (const { el: i, top: a, left: o } of Us(t, em(e))) {
    const s = a - n.top + n.bottom, u = o - n.left + n.right;
    i.scroll({ top: s, left: u, behavior: r });
  }
}
var Dn = [], nm = function() {
  return Dn.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, rm = function() {
  return Dn.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, Hs = "ResizeObserver loop completed with undelivered notifications.", im = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: Hs
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = Hs), window.dispatchEvent(t);
}, sr;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(sr || (sr = {}));
var bn = function(t) {
  return Object.freeze(t);
}, am = /* @__PURE__ */ function() {
  function t(e, n) {
    this.inlineSize = e, this.blockSize = n, bn(this);
  }
  return t;
}(), ql = function() {
  function t(e, n, r, i) {
    return this.x = e, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, bn(this);
  }
  return t.prototype.toJSON = function() {
    var e = this, n = e.x, r = e.y, i = e.top, a = e.right, o = e.bottom, s = e.left, u = e.width, l = e.height;
    return { x: n, y: r, top: i, right: a, bottom: o, left: s, width: u, height: l };
  }, t.fromRect = function(e) {
    return new t(e.x, e.y, e.width, e.height);
  }, t;
}(), Pa = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, Zl = function(t) {
  if (Pa(t)) {
    var e = t.getBBox(), n = e.width, r = e.height;
    return !n && !r;
  }
  var i = t, a = i.offsetWidth, o = i.offsetHeight;
  return !(a || o || t.getClientRects().length);
}, Vs = function(t) {
  var e;
  if (t instanceof Element)
    return !0;
  var n = (e = t == null ? void 0 : t.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(n && t instanceof n.Element);
}, om = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, er = typeof window < "u" ? window : {}, Or = /* @__PURE__ */ new WeakMap(), qs = /auto|scroll/, sm = /^tb|vertical/, um = /msie|trident/i.test(er.navigator && er.navigator.userAgent), It = function(t) {
  return parseFloat(t || "0");
}, Tn = function(t, e, n) {
  return t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = !1), new am((n ? e : t) || 0, (n ? t : e) || 0);
}, Zs = bn({
  devicePixelContentBoxSize: Tn(),
  borderBoxSize: Tn(),
  contentBoxSize: Tn(),
  contentRect: new ql(0, 0, 0, 0)
}), Gl = function(t, e) {
  if (e === void 0 && (e = !1), Or.has(t) && !e)
    return Or.get(t);
  if (Zl(t))
    return Or.set(t, Zs), Zs;
  var n = getComputedStyle(t), r = Pa(t) && t.ownerSVGElement && t.getBBox(), i = !um && n.boxSizing === "border-box", a = sm.test(n.writingMode || ""), o = !r && qs.test(n.overflowY || ""), s = !r && qs.test(n.overflowX || ""), u = r ? 0 : It(n.paddingTop), l = r ? 0 : It(n.paddingRight), c = r ? 0 : It(n.paddingBottom), p = r ? 0 : It(n.paddingLeft), d = r ? 0 : It(n.borderTopWidth), h = r ? 0 : It(n.borderRightWidth), y = r ? 0 : It(n.borderBottomWidth), v = r ? 0 : It(n.borderLeftWidth), f = p + l, C = u + c, w = v + h, b = d + y, S = s ? t.offsetHeight - b - t.clientHeight : 0, D = o ? t.offsetWidth - w - t.clientWidth : 0, E = i ? f + w : 0, A = i ? C + b : 0, F = r ? r.width : It(n.width) - E - D, V = r ? r.height : It(n.height) - A - S, M = F + f + D + w, z = V + C + S + b, j = bn({
    devicePixelContentBoxSize: Tn(Math.round(F * devicePixelRatio), Math.round(V * devicePixelRatio), a),
    borderBoxSize: Tn(M, z, a),
    contentBoxSize: Tn(F, V, a),
    contentRect: new ql(p, u, F, V)
  });
  return Or.set(t, j), j;
}, Yl = function(t, e, n) {
  var r = Gl(t, n), i = r.borderBoxSize, a = r.contentBoxSize, o = r.devicePixelContentBoxSize;
  switch (e) {
    case sr.DEVICE_PIXEL_CONTENT_BOX:
      return o;
    case sr.BORDER_BOX:
      return i;
    default:
      return a;
  }
}, lm = /* @__PURE__ */ function() {
  function t(e) {
    var n = Gl(e);
    this.target = e, this.contentRect = n.contentRect, this.borderBoxSize = bn([n.borderBoxSize]), this.contentBoxSize = bn([n.contentBoxSize]), this.devicePixelContentBoxSize = bn([n.devicePixelContentBoxSize]);
  }
  return t;
}(), Kl = function(t) {
  if (Zl(t))
    return 1 / 0;
  for (var e = 0, n = t.parentNode; n; )
    e += 1, n = n.parentNode;
  return e;
}, cm = function() {
  var t = 1 / 0, e = [];
  Dn.forEach(function(o) {
    if (o.activeTargets.length !== 0) {
      var s = [];
      o.activeTargets.forEach(function(l) {
        var c = new lm(l.target), p = Kl(l.target);
        s.push(c), l.lastReportedSize = Yl(l.target, l.observedBox), p < t && (t = p);
      }), e.push(function() {
        o.callback.call(o.observer, s, o.observer);
      }), o.activeTargets.splice(0, o.activeTargets.length);
    }
  });
  for (var n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    i();
  }
  return t;
}, Gs = function(t) {
  Dn.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (Kl(i.target) > t ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, fm = function() {
  var t = 0;
  for (Gs(t); nm(); )
    t = cm(), Gs(t);
  return rm() && im(), t > 0;
}, Li, Xl = [], dm = function() {
  return Xl.splice(0).forEach(function(t) {
    return t();
  });
}, pm = function(t) {
  if (!Li) {
    var e = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return dm();
    }).observe(n, r), Li = function() {
      n.textContent = "".concat(e ? e-- : e++);
    };
  }
  Xl.push(t), Li();
}, hm = function(t) {
  pm(function() {
    requestAnimationFrame(t);
  });
}, _r = 0, vm = function() {
  return !!_r;
}, gm = 250, mm = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Ys = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Ks = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, Ai = !1, ym = function() {
  function t() {
    var e = this;
    this.stopped = !0, this.listener = function() {
      return e.schedule();
    };
  }
  return t.prototype.run = function(e) {
    var n = this;
    if (e === void 0 && (e = gm), !Ai) {
      Ai = !0;
      var r = Ks(e);
      hm(function() {
        var i = !1;
        try {
          i = fm();
        } finally {
          if (Ai = !1, e = r - Ks(), !vm())
            return;
          i ? n.run(1e3) : e > 0 ? n.run(e) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var e = this, n = function() {
      return e.observer && e.observer.observe(document.body, mm);
    };
    document.body ? n() : er.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Ys.forEach(function(n) {
      return er.addEventListener(n, e.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), Ys.forEach(function(n) {
      return er.removeEventListener(n, e.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), na = new ym(), Xs = function(t) {
  !_r && t > 0 && na.start(), _r += t, !_r && na.stop();
}, Cm = function(t) {
  return !Pa(t) && !om(t) && getComputedStyle(t).display === "inline";
}, Dm = function() {
  function t(e, n) {
    this.target = e, this.observedBox = n || sr.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var e = Yl(this.target, this.observedBox, !0);
    return Cm(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, t;
}(), bm = /* @__PURE__ */ function() {
  function t(e, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = n;
  }
  return t;
}(), Sr = /* @__PURE__ */ new WeakMap(), Js = function(t, e) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === e)
      return n;
  return -1;
}, Fr = function() {
  function t() {
  }
  return t.connect = function(e, n) {
    var r = new bm(e, n);
    Sr.set(e, r);
  }, t.observe = function(e, n, r) {
    var i = Sr.get(e), a = i.observationTargets.length === 0;
    Js(i.observationTargets, n) < 0 && (a && Dn.push(i), i.observationTargets.push(new Dm(n, r && r.box)), Xs(1), na.schedule());
  }, t.unobserve = function(e, n) {
    var r = Sr.get(e), i = Js(r.observationTargets, n), a = r.observationTargets.length === 1;
    i >= 0 && (a && Dn.splice(Dn.indexOf(r), 1), r.observationTargets.splice(i, 1), Xs(-1));
  }, t.disconnect = function(e) {
    var n = this, r = Sr.get(e);
    r.observationTargets.slice().forEach(function(i) {
      return n.unobserve(e, i.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, t;
}(), Em = function() {
  function t(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Fr.connect(this, e);
  }
  return t.prototype.observe = function(e, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Vs(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Fr.observe(this, e, n);
  }, t.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Vs(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Fr.unobserve(this, e);
  }, t.prototype.disconnect = function() {
    Fr.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
function wm(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), i, a;
  for (a = 0; a < r.length; a++)
    i = r[a], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function jn(t, e) {
  if (t == null) return {};
  var n = wm(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(t);
    for (i = 0; i < a.length; i++)
      r = a[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function ur(t) {
  "@babel/helpers - typeof";
  return ur = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, ur(t);
}
function Bm(t, e) {
  if (ur(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (ur(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function xm(t) {
  var e = Bm(t, "string");
  return ur(e) === "symbol" ? e : String(e);
}
function Pt(t, e, n) {
  return e = xm(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var ka = /* @__PURE__ */ ht(null), ln = () => {
  var t = _e(ka);
  if (!t)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return t;
}, Oi, Si, Jl = parseInt(Y.version.split(".")[0], 10), Ql = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Qs = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), Dt = typeof navigator < "u" && /Android/.test(navigator.userAgent), kn = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), gn = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), Lm = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), ec = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), Am = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), Om = Dt && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), Sm = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), Fm = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), Mm = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), Wr = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
typeof navigator < "u" && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((Oi = navigator.userAgent.match(/Version\/(\d+)/)) !== null && Oi !== void 0 && Oi[1] && parseInt((Si = navigator.userAgent.match(/Version\/(\d+)/)) === null || Si === void 0 ? void 0 : Si[1], 10) < 17);
var Kt = (!Am || !Om) && !Lm && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Ta = /* @__PURE__ */ new WeakMap(), Ra = /* @__PURE__ */ new WeakMap(), tc = /* @__PURE__ */ new WeakMap(), Ur = /* @__PURE__ */ new WeakMap(), ra = /* @__PURE__ */ new WeakMap(), lr = /* @__PURE__ */ new WeakMap(), En = /* @__PURE__ */ new WeakMap(), Qr = /* @__PURE__ */ new WeakMap(), ui = /* @__PURE__ */ new WeakMap(), ia = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), Cn = /* @__PURE__ */ new WeakMap(), tr = /* @__PURE__ */ new WeakMap(), aa = /* @__PURE__ */ new WeakMap(), ja = /* @__PURE__ */ new WeakMap(), Rt = /* @__PURE__ */ new WeakMap(), Vt = /* @__PURE__ */ new WeakMap(), Et = /* @__PURE__ */ new WeakMap(), tn = /* @__PURE__ */ new WeakMap(), nn = /* @__PURE__ */ new WeakMap(), nc = /* @__PURE__ */ new WeakMap(), In = Symbol("placeholder"), rc = Symbol("mark-placeholder"), ic = globalThis.Node, Pm = globalThis.Text, Ia = (t) => t && t.ownerDocument && t.ownerDocument.defaultView || null, km = (t) => un(t) && t.nodeType === 8, Mt = (t) => un(t) && t.nodeType === 1, un = (t) => {
  var e = Ia(t);
  return !!e && t instanceof e.Node;
}, oa = (t) => {
  var e = t && t.anchorNode && Ia(t.anchorNode);
  return !!e && t instanceof e.Selection;
}, ac = (t) => un(t) && t.nodeType === 3, Tm = (t) => t.clipboardData && t.clipboardData.getData("text/plain") !== "" && t.clipboardData.types.length === 1, Rm = (t) => {
  var [e, n] = t;
  if (Mt(e) && e.childNodes.length) {
    var r = n === e.childNodes.length, i = r ? n - 1 : n;
    for ([e, i] = oc(e, i, r ? "backward" : "forward"), r = i < n; Mt(e) && e.childNodes.length; ) {
      var a = r ? e.childNodes.length - 1 : 0;
      e = Im(e, a, r ? "backward" : "forward");
    }
    n = r && e.textContent != null ? e.textContent.length : 0;
  }
  return [e, n];
}, jm = (t) => {
  for (var e = t && t.parentNode; e; ) {
    if (e.toString() === "[object ShadowRoot]")
      return !0;
    e = e.parentNode;
  }
  return !1;
}, oc = (t, e, n) => {
  for (var {
    childNodes: r
  } = t, i = r[e], a = e, o = !1, s = !1; (km(i) || Mt(i) && i.childNodes.length === 0 || Mt(i) && i.getAttribute("contenteditable") === "false") && !(o && s); ) {
    if (a >= r.length) {
      o = !0, a = e - 1, n = "backward";
      continue;
    }
    if (a < 0) {
      s = !0, a = e + 1, n = "forward";
      continue;
    }
    i = r[a], e = a, a += n === "forward" ? 1 : -1;
  }
  return [i, e];
}, Im = (t, e, n) => {
  var [r] = oc(t, e, n);
  return r;
}, sc = (t) => {
  var e = "";
  if (ac(t) && t.nodeValue)
    return t.nodeValue;
  if (Mt(t)) {
    for (var n of Array.from(t.childNodes))
      e += sc(n);
    var r = getComputedStyle(t).getPropertyValue("display");
    (r === "block" || r === "list" || t.tagName === "BR") && (e += `
`);
  }
  return e;
}, Nm = /data-slate-fragment="(.+?)"/m, $m = (t) => {
  var e = t.getData("text/html"), [, n] = e.match(Nm) || [];
  return n;
}, nr = (t) => t.getSelection != null ? t.getSelection() : document.getSelection(), Na = (t, e, n) => {
  var {
    target: r
  } = e;
  if (Mt(r) && r.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: i
  } = K.getWindow(t);
  if (i.contains(r))
    return K.hasDOMNode(t, r, {
      editable: !0
    });
  var a = n.find((o) => {
    var {
      addedNodes: s,
      removedNodes: u
    } = o;
    for (var l of s)
      if (l === r || l.contains(r))
        return !0;
    for (var c of u)
      if (c === r || c.contains(r))
        return !0;
  });
  return !a || a === e ? !1 : Na(t, a, n);
}, zm = () => {
  for (var t = document.activeElement; (e = t) !== null && e !== void 0 && e.shadowRoot && (n = t.shadowRoot) !== null && n !== void 0 && n.activeElement; ) {
    var e, n, r;
    t = (r = t) === null || r === void 0 || (r = r.shadowRoot) === null || r === void 0 ? void 0 : r.activeElement;
  }
  return t;
}, eu = (t, e) => !!(t.compareDocumentPosition(e) & ic.DOCUMENT_POSITION_PRECEDING), _m = (t, e) => !!(t.compareDocumentPosition(e) & ic.DOCUMENT_POSITION_FOLLOWING), Wm = 0;
class Um {
  constructor() {
    Pt(this, "id", void 0), this.id = "".concat(Wm++);
  }
}
var K = {
  androidPendingDiffs: (t) => Et.get(t),
  androidScheduleFlush: (t) => {
    var e;
    (e = ja.get(t)) === null || e === void 0 || e();
  },
  blur: (t) => {
    var e = K.toDOMNode(t, t), n = K.findDocumentOrShadowRoot(t);
    on.set(t, !1), n.activeElement === e && e.blur();
  },
  deselect: (t) => {
    var {
      selection: e
    } = t, n = K.findDocumentOrShadowRoot(t), r = nr(n);
    r && r.rangeCount > 0 && r.removeAllRanges(), e && ne.deselect(t);
  },
  findDocumentOrShadowRoot: (t) => {
    var e = K.toDOMNode(t, t), n = e.getRootNode();
    return n instanceof Document || n instanceof ShadowRoot ? n : e.ownerDocument;
  },
  findEventRange: (t, e) => {
    "nativeEvent" in e && (e = e.nativeEvent);
    var {
      clientX: n,
      clientY: r,
      target: i
    } = e;
    if (n == null || r == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var a = K.toSlateNode(t, e.target), o = K.findPath(t, a);
    if (fe.isElement(a) && g.isVoid(t, a)) {
      var s = i.getBoundingClientRect(), u = t.isInline(a) ? n - s.left < s.left + s.width - n : r - s.top < s.top + s.height - r, l = g.point(t, o, {
        edge: u ? "start" : "end"
      }), c = u ? g.before(t, l) : g.after(t, l);
      if (c) {
        var p = g.range(t, c);
        return p;
      }
    }
    var d, {
      document: h
    } = K.getWindow(t);
    if (h.caretRangeFromPoint)
      d = h.caretRangeFromPoint(n, r);
    else {
      var y = h.caretPositionFromPoint(n, r);
      y && (d = h.createRange(), d.setStart(y.offsetNode, y.offset), d.setEnd(y.offsetNode, y.offset));
    }
    if (!d)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var v = K.toSlateRange(t, d, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return v;
  },
  findKey: (t, e) => {
    var n = Qr.get(e);
    return n || (n = new Um(), Qr.set(e, n)), n;
  },
  findPath: (t, e) => {
    for (var n = [], r = e; ; ) {
      var i = Ra.get(r);
      if (i == null) {
        if (g.isEditor(r))
          return n;
        break;
      }
      var a = Ta.get(r);
      if (a == null)
        break;
      n.unshift(a), r = i;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(pt.stringify(e)));
  },
  focus: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!on.get(e)) {
      if (n.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (e.operations.length > 0) {
        setTimeout(() => {
          K.focus(e, {
            retries: n.retries - 1
          });
        }, 10);
        return;
      }
      var r = K.toDOMNode(e, e), i = K.findDocumentOrShadowRoot(e);
      if (i.activeElement !== r) {
        if (e.selection && i instanceof Document) {
          var a = nr(i), o = K.toDOMRange(e, e.selection);
          a == null || a.removeAllRanges(), a == null || a.addRange(o);
        }
        e.selection || ne.select(e, g.start(e, [])), on.set(e, !0), r.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (t) => {
    var e = tc.get(t);
    if (!e)
      throw new Error("Unable to find a host window element for this editor");
    return e;
  },
  hasDOMNode: function(e, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: i = !1
    } = r, a = K.toDOMNode(e, e), o;
    try {
      o = Mt(n) ? n : n.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return o ? o.closest("[data-slate-editor]") === a && (!i || o.isContentEditable ? !0 : typeof o.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    o.closest('[contenteditable="false"]') === a || !!o.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (t, e) => un(e) && K.hasDOMNode(t, e, {
    editable: !0
  }),
  hasRange: (t, e) => {
    var {
      anchor: n,
      focus: r
    } = e;
    return g.hasPath(t, n.path) && g.hasPath(t, r.path);
  },
  hasSelectableTarget: (t, e) => K.hasEditableTarget(t, e) || K.isTargetInsideNonReadonlyVoid(t, e),
  hasTarget: (t, e) => un(e) && K.hasDOMNode(t, e),
  insertData: (t, e) => {
    t.insertData(e);
  },
  insertFragmentData: (t, e) => t.insertFragmentData(e),
  insertTextData: (t, e) => t.insertTextData(e),
  isComposing: (t) => !!Cn.get(t),
  isFocused: (t) => !!on.get(t),
  isReadOnly: (t) => !!ia.get(t),
  isTargetInsideNonReadonlyVoid: (t, e) => {
    if (ia.get(t)) return !1;
    var n = K.hasTarget(t, e) && K.toSlateNode(t, e);
    return fe.isElement(n) && g.isVoid(t, n);
  },
  setFragmentData: (t, e, n) => t.setFragmentData(e, n),
  toDOMNode: (t, e) => {
    var n = ui.get(t), r = g.isEditor(e) ? Ur.get(t) : n == null ? void 0 : n.get(K.findKey(t, e));
    if (!r)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(pt.stringify(e)));
    return r;
  },
  toDOMPoint: (t, e) => {
    var [n] = g.node(t, e.path), r = K.toDOMNode(t, n), i;
    g.void(t, {
      at: e
    }) && (e = {
      path: e.path,
      offset: 0
    });
    for (var a = "[data-slate-string], [data-slate-zero-width]", o = Array.from(r.querySelectorAll(a)), s = 0, u = 0; u < o.length; u++) {
      var l = o[u], c = l.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: p
        } = c.textContent, d = l.getAttribute("data-slate-length"), h = d == null ? p : parseInt(d, 10), y = s + h, v = o[u + 1];
        if (e.offset === y && v !== null && v !== void 0 && v.hasAttribute("data-slate-mark-placeholder")) {
          var f, C = v.childNodes[0];
          i = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            C instanceof Pm ? C : v,
            (f = v.textContent) !== null && f !== void 0 && f.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (e.offset <= y) {
          var w = Math.min(p, Math.max(0, e.offset - s));
          i = [c, w];
          break;
        }
        s = y;
      }
    }
    if (!i)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(pt.stringify(e)));
    return i;
  },
  toDOMRange: (t, e) => {
    var {
      anchor: n,
      focus: r
    } = e, i = q.isBackward(e), a = K.toDOMPoint(t, n), o = q.isCollapsed(e) ? a : K.toDOMPoint(t, r), s = K.getWindow(t), u = s.document.createRange(), [l, c] = i ? o : a, [p, d] = i ? a : o, h = Mt(l) ? l : l.parentElement, y = !!h.getAttribute("data-slate-zero-width"), v = Mt(p) ? p : p.parentElement, f = !!v.getAttribute("data-slate-zero-width");
    return u.setStart(l, y ? 1 : c), u.setEnd(p, f ? 1 : d), u;
  },
  toSlateNode: (t, e) => {
    var n = Mt(e) ? e : e.parentElement;
    n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
    var r = n ? lr.get(n) : null;
    if (!r)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(n));
    return r;
  },
  toSlatePoint: (t, e, n) => {
    var {
      exactMatch: r,
      suppressThrow: i,
      searchDirection: a = "backward"
    } = n, [o, s] = r ? e : Rm(e), u = o.parentNode, l = null, c = 0;
    if (u) {
      var p, d, h = K.toDOMNode(t, t), y = u.closest('[data-slate-void="true"]'), v = y && h.contains(y) ? y : null, f = u.closest('[contenteditable="false"]'), C = f && h.contains(f) ? f : null, w = u.closest("[data-slate-leaf]"), b = null;
      if (w) {
        if (l = w.closest('[data-slate-node="text"]'), l) {
          var S = K.getWindow(t), D = S.document.createRange();
          D.setStart(l, 0), D.setEnd(o, s);
          var E = D.cloneContents(), A = [...Array.prototype.slice.call(E.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(E.querySelectorAll("[contenteditable=false]"))];
          A.forEach((H) => {
            if (Dt && !r && H.hasAttribute("data-slate-zero-width") && H.textContent.length > 0 && H.textContext !== "\uFEFF") {
              H.textContent.startsWith("\uFEFF") && (H.textContent = H.textContent.slice(1));
              return;
            }
            H.parentNode.removeChild(H);
          }), c = E.textContent.length, b = l;
        }
      } else if (v) {
        for (var F = v.querySelectorAll("[data-slate-leaf]"), V = 0; V < F.length; V++) {
          var M = F[V];
          if (K.hasDOMNode(t, M)) {
            w = M;
            break;
          }
        }
        w ? (l = w.closest('[data-slate-node="text"]'), b = w, c = b.textContent.length, b.querySelectorAll("[data-slate-zero-width]").forEach((H) => {
          c -= H.textContent.length;
        })) : c = 1;
      } else if (C) {
        var z = (H) => H ? H.querySelectorAll(
          // Exclude leaf nodes in nested editors
          "[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])"
        ) : [], j = C.closest('[data-slate-node="element"]');
        if (a === "forward") {
          var T, R = [...z(j), ...z(j == null ? void 0 : j.nextElementSibling)];
          w = (T = R.find((H) => _m(C, H))) !== null && T !== void 0 ? T : null;
        } else {
          var N, J = [...z(j == null ? void 0 : j.previousElementSibling), ...z(j)];
          w = (N = J.findLast((H) => eu(C, H))) !== null && N !== void 0 ? N : null;
        }
        w && (l = w.closest('[data-slate-node="text"]'), b = w, a === "forward" ? c = 0 : (c = b.textContent.length, b.querySelectorAll("[data-slate-zero-width]").forEach((H) => {
          c -= H.textContent.length;
        })));
      }
      b && c === b.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      Dt && b.getAttribute("data-slate-zero-width") === "z" && (p = b.textContent) !== null && p !== void 0 && p.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (u.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      kn && (d = b.textContent) !== null && d !== void 0 && d.endsWith(`

`)) && c--;
    }
    if (Dt && !l && !r) {
      var _ = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
      if (_ && K.hasDOMNode(t, _, {
        editable: !0
      })) {
        var te = K.toSlateNode(t, _), {
          path: ae,
          offset: k
        } = g.start(t, K.findPath(t, te));
        return _.querySelector("[data-slate-leaf]") || (k = s), {
          path: ae,
          offset: k
        };
      }
    }
    if (!l) {
      if (i)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(e));
    }
    var I = K.toSlateNode(t, l), Z = K.findPath(t, I);
    return {
      path: Z,
      offset: c
    };
  },
  toSlateRange: (t, e, n) => {
    var r, {
      exactMatch: i,
      suppressThrow: a
    } = n, o = oa(e) ? e.anchorNode : e.startContainer, s, u, l, c, p;
    if (o)
      if (oa(e)) {
        if (kn && e.rangeCount > 1) {
          l = e.focusNode;
          var d = e.getRangeAt(0), h = e.getRangeAt(e.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && d.startContainer instanceof HTMLTableRowElement && h.startContainer instanceof HTMLTableRowElement) {
            let E = function(A) {
              return A.childElementCount > 0 ? E(A.children[0]) : A;
            };
            var y = d.startContainer, v = h.startContainer, f = E(y.children[d.startOffset]), C = E(v.children[h.startOffset]);
            c = 0, C.childNodes.length > 0 ? s = C.childNodes[0] : s = C, f.childNodes.length > 0 ? l = f.childNodes[0] : l = f, C instanceof HTMLElement ? u = C.innerHTML.length : u = 0;
          } else
            d.startContainer === l ? (s = h.endContainer, u = h.endOffset, c = d.startOffset) : (s = d.startContainer, u = d.endOffset, c = h.startOffset);
        } else
          s = e.anchorNode, u = e.anchorOffset, l = e.focusNode, c = e.focusOffset;
        ec && jm(s) || kn ? p = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset : p = e.isCollapsed;
      } else
        s = e.startContainer, u = e.startOffset, l = e.endContainer, c = e.endOffset, p = e.collapsed;
    if (s == null || l == null || u == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(e));
    kn && (r = l.textContent) !== null && r !== void 0 && r.endsWith(`

`) && c === l.textContent.length && c--;
    var w = K.toSlatePoint(t, [s, u], {
      exactMatch: i,
      suppressThrow: a
    });
    if (!w)
      return null;
    var b = eu(s, l) || s === l && c < u, S = p ? w : K.toSlatePoint(t, [l, c], {
      exactMatch: i,
      suppressThrow: a,
      searchDirection: b ? "forward" : "backward"
    });
    if (!S)
      return null;
    var D = {
      anchor: w,
      focus: S
    };
    return q.isExpanded(D) && q.isForward(D) && Mt(l) && g.void(t, {
      at: D.focus,
      mode: "highest"
    }) && (D = g.unhangRange(t, D, {
      voids: !0
    })), D;
  }
};
function Hm(t, e) {
  var {
    path: n,
    diff: r
  } = e;
  if (!g.hasPath(t, n))
    return !1;
  var i = oe.get(t, n);
  if (!de.isText(i))
    return !1;
  if (r.start !== i.text.length || r.text.length === 0)
    return i.text.slice(r.start, r.start + r.text.length) === r.text;
  var a = O.next(n);
  if (!g.hasPath(t, a))
    return !1;
  var o = oe.get(t, a);
  return de.isText(o) && o.text.startsWith(r.text);
}
function uc(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return n.reduce((i, a) => i.slice(0, a.start) + a.text + i.slice(a.end), t);
}
function Vm(t, e) {
  for (var n = Math.min(t.length, e.length), r = 0; r < n; r++)
    if (t.charAt(r) !== e.charAt(r))
      return r;
  return n;
}
function qm(t, e, n) {
  for (var r = Math.min(t.length, e.length, n), i = 0; i < r; i++)
    if (t.charAt(t.length - i - 1) !== e.charAt(e.length - i - 1))
      return i;
  return r;
}
function lc(t, e) {
  var {
    start: n,
    end: r,
    text: i
  } = e, a = t.slice(n, r), o = Vm(a, i), s = Math.min(a.length - o, i.length - o), u = qm(a, i, s), l = {
    start: n + o,
    end: r - u,
    text: i.slice(o, i.length - u)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function Zm(t, e, n) {
  var r = Math.min(e.start, n.start), i = Math.max(0, Math.min(e.start + e.text.length, n.end) - n.start), a = uc(t, e, n), o = Math.max(n.start + n.text.length, e.start + e.text.length + (e.start + e.text.length > n.start ? n.text.length : 0) - i), s = a.slice(r, o), u = Math.max(e.end, n.end - e.text.length + (e.end - e.start));
  return lc(t, {
    start: r,
    end: u,
    text: s
  });
}
function Gm(t) {
  var {
    path: e,
    diff: n
  } = t;
  return {
    anchor: {
      path: e,
      offset: n.start
    },
    focus: {
      path: e,
      offset: n.end
    }
  };
}
function sa(t, e) {
  var {
    path: n,
    offset: r
  } = e;
  if (!g.hasPath(t, n))
    return null;
  var i = oe.get(t, n);
  if (!de.isText(i))
    return null;
  var a = g.above(t, {
    match: (s) => fe.isElement(s) && g.isBlock(t, s),
    at: n
  });
  if (!a)
    return null;
  for (; r > i.text.length; ) {
    var o = g.next(t, {
      at: n,
      match: de.isText
    });
    if (!o || !O.isDescendant(o[1], a[1]))
      return null;
    r -= i.text.length, i = o[0], n = o[1];
  }
  return {
    path: n,
    offset: r
  };
}
function tu(t, e) {
  var n = sa(t, e.anchor);
  if (!n)
    return null;
  if (q.isCollapsed(e))
    return {
      anchor: n,
      focus: n
    };
  var r = sa(t, e.focus);
  return r ? {
    anchor: n,
    focus: r
  } : null;
}
function ua(t, e, n) {
  var r = Et.get(t), i = r == null ? void 0 : r.find((c) => {
    var {
      path: p
    } = c;
    return O.equals(p, e.path);
  });
  if (!i || e.offset <= i.diff.start)
    return Se.transform(e, n, {
      affinity: "backward"
    });
  var {
    diff: a
  } = i;
  if (e.offset <= a.start + a.text.length) {
    var o = {
      path: e.path,
      offset: a.start
    }, s = Se.transform(o, n, {
      affinity: "backward"
    });
    return s ? {
      path: s.path,
      offset: s.offset + e.offset - a.start
    } : null;
  }
  var u = {
    path: e.path,
    offset: e.offset - a.text.length + a.end - a.start
  }, l = Se.transform(u, n, {
    affinity: "backward"
  });
  return l ? n.type === "split_node" && O.equals(n.path, e.path) && u.offset < n.position && a.start < n.position ? l : {
    path: l.path,
    offset: l.offset + a.text.length - a.end + a.start
  } : null;
}
function nu(t, e, n) {
  var r = ua(t, e.anchor, n);
  if (!r)
    return null;
  if (q.isCollapsed(e))
    return {
      anchor: r,
      focus: r
    };
  var i = ua(t, e.focus, n);
  return i ? {
    anchor: r,
    focus: i
  } : null;
}
function Ym(t, e) {
  var {
    path: n,
    diff: r,
    id: i
  } = t;
  switch (e.type) {
    case "insert_text":
      return !O.equals(e.path, n) || e.offset >= r.end ? t : e.offset <= r.start ? {
        diff: {
          start: e.text.length + r.start,
          end: e.text.length + r.end,
          text: r.text
        },
        id: i,
        path: n
      } : {
        diff: {
          start: r.start,
          end: r.end + e.text.length,
          text: r.text
        },
        id: i,
        path: n
      };
    case "remove_text":
      return !O.equals(e.path, n) || e.offset >= r.end ? t : e.offset + e.text.length <= r.start ? {
        diff: {
          start: r.start - e.text.length,
          end: r.end - e.text.length,
          text: r.text
        },
        id: i,
        path: n
      } : {
        diff: {
          start: r.start,
          end: r.end - e.text.length,
          text: r.text
        },
        id: i,
        path: n
      };
    case "split_node":
      return !O.equals(e.path, n) || e.position >= r.end ? {
        diff: r,
        id: i,
        path: O.transform(n, e, {
          affinity: "backward"
        })
      } : e.position > r.start ? {
        diff: {
          start: r.start,
          end: Math.min(e.position, r.end),
          text: r.text
        },
        id: i,
        path: n
      } : {
        diff: {
          start: r.start - e.position,
          end: r.end - e.position,
          text: r.text
        },
        id: i,
        path: O.transform(n, e, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return O.equals(e.path, n) ? {
        diff: {
          start: r.start + e.position,
          end: r.end + e.position,
          text: r.text
        },
        id: i,
        path: O.transform(n, e)
      } : {
        diff: r,
        id: i,
        path: O.transform(n, e)
      };
  }
  var a = O.transform(n, e);
  return a ? {
    diff: r,
    path: a,
    id: i
  } : null;
}
function ru(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ru(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ru(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Km = 25, Xm = 200, Jm = function() {
}, Qm = (t) => (t == null ? void 0 : t.constructor.name) === "DataTransfer";
function e0(t) {
  var {
    editor: e,
    scheduleOnDOMSelectionChange: n,
    onDOMSelectionChange: r
  } = t, i = !1, a = null, o = null, s = null, u = 0, l = !1, c = () => {
    var j = nn.get(e);
    if (nn.delete(e), j) {
      var {
        selection: T
      } = e, R = tu(e, j);
      R && (!T || !q.equals(R, T)) && ne.select(e, R);
    }
  }, p = () => {
    var j = tn.get(e);
    if (tn.delete(e), !!j) {
      if (j.at) {
        var T = Se.isPoint(j.at) ? sa(e, j.at) : tu(e, j.at);
        if (!T)
          return;
        var R = g.range(e, T);
        (!e.selection || !q.equals(e.selection, R)) && ne.select(e, T);
      }
      j.run();
    }
  }, d = () => {
    if (o && (clearTimeout(o), o = null), s && (clearTimeout(s), s = null), !S() && !b()) {
      c();
      return;
    }
    i || (i = !0, setTimeout(() => i = !1)), b() && (i = "action");
    var j = e.selection && g.rangeRef(e, e.selection, {
      affinity: "forward"
    });
    Vt.set(e, e.marks), Jm("flush", tn.get(e), Et.get(e));
    for (var T = S(), R; R = (N = Et.get(e)) === null || N === void 0 ? void 0 : N[0]; ) {
      var N, J, _ = Rt.get(e);
      _ !== void 0 && (Rt.delete(e), e.marks = _), _ && l === !1 && (l = null);
      var te = Gm(R);
      (!e.selection || !q.equals(e.selection, te)) && ne.select(e, te), R.diff.text ? g.insertText(e, R.diff.text) : g.deleteFragment(e), Et.set(e, (J = Et.get(e)) === null || J === void 0 ? void 0 : J.filter((I) => {
        var {
          id: Z
        } = I;
        return Z !== R.id;
      })), Hm(e, R) || (T = !1, tn.delete(e), Vt.delete(e), i = "action", nn.delete(e), n.cancel(), r.cancel(), j == null || j.unref());
    }
    var ae = j == null ? void 0 : j.unref();
    if (ae && !nn.get(e) && (!e.selection || !q.equals(ae, e.selection)) && ne.select(e, ae), b()) {
      p();
      return;
    }
    T && n(), n.flush(), r.flush(), c();
    var k = Vt.get(e);
    Vt.delete(e), k !== void 0 && (e.marks = k, e.onChange());
  }, h = (j) => {
    a && clearTimeout(a), a = setTimeout(() => {
      Cn.set(e, !1), d();
    }, Km);
  }, y = (j) => {
    Cn.set(e, !0), a && (clearTimeout(a), a = null);
  }, v = function() {
    var T = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, R = ra.get(e);
    if (R) {
      if (S() || T) {
        R.style.display = "none";
        return;
      }
      R.style.removeProperty("display");
    }
  }, f = (j, T) => {
    var R, N = (R = Et.get(e)) !== null && R !== void 0 ? R : [];
    Et.set(e, N);
    var J = oe.leaf(e, j), _ = N.findIndex((k) => O.equals(k.path, j));
    if (_ < 0) {
      var te = lc(J.text, T);
      te && N.push({
        path: j,
        diff: T,
        id: u++
      }), v();
      return;
    }
    var ae = Zm(J.text, N[_].diff, T);
    if (!ae) {
      N.splice(_, 1), v();
      return;
    }
    N[_] = Mr(Mr({}, N[_]), {}, {
      diff: ae
    });
  }, C = function(T) {
    var {
      at: R
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, nn.delete(e), n.cancel(), r.cancel(), b() && d(), tn.set(e, {
      at: R,
      run: T
    }), s = setTimeout(d);
  }, w = (j) => {
    var T;
    o && (clearTimeout(o), o = null);
    var {
      inputType: R
    } = j, N = null, J = j.dataTransfer || j.data || void 0;
    l !== !1 && R !== "insertText" && R !== "insertCompositionText" && (l = !1);
    var [_] = j.getTargetRanges();
    _ && (N = K.toSlateRange(e, _, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var te = K.getWindow(e), ae = te.getSelection();
    if (!N && ae && (_ = ae, N = K.toSlateRange(e, ae, {
      exactMatch: !1,
      suppressThrow: !0
    })), N = (T = N) !== null && T !== void 0 ? T : e.selection, !!N) {
      var k = !0;
      if (R.startsWith("delete")) {
        if (q.isExpanded(N)) {
          var [I, Z] = q.edges(N), H = oe.leaf(e, I.path);
          if (H.text.length === I.offset && Z.offset === 0) {
            var ee = g.next(e, {
              at: I.path,
              match: de.isText
            });
            ee && O.equals(ee[1], Z.path) && (N = {
              anchor: Z,
              focus: Z
            });
          }
        }
        var X = R.endsWith("Backward") ? "backward" : "forward", [m, U] = q.edges(N), [W, P] = g.leaf(e, m.path), Q = {
          text: "",
          start: m.offset,
          end: U.offset
        }, ie = Et.get(e), G = ie == null ? void 0 : ie.find((Ye) => O.equals(Ye.path, P)), ce = G ? [G.diff, Q] : [Q], se = uc(W.text, ...ce);
        if (se.length === 0 && (k = !1), q.isExpanded(N)) {
          if (k && O.equals(N.anchor.path, N.focus.path)) {
            var he = {
              path: N.anchor.path,
              offset: m.offset
            }, ve = g.range(e, he, he);
            return A(ve), f(N.anchor.path, {
              text: "",
              end: U.offset,
              start: m.offset
            });
          }
          return C(() => g.deleteFragment(e, {
            direction: X
          }), {
            at: N
          });
        }
      }
      switch (R) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return C(() => g.deleteFragment(e), {
            at: N
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: De
          } = N;
          if (k && q.isCollapsed(N)) {
            var Ce = oe.leaf(e, De.path);
            if (De.offset < Ce.text.length)
              return f(De.path, {
                text: "",
                start: De.offset,
                end: De.offset + 1
              });
          }
          return C(() => g.deleteForward(e), {
            at: N
          });
        }
        case "deleteContentBackward": {
          var me, {
            anchor: ge
          } = N, Ie = oa(_) ? _.isCollapsed : !!((me = _) !== null && me !== void 0 && me.collapsed);
          return k && Ie && q.isCollapsed(N) && ge.offset > 0 ? f(ge.path, {
            text: "",
            start: ge.offset - 1,
            end: ge.offset
          }) : C(() => g.deleteBackward(e), {
            at: N
          });
        }
        case "deleteEntireSoftLine":
          return C(() => {
            g.deleteBackward(e, {
              unit: "line"
            }), g.deleteForward(e, {
              unit: "line"
            });
          }, {
            at: N
          });
        case "deleteHardLineBackward":
          return C(() => g.deleteBackward(e, {
            unit: "block"
          }), {
            at: N
          });
        case "deleteSoftLineBackward":
          return C(() => g.deleteBackward(e, {
            unit: "line"
          }), {
            at: N
          });
        case "deleteHardLineForward":
          return C(() => g.deleteForward(e, {
            unit: "block"
          }), {
            at: N
          });
        case "deleteSoftLineForward":
          return C(() => g.deleteForward(e, {
            unit: "line"
          }), {
            at: N
          });
        case "deleteWordBackward":
          return C(() => g.deleteBackward(e, {
            unit: "word"
          }), {
            at: N
          });
        case "deleteWordForward":
          return C(() => g.deleteForward(e, {
            unit: "word"
          }), {
            at: N
          });
        case "insertLineBreak":
          return C(() => g.insertSoftBreak(e), {
            at: N
          });
        case "insertParagraph":
          return C(() => g.insertBreak(e), {
            at: N
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (Qm(J))
            return C(() => K.insertData(e, J), {
              at: N
            });
          var le = J ?? "";
          if (Rt.get(e) && (le = le.replace("\uFEFF", "")), R === "insertText" && /.*\n.*\n$/.test(le) && (le = le.slice(0, -1)), le.includes(`
`))
            return C(() => {
              var Ye = le.split(`
`);
              Ye.forEach((we, dt) => {
                we && g.insertText(e, we), dt !== Ye.length - 1 && g.insertSoftBreak(e);
              });
            }, {
              at: N
            });
          if (O.equals(N.anchor.path, N.focus.path)) {
            var [Ne, pe] = q.edges(N), Be = {
              start: Ne.offset,
              end: pe.offset,
              text: le
            };
            if (le && l && R === "insertCompositionText") {
              var Me = l.start + l.text.search(/\S|$/), We = Be.start + Be.text.search(/\S|$/);
              We === Me + 1 && Be.end === l.start + l.text.length ? (Be.start -= 1, l = null, M()) : l = !1;
            } else R === "insertText" ? l === null ? l = Be : l && q.isCollapsed(N) && l.end + l.text.length === Ne.offset ? l = Mr(Mr({}, l), {}, {
              text: l.text + le
            }) : l = !1 : l = !1;
            if (k) {
              f(Ne.path, Be);
              return;
            }
          }
          return C(() => g.insertText(e, le), {
            at: N
          });
        }
      }
    }
  }, b = () => !!tn.get(e), S = () => {
    var j;
    return !!((j = Et.get(e)) !== null && j !== void 0 && j.length);
  }, D = () => b() || S(), E = () => i, A = (j) => {
    nn.set(e, j), o && (clearTimeout(o), o = null);
    var {
      selection: T
    } = e;
    if (j) {
      var R = !T || !O.equals(T.anchor.path, j.anchor.path), N = !T || !O.equals(T.anchor.path.slice(0, -1), j.anchor.path.slice(0, -1));
      (R && l || N) && (l = !1), (R || S()) && (o = setTimeout(d, Xm));
    }
  }, F = () => {
    (b() || !S()) && d();
  }, V = (j) => {
    S() || (v(!0), setTimeout(v));
  }, M = () => {
    b() || (s = setTimeout(d));
  }, z = (j) => {
    if (!(S() || b()) && j.some((R) => Na(e, R, j))) {
      var T;
      (T = nc.get(e)) === null || T === void 0 || T();
    }
  };
  return {
    flush: d,
    scheduleFlush: M,
    hasPendingDiffs: S,
    hasPendingAction: b,
    hasPendingChanges: D,
    isFlushing: E,
    handleUserSelect: A,
    handleCompositionEnd: h,
    handleCompositionStart: y,
    handleDOMBeforeInput: w,
    handleKeyDown: V,
    handleDomMutations: z,
    handleInput: F
  };
}
function t0() {
  var t = qe(!1);
  return B(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t.current;
}
var cr = Wr ? Kc : B;
function n0(t, e, n) {
  var [r] = $(() => new MutationObserver(e));
  cr(() => {
    r.takeRecords();
  }), B(() => {
    if (!t.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return r.observe(t.current, n), () => r.disconnect();
  }, [r, t, n]);
}
var r0 = ["node"];
function iu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function i0(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? iu(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : iu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var a0 = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, o0 = Dt ? (t) => {
  var {
    node: e
  } = t, n = jn(t, r0);
  if (!Dt)
    return null;
  var r = ln(), i = t0(), [a] = $(() => e0(i0({
    editor: r
  }, n)));
  return n0(e, a.handleDomMutations, a0), ja.set(r, a.scheduleFlush), i && a.flush(), a;
} : () => null, s0 = ["anchor", "focus"], u0 = ["anchor", "focus"], l0 = (t, e) => Object.keys(t).length === Object.keys(e).length && Object.keys(t).every((n) => e.hasOwnProperty(n) && t[n] === e[n]), cc = (t, e) => {
  var n = jn(t, s0), r = jn(e, u0);
  return t[In] === e[In] && l0(n, r);
}, c0 = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], i = e[n];
    if (!q.equals(r, i) || !cc(r, i))
      return !1;
  }
  return !0;
}, f0 = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], i = e[n];
    if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !cc(r, i))
      return !1;
  }
  return !0;
};
function au(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function d0(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? au(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : au(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var p0 = (t) => {
  var {
    isLast: e,
    leaf: n,
    parent: r,
    text: i
  } = t, a = ln(), o = K.findPath(a, i), s = O.parent(o), u = !!n[rc];
  return a.isVoid(r) ? /* @__PURE__ */ Y.createElement(Fi, {
    length: oe.string(r).length
  }) : n.text === "" && r.children[r.children.length - 1] === i && !a.isInline(r) && g.string(a, s) === "" ? /* @__PURE__ */ Y.createElement(Fi, {
    isLineBreak: !0,
    isMarkPlaceholder: u
  }) : n.text === "" ? /* @__PURE__ */ Y.createElement(Fi, {
    isMarkPlaceholder: u
  }) : e && n.text.slice(-1) === `
` ? /* @__PURE__ */ Y.createElement(ou, {
    isTrailing: !0,
    text: n.text
  }) : /* @__PURE__ */ Y.createElement(ou, {
    text: n.text
  });
}, ou = (t) => {
  var {
    text: e,
    isTrailing: n = !1
  } = t, r = qe(null), i = () => "".concat(e ?? "").concat(n ? `
` : ""), [a] = $(i);
  return cr(() => {
    var o = i();
    r.current && r.current.textContent !== o && (r.current.textContent = o);
  }), /* @__PURE__ */ Y.createElement(h0, {
    ref: r
  }, a);
}, h0 = /* @__PURE__ */ lt(/* @__PURE__ */ va((t, e) => /* @__PURE__ */ Y.createElement("span", {
  "data-slate-string": !0,
  ref: e
}, t.children))), Fi = (t) => {
  var {
    length: e = 0,
    isLineBreak: n = !1,
    isMarkPlaceholder: r = !1
  } = t, i = {
    "data-slate-zero-width": n ? "n" : "z",
    "data-slate-length": e
  };
  return r && (i["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ Y.createElement("span", d0({}, i), !(Dt || Ql) || !n ? "\uFEFF" : null, n ? /* @__PURE__ */ Y.createElement("br", null) : null);
};
function su(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function fc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? su(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : su(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var v0 = Dt ? 300 : 0;
function g0(t, e) {
  t.current && (t.current.disconnect(), e && (t.current = null));
}
function uu(t) {
  t.current && (clearTimeout(t.current), t.current = null);
}
var m0 = (t) => {
  var {
    leaf: e,
    isLast: n,
    text: r,
    parent: i,
    renderPlaceholder: a,
    renderLeaf: o = (w) => /* @__PURE__ */ Y.createElement(C0, fc({}, w))
  } = t, s = ln(), u = qe(null), l = qe(null), [c, p] = $(!1), d = qe(null), h = Ve((w) => {
    if (g0(u, w == null), w == null) {
      var b;
      ra.delete(s), (b = e.onPlaceholderResize) === null || b === void 0 || b.call(e, null);
    } else {
      if (ra.set(s, w), !u.current) {
        var S = window.ResizeObserver || Em;
        u.current = new S(() => {
          var D;
          (D = e.onPlaceholderResize) === null || D === void 0 || D.call(e, w);
        });
      }
      u.current.observe(w), l.current = w;
    }
  }, [l, e, s]), y = /* @__PURE__ */ Y.createElement(p0, {
    isLast: n,
    leaf: e,
    parent: i,
    text: r
  }), v = !!e[In];
  if (B(() => (v ? d.current || (d.current = setTimeout(() => {
    p(!0), d.current = null;
  }, v0)) : (uu(d), p(!1)), () => uu(d)), [v, p]), v && c) {
    var f = {
      children: e.placeholder,
      attributes: {
        "data-slate-placeholder": !0,
        style: {
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none",
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: gn ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: h
      }
    };
    y = /* @__PURE__ */ Y.createElement(Y.Fragment, null, a(f), y);
  }
  var C = {
    "data-slate-leaf": !0
  };
  return o({
    attributes: C,
    children: y,
    leaf: e,
    text: r
  });
}, y0 = /* @__PURE__ */ Y.memo(m0, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && de.equals(e.leaf, t.leaf) && e.leaf[In] === t.leaf[In]), C0 = (t) => {
  var {
    attributes: e,
    children: n
  } = t;
  return /* @__PURE__ */ Y.createElement("span", fc({}, e), n);
}, D0 = (t) => {
  for (var {
    decorations: e,
    isLast: n,
    parent: r,
    renderPlaceholder: i,
    renderLeaf: a,
    text: o
  } = t, s = ln(), u = qe(null), l = de.decorations(o, e), c = K.findKey(s, o), p = [], d = 0; d < l.length; d++) {
    var h = l[d];
    p.push(/* @__PURE__ */ Y.createElement(y0, {
      isLast: n && d === l.length - 1,
      key: "".concat(c.id, "-").concat(d),
      renderPlaceholder: i,
      leaf: h,
      text: o,
      parent: r,
      renderLeaf: a
    }));
  }
  var y = Ve((v) => {
    var f = ui.get(s);
    v ? (f == null || f.set(c, v), En.set(o, v), lr.set(v, o)) : (f == null || f.delete(c), En.delete(o), u.current && lr.delete(u.current)), u.current = v;
  }, [u, s, c, o]);
  return /* @__PURE__ */ Y.createElement("span", {
    "data-slate-node": "text",
    ref: y
  }, p);
}, dc = /* @__PURE__ */ Y.memo(D0, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && f0(e.decorations, t.decorations));
function lu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function la(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lu(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var b0 = (t) => {
  var {
    decorations: e,
    element: n,
    renderElement: r = (w) => /* @__PURE__ */ Y.createElement(w0, la({}, w)),
    renderPlaceholder: i,
    renderLeaf: a,
    selection: o
  } = t, s = ln(), u = L0(), l = s.isInline(n), c = K.findKey(s, n), p = Ve((w) => {
    var b = ui.get(s);
    w ? (b == null || b.set(c, w), En.set(n, w), lr.set(w, n)) : (b == null || b.delete(c), En.delete(n));
  }, [s, c, n]), d = hc({
    decorations: e,
    node: n,
    renderElement: r,
    renderPlaceholder: i,
    renderLeaf: a,
    selection: o
  }), h = {
    "data-slate-node": "element",
    ref: p
  };
  if (l && (h["data-slate-inline"] = !0), !l && g.hasInlines(s, n)) {
    var y = oe.string(n), v = _l(y);
    v === "rtl" && (h.dir = v);
  }
  if (g.isVoid(s, n)) {
    h["data-slate-void"] = !0, !u && l && (h.contentEditable = !1);
    var f = l ? "span" : "div", [[C]] = oe.texts(n);
    d = /* @__PURE__ */ Y.createElement(f, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ Y.createElement(dc, {
      renderPlaceholder: i,
      decorations: [],
      isLast: !1,
      parent: n,
      text: C
    })), Ta.set(C, 0), Ra.set(C, n);
  }
  return r({
    attributes: h,
    children: d,
    element: n
  });
}, E0 = /* @__PURE__ */ Y.memo(b0, (t, e) => t.element === e.element && t.renderElement === e.renderElement && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && c0(t.decorations, e.decorations) && (t.selection === e.selection || !!t.selection && !!e.selection && q.equals(t.selection, e.selection))), w0 = (t) => {
  var {
    attributes: e,
    children: n,
    element: r
  } = t, i = ln(), a = i.isInline(r) ? "span" : "div";
  return /* @__PURE__ */ Y.createElement(a, la(la({}, e), {}, {
    style: {
      position: "relative"
    }
  }), n);
}, pc = /* @__PURE__ */ ht(() => []), B0 = () => _e(pc), x0 = /* @__PURE__ */ ht(!1), hc = (t) => {
  for (var {
    decorations: e,
    node: n,
    renderElement: r,
    renderPlaceholder: i,
    renderLeaf: a,
    selection: o
  } = t, s = B0(), u = ln(), l = K.findPath(u, n), c = [], p = fe.isElement(n) && !u.isInline(n) && g.hasInlines(u, n), d = 0; d < n.children.length; d++) {
    var h = l.concat(d), y = n.children[d], v = K.findKey(u, y), f = g.range(u, h), C = o && q.intersection(f, o), w = s([y, h]);
    for (var b of e) {
      var S = q.intersection(b, f);
      S && w.push(S);
    }
    fe.isElement(y) ? c.push(/* @__PURE__ */ Y.createElement(x0.Provider, {
      key: "provider-".concat(v.id),
      value: !!C
    }, /* @__PURE__ */ Y.createElement(E0, {
      decorations: w,
      element: y,
      key: v.id,
      renderElement: r,
      renderPlaceholder: i,
      renderLeaf: a,
      selection: C
    }))) : c.push(/* @__PURE__ */ Y.createElement(dc, {
      decorations: w,
      key: v.id,
      isLast: p && d === n.children.length - 1,
      parent: n,
      renderPlaceholder: i,
      renderLeaf: a,
      text: y
    })), Ta.set(y, d), Ra.set(y, n);
  }
  return c;
}, vc = /* @__PURE__ */ ht(!1), L0 = () => _e(vc), gc = /* @__PURE__ */ ht(null), $a = () => {
  var t = _e(gc);
  if (!t)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: e
  } = t;
  return e;
};
function A0() {
  var t = ln(), e = qe(!1), n = qe(0), r = Ve(() => {
    if (!e.current) {
      e.current = !0;
      var i = K.getWindow(t);
      i.cancelAnimationFrame(n.current), n.current = i.requestAnimationFrame(() => {
        e.current = !1;
      });
    }
  }, [t]);
  return B(() => () => cancelAnimationFrame(n.current), []), {
    receivedUserInput: e,
    onUserInput: r
  };
}
var O0 = 3, S0 = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, F0 = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, M0 = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Je = (t) => {
  var e = S0[t], n = F0[t], r = M0[t], i = e && Di(e), a = n && Di(n), o = r && Di(r);
  return (s) => !!(i && i(s) || Qs && a && a(s) || !Qs && o && o(s));
}, tt = {
  isBold: Je("bold"),
  isCompose: Je("compose"),
  isMoveBackward: Je("moveBackward"),
  isMoveForward: Je("moveForward"),
  isDeleteBackward: Je("deleteBackward"),
  isDeleteForward: Je("deleteForward"),
  isDeleteLineBackward: Je("deleteLineBackward"),
  isDeleteLineForward: Je("deleteLineForward"),
  isDeleteWordBackward: Je("deleteWordBackward"),
  isDeleteWordForward: Je("deleteWordForward"),
  isExtendBackward: Je("extendBackward"),
  isExtendForward: Je("extendForward"),
  isExtendLineBackward: Je("extendLineBackward"),
  isExtendLineForward: Je("extendLineForward"),
  isItalic: Je("italic"),
  isMoveLineBackward: Je("moveLineBackward"),
  isMoveLineForward: Je("moveLineForward"),
  isMoveWordBackward: Je("moveWordBackward"),
  isMoveWordForward: Je("moveWordForward"),
  isRedo: Je("redo"),
  isSoftBreak: Je("insertSoftBreak"),
  isSplitBlock: Je("splitBlock"),
  isTransposeCharacter: Je("transposeCharacter"),
  isUndo: Je("undo")
}, P0 = (t, e) => {
  var n = [], r = () => {
    n = [];
  }, i = (o) => {
    if (e.current) {
      var s = o.filter((u) => Na(t, u, o));
      n.push(...s);
    }
  };
  function a() {
    n.length > 0 && (n.reverse().forEach((o) => {
      o.type !== "characterData" && (o.removedNodes.forEach((s) => {
        o.target.insertBefore(s, o.nextSibling);
      }), o.addedNodes.forEach((s) => {
        o.target.removeChild(s);
      }));
    }), r());
  }
  return {
    registerMutations: i,
    restoreDOM: a,
    clear: r
  };
}, k0 = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class mc extends Xc {
  constructor() {
    super(...arguments), Pt(this, "context", null), Pt(this, "manager", null), Pt(this, "mutationObserver", null);
  }
  observe() {
    var e, {
      node: n
    } = this.props;
    if (!n.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (e = this.mutationObserver) === null || e === void 0 || e.observe(n.current, k0);
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, n = this.context;
    this.manager = P0(n, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var e, n, r, i = (e = this.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords();
    if (i != null && i.length) {
      var a;
      (a = this.manager) === null || a === void 0 || a.registerMutations(i);
    }
    return (n = this.mutationObserver) === null || n === void 0 || n.disconnect(), (r = this.manager) === null || r === void 0 || r.restoreDOM(), null;
  }
  componentDidUpdate() {
    var e;
    (e = this.manager) === null || e === void 0 || e.clear(), this.observe();
  }
  componentWillUnmount() {
    var e;
    (e = this.mutationObserver) === null || e === void 0 || e.disconnect();
  }
  render() {
    return this.props.children;
  }
}
Pt(mc, "contextType", ka);
var T0 = Dt ? mc : (t) => {
  var {
    children: e
  } = t;
  return /* @__PURE__ */ Y.createElement(Y.Fragment, null, e);
}, R0 = /* @__PURE__ */ ht(!1), j0 = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], I0 = ["text"];
function cu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Nt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? cu(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : cu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var N0 = (t) => /* @__PURE__ */ Y.createElement(Y.Fragment, null, hc(t)), $0 = /* @__PURE__ */ va((t, e) => {
  var n = Ve((m) => /* @__PURE__ */ Y.createElement(z0, Nt({}, m)), []), {
    autoFocus: r,
    decorate: i = _0,
    onDOMBeforeInput: a,
    placeholder: o,
    readOnly: s = !1,
    renderElement: u,
    renderLeaf: l,
    renderPlaceholder: c = n,
    scrollSelectionIntoView: p = W0,
    style: d = {},
    as: h = "div",
    disableDefaultStyles: y = !1
  } = t, v = jn(t, j0), f = $a(), [C, w] = $(!1), b = qe(null), S = qe([]), [D, E] = $(), A = qe(!1), {
    onUserInput: F,
    receivedUserInput: V
  } = A0(), [, M] = Yc((m) => m + 1, 0);
  nc.set(f, M), ia.set(f, s);
  var z = qt(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  B(() => {
    b.current && r && b.current.focus();
  }, [r]);
  var j = qe(), T = qt(() => Jg(() => {
    var m = K.toDOMNode(f, f), U = m.getRootNode();
    if (!A.current && gn && U instanceof ShadowRoot) {
      A.current = !0;
      var W = zm();
      W ? document.execCommand("indent") : ne.deselect(f), A.current = !1;
      return;
    }
    var P = j.current;
    if ((Dt || !K.isComposing(f)) && (!z.isUpdatingSelection || P != null && P.isFlushing()) && !z.isDraggingInternally) {
      var Q = K.findDocumentOrShadowRoot(f), {
        activeElement: ie
      } = Q, G = K.toDOMNode(f, f), ce = nr(Q);
      if (ie === G ? (z.latestElement = ie, on.set(f, !0)) : on.delete(f), !ce)
        return ne.deselect(f);
      var {
        anchorNode: se,
        focusNode: he
      } = ce, ve = K.hasEditableTarget(f, se) || K.isTargetInsideNonReadonlyVoid(f, se), De = K.hasTarget(f, he);
      if (ve && De) {
        var Ce = K.toSlateRange(f, ce, {
          exactMatch: !1,
          suppressThrow: !0
        });
        Ce && (!K.isComposing(f) && !(P != null && P.hasPendingChanges()) && !(P != null && P.isFlushing()) ? ne.select(f, Ce) : P == null || P.handleUserSelect(Ce));
      }
      s && (!ve || !De) && ne.deselect(f);
    }
  }, 100), [f, s, z]), R = qt(() => qg(T, 0), [T]);
  j.current = o0({
    node: b,
    onDOMSelectionChange: T,
    scheduleOnDOMSelectionChange: R
  }), cr(() => {
    var m, U, W;
    b.current && (W = Ia(b.current)) ? (tc.set(f, W), Ur.set(f, b.current), En.set(f, b.current), lr.set(b.current, f)) : En.delete(f);
    var {
      selection: P
    } = f, Q = K.findDocumentOrShadowRoot(f), ie = nr(Q);
    if (!(!ie || !K.isFocused(f) || (m = j.current) !== null && m !== void 0 && m.hasPendingAction())) {
      var G = (ve) => {
        var De = ie.type !== "None";
        if (!(!P && !De)) {
          var Ce = ie.focusNode, me;
          if (kn && ie.rangeCount > 1) {
            var ge = ie.getRangeAt(0), Ie = ie.getRangeAt(ie.rangeCount - 1);
            ge.startContainer === Ce ? me = Ie.endContainer : me = ge.startContainer;
          } else
            me = ie.anchorNode;
          var le = Ur.get(f), Ne = !1;
          if (le.contains(me) && le.contains(Ce) && (Ne = !0), De && Ne && P && !ve) {
            var pe = K.toSlateRange(f, ie, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (pe && q.equals(pe, P)) {
              var Be;
              if (!z.hasMarkPlaceholder || (Be = me) !== null && Be !== void 0 && (Be = Be.parentElement) !== null && Be !== void 0 && Be.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (P && !K.hasRange(f, P)) {
            f.selection = K.toSlateRange(f, ie, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          z.isUpdatingSelection = !0;
          var Me = P && K.toDOMRange(f, P);
          return Me ? (K.isComposing(f) && !Dt ? ie.collapseToEnd() : q.isBackward(P) ? ie.setBaseAndExtent(Me.endContainer, Me.endOffset, Me.startContainer, Me.startOffset) : ie.setBaseAndExtent(Me.startContainer, Me.startOffset, Me.endContainer, Me.endOffset), p(f, Me)) : ie.removeAllRanges(), Me;
        }
      };
      ie.rangeCount <= 1 && G();
      var ce = ((U = j.current) === null || U === void 0 ? void 0 : U.isFlushing()) === "action";
      if (!Dt || !ce) {
        setTimeout(() => {
          z.isUpdatingSelection = !1;
        });
        return;
      }
      var se = null, he = requestAnimationFrame(() => {
        if (ce) {
          var ve = (De) => {
            try {
              var Ce = K.toDOMNode(f, f);
              Ce.focus(), G(De);
            } catch {
            }
          };
          ve(), se = setTimeout(() => {
            ve(!0), z.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(he), se && clearTimeout(se);
      };
    }
  });
  var N = Ve((m) => {
    var U = K.toDOMNode(f, f), W = U.getRootNode();
    if (A != null && A.current && gn && W instanceof ShadowRoot) {
      var P = m.getTargetRanges(), Q = P[0], ie = new window.Range();
      ie.setStart(Q.startContainer, Q.startOffset), ie.setEnd(Q.endContainer, Q.endOffset);
      var G = K.toSlateRange(f, ie, {
        exactMatch: !1,
        suppressThrow: !1
      });
      ne.select(f, G), m.preventDefault(), m.stopImmediatePropagation();
      return;
    }
    if (F(), !s && K.hasEditableTarget(f, m.target) && !U0(m, a)) {
      var ce;
      if (j.current)
        return j.current.handleDOMBeforeInput(m);
      R.flush(), T.flush();
      var {
        selection: se
      } = f, {
        inputType: he
      } = m, ve = m.dataTransfer || m.data || void 0, De = he === "insertCompositionText" || he === "deleteCompositionText";
      if (De && K.isComposing(f))
        return;
      var Ce = !1;
      if (he === "insertText" && se && q.isCollapsed(se) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      m.data && m.data.length === 1 && /[a-z ]/i.test(m.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      se.anchor.offset !== 0) {
        var me, ge;
        Ce = !0, f.marks && (Ce = !1);
        var {
          anchor: Ie
        } = se, [le, Ne] = K.toDOMPoint(f, Ie), pe = (me = le.parentElement) === null || me === void 0 ? void 0 : me.closest("a"), Be = K.getWindow(f);
        if (Ce && pe && K.hasDOMNode(f, pe)) {
          var Me, We = Be == null ? void 0 : Be.document.createTreeWalker(pe, NodeFilter.SHOW_TEXT).lastChild();
          We === le && ((Me = We.textContent) === null || Me === void 0 ? void 0 : Me.length) === Ne && (Ce = !1);
        }
        if (Ce && le.parentElement && (Be == null || (ge = Be.getComputedStyle(le.parentElement)) === null || ge === void 0 ? void 0 : ge.whiteSpace) === "pre") {
          var Ye = g.above(f, {
            at: Ie.path,
            match: (Bt) => fe.isElement(Bt) && g.isBlock(f, Bt)
          });
          Ye && oe.string(Ye[0]).includes("	") && (Ce = !1);
        }
      }
      if (!he.startsWith("delete") || he.startsWith("deleteBy")) {
        var [we] = m.getTargetRanges();
        if (we) {
          var dt = K.toSlateRange(f, we, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!se || !q.equals(se, dt)) {
            Ce = !1;
            var ct = !De && f.selection && g.rangeRef(f, f.selection);
            ne.select(f, dt), ct && tr.set(f, ct);
          }
        }
      }
      if (De)
        return;
      if (Ce || m.preventDefault(), se && q.isExpanded(se) && he.startsWith("delete")) {
        var kt = he.endsWith("Backward") ? "backward" : "forward";
        g.deleteFragment(f, {
          direction: kt
        });
        return;
      }
      switch (he) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          g.deleteFragment(f);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          g.deleteForward(f);
          break;
        }
        case "deleteContentBackward": {
          g.deleteBackward(f);
          break;
        }
        case "deleteEntireSoftLine": {
          g.deleteBackward(f, {
            unit: "line"
          }), g.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          g.deleteBackward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          g.deleteBackward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          g.deleteForward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          g.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          g.deleteBackward(f, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          g.deleteForward(f, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          g.insertSoftBreak(f);
          break;
        case "insertParagraph": {
          g.insertBreak(f);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          he === "insertFromComposition" && K.isComposing(f) && (w(!1), Cn.set(f, !1)), (ve == null ? void 0 : ve.constructor.name) === "DataTransfer" ? K.insertData(f, ve) : typeof ve == "string" && (Ce ? S.current.push(() => g.insertText(f, ve)) : g.insertText(f, ve));
          break;
        }
      }
      var mt = (ce = tr.get(f)) === null || ce === void 0 ? void 0 : ce.unref();
      tr.delete(f), mt && (!f.selection || !q.equals(f.selection, mt)) && ne.select(f, mt);
    }
  }, [f, T, F, a, s, R]), J = Ve((m) => {
    m == null ? (T.cancel(), R.cancel(), Ur.delete(f), En.delete(f), b.current && Kt && b.current.removeEventListener("beforeinput", N)) : Kt && m.addEventListener("beforeinput", N), b.current = m, typeof e == "function" ? e(m) : e && (e.current = m);
  }, [T, R, f, N, e]);
  cr(() => {
    var m = K.getWindow(f);
    m.document.addEventListener("selectionchange", R);
    var U = () => {
      z.isDraggingInternally = !1;
    };
    return m.document.addEventListener("dragend", U), m.document.addEventListener("drop", U), () => {
      m.document.removeEventListener("selectionchange", R), m.document.removeEventListener("dragend", U), m.document.removeEventListener("drop", U);
    };
  }, [R, z]);
  var _ = i([f, []]), te = o && f.children.length === 1 && Array.from(oe.texts(f)).length === 1 && oe.string(f) === "" && !C, ae = Ve((m) => {
    if (m && te) {
      var U;
      E((U = m.getBoundingClientRect()) === null || U === void 0 ? void 0 : U.height);
    } else
      E(void 0);
  }, [te]);
  if (te) {
    var k = g.start(f, []);
    _.push({
      [In]: !0,
      placeholder: o,
      onPlaceholderResize: ae,
      anchor: k,
      focus: k
    });
  }
  var {
    marks: I
  } = f;
  if (z.hasMarkPlaceholder = !1, f.selection && q.isCollapsed(f.selection) && I) {
    var {
      anchor: Z
    } = f.selection, H = oe.leaf(f, Z.path), ee = jn(H, I0);
    if (!de.equals(H, I, {
      loose: !0
    })) {
      z.hasMarkPlaceholder = !0;
      var X = Object.fromEntries(Object.keys(ee).map((m) => [m, null]));
      _.push(Nt(Nt(Nt({
        [rc]: !0
      }, X), I), {}, {
        anchor: Z,
        focus: Z
      }));
    }
  }
  return B(() => {
    setTimeout(() => {
      var {
        selection: m
      } = f;
      if (m) {
        var {
          anchor: U
        } = m, W = oe.leaf(f, U.path);
        if (I && !de.equals(W, I, {
          loose: !0
        })) {
          Rt.set(f, I);
          return;
        }
      }
      Rt.delete(f);
    });
  }), /* @__PURE__ */ Y.createElement(vc.Provider, {
    value: s
  }, /* @__PURE__ */ Y.createElement(R0.Provider, {
    value: C
  }, /* @__PURE__ */ Y.createElement(pc.Provider, {
    value: i
  }, /* @__PURE__ */ Y.createElement(T0, {
    node: b,
    receivedUserInput: V
  }, /* @__PURE__ */ Y.createElement(h, Nt(Nt({
    role: s ? void 0 : "textbox",
    "aria-multiline": s ? void 0 : !0
  }, v), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Kt || !Wr ? v.spellCheck : !1,
    autoCorrect: Kt || !Wr ? v.autoCorrect : "false",
    autoCapitalize: Kt || !Wr ? v.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !s,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: J,
    style: Nt(Nt({}, y ? {} : Nt({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, D ? {
      minHeight: D
    } : {})), d),
    onBeforeInput: Ve((m) => {
      if (!Kt && !s && !Ct(m, v.onBeforeInput) && K.hasSelectableTarget(f, m.target) && (m.preventDefault(), !K.isComposing(f))) {
        var U = m.data;
        g.insertText(f, U);
      }
    }, [v.onBeforeInput, f, s]),
    onInput: Ve((m) => {
      if (!Ct(m, v.onInput)) {
        if (j.current) {
          j.current.handleInput();
          return;
        }
        for (var U of S.current)
          U();
        S.current = [];
      }
    }, [v.onInput]),
    onBlur: Ve((m) => {
      if (!(s || z.isUpdatingSelection || !K.hasSelectableTarget(f, m.target) || Ct(m, v.onBlur))) {
        var U = K.findDocumentOrShadowRoot(f);
        if (z.latestElement !== U.activeElement) {
          var {
            relatedTarget: W
          } = m, P = K.toDOMNode(f, f);
          if (W !== P && !(Mt(W) && W.hasAttribute("data-slate-spacer"))) {
            if (W != null && un(W) && K.hasDOMNode(f, W)) {
              var Q = K.toSlateNode(f, W);
              if (fe.isElement(Q) && !f.isVoid(Q))
                return;
            }
            if (gn) {
              var ie = nr(U);
              ie == null || ie.removeAllRanges();
            }
            on.delete(f);
          }
        }
      }
    }, [s, z.isUpdatingSelection, z.latestElement, f, v.onBlur]),
    onClick: Ve((m) => {
      if (K.hasTarget(f, m.target) && !Ct(m, v.onClick) && un(m.target)) {
        var U = K.toSlateNode(f, m.target), W = K.findPath(f, U);
        if (!g.hasPath(f, W) || oe.get(f, W) !== U)
          return;
        if (m.detail === O0 && W.length >= 1) {
          var P = W;
          if (!(fe.isElement(U) && g.isBlock(f, U))) {
            var Q, ie = g.above(f, {
              match: (Ce) => fe.isElement(Ce) && g.isBlock(f, Ce),
              at: W
            });
            P = (Q = ie == null ? void 0 : ie[1]) !== null && Q !== void 0 ? Q : W.slice(0, 1);
          }
          var G = g.range(f, P);
          ne.select(f, G);
          return;
        }
        if (s)
          return;
        var ce = g.start(f, W), se = g.end(f, W), he = g.void(f, {
          at: ce
        }), ve = g.void(f, {
          at: se
        });
        if (he && ve && O.equals(he[1], ve[1])) {
          var De = g.range(f, ce);
          ne.select(f, De);
        }
      }
    }, [f, v.onClick, s]),
    onCompositionEnd: Ve((m) => {
      if (K.hasSelectableTarget(f, m.target)) {
        var U;
        if (K.isComposing(f) && Promise.resolve().then(() => {
          w(!1), Cn.set(f, !1);
        }), (U = j.current) === null || U === void 0 || U.handleCompositionEnd(m), Ct(m, v.onCompositionEnd) || Dt)
          return;
        if (!gn && !Sm && !Ql && !Mm && !Fm && m.data) {
          var W = Rt.get(f);
          Rt.delete(f), W !== void 0 && (Vt.set(f, f.marks), f.marks = W), g.insertText(f, m.data);
          var P = Vt.get(f);
          Vt.delete(f), P !== void 0 && (f.marks = P);
        }
      }
    }, [v.onCompositionEnd, f]),
    onCompositionUpdate: Ve((m) => {
      K.hasSelectableTarget(f, m.target) && !Ct(m, v.onCompositionUpdate) && (K.isComposing(f) || (w(!0), Cn.set(f, !0)));
    }, [v.onCompositionUpdate, f]),
    onCompositionStart: Ve((m) => {
      if (K.hasSelectableTarget(f, m.target)) {
        var U;
        if ((U = j.current) === null || U === void 0 || U.handleCompositionStart(m), Ct(m, v.onCompositionStart) || Dt)
          return;
        w(!0);
        var {
          selection: W
        } = f;
        if (W && q.isExpanded(W)) {
          g.deleteFragment(f);
          return;
        }
      }
    }, [v.onCompositionStart, f]),
    onCopy: Ve((m) => {
      K.hasSelectableTarget(f, m.target) && !Ct(m, v.onCopy) && !fu(m) && (m.preventDefault(), K.setFragmentData(f, m.clipboardData, "copy"));
    }, [v.onCopy, f]),
    onCut: Ve((m) => {
      if (!s && K.hasSelectableTarget(f, m.target) && !Ct(m, v.onCut) && !fu(m)) {
        m.preventDefault(), K.setFragmentData(f, m.clipboardData, "cut");
        var {
          selection: U
        } = f;
        if (U)
          if (q.isExpanded(U))
            g.deleteFragment(f);
          else {
            var W = oe.parent(f, U.anchor.path);
            g.isVoid(f, W) && ne.delete(f);
          }
      }
    }, [s, f, v.onCut]),
    onDragOver: Ve((m) => {
      if (K.hasTarget(f, m.target) && !Ct(m, v.onDragOver)) {
        var U = K.toSlateNode(f, m.target);
        fe.isElement(U) && g.isVoid(f, U) && m.preventDefault();
      }
    }, [v.onDragOver, f]),
    onDragStart: Ve((m) => {
      if (!s && K.hasTarget(f, m.target) && !Ct(m, v.onDragStart)) {
        var U = K.toSlateNode(f, m.target), W = K.findPath(f, U), P = fe.isElement(U) && g.isVoid(f, U) || g.void(f, {
          at: W,
          voids: !0
        });
        if (P) {
          var Q = g.range(f, W);
          ne.select(f, Q);
        }
        z.isDraggingInternally = !0, K.setFragmentData(f, m.dataTransfer, "drag");
      }
    }, [s, f, v.onDragStart, z]),
    onDrop: Ve((m) => {
      if (!s && K.hasTarget(f, m.target) && !Ct(m, v.onDrop)) {
        m.preventDefault();
        var U = f.selection, W = K.findEventRange(f, m), P = m.dataTransfer;
        ne.select(f, W), z.isDraggingInternally && U && !q.equals(U, W) && !g.void(f, {
          at: W,
          voids: !0
        }) && ne.delete(f, {
          at: U
        }), K.insertData(f, P), K.isFocused(f) || K.focus(f);
      }
    }, [s, f, v.onDrop, z]),
    onDragEnd: Ve((m) => {
      !s && z.isDraggingInternally && v.onDragEnd && K.hasTarget(f, m.target) && v.onDragEnd(m);
    }, [s, z, v, f]),
    onFocus: Ve((m) => {
      if (!s && !z.isUpdatingSelection && K.hasEditableTarget(f, m.target) && !Ct(m, v.onFocus)) {
        var U = K.toDOMNode(f, f), W = K.findDocumentOrShadowRoot(f);
        if (z.latestElement = W.activeElement, kn && m.target !== U) {
          U.focus();
          return;
        }
        on.set(f, !0);
      }
    }, [s, z, f, v.onFocus]),
    onKeyDown: Ve((m) => {
      if (!s && K.hasEditableTarget(f, m.target)) {
        var U;
        (U = j.current) === null || U === void 0 || U.handleKeyDown(m);
        var {
          nativeEvent: W
        } = m;
        if (K.isComposing(f) && W.isComposing === !1 && (Cn.set(f, !1), w(!1)), Ct(m, v.onKeyDown) || K.isComposing(f))
          return;
        var {
          selection: P
        } = f, Q = f.children[P !== null ? P.focus.path[0] : 0], ie = _l(oe.string(Q)) === "rtl";
        if (tt.isRedo(W)) {
          m.preventDefault();
          var G = f;
          typeof G.redo == "function" && G.redo();
          return;
        }
        if (tt.isUndo(W)) {
          m.preventDefault();
          var ce = f;
          typeof ce.undo == "function" && ce.undo();
          return;
        }
        if (tt.isMoveLineBackward(W)) {
          m.preventDefault(), ne.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (tt.isMoveLineForward(W)) {
          m.preventDefault(), ne.move(f, {
            unit: "line"
          });
          return;
        }
        if (tt.isExtendLineBackward(W)) {
          m.preventDefault(), ne.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (tt.isExtendLineForward(W)) {
          m.preventDefault(), ne.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (tt.isMoveBackward(W)) {
          m.preventDefault(), P && q.isCollapsed(P) ? ne.move(f, {
            reverse: !ie
          }) : ne.collapse(f, {
            edge: ie ? "end" : "start"
          });
          return;
        }
        if (tt.isMoveForward(W)) {
          m.preventDefault(), P && q.isCollapsed(P) ? ne.move(f, {
            reverse: ie
          }) : ne.collapse(f, {
            edge: ie ? "start" : "end"
          });
          return;
        }
        if (tt.isMoveWordBackward(W)) {
          m.preventDefault(), P && q.isExpanded(P) && ne.collapse(f, {
            edge: "focus"
          }), ne.move(f, {
            unit: "word",
            reverse: !ie
          });
          return;
        }
        if (tt.isMoveWordForward(W)) {
          m.preventDefault(), P && q.isExpanded(P) && ne.collapse(f, {
            edge: "focus"
          }), ne.move(f, {
            unit: "word",
            reverse: ie
          });
          return;
        }
        if (Kt) {
          if ((ec || gn) && P && (tt.isDeleteBackward(W) || tt.isDeleteForward(W)) && q.isCollapsed(P)) {
            var se = oe.parent(f, P.anchor.path);
            if (fe.isElement(se) && g.isVoid(f, se) && (g.isInline(f, se) || g.isBlock(f, se))) {
              m.preventDefault(), g.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (tt.isBold(W) || tt.isItalic(W) || tt.isTransposeCharacter(W)) {
            m.preventDefault();
            return;
          }
          if (tt.isSoftBreak(W)) {
            m.preventDefault(), g.insertSoftBreak(f);
            return;
          }
          if (tt.isSplitBlock(W)) {
            m.preventDefault(), g.insertBreak(f);
            return;
          }
          if (tt.isDeleteBackward(W)) {
            m.preventDefault(), P && q.isExpanded(P) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f);
            return;
          }
          if (tt.isDeleteForward(W)) {
            m.preventDefault(), P && q.isExpanded(P) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f);
            return;
          }
          if (tt.isDeleteLineBackward(W)) {
            m.preventDefault(), P && q.isExpanded(P) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (tt.isDeleteLineForward(W)) {
            m.preventDefault(), P && q.isExpanded(P) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (tt.isDeleteWordBackward(W)) {
            m.preventDefault(), P && q.isExpanded(P) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (tt.isDeleteWordForward(W)) {
            m.preventDefault(), P && q.isExpanded(P) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [s, f, v.onKeyDown]),
    onPaste: Ve((m) => {
      !s && K.hasEditableTarget(f, m.target) && !Ct(m, v.onPaste) && (!Kt || Tm(m.nativeEvent) || gn) && (m.preventDefault(), K.insertData(f, m.clipboardData));
    }, [s, f, v.onPaste])
  }), /* @__PURE__ */ Y.createElement(N0, {
    decorations: _,
    node: f,
    renderElement: u,
    renderPlaceholder: c,
    renderLeaf: l,
    selection: f.selection
  }))))));
}), z0 = (t) => {
  var {
    attributes: e,
    children: n
  } = t;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ Y.createElement("span", Nt({}, e), n, Dt && /* @__PURE__ */ Y.createElement("br", null))
  );
}, _0 = () => [], W0 = (t, e) => {
  if (e.getBoundingClientRect && (!t.selection || t.selection && q.isCollapsed(t.selection))) {
    var n = e.startContainer.parentElement;
    n.getBoundingClientRect = e.getBoundingClientRect.bind(e), tm(n, {
      scrollMode: "if-needed"
    }), delete n.getBoundingClientRect;
  }
}, Ct = (t, e) => {
  if (!e)
    return !1;
  var n = e(t);
  return n ?? (t.isDefaultPrevented() || t.isPropagationStopped());
}, fu = (t) => un(t.target) && (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement), U0 = (t, e) => {
  if (!e)
    return !1;
  var n = e(t);
  return n ?? t.defaultPrevented;
}, H0 = /* @__PURE__ */ ht(!1), V0 = /* @__PURE__ */ ht({});
function q0(t) {
  var e = qe([]).current, n = qe({
    editor: t
  }).current, r = Ve((a) => {
    n.editor = a, e.forEach((o) => o(a));
  }, [e, n]), i = qt(() => ({
    getSlate: () => n.editor,
    addEventListener: (a) => (e.push(a), () => {
      e.splice(e.indexOf(a), 1);
    })
  }), [e, n]);
  return {
    selectorContext: i,
    onChange: r
  };
}
var Z0 = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], G0 = (t) => {
  var {
    editor: e,
    children: n,
    onChange: r,
    onSelectionChange: i,
    onValueChange: a,
    initialValue: o
  } = t, s = jn(t, Z0), [u, l] = Y.useState(() => {
    if (!oe.isNodeList(o))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(pt.stringify(o)));
    if (!g.isEditor(e))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(pt.stringify(e)));
    return e.children = o, Object.assign(e, s), {
      v: 0,
      editor: e
    };
  }), {
    selectorContext: c,
    onChange: p
  } = q0(e), d = Ve((v) => {
    var f;
    switch (r && r(e.children), v == null || (f = v.operation) === null || f === void 0 ? void 0 : f.type) {
      case "set_selection":
        i == null || i(e.selection);
        break;
      default:
        a == null || a(e.children);
    }
    l((C) => ({
      v: C.v + 1,
      editor: e
    })), p(e);
  }, [e, p, r, i, a]);
  B(() => (aa.set(e, d), () => {
    aa.set(e, () => {
    });
  }), [e, d]);
  var [h, y] = $(K.isFocused(e));
  return B(() => {
    y(K.isFocused(e));
  }, [e]), cr(() => {
    var v = () => y(K.isFocused(e));
    return Jl >= 17 ? (document.addEventListener("focusin", v), document.addEventListener("focusout", v), () => {
      document.removeEventListener("focusin", v), document.removeEventListener("focusout", v);
    }) : (document.addEventListener("focus", v, !0), document.addEventListener("blur", v, !0), () => {
      document.removeEventListener("focus", v, !0), document.removeEventListener("blur", v, !0);
    });
  }, []), /* @__PURE__ */ Y.createElement(V0.Provider, {
    value: c
  }, /* @__PURE__ */ Y.createElement(gc.Provider, {
    value: u
  }, /* @__PURE__ */ Y.createElement(ka.Provider, {
    value: u.editor
  }, /* @__PURE__ */ Y.createElement(H0.Provider, {
    value: h
  }, n))));
}, du = (t, e) => {
  var n = (e.top + e.bottom) / 2;
  return t.top <= n && t.bottom >= n;
}, pu = (t, e, n) => {
  var r = K.toDOMRange(t, e).getBoundingClientRect(), i = K.toDOMRange(t, n).getBoundingClientRect();
  return du(r, i) && du(i, r);
}, Y0 = (t, e) => {
  var n = g.range(t, q.end(e)), r = Array.from(g.positions(t, {
    at: e
  })), i = 0, a = r.length, o = Math.floor(a / 2);
  if (pu(t, g.range(t, r[i]), n))
    return g.range(t, r[i], n);
  if (r.length < 2)
    return g.range(t, r[r.length - 1], n);
  for (; o !== r.length && o !== i; )
    pu(t, g.range(t, r[o]), n) ? a = o : i = o, o = Math.floor((i + a) / 2);
  return g.range(t, r[a], n);
};
function hu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function vu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hu(Object(n), !0).forEach(function(r) {
      Pt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var K0 = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", r = e, {
    apply: i,
    onChange: a,
    deleteBackward: o,
    addMark: s,
    removeMark: u
  } = r;
  return ui.set(r, /* @__PURE__ */ new WeakMap()), r.addMark = (l, c) => {
    var p, d;
    (p = ja.get(r)) === null || p === void 0 || p(), !Rt.get(r) && (d = Et.get(r)) !== null && d !== void 0 && d.length && Rt.set(r, null), Vt.delete(r), s(l, c);
  }, r.removeMark = (l) => {
    var c;
    !Rt.get(r) && (c = Et.get(r)) !== null && c !== void 0 && c.length && Rt.set(r, null), Vt.delete(r), u(l);
  }, r.deleteBackward = (l) => {
    if (l !== "line")
      return o(l);
    if (r.selection && q.isCollapsed(r.selection)) {
      var c = g.above(r, {
        match: (y) => fe.isElement(y) && g.isBlock(r, y),
        at: r.selection
      });
      if (c) {
        var [, p] = c, d = g.range(r, p, r.selection.anchor), h = Y0(r, d);
        q.isCollapsed(h) || ne.delete(r, {
          at: h
        });
      }
    }
  }, r.apply = (l) => {
    var c = [], p = [], d = Et.get(r);
    if (d != null && d.length) {
      var h = d.map((R) => Ym(R, l)).filter(Boolean);
      Et.set(r, h);
    }
    var y = nn.get(r);
    y && nn.set(r, nu(r, y, l));
    var v = tn.get(r);
    if (v != null && v.at) {
      var f = Se.isPoint(v == null ? void 0 : v.at) ? ua(r, v.at, l) : nu(r, v.at, l);
      tn.set(r, f ? vu(vu({}, v), {}, {
        at: f
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...Mn(r, l.path));
        break;
      }
      case "set_selection": {
        var C;
        (C = tr.get(r)) === null || C === void 0 || C.unref(), tr.delete(r);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...Mn(r, O.parent(l.path)));
        break;
      }
      case "merge_node": {
        var w = O.previous(l.path);
        c.push(...Mn(r, w));
        break;
      }
      case "move_node": {
        var b = O.common(O.parent(l.path), O.parent(l.newPath));
        c.push(...Mn(r, b));
        var S;
        O.isBefore(l.path, l.newPath) ? (c.push(...Mn(r, O.parent(l.path))), S = l.newPath) : (c.push(...Mn(r, O.parent(l.newPath))), S = l.path);
        var D = oe.get(e, O.parent(S)), E = K.findKey(r, D), A = g.pathRef(r, O.parent(S));
        p.push([A, E]);
        break;
      }
    }
    i(l);
    for (var [F, V] of c) {
      var [M] = g.node(r, F);
      Qr.set(M, V);
    }
    for (var [z, j] of p)
      if (z.current) {
        var [T] = g.node(r, z.current);
        Qr.set(T, j);
      }
  }, r.setFragmentData = (l) => {
    var {
      selection: c
    } = r;
    if (c) {
      var [p, d] = q.edges(c), h = g.void(r, {
        at: p.path
      }), y = g.void(r, {
        at: d.path
      });
      if (!(q.isCollapsed(c) && !h)) {
        var v = K.toDOMRange(r, c), f = v.cloneContents(), C = f.childNodes[0];
        if (f.childNodes.forEach((M) => {
          M.textContent && M.textContent.trim() !== "" && (C = M);
        }), y) {
          var [w] = y, b = v.cloneRange(), S = K.toDOMNode(r, w);
          b.setEndAfter(S), f = b.cloneContents();
        }
        if (h && (C = f.querySelector("[data-slate-spacer]")), Array.from(f.querySelectorAll("[data-slate-zero-width]")).forEach((M) => {
          var z = M.getAttribute("data-slate-zero-width") === "n";
          M.textContent = z ? `
` : "";
        }), ac(C)) {
          var D = C.ownerDocument.createElement("span");
          D.style.whiteSpace = "pre", D.appendChild(C), f.appendChild(D), C = D;
        }
        var E = r.getFragment(), A = JSON.stringify(E), F = window.btoa(encodeURIComponent(A));
        C.setAttribute("data-slate-fragment", F), l.setData("application/".concat(n), F);
        var V = f.ownerDocument.createElement("div");
        return V.appendChild(f), V.setAttribute("hidden", "true"), f.ownerDocument.body.appendChild(V), l.setData("text/html", V.innerHTML), l.setData("text/plain", sc(V)), f.ownerDocument.body.removeChild(V), l;
      }
    }
  }, r.insertData = (l) => {
    r.insertFragmentData(l) || r.insertTextData(l);
  }, r.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(n)) || $m(l);
    if (c) {
      var p = decodeURIComponent(window.atob(c)), d = JSON.parse(p);
      return r.insertFragment(d), !0;
    }
    return !1;
  }, r.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var p = c.split(/\r\n|\r|\n/), d = !1;
      for (var h of p)
        d && ne.splitNodes(r, {
          always: !0
        }), r.insertText(h), d = !0;
      return !0;
    }
    return !1;
  }, r.onChange = (l) => {
    var c = Jl < 18 ? ga.unstable_batchedUpdates : (p) => p();
    c(() => {
      var p = aa.get(r);
      p && p(l), a(l);
    });
  }, r;
}, Mn = (t, e) => {
  var n = [];
  for (var [r, i] of g.levels(t, {
    at: e
  })) {
    var a = K.findKey(t, r);
    n.push([i, a]);
  }
  return n;
};
function yc(t, e, n = "type") {
  const { selection: r } = t;
  if (!r) return !1;
  const [i] = Array.from(
    g.nodes(t, {
      at: g.unhangRange(t, r),
      match: (a) => !g.isEditor(a) && fe.isElement(a) && a[n] === e
    })
  );
  return !!i;
}
const gu = ["listItem", "numberedList"], Hr = ["left", "center", "right", "justify"];
function X0(t, e) {
  const n = Hr.includes(e) ? "align" : "type", r = yc(t, e, n), i = gu.includes(e);
  ne.unwrapNodes(t, {
    match: (o) => !g.isEditor(o) && fe.isElement(o) && gu.includes(o.type) && !Hr.includes(e),
    split: !0
  });
  let a;
  if (Hr.includes(e) ? a = { align: r ? void 0 : e } : a = {
    type: r ? "paragraph" : i ? "listItem" : e
  }, ne.setNodes(t, a), !r && i) {
    const o = { type: e, children: [] };
    ne.wrapNodes(t, o);
  }
}
function pn({ format: t, icon: e }) {
  const n = $a(), r = Hr.includes(t) ? "align" : "type", a = yc(n, t, r) ? "activeTrue" : "activeFalse";
  function o(s) {
    s.preventDefault(), X0(n, t);
  }
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      type: "button",
      className: "arkynRichTextBlockButton " + a,
      onMouseDown: o,
      children: /* @__PURE__ */ x.jsx(e, {})
    }
  );
}
function J0({ attributes: t, children: e, element: n }) {
  const r = { textAlign: n.align };
  switch (n.type) {
    case "blockQuote":
      return /* @__PURE__ */ x.jsx(
        "blockquote",
        {
          className: "arkynElementBlockquote",
          style: r,
          ...t,
          children: e
        }
      );
    case "bulletedList":
      return /* @__PURE__ */ x.jsx("ul", { className: "arkynElementBulletList", style: r, ...t, children: e });
    case "headingOne":
      return /* @__PURE__ */ x.jsx("h1", { className: "arkynElementHeadingOne", style: r, ...t, children: e });
    case "headingTwo":
      return /* @__PURE__ */ x.jsx("h2", { className: "arkynElementHeadingTwo", style: r, ...t, children: e });
    case "listItem":
      return /* @__PURE__ */ x.jsx("li", { className: "arkynElementListItem", style: r, ...t, children: e });
    case "numberedList":
      return /* @__PURE__ */ x.jsx("ol", { className: "arkynElementNumberedList", style: r, ...t, children: e });
    default:
      return /* @__PURE__ */ x.jsx("p", { className: "arkynElementParagraph", style: r, ...t, children: e });
  }
}
function Q0({ attributes: t, children: e, leaf: n }) {
  return n.bold && (e = /* @__PURE__ */ x.jsx("strong", { children: e })), n.code && (e = /* @__PURE__ */ x.jsx("code", { children: e })), n.italic && (e = /* @__PURE__ */ x.jsx("em", { children: e })), n.underline && (e = /* @__PURE__ */ x.jsx("u", { children: e })), /* @__PURE__ */ x.jsx("span", { ...t, children: e });
}
function Cc(t, e) {
  const n = g.marks(t);
  return n ? n[e] === !0 : !1;
}
function Dc(t, e) {
  Cc(t, e) ? g.removeMark(t, e) : g.addMark(t, e, !0);
}
function Pr({ format: t, icon: e }) {
  const n = $a(), i = Cc(n, t) ? "activeTrue" : "activeFalse";
  function a(o) {
    o.preventDefault(), Dc(n, t);
  }
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      type: "button",
      className: "arkynRichTextMarkButton " + i,
      onMouseDown: a,
      children: /* @__PURE__ */ x.jsx(e, {})
    }
  );
}
function ey({ children: t }) {
  return /* @__PURE__ */ x.jsx("div", { className: "arkynRichTextToolbar", children: t });
}
const mu = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
}, yu = [
  {
    type: "paragraph",
    children: [{ text: "" }]
  }
];
function pb({
  name: t,
  defaultValue: e,
  enforceCharacterLimit: n = !1,
  onChangeCharactersCount: r,
  maxLimit: i = 2e3,
  onValueChange: a,
  onChange: o,
  isError: s
}) {
  const [u, l] = $(0), [c, p] = $(
    e ? JSON.parse(e) : yu
  ), [d, h] = $(!1), { id: y, inputRef: v, error: f } = St(), C = qe(null), w = v || C, b = s || !!f, S = qt(() => _v(K0(Nv())), []), D = Ve(Q0, []), E = Ve(J0, []);
  function A(T) {
    return T.map((R) => oe.string(R)).join("");
  }
  function F(T) {
    const R = A(T);
    l(R.length), r && r(R.length), !(n && R.length >= i) && (p(T), o && o(T), a && a(R), S.children = T, ne.setNodes(S, { children: T }));
  }
  const z = `arkynRichText ${b || i === u ? "errorTrue" : "errorFalse"} ${d ? "focusTrue" : "focusFalse"}`, j = i - u;
  return /* @__PURE__ */ x.jsxs(
    G0,
    {
      editor: S,
      initialValue: e ? JSON.parse(e) : yu,
      onChange: F,
      onValueChange: F,
      children: [
        /* @__PURE__ */ x.jsxs("div", { className: z, children: [
          /* @__PURE__ */ x.jsxs(ey, { children: [
            /* @__PURE__ */ x.jsx(pn, { format: "headingOne", icon: ef }),
            /* @__PURE__ */ x.jsx(pn, { format: "headingTwo", icon: tf }),
            /* @__PURE__ */ x.jsx(pn, { format: "blockQuote", icon: nf }),
            /* @__PURE__ */ x.jsx(Pr, { format: "bold", icon: rf }),
            /* @__PURE__ */ x.jsx(Pr, { format: "italic", icon: af }),
            /* @__PURE__ */ x.jsx(Pr, { format: "underline", icon: of }),
            /* @__PURE__ */ x.jsx(Pr, { format: "code", icon: sf }),
            /* @__PURE__ */ x.jsx(pn, { format: "left", icon: uf }),
            /* @__PURE__ */ x.jsx(pn, { format: "right", icon: lf }),
            /* @__PURE__ */ x.jsx(pn, { format: "center", icon: cf }),
            /* @__PURE__ */ x.jsx(pn, { format: "justify", icon: ff })
          ] }),
          /* @__PURE__ */ x.jsx(
            $0,
            {
              className: "editorContainer",
              renderElement: E,
              renderLeaf: D,
              spellCheck: !0,
              id: y,
              onFocus: () => h(!0),
              onBlur: () => h(!1),
              onKeyDown: (T) => {
                for (const R in mu)
                  if (op(R, T)) {
                    T.preventDefault();
                    const N = mu[R];
                    Dc(S, N);
                  }
              }
            }
          ),
          j < 0 && /* @__PURE__ */ x.jsx("div", { className: "restatesCharacters", children: j })
        ] }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            ref: w,
            type: "hidden",
            name: t,
            value: JSON.stringify(c)
          }
        ),
        /* @__PURE__ */ x.jsx("input", { type: "hidden", name: `${t}Count`, value: u })
      ]
    }
  );
}
function ty(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: a = "",
    variant: o = "solid",
    prefix: s,
    leftIcon: u,
    disabled: l,
    readOnly: c,
    onFocus: p,
    onBlur: d,
    title: h,
    style: y,
    closeOnSelect: v = !0,
    ...f
  } = t, D = `arkyn_select ${s ? "hasPrefix" : ""} ${o} ${i} ${l || c || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${a}`, A = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: D,
    prefix: Bf(s, A, "prefix"),
    LeftIcon: u,
    disabled: l || n || c,
    onFocus: p,
    onBlur: d,
    title: h,
    closeOnSelect: v,
    style: y,
    iconSize: A,
    Spinner: /* @__PURE__ */ x.jsx(Ln, { className: "spinner", size: A, strokeWidth: 2.5 }),
    ...f
  };
}
function hb(t) {
  var Z;
  const [e, n] = $(!1), { inputRef: r, id: i, error: a } = St(), o = qe(null), s = r || o, u = t.isError || !!a, {
    disabled: l,
    title: c,
    style: p,
    className: d,
    prefix: h,
    iconSize: y,
    isLoading: v,
    LeftIcon: f,
    value: C = null,
    defaultValue: w = "",
    onFocus: b,
    onBlur: S,
    Spinner: D,
    name: E,
    placeholder: A,
    onSelect: F,
    options: V,
    optionMaxHeight: M,
    closeOnSelect: z,
    ...j
  } = ty({ ...t, id: i, isError: u }, e), [T, R] = $(w);
  function N() {
    l || !(s != null && s.current) || e || (n(!0), s.current.focus());
  }
  function J(H) {
    e || (n(!0), b && b(H));
  }
  function _() {
    n(!1), S && s.current && s.current.blur();
  }
  function te(H) {
    const { label: ee, value: X } = H;
    R(T !== X ? X : ""), F && F({ label: ee, value: X }), z && _();
  }
  const ae = typeof C == "string" ? C : T, k = ((Z = V.find((H) => H.value === ae)) == null ? void 0 : Z.label) || "", I = () => {
    if (!e && k) return !0;
    if (!e && !k) return !1;
    if (e && k) return !0;
    if (e && !k) return !1;
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(
      "section",
      {
        title: c,
        style: p,
        onClick: N,
        className: `${d} placeholder_dark_${I()}`,
        children: [
          h,
          f && /* @__PURE__ */ x.jsx(f, { size: y, strokeWidth: 2.5 }),
          /* @__PURE__ */ x.jsx(
            "input",
            {
              disabled: l,
              readOnly: !0,
              placeholder: k || A,
              onFocus: J,
              ...j
            }
          ),
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "hidden",
              ref: s,
              name: E,
              value: ae || "",
              readOnly: !0
            }
          ),
          e && /* @__PURE__ */ x.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: M },
              children: [
                V.map(({ label: H, value: ee }) => /* @__PURE__ */ x.jsxs(
                  "div",
                  {
                    onClick: () => te({ label: H, value: ee }),
                    className: ae === ee ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      H,
                      " ",
                      /* @__PURE__ */ x.jsx(el, {})
                    ]
                  },
                  ee
                )),
                V.length <= 0 && /* @__PURE__ */ x.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !v && /* @__PURE__ */ x.jsx(
            df,
            {
              className: "arkyn_select_arrow",
              size: y,
              strokeWidth: 2.5
            }
          ),
          v && D
        ]
      }
    ),
    e && /* @__PURE__ */ x.jsx("aside", { className: "arkyn_select_overlay", onClick: _ })
  ] });
}
function vb(t) {
  const {
    size: e = "lg",
    defaultChecked: n = !1,
    checked: r = null,
    value: i,
    unCheckedValue: a = "",
    name: o,
    className: s = "",
    onCheck: u,
    ...l
  } = t, [c, p] = $(n), { id: d, inputRef: h } = St(), y = typeof r == "boolean" ? r : c;
  function v() {
    p(!c), u && u(y ? a : i || "checked");
  }
  const C = `arkynSwitch ${y ? "checkedTrue" : "checkedFalse"} ${e} ${s}`;
  return /* @__PURE__ */ x.jsx("button", { type: "button", onClick: v, className: C, ...l, children: /* @__PURE__ */ x.jsx(
    "input",
    {
      id: d,
      type: "hidden",
      name: o,
      ref: h,
      onClick: v,
      value: y ? i || "checked" : a
    }
  ) });
}
function gb(t) {
  const {
    variant: e = "solid",
    size: n = "md",
    className: r,
    disabled: i = !1,
    readOnly: a = !1,
    onFocus: o,
    onBlur: s,
    title: u,
    style: l,
    ...c
  } = t, [p, d] = $(!1), { inputRef: h, id: y, error: v } = St(), f = qe(null), C = h || f, b = t.isError || !!v ? "errorTrue" : "errorFalse", E = `arkynTextarea ${e} ${n} ${i || a ? "opacityTrue" : "opacityFalse"} ${b} ${p ? "focusedTrue" : "focusedFalse"} ${r}`;
  function A() {
    i || !(C != null && C.current) || (d(!0), C.current.focus());
  }
  function F(M) {
    d(!0), o && o(M);
  }
  function V(M) {
    d(!1), s && s(M);
  }
  return /* @__PURE__ */ x.jsx(
    "section",
    {
      title: u,
      style: l,
      onClick: A,
      className: E,
      children: /* @__PURE__ */ x.jsx(
        "textarea",
        {
          id: y,
          disabled: i,
          readOnly: a,
          ref: C,
          onFocus: F,
          onBlur: V,
          ...c
        }
      )
    }
  );
}
function mb(t) {
  const { className: e = "", ...n } = t, r = `arkynBreadcrumbContainer ${e}`;
  return /* @__PURE__ */ x.jsx("nav", { className: r, ...n });
}
function yb(t) {
  const { pathname: e } = il(), {
    className: n = "",
    disabled: r = !1,
    children: i,
    to: a,
    ...o
  } = t, u = `arkynBreadcrumbLink ${e === a ? "active" : "inactive"} ${n}`;
  return r ? /* @__PURE__ */ x.jsxs("p", { className: u, children: [
    /* @__PURE__ */ x.jsx(Ui, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ x.jsxs(vf, { to: a, className: u, ...o, children: [
    /* @__PURE__ */ x.jsx(Ui, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function ny(t = "") {
  const e = il(), n = new URLSearchParams(e.search), r = t ? `${t}:` : "", i = (a) => {
    Object.entries(a).forEach(([o, s]) => {
      s === void 0 ? n.delete(`${r}${o}`) : n.set(`${r}${o}`, String(s));
    });
  };
  return {
    getParam: (a) => n.get(`${r}${a}`),
    getScopedSearch: (a) => {
      i(a);
      let o = n.toString();
      return o && (o = "?" + o), o;
    }
  };
}
function Cb(t) {
  const {
    scope: e,
    totalCountRegisters: n,
    perPageKey: r = "per_page",
    pageKey: i = "page",
    siblingsCount: a = 2,
    ...o
  } = t, s = gf(), { getParam: u, getScopedSearch: l } = ny(e), c = Number(u(i)) || 1, p = Number(u(r)) || 20, d = Math.ceil(n / p), h = wf(c, a), y = Ef(c, a, d);
  function v(f) {
    s(l({ page: f }));
  }
  return /* @__PURE__ */ x.jsxs("div", { className: "arkynPagination", ...o, children: [
    /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: c <= 1,
        onClick: () => v(c - 1),
        children: /* @__PURE__ */ x.jsx(pf, {})
      }
    ),
    c > 1 + a && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => v(1),
          children: "1"
        }
      ),
      c > 2 + a && /* @__PURE__ */ x.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ x.jsx(Ka, {}) })
    ] }),
    h.map((f, C) => /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: () => v(f),
        className: "arkynPaginationPageButton",
        children: f
      },
      C
    )),
    /* @__PURE__ */ x.jsx("button", { className: "arkynPaginationCurrent", disabled: !0, children: c }),
    y.map((f, C) => /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: () => v(f),
        className: "arkynPaginationPageButton",
        children: f
      },
      C
    )),
    c + a < d && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      c + 1 + a < d && /* @__PURE__ */ x.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ x.jsx(Ka, {}) }),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => v(d),
          children: d
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: c >= d,
        onClick: () => v(c + 1),
        children: /* @__PURE__ */ x.jsx(Ui, {})
      }
    )
  ] });
}
const ca = ht({});
function ry() {
  if (!ca)
    throw new Error("useTabContext must be used within a TabProvider");
  return _e(ca);
}
function Db(t) {
  const {
    children: e,
    onClick: n,
    defaultActive: r,
    className: i,
    ...a
  } = t, [o, s] = $(r || ""), [u, l] = $(!0), c = qe(null), p = `arkynTabContainer ${i || ""}`, [d, h] = $({
    width: "0px",
    left: "0px",
    transition: "none"
  }), y = (f, C) => {
    const w = f.getBoundingClientRect(), b = c.current.getBoundingClientRect(), S = C ? void 0 : "none";
    l(!1), h({
      transition: S,
      width: `${w.width}px`,
      left: `${w.left - b.left}px`
    });
  };
  B(() => {
    const f = c.current;
    if (!f) return;
    let C = null;
    C = f.querySelector("button.activeTrue"), C && y(C);
  }, []);
  const v = (f) => {
    const C = f.target;
    C && (s(C.value), C.classList.add("activeTrue"), y(C, !0), n && n(C.value));
  };
  return /* @__PURE__ */ x.jsxs("nav", { ref: c, className: p.trim(), ...a, children: [
    /* @__PURE__ */ x.jsx(ca.Provider, { value: { handleTabClick: v, showInitialTab: u, value: o }, children: e }),
    /* @__PURE__ */ x.jsx("div", { className: "activeLine", style: d })
  ] });
}
function bb(t) {
  const { children: e, className: n = "", onClick: r, ...i } = t, { value: a, showInitialTab: o, handleTabClick: s } = ry(), u = a === i.value && a ? "activeTrue" : "activeFalse", c = `arkynTabButton ${a === i.value && o ? "showBorderBottom" : ""} ${u} ${n}`;
  function p(d) {
    s(d), r && r(d);
  }
  return /* @__PURE__ */ x.jsx("button", { onClick: p, className: c.trim(), ...i, children: e });
}
const bc = ht({});
function Eb(t) {
  const {
    isVisibled: e,
    makeInvisible: n,
    orientation: r = "left",
    children: i,
    className: a,
    ...o
  } = t, s = r === "left" ? "-100%" : "100%", l = `arkynDrawerContainer ${r} ${e ? "visibleTrue" : "visibleFalse"} ${a}`;
  return /* @__PURE__ */ x.jsx(bc.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ x.jsx(al, { children: e && /* @__PURE__ */ x.jsxs("aside", { className: l.trim(), ...o, children: [
    /* @__PURE__ */ x.jsx(
      rr.div,
      {
        className: "arkynDrawerContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ x.jsx(
      rr.div,
      {
        className: "arkynDrawerContainerContent",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${s})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${s})` },
        children: i
      }
    )
  ] }) }) });
}
function wb(t) {
  const {
    showCloseButton: e = !0,
    className: n,
    children: r,
    ...i
  } = t, { makeInvisible: a } = _e(bc), o = `arkynDrawerHeader ${n}`;
  return /* @__PURE__ */ x.jsxs("header", { className: o.trim(), ...i, children: [
    r,
    e && /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "arkynDrawerHeaderCloseButton",
        type: "button",
        onClick: a,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ x.jsx(tl, { size: 24 })
      }
    )
  ] });
}
const Ec = ht({});
function Bb(t) {
  const {
    isVisibled: e,
    makeInvisible: n,
    children: r,
    className: i = "",
    ...a
  } = t, s = `arkynModalContainer ${e ? "visibleTrue" : "visibleFalse"} ${i}`;
  return /* @__PURE__ */ x.jsx(Ec.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ x.jsx(al, { children: e && /* @__PURE__ */ x.jsxs("aside", { className: s.trim(), ...a, children: [
    /* @__PURE__ */ x.jsx(
      rr.div,
      {
        className: "arkynModalContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ x.jsx(
      rr.div,
      {
        className: "arkynModalContainerContent",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: r
      }
    )
  ] }) }) });
}
function xb(t) {
  const { alignment: e = "right", className: n, ...r } = t, i = `arkynModalFooter ${e} ${n}`;
  return /* @__PURE__ */ x.jsx("footer", { className: i.trim(), ...r });
}
function Lb(t) {
  const {
    showCloseButton: e = !0,
    className: n,
    children: r,
    ...i
  } = t, { makeInvisible: a } = _e(Ec), o = `arkynModalHeader ${n}`;
  return /* @__PURE__ */ x.jsxs("header", { className: o.trim(), ...i, children: [
    r,
    e && /* @__PURE__ */ x.jsx(
      "button",
      {
        type: "button",
        onClick: a,
        "aria-label": "Close modal button",
        className: "arkynModalHeaderCloseButton",
        children: /* @__PURE__ */ x.jsx(tl, { size: 24 })
      }
    )
  ] });
}
function Ab(t) {
  const { children: e, button: n, closeOnClick: r, orientation: i = "bottomLeft" } = t, [a, o] = $(!1), u = `arkynPopover ${i} ${a ? "visibleTrue" : "visibleFalse"}`;
  function l() {
    a || o(!0);
  }
  return /* @__PURE__ */ x.jsxs("div", { className: u, onClick: l, children: [
    n,
    /* @__PURE__ */ x.jsx(
      rr.div,
      {
        style: { visibility: a ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: a ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => r && o(!1),
        className: "arkynPopoverContent",
        children: e
      }
    ),
    a && /* @__PURE__ */ x.jsx("div", { onClick: () => o(!1), className: "arkynPopoverOverlay" })
  ] });
}
function iy(t) {
  const { message: e, title: n, type: r, size: i = "lg" } = t, a = `arkynToast ${r} ${i}`;
  function o() {
    switch (r) {
      case "info":
        return /* @__PURE__ */ x.jsx(Wi, {});
      case "success":
        return /* @__PURE__ */ x.jsx(Qu, {});
      case "danger":
        return /* @__PURE__ */ x.jsx(Ju, {});
      case "warning":
        return /* @__PURE__ */ x.jsx(hf, {});
      default:
        return /* @__PURE__ */ x.jsx(Wi, {});
    }
  }
  return /* @__PURE__ */ x.jsxs("aside", { className: a, children: [
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("div", { className: "bg" }),
      /* @__PURE__ */ x.jsx(o, {})
    ] }),
    /* @__PURE__ */ x.jsxs("p", { children: [
      /* @__PURE__ */ x.jsx("strong", { title: n, children: n }),
      /* @__PURE__ */ x.jsx("span", { children: e })
    ] })
  ] });
}
function Ob(t) {
  const {
    text: e,
    size: n = "lg",
    children: r,
    orientation: i = "top",
    className: a = "",
    ...o
  } = t, s = `arkynTooltip ${n} ${i} ${a}`;
  return /* @__PURE__ */ x.jsxs("div", { className: s.trim(), ...o, children: [
    r,
    /* @__PURE__ */ x.jsx("div", { className: "arkynTooltipText", children: e })
  ] });
}
var it = {}, za = {}, fr = {}, dr = {}, wc = "Expected a function", Cu = NaN, ay = "[object Symbol]", oy = /^\s+|\s+$/g, sy = /^[-+]0x[0-9a-f]+$/i, uy = /^0b[01]+$/i, ly = /^0o[0-7]+$/i, cy = parseInt, fy = typeof rn == "object" && rn && rn.Object === Object && rn, dy = typeof self == "object" && self && self.Object === Object && self, py = fy || dy || Function("return this")(), hy = Object.prototype, vy = hy.toString, gy = Math.max, my = Math.min, Mi = function() {
  return py.Date.now();
};
function yy(t, e, n) {
  var r, i, a, o, s, u, l = 0, c = !1, p = !1, d = !0;
  if (typeof t != "function")
    throw new TypeError(wc);
  e = Du(e) || 0, ei(n) && (c = !!n.leading, p = "maxWait" in n, a = p ? gy(Du(n.maxWait) || 0, e) : a, d = "trailing" in n ? !!n.trailing : d);
  function h(E) {
    var A = r, F = i;
    return r = i = void 0, l = E, o = t.apply(F, A), o;
  }
  function y(E) {
    return l = E, s = setTimeout(C, e), c ? h(E) : o;
  }
  function v(E) {
    var A = E - u, F = E - l, V = e - A;
    return p ? my(V, a - F) : V;
  }
  function f(E) {
    var A = E - u, F = E - l;
    return u === void 0 || A >= e || A < 0 || p && F >= a;
  }
  function C() {
    var E = Mi();
    if (f(E))
      return w(E);
    s = setTimeout(C, v(E));
  }
  function w(E) {
    return s = void 0, d && r ? h(E) : (r = i = void 0, o);
  }
  function b() {
    s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0;
  }
  function S() {
    return s === void 0 ? o : w(Mi());
  }
  function D() {
    var E = Mi(), A = f(E);
    if (r = arguments, i = this, u = E, A) {
      if (s === void 0)
        return y(u);
      if (p)
        return s = setTimeout(C, e), h(u);
    }
    return s === void 0 && (s = setTimeout(C, e)), o;
  }
  return D.cancel = b, D.flush = S, D;
}
function Cy(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(wc);
  return ei(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), yy(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function ei(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function Dy(t) {
  return !!t && typeof t == "object";
}
function by(t) {
  return typeof t == "symbol" || Dy(t) && vy.call(t) == ay;
}
function Du(t) {
  if (typeof t == "number")
    return t;
  if (by(t))
    return Cu;
  if (ei(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = ei(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(oy, "");
  var n = uy.test(t);
  return n || ly.test(t) ? cy(t.slice(2), n ? 2 : 8) : sy.test(t) ? Cu : +t;
}
var Ey = Cy, pr = {};
Object.defineProperty(pr, "__esModule", {
  value: !0
});
pr.addPassiveEventListener = function(e, n, r) {
  var i = r.name;
  i || (i = n, console.warn("Listener must be a named function.")), Vr.has(n) || Vr.set(n, /* @__PURE__ */ new Set());
  var a = Vr.get(n);
  if (!a.has(i)) {
    var o = function() {
      var s = !1;
      try {
        var u = Object.defineProperty({}, "passive", {
          get: function() {
            s = !0;
          }
        });
        window.addEventListener("test", null, u);
      } catch {
      }
      return s;
    }();
    e.addEventListener(n, r, o ? { passive: !0 } : !1), a.add(i);
  }
};
pr.removePassiveEventListener = function(e, n, r) {
  e.removeEventListener(n, r), Vr.get(n).delete(r.name || n);
};
var Vr = /* @__PURE__ */ new Map();
Object.defineProperty(dr, "__esModule", {
  value: !0
});
var wy = Ey, By = Ly(wy), xy = pr;
function Ly(t) {
  return t && t.__esModule ? t : { default: t };
}
var Ay = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
  return (0, By.default)(e, n);
}, nt = {
  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],
  mount: function(e, n) {
    if (e) {
      var r = Ay(function(i) {
        nt.scrollHandler(e);
      }, n);
      nt.scrollSpyContainers.push(e), (0, xy.addPassiveEventListener)(e, "scroll", r);
    }
  },
  isMounted: function(e) {
    return nt.scrollSpyContainers.indexOf(e) !== -1;
  },
  currentPositionX: function(e) {
    if (e === document) {
      var n = window.pageYOffset !== void 0, r = (document.compatMode || "") === "CSS1Compat";
      return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else
      return e.scrollLeft;
  },
  currentPositionY: function(e) {
    if (e === document) {
      var n = window.pageXOffset !== void 0, r = (document.compatMode || "") === "CSS1Compat";
      return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop;
    } else
      return e.scrollTop;
  },
  scrollHandler: function(e) {
    var n = nt.scrollSpyContainers[nt.scrollSpyContainers.indexOf(e)].spyCallbacks || [];
    n.forEach(function(r) {
      return r(nt.currentPositionX(e), nt.currentPositionY(e));
    });
  },
  addStateHandler: function(e) {
    nt.spySetState.push(e);
  },
  addSpyHandler: function(e, n) {
    var r = nt.scrollSpyContainers[nt.scrollSpyContainers.indexOf(n)];
    r.spyCallbacks || (r.spyCallbacks = []), r.spyCallbacks.push(e), e(nt.currentPositionX(n), nt.currentPositionY(n));
  },
  updateStates: function() {
    nt.spySetState.forEach(function(e) {
      return e();
    });
  },
  unmount: function(e, n) {
    nt.scrollSpyContainers.forEach(function(r) {
      return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1);
    }), nt.spySetState && nt.spySetState.length && nt.spySetState.indexOf(e) > -1 && nt.spySetState.splice(nt.spySetState.indexOf(e), 1), document.removeEventListener("scroll", nt.scrollHandler);
  },
  update: function() {
    return nt.scrollSpyContainers.forEach(function(e) {
      return nt.scrollHandler(e);
    });
  }
};
dr.default = nt;
var $n = {}, hr = {};
Object.defineProperty(hr, "__esModule", {
  value: !0
});
var Oy = function(e, n) {
  var r = e.indexOf("#") === 0 ? e.substring(1) : e, i = r ? "#" + r : "", a = window && window.location, o = i ? a.pathname + a.search + i : a.pathname + a.search;
  n ? history.pushState(history.state, "", o) : history.replaceState(history.state, "", o);
}, Sy = function() {
  return window.location.hash.replace(/^#/, "");
}, Fy = function(e) {
  return function(n) {
    return e.contains ? e != n && e.contains(n) : !!(e.compareDocumentPosition(n) & 16);
  };
}, My = function(e) {
  return getComputedStyle(e).position !== "static";
}, Pi = function(e, n) {
  for (var r = e.offsetTop, i = e.offsetParent; i && !n(i); )
    r += i.offsetTop, i = i.offsetParent;
  return { offsetTop: r, offsetParent: i };
}, Py = function(e, n, r) {
  if (r)
    return e === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(e).position !== "static" ? n.offsetLeft : n.offsetLeft - e.offsetLeft;
  if (e === document)
    return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
  if (My(e)) {
    if (n.offsetParent !== e) {
      var i = function(c) {
        return c === e || c === document;
      }, a = Pi(n, i), o = a.offsetTop, s = a.offsetParent;
      if (s !== e)
        throw new Error("Seems containerElement is not an ancestor of the Element");
      return o;
    }
    return n.offsetTop;
  }
  if (n.offsetParent === e.offsetParent)
    return n.offsetTop - e.offsetTop;
  var u = function(c) {
    return c === document;
  };
  return Pi(n, u).offsetTop - Pi(e, u).offsetTop;
};
hr.default = {
  updateHash: Oy,
  getHash: Sy,
  filterElementInContainer: Fy,
  scrollOffset: Py
};
var li = {}, _a = {};
Object.defineProperty(_a, "__esModule", {
  value: !0
});
_a.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function(e) {
    return e < 0.5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function(e) {
    return e;
  },
  // accelerating from zero velocity
  easeInQuad: function(e) {
    return e * e;
  },
  // decelerating to zero velocity
  easeOutQuad: function(e) {
    return e * (2 - e);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  },
  // accelerating from zero velocity 
  easeInCubic: function(e) {
    return e * e * e;
  },
  // decelerating to zero velocity π
  easeOutCubic: function(e) {
    return --e * e * e + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function(e) {
    return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function(e) {
    return e * e * e * e;
  },
  // decelerating to zero velocity 
  easeOutQuart: function(e) {
    return 1 - --e * e * e * e;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function(e) {
    return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
  },
  // accelerating from zero velocity
  easeInQuint: function(e) {
    return e * e * e * e * e;
  },
  // decelerating to zero velocity
  easeOutQuint: function(e) {
    return 1 + --e * e * e * e * e;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function(e) {
    return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
  }
};
var Wa = {};
Object.defineProperty(Wa, "__esModule", {
  value: !0
});
var ky = pr, Ty = ["mousedown", "mousewheel", "touchmove", "keydown"];
Wa.default = {
  subscribe: function(e) {
    return typeof document < "u" && Ty.forEach(function(n) {
      return (0, ky.addPassiveEventListener)(document, n, e);
    });
  }
};
var vr = {};
Object.defineProperty(vr, "__esModule", {
  value: !0
});
var fa = {
  registered: {},
  scrollEvent: {
    register: function(e, n) {
      fa.registered[e] = n;
    },
    remove: function(e) {
      fa.registered[e] = null;
    }
  }
};
vr.default = fa;
Object.defineProperty(li, "__esModule", {
  value: !0
});
var Ry = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, jy = hr;
ci(jy);
var Iy = _a, bu = ci(Iy), Ny = Wa, $y = ci(Ny), zy = vr, $t = ci(zy);
function ci(t) {
  return t && t.__esModule ? t : { default: t };
}
var Bc = function(e) {
  return bu.default[e.smooth] || bu.default.defaultEasing;
}, _y = function(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}, Wy = function() {
  if (typeof window < "u")
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
}, da = function() {
  return Wy() || function(t, e, n) {
    window.setTimeout(t, n || 1e3 / 60, (/* @__PURE__ */ new Date()).getTime());
  };
}(), xc = function() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: !1,
    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
}, Lc = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollLeft;
  var r = window.pageXOffset !== void 0, i = (document.compatMode || "") === "CSS1Compat";
  return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft;
}, Ac = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollTop;
  var r = window.pageXOffset !== void 0, i = (document.compatMode || "") === "CSS1Compat";
  return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop;
}, Uy = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollWidth - n.offsetWidth;
  var r = document.body, i = document.documentElement;
  return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth);
}, Hy = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollHeight - n.offsetHeight;
  var r = document.body, i = document.documentElement;
  return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
}, Vy = function t(e, n, r) {
  var i = n.data;
  if (!n.ignoreCancelEvents && i.cancel) {
    $t.default.registered.end && $t.default.registered.end(i.to, i.target, i.currentPositionY);
    return;
  }
  if (i.delta = Math.round(i.targetPosition - i.startPosition), i.start === null && (i.start = r), i.progress = r - i.start, i.percent = i.progress >= i.duration ? 1 : e(i.progress / i.duration), i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent), i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition), i.percent < 1) {
    var a = t.bind(null, e, n);
    da.call(window, a);
    return;
  }
  $t.default.registered.end && $t.default.registered.end(i.to, i.target, i.currentPosition);
}, Ua = function(e) {
  e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null;
}, gr = function(e, n, r, i) {
  n.data = n.data || xc(), window.clearTimeout(n.data.delayTimeout);
  var a = function() {
    n.data.cancel = !0;
  };
  if ($y.default.subscribe(a), Ua(n), n.data.start = null, n.data.cancel = !1, n.data.startPosition = n.horizontal ? Lc(n) : Ac(n), n.data.targetPosition = n.absolute ? e : e + n.data.startPosition, n.data.startPosition === n.data.targetPosition) {
    $t.default.registered.end && $t.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
    return;
  }
  n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition), n.data.duration = _y(n.duration)(n.data.delta), n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration), n.data.to = r, n.data.target = i;
  var o = Bc(n), s = Vy.bind(null, o, n);
  if (n && n.delay > 0) {
    n.data.delayTimeout = window.setTimeout(function() {
      $t.default.registered.begin && $t.default.registered.begin(n.data.to, n.data.target), da.call(window, s);
    }, n.delay);
    return;
  }
  $t.default.registered.begin && $t.default.registered.begin(n.data.to, n.data.target), da.call(window, s);
}, fi = function(e) {
  return e = Ry({}, e), e.data = e.data || xc(), e.absolute = !0, e;
}, qy = function(e) {
  gr(0, fi(e));
}, Zy = function(e, n) {
  gr(e, fi(n));
}, Gy = function(e) {
  e = fi(e), Ua(e), gr(e.horizontal ? Uy(e) : Hy(e), e);
}, Yy = function(e, n) {
  n = fi(n), Ua(n);
  var r = n.horizontal ? Lc(n) : Ac(n);
  gr(e + r, n);
};
li.default = {
  animateTopScroll: gr,
  getAnimationType: Bc,
  scrollToTop: qy,
  scrollToBottom: Gy,
  scrollTo: Zy,
  scrollMore: Yy
};
Object.defineProperty($n, "__esModule", {
  value: !0
});
var Ky = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Xy = hr, Jy = Ha(Xy), Qy = li, eC = Ha(Qy), tC = vr, kr = Ha(tC);
function Ha(t) {
  return t && t.__esModule ? t : { default: t };
}
var Tr = {}, Eu = void 0;
$n.default = {
  unmount: function() {
    Tr = {};
  },
  register: function(e, n) {
    Tr[e] = n;
  },
  unregister: function(e) {
    delete Tr[e];
  },
  get: function(e) {
    return Tr[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0];
  },
  setActiveLink: function(e) {
    return Eu = e;
  },
  getActiveLink: function() {
    return Eu;
  },
  scrollTo: function(e, n) {
    var r = this.get(e);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = Ky({}, n, { absolute: !1 });
    var i = n.containerId, a = n.container, o = void 0;
    i ? o = document.getElementById(i) : a && a.nodeType ? o = a : o = document, n.absolute = !0;
    var s = n.horizontal, u = Jy.default.scrollOffset(o, r, s) + (n.offset || 0);
    if (!n.smooth) {
      kr.default.registered.begin && kr.default.registered.begin(e, r), o === document ? n.horizontal ? window.scrollTo(u, 0) : window.scrollTo(0, u) : o.scrollTop = u, kr.default.registered.end && kr.default.registered.end(e, r);
      return;
    }
    eC.default.animateTopScroll(u, n, e, r);
  }
};
var pa = { exports: {} }, Rr = { exports: {} }, Ue = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wu;
function nC() {
  if (wu) return Ue;
  wu = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, y = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, f = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function b(D) {
    if (typeof D == "object" && D !== null) {
      var E = D.$$typeof;
      switch (E) {
        case e:
          switch (D = D.type, D) {
            case u:
            case l:
            case r:
            case a:
            case i:
            case p:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case s:
                case c:
                case y:
                case h:
                case o:
                  return D;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function S(D) {
    return b(D) === l;
  }
  return Ue.AsyncMode = u, Ue.ConcurrentMode = l, Ue.ContextConsumer = s, Ue.ContextProvider = o, Ue.Element = e, Ue.ForwardRef = c, Ue.Fragment = r, Ue.Lazy = y, Ue.Memo = h, Ue.Portal = n, Ue.Profiler = a, Ue.StrictMode = i, Ue.Suspense = p, Ue.isAsyncMode = function(D) {
    return S(D) || b(D) === u;
  }, Ue.isConcurrentMode = S, Ue.isContextConsumer = function(D) {
    return b(D) === s;
  }, Ue.isContextProvider = function(D) {
    return b(D) === o;
  }, Ue.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }, Ue.isForwardRef = function(D) {
    return b(D) === c;
  }, Ue.isFragment = function(D) {
    return b(D) === r;
  }, Ue.isLazy = function(D) {
    return b(D) === y;
  }, Ue.isMemo = function(D) {
    return b(D) === h;
  }, Ue.isPortal = function(D) {
    return b(D) === n;
  }, Ue.isProfiler = function(D) {
    return b(D) === a;
  }, Ue.isStrictMode = function(D) {
    return b(D) === i;
  }, Ue.isSuspense = function(D) {
    return b(D) === p;
  }, Ue.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === r || D === l || D === a || D === i || D === p || D === d || typeof D == "object" && D !== null && (D.$$typeof === y || D.$$typeof === h || D.$$typeof === o || D.$$typeof === s || D.$$typeof === c || D.$$typeof === f || D.$$typeof === C || D.$$typeof === w || D.$$typeof === v);
  }, Ue.typeOf = b, Ue;
}
var He = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bu;
function rC() {
  return Bu || (Bu = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, a = t ? Symbol.for("react.profiler") : 60114, o = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, p = t ? Symbol.for("react.suspense") : 60113, d = t ? Symbol.for("react.suspense_list") : 60120, h = t ? Symbol.for("react.memo") : 60115, y = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, f = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function b(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === r || G === l || G === a || G === i || G === p || G === d || typeof G == "object" && G !== null && (G.$$typeof === y || G.$$typeof === h || G.$$typeof === o || G.$$typeof === s || G.$$typeof === c || G.$$typeof === f || G.$$typeof === C || G.$$typeof === w || G.$$typeof === v);
    }
    function S(G) {
      if (typeof G == "object" && G !== null) {
        var ce = G.$$typeof;
        switch (ce) {
          case e:
            var se = G.type;
            switch (se) {
              case u:
              case l:
              case r:
              case a:
              case i:
              case p:
                return se;
              default:
                var he = se && se.$$typeof;
                switch (he) {
                  case s:
                  case c:
                  case y:
                  case h:
                  case o:
                    return he;
                  default:
                    return ce;
                }
            }
          case n:
            return ce;
        }
      }
    }
    var D = u, E = l, A = s, F = o, V = e, M = c, z = r, j = y, T = h, R = n, N = a, J = i, _ = p, te = !1;
    function ae(G) {
      return te || (te = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(G) || S(G) === u;
    }
    function k(G) {
      return S(G) === l;
    }
    function I(G) {
      return S(G) === s;
    }
    function Z(G) {
      return S(G) === o;
    }
    function H(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function ee(G) {
      return S(G) === c;
    }
    function X(G) {
      return S(G) === r;
    }
    function m(G) {
      return S(G) === y;
    }
    function U(G) {
      return S(G) === h;
    }
    function W(G) {
      return S(G) === n;
    }
    function P(G) {
      return S(G) === a;
    }
    function Q(G) {
      return S(G) === i;
    }
    function ie(G) {
      return S(G) === p;
    }
    He.AsyncMode = D, He.ConcurrentMode = E, He.ContextConsumer = A, He.ContextProvider = F, He.Element = V, He.ForwardRef = M, He.Fragment = z, He.Lazy = j, He.Memo = T, He.Portal = R, He.Profiler = N, He.StrictMode = J, He.Suspense = _, He.isAsyncMode = ae, He.isConcurrentMode = k, He.isContextConsumer = I, He.isContextProvider = Z, He.isElement = H, He.isForwardRef = ee, He.isFragment = X, He.isLazy = m, He.isMemo = U, He.isPortal = W, He.isProfiler = P, He.isStrictMode = Q, He.isSuspense = ie, He.isValidElementType = b, He.typeOf = S;
  }()), He;
}
var xu;
function Oc() {
  return xu || (xu = 1, process.env.NODE_ENV === "production" ? Rr.exports = nC() : Rr.exports = rC()), Rr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ki, Lu;
function iC() {
  if (Lu) return ki;
  Lu = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(a) {
    if (a == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(a);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var a = new String("abc");
      if (a[5] = "de", Object.getOwnPropertyNames(a)[0] === "5")
        return !1;
      for (var o = {}, s = 0; s < 10; s++)
        o["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(o).map(function(c) {
        return o[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return ki = i() ? Object.assign : function(a, o) {
    for (var s, u = r(a), l, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var p in s)
        e.call(s, p) && (u[p] = s[p]);
      if (t) {
        l = t(s);
        for (var d = 0; d < l.length; d++)
          n.call(s, l[d]) && (u[l[d]] = s[l[d]]);
      }
    }
    return u;
  }, ki;
}
var Ti, Au;
function Va() {
  if (Au) return Ti;
  Au = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Ti = t, Ti;
}
var Ri, Ou;
function Sc() {
  return Ou || (Ou = 1, Ri = Function.call.bind(Object.prototype.hasOwnProperty)), Ri;
}
var ji, Su;
function aC() {
  if (Su) return ji;
  Su = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Va(), n = {}, r = Sc();
    t = function(a) {
      var o = "Warning: " + a;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function i(a, o, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in a)
        if (r(a, c)) {
          var p;
          try {
            if (typeof a[c] != "function") {
              var d = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof a[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw d.name = "Invariant Violation", d;
            }
            p = a[c](o, c, u, s, null, e);
          } catch (y) {
            p = y;
          }
          if (p && !(p instanceof Error) && t(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof p + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), p instanceof Error && !(p.message in n)) {
            n[p.message] = !0;
            var h = l ? l() : "";
            t(
              "Failed " + s + " type: " + p.message + (h ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, ji = i, ji;
}
var Ii, Fu;
function oC() {
  if (Fu) return Ii;
  Fu = 1;
  var t = Oc(), e = iC(), n = Va(), r = Sc(), i = aC(), a = function() {
  };
  process.env.NODE_ENV !== "production" && (a = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Ii = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function p(k) {
      var I = k && (l && k[l] || k[c]);
      if (typeof I == "function")
        return I;
    }
    var d = "<<anonymous>>", h = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: w(),
      arrayOf: b,
      element: S(),
      elementType: D(),
      instanceOf: E,
      node: M(),
      objectOf: F,
      oneOf: A,
      oneOfType: V,
      shape: j,
      exact: T
    };
    function y(k, I) {
      return k === I ? k !== 0 || 1 / k === 1 / I : k !== k && I !== I;
    }
    function v(k, I) {
      this.message = k, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function f(k) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, Z = 0;
      function H(X, m, U, W, P, Q, ie) {
        if (W = W || d, Q = Q || U, ie !== n) {
          if (u) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = W + ":" + U;
            !I[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            Z < 3 && (a(
              "You are manually calling a React.PropTypes validation function for the `" + Q + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[ce] = !0, Z++);
          }
        }
        return m[U] == null ? X ? m[U] === null ? new v("The " + P + " `" + Q + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new v("The " + P + " `" + Q + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : k(m, U, W, P, Q);
      }
      var ee = H.bind(null, !1);
      return ee.isRequired = H.bind(null, !0), ee;
    }
    function C(k) {
      function I(Z, H, ee, X, m, U) {
        var W = Z[H], P = J(W);
        if (P !== k) {
          var Q = _(W);
          return new v(
            "Invalid " + X + " `" + m + "` of type " + ("`" + Q + "` supplied to `" + ee + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return f(I);
    }
    function w() {
      return f(o);
    }
    function b(k) {
      function I(Z, H, ee, X, m) {
        if (typeof k != "function")
          return new v("Property `" + m + "` of component `" + ee + "` has invalid PropType notation inside arrayOf.");
        var U = Z[H];
        if (!Array.isArray(U)) {
          var W = J(U);
          return new v("Invalid " + X + " `" + m + "` of type " + ("`" + W + "` supplied to `" + ee + "`, expected an array."));
        }
        for (var P = 0; P < U.length; P++) {
          var Q = k(U, P, ee, X, m + "[" + P + "]", n);
          if (Q instanceof Error)
            return Q;
        }
        return null;
      }
      return f(I);
    }
    function S() {
      function k(I, Z, H, ee, X) {
        var m = I[Z];
        if (!s(m)) {
          var U = J(m);
          return new v("Invalid " + ee + " `" + X + "` of type " + ("`" + U + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(k);
    }
    function D() {
      function k(I, Z, H, ee, X) {
        var m = I[Z];
        if (!t.isValidElementType(m)) {
          var U = J(m);
          return new v("Invalid " + ee + " `" + X + "` of type " + ("`" + U + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(k);
    }
    function E(k) {
      function I(Z, H, ee, X, m) {
        if (!(Z[H] instanceof k)) {
          var U = k.name || d, W = ae(Z[H]);
          return new v("Invalid " + X + " `" + m + "` of type " + ("`" + W + "` supplied to `" + ee + "`, expected ") + ("instance of `" + U + "`."));
        }
        return null;
      }
      return f(I);
    }
    function A(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? a(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : a("Invalid argument supplied to oneOf, expected an array.")), o;
      function I(Z, H, ee, X, m) {
        for (var U = Z[H], W = 0; W < k.length; W++)
          if (y(U, k[W]))
            return null;
        var P = JSON.stringify(k, function(ie, G) {
          var ce = _(G);
          return ce === "symbol" ? String(G) : G;
        });
        return new v("Invalid " + X + " `" + m + "` of value `" + String(U) + "` " + ("supplied to `" + ee + "`, expected one of " + P + "."));
      }
      return f(I);
    }
    function F(k) {
      function I(Z, H, ee, X, m) {
        if (typeof k != "function")
          return new v("Property `" + m + "` of component `" + ee + "` has invalid PropType notation inside objectOf.");
        var U = Z[H], W = J(U);
        if (W !== "object")
          return new v("Invalid " + X + " `" + m + "` of type " + ("`" + W + "` supplied to `" + ee + "`, expected an object."));
        for (var P in U)
          if (r(U, P)) {
            var Q = k(U, P, ee, X, m + "." + P, n);
            if (Q instanceof Error)
              return Q;
          }
        return null;
      }
      return f(I);
    }
    function V(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && a("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var I = 0; I < k.length; I++) {
        var Z = k[I];
        if (typeof Z != "function")
          return a(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + te(Z) + " at index " + I + "."
          ), o;
      }
      function H(ee, X, m, U, W) {
        for (var P = [], Q = 0; Q < k.length; Q++) {
          var ie = k[Q], G = ie(ee, X, m, U, W, n);
          if (G == null)
            return null;
          G.data && r(G.data, "expectedType") && P.push(G.data.expectedType);
        }
        var ce = P.length > 0 ? ", expected one of type [" + P.join(", ") + "]" : "";
        return new v("Invalid " + U + " `" + W + "` supplied to " + ("`" + m + "`" + ce + "."));
      }
      return f(H);
    }
    function M() {
      function k(I, Z, H, ee, X) {
        return R(I[Z]) ? null : new v("Invalid " + ee + " `" + X + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return f(k);
    }
    function z(k, I, Z, H, ee) {
      return new v(
        (k || "React class") + ": " + I + " type `" + Z + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ee + "`."
      );
    }
    function j(k) {
      function I(Z, H, ee, X, m) {
        var U = Z[H], W = J(U);
        if (W !== "object")
          return new v("Invalid " + X + " `" + m + "` of type `" + W + "` " + ("supplied to `" + ee + "`, expected `object`."));
        for (var P in k) {
          var Q = k[P];
          if (typeof Q != "function")
            return z(ee, X, m, P, _(Q));
          var ie = Q(U, P, ee, X, m + "." + P, n);
          if (ie)
            return ie;
        }
        return null;
      }
      return f(I);
    }
    function T(k) {
      function I(Z, H, ee, X, m) {
        var U = Z[H], W = J(U);
        if (W !== "object")
          return new v("Invalid " + X + " `" + m + "` of type `" + W + "` " + ("supplied to `" + ee + "`, expected `object`."));
        var P = e({}, Z[H], k);
        for (var Q in P) {
          var ie = k[Q];
          if (r(k, Q) && typeof ie != "function")
            return z(ee, X, m, Q, _(ie));
          if (!ie)
            return new v(
              "Invalid " + X + " `" + m + "` key `" + Q + "` supplied to `" + ee + "`.\nBad object: " + JSON.stringify(Z[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var G = ie(U, Q, ee, X, m + "." + Q, n);
          if (G)
            return G;
        }
        return null;
      }
      return f(I);
    }
    function R(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(R);
          if (k === null || s(k))
            return !0;
          var I = p(k);
          if (I) {
            var Z = I.call(k), H;
            if (I !== k.entries) {
              for (; !(H = Z.next()).done; )
                if (!R(H.value))
                  return !1;
            } else
              for (; !(H = Z.next()).done; ) {
                var ee = H.value;
                if (ee && !R(ee[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(k, I) {
      return k === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function J(k) {
      var I = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : N(I, k) ? "symbol" : I;
    }
    function _(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var I = J(k);
      if (I === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function te(k) {
      var I = _(k);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function ae(k) {
      return !k.constructor || !k.constructor.name ? d : k.constructor.name;
    }
    return h.checkPropTypes = i, h.resetWarningCache = i.resetWarningCache, h.PropTypes = h, h;
  }, Ii;
}
var Ni, Mu;
function sC() {
  if (Mu) return Ni;
  Mu = 1;
  var t = Va();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, Ni = function() {
    function r(o, s, u, l, c, p) {
      if (p !== t) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var a = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return a.PropTypes = a, a;
  }, Ni;
}
if (process.env.NODE_ENV !== "production") {
  var uC = Oc(), lC = !0;
  pa.exports = oC()(uC.isElement, lC);
} else
  pa.exports = sC()();
var di = pa.exports, pi = {};
Object.defineProperty(pi, "__esModule", {
  value: !0
});
var cC = hr, $i = fC(cC);
function fC(t) {
  return t && t.__esModule ? t : { default: t };
}
var dC = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function(e) {
    this.scroller = e, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0;
  },
  mapContainer: function(e, n) {
    this.containers[e] = n;
  },
  isMounted: function() {
    return this.mountFlag;
  },
  isInitialized: function() {
    return this.initialized;
  },
  initStateFromHash: function() {
    var e = this, n = this.getHash();
    n ? window.setTimeout(function() {
      e.scrollTo(n, !0), e.initialized = !0;
    }, 10) : this.initialized = !0;
  },
  scrollTo: function(e, n) {
    var r = this.scroller, i = r.get(e);
    if (i && (n || e !== r.getActiveLink())) {
      var a = this.containers[e] || document;
      r.scrollTo(e, { container: a });
    }
  },
  getHash: function() {
    return $i.default.getHash();
  },
  changeHash: function(e, n) {
    this.isInitialized() && $i.default.getHash() !== e && $i.default.updateHash(e, n);
  },
  handleHashChange: function() {
    this.scrollTo(this.getHash());
  },
  unmount: function() {
    this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange);
  }
};
pi.default = dC;
Object.defineProperty(fr, "__esModule", {
  value: !0
});
var jr = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, pC = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), hC = Y, Pu = mr(hC), vC = dr, Ir = mr(vC), gC = $n, mC = mr(gC), yC = di, Qe = mr(yC), CC = pi, Xt = mr(CC);
function mr(t) {
  return t && t.__esModule ? t : { default: t };
}
function DC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function bC(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function EC(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ku = {
  to: Qe.default.string.isRequired,
  containerId: Qe.default.string,
  container: Qe.default.object,
  activeClass: Qe.default.string,
  activeStyle: Qe.default.object,
  spy: Qe.default.bool,
  horizontal: Qe.default.bool,
  smooth: Qe.default.oneOfType([Qe.default.bool, Qe.default.string]),
  offset: Qe.default.number,
  delay: Qe.default.number,
  isDynamic: Qe.default.bool,
  onClick: Qe.default.func,
  duration: Qe.default.oneOfType([Qe.default.number, Qe.default.func]),
  absolute: Qe.default.bool,
  onSetActive: Qe.default.func,
  onSetInactive: Qe.default.func,
  ignoreCancelEvents: Qe.default.bool,
  hashSpy: Qe.default.bool,
  saveHashHistory: Qe.default.bool,
  spyThrottle: Qe.default.number
};
fr.default = function(t, e) {
  var n = e || mC.default, r = function(a) {
    EC(o, a);
    function o(s) {
      DC(this, o);
      var u = bC(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, s));
      return i.call(u), u.state = {
        active: !1
      }, u;
    }
    return pC(o, [{
      key: "getScrollSpyContainer",
      value: function() {
        var u = this.props.containerId, l = this.props.container;
        return u && !l ? document.getElementById(u) : l && l.nodeType ? l : document;
      }
    }, {
      key: "componentDidMount",
      value: function() {
        if (this.props.spy || this.props.hashSpy) {
          var u = this.getScrollSpyContainer();
          Ir.default.isMounted(u) || Ir.default.mount(u, this.props.spyThrottle), this.props.hashSpy && (Xt.default.isMounted() || Xt.default.mount(n), Xt.default.mapContainer(this.props.to, u)), Ir.default.addSpyHandler(this.spyHandler, u), this.setState({
            container: u
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        Ir.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: "render",
      value: function() {
        var u = "";
        this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
        var l = {};
        this.state && this.state.active ? l = jr({}, this.props.style, this.props.activeStyle) : l = jr({}, this.props.style);
        var c = jr({}, this.props);
        for (var p in ku)
          c.hasOwnProperty(p) && delete c[p];
        return c.className = u, c.style = l, c.onClick = this.handleClick, Pu.default.createElement(t, c);
      }
    }]), o;
  }(Pu.default.PureComponent), i = function() {
    var o = this;
    this.scrollTo = function(s, u) {
      n.scrollTo(s, jr({}, o.state, u));
    }, this.handleClick = function(s) {
      o.props.onClick && o.props.onClick(s), s.stopPropagation && s.stopPropagation(), s.preventDefault && s.preventDefault(), o.scrollTo(o.props.to, o.props);
    }, this.spyHandler = function(s, u) {
      var l = o.getScrollSpyContainer();
      if (!(Xt.default.isMounted() && !Xt.default.isInitialized())) {
        var c = o.props.horizontal, p = o.props.to, d = null, h = void 0, y = void 0;
        if (c) {
          var v = 0, f = 0, C = 0;
          if (l.getBoundingClientRect) {
            var w = l.getBoundingClientRect();
            C = w.left;
          }
          if (!d || o.props.isDynamic) {
            if (d = n.get(p), !d)
              return;
            var b = d.getBoundingClientRect();
            v = b.left - C + s, f = v + b.width;
          }
          var S = s - o.props.offset;
          h = S >= Math.floor(v) && S < Math.floor(f), y = S < Math.floor(v) || S >= Math.floor(f);
        } else {
          var D = 0, E = 0, A = 0;
          if (l.getBoundingClientRect) {
            var F = l.getBoundingClientRect();
            A = F.top;
          }
          if (!d || o.props.isDynamic) {
            if (d = n.get(p), !d)
              return;
            var V = d.getBoundingClientRect();
            D = V.top - A + u, E = D + V.height;
          }
          var M = u - o.props.offset;
          h = M >= Math.floor(D) && M < Math.floor(E), y = M < Math.floor(D) || M >= Math.floor(E);
        }
        var z = n.getActiveLink();
        if (y) {
          if (p === z && n.setActiveLink(void 0), o.props.hashSpy && Xt.default.getHash() === p) {
            var j = o.props.saveHashHistory, T = j === void 0 ? !1 : j;
            Xt.default.changeHash("", T);
          }
          o.props.spy && o.state.active && (o.setState({ active: !1 }), o.props.onSetInactive && o.props.onSetInactive(p, d));
        }
        if (h && (z !== p || o.state.active === !1)) {
          n.setActiveLink(p);
          var R = o.props.saveHashHistory, N = R === void 0 ? !1 : R;
          o.props.hashSpy && Xt.default.changeHash(p, N), o.props.spy && (o.setState({ active: !0 }), o.props.onSetActive && o.props.onSetActive(p, d));
        }
      }
    };
  };
  return r.propTypes = ku, r.defaultProps = { offset: 0 }, r;
};
Object.defineProperty(za, "__esModule", {
  value: !0
});
var wC = Y, Tu = Fc(wC), BC = fr, xC = Fc(BC);
function Fc(t) {
  return t && t.__esModule ? t : { default: t };
}
function LC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ru(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function AC(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var OC = function(t) {
  AC(e, t);
  function e() {
    var n, r, i, a;
    LC(this, e);
    for (var o = arguments.length, s = Array(o), u = 0; u < o; u++)
      s[u] = arguments[u];
    return a = (r = (i = Ru(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(s))), i), i.render = function() {
      return Tu.default.createElement(
        "a",
        i.props,
        i.props.children
      );
    }, r), Ru(i, a);
  }
  return e;
}(Tu.default.Component);
za.default = (0, xC.default)(OC);
var qa = {};
Object.defineProperty(qa, "__esModule", {
  value: !0
});
var SC = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), FC = Y, ju = Mc(FC), MC = fr, PC = Mc(MC);
function Mc(t) {
  return t && t.__esModule ? t : { default: t };
}
function kC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function TC(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function RC(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var jC = function(t) {
  RC(e, t);
  function e() {
    return kC(this, e), TC(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return SC(e, [{
    key: "render",
    value: function() {
      return ju.default.createElement(
        "button",
        this.props,
        this.props.children
      );
    }
  }]), e;
}(ju.default.Component);
qa.default = (0, PC.default)(jC);
var Za = {}, hi = {};
Object.defineProperty(hi, "__esModule", {
  value: !0
});
var IC = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, NC = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), $C = Y, Iu = vi($C), zC = ga;
vi(zC);
var _C = $n, Nu = vi(_C), WC = di, $u = vi(WC);
function vi(t) {
  return t && t.__esModule ? t : { default: t };
}
function UC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function HC(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function VC(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
hi.default = function(t) {
  var e = function(n) {
    VC(r, n);
    function r(i) {
      UC(this, r);
      var a = HC(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return a.childBindings = {
        domNode: null
      }, a;
    }
    return NC(r, [{
      key: "componentDidMount",
      value: function() {
        if (typeof window > "u")
          return !1;
        this.registerElems(this.props.name);
      }
    }, {
      key: "componentDidUpdate",
      value: function(a) {
        this.props.name !== a.name && this.registerElems(this.props.name);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        if (typeof window > "u")
          return !1;
        Nu.default.unregister(this.props.name);
      }
    }, {
      key: "registerElems",
      value: function(a) {
        Nu.default.register(a, this.childBindings.domNode);
      }
    }, {
      key: "render",
      value: function() {
        return Iu.default.createElement(t, IC({}, this.props, { parentBindings: this.childBindings }));
      }
    }]), r;
  }(Iu.default.Component);
  return e.propTypes = {
    name: $u.default.string,
    id: $u.default.string
  }, e;
};
Object.defineProperty(Za, "__esModule", {
  value: !0
});
var zu = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, qC = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), ZC = Y, _u = Ga(ZC), GC = hi, YC = Ga(GC), KC = di, Wu = Ga(KC);
function Ga(t) {
  return t && t.__esModule ? t : { default: t };
}
function XC(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function JC(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function QC(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Pc = function(t) {
  QC(e, t);
  function e() {
    return XC(this, e), JC(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return qC(e, [{
    key: "render",
    value: function() {
      var r = this, i = zu({}, this.props);
      return delete i.name, i.parentBindings && delete i.parentBindings, _u.default.createElement(
        "div",
        zu({}, i, { ref: function(o) {
          r.props.parentBindings.domNode = o;
        } }),
        this.props.children
      );
    }
  }]), e;
}(_u.default.Component);
Pc.propTypes = {
  name: Wu.default.string,
  id: Wu.default.string
};
Za.default = (0, YC.default)(Pc);
var zi = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Uu = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function Hu(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Vu(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function qu(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Nr = Y, hn = dr, _i = $n, rt = di, Jt = pi, Zu = {
  to: rt.string.isRequired,
  containerId: rt.string,
  container: rt.object,
  activeClass: rt.string,
  spy: rt.bool,
  smooth: rt.oneOfType([rt.bool, rt.string]),
  offset: rt.number,
  delay: rt.number,
  isDynamic: rt.bool,
  onClick: rt.func,
  duration: rt.oneOfType([rt.number, rt.func]),
  absolute: rt.bool,
  onSetActive: rt.func,
  onSetInactive: rt.func,
  ignoreCancelEvents: rt.bool,
  hashSpy: rt.bool,
  spyThrottle: rt.number
}, eD = {
  Scroll: function(e, n) {
    console.warn("Helpers.Scroll is deprecated since v1.7.0");
    var r = n || _i, i = function(o) {
      qu(s, o);
      function s(u) {
        Hu(this, s);
        var l = Vu(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, u));
        return a.call(l), l.state = {
          active: !1
        }, l;
      }
      return Uu(s, [{
        key: "getScrollSpyContainer",
        value: function() {
          var l = this.props.containerId, c = this.props.container;
          return l ? document.getElementById(l) : c && c.nodeType ? c : document;
        }
      }, {
        key: "componentDidMount",
        value: function() {
          if (this.props.spy || this.props.hashSpy) {
            var l = this.getScrollSpyContainer();
            hn.isMounted(l) || hn.mount(l, this.props.spyThrottle), this.props.hashSpy && (Jt.isMounted() || Jt.mount(r), Jt.mapContainer(this.props.to, l)), this.props.spy && hn.addStateHandler(this.stateHandler), hn.addSpyHandler(this.spyHandler, l), this.setState({
              container: l
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          hn.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: "render",
        value: function() {
          var l = "";
          this.state && this.state.active ? l = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : l = this.props.className;
          var c = zi({}, this.props);
          for (var p in Zu)
            c.hasOwnProperty(p) && delete c[p];
          return c.className = l, c.onClick = this.handleClick, Nr.createElement(e, c);
        }
      }]), s;
    }(Nr.Component), a = function() {
      var s = this;
      this.scrollTo = function(u, l) {
        r.scrollTo(u, zi({}, s.state, l));
      }, this.handleClick = function(u) {
        s.props.onClick && s.props.onClick(u), u.stopPropagation && u.stopPropagation(), u.preventDefault && u.preventDefault(), s.scrollTo(s.props.to, s.props);
      }, this.stateHandler = function() {
        r.getActiveLink() !== s.props.to && (s.state !== null && s.state.active && s.props.onSetInactive && s.props.onSetInactive(), s.setState({ active: !1 }));
      }, this.spyHandler = function(u) {
        var l = s.getScrollSpyContainer();
        if (!(Jt.isMounted() && !Jt.isInitialized())) {
          var c = s.props.to, p = null, d = 0, h = 0, y = 0;
          if (l.getBoundingClientRect) {
            var v = l.getBoundingClientRect();
            y = v.top;
          }
          if (!p || s.props.isDynamic) {
            if (p = r.get(c), !p)
              return;
            var f = p.getBoundingClientRect();
            d = f.top - y + u, h = d + f.height;
          }
          var C = u - s.props.offset, w = C >= Math.floor(d) && C < Math.floor(h), b = C < Math.floor(d) || C >= Math.floor(h), S = r.getActiveLink();
          if (b)
            return c === S && r.setActiveLink(void 0), s.props.hashSpy && Jt.getHash() === c && Jt.changeHash(), s.props.spy && s.state.active && (s.setState({ active: !1 }), s.props.onSetInactive && s.props.onSetInactive()), hn.updateStates();
          if (w && S !== c)
            return r.setActiveLink(c), s.props.hashSpy && Jt.changeHash(c), s.props.spy && (s.setState({ active: !0 }), s.props.onSetActive && s.props.onSetActive(c)), hn.updateStates();
        }
      };
    };
    return i.propTypes = Zu, i.defaultProps = { offset: 0 }, i;
  },
  Element: function(e) {
    console.warn("Helpers.Element is deprecated since v1.7.0");
    var n = function(r) {
      qu(i, r);
      function i(a) {
        Hu(this, i);
        var o = Vu(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, a));
        return o.childBindings = {
          domNode: null
        }, o;
      }
      return Uu(i, [{
        key: "componentDidMount",
        value: function() {
          if (typeof window > "u")
            return !1;
          this.registerElems(this.props.name);
        }
      }, {
        key: "componentDidUpdate",
        value: function(o) {
          this.props.name !== o.name && this.registerElems(this.props.name);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          if (typeof window > "u")
            return !1;
          _i.unregister(this.props.name);
        }
      }, {
        key: "registerElems",
        value: function(o) {
          _i.register(o, this.childBindings.domNode);
        }
      }, {
        key: "render",
        value: function() {
          return Nr.createElement(e, zi({}, this.props, { parentBindings: this.childBindings }));
        }
      }]), i;
    }(Nr.Component);
    return n.propTypes = {
      name: rt.string,
      id: rt.string
    }, n;
  }
}, tD = eD;
Object.defineProperty(it, "__esModule", {
  value: !0
});
it.Helpers = it.ScrollElement = it.ScrollLink = Uc = it.animateScroll = it.scrollSpy = it.Events = it.scroller = it.Element = it.Button = it.Link = void 0;
var nD = za, kc = _t(nD), rD = qa, Tc = _t(rD), iD = Za, Rc = _t(iD), aD = $n, jc = _t(aD), oD = vr, Ic = _t(oD), sD = dr, Nc = _t(sD), uD = li, $c = _t(uD), lD = fr, zc = _t(lD), cD = hi, _c = _t(cD), fD = tD, Wc = _t(fD);
function _t(t) {
  return t && t.__esModule ? t : { default: t };
}
it.Link = kc.default;
it.Button = Tc.default;
it.Element = Rc.default;
it.scroller = jc.default;
it.Events = Ic.default;
it.scrollSpy = Nc.default;
var Uc = it.animateScroll = $c.default;
it.ScrollLink = zc.default;
it.ScrollElement = _c.default;
it.Helpers = Wc.default;
it.default = { Link: kc.default, Button: Tc.default, Element: Rc.default, scroller: jc.default, Events: Ic.default, scrollSpy: Nc.default, animateScroll: $c.default, ScrollLink: zc.default, ScrollElement: _c.default, Helpers: Wc.default };
const Ya = ht({}), Hc = ht({});
function dD() {
  const t = _e(Hc);
  if (Object.entries(t).length === 0)
    throw new Error("useToast must be used within a Provider");
  return t;
}
function Gu(t) {
  return t && typeof t.title == "string" && typeof t.message == "string" && (t.size === void 0 || t.size === "md" || t.size === "lg") && (t.type === "info" || t.type === "success" || t.type === "danger" || t.type === "warning");
}
function Sb() {
  const t = rl(), { closeModal: e } = _e(Ya), { showToast: n } = dD();
  B(() => {
    const r = t == null ? void 0 : t.closeModalKey;
    r && e(r);
  }, [t]), B(() => {
    const r = t == null ? void 0 : t.toast, i = t == null ? void 0 : t.message;
    Gu(r) && n(r), !Gu(r) && i && n({
      message: i,
      title: "Atenção!",
      type: "warning"
    });
  }, [t]), B(() => {
    var r, i;
    if (typeof ((r = t == null ? void 0 : t.data) == null ? void 0 : r.scrollTo) == "string") {
      const a = document.getElementById((i = t == null ? void 0 : t.data) == null ? void 0 : i.scrollTo);
      a && Uc.scrollTo(a.offsetTop - 200);
    }
  }, [t]);
}
const Vc = ht({});
function Fb(t) {
  const e = _e(Vc);
  if (Object.entries(e).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (t) {
    const {
      drawerData: n,
      drawerIsOpen: r,
      openDrawer: i,
      closeDrawer: a
    } = e, o = r(t), s = n(t);
    return { drawerIsOpen: o, drawerData: s, openDrawer: (c) => i(t, c), closeDrawer: () => a(t) };
  } else
    return e;
}
function Mb(t) {
  const e = _e(Ya);
  if (Object.entries(e).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (t) {
    const {
      modalData: n,
      modalIsOpen: r,
      openModal: i,
      closeModal: a
    } = e, o = r(t), s = n(t);
    return { modalIsOpen: o, modalData: s, openModal: (c) => i(t, c), closeModal: () => a(t) };
  } else
    return e;
}
function Pb(t) {
  const { children: e = !1 } = t, [n, r] = $([]);
  function i(u) {
    return !!n.some((l) => l.key === u);
  }
  function a(u) {
    var l;
    return (l = n.find((c) => c.key === u)) == null ? void 0 : l.data;
  }
  function o(u, l) {
    const c = i(u);
    r(c ? (p) => [...p.filter((h) => h.key !== u), { key: u, data: l }] : [...n, { key: u, data: l }]);
  }
  function s(u) {
    r(n.filter((l) => l.key !== u));
  }
  return /* @__PURE__ */ x.jsx(
    Vc.Provider,
    {
      value: { drawerIsOpen: i, drawerData: a, openDrawer: o, closeDrawer: s },
      children: e
    }
  );
}
function kb({
  googleMapsApiKey: t,
  children: e,
  ...n
}) {
  return /* @__PURE__ */ x.jsx(
    Nf,
    {
      libraries: ["places", "marker", "maps"],
      googleMapsApiKey: t,
      ...n,
      children: e
    }
  );
}
function Tb(t) {
  const { children: e = !1 } = t, [n, r] = $([]);
  function i(u) {
    return !!n.some((l) => l.key === u);
  }
  function a(u) {
    var l;
    return (l = n.find((c) => c.key === u)) == null ? void 0 : l.data;
  }
  function o(u, l) {
    const c = i(u);
    r(c ? (p) => [...p.filter((h) => h.key !== u), { key: u, data: l }] : [...n, { key: u, data: l }]);
  }
  function s(u) {
    r(n.filter((l) => l.key !== u));
  }
  return /* @__PURE__ */ x.jsx(
    Ya.Provider,
    {
      value: { modalIsOpen: i, modalData: a, openModal: o, closeModal: s },
      children: e
    }
  );
}
var pD = (t) => {
  switch (t) {
    case "success":
      return gD;
    case "info":
      return yD;
    case "warning":
      return mD;
    case "error":
      return CD;
    default:
      return null;
  }
}, hD = Array(12).fill(0), vD = ({ visible: t }) => Y.createElement("div", { className: "sonner-loading-wrapper", "data-visible": t }, Y.createElement("div", { className: "sonner-spinner" }, hD.map((e, n) => Y.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), gD = Y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, Y.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), mD = Y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, Y.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), yD = Y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, Y.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), CD = Y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, Y.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), DD = () => {
  let [t, e] = Y.useState(document.hidden);
  return Y.useEffect(() => {
    let n = () => {
      e(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), t;
}, ha = 1, bD = class {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      let e = this.subscribers.indexOf(t);
      this.subscribers.splice(e, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((e) => e(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [...this.toasts, t];
    }, this.create = (t) => {
      var e;
      let { message: n, ...r } = t, i = typeof (t == null ? void 0 : t.id) == "number" || ((e = t.id) == null ? void 0 : e.length) > 0 ? t.id : ha++, a = this.toasts.find((s) => s.id === i), o = t.dismissible === void 0 ? !0 : t.dismissible;
      return a ? this.toasts = this.toasts.map((s) => s.id === i ? (this.publish({ ...s, ...t, id: i, title: n }), { ...s, ...t, id: i, dismissible: o, title: n }) : s) : this.addToast({ title: n, ...r, dismissible: o, id: i }), i;
    }, this.dismiss = (t) => (t || this.toasts.forEach((e) => {
      this.subscribers.forEach((n) => n({ id: e.id, dismiss: !0 }));
    }), this.subscribers.forEach((e) => e({ id: t, dismiss: !0 })), t), this.message = (t, e) => this.create({ ...e, message: t }), this.error = (t, e) => this.create({ ...e, message: t, type: "error" }), this.success = (t, e) => this.create({ ...e, type: "success", message: t }), this.info = (t, e) => this.create({ ...e, type: "info", message: t }), this.warning = (t, e) => this.create({ ...e, type: "warning", message: t }), this.loading = (t, e) => this.create({ ...e, type: "loading", message: t }), this.promise = (t, e) => {
      if (!e) return;
      let n;
      e.loading !== void 0 && (n = this.create({ ...e, promise: t, type: "loading", message: e.loading, description: typeof e.description != "function" ? e.description : void 0 }));
      let r = t instanceof Promise ? t : t(), i = n !== void 0;
      return r.then(async (a) => {
        if (wD(a) && !a.ok) {
          i = !1;
          let o = typeof e.error == "function" ? await e.error(`HTTP error! status: ${a.status}`) : e.error, s = typeof e.description == "function" ? await e.description(`HTTP error! status: ${a.status}`) : e.description;
          this.create({ id: n, type: "error", message: o, description: s });
        } else if (e.success !== void 0) {
          i = !1;
          let o = typeof e.success == "function" ? await e.success(a) : e.success, s = typeof e.description == "function" ? await e.description(a) : e.description;
          this.create({ id: n, type: "success", message: o, description: s });
        }
      }).catch(async (a) => {
        if (e.error !== void 0) {
          i = !1;
          let o = typeof e.error == "function" ? await e.error(a) : e.error, s = typeof e.description == "function" ? await e.description(a) : e.description;
          this.create({ id: n, type: "error", message: o, description: s });
        }
      }).finally(() => {
        var a;
        i && (this.dismiss(n), n = void 0), (a = e.finally) == null || a.call(e);
      }), n;
    }, this.custom = (t, e) => {
      let n = (e == null ? void 0 : e.id) || ha++;
      return this.create({ jsx: t(n), id: n, ...e }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, xt = new bD(), ED = (t, e) => {
  let n = (e == null ? void 0 : e.id) || ha++;
  return xt.addToast({ title: t, ...e, id: n }), n;
}, wD = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", BD = ED, xD = () => xt.toasts, LD = Object.assign(BD, { success: xt.success, info: xt.info, warning: xt.warning, error: xt.error, custom: xt.custom, message: xt.message, promise: xt.promise, dismiss: xt.dismiss, loading: xt.loading }, { getHistory: xD });
function AD(t, { insertAt: e } = {}) {
  if (!t || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], r = document.createElement("style");
  r.type = "text/css", e === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r), r.styleSheet ? r.styleSheet.cssText = t : r.appendChild(document.createTextNode(t));
}
AD(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function $r(t) {
  return t.label !== void 0;
}
var OD = 3, SD = "32px", FD = 4e3, MD = 356, PD = 14, kD = 20, TD = 200;
function RD(...t) {
  return t.filter(Boolean).join(" ");
}
var jD = (t) => {
  var e, n, r, i, a, o, s, u, l, c;
  let { invert: p, toast: d, unstyled: h, interacting: y, setHeights: v, visibleToasts: f, heights: C, index: w, toasts: b, expanded: S, removeToast: D, defaultRichColors: E, closeButton: A, style: F, cancelButtonStyle: V, actionButtonStyle: M, className: z = "", descriptionClassName: j = "", duration: T, position: R, gap: N, loadingIcon: J, expandByDefault: _, classNames: te, icons: ae, closeButtonAriaLabel: k = "Close toast", pauseWhenPageIsHidden: I, cn: Z } = t, [H, ee] = Y.useState(!1), [X, m] = Y.useState(!1), [U, W] = Y.useState(!1), [P, Q] = Y.useState(!1), [ie, G] = Y.useState(0), [ce, se] = Y.useState(0), he = Y.useRef(null), ve = Y.useRef(null), De = w === 0, Ce = w + 1 <= f, me = d.type, ge = d.dismissible !== !1, Ie = d.className || "", le = d.descriptionClassName || "", Ne = Y.useMemo(() => C.findIndex((Ee) => Ee.toastId === d.id) || 0, [C, d.id]), pe = Y.useMemo(() => {
    var Ee;
    return (Ee = d.closeButton) != null ? Ee : A;
  }, [d.closeButton, A]), Be = Y.useMemo(() => d.duration || T || FD, [d.duration, T]), Me = Y.useRef(0), We = Y.useRef(0), Ye = Y.useRef(0), we = Y.useRef(null), [dt, ct] = R.split("-"), kt = Y.useMemo(() => C.reduce((Ee, Te, Re) => Re >= Ne ? Ee : Ee + Te.height, 0), [C, Ne]), mt = DD(), Bt = d.invert || p, jt = me === "loading";
  We.current = Y.useMemo(() => Ne * N + kt, [Ne, kt]), Y.useEffect(() => {
    ee(!0);
  }, []), Y.useLayoutEffect(() => {
    if (!H) return;
    let Ee = ve.current, Te = Ee.style.height;
    Ee.style.height = "auto";
    let Re = Ee.getBoundingClientRect().height;
    Ee.style.height = Te, se(Re), v((ot) => ot.find((ft) => ft.toastId === d.id) ? ot.map((ft) => ft.toastId === d.id ? { ...ft, height: Re } : ft) : [{ toastId: d.id, height: Re, position: d.position }, ...ot]);
  }, [H, d.title, d.description, v, d.id]);
  let yt = Y.useCallback(() => {
    m(!0), G(We.current), v((Ee) => Ee.filter((Te) => Te.toastId !== d.id)), setTimeout(() => {
      D(d);
    }, TD);
  }, [d, D, v, We]);
  Y.useEffect(() => {
    if (d.promise && me === "loading" || d.duration === 1 / 0 || d.type === "loading") return;
    let Ee, Te = Be;
    return S || y || I && mt ? (() => {
      if (Ye.current < Me.current) {
        let Re = (/* @__PURE__ */ new Date()).getTime() - Me.current;
        Te = Te - Re;
      }
      Ye.current = (/* @__PURE__ */ new Date()).getTime();
    })() : Te !== 1 / 0 && (Me.current = (/* @__PURE__ */ new Date()).getTime(), Ee = setTimeout(() => {
      var Re;
      (Re = d.onAutoClose) == null || Re.call(d, d), yt();
    }, Te)), () => clearTimeout(Ee);
  }, [S, y, _, d, Be, yt, d.promise, me, I, mt]), Y.useEffect(() => {
    let Ee = ve.current;
    if (Ee) {
      let Te = Ee.getBoundingClientRect().height;
      return se(Te), v((Re) => [{ toastId: d.id, height: Te, position: d.position }, ...Re]), () => v((Re) => Re.filter((ot) => ot.toastId !== d.id));
    }
  }, [v, d.id]), Y.useEffect(() => {
    d.delete && yt();
  }, [yt, d.delete]);
  function Yt() {
    return ae != null && ae.loading ? Y.createElement("div", { className: "sonner-loader", "data-visible": me === "loading" }, ae.loading) : J ? Y.createElement("div", { className: "sonner-loader", "data-visible": me === "loading" }, J) : Y.createElement(vD, { visible: me === "loading" });
  }
  return Y.createElement("li", { "aria-live": d.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: ve, className: Z(z, Ie, te == null ? void 0 : te.toast, (e = d == null ? void 0 : d.classNames) == null ? void 0 : e.toast, te == null ? void 0 : te.default, te == null ? void 0 : te[me], (n = d == null ? void 0 : d.classNames) == null ? void 0 : n[me]), "data-sonner-toast": "", "data-rich-colors": (r = d.richColors) != null ? r : E, "data-styled": !(d.jsx || d.unstyled || h), "data-mounted": H, "data-promise": !!d.promise, "data-removed": X, "data-visible": Ce, "data-y-position": dt, "data-x-position": ct, "data-index": w, "data-front": De, "data-swiping": U, "data-dismissible": ge, "data-type": me, "data-invert": Bt, "data-swipe-out": P, "data-expanded": !!(S || _ && H), style: { "--index": w, "--toasts-before": w, "--z-index": b.length - w, "--offset": `${X ? ie : We.current}px`, "--initial-height": _ ? "auto" : `${ce}px`, ...F, ...d.style }, onPointerDown: (Ee) => {
    jt || !ge || (he.current = /* @__PURE__ */ new Date(), G(We.current), Ee.target.setPointerCapture(Ee.pointerId), Ee.target.tagName !== "BUTTON" && (W(!0), we.current = { x: Ee.clientX, y: Ee.clientY }));
  }, onPointerUp: () => {
    var Ee, Te, Re, ot;
    if (P || !ge) return;
    we.current = null;
    let ft = Number(((Ee = ve.current) == null ? void 0 : Ee.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), Tt = (/* @__PURE__ */ new Date()).getTime() - ((Te = he.current) == null ? void 0 : Te.getTime()), cn = Math.abs(ft) / Tt;
    if (Math.abs(ft) >= kD || cn > 0.11) {
      G(We.current), (Re = d.onDismiss) == null || Re.call(d, d), yt(), Q(!0);
      return;
    }
    (ot = ve.current) == null || ot.style.setProperty("--swipe-amount", "0px"), W(!1);
  }, onPointerMove: (Ee) => {
    var Te;
    if (!we.current || !ge) return;
    let Re = Ee.clientY - we.current.y, ot = Ee.clientX - we.current.x, ft = (dt === "top" ? Math.min : Math.max)(0, Re), Tt = Ee.pointerType === "touch" ? 10 : 2;
    Math.abs(ft) > Tt ? (Te = ve.current) == null || Te.style.setProperty("--swipe-amount", `${Re}px`) : Math.abs(ot) > Tt && (we.current = null);
  } }, pe && !d.jsx ? Y.createElement("button", { "aria-label": k, "data-disabled": jt, "data-close-button": !0, onClick: jt || !ge ? () => {
  } : () => {
    var Ee;
    yt(), (Ee = d.onDismiss) == null || Ee.call(d, d);
  }, className: Z(te == null ? void 0 : te.closeButton, (i = d == null ? void 0 : d.classNames) == null ? void 0 : i.closeButton) }, Y.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, Y.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), Y.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, d.jsx || Y.isValidElement(d.title) ? d.jsx || d.title : Y.createElement(Y.Fragment, null, me || d.icon || d.promise ? Y.createElement("div", { "data-icon": "", className: Z(te == null ? void 0 : te.icon, (a = d == null ? void 0 : d.classNames) == null ? void 0 : a.icon) }, d.promise || d.type === "loading" && !d.icon ? d.icon || Yt() : null, d.type !== "loading" ? d.icon || (ae == null ? void 0 : ae[me]) || pD(me) : null) : null, Y.createElement("div", { "data-content": "", className: Z(te == null ? void 0 : te.content, (o = d == null ? void 0 : d.classNames) == null ? void 0 : o.content) }, Y.createElement("div", { "data-title": "", className: Z(te == null ? void 0 : te.title, (s = d == null ? void 0 : d.classNames) == null ? void 0 : s.title) }, d.title), d.description ? Y.createElement("div", { "data-description": "", className: Z(j, le, te == null ? void 0 : te.description, (u = d == null ? void 0 : d.classNames) == null ? void 0 : u.description) }, d.description) : null), Y.isValidElement(d.cancel) ? d.cancel : d.cancel && $r(d.cancel) ? Y.createElement("button", { "data-button": !0, "data-cancel": !0, style: d.cancelButtonStyle || V, onClick: (Ee) => {
    var Te, Re;
    $r(d.cancel) && ge && ((Re = (Te = d.cancel).onClick) == null || Re.call(Te, Ee), yt());
  }, className: Z(te == null ? void 0 : te.cancelButton, (l = d == null ? void 0 : d.classNames) == null ? void 0 : l.cancelButton) }, d.cancel.label) : null, Y.isValidElement(d.action) ? d.action : d.action && $r(d.action) ? Y.createElement("button", { "data-button": !0, "data-action": !0, style: d.actionButtonStyle || M, onClick: (Ee) => {
    var Te, Re;
    $r(d.action) && (Ee.defaultPrevented || ((Re = (Te = d.action).onClick) == null || Re.call(Te, Ee), yt()));
  }, className: Z(te == null ? void 0 : te.actionButton, (c = d == null ? void 0 : d.classNames) == null ? void 0 : c.actionButton) }, d.action.label) : null));
};
function Yu() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
var ID = (t) => {
  let { invert: e, position: n = "bottom-right", hotkey: r = ["altKey", "KeyT"], expand: i, closeButton: a, className: o, offset: s, theme: u = "light", richColors: l, duration: c, style: p, visibleToasts: d = OD, toastOptions: h, dir: y = Yu(), gap: v = PD, loadingIcon: f, icons: C, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: b, cn: S = RD } = t, [D, E] = Y.useState([]), A = Y.useMemo(() => Array.from(new Set([n].concat(D.filter((I) => I.position).map((I) => I.position)))), [D, n]), [F, V] = Y.useState([]), [M, z] = Y.useState(!1), [j, T] = Y.useState(!1), [R, N] = Y.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), J = Y.useRef(null), _ = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""), te = Y.useRef(null), ae = Y.useRef(!1), k = Y.useCallback((I) => {
    var Z;
    (Z = D.find((H) => H.id === I.id)) != null && Z.delete || xt.dismiss(I.id), E((H) => H.filter(({ id: ee }) => ee !== I.id));
  }, [D]);
  return Y.useEffect(() => xt.subscribe((I) => {
    if (I.dismiss) {
      E((Z) => Z.map((H) => H.id === I.id ? { ...H, delete: !0 } : H));
      return;
    }
    setTimeout(() => {
      ga.flushSync(() => {
        E((Z) => {
          let H = Z.findIndex((ee) => ee.id === I.id);
          return H !== -1 ? [...Z.slice(0, H), { ...Z[H], ...I }, ...Z.slice(H + 1)] : [I, ...Z];
        });
      });
    });
  }), []), Y.useEffect(() => {
    if (u !== "system") {
      N(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? N("dark") : N("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: I }) => {
      N(I ? "dark" : "light");
    });
  }, [u]), Y.useEffect(() => {
    D.length <= 1 && z(!1);
  }, [D]), Y.useEffect(() => {
    let I = (Z) => {
      var H, ee;
      r.every((X) => Z[X] || Z.code === X) && (z(!0), (H = J.current) == null || H.focus()), Z.code === "Escape" && (document.activeElement === J.current || (ee = J.current) != null && ee.contains(document.activeElement)) && z(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [r]), Y.useEffect(() => {
    if (J.current) return () => {
      te.current && (te.current.focus({ preventScroll: !0 }), te.current = null, ae.current = !1);
    };
  }, [J.current]), D.length ? Y.createElement("section", { "aria-label": `${w} ${_}`, tabIndex: -1 }, A.map((I, Z) => {
    var H;
    let [ee, X] = I.split("-");
    return Y.createElement("ol", { key: I, dir: y === "auto" ? Yu() : y, tabIndex: -1, ref: J, className: o, "data-sonner-toaster": !0, "data-theme": R, "data-y-position": ee, "data-x-position": X, style: { "--front-toast-height": `${((H = F[0]) == null ? void 0 : H.height) || 0}px`, "--offset": typeof s == "number" ? `${s}px` : s || SD, "--width": `${MD}px`, "--gap": `${v}px`, ...p }, onBlur: (m) => {
      ae.current && !m.currentTarget.contains(m.relatedTarget) && (ae.current = !1, te.current && (te.current.focus({ preventScroll: !0 }), te.current = null));
    }, onFocus: (m) => {
      m.target instanceof HTMLElement && m.target.dataset.dismissible === "false" || ae.current || (ae.current = !0, te.current = m.relatedTarget);
    }, onMouseEnter: () => z(!0), onMouseMove: () => z(!0), onMouseLeave: () => {
      j || z(!1);
    }, onPointerDown: (m) => {
      m.target instanceof HTMLElement && m.target.dataset.dismissible === "false" || T(!0);
    }, onPointerUp: () => T(!1) }, D.filter((m) => !m.position && Z === 0 || m.position === I).map((m, U) => {
      var W, P;
      return Y.createElement(jD, { key: m.id, icons: C, index: U, toast: m, defaultRichColors: l, duration: (W = h == null ? void 0 : h.duration) != null ? W : c, className: h == null ? void 0 : h.className, descriptionClassName: h == null ? void 0 : h.descriptionClassName, invert: e, visibleToasts: d, closeButton: (P = h == null ? void 0 : h.closeButton) != null ? P : a, interacting: j, position: I, style: h == null ? void 0 : h.style, unstyled: h == null ? void 0 : h.unstyled, classNames: h == null ? void 0 : h.classNames, cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle, actionButtonStyle: h == null ? void 0 : h.actionButtonStyle, removeToast: k, toasts: D.filter((Q) => Q.position == m.position), heights: F.filter((Q) => Q.position == m.position), setHeights: V, expandByDefault: i, gap: v, loadingIcon: f, expanded: M, pauseWhenPageIsHidden: b, cn: S });
    }));
  })) : null;
};
function Rb({ children: t }) {
  function e(n) {
    LD.custom((r) => /* @__PURE__ */ x.jsx(iy, { ...n }));
  }
  return /* @__PURE__ */ x.jsxs(Hc.Provider, { value: { showToast: e }, children: [
    /* @__PURE__ */ x.jsx(ID, {}),
    t
  ] });
}
export {
  HD as AlertContainer,
  VD as AlertContent,
  qD as AlertDescription,
  ZD as AlertIcon,
  Df as AlertTitle,
  GD as Badge,
  mb as BreadcrumbContainer,
  yb as BreadcrumbLink,
  ib as Button,
  YD as Card,
  ob as Checkbox,
  KD as Divider,
  Eb as DrawerContainer,
  wb as DrawerHeader,
  Pb as DrawerProvider,
  ab as FormController,
  sb as FormError,
  ub as FormLabel,
  XD as GoogleMap,
  kb as GoogleProvider,
  lb as GoogleSearchPlaces,
  cb as IconButton,
  tp as Input,
  Bb as ModalContainer,
  xb as ModalFooter,
  Lb as ModalHeader,
  Tb as ModalProvider,
  Cb as Pagination,
  Ab as Popover,
  db as RadioBox,
  fb as RadioGroup,
  pb as RichText,
  hb as Select,
  JD as Skeleton,
  vb as Switch,
  bb as TabButton,
  Db as TabContainer,
  QD as TableBody,
  eb as TableCaption,
  tb as TableContainer,
  nb as TableFooter,
  rb as TableHeader,
  gb as Textarea,
  iy as Toast,
  Rb as ToastProvider,
  Ob as Tooltip,
  Sb as useAutomation,
  Fb as useDrawer,
  Mb as useModal,
  ny as useScopedParams,
  dD as useToast
};
