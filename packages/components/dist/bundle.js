import m, { createContext as Pe, useRef as Te, useId as Yt, useContext as Ne, useState as ge, forwardRef as Ht, useEffect as pt } from "react";
import { Loader2 as _e, Check as wt, ChevronDown as Ut, ChevronRight as gt, X as Et } from "lucide-react";
import { useActionData as kt, useLocation as Ct, Link as Kt } from "@remix-run/react";
import { InputMask as Xt } from "@react-input/mask";
import { AnimatePresence as St, motion as qe } from "framer-motion";
import Jt from "react-dom";
var st = { exports: {} }, Me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vt;
function qt() {
  if (vt) return Me;
  vt = 1;
  var e = m, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(o, d, h) {
    var g, x = {}, a = null, v = null;
    h !== void 0 && (a = "" + h), d.key !== void 0 && (a = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (g in d) s.call(d, g) && !l.hasOwnProperty(g) && (x[g] = d[g]);
    if (o && o.defaultProps) for (g in d = o.defaultProps, d) x[g] === void 0 && (x[g] = d[g]);
    return { $$typeof: r, type: o, key: a, ref: v, props: x, _owner: i.current };
  }
  return Me.Fragment = n, Me.jsx = f, Me.jsxs = f, Me;
}
var Be = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var bt;
function Gt() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = m, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), o = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), P = Symbol.iterator, C = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = P && t[P] || t[C];
      return typeof u == "function" ? u : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(t) {
      {
        for (var u = arguments.length, p = new Array(u > 1 ? u - 1 : 0), w = 1; w < u; w++)
          p[w - 1] = arguments[w];
        U("error", t, p);
      }
    }
    function U(t, u, p) {
      {
        var w = b.ReactDebugCurrentFrame, D = w.getStackAddendum();
        D !== "" && (u += "%s", p = p.concat([D]));
        var V = p.map(function(I) {
          return String(I);
        });
        V.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var F = !1, j = !1, A = !1, H = !1, L = !1, q;
    q = Symbol.for("react.module.reference");
    function G(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === s || t === l || L || t === i || t === h || t === g || H || t === v || F || j || A || typeof t == "object" && t !== null && (t.$$typeof === a || t.$$typeof === x || t.$$typeof === f || t.$$typeof === o || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === q || t.getModuleId !== void 0));
    }
    function O(t, u, p) {
      var w = t.displayName;
      if (w)
        return w;
      var D = u.displayName || u.name || "";
      return D !== "" ? p + "(" + D + ")" : p;
    }
    function Q(t) {
      return t.displayName || "Context";
    }
    function k(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case s:
          return "Fragment";
        case n:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case o:
            var u = t;
            return Q(u) + ".Consumer";
          case f:
            var p = t;
            return Q(p._context) + ".Provider";
          case d:
            return O(t, t.render, "ForwardRef");
          case x:
            var w = t.displayName || null;
            return w !== null ? w : k(t.type) || "Memo";
          case a: {
            var D = t, V = D._payload, I = D._init;
            try {
              return k(I(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, z = 0, W, ee, _, te, fe, $, S;
    function N() {
    }
    N.__reactDisabledLog = !0;
    function K() {
      {
        if (z === 0) {
          W = console.log, ee = console.info, _ = console.warn, te = console.error, fe = console.group, $ = console.groupCollapsed, S = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: N,
            writable: !0
          };
          Object.defineProperties(console, {
            info: t,
            log: t,
            warn: t,
            error: t,
            group: t,
            groupCollapsed: t,
            groupEnd: t
          });
        }
        z++;
      }
    }
    function ne() {
      {
        if (z--, z === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, t, {
              value: W
            }),
            info: X({}, t, {
              value: ee
            }),
            warn: X({}, t, {
              value: _
            }),
            error: X({}, t, {
              value: te
            }),
            group: X({}, t, {
              value: fe
            }),
            groupCollapsed: X({}, t, {
              value: $
            }),
            groupEnd: X({}, t, {
              value: S
            })
          });
        }
        z < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = b.ReactCurrentDispatcher, ve;
    function J(t, u, p) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (D) {
            var w = D.stack.trim().match(/\n( *(at )?)/);
            ve = w && w[1] || "";
          }
        return `
` + ve + t;
      }
    }
    var oe = !1, le;
    {
      var Ze = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ze();
    }
    function je(t, u) {
      if (!t || oe)
        return "";
      {
        var p = le.get(t);
        if (p !== void 0)
          return p;
      }
      var w;
      oe = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = Y.current, Y.current = null, K();
      try {
        if (u) {
          var I = function() {
            throw Error();
          };
          if (Object.defineProperty(I.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(I, []);
            } catch (ue) {
              w = ue;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (ue) {
              w = ue;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            w = ue;
          }
          t();
        }
      } catch (ue) {
        if (ue && w && typeof ue.stack == "string") {
          for (var R = ue.stack.split(`
`), ie = w.stack.split(`
`), Z = R.length - 1, re = ie.length - 1; Z >= 1 && re >= 0 && R[Z] !== ie[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (R[Z] !== ie[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || R[Z] !== ie[re]) {
                    var pe = `
` + R[Z].replace(" at new ", " at ");
                    return t.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", t.displayName)), typeof t == "function" && le.set(t, pe), pe;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        oe = !1, Y.current = V, ne(), Error.prepareStackTrace = D;
      }
      var Ie = t ? t.displayName || t.name : "", Se = Ie ? J(Ie) : "";
      return typeof t == "function" && le.set(t, Se), Se;
    }
    function Qe(t, u, p) {
      return je(t, !1);
    }
    function Ae(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function Ce(t, u, p) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return je(t, Ae(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case h:
          return J("Suspense");
        case g:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return Qe(t.render);
          case x:
            return Ce(t.type, u, p);
          case a: {
            var w = t, D = w._payload, V = w._init;
            try {
              return Ce(V(D), u, p);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, We = {}, Ve = b.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var u = t._owner, p = Ce(t.type, t._source, u ? u.type : null);
        Ve.setExtraStackFrame(p);
      } else
        Ve.setExtraStackFrame(null);
    }
    function xe(t, u, p, w, D) {
      {
        var V = Function.call.bind(he);
        for (var I in t)
          if (V(t, I)) {
            var R = void 0;
            try {
              if (typeof t[I] != "function") {
                var ie = Error((w || "React class") + ": " + p + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              R = t[I](u, I, w, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              R = Z;
            }
            R && !(R instanceof Error) && (ae(D), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", p, I, typeof R), ae(null)), R instanceof Error && !(R.message in We) && (We[R.message] = !0, ae(D), y("Failed %s type: %s", p, R.message), ae(null));
          }
      }
    }
    var et = Array.isArray;
    function Oe(t) {
      return et(t);
    }
    function Re(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, p = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return p;
      }
    }
    function tt(t) {
      try {
        return ze(t), !1;
      } catch {
        return !0;
      }
    }
    function ze(t) {
      return "" + t;
    }
    function $e(t) {
      if (tt(t))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(t)), ze(t);
    }
    var me = b.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, De, Fe;
    Fe = {};
    function He(t) {
      if (he.call(t, "ref")) {
        var u = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ue(t) {
      if (he.call(t, "key")) {
        var u = Object.getOwnPropertyDescriptor(t, "key").get;
        if (u && u.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function rt(t, u) {
      if (typeof t.ref == "string" && me.current && u && me.current.stateNode !== u) {
        var p = k(me.current.type);
        Fe[p] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(me.current.type), t.ref), Fe[p] = !0);
      }
    }
    function Le(t, u) {
      {
        var p = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        p.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function be(t, u) {
      {
        var p = function() {
          De || (De = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        p.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var nt = function(t, u, p, w, D, V, I) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: p,
        props: I,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return R._store = {}, Object.defineProperty(R._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(R, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(R, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(R.props), Object.freeze(R)), R;
    };
    function E(t, u, p, w, D) {
      {
        var V, I = {}, R = null, ie = null;
        p !== void 0 && ($e(p), R = "" + p), Ue(u) && ($e(u.key), R = "" + u.key), He(u) && (ie = u.ref, rt(u, D));
        for (V in u)
          he.call(u, V) && !Ye.hasOwnProperty(V) && (I[V] = u[V]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (V in Z)
            I[V] === void 0 && (I[V] = Z[V]);
        }
        if (R || ie) {
          var re = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          R && Le(I, re), ie && be(I, re);
        }
        return nt(t, R, ie, D, w, me.current, I);
      }
    }
    var M = b.ReactCurrentOwner, B = b.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var u = t._owner, p = Ce(t.type, t._source, u ? u.type : null);
        B.setExtraStackFrame(p);
      } else
        B.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ke() {
      {
        if (M.current) {
          var t = k(M.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Ot(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), p = t.lineNumber;
          return `

Check your code at ` + u + ":" + p + ".";
        }
        return "";
      }
    }
    var ut = {};
    function zt(t) {
      {
        var u = Ke();
        if (!u) {
          var p = typeof t == "string" ? t : t.displayName || t.name;
          p && (u = `

Check the top-level render call using <` + p + ">.");
        }
        return u;
      }
    }
    function dt(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var p = zt(u);
        if (ut[p])
          return;
        ut[p] = !0;
        var w = "";
        t && t._owner && t._owner !== M.current && (w = " It was passed a child from " + k(t._owner.type) + "."), se(t), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, w), se(null);
      }
    }
    function ft(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Oe(t))
          for (var p = 0; p < t.length; p++) {
            var w = t[p];
            we(w) && dt(w, u);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = T(t);
          if (typeof D == "function" && D !== t.entries)
            for (var V = D.call(t), I; !(I = V.next()).done; )
              we(I.value) && dt(I.value, u);
        }
      }
    }
    function Dt(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var p;
        if (typeof u == "function")
          p = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === x))
          p = u.propTypes;
        else
          return;
        if (p) {
          var w = k(u);
          xe(p, t.props, "prop", w, t);
        } else if (u.PropTypes !== void 0 && !ce) {
          ce = !0;
          var D = k(u);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(t) {
      {
        for (var u = Object.keys(t.props), p = 0; p < u.length; p++) {
          var w = u[p];
          if (w !== "children" && w !== "key") {
            se(t), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), se(null);
            break;
          }
        }
        t.ref !== null && (se(t), y("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ht = {};
    function mt(t, u, p, w, D, V) {
      {
        var I = G(t);
        if (!I) {
          var R = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Ot(D);
          ie ? R += ie : R += Ke();
          var Z;
          t === null ? Z = "null" : Oe(t) ? Z = "array" : t !== void 0 && t.$$typeof === r ? (Z = "<" + (k(t.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, R);
        }
        var re = E(t, u, p, D, V);
        if (re == null)
          return re;
        if (I) {
          var pe = u.children;
          if (pe !== void 0)
            if (w)
              if (Oe(pe)) {
                for (var Ie = 0; Ie < pe.length; Ie++)
                  ft(pe[Ie], t);
                Object.freeze && Object.freeze(pe);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(pe, t);
        }
        if (he.call(u, "key")) {
          var Se = k(t), ue = Object.keys(u).filter(function(Vt) {
            return Vt !== "key";
          }), at = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ht[Se + at]) {
            var Wt = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, Se, Wt, Se), ht[Se + at] = !0;
          }
        }
        return t === s ? Ft(re) : Dt(re), re;
      }
    }
    function Lt(t, u, p) {
      return mt(t, u, p, !0);
    }
    function Mt(t, u, p) {
      return mt(t, u, p, !1);
    }
    var Bt = Mt, At = Lt;
    Be.Fragment = s, Be.jsx = Bt, Be.jsxs = At;
  }()), Be;
}
process.env.NODE_ENV === "production" ? st.exports = qt() : st.exports = Gt();
var c = st.exports;
function Xr({ className: e, ...r }) {
  const n = "arkyn_skeleton " + e;
  return /* @__PURE__ */ c.jsx("div", { className: n.trim(), ...r });
}
function Ge(e, r) {
  return r ? /* @__PURE__ */ c.jsx(r, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ c.jsx(c.Fragment, {});
}
function Zt(e) {
  const {
    variant: r = "ghost",
    scheme: n = "primary",
    size: s = "md",
    leftIcon: i,
    rightIcon: l,
    className: f = "",
    children: o,
    ...d
  } = e, g = { md: 12, lg: 14 }[s];
  return {
    className: `arkyn_badge ${r} ${n} ${s} ${f}`.trim(),
    children: o,
    leftIcon: Ge(g, i),
    rightIcon: Ge(g, l),
    ...d
  };
}
function Jr(e) {
  const { leftIcon: r, children: n, rightIcon: s, ...i } = Zt(e);
  return /* @__PURE__ */ c.jsxs("div", { ...i, children: [
    r,
    n,
    s
  ] });
}
function qr(e) {
  const {
    className: r,
    orientation: n = "horizontal",
    ...s
  } = e, i = `arkyn_divider ${n} ${r}`;
  return /* @__PURE__ */ c.jsx("div", { className: i, ...s });
}
function Qt(e, r, n) {
  if (!e) return /* @__PURE__ */ c.jsx(c.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ c.jsx("p", { className: n, children: e });
  const s = e;
  return /* @__PURE__ */ c.jsx("p", { className: n, children: /* @__PURE__ */ c.jsx(s, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function er(e, r) {
  const {
    isLoading: n,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: o,
    leftIcon: d,
    disabled: h,
    readOnly: g,
    onFocus: x,
    onBlur: a,
    title: v,
    style: P,
    isSearchable: C = !1,
    closeOnSelect: T = !0,
    ...b
  } = e, A = `arkyn_select ${o ? "hasPrefix" : ""} ${f} ${i} ${h || g || n ? "opacity" : ""} ${s ? "errored" : ""} ${r ? "focused" : ""} ${l}`, L = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: A,
    prefix: Qt(o, L, "prefix"),
    LeftIcon: d,
    disabled: h,
    readOnly: g,
    onFocus: x,
    onBlur: a,
    title: v,
    closeOnSelect: T,
    style: P,
    isSearchable: C,
    iconSize: L,
    Spinner: /* @__PURE__ */ c.jsx(_e, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...b
  };
}
const Nt = Pe({});
function Gr(e) {
  var g, x;
  const r = kt(), { children: n, className: s, ...i } = e, l = Te(null), f = ((g = l.current) == null ? void 0 : g.name) || "", o = ((x = r == null ? void 0 : r.fieldErrors) == null ? void 0 : x[f]) || null, d = Yt(), h = `arkyn_form_controller ${s}`;
  return /* @__PURE__ */ c.jsx(Nt.Provider, { value: { error: o, id: d, inputRef: l }, children: /* @__PURE__ */ c.jsx("section", { className: h.trim(), ...i, children: n }) });
}
function ke() {
  return Ne(Nt);
}
function Zr(e) {
  var ve;
  const [r, n] = ge(!1), { inputRef: s, id: i, error: l } = ke(), f = Te(null), o = s || f, d = e.isError || !!l, {
    disabled: h,
    title: g,
    style: x,
    className: a,
    prefix: v,
    iconSize: P,
    isLoading: C,
    LeftIcon: T,
    value: b = null,
    defaultValue: y = "",
    readOnly: U,
    onFocus: F,
    onBlur: j,
    Spinner: A,
    name: H,
    isSearchable: L,
    placeholder: q,
    onSelect: G,
    options: O,
    optionMaxHeight: Q,
    closeOnSelect: k,
    ...X
  } = er({ ...e, id: i, isError: d }, r), [z, W] = ge(y), [ee, _] = ge("");
  function te() {
    h || !(o != null && o.current) || (n(!0), o.current.focus());
  }
  function fe(J) {
    n(!0), F && F(J);
  }
  function $() {
    n(!1), j && o.current && o.current.blur();
  }
  function S(J) {
    const { label: oe, value: le } = J;
    W(z !== le ? le : ""), G && G({ label: oe, value: le }), k && (o.current.blur(), n(!1), console.log("fecha"));
  }
  const N = typeof b == "string" ? b : z, K = ((ve = O.find((J) => J.value === N)) == null ? void 0 : ve.label) || "", ne = () => {
    if (L) {
      if (!r && K) return !0;
      if (!r && !K || r) return !1;
    }
    if (!L) {
      if (!r && K) return !0;
      if (!r && !K) return !1;
      if (r && K) return !0;
      if (r && !K) return !1;
    }
  }, Y = O.filter((J) => L ? J.label.toLowerCase().includes(ee.toLowerCase()) : !0);
  return /* @__PURE__ */ c.jsxs(c.Fragment, { children: [
    /* @__PURE__ */ c.jsxs(
      "section",
      {
        title: g,
        style: x,
        onClick: te,
        className: `${a} placeholder_dark_${ne()}`,
        children: [
          v,
          T && /* @__PURE__ */ c.jsx(T, { size: P, strokeWidth: 2.5 }),
          /* @__PURE__ */ c.jsx(
            "input",
            {
              disabled: h || C,
              readOnly: !L,
              value: ee || "",
              placeholder: K || q,
              onFocus: fe,
              onBlur: () => _(""),
              ...X,
              onChange: (J) => _(J.target.value)
            }
          ),
          /* @__PURE__ */ c.jsx(
            "input",
            {
              type: "hidden",
              ref: o,
              name: H,
              value: N || "",
              readOnly: !0
            }
          ),
          r && /* @__PURE__ */ c.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: Q },
              children: [
                Y.map(({ label: J, value: oe }) => /* @__PURE__ */ c.jsxs(
                  "div",
                  {
                    onClick: () => S({ label: J, value: oe }),
                    className: N === oe ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      J,
                      " ",
                      /* @__PURE__ */ c.jsx(wt, {})
                    ]
                  },
                  oe
                )),
                Y.length <= 0 && /* @__PURE__ */ c.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !C && /* @__PURE__ */ c.jsx(
            Ut,
            {
              className: "arkyn_select_arrow",
              size: P,
              strokeWidth: 2.5
            }
          ),
          C && A
        ]
      }
    ),
    r && /* @__PURE__ */ c.jsx("aside", { className: "arkyn_select_overlay", onClick: $ })
  ] });
}
function tr(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: s = "solid",
    loadingText: i,
    size: l = "md",
    leftIcon: f,
    rightIcon: o,
    disabled: d,
    className: h = "",
    children: g,
    ...x
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[l];
  return {
    className: `arkyn_button loading_text_${!!i} ${s} ${n} ${l} loading_${r} ${h}`.trim(),
    loadingText: i,
    children: g,
    iconSize: v,
    disabled: d || r,
    leftIcon: Ge(v, f),
    rightIcon: Ge(v, o),
    ...x
  };
}
function Qr(e) {
  const { leftIcon: r, rightIcon: n, iconSize: s, children: i, loadingText: l, ...f } = tr(e);
  return /* @__PURE__ */ c.jsxs("button", { ...f, children: [
    /* @__PURE__ */ c.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ c.jsx(_e, { size: s, strokeWidth: 2.5 }),
      l && l
    ] }),
    /* @__PURE__ */ c.jsxs("div", { className: "content", children: [
      r,
      i,
      n
    ] })
  ] });
}
function en(e) {
  const {
    name: r,
    className: n = "",
    size: s = "md",
    isError: i,
    defaultChecked: l = !1,
    checked: f = null,
    onCheck: o,
    value: d,
    ...h
  } = e, { id: g, inputRef: x, error: a } = ke(), v = i || !!a, [P, C] = ge(l || !1), T = typeof f == "boolean" ? f : P, b = `arkyn_checkbox ${s} ${v ? "error" : ""} ${T ? "checked" : ""} ${n}`;
  function y() {
    const U = P;
    C(!U), o && o(U ? "" : d || "checked");
  }
  return /* @__PURE__ */ c.jsxs(
    "button",
    {
      type: "button",
      id: g,
      className: b,
      onClick: y,
      ...h,
      children: [
        /* @__PURE__ */ c.jsx(
          "input",
          {
            type: "hidden",
            name: r,
            ref: x,
            value: T ? d || "checked" : ""
          }
        ),
        /* @__PURE__ */ c.jsx(wt, {})
      ]
    }
  );
}
function tn(e) {
  const { children: r, className: n, ...s } = e, i = `arkyn_form_error ${n}`, { error: l } = ke();
  return r ? /* @__PURE__ */ c.jsx("strong", { className: i.trim(), ...s, children: r }) : l ? /* @__PURE__ */ c.jsx("strong", { className: i.trim(), ...s, children: l }) : /* @__PURE__ */ c.jsx(c.Fragment, {});
}
function rn(e) {
  const {
    showAsterisk: r = !1,
    className: n = "",
    ...s
  } = e, { id: i } = ke(), f = `arkyn_form_label ${r ? "show-asterisk" : ""} ${n}`;
  return /* @__PURE__ */ c.jsx("label", { ...s, className: f.trim(), htmlFor: i });
}
function nn(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: s = "solid",
    size: i = "md",
    icon: l,
    disabled: f,
    className: o = "",
    ...d
  } = e, h = { xs: 12, sm: 16, md: 20, lg: 24 }, g = `arkyn_icon_button ${s} ${n} ${i} loading_${r} ${o}`;
  return /* @__PURE__ */ c.jsxs(
    "button",
    {
      disabled: f || r,
      className: g.trim(),
      ...d,
      children: [
        /* @__PURE__ */ c.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ c.jsx(_e, { size: h[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ c.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ c.jsx(l, { size: h[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ee(e, r, n) {
  if (!e) return /* @__PURE__ */ c.jsx(c.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ c.jsx("p", { className: n, children: e });
  const s = e;
  return /* @__PURE__ */ c.jsx("p", { className: n, children: /* @__PURE__ */ c.jsx(s, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function it(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function _t(e, r) {
  let n = "", s = 0;
  return Array.from(e).forEach((i, l) => {
    r[l + s].match(/[0-9]/) || (n += r[l + s], s++), n += i;
  }), n;
}
function jt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const lt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Rt = it(lt.CNPJ).length;
function rr(e, r) {
  const {
    isLoading: n,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: o,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: x,
    defaultValue: a,
    readOnly: v,
    onFocus: P,
    onBlur: C,
    title: T,
    style: b,
    onChange: y,
    ...U
  } = e;
  function F(X) {
    let z = it(X);
    const W = jt(z);
    if (!(z.length > Rt))
      return z = _t(z, lt[W]), z;
  }
  const j = g ? "right" : "left", O = `arkyn_input ${o ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || v || n ? "opacity" : ""} ${s ? "errored" : ""} ${r ? "focused" : ""} ${l}`, k = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(o, k, "prefix"),
    sufix: Ee(d, k, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    defaultValue: F(a || ""),
    disabled: x,
    readOnly: v,
    onFocus: P,
    onBlur: C,
    title: T,
    style: b,
    onChange: y,
    loadingPosition: j,
    iconSize: k,
    Spinner: /* @__PURE__ */ c.jsx(_e, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...U
  };
}
function nr(e) {
  const [r, n] = ge(!1), s = Te(null), { inputRef: i, id: l, error: f } = ke(), o = i || s, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    Spinner: H,
    onChange: L,
    value: q,
    defaultValue: G,
    ...O
  } = rr({ ...e, id: l, isError: d }, r), [Q, k] = ge(G), X = y && !b, z = A && !b, W = T === "left" && b, ee = T === "right" && b;
  function _() {
    h || !(o != null && o.current) || (n(!0), o.current.focus());
  }
  function te(S) {
    let N = it(S.target.value);
    const K = jt(N);
    N.length > Rt || (N = _t(N, lt[K]), S.target.value = N, k(N), L && L(S));
  }
  function fe(S) {
    n(!0), F && F(S);
  }
  function $(S) {
    n(!1), j && j(S);
  }
  return /* @__PURE__ */ c.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: _,
      className: a,
      children: [
        v,
        W && H,
        X && /* @__PURE__ */ c.jsx(y, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            disabled: h || b,
            readOnly: U,
            ref: o,
            value: q || Q,
            onFocus: fe,
            onChange: te,
            onBlur: $,
            ...O
          }
        ),
        z && /* @__PURE__ */ c.jsx(A, { size: C, strokeWidth: 2.5 }),
        ee && H,
        P
      ]
    }
  );
}
function ar(e, r) {
  const {
    isLoading: n,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: o,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    showCents: b = !1,
    max: y = 1e9,
    onChange: U,
    ...F
  } = e, j = g ? "right" : "left", O = `arkyn_input ${o ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || a || n ? "opacity" : ""} ${s ? "errored" : ""} ${r ? "focused" : ""} ${l}`, k = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(o, k, "prefix"),
    sufix: Ee(d, k, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    max: y,
    onChange: U,
    showCents: b,
    loadingPosition: j,
    iconSize: k,
    Spinner: /* @__PURE__ */ c.jsx(_e, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...F
  };
}
const sr = /^[1-9]{1}$/, or = /^[0-9]{1}$/, yt = 8;
function ir(e, r) {
  if (e === 0) return "";
  const n = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return r ? n : n.replace("R$", "").trim();
}
function lr(e) {
  const { currencyValue: r, event: n, max: s, setCurrencyValue: i } = e, { key: l, keyCode: f } = n;
  if (r === 0 && !sr.test(l) || r !== 0 && !or.test(l) && f !== yt)
    return;
  const o = r.toString();
  let d;
  if (f !== yt) {
    const h = r === 0 ? l : `${o}${l}`;
    d = Number.parseInt(h, 10);
  } else {
    const h = o.slice(0, -1);
    d = h === "" ? 0 : Number.parseInt(h, 10);
  }
  d > Number(s) || i(d);
}
function cr(e) {
  const [r, n] = ge(!1), s = Te(null), { inputRef: i, id: l, error: f } = ke(), o = i || s, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    Spinner: H,
    value: L,
    max: q,
    onKeyDown: G,
    onChange: O,
    showCents: Q,
    defaultValue: k,
    ...X
  } = ar({ ...e, id: l, isError: d }, r), [z, W] = ge(k * 100 || 0), ee = y && !b, _ = A && !b, te = T === "left" && b, fe = T === "right" && b;
  function $() {
    h || !(o != null && o.current) || (n(!0), o.current.focus());
  }
  function S(ne) {
    lr({ currencyValue: z, event: ne, max: q, setCurrencyValue: W }), O && O(z / 100), G && G(ne);
  }
  function N(ne) {
    n(!0), F && F(ne);
  }
  function K(ne) {
    n(!1), j && j(ne);
  }
  return /* @__PURE__ */ c.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: $,
      className: a,
      children: [
        v,
        te && H,
        ee && /* @__PURE__ */ c.jsx(y, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            value: ir(L || z, Q),
            onKeyDown: S,
            disabled: h || b,
            readOnly: U,
            ref: o,
            onFocus: N,
            onBlur: K,
            onChange: () => {
            },
            ...X
          }
        ),
        fe && H,
        _ && /* @__PURE__ */ c.jsx(A, { size: C, strokeWidth: 2.5 }),
        P
      ]
    }
  );
}
function ur(e, r) {
  const {
    isLoading: n,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: o,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    showMask: y = !1,
    type: U,
    ...F
  } = e, j = g ? "right" : "left", O = `arkyn_input ${o ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || a || n ? "opacity" : ""} ${s ? "errored" : ""} ${r ? "focused" : ""} ${l}`, k = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(o, k, "prefix"),
    sufix: Ee(d, k, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    loadingPosition: j,
    iconSize: k,
    showMask: y,
    Spinner: /* @__PURE__ */ c.jsx(_e, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...F
  };
}
const dr = Ht((e, r) => /* @__PURE__ */ c.jsx("input", { ref: r, ...e }));
function fr(e) {
  const [r, n] = ge(!1), s = Te(null), { inputRef: i, id: l, error: f } = ke(), o = i || s, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    Spinner: H,
    ...L
  } = ur({ ...e, id: l, isError: d }, r), q = y && !b, G = A && !b, O = T === "left" && b, Q = T === "right" && b;
  function k() {
    h || !(o != null && o.current) || (n(!0), o.current.focus());
  }
  function X(W) {
    n(!0), F && F(W);
  }
  function z(W) {
    n(!1), j && j(W);
  }
  return /* @__PURE__ */ c.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: k,
      className: a,
      children: [
        v,
        O && H,
        q && /* @__PURE__ */ c.jsx(y, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ c.jsx(
          Xt,
          {
            component: dr,
            ref: o,
            onFocus: X,
            onBlur: z,
            ...L
          }
        ),
        G && /* @__PURE__ */ c.jsx(A, { size: C, strokeWidth: 2.5 }),
        Q && H,
        P
      ]
    }
  );
}
function hr(e, r) {
  const {
    isLoading: n,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: o,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    ...y
  } = e, U = g ? "right" : "left", q = `arkyn_input ${o ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || a || n ? "opacity" : ""} ${s ? "errored" : ""} ${r ? "focused" : ""} ${l}`, O = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: q,
    prefix: Ee(o, O, "prefix"),
    sufix: Ee(d, O, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    loadingPosition: U,
    iconSize: O,
    Spinner: /* @__PURE__ */ c.jsx(_e, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...y
  };
}
function mr(e) {
  const [r, n] = ge(!1), s = Te(null), { inputRef: i, id: l, error: f } = ke(), o = i || s, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    type: H,
    Spinner: L,
    ...q
  } = hr({ ...e, id: l, isError: d }, r), G = y && !b, O = A && !b, Q = T === "left" && b, k = T === "right" && b;
  function X() {
    h || !(o != null && o.current) || (n(!0), o.current.focus());
  }
  function z(ee) {
    n(!0), F && F(ee);
  }
  function W(ee) {
    n(!1), j && j(ee);
  }
  return H === "hidden" ? /* @__PURE__ */ c.jsx("input", { type: "hidden", ref: o, ...q }) : /* @__PURE__ */ c.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: X,
      className: a,
      children: [
        v,
        Q && L,
        G && /* @__PURE__ */ c.jsx(y, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ c.jsx(
          "input",
          {
            disabled: h || b,
            readOnly: U,
            ref: o,
            onFocus: z,
            onBlur: W,
            type: H,
            ...q
          }
        ),
        O && /* @__PURE__ */ c.jsx(A, { size: C, strokeWidth: 2.5 }),
        k && L,
        P
      ]
    }
  );
}
function an(e) {
  return e.type === "currency" ? /* @__PURE__ */ c.jsx(cr, { ...e }) : e.type === "masked" ? /* @__PURE__ */ c.jsx(fr, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ c.jsx(nr, { ...e }) : /* @__PURE__ */ c.jsx(mr, { ...e });
}
function pr(e) {
  const { className: r = "", ...n } = e;
  return { className: `arkyn_breadcrumb ${r}`.trim(), ...n };
}
function gr(e) {
  const { pathname: r } = Ct(), {
    className: n = "",
    disabled: s = !1,
    to: i,
    ...l
  } = e, f = r === i ? "active" : "inactive", o = `arkyn_breadcrumb_link ${f} ${n}`;
  return {
    to: i,
    className: o.trim(),
    disabled: s || f === "active",
    ...l
  };
}
function sn(e) {
  const { className: r, ...n } = pr(e);
  return /* @__PURE__ */ c.jsx("nav", { className: r, ...n });
}
function on(e) {
  const { children: r, className: n, disabled: s, ...i } = gr(e);
  return s ? /* @__PURE__ */ c.jsxs("p", { className: n, children: [
    /* @__PURE__ */ c.jsx(gt, { size: 14, strokeWidth: 2.5 }),
    r
  ] }) : /* @__PURE__ */ c.jsxs(Kt, { className: n, ...i, children: [
    /* @__PURE__ */ c.jsx(gt, { size: 14, strokeWidth: 2.5 }),
    r
  ] });
}
const $t = Pe({});
function ln(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    children: s,
    className: i = "",
    ...l
  } = e, o = `arkyn_modal_container ${r ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ c.jsx($t.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ c.jsx(St, { children: r && /* @__PURE__ */ c.jsxs("aside", { className: o.trim(), ...l, children: [
    /* @__PURE__ */ c.jsx(
      qe.div,
      {
        className: "arkyn_modal_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ c.jsx(
      qe.div,
      {
        className: "arkyn_modal_container-content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: s
      }
    )
  ] }) }) });
}
function cn(e) {
  const { alignment: r = "right", className: n, ...s } = e, i = `arkyn_modal_footer ${r} ${n}`;
  return /* @__PURE__ */ c.jsx("footer", { className: i.trim(), ...s });
}
function un(e) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: s,
    ...i
  } = e, { makeInvisible: l } = Ne($t), f = `arkyn_modal_header ${n}`;
  return /* @__PURE__ */ c.jsxs("header", { className: f.trim(), ...i, children: [
    s,
    r && /* @__PURE__ */ c.jsx(
      "button",
      {
        type: "button",
        onClick: l,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ c.jsx(Et, { size: 24 })
      }
    )
  ] });
}
const It = Pe({});
function dn(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    orientation: s = "left",
    children: i,
    className: l,
    ...f
  } = e, o = s === "left" ? "-100%" : "100%", h = `arkyn_drawer_container ${s} ${r ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ c.jsx(It.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ c.jsx(St, { children: r && /* @__PURE__ */ c.jsxs("aside", { className: h.trim(), ...f, children: [
    /* @__PURE__ */ c.jsx(
      qe.div,
      {
        className: "arkyn_drawer_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ c.jsx(
      qe.div,
      {
        className: "arkyn_drawer_container-content",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${o})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${o})` },
        children: i
      }
    )
  ] }) }) });
}
function fn(e) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: s,
    ...i
  } = e, { makeInvisible: l } = Ne(It), f = `arkyn_drawer_header ${n}`;
  return /* @__PURE__ */ c.jsxs("header", { className: f.trim(), ...i, children: [
    s,
    r && /* @__PURE__ */ c.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: l,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ c.jsx(Et, { size: 24 })
      }
    )
  ] });
}
function hn(e) {
  const {
    text: r,
    size: n = "lg",
    children: s,
    orientation: i = "top",
    className: l,
    ...f
  } = e, o = `arkyn_tooltip ${n} ${i} ${l}`;
  return /* @__PURE__ */ c.jsxs("div", { className: o.trim(), ...f, children: [
    s,
    /* @__PURE__ */ c.jsx("div", { className: "arkyn_tooltip-text", children: r })
  ] });
}
const ct = Pe({}), Pt = Pe({});
function vr() {
  const e = Ne(Pt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function mn() {
  const e = kt(), { closeModal: r } = Ne(ct), { successToast: n, errorToast: s } = vr();
  pt(() => {
    const i = e == null ? void 0 : e.closeModalKey;
    i && r(i);
  }, [e]), pt(() => {
    typeof (e == null ? void 0 : e.message) == "string" && typeof (e == null ? void 0 : e.success) == "boolean" && e.message !== "" && (e != null && e.success ? n(e == null ? void 0 : e.message) : s(e == null ? void 0 : e.message));
  }, [e]);
}
const Tt = Pe({});
function pn(e) {
  const r = Ne(Tt);
  if (Object.entries(r).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: n,
      drawerIsOpen: s,
      openDrawer: i,
      closeDrawer: l
    } = r, f = s(e), o = n(e);
    return { drawerIsOpen: f, drawerData: o, openDrawer: (g) => i(e, g == null ? void 0 : g.data), closeDrawer: () => l(e) };
  } else
    return r;
}
function gn(e) {
  const r = Ne(ct);
  if (Object.entries(r).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: n,
      modalIsOpen: s,
      openModal: i,
      closeModal: l
    } = r, f = s(e), o = n(e);
    return { modalIsOpen: f, modalData: o, openModal: (g) => i(e, g == null ? void 0 : g.data), closeModal: () => l(e) };
  } else
    return r;
}
function vn(e = "") {
  const r = Ct(), n = new URLSearchParams(r.search), s = e ? `${e}:` : "", i = (l) => {
    Object.entries(l).forEach(([f, o]) => {
      o === void 0 ? n.delete(`${s}${f}`) : n.set(`${s}${f}`, String(o));
    });
  };
  return {
    getParam: (l) => n.get(`${s}${l}`),
    getScopedSearch: (l) => {
      i(l);
      let f = n.toString();
      return f && (f = "?" + f), f;
    }
  };
}
function bn(e) {
  const { children: r = !1 } = e, [n, s] = ge([]);
  function i(d) {
    return !!n.some((h) => h.key === d);
  }
  function l(d) {
    var h;
    return (h = n.find((g) => g.key === d)) == null ? void 0 : h.data;
  }
  function f(d, h) {
    const g = i(d);
    s(g ? (x) => [...x.filter((v) => v.key !== d), { key: d, data: h }] : [...n, { key: d, data: h }]);
  }
  function o(d) {
    s(n.filter((h) => h.key !== d));
  }
  return /* @__PURE__ */ c.jsx(
    Tt.Provider,
    {
      value: { drawerIsOpen: i, drawerData: l, openDrawer: f, closeDrawer: o },
      children: r
    }
  );
}
function yn(e) {
  const { children: r = !1 } = e, [n, s] = ge([]);
  function i(d) {
    return !!n.some((h) => h.key === d);
  }
  function l(d) {
    var h;
    return (h = n.find((g) => g.key === d)) == null ? void 0 : h.data;
  }
  function f(d, h) {
    const g = i(d);
    s(g ? (x) => [...x.filter((v) => v.key !== d), { key: d, data: h }] : [...n, { key: d, data: h }]);
  }
  function o(d) {
    s(n.filter((h) => h.key !== d));
  }
  return /* @__PURE__ */ c.jsx(
    ct.Provider,
    {
      value: { modalIsOpen: i, modalData: l, openModal: f, closeModal: o },
      children: r
    }
  );
}
var br = (e) => {
  switch (e) {
    case "success":
      return wr;
    case "info":
      return kr;
    case "warning":
      return Er;
    case "error":
      return Cr;
    default:
      return null;
  }
}, yr = Array(12).fill(0), xr = ({ visible: e }) => m.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, m.createElement("div", { className: "sonner-spinner" }, yr.map((r, n) => m.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), wr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Er = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), kr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Cr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Sr = () => {
  let [e, r] = m.useState(document.hidden);
  return m.useEffect(() => {
    let n = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, ot = 1, Nr = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let r = this.subscribers.indexOf(e);
      this.subscribers.splice(r, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((r) => r(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var r;
      let { message: n, ...s } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : ot++, l = this.toasts.find((o) => o.id === i), f = e.dismissible === void 0 ? !0 : e.dismissible;
      return l ? this.toasts = this.toasts.map((o) => o.id === i ? (this.publish({ ...o, ...e, id: i, title: n }), { ...o, ...e, id: i, dismissible: f, title: n }) : o) : this.addToast({ title: n, ...s, dismissible: f, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }));
    }), this.subscribers.forEach((r) => r({ id: e, dismiss: !0 })), e), this.message = (e, r) => this.create({ ...r, message: e }), this.error = (e, r) => this.create({ ...r, message: e, type: "error" }), this.success = (e, r) => this.create({ ...r, type: "success", message: e }), this.info = (e, r) => this.create({ ...r, type: "info", message: e }), this.warning = (e, r) => this.create({ ...r, type: "warning", message: e }), this.loading = (e, r) => this.create({ ...r, type: "loading", message: e }), this.promise = (e, r) => {
      if (!r) return;
      let n;
      r.loading !== void 0 && (n = this.create({ ...r, promise: e, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      let s = e instanceof Promise ? e : e(), i = n !== void 0;
      return s.then(async (l) => {
        if (jr(l) && !l.ok) {
          i = !1;
          let f = typeof r.error == "function" ? await r.error(`HTTP error! status: ${l.status}`) : r.error, o = typeof r.description == "function" ? await r.description(`HTTP error! status: ${l.status}`) : r.description;
          this.create({ id: n, type: "error", message: f, description: o });
        } else if (r.success !== void 0) {
          i = !1;
          let f = typeof r.success == "function" ? await r.success(l) : r.success, o = typeof r.description == "function" ? await r.description(l) : r.description;
          this.create({ id: n, type: "success", message: f, description: o });
        }
      }).catch(async (l) => {
        if (r.error !== void 0) {
          i = !1;
          let f = typeof r.error == "function" ? await r.error(l) : r.error, o = typeof r.description == "function" ? await r.description(l) : r.description;
          this.create({ id: n, type: "error", message: f, description: o });
        }
      }).finally(() => {
        var l;
        i && (this.dismiss(n), n = void 0), (l = r.finally) == null || l.call(r);
      }), n;
    }, this.custom = (e, r) => {
      let n = (r == null ? void 0 : r.id) || ot++;
      return this.create({ jsx: e(n), id: n, ...r }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, de = new Nr(), _r = (e, r) => {
  let n = (r == null ? void 0 : r.id) || ot++;
  return de.addToast({ title: e, ...r, id: n }), n;
}, jr = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Rr = _r, $r = () => de.toasts, Xe = Object.assign(Rr, { success: de.success, info: de.info, warning: de.warning, error: de.error, custom: de.custom, message: de.message, promise: de.promise, dismiss: de.dismiss, loading: de.loading }, { getHistory: $r });
function Ir(e, { insertAt: r } = {}) {
  if (!e || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
  s.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(s, n.firstChild) : n.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
}
Ir(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Je(e) {
  return e.label !== void 0;
}
var Pr = 3, Tr = "32px", Or = 4e3, zr = 356, Dr = 14, Fr = 20, Lr = 200;
function Mr(...e) {
  return e.filter(Boolean).join(" ");
}
var Br = (e) => {
  var r, n, s, i, l, f, o, d, h, g;
  let { invert: x, toast: a, unstyled: v, interacting: P, setHeights: C, visibleToasts: T, heights: b, index: y, toasts: U, expanded: F, removeToast: j, defaultRichColors: A, closeButton: H, style: L, cancelButtonStyle: q, actionButtonStyle: G, className: O = "", descriptionClassName: Q = "", duration: k, position: X, gap: z, loadingIcon: W, expandByDefault: ee, classNames: _, icons: te, closeButtonAriaLabel: fe = "Close toast", pauseWhenPageIsHidden: $, cn: S } = e, [N, K] = m.useState(!1), [ne, Y] = m.useState(!1), [ve, J] = m.useState(!1), [oe, le] = m.useState(!1), [Ze, je] = m.useState(0), [Qe, Ae] = m.useState(0), Ce = m.useRef(null), he = m.useRef(null), We = y === 0, Ve = y + 1 <= T, ae = a.type, xe = a.dismissible !== !1, et = a.className || "", Oe = a.descriptionClassName || "", Re = m.useMemo(() => b.findIndex((E) => E.toastId === a.id) || 0, [b, a.id]), tt = m.useMemo(() => {
    var E;
    return (E = a.closeButton) != null ? E : H;
  }, [a.closeButton, H]), ze = m.useMemo(() => a.duration || k || Or, [a.duration, k]), $e = m.useRef(0), me = m.useRef(0), Ye = m.useRef(0), ye = m.useRef(null), [De, Fe] = X.split("-"), He = m.useMemo(() => b.reduce((E, M, B) => B >= Re ? E : E + M.height, 0), [b, Re]), Ue = Sr(), rt = a.invert || x, Le = ae === "loading";
  me.current = m.useMemo(() => Re * z + He, [Re, He]), m.useEffect(() => {
    K(!0);
  }, []), m.useLayoutEffect(() => {
    if (!N) return;
    let E = he.current, M = E.style.height;
    E.style.height = "auto";
    let B = E.getBoundingClientRect().height;
    E.style.height = M, Ae(B), C((se) => se.find((ce) => ce.toastId === a.id) ? se.map((ce) => ce.toastId === a.id ? { ...ce, height: B } : ce) : [{ toastId: a.id, height: B, position: a.position }, ...se]);
  }, [N, a.title, a.description, C, a.id]);
  let be = m.useCallback(() => {
    Y(!0), je(me.current), C((E) => E.filter((M) => M.toastId !== a.id)), setTimeout(() => {
      j(a);
    }, Lr);
  }, [a, j, C, me]);
  m.useEffect(() => {
    if (a.promise && ae === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
    let E, M = ze;
    return F || P || $ && Ue ? (() => {
      if (Ye.current < $e.current) {
        let B = (/* @__PURE__ */ new Date()).getTime() - $e.current;
        M = M - B;
      }
      Ye.current = (/* @__PURE__ */ new Date()).getTime();
    })() : M !== 1 / 0 && ($e.current = (/* @__PURE__ */ new Date()).getTime(), E = setTimeout(() => {
      var B;
      (B = a.onAutoClose) == null || B.call(a, a), be();
    }, M)), () => clearTimeout(E);
  }, [F, P, ee, a, ze, be, a.promise, ae, $, Ue]), m.useEffect(() => {
    let E = he.current;
    if (E) {
      let M = E.getBoundingClientRect().height;
      return Ae(M), C((B) => [{ toastId: a.id, height: M, position: a.position }, ...B]), () => C((B) => B.filter((se) => se.toastId !== a.id));
    }
  }, [C, a.id]), m.useEffect(() => {
    a.delete && be();
  }, [be, a.delete]);
  function nt() {
    return te != null && te.loading ? m.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, te.loading) : W ? m.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, W) : m.createElement(xr, { visible: ae === "loading" });
  }
  return m.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: he, className: S(O, et, _ == null ? void 0 : _.toast, (r = a == null ? void 0 : a.classNames) == null ? void 0 : r.toast, _ == null ? void 0 : _.default, _ == null ? void 0 : _[ae], (n = a == null ? void 0 : a.classNames) == null ? void 0 : n[ae]), "data-sonner-toast": "", "data-rich-colors": (s = a.richColors) != null ? s : A, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": N, "data-promise": !!a.promise, "data-removed": ne, "data-visible": Ve, "data-y-position": De, "data-x-position": Fe, "data-index": y, "data-front": We, "data-swiping": ve, "data-dismissible": xe, "data-type": ae, "data-invert": rt, "data-swipe-out": oe, "data-expanded": !!(F || ee && N), style: { "--index": y, "--toasts-before": y, "--z-index": U.length - y, "--offset": `${ne ? Ze : me.current}px`, "--initial-height": ee ? "auto" : `${Qe}px`, ...L, ...a.style }, onPointerDown: (E) => {
    Le || !xe || (Ce.current = /* @__PURE__ */ new Date(), je(me.current), E.target.setPointerCapture(E.pointerId), E.target.tagName !== "BUTTON" && (J(!0), ye.current = { x: E.clientX, y: E.clientY }));
  }, onPointerUp: () => {
    var E, M, B, se;
    if (oe || !xe) return;
    ye.current = null;
    let ce = Number(((E = he.current) == null ? void 0 : E.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), we = (/* @__PURE__ */ new Date()).getTime() - ((M = Ce.current) == null ? void 0 : M.getTime()), Ke = Math.abs(ce) / we;
    if (Math.abs(ce) >= Fr || Ke > 0.11) {
      je(me.current), (B = a.onDismiss) == null || B.call(a, a), be(), le(!0);
      return;
    }
    (se = he.current) == null || se.style.setProperty("--swipe-amount", "0px"), J(!1);
  }, onPointerMove: (E) => {
    var M;
    if (!ye.current || !xe) return;
    let B = E.clientY - ye.current.y, se = E.clientX - ye.current.x, ce = (De === "top" ? Math.min : Math.max)(0, B), we = E.pointerType === "touch" ? 10 : 2;
    Math.abs(ce) > we ? (M = he.current) == null || M.style.setProperty("--swipe-amount", `${B}px`) : Math.abs(se) > we && (ye.current = null);
  } }, tt && !a.jsx ? m.createElement("button", { "aria-label": fe, "data-disabled": Le, "data-close-button": !0, onClick: Le || !xe ? () => {
  } : () => {
    var E;
    be(), (E = a.onDismiss) == null || E.call(a, a);
  }, className: S(_ == null ? void 0 : _.closeButton, (i = a == null ? void 0 : a.classNames) == null ? void 0 : i.closeButton) }, m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), m.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || m.isValidElement(a.title) ? a.jsx || a.title : m.createElement(m.Fragment, null, ae || a.icon || a.promise ? m.createElement("div", { "data-icon": "", className: S(_ == null ? void 0 : _.icon, (l = a == null ? void 0 : a.classNames) == null ? void 0 : l.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || nt() : null, a.type !== "loading" ? a.icon || (te == null ? void 0 : te[ae]) || br(ae) : null) : null, m.createElement("div", { "data-content": "", className: S(_ == null ? void 0 : _.content, (f = a == null ? void 0 : a.classNames) == null ? void 0 : f.content) }, m.createElement("div", { "data-title": "", className: S(_ == null ? void 0 : _.title, (o = a == null ? void 0 : a.classNames) == null ? void 0 : o.title) }, a.title), a.description ? m.createElement("div", { "data-description": "", className: S(Q, Oe, _ == null ? void 0 : _.description, (d = a == null ? void 0 : a.classNames) == null ? void 0 : d.description) }, a.description) : null), m.isValidElement(a.cancel) ? a.cancel : a.cancel && Je(a.cancel) ? m.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || q, onClick: (E) => {
    var M, B;
    Je(a.cancel) && xe && ((B = (M = a.cancel).onClick) == null || B.call(M, E), be());
  }, className: S(_ == null ? void 0 : _.cancelButton, (h = a == null ? void 0 : a.classNames) == null ? void 0 : h.cancelButton) }, a.cancel.label) : null, m.isValidElement(a.action) ? a.action : a.action && Je(a.action) ? m.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || G, onClick: (E) => {
    var M, B;
    Je(a.action) && (E.defaultPrevented || ((B = (M = a.action).onClick) == null || B.call(M, E), be()));
  }, className: S(_ == null ? void 0 : _.actionButton, (g = a == null ? void 0 : a.classNames) == null ? void 0 : g.actionButton) }, a.action.label) : null));
};
function xt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Ar = (e) => {
  let { invert: r, position: n = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: i, closeButton: l, className: f, offset: o, theme: d = "light", richColors: h, duration: g, style: x, visibleToasts: a = Pr, toastOptions: v, dir: P = xt(), gap: C = Dr, loadingIcon: T, icons: b, containerAriaLabel: y = "Notifications", pauseWhenPageIsHidden: U, cn: F = Mr } = e, [j, A] = m.useState([]), H = m.useMemo(() => Array.from(new Set([n].concat(j.filter(($) => $.position).map(($) => $.position)))), [j, n]), [L, q] = m.useState([]), [G, O] = m.useState(!1), [Q, k] = m.useState(!1), [X, z] = m.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = m.useRef(null), ee = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), _ = m.useRef(null), te = m.useRef(!1), fe = m.useCallback(($) => {
    var S;
    (S = j.find((N) => N.id === $.id)) != null && S.delete || de.dismiss($.id), A((N) => N.filter(({ id: K }) => K !== $.id));
  }, [j]);
  return m.useEffect(() => de.subscribe(($) => {
    if ($.dismiss) {
      A((S) => S.map((N) => N.id === $.id ? { ...N, delete: !0 } : N));
      return;
    }
    setTimeout(() => {
      Jt.flushSync(() => {
        A((S) => {
          let N = S.findIndex((K) => K.id === $.id);
          return N !== -1 ? [...S.slice(0, N), { ...S[N], ...$ }, ...S.slice(N + 1)] : [$, ...S];
        });
      });
    });
  }), []), m.useEffect(() => {
    if (d !== "system") {
      z(d);
      return;
    }
    d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: $ }) => {
      z($ ? "dark" : "light");
    });
  }, [d]), m.useEffect(() => {
    j.length <= 1 && O(!1);
  }, [j]), m.useEffect(() => {
    let $ = (S) => {
      var N, K;
      s.every((ne) => S[ne] || S.code === ne) && (O(!0), (N = W.current) == null || N.focus()), S.code === "Escape" && (document.activeElement === W.current || (K = W.current) != null && K.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [s]), m.useEffect(() => {
    if (W.current) return () => {
      _.current && (_.current.focus({ preventScroll: !0 }), _.current = null, te.current = !1);
    };
  }, [W.current]), j.length ? m.createElement("section", { "aria-label": `${y} ${ee}`, tabIndex: -1 }, H.map(($, S) => {
    var N;
    let [K, ne] = $.split("-");
    return m.createElement("ol", { key: $, dir: P === "auto" ? xt() : P, tabIndex: -1, ref: W, className: f, "data-sonner-toaster": !0, "data-theme": X, "data-y-position": K, "data-x-position": ne, style: { "--front-toast-height": `${((N = L[0]) == null ? void 0 : N.height) || 0}px`, "--offset": typeof o == "number" ? `${o}px` : o || Tr, "--width": `${zr}px`, "--gap": `${C}px`, ...x }, onBlur: (Y) => {
      te.current && !Y.currentTarget.contains(Y.relatedTarget) && (te.current = !1, _.current && (_.current.focus({ preventScroll: !0 }), _.current = null));
    }, onFocus: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || te.current || (te.current = !0, _.current = Y.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      Q || O(!1);
    }, onPointerDown: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || k(!0);
    }, onPointerUp: () => k(!1) }, j.filter((Y) => !Y.position && S === 0 || Y.position === $).map((Y, ve) => {
      var J, oe;
      return m.createElement(Br, { key: Y.id, icons: b, index: ve, toast: Y, defaultRichColors: h, duration: (J = v == null ? void 0 : v.duration) != null ? J : g, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: r, visibleToasts: a, closeButton: (oe = v == null ? void 0 : v.closeButton) != null ? oe : l, interacting: Q, position: $, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: fe, toasts: j.filter((le) => le.position == Y.position), heights: L.filter((le) => le.position == Y.position), setHeights: q, expandByDefault: i, gap: C, loadingIcon: T, expanded: G, pauseWhenPageIsHidden: U, cn: F });
    }));
  })) : null;
};
function xn({ children: e }) {
  function r(l) {
    Xe.success(l);
  }
  function n(l) {
    Xe.info(l);
  }
  function s(l) {
    Xe.error(l);
  }
  function i(l) {
    Xe.warning(l);
  }
  return /* @__PURE__ */ c.jsxs(
    Pt.Provider,
    {
      value: { errorToast: s, warningToast: i, successToast: r, infoToast: n },
      children: [
        /* @__PURE__ */ c.jsx(Ar, { richColors: !0 }),
        e
      ]
    }
  );
}
export {
  Jr as Badge,
  sn as Breadcrumb,
  on as BreadcrumbLink,
  Qr as Button,
  en as Checkbox,
  qr as Divider,
  dn as DrawerContainer,
  fn as DrawerHeader,
  bn as DrawerProvider,
  Gr as FormController,
  tn as FormError,
  rn as FormLabel,
  nn as IconButton,
  an as Input,
  ln as ModalContainer,
  cn as ModalFooter,
  un as ModalHeader,
  yn as ModalProvider,
  Zr as Select,
  Xr as Skeleton,
  xn as ToastProvider,
  hn as Tooltip,
  mn as useAutomation,
  pn as useDrawer,
  gn as useModal,
  vn as useScopedParams,
  vr as useToast
};
