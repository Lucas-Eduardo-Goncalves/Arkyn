import p, { createContext as je, useRef as Ee, useId as Zt, useContext as we, useState as ie, useEffect as Ze, forwardRef as Qt } from "react";
import { Loader2 as $e, Check as Et, ChevronDown as en, ChevronRight as ot, ChevronLeft as tn, Ellipsis as yt, X as St, Info as xt, AlertCircle as nn, XCircle as rn, CheckCircle2 as an } from "lucide-react";
import { useActionData as Rt, useLocation as $t, Link as sn, useNavigate as on } from "@remix-run/react";
import { InputMask as ln } from "@react-input/mask";
import { AnimatePresence as Pt, motion as Ve } from "framer-motion";
import cn from "react-dom";
var it = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function un() {
  if (wt) return Le;
  wt = 1;
  var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, u, m) {
    var h, y = {}, s = null, b = null;
    m !== void 0 && (s = "" + m), u.key !== void 0 && (s = "" + u.key), u.ref !== void 0 && (b = u.ref);
    for (h in u) o.call(u, h) && !l.hasOwnProperty(h) && (y[h] = u[h]);
    if (c && c.defaultProps) for (h in u = c.defaultProps, u) y[h] === void 0 && (y[h] = u[h]);
    return { $$typeof: n, type: c, key: s, ref: b, props: y, _owner: i.current };
  }
  return Le.Fragment = r, Le.jsx = d, Le.jsxs = d, Le;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function dn() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), N = Symbol.iterator, w = "@@iterator";
    function k(t) {
      if (t === null || typeof t != "object")
        return null;
      var f = N && t[N] || t[w];
      return typeof f == "function" ? f : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), C = 1; C < f; C++)
          g[C - 1] = arguments[C];
        z("error", t, g);
      }
    }
    function z(t, f, g) {
      {
        var C = v.ReactDebugCurrentFrame, D = C.getStackAddendum();
        D !== "" && (f += "%s", g = g.concat([D]));
        var Y = g.map(function(I) {
          return String(I);
        });
        Y.unshift("Warning: " + f), Function.prototype.apply.call(console[t], console, Y);
      }
    }
    var O = !1, P = !1, W = !1, B = !1, J = !1, U;
    U = Symbol.for("react.module.reference");
    function H(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || J || t === i || t === m || t === h || B || t === b || O || P || W || typeof t == "object" && t !== null && (t.$$typeof === s || t.$$typeof === y || t.$$typeof === d || t.$$typeof === c || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === U || t.getModuleId !== void 0));
    }
    function F(t, f, g) {
      var C = t.displayName;
      if (C)
        return C;
      var D = f.displayName || f.name || "";
      return D !== "" ? g + "(" + D + ")" : g;
    }
    function Q(t) {
      return t.displayName || "Context";
    }
    function j(t) {
      if (t == null)
        return null;
      if (typeof t.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof t == "function")
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
            var f = t;
            return Q(f) + ".Consumer";
          case d:
            var g = t;
            return Q(g._context) + ".Provider";
          case u:
            return F(t, t.render, "ForwardRef");
          case y:
            var C = t.displayName || null;
            return C !== null ? C : j(t.type) || "Memo";
          case s: {
            var D = t, Y = D._payload, I = D._init;
            try {
              return j(I(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, M = 0, X, ee, R, te, ce, S, E;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function G() {
      {
        if (M === 0) {
          X = console.log, ee = console.info, R = console.warn, te = console.error, ce = console.group, S = console.groupCollapsed, E = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: $,
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
        M++;
      }
    }
    function re() {
      {
        if (M--, M === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, t, {
              value: X
            }),
            info: K({}, t, {
              value: ee
            }),
            warn: K({}, t, {
              value: R
            }),
            error: K({}, t, {
              value: te
            }),
            group: K({}, t, {
              value: ce
            }),
            groupCollapsed: K({}, t, {
              value: S
            }),
            groupEnd: K({}, t, {
              value: E
            })
          });
        }
        M < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var L = v.ReactCurrentDispatcher, ye;
    function he(t, f, g) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (D) {
            var C = D.stack.trim().match(/\n( *(at )?)/);
            ye = C && C[1] || "";
          }
        return `
` + ye + t;
      }
    }
    var q = !1, ae;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new ke();
    }
    function Pe(t, f) {
      if (!t || q)
        return "";
      {
        var g = ae.get(t);
        if (g !== void 0)
          return g;
      }
      var C;
      q = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = L.current, L.current = null, G();
      try {
        if (f) {
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
            } catch (de) {
              C = de;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (de) {
              C = de;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            C = de;
          }
          t();
        }
      } catch (de) {
        if (de && C && typeof de.stack == "string") {
          for (var T = de.stack.split(`
`), le = C.stack.split(`
`), Z = T.length - 1, ne = le.length - 1; Z >= 1 && ne >= 0 && T[Z] !== le[ne]; )
            ne--;
          for (; Z >= 1 && ne >= 0; Z--, ne--)
            if (T[Z] !== le[ne]) {
              if (Z !== 1 || ne !== 1)
                do
                  if (Z--, ne--, ne < 0 || T[Z] !== le[ne]) {
                    var ge = `
` + T[Z].replace(" at new ", " at ");
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && ae.set(t, ge), ge;
                  }
                while (Z >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        q = !1, L.current = Y, re(), Error.prepareStackTrace = D;
      }
      var Oe = t ? t.displayName || t.name : "", Re = Oe ? he(Oe) : "";
      return typeof t == "function" && ae.set(t, Re), Re;
    }
    function et(t, f, g) {
      return Pe(t, !1);
    }
    function We(t) {
      var f = t.prototype;
      return !!(f && f.isReactComponent);
    }
    function Se(t, f, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Pe(t, We(t));
      if (typeof t == "string")
        return he(t);
      switch (t) {
        case m:
          return he("Suspense");
        case h:
          return he("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return et(t.render);
          case y:
            return Se(t.type, f, g);
          case s: {
            var C = t, D = C._payload, Y = C._init;
            try {
              return Se(Y(D), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ye = {}, Ue = v.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var f = t._owner, g = Se(t.type, t._source, f ? f.type : null);
        Ue.setExtraStackFrame(g);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Ce(t, f, g, C, D) {
      {
        var Y = Function.call.bind(me);
        for (var I in t)
          if (Y(t, I)) {
            var T = void 0;
            try {
              if (typeof t[I] != "function") {
                var le = Error((C || "React class") + ": " + g + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw le.name = "Invariant Violation", le;
              }
              T = t[I](f, I, C, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              T = Z;
            }
            T && !(T instanceof Error) && (se(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", g, I, typeof T), se(null)), T instanceof Error && !(T.message in Ye) && (Ye[T.message] = !0, se(D), x("Failed %s type: %s", g, T.message), se(null));
          }
      }
    }
    var tt = Array.isArray;
    function ze(t) {
      return tt(t);
    }
    function Te(t) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function nt(t) {
      try {
        return Fe(t), !1;
      } catch {
        return !0;
      }
    }
    function Fe(t) {
      return "" + t;
    }
    function Ie(t) {
      if (nt(t))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(t)), Fe(t);
    }
    var pe = v.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, De, Be;
    Be = {};
    function Ke(t) {
      if (me.call(t, "ref")) {
        var f = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Xe(t) {
      if (me.call(t, "key")) {
        var f = Object.getOwnPropertyDescriptor(t, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function rt(t, f) {
      if (typeof t.ref == "string" && pe.current && f && pe.current.stateNode !== f) {
        var g = j(pe.current.type);
        Be[g] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(pe.current.type), t.ref), Be[g] = !0);
      }
    }
    function Me(t, f) {
      {
        var g = function() {
          xe || (xe = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function be(t, f) {
      {
        var g = function() {
          De || (De = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var at = function(t, f, g, C, D, Y, I) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: f,
        ref: g,
        props: I,
        // Record the component responsible for creating this element.
        _owner: Y
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
        value: C
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function _(t, f, g, C, D) {
      {
        var Y, I = {}, T = null, le = null;
        g !== void 0 && (Ie(g), T = "" + g), Xe(f) && (Ie(f.key), T = "" + f.key), Ke(f) && (le = f.ref, rt(f, D));
        for (Y in f)
          me.call(f, Y) && !He.hasOwnProperty(Y) && (I[Y] = f[Y]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (Y in Z)
            I[Y] === void 0 && (I[Y] = Z[Y]);
        }
        if (T || le) {
          var ne = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          T && Me(I, ne), le && be(I, ne);
        }
        return at(t, T, le, D, C, pe.current, I);
      }
    }
    var A = v.ReactCurrentOwner, V = v.ReactDebugCurrentFrame;
    function oe(t) {
      if (t) {
        var f = t._owner, g = Se(t.type, t._source, f ? f.type : null);
        V.setExtraStackFrame(g);
      } else
        V.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function Ne(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Je() {
      {
        if (A.current) {
          var t = j(A.current.type);
          if (t)
            return `

Check the render method of \`` + t + "`.";
        }
        return "";
      }
    }
    function Vt(t) {
      {
        if (t !== void 0) {
          var f = t.fileName.replace(/^.*[\\\/]/, ""), g = t.lineNumber;
          return `

Check your code at ` + f + ":" + g + ".";
        }
        return "";
      }
    }
    var mt = {};
    function Wt(t) {
      {
        var f = Je();
        if (!f) {
          var g = typeof t == "string" ? t : t.displayName || t.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function pt(t, f) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = Wt(f);
        if (mt[g])
          return;
        mt[g] = !0;
        var C = "";
        t && t._owner && t._owner !== A.current && (C = " It was passed a child from " + j(t._owner.type) + "."), oe(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, C), oe(null);
      }
    }
    function gt(t, f) {
      {
        if (typeof t != "object")
          return;
        if (ze(t))
          for (var g = 0; g < t.length; g++) {
            var C = t[g];
            Ne(C) && pt(C, f);
          }
        else if (Ne(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = k(t);
          if (typeof D == "function" && D !== t.entries)
            for (var Y = D.call(t), I; !(I = Y.next()).done; )
              Ne(I.value) && pt(I.value, f);
        }
      }
    }
    function Yt(t) {
      {
        var f = t.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === y))
          g = f.propTypes;
        else
          return;
        if (g) {
          var C = j(f);
          Ce(g, t.props, "prop", C, t);
        } else if (f.PropTypes !== void 0 && !ue) {
          ue = !0;
          var D = j(f);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ut(t) {
      {
        for (var f = Object.keys(t.props), g = 0; g < f.length; g++) {
          var C = f[g];
          if (C !== "children" && C !== "key") {
            oe(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), oe(null);
            break;
          }
        }
        t.ref !== null && (oe(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var vt = {};
    function bt(t, f, g, C, D, Y) {
      {
        var I = H(t);
        if (!I) {
          var T = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var le = Vt(D);
          le ? T += le : T += Je();
          var Z;
          t === null ? Z = "null" : ze(t) ? Z = "array" : t !== void 0 && t.$$typeof === n ? (Z = "<" + (j(t.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, T);
        }
        var ne = _(t, f, g, D, Y);
        if (ne == null)
          return ne;
        if (I) {
          var ge = f.children;
          if (ge !== void 0)
            if (C)
              if (ze(ge)) {
                for (var Oe = 0; Oe < ge.length; Oe++)
                  gt(ge[Oe], t);
                Object.freeze && Object.freeze(ge);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              gt(ge, t);
        }
        if (me.call(f, "key")) {
          var Re = j(t), de = Object.keys(f).filter(function(qt) {
            return qt !== "key";
          }), st = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!vt[Re + st]) {
            var Gt = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, Re, Gt, Re), vt[Re + st] = !0;
          }
        }
        return t === o ? Ut(ne) : Yt(ne), ne;
      }
    }
    function Ht(t, f, g) {
      return bt(t, f, g, !0);
    }
    function Kt(t, f, g) {
      return bt(t, f, g, !1);
    }
    var Xt = Kt, Jt = Ht;
    Ae.Fragment = o, Ae.jsx = Xt, Ae.jsxs = Jt;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? it.exports = un() : it.exports = dn();
var a = it.exports;
function Qe(e, n) {
  return n ? /* @__PURE__ */ a.jsx(n, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function Tt(e, n) {
  return [...new Array(n - e)].map((r, o) => e + o + 1).filter((r) => r > 0);
}
function fn(e, n, r) {
  return e >= r ? [] : Tt(e + 1, e + n);
}
function hn(e, n) {
  return e <= 1 ? [] : Tt(e - 1 - n, e - 1);
}
function mn(e, n, r) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ a.jsx("p", { className: r, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function cr(e) {
  const {
    variant: n = "ghost",
    scheme: r = "primary",
    size: o = "md",
    leftIcon: i,
    rightIcon: l,
    className: d = "",
    children: c,
    ...u
  } = e, h = { md: 12, lg: 14 }[o], y = `arkyn_badge ${n} ${r} ${o} ${d}`;
  return /* @__PURE__ */ a.jsxs("div", { className: y.trim(), ...u, children: [
    Qe(h, i),
    c,
    Qe(h, i)
  ] });
}
function ur(e) {
  const {
    className: n,
    orientation: r = "horizontal",
    ...o
  } = e, i = `arkyn_divider ${r} ${n}`;
  return /* @__PURE__ */ a.jsx("div", { className: i, ...o });
}
function dr(e) {
  const { className: n, ...r } = e, o = `arkyn_skeleton ${n}`;
  return /* @__PURE__ */ a.jsx("aside", { className: o.trim(), ...r });
}
function fr(e) {
  const { className: n, ...r } = e, o = `arkyn_table_body ${n}`;
  return /* @__PURE__ */ a.jsx("tbody", { className: o.trim(), ...r });
}
function hr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_caption ${n}`;
  return /* @__PURE__ */ a.jsx("caption", { className: i.trim(), ...o, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_caption-content", children: r }) });
}
function mr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_table_container ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: i.trim(), ...o, children: /* @__PURE__ */ a.jsx("table", { children: n }) });
}
function pr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_footer ${n}`;
  return /* @__PURE__ */ a.jsxs("tfoot", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("th", { colSpan: 100, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_footer-content", children: r }) }) })
  ] });
}
function gr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_header ${n}`;
  return /* @__PURE__ */ a.jsxs("thead", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ a.jsx("tr", { children: r }),
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" })
  ] });
}
function vr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    loadingText: i,
    size: l = "md",
    leftIcon: d,
    rightIcon: c,
    disabled: u,
    className: m = "",
    children: h,
    ...y
  } = e, b = { xs: 12, sm: 16, md: 20, lg: 24 }[l], N = `arkyn_button loading_text_${!!i} ${o} ${r} ${l} loading_${n} ${m}`;
  return /* @__PURE__ */ a.jsxs("button", { className: N, disabled: u || n, ...y, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ a.jsx($e, { size: b, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-content", children: [
      Qe(b, d),
      h,
      Qe(b, c)
    ] })
  ] });
}
const It = je({});
function br(e) {
  var h, y;
  const n = Rt(), { children: r, className: o, ...i } = e, l = Ee(null), d = ((h = l.current) == null ? void 0 : h.name) || "", c = ((y = n == null ? void 0 : n.fieldErrors) == null ? void 0 : y[d]) || null, u = Zt(), m = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ a.jsx(It.Provider, { value: { error: c, id: u, inputRef: l }, children: /* @__PURE__ */ a.jsx("section", { className: m.trim(), ...i, children: r }) });
}
function ve() {
  return we(It);
}
function yr(e) {
  const {
    name: n,
    className: r = "",
    size: o = "md",
    isError: i,
    defaultChecked: l = !1,
    checked: d = null,
    onCheck: c,
    value: u,
    ...m
  } = e, { id: h, inputRef: y, error: s } = ve(), b = i || !!s, [N, w] = ie(l || !1), k = typeof d == "boolean" ? d : N, v = `arkyn_checkbox ${o} ${b ? "error" : ""} ${k ? "checked" : ""} ${r}`;
  function x() {
    const z = N;
    w(!z), c && c(z ? "" : u || "checked");
  }
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      id: h,
      className: v,
      onClick: x,
      ...m,
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "hidden",
            name: n,
            ref: y,
            value: k ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ a.jsx(Et, {})
      ]
    }
  );
}
function xr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_form_error ${r}`, { error: l } = ve();
  return n ? /* @__PURE__ */ a.jsx("strong", { className: i.trim(), ...o, children: n }) : l ? /* @__PURE__ */ a.jsx("strong", { className: i.trim(), ...o, children: l }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function wr(e) {
  const {
    showAsterisk: n = !1,
    className: r = "",
    ...o
  } = e, { id: i } = ve(), d = `arkyn_form_label ${n ? "show-asterisk" : ""} ${r}`;
  return /* @__PURE__ */ a.jsx("label", { ...o, className: d.trim(), htmlFor: i });
}
function kr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    size: i = "md",
    icon: l,
    disabled: d,
    className: c = "",
    ...u
  } = e, m = { xs: 12, sm: 16, md: 20, lg: 24 }, h = `arkyn_icon_button ${o} ${r} ${i} loading_${n} ${c}`;
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      disabled: d || n,
      className: h.trim(),
      ...u,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ a.jsx($e, { size: m[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ a.jsx(l, { size: m[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function _e(e, n, r) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ a.jsx("p", { className: r, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function dt(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function Ot(e, n) {
  let r = "", o = 0;
  return Array.from(e).forEach((i, l) => {
    n[l + o].match(/[0-9]/) || (r += n[l + o], o++), r += i;
  }), r;
}
function zt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const ft = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Ft = dt(ft.CNPJ).length;
function pn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    defaultValue: s,
    readOnly: b,
    onFocus: N,
    onBlur: w,
    title: k,
    style: v,
    onChange: x,
    ...z
  } = e;
  function O(K) {
    let M = dt(K);
    const X = zt(M);
    if (!(M.length > Ft))
      return M = Ot(M, ft[X]), M;
  }
  const P = h ? "right" : "left", F = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || b || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: F,
    prefix: _e(c, j, "prefix"),
    sufix: _e(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    defaultValue: O(s || ""),
    disabled: y,
    readOnly: b,
    onFocus: N,
    onBlur: w,
    title: k,
    style: v,
    onChange: x,
    loadingPosition: P,
    iconSize: j,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
function gn(e) {
  const [n, r] = ie(!1), o = Ee(null), { inputRef: i, id: l, error: d } = ve(), c = i || o, u = e.isError || !!d, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: b,
    sufix: N,
    iconSize: w,
    loadingPosition: k,
    isLoading: v,
    LeftIcon: x,
    readOnly: z,
    onFocus: O,
    onBlur: P,
    RightIcon: W,
    Spinner: B,
    onChange: J,
    value: U,
    defaultValue: H,
    ...F
  } = pn({ ...e, id: l, isError: u }, n), [Q, j] = ie(H), K = x && !v, M = W && !v, X = k === "left" && v, ee = k === "right" && v;
  function R() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function te(E) {
    let $ = dt(E.target.value);
    const G = zt($);
    $.length > Ft || ($ = Ot($, ft[G]), E.target.value = $, j($), J && J(E));
  }
  function ce(E) {
    r(!0), O && O(E);
  }
  function S(E) {
    r(!1), P && P(E);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: R,
      className: s,
      children: [
        b,
        X && B,
        K && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || v,
            readOnly: z,
            ref: c,
            value: U || Q,
            onFocus: ce,
            onChange: te,
            onBlur: S,
            ...F
          }
        ),
        M && /* @__PURE__ */ a.jsx(W, { size: w, strokeWidth: 2.5 }),
        ee && B,
        N
      ]
    }
  );
}
const vn = 3, bn = (e = "pt-BR", n, r = "BRL", o = !0) => new Intl.NumberFormat(e, {
  style: "currency",
  currency: r,
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(n).slice(o ? vn : 0), Ge = 2, Ct = (e) => typeof e == "number" ? e : Number(e.toString().replace(/[^0-9-]/g, "")), lt = (e) => {
  let n = e;
  return typeof e == "string" ? (n = Ct(e), n % 1 !== 0 && (n = n.toFixed(Ge))) : n = Number.isInteger(e) ? Number(e) * 10 ** Ge : e.toFixed(Ge), Ct(n) / 10 ** Ge;
}, Nt = (e, n, r) => {
  if (!n) return [0, ""];
  const o = lt(n), i = bn(e, o, r);
  return [o, i];
};
function yn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: b,
    onBlur: N,
    title: w,
    style: k,
    // showCents = false,
    max: v = 1e9,
    locale: x = "pt-BR",
    currency: z = "BRL",
    ...O
  } = e, P = h ? "right" : "left", F = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || s || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: F,
    prefix: _e(c, j, "prefix"),
    sufix: _e(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: y,
    locale: x,
    currency: z,
    readOnly: s,
    onFocus: b,
    onBlur: N,
    title: w,
    style: k,
    max: v,
    // showCents,
    loadingPosition: P,
    iconSize: j,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...O
  };
}
function xn(e) {
  const [n, r] = ie(!1), [o, i] = ie("0"), l = Ee(null), { inputRef: d, id: c, error: u } = ve(), m = d || l, h = e.isError || !!u, {
    disabled: y,
    title: s,
    style: b,
    className: N,
    prefix: w,
    sufix: k,
    iconSize: v,
    loadingPosition: x,
    isLoading: z,
    LeftIcon: O,
    readOnly: P,
    onFocus: W,
    onBlur: B,
    RightIcon: J,
    Spinner: U,
    value: H,
    max: F,
    onChangeValue: Q,
    onKeyPress: j,
    currency: K,
    locale: M,
    name: X,
    defaultValue: ee,
    ...R
  } = yn({ ...e, id: c, isError: h }, n), te = O && !z, ce = J && !z, S = x === "left" && z, E = x === "right" && z;
  function $() {
    y || !(m != null && m.current) || (r(!0), m.current.focus());
  }
  function G(q) {
    r(!0), W && W(q);
  }
  function re(q) {
    r(!1), B && B(q);
  }
  const L = (q) => {
    const [ae, ke] = Nt(
      M,
      q,
      K
    );
    return !F || ae <= F ? (i(ke), [ae, ke]) : [lt(o), o];
  }, ye = (q) => {
    q.preventDefault();
    const [ae, ke] = L(q.target.value);
    Q(q, String(ae), String(ke));
  }, he = (q) => j && j(q, q.key, q.key);
  return Ze(() => {
    const q = H || ee || void 0, [, ae] = Nt(M, q, K);
    i(ae);
  }, [K, ee, H]), /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: s,
      style: b,
      onClick: $,
      className: N,
      children: [
        w,
        S && U,
        te && /* @__PURE__ */ a.jsx(O, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: o,
            onChange: ye,
            onBlur: re,
            onFocus: G,
            onKeyUp: he,
            disabled: y || z,
            readOnly: P,
            ref: m,
            ...R
          }
        ),
        /* @__PURE__ */ a.jsx("input", { type: "hidden", name: X, value: lt(o) }),
        E && U,
        ce && /* @__PURE__ */ a.jsx(J, { size: v, strokeWidth: 2.5 }),
        k
      ]
    }
  );
}
function wn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: b,
    onBlur: N,
    title: w,
    style: k,
    onChange: v,
    showMask: x = !1,
    type: z,
    ...O
  } = e, P = h ? "right" : "left", F = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || s || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: F,
    prefix: _e(c, j, "prefix"),
    sufix: _e(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: b,
    onBlur: N,
    title: w,
    style: k,
    onChange: v,
    loadingPosition: P,
    iconSize: j,
    showMask: x,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...O
  };
}
const kn = Qt((e, n) => /* @__PURE__ */ a.jsx("input", { ref: n, ...e }));
function Cn(e) {
  const [n, r] = ie(!1), o = Ee(null), { inputRef: i, id: l, error: d } = ve(), c = i || o, u = e.isError || !!d, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: b,
    sufix: N,
    iconSize: w,
    loadingPosition: k,
    isLoading: v,
    LeftIcon: x,
    readOnly: z,
    onFocus: O,
    onBlur: P,
    RightIcon: W,
    Spinner: B,
    ...J
  } = wn({ ...e, id: l, isError: u }, n), U = x && !v, H = W && !v, F = k === "left" && v, Q = k === "right" && v;
  function j() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function K(X) {
    r(!0), O && O(X);
  }
  function M(X) {
    r(!1), P && P(X);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: j,
      className: s,
      children: [
        b,
        F && B,
        U && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          ln,
          {
            component: kn,
            ref: c,
            onFocus: K,
            onBlur: M,
            ...J
          }
        ),
        H && /* @__PURE__ */ a.jsx(W, { size: w, strokeWidth: 2.5 }),
        Q && B,
        N
      ]
    }
  );
}
function Nn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: b,
    onBlur: N,
    title: w,
    style: k,
    onChange: v,
    ...x
  } = e, z = h ? "right" : "left", U = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || s || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, F = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: U,
    prefix: _e(c, F, "prefix"),
    sufix: _e(u, F, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: b,
    onBlur: N,
    title: w,
    style: k,
    onChange: v,
    loadingPosition: z,
    iconSize: F,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: F, strokeWidth: 2.5 }),
    ...x
  };
}
function _n(e) {
  const [n, r] = ie(!1), o = Ee(null), { inputRef: i, id: l, error: d } = ve(), c = i || o, u = e.isError || !!d, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: b,
    sufix: N,
    iconSize: w,
    loadingPosition: k,
    isLoading: v,
    LeftIcon: x,
    readOnly: z,
    onFocus: O,
    onBlur: P,
    RightIcon: W,
    type: B,
    Spinner: J,
    ...U
  } = Nn({ ...e, id: l, isError: u }, n), H = x && !v, F = W && !v, Q = k === "left" && v, j = k === "right" && v;
  function K() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function M(ee) {
    r(!0), O && O(ee);
  }
  function X(ee) {
    r(!1), P && P(ee);
  }
  return B === "hidden" ? /* @__PURE__ */ a.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: c,
      ...U
    }
  ) : /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: K,
      className: s,
      children: [
        b,
        Q && J,
        H && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || v,
            readOnly: z,
            ref: c,
            onFocus: M,
            onBlur: X,
            type: B,
            ...U
          }
        ),
        F && /* @__PURE__ */ a.jsx(W, { size: w, strokeWidth: 2.5 }),
        j && J,
        N
      ]
    }
  );
}
function Cr(e) {
  return e.type === "currency" ? /* @__PURE__ */ a.jsx(xn, { ...e }) : e.type === "masked" ? /* @__PURE__ */ a.jsx(Cn, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ a.jsx(gn, { ...e }) : /* @__PURE__ */ a.jsx(_n, { ...e });
}
const Dt = je({});
function jn() {
  return we(Dt);
}
function Nr(e) {
  const {
    defaultValue: n,
    name: r,
    value: o,
    onChange: i,
    size: l = "md",
    className: d,
    ...c
  } = e, [u, m] = ie(n || ""), { inputRef: h, id: y } = ve();
  function s(N) {
    m(N), i && i(N);
  }
  const b = `arkyn_radio_group ${l} ${d || ""}`;
  return /* @__PURE__ */ a.jsxs(
    Dt.Provider,
    {
      value: { onChange: s, value: o || u, size: l },
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: y,
            readOnly: !0,
            name: r,
            ref: h,
            value: u
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: b.trim(), ...c })
      ]
    }
  );
}
function _r(e) {
  const {
    value: n,
    size: r,
    disabled: o,
    children: i
  } = e, { onChange: l, size: d, value: c } = jn(), { error: u } = ve(), b = `arkyn_radio_box ${r || d} ${c === n ? "isChecked" : ""} ${u ? "isErrored" : ""} ${o ? "isDisabled" : ""}`;
  return /* @__PURE__ */ a.jsxs("label", { className: b.trim(), children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        disabled: o,
        onClick: () => l(n),
        onFocus: () => l(n)
      }
    ),
    i
  ] });
}
function En(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    leftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: y,
    onBlur: s,
    title: b,
    style: N,
    closeOnSelect: w = !0,
    ...k
  } = e, P = `arkyn_select ${c ? "hasPrefix" : ""} ${d} ${i} ${m || h || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, B = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: P,
    prefix: mn(c, B, "prefix"),
    LeftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: y,
    onBlur: s,
    title: b,
    closeOnSelect: w,
    style: N,
    iconSize: B,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: B, strokeWidth: 2.5 }),
    ...k
  };
}
function jr(e) {
  var $;
  const [n, r] = ie(!1), { inputRef: o, id: i, error: l } = ve(), d = Ee(null), c = o || d, u = e.isError || !!l, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: b,
    iconSize: N,
    isLoading: w,
    LeftIcon: k,
    value: v = null,
    defaultValue: x = "",
    readOnly: z,
    onFocus: O,
    onBlur: P,
    Spinner: W,
    name: B,
    placeholder: J,
    onSelect: U,
    options: H,
    optionMaxHeight: F,
    closeOnSelect: Q,
    ...j
  } = En({ ...e, id: i, isError: u }, n), [K, M] = ie(x);
  function X() {
    m || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function ee(G) {
    n || (r(!0), O && O(G));
  }
  function R() {
    r(!1), P && c.current && c.current.blur();
  }
  function te(G) {
    const { label: re, value: L } = G;
    M(K !== L ? L : ""), U && U({ label: re, value: L }), Q && R();
  }
  const ce = typeof v == "string" ? v : K, S = (($ = H.find((G) => G.value === ce)) == null ? void 0 : $.label) || "", E = () => {
    if (!n && S) return !0;
    if (!n && !S) return !1;
    if (n && S) return !0;
    if (n && !S) return !1;
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "section",
      {
        title: h,
        style: y,
        onClick: X,
        className: `${s} placeholder_dark_${E()}`,
        children: [
          b,
          k && /* @__PURE__ */ a.jsx(k, { size: N, strokeWidth: 2.5 }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              disabled: m || w,
              readOnly: !0,
              placeholder: S || J,
              onFocus: ee,
              ...j
            }
          ),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "hidden",
              ref: c,
              name: B,
              value: ce || "",
              readOnly: !0
            }
          ),
          n && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: F },
              children: [
                H.map(({ label: G, value: re }) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    onClick: () => te({ label: G, value: re }),
                    className: ce === re ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      G,
                      " ",
                      /* @__PURE__ */ a.jsx(Et, {})
                    ]
                  },
                  re
                )),
                H.length <= 0 && /* @__PURE__ */ a.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !w && /* @__PURE__ */ a.jsx(
            en,
            {
              className: "arkyn_select_arrow",
              size: N,
              strokeWidth: 2.5
            }
          ),
          w && W
        ]
      }
    ),
    n && /* @__PURE__ */ a.jsx("aside", { className: "arkyn_select_overlay", onClick: R })
  ] });
}
function Er(e) {
  const {
    variant: n = "solid",
    size: r = "md",
    className: o,
    disabled: i = !1,
    readOnly: l = !1,
    onFocus: d,
    onBlur: c,
    title: u,
    style: m,
    ...h
  } = e, [y, s] = ie(!1), { inputRef: b, id: N, error: w } = ve(), k = Ee(null), v = b || k, z = e.isError || !!w ? "errored" : "", W = `arkyn_textarea ${n} ${r} ${i || l ? "opacity" : ""} ${z} ${y ? "focused" : ""} ${o}`;
  function B() {
    i || !(v != null && v.current) || (s(!0), v.current.focus());
  }
  function J(H) {
    s(!0), d && d(H);
  }
  function U(H) {
    s(!1), c && c(H);
  }
  return /* @__PURE__ */ a.jsx(
    "section",
    {
      title: u,
      style: m,
      onClick: B,
      className: W,
      children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          id: N,
          disabled: i,
          readOnly: l,
          ref: v,
          onFocus: J,
          onBlur: U,
          ...h
        }
      )
    }
  );
}
function Sr(e) {
  const { className: n = "", ...r } = e, o = `arkyn_breadcrumb_container ${n}`;
  return /* @__PURE__ */ a.jsx("nav", { className: o, ...r });
}
function Rr(e) {
  const { pathname: n } = $t(), {
    className: r = "",
    disabled: o = !1,
    children: i,
    to: l,
    ...d
  } = e, u = `arkyn_breadcrumb_link ${n === l ? "active" : "inactive"} ${r}`;
  return o ? /* @__PURE__ */ a.jsxs("p", { className: u, children: [
    /* @__PURE__ */ a.jsx(ot, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ a.jsxs(sn, { to: l, className: u, ...d, children: [
    /* @__PURE__ */ a.jsx(ot, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function Sn(e = "") {
  const n = $t(), r = new URLSearchParams(n.search), o = e ? `${e}:` : "", i = (l) => {
    Object.entries(l).forEach(([d, c]) => {
      c === void 0 ? r.delete(`${o}${d}`) : r.set(`${o}${d}`, String(c));
    });
  };
  return {
    getParam: (l) => r.get(`${o}${l}`),
    getScopedSearch: (l) => {
      i(l);
      let d = r.toString();
      return d && (d = "?" + d), d;
    }
  };
}
function $r(e) {
  const {
    scope: n,
    totalCountRegisters: r,
    perPageKey: o = "per_page",
    pageKey: i = "page",
    siblingsCount: l = 2,
    ...d
  } = e, c = on(), { getParam: u, getScopedSearch: m } = Sn(n), h = Number(u(i)) || 1, y = Number(u(o)) || 20, s = Math.ceil(r / y), b = hn(h, l), N = fn(h, l, s);
  function w(k) {
    c(m({ page: k }));
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "arkyn_pagination", ...d, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: h <= 1,
        onClick: () => w(h - 1),
        children: /* @__PURE__ */ a.jsx(tn, {})
      }
    ),
    h > 1 + l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => w(1),
          children: "1"
        }
      ),
      h > 2 + l && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(yt, {}) })
    ] }),
    b.map((k, v) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(k),
        className: "arkyn_pagination-page_button",
        children: k
      },
      v
    )),
    /* @__PURE__ */ a.jsx("button", { className: "arkyn_pagination-current", disabled: !0, children: h }),
    N.map((k, v) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(k),
        className: "arkyn_pagination-page_button",
        children: k
      },
      v
    )),
    h + l < s && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      h + 1 + l < s && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(yt, {}) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => w(s),
          children: s
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: h >= s,
        onClick: () => w(h + 1),
        children: /* @__PURE__ */ a.jsx(ot, {})
      }
    )
  ] });
}
const ct = je({});
function Rn() {
  if (!ct)
    throw new Error("useTabContext must be used within a TabProvider");
  return we(ct);
}
function Pr(e) {
  const {
    children: n,
    onClick: r,
    defaultActive: o,
    className: i,
    ...l
  } = e, [d, c] = ie(o || ""), [u, m] = ie(!0), h = Ee(null), y = `arkyn_tab_container ${i || ""}`, [s, b] = ie({
    width: "0px",
    left: "0px",
    transition: "none"
  }), N = (k, v) => {
    const x = k.getBoundingClientRect(), z = h.current.getBoundingClientRect(), O = v ? void 0 : "none";
    m(!1), b({
      transition: O,
      width: `${x.width}px`,
      left: `${x.left - z.left}px`
    });
  };
  Ze(() => {
    const k = h.current;
    if (!k) return;
    let v = null;
    v = k.querySelector("button.active"), v && N(v);
  }, []);
  const w = (k) => {
    const v = k.target;
    v && (c(v.value), v.classList.add("active"), N(v, !0), r && r(v.value));
  };
  return /* @__PURE__ */ a.jsxs(
    "nav",
    {
      ref: h,
      onClick: w,
      className: y.trim(),
      ...l,
      children: [
        /* @__PURE__ */ a.jsx(ct.Provider, { value: { handleTabClick: w, showInitialTab: u, value: d }, children: n }),
        /* @__PURE__ */ a.jsx("div", { className: "active-line", style: s })
      ]
    }
  );
}
function Tr(e) {
  const { children: n, className: r = "", onClick: o, ...i } = e, { value: l, showInitialTab: d, handleTabClick: c } = Rn(), u = l === i.value && l ? "active" : "", h = `arkyn_tab_button ${l === i.value && d ? "show_border_bottom" : ""} ${u} ${r}`;
  function y(s) {
    c(s), o && o(s);
  }
  return /* @__PURE__ */ a.jsx("button", { onClick: y, className: h.trim(), ...i, children: n });
}
const Bt = je({});
function Ir(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    orientation: o = "left",
    children: i,
    className: l,
    ...d
  } = e, c = o === "left" ? "-100%" : "100%", m = `arkyn_drawer_container ${o} ${n ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ a.jsx(Bt.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ a.jsx(Pt, { children: n && /* @__PURE__ */ a.jsxs("aside", { className: m.trim(), ...d, children: [
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        className: "arkyn_drawer_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ve.div,
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
function Or(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: l } = we(Bt), d = `arkyn_drawer_header ${r}`;
  return /* @__PURE__ */ a.jsxs("header", { className: d.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: l,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ a.jsx(St, { size: 24 })
      }
    )
  ] });
}
const Mt = je({});
function zr(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    children: o,
    className: i = "",
    ...l
  } = e, c = `arkyn_modal_container ${n ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ a.jsx(Mt.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ a.jsx(Pt, { children: n && /* @__PURE__ */ a.jsxs("aside", { className: c.trim(), ...l, children: [
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        className: "arkyn_modal_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ve.div,
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
function Fr(e) {
  const { alignment: n = "right", className: r, ...o } = e, i = `arkyn_modal_footer ${n} ${r}`;
  return /* @__PURE__ */ a.jsx("footer", { className: i.trim(), ...o });
}
function Dr(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: l } = we(Mt), d = `arkyn_modal_header ${r}`;
  return /* @__PURE__ */ a.jsxs("header", { className: d.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: l,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ a.jsx(St, { size: 24 })
      }
    )
  ] });
}
function Br(e) {
  const { children: n, button: r, closeOnClick: o, orientation: i = "bottom-left" } = e, [l, d] = ie(!1), c = `arkyn_popover ${i} ${l ? "show" : ""}`;
  function u() {
    l || d(!0);
  }
  return /* @__PURE__ */ a.jsxs("div", { className: c, onClick: u, children: [
    r,
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        style: { visibility: l ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: l ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => o && d(!1),
        className: "arkyn_popover-content",
        children: n
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      "div",
      {
        onClick: () => d(!1),
        className: "arkyn_popover-overlay"
      }
    )
  ] });
}
function $n(e) {
  const { message: n, title: r, type: o, size: i = "lg" } = e, l = `arkyn_toast ${o} ${i}`;
  function d() {
    switch (o) {
      case "info":
        return /* @__PURE__ */ a.jsx(xt, {});
      case "success":
        return /* @__PURE__ */ a.jsx(an, {});
      case "danger":
        return /* @__PURE__ */ a.jsx(rn, {});
      case "warning":
        return /* @__PURE__ */ a.jsx(nn, {});
      default:
        return /* @__PURE__ */ a.jsx(xt, {});
    }
  }
  return /* @__PURE__ */ a.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { className: "bg" }),
      /* @__PURE__ */ a.jsx(d, {})
    ] }),
    /* @__PURE__ */ a.jsxs("p", { children: [
      /* @__PURE__ */ a.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ a.jsx("span", { children: n })
    ] })
  ] });
}
function Mr(e) {
  const {
    text: n,
    size: r = "lg",
    children: o,
    orientation: i = "top",
    className: l,
    ...d
  } = e, c = `arkyn_tooltip ${r} ${i} ${l}`;
  return /* @__PURE__ */ a.jsxs("div", { className: c.trim(), ...d, children: [
    o,
    /* @__PURE__ */ a.jsx("div", { className: "arkyn_tooltip-text", children: n })
  ] });
}
const ht = je({}), Lt = je({});
function Pn() {
  const e = we(Lt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function _t(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function Lr() {
  const e = Rt(), { closeModal: n } = we(ht), { showToast: r } = Pn();
  Ze(() => {
    const o = e == null ? void 0 : e.closeModalKey;
    o && n(o);
  }, [e]), Ze(() => {
    const o = e == null ? void 0 : e.toast, i = e == null ? void 0 : e.message;
    _t(o) && r(o), !_t(o) && i && r({
      message: i,
      title: "Atenção!",
      type: "warning"
    });
  }, [e]);
}
const At = je({});
function Ar(e) {
  const n = we(At);
  if (Object.entries(n).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: r,
      drawerIsOpen: o,
      openDrawer: i,
      closeDrawer: l
    } = n, d = o(e), c = r(e);
    return { drawerIsOpen: d, drawerData: c, openDrawer: (h) => i(e, h), closeDrawer: () => l(e) };
  } else
    return n;
}
function Vr(e) {
  const n = we(ht);
  if (Object.entries(n).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: r,
      modalIsOpen: o,
      openModal: i,
      closeModal: l
    } = n, d = o(e), c = r(e);
    return { modalIsOpen: d, modalData: c, openModal: (h) => i(e, h), closeModal: () => l(e) };
  } else
    return n;
}
function Wr(e) {
  const { children: n = !1 } = e, [r, o] = ie([]);
  function i(u) {
    return !!r.some((m) => m.key === u);
  }
  function l(u) {
    var m;
    return (m = r.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function d(u, m) {
    const h = i(u);
    o(h ? (y) => [...y.filter((b) => b.key !== u), { key: u, data: m }] : [...r, { key: u, data: m }]);
  }
  function c(u) {
    o(r.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ a.jsx(
    At.Provider,
    {
      value: { drawerIsOpen: i, drawerData: l, openDrawer: d, closeDrawer: c },
      children: n
    }
  );
}
function Yr(e) {
  const { children: n = !1 } = e, [r, o] = ie([]);
  function i(u) {
    return !!r.some((m) => m.key === u);
  }
  function l(u) {
    var m;
    return (m = r.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function d(u, m) {
    const h = i(u);
    o(h ? (y) => [...y.filter((b) => b.key !== u), { key: u, data: m }] : [...r, { key: u, data: m }]);
  }
  function c(u) {
    o(r.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ a.jsx(
    ht.Provider,
    {
      value: { modalIsOpen: i, modalData: l, openModal: d, closeModal: c },
      children: n
    }
  );
}
var Tn = (e) => {
  switch (e) {
    case "success":
      return zn;
    case "info":
      return Dn;
    case "warning":
      return Fn;
    case "error":
      return Bn;
    default:
      return null;
  }
}, In = Array(12).fill(0), On = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, In.map((n, r) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), zn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Fn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Dn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Bn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Mn = () => {
  let [e, n] = p.useState(document.hidden);
  return p.useEffect(() => {
    let r = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, ut = 1, Ln = class {
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
      let { message: r, ...o } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : ut++, l = this.toasts.find((c) => c.id === i), d = e.dismissible === void 0 ? !0 : e.dismissible;
      return l ? this.toasts = this.toasts.map((c) => c.id === i ? (this.publish({ ...c, ...e, id: i, title: r }), { ...c, ...e, id: i, dismissible: d, title: r }) : c) : this.addToast({ title: r, ...o, dismissible: d, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({ id: n.id, dismiss: !0 }));
    }), this.subscribers.forEach((n) => n({ id: e, dismiss: !0 })), e), this.message = (e, n) => this.create({ ...n, message: e }), this.error = (e, n) => this.create({ ...n, message: e, type: "error" }), this.success = (e, n) => this.create({ ...n, type: "success", message: e }), this.info = (e, n) => this.create({ ...n, type: "info", message: e }), this.warning = (e, n) => this.create({ ...n, type: "warning", message: e }), this.loading = (e, n) => this.create({ ...n, type: "loading", message: e }), this.promise = (e, n) => {
      if (!n) return;
      let r;
      n.loading !== void 0 && (r = this.create({ ...n, promise: e, type: "loading", message: n.loading, description: typeof n.description != "function" ? n.description : void 0 }));
      let o = e instanceof Promise ? e : e(), i = r !== void 0;
      return o.then(async (l) => {
        if (Vn(l) && !l.ok) {
          i = !1;
          let d = typeof n.error == "function" ? await n.error(`HTTP error! status: ${l.status}`) : n.error, c = typeof n.description == "function" ? await n.description(`HTTP error! status: ${l.status}`) : n.description;
          this.create({ id: r, type: "error", message: d, description: c });
        } else if (n.success !== void 0) {
          i = !1;
          let d = typeof n.success == "function" ? await n.success(l) : n.success, c = typeof n.description == "function" ? await n.description(l) : n.description;
          this.create({ id: r, type: "success", message: d, description: c });
        }
      }).catch(async (l) => {
        if (n.error !== void 0) {
          i = !1;
          let d = typeof n.error == "function" ? await n.error(l) : n.error, c = typeof n.description == "function" ? await n.description(l) : n.description;
          this.create({ id: r, type: "error", message: d, description: c });
        }
      }).finally(() => {
        var l;
        i && (this.dismiss(r), r = void 0), (l = n.finally) == null || l.call(n);
      }), r;
    }, this.custom = (e, n) => {
      let r = (n == null ? void 0 : n.id) || ut++;
      return this.create({ jsx: e(r), id: r, ...n }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, fe = new Ln(), An = (e, n) => {
  let r = (n == null ? void 0 : n.id) || ut++;
  return fe.addToast({ title: e, ...n, id: r }), r;
}, Vn = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Wn = An, Yn = () => fe.toasts, Un = Object.assign(Wn, { success: fe.success, info: fe.info, warning: fe.warning, error: fe.error, custom: fe.custom, message: fe.message, promise: fe.promise, dismiss: fe.dismiss, loading: fe.loading }, { getHistory: Yn });
function Hn(e, { insertAt: n } = {}) {
  if (!e || typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
Hn(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function qe(e) {
  return e.label !== void 0;
}
var Kn = 3, Xn = "32px", Jn = 4e3, Gn = 356, qn = 14, Zn = 20, Qn = 200;
function er(...e) {
  return e.filter(Boolean).join(" ");
}
var tr = (e) => {
  var n, r, o, i, l, d, c, u, m, h;
  let { invert: y, toast: s, unstyled: b, interacting: N, setHeights: w, visibleToasts: k, heights: v, index: x, toasts: z, expanded: O, removeToast: P, defaultRichColors: W, closeButton: B, style: J, cancelButtonStyle: U, actionButtonStyle: H, className: F = "", descriptionClassName: Q = "", duration: j, position: K, gap: M, loadingIcon: X, expandByDefault: ee, classNames: R, icons: te, closeButtonAriaLabel: ce = "Close toast", pauseWhenPageIsHidden: S, cn: E } = e, [$, G] = p.useState(!1), [re, L] = p.useState(!1), [ye, he] = p.useState(!1), [q, ae] = p.useState(!1), [ke, Pe] = p.useState(0), [et, We] = p.useState(0), Se = p.useRef(null), me = p.useRef(null), Ye = x === 0, Ue = x + 1 <= k, se = s.type, Ce = s.dismissible !== !1, tt = s.className || "", ze = s.descriptionClassName || "", Te = p.useMemo(() => v.findIndex((_) => _.toastId === s.id) || 0, [v, s.id]), nt = p.useMemo(() => {
    var _;
    return (_ = s.closeButton) != null ? _ : B;
  }, [s.closeButton, B]), Fe = p.useMemo(() => s.duration || j || Jn, [s.duration, j]), Ie = p.useRef(0), pe = p.useRef(0), He = p.useRef(0), xe = p.useRef(null), [De, Be] = K.split("-"), Ke = p.useMemo(() => v.reduce((_, A, V) => V >= Te ? _ : _ + A.height, 0), [v, Te]), Xe = Mn(), rt = s.invert || y, Me = se === "loading";
  pe.current = p.useMemo(() => Te * M + Ke, [Te, Ke]), p.useEffect(() => {
    G(!0);
  }, []), p.useLayoutEffect(() => {
    if (!$) return;
    let _ = me.current, A = _.style.height;
    _.style.height = "auto";
    let V = _.getBoundingClientRect().height;
    _.style.height = A, We(V), w((oe) => oe.find((ue) => ue.toastId === s.id) ? oe.map((ue) => ue.toastId === s.id ? { ...ue, height: V } : ue) : [{ toastId: s.id, height: V, position: s.position }, ...oe]);
  }, [$, s.title, s.description, w, s.id]);
  let be = p.useCallback(() => {
    L(!0), Pe(pe.current), w((_) => _.filter((A) => A.toastId !== s.id)), setTimeout(() => {
      P(s);
    }, Qn);
  }, [s, P, w, pe]);
  p.useEffect(() => {
    if (s.promise && se === "loading" || s.duration === 1 / 0 || s.type === "loading") return;
    let _, A = Fe;
    return O || N || S && Xe ? (() => {
      if (He.current < Ie.current) {
        let V = (/* @__PURE__ */ new Date()).getTime() - Ie.current;
        A = A - V;
      }
      He.current = (/* @__PURE__ */ new Date()).getTime();
    })() : A !== 1 / 0 && (Ie.current = (/* @__PURE__ */ new Date()).getTime(), _ = setTimeout(() => {
      var V;
      (V = s.onAutoClose) == null || V.call(s, s), be();
    }, A)), () => clearTimeout(_);
  }, [O, N, ee, s, Fe, be, s.promise, se, S, Xe]), p.useEffect(() => {
    let _ = me.current;
    if (_) {
      let A = _.getBoundingClientRect().height;
      return We(A), w((V) => [{ toastId: s.id, height: A, position: s.position }, ...V]), () => w((V) => V.filter((oe) => oe.toastId !== s.id));
    }
  }, [w, s.id]), p.useEffect(() => {
    s.delete && be();
  }, [be, s.delete]);
  function at() {
    return te != null && te.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": se === "loading" }, te.loading) : X ? p.createElement("div", { className: "sonner-loader", "data-visible": se === "loading" }, X) : p.createElement(On, { visible: se === "loading" });
  }
  return p.createElement("li", { "aria-live": s.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: me, className: E(F, tt, R == null ? void 0 : R.toast, (n = s == null ? void 0 : s.classNames) == null ? void 0 : n.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[se], (r = s == null ? void 0 : s.classNames) == null ? void 0 : r[se]), "data-sonner-toast": "", "data-rich-colors": (o = s.richColors) != null ? o : W, "data-styled": !(s.jsx || s.unstyled || b), "data-mounted": $, "data-promise": !!s.promise, "data-removed": re, "data-visible": Ue, "data-y-position": De, "data-x-position": Be, "data-index": x, "data-front": Ye, "data-swiping": ye, "data-dismissible": Ce, "data-type": se, "data-invert": rt, "data-swipe-out": q, "data-expanded": !!(O || ee && $), style: { "--index": x, "--toasts-before": x, "--z-index": z.length - x, "--offset": `${re ? ke : pe.current}px`, "--initial-height": ee ? "auto" : `${et}px`, ...J, ...s.style }, onPointerDown: (_) => {
    Me || !Ce || (Se.current = /* @__PURE__ */ new Date(), Pe(pe.current), _.target.setPointerCapture(_.pointerId), _.target.tagName !== "BUTTON" && (he(!0), xe.current = { x: _.clientX, y: _.clientY }));
  }, onPointerUp: () => {
    var _, A, V, oe;
    if (q || !Ce) return;
    xe.current = null;
    let ue = Number(((_ = me.current) == null ? void 0 : _.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), Ne = (/* @__PURE__ */ new Date()).getTime() - ((A = Se.current) == null ? void 0 : A.getTime()), Je = Math.abs(ue) / Ne;
    if (Math.abs(ue) >= Zn || Je > 0.11) {
      Pe(pe.current), (V = s.onDismiss) == null || V.call(s, s), be(), ae(!0);
      return;
    }
    (oe = me.current) == null || oe.style.setProperty("--swipe-amount", "0px"), he(!1);
  }, onPointerMove: (_) => {
    var A;
    if (!xe.current || !Ce) return;
    let V = _.clientY - xe.current.y, oe = _.clientX - xe.current.x, ue = (De === "top" ? Math.min : Math.max)(0, V), Ne = _.pointerType === "touch" ? 10 : 2;
    Math.abs(ue) > Ne ? (A = me.current) == null || A.style.setProperty("--swipe-amount", `${V}px`) : Math.abs(oe) > Ne && (xe.current = null);
  } }, nt && !s.jsx ? p.createElement("button", { "aria-label": ce, "data-disabled": Me, "data-close-button": !0, onClick: Me || !Ce ? () => {
  } : () => {
    var _;
    be(), (_ = s.onDismiss) == null || _.call(s, s);
  }, className: E(R == null ? void 0 : R.closeButton, (i = s == null ? void 0 : s.classNames) == null ? void 0 : i.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, s.jsx || p.isValidElement(s.title) ? s.jsx || s.title : p.createElement(p.Fragment, null, se || s.icon || s.promise ? p.createElement("div", { "data-icon": "", className: E(R == null ? void 0 : R.icon, (l = s == null ? void 0 : s.classNames) == null ? void 0 : l.icon) }, s.promise || s.type === "loading" && !s.icon ? s.icon || at() : null, s.type !== "loading" ? s.icon || (te == null ? void 0 : te[se]) || Tn(se) : null) : null, p.createElement("div", { "data-content": "", className: E(R == null ? void 0 : R.content, (d = s == null ? void 0 : s.classNames) == null ? void 0 : d.content) }, p.createElement("div", { "data-title": "", className: E(R == null ? void 0 : R.title, (c = s == null ? void 0 : s.classNames) == null ? void 0 : c.title) }, s.title), s.description ? p.createElement("div", { "data-description": "", className: E(Q, ze, R == null ? void 0 : R.description, (u = s == null ? void 0 : s.classNames) == null ? void 0 : u.description) }, s.description) : null), p.isValidElement(s.cancel) ? s.cancel : s.cancel && qe(s.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: s.cancelButtonStyle || U, onClick: (_) => {
    var A, V;
    qe(s.cancel) && Ce && ((V = (A = s.cancel).onClick) == null || V.call(A, _), be());
  }, className: E(R == null ? void 0 : R.cancelButton, (m = s == null ? void 0 : s.classNames) == null ? void 0 : m.cancelButton) }, s.cancel.label) : null, p.isValidElement(s.action) ? s.action : s.action && qe(s.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: s.actionButtonStyle || H, onClick: (_) => {
    var A, V;
    qe(s.action) && (_.defaultPrevented || ((V = (A = s.action).onClick) == null || V.call(A, _), be()));
  }, className: E(R == null ? void 0 : R.actionButton, (h = s == null ? void 0 : s.classNames) == null ? void 0 : h.actionButton) }, s.action.label) : null));
};
function jt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var nr = (e) => {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: l, className: d, offset: c, theme: u = "light", richColors: m, duration: h, style: y, visibleToasts: s = Kn, toastOptions: b, dir: N = jt(), gap: w = qn, loadingIcon: k, icons: v, containerAriaLabel: x = "Notifications", pauseWhenPageIsHidden: z, cn: O = er } = e, [P, W] = p.useState([]), B = p.useMemo(() => Array.from(new Set([r].concat(P.filter((S) => S.position).map((S) => S.position)))), [P, r]), [J, U] = p.useState([]), [H, F] = p.useState(!1), [Q, j] = p.useState(!1), [K, M] = p.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), X = p.useRef(null), ee = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), R = p.useRef(null), te = p.useRef(!1), ce = p.useCallback((S) => {
    var E;
    (E = P.find(($) => $.id === S.id)) != null && E.delete || fe.dismiss(S.id), W(($) => $.filter(({ id: G }) => G !== S.id));
  }, [P]);
  return p.useEffect(() => fe.subscribe((S) => {
    if (S.dismiss) {
      W((E) => E.map(($) => $.id === S.id ? { ...$, delete: !0 } : $));
      return;
    }
    setTimeout(() => {
      cn.flushSync(() => {
        W((E) => {
          let $ = E.findIndex((G) => G.id === S.id);
          return $ !== -1 ? [...E.slice(0, $), { ...E[$], ...S }, ...E.slice($ + 1)] : [S, ...E];
        });
      });
    });
  }), []), p.useEffect(() => {
    if (u !== "system") {
      M(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M("dark") : M("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: S }) => {
      M(S ? "dark" : "light");
    });
  }, [u]), p.useEffect(() => {
    P.length <= 1 && F(!1);
  }, [P]), p.useEffect(() => {
    let S = (E) => {
      var $, G;
      o.every((re) => E[re] || E.code === re) && (F(!0), ($ = X.current) == null || $.focus()), E.code === "Escape" && (document.activeElement === X.current || (G = X.current) != null && G.contains(document.activeElement)) && F(!1);
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [o]), p.useEffect(() => {
    if (X.current) return () => {
      R.current && (R.current.focus({ preventScroll: !0 }), R.current = null, te.current = !1);
    };
  }, [X.current]), P.length ? p.createElement("section", { "aria-label": `${x} ${ee}`, tabIndex: -1 }, B.map((S, E) => {
    var $;
    let [G, re] = S.split("-");
    return p.createElement("ol", { key: S, dir: N === "auto" ? jt() : N, tabIndex: -1, ref: X, className: d, "data-sonner-toaster": !0, "data-theme": K, "data-y-position": G, "data-x-position": re, style: { "--front-toast-height": `${(($ = J[0]) == null ? void 0 : $.height) || 0}px`, "--offset": typeof c == "number" ? `${c}px` : c || Xn, "--width": `${Gn}px`, "--gap": `${w}px`, ...y }, onBlur: (L) => {
      te.current && !L.currentTarget.contains(L.relatedTarget) && (te.current = !1, R.current && (R.current.focus({ preventScroll: !0 }), R.current = null));
    }, onFocus: (L) => {
      L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || te.current || (te.current = !0, R.current = L.relatedTarget);
    }, onMouseEnter: () => F(!0), onMouseMove: () => F(!0), onMouseLeave: () => {
      Q || F(!1);
    }, onPointerDown: (L) => {
      L.target instanceof HTMLElement && L.target.dataset.dismissible === "false" || j(!0);
    }, onPointerUp: () => j(!1) }, P.filter((L) => !L.position && E === 0 || L.position === S).map((L, ye) => {
      var he, q;
      return p.createElement(tr, { key: L.id, icons: v, index: ye, toast: L, defaultRichColors: m, duration: (he = b == null ? void 0 : b.duration) != null ? he : h, className: b == null ? void 0 : b.className, descriptionClassName: b == null ? void 0 : b.descriptionClassName, invert: n, visibleToasts: s, closeButton: (q = b == null ? void 0 : b.closeButton) != null ? q : l, interacting: Q, position: S, style: b == null ? void 0 : b.style, unstyled: b == null ? void 0 : b.unstyled, classNames: b == null ? void 0 : b.classNames, cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle, actionButtonStyle: b == null ? void 0 : b.actionButtonStyle, removeToast: ce, toasts: P.filter((ae) => ae.position == L.position), heights: J.filter((ae) => ae.position == L.position), setHeights: U, expandByDefault: i, gap: w, loadingIcon: k, expanded: H, pauseWhenPageIsHidden: z, cn: O });
    }));
  })) : null;
};
function Ur({ children: e }) {
  function n(r) {
    Un.custom((o) => /* @__PURE__ */ a.jsx($n, { ...r }));
  }
  return /* @__PURE__ */ a.jsxs(Lt.Provider, { value: { showToast: n }, children: [
    /* @__PURE__ */ a.jsx(nr, {}),
    e
  ] });
}
export {
  cr as Badge,
  Sr as BreadcrumbContainer,
  Rr as BreadcrumbLink,
  vr as Button,
  yr as Checkbox,
  ur as Divider,
  Ir as DrawerContainer,
  Or as DrawerHeader,
  Wr as DrawerProvider,
  br as FormController,
  xr as FormError,
  wr as FormLabel,
  kr as IconButton,
  Cr as Input,
  zr as ModalContainer,
  Fr as ModalFooter,
  Dr as ModalHeader,
  Yr as ModalProvider,
  $r as Pagination,
  Br as Popover,
  _r as RadioBox,
  Nr as RadioGroup,
  jr as Select,
  dr as Skeleton,
  Tr as TabButton,
  Pr as TabContainer,
  fr as TableBody,
  hr as TableCaption,
  mr as TableContainer,
  pr as TableFooter,
  gr as TableHeader,
  Er as Textarea,
  $n as Toast,
  Ur as ToastProvider,
  Mr as Tooltip,
  Lr as useAutomation,
  Ar as useDrawer,
  Vr as useModal,
  Sn as useScopedParams,
  Pn as useToast
};
