import f, { createContext as qe, useRef as $e, useId as At, useContext as Be, useState as pe, forwardRef as Wt, useEffect as mt } from "react";
import { Loader2 as je, Check as Et, ChevronDown as Vt, ChevronRight as pt, X as Yt } from "lucide-react";
import { useActionData as kt, useLocation as St, Link as Ut } from "@remix-run/react";
import { InputMask as Ht } from "@react-input/mask";
import { AnimatePresence as Kt, motion as gt } from "framer-motion";
import Jt from "react-dom";
var at = { exports: {} }, Le = {};
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
function Xt() {
  if (vt) return Le;
  vt = 1;
  var t = f, r = Symbol.for("react.element"), n = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(s, d, p) {
    var g, w = {}, a = null, v = null;
    p !== void 0 && (a = "" + p), d.key !== void 0 && (a = "" + d.key), d.ref !== void 0 && (v = d.ref);
    for (g in d) o.call(d, g) && !c.hasOwnProperty(g) && (w[g] = d[g]);
    if (s && s.defaultProps) for (g in d = s.defaultProps, d) w[g] === void 0 && (w[g] = d[g]);
    return { $$typeof: r, type: s, key: a, ref: v, props: w, _owner: l.current };
  }
  return Le.Fragment = n, Le.jsx = h, Le.jsxs = h, Le;
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
function qt() {
  return bt || (bt = 1, process.env.NODE_ENV !== "production" && function() {
    var t = f, r = Symbol.for("react.element"), n = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), p = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), w = Symbol.for("react.memo"), a = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), I = Symbol.iterator, j = "@@iterator";
    function P(e) {
      if (e === null || typeof e != "object")
        return null;
      var i = I && e[I] || e[j];
      return typeof i == "function" ? i : null;
    }
    var b = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var i = arguments.length, m = new Array(i > 1 ? i - 1 : 0), x = 1; x < i; x++)
          m[x - 1] = arguments[x];
        H("error", e, m);
      }
    }
    function H(e, i, m) {
      {
        var x = b.ReactDebugCurrentFrame, F = x.getStackAddendum();
        F !== "" && (i += "%s", m = m.concat([F]));
        var V = m.map(function($) {
          return String($);
        });
        V.unshift("Warning: " + i), Function.prototype.apply.call(console[e], console, V);
      }
    }
    var L = !1, R = !1, A = !1, U = !1, M = !1, J;
    J = Symbol.for("react.module.reference");
    function X(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === c || M || e === l || e === p || e === g || U || e === v || L || R || A || typeof e == "object" && e !== null && (e.$$typeof === a || e.$$typeof === w || e.$$typeof === h || e.$$typeof === s || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === J || e.getModuleId !== void 0));
    }
    function O(e, i, m) {
      var x = e.displayName;
      if (x)
        return x;
      var F = i.displayName || i.name || "";
      return F !== "" ? m + "(" + F + ")" : m;
    }
    function G(e) {
      return e.displayName || "Context";
    }
    function C(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case n:
          return "Portal";
        case c:
          return "Profiler";
        case l:
          return "StrictMode";
        case p:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            var i = e;
            return G(i) + ".Consumer";
          case h:
            var m = e;
            return G(m._context) + ".Provider";
          case d:
            return O(e, e.render, "ForwardRef");
          case w:
            var x = e.displayName || null;
            return x !== null ? x : C(e.type) || "Memo";
          case a: {
            var F = e, V = F._payload, $ = F._init;
            try {
              return C($(V));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var K = Object.assign, z = 0, W, Z, N, Q, de, _, S;
    function E() {
    }
    E.__reactDisabledLog = !0;
    function re() {
      {
        if (z === 0) {
          W = console.log, Z = console.info, N = console.warn, Q = console.error, de = console.group, _ = console.groupCollapsed, S = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: E,
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
    function ee() {
      {
        if (z--, z === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: K({}, e, {
              value: W
            }),
            info: K({}, e, {
              value: Z
            }),
            warn: K({}, e, {
              value: N
            }),
            error: K({}, e, {
              value: Q
            }),
            group: K({}, e, {
              value: de
            }),
            groupCollapsed: K({}, e, {
              value: _
            }),
            groupEnd: K({}, e, {
              value: S
            })
          });
        }
        z < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Y = b.ReactCurrentDispatcher, ne;
    function oe(e, i, m) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (F) {
            var x = F.stack.trim().match(/\n( *(at )?)/);
            ne = x && x[1] || "";
          }
        return `
` + ne + e;
      }
    }
    var be = !1, ge;
    {
      var Ge = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new Ge();
    }
    function Ne(e, i) {
      if (!e || be)
        return "";
      {
        var m = ge.get(e);
        if (m !== void 0)
          return m;
      }
      var x;
      be = !0;
      var F = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var V;
      V = Y.current, Y.current = null, re();
      try {
        if (i) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (ce) {
              x = ce;
            }
            Reflect.construct(e, [], $);
          } else {
            try {
              $.call();
            } catch (ce) {
              x = ce;
            }
            e.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ce) {
            x = ce;
          }
          e();
        }
      } catch (ce) {
        if (ce && x && typeof ce.stack == "string") {
          for (var T = ce.stack.split(`
`), ie = x.stack.split(`
`), q = T.length - 1, te = ie.length - 1; q >= 1 && te >= 0 && T[q] !== ie[te]; )
            te--;
          for (; q >= 1 && te >= 0; q--, te--)
            if (T[q] !== ie[te]) {
              if (q !== 1 || te !== 1)
                do
                  if (q--, te--, te < 0 || T[q] !== ie[te]) {
                    var me = `
` + T[q].replace(" at new ", " at ");
                    return e.displayName && me.includes("<anonymous>") && (me = me.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, me), me;
                  }
                while (q >= 1 && te >= 0);
              break;
            }
        }
      } finally {
        be = !1, Y.current = V, ee(), Error.prepareStackTrace = F;
      }
      var Te = e ? e.displayName || e.name : "", Ce = Te ? oe(Te) : "";
      return typeof e == "function" && ge.set(e, Ce), Ce;
    }
    function Ze(e, i, m) {
      return Ne(e, !1);
    }
    function De(e) {
      var i = e.prototype;
      return !!(i && i.isReactComponent);
    }
    function Se(e, i, m) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ne(e, De(e));
      if (typeof e == "string")
        return oe(e);
      switch (e) {
        case p:
          return oe("Suspense");
        case g:
          return oe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ze(e.render);
          case w:
            return Se(e.type, i, m);
          case a: {
            var x = e, F = x._payload, V = x._init;
            try {
              return Se(V(F), i, m);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Ae = {}, We = b.ReactDebugCurrentFrame;
    function ae(e) {
      if (e) {
        var i = e._owner, m = Se(e.type, e._source, i ? i.type : null);
        We.setExtraStackFrame(m);
      } else
        We.setExtraStackFrame(null);
    }
    function xe(e, i, m, x, F) {
      {
        var V = Function.call.bind(fe);
        for (var $ in e)
          if (V(e, $)) {
            var T = void 0;
            try {
              if (typeof e[$] != "function") {
                var ie = Error((x || "React class") + ": " + m + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ie.name = "Invariant Violation", ie;
              }
              T = e[$](i, $, x, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (q) {
              T = q;
            }
            T && !(T instanceof Error) && (ae(F), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", x || "React class", m, $, typeof T), ae(null)), T instanceof Error && !(T.message in Ae) && (Ae[T.message] = !0, ae(F), y("Failed %s type: %s", m, T.message), ae(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Ie(e) {
      return Qe(e);
    }
    function Re(e) {
      {
        var i = typeof Symbol == "function" && Symbol.toStringTag, m = i && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return m;
      }
    }
    function et(e) {
      try {
        return Pe(e), !1;
      } catch {
        return !0;
      }
    }
    function Pe(e) {
      return "" + e;
    }
    function _e(e) {
      if (et(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Re(e)), Pe(e);
    }
    var he = b.ReactCurrentOwner, Ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, ye, Oe, ze;
    ze = {};
    function Ye(e) {
      if (fe.call(e, "ref")) {
        var i = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ue(e) {
      if (fe.call(e, "key")) {
        var i = Object.getOwnPropertyDescriptor(e, "key").get;
        if (i && i.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function tt(e, i) {
      if (typeof e.ref == "string" && he.current && i && he.current.stateNode !== i) {
        var m = C(he.current.type);
        ze[m] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(he.current.type), e.ref), ze[m] = !0);
      }
    }
    function Fe(e, i) {
      {
        var m = function() {
          ye || (ye = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        m.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function ve(e, i) {
      {
        var m = function() {
          Oe || (Oe = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", i));
        };
        m.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var rt = function(e, i, m, x, F, V, $) {
      var T = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: e,
        key: i,
        ref: m,
        props: $,
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
        value: x
      }), Object.defineProperty(T, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: F
      }), Object.freeze && (Object.freeze(T.props), Object.freeze(T)), T;
    };
    function k(e, i, m, x, F) {
      {
        var V, $ = {}, T = null, ie = null;
        m !== void 0 && (_e(m), T = "" + m), Ue(i) && (_e(i.key), T = "" + i.key), Ye(i) && (ie = i.ref, tt(i, F));
        for (V in i)
          fe.call(i, V) && !Ve.hasOwnProperty(V) && ($[V] = i[V]);
        if (e && e.defaultProps) {
          var q = e.defaultProps;
          for (V in q)
            $[V] === void 0 && ($[V] = q[V]);
        }
        if (T || ie) {
          var te = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          T && Fe($, te), ie && ve($, te);
        }
        return rt(e, T, ie, F, x, he.current, $);
      }
    }
    var B = b.ReactCurrentOwner, D = b.ReactDebugCurrentFrame;
    function se(e) {
      if (e) {
        var i = e._owner, m = Se(e.type, e._source, i ? i.type : null);
        D.setExtraStackFrame(m);
      } else
        D.setExtraStackFrame(null);
    }
    var le;
    le = !1;
    function we(e) {
      return typeof e == "object" && e !== null && e.$$typeof === r;
    }
    function He() {
      {
        if (B.current) {
          var e = C(B.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function $t(e) {
      {
        if (e !== void 0) {
          var i = e.fileName.replace(/^.*[\\\/]/, ""), m = e.lineNumber;
          return `

Check your code at ` + i + ":" + m + ".";
        }
        return "";
      }
    }
    var ct = {};
    function It(e) {
      {
        var i = He();
        if (!i) {
          var m = typeof e == "string" ? e : e.displayName || e.name;
          m && (i = `

Check the top-level render call using <` + m + ">.");
        }
        return i;
      }
    }
    function ut(e, i) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var m = It(i);
        if (ct[m])
          return;
        ct[m] = !0;
        var x = "";
        e && e._owner && e._owner !== B.current && (x = " It was passed a child from " + C(e._owner.type) + "."), se(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, x), se(null);
      }
    }
    function dt(e, i) {
      {
        if (typeof e != "object")
          return;
        if (Ie(e))
          for (var m = 0; m < e.length; m++) {
            var x = e[m];
            we(x) && ut(x, i);
          }
        else if (we(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var F = P(e);
          if (typeof F == "function" && F !== e.entries)
            for (var V = F.call(e), $; !($ = V.next()).done; )
              we($.value) && ut($.value, i);
        }
      }
    }
    function Pt(e) {
      {
        var i = e.type;
        if (i == null || typeof i == "string")
          return;
        var m;
        if (typeof i == "function")
          m = i.propTypes;
        else if (typeof i == "object" && (i.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        i.$$typeof === w))
          m = i.propTypes;
        else
          return;
        if (m) {
          var x = C(i);
          xe(m, e.props, "prop", x, e);
        } else if (i.PropTypes !== void 0 && !le) {
          le = !0;
          var F = C(i);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", F || "Unknown");
        }
        typeof i.getDefaultProps == "function" && !i.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ot(e) {
      {
        for (var i = Object.keys(e.props), m = 0; m < i.length; m++) {
          var x = i[m];
          if (x !== "children" && x !== "key") {
            se(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", x), se(null);
            break;
          }
        }
        e.ref !== null && (se(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var ft = {};
    function ht(e, i, m, x, F, V) {
      {
        var $ = X(e);
        if (!$) {
          var T = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (T += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ie = $t(F);
          ie ? T += ie : T += He();
          var q;
          e === null ? q = "null" : Ie(e) ? q = "array" : e !== void 0 && e.$$typeof === r ? (q = "<" + (C(e.type) || "Unknown") + " />", T = " Did you accidentally export a JSX literal instead of a component?") : q = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", q, T);
        }
        var te = k(e, i, m, F, V);
        if (te == null)
          return te;
        if ($) {
          var me = i.children;
          if (me !== void 0)
            if (x)
              if (Ie(me)) {
                for (var Te = 0; Te < me.length; Te++)
                  dt(me[Te], e);
                Object.freeze && Object.freeze(me);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              dt(me, e);
        }
        if (fe.call(i, "key")) {
          var Ce = C(e), ce = Object.keys(i).filter(function(Dt) {
            return Dt !== "key";
          }), nt = ce.length > 0 ? "{key: someKey, " + ce.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!ft[Ce + nt]) {
            var Bt = ce.length > 0 ? "{" + ce.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, nt, Ce, Bt, Ce), ft[Ce + nt] = !0;
          }
        }
        return e === o ? Ot(te) : Pt(te), te;
      }
    }
    function zt(e, i, m) {
      return ht(e, i, m, !0);
    }
    function Ft(e, i, m) {
      return ht(e, i, m, !1);
    }
    var Lt = Ft, Mt = zt;
    Me.Fragment = o, Me.jsx = Lt, Me.jsxs = Mt;
  }()), Me;
}
process.env.NODE_ENV === "production" ? at.exports = Xt() : at.exports = qt();
var u = at.exports;
function Xe(t, r) {
  return r ? /* @__PURE__ */ u.jsx(r, { size: t, strokeWidth: 2.5 }) : /* @__PURE__ */ u.jsx(u.Fragment, {});
}
function Gt(t) {
  const {
    variant: r = "ghost",
    scheme: n = "primary",
    size: o = "md",
    leftIcon: l,
    rightIcon: c,
    className: h = "",
    children: s,
    ...d
  } = t, g = { md: 12, lg: 14 }[o];
  return {
    className: `arkyn_badge ${r} ${n} ${o} ${h}`.trim(),
    children: s,
    leftIcon: Xe(g, l),
    rightIcon: Xe(g, c),
    ...d
  };
}
function Gr(t) {
  const { leftIcon: r, children: n, rightIcon: o, ...l } = Gt(t);
  return /* @__PURE__ */ u.jsxs("div", { ...l, children: [
    r,
    n,
    o
  ] });
}
function Zr(t) {
  const {
    className: r,
    orientation: n = "horizontal",
    ...o
  } = t, l = `arkyn_divider ${n} ${r}`;
  return /* @__PURE__ */ u.jsx("div", { className: l, ...o });
}
function Qr({ className: t, ...r }) {
  const n = "arkyn_skeleton " + t;
  return /* @__PURE__ */ u.jsx("div", { className: n.trim(), ...r });
}
function Zt(t) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    loadingText: l,
    size: c = "md",
    leftIcon: h,
    rightIcon: s,
    disabled: d,
    className: p = "",
    children: g,
    ...w
  } = t, v = { xs: 12, sm: 16, md: 20, lg: 24 }[c];
  return {
    className: `arkyn_button loading_text_${!!l} ${o} ${n} ${c} loading_${r} ${p}`.trim(),
    loadingText: l,
    children: g,
    iconSize: v,
    disabled: d || r,
    leftIcon: Xe(v, h),
    rightIcon: Xe(v, s),
    ...w
  };
}
function en(t) {
  const { leftIcon: r, rightIcon: n, iconSize: o, children: l, loadingText: c, ...h } = Zt(t);
  return /* @__PURE__ */ u.jsxs("button", { ...h, children: [
    /* @__PURE__ */ u.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ u.jsx(je, { size: o, strokeWidth: 2.5 }),
      c && c
    ] }),
    /* @__PURE__ */ u.jsxs("div", { className: "content", children: [
      r,
      l,
      n
    ] })
  ] });
}
const Ct = qe({});
function tn({ children: t, ...r }) {
  var s, d;
  const n = kt(), o = $e(null), l = ((s = o.current) == null ? void 0 : s.name) || "", c = ((d = n == null ? void 0 : n.fieldErrors) == null ? void 0 : d[l]) || null, h = At();
  return /* @__PURE__ */ u.jsx(Ct.Provider, { value: { error: c, id: h, inputRef: o }, children: /* @__PURE__ */ u.jsx("section", { className: "arkyn_form_controller", ...r, children: t }) });
}
function ke() {
  return Be(Ct);
}
function rn(t) {
  const {
    name: r,
    className: n = "",
    size: o = "md",
    isError: l,
    defaultChecked: c = !1,
    checked: h = null,
    onCheck: s,
    value: d,
    ...p
  } = t, { id: g, inputRef: w, error: a } = ke(), v = l || !!a, [I, j] = pe(c || !1), P = typeof h == "boolean" ? h : I, b = `arkyn_checkbox ${o} ${v ? "error" : ""} ${P ? "checked" : ""} ${n}`;
  function y() {
    const H = I;
    j(!H), s && s(H ? "" : d || "checked");
  }
  return /* @__PURE__ */ u.jsxs("div", { id: g, className: b, onClick: y, ...p, children: [
    /* @__PURE__ */ u.jsx(
      "input",
      {
        type: "hidden",
        name: r,
        ref: w,
        value: P ? d || "checked" : ""
      }
    ),
    /* @__PURE__ */ u.jsx(Et, {})
  ] });
}
function nn({ children: t }) {
  const { error: r } = ke();
  return t ? /* @__PURE__ */ u.jsx("strong", { className: "arkyn_form_error", children: t }) : r ? /* @__PURE__ */ u.jsx("strong", { className: "arkyn_form_error", children: r }) : /* @__PURE__ */ u.jsx(u.Fragment, {});
}
function Qt(t) {
  const { showAsterisk: r = !1, className: n = "", ...o } = t;
  return {
    className: `arkyn_form_label ${r ? "show-asterisk" : ""} ${n}`.trim(),
    ...o
  };
}
function an(t) {
  const { id: r } = ke();
  return /* @__PURE__ */ u.jsx("label", { ...Qt(t), htmlFor: r });
}
const yt = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function sn(t) {
  const {
    isLoading: r = !1,
    scheme: n = "primary",
    variant: o = "solid",
    size: l = "md",
    icon: c,
    disabled: h,
    className: s = "",
    ...d
  } = t, p = `arkyn_icon_button ${o} ${n} ${l} loading_${r} ${s}`;
  return /* @__PURE__ */ u.jsxs(
    "button",
    {
      disabled: h || r,
      className: p.trim(),
      ...d,
      children: [
        /* @__PURE__ */ u.jsx("div", { className: "spinner", children: /* @__PURE__ */ u.jsx(je, { size: yt[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ u.jsx("div", { className: "content " + l, children: /* @__PURE__ */ u.jsx(c, { size: yt[l], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ee(t, r, n) {
  if (!t) return /* @__PURE__ */ u.jsx(u.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ u.jsx("p", { className: n, children: t });
  const o = t;
  return /* @__PURE__ */ u.jsx("p", { className: n, children: /* @__PURE__ */ u.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function ot(t) {
  return t && t.replace(/[^0-9]/g, "");
}
function jt(t, r) {
  let n = "", o = 0;
  return Array.from(t).forEach((l, c) => {
    r[c + o].match(/[0-9]/) || (n += r[c + o], o++), n += l;
  }), n;
}
function Nt(t) {
  return t.length > 11 ? "CNPJ" : "CPF";
}
const it = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Rt = ot(it.CNPJ).length;
function er(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: w,
    defaultValue: a,
    readOnly: v,
    onFocus: I,
    onBlur: j,
    title: P,
    style: b,
    onChange: y,
    ...H
  } = t;
  function L(K) {
    let z = ot(K);
    const W = Nt(z);
    if (!(z.length > Rt))
      return z = jt(z, it[W]), z;
  }
  const R = g ? "right" : "left", O = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${l} ${w || v || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, C = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(s, C, "prefix"),
    sufix: Ee(d, C, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    defaultValue: L(a || ""),
    disabled: w,
    readOnly: v,
    onFocus: I,
    onBlur: j,
    title: P,
    style: b,
    onChange: y,
    loadingPosition: R,
    iconSize: C,
    Spinner: /* @__PURE__ */ u.jsx(je, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...H
  };
}
function tr(t) {
  const [r, n] = pe(!1), o = $e(null), { inputRef: l, id: c, error: h } = ke(), s = l || o, d = t.isError || !!h, {
    disabled: p,
    title: g,
    style: w,
    className: a,
    prefix: v,
    sufix: I,
    iconSize: j,
    loadingPosition: P,
    isLoading: b,
    LeftIcon: y,
    readOnly: H,
    onFocus: L,
    onBlur: R,
    RightIcon: A,
    Spinner: U,
    onChange: M,
    value: J,
    defaultValue: X,
    ...O
  } = er({ ...t, id: c, isError: d }, r), [G, C] = pe(X), K = y && !b, z = A && !b, W = P === "left" && b, Z = P === "right" && b;
  function N() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function Q(S) {
    let E = ot(S.target.value);
    const re = Nt(E);
    E.length > Rt || (E = jt(E, it[re]), S.target.value = E, C(E), M && M(S));
  }
  function de(S) {
    n(!0), L && L(S);
  }
  function _(S) {
    n(!1), R && R(S);
  }
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      title: g,
      style: w,
      onClick: N,
      className: a,
      children: [
        v,
        W && U,
        K && /* @__PURE__ */ u.jsx(y, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ u.jsx(
          "input",
          {
            disabled: p || b,
            readOnly: H,
            ref: s,
            value: J || G,
            onFocus: de,
            onChange: Q,
            onBlur: _,
            ...O
          }
        ),
        z && /* @__PURE__ */ u.jsx(A, { size: j, strokeWidth: 2.5 }),
        Z && U,
        I
      ]
    }
  );
}
function rr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: w,
    readOnly: a,
    onFocus: v,
    onBlur: I,
    title: j,
    style: P,
    showCents: b = !1,
    max: y = 1e9,
    onChange: H,
    ...L
  } = t, R = g ? "right" : "left", O = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${l} ${w || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, C = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(s, C, "prefix"),
    sufix: Ee(d, C, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    disabled: w,
    readOnly: a,
    onFocus: v,
    onBlur: I,
    title: j,
    style: P,
    max: y,
    onChange: H,
    showCents: b,
    loadingPosition: R,
    iconSize: C,
    Spinner: /* @__PURE__ */ u.jsx(je, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...L
  };
}
const nr = /^[1-9]{1}$/, ar = /^[0-9]{1}$/, xt = 8;
function sr(t, r) {
  if (t === 0) return "";
  const n = (t / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return r ? n : n.replace("R$", "").trim();
}
function or(t) {
  const { currencyValue: r, event: n, max: o, setCurrencyValue: l } = t, { key: c, keyCode: h } = n;
  if (r === 0 && !nr.test(c) || r !== 0 && !ar.test(c) && h !== xt)
    return;
  const s = r.toString();
  let d;
  if (h !== xt) {
    const p = r === 0 ? c : `${s}${c}`;
    d = Number.parseInt(p, 10);
  } else {
    const p = s.slice(0, -1);
    d = p === "" ? 0 : Number.parseInt(p, 10);
  }
  d > Number(o) || l(d);
}
function ir(t) {
  const [r, n] = pe(!1), o = $e(null), { inputRef: l, id: c, error: h } = ke(), s = l || o, d = t.isError || !!h, {
    disabled: p,
    title: g,
    style: w,
    className: a,
    prefix: v,
    sufix: I,
    iconSize: j,
    loadingPosition: P,
    isLoading: b,
    LeftIcon: y,
    readOnly: H,
    onFocus: L,
    onBlur: R,
    RightIcon: A,
    Spinner: U,
    value: M,
    max: J,
    onKeyDown: X,
    onChange: O,
    showCents: G,
    defaultValue: C,
    ...K
  } = rr({ ...t, id: c, isError: d }, r), [z, W] = pe(C * 100 || 0), Z = y && !b, N = A && !b, Q = P === "left" && b, de = P === "right" && b;
  function _() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function S(ee) {
    or({ currencyValue: z, event: ee, max: J, setCurrencyValue: W }), O && O(z / 100), X && X(ee);
  }
  function E(ee) {
    n(!0), L && L(ee);
  }
  function re(ee) {
    n(!1), R && R(ee);
  }
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      title: g,
      style: w,
      onClick: _,
      className: a,
      children: [
        v,
        Q && U,
        Z && /* @__PURE__ */ u.jsx(y, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ u.jsx(
          "input",
          {
            value: sr(M || z, G),
            onKeyDown: S,
            disabled: p || b,
            readOnly: H,
            ref: s,
            onFocus: E,
            onBlur: re,
            onChange: () => {
            },
            ...K
          }
        ),
        de && U,
        N && /* @__PURE__ */ u.jsx(A, { size: j, strokeWidth: 2.5 }),
        I
      ]
    }
  );
}
function lr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: w,
    readOnly: a,
    onFocus: v,
    onBlur: I,
    title: j,
    style: P,
    onChange: b,
    showMask: y = !1,
    type: H,
    ...L
  } = t, R = g ? "right" : "left", O = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${l} ${w || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, C = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: O,
    prefix: Ee(s, C, "prefix"),
    sufix: Ee(d, C, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    disabled: w,
    readOnly: a,
    onFocus: v,
    onBlur: I,
    title: j,
    style: P,
    onChange: b,
    loadingPosition: R,
    iconSize: C,
    showMask: y,
    Spinner: /* @__PURE__ */ u.jsx(je, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...L
  };
}
const cr = Wt((t, r) => /* @__PURE__ */ u.jsx("input", { ref: r, ...t }));
function ur(t) {
  const [r, n] = pe(!1), o = $e(null), { inputRef: l, id: c, error: h } = ke(), s = l || o, d = t.isError || !!h, {
    disabled: p,
    title: g,
    style: w,
    className: a,
    prefix: v,
    sufix: I,
    iconSize: j,
    loadingPosition: P,
    isLoading: b,
    LeftIcon: y,
    readOnly: H,
    onFocus: L,
    onBlur: R,
    RightIcon: A,
    Spinner: U,
    ...M
  } = lr({ ...t, id: c, isError: d }, r), J = y && !b, X = A && !b, O = P === "left" && b, G = P === "right" && b;
  function C() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function K(W) {
    n(!0), L && L(W);
  }
  function z(W) {
    n(!1), R && R(W);
  }
  return /* @__PURE__ */ u.jsxs(
    "section",
    {
      title: g,
      style: w,
      onClick: C,
      className: a,
      children: [
        v,
        O && U,
        J && /* @__PURE__ */ u.jsx(y, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ u.jsx(
          Ht,
          {
            component: cr,
            ref: s,
            onFocus: K,
            onBlur: z,
            ...M
          }
        ),
        X && /* @__PURE__ */ u.jsx(A, { size: j, strokeWidth: 2.5 }),
        G && U,
        I
      ]
    }
  );
}
function dr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: s,
    sufix: d,
    leftIcon: p,
    rightIcon: g,
    disabled: w,
    readOnly: a,
    onFocus: v,
    onBlur: I,
    title: j,
    style: P,
    onChange: b,
    ...y
  } = t, H = g ? "right" : "left", J = `arkyn_input ${s ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${l} ${w || a || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, O = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: J,
    prefix: Ee(s, O, "prefix"),
    sufix: Ee(d, O, "sufix"),
    LeftIcon: p,
    RightIcon: g,
    disabled: w,
    readOnly: a,
    onFocus: v,
    onBlur: I,
    title: j,
    style: P,
    onChange: b,
    loadingPosition: H,
    iconSize: O,
    Spinner: /* @__PURE__ */ u.jsx(je, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...y
  };
}
function fr(t) {
  const [r, n] = pe(!1), o = $e(null), { inputRef: l, id: c, error: h } = ke(), s = l || o, d = t.isError || !!h, {
    disabled: p,
    title: g,
    style: w,
    className: a,
    prefix: v,
    sufix: I,
    iconSize: j,
    loadingPosition: P,
    isLoading: b,
    LeftIcon: y,
    readOnly: H,
    onFocus: L,
    onBlur: R,
    RightIcon: A,
    type: U,
    Spinner: M,
    ...J
  } = dr({ ...t, id: c, isError: d }, r), X = y && !b, O = A && !b, G = P === "left" && b, C = P === "right" && b;
  function K() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function z(Z) {
    n(!0), L && L(Z);
  }
  function W(Z) {
    n(!1), R && R(Z);
  }
  return U === "hidden" ? /* @__PURE__ */ u.jsx("input", { type: "hidden", ref: s, ...J }) : /* @__PURE__ */ u.jsxs(
    "section",
    {
      title: g,
      style: w,
      onClick: K,
      className: a,
      children: [
        v,
        G && M,
        X && /* @__PURE__ */ u.jsx(y, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ u.jsx(
          "input",
          {
            disabled: p || b,
            readOnly: H,
            ref: s,
            onFocus: z,
            onBlur: W,
            type: U,
            ...J
          }
        ),
        O && /* @__PURE__ */ u.jsx(A, { size: j, strokeWidth: 2.5 }),
        C && M,
        I
      ]
    }
  );
}
function on(t) {
  return t.type === "currency" ? /* @__PURE__ */ u.jsx(ir, { ...t }) : t.type === "masked" ? /* @__PURE__ */ u.jsx(ur, { ...t }) : t.type === "cpf-cnpj" ? /* @__PURE__ */ u.jsx(tr, { ...t }) : /* @__PURE__ */ u.jsx(fr, { ...t });
}
function hr(t, r, n) {
  if (!t) return /* @__PURE__ */ u.jsx(u.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ u.jsx("p", { className: n, children: t });
  const o = t;
  return /* @__PURE__ */ u.jsx("p", { className: n, children: /* @__PURE__ */ u.jsx(o, { color: "var(--secondary-600)", size: r, strokeWidth: 2.5 }) });
}
function mr(t, r) {
  const {
    isLoading: n,
    isError: o,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: s,
    leftIcon: d,
    disabled: p,
    readOnly: g,
    onFocus: w,
    onBlur: a,
    title: v,
    style: I,
    isSearchable: j = !1,
    closeOnSelect: P = !0,
    ...b
  } = t, A = `arkyn_select ${s ? "hasPrefix" : ""} ${h} ${l} ${p || g || n ? "opacity" : ""} ${o ? "errored" : ""} ${r ? "focused" : ""} ${c}`, M = { md: 20, lg: 20 }[l];
  return {
    isLoading: n,
    className: A,
    prefix: hr(s, M, "prefix"),
    LeftIcon: d,
    disabled: p,
    readOnly: g,
    onFocus: w,
    onBlur: a,
    title: v,
    closeOnSelect: P,
    style: I,
    isSearchable: j,
    iconSize: M,
    Spinner: /* @__PURE__ */ u.jsx(je, { className: "spinner", size: M, strokeWidth: 2.5 }),
    ...b
  };
}
function ln(t) {
  var Y;
  const [r, n] = pe(!1), { inputRef: o, id: l, error: c } = ke(), h = $e(null), s = o || h, d = t.isError || !!c, {
    disabled: p,
    title: g,
    style: w,
    className: a,
    prefix: v,
    iconSize: I,
    isLoading: j,
    LeftIcon: P,
    value: b = null,
    defaultValue: y = "",
    readOnly: H,
    onFocus: L,
    onBlur: R,
    Spinner: A,
    name: U,
    isSearchable: M,
    placeholder: J,
    onSelect: X,
    options: O,
    optionMaxHeight: G,
    closeOnSelect: C,
    ...K
  } = mr({ ...t, id: l, isError: d }, r), [z, W] = pe(y), [Z, N] = pe("");
  function Q() {
    p || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function de(ne) {
    n(!0), L && L(ne);
  }
  function _() {
    n(!1), R && s.current && s.current.blur();
  }
  const S = typeof b == "string" ? b : z, E = ((Y = O.find((ne) => ne.value === S)) == null ? void 0 : Y.label) || "", re = () => {
    if (M) {
      if (!r && E) return !0;
      if (!r && !E || r) return !1;
    }
    if (!M) {
      if (!r && E) return !0;
      if (!r && !E) return !1;
      if (r && E) return !0;
      if (r && !E) return !1;
    }
  }, ee = O.filter((ne) => M ? ne.label.toLowerCase().includes(Z.toLowerCase()) : !0);
  return /* @__PURE__ */ u.jsxs(u.Fragment, { children: [
    /* @__PURE__ */ u.jsxs(
      "section",
      {
        title: g,
        style: w,
        onClick: Q,
        className: `${a} placeholder_dark_${re()}`,
        children: [
          v,
          P && /* @__PURE__ */ u.jsx(P, { size: I, strokeWidth: 2.5 }),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              disabled: p || j,
              readOnly: !M,
              value: Z || "",
              placeholder: E || J,
              onFocus: de,
              onBlur: () => N(""),
              ...K,
              onChange: (ne) => N(ne.target.value)
            }
          ),
          /* @__PURE__ */ u.jsx(
            "input",
            {
              type: "hidden",
              ref: s,
              name: U,
              value: S || "",
              readOnly: !0
            }
          ),
          r && /* @__PURE__ */ u.jsxs(
            "ul",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: G },
              children: [
                ee.map(({ label: ne, value: oe }) => /* @__PURE__ */ u.jsxs(
                  "li",
                  {
                    className: S === oe ? "active" : "",
                    onClick: () => {
                      W(z !== oe ? oe : ""), X && X({ label: ne, value: oe }), C && setTimeout(() => _(), 100);
                    },
                    children: [
                      ne,
                      " ",
                      /* @__PURE__ */ u.jsx(Et, {})
                    ]
                  },
                  oe
                )),
                ee.length <= 0 && /* @__PURE__ */ u.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !j && /* @__PURE__ */ u.jsx(
            Vt,
            {
              className: "arkyn_select_arrow",
              size: I,
              strokeWidth: 2.5
            }
          ),
          j && A
        ]
      }
    ),
    r && /* @__PURE__ */ u.jsx("aside", { className: "arkyn_select_overlay", onClick: _ })
  ] });
}
function pr(t) {
  const { className: r = "", ...n } = t;
  return { className: `arkyn_breadcrumb ${r}`.trim(), ...n };
}
function gr(t) {
  const { pathname: r } = St(), {
    className: n = "",
    disabled: o = !1,
    to: l,
    ...c
  } = t, h = r === l ? "active" : "inactive", s = `arkyn_breadcrumb_link ${h} ${n}`;
  return {
    to: l,
    className: s.trim(),
    disabled: o || h === "active",
    ...c
  };
}
function cn(t) {
  const { className: r, ...n } = pr(t);
  return /* @__PURE__ */ u.jsx("nav", { className: r, ...n });
}
function un(t) {
  const { children: r, className: n, disabled: o, ...l } = gr(t);
  return o ? /* @__PURE__ */ u.jsxs("p", { className: n, children: [
    /* @__PURE__ */ u.jsx(pt, { size: 14, strokeWidth: 2.5 }),
    r
  ] }) : /* @__PURE__ */ u.jsxs(Ut, { className: n, ...l, children: [
    /* @__PURE__ */ u.jsx(pt, { size: 14, strokeWidth: 2.5 }),
    r
  ] });
}
const _t = qe({});
function vr(t) {
  const {
    isVisibled: r,
    makeInvisible: n,
    children: o,
    className: l = "",
    ...c
  } = t, s = `arkyn_modal_container ${r ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ u.jsx(_t.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ u.jsx(Kt, { children: r && /* @__PURE__ */ u.jsxs("aside", { className: s.trim(), ...c, children: [
    /* @__PURE__ */ u.jsx(
      gt.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ u.jsx(
      gt.div,
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
function br(t) {
  const { alignment: r = "right", className: n, ...o } = t, l = `arkyn_modal_footer ${r} ${n}`;
  return /* @__PURE__ */ u.jsx("footer", { className: l.trim(), ...o });
}
function yr(t) {
  const { showCloseButton: r, className: n, children: o, ...l } = t, { makeInvisible: c } = Be(_t), s = `arkyn_modal_header ${r ? "show-close" : ""} ${n}`;
  return /* @__PURE__ */ u.jsxs("header", { className: s.trim(), ...l, children: [
    o,
    /* @__PURE__ */ u.jsx("button", { type: "button", onClick: c, children: /* @__PURE__ */ u.jsx(Yt, { size: 24 }) })
  ] });
}
const dn = { Container: vr, Header: yr, Footer: br };
function fn(t) {
  const {
    text: r,
    size: n = "lg",
    children: o,
    orientation: l = "top",
    className: c,
    ...h
  } = t;
  return /* @__PURE__ */ u.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${n} ${l} ${c}`,
      ...h,
      children: [
        o,
        /* @__PURE__ */ u.jsx("div", { className: "arkyn_tooltip_text", children: r })
      ]
    }
  );
}
const lt = qe({}), Tt = qe({});
function xr() {
  const t = Be(Tt);
  if (Object.entries(t).length === 0)
    throw new Error("useToast must be used within a Provider");
  return t;
}
function hn() {
  const t = kt(), { closeModal: r } = Be(lt), { successToast: n, errorToast: o } = xr();
  mt(() => {
    const l = t == null ? void 0 : t.closeModalKey;
    l && r(l);
  }, [t]), mt(() => {
    typeof (t == null ? void 0 : t.message) == "string" && typeof (t == null ? void 0 : t.success) == "boolean" && (t != null && t.success ? n(t == null ? void 0 : t.message) : o(t == null ? void 0 : t.message));
  }, [t]);
}
function mn(t) {
  const r = Be(lt);
  if (Object.entries(r).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (t) {
    const {
      modalData: n,
      modalIsOpen: o,
      openModal: l,
      closeModal: c
    } = r, h = o(t), s = n(t);
    return { modalIsOpen: h, modalData: s, openModal: (g) => l(t, g == null ? void 0 : g.data), closeModal: () => c(t) };
  } else
    return r;
}
function pn(t = "") {
  const r = St(), n = new URLSearchParams(r.search), o = t ? `${t}:` : "", l = (c) => {
    Object.entries(c).forEach(([h, s]) => {
      s === void 0 ? n.delete(`${o}${h}`) : n.set(`${o}${h}`, String(s));
    });
  };
  return {
    getParam: (c) => n.get(`${o}${c}`),
    getScopedSearch: (c) => {
      l(c);
      let h = n.toString();
      return h && (h = "?" + h), h;
    }
  };
}
function gn(t) {
  const { children: r = !1 } = t, [n, o] = pe([]);
  function l(d) {
    return !!n.some((p) => p.key === d);
  }
  function c(d) {
    var p;
    return (p = n.find((g) => g.key === d)) == null ? void 0 : p.data;
  }
  function h(d, p) {
    const g = l(d);
    o(g ? (w) => [...w.filter((v) => v.key !== d), { key: d, data: p }] : [...n, { key: d, data: p }]);
  }
  function s(d) {
    o(n.filter((p) => p.key !== d));
  }
  return /* @__PURE__ */ u.jsx(
    lt.Provider,
    {
      value: { modalIsOpen: l, modalData: c, openModal: h, closeModal: s },
      children: r
    }
  );
}
var wr = (t) => {
  switch (t) {
    case "success":
      return Sr;
    case "info":
      return jr;
    case "warning":
      return Cr;
    case "error":
      return Nr;
    default:
      return null;
  }
}, Er = Array(12).fill(0), kr = ({ visible: t }) => f.createElement("div", { className: "sonner-loading-wrapper", "data-visible": t }, f.createElement("div", { className: "sonner-spinner" }, Er.map((r, n) => f.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${n}` })))), Sr = f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, f.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Cr = f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, f.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), jr = f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, f.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Nr = f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, f.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Rr = () => {
  let [t, r] = f.useState(document.hidden);
  return f.useEffect(() => {
    let n = () => {
      r(document.hidden);
    };
    return document.addEventListener("visibilitychange", n), () => window.removeEventListener("visibilitychange", n);
  }, []), t;
}, st = 1, _r = class {
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
      let { message: n, ...o } = t, l = typeof (t == null ? void 0 : t.id) == "number" || ((r = t.id) == null ? void 0 : r.length) > 0 ? t.id : st++, c = this.toasts.find((s) => s.id === l), h = t.dismissible === void 0 ? !0 : t.dismissible;
      return c ? this.toasts = this.toasts.map((s) => s.id === l ? (this.publish({ ...s, ...t, id: l, title: n }), { ...s, ...t, id: l, dismissible: h, title: n }) : s) : this.addToast({ title: n, ...o, dismissible: h, id: l }), l;
    }, this.dismiss = (t) => (t || this.toasts.forEach((r) => {
      this.subscribers.forEach((n) => n({ id: r.id, dismiss: !0 }));
    }), this.subscribers.forEach((r) => r({ id: t, dismiss: !0 })), t), this.message = (t, r) => this.create({ ...r, message: t }), this.error = (t, r) => this.create({ ...r, message: t, type: "error" }), this.success = (t, r) => this.create({ ...r, type: "success", message: t }), this.info = (t, r) => this.create({ ...r, type: "info", message: t }), this.warning = (t, r) => this.create({ ...r, type: "warning", message: t }), this.loading = (t, r) => this.create({ ...r, type: "loading", message: t }), this.promise = (t, r) => {
      if (!r) return;
      let n;
      r.loading !== void 0 && (n = this.create({ ...r, promise: t, type: "loading", message: r.loading, description: typeof r.description != "function" ? r.description : void 0 }));
      let o = t instanceof Promise ? t : t(), l = n !== void 0;
      return o.then(async (c) => {
        if ($r(c) && !c.ok) {
          l = !1;
          let h = typeof r.error == "function" ? await r.error(`HTTP error! status: ${c.status}`) : r.error, s = typeof r.description == "function" ? await r.description(`HTTP error! status: ${c.status}`) : r.description;
          this.create({ id: n, type: "error", message: h, description: s });
        } else if (r.success !== void 0) {
          l = !1;
          let h = typeof r.success == "function" ? await r.success(c) : r.success, s = typeof r.description == "function" ? await r.description(c) : r.description;
          this.create({ id: n, type: "success", message: h, description: s });
        }
      }).catch(async (c) => {
        if (r.error !== void 0) {
          l = !1;
          let h = typeof r.error == "function" ? await r.error(c) : r.error, s = typeof r.description == "function" ? await r.description(c) : r.description;
          this.create({ id: n, type: "error", message: h, description: s });
        }
      }).finally(() => {
        var c;
        l && (this.dismiss(n), n = void 0), (c = r.finally) == null || c.call(r);
      }), n;
    }, this.custom = (t, r) => {
      let n = (r == null ? void 0 : r.id) || st++;
      return this.create({ jsx: t(n), id: n, ...r }), n;
    }, this.subscribers = [], this.toasts = [];
  }
}, ue = new _r(), Tr = (t, r) => {
  let n = (r == null ? void 0 : r.id) || st++;
  return ue.addToast({ title: t, ...r, id: n }), n;
}, $r = (t) => t && typeof t == "object" && "ok" in t && typeof t.ok == "boolean" && "status" in t && typeof t.status == "number", Ir = Tr, Pr = () => ue.toasts, Ke = Object.assign(Ir, { success: ue.success, info: ue.info, warning: ue.warning, error: ue.error, custom: ue.custom, message: ue.message, promise: ue.promise, dismiss: ue.dismiss, loading: ue.loading }, { getHistory: Pr });
function Or(t, { insertAt: r } = {}) {
  if (!t || typeof document > "u") return;
  let n = document.head || document.getElementsByTagName("head")[0], o = document.createElement("style");
  o.type = "text/css", r === "top" && n.firstChild ? n.insertBefore(o, n.firstChild) : n.appendChild(o), o.styleSheet ? o.styleSheet.cssText = t : o.appendChild(document.createTextNode(t));
}
Or(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function Je(t) {
  return t.label !== void 0;
}
var zr = 3, Fr = "32px", Lr = 4e3, Mr = 356, Br = 14, Dr = 20, Ar = 200;
function Wr(...t) {
  return t.filter(Boolean).join(" ");
}
var Vr = (t) => {
  var r, n, o, l, c, h, s, d, p, g;
  let { invert: w, toast: a, unstyled: v, interacting: I, setHeights: j, visibleToasts: P, heights: b, index: y, toasts: H, expanded: L, removeToast: R, defaultRichColors: A, closeButton: U, style: M, cancelButtonStyle: J, actionButtonStyle: X, className: O = "", descriptionClassName: G = "", duration: C, position: K, gap: z, loadingIcon: W, expandByDefault: Z, classNames: N, icons: Q, closeButtonAriaLabel: de = "Close toast", pauseWhenPageIsHidden: _, cn: S } = t, [E, re] = f.useState(!1), [ee, Y] = f.useState(!1), [ne, oe] = f.useState(!1), [be, ge] = f.useState(!1), [Ge, Ne] = f.useState(0), [Ze, De] = f.useState(0), Se = f.useRef(null), fe = f.useRef(null), Ae = y === 0, We = y + 1 <= P, ae = a.type, xe = a.dismissible !== !1, Qe = a.className || "", Ie = a.descriptionClassName || "", Re = f.useMemo(() => b.findIndex((k) => k.toastId === a.id) || 0, [b, a.id]), et = f.useMemo(() => {
    var k;
    return (k = a.closeButton) != null ? k : U;
  }, [a.closeButton, U]), Pe = f.useMemo(() => a.duration || C || Lr, [a.duration, C]), _e = f.useRef(0), he = f.useRef(0), Ve = f.useRef(0), ye = f.useRef(null), [Oe, ze] = K.split("-"), Ye = f.useMemo(() => b.reduce((k, B, D) => D >= Re ? k : k + B.height, 0), [b, Re]), Ue = Rr(), tt = a.invert || w, Fe = ae === "loading";
  he.current = f.useMemo(() => Re * z + Ye, [Re, Ye]), f.useEffect(() => {
    re(!0);
  }, []), f.useLayoutEffect(() => {
    if (!E) return;
    let k = fe.current, B = k.style.height;
    k.style.height = "auto";
    let D = k.getBoundingClientRect().height;
    k.style.height = B, De(D), j((se) => se.find((le) => le.toastId === a.id) ? se.map((le) => le.toastId === a.id ? { ...le, height: D } : le) : [{ toastId: a.id, height: D, position: a.position }, ...se]);
  }, [E, a.title, a.description, j, a.id]);
  let ve = f.useCallback(() => {
    Y(!0), Ne(he.current), j((k) => k.filter((B) => B.toastId !== a.id)), setTimeout(() => {
      R(a);
    }, Ar);
  }, [a, R, j, he]);
  f.useEffect(() => {
    if (a.promise && ae === "loading" || a.duration === 1 / 0 || a.type === "loading") return;
    let k, B = Pe;
    return L || I || _ && Ue ? (() => {
      if (Ve.current < _e.current) {
        let D = (/* @__PURE__ */ new Date()).getTime() - _e.current;
        B = B - D;
      }
      Ve.current = (/* @__PURE__ */ new Date()).getTime();
    })() : B !== 1 / 0 && (_e.current = (/* @__PURE__ */ new Date()).getTime(), k = setTimeout(() => {
      var D;
      (D = a.onAutoClose) == null || D.call(a, a), ve();
    }, B)), () => clearTimeout(k);
  }, [L, I, Z, a, Pe, ve, a.promise, ae, _, Ue]), f.useEffect(() => {
    let k = fe.current;
    if (k) {
      let B = k.getBoundingClientRect().height;
      return De(B), j((D) => [{ toastId: a.id, height: B, position: a.position }, ...D]), () => j((D) => D.filter((se) => se.toastId !== a.id));
    }
  }, [j, a.id]), f.useEffect(() => {
    a.delete && ve();
  }, [ve, a.delete]);
  function rt() {
    return Q != null && Q.loading ? f.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, Q.loading) : W ? f.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, W) : f.createElement(kr, { visible: ae === "loading" });
  }
  return f.createElement("li", { "aria-live": a.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: fe, className: S(O, Qe, N == null ? void 0 : N.toast, (r = a == null ? void 0 : a.classNames) == null ? void 0 : r.toast, N == null ? void 0 : N.default, N == null ? void 0 : N[ae], (n = a == null ? void 0 : a.classNames) == null ? void 0 : n[ae]), "data-sonner-toast": "", "data-rich-colors": (o = a.richColors) != null ? o : A, "data-styled": !(a.jsx || a.unstyled || v), "data-mounted": E, "data-promise": !!a.promise, "data-removed": ee, "data-visible": We, "data-y-position": Oe, "data-x-position": ze, "data-index": y, "data-front": Ae, "data-swiping": ne, "data-dismissible": xe, "data-type": ae, "data-invert": tt, "data-swipe-out": be, "data-expanded": !!(L || Z && E), style: { "--index": y, "--toasts-before": y, "--z-index": H.length - y, "--offset": `${ee ? Ge : he.current}px`, "--initial-height": Z ? "auto" : `${Ze}px`, ...M, ...a.style }, onPointerDown: (k) => {
    Fe || !xe || (Se.current = /* @__PURE__ */ new Date(), Ne(he.current), k.target.setPointerCapture(k.pointerId), k.target.tagName !== "BUTTON" && (oe(!0), ye.current = { x: k.clientX, y: k.clientY }));
  }, onPointerUp: () => {
    var k, B, D, se;
    if (be || !xe) return;
    ye.current = null;
    let le = Number(((k = fe.current) == null ? void 0 : k.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), we = (/* @__PURE__ */ new Date()).getTime() - ((B = Se.current) == null ? void 0 : B.getTime()), He = Math.abs(le) / we;
    if (Math.abs(le) >= Dr || He > 0.11) {
      Ne(he.current), (D = a.onDismiss) == null || D.call(a, a), ve(), ge(!0);
      return;
    }
    (se = fe.current) == null || se.style.setProperty("--swipe-amount", "0px"), oe(!1);
  }, onPointerMove: (k) => {
    var B;
    if (!ye.current || !xe) return;
    let D = k.clientY - ye.current.y, se = k.clientX - ye.current.x, le = (Oe === "top" ? Math.min : Math.max)(0, D), we = k.pointerType === "touch" ? 10 : 2;
    Math.abs(le) > we ? (B = fe.current) == null || B.style.setProperty("--swipe-amount", `${D}px`) : Math.abs(se) > we && (ye.current = null);
  } }, et && !a.jsx ? f.createElement("button", { "aria-label": de, "data-disabled": Fe, "data-close-button": !0, onClick: Fe || !xe ? () => {
  } : () => {
    var k;
    ve(), (k = a.onDismiss) == null || k.call(a, a);
  }, className: S(N == null ? void 0 : N.closeButton, (l = a == null ? void 0 : a.classNames) == null ? void 0 : l.closeButton) }, f.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, f.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), f.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, a.jsx || f.isValidElement(a.title) ? a.jsx || a.title : f.createElement(f.Fragment, null, ae || a.icon || a.promise ? f.createElement("div", { "data-icon": "", className: S(N == null ? void 0 : N.icon, (c = a == null ? void 0 : a.classNames) == null ? void 0 : c.icon) }, a.promise || a.type === "loading" && !a.icon ? a.icon || rt() : null, a.type !== "loading" ? a.icon || (Q == null ? void 0 : Q[ae]) || wr(ae) : null) : null, f.createElement("div", { "data-content": "", className: S(N == null ? void 0 : N.content, (h = a == null ? void 0 : a.classNames) == null ? void 0 : h.content) }, f.createElement("div", { "data-title": "", className: S(N == null ? void 0 : N.title, (s = a == null ? void 0 : a.classNames) == null ? void 0 : s.title) }, a.title), a.description ? f.createElement("div", { "data-description": "", className: S(G, Ie, N == null ? void 0 : N.description, (d = a == null ? void 0 : a.classNames) == null ? void 0 : d.description) }, a.description) : null), f.isValidElement(a.cancel) ? a.cancel : a.cancel && Je(a.cancel) ? f.createElement("button", { "data-button": !0, "data-cancel": !0, style: a.cancelButtonStyle || J, onClick: (k) => {
    var B, D;
    Je(a.cancel) && xe && ((D = (B = a.cancel).onClick) == null || D.call(B, k), ve());
  }, className: S(N == null ? void 0 : N.cancelButton, (p = a == null ? void 0 : a.classNames) == null ? void 0 : p.cancelButton) }, a.cancel.label) : null, f.isValidElement(a.action) ? a.action : a.action && Je(a.action) ? f.createElement("button", { "data-button": !0, "data-action": !0, style: a.actionButtonStyle || X, onClick: (k) => {
    var B, D;
    Je(a.action) && (k.defaultPrevented || ((D = (B = a.action).onClick) == null || D.call(B, k), ve()));
  }, className: S(N == null ? void 0 : N.actionButton, (g = a == null ? void 0 : a.classNames) == null ? void 0 : g.actionButton) }, a.action.label) : null));
};
function wt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let t = document.documentElement.getAttribute("dir");
  return t === "auto" || !t ? window.getComputedStyle(document.documentElement).direction : t;
}
var Yr = (t) => {
  let { invert: r, position: n = "bottom-right", hotkey: o = ["altKey", "KeyT"], expand: l, closeButton: c, className: h, offset: s, theme: d = "light", richColors: p, duration: g, style: w, visibleToasts: a = zr, toastOptions: v, dir: I = wt(), gap: j = Br, loadingIcon: P, icons: b, containerAriaLabel: y = "Notifications", pauseWhenPageIsHidden: H, cn: L = Wr } = t, [R, A] = f.useState([]), U = f.useMemo(() => Array.from(new Set([n].concat(R.filter((_) => _.position).map((_) => _.position)))), [R, n]), [M, J] = f.useState([]), [X, O] = f.useState(!1), [G, C] = f.useState(!1), [K, z] = f.useState(d !== "system" ? d : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), W = f.useRef(null), Z = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""), N = f.useRef(null), Q = f.useRef(!1), de = f.useCallback((_) => {
    var S;
    (S = R.find((E) => E.id === _.id)) != null && S.delete || ue.dismiss(_.id), A((E) => E.filter(({ id: re }) => re !== _.id));
  }, [R]);
  return f.useEffect(() => ue.subscribe((_) => {
    if (_.dismiss) {
      A((S) => S.map((E) => E.id === _.id ? { ...E, delete: !0 } : E));
      return;
    }
    setTimeout(() => {
      Jt.flushSync(() => {
        A((S) => {
          let E = S.findIndex((re) => re.id === _.id);
          return E !== -1 ? [...S.slice(0, E), { ...S[E], ..._ }, ...S.slice(E + 1)] : [_, ...S];
        });
      });
    });
  }), []), f.useEffect(() => {
    if (d !== "system") {
      z(d);
      return;
    }
    d === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? z("dark") : z("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: _ }) => {
      z(_ ? "dark" : "light");
    });
  }, [d]), f.useEffect(() => {
    R.length <= 1 && O(!1);
  }, [R]), f.useEffect(() => {
    let _ = (S) => {
      var E, re;
      o.every((ee) => S[ee] || S.code === ee) && (O(!0), (E = W.current) == null || E.focus()), S.code === "Escape" && (document.activeElement === W.current || (re = W.current) != null && re.contains(document.activeElement)) && O(!1);
    };
    return document.addEventListener("keydown", _), () => document.removeEventListener("keydown", _);
  }, [o]), f.useEffect(() => {
    if (W.current) return () => {
      N.current && (N.current.focus({ preventScroll: !0 }), N.current = null, Q.current = !1);
    };
  }, [W.current]), R.length ? f.createElement("section", { "aria-label": `${y} ${Z}`, tabIndex: -1 }, U.map((_, S) => {
    var E;
    let [re, ee] = _.split("-");
    return f.createElement("ol", { key: _, dir: I === "auto" ? wt() : I, tabIndex: -1, ref: W, className: h, "data-sonner-toaster": !0, "data-theme": K, "data-y-position": re, "data-x-position": ee, style: { "--front-toast-height": `${((E = M[0]) == null ? void 0 : E.height) || 0}px`, "--offset": typeof s == "number" ? `${s}px` : s || Fr, "--width": `${Mr}px`, "--gap": `${j}px`, ...w }, onBlur: (Y) => {
      Q.current && !Y.currentTarget.contains(Y.relatedTarget) && (Q.current = !1, N.current && (N.current.focus({ preventScroll: !0 }), N.current = null));
    }, onFocus: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || Q.current || (Q.current = !0, N.current = Y.relatedTarget);
    }, onMouseEnter: () => O(!0), onMouseMove: () => O(!0), onMouseLeave: () => {
      G || O(!1);
    }, onPointerDown: (Y) => {
      Y.target instanceof HTMLElement && Y.target.dataset.dismissible === "false" || C(!0);
    }, onPointerUp: () => C(!1) }, R.filter((Y) => !Y.position && S === 0 || Y.position === _).map((Y, ne) => {
      var oe, be;
      return f.createElement(Vr, { key: Y.id, icons: b, index: ne, toast: Y, defaultRichColors: p, duration: (oe = v == null ? void 0 : v.duration) != null ? oe : g, className: v == null ? void 0 : v.className, descriptionClassName: v == null ? void 0 : v.descriptionClassName, invert: r, visibleToasts: a, closeButton: (be = v == null ? void 0 : v.closeButton) != null ? be : c, interacting: G, position: _, style: v == null ? void 0 : v.style, unstyled: v == null ? void 0 : v.unstyled, classNames: v == null ? void 0 : v.classNames, cancelButtonStyle: v == null ? void 0 : v.cancelButtonStyle, actionButtonStyle: v == null ? void 0 : v.actionButtonStyle, removeToast: de, toasts: R.filter((ge) => ge.position == Y.position), heights: M.filter((ge) => ge.position == Y.position), setHeights: J, expandByDefault: l, gap: j, loadingIcon: P, expanded: X, pauseWhenPageIsHidden: H, cn: L });
    }));
  })) : null;
};
function vn({ children: t }) {
  function r(c) {
    Ke.success(c);
  }
  function n(c) {
    Ke.info(c);
  }
  function o(c) {
    Ke.error(c);
  }
  function l(c) {
    Ke.warning(c);
  }
  return /* @__PURE__ */ u.jsxs(
    Tt.Provider,
    {
      value: { errorToast: o, warningToast: l, successToast: r, infoToast: n },
      children: [
        /* @__PURE__ */ u.jsx(Yr, { richColors: !0 }),
        t
      ]
    }
  );
}
export {
  Gr as Badge,
  cn as Breadcrumb,
  un as BreadcrumbLink,
  en as Button,
  rn as Checkbox,
  Zr as Divider,
  tn as FormController,
  nn as FormError,
  an as FormLabel,
  sn as IconButton,
  on as Input,
  dn as Modal,
  gn as ModalProvider,
  ln as Select,
  Qr as Skeleton,
  vn as ToastProvider,
  fn as Tooltip,
  hn as useAutomation,
  mn as useModal,
  pn as useScopedParams,
  xr as useToast
};
