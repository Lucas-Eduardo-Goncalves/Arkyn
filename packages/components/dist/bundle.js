import Xe, { createContext as He, useRef as de, useId as Nr, useContext as Ze, useState as ie, forwardRef as $r } from "react";
import { Loader2 as oe, ChevronRight as Me, X as Pr } from "lucide-react";
import { useActionData as wr, useLocation as Qe, Link as Ir } from "@remix-run/react";
import { InputMask as Tr } from "@react-input/mask";
import { AnimatePresence as Or, motion as Ue } from "framer-motion";
var ke = { exports: {} }, le = {};
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
    return le;
  Ke = 1;
  var r = Xe, s = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(u, d, m) {
    var v, x = {}, R = null, C = null;
    m !== void 0 && (R = "" + m), d.key !== void 0 && (R = "" + d.key), d.ref !== void 0 && (C = d.ref);
    for (v in d)
      a.call(d, v) && !l.hasOwnProperty(v) && (x[v] = d[v]);
    if (u && u.defaultProps)
      for (v in d = u.defaultProps, d)
        x[v] === void 0 && (x[v] = d[v]);
    return { $$typeof: s, type: u, key: R, ref: C, props: x, _owner: c.current };
  }
  return le.Fragment = t, le.jsx = f, le.jsxs = f, le;
}
var fe = {};
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
    var r = Xe, s = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), u = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), C = Symbol.for("react.offscreen"), P = Symbol.iterator, w = "@@iterator";
    function I(e) {
      if (e === null || typeof e != "object")
        return null;
      var n = P && e[P] || e[w];
      return typeof n == "function" ? n : null;
    }
    var b = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), h = 1; h < n; h++)
          i[h - 1] = arguments[h];
        j("error", e, i);
      }
    }
    function j(e, n, i) {
      {
        var h = b.ReactDebugCurrentFrame, _ = h.getStackAddendum();
        _ !== "" && (n += "%s", i = i.concat([_]));
        var E = i.map(function(y) {
          return String(y);
        });
        E.unshift("Warning: " + n), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var T = !1, F = !1, L = !1, z = !1, D = !1, O;
    O = Symbol.for("react.module.reference");
    function B(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || D || e === c || e === m || e === v || z || e === C || T || F || L || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === x || e.$$typeof === f || e.$$typeof === u || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === O || e.getModuleId !== void 0));
    }
    function k(e, n, i) {
      var h = e.displayName;
      if (h)
        return h;
      var _ = n.displayName || n.name || "";
      return _ !== "" ? i + "(" + _ + ")" : i;
    }
    function U(e) {
      return e.displayName || "Context";
    }
    function S(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && p("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case l:
          return "Profiler";
        case c:
          return "StrictMode";
        case m:
          return "Suspense";
        case v:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            var n = e;
            return U(n) + ".Consumer";
          case f:
            var i = e;
            return U(i._context) + ".Provider";
          case d:
            return k(e, e.render, "ForwardRef");
          case x:
            var h = e.displayName || null;
            return h !== null ? h : S(e.type) || "Memo";
          case R: {
            var _ = e, E = _._payload, y = _._init;
            try {
              return S(y(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, M = 0, V, Z, Q, ee, re, ne, K;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function G() {
      {
        if (M === 0) {
          V = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, ne = console.groupCollapsed, K = console.groupEnd;
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
        M++;
      }
    }
    function $e() {
      {
        if (M--, M === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, e, {
              value: V
            }),
            info: W({}, e, {
              value: Z
            }),
            warn: W({}, e, {
              value: Q
            }),
            error: W({}, e, {
              value: ee
            }),
            group: W({}, e, {
              value: re
            }),
            groupCollapsed: W({}, e, {
              value: ne
            }),
            groupEnd: W({}, e, {
              value: K
            })
          });
        }
        M < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = b.ReactCurrentDispatcher, ye;
    function he(e, n, i) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (_) {
            var h = _.stack.trim().match(/\n( *(at )?)/);
            ye = h && h[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var be = !1, me;
    {
      var tr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new tr();
    }
    function Pe(e, n) {
      if (!e || be)
        return "";
      {
        var i = me.get(e);
        if (i !== void 0)
          return i;
      }
      var h;
      be = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = xe.current, xe.current = null, G();
      try {
        if (n) {
          var y = function() {
            throw Error();
          };
          if (Object.defineProperty(y.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(y, []);
            } catch (Y) {
              h = Y;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (Y) {
              h = Y;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Y) {
            h = Y;
          }
          e();
        }
      } catch (Y) {
        if (Y && h && typeof Y.stack == "string") {
          for (var g = Y.stack.split(`
`), A = h.stack.split(`
`), N = g.length - 1, $ = A.length - 1; N >= 1 && $ >= 0 && g[N] !== A[$]; )
            $--;
          for (; N >= 1 && $ >= 0; N--, $--)
            if (g[N] !== A[$]) {
              if (N !== 1 || $ !== 1)
                do
                  if (N--, $--, $ < 0 || g[N] !== A[$]) {
                    var J = `
` + g[N].replace(" at new ", " at ");
                    return e.displayName && J.includes("<anonymous>") && (J = J.replace("<anonymous>", e.displayName)), typeof e == "function" && me.set(e, J), J;
                  }
                while (N >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        be = !1, xe.current = E, $e(), Error.prepareStackTrace = _;
      }
      var se = e ? e.displayName || e.name : "", H = se ? he(se) : "";
      return typeof e == "function" && me.set(e, H), H;
    }
    function sr(e, n, i) {
      return Pe(e, !1);
    }
    function ir(e) {
      var n = e.prototype;
      return !!(n && n.isReactComponent);
    }
    function ve(e, n, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, ir(e));
      if (typeof e == "string")
        return he(e);
      switch (e) {
        case m:
          return he("Suspense");
        case v:
          return he("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return sr(e.render);
          case x:
            return ve(e.type, n, i);
          case R: {
            var h = e, _ = h._payload, E = h._init;
            try {
              return ve(E(_), n, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, we = {}, Ie = b.ReactDebugCurrentFrame;
    function pe(e) {
      if (e) {
        var n = e._owner, i = ve(e.type, e._source, n ? n.type : null);
        Ie.setExtraStackFrame(i);
      } else
        Ie.setExtraStackFrame(null);
    }
    function or(e, n, i, h, _) {
      {
        var E = Function.call.bind(ce);
        for (var y in e)
          if (E(e, y)) {
            var g = void 0;
            try {
              if (typeof e[y] != "function") {
                var A = Error((h || "React class") + ": " + i + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              g = e[y](n, y, h, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              g = N;
            }
            g && !(g instanceof Error) && (pe(_), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", i, y, typeof g), pe(null)), g instanceof Error && !(g.message in we) && (we[g.message] = !0, pe(_), p("Failed %s type: %s", i, g.message), pe(null));
          }
      }
    }
    var ar = Array.isArray;
    function _e(e) {
      return ar(e);
    }
    function cr(e) {
      {
        var n = typeof Symbol == "function" && Symbol.toStringTag, i = n && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
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
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", cr(e)), Te(e);
    }
    var ue = b.ReactCurrentOwner, lr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Le, Se;
    Se = {};
    function fr(e) {
      if (ce.call(e, "ref")) {
        var n = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function dr(e) {
      if (ce.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function hr(e, n) {
      if (typeof e.ref == "string" && ue.current && n && ue.current.stateNode !== n) {
        var i = S(ue.current.type);
        Se[i] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', S(ue.current.type), e.ref), Se[i] = !0);
      }
    }
    function mr(e, n) {
      {
        var i = function() {
          Fe || (Fe = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function vr(e, n) {
      {
        var i = function() {
          Le || (Le = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", n));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var pr = function(e, n, i, h, _, E, y) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: n,
        ref: i,
        props: y,
        // Record the component responsible for creating this element.
        _owner: E
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function gr(e, n, i, h, _) {
      {
        var E, y = {}, g = null, A = null;
        i !== void 0 && (Oe(i), g = "" + i), dr(n) && (Oe(n.key), g = "" + n.key), fr(n) && (A = n.ref, hr(n, _));
        for (E in n)
          ce.call(n, E) && !lr.hasOwnProperty(E) && (y[E] = n[E]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (E in N)
            y[E] === void 0 && (y[E] = N[E]);
        }
        if (g || A) {
          var $ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && mr(y, $), A && vr(y, $);
        }
        return pr(e, g, A, _, h, ue.current, y);
      }
    }
    var Re = b.ReactCurrentOwner, ze = b.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var n = e._owner, i = ve(e.type, e._source, n ? n.type : null);
        ze.setExtraStackFrame(i);
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
        if (Re.current) {
          var e = S(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function xr(e) {
      {
        if (e !== void 0) {
          var n = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + n + ":" + i + ".";
        }
        return "";
      }
    }
    var We = {};
    function yr(e) {
      {
        var n = De();
        if (!n) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (n = `

Check the top-level render call using <` + i + ">.");
        }
        return n;
      }
    }
    function Ae(e, n) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = yr(n);
        if (We[i])
          return;
        We[i] = !0;
        var h = "";
        e && e._owner && e._owner !== Re.current && (h = " It was passed a child from " + S(e._owner.type) + "."), te(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, h), te(null);
      }
    }
    function Be(e, n) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var i = 0; i < e.length; i++) {
            var h = e[i];
            Ce(h) && Ae(h, n);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = I(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var E = _.call(e), y; !(y = E.next()).done; )
              Ce(y.value) && Ae(y.value, n);
        }
      }
    }
    function br(e) {
      {
        var n = e.type;
        if (n == null || typeof n == "string")
          return;
        var i;
        if (typeof n == "function")
          i = n.propTypes;
        else if (typeof n == "object" && (n.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        n.$$typeof === x))
          i = n.propTypes;
        else
          return;
        if (i) {
          var h = S(n);
          or(i, e.props, "prop", h, e);
        } else if (n.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var _ = S(n);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof n.getDefaultProps == "function" && !n.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function _r(e) {
      {
        for (var n = Object.keys(e.props), i = 0; i < n.length; i++) {
          var h = n[i];
          if (h !== "children" && h !== "key") {
            te(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), te(null);
            break;
          }
        }
        e.ref !== null && (te(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
      }
    }
    var Ve = {};
    function Ye(e, n, i, h, _, E) {
      {
        var y = B(e);
        if (!y) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = xr(_);
          A ? g += A : g += De();
          var N;
          e === null ? N = "null" : _e(e) ? N = "array" : e !== void 0 && e.$$typeof === s ? (N = "<" + (S(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, g);
        }
        var $ = gr(e, n, i, _, E);
        if ($ == null)
          return $;
        if (y) {
          var J = n.children;
          if (J !== void 0)
            if (h)
              if (_e(J)) {
                for (var se = 0; se < J.length; se++)
                  Be(J[se], e);
                Object.freeze && Object.freeze(J);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(J, e);
        }
        if (ce.call(n, "key")) {
          var H = S(e), Y = Object.keys(n).filter(function(kr) {
            return kr !== "key";
          }), je = Y.length > 0 ? "{key: someKey, " + Y.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[H + je]) {
            var jr = Y.length > 0 ? "{" + Y.join(": ..., ") + ": ...}" : "{}";
            p(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, H, jr, H), Ve[H + je] = !0;
          }
        }
        return e === a ? _r($) : br($), $;
      }
    }
    function Sr(e, n, i) {
      return Ye(e, n, i, !0);
    }
    function Rr(e, n, i) {
      return Ye(e, n, i, !1);
    }
    var Er = Rr, Cr = Sr;
    fe.Fragment = a, fe.jsx = Er, fe.jsxs = Cr;
  }()), fe;
}
process.env.NODE_ENV === "production" ? ke.exports = Fr() : ke.exports = Lr();
var o = ke.exports;
function ge(r, s) {
  return s ? /* @__PURE__ */ o.jsx(s, { size: r, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function zr(r) {
  const {
    variant: s = "ghost",
    scheme: t = "primary",
    size: a = "md",
    leftIcon: c,
    rightIcon: l,
    className: f = "",
    children: u,
    ...d
  } = r, v = { md: 12, lg: 14 }[a];
  return {
    className: `arkyn_badge ${s} ${t} ${a} ${f}`.trim(),
    children: u,
    leftIcon: ge(v, c),
    rightIcon: ge(v, l),
    ...d
  };
}
function hn(r) {
  const { leftIcon: s, children: t, rightIcon: a, ...c } = zr(r);
  return /* @__PURE__ */ o.jsxs("div", { ...c, children: [
    s,
    t,
    a
  ] });
}
function mn(r) {
  const {
    className: s,
    orientation: t = "horizontal",
    ...a
  } = r, c = `arkyn_divider ${t} ${s}`;
  return /* @__PURE__ */ o.jsx("div", { className: c, ...a });
}
function vn({ className: r, ...s }) {
  const t = "arkyn_skeleton " + r;
  return /* @__PURE__ */ o.jsx("div", { className: t.trim(), ...s });
}
function Dr(r) {
  const {
    isLoading: s = !1,
    scheme: t = "primary",
    variant: a = "solid",
    loadingText: c,
    size: l = "md",
    leftIcon: f,
    rightIcon: u,
    disabled: d,
    className: m = "",
    children: v,
    ...x
  } = r, C = { xs: 12, sm: 16, md: 20, lg: 24 }[l];
  return {
    className: `arkyn_button loading_text_${!!c} ${a} ${t} ${l} loading_${s} ${m}`.trim(),
    loadingText: c,
    children: v,
    iconSize: C,
    disabled: d || s,
    leftIcon: ge(C, f),
    rightIcon: ge(C, u),
    ...x
  };
}
function pn(r) {
  const { leftIcon: s, rightIcon: t, iconSize: a, children: c, loadingText: l, ...f } = Dr(r);
  return /* @__PURE__ */ o.jsxs("button", { ...f, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ o.jsx(oe, { size: a, strokeWidth: 2.5 }),
      l && l
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "content", children: [
      s,
      c,
      t
    ] })
  ] });
}
const er = He({});
function gn({ children: r, ...s }) {
  var u, d;
  const t = wr(), a = de(null), c = ((u = a.current) == null ? void 0 : u.name) || "", l = ((d = t == null ? void 0 : t.fieldErrors) == null ? void 0 : d[c]) || null, f = Nr();
  return /* @__PURE__ */ o.jsx(er.Provider, { value: { error: l, id: f, inputRef: a }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...s, children: r }) });
}
function ae() {
  return Ze(er);
}
function xn({ children: r }) {
  const { error: s } = ae();
  return r ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: r }) : s ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: s }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Wr(r) {
  const { showAsterisk: s = !1, className: t = "", ...a } = r;
  return {
    className: `arkyn_form_label ${s ? "show-asterisk" : ""} ${t}`.trim(),
    ...a
  };
}
function yn(r) {
  const { id: s } = ae();
  return /* @__PURE__ */ o.jsx("label", { ...Wr(r), htmlFor: s });
}
const qe = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function bn(r) {
  const {
    isLoading: s = !1,
    scheme: t = "primary",
    variant: a = "solid",
    size: c = "md",
    icon: l,
    disabled: f,
    className: u = "",
    ...d
  } = r, m = `arkyn_icon_button ${a} ${t} ${c} loading_${s} ${u}`;
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      disabled: f || s,
      className: m.trim(),
      ...d,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(oe, { size: qe[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + c, children: /* @__PURE__ */ o.jsx(l, { size: qe[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function X(r, s, t) {
  if (!r)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof r == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: r });
  const a = r;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(a, { color: "var(--secondary-600)", size: s, strokeWidth: 2.5 }) });
}
function Ar(r, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: f = "solid",
    prefix: u,
    sufix: d,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    onChange: b,
    ...p
  } = r, j = v ? "right" : "left", O = `arkyn_input ${u ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, k = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: O,
    prefix: X(u, k, "prefix"),
    sufix: X(d, k, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    onChange: b,
    loadingPosition: j,
    iconSize: k,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...p
  };
}
function Ne(r) {
  return r && r.replace(/[^0-9]/g, "");
}
function Br(r, s) {
  let t = "", a = 0;
  return Array.from(r).forEach((c, l) => {
    s[l + a].match(/[0-9]/) || (t += s[l + a], a++), t += c;
  }), t;
}
function Vr(r) {
  return r.length > 11 ? "CNPJ" : "CPF";
}
const rr = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Yr = Ne(rr.CNPJ).length;
function Mr(r) {
  const [s, t] = ie(!1), [a, c] = ie(
    Ne((r == null ? void 0 : r.defaultValue) || "")
  ), l = de(null), { inputRef: f, id: u, error: d } = ae(), m = f || l, v = r.isError || !!d, {
    disabled: x,
    title: R,
    style: C,
    className: P,
    prefix: w,
    sufix: I,
    iconSize: b,
    loadingPosition: p,
    isLoading: j,
    LeftIcon: T,
    readOnly: F,
    onFocus: L,
    onBlur: z,
    RightIcon: D,
    Spinner: O,
    onChange: B,
    value: k,
    defaultValue: U = "",
    ...S
  } = Ar({ ...r, id: u, isError: v }, s), W = T && !j, M = D && !j, V = p === "left" && j, Z = p === "right" && j;
  function Q() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function ee(K) {
    let q = Ne(K.target.value);
    const G = Vr(q);
    q.length > Yr || (q = Br(q, rr[G]), K.target.value = q, c(q), B && B(K));
  }
  function re(K) {
    t(!0), L && L(K);
  }
  function ne(K) {
    t(!1), z && z(K);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: R,
      style: C,
      onClick: Q,
      className: P,
      children: [
        w,
        V && O,
        W && /* @__PURE__ */ o.jsx(T, { size: b, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: x || j,
            readOnly: F,
            ref: m,
            value: k || a,
            onFocus: re,
            onChange: ee,
            onBlur: ne,
            ...S
          }
        ),
        M && /* @__PURE__ */ o.jsx(D, { size: b, strokeWidth: 2.5 }),
        Z && O,
        I
      ]
    }
  );
}
function Ur(r, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: f = "solid",
    prefix: u,
    sufix: d,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    showCents: b = !1,
    max: p = 1e9,
    onChange: j,
    ...T
  } = r, F = v ? "right" : "left", k = `arkyn_input ${u ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, S = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: k,
    prefix: X(u, S, "prefix"),
    sufix: X(d, S, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    max: p,
    onChange: j,
    showCents: b,
    loadingPosition: F,
    iconSize: S,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: S, strokeWidth: 2.5 }),
    ...T
  };
}
const Kr = /^[1-9]{1}$/, Jr = /^[0-9]{1}$/, Ge = 8;
function qr(r, s) {
  if (r === 0)
    return "";
  const t = (r / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return s ? t : t.replace("R$", "").trim();
}
function Gr(r) {
  const { currencyValue: s, event: t, max: a, setCurrencyValue: c } = r, { key: l, keyCode: f } = t;
  if (s === 0 && !Kr.test(l) || s !== 0 && !Jr.test(l) && f !== Ge)
    return;
  const u = s.toString();
  let d;
  if (f !== Ge) {
    const m = s === 0 ? l : `${u}${l}`;
    d = Number.parseInt(m, 10);
  } else {
    const m = u.slice(0, -1);
    d = m === "" ? 0 : Number.parseInt(m, 10);
  }
  d > Number(a) || c(d);
}
function Xr(r) {
  const [s, t] = ie(!1), [a, c] = ie(r.defaultValue || 0), l = de(null), { inputRef: f, id: u, error: d } = ae(), m = f || l, v = r.isError || !!d, {
    disabled: x,
    title: R,
    style: C,
    className: P,
    prefix: w,
    sufix: I,
    iconSize: b,
    loadingPosition: p,
    isLoading: j,
    LeftIcon: T,
    readOnly: F,
    onFocus: L,
    onBlur: z,
    RightIcon: D,
    Spinner: O,
    value: B,
    max: k,
    onKeyDown: U,
    onChange: S,
    showCents: W,
    ...M
  } = Ur({ ...r, id: u, isError: v }, s), V = T && !j, Z = D && !j, Q = p === "left" && j, ee = p === "right" && j;
  function re() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function ne(G) {
    Gr({ currencyValue: a, event: G, max: k, setCurrencyValue: c }), S && S(a), U && U(G);
  }
  function K(G) {
    t(!0), L && L(G);
  }
  function q(G) {
    t(!1), z && z(G);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: R,
      style: C,
      onClick: re,
      className: P,
      children: [
        w,
        Q && O,
        V && /* @__PURE__ */ o.jsx(T, { size: b, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: qr(B || a, W),
            onKeyDown: ne,
            disabled: x || j,
            readOnly: F,
            ref: m,
            onFocus: K,
            onBlur: q,
            onChange: () => {
            },
            ...M
          }
        ),
        ee && O,
        Z && /* @__PURE__ */ o.jsx(D, { size: b, strokeWidth: 2.5 }),
        I
      ]
    }
  );
}
function Hr(r, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: f = "solid",
    prefix: u,
    sufix: d,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    onChange: b,
    showMask: p = !0,
    type: j,
    ...T
  } = r, F = v ? "right" : "left", k = `arkyn_input ${u ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, S = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: k,
    prefix: X(u, S, "prefix"),
    sufix: X(d, S, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    onChange: b,
    loadingPosition: F,
    iconSize: S,
    showMask: p,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: S, strokeWidth: 2.5 }),
    ...T
  };
}
const Zr = $r((r, s) => /* @__PURE__ */ o.jsx("input", { ref: s, ...r }));
function Qr(r) {
  const [s, t] = ie(!1), a = de(null), { inputRef: c, id: l, error: f } = ae(), u = c || a, d = r.isError || !!f, {
    disabled: m,
    title: v,
    style: x,
    className: R,
    prefix: C,
    sufix: P,
    iconSize: w,
    loadingPosition: I,
    isLoading: b,
    LeftIcon: p,
    readOnly: j,
    onFocus: T,
    onBlur: F,
    RightIcon: L,
    Spinner: z,
    ...D
  } = Hr({ ...r, id: l, isError: d }, s), O = p && !b, B = L && !b, k = I === "left" && b, U = I === "right" && b;
  function S() {
    m || !(u != null && u.current) || (t(!0), u.current.focus());
  }
  function W(V) {
    t(!0), T && T(V);
  }
  function M(V) {
    t(!1), F && F(V);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: v,
      style: x,
      onClick: S,
      className: R,
      children: [
        C,
        k && z,
        O && /* @__PURE__ */ o.jsx(p, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          Tr,
          {
            component: Zr,
            ref: u,
            onFocus: W,
            onBlur: M,
            ...D
          }
        ),
        B && /* @__PURE__ */ o.jsx(L, { size: w, strokeWidth: 2.5 }),
        U && z,
        P
      ]
    }
  );
}
function en(r, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: f = "solid",
    prefix: u,
    sufix: d,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    onChange: b,
    ...p
  } = r, j = v ? "right" : "left", O = `arkyn_input ${u ? "hasPrefix" : ""} ${d ? "hasSufix" : ""} ${f} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, k = { md: 20, lg: 20 }[c];
  return {
    isLoading: t,
    className: O,
    prefix: X(u, k, "prefix"),
    sufix: X(d, k, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: C,
    onBlur: P,
    title: w,
    style: I,
    onChange: b,
    loadingPosition: j,
    iconSize: k,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...p
  };
}
function rn(r) {
  const [s, t] = ie(!1), a = de(null), { inputRef: c, id: l, error: f } = ae(), u = c || a, d = r.isError || !!f, {
    disabled: m,
    title: v,
    style: x,
    className: R,
    prefix: C,
    sufix: P,
    iconSize: w,
    loadingPosition: I,
    isLoading: b,
    LeftIcon: p,
    readOnly: j,
    onFocus: T,
    onBlur: F,
    RightIcon: L,
    Spinner: z,
    ...D
  } = en({ ...r, id: l, isError: d }, s), O = p && !b, B = L && !b, k = I === "left" && b, U = I === "right" && b;
  function S() {
    m || !(u != null && u.current) || (t(!0), u.current.focus());
  }
  function W(V) {
    t(!0), T && T(V);
  }
  function M(V) {
    t(!1), F && F(V);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: v,
      style: x,
      onClick: S,
      className: R,
      children: [
        C,
        k && z,
        O && /* @__PURE__ */ o.jsx(p, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: m || b,
            readOnly: j,
            ref: u,
            onFocus: W,
            onBlur: M,
            ...D
          }
        ),
        B && /* @__PURE__ */ o.jsx(L, { size: w, strokeWidth: 2.5 }),
        U && z,
        P
      ]
    }
  );
}
function _n(r) {
  return r.type === "currency" ? /* @__PURE__ */ o.jsx(Xr, { ...r }) : r.type === "masked" ? /* @__PURE__ */ o.jsx(Qr, { ...r }) : r.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(Mr, { ...r }) : /* @__PURE__ */ o.jsx(rn, { ...r });
}
function nn(r) {
  const { className: s = "", ...t } = r;
  return { className: `arkyn_breadcrumb ${s}`.trim(), ...t };
}
function tn(r) {
  const { pathname: s } = Qe(), {
    className: t = "",
    disabled: a = !1,
    to: c,
    ...l
  } = r, f = s === c ? "active" : "inactive", u = `arkyn_breadcrumb_link ${f} ${t}`;
  return {
    to: c,
    className: u.trim(),
    disabled: a || f === "active",
    ...l
  };
}
function Sn(r) {
  const { className: s, ...t } = nn(r);
  return /* @__PURE__ */ o.jsx("nav", { className: s, ...t });
}
function Rn(r) {
  const { children: s, className: t, disabled: a, ...c } = tn(r);
  return a ? /* @__PURE__ */ o.jsxs("p", { className: t, children: [
    /* @__PURE__ */ o.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    s
  ] }) : /* @__PURE__ */ o.jsxs(Ir, { className: t, ...c, children: [
    /* @__PURE__ */ o.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    s
  ] });
}
const nr = He({});
function sn(r) {
  const {
    isVisibled: s,
    makeInvisible: t,
    children: a,
    className: c = "",
    ...l
  } = r, u = `arkyn_modal_container ${s ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ o.jsx(nr.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ o.jsx(Or, { children: s && /* @__PURE__ */ o.jsxs("aside", { className: u.trim(), ...l, children: [
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
        children: a
      }
    )
  ] }) }) });
}
function on(r) {
  const { alignment: s = "right", className: t, ...a } = r, c = `arkyn_modal_footer ${s} ${t}`;
  return /* @__PURE__ */ o.jsx("footer", { className: c.trim(), ...a });
}
function an(r) {
  const { showCloseButton: s, className: t, children: a, ...c } = r, { makeInvisible: l } = Ze(nr), u = `arkyn_modal_header ${s ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ o.jsxs("header", { className: u.trim(), ...c, children: [
    a,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: l, children: /* @__PURE__ */ o.jsx(Pr, { size: 24 }) })
  ] });
}
const En = { Container: sn, Header: an, Footer: on };
function Cn(r) {
  const {
    text: s,
    size: t = "lg",
    children: a,
    orientation: c = "top",
    className: l,
    ...f
  } = r;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${t} ${c} ${l}`,
      ...f,
      children: [
        a,
        /* @__PURE__ */ o.jsx("div", { className: "arkyn_tooltip_text", children: s })
      ]
    }
  );
}
function jn(r = "") {
  const s = Qe(), t = new URLSearchParams(s.search), a = r ? `${r}:` : "", c = (l) => {
    Object.entries(l).forEach(([f, u]) => {
      u === void 0 ? t.delete(`${a}${f}`) : t.set(`${a}${f}`, String(u));
    });
  };
  return {
    getParam: (l) => t.get(`${a}${l}`),
    getScopedSearch: (l) => {
      c(l);
      let f = t.toString();
      return f && (f = "?" + f), f;
    }
  };
}
export {
  hn as Badge,
  Sn as Breadcrumb,
  Rn as BreadcrumbLink,
  pn as Button,
  mn as Divider,
  gn as FormController,
  xn as FormError,
  yn as FormLabel,
  bn as IconButton,
  _n as Input,
  En as Modal,
  vn as Skeleton,
  Cn as Tooltip,
  jn as useScopedParams
};
