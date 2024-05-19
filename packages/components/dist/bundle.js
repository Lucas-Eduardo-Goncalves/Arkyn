import Xe, { createContext as He, useRef as ue, useId as $r, useContext as Ze, useState as Q, forwardRef as Pr } from "react";
import { Loader2 as ae, Check as Qe, ChevronDown as Ir, ChevronRight as Me, X as wr } from "lucide-react";
import { useActionData as Fr, useLocation as er, Link as Or } from "@remix-run/react";
import { InputMask as Tr } from "@react-input/mask";
import { AnimatePresence as zr, motion as Ue } from "framer-motion";
var Ne = { exports: {} }, he = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ke;
function Lr() {
  if (Ke)
    return he;
  Ke = 1;
  var r = Xe, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(c, d, h) {
    var p, g = {}, b = null, k = null;
    h !== void 0 && (b = "" + h), d.key !== void 0 && (b = "" + d.key), d.ref !== void 0 && (k = d.ref);
    for (p in d)
      o.call(d, p) && !u.hasOwnProperty(p) && (g[p] = d[p]);
    if (c && c.defaultProps)
      for (p in d = c.defaultProps, d)
        g[p] === void 0 && (g[p] = d[p]);
    return { $$typeof: n, type: c, key: b, ref: k, props: g, _owner: l.current };
  }
  return he.Fragment = t, he.jsx = f, he.jsxs = f, he;
}
var me = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Dr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Xe, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), c = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), b = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), R = Symbol.iterator, E = "@@iterator";
    function N(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = R && e[R] || e[E];
      return typeof s == "function" ? s : null;
    }
    var x = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var s = arguments.length, a = new Array(s > 1 ? s - 1 : 0), m = 1; m < s; m++)
          a[m - 1] = arguments[m];
        j("error", e, a);
      }
    }
    function j(e, s, a) {
      {
        var m = x.ReactDebugCurrentFrame, C = m.getStackAddendum();
        C !== "" && (s += "%s", a = a.concat([C]));
        var $ = a.map(function(S) {
          return String(S);
        });
        $.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, $);
      }
    }
    var I = !1, F = !1, T = !1, w = !1, z = !1, L;
    L = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === u || z || e === l || e === h || e === p || w || e === k || I || F || T || typeof e == "object" && e !== null && (e.$$typeof === b || e.$$typeof === g || e.$$typeof === f || e.$$typeof === c || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === L || e.getModuleId !== void 0));
    }
    function P(e, s, a) {
      var m = e.displayName;
      if (m)
        return m;
      var C = s.displayName || s.name || "";
      return C !== "" ? a + "(" + C + ")" : a;
    }
    function M(e) {
      return e.displayName || "Context";
    }
    function _(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case o:
          return "Fragment";
        case t:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case h:
          return "Suspense";
        case p:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case c:
            var s = e;
            return M(s) + ".Consumer";
          case f:
            var a = e;
            return M(a._context) + ".Provider";
          case d:
            return P(e, e.render, "ForwardRef");
          case g:
            var m = e.displayName || null;
            return m !== null ? m : _(e.type) || "Memo";
          case b: {
            var C = e, $ = C._payload, S = C._init;
            try {
              return _(S($));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, V = 0, A, re, ne, te, Z, U, K;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function G() {
      {
        if (V === 0) {
          A = console.log, re = console.info, ne = console.warn, te = console.error, Z = console.group, U = console.groupCollapsed, K = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: J,
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
        V++;
      }
    }
    function X() {
      {
        if (V--, V === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: A
            }),
            info: W({}, e, {
              value: re
            }),
            warn: W({}, e, {
              value: ne
            }),
            error: W({}, e, {
              value: te
            }),
            group: W({}, e, {
              value: Z
            }),
            groupCollapsed: W({}, e, {
              value: U
            }),
            groupEnd: W({}, e, {
              value: K
            })
          });
        }
        V < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = x.ReactCurrentDispatcher, be;
    function pe(e, s, a) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (C) {
            var m = C.stack.trim().match(/\n( *(at )?)/);
            be = m && m[1] || "";
          }
        return `
` + be + e;
      }
    }
    var Se = !1, ve;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      ve = new sr();
    }
    function Pe(e, s) {
      if (!e || Se)
        return "";
      {
        var a = ve.get(e);
        if (a !== void 0)
          return a;
      }
      var m;
      Se = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $;
      $ = ee.current, ee.current = null, G();
      try {
        if (s) {
          var S = function() {
            throw Error();
          };
          if (Object.defineProperty(S.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(S, []);
            } catch (q) {
              m = q;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (q) {
              m = q;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            m = q;
          }
          e();
        }
      } catch (q) {
        if (q && m && typeof q.stack == "string") {
          for (var y = q.stack.split(`
`), Y = m.stack.split(`
`), O = y.length - 1, D = Y.length - 1; O >= 1 && D >= 0 && y[O] !== Y[D]; )
            D--;
          for (; O >= 1 && D >= 0; O--, D--)
            if (y[O] !== Y[D]) {
              if (O !== 1 || D !== 1)
                do
                  if (O--, D--, D < 0 || y[O] !== Y[D]) {
                    var H = `
` + y[O].replace(" at new ", " at ");
                    return e.displayName && H.includes("<anonymous>") && (H = H.replace("<anonymous>", e.displayName)), typeof e == "function" && ve.set(e, H), H;
                  }
                while (O >= 1 && D >= 0);
              break;
            }
        }
      } finally {
        Se = !1, ee.current = $, X(), Error.prepareStackTrace = C;
      }
      var le = e ? e.displayName || e.name : "", oe = le ? pe(le) : "";
      return typeof e == "function" && ve.set(e, oe), oe;
    }
    function ir(e, s, a) {
      return Pe(e, !1);
    }
    function or(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function ge(e, s, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, or(e));
      if (typeof e == "string")
        return pe(e);
      switch (e) {
        case h:
          return pe("Suspense");
        case p:
          return pe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return ir(e.render);
          case g:
            return ge(e.type, s, a);
          case b: {
            var m = e, C = m._payload, $ = m._init;
            try {
              return ge($(C), s, a);
            } catch {
            }
          }
        }
      return "";
    }
    var fe = Object.prototype.hasOwnProperty, Ie = {}, we = x.ReactDebugCurrentFrame;
    function xe(e) {
      if (e) {
        var s = e._owner, a = ge(e.type, e._source, s ? s.type : null);
        we.setExtraStackFrame(a);
      } else
        we.setExtraStackFrame(null);
    }
    function ar(e, s, a, m, C) {
      {
        var $ = Function.call.bind(fe);
        for (var S in e)
          if ($(e, S)) {
            var y = void 0;
            try {
              if (typeof e[S] != "function") {
                var Y = Error((m || "React class") + ": " + a + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Y.name = "Invariant Violation", Y;
              }
              y = e[S](s, S, m, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (O) {
              y = O;
            }
            y && !(y instanceof Error) && (xe(C), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", a, S, typeof y), xe(null)), y instanceof Error && !(y.message in Ie) && (Ie[y.message] = !0, xe(C), v("Failed %s type: %s", a, y.message), xe(null));
          }
      }
    }
    var cr = Array.isArray;
    function _e(e) {
      return cr(e);
    }
    function lr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, a = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function ur(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Oe(e) {
      if (ur(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", lr(e)), Fe(e);
    }
    var de = x.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, ze, Ce;
    Ce = {};
    function dr(e) {
      if (fe.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function hr(e) {
      if (fe.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mr(e, s) {
      if (typeof e.ref == "string" && de.current && s && de.current.stateNode !== s) {
        var a = _(de.current.type);
        Ce[a] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', _(de.current.type), e.ref), Ce[a] = !0);
      }
    }
    function pr(e, s) {
      {
        var a = function() {
          Te || (Te = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function vr(e, s) {
      {
        var a = function() {
          ze || (ze = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var gr = function(e, s, a, m, C, $, S) {
      var y = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: a,
        props: S,
        // Record the component responsible for creating this element.
        _owner: $
      };
      return y._store = {}, Object.defineProperty(y._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(y, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(y, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(y.props), Object.freeze(y)), y;
    };
    function xr(e, s, a, m, C) {
      {
        var $, S = {}, y = null, Y = null;
        a !== void 0 && (Oe(a), y = "" + a), hr(s) && (Oe(s.key), y = "" + s.key), dr(s) && (Y = s.ref, mr(s, C));
        for ($ in s)
          fe.call(s, $) && !fr.hasOwnProperty($) && (S[$] = s[$]);
        if (e && e.defaultProps) {
          var O = e.defaultProps;
          for ($ in O)
            S[$] === void 0 && (S[$] = O[$]);
        }
        if (y || Y) {
          var D = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          y && pr(S, D), Y && vr(S, D);
        }
        return gr(e, y, Y, C, m, de.current, S);
      }
    }
    var ke = x.ReactCurrentOwner, Le = x.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var s = e._owner, a = ge(e.type, e._source, s ? s.type : null);
        Le.setExtraStackFrame(a);
      } else
        Le.setExtraStackFrame(null);
    }
    var je;
    je = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function De() {
      {
        if (ke.current) {
          var e = _(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function yr(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + s + ":" + a + ".";
        }
        return "";
      }
    }
    var We = {};
    function br(e) {
      {
        var s = De();
        if (!s) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (s = `

Check the top-level render call using <` + a + ">.");
        }
        return s;
      }
    }
    function Be(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = br(s);
        if (We[a])
          return;
        We[a] = !0;
        var m = "";
        e && e._owner && e._owner !== ke.current && (m = " It was passed a child from " + _(e._owner.type) + "."), ce(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, m), ce(null);
      }
    }
    function Ae(e, s) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var a = 0; a < e.length; a++) {
            var m = e[a];
            Re(m) && Be(m, s);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var C = N(e);
          if (typeof C == "function" && C !== e.entries)
            for (var $ = C.call(e), S; !(S = $.next()).done; )
              Re(S.value) && Be(S.value, s);
        }
      }
    }
    function Sr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var a;
        if (typeof s == "function")
          a = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === g))
          a = s.propTypes;
        else
          return;
        if (a) {
          var m = _(s);
          ar(a, e.props, "prop", m, e);
        } else if (s.PropTypes !== void 0 && !je) {
          je = !0;
          var C = _(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var s = Object.keys(e.props), a = 0; a < s.length; a++) {
          var m = s[a];
          if (m !== "children" && m !== "key") {
            ce(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var Ve = {};
    function Ye(e, s, a, m, C, $) {
      {
        var S = B(e);
        if (!S) {
          var y = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Y = yr(C);
          Y ? y += Y : y += De();
          var O;
          e === null ? O = "null" : _e(e) ? O = "array" : e !== void 0 && e.$$typeof === n ? (O = "<" + (_(e.type) || "Unknown") + " />", y = " Did you accidentally export a JSX literal instead of a component?") : O = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", O, y);
        }
        var D = xr(e, s, a, C, $);
        if (D == null)
          return D;
        if (S) {
          var H = s.children;
          if (H !== void 0)
            if (m)
              if (_e(H)) {
                for (var le = 0; le < H.length; le++)
                  Ae(H[le], e);
                Object.freeze && Object.freeze(H);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(H, e);
        }
        if (fe.call(s, "key")) {
          var oe = _(e), q = Object.keys(s).filter(function(Nr) {
            return Nr !== "key";
          }), Ee = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[oe + Ee]) {
            var Er = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, oe, Er, oe), Ve[oe + Ee] = !0;
          }
        }
        return e === o ? _r(D) : Sr(D), D;
      }
    }
    function Cr(e, s, a) {
      return Ye(e, s, a, !0);
    }
    function kr(e, s, a) {
      return Ye(e, s, a, !1);
    }
    var jr = kr, Rr = Cr;
    me.Fragment = o, me.jsx = jr, me.jsxs = Rr;
  }()), me;
}
process.env.NODE_ENV === "production" ? Ne.exports = Lr() : Ne.exports = Dr();
var i = Ne.exports;
function ye(r, n) {
  return n ? /* @__PURE__ */ i.jsx(n, { size: r, strokeWidth: 2.5 }) : /* @__PURE__ */ i.jsx(i.Fragment, {});
}
function Wr(r) {
  const {
    variant: n = "ghost",
    scheme: t = "primary",
    size: o = "md",
    leftIcon: l,
    rightIcon: u,
    className: f = "",
    children: c,
    ...d
  } = r, p = { md: 12, lg: 14 }[o];
  return {
    className: `arkyn_badge ${n} ${t} ${o} ${f}`.trim(),
    children: c,
    leftIcon: ye(p, l),
    rightIcon: ye(p, u),
    ...d
  };
}
function gn(r) {
  const { leftIcon: n, children: t, rightIcon: o, ...l } = Wr(r);
  return /* @__PURE__ */ i.jsxs("div", { ...l, children: [
    n,
    t,
    o
  ] });
}
function xn(r) {
  const {
    className: n,
    orientation: t = "horizontal",
    ...o
  } = r, l = `arkyn_divider ${t} ${n}`;
  return /* @__PURE__ */ i.jsx("div", { className: l, ...o });
}
function yn({ className: r, ...n }) {
  const t = "arkyn_skeleton " + r;
  return /* @__PURE__ */ i.jsx("div", { className: t.trim(), ...n });
}
function Br(r) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: o = "solid",
    loadingText: l,
    size: u = "md",
    leftIcon: f,
    rightIcon: c,
    disabled: d,
    className: h = "",
    children: p,
    ...g
  } = r, k = { xs: 12, sm: 16, md: 20, lg: 24 }[u];
  return {
    className: `arkyn_button loading_text_${!!l} ${o} ${t} ${u} loading_${n} ${h}`.trim(),
    loadingText: l,
    children: p,
    iconSize: k,
    disabled: d || n,
    leftIcon: ye(k, f),
    rightIcon: ye(k, c),
    ...g
  };
}
function bn(r) {
  const { leftIcon: n, rightIcon: t, iconSize: o, children: l, loadingText: u, ...f } = Br(r);
  return /* @__PURE__ */ i.jsxs("button", { ...f, children: [
    /* @__PURE__ */ i.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ i.jsx(ae, { size: o, strokeWidth: 2.5 }),
      u && u
    ] }),
    /* @__PURE__ */ i.jsxs("div", { className: "content", children: [
      n,
      l,
      t
    ] })
  ] });
}
const rr = He({});
function Sn({ children: r, ...n }) {
  var c, d;
  const t = Fr(), o = ue(null), l = ((c = o.current) == null ? void 0 : c.name) || "", u = ((d = t == null ? void 0 : t.fieldErrors) == null ? void 0 : d[l]) || null, f = $r();
  return /* @__PURE__ */ i.jsx(rr.Provider, { value: { error: u, id: f, inputRef: o }, children: /* @__PURE__ */ i.jsx("section", { className: "arkyn_form_controller", ...n, children: r }) });
}
function ie() {
  return Ze(rr);
}
function _n(r) {
  const {
    name: n,
    className: t = "",
    size: o = "md",
    isError: l,
    defaultChecked: u = !1,
    checked: f = null,
    onCheck: c,
    value: d,
    ...h
  } = r, { id: p, inputRef: g, error: b } = ie(), k = l || !!b, [R, E] = Q(u || !1), N = typeof f == "boolean" ? f : R, x = `arkyn_checkbox ${o} ${k ? "error" : ""} ${N ? "checked" : ""} ${t}`;
  function v() {
    const j = R;
    E(!j), c && c(j ? "" : d || "checked");
  }
  return /* @__PURE__ */ i.jsxs("div", { className: x, onClick: v, ...h, children: [
    /* @__PURE__ */ i.jsx(
      "input",
      {
        type: "hidden",
        name: n,
        id: p,
        ref: g,
        onFocus: v,
        onBlur: v,
        value: N ? d || "checked" : ""
      }
    ),
    /* @__PURE__ */ i.jsx(Qe, {})
  ] });
}
function Cn({ children: r }) {
  const { error: n } = ie();
  return r ? /* @__PURE__ */ i.jsx("strong", { className: "arkyn_form_error", children: r }) : n ? /* @__PURE__ */ i.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ i.jsx(i.Fragment, {});
}
function Ar(r) {
  const { showAsterisk: n = !1, className: t = "", ...o } = r;
  return {
    className: `arkyn_form_label ${n ? "show-asterisk" : ""} ${t}`.trim(),
    ...o
  };
}
function kn(r) {
  const { id: n } = ie();
  return /* @__PURE__ */ i.jsx("label", { ...Ar(r), htmlFor: n });
}
const qe = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function jn(r) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: o = "solid",
    size: l = "md",
    icon: u,
    disabled: f,
    className: c = "",
    ...d
  } = r, h = `arkyn_icon_button ${o} ${t} ${l} loading_${n} ${c}`;
  return /* @__PURE__ */ i.jsxs(
    "button",
    {
      disabled: f || n,
      className: h.trim(),
      ...d,
      children: [
        /* @__PURE__ */ i.jsx("div", { className: "spinner", children: /* @__PURE__ */ i.jsx(ae, { size: qe[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ i.jsx("div", { className: "content " + l, children: /* @__PURE__ */ i.jsx(u, { size: qe[l], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(r, n, t) {
  if (!r)
    return /* @__PURE__ */ i.jsx(i.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ i.jsx("p", { className: t, children: r });
  const o = r;
  return /* @__PURE__ */ i.jsx("p", { className: t, children: /* @__PURE__ */ i.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function Vr(r, n) {
  const {
    isLoading: t,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: c,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    onChange: x,
    ...v
  } = r, j = p ? "right" : "left", L = `arkyn_input ${c ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${g || b || t ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, P = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: L,
    prefix: se(c, P, "prefix"),
    sufix: se(d, P, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    onChange: x,
    loadingPosition: j,
    iconSize: P,
    Spinner: /* @__PURE__ */ i.jsx(ae, { className: "spinner", size: P, strokeWidth: 2.5 }),
    ...v
  };
}
function $e(r) {
  return r && r.replace(/[^0-9]/g, "");
}
function Yr(r, n) {
  let t = "", o = 0;
  return Array.from(r).forEach((l, u) => {
    n[u + o].match(/[0-9]/) || (t += n[u + o], o++), t += l;
  }), t;
}
function Mr(r) {
  return r.length > 11 ? "CNPJ" : "CPF";
}
const nr = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Ur = $e(nr.CNPJ).length;
function Kr(r) {
  const [n, t] = Q(!1), [o, l] = Q(
    $e((r == null ? void 0 : r.defaultValue) || "")
  ), u = ue(null), { inputRef: f, id: c, error: d } = ie(), h = f || u, p = r.isError || !!d, {
    disabled: g,
    title: b,
    style: k,
    className: R,
    prefix: E,
    sufix: N,
    iconSize: x,
    loadingPosition: v,
    isLoading: j,
    LeftIcon: I,
    readOnly: F,
    onFocus: T,
    onBlur: w,
    RightIcon: z,
    Spinner: L,
    onChange: B,
    value: P,
    defaultValue: M = "",
    ..._
  } = Vr({ ...r, id: c, isError: p }, n), W = I && !j, V = z && !j, A = v === "left" && j, re = v === "right" && j;
  function ne() {
    g || !(h != null && h.current) || (t(!0), h.current.focus());
  }
  function te(K) {
    let J = $e(K.target.value);
    const G = Mr(J);
    J.length > Ur || (J = Yr(J, nr[G]), K.target.value = J, l(J), B && B(K));
  }
  function Z(K) {
    t(!0), T && T(K);
  }
  function U(K) {
    t(!1), w && w(K);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: b,
      style: k,
      onClick: ne,
      className: R,
      children: [
        E,
        A && L,
        W && /* @__PURE__ */ i.jsx(I, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            disabled: g || j,
            readOnly: F,
            ref: h,
            value: P || o,
            onFocus: Z,
            onChange: te,
            onBlur: U,
            ..._
          }
        ),
        V && /* @__PURE__ */ i.jsx(z, { size: x, strokeWidth: 2.5 }),
        re && L,
        N
      ]
    }
  );
}
function Jr(r, n) {
  const {
    isLoading: t,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: c,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    showCents: x = !1,
    max: v = 1e9,
    onChange: j,
    ...I
  } = r, F = p ? "right" : "left", P = `arkyn_input ${c ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${g || b || t ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: P,
    prefix: se(c, _, "prefix"),
    sufix: se(d, _, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    max: v,
    onChange: j,
    showCents: x,
    loadingPosition: F,
    iconSize: _,
    Spinner: /* @__PURE__ */ i.jsx(ae, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...I
  };
}
const qr = /^[1-9]{1}$/, Gr = /^[0-9]{1}$/, Ge = 8;
function Xr(r, n) {
  if (r === 0)
    return "";
  const t = (r / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return n ? t : t.replace("R$", "").trim();
}
function Hr(r) {
  const { currencyValue: n, event: t, max: o, setCurrencyValue: l } = r, { key: u, keyCode: f } = t;
  if (n === 0 && !qr.test(u) || n !== 0 && !Gr.test(u) && f !== Ge)
    return;
  const c = n.toString();
  let d;
  if (f !== Ge) {
    const h = n === 0 ? u : `${c}${u}`;
    d = Number.parseInt(h, 10);
  } else {
    const h = c.slice(0, -1);
    d = h === "" ? 0 : Number.parseInt(h, 10);
  }
  d > Number(o) || l(d);
}
function Zr(r) {
  const [n, t] = Q(!1), [o, l] = Q(r.defaultValue || 0), u = ue(null), { inputRef: f, id: c, error: d } = ie(), h = f || u, p = r.isError || !!d, {
    disabled: g,
    title: b,
    style: k,
    className: R,
    prefix: E,
    sufix: N,
    iconSize: x,
    loadingPosition: v,
    isLoading: j,
    LeftIcon: I,
    readOnly: F,
    onFocus: T,
    onBlur: w,
    RightIcon: z,
    Spinner: L,
    value: B,
    max: P,
    onKeyDown: M,
    onChange: _,
    showCents: W,
    ...V
  } = Jr({ ...r, id: c, isError: p }, n), A = I && !j, re = z && !j, ne = v === "left" && j, te = v === "right" && j;
  function Z() {
    g || !(h != null && h.current) || (t(!0), h.current.focus());
  }
  function U(G) {
    Hr({ currencyValue: o, event: G, max: P, setCurrencyValue: l }), _ && _(o), M && M(G);
  }
  function K(G) {
    t(!0), T && T(G);
  }
  function J(G) {
    t(!1), w && w(G);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: b,
      style: k,
      onClick: Z,
      className: R,
      children: [
        E,
        ne && L,
        A && /* @__PURE__ */ i.jsx(I, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            value: Xr(B || o, W),
            onKeyDown: U,
            disabled: g || j,
            readOnly: F,
            ref: h,
            onFocus: K,
            onBlur: J,
            onChange: () => {
            },
            ...V
          }
        ),
        te && L,
        re && /* @__PURE__ */ i.jsx(z, { size: x, strokeWidth: 2.5 }),
        N
      ]
    }
  );
}
function Qr(r, n) {
  const {
    isLoading: t,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: c,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    onChange: x,
    showMask: v = !0,
    type: j,
    ...I
  } = r, F = p ? "right" : "left", P = `arkyn_input ${c ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${g || b || t ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, _ = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: P,
    prefix: se(c, _, "prefix"),
    sufix: se(d, _, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    onChange: x,
    loadingPosition: F,
    iconSize: _,
    showMask: v,
    Spinner: /* @__PURE__ */ i.jsx(ae, { className: "spinner", size: _, strokeWidth: 2.5 }),
    ...I
  };
}
const en = Pr((r, n) => /* @__PURE__ */ i.jsx("input", { ref: n, ...r }));
function rn(r) {
  const [n, t] = Q(!1), o = ue(null), { inputRef: l, id: u, error: f } = ie(), c = l || o, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: g,
    className: b,
    prefix: k,
    sufix: R,
    iconSize: E,
    loadingPosition: N,
    isLoading: x,
    LeftIcon: v,
    readOnly: j,
    onFocus: I,
    onBlur: F,
    RightIcon: T,
    Spinner: w,
    ...z
  } = Qr({ ...r, id: u, isError: d }, n), L = v && !x, B = T && !x, P = N === "left" && x, M = N === "right" && x;
  function _() {
    h || !(c != null && c.current) || (t(!0), c.current.focus());
  }
  function W(A) {
    t(!0), I && I(A);
  }
  function V(A) {
    t(!1), F && F(A);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: p,
      style: g,
      onClick: _,
      className: b,
      children: [
        k,
        P && w,
        L && /* @__PURE__ */ i.jsx(v, { size: E, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          Tr,
          {
            component: en,
            ref: c,
            onFocus: W,
            onBlur: V,
            ...z
          }
        ),
        B && /* @__PURE__ */ i.jsx(T, { size: E, strokeWidth: 2.5 }),
        M && w,
        R
      ]
    }
  );
}
function nn(r, n) {
  const {
    isLoading: t,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: c,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    onChange: x,
    ...v
  } = r, j = p ? "right" : "left", L = `arkyn_input ${c ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${g || b || t ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, P = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: L,
    prefix: se(c, P, "prefix"),
    sufix: se(d, P, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: g,
    readOnly: b,
    onFocus: k,
    onBlur: R,
    title: E,
    style: N,
    onChange: x,
    loadingPosition: j,
    iconSize: P,
    Spinner: /* @__PURE__ */ i.jsx(ae, { className: "spinner", size: P, strokeWidth: 2.5 }),
    ...v
  };
}
function tn(r) {
  const [n, t] = Q(!1), o = ue(null), { inputRef: l, id: u, error: f } = ie(), c = l || o, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: g,
    className: b,
    prefix: k,
    sufix: R,
    iconSize: E,
    loadingPosition: N,
    isLoading: x,
    LeftIcon: v,
    readOnly: j,
    onFocus: I,
    onBlur: F,
    RightIcon: T,
    Spinner: w,
    ...z
  } = nn({ ...r, id: u, isError: d }, n), L = v && !x, B = T && !x, P = N === "left" && x, M = N === "right" && x;
  function _() {
    h || !(c != null && c.current) || (t(!0), c.current.focus());
  }
  function W(A) {
    t(!0), I && I(A);
  }
  function V(A) {
    t(!1), F && F(A);
  }
  return /* @__PURE__ */ i.jsxs(
    "section",
    {
      title: p,
      style: g,
      onClick: _,
      className: b,
      children: [
        k,
        P && w,
        L && /* @__PURE__ */ i.jsx(v, { size: E, strokeWidth: 2.5 }),
        /* @__PURE__ */ i.jsx(
          "input",
          {
            disabled: h || x,
            readOnly: j,
            ref: c,
            onFocus: W,
            onBlur: V,
            ...z
          }
        ),
        B && /* @__PURE__ */ i.jsx(T, { size: E, strokeWidth: 2.5 }),
        M && w,
        R
      ]
    }
  );
}
function Rn(r) {
  return r.type === "currency" ? /* @__PURE__ */ i.jsx(Zr, { ...r }) : r.type === "masked" ? /* @__PURE__ */ i.jsx(rn, { ...r }) : r.type === "cpf-cpnj" ? /* @__PURE__ */ i.jsx(Kr, { ...r }) : /* @__PURE__ */ i.jsx(tn, { ...r });
}
function sn(r, n, t) {
  if (!r)
    return /* @__PURE__ */ i.jsx(i.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ i.jsx("p", { className: t, children: r });
  const o = r;
  return /* @__PURE__ */ i.jsx("p", { className: t, children: /* @__PURE__ */ i.jsx(o, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function on(r, n) {
  const {
    isLoading: t,
    isError: o,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: c,
    leftIcon: d,
    disabled: h,
    readOnly: p,
    onFocus: g,
    onBlur: b,
    title: k,
    style: R,
    isSearchable: E = !1,
    ...N
  } = r, F = `arkyn_select ${c ? "hasPrefix" : ""} ${f} ${l} ${h || p || t ? "opacity" : ""} ${o ? "errored" : ""} ${n ? "focused" : ""} ${u}`, w = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: F,
    prefix: sn(c, w, "prefix"),
    LeftIcon: d,
    disabled: h,
    readOnly: p,
    onFocus: g,
    onBlur: b,
    title: k,
    style: R,
    isSearchable: E,
    iconSize: w,
    Spinner: /* @__PURE__ */ i.jsx(ae, { className: "spinner", size: w, strokeWidth: 2.5 }),
    ...N
  };
}
function En(r) {
  var G;
  const [n, t] = Q(!1), { inputRef: o, id: l, error: u } = ie(), f = ue(null), c = o || f, d = r.isError || !!u, {
    disabled: h,
    title: p,
    style: g,
    className: b,
    prefix: k,
    iconSize: R,
    isLoading: E,
    LeftIcon: N,
    value: x = null,
    defaultValue: v = "",
    readOnly: j,
    onFocus: I,
    onBlur: F,
    Spinner: T,
    name: w,
    isSearchable: z,
    placeholder: L,
    onSelect: B,
    options: P,
    ...M
  } = on({ ...r, id: l, isError: d }, n), [_, W] = Q(v), [V, A] = Q("");
  function re() {
    h || !(c != null && c.current) || (t(!0), c.current.focus());
  }
  function ne(X) {
    t(!0), I && I(X);
  }
  function te() {
    t(!1), F && c.current && c.current.blur();
  }
  const Z = typeof x == "string" ? x : _, U = ((G = P.find((X) => X.value === Z)) == null ? void 0 : G.label) || "", K = () => {
    if (z) {
      if (!n && U)
        return !0;
      if (!n && !U || n)
        return !1;
    }
    if (!z) {
      if (!n && U)
        return !0;
      if (!n && !U)
        return !1;
      if (n && U)
        return !0;
      if (n && !U)
        return !1;
    }
  }, J = P.filter((X) => z ? X.label.toLowerCase().includes(V.toLowerCase()) : !0);
  return /* @__PURE__ */ i.jsxs(i.Fragment, { children: [
    /* @__PURE__ */ i.jsxs(
      "section",
      {
        title: p,
        style: g,
        onClick: re,
        className: `${b} placeholder_dark_${K()}`,
        children: [
          k,
          N && /* @__PURE__ */ i.jsx(N, { size: R, strokeWidth: 2.5 }),
          /* @__PURE__ */ i.jsx(
            "input",
            {
              disabled: h || E,
              readOnly: !z,
              value: V || "",
              placeholder: U || L,
              ref: c,
              onFocus: ne,
              onBlur: () => A(""),
              ...M,
              onChange: (X) => A(X.target.value)
            }
          ),
          /* @__PURE__ */ i.jsx("input", { type: "hidden", name: w, value: Z || "", readOnly: !0 }),
          n && /* @__PURE__ */ i.jsxs("ul", { className: "arkyn_select_content", children: [
            J.map(({ label: X, value: ee }) => /* @__PURE__ */ i.jsxs(
              "li",
              {
                className: Z === ee ? "active" : "",
                onClick: () => {
                  W(_ !== ee ? ee : ""), B && B({ label: X, value: ee });
                },
                children: [
                  X,
                  " ",
                  /* @__PURE__ */ i.jsx(Qe, {})
                ]
              },
              ee
            )),
            J.length <= 0 && /* @__PURE__ */ i.jsx("p", { children: "Sem opções disponíveis" })
          ] }),
          !E && /* @__PURE__ */ i.jsx(
            Ir,
            {
              className: "arkyn_select_arrow",
              size: R,
              strokeWidth: 2.5
            }
          ),
          E && T
        ]
      }
    ),
    n && /* @__PURE__ */ i.jsx("aside", { className: "arkyn_select_overlay", onClick: te })
  ] });
}
function an(r) {
  const { className: n = "", ...t } = r;
  return { className: `arkyn_breadcrumb ${n}`.trim(), ...t };
}
function cn(r) {
  const { pathname: n } = er(), {
    className: t = "",
    disabled: o = !1,
    to: l,
    ...u
  } = r, f = n === l ? "active" : "inactive", c = `arkyn_breadcrumb_link ${f} ${t}`;
  return {
    to: l,
    className: c.trim(),
    disabled: o || f === "active",
    ...u
  };
}
function Nn(r) {
  const { className: n, ...t } = an(r);
  return /* @__PURE__ */ i.jsx("nav", { className: n, ...t });
}
function $n(r) {
  const { children: n, className: t, disabled: o, ...l } = cn(r);
  return o ? /* @__PURE__ */ i.jsxs("p", { className: t, children: [
    /* @__PURE__ */ i.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    n
  ] }) : /* @__PURE__ */ i.jsxs(Or, { className: t, ...l, children: [
    /* @__PURE__ */ i.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    n
  ] });
}
const tr = He({});
function ln(r) {
  const {
    isVisibled: n,
    makeInvisible: t,
    children: o,
    className: l = "",
    ...u
  } = r, c = `arkyn_modal_container ${n ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ i.jsx(tr.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ i.jsx(zr, { children: n && /* @__PURE__ */ i.jsxs("aside", { className: c.trim(), ...u, children: [
    /* @__PURE__ */ i.jsx(
      Ue.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: t
      }
    ),
    /* @__PURE__ */ i.jsx(
      Ue.div,
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
function un(r) {
  const { alignment: n = "right", className: t, ...o } = r, l = `arkyn_modal_footer ${n} ${t}`;
  return /* @__PURE__ */ i.jsx("footer", { className: l.trim(), ...o });
}
function fn(r) {
  const { showCloseButton: n, className: t, children: o, ...l } = r, { makeInvisible: u } = Ze(tr), c = `arkyn_modal_header ${n ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ i.jsxs("header", { className: c.trim(), ...l, children: [
    o,
    /* @__PURE__ */ i.jsx("button", { type: "button", onClick: u, children: /* @__PURE__ */ i.jsx(wr, { size: 24 }) })
  ] });
}
const Pn = { Container: ln, Header: fn, Footer: un };
function In(r) {
  const {
    text: n,
    size: t = "lg",
    children: o,
    orientation: l = "top",
    className: u,
    ...f
  } = r;
  return /* @__PURE__ */ i.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${t} ${l} ${u}`,
      ...f,
      children: [
        o,
        /* @__PURE__ */ i.jsx("div", { className: "arkyn_tooltip_text", children: n })
      ]
    }
  );
}
function wn(r = "") {
  const n = er(), t = new URLSearchParams(n.search), o = r ? `${r}:` : "", l = (u) => {
    Object.entries(u).forEach(([f, c]) => {
      c === void 0 ? t.delete(`${o}${f}`) : t.set(`${o}${f}`, String(c));
    });
  };
  return {
    getParam: (u) => t.get(`${o}${u}`),
    getScopedSearch: (u) => {
      l(u);
      let f = t.toString();
      return f && (f = "?" + f), f;
    }
  };
}
export {
  gn as Badge,
  Nn as Breadcrumb,
  $n as BreadcrumbLink,
  bn as Button,
  _n as Checkbox,
  xn as Divider,
  Sn as FormController,
  Cn as FormError,
  kn as FormLabel,
  jn as IconButton,
  Rn as Input,
  Pn as Modal,
  En as Select,
  yn as Skeleton,
  In as Tooltip,
  wn as useScopedParams
};
