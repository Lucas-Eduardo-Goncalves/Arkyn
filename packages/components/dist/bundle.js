import h, { createContext as Pe, useRef as Te, useId as Ht, useContext as je, useState as ge, forwardRef as Ut, useEffect as pt } from "react";
import { Loader2 as Ne, Check as Et, ChevronDown as Kt, ChevronRight as gt, X as Ct } from "lucide-react";
import { useActionData as kt, useLocation as St, Link as Xt } from "@remix-run/react";
import { InputMask as Jt } from "@react-input/mask";
import { AnimatePresence as jt, motion as qe } from "framer-motion";
import qt from "react-dom";
var st = { exports: {} }, Be = {};
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
function Gt() {
  if (vt) return Be;
  vt = 1;
  var e = h, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(s, d, p) {
    var g, x = {}, a = null, v = null;
    p !== void 0 && (a = "" + p), d.key !== void 0 && (a = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (g in d) o.call(d, g) && !c.hasOwnProperty(g) && (x[g] = d[g]);
    if (s && s.defaultProps) for (g in d = s.defaultProps, d) x[g] === void 0 && (x[g] = d[g]);
    return { $$typeof: r, type: s, key: a, ref: v, props: x, _owner: i.current };
  }
  return Be.Fragment = n, Be.jsx = f, Be.jsxs = f, Be;
}
var Me = {};
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
function Zt() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = h, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), P = Symbol.iterator, k = "@@iterator";
    function T(t) {
      if (t === null || typeof t != "object")
        return null;
      var u = P && t[P] || t[k];
      return typeof u == "function" ? u : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(t) {
      {
        for (var u = arguments.length, m = new Array(u > 1 ? u - 1 : 0), w = 1; w < u; w++)
          m[w - 1] = arguments[w];
        U("error", t, m);
      }
    }
    function U(t, u, m) {
      {
        var w = b.ReactDebugCurrentFrame, D = w.getStackAddendum();
        D !== "" && (u += "%s", m = m.concat([D]));
        var V = m.map(function(I) {
          return String(I);
        });
        V.unshift("Warning: " + u), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var F = !1, R = !1, A = !1, H = !1, L = !1, q;
    q = Symbol.for("react.module.reference");
    function G(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === c || L || t === i || t === p || t === g || H || t === v || F || R || A || typeof t == "object" && t !== null && (t.$$typeof === a || t.$$typeof === x || t.$$typeof === f || t.$$typeof === s || t.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === q || t.getModuleId !== void 0));
    }
    function O(t, u, m) {
      var w = t.displayName;
      if (w)
        return w;
      var D = u.displayName || u.name || "";
      return D !== "" ? m + "(" + D + ")" : m;
    }
    function Q(t) {
      return t.displayName || "Context";
    }
    function C(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case i:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case s:
            var u = t;
            return Q(u) + ".Consumer";
          case f:
            var m = t;
            return Q(m._context) + ".Provider";
          case d:
            return O(t, t.render, "ForwardRef");
          case x:
            var w = t.displayName || null;
            return w !== null ? w : C(t.type) || "Memo";
          case a: {
            var D = t, V = D._payload, I = D._init;
            try {
              return C(I(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, z = 0, W, ee, N, te, fe, $, S;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function K() {
      {
        if (z === 0) {
          W = console.log, ee = console.info, N = console.warn, te = console.error, fe = console.group, $ = console.groupCollapsed, S = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: j,
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
              value: N
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
    function J(t, u, m) {
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
    function Re(t, u) {
      if (!t || oe)
        return "";
      {
        var m = le.get(t);
        if (m !== void 0)
          return m;
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
          for (var _ = ue.stack.split(`
`), ie = w.stack.split(`
`), Z = _.length - 1, re = ie.length - 1; Z >= 1 && re >= 0 && _[Z] !== ie[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (_[Z] !== ie[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || _[Z] !== ie[re]) {
                    var pe = `
` + _[Z].replace(" at new ", " at ");
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
    function Qe(t, u, m) {
      return Re(t, !1);
    }
    function Ae(t) {
      var u = t.prototype;
      return !!(u && u.isReactComponent);
    }
    function ke(t, u, m) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Re(t, Ae(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case p:
          return J("Suspense");
        case g:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case d:
            return Qe(t.render);
          case x:
            return ke(t.type, u, m);
          case a: {
            var w = t, D = w._payload, V = w._init;
            try {
              return ke(V(D), u, m);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, We = {}, Ve = b.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var u = t._owner, m = ke(t.type, t._source, u ? u.type : null);
        Ve.setExtraStackFrame(m);
      } else
        Ve.setExtraStackFrame(null);
    }
    function xe(t, u, m, w, D) {
      {
        var V = Function.call.bind(he);
        for (var I in t)
          if (V(t, I)) {
            var _ = void 0;
            try {
              if (typeof t[I] != "function") {
                var ie = Error((w || "React class") + ": " + m + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              _ = t[I](u, I, w, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              _ = Z;
            }
            _ && !(_ instanceof Error) && (ae(D), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", w || "React class", m, I, typeof _), ae(null)), _ instanceof Error && !(_.message in We) && (We[_.message] = !0, ae(D), y("Failed %s type: %s", m, _.message), ae(null));
          }
      }
    }
    var et = Array.isArray;
    function Oe(t) {
      return et(t);
    }
    function _e(t) {
      {
        var u = typeof Symbol == "function" && Symbol.toStringTag, m = u && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return m;
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
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", _e(t)), ze(t);
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
        var m = C(me.current.type);
        Fe[m] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(me.current.type), t.ref), Fe[m] = !0);
      }
    }
    function Le(t, u) {
      {
        var m = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function be(t, u) {
      {
        var m = function() {
          De || (De = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", u));
        };
        m.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var nt = function(t, u, m, w, D, V, I) {
      var _ = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: u,
        ref: m,
        props: I,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return _._store = {}, Object.defineProperty(_._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: w
      }), Object.defineProperty(_, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(_.props), Object.freeze(_)), _;
    };
    function E(t, u, m, w, D) {
      {
        var V, I = {}, _ = null, ie = null;
        m !== void 0 && ($e(m), _ = "" + m), Ue(u) && ($e(u.key), _ = "" + u.key), He(u) && (ie = u.ref, rt(u, D));
        for (V in u)
          he.call(u, V) && !Ye.hasOwnProperty(V) && (I[V] = u[V]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (V in Z)
            I[V] === void 0 && (I[V] = Z[V]);
        }
        if (_ || ie) {
          var re = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          _ && Le(I, re), ie && be(I, re);
        }
        return nt(t, _, ie, D, w, me.current, I);
      }
    }
    var B = b.ReactCurrentOwner, M = b.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var u = t._owner, m = ke(t.type, t._source, u ? u.type : null);
        M.setExtraStackFrame(m);
      } else
        M.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ke() {
      {
        if (B.current) {
          var t = C(B.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function zt(t) {
      {
        if (t !== void 0) {
          var u = t.fileName.replace(/^.*[\\\/]/, ""), m = t.lineNumber;
          return `

Check your code at ` + u + ":" + m + ".";
        }
        return "";
      }
    }
    var ut = {};
    function Dt(t) {
      {
        var u = Ke();
        if (!u) {
          var m = typeof t == "string" ? t : t.displayName || t.name;
          m && (u = `

Check the top-level render call using <` + m + ">.");
        }
        return u;
      }
    }
    function dt(t, u) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var m = Dt(u);
        if (ut[m])
          return;
        ut[m] = !0;
        var w = "";
        t && t._owner && t._owner !== B.current && (w = " It was passed a child from " + C(t._owner.type) + "."), se(t), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, w), se(null);
      }
    }
    function ft(t, u) {
      {
        if (typeof t != "object")
          return;
        if (Oe(t))
          for (var m = 0; m < t.length; m++) {
            var w = t[m];
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
    function Ft(t) {
      {
        var u = t.type;
        if (u == null || typeof u == "string")
          return;
        var m;
        if (typeof u == "function")
          m = u.propTypes;
        else if (typeof u == "object" && (u.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        u.$$typeof === x))
          m = u.propTypes;
        else
          return;
        if (m) {
          var w = C(u);
          xe(m, t.props, "prop", w, t);
        } else if (u.PropTypes !== void 0 && !ce) {
          ce = !0;
          var D = C(u);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof u.getDefaultProps == "function" && !u.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Lt(t) {
      {
        for (var u = Object.keys(t.props), m = 0; m < u.length; m++) {
          var w = u[m];
          if (w !== "children" && w !== "key") {
            se(t), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", w), se(null);
            break;
          }
        }
        t.ref !== null && (se(t), y("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ht = {};
    function mt(t, u, m, w, D, V) {
      {
        var I = G(t);
        if (!I) {
          var _ = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (_ += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = zt(D);
          ie ? _ += ie : _ += Ke();
          var Z;
          t === null ? Z = "null" : Oe(t) ? Z = "array" : t !== void 0 && t.$$typeof === r ? (Z = "<" + (C(t.type) || "Unknown") + " />", _ = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, _);
        }
        var re = E(t, u, m, D, V);
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
          var Se = C(t), ue = Object.keys(u).filter(function(Yt) {
            return Yt !== "key";
          }), at = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ht[Se + at]) {
            var Vt = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, Se, Vt, Se), ht[Se + at] = !0;
          }
        }
        return t === o ? Lt(re) : Ft(re), re;
      }
    }
    function Bt(t, u, m) {
      return mt(t, u, m, !0);
    }
    function Mt(t, u, m) {
      return mt(t, u, m, !1);
    }
    var At = Mt, Wt = Bt;
    Me.Fragment = o, Me.jsx = At, Me.jsxs = Wt;
  }()), Me;
}
process.env.NODE_ENV === "production" ? st.exports = Gt() : st.exports = Zt();
var l = st.exports;
function tn({ className: e, ...r }) {
  const n = "arkyn_skeleton " + e;
  return /* @__PURE__ */ l.jsx("div", { className: n.trim(), ...r });
}
function Ge(e, r) {
  return r ? /* @__PURE__ */ l.jsx(r, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ l.jsx(l.Fragment, {});
}
function Qt(e) {
  const {
    variant: r = "ghost",
    scheme: n = "primary",
    size: o = "md",
    leftIcon: i,
    rightIcon: c,
    className: f = "",
    children: s,
    ...d
  } = e, g = { md: 12, lg: 14 }[o];
  return {
    className: `arkyn_badge ${r} ${n} ${o} ${f}`.trim(),
    children: s,
    leftIcon: Ge(g, i),
    rightIcon: Ge(g, c),
    ...d
  };
}
function rn(e) {
  const { leftIcon: r, children: n, rightIcon: o, ...i } = Qt(e);
  return /* @__PURE__ */ l.jsxs("div", { ...i, children: [
    r,
    n,
    o
  ] });
}
function nn(e) {
  const {
    className: r,
    orientation: n = "horizontal",
    ...o
  } = e, i = `arkyn_divider ${n} ${r}`;
  return /* @__PURE__ */ l.jsx("div", { className: i, ...o });
}
function er(e, r, n) {
  if (!e) return /* @__PURE__ */ l.jsx(l.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ l.jsx("p", { className: n, children: e });
  const o = e;
  return /* @__PURE__ */ l.jsx("p", { className: n, children: /* @__PURE__ */ l.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function tr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: s,
    leftIcon: d,
    disabled: p,
    readOnly: g,
    onFocus: x,
    onBlur: a,
    title: v,
    style: P,
    isSearchable: k = !1,
    closeOnSelect: T = !0,
    ...b
  } = e, A = `arkyn_select ${s ? "hasPrefix" : ""} ${f} ${i} ${p || g || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, L = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: A,
    prefix: er(s, L, "prefix"),
    LeftIcon: d,
    disabled: p,
    readOnly: g,
    onFocus: x,
    onBlur: a,
    title: v,
    closeOnSelect: T,
    style: P,
    isSearchable: k,
    iconSize: L,
    Spinner: /* @__PURE__ */ l.jsx(Ne, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...b
  };
}
const Nt = Pe({});
function an({ children: e, ...r }) {
  var s, d;
  const n = kt(), o = Te(null), i = ((s = o.current) == null ? void 0 : s.name) || "", c = ((d = n == null ? void 0 : n.fieldErrors) == null ? void 0 : d[i]) || null, f = Ht();
  return /* @__PURE__ */ l.jsx(Nt.Provider, { value: { error: c, id: f, inputRef: o }, children: /* @__PURE__ */ l.jsx("section", { className: "arkyn_form_controller", ...r, children: e }) });
}
function Ce() {
  return je(Nt);
}
function sn(e) {
  var ve;
  const [r, n] = ge(!1), { inputRef: o, id: i, error: c } = Ce(), f = Te(null), s = o || f, d = e.isError || !!c, {
    disabled: p,
    title: g,
    style: x,
    className: a,
    prefix: v,
    iconSize: P,
    isLoading: k,
    LeftIcon: T,
    value: b = null,
    defaultValue: y = "",
    readOnly: U,
    onFocus: F,
    onBlur: R,
    Spinner: A,
    name: H,
    isSearchable: L,
    placeholder: q,
    onSelect: G,
    options: O,
    optionMaxHeight: Q,
    closeOnSelect: C,
    ...X
  } = tr({ ...e, id: i, isError: d }, r), [z, W] = ge(y), [ee, N] = ge("");
  function te() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function fe(J) {
    n(!0), F && F(J);
  }
  function $() {
    n(!1), R && s.current && s.current.blur();
  }
  function S(J) {
    const { label: oe, value: le } = J;
    W(z !== le ? le : ""), G && G({ label: oe, value: le }), C && (s.current.blur(), n(!1), console.log("fecha"));
  }
  const j = typeof b == "string" ? b : z, K = ((ve = O.find((J) => J.value === j)) == null ? void 0 : ve.label) || "", ne = () => {
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
  return /* @__PURE__ */ l.jsxs(l.Fragment, { children: [
    /* @__PURE__ */ l.jsxs(
      "section",
      {
        title: g,
        style: x,
        onClick: te,
        className: `${a} placeholder_dark_${ne()}`,
        children: [
          v,
          T && /* @__PURE__ */ l.jsx(T, { size: P, strokeWidth: 2.5 }),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              disabled: p || k,
              readOnly: !L,
              value: ee || "",
              placeholder: K || q,
              onFocus: fe,
              onBlur: () => N(""),
              ...X,
              onChange: (J) => N(J.target.value)
            }
          ),
          /* @__PURE__ */ l.jsx(
            "input",
            {
              type: "hidden",
              ref: s,
              name: H,
              value: j || "",
              readOnly: !0
            }
          ),
          r && /* @__PURE__ */ l.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: Q },
              children: [
                Y.map(({ label: J, value: oe }) => /* @__PURE__ */ l.jsxs(
                  "div",
                  {
                    onClick: () => S({ label: J, value: oe }),
                    className: j === oe ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      J,
                      " ",
                      /* @__PURE__ */ l.jsx(Et, {})
                    ]
                  },
                  oe
                )),
                Y.length <= 0 && /* @__PURE__ */ l.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !k && /* @__PURE__ */ l.jsx(
            Kt,
            {
              className: "arkyn_select_arrow",
              size: P,
              strokeWidth: 2.5
            }
          ),
          k && A
        ]
      }
    ),
    r && /* @__PURE__ */ l.jsx("aside", { className: "arkyn_select_overlay", onClick: $ })
  ] });
}
function rr(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    loadingText: i,
    size: c = "md",
    leftIcon: f,
    rightIcon: s,
    disabled: d,
    className: p = "",
    children: g,
    ...x
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[c];
  return {
    className: `arkyn_button loading_text_${!!i} ${o} ${n} ${c} loading_${r} ${p}`.trim(),
    loadingText: i,
    children: g,
    iconSize: v,
    disabled: d || r,
    leftIcon: Ge(v, f),
    rightIcon: Ge(v, s),
    ...x
  };
}
function on(e) {
  const { leftIcon: r, rightIcon: n, iconSize: o, children: i, loadingText: c, ...f } = rr(e);
  return /* @__PURE__ */ l.jsxs("button", { ...f, children: [
    /* @__PURE__ */ l.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ l.jsx(Ne, { size: o, strokeWidth: 2.5 }),
      c && c
    ] }),
    /* @__PURE__ */ l.jsxs("div", { className: "content", children: [
      r,
      i,
      n
    ] })
  ] });
}
function ln(e) {
  const {
    name: r,
    className: n = "",
    size: o = "md",
    isError: i,
    defaultChecked: c = !1,
    checked: f = null,
    onCheck: s,
    value: d,
    ...p
  } = e, { id: g, inputRef: x, error: a } = Ce(), v = i || !!a, [P, k] = ge(c || !1), T = typeof f == "boolean" ? f : P, b = `arkyn_checkbox ${o} ${v ? "error" : ""} ${T ? "checked" : ""} ${n}`;
  function y() {
    const U = P;
    k(!U), s && s(U ? "" : d || "checked");
  }
  return /* @__PURE__ */ l.jsxs("div", { id: g, className: b, onClick: y, ...p, children: [
    /* @__PURE__ */ l.jsx(
      "input",
      {
        type: "hidden",
        name: r,
        ref: x,
        value: T ? d || "checked" : ""
      }
    ),
    /* @__PURE__ */ l.jsx(Et, {})
  ] });
}
function cn({ children: e }) {
  const { error: r } = Ce();
  return e ? /* @__PURE__ */ l.jsx("strong", { className: "arkyn_form_error", children: e }) : r ? /* @__PURE__ */ l.jsx("strong", { className: "arkyn_form_error", children: r }) : /* @__PURE__ */ l.jsx(l.Fragment, {});
}
function nr(e) {
  const { showAsterisk: r = !1, className: n = "", ...o } = e;
  return {
    className: `arkyn_form_label ${r ? "show-asterisk" : ""} ${n}`.trim(),
    ...o
  };
}
function un(e) {
  const { id: r } = Ce();
  return /* @__PURE__ */ l.jsx("label", { ...nr(e), htmlFor: r });
}
const yt = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function dn(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    size: i = "md",
    icon: c,
    disabled: f,
    className: s = "",
    ...d
  } = e, p = `arkyn_icon_button ${o} ${n} ${i} loading_${r} ${s}`;
  return /* @__PURE__ */ l.jsxs(
    "button",
    {
      disabled: f || r,
      className: p.trim(),
      ...d,
      children: [
        /* @__PURE__ */ l.jsx("div", { className: "spinner", children: /* @__PURE__ */ l.jsx(Ne, { size: yt[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ l.jsx("div", { className: "content " + i, children: /* @__PURE__ */ l.jsx(c, { size: yt[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ee(e, r, n) {
  if (!e) return /* @__PURE__ */ l.jsx(l.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ l.jsx("p", { className: n, children: e });
  const o = e;
  return /* @__PURE__ */ l.jsx("p", { className: n, children: /* @__PURE__ */ l.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function it(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function Rt(e, r) {
  let n = "", o = 0;
  return Array.from(e).forEach((i, c) => {
    r[c + o].match(/[0-9]/) || (n += r[c + o], o++), n += i;
  }), n;
}
function _t(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const lt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, $t = it(lt.CNPJ).length;
function ar(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: x,
    defaultValue: a,
    readOnly: v,
    onFocus: P,
    onBlur: k,
    title: T,
    style: b,
    onChange: y,
    ...U
  } = e;
  function F(X) {
    let z = it(X);
    const W = _t(z);
    if (!(z.length > $t))
      return z = Rt(z, lt[W]), z;
  }
  const R = g ? "right" : "left", O = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || v || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, C = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(s, C, "prefix"),
    sufix: Ee(d, C, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    defaultValue: F(a || ""),
    disabled: x,
    readOnly: v,
    onFocus: P,
    onBlur: k,
    title: T,
    style: b,
    onChange: y,
    loadingPosition: R,
    iconSize: C,
    Spinner: /* @__PURE__ */ l.jsx(Ne, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...U
  };
}
function sr(e) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: i, id: c, error: f } = Ce(), s = i || o, d = e.isError || !!f, {
    disabled: p,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: k,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: R,
    RightIcon: A,
    Spinner: H,
    onChange: L,
    value: q,
    defaultValue: G,
    ...O
  } = ar({ ...e, id: c, isError: d }, r), [Q, C] = ge(G), X = y && !b, z = A && !b, W = T === "left" && b, ee = T === "right" && b;
  function N() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function te(S) {
    let j = it(S.target.value);
    const K = _t(j);
    j.length > $t || (j = Rt(j, lt[K]), S.target.value = j, C(j), L && L(S));
  }
  function fe(S) {
    n(!0), F && F(S);
  }
  function $(S) {
    n(!1), R && R(S);
  }
  return /* @__PURE__ */ l.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: N,
      className: a,
      children: [
        v,
        W && H,
        X && /* @__PURE__ */ l.jsx(y, { size: k, strokeWidth: 2.5 }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            disabled: p || b,
            readOnly: U,
            ref: s,
            value: q || Q,
            onFocus: fe,
            onChange: te,
            onBlur: $,
            ...O
          }
        ),
        z && /* @__PURE__ */ l.jsx(A, { size: k, strokeWidth: 2.5 }),
        ee && H,
        P
      ]
    }
  );
}
function or(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: k,
    style: T,
    showCents: b = !1,
    max: y = 1e9,
    onChange: U,
    ...F
  } = e, R = g ? "right" : "left", O = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, C = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(s, C, "prefix"),
    sufix: Ee(d, C, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: k,
    style: T,
    max: y,
    onChange: U,
    showCents: b,
    loadingPosition: R,
    iconSize: C,
    Spinner: /* @__PURE__ */ l.jsx(Ne, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...F
  };
}
const ir = /^[1-9]{1}$/, lr = /^[0-9]{1}$/, xt = 8;
function cr(e, r) {
  if (e === 0) return "";
  const n = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return r ? n : n.replace("R$", "").trim();
}
function ur(e) {
  const { currencyValue: r, event: n, max: o, setCurrencyValue: i } = e, { key: c, keyCode: f } = n;
  if (r === 0 && !ir.test(c) || r !== 0 && !lr.test(c) && f !== xt)
    return;
  const s = r.toString();
  let d;
  if (f !== xt) {
    const p = r === 0 ? c : `${s}${c}`;
    d = Number.parseInt(p, 10);
  } else {
    const p = s.slice(0, -1);
    d = p === "" ? 0 : Number.parseInt(p, 10);
  }
  d > Number(o) || i(d);
}
function dr(e) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: i, id: c, error: f } = Ce(), s = i || o, d = e.isError || !!f, {
    disabled: p,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: k,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: R,
    RightIcon: A,
    Spinner: H,
    value: L,
    max: q,
    onKeyDown: G,
    onChange: O,
    showCents: Q,
    defaultValue: C,
    ...X
  } = or({ ...e, id: c, isError: d }, r), [z, W] = ge(C * 100 || 0), ee = y && !b, N = A && !b, te = T === "left" && b, fe = T === "right" && b;
  function $() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function S(ne) {
    ur({ currencyValue: z, event: ne, max: q, setCurrencyValue: W }), O && O(z / 100), G && G(ne);
  }
  function j(ne) {
    n(!0), F && F(ne);
  }
  function K(ne) {
    n(!1), R && R(ne);
  }
  return /* @__PURE__ */ l.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: $,
      className: a,
      children: [
        v,
        te && H,
        ee && /* @__PURE__ */ l.jsx(y, { size: k, strokeWidth: 2.5 }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            value: cr(L || z, Q),
            onKeyDown: S,
            disabled: p || b,
            readOnly: U,
            ref: s,
            onFocus: j,
            onBlur: K,
            onChange: () => {
            },
            ...X
          }
        ),
        fe && H,
        N && /* @__PURE__ */ l.jsx(A, { size: k, strokeWidth: 2.5 }),
        P
      ]
    }
  );
}
function fr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: k,
    style: T,
    onChange: b,
    showMask: y = !1,
    type: U,
    ...F
  } = e, R = g ? "right" : "left", O = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, C = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(s, C, "prefix"),
    sufix: Ee(d, C, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: k,
    style: T,
    onChange: b,
    loadingPosition: R,
    iconSize: C,
    showMask: y,
    Spinner: /* @__PURE__ */ l.jsx(Ne, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...F
  };
}
const hr = Ut((e, r) => /* @__PURE__ */ l.jsx("input", { ref: r, ...e }));
function mr(e) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: i, id: c, error: f } = Ce(), s = i || o, d = e.isError || !!f, {
    disabled: p,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: k,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: R,
    RightIcon: A,
    Spinner: H,
    ...L
  } = fr({ ...e, id: c, isError: d }, r), q = y && !b, G = A && !b, O = T === "left" && b, Q = T === "right" && b;
  function C() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function X(W) {
    n(!0), F && F(W);
  }
  function z(W) {
    n(!1), R && R(W);
  }
  return /* @__PURE__ */ l.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: C,
      className: a,
      children: [
        v,
        O && H,
        q && /* @__PURE__ */ l.jsx(y, { size: k, strokeWidth: 2.5 }),
        /* @__PURE__ */ l.jsx(
          Jt,
          {
            component: hr,
            ref: s,
            onFocus: X,
            onBlur: z,
            ...L
          }
        ),
        G && /* @__PURE__ */ l.jsx(A, { size: k, strokeWidth: 2.5 }),
        Q && H,
        P
      ]
    }
  );
}
function pr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: k,
    style: T,
    onChange: b,
    ...y
  } = e, U = g ? "right" : "left", q = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${i} ${x || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, O = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: q,
    prefix: Ee(s, O, "prefix"),
    sufix: Ee(d, O, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    disabled: x,
    readOnly: a,
    onFocus: v,
    onBlur: P,
    title: k,
    style: T,
    onChange: b,
    loadingPosition: U,
    iconSize: O,
    Spinner: /* @__PURE__ */ l.jsx(Ne, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...y
  };
}
function gr(e) {
  const [r, n] = ge(!1), o = Te(null), { inputRef: i, id: c, error: f } = Ce(), s = i || o, d = e.isError || !!f, {
    disabled: p,
    title: g,
    style: x,
    className: a,
    prefix: v,
    sufix: P,
    iconSize: k,
    loadingPosition: T,
    isLoading: b,
    LeftIcon: y,
    readOnly: U,
    onFocus: F,
    onBlur: R,
    RightIcon: A,
    type: H,
    Spinner: L,
    ...q
  } = pr({ ...e, id: c, isError: d }, r), G = y && !b, O = A && !b, Q = T === "left" && b, C = T === "right" && b;
  function X() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function z(ee) {
    n(!0), F && F(ee);
  }
  function W(ee) {
    n(!1), R && R(ee);
  }
  return H === "hidden" ? /* @__PURE__ */ l.jsx("input", { type: "hidden", ref: s, ...q }) : /* @__PURE__ */ l.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: X,
      className: a,
      children: [
        v,
        Q && L,
        G && /* @__PURE__ */ l.jsx(y, { size: k, strokeWidth: 2.5 }),
        /* @__PURE__ */ l.jsx(
          "input",
          {
            disabled: p || b,
            readOnly: U,
            ref: s,
            onFocus: z,
            onBlur: W,
            type: H,
            ...q
          }
        ),
        O && /* @__PURE__ */ l.jsx(A, { size: k, strokeWidth: 2.5 }),
        C && L,
        P
      ]
    }
  );
}
function fn(e) {
  return e.type === "currency" ? /* @__PURE__ */ l.jsx(dr, { ...e }) : e.type === "masked" ? /* @__PURE__ */ l.jsx(mr, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ l.jsx(sr, { ...e }) : /* @__PURE__ */ l.jsx(gr, { ...e });
}
function vr(e) {
  const { className: r = "", ...n } = e;
  return { className: `arkyn_breadcrumb ${r}`.trim(), ...n };
}
function br(e) {
  const { pathname: r } = St(), {
    className: n = "",
    disabled: o = !1,
    to: i,
    ...c
  } = e, f = r === i ? "active" : "inactive", s = `arkyn_breadcrumb_link ${f} ${n}`;
  return {
    to: i,
    className: s.trim(),
    disabled: o || f === "active",
    ...c
  };
}
function hn(e) {
  const { className: r, ...n } = vr(e);
  return /* @__PURE__ */ l.jsx("nav", { className: r, ...n });
}
function mn(e) {
  const { children: r, className: n, disabled: o, ...i } = br(e);
  return o ? /* @__PURE__ */ l.jsxs("p", { className: n, children: [
    /* @__PURE__ */ l.jsx(gt, { size: 14, strokeWidth: 2.5 }),
    r
  ] }) : /* @__PURE__ */ l.jsxs(Xt, { className: n, ...i, children: [
    /* @__PURE__ */ l.jsx(gt, { size: 14, strokeWidth: 2.5 }),
    r
  ] });
}
const It = Pe({});
function yr(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    children: o,
    className: i = "",
    ...c
  } = e, s = `arkyn_modal_container ${r ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ l.jsx(It.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ l.jsx(jt, { children: r && /* @__PURE__ */ l.jsxs("aside", { className: s.trim(), ...c, children: [
    /* @__PURE__ */ l.jsx(
      qe.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ l.jsx(
      qe.div,
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
function xr(e) {
  const { alignment: r = "right", className: n, ...o } = e, i = `arkyn_modal_footer ${r} ${n}`;
  return /* @__PURE__ */ l.jsx("footer", { className: i.trim(), ...o });
}
function wr(e) {
  const { showCloseButton: r, className: n, children: o, ...i } = e, { makeInvisible: c } = je(It), s = `arkyn_modal_header ${r ? "show-close" : ""} ${n}`;
  return /* @__PURE__ */ l.jsxs("header", { className: s.trim(), ...i, children: [
    o,
    /* @__PURE__ */ l.jsx("button", { type: "button", onClick: c, children: /* @__PURE__ */ l.jsx(Ct, { size: 24 }) })
  ] });
}
const pn = { Container: yr, Header: wr, Footer: xr }, Pt = Pe({});
function Er(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    orientation: o,
    children: i,
    className: c,
    ...f
  } = e, s = o === "left" ? "-100%" : "100%", p = `arkyn_drawer_container ${o} ${r ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ l.jsx(Pt.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ l.jsx(jt, { children: r && /* @__PURE__ */ l.jsxs("aside", { className: p.trim(), ...f, children: [
    /* @__PURE__ */ l.jsx(
      qe.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ l.jsx(
      qe.div,
      {
        className: "content",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${s})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${s})` },
        children: i
      }
    )
  ] }) }) });
}
function Cr(e) {
  const { showCloseButton: r, className: n, children: o, ...i } = e, { makeInvisible: c } = je(Pt), s = `arkyn_drawer_header ${r ? "show-close" : ""} ${n}`;
  return /* @__PURE__ */ l.jsxs("header", { className: s.trim(), ...i, children: [
    o,
    /* @__PURE__ */ l.jsx("button", { type: "button", onClick: c, children: /* @__PURE__ */ l.jsx(Ct, { size: 24 }) })
  ] });
}
const gn = { Container: Er, Header: Cr };
function vn(e) {
  const {
    text: r,
    size: n = "lg",
    children: o,
    orientation: i = "top",
    className: c,
    ...f
  } = e;
  return /* @__PURE__ */ l.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${n} ${i} ${c}`,
      ...f,
      children: [
        o,
        /* @__PURE__ */ l.jsx("div", { className: "arkyn_tooltip_text", children: r })
      ]
    }
  );
}
const ct = Pe({}), Tt = Pe({});
function kr() {
  const e = je(Tt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function bn() {
  const e = kt(), { closeModal: r } = je(ct), { successToast: n, errorToast: o } = kr();
  pt(() => {
    const i = e == null ? void 0 : e.closeModalKey;
    i && r(i);
  }, [e]), pt(() => {
    typeof (e == null ? void 0 : e.message) == "string" && typeof (e == null ? void 0 : e.success) == "boolean" && e.message !== "" && (e != null && e.success ? n(e == null ? void 0 : e.message) : o(e == null ? void 0 : e.message));
  }, [e]);
}
const Ot = Pe({});
function yn(e) {
  const r = je(Ot);
  if (Object.entries(r).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: n,
      drawerIsOpen: o,
      openDrawer: i,
      closeDrawer: c
    } = r, f = o(e), s = n(e);
    return { drawerIsOpen: f, drawerData: s, openDrawer: (g) => i(e, g == null ? void 0 : g.data), closeDrawer: () => c(e) };
  } else
    return r;
}
function xn(e) {
  const r = je(ct);
  if (Object.entries(r).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: n,
      modalIsOpen: o,
      openModal: i,
      closeModal: c
    } = r, f = o(e), s = n(e);
    return { modalIsOpen: f, modalData: s, openModal: (g) => i(e, g == null ? void 0 : g.data), closeModal: () => c(e) };
  } else
    return r;
}
function wn(e = "") {
  const r = St(), n = new URLSearchParams(r.search), o = e ? `${e}:` : "", i = (c) => {
    Object.entries(c).forEach(([f, s]) => {
      s === void 0 ? n.delete(`${o}${f}`) : n.set(`${o}${f}`, String(s));
    });
  };
  return {
    getParam: (c) => n.get(`${o}${c}`),
    getScopedSearch: (c) => {
      i(c);
      let f = n.toString();
      return f && (f = "?" + f), f;
    }
  };
}
function En(e) {
  const { children: r = !1 } = e, [n, o] = ge([]);
  function i(d) {
    return !!n.some((p) => p.key === d);
  }
  function c(d) {
    var p;
    return (p = n.find((g) => g.key === d)) == null ? void 0 : p.data;
  }
  function f(d, p) {
    const g = i(d);
    o(g ? (x) => [...x.filter((v) => v.key !== d), { key: d, data: p }] : [...n, { key: d, data: p }]);
  }
  function s(d) {
    o(n.filter((p) => p.key !== d));
  }
  return /* @__PURE__ */ l.jsx(
    Ot.Provider,
    {
      value: { drawerIsOpen: i, drawerData: c, openDrawer: f, closeDrawer: s },
      children: r
    }
  );
}
function Cn(e) {
  const { children: r = !1 } = e, [n, o] = ge([]);
  function i(d) {
    return !!n.some((p) => p.key === d);
  }
  function c(d) {
    var p;
    return (p = n.find((g) => g.key === d)) == null ? void 0 : p.data;
  }
  function f(d, p) {
    const g = i(d);
    o(g ? (x) => [...x.filter((v) => v.key !== d), { key: d, data: p }] : [...n, { key: d, data: p }]);
  }
  function s(d) {
    o(n.filter((p) => p.key !== d));
  }
  return /* @__PURE__ */ l.jsx(
    ct.Provider,
    {
      value: { modalIsOpen: i, modalData: c, openModal: f, closeModal: s },
      children: r
    }
  );
}
var Sr = (e) => {
  switch (e) {
    case "success":
      return Rr;
    case "info":
      return $r;
    case "warning":
      return _r;
    case "error":
      return Ir;
    default:
      return null;
  }
}, jr = Array(12).fill(0), Nr = ({ visible: e }) => h.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, h.createElement("div", { className: "sonner-spinner" }, jr.map((r, n) => h.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), Rr = h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, h.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), _r = h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, h.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), $r = h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, h.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Ir = h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, h.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Pr = () => {
  let [e, r] = h.useState(document.hidden);
  return h.useEffect(() => {
    let n = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, ot = 1, Tr = class {
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
      let { message: n, ...o } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : ot++, c = this.toasts.find((s) => s.id === i), f = e.dismissible === void 0 ? !0 : e.dismissible;
      return c ? this.toasts = this.toasts.map((s) => s.id === i ? (this.publish({ ...s, ...e, id: i, title: n }), { ...s, ...e, id: i, dismissible: f, title: n }) : s) : this.addToast({ title: n, ...o, dismissible: f, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }));
    }), this.subscribers.forEach((r) => r({ id: e, dismiss: !0 })), e), this.message = (e, r) => this.create({ ...r, message: e }), this.error = (e, r) => this.create({ ...r, message: e, type: "error" }), this.success = (e, r) => this.create({ ...r, type: "success", message: e }), this.info = (e, r) => this.create({ ...r, type: "info", message: e }), this.warning = (e, r) => this.create({ ...r, type: "warning", message: e }), this.loading = (e, r) => this.create({ ...r, type: "loading", message: e }), this.promise = (e, r) => {
      if (!r) return;
      let n;
      r.loading !== void 0 && (n = this.create({ ...r, promise: e, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      let o = e instanceof Promise ? e : e(), i = n !== void 0;
      return o.then(async (c) => {
        if (zr(c) && !c.ok) {
          i = !1;
          let f = typeof r.error == "function" ? await r.error(`HTTP error! status: ${c.status}`) : r.error, s = typeof r.description == "function" ? await r.description(`HTTP error! status: ${c.status}`) : r.description;
          this.create({ id: n, type: "error", message: f, description: s });
        } else if (r.success !== void 0) {
          i = !1;
          let f = typeof r.success == "function" ? await r.success(c) : r.success, s = typeof r.description == "function" ? await r.description(c) : r.description;
          this.create({ id: n, type: "success", message: f, description: s });
        }
      }).catch(async (c) => {
        if (r.error !== void 0) {
          i = !1;
          let f = typeof r.error == "function" ? await r.error(c) : r.error, s = typeof r.description == "function" ? await r.description(c) : r.description;
          this.create({ id: n, type: "error", message: f, description: s });
        }
      }).finally(() => {
        var c;
        i && (this.dismiss(n), n = void 0), (c = r.finally) == null || c.call(r);
      }), n;
    }, this.custom = (e, r) => {
      let n = (r == null ? void 0 : r.id) || ot++;
      return this.create({ jsx: e(n), id: n, ...r }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, de = new Tr(), Or = (e, r) => {
  let n = (r == null ? void 0 : r.id) || ot++;
  return de.addToast({ title: e, ...r, id: n }), n;
}, zr = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Dr = Or, Fr = () => de.toasts, Xe = Object.assign(Dr, { success: de.success, info: de.info, warning: de.warning, error: de.error, custom: de.custom, message: de.message, promise: de.promise, dismiss: de.dismiss, loading: de.loading }, { getHistory: Fr });
function Lr(e, { insertAt: r } = {}) {
  if (!e || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
Lr(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Je(e) {
  return e.label !== void 0;
}
var Br = 3, Mr = "32px", Ar = 4e3, Wr = 356, Vr = 14, Yr = 20, Hr = 200;
function Ur(...e) {
  return e.filter(Boolean).join(" ");
}
var Kr = (e) => {
  var r, n, o, i, c, f, s, d, p, g;
  let { invert: x, toast: a, unstyled: v, interacting: P, setHeights: k, visibleToasts: T, heights: b, index: y, toasts: U, expanded: F, removeToast: R, defaultRichColors: A, closeButton: H, style: L, cancelButtonStyle: q, actionButtonStyle: G, className: O = "", descriptionClassName: Q = "", duration: C, position: X, gap: z, loadingIcon: W, expandByDefault: ee, classNames: N, icons: te, closeButtonAriaLabel: fe = "Close toast", pauseWhenPageIsHidden: $, cn: S } = e, [j, K] = h.useState(!1), [ne, Y] = h.useState(!1), [ve, J] = h.useState(!1), [oe, le] = h.useState(!1), [Ze, Re] = h.useState(0), [Qe, Ae] = h.useState(0), ke = h.useRef(null), he = h.useRef(null), We = y === 0, Ve = y + 1 <= T, ae = a.type, xe = a.dismissible !== !1, et = a.className || "", Oe = a.descriptionClassName || "", _e = h.useMemo(() => b.findIndex((E) => E.toastId === a.id) || 0, [b, a.id]), tt = h.useMemo(() => {
    var E;
    return (E = a.closeButton) != null ? E : H;
  }, [a.closeButton, H]), ze = h.useMemo(() => a.duration || C || Ar, [a.duration, C]), $e = h.useRef(0), me = h.useRef(0), Ye = h.useRef(0), ye = h.useRef(null), [De, Fe] = X.split("-"), He = h.useMemo(() => b.reduce((E, B, M) => M >= _e ? E : E + B.height, 0), [b, _e]), Ue = Pr(), rt = a.invert || x, Le = ae === "loading";
  me.current = h.useMemo(() => _e * z + He, [_e, He]), h.useEffect(() => {
    K(!0);
  }, []), h.useLayoutEffect(() => {
    if (!j) return;
    let E = he.current, B = E.style.height;
    E.style.height = "auto";
    let M = E.getBoundingClientRect().height;
    E.style.height = B, Ae(M), k((se) => se.find((ce) => ce.toastId === a.id) ? se.map((ce) => ce.toastId === a.id ? { ...ce, height: M } : ce) : [{ toastId: a.id, height: M, position: a.position }, ...se]);
  }, [j, a.title, a.description, k, a.id]);
  let be = h.useCallback(() => {
    Y(!0), Re(me.current), k((E) => E.filter((B) => B.toastId !== a.id)), setTimeout(() => {
      R(a);
    }, Hr);
  }, [a, R, k, me]);
  h.useEffect(() => {
    if (a.promise && ae === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
    let E, B = ze;
    return F || P || $ && Ue ? (() => {
      if (Ye.current < $e.current) {
        let M = (/* @__PURE__ */ new Date()).getTime() - $e.current;
        B = B - M;
      }
      Ye.current = (/* @__PURE__ */ new Date()).getTime();
    })() : B !== 1 / 0 && ($e.current = (/* @__PURE__ */ new Date()).getTime(), E = setTimeout(() => {
      var M;
      (M = a.onAutoClose) == null || M.call(a, a), be();
    }, B)), () => clearTimeout(E);
  }, [F, P, ee, a, ze, be, a.promise, ae, $, Ue]), h.useEffect(() => {
    let E = he.current;
    if (E) {
      let B = E.getBoundingClientRect().height;
      return Ae(B), k((M) => [{ toastId: a.id, height: B, position: a.position }, ...M]), () => k((M) => M.filter((se) => se.toastId !== a.id));
    }
  }, [k, a.id]), h.useEffect(() => {
    a.delete && be();
  }, [be, a.delete]);
  function nt() {
    return te != null && te.loading ? h.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, te.loading) : W ? h.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, W) : h.createElement(Nr, { visible: ae === "loading" });
  }
  return h.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: he, className: S(O, et, N == null ? void 0 : N.toast, (r = a == null ? void 0 : a.classNames) == null ? void 0 : r.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[ae], (n = a == null ? void 0 : a.classNames) == null ? void 0 : n[ae]), "data-sonner-toast": "", "data-rich-colors": (o = a.richColors) != null ? o : A, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": j, "data-promise": !!a.promise, "data-removed": ne, "data-visible": Ve, "data-y-position": De, "data-x-position": Fe, "data-index": y, "data-front": We, "data-swiping": ve, "data-dismissible": xe, "data-type": ae, "data-invert": rt, "data-swipe-out": oe, "data-expanded": !!(F || ee && j), style: { "--index": y, "--toasts-before": y, "--z-index": U.length - y, "--offset": `${ne ? Ze : me.current}px`, "--initial-height": ee ? "auto" : `${Qe}px`, ...L, ...a.style }, onPointerDown: (E) => {
    Le || !xe || (ke.current = /* @__PURE__ */ new Date(), Re(me.current), E.target.setPointerCapture(E.pointerId), E.target.tagName !== "BUTTON" && (J(!0), ye.current = { x: E.clientX, y: E.clientY }));
  }, onPointerUp: () => {
    var E, B, M, se;
    if (oe || !xe) return;
    ye.current = null;
    let ce = Number(((E = he.current) == null ? void 0 : E.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), we = (/* @__PURE__ */ new Date()).getTime() - ((B = ke.current) == null ? void 0 : B.getTime()), Ke = Math.abs(ce) / we;
    if (Math.abs(ce) >= Yr || Ke > 0.11) {
      Re(me.current), (M = a.onDismiss) == null || M.call(a, a), be(), le(!0);
      return;
    }
    (se = he.current) == null || se.style.setProperty("--swipe-amount", "0px"), J(!1);
  }, onPointerMove: (E) => {
    var B;
    if (!ye.current || !xe) return;
    let M = E.clientY - ye.current.y, se = E.clientX - ye.current.x, ce = (De === "top" ? Math.min : Math.max)(0, M), we = E.pointerType === "touch" ? 10 : 2;
    Math.abs(ce) > we ? (B = he.current) == null || B.style.setProperty("--swipe-amount", `${M}px`) : Math.abs(se) > we && (ye.current = null);
  } }, tt && !a.jsx ? h.createElement("button", { "aria-label": fe, "data-disabled": Le, "data-close-button": !0, onClick: Le || !xe ? () => {
  } : () => {
    var E;
    be(), (E = a.onDismiss) == null || E.call(a, a);
  }, className: S(N == null ? void 0 : N.closeButton, (i = a == null ? void 0 : a.classNames) == null ? void 0 : i.closeButton) }, h.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, h.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), h.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || h.isValidElement(a.title) ? a.jsx || a.title : h.createElement(h.Fragment, null, ae || a.icon || a.promise ? h.createElement("div", { "data-icon": "", className: S(N == null ? void 0 : N.icon, (c = a == null ? void 0 : a.classNames) == null ? void 0 : c.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || nt() : null, a.type !== "loading" ? a.icon || (te == null ? void 0 : te[ae]) || Sr(ae) : null) : null, h.createElement("div", { "data-content": "", className: S(N == null ? void 0 : N.content, (f = a == null ? void 0 : a.classNames) == null ? void 0 : f.content) }, h.createElement("div", { "data-title": "", className: S(N == null ? void 0 : N.title, (s = a == null ? void 0 : a.classNames) == null ? void 0 : s.title) }, a.title), a.description ? h.createElement("div", { "data-description": "", className: S(Q, Oe, N == null ? void 0 : N.description, (d = a == null ? void 0 : a.classNames) == null ? void 0 : d.description) }, a.description) : null), h.isValidElement(a.cancel) ? a.cancel : a.cancel && Je(a.cancel) ? h.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || q, onClick: (E) => {
    var B, M;
    Je(a.cancel) && xe && ((M = (B = a.cancel).onClick) == null || M.call(B, E), be());
  }, className: S(N == null ? void 0 : N.cancelButton, (p = a == null ? void 0 : a.classNames) == null ? void 0 : p.cancelButton) }, a.cancel.label) : null, h.isValidElement(a.action) ? a.action : a.action && Je(a.action) ? h.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || G, onClick: (E) => {
    var B, M;
    Je(a.action) && (E.defaultPrevented || ((M = (B = a.action).onClick) == null || M.call(B, E), be()));
  }, className: S(N == null ? void 0 : N.actionButton, (g = a == null ? void 0 : a.classNames) == null ? void 0 : g.actionButton) }, a.action.label) : null));
};
function wt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Xr = (e) => {
  let { invert: r, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: c, className: f, offset: s, theme: d = "light", richColors: p, duration: g, style: x, visibleToasts: a = Br, toastOptions: v, dir: P = wt(), gap: k = Vr, loadingIcon: T, icons: b, containerAriaLabel: y = "Notifications", pauseWhenPageIsHidden: U, cn: F = Ur } = e, [R, A] = h.useState([]), H = h.useMemo(() => Array.from(new Set([n].concat(R.filter(($) => $.position).map(($) => $.position)))), [R, n]), [L, q] = h.useState([]), [G, O] = h.useState(!1), [Q, C] = h.useState(!1), [X, z] = h.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = h.useRef(null), ee = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = h.useRef(null), te = h.useRef(!1), fe = h.useCallback(($) => {
    var S;
    (S = R.find((j) => j.id === $.id)) != null && S.delete || de.dismiss($.id), A((j) => j.filter(({ id: K }) => K !== $.id));
  }, [R]);
  return h.useEffect(() => de.subscribe(($) => {
    if ($.dismiss) {
      A((S) => S.map((j) => j.id === $.id ? { ...j, delete: !0 } : j));
      return;
    }
    setTimeout(() => {
      qt.flushSync(() => {
        A((S) => {
          let j = S.findIndex((K) => K.id === $.id);
          return j !== -1 ? [...S.slice(0, j), { ...S[j], ...$ }, ...S.slice(j + 1)] : [$, ...S];
        });
      });
    });
  }), []), h.useEffect(() => {
    if (d !== "system") {
      z(d);
      return;
    }
    d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: $ }) => {
      z($ ? "dark" : "light");
    });
  }, [d]), h.useEffect(() => {
    R.length <= 1 && O(!1);
  }, [R]), h.useEffect(() => {
    let $ = (S) => {
      var j, K;
      o.every((ne) => S[ne] || S.code === ne) && (O(!0), (j = W.current) == null || j.focus()), S.code === "Escape" && (document.activeElement === W.current || (K = W.current) != null && K.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", $), () => document.removeEventListener("keydown", $);
  }, [o]), h.useEffect(() => {
    if (W.current) return () => {
      N.current && (N.current.focus({ preventScroll: !0 }), N.current = null, te.current = !1);
    };
  }, [W.current]), R.length ? h.createElement("section", { "aria-label": `${y} ${ee}`, tabIndex: -1 }, H.map(($, S) => {
    var j;
    let [K, ne] = $.split("-");
    return h.createElement("ol", { key: $, dir: P === "auto" ? wt() : P, tabIndex: -1, ref: W, className: f, "data-sonner-toaster": !0, "data-theme": X, "data-y-position": K, "data-x-position": ne, style: { "--front-toast-height": `${((j = L[0]) == null ? void 0 : j.height) || 0}px`, "--offset": typeof s == "number" ? `${s}px` : s || Mr, "--width": `${Wr}px`, "--gap": `${k}px`, ...x }, onBlur: (Y) => {
      te.current && !Y.currentTarget.contains(Y.relatedTarget) && (te.current = !1, N.current && (N.current.focus({ preventScroll: !0 }), N.current = null));
    }, onFocus: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || te.current || (te.current = !0, N.current = Y.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      Q || O(!1);
    }, onPointerDown: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || C(!0);
    }, onPointerUp: () => C(!1) }, R.filter((Y) => !Y.position && S === 0 || Y.position === $).map((Y, ve) => {
      var J, oe;
      return h.createElement(Kr, { key: Y.id, icons: b, index: ve, toast: Y, defaultRichColors: p, duration: (J = v == null ? void 0 : v.duration) != null ? J : g, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: r, visibleToasts: a, closeButton: (oe = v == null ? void 0 : v.closeButton) != null ? oe : c, interacting: Q, position: $, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: fe, toasts: R.filter((le) => le.position == Y.position), heights: L.filter((le) => le.position == Y.position), setHeights: q, expandByDefault: i, gap: k, loadingIcon: T, expanded: G, pauseWhenPageIsHidden: U, cn: F });
    }));
  })) : null;
};
function kn({ children: e }) {
  function r(c) {
    Xe.success(c);
  }
  function n(c) {
    Xe.info(c);
  }
  function o(c) {
    Xe.error(c);
  }
  function i(c) {
    Xe.warning(c);
  }
  return /* @__PURE__ */ l.jsxs(
    Tt.Provider,
    {
      value: { errorToast: o, warningToast: i, successToast: r, infoToast: n },
      children: [
        /* @__PURE__ */ l.jsx(Xr, { richColors: !0 }),
        e
      ]
    }
  );
}
export {
  rn as Badge,
  hn as Breadcrumb,
  mn as BreadcrumbLink,
  on as Button,
  ln as Checkbox,
  nn as Divider,
  gn as Drawer,
  En as DrawerProvider,
  an as FormController,
  cn as FormError,
  un as FormLabel,
  dn as IconButton,
  fn as Input,
  pn as Modal,
  Cn as ModalProvider,
  sn as Select,
  tn as Skeleton,
  kn as ToastProvider,
  vn as Tooltip,
  bn as useAutomation,
  yn as useDrawer,
  xn as useModal,
  wn as useScopedParams,
  kr as useToast
};
