import p, { createContext as Ie, useRef as je, useId as Kt, useContext as Ee, useState as ue, forwardRef as Xt, useEffect as pt } from "react";
import { Loader2 as Se, Check as Ct, ChevronDown as Jt, ChevronRight as at, ChevronLeft as qt, Ellipsis as gt, X as Nt, Info as vt, AlertCircle as Gt, XCircle as Zt, CheckCircle2 as Qt } from "lucide-react";
import { useActionData as _t, useLocation as jt, Link as en, useNavigate as tn } from "@remix-run/react";
import { InputMask as nn } from "@react-input/mask";
import { AnimatePresence as Et, motion as Ae } from "framer-motion";
import rn from "react-dom";
var st = { exports: {} }, Le = {};
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
function an() {
  if (bt) return Le;
  bt = 1;
  var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(l, u, m) {
    var h, y = {}, s = null, v = null;
    m !== void 0 && (s = "" + m), u.key !== void 0 && (s = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (h in u) o.call(u, h) && !c.hasOwnProperty(h) && (y[h] = u[h]);
    if (l && l.defaultProps) for (h in u = l.defaultProps, u) y[h] === void 0 && (y[h] = u[h]);
    return { $$typeof: n, type: l, key: s, ref: v, props: y, _owner: i.current };
  }
  return Le.Fragment = r, Le.jsx = f, Le.jsxs = f, Le;
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
function sn() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, n = Symbol.for("react.element"), r = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), l = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), S = Symbol.iterator, w = "@@iterator";
    function C(t) {
      if (t === null || typeof t != "object")
        return null;
      var d = S && t[S] || t[w];
      return typeof d == "function" ? d : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), k = 1; k < d; k++)
          g[k - 1] = arguments[k];
        V("error", t, g);
      }
    }
    function V(t, d, g) {
      {
        var k = b.ReactDebugCurrentFrame, D = k.getStackAddendum();
        D !== "" && (d += "%s", g = g.concat([D]));
        var W = g.map(function(I) {
          return String(I);
        });
        W.unshift("Warning: " + d), Function.prototype.apply.call(console[t], console, W);
      }
    }
    var z = !1, R = !1, A = !1, M = !1, X = !1, U;
    U = Symbol.for("react.module.reference");
    function K(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === c || X || t === i || t === m || t === h || M || t === v || z || R || A || typeof t == "object" && t !== null && (t.$$typeof === s || t.$$typeof === y || t.$$typeof === f || t.$$typeof === l || t.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === U || t.getModuleId !== void 0));
    }
    function O(t, d, g) {
      var k = t.displayName;
      if (k)
        return k;
      var D = d.displayName || d.name || "";
      return D !== "" ? g + "(" + D + ")" : g;
    }
    function G(t) {
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
        case c:
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
          case l:
            var d = t;
            return G(d) + ".Consumer";
          case f:
            var g = t;
            return G(g._context) + ".Provider";
          case u:
            return O(t, t.render, "ForwardRef");
          case y:
            var k = t.displayName || null;
            return k !== null ? k : j(t.type) || "Memo";
          case s: {
            var D = t, W = D._payload, I = D._init;
            try {
              return j(I(W));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var J = Object.assign, F = 0, Y, te, $, Z, he, T, _;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function ne() {
      {
        if (F === 0) {
          Y = console.log, te = console.info, $ = console.warn, Z = console.error, he = console.group, T = console.groupCollapsed, _ = console.groupEnd;
          var t = {
            configurable: !0,
            enumerable: !0,
            value: E,
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
    function Q() {
      {
        if (F--, F === 0) {
          var t = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: J({}, t, {
              value: Y
            }),
            info: J({}, t, {
              value: te
            }),
            warn: J({}, t, {
              value: $
            }),
            error: J({}, t, {
              value: Z
            }),
            group: J({}, t, {
              value: he
            }),
            groupCollapsed: J({}, t, {
              value: T
            }),
            groupEnd: J({}, t, {
              value: _
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = b.ReactCurrentDispatcher, re;
    function oe(t, d, g) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (D) {
            var k = D.stack.trim().match(/\n( *(at )?)/);
            re = k && k[1] || "";
          }
        return `
` + re + t;
      }
    }
    var de = !1, ve;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new Ge();
    }
    function Re(t, d) {
      if (!t || de)
        return "";
      {
        var g = ve.get(t);
        if (g !== void 0)
          return g;
      }
      var k;
      de = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var W;
      W = H.current, H.current = null, ne();
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
            } catch (ce) {
              k = ce;
            }
            Reflect.construct(t, [], I);
          } else {
            try {
              I.call();
            } catch (ce) {
              k = ce;
            }
            t.call(I.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            k = ce;
          }
          t();
        }
      } catch (ce) {
        if (ce && k && typeof ce.stack == "string") {
          for (var P = ce.stack.split(`
`), ie = k.stack.split(`
`), q = P.length - 1, ee = ie.length - 1; q >= 1 && ee >= 0 && P[q] !== ie[ee]; )
            ee--;
          for (; q >= 1 && ee >= 0; q--, ee--)
            if (P[q] !== ie[ee]) {
              if (q !== 1 || ee !== 1)
                do
                  if (q--, ee--, ee < 0 || P[q] !== ie[ee]) {
                    var ge = `
` + P[q].replace(" at new ", " at ");
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && ve.set(t, ge), ge;
                  }
                while (q >= 1 && ee >= 0);
              break;
            }
        }
      } finally {
        de = !1, H.current = W, Q(), Error.prepareStackTrace = D;
      }
      var Te = t ? t.displayName || t.name : "", _e = Te ? oe(Te) : "";
      return typeof t == "function" && ve.set(t, _e), _e;
    }
    function Ze(t, d, g) {
      return Re(t, !1);
    }
    function We(t) {
      var d = t.prototype;
      return !!(d && d.isReactComponent);
    }
    function Ne(t, d, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Re(t, We(t));
      if (typeof t == "string")
        return oe(t);
      switch (t) {
        case m:
          return oe("Suspense");
        case h:
          return oe("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case u:
            return Ze(t.render);
          case y:
            return Ne(t.type, d, g);
          case s: {
            var k = t, D = k._payload, W = k._init;
            try {
              return Ne(W(D), d, g);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ve = {}, Ye = b.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var d = t._owner, g = Ne(t.type, t._source, d ? d.type : null);
        Ye.setExtraStackFrame(g);
      } else
        Ye.setExtraStackFrame(null);
    }
    function we(t, d, g, k, D) {
      {
        var W = Function.call.bind(me);
        for (var I in t)
          if (W(t, I)) {
            var P = void 0;
            try {
              if (typeof t[I] != "function") {
                var ie = Error((k || "React class") + ": " + g + " type `" + I + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[I] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              P = t[I](d, I, k, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              P = q;
            }
            P && !(P instanceof Error) && (ae(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", g, I, typeof P), ae(null)), P instanceof Error && !(P.message in Ve) && (Ve[P.message] = !0, ae(D), x("Failed %s type: %s", g, P.message), ae(null));
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
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", $e(t)), ze(t);
    }
    var pe = b.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Fe, De;
    De = {};
    function Ue(t) {
      if (me.call(t, "ref")) {
        var d = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ke(t) {
      if (me.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function tt(t, d) {
      if (typeof t.ref == "string" && pe.current && d && pe.current.stateNode !== d) {
        var g = j(pe.current.type);
        De[g] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(pe.current.type), t.ref), De[g] = !0);
      }
    }
    function Me(t, d) {
      {
        var g = function() {
          ye || (ye = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function be(t, d) {
      {
        var g = function() {
          Fe || (Fe = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(t, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var nt = function(t, d, g, k, D, W, I) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: t,
        key: d,
        ref: g,
        props: I,
        // Record the component responsible for creating this element.
        _owner: W
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function N(t, d, g, k, D) {
      {
        var W, I = {}, P = null, ie = null;
        g !== void 0 && (Pe(g), P = "" + g), Ke(d) && (Pe(d.key), P = "" + d.key), Ue(d) && (ie = d.ref, tt(d, D));
        for (W in d)
          me.call(d, W) && !He.hasOwnProperty(W) && (I[W] = d[W]);
        if (t && t.defaultProps) {
          var q = t.defaultProps;
          for (W in q)
            I[W] === void 0 && (I[W] = q[W]);
        }
        if (P || ie) {
          var ee = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          P && Me(I, ee), ie && be(I, ee);
        }
        return nt(t, P, ie, D, k, pe.current, I);
      }
    }
    var L = b.ReactCurrentOwner, B = b.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var d = t._owner, g = Ne(t.type, t._source, d ? d.type : null);
        B.setExtraStackFrame(g);
      } else
        B.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function ke(t) {
      return typeof t == "object" && t !== null && t.$$typeof === n;
    }
    function Xe() {
      {
        if (L.current) {
          var t = j(L.current.type);
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
    function Mt(t) {
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
        var g = Mt(d);
        if (ut[g])
          return;
        ut[g] = !0;
        var k = "";
        t && t._owner && t._owner !== L.current && (k = " It was passed a child from " + j(t._owner.type) + "."), se(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, k), se(null);
      }
    }
    function ft(t, d) {
      {
        if (typeof t != "object")
          return;
        if (Oe(t))
          for (var g = 0; g < t.length; g++) {
            var k = t[g];
            ke(k) && dt(k, d);
          }
        else if (ke(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = C(t);
          if (typeof D == "function" && D !== t.entries)
            for (var W = D.call(t), I; !(I = W.next()).done; )
              ke(I.value) && dt(I.value, d);
        }
      }
    }
    function Lt(t) {
      {
        var d = t.type;
        if (d == null || typeof d == "string")
          return;
        var g;
        if (typeof d == "function")
          g = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === y))
          g = d.propTypes;
        else
          return;
        if (g) {
          var k = j(d);
          we(g, t.props, "prop", k, t);
        } else if (d.PropTypes !== void 0 && !le) {
          le = !0;
          var D = j(d);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(t) {
      {
        for (var d = Object.keys(t.props), g = 0; g < d.length; g++) {
          var k = d[g];
          if (k !== "children" && k !== "key") {
            se(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), se(null);
            break;
          }
        }
        t.ref !== null && (se(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ht = {};
    function mt(t, d, g, k, D, W) {
      {
        var I = K(t);
        if (!I) {
          var P = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Dt(D);
          ie ? P += ie : P += Xe();
          var q;
          t === null ? q = "null" : Oe(t) ? q = "array" : t !== void 0 && t.$$typeof === n ? (q = "<" + (j(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : q = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, P);
        }
        var ee = N(t, d, g, D, W);
        if (ee == null)
          return ee;
        if (I) {
          var ge = d.children;
          if (ge !== void 0)
            if (k)
              if (Oe(ge)) {
                for (var Te = 0; Te < ge.length; Te++)
                  ft(ge[Te], t);
                Object.freeze && Object.freeze(ge);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ft(ge, t);
        }
        if (me.call(d, "key")) {
          var _e = j(t), ce = Object.keys(d).filter(function(Ut) {
            return Ut !== "key";
          }), rt = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ht[_e + rt]) {
            var Ht = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, _e, Ht, _e), ht[_e + rt] = !0;
          }
        }
        return t === o ? Bt(ee) : Lt(ee), ee;
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
process.env.NODE_ENV === "production" ? st.exports = an() : st.exports = sn();
var a = st.exports;
function qe(e, n) {
  return n ? /* @__PURE__ */ a.jsx(n, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function St(e, n) {
  return [...new Array(n - e)].map((r, o) => e + o + 1).filter((r) => r > 0);
}
function on(e, n, r) {
  return e >= r ? [] : St(e + 1, e + n);
}
function ln(e, n) {
  return e <= 1 ? [] : St(e - 1 - n, e - 1);
}
function cn(e, n, r) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ a.jsx("p", { className: r, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function ar(e) {
  const {
    variant: n = "ghost",
    scheme: r = "primary",
    size: o = "md",
    leftIcon: i,
    rightIcon: c,
    className: f = "",
    children: l,
    ...u
  } = e, h = { md: 12, lg: 14 }[o], y = `arkyn_badge ${n} ${r} ${o} ${f}`;
  return /* @__PURE__ */ a.jsxs("div", { className: y.trim(), ...u, children: [
    qe(h, i),
    l,
    qe(h, i)
  ] });
}
function sr(e) {
  const {
    className: n,
    orientation: r = "horizontal",
    ...o
  } = e, i = `arkyn_divider ${r} ${n}`;
  return /* @__PURE__ */ a.jsx("div", { className: i, ...o });
}
function or(e) {
  const { className: n, ...r } = e, o = `arkyn_skeleton ${n}`;
  return /* @__PURE__ */ a.jsx("aside", { className: o.trim(), ...r });
}
function ir(e) {
  const { className: n, ...r } = e, o = `arkyn_table_body ${n}`;
  return /* @__PURE__ */ a.jsx("tbody", { className: o.trim(), ...r });
}
function lr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_caption ${n}`;
  return /* @__PURE__ */ a.jsx("caption", { className: i.trim(), ...o, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_caption-content", children: r }) });
}
function cr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_table_container ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: i.trim(), ...o, children: /* @__PURE__ */ a.jsx("table", { children: n }) });
}
function ur(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_footer ${n}`;
  return /* @__PURE__ */ a.jsxs("tfoot", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("th", { colSpan: 100, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_footer-content", children: r }) }) })
  ] });
}
function dr(e) {
  const { className: n, children: r, ...o } = e, i = `arkyn_table_header ${n}`;
  return /* @__PURE__ */ a.jsxs("thead", { className: i.trim(), ...o, children: [
    /* @__PURE__ */ a.jsx("tr", { children: r }),
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" })
  ] });
}
function fr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    loadingText: i,
    size: c = "md",
    leftIcon: f,
    rightIcon: l,
    disabled: u,
    className: m = "",
    children: h,
    ...y
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[c], S = `arkyn_button loading_text_${!!i} ${o} ${r} ${c} loading_${n} ${m}`;
  return /* @__PURE__ */ a.jsxs("button", { className: S, disabled: u || n, ...y, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ a.jsx(Se, { size: v, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-content", children: [
      qe(v, f),
      h,
      qe(v, l)
    ] })
  ] });
}
const Rt = Ie({});
function hr(e) {
  var h, y;
  const n = _t(), { children: r, className: o, ...i } = e, c = je(null), f = ((h = c.current) == null ? void 0 : h.name) || "", l = ((y = n == null ? void 0 : n.fieldErrors) == null ? void 0 : y[f]) || null, u = Kt(), m = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ a.jsx(Rt.Provider, { value: { error: l, id: u, inputRef: c }, children: /* @__PURE__ */ a.jsx("section", { className: m.trim(), ...i, children: r }) });
}
function xe() {
  return Ee(Rt);
}
function mr(e) {
  const {
    name: n,
    className: r = "",
    size: o = "md",
    isError: i,
    defaultChecked: c = !1,
    checked: f = null,
    onCheck: l,
    value: u,
    ...m
  } = e, { id: h, inputRef: y, error: s } = xe(), v = i || !!s, [S, w] = ue(c || !1), C = typeof f == "boolean" ? f : S, b = `arkyn_checkbox ${o} ${v ? "error" : ""} ${C ? "checked" : ""} ${r}`;
  function x() {
    const V = S;
    w(!V), l && l(V ? "" : u || "checked");
  }
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      id: h,
      className: b,
      onClick: x,
      ...m,
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "hidden",
            name: n,
            ref: y,
            value: C ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ a.jsx(Ct, {})
      ]
    }
  );
}
function pr(e) {
  const { children: n, className: r, ...o } = e, i = `arkyn_form_error ${r}`, { error: c } = xe();
  return n ? /* @__PURE__ */ a.jsx("strong", { className: i.trim(), ...o, children: n }) : c ? /* @__PURE__ */ a.jsx("strong", { className: i.trim(), ...o, children: c }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function gr(e) {
  const {
    showAsterisk: n = !1,
    className: r = "",
    ...o
  } = e, { id: i } = xe(), f = `arkyn_form_label ${n ? "show-asterisk" : ""} ${r}`;
  return /* @__PURE__ */ a.jsx("label", { ...o, className: f.trim(), htmlFor: i });
}
function vr(e) {
  const {
    isLoading: n = !1,
    scheme: r = "primary",
    variant: o = "solid",
    size: i = "md",
    icon: c,
    disabled: f,
    className: l = "",
    ...u
  } = e, m = { xs: 12, sm: 16, md: 20, lg: 24 }, h = `arkyn_icon_button ${o} ${r} ${i} loading_${n} ${l}`;
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      disabled: f || n,
      className: h.trim(),
      ...u,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ a.jsx(Se, { size: m[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ a.jsx(c, { size: m[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ce(e, n, r) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: r, children: e });
  const o = e;
  return /* @__PURE__ */ a.jsx("p", { className: r, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function it(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function $t(e, n) {
  let r = "", o = 0;
  return Array.from(e).forEach((i, c) => {
    n[c + o].match(/[0-9]/) || (r += n[c + o], o++), r += i;
  }), r;
}
function Pt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const lt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Tt = it(lt.CNPJ).length;
function un(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: l,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    defaultValue: s,
    readOnly: v,
    onFocus: S,
    onBlur: w,
    title: C,
    style: b,
    onChange: x,
    ...V
  } = e;
  function z(J) {
    let F = it(J);
    const Y = Pt(F);
    if (!(F.length > Tt))
      return F = $t(F, lt[Y]), F;
  }
  const R = h ? "right" : "left", O = `arkyn_input ${l ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${y || v || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${c}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: Ce(l, j, "prefix"),
    sufix: Ce(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    defaultValue: z(s || ""),
    disabled: y,
    readOnly: v,
    onFocus: S,
    onBlur: w,
    title: C,
    style: b,
    onChange: x,
    loadingPosition: R,
    iconSize: j,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...V
  };
}
function dn(e) {
  const [n, r] = ue(!1), o = je(null), { inputRef: i, id: c, error: f } = xe(), l = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: v,
    sufix: S,
    iconSize: w,
    loadingPosition: C,
    isLoading: b,
    LeftIcon: x,
    readOnly: V,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    Spinner: M,
    onChange: X,
    value: U,
    defaultValue: K,
    ...O
  } = un({ ...e, id: c, isError: u }, n), [G, j] = ue(K), J = x && !b, F = A && !b, Y = C === "left" && b, te = C === "right" && b;
  function $() {
    m || !(l != null && l.current) || (r(!0), l.current.focus());
  }
  function Z(_) {
    let E = it(_.target.value);
    const ne = Pt(E);
    E.length > Tt || (E = $t(E, lt[ne]), _.target.value = E, j(E), X && X(_));
  }
  function he(_) {
    r(!0), z && z(_);
  }
  function T(_) {
    r(!1), R && R(_);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: $,
      className: s,
      children: [
        v,
        Y && M,
        J && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || b,
            readOnly: V,
            ref: l,
            value: U || G,
            onFocus: he,
            onChange: Z,
            onBlur: T,
            ...O
          }
        ),
        F && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        te && M,
        S
      ]
    }
  );
}
function fn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: l,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: v,
    onBlur: S,
    title: w,
    style: C,
    showCents: b = !1,
    max: x = 1e9,
    onChange: V,
    ...z
  } = e, R = h ? "right" : "left", O = `arkyn_input ${l ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${y || s || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${c}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: Ce(l, j, "prefix"),
    sufix: Ce(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: v,
    onBlur: S,
    title: w,
    style: C,
    max: x,
    onChange: V,
    showCents: b,
    loadingPosition: R,
    iconSize: j,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
const hn = /^[1-9]{1}$/, mn = /^[0-9]{1}$/, xt = 8;
function pn(e, n) {
  if (e === 0) return "";
  const r = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return n ? r : r.replace("R$", "").trim();
}
function gn(e) {
  const { currencyValue: n, event: r, max: o, setCurrencyValue: i } = e, { key: c, keyCode: f } = r;
  if (n === 0 && !hn.test(c) || n !== 0 && !mn.test(c) && f !== xt)
    return;
  const l = n.toString();
  let u;
  if (f !== xt) {
    const m = n === 0 ? c : `${l}${c}`;
    u = Number.parseInt(m, 10);
  } else {
    const m = l.slice(0, -1);
    u = m === "" ? 0 : Number.parseInt(m, 10);
  }
  u > Number(o) || i(u);
}
function vn(e) {
  const [n, r] = ue(!1), o = je(null), { inputRef: i, id: c, error: f } = xe(), l = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: v,
    sufix: S,
    iconSize: w,
    loadingPosition: C,
    isLoading: b,
    LeftIcon: x,
    readOnly: V,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    Spinner: M,
    value: X,
    max: U,
    onKeyDown: K,
    onChange: O,
    showCents: G,
    defaultValue: j,
    ...J
  } = fn({ ...e, id: c, isError: u }, n), [F, Y] = ue(j * 100 || 0), te = x && !b, $ = A && !b, Z = C === "left" && b, he = C === "right" && b;
  function T() {
    m || !(l != null && l.current) || (r(!0), l.current.focus());
  }
  function _(Q) {
    gn({ currencyValue: F, event: Q, max: U, setCurrencyValue: Y }), O && O(F / 100), K && K(Q);
  }
  function E(Q) {
    r(!0), z && z(Q);
  }
  function ne(Q) {
    r(!1), R && R(Q);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: T,
      className: s,
      children: [
        v,
        Z && M,
        te && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: pn(X || F, G),
            onKeyDown: _,
            disabled: m || b,
            readOnly: V,
            ref: l,
            onFocus: E,
            onBlur: ne,
            onChange: () => {
            },
            ...J
          }
        ),
        he && M,
        $ && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        S
      ]
    }
  );
}
function bn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: l,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: v,
    onBlur: S,
    title: w,
    style: C,
    onChange: b,
    showMask: x = !1,
    type: V,
    ...z
  } = e, R = h ? "right" : "left", O = `arkyn_input ${l ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${y || s || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${c}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: O,
    prefix: Ce(l, j, "prefix"),
    sufix: Ce(u, j, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: v,
    onBlur: S,
    title: w,
    style: C,
    onChange: b,
    loadingPosition: R,
    iconSize: j,
    showMask: x,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
const yn = Xt((e, n) => /* @__PURE__ */ a.jsx("input", { ref: n, ...e }));
function xn(e) {
  const [n, r] = ue(!1), o = je(null), { inputRef: i, id: c, error: f } = xe(), l = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: v,
    sufix: S,
    iconSize: w,
    loadingPosition: C,
    isLoading: b,
    LeftIcon: x,
    readOnly: V,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    Spinner: M,
    ...X
  } = bn({ ...e, id: c, isError: u }, n), U = x && !b, K = A && !b, O = C === "left" && b, G = C === "right" && b;
  function j() {
    m || !(l != null && l.current) || (r(!0), l.current.focus());
  }
  function J(Y) {
    r(!0), z && z(Y);
  }
  function F(Y) {
    r(!1), R && R(Y);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: j,
      className: s,
      children: [
        v,
        O && M,
        U && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          nn,
          {
            component: yn,
            ref: l,
            onFocus: J,
            onBlur: F,
            ...X
          }
        ),
        K && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        G && M,
        S
      ]
    }
  );
}
function wn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: l,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: v,
    onBlur: S,
    title: w,
    style: C,
    onChange: b,
    ...x
  } = e, V = h ? "right" : "left", U = `arkyn_input ${l ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${f} ${i} ${y || s || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${c}`, O = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: U,
    prefix: Ce(l, O, "prefix"),
    sufix: Ce(u, O, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: y,
    readOnly: s,
    onFocus: v,
    onBlur: S,
    title: w,
    style: C,
    onChange: b,
    loadingPosition: V,
    iconSize: O,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...x
  };
}
function kn(e) {
  const [n, r] = ue(!1), o = je(null), { inputRef: i, id: c, error: f } = xe(), l = i || o, u = e.isError || !!f, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: v,
    sufix: S,
    iconSize: w,
    loadingPosition: C,
    isLoading: b,
    LeftIcon: x,
    readOnly: V,
    onFocus: z,
    onBlur: R,
    RightIcon: A,
    type: M,
    Spinner: X,
    ...U
  } = wn({ ...e, id: c, isError: u }, n), K = x && !b, O = A && !b, G = C === "left" && b, j = C === "right" && b;
  function J() {
    m || !(l != null && l.current) || (r(!0), l.current.focus());
  }
  function F(te) {
    r(!0), z && z(te);
  }
  function Y(te) {
    r(!1), R && R(te);
  }
  return M === "hidden" ? /* @__PURE__ */ a.jsx("input", { type: "hidden", ref: l, ...U }) : /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: y,
      onClick: J,
      className: s,
      children: [
        v,
        G && X,
        K && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || b,
            readOnly: V,
            ref: l,
            onFocus: F,
            onBlur: Y,
            type: M,
            ...U
          }
        ),
        O && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        j && X,
        S
      ]
    }
  );
}
function br(e) {
  return e.type === "currency" ? /* @__PURE__ */ a.jsx(vn, { ...e }) : e.type === "masked" ? /* @__PURE__ */ a.jsx(xn, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ a.jsx(dn, { ...e }) : /* @__PURE__ */ a.jsx(kn, { ...e });
}
function Cn(e, n) {
  const {
    isLoading: r,
    isError: o,
    size: i = "md",
    className: c = "",
    variant: f = "solid",
    prefix: l,
    leftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: y,
    onBlur: s,
    title: v,
    style: S,
    // isSearchable = false,
    closeOnSelect: w = !0,
    ...C
  } = e, R = `arkyn_select ${l ? "hasPrefix" : ""} ${f} ${i} ${m || h || r ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${c}`, M = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: R,
    prefix: cn(l, M, "prefix"),
    LeftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: y,
    onBlur: s,
    title: v,
    closeOnSelect: w,
    style: S,
    // isSearchable,
    iconSize: M,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: M, strokeWidth: 2.5 }),
    ...C
  };
}
function yr(e) {
  var H;
  const [n, r] = ue(!1), { inputRef: o, id: i, error: c } = xe(), f = je(null), l = o || f, u = e.isError || !!c, {
    disabled: m,
    title: h,
    style: y,
    className: s,
    prefix: v,
    iconSize: S,
    isLoading: w,
    LeftIcon: C,
    value: b = null,
    defaultValue: x = "",
    readOnly: V,
    onFocus: z,
    onBlur: R,
    Spinner: A,
    name: M,
    // isSearchable,
    placeholder: X,
    onSelect: U,
    options: K,
    optionMaxHeight: O,
    closeOnSelect: G,
    ...j
  } = Cn({ ...e, id: i, isError: u }, n), [J, F] = ue(x), [Y, te] = ue("");
  function $() {
    m || !(l != null && l.current) || (r(!0), l.current.focus());
  }
  function Z(re) {
    r(!0), z && z(re);
  }
  function he() {
    r(!1), R && l.current && l.current.blur();
  }
  function T(re) {
    const { label: oe, value: de } = re;
    F(J !== de ? de : ""), U && U({ label: oe, value: de }), G && (l.current.blur(), r(!1), console.log("fecha"));
  }
  const _ = typeof b == "string" ? b : J, E = ((H = K.find((re) => re.value === _)) == null ? void 0 : H.label) || "", ne = () => {
    if (!n && E) return !0;
    if (!n && !E) return !1;
    if (n && E) return !0;
    if (n && !E) return !1;
  }, Q = K.filter((re) => !0);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "section",
      {
        title: h,
        style: y,
        onClick: $,
        className: `${s} placeholder_dark_${ne()}`,
        children: [
          v,
          C && /* @__PURE__ */ a.jsx(C, { size: S, strokeWidth: 2.5 }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              disabled: m || w,
              readOnly: !0,
              value: Y || "",
              placeholder: E || X,
              onFocus: Z,
              onBlur: () => te(""),
              ...j
            }
          ),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "hidden",
              ref: l,
              name: M,
              value: _ || "",
              readOnly: !0
            }
          ),
          n && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: O },
              children: [
                Q.map(({ label: re, value: oe }) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    onClick: () => T({ label: re, value: oe }),
                    className: _ === oe ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      re,
                      " ",
                      /* @__PURE__ */ a.jsx(Ct, {})
                    ]
                  },
                  oe
                )),
                Q.length <= 0 && /* @__PURE__ */ a.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !w && /* @__PURE__ */ a.jsx(
            Jt,
            {
              className: "arkyn_select_arrow",
              size: S,
              strokeWidth: 2.5
            }
          ),
          w && A
        ]
      }
    ),
    n && /* @__PURE__ */ a.jsx("aside", { className: "arkyn_select_overlay", onClick: he })
  ] });
}
function xr(e) {
  const {
    variant: n = "solid",
    size: r = "md",
    className: o,
    disabled: i = !1,
    readOnly: c = !1,
    onFocus: f,
    onBlur: l,
    title: u,
    style: m,
    ...h
  } = e, [y, s] = ue(!1), { inputRef: v, id: S, error: w } = xe(), C = je(null), b = v || C, V = e.isError || !!w ? "errored" : "", A = `arkyn_textarea ${n} ${r} ${i || c ? "opacity" : ""} ${V} ${y ? "focused" : ""} ${o}`;
  function M() {
    i || !(b != null && b.current) || (s(!0), b.current.focus());
  }
  function X(K) {
    s(!0), f && f(K);
  }
  function U(K) {
    s(!1), l && l(K);
  }
  return /* @__PURE__ */ a.jsx(
    "section",
    {
      title: u,
      style: m,
      onClick: M,
      className: A,
      children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          id: S,
          disabled: i,
          readOnly: c,
          ref: b,
          onFocus: X,
          onBlur: U,
          ...h
        }
      )
    }
  );
}
function wr(e) {
  const { className: n = "", ...r } = e, o = `arkyn_breadcrumb_container ${n}`;
  return /* @__PURE__ */ a.jsx("nav", { className: o, ...r });
}
function kr(e) {
  const { pathname: n } = jt(), {
    className: r = "",
    disabled: o = !1,
    children: i,
    to: c,
    ...f
  } = e, u = `arkyn_breadcrumb_link ${n === c ? "active" : "inactive"} ${r}`;
  return o ? /* @__PURE__ */ a.jsxs("p", { className: u, children: [
    /* @__PURE__ */ a.jsx(at, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ a.jsxs(en, { to: c, className: u, ...f, children: [
    /* @__PURE__ */ a.jsx(at, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function Nn(e = "") {
  const n = jt(), r = new URLSearchParams(n.search), o = e ? `${e}:` : "", i = (c) => {
    Object.entries(c).forEach(([f, l]) => {
      l === void 0 ? r.delete(`${o}${f}`) : r.set(`${o}${f}`, String(l));
    });
  };
  return {
    getParam: (c) => r.get(`${o}${c}`),
    getScopedSearch: (c) => {
      i(c);
      let f = r.toString();
      return f && (f = "?" + f), f;
    }
  };
}
function Cr(e) {
  const {
    scope: n,
    totalCountRegisters: r,
    perPageKey: o = "per_page",
    pageKey: i = "page",
    siblingsCount: c = 2,
    ...f
  } = e, l = tn(), { getParam: u, getScopedSearch: m } = Nn(n), h = Number(u(i)) || 1, y = Number(u(o)) || 20, s = Math.ceil(r / y), v = ln(h, c), S = on(h, c, s);
  function w(C) {
    l(m({ page: C }));
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "arkyn_pagination", ...f, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: h <= 1,
        onClick: () => w(h - 1),
        children: /* @__PURE__ */ a.jsx(qt, {})
      }
    ),
    h > 1 + c && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => w(1),
          children: "1"
        }
      ),
      h > 2 + c && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(gt, {}) })
    ] }),
    v.map((C, b) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(C),
        className: "arkyn_pagination-page_button",
        children: C
      },
      b
    )),
    /* @__PURE__ */ a.jsx("button", { className: "arkyn_pagination-current", disabled: !0, children: h }),
    S.map((C, b) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(C),
        className: "arkyn_pagination-page_button",
        children: C
      },
      b
    )),
    h + c < s && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      h + 1 + c < s && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(gt, {}) }),
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
        children: /* @__PURE__ */ a.jsx(at, {})
      }
    )
  ] });
}
const It = Ie({});
function Nr(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    orientation: o = "left",
    children: i,
    className: c,
    ...f
  } = e, l = o === "left" ? "-100%" : "100%", m = `arkyn_drawer_container ${o} ${n ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ a.jsx(It.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ a.jsx(Et, { children: n && /* @__PURE__ */ a.jsxs("aside", { className: m.trim(), ...f, children: [
    /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(
      Ae.div,
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
function _r(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: c } = Ee(It), f = `arkyn_drawer_header ${r}`;
  return /* @__PURE__ */ a.jsxs("header", { className: f.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: c,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ a.jsx(Nt, { size: 24 })
      }
    )
  ] });
}
const Ot = Ie({});
function jr(e) {
  const {
    isVisibled: n,
    makeInvisible: r,
    children: o,
    className: i = "",
    ...c
  } = e, l = `arkyn_modal_container ${n ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ a.jsx(Ot.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ a.jsx(Et, { children: n && /* @__PURE__ */ a.jsxs("aside", { className: l.trim(), ...c, children: [
    /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(
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
function Er(e) {
  const { alignment: n = "right", className: r, ...o } = e, i = `arkyn_modal_footer ${n} ${r}`;
  return /* @__PURE__ */ a.jsx("footer", { className: i.trim(), ...o });
}
function Sr(e) {
  const {
    showCloseButton: n = !0,
    className: r,
    children: o,
    ...i
  } = e, { makeInvisible: c } = Ee(Ot), f = `arkyn_modal_header ${r}`;
  return /* @__PURE__ */ a.jsxs("header", { className: f.trim(), ...i, children: [
    o,
    n && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: c,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ a.jsx(Nt, { size: 24 })
      }
    )
  ] });
}
function Rr(e) {
  const { children: n, button: r, closeOnClick: o, orientation: i = "bottom-left" } = e, [c, f] = ue(!1), l = `arkyn_popover ${i} ${c ? "show" : ""}`;
  return /* @__PURE__ */ a.jsxs("div", { className: l, onClick: () => f(!0), children: [
    r,
    /* @__PURE__ */ a.jsx(
      Ae.div,
      {
        style: { visibility: c ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: c ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => o && f(!1),
        className: "arkyn_popover-content",
        children: n
      }
    ),
    c && /* @__PURE__ */ a.jsx(
      "div",
      {
        onClick: () => f(!1),
        className: "arkyn_popover-overlay"
      }
    )
  ] });
}
function _n(e) {
  const { message: n, title: r, type: o, size: i = "lg" } = e, c = `arkyn_toast ${o} ${i}`;
  function f() {
    switch (o) {
      case "info":
        return /* @__PURE__ */ a.jsx(vt, {});
      case "success":
        return /* @__PURE__ */ a.jsx(Qt, {});
      case "danger":
        return /* @__PURE__ */ a.jsx(Zt, {});
      case "warning":
        return /* @__PURE__ */ a.jsx(Gt, {});
      default:
        return /* @__PURE__ */ a.jsx(vt, {});
    }
  }
  return /* @__PURE__ */ a.jsxs("aside", { className: c, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { className: "bg" }),
      /* @__PURE__ */ a.jsx(f, {})
    ] }),
    /* @__PURE__ */ a.jsxs("p", { children: [
      /* @__PURE__ */ a.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ a.jsx("span", { children: n })
    ] })
  ] });
}
function $r(e) {
  const {
    text: n,
    size: r = "lg",
    children: o,
    orientation: i = "top",
    className: c,
    ...f
  } = e, l = `arkyn_tooltip ${r} ${i} ${c}`;
  return /* @__PURE__ */ a.jsxs("div", { className: l.trim(), ...f, children: [
    o,
    /* @__PURE__ */ a.jsx("div", { className: "arkyn_tooltip-text", children: n })
  ] });
}
const ct = Ie({}), zt = Ie({});
function jn() {
  const e = Ee(zt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function wt(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function Pr() {
  const e = _t(), { closeModal: n } = Ee(ct), { showToast: r } = jn();
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
function Tr(e) {
  const n = Ee(Ft);
  if (Object.entries(n).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: r,
      drawerIsOpen: o,
      openDrawer: i,
      closeDrawer: c
    } = n, f = o(e), l = r(e);
    return { drawerIsOpen: f, drawerData: l, openDrawer: (h) => i(e, h), closeDrawer: () => c(e) };
  } else
    return n;
}
function Ir(e) {
  const n = Ee(ct);
  if (Object.entries(n).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: r,
      modalIsOpen: o,
      openModal: i,
      closeModal: c
    } = n, f = o(e), l = r(e);
    return { modalIsOpen: f, modalData: l, openModal: (h) => i(e, h), closeModal: () => c(e) };
  } else
    return n;
}
function Or(e) {
  const { children: n = !1 } = e, [r, o] = ue([]);
  function i(u) {
    return !!r.some((m) => m.key === u);
  }
  function c(u) {
    var m;
    return (m = r.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function f(u, m) {
    const h = i(u);
    o(h ? (y) => [...y.filter((v) => v.key !== u), { key: u, data: m }] : [...r, { key: u, data: m }]);
  }
  function l(u) {
    o(r.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ a.jsx(
    Ft.Provider,
    {
      value: { drawerIsOpen: i, drawerData: c, openDrawer: f, closeDrawer: l },
      children: n
    }
  );
}
function zr(e) {
  const { children: n = !1 } = e, [r, o] = ue([]);
  function i(u) {
    return !!r.some((m) => m.key === u);
  }
  function c(u) {
    var m;
    return (m = r.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function f(u, m) {
    const h = i(u);
    o(h ? (y) => [...y.filter((v) => v.key !== u), { key: u, data: m }] : [...r, { key: u, data: m }]);
  }
  function l(u) {
    o(r.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ a.jsx(
    ct.Provider,
    {
      value: { modalIsOpen: i, modalData: c, openModal: f, closeModal: l },
      children: n
    }
  );
}
var En = (e) => {
  switch (e) {
    case "success":
      return $n;
    case "info":
      return Tn;
    case "warning":
      return Pn;
    case "error":
      return In;
    default:
      return null;
  }
}, Sn = Array(12).fill(0), Rn = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, Sn.map((n, r) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), $n = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Pn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Tn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), In = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), On = () => {
  let [e, n] = p.useState(document.hidden);
  return p.useEffect(() => {
    let r = () => {
      n(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, ot = 1, zn = class {
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
      let { message: r, ...o } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((n = e.id) == null ? void 0 : n.length) > 0 ? e.id : ot++, c = this.toasts.find((l) => l.id === i), f = e.dismissible === void 0 ? !0 : e.dismissible;
      return c ? this.toasts = this.toasts.map((l) => l.id === i ? (this.publish({ ...l, ...e, id: i, title: r }), { ...l, ...e, id: i, dismissible: f, title: r }) : l) : this.addToast({ title: r, ...o, dismissible: f, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((n) => {
      this.subscribers.forEach((r) => r({ id: n.id, dismiss: !0 }));
    }), this.subscribers.forEach((n) => n({ id: e, dismiss: !0 })), e), this.message = (e, n) => this.create({ ...n, message: e }), this.error = (e, n) => this.create({ ...n, message: e, type: "error" }), this.success = (e, n) => this.create({ ...n, type: "success", message: e }), this.info = (e, n) => this.create({ ...n, type: "info", message: e }), this.warning = (e, n) => this.create({ ...n, type: "warning", message: e }), this.loading = (e, n) => this.create({ ...n, type: "loading", message: e }), this.promise = (e, n) => {
      if (!n) return;
      let r;
      n.loading !== void 0 && (r = this.create({ ...n, promise: e, type: "loading", message: n.loading, description: typeof n.description != "function" ? n.description : void 0 }));
      let o = e instanceof Promise ? e : e(), i = r !== void 0;
      return o.then(async (c) => {
        if (Dn(c) && !c.ok) {
          i = !1;
          let f = typeof n.error == "function" ? await n.error(`HTTP error! status: ${c.status}`) : n.error, l = typeof n.description == "function" ? await n.description(`HTTP error! status: ${c.status}`) : n.description;
          this.create({ id: r, type: "error", message: f, description: l });
        } else if (n.success !== void 0) {
          i = !1;
          let f = typeof n.success == "function" ? await n.success(c) : n.success, l = typeof n.description == "function" ? await n.description(c) : n.description;
          this.create({ id: r, type: "success", message: f, description: l });
        }
      }).catch(async (c) => {
        if (n.error !== void 0) {
          i = !1;
          let f = typeof n.error == "function" ? await n.error(c) : n.error, l = typeof n.description == "function" ? await n.description(c) : n.description;
          this.create({ id: r, type: "error", message: f, description: l });
        }
      }).finally(() => {
        var c;
        i && (this.dismiss(r), r = void 0), (c = n.finally) == null || c.call(n);
      }), r;
    }, this.custom = (e, n) => {
      let r = (n == null ? void 0 : n.id) || ot++;
      return this.create({ jsx: e(r), id: r, ...n }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, fe = new zn(), Fn = (e, n) => {
  let r = (n == null ? void 0 : n.id) || ot++;
  return fe.addToast({ title: e, ...n, id: r }), r;
}, Dn = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Mn = Fn, Ln = () => fe.toasts, Bn = Object.assign(Mn, { success: fe.success, info: fe.info, warning: fe.warning, error: fe.error, custom: fe.custom, message: fe.message, promise: fe.promise, dismiss: fe.dismiss, loading: fe.loading }, { getHistory: Ln });
function An(e, { insertAt: n } = {}) {
  if (!e || typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", n === "top" && r.firstChild ? r.insertBefore(o, r.firstChild) : r.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
An(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Je(e) {
  return e.label !== void 0;
}
var Wn = 3, Vn = "32px", Yn = 4e3, Hn = 356, Un = 14, Kn = 20, Xn = 200;
function Jn(...e) {
  return e.filter(Boolean).join(" ");
}
var qn = (e) => {
  var n, r, o, i, c, f, l, u, m, h;
  let { invert: y, toast: s, unstyled: v, interacting: S, setHeights: w, visibleToasts: C, heights: b, index: x, toasts: V, expanded: z, removeToast: R, defaultRichColors: A, closeButton: M, style: X, cancelButtonStyle: U, actionButtonStyle: K, className: O = "", descriptionClassName: G = "", duration: j, position: J, gap: F, loadingIcon: Y, expandByDefault: te, classNames: $, icons: Z, closeButtonAriaLabel: he = "Close toast", pauseWhenPageIsHidden: T, cn: _ } = e, [E, ne] = p.useState(!1), [Q, H] = p.useState(!1), [re, oe] = p.useState(!1), [de, ve] = p.useState(!1), [Ge, Re] = p.useState(0), [Ze, We] = p.useState(0), Ne = p.useRef(null), me = p.useRef(null), Ve = x === 0, Ye = x + 1 <= C, ae = s.type, we = s.dismissible !== !1, Qe = s.className || "", Oe = s.descriptionClassName || "", $e = p.useMemo(() => b.findIndex((N) => N.toastId === s.id) || 0, [b, s.id]), et = p.useMemo(() => {
    var N;
    return (N = s.closeButton) != null ? N : M;
  }, [s.closeButton, M]), ze = p.useMemo(() => s.duration || j || Yn, [s.duration, j]), Pe = p.useRef(0), pe = p.useRef(0), He = p.useRef(0), ye = p.useRef(null), [Fe, De] = J.split("-"), Ue = p.useMemo(() => b.reduce((N, L, B) => B >= $e ? N : N + L.height, 0), [b, $e]), Ke = On(), tt = s.invert || y, Me = ae === "loading";
  pe.current = p.useMemo(() => $e * F + Ue, [$e, Ue]), p.useEffect(() => {
    ne(!0);
  }, []), p.useLayoutEffect(() => {
    if (!E) return;
    let N = me.current, L = N.style.height;
    N.style.height = "auto";
    let B = N.getBoundingClientRect().height;
    N.style.height = L, We(B), w((se) => se.find((le) => le.toastId === s.id) ? se.map((le) => le.toastId === s.id ? { ...le, height: B } : le) : [{ toastId: s.id, height: B, position: s.position }, ...se]);
  }, [E, s.title, s.description, w, s.id]);
  let be = p.useCallback(() => {
    H(!0), Re(pe.current), w((N) => N.filter((L) => L.toastId !== s.id)), setTimeout(() => {
      R(s);
    }, Xn);
  }, [s, R, w, pe]);
  p.useEffect(() => {
    if (s.promise && ae === "loading" || s.duration === 1 / 0 || s.type === "loading") return;
    let N, L = ze;
    return z || S || T && Ke ? (() => {
      if (He.current < Pe.current) {
        let B = (/* @__PURE__ */ new Date()).getTime() - Pe.current;
        L = L - B;
      }
      He.current = (/* @__PURE__ */ new Date()).getTime();
    })() : L !== 1 / 0 && (Pe.current = (/* @__PURE__ */ new Date()).getTime(), N = setTimeout(() => {
      var B;
      (B = s.onAutoClose) == null || B.call(s, s), be();
    }, L)), () => clearTimeout(N);
  }, [z, S, te, s, ze, be, s.promise, ae, T, Ke]), p.useEffect(() => {
    let N = me.current;
    if (N) {
      let L = N.getBoundingClientRect().height;
      return We(L), w((B) => [{ toastId: s.id, height: L, position: s.position }, ...B]), () => w((B) => B.filter((se) => se.toastId !== s.id));
    }
  }, [w, s.id]), p.useEffect(() => {
    s.delete && be();
  }, [be, s.delete]);
  function nt() {
    return Z != null && Z.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, Z.loading) : Y ? p.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, Y) : p.createElement(Rn, { visible: ae === "loading" });
  }
  return p.createElement("li", { "aria-live": s.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: me, className: _(O, Qe, $ == null ? void 0 : $.toast, (n = s == null ? void 0 : s.classNames) == null ? void 0 : n.toast, $ == null ? void 0 : $.default, $ == null ? void 0 : $[ae], (r = s == null ? void 0 : s.classNames) == null ? void 0 : r[ae]), "data-sonner-toast": "", "data-rich-colors": (o = s.richColors) != null ? o : A, "data-styled": !(s.jsx || s.unstyled || v), "data-mounted": E, "data-promise": !!s.promise, "data-removed": Q, "data-visible": Ye, "data-y-position": Fe, "data-x-position": De, "data-index": x, "data-front": Ve, "data-swiping": re, "data-dismissible": we, "data-type": ae, "data-invert": tt, "data-swipe-out": de, "data-expanded": !!(z || te && E), style: { "--index": x, "--toasts-before": x, "--z-index": V.length - x, "--offset": `${Q ? Ge : pe.current}px`, "--initial-height": te ? "auto" : `${Ze}px`, ...X, ...s.style }, onPointerDown: (N) => {
    Me || !we || (Ne.current = /* @__PURE__ */ new Date(), Re(pe.current), N.target.setPointerCapture(N.pointerId), N.target.tagName !== "BUTTON" && (oe(!0), ye.current = { x: N.clientX, y: N.clientY }));
  }, onPointerUp: () => {
    var N, L, B, se;
    if (de || !we) return;
    ye.current = null;
    let le = Number(((N = me.current) == null ? void 0 : N.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), ke = (/* @__PURE__ */ new Date()).getTime() - ((L = Ne.current) == null ? void 0 : L.getTime()), Xe = Math.abs(le) / ke;
    if (Math.abs(le) >= Kn || Xe > 0.11) {
      Re(pe.current), (B = s.onDismiss) == null || B.call(s, s), be(), ve(!0);
      return;
    }
    (se = me.current) == null || se.style.setProperty("--swipe-amount", "0px"), oe(!1);
  }, onPointerMove: (N) => {
    var L;
    if (!ye.current || !we) return;
    let B = N.clientY - ye.current.y, se = N.clientX - ye.current.x, le = (Fe === "top" ? Math.min : Math.max)(0, B), ke = N.pointerType === "touch" ? 10 : 2;
    Math.abs(le) > ke ? (L = me.current) == null || L.style.setProperty("--swipe-amount", `${B}px`) : Math.abs(se) > ke && (ye.current = null);
  } }, et && !s.jsx ? p.createElement("button", { "aria-label": he, "data-disabled": Me, "data-close-button": !0, onClick: Me || !we ? () => {
  } : () => {
    var N;
    be(), (N = s.onDismiss) == null || N.call(s, s);
  }, className: _($ == null ? void 0 : $.closeButton, (i = s == null ? void 0 : s.classNames) == null ? void 0 : i.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, s.jsx || p.isValidElement(s.title) ? s.jsx || s.title : p.createElement(p.Fragment, null, ae || s.icon || s.promise ? p.createElement("div", { "data-icon": "", className: _($ == null ? void 0 : $.icon, (c = s == null ? void 0 : s.classNames) == null ? void 0 : c.icon) }, s.promise || s.type === "loading" && !s.icon ? s.icon || nt() : null, s.type !== "loading" ? s.icon || (Z == null ? void 0 : Z[ae]) || En(ae) : null) : null, p.createElement("div", { "data-content": "", className: _($ == null ? void 0 : $.content, (f = s == null ? void 0 : s.classNames) == null ? void 0 : f.content) }, p.createElement("div", { "data-title": "", className: _($ == null ? void 0 : $.title, (l = s == null ? void 0 : s.classNames) == null ? void 0 : l.title) }, s.title), s.description ? p.createElement("div", { "data-description": "", className: _(G, Oe, $ == null ? void 0 : $.description, (u = s == null ? void 0 : s.classNames) == null ? void 0 : u.description) }, s.description) : null), p.isValidElement(s.cancel) ? s.cancel : s.cancel && Je(s.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: s.cancelButtonStyle || U, onClick: (N) => {
    var L, B;
    Je(s.cancel) && we && ((B = (L = s.cancel).onClick) == null || B.call(L, N), be());
  }, className: _($ == null ? void 0 : $.cancelButton, (m = s == null ? void 0 : s.classNames) == null ? void 0 : m.cancelButton) }, s.cancel.label) : null, p.isValidElement(s.action) ? s.action : s.action && Je(s.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: s.actionButtonStyle || K, onClick: (N) => {
    var L, B;
    Je(s.action) && (N.defaultPrevented || ((B = (L = s.action).onClick) == null || B.call(L, N), be()));
  }, className: _($ == null ? void 0 : $.actionButton, (h = s == null ? void 0 : s.classNames) == null ? void 0 : h.actionButton) }, s.action.label) : null));
};
function kt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Gn = (e) => {
  let { invert: n, position: r = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: i, closeButton: c, className: f, offset: l, theme: u = "light", richColors: m, duration: h, style: y, visibleToasts: s = Wn, toastOptions: v, dir: S = kt(), gap: w = Un, loadingIcon: C, icons: b, containerAriaLabel: x = "Notifications", pauseWhenPageIsHidden: V, cn: z = Jn } = e, [R, A] = p.useState([]), M = p.useMemo(() => Array.from(new Set([r].concat(R.filter((T) => T.position).map((T) => T.position)))), [R, r]), [X, U] = p.useState([]), [K, O] = p.useState(!1), [G, j] = p.useState(!1), [J, F] = p.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), Y = p.useRef(null), te = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = p.useRef(null), Z = p.useRef(!1), he = p.useCallback((T) => {
    var _;
    (_ = R.find((E) => E.id === T.id)) != null && _.delete || fe.dismiss(T.id), A((E) => E.filter(({ id: ne }) => ne !== T.id));
  }, [R]);
  return p.useEffect(() => fe.subscribe((T) => {
    if (T.dismiss) {
      A((_) => _.map((E) => E.id === T.id ? { ...E, delete: !0 } : E));
      return;
    }
    setTimeout(() => {
      rn.flushSync(() => {
        A((_) => {
          let E = _.findIndex((ne) => ne.id === T.id);
          return E !== -1 ? [..._.slice(0, E), { ..._[E], ...T }, ..._.slice(E + 1)] : [T, ..._];
        });
      });
    });
  }), []), p.useEffect(() => {
    if (u !== "system") {
      F(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: T }) => {
      F(T ? "dark" : "light");
    });
  }, [u]), p.useEffect(() => {
    R.length <= 1 && O(!1);
  }, [R]), p.useEffect(() => {
    let T = (_) => {
      var E, ne;
      o.every((Q) => _[Q] || _.code === Q) && (O(!0), (E = Y.current) == null || E.focus()), _.code === "Escape" && (document.activeElement === Y.current || (ne = Y.current) != null && ne.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [o]), p.useEffect(() => {
    if (Y.current) return () => {
      $.current && ($.current.focus({ preventScroll: !0 }), $.current = null, Z.current = !1);
    };
  }, [Y.current]), R.length ? p.createElement("section", { "aria-label": `${x} ${te}`, tabIndex: -1 }, M.map((T, _) => {
    var E;
    let [ne, Q] = T.split("-");
    return p.createElement("ol", { key: T, dir: S === "auto" ? kt() : S, tabIndex: -1, ref: Y, className: f, "data-sonner-toaster": !0, "data-theme": J, "data-y-position": ne, "data-x-position": Q, style: { "--front-toast-height": `${((E = X[0]) == null ? void 0 : E.height) || 0}px`, "--offset": typeof l == "number" ? `${l}px` : l || Vn, "--width": `${Hn}px`, "--gap": `${w}px`, ...y }, onBlur: (H) => {
      Z.current && !H.currentTarget.contains(H.relatedTarget) && (Z.current = !1, $.current && ($.current.focus({ preventScroll: !0 }), $.current = null));
    }, onFocus: (H) => {
      H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || Z.current || (Z.current = !0, $.current = H.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      G || O(!1);
    }, onPointerDown: (H) => {
      H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || j(!0);
    }, onPointerUp: () => j(!1) }, R.filter((H) => !H.position && _ === 0 || H.position === T).map((H, re) => {
      var oe, de;
      return p.createElement(qn, { key: H.id, icons: b, index: re, toast: H, defaultRichColors: m, duration: (oe = v == null ? void 0 : v.duration) != null ? oe : h, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: n, visibleToasts: s, closeButton: (de = v == null ? void 0 : v.closeButton) != null ? de : c, interacting: G, position: T, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: he, toasts: R.filter((ve) => ve.position == H.position), heights: X.filter((ve) => ve.position == H.position), setHeights: U, expandByDefault: i, gap: w, loadingIcon: C, expanded: K, pauseWhenPageIsHidden: V, cn: z });
    }));
  })) : null;
};
function Fr({ children: e }) {
  function n(r) {
    Bn.custom((o) => /* @__PURE__ */ a.jsx(_n, { ...r }));
  }
  return /* @__PURE__ */ a.jsxs(zt.Provider, { value: { showToast: n }, children: [
    /* @__PURE__ */ a.jsx(Gn, {}),
    e
  ] });
}
export {
  ar as Badge,
  wr as BreadcrumbContainer,
  kr as BreadcrumbLink,
  fr as Button,
  mr as Checkbox,
  sr as Divider,
  Nr as DrawerContainer,
  _r as DrawerHeader,
  Or as DrawerProvider,
  hr as FormController,
  pr as FormError,
  gr as FormLabel,
  vr as IconButton,
  br as Input,
  jr as ModalContainer,
  Er as ModalFooter,
  Sr as ModalHeader,
  zr as ModalProvider,
  Cr as Pagination,
  Rr as Popover,
  yr as Select,
  or as Skeleton,
  ir as TableBody,
  lr as TableCaption,
  cr as TableContainer,
  ur as TableFooter,
  dr as TableHeader,
  xr as Textarea,
  _n as Toast,
  Fr as ToastProvider,
  $r as Tooltip,
  Pr as useAutomation,
  Tr as useDrawer,
  Ir as useModal,
  Nn as useScopedParams,
  jn as useToast
};
