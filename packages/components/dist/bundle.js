import v, { createContext as Ct, useRef as at, useId as wn, useContext as gt, useState as De, forwardRef as En, useEffect as Sn } from "react";
import { Loader2 as Qe, Check as on, ChevronDown as Tn, ChevronRight as Ht, X as _n } from "lucide-react";
import { useActionData as sn, useLocation as ln, Link as Nn } from "@remix-run/react";
import { InputMask as kn } from "@react-input/mask";
import { AnimatePresence as Cn, motion as Yt } from "framer-motion";
import Rn from "react-dom";
var Mt = { exports: {} }, dt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Vt;
function In() {
  if (Vt)
    return dt;
  Vt = 1;
  var n = v, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(c, p, o) {
    var y, _ = {}, N = null, b = null;
    o !== void 0 && (N = "" + o), p.key !== void 0 && (N = "" + p.key), p.ref !== void 0 && (b = p.ref);
    for (y in p)
      s.call(p, y) && !u.hasOwnProperty(y) && (_[y] = p[y]);
    if (c && c.defaultProps)
      for (y in p = c.defaultProps, p)
        _[y] === void 0 && (_[y] = p[y]);
    return { $$typeof: t, type: c, key: N, ref: b, props: _, _owner: l.current };
  }
  return dt.Fragment = a, dt.jsx = h, dt.jsxs = h, dt;
}
var ft = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gt;
function An() {
  return Gt || (Gt = 1, process.env.NODE_ENV !== "production" && function() {
    var n = v, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), c = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), N = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), P = Symbol.iterator, A = "@@iterator";
    function U(r) {
      if (r === null || typeof r != "object")
        return null;
      var d = P && r[P] || r[A];
      return typeof d == "function" ? d : null;
    }
    var w = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(r) {
      {
        for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), T = 1; T < d; T++)
          g[T - 1] = arguments[T];
        L("error", r, g);
      }
    }
    function L(r, d, g) {
      {
        var T = w.ReactDebugCurrentFrame, H = T.getStackAddendum();
        H !== "" && (d += "%s", g = g.concat([H]));
        var e = g.map(function(f) {
          return String(f);
        });
        e.unshift("Warning: " + d), Function.prototype.apply.call(console[r], console, e);
      }
    }
    var W = !1, M = !1, X = !1, ee = !1, V = !1, re;
    re = Symbol.for("react.module.reference");
    function Y(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === u || V || r === l || r === o || r === y || ee || r === b || W || M || X || typeof r == "object" && r !== null && (r.$$typeof === N || r.$$typeof === _ || r.$$typeof === h || r.$$typeof === c || r.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === re || r.getModuleId !== void 0));
    }
    function z(r, d, g) {
      var T = r.displayName;
      if (T)
        return T;
      var H = d.displayName || d.name || "";
      return H !== "" ? g + "(" + H + ")" : g;
    }
    function ae(r) {
      return r.displayName || "Context";
    }
    function k(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case u:
          return "Profiler";
        case l:
          return "StrictMode";
        case o:
          return "Suspense";
        case y:
          return "SuspenseList";
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case c:
            var d = r;
            return ae(d) + ".Consumer";
          case h:
            var g = r;
            return ae(g._context) + ".Provider";
          case p:
            return z(r, r.render, "ForwardRef");
          case _:
            var T = r.displayName || null;
            return T !== null ? T : k(r.type) || "Memo";
          case N: {
            var H = r, e = H._payload, f = H._init;
            try {
              return k(f(e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, $ = 0, J, ie, Z, le, G, F, x;
    function O() {
    }
    O.__reactDisabledLog = !0;
    function j() {
      {
        if ($ === 0) {
          J = console.log, ie = console.info, Z = console.warn, le = console.error, G = console.group, F = console.groupCollapsed, x = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: O,
            writable: !0
          };
          Object.defineProperties(console, {
            info: r,
            log: r,
            warn: r,
            error: r,
            group: r,
            groupCollapsed: r,
            groupEnd: r
          });
        }
        $++;
      }
    }
    function te() {
      {
        if ($--, $ === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, r, {
              value: J
            }),
            info: R({}, r, {
              value: ie
            }),
            warn: R({}, r, {
              value: Z
            }),
            error: R({}, r, {
              value: le
            }),
            group: R({}, r, {
              value: G
            }),
            groupCollapsed: R({}, r, {
              value: F
            }),
            groupEnd: R({}, r, {
              value: x
            })
          });
        }
        $ < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var K = w.ReactCurrentDispatcher, ue;
    function de(r, d, g) {
      {
        if (ue === void 0)
          try {
            throw Error();
          } catch (H) {
            var T = H.stack.trim().match(/\n( *(at )?)/);
            ue = T && T[1] || "";
          }
        return `
` + ue + r;
      }
    }
    var Ie = !1, we;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Ae();
    }
    function pe(r, d) {
      if (!r || Ie)
        return "";
      {
        var g = we.get(r);
        if (g !== void 0)
          return g;
      }
      var T;
      Ie = !0;
      var H = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var e;
      e = K.current, K.current = null, j();
      try {
        if (d) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (q) {
              T = q;
            }
            Reflect.construct(r, [], f);
          } else {
            try {
              f.call();
            } catch (q) {
              T = q;
            }
            r.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            T = q;
          }
          r();
        }
      } catch (q) {
        if (q && T && typeof q.stack == "string") {
          for (var i = q.stack.split(`
`), C = T.stack.split(`
`), D = i.length - 1, I = C.length - 1; D >= 1 && I >= 0 && i[D] !== C[I]; )
            I--;
          for (; D >= 1 && I >= 0; D--, I--)
            if (i[D] !== C[I]) {
              if (D !== 1 || I !== 1)
                do
                  if (D--, I--, I < 0 || i[D] !== C[I]) {
                    var ce = `
` + i[D].replace(" at new ", " at ");
                    return r.displayName && ce.includes("<anonymous>") && (ce = ce.replace("<anonymous>", r.displayName)), typeof r == "function" && we.set(r, ce), ce;
                  }
                while (D >= 1 && I >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, K.current = e, te(), Error.prepareStackTrace = H;
      }
      var ve = r ? r.displayName || r.name : "", me = ve ? de(ve) : "";
      return typeof r == "function" && we.set(r, me), me;
    }
    function Xe(r, d, g) {
      return pe(r, !1);
    }
    function qe(r) {
      var d = r.prototype;
      return !!(d && d.isReactComponent);
    }
    function oe(r, d, g) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return pe(r, qe(r));
      if (typeof r == "string")
        return de(r);
      switch (r) {
        case o:
          return de("Suspense");
        case y:
          return de("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            return Xe(r.render);
          case _:
            return oe(r.type, d, g);
          case N: {
            var T = r, H = T._payload, e = T._init;
            try {
              return oe(e(H), d, g);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, $e = {}, Je = w.ReactDebugCurrentFrame;
    function Ne(r) {
      if (r) {
        var d = r._owner, g = oe(r.type, r._source, d ? d.type : null);
        Je.setExtraStackFrame(g);
      } else
        Je.setExtraStackFrame(null);
    }
    function ot(r, d, g, T, H) {
      {
        var e = Function.call.bind(he);
        for (var f in r)
          if (e(r, f)) {
            var i = void 0;
            try {
              if (typeof r[f] != "function") {
                var C = Error((T || "React class") + ": " + g + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw C.name = "Invariant Violation", C;
              }
              i = r[f](d, f, T, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (D) {
              i = D;
            }
            i && !(i instanceof Error) && (Ne(H), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", T || "React class", g, f, typeof i), Ne(null)), i instanceof Error && !(i.message in $e) && ($e[i.message] = !0, Ne(H), E("Failed %s type: %s", g, i.message), Ne(null));
          }
      }
    }
    var Be = Array.isArray;
    function Se(r) {
      return Be(r);
    }
    function ye(r) {
      {
        var d = typeof Symbol == "function" && Symbol.toStringTag, g = d && r[Symbol.toStringTag] || r.constructor.name || "Object";
        return g;
      }
    }
    function Le(r) {
      try {
        return ke(r), !1;
      } catch {
        return !0;
      }
    }
    function ke(r) {
      return "" + r;
    }
    function Ue(r) {
      if (Le(r))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(r)), ke(r);
    }
    var Me = w.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, He, Fe, Ce;
    Ce = {};
    function fe(r) {
      if (he.call(r, "ref")) {
        var d = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ze(r) {
      if (he.call(r, "key")) {
        var d = Object.getOwnPropertyDescriptor(r, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Ye(r, d) {
      if (typeof r.ref == "string" && Me.current && d && Me.current.stateNode !== d) {
        var g = k(Me.current.type);
        Ce[g] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', k(Me.current.type), r.ref), Ce[g] = !0);
      }
    }
    function S(r, d) {
      {
        var g = function() {
          He || (He = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function se(r, d) {
      {
        var g = function() {
          Fe || (Fe = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Q = function(r, d, g, T, H, e, f) {
      var i = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: r,
        key: d,
        ref: g,
        props: f,
        // Record the component responsible for creating this element.
        _owner: e
      };
      return i._store = {}, Object.defineProperty(i._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(i, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: T
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function Ee(r, d, g, T, H) {
      {
        var e, f = {}, i = null, C = null;
        g !== void 0 && (Ue(g), i = "" + g), ze(d) && (Ue(d.key), i = "" + d.key), fe(d) && (C = d.ref, Ye(d, H));
        for (e in d)
          he.call(d, e) && !We.hasOwnProperty(e) && (f[e] = d[e]);
        if (r && r.defaultProps) {
          var D = r.defaultProps;
          for (e in D)
            f[e] === void 0 && (f[e] = D[e]);
        }
        if (i || C) {
          var I = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          i && S(f, I), C && se(f, I);
        }
        return Q(r, i, C, H, T, Me.current, f);
      }
    }
    var ge = w.ReactCurrentOwner, ne = w.ReactDebugCurrentFrame;
    function be(r) {
      if (r) {
        var d = r._owner, g = oe(r.type, r._source, d ? d.type : null);
        ne.setExtraStackFrame(g);
      } else
        ne.setExtraStackFrame(null);
    }
    var st;
    st = !1;
    function et(r) {
      return typeof r == "object" && r !== null && r.$$typeof === t;
    }
    function tt() {
      {
        if (ge.current) {
          var r = k(ge.current.type);
          if (r)
            return `

Check the render method of \`` + r + "`.";
        }
        return "";
      }
    }
    function vt(r) {
      {
        if (r !== void 0) {
          var d = r.fileName.replace(/^.*[\\\/]/, ""), g = r.lineNumber;
          return `

Check your code at ` + d + ":" + g + ".";
        }
        return "";
      }
    }
    var it = {};
    function Rt(r) {
      {
        var d = tt();
        if (!d) {
          var g = typeof r == "string" ? r : r.displayName || r.name;
          g && (d = `

Check the top-level render call using <` + g + ">.");
        }
        return d;
      }
    }
    function lt(r, d) {
      {
        if (!r._store || r._store.validated || r.key != null)
          return;
        r._store.validated = !0;
        var g = Rt(d);
        if (it[g])
          return;
        it[g] = !0;
        var T = "";
        r && r._owner && r._owner !== ge.current && (T = " It was passed a child from " + k(r._owner.type) + "."), be(r), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, T), be(null);
      }
    }
    function ct(r, d) {
      {
        if (typeof r != "object")
          return;
        if (Se(r))
          for (var g = 0; g < r.length; g++) {
            var T = r[g];
            et(T) && lt(T, d);
          }
        else if (et(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var H = U(r);
          if (typeof H == "function" && H !== r.entries)
            for (var e = H.call(r), f; !(f = e.next()).done; )
              et(f.value) && lt(f.value, d);
        }
      }
    }
    function It(r) {
      {
        var d = r.type;
        if (d == null || typeof d == "string")
          return;
        var g;
        if (typeof d == "function")
          g = d.propTypes;
        else if (typeof d == "object" && (d.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        d.$$typeof === _))
          g = d.propTypes;
        else
          return;
        if (g) {
          var T = k(d);
          ot(g, r.props, "prop", T, r);
        } else if (d.PropTypes !== void 0 && !st) {
          st = !0;
          var H = k(d);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", H || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ve(r) {
      {
        for (var d = Object.keys(r.props), g = 0; g < d.length; g++) {
          var T = d[g];
          if (T !== "children" && T !== "key") {
            be(r), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", T), be(null);
            break;
          }
        }
        r.ref !== null && (be(r), E("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var nt = {};
    function ut(r, d, g, T, H, e) {
      {
        var f = Y(r);
        if (!f) {
          var i = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var C = vt(H);
          C ? i += C : i += tt();
          var D;
          r === null ? D = "null" : Se(r) ? D = "array" : r !== void 0 && r.$$typeof === t ? (D = "<" + (k(r.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : D = typeof r, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", D, i);
        }
        var I = Ee(r, d, g, H, e);
        if (I == null)
          return I;
        if (f) {
          var ce = d.children;
          if (ce !== void 0)
            if (T)
              if (Se(ce)) {
                for (var ve = 0; ve < ce.length; ve++)
                  ct(ce[ve], r);
                Object.freeze && Object.freeze(ce);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(ce, r);
        }
        if (he.call(d, "key")) {
          var me = k(r), q = Object.keys(d).filter(function(xn) {
            return xn !== "key";
          }), rt = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nt[me + rt]) {
            var xt = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            E(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, me, xt, me), nt[me + rt] = !0;
          }
        }
        return r === s ? Ve(I) : It(I), I;
      }
    }
    function yt(r, d, g) {
      return ut(r, d, g, !0);
    }
    function At(r, d, g) {
      return ut(r, d, g, !1);
    }
    var bt = At, Oe = yt;
    ft.Fragment = s, ft.jsx = bt, ft.jsxs = Oe;
  }()), ft;
}
process.env.NODE_ENV === "production" ? Mt.exports = In() : Mt.exports = An();
var m = Mt.exports;
function kt(n, t) {
  return t ? /* @__PURE__ */ m.jsx(t, { size: n, strokeWidth: 2.5 }) : /* @__PURE__ */ m.jsx(m.Fragment, {});
}
function Ln(n) {
  const {
    variant: t = "ghost",
    scheme: a = "primary",
    size: s = "md",
    leftIcon: l,
    rightIcon: u,
    className: h = "",
    children: c,
    ...p
  } = n, y = { md: 12, lg: 14 }[s];
  return {
    className: `arkyn_badge ${t} ${a} ${s} ${h}`.trim(),
    children: c,
    leftIcon: kt(y, l),
    rightIcon: kt(y, u),
    ...p
  };
}
function Xr(n) {
  const { leftIcon: t, children: a, rightIcon: s, ...l } = Ln(n);
  return /* @__PURE__ */ m.jsxs("div", { ...l, children: [
    t,
    a,
    s
  ] });
}
function qr(n) {
  const {
    className: t,
    orientation: a = "horizontal",
    ...s
  } = n, l = `arkyn_divider ${a} ${t}`;
  return /* @__PURE__ */ m.jsx("div", { className: l, ...s });
}
function Jr({ className: n, ...t }) {
  const a = "arkyn_skeleton " + n;
  return /* @__PURE__ */ m.jsx("div", { className: a.trim(), ...t });
}
function On(n) {
  const {
    isLoading: t = !1,
    scheme: a = "primary",
    variant: s = "solid",
    loadingText: l,
    size: u = "md",
    leftIcon: h,
    rightIcon: c,
    disabled: p,
    className: o = "",
    children: y,
    ..._
  } = n, b = { xs: 12, sm: 16, md: 20, lg: 24 }[u];
  return {
    className: `arkyn_button loading_text_${!!l} ${s} ${a} ${u} loading_${t} ${o}`.trim(),
    loadingText: l,
    children: y,
    iconSize: b,
    disabled: p || t,
    leftIcon: kt(b, h),
    rightIcon: kt(b, c),
    ..._
  };
}
function Zr(n) {
  const { leftIcon: t, rightIcon: a, iconSize: s, children: l, loadingText: u, ...h } = On(n);
  return /* @__PURE__ */ m.jsxs("button", { ...h, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ m.jsx(Qe, { size: s, strokeWidth: 2.5 }),
      u && u
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "content", children: [
      t,
      l,
      a
    ] })
  ] });
}
const cn = Ct({});
function Qr({ children: n, ...t }) {
  var c, p;
  const a = sn(), s = at(null), l = ((c = s.current) == null ? void 0 : c.name) || "", u = ((p = a == null ? void 0 : a.fieldErrors) == null ? void 0 : p[l]) || null, h = wn();
  return /* @__PURE__ */ m.jsx(cn.Provider, { value: { error: u, id: h, inputRef: s }, children: /* @__PURE__ */ m.jsx("section", { className: "arkyn_form_controller", ...t, children: n }) });
}
function Ke() {
  return gt(cn);
}
function ea(n) {
  const {
    name: t,
    className: a = "",
    size: s = "md",
    isError: l,
    defaultChecked: u = !1,
    checked: h = null,
    onCheck: c,
    value: p,
    ...o
  } = n, { id: y, inputRef: _, error: N } = Ke(), b = l || !!N, [P, A] = De(u || !1), U = typeof h == "boolean" ? h : P, w = `arkyn_checkbox ${s} ${b ? "error" : ""} ${U ? "checked" : ""} ${a}`;
  function E() {
    const L = P;
    A(!L), c && c(L ? "" : p || "checked");
  }
  return /* @__PURE__ */ m.jsxs("div", { id: y, className: w, onClick: E, ...o, children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "hidden",
        name: t,
        ref: _,
        value: U ? p || "checked" : ""
      }
    ),
    /* @__PURE__ */ m.jsx(on, {})
  ] });
}
function ta({ children: n }) {
  const { error: t } = Ke();
  return n ? /* @__PURE__ */ m.jsx("strong", { className: "arkyn_form_error", children: n }) : t ? /* @__PURE__ */ m.jsx("strong", { className: "arkyn_form_error", children: t }) : /* @__PURE__ */ m.jsx(m.Fragment, {});
}
function Pn(n) {
  const { showAsterisk: t = !1, className: a = "", ...s } = n;
  return {
    className: `arkyn_form_label ${t ? "show-asterisk" : ""} ${a}`.trim(),
    ...s
  };
}
function na(n) {
  const { id: t } = Ke();
  return /* @__PURE__ */ m.jsx("label", { ...Pn(n), htmlFor: t });
}
const Kt = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function ra(n) {
  const {
    isLoading: t = !1,
    scheme: a = "primary",
    variant: s = "solid",
    size: l = "md",
    icon: u,
    disabled: h,
    className: c = "",
    ...p
  } = n, o = `arkyn_icon_button ${s} ${a} ${l} loading_${t} ${c}`;
  return /* @__PURE__ */ m.jsxs(
    "button",
    {
      disabled: h || t,
      className: o.trim(),
      ...p,
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "spinner", children: /* @__PURE__ */ m.jsx(Qe, { size: Kt[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ m.jsx("div", { className: "content " + l, children: /* @__PURE__ */ m.jsx(u, { size: Kt[l], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ge(n, t, a) {
  if (!n)
    return /* @__PURE__ */ m.jsx(m.Fragment, {});
  if (typeof n == "string")
    return /* @__PURE__ */ m.jsx("p", { className: a, children: n });
  const s = n;
  return /* @__PURE__ */ m.jsx("p", { className: a, children: /* @__PURE__ */ m.jsx(s, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function Bt(n) {
  return n && n.replace(/[^0-9]/g, "");
}
function un(n, t) {
  let a = "", s = 0;
  return Array.from(n).forEach((l, u) => {
    t[u + s].match(/[0-9]/) || (a += t[u + s], s++), a += l;
  }), a;
}
function dn(n) {
  return n.length > 11 ? "CNPJ" : "CPF";
}
const Ut = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, fn = Bt(Ut.CNPJ).length;
function jn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: u = "",
    variant: h = "solid",
    prefix: c,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: _,
    defaultValue: N,
    readOnly: b,
    onFocus: P,
    onBlur: A,
    title: U,
    style: w,
    onChange: E,
    ...L
  } = n;
  function W(R) {
    let $ = Bt(R);
    const J = dn($);
    if (!($.length > fn))
      return $ = un($, Ut[J]), $;
  }
  const M = y ? "right" : "left", z = `arkyn_input ${c ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${_ || b || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${u}`, k = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: z,
    prefix: Ge(c, k, "prefix"),
    sufix: Ge(p, k, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    defaultValue: W(N || ""),
    disabled: _,
    readOnly: b,
    onFocus: P,
    onBlur: A,
    title: U,
    style: w,
    onChange: E,
    loadingPosition: M,
    iconSize: k,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...L
  };
}
function Dn(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: u, error: h } = Ke(), c = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: _,
    className: N,
    prefix: b,
    sufix: P,
    iconSize: A,
    loadingPosition: U,
    isLoading: w,
    LeftIcon: E,
    readOnly: L,
    onFocus: W,
    onBlur: M,
    RightIcon: X,
    Spinner: ee,
    onChange: V,
    value: re,
    defaultValue: Y,
    ...z
  } = jn({ ...n, id: u, isError: p }, t), [ae, k] = De(Y), R = E && !w, $ = X && !w, J = U === "left" && w, ie = U === "right" && w;
  function Z() {
    o || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function le(x) {
    let O = Bt(x.target.value);
    const j = dn(O);
    O.length > fn || (O = un(O, Ut[j]), x.target.value = O, k(O), V && V(x));
  }
  function G(x) {
    a(!0), W && W(x);
  }
  function F(x) {
    a(!1), M && M(x);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: _,
      onClick: Z,
      className: N,
      children: [
        b,
        J && ee,
        R && /* @__PURE__ */ m.jsx(E, { size: A, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            disabled: o || w,
            readOnly: L,
            ref: c,
            value: re || ae,
            onFocus: G,
            onChange: le,
            onBlur: F,
            ...z
          }
        ),
        $ && /* @__PURE__ */ m.jsx(X, { size: A, strokeWidth: 2.5 }),
        ie && ee,
        P
      ]
    }
  );
}
function Mn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: u = "",
    variant: h = "solid",
    prefix: c,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: _,
    readOnly: N,
    onFocus: b,
    onBlur: P,
    title: A,
    style: U,
    showCents: w = !1,
    max: E = 1e9,
    onChange: L,
    ...W
  } = n, M = y ? "right" : "left", z = `arkyn_input ${c ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${_ || N || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${u}`, k = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: z,
    prefix: Ge(c, k, "prefix"),
    sufix: Ge(p, k, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    disabled: _,
    readOnly: N,
    onFocus: b,
    onBlur: P,
    title: A,
    style: U,
    max: E,
    onChange: L,
    showCents: w,
    loadingPosition: M,
    iconSize: k,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...W
  };
}
const zn = /^[1-9]{1}$/, $n = /^[0-9]{1}$/, Xt = 8;
function Fn(n, t) {
  if (n === 0)
    return "";
  const a = (n / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return t ? a : a.replace("R$", "").trim();
}
function Bn(n) {
  const { currencyValue: t, event: a, max: s, setCurrencyValue: l } = n, { key: u, keyCode: h } = a;
  if (t === 0 && !zn.test(u) || t !== 0 && !$n.test(u) && h !== Xt)
    return;
  const c = t.toString();
  let p;
  if (h !== Xt) {
    const o = t === 0 ? u : `${c}${u}`;
    p = Number.parseInt(o, 10);
  } else {
    const o = c.slice(0, -1);
    p = o === "" ? 0 : Number.parseInt(o, 10);
  }
  p > Number(s) || l(p);
}
function Un(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: u, error: h } = Ke(), c = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: _,
    className: N,
    prefix: b,
    sufix: P,
    iconSize: A,
    loadingPosition: U,
    isLoading: w,
    LeftIcon: E,
    readOnly: L,
    onFocus: W,
    onBlur: M,
    RightIcon: X,
    Spinner: ee,
    value: V,
    max: re,
    onKeyDown: Y,
    onChange: z,
    showCents: ae,
    defaultValue: k,
    ...R
  } = Mn({ ...n, id: u, isError: p }, t), [$, J] = De(k * 100 || 0), ie = E && !w, Z = X && !w, le = U === "left" && w, G = U === "right" && w;
  function F() {
    o || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function x(te) {
    Bn({ currencyValue: $, event: te, max: re, setCurrencyValue: J }), z && z($ / 100), Y && Y(te);
  }
  function O(te) {
    a(!0), W && W(te);
  }
  function j(te) {
    a(!1), M && M(te);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: _,
      onClick: F,
      className: N,
      children: [
        b,
        le && ee,
        ie && /* @__PURE__ */ m.jsx(E, { size: A, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            value: Fn(V || $, ae),
            onKeyDown: x,
            disabled: o || w,
            readOnly: L,
            ref: c,
            onFocus: O,
            onBlur: j,
            onChange: () => {
            },
            ...R
          }
        ),
        G && ee,
        Z && /* @__PURE__ */ m.jsx(X, { size: A, strokeWidth: 2.5 }),
        P
      ]
    }
  );
}
function Wn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: u = "",
    variant: h = "solid",
    prefix: c,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: _,
    readOnly: N,
    onFocus: b,
    onBlur: P,
    title: A,
    style: U,
    onChange: w,
    showMask: E = !1,
    type: L,
    ...W
  } = n, M = y ? "right" : "left", z = `arkyn_input ${c ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${_ || N || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${u}`, k = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: z,
    prefix: Ge(c, k, "prefix"),
    sufix: Ge(p, k, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    disabled: _,
    readOnly: N,
    onFocus: b,
    onBlur: P,
    title: A,
    style: U,
    onChange: w,
    loadingPosition: M,
    iconSize: k,
    showMask: E,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...W
  };
}
const Hn = En((n, t) => /* @__PURE__ */ m.jsx("input", { ref: t, ...n }));
function Yn(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: u, error: h } = Ke(), c = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: _,
    className: N,
    prefix: b,
    sufix: P,
    iconSize: A,
    loadingPosition: U,
    isLoading: w,
    LeftIcon: E,
    readOnly: L,
    onFocus: W,
    onBlur: M,
    RightIcon: X,
    Spinner: ee,
    ...V
  } = Wn({ ...n, id: u, isError: p }, t), re = E && !w, Y = X && !w, z = U === "left" && w, ae = U === "right" && w;
  function k() {
    o || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function R(J) {
    a(!0), W && W(J);
  }
  function $(J) {
    a(!1), M && M(J);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: _,
      onClick: k,
      className: N,
      children: [
        b,
        z && ee,
        re && /* @__PURE__ */ m.jsx(E, { size: A, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          kn,
          {
            component: Hn,
            ref: c,
            onFocus: R,
            onBlur: $,
            ...V
          }
        ),
        Y && /* @__PURE__ */ m.jsx(X, { size: A, strokeWidth: 2.5 }),
        ae && ee,
        P
      ]
    }
  );
}
function Vn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: u = "",
    variant: h = "solid",
    prefix: c,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: _,
    readOnly: N,
    onFocus: b,
    onBlur: P,
    title: A,
    style: U,
    onChange: w,
    ...E
  } = n, L = y ? "right" : "left", re = `arkyn_input ${c ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${_ || N || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${u}`, z = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: re,
    prefix: Ge(c, z, "prefix"),
    sufix: Ge(p, z, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    disabled: _,
    readOnly: N,
    onFocus: b,
    onBlur: P,
    title: A,
    style: U,
    onChange: w,
    loadingPosition: L,
    iconSize: z,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...E
  };
}
function Gn(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: u, error: h } = Ke(), c = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: _,
    className: N,
    prefix: b,
    sufix: P,
    iconSize: A,
    loadingPosition: U,
    isLoading: w,
    LeftIcon: E,
    readOnly: L,
    onFocus: W,
    onBlur: M,
    RightIcon: X,
    type: ee,
    Spinner: V,
    ...re
  } = Vn({ ...n, id: u, isError: p }, t), Y = E && !w, z = X && !w, ae = U === "left" && w, k = U === "right" && w;
  function R() {
    o || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function $(ie) {
    a(!0), W && W(ie);
  }
  function J(ie) {
    a(!1), M && M(ie);
  }
  return ee === "hidden" ? /* @__PURE__ */ m.jsx("input", { type: "hidden", ref: c, ...re }) : /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: _,
      onClick: R,
      className: N,
      children: [
        b,
        ae && V,
        Y && /* @__PURE__ */ m.jsx(E, { size: A, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            disabled: o || w,
            readOnly: L,
            ref: c,
            onFocus: $,
            onBlur: J,
            type: ee,
            ...re
          }
        ),
        z && /* @__PURE__ */ m.jsx(X, { size: A, strokeWidth: 2.5 }),
        k && V,
        P
      ]
    }
  );
}
function aa(n) {
  return n.type === "currency" ? /* @__PURE__ */ m.jsx(Un, { ...n }) : n.type === "masked" ? /* @__PURE__ */ m.jsx(Yn, { ...n }) : n.type === "cpf-cpnj" ? /* @__PURE__ */ m.jsx(Dn, { ...n }) : /* @__PURE__ */ m.jsx(Gn, { ...n });
}
function Kn(n, t, a) {
  if (!n)
    return /* @__PURE__ */ m.jsx(m.Fragment, {});
  if (typeof n == "string")
    return /* @__PURE__ */ m.jsx("p", { className: a, children: n });
  const s = n;
  return /* @__PURE__ */ m.jsx("p", { className: a, children: /* @__PURE__ */ m.jsx(s, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function Xn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: u = "",
    variant: h = "solid",
    prefix: c,
    leftIcon: p,
    disabled: o,
    readOnly: y,
    onFocus: _,
    onBlur: N,
    title: b,
    style: P,
    isSearchable: A = !1,
    closeOnSelect: U = !0,
    ...w
  } = n, X = `arkyn_select ${c ? "hasPrefix" : ""} ${h} ${l} ${o || y || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${u}`, V = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: X,
    prefix: Kn(c, V, "prefix"),
    LeftIcon: p,
    disabled: o,
    readOnly: y,
    onFocus: _,
    onBlur: N,
    title: b,
    closeOnSelect: U,
    style: P,
    isSearchable: A,
    iconSize: V,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: V, strokeWidth: 2.5 }),
    ...w
  };
}
function oa(n) {
  var K;
  const [t, a] = De(!1), { inputRef: s, id: l, error: u } = Ke(), h = at(null), c = s || h, p = n.isError || !!u, {
    disabled: o,
    title: y,
    style: _,
    className: N,
    prefix: b,
    iconSize: P,
    isLoading: A,
    LeftIcon: U,
    value: w = null,
    defaultValue: E = "",
    readOnly: L,
    onFocus: W,
    onBlur: M,
    Spinner: X,
    name: ee,
    isSearchable: V,
    placeholder: re,
    onSelect: Y,
    options: z,
    optionMaxHeight: ae,
    closeOnSelect: k,
    ...R
  } = Xn({ ...n, id: l, isError: p }, t), [$, J] = De(E), [ie, Z] = De("");
  function le() {
    o || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function G(ue) {
    a(!0), W && W(ue);
  }
  function F() {
    a(!1), M && c.current && c.current.blur();
  }
  const x = typeof w == "string" ? w : $, O = ((K = z.find((ue) => ue.value === x)) == null ? void 0 : K.label) || "", j = () => {
    if (V) {
      if (!t && O)
        return !0;
      if (!t && !O || t)
        return !1;
    }
    if (!V) {
      if (!t && O)
        return !0;
      if (!t && !O)
        return !1;
      if (t && O)
        return !0;
      if (t && !O)
        return !1;
    }
  }, te = z.filter((ue) => V ? ue.label.toLowerCase().includes(ie.toLowerCase()) : !0);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(
      "section",
      {
        title: y,
        style: _,
        onClick: le,
        className: `${N} placeholder_dark_${j()}`,
        children: [
          b,
          U && /* @__PURE__ */ m.jsx(U, { size: P, strokeWidth: 2.5 }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              disabled: o || A,
              readOnly: !V,
              value: ie || "",
              placeholder: O || re,
              onFocus: G,
              onBlur: () => Z(""),
              ...R,
              onChange: (ue) => Z(ue.target.value)
            }
          ),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              type: "hidden",
              ref: c,
              name: ee,
              value: x || "",
              readOnly: !0
            }
          ),
          t && /* @__PURE__ */ m.jsxs(
            "ul",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: ae },
              children: [
                te.map(({ label: ue, value: de }) => /* @__PURE__ */ m.jsxs(
                  "li",
                  {
                    className: x === de ? "active" : "",
                    onClick: () => {
                      J($ !== de ? de : ""), Y && Y({ label: ue, value: de }), k && setTimeout(() => F(), 100);
                    },
                    children: [
                      ue,
                      " ",
                      /* @__PURE__ */ m.jsx(on, {})
                    ]
                  },
                  de
                )),
                te.length <= 0 && /* @__PURE__ */ m.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !A && /* @__PURE__ */ m.jsx(
            Tn,
            {
              className: "arkyn_select_arrow",
              size: P,
              strokeWidth: 2.5
            }
          ),
          A && X
        ]
      }
    ),
    t && /* @__PURE__ */ m.jsx("aside", { className: "arkyn_select_overlay", onClick: F })
  ] });
}
function qn(n) {
  const { className: t = "", ...a } = n;
  return { className: `arkyn_breadcrumb ${t}`.trim(), ...a };
}
function Jn(n) {
  const { pathname: t } = ln(), {
    className: a = "",
    disabled: s = !1,
    to: l,
    ...u
  } = n, h = t === l ? "active" : "inactive", c = `arkyn_breadcrumb_link ${h} ${a}`;
  return {
    to: l,
    className: c.trim(),
    disabled: s || h === "active",
    ...u
  };
}
function sa(n) {
  const { className: t, ...a } = qn(n);
  return /* @__PURE__ */ m.jsx("nav", { className: t, ...a });
}
function ia(n) {
  const { children: t, className: a, disabled: s, ...l } = Jn(n);
  return s ? /* @__PURE__ */ m.jsxs("p", { className: a, children: [
    /* @__PURE__ */ m.jsx(Ht, { size: 14, strokeWidth: 2.5 }),
    t
  ] }) : /* @__PURE__ */ m.jsxs(Nn, { className: a, ...l, children: [
    /* @__PURE__ */ m.jsx(Ht, { size: 14, strokeWidth: 2.5 }),
    t
  ] });
}
const mn = Ct({});
function Zn(n) {
  const {
    isVisibled: t,
    makeInvisible: a,
    children: s,
    className: l = "",
    ...u
  } = n, c = `arkyn_modal_container ${t ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ m.jsx(mn.Provider, { value: { makeInvisible: a }, children: /* @__PURE__ */ m.jsx(Cn, { children: t && /* @__PURE__ */ m.jsxs("aside", { className: c.trim(), ...u, children: [
    /* @__PURE__ */ m.jsx(
      Yt.div,
      {
        className: "overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: a
      }
    ),
    /* @__PURE__ */ m.jsx(
      Yt.div,
      {
        className: "content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: s
      }
    )
  ] }) }) });
}
function Qn(n) {
  const { alignment: t = "right", className: a, ...s } = n, l = `arkyn_modal_footer ${t} ${a}`;
  return /* @__PURE__ */ m.jsx("footer", { className: l.trim(), ...s });
}
function er(n) {
  const { showCloseButton: t, className: a, children: s, ...l } = n, { makeInvisible: u } = gt(mn), c = `arkyn_modal_header ${t ? "show-close" : ""} ${a}`;
  return /* @__PURE__ */ m.jsxs("header", { className: c.trim(), ...l, children: [
    s,
    /* @__PURE__ */ m.jsx("button", { type: "button", onClick: u, children: /* @__PURE__ */ m.jsx(_n, { size: 24 }) })
  ] });
}
const la = { Container: Zn, Header: er, Footer: Qn };
function ca(n) {
  const {
    text: t,
    size: a = "lg",
    children: s,
    orientation: l = "top",
    className: u,
    ...h
  } = n;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${a} ${l} ${u}`,
      ...h,
      children: [
        s,
        /* @__PURE__ */ m.jsx("div", { className: "arkyn_tooltip_text", children: t })
      ]
    }
  );
}
const Wt = Ct({});
function ua() {
  const n = sn(), { closeModal: t } = gt(Wt);
  Sn(() => {
    const a = n == null ? void 0 : n.closeModalKey;
    a && t(a);
  }, [n]);
}
function da(n) {
  const t = gt(Wt);
  if (Object.entries(t).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (n) {
    const {
      modalData: a,
      modalIsOpen: s,
      openModal: l,
      closeModal: u
    } = t, h = s(n), c = a(n);
    return { modalIsOpen: h, modalData: c, openModal: (y) => l(n, y == null ? void 0 : y.data), closeModal: () => u(n) };
  } else
    return t;
}
function fa(n = "") {
  const t = ln(), a = new URLSearchParams(t.search), s = n ? `${n}:` : "", l = (u) => {
    Object.entries(u).forEach(([h, c]) => {
      c === void 0 ? a.delete(`${s}${h}`) : a.set(`${s}${h}`, String(c));
    });
  };
  return {
    getParam: (u) => a.get(`${s}${u}`),
    getScopedSearch: (u) => {
      l(u);
      let h = a.toString();
      return h && (h = "?" + h), h;
    }
  };
}
const pn = Ct({});
function ma() {
  const n = gt(pn);
  if (Object.entries(n).length === 0)
    throw new Error("useToast must be used within a Provider");
  return n;
}
function pa(n) {
  const { children: t = !1 } = n, [a, s] = De([]);
  function l(p) {
    return !!a.some((o) => o.key === p);
  }
  function u(p) {
    var o;
    return (o = a.find((y) => y.key === p)) == null ? void 0 : o.data;
  }
  function h(p, o) {
    const y = l(p);
    s(y ? (_) => [..._.filter((b) => b.key !== p), { key: p, data: o }] : [...a, { key: p, data: o }]);
  }
  function c(p) {
    s(a.filter((o) => o.key !== p));
  }
  return /* @__PURE__ */ m.jsx(
    Wt.Provider,
    {
      value: { modalIsOpen: l, modalData: u, openModal: h, closeModal: c },
      children: t
    }
  );
}
var { entries: hn, setPrototypeOf: qt, isFrozen: tr, getPrototypeOf: nr, getOwnPropertyDescriptor: rr } = Object, { freeze: xe, seal: Re, create: gn } = Object, { apply: zt, construct: $t } = typeof Reflect < "u" && Reflect;
xe || (xe = function(n) {
  return n;
});
Re || (Re = function(n) {
  return n;
});
zt || (zt = function(n, t, a) {
  return n.apply(t, a);
});
$t || ($t = function(n, t) {
  return new n(...t);
});
var wt = _e(Array.prototype.forEach), Jt = _e(Array.prototype.pop), mt = _e(Array.prototype.push), Nt = _e(String.prototype.toLowerCase), Lt = _e(String.prototype.toString), Zt = _e(String.prototype.match), pt = _e(String.prototype.replace), ar = _e(String.prototype.indexOf), or = _e(String.prototype.trim), Pe = _e(Object.prototype.hasOwnProperty), Te = _e(RegExp.prototype.test), ht = sr(TypeError);
function _e(n) {
  return function(t) {
    for (var a = arguments.length, s = new Array(a > 1 ? a - 1 : 0), l = 1; l < a; l++)
      s[l - 1] = arguments[l];
    return zt(n, t, s);
  };
}
function sr(n) {
  return function() {
    for (var t = arguments.length, a = new Array(t), s = 0; s < t; s++)
      a[s] = arguments[s];
    return $t(n, a);
  };
}
function B(n, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nt;
  qt && qt(n, null);
  let s = t.length;
  for (; s--; ) {
    let l = t[s];
    if (typeof l == "string") {
      let u = a(l);
      u !== l && (tr(t) || (t[s] = u), l = u);
    }
    n[l] = !0;
  }
  return n;
}
function ir(n) {
  for (let t = 0; t < n.length; t++)
    Pe(n, t) || (n[t] = null);
  return n;
}
function Ze(n) {
  let t = gn(null);
  for (let [a, s] of hn(n))
    Pe(n, a) && (Array.isArray(s) ? t[a] = ir(s) : s && typeof s == "object" && s.constructor === Object ? t[a] = Ze(s) : t[a] = s);
  return t;
}
function Et(n, t) {
  for (; n !== null; ) {
    let s = rr(n, t);
    if (s) {
      if (s.get)
        return _e(s.get);
      if (typeof s.value == "function")
        return _e(s.value);
    }
    n = nr(n);
  }
  function a() {
    return null;
  }
  return a;
}
var Qt = xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pt = xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lr = xe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), jt = xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), cr = xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), en = xe(["#text"]), tn = xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Dt = xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), nn = xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ur = Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm), dr = Re(/<%[\w\W]*|[\w\W]*%>/gm), fr = Re(/\${[\w\W]*}/gm), mr = Re(/^data-[\-\w.\u00B7-\uFFFF]/), pr = Re(/^aria-[\-\w]+$/), vn = Re(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hr = Re(/^(?:\w+script|data):/i), gr = Re(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), yn = Re(/^html$/i), vr = Re(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i), rn = Object.freeze({ __proto__: null, MUSTACHE_EXPR: ur, ERB_EXPR: dr, TMPLIT_EXPR: fr, DATA_ATTR: mr, ARIA_ATTR: pr, IS_ALLOWED_URI: vn, IS_SCRIPT_OR_DATA: hr, ATTR_WHITESPACE: gr, DOCTYPE_NAME: yn, CUSTOM_ELEMENT: vr }), yr = function() {
  return typeof window > "u" ? null : window;
}, br = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let a = null, s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (a = t.getAttribute(s));
  let l = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(l, { createHTML(u) {
      return u;
    }, createScriptURL(u) {
      return u;
    } });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function bn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yr(), t = (e) => bn(e);
  if (t.version = "3.0.10", t.removed = [], !n || !n.document || n.document.nodeType !== 9)
    return t.isSupported = !1, t;
  let { document: a } = n, s = a, l = s.currentScript, { DocumentFragment: u, HTMLTemplateElement: h, Node: c, Element: p, NodeFilter: o, NamedNodeMap: y = n.NamedNodeMap || n.MozNamedAttrMap, HTMLFormElement: _, DOMParser: N, trustedTypes: b } = n, P = p.prototype, A = Et(P, "cloneNode"), U = Et(P, "nextSibling"), w = Et(P, "childNodes"), E = Et(P, "parentNode");
  if (typeof h == "function") {
    let e = a.createElement("template");
    e.content && e.content.ownerDocument && (a = e.content.ownerDocument);
  }
  let L, W = "", { implementation: M, createNodeIterator: X, createDocumentFragment: ee, getElementsByTagName: V } = a, { importNode: re } = s, Y = {};
  t.isSupported = typeof hn == "function" && typeof E == "function" && M && M.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: z, ERB_EXPR: ae, TMPLIT_EXPR: k, DATA_ATTR: R, ARIA_ATTR: $, IS_SCRIPT_OR_DATA: J, ATTR_WHITESPACE: ie, CUSTOM_ELEMENT: Z } = rn, { IS_ALLOWED_URI: le } = rn, G = null, F = B({}, [...Qt, ...Ot, ...Pt, ...jt, ...en]), x = null, O = B({}, [...tn, ...Dt, ...nn, ...St]), j = Object.seal(gn(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), te = null, K = null, ue = !0, de = !0, Ie = !1, we = !0, Ae = !1, pe = !1, Xe = !1, qe = !1, oe = !1, he = !1, $e = !1, Je = !0, Ne = !1, ot = "user-content-", Be = !0, Se = !1, ye = {}, Le = null, ke = B({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Ue = null, Me = B({}, ["audio", "video", "img", "source", "image", "track"]), We = null, He = B({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fe = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", fe = "http://www.w3.org/1999/xhtml", ze = fe, Ye = !1, S = null, se = B({}, [Fe, Ce, fe], Lt), Q = null, Ee = ["application/xhtml+xml", "text/html"], ge = "text/html", ne = null, be = null, st = a.createElement("form"), et = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, tt = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(be && be === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = Ze(e), Q = Ee.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? ge : e.PARSER_MEDIA_TYPE, ne = Q === "application/xhtml+xml" ? Lt : Nt, G = Pe(e, "ALLOWED_TAGS") ? B({}, e.ALLOWED_TAGS, ne) : F, x = Pe(e, "ALLOWED_ATTR") ? B({}, e.ALLOWED_ATTR, ne) : O, S = Pe(e, "ALLOWED_NAMESPACES") ? B({}, e.ALLOWED_NAMESPACES, Lt) : se, We = Pe(e, "ADD_URI_SAFE_ATTR") ? B(Ze(He), e.ADD_URI_SAFE_ATTR, ne) : He, Ue = Pe(e, "ADD_DATA_URI_TAGS") ? B(Ze(Me), e.ADD_DATA_URI_TAGS, ne) : Me, Le = Pe(e, "FORBID_CONTENTS") ? B({}, e.FORBID_CONTENTS, ne) : ke, te = Pe(e, "FORBID_TAGS") ? B({}, e.FORBID_TAGS, ne) : {}, K = Pe(e, "FORBID_ATTR") ? B({}, e.FORBID_ATTR, ne) : {}, ye = Pe(e, "USE_PROFILES") ? e.USE_PROFILES : !1, ue = e.ALLOW_ARIA_ATTR !== !1, de = e.ALLOW_DATA_ATTR !== !1, Ie = e.ALLOW_UNKNOWN_PROTOCOLS || !1, we = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ae = e.SAFE_FOR_TEMPLATES || !1, pe = e.WHOLE_DOCUMENT || !1, oe = e.RETURN_DOM || !1, he = e.RETURN_DOM_FRAGMENT || !1, $e = e.RETURN_TRUSTED_TYPE || !1, qe = e.FORCE_BODY || !1, Je = e.SANITIZE_DOM !== !1, Ne = e.SANITIZE_NAMED_PROPS || !1, Be = e.KEEP_CONTENT !== !1, Se = e.IN_PLACE || !1, le = e.ALLOWED_URI_REGEXP || vn, ze = e.NAMESPACE || fe, j = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (j.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (j.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (j.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ae && (de = !1), he && (oe = !0), ye && (G = B({}, en), x = [], ye.html === !0 && (B(G, Qt), B(x, tn)), ye.svg === !0 && (B(G, Ot), B(x, Dt), B(x, St)), ye.svgFilters === !0 && (B(G, Pt), B(x, Dt), B(x, St)), ye.mathMl === !0 && (B(G, jt), B(x, nn), B(x, St))), e.ADD_TAGS && (G === F && (G = Ze(G)), B(G, e.ADD_TAGS, ne)), e.ADD_ATTR && (x === O && (x = Ze(x)), B(x, e.ADD_ATTR, ne)), e.ADD_URI_SAFE_ATTR && B(We, e.ADD_URI_SAFE_ATTR, ne), e.FORBID_CONTENTS && (Le === ke && (Le = Ze(Le)), B(Le, e.FORBID_CONTENTS, ne)), Be && (G["#text"] = !0), pe && B(G, ["html", "head", "body"]), G.table && (B(G, ["tbody"]), delete te.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ht('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ht('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        L = e.TRUSTED_TYPES_POLICY, W = L.createHTML("");
      } else
        L === void 0 && (L = br(b, l)), L !== null && typeof W == "string" && (W = L.createHTML(""));
      xe && xe(e), be = e;
    }
  }, vt = B({}, ["mi", "mo", "mn", "ms", "mtext"]), it = B({}, ["foreignobject", "desc", "title", "annotation-xml"]), Rt = B({}, ["title", "style", "font", "a", "script"]), lt = B({}, [...Ot, ...Pt, ...lr]), ct = B({}, [...jt, ...cr]), It = function(e) {
    let f = E(e);
    (!f || !f.tagName) && (f = { namespaceURI: ze, tagName: "template" });
    let i = Nt(e.tagName), C = Nt(f.tagName);
    return S[e.namespaceURI] ? e.namespaceURI === Ce ? f.namespaceURI === fe ? i === "svg" : f.namespaceURI === Fe ? i === "svg" && (C === "annotation-xml" || vt[C]) : !!lt[i] : e.namespaceURI === Fe ? f.namespaceURI === fe ? i === "math" : f.namespaceURI === Ce ? i === "math" && it[C] : !!ct[i] : e.namespaceURI === fe ? f.namespaceURI === Ce && !it[C] || f.namespaceURI === Fe && !vt[C] ? !1 : !ct[i] && (Rt[i] || !lt[i]) : !!(Q === "application/xhtml+xml" && S[e.namespaceURI]) : !1;
  }, Ve = function(e) {
    mt(t.removed, { element: e });
    try {
      e.parentNode.removeChild(e);
    } catch {
      e.remove();
    }
  }, nt = function(e, f) {
    try {
      mt(t.removed, { attribute: f.getAttributeNode(e), from: f });
    } catch {
      mt(t.removed, { attribute: null, from: f });
    }
    if (f.removeAttribute(e), e === "is" && !x[e])
      if (oe || he)
        try {
          Ve(f);
        } catch {
        }
      else
        try {
          f.setAttribute(e, "");
        } catch {
        }
  }, ut = function(e) {
    let f = null, i = null;
    if (qe)
      e = "<remove></remove>" + e;
    else {
      let I = Zt(e, /^[\r\n\t ]+/);
      i = I && I[0];
    }
    Q === "application/xhtml+xml" && ze === fe && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    let C = L ? L.createHTML(e) : e;
    if (ze === fe)
      try {
        f = new N().parseFromString(C, Q);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = M.createDocument(ze, "template", null);
      try {
        f.documentElement.innerHTML = Ye ? W : C;
      } catch {
      }
    }
    let D = f.body || f.documentElement;
    return e && i && D.insertBefore(a.createTextNode(i), D.childNodes[0] || null), ze === fe ? V.call(f, pe ? "html" : "body")[0] : pe ? f.documentElement : D;
  }, yt = function(e) {
    return X.call(e.ownerDocument || e, e, o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION, null);
  }, At = function(e) {
    return e instanceof _ && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof y) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, bt = function(e) {
    return typeof c == "function" && e instanceof c;
  }, Oe = function(e, f, i) {
    Y[e] && wt(Y[e], (C) => {
      C.call(t, f, i, be);
    });
  }, r = function(e) {
    let f = null;
    if (Oe("beforeSanitizeElements", e, null), At(e))
      return Ve(e), !0;
    let i = ne(e.nodeName);
    if (Oe("uponSanitizeElement", e, { tagName: i, allowedTags: G }), e.hasChildNodes() && !bt(e.firstElementChild) && Te(/<[/\w]/g, e.innerHTML) && Te(/<[/\w]/g, e.textContent))
      return Ve(e), !0;
    if (!G[i] || te[i]) {
      if (!te[i] && g(i) && (j.tagNameCheck instanceof RegExp && Te(j.tagNameCheck, i) || j.tagNameCheck instanceof Function && j.tagNameCheck(i)))
        return !1;
      if (Be && !Le[i]) {
        let C = E(e) || e.parentNode, D = w(e) || e.childNodes;
        if (D && C) {
          let I = D.length;
          for (let ce = I - 1; ce >= 0; --ce)
            C.insertBefore(A(D[ce], !0), U(e));
        }
      }
      return Ve(e), !0;
    }
    return e instanceof p && !It(e) || (i === "noscript" || i === "noembed" || i === "noframes") && Te(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ve(e), !0) : (Ae && e.nodeType === 3 && (f = e.textContent, wt([z, ae, k], (C) => {
      f = pt(f, C, " ");
    }), e.textContent !== f && (mt(t.removed, { element: e.cloneNode() }), e.textContent = f)), Oe("afterSanitizeElements", e, null), !1);
  }, d = function(e, f, i) {
    if (Je && (f === "id" || f === "name") && (i in a || i in st))
      return !1;
    if (!(de && !K[f] && Te(R, f)) && !(ue && Te($, f))) {
      if (!x[f] || K[f]) {
        if (!(g(e) && (j.tagNameCheck instanceof RegExp && Te(j.tagNameCheck, e) || j.tagNameCheck instanceof Function && j.tagNameCheck(e)) && (j.attributeNameCheck instanceof RegExp && Te(j.attributeNameCheck, f) || j.attributeNameCheck instanceof Function && j.attributeNameCheck(f)) || f === "is" && j.allowCustomizedBuiltInElements && (j.tagNameCheck instanceof RegExp && Te(j.tagNameCheck, i) || j.tagNameCheck instanceof Function && j.tagNameCheck(i))))
          return !1;
      } else if (!We[f] && !Te(le, pt(i, ie, "")) && !((f === "src" || f === "xlink:href" || f === "href") && e !== "script" && ar(i, "data:") === 0 && Ue[e]) && !(Ie && !Te(J, pt(i, ie, ""))) && i)
        return !1;
    }
    return !0;
  }, g = function(e) {
    return e !== "annotation-xml" && Zt(e, Z);
  }, T = function(e) {
    Oe("beforeSanitizeAttributes", e, null);
    let { attributes: f } = e;
    if (!f)
      return;
    let i = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: x }, C = f.length;
    for (; C--; ) {
      let D = f[C], { name: I, namespaceURI: ce, value: ve } = D, me = ne(I), q = I === "value" ? ve : or(ve);
      if (i.attrName = me, i.attrValue = q, i.keepAttr = !0, i.forceKeepAttr = void 0, Oe("uponSanitizeAttribute", e, i), q = i.attrValue, i.forceKeepAttr || (nt(I, e), !i.keepAttr))
        continue;
      if (!we && Te(/\/>/i, q)) {
        nt(I, e);
        continue;
      }
      Ae && wt([z, ae, k], (xt) => {
        q = pt(q, xt, " ");
      });
      let rt = ne(e.nodeName);
      if (d(rt, me, q)) {
        if (Ne && (me === "id" || me === "name") && (nt(I, e), q = ot + q), L && typeof b == "object" && typeof b.getAttributeType == "function" && !ce)
          switch (b.getAttributeType(rt, me)) {
            case "TrustedHTML": {
              q = L.createHTML(q);
              break;
            }
            case "TrustedScriptURL": {
              q = L.createScriptURL(q);
              break;
            }
          }
        try {
          ce ? e.setAttributeNS(ce, I, q) : e.setAttribute(I, q), Jt(t.removed);
        } catch {
        }
      }
    }
    Oe("afterSanitizeAttributes", e, null);
  }, H = function e(f) {
    let i = null, C = yt(f);
    for (Oe("beforeSanitizeShadowDOM", f, null); i = C.nextNode(); )
      Oe("uponSanitizeShadowNode", i, null), !r(i) && (i.content instanceof u && e(i.content), T(i));
    Oe("afterSanitizeShadowDOM", f, null);
  };
  return t.sanitize = function(e) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, C = null, D = null, I = null;
    if (Ye = !e, Ye && (e = "<!-->"), typeof e != "string" && !bt(e))
      if (typeof e.toString == "function") {
        if (e = e.toString(), typeof e != "string")
          throw ht("dirty is not a string, aborting");
      } else
        throw ht("toString is not a function");
    if (!t.isSupported)
      return e;
    if (Xe || tt(f), t.removed = [], typeof e == "string" && (Se = !1), Se) {
      if (e.nodeName) {
        let me = ne(e.nodeName);
        if (!G[me] || te[me])
          throw ht("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (e instanceof c)
      i = ut("<!---->"), C = i.ownerDocument.importNode(e, !0), C.nodeType === 1 && C.nodeName === "BODY" || C.nodeName === "HTML" ? i = C : i.appendChild(C);
    else {
      if (!oe && !Ae && !pe && e.indexOf("<") === -1)
        return L && $e ? L.createHTML(e) : e;
      if (i = ut(e), !i)
        return oe ? null : $e ? W : "";
    }
    i && qe && Ve(i.firstChild);
    let ce = yt(Se ? e : i);
    for (; D = ce.nextNode(); )
      r(D) || (D.content instanceof u && H(D.content), T(D));
    if (Se)
      return e;
    if (oe) {
      if (he)
        for (I = ee.call(i.ownerDocument); i.firstChild; )
          I.appendChild(i.firstChild);
      else
        I = i;
      return (x.shadowroot || x.shadowrootmode) && (I = re.call(s, I, !0)), I;
    }
    let ve = pe ? i.outerHTML : i.innerHTML;
    return pe && G["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && Te(yn, i.ownerDocument.doctype.name) && (ve = "<!DOCTYPE " + i.ownerDocument.doctype.name + `>
` + ve), Ae && wt([z, ae, k], (me) => {
      ve = pt(ve, me, " ");
    }), L && $e ? L.createHTML(ve) : ve;
  }, t.setConfig = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tt(e), Xe = !0;
  }, t.clearConfig = function() {
    be = null, Xe = !1;
  }, t.isValidAttribute = function(e, f, i) {
    be || tt({});
    let C = ne(e), D = ne(f);
    return d(C, D, i);
  }, t.addHook = function(e, f) {
    typeof f == "function" && (Y[e] = Y[e] || [], mt(Y[e], f));
  }, t.removeHook = function(e) {
    if (Y[e])
      return Jt(Y[e]);
  }, t.removeHooks = function(e) {
    Y[e] && (Y[e] = []);
  }, t.removeAllHooks = function() {
    Y = {};
  }, t;
}
var xr = bn(), wr = (n) => {
  switch (n) {
    case "success":
      return Tr;
    case "info":
      return Nr;
    case "warning":
      return _r;
    case "error":
      return kr;
    default:
      return null;
  }
}, Er = Array(12).fill(0), Sr = ({ visible: n }) => v.createElement("div", { className: "sonner-loading-wrapper", "data-visible": n }, v.createElement("div", { className: "sonner-spinner" }, Er.map((t, a) => v.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), Tr = v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, v.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), _r = v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, v.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Nr = v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, v.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), kr = v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, v.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Cr = () => {
  let [n, t] = v.useState(!1);
  return v.useEffect(() => {
    let a = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
  }, []), n;
}, Ft = 1, Rr = class {
  constructor() {
    this.subscribe = (n) => (this.subscribers.push(n), () => {
      let t = this.subscribers.indexOf(n);
      this.subscribers.splice(t, 1);
    }), this.publish = (n) => {
      this.subscribers.forEach((t) => t(n));
    }, this.addToast = (n) => {
      this.publish(n), this.toasts = [...this.toasts, n];
    }, this.create = (n) => {
      var t;
      let { message: a, ...s } = n, l = typeof (n == null ? void 0 : n.id) == "number" || ((t = n.id) == null ? void 0 : t.length) > 0 ? n.id : Ft++, u = this.toasts.find((c) => c.id === l), h = n.dismissible === void 0 ? !0 : n.dismissible;
      return u ? this.toasts = this.toasts.map((c) => c.id === l ? (this.publish({ ...c, ...n, id: l, title: a }), { ...c, ...n, id: l, dismissible: h, title: a }) : c) : this.addToast({ title: a, ...s, dismissible: h, id: l }), l;
    }, this.dismiss = (n) => (n || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: n, dismiss: !0 })), n), this.message = (n, t) => this.create({ ...t, message: n }), this.error = (n, t) => this.create({ ...t, message: n, type: "error" }), this.success = (n, t) => this.create({ ...t, type: "success", message: n }), this.info = (n, t) => this.create({ ...t, type: "info", message: n }), this.warning = (n, t) => this.create({ ...t, type: "warning", message: n }), this.loading = (n, t) => this.create({ ...t, type: "loading", message: n }), this.promise = (n, t) => {
      if (!t)
        return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: n, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let s = n instanceof Promise ? n : n(), l = a !== void 0;
      return s.then((u) => {
        if (u && typeof u.ok == "boolean" && !u.ok) {
          l = !1;
          let h = typeof t.error == "function" ? t.error(`HTTP error! status: ${u.status}`) : t.error, c = typeof t.description == "function" ? t.description(`HTTP error! status: ${u.status}`) : t.description;
          this.create({ id: a, type: "error", message: h, description: c });
        } else if (t.success !== void 0) {
          l = !1;
          let h = typeof t.success == "function" ? t.success(u) : t.success, c = typeof t.description == "function" ? t.description(u) : t.description;
          this.create({ id: a, type: "success", message: h, description: c });
        }
      }).catch((u) => {
        if (t.error !== void 0) {
          l = !1;
          let h = typeof t.error == "function" ? t.error(u) : t.error, c = typeof t.description == "function" ? t.description(u) : t.description;
          this.create({ id: a, type: "error", message: h, description: c });
        }
      }).finally(() => {
        var u;
        l && (this.dismiss(a), a = void 0), (u = t.finally) == null || u.call(t);
      }), a;
    }, this.custom = (n, t) => {
      let a = (t == null ? void 0 : t.id) || Ft++;
      return this.create({ jsx: n(a), id: a, ...t }), a;
    }, this.subscribers = [], this.toasts = [];
  }
}, je = new Rr(), Ir = (n, t) => {
  let a = (t == null ? void 0 : t.id) || Ft++;
  return je.addToast({ title: n, ...t, id: a }), a;
}, Ar = Ir, Tt = Object.assign(Ar, { success: je.success, info: je.info, warning: je.warning, error: je.error, custom: je.custom, message: je.message, promise: je.promise, dismiss: je.dismiss, loading: je.loading });
function Lr(n, { insertAt: t } = {}) {
  if (!n || typeof document > "u")
    return;
  let a = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
  s.type = "text/css", t === "top" && a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s), s.styleSheet ? s.styleSheet.cssText = n : s.appendChild(document.createTextNode(n));
}
Lr(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true] [data-sonner-toast][data-type=success],[data-rich-colors=true] [data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true] [data-sonner-toast][data-type=info],[data-rich-colors=true] [data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true] [data-sonner-toast][data-type=warning],[data-rich-colors=true] [data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true] [data-sonner-toast][data-type=error],[data-rich-colors=true] [data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function _t(n) {
  return n.label !== void 0 && typeof n.onClick == "function";
}
var Or = 3, Pr = "32px", jr = 4e3, Dr = 356, Mr = 14, zr = 20, $r = 200;
function Fr(...n) {
  return n.filter(Boolean).join(" ");
}
var Br = (n) => {
  var t, a, s, l, u, h, c;
  let { invert: p, toast: o, unstyled: y, interacting: _, setHeights: N, visibleToasts: b, heights: P, index: A, toasts: U, expanded: w, removeToast: E, closeButton: L, style: W, cancelButtonStyle: M, actionButtonStyle: X, className: ee = "", descriptionClassName: V = "", duration: re, position: Y, gap: z, loadingIcon: ae, expandByDefault: k, classNames: R, icons: $, closeButtonAriaLabel: J = "Close toast", pauseWhenPageIsHidden: ie, cn: Z } = n, [le, G] = v.useState(!1), [F, x] = v.useState(!1), [O, j] = v.useState(!1), [te, K] = v.useState(!1), [ue, de] = v.useState(0), [Ie, we] = v.useState(0), Ae = v.useRef(null), pe = v.useRef(null), Xe = A === 0, qe = A + 1 <= b, oe = o.type, he = o.dismissible !== !1, $e = o.className || "", Je = o.descriptionClassName || "", Ne = v.useMemo(() => P.findIndex((S) => S.toastId === o.id) || 0, [P, o.id]), ot = v.useMemo(() => {
    var S;
    return (S = o.closeButton) != null ? S : L;
  }, [o.closeButton, L]), Be = v.useMemo(() => o.duration || re || jr, [o.duration, re]), Se = v.useRef(0), ye = v.useRef(0), Le = v.useRef(0), ke = v.useRef(null), [Ue, Me] = Y.split("-"), We = v.useMemo(() => P.reduce((S, se, Q) => Q >= Ne ? S : S + se.height, 0), [P, Ne]), He = Cr(), Fe = o.invert || p, Ce = oe === "loading";
  ye.current = v.useMemo(() => Ne * z + We, [Ne, We]), v.useEffect(() => {
    G(!0);
  }, []), v.useLayoutEffect(() => {
    if (!le)
      return;
    let S = pe.current, se = S.style.height;
    S.style.height = "auto";
    let Q = S.getBoundingClientRect().height;
    S.style.height = se, we(Q), N((Ee) => Ee.find((ge) => ge.toastId === o.id) ? Ee.map((ge) => ge.toastId === o.id ? { ...ge, height: Q } : ge) : [{ toastId: o.id, height: Q, position: o.position }, ...Ee]);
  }, [le, o.title, o.description, N, o.id]);
  let fe = v.useCallback(() => {
    x(!0), de(ye.current), N((S) => S.filter((se) => se.toastId !== o.id)), setTimeout(() => {
      E(o);
    }, $r);
  }, [o, E, N, ye]);
  v.useEffect(() => {
    if (o.promise && oe === "loading" || o.duration === 1 / 0 || o.type === "loading")
      return;
    let S, se = Be;
    return w || _ || ie && He ? (() => {
      if (Le.current < Se.current) {
        let Q = (/* @__PURE__ */ new Date()).getTime() - Se.current;
        se = se - Q;
      }
      Le.current = (/* @__PURE__ */ new Date()).getTime();
    })() : se !== 1 / 0 && (Se.current = (/* @__PURE__ */ new Date()).getTime(), S = setTimeout(() => {
      var Q;
      (Q = o.onAutoClose) == null || Q.call(o, o), fe();
    }, se)), () => clearTimeout(S);
  }, [w, _, k, o, Be, fe, o.promise, oe, ie, He]), v.useEffect(() => {
    let S = pe.current;
    if (S) {
      let se = S.getBoundingClientRect().height;
      return we(se), N((Q) => [{ toastId: o.id, height: se, position: o.position }, ...Q]), () => N((Q) => Q.filter((Ee) => Ee.toastId !== o.id));
    }
  }, [N, o.id]), v.useEffect(() => {
    o.delete && fe();
  }, [fe, o.delete]);
  function ze() {
    return $ != null && $.loading ? v.createElement("div", { className: "sonner-loader", "data-visible": oe === "loading" }, $.loading) : ae ? v.createElement("div", { className: "sonner-loader", "data-visible": oe === "loading" }, ae) : v.createElement(Sr, { visible: oe === "loading" });
  }
  function Ye(S) {
    return { __html: xr.sanitize(S) };
  }
  return v.createElement("li", { "aria-live": o.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: pe, className: Z(ee, $e, R == null ? void 0 : R.toast, (t = o == null ? void 0 : o.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[oe], (a = o == null ? void 0 : o.classNames) == null ? void 0 : a[oe]), "data-sonner-toast": "", "data-styled": !(o.jsx || o.unstyled || y), "data-mounted": le, "data-promise": !!o.promise, "data-removed": F, "data-visible": qe, "data-y-position": Ue, "data-x-position": Me, "data-index": A, "data-front": Xe, "data-swiping": O, "data-dismissible": he, "data-type": oe, "data-invert": Fe, "data-swipe-out": te, "data-expanded": !!(w || k && le), style: { "--index": A, "--toasts-before": A, "--z-index": U.length - A, "--offset": `${F ? ue : ye.current}px`, "--initial-height": k ? "auto" : `${Ie}px`, ...W, ...o.style }, onPointerDown: (S) => {
    Ce || !he || (Ae.current = /* @__PURE__ */ new Date(), de(ye.current), S.target.setPointerCapture(S.pointerId), S.target.tagName !== "BUTTON" && (j(!0), ke.current = { x: S.clientX, y: S.clientY }));
  }, onPointerUp: () => {
    var S, se, Q, Ee;
    if (te || !he)
      return;
    ke.current = null;
    let ge = Number(((S = pe.current) == null ? void 0 : S.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), ne = (/* @__PURE__ */ new Date()).getTime() - ((se = Ae.current) == null ? void 0 : se.getTime()), be = Math.abs(ge) / ne;
    if (Math.abs(ge) >= zr || be > 0.11) {
      de(ye.current), (Q = o.onDismiss) == null || Q.call(o, o), fe(), K(!0);
      return;
    }
    (Ee = pe.current) == null || Ee.style.setProperty("--swipe-amount", "0px"), j(!1);
  }, onPointerMove: (S) => {
    var se;
    if (!ke.current || !he)
      return;
    let Q = S.clientY - ke.current.y, Ee = S.clientX - ke.current.x, ge = (Ue === "top" ? Math.min : Math.max)(0, Q), ne = S.pointerType === "touch" ? 10 : 2;
    Math.abs(ge) > ne ? (se = pe.current) == null || se.style.setProperty("--swipe-amount", `${Q}px`) : Math.abs(Ee) > ne && (ke.current = null);
  } }, ot && !o.jsx ? v.createElement("button", { "aria-label": J, "data-disabled": Ce, "data-close-button": !0, onClick: Ce || !he ? () => {
  } : () => {
    var S;
    fe(), (S = o.onDismiss) == null || S.call(o, o);
  }, className: Z(R == null ? void 0 : R.closeButton, (s = o == null ? void 0 : o.classNames) == null ? void 0 : s.closeButton) }, v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, v.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), v.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, o.jsx || v.isValidElement(o.title) ? o.jsx || o.title : v.createElement(v.Fragment, null, oe || o.icon || o.promise ? v.createElement("div", { "data-icon": "", className: Z(R == null ? void 0 : R.icon) }, o.promise || o.type === "loading" && !o.icon ? o.icon || ze() : null, o.type !== "loading" ? o.icon || ($ == null ? void 0 : $[oe]) || wr(oe) : null) : null, v.createElement("div", { "data-content": "", className: Z(R == null ? void 0 : R.content) }, v.createElement("div", { "data-title": "", className: Z(R == null ? void 0 : R.title, (l = o == null ? void 0 : o.classNames) == null ? void 0 : l.title), dangerouslySetInnerHTML: Ye(o.title) }), o.description ? v.createElement("div", { "data-description": "", className: Z(V, Je, R == null ? void 0 : R.description, (u = o == null ? void 0 : o.classNames) == null ? void 0 : u.description), dangerouslySetInnerHTML: Ye(o.description) }) : null), v.isValidElement(o.cancel) ? o.cancel : o.cancel && _t(o.cancel) ? v.createElement("button", { "data-button": !0, "data-cancel": !0, style: o.cancelButtonStyle || M, onClick: (S) => {
    _t(o.cancel) && he && (fe(), o.cancel.onClick(S));
  }, className: Z(R == null ? void 0 : R.cancelButton, (h = o == null ? void 0 : o.classNames) == null ? void 0 : h.cancelButton) }, o.cancel.label) : null, v.isValidElement(o.action) ? o.action : o.action && _t(o.action) ? v.createElement("button", { "data-button": "", style: o.actionButtonStyle || X, onClick: (S) => {
    _t(o.action) && (o.action.onClick(S), !S.defaultPrevented && fe());
  }, className: Z(R == null ? void 0 : R.actionButton, (c = o == null ? void 0 : o.classNames) == null ? void 0 : c.actionButton) }, o.action.label) : null));
};
function an() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
var Ur = (n) => {
  let { invert: t, position: a = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: l, closeButton: u, className: h, offset: c, theme: p = "light", richColors: o, duration: y, style: _, visibleToasts: N = Or, toastOptions: b, dir: P = an(), gap: A = Mr, loadingIcon: U, icons: w, containerAriaLabel: E = "Notifications", pauseWhenPageIsHidden: L, cn: W = Fr } = n, [M, X] = v.useState([]), ee = v.useMemo(() => Array.from(new Set([a].concat(M.filter((F) => F.position).map((F) => F.position)))), [M, a]), [V, re] = v.useState([]), [Y, z] = v.useState(!1), [ae, k] = v.useState(!1), [R, $] = v.useState(p !== "system" ? p : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), J = v.useRef(null), ie = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), Z = v.useRef(null), le = v.useRef(!1), G = v.useCallback((F) => X((x) => x.filter(({ id: O }) => O !== F.id)), []);
  return v.useEffect(() => je.subscribe((F) => {
    if (F.dismiss) {
      X((x) => x.map((O) => O.id === F.id ? { ...O, delete: !0 } : O));
      return;
    }
    setTimeout(() => {
      Rn.flushSync(() => {
        X((x) => {
          let O = x.findIndex((j) => j.id === F.id);
          return O !== -1 ? [...x.slice(0, O), { ...x[O], ...F }, ...x.slice(O + 1)] : [F, ...x];
        });
      });
    });
  }), []), v.useEffect(() => {
    if (p !== "system") {
      $(p);
      return;
    }
    p === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? $("dark") : $("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: F }) => {
      $(F ? "dark" : "light");
    });
  }, [p]), v.useEffect(() => {
    M.length <= 1 && z(!1);
  }, [M]), v.useEffect(() => {
    let F = (x) => {
      var O, j;
      s.every((te) => x[te] || x.code === te) && (z(!0), (O = J.current) == null || O.focus()), x.code === "Escape" && (document.activeElement === J.current || (j = J.current) != null && j.contains(document.activeElement)) && z(!1);
    };
    return document.addEventListener("keydown", F), () => document.removeEventListener("keydown", F);
  }, [s]), v.useEffect(() => {
    if (J.current)
      return () => {
        Z.current && (Z.current.focus({ preventScroll: !0 }), Z.current = null, le.current = !1);
      };
  }, [J.current]), M.length ? v.createElement("section", { "aria-label": `${E} ${ie}`, tabIndex: -1 }, ee.map((F, x) => {
    var O;
    let [j, te] = F.split("-");
    return v.createElement("ol", { key: F, dir: P === "auto" ? an() : P, tabIndex: -1, ref: J, className: h, "data-sonner-toaster": !0, "data-theme": R, "data-rich-colors": o, "data-y-position": j, "data-x-position": te, style: { "--front-toast-height": `${((O = V[0]) == null ? void 0 : O.height) || 0}px`, "--offset": typeof c == "number" ? `${c}px` : c || Pr, "--width": `${Dr}px`, "--gap": `${A}px`, ..._ }, onBlur: (K) => {
      le.current && !K.currentTarget.contains(K.relatedTarget) && (le.current = !1, Z.current && (Z.current.focus({ preventScroll: !0 }), Z.current = null));
    }, onFocus: (K) => {
      K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || le.current || (le.current = !0, Z.current = K.relatedTarget);
    }, onMouseEnter: () => z(!0), onMouseMove: () => z(!0), onMouseLeave: () => {
      ae || z(!1);
    }, onPointerDown: (K) => {
      K.target instanceof HTMLElement && K.target.dataset.dismissible === "false" || k(!0);
    }, onPointerUp: () => k(!1) }, M.filter((K) => !K.position && x === 0 || K.position === F).map((K, ue) => {
      var de, Ie;
      return v.createElement(Br, { key: K.id, icons: w, index: ue, toast: K, duration: (de = b == null ? void 0 : b.duration) != null ? de : y, className: b == null ? void 0 : b.className, descriptionClassName: b == null ? void 0 : b.descriptionClassName, invert: t, visibleToasts: N, closeButton: (Ie = b == null ? void 0 : b.closeButton) != null ? Ie : u, interacting: ae, position: F, style: b == null ? void 0 : b.style, unstyled: b == null ? void 0 : b.unstyled, classNames: b == null ? void 0 : b.classNames, cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle, actionButtonStyle: b == null ? void 0 : b.actionButtonStyle, removeToast: G, toasts: M.filter((we) => we.position == K.position), heights: V.filter((we) => we.position == K.position), setHeights: re, expandByDefault: l, gap: A, loadingIcon: U, expanded: Y, pauseWhenPageIsHidden: L, cn: W });
    }));
  })) : null;
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/
function ha({ children: n }) {
  function t(u) {
    Tt.success(u);
  }
  function a(u) {
    Tt.info(u);
  }
  function s(u) {
    Tt.error(u);
  }
  function l(u) {
    Tt.warning(u);
  }
  return /* @__PURE__ */ m.jsxs(
    pn.Provider,
    {
      value: { errorToast: s, warningToast: l, successToast: t, infoToast: a },
      children: [
        /* @__PURE__ */ m.jsx(Ur, { richColors: !0 }),
        n
      ]
    }
  );
}
export {
  Xr as Badge,
  sa as Breadcrumb,
  ia as BreadcrumbLink,
  Zr as Button,
  ea as Checkbox,
  qr as Divider,
  Qr as FormController,
  ta as FormError,
  na as FormLabel,
  ra as IconButton,
  aa as Input,
  la as Modal,
  pa as ModalProvider,
  oa as Select,
  Jr as Skeleton,
  ha as ToastProvider,
  ca as Tooltip,
  ua as useAutomation,
  da as useModal,
  fa as useScopedParams,
  ma as useToast
};
