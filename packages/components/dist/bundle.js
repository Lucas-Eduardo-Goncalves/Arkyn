import p, { createContext as ke, useContext as ye, useRef as Ee, useId as tn, useState as oe, useEffect as Ze, forwardRef as nn } from "react";
import { Info as ot, AlertTriangle as rn, XCircle as Et, CheckCircle2 as St, Loader2 as $e, Check as Rt, ChevronDown as an, ChevronRight as it, ChevronLeft as sn, Ellipsis as xt, X as $t, AlertCircle as on } from "lucide-react";
import { useActionData as Pt, useLocation as Tt, Link as ln, useNavigate as cn } from "@remix-run/react";
import { InputMask as un } from "@react-input/mask";
import { AnimatePresence as It, motion as Ve } from "framer-motion";
import dn from "react-dom";
var lt = { exports: {} }, Le = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wt;
function fn() {
  if (wt) return Le;
  wt = 1;
  var e = p, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, u, h) {
    var m, y = {}, o = null, b = null;
    h !== void 0 && (o = "" + h), u.key !== void 0 && (o = "" + u.key), u.ref !== void 0 && (b = u.ref);
    for (m in u) s.call(u, m) && !l.hasOwnProperty(m) && (y[m] = u[m]);
    if (c && c.defaultProps) for (m in u = c.defaultProps, u) y[m] === void 0 && (y[m] = u[m]);
    return { $$typeof: t, type: c, key: o, ref: b, props: y, _owner: i.current };
  }
  return Le.Fragment = r, Le.jsx = d, Le.jsxs = d, Le;
}
var Ae = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kt;
function mn() {
  return kt || (kt = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), C = Symbol.iterator, w = "@@iterator";
    function k(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = C && n[C] || n[w];
      return typeof f == "function" ? f : null;
    }
    var v = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function x(n) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), N = 1; N < f; N++)
          g[N - 1] = arguments[N];
        I("error", n, g);
      }
    }
    function I(n, f, g) {
      {
        var N = v.ReactDebugCurrentFrame, D = N.getStackAddendum();
        D !== "" && (f += "%s", g = g.concat([D]));
        var Y = g.map(function(O) {
          return String(O);
        });
        Y.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, Y);
      }
    }
    var z = !1, R = !1, V = !1, B = !1, U = !1, W;
    W = Symbol.for("react.module.reference");
    function G(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === l || U || n === i || n === h || n === m || B || n === b || z || R || V || typeof n == "object" && n !== null && (n.$$typeof === o || n.$$typeof === y || n.$$typeof === d || n.$$typeof === c || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === W || n.getModuleId !== void 0));
    }
    function F(n, f, g) {
      var N = n.displayName;
      if (N)
        return N;
      var D = f.displayName || f.name || "";
      return D !== "" ? g + "(" + D + ")" : g;
    }
    function te(n) {
      return n.displayName || "Context";
    }
    function j(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && x("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case s:
          return "Fragment";
        case r:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case h:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case c:
            var f = n;
            return te(f) + ".Consumer";
          case d:
            var g = n;
            return te(g._context) + ".Provider";
          case u:
            return F(n, n.render, "ForwardRef");
          case y:
            var N = n.displayName || null;
            return N !== null ? N : j(n.type) || "Memo";
          case o: {
            var D = n, Y = D._payload, O = D._init;
            try {
              return j(O(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, M = 0, K, Q, $, q, ie, T, S;
    function _() {
    }
    _.__reactDisabledLog = !0;
    function Z() {
      {
        if (M === 0) {
          K = console.log, Q = console.info, $ = console.warn, q = console.error, ie = console.group, T = console.groupCollapsed, S = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: _,
            writable: !0
          };
          Object.defineProperties(console, {
            info: n,
            log: n,
            warn: n,
            error: n,
            group: n,
            groupCollapsed: n,
            groupEnd: n
          });
        }
        M++;
      }
    }
    function le() {
      {
        if (M--, M === 0) {
          var n = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, n, {
              value: K
            }),
            info: H({}, n, {
              value: Q
            }),
            warn: H({}, n, {
              value: $
            }),
            error: H({}, n, {
              value: q
            }),
            group: H({}, n, {
              value: ie
            }),
            groupCollapsed: H({}, n, {
              value: T
            }),
            groupEnd: H({}, n, {
              value: S
            })
          });
        }
        M < 0 && x("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = v.ReactCurrentDispatcher, xe;
    function me(n, f, g) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (D) {
            var N = D.stack.trim().match(/\n( *(at )?)/);
            xe = N && N[1] || "";
          }
        return `
` + xe + n;
      }
    }
    var J = !1, re;
    {
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      re = new Ne();
    }
    function Pe(n, f) {
      if (!n || J)
        return "";
      {
        var g = re.get(n);
        if (g !== void 0)
          return g;
      }
      var N;
      J = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = X.current, X.current = null, Z();
      try {
        if (f) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (de) {
              N = de;
            }
            Reflect.construct(n, [], O);
          } else {
            try {
              O.call();
            } catch (de) {
              N = de;
            }
            n.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (de) {
            N = de;
          }
          n();
        }
      } catch (de) {
        if (de && N && typeof de.stack == "string") {
          for (var P = de.stack.split(`
`), ce = N.stack.split(`
`), ee = P.length - 1, ne = ce.length - 1; ee >= 1 && ne >= 0 && P[ee] !== ce[ne]; )
            ne--;
          for (; ee >= 1 && ne >= 0; ee--, ne--)
            if (P[ee] !== ce[ne]) {
              if (ee !== 1 || ne !== 1)
                do
                  if (ee--, ne--, ne < 0 || P[ee] !== ce[ne]) {
                    var ge = `
` + P[ee].replace(" at new ", " at ");
                    return n.displayName && ge.includes("<anonymous>") && (ge = ge.replace("<anonymous>", n.displayName)), typeof n == "function" && re.set(n, ge), ge;
                  }
                while (ee >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        J = !1, X.current = Y, le(), Error.prepareStackTrace = D;
      }
      var Oe = n ? n.displayName || n.name : "", Re = Oe ? me(Oe) : "";
      return typeof n == "function" && re.set(n, Re), Re;
    }
    function et(n, f, g) {
      return Pe(n, !1);
    }
    function We(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function Se(n, f, g) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Pe(n, We(n));
      if (typeof n == "string")
        return me(n);
      switch (n) {
        case h:
          return me("Suspense");
        case m:
          return me("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return et(n.render);
          case y:
            return Se(n.type, f, g);
          case o: {
            var N = n, D = N._payload, Y = N._init;
            try {
              return Se(Y(D), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, Ye = {}, Ue = v.ReactDebugCurrentFrame;
    function ae(n) {
      if (n) {
        var f = n._owner, g = Se(n.type, n._source, f ? f.type : null);
        Ue.setExtraStackFrame(g);
      } else
        Ue.setExtraStackFrame(null);
    }
    function Ce(n, f, g, N, D) {
      {
        var Y = Function.call.bind(he);
        for (var O in n)
          if (Y(n, O)) {
            var P = void 0;
            try {
              if (typeof n[O] != "function") {
                var ce = Error((N || "React class") + ": " + g + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              P = n[O](f, O, N, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              P = ee;
            }
            P && !(P instanceof Error) && (ae(D), x("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", g, O, typeof P), ae(null)), P instanceof Error && !(P.message in Ye) && (Ye[P.message] = !0, ae(D), x("Failed %s type: %s", g, P.message), ae(null));
          }
      }
    }
    var tt = Array.isArray;
    function ze(n) {
      return tt(n);
    }
    function Te(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return g;
      }
    }
    function nt(n) {
      try {
        return Fe(n), !1;
      } catch {
        return !0;
      }
    }
    function Fe(n) {
      return "" + n;
    }
    function Ie(n) {
      if (nt(n))
        return x("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Te(n)), Fe(n);
    }
    var pe = v.ReactCurrentOwner, He = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, De, Be;
    Be = {};
    function Ke(n) {
      if (he.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Xe(n) {
      if (he.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function rt(n, f) {
      if (typeof n.ref == "string" && pe.current && f && pe.current.stateNode !== f) {
        var g = j(pe.current.type);
        Be[g] || (x('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(pe.current.type), n.ref), Be[g] = !0);
      }
    }
    function Me(n, f) {
      {
        var g = function() {
          we || (we = !0, x("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "key", {
          get: g,
          configurable: !0
        });
      }
    }
    function be(n, f) {
      {
        var g = function() {
          De || (De = !0, x("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var at = function(n, f, g, N, D, Y, O) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: g,
        props: O,
        // Record the component responsible for creating this element.
        _owner: Y
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: N
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function E(n, f, g, N, D) {
      {
        var Y, O = {}, P = null, ce = null;
        g !== void 0 && (Ie(g), P = "" + g), Xe(f) && (Ie(f.key), P = "" + f.key), Ke(f) && (ce = f.ref, rt(f, D));
        for (Y in f)
          he.call(f, Y) && !He.hasOwnProperty(Y) && (O[Y] = f[Y]);
        if (n && n.defaultProps) {
          var ee = n.defaultProps;
          for (Y in ee)
            O[Y] === void 0 && (O[Y] = ee[Y]);
        }
        if (P || ce) {
          var ne = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          P && Me(O, ne), ce && be(O, ne);
        }
        return at(n, P, ce, D, N, pe.current, O);
      }
    }
    var L = v.ReactCurrentOwner, A = v.ReactDebugCurrentFrame;
    function se(n) {
      if (n) {
        var f = n._owner, g = Se(n.type, n._source, f ? f.type : null);
        A.setExtraStackFrame(g);
      } else
        A.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function _e(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Je() {
      {
        if (L.current) {
          var n = j(L.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Ut(n) {
      {
        if (n !== void 0) {
          var f = n.fileName.replace(/^.*[\\\/]/, ""), g = n.lineNumber;
          return `

Check your code at ` + f + ":" + g + ".";
        }
        return "";
      }
    }
    var pt = {};
    function Ht(n) {
      {
        var f = Je();
        if (!f) {
          var g = typeof n == "string" ? n : n.displayName || n.name;
          g && (f = `

Check the top-level render call using <` + g + ">.");
        }
        return f;
      }
    }
    function gt(n, f) {
      {
        if (!n._store || n._store.validated || n.key != null)
          return;
        n._store.validated = !0;
        var g = Ht(f);
        if (pt[g])
          return;
        pt[g] = !0;
        var N = "";
        n && n._owner && n._owner !== L.current && (N = " It was passed a child from " + j(n._owner.type) + "."), se(n), x('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, N), se(null);
      }
    }
    function vt(n, f) {
      {
        if (typeof n != "object")
          return;
        if (ze(n))
          for (var g = 0; g < n.length; g++) {
            var N = n[g];
            _e(N) && gt(N, f);
          }
        else if (_e(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var D = k(n);
          if (typeof D == "function" && D !== n.entries)
            for (var Y = D.call(n), O; !(O = Y.next()).done; )
              _e(O.value) && gt(O.value, f);
        }
      }
    }
    function Kt(n) {
      {
        var f = n.type;
        if (f == null || typeof f == "string")
          return;
        var g;
        if (typeof f == "function")
          g = f.propTypes;
        else if (typeof f == "object" && (f.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        f.$$typeof === y))
          g = f.propTypes;
        else
          return;
        if (g) {
          var N = j(f);
          Ce(g, n.props, "prop", N, n);
        } else if (f.PropTypes !== void 0 && !ue) {
          ue = !0;
          var D = j(f);
          x("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && x("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(n) {
      {
        for (var f = Object.keys(n.props), g = 0; g < f.length; g++) {
          var N = f[g];
          if (N !== "children" && N !== "key") {
            se(n), x("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), se(null);
            break;
          }
        }
        n.ref !== null && (se(n), x("Invalid attribute `ref` supplied to `React.Fragment`."), se(null));
      }
    }
    var bt = {};
    function yt(n, f, g, N, D, Y) {
      {
        var O = G(n);
        if (!O) {
          var P = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Ut(D);
          ce ? P += ce : P += Je();
          var ee;
          n === null ? ee = "null" : ze(n) ? ee = "array" : n !== void 0 && n.$$typeof === t ? (ee = "<" + (j(n.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof n, x("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, P);
        }
        var ne = E(n, f, g, D, Y);
        if (ne == null)
          return ne;
        if (O) {
          var ge = f.children;
          if (ge !== void 0)
            if (N)
              if (ze(ge)) {
                for (var Oe = 0; Oe < ge.length; Oe++)
                  vt(ge[Oe], n);
                Object.freeze && Object.freeze(ge);
              } else
                x("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vt(ge, n);
        }
        if (he.call(f, "key")) {
          var Re = j(n), de = Object.keys(f).filter(function(en) {
            return en !== "key";
          }), st = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!bt[Re + st]) {
            var Qt = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            x(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, st, Re, Qt, Re), bt[Re + st] = !0;
          }
        }
        return n === s ? Xt(ne) : Kt(ne), ne;
      }
    }
    function Jt(n, f, g) {
      return yt(n, f, g, !0);
    }
    function Gt(n, f, g) {
      return yt(n, f, g, !1);
    }
    var qt = Gt, Zt = Jt;
    Ae.Fragment = s, Ae.jsx = qt, Ae.jsxs = Zt;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? lt.exports = fn() : lt.exports = mn();
var a = lt.exports;
const Ot = ke({});
function hn() {
  return ye(Ot);
}
function fr(e) {
  const { schema: t, children: r, className: s, ...i } = e, l = `arkyn_alert ${t} ${s}`;
  return /* @__PURE__ */ a.jsx(Ot.Provider, { value: e, children: /* @__PURE__ */ a.jsx("div", { className: l.trim(), ...i, children: r }) });
}
function mr(e) {
  const { children: t, className: r, ...s } = e, i = `arkyn_alert_content ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: i.trim(), ...s, children: t });
}
function hr(e) {
  const { children: t, className: r, ...s } = e, i = `arkyn_description ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: i.trim(), ...s, children: t });
}
function pr(e) {
  const { className: t, ...r } = e, { schema: s } = hn(), i = `arkyn_alert_icon ${s} ${t}`;
  switch (s) {
    case "success":
      return /* @__PURE__ */ a.jsx(St, { className: i, ...r });
    case "danger":
      return /* @__PURE__ */ a.jsx(Et, { className: i, ...r });
    case "warning":
      return /* @__PURE__ */ a.jsx(rn, { className: i, ...r });
    case "info":
      return /* @__PURE__ */ a.jsx(ot, { className: i, ...r });
  }
}
function gr(e) {
  const { children: t, className: r, ...s } = e, i = `arkyn_title ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: i.trim(), ...s, children: t });
}
function Qe(e, t) {
  return t ? /* @__PURE__ */ a.jsx(t, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function zt(e, t) {
  return [...new Array(t - e)].map((r, s) => e + s + 1).filter((r) => r > 0);
}
function pn(e, t, r) {
  return e >= r ? [] : zt(e, e + t);
}
function gn(e, t) {
  return e <= 1 ? [] : zt(e - 1 - t, e - 1);
}
function vn(e, t, r) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: r, children: e });
  const s = e;
  return /* @__PURE__ */ a.jsx("p", { className: r, children: /* @__PURE__ */ a.jsx(s, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function vr(e) {
  const {
    variant: t = "ghost",
    scheme: r = "primary",
    size: s = "md",
    leftIcon: i,
    rightIcon: l,
    className: d = "",
    children: c,
    ...u
  } = e, m = { md: 12, lg: 14 }[s], y = `arkyn_badge ${t} ${r} ${s} ${d}`;
  return /* @__PURE__ */ a.jsxs("div", { className: y.trim(), ...u, children: [
    Qe(m, i),
    c,
    Qe(m, i)
  ] });
}
function br(e) {
  const { className: t, ...r } = e, s = `arkyn_card_container ${t}`;
  return /* @__PURE__ */ a.jsx("div", { className: s.trim(), ...r });
}
function yr(e) {
  const {
    className: t,
    orientation: r = "horizontal",
    ...s
  } = e, i = `arkyn_divider ${r} ${t}`;
  return /* @__PURE__ */ a.jsx("div", { className: i, ...s });
}
function xr(e) {
  const { className: t, ...r } = e, s = `arkyn_skeleton ${t}`;
  return /* @__PURE__ */ a.jsx("aside", { className: s.trim(), ...r });
}
function wr(e) {
  const { className: t, ...r } = e, s = `arkyn_table_body ${t}`;
  return /* @__PURE__ */ a.jsx("tbody", { className: s.trim(), ...r });
}
function kr(e) {
  const { className: t, children: r, ...s } = e, i = `arkyn_table_caption ${t}`;
  return /* @__PURE__ */ a.jsx("caption", { className: i.trim(), ...s, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_caption-content", children: r }) });
}
function Nr(e) {
  const { children: t, className: r, ...s } = e, i = `arkyn_table_container ${r}`;
  return /* @__PURE__ */ a.jsx("div", { className: i.trim(), ...s, children: /* @__PURE__ */ a.jsx("table", { children: t }) });
}
function Cr(e) {
  const { className: t, children: r, ...s } = e, i = `arkyn_table_footer ${t}`;
  return /* @__PURE__ */ a.jsxs("tfoot", { className: i.trim(), ...s, children: [
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" }),
    /* @__PURE__ */ a.jsx("tr", { children: /* @__PURE__ */ a.jsx("th", { colSpan: 100, children: /* @__PURE__ */ a.jsx("div", { className: "arkyn_table_footer-content", children: r }) }) })
  ] });
}
function _r(e) {
  const { className: t, children: r, ...s } = e, i = `arkyn_table_header ${t}`;
  return /* @__PURE__ */ a.jsxs("thead", { className: i.trim(), ...s, children: [
    /* @__PURE__ */ a.jsx("tr", { children: r }),
    /* @__PURE__ */ a.jsx("tr", { className: "spacing-row" })
  ] });
}
function jr(e) {
  const {
    isLoading: t = !1,
    scheme: r = "primary",
    variant: s = "solid",
    loadingText: i,
    size: l = "md",
    leftIcon: d,
    rightIcon: c,
    disabled: u,
    className: h = "",
    children: m,
    ...y
  } = e, b = { xs: 12, sm: 16, md: 20, lg: 24 }[l], C = `arkyn_button loading_text_${!!i} ${s} ${r} ${l} loading_${t} ${h}`;
  return /* @__PURE__ */ a.jsxs("button", { className: C, disabled: u || t, ...y, children: [
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-spinner", children: [
      /* @__PURE__ */ a.jsx($e, { size: b, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ a.jsxs("div", { className: "arkyn_button-content", children: [
      Qe(b, d),
      m,
      Qe(b, c)
    ] })
  ] });
}
const Ft = ke({});
function Er(e) {
  var m, y;
  const t = Pt(), { children: r, className: s, ...i } = e, l = Ee(null), d = ((m = l.current) == null ? void 0 : m.name) || "", c = ((y = t == null ? void 0 : t.fieldErrors) == null ? void 0 : y[d]) || null, u = tn(), h = `arkyn_form_controller ${s}`;
  return /* @__PURE__ */ a.jsx(Ft.Provider, { value: { error: c, id: u, inputRef: l }, children: /* @__PURE__ */ a.jsx("section", { className: h.trim(), ...i, children: r }) });
}
function ve() {
  return ye(Ft);
}
function Sr(e) {
  const {
    name: t,
    className: r = "",
    size: s = "md",
    isError: i,
    defaultChecked: l = !1,
    checked: d = null,
    onCheck: c,
    value: u,
    ...h
  } = e, { id: m, inputRef: y, error: o } = ve(), b = i || !!o, [C, w] = oe(l || !1), k = typeof d == "boolean" ? d : C, v = `arkyn_checkbox ${s} ${b ? "error" : ""} ${k ? "checked" : ""} ${r}`;
  function x() {
    const I = C;
    w(!I), c && c(I ? "" : u || "checked");
  }
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      type: "button",
      id: m,
      className: v,
      onClick: x,
      ...h,
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            type: "hidden",
            name: t,
            ref: y,
            value: k ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ a.jsx(Rt, {})
      ]
    }
  );
}
function Rr(e) {
  const { children: t, className: r, ...s } = e, i = `arkyn_form_error ${r}`, { error: l } = ve();
  return t ? /* @__PURE__ */ a.jsx("strong", { className: i.trim(), ...s, children: t }) : l ? /* @__PURE__ */ a.jsx("strong", { className: i.trim(), ...s, children: l }) : /* @__PURE__ */ a.jsx(a.Fragment, {});
}
function $r(e) {
  const {
    showAsterisk: t = !1,
    className: r = "",
    ...s
  } = e, { id: i } = ve(), d = `arkyn_form_label ${t ? "show-asterisk" : ""} ${r}`;
  return /* @__PURE__ */ a.jsx("label", { ...s, className: d.trim(), htmlFor: i });
}
function Pr(e) {
  const {
    isLoading: t = !1,
    scheme: r = "primary",
    variant: s = "solid",
    size: i = "md",
    icon: l,
    disabled: d,
    className: c = "",
    ...u
  } = e, h = { xs: 12, sm: 16, md: 20, lg: 24 }, m = `arkyn_icon_button ${s} ${r} ${i} loading_${t} ${c}`;
  return /* @__PURE__ */ a.jsxs(
    "button",
    {
      disabled: d || t,
      className: m.trim(),
      ...u,
      children: [
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-spinner", children: /* @__PURE__ */ a.jsx($e, { size: h[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ a.jsx("div", { className: "arkyn_icon_button-content", children: /* @__PURE__ */ a.jsx(l, { size: h[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function je(e, t, r) {
  if (!e) return /* @__PURE__ */ a.jsx(a.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ a.jsx("p", { className: r, children: e });
  const s = e;
  return /* @__PURE__ */ a.jsx("p", { className: r, children: /* @__PURE__ */ a.jsx(s, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function ft(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function Dt(e, t) {
  let r = "", s = 0;
  return Array.from(e).forEach((i, l) => {
    t[l + s].match(/[0-9]/) || (r += t[l + s], s++), r += i;
  }), r;
}
function Bt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const mt = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Mt = ft(mt.CNPJ).length;
function bn(e, t) {
  const {
    isLoading: r,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: y,
    defaultValue: o,
    readOnly: b,
    onFocus: C,
    onBlur: w,
    title: k,
    style: v,
    onChange: x,
    ...I
  } = e;
  function z(H) {
    let M = ft(H);
    const K = Bt(M);
    if (!(M.length > Mt))
      return M = Dt(M, mt[K]), M;
  }
  const R = m ? "right" : "left", F = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || b || r ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: F,
    prefix: je(c, j, "prefix"),
    sufix: je(u, j, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    defaultValue: z(o || ""),
    disabled: y,
    readOnly: b,
    onFocus: C,
    onBlur: w,
    title: k,
    style: v,
    onChange: x,
    loadingPosition: R,
    iconSize: j,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...I
  };
}
function yn(e) {
  const [t, r] = oe(!1), s = Ee(null), { inputRef: i, id: l, error: d } = ve(), c = i || s, u = e.isError || !!d, {
    disabled: h,
    title: m,
    style: y,
    className: o,
    prefix: b,
    sufix: C,
    iconSize: w,
    loadingPosition: k,
    isLoading: v,
    LeftIcon: x,
    readOnly: I,
    onFocus: z,
    onBlur: R,
    RightIcon: V,
    Spinner: B,
    onChange: U,
    value: W,
    defaultValue: G,
    ...F
  } = bn({ ...e, id: l, isError: u }, t), [te, j] = oe(G), H = x && !v, M = V && !v, K = k === "left" && v, Q = k === "right" && v;
  function $() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function q(S) {
    let _ = ft(S.target.value);
    const Z = Bt(_);
    _.length > Mt || (_ = Dt(_, mt[Z]), S.target.value = _, j(_), U && U(S));
  }
  function ie(S) {
    r(!0), z && z(S);
  }
  function T(S) {
    r(!1), R && R(S);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: m,
      style: y,
      onClick: $,
      className: o,
      children: [
        b,
        K && B,
        H && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: h || v,
            readOnly: I,
            ref: c,
            value: W || te,
            onFocus: ie,
            onChange: q,
            onBlur: T,
            ...F
          }
        ),
        M && /* @__PURE__ */ a.jsx(V, { size: w, strokeWidth: 2.5 }),
        Q && B,
        C
      ]
    }
  );
}
const xn = 3, wn = (e = "pt-BR", t, r = "BRL", s = !0) => new Intl.NumberFormat(e, {
  style: "currency",
  currency: r,
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(t).slice(s ? xn : 0), Ge = 2, Nt = (e) => typeof e == "number" ? e : Number(e.toString().replace(/[^0-9-]/g, "")), ct = (e) => {
  let t = e;
  return typeof e == "string" ? (t = Nt(e), t % 1 !== 0 && (t = t.toFixed(Ge))) : t = Number.isInteger(e) ? Number(e) * 10 ** Ge : e.toFixed(Ge), Nt(t) / 10 ** Ge;
}, Ct = (e, t, r) => {
  if (!t) return [0, ""];
  const s = ct(t), i = wn(e, s, r);
  return [s, i];
};
function kn(e, t) {
  const {
    isLoading: r,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: y,
    readOnly: o,
    onFocus: b,
    onBlur: C,
    title: w,
    style: k,
    // showCents = false,
    max: v = 1e9,
    locale: x = "pt-BR",
    currency: I = "BRL",
    ...z
  } = e, R = m ? "right" : "left", F = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || o || r ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: F,
    prefix: je(c, j, "prefix"),
    sufix: je(u, j, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: y,
    locale: x,
    currency: I,
    readOnly: o,
    onFocus: b,
    onBlur: C,
    title: w,
    style: k,
    max: v,
    // showCents,
    loadingPosition: R,
    iconSize: j,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
function Nn(e) {
  const [t, r] = oe(!1), [s, i] = oe("0"), l = Ee(null), { inputRef: d, id: c, error: u } = ve(), h = d || l, m = e.isError || !!u, {
    disabled: y,
    title: o,
    style: b,
    className: C,
    prefix: w,
    sufix: k,
    iconSize: v,
    loadingPosition: x,
    isLoading: I,
    LeftIcon: z,
    readOnly: R,
    onFocus: V,
    onBlur: B,
    RightIcon: U,
    Spinner: W,
    value: G,
    max: F,
    onChangeValue: te,
    onKeyPress: j,
    currency: H,
    locale: M,
    name: K,
    defaultValue: Q,
    ...$
  } = kn({ ...e, id: c, isError: m }, t), q = z && !I, ie = U && !I, T = x === "left" && I, S = x === "right" && I;
  function _() {
    y || !(h != null && h.current) || (r(!0), h.current.focus());
  }
  function Z(J) {
    r(!0), V && V(J);
  }
  function le(J) {
    r(!1), B && B(J);
  }
  const X = (J) => {
    const [re, Ne] = Ct(
      M,
      J,
      H
    );
    return !F || re <= F ? (i(Ne), [re, Ne]) : [ct(s), s];
  }, xe = (J) => {
    J.preventDefault();
    const [re, Ne] = X(J.target.value);
    te(J, String(re), String(Ne));
  }, me = (J) => j && j(J, J.key, J.key);
  return Ze(() => {
    const J = G || Q || void 0, [, re] = Ct(M, J, H);
    i(re);
  }, [H, Q, G]), /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: o,
      style: b,
      onClick: _,
      className: C,
      children: [
        w,
        T && W,
        q && /* @__PURE__ */ a.jsx(z, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            value: s,
            onChange: xe,
            onBlur: le,
            onFocus: Z,
            onKeyUp: me,
            disabled: y || I,
            readOnly: R,
            ref: h,
            ...$
          }
        ),
        /* @__PURE__ */ a.jsx("input", { type: "hidden", name: K, value: ct(s) }),
        S && W,
        ie && /* @__PURE__ */ a.jsx(U, { size: v, strokeWidth: 2.5 }),
        k
      ]
    }
  );
}
function Cn(e, t) {
  const {
    isLoading: r,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: y,
    readOnly: o,
    onFocus: b,
    onBlur: C,
    title: w,
    style: k,
    onChange: v,
    showMask: x = !1,
    type: I,
    ...z
  } = e, R = m ? "right" : "left", F = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || o || r ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: F,
    prefix: je(c, j, "prefix"),
    sufix: je(u, j, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: y,
    readOnly: o,
    onFocus: b,
    onBlur: C,
    title: w,
    style: k,
    onChange: v,
    loadingPosition: R,
    iconSize: j,
    showMask: x,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...z
  };
}
const _n = nn((e, t) => /* @__PURE__ */ a.jsx("input", { ref: t, ...e }));
function jn(e) {
  const [t, r] = oe(!1), s = Ee(null), { inputRef: i, id: l, error: d } = ve(), c = i || s, u = e.isError || !!d, {
    disabled: h,
    title: m,
    style: y,
    className: o,
    prefix: b,
    sufix: C,
    iconSize: w,
    loadingPosition: k,
    isLoading: v,
    LeftIcon: x,
    readOnly: I,
    onFocus: z,
    onBlur: R,
    RightIcon: V,
    Spinner: B,
    ...U
  } = Cn({ ...e, id: l, isError: u }, t), W = x && !v, G = V && !v, F = k === "left" && v, te = k === "right" && v;
  function j() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function H(K) {
    r(!0), z && z(K);
  }
  function M(K) {
    r(!1), R && R(K);
  }
  return /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: m,
      style: y,
      onClick: j,
      className: o,
      children: [
        b,
        F && B,
        W && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          un,
          {
            component: _n,
            ref: c,
            onFocus: H,
            onBlur: M,
            disabled: h,
            ...U
          }
        ),
        G && /* @__PURE__ */ a.jsx(V, { size: w, strokeWidth: 2.5 }),
        te && B,
        C
      ]
    }
  );
}
function En(e, t) {
  const {
    isLoading: r,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: h,
    rightIcon: m,
    disabled: y,
    readOnly: o,
    onFocus: b,
    onBlur: C,
    title: w,
    style: k,
    onChange: v,
    ...x
  } = e, I = m ? "right" : "left", W = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${y || o || r ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, F = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: W,
    prefix: je(c, F, "prefix"),
    sufix: je(u, F, "sufix"),
    LeftIcon: h,
    RightIcon: m,
    disabled: y,
    readOnly: o,
    onFocus: b,
    onBlur: C,
    title: w,
    style: k,
    onChange: v,
    loadingPosition: I,
    iconSize: F,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: F, strokeWidth: 2.5 }),
    ...x
  };
}
function Sn(e) {
  const [t, r] = oe(!1), s = Ee(null), { inputRef: i, id: l, error: d } = ve(), c = i || s, u = e.isError || !!d, {
    disabled: h,
    title: m,
    style: y,
    className: o,
    prefix: b,
    sufix: C,
    iconSize: w,
    loadingPosition: k,
    isLoading: v,
    LeftIcon: x,
    readOnly: I,
    onFocus: z,
    onBlur: R,
    RightIcon: V,
    type: B,
    Spinner: U,
    ...W
  } = En({ ...e, id: l, isError: u }, t), G = x && !v, F = V && !v, te = k === "left" && v, j = k === "right" && v;
  function H() {
    h || !(c != null && c.current) || (r(!0), c.current.focus());
  }
  function M(Q) {
    r(!0), z && z(Q);
  }
  function K(Q) {
    r(!1), R && R(Q);
  }
  return B === "hidden" ? /* @__PURE__ */ a.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: c,
      ...W
    }
  ) : /* @__PURE__ */ a.jsxs(
    "section",
    {
      title: m,
      style: y,
      onClick: H,
      className: o,
      children: [
        b,
        te && U,
        G && /* @__PURE__ */ a.jsx(x, { size: w, strokeWidth: 2.5 }),
        /* @__PURE__ */ a.jsx(
          "input",
          {
            disabled: h || v,
            readOnly: I,
            ref: c,
            onFocus: M,
            onBlur: K,
            type: B,
            ...W
          }
        ),
        F && /* @__PURE__ */ a.jsx(V, { size: w, strokeWidth: 2.5 }),
        j && U,
        C
      ]
    }
  );
}
function Tr(e) {
  return e.type === "currency" ? /* @__PURE__ */ a.jsx(Nn, { ...e }) : e.type === "masked" ? /* @__PURE__ */ a.jsx(jn, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ a.jsx(yn, { ...e }) : /* @__PURE__ */ a.jsx(Sn, { ...e });
}
const Lt = ke({});
function Rn() {
  return ye(Lt);
}
function Ir(e) {
  const {
    defaultValue: t,
    name: r,
    value: s,
    onChange: i,
    size: l = "md",
    className: d,
    ...c
  } = e, [u, h] = oe(t || ""), { inputRef: m, id: y } = ve();
  function o(C) {
    h(C), i && i(C);
  }
  const b = `arkyn_radio_group ${l} ${d || ""}`;
  return /* @__PURE__ */ a.jsxs(
    Lt.Provider,
    {
      value: { onChange: o, value: s || u, size: l },
      children: [
        /* @__PURE__ */ a.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: y,
            readOnly: !0,
            name: r,
            ref: m,
            value: u
          }
        ),
        /* @__PURE__ */ a.jsx("div", { className: b.trim(), ...c })
      ]
    }
  );
}
function Or(e) {
  const {
    value: t,
    size: r,
    disabled: s,
    children: i
  } = e, { onChange: l, size: d, value: c } = Rn(), { error: u } = ve(), b = `arkyn_radio_box ${r || d} ${c === t ? "isChecked" : ""} ${u ? "isErrored" : ""} ${s ? "isDisabled" : ""}`;
  return /* @__PURE__ */ a.jsxs("label", { className: b.trim(), children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        disabled: s,
        onClick: () => l(t),
        onFocus: () => l(t)
      }
    ),
    i
  ] });
}
function $n(e, t) {
  const {
    isLoading: r,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    leftIcon: u,
    disabled: h,
    readOnly: m,
    onFocus: y,
    onBlur: o,
    title: b,
    style: C,
    closeOnSelect: w = !0,
    ...k
  } = e, R = `arkyn_select ${c ? "hasPrefix" : ""} ${d} ${i} ${h || m || r ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, B = { md: 20, lg: 20 }[i];
  return {
    isLoading: r,
    className: R,
    prefix: vn(c, B, "prefix"),
    LeftIcon: u,
    disabled: h || r || m,
    onFocus: y,
    onBlur: o,
    title: b,
    closeOnSelect: w,
    style: C,
    iconSize: B,
    Spinner: /* @__PURE__ */ a.jsx($e, { className: "spinner", size: B, strokeWidth: 2.5 }),
    ...k
  };
}
function zr(e) {
  var S;
  const [t, r] = oe(!1), { inputRef: s, id: i, error: l } = ve(), d = Ee(null), c = s || d, u = e.isError || !!l, {
    disabled: h,
    title: m,
    style: y,
    className: o,
    prefix: b,
    iconSize: C,
    isLoading: w,
    LeftIcon: k,
    value: v = null,
    defaultValue: x = "",
    onFocus: I,
    onBlur: z,
    Spinner: R,
    name: V,
    placeholder: B,
    onSelect: U,
    options: W,
    optionMaxHeight: G,
    closeOnSelect: F,
    ...te
  } = $n({ ...e, id: i, isError: u }, t), [j, H] = oe(x);
  function M() {
    h || !(c != null && c.current) || t || (r(!0), c.current.focus());
  }
  function K(_) {
    t || (r(!0), I && I(_));
  }
  function Q() {
    r(!1), z && c.current && c.current.blur();
  }
  function $(_) {
    const { label: Z, value: le } = _;
    H(j !== le ? le : ""), U && U({ label: Z, value: le }), F && Q();
  }
  const q = typeof v == "string" ? v : j, ie = ((S = W.find((_) => _.value === q)) == null ? void 0 : S.label) || "", T = () => {
    if (!t && ie) return !0;
    if (!t && !ie) return !1;
    if (t && ie) return !0;
    if (t && !ie) return !1;
  };
  return /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
    /* @__PURE__ */ a.jsxs(
      "section",
      {
        title: m,
        style: y,
        onClick: M,
        className: `${o} placeholder_dark_${T()}`,
        children: [
          b,
          k && /* @__PURE__ */ a.jsx(k, { size: C, strokeWidth: 2.5 }),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              disabled: h,
              readOnly: !0,
              placeholder: ie || B,
              onFocus: K,
              ...te
            }
          ),
          /* @__PURE__ */ a.jsx(
            "input",
            {
              type: "hidden",
              ref: c,
              name: V,
              value: q || "",
              readOnly: !0
            }
          ),
          t && /* @__PURE__ */ a.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: G },
              children: [
                W.map(({ label: _, value: Z }) => /* @__PURE__ */ a.jsxs(
                  "div",
                  {
                    onClick: () => $({ label: _, value: Z }),
                    className: q === Z ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      _,
                      " ",
                      /* @__PURE__ */ a.jsx(Rt, {})
                    ]
                  },
                  Z
                )),
                W.length <= 0 && /* @__PURE__ */ a.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !w && /* @__PURE__ */ a.jsx(
            an,
            {
              className: "arkyn_select_arrow",
              size: C,
              strokeWidth: 2.5
            }
          ),
          w && R
        ]
      }
    ),
    t && /* @__PURE__ */ a.jsx("aside", { className: "arkyn_select_overlay", onClick: Q })
  ] });
}
function Fr(e) {
  const {
    variant: t = "solid",
    size: r = "md",
    className: s,
    disabled: i = !1,
    readOnly: l = !1,
    onFocus: d,
    onBlur: c,
    title: u,
    style: h,
    ...m
  } = e, [y, o] = oe(!1), { inputRef: b, id: C, error: w } = ve(), k = Ee(null), v = b || k, I = e.isError || !!w ? "errored" : "", V = `arkyn_textarea ${t} ${r} ${i || l ? "opacity" : ""} ${I} ${y ? "focused" : ""} ${s}`;
  function B() {
    i || !(v != null && v.current) || (o(!0), v.current.focus());
  }
  function U(G) {
    o(!0), d && d(G);
  }
  function W(G) {
    o(!1), c && c(G);
  }
  return /* @__PURE__ */ a.jsx(
    "section",
    {
      title: u,
      style: h,
      onClick: B,
      className: V,
      children: /* @__PURE__ */ a.jsx(
        "textarea",
        {
          id: C,
          disabled: i,
          readOnly: l,
          ref: v,
          onFocus: U,
          onBlur: W,
          ...m
        }
      )
    }
  );
}
function Dr(e) {
  const { className: t = "", ...r } = e, s = `arkyn_breadcrumb_container ${t}`;
  return /* @__PURE__ */ a.jsx("nav", { className: s, ...r });
}
function Br(e) {
  const { pathname: t } = Tt(), {
    className: r = "",
    disabled: s = !1,
    children: i,
    to: l,
    ...d
  } = e, u = `arkyn_breadcrumb_link ${t === l ? "active" : "inactive"} ${r}`;
  return s ? /* @__PURE__ */ a.jsxs("p", { className: u, children: [
    /* @__PURE__ */ a.jsx(it, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ a.jsxs(ln, { to: l, className: u, ...d, children: [
    /* @__PURE__ */ a.jsx(it, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function Pn(e = "") {
  const t = Tt(), r = new URLSearchParams(t.search), s = e ? `${e}:` : "", i = (l) => {
    Object.entries(l).forEach(([d, c]) => {
      c === void 0 ? r.delete(`${s}${d}`) : r.set(`${s}${d}`, String(c));
    });
  };
  return {
    getParam: (l) => r.get(`${s}${l}`),
    getScopedSearch: (l) => {
      i(l);
      let d = r.toString();
      return d && (d = "?" + d), d;
    }
  };
}
function Mr(e) {
  const {
    scope: t,
    totalCountRegisters: r,
    perPageKey: s = "per_page",
    pageKey: i = "page",
    siblingsCount: l = 2,
    ...d
  } = e, c = cn(), { getParam: u, getScopedSearch: h } = Pn(t), m = Number(u(i)) || 1, y = Number(u(s)) || 20, o = Math.ceil(r / y), b = gn(m, l), C = pn(m, l, o);
  function w(k) {
    c(h({ page: k }));
  }
  return /* @__PURE__ */ a.jsxs("div", { className: "arkyn_pagination", ...d, children: [
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: m <= 1,
        onClick: () => w(m - 1),
        children: /* @__PURE__ */ a.jsx(sn, {})
      }
    ),
    m > 1 + l && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => w(1),
          children: "1"
        }
      ),
      m > 2 + l && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(xt, {}) })
    ] }),
    b.map((k, v) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(k),
        className: "arkyn_pagination-page_button",
        children: k
      },
      v
    )),
    /* @__PURE__ */ a.jsx("button", { className: "arkyn_pagination-current", disabled: !0, children: m }),
    C.map((k, v) => /* @__PURE__ */ a.jsx(
      "button",
      {
        onClick: () => w(k),
        className: "arkyn_pagination-page_button",
        children: k
      },
      v
    )),
    m + l < o && /* @__PURE__ */ a.jsxs(a.Fragment, { children: [
      m + 1 + l < o && /* @__PURE__ */ a.jsx("button", { disabled: !0, className: "arkyn_pagination-spread", children: /* @__PURE__ */ a.jsx(xt, {}) }),
      /* @__PURE__ */ a.jsx(
        "button",
        {
          className: "arkyn_pagination-page_button",
          onClick: () => w(o),
          children: o
        }
      )
    ] }),
    /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_pagination-icon_button",
        disabled: m >= o,
        onClick: () => w(m + 1),
        children: /* @__PURE__ */ a.jsx(it, {})
      }
    )
  ] });
}
const ut = ke({});
function Tn() {
  if (!ut)
    throw new Error("useTabContext must be used within a TabProvider");
  return ye(ut);
}
function Lr(e) {
  const {
    children: t,
    onClick: r,
    defaultActive: s,
    className: i,
    ...l
  } = e, [d, c] = oe(s || ""), [u, h] = oe(!0), m = Ee(null), y = `arkyn_tab_container ${i || ""}`, [o, b] = oe({
    width: "0px",
    left: "0px",
    transition: "none"
  }), C = (k, v) => {
    const x = k.getBoundingClientRect(), I = m.current.getBoundingClientRect(), z = v ? void 0 : "none";
    h(!1), b({
      transition: z,
      width: `${x.width}px`,
      left: `${x.left - I.left}px`
    });
  };
  Ze(() => {
    const k = m.current;
    if (!k) return;
    let v = null;
    v = k.querySelector("button.active"), v && C(v);
  }, []);
  const w = (k) => {
    const v = k.target;
    v && (c(v.value), v.classList.add("active"), C(v, !0), r && r(v.value));
  };
  return /* @__PURE__ */ a.jsxs("nav", { ref: m, className: y.trim(), ...l, children: [
    /* @__PURE__ */ a.jsx(ut.Provider, { value: { handleTabClick: w, showInitialTab: u, value: d }, children: t }),
    /* @__PURE__ */ a.jsx("div", { className: "active-line", style: o })
  ] });
}
function Ar(e) {
  const { children: t, className: r = "", onClick: s, ...i } = e, { value: l, showInitialTab: d, handleTabClick: c } = Tn(), u = l === i.value && l ? "active" : "", m = `arkyn_tab_button ${l === i.value && d ? "show_border_bottom" : ""} ${u} ${r}`;
  function y(o) {
    c(o), s && s(o);
  }
  return /* @__PURE__ */ a.jsx("button", { onClick: y, className: m.trim(), ...i, children: t });
}
const At = ke({});
function Vr(e) {
  const {
    isVisibled: t,
    makeInvisible: r,
    orientation: s = "left",
    children: i,
    className: l,
    ...d
  } = e, c = s === "left" ? "-100%" : "100%", h = `arkyn_drawer_container ${s} ${t ? "visible" : ""} ${l}`;
  return /* @__PURE__ */ a.jsx(At.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ a.jsx(It, { children: t && /* @__PURE__ */ a.jsxs("aside", { className: h.trim(), ...d, children: [
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        className: "arkyn_drawer_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        className: "arkyn_drawer_container-content",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${c})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${c})` },
        children: i
      }
    )
  ] }) }) });
}
function Wr(e) {
  const {
    showCloseButton: t = !0,
    className: r,
    children: s,
    ...i
  } = e, { makeInvisible: l } = ye(At), d = `arkyn_drawer_header ${r}`;
  return /* @__PURE__ */ a.jsxs("header", { className: d.trim(), ...i, children: [
    s,
    t && /* @__PURE__ */ a.jsx(
      "button",
      {
        className: "arkyn_drawer_header-close_button",
        type: "button",
        onClick: l,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ a.jsx($t, { size: 24 })
      }
    )
  ] });
}
const Vt = ke({});
function Yr(e) {
  const {
    isVisibled: t,
    makeInvisible: r,
    children: s,
    className: i = "",
    ...l
  } = e, c = `arkyn_modal_container ${t ? "visible" : ""} ${i}`;
  return /* @__PURE__ */ a.jsx(Vt.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ a.jsx(It, { children: t && /* @__PURE__ */ a.jsxs("aside", { className: c.trim(), ...l, children: [
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        className: "arkyn_modal_container-overlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        className: "arkyn_modal_container-content",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: s
      }
    )
  ] }) }) });
}
function Ur(e) {
  const { alignment: t = "right", className: r, ...s } = e, i = `arkyn_modal_footer ${t} ${r}`;
  return /* @__PURE__ */ a.jsx("footer", { className: i.trim(), ...s });
}
function Hr(e) {
  const {
    showCloseButton: t = !0,
    className: r,
    children: s,
    ...i
  } = e, { makeInvisible: l } = ye(Vt), d = `arkyn_modal_header ${r}`;
  return /* @__PURE__ */ a.jsxs("header", { className: d.trim(), ...i, children: [
    s,
    t && /* @__PURE__ */ a.jsx(
      "button",
      {
        type: "button",
        onClick: l,
        "aria-label": "Close modal button",
        className: "arkyn_modal_header-close_button",
        children: /* @__PURE__ */ a.jsx($t, { size: 24 })
      }
    )
  ] });
}
function Kr(e) {
  const { children: t, button: r, closeOnClick: s, orientation: i = "bottom-left" } = e, [l, d] = oe(!1), c = `arkyn_popover ${i} ${l ? "show" : ""}`;
  function u() {
    l || d(!0);
  }
  return /* @__PURE__ */ a.jsxs("div", { className: c, onClick: u, children: [
    r,
    /* @__PURE__ */ a.jsx(
      Ve.div,
      {
        style: { visibility: l ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: l ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => s && d(!1),
        className: "arkyn_popover-content",
        children: t
      }
    ),
    l && /* @__PURE__ */ a.jsx(
      "div",
      {
        onClick: () => d(!1),
        className: "arkyn_popover-overlay"
      }
    )
  ] });
}
function In(e) {
  const { message: t, title: r, type: s, size: i = "lg" } = e, l = `arkyn_toast ${s} ${i}`;
  function d() {
    switch (s) {
      case "info":
        return /* @__PURE__ */ a.jsx(ot, {});
      case "success":
        return /* @__PURE__ */ a.jsx(St, {});
      case "danger":
        return /* @__PURE__ */ a.jsx(Et, {});
      case "warning":
        return /* @__PURE__ */ a.jsx(on, {});
      default:
        return /* @__PURE__ */ a.jsx(ot, {});
    }
  }
  return /* @__PURE__ */ a.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ a.jsxs("div", { children: [
      /* @__PURE__ */ a.jsx("div", { className: "bg" }),
      /* @__PURE__ */ a.jsx(d, {})
    ] }),
    /* @__PURE__ */ a.jsxs("p", { children: [
      /* @__PURE__ */ a.jsx("strong", { title: r, children: r }),
      /* @__PURE__ */ a.jsx("span", { children: t })
    ] })
  ] });
}
function Xr(e) {
  const {
    text: t,
    size: r = "lg",
    children: s,
    orientation: i = "top",
    className: l,
    ...d
  } = e, c = `arkyn_tooltip ${r} ${i} ${l}`;
  return /* @__PURE__ */ a.jsxs("div", { className: c.trim(), ...d, children: [
    s,
    /* @__PURE__ */ a.jsx("div", { className: "arkyn_tooltip-text", children: t })
  ] });
}
const ht = ke({}), Wt = ke({});
function On() {
  const e = ye(Wt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function _t(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function Jr() {
  const e = Pt(), { closeModal: t } = ye(ht), { showToast: r } = On();
  Ze(() => {
    const s = e == null ? void 0 : e.closeModalKey;
    s && t(s);
  }, [e]), Ze(() => {
    const s = e == null ? void 0 : e.toast, i = e == null ? void 0 : e.message;
    _t(s) && r(s), !_t(s) && i && r({
      message: i,
      title: "Atenção!",
      type: "warning"
    });
  }, [e]);
}
const Yt = ke({});
function Gr(e) {
  const t = ye(Yt);
  if (Object.entries(t).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: r,
      drawerIsOpen: s,
      openDrawer: i,
      closeDrawer: l
    } = t, d = s(e), c = r(e);
    return { drawerIsOpen: d, drawerData: c, openDrawer: (m) => i(e, m), closeDrawer: () => l(e) };
  } else
    return t;
}
function qr(e) {
  const t = ye(ht);
  if (Object.entries(t).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: r,
      modalIsOpen: s,
      openModal: i,
      closeModal: l
    } = t, d = s(e), c = r(e);
    return { modalIsOpen: d, modalData: c, openModal: (m) => i(e, m), closeModal: () => l(e) };
  } else
    return t;
}
function Zr(e) {
  const { children: t = !1 } = e, [r, s] = oe([]);
  function i(u) {
    return !!r.some((h) => h.key === u);
  }
  function l(u) {
    var h;
    return (h = r.find((m) => m.key === u)) == null ? void 0 : h.data;
  }
  function d(u, h) {
    const m = i(u);
    s(m ? (y) => [...y.filter((b) => b.key !== u), { key: u, data: h }] : [...r, { key: u, data: h }]);
  }
  function c(u) {
    s(r.filter((h) => h.key !== u));
  }
  return /* @__PURE__ */ a.jsx(
    Yt.Provider,
    {
      value: { drawerIsOpen: i, drawerData: l, openDrawer: d, closeDrawer: c },
      children: t
    }
  );
}
function Qr(e) {
  const { children: t = !1 } = e, [r, s] = oe([]);
  function i(u) {
    return !!r.some((h) => h.key === u);
  }
  function l(u) {
    var h;
    return (h = r.find((m) => m.key === u)) == null ? void 0 : h.data;
  }
  function d(u, h) {
    const m = i(u);
    s(m ? (y) => [...y.filter((b) => b.key !== u), { key: u, data: h }] : [...r, { key: u, data: h }]);
  }
  function c(u) {
    s(r.filter((h) => h.key !== u));
  }
  return /* @__PURE__ */ a.jsx(
    ht.Provider,
    {
      value: { modalIsOpen: i, modalData: l, openModal: d, closeModal: c },
      children: t
    }
  );
}
var zn = (e) => {
  switch (e) {
    case "success":
      return Bn;
    case "info":
      return Ln;
    case "warning":
      return Mn;
    case "error":
      return An;
    default:
      return null;
  }
}, Fn = Array(12).fill(0), Dn = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, Fn.map((t, r) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` })))), Bn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), Mn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Ln = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), An = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Vn = () => {
  let [e, t] = p.useState(document.hidden);
  return p.useEffect(() => {
    let r = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", r), () => window.removeEventListener("visibilitychange", r);
  }, []), e;
}, dt = 1, Wn = class {
  constructor() {
    this.subscribe = (e) => (this.subscribers.push(e), () => {
      let t = this.subscribers.indexOf(e);
      this.subscribers.splice(t, 1);
    }), this.publish = (e) => {
      this.subscribers.forEach((t) => t(e));
    }, this.addToast = (e) => {
      this.publish(e), this.toasts = [...this.toasts, e];
    }, this.create = (e) => {
      var t;
      let { message: r, ...s } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : dt++, l = this.toasts.find((c) => c.id === i), d = e.dismissible === void 0 ? !0 : e.dismissible;
      return l ? this.toasts = this.toasts.map((c) => c.id === i ? (this.publish({ ...c, ...e, id: i, title: r }), { ...c, ...e, id: i, dismissible: d, title: r }) : c) : this.addToast({ title: r, ...s, dismissible: d, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((r) => r({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let r;
      t.loading !== void 0 && (r = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let s = e instanceof Promise ? e : e(), i = r !== void 0;
      return s.then(async (l) => {
        if (Un(l) && !l.ok) {
          i = !1;
          let d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: r, type: "error", message: d, description: c });
        } else if (t.success !== void 0) {
          i = !1;
          let d = typeof t.success == "function" ? await t.success(l) : t.success, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: r, type: "success", message: d, description: c });
        }
      }).catch(async (l) => {
        if (t.error !== void 0) {
          i = !1;
          let d = typeof t.error == "function" ? await t.error(l) : t.error, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: r, type: "error", message: d, description: c });
        }
      }).finally(() => {
        var l;
        i && (this.dismiss(r), r = void 0), (l = t.finally) == null || l.call(t);
      }), r;
    }, this.custom = (e, t) => {
      let r = (t == null ? void 0 : t.id) || dt++;
      return this.create({ jsx: e(r), id: r, ...t }), r;
    }, this.subscribers = [], this.toasts = [];
  }
}, fe = new Wn(), Yn = (e, t) => {
  let r = (t == null ? void 0 : t.id) || dt++;
  return fe.addToast({ title: e, ...t, id: r }), r;
}, Un = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Hn = Yn, Kn = () => fe.toasts, Xn = Object.assign(Hn, { success: fe.success, info: fe.info, warning: fe.warning, error: fe.error, custom: fe.custom, message: fe.message, promise: fe.promise, dismiss: fe.dismiss, loading: fe.loading }, { getHistory: Kn });
function Jn(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u") return;
  let r = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
  s.type = "text/css", t === "top" && r.firstChild ? r.insertBefore(s, r.firstChild) : r.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
}
Jn(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function qe(e) {
  return e.label !== void 0;
}
var Gn = 3, qn = "32px", Zn = 4e3, Qn = 356, er = 14, tr = 20, nr = 200;
function rr(...e) {
  return e.filter(Boolean).join(" ");
}
var ar = (e) => {
  var t, r, s, i, l, d, c, u, h, m;
  let { invert: y, toast: o, unstyled: b, interacting: C, setHeights: w, visibleToasts: k, heights: v, index: x, toasts: I, expanded: z, removeToast: R, defaultRichColors: V, closeButton: B, style: U, cancelButtonStyle: W, actionButtonStyle: G, className: F = "", descriptionClassName: te = "", duration: j, position: H, gap: M, loadingIcon: K, expandByDefault: Q, classNames: $, icons: q, closeButtonAriaLabel: ie = "Close toast", pauseWhenPageIsHidden: T, cn: S } = e, [_, Z] = p.useState(!1), [le, X] = p.useState(!1), [xe, me] = p.useState(!1), [J, re] = p.useState(!1), [Ne, Pe] = p.useState(0), [et, We] = p.useState(0), Se = p.useRef(null), he = p.useRef(null), Ye = x === 0, Ue = x + 1 <= k, ae = o.type, Ce = o.dismissible !== !1, tt = o.className || "", ze = o.descriptionClassName || "", Te = p.useMemo(() => v.findIndex((E) => E.toastId === o.id) || 0, [v, o.id]), nt = p.useMemo(() => {
    var E;
    return (E = o.closeButton) != null ? E : B;
  }, [o.closeButton, B]), Fe = p.useMemo(() => o.duration || j || Zn, [o.duration, j]), Ie = p.useRef(0), pe = p.useRef(0), He = p.useRef(0), we = p.useRef(null), [De, Be] = H.split("-"), Ke = p.useMemo(() => v.reduce((E, L, A) => A >= Te ? E : E + L.height, 0), [v, Te]), Xe = Vn(), rt = o.invert || y, Me = ae === "loading";
  pe.current = p.useMemo(() => Te * M + Ke, [Te, Ke]), p.useEffect(() => {
    Z(!0);
  }, []), p.useLayoutEffect(() => {
    if (!_) return;
    let E = he.current, L = E.style.height;
    E.style.height = "auto";
    let A = E.getBoundingClientRect().height;
    E.style.height = L, We(A), w((se) => se.find((ue) => ue.toastId === o.id) ? se.map((ue) => ue.toastId === o.id ? { ...ue, height: A } : ue) : [{ toastId: o.id, height: A, position: o.position }, ...se]);
  }, [_, o.title, o.description, w, o.id]);
  let be = p.useCallback(() => {
    X(!0), Pe(pe.current), w((E) => E.filter((L) => L.toastId !== o.id)), setTimeout(() => {
      R(o);
    }, nr);
  }, [o, R, w, pe]);
  p.useEffect(() => {
    if (o.promise && ae === "loading" || o.duration === 1 / 0 || o.type === "loading") return;
    let E, L = Fe;
    return z || C || T && Xe ? (() => {
      if (He.current < Ie.current) {
        let A = (/* @__PURE__ */ new Date()).getTime() - Ie.current;
        L = L - A;
      }
      He.current = (/* @__PURE__ */ new Date()).getTime();
    })() : L !== 1 / 0 && (Ie.current = (/* @__PURE__ */ new Date()).getTime(), E = setTimeout(() => {
      var A;
      (A = o.onAutoClose) == null || A.call(o, o), be();
    }, L)), () => clearTimeout(E);
  }, [z, C, Q, o, Fe, be, o.promise, ae, T, Xe]), p.useEffect(() => {
    let E = he.current;
    if (E) {
      let L = E.getBoundingClientRect().height;
      return We(L), w((A) => [{ toastId: o.id, height: L, position: o.position }, ...A]), () => w((A) => A.filter((se) => se.toastId !== o.id));
    }
  }, [w, o.id]), p.useEffect(() => {
    o.delete && be();
  }, [be, o.delete]);
  function at() {
    return q != null && q.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, q.loading) : K ? p.createElement("div", { className: "sonner-loader", "data-visible": ae === "loading" }, K) : p.createElement(Dn, { visible: ae === "loading" });
  }
  return p.createElement("li", { "aria-live": o.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: he, className: S(F, tt, $ == null ? void 0 : $.toast, (t = o == null ? void 0 : o.classNames) == null ? void 0 : t.toast, $ == null ? void 0 : $.default, $ == null ? void 0 : $[ae], (r = o == null ? void 0 : o.classNames) == null ? void 0 : r[ae]), "data-sonner-toast": "", "data-rich-colors": (s = o.richColors) != null ? s : V, "data-styled": !(o.jsx || o.unstyled || b), "data-mounted": _, "data-promise": !!o.promise, "data-removed": le, "data-visible": Ue, "data-y-position": De, "data-x-position": Be, "data-index": x, "data-front": Ye, "data-swiping": xe, "data-dismissible": Ce, "data-type": ae, "data-invert": rt, "data-swipe-out": J, "data-expanded": !!(z || Q && _), style: { "--index": x, "--toasts-before": x, "--z-index": I.length - x, "--offset": `${le ? Ne : pe.current}px`, "--initial-height": Q ? "auto" : `${et}px`, ...U, ...o.style }, onPointerDown: (E) => {
    Me || !Ce || (Se.current = /* @__PURE__ */ new Date(), Pe(pe.current), E.target.setPointerCapture(E.pointerId), E.target.tagName !== "BUTTON" && (me(!0), we.current = { x: E.clientX, y: E.clientY }));
  }, onPointerUp: () => {
    var E, L, A, se;
    if (J || !Ce) return;
    we.current = null;
    let ue = Number(((E = he.current) == null ? void 0 : E.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), _e = (/* @__PURE__ */ new Date()).getTime() - ((L = Se.current) == null ? void 0 : L.getTime()), Je = Math.abs(ue) / _e;
    if (Math.abs(ue) >= tr || Je > 0.11) {
      Pe(pe.current), (A = o.onDismiss) == null || A.call(o, o), be(), re(!0);
      return;
    }
    (se = he.current) == null || se.style.setProperty("--swipe-amount", "0px"), me(!1);
  }, onPointerMove: (E) => {
    var L;
    if (!we.current || !Ce) return;
    let A = E.clientY - we.current.y, se = E.clientX - we.current.x, ue = (De === "top" ? Math.min : Math.max)(0, A), _e = E.pointerType === "touch" ? 10 : 2;
    Math.abs(ue) > _e ? (L = he.current) == null || L.style.setProperty("--swipe-amount", `${A}px`) : Math.abs(se) > _e && (we.current = null);
  } }, nt && !o.jsx ? p.createElement("button", { "aria-label": ie, "data-disabled": Me, "data-close-button": !0, onClick: Me || !Ce ? () => {
  } : () => {
    var E;
    be(), (E = o.onDismiss) == null || E.call(o, o);
  }, className: S($ == null ? void 0 : $.closeButton, (i = o == null ? void 0 : o.classNames) == null ? void 0 : i.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, o.jsx || p.isValidElement(o.title) ? o.jsx || o.title : p.createElement(p.Fragment, null, ae || o.icon || o.promise ? p.createElement("div", { "data-icon": "", className: S($ == null ? void 0 : $.icon, (l = o == null ? void 0 : o.classNames) == null ? void 0 : l.icon) }, o.promise || o.type === "loading" && !o.icon ? o.icon || at() : null, o.type !== "loading" ? o.icon || (q == null ? void 0 : q[ae]) || zn(ae) : null) : null, p.createElement("div", { "data-content": "", className: S($ == null ? void 0 : $.content, (d = o == null ? void 0 : o.classNames) == null ? void 0 : d.content) }, p.createElement("div", { "data-title": "", className: S($ == null ? void 0 : $.title, (c = o == null ? void 0 : o.classNames) == null ? void 0 : c.title) }, o.title), o.description ? p.createElement("div", { "data-description": "", className: S(te, ze, $ == null ? void 0 : $.description, (u = o == null ? void 0 : o.classNames) == null ? void 0 : u.description) }, o.description) : null), p.isValidElement(o.cancel) ? o.cancel : o.cancel && qe(o.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: o.cancelButtonStyle || W, onClick: (E) => {
    var L, A;
    qe(o.cancel) && Ce && ((A = (L = o.cancel).onClick) == null || A.call(L, E), be());
  }, className: S($ == null ? void 0 : $.cancelButton, (h = o == null ? void 0 : o.classNames) == null ? void 0 : h.cancelButton) }, o.cancel.label) : null, p.isValidElement(o.action) ? o.action : o.action && qe(o.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: o.actionButtonStyle || G, onClick: (E) => {
    var L, A;
    qe(o.action) && (E.defaultPrevented || ((A = (L = o.action).onClick) == null || A.call(L, E), be()));
  }, className: S($ == null ? void 0 : $.actionButton, (m = o == null ? void 0 : o.classNames) == null ? void 0 : m.actionButton) }, o.action.label) : null));
};
function jt() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var sr = (e) => {
  let { invert: t, position: r = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: i, closeButton: l, className: d, offset: c, theme: u = "light", richColors: h, duration: m, style: y, visibleToasts: o = Gn, toastOptions: b, dir: C = jt(), gap: w = er, loadingIcon: k, icons: v, containerAriaLabel: x = "Notifications", pauseWhenPageIsHidden: I, cn: z = rr } = e, [R, V] = p.useState([]), B = p.useMemo(() => Array.from(new Set([r].concat(R.filter((T) => T.position).map((T) => T.position)))), [R, r]), [U, W] = p.useState([]), [G, F] = p.useState(!1), [te, j] = p.useState(!1), [H, M] = p.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), K = p.useRef(null), Q = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = p.useRef(null), q = p.useRef(!1), ie = p.useCallback((T) => {
    var S;
    (S = R.find((_) => _.id === T.id)) != null && S.delete || fe.dismiss(T.id), V((_) => _.filter(({ id: Z }) => Z !== T.id));
  }, [R]);
  return p.useEffect(() => fe.subscribe((T) => {
    if (T.dismiss) {
      V((S) => S.map((_) => _.id === T.id ? { ..._, delete: !0 } : _));
      return;
    }
    setTimeout(() => {
      dn.flushSync(() => {
        V((S) => {
          let _ = S.findIndex((Z) => Z.id === T.id);
          return _ !== -1 ? [...S.slice(0, _), { ...S[_], ...T }, ...S.slice(_ + 1)] : [T, ...S];
        });
      });
    });
  }), []), p.useEffect(() => {
    if (u !== "system") {
      M(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M("dark") : M("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: T }) => {
      M(T ? "dark" : "light");
    });
  }, [u]), p.useEffect(() => {
    R.length <= 1 && F(!1);
  }, [R]), p.useEffect(() => {
    let T = (S) => {
      var _, Z;
      s.every((le) => S[le] || S.code === le) && (F(!0), (_ = K.current) == null || _.focus()), S.code === "Escape" && (document.activeElement === K.current || (Z = K.current) != null && Z.contains(document.activeElement)) && F(!1);
    };
    return document.addEventListener("keydown", T), () => document.removeEventListener("keydown", T);
  }, [s]), p.useEffect(() => {
    if (K.current) return () => {
      $.current && ($.current.focus({ preventScroll: !0 }), $.current = null, q.current = !1);
    };
  }, [K.current]), R.length ? p.createElement("section", { "aria-label": `${x} ${Q}`, tabIndex: -1 }, B.map((T, S) => {
    var _;
    let [Z, le] = T.split("-");
    return p.createElement("ol", { key: T, dir: C === "auto" ? jt() : C, tabIndex: -1, ref: K, className: d, "data-sonner-toaster": !0, "data-theme": H, "data-y-position": Z, "data-x-position": le, style: { "--front-toast-height": `${((_ = U[0]) == null ? void 0 : _.height) || 0}px`, "--offset": typeof c == "number" ? `${c}px` : c || qn, "--width": `${Qn}px`, "--gap": `${w}px`, ...y }, onBlur: (X) => {
      q.current && !X.currentTarget.contains(X.relatedTarget) && (q.current = !1, $.current && ($.current.focus({ preventScroll: !0 }), $.current = null));
    }, onFocus: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || q.current || (q.current = !0, $.current = X.relatedTarget);
    }, onMouseEnter: () => F(!0), onMouseMove: () => F(!0), onMouseLeave: () => {
      te || F(!1);
    }, onPointerDown: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || j(!0);
    }, onPointerUp: () => j(!1) }, R.filter((X) => !X.position && S === 0 || X.position === T).map((X, xe) => {
      var me, J;
      return p.createElement(ar, { key: X.id, icons: v, index: xe, toast: X, defaultRichColors: h, duration: (me = b == null ? void 0 : b.duration) != null ? me : m, className: b == null ? void 0 : b.className, descriptionClassName: b == null ? void 0 : b.descriptionClassName, invert: t, visibleToasts: o, closeButton: (J = b == null ? void 0 : b.closeButton) != null ? J : l, interacting: te, position: T, style: b == null ? void 0 : b.style, unstyled: b == null ? void 0 : b.unstyled, classNames: b == null ? void 0 : b.classNames, cancelButtonStyle: b == null ? void 0 : b.cancelButtonStyle, actionButtonStyle: b == null ? void 0 : b.actionButtonStyle, removeToast: ie, toasts: R.filter((re) => re.position == X.position), heights: U.filter((re) => re.position == X.position), setHeights: W, expandByDefault: i, gap: w, loadingIcon: k, expanded: G, pauseWhenPageIsHidden: I, cn: z });
    }));
  })) : null;
};
function ea({ children: e }) {
  function t(r) {
    Xn.custom((s) => /* @__PURE__ */ a.jsx(In, { ...r }));
  }
  return /* @__PURE__ */ a.jsxs(Wt.Provider, { value: { showToast: t }, children: [
    /* @__PURE__ */ a.jsx(sr, {}),
    e
  ] });
}
export {
  fr as AlertContainer,
  mr as AlertContent,
  hr as AlertDescription,
  pr as AlertIcon,
  gr as AlertTitle,
  vr as Badge,
  Dr as BreadcrumbContainer,
  Br as BreadcrumbLink,
  jr as Button,
  br as Card,
  Sr as Checkbox,
  yr as Divider,
  Vr as DrawerContainer,
  Wr as DrawerHeader,
  Zr as DrawerProvider,
  Er as FormController,
  Rr as FormError,
  $r as FormLabel,
  Pr as IconButton,
  Tr as Input,
  Yr as ModalContainer,
  Ur as ModalFooter,
  Hr as ModalHeader,
  Qr as ModalProvider,
  Mr as Pagination,
  Kr as Popover,
  Or as RadioBox,
  Ir as RadioGroup,
  zr as Select,
  xr as Skeleton,
  Ar as TabButton,
  Lr as TabContainer,
  wr as TableBody,
  kr as TableCaption,
  Nr as TableContainer,
  Cr as TableFooter,
  _r as TableHeader,
  Fr as Textarea,
  In as Toast,
  ea as ToastProvider,
  Xr as Tooltip,
  Jr as useAutomation,
  Gr as useDrawer,
  qr as useModal,
  Pn as useScopedParams,
  On as useToast
};
