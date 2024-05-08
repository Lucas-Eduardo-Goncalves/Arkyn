import qe, { createContext as Ge, useRef as le, useId as Er, useContext as Xe, useState as se } from "react";
import { Loader2 as ie, ChevronRight as Ve, X as Sr } from "lucide-react";
import { useActionData as Cr, useLocation as jr, Link as kr } from "@remix-run/react";
import { InputMask as Nr } from "@react-input/mask";
import { AnimatePresence as $r, motion as Ye } from "framer-motion";
var Ce = { exports: {} }, ce = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Me;
function Pr() {
  if (Me)
    return ce;
  Me = 1;
  var n = qe, s = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(u, f, m) {
    var v, x = {}, R = null, S = null;
    m !== void 0 && (R = "" + m), f.key !== void 0 && (R = "" + f.key), f.ref !== void 0 && (S = f.ref);
    for (v in f)
      a.call(f, v) && !l.hasOwnProperty(v) && (x[v] = f[v]);
    if (u && u.defaultProps)
      for (v in f = u.defaultProps, f)
        x[v] === void 0 && (x[v] = f[v]);
    return { $$typeof: s, type: u, key: R, ref: S, props: x, _owner: c.current };
  }
  return ce.Fragment = t, ce.jsx = h, ce.jsxs = h, ce;
}
var ue = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ue;
function Ir() {
  return Ue || (Ue = 1, process.env.NODE_ENV !== "production" && function() {
    var n = qe, s = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), c = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.suspense_list"), x = Symbol.for("react.memo"), R = Symbol.for("react.lazy"), S = Symbol.for("react.offscreen"), P = Symbol.iterator, I = "@@iterator";
    function w(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = P && e[P] || e[I];
      return typeof r == "function" ? r : null;
    }
    var y = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function p(e) {
      {
        for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), d = 1; d < r; d++)
          i[d - 1] = arguments[d];
        C("error", e, i);
      }
    }
    function C(e, r, i) {
      {
        var d = y.ReactDebugCurrentFrame, _ = d.getStackAddendum();
        _ !== "" && (r += "%s", i = i.concat([_]));
        var E = i.map(function(b) {
          return String(b);
        });
        E.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, E);
      }
    }
    var O = !1, A = !1, F = !1, L = !1, B = !1, T;
    T = Symbol.for("react.module.reference");
    function D(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === a || e === l || B || e === c || e === m || e === v || L || e === S || O || A || F || typeof e == "object" && e !== null && (e.$$typeof === R || e.$$typeof === x || e.$$typeof === h || e.$$typeof === u || e.$$typeof === f || // This needs to include all possible module reference object
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
            var _ = e, E = _._payload, b = _._init;
            try {
              return j(b(E));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var V = Object.assign, U = 0, K, H, Z, Q, ee, re, Y;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function q() {
      {
        if (U === 0) {
          K = console.log, H = console.info, Z = console.warn, Q = console.error, ee = console.group, re = console.groupCollapsed, Y = console.groupEnd;
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
        U++;
      }
    }
    function ke() {
      {
        if (U--, U === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: V({}, e, {
              value: K
            }),
            info: V({}, e, {
              value: H
            }),
            warn: V({}, e, {
              value: Z
            }),
            error: V({}, e, {
              value: Q
            }),
            group: V({}, e, {
              value: ee
            }),
            groupCollapsed: V({}, e, {
              value: re
            }),
            groupEnd: V({}, e, {
              value: Y
            })
          });
        }
        U < 0 && p("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var pe = y.ReactCurrentDispatcher, xe;
    function fe(e, r, i) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (_) {
            var d = _.stack.trim().match(/\n( *(at )?)/);
            xe = d && d[1] || "";
          }
        return `
` + xe + e;
      }
    }
    var be = !1, de;
    {
      var er = typeof WeakMap == "function" ? WeakMap : Map;
      de = new er();
    }
    function Ne(e, r) {
      if (!e || be)
        return "";
      {
        var i = de.get(e);
        if (i !== void 0)
          return i;
      }
      var d;
      be = !0;
      var _ = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var E;
      E = pe.current, pe.current = null, q();
      try {
        if (r) {
          var b = function() {
            throw Error();
          };
          if (Object.defineProperty(b.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(b, []);
            } catch (G) {
              d = G;
            }
            Reflect.construct(e, [], b);
          } else {
            try {
              b.call();
            } catch (G) {
              d = G;
            }
            e.call(b.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (G) {
            d = G;
          }
          e();
        }
      } catch (G) {
        if (G && d && typeof G.stack == "string") {
          for (var g = G.stack.split(`
`), W = d.stack.split(`
`), N = g.length - 1, $ = W.length - 1; N >= 1 && $ >= 0 && g[N] !== W[$]; )
            $--;
          for (; N >= 1 && $ >= 0; N--, $--)
            if (g[N] !== W[$]) {
              if (N !== 1 || $ !== 1)
                do
                  if (N--, $--, $ < 0 || g[N] !== W[$]) {
                    var M = `
` + g[N].replace(" at new ", " at ");
                    return e.displayName && M.includes("<anonymous>") && (M = M.replace("<anonymous>", e.displayName)), typeof e == "function" && de.set(e, M), M;
                  }
                while (N >= 1 && $ >= 0);
              break;
            }
        }
      } finally {
        be = !1, pe.current = E, ke(), Error.prepareStackTrace = _;
      }
      var te = e ? e.displayName || e.name : "", Be = te ? fe(te) : "";
      return typeof e == "function" && de.set(e, Be), Be;
    }
    function rr(e, r, i) {
      return Ne(e, !1);
    }
    function nr(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function he(e, r, i) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Ne(e, nr(e));
      if (typeof e == "string")
        return fe(e);
      switch (e) {
        case m:
          return fe("Suspense");
        case v:
          return fe("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            return rr(e.render);
          case x:
            return he(e.type, r, i);
          case R: {
            var d = e, _ = d._payload, E = d._init;
            try {
              return he(E(_), r, i);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, $e = {}, Pe = y.ReactDebugCurrentFrame;
    function ve(e) {
      if (e) {
        var r = e._owner, i = he(e.type, e._source, r ? r.type : null);
        Pe.setExtraStackFrame(i);
      } else
        Pe.setExtraStackFrame(null);
    }
    function tr(e, r, i, d, _) {
      {
        var E = Function.call.bind(me);
        for (var b in e)
          if (E(e, b)) {
            var g = void 0;
            try {
              if (typeof e[b] != "function") {
                var W = Error((d || "React class") + ": " + i + " type `" + b + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[b] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw W.name = "Invariant Violation", W;
              }
              g = e[b](r, b, d, i, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (N) {
              g = N;
            }
            g && !(g instanceof Error) && (ve(_), p("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", d || "React class", i, b, typeof g), ve(null)), g instanceof Error && !(g.message in $e) && ($e[g.message] = !0, ve(_), p("Failed %s type: %s", i, g.message), ve(null));
          }
      }
    }
    var sr = Array.isArray;
    function ye(e) {
      return sr(e);
    }
    function ir(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, i = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i;
      }
    }
    function or(e) {
      try {
        return Ie(e), !1;
      } catch {
        return !0;
      }
    }
    function Ie(e) {
      return "" + e;
    }
    function we(e) {
      if (or(e))
        return p("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ir(e)), Ie(e);
    }
    var ae = y.ReactCurrentOwner, ar = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Te, Oe, _e;
    _e = {};
    function cr(e) {
      if (me.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ur(e) {
      if (me.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function lr(e, r) {
      if (typeof e.ref == "string" && ae.current && r && ae.current.stateNode !== r) {
        var i = j(ae.current.type);
        _e[i] || (p('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(ae.current.type), e.ref), _e[i] = !0);
      }
    }
    function fr(e, r) {
      {
        var i = function() {
          Te || (Te = !0, p("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: i,
          configurable: !0
        });
      }
    }
    function dr(e, r) {
      {
        var i = function() {
          Oe || (Oe = !0, p("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        i.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: i,
          configurable: !0
        });
      }
    }
    var hr = function(e, r, i, d, _, E, b) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: s,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: i,
        props: b,
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
        value: d
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: _
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function mr(e, r, i, d, _) {
      {
        var E, b = {}, g = null, W = null;
        i !== void 0 && (we(i), g = "" + i), ur(r) && (we(r.key), g = "" + r.key), cr(r) && (W = r.ref, lr(r, _));
        for (E in r)
          me.call(r, E) && !ar.hasOwnProperty(E) && (b[E] = r[E]);
        if (e && e.defaultProps) {
          var N = e.defaultProps;
          for (E in N)
            b[E] === void 0 && (b[E] = N[E]);
        }
        if (g || W) {
          var $ = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && fr(b, $), W && dr(b, $);
        }
        return hr(e, g, W, _, d, ae.current, b);
      }
    }
    var Re = y.ReactCurrentOwner, Fe = y.ReactDebugCurrentFrame;
    function ne(e) {
      if (e) {
        var r = e._owner, i = he(e.type, e._source, r ? r.type : null);
        Fe.setExtraStackFrame(i);
      } else
        Fe.setExtraStackFrame(null);
    }
    var Ee;
    Ee = !1;
    function Se(e) {
      return typeof e == "object" && e !== null && e.$$typeof === s;
    }
    function Le() {
      {
        if (Re.current) {
          var e = j(Re.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function vr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), i = e.lineNumber;
          return `

Check your code at ` + r + ":" + i + ".";
        }
        return "";
      }
    }
    var ze = {};
    function gr(e) {
      {
        var r = Le();
        if (!r) {
          var i = typeof e == "string" ? e : e.displayName || e.name;
          i && (r = `

Check the top-level render call using <` + i + ">.");
        }
        return r;
      }
    }
    function De(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var i = gr(r);
        if (ze[i])
          return;
        ze[i] = !0;
        var d = "";
        e && e._owner && e._owner !== Re.current && (d = " It was passed a child from " + j(e._owner.type) + "."), ne(e), p('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', i, d), ne(null);
      }
    }
    function We(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ye(e))
          for (var i = 0; i < e.length; i++) {
            var d = e[i];
            Se(d) && De(d, r);
          }
        else if (Se(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var _ = w(e);
          if (typeof _ == "function" && _ !== e.entries)
            for (var E = _.call(e), b; !(b = E.next()).done; )
              Se(b.value) && De(b.value, r);
        }
      }
    }
    function pr(e) {
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
          tr(i, e.props, "prop", d, e);
        } else if (r.PropTypes !== void 0 && !Ee) {
          Ee = !0;
          var _ = j(r);
          p("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", _ || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && p("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function xr(e) {
      {
        for (var r = Object.keys(e.props), i = 0; i < r.length; i++) {
          var d = r[i];
          if (d !== "children" && d !== "key") {
            ne(e), p("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", d), ne(null);
            break;
          }
        }
        e.ref !== null && (ne(e), p("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
      }
    }
    function Ae(e, r, i, d, _, E) {
      {
        var b = D(e);
        if (!b) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var W = vr(_);
          W ? g += W : g += Le();
          var N;
          e === null ? N = "null" : ye(e) ? N = "array" : e !== void 0 && e.$$typeof === s ? (N = "<" + (j(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : N = typeof e, p("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", N, g);
        }
        var $ = mr(e, r, i, _, E);
        if ($ == null)
          return $;
        if (b) {
          var M = r.children;
          if (M !== void 0)
            if (d)
              if (ye(M)) {
                for (var te = 0; te < M.length; te++)
                  We(M[te], e);
                Object.freeze && Object.freeze(M);
              } else
                p("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              We(M, e);
        }
        return e === a ? xr($) : pr($), $;
      }
    }
    function br(e, r, i) {
      return Ae(e, r, i, !0);
    }
    function yr(e, r, i) {
      return Ae(e, r, i, !1);
    }
    var _r = yr, Rr = br;
    ue.Fragment = a, ue.jsx = _r, ue.jsxs = Rr;
  }()), ue;
}
process.env.NODE_ENV === "production" ? Ce.exports = Pr() : Ce.exports = Ir();
var o = Ce.exports;
function ge(n, s) {
  return s ? /* @__PURE__ */ o.jsx(s, { size: n, strokeWidth: 2.5 }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function wr(n) {
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
    leftIcon: ge(v, c),
    rightIcon: ge(v, l),
    ...f
  };
}
function an(n) {
  const { leftIcon: s, children: t, rightIcon: a, ...c } = wr(n);
  return /* @__PURE__ */ o.jsxs("div", { ...c, children: [
    s,
    t,
    a
  ] });
}
function cn(n) {
  const {
    className: s,
    orientation: t = "horizontal",
    ...a
  } = n, c = `arkyn_divider ${t} ${s}`;
  return /* @__PURE__ */ o.jsx("div", { className: c, ...a });
}
function Tr(n) {
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
  } = n, S = { xs: 12, sm: 16, md: 20, lg: 24 }[l];
  return {
    className: `arkyn_button loading_text_${!!c} ${a} ${t} ${l} loading_${s} ${m}`.trim(),
    loadingText: c,
    children: v,
    iconSize: S,
    disabled: f || s,
    leftIcon: ge(S, h),
    rightIcon: ge(S, u),
    ...x
  };
}
function un(n) {
  const { leftIcon: s, rightIcon: t, iconSize: a, children: c, loadingText: l, ...h } = Tr(n);
  return /* @__PURE__ */ o.jsxs("button", { ...h, children: [
    /* @__PURE__ */ o.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ o.jsx(ie, { size: a, strokeWidth: 2.5 }),
      l && l
    ] }),
    /* @__PURE__ */ o.jsxs("div", { className: "content", children: [
      s,
      c,
      t
    ] })
  ] });
}
const He = Ge({});
function ln({ children: n, ...s }) {
  var u, f;
  const t = Cr(), a = le(null), c = ((u = a.current) == null ? void 0 : u.name) || "", l = ((f = t == null ? void 0 : t.fieldErrors) == null ? void 0 : f[c]) || null, h = Er();
  return /* @__PURE__ */ o.jsx(He.Provider, { value: { error: l, id: h, inputRef: a }, children: /* @__PURE__ */ o.jsx("section", { className: "arkyn_form_controller", ...s, children: n }) });
}
function oe() {
  return Xe(He);
}
function fn() {
  const { error: n } = oe();
  return n ? /* @__PURE__ */ o.jsx("strong", { className: "arkyn_form_error", children: n }) : /* @__PURE__ */ o.jsx(o.Fragment, {});
}
function Or(n) {
  const { showAsterisk: s = !1, className: t = "", ...a } = n;
  return {
    className: `arkyn_form_label ${s ? "show-asterisk" : ""} ${t}`.trim(),
    ...a
  };
}
function dn(n) {
  const { id: s } = oe();
  return /* @__PURE__ */ o.jsx("label", { ...Or(n), htmlFor: s });
}
const Je = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function hn(n) {
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
        /* @__PURE__ */ o.jsx("div", { className: "spinner", children: /* @__PURE__ */ o.jsx(ie, { size: Je[c], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ o.jsx("div", { className: "content " + c, children: /* @__PURE__ */ o.jsx(l, { size: Je[c], strokeWidth: 2.5 }) })
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
function Fr(n, s) {
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    onChange: y,
    ...p
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    onChange: y,
    loadingPosition: C,
    iconSize: k,
    Spinner: /* @__PURE__ */ o.jsx(ie, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...p
  };
}
function je(n) {
  return n && n.replace(/[^0-9]/g, "");
}
function Lr(n, s) {
  let t = "", a = 0;
  return Array.from(n).forEach((c, l) => {
    s[l + a].match(/[0-9]/) || (t += s[l + a], a++), t += c;
  }), t;
}
function zr(n) {
  return n.length > 11 ? "CNPJ" : "CPF";
}
const Ze = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Dr = je(Ze.CNPJ).length;
function Wr(n) {
  const [s, t] = se(!1), [a, c] = se(
    je((n == null ? void 0 : n.defaultValue) || "")
  ), l = le(null), { inputRef: h, id: u, error: f } = oe(), m = h || l, v = n.isError || !!f, {
    disabled: x,
    title: R,
    style: S,
    className: P,
    prefix: I,
    sufix: w,
    iconSize: y,
    loadingPosition: p,
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
  } = Fr({ ...n, id: u, isError: v }, s), V = O && !C, U = B && !C, K = p === "left" && C, H = p === "right" && C;
  function Z() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function Q(Y) {
    let J = je(Y.target.value);
    const q = zr(J);
    J.length > Dr || (J = Lr(J, Ze[q]), Y.target.value = J, c(J), D && D(Y));
  }
  function ee(Y) {
    t(!0), F && F(Y);
  }
  function re(Y) {
    t(!1), L && L(Y);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: R,
      style: S,
      onClick: Z,
      className: P,
      children: [
        I,
        K && T,
        V && /* @__PURE__ */ o.jsx(O, { size: y, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: x || C,
            readOnly: A,
            ref: m,
            value: k || a,
            onFocus: ee,
            onChange: Q,
            onBlur: re,
            ...j
          }
        ),
        U && /* @__PURE__ */ o.jsx(B, { size: y, strokeWidth: 2.5 }),
        H && T,
        w
      ]
    }
  );
}
function Ar(n, s) {
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    showCents: y = !1,
    max: p = 1e9,
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    max: p,
    onChange: C,
    showCents: y,
    loadingPosition: A,
    iconSize: j,
    Spinner: /* @__PURE__ */ o.jsx(ie, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...O
  };
}
const Br = /^[1-9]{1}$/, Vr = /^[0-9]{1}$/, Ke = 8;
function Yr(n, s) {
  if (n === 0)
    return "";
  const t = (n / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return s ? t : t.replace("R$", "").trim();
}
function Mr(n) {
  const { currencyValue: s, event: t, max: a, setCurrencyValue: c } = n, { key: l, keyCode: h } = t;
  if (s === 0 && !Br.test(l) || s !== 0 && !Vr.test(l) && h !== Ke)
    return;
  const u = s.toString();
  let f;
  if (h !== Ke) {
    const m = s === 0 ? l : `${u}${l}`;
    f = Number.parseInt(m, 10);
  } else {
    const m = u.slice(0, -1);
    f = m === "" ? 0 : Number.parseInt(m, 10);
  }
  f > Number(a) || c(f);
}
function Ur(n) {
  const [s, t] = se(!1), [a, c] = se(n.defaultValue || 0), l = le(null), { inputRef: h, id: u, error: f } = oe(), m = h || l, v = n.isError || !!f, {
    disabled: x,
    title: R,
    style: S,
    className: P,
    prefix: I,
    sufix: w,
    iconSize: y,
    loadingPosition: p,
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
    showCents: V,
    ...U
  } = Ar({ ...n, id: u, isError: v }, s), K = O && !C, H = B && !C, Z = p === "left" && C, Q = p === "right" && C;
  function ee() {
    x || !(m != null && m.current) || (t(!0), m.current.focus());
  }
  function re(q) {
    Mr({ currencyValue: a, event: q, max: k, setCurrencyValue: c }), j && j(a), z && z(q);
  }
  function Y(q) {
    t(!0), F && F(q);
  }
  function J(q) {
    t(!1), L && L(q);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: R,
      style: S,
      onClick: ee,
      className: P,
      children: [
        I,
        Z && T,
        K && /* @__PURE__ */ o.jsx(O, { size: y, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            value: Yr(D || a, V),
            onKeyDown: re,
            disabled: x || C,
            readOnly: A,
            ref: m,
            onFocus: Y,
            onChange: () => {
            },
            onBlur: J,
            ...U
          }
        ),
        Q && T,
        H && /* @__PURE__ */ o.jsx(B, { size: y, strokeWidth: 2.5 }),
        w
      ]
    }
  );
}
function Jr(n, s) {
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    onChange: y,
    showMask: p = !0,
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    onChange: y,
    loadingPosition: O,
    iconSize: z,
    showMask: p,
    Spinner: /* @__PURE__ */ o.jsx(ie, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...C
  };
}
function Kr(n) {
  const [s, t] = se(!1), a = le(null), { inputRef: c, id: l, error: h } = oe(), u = c || a, f = n.isError || !!h, {
    disabled: m,
    title: v,
    style: x,
    className: R,
    prefix: S,
    sufix: P,
    iconSize: I,
    loadingPosition: w,
    isLoading: y,
    LeftIcon: p,
    readOnly: C,
    onFocus: O,
    onBlur: A,
    RightIcon: F,
    Spinner: L,
    ...B
  } = Jr({ ...n, id: l, isError: f }, s), T = p && !y, D = F && !y, k = w === "left" && y, z = w === "right" && y;
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
        S,
        k && L,
        T && /* @__PURE__ */ o.jsx(p, { size: I, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          Nr,
          {}
        ),
        D && /* @__PURE__ */ o.jsx(F, { size: I, strokeWidth: 2.5 }),
        z && L,
        P
      ]
    }
  );
}
function qr(n, s) {
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    onChange: y,
    ...p
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
    onFocus: S,
    onBlur: P,
    title: I,
    style: w,
    onChange: y,
    loadingPosition: C,
    iconSize: k,
    Spinner: /* @__PURE__ */ o.jsx(ie, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...p
  };
}
function Gr(n) {
  const [s, t] = se(!1), a = le(null), { inputRef: c, id: l, error: h } = oe(), u = c || a, f = n.isError || !!h, {
    disabled: m,
    title: v,
    style: x,
    className: R,
    prefix: S,
    sufix: P,
    iconSize: I,
    loadingPosition: w,
    isLoading: y,
    LeftIcon: p,
    readOnly: C,
    onFocus: O,
    onBlur: A,
    RightIcon: F,
    Spinner: L,
    ...B
  } = qr({ ...n, id: l, isError: f }, s), T = p && !y, D = F && !y, k = w === "left" && y, z = w === "right" && y;
  function j() {
    m || !(u != null && u.current) || (t(!0), u.current.focus());
  }
  function V(K) {
    t(!0), O && O(K);
  }
  function U(K) {
    t(!1), A && A(K);
  }
  return /* @__PURE__ */ o.jsxs(
    "section",
    {
      title: v,
      style: x,
      onClick: j,
      className: R,
      children: [
        S,
        k && L,
        T && /* @__PURE__ */ o.jsx(p, { size: I, strokeWidth: 2.5 }),
        /* @__PURE__ */ o.jsx(
          "input",
          {
            disabled: m || y,
            readOnly: C,
            ref: u,
            onFocus: V,
            onBlur: U,
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
function mn(n) {
  return n.type === "currency" ? /* @__PURE__ */ o.jsx(Ur, { ...n }) : n.type === "masked" ? /* @__PURE__ */ o.jsx(Kr, { ...n }) : n.type === "cpf-cpnj" ? /* @__PURE__ */ o.jsx(Wr, { ...n }) : /* @__PURE__ */ o.jsx(Gr, { ...n });
}
function Xr(n) {
  const { className: s = "", ...t } = n;
  return { className: `arkyn_breadcrumb ${s}`.trim(), ...t };
}
function Hr(n) {
  const { pathname: s } = jr(), {
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
function vn(n) {
  const { className: s, ...t } = Xr(n);
  return /* @__PURE__ */ o.jsx("nav", { className: s, ...t });
}
function gn(n) {
  const { children: s, className: t, disabled: a, ...c } = Hr(n);
  return a ? /* @__PURE__ */ o.jsxs("p", { className: t, children: [
    /* @__PURE__ */ o.jsx(Ve, { size: 14, strokeWidth: 2.5 }),
    s
  ] }) : /* @__PURE__ */ o.jsxs(kr, { className: t, ...c, children: [
    /* @__PURE__ */ o.jsx(Ve, { size: 14, strokeWidth: 2.5 }),
    s
  ] });
}
const Qe = Ge({});
function Zr(n) {
  const {
    isVisibled: s,
    makeInvisible: t,
    children: a,
    className: c = "",
    ...l
  } = n, u = `arkyn_modal_container ${s ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ o.jsx(Qe.Provider, { value: { makeInvisible: t }, children: /* @__PURE__ */ o.jsx($r, { children: s && /* @__PURE__ */ o.jsxs("aside", { className: u.trim(), ...l, children: [
    /* @__PURE__ */ o.jsx(
      Ye.div,
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
      Ye.div,
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
function Qr(n) {
  const { alignment: s = "right", className: t, ...a } = n, c = `arkyn_modal_footer ${s} ${t}`;
  return /* @__PURE__ */ o.jsx("footer", { className: c.trim(), ...a });
}
function en(n) {
  const { showCloseButton: s, className: t, children: a, ...c } = n, { makeInvisible: l } = Xe(Qe), u = `arkyn_modal_header ${s ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ o.jsxs("header", { className: u.trim(), ...c, children: [
    a,
    /* @__PURE__ */ o.jsx("button", { type: "button", onClick: l, children: /* @__PURE__ */ o.jsx(Sr, { size: 24 }) })
  ] });
}
const pn = { Container: Zr, Header: en, Footer: Qr };
function xn(n) {
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
  an as Badge,
  vn as Breadcrumb,
  gn as BreadcrumbLink,
  un as Button,
  cn as Divider,
  ln as FormController,
  fn as FormError,
  dn as FormLabel,
  hn as IconButton,
  mn as Input,
  pn as Modal,
  xn as Tooltip
};
