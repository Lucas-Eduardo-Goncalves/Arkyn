import He, { createContext as Ze, useRef as ue, useId as wr, useContext as Qe, useState as Q, forwardRef as Or } from "react";
import { Loader2 as ae, Check as er, ChevronDown as Fr, ChevronRight as Ue, X as Tr } from "lucide-react";
import { useActionData as Lr, useLocation as rr, Link as zr } from "@remix-run/react";
import { InputMask as Dr } from "@react-input/mask";
import { AnimatePresence as Wr, motion as Ke } from "framer-motion";
var Ne = { exports: {} }, me = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Je;
function Ar() {
  if (Je)
    return me;
  Je = 1;
  var r = He, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, l = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(a, d, h) {
    var p, x = {}, _ = null, C = null;
    h !== void 0 && (_ = "" + h), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (p in d)
      i.call(d, p) && !u.hasOwnProperty(p) && (x[p] = d[p]);
    if (a && a.defaultProps)
      for (p in d = a.defaultProps, d)
        x[p] === void 0 && (x[p] = d[p]);
    return { $$typeof: n, type: a, key: _, ref: C, props: x, _owner: l.current };
  }
  return me.Fragment = t, me.jsx = f, me.jsxs = f, me;
}
var pe = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qe;
function Br() {
  return qe || (qe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = He, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), a = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), p = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), E = Symbol.iterator, j = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = E && e[E] || e[j];
      return typeof s == "function" ? s : null;
    }
    var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var s = arguments.length, c = new Array(s > 1 ? s - 1 : 0), m = 1; m < s; m++)
          c[m - 1] = arguments[m];
        $("error", e, c);
      }
    }
    function $(e, s, c) {
      {
        var m = g.ReactDebugCurrentFrame, k = m.getStackAddendum();
        k !== "" && (s += "%s", c = c.concat([k]));
        var N = c.map(function(S) {
          return String(S);
        });
        N.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var P = !1, I = !1, L = !1, w = !1, z = !1, V;
    V = Symbol.for("react.module.reference");
    function Y(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || z || e === l || e === h || e === p || w || e === C || P || I || L || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === x || e.$$typeof === f || e.$$typeof === a || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === V || e.getModuleId !== void 0));
    }
    function O(e, s, c) {
      var m = e.displayName;
      if (m)
        return m;
      var k = s.displayName || s.name || "";
      return k !== "" ? c + "(" + k + ")" : c;
    }
    function M(e) {
      return e.displayName || "Context";
    }
    function y(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case i:
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
          case a:
            var s = e;
            return M(s) + ".Consumer";
          case f:
            var c = e;
            return M(c._context) + ".Provider";
          case d:
            return O(e, e.render, "ForwardRef");
          case x:
            var m = e.displayName || null;
            return m !== null ? m : y(e.type) || "Memo";
          case _: {
            var k = e, N = k._payload, S = k._init;
            try {
              return y(S(N));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var D = Object.assign, F = 0, B, H, re, ne, te, Z, W;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function G() {
      {
        if (F === 0) {
          B = console.log, H = console.info, re = console.warn, ne = console.error, te = console.group, Z = console.groupCollapsed, W = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: q,
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
        F++;
      }
    }
    function fe() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: D({}, e, {
              value: B
            }),
            info: D({}, e, {
              value: H
            }),
            warn: D({}, e, {
              value: re
            }),
            error: D({}, e, {
              value: ne
            }),
            group: D({}, e, {
              value: te
            }),
            groupCollapsed: D({}, e, {
              value: Z
            }),
            groupEnd: D({}, e, {
              value: W
            })
          });
        }
        F < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = g.ReactCurrentDispatcher, ee;
    function ve(e, s, c) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (k) {
            var m = k.stack.trim().match(/\n( *(at )?)/);
            ee = m && m[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var Se = !1, ge;
    {
      var ar = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new ar();
    }
    function Ie(e, s) {
      if (!e || Se)
        return "";
      {
        var c = ge.get(e);
        if (c !== void 0)
          return c;
      }
      var m;
      Se = !0;
      var k = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var N;
      N = K.current, K.current = null, G();
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
            } catch (J) {
              m = J;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (J) {
              m = J;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            m = J;
          }
          e();
        }
      } catch (J) {
        if (J && m && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), U = m.stack.split(`
`), T = b.length - 1, A = U.length - 1; T >= 1 && A >= 0 && b[T] !== U[A]; )
            A--;
          for (; T >= 1 && A >= 0; T--, A--)
            if (b[T] !== U[A]) {
              if (T !== 1 || A !== 1)
                do
                  if (T--, A--, A < 0 || b[T] !== U[A]) {
                    var X = `
` + b[T].replace(" at new ", " at ");
                    return e.displayName && X.includes("<anonymous>") && (X = X.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, X), X;
                  }
                while (T >= 1 && A >= 0);
              break;
            }
        }
      } finally {
        Se = !1, K.current = N, fe(), Error.prepareStackTrace = k;
      }
      var le = e ? e.displayName || e.name : "", ie = le ? ve(le) : "";
      return typeof e == "function" && ge.set(e, ie), ie;
    }
    function cr(e, s, c) {
      return Ie(e, !1);
    }
    function lr(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function xe(e, s, c) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ie(e, lr(e));
      if (typeof e == "string")
        return ve(e);
      switch (e) {
        case h:
          return ve("Suspense");
        case p:
          return ve("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return cr(e.render);
          case x:
            return xe(e.type, s, c);
          case _: {
            var m = e, k = m._payload, N = m._init;
            try {
              return xe(N(k), s, c);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, we = {}, Oe = g.ReactDebugCurrentFrame;
    function ye(e) {
      if (e) {
        var s = e._owner, c = xe(e.type, e._source, s ? s.type : null);
        Oe.setExtraStackFrame(c);
      } else
        Oe.setExtraStackFrame(null);
    }
    function ur(e, s, c, m, k) {
      {
        var N = Function.call.bind(de);
        for (var S in e)
          if (N(e, S)) {
            var b = void 0;
            try {
              if (typeof e[S] != "function") {
                var U = Error((m || "React class") + ": " + c + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              b = e[S](s, S, m, c, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              b = T;
            }
            b && !(b instanceof Error) && (ye(k), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", m || "React class", c, S, typeof b), ye(null)), b instanceof Error && !(b.message in we) && (we[b.message] = !0, ye(k), v("Failed %s type: %s", c, b.message), ye(null));
          }
      }
    }
    var fr = Array.isArray;
    function _e(e) {
      return fr(e);
    }
    function dr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, c = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return c;
      }
    }
    function hr(e) {
      try {
        return Fe(e), !1;
      } catch {
        return !0;
      }
    }
    function Fe(e) {
      return "" + e;
    }
    function Te(e) {
      if (hr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dr(e)), Fe(e);
    }
    var he = g.ReactCurrentOwner, mr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Le, ze, Ce;
    Ce = {};
    function pr(e) {
      if (de.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function vr(e) {
      if (de.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function gr(e, s) {
      if (typeof e.ref == "string" && he.current && s && he.current.stateNode !== s) {
        var c = y(he.current.type);
        Ce[c] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(he.current.type), e.ref), Ce[c] = !0);
      }
    }
    function xr(e, s) {
      {
        var c = function() {
          Le || (Le = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: c,
          configurable: !0
        });
      }
    }
    function yr(e, s) {
      {
        var c = function() {
          ze || (ze = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        c.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: c,
          configurable: !0
        });
      }
    }
    var br = function(e, s, c, m, k, N, S) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: c,
        props: S,
        // Record the component responsible for creating this element.
        _owner: N
      };
      return b._store = {}, Object.defineProperty(b._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(b, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: m
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function Sr(e, s, c, m, k) {
      {
        var N, S = {}, b = null, U = null;
        c !== void 0 && (Te(c), b = "" + c), vr(s) && (Te(s.key), b = "" + s.key), pr(s) && (U = s.ref, gr(s, k));
        for (N in s)
          de.call(s, N) && !mr.hasOwnProperty(N) && (S[N] = s[N]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (N in T)
            S[N] === void 0 && (S[N] = T[N]);
        }
        if (b || U) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && xr(S, A), U && yr(S, A);
        }
        return br(e, b, U, k, m, he.current, S);
      }
    }
    var ke = g.ReactCurrentOwner, De = g.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var s = e._owner, c = xe(e.type, e._source, s ? s.type : null);
        De.setExtraStackFrame(c);
      } else
        De.setExtraStackFrame(null);
    }
    var je;
    je = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function We() {
      {
        if (ke.current) {
          var e = y(ke.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function _r(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), c = e.lineNumber;
          return `

Check your code at ` + s + ":" + c + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function Cr(e) {
      {
        var s = We();
        if (!s) {
          var c = typeof e == "string" ? e : e.displayName || e.name;
          c && (s = `

Check the top-level render call using <` + c + ">.");
        }
        return s;
      }
    }
    function Be(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var c = Cr(s);
        if (Ae[c])
          return;
        Ae[c] = !0;
        var m = "";
        e && e._owner && e._owner !== ke.current && (m = " It was passed a child from " + y(e._owner.type) + "."), ce(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', c, m), ce(null);
      }
    }
    function Ve(e, s) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var c = 0; c < e.length; c++) {
            var m = e[c];
            Re(m) && Be(m, s);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var k = R(e);
          if (typeof k == "function" && k !== e.entries)
            for (var N = k.call(e), S; !(S = N.next()).done; )
              Re(S.value) && Be(S.value, s);
        }
      }
    }
    function kr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var c;
        if (typeof s == "function")
          c = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === x))
          c = s.propTypes;
        else
          return;
        if (c) {
          var m = y(s);
          ur(c, e.props, "prop", m, e);
        } else if (s.PropTypes !== void 0 && !je) {
          je = !0;
          var k = y(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function jr(e) {
      {
        for (var s = Object.keys(e.props), c = 0; c < s.length; c++) {
          var m = s[c];
          if (m !== "children" && m !== "key") {
            ce(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", m), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var Ye = {};
    function Me(e, s, c, m, k, N) {
      {
        var S = Y(e);
        if (!S) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = _r(k);
          U ? b += U : b += We();
          var T;
          e === null ? T = "null" : _e(e) ? T = "array" : e !== void 0 && e.$$typeof === n ? (T = "<" + (y(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, b);
        }
        var A = Sr(e, s, c, k, N);
        if (A == null)
          return A;
        if (S) {
          var X = s.children;
          if (X !== void 0)
            if (m)
              if (_e(X)) {
                for (var le = 0; le < X.length; le++)
                  Ve(X[le], e);
                Object.freeze && Object.freeze(X);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ve(X, e);
        }
        if (de.call(s, "key")) {
          var ie = y(e), J = Object.keys(s).filter(function(Ir) {
            return Ir !== "key";
          }), Ee = J.length > 0 ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ye[ie + Ee]) {
            var Pr = J.length > 0 ? "{" + J.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, ie, Pr, ie), Ye[ie + Ee] = !0;
          }
        }
        return e === i ? jr(A) : kr(A), A;
      }
    }
    function Rr(e, s, c) {
      return Me(e, s, c, !0);
    }
    function Er(e, s, c) {
      return Me(e, s, c, !1);
    }
    var Nr = Er, $r = Rr;
    pe.Fragment = i, pe.jsx = Nr, pe.jsxs = $r;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Ne.exports = Ar() : Ne.exports = Br();
var o = Ne.exports;
function be(r, n) {
  return n ? /* @__PURE__ */ o.jsx(n, { size: r, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Vr(r) {
  const {
    variant: n = "ghost",
    scheme: t = "primary",
    size: i = "md",
    leftIcon: l,
    rightIcon: u,
    className: f = "",
    children: a,
    ...d
  } = r, p = { md: 12, lg: 14 }[i];
  return {
    className: `arkyn_badge ${n} ${t} ${i} ${f}`.trim(),
    children: a,
    leftIcon: be(p, l),
    rightIcon: be(p, u),
    ...d
  };
}
function gn(r) {
  const { leftIcon: n, children: t, rightIcon: i, ...l } = Vr(r);
  return /* @__PURE__ */ o.jsxs("div", { ...l, children: [
    n,
    t,
    i
  ] });
}
function xn(r) {
  const {
    className: n,
    orientation: t = "horizontal",
    ...i
  } = r, l = `arkyn_divider ${t} ${n}`;
  return /* @__PURE__ */ o.jsx("div", { className: l, ...i });
}
function yn({ className: r, ...n }) {
  const t = "arkyn_skeleton " + r;
  return /* @__PURE__ */ o.jsx("div", { className: t.trim(), ...n });
}
function Yr(r) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: i = "solid",
    loadingText: l,
    size: u = "md",
    leftIcon: f,
    rightIcon: a,
    disabled: d,
    className: h = "",
    children: p,
    ...x
  } = r, C = { xs: 12, sm: 16, md: 20, lg: 24 }[u];
  return {
    className: `arkyn_button loading_text_${!!l} ${i} ${t} ${u} loading_${n} ${h}`.trim(),
    loadingText: l,
    children: p,
    iconSize: C,
    disabled: d || n,
    leftIcon: be(C, f),
    rightIcon: be(C, a),
    ...x
  };
}
function bn(r) {
  const { leftIcon: n, rightIcon: t, iconSize: i, children: l, loadingText: u, ...f } = Yr(r);
  return /* @__PURE__ */ o.jsxs("button", { ...f, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ o.jsx(ae, { size: i, strokeWidth: 2.5 }),
      u && u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "content", children: [
      n,
      l,
      t
    ] })
  ] });
}
const nr = Ze({});
function Sn({ children: r, ...n }) {
  var a, d;
  const t = Lr(), i = ue(null), l = ((a = i.current) == null ? void 0 : a.name) || "", u = ((d = t == null ? void 0 : t.fieldErrors) == null ? void 0 : d[l]) || null, f = wr();
  return /* @__PURE__ */ o.jsx(nr.Provider, { value: { error: u, id: f, inputRef: i }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...n, children: r }) });
}
function oe() {
  return Qe(nr);
}
function _n(r) {
  const {
    name: n,
    className: t = "",
    size: i = "md",
    isError: l,
    defaultChecked: u = !1,
    checked: f = null,
    onCheck: a,
    value: d,
    ...h
  } = r, { id: p, inputRef: x, error: _ } = oe(), C = l || !!_, [E, j] = Q(u || !1), R = typeof f == "boolean" ? f : E, g = `arkyn_checkbox ${i} ${C ? "error" : ""} ${R ? "checked" : ""} ${t}`;
  function v() {
    const $ = E;
    j(!$), a && a($ ? "" : d || "checked");
  }
  return /* @__PURE__ */ o.jsxs("div", { className: g, onClick: v, ...h, children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "hidden",
        name: n,
        id: p,
        ref: x,
        value: R ? d || "checked" : ""
      }
    ),
    /* @__PURE__ */ o.jsx(er, {})
  ] });
}
function Cn({ children: r }) {
  const { error: n } = oe();
  return r ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: r }) : n ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Mr(r) {
  const { showAsterisk: n = !1, className: t = "", ...i } = r;
  return {
    className: `arkyn_form_label ${n ? "show-asterisk" : ""} ${t}`.trim(),
    ...i
  };
}
function kn(r) {
  const { id: n } = oe();
  return /* @__PURE__ */ o.jsx("label", { ...Mr(r), htmlFor: n });
}
const Ge = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function jn(r) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: i = "solid",
    size: l = "md",
    icon: u,
    disabled: f,
    className: a = "",
    ...d
  } = r, h = `arkyn_icon_button ${i} ${t} ${l} loading_${n} ${a}`;
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      disabled: f || n,
      className: h.trim(),
      ...d,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(ae, { size: Ge[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + l, children: /* @__PURE__ */ o.jsx(u, { size: Ge[l], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(r, n, t) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: r });
  const i = r;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(i, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function $e(r) {
  return r && r.replace(/[^0-9]/g, "");
}
function tr(r, n) {
  let t = "", i = 0;
  return Array.from(r).forEach((l, u) => {
    n[u + i].match(/[0-9]/) || (t += n[u + i], i++), t += l;
  }), t;
}
function sr(r) {
  return r.length > 11 ? "CNPJ" : "CPF";
}
const Pe = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, or = $e(Pe.CNPJ).length;
function Ur(r, n) {
  const {
    isLoading: t,
    isError: i,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: a,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: x,
    defaultValue: _,
    readOnly: C,
    onFocus: E,
    onBlur: j,
    title: R,
    style: g,
    onChange: v,
    ...$
  } = r;
  function P(D) {
    let F = $e(D);
    const B = sr(F);
    if (!(F.length > or))
      return F = tr(F, Pe[B]), F;
  }
  const I = p ? "right" : "left", O = `arkyn_input ${a ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${x || C || t ? "opacity" : ""} ${i ? "errored" : ""} ${n ? "focused" : ""} ${u}`, y = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: O,
    prefix: se(a, y, "prefix"),
    sufix: se(d, y, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    defaultValue: P(_ || ""),
    disabled: x,
    readOnly: C,
    onFocus: E,
    onBlur: j,
    title: R,
    style: g,
    onChange: v,
    loadingPosition: I,
    iconSize: y,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: y, strokeWidth: 2.5 }),
    ...$
  };
}
function Kr(r) {
  const [n, t] = Q(!1), i = ue(null), { inputRef: l, id: u, error: f } = oe(), a = l || i, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: x,
    className: _,
    prefix: C,
    sufix: E,
    iconSize: j,
    loadingPosition: R,
    isLoading: g,
    LeftIcon: v,
    readOnly: $,
    onFocus: P,
    onBlur: I,
    RightIcon: L,
    Spinner: w,
    onChange: z,
    value: V,
    defaultValue: Y,
    ...O
  } = Ur({ ...r, id: u, isError: d }, n), [M, y] = Q(Y), D = v && !g, F = L && !g, B = R === "left" && g, H = R === "right" && g;
  function re() {
    h || !(a != null && a.current) || (t(!0), a.current.focus());
  }
  function ne(W) {
    let q = $e(W.target.value);
    const G = sr(q);
    q.length > or || (q = tr(q, Pe[G]), W.target.value = q, y(q), z && z(W));
  }
  function te(W) {
    t(!0), P && P(W);
  }
  function Z(W) {
    t(!1), I && I(W);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: p,
      style: x,
      onClick: re,
      className: _,
      children: [
        C,
        B && w,
        D && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: h || g,
            readOnly: $,
            ref: a,
            value: V || M,
            onFocus: te,
            onChange: ne,
            onBlur: Z,
            ...O
          }
        ),
        F && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        H && w,
        E
      ]
    }
  );
}
function Jr(r, n) {
  const {
    isLoading: t,
    isError: i,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: a,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    showCents: g = !1,
    max: v = 1e9,
    onChange: $,
    ...P
  } = r, I = p ? "right" : "left", O = `arkyn_input ${a ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${x || _ || t ? "opacity" : ""} ${i ? "errored" : ""} ${n ? "focused" : ""} ${u}`, y = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: O,
    prefix: se(a, y, "prefix"),
    sufix: se(d, y, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    max: v,
    onChange: $,
    showCents: g,
    loadingPosition: I,
    iconSize: y,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: y, strokeWidth: 2.5 }),
    ...P
  };
}
const qr = /^[1-9]{1}$/, Gr = /^[0-9]{1}$/, Xe = 8;
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
  const { currencyValue: n, event: t, max: i, setCurrencyValue: l } = r, { key: u, keyCode: f } = t;
  if (n === 0 && !qr.test(u) || n !== 0 && !Gr.test(u) && f !== Xe)
    return;
  const a = n.toString();
  let d;
  if (f !== Xe) {
    const h = n === 0 ? u : `${a}${u}`;
    d = Number.parseInt(h, 10);
  } else {
    const h = a.slice(0, -1);
    d = h === "" ? 0 : Number.parseInt(h, 10);
  }
  d > Number(i) || l(d);
}
function Zr(r) {
  const [n, t] = Q(!1), [i, l] = Q(r.defaultValue || 0), u = ue(null), { inputRef: f, id: a, error: d } = oe(), h = f || u, p = r.isError || !!d, {
    disabled: x,
    title: _,
    style: C,
    className: E,
    prefix: j,
    sufix: R,
    iconSize: g,
    loadingPosition: v,
    isLoading: $,
    LeftIcon: P,
    readOnly: I,
    onFocus: L,
    onBlur: w,
    RightIcon: z,
    Spinner: V,
    value: Y,
    max: O,
    onKeyDown: M,
    onChange: y,
    showCents: D,
    ...F
  } = Jr({ ...r, id: a, isError: p }, n), B = P && !$, H = z && !$, re = v === "left" && $, ne = v === "right" && $;
  function te() {
    x || !(h != null && h.current) || (t(!0), h.current.focus());
  }
  function Z(G) {
    Hr({ currencyValue: i, event: G, max: O, setCurrencyValue: l }), y && y(i), M && M(G);
  }
  function W(G) {
    t(!0), L && L(G);
  }
  function q(G) {
    t(!1), w && w(G);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: _,
      style: C,
      onClick: te,
      className: E,
      children: [
        j,
        re && V,
        B && /* @__PURE__ */ o.jsx(P, { size: g, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: Xr(Y || i, D),
            onKeyDown: Z,
            disabled: x || $,
            readOnly: I,
            ref: h,
            onFocus: W,
            onBlur: q,
            onChange: () => {
            },
            ...F
          }
        ),
        ne && V,
        H && /* @__PURE__ */ o.jsx(z, { size: g, strokeWidth: 2.5 }),
        R
      ]
    }
  );
}
function Qr(r, n) {
  const {
    isLoading: t,
    isError: i,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: a,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    showMask: v = !1,
    type: $,
    ...P
  } = r, I = p ? "right" : "left", O = `arkyn_input ${a ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${x || _ || t ? "opacity" : ""} ${i ? "errored" : ""} ${n ? "focused" : ""} ${u}`, y = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: O,
    prefix: se(a, y, "prefix"),
    sufix: se(d, y, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    loadingPosition: I,
    iconSize: y,
    showMask: v,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: y, strokeWidth: 2.5 }),
    ...P
  };
}
const en = Or((r, n) => /* @__PURE__ */ o.jsx("input", { ref: n, ...r }));
function rn(r) {
  const [n, t] = Q(!1), i = ue(null), { inputRef: l, id: u, error: f } = oe(), a = l || i, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: x,
    className: _,
    prefix: C,
    sufix: E,
    iconSize: j,
    loadingPosition: R,
    isLoading: g,
    LeftIcon: v,
    readOnly: $,
    onFocus: P,
    onBlur: I,
    RightIcon: L,
    Spinner: w,
    ...z
  } = Qr({ ...r, id: u, isError: d }, n), V = v && !g, Y = L && !g, O = R === "left" && g, M = R === "right" && g;
  function y() {
    h || !(a != null && a.current) || (t(!0), a.current.focus());
  }
  function D(B) {
    t(!0), P && P(B);
  }
  function F(B) {
    t(!1), I && I(B);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: p,
      style: x,
      onClick: y,
      className: _,
      children: [
        C,
        O && w,
        V && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          Dr,
          {
            component: en,
            ref: a,
            onFocus: D,
            onBlur: F,
            ...z
          }
        ),
        Y && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        M && w,
        E
      ]
    }
  );
}
function nn(r, n) {
  const {
    isLoading: t,
    isError: i,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: a,
    sufix: d,
    leftIcon: h,
    rightIcon: p,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    ...v
  } = r, $ = p ? "right" : "left", V = `arkyn_input ${a ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${l} ${x || _ || t ? "opacity" : ""} ${i ? "errored" : ""} ${n ? "focused" : ""} ${u}`, O = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: V,
    prefix: se(a, O, "prefix"),
    sufix: se(d, O, "sufix"),
    LeftIcon: h,
    RightIcon: p,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    loadingPosition: $,
    iconSize: O,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: O, strokeWidth: 2.5 }),
    ...v
  };
}
function tn(r) {
  const [n, t] = Q(!1), i = ue(null), { inputRef: l, id: u, error: f } = oe(), a = l || i, d = r.isError || !!f, {
    disabled: h,
    title: p,
    style: x,
    className: _,
    prefix: C,
    sufix: E,
    iconSize: j,
    loadingPosition: R,
    isLoading: g,
    LeftIcon: v,
    readOnly: $,
    onFocus: P,
    onBlur: I,
    RightIcon: L,
    Spinner: w,
    ...z
  } = nn({ ...r, id: u, isError: d }, n), V = v && !g, Y = L && !g, O = R === "left" && g, M = R === "right" && g;
  function y() {
    h || !(a != null && a.current) || (t(!0), a.current.focus());
  }
  function D(B) {
    t(!0), P && P(B);
  }
  function F(B) {
    t(!1), I && I(B);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: p,
      style: x,
      onClick: y,
      className: _,
      children: [
        C,
        O && w,
        V && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: h || g,
            readOnly: $,
            ref: a,
            onFocus: D,
            onBlur: F,
            ...z
          }
        ),
        Y && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        M && w,
        E
      ]
    }
  );
}
function Rn(r) {
  return r.type === "currency" ? /* @__PURE__ */ o.jsx(Zr, { ...r }) : r.type === "masked" ? /* @__PURE__ */ o.jsx(rn, { ...r }) : r.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(Kr, { ...r }) : /* @__PURE__ */ o.jsx(tn, { ...r });
}
function sn(r, n, t) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: r });
  const i = r;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(i, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function on(r, n) {
  const {
    isLoading: t,
    isError: i,
    size: l = "md",
    className: u = "",
    variant: f = "solid",
    prefix: a,
    leftIcon: d,
    disabled: h,
    readOnly: p,
    onFocus: x,
    onBlur: _,
    title: C,
    style: E,
    isSearchable: j = !1,
    ...R
  } = r, I = `arkyn_select ${a ? "hasPrefix" : ""} ${f} ${l} ${h || p || t ? "opacity" : ""} ${i ? "errored" : ""} ${n ? "focused" : ""} ${u}`, w = { md: 20, lg: 20 }[l];
  return {
    isLoading: t,
    className: I,
    prefix: sn(a, w, "prefix"),
    LeftIcon: d,
    disabled: h,
    readOnly: p,
    onFocus: x,
    onBlur: _,
    title: C,
    style: E,
    isSearchable: j,
    iconSize: w,
    Spinner: /* @__PURE__ */ o.jsx(ae, { className: "spinner", size: w, strokeWidth: 2.5 }),
    ...R
  };
}
function En(r) {
  var fe;
  const [n, t] = Q(!1), { inputRef: i, id: l, error: u } = oe(), f = ue(null), a = i || f, d = r.isError || !!u, {
    disabled: h,
    title: p,
    style: x,
    className: _,
    prefix: C,
    iconSize: E,
    isLoading: j,
    LeftIcon: R,
    value: g = null,
    defaultValue: v = "",
    readOnly: $,
    onFocus: P,
    onBlur: I,
    Spinner: L,
    name: w,
    isSearchable: z,
    placeholder: V,
    onSelect: Y,
    options: O,
    optionMaxHeight: M,
    ...y
  } = on({ ...r, id: l, isError: d }, n), [D, F] = Q(v), [B, H] = Q("");
  function re() {
    h || !(a != null && a.current) || (t(!0), a.current.focus());
  }
  function ne(K) {
    t(!0), P && P(K);
  }
  function te() {
    t(!1), I && a.current && a.current.blur();
  }
  const Z = typeof g == "string" ? g : D, W = ((fe = O.find((K) => K.value === Z)) == null ? void 0 : fe.label) || "", q = () => {
    if (z) {
      if (!n && W)
        return !0;
      if (!n && !W || n)
        return !1;
    }
    if (!z) {
      if (!n && W)
        return !0;
      if (!n && !W)
        return !1;
      if (n && W)
        return !0;
      if (n && !W)
        return !1;
    }
  }, G = O.filter((K) => z ? K.label.toLowerCase().includes(B.toLowerCase()) : !0);
  return /* @__PURE__ */ o.jsxs(o.Fragment, { children: [
    /* @__PURE__ */ o.jsxs(
      "section",
      {
        title: p,
        style: x,
        onClick: re,
        className: `${_} placeholder_dark_${q()}`,
        children: [
          C,
          R && /* @__PURE__ */ o.jsx(R, { size: E, strokeWidth: 2.5 }),
          /* @__PURE__ */ o.jsx(
            "input",
            {
              disabled: h || j,
              readOnly: !z,
              value: B || "",
              placeholder: W || V,
              ref: a,
              onFocus: ne,
              onBlur: () => H(""),
              ...y,
              onChange: (K) => H(K.target.value)
            }
          ),
          /* @__PURE__ */ o.jsx("input", { type: "hidden", name: w, value: Z || "", readOnly: !0 }),
          n && /* @__PURE__ */ o.jsxs(
            "ul",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: M },
              children: [
                G.map(({ label: K, value: ee }) => /* @__PURE__ */ o.jsxs(
                  "li",
                  {
                    className: Z === ee ? "active" : "",
                    onClick: () => {
                      F(D !== ee ? ee : ""), Y && Y({ label: K, value: ee });
                    },
                    children: [
                      K,
                      " ",
                      /* @__PURE__ */ o.jsx(er, {})
                    ]
                  },
                  ee
                )),
                G.length <= 0 && /* @__PURE__ */ o.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !j && /* @__PURE__ */ o.jsx(
            Fr,
            {
              className: "arkyn_select_arrow",
              size: E,
              strokeWidth: 2.5
            }
          ),
          j && L
        ]
      }
    ),
    n && /* @__PURE__ */ o.jsx("aside", { className: "arkyn_select_overlay", onClick: te })
  ] });
}
function an(r) {
  const { className: n = "", ...t } = r;
  return { className: `arkyn_breadcrumb ${n}`.trim(), ...t };
}
function cn(r) {
  const { pathname: n } = rr(), {
    className: t = "",
    disabled: i = !1,
    to: l,
    ...u
  } = r, f = n === l ? "active" : "inactive", a = `arkyn_breadcrumb_link ${f} ${t}`;
  return {
    to: l,
    className: a.trim(),
    disabled: i || f === "active",
    ...u
  };
}
function Nn(r) {
  const { className: n, ...t } = an(r);
  return /* @__PURE__ */ o.jsx("nav", { className: n, ...t });
}
function $n(r) {
  const { children: n, className: t, disabled: i, ...l } = cn(r);
  return i ? /* @__PURE__ */ o.jsxs("p", { className: t, children: [
    /* @__PURE__ */ o.jsx(Ue, { size: 14, strokeWidth: 2.5 }),
    n
  ] }) : /* @__PURE__ */ o.jsxs(zr, { className: t, ...l, children: [
    /* @__PURE__ */ o.jsx(Ue, { size: 14, strokeWidth: 2.5 }),
    n
  ] });
}
const ir = Ze({});
function ln(r) {
  const {
    isVisibled: n,
    makeInvisible: t,
    children: i,
    className: l = "",
    ...u
  } = r, a = `arkyn_modal_container ${n ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ o.jsx(ir.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ o.jsx(Wr, { children: n && /* @__PURE__ */ o.jsxs("aside", { className: a.trim(), ...u, children: [
    /* @__PURE__ */ o.jsx(
      Ke.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: t
      }
    ),
    /* @__PURE__ */ o.jsx(
      Ke.div,
      {
        className: "content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: i
      }
    )
  ] }) }) });
}
function un(r) {
  const { alignment: n = "right", className: t, ...i } = r, l = `arkyn_modal_footer ${n} ${t}`;
  return /* @__PURE__ */ o.jsx("footer", { className: l.trim(), ...i });
}
function fn(r) {
  const { showCloseButton: n, className: t, children: i, ...l } = r, { makeInvisible: u } = Qe(ir), a = `arkyn_modal_header ${n ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ o.jsxs("header", { className: a.trim(), ...l, children: [
    i,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: u, children: /* @__PURE__ */ o.jsx(Tr, { size: 24 }) })
  ] });
}
const Pn = { Container: ln, Header: fn, Footer: un };
function In(r) {
  const {
    text: n,
    size: t = "lg",
    children: i,
    orientation: l = "top",
    className: u,
    ...f
  } = r;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${t} ${l} ${u}`,
      ...f,
      children: [
        i,
        /* @__PURE__ */ o.jsx("div", { className: "arkyn_tooltip_text", children: n })
      ]
    }
  );
}
function wn(r = "") {
  const n = rr(), t = new URLSearchParams(n.search), i = r ? `${r}:` : "", l = (u) => {
    Object.entries(u).forEach(([f, a]) => {
      a === void 0 ? t.delete(`${i}${f}`) : t.set(`${i}${f}`, String(a));
    });
  };
  return {
    getParam: (u) => t.get(`${i}${u}`),
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
