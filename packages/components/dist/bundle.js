import v, { createContext as Ct, useRef as at, useId as En, useContext as gt, useState as De, forwardRef as Sn, useEffect as on } from "react";
import { Loader2 as Qe, Check as sn, ChevronDown as Tn, ChevronRight as Ht, X as _n } from "lucide-react";
import { useActionData as ln, useLocation as cn, Link as Nn } from "@remix-run/react";
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
  var n = v, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, c = { key: !0, ref: !0, __self: !0, __source: !0 };
  function h(u, p, o) {
    var y, T = {}, k = null, b = null;
    o !== void 0 && (k = "" + o), p.key !== void 0 && (k = "" + p.key), p.ref !== void 0 && (b = p.ref);
    for (y in p)
      s.call(p, y) && !c.hasOwnProperty(y) && (T[y] = p[y]);
    if (u && u.defaultProps)
      for (y in p = u.defaultProps, p)
        T[y] === void 0 && (T[y] = p[y]);
    return { $$typeof: t, type: u, key: k, ref: b, props: T, _owner: l.current };
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
    var n = v, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), l = Symbol.for("react.strict_mode"), c = Symbol.for("react.profiler"), h = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), o = Symbol.for("react.suspense"), y = Symbol.for("react.suspense_list"), T = Symbol.for("react.memo"), k = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), O = Symbol.iterator, P = "@@iterator";
    function W(r) {
      if (r === null || typeof r != "object")
        return null;
      var d = O && r[O] || r[P];
      return typeof d == "function" ? d : null;
    }
    var _ = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(r) {
      {
        for (var d = arguments.length, g = new Array(d > 1 ? d - 1 : 0), S = 1; S < d; S++)
          g[S - 1] = arguments[S];
        C("error", r, g);
      }
    }
    function C(r, d, g) {
      {
        var S = _.ReactDebugCurrentFrame, Y = S.getStackAddendum();
        Y !== "" && (d += "%s", g = g.concat([Y]));
        var e = g.map(function(f) {
          return String(f);
        });
        e.unshift("Warning: " + d), Function.prototype.apply.call(console[r], console, e);
      }
    }
    var H = !1, z = !1, J = !1, X = !1, Q = !1, re;
    re = Symbol.for("react.module.reference");
    function V(r) {
      return !!(typeof r == "string" || typeof r == "function" || r === s || r === c || Q || r === l || r === o || r === y || X || r === b || H || z || J || typeof r == "object" && r !== null && (r.$$typeof === k || r.$$typeof === T || r.$$typeof === h || r.$$typeof === u || r.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      r.$$typeof === re || r.getModuleId !== void 0));
    }
    function F(r, d, g) {
      var S = r.displayName;
      if (S)
        return S;
      var Y = d.displayName || d.name || "";
      return Y !== "" ? g + "(" + Y + ")" : g;
    }
    function te(r) {
      return r.displayName || "Context";
    }
    function N(r) {
      if (r == null)
        return null;
      if (typeof r.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof r == "function")
        return r.displayName || r.name || null;
      if (typeof r == "string")
        return r;
      switch (r) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case c:
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
          case u:
            var d = r;
            return te(d) + ".Consumer";
          case h:
            var g = r;
            return te(g._context) + ".Provider";
          case p:
            return F(r, r.render, "ForwardRef");
          case T:
            var S = r.displayName || null;
            return S !== null ? S : N(r.type) || "Memo";
          case k: {
            var Y = r, e = Y._payload, f = Y._init;
            try {
              return N(f(e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var R = Object.assign, B = 0, K, ue, ee, se, G, D, x;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function I() {
      {
        if (B === 0) {
          K = console.log, ue = console.info, ee = console.warn, se = console.error, G = console.group, D = console.groupCollapsed, x = console.groupEnd;
          var r = {
            configurable: !0,
            enumerable: !0,
            value: U,
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
        B++;
      }
    }
    function ce() {
      {
        if (B--, B === 0) {
          var r = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: R({}, r, {
              value: K
            }),
            info: R({}, r, {
              value: ue
            }),
            warn: R({}, r, {
              value: ee
            }),
            error: R({}, r, {
              value: se
            }),
            group: R({}, r, {
              value: G
            }),
            groupCollapsed: R({}, r, {
              value: D
            }),
            groupEnd: R({}, r, {
              value: x
            })
          });
        }
        B < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var M = _.ReactCurrentDispatcher, pe;
    function ve(r, d, g) {
      {
        if (pe === void 0)
          try {
            throw Error();
          } catch (Y) {
            var S = Y.stack.trim().match(/\n( *(at )?)/);
            pe = S && S[1] || "";
          }
        return `
` + pe + r;
      }
    }
    var Ie = !1, we;
    {
      var Ae = typeof WeakMap == "function" ? WeakMap : Map;
      we = new Ae();
    }
    function fe(r, d) {
      if (!r || Ie)
        return "";
      {
        var g = we.get(r);
        if (g !== void 0)
          return g;
      }
      var S;
      Ie = !0;
      var Y = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var e;
      e = M.current, M.current = null, I();
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
              S = q;
            }
            Reflect.construct(r, [], f);
          } else {
            try {
              f.call();
            } catch (q) {
              S = q;
            }
            r.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (q) {
            S = q;
          }
          r();
        }
      } catch (q) {
        if (q && S && typeof q.stack == "string") {
          for (var i = q.stack.split(`
`), A = S.stack.split(`
`), j = i.length - 1, L = A.length - 1; j >= 1 && L >= 0 && i[j] !== A[L]; )
            L--;
          for (; j >= 1 && L >= 0; j--, L--)
            if (i[j] !== A[L]) {
              if (j !== 1 || L !== 1)
                do
                  if (j--, L--, L < 0 || i[j] !== A[L]) {
                    var ie = `
` + i[j].replace(" at new ", " at ");
                    return r.displayName && ie.includes("<anonymous>") && (ie = ie.replace("<anonymous>", r.displayName)), typeof r == "function" && we.set(r, ie), ie;
                  }
                while (j >= 1 && L >= 0);
              break;
            }
        }
      } finally {
        Ie = !1, M.current = e, ce(), Error.prepareStackTrace = Y;
      }
      var ge = r ? r.displayName || r.name : "", de = ge ? ve(ge) : "";
      return typeof r == "function" && we.set(r, de), de;
    }
    function Xe(r, d, g) {
      return fe(r, !1);
    }
    function qe(r) {
      var d = r.prototype;
      return !!(d && d.isReactComponent);
    }
    function ae(r, d, g) {
      if (r == null)
        return "";
      if (typeof r == "function")
        return fe(r, qe(r));
      if (typeof r == "string")
        return ve(r);
      switch (r) {
        case o:
          return ve("Suspense");
        case y:
          return ve("SuspenseList");
      }
      if (typeof r == "object")
        switch (r.$$typeof) {
          case p:
            return Xe(r.render);
          case T:
            return ae(r.type, d, g);
          case k: {
            var S = r, Y = S._payload, e = S._init;
            try {
              return ae(e(Y), d, g);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, $e = {}, Je = _.ReactDebugCurrentFrame;
    function Ne(r) {
      if (r) {
        var d = r._owner, g = ae(r.type, r._source, d ? d.type : null);
        Je.setExtraStackFrame(g);
      } else
        Je.setExtraStackFrame(null);
    }
    function ot(r, d, g, S, Y) {
      {
        var e = Function.call.bind(me);
        for (var f in r)
          if (e(r, f)) {
            var i = void 0;
            try {
              if (typeof r[f] != "function") {
                var A = Error((S || "React class") + ": " + g + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof r[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw A.name = "Invariant Violation", A;
              }
              i = r[f](d, f, S, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (j) {
              i = j;
            }
            i && !(i instanceof Error) && (Ne(Y), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", S || "React class", g, f, typeof i), Ne(null)), i instanceof Error && !(i.message in $e) && ($e[i.message] = !0, Ne(Y), w("Failed %s type: %s", g, i.message), Ne(null));
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
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ye(r)), ke(r);
    }
    var Me = _.ReactCurrentOwner, We = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, He, Fe, Ce;
    Ce = {};
    function le(r) {
      if (me.call(r, "ref")) {
        var d = Object.getOwnPropertyDescriptor(r, "ref").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.ref !== void 0;
    }
    function ze(r) {
      if (me.call(r, "key")) {
        var d = Object.getOwnPropertyDescriptor(r, "key").get;
        if (d && d.isReactWarning)
          return !1;
      }
      return r.key !== void 0;
    }
    function Ye(r, d) {
      if (typeof r.ref == "string" && Me.current && d && Me.current.stateNode !== d) {
        var g = N(Me.current.type);
        Ce[g] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(Me.current.type), r.ref), Ce[g] = !0);
      }
    }
    function E(r, d) {
      {
        var g = function() {
          He || (He = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(r, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function oe(r, d) {
      {
        var g = function() {
          Fe || (Fe = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", d));
        };
        g.isReactWarning = !0, Object.defineProperty(r, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var Z = function(r, d, g, S, Y, e, f) {
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
        value: S
      }), Object.defineProperty(i, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Y
      }), Object.freeze && (Object.freeze(i.props), Object.freeze(i)), i;
    };
    function Ee(r, d, g, S, Y) {
      {
        var e, f = {}, i = null, A = null;
        g !== void 0 && (Ue(g), i = "" + g), ze(d) && (Ue(d.key), i = "" + d.key), le(d) && (A = d.ref, Ye(d, Y));
        for (e in d)
          me.call(d, e) && !We.hasOwnProperty(e) && (f[e] = d[e]);
        if (r && r.defaultProps) {
          var j = r.defaultProps;
          for (e in j)
            f[e] === void 0 && (f[e] = j[e]);
        }
        if (i || A) {
          var L = typeof r == "function" ? r.displayName || r.name || "Unknown" : r;
          i && E(f, L), A && oe(f, L);
        }
        return Z(r, i, A, Y, S, Me.current, f);
      }
    }
    var he = _.ReactCurrentOwner, ne = _.ReactDebugCurrentFrame;
    function be(r) {
      if (r) {
        var d = r._owner, g = ae(r.type, r._source, d ? d.type : null);
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
        if (he.current) {
          var r = N(he.current.type);
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
        var S = "";
        r && r._owner && r._owner !== he.current && (S = " It was passed a child from " + N(r._owner.type) + "."), be(r), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, S), be(null);
      }
    }
    function ct(r, d) {
      {
        if (typeof r != "object")
          return;
        if (Se(r))
          for (var g = 0; g < r.length; g++) {
            var S = r[g];
            et(S) && lt(S, d);
          }
        else if (et(r))
          r._store && (r._store.validated = !0);
        else if (r) {
          var Y = W(r);
          if (typeof Y == "function" && Y !== r.entries)
            for (var e = Y.call(r), f; !(f = e.next()).done; )
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
        d.$$typeof === T))
          g = d.propTypes;
        else
          return;
        if (g) {
          var S = N(d);
          ot(g, r.props, "prop", S, r);
        } else if (d.PropTypes !== void 0 && !st) {
          st = !0;
          var Y = N(d);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Y || "Unknown");
        }
        typeof d.getDefaultProps == "function" && !d.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ve(r) {
      {
        for (var d = Object.keys(r.props), g = 0; g < d.length; g++) {
          var S = d[g];
          if (S !== "children" && S !== "key") {
            be(r), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", S), be(null);
            break;
          }
        }
        r.ref !== null && (be(r), w("Invalid attribute `ref` supplied to `React.Fragment`."), be(null));
      }
    }
    var nt = {};
    function ut(r, d, g, S, Y, e) {
      {
        var f = V(r);
        if (!f) {
          var i = "";
          (r === void 0 || typeof r == "object" && r !== null && Object.keys(r).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var A = vt(Y);
          A ? i += A : i += tt();
          var j;
          r === null ? j = "null" : Se(r) ? j = "array" : r !== void 0 && r.$$typeof === t ? (j = "<" + (N(r.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : j = typeof r, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", j, i);
        }
        var L = Ee(r, d, g, Y, e);
        if (L == null)
          return L;
        if (f) {
          var ie = d.children;
          if (ie !== void 0)
            if (S)
              if (Se(ie)) {
                for (var ge = 0; ge < ie.length; ge++)
                  ct(ie[ge], r);
                Object.freeze && Object.freeze(ie);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ct(ie, r);
        }
        if (me.call(d, "key")) {
          var de = N(r), q = Object.keys(d).filter(function(wn) {
            return wn !== "key";
          }), rt = q.length > 0 ? "{key: someKey, " + q.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nt[de + rt]) {
            var xt = q.length > 0 ? "{" + q.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, rt, de, xt, de), nt[de + rt] = !0;
          }
        }
        return r === s ? Ve(L) : It(L), L;
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
    rightIcon: c,
    className: h = "",
    children: u,
    ...p
  } = n, y = { md: 12, lg: 14 }[s];
  return {
    className: `arkyn_badge ${t} ${a} ${s} ${h}`.trim(),
    children: u,
    leftIcon: kt(y, l),
    rightIcon: kt(y, c),
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
    size: c = "md",
    leftIcon: h,
    rightIcon: u,
    disabled: p,
    className: o = "",
    children: y,
    ...T
  } = n, b = { xs: 12, sm: 16, md: 20, lg: 24 }[c];
  return {
    className: `arkyn_button loading_text_${!!l} ${s} ${a} ${c} loading_${t} ${o}`.trim(),
    loadingText: l,
    children: y,
    iconSize: b,
    disabled: p || t,
    leftIcon: kt(b, h),
    rightIcon: kt(b, u),
    ...T
  };
}
function Zr(n) {
  const { leftIcon: t, rightIcon: a, iconSize: s, children: l, loadingText: c, ...h } = On(n);
  return /* @__PURE__ */ m.jsxs("button", { ...h, children: [
    /* @__PURE__ */ m.jsxs("div", { className: "spinner", children: [
      /* @__PURE__ */ m.jsx(Qe, { size: s, strokeWidth: 2.5 }),
      c && c
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "content", children: [
      t,
      l,
      a
    ] })
  ] });
}
const un = Ct({});
function Qr({ children: n, ...t }) {
  var u, p;
  const a = ln(), s = at(null), l = ((u = s.current) == null ? void 0 : u.name) || "", c = ((p = a == null ? void 0 : a.fieldErrors) == null ? void 0 : p[l]) || null, h = En();
  return /* @__PURE__ */ m.jsx(un.Provider, { value: { error: c, id: h, inputRef: s }, children: /* @__PURE__ */ m.jsx("section", { className: "arkyn_form_controller", ...t, children: n }) });
}
function Ke() {
  return gt(un);
}
function ea(n) {
  const {
    name: t,
    className: a = "",
    size: s = "md",
    isError: l,
    defaultChecked: c = !1,
    checked: h = null,
    onCheck: u,
    value: p,
    ...o
  } = n, { id: y, inputRef: T, error: k } = Ke(), b = l || !!k, [O, P] = De(c || !1), W = typeof h == "boolean" ? h : O, _ = `arkyn_checkbox ${s} ${b ? "error" : ""} ${W ? "checked" : ""} ${a}`;
  function w() {
    const C = O;
    P(!C), u && u(C ? "" : p || "checked");
  }
  return /* @__PURE__ */ m.jsxs("div", { id: y, className: _, onClick: w, ...o, children: [
    /* @__PURE__ */ m.jsx(
      "input",
      {
        type: "hidden",
        name: t,
        ref: T,
        value: W ? p || "checked" : ""
      }
    ),
    /* @__PURE__ */ m.jsx(sn, {})
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
    icon: c,
    disabled: h,
    className: u = "",
    ...p
  } = n, o = `arkyn_icon_button ${s} ${a} ${l} loading_${t} ${u}`;
  return /* @__PURE__ */ m.jsxs(
    "button",
    {
      disabled: h || t,
      className: o.trim(),
      ...p,
      children: [
        /* @__PURE__ */ m.jsx("div", { className: "spinner", children: /* @__PURE__ */ m.jsx(Qe, { size: Kt[l], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ m.jsx("div", { className: "content " + l, children: /* @__PURE__ */ m.jsx(c, { size: Kt[l], strokeWidth: 2.5 }) })
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
function dn(n, t) {
  let a = "", s = 0;
  return Array.from(n).forEach((l, c) => {
    t[c + s].match(/[0-9]/) || (a += t[c + s], s++), a += l;
  }), a;
}
function fn(n) {
  return n.length > 11 ? "CNPJ" : "CPF";
}
const Ut = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, mn = Bt(Ut.CNPJ).length;
function jn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: u,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: T,
    defaultValue: k,
    readOnly: b,
    onFocus: O,
    onBlur: P,
    title: W,
    style: _,
    onChange: w,
    ...C
  } = n;
  function H(R) {
    let B = Bt(R);
    const K = fn(B);
    if (!(B.length > mn))
      return B = dn(B, Ut[K]), B;
  }
  const z = y ? "right" : "left", F = `arkyn_input ${u ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${T || b || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${c}`, N = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: F,
    prefix: Ge(u, N, "prefix"),
    sufix: Ge(p, N, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    defaultValue: H(k || ""),
    disabled: T,
    readOnly: b,
    onFocus: O,
    onBlur: P,
    title: W,
    style: _,
    onChange: w,
    loadingPosition: z,
    iconSize: N,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: N, strokeWidth: 2.5 }),
    ...C
  };
}
function Dn(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: c, error: h } = Ke(), u = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: T,
    className: k,
    prefix: b,
    sufix: O,
    iconSize: P,
    loadingPosition: W,
    isLoading: _,
    LeftIcon: w,
    readOnly: C,
    onFocus: H,
    onBlur: z,
    RightIcon: J,
    Spinner: X,
    onChange: Q,
    value: re,
    defaultValue: V,
    ...F
  } = jn({ ...n, id: c, isError: p }, t), [te, N] = De(V), R = w && !_, B = J && !_, K = W === "left" && _, ue = W === "right" && _;
  function ee() {
    o || !(u != null && u.current) || (a(!0), u.current.focus());
  }
  function se(x) {
    let U = Bt(x.target.value);
    const I = fn(U);
    U.length > mn || (U = dn(U, Ut[I]), x.target.value = U, N(U), Q && Q(x));
  }
  function G(x) {
    a(!0), H && H(x);
  }
  function D(x) {
    a(!1), z && z(x);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: T,
      onClick: ee,
      className: k,
      children: [
        b,
        K && X,
        R && /* @__PURE__ */ m.jsx(w, { size: P, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            disabled: o || _,
            readOnly: C,
            ref: u,
            value: re || te,
            onFocus: G,
            onChange: se,
            onBlur: D,
            ...F
          }
        ),
        B && /* @__PURE__ */ m.jsx(J, { size: P, strokeWidth: 2.5 }),
        ue && X,
        O
      ]
    }
  );
}
function Mn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: u,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: T,
    readOnly: k,
    onFocus: b,
    onBlur: O,
    title: P,
    style: W,
    showCents: _ = !1,
    max: w = 1e9,
    onChange: C,
    ...H
  } = n, z = y ? "right" : "left", F = `arkyn_input ${u ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${T || k || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${c}`, N = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: F,
    prefix: Ge(u, N, "prefix"),
    sufix: Ge(p, N, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    disabled: T,
    readOnly: k,
    onFocus: b,
    onBlur: O,
    title: P,
    style: W,
    max: w,
    onChange: C,
    showCents: _,
    loadingPosition: z,
    iconSize: N,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: N, strokeWidth: 2.5 }),
    ...H
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
  const { currencyValue: t, event: a, max: s, setCurrencyValue: l } = n, { key: c, keyCode: h } = a;
  if (t === 0 && !zn.test(c) || t !== 0 && !$n.test(c) && h !== Xt)
    return;
  const u = t.toString();
  let p;
  if (h !== Xt) {
    const o = t === 0 ? c : `${u}${c}`;
    p = Number.parseInt(o, 10);
  } else {
    const o = u.slice(0, -1);
    p = o === "" ? 0 : Number.parseInt(o, 10);
  }
  p > Number(s) || l(p);
}
function Un(n) {
  const [t, a] = De(!1), [s, l] = De(n.defaultValue || 0), c = at(null), { inputRef: h, id: u, error: p } = Ke(), o = h || c, y = n.isError || !!p, {
    disabled: T,
    title: k,
    style: b,
    className: O,
    prefix: P,
    sufix: W,
    iconSize: _,
    loadingPosition: w,
    isLoading: C,
    LeftIcon: H,
    readOnly: z,
    onFocus: J,
    onBlur: X,
    RightIcon: Q,
    Spinner: re,
    value: V,
    max: F,
    onKeyDown: te,
    onChange: N,
    showCents: R,
    ...B
  } = Mn({ ...n, id: u, isError: y }, t), K = H && !C, ue = Q && !C, ee = w === "left" && C, se = w === "right" && C;
  function G() {
    T || !(o != null && o.current) || (a(!0), o.current.focus());
  }
  function D(I) {
    Bn({ currencyValue: s, event: I, max: F, setCurrencyValue: l }), N && N(s), te && te(I);
  }
  function x(I) {
    a(!0), J && J(I);
  }
  function U(I) {
    a(!1), X && X(I);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: k,
      style: b,
      onClick: G,
      className: O,
      children: [
        P,
        ee && re,
        K && /* @__PURE__ */ m.jsx(H, { size: _, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            value: Fn(V || s, R),
            onKeyDown: D,
            disabled: T || C,
            readOnly: z,
            ref: o,
            onFocus: x,
            onBlur: U,
            onChange: () => {
            },
            ...B
          }
        ),
        se && re,
        ue && /* @__PURE__ */ m.jsx(Q, { size: _, strokeWidth: 2.5 }),
        W
      ]
    }
  );
}
function Wn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: u,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: T,
    readOnly: k,
    onFocus: b,
    onBlur: O,
    title: P,
    style: W,
    onChange: _,
    showMask: w = !1,
    type: C,
    ...H
  } = n, z = y ? "right" : "left", F = `arkyn_input ${u ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${T || k || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${c}`, N = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: F,
    prefix: Ge(u, N, "prefix"),
    sufix: Ge(p, N, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    disabled: T,
    readOnly: k,
    onFocus: b,
    onBlur: O,
    title: P,
    style: W,
    onChange: _,
    loadingPosition: z,
    iconSize: N,
    showMask: w,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: N, strokeWidth: 2.5 }),
    ...H
  };
}
const Hn = Sn((n, t) => /* @__PURE__ */ m.jsx("input", { ref: t, ...n }));
function Yn(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: c, error: h } = Ke(), u = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: T,
    className: k,
    prefix: b,
    sufix: O,
    iconSize: P,
    loadingPosition: W,
    isLoading: _,
    LeftIcon: w,
    readOnly: C,
    onFocus: H,
    onBlur: z,
    RightIcon: J,
    Spinner: X,
    ...Q
  } = Wn({ ...n, id: c, isError: p }, t), re = w && !_, V = J && !_, F = W === "left" && _, te = W === "right" && _;
  function N() {
    o || !(u != null && u.current) || (a(!0), u.current.focus());
  }
  function R(K) {
    a(!0), H && H(K);
  }
  function B(K) {
    a(!1), z && z(K);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: T,
      onClick: N,
      className: k,
      children: [
        b,
        F && X,
        re && /* @__PURE__ */ m.jsx(w, { size: P, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          kn,
          {
            component: Hn,
            ref: u,
            onFocus: R,
            onBlur: B,
            ...Q
          }
        ),
        V && /* @__PURE__ */ m.jsx(J, { size: P, strokeWidth: 2.5 }),
        te && X,
        O
      ]
    }
  );
}
function Vn(n, t) {
  const {
    isLoading: a,
    isError: s,
    size: l = "md",
    className: c = "",
    variant: h = "solid",
    prefix: u,
    sufix: p,
    leftIcon: o,
    rightIcon: y,
    disabled: T,
    readOnly: k,
    onFocus: b,
    onBlur: O,
    title: P,
    style: W,
    onChange: _,
    ...w
  } = n, C = y ? "right" : "left", re = `arkyn_input ${u ? "hasPrefix" : ""} ${p ? "hasSufix" : ""} ${h} ${l} ${T || k || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${c}`, F = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: re,
    prefix: Ge(u, F, "prefix"),
    sufix: Ge(p, F, "sufix"),
    LeftIcon: o,
    RightIcon: y,
    disabled: T,
    readOnly: k,
    onFocus: b,
    onBlur: O,
    title: P,
    style: W,
    onChange: _,
    loadingPosition: C,
    iconSize: F,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: F, strokeWidth: 2.5 }),
    ...w
  };
}
function Gn(n) {
  const [t, a] = De(!1), s = at(null), { inputRef: l, id: c, error: h } = Ke(), u = l || s, p = n.isError || !!h, {
    disabled: o,
    title: y,
    style: T,
    className: k,
    prefix: b,
    sufix: O,
    iconSize: P,
    loadingPosition: W,
    isLoading: _,
    LeftIcon: w,
    readOnly: C,
    onFocus: H,
    onBlur: z,
    RightIcon: J,
    Spinner: X,
    ...Q
  } = Vn({ ...n, id: c, isError: p }, t), re = w && !_, V = J && !_, F = W === "left" && _, te = W === "right" && _;
  function N() {
    o || !(u != null && u.current) || (a(!0), u.current.focus());
  }
  function R(K) {
    a(!0), H && H(K);
  }
  function B(K) {
    a(!1), z && z(K);
  }
  return /* @__PURE__ */ m.jsxs(
    "section",
    {
      title: y,
      style: T,
      onClick: N,
      className: k,
      children: [
        b,
        F && X,
        re && /* @__PURE__ */ m.jsx(w, { size: P, strokeWidth: 2.5 }),
        /* @__PURE__ */ m.jsx(
          "input",
          {
            disabled: o || _,
            readOnly: C,
            ref: u,
            onFocus: R,
            onBlur: B,
            ...Q
          }
        ),
        V && /* @__PURE__ */ m.jsx(J, { size: P, strokeWidth: 2.5 }),
        te && X,
        O
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
    className: c = "",
    variant: h = "solid",
    prefix: u,
    leftIcon: p,
    disabled: o,
    readOnly: y,
    onFocus: T,
    onBlur: k,
    title: b,
    style: O,
    isSearchable: P = !1,
    ...W
  } = n, z = `arkyn_select ${u ? "hasPrefix" : ""} ${h} ${l} ${o || y || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${c}`, X = { md: 20, lg: 20 }[l];
  return {
    isLoading: a,
    className: z,
    prefix: Kn(u, X, "prefix"),
    LeftIcon: p,
    disabled: o,
    readOnly: y,
    onFocus: T,
    onBlur: k,
    title: b,
    style: O,
    isSearchable: P,
    iconSize: X,
    Spinner: /* @__PURE__ */ m.jsx(Qe, { className: "spinner", size: X, strokeWidth: 2.5 }),
    ...W
  };
}
function oa(n) {
  var ce;
  const [t, a] = De(!1), { inputRef: s, id: l, error: c } = Ke(), h = at(null), u = s || h, p = n.isError || !!c, {
    disabled: o,
    title: y,
    style: T,
    className: k,
    prefix: b,
    iconSize: O,
    isLoading: P,
    LeftIcon: W,
    value: _ = null,
    defaultValue: w = "",
    readOnly: C,
    onFocus: H,
    onBlur: z,
    Spinner: J,
    name: X,
    isSearchable: Q,
    placeholder: re,
    onSelect: V,
    options: F,
    optionMaxHeight: te,
    ...N
  } = Xn({ ...n, id: l, isError: p }, t), [R, B] = De(w), [K, ue] = De("");
  function ee() {
    o || !(u != null && u.current) || (a(!0), u.current.focus());
  }
  function se(M) {
    a(!0), H && H(M);
  }
  function G() {
    a(!1), z && u.current && u.current.blur();
  }
  const D = typeof _ == "string" ? _ : R, x = ((ce = F.find((M) => M.value === D)) == null ? void 0 : ce.label) || "", U = () => {
    if (Q) {
      if (!t && x)
        return !0;
      if (!t && !x || t)
        return !1;
    }
    if (!Q) {
      if (!t && x)
        return !0;
      if (!t && !x)
        return !1;
      if (t && x)
        return !0;
      if (t && !x)
        return !1;
    }
  }, I = F.filter((M) => Q ? M.label.toLowerCase().includes(K.toLowerCase()) : !0);
  return /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
    /* @__PURE__ */ m.jsxs(
      "section",
      {
        title: y,
        style: T,
        onClick: ee,
        className: `${k} placeholder_dark_${U()}`,
        children: [
          b,
          W && /* @__PURE__ */ m.jsx(W, { size: O, strokeWidth: 2.5 }),
          /* @__PURE__ */ m.jsx(
            "input",
            {
              disabled: o || P,
              readOnly: !Q,
              value: K || "",
              placeholder: x || re,
              ref: u,
              onFocus: se,
              onBlur: () => ue(""),
              ...N,
              onChange: (M) => ue(M.target.value)
            }
          ),
          /* @__PURE__ */ m.jsx("input", { type: "hidden", name: X, value: D || "", readOnly: !0 }),
          t && /* @__PURE__ */ m.jsxs(
            "ul",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: te },
              children: [
                I.map(({ label: M, value: pe }) => /* @__PURE__ */ m.jsxs(
                  "li",
                  {
                    className: D === pe ? "active" : "",
                    onClick: () => {
                      B(R !== pe ? pe : ""), V && V({ label: M, value: pe });
                    },
                    children: [
                      M,
                      " ",
                      /* @__PURE__ */ m.jsx(sn, {})
                    ]
                  },
                  pe
                )),
                I.length <= 0 && /* @__PURE__ */ m.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !P && /* @__PURE__ */ m.jsx(
            Tn,
            {
              className: "arkyn_select_arrow",
              size: O,
              strokeWidth: 2.5
            }
          ),
          P && J
        ]
      }
    ),
    t && /* @__PURE__ */ m.jsx("aside", { className: "arkyn_select_overlay", onClick: G })
  ] });
}
function qn(n) {
  const { className: t = "", ...a } = n;
  return { className: `arkyn_breadcrumb ${t}`.trim(), ...a };
}
function Jn(n) {
  const { pathname: t } = cn(), {
    className: a = "",
    disabled: s = !1,
    to: l,
    ...c
  } = n, h = t === l ? "active" : "inactive", u = `arkyn_breadcrumb_link ${h} ${a}`;
  return {
    to: l,
    className: u.trim(),
    disabled: s || h === "active",
    ...c
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
const pn = Ct({});
function Zn(n) {
  const {
    isVisibled: t,
    makeInvisible: a,
    children: s,
    className: l = "",
    ...c
  } = n, u = `arkyn_modal_container ${t ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ m.jsx(pn.Provider, { value: { makeInvisible: a }, children: /* @__PURE__ */ m.jsx(Cn, { children: t && /* @__PURE__ */ m.jsxs("aside", { className: u.trim(), ...c, children: [
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
  const { showCloseButton: t, className: a, children: s, ...l } = n, { makeInvisible: c } = gt(pn), u = `arkyn_modal_header ${t ? "show-close" : ""} ${a}`;
  return /* @__PURE__ */ m.jsxs("header", { className: u.trim(), ...l, children: [
    s,
    /* @__PURE__ */ m.jsx("button", { type: "button", onClick: c, children: /* @__PURE__ */ m.jsx(_n, { size: 24 }) })
  ] });
}
const la = { Container: Zn, Header: er, Footer: Qn };
function ca(n) {
  const {
    text: t,
    size: a = "lg",
    children: s,
    orientation: l = "top",
    className: c,
    ...h
  } = n;
  return /* @__PURE__ */ m.jsxs(
    "div",
    {
      className: `arkyn_tooltip ${a} ${l} ${c}`,
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
  const n = ln(), { closeModal: t } = gt(Wt);
  on(() => {
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
      closeModal: c
    } = t, h = s(n), u = a(n);
    return { modalIsOpen: h, modalData: u, openModal: (y) => l(n, y == null ? void 0 : y.data), closeModal: () => c(n) };
  } else
    return t;
}
function fa(n = "") {
  const t = cn(), a = new URLSearchParams(t.search), s = n ? `${n}:` : "", l = (c) => {
    Object.entries(c).forEach(([h, u]) => {
      u === void 0 ? a.delete(`${s}${h}`) : a.set(`${s}${h}`, String(u));
    });
  };
  return {
    getParam: (c) => a.get(`${s}${c}`),
    getScopedSearch: (c) => {
      l(c);
      let h = a.toString();
      return h && (h = "?" + h), h;
    }
  };
}
const hn = Ct({});
function ma() {
  const n = gt(hn);
  if (Object.entries(n).length === 0)
    throw new Error("useToast must be used within a Provider");
  return n;
}
function pa(n) {
  const { children: t = !1 } = n, [a, s] = De([]);
  on(() => {
    console.log(a);
  }, a);
  function l(p) {
    return !!a.some((o) => o.key === p);
  }
  function c(p) {
    var o;
    return (o = a.find((y) => y.key === p)) == null ? void 0 : o.data;
  }
  function h(p, o) {
    const y = l(p);
    s(y ? (T) => [...T.filter((b) => b.key !== p), { key: p, data: o }] : [...a, { key: p, data: o }]);
  }
  function u(p) {
    s(a.filter((o) => o.key !== p));
  }
  return /* @__PURE__ */ m.jsx(
    Wt.Provider,
    {
      value: { modalIsOpen: l, modalData: c, openModal: h, closeModal: u },
      children: t
    }
  );
}
var { entries: gn, setPrototypeOf: qt, isFrozen: tr, getPrototypeOf: nr, getOwnPropertyDescriptor: rr } = Object, { freeze: xe, seal: Re, create: vn } = Object, { apply: zt, construct: $t } = typeof Reflect < "u" && Reflect;
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
function $(n, t) {
  let a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Nt;
  qt && qt(n, null);
  let s = t.length;
  for (; s--; ) {
    let l = t[s];
    if (typeof l == "string") {
      let c = a(l);
      c !== l && (tr(t) || (t[s] = c), l = c);
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
  let t = vn(null);
  for (let [a, s] of gn(n))
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
var Qt = xe(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]), Ot = xe(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]), Pt = xe(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feDropShadow", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]), lr = xe(["animate", "color-profile", "cursor", "discard", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]), jt = xe(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover", "mprescripts"]), cr = xe(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]), en = xe(["#text"]), tn = xe(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]), Dt = xe(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]), nn = xe(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]), St = xe(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]), ur = Re(/\{\{[\w\W]*|[\w\W]*\}\}/gm), dr = Re(/<%[\w\W]*|[\w\W]*%>/gm), fr = Re(/\${[\w\W]*}/gm), mr = Re(/^data-[\-\w.\u00B7-\uFFFF]/), pr = Re(/^aria-[\-\w]+$/), yn = Re(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i), hr = Re(/^(?:\w+script|data):/i), gr = Re(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g), bn = Re(/^html$/i), vr = Re(/^[a-z][a-z\d]*(-[a-z\d]+)+$/i), rn = Object.freeze({ __proto__: null, MUSTACHE_EXPR: ur, ERB_EXPR: dr, TMPLIT_EXPR: fr, DATA_ATTR: mr, ARIA_ATTR: pr, IS_ALLOWED_URI: yn, IS_SCRIPT_OR_DATA: hr, ATTR_WHITESPACE: gr, DOCTYPE_NAME: bn, CUSTOM_ELEMENT: vr }), yr = function() {
  return typeof window > "u" ? null : window;
}, br = function(n, t) {
  if (typeof n != "object" || typeof n.createPolicy != "function")
    return null;
  let a = null, s = "data-tt-policy-suffix";
  t && t.hasAttribute(s) && (a = t.getAttribute(s));
  let l = "dompurify" + (a ? "#" + a : "");
  try {
    return n.createPolicy(l, { createHTML(c) {
      return c;
    }, createScriptURL(c) {
      return c;
    } });
  } catch {
    return console.warn("TrustedTypes policy " + l + " could not be created."), null;
  }
};
function xn() {
  let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : yr(), t = (e) => xn(e);
  if (t.version = "3.0.10", t.removed = [], !n || !n.document || n.document.nodeType !== 9)
    return t.isSupported = !1, t;
  let { document: a } = n, s = a, l = s.currentScript, { DocumentFragment: c, HTMLTemplateElement: h, Node: u, Element: p, NodeFilter: o, NamedNodeMap: y = n.NamedNodeMap || n.MozNamedAttrMap, HTMLFormElement: T, DOMParser: k, trustedTypes: b } = n, O = p.prototype, P = Et(O, "cloneNode"), W = Et(O, "nextSibling"), _ = Et(O, "childNodes"), w = Et(O, "parentNode");
  if (typeof h == "function") {
    let e = a.createElement("template");
    e.content && e.content.ownerDocument && (a = e.content.ownerDocument);
  }
  let C, H = "", { implementation: z, createNodeIterator: J, createDocumentFragment: X, getElementsByTagName: Q } = a, { importNode: re } = s, V = {};
  t.isSupported = typeof gn == "function" && typeof w == "function" && z && z.createHTMLDocument !== void 0;
  let { MUSTACHE_EXPR: F, ERB_EXPR: te, TMPLIT_EXPR: N, DATA_ATTR: R, ARIA_ATTR: B, IS_SCRIPT_OR_DATA: K, ATTR_WHITESPACE: ue, CUSTOM_ELEMENT: ee } = rn, { IS_ALLOWED_URI: se } = rn, G = null, D = $({}, [...Qt, ...Ot, ...Pt, ...jt, ...en]), x = null, U = $({}, [...tn, ...Dt, ...nn, ...St]), I = Object.seal(vn(null, { tagNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, attributeNameCheck: { writable: !0, configurable: !1, enumerable: !0, value: null }, allowCustomizedBuiltInElements: { writable: !0, configurable: !1, enumerable: !0, value: !1 } })), ce = null, M = null, pe = !0, ve = !0, Ie = !1, we = !0, Ae = !1, fe = !1, Xe = !1, qe = !1, ae = !1, me = !1, $e = !1, Je = !0, Ne = !1, ot = "user-content-", Be = !0, Se = !1, ye = {}, Le = null, ke = $({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]), Ue = null, Me = $({}, ["audio", "video", "img", "source", "image", "track"]), We = null, He = $({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]), Fe = "http://www.w3.org/1998/Math/MathML", Ce = "http://www.w3.org/2000/svg", le = "http://www.w3.org/1999/xhtml", ze = le, Ye = !1, E = null, oe = $({}, [Fe, Ce, le], Lt), Z = null, Ee = ["application/xhtml+xml", "text/html"], he = "text/html", ne = null, be = null, st = a.createElement("form"), et = function(e) {
    return e instanceof RegExp || e instanceof Function;
  }, tt = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    if (!(be && be === e)) {
      if ((!e || typeof e != "object") && (e = {}), e = Ze(e), Z = Ee.indexOf(e.PARSER_MEDIA_TYPE) === -1 ? he : e.PARSER_MEDIA_TYPE, ne = Z === "application/xhtml+xml" ? Lt : Nt, G = Pe(e, "ALLOWED_TAGS") ? $({}, e.ALLOWED_TAGS, ne) : D, x = Pe(e, "ALLOWED_ATTR") ? $({}, e.ALLOWED_ATTR, ne) : U, E = Pe(e, "ALLOWED_NAMESPACES") ? $({}, e.ALLOWED_NAMESPACES, Lt) : oe, We = Pe(e, "ADD_URI_SAFE_ATTR") ? $(Ze(He), e.ADD_URI_SAFE_ATTR, ne) : He, Ue = Pe(e, "ADD_DATA_URI_TAGS") ? $(Ze(Me), e.ADD_DATA_URI_TAGS, ne) : Me, Le = Pe(e, "FORBID_CONTENTS") ? $({}, e.FORBID_CONTENTS, ne) : ke, ce = Pe(e, "FORBID_TAGS") ? $({}, e.FORBID_TAGS, ne) : {}, M = Pe(e, "FORBID_ATTR") ? $({}, e.FORBID_ATTR, ne) : {}, ye = Pe(e, "USE_PROFILES") ? e.USE_PROFILES : !1, pe = e.ALLOW_ARIA_ATTR !== !1, ve = e.ALLOW_DATA_ATTR !== !1, Ie = e.ALLOW_UNKNOWN_PROTOCOLS || !1, we = e.ALLOW_SELF_CLOSE_IN_ATTR !== !1, Ae = e.SAFE_FOR_TEMPLATES || !1, fe = e.WHOLE_DOCUMENT || !1, ae = e.RETURN_DOM || !1, me = e.RETURN_DOM_FRAGMENT || !1, $e = e.RETURN_TRUSTED_TYPE || !1, qe = e.FORCE_BODY || !1, Je = e.SANITIZE_DOM !== !1, Ne = e.SANITIZE_NAMED_PROPS || !1, Be = e.KEEP_CONTENT !== !1, Se = e.IN_PLACE || !1, se = e.ALLOWED_URI_REGEXP || yn, ze = e.NAMESPACE || le, I = e.CUSTOM_ELEMENT_HANDLING || {}, e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (I.tagNameCheck = e.CUSTOM_ELEMENT_HANDLING.tagNameCheck), e.CUSTOM_ELEMENT_HANDLING && et(e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (I.attributeNameCheck = e.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), e.CUSTOM_ELEMENT_HANDLING && typeof e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements == "boolean" && (I.allowCustomizedBuiltInElements = e.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Ae && (ve = !1), me && (ae = !0), ye && (G = $({}, en), x = [], ye.html === !0 && ($(G, Qt), $(x, tn)), ye.svg === !0 && ($(G, Ot), $(x, Dt), $(x, St)), ye.svgFilters === !0 && ($(G, Pt), $(x, Dt), $(x, St)), ye.mathMl === !0 && ($(G, jt), $(x, nn), $(x, St))), e.ADD_TAGS && (G === D && (G = Ze(G)), $(G, e.ADD_TAGS, ne)), e.ADD_ATTR && (x === U && (x = Ze(x)), $(x, e.ADD_ATTR, ne)), e.ADD_URI_SAFE_ATTR && $(We, e.ADD_URI_SAFE_ATTR, ne), e.FORBID_CONTENTS && (Le === ke && (Le = Ze(Le)), $(Le, e.FORBID_CONTENTS, ne)), Be && (G["#text"] = !0), fe && $(G, ["html", "head", "body"]), G.table && ($(G, ["tbody"]), delete ce.tbody), e.TRUSTED_TYPES_POLICY) {
        if (typeof e.TRUSTED_TYPES_POLICY.createHTML != "function")
          throw ht('TRUSTED_TYPES_POLICY configuration option must provide a "createHTML" hook.');
        if (typeof e.TRUSTED_TYPES_POLICY.createScriptURL != "function")
          throw ht('TRUSTED_TYPES_POLICY configuration option must provide a "createScriptURL" hook.');
        C = e.TRUSTED_TYPES_POLICY, H = C.createHTML("");
      } else
        C === void 0 && (C = br(b, l)), C !== null && typeof H == "string" && (H = C.createHTML(""));
      xe && xe(e), be = e;
    }
  }, vt = $({}, ["mi", "mo", "mn", "ms", "mtext"]), it = $({}, ["foreignobject", "desc", "title", "annotation-xml"]), Rt = $({}, ["title", "style", "font", "a", "script"]), lt = $({}, [...Ot, ...Pt, ...lr]), ct = $({}, [...jt, ...cr]), It = function(e) {
    let f = w(e);
    (!f || !f.tagName) && (f = { namespaceURI: ze, tagName: "template" });
    let i = Nt(e.tagName), A = Nt(f.tagName);
    return E[e.namespaceURI] ? e.namespaceURI === Ce ? f.namespaceURI === le ? i === "svg" : f.namespaceURI === Fe ? i === "svg" && (A === "annotation-xml" || vt[A]) : !!lt[i] : e.namespaceURI === Fe ? f.namespaceURI === le ? i === "math" : f.namespaceURI === Ce ? i === "math" && it[A] : !!ct[i] : e.namespaceURI === le ? f.namespaceURI === Ce && !it[A] || f.namespaceURI === Fe && !vt[A] ? !1 : !ct[i] && (Rt[i] || !lt[i]) : !!(Z === "application/xhtml+xml" && E[e.namespaceURI]) : !1;
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
      if (ae || me)
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
      let L = Zt(e, /^[\r\n\t ]+/);
      i = L && L[0];
    }
    Z === "application/xhtml+xml" && ze === le && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
    let A = C ? C.createHTML(e) : e;
    if (ze === le)
      try {
        f = new k().parseFromString(A, Z);
      } catch {
      }
    if (!f || !f.documentElement) {
      f = z.createDocument(ze, "template", null);
      try {
        f.documentElement.innerHTML = Ye ? H : A;
      } catch {
      }
    }
    let j = f.body || f.documentElement;
    return e && i && j.insertBefore(a.createTextNode(i), j.childNodes[0] || null), ze === le ? Q.call(f, fe ? "html" : "body")[0] : fe ? f.documentElement : j;
  }, yt = function(e) {
    return J.call(e.ownerDocument || e, e, o.SHOW_ELEMENT | o.SHOW_COMMENT | o.SHOW_TEXT | o.SHOW_PROCESSING_INSTRUCTION, null);
  }, At = function(e) {
    return e instanceof T && (typeof e.nodeName != "string" || typeof e.textContent != "string" || typeof e.removeChild != "function" || !(e.attributes instanceof y) || typeof e.removeAttribute != "function" || typeof e.setAttribute != "function" || typeof e.namespaceURI != "string" || typeof e.insertBefore != "function" || typeof e.hasChildNodes != "function");
  }, bt = function(e) {
    return typeof u == "function" && e instanceof u;
  }, Oe = function(e, f, i) {
    V[e] && wt(V[e], (A) => {
      A.call(t, f, i, be);
    });
  }, r = function(e) {
    let f = null;
    if (Oe("beforeSanitizeElements", e, null), At(e))
      return Ve(e), !0;
    let i = ne(e.nodeName);
    if (Oe("uponSanitizeElement", e, { tagName: i, allowedTags: G }), e.hasChildNodes() && !bt(e.firstElementChild) && Te(/<[/\w]/g, e.innerHTML) && Te(/<[/\w]/g, e.textContent))
      return Ve(e), !0;
    if (!G[i] || ce[i]) {
      if (!ce[i] && g(i) && (I.tagNameCheck instanceof RegExp && Te(I.tagNameCheck, i) || I.tagNameCheck instanceof Function && I.tagNameCheck(i)))
        return !1;
      if (Be && !Le[i]) {
        let A = w(e) || e.parentNode, j = _(e) || e.childNodes;
        if (j && A) {
          let L = j.length;
          for (let ie = L - 1; ie >= 0; --ie)
            A.insertBefore(P(j[ie], !0), W(e));
        }
      }
      return Ve(e), !0;
    }
    return e instanceof p && !It(e) || (i === "noscript" || i === "noembed" || i === "noframes") && Te(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Ve(e), !0) : (Ae && e.nodeType === 3 && (f = e.textContent, wt([F, te, N], (A) => {
      f = pt(f, A, " ");
    }), e.textContent !== f && (mt(t.removed, { element: e.cloneNode() }), e.textContent = f)), Oe("afterSanitizeElements", e, null), !1);
  }, d = function(e, f, i) {
    if (Je && (f === "id" || f === "name") && (i in a || i in st))
      return !1;
    if (!(ve && !M[f] && Te(R, f)) && !(pe && Te(B, f))) {
      if (!x[f] || M[f]) {
        if (!(g(e) && (I.tagNameCheck instanceof RegExp && Te(I.tagNameCheck, e) || I.tagNameCheck instanceof Function && I.tagNameCheck(e)) && (I.attributeNameCheck instanceof RegExp && Te(I.attributeNameCheck, f) || I.attributeNameCheck instanceof Function && I.attributeNameCheck(f)) || f === "is" && I.allowCustomizedBuiltInElements && (I.tagNameCheck instanceof RegExp && Te(I.tagNameCheck, i) || I.tagNameCheck instanceof Function && I.tagNameCheck(i))))
          return !1;
      } else if (!We[f] && !Te(se, pt(i, ue, "")) && !((f === "src" || f === "xlink:href" || f === "href") && e !== "script" && ar(i, "data:") === 0 && Ue[e]) && !(Ie && !Te(K, pt(i, ue, ""))) && i)
        return !1;
    }
    return !0;
  }, g = function(e) {
    return e !== "annotation-xml" && Zt(e, ee);
  }, S = function(e) {
    Oe("beforeSanitizeAttributes", e, null);
    let { attributes: f } = e;
    if (!f)
      return;
    let i = { attrName: "", attrValue: "", keepAttr: !0, allowedAttributes: x }, A = f.length;
    for (; A--; ) {
      let j = f[A], { name: L, namespaceURI: ie, value: ge } = j, de = ne(L), q = L === "value" ? ge : or(ge);
      if (i.attrName = de, i.attrValue = q, i.keepAttr = !0, i.forceKeepAttr = void 0, Oe("uponSanitizeAttribute", e, i), q = i.attrValue, i.forceKeepAttr || (nt(L, e), !i.keepAttr))
        continue;
      if (!we && Te(/\/>/i, q)) {
        nt(L, e);
        continue;
      }
      Ae && wt([F, te, N], (xt) => {
        q = pt(q, xt, " ");
      });
      let rt = ne(e.nodeName);
      if (d(rt, de, q)) {
        if (Ne && (de === "id" || de === "name") && (nt(L, e), q = ot + q), C && typeof b == "object" && typeof b.getAttributeType == "function" && !ie)
          switch (b.getAttributeType(rt, de)) {
            case "TrustedHTML": {
              q = C.createHTML(q);
              break;
            }
            case "TrustedScriptURL": {
              q = C.createScriptURL(q);
              break;
            }
          }
        try {
          ie ? e.setAttributeNS(ie, L, q) : e.setAttribute(L, q), Jt(t.removed);
        } catch {
        }
      }
    }
    Oe("afterSanitizeAttributes", e, null);
  }, Y = function e(f) {
    let i = null, A = yt(f);
    for (Oe("beforeSanitizeShadowDOM", f, null); i = A.nextNode(); )
      Oe("uponSanitizeShadowNode", i, null), !r(i) && (i.content instanceof c && e(i.content), S(i));
    Oe("afterSanitizeShadowDOM", f, null);
  };
  return t.sanitize = function(e) {
    let f = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, i = null, A = null, j = null, L = null;
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
        let de = ne(e.nodeName);
        if (!G[de] || ce[de])
          throw ht("root node is forbidden and cannot be sanitized in-place");
      }
    } else if (e instanceof u)
      i = ut("<!---->"), A = i.ownerDocument.importNode(e, !0), A.nodeType === 1 && A.nodeName === "BODY" || A.nodeName === "HTML" ? i = A : i.appendChild(A);
    else {
      if (!ae && !Ae && !fe && e.indexOf("<") === -1)
        return C && $e ? C.createHTML(e) : e;
      if (i = ut(e), !i)
        return ae ? null : $e ? H : "";
    }
    i && qe && Ve(i.firstChild);
    let ie = yt(Se ? e : i);
    for (; j = ie.nextNode(); )
      r(j) || (j.content instanceof c && Y(j.content), S(j));
    if (Se)
      return e;
    if (ae) {
      if (me)
        for (L = X.call(i.ownerDocument); i.firstChild; )
          L.appendChild(i.firstChild);
      else
        L = i;
      return (x.shadowroot || x.shadowrootmode) && (L = re.call(s, L, !0)), L;
    }
    let ge = fe ? i.outerHTML : i.innerHTML;
    return fe && G["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && Te(bn, i.ownerDocument.doctype.name) && (ge = "<!DOCTYPE " + i.ownerDocument.doctype.name + `>
` + ge), Ae && wt([F, te, N], (de) => {
      ge = pt(ge, de, " ");
    }), C && $e ? C.createHTML(ge) : ge;
  }, t.setConfig = function() {
    let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    tt(e), Xe = !0;
  }, t.clearConfig = function() {
    be = null, Xe = !1;
  }, t.isValidAttribute = function(e, f, i) {
    be || tt({});
    let A = ne(e), j = ne(f);
    return d(A, j, i);
  }, t.addHook = function(e, f) {
    typeof f == "function" && (V[e] = V[e] || [], mt(V[e], f));
  }, t.removeHook = function(e) {
    if (V[e])
      return Jt(V[e]);
  }, t.removeHooks = function(e) {
    V[e] && (V[e] = []);
  }, t.removeAllHooks = function() {
    V = {};
  }, t;
}
var xr = xn(), wr = (n) => {
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
      let { message: a, ...s } = n, l = typeof (n == null ? void 0 : n.id) == "number" || ((t = n.id) == null ? void 0 : t.length) > 0 ? n.id : Ft++, c = this.toasts.find((u) => u.id === l), h = n.dismissible === void 0 ? !0 : n.dismissible;
      return c ? this.toasts = this.toasts.map((u) => u.id === l ? (this.publish({ ...u, ...n, id: l, title: a }), { ...u, ...n, id: l, dismissible: h, title: a }) : u) : this.addToast({ title: a, ...s, dismissible: h, id: l }), l;
    }, this.dismiss = (n) => (n || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: n, dismiss: !0 })), n), this.message = (n, t) => this.create({ ...t, message: n }), this.error = (n, t) => this.create({ ...t, message: n, type: "error" }), this.success = (n, t) => this.create({ ...t, type: "success", message: n }), this.info = (n, t) => this.create({ ...t, type: "info", message: n }), this.warning = (n, t) => this.create({ ...t, type: "warning", message: n }), this.loading = (n, t) => this.create({ ...t, type: "loading", message: n }), this.promise = (n, t) => {
      if (!t)
        return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: n, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let s = n instanceof Promise ? n : n(), l = a !== void 0;
      return s.then((c) => {
        if (c && typeof c.ok == "boolean" && !c.ok) {
          l = !1;
          let h = typeof t.error == "function" ? t.error(`HTTP error! status: ${c.status}`) : t.error, u = typeof t.description == "function" ? t.description(`HTTP error! status: ${c.status}`) : t.description;
          this.create({ id: a, type: "error", message: h, description: u });
        } else if (t.success !== void 0) {
          l = !1;
          let h = typeof t.success == "function" ? t.success(c) : t.success, u = typeof t.description == "function" ? t.description(c) : t.description;
          this.create({ id: a, type: "success", message: h, description: u });
        }
      }).catch((c) => {
        if (t.error !== void 0) {
          l = !1;
          let h = typeof t.error == "function" ? t.error(c) : t.error, u = typeof t.description == "function" ? t.description(c) : t.description;
          this.create({ id: a, type: "error", message: h, description: u });
        }
      }).finally(() => {
        var c;
        l && (this.dismiss(a), a = void 0), (c = t.finally) == null || c.call(t);
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
  var t, a, s, l, c, h, u;
  let { invert: p, toast: o, unstyled: y, interacting: T, setHeights: k, visibleToasts: b, heights: O, index: P, toasts: W, expanded: _, removeToast: w, closeButton: C, style: H, cancelButtonStyle: z, actionButtonStyle: J, className: X = "", descriptionClassName: Q = "", duration: re, position: V, gap: F, loadingIcon: te, expandByDefault: N, classNames: R, icons: B, closeButtonAriaLabel: K = "Close toast", pauseWhenPageIsHidden: ue, cn: ee } = n, [se, G] = v.useState(!1), [D, x] = v.useState(!1), [U, I] = v.useState(!1), [ce, M] = v.useState(!1), [pe, ve] = v.useState(0), [Ie, we] = v.useState(0), Ae = v.useRef(null), fe = v.useRef(null), Xe = P === 0, qe = P + 1 <= b, ae = o.type, me = o.dismissible !== !1, $e = o.className || "", Je = o.descriptionClassName || "", Ne = v.useMemo(() => O.findIndex((E) => E.toastId === o.id) || 0, [O, o.id]), ot = v.useMemo(() => {
    var E;
    return (E = o.closeButton) != null ? E : C;
  }, [o.closeButton, C]), Be = v.useMemo(() => o.duration || re || jr, [o.duration, re]), Se = v.useRef(0), ye = v.useRef(0), Le = v.useRef(0), ke = v.useRef(null), [Ue, Me] = V.split("-"), We = v.useMemo(() => O.reduce((E, oe, Z) => Z >= Ne ? E : E + oe.height, 0), [O, Ne]), He = Cr(), Fe = o.invert || p, Ce = ae === "loading";
  ye.current = v.useMemo(() => Ne * F + We, [Ne, We]), v.useEffect(() => {
    G(!0);
  }, []), v.useLayoutEffect(() => {
    if (!se)
      return;
    let E = fe.current, oe = E.style.height;
    E.style.height = "auto";
    let Z = E.getBoundingClientRect().height;
    E.style.height = oe, we(Z), k((Ee) => Ee.find((he) => he.toastId === o.id) ? Ee.map((he) => he.toastId === o.id ? { ...he, height: Z } : he) : [{ toastId: o.id, height: Z, position: o.position }, ...Ee]);
  }, [se, o.title, o.description, k, o.id]);
  let le = v.useCallback(() => {
    x(!0), ve(ye.current), k((E) => E.filter((oe) => oe.toastId !== o.id)), setTimeout(() => {
      w(o);
    }, $r);
  }, [o, w, k, ye]);
  v.useEffect(() => {
    if (o.promise && ae === "loading" || o.duration === 1 / 0 || o.type === "loading")
      return;
    let E, oe = Be;
    return _ || T || ue && He ? (() => {
      if (Le.current < Se.current) {
        let Z = (/* @__PURE__ */ new Date()).getTime() - Se.current;
        oe = oe - Z;
      }
      Le.current = (/* @__PURE__ */ new Date()).getTime();
    })() : oe !== 1 / 0 && (Se.current = (/* @__PURE__ */ new Date()).getTime(), E = setTimeout(() => {
      var Z;
      (Z = o.onAutoClose) == null || Z.call(o, o), le();
    }, oe)), () => clearTimeout(E);
  }, [_, T, N, o, Be, le, o.promise, ae, ue, He]), v.useEffect(() => {
    let E = fe.current;
    if (E) {
      let oe = E.getBoundingClientRect().height;
      return we(oe), k((Z) => [{ toastId: o.id, height: oe, position: o.position }, ...Z]), () => k((Z) => Z.filter((Ee) => Ee.toastId !== o.id));
    }
  }, [k, o.id]), v.useEffect(() => {
    o.delete && le();
  }, [le, o.delete]);
  function ze() {
    return B != null && B.loading ? v.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, B.loading) : te ? v.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, te) : v.createElement(Sr, { visible: ae === "loading" });
  }
  function Ye(E) {
    return { __html: xr.sanitize(E) };
  }
  return v.createElement("li", { "aria-live": o.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: fe, className: ee(X, $e, R == null ? void 0 : R.toast, (t = o == null ? void 0 : o.classNames) == null ? void 0 : t.toast, R == null ? void 0 : R.default, R == null ? void 0 : R[ae], (a = o == null ? void 0 : o.classNames) == null ? void 0 : a[ae]), "data-sonner-toast": "", "data-styled": !(o.jsx || o.unstyled || y), "data-mounted": se, "data-promise": !!o.promise, "data-removed": D, "data-visible": qe, "data-y-position": Ue, "data-x-position": Me, "data-index": P, "data-front": Xe, "data-swiping": U, "data-dismissible": me, "data-type": ae, "data-invert": Fe, "data-swipe-out": ce, "data-expanded": !!(_ || N && se), style: { "--index": P, "--toasts-before": P, "--z-index": W.length - P, "--offset": `${D ? pe : ye.current}px`, "--initial-height": N ? "auto" : `${Ie}px`, ...H, ...o.style }, onPointerDown: (E) => {
    Ce || !me || (Ae.current = /* @__PURE__ */ new Date(), ve(ye.current), E.target.setPointerCapture(E.pointerId), E.target.tagName !== "BUTTON" && (I(!0), ke.current = { x: E.clientX, y: E.clientY }));
  }, onPointerUp: () => {
    var E, oe, Z, Ee;
    if (ce || !me)
      return;
    ke.current = null;
    let he = Number(((E = fe.current) == null ? void 0 : E.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), ne = (/* @__PURE__ */ new Date()).getTime() - ((oe = Ae.current) == null ? void 0 : oe.getTime()), be = Math.abs(he) / ne;
    if (Math.abs(he) >= zr || be > 0.11) {
      ve(ye.current), (Z = o.onDismiss) == null || Z.call(o, o), le(), M(!0);
      return;
    }
    (Ee = fe.current) == null || Ee.style.setProperty("--swipe-amount", "0px"), I(!1);
  }, onPointerMove: (E) => {
    var oe;
    if (!ke.current || !me)
      return;
    let Z = E.clientY - ke.current.y, Ee = E.clientX - ke.current.x, he = (Ue === "top" ? Math.min : Math.max)(0, Z), ne = E.pointerType === "touch" ? 10 : 2;
    Math.abs(he) > ne ? (oe = fe.current) == null || oe.style.setProperty("--swipe-amount", `${Z}px`) : Math.abs(Ee) > ne && (ke.current = null);
  } }, ot && !o.jsx ? v.createElement("button", { "aria-label": K, "data-disabled": Ce, "data-close-button": !0, onClick: Ce || !me ? () => {
  } : () => {
    var E;
    le(), (E = o.onDismiss) == null || E.call(o, o);
  }, className: ee(R == null ? void 0 : R.closeButton, (s = o == null ? void 0 : o.classNames) == null ? void 0 : s.closeButton) }, v.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, v.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), v.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, o.jsx || v.isValidElement(o.title) ? o.jsx || o.title : v.createElement(v.Fragment, null, ae || o.icon || o.promise ? v.createElement("div", { "data-icon": "", className: ee(R == null ? void 0 : R.icon) }, o.promise || o.type === "loading" && !o.icon ? o.icon || ze() : null, o.type !== "loading" ? o.icon || (B == null ? void 0 : B[ae]) || wr(ae) : null) : null, v.createElement("div", { "data-content": "", className: ee(R == null ? void 0 : R.content) }, v.createElement("div", { "data-title": "", className: ee(R == null ? void 0 : R.title, (l = o == null ? void 0 : o.classNames) == null ? void 0 : l.title), dangerouslySetInnerHTML: Ye(o.title) }), o.description ? v.createElement("div", { "data-description": "", className: ee(Q, Je, R == null ? void 0 : R.description, (c = o == null ? void 0 : o.classNames) == null ? void 0 : c.description), dangerouslySetInnerHTML: Ye(o.description) }) : null), v.isValidElement(o.cancel) ? o.cancel : o.cancel && _t(o.cancel) ? v.createElement("button", { "data-button": !0, "data-cancel": !0, style: o.cancelButtonStyle || z, onClick: (E) => {
    _t(o.cancel) && me && (le(), o.cancel.onClick(E));
  }, className: ee(R == null ? void 0 : R.cancelButton, (h = o == null ? void 0 : o.classNames) == null ? void 0 : h.cancelButton) }, o.cancel.label) : null, v.isValidElement(o.action) ? o.action : o.action && _t(o.action) ? v.createElement("button", { "data-button": "", style: o.actionButtonStyle || J, onClick: (E) => {
    _t(o.action) && (o.action.onClick(E), !E.defaultPrevented && le());
  }, className: ee(R == null ? void 0 : R.actionButton, (u = o == null ? void 0 : o.classNames) == null ? void 0 : u.actionButton) }, o.action.label) : null));
};
function an() {
  if (typeof window > "u" || typeof document > "u")
    return "ltr";
  let n = document.documentElement.getAttribute("dir");
  return n === "auto" || !n ? window.getComputedStyle(document.documentElement).direction : n;
}
var Ur = (n) => {
  let { invert: t, position: a = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: l, closeButton: c, className: h, offset: u, theme: p = "light", richColors: o, duration: y, style: T, visibleToasts: k = Or, toastOptions: b, dir: O = an(), gap: P = Mr, loadingIcon: W, icons: _, containerAriaLabel: w = "Notifications", pauseWhenPageIsHidden: C, cn: H = Fr } = n, [z, J] = v.useState([]), X = v.useMemo(() => Array.from(new Set([a].concat(z.filter((D) => D.position).map((D) => D.position)))), [z, a]), [Q, re] = v.useState([]), [V, F] = v.useState(!1), [te, N] = v.useState(!1), [R, B] = v.useState(p !== "system" ? p : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), K = v.useRef(null), ue = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), ee = v.useRef(null), se = v.useRef(!1), G = v.useCallback((D) => J((x) => x.filter(({ id: U }) => U !== D.id)), []);
  return v.useEffect(() => je.subscribe((D) => {
    if (D.dismiss) {
      J((x) => x.map((U) => U.id === D.id ? { ...U, delete: !0 } : U));
      return;
    }
    setTimeout(() => {
      Rn.flushSync(() => {
        J((x) => {
          let U = x.findIndex((I) => I.id === D.id);
          return U !== -1 ? [...x.slice(0, U), { ...x[U], ...D }, ...x.slice(U + 1)] : [D, ...x];
        });
      });
    });
  }), []), v.useEffect(() => {
    if (p !== "system") {
      B(p);
      return;
    }
    p === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? B("dark") : B("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: D }) => {
      B(D ? "dark" : "light");
    });
  }, [p]), v.useEffect(() => {
    z.length <= 1 && F(!1);
  }, [z]), v.useEffect(() => {
    let D = (x) => {
      var U, I;
      s.every((ce) => x[ce] || x.code === ce) && (F(!0), (U = K.current) == null || U.focus()), x.code === "Escape" && (document.activeElement === K.current || (I = K.current) != null && I.contains(document.activeElement)) && F(!1);
    };
    return document.addEventListener("keydown", D), () => document.removeEventListener("keydown", D);
  }, [s]), v.useEffect(() => {
    if (K.current)
      return () => {
        ee.current && (ee.current.focus({ preventScroll: !0 }), ee.current = null, se.current = !1);
      };
  }, [K.current]), z.length ? v.createElement("section", { "aria-label": `${w} ${ue}`, tabIndex: -1 }, X.map((D, x) => {
    var U;
    let [I, ce] = D.split("-");
    return v.createElement("ol", { key: D, dir: O === "auto" ? an() : O, tabIndex: -1, ref: K, className: h, "data-sonner-toaster": !0, "data-theme": R, "data-rich-colors": o, "data-y-position": I, "data-x-position": ce, style: { "--front-toast-height": `${((U = Q[0]) == null ? void 0 : U.height) || 0}px`, "--offset": typeof u == "number" ? `${u}px` : u || Pr, "--width": `${Dr}px`, "--gap": `${P}px`, ...T }, onBlur: (M) => {
      se.current && !M.currentTarget.contains(M.relatedTarget) && (se.current = !1, ee.current && (ee.current.focus({ preventScroll: !0 }), ee.current = null));
    }, onFocus: (M) => {
      M.target instanceof HTMLElement && M.target.dataset.dismissible === "false" || se.current || (se.current = !0, ee.current = M.relatedTarget);
    }, onMouseEnter: () => F(!0), onMouseMove: () => F(!0), onMouseLeave: () => {
      te || F(!1);
    }, onPointerDown: (M) => {
      M.target instanceof HTMLElement && M.target.dataset.dismissible === "false" || N(!0);
    }, onPointerUp: () => N(!1) }, z.filter((M) => !M.position && x === 0 || M.position === D).map((M, pe) => {
      var ve, Ie;
      return v.createElement(Br, { key: M.id, icons: _, index: pe, toast: M, duration: (ve = b == null ? void 0 : b.duration) != null ? ve : y, className: b == null ? void 0 : b.className, descriptionClassName: b == null ? void 0 : b.descriptionClassName, invert: t, visibleToasts: k, closeButton: (Ie = b == null ? void 0 : b.closeButton) != null ? Ie : c, interacting: te, position: D, style: b == null ? void 0 : b.style, unstyled: b == null ? void 0 : b.unstyled, classNames: b == null ? void 0 : b.classNames, cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle, actionButtonStyle: b == null ? void 0 : b.actionButtonStyle, removeToast: G, toasts: z.filter((we) => we.position == M.position), heights: Q.filter((we) => we.position == M.position), setHeights: re, expandByDefault: l, gap: P, loadingIcon: W, expanded: V, pauseWhenPageIsHidden: C, cn: H });
    }));
  })) : null;
};
/*! Bundled license information:

dompurify/dist/purify.es.mjs:
  (*! @license DOMPurify 3.0.10 | (c) Cure53 and other contributors | Released under the Apache license 2.0 and Mozilla Public License 2.0 | github.com/cure53/DOMPurify/blob/3.0.10/LICENSE *)
*/
function ha({ children: n }) {
  function t(c) {
    Tt.success(c);
  }
  function a(c) {
    Tt.info(c);
  }
  function s(c) {
    Tt.error(c);
  }
  function l(c) {
    Tt.warning(c);
  }
  return /* @__PURE__ */ m.jsxs(
    hn.Provider,
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
