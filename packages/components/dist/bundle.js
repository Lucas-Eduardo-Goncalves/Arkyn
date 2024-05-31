import er, { createContext as Pe, useRef as ue, useId as Fr, useContext as Se, useState as H, forwardRef as Tr, useEffect as Lr } from "react";
import { Loader2 as ae, Check as rr, ChevronDown as zr, ChevronRight as qe, X as Dr } from "lucide-react";
import { useActionData as nr, useLocation as tr, Link as Wr } from "@remix-run/react";
import { InputMask as Mr } from "@react-input/mask";
import { AnimatePresence as Ar, motion as Ge } from "framer-motion";
var $e = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xe;
function Br() {
  if (Xe)
    return me;
  Xe = 1;
  var r = er, t = Symbol.for("react.element"), n = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(a, f, h) {
    var m, x = {}, _ = null, C = null;
    h !== void 0 && (_ = "" + h), f.key !== void 0 && (_ = "" + f.key), f.ref !== void 0 && (C = f.ref);
    for (m in f)
      i.call(f, m) && !u.hasOwnProperty(m) && (x[m] = f[m]);
    if (a && a.defaultProps)
      for (m in f = a.defaultProps, f)
        x[m] === void 0 && (x[m] = f[m]);
    return { $$typeof: t, type: a, key: _, ref: C, props: x, _owner: c.current };
  }
  return me.Fragment = n, me.jsx = d, me.jsxs = d, me;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var He;
function Vr() {
  return He || (He = 1, process.env.NODE_ENV !== "production" && function() {
    var r = er, t = Symbol.for("react.element"), n = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), a = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), E = Symbol.iterator, j = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = E && e[E] || e[j];
      return typeof s == "function" ? s : null;
    }
    var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          l[p - 1] = arguments[p];
        $("error", e, l);
      }
    }
    function $(e, s, l) {
      {
        var p = g.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (s += "%s", l = l.concat([k]));
        var N = l.map(function(S) {
          return String(S);
        });
        N.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var P = !1, I = !1, L = !1, w = !1, z = !1, B;
    B = Symbol.for("react.module.reference");
    function V(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || z || e === c || e === h || e === m || w || e === C || P || I || L || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === x || e.$$typeof === d || e.$$typeof === a || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === B || e.getModuleId !== void 0));
    }
    function O(e, s, l) {
      var p = e.displayName;
      if (p)
        return p;
      var k = s.displayName || s.name || "";
      return k !== "" ? l + "(" + k + ")" : l;
    }
    function Y(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case a:
            var s = e;
            return Y(s) + ".Consumer";
          case d:
            var l = e;
            return Y(l._context) + ".Provider";
          case f:
            return O(e, e.render, "ForwardRef");
          case x:
            var p = e.displayName || null;
            return p !== null ? p : y(e.type) || "Memo";
          case _: {
            var k = e, N = k._payload, S = k._init;
            try {
              return y(S(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, F = 0, A, Z, re, ne, te, Q, W;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function G() {
      {
        if (F === 0) {
          A = console.log, Z = console.info, re = console.warn, ne = console.error, te = console.group, Q = console.groupCollapsed, W = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function fe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: A
            }),
            info: D({}, e, {
              value: Z
            }),
            warn: D({}, e, {
              value: re
            }),
            error: D({}, e, {
              value: ne
            }),
            group: D({}, e, {
              value: te
            }),
            groupCollapsed: D({}, e, {
              value: Q
            }),
            groupEnd: D({}, e, {
              value: W
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = g.ReactCurrentDispatcher, ee;
    function ve(e, s, l) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            ee = p && p[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var _e = !1, ge;
    {
      var lr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new lr();
    }
    function Fe(e, s) {
      if (!e || _e)
        return "";
      {
        var l = ge.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
      _e = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = K.current, K.current = null, G();
      try {
        if (s) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (J) {
              p = J;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (J) {
              p = J;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            p = J;
          }
          e();
        }
      } catch (J) {
        if (J && p && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), U = p.stack.split(`
`), T = b.length - 1, M = U.length - 1; T >= 1 && M >= 0 && b[T] !== U[M]; )
            M--;
          for (; T >= 1 && M >= 0; T--, M--)
            if (b[T] !== U[M]) {
              if (T !== 1 || M !== 1)
                do
                  if (T--, M--, M < 0 || b[T] !== U[M]) {
                    var X = `
` + b[T].replace(" at new ", " at ");
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, X), X;
                  }
                while (T >= 1 && M >= 0);
              break;
            }
        }
      } finally {
        _e = !1, K.current = N, fe(), Error.prepareStackTrace = k;
      }
      var le = e ? e.displayName || e.name : "", ie = le ? ve(le) : "";
      return typeof e == "function" && ge.set(e, ie), ie;
    }
    function ur(e, s, l) {
      return Fe(e, !1);
    }
    function fr(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function xe(e, s, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Fe(e, fr(e));
      if (typeof e == "string")
        return ve(e);
      switch (e) {
        case h:
          return ve("Suspense");
        case m:
          return ve("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return ur(e.render);
          case x:
            return xe(e.type, s, l);
          case _: {
            var p = e, k = p._payload, N = p._init;
            try {
              return xe(N(k), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Te = {}, Le = g.ReactDebugCurrentFrame;
    function ye(e) {
      if (e) {
        var s = e._owner, l = xe(e.type, e._source, s ? s.type : null);
        Le.setExtraStackFrame(l);
      } else
        Le.setExtraStackFrame(null);
    }
    function dr(e, s, l, p, k) {
      {
        var N = Function.call.bind(de);
        for (var S in e)
          if (N(e, S)) {
            var b = void 0;
            try {
              if (typeof e[S] != "function") {
                var U = Error((p || "React class") + ": " + l + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              b = e[S](s, S, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              b = T;
            }
            b && !(b instanceof Error) && (ye(k), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, S, typeof b), ye(null)), b instanceof Error && !(b.message in Te) && (Te[b.message] = !0, ye(k), v("Failed %s type: %s", l, b.message), ye(null));
          }
      }
    }
    var hr = Array.isArray;
    function Ce(e) {
      return hr(e);
    }
    function mr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function pr(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function De(e) {
      if (pr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", mr(e)), ze(e);
    }
    var he = g.ReactCurrentOwner, vr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, We, Me, ke;
    ke = {};
    function gr(e) {
      if (de.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function xr(e) {
      if (de.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function yr(e, s) {
      if (typeof e.ref == "string" && he.current && s && he.current.stateNode !== s) {
        var l = y(he.current.type);
        ke[l] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(he.current.type), e.ref), ke[l] = !0);
      }
    }
    function br(e, s) {
      {
        var l = function() {
          We || (We = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Sr(e, s) {
      {
        var l = function() {
          Me || (Me = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var _r = function(e, s, l, p, k, N, S) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: l,
        props: S,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Cr(e, s, l, p, k) {
      {
        var N, S = {}, b = null, U = null;
        l !== void 0 && (De(l), b = "" + l), xr(s) && (De(s.key), b = "" + s.key), gr(s) && (U = s.ref, yr(s, k));
        for (N in s)
          de.call(s, N) && !vr.hasOwnProperty(N) && (S[N] = s[N]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (N in T)
            S[N] === void 0 && (S[N] = T[N]);
        }
        if (b || U) {
          var M = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && br(S, M), U && Sr(S, M);
        }
        return _r(e, b, U, k, p, he.current, S);
      }
    }
    var je = g.ReactCurrentOwner, Ae = g.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var s = e._owner, l = xe(e.type, e._source, s ? s.type : null);
        Ae.setExtraStackFrame(l);
      } else
        Ae.setExtraStackFrame(null);
    }
    var Re;
    Re = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === t;
    }
    function Be() {
      {
        if (je.current) {
          var e = y(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function kr(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var Ve = {};
    function jr(e) {
      {
        var s = Be();
        if (!s) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Ye(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = jr(s);
        if (Ve[l])
          return;
        Ve[l] = !0;
        var p = "";
        e && e._owner && e._owner !== je.current && (p = " It was passed a child from " + y(e._owner.type) + "."), ce(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), ce(null);
      }
    }
    function Ue(e, s) {
      {
        if (typeof e != "object")
          return;
        if (Ce(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Ee(p) && Ye(p, s);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var k = R(e);
          if (typeof k == "function" && k !== e.entries)
            for (var N = k.call(e), S; !(S = N.next()).done; )
              Ee(S.value) && Ye(S.value, s);
        }
      }
    }
    function Rr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === x))
          l = s.propTypes;
        else
          return;
        if (l) {
          var p = y(s);
          dr(l, e.props, "prop", p, e);
        } else if (s.PropTypes !== void 0 && !Re) {
          Re = !0;
          var k = y(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Er(e) {
      {
        for (var s = Object.keys(e.props), l = 0; l < s.length; l++) {
          var p = s[l];
          if (p !== "children" && p !== "key") {
            ce(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var Ke = {};
    function Je(e, s, l, p, k, N) {
      {
        var S = V(e);
        if (!S) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = kr(k);
          U ? b += U : b += Be();
          var T;
          e === null ? T = "null" : Ce(e) ? T = "array" : e !== void 0 && e.$$typeof === t ? (T = "<" + (y(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, b);
        }
        var M = Cr(e, s, l, k, N);
        if (M == null)
          return M;
        if (S) {
          var X = s.children;
          if (X !== void 0)
            if (p)
              if (Ce(X)) {
                for (var le = 0; le < X.length; le++)
                  Ue(X[le], e);
                Object.freeze && Object.freeze(X);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ue(X, e);
        }
        if (de.call(s, "key")) {
          var ie = y(e), J = Object.keys(s).filter(function(Or) {
            return Or !== "key";
          }), Ne = J.length > 0 ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ke[ie + Ne]) {
            var wr = J.length > 0 ? "{" + J.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ne, ie, wr, ie), Ke[ie + Ne] = !0;
          }
        }
        return e === i ? Er(M) : Rr(M), M;
      }
    }
    function Nr(e, s, l) {
      return Je(e, s, l, !0);
    }
    function $r(e, s, l) {
      return Je(e, s, l, !1);
    }
    var Pr = $r, Ir = Nr;
    pe.Fragment = i, pe.jsx = Pr, pe.jsxs = Ir;
  }()), pe;
}
process.env.NODE_ENV === "production" ? $e.exports = Br() : $e.exports = Vr();
var o = $e.exports;
function be(r, t) {
  return t ? /* @__PURE__ */ o.jsx(t, { size: r, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Yr(r) {
  const {
    variant: t = "ghost",
    scheme: n = "primary",
    size: i = "md",
    leftIcon: c,
    rightIcon: u,
    className: d = "",
    children: a,
    ...f
  } = r, m = { md: 12, lg: 14 }[i];
  return {
    className: `arkyn_badge ${t} ${n} ${i} ${d}`.trim(),
    children: a,
    leftIcon: be(m, c),
    rightIcon: be(m, u),
    ...f
  };
}
function yn(r) {
  const { leftIcon: t, children: n, rightIcon: i, ...c } = Yr(r);
  return /* @__PURE__ */ o.jsxs("div", { ...c, children: [
    t,
    n,
    i
  ] });
}
function bn(r) {
  const {
    className: t,
    orientation: n = "horizontal",
    ...i
  } = r, c = `arkyn_divider ${n} ${t}`;
  return /* @__PURE__ */ o.jsx("div", { className: c, ...i });
}
function Sn({ className: r, ...t }) {
  const n = "arkyn_skeleton " + r;
  return /* @__PURE__ */ o.jsx("div", { className: n.trim(), ...t });
}
function Ur(r) {
  const {
    isLoading: t = !1,
    scheme: n = "primary",
    variant: i = "solid",
    loadingText: c,
    size: u = "md",
    leftIcon: d,
    rightIcon: a,
    disabled: f,
    className: h = "",
    children: m,
    ...x
  } = r, C = { xs: 12, sm: 16, md: 20, lg: 24 }[u];
  return {
    className: `arkyn_button loading_text_${!!c} ${i} ${n} ${u} loading_${t} ${h}`.trim(),
    loadingText: c,
    children: m,
    iconSize: C,
    disabled: f || t,
    leftIcon: be(C, d),
    rightIcon: be(C, a),
    ...x
  };
}
function _n(r) {
  const { leftIcon: t, rightIcon: n, iconSize: i, children: c, loadingText: u, ...d } = Ur(r);
  return /* @__PURE__ */ o.jsxs("button", { ...d, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ o.jsx(ae, { size: i, strokeWidth: 2.5 }),
      u && u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "content", children: [
      t,
      c,
      n
    ] })
  ] });
}
const sr = Pe({});
function Cn({ children: r, ...t }) {
  var a, f;
  const n = nr(), i = ue(null), c = ((a = i.current) == null ? void 0 : a.name) || "", u = ((f = n == null ? void 0 : n.fieldErrors) == null ? void 0 : f[c]) || null, d = Fr();
  return /* @__PURE__ */ o.jsx(sr.Provider, { value: { error: u, id: d, inputRef: i }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...t, children: r }) });
}
function oe() {
  return Se(sr);
}
function kn(r) {
  const {
    name: t,
    className: n = "",
    size: i = "md",
    isError: c,
    defaultChecked: u = !1,
    checked: d = null,
    onCheck: a,
    value: f,
    ...h
  } = r, { id: m, inputRef: x, error: _ } = oe(), C = c || !!_, [E, j] = H(u || !1), R = typeof d == "boolean" ? d : E, g = `arkyn_checkbox ${i} ${C ? "error" : ""} ${R ? "checked" : ""} ${n}`;
  function v() {
    const $ = E;
    j(!$), a && a($ ? "" : f || "checked");
  }
  return /* @__PURE__ */ o.jsxs("div", { id: m, className: g, onClick: v, ...h, children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "hidden",
        name: t,
        ref: x,
        value: R ? f || "checked" : ""
      }
    ),
    /* @__PURE__ */ o.jsx(rr, {})
  ] });
}
function jn({ children: r }) {
  const { error: t } = oe();
  return r ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: r }) : t ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: t }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Kr(r) {
  const { showAsterisk: t = !1, className: n = "", ...i } = r;
  return {
    className: `arkyn_form_label ${t ? "show-asterisk" : ""} ${n}`.trim(),
    ...i
  };
}
function Rn(r) {
  const { id: t } = oe();
  return /* @__PURE__ */ o.jsx("label", { ...Kr(r), htmlFor: t });
}
const Ze = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function En(r) {
  const {
    isLoading: t = !1,
    scheme: n = "primary",
    variant: i = "solid",
    size: c = "md",
    icon: u,
    disabled: d,
    className: a = "",
    ...f
  } = r, h = `arkyn_icon_button ${i} ${n} ${c} loading_${t} ${a}`;
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      disabled: d || t,
      className: h.trim(),
      ...f,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(ae, { size: Ze[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + c, children: /* @__PURE__ */ o.jsx(u, { size: Ze[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(r, t, n) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: n, children: r });
  const i = r;
  return /* @__PURE__ */ o.jsx("p", { className: n, children: /* @__PURE__ */ o.jsx(i, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function Ie(r) {
  return r && r.replace(/[^0-9]/g, "");
}
function or(r, t) {
  let n = "", i = 0;
  return Array.from(r).forEach((c, u) => {
    t[u + i].match(/[0-9]/) || (n += t[u + i], i++), n += c;
  }), n;
}
function ir(r) {
  return r.length > 11 ? "CNPJ" : "CPF";
}
const we = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, ar = Ie(we.CNPJ).length;
function Jr(r, t) {
  const {
    isLoading: n,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: a,
    sufix: f,
    leftIcon: h,
    rightIcon: m,
    disabled: x,
    defaultValue: _,
    readOnly: C,
    onFocus: E,
    onBlur: j,
    title: R,
    style: g,
    onChange: v,
    ...$
  } = r;
  function P(D) {
    let F = Ie(D);
    const A = ir(F);
    if (!(F.length > ar))
      return F = or(F, we[A]), F;
  }
  const I = m ? "right" : "left", O = `arkyn_input ${a ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${d} ${c} ${x || C || n ? "opacity" : ""} ${i ? "errored" : ""} ${t ? "focused" : ""} ${u}`, y = { md: 20, lg: 20 }[c];
  return {
    isLoading: n,
    className: O,
    prefix: se(a, y, "prefix"),
    sufix: se(f, y, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    defaultValue: P(_ || ""),
    disabled: x,
    readOnly: C,
    onFocus: E,
    onBlur: j,
    title: R,
    style: g,
    onChange: v,
    loadingPosition: I,
    iconSize: y,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: y, strokeWidth: 2.5 }),
    ...$
  };
}
function qr(r) {
  const [t, n] = H(!1), i = ue(null), { inputRef: c, id: u, error: d } = oe(), a = c || i, f = r.isError || !!d, {
    disabled: h,
    title: m,
    style: x,
    className: _,
    prefix: C,
    sufix: E,
    iconSize: j,
    loadingPosition: R,
    isLoading: g,
    LeftIcon: v,
    readOnly: $,
    onFocus: P,
    onBlur: I,
    RightIcon: L,
    Spinner: w,
    onChange: z,
    value: B,
    defaultValue: V,
    ...O
  } = Jr({ ...r, id: u, isError: f }, t), [Y, y] = H(V), D = v && !g, F = L && !g, A = R === "left" && g, Z = R === "right" && g;
  function re() {
    h || !(a != null && a.current) || (n(!0), a.current.focus());
  }
  function ne(W) {
    let q = Ie(W.target.value);
    const G = ir(q);
    q.length > ar || (q = or(q, we[G]), W.target.value = q, y(q), z && z(W));
  }
  function te(W) {
    n(!0), P && P(W);
  }
  function Q(W) {
    n(!1), I && I(W);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: m,
      style: x,
      onClick: re,
      className: _,
      children: [
        C,
        A && w,
        D && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: h || g,
            readOnly: $,
            ref: a,
            value: B || Y,
            onFocus: te,
            onChange: ne,
            onBlur: Q,
            ...O
          }
        ),
        F && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        Z && w,
        E
      ]
    }
  );
}
function Gr(r, t) {
  const {
    isLoading: n,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: a,
    sufix: f,
    leftIcon: h,
    rightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    showCents: g = !1,
    max: v = 1e9,
    onChange: $,
    ...P
  } = r, I = m ? "right" : "left", O = `arkyn_input ${a ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${d} ${c} ${x || _ || n ? "opacity" : ""} ${i ? "errored" : ""} ${t ? "focused" : ""} ${u}`, y = { md: 20, lg: 20 }[c];
  return {
    isLoading: n,
    className: O,
    prefix: se(a, y, "prefix"),
    sufix: se(f, y, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    max: v,
    onChange: $,
    showCents: g,
    loadingPosition: I,
    iconSize: y,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: y, strokeWidth: 2.5 }),
    ...P
  };
}
const Xr = /^[1-9]{1}$/, Hr = /^[0-9]{1}$/, Qe = 8;
function Zr(r, t) {
  if (r === 0)
    return "";
  const n = (r / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return t ? n : n.replace("R$", "").trim();
}
function Qr(r) {
  const { currencyValue: t, event: n, max: i, setCurrencyValue: c } = r, { key: u, keyCode: d } = n;
  if (t === 0 && !Xr.test(u) || t !== 0 && !Hr.test(u) && d !== Qe)
    return;
  const a = t.toString();
  let f;
  if (d !== Qe) {
    const h = t === 0 ? u : `${a}${u}`;
    f = Number.parseInt(h, 10);
  } else {
    const h = a.slice(0, -1);
    f = h === "" ? 0 : Number.parseInt(h, 10);
  }
  f > Number(i) || c(f);
}
function en(r) {
  const [t, n] = H(!1), [i, c] = H(r.defaultValue || 0), u = ue(null), { inputRef: d, id: a, error: f } = oe(), h = d || u, m = r.isError || !!f, {
    disabled: x,
    title: _,
    style: C,
    className: E,
    prefix: j,
    sufix: R,
    iconSize: g,
    loadingPosition: v,
    isLoading: $,
    LeftIcon: P,
    readOnly: I,
    onFocus: L,
    onBlur: w,
    RightIcon: z,
    Spinner: B,
    value: V,
    max: O,
    onKeyDown: Y,
    onChange: y,
    showCents: D,
    ...F
  } = Gr({ ...r, id: a, isError: m }, t), A = P && !$, Z = z && !$, re = v === "left" && $, ne = v === "right" && $;
  function te() {
    x || !(h != null && h.current) || (n(!0), h.current.focus());
  }
  function Q(G) {
    Qr({ currencyValue: i, event: G, max: O, setCurrencyValue: c }), y && y(i), Y && Y(G);
  }
  function W(G) {
    n(!0), L && L(G);
  }
  function q(G) {
    n(!1), w && w(G);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: _,
      style: C,
      onClick: te,
      className: E,
      children: [
        j,
        re && B,
        A && /* @__PURE__ */ o.jsx(P, { size: g, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: Zr(V || i, D),
            onKeyDown: Q,
            disabled: x || $,
            readOnly: I,
            ref: h,
            onFocus: W,
            onBlur: q,
            onChange: () => {
            },
            ...F
          }
        ),
        ne && B,
        Z && /* @__PURE__ */ o.jsx(z, { size: g, strokeWidth: 2.5 }),
        R
      ]
    }
  );
}
function rn(r, t) {
  const {
    isLoading: n,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: a,
    sufix: f,
    leftIcon: h,
    rightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    showMask: v = !1,
    type: $,
    ...P
  } = r, I = m ? "right" : "left", O = `arkyn_input ${a ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${d} ${c} ${x || _ || n ? "opacity" : ""} ${i ? "errored" : ""} ${t ? "focused" : ""} ${u}`, y = { md: 20, lg: 20 }[c];
  return {
    isLoading: n,
    className: O,
    prefix: se(a, y, "prefix"),
    sufix: se(f, y, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    loadingPosition: I,
    iconSize: y,
    showMask: v,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: y, strokeWidth: 2.5 }),
    ...P
  };
}
const nn = Tr((r, t) => /* @__PURE__ */ o.jsx("input", { ref: t, ...r }));
function tn(r) {
  const [t, n] = H(!1), i = ue(null), { inputRef: c, id: u, error: d } = oe(), a = c || i, f = r.isError || !!d, {
    disabled: h,
    title: m,
    style: x,
    className: _,
    prefix: C,
    sufix: E,
    iconSize: j,
    loadingPosition: R,
    isLoading: g,
    LeftIcon: v,
    readOnly: $,
    onFocus: P,
    onBlur: I,
    RightIcon: L,
    Spinner: w,
    ...z
  } = rn({ ...r, id: u, isError: f }, t), B = v && !g, V = L && !g, O = R === "left" && g, Y = R === "right" && g;
  function y() {
    h || !(a != null && a.current) || (n(!0), a.current.focus());
  }
  function D(A) {
    n(!0), P && P(A);
  }
  function F(A) {
    n(!1), I && I(A);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: m,
      style: x,
      onClick: y,
      className: _,
      children: [
        C,
        O && w,
        B && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          Mr,
          {
            component: nn,
            ref: a,
            onFocus: D,
            onBlur: F,
            ...z
          }
        ),
        V && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        Y && w,
        E
      ]
    }
  );
}
function sn(r, t) {
  const {
    isLoading: n,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: a,
    sufix: f,
    leftIcon: h,
    rightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    ...v
  } = r, $ = m ? "right" : "left", B = `arkyn_input ${a ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${d} ${c} ${x || _ || n ? "opacity" : ""} ${i ? "errored" : ""} ${t ? "focused" : ""} ${u}`, O = { md: 20, lg: 20 }[c];
  return {
    isLoading: n,
    className: B,
    prefix: se(a, O, "prefix"),
    sufix: se(f, O, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    loadingPosition: $,
    iconSize: O,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...v
  };
}
function on(r) {
  const [t, n] = H(!1), i = ue(null), { inputRef: c, id: u, error: d } = oe(), a = c || i, f = r.isError || !!d, {
    disabled: h,
    title: m,
    style: x,
    className: _,
    prefix: C,
    sufix: E,
    iconSize: j,
    loadingPosition: R,
    isLoading: g,
    LeftIcon: v,
    readOnly: $,
    onFocus: P,
    onBlur: I,
    RightIcon: L,
    Spinner: w,
    ...z
  } = sn({ ...r, id: u, isError: f }, t), B = v && !g, V = L && !g, O = R === "left" && g, Y = R === "right" && g;
  function y() {
    h || !(a != null && a.current) || (n(!0), a.current.focus());
  }
  function D(A) {
    n(!0), P && P(A);
  }
  function F(A) {
    n(!1), I && I(A);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: m,
      style: x,
      onClick: y,
      className: _,
      children: [
        C,
        O && w,
        B && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: h || g,
            readOnly: $,
            ref: a,
            onFocus: D,
            onBlur: F,
            ...z
          }
        ),
        V && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        Y && w,
        E
      ]
    }
  );
}
function Nn(r) {
  return r.type === "currency" ? /* @__PURE__ */ o.jsx(en, { ...r }) : r.type === "masked" ? /* @__PURE__ */ o.jsx(tn, { ...r }) : r.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(qr, { ...r }) : /* @__PURE__ */ o.jsx(on, { ...r });
}
function an(r, t, n) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: n, children: r });
  const i = r;
  return /* @__PURE__ */ o.jsx("p", { className: n, children: /* @__PURE__ */ o.jsx(i, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function cn(r, t) {
  const {
    isLoading: n,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: a,
    leftIcon: f,
    disabled: h,
    readOnly: m,
    onFocus: x,
    onBlur: _,
    title: C,
    style: E,
    isSearchable: j = !1,
    ...R
  } = r, I = `arkyn_select ${a ? "hasPrefix" : ""} ${d} ${c} ${h || m || n ? "opacity" : ""} ${i ? "errored" : ""} ${t ? "focused" : ""} ${u}`, w = { md: 20, lg: 20 }[c];
  return {
    isLoading: n,
    className: I,
    prefix: an(a, w, "prefix"),
    LeftIcon: f,
    disabled: h,
    readOnly: m,
    onFocus: x,
    onBlur: _,
    title: C,
    style: E,
    isSearchable: j,
    iconSize: w,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: w, strokeWidth: 2.5 }),
    ...R
  };
}
function $n(r) {
  var fe;
  const [t, n] = H(!1), { inputRef: i, id: c, error: u } = oe(), d = ue(null), a = i || d, f = r.isError || !!u, {
    disabled: h,
    title: m,
    style: x,
    className: _,
    prefix: C,
    iconSize: E,
    isLoading: j,
    LeftIcon: R,
    value: g = null,
    defaultValue: v = "",
    readOnly: $,
    onFocus: P,
    onBlur: I,
    Spinner: L,
    name: w,
    isSearchable: z,
    placeholder: B,
    onSelect: V,
    options: O,
    optionMaxHeight: Y,
    ...y
  } = cn({ ...r, id: c, isError: f }, t), [D, F] = H(v), [A, Z] = H("");
  function re() {
    h || !(a != null && a.current) || (n(!0), a.current.focus());
  }
  function ne(K) {
    n(!0), P && P(K);
  }
  function te() {
    n(!1), I && a.current && a.current.blur();
  }
  const Q = typeof g == "string" ? g : D, W = ((fe = O.find((K) => K.value === Q)) == null ? void 0 : fe.label) || "", q = () => {
    if (z) {
      if (!t && W)
        return !0;
      if (!t && !W || t)
        return !1;
    }
    if (!z) {
      if (!t && W)
        return !0;
      if (!t && !W)
        return !1;
      if (t && W)
        return !0;
      if (t && !W)
        return !1;
    }
  }, G = O.filter((K) => z ? K.label.toLowerCase().includes(A.toLowerCase()) : !0);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(
      "section",
      {
        title: m,
        style: x,
        onClick: re,
        className: `${_} placeholder_dark_${q()}`,
        children: [
          C,
          R && /* @__PURE__ */ o.jsx(R, { size: E, strokeWidth: 2.5 }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              disabled: h || j,
              readOnly: !z,
              value: A || "",
              placeholder: W || B,
              ref: a,
              onFocus: ne,
              onBlur: () => Z(""),
              ...y,
              onChange: (K) => Z(K.target.value)
            }
          ),
          /* @__PURE__ */ o.jsx("input", { type: "hidden", name: w, value: Q || "", readOnly: !0 }),
          t && /* @__PURE__ */ o.jsxs(
            "ul",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: Y },
              children: [
                G.map(({ label: K, value: ee }) => /* @__PURE__ */ o.jsxs(
                  "li",
                  {
                    className: Q === ee ? "active" : "",
                    onClick: () => {
                      F(D !== ee ? ee : ""), V && V({ label: K, value: ee });
                    },
                    children: [
                      K,
                      " ",
                      /* @__PURE__ */ o.jsx(rr, {})
                    ]
                  },
                  ee
                )),
                G.length <= 0 && /* @__PURE__ */ o.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !j && /* @__PURE__ */ o.jsx(
            zr,
            {
              className: "arkyn_select_arrow",
              size: E,
              strokeWidth: 2.5
            }
          ),
          j && L
        ]
      }
    ),
    t && /* @__PURE__ */ o.jsx("aside", { className: "arkyn_select_overlay", onClick: te })
  ] });
}
function ln(r) {
  const { className: t = "", ...n } = r;
  return { className: `arkyn_breadcrumb ${t}`.trim(), ...n };
}
function un(r) {
  const { pathname: t } = tr(), {
    className: n = "",
    disabled: i = !1,
    to: c,
    ...u
  } = r, d = t === c ? "active" : "inactive", a = `arkyn_breadcrumb_link ${d} ${n}`;
  return {
    to: c,
    className: a.trim(),
    disabled: i || d === "active",
    ...u
  };
}
function Pn(r) {
  const { className: t, ...n } = ln(r);
  return /* @__PURE__ */ o.jsx("nav", { className: t, ...n });
}
function In(r) {
  const { children: t, className: n, disabled: i, ...c } = un(r);
  return i ? /* @__PURE__ */ o.jsxs("p", { className: n, children: [
    /* @__PURE__ */ o.jsx(qe, { size: 14, strokeWidth: 2.5 }),
    t
  ] }) : /* @__PURE__ */ o.jsxs(Wr, { className: n, ...c, children: [
    /* @__PURE__ */ o.jsx(qe, { size: 14, strokeWidth: 2.5 }),
    t
  ] });
}
const cr = Pe({});
function fn(r) {
  const {
    isVisibled: t,
    makeInvisible: n,
    children: i,
    className: c = "",
    ...u
  } = r, a = `arkyn_modal_container ${t ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ o.jsx(cr.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ o.jsx(Ar, { children: t && /* @__PURE__ */ o.jsxs("aside", { className: a.trim(), ...u, children: [
    /* @__PURE__ */ o.jsx(
      Ge.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ge.div,
      {
        className: "content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: i
      }
    )
  ] }) }) });
}
function dn(r) {
  const { alignment: t = "right", className: n, ...i } = r, c = `arkyn_modal_footer ${t} ${n}`;
  return /* @__PURE__ */ o.jsx("footer", { className: c.trim(), ...i });
}
function hn(r) {
  const { showCloseButton: t, className: n, children: i, ...c } = r, { makeInvisible: u } = Se(cr), a = `arkyn_modal_header ${t ? "show-close" : ""} ${n}`;
  return /* @__PURE__ */ o.jsxs("header", { className: a.trim(), ...c, children: [
    i,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: u, children: /* @__PURE__ */ o.jsx(Dr, { size: 24 }) })
  ] });
}
const wn = { Container: fn, Header: hn, Footer: dn };
function On(r) {
  const {
    text: t,
    size: n = "lg",
    children: i,
    orientation: c = "top",
    className: u,
    ...d
  } = r;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${n} ${c} ${u}`,
      ...d,
      children: [
        i,
        /* @__PURE__ */ o.jsx("div", { className: "arkyn_tooltip_text", children: t })
      ]
    }
  );
}
const Oe = Pe({});
function Fn() {
  const r = nr(), { closeModal: t } = Se(Oe);
  Lr(() => {
    const n = r == null ? void 0 : r.closeModalKey;
    n && t(n);
  }, [r]);
}
function Tn(r) {
  const t = Se(Oe);
  if (Object.entries(t).length === 0)
    throw new Error("useModal must be used within a Provider");
  const {
    modalData: n,
    modalIsOpen: i,
    openModal: c,
    closeModal: u
  } = t, d = i(r), a = n(r);
  return { modalIsOpen: d, modalData: a, openModal: (m) => c(r, m == null ? void 0 : m.data), closeModal: () => u(r) };
}
function Ln(r = "") {
  const t = tr(), n = new URLSearchParams(t.search), i = r ? `${r}:` : "", c = (u) => {
    Object.entries(u).forEach(([d, a]) => {
      a === void 0 ? n.delete(`${i}${d}`) : n.set(`${i}${d}`, String(a));
    });
  };
  return {
    getParam: (u) => n.get(`${i}${u}`),
    getScopedSearch: (u) => {
      c(u);
      let d = n.toString();
      return d && (d = "?" + d), d;
    }
  };
}
function zn(r) {
  const { children: t = !1 } = r, [n, i] = H([]);
  function c(f) {
    return !!n.some((h) => h.key === f);
  }
  function u(f) {
    var h;
    return (h = n.find((m) => m.key === f)) == null ? void 0 : h.data;
  }
  function d(f, h) {
    i([...n, { key: f, data: h }]);
  }
  function a(f) {
    i(n.filter((h) => h.key !== f));
  }
  return /* @__PURE__ */ o.jsx(
    Oe.Provider,
    {
      value: { modalIsOpen: c, modalData: u, openModal: d, closeModal: a },
      children: t
    }
  );
}
export {
  yn as Badge,
  Pn as Breadcrumb,
  In as BreadcrumbLink,
  _n as Button,
  kn as Checkbox,
  bn as Divider,
  Cn as FormController,
  jn as FormError,
  Rn as FormLabel,
  En as IconButton,
  Nn as Input,
  wn as Modal,
  zn as ModalProvider,
  $n as Select,
  Sn as Skeleton,
  On as Tooltip,
  Fn as useAutomation,
  Tn as useModal,
  Ln as useScopedParams
};
