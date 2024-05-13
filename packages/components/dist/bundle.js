import Xe, { createContext as He, useRef as ge, useId as $r, useContext as Ze, useState as ue } from "react";
import { Loader2 as le, ChevronRight as Me, X as Pr } from "lucide-react";
import { useActionData as wr, useLocation as Qe, Link as Ir } from "@remix-run/react";
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
  var n = Xe, s = Symbol.for("react.element"), t = Symbol.for("react.fragment"), i = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(l, h, m) {
    var g, x = {}, S = null, k = null;
    m !== void 0 && (S = "" + m), h.key !== void 0 && (S = "" + h.key), h.ref !== void 0 && (k = h.ref);
    for (g in h)
      i.call(h, g) && !u.hasOwnProperty(g) && (x[g] = h[g]);
    if (l && l.defaultProps)
      for (g in h = l.defaultProps, h)
        x[g] === void 0 && (x[g] = h[g]);
    return { $$typeof: s, type: l, key: S, ref: k, props: x, _owner: c.current };
  }
  return oe.Fragment = t, oe.jsx = d, oe.jsxs = d, oe;
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
    var n = Xe, s = Symbol.for("react.element"), t = Symbol.for("react.portal"), i = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), l = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), g = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), k = Symbol.for("react.offscreen"), P = Symbol.iterator, T = "@@iterator";
    function O(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[T];
      return typeof r == "function" ? r : null;
    }
    var R = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function y(e) {
      {
        for (var r = arguments.length, a = new Array(r > 1 ? r - 1 : 0), f = 1; f < r; f++)
          a[f - 1] = arguments[f];
        C("error", e, a);
      }
    }
    function C(e, r, a) {
      {
        var f = R.ReactDebugCurrentFrame, b = f.getStackAddendum();
        b !== "" && (r += "%s", a = a.concat([b]));
        var _ = a.map(function(p) {
          return String(p);
        });
        _.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, _);
      }
    }
    var F = !1, W = !1, z = !1, D = !1, B = !1, w;
    w = Symbol.for("react.module.reference");
    function M(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === i || e === u || B || e === c || e === m || e === g || D || e === k || F || W || z || typeof e == "object" && e !== null && (e.$$typeof === S || e.$$typeof === x || e.$$typeof === d || e.$$typeof === l || e.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === w || e.getModuleId !== void 0));
    }
    function $(e, r, a) {
      var f = e.displayName;
      if (f)
        return f;
      var b = r.displayName || r.name || "";
      return b !== "" ? a + "(" + b + ")" : a;
    }
    function G(e) {
      return e.displayName || "Context";
    }
    function E(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && y("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
        case c:
          return "StrictMode";
        case m:
          return "Suspense";
        case g:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case l:
            var r = e;
            return G(r) + ".Consumer";
          case d:
            var a = e;
            return G(a._context) + ".Provider";
          case h:
            return $(e, e.render, "ForwardRef");
          case x:
            var f = e.displayName || null;
            return f !== null ? f : E(e.type) || "Memo";
          case S: {
            var b = e, _ = b._payload, p = b._init;
            try {
              return E(p(_));
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
    function $e() {
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
    function de(e, r, a) {
      {
        if (be === void 0)
          try {
            throw Error();
          } catch (b) {
            var f = b.stack.trim().match(/\n( *(at )?)/);
            be = f && f[1] || "";
          }
        return `
` + be + e;
      }
    }
    var xe = !1, he;
    {
      var sr = typeof WeakMap == "function" ? WeakMap : Map;
      he = new sr();
    }
    function Pe(e, r) {
      if (!e || xe)
        return "";
      {
        var a = he.get(e);
        if (a !== void 0)
          return a;
      }
      var f;
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
              f = L;
            }
            Reflect.construct(e, [], p);
          } else {
            try {
              p.call();
            } catch (L) {
              f = L;
            }
            e.call(p.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (L) {
            f = L;
          }
          e();
        }
      } catch (L) {
        if (L && f && typeof L.stack == "string") {
          for (var v = L.stack.split(`
`), I = f.stack.split(`
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
        xe = !1, ye.current = _, $e(), Error.prepareStackTrace = b;
      }
      var te = e ? e.displayName || e.name : "", X = te ? de(te) : "";
      return typeof e == "function" && he.set(e, X), X;
    }
    function ar(e, r, a) {
      return Pe(e, !1);
    }
    function ir(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function me(e, r, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, ir(e));
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
          case h:
            return ar(e.render);
          case x:
            return me(e.type, r, a);
          case S: {
            var f = e, b = f._payload, _ = f._init;
            try {
              return me(_(b), r, a);
            } catch {
            }
          }
        }
      return "";
    }
    var ae = Object.prototype.hasOwnProperty, we = {}, Ie = R.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, a = me(e.type, e._source, r ? r.type : null);
        Ie.setExtraStackFrame(a);
      } else
        Ie.setExtraStackFrame(null);
    }
    function or(e, r, a, f, b) {
      {
        var _ = Function.call.bind(ae);
        for (var p in e)
          if (_(e, p)) {
            var v = void 0;
            try {
              if (typeof e[p] != "function") {
                var I = Error((f || "React class") + ": " + a + " type `" + p + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[p] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw I.name = "Invariant Violation", I;
              }
              v = e[p](r, p, f, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              v = j;
            }
            v && !(v instanceof Error) && (ve(b), y("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", f || "React class", a, p, typeof v), ve(null)), v instanceof Error && !(v.message in we) && (we[v.message] = !0, ve(b), y("Failed %s type: %s", a, v.message), ve(null));
          }
      }
    }
    var cr = Array.isArray;
    function _e(e) {
      return cr(e);
    }
    function ur(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, a = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function lr(e) {
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
      if (lr(e))
        return y("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ur(e)), Te(e);
    }
    var ie = R.ReactCurrentOwner, fr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Le, Re;
    Re = {};
    function dr(e) {
      if (ae.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function hr(e) {
      if (ae.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function mr(e, r) {
      if (typeof e.ref == "string" && ie.current && r && ie.current.stateNode !== r) {
        var a = E(ie.current.type);
        Re[a] || (y('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(ie.current.type), e.ref), Re[a] = !0);
      }
    }
    function vr(e, r) {
      {
        var a = function() {
          Fe || (Fe = !0, y("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: a,
          configurable: !0
        });
      }
    }
    function pr(e, r) {
      {
        var a = function() {
          Le || (Le = !0, y("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        a.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: a,
          configurable: !0
        });
      }
    }
    var gr = function(e, r, a, f, b, _, p) {
      var v = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: a,
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
        value: f
      }), Object.defineProperty(v, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: b
      }), Object.freeze && (Object.freeze(v.props), Object.freeze(v)), v;
    };
    function yr(e, r, a, f, b) {
      {
        var _, p = {}, v = null, I = null;
        a !== void 0 && (Oe(a), v = "" + a), hr(r) && (Oe(r.key), v = "" + r.key), dr(r) && (I = r.ref, mr(r, b));
        for (_ in r)
          ae.call(r, _) && !fr.hasOwnProperty(_) && (p[_] = r[_]);
        if (e && e.defaultProps) {
          var j = e.defaultProps;
          for (_ in j)
            p[_] === void 0 && (p[_] = j[_]);
        }
        if (v || I) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          v && vr(p, N), I && pr(p, N);
        }
        return gr(e, v, I, b, f, ie.current, p);
      }
    }
    var Se = R.ReactCurrentOwner, ze = R.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, a = me(e.type, e._source, r ? r.type : null);
        ze.setExtraStackFrame(a);
      } else
        ze.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Ce(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function De() {
      {
        if (Se.current) {
          var e = E(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function br(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), a = e.lineNumber;
          return `

Check your code at ` + r + ":" + a + ".";
        }
        return "";
      }
    }
    var Ae = {};
    function xr(e) {
      {
        var r = De();
        if (!r) {
          var a = typeof e == "string" ? e : e.displayName || e.name;
          a && (r = `

Check the top-level render call using <` + a + ">.");
        }
        return r;
      }
    }
    function We(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var a = xr(r);
        if (Ae[a])
          return;
        Ae[a] = !0;
        var f = "";
        e && e._owner && e._owner !== Se.current && (f = " It was passed a child from " + E(e._owner.type) + "."), ne(e), y('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', a, f), ne(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var a = 0; a < e.length; a++) {
            var f = e[a];
            Ce(f) && We(f, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var b = O(e);
          if (typeof b == "function" && b !== e.entries)
            for (var _ = b.call(e), p; !(p = _.next()).done; )
              Ce(p.value) && We(p.value, r);
        }
      }
    }
    function _r(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var a;
        if (typeof r == "function")
          a = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          a = r.propTypes;
        else
          return;
        if (a) {
          var f = E(r);
          or(a, e.props, "prop", f, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var b = E(r);
          y("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", b || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && y("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Rr(e) {
      {
        for (var r = Object.keys(e.props), a = 0; a < r.length; a++) {
          var f = r[a];
          if (f !== "children" && f !== "key") {
            ne(e), y("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", f), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), y("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    var Ve = {};
    function Ye(e, r, a, f, b, _) {
      {
        var p = M(e);
        if (!p) {
          var v = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var I = br(b);
          I ? v += I : v += De();
          var j;
          e === null ? j = "null" : _e(e) ? j = "array" : e !== void 0 && e.$$typeof === s ? (j = "<" + (E(e.type) || "Unknown") + " />", v = " Did you accidentally export a JSX literal instead of a component?") : j = typeof e, y("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, v);
        }
        var N = yr(e, r, a, b, _);
        if (N == null)
          return N;
        if (p) {
          var Y = r.children;
          if (Y !== void 0)
            if (f)
              if (_e(Y)) {
                for (var te = 0; te < Y.length; te++)
                  Be(Y[te], e);
                Object.freeze && Object.freeze(Y);
              } else
                y("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(Y, e);
        }
        if (ae.call(r, "key")) {
          var X = E(e), L = Object.keys(r).filter(function(Nr) {
            return Nr !== "key";
          }), je = L.length > 0 ? "{key: someKey, " + L.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[X + je]) {
            var kr = L.length > 0 ? "{" + L.join(": ..., ") + ": ...}" : "{}";
            y(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, X, kr, X), Ve[X + je] = !0;
          }
        }
        return e === i ? Rr(N) : _r(N), N;
      }
    }
    function Sr(e, r, a) {
      return Ye(e, r, a, !0);
    }
    function Er(e, r, a) {
      return Ye(e, r, a, !1);
    }
    var Cr = Er, jr = Sr;
    ce.Fragment = i, ce.jsx = Cr, ce.jsxs = jr;
  }()), ce;
}
process.env.NODE_ENV === "production" ? ke.exports = Fr() : ke.exports = Lr();
var o = ke.exports;
function pe(n, s) {
  return s ? /* @__PURE__ */ o.jsx(s, { size: n, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function zr(n) {
  const {
    variant: s = "ghost",
    scheme: t = "primary",
    size: i = "md",
    leftIcon: c,
    rightIcon: u,
    className: d = "",
    children: l,
    ...h
  } = n, g = { md: 12, lg: 14 }[i];
  return {
    className: `arkyn_badge ${s} ${t} ${i} ${d}`.trim(),
    children: l,
    leftIcon: pe(g, c),
    rightIcon: pe(g, u),
    ...h
  };
}
function ln(n) {
  const { leftIcon: s, children: t, rightIcon: i, ...c } = zr(n);
  return /* @__PURE__ */ o.jsxs("div", { ...c, children: [
    s,
    t,
    i
  ] });
}
function fn(n) {
  const {
    className: s,
    orientation: t = "horizontal",
    ...i
  } = n, c = `arkyn_divider ${t} ${s}`;
  return /* @__PURE__ */ o.jsx("div", { className: c, ...i });
}
function dn({ className: n, ...s }) {
  const t = "arkyn_skeleton " + n;
  return /* @__PURE__ */ o.jsx("div", { className: t.trim(), ...s });
}
function Dr(n) {
  const {
    isLoading: s = !1,
    scheme: t = "primary",
    variant: i = "solid",
    loadingText: c,
    size: u = "md",
    leftIcon: d,
    rightIcon: l,
    disabled: h,
    className: m = "",
    children: g,
    ...x
  } = n, k = { xs: 12, sm: 16, md: 20, lg: 24 }[u];
  return {
    className: `arkyn_button loading_text_${!!c} ${i} ${t} ${u} loading_${s} ${m}`.trim(),
    loadingText: c,
    children: g,
    iconSize: k,
    disabled: h || s,
    leftIcon: pe(k, d),
    rightIcon: pe(k, l),
    ...x
  };
}
function hn(n) {
  const { leftIcon: s, rightIcon: t, iconSize: i, children: c, loadingText: u, ...d } = Dr(n);
  return /* @__PURE__ */ o.jsxs("button", { ...d, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ o.jsx(le, { size: i, strokeWidth: 2.5 }),
      u && u
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "content", children: [
      s,
      c,
      t
    ] })
  ] });
}
const er = He({});
function mn({ children: n, ...s }) {
  var l, h;
  const t = wr(), i = ge(null), c = ((l = i.current) == null ? void 0 : l.name) || "", u = ((h = t == null ? void 0 : t.fieldErrors) == null ? void 0 : h[c]) || null, d = $r();
  return /* @__PURE__ */ o.jsx(er.Provider, { value: { error: u, id: d, inputRef: i }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...s, children: n }) });
}
function fe() {
  return Ze(er);
}
function vn({ children: n }) {
  const { error: s } = fe();
  return n ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: n }) : s ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: s }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Ar(n) {
  const { showAsterisk: s = !1, className: t = "", ...i } = n;
  return {
    className: `arkyn_form_label ${s ? "show-asterisk" : ""} ${t}`.trim(),
    ...i
  };
}
function pn(n) {
  const { id: s } = fe();
  return /* @__PURE__ */ o.jsx("label", { ...Ar(n), htmlFor: s });
}
const qe = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function gn(n) {
  const {
    isLoading: s = !1,
    scheme: t = "primary",
    variant: i = "solid",
    size: c = "md",
    icon: u,
    disabled: d,
    className: l = "",
    ...h
  } = n, m = `arkyn_icon_button ${i} ${t} ${c} loading_${s} ${l}`;
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      disabled: d || s,
      className: m.trim(),
      ...h,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(le, { size: qe[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + c, children: /* @__PURE__ */ o.jsx(u, { size: qe[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function se(n, s, t) {
  if (!n)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof n == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: n });
  const i = n;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(i, { color: "var(--secondary-600)", size: s, strokeWidth: 2.5 }) });
}
function Wr(n, s) {
  const {
    isLoading: t,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: l,
    sufix: h,
    leftIcon: m,
    rightIcon: g,
    disabled: x,
    readOnly: S,
    onFocus: k,
    onBlur: P,
    title: T,
    style: O,
    onChange: R,
    ...y
  } = n, C = g ? "right" : "left", w = `arkyn_input ${l ? "hasPrefix" : ""} ${h ? "hasSufix" : ""} ${d} ${c} ${x || S || t ? "opacity" : ""} ${i ? "errored" : ""} ${s ? "focused" : ""} ${u}`, $ = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: w,
    prefix: se(l, $, "prefix"),
    sufix: se(h, $, "sufix"),
    LeftIcon: m,
    RightIcon: g,
    disabled: x,
    readOnly: S,
    onFocus: k,
    onBlur: P,
    title: T,
    style: O,
    onChange: R,
    loadingPosition: C,
    iconSize: $,
    Spinner: /* @__PURE__ */ o.jsx(le, { className: "spinner", size: $, strokeWidth: 2.5 }),
    ...y
  };
}
function Ne(n) {
  return n && n.replace(/[^0-9]/g, "");
}
function Br(n, s) {
  let t = "", i = 0;
  return Array.from(n).forEach((c, u) => {
    s[u + i].match(/[0-9]/) || (t += s[u + i], i++), t += c;
  }), t;
}
function Vr(n) {
  return n.length > 11 ? "CNPJ" : "CPF";
}
const rr = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Yr = Ne(rr.CNPJ).length;
function Mr(n) {
  const [s, t] = ue(!1), [i, c] = ue(
    Ne((n == null ? void 0 : n.defaultValue) || "")
  ), u = ge(null), { inputRef: d, id: l, error: h } = fe(), m = d || u, g = n.isError || !!h, {
    disabled: x,
    title: S,
    style: k,
    className: P,
    prefix: T,
    sufix: O,
    iconSize: R,
    loadingPosition: y,
    isLoading: C,
    LeftIcon: F,
    readOnly: W,
    onFocus: z,
    onBlur: D,
    RightIcon: B,
    Spinner: w,
    onChange: M,
    value: $,
    defaultValue: G = "",
    ...E
  } = Wr({ ...n, id: l, isError: g }, s), A = F && !C, U = B && !C, J = y === "left" && C, H = y === "right" && C;
  function Z() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function Q(V) {
    let K = Ne(V.target.value);
    const q = Vr(K);
    K.length > Yr || (K = Br(K, rr[q]), V.target.value = K, c(K), M && M(V));
  }
  function ee(V) {
    t(!0), z && z(V);
  }
  function re(V) {
    t(!1), D && D(V);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: S,
      style: k,
      onClick: Z,
      className: P,
      children: [
        T,
        J && w,
        A && /* @__PURE__ */ o.jsx(F, { size: R, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: x || C,
            readOnly: W,
            ref: m,
            value: $ || i,
            onFocus: ee,
            onChange: Q,
            onBlur: re,
            ...E
          }
        ),
        U && /* @__PURE__ */ o.jsx(B, { size: R, strokeWidth: 2.5 }),
        H && w,
        O
      ]
    }
  );
}
function Ur(n, s) {
  const {
    isLoading: t,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: l,
    sufix: h,
    leftIcon: m,
    rightIcon: g,
    disabled: x,
    readOnly: S,
    onFocus: k,
    onBlur: P,
    title: T,
    style: O,
    showCents: R = !1,
    max: y = 1e9,
    onChange: C,
    ...F
  } = n, W = g ? "right" : "left", $ = `arkyn_input ${l ? "hasPrefix" : ""} ${h ? "hasSufix" : ""} ${d} ${c} ${x || S || t ? "opacity" : ""} ${i ? "errored" : ""} ${s ? "focused" : ""} ${u}`, E = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: $,
    prefix: se(l, E, "prefix"),
    sufix: se(h, E, "sufix"),
    LeftIcon: m,
    RightIcon: g,
    disabled: x,
    readOnly: S,
    onFocus: k,
    onBlur: P,
    title: T,
    style: O,
    max: y,
    onChange: C,
    showCents: R,
    loadingPosition: W,
    iconSize: E,
    Spinner: /* @__PURE__ */ o.jsx(le, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...F
  };
}
const Kr = /^[1-9]{1}$/, Jr = /^[0-9]{1}$/, Ge = 8;
function qr(n, s) {
  if (n === 0)
    return "";
  const t = (n / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return s ? t : t.replace("R$", "").trim();
}
function Gr(n) {
  const { currencyValue: s, event: t, max: i, setCurrencyValue: c } = n, { key: u, keyCode: d } = t;
  if (s === 0 && !Kr.test(u) || s !== 0 && !Jr.test(u) && d !== Ge)
    return;
  const l = s.toString();
  let h;
  if (d !== Ge) {
    const m = s === 0 ? u : `${l}${u}`;
    h = Number.parseInt(m, 10);
  } else {
    const m = l.slice(0, -1);
    h = m === "" ? 0 : Number.parseInt(m, 10);
  }
  h > Number(i) || c(h);
}
function Xr(n) {
  const [s, t] = ue(!1), [i, c] = ue(n.defaultValue || 0), u = ge(null), { inputRef: d, id: l, error: h } = fe(), m = d || u, g = n.isError || !!h, {
    disabled: x,
    title: S,
    style: k,
    className: P,
    prefix: T,
    sufix: O,
    iconSize: R,
    loadingPosition: y,
    isLoading: C,
    LeftIcon: F,
    readOnly: W,
    onFocus: z,
    onBlur: D,
    RightIcon: B,
    Spinner: w,
    value: M,
    max: $,
    onKeyDown: G,
    onChange: E,
    showCents: A,
    ...U
  } = Ur({ ...n, id: l, isError: g }, s), J = F && !C, H = B && !C, Z = y === "left" && C, Q = y === "right" && C;
  function ee() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function re(q) {
    Gr({ currencyValue: i, event: q, max: $, setCurrencyValue: c }), E && E(i), G && G(q);
  }
  function V(q) {
    t(!0), z && z(q);
  }
  function K(q) {
    t(!1), D && D(q);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: S,
      style: k,
      onClick: ee,
      className: P,
      children: [
        T,
        Z && w,
        J && /* @__PURE__ */ o.jsx(F, { size: R, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: qr(M || i, A),
            onKeyDown: re,
            disabled: x || C,
            readOnly: W,
            ref: m,
            onFocus: V,
            onChange: () => {
            },
            onBlur: K,
            ...U
          }
        ),
        Q && w,
        H && /* @__PURE__ */ o.jsx(B, { size: R, strokeWidth: 2.5 }),
        O
      ]
    }
  );
}
function Hr(n, s) {
  const {
    isLoading: t,
    isError: i,
    size: c = "md",
    className: u = "",
    variant: d = "solid",
    prefix: l,
    sufix: h,
    leftIcon: m,
    rightIcon: g,
    disabled: x,
    readOnly: S,
    onFocus: k,
    onBlur: P,
    title: T,
    style: O,
    onChange: R,
    ...y
  } = n, C = g ? "right" : "left", w = `arkyn_input ${l ? "hasPrefix" : ""} ${h ? "hasSufix" : ""} ${d} ${c} ${x || S || t ? "opacity" : ""} ${i ? "errored" : ""} ${s ? "focused" : ""} ${u}`, $ = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: w,
    prefix: se(l, $, "prefix"),
    sufix: se(h, $, "sufix"),
    LeftIcon: m,
    RightIcon: g,
    disabled: x,
    readOnly: S,
    onFocus: k,
    onBlur: P,
    title: T,
    style: O,
    onChange: R,
    loadingPosition: C,
    iconSize: $,
    Spinner: /* @__PURE__ */ o.jsx(le, { className: "spinner", size: $, strokeWidth: 2.5 }),
    ...y
  };
}
function nr(n) {
  const [s, t] = ue(!1), i = ge(null), { inputRef: c, id: u, error: d } = fe(), l = c || i, h = n.isError || !!d, {
    disabled: m,
    title: g,
    style: x,
    className: S,
    prefix: k,
    sufix: P,
    iconSize: T,
    loadingPosition: O,
    isLoading: R,
    LeftIcon: y,
    readOnly: C,
    onFocus: F,
    onBlur: W,
    RightIcon: z,
    Spinner: D,
    ...B
  } = Hr({ ...n, id: u, isError: h }, s), w = y && !R, M = z && !R, $ = O === "left" && R, G = O === "right" && R;
  function E() {
    m || !(l != null && l.current) || (t(!0), l.current.focus());
  }
  function A(J) {
    t(!0), F && F(J);
  }
  function U(J) {
    t(!1), W && W(J);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: g,
      style: x,
      onClick: E,
      className: S,
      children: [
        k,
        $ && D,
        w && /* @__PURE__ */ o.jsx(y, { size: T, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: m || R,
            readOnly: C,
            ref: l,
            onFocus: A,
            onBlur: U,
            ...B
          }
        ),
        M && /* @__PURE__ */ o.jsx(z, { size: T, strokeWidth: 2.5 }),
        G && D,
        P
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
    /* @__PURE__ */ o.jsx(Tr, { component: nr, ...n, type: "text" })
  );
}
function yn(n) {
  return n.type === "currency" ? /* @__PURE__ */ o.jsx(Xr, { ...n }) : n.type === "masked" ? /* @__PURE__ */ o.jsx(Zr, { ...n }) : n.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(Mr, { ...n }) : /* @__PURE__ */ o.jsx(nr, { ...n });
}
function Qr(n) {
  const { className: s = "", ...t } = n;
  return { className: `arkyn_breadcrumb ${s}`.trim(), ...t };
}
function en(n) {
  const { pathname: s } = Qe(), {
    className: t = "",
    disabled: i = !1,
    to: c,
    ...u
  } = n, d = s === c ? "active" : "inactive", l = `arkyn_breadcrumb_link ${d} ${t}`;
  return {
    to: c,
    className: l.trim(),
    disabled: i || d === "active",
    ...u
  };
}
function bn(n) {
  const { className: s, ...t } = Qr(n);
  return /* @__PURE__ */ o.jsx("nav", { className: s, ...t });
}
function xn(n) {
  const { children: s, className: t, disabled: i, ...c } = en(n);
  return i ? /* @__PURE__ */ o.jsxs("p", { className: t, children: [
    /* @__PURE__ */ o.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    s
  ] }) : /* @__PURE__ */ o.jsxs(Ir, { className: t, ...c, children: [
    /* @__PURE__ */ o.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    s
  ] });
}
const tr = He({});
function rn(n) {
  const {
    isVisibled: s,
    makeInvisible: t,
    children: i,
    className: c = "",
    ...u
  } = n, l = `arkyn_modal_container ${s ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ o.jsx(tr.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ o.jsx(Or, { children: s && /* @__PURE__ */ o.jsxs("aside", { className: l.trim(), ...u, children: [
    /* @__PURE__ */ o.jsx(
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
    /* @__PURE__ */ o.jsx(
      Ue.div,
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
function nn(n) {
  const { alignment: s = "right", className: t, ...i } = n, c = `arkyn_modal_footer ${s} ${t}`;
  return /* @__PURE__ */ o.jsx("footer", { className: c.trim(), ...i });
}
function tn(n) {
  const { showCloseButton: s, className: t, children: i, ...c } = n, { makeInvisible: u } = Ze(tr), l = `arkyn_modal_header ${s ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ o.jsxs("header", { className: l.trim(), ...c, children: [
    i,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: u, children: /* @__PURE__ */ o.jsx(Pr, { size: 24 }) })
  ] });
}
const _n = { Container: rn, Header: tn, Footer: nn };
function Rn(n) {
  const {
    text: s,
    size: t = "lg",
    children: i,
    orientation: c = "top",
    className: u,
    ...d
  } = n;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${t} ${c} ${u}`,
      ...d,
      children: [
        i,
        /* @__PURE__ */ o.jsx("div", { className: "arkyn_tooltip_text", children: s })
      ]
    }
  );
}
function Sn(n = "") {
  const s = Qe(), t = new URLSearchParams(s.search), i = n ? `${n}:` : "", c = (u) => {
    Object.entries(u).forEach(([d, l]) => {
      l === void 0 ? t.delete(`${i}${d}`) : t.set(`${i}${d}`, String(l));
    });
  };
  return {
    getParam: (u) => t.get(`${i}${u}`),
    getScopedSearch: (u) => {
      c(u);
      let d = t.toString();
      return d && (d = "?" + d), d;
    }
  };
}
export {
  ln as Badge,
  bn as Breadcrumb,
  xn as BreadcrumbLink,
  hn as Button,
  fn as Divider,
  mn as FormController,
  vn as FormError,
  pn as FormLabel,
  gn as IconButton,
  yn as Input,
  _n as Modal,
  dn as Skeleton,
  Rn as Tooltip,
  Sn as useScopedParams
};
