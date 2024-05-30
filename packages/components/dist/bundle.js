import Qe, { createContext as $e, useRef as ue, useId as Or, useContext as Pe, useState as H, forwardRef as Fr } from "react";
import { Loader2 as ae, Check as er, ChevronDown as Tr, ChevronRight as Je, X as Lr } from "lucide-react";
import { useActionData as zr, useLocation as rr, Link as Dr } from "@remix-run/react";
import { InputMask as Wr } from "@react-input/mask";
import { AnimatePresence as Ar, motion as qe } from "framer-motion";
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
var Ge;
function Br() {
  if (Ge)
    return me;
  Ge = 1;
  var r = Qe, n = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, f = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(i, u, h) {
    var m, x = {}, _ = null, C = null;
    h !== void 0 && (_ = "" + h), u.key !== void 0 && (_ = "" + u.key), u.ref !== void 0 && (C = u.ref);
    for (m in u)
      a.call(u, m) && !f.hasOwnProperty(m) && (x[m] = u[m]);
    if (i && i.defaultProps)
      for (m in u = i.defaultProps, u)
        x[m] === void 0 && (x[m] = u[m]);
    return { $$typeof: n, type: i, key: _, ref: C, props: x, _owner: c.current };
  }
  return me.Fragment = t, me.jsx = d, me.jsxs = d, me;
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
var Xe;
function Mr() {
  return Xe || (Xe = 1, process.env.NODE_ENV !== "production" && function() {
    var r = Qe, n = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), f = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), i = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), E = Symbol.iterator, j = "@@iterator";
    function R(e) {
      if (e === null || typeof e != "object")
        return null;
      var s = E && e[E] || e[j];
      return typeof s == "function" ? s : null;
    }
    var g = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var s = arguments.length, l = new Array(s > 1 ? s - 1 : 0), p = 1; p < s; p++)
          l[p - 1] = arguments[p];
        $("error", e, l);
      }
    }
    function $(e, s, l) {
      {
        var p = g.ReactDebugCurrentFrame, k = p.getStackAddendum();
        k !== "" && (s += "%s", l = l.concat([k]));
        var N = l.map(function(S) {
          return String(S);
        });
        N.unshift("Warning: " + s), Function.prototype.apply.call(console[e], console, N);
      }
    }
    var P = !1, I = !1, L = !1, w = !1, z = !1, M;
    M = Symbol.for("react.module.reference");
    function V(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === f || z || e === c || e === h || e === m || w || e === C || P || I || L || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === x || e.$$typeof === d || e.$$typeof === i || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === M || e.getModuleId !== void 0));
    }
    function O(e, s, l) {
      var p = e.displayName;
      if (p)
        return p;
      var k = s.displayName || s.name || "";
      return k !== "" ? l + "(" + k + ")" : l;
    }
    function Y(e) {
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
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case f:
          return "Profiler";
        case c:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case i:
            var s = e;
            return Y(s) + ".Consumer";
          case d:
            var l = e;
            return Y(l._context) + ".Provider";
          case u:
            return O(e, e.render, "ForwardRef");
          case x:
            var p = e.displayName || null;
            return p !== null ? p : y(e.type) || "Memo";
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
    var D = Object.assign, F = 0, B, Z, re, ne, te, Q, W;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function G() {
      {
        if (F === 0) {
          B = console.log, Z = console.info, re = console.warn, ne = console.error, te = console.group, Q = console.groupCollapsed, W = console.groupEnd;
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
              value: Z
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
              value: Q
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
    function ve(e, s, l) {
      {
        if (ee === void 0)
          try {
            throw Error();
          } catch (k) {
            var p = k.stack.trim().match(/\n( *(at )?)/);
            ee = p && p[1] || "";
          }
        return `
` + ee + e;
      }
    }
    var Se = !1, ge;
    {
      var cr = typeof WeakMap == "function" ? WeakMap : Map;
      ge = new cr();
    }
    function Oe(e, s) {
      if (!e || Se)
        return "";
      {
        var l = ge.get(e);
        if (l !== void 0)
          return l;
      }
      var p;
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
              p = J;
            }
            Reflect.construct(e, [], S);
          } else {
            try {
              S.call();
            } catch (J) {
              p = J;
            }
            e.call(S.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (J) {
            p = J;
          }
          e();
        }
      } catch (J) {
        if (J && p && typeof J.stack == "string") {
          for (var b = J.stack.split(`
`), U = p.stack.split(`
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
    function lr(e, s, l) {
      return Oe(e, !1);
    }
    function ur(e) {
      var s = e.prototype;
      return !!(s && s.isReactComponent);
    }
    function xe(e, s, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Oe(e, ur(e));
      if (typeof e == "string")
        return ve(e);
      switch (e) {
        case h:
          return ve("Suspense");
        case m:
          return ve("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return lr(e.render);
          case x:
            return xe(e.type, s, l);
          case _: {
            var p = e, k = p._payload, N = p._init;
            try {
              return xe(N(k), s, l);
            } catch {
            }
          }
        }
      return "";
    }
    var de = Object.prototype.hasOwnProperty, Fe = {}, Te = g.ReactDebugCurrentFrame;
    function ye(e) {
      if (e) {
        var s = e._owner, l = xe(e.type, e._source, s ? s.type : null);
        Te.setExtraStackFrame(l);
      } else
        Te.setExtraStackFrame(null);
    }
    function fr(e, s, l, p, k) {
      {
        var N = Function.call.bind(de);
        for (var S in e)
          if (N(e, S)) {
            var b = void 0;
            try {
              if (typeof e[S] != "function") {
                var U = Error((p || "React class") + ": " + l + " type `" + S + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[S] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw U.name = "Invariant Violation", U;
              }
              b = e[S](s, S, p, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (T) {
              b = T;
            }
            b && !(b instanceof Error) && (ye(k), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", p || "React class", l, S, typeof b), ye(null)), b instanceof Error && !(b.message in Fe) && (Fe[b.message] = !0, ye(k), v("Failed %s type: %s", l, b.message), ye(null));
          }
      }
    }
    var dr = Array.isArray;
    function _e(e) {
      return dr(e);
    }
    function hr(e) {
      {
        var s = typeof Symbol == "function" && Symbol.toStringTag, l = s && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function mr(e) {
      try {
        return Le(e), !1;
      } catch {
        return !0;
      }
    }
    function Le(e) {
      return "" + e;
    }
    function ze(e) {
      if (mr(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", hr(e)), Le(e);
    }
    var he = g.ReactCurrentOwner, pr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, De, We, Ce;
    Ce = {};
    function vr(e) {
      if (de.call(e, "ref")) {
        var s = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function gr(e) {
      if (de.call(e, "key")) {
        var s = Object.getOwnPropertyDescriptor(e, "key").get;
        if (s && s.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function xr(e, s) {
      if (typeof e.ref == "string" && he.current && s && he.current.stateNode !== s) {
        var l = y(he.current.type);
        Ce[l] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', y(he.current.type), e.ref), Ce[l] = !0);
      }
    }
    function yr(e, s) {
      {
        var l = function() {
          De || (De = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function br(e, s) {
      {
        var l = function() {
          We || (We = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", s));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var Sr = function(e, s, l, p, k, N, S) {
      var b = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: s,
        ref: l,
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
        value: p
      }), Object.defineProperty(b, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.freeze && (Object.freeze(b.props), Object.freeze(b)), b;
    };
    function _r(e, s, l, p, k) {
      {
        var N, S = {}, b = null, U = null;
        l !== void 0 && (ze(l), b = "" + l), gr(s) && (ze(s.key), b = "" + s.key), vr(s) && (U = s.ref, xr(s, k));
        for (N in s)
          de.call(s, N) && !pr.hasOwnProperty(N) && (S[N] = s[N]);
        if (e && e.defaultProps) {
          var T = e.defaultProps;
          for (N in T)
            S[N] === void 0 && (S[N] = T[N]);
        }
        if (b || U) {
          var A = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          b && yr(S, A), U && br(S, A);
        }
        return Sr(e, b, U, k, p, he.current, S);
      }
    }
    var ke = g.ReactCurrentOwner, Ae = g.ReactDebugCurrentFrame;
    function ce(e) {
      if (e) {
        var s = e._owner, l = xe(e.type, e._source, s ? s.type : null);
        Ae.setExtraStackFrame(l);
      } else
        Ae.setExtraStackFrame(null);
    }
    var je;
    je = !1;
    function Re(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Be() {
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
    function Cr(e) {
      {
        if (e !== void 0) {
          var s = e.fileName.replace(/^.*[\\\/]/, ""), l = e.lineNumber;
          return `

Check your code at ` + s + ":" + l + ".";
        }
        return "";
      }
    }
    var Me = {};
    function kr(e) {
      {
        var s = Be();
        if (!s) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (s = `

Check the top-level render call using <` + l + ">.");
        }
        return s;
      }
    }
    function Ve(e, s) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = kr(s);
        if (Me[l])
          return;
        Me[l] = !0;
        var p = "";
        e && e._owner && e._owner !== ke.current && (p = " It was passed a child from " + y(e._owner.type) + "."), ce(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, p), ce(null);
      }
    }
    function Ye(e, s) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var l = 0; l < e.length; l++) {
            var p = e[l];
            Re(p) && Ve(p, s);
          }
        else if (Re(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var k = R(e);
          if (typeof k == "function" && k !== e.entries)
            for (var N = k.call(e), S; !(S = N.next()).done; )
              Re(S.value) && Ve(S.value, s);
        }
      }
    }
    function jr(e) {
      {
        var s = e.type;
        if (s == null || typeof s == "string")
          return;
        var l;
        if (typeof s == "function")
          l = s.propTypes;
        else if (typeof s == "object" && (s.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        s.$$typeof === x))
          l = s.propTypes;
        else
          return;
        if (l) {
          var p = y(s);
          fr(l, e.props, "prop", p, e);
        } else if (s.PropTypes !== void 0 && !je) {
          je = !0;
          var k = y(s);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", k || "Unknown");
        }
        typeof s.getDefaultProps == "function" && !s.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(e) {
      {
        for (var s = Object.keys(e.props), l = 0; l < s.length; l++) {
          var p = s[l];
          if (p !== "children" && p !== "key") {
            ce(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", p), ce(null);
            break;
          }
        }
        e.ref !== null && (ce(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    var Ue = {};
    function Ke(e, s, l, p, k, N) {
      {
        var S = V(e);
        if (!S) {
          var b = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (b += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var U = Cr(k);
          U ? b += U : b += Be();
          var T;
          e === null ? T = "null" : _e(e) ? T = "array" : e !== void 0 && e.$$typeof === n ? (T = "<" + (y(e.type) || "Unknown") + " />", b = " Did you accidentally export a JSX literal instead of a component?") : T = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", T, b);
        }
        var A = _r(e, s, l, k, N);
        if (A == null)
          return A;
        if (S) {
          var X = s.children;
          if (X !== void 0)
            if (p)
              if (_e(X)) {
                for (var le = 0; le < X.length; le++)
                  Ye(X[le], e);
                Object.freeze && Object.freeze(X);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ye(X, e);
        }
        if (de.call(s, "key")) {
          var ie = y(e), J = Object.keys(s).filter(function(wr) {
            return wr !== "key";
          }), Ee = J.length > 0 ? "{key: someKey, " + J.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ue[ie + Ee]) {
            var Ir = J.length > 0 ? "{" + J.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, ie, Ir, ie), Ue[ie + Ee] = !0;
          }
        }
        return e === a ? Rr(A) : jr(A), A;
      }
    }
    function Er(e, s, l) {
      return Ke(e, s, l, !0);
    }
    function Nr(e, s, l) {
      return Ke(e, s, l, !1);
    }
    var $r = Nr, Pr = Er;
    pe.Fragment = a, pe.jsx = $r, pe.jsxs = Pr;
  }()), pe;
}
process.env.NODE_ENV === "production" ? Ne.exports = Br() : Ne.exports = Mr();
var o = Ne.exports;
function be(r, n) {
  return n ? /* @__PURE__ */ o.jsx(n, { size: r, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Vr(r) {
  const {
    variant: n = "ghost",
    scheme: t = "primary",
    size: a = "md",
    leftIcon: c,
    rightIcon: f,
    className: d = "",
    children: i,
    ...u
  } = r, m = { md: 12, lg: 14 }[a];
  return {
    className: `arkyn_badge ${n} ${t} ${a} ${d}`.trim(),
    children: i,
    leftIcon: be(m, c),
    rightIcon: be(m, f),
    ...u
  };
}
function xn(r) {
  const { leftIcon: n, children: t, rightIcon: a, ...c } = Vr(r);
  return /* @__PURE__ */ o.jsxs("div", { ...c, children: [
    n,
    t,
    a
  ] });
}
function yn(r) {
  const {
    className: n,
    orientation: t = "horizontal",
    ...a
  } = r, c = `arkyn_divider ${t} ${n}`;
  return /* @__PURE__ */ o.jsx("div", { className: c, ...a });
}
function bn({ className: r, ...n }) {
  const t = "arkyn_skeleton " + r;
  return /* @__PURE__ */ o.jsx("div", { className: t.trim(), ...n });
}
function Yr(r) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: a = "solid",
    loadingText: c,
    size: f = "md",
    leftIcon: d,
    rightIcon: i,
    disabled: u,
    className: h = "",
    children: m,
    ...x
  } = r, C = { xs: 12, sm: 16, md: 20, lg: 24 }[f];
  return {
    className: `arkyn_button loading_text_${!!c} ${a} ${t} ${f} loading_${n} ${h}`.trim(),
    loadingText: c,
    children: m,
    iconSize: C,
    disabled: u || n,
    leftIcon: be(C, d),
    rightIcon: be(C, i),
    ...x
  };
}
function Sn(r) {
  const { leftIcon: n, rightIcon: t, iconSize: a, children: c, loadingText: f, ...d } = Yr(r);
  return /* @__PURE__ */ o.jsxs("button", { ...d, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ o.jsx(ae, { size: a, strokeWidth: 2.5 }),
      f && f
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "content", children: [
      n,
      c,
      t
    ] })
  ] });
}
const nr = $e({});
function _n({ children: r, ...n }) {
  var i, u;
  const t = zr(), a = ue(null), c = ((i = a.current) == null ? void 0 : i.name) || "", f = ((u = t == null ? void 0 : t.fieldErrors) == null ? void 0 : u[c]) || null, d = Or();
  return /* @__PURE__ */ o.jsx(nr.Provider, { value: { error: f, id: d, inputRef: a }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...n, children: r }) });
}
function oe() {
  return Pe(nr);
}
function Cn(r) {
  const {
    name: n,
    className: t = "",
    size: a = "md",
    isError: c,
    defaultChecked: f = !1,
    checked: d = null,
    onCheck: i,
    value: u,
    ...h
  } = r, { id: m, inputRef: x, error: _ } = oe(), C = c || !!_, [E, j] = H(f || !1), R = typeof d == "boolean" ? d : E, g = `arkyn_checkbox ${a} ${C ? "error" : ""} ${R ? "checked" : ""} ${t}`;
  function v() {
    const $ = E;
    j(!$), i && i($ ? "" : u || "checked");
  }
  return /* @__PURE__ */ o.jsxs("div", { id: m, className: g, onClick: v, ...h, children: [
    /* @__PURE__ */ o.jsx(
      "input",
      {
        type: "hidden",
        name: n,
        ref: x,
        value: R ? u || "checked" : ""
      }
    ),
    /* @__PURE__ */ o.jsx(er, {})
  ] });
}
function kn({ children: r }) {
  const { error: n } = oe();
  return r ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: r }) : n ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Ur(r) {
  const { showAsterisk: n = !1, className: t = "", ...a } = r;
  return {
    className: `arkyn_form_label ${n ? "show-asterisk" : ""} ${t}`.trim(),
    ...a
  };
}
function jn(r) {
  const { id: n } = oe();
  return /* @__PURE__ */ o.jsx("label", { ...Ur(r), htmlFor: n });
}
const He = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function Rn(r) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: a = "solid",
    size: c = "md",
    icon: f,
    disabled: d,
    className: i = "",
    ...u
  } = r, h = `arkyn_icon_button ${a} ${t} ${c} loading_${n} ${i}`;
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      disabled: d || n,
      className: h.trim(),
      ...u,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(ae, { size: He[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + c, children: /* @__PURE__ */ o.jsx(f, { size: He[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(r, n, t) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: r });
  const a = r;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(a, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function Ie(r) {
  return r && r.replace(/[^0-9]/g, "");
}
function tr(r, n) {
  let t = "", a = 0;
  return Array.from(r).forEach((c, f) => {
    n[f + a].match(/[0-9]/) || (t += n[f + a], a++), t += c;
  }), t;
}
function sr(r) {
  return r.length > 11 ? "CNPJ" : "CPF";
}
const we = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, or = Ie(we.CNPJ).length;
function Kr(r, n) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: f = "",
    variant: d = "solid",
    prefix: i,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
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
    let F = Ie(D);
    const B = sr(F);
    if (!(F.length > or))
      return F = tr(F, we[B]), F;
  }
  const I = m ? "right" : "left", O = `arkyn_input ${i ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${c} ${x || C || t ? "opacity" : ""} ${a ? "errored" : ""} ${n ? "focused" : ""} ${f}`, y = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: O,
    prefix: se(i, y, "prefix"),
    sufix: se(u, y, "sufix"),
    LeftIcon: h,
    RightIcon: m,
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
function Jr(r) {
  const [n, t] = H(!1), a = ue(null), { inputRef: c, id: f, error: d } = oe(), i = c || a, u = r.isError || !!d, {
    disabled: h,
    title: m,
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
    value: M,
    defaultValue: V,
    ...O
  } = Kr({ ...r, id: f, isError: u }, n), [Y, y] = H(V), D = v && !g, F = L && !g, B = R === "left" && g, Z = R === "right" && g;
  function re() {
    h || !(i != null && i.current) || (t(!0), i.current.focus());
  }
  function ne(W) {
    let q = Ie(W.target.value);
    const G = sr(q);
    q.length > or || (q = tr(q, we[G]), W.target.value = q, y(q), z && z(W));
  }
  function te(W) {
    t(!0), P && P(W);
  }
  function Q(W) {
    t(!1), I && I(W);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: m,
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
            ref: i,
            value: M || Y,
            onFocus: te,
            onChange: ne,
            onBlur: Q,
            ...O
          }
        ),
        F && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        Z && w,
        E
      ]
    }
  );
}
function qr(r, n) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: f = "",
    variant: d = "solid",
    prefix: i,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
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
  } = r, I = m ? "right" : "left", O = `arkyn_input ${i ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${c} ${x || _ || t ? "opacity" : ""} ${a ? "errored" : ""} ${n ? "focused" : ""} ${f}`, y = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: O,
    prefix: se(i, y, "prefix"),
    sufix: se(u, y, "sufix"),
    LeftIcon: h,
    RightIcon: m,
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
const Gr = /^[1-9]{1}$/, Xr = /^[0-9]{1}$/, Ze = 8;
function Hr(r, n) {
  if (r === 0)
    return "";
  const t = (r / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return n ? t : t.replace("R$", "").trim();
}
function Zr(r) {
  const { currencyValue: n, event: t, max: a, setCurrencyValue: c } = r, { key: f, keyCode: d } = t;
  if (n === 0 && !Gr.test(f) || n !== 0 && !Xr.test(f) && d !== Ze)
    return;
  const i = n.toString();
  let u;
  if (d !== Ze) {
    const h = n === 0 ? f : `${i}${f}`;
    u = Number.parseInt(h, 10);
  } else {
    const h = i.slice(0, -1);
    u = h === "" ? 0 : Number.parseInt(h, 10);
  }
  u > Number(a) || c(u);
}
function Qr(r) {
  const [n, t] = H(!1), [a, c] = H(r.defaultValue || 0), f = ue(null), { inputRef: d, id: i, error: u } = oe(), h = d || f, m = r.isError || !!u, {
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
    Spinner: M,
    value: V,
    max: O,
    onKeyDown: Y,
    onChange: y,
    showCents: D,
    ...F
  } = qr({ ...r, id: i, isError: m }, n), B = P && !$, Z = z && !$, re = v === "left" && $, ne = v === "right" && $;
  function te() {
    x || !(h != null && h.current) || (t(!0), h.current.focus());
  }
  function Q(G) {
    Zr({ currencyValue: a, event: G, max: O, setCurrencyValue: c }), y && y(a), Y && Y(G);
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
        re && M,
        B && /* @__PURE__ */ o.jsx(P, { size: g, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: Hr(V || a, D),
            onKeyDown: Q,
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
        ne && M,
        Z && /* @__PURE__ */ o.jsx(z, { size: g, strokeWidth: 2.5 }),
        R
      ]
    }
  );
}
function en(r, n) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: f = "",
    variant: d = "solid",
    prefix: i,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
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
  } = r, I = m ? "right" : "left", O = `arkyn_input ${i ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${c} ${x || _ || t ? "opacity" : ""} ${a ? "errored" : ""} ${n ? "focused" : ""} ${f}`, y = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: O,
    prefix: se(i, y, "prefix"),
    sufix: se(u, y, "sufix"),
    LeftIcon: h,
    RightIcon: m,
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
const rn = Fr((r, n) => /* @__PURE__ */ o.jsx("input", { ref: n, ...r }));
function nn(r) {
  const [n, t] = H(!1), a = ue(null), { inputRef: c, id: f, error: d } = oe(), i = c || a, u = r.isError || !!d, {
    disabled: h,
    title: m,
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
  } = en({ ...r, id: f, isError: u }, n), M = v && !g, V = L && !g, O = R === "left" && g, Y = R === "right" && g;
  function y() {
    h || !(i != null && i.current) || (t(!0), i.current.focus());
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
      title: m,
      style: x,
      onClick: y,
      className: _,
      children: [
        C,
        O && w,
        M && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          Wr,
          {
            component: rn,
            ref: i,
            onFocus: D,
            onBlur: F,
            ...z
          }
        ),
        V && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        Y && w,
        E
      ]
    }
  );
}
function tn(r, n) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: f = "",
    variant: d = "solid",
    prefix: i,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: x,
    readOnly: _,
    onFocus: C,
    onBlur: E,
    title: j,
    style: R,
    onChange: g,
    ...v
  } = r, $ = m ? "right" : "left", M = `arkyn_input ${i ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${c} ${x || _ || t ? "opacity" : ""} ${a ? "errored" : ""} ${n ? "focused" : ""} ${f}`, O = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: M,
    prefix: se(i, O, "prefix"),
    sufix: se(u, O, "sufix"),
    LeftIcon: h,
    RightIcon: m,
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
function sn(r) {
  const [n, t] = H(!1), a = ue(null), { inputRef: c, id: f, error: d } = oe(), i = c || a, u = r.isError || !!d, {
    disabled: h,
    title: m,
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
  } = tn({ ...r, id: f, isError: u }, n), M = v && !g, V = L && !g, O = R === "left" && g, Y = R === "right" && g;
  function y() {
    h || !(i != null && i.current) || (t(!0), i.current.focus());
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
      title: m,
      style: x,
      onClick: y,
      className: _,
      children: [
        C,
        O && w,
        M && /* @__PURE__ */ o.jsx(v, { size: j, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: h || g,
            readOnly: $,
            ref: i,
            onFocus: D,
            onBlur: F,
            ...z
          }
        ),
        V && /* @__PURE__ */ o.jsx(L, { size: j, strokeWidth: 2.5 }),
        Y && w,
        E
      ]
    }
  );
}
function En(r) {
  return r.type === "currency" ? /* @__PURE__ */ o.jsx(Qr, { ...r }) : r.type === "masked" ? /* @__PURE__ */ o.jsx(nn, { ...r }) : r.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(Jr, { ...r }) : /* @__PURE__ */ o.jsx(sn, { ...r });
}
function on(r, n, t) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: r });
  const a = r;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(a, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }) });
}
function an(r, n) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: f = "",
    variant: d = "solid",
    prefix: i,
    leftIcon: u,
    disabled: h,
    readOnly: m,
    onFocus: x,
    onBlur: _,
    title: C,
    style: E,
    isSearchable: j = !1,
    ...R
  } = r, I = `arkyn_select ${i ? "hasPrefix" : ""} ${d} ${c} ${h || m || t ? "opacity" : ""} ${a ? "errored" : ""} ${n ? "focused" : ""} ${f}`, w = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: I,
    prefix: on(i, w, "prefix"),
    LeftIcon: u,
    disabled: h,
    readOnly: m,
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
function Nn(r) {
  var fe;
  const [n, t] = H(!1), { inputRef: a, id: c, error: f } = oe(), d = ue(null), i = a || d, u = r.isError || !!f, {
    disabled: h,
    title: m,
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
    placeholder: M,
    onSelect: V,
    options: O,
    optionMaxHeight: Y,
    ...y
  } = an({ ...r, id: c, isError: u }, n), [D, F] = H(v), [B, Z] = H("");
  function re() {
    h || !(i != null && i.current) || (t(!0), i.current.focus());
  }
  function ne(K) {
    t(!0), P && P(K);
  }
  function te() {
    t(!1), I && i.current && i.current.blur();
  }
  const Q = typeof g == "string" ? g : D, W = ((fe = O.find((K) => K.value === Q)) == null ? void 0 : fe.label) || "", q = () => {
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
        title: m,
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
              placeholder: W || M,
              ref: i,
              onFocus: ne,
              onBlur: () => Z(""),
              ...y,
              onChange: (K) => Z(K.target.value)
            }
          ),
          /* @__PURE__ */ o.jsx("input", { type: "hidden", name: w, value: Q || "", readOnly: !0 }),
          n && /* @__PURE__ */ o.jsxs(
            "ul",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: Y },
              children: [
                G.map(({ label: K, value: ee }) => /* @__PURE__ */ o.jsxs(
                  "li",
                  {
                    className: Q === ee ? "active" : "",
                    onClick: () => {
                      F(D !== ee ? ee : ""), V && V({ label: K, value: ee });
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
            Tr,
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
function cn(r) {
  const { className: n = "", ...t } = r;
  return { className: `arkyn_breadcrumb ${n}`.trim(), ...t };
}
function ln(r) {
  const { pathname: n } = rr(), {
    className: t = "",
    disabled: a = !1,
    to: c,
    ...f
  } = r, d = n === c ? "active" : "inactive", i = `arkyn_breadcrumb_link ${d} ${t}`;
  return {
    to: c,
    className: i.trim(),
    disabled: a || d === "active",
    ...f
  };
}
function $n(r) {
  const { className: n, ...t } = cn(r);
  return /* @__PURE__ */ o.jsx("nav", { className: n, ...t });
}
function Pn(r) {
  const { children: n, className: t, disabled: a, ...c } = ln(r);
  return a ? /* @__PURE__ */ o.jsxs("p", { className: t, children: [
    /* @__PURE__ */ o.jsx(Je, { size: 14, strokeWidth: 2.5 }),
    n
  ] }) : /* @__PURE__ */ o.jsxs(Dr, { className: t, ...c, children: [
    /* @__PURE__ */ o.jsx(Je, { size: 14, strokeWidth: 2.5 }),
    n
  ] });
}
const ir = $e({});
function un(r) {
  const {
    isVisibled: n,
    makeInvisible: t,
    children: a,
    className: c = "",
    ...f
  } = r, i = `arkyn_modal_container ${n ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ o.jsx(ir.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ o.jsx(Ar, { children: n && /* @__PURE__ */ o.jsxs("aside", { className: i.trim(), ...f, children: [
    /* @__PURE__ */ o.jsx(
      qe.div,
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
      qe.div,
      {
        className: "content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: a
      }
    )
  ] }) }) });
}
function fn(r) {
  const { alignment: n = "right", className: t, ...a } = r, c = `arkyn_modal_footer ${n} ${t}`;
  return /* @__PURE__ */ o.jsx("footer", { className: c.trim(), ...a });
}
function dn(r) {
  const { showCloseButton: n, className: t, children: a, ...c } = r, { makeInvisible: f } = Pe(ir), i = `arkyn_modal_header ${n ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ o.jsxs("header", { className: i.trim(), ...c, children: [
    a,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: f, children: /* @__PURE__ */ o.jsx(Lr, { size: 24 }) })
  ] });
}
const In = { Container: un, Header: dn, Footer: fn };
function wn(r) {
  const {
    text: n,
    size: t = "lg",
    children: a,
    orientation: c = "top",
    className: f,
    ...d
  } = r;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${t} ${c} ${f}`,
      ...d,
      children: [
        a,
        /* @__PURE__ */ o.jsx("div", { className: "arkyn_tooltip_text", children: n })
      ]
    }
  );
}
const ar = $e({});
function On(r) {
  const n = Pe(ar);
  if (Object.entries(n).length === 0)
    throw new Error("useModal must be used within a Provider");
  const {
    modalData: t,
    modalIsOpen: a,
    openModal: c,
    closeModal: f
  } = n, d = a(r), i = t(r);
  return { modalIsOpen: d, modalData: i, openModal: (m) => c(r, m), closeModal: () => f(r) };
}
function Fn(r = "") {
  const n = rr(), t = new URLSearchParams(n.search), a = r ? `${r}:` : "", c = (f) => {
    Object.entries(f).forEach(([d, i]) => {
      i === void 0 ? t.delete(`${a}${d}`) : t.set(`${a}${d}`, String(i));
    });
  };
  return {
    getParam: (f) => t.get(`${a}${f}`),
    getScopedSearch: (f) => {
      c(f);
      let d = t.toString();
      return d && (d = "?" + d), d;
    }
  };
}
function Tn({ children: r }) {
  const [n, t] = H([]);
  function a(i) {
    return !!n.some((u) => u.key === i);
  }
  function c(i) {
    var u;
    return (u = n.find((h) => h.key === i)) == null ? void 0 : u.data;
  }
  function f(i, u) {
    t([...n, { key: i, data: u }]);
  }
  function d(i) {
    t(n.filter((u) => u.key !== i));
  }
  return /* @__PURE__ */ o.jsx(
    ar.Provider,
    {
      value: { modalIsOpen: a, modalData: c, openModal: f, closeModal: d },
      children: r
    }
  );
}
export {
  xn as Badge,
  $n as Breadcrumb,
  Pn as BreadcrumbLink,
  Sn as Button,
  Cn as Checkbox,
  yn as Divider,
  _n as FormController,
  kn as FormError,
  jn as FormLabel,
  Rn as IconButton,
  En as Input,
  In as Modal,
  Tn as ModalProvider,
  Nn as Select,
  bn as Skeleton,
  wn as Tooltip,
  On as useModal,
  Fn as useScopedParams
};
