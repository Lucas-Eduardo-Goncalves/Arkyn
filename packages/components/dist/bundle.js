import m, { createContext as Te, useRef as Ie, useId as Yt, useContext as _e, useState as ge, forwardRef as Ht, useEffect as mt } from "react";
import { Loader2 as Se, Check as wt, ChevronDown as Ut, ChevronRight as pt, X as kt, Info as gt, AlertCircle as Kt, XCircle as Xt, CheckCircle2 as Jt } from "lucide-react";
import { useActionData as Ct, useLocation as Et, Link as qt } from "@remix-run/react";
import { InputMask as Gt } from "@react-input/mask";
import { AnimatePresence as Nt, motion as Je } from "framer-motion";
import Zt from "react-dom";
var at = { exports: {} }, Me = {};
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
function Qt() {
  if (vt) return Me;
  vt = 1;
  var e = m, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, d, h) {
    var g, y = {}, a = null, v = null;
    h !== void 0 && (a = "" + h), d.key !== void 0 && (a = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (g in d) o.call(d, g) && !u.hasOwnProperty(g) && (y[g] = d[g]);
    if (l && l.defaultProps) for (g in d = l.defaultProps, d) y[g] === void 0 && (y[g] = d[g]);
    return { $$typeof: r, type: l, key: a, ref: v, props: y, _owner: i.current };
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
function er() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = m, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), P = Symbol.iterator, E = "@@iterator";
    function I(t) {
      if (t === null || typeof t != "object")
        return null;
      var c = P && t[P] || t[E];
      return typeof c == "function" ? c : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          p[w - 1] = arguments[w];
        U("error", t, p);
      }
    }
    function U(t, c, p) {
      {
        var w = b.ReactDebugCurrentFrame, D = w.getStackAddendum();
        D !== "" && (c += "%s", p = p.concat([D]));
        var V = p.map(function(T) {
          return String(T);
        });
        V.unshift("Warning: " + c), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var F = !1, j = !1, A = !1, H = !1, L = !1, q;
    q = Symbol.for("react.module.reference");
    function G(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === u || L || t === i || t === h || t === g || H || t === v || F || j || A || typeof t == "object" && t !== null && (t.$$typeof === a || t.$$typeof === y || t.$$typeof === f || t.$$typeof === l || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === q || t.getModuleId !== void 0));
    }
    function O(t, c, p) {
      var w = t.displayName;
      if (w)
        return w;
      var D = c.displayName || c.name || "";
      return D !== "" ? p + "(" + D + ")" : p;
    }
    function Q(t) {
      return t.displayName || "Context";
    }
    function C(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
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
          case l:
            var c = t;
            return Q(c) + ".Consumer";
          case f:
            var p = t;
            return Q(p._context) + ".Provider";
          case d:
            return O(t, t.render, "ForwardRef");
          case y:
            var w = t.displayName || null;
            return w !== null ? w : C(t.type) || "Memo";
          case a: {
            var D = t, V = D._payload, T = D._init;
            try {
              return C(T(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, z = 0, W, ee, S, te, fe, $, N;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function K() {
      {
        if (z === 0) {
          W = console.log, ee = console.info, S = console.warn, te = console.error, fe = console.group, $ = console.groupCollapsed, N = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: _,
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
              value: S
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
              value: N
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = b.ReactCurrentDispatcher, ve;
    function J(t, c, p) {
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
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ge();
    }
    function je(t, c) {
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
        if (c) {
          var T = function() {
            throw Error();
          };
          if (Object.defineProperty(T.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(T, []);
            } catch (ue) {
              w = ue;
            }
            Reflect.construct(t, [], T);
          } else {
            try {
              T.call();
            } catch (ue) {
              w = ue;
            }
            t.call(T.prototype);
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
      var Pe = t ? t.displayName || t.name : "", Ne = Pe ? J(Pe) : "";
      return typeof t == "function" && le.set(t, Ne), Ne;
    }
    function Ze(t, c, p) {
      return je(t, !1);
    }
    function Ae(t) {
      var c = t.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ee(t, c, p) {
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
            return Ze(t.render);
          case y:
            return Ee(t.type, c, p);
          case a: {
            var w = t, D = w._payload, V = w._init;
            try {
              return Ee(V(D), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, We = {}, Ve = b.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var c = t._owner, p = Ee(t.type, t._source, c ? c.type : null);
        Ve.setExtraStackFrame(p);
      } else
        Ve.setExtraStackFrame(null);
    }
    function xe(t, c, p, w, D) {
      {
        var V = Function.call.bind(he);
        for (var T in t)
          if (V(t, T)) {
            var R = void 0;
            try {
              if (typeof t[T] != "function") {
                var ie = Error((w || "React class") + ": " + p + " type `" + T + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[T] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              R = t[T](c, T, w, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              R = Z;
            }
            R && !(R instanceof Error) && (ae(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", p, T, typeof R), ae(null)), R instanceof Error && !(R.message in We) && (We[R.message] = !0, ae(D), x("Failed %s type: %s", p, R.message), ae(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Oe(t) {
      return Qe(t);
    }
    function Re(t) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return p;
      }
    }
    function et(t) {
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
      if (et(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(t)), ze(t);
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
        var c = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ue(t) {
      if (he.call(t, "key")) {
        var c = Object.getOwnPropertyDescriptor(t, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function tt(t, c) {
      if (typeof t.ref == "string" && me.current && c && me.current.stateNode !== c) {
        var p = C(me.current.type);
        Fe[p] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(me.current.type), t.ref), Fe[p] = !0);
      }
    }
    function Le(t, c) {
      {
        var p = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function be(t, c) {
      {
        var p = function() {
          De || (De = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var rt = function(t, c, p, w, D, V, T) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: c,
        ref: p,
        props: T,
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
    function k(t, c, p, w, D) {
      {
        var V, T = {}, R = null, ie = null;
        p !== void 0 && ($e(p), R = "" + p), Ue(c) && ($e(c.key), R = "" + c.key), He(c) && (ie = c.ref, tt(c, D));
        for (V in c)
          he.call(c, V) && !Ye.hasOwnProperty(V) && (T[V] = c[V]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (V in Z)
            T[V] === void 0 && (T[V] = Z[V]);
        }
        if (R || ie) {
          var re = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          R && Le(T, re), ie && be(T, re);
        }
        return rt(t, R, ie, D, w, me.current, T);
      }
    }
    var M = b.ReactCurrentOwner, B = b.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var c = t._owner, p = Ee(t.type, t._source, c ? c.type : null);
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
          var t = C(M.current.type);
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
          var c = t.fileName.replace(/^.*[\\\/]/, ""), p = t.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var ct = {};
    function zt(t) {
      {
        var c = Ke();
        if (!c) {
          var p = typeof t == "string" ? t : t.displayName || t.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function ut(t, c) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var p = zt(c);
        if (ct[p])
          return;
        ct[p] = !0;
        var w = "";
        t && t._owner && t._owner !== M.current && (w = " It was passed a child from " + C(t._owner.type) + "."), se(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, w), se(null);
      }
    }
    function dt(t, c) {
      {
        if (typeof t != "object")
          return;
        if (Oe(t))
          for (var p = 0; p < t.length; p++) {
            var w = t[p];
            we(w) && ut(w, c);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = I(t);
          if (typeof D == "function" && D !== t.entries)
            for (var V = D.call(t), T; !(T = V.next()).done; )
              we(T.value) && ut(T.value, c);
        }
      }
    }
    function Dt(t) {
      {
        var c = t.type;
        if (c == null || typeof c == "string")
          return;
        var p;
        if (typeof c == "function")
          p = c.propTypes;
        else if (typeof c == "object" && (c.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        c.$$typeof === y))
          p = c.propTypes;
        else
          return;
        if (p) {
          var w = C(c);
          xe(p, t.props, "prop", w, t);
        } else if (c.PropTypes !== void 0 && !ce) {
          ce = !0;
          var D = C(c);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(t) {
      {
        for (var c = Object.keys(t.props), p = 0; p < c.length; p++) {
          var w = c[p];
          if (w !== "children" && w !== "key") {
            se(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), se(null);
            break;
          }
        }
        t.ref !== null && (se(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ft = {};
    function ht(t, c, p, w, D, V) {
      {
        var T = G(t);
        if (!T) {
          var R = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Ot(D);
          ie ? R += ie : R += Ke();
          var Z;
          t === null ? Z = "null" : Oe(t) ? Z = "array" : t !== void 0 && t.$$typeof === r ? (Z = "<" + (C(t.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, R);
        }
        var re = k(t, c, p, D, V);
        if (re == null)
          return re;
        if (T) {
          var pe = c.children;
          if (pe !== void 0)
            if (w)
              if (Oe(pe)) {
                for (var Pe = 0; Pe < pe.length; Pe++)
                  dt(pe[Pe], t);
                Object.freeze && Object.freeze(pe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dt(pe, t);
        }
        if (he.call(c, "key")) {
          var Ne = C(t), ue = Object.keys(c).filter(function(Vt) {
            return Vt !== "key";
          }), nt = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ft[Ne + nt]) {
            var Wt = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Ne, Wt, Ne), ft[Ne + nt] = !0;
          }
        }
        return t === o ? Ft(re) : Dt(re), re;
      }
    }
    function Lt(t, c, p) {
      return ht(t, c, p, !0);
    }
    function Mt(t, c, p) {
      return ht(t, c, p, !1);
    }
    var Bt = Mt, At = Lt;
    Be.Fragment = o, Be.jsx = Bt, Be.jsxs = At;
  }()), Be;
}
process.env.NODE_ENV === "production" ? at.exports = Qt() : at.exports = er();
var s = at.exports;
function qe(e, r) {
  return r ? /* @__PURE__ */ s.jsx(r, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function qr(e) {
  const {
    variant: r = "ghost",
    scheme: n = "primary",
    size: o = "md",
    leftIcon: i,
    rightIcon: u,
    className: f = "",
    children: l,
    ...d
  } = e, g = { md: 12, lg: 14 }[o], y = `arkyn_badge ${r} ${n} ${o} ${f}`;
  return /* @__PURE__ */ s.jsxs("div", { className: y.trim(), ...d, children: [
    qe(g, i),
    l,
    qe(g, i)
  ] });
}
function Gr(e) {
  const {
    className: r,
    orientation: n = "horizontal",
    ...o
  } = e, i = `arkyn_divider ${n} ${r}`;
  return /* @__PURE__ */ s.jsx("div", { className: i, ...o });
}
function Zr({ className: e, ...r }) {
  const n = "arkyn_skeleton " + e;
  return /* @__PURE__ */ s.jsx("div", { className: n.trim(), ...r });
}
function Qr(e) {
  const { className: r, ...n } = e, o = `arkyn_table_body ${r}`;
  return /* @__PURE__ */ s.jsx("tbody", { className: o.trim(), ...n });
}
function en(e) {
  const { className: r, children: n, ...o } = e, i = `arkyn_table_caption ${r}`;
  return /* @__PURE__ */ s.jsx("caption", { className: i.trim(), ...o, children: /* @__PURE__ */ s.jsx("div", { className: "arkyn_table_caption-content", children: n }) });
}
function tn(e) {
  const { children: r, className: n, ...o } = e, i = `arkyn_table_container ${n}`;
  return /* @__PURE__ */ s.jsx("div", { className: i.trim(), ...o, children: /* @__PURE__ */ s.jsx("table", { children: r }) });
}
function rn(e) {
  const { className: r, children: n, ...o } = e, i = `arkyn_table_footer ${r}`;
  return /* @__PURE__ */ s.jsxs("tfoot", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ s.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ s.jsx("tr", { children: /* @__PURE__ */ s.jsx("th", { colSpan: 100, children: /* @__PURE__ */ s.jsx("div", { className: "arkyn_table_footer-content", children: n }) }) })
  ] });
}
function nn(e) {
  const { className: r, children: n, ...o } = e, i = `arkyn_table_header ${r}`;
  return /* @__PURE__ */ s.jsxs("thead", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ s.jsx("tr", { children: n }),
    /* @__PURE__ */ s.jsx("tr", { className: "spacing-row" })
  ] });
}
function tr(e, r, n) {
  if (!e) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ s.jsx("p", { className: n, children: e });
  const o = e;
  return /* @__PURE__ */ s.jsx("p", { className: n, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function rr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    leftIcon: d,
    disabled: h,
    readOnly: g,
    onFocus: y,
    onBlur: a,
    title: v,
    style: P,
    isSearchable: E = !1,
    closeOnSelect: I = !0,
    ...b
  } = e, A = `arkyn_select ${l ? "hasPrefix" : ""} ${f} ${i} ${h || g || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, L = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: A,
    prefix: tr(l, L, "prefix"),
    LeftIcon: d,
    disabled: h,
    readOnly: g,
    onFocus: y,
    onBlur: a,
    title: v,
    closeOnSelect: I,
    style: P,
    isSearchable: E,
    iconSize: L,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...b
  };
}
const _t = Te({});
function an(e) {
  var g, y;
  const r = Ct(), { children: n, className: o, ...i } = e, u = Ie(null), f = ((g = u.current) == null ? void 0 : g.name) || "", l = ((y = r == null ? void 0 : r.fieldErrors) == null ? void 0 : y[f]) || null, d = Yt(), h = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ s.jsx(_t.Provider, { value: { error: l, id: d, inputRef: u }, children: /* @__PURE__ */ s.jsx("section", { className: h.trim(), ...i, children: n }) });
}
function Ce() {
  return _e(_t);
}
function sn(e) {
  var ve;
  const [r, n] = ge(!1), { inputRef: o, id: i, error: u } = Ce(), f = Ie(null), l = o || f, d = e.isError || !!u, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    iconSize: P,
    isLoading: E,
    LeftIcon: I,
    value: b = null,
    defaultValue: x = "",
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
    closeOnSelect: C,
    ...X
  } = rr({ ...e, id: i, isError: d }, r), [z, W] = ge(x), [ee, S] = ge("");
  function te() {
    h || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function fe(J) {
    n(!0), F && F(J);
  }
  function $() {
    n(!1), j && l.current && l.current.blur();
  }
  function N(J) {
    const { label: oe, value: le } = J;
    W(z !== le ? le : ""), G && G({ label: oe, value: le }), C && (l.current.blur(), n(!1), console.log("fecha"));
  }
  const _ = typeof b == "string" ? b : z, K = ((ve = O.find((J) => J.value === _)) == null ? void 0 : ve.label) || "", ne = () => {
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
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(
      "section",
      {
        title: g,
        style: y,
        onClick: te,
        className: `${a} placeholder_dark_${ne()}`,
        children: [
          v,
          I && /* @__PURE__ */ s.jsx(I, { size: P, strokeWidth: 2.5 }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              disabled: h || E,
              readOnly: !L,
              value: ee || "",
              placeholder: K || q,
              onFocus: fe,
              onBlur: () => S(""),
              ...X,
              onChange: (J) => S(J.target.value)
            }
          ),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "hidden",
              ref: l,
              name: H,
              value: _ || "",
              readOnly: !0
            }
          ),
          r && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: Q },
              children: [
                Y.map(({ label: J, value: oe }) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    onClick: () => N({ label: J, value: oe }),
                    className: _ === oe ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      J,
                      " ",
                      /* @__PURE__ */ s.jsx(wt, {})
                    ]
                  },
                  oe
                )),
                Y.length <= 0 && /* @__PURE__ */ s.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !E && /* @__PURE__ */ s.jsx(
            Ut,
            {
              className: "arkyn_select_arrow",
              size: P,
              strokeWidth: 2.5
            }
          ),
          E && A
        ]
      }
    ),
    r && /* @__PURE__ */ s.jsx("aside", { className: "arkyn_select_overlay", onClick: $ })
  ] });
}
function on(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    loadingText: i,
    size: u = "md",
    leftIcon: f,
    rightIcon: l,
    disabled: d,
    className: h = "",
    children: g,
    ...y
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[u], P = `arkyn_button loading_text_${!!i} ${o} ${n} ${u} loading_${r} ${h}`;
  return /* @__PURE__ */ s.jsxs("button", { className: P, disabled: d || r, ...y, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ s.jsx(Se, { size: v, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-content", children: [
      qe(v, f),
      g,
      qe(v, l)
    ] })
  ] });
}
function ln(e) {
  const {
    name: r,
    className: n = "",
    size: o = "md",
    isError: i,
    defaultChecked: u = !1,
    checked: f = null,
    onCheck: l,
    value: d,
    ...h
  } = e, { id: g, inputRef: y, error: a } = Ce(), v = i || !!a, [P, E] = ge(u || !1), I = typeof f == "boolean" ? f : P, b = `arkyn_checkbox ${o} ${v ? "error" : ""} ${I ? "checked" : ""} ${n}`;
  function x() {
    const U = P;
    E(!U), l && l(U ? "" : d || "checked");
  }
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      id: g,
      className: b,
      onClick: x,
      ...h,
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "hidden",
            name: r,
            ref: y,
            value: I ? d || "checked" : ""
          }
        ),
        /* @__PURE__ */ s.jsx(wt, {})
      ]
    }
  );
}
function cn(e) {
  const { children: r, className: n, ...o } = e, i = `arkyn_form_error ${n}`, { error: u } = Ce();
  return r ? /* @__PURE__ */ s.jsx("strong", { className: i.trim(), ...o, children: r }) : u ? /* @__PURE__ */ s.jsx("strong", { className: i.trim(), ...o, children: u }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function un(e) {
  const {
    showAsterisk: r = !1,
    className: n = "",
    ...o
  } = e, { id: i } = Ce(), f = `arkyn_form_label ${r ? "show-asterisk" : ""} ${n}`;
  return /* @__PURE__ */ s.jsx("label", { ...o, className: f.trim(), htmlFor: i });
}
function dn(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    size: i = "md",
    icon: u,
    disabled: f,
    className: l = "",
    ...d
  } = e, h = { xs: 12, sm: 16, md: 20, lg: 24 }, g = `arkyn_icon_button ${o} ${n} ${i} loading_${r} ${l}`;
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      disabled: f || r,
      className: g.trim(),
      ...d,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ s.jsx(Se, { size: h[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ s.jsx(u, { size: h[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function ke(e, r, n) {
  if (!e) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ s.jsx("p", { className: n, children: e });
  const o = e;
  return /* @__PURE__ */ s.jsx("p", { className: n, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function ot(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function St(e, r) {
  let n = "", o = 0;
  return Array.from(e).forEach((i, u) => {
    r[u + o].match(/[0-9]/) || (n += r[u + o], o++), n += i;
  }), n;
}
function jt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const it = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Rt = ot(it.CNPJ).length;
function nr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    defaultValue: a,
    readOnly: v,
    onFocus: P,
    onBlur: E,
    title: I,
    style: b,
    onChange: x,
    ...U
  } = e;
  function F(X) {
    let z = ot(X);
    const W = jt(z);
    if (!(z.length > Rt))
      return z = St(z, it[W]), z;
  }
  const j = g ? "right" : "left", O = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${y || v || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, C = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: ke(l, C, "prefix"),
    sufix: ke(d, C, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    defaultValue: F(a || ""),
    disabled: y,
    readOnly: v,
    onFocus: P,
    onBlur: E,
    title: I,
    style: b,
    onChange: x,
    loadingPosition: j,
    iconSize: C,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...U
  };
}
function ar(e) {
  const [r, n] = ge(!1), o = Ie(null), { inputRef: i, id: u, error: f } = Ce(), l = i || o, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: E,
    loadingPosition: I,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    Spinner: H,
    onChange: L,
    value: q,
    defaultValue: G,
    ...O
  } = nr({ ...e, id: u, isError: d }, r), [Q, C] = ge(G), X = x && !b, z = A && !b, W = I === "left" && b, ee = I === "right" && b;
  function S() {
    h || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function te(N) {
    let _ = ot(N.target.value);
    const K = jt(_);
    _.length > Rt || (_ = St(_, it[K]), N.target.value = _, C(_), L && L(N));
  }
  function fe(N) {
    n(!0), F && F(N);
  }
  function $(N) {
    n(!1), j && j(N);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: S,
      className: a,
      children: [
        v,
        W && H,
        X && /* @__PURE__ */ s.jsx(x, { size: E, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: h || b,
            readOnly: U,
            ref: l,
            value: q || Q,
            onFocus: fe,
            onChange: te,
            onBlur: $,
            ...O
          }
        ),
        z && /* @__PURE__ */ s.jsx(A, { size: E, strokeWidth: 2.5 }),
        ee && H,
        P
      ]
    }
  );
}
function sr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: E,
    style: I,
    showCents: b = !1,
    max: x = 1e9,
    onChange: U,
    ...F
  } = e, j = g ? "right" : "left", O = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${y || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, C = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: ke(l, C, "prefix"),
    sufix: ke(d, C, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: E,
    style: I,
    max: x,
    onChange: U,
    showCents: b,
    loadingPosition: j,
    iconSize: C,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...F
  };
}
const or = /^[1-9]{1}$/, ir = /^[0-9]{1}$/, yt = 8;
function lr(e, r) {
  if (e === 0) return "";
  const n = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return r ? n : n.replace("R$", "").trim();
}
function cr(e) {
  const { currencyValue: r, event: n, max: o, setCurrencyValue: i } = e, { key: u, keyCode: f } = n;
  if (r === 0 && !or.test(u) || r !== 0 && !ir.test(u) && f !== yt)
    return;
  const l = r.toString();
  let d;
  if (f !== yt) {
    const h = r === 0 ? u : `${l}${u}`;
    d = Number.parseInt(h, 10);
  } else {
    const h = l.slice(0, -1);
    d = h === "" ? 0 : Number.parseInt(h, 10);
  }
  d > Number(o) || i(d);
}
function ur(e) {
  const [r, n] = ge(!1), o = Ie(null), { inputRef: i, id: u, error: f } = Ce(), l = i || o, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: E,
    loadingPosition: I,
    isLoading: b,
    LeftIcon: x,
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
    defaultValue: C,
    ...X
  } = sr({ ...e, id: u, isError: d }, r), [z, W] = ge(C * 100 || 0), ee = x && !b, S = A && !b, te = I === "left" && b, fe = I === "right" && b;
  function $() {
    h || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function N(ne) {
    cr({ currencyValue: z, event: ne, max: q, setCurrencyValue: W }), O && O(z / 100), G && G(ne);
  }
  function _(ne) {
    n(!0), F && F(ne);
  }
  function K(ne) {
    n(!1), j && j(ne);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: $,
      className: a,
      children: [
        v,
        te && H,
        ee && /* @__PURE__ */ s.jsx(x, { size: E, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            value: lr(L || z, Q),
            onKeyDown: N,
            disabled: h || b,
            readOnly: U,
            ref: l,
            onFocus: _,
            onBlur: K,
            onChange: () => {
            },
            ...X
          }
        ),
        fe && H,
        S && /* @__PURE__ */ s.jsx(A, { size: E, strokeWidth: 2.5 }),
        P
      ]
    }
  );
}
function dr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: E,
    style: I,
    onChange: b,
    showMask: x = !1,
    type: U,
    ...F
  } = e, j = g ? "right" : "left", O = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${y || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, C = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: ke(l, C, "prefix"),
    sufix: ke(d, C, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: E,
    style: I,
    onChange: b,
    loadingPosition: j,
    iconSize: C,
    showMask: x,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...F
  };
}
const fr = Ht((e, r) => /* @__PURE__ */ s.jsx("input", { ref: r, ...e }));
function hr(e) {
  const [r, n] = ge(!1), o = Ie(null), { inputRef: i, id: u, error: f } = Ce(), l = i || o, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: E,
    loadingPosition: I,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    Spinner: H,
    ...L
  } = dr({ ...e, id: u, isError: d }, r), q = x && !b, G = A && !b, O = I === "left" && b, Q = I === "right" && b;
  function C() {
    h || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function X(W) {
    n(!0), F && F(W);
  }
  function z(W) {
    n(!1), j && j(W);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: C,
      className: a,
      children: [
        v,
        O && H,
        q && /* @__PURE__ */ s.jsx(x, { size: E, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          Gt,
          {
            component: fr,
            ref: l,
            onFocus: X,
            onBlur: z,
            ...L
          }
        ),
        G && /* @__PURE__ */ s.jsx(A, { size: E, strokeWidth: 2.5 }),
        Q && H,
        P
      ]
    }
  );
}
function mr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: u = "",
    variant: f = "solid",
    prefix: l,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: E,
    style: I,
    onChange: b,
    ...x
  } = e, U = g ? "right" : "left", q = `arkyn_input ${l ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${y || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, O = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: q,
    prefix: ke(l, O, "prefix"),
    sufix: ke(d, O, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: E,
    style: I,
    onChange: b,
    loadingPosition: U,
    iconSize: O,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...x
  };
}
function pr(e) {
  const [r, n] = ge(!1), o = Ie(null), { inputRef: i, id: u, error: f } = Ce(), l = i || o, d = e.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: E,
    loadingPosition: I,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: j,
    RightIcon: A,
    type: H,
    Spinner: L,
    ...q
  } = mr({ ...e, id: u, isError: d }, r), G = x && !b, O = A && !b, Q = I === "left" && b, C = I === "right" && b;
  function X() {
    h || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function z(ee) {
    n(!0), F && F(ee);
  }
  function W(ee) {
    n(!1), j && j(ee);
  }
  return H === "hidden" ? /* @__PURE__ */ s.jsx("input", { type: "hidden", ref: l, ...q }) : /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: X,
      className: a,
      children: [
        v,
        Q && L,
        G && /* @__PURE__ */ s.jsx(x, { size: E, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: h || b,
            readOnly: U,
            ref: l,
            onFocus: z,
            onBlur: W,
            type: H,
            ...q
          }
        ),
        O && /* @__PURE__ */ s.jsx(A, { size: E, strokeWidth: 2.5 }),
        C && L,
        P
      ]
    }
  );
}
function fn(e) {
  return e.type === "currency" ? /* @__PURE__ */ s.jsx(ur, { ...e }) : e.type === "masked" ? /* @__PURE__ */ s.jsx(hr, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ s.jsx(ar, { ...e }) : /* @__PURE__ */ s.jsx(pr, { ...e });
}
function hn(e) {
  const { className: r = "", ...n } = e, o = `arkyn_breadcrumb_container ${r}`;
  return /* @__PURE__ */ s.jsx("nav", { className: o, ...n });
}
function mn(e) {
  const { pathname: r } = Et(), {
    className: n = "",
    disabled: o = !1,
    children: i,
    to: u,
    ...f
  } = e, d = `arkyn_breadcrumb_link ${r === u ? "active" : "inactive"} ${n}`;
  return o ? /* @__PURE__ */ s.jsxs("p", { className: d, children: [
    /* @__PURE__ */ s.jsx(pt, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ s.jsxs(qt, { to: u, className: d, ...f, children: [
    /* @__PURE__ */ s.jsx(pt, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
const $t = Te({});
function pn(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    orientation: o = "left",
    children: i,
    className: u,
    ...f
  } = e, l = o === "left" ? "-100%" : "100%", h = `arkyn_drawer_container ${o} ${r ? "visible" : ""} ${u}`;
  return /* @__PURE__ */ s.jsx($t.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ s.jsx(Nt, { children: r && /* @__PURE__ */ s.jsxs("aside", { className: h.trim(), ...f, children: [
    /* @__PURE__ */ s.jsx(
      Je.div,
      {
        className: "arkyn_drawer_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ s.jsx(
      Je.div,
      {
        className: "arkyn_drawer_container-content",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${l})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${l})` },
        children: i
      }
    )
  ] }) }) });
}
function gn(e) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: o,
    ...i
  } = e, { makeInvisible: u } = _e($t), f = `arkyn_drawer_header ${n}`;
  return /* @__PURE__ */ s.jsxs("header", { className: f.trim(), ...i, children: [
    o,
    r && /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: u,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ s.jsx(kt, { size: 24 })
      }
    )
  ] });
}
const Pt = Te({});
function vn(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    children: o,
    className: i = "",
    ...u
  } = e, l = `arkyn_modal_container ${r ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ s.jsx(Pt.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ s.jsx(Nt, { children: r && /* @__PURE__ */ s.jsxs("aside", { className: l.trim(), ...u, children: [
    /* @__PURE__ */ s.jsx(
      Je.div,
      {
        className: "arkyn_modal_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ s.jsx(
      Je.div,
      {
        className: "arkyn_modal_container-content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: o
      }
    )
  ] }) }) });
}
function bn(e) {
  const { alignment: r = "right", className: n, ...o } = e, i = `arkyn_modal_footer ${r} ${n}`;
  return /* @__PURE__ */ s.jsx("footer", { className: i.trim(), ...o });
}
function yn(e) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: o,
    ...i
  } = e, { makeInvisible: u } = _e(Pt), f = `arkyn_modal_header ${n}`;
  return /* @__PURE__ */ s.jsxs("header", { className: f.trim(), ...i, children: [
    o,
    r && /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: u,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ s.jsx(kt, { size: 24 })
      }
    )
  ] });
}
function gr({ message: e, title: r, type: n, size: o = "lg" }) {
  const i = `arkyn_toast ${n} ${o}`;
  function u() {
    switch (n) {
      case "info":
        return /* @__PURE__ */ s.jsx(gt, {});
      case "success":
        return /* @__PURE__ */ s.jsx(Jt, {});
      case "danger":
        return /* @__PURE__ */ s.jsx(Xt, {});
      case "warning":
        return /* @__PURE__ */ s.jsx(Kt, {});
      default:
        return /* @__PURE__ */ s.jsx(gt, {});
    }
  }
  return /* @__PURE__ */ s.jsxs("aside", { className: i, children: [
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("div", { className: "bg" }),
      /* @__PURE__ */ s.jsx(u, {})
    ] }),
    /* @__PURE__ */ s.jsxs("p", { children: [
      /* @__PURE__ */ s.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ s.jsx("span", { children: e })
    ] })
  ] });
}
function xn(e) {
  const {
    text: r,
    size: n = "lg",
    children: o,
    orientation: i = "top",
    className: u,
    ...f
  } = e, l = `arkyn_tooltip ${n} ${i} ${u}`;
  return /* @__PURE__ */ s.jsxs("div", { className: l.trim(), ...f, children: [
    o,
    /* @__PURE__ */ s.jsx("div", { className: "arkyn_tooltip-text", children: r })
  ] });
}
const lt = Te({}), Tt = Te({});
function vr() {
  const e = _e(Tt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function br(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function wn() {
  const e = Ct(), { closeModal: r } = _e(lt), { showToast: n } = vr();
  mt(() => {
    const o = e == null ? void 0 : e.closeModalKey;
    o && r(o);
  }, [e]), mt(() => {
    const o = e == null ? void 0 : e.toast;
    br(o) && n(o);
  }, [e]);
}
const It = Te({});
function kn(e) {
  const r = _e(It);
  if (Object.entries(r).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: n,
      drawerIsOpen: o,
      openDrawer: i,
      closeDrawer: u
    } = r, f = o(e), l = n(e);
    return { drawerIsOpen: f, drawerData: l, openDrawer: (g) => i(e, g == null ? void 0 : g.data), closeDrawer: () => u(e) };
  } else
    return r;
}
function Cn(e) {
  const r = _e(lt);
  if (Object.entries(r).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: n,
      modalIsOpen: o,
      openModal: i,
      closeModal: u
    } = r, f = o(e), l = n(e);
    return { modalIsOpen: f, modalData: l, openModal: (g) => i(e, g == null ? void 0 : g.data), closeModal: () => u(e) };
  } else
    return r;
}
function En(e = "") {
  const r = Et(), n = new URLSearchParams(r.search), o = e ? `${e}:` : "", i = (u) => {
    Object.entries(u).forEach(([f, l]) => {
      l === void 0 ? n.delete(`${o}${f}`) : n.set(`${o}${f}`, String(l));
    });
  };
  return {
    getParam: (u) => n.get(`${o}${u}`),
    getScopedSearch: (u) => {
      i(u);
      let f = n.toString();
      return f && (f = "?" + f), f;
    }
  };
}
function Nn(e) {
  const { children: r = !1 } = e, [n, o] = ge([]);
  function i(d) {
    return !!n.some((h) => h.key === d);
  }
  function u(d) {
    var h;
    return (h = n.find((g) => g.key === d)) == null ? void 0 : h.data;
  }
  function f(d, h) {
    const g = i(d);
    o(g ? (y) => [...y.filter((v) => v.key !== d), { key: d, data: h }] : [...n, { key: d, data: h }]);
  }
  function l(d) {
    o(n.filter((h) => h.key !== d));
  }
  return /* @__PURE__ */ s.jsx(
    It.Provider,
    {
      value: { drawerIsOpen: i, drawerData: u, openDrawer: f, closeDrawer: l },
      children: r
    }
  );
}
function _n(e) {
  const { children: r = !1 } = e, [n, o] = ge([]);
  function i(d) {
    return !!n.some((h) => h.key === d);
  }
  function u(d) {
    var h;
    return (h = n.find((g) => g.key === d)) == null ? void 0 : h.data;
  }
  function f(d, h) {
    const g = i(d);
    o(g ? (y) => [...y.filter((v) => v.key !== d), { key: d, data: h }] : [...n, { key: d, data: h }]);
  }
  function l(d) {
    o(n.filter((h) => h.key !== d));
  }
  return /* @__PURE__ */ s.jsx(
    lt.Provider,
    {
      value: { modalIsOpen: i, modalData: u, openModal: f, closeModal: l },
      children: r
    }
  );
}
var yr = (e) => {
  switch (e) {
    case "success":
      return kr;
    case "info":
      return Er;
    case "warning":
      return Cr;
    case "error":
      return Nr;
    default:
      return null;
  }
}, xr = Array(12).fill(0), wr = ({ visible: e }) => m.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, m.createElement("div", { className: "sonner-spinner" }, xr.map((r, n) => m.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), kr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Cr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Er = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Nr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), _r = () => {
  let [e, r] = m.useState(document.hidden);
  return m.useEffect(() => {
    let n = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, st = 1, Sr = class {
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
      let { message: n, ...o } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : st++, u = this.toasts.find((l) => l.id === i), f = e.dismissible === void 0 ? !0 : e.dismissible;
      return u ? this.toasts = this.toasts.map((l) => l.id === i ? (this.publish({ ...l, ...e, id: i, title: n }), { ...l, ...e, id: i, dismissible: f, title: n }) : l) : this.addToast({ title: n, ...o, dismissible: f, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }));
    }), this.subscribers.forEach((r) => r({ id: e, dismiss: !0 })), e), this.message = (e, r) => this.create({ ...r, message: e }), this.error = (e, r) => this.create({ ...r, message: e, type: "error" }), this.success = (e, r) => this.create({ ...r, type: "success", message: e }), this.info = (e, r) => this.create({ ...r, type: "info", message: e }), this.warning = (e, r) => this.create({ ...r, type: "warning", message: e }), this.loading = (e, r) => this.create({ ...r, type: "loading", message: e }), this.promise = (e, r) => {
      if (!r) return;
      let n;
      r.loading !== void 0 && (n = this.create({ ...r, promise: e, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      let o = e instanceof Promise ? e : e(), i = n !== void 0;
      return o.then(async (u) => {
        if (Rr(u) && !u.ok) {
          i = !1;
          let f = typeof r.error == "function" ? await r.error(`HTTP error! status: ${u.status}`) : r.error, l = typeof r.description == "function" ? await r.description(`HTTP error! status: ${u.status}`) : r.description;
          this.create({ id: n, type: "error", message: f, description: l });
        } else if (r.success !== void 0) {
          i = !1;
          let f = typeof r.success == "function" ? await r.success(u) : r.success, l = typeof r.description == "function" ? await r.description(u) : r.description;
          this.create({ id: n, type: "success", message: f, description: l });
        }
      }).catch(async (u) => {
        if (r.error !== void 0) {
          i = !1;
          let f = typeof r.error == "function" ? await r.error(u) : r.error, l = typeof r.description == "function" ? await r.description(u) : r.description;
          this.create({ id: n, type: "error", message: f, description: l });
        }
      }).finally(() => {
        var u;
        i && (this.dismiss(n), n = void 0), (u = r.finally) == null || u.call(r);
      }), n;
    }, this.custom = (e, r) => {
      let n = (r == null ? void 0 : r.id) || st++;
      return this.create({ jsx: e(n), id: n, ...r }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, de = new Sr(), jr = (e, r) => {
  let n = (r == null ? void 0 : r.id) || st++;
  return de.addToast({ title: e, ...r, id: n }), n;
}, Rr = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", $r = jr, Pr = () => de.toasts, Tr = Object.assign($r, { success: de.success, info: de.info, warning: de.warning, error: de.error, custom: de.custom, message: de.message, promise: de.promise, dismiss: de.dismiss, loading: de.loading }, { getHistory: Pr });
function Ir(e, { insertAt: r } = {}) {
  if (!e || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
Ir(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Xe(e) {
  return e.label !== void 0;
}
var Or = 3, zr = "32px", Dr = 4e3, Fr = 356, Lr = 14, Mr = 20, Br = 200;
function Ar(...e) {
  return e.filter(Boolean).join(" ");
}
var Wr = (e) => {
  var r, n, o, i, u, f, l, d, h, g;
  let { invert: y, toast: a, unstyled: v, interacting: P, setHeights: E, visibleToasts: I, heights: b, index: x, toasts: U, expanded: F, removeToast: j, defaultRichColors: A, closeButton: H, style: L, cancelButtonStyle: q, actionButtonStyle: G, className: O = "", descriptionClassName: Q = "", duration: C, position: X, gap: z, loadingIcon: W, expandByDefault: ee, classNames: S, icons: te, closeButtonAriaLabel: fe = "Close toast", pauseWhenPageIsHidden: $, cn: N } = e, [_, K] = m.useState(!1), [ne, Y] = m.useState(!1), [ve, J] = m.useState(!1), [oe, le] = m.useState(!1), [Ge, je] = m.useState(0), [Ze, Ae] = m.useState(0), Ee = m.useRef(null), he = m.useRef(null), We = x === 0, Ve = x + 1 <= I, ae = a.type, xe = a.dismissible !== !1, Qe = a.className || "", Oe = a.descriptionClassName || "", Re = m.useMemo(() => b.findIndex((k) => k.toastId === a.id) || 0, [b, a.id]), et = m.useMemo(() => {
    var k;
    return (k = a.closeButton) != null ? k : H;
  }, [a.closeButton, H]), ze = m.useMemo(() => a.duration || C || Dr, [a.duration, C]), $e = m.useRef(0), me = m.useRef(0), Ye = m.useRef(0), ye = m.useRef(null), [De, Fe] = X.split("-"), He = m.useMemo(() => b.reduce((k, M, B) => B >= Re ? k : k + M.height, 0), [b, Re]), Ue = _r(), tt = a.invert || y, Le = ae === "loading";
  me.current = m.useMemo(() => Re * z + He, [Re, He]), m.useEffect(() => {
    K(!0);
  }, []), m.useLayoutEffect(() => {
    if (!_) return;
    let k = he.current, M = k.style.height;
    k.style.height = "auto";
    let B = k.getBoundingClientRect().height;
    k.style.height = M, Ae(B), E((se) => se.find((ce) => ce.toastId === a.id) ? se.map((ce) => ce.toastId === a.id ? { ...ce, height: B } : ce) : [{ toastId: a.id, height: B, position: a.position }, ...se]);
  }, [_, a.title, a.description, E, a.id]);
  let be = m.useCallback(() => {
    Y(!0), je(me.current), E((k) => k.filter((M) => M.toastId !== a.id)), setTimeout(() => {
      j(a);
    }, Br);
  }, [a, j, E, me]);
  m.useEffect(() => {
    if (a.promise && ae === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
    let k, M = ze;
    return F || P || $ && Ue ? (() => {
      if (Ye.current < $e.current) {
        let B = (/* @__PURE__ */ new Date()).getTime() - $e.current;
        M = M - B;
      }
      Ye.current = (/* @__PURE__ */ new Date()).getTime();
    })() : M !== 1 / 0 && ($e.current = (/* @__PURE__ */ new Date()).getTime(), k = setTimeout(() => {
      var B;
      (B = a.onAutoClose) == null || B.call(a, a), be();
    }, M)), () => clearTimeout(k);
  }, [F, P, ee, a, ze, be, a.promise, ae, $, Ue]), m.useEffect(() => {
    let k = he.current;
    if (k) {
      let M = k.getBoundingClientRect().height;
      return Ae(M), E((B) => [{ toastId: a.id, height: M, position: a.position }, ...B]), () => E((B) => B.filter((se) => se.toastId !== a.id));
    }
  }, [E, a.id]), m.useEffect(() => {
    a.delete && be();
  }, [be, a.delete]);
  function rt() {
    return te != null && te.loading ? m.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, te.loading) : W ? m.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, W) : m.createElement(wr, { visible: ae === "loading" });
  }
  return m.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: he, className: N(O, Qe, S == null ? void 0 : S.toast, (r = a == null ? void 0 : a.classNames) == null ? void 0 : r.toast, S == null ? void 0 : S.default, S == null ? void 0 : S[ae], (n = a == null ? void 0 : a.classNames) == null ? void 0 : n[ae]), "data-sonner-toast": "", "data-rich-colors": (o = a.richColors) != null ? o : A, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": _, "data-promise": !!a.promise, "data-removed": ne, "data-visible": Ve, "data-y-position": De, "data-x-position": Fe, "data-index": x, "data-front": We, "data-swiping": ve, "data-dismissible": xe, "data-type": ae, "data-invert": tt, "data-swipe-out": oe, "data-expanded": !!(F || ee && _), style: { "--index": x, "--toasts-before": x, "--z-index": U.length - x, "--offset": `${ne ? Ge : me.current}px`, "--initial-height": ee ? "auto" : `${Ze}px`, ...L, ...a.style }, onPointerDown: (k) => {
    Le || !xe || (Ee.current = /* @__PURE__ */ new Date(), je(me.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (J(!0), ye.current = { x: k.clientX, y: k.clientY }));
  }, onPointerUp: () => {
    var k, M, B, se;
    if (oe || !xe) return;
    ye.current = null;
    let ce = Number(((k = he.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), we = (/* @__PURE__ */ new Date()).getTime() - ((M = Ee.current) == null ? void 0 : M.getTime()), Ke = Math.abs(ce) / we;
    if (Math.abs(ce) >= Mr || Ke > 0.11) {
      je(me.current), (B = a.onDismiss) == null || B.call(a, a), be(), le(!0);
      return;
    }
    (se = he.current) == null || se.style.setProperty("--swipe-amount", "0px"), J(!1);
  }, onPointerMove: (k) => {
    var M;
    if (!ye.current || !xe) return;
    let B = k.clientY - ye.current.y, se = k.clientX - ye.current.x, ce = (De === "top" ? Math.min : Math.max)(0, B), we = k.pointerType === "touch" ? 10 : 2;
    Math.abs(ce) > we ? (M = he.current) == null || M.style.setProperty("--swipe-amount", `${B}px`) : Math.abs(se) > we && (ye.current = null);
  } }, et && !a.jsx ? m.createElement("button", { "aria-label": fe, "data-disabled": Le, "data-close-button": !0, onClick: Le || !xe ? () => {
  } : () => {
    var k;
    be(), (k = a.onDismiss) == null || k.call(a, a);
  }, className: N(S == null ? void 0 : S.closeButton, (i = a == null ? void 0 : a.classNames) == null ? void 0 : i.closeButton) }, m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), m.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || m.isValidElement(a.title) ? a.jsx || a.title : m.createElement(m.Fragment, null, ae || a.icon || a.promise ? m.createElement("div", { "data-icon": "", className: N(S == null ? void 0 : S.icon, (u = a == null ? void 0 : a.classNames) == null ? void 0 : u.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || rt() : null, a.type !== "loading" ? a.icon || (te == null ? void 0 : te[ae]) || yr(ae) : null) : null, m.createElement("div", { "data-content": "", className: N(S == null ? void 0 : S.content, (f = a == null ? void 0 : a.classNames) == null ? void 0 : f.content) }, m.createElement("div", { "data-title": "", className: N(S == null ? void 0 : S.title, (l = a == null ? void 0 : a.classNames) == null ? void 0 : l.title) }, a.title), a.description ? m.createElement("div", { "data-description": "", className: N(Q, Oe, S == null ? void 0 : S.description, (d = a == null ? void 0 : a.classNames) == null ? void 0 : d.description) }, a.description) : null), m.isValidElement(a.cancel) ? a.cancel : a.cancel && Xe(a.cancel) ? m.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || q, onClick: (k) => {
    var M, B;
    Xe(a.cancel) && xe && ((B = (M = a.cancel).onClick) == null || B.call(M, k), be());
  }, className: N(S == null ? void 0 : S.cancelButton, (h = a == null ? void 0 : a.classNames) == null ? void 0 : h.cancelButton) }, a.cancel.label) : null, m.isValidElement(a.action) ? a.action : a.action && Xe(a.action) ? m.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || G, onClick: (k) => {
    var M, B;
    Xe(a.action) && (k.defaultPrevented || ((B = (M = a.action).onClick) == null || B.call(M, k), be()));
  }, className: N(S == null ? void 0 : S.actionButton, (g = a == null ? void 0 : a.classNames) == null ? void 0 : g.actionButton) }, a.action.label) : null));
};
function xt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Vr = (e) => {
  let { invert: r, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: u, className: f, offset: l, theme: d = "light", richColors: h, duration: g, style: y, visibleToasts: a = Or, toastOptions: v, dir: P = xt(), gap: E = Lr, loadingIcon: I, icons: b, containerAriaLabel: x = "Notifications", pauseWhenPageIsHidden: U, cn: F = Ar } = e, [j, A] = m.useState([]), H = m.useMemo(() => Array.from(new Set([n].concat(j.filter(($) => $.position).map(($) => $.position)))), [j, n]), [L, q] = m.useState([]), [G, O] = m.useState(!1), [Q, C] = m.useState(!1), [X, z] = m.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = m.useRef(null), ee = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), S = m.useRef(null), te = m.useRef(!1), fe = m.useCallback(($) => {
    var N;
    (N = j.find((_) => _.id === $.id)) != null && N.delete || de.dismiss($.id), A((_) => _.filter(({ id: K }) => K !== $.id));
  }, [j]);
  return m.useEffect(() => de.subscribe(($) => {
    if ($.dismiss) {
      A((N) => N.map((_) => _.id === $.id ? { ..._, delete: !0 } : _));
      return;
    }
    setTimeout(() => {
      Zt.flushSync(() => {
        A((N) => {
          let _ = N.findIndex((K) => K.id === $.id);
          return _ !== -1 ? [...N.slice(0, _), { ...N[_], ...$ }, ...N.slice(_ + 1)] : [$, ...N];
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
    let $ = (N) => {
      var _, K;
      o.every((ne) => N[ne] || N.code === ne) && (O(!0), (_ = W.current) == null || _.focus()), N.code === "Escape" && (document.activeElement === W.current || (K = W.current) != null && K.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [o]), m.useEffect(() => {
    if (W.current) return () => {
      S.current && (S.current.focus({ preventScroll: !0 }), S.current = null, te.current = !1);
    };
  }, [W.current]), j.length ? m.createElement("section", { "aria-label": `${x} ${ee}`, tabIndex: -1 }, H.map(($, N) => {
    var _;
    let [K, ne] = $.split("-");
    return m.createElement("ol", { key: $, dir: P === "auto" ? xt() : P, tabIndex: -1, ref: W, className: f, "data-sonner-toaster": !0, "data-theme": X, "data-y-position": K, "data-x-position": ne, style: { "--front-toast-height": `${((_ = L[0]) == null ? void 0 : _.height) || 0}px`, "--offset": typeof l == "number" ? `${l}px` : l || zr, "--width": `${Fr}px`, "--gap": `${E}px`, ...y }, onBlur: (Y) => {
      te.current && !Y.currentTarget.contains(Y.relatedTarget) && (te.current = !1, S.current && (S.current.focus({ preventScroll: !0 }), S.current = null));
    }, onFocus: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || te.current || (te.current = !0, S.current = Y.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      Q || O(!1);
    }, onPointerDown: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || C(!0);
    }, onPointerUp: () => C(!1) }, j.filter((Y) => !Y.position && N === 0 || Y.position === $).map((Y, ve) => {
      var J, oe;
      return m.createElement(Wr, { key: Y.id, icons: b, index: ve, toast: Y, defaultRichColors: h, duration: (J = v == null ? void 0 : v.duration) != null ? J : g, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: r, visibleToasts: a, closeButton: (oe = v == null ? void 0 : v.closeButton) != null ? oe : u, interacting: Q, position: $, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: fe, toasts: j.filter((le) => le.position == Y.position), heights: L.filter((le) => le.position == Y.position), setHeights: q, expandByDefault: i, gap: E, loadingIcon: I, expanded: G, pauseWhenPageIsHidden: U, cn: F });
    }));
  })) : null;
};
function Sn({ children: e }) {
  function r(n) {
    Tr.custom((o) => /* @__PURE__ */ s.jsx(gr, { ...n }));
  }
  return /* @__PURE__ */ s.jsxs(Tt.Provider, { value: { showToast: r }, children: [
    /* @__PURE__ */ s.jsx(Vr, {}),
    e
  ] });
}
export {
  qr as Badge,
  hn as BreadcrumbContainer,
  mn as BreadcrumbLink,
  on as Button,
  ln as Checkbox,
  Gr as Divider,
  pn as DrawerContainer,
  gn as DrawerHeader,
  Nn as DrawerProvider,
  an as FormController,
  cn as FormError,
  un as FormLabel,
  dn as IconButton,
  fn as Input,
  vn as ModalContainer,
  bn as ModalFooter,
  yn as ModalHeader,
  _n as ModalProvider,
  sn as Select,
  Zr as Skeleton,
  Qr as TableBody,
  en as TableCaption,
  tn as TableContainer,
  rn as TableFooter,
  nn as TableHeader,
  gr as Toast,
  Sn as ToastProvider,
  xn as Tooltip,
  wn as useAutomation,
  kn as useDrawer,
  Cn as useModal,
  En as useScopedParams,
  vr as useToast
};
