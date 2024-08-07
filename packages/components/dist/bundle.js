import p, { createContext as Ie, useRef as Ee, useId as Kt, useContext as je, useState as fe, forwardRef as Xt, useEffect as pt } from "react";
import { Loader2 as Se, Check as Nt, ChevronDown as Jt, ChevronRight as at, ChevronLeft as qt, Ellipsis as gt, X as _t, Info as vt, AlertCircle as Gt, XCircle as Zt, CheckCircle2 as Qt } from "lucide-react";
import { useActionData as Et, useLocation as jt, Link as er, useNavigate as tr } from "@remix-run/react";
import { InputMask as rr } from "@react-input/mask";
import { AnimatePresence as St, motion as Je } from "framer-motion";
import nr from "react-dom";
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
function ar() {
  if (bt) return Me;
  bt = 1;
  var e = p, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(i, c, m) {
    var h, b = {}, s = null, v = null;
    m !== void 0 && (s = "" + m), c.key !== void 0 && (s = "" + c.key), c.ref !== void 0 && (v = c.ref);
    for (h in c) o.call(c, h) && !u.hasOwnProperty(h) && (b[h] = c[h]);
    if (i && i.defaultProps) for (h in c = i.defaultProps, c) b[h] === void 0 && (b[h] = c[h]);
    return { $$typeof: r, type: i, key: s, ref: v, props: b, _owner: l.current };
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
var yt;
function sr() {
  return yt || (yt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), s = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), k = Symbol.iterator, w = "@@iterator";
    function R(t) {
      if (t === null || typeof t != "object")
        return null;
      var d = k && t[k] || t[w];
      return typeof d == "function" ? d : null;
    }
    var y = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(t) {
      {
        for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), C = 1; C < d; C++)
          g[C - 1] = arguments[C];
        Y("error", t, g);
      }
    }
    function Y(t, d, g) {
      {
        var C = y.ReactDebugCurrentFrame, D = C.getStackAddendum();
        D !== "" && (d += "%s", g = g.concat([D]));
        var V = g.map(function(O) {
          return String(O);
        });
        V.unshift("Warning: " + d), Function.prototype.apply.call(console[t], console, V);
      }
    }
    var I = !1, $ = !1, A = !1, U = !1, L = !1, q;
    q = Symbol.for("react.module.reference");
    function G(t) {
      return !!(typeof t == "string" || typeof t == "function" || t === o || t === u || L || t === l || t === m || t === h || U || t === v || I || $ || A || typeof t == "object" && t !== null && (t.$$typeof === s || t.$$typeof === b || t.$$typeof === f || t.$$typeof === i || t.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      t.$$typeof === q || t.getModuleId !== void 0));
    }
    function z(t, d, g) {
      var C = t.displayName;
      if (C)
        return C;
      var D = d.displayName || d.name || "";
      return D !== "" ? g + "(" + D + ")" : g;
    }
    function Q(t) {
      return t.displayName || "Context";
    }
    function _(t) {
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
        case l:
          return "StrictMode";
        case m:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case i:
            var d = t;
            return Q(d) + ".Consumer";
          case f:
            var g = t;
            return Q(g._context) + ".Provider";
          case c:
            return z(t, t.render, "ForwardRef");
          case b:
            var C = t.displayName || null;
            return C !== null ? C : _(t.type) || "Memo";
          case s: {
            var D = t, V = D._payload, O = D._init;
            try {
              return _(O(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var X = Object.assign, F = 0, W, ee, S, te, he, T, E;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function K() {
      {
        if (F === 0) {
          W = console.log, ee = console.info, S = console.warn, te = console.error, he = console.group, T = console.groupCollapsed, E = console.groupEnd;
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
        F++;
      }
    }
    function ne() {
      {
        if (F--, F === 0) {
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
              value: he
            }),
            groupCollapsed: X({}, t, {
              value: T
            }),
            groupEnd: X({}, t, {
              value: E
            })
          });
        }
        F < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var H = y.ReactCurrentDispatcher, ve;
    function J(t, d, g) {
      {
        if (ve === void 0)
          try {
            throw Error();
          } catch (D) {
            var C = D.stack.trim().match(/\n( *(at )?)/);
            ve = C && C[1] || "";
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
    function Re(t, d) {
      if (!t || oe)
        return "";
      {
        var g = le.get(t);
        if (g !== void 0)
          return g;
      }
      var C;
      oe = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = H.current, H.current = null, K();
      try {
        if (d) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (ue) {
              C = ue;
            }
            Reflect.construct(t, [], O);
          } else {
            try {
              O.call();
            } catch (ue) {
              C = ue;
            }
            t.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ue) {
            C = ue;
          }
          t();
        }
      } catch (ue) {
        if (ue && C && typeof ue.stack == "string") {
          for (var P = ue.stack.split(`
`), ie = C.stack.split(`
`), Z = P.length - 1, re = ie.length - 1; Z >= 1 && re >= 0 && P[Z] !== ie[re]; )
            re--;
          for (; Z >= 1 && re >= 0; Z--, re--)
            if (P[Z] !== ie[re]) {
              if (Z !== 1 || re !== 1)
                do
                  if (Z--, re--, re < 0 || P[Z] !== ie[re]) {
                    var ge = `
` + P[Z].replace(" at new ", " at ");
                    return t.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", t.displayName)), typeof t == "function" && le.set(t, ge), ge;
                  }
                while (Z >= 1 && re >= 0);
              break;
            }
        }
      } finally {
        oe = !1, H.current = V, ne(), Error.prepareStackTrace = D;
      }
      var Te = t ? t.displayName || t.name : "", _e = Te ? J(Te) : "";
      return typeof t == "function" && le.set(t, _e), _e;
    }
    function Ze(t, d, g) {
      return Re(t, !1);
    }
    function Ae(t) {
      var d = t.prototype;
      return !!(d && d.isReactComponent);
    }
    function Ne(t, d, g) {
      if (t == null)
        return "";
      if (typeof t == "function")
        return Re(t, Ae(t));
      if (typeof t == "string")
        return J(t);
      switch (t) {
        case m:
          return J("Suspense");
        case h:
          return J("SuspenseList");
      }
      if (typeof t == "object")
        switch (t.$$typeof) {
          case c:
            return Ze(t.render);
          case b:
            return Ne(t.type, d, g);
          case s: {
            var C = t, D = C._payload, V = C._init;
            try {
              return Ne(V(D), d, g);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, We = {}, Ve = y.ReactDebugCurrentFrame;
    function ae(t) {
      if (t) {
        var d = t._owner, g = Ne(t.type, t._source, d ? d.type : null);
        Ve.setExtraStackFrame(g);
      } else
        Ve.setExtraStackFrame(null);
    }
    function we(t, d, g, C, D) {
      {
        var V = Function.call.bind(me);
        for (var O in t)
          if (V(t, O)) {
            var P = void 0;
            try {
              if (typeof t[O] != "function") {
                var ie = Error((C || "React class") + ": " + g + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof t[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              P = t[O](d, O, C, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Z) {
              P = Z;
            }
            P && !(P instanceof Error) && (ae(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", C || "React class", g, O, typeof P), ae(null)), P instanceof Error && !(P.message in We) && (We[P.message] = !0, ae(D), x("Failed %s type: %s", g, P.message), ae(null));
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
    var pe = y.ReactCurrentOwner, Ye = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Fe, De;
    De = {};
    function He(t) {
      if (me.call(t, "ref")) {
        var d = Object.getOwnPropertyDescriptor(t, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.ref !== void 0;
    }
    function Ue(t) {
      if (me.call(t, "key")) {
        var d = Object.getOwnPropertyDescriptor(t, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return t.key !== void 0;
    }
    function tt(t, d) {
      if (typeof t.ref == "string" && pe.current && d && pe.current.stateNode !== d) {
        var g = _(pe.current.type);
        De[g] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(pe.current.type), t.ref), De[g] = !0);
      }
    }
    function Le(t, d) {
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
    var rt = function(t, d, g, C, D, V, O) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: t,
        key: d,
        ref: g,
        props: O,
        // Record the component responsible for creating this element.
        _owner: V
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
        value: C
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function N(t, d, g, C, D) {
      {
        var V, O = {}, P = null, ie = null;
        g !== void 0 && (Pe(g), P = "" + g), Ue(d) && (Pe(d.key), P = "" + d.key), He(d) && (ie = d.ref, tt(d, D));
        for (V in d)
          me.call(d, V) && !Ye.hasOwnProperty(V) && (O[V] = d[V]);
        if (t && t.defaultProps) {
          var Z = t.defaultProps;
          for (V in Z)
            O[V] === void 0 && (O[V] = Z[V]);
        }
        if (P || ie) {
          var re = typeof t == "function" ? t.displayName || t.name || "Unknown" : t;
          P && Le(O, re), ie && be(O, re);
        }
        return rt(t, P, ie, D, C, pe.current, O);
      }
    }
    var M = y.ReactCurrentOwner, B = y.ReactDebugCurrentFrame;
    function se(t) {
      if (t) {
        var d = t._owner, g = Ne(t.type, t._source, d ? d.type : null);
        B.setExtraStackFrame(g);
      } else
        B.setExtraStackFrame(null);
    }
    var ce;
    ce = !1;
    function ke(t) {
      return typeof t == "object" && t !== null && t.$$typeof === r;
    }
    function Ke() {
      {
        if (M.current) {
          var t = _(M.current.type);
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
        var d = Ke();
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
        var C = "";
        t && t._owner && t._owner !== M.current && (C = " It was passed a child from " + _(t._owner.type) + "."), se(t), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, C), se(null);
      }
    }
    function ft(t, d) {
      {
        if (typeof t != "object")
          return;
        if (Oe(t))
          for (var g = 0; g < t.length; g++) {
            var C = t[g];
            ke(C) && dt(C, d);
          }
        else if (ke(t))
          t._store && (t._store.validated = !0);
        else if (t) {
          var D = R(t);
          if (typeof D == "function" && D !== t.entries)
            for (var V = D.call(t), O; !(O = V.next()).done; )
              ke(O.value) && dt(O.value, d);
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
        else if (typeof d == "object" && (d.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === b))
          g = d.propTypes;
        else
          return;
        if (g) {
          var C = _(d);
          we(g, t.props, "prop", C, t);
        } else if (d.PropTypes !== void 0 && !ce) {
          ce = !0;
          var D = _(d);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Bt(t) {
      {
        for (var d = Object.keys(t.props), g = 0; g < d.length; g++) {
          var C = d[g];
          if (C !== "children" && C !== "key") {
            se(t), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", C), se(null);
            break;
          }
        }
        t.ref !== null && (se(t), x("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ht = {};
    function mt(t, d, g, C, D, V) {
      {
        var O = G(t);
        if (!O) {
          var P = "";
          (t === void 0 || typeof t == "object" && t !== null && Object.keys(t).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = Dt(D);
          ie ? P += ie : P += Ke();
          var Z;
          t === null ? Z = "null" : Oe(t) ? Z = "array" : t !== void 0 && t.$$typeof === r ? (Z = "<" + (_(t.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : Z = typeof t, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Z, P);
        }
        var re = N(t, d, g, D, V);
        if (re == null)
          return re;
        if (O) {
          var ge = d.children;
          if (ge !== void 0)
            if (C)
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
          var _e = _(t), ue = Object.keys(d).filter(function(Ut) {
            return Ut !== "key";
          }), nt = ue.length > 0 ? "{key: someKey, " + ue.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ht[_e + nt]) {
            var Ht = ue.length > 0 ? "{" + ue.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, _e, Ht, _e), ht[_e + nt] = !0;
          }
        }
        return t === o ? Bt(re) : Mt(re), re;
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
process.env.NODE_ENV === "production" ? st.exports = ar() : st.exports = sr();
var a = st.exports;
function qe(e, r) {
  return r ? /* @__PURE__ */ a.jsx(r, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function rn(e) {
  const {
    variant: r = "ghost",
    scheme: n = "primary",
    size: o = "md",
    leftIcon: l,
    rightIcon: u,
    className: f = "",
    children: i,
    ...c
  } = e, h = { md: 12, lg: 14 }[o], b = `arkyn_badge ${r} ${n} ${o} ${f}`;
  return /* @__PURE__ */ a.jsxs("div", { className: b.trim(), ...c, children: [
    qe(h, l),
    i,
    qe(h, l)
  ] });
}
function nn(e) {
  const {
    className: r,
    orientation: n = "horizontal",
    ...o
  } = e, l = `arkyn_divider ${n} ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: l, ...o });
}
function an({ className: e, ...r }) {
  const n = "arkyn_skeleton " + e;
  return /* @__PURE__ */ a.jsx("div", { className: n.trim(), ...r });
}
function sn(e) {
  const { className: r, ...n } = e, o = `arkyn_table_body ${r}`;
  return /* @__PURE__ */ a.jsx("tbody", { className: o.trim(), ...n });
}
function on(e) {
  const { className: r, children: n, ...o } = e, l = `arkyn_table_caption ${r}`;
  return /* @__PURE__ */ a.jsx("caption", { className: l.trim(), ...o, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_caption-content", children: n }) });
}
function ln(e) {
  const { children: r, className: n, ...o } = e, l = `arkyn_table_container ${n}`;
  return /* @__PURE__ */ a.jsx("div", { className: l.trim(), ...o, children: /* @__PURE__ */ a.jsx("table", { children: r }) });
}
function cn(e) {
  const { className: r, children: n, ...o } = e, l = `arkyn_table_footer ${r}`;
  return /* @__PURE__ */ a.jsxs("tfoot", { className: l.trim(), ...o, children: [
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("th", { colSpan: 100, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_footer-content", children: n }) }) })
  ] });
}
function un(e) {
  const { className: r, children: n, ...o } = e, l = `arkyn_table_header ${r}`;
  return /* @__PURE__ */ a.jsxs("thead", { className: l.trim(), ...o, children: [
    /* @__PURE__ */ a.jsx("tr", { children: n }),
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" })
  ] });
}
function or(e, r, n) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: n, children: e });
  const o = e;
  return /* @__PURE__ */ a.jsx("p", { className: n, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function ir(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    leftIcon: c,
    disabled: m,
    readOnly: h,
    onFocus: b,
    onBlur: s,
    title: v,
    style: k,
    isSearchable: w = !1,
    closeOnSelect: R = !0,
    ...y
  } = e, A = `arkyn_select ${i ? "hasPrefix" : ""} ${f} ${l} ${m || h || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, L = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: A,
    prefix: or(i, L, "prefix"),
    LeftIcon: c,
    disabled: m,
    readOnly: h,
    onFocus: b,
    onBlur: s,
    title: v,
    closeOnSelect: R,
    style: k,
    isSearchable: w,
    iconSize: L,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...y
  };
}
const Rt = Ie({});
function dn(e) {
  var h, b;
  const r = Et(), { children: n, className: o, ...l } = e, u = Ee(null), f = ((h = u.current) == null ? void 0 : h.name) || "", i = ((b = r == null ? void 0 : r.fieldErrors) == null ? void 0 : b[f]) || null, c = Kt(), m = `arkyn_form_controller ${o}`;
  return /* @__PURE__ */ a.jsx(Rt.Provider, { value: { error: i, id: c, inputRef: u }, children: /* @__PURE__ */ a.jsx("section", { className: m.trim(), ...l, children: n }) });
}
function xe() {
  return je(Rt);
}
function fn(e) {
  var ve;
  const [r, n] = fe(!1), { inputRef: o, id: l, error: u } = xe(), f = Ee(null), i = o || f, c = e.isError || !!u, {
    disabled: m,
    title: h,
    style: b,
    className: s,
    prefix: v,
    iconSize: k,
    isLoading: w,
    LeftIcon: R,
    value: y = null,
    defaultValue: x = "",
    readOnly: Y,
    onFocus: I,
    onBlur: $,
    Spinner: A,
    name: U,
    isSearchable: L,
    placeholder: q,
    onSelect: G,
    options: z,
    optionMaxHeight: Q,
    closeOnSelect: _,
    ...X
  } = ir({ ...e, id: l, isError: c }, r), [F, W] = fe(x), [ee, S] = fe("");
  function te() {
    m || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function he(J) {
    n(!0), I && I(J);
  }
  function T() {
    n(!1), $ && i.current && i.current.blur();
  }
  function E(J) {
    const { label: oe, value: le } = J;
    W(F !== le ? le : ""), G && G({ label: oe, value: le }), _ && (i.current.blur(), n(!1), console.log("fecha"));
  }
  const j = typeof y == "string" ? y : F, K = ((ve = z.find((J) => J.value === j)) == null ? void 0 : ve.label) || "", ne = () => {
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
  }, H = z.filter((J) => L ? J.label.toLowerCase().includes(ee.toLowerCase()) : !0);
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "section",
      {
        title: h,
        style: b,
        onClick: te,
        className: `${s} placeholder_dark_${ne()}`,
        children: [
          v,
          R && /* @__PURE__ */ a.jsx(R, { size: k, strokeWidth: 2.5 }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              disabled: m || w,
              readOnly: !L,
              value: ee || "",
              placeholder: K || q,
              onFocus: he,
              onBlur: () => S(""),
              ...X,
              onChange: (J) => S(J.target.value)
            }
          ),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "hidden",
              ref: i,
              name: U,
              value: j || "",
              readOnly: !0
            }
          ),
          r && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: Q },
              children: [
                H.map(({ label: J, value: oe }) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    onClick: () => E({ label: J, value: oe }),
                    className: j === oe ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      J,
                      " ",
                      /* @__PURE__ */ a.jsx(Nt, {})
                    ]
                  },
                  oe
                )),
                H.length <= 0 && /* @__PURE__ */ a.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !w && /* @__PURE__ */ a.jsx(
            Jt,
            {
              className: "arkyn_select_arrow",
              size: k,
              strokeWidth: 2.5
            }
          ),
          w && A
        ]
      }
    ),
    r && /* @__PURE__ */ a.jsx("aside", { className: "arkyn_select_overlay", onClick: T })
  ] });
}
function hn(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    loadingText: l,
    size: u = "md",
    leftIcon: f,
    rightIcon: i,
    disabled: c,
    className: m = "",
    children: h,
    ...b
  } = e, v = { xs: 12, sm: 16, md: 20, lg: 24 }[u], k = `arkyn_button loading_text_${!!l} ${o} ${n} ${u} loading_${r} ${m}`;
  return /* @__PURE__ */ a.jsxs("button", { className: k, disabled: c || r, ...b, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ a.jsx(Se, { size: v, strokeWidth: 2.5 }),
      l && l
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-content", children: [
      qe(v, f),
      h,
      qe(v, i)
    ] })
  ] });
}
function mn(e) {
  const {
    name: r,
    className: n = "",
    size: o = "md",
    isError: l,
    defaultChecked: u = !1,
    checked: f = null,
    onCheck: i,
    value: c,
    ...m
  } = e, { id: h, inputRef: b, error: s } = xe(), v = l || !!s, [k, w] = fe(u || !1), R = typeof f == "boolean" ? f : k, y = `arkyn_checkbox ${o} ${v ? "error" : ""} ${R ? "checked" : ""} ${n}`;
  function x() {
    const Y = k;
    w(!Y), i && i(Y ? "" : c || "checked");
  }
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      id: h,
      className: y,
      onClick: x,
      ...m,
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "hidden",
            name: r,
            ref: b,
            value: R ? c || "checked" : ""
          }
        ),
        /* @__PURE__ */ a.jsx(Nt, {})
      ]
    }
  );
}
function pn(e) {
  const { children: r, className: n, ...o } = e, l = `arkyn_form_error ${n}`, { error: u } = xe();
  return r ? /* @__PURE__ */ a.jsx("strong", { className: l.trim(), ...o, children: r }) : u ? /* @__PURE__ */ a.jsx("strong", { className: l.trim(), ...o, children: u }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function gn(e) {
  const {
    showAsterisk: r = !1,
    className: n = "",
    ...o
  } = e, { id: l } = xe(), f = `arkyn_form_label ${r ? "show-asterisk" : ""} ${n}`;
  return /* @__PURE__ */ a.jsx("label", { ...o, className: f.trim(), htmlFor: l });
}
function vn(e) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    size: l = "md",
    icon: u,
    disabled: f,
    className: i = "",
    ...c
  } = e, m = { xs: 12, sm: 16, md: 20, lg: 24 }, h = `arkyn_icon_button ${o} ${n} ${l} loading_${r} ${i}`;
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      disabled: f || r,
      className: h.trim(),
      ...c,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ a.jsx(Se, { size: m[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ a.jsx(u, { size: m[l], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ce(e, r, n) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: n, children: e });
  const o = e;
  return /* @__PURE__ */ a.jsx("p", { className: n, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function it(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function $t(e, r) {
  let n = "", o = 0;
  return Array.from(e).forEach((l, u) => {
    r[u + o].match(/[0-9]/) || (n += r[u + o], o++), n += l;
  }), n;
}
function Pt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const lt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Tt = it(lt.CNPJ).length;
function lr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: c,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    defaultValue: s,
    readOnly: v,
    onFocus: k,
    onBlur: w,
    title: R,
    style: y,
    onChange: x,
    ...Y
  } = e;
  function I(X) {
    let F = it(X);
    const W = Pt(F);
    if (!(F.length > Tt))
      return F = $t(F, lt[W]), F;
  }
  const $ = h ? "right" : "left", z = `arkyn_input ${i ? "hasPrefix" : ""} ${c ? "hasSufix" : ""} ${f} ${l} ${b || v || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: z,
    prefix: Ce(i, _, "prefix"),
    sufix: Ce(c, _, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    defaultValue: I(s || ""),
    disabled: b,
    readOnly: v,
    onFocus: k,
    onBlur: w,
    title: R,
    style: y,
    onChange: x,
    loadingPosition: $,
    iconSize: _,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...Y
  };
}
function cr(e) {
  const [r, n] = fe(!1), o = Ee(null), { inputRef: l, id: u, error: f } = xe(), i = l || o, c = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: s,
    prefix: v,
    sufix: k,
    iconSize: w,
    loadingPosition: R,
    isLoading: y,
    LeftIcon: x,
    readOnly: Y,
    onFocus: I,
    onBlur: $,
    RightIcon: A,
    Spinner: U,
    onChange: L,
    value: q,
    defaultValue: G,
    ...z
  } = lr({ ...e, id: u, isError: c }, r), [Q, _] = fe(G), X = x && !y, F = A && !y, W = R === "left" && y, ee = R === "right" && y;
  function S() {
    m || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function te(E) {
    let j = it(E.target.value);
    const K = Pt(j);
    j.length > Tt || (j = $t(j, lt[K]), E.target.value = j, _(j), L && L(E));
  }
  function he(E) {
    n(!0), I && I(E);
  }
  function T(E) {
    n(!1), $ && $(E);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: S,
      className: s,
      children: [
        v,
        W && U,
        X && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || y,
            readOnly: Y,
            ref: i,
            value: q || Q,
            onFocus: he,
            onChange: te,
            onBlur: T,
            ...z
          }
        ),
        F && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        ee && U,
        k
      ]
    }
  );
}
function ur(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: c,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    readOnly: s,
    onFocus: v,
    onBlur: k,
    title: w,
    style: R,
    showCents: y = !1,
    max: x = 1e9,
    onChange: Y,
    ...I
  } = e, $ = h ? "right" : "left", z = `arkyn_input ${i ? "hasPrefix" : ""} ${c ? "hasSufix" : ""} ${f} ${l} ${b || s || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: z,
    prefix: Ce(i, _, "prefix"),
    sufix: Ce(c, _, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: b,
    readOnly: s,
    onFocus: v,
    onBlur: k,
    title: w,
    style: R,
    max: x,
    onChange: Y,
    showCents: y,
    loadingPosition: $,
    iconSize: _,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...I
  };
}
const dr = /^[1-9]{1}$/, fr = /^[0-9]{1}$/, xt = 8;
function hr(e, r) {
  if (e === 0) return "";
  const n = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return r ? n : n.replace("R$", "").trim();
}
function mr(e) {
  const { currencyValue: r, event: n, max: o, setCurrencyValue: l } = e, { key: u, keyCode: f } = n;
  if (r === 0 && !dr.test(u) || r !== 0 && !fr.test(u) && f !== xt)
    return;
  const i = r.toString();
  let c;
  if (f !== xt) {
    const m = r === 0 ? u : `${i}${u}`;
    c = Number.parseInt(m, 10);
  } else {
    const m = i.slice(0, -1);
    c = m === "" ? 0 : Number.parseInt(m, 10);
  }
  c > Number(o) || l(c);
}
function pr(e) {
  const [r, n] = fe(!1), o = Ee(null), { inputRef: l, id: u, error: f } = xe(), i = l || o, c = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: s,
    prefix: v,
    sufix: k,
    iconSize: w,
    loadingPosition: R,
    isLoading: y,
    LeftIcon: x,
    readOnly: Y,
    onFocus: I,
    onBlur: $,
    RightIcon: A,
    Spinner: U,
    value: L,
    max: q,
    onKeyDown: G,
    onChange: z,
    showCents: Q,
    defaultValue: _,
    ...X
  } = ur({ ...e, id: u, isError: c }, r), [F, W] = fe(_ * 100 || 0), ee = x && !y, S = A && !y, te = R === "left" && y, he = R === "right" && y;
  function T() {
    m || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function E(ne) {
    mr({ currencyValue: F, event: ne, max: q, setCurrencyValue: W }), z && z(F / 100), G && G(ne);
  }
  function j(ne) {
    n(!0), I && I(ne);
  }
  function K(ne) {
    n(!1), $ && $(ne);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: T,
      className: s,
      children: [
        v,
        te && U,
        ee && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: hr(L || F, Q),
            onKeyDown: E,
            disabled: m || y,
            readOnly: Y,
            ref: i,
            onFocus: j,
            onBlur: K,
            onChange: () => {
            },
            ...X
          }
        ),
        he && U,
        S && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        k
      ]
    }
  );
}
function gr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: c,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    readOnly: s,
    onFocus: v,
    onBlur: k,
    title: w,
    style: R,
    onChange: y,
    showMask: x = !1,
    type: Y,
    ...I
  } = e, $ = h ? "right" : "left", z = `arkyn_input ${i ? "hasPrefix" : ""} ${c ? "hasSufix" : ""} ${f} ${l} ${b || s || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: z,
    prefix: Ce(i, _, "prefix"),
    sufix: Ce(c, _, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: b,
    readOnly: s,
    onFocus: v,
    onBlur: k,
    title: w,
    style: R,
    onChange: y,
    loadingPosition: $,
    iconSize: _,
    showMask: x,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...I
  };
}
const vr = Xt((e, r) => /* @__PURE__ */ a.jsx("input", { ref: r, ...e }));
function br(e) {
  const [r, n] = fe(!1), o = Ee(null), { inputRef: l, id: u, error: f } = xe(), i = l || o, c = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: s,
    prefix: v,
    sufix: k,
    iconSize: w,
    loadingPosition: R,
    isLoading: y,
    LeftIcon: x,
    readOnly: Y,
    onFocus: I,
    onBlur: $,
    RightIcon: A,
    Spinner: U,
    ...L
  } = gr({ ...e, id: u, isError: c }, r), q = x && !y, G = A && !y, z = R === "left" && y, Q = R === "right" && y;
  function _() {
    m || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function X(W) {
    n(!0), I && I(W);
  }
  function F(W) {
    n(!1), $ && $(W);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: _,
      className: s,
      children: [
        v,
        z && U,
        q && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          rr,
          {
            component: vr,
            ref: i,
            onFocus: X,
            onBlur: F,
            ...L
          }
        ),
        G && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        Q && U,
        k
      ]
    }
  );
}
function yr(e, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: i,
    sufix: c,
    leftIcon: m,
    rightIcon: h,
    disabled: b,
    readOnly: s,
    onFocus: v,
    onBlur: k,
    title: w,
    style: R,
    onChange: y,
    ...x
  } = e, Y = h ? "right" : "left", q = `arkyn_input ${i ? "hasPrefix" : ""} ${c ? "hasSufix" : ""} ${f} ${l} ${b || s || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${u}`, z = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: q,
    prefix: Ce(i, z, "prefix"),
    sufix: Ce(c, z, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: b,
    readOnly: s,
    onFocus: v,
    onBlur: k,
    title: w,
    style: R,
    onChange: y,
    loadingPosition: Y,
    iconSize: z,
    Spinner: /* @__PURE__ */ a.jsx(Se, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...x
  };
}
function xr(e) {
  const [r, n] = fe(!1), o = Ee(null), { inputRef: l, id: u, error: f } = xe(), i = l || o, c = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: s,
    prefix: v,
    sufix: k,
    iconSize: w,
    loadingPosition: R,
    isLoading: y,
    LeftIcon: x,
    readOnly: Y,
    onFocus: I,
    onBlur: $,
    RightIcon: A,
    type: U,
    Spinner: L,
    ...q
  } = yr({ ...e, id: u, isError: c }, r), G = x && !y, z = A && !y, Q = R === "left" && y, _ = R === "right" && y;
  function X() {
    m || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function F(ee) {
    n(!0), I && I(ee);
  }
  function W(ee) {
    n(!1), $ && $(ee);
  }
  return U === "hidden" ? /* @__PURE__ */ a.jsx("input", { type: "hidden", ref: i, ...q }) : /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: h,
      style: b,
      onClick: X,
      className: s,
      children: [
        v,
        Q && L,
        G && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || y,
            readOnly: Y,
            ref: i,
            onFocus: F,
            onBlur: W,
            type: U,
            ...q
          }
        ),
        z && /* @__PURE__ */ a.jsx(A, { size: w, strokeWidth: 2.5 }),
        _ && L,
        k
      ]
    }
  );
}
function bn(e) {
  return e.type === "currency" ? /* @__PURE__ */ a.jsx(pr, { ...e }) : e.type === "masked" ? /* @__PURE__ */ a.jsx(br, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ a.jsx(cr, { ...e }) : /* @__PURE__ */ a.jsx(xr, { ...e });
}
function wr(e, r) {
  const {
    isError: n,
    size: o = "md",
    className: l = "",
    variant: u = "solid",
    prefix: f,
    disabled: i,
    readOnly: c,
    onFocus: m,
    onBlur: h,
    title: b,
    style: s,
    onChange: v,
    ...k
  } = e;
  return {
    className: `arkyn_textarea ${u} ${o} ${i || c ? "opacity" : ""} ${n ? "errored" : ""} ${r ? "focused" : ""} ${l}`,
    disabled: i,
    readOnly: c,
    onFocus: m,
    onBlur: h,
    title: b,
    style: s,
    onChange: v,
    ...k
  };
}
function yn(e) {
  const [r, n] = fe(!1), o = Ee(null), { inputRef: l, id: u, error: f } = xe(), i = l || o, c = e.isError || !!f, {
    disabled: m,
    title: h,
    style: b,
    className: s,
    readOnly: v,
    onFocus: k,
    onBlur: w,
    ...R
  } = wr({ ...e, id: u, isError: c }, r);
  function y() {
    m || !(i != null && i.current) || (n(!0), i.current.focus());
  }
  function x(I) {
    n(!0), k && k(I);
  }
  function Y(I) {
    n(!1), w && w(I);
  }
  return /* @__PURE__ */ a.jsx(
    "section",
    {
      title: h,
      style: b,
      onClick: y,
      className: s,
      children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          disabled: m,
          readOnly: v,
          ref: i,
          onFocus: x,
          onBlur: Y,
          ...R
        }
      )
    }
  );
}
function xn(e) {
  const { className: r = "", ...n } = e, o = `arkyn_breadcrumb_container ${r}`;
  return /* @__PURE__ */ a.jsx("nav", { className: o, ...n });
}
function wn(e) {
  const { pathname: r } = jt(), {
    className: n = "",
    disabled: o = !1,
    children: l,
    to: u,
    ...f
  } = e, c = `arkyn_breadcrumb_link ${r === u ? "active" : "inactive"} ${n}`;
  return o ? /* @__PURE__ */ a.jsxs("p", { className: c, children: [
    /* @__PURE__ */ a.jsx(at, { size: 14, strokeWidth: 2.5 }),
    l
  ] }) : /* @__PURE__ */ a.jsxs(er, { to: u, className: c, ...f, children: [
    /* @__PURE__ */ a.jsx(at, { size: 14, strokeWidth: 2.5 }),
    l
  ] });
}
function wt(e, r) {
  return [...new Array(r - e)].map((n, o) => e + o + 1).filter((n) => n > 0);
}
function kr(e = "") {
  const r = jt(), n = new URLSearchParams(r.search), o = e ? `${e}:` : "", l = (u) => {
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
function kn(e) {
  const { scope: r, totalCountRegisters: n, siblingsCount: o = 2, ...l } = e, u = tr(), { getParam: f, getScopedSearch: i } = kr(r), c = Number(f("page")) || 1, m = Number(f("per_page")) || 20, h = Math.ceil(n / m), b = c > 1 ? wt(c - 1 - o, c - 1) : [], s = c < h ? wt(
    c,
    Math.min(c + o, h)
  ) : [];
  function v(k) {
    u(i({ page: k }));
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "arkyn_pagination", ...l, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: c <= 1,
        onClick: () => v(c - 1),
        children: /* @__PURE__ */ a.jsx(qt, {})
      }
    ),
    c > 1 + o && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => v(1),
          children: "1"
        }
      ),
      c > 2 + o && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(gt, {}) })
    ] }),
    b.length > 0 && b.map((k, w) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => v(k),
        className: "arkyn_pagination-page_button",
        children: k
      },
      w
    )),
    /* @__PURE__ */ a.jsx("button", { className: "arkyn_pagination-current", disabled: !0, children: c }),
    s.length > 0 && s.map((k, w) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => v(k),
        className: "arkyn_pagination-page_button",
        children: k
      },
      "next-page-" + w
    )),
    c + o < h && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      c + 1 + o < h && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(gt, {}) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => v(h),
          children: h
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: c >= h,
        onClick: () => v(c + 1),
        children: /* @__PURE__ */ a.jsx(at, {})
      }
    )
  ] });
}
const It = Ie({});
function Cn(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    orientation: o = "left",
    children: l,
    className: u,
    ...f
  } = e, i = o === "left" ? "-100%" : "100%", m = `arkyn_drawer_container ${o} ${r ? "visible" : ""} ${u}`;
  return /* @__PURE__ */ a.jsx(It.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ a.jsx(St, { children: r && /* @__PURE__ */ a.jsxs("aside", { className: m.trim(), ...f, children: [
    /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(
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
function Nn(e) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: o,
    ...l
  } = e, { makeInvisible: u } = je(It), f = `arkyn_drawer_header ${n}`;
  return /* @__PURE__ */ a.jsxs("header", { className: f.trim(), ...l, children: [
    o,
    r && /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: u,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ a.jsx(_t, { size: 24 })
      }
    )
  ] });
}
const Ot = Ie({});
function _n(e) {
  const {
    isVisibled: r,
    makeInvisible: n,
    children: o,
    className: l = "",
    ...u
  } = e, i = `arkyn_modal_container ${r ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ a.jsx(Ot.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ a.jsx(St, { children: r && /* @__PURE__ */ a.jsxs("aside", { className: i.trim(), ...u, children: [
    /* @__PURE__ */ a.jsx(
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
    /* @__PURE__ */ a.jsx(
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
function En(e) {
  const { alignment: r = "right", className: n, ...o } = e, l = `arkyn_modal_footer ${r} ${n}`;
  return /* @__PURE__ */ a.jsx("footer", { className: l.trim(), ...o });
}
function jn(e) {
  const {
    showCloseButton: r = !0,
    className: n,
    children: o,
    ...l
  } = e, { makeInvisible: u } = je(Ot), f = `arkyn_modal_header ${n}`;
  return /* @__PURE__ */ a.jsxs("header", { className: f.trim(), ...l, children: [
    o,
    r && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: u,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ a.jsx(_t, { size: 24 })
      }
    )
  ] });
}
function Cr({ message: e, title: r, type: n, size: o = "lg" }) {
  const l = `arkyn_toast ${n} ${o}`;
  function u() {
    switch (n) {
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
  return /* @__PURE__ */ a.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { className: "bg" }),
      /* @__PURE__ */ a.jsx(u, {})
    ] }),
    /* @__PURE__ */ a.jsxs("p", { children: [
      /* @__PURE__ */ a.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ a.jsx("span", { children: e })
    ] })
  ] });
}
function Sn(e) {
  const {
    text: r,
    size: n = "lg",
    children: o,
    orientation: l = "top",
    className: u,
    ...f
  } = e, i = `arkyn_tooltip ${n} ${l} ${u}`;
  return /* @__PURE__ */ a.jsxs("div", { className: i.trim(), ...f, children: [
    o,
    /* @__PURE__ */ a.jsx("div", { className: "arkyn_tooltip-text", children: r })
  ] });
}
const ct = Ie({}), zt = Ie({});
function Nr() {
  const e = je(zt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function kt(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function Rn() {
  const e = Et(), { closeModal: r } = je(ct), { showToast: n } = Nr();
  pt(() => {
    const o = e == null ? void 0 : e.closeModalKey;
    o && r(o);
  }, [e]), pt(() => {
    const o = e == null ? void 0 : e.toast, l = e == null ? void 0 : e.message;
    kt(o) && n(o), !kt(o) && l && n({
      message: l,
      title: "Atenção!",
      type: "warning"
    });
  }, [e]);
}
const Ft = Ie({});
function $n(e) {
  const r = je(Ft);
  if (Object.entries(r).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: n,
      drawerIsOpen: o,
      openDrawer: l,
      closeDrawer: u
    } = r, f = o(e), i = n(e);
    return { drawerIsOpen: f, drawerData: i, openDrawer: (h) => l(e, h == null ? void 0 : h.data), closeDrawer: () => u(e) };
  } else
    return r;
}
function Pn(e) {
  const r = je(ct);
  if (Object.entries(r).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: n,
      modalIsOpen: o,
      openModal: l,
      closeModal: u
    } = r, f = o(e), i = n(e);
    return { modalIsOpen: f, modalData: i, openModal: (h) => l(e, h == null ? void 0 : h.data), closeModal: () => u(e) };
  } else
    return r;
}
function Tn(e) {
  const { children: r = !1 } = e, [n, o] = fe([]);
  function l(c) {
    return !!n.some((m) => m.key === c);
  }
  function u(c) {
    var m;
    return (m = n.find((h) => h.key === c)) == null ? void 0 : m.data;
  }
  function f(c, m) {
    const h = l(c);
    o(h ? (b) => [...b.filter((v) => v.key !== c), { key: c, data: m }] : [...n, { key: c, data: m }]);
  }
  function i(c) {
    o(n.filter((m) => m.key !== c));
  }
  return /* @__PURE__ */ a.jsx(
    Ft.Provider,
    {
      value: { drawerIsOpen: l, drawerData: u, openDrawer: f, closeDrawer: i },
      children: r
    }
  );
}
function In(e) {
  const { children: r = !1 } = e, [n, o] = fe([]);
  function l(c) {
    return !!n.some((m) => m.key === c);
  }
  function u(c) {
    var m;
    return (m = n.find((h) => h.key === c)) == null ? void 0 : m.data;
  }
  function f(c, m) {
    const h = l(c);
    o(h ? (b) => [...b.filter((v) => v.key !== c), { key: c, data: m }] : [...n, { key: c, data: m }]);
  }
  function i(c) {
    o(n.filter((m) => m.key !== c));
  }
  return /* @__PURE__ */ a.jsx(
    ct.Provider,
    {
      value: { modalIsOpen: l, modalData: u, openModal: f, closeModal: i },
      children: r
    }
  );
}
var _r = (e) => {
  switch (e) {
    case "success":
      return Sr;
    case "info":
      return $r;
    case "warning":
      return Rr;
    case "error":
      return Pr;
    default:
      return null;
  }
}, Er = Array(12).fill(0), jr = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, Er.map((r, n) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), Sr = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Rr = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), $r = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Pr = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Tr = () => {
  let [e, r] = p.useState(document.hidden);
  return p.useEffect(() => {
    let n = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), e;
}, ot = 1, Ir = class {
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
      let { message: n, ...o } = e, l = typeof (e == null ? void 0 : e.id) == "number" || ((r = e.id) == null ? void 0 : r.length) > 0 ? e.id : ot++, u = this.toasts.find((i) => i.id === l), f = e.dismissible === void 0 ? !0 : e.dismissible;
      return u ? this.toasts = this.toasts.map((i) => i.id === l ? (this.publish({ ...i, ...e, id: l, title: n }), { ...i, ...e, id: l, dismissible: f, title: n }) : i) : this.addToast({ title: n, ...o, dismissible: f, id: l }), l;
    }, this.dismiss = (e) => (e || this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }));
    }), this.subscribers.forEach((r) => r({ id: e, dismiss: !0 })), e), this.message = (e, r) => this.create({ ...r, message: e }), this.error = (e, r) => this.create({ ...r, message: e, type: "error" }), this.success = (e, r) => this.create({ ...r, type: "success", message: e }), this.info = (e, r) => this.create({ ...r, type: "info", message: e }), this.warning = (e, r) => this.create({ ...r, type: "warning", message: e }), this.loading = (e, r) => this.create({ ...r, type: "loading", message: e }), this.promise = (e, r) => {
      if (!r) return;
      let n;
      r.loading !== void 0 && (n = this.create({ ...r, promise: e, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      let o = e instanceof Promise ? e : e(), l = n !== void 0;
      return o.then(async (u) => {
        if (zr(u) && !u.ok) {
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
    }, this.custom = (e, r) => {
      let n = (r == null ? void 0 : r.id) || ot++;
      return this.create({ jsx: e(n), id: n, ...r }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, de = new Ir(), Or = (e, r) => {
  let n = (r == null ? void 0 : r.id) || ot++;
  return de.addToast({ title: e, ...r, id: n }), n;
}, zr = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Fr = Or, Dr = () => de.toasts, Lr = Object.assign(Fr, { success: de.success, info: de.info, warning: de.warning, error: de.error, custom: de.custom, message: de.message, promise: de.promise, dismiss: de.dismiss, loading: de.loading }, { getHistory: Dr });
function Mr(e, { insertAt: r } = {}) {
  if (!e || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = e : o.appendChild(document.createTextNode(e));
}
Mr(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Xe(e) {
  return e.label !== void 0;
}
var Br = 3, Ar = "32px", Wr = 4e3, Vr = 356, Yr = 14, Hr = 20, Ur = 200;
function Kr(...e) {
  return e.filter(Boolean).join(" ");
}
var Xr = (e) => {
  var r, n, o, l, u, f, i, c, m, h;
  let { invert: b, toast: s, unstyled: v, interacting: k, setHeights: w, visibleToasts: R, heights: y, index: x, toasts: Y, expanded: I, removeToast: $, defaultRichColors: A, closeButton: U, style: L, cancelButtonStyle: q, actionButtonStyle: G, className: z = "", descriptionClassName: Q = "", duration: _, position: X, gap: F, loadingIcon: W, expandByDefault: ee, classNames: S, icons: te, closeButtonAriaLabel: he = "Close toast", pauseWhenPageIsHidden: T, cn: E } = e, [j, K] = p.useState(!1), [ne, H] = p.useState(!1), [ve, J] = p.useState(!1), [oe, le] = p.useState(!1), [Ge, Re] = p.useState(0), [Ze, Ae] = p.useState(0), Ne = p.useRef(null), me = p.useRef(null), We = x === 0, Ve = x + 1 <= R, ae = s.type, we = s.dismissible !== !1, Qe = s.className || "", Oe = s.descriptionClassName || "", $e = p.useMemo(() => y.findIndex((N) => N.toastId === s.id) || 0, [y, s.id]), et = p.useMemo(() => {
    var N;
    return (N = s.closeButton) != null ? N : U;
  }, [s.closeButton, U]), ze = p.useMemo(() => s.duration || _ || Wr, [s.duration, _]), Pe = p.useRef(0), pe = p.useRef(0), Ye = p.useRef(0), ye = p.useRef(null), [Fe, De] = X.split("-"), He = p.useMemo(() => y.reduce((N, M, B) => B >= $e ? N : N + M.height, 0), [y, $e]), Ue = Tr(), tt = s.invert || b, Le = ae === "loading";
  pe.current = p.useMemo(() => $e * F + He, [$e, He]), p.useEffect(() => {
    K(!0);
  }, []), p.useLayoutEffect(() => {
    if (!j) return;
    let N = me.current, M = N.style.height;
    N.style.height = "auto";
    let B = N.getBoundingClientRect().height;
    N.style.height = M, Ae(B), w((se) => se.find((ce) => ce.toastId === s.id) ? se.map((ce) => ce.toastId === s.id ? { ...ce, height: B } : ce) : [{ toastId: s.id, height: B, position: s.position }, ...se]);
  }, [j, s.title, s.description, w, s.id]);
  let be = p.useCallback(() => {
    H(!0), Re(pe.current), w((N) => N.filter((M) => M.toastId !== s.id)), setTimeout(() => {
      $(s);
    }, Ur);
  }, [s, $, w, pe]);
  p.useEffect(() => {
    if (s.promise && ae === "loading" || s.duration === 1 / 0 || s.type === "loading") return;
    let N, M = ze;
    return I || k || T && Ue ? (() => {
      if (Ye.current < Pe.current) {
        let B = (/* @__PURE__ */ new Date()).getTime() - Pe.current;
        M = M - B;
      }
      Ye.current = (/* @__PURE__ */ new Date()).getTime();
    })() : M !== 1 / 0 && (Pe.current = (/* @__PURE__ */ new Date()).getTime(), N = setTimeout(() => {
      var B;
      (B = s.onAutoClose) == null || B.call(s, s), be();
    }, M)), () => clearTimeout(N);
  }, [I, k, ee, s, ze, be, s.promise, ae, T, Ue]), p.useEffect(() => {
    let N = me.current;
    if (N) {
      let M = N.getBoundingClientRect().height;
      return Ae(M), w((B) => [{ toastId: s.id, height: M, position: s.position }, ...B]), () => w((B) => B.filter((se) => se.toastId !== s.id));
    }
  }, [w, s.id]), p.useEffect(() => {
    s.delete && be();
  }, [be, s.delete]);
  function rt() {
    return te != null && te.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, te.loading) : W ? p.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, W) : p.createElement(jr, { visible: ae === "loading" });
  }
  return p.createElement("li", { "aria-live": s.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: me, className: E(z, Qe, S == null ? void 0 : S.toast, (r = s == null ? void 0 : s.classNames) == null ? void 0 : r.toast, S == null ? void 0 : S.default, S == null ? void 0 : S[ae], (n = s == null ? void 0 : s.classNames) == null ? void 0 : n[ae]), "data-sonner-toast": "", "data-rich-colors": (o = s.richColors) != null ? o : A, "data-styled": !(s.jsx || s.unstyled || v), "data-mounted": j, "data-promise": !!s.promise, "data-removed": ne, "data-visible": Ve, "data-y-position": Fe, "data-x-position": De, "data-index": x, "data-front": We, "data-swiping": ve, "data-dismissible": we, "data-type": ae, "data-invert": tt, "data-swipe-out": oe, "data-expanded": !!(I || ee && j), style: { "--index": x, "--toasts-before": x, "--z-index": Y.length - x, "--offset": `${ne ? Ge : pe.current}px`, "--initial-height": ee ? "auto" : `${Ze}px`, ...L, ...s.style }, onPointerDown: (N) => {
    Le || !we || (Ne.current = /* @__PURE__ */ new Date(), Re(pe.current), N.target.setPointerCapture(N.pointerId), N.target.tagName !== "BUTTON" && (J(!0), ye.current = { x: N.clientX, y: N.clientY }));
  }, onPointerUp: () => {
    var N, M, B, se;
    if (oe || !we) return;
    ye.current = null;
    let ce = Number(((N = me.current) == null ? void 0 : N.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), ke = (/* @__PURE__ */ new Date()).getTime() - ((M = Ne.current) == null ? void 0 : M.getTime()), Ke = Math.abs(ce) / ke;
    if (Math.abs(ce) >= Hr || Ke > 0.11) {
      Re(pe.current), (B = s.onDismiss) == null || B.call(s, s), be(), le(!0);
      return;
    }
    (se = me.current) == null || se.style.setProperty("--swipe-amount", "0px"), J(!1);
  }, onPointerMove: (N) => {
    var M;
    if (!ye.current || !we) return;
    let B = N.clientY - ye.current.y, se = N.clientX - ye.current.x, ce = (Fe === "top" ? Math.min : Math.max)(0, B), ke = N.pointerType === "touch" ? 10 : 2;
    Math.abs(ce) > ke ? (M = me.current) == null || M.style.setProperty("--swipe-amount", `${B}px`) : Math.abs(se) > ke && (ye.current = null);
  } }, et && !s.jsx ? p.createElement("button", { "aria-label": he, "data-disabled": Le, "data-close-button": !0, onClick: Le || !we ? () => {
  } : () => {
    var N;
    be(), (N = s.onDismiss) == null || N.call(s, s);
  }, className: E(S == null ? void 0 : S.closeButton, (l = s == null ? void 0 : s.classNames) == null ? void 0 : l.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, s.jsx || p.isValidElement(s.title) ? s.jsx || s.title : p.createElement(p.Fragment, null, ae || s.icon || s.promise ? p.createElement("div", { "data-icon": "", className: E(S == null ? void 0 : S.icon, (u = s == null ? void 0 : s.classNames) == null ? void 0 : u.icon) }, s.promise || s.type === "loading" && !s.icon ? s.icon || rt() : null, s.type !== "loading" ? s.icon || (te == null ? void 0 : te[ae]) || _r(ae) : null) : null, p.createElement("div", { "data-content": "", className: E(S == null ? void 0 : S.content, (f = s == null ? void 0 : s.classNames) == null ? void 0 : f.content) }, p.createElement("div", { "data-title": "", className: E(S == null ? void 0 : S.title, (i = s == null ? void 0 : s.classNames) == null ? void 0 : i.title) }, s.title), s.description ? p.createElement("div", { "data-description": "", className: E(Q, Oe, S == null ? void 0 : S.description, (c = s == null ? void 0 : s.classNames) == null ? void 0 : c.description) }, s.description) : null), p.isValidElement(s.cancel) ? s.cancel : s.cancel && Xe(s.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: s.cancelButtonStyle || q, onClick: (N) => {
    var M, B;
    Xe(s.cancel) && we && ((B = (M = s.cancel).onClick) == null || B.call(M, N), be());
  }, className: E(S == null ? void 0 : S.cancelButton, (m = s == null ? void 0 : s.classNames) == null ? void 0 : m.cancelButton) }, s.cancel.label) : null, p.isValidElement(s.action) ? s.action : s.action && Xe(s.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: s.actionButtonStyle || G, onClick: (N) => {
    var M, B;
    Xe(s.action) && (N.defaultPrevented || ((B = (M = s.action).onClick) == null || B.call(M, N), be()));
  }, className: E(S == null ? void 0 : S.actionButton, (h = s == null ? void 0 : s.classNames) == null ? void 0 : h.actionButton) }, s.action.label) : null));
};
function Ct() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var Jr = (e) => {
  let { invert: r, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: l, closeButton: u, className: f, offset: i, theme: c = "light", richColors: m, duration: h, style: b, visibleToasts: s = Br, toastOptions: v, dir: k = Ct(), gap: w = Yr, loadingIcon: R, icons: y, containerAriaLabel: x = "Notifications", pauseWhenPageIsHidden: Y, cn: I = Kr } = e, [$, A] = p.useState([]), U = p.useMemo(() => Array.from(new Set([n].concat($.filter((T) => T.position).map((T) => T.position)))), [$, n]), [L, q] = p.useState([]), [G, z] = p.useState(!1), [Q, _] = p.useState(!1), [X, F] = p.useState(c !== "system" ? c : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = p.useRef(null), ee = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), S = p.useRef(null), te = p.useRef(!1), he = p.useCallback((T) => {
    var E;
    (E = $.find((j) => j.id === T.id)) != null && E.delete || de.dismiss(T.id), A((j) => j.filter(({ id: K }) => K !== T.id));
  }, [$]);
  return p.useEffect(() => de.subscribe((T) => {
    if (T.dismiss) {
      A((E) => E.map((j) => j.id === T.id ? { ...j, delete: !0 } : j));
      return;
    }
    setTimeout(() => {
      nr.flushSync(() => {
        A((E) => {
          let j = E.findIndex((K) => K.id === T.id);
          return j !== -1 ? [...E.slice(0, j), { ...E[j], ...T }, ...E.slice(j + 1)] : [T, ...E];
        });
      });
    });
  }), []), p.useEffect(() => {
    if (c !== "system") {
      F(c);
      return;
    }
    c === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? F("dark") : F("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: T }) => {
      F(T ? "dark" : "light");
    });
  }, [c]), p.useEffect(() => {
    $.length <= 1 && z(!1);
  }, [$]), p.useEffect(() => {
    let T = (E) => {
      var j, K;
      o.every((ne) => E[ne] || E.code === ne) && (z(!0), (j = W.current) == null || j.focus()), E.code === "Escape" && (document.activeElement === W.current || (K = W.current) != null && K.contains(document.activeElement)) && z(!1);
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [o]), p.useEffect(() => {
    if (W.current) return () => {
      S.current && (S.current.focus({ preventScroll: !0 }), S.current = null, te.current = !1);
    };
  }, [W.current]), $.length ? p.createElement("section", { "aria-label": `${x} ${ee}`, tabIndex: -1 }, U.map((T, E) => {
    var j;
    let [K, ne] = T.split("-");
    return p.createElement("ol", { key: T, dir: k === "auto" ? Ct() : k, tabIndex: -1, ref: W, className: f, "data-sonner-toaster": !0, "data-theme": X, "data-y-position": K, "data-x-position": ne, style: { "--front-toast-height": `${((j = L[0]) == null ? void 0 : j.height) || 0}px`, "--offset": typeof i == "number" ? `${i}px` : i || Ar, "--width": `${Vr}px`, "--gap": `${w}px`, ...b }, onBlur: (H) => {
      te.current && !H.currentTarget.contains(H.relatedTarget) && (te.current = !1, S.current && (S.current.focus({ preventScroll: !0 }), S.current = null));
    }, onFocus: (H) => {
      H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || te.current || (te.current = !0, S.current = H.relatedTarget);
    }, onMouseEnter: () => z(!0), onMouseMove: () => z(!0), onMouseLeave: () => {
      Q || z(!1);
    }, onPointerDown: (H) => {
      H.target instanceof HTMLElement && H.target.dataset.dismissible === "false" || _(!0);
    }, onPointerUp: () => _(!1) }, $.filter((H) => !H.position && E === 0 || H.position === T).map((H, ve) => {
      var J, oe;
      return p.createElement(Xr, { key: H.id, icons: y, index: ve, toast: H, defaultRichColors: m, duration: (J = v == null ? void 0 : v.duration) != null ? J : h, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: r, visibleToasts: s, closeButton: (oe = v == null ? void 0 : v.closeButton) != null ? oe : u, interacting: Q, position: T, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: he, toasts: $.filter((le) => le.position == H.position), heights: L.filter((le) => le.position == H.position), setHeights: q, expandByDefault: l, gap: w, loadingIcon: R, expanded: G, pauseWhenPageIsHidden: Y, cn: I });
    }));
  })) : null;
};
function On({ children: e }) {
  function r(n) {
    Lr.custom((o) => /* @__PURE__ */ a.jsx(Cr, { ...n }));
  }
  return /* @__PURE__ */ a.jsxs(zt.Provider, { value: { showToast: r }, children: [
    /* @__PURE__ */ a.jsx(Jr, {}),
    e
  ] });
}
export {
  rn as Badge,
  xn as BreadcrumbContainer,
  wn as BreadcrumbLink,
  hn as Button,
  mn as Checkbox,
  nn as Divider,
  Cn as DrawerContainer,
  Nn as DrawerHeader,
  Tn as DrawerProvider,
  dn as FormController,
  pn as FormError,
  gn as FormLabel,
  vn as IconButton,
  bn as Input,
  _n as ModalContainer,
  En as ModalFooter,
  jn as ModalHeader,
  In as ModalProvider,
  kn as Pagination,
  fn as Select,
  an as Skeleton,
  sn as TableBody,
  on as TableCaption,
  ln as TableContainer,
  cn as TableFooter,
  un as TableHeader,
  yn as Textarea,
  Cr as Toast,
  On as ToastProvider,
  Sn as Tooltip,
  Rn as useAutomation,
  $n as useDrawer,
  Pn as useModal,
  kr as useScopedParams,
  Nr as useToast
};
