import p, { createContext as Re, useRef as _e, useId as qt, useContext as je, useState as le, useEffect as st, forwardRef as Zt, useLayoutEffect as Qt } from "react";
import { Loader2 as $e, Check as jt, ChevronDown as en, ChevronRight as ot, ChevronLeft as tn, Ellipsis as bt, X as Et, Info as yt, AlertCircle as nn, XCircle as rn, CheckCircle2 as an } from "lucide-react";
import { useActionData as St, useLocation as Rt, Link as sn, useNavigate as on } from "@remix-run/react";
import { InputMask as ln } from "@react-input/mask";
import { AnimatePresence as $t, motion as Ve } from "framer-motion";
import cn from "react-dom";
var it = { exports: {} }, Be = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xt;
function un() {
  if (xt) return Be;
  xt = 1;
  var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, u, h) {
    var m, b = {}, a = null, v = null;
    h !== void 0 && (a = "" + h), u.key !== void 0 && (a = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (m in u) o.call(u, m) && !l.hasOwnProperty(m) && (b[m] = u[m]);
    if (c && c.defaultProps) for (m in u = c.defaultProps, u) b[m] === void 0 && (b[m] = u[m]);
    return { $$typeof: n, type: c, key: a, ref: v, props: b, _owner: i.current };
  }
  return Be.Fragment = r, Be.jsx = d, Be.jsxs = d, Be;
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
var wt;
function dn() {
  return wt || (wt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), N = Symbol.iterator, x = "@@iterator";
    function _(t) {
      if (t === null || typeof t != "object")
        return null;
      var f = N && t[N] || t[x];
      return typeof f == "function" ? f : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(t) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), k = 1; k < f; k++)
          g[k - 1] = arguments[k];
        D("error", t, g);
      }
    }
    function D(t, f, g) {
      {
        var k = y.ReactDebugCurrentFrame, F = k.getStackAddendum();
        F !== "" && (f += "%s", g = g.concat([F]));
        var Y = g.map(function(I) {
          return String(I);
        });
        Y.unshift("Warning: " + f), Function.prototype.apply.call(console[t], console, Y);
      }
    }
    var z = !1, P = !1, W = !1, M = !1, J = !1, U;
    U = Symbol.for("react.module.reference");
    function H(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === l || J || t === i || t === h || t === m || M || t === v || z || P || W || typeof t == "object" && t !== null && (t.$$typeof === a || t.$$typeof === b || t.$$typeof === d || t.$$typeof === c || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === U || t.getModuleId !== void 0));
    }
    function O(t, f, g) {
      var k = t.displayName;
      if (k)
        return k;
      var F = f.displayName || f.name || "";
      return F !== "" ? g + "(" + F + ")" : g;
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
        case h:
          return "Suspense";
        case m:
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
            return O(t, t.render, "ForwardRef");
          case b:
            var k = t.displayName || null;
            return k !== null ? k : j(t.type) || "Memo";
          case a: {
            var F = t, Y = F._payload, I = F._init;
            try {
              return j(I(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, L = 0, X, ee, R, te, ce, S, E;
    function $() {
    }
    $.__reactDisabledLog = !0;
    function G() {
      {
        if (L === 0) {
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
        L++;
      }
    }
    function re() {
      {
        if (L--, L === 0) {
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
        L < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var B = y.ReactCurrentDispatcher, ye;
    function me(t, f, g) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (F) {
            var k = F.stack.trim().match(/\n( *(at )?)/);
            ye = k && k[1] || "";
          }
        return `
` + ye + t;
      }
    }
    var q = !1, ae;
    {
      var we = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new we();
    }
    function Pe(t, f) {
      if (!t || q)
        return "";
      {
        var g = ae.get(t);
        if (g !== void 0)
          return g;
      }
      var k;
      q = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = B.current, B.current = null, G();
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
              k = de;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (de) {
              k = de;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            k = de;
          }
          t();
        }
      } catch (de) {
        if (de && k && typeof de.stack == "string") {
          for (var T = de.stack.split(`
`), ie = k.stack.split(`
`), Z = T.length - 1, ne = ie.length - 1; Z >= 1 && ne >= 0 && T[Z] !== ie[ne]; )
            ne--;
          for (; Z >= 1 && ne >= 0; Z--, ne--)
            if (T[Z] !== ie[ne]) {
              if (Z !== 1 || ne !== 1)
                do
                  if (Z--, ne--, ne < 0 || T[Z] !== ie[ne]) {
                    var ge = `
` + T[Z].replace(" at new ", " at ");
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && ae.set(t, ge), ge;
                  }
                while (Z >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        q = !1, B.current = Y, re(), Error.prepareStackTrace = F;
      }
      var Oe = t ? t.displayName || t.name : "", Se = Oe ? me(Oe) : "";
      return typeof t == "function" && ae.set(t, Se), Se;
    }
    function Qe(t, f, g) {
      return Pe(t, !1);
    }
    function We(t) {
      var f = t.prototype;
      return !!(f && f.isReactComponent);
    }
    function Ee(t, f, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Pe(t, We(t));
      if (typeof t == "string")
        return me(t);
      switch (t) {
        case h:
          return me("Suspense");
        case m:
          return me("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return Qe(t.render);
          case b:
            return Ee(t.type, f, g);
          case a: {
            var k = t, F = k._payload, Y = k._init;
            try {
              return Ee(Y(F), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ye = {}, Ue = y.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var f = t._owner, g = Ee(t.type, t._source, f ? f.type : null);
        Ue.setExtraStackFrame(g);
      } else
        Ue.setExtraStackFrame(null);
    }
    function ke(t, f, g, k, F) {
      {
        var Y = Function.call.bind(he);
        for (var I in t)
          if (Y(t, I)) {
            var T = void 0;
            try {
              if (typeof t[I] != "function") {
                var ie = Error((k || "React class") + ": " + g + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              T = t[I](f, I, k, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              T = Z;
            }
            T && !(T instanceof Error) && (se(F), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", g, I, typeof T), se(null)), T instanceof Error && !(T.message in Ye) && (Ye[T.message] = !0, se(F), w("Failed %s type: %s", g, T.message), se(null));
          }
      }
    }
    var et = Array.isArray;
    function ze(t) {
      return et(t);
    }
    function Te(t) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && t[Symbol.toStringTag] || t.constructor.name || "Object";
        return g;
      }
    }
    function tt(t) {
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
      if (tt(t))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(t)), Fe(t);
    }
    var pe = y.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xe, De, Me;
    Me = {};
    function Ke(t) {
      if (he.call(t, "ref")) {
        var f = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Xe(t) {
      if (he.call(t, "key")) {
        var f = Object.getOwnPropertyDescriptor(t, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function nt(t, f) {
      if (typeof t.ref == "string" && pe.current && f && pe.current.stateNode !== f) {
        var g = j(pe.current.type);
        Me[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(pe.current.type), t.ref), Me[g] = !0);
      }
    }
    function Le(t, f) {
      {
        var g = function() {
          xe || (xe = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
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
          De || (De = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var rt = function(t, f, g, k, F, Y, I) {
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
        value: k
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function C(t, f, g, k, F) {
      {
        var Y, I = {}, T = null, ie = null;
        g !== void 0 && (Ie(g), T = "" + g), Xe(f) && (Ie(f.key), T = "" + f.key), Ke(f) && (ie = f.ref, nt(f, F));
        for (Y in f)
          he.call(f, Y) && !He.hasOwnProperty(Y) && (I[Y] = f[Y]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (Y in Z)
            I[Y] === void 0 && (I[Y] = Z[Y]);
        }
        if (T || ie) {
          var ne = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          T && Le(I, ne), ie && be(I, ne);
        }
        return rt(t, T, ie, F, k, pe.current, I);
      }
    }
    var A = y.ReactCurrentOwner, V = y.ReactDebugCurrentFrame;
    function oe(t) {
      if (t) {
        var f = t._owner, g = Ee(t.type, t._source, f ? f.type : null);
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
    function At(t) {
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
    function Vt(t) {
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
    function ht(t, f) {
      {
        if (!t._store || t._store.validated || t.key != null)
          return;
        t._store.validated = !0;
        var g = Vt(f);
        if (mt[g])
          return;
        mt[g] = !0;
        var k = "";
        t && t._owner && t._owner !== A.current && (k = " It was passed a child from " + j(t._owner.type) + "."), oe(t), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, k), oe(null);
      }
    }
    function pt(t, f) {
      {
        if (typeof t != "object")
          return;
        if (ze(t))
          for (var g = 0; g < t.length; g++) {
            var k = t[g];
            Ne(k) && ht(k, f);
          }
        else if (Ne(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var F = _(t);
          if (typeof F == "function" && F !== t.entries)
            for (var Y = F.call(t), I; !(I = Y.next()).done; )
              Ne(I.value) && ht(I.value, f);
        }
      }
    }
    function Wt(t) {
      {
        var f = t.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === b))
          g = f.propTypes;
        else
          return;
        if (g) {
          var k = j(f);
          ke(g, t.props, "prop", k, t);
        } else if (f.PropTypes !== void 0 && !ue) {
          ue = !0;
          var F = j(f);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Yt(t) {
      {
        for (var f = Object.keys(t.props), g = 0; g < f.length; g++) {
          var k = f[g];
          if (k !== "children" && k !== "key") {
            oe(t), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), oe(null);
            break;
          }
        }
        t.ref !== null && (oe(t), w("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var gt = {};
    function vt(t, f, g, k, F, Y) {
      {
        var I = H(t);
        if (!I) {
          var T = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = At(F);
          ie ? T += ie : T += Je();
          var Z;
          t === null ? Z = "null" : ze(t) ? Z = "array" : t !== void 0 && t.$$typeof === n ? (Z = "<" + (j(t.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, T);
        }
        var ne = C(t, f, g, F, Y);
        if (ne == null)
          return ne;
        if (I) {
          var ge = f.children;
          if (ge !== void 0)
            if (k)
              if (ze(ge)) {
                for (var Oe = 0; Oe < ge.length; Oe++)
                  pt(ge[Oe], t);
                Object.freeze && Object.freeze(ge);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              pt(ge, t);
        }
        if (he.call(f, "key")) {
          var Se = j(t), de = Object.keys(f).filter(function(Gt) {
            return Gt !== "key";
          }), at = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!gt[Se + at]) {
            var Jt = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, at, Se, Jt, Se), gt[Se + at] = !0;
          }
        }
        return t === o ? Yt(ne) : Wt(ne), ne;
      }
    }
    function Ut(t, f, g) {
      return vt(t, f, g, !0);
    }
    function Ht(t, f, g) {
      return vt(t, f, g, !1);
    }
    var Kt = Ht, Xt = Ut;
    Ae.Fragment = o, Ae.jsx = Kt, Ae.jsxs = Xt;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? it.exports = un() : it.exports = dn();
var s = it.exports;
function Ze(e, n) {
  return n ? /* @__PURE__ */ s.jsx(n, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function Pt(e, n) {
  return [...new Array(n - e)].map((r, o) => e + o + 1).filter((r) => r > 0);
}
function fn(e, n, r) {
  return e >= r ? [] : Pt(e + 1, e + n);
}
function mn(e, n) {
  return e <= 1 ? [] : Pt(e - 1 - n, e - 1);
}
function hn(e, n, r) {
  if (!e) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ s.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ s.jsx("p", { className: r, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function lr(e) {
  const {
    variant: n = "ghost",
    scheme: r = "primary",
    size: o = "md",
    leftIcon: i,
    rightIcon: l,
    className: d = "",
    children: c,
    ...u
  } = e, m = { md: 12, lg: 14 }[o], b = `arkyn_badge ${n} ${r} ${o} ${d}`;
  return /* @__PURE__ */ s.jsxs("div", { className: b.trim(), ...u, children: [
    Ze(m, i),
    c,
    Ze(m, i)
  ] });
}
function cr(e) {
  const {
    className: n,
    orientation: r = "horizontal",
    ...o
  } = e, i = `arkyn_divider ${r} ${n}`;
  return /* @__PURE__ */ s.jsx("div", { className: i, ...o });
}
function ur(e) {
  const { className: n, ...r } = e, o = `arkyn_skeleton ${n}`;
  return /* @__PURE__ */ s.jsx("aside", { className: o.trim(), ...r });
}
function dr(e) {
  const { className: n, ...r } = e, o = `arkyn_table_body ${n}`;
  return /* @__PURE__ */ s.jsx("tbody", { className: o.trim(), ...r });
}
function fr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_caption ${n}`;
  return /* @__PURE__ */ s.jsx("caption", { className: i.trim(), ...o, children: /* @__PURE__ */ s.jsx("div", { className: "arkyn_table_caption-content", children: r }) });
}
function mr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_table_container ${r}`;
  return /* @__PURE__ */ s.jsx("div", { className: i.trim(), ...o, children: /* @__PURE__ */ s.jsx("table", { children: n }) });
}
function hr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_footer ${n}`;
  return /* @__PURE__ */ s.jsxs("tfoot", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ s.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ s.jsx("tr", { children: /* @__PURE__ */ s.jsx("th", { colSpan: 100, children: /* @__PURE__ */ s.jsx("div", { className: "arkyn_table_footer-content", children: r }) }) })
  ] });
}
function pr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_header ${n}`;
  return /* @__PURE__ */ s.jsxs("thead", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ s.jsx("tr", { children: r }),
    /* @__PURE__ */ s.jsx("tr", { className: "spacing-row" })
  ] });
}
function gr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    loadingText: i,
    size: l = "md",
    leftIcon: d,
    rightIcon: c,
    disabled: u,
    className: h = "",
    children: m,
    ...b
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[l], N = `arkyn_button loading_text_${!!i} ${o} ${r} ${l} loading_${n} ${h}`;
  return /* @__PURE__ */ s.jsxs("button", { className: N, disabled: u || n, ...b, children: [
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ s.jsx($e, { size: v, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ s.jsxs("div", { className: "arkyn_button-content", children: [
      Ze(v, d),
      m,
      Ze(v, c)
    ] })
  ] });
}
const Tt = Re({});
function vr(e) {
  var m, b;
  const n = St(), { children: r, className: o, ...i } = e, l = _e(null), d = ((m = l.current) == null ? void 0 : m.name) || "", c = ((b = n == null ? void 0 : n.fieldErrors) == null ? void 0 : b[d]) || null, u = qt(), h = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ s.jsx(Tt.Provider, { value: { error: c, id: u, inputRef: l }, children: /* @__PURE__ */ s.jsx("section", { className: h.trim(), ...i, children: r }) });
}
function ve() {
  return je(Tt);
}
function br(e) {
  const {
    name: n,
    className: r = "",
    size: o = "md",
    isError: i,
    defaultChecked: l = !1,
    checked: d = null,
    onCheck: c,
    value: u,
    ...h
  } = e, { id: m, inputRef: b, error: a } = ve(), v = i || !!a, [N, x] = le(l || !1), _ = typeof d == "boolean" ? d : N, y = `arkyn_checkbox ${o} ${v ? "error" : ""} ${_ ? "checked" : ""} ${r}`;
  function w() {
    const D = N;
    x(!D), c && c(D ? "" : u || "checked");
  }
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      type: "button",
      id: m,
      className: y,
      onClick: w,
      ...h,
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            type: "hidden",
            name: n,
            ref: b,
            value: _ ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ s.jsx(jt, {})
      ]
    }
  );
}
function yr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_form_error ${r}`, { error: l } = ve();
  return n ? /* @__PURE__ */ s.jsx("strong", { className: i.trim(), ...o, children: n }) : l ? /* @__PURE__ */ s.jsx("strong", { className: i.trim(), ...o, children: l }) : /* @__PURE__ */ s.jsx(s.Fragment, {});
}
function xr(e) {
  const {
    showAsterisk: n = !1,
    className: r = "",
    ...o
  } = e, { id: i } = ve(), d = `arkyn_form_label ${n ? "show-asterisk" : ""} ${r}`;
  return /* @__PURE__ */ s.jsx("label", { ...o, className: d.trim(), htmlFor: i });
}
function wr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    size: i = "md",
    icon: l,
    disabled: d,
    className: c = "",
    ...u
  } = e, h = { xs: 12, sm: 16, md: 20, lg: 24 }, m = `arkyn_icon_button ${o} ${r} ${i} loading_${n} ${c}`;
  return /* @__PURE__ */ s.jsxs(
    "button",
    {
      disabled: d || n,
      className: m.trim(),
      ...u,
      children: [
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ s.jsx($e, { size: h[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ s.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ s.jsx(l, { size: h[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ce(e, n, r) {
  if (!e) return /* @__PURE__ */ s.jsx(s.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ s.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ s.jsx("p", { className: r, children: /* @__PURE__ */ s.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function ut(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function It(e, n) {
  let r = "", o = 0;
  return Array.from(e).forEach((i, l) => {
    n[l + o].match(/[0-9]/) || (r += n[l + o], o++), r += i;
  }), r;
}
function Ot(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const dt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, zt = ut(dt.CNPJ).length;
function pn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: b,
    defaultValue: a,
    readOnly: v,
    onFocus: N,
    onBlur: x,
    title: _,
    style: y,
    onChange: w,
    ...D
  } = e;
  function z(K) {
    let L = ut(K);
    const X = Ot(L);
    if (!(L.length > zt))
      return L = It(L, dt[X]), L;
  }
  const P = m ? "right" : "left", O = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${b || v || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: Ce(c, j, "prefix"),
    sufix: Ce(u, j, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    defaultValue: z(a || ""),
    disabled: b,
    readOnly: v,
    onFocus: N,
    onBlur: x,
    title: _,
    style: y,
    onChange: w,
    loadingPosition: P,
    iconSize: j,
    Spinner: /* @__PURE__ */ s.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...D
  };
}
function gn(e) {
  const [n, r] = le(!1), o = _e(null), { inputRef: i, id: l, error: d } = ve(), c = i || o, u = e.isError || !!d, {
    disabled: h,
    title: m,
    style: b,
    className: a,
    prefix: v,
    sufix: N,
    iconSize: x,
    loadingPosition: _,
    isLoading: y,
    LeftIcon: w,
    readOnly: D,
    onFocus: z,
    onBlur: P,
    RightIcon: W,
    Spinner: M,
    onChange: J,
    value: U,
    defaultValue: H,
    ...O
  } = pn({ ...e, id: l, isError: u }, n), [Q, j] = le(H), K = w && !y, L = W && !y, X = _ === "left" && y, ee = _ === "right" && y;
  function R() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function te(E) {
    let $ = ut(E.target.value);
    const G = Ot($);
    $.length > zt || ($ = It($, dt[G]), E.target.value = $, j($), J && J(E));
  }
  function ce(E) {
    r(!0), z && z(E);
  }
  function S(E) {
    r(!1), P && P(E);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: m,
      style: b,
      onClick: R,
      className: a,
      children: [
        v,
        X && M,
        K && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: h || y,
            readOnly: D,
            ref: c,
            value: U || Q,
            onFocus: ce,
            onChange: te,
            onBlur: S,
            ...O
          }
        ),
        L && /* @__PURE__ */ s.jsx(W, { size: x, strokeWidth: 2.5 }),
        ee && M,
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
}).format(n).slice(o ? vn : 0), Ge = 2, kt = (e) => typeof e == "number" ? e : Number(e.toString().replace(/[^0-9-]/g, "")), lt = (e) => {
  let n = e;
  return typeof e == "string" ? (n = kt(e), n % 1 !== 0 && (n = n.toFixed(Ge))) : n = Number.isInteger(e) ? Number(e) * 10 ** Ge : e.toFixed(Ge), kt(n) / 10 ** Ge;
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
    leftIcon: h,
    rightIcon: m,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: N,
    title: x,
    style: _,
    // showCents = false,
    max: y = 1e9,
    locale: w = "pt-BR",
    currency: D = "BRL",
    ...z
  } = e, P = m ? "right" : "left", O = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${b || a || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: Ce(c, j, "prefix"),
    sufix: Ce(u, j, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: b,
    locale: w,
    currency: D,
    readOnly: a,
    onFocus: v,
    onBlur: N,
    title: x,
    style: _,
    max: y,
    // showCents,
    loadingPosition: P,
    iconSize: j,
    Spinner: /* @__PURE__ */ s.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
function xn(e) {
  const [n, r] = le(!1), [o, i] = le("0"), l = _e(null), { inputRef: d, id: c, error: u } = ve(), h = d || l, m = e.isError || !!u, {
    disabled: b,
    title: a,
    style: v,
    className: N,
    prefix: x,
    sufix: _,
    iconSize: y,
    loadingPosition: w,
    isLoading: D,
    LeftIcon: z,
    readOnly: P,
    onFocus: W,
    onBlur: M,
    RightIcon: J,
    Spinner: U,
    value: H,
    max: O,
    onChangeValue: Q,
    onKeyPress: j,
    currency: K,
    locale: L,
    name: X,
    defaultValue: ee,
    ...R
  } = yn({ ...e, id: c, isError: m }, n), te = z && !D, ce = J && !D, S = w === "left" && D, E = w === "right" && D;
  function $() {
    b || !(h != null && h.current) || (r(!0), h.current.focus());
  }
  function G(q) {
    r(!0), W && W(q);
  }
  function re(q) {
    r(!1), M && M(q);
  }
  const B = (q) => {
    const [ae, we] = Nt(
      L,
      q,
      K
    );
    return !O || ae <= O ? (i(we), [ae, we]) : [lt(o), o];
  }, ye = (q) => {
    q.preventDefault();
    const [ae, we] = B(q.target.value);
    Q(q, String(ae), String(we));
  }, me = (q) => j && j(q, q.key, q.key);
  return st(() => {
    const q = H || ee || void 0, [, ae] = Nt(L, q, K);
    i(ae);
  }, [K, ee, H]), /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: a,
      style: v,
      onClick: $,
      className: N,
      children: [
        x,
        S && U,
        te && /* @__PURE__ */ s.jsx(z, { size: y, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            value: o,
            onChange: ye,
            onBlur: re,
            onFocus: G,
            onKeyUp: me,
            disabled: b || D,
            readOnly: P,
            ref: h,
            ...R
          }
        ),
        /* @__PURE__ */ s.jsx("input", { type: "hidden", name: X, value: lt(o) }),
        E && U,
        ce && /* @__PURE__ */ s.jsx(J, { size: y, strokeWidth: 2.5 }),
        _
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
    leftIcon: h,
    rightIcon: m,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: N,
    title: x,
    style: _,
    onChange: y,
    showMask: w = !1,
    type: D,
    ...z
  } = e, P = m ? "right" : "left", O = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${b || a || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: Ce(c, j, "prefix"),
    sufix: Ce(u, j, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: N,
    title: x,
    style: _,
    onChange: y,
    loadingPosition: P,
    iconSize: j,
    showMask: w,
    Spinner: /* @__PURE__ */ s.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
const kn = Zt((e, n) => /* @__PURE__ */ s.jsx("input", { ref: n, ...e }));
function Nn(e) {
  const [n, r] = le(!1), o = _e(null), { inputRef: i, id: l, error: d } = ve(), c = i || o, u = e.isError || !!d, {
    disabled: h,
    title: m,
    style: b,
    className: a,
    prefix: v,
    sufix: N,
    iconSize: x,
    loadingPosition: _,
    isLoading: y,
    LeftIcon: w,
    readOnly: D,
    onFocus: z,
    onBlur: P,
    RightIcon: W,
    Spinner: M,
    ...J
  } = wn({ ...e, id: l, isError: u }, n), U = w && !y, H = W && !y, O = _ === "left" && y, Q = _ === "right" && y;
  function j() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function K(X) {
    r(!0), z && z(X);
  }
  function L(X) {
    r(!1), P && P(X);
  }
  return /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: m,
      style: b,
      onClick: j,
      className: a,
      children: [
        v,
        O && M,
        U && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          ln,
          {
            component: kn,
            ref: c,
            onFocus: K,
            onBlur: L,
            ...J
          }
        ),
        H && /* @__PURE__ */ s.jsx(W, { size: x, strokeWidth: 2.5 }),
        Q && M,
        N
      ]
    }
  );
}
function Cn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: N,
    title: x,
    style: _,
    onChange: y,
    ...w
  } = e, D = m ? "right" : "left", U = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${b || a || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, O = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: U,
    prefix: Ce(c, O, "prefix"),
    sufix: Ce(u, O, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: b,
    readOnly: a,
    onFocus: v,
    onBlur: N,
    title: x,
    style: _,
    onChange: y,
    loadingPosition: D,
    iconSize: O,
    Spinner: /* @__PURE__ */ s.jsx($e, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...w
  };
}
function _n(e) {
  const [n, r] = le(!1), o = _e(null), { inputRef: i, id: l, error: d } = ve(), c = i || o, u = e.isError || !!d, {
    disabled: h,
    title: m,
    style: b,
    className: a,
    prefix: v,
    sufix: N,
    iconSize: x,
    loadingPosition: _,
    isLoading: y,
    LeftIcon: w,
    readOnly: D,
    onFocus: z,
    onBlur: P,
    RightIcon: W,
    type: M,
    Spinner: J,
    ...U
  } = Cn({ ...e, id: l, isError: u }, n), H = w && !y, O = W && !y, Q = _ === "left" && y, j = _ === "right" && y;
  function K() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function L(ee) {
    r(!0), z && z(ee);
  }
  function X(ee) {
    r(!1), P && P(ee);
  }
  return M === "hidden" ? /* @__PURE__ */ s.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: c,
      ...U
    }
  ) : /* @__PURE__ */ s.jsxs(
    "section",
    {
      title: m,
      style: b,
      onClick: K,
      className: a,
      children: [
        v,
        Q && J,
        H && /* @__PURE__ */ s.jsx(w, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ s.jsx(
          "input",
          {
            disabled: h || y,
            readOnly: D,
            ref: c,
            onFocus: L,
            onBlur: X,
            type: M,
            ...U
          }
        ),
        O && /* @__PURE__ */ s.jsx(W, { size: x, strokeWidth: 2.5 }),
        j && J,
        N
      ]
    }
  );
}
function kr(e) {
  return e.type === "currency" ? /* @__PURE__ */ s.jsx(xn, { ...e }) : e.type === "masked" ? /* @__PURE__ */ s.jsx(Nn, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ s.jsx(gn, { ...e }) : /* @__PURE__ */ s.jsx(_n, { ...e });
}
const Ft = Re({});
function jn() {
  return je(Ft);
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
  } = e, [u, h] = le(n || ""), { inputRef: m, id: b } = ve();
  function a(N) {
    h(N), i && i(N);
  }
  const v = `arkyn_radio_group ${l} ${d || ""}`;
  return /* @__PURE__ */ s.jsxs(
    Ft.Provider,
    {
      value: { onChange: a, value: o || u, size: l },
      children: [
        /* @__PURE__ */ s.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: b,
            readOnly: !0,
            name: r,
            ref: m,
            value: u
          }
        ),
        /* @__PURE__ */ s.jsx("div", { className: v.trim(), ...c })
      ]
    }
  );
}
function Cr(e) {
  const {
    value: n,
    size: r,
    disabled: o,
    children: i
  } = e, { onChange: l, size: d, value: c } = jn(), { error: u } = ve(), v = `arkyn_radio_box ${r || d} ${c === n ? "isChecked" : ""} ${u ? "isErrored" : ""} ${o ? "isDisabled" : ""}`;
  return /* @__PURE__ */ s.jsxs("label", { className: v.trim(), children: [
    /* @__PURE__ */ s.jsx(
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
    disabled: h,
    readOnly: m,
    onFocus: b,
    onBlur: a,
    title: v,
    style: N,
    closeOnSelect: x = !0,
    ..._
  } = e, P = `arkyn_select ${c ? "hasPrefix" : ""} ${d} ${i} ${h || m || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${l}`, M = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: P,
    prefix: hn(c, M, "prefix"),
    LeftIcon: u,
    disabled: h,
    readOnly: m,
    onFocus: b,
    onBlur: a,
    title: v,
    closeOnSelect: x,
    style: N,
    iconSize: M,
    Spinner: /* @__PURE__ */ s.jsx($e, { className: "spinner", size: M, strokeWidth: 2.5 }),
    ..._
  };
}
function _r(e) {
  var $;
  const [n, r] = le(!1), { inputRef: o, id: i, error: l } = ve(), d = _e(null), c = o || d, u = e.isError || !!l, {
    disabled: h,
    title: m,
    style: b,
    className: a,
    prefix: v,
    iconSize: N,
    isLoading: x,
    LeftIcon: _,
    value: y = null,
    defaultValue: w = "",
    readOnly: D,
    onFocus: z,
    onBlur: P,
    Spinner: W,
    name: M,
    placeholder: J,
    onSelect: U,
    options: H,
    optionMaxHeight: O,
    closeOnSelect: Q,
    ...j
  } = En({ ...e, id: i, isError: u }, n), [K, L] = le(w);
  function X() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function ee(G) {
    n || (r(!0), z && z(G));
  }
  function R() {
    r(!1), P && c.current && c.current.blur();
  }
  function te(G) {
    const { label: re, value: B } = G;
    L(K !== B ? B : ""), U && U({ label: re, value: B }), Q && R();
  }
  const ce = typeof y == "string" ? y : K, S = (($ = H.find((G) => G.value === ce)) == null ? void 0 : $.label) || "", E = () => {
    if (!n && S) return !0;
    if (!n && !S) return !1;
    if (n && S) return !0;
    if (n && !S) return !1;
  };
  return /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
    /* @__PURE__ */ s.jsxs(
      "section",
      {
        title: m,
        style: b,
        onClick: X,
        className: `${a} placeholder_dark_${E()}`,
        children: [
          v,
          _ && /* @__PURE__ */ s.jsx(_, { size: N, strokeWidth: 2.5 }),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              disabled: h || x,
              readOnly: !0,
              placeholder: S || J,
              onFocus: ee,
              ...j
            }
          ),
          /* @__PURE__ */ s.jsx(
            "input",
            {
              type: "hidden",
              ref: c,
              name: M,
              value: ce || "",
              readOnly: !0
            }
          ),
          n && /* @__PURE__ */ s.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: O },
              children: [
                H.map(({ label: G, value: re }) => /* @__PURE__ */ s.jsxs(
                  "div",
                  {
                    onClick: () => te({ label: G, value: re }),
                    className: ce === re ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      G,
                      " ",
                      /* @__PURE__ */ s.jsx(jt, {})
                    ]
                  },
                  re
                )),
                H.length <= 0 && /* @__PURE__ */ s.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !x && /* @__PURE__ */ s.jsx(
            en,
            {
              className: "arkyn_select_arrow",
              size: N,
              strokeWidth: 2.5
            }
          ),
          x && W
        ]
      }
    ),
    n && /* @__PURE__ */ s.jsx("aside", { className: "arkyn_select_overlay", onClick: R })
  ] });
}
function jr(e) {
  const {
    variant: n = "solid",
    size: r = "md",
    className: o,
    disabled: i = !1,
    readOnly: l = !1,
    onFocus: d,
    onBlur: c,
    title: u,
    style: h,
    ...m
  } = e, [b, a] = le(!1), { inputRef: v, id: N, error: x } = ve(), _ = _e(null), y = v || _, D = e.isError || !!x ? "errored" : "", W = `arkyn_textarea ${n} ${r} ${i || l ? "opacity" : ""} ${D} ${b ? "focused" : ""} ${o}`;
  function M() {
    i || !(y != null && y.current) || (a(!0), y.current.focus());
  }
  function J(H) {
    a(!0), d && d(H);
  }
  function U(H) {
    a(!1), c && c(H);
  }
  return /* @__PURE__ */ s.jsx(
    "section",
    {
      title: u,
      style: h,
      onClick: M,
      className: W,
      children: /* @__PURE__ */ s.jsx(
        "textarea",
        {
          id: N,
          disabled: i,
          readOnly: l,
          ref: y,
          onFocus: J,
          onBlur: U,
          ...m
        }
      )
    }
  );
}
function Er(e) {
  const { className: n = "", ...r } = e, o = `arkyn_breadcrumb_container ${n}`;
  return /* @__PURE__ */ s.jsx("nav", { className: o, ...r });
}
function Sr(e) {
  const { pathname: n } = Rt(), {
    className: r = "",
    disabled: o = !1,
    children: i,
    to: l,
    ...d
  } = e, u = `arkyn_breadcrumb_link ${n === l ? "active" : "inactive"} ${r}`;
  return o ? /* @__PURE__ */ s.jsxs("p", { className: u, children: [
    /* @__PURE__ */ s.jsx(ot, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ s.jsxs(sn, { to: l, className: u, ...d, children: [
    /* @__PURE__ */ s.jsx(ot, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function Sn(e = "") {
  const n = Rt(), r = new URLSearchParams(n.search), o = e ? `${e}:` : "", i = (l) => {
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
function Rr(e) {
  const {
    scope: n,
    totalCountRegisters: r,
    perPageKey: o = "per_page",
    pageKey: i = "page",
    siblingsCount: l = 2,
    ...d
  } = e, c = on(), { getParam: u, getScopedSearch: h } = Sn(n), m = Number(u(i)) || 1, b = Number(u(o)) || 20, a = Math.ceil(r / b), v = mn(m, l), N = fn(m, l, a);
  function x(_) {
    c(h({ page: _ }));
  }
  return /* @__PURE__ */ s.jsxs("div", { className: "arkyn_pagination", ...d, children: [
    /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: m <= 1,
        onClick: () => x(m - 1),
        children: /* @__PURE__ */ s.jsx(tn, {})
      }
    ),
    m > 1 + l && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      /* @__PURE__ */ s.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => x(1),
          children: "1"
        }
      ),
      m > 2 + l && /* @__PURE__ */ s.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ s.jsx(bt, {}) })
    ] }),
    v.map((_, y) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => x(_),
        className: "arkyn_pagination-page_button",
        children: _
      },
      y
    )),
    /* @__PURE__ */ s.jsx("button", { className: "arkyn_pagination-current", disabled: !0, children: m }),
    N.map((_, y) => /* @__PURE__ */ s.jsx(
      "button",
      {
        onClick: () => x(_),
        className: "arkyn_pagination-page_button",
        children: _
      },
      y
    )),
    m + l < a && /* @__PURE__ */ s.jsxs(s.Fragment, { children: [
      m + 1 + l < a && /* @__PURE__ */ s.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ s.jsx(bt, {}) }),
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
        disabled: m >= a,
        onClick: () => x(m + 1),
        children: /* @__PURE__ */ s.jsx(ot, {})
      }
    )
  ] });
}
function $r(e) {
  const {
    children: n,
    value: r,
    className: o,
    defaultActive: i,
    ...l
  } = e, d = `arkyn_tab_button ${i ? "active" : ""} ${o || ""}`;
  return /* @__PURE__ */ s.jsx("button", { className: d.trim(), ...l, children: n });
}
function Pr(e) {
  const { children: n, onClick: r, className: o, ...i } = e, l = _e(null), d = `arkyn_tab_container ${o || ""}`, [c, u] = le({
    width: "0px",
    left: "0px",
    transition: "none"
  }), h = (b, a) => {
    const v = b.getBoundingClientRect(), N = l.current.getBoundingClientRect();
    u({
      transition: a ? void 0 : "none",
      width: `${v.width}px`,
      left: `${v.left - N.left}px`
    });
  };
  Qt(() => {
    const b = l.current;
    if (!b) return;
    let a = null;
    a = b.querySelector("button.active"), a && h(a);
  }, []);
  const m = (b) => {
    const a = b.target, v = l.current;
    a && v && v.contains(a) && (v.querySelectorAll("button").forEach((x) => x.classList.remove("active")), a.classList.add("active"), h(a, !0), r && r(a.value));
  };
  return /* @__PURE__ */ s.jsxs(
    "nav",
    {
      ref: l,
      onClick: m,
      className: d.trim(),
      ...i,
      children: [
        n,
        /* @__PURE__ */ s.jsx("div", { className: "active-line", style: c })
      ]
    }
  );
}
const Dt = Re({});
function Tr(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    orientation: o = "left",
    children: i,
    className: l,
    ...d
  } = e, c = o === "left" ? "-100%" : "100%", h = `arkyn_drawer_container ${o} ${n ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ s.jsx(Dt.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ s.jsx($t, { children: n && /* @__PURE__ */ s.jsxs("aside", { className: h.trim(), ...d, children: [
    /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(
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
function Ir(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: l } = je(Dt), d = `arkyn_drawer_header ${r}`;
  return /* @__PURE__ */ s.jsxs("header", { className: d.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ s.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: l,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ s.jsx(Et, { size: 24 })
      }
    )
  ] });
}
const Mt = Re({});
function Or(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    children: o,
    className: i = "",
    ...l
  } = e, c = `arkyn_modal_container ${n ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ s.jsx(Mt.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ s.jsx($t, { children: n && /* @__PURE__ */ s.jsxs("aside", { className: c.trim(), ...l, children: [
    /* @__PURE__ */ s.jsx(
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
    /* @__PURE__ */ s.jsx(
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
function zr(e) {
  const { alignment: n = "right", className: r, ...o } = e, i = `arkyn_modal_footer ${n} ${r}`;
  return /* @__PURE__ */ s.jsx("footer", { className: i.trim(), ...o });
}
function Fr(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: l } = je(Mt), d = `arkyn_modal_header ${r}`;
  return /* @__PURE__ */ s.jsxs("header", { className: d.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ s.jsx(
      "button",
      {
        type: "button",
        onClick: l,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ s.jsx(Et, { size: 24 })
      }
    )
  ] });
}
function Dr(e) {
  const { children: n, button: r, closeOnClick: o, orientation: i = "bottom-left" } = e, [l, d] = le(!1), c = `arkyn_popover ${i} ${l ? "show" : ""}`;
  function u() {
    l || d(!0);
  }
  return /* @__PURE__ */ s.jsxs("div", { className: c, onClick: u, children: [
    r,
    /* @__PURE__ */ s.jsx(
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
    l && /* @__PURE__ */ s.jsx(
      "div",
      {
        onClick: () => d(!1),
        className: "arkyn_popover-overlay"
      }
    )
  ] });
}
function Rn(e) {
  const { message: n, title: r, type: o, size: i = "lg" } = e, l = `arkyn_toast ${o} ${i}`;
  function d() {
    switch (o) {
      case "info":
        return /* @__PURE__ */ s.jsx(yt, {});
      case "success":
        return /* @__PURE__ */ s.jsx(an, {});
      case "danger":
        return /* @__PURE__ */ s.jsx(rn, {});
      case "warning":
        return /* @__PURE__ */ s.jsx(nn, {});
      default:
        return /* @__PURE__ */ s.jsx(yt, {});
    }
  }
  return /* @__PURE__ */ s.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ s.jsxs("div", { children: [
      /* @__PURE__ */ s.jsx("div", { className: "bg" }),
      /* @__PURE__ */ s.jsx(d, {})
    ] }),
    /* @__PURE__ */ s.jsxs("p", { children: [
      /* @__PURE__ */ s.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ s.jsx("span", { children: n })
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
  return /* @__PURE__ */ s.jsxs("div", { className: c.trim(), ...d, children: [
    o,
    /* @__PURE__ */ s.jsx("div", { className: "arkyn_tooltip-text", children: n })
  ] });
}
const ft = Re({}), Lt = Re({});
function $n() {
  const e = je(Lt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function Ct(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function Lr() {
  const e = St(), { closeModal: n } = je(ft), { showToast: r } = $n();
  st(() => {
    const o = e == null ? void 0 : e.closeModalKey;
    o && n(o);
  }, [e]), st(() => {
    const o = e == null ? void 0 : e.toast, i = e == null ? void 0 : e.message;
    Ct(o) && r(o), !Ct(o) && i && r({
      message: i,
      title: "Atenção!",
      type: "warning"
    });
  }, [e]);
}
const Bt = Re({});
function Br(e) {
  const n = je(Bt);
  if (Object.entries(n).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: r,
      drawerIsOpen: o,
      openDrawer: i,
      closeDrawer: l
    } = n, d = o(e), c = r(e);
    return { drawerIsOpen: d, drawerData: c, openDrawer: (m) => i(e, m), closeDrawer: () => l(e) };
  } else
    return n;
}
function Ar(e) {
  const n = je(ft);
  if (Object.entries(n).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: r,
      modalIsOpen: o,
      openModal: i,
      closeModal: l
    } = n, d = o(e), c = r(e);
    return { modalIsOpen: d, modalData: c, openModal: (m) => i(e, m), closeModal: () => l(e) };
  } else
    return n;
}
function Vr(e) {
  const { children: n = !1 } = e, [r, o] = le([]);
  function i(u) {
    return !!r.some((h) => h.key === u);
  }
  function l(u) {
    var h;
    return (h = r.find((m) => m.key === u)) == null ? void 0 : h.data;
  }
  function d(u, h) {
    const m = i(u);
    o(m ? (b) => [...b.filter((v) => v.key !== u), { key: u, data: h }] : [...r, { key: u, data: h }]);
  }
  function c(u) {
    o(r.filter((h) => h.key !== u));
  }
  return /* @__PURE__ */ s.jsx(
    Bt.Provider,
    {
      value: { drawerIsOpen: i, drawerData: l, openDrawer: d, closeDrawer: c },
      children: n
    }
  );
}
function Wr(e) {
  const { children: n = !1 } = e, [r, o] = le([]);
  function i(u) {
    return !!r.some((h) => h.key === u);
  }
  function l(u) {
    var h;
    return (h = r.find((m) => m.key === u)) == null ? void 0 : h.data;
  }
  function d(u, h) {
    const m = i(u);
    o(m ? (b) => [...b.filter((v) => v.key !== u), { key: u, data: h }] : [...r, { key: u, data: h }]);
  }
  function c(u) {
    o(r.filter((h) => h.key !== u));
  }
  return /* @__PURE__ */ s.jsx(
    ft.Provider,
    {
      value: { modalIsOpen: i, modalData: l, openModal: d, closeModal: c },
      children: n
    }
  );
}
var Pn = (e) => {
  switch (e) {
    case "success":
      return On;
    case "info":
      return Fn;
    case "warning":
      return zn;
    case "error":
      return Dn;
    default:
      return null;
  }
}, Tn = Array(12).fill(0), In = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, Tn.map((n, r) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), On = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), zn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Fn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Dn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Mn = () => {
  let [e, n] = p.useState(document.hidden);
  return p.useEffect(() => {
    let r = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, ct = 1, Ln = class {
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
      let { message: r, ...o } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : ct++, l = this.toasts.find((c) => c.id === i), d = e.dismissible === void 0 ? !0 : e.dismissible;
      return l ? this.toasts = this.toasts.map((c) => c.id === i ? (this.publish({ ...c, ...e, id: i, title: r }), { ...c, ...e, id: i, dismissible: d, title: r }) : c) : this.addToast({ title: r, ...o, dismissible: d, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({ id: n.id, dismiss: !0 }));
    }), this.subscribers.forEach((n) => n({ id: e, dismiss: !0 })), e), this.message = (e, n) => this.create({ ...n, message: e }), this.error = (e, n) => this.create({ ...n, message: e, type: "error" }), this.success = (e, n) => this.create({ ...n, type: "success", message: e }), this.info = (e, n) => this.create({ ...n, type: "info", message: e }), this.warning = (e, n) => this.create({ ...n, type: "warning", message: e }), this.loading = (e, n) => this.create({ ...n, type: "loading", message: e }), this.promise = (e, n) => {
      if (!n) return;
      let r;
      n.loading !== void 0 && (r = this.create({ ...n, promise: e, type: "loading", message: n.loading, description: typeof n.description != "function" ? n.description : void 0 }));
      let o = e instanceof Promise ? e : e(), i = r !== void 0;
      return o.then(async (l) => {
        if (An(l) && !l.ok) {
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
      let r = (n == null ? void 0 : n.id) || ct++;
      return this.create({ jsx: e(r), id: r, ...n }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, fe = new Ln(), Bn = (e, n) => {
  let r = (n == null ? void 0 : n.id) || ct++;
  return fe.addToast({ title: e, ...n, id: r }), r;
}, An = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Vn = Bn, Wn = () => fe.toasts, Yn = Object.assign(Vn, { success: fe.success, info: fe.info, warning: fe.warning, error: fe.error, custom: fe.custom, message: fe.message, promise: fe.promise, dismiss: fe.dismiss, loading: fe.loading }, { getHistory: Wn });
function Un(e, { insertAt: n } = {}) {
  if (!e || typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
Un(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function qe(e) {
  return e.label !== void 0;
}
var Hn = 3, Kn = "32px", Xn = 4e3, Jn = 356, Gn = 14, qn = 20, Zn = 200;
function Qn(...e) {
  return e.filter(Boolean).join(" ");
}
var er = (e) => {
  var n, r, o, i, l, d, c, u, h, m;
  let { invert: b, toast: a, unstyled: v, interacting: N, setHeights: x, visibleToasts: _, heights: y, index: w, toasts: D, expanded: z, removeToast: P, defaultRichColors: W, closeButton: M, style: J, cancelButtonStyle: U, actionButtonStyle: H, className: O = "", descriptionClassName: Q = "", duration: j, position: K, gap: L, loadingIcon: X, expandByDefault: ee, classNames: R, icons: te, closeButtonAriaLabel: ce = "Close toast", pauseWhenPageIsHidden: S, cn: E } = e, [$, G] = p.useState(!1), [re, B] = p.useState(!1), [ye, me] = p.useState(!1), [q, ae] = p.useState(!1), [we, Pe] = p.useState(0), [Qe, We] = p.useState(0), Ee = p.useRef(null), he = p.useRef(null), Ye = w === 0, Ue = w + 1 <= _, se = a.type, ke = a.dismissible !== !1, et = a.className || "", ze = a.descriptionClassName || "", Te = p.useMemo(() => y.findIndex((C) => C.toastId === a.id) || 0, [y, a.id]), tt = p.useMemo(() => {
    var C;
    return (C = a.closeButton) != null ? C : M;
  }, [a.closeButton, M]), Fe = p.useMemo(() => a.duration || j || Xn, [a.duration, j]), Ie = p.useRef(0), pe = p.useRef(0), He = p.useRef(0), xe = p.useRef(null), [De, Me] = K.split("-"), Ke = p.useMemo(() => y.reduce((C, A, V) => V >= Te ? C : C + A.height, 0), [y, Te]), Xe = Mn(), nt = a.invert || b, Le = se === "loading";
  pe.current = p.useMemo(() => Te * L + Ke, [Te, Ke]), p.useEffect(() => {
    G(!0);
  }, []), p.useLayoutEffect(() => {
    if (!$) return;
    let C = he.current, A = C.style.height;
    C.style.height = "auto";
    let V = C.getBoundingClientRect().height;
    C.style.height = A, We(V), x((oe) => oe.find((ue) => ue.toastId === a.id) ? oe.map((ue) => ue.toastId === a.id ? { ...ue, height: V } : ue) : [{ toastId: a.id, height: V, position: a.position }, ...oe]);
  }, [$, a.title, a.description, x, a.id]);
  let be = p.useCallback(() => {
    B(!0), Pe(pe.current), x((C) => C.filter((A) => A.toastId !== a.id)), setTimeout(() => {
      P(a);
    }, Zn);
  }, [a, P, x, pe]);
  p.useEffect(() => {
    if (a.promise && se === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
    let C, A = Fe;
    return z || N || S && Xe ? (() => {
      if (He.current < Ie.current) {
        let V = (/* @__PURE__ */ new Date()).getTime() - Ie.current;
        A = A - V;
      }
      He.current = (/* @__PURE__ */ new Date()).getTime();
    })() : A !== 1 / 0 && (Ie.current = (/* @__PURE__ */ new Date()).getTime(), C = setTimeout(() => {
      var V;
      (V = a.onAutoClose) == null || V.call(a, a), be();
    }, A)), () => clearTimeout(C);
  }, [z, N, ee, a, Fe, be, a.promise, se, S, Xe]), p.useEffect(() => {
    let C = he.current;
    if (C) {
      let A = C.getBoundingClientRect().height;
      return We(A), x((V) => [{ toastId: a.id, height: A, position: a.position }, ...V]), () => x((V) => V.filter((oe) => oe.toastId !== a.id));
    }
  }, [x, a.id]), p.useEffect(() => {
    a.delete && be();
  }, [be, a.delete]);
  function rt() {
    return te != null && te.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": se === "loading" }, te.loading) : X ? p.createElement("div", { className: "sonner-loader", "data-visible": se === "loading" }, X) : p.createElement(In, { visible: se === "loading" });
  }
  return p.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: he, className: E(O, et, R == null ? void 0 : R.toast, (n = a == null ? void 0 : a.classNames) == null ? void 0 : n.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[se], (r = a == null ? void 0 : a.classNames) == null ? void 0 : r[se]), "data-sonner-toast": "", "data-rich-colors": (o = a.richColors) != null ? o : W, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": $, "data-promise": !!a.promise, "data-removed": re, "data-visible": Ue, "data-y-position": De, "data-x-position": Me, "data-index": w, "data-front": Ye, "data-swiping": ye, "data-dismissible": ke, "data-type": se, "data-invert": nt, "data-swipe-out": q, "data-expanded": !!(z || ee && $), style: { "--index": w, "--toasts-before": w, "--z-index": D.length - w, "--offset": `${re ? we : pe.current}px`, "--initial-height": ee ? "auto" : `${Qe}px`, ...J, ...a.style }, onPointerDown: (C) => {
    Le || !ke || (Ee.current = /* @__PURE__ */ new Date(), Pe(pe.current), C.target.setPointerCapture(C.pointerId), C.target.tagName !== "BUTTON" && (me(!0), xe.current = { x: C.clientX, y: C.clientY }));
  }, onPointerUp: () => {
    var C, A, V, oe;
    if (q || !ke) return;
    xe.current = null;
    let ue = Number(((C = he.current) == null ? void 0 : C.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), Ne = (/* @__PURE__ */ new Date()).getTime() - ((A = Ee.current) == null ? void 0 : A.getTime()), Je = Math.abs(ue) / Ne;
    if (Math.abs(ue) >= qn || Je > 0.11) {
      Pe(pe.current), (V = a.onDismiss) == null || V.call(a, a), be(), ae(!0);
      return;
    }
    (oe = he.current) == null || oe.style.setProperty("--swipe-amount", "0px"), me(!1);
  }, onPointerMove: (C) => {
    var A;
    if (!xe.current || !ke) return;
    let V = C.clientY - xe.current.y, oe = C.clientX - xe.current.x, ue = (De === "top" ? Math.min : Math.max)(0, V), Ne = C.pointerType === "touch" ? 10 : 2;
    Math.abs(ue) > Ne ? (A = he.current) == null || A.style.setProperty("--swipe-amount", `${V}px`) : Math.abs(oe) > Ne && (xe.current = null);
  } }, tt && !a.jsx ? p.createElement("button", { "aria-label": ce, "data-disabled": Le, "data-close-button": !0, onClick: Le || !ke ? () => {
  } : () => {
    var C;
    be(), (C = a.onDismiss) == null || C.call(a, a);
  }, className: E(R == null ? void 0 : R.closeButton, (i = a == null ? void 0 : a.classNames) == null ? void 0 : i.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || p.isValidElement(a.title) ? a.jsx || a.title : p.createElement(p.Fragment, null, se || a.icon || a.promise ? p.createElement("div", { "data-icon": "", className: E(R == null ? void 0 : R.icon, (l = a == null ? void 0 : a.classNames) == null ? void 0 : l.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || rt() : null, a.type !== "loading" ? a.icon || (te == null ? void 0 : te[se]) || Pn(se) : null) : null, p.createElement("div", { "data-content": "", className: E(R == null ? void 0 : R.content, (d = a == null ? void 0 : a.classNames) == null ? void 0 : d.content) }, p.createElement("div", { "data-title": "", className: E(R == null ? void 0 : R.title, (c = a == null ? void 0 : a.classNames) == null ? void 0 : c.title) }, a.title), a.description ? p.createElement("div", { "data-description": "", className: E(Q, ze, R == null ? void 0 : R.description, (u = a == null ? void 0 : a.classNames) == null ? void 0 : u.description) }, a.description) : null), p.isValidElement(a.cancel) ? a.cancel : a.cancel && qe(a.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || U, onClick: (C) => {
    var A, V;
    qe(a.cancel) && ke && ((V = (A = a.cancel).onClick) == null || V.call(A, C), be());
  }, className: E(R == null ? void 0 : R.cancelButton, (h = a == null ? void 0 : a.classNames) == null ? void 0 : h.cancelButton) }, a.cancel.label) : null, p.isValidElement(a.action) ? a.action : a.action && qe(a.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || H, onClick: (C) => {
    var A, V;
    qe(a.action) && (C.defaultPrevented || ((V = (A = a.action).onClick) == null || V.call(A, C), be()));
  }, className: E(R == null ? void 0 : R.actionButton, (m = a == null ? void 0 : a.classNames) == null ? void 0 : m.actionButton) }, a.action.label) : null));
};
function _t() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var tr = (e) => {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: l, className: d, offset: c, theme: u = "light", richColors: h, duration: m, style: b, visibleToasts: a = Hn, toastOptions: v, dir: N = _t(), gap: x = Gn, loadingIcon: _, icons: y, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: D, cn: z = Qn } = e, [P, W] = p.useState([]), M = p.useMemo(() => Array.from(new Set([r].concat(P.filter((S) => S.position).map((S) => S.position)))), [P, r]), [J, U] = p.useState([]), [H, O] = p.useState(!1), [Q, j] = p.useState(!1), [K, L] = p.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), X = p.useRef(null), ee = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), R = p.useRef(null), te = p.useRef(!1), ce = p.useCallback((S) => {
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
      L(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? L("dark") : L("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: S }) => {
      L(S ? "dark" : "light");
    });
  }, [u]), p.useEffect(() => {
    P.length <= 1 && O(!1);
  }, [P]), p.useEffect(() => {
    let S = (E) => {
      var $, G;
      o.every((re) => E[re] || E.code === re) && (O(!0), ($ = X.current) == null || $.focus()), E.code === "Escape" && (document.activeElement === X.current || (G = X.current) != null && G.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", S), () => document.removeEventListener("keydown", S);
  }, [o]), p.useEffect(() => {
    if (X.current) return () => {
      R.current && (R.current.focus({ preventScroll: !0 }), R.current = null, te.current = !1);
    };
  }, [X.current]), P.length ? p.createElement("section", { "aria-label": `${w} ${ee}`, tabIndex: -1 }, M.map((S, E) => {
    var $;
    let [G, re] = S.split("-");
    return p.createElement("ol", { key: S, dir: N === "auto" ? _t() : N, tabIndex: -1, ref: X, className: d, "data-sonner-toaster": !0, "data-theme": K, "data-y-position": G, "data-x-position": re, style: { "--front-toast-height": `${(($ = J[0]) == null ? void 0 : $.height) || 0}px`, "--offset": typeof c == "number" ? `${c}px` : c || Kn, "--width": `${Jn}px`, "--gap": `${x}px`, ...b }, onBlur: (B) => {
      te.current && !B.currentTarget.contains(B.relatedTarget) && (te.current = !1, R.current && (R.current.focus({ preventScroll: !0 }), R.current = null));
    }, onFocus: (B) => {
      B.target instanceof HTMLElement && B.target.dataset.dismissible === "false" || te.current || (te.current = !0, R.current = B.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      Q || O(!1);
    }, onPointerDown: (B) => {
      B.target instanceof HTMLElement && B.target.dataset.dismissible === "false" || j(!0);
    }, onPointerUp: () => j(!1) }, P.filter((B) => !B.position && E === 0 || B.position === S).map((B, ye) => {
      var me, q;
      return p.createElement(er, { key: B.id, icons: y, index: ye, toast: B, defaultRichColors: h, duration: (me = v == null ? void 0 : v.duration) != null ? me : m, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: n, visibleToasts: a, closeButton: (q = v == null ? void 0 : v.closeButton) != null ? q : l, interacting: Q, position: S, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: ce, toasts: P.filter((ae) => ae.position == B.position), heights: J.filter((ae) => ae.position == B.position), setHeights: U, expandByDefault: i, gap: x, loadingIcon: _, expanded: H, pauseWhenPageIsHidden: D, cn: z });
    }));
  })) : null;
};
function Yr({ children: e }) {
  function n(r) {
    Yn.custom((o) => /* @__PURE__ */ s.jsx(Rn, { ...r }));
  }
  return /* @__PURE__ */ s.jsxs(Lt.Provider, { value: { showToast: n }, children: [
    /* @__PURE__ */ s.jsx(tr, {}),
    e
  ] });
}
export {
  lr as Badge,
  Er as BreadcrumbContainer,
  Sr as BreadcrumbLink,
  gr as Button,
  br as Checkbox,
  cr as Divider,
  Tr as DrawerContainer,
  Ir as DrawerHeader,
  Vr as DrawerProvider,
  vr as FormController,
  yr as FormError,
  xr as FormLabel,
  wr as IconButton,
  kr as Input,
  Or as ModalContainer,
  zr as ModalFooter,
  Fr as ModalHeader,
  Wr as ModalProvider,
  Rr as Pagination,
  Dr as Popover,
  Cr as RadioBox,
  Nr as RadioGroup,
  _r as Select,
  ur as Skeleton,
  $r as TabButton,
  Pr as TabContainer,
  dr as TableBody,
  fr as TableCaption,
  mr as TableContainer,
  hr as TableFooter,
  pr as TableHeader,
  jr as Textarea,
  Rn as Toast,
  Yr as ToastProvider,
  Mr as Tooltip,
  Lr as useAutomation,
  Br as useDrawer,
  Ar as useModal,
  Sn as useScopedParams,
  $n as useToast
};
