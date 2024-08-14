import p, { createContext as Ie, useRef as Ce, useId as Kt, useContext as Ee, useState as ce, forwardRef as Xt, useLayoutEffect as Jt, useEffect as pt } from "react";
import { Loader2 as Se, Check as Ct, ChevronDown as qt, ChevronRight as at, ChevronLeft as Gt, Ellipsis as gt, X as Nt, Info as vt, AlertCircle as Zt, XCircle as Qt, CheckCircle2 as en } from "lucide-react";
import { useActionData as _t, useLocation as jt, Link as tn, useNavigate as nn } from "@remix-run/react";
import { InputMask as rn } from "@react-input/mask";
import { AnimatePresence as Et, motion as Ae } from "framer-motion";
import an from "react-dom";
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
var bt;
function sn() {
  if (bt) return Me;
  bt = 1;
  var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, u, m) {
    var h, b = {}, a = null, v = null;
    m !== void 0 && (a = "" + m), u.key !== void 0 && (a = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (h in u) o.call(u, h) && !l.hasOwnProperty(h) && (b[h] = u[h]);
    if (c && c.defaultProps) for (h in u = c.defaultProps, u) b[h] === void 0 && (b[h] = u[h]);
    return { $$typeof: n, type: c, key: a, ref: v, props: b, _owner: i.current };
  }
  return Me.Fragment = r, Me.jsx = f, Me.jsxs = f, Me;
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
var yt;
function on() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), _ = Symbol.iterator, x = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var d = _ && t[_] || t[x];
      return typeof d == "function" ? d : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), k = 1; k < d; k++)
          g[k - 1] = arguments[k];
        Y("error", t, g);
      }
    }
    function Y(t, d, g) {
      {
        var k = y.ReactDebugCurrentFrame, D = k.getStackAddendum();
        D !== "" && (d += "%s", g = g.concat([D]));
        var V = g.map(function(I) {
          return String(I);
        });
        V.unshift("Warning: " + d), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var z = !1, R = !1, A = !1, L = !1, J = !1, K;
    K = Symbol.for("react.module.reference");
    function H(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || J || t === i || t === m || t === h || L || t === v || z || R || A || typeof t == "object" && t !== null && (t.$$typeof === a || t.$$typeof === b || t.$$typeof === f || t.$$typeof === c || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === K || t.getModuleId !== void 0));
    }
    function O(t, d, g) {
      var k = t.displayName;
      if (k)
        return k;
      var D = d.displayName || d.name || "";
      return D !== "" ? g + "(" + D + ")" : g;
    }
    function Q(t) {
      return t.displayName || "Context";
    }
    function j(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
        return t.displayName || t.name || null;
      if (typeof t == "string")
        return t;
      switch (t) {
        case o:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case m:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            var d = t;
            return Q(d) + ".Consumer";
          case f:
            var g = t;
            return Q(g._context) + ".Provider";
          case u:
            return O(t, t.render, "ForwardRef");
          case b:
            var k = t.displayName || null;
            return k !== null ? k : j(t.type) || "Memo";
          case a: {
            var D = t, V = D._payload, I = D._init;
            try {
              return j(I(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var q = Object.assign, F = 0, U, ne, $, ee, oe, S, E;
    function P() {
    }
    P.__reactDisabledLog = !0;
    function X() {
      {
        if (F === 0) {
          U = console.log, ne = console.info, $ = console.warn, ee = console.error, oe = console.group, S = console.groupCollapsed, E = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: P,
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
        F++;
      }
    }
    function G() {
      {
        if (F--, F === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: q({}, t, {
              value: U
            }),
            info: q({}, t, {
              value: ne
            }),
            warn: q({}, t, {
              value: $
            }),
            error: q({}, t, {
              value: ee
            }),
            group: q({}, t, {
              value: oe
            }),
            groupCollapsed: q({}, t, {
              value: S
            }),
            groupEnd: q({}, t, {
              value: E
            })
          });
        }
        F < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var W = y.ReactCurrentDispatcher, Ne;
    function me(t, d, g) {
      {
        if (Ne === void 0)
          try {
            throw Error();
          } catch (D) {
            var k = D.stack.trim().match(/\n( *(at )?)/);
            Ne = k && k[1] || "";
          }
        return `
` + Ne + t;
      }
    }
    var ve = !1, pe;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      pe = new Ge();
    }
    function Re(t, d) {
      if (!t || ve)
        return "";
      {
        var g = pe.get(t);
        if (g !== void 0)
          return g;
      }
      var k;
      ve = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = W.current, W.current = null, X();
      try {
        if (d) {
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
            } catch (le) {
              k = le;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (le) {
              k = le;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (le) {
            k = le;
          }
          t();
        }
      } catch (le) {
        if (le && k && typeof le.stack == "string") {
          for (var T = le.stack.split(`
`), se = k.stack.split(`
`), Z = T.length - 1, te = se.length - 1; Z >= 1 && te >= 0 && T[Z] !== se[te]; )
            te--;
          for (; Z >= 1 && te >= 0; Z--, te--)
            if (T[Z] !== se[te]) {
              if (Z !== 1 || te !== 1)
                do
                  if (Z--, te--, te < 0 || T[Z] !== se[te]) {
                    var he = `
` + T[Z].replace(" at new ", " at ");
                    return t.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", t.displayName)), typeof t == "function" && pe.set(t, he), he;
                  }
                while (Z >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        ve = !1, W.current = V, G(), Error.prepareStackTrace = D;
      }
      var Te = t ? t.displayName || t.name : "", je = Te ? me(Te) : "";
      return typeof t == "function" && pe.set(t, je), je;
    }
    function Ze(t, d, g) {
      return Re(t, !1);
    }
    function We(t) {
      var d = t.prototype;
      return !!(d && d.isReactComponent);
    }
    function _e(t, d, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Re(t, We(t));
      if (typeof t == "string")
        return me(t);
      switch (t) {
        case m:
          return me("Suspense");
        case h:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return Ze(t.render);
          case b:
            return _e(t.type, d, g);
          case a: {
            var k = t, D = k._payload, V = k._init;
            try {
              return _e(V(D), d, g);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Ve = {}, Ye = y.ReactDebugCurrentFrame;
    function re(t) {
      if (t) {
        var d = t._owner, g = _e(t.type, t._source, d ? d.type : null);
        Ye.setExtraStackFrame(g);
      } else
        Ye.setExtraStackFrame(null);
    }
    function xe(t, d, g, k, D) {
      {
        var V = Function.call.bind(de);
        for (var I in t)
          if (V(t, I)) {
            var T = void 0;
            try {
              if (typeof t[I] != "function") {
                var se = Error((k || "React class") + ": " + g + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw se.name = "Invariant Violation", se;
              }
              T = t[I](d, I, k, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              T = Z;
            }
            T && !(T instanceof Error) && (re(D), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", g, I, typeof T), re(null)), T instanceof Error && !(T.message in Ve) && (Ve[T.message] = !0, re(D), w("Failed %s type: %s", g, T.message), re(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Oe(t) {
      return Qe(t);
    }
    function $e(t) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, g = d && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
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
    function Pe(t) {
      if (et(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(t)), ze(t);
    }
    var fe = y.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, be, Fe, De;
    De = {};
    function Ue(t) {
      if (de.call(t, "ref")) {
        var d = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ke(t) {
      if (de.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function tt(t, d) {
      if (typeof t.ref == "string" && fe.current && d && fe.current.stateNode !== d) {
        var g = j(fe.current.type);
        De[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(fe.current.type), t.ref), De[g] = !0);
      }
    }
    function Le(t, d) {
      {
        var g = function() {
          be || (be = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function ge(t, d) {
      {
        var g = function() {
          Fe || (Fe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var nt = function(t, d, g, k, D, V, I) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: d,
        ref: g,
        props: I,
        // Record the component responsible for creating this element.
        _owner: V
      };
      return T._store = {}, Object.defineProperty(T._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(T, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function N(t, d, g, k, D) {
      {
        var V, I = {}, T = null, se = null;
        g !== void 0 && (Pe(g), T = "" + g), Ke(d) && (Pe(d.key), T = "" + d.key), Ue(d) && (se = d.ref, tt(d, D));
        for (V in d)
          de.call(d, V) && !He.hasOwnProperty(V) && (I[V] = d[V]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (V in Z)
            I[V] === void 0 && (I[V] = Z[V]);
        }
        if (T || se) {
          var te = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          T && Le(I, te), se && ge(I, te);
        }
        return nt(t, T, se, D, k, fe.current, I);
      }
    }
    var M = y.ReactCurrentOwner, B = y.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var d = t._owner, g = _e(t.type, t._source, d ? d.type : null);
        B.setExtraStackFrame(g);
      } else
        B.setExtraStackFrame(null);
    }
    var ie;
    ie = !1;
    function we(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Xe() {
      {
        if (M.current) {
          var t = j(M.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Dt(t) {
      {
        if (t !== void 0) {
          var d = t.fileName.replace(/^.*[\\\/]/, ""), g = t.lineNumber;
          return `

Check your code at ` + d + ":" + g + ".";
        }
        return "";
      }
    }
    var ut = {};
    function Lt(t) {
      {
        var d = Xe();
        if (!d) {
          var g = typeof t == "string" ? t : t.displayName || t.name;
          g && (d = `

Check the top-level render call using <` + g + ">.");
        }
        return d;
      }
    }
    function dt(t, d) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = Lt(d);
        if (ut[g])
          return;
        ut[g] = !0;
        var k = "";
        t && t._owner && t._owner !== M.current && (k = " It was passed a child from " + j(t._owner.type) + "."), ae(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, k), ae(null);
      }
    }
    function ft(t, d) {
      {
        if (typeof t != "object")
          return;
        if (Oe(t))
          for (var g = 0; g < t.length; g++) {
            var k = t[g];
            we(k) && dt(k, d);
          }
        else if (we(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = C(t);
          if (typeof D == "function" && D !== t.entries)
            for (var V = D.call(t), I; !(I = V.next()).done; )
              we(I.value) && dt(I.value, d);
        }
      }
    }
    function Mt(t) {
      {
        var d = t.type;
        if (d == null || typeof d == "string")
          return;
        var g;
        if (typeof d == "function")
          g = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === b))
          g = d.propTypes;
        else
          return;
        if (g) {
          var k = j(d);
          xe(g, t.props, "prop", k, t);
        } else if (d.PropTypes !== void 0 && !ie) {
          ie = !0;
          var D = j(d);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(t) {
      {
        for (var d = Object.keys(t.props), g = 0; g < d.length; g++) {
          var k = d[g];
          if (k !== "children" && k !== "key") {
            ae(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), ae(null);
            break;
          }
        }
        t.ref !== null && (ae(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), ae(null));
      }
    }
    var ht = {};
    function mt(t, d, g, k, D, V) {
      {
        var I = H(t);
        if (!I) {
          var T = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var se = Dt(D);
          se ? T += se : T += Xe();
          var Z;
          t === null ? Z = "null" : Oe(t) ? Z = "array" : t !== void 0 && t.$$typeof === n ? (Z = "<" + (j(t.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, T);
        }
        var te = N(t, d, g, D, V);
        if (te == null)
          return te;
        if (I) {
          var he = d.children;
          if (he !== void 0)
            if (k)
              if (Oe(he)) {
                for (var Te = 0; Te < he.length; Te++)
                  ft(he[Te], t);
                Object.freeze && Object.freeze(he);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(he, t);
        }
        if (de.call(d, "key")) {
          var je = j(t), le = Object.keys(d).filter(function(Ut) {
            return Ut !== "key";
          }), rt = le.length > 0 ? "{key: someKey, " + le.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ht[je + rt]) {
            var Ht = le.length > 0 ? "{" + le.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, je, Ht, je), ht[je + rt] = !0;
          }
        }
        return t === o ? Bt(te) : Mt(te), te;
      }
    }
    function At(t, d, g) {
      return mt(t, d, g, !0);
    }
    function Wt(t, d, g) {
      return mt(t, d, g, !1);
    }
    var Vt = Wt, Yt = At;
    Be.Fragment = o, Be.jsx = Vt, Be.jsxs = Yt;
  }()), Be;
}
process.env.NODE_ENV === "production" ? st.exports = sn() : st.exports = on();
var s = st.exports;
function qe(e, n) {
  return n ? /* @__PURE__ */ s.jsx(n, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function St(e, n) {
  return [...new Array(n - e)].map((r, o) => e + o + 1).filter((r) => r > 0);
}
function ln(e, n, r) {
  return e >= r ? [] : St(e + 1, e + n);
}
function cn(e, n) {
  return e <= 1 ? [] : St(e - 1 - n, e - 1);
}
function un(e, n, r) {
  if (!e) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ s.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ s.jsx("p", { className: r, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function sr(e) {
  const {
    variant: n = "ghost",
    scheme: r = "primary",
    size: o = "md",
    leftIcon: i,
    rightIcon: l,
    className: f = "",
    children: c,
    ...u
  } = e, h = { md: 12, lg: 14 }[o], b = `arkyn_badge ${n} ${r} ${o} ${f}`;
  return /* @__PURE__ */ s.jsxs("div", { className: b.trim(), ...u, children: [
    qe(h, i),
    c,
    qe(h, i)
  ] });
}
function or(e) {
  const {
    className: n,
    orientation: r = "horizontal",
    ...o
  } = e, i = `arkyn_divider ${r} ${n}`;
  return /* @__PURE__ */ s.jsx("div", { className: i, ...o });
}
function ir(e) {
  const { className: n, ...r } = e, o = `arkyn_skeleton ${n}`;
  return /* @__PURE__ */ s.jsx("aside", { className: o.trim(), ...r });
}
function lr(e) {
  const { className: n, ...r } = e, o = `arkyn_table_body ${n}`;
  return /* @__PURE__ */ s.jsx("tbody", { className: o.trim(), ...r });
}
function cr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_caption ${n}`;
  return /* @__PURE__ */ s.jsx("caption", { className: i.trim(), ...o, children: /* @__PURE__ */ s.jsx("div", { className: "arkyn_table_caption-content", children: r }) });
}
function ur(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_table_container ${r}`;
  return /* @__PURE__ */ s.jsx("div", { className: i.trim(), ...o, children: /* @__PURE__ */ s.jsx("table", { children: n }) });
}
function dr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_footer ${n}`;
  return /* @__PURE__ */ s.jsxs("tfoot", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ s.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ s.jsx("tr", { children: /* @__PURE__ */ s.jsx("th", { colSpan: 100, children: /* @__PURE__ */ s.jsx("div", { className: "arkyn_table_footer-content", children: r }) }) })
  ] });
}
function fr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_header ${n}`;
  return /* @__PURE__ */ s.jsxs("thead", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ s.jsx("tr", { children: r }),
    /* @__PURE__ */ s.jsx("tr", { className: "spacing-row" })
  ] });
}
function hr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    loadingText: i,
    size: l = "md",
    leftIcon: f,
    rightIcon: c,
    disabled: u,
    className: m = "",
    children: h,
    ...b
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[l], _ = `arkyn_button loading_text_${!!i} ${o} ${r} ${l} loading_${n} ${m}`;
  return /* @__PURE__ */ s.jsxs("button", { className: _, disabled: u || n, ...b, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ s.jsx(Se, { size: v, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-content", children: [
      qe(v, f),
      h,
      qe(v, c)
    ] })
  ] });
}
const Rt = Ie({});
function mr(e) {
  var h, b;
  const n = _t(), { children: r, className: o, ...i } = e, l = Ce(null), f = ((h = l.current) == null ? void 0 : h.name) || "", c = ((b = n == null ? void 0 : n.fieldErrors) == null ? void 0 : b[f]) || null, u = Kt(), m = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ s.jsx(Rt.Provider, { value: { error: c, id: u, inputRef: l }, children: /* @__PURE__ */ s.jsx("section", { className: m.trim(), ...i, children: r }) });
}
function ye() {
  return Ee(Rt);
}
function pr(e) {
  const {
    name: n,
    className: r = "",
    size: o = "md",
    isError: i,
    defaultChecked: l = !1,
    checked: f = null,
    onCheck: c,
    value: u,
    ...m
  } = e, { id: h, inputRef: b, error: a } = ye(), v = i || !!a, [_, x] = ce(l || !1), C = typeof f == "boolean" ? f : _, y = `arkyn_checkbox ${o} ${v ? "error" : ""} ${C ? "checked" : ""} ${r}`;
  function w() {
    const Y = _;
    x(!Y), c && c(Y ? "" : u || "checked");
  }
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      id: h,
      className: y,
      onClick: w,
      ...m,
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "hidden",
            name: n,
            ref: b,
            value: C ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ s.jsx(Ct, {})
      ]
    }
  );
}
function gr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_form_error ${r}`, { error: l } = ye();
  return n ? /* @__PURE__ */ s.jsx("strong", { className: i.trim(), ...o, children: n }) : l ? /* @__PURE__ */ s.jsx("strong", { className: i.trim(), ...o, children: l }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function vr(e) {
  const {
    showAsterisk: n = !1,
    className: r = "",
    ...o
  } = e, { id: i } = ye(), f = `arkyn_form_label ${n ? "show-asterisk" : ""} ${r}`;
  return /* @__PURE__ */ s.jsx("label", { ...o, className: f.trim(), htmlFor: i });
}
function br(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    size: i = "md",
    icon: l,
    disabled: f,
    className: c = "",
    ...u
  } = e, m = { xs: 12, sm: 16, md: 20, lg: 24 }, h = `arkyn_icon_button ${o} ${r} ${i} loading_${n} ${c}`;
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      disabled: f || n,
      className: h.trim(),
      ...u,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ s.jsx(Se, { size: m[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ s.jsx(l, { size: m[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function ke(e, n, r) {
  if (!e) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ s.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ s.jsx("p", { className: r, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function it(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function $t(e, n) {
  let r = "", o = 0;
  return Array.from(e).forEach((i, l) => {
    n[l + o].match(/[0-9]/) || (r += n[l + o], o++), r += i;
  }), r;
}
function Pt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const lt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Tt = it(lt.CNPJ).length;
function dn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    defaultValue: a,
    readOnly: v,
    onFocus: _,
    onBlur: x,
    title: C,
    style: y,
    onChange: w,
    ...Y
  } = e;
  function z(q) {
    let F = it(q);
    const U = Pt(F);
    if (!(F.length > Tt))
      return F = $t(F, lt[U]), F;
  }
  const R = h ? "right" : "left", O = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${b || v || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: ke(c, j, "prefix"),
    sufix: ke(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    defaultValue: z(a || ""),
    disabled: b,
    readOnly: v,
    onFocus: _,
    onBlur: x,
    title: C,
    style: y,
    onChange: w,
    loadingPosition: R,
    iconSize: j,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...Y
  };
}
function fn(e) {
  const [n, r] = ce(!1), o = Ce(null), { inputRef: i, id: l, error: f } = ye(), c = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: a,
    prefix: v,
    sufix: _,
    iconSize: x,
    loadingPosition: C,
    isLoading: y,
    LeftIcon: w,
    readOnly: Y,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    Spinner: L,
    onChange: J,
    value: K,
    defaultValue: H,
    ...O
  } = dn({ ...e, id: l, isError: u }, n), [Q, j] = ce(H), q = w && !y, F = A && !y, U = C === "left" && y, ne = C === "right" && y;
  function $() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function ee(E) {
    let P = it(E.target.value);
    const X = Pt(P);
    P.length > Tt || (P = $t(P, lt[X]), E.target.value = P, j(P), J && J(E));
  }
  function oe(E) {
    r(!0), z && z(E);
  }
  function S(E) {
    r(!1), R && R(E);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: $,
      className: a,
      children: [
        v,
        U && L,
        q && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: m || y,
            readOnly: Y,
            ref: c,
            value: K || Q,
            onFocus: oe,
            onChange: ee,
            onBlur: S,
            ...O
          }
        ),
        F && /* @__PURE__ */ s.jsx(A, { size: x, strokeWidth: 2.5 }),
        ne && L,
        _
      ]
    }
  );
}
function hn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: _,
    title: x,
    style: C,
    showCents: y = !1,
    max: w = 1e9,
    onChange: Y,
    ...z
  } = e, R = h ? "right" : "left", O = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${b || a || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: ke(c, j, "prefix"),
    sufix: ke(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: _,
    title: x,
    style: C,
    max: w,
    onChange: Y,
    showCents: y,
    loadingPosition: R,
    iconSize: j,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
const mn = /^[1-9]{1}$/, pn = /^[0-9]{1}$/, xt = 8;
function gn(e, n) {
  if (e === 0) return "";
  const r = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return n ? r : r.replace("R$", "").trim();
}
function vn(e) {
  const { currencyValue: n, event: r, max: o, setCurrencyValue: i } = e, { key: l, keyCode: f } = r;
  if (n === 0 && !mn.test(l) || n !== 0 && !pn.test(l) && f !== xt)
    return;
  const c = n.toString();
  let u;
  if (f !== xt) {
    const m = n === 0 ? l : `${c}${l}`;
    u = Number.parseInt(m, 10);
  } else {
    const m = c.slice(0, -1);
    u = m === "" ? 0 : Number.parseInt(m, 10);
  }
  u > Number(o) || i(u);
}
function bn(e) {
  const [n, r] = ce(!1), o = Ce(null), { inputRef: i, id: l, error: f } = ye(), c = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: a,
    prefix: v,
    sufix: _,
    iconSize: x,
    loadingPosition: C,
    isLoading: y,
    LeftIcon: w,
    readOnly: Y,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    Spinner: L,
    value: J,
    max: K,
    onKeyDown: H,
    onChange: O,
    showCents: Q,
    defaultValue: j,
    ...q
  } = hn({ ...e, id: l, isError: u }, n), [F, U] = ce(j * 100 || 0), ne = w && !y, $ = A && !y, ee = C === "left" && y, oe = C === "right" && y;
  function S() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function E(G) {
    vn({ currencyValue: F, event: G, max: K, setCurrencyValue: U }), O && O(F / 100), H && H(G);
  }
  function P(G) {
    r(!0), z && z(G);
  }
  function X(G) {
    r(!1), R && R(G);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: S,
      className: a,
      children: [
        v,
        ee && L,
        ne && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            value: gn(J || F, Q),
            onKeyDown: E,
            disabled: m || y,
            readOnly: Y,
            ref: c,
            onFocus: P,
            onBlur: X,
            onChange: () => {
            },
            ...q
          }
        ),
        oe && L,
        $ && /* @__PURE__ */ s.jsx(A, { size: x, strokeWidth: 2.5 }),
        _
      ]
    }
  );
}
function yn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: _,
    title: x,
    style: C,
    onChange: y,
    showMask: w = !1,
    type: Y,
    ...z
  } = e, R = h ? "right" : "left", O = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${b || a || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: ke(c, j, "prefix"),
    sufix: ke(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: _,
    title: x,
    style: C,
    onChange: y,
    loadingPosition: R,
    iconSize: j,
    showMask: w,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
const xn = Xt((e, n) => /* @__PURE__ */ s.jsx("input", { ref: n, ...e }));
function wn(e) {
  const [n, r] = ce(!1), o = Ce(null), { inputRef: i, id: l, error: f } = ye(), c = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: a,
    prefix: v,
    sufix: _,
    iconSize: x,
    loadingPosition: C,
    isLoading: y,
    LeftIcon: w,
    readOnly: Y,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    Spinner: L,
    ...J
  } = yn({ ...e, id: l, isError: u }, n), K = w && !y, H = A && !y, O = C === "left" && y, Q = C === "right" && y;
  function j() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function q(U) {
    r(!0), z && z(U);
  }
  function F(U) {
    r(!1), R && R(U);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: j,
      className: a,
      children: [
        v,
        O && L,
        K && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          rn,
          {
            component: xn,
            ref: c,
            onFocus: q,
            onBlur: F,
            ...J
          }
        ),
        H && /* @__PURE__ */ s.jsx(A, { size: x, strokeWidth: 2.5 }),
        Q && L,
        _
      ]
    }
  );
}
function kn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: _,
    title: x,
    style: C,
    onChange: y,
    ...w
  } = e, Y = h ? "right" : "left", K = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${b || a || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, O = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: K,
    prefix: ke(c, O, "prefix"),
    sufix: ke(u, O, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: _,
    title: x,
    style: C,
    onChange: y,
    loadingPosition: Y,
    iconSize: O,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...w
  };
}
function Cn(e) {
  const [n, r] = ce(!1), o = Ce(null), { inputRef: i, id: l, error: f } = ye(), c = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: a,
    prefix: v,
    sufix: _,
    iconSize: x,
    loadingPosition: C,
    isLoading: y,
    LeftIcon: w,
    readOnly: Y,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    type: L,
    Spinner: J,
    ...K
  } = kn({ ...e, id: l, isError: u }, n), H = w && !y, O = A && !y, Q = C === "left" && y, j = C === "right" && y;
  function q() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function F(ne) {
    r(!0), z && z(ne);
  }
  function U(ne) {
    r(!1), R && R(ne);
  }
  return L === "hidden" ? /* @__PURE__ */ s.jsx("input", { type: "hidden", ref: c, ...K }) : /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: q,
      className: a,
      children: [
        v,
        Q && J,
        H && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: m || y,
            readOnly: Y,
            ref: c,
            onFocus: F,
            onBlur: U,
            type: L,
            ...K
          }
        ),
        O && /* @__PURE__ */ s.jsx(A, { size: x, strokeWidth: 2.5 }),
        j && J,
        _
      ]
    }
  );
}
function yr(e) {
  return e.type === "currency" ? /* @__PURE__ */ s.jsx(bn, { ...e }) : e.type === "masked" ? /* @__PURE__ */ s.jsx(wn, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ s.jsx(fn, { ...e }) : /* @__PURE__ */ s.jsx(Cn, { ...e });
}
function Nn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: f = "solid",
    prefix: c,
    leftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: b,
    onBlur: a,
    title: v,
    style: _,
    closeOnSelect: x = !0,
    ...C
  } = e, R = `arkyn_select ${c ? "hasPrefix" : ""} ${f} ${i} ${m || h || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, L = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: R,
    prefix: un(c, L, "prefix"),
    LeftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: b,
    onBlur: a,
    title: v,
    closeOnSelect: x,
    style: _,
    iconSize: L,
    Spinner: /* @__PURE__ */ s.jsx(Se, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...C
  };
}
function xr(e) {
  var P;
  const [n, r] = ce(!1), { inputRef: o, id: i, error: l } = ye(), f = Ce(null), c = o || f, u = e.isError || !!l, {
    disabled: m,
    title: h,
    style: b,
    className: a,
    prefix: v,
    iconSize: _,
    isLoading: x,
    LeftIcon: C,
    value: y = null,
    defaultValue: w = "",
    readOnly: Y,
    onFocus: z,
    onBlur: R,
    Spinner: A,
    name: L,
    placeholder: J,
    onSelect: K,
    options: H,
    optionMaxHeight: O,
    closeOnSelect: Q,
    ...j
  } = Nn({ ...e, id: i, isError: u }, n), [q, F] = ce(w);
  function U() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function ne(X) {
    n || (r(!0), z && z(X));
  }
  function $() {
    r(!1), R && c.current && c.current.blur();
  }
  function ee(X) {
    const { label: G, value: W } = X;
    F(q !== W ? W : ""), K && K({ label: G, value: W }), Q && $();
  }
  const oe = typeof y == "string" ? y : q, S = ((P = H.find((X) => X.value === oe)) == null ? void 0 : P.label) || "", E = () => {
    if (!n && S) return !0;
    if (!n && !S) return !1;
    if (n && S) return !0;
    if (n && !S) return !1;
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(
      "section",
      {
        title: h,
        style: b,
        onClick: U,
        className: `${a} placeholder_dark_${E()}`,
        children: [
          v,
          C && /* @__PURE__ */ s.jsx(C, { size: _, strokeWidth: 2.5 }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              disabled: m || x,
              readOnly: !0,
              placeholder: S || J,
              onFocus: ne,
              ...j
            }
          ),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "hidden",
              ref: c,
              name: L,
              value: oe || "",
              readOnly: !0
            }
          ),
          n && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: O },
              children: [
                H.map(({ label: X, value: G }) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    onClick: () => ee({ label: X, value: G }),
                    className: oe === G ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      X,
                      " ",
                      /* @__PURE__ */ s.jsx(Ct, {})
                    ]
                  },
                  G
                )),
                H.length <= 0 && /* @__PURE__ */ s.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !x && /* @__PURE__ */ s.jsx(
            qt,
            {
              className: "arkyn_select_arrow",
              size: _,
              strokeWidth: 2.5
            }
          ),
          x && A
        ]
      }
    ),
    n && /* @__PURE__ */ s.jsx("aside", { className: "arkyn_select_overlay", onClick: $ })
  ] });
}
function wr(e) {
  const {
    variant: n = "solid",
    size: r = "md",
    className: o,
    disabled: i = !1,
    readOnly: l = !1,
    onFocus: f,
    onBlur: c,
    title: u,
    style: m,
    ...h
  } = e, [b, a] = ce(!1), { inputRef: v, id: _, error: x } = ye(), C = Ce(null), y = v || C, Y = e.isError || !!x ? "errored" : "", A = `arkyn_textarea ${n} ${r} ${i || l ? "opacity" : ""} ${Y} ${b ? "focused" : ""} ${o}`;
  function L() {
    i || !(y != null && y.current) || (a(!0), y.current.focus());
  }
  function J(H) {
    a(!0), f && f(H);
  }
  function K(H) {
    a(!1), c && c(H);
  }
  return /* @__PURE__ */ s.jsx(
    "section",
    {
      title: u,
      style: m,
      onClick: L,
      className: A,
      children: /* @__PURE__ */ s.jsx(
        "textarea",
        {
          id: _,
          disabled: i,
          readOnly: l,
          ref: y,
          onFocus: J,
          onBlur: K,
          ...h
        }
      )
    }
  );
}
function kr(e) {
  const { className: n = "", ...r } = e, o = `arkyn_breadcrumb_container ${n}`;
  return /* @__PURE__ */ s.jsx("nav", { className: o, ...r });
}
function Cr(e) {
  const { pathname: n } = jt(), {
    className: r = "",
    disabled: o = !1,
    children: i,
    to: l,
    ...f
  } = e, u = `arkyn_breadcrumb_link ${n === l ? "active" : "inactive"} ${r}`;
  return o ? /* @__PURE__ */ s.jsxs("p", { className: u, children: [
    /* @__PURE__ */ s.jsx(at, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ s.jsxs(tn, { to: l, className: u, ...f, children: [
    /* @__PURE__ */ s.jsx(at, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function _n(e = "") {
  const n = jt(), r = new URLSearchParams(n.search), o = e ? `${e}:` : "", i = (l) => {
    Object.entries(l).forEach(([f, c]) => {
      c === void 0 ? r.delete(`${o}${f}`) : r.set(`${o}${f}`, String(c));
    });
  };
  return {
    getParam: (l) => r.get(`${o}${l}`),
    getScopedSearch: (l) => {
      i(l);
      let f = r.toString();
      return f && (f = "?" + f), f;
    }
  };
}
function Nr(e) {
  const {
    scope: n,
    totalCountRegisters: r,
    perPageKey: o = "per_page",
    pageKey: i = "page",
    siblingsCount: l = 2,
    ...f
  } = e, c = nn(), { getParam: u, getScopedSearch: m } = _n(n), h = Number(u(i)) || 1, b = Number(u(o)) || 20, a = Math.ceil(r / b), v = cn(h, l), _ = ln(h, l, a);
  function x(C) {
    c(m({ page: C }));
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "arkyn_pagination", ...f, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: h <= 1,
        onClick: () => x(h - 1),
        children: /* @__PURE__ */ s.jsx(Gt, {})
      }
    ),
    h > 1 + l && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => x(1),
          children: "1"
        }
      ),
      h > 2 + l && /* @__PURE__ */ s.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ s.jsx(gt, {}) })
    ] }),
    v.map((C, y) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => x(C),
        className: "arkyn_pagination-page_button",
        children: C
      },
      y
    )),
    /* @__PURE__ */ s.jsx("button", { className: "arkyn_pagination-current", disabled: !0, children: h }),
    _.map((C, y) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => x(C),
        className: "arkyn_pagination-page_button",
        children: C
      },
      y
    )),
    h + l < a && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      h + 1 + l < a && /* @__PURE__ */ s.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ s.jsx(gt, {}) }),
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => x(a),
          children: a
        }
      )
    ] }),
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: h >= a,
        onClick: () => x(h + 1),
        children: /* @__PURE__ */ s.jsx(at, {})
      }
    )
  ] });
}
function _r(e) {
  const {
    children: n,
    value: r,
    className: o,
    defaultActive: i,
    ...l
  } = e, f = `arkyn_tab_button ${i ? "active" : ""} ${o || ""}`;
  return /* @__PURE__ */ s.jsx("button", { className: f.trim(), ...l, children: n });
}
function jr(e) {
  const { children: n, onClick: r, className: o, ...i } = e, l = Ce(null), f = `arkyn_tab_container ${o || ""}`, [c, u] = ce({
    width: "0px",
    left: "0px",
    transition: "none"
  }), m = (b, a) => {
    const v = b.getBoundingClientRect(), _ = l.current.getBoundingClientRect();
    u({
      transition: a ? void 0 : "none",
      width: `${v.width}px`,
      left: `${v.left - _.left}px`
    });
  };
  Jt(() => {
    const b = l.current;
    if (!b) return;
    let a = null;
    a = b.querySelector("button.active"), a && m(a);
  }, []);
  const h = (b) => {
    const a = b.target, v = l.current;
    a && v && v.contains(a) && (v.querySelectorAll("button").forEach((x) => x.classList.remove("active")), a.classList.add("active"), m(a, !0), r && r(a.value));
  };
  return /* @__PURE__ */ s.jsxs(
    "nav",
    {
      ref: l,
      onClick: h,
      className: f.trim(),
      ...i,
      children: [
        n,
        /* @__PURE__ */ s.jsx("div", { className: "active-line", style: c })
      ]
    }
  );
}
const It = Ie({});
function Er(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    orientation: o = "left",
    children: i,
    className: l,
    ...f
  } = e, c = o === "left" ? "-100%" : "100%", m = `arkyn_drawer_container ${o} ${n ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ s.jsx(It.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ s.jsx(Et, { children: n && /* @__PURE__ */ s.jsxs("aside", { className: m.trim(), ...f, children: [
    /* @__PURE__ */ s.jsx(
      Ae.div,
      {
        className: "arkyn_drawer_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ s.jsx(
      Ae.div,
      {
        className: "arkyn_drawer_container-content",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${c})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${c})` },
        children: i
      }
    )
  ] }) }) });
}
function Sr(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: l } = Ee(It), f = `arkyn_drawer_header ${r}`;
  return /* @__PURE__ */ s.jsxs("header", { className: f.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: l,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ s.jsx(Nt, { size: 24 })
      }
    )
  ] });
}
const Ot = Ie({});
function Rr(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    children: o,
    className: i = "",
    ...l
  } = e, c = `arkyn_modal_container ${n ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ s.jsx(Ot.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ s.jsx(Et, { children: n && /* @__PURE__ */ s.jsxs("aside", { className: c.trim(), ...l, children: [
    /* @__PURE__ */ s.jsx(
      Ae.div,
      {
        className: "arkyn_modal_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ s.jsx(
      Ae.div,
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
function $r(e) {
  const { alignment: n = "right", className: r, ...o } = e, i = `arkyn_modal_footer ${n} ${r}`;
  return /* @__PURE__ */ s.jsx("footer", { className: i.trim(), ...o });
}
function Pr(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: l } = Ee(Ot), f = `arkyn_modal_header ${r}`;
  return /* @__PURE__ */ s.jsxs("header", { className: f.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: l,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ s.jsx(Nt, { size: 24 })
      }
    )
  ] });
}
function Tr(e) {
  const { children: n, button: r, closeOnClick: o, orientation: i = "bottom-left" } = e, [l, f] = ce(!1), c = `arkyn_popover ${i} ${l ? "show" : ""}`;
  function u() {
    l || f(!0);
  }
  return /* @__PURE__ */ s.jsxs("div", { className: c, onClick: u, children: [
    r,
    /* @__PURE__ */ s.jsx(
      Ae.div,
      {
        style: { visibility: l ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: l ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => o && f(!1),
        className: "arkyn_popover-content",
        children: n
      }
    ),
    l && /* @__PURE__ */ s.jsx(
      "div",
      {
        onClick: () => f(!1),
        className: "arkyn_popover-overlay"
      }
    )
  ] });
}
function jn(e) {
  const { message: n, title: r, type: o, size: i = "lg" } = e, l = `arkyn_toast ${o} ${i}`;
  function f() {
    switch (o) {
      case "info":
        return /* @__PURE__ */ s.jsx(vt, {});
      case "success":
        return /* @__PURE__ */ s.jsx(en, {});
      case "danger":
        return /* @__PURE__ */ s.jsx(Qt, {});
      case "warning":
        return /* @__PURE__ */ s.jsx(Zt, {});
      default:
        return /* @__PURE__ */ s.jsx(vt, {});
    }
  }
  return /* @__PURE__ */ s.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("div", { className: "bg" }),
      /* @__PURE__ */ s.jsx(f, {})
    ] }),
    /* @__PURE__ */ s.jsxs("p", { children: [
      /* @__PURE__ */ s.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ s.jsx("span", { children: n })
    ] })
  ] });
}
function Ir(e) {
  const {
    text: n,
    size: r = "lg",
    children: o,
    orientation: i = "top",
    className: l,
    ...f
  } = e, c = `arkyn_tooltip ${r} ${i} ${l}`;
  return /* @__PURE__ */ s.jsxs("div", { className: c.trim(), ...f, children: [
    o,
    /* @__PURE__ */ s.jsx("div", { className: "arkyn_tooltip-text", children: n })
  ] });
}
const ct = Ie({}), zt = Ie({});
function En() {
  const e = Ee(zt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function wt(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function Or() {
  const e = _t(), { closeModal: n } = Ee(ct), { showToast: r } = En();
  pt(() => {
    const o = e == null ? void 0 : e.closeModalKey;
    o && n(o);
  }, [e]), pt(() => {
    const o = e == null ? void 0 : e.toast, i = e == null ? void 0 : e.message;
    wt(o) && r(o), !wt(o) && i && r({
      message: i,
      title: "Atenção!",
      type: "warning"
    });
  }, [e]);
}
const Ft = Ie({});
function zr(e) {
  const n = Ee(Ft);
  if (Object.entries(n).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: r,
      drawerIsOpen: o,
      openDrawer: i,
      closeDrawer: l
    } = n, f = o(e), c = r(e);
    return { drawerIsOpen: f, drawerData: c, openDrawer: (h) => i(e, h), closeDrawer: () => l(e) };
  } else
    return n;
}
function Fr(e) {
  const n = Ee(ct);
  if (Object.entries(n).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: r,
      modalIsOpen: o,
      openModal: i,
      closeModal: l
    } = n, f = o(e), c = r(e);
    return { modalIsOpen: f, modalData: c, openModal: (h) => i(e, h), closeModal: () => l(e) };
  } else
    return n;
}
function Dr(e) {
  const { children: n = !1 } = e, [r, o] = ce([]);
  function i(u) {
    return !!r.some((m) => m.key === u);
  }
  function l(u) {
    var m;
    return (m = r.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function f(u, m) {
    const h = i(u);
    o(h ? (b) => [...b.filter((v) => v.key !== u), { key: u, data: m }] : [...r, { key: u, data: m }]);
  }
  function c(u) {
    o(r.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ s.jsx(
    Ft.Provider,
    {
      value: { drawerIsOpen: i, drawerData: l, openDrawer: f, closeDrawer: c },
      children: n
    }
  );
}
function Lr(e) {
  const { children: n = !1 } = e, [r, o] = ce([]);
  function i(u) {
    return !!r.some((m) => m.key === u);
  }
  function l(u) {
    var m;
    return (m = r.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function f(u, m) {
    const h = i(u);
    o(h ? (b) => [...b.filter((v) => v.key !== u), { key: u, data: m }] : [...r, { key: u, data: m }]);
  }
  function c(u) {
    o(r.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ s.jsx(
    ct.Provider,
    {
      value: { modalIsOpen: i, modalData: l, openModal: f, closeModal: c },
      children: n
    }
  );
}
var Sn = (e) => {
  switch (e) {
    case "success":
      return Pn;
    case "info":
      return In;
    case "warning":
      return Tn;
    case "error":
      return On;
    default:
      return null;
  }
}, Rn = Array(12).fill(0), $n = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, Rn.map((n, r) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), Pn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Tn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), In = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), On = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), zn = () => {
  let [e, n] = p.useState(document.hidden);
  return p.useEffect(() => {
    let r = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, ot = 1, Fn = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let n = this.subscribers.indexOf(e);
      this.subscribers.splice(n, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((n) => n(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var n;
      let { message: r, ...o } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : ot++, l = this.toasts.find((c) => c.id === i), f = e.dismissible === void 0 ? !0 : e.dismissible;
      return l ? this.toasts = this.toasts.map((c) => c.id === i ? (this.publish({ ...c, ...e, id: i, title: r }), { ...c, ...e, id: i, dismissible: f, title: r }) : c) : this.addToast({ title: r, ...o, dismissible: f, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({ id: n.id, dismiss: !0 }));
    }), this.subscribers.forEach((n) => n({ id: e, dismiss: !0 })), e), this.message = (e, n) => this.create({ ...n, message: e }), this.error = (e, n) => this.create({ ...n, message: e, type: "error" }), this.success = (e, n) => this.create({ ...n, type: "success", message: e }), this.info = (e, n) => this.create({ ...n, type: "info", message: e }), this.warning = (e, n) => this.create({ ...n, type: "warning", message: e }), this.loading = (e, n) => this.create({ ...n, type: "loading", message: e }), this.promise = (e, n) => {
      if (!n) return;
      let r;
      n.loading !== void 0 && (r = this.create({ ...n, promise: e, type: "loading", message: n.loading, description: typeof n.description != "function" ? n.description : void 0 }));
      let o = e instanceof Promise ? e : e(), i = r !== void 0;
      return o.then(async (l) => {
        if (Ln(l) && !l.ok) {
          i = !1;
          let f = typeof n.error == "function" ? await n.error(`HTTP error! status: ${l.status}`) : n.error, c = typeof n.description == "function" ? await n.description(`HTTP error! status: ${l.status}`) : n.description;
          this.create({ id: r, type: "error", message: f, description: c });
        } else if (n.success !== void 0) {
          i = !1;
          let f = typeof n.success == "function" ? await n.success(l) : n.success, c = typeof n.description == "function" ? await n.description(l) : n.description;
          this.create({ id: r, type: "success", message: f, description: c });
        }
      }).catch(async (l) => {
        if (n.error !== void 0) {
          i = !1;
          let f = typeof n.error == "function" ? await n.error(l) : n.error, c = typeof n.description == "function" ? await n.description(l) : n.description;
          this.create({ id: r, type: "error", message: f, description: c });
        }
      }).finally(() => {
        var l;
        i && (this.dismiss(r), r = void 0), (l = n.finally) == null || l.call(n);
      }), r;
    }, this.custom = (e, n) => {
      let r = (n == null ? void 0 : n.id) || ot++;
      return this.create({ jsx: e(r), id: r, ...n }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, ue = new Fn(), Dn = (e, n) => {
  let r = (n == null ? void 0 : n.id) || ot++;
  return ue.addToast({ title: e, ...n, id: r }), r;
}, Ln = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Mn = Dn, Bn = () => ue.toasts, An = Object.assign(Mn, { success: ue.success, info: ue.info, warning: ue.warning, error: ue.error, custom: ue.custom, message: ue.message, promise: ue.promise, dismiss: ue.dismiss, loading: ue.loading }, { getHistory: Bn });
function Wn(e, { insertAt: n } = {}) {
  if (!e || typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
Wn(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Je(e) {
  return e.label !== void 0;
}
var Vn = 3, Yn = "32px", Hn = 4e3, Un = 356, Kn = 14, Xn = 20, Jn = 200;
function qn(...e) {
  return e.filter(Boolean).join(" ");
}
var Gn = (e) => {
  var n, r, o, i, l, f, c, u, m, h;
  let { invert: b, toast: a, unstyled: v, interacting: _, setHeights: x, visibleToasts: C, heights: y, index: w, toasts: Y, expanded: z, removeToast: R, defaultRichColors: A, closeButton: L, style: J, cancelButtonStyle: K, actionButtonStyle: H, className: O = "", descriptionClassName: Q = "", duration: j, position: q, gap: F, loadingIcon: U, expandByDefault: ne, classNames: $, icons: ee, closeButtonAriaLabel: oe = "Close toast", pauseWhenPageIsHidden: S, cn: E } = e, [P, X] = p.useState(!1), [G, W] = p.useState(!1), [Ne, me] = p.useState(!1), [ve, pe] = p.useState(!1), [Ge, Re] = p.useState(0), [Ze, We] = p.useState(0), _e = p.useRef(null), de = p.useRef(null), Ve = w === 0, Ye = w + 1 <= C, re = a.type, xe = a.dismissible !== !1, Qe = a.className || "", Oe = a.descriptionClassName || "", $e = p.useMemo(() => y.findIndex((N) => N.toastId === a.id) || 0, [y, a.id]), et = p.useMemo(() => {
    var N;
    return (N = a.closeButton) != null ? N : L;
  }, [a.closeButton, L]), ze = p.useMemo(() => a.duration || j || Hn, [a.duration, j]), Pe = p.useRef(0), fe = p.useRef(0), He = p.useRef(0), be = p.useRef(null), [Fe, De] = q.split("-"), Ue = p.useMemo(() => y.reduce((N, M, B) => B >= $e ? N : N + M.height, 0), [y, $e]), Ke = zn(), tt = a.invert || b, Le = re === "loading";
  fe.current = p.useMemo(() => $e * F + Ue, [$e, Ue]), p.useEffect(() => {
    X(!0);
  }, []), p.useLayoutEffect(() => {
    if (!P) return;
    let N = de.current, M = N.style.height;
    N.style.height = "auto";
    let B = N.getBoundingClientRect().height;
    N.style.height = M, We(B), x((ae) => ae.find((ie) => ie.toastId === a.id) ? ae.map((ie) => ie.toastId === a.id ? { ...ie, height: B } : ie) : [{ toastId: a.id, height: B, position: a.position }, ...ae]);
  }, [P, a.title, a.description, x, a.id]);
  let ge = p.useCallback(() => {
    W(!0), Re(fe.current), x((N) => N.filter((M) => M.toastId !== a.id)), setTimeout(() => {
      R(a);
    }, Jn);
  }, [a, R, x, fe]);
  p.useEffect(() => {
    if (a.promise && re === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
    let N, M = ze;
    return z || _ || S && Ke ? (() => {
      if (He.current < Pe.current) {
        let B = (/* @__PURE__ */ new Date()).getTime() - Pe.current;
        M = M - B;
      }
      He.current = (/* @__PURE__ */ new Date()).getTime();
    })() : M !== 1 / 0 && (Pe.current = (/* @__PURE__ */ new Date()).getTime(), N = setTimeout(() => {
      var B;
      (B = a.onAutoClose) == null || B.call(a, a), ge();
    }, M)), () => clearTimeout(N);
  }, [z, _, ne, a, ze, ge, a.promise, re, S, Ke]), p.useEffect(() => {
    let N = de.current;
    if (N) {
      let M = N.getBoundingClientRect().height;
      return We(M), x((B) => [{ toastId: a.id, height: M, position: a.position }, ...B]), () => x((B) => B.filter((ae) => ae.toastId !== a.id));
    }
  }, [x, a.id]), p.useEffect(() => {
    a.delete && ge();
  }, [ge, a.delete]);
  function nt() {
    return ee != null && ee.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": re === "loading" }, ee.loading) : U ? p.createElement("div", { className: "sonner-loader", "data-visible": re === "loading" }, U) : p.createElement($n, { visible: re === "loading" });
  }
  return p.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: de, className: E(O, Qe, $ == null ? void 0 : $.toast, (n = a == null ? void 0 : a.classNames) == null ? void 0 : n.toast, $ == null ? void 0 : $.default, $ == null ? void 0 : $[re], (r = a == null ? void 0 : a.classNames) == null ? void 0 : r[re]), "data-sonner-toast": "", "data-rich-colors": (o = a.richColors) != null ? o : A, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": P, "data-promise": !!a.promise, "data-removed": G, "data-visible": Ye, "data-y-position": Fe, "data-x-position": De, "data-index": w, "data-front": Ve, "data-swiping": Ne, "data-dismissible": xe, "data-type": re, "data-invert": tt, "data-swipe-out": ve, "data-expanded": !!(z || ne && P), style: { "--index": w, "--toasts-before": w, "--z-index": Y.length - w, "--offset": `${G ? Ge : fe.current}px`, "--initial-height": ne ? "auto" : `${Ze}px`, ...J, ...a.style }, onPointerDown: (N) => {
    Le || !xe || (_e.current = /* @__PURE__ */ new Date(), Re(fe.current), N.target.setPointerCapture(N.pointerId), N.target.tagName !== "BUTTON" && (me(!0), be.current = { x: N.clientX, y: N.clientY }));
  }, onPointerUp: () => {
    var N, M, B, ae;
    if (ve || !xe) return;
    be.current = null;
    let ie = Number(((N = de.current) == null ? void 0 : N.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), we = (/* @__PURE__ */ new Date()).getTime() - ((M = _e.current) == null ? void 0 : M.getTime()), Xe = Math.abs(ie) / we;
    if (Math.abs(ie) >= Xn || Xe > 0.11) {
      Re(fe.current), (B = a.onDismiss) == null || B.call(a, a), ge(), pe(!0);
      return;
    }
    (ae = de.current) == null || ae.style.setProperty("--swipe-amount", "0px"), me(!1);
  }, onPointerMove: (N) => {
    var M;
    if (!be.current || !xe) return;
    let B = N.clientY - be.current.y, ae = N.clientX - be.current.x, ie = (Fe === "top" ? Math.min : Math.max)(0, B), we = N.pointerType === "touch" ? 10 : 2;
    Math.abs(ie) > we ? (M = de.current) == null || M.style.setProperty("--swipe-amount", `${B}px`) : Math.abs(ae) > we && (be.current = null);
  } }, et && !a.jsx ? p.createElement("button", { "aria-label": oe, "data-disabled": Le, "data-close-button": !0, onClick: Le || !xe ? () => {
  } : () => {
    var N;
    ge(), (N = a.onDismiss) == null || N.call(a, a);
  }, className: E($ == null ? void 0 : $.closeButton, (i = a == null ? void 0 : a.classNames) == null ? void 0 : i.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || p.isValidElement(a.title) ? a.jsx || a.title : p.createElement(p.Fragment, null, re || a.icon || a.promise ? p.createElement("div", { "data-icon": "", className: E($ == null ? void 0 : $.icon, (l = a == null ? void 0 : a.classNames) == null ? void 0 : l.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || nt() : null, a.type !== "loading" ? a.icon || (ee == null ? void 0 : ee[re]) || Sn(re) : null) : null, p.createElement("div", { "data-content": "", className: E($ == null ? void 0 : $.content, (f = a == null ? void 0 : a.classNames) == null ? void 0 : f.content) }, p.createElement("div", { "data-title": "", className: E($ == null ? void 0 : $.title, (c = a == null ? void 0 : a.classNames) == null ? void 0 : c.title) }, a.title), a.description ? p.createElement("div", { "data-description": "", className: E(Q, Oe, $ == null ? void 0 : $.description, (u = a == null ? void 0 : a.classNames) == null ? void 0 : u.description) }, a.description) : null), p.isValidElement(a.cancel) ? a.cancel : a.cancel && Je(a.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || K, onClick: (N) => {
    var M, B;
    Je(a.cancel) && xe && ((B = (M = a.cancel).onClick) == null || B.call(M, N), ge());
  }, className: E($ == null ? void 0 : $.cancelButton, (m = a == null ? void 0 : a.classNames) == null ? void 0 : m.cancelButton) }, a.cancel.label) : null, p.isValidElement(a.action) ? a.action : a.action && Je(a.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || H, onClick: (N) => {
    var M, B;
    Je(a.action) && (N.defaultPrevented || ((B = (M = a.action).onClick) == null || B.call(M, N), ge()));
  }, className: E($ == null ? void 0 : $.actionButton, (h = a == null ? void 0 : a.classNames) == null ? void 0 : h.actionButton) }, a.action.label) : null));
};
function kt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Zn = (e) => {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: l, className: f, offset: c, theme: u = "light", richColors: m, duration: h, style: b, visibleToasts: a = Vn, toastOptions: v, dir: _ = kt(), gap: x = Kn, loadingIcon: C, icons: y, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: Y, cn: z = qn } = e, [R, A] = p.useState([]), L = p.useMemo(() => Array.from(new Set([r].concat(R.filter((S) => S.position).map((S) => S.position)))), [R, r]), [J, K] = p.useState([]), [H, O] = p.useState(!1), [Q, j] = p.useState(!1), [q, F] = p.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), U = p.useRef(null), ne = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = p.useRef(null), ee = p.useRef(!1), oe = p.useCallback((S) => {
    var E;
    (E = R.find((P) => P.id === S.id)) != null && E.delete || ue.dismiss(S.id), A((P) => P.filter(({ id: X }) => X !== S.id));
  }, [R]);
  return p.useEffect(() => ue.subscribe((S) => {
    if (S.dismiss) {
      A((E) => E.map((P) => P.id === S.id ? { ...P, delete: !0 } : P));
      return;
    }
    setTimeout(() => {
      an.flushSync(() => {
        A((E) => {
          let P = E.findIndex((X) => X.id === S.id);
          return P !== -1 ? [...E.slice(0, P), { ...E[P], ...S }, ...E.slice(P + 1)] : [S, ...E];
        });
      });
    });
  }), []), p.useEffect(() => {
    if (u !== "system") {
      F(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: S }) => {
      F(S ? "dark" : "light");
    });
  }, [u]), p.useEffect(() => {
    R.length <= 1 && O(!1);
  }, [R]), p.useEffect(() => {
    let S = (E) => {
      var P, X;
      o.every((G) => E[G] || E.code === G) && (O(!0), (P = U.current) == null || P.focus()), E.code === "Escape" && (document.activeElement === U.current || (X = U.current) != null && X.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [o]), p.useEffect(() => {
    if (U.current) return () => {
      $.current && ($.current.focus({ preventScroll: !0 }), $.current = null, ee.current = !1);
    };
  }, [U.current]), R.length ? p.createElement("section", { "aria-label": `${w} ${ne}`, tabIndex: -1 }, L.map((S, E) => {
    var P;
    let [X, G] = S.split("-");
    return p.createElement("ol", { key: S, dir: _ === "auto" ? kt() : _, tabIndex: -1, ref: U, className: f, "data-sonner-toaster": !0, "data-theme": q, "data-y-position": X, "data-x-position": G, style: { "--front-toast-height": `${((P = J[0]) == null ? void 0 : P.height) || 0}px`, "--offset": typeof c == "number" ? `${c}px` : c || Yn, "--width": `${Un}px`, "--gap": `${x}px`, ...b }, onBlur: (W) => {
      ee.current && !W.currentTarget.contains(W.relatedTarget) && (ee.current = !1, $.current && ($.current.focus({ preventScroll: !0 }), $.current = null));
    }, onFocus: (W) => {
      W.target instanceof HTMLElement && W.target.dataset.dismissible === "false" || ee.current || (ee.current = !0, $.current = W.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      Q || O(!1);
    }, onPointerDown: (W) => {
      W.target instanceof HTMLElement && W.target.dataset.dismissible === "false" || j(!0);
    }, onPointerUp: () => j(!1) }, R.filter((W) => !W.position && E === 0 || W.position === S).map((W, Ne) => {
      var me, ve;
      return p.createElement(Gn, { key: W.id, icons: y, index: Ne, toast: W, defaultRichColors: m, duration: (me = v == null ? void 0 : v.duration) != null ? me : h, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: n, visibleToasts: a, closeButton: (ve = v == null ? void 0 : v.closeButton) != null ? ve : l, interacting: Q, position: S, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: oe, toasts: R.filter((pe) => pe.position == W.position), heights: J.filter((pe) => pe.position == W.position), setHeights: K, expandByDefault: i, gap: x, loadingIcon: C, expanded: H, pauseWhenPageIsHidden: Y, cn: z });
    }));
  })) : null;
};
function Mr({ children: e }) {
  function n(r) {
    An.custom((o) => /* @__PURE__ */ s.jsx(jn, { ...r }));
  }
  return /* @__PURE__ */ s.jsxs(zt.Provider, { value: { showToast: n }, children: [
    /* @__PURE__ */ s.jsx(Zn, {}),
    e
  ] });
}
export {
  sr as Badge,
  kr as BreadcrumbContainer,
  Cr as BreadcrumbLink,
  hr as Button,
  pr as Checkbox,
  or as Divider,
  Er as DrawerContainer,
  Sr as DrawerHeader,
  Dr as DrawerProvider,
  mr as FormController,
  gr as FormError,
  vr as FormLabel,
  br as IconButton,
  yr as Input,
  Rr as ModalContainer,
  $r as ModalFooter,
  Pr as ModalHeader,
  Lr as ModalProvider,
  Nr as Pagination,
  Tr as Popover,
  xr as Select,
  ir as Skeleton,
  _r as TabButton,
  jr as TabContainer,
  lr as TableBody,
  cr as TableCaption,
  ur as TableContainer,
  dr as TableFooter,
  fr as TableHeader,
  wr as Textarea,
  jn as Toast,
  Mr as ToastProvider,
  Ir as Tooltip,
  Or as useAutomation,
  zr as useDrawer,
  Fr as useModal,
  _n as useScopedParams,
  En as useToast
};
