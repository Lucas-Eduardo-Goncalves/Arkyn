import Xe, { createContext as He, useRef as ue, useId as Nr, useContext as Ze, useState as ee, forwardRef as $r } from "react";
import { Loader2 as oe, Check as Pr, ChevronDown as wr, ChevronRight as Me, X as Ir } from "lucide-react";
import { useActionData as Or, useLocation as Qe, Link as Fr } from "@remix-run/react";
import { InputMask as Tr } from "@react-input/mask";
import { AnimatePresence as zr, motion as Ue } from "framer-motion";
var Ne = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Lr() {
  if (Ke)
    return he;
  Ke = 1;
  var r = Xe, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, d, h) {
    var p, g = {}, S = null, j = null;
    h !== void 0 && (S = "" + h), d.key !== void 0 && (S = "" + d.key), d.ref !== void 0 && (j = d.ref);
    for (p in d)
      o.call(d, p) && !u.hasOwnProperty(p) && (g[p] = d[p]);
    if (l && l.defaultProps)
      for (p in d = l.defaultProps, d)
        g[p] === void 0 && (g[p] = d[p]);
    return { $$typeof: n, type: l, key: S, ref: j, props: g, _owner: c.current };
  }
  return he.Fragment = s, he.jsx = f, he.jsxs = f, he;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Dr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Xe, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), j = Symbol.for("react.offscreen"), $ = Symbol.iterator, k = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = $ && e[$] || e[k];
      return typeof t == "function" ? t : null;
    }
    var y = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), m = 1; m < t; m++)
          a[m - 1] = arguments[m];
        N("error", e, a);
      }
    }
    function N(e, t, a) {
      {
        var m = y.ReactDebugCurrentFrame, R = m.getStackAddendum();
        R !== "" && (t += "%s", a = a.concat([R]));
        var C = a.map(function(b) {
          return String(b);
        });
        C.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, C);
      }
    }
    var w = !1, O = !1, T = !1, I = !1, z = !1, L;
    L = Symbol.for("react.module.reference");
    function A(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || z || e === c || e === h || e === p || I || e === j || w || O || T || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === g || e.$$typeof === f || e.$$typeof === l || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function E(e, t, a) {
      var m = e.displayName;
      if (m)
        return m;
      var R = t.displayName || t.name || "";
      return R !== "" ? a + "(" + R + ")" : a;
    }
    function M(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case s:
          return "Portal";
        case u:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var t = e;
            return M(t) + ".Consumer";
          case f:
            var a = e;
            return M(a._context) + ".Provider";
          case d:
            return E(e, e.render, "ForwardRef");
          case g:
            var m = e.displayName || null;
            return m !== null ? m : _(e.type) || "Memo";
          case S: {
            var R = e, C = R._payload, b = R._init;
            try {
              return _(b(C));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, V = 0, B, re, ne, te, Z, U, K;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function G() {
      {
        if (V === 0) {
          B = console.log, re = console.info, ne = console.warn, te = console.error, Z = console.group, U = console.groupCollapsed, K = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: J,
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
        V++;
      }
    }
    function X() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: B
            }),
            info: W({}, e, {
              value: re
            }),
            warn: W({}, e, {
              value: ne
            }),
            error: W({}, e, {
              value: te
            }),
            group: W({}, e, {
              value: Z
            }),
            groupCollapsed: W({}, e, {
              value: U
            }),
            groupEnd: W({}, e, {
              value: K
            })
          });
        }
        V < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = y.ReactCurrentDispatcher, be;
    function pe(e, t, a) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (R) {
            var m = R.stack.trim().match(/\n( *(at )?)/);
            be = m && m[1] || "";
          }
        return `
` + be + e;
      }
    }
    var Se = !1, ve;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new tr();
    }
    function Pe(e, t) {
      if (!e || Se)
        return "";
      {
        var a = ve.get(e);
        if (a !== void 0)
          return a;
      }
      var m;
      Se = !0;
      var R = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var C;
      C = Q.current, Q.current = null, G();
      try {
        if (t) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (q) {
              m = q;
            }
            Reflect.construct(e, [], b);
          } else {
            try {
              b.call();
            } catch (q) {
              m = q;
            }
            e.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            m = q;
          }
          e();
        }
      } catch (q) {
        if (q && m && typeof q.stack == "string") {
          for (var x = q.stack.split(`
`), Y = m.stack.split(`
`), F = x.length - 1, D = Y.length - 1; F >= 1 && D >= 0 && x[F] !== Y[D]; )
            D--;
          for (; F >= 1 && D >= 0; F--, D--)
            if (x[F] !== Y[D]) {
              if (F !== 1 || D !== 1)
                do
                  if (F--, D--, D < 0 || x[F] !== Y[D]) {
                    var H = `
` + x[F].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && ve.set(e, H), H;
                  }
                while (F >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Se = !1, Q.current = C, X(), Error.prepareStackTrace = R;
      }
      var le = e ? e.displayName || e.name : "", ie = le ? pe(le) : "";
      return typeof e == "function" && ve.set(e, ie), ie;
    }
    function sr(e, t, a) {
      return Pe(e, !1);
    }
    function ir(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function ge(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, ir(e));
      if (typeof e == "string")
        return pe(e);
      switch (e) {
        case h:
          return pe("Suspense");
        case p:
          return pe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return sr(e.render);
          case g:
            return ge(e.type, t, a);
          case S: {
            var m = e, R = m._payload, C = m._init;
            try {
              return ge(C(R), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, we = {}, Ie = y.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var t = e._owner, a = ge(e.type, e._source, t ? t.type : null);
        Ie.setExtraStackFrame(a);
      } else
        Ie.setExtraStackFrame(null);
    }
    function or(e, t, a, m, R) {
      {
        var C = Function.call.bind(fe);
        for (var b in e)
          if (C(e, b)) {
            var x = void 0;
            try {
              if (typeof e[b] != "function") {
                var Y = Error((m || "React class") + ": " + a + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              x = e[b](t, b, m, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (F) {
              x = F;
            }
            x && !(x instanceof Error) && (xe(R), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", a, b, typeof x), xe(null)), x instanceof Error && !(x.message in we) && (we[x.message] = !0, xe(R), v("Failed %s type: %s", a, x.message), xe(null));
          }
      }
    }
    var ar = Array.isArray;
    function _e(e) {
      return ar(e);
    }
    function cr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function lr(e) {
      try {
        return Oe(e), !1;
      } catch {
        return !0;
      }
    }
    function Oe(e) {
      return "" + e;
    }
    function Fe(e) {
      if (lr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Oe(e);
    }
    var de = y.ReactCurrentOwner, ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, ze, Re;
    Re = {};
    function fr(e) {
      if (fe.call(e, "ref")) {
        var t = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function dr(e) {
      if (fe.call(e, "key")) {
        var t = Object.getOwnPropertyDescriptor(e, "key").get;
        if (t && t.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, t) {
      if (typeof e.ref == "string" && de.current && t && de.current.stateNode !== t) {
        var a = _(de.current.type);
        Re[a] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(de.current.type), e.ref), Re[a] = !0);
      }
    }
    function mr(e, t) {
      {
        var a = function() {
          Te || (Te = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function pr(e, t) {
      {
        var a = function() {
          ze || (ze = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", t));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var vr = function(e, t, a, m, R, C, b) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: t,
        ref: a,
        props: b,
        // Record the component responsible for creating this element.
        _owner: C
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function gr(e, t, a, m, R) {
      {
        var C, b = {}, x = null, Y = null;
        a !== void 0 && (Fe(a), x = "" + a), dr(t) && (Fe(t.key), x = "" + t.key), fr(t) && (Y = t.ref, hr(t, R));
        for (C in t)
          fe.call(t, C) && !ur.hasOwnProperty(C) && (b[C] = t[C]);
        if (e && e.defaultProps) {
          var F = e.defaultProps;
          for (C in F)
            b[C] === void 0 && (b[C] = F[C]);
        }
        if (x || Y) {
          var D = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          x && mr(b, D), Y && pr(b, D);
        }
        return vr(e, x, Y, R, m, de.current, b);
      }
    }
    var je = y.ReactCurrentOwner, Le = y.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var t = e._owner, a = ge(e.type, e._source, t ? t.type : null);
        Le.setExtraStackFrame(a);
      } else
        Le.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Ee(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function De() {
      {
        if (je.current) {
          var e = _(je.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xr(e) {
      {
        if (e !== void 0) {
          var t = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + t + ":" + a + ".";
        }
        return "";
      }
    }
    var We = {};
    function yr(e) {
      {
        var t = De();
        if (!t) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (t = `

Check the top-level render call using <` + a + ">.");
        }
        return t;
      }
    }
    function Ae(e, t) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = yr(t);
        if (We[a])
          return;
        We[a] = !0;
        var m = "";
        e && e._owner && e._owner !== je.current && (m = " It was passed a child from " + _(e._owner.type) + "."), ce(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, m), ce(null);
      }
    }
    function Be(e, t) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var a = 0; a < e.length; a++) {
            var m = e[a];
            Ee(m) && Ae(m, t);
          }
        else if (Ee(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var R = P(e);
          if (typeof R == "function" && R !== e.entries)
            for (var C = R.call(e), b; !(b = C.next()).done; )
              Ee(b.value) && Ae(b.value, t);
        }
      }
    }
    function br(e) {
      {
        var t = e.type;
        if (t == null || typeof t == "string")
          return;
        var a;
        if (typeof t == "function")
          a = t.propTypes;
        else if (typeof t == "object" && (t.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        t.$$typeof === g))
          a = t.propTypes;
        else
          return;
        if (a) {
          var m = _(t);
          or(a, e.props, "prop", m, e);
        } else if (t.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var R = _(t);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", R || "Unknown");
        }
        typeof t.getDefaultProps == "function" && !t.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Sr(e) {
      {
        for (var t = Object.keys(e.props), a = 0; a < t.length; a++) {
          var m = t[a];
          if (m !== "children" && m !== "key") {
            ce(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var Ve = {};
    function Ye(e, t, a, m, R, C) {
      {
        var b = A(e);
        if (!b) {
          var x = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = xr(R);
          Y ? x += Y : x += De();
          var F;
          e === null ? F = "null" : _e(e) ? F = "array" : e !== void 0 && e.$$typeof === n ? (F = "<" + (_(e.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : F = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", F, x);
        }
        var D = gr(e, t, a, R, C);
        if (D == null)
          return D;
        if (b) {
          var H = t.children;
          if (H !== void 0)
            if (m)
              if (_e(H)) {
                for (var le = 0; le < H.length; le++)
                  Be(H[le], e);
                Object.freeze && Object.freeze(H);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(H, e);
        }
        if (fe.call(t, "key")) {
          var ie = _(e), q = Object.keys(t).filter(function(kr) {
            return kr !== "key";
          }), ke = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[ie + ke]) {
            var Er = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, ke, ie, Er, ie), Ve[ie + ke] = !0;
          }
        }
        return e === o ? Sr(D) : br(D), D;
      }
    }
    function _r(e, t, a) {
      return Ye(e, t, a, !0);
    }
    function Rr(e, t, a) {
      return Ye(e, t, a, !1);
    }
    var jr = Rr, Cr = _r;
    me.Fragment = o, me.jsx = jr, me.jsxs = Cr;
  }()), me;
}
process.env.NODE_ENV === "production" ? Ne.exports = Lr() : Ne.exports = Dr();
var i = Ne.exports;
function ye(r, n) {
  return n ? /* @__PURE__ */ i.jsx(n, { size: r, strokeWidth: 2.5 }) : /* @__PURE__ */ i.jsx(i.Fragment, {});
}
function Wr(r) {
  const {
    variant: n = "ghost",
    scheme: s = "primary",
    size: o = "md",
    leftIcon: c,
    rightIcon: u,
    className: f = "",
    children: l,
    ...d
  } = r, p = { md: 12, lg: 14 }[o];
  return {
    className: `arkyn_badge ${n} ${s} ${o} ${f}`.trim(),
    children: l,
    leftIcon: ye(p, c),
    rightIcon: ye(p, u),
    ...d
  };
}
function gn(r) {
  const { leftIcon: n, children: s, rightIcon: o, ...c } = Wr(r);
  return /* @__PURE__ */ i.jsxs("div", { ...c, children: [
    n,
    s,
    o
  ] });
}
function xn(r) {
  const {
    className: n,
    orientation: s = "horizontal",
    ...o
  } = r, c = `arkyn_divider ${s} ${n}`;
  return /* @__PURE__ */ i.jsx("div", { className: c, ...o });
}
function yn({ className: r, ...n }) {
  const s = "arkyn_skeleton " + r;
  return /* @__PURE__ */ i.jsx("div", { className: s.trim(), ...n });
}
function Ar(r) {
  const {
    isLoading: n = !1,
    scheme: s = "primary",
    variant: o = "solid",
    loadingText: c,
    size: u = "md",
    leftIcon: f,
    rightIcon: l,
    disabled: d,
    className: h = "",
    children: p,
    ...g
  } = r, j = { xs: 12, sm: 16, md: 20, lg: 24 }[u];
  return {
    className: `arkyn_button loading_text_${!!c} ${o} ${s} ${u} loading_${n} ${h}`.trim(),
    loadingText: c,
    children: p,
    iconSize: j,
    disabled: d || n,
    leftIcon: ye(j, f),
    rightIcon: ye(j, l),
    ...g
  };
}
function bn(r) {
  const { leftIcon: n, rightIcon: s, iconSize: o, children: c, loadingText: u, ...f } = Ar(r);
  return /* @__PURE__ */ i.jsxs("button", { ...f, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ i.jsx(oe, { size: o, strokeWidth: 2.5 }),
      u && u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "content", children: [
      n,
      c,
      s
    ] })
  ] });
}
const er = He({});
function Sn({ children: r, ...n }) {
  var l, d;
  const s = Or(), o = ue(null), c = ((l = o.current) == null ? void 0 : l.name) || "", u = ((d = s == null ? void 0 : s.fieldErrors) == null ? void 0 : d[c]) || null, f = Nr();
  return /* @__PURE__ */ i.jsx(er.Provider, { value: { error: u, id: f, inputRef: o }, children: /* @__PURE__ */ i.jsx("section", { className: "arkyn_form_controller", ...n, children: r }) });
}
function ae() {
  return Ze(er);
}
function _n({ children: r }) {
  const { error: n } = ae();
  return r ? /* @__PURE__ */ i.jsx("strong", { className: "arkyn_form_error", children: r }) : n ? /* @__PURE__ */ i.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ i.jsx(i.Fragment, {});
}
function Br(r) {
  const { showAsterisk: n = !1, className: s = "", ...o } = r;
  return {
    className: `arkyn_form_label ${n ? "show-asterisk" : ""} ${s}`.trim(),
    ...o
  };
}
function Rn(r) {
  const { id: n } = ae();
  return /* @__PURE__ */ i.jsx("label", { ...Br(r), htmlFor: n });
}
const qe = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function jn(r) {
  const {
    isLoading: n = !1,
    scheme: s = "primary",
    variant: o = "solid",
    size: c = "md",
    icon: u,
    disabled: f,
    className: l = "",
    ...d
  } = r, h = `arkyn_icon_button ${o} ${s} ${c} loading_${n} ${l}`;
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      disabled: f || n,
      className: h.trim(),
      ...d,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "spinner", children: /* @__PURE__ */ i.jsx(oe, { size: qe[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ i.jsx("div", { className: "content " + c, children: /* @__PURE__ */ i.jsx(u, { size: qe[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(r, n, s) {
  if (!r)
    return /* @__PURE__ */ i.jsx(i.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ i.jsx("p", { className: s, children: r });
  const o = r;
  return /* @__PURE__ */ i.jsx("p", { className: s, children: /* @__PURE__ */ i.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function Vr(r, n) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    onChange: y,
    ...v
  } = r, N = p ? "right" : "left", L = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${g || S || s ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, E = { md: 20, lg: 20 }[c];
  return {
    isLoading: s,
    className: L,
    prefix: se(l, E, "prefix"),
    sufix: se(d, E, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    onChange: y,
    loadingPosition: N,
    iconSize: E,
    Spinner: /* @__PURE__ */ i.jsx(oe, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...v
  };
}
function $e(r) {
  return r && r.replace(/[^0-9]/g, "");
}
function Yr(r, n) {
  let s = "", o = 0;
  return Array.from(r).forEach((c, u) => {
    n[u + o].match(/[0-9]/) || (s += n[u + o], o++), s += c;
  }), s;
}
function Mr(r) {
  return r.length > 11 ? "CNPJ" : "CPF";
}
const rr = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Ur = $e(rr.CNPJ).length;
function Kr(r) {
  const [n, s] = ee(!1), [o, c] = ee(
    $e((r == null ? void 0 : r.defaultValue) || "")
  ), u = ue(null), { inputRef: f, id: l, error: d } = ae(), h = f || u, p = r.isError || !!d, {
    disabled: g,
    title: S,
    style: j,
    className: $,
    prefix: k,
    sufix: P,
    iconSize: y,
    loadingPosition: v,
    isLoading: N,
    LeftIcon: w,
    readOnly: O,
    onFocus: T,
    onBlur: I,
    RightIcon: z,
    Spinner: L,
    onChange: A,
    value: E,
    defaultValue: M = "",
    ..._
  } = Vr({ ...r, id: l, isError: p }, n), W = w && !N, V = z && !N, B = v === "left" && N, re = v === "right" && N;
  function ne() {
    g || !(h != null && h.current) || (s(!0), h.current.focus());
  }
  function te(K) {
    let J = $e(K.target.value);
    const G = Mr(J);
    J.length > Ur || (J = Yr(J, rr[G]), K.target.value = J, c(J), A && A(K));
  }
  function Z(K) {
    s(!0), T && T(K);
  }
  function U(K) {
    s(!1), I && I(K);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: S,
      style: j,
      onClick: ne,
      className: $,
      children: [
        k,
        B && L,
        W && /* @__PURE__ */ i.jsx(w, { size: y, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            disabled: g || N,
            readOnly: O,
            ref: h,
            value: E || o,
            onFocus: Z,
            onChange: te,
            onBlur: U,
            ..._
          }
        ),
        V && /* @__PURE__ */ i.jsx(z, { size: y, strokeWidth: 2.5 }),
        re && L,
        P
      ]
    }
  );
}
function Jr(r, n) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    showCents: y = !1,
    max: v = 1e9,
    onChange: N,
    ...w
  } = r, O = p ? "right" : "left", E = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${g || S || s ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[c];
  return {
    isLoading: s,
    className: E,
    prefix: se(l, _, "prefix"),
    sufix: se(d, _, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    max: v,
    onChange: N,
    showCents: y,
    loadingPosition: O,
    iconSize: _,
    Spinner: /* @__PURE__ */ i.jsx(oe, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...w
  };
}
const qr = /^[1-9]{1}$/, Gr = /^[0-9]{1}$/, Ge = 8;
function Xr(r, n) {
  if (r === 0)
    return "";
  const s = (r / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return n ? s : s.replace("R$", "").trim();
}
function Hr(r) {
  const { currencyValue: n, event: s, max: o, setCurrencyValue: c } = r, { key: u, keyCode: f } = s;
  if (n === 0 && !qr.test(u) || n !== 0 && !Gr.test(u) && f !== Ge)
    return;
  const l = n.toString();
  let d;
  if (f !== Ge) {
    const h = n === 0 ? u : `${l}${u}`;
    d = Number.parseInt(h, 10);
  } else {
    const h = l.slice(0, -1);
    d = h === "" ? 0 : Number.parseInt(h, 10);
  }
  d > Number(o) || c(d);
}
function Zr(r) {
  const [n, s] = ee(!1), [o, c] = ee(r.defaultValue || 0), u = ue(null), { inputRef: f, id: l, error: d } = ae(), h = f || u, p = r.isError || !!d, {
    disabled: g,
    title: S,
    style: j,
    className: $,
    prefix: k,
    sufix: P,
    iconSize: y,
    loadingPosition: v,
    isLoading: N,
    LeftIcon: w,
    readOnly: O,
    onFocus: T,
    onBlur: I,
    RightIcon: z,
    Spinner: L,
    value: A,
    max: E,
    onKeyDown: M,
    onChange: _,
    showCents: W,
    ...V
  } = Jr({ ...r, id: l, isError: p }, n), B = w && !N, re = z && !N, ne = v === "left" && N, te = v === "right" && N;
  function Z() {
    g || !(h != null && h.current) || (s(!0), h.current.focus());
  }
  function U(G) {
    Hr({ currencyValue: o, event: G, max: E, setCurrencyValue: c }), _ && _(o), M && M(G);
  }
  function K(G) {
    s(!0), T && T(G);
  }
  function J(G) {
    s(!1), I && I(G);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: S,
      style: j,
      onClick: Z,
      className: $,
      children: [
        k,
        ne && L,
        B && /* @__PURE__ */ i.jsx(w, { size: y, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            value: Xr(A || o, W),
            onKeyDown: U,
            disabled: g || N,
            readOnly: O,
            ref: h,
            onFocus: K,
            onBlur: J,
            onChange: () => {
            },
            ...V
          }
        ),
        te && L,
        re && /* @__PURE__ */ i.jsx(z, { size: y, strokeWidth: 2.5 }),
        P
      ]
    }
  );
}
function Qr(r, n) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    onChange: y,
    showMask: v = !0,
    type: N,
    ...w
  } = r, O = p ? "right" : "left", E = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${g || S || s ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[c];
  return {
    isLoading: s,
    className: E,
    prefix: se(l, _, "prefix"),
    sufix: se(d, _, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    onChange: y,
    loadingPosition: O,
    iconSize: _,
    showMask: v,
    Spinner: /* @__PURE__ */ i.jsx(oe, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...w
  };
}
const en = $r((r, n) => /* @__PURE__ */ i.jsx("input", { ref: n, ...r }));
function rn(r) {
  const [n, s] = ee(!1), o = ue(null), { inputRef: c, id: u, error: f } = ae(), l = c || o, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: g,
    className: S,
    prefix: j,
    sufix: $,
    iconSize: k,
    loadingPosition: P,
    isLoading: y,
    LeftIcon: v,
    readOnly: N,
    onFocus: w,
    onBlur: O,
    RightIcon: T,
    Spinner: I,
    ...z
  } = Qr({ ...r, id: u, isError: d }, n), L = v && !y, A = T && !y, E = P === "left" && y, M = P === "right" && y;
  function _() {
    h || !(l != null && l.current) || (s(!0), l.current.focus());
  }
  function W(B) {
    s(!0), w && w(B);
  }
  function V(B) {
    s(!1), O && O(B);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: p,
      style: g,
      onClick: _,
      className: S,
      children: [
        j,
        E && I,
        L && /* @__PURE__ */ i.jsx(v, { size: k, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          Tr,
          {
            component: en,
            ref: l,
            onFocus: W,
            onBlur: V,
            ...z
          }
        ),
        A && /* @__PURE__ */ i.jsx(T, { size: k, strokeWidth: 2.5 }),
        M && I,
        $
      ]
    }
  );
}
function nn(r, n) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    onChange: y,
    ...v
  } = r, N = p ? "right" : "left", L = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${g || S || s ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, E = { md: 20, lg: 20 }[c];
  return {
    isLoading: s,
    className: L,
    prefix: se(l, E, "prefix"),
    sufix: se(d, E, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: S,
    onFocus: j,
    onBlur: $,
    title: k,
    style: P,
    onChange: y,
    loadingPosition: N,
    iconSize: E,
    Spinner: /* @__PURE__ */ i.jsx(oe, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...v
  };
}
function tn(r) {
  const [n, s] = ee(!1), o = ue(null), { inputRef: c, id: u, error: f } = ae(), l = c || o, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: g,
    className: S,
    prefix: j,
    sufix: $,
    iconSize: k,
    loadingPosition: P,
    isLoading: y,
    LeftIcon: v,
    readOnly: N,
    onFocus: w,
    onBlur: O,
    RightIcon: T,
    Spinner: I,
    ...z
  } = nn({ ...r, id: u, isError: d }, n), L = v && !y, A = T && !y, E = P === "left" && y, M = P === "right" && y;
  function _() {
    h || !(l != null && l.current) || (s(!0), l.current.focus());
  }
  function W(B) {
    s(!0), w && w(B);
  }
  function V(B) {
    s(!1), O && O(B);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: p,
      style: g,
      onClick: _,
      className: S,
      children: [
        j,
        E && I,
        L && /* @__PURE__ */ i.jsx(v, { size: k, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            disabled: h || y,
            readOnly: N,
            ref: l,
            onFocus: W,
            onBlur: V,
            ...z
          }
        ),
        A && /* @__PURE__ */ i.jsx(T, { size: k, strokeWidth: 2.5 }),
        M && I,
        $
      ]
    }
  );
}
function Cn(r) {
  return r.type === "currency" ? /* @__PURE__ */ i.jsx(Zr, { ...r }) : r.type === "masked" ? /* @__PURE__ */ i.jsx(rn, { ...r }) : r.type === "cpf-cpnj" ? /* @__PURE__ */ i.jsx(Kr, { ...r }) : /* @__PURE__ */ i.jsx(tn, { ...r });
}
function sn(r, n, s) {
  if (!r)
    return /* @__PURE__ */ i.jsx(i.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ i.jsx("p", { className: s, children: r });
  const o = r;
  return /* @__PURE__ */ i.jsx("p", { className: s, children: /* @__PURE__ */ i.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function on(r, n) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    leftIcon: d,
    disabled: h,
    readOnly: p,
    onFocus: g,
    onBlur: S,
    title: j,
    style: $,
    isSearchable: k = !1,
    ...P
  } = r, O = `arkyn_select ${l ? "hasPrefix" : ""} ${f} ${c} ${h || p || s ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, I = { md: 20, lg: 20 }[c];
  return {
    isLoading: s,
    className: O,
    prefix: sn(l, I, "prefix"),
    LeftIcon: d,
    disabled: h,
    readOnly: p,
    onFocus: g,
    onBlur: S,
    title: j,
    style: $,
    isSearchable: k,
    iconSize: I,
    Spinner: /* @__PURE__ */ i.jsx(oe, { className: "spinner", size: I, strokeWidth: 2.5 }),
    ...P
  };
}
function En(r) {
  var G;
  const [n, s] = ee(!1), { inputRef: o, id: c, error: u } = ae(), f = ue(null), l = o || f, d = r.isError || !!u, {
    disabled: h,
    title: p,
    style: g,
    className: S,
    prefix: j,
    iconSize: $,
    isLoading: k,
    LeftIcon: P,
    value: y = null,
    defaultValue: v = "",
    readOnly: N,
    onFocus: w,
    onBlur: O,
    Spinner: T,
    name: I,
    isSearchable: z,
    placeholder: L,
    onSelect: A,
    options: E,
    ...M
  } = on({ ...r, id: c, isError: d }, n), [_, W] = ee(v), [V, B] = ee("");
  function re() {
    h || !(l != null && l.current) || (s(!0), l.current.focus());
  }
  function ne(X) {
    s(!0), w && w(X);
  }
  function te() {
    s(!1), O && l.current && l.current.blur();
  }
  const Z = typeof y == "string" ? y : _, U = ((G = E.find((X) => X.value === Z)) == null ? void 0 : G.label) || "", K = () => {
    if (z) {
      if (!n && U)
        return !0;
      if (!n && !U || n)
        return !1;
    }
    if (!z) {
      if (!n && U)
        return !0;
      if (!n && !U)
        return !1;
      if (n && U)
        return !0;
      if (n && !U)
        return !1;
    }
  }, J = E.filter((X) => z ? X.label.toLowerCase().includes(V.toLowerCase()) : !0);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs(
      "section",
      {
        title: p,
        style: g,
        onClick: re,
        className: `${S} placeholder_dark_${K()}`,
        children: [
          j,
          P && /* @__PURE__ */ i.jsx(P, { size: $, strokeWidth: 2.5 }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              disabled: h || k,
              readOnly: !z,
              value: V || "",
              placeholder: U || L,
              ref: l,
              onFocus: ne,
              onBlur: () => B(""),
              ...M,
              onChange: (X) => B(X.target.value)
            }
          ),
          /* @__PURE__ */ i.jsx("input", { type: "hidden", name: I, value: Z || "", readOnly: !0 }),
          n && /* @__PURE__ */ i.jsxs("ul", { className: "arkyn_select_content", children: [
            J.map(({ label: X, value: Q }) => /* @__PURE__ */ i.jsxs(
              "li",
              {
                className: Z === Q ? "active" : "",
                onClick: () => {
                  W(_ !== Q ? Q : ""), A && A({ label: X, value: Q });
                },
                children: [
                  X,
                  " ",
                  /* @__PURE__ */ i.jsx(Pr, {})
                ]
              },
              Q
            )),
            J.length <= 0 && /* @__PURE__ */ i.jsx("p", { children: "Sem opções disponíveis" })
          ] }),
          !k && /* @__PURE__ */ i.jsx(
            wr,
            {
              className: "arkyn_select_arrow",
              size: $,
              strokeWidth: 2.5
            }
          ),
          k && T
        ]
      }
    ),
    n && /* @__PURE__ */ i.jsx("aside", { className: "arkyn_select_overlay", onClick: te })
  ] });
}
function an(r) {
  const { className: n = "", ...s } = r;
  return { className: `arkyn_breadcrumb ${n}`.trim(), ...s };
}
function cn(r) {
  const { pathname: n } = Qe(), {
    className: s = "",
    disabled: o = !1,
    to: c,
    ...u
  } = r, f = n === c ? "active" : "inactive", l = `arkyn_breadcrumb_link ${f} ${s}`;
  return {
    to: c,
    className: l.trim(),
    disabled: o || f === "active",
    ...u
  };
}
function kn(r) {
  const { className: n, ...s } = an(r);
  return /* @__PURE__ */ i.jsx("nav", { className: n, ...s });
}
function Nn(r) {
  const { children: n, className: s, disabled: o, ...c } = cn(r);
  return o ? /* @__PURE__ */ i.jsxs("p", { className: s, children: [
    /* @__PURE__ */ i.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    n
  ] }) : /* @__PURE__ */ i.jsxs(Fr, { className: s, ...c, children: [
    /* @__PURE__ */ i.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    n
  ] });
}
const nr = He({});
function ln(r) {
  const {
    isVisibled: n,
    makeInvisible: s,
    children: o,
    className: c = "",
    ...u
  } = r, l = `arkyn_modal_container ${n ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ i.jsx(nr.Provider, { value: { makeInvisible: s }, children: /* @__PURE__ */ i.jsx(zr, { children: n && /* @__PURE__ */ i.jsxs("aside", { className: l.trim(), ...u, children: [
    /* @__PURE__ */ i.jsx(
      Ue.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: s
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ue.div,
      {
        className: "content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: o
      }
    )
  ] }) }) });
}
function un(r) {
  const { alignment: n = "right", className: s, ...o } = r, c = `arkyn_modal_footer ${n} ${s}`;
  return /* @__PURE__ */ i.jsx("footer", { className: c.trim(), ...o });
}
function fn(r) {
  const { showCloseButton: n, className: s, children: o, ...c } = r, { makeInvisible: u } = Ze(nr), l = `arkyn_modal_header ${n ? "show-close" : ""} ${s}`;
  return /* @__PURE__ */ i.jsxs("header", { className: l.trim(), ...c, children: [
    o,
    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: u, children: /* @__PURE__ */ i.jsx(Ir, { size: 24 }) })
  ] });
}
const $n = { Container: ln, Header: fn, Footer: un };
function Pn(r) {
  const {
    text: n,
    size: s = "lg",
    children: o,
    orientation: c = "top",
    className: u,
    ...f
  } = r;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${s} ${c} ${u}`,
      ...f,
      children: [
        o,
        /* @__PURE__ */ i.jsx("div", { className: "arkyn_tooltip_text", children: n })
      ]
    }
  );
}
function wn(r = "") {
  const n = Qe(), s = new URLSearchParams(n.search), o = r ? `${r}:` : "", c = (u) => {
    Object.entries(u).forEach(([f, l]) => {
      l === void 0 ? s.delete(`${o}${f}`) : s.set(`${o}${f}`, String(l));
    });
  };
  return {
    getParam: (u) => s.get(`${o}${u}`),
    getScopedSearch: (u) => {
      c(u);
      let f = s.toString();
      return f && (f = "?" + f), f;
    }
  };
}
export {
  gn as Badge,
  kn as Breadcrumb,
  Nn as BreadcrumbLink,
  bn as Button,
  xn as Divider,
  Sn as FormController,
  _n as FormError,
  Rn as FormLabel,
  jn as IconButton,
  Cn as Input,
  $n as Modal,
  En as Select,
  yn as Skeleton,
  Pn as Tooltip,
  wn as useScopedParams
};
