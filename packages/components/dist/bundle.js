import Xe, { createContext as He, useRef as ge, useId as Nr, useContext as Ze, useState as ue } from "react";
import { Loader2 as le, ChevronRight as Me, X as Pr } from "lucide-react";
import { useActionData as wr, useLocation as $r, Link as Ir } from "@remix-run/react";
import { InputMask as Tr } from "@react-input/mask";
import { AnimatePresence as Or, motion as Ue } from "framer-motion";
var ke = { exports: {} }, oe = {};
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
function Fr() {
  if (Ke)
    return oe;
  Ke = 1;
  var n = Xe, i = Symbol.for("react.element"), s = Symbol.for("react.fragment"), o = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(f, d, m) {
    var g, x = {}, E = null, k = null;
    m !== void 0 && (E = "" + m), d.key !== void 0 && (E = "" + d.key), d.ref !== void 0 && (k = d.ref);
    for (g in d)
      o.call(d, g) && !l.hasOwnProperty(g) && (x[g] = d[g]);
    if (f && f.defaultProps)
      for (g in d = f.defaultProps, d)
        x[g] === void 0 && (x[g] = d[g]);
    return { $$typeof: i, type: f, key: E, ref: k, props: x, _owner: c.current };
  }
  return oe.Fragment = s, oe.jsx = h, oe.jsxs = h, oe;
}
var ce = {};
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
function Lr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, i = Symbol.for("react.element"), s = Symbol.for("react.portal"), o = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), f = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), E = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), w = Symbol.iterator, T = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = w && e[w] || e[T];
      return typeof r == "function" ? r : null;
    }
    var R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), u = 1; u < r; u++)
          t[u - 1] = arguments[u];
        S("error", e, t);
      }
    }
    function S(e, r, t) {
      {
        var u = R.ReactDebugCurrentFrame, b = u.getStackAddendum();
        b !== "" && (r += "%s", t = t.concat([b]));
        var _ = t.map(function(p) {
          return String(p);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var F = !1, W = !1, z = !1, D = !1, B = !1, $;
    $ = Symbol.for("react.module.reference");
    function M(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === o || e === l || B || e === c || e === m || e === g || D || e === k || F || W || z || typeof e == "object" && e !== null && (e.$$typeof === E || e.$$typeof === x || e.$$typeof === h || e.$$typeof === f || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === $ || e.getModuleId !== void 0));
    }
    function P(e, r, t) {
      var u = e.displayName;
      if (u)
        return u;
      var b = r.displayName || r.name || "";
      return b !== "" ? t + "(" + b + ")" : t;
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
        case s:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var r = e;
            return G(r) + ".Consumer";
          case h:
            var t = e;
            return G(t._context) + ".Provider";
          case d:
            return P(e, e.render, "ForwardRef");
          case x:
            var u = e.displayName || null;
            return u !== null ? u : C(e.type) || "Memo";
          case E: {
            var b = e, _ = b._payload, p = b._init;
            try {
              return C(p(_));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var A = Object.assign, U = 0, J, H, Z, Q, ee, re, V;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function q() {
      {
        if (U === 0) {
          J = console.log, H = console.info, Z = console.warn, Q = console.error, ee = console.group, re = console.groupCollapsed, V = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: K,
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
        U++;
      }
    }
    function Pe() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: A({}, e, {
              value: J
            }),
            info: A({}, e, {
              value: H
            }),
            warn: A({}, e, {
              value: Z
            }),
            error: A({}, e, {
              value: Q
            }),
            group: A({}, e, {
              value: ee
            }),
            groupCollapsed: A({}, e, {
              value: re
            }),
            groupEnd: A({}, e, {
              value: V
            })
          });
        }
        U < 0 && y("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ye = R.ReactCurrentDispatcher, be;
    function de(e, r, t) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (b) {
            var u = b.stack.trim().match(/\n( *(at )?)/);
            be = u && u[1] || "";
          }
        return `
` + be + e;
      }
    }
    var xe = !1, he;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      he = new tr();
    }
    function we(e, r) {
      if (!e || xe)
        return "";
      {
        var t = he.get(e);
        if (t !== void 0)
          return t;
      }
      var u;
      xe = !0;
      var b = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var _;
      _ = ye.current, ye.current = null, q();
      try {
        if (r) {
          var p = function() {
            throw Error();
          };
          if (Object.defineProperty(p.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(p, []);
            } catch (L) {
              u = L;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (L) {
              u = L;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            u = L;
          }
          e();
        }
      } catch (L) {
        if (L && u && typeof L.stack == "string") {
          for (var v = L.stack.split(`
`), I = u.stack.split(`
`), j = v.length - 1, N = I.length - 1; j >= 1 && N >= 0 && v[j] !== I[N]; )
            N--;
          for (; j >= 1 && N >= 0; j--, N--)
            if (v[j] !== I[N]) {
              if (j !== 1 || N !== 1)
                do
                  if (j--, N--, N < 0 || v[j] !== I[N]) {
                    var Y = `
` + v[j].replace(" at new ", " at ");
                    return e.displayName && Y.includes("<anonymous>") && (Y = Y.replace("<anonymous>", e.displayName)), typeof e == "function" && he.set(e, Y), Y;
                  }
                while (j >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ye.current = _, Pe(), Error.prepareStackTrace = b;
      }
      var te = e ? e.displayName || e.name : "", X = te ? de(te) : "";
      return typeof e == "function" && he.set(e, X), X;
    }
    function sr(e, r, t) {
      return we(e, !1);
    }
    function ir(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function me(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return we(e, ir(e));
      if (typeof e == "string")
        return de(e);
      switch (e) {
        case m:
          return de("Suspense");
        case g:
          return de("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return sr(e.render);
          case x:
            return me(e.type, r, t);
          case E: {
            var u = e, b = u._payload, _ = u._init;
            try {
              return me(_(b), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var ie = Object.prototype.hasOwnProperty, $e = {}, Ie = R.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, t = me(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(t);
      } else
        Ie.setExtraStackFrame(null);
    }
    function ar(e, r, t, u, b) {
      {
        var _ = Function.call.bind(ie);
        for (var p in e)
          if (_(e, p)) {
            var v = void 0;
            try {
              if (typeof e[p] != "function") {
                var I = Error((u || "React class") + ": " + t + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              v = e[p](r, p, u, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              v = j;
            }
            v && !(v instanceof Error) && (ve(b), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", u || "React class", t, p, typeof v), ve(null)), v instanceof Error && !(v.message in $e) && ($e[v.message] = !0, ve(b), y("Failed %s type: %s", t, v.message), ve(null));
          }
      }
    }
    var or = Array.isArray;
    function _e(e) {
      return or(e);
    }
    function cr(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function ur(e) {
      try {
        return Te(e), !1;
      } catch {
        return !0;
      }
    }
    function Te(e) {
      return "" + e;
    }
    function Oe(e) {
      if (ur(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Te(e);
    }
    var ae = R.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Le, Re;
    Re = {};
    function fr(e) {
      if (ie.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function dr(e) {
      if (ie.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, r) {
      if (typeof e.ref == "string" && ae.current && r && ae.current.stateNode !== r) {
        var t = C(ae.current.type);
        Re[t] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C(ae.current.type), e.ref), Re[t] = !0);
      }
    }
    function mr(e, r) {
      {
        var t = function() {
          Fe || (Fe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function vr(e, r) {
      {
        var t = function() {
          Le || (Le = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var pr = function(e, r, t, u, b, _, p) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: i,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: p,
        // Record the component responsible for creating this element.
        _owner: _
      };
      return v._store = {}, Object.defineProperty(v._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(v, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function gr(e, r, t, u, b) {
      {
        var _, p = {}, v = null, I = null;
        t !== void 0 && (Oe(t), v = "" + t), dr(r) && (Oe(r.key), v = "" + r.key), fr(r) && (I = r.ref, hr(r, b));
        for (_ in r)
          ie.call(r, _) && !lr.hasOwnProperty(_) && (p[_] = r[_]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (_ in j)
            p[_] === void 0 && (p[_] = j[_]);
        }
        if (v || I) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && mr(p, N), I && vr(p, N);
        }
        return pr(e, v, I, b, u, ae.current, p);
      }
    }
    var Ee = R.ReactCurrentOwner, ze = R.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, t = me(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(t);
      } else
        ze.setExtraStackFrame(null);
    }
    var Ce;
    Ce = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === i;
    }
    function De() {
      {
        if (Ee.current) {
          var e = C(Ee.current.type);
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
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function br(e) {
      {
        var r = De();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function We(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = br(r);
        if (Ae[t])
          return;
        Ae[t] = !0;
        var u = "";
        e && e._owner && e._owner !== Ee.current && (u = " It was passed a child from " + C(e._owner.type) + "."), ne(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, u), ne(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var t = 0; t < e.length; t++) {
            var u = e[t];
            Se(u) && We(u, r);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = O(e);
          if (typeof b == "function" && b !== e.entries)
            for (var _ = b.call(e), p; !(p = _.next()).done; )
              Se(p.value) && We(p.value, r);
        }
      }
    }
    function xr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          t = r.propTypes;
        else
          return;
        if (t) {
          var u = C(r);
          ar(t, e.props, "prop", u, e);
        } else if (r.PropTypes !== void 0 && !Ce) {
          Ce = !0;
          var b = C(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var u = r[t];
          if (u !== "children" && u !== "key") {
            ne(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", u), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    var Ve = {};
    function Ye(e, r, t, u, b, _) {
      {
        var p = M(e);
        if (!p) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = yr(b);
          I ? v += I : v += De();
          var j;
          e === null ? j = "null" : _e(e) ? j = "array" : e !== void 0 && e.$$typeof === i ? (j = "<" + (C(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, v);
        }
        var N = gr(e, r, t, b, _);
        if (N == null)
          return N;
        if (p) {
          var Y = r.children;
          if (Y !== void 0)
            if (u)
              if (_e(Y)) {
                for (var te = 0; te < Y.length; te++)
                  Be(Y[te], e);
                Object.freeze && Object.freeze(Y);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(Y, e);
        }
        if (ie.call(r, "key")) {
          var X = C(e), L = Object.keys(r).filter(function(kr) {
            return kr !== "key";
          }), je = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[X + je]) {
            var jr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, X, jr, X), Ve[X + je] = !0;
          }
        }
        return e === o ? _r(N) : xr(N), N;
      }
    }
    function Rr(e, r, t) {
      return Ye(e, r, t, !0);
    }
    function Er(e, r, t) {
      return Ye(e, r, t, !1);
    }
    var Cr = Er, Sr = Rr;
    ce.Fragment = o, ce.jsx = Cr, ce.jsxs = Sr;
  }()), ce;
}
process.env.NODE_ENV === "production" ? ke.exports = Fr() : ke.exports = Lr();
var a = ke.exports;
function pe(n, i) {
  return i ? /* @__PURE__ */ a.jsx(i, { size: n, strokeWidth: 2.5 }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function zr(n) {
  const {
    variant: i = "ghost",
    scheme: s = "primary",
    size: o = "md",
    leftIcon: c,
    rightIcon: l,
    className: h = "",
    children: f,
    ...d
  } = n, g = { md: 12, lg: 14 }[o];
  return {
    className: `arkyn_badge ${i} ${s} ${o} ${h}`.trim(),
    children: f,
    leftIcon: pe(g, c),
    rightIcon: pe(g, l),
    ...d
  };
}
function ln(n) {
  const { leftIcon: i, children: s, rightIcon: o, ...c } = zr(n);
  return /* @__PURE__ */ a.jsxs("div", { ...c, children: [
    i,
    s,
    o
  ] });
}
function fn(n) {
  const {
    className: i,
    orientation: s = "horizontal",
    ...o
  } = n, c = `arkyn_divider ${s} ${i}`;
  return /* @__PURE__ */ a.jsx("div", { className: c, ...o });
}
function Dr(n) {
  const {
    isLoading: i = !1,
    scheme: s = "primary",
    variant: o = "solid",
    loadingText: c,
    size: l = "md",
    leftIcon: h,
    rightIcon: f,
    disabled: d,
    className: m = "",
    children: g,
    ...x
  } = n, k = { xs: 12, sm: 16, md: 20, lg: 24 }[l];
  return {
    className: `arkyn_button loading_text_${!!c} ${o} ${s} ${l} loading_${i} ${m}`.trim(),
    loadingText: c,
    children: g,
    iconSize: k,
    disabled: d || i,
    leftIcon: pe(k, h),
    rightIcon: pe(k, f),
    ...x
  };
}
function dn(n) {
  const { leftIcon: i, rightIcon: s, iconSize: o, children: c, loadingText: l, ...h } = Dr(n);
  return /* @__PURE__ */ a.jsxs("button", { ...h, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ a.jsx(le, { size: o, strokeWidth: 2.5 }),
      l && l
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "content", children: [
      i,
      c,
      s
    ] })
  ] });
}
const Qe = He({});
function hn({ children: n, ...i }) {
  var f, d;
  const s = wr(), o = ge(null), c = ((f = o.current) == null ? void 0 : f.name) || "", l = ((d = s == null ? void 0 : s.fieldErrors) == null ? void 0 : d[c]) || null, h = Nr();
  return /* @__PURE__ */ a.jsx(Qe.Provider, { value: { error: l, id: h, inputRef: o }, children: /* @__PURE__ */ a.jsx("section", { className: "arkyn_form_controller", ...i, children: n }) });
}
function fe() {
  return Ze(Qe);
}
function mn() {
  const { error: n } = fe();
  return n ? /* @__PURE__ */ a.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function Ar(n) {
  const { showAsterisk: i = !1, className: s = "", ...o } = n;
  return {
    className: `arkyn_form_label ${i ? "show-asterisk" : ""} ${s}`.trim(),
    ...o
  };
}
function vn(n) {
  const { id: i } = fe();
  return /* @__PURE__ */ a.jsx("label", { ...Ar(n), htmlFor: i });
}
const qe = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function pn(n) {
  const {
    isLoading: i = !1,
    scheme: s = "primary",
    variant: o = "solid",
    size: c = "md",
    icon: l,
    disabled: h,
    className: f = "",
    ...d
  } = n, m = `arkyn_icon_button ${o} ${s} ${c} loading_${i} ${f}`;
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      disabled: h || i,
      className: m.trim(),
      ...d,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "spinner", children: /* @__PURE__ */ a.jsx(le, { size: qe[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ a.jsx("div", { className: "content " + c, children: /* @__PURE__ */ a.jsx(l, { size: qe[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(n, i, s) {
  if (!n)
    return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof n == "string")
    return /* @__PURE__ */ a.jsx("p", { className: s, children: n });
  const o = n;
  return /* @__PURE__ */ a.jsx("p", { className: s, children: /* @__PURE__ */ a.jsx(o, { color: "var(--secondary-600)", size: i, strokeWidth: 2.5 }) });
}
function Wr(n, i) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: f,
    sufix: d,
    leftIcon: m,
    rightIcon: g,
    disabled: x,
    readOnly: E,
    onFocus: k,
    onBlur: w,
    title: T,
    style: O,
    onChange: R,
    ...y
  } = n, S = g ? "right" : "left", $ = `arkyn_input ${f ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${c} ${x || E || s ? "opacity" : ""} ${o ? "errored" : ""} ${i ? "focused" : ""} ${l}`, P = { md: 14, lg: 16 }[c];
  return {
    isLoading: s,
    className: $,
    prefix: se(f, P, "prefix"),
    sufix: se(d, P, "sufix"),
    LeftIcon: m,
    RightIcon: g,
    disabled: x,
    readOnly: E,
    onFocus: k,
    onBlur: w,
    title: T,
    style: O,
    onChange: R,
    loadingPosition: S,
    iconSize: P,
    Spinner: /* @__PURE__ */ a.jsx(le, { className: "spinner", size: P, strokeWidth: 2.5 }),
    ...y
  };
}
function Ne(n) {
  return n && n.replace(/[^0-9]/g, "");
}
function Br(n, i) {
  let s = "", o = 0;
  return Array.from(n).forEach((c, l) => {
    i[l + o].match(/[0-9]/) || (s += i[l + o], o++), s += c;
  }), s;
}
function Vr(n) {
  return n.length > 11 ? "CNPJ" : "CPF";
}
const er = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Yr = Ne(er.CNPJ).length;
function Mr(n) {
  const [i, s] = ue(!1), [o, c] = ue(
    Ne((n == null ? void 0 : n.defaultValue) || "")
  ), l = ge(null), { inputRef: h, id: f, error: d } = fe(), m = h || l, g = n.isError || !!d, {
    disabled: x,
    title: E,
    style: k,
    className: w,
    prefix: T,
    sufix: O,
    iconSize: R,
    loadingPosition: y,
    isLoading: S,
    LeftIcon: F,
    readOnly: W,
    onFocus: z,
    onBlur: D,
    RightIcon: B,
    Spinner: $,
    onChange: M,
    value: P,
    defaultValue: G = "",
    ...C
  } = Wr({ ...n, id: f, isError: g }, i), A = F && !S, U = B && !S, J = y === "left" && S, H = y === "right" && S;
  function Z() {
    x || !(m != null && m.current) || (s(!0), m.current.focus());
  }
  function Q(V) {
    let K = Ne(V.target.value);
    const q = Vr(K);
    K.length > Yr || (K = Br(K, er[q]), V.target.value = K, c(K), M && M(V));
  }
  function ee(V) {
    s(!0), z && z(V);
  }
  function re(V) {
    s(!1), D && D(V);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: E,
      style: k,
      onClick: Z,
      className: w,
      children: [
        T,
        J && $,
        A && /* @__PURE__ */ a.jsx(F, { size: R, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: x || S,
            readOnly: W,
            ref: m,
            value: P || o,
            onFocus: ee,
            onChange: Q,
            onBlur: re,
            ...C
          }
        ),
        U && /* @__PURE__ */ a.jsx(B, { size: R, strokeWidth: 2.5 }),
        H && $,
        O
      ]
    }
  );
}
function Ur(n, i) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: f,
    sufix: d,
    leftIcon: m,
    rightIcon: g,
    disabled: x,
    readOnly: E,
    onFocus: k,
    onBlur: w,
    title: T,
    style: O,
    showCents: R = !1,
    max: y = 1e9,
    onChange: S,
    ...F
  } = n, W = g ? "right" : "left", P = `arkyn_input ${f ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${c} ${x || E || s ? "opacity" : ""} ${o ? "errored" : ""} ${i ? "focused" : ""} ${l}`, C = { md: 14, lg: 16 }[c];
  return {
    isLoading: s,
    className: P,
    prefix: se(f, C, "prefix"),
    sufix: se(d, C, "sufix"),
    LeftIcon: m,
    RightIcon: g,
    disabled: x,
    readOnly: E,
    onFocus: k,
    onBlur: w,
    title: T,
    style: O,
    max: y,
    onChange: S,
    showCents: R,
    loadingPosition: W,
    iconSize: C,
    Spinner: /* @__PURE__ */ a.jsx(le, { className: "spinner", size: C, strokeWidth: 2.5 }),
    ...F
  };
}
const Kr = /^[1-9]{1}$/, Jr = /^[0-9]{1}$/, Ge = 8;
function qr(n, i) {
  if (n === 0)
    return "";
  const s = (n / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return i ? s : s.replace("R$", "").trim();
}
function Gr(n) {
  const { currencyValue: i, event: s, max: o, setCurrencyValue: c } = n, { key: l, keyCode: h } = s;
  if (i === 0 && !Kr.test(l) || i !== 0 && !Jr.test(l) && h !== Ge)
    return;
  const f = i.toString();
  let d;
  if (h !== Ge) {
    const m = i === 0 ? l : `${f}${l}`;
    d = Number.parseInt(m, 10);
  } else {
    const m = f.slice(0, -1);
    d = m === "" ? 0 : Number.parseInt(m, 10);
  }
  d > Number(o) || c(d);
}
function Xr(n) {
  const [i, s] = ue(!1), [o, c] = ue(n.defaultValue || 0), l = ge(null), { inputRef: h, id: f, error: d } = fe(), m = h || l, g = n.isError || !!d, {
    disabled: x,
    title: E,
    style: k,
    className: w,
    prefix: T,
    sufix: O,
    iconSize: R,
    loadingPosition: y,
    isLoading: S,
    LeftIcon: F,
    readOnly: W,
    onFocus: z,
    onBlur: D,
    RightIcon: B,
    Spinner: $,
    value: M,
    max: P,
    onKeyDown: G,
    onChange: C,
    showCents: A,
    ...U
  } = Ur({ ...n, id: f, isError: g }, i), J = F && !S, H = B && !S, Z = y === "left" && S, Q = y === "right" && S;
  function ee() {
    x || !(m != null && m.current) || (s(!0), m.current.focus());
  }
  function re(q) {
    Gr({ currencyValue: o, event: q, max: P, setCurrencyValue: c }), C && C(o), G && G(q);
  }
  function V(q) {
    s(!0), z && z(q);
  }
  function K(q) {
    s(!1), D && D(q);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: E,
      style: k,
      onClick: ee,
      className: w,
      children: [
        T,
        Z && $,
        J && /* @__PURE__ */ a.jsx(F, { size: R, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: qr(M || o, A),
            onKeyDown: re,
            disabled: x || S,
            readOnly: W,
            ref: m,
            onFocus: V,
            onChange: () => {
            },
            onBlur: K,
            ...U
          }
        ),
        Q && $,
        H && /* @__PURE__ */ a.jsx(B, { size: R, strokeWidth: 2.5 }),
        O
      ]
    }
  );
}
function Hr(n, i) {
  const {
    isLoading: s,
    isError: o,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: f,
    sufix: d,
    leftIcon: m,
    rightIcon: g,
    disabled: x,
    readOnly: E,
    onFocus: k,
    onBlur: w,
    title: T,
    style: O,
    onChange: R,
    ...y
  } = n, S = g ? "right" : "left", $ = `arkyn_input ${f ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${h} ${c} ${x || E || s ? "opacity" : ""} ${o ? "errored" : ""} ${i ? "focused" : ""} ${l}`, P = { md: 14, lg: 16 }[c];
  return {
    isLoading: s,
    className: $,
    prefix: se(f, P, "prefix"),
    sufix: se(d, P, "sufix"),
    LeftIcon: m,
    RightIcon: g,
    disabled: x,
    readOnly: E,
    onFocus: k,
    onBlur: w,
    title: T,
    style: O,
    onChange: R,
    loadingPosition: S,
    iconSize: P,
    Spinner: /* @__PURE__ */ a.jsx(le, { className: "spinner", size: P, strokeWidth: 2.5 }),
    ...y
  };
}
function rr(n) {
  const [i, s] = ue(!1), o = ge(null), { inputRef: c, id: l, error: h } = fe(), f = c || o, d = n.isError || !!h, {
    disabled: m,
    title: g,
    style: x,
    className: E,
    prefix: k,
    sufix: w,
    iconSize: T,
    loadingPosition: O,
    isLoading: R,
    LeftIcon: y,
    readOnly: S,
    onFocus: F,
    onBlur: W,
    RightIcon: z,
    Spinner: D,
    ...B
  } = Hr({ ...n, id: l, isError: d }, i), $ = y && !R, M = z && !R, P = O === "left" && R, G = O === "right" && R;
  function C() {
    m || !(f != null && f.current) || (s(!0), f.current.focus());
  }
  function A(J) {
    s(!0), F && F(J);
  }
  function U(J) {
    s(!1), W && W(J);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: C,
      className: E,
      children: [
        k,
        P && D,
        $ && /* @__PURE__ */ a.jsx(y, { size: T, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: m || R,
            readOnly: S,
            ref: f,
            onFocus: A,
            onBlur: U,
            ...B
          }
        ),
        M && /* @__PURE__ */ a.jsx(z, { size: T, strokeWidth: 2.5 }),
        G && D,
        w
      ]
    }
  );
}
function Zr(n) {
  return (
    // <section
    //   title={title}
    //   style={style}
    //   onClick={handleSectionClick}
    //   className={className}
    // >
    //   {prefix}
    //   {showLeftSpinner && Spinner}
    //   {showLeftIcon && <LeftIcon size={iconSize} strokeWidth={2.5} />}
    /* @__PURE__ */ a.jsx(Tr, { component: rr, ...n, type: "text" })
  );
}
function gn(n) {
  return n.type === "currency" ? /* @__PURE__ */ a.jsx(Xr, { ...n }) : n.type === "masked" ? /* @__PURE__ */ a.jsx(Zr, { ...n }) : n.type === "cpf-cpnj" ? /* @__PURE__ */ a.jsx(Mr, { ...n }) : /* @__PURE__ */ a.jsx(rr, { ...n });
}
function Qr(n) {
  const { className: i = "", ...s } = n;
  return { className: `arkyn_breadcrumb ${i}`.trim(), ...s };
}
function en(n) {
  const { pathname: i } = $r(), {
    className: s = "",
    disabled: o = !1,
    to: c,
    ...l
  } = n, h = i === c ? "active" : "inactive", f = `arkyn_breadcrumb_link ${h} ${s}`;
  return {
    to: c,
    className: f.trim(),
    disabled: o || h === "active",
    ...l
  };
}
function yn(n) {
  const { className: i, ...s } = Qr(n);
  return /* @__PURE__ */ a.jsx("nav", { className: i, ...s });
}
function bn(n) {
  const { children: i, className: s, disabled: o, ...c } = en(n);
  return o ? /* @__PURE__ */ a.jsxs("p", { className: s, children: [
    /* @__PURE__ */ a.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ a.jsxs(Ir, { className: s, ...c, children: [
    /* @__PURE__ */ a.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
const nr = He({});
function rn(n) {
  const {
    isVisibled: i,
    makeInvisible: s,
    children: o,
    className: c = "",
    ...l
  } = n, f = `arkyn_modal_container ${i ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ a.jsx(nr.Provider, { value: { makeInvisible: s }, children: /* @__PURE__ */ a.jsx(Or, { children: i && /* @__PURE__ */ a.jsxs("aside", { className: f.trim(), ...l, children: [
    /* @__PURE__ */ a.jsx(
      Ue.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: s
      }
    ),
    /* @__PURE__ */ a.jsx(
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
function nn(n) {
  const { alignment: i = "right", className: s, ...o } = n, c = `arkyn_modal_footer ${i} ${s}`;
  return /* @__PURE__ */ a.jsx("footer", { className: c.trim(), ...o });
}
function tn(n) {
  const { showCloseButton: i, className: s, children: o, ...c } = n, { makeInvisible: l } = Ze(nr), f = `arkyn_modal_header ${i ? "show-close" : ""} ${s}`;
  return /* @__PURE__ */ a.jsxs("header", { className: f.trim(), ...c, children: [
    o,
    /* @__PURE__ */ a.jsx("button", { type: "button", onClick: l, children: /* @__PURE__ */ a.jsx(Pr, { size: 24 }) })
  ] });
}
const xn = { Container: rn, Header: tn, Footer: nn };
function _n(n) {
  const {
    text: i,
    size: s = "lg",
    children: o,
    orientation: c = "top",
    className: l,
    ...h
  } = n;
  return /* @__PURE__ */ a.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${s} ${c} ${l}`,
      ...h,
      children: [
        o,
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_tooltip_text", children: i })
      ]
    }
  );
}
export {
  ln as Badge,
  yn as Breadcrumb,
  bn as BreadcrumbLink,
  dn as Button,
  fn as Divider,
  hn as FormController,
  mn as FormError,
  vn as FormLabel,
  pn as IconButton,
  gn as Input,
  xn as Modal,
  _n as Tooltip
};
