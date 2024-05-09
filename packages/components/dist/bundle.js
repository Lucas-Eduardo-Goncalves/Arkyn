import "./style.css"
import Xe, { createContext as He, useRef as de, useId as kr, useContext as Ze, useState as ie } from "react";
import { Loader2 as oe, ChevronRight as Me, X as Nr } from "lucide-react";
import { useActionData as $r, useLocation as Pr, Link as Ir } from "@remix-run/react";
import { InputMask as wr } from "@react-input/mask";
import { AnimatePresence as Tr, motion as Ue } from "framer-motion";
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
function Or() {
  if (Ke)
    return le;
  Ke = 1;
  var n = Xe, s = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(u, f, m) {
    var v, x = {}, R = null, E = null;
    m !== void 0 && (R = "" + m), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (E = f.ref);
    for (v in f)
      a.call(f, v) && !l.hasOwnProperty(v) && (x[v] = f[v]);
    if (u && u.defaultProps)
      for (v in f = u.defaultProps, f)
        x[v] === void 0 && (x[v] = f[v]);
    return { $$typeof: s, type: u, key: R, ref: E, props: x, _owner: c.current };
  }
  return le.Fragment = t, le.jsx = h, le.jsxs = h, le;
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
function Fr() {
  return Je || (Je = 1, process.env.NODE_ENV !== "production" && function() {
    var n = Xe, s = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), P = Symbol.iterator, I = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[I];
      return typeof r == "function" ? r : null;
    }
    var b = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function g(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), d = 1; d < r; d++)
          i[d - 1] = arguments[d];
        C("error", e, i);
      }
    }
    function C(e, r, i) {
      {
        var d = b.ReactDebugCurrentFrame, _ = d.getStackAddendum();
        _ !== "" && (r += "%s", i = i.concat([_]));
        var S = i.map(function(y) {
          return String(y);
        });
        S.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, S);
      }
    }
    var O = !1, A = !1, F = !1, L = !1, B = !1, T;
    T = Symbol.for("react.module.reference");
    function D(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || B || e === c || e === m || e === v || L || e === E || O || A || F || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === x || e.$$typeof === h || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === T || e.getModuleId !== void 0));
    }
    function k(e, r, i) {
      var d = e.displayName;
      if (d)
        return d;
      var _ = r.displayName || r.name || "";
      return _ !== "" ? i + "(" + _ + ")" : i;
    }
    function z(e) {
      return e.displayName || "Context";
    }
    function j(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
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
            var r = e;
            return z(r) + ".Consumer";
          case h:
            var i = e;
            return z(i._context) + ".Provider";
          case f:
            return k(e, e.render, "ForwardRef");
          case x:
            var d = e.displayName || null;
            return d !== null ? d : j(e.type) || "Memo";
          case R: {
            var _ = e, S = _._payload, y = _._init;
            try {
              return j(y(S));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Y = Object.assign, K = 0, q, Z, Q, ee, re, ne, M;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function G() {
      {
        if (K === 0) {
          q = console.log, Z = console.info, Q = console.warn, ee = console.error, re = console.group, ne = console.groupCollapsed, M = console.groupEnd;
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
        K++;
      }
    }
    function $e() {
      {
        if (K--, K === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Y({}, e, {
              value: q
            }),
            info: Y({}, e, {
              value: Z
            }),
            warn: Y({}, e, {
              value: Q
            }),
            error: Y({}, e, {
              value: ee
            }),
            group: Y({}, e, {
              value: re
            }),
            groupCollapsed: Y({}, e, {
              value: ne
            }),
            groupEnd: Y({}, e, {
              value: M
            })
          });
        }
        K < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var xe = b.ReactCurrentDispatcher, ye;
    function he(e, r, i) {
      {
        if (ye === void 0)
          try {
            throw Error();
          } catch (_) {
            var d = _.stack.trim().match(/\n( *(at )?)/);
            ye = d && d[1] || "";
          }
        return `
` + ye + e;
      }
    }
    var be = !1, me;
    {
      var nr = typeof WeakMap == "function" ? WeakMap : Map;
      me = new nr();
    }
    function Pe(e, r) {
      if (!e || be)
        return "";
      {
        var i = me.get(e);
        if (i !== void 0)
          return i;
      }
      var d;
      be = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var S;
      S = xe.current, xe.current = null, G();
      try {
        if (r) {
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
            } catch (V) {
              d = V;
            }
            Reflect.construct(e, [], y);
          } else {
            try {
              y.call();
            } catch (V) {
              d = V;
            }
            e.call(y.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (V) {
            d = V;
          }
          e();
        }
      } catch (V) {
        if (V && d && typeof V.stack == "string") {
          for (var p = V.stack.split(`
`), W = d.stack.split(`
`), N = p.length - 1, $ = W.length - 1; N >= 1 && $ >= 0 && p[N] !== W[$]; )
            $--;
          for (; N >= 1 && $ >= 0; N--, $--)
            if (p[N] !== W[$]) {
              if (N !== 1 || $ !== 1)
                do
                  if (N--, $--, $ < 0 || p[N] !== W[$]) {
                    var U = `
` + p[N].replace(" at new ", " at ");
                    return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), typeof e == "function" && me.set(e, U), U;
                  }
                while (N >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        be = !1, xe.current = S, $e(), Error.prepareStackTrace = _;
      }
      var se = e ? e.displayName || e.name : "", H = se ? he(se) : "";
      return typeof e == "function" && me.set(e, H), H;
    }
    function tr(e, r, i) {
      return Pe(e, !1);
    }
    function sr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function ve(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Pe(e, sr(e));
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
          case f:
            return tr(e.render);
          case x:
            return ve(e.type, r, i);
          case R: {
            var d = e, _ = d._payload, S = d._init;
            try {
              return ve(S(_), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var ce = Object.prototype.hasOwnProperty, Ie = {}, we = b.ReactDebugCurrentFrame;
    function ge(e) {
      if (e) {
        var r = e._owner, i = ve(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(i);
      } else
        we.setExtraStackFrame(null);
    }
    function ir(e, r, i, d, _) {
      {
        var S = Function.call.bind(ce);
        for (var y in e)
          if (S(e, y)) {
            var p = void 0;
            try {
              if (typeof e[y] != "function") {
                var W = Error((d || "React class") + ": " + i + " type `" + y + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[y] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              p = e[y](r, y, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              p = N;
            }
            p && !(p instanceof Error) && (ge(_), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, y, typeof p), ge(null)), p instanceof Error && !(p.message in Ie) && (Ie[p.message] = !0, ge(_), g("Failed %s type: %s", i, p.message), ge(null));
          }
      }
    }
    var or = Array.isArray;
    function _e(e) {
      return or(e);
    }
    function ar(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function cr(e) {
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
      if (cr(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ar(e)), Te(e);
    }
    var ue = b.ReactCurrentOwner, ur = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Fe, Le, Re;
    Re = {};
    function lr(e) {
      if (ce.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function fr(e) {
      if (ce.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function dr(e, r) {
      if (typeof e.ref == "string" && ue.current && r && ue.current.stateNode !== r) {
        var i = j(ue.current.type);
        Re[i] || (g('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ue.current.type), e.ref), Re[i] = !0);
      }
    }
    function hr(e, r) {
      {
        var i = function() {
          Fe || (Fe = !0, g("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function mr(e, r) {
      {
        var i = function() {
          Le || (Le = !0, g("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var vr = function(e, r, i, d, _, S, y) {
      var p = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: y,
        // Record the component responsible for creating this element.
        _owner: S
      };
      return p._store = {}, Object.defineProperty(p._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(p, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: d
      }), Object.defineProperty(p, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(p.props), Object.freeze(p)), p;
    };
    function gr(e, r, i, d, _) {
      {
        var S, y = {}, p = null, W = null;
        i !== void 0 && (Oe(i), p = "" + i), fr(r) && (Oe(r.key), p = "" + r.key), lr(r) && (W = r.ref, dr(r, _));
        for (S in r)
          ce.call(r, S) && !ur.hasOwnProperty(S) && (y[S] = r[S]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (S in N)
            y[S] === void 0 && (y[S] = N[S]);
        }
        if (p || W) {
          var $ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          p && hr(y, $), W && mr(y, $);
        }
        return vr(e, p, W, _, d, ue.current, y);
      }
    }
    var Se = b.ReactCurrentOwner, ze = b.ReactDebugCurrentFrame;
    function te(e) {
      if (e) {
        var r = e._owner, i = ve(e.type, e._source, r ? r.type : null);
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
        if (Se.current) {
          var e = j(Se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function pr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var We = {};
    function xr(e) {
      {
        var r = De();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function Ae(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = xr(r);
        if (We[i])
          return;
        We[i] = !0;
        var d = "";
        e && e._owner && e._owner !== Se.current && (d = " It was passed a child from " + j(e._owner.type) + "."), te(e), g('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), te(null);
      }
    }
    function Be(e, r) {
      {
        if (typeof e != "object")
          return;
        if (_e(e))
          for (var i = 0; i < e.length; i++) {
            var d = e[i];
            Ce(d) && Ae(d, r);
          }
        else if (Ce(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = w(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var S = _.call(e), y; !(y = S.next()).done; )
              Ce(y.value) && Ae(y.value, r);
        }
      }
    }
    function yr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var i;
        if (typeof r == "function")
          i = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === x))
          i = r.propTypes;
        else
          return;
        if (i) {
          var d = j(r);
          ir(i, e.props, "prop", d, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var _ = j(r);
          g("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && g("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function br(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var d = r[i];
          if (d !== "children" && d !== "key") {
            te(e), g("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), te(null);
            break;
          }
        }
        e.ref !== null && (te(e), g("Invalid attribute `ref` supplied to `React.Fragment`."), te(null));
      }
    }
    var Ve = {};
    function Ye(e, r, i, d, _, S) {
      {
        var y = D(e);
        if (!y) {
          var p = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (p += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = pr(_);
          W ? p += W : p += De();
          var N;
          e === null ? N = "null" : _e(e) ? N = "array" : e !== void 0 && e.$$typeof === s ? (N = "<" + (j(e.type) || "Unknown") + " />", p = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, g("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, p);
        }
        var $ = gr(e, r, i, _, S);
        if ($ == null)
          return $;
        if (y) {
          var U = r.children;
          if (U !== void 0)
            if (d)
              if (_e(U)) {
                for (var se = 0; se < U.length; se++)
                  Be(U[se], e);
                Object.freeze && Object.freeze(U);
              } else
                g("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Be(U, e);
        }
        if (ce.call(r, "key")) {
          var H = j(e), V = Object.keys(r).filter(function(jr) {
            return jr !== "key";
          }), je = V.length > 0 ? "{key: someKey, " + V.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Ve[H + je]) {
            var Cr = V.length > 0 ? "{" + V.join(": ..., ") + ": ...}" : "{}";
            g(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, je, H, Cr, H), Ve[H + je] = !0;
          }
        }
        return e === a ? br($) : yr($), $;
      }
    }
    function _r(e, r, i) {
      return Ye(e, r, i, !0);
    }
    function Rr(e, r, i) {
      return Ye(e, r, i, !1);
    }
    var Sr = Rr, Er = _r;
    fe.Fragment = a, fe.jsx = Sr, fe.jsxs = Er;
  }()), fe;
}
process.env.NODE_ENV === "production" ? ke.exports = Or() : ke.exports = Fr();
var o = ke.exports;
function pe(n, s) {
  return s ? /* @__PURE__ */ o.jsx(s, { size: n, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Lr(n) {
  const {
    variant: s = "ghost",
    scheme: t = "primary",
    size: a = "md",
    leftIcon: c,
    rightIcon: l,
    className: h = "",
    children: u,
    ...f
  } = n, v = { md: 12, lg: 14 }[a];
  return {
    className: `arkyn_badge ${s} ${t} ${a} ${h}`.trim(),
    children: u,
    leftIcon: pe(v, c),
    rightIcon: pe(v, l),
    ...f
  };
}
function fn(n) {
  const { leftIcon: s, children: t, rightIcon: a, ...c } = Lr(n);
  return /* @__PURE__ */ o.jsxs("div", { ...c, children: [
    s,
    t,
    a
  ] });
}
function dn(n) {
  const {
    className: s,
    orientation: t = "horizontal",
    ...a
  } = n, c = `arkyn_divider ${t} ${s}`;
  return /* @__PURE__ */ o.jsx("div", { className: c, ...a });
}
function zr(n) {
  const {
    isLoading: s = !1,
    scheme: t = "primary",
    variant: a = "solid",
    loadingText: c,
    size: l = "md",
    leftIcon: h,
    rightIcon: u,
    disabled: f,
    className: m = "",
    children: v,
    ...x
  } = n, E = { xs: 12, sm: 16, md: 20, lg: 24 }[l];
  return {
    className: `arkyn_button loading_text_${!!c} ${a} ${t} ${l} loading_${s} ${m}`.trim(),
    loadingText: c,
    children: v,
    iconSize: E,
    disabled: f || s,
    leftIcon: pe(E, h),
    rightIcon: pe(E, u),
    ...x
  };
}
function hn(n) {
  const { leftIcon: s, rightIcon: t, iconSize: a, children: c, loadingText: l, ...h } = zr(n);
  return /* @__PURE__ */ o.jsxs("button", { ...h, children: [
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
const Qe = He({});
function mn({ children: n, ...s }) {
  var u, f;
  const t = $r(), a = de(null), c = ((u = a.current) == null ? void 0 : u.name) || "", l = ((f = t == null ? void 0 : t.fieldErrors) == null ? void 0 : f[c]) || null, h = kr();
  return /* @__PURE__ */ o.jsx(Qe.Provider, { value: { error: l, id: h, inputRef: a }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...s, children: n }) });
}
function ae() {
  return Ze(Qe);
}
function vn() {
  const { error: n } = ae();
  return n ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Dr(n) {
  const { showAsterisk: s = !1, className: t = "", ...a } = n;
  return {
    className: `arkyn_form_label ${s ? "show-asterisk" : ""} ${t}`.trim(),
    ...a
  };
}
function gn(n) {
  const { id: s } = ae();
  return /* @__PURE__ */ o.jsx("label", { ...Dr(n), htmlFor: s });
}
const qe = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function pn(n) {
  const {
    isLoading: s = !1,
    scheme: t = "primary",
    variant: a = "solid",
    size: c = "md",
    icon: l,
    disabled: h,
    className: u = "",
    ...f
  } = n, m = `arkyn_icon_button ${a} ${t} ${c} loading_${s} ${u}`;
  return /* @__PURE__ */ o.jsxs(
    "button",
    {
      disabled: h || s,
      className: m.trim(),
      ...f,
      children: [
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(oe, { size: qe[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + c, children: /* @__PURE__ */ o.jsx(l, { size: qe[c], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function X(n, s, t) {
  if (!n)
    return /* @__PURE__ */ o.jsx(o.Fragment, {});
  if (typeof n == "string")
    return /* @__PURE__ */ o.jsx("p", { className: t, children: n });
  const a = n;
  return /* @__PURE__ */ o.jsx("p", { className: t, children: /* @__PURE__ */ o.jsx(a, { color: "var(--secondary-600)", size: s, strokeWidth: 2.5 }) });
}
function Wr(n, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: u,
    sufix: f,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    onChange: b,
    ...g
  } = n, C = v ? "right" : "left", T = `arkyn_input ${u ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${h} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, k = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: T,
    prefix: X(u, k, "prefix"),
    sufix: X(f, k, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    onChange: b,
    loadingPosition: C,
    iconSize: k,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...g
  };
}
function Ne(n) {
  return n && n.replace(/[^0-9]/g, "");
}
function Ar(n, s) {
  let t = "", a = 0;
  return Array.from(n).forEach((c, l) => {
    s[l + a].match(/[0-9]/) || (t += s[l + a], a++), t += c;
  }), t;
}
function Br(n) {
  return n.length > 11 ? "CNPJ" : "CPF";
}
const er = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Vr = Ne(er.CNPJ).length;
function Yr(n) {
  const [s, t] = ie(!1), [a, c] = ie(
    Ne((n == null ? void 0 : n.defaultValue) || "")
  ), l = de(null), { inputRef: h, id: u, error: f } = ae(), m = h || l, v = n.isError || !!f, {
    disabled: x,
    title: R,
    style: E,
    className: P,
    prefix: I,
    sufix: w,
    iconSize: b,
    loadingPosition: g,
    isLoading: C,
    LeftIcon: O,
    readOnly: A,
    onFocus: F,
    onBlur: L,
    RightIcon: B,
    Spinner: T,
    onChange: D,
    value: k,
    defaultValue: z = "",
    ...j
  } = Wr({ ...n, id: u, isError: v }, s), Y = O && !C, K = B && !C, q = g === "left" && C, Z = g === "right" && C;
  function Q() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function ee(M) {
    let J = Ne(M.target.value);
    const G = Br(J);
    J.length > Vr || (J = Ar(J, er[G]), M.target.value = J, c(J), D && D(M));
  }
  function re(M) {
    t(!0), F && F(M);
  }
  function ne(M) {
    t(!1), L && L(M);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: R,
      style: E,
      onClick: Q,
      className: P,
      children: [
        I,
        q && T,
        Y && /* @__PURE__ */ o.jsx(O, { size: b, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: x || C,
            readOnly: A,
            ref: m,
            value: k || a,
            onFocus: re,
            onChange: ee,
            onBlur: ne,
            ...j
          }
        ),
        K && /* @__PURE__ */ o.jsx(B, { size: b, strokeWidth: 2.5 }),
        Z && T,
        w
      ]
    }
  );
}
function Mr(n, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: u,
    sufix: f,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    showCents: b = !1,
    max: g = 1e9,
    onChange: C,
    ...O
  } = n, A = v ? "right" : "left", k = `arkyn_input ${u ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${h} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, j = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: k,
    prefix: X(u, j, "prefix"),
    sufix: X(f, j, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    max: g,
    onChange: C,
    showCents: b,
    loadingPosition: A,
    iconSize: j,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...O
  };
}
const Ur = /^[1-9]{1}$/, Kr = /^[0-9]{1}$/, Ge = 8;
function Jr(n, s) {
  if (n === 0)
    return "";
  const t = (n / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return s ? t : t.replace("R$", "").trim();
}
function qr(n) {
  const { currencyValue: s, event: t, max: a, setCurrencyValue: c } = n, { key: l, keyCode: h } = t;
  if (s === 0 && !Ur.test(l) || s !== 0 && !Kr.test(l) && h !== Ge)
    return;
  const u = s.toString();
  let f;
  if (h !== Ge) {
    const m = s === 0 ? l : `${u}${l}`;
    f = Number.parseInt(m, 10);
  } else {
    const m = u.slice(0, -1);
    f = m === "" ? 0 : Number.parseInt(m, 10);
  }
  f > Number(a) || c(f);
}
function Gr(n) {
  const [s, t] = ie(!1), [a, c] = ie(n.defaultValue || 0), l = de(null), { inputRef: h, id: u, error: f } = ae(), m = h || l, v = n.isError || !!f, {
    disabled: x,
    title: R,
    style: E,
    className: P,
    prefix: I,
    sufix: w,
    iconSize: b,
    loadingPosition: g,
    isLoading: C,
    LeftIcon: O,
    readOnly: A,
    onFocus: F,
    onBlur: L,
    RightIcon: B,
    Spinner: T,
    value: D,
    max: k,
    onKeyDown: z,
    onChange: j,
    showCents: Y,
    ...K
  } = Mr({ ...n, id: u, isError: v }, s), q = O && !C, Z = B && !C, Q = g === "left" && C, ee = g === "right" && C;
  function re() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function ne(G) {
    qr({ currencyValue: a, event: G, max: k, setCurrencyValue: c }), j && j(a), z && z(G);
  }
  function M(G) {
    t(!0), F && F(G);
  }
  function J(G) {
    t(!1), L && L(G);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: R,
      style: E,
      onClick: re,
      className: P,
      children: [
        I,
        Q && T,
        q && /* @__PURE__ */ o.jsx(O, { size: b, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: Jr(D || a, Y),
            onKeyDown: ne,
            disabled: x || C,
            readOnly: A,
            ref: m,
            onFocus: M,
            onChange: () => {
            },
            onBlur: J,
            ...K
          }
        ),
        ee && T,
        Z && /* @__PURE__ */ o.jsx(B, { size: b, strokeWidth: 2.5 }),
        w
      ]
    }
  );
}
function Xr(n, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: u,
    sufix: f,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    onChange: b,
    showMask: g = !0,
    ...C
  } = n, O = v ? "right" : "left", D = `arkyn_input ${u ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${h} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, z = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: D,
    prefix: X(u, z, "prefix"),
    sufix: X(f, z, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    onChange: b,
    loadingPosition: O,
    iconSize: z,
    showMask: g,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...C
  };
}
function Hr(n) {
  const [s, t] = ie(!1), a = de(null), { inputRef: c, id: l, error: h } = ae(), u = c || a, f = n.isError || !!h, {
    disabled: m,
    title: v,
    style: x,
    className: R,
    prefix: E,
    sufix: P,
    iconSize: I,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: g,
    readOnly: C,
    onFocus: O,
    onBlur: A,
    RightIcon: F,
    Spinner: L,
    ...B
  } = Xr({ ...n, id: l, isError: f }, s), T = g && !b, D = F && !b, k = w === "left" && b, z = w === "right" && b;
  function j() {
    m || !(u != null && u.current) || (t(!0), u.current.focus());
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: v,
      style: x,
      onClick: j,
      className: R,
      children: [
        E,
        k && L,
        T && /* @__PURE__ */ o.jsx(g, { size: I, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          wr,
          {}
        ),
        D && /* @__PURE__ */ o.jsx(F, { size: I, strokeWidth: 2.5 }),
        z && L,
        P
      ]
    }
  );
}
function Zr(n, s) {
  const {
    isLoading: t,
    isError: a,
    size: c = "md",
    className: l = "",
    variant: h = "solid",
    prefix: u,
    sufix: f,
    leftIcon: m,
    rightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    onChange: b,
    ...g
  } = n, C = v ? "right" : "left", T = `arkyn_input ${u ? "hasPrefix" : ""} ${f ? "hasSufix" : ""} ${h} ${c} ${x || R || t ? "opacity" : ""} ${a ? "errored" : ""} ${s ? "focused" : ""} ${l}`, k = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: T,
    prefix: X(u, k, "prefix"),
    sufix: X(f, k, "sufix"),
    LeftIcon: m,
    RightIcon: v,
    disabled: x,
    readOnly: R,
    onFocus: E,
    onBlur: P,
    title: I,
    style: w,
    onChange: b,
    loadingPosition: C,
    iconSize: k,
    Spinner: /* @__PURE__ */ o.jsx(oe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...g
  };
}
function Qr(n) {
  const [s, t] = ie(!1), a = de(null), { inputRef: c, id: l, error: h } = ae(), u = c || a, f = n.isError || !!h, {
    disabled: m,
    title: v,
    style: x,
    className: R,
    prefix: E,
    sufix: P,
    iconSize: I,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: g,
    readOnly: C,
    onFocus: O,
    onBlur: A,
    RightIcon: F,
    Spinner: L,
    ...B
  } = Zr({ ...n, id: l, isError: f }, s), T = g && !b, D = F && !b, k = w === "left" && b, z = w === "right" && b;
  function j() {
    m || !(u != null && u.current) || (t(!0), u.current.focus());
  }
  function Y(q) {
    t(!0), O && O(q);
  }
  function K(q) {
    t(!1), A && A(q);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: v,
      style: x,
      onClick: j,
      className: R,
      children: [
        E,
        k && L,
        T && /* @__PURE__ */ o.jsx(g, { size: I, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: m || b,
            readOnly: C,
            ref: u,
            onFocus: Y,
            onBlur: K,
            ...B
          }
        ),
        D && /* @__PURE__ */ o.jsx(F, { size: I, strokeWidth: 2.5 }),
        z && L,
        P
      ]
    }
  );
}
function xn(n) {
  return n.type === "currency" ? /* @__PURE__ */ o.jsx(Gr, { ...n }) : n.type === "masked" ? /* @__PURE__ */ o.jsx(Hr, { ...n }) : n.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(Yr, { ...n }) : /* @__PURE__ */ o.jsx(Qr, { ...n });
}
function en(n) {
  const { className: s = "", ...t } = n;
  return { className: `arkyn_breadcrumb ${s}`.trim(), ...t };
}
function rn(n) {
  const { pathname: s } = Pr(), {
    className: t = "",
    disabled: a = !1,
    to: c,
    ...l
  } = n, h = s === c ? "active" : "inactive", u = `arkyn_breadcrumb_link ${h} ${t}`;
  return {
    to: c,
    className: u.trim(),
    disabled: a || h === "active",
    ...l
  };
}
function yn(n) {
  const { className: s, ...t } = en(n);
  return /* @__PURE__ */ o.jsx("nav", { className: s, ...t });
}
function bn(n) {
  const { children: s, className: t, disabled: a, ...c } = rn(n);
  return a ? /* @__PURE__ */ o.jsxs("p", { className: t, children: [
    /* @__PURE__ */ o.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    s
  ] }) : /* @__PURE__ */ o.jsxs(Ir, { className: t, ...c, children: [
    /* @__PURE__ */ o.jsx(Me, { size: 14, strokeWidth: 2.5 }),
    s
  ] });
}
const rr = He({});
function nn(n) {
  const {
    isVisibled: s,
    makeInvisible: t,
    children: a,
    className: c = "",
    ...l
  } = n, u = `arkyn_modal_container ${s ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ o.jsx(rr.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ o.jsx(Tr, { children: s && /* @__PURE__ */ o.jsxs("aside", { className: u.trim(), ...l, children: [
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
function tn(n) {
  const { alignment: s = "right", className: t, ...a } = n, c = `arkyn_modal_footer ${s} ${t}`;
  return /* @__PURE__ */ o.jsx("footer", { className: c.trim(), ...a });
}
function sn(n) {
  const { showCloseButton: s, className: t, children: a, ...c } = n, { makeInvisible: l } = Ze(rr), u = `arkyn_modal_header ${s ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ o.jsxs("header", { className: u.trim(), ...c, children: [
    a,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: l, children: /* @__PURE__ */ o.jsx(Nr, { size: 24 }) })
  ] });
}
const _n = { Container: nn, Header: sn, Footer: tn };
function Rn(n) {
  const {
    text: s,
    size: t = "lg",
    children: a,
    orientation: c = "top",
    className: l,
    ...h
  } = n;
  return /* @__PURE__ */ o.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${t} ${c} ${l}`,
      ...h,
      children: [
        a,
        /* @__PURE__ */ o.jsx("div", { className: "arkyn_tooltip_text", children: s })
      ]
    }
  );
}
export {
  fn as Badge,
  yn as Breadcrumb,
  bn as BreadcrumbLink,
  hn as Button,
  dn as Divider,
  mn as FormController,
  vn as FormError,
  gn as FormLabel,
  pn as IconButton,
  xn as Input,
  _n as Modal,
  Rn as Tooltip
};
