import m, { createContext as Ie, useRef as Te, useId as Yt, useContext as _e, useState as ge, forwardRef as Ht, useEffect as mt } from "react";
import { Loader2 as je, Check as wt, ChevronDown as Ut, ChevronRight as pt, X as kt, Info as gt, AlertCircle as Kt, XCircle as Xt, CheckCircle as Jt } from "lucide-react";
import { useActionData as Et, useLocation as Ct, Link as qt } from "@remix-run/react";
import { InputMask as Gt } from "@react-input/mask";
import { AnimatePresence as St, motion as Je } from "framer-motion";
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
  var t = m, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(i, d, h) {
    var g, y = {}, a = null, v = null;
    h !== void 0 && (a = "" + h), d.key !== void 0 && (a = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (g in d) o.call(d, g) && !u.hasOwnProperty(g) && (y[g] = d[g]);
    if (i && i.defaultProps) for (g in d = i.defaultProps, d) y[g] === void 0 && (y[g] = d[g]);
    return { $$typeof: r, type: i, key: a, ref: v, props: y, _owner: l.current };
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
    var t = m, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), i = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), P = Symbol.iterator, C = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var c = P && e[P] || e[C];
      return typeof c == "function" ? c : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(e) {
      {
        for (var c = arguments.length, p = new Array(c > 1 ? c - 1 : 0), w = 1; w < c; w++)
          p[w - 1] = arguments[w];
        U("error", e, p);
      }
    }
    function U(e, c, p) {
      {
        var w = b.ReactDebugCurrentFrame, D = w.getStackAddendum();
        D !== "" && (c += "%s", p = p.concat([D]));
        var V = p.map(function(I) {
          return String(I);
        });
        V.unshift("Warning: " + c), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var F = !1, N = !1, A = !1, H = !1, L = !1, q;
    q = Symbol.for("react.module.reference");
    function G(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || L || e === l || e === h || e === g || H || e === v || F || N || A || typeof e == "object" && e !== null && (e.$$typeof === a || e.$$typeof === y || e.$$typeof === f || e.$$typeof === i || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === q || e.getModuleId !== void 0));
    }
    function O(e, c, p) {
      var w = e.displayName;
      if (w)
        return w;
      var D = c.displayName || c.name || "";
      return D !== "" ? p + "(" + D + ")" : p;
    }
    function Q(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var c = e;
            return Q(c) + ".Consumer";
          case f:
            var p = e;
            return Q(p._context) + ".Provider";
          case d:
            return O(e, e.render, "ForwardRef");
          case y:
            var w = e.displayName || null;
            return w !== null ? w : E(e.type) || "Memo";
          case a: {
            var D = e, V = D._payload, I = D._init;
            try {
              return E(I(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, z = 0, W, ee, j, te, fe, $, S;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function K() {
      {
        if (z === 0) {
          W = console.log, ee = console.info, j = console.warn, te = console.error, fe = console.group, $ = console.groupCollapsed, S = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: _,
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
        z++;
      }
    }
    function ne() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: X({}, e, {
              value: W
            }),
            info: X({}, e, {
              value: ee
            }),
            warn: X({}, e, {
              value: j
            }),
            error: X({}, e, {
              value: te
            }),
            group: X({}, e, {
              value: fe
            }),
            groupCollapsed: X({}, e, {
              value: $
            }),
            groupEnd: X({}, e, {
              value: S
            })
          });
        }
        z < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = b.ReactCurrentDispatcher, ve;
    function J(e, c, p) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (D) {
            var w = D.stack.trim().match(/\n( *(at )?)/);
            ve = w && w[1] || "";
          }
        return `
` + ve + e;
      }
    }
    var oe = !1, le;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Ge();
    }
    function Ne(e, c) {
      if (!e || oe)
        return "";
      {
        var p = le.get(e);
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
            Reflect.construct(e, [], I);
          } else {
            try {
              I.call();
            } catch (ue) {
              w = ue;
            }
            e.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            w = ue;
          }
          e();
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
                    return e.displayName && pe.includes("<anonymous>") && (pe = pe.replace("<anonymous>", e.displayName)), typeof e == "function" && le.set(e, pe), pe;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        oe = !1, Y.current = V, ne(), Error.prepareStackTrace = D;
      }
      var Pe = e ? e.displayName || e.name : "", Se = Pe ? J(Pe) : "";
      return typeof e == "function" && le.set(e, Se), Se;
    }
    function Ze(e, c, p) {
      return Ne(e, !1);
    }
    function Ae(e) {
      var c = e.prototype;
      return !!(c && c.isReactComponent);
    }
    function Ce(e, c, p) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ne(e, Ae(e));
      if (typeof e == "string")
        return J(e);
      switch (e) {
        case h:
          return J("Suspense");
        case g:
          return J("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ze(e.render);
          case y:
            return Ce(e.type, c, p);
          case a: {
            var w = e, D = w._payload, V = w._init;
            try {
              return Ce(V(D), c, p);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, We = {}, Ve = b.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var c = e._owner, p = Ce(e.type, e._source, c ? c.type : null);
        Ve.setExtraStackFrame(p);
      } else
        Ve.setExtraStackFrame(null);
    }
    function xe(e, c, p, w, D) {
      {
        var V = Function.call.bind(he);
        for (var I in e)
          if (V(e, I)) {
            var R = void 0;
            try {
              if (typeof e[I] != "function") {
                var ie = Error((w || "React class") + ": " + p + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              R = e[I](c, I, w, p, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              R = Z;
            }
            R && !(R instanceof Error) && (ae(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", p, I, typeof R), ae(null)), R instanceof Error && !(R.message in We) && (We[R.message] = !0, ae(D), x("Failed %s type: %s", p, R.message), ae(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Oe(e) {
      return Qe(e);
    }
    function Re(e) {
      {
        var c = typeof Symbol == "function" && Symbol.toStringTag, p = c && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return p;
      }
    }
    function et(e) {
      try {
        return ze(e), !1;
      } catch {
        return !0;
      }
    }
    function ze(e) {
      return "" + e;
    }
    function $e(e) {
      if (et(e))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(e)), ze(e);
    }
    var me = b.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, De, Fe;
    Fe = {};
    function He(e) {
      if (he.call(e, "ref")) {
        var c = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ue(e) {
      if (he.call(e, "key")) {
        var c = Object.getOwnPropertyDescriptor(e, "key").get;
        if (c && c.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, c) {
      if (typeof e.ref == "string" && me.current && c && me.current.stateNode !== c) {
        var p = E(me.current.type);
        Fe[p] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(me.current.type), e.ref), Fe[p] = !0);
      }
    }
    function Le(e, c) {
      {
        var p = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: p,
          configurable: !0
        });
      }
    }
    function be(e, c) {
      {
        var p = function() {
          De || (De = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", c));
        };
        p.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: p,
          configurable: !0
        });
      }
    }
    var rt = function(e, c, p, w, D, V, I) {
      var R = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: c,
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
    function k(e, c, p, w, D) {
      {
        var V, I = {}, R = null, ie = null;
        p !== void 0 && ($e(p), R = "" + p), Ue(c) && ($e(c.key), R = "" + c.key), He(c) && (ie = c.ref, tt(c, D));
        for (V in c)
          he.call(c, V) && !Ye.hasOwnProperty(V) && (I[V] = c[V]);
        if (e && e.defaultProps) {
          var Z = e.defaultProps;
          for (V in Z)
            I[V] === void 0 && (I[V] = Z[V]);
        }
        if (R || ie) {
          var re = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          R && Le(I, re), ie && be(I, re);
        }
        return rt(e, R, ie, D, w, me.current, I);
      }
    }
    var M = b.ReactCurrentOwner, B = b.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var c = e._owner, p = Ce(e.type, e._source, c ? c.type : null);
        B.setExtraStackFrame(p);
      } else
        B.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function Ke() {
      {
        if (M.current) {
          var e = E(M.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function Ot(e) {
      {
        if (e !== void 0) {
          var c = e.fileName.replace(/^.*[\\\/]/, ""), p = e.lineNumber;
          return `

Check your code at ` + c + ":" + p + ".";
        }
        return "";
      }
    }
    var ct = {};
    function zt(e) {
      {
        var c = Ke();
        if (!c) {
          var p = typeof e == "string" ? e : e.displayName || e.name;
          p && (c = `

Check the top-level render call using <` + p + ">.");
        }
        return c;
      }
    }
    function ut(e, c) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var p = zt(c);
        if (ct[p])
          return;
        ct[p] = !0;
        var w = "";
        e && e._owner && e._owner !== M.current && (w = " It was passed a child from " + E(e._owner.type) + "."), se(e), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', p, w), se(null);
      }
    }
    function dt(e, c) {
      {
        if (typeof e != "object")
          return;
        if (Oe(e))
          for (var p = 0; p < e.length; p++) {
            var w = e[p];
            we(w) && ut(w, c);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var D = T(e);
          if (typeof D == "function" && D !== e.entries)
            for (var V = D.call(e), I; !(I = V.next()).done; )
              we(I.value) && ut(I.value, c);
        }
      }
    }
    function Dt(e) {
      {
        var c = e.type;
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
          var w = E(c);
          xe(p, e.props, "prop", w, e);
        } else if (c.PropTypes !== void 0 && !ce) {
          ce = !0;
          var D = E(c);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof c.getDefaultProps == "function" && !c.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ft(e) {
      {
        for (var c = Object.keys(e.props), p = 0; p < c.length; p++) {
          var w = c[p];
          if (w !== "children" && w !== "key") {
            se(e), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), se(null);
            break;
          }
        }
        e.ref !== null && (se(e), x("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ft = {};
    function ht(e, c, p, w, D, V) {
      {
        var I = G(e);
        if (!I) {
          var R = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (R += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Ot(D);
          ie ? R += ie : R += Ke();
          var Z;
          e === null ? Z = "null" : Oe(e) ? Z = "array" : e !== void 0 && e.$$typeof === r ? (Z = "<" + (E(e.type) || "Unknown") + " />", R = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof e, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, R);
        }
        var re = k(e, c, p, D, V);
        if (re == null)
          return re;
        if (I) {
          var pe = c.children;
          if (pe !== void 0)
            if (w)
              if (Oe(pe)) {
                for (var Pe = 0; Pe < pe.length; Pe++)
                  dt(pe[Pe], e);
                Object.freeze && Object.freeze(pe);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dt(pe, e);
        }
        if (he.call(c, "key")) {
          var Se = E(e), ue = Object.keys(c).filter(function(Vt) {
            return Vt !== "key";
          }), nt = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ft[Se + nt]) {
            var Wt = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Se, Wt, Se), ft[Se + nt] = !0;
          }
        }
        return e === o ? Ft(re) : Dt(re), re;
      }
    }
    function Lt(e, c, p) {
      return ht(e, c, p, !0);
    }
    function Mt(e, c, p) {
      return ht(e, c, p, !1);
    }
    var Bt = Mt, At = Lt;
    Be.Fragment = o, Be.jsx = Bt, Be.jsxs = At;
  }()), Be;
}
process.env.NODE_ENV === "production" ? at.exports = Qt() : at.exports = er();
var s = at.exports;
function qe(t, r) {
  return r ? /* @__PURE__ */ s.jsx(r, { size: t, strokeWidth: 2.5 }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function qr(t) {
  const {
    variant: r = "ghost",
    scheme: n = "primary",
    size: o = "md",
    leftIcon: l,
    rightIcon: u,
    className: f = "",
    children: i,
    ...d
  } = t, g = { md: 12, lg: 14 }[o], y = `arkyn_badge ${r} ${n} ${o} ${f}`;
  return /* @__PURE__ */ s.jsxs("div", { className: y.trim(), ...d, children: [
    qe(g, l),
    i,
    qe(g, l)
  ] });
}
function Gr(t) {
  const {
    className: r,
    orientation: n = "horizontal",
    ...o
  } = t, l = `arkyn_divider ${n} ${r}`;
  return /* @__PURE__ */ s.jsx("div", { className: l, ...o });
}
function Zr({ className: t, ...r }) {
  const n = "arkyn_skeleton " + t;
  return /* @__PURE__ */ s.jsx("div", { className: n.trim(), ...r });
}
function tr(t, r, n) {
  if (!t) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ s.jsx("p", { className: n, children: t });
  const o = t;
  return /* @__PURE__ */ s.jsx("p", { className: n, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function rr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    leftIcon: d,
    disabled: h,
    readOnly: g,
    onFocus: y,
    onBlur: a,
    title: v,
    style: P,
    isSearchable: C = !1,
    closeOnSelect: T = !0,
    ...b
  } = t, A = `arkyn_select ${i ? "hasPrefix" : ""} ${f} ${l} ${h || g || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, L = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: A,
    prefix: tr(i, L, "prefix"),
    LeftIcon: d,
    disabled: h,
    readOnly: g,
    onFocus: y,
    onBlur: a,
    title: v,
    closeOnSelect: T,
    style: P,
    isSearchable: C,
    iconSize: L,
    Spinner: /* @__PURE__ */ s.jsx(je, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...b
  };
}
const _t = Ie({});
function Qr(t) {
  var g, y;
  const r = Et(), { children: n, className: o, ...l } = t, u = Te(null), f = ((g = u.current) == null ? void 0 : g.name) || "", i = ((y = r == null ? void 0 : r.fieldErrors) == null ? void 0 : y[f]) || null, d = Yt(), h = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ s.jsx(_t.Provider, { value: { error: i, id: d, inputRef: u }, children: /* @__PURE__ */ s.jsx("section", { className: h.trim(), ...l, children: n }) });
}
function Ee() {
  return _e(_t);
}
function en(t) {
  var ve;
  const [r, n] = ge(!1), { inputRef: o, id: l, error: u } = Ee(), f = Te(null), i = o || f, d = t.isError || !!u, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    iconSize: P,
    isLoading: C,
    LeftIcon: T,
    value: b = null,
    defaultValue: x = "",
    readOnly: U,
    onFocus: F,
    onBlur: N,
    Spinner: A,
    name: H,
    isSearchable: L,
    placeholder: q,
    onSelect: G,
    options: O,
    optionMaxHeight: Q,
    closeOnSelect: E,
    ...X
  } = rr({ ...t, id: l, isError: d }, r), [z, W] = ge(x), [ee, j] = ge("");
  function te() {
    h || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function fe(J) {
    n(!0), F && F(J);
  }
  function $() {
    n(!1), N && i.current && i.current.blur();
  }
  function S(J) {
    const { label: oe, value: le } = J;
    W(z !== le ? le : ""), G && G({ label: oe, value: le }), E && (i.current.blur(), n(!1), console.log("fecha"));
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
          T && /* @__PURE__ */ s.jsx(T, { size: P, strokeWidth: 2.5 }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              disabled: h || C,
              readOnly: !L,
              value: ee || "",
              placeholder: K || q,
              onFocus: fe,
              onBlur: () => j(""),
              ...X,
              onChange: (J) => j(J.target.value)
            }
          ),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "hidden",
              ref: i,
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
                    onClick: () => S({ label: J, value: oe }),
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
          !C && /* @__PURE__ */ s.jsx(
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
    r && /* @__PURE__ */ s.jsx("aside", { className: "arkyn_select_overlay", onClick: $ })
  ] });
}
function tn(t) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    loadingText: l,
    size: u = "md",
    leftIcon: f,
    rightIcon: i,
    disabled: d,
    className: h = "",
    children: g,
    ...y
  } = t, v = { xs: 12, sm: 16, md: 20, lg: 24 }[u], P = `arkyn_button loading_text_${!!l} ${o} ${n} ${u} loading_${r} ${h}`;
  return /* @__PURE__ */ s.jsxs("button", { className: P, disabled: d || r, ...y, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ s.jsx(je, { size: v, strokeWidth: 2.5 }),
      l && l
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-content", children: [
      qe(v, f),
      g,
      qe(v, i)
    ] })
  ] });
}
function rn(t) {
  const {
    name: r,
    className: n = "",
    size: o = "md",
    isError: l,
    defaultChecked: u = !1,
    checked: f = null,
    onCheck: i,
    value: d,
    ...h
  } = t, { id: g, inputRef: y, error: a } = Ee(), v = l || !!a, [P, C] = ge(u || !1), T = typeof f == "boolean" ? f : P, b = `arkyn_checkbox ${o} ${v ? "error" : ""} ${T ? "checked" : ""} ${n}`;
  function x() {
    const U = P;
    C(!U), i && i(U ? "" : d || "checked");
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
            value: T ? d || "checked" : ""
          }
        ),
        /* @__PURE__ */ s.jsx(wt, {})
      ]
    }
  );
}
function nn(t) {
  const { children: r, className: n, ...o } = t, l = `arkyn_form_error ${n}`, { error: u } = Ee();
  return r ? /* @__PURE__ */ s.jsx("strong", { className: l.trim(), ...o, children: r }) : u ? /* @__PURE__ */ s.jsx("strong", { className: l.trim(), ...o, children: u }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function an(t) {
  const {
    showAsterisk: r = !1,
    className: n = "",
    ...o
  } = t, { id: l } = Ee(), f = `arkyn_form_label ${r ? "show-asterisk" : ""} ${n}`;
  return /* @__PURE__ */ s.jsx("label", { ...o, className: f.trim(), htmlFor: l });
}
function sn(t) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    size: l = "md",
    icon: u,
    disabled: f,
    className: i = "",
    ...d
  } = t, h = { xs: 12, sm: 16, md: 20, lg: 24 }, g = `arkyn_icon_button ${o} ${n} ${l} loading_${r} ${i}`;
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      disabled: f || r,
      className: g.trim(),
      ...d,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ s.jsx(je, { size: h[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ s.jsx(u, { size: h[l], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function ke(t, r, n) {
  if (!t) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ s.jsx("p", { className: n, children: t });
  const o = t;
  return /* @__PURE__ */ s.jsx("p", { className: n, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function ot(t) {
  return t && t.replace(/[^0-9]/g, "");
}
function jt(t, r) {
  let n = "", o = 0;
  return Array.from(t).forEach((l, u) => {
    r[u + o].match(/[0-9]/) || (n += r[u + o], o++), n += l;
  }), n;
}
function Nt(t) {
  return t.length > 11 ? "CNPJ" : "CPF";
}
const it = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Rt = ot(it.CNPJ).length;
function nr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    defaultValue: a,
    readOnly: v,
    onFocus: P,
    onBlur: C,
    title: T,
    style: b,
    onChange: x,
    ...U
  } = t;
  function F(X) {
    let z = ot(X);
    const W = Nt(z);
    if (!(z.length > Rt))
      return z = jt(z, it[W]), z;
  }
  const N = g ? "right" : "left", O = `arkyn_input ${i ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${y || v || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, E = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: O,
    prefix: ke(i, E, "prefix"),
    sufix: ke(d, E, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    defaultValue: F(a || ""),
    disabled: y,
    readOnly: v,
    onFocus: P,
    onBlur: C,
    title: T,
    style: b,
    onChange: x,
    loadingPosition: N,
    iconSize: E,
    Spinner: /* @__PURE__ */ s.jsx(je, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...U
  };
}
function ar(t) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: l, id: u, error: f } = Ee(), i = l || o, d = t.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: N,
    RightIcon: A,
    Spinner: H,
    onChange: L,
    value: q,
    defaultValue: G,
    ...O
  } = nr({ ...t, id: u, isError: d }, r), [Q, E] = ge(G), X = x && !b, z = A && !b, W = T === "left" && b, ee = T === "right" && b;
  function j() {
    h || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function te(S) {
    let _ = ot(S.target.value);
    const K = Nt(_);
    _.length > Rt || (_ = jt(_, it[K]), S.target.value = _, E(_), L && L(S));
  }
  function fe(S) {
    n(!0), F && F(S);
  }
  function $(S) {
    n(!1), N && N(S);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: j,
      className: a,
      children: [
        v,
        W && H,
        X && /* @__PURE__ */ s.jsx(x, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: h || b,
            readOnly: U,
            ref: i,
            value: q || Q,
            onFocus: fe,
            onChange: te,
            onBlur: $,
            ...O
          }
        ),
        z && /* @__PURE__ */ s.jsx(A, { size: C, strokeWidth: 2.5 }),
        ee && H,
        P
      ]
    }
  );
}
function sr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    showCents: b = !1,
    max: x = 1e9,
    onChange: U,
    ...F
  } = t, N = g ? "right" : "left", O = `arkyn_input ${i ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${y || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, E = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: O,
    prefix: ke(i, E, "prefix"),
    sufix: ke(d, E, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    max: x,
    onChange: U,
    showCents: b,
    loadingPosition: N,
    iconSize: E,
    Spinner: /* @__PURE__ */ s.jsx(je, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...F
  };
}
const or = /^[1-9]{1}$/, ir = /^[0-9]{1}$/, yt = 8;
function lr(t, r) {
  if (t === 0) return "";
  const n = (t / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return r ? n : n.replace("R$", "").trim();
}
function cr(t) {
  const { currencyValue: r, event: n, max: o, setCurrencyValue: l } = t, { key: u, keyCode: f } = n;
  if (r === 0 && !or.test(u) || r !== 0 && !ir.test(u) && f !== yt)
    return;
  const i = r.toString();
  let d;
  if (f !== yt) {
    const h = r === 0 ? u : `${i}${u}`;
    d = Number.parseInt(h, 10);
  } else {
    const h = i.slice(0, -1);
    d = h === "" ? 0 : Number.parseInt(h, 10);
  }
  d > Number(o) || l(d);
}
function ur(t) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: l, id: u, error: f } = Ee(), i = l || o, d = t.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: N,
    RightIcon: A,
    Spinner: H,
    value: L,
    max: q,
    onKeyDown: G,
    onChange: O,
    showCents: Q,
    defaultValue: E,
    ...X
  } = sr({ ...t, id: u, isError: d }, r), [z, W] = ge(E * 100 || 0), ee = x && !b, j = A && !b, te = T === "left" && b, fe = T === "right" && b;
  function $() {
    h || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function S(ne) {
    cr({ currencyValue: z, event: ne, max: q, setCurrencyValue: W }), O && O(z / 100), G && G(ne);
  }
  function _(ne) {
    n(!0), F && F(ne);
  }
  function K(ne) {
    n(!1), N && N(ne);
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
        ee && /* @__PURE__ */ s.jsx(x, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            value: lr(L || z, Q),
            onKeyDown: S,
            disabled: h || b,
            readOnly: U,
            ref: i,
            onFocus: _,
            onBlur: K,
            onChange: () => {
            },
            ...X
          }
        ),
        fe && H,
        j && /* @__PURE__ */ s.jsx(A, { size: C, strokeWidth: 2.5 }),
        P
      ]
    }
  );
}
function dr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    showMask: x = !1,
    type: U,
    ...F
  } = t, N = g ? "right" : "left", O = `arkyn_input ${i ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${y || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, E = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: O,
    prefix: ke(i, E, "prefix"),
    sufix: ke(d, E, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    loadingPosition: N,
    iconSize: E,
    showMask: x,
    Spinner: /* @__PURE__ */ s.jsx(je, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...F
  };
}
const fr = Ht((t, r) => /* @__PURE__ */ s.jsx("input", { ref: r, ...t }));
function hr(t) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: l, id: u, error: f } = Ee(), i = l || o, d = t.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: N,
    RightIcon: A,
    Spinner: H,
    ...L
  } = dr({ ...t, id: u, isError: d }, r), q = x && !b, G = A && !b, O = T === "left" && b, Q = T === "right" && b;
  function E() {
    h || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function X(W) {
    n(!0), F && F(W);
  }
  function z(W) {
    n(!1), N && N(W);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: E,
      className: a,
      children: [
        v,
        O && H,
        q && /* @__PURE__ */ s.jsx(x, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          Gt,
          {
            component: fr,
            ref: i,
            onFocus: X,
            onBlur: z,
            ...L
          }
        ),
        G && /* @__PURE__ */ s.jsx(A, { size: C, strokeWidth: 2.5 }),
        Q && H,
        P
      ]
    }
  );
}
function mr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: d,
    leftIcon: h,
    rightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    ...x
  } = t, U = g ? "right" : "left", q = `arkyn_input ${i ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${y || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, O = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: q,
    prefix: ke(i, O, "prefix"),
    sufix: ke(d, O, "sufix"),
    LeftIcon: h,
    RightIcon: g,
    disabled: y,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: C,
    style: T,
    onChange: b,
    loadingPosition: U,
    iconSize: O,
    Spinner: /* @__PURE__ */ s.jsx(je, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...x
  };
}
function pr(t) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: l, id: u, error: f } = Ee(), i = l || o, d = t.isError || !!f, {
    disabled: h,
    title: g,
    style: y,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: C,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: x,
    readOnly: U,
    onFocus: F,
    onBlur: N,
    RightIcon: A,
    type: H,
    Spinner: L,
    ...q
  } = mr({ ...t, id: u, isError: d }, r), G = x && !b, O = A && !b, Q = T === "left" && b, E = T === "right" && b;
  function X() {
    h || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function z(ee) {
    n(!0), F && F(ee);
  }
  function W(ee) {
    n(!1), N && N(ee);
  }
  return H === "hidden" ? /* @__PURE__ */ s.jsx("input", { type: "hidden", ref: i, ...q }) : /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: g,
      style: y,
      onClick: X,
      className: a,
      children: [
        v,
        Q && L,
        G && /* @__PURE__ */ s.jsx(x, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: h || b,
            readOnly: U,
            ref: i,
            onFocus: z,
            onBlur: W,
            type: H,
            ...q
          }
        ),
        O && /* @__PURE__ */ s.jsx(A, { size: C, strokeWidth: 2.5 }),
        E && L,
        P
      ]
    }
  );
}
function on(t) {
  return t.type === "currency" ? /* @__PURE__ */ s.jsx(ur, { ...t }) : t.type === "masked" ? /* @__PURE__ */ s.jsx(hr, { ...t }) : t.type === "cpf-cnpj" ? /* @__PURE__ */ s.jsx(ar, { ...t }) : /* @__PURE__ */ s.jsx(pr, { ...t });
}
function ln(t) {
  const { className: r = "", ...n } = t, o = `arkyn_breadcrumb_container ${r}`;
  return /* @__PURE__ */ s.jsx("nav", { className: o, ...n });
}
function cn(t) {
  const { pathname: r } = Ct(), {
    className: n = "",
    disabled: o = !1,
    children: l,
    to: u,
    ...f
  } = t, d = `arkyn_breadcrumb_link ${r === u ? "active" : "inactive"} ${n}`;
  return o ? /* @__PURE__ */ s.jsxs("p", { className: d, children: [
    /* @__PURE__ */ s.jsx(pt, { size: 14, strokeWidth: 2.5 }),
    l
  ] }) : /* @__PURE__ */ s.jsxs(qt, { to: u, className: d, ...f, children: [
    /* @__PURE__ */ s.jsx(pt, { size: 14, strokeWidth: 2.5 }),
    l
  ] });
}
const $t = Ie({});
function un(t) {
  const {
    isVisibled: r,
    makeInvisible: n,
    orientation: o = "left",
    children: l,
    className: u,
    ...f
  } = t, i = o === "left" ? "-100%" : "100%", h = `arkyn_drawer_container ${o} ${r ? "visible" : ""} ${u}`;
  return /* @__PURE__ */ s.jsx($t.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ s.jsx(St, { children: r && /* @__PURE__ */ s.jsxs("aside", { className: h.trim(), ...f, children: [
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
        initial: { transform: `translateX(${i})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${i})` },
        children: l
      }
    )
  ] }) }) });
}
function dn(t) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: o,
    ...l
  } = t, { makeInvisible: u } = _e($t), f = `arkyn_drawer_header ${n}`;
  return /* @__PURE__ */ s.jsxs("header", { className: f.trim(), ...l, children: [
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
const Pt = Ie({});
function fn(t) {
  const {
    isVisibled: r,
    makeInvisible: n,
    children: o,
    className: l = "",
    ...u
  } = t, i = `arkyn_modal_container ${r ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ s.jsx(Pt.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ s.jsx(St, { children: r && /* @__PURE__ */ s.jsxs("aside", { className: i.trim(), ...u, children: [
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
function hn(t) {
  const { alignment: r = "right", className: n, ...o } = t, l = `arkyn_modal_footer ${r} ${n}`;
  return /* @__PURE__ */ s.jsx("footer", { className: l.trim(), ...o });
}
function mn(t) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: o,
    ...l
  } = t, { makeInvisible: u } = _e(Pt), f = `arkyn_modal_header ${n}`;
  return /* @__PURE__ */ s.jsxs("header", { className: f.trim(), ...l, children: [
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
function gr({ message: t, title: r, type: n, size: o = "lg" }) {
  const l = `arkyn_toast ${n} ${o}`;
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
  return /* @__PURE__ */ s.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("div", { className: "bg" }),
      /* @__PURE__ */ s.jsx(u, {})
    ] }),
    /* @__PURE__ */ s.jsxs("p", { children: [
      /* @__PURE__ */ s.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ s.jsx("span", { children: t })
    ] })
  ] });
}
function pn(t) {
  const {
    text: r,
    size: n = "lg",
    children: o,
    orientation: l = "top",
    className: u,
    ...f
  } = t, i = `arkyn_tooltip ${n} ${l} ${u}`;
  return /* @__PURE__ */ s.jsxs("div", { className: i.trim(), ...f, children: [
    o,
    /* @__PURE__ */ s.jsx("div", { className: "arkyn_tooltip-text", children: r })
  ] });
}
const lt = Ie({}), It = Ie({});
function vr() {
  const t = _e(It);
  if (Object.entries(t).length === 0)
    throw new Error("useToast must be used within a Provider");
  return t;
}
function br(t) {
  return t && typeof t.title == "string" && typeof t.message == "string" && (t.size === void 0 || t.size === "md" || t.size === "lg") && (t.type === "info" || t.type === "success" || t.type === "danger" || t.type === "warning");
}
function gn() {
  const t = Et(), { closeModal: r } = _e(lt), { showToast: n } = vr();
  mt(() => {
    const o = t == null ? void 0 : t.closeModalKey;
    o && r(o);
  }, [t]), mt(() => {
    const o = t == null ? void 0 : t.toast;
    br(o) && n(o);
  }, [t]);
}
const Tt = Ie({});
function vn(t) {
  const r = _e(Tt);
  if (Object.entries(r).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (t) {
    const {
      drawerData: n,
      drawerIsOpen: o,
      openDrawer: l,
      closeDrawer: u
    } = r, f = o(t), i = n(t);
    return { drawerIsOpen: f, drawerData: i, openDrawer: (g) => l(t, g == null ? void 0 : g.data), closeDrawer: () => u(t) };
  } else
    return r;
}
function bn(t) {
  const r = _e(lt);
  if (Object.entries(r).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (t) {
    const {
      modalData: n,
      modalIsOpen: o,
      openModal: l,
      closeModal: u
    } = r, f = o(t), i = n(t);
    return { modalIsOpen: f, modalData: i, openModal: (g) => l(t, g == null ? void 0 : g.data), closeModal: () => u(t) };
  } else
    return r;
}
function yn(t = "") {
  const r = Ct(), n = new URLSearchParams(r.search), o = t ? `${t}:` : "", l = (u) => {
    Object.entries(u).forEach(([f, i]) => {
      i === void 0 ? n.delete(`${o}${f}`) : n.set(`${o}${f}`, String(i));
    });
  };
  return {
    getParam: (u) => n.get(`${o}${u}`),
    getScopedSearch: (u) => {
      l(u);
      let f = n.toString();
      return f && (f = "?" + f), f;
    }
  };
}
function xn(t) {
  const { children: r = !1 } = t, [n, o] = ge([]);
  function l(d) {
    return !!n.some((h) => h.key === d);
  }
  function u(d) {
    var h;
    return (h = n.find((g) => g.key === d)) == null ? void 0 : h.data;
  }
  function f(d, h) {
    const g = l(d);
    o(g ? (y) => [...y.filter((v) => v.key !== d), { key: d, data: h }] : [...n, { key: d, data: h }]);
  }
  function i(d) {
    o(n.filter((h) => h.key !== d));
  }
  return /* @__PURE__ */ s.jsx(
    Tt.Provider,
    {
      value: { drawerIsOpen: l, drawerData: u, openDrawer: f, closeDrawer: i },
      children: r
    }
  );
}
function wn(t) {
  const { children: r = !1 } = t, [n, o] = ge([]);
  function l(d) {
    return !!n.some((h) => h.key === d);
  }
  function u(d) {
    var h;
    return (h = n.find((g) => g.key === d)) == null ? void 0 : h.data;
  }
  function f(d, h) {
    const g = l(d);
    o(g ? (y) => [...y.filter((v) => v.key !== d), { key: d, data: h }] : [...n, { key: d, data: h }]);
  }
  function i(d) {
    o(n.filter((h) => h.key !== d));
  }
  return /* @__PURE__ */ s.jsx(
    lt.Provider,
    {
      value: { modalIsOpen: l, modalData: u, openModal: f, closeModal: i },
      children: r
    }
  );
}
var yr = (t) => {
  switch (t) {
    case "success":
      return kr;
    case "info":
      return Cr;
    case "warning":
      return Er;
    case "error":
      return Sr;
    default:
      return null;
  }
}, xr = Array(12).fill(0), wr = ({ visible: t }) => m.createElement("div", { className: "sonner-loading-wrapper", "data-visible": t }, m.createElement("div", { className: "sonner-spinner" }, xr.map((r, n) => m.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), kr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Er = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Cr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Sr = m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, m.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), _r = () => {
  let [t, r] = m.useState(document.hidden);
  return m.useEffect(() => {
    let n = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), t;
}, st = 1, jr = class {
  constructor() {
    this.subscribe = (t) => (this.subscribers.push(t), () => {
      let r = this.subscribers.indexOf(t);
      this.subscribers.splice(r, 1);
    }), this.publish = (t) => {
      this.subscribers.forEach((r) => r(t));
    }, this.addToast = (t) => {
      this.publish(t), this.toasts = [...this.toasts, t];
    }, this.create = (t) => {
      var r;
      let { message: n, ...o } = t, l = typeof (t == null ? void 0 : t.id) == "number" || ((r = t.id) == null ? void 0 : r.length) > 0 ? t.id : st++, u = this.toasts.find((i) => i.id === l), f = t.dismissible === void 0 ? !0 : t.dismissible;
      return u ? this.toasts = this.toasts.map((i) => i.id === l ? (this.publish({ ...i, ...t, id: l, title: n }), { ...i, ...t, id: l, dismissible: f, title: n }) : i) : this.addToast({ title: n, ...o, dismissible: f, id: l }), l;
    }, this.dismiss = (t) => (t || this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }));
    }), this.subscribers.forEach((r) => r({ id: t, dismiss: !0 })), t), this.message = (t, r) => this.create({ ...r, message: t }), this.error = (t, r) => this.create({ ...r, message: t, type: "error" }), this.success = (t, r) => this.create({ ...r, type: "success", message: t }), this.info = (t, r) => this.create({ ...r, type: "info", message: t }), this.warning = (t, r) => this.create({ ...r, type: "warning", message: t }), this.loading = (t, r) => this.create({ ...r, type: "loading", message: t }), this.promise = (t, r) => {
      if (!r) return;
      let n;
      r.loading !== void 0 && (n = this.create({ ...r, promise: t, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      let o = t instanceof Promise ? t : t(), l = n !== void 0;
      return o.then(async (u) => {
        if (Rr(u) && !u.ok) {
          l = !1;
          let f = typeof r.error == "function" ? await r.error(`HTTP error! status: ${u.status}`) : r.error, i = typeof r.description == "function" ? await r.description(`HTTP error! status: ${u.status}`) : r.description;
          this.create({ id: n, type: "error", message: f, description: i });
        } else if (r.success !== void 0) {
          l = !1;
          let f = typeof r.success == "function" ? await r.success(u) : r.success, i = typeof r.description == "function" ? await r.description(u) : r.description;
          this.create({ id: n, type: "success", message: f, description: i });
        }
      }).catch(async (u) => {
        if (r.error !== void 0) {
          l = !1;
          let f = typeof r.error == "function" ? await r.error(u) : r.error, i = typeof r.description == "function" ? await r.description(u) : r.description;
          this.create({ id: n, type: "error", message: f, description: i });
        }
      }).finally(() => {
        var u;
        l && (this.dismiss(n), n = void 0), (u = r.finally) == null || u.call(r);
      }), n;
    }, this.custom = (t, r) => {
      let n = (r == null ? void 0 : r.id) || st++;
      return this.create({ jsx: t(n), id: n, ...r }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, de = new jr(), Nr = (t, r) => {
  let n = (r == null ? void 0 : r.id) || st++;
  return de.addToast({ title: t, ...r, id: n }), n;
}, Rr = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", $r = Nr, Pr = () => de.toasts, Ir = Object.assign($r, { success: de.success, info: de.info, warning: de.warning, error: de.error, custom: de.custom, message: de.message, promise: de.promise, dismiss: de.dismiss, loading: de.loading }, { getHistory: Pr });
function Tr(t, { insertAt: r } = {}) {
  if (!t || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
}
Tr(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Xe(t) {
  return t.label !== void 0;
}
var Or = 3, zr = "32px", Dr = 4e3, Fr = 356, Lr = 14, Mr = 20, Br = 200;
function Ar(...t) {
  return t.filter(Boolean).join(" ");
}
var Wr = (t) => {
  var r, n, o, l, u, f, i, d, h, g;
  let { invert: y, toast: a, unstyled: v, interacting: P, setHeights: C, visibleToasts: T, heights: b, index: x, toasts: U, expanded: F, removeToast: N, defaultRichColors: A, closeButton: H, style: L, cancelButtonStyle: q, actionButtonStyle: G, className: O = "", descriptionClassName: Q = "", duration: E, position: X, gap: z, loadingIcon: W, expandByDefault: ee, classNames: j, icons: te, closeButtonAriaLabel: fe = "Close toast", pauseWhenPageIsHidden: $, cn: S } = t, [_, K] = m.useState(!1), [ne, Y] = m.useState(!1), [ve, J] = m.useState(!1), [oe, le] = m.useState(!1), [Ge, Ne] = m.useState(0), [Ze, Ae] = m.useState(0), Ce = m.useRef(null), he = m.useRef(null), We = x === 0, Ve = x + 1 <= T, ae = a.type, xe = a.dismissible !== !1, Qe = a.className || "", Oe = a.descriptionClassName || "", Re = m.useMemo(() => b.findIndex((k) => k.toastId === a.id) || 0, [b, a.id]), et = m.useMemo(() => {
    var k;
    return (k = a.closeButton) != null ? k : H;
  }, [a.closeButton, H]), ze = m.useMemo(() => a.duration || E || Dr, [a.duration, E]), $e = m.useRef(0), me = m.useRef(0), Ye = m.useRef(0), ye = m.useRef(null), [De, Fe] = X.split("-"), He = m.useMemo(() => b.reduce((k, M, B) => B >= Re ? k : k + M.height, 0), [b, Re]), Ue = _r(), tt = a.invert || y, Le = ae === "loading";
  me.current = m.useMemo(() => Re * z + He, [Re, He]), m.useEffect(() => {
    K(!0);
  }, []), m.useLayoutEffect(() => {
    if (!_) return;
    let k = he.current, M = k.style.height;
    k.style.height = "auto";
    let B = k.getBoundingClientRect().height;
    k.style.height = M, Ae(B), C((se) => se.find((ce) => ce.toastId === a.id) ? se.map((ce) => ce.toastId === a.id ? { ...ce, height: B } : ce) : [{ toastId: a.id, height: B, position: a.position }, ...se]);
  }, [_, a.title, a.description, C, a.id]);
  let be = m.useCallback(() => {
    Y(!0), Ne(me.current), C((k) => k.filter((M) => M.toastId !== a.id)), setTimeout(() => {
      N(a);
    }, Br);
  }, [a, N, C, me]);
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
      return Ae(M), C((B) => [{ toastId: a.id, height: M, position: a.position }, ...B]), () => C((B) => B.filter((se) => se.toastId !== a.id));
    }
  }, [C, a.id]), m.useEffect(() => {
    a.delete && be();
  }, [be, a.delete]);
  function rt() {
    return te != null && te.loading ? m.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, te.loading) : W ? m.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, W) : m.createElement(wr, { visible: ae === "loading" });
  }
  return m.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: he, className: S(O, Qe, j == null ? void 0 : j.toast, (r = a == null ? void 0 : a.classNames) == null ? void 0 : r.toast, j == null ? void 0 : j.default, j == null ? void 0 : j[ae], (n = a == null ? void 0 : a.classNames) == null ? void 0 : n[ae]), "data-sonner-toast": "", "data-rich-colors": (o = a.richColors) != null ? o : A, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": _, "data-promise": !!a.promise, "data-removed": ne, "data-visible": Ve, "data-y-position": De, "data-x-position": Fe, "data-index": x, "data-front": We, "data-swiping": ve, "data-dismissible": xe, "data-type": ae, "data-invert": tt, "data-swipe-out": oe, "data-expanded": !!(F || ee && _), style: { "--index": x, "--toasts-before": x, "--z-index": U.length - x, "--offset": `${ne ? Ge : me.current}px`, "--initial-height": ee ? "auto" : `${Ze}px`, ...L, ...a.style }, onPointerDown: (k) => {
    Le || !xe || (Ce.current = /* @__PURE__ */ new Date(), Ne(me.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (J(!0), ye.current = { x: k.clientX, y: k.clientY }));
  }, onPointerUp: () => {
    var k, M, B, se;
    if (oe || !xe) return;
    ye.current = null;
    let ce = Number(((k = he.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), we = (/* @__PURE__ */ new Date()).getTime() - ((M = Ce.current) == null ? void 0 : M.getTime()), Ke = Math.abs(ce) / we;
    if (Math.abs(ce) >= Mr || Ke > 0.11) {
      Ne(me.current), (B = a.onDismiss) == null || B.call(a, a), be(), le(!0);
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
  }, className: S(j == null ? void 0 : j.closeButton, (l = a == null ? void 0 : a.classNames) == null ? void 0 : l.closeButton) }, m.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, m.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), m.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || m.isValidElement(a.title) ? a.jsx || a.title : m.createElement(m.Fragment, null, ae || a.icon || a.promise ? m.createElement("div", { "data-icon": "", className: S(j == null ? void 0 : j.icon, (u = a == null ? void 0 : a.classNames) == null ? void 0 : u.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || rt() : null, a.type !== "loading" ? a.icon || (te == null ? void 0 : te[ae]) || yr(ae) : null) : null, m.createElement("div", { "data-content": "", className: S(j == null ? void 0 : j.content, (f = a == null ? void 0 : a.classNames) == null ? void 0 : f.content) }, m.createElement("div", { "data-title": "", className: S(j == null ? void 0 : j.title, (i = a == null ? void 0 : a.classNames) == null ? void 0 : i.title) }, a.title), a.description ? m.createElement("div", { "data-description": "", className: S(Q, Oe, j == null ? void 0 : j.description, (d = a == null ? void 0 : a.classNames) == null ? void 0 : d.description) }, a.description) : null), m.isValidElement(a.cancel) ? a.cancel : a.cancel && Xe(a.cancel) ? m.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || q, onClick: (k) => {
    var M, B;
    Xe(a.cancel) && xe && ((B = (M = a.cancel).onClick) == null || B.call(M, k), be());
  }, className: S(j == null ? void 0 : j.cancelButton, (h = a == null ? void 0 : a.classNames) == null ? void 0 : h.cancelButton) }, a.cancel.label) : null, m.isValidElement(a.action) ? a.action : a.action && Xe(a.action) ? m.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || G, onClick: (k) => {
    var M, B;
    Xe(a.action) && (k.defaultPrevented || ((B = (M = a.action).onClick) == null || B.call(M, k), be()));
  }, className: S(j == null ? void 0 : j.actionButton, (g = a == null ? void 0 : a.classNames) == null ? void 0 : g.actionButton) }, a.action.label) : null));
};
function xt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
var Vr = (t) => {
  let { invert: r, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: l, closeButton: u, className: f, offset: i, theme: d = "light", richColors: h, duration: g, style: y, visibleToasts: a = Or, toastOptions: v, dir: P = xt(), gap: C = Lr, loadingIcon: T, icons: b, containerAriaLabel: x = "Notifications", pauseWhenPageIsHidden: U, cn: F = Ar } = t, [N, A] = m.useState([]), H = m.useMemo(() => Array.from(new Set([n].concat(N.filter(($) => $.position).map(($) => $.position)))), [N, n]), [L, q] = m.useState([]), [G, O] = m.useState(!1), [Q, E] = m.useState(!1), [X, z] = m.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = m.useRef(null), ee = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), j = m.useRef(null), te = m.useRef(!1), fe = m.useCallback(($) => {
    var S;
    (S = N.find((_) => _.id === $.id)) != null && S.delete || de.dismiss($.id), A((_) => _.filter(({ id: K }) => K !== $.id));
  }, [N]);
  return m.useEffect(() => de.subscribe(($) => {
    if ($.dismiss) {
      A((S) => S.map((_) => _.id === $.id ? { ..._, delete: !0 } : _));
      return;
    }
    setTimeout(() => {
      Zt.flushSync(() => {
        A((S) => {
          let _ = S.findIndex((K) => K.id === $.id);
          return _ !== -1 ? [...S.slice(0, _), { ...S[_], ...$ }, ...S.slice(_ + 1)] : [$, ...S];
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
    N.length <= 1 && O(!1);
  }, [N]), m.useEffect(() => {
    let $ = (S) => {
      var _, K;
      o.every((ne) => S[ne] || S.code === ne) && (O(!0), (_ = W.current) == null || _.focus()), S.code === "Escape" && (document.activeElement === W.current || (K = W.current) != null && K.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [o]), m.useEffect(() => {
    if (W.current) return () => {
      j.current && (j.current.focus({ preventScroll: !0 }), j.current = null, te.current = !1);
    };
  }, [W.current]), N.length ? m.createElement("section", { "aria-label": `${x} ${ee}`, tabIndex: -1 }, H.map(($, S) => {
    var _;
    let [K, ne] = $.split("-");
    return m.createElement("ol", { key: $, dir: P === "auto" ? xt() : P, tabIndex: -1, ref: W, className: f, "data-sonner-toaster": !0, "data-theme": X, "data-y-position": K, "data-x-position": ne, style: { "--front-toast-height": `${((_ = L[0]) == null ? void 0 : _.height) || 0}px`, "--offset": typeof i == "number" ? `${i}px` : i || zr, "--width": `${Fr}px`, "--gap": `${C}px`, ...y }, onBlur: (Y) => {
      te.current && !Y.currentTarget.contains(Y.relatedTarget) && (te.current = !1, j.current && (j.current.focus({ preventScroll: !0 }), j.current = null));
    }, onFocus: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || te.current || (te.current = !0, j.current = Y.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      Q || O(!1);
    }, onPointerDown: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || E(!0);
    }, onPointerUp: () => E(!1) }, N.filter((Y) => !Y.position && S === 0 || Y.position === $).map((Y, ve) => {
      var J, oe;
      return m.createElement(Wr, { key: Y.id, icons: b, index: ve, toast: Y, defaultRichColors: h, duration: (J = v == null ? void 0 : v.duration) != null ? J : g, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: r, visibleToasts: a, closeButton: (oe = v == null ? void 0 : v.closeButton) != null ? oe : u, interacting: Q, position: $, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: fe, toasts: N.filter((le) => le.position == Y.position), heights: L.filter((le) => le.position == Y.position), setHeights: q, expandByDefault: l, gap: C, loadingIcon: T, expanded: G, pauseWhenPageIsHidden: U, cn: F });
    }));
  })) : null;
};
function kn({ children: t }) {
  function r(n) {
    Ir.custom((o) => /* @__PURE__ */ s.jsx(gr, { ...n }));
  }
  return /* @__PURE__ */ s.jsxs(It.Provider, { value: { showToast: r }, children: [
    /* @__PURE__ */ s.jsx(Vr, {}),
    t
  ] });
}
export {
  qr as Badge,
  ln as BreadcrumbContainer,
  cn as BreadcrumbLink,
  tn as Button,
  rn as Checkbox,
  Gr as Divider,
  un as DrawerContainer,
  dn as DrawerHeader,
  xn as DrawerProvider,
  Qr as FormController,
  nn as FormError,
  an as FormLabel,
  sn as IconButton,
  on as Input,
  fn as ModalContainer,
  hn as ModalFooter,
  mn as ModalHeader,
  wn as ModalProvider,
  en as Select,
  Zr as Skeleton,
  gr as Toast,
  kn as ToastProvider,
  pn as Tooltip,
  gn as useAutomation,
  vn as useDrawer,
  bn as useModal,
  yn as useScopedParams,
  vr as useToast
};
