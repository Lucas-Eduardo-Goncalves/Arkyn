import p, { createContext as Ce, useContext as ye, Children as tn, useRef as Se, useId as nn, useState as ae, useEffect as Ze, forwardRef as an } from "react";
import { Info as ot, AlertTriangle as rn, XCircle as St, CheckCircle2 as Tt, Loader2 as $e, Check as Rt, ChevronDown as sn, ChevronRight as it, ChevronLeft as on, Ellipsis as xt, X as $t, AlertCircle as ln } from "lucide-react";
import { useActionData as Pt, useLocation as It, Link as cn, useNavigate as un } from "@remix-run/react";
import { InputMask as dn } from "@react-input/mask";
import { AnimatePresence as _t, motion as Ve } from "framer-motion";
import fn from "react-dom";
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
function hn() {
  if (wt) return Le;
  wt = 1;
  var e = p, t = Symbol.for("react.element"), a = Symbol.for("react.fragment"), s = Object.prototype.hasOwnProperty, i = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(c, u, m) {
    var h, v = {}, o = null, y = null;
    m !== void 0 && (o = "" + m), u.key !== void 0 && (o = "" + u.key), u.ref !== void 0 && (y = u.ref);
    for (h in u) s.call(u, h) && !l.hasOwnProperty(h) && (v[h] = u[h]);
    if (c && c.defaultProps) for (h in u = c.defaultProps, u) v[h] === void 0 && (v[h] = u[h]);
    return { $$typeof: t, type: c, key: o, ref: y, props: v, _owner: i.current };
  }
  return Le.Fragment = a, Le.jsx = d, Le.jsxs = d, Le;
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
var Ct;
function mn() {
  return Ct || (Ct = 1, process.env.NODE_ENV !== "production" && function() {
    var e = p, t = Symbol.for("react.element"), a = Symbol.for("react.portal"), s = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), c = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), o = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), k = Symbol.iterator, x = "@@iterator";
    function w(n) {
      if (n === null || typeof n != "object")
        return null;
      var f = k && n[k] || n[x];
      return typeof f == "function" ? f : null;
    }
    var b = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(n) {
      {
        for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), N = 1; N < f; N++)
          g[N - 1] = arguments[N];
        O("error", n, g);
      }
    }
    function O(n, f, g) {
      {
        var N = b.ReactDebugCurrentFrame, z = N.getStackAddendum();
        z !== "" && (f += "%s", g = g.concat([z]));
        var Y = g.map(function(F) {
          return String(F);
        });
        Y.unshift("Warning: " + f), Function.prototype.apply.call(console[n], console, Y);
      }
    }
    var _ = !1, R = !1, V = !1, D = !1, H = !1, W;
    W = Symbol.for("react.module.reference");
    function J(n) {
      return !!(typeof n == "string" || typeof n == "function" || n === s || n === l || H || n === i || n === m || n === h || D || n === y || _ || R || V || typeof n == "object" && n !== null && (n.$$typeof === o || n.$$typeof === v || n.$$typeof === d || n.$$typeof === c || n.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      n.$$typeof === W || n.getModuleId !== void 0));
    }
    function B(n, f, g) {
      var N = n.displayName;
      if (N)
        return N;
      var z = f.displayName || f.name || "";
      return z !== "" ? g + "(" + z + ")" : g;
    }
    function te(n) {
      return n.displayName || "Context";
    }
    function E(n) {
      if (n == null)
        return null;
      if (typeof n.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof n == "function")
        return n.displayName || n.name || null;
      if (typeof n == "string")
        return n;
      switch (n) {
        case s:
          return "Fragment";
        case a:
          return "Portal";
        case l:
          return "Profiler";
        case i:
          return "StrictMode";
        case m:
          return "Suspense";
        case h:
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
            return B(n, n.render, "ForwardRef");
          case v:
            var N = n.displayName || null;
            return N !== null ? N : E(n.type) || "Memo";
          case o: {
            var z = n, Y = z._payload, F = z._init;
            try {
              return E(F(Y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var U = Object.assign, M = 0, K, Q, $, q, ie, I, T;
    function j() {
    }
    j.__reactDisabledLog = !0;
    function Z() {
      {
        if (M === 0) {
          K = console.log, Q = console.info, $ = console.warn, q = console.error, ie = console.group, I = console.groupCollapsed, T = console.groupEnd;
          var n = {
            configurable: !0,
            enumerable: !0,
            value: j,
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
            log: U({}, n, {
              value: K
            }),
            info: U({}, n, {
              value: Q
            }),
            warn: U({}, n, {
              value: $
            }),
            error: U({}, n, {
              value: q
            }),
            group: U({}, n, {
              value: ie
            }),
            groupCollapsed: U({}, n, {
              value: I
            }),
            groupEnd: U({}, n, {
              value: T
            })
          });
        }
        M < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = b.ReactCurrentDispatcher, xe;
    function he(n, f, g) {
      {
        if (xe === void 0)
          try {
            throw Error();
          } catch (z) {
            var N = z.stack.trim().match(/\n( *(at )?)/);
            xe = N && N[1] || "";
          }
        return `
` + xe + n;
      }
    }
    var G = !1, re;
    {
      var ke = typeof WeakMap == "function" ? WeakMap : Map;
      re = new ke();
    }
    function Pe(n, f) {
      if (!n || G)
        return "";
      {
        var g = re.get(n);
        if (g !== void 0)
          return g;
      }
      var N;
      G = !0;
      var z = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Y;
      Y = X.current, X.current = null, Z();
      try {
        if (f) {
          var F = function() {
            throw Error();
          };
          if (Object.defineProperty(F.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(F, []);
            } catch (de) {
              N = de;
            }
            Reflect.construct(n, [], F);
          } else {
            try {
              F.call();
            } catch (de) {
              N = de;
            }
            n.call(F.prototype);
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
        G = !1, X.current = Y, le(), Error.prepareStackTrace = z;
      }
      var Fe = n ? n.displayName || n.name : "", Re = Fe ? he(Fe) : "";
      return typeof n == "function" && re.set(n, Re), Re;
    }
    function et(n, f, g) {
      return Pe(n, !1);
    }
    function We(n) {
      var f = n.prototype;
      return !!(f && f.isReactComponent);
    }
    function Te(n, f, g) {
      if (n == null)
        return "";
      if (typeof n == "function")
        return Pe(n, We(n));
      if (typeof n == "string")
        return he(n);
      switch (n) {
        case m:
          return he("Suspense");
        case h:
          return he("SuspenseList");
      }
      if (typeof n == "object")
        switch (n.$$typeof) {
          case u:
            return et(n.render);
          case v:
            return Te(n.type, f, g);
          case o: {
            var N = n, z = N._payload, Y = N._init;
            try {
              return Te(Y(z), f, g);
            } catch {
            }
          }
        }
      return "";
    }
    var me = Object.prototype.hasOwnProperty, Ye = {}, He = b.ReactDebugCurrentFrame;
    function se(n) {
      if (n) {
        var f = n._owner, g = Te(n.type, n._source, f ? f.type : null);
        He.setExtraStackFrame(g);
      } else
        He.setExtraStackFrame(null);
    }
    function Ne(n, f, g, N, z) {
      {
        var Y = Function.call.bind(me);
        for (var F in n)
          if (Y(n, F)) {
            var P = void 0;
            try {
              if (typeof n[F] != "function") {
                var ce = Error((N || "React class") + ": " + g + " type `" + F + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof n[F] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ce.name = "Invariant Violation", ce;
              }
              P = n[F](f, F, N, g, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ee) {
              P = ee;
            }
            P && !(P instanceof Error) && (se(z), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", N || "React class", g, F, typeof P), se(null)), P instanceof Error && !(P.message in Ye) && (Ye[P.message] = !0, se(z), C("Failed %s type: %s", g, P.message), se(null));
          }
      }
    }
    var tt = Array.isArray;
    function Oe(n) {
      return tt(n);
    }
    function Ie(n) {
      {
        var f = typeof Symbol == "function" && Symbol.toStringTag, g = f && n[Symbol.toStringTag] || n.constructor.name || "Object";
        return g;
      }
    }
    function nt(n) {
      try {
        return Be(n), !1;
      } catch {
        return !0;
      }
    }
    function Be(n) {
      return "" + n;
    }
    function _e(n) {
      if (nt(n))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ie(n)), Be(n);
    }
    var pe = b.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, we, ze, De;
    De = {};
    function Ke(n) {
      if (me.call(n, "ref")) {
        var f = Object.getOwnPropertyDescriptor(n, "ref").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.ref !== void 0;
    }
    function Xe(n) {
      if (me.call(n, "key")) {
        var f = Object.getOwnPropertyDescriptor(n, "key").get;
        if (f && f.isReactWarning)
          return !1;
      }
      return n.key !== void 0;
    }
    function at(n, f) {
      if (typeof n.ref == "string" && pe.current && f && pe.current.stateNode !== f) {
        var g = E(pe.current.type);
        De[g] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', E(pe.current.type), n.ref), De[g] = !0);
      }
    }
    function Me(n, f) {
      {
        var g = function() {
          we || (we = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
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
          ze || (ze = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", f));
        };
        g.isReactWarning = !0, Object.defineProperty(n, "ref", {
          get: g,
          configurable: !0
        });
      }
    }
    var rt = function(n, f, g, N, z, Y, F) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: n,
        key: f,
        ref: g,
        props: F,
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
        value: z
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function S(n, f, g, N, z) {
      {
        var Y, F = {}, P = null, ce = null;
        g !== void 0 && (_e(g), P = "" + g), Xe(f) && (_e(f.key), P = "" + f.key), Ke(f) && (ce = f.ref, at(f, z));
        for (Y in f)
          me.call(f, Y) && !Ue.hasOwnProperty(Y) && (F[Y] = f[Y]);
        if (n && n.defaultProps) {
          var ee = n.defaultProps;
          for (Y in ee)
            F[Y] === void 0 && (F[Y] = ee[Y]);
        }
        if (P || ce) {
          var ne = typeof n == "function" ? n.displayName || n.name || "Unknown" : n;
          P && Me(F, ne), ce && be(F, ne);
        }
        return rt(n, P, ce, z, N, pe.current, F);
      }
    }
    var L = b.ReactCurrentOwner, A = b.ReactDebugCurrentFrame;
    function oe(n) {
      if (n) {
        var f = n._owner, g = Te(n.type, n._source, f ? f.type : null);
        A.setExtraStackFrame(g);
      } else
        A.setExtraStackFrame(null);
    }
    var ue;
    ue = !1;
    function je(n) {
      return typeof n == "object" && n !== null && n.$$typeof === t;
    }
    function Ge() {
      {
        if (L.current) {
          var n = E(L.current.type);
          if (n)
            return `

Check the render method of \`` + n + "`.";
        }
        return "";
      }
    }
    function Ht(n) {
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
    function Ut(n) {
      {
        var f = Ge();
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
        var g = Ut(f);
        if (pt[g])
          return;
        pt[g] = !0;
        var N = "";
        n && n._owner && n._owner !== L.current && (N = " It was passed a child from " + E(n._owner.type) + "."), oe(n), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', g, N), oe(null);
      }
    }
    function vt(n, f) {
      {
        if (typeof n != "object")
          return;
        if (Oe(n))
          for (var g = 0; g < n.length; g++) {
            var N = n[g];
            je(N) && gt(N, f);
          }
        else if (je(n))
          n._store && (n._store.validated = !0);
        else if (n) {
          var z = w(n);
          if (typeof z == "function" && z !== n.entries)
            for (var Y = z.call(n), F; !(F = Y.next()).done; )
              je(F.value) && gt(F.value, f);
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
        f.$$typeof === v))
          g = f.propTypes;
        else
          return;
        if (g) {
          var N = E(f);
          Ne(g, n.props, "prop", N, n);
        } else if (f.PropTypes !== void 0 && !ue) {
          ue = !0;
          var z = E(f);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", z || "Unknown");
        }
        typeof f.getDefaultProps == "function" && !f.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(n) {
      {
        for (var f = Object.keys(n.props), g = 0; g < f.length; g++) {
          var N = f[g];
          if (N !== "children" && N !== "key") {
            oe(n), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", N), oe(null);
            break;
          }
        }
        n.ref !== null && (oe(n), C("Invalid attribute `ref` supplied to `React.Fragment`."), oe(null));
      }
    }
    var bt = {};
    function yt(n, f, g, N, z, Y) {
      {
        var F = J(n);
        if (!F) {
          var P = "";
          (n === void 0 || typeof n == "object" && n !== null && Object.keys(n).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ce = Ht(z);
          ce ? P += ce : P += Ge();
          var ee;
          n === null ? ee = "null" : Oe(n) ? ee = "array" : n !== void 0 && n.$$typeof === t ? (ee = "<" + (E(n.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof n, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, P);
        }
        var ne = S(n, f, g, z, Y);
        if (ne == null)
          return ne;
        if (F) {
          var ge = f.children;
          if (ge !== void 0)
            if (N)
              if (Oe(ge)) {
                for (var Fe = 0; Fe < ge.length; Fe++)
                  vt(ge[Fe], n);
                Object.freeze && Object.freeze(ge);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              vt(ge, n);
        }
        if (me.call(f, "key")) {
          var Re = E(n), de = Object.keys(f).filter(function(en) {
            return en !== "key";
          }), st = de.length > 0 ? "{key: someKey, " + de.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!bt[Re + st]) {
            var Qt = de.length > 0 ? "{" + de.join(": ..., ") + ": ...}" : "{}";
            C(`A props object containing a "key" prop is being spread into JSX:
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
    function Gt(n, f, g) {
      return yt(n, f, g, !0);
    }
    function Jt(n, f, g) {
      return yt(n, f, g, !1);
    }
    var qt = Jt, Zt = Gt;
    Ae.Fragment = s, Ae.jsx = qt, Ae.jsxs = Zt;
  }()), Ae;
}
process.env.NODE_ENV === "production" ? lt.exports = hn() : lt.exports = mn();
var r = lt.exports;
function pn(e) {
  const { className: t, ...a } = e, s = `arkynAlertTitle ${t}`;
  return /* @__PURE__ */ r.jsx("div", { className: s.trim(), ...a });
}
const Ft = Ce({});
function gn() {
  return ye(Ft);
}
function ma(e) {
  const { schema: t, children: a, className: s, ...i } = e, c = !((m) => {
    let h = !1;
    const v = (o) => {
      Array.isArray(o) ? o.forEach(v) : o && typeof o == "object" && "type" in o && (o.type === pn ? h = !0 : o.props && o.props.children && v(o.props.children));
    };
    return v(m), h;
  })(a) ? "nonExistsAlertTitle" : "existsAlertTitle", u = `arkynAlertContainer ${t} ${c} ${s}`;
  return /* @__PURE__ */ r.jsx(Ft.Provider, { value: e, children: /* @__PURE__ */ r.jsx("div", { className: u.trim(), ...i, children: a }) });
}
function pa(e) {
  const { className: t, ...a } = e, s = `arkynAlertContent ${t}`;
  return /* @__PURE__ */ r.jsx("div", { className: s.trim(), ...a });
}
function ga(e) {
  const { className: t, ...a } = e, s = `arkynAlertDescription ${t}`;
  return /* @__PURE__ */ r.jsx("div", { className: s.trim(), ...a });
}
function va(e) {
  const { className: t, ...a } = e, { schema: s } = gn(), i = `arkynAlertIcon ${s} ${t}`;
  switch (s) {
    case "success":
      return /* @__PURE__ */ r.jsx(Tt, { className: i, ...a });
    case "danger":
      return /* @__PURE__ */ r.jsx(St, { className: i, ...a });
    case "warning":
      return /* @__PURE__ */ r.jsx(rn, { className: i, ...a });
    case "info":
      return /* @__PURE__ */ r.jsx(ot, { className: i, ...a });
  }
}
function Qe(e, t) {
  return t ? /* @__PURE__ */ r.jsx(t, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ r.jsx(r.Fragment, {});
}
function Ot(e, t) {
  return [...new Array(t - e)].map((a, s) => e + s + 1).filter((a) => a > 0);
}
function vn(e, t, a) {
  return e >= a ? [] : Ot(e, e + t);
}
function bn(e, t) {
  return e <= 1 ? [] : Ot(e - 1 - t, e - 1);
}
function yn(e, t, a) {
  if (!e) return /* @__PURE__ */ r.jsx(r.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ r.jsx("p", { className: a, children: e });
  const s = e;
  return /* @__PURE__ */ r.jsx("p", { className: a, children: /* @__PURE__ */ r.jsx(s, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function ba(e) {
  const {
    variant: t = "ghost",
    scheme: a = "primary",
    size: s = "md",
    leftIcon: i,
    rightIcon: l,
    className: d = "",
    children: c,
    ...u
  } = e, h = { md: 12, lg: 14 }[s], v = `arkynBadge ${t} ${a} ${s} ${d}`;
  return /* @__PURE__ */ r.jsxs("div", { className: v.trim(), ...u, children: [
    Qe(h, i),
    c,
    Qe(h, i)
  ] });
}
function ya(e) {
  const { className: t, ...a } = e, s = `arkynCard ${t}`;
  return /* @__PURE__ */ r.jsx("div", { className: s.trim(), ...a });
}
function xa(e) {
  const {
    className: t,
    orientation: a = "horizontal",
    ...s
  } = e, i = `arkynDivider ${a} ${t}`;
  return /* @__PURE__ */ r.jsx("div", { className: i.trim(), ...s });
}
function wa(e) {
  const { className: t, ...a } = e, s = `arkynSkeleton ${t}`;
  return /* @__PURE__ */ r.jsx("aside", { className: s.trim(), ...a });
}
function Ca(e) {
  const {
    emptyMessage: t = "Nenhum dado adicionado.",
    className: a,
    children: s,
    ...i
  } = e, l = `arkynTableBody ${a}`, d = tn.count(s) === 0;
  return /* @__PURE__ */ r.jsx("tbody", { className: l.trim(), ...i, children: d ? /* @__PURE__ */ r.jsx("tr", { className: "arkynTableBodyEmptyLine", children: /* @__PURE__ */ r.jsx("td", { colSpan: 100, children: /* @__PURE__ */ r.jsx("div", { children: t }) }) }) : s });
}
function ka(e) {
  const { className: t, children: a, ...s } = e, i = `arkynTableCaption ${t}`;
  return /* @__PURE__ */ r.jsx("caption", { className: i.trim(), ...s, children: /* @__PURE__ */ r.jsx("div", { className: "arkynTableCaptionContent", children: a }) });
}
function Na(e) {
  const { children: t, className: a, ...s } = e, i = `arkynTableContainer ${a}`;
  return /* @__PURE__ */ r.jsx("div", { className: i.trim(), ...s, children: /* @__PURE__ */ r.jsx("table", { children: t }) });
}
function ja(e) {
  const { className: t, children: a, ...s } = e, i = `arkynTableFooter ${t}`;
  return /* @__PURE__ */ r.jsxs("tfoot", { className: i.trim(), ...s, children: [
    /* @__PURE__ */ r.jsx("tr", { className: "spacingRow" }),
    /* @__PURE__ */ r.jsx("tr", { children: /* @__PURE__ */ r.jsx("th", { colSpan: 100, children: /* @__PURE__ */ r.jsx("div", { className: "arkynTableFooterContent", children: a }) }) })
  ] });
}
function Ea(e) {
  const { className: t, children: a, ...s } = e, i = `arkynTableHeader ${t}`;
  return /* @__PURE__ */ r.jsxs("thead", { className: i.trim(), ...s, children: [
    /* @__PURE__ */ r.jsx("tr", { children: a }),
    /* @__PURE__ */ r.jsx("tr", { className: "spacingRow" })
  ] });
}
function Sa(e) {
  const {
    isLoading: t = !1,
    scheme: a = "primary",
    variant: s = "solid",
    loadingText: i,
    size: l = "md",
    leftIcon: d,
    rightIcon: c,
    disabled: u,
    className: m = "",
    children: h,
    ...v
  } = e, y = { xs: 12, sm: 16, md: 20, lg: 24 }[l], w = `arkynButton ${t ? "loadingTrue" : "loadingFalse"} ${s} ${a} ${l} ${i ? "loadingTextTrue" : "loadingTextFalse"} ${m}`;
  return /* @__PURE__ */ r.jsxs("button", { className: w, disabled: u || t, ...v, children: [
    /* @__PURE__ */ r.jsxs("div", { className: "arkynButtonSpinner", children: [
      /* @__PURE__ */ r.jsx($e, { size: y, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: "arkynButtonContent", children: [
      Qe(y, d),
      h,
      Qe(y, c)
    ] })
  ] });
}
const Bt = Ce({});
function Ta(e) {
  var h, v;
  const t = Pt(), { children: a, className: s, ...i } = e, l = Se(null), d = ((h = l.current) == null ? void 0 : h.name) || "", c = ((v = t == null ? void 0 : t.fieldErrors) == null ? void 0 : v[d]) || null, u = nn(), m = `arkynFormController ${s}`;
  return /* @__PURE__ */ r.jsx(Bt.Provider, { value: { error: c, id: u, inputRef: l }, children: /* @__PURE__ */ r.jsx("section", { className: m.trim(), ...i, children: a }) });
}
function ve() {
  return ye(Bt);
}
function Ra(e) {
  const {
    name: t,
    className: a = "",
    size: s = "md",
    isError: i,
    defaultChecked: l = !1,
    checked: d = null,
    onCheck: c,
    value: u,
    ...m
  } = e, { id: h, inputRef: v, error: o } = ve(), y = i || !!o, [k, x] = ae(l || !1), w = typeof d == "boolean" ? d : k, O = `arkynCheckbox ${s} ${y ? "errorTrue" : "errorFalse"} ${w ? "checkedTrue" : "checkedFalse"} ${a}`;
  function _() {
    const R = k;
    x(!R), c && c(R ? "" : u || "checked");
  }
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      id: h,
      type: "button",
      className: O,
      onClick: _,
      ...m,
      children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "hidden",
            name: t,
            ref: v,
            value: w ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ r.jsx(Rt, {})
      ]
    }
  );
}
function $a(e) {
  const { children: t, className: a, ...s } = e, i = `arkynFormError ${a}`, { error: l } = ve();
  return t ? /* @__PURE__ */ r.jsx("strong", { className: i.trim(), ...s, children: t }) : l ? /* @__PURE__ */ r.jsx("strong", { className: i.trim(), ...s, children: l }) : /* @__PURE__ */ r.jsx(r.Fragment, {});
}
function Pa(e) {
  const {
    showAsterisk: t = !1,
    className: a = "",
    ...s
  } = e, { id: i } = ve(), d = `arkynFormLabel ${t ? "asteriskTrue" : "asteriskFalse"} ${a}`;
  return /* @__PURE__ */ r.jsx("label", { className: d.trim(), htmlFor: i, ...s });
}
function Ia(e) {
  const {
    isLoading: t = !1,
    scheme: a = "primary",
    variant: s = "solid",
    size: i = "md",
    icon: l,
    disabled: d,
    className: c = "",
    ...u
  } = e, m = { xs: 12, sm: 16, md: 20, lg: 24 }, v = `arkynIconButton ${s} ${a} ${i} ${t ? "loadingTrue" : "loadingFalse"} ${c}`;
  return /* @__PURE__ */ r.jsxs(
    "button",
    {
      disabled: d || t,
      className: v.trim(),
      ...u,
      children: [
        /* @__PURE__ */ r.jsx("div", { className: "arkynIconButtonSpinner", children: /* @__PURE__ */ r.jsx($e, { size: m[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ r.jsx("div", { className: "arkynIconButtonContent", children: /* @__PURE__ */ r.jsx(l, { size: m[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ee(e, t, a) {
  if (!e) return /* @__PURE__ */ r.jsx(r.Fragment, {});
  if (typeof e == "string") return /* @__PURE__ */ r.jsx("p", { className: a, children: e });
  const s = e;
  return /* @__PURE__ */ r.jsx("p", { className: a, children: /* @__PURE__ */ r.jsx(s, { color: "var(--secondary-600)", size: t, strokeWidth: 2.5 }) });
}
function ft(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function zt(e, t) {
  let a = "", s = 0;
  return Array.from(e).forEach((i, l) => {
    t[l + s].match(/[0-9]/) || (a += t[l + s], s++), a += i;
  }), a;
}
function Dt(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const ht = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Mt = ft(ht.CNPJ).length;
function xn(e, t) {
  const {
    isLoading: a,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: v,
    defaultValue: o,
    readOnly: y,
    onFocus: k,
    onBlur: x,
    title: w,
    style: b,
    onChange: C,
    ...O
  } = e;
  function _(U) {
    let M = ft(U);
    const K = Dt(M);
    if (!(M.length > Mt))
      return M = zt(M, ht[K]), M;
  }
  const R = h ? "right" : "left", B = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${v || y || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, E = { md: 20, lg: 20 }[i];
  return {
    isLoading: a,
    className: B,
    prefix: Ee(c, E, "prefix"),
    sufix: Ee(u, E, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    defaultValue: _(o || ""),
    disabled: v,
    readOnly: y,
    onFocus: k,
    onBlur: x,
    title: w,
    style: b,
    onChange: C,
    loadingPosition: R,
    iconSize: E,
    Spinner: /* @__PURE__ */ r.jsx($e, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ...O
  };
}
function wn(e) {
  const [t, a] = ae(!1), s = Se(null), { inputRef: i, id: l, error: d } = ve(), c = i || s, u = e.isError || !!d, {
    disabled: m,
    title: h,
    style: v,
    className: o,
    prefix: y,
    sufix: k,
    iconSize: x,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: C,
    readOnly: O,
    onFocus: _,
    onBlur: R,
    RightIcon: V,
    Spinner: D,
    onChange: H,
    value: W,
    defaultValue: J,
    ...B
  } = xn({ ...e, id: l, isError: u }, t), [te, E] = ae(J), U = C && !b, M = V && !b, K = w === "left" && b, Q = w === "right" && b;
  function $() {
    m || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function q(T) {
    let j = ft(T.target.value);
    const Z = Dt(j);
    j.length > Mt || (j = zt(j, ht[Z]), T.target.value = j, E(j), H && H(T));
  }
  function ie(T) {
    a(!0), _ && _(T);
  }
  function I(T) {
    a(!1), R && R(T);
  }
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      title: h,
      style: v,
      onClick: $,
      className: o,
      children: [
        y,
        K && D,
        U && /* @__PURE__ */ r.jsx(C, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            disabled: m || b,
            readOnly: O,
            ref: c,
            value: W || te,
            onFocus: ie,
            onChange: q,
            onBlur: I,
            ...B
          }
        ),
        M && /* @__PURE__ */ r.jsx(V, { size: x, strokeWidth: 2.5 }),
        Q && D,
        k
      ]
    }
  );
}
const Cn = 3, kn = (e = "pt-BR", t, a = "BRL", s = !0) => new Intl.NumberFormat(e, {
  style: "currency",
  currency: a,
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(t).slice(s ? Cn : 0), Je = 2, kt = (e) => typeof e == "number" ? e : Number(e.toString().replace(/[^0-9-]/g, "")), ct = (e) => {
  let t = e;
  return typeof e == "string" ? (t = kt(e), t % 1 !== 0 && (t = t.toFixed(Je))) : t = Number.isInteger(e) ? Number(e) * 10 ** Je : e.toFixed(Je), kt(t) / 10 ** Je;
}, Nt = (e, t, a) => {
  if (!t) return [0, ""];
  const s = ct(t), i = kn(e, s, a);
  return [s, i];
};
function Nn(e, t) {
  const {
    isLoading: a,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: v,
    readOnly: o,
    onFocus: y,
    onBlur: k,
    title: x,
    style: w,
    // showCents = false,
    max: b = 1e9,
    locale: C = "pt-BR",
    currency: O = "BRL",
    ..._
  } = e, R = h ? "right" : "left", B = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${v || o || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, E = { md: 20, lg: 20 }[i];
  return {
    isLoading: a,
    className: B,
    prefix: Ee(c, E, "prefix"),
    sufix: Ee(u, E, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: v,
    locale: C,
    currency: O,
    readOnly: o,
    onFocus: y,
    onBlur: k,
    title: x,
    style: w,
    max: b,
    // showCents,
    loadingPosition: R,
    iconSize: E,
    Spinner: /* @__PURE__ */ r.jsx($e, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ..._
  };
}
function jn(e) {
  const [t, a] = ae(!1), [s, i] = ae("0"), l = Se(null), { inputRef: d, id: c, error: u } = ve(), m = d || l, h = e.isError || !!u, {
    disabled: v,
    title: o,
    style: y,
    className: k,
    prefix: x,
    sufix: w,
    iconSize: b,
    loadingPosition: C,
    isLoading: O,
    LeftIcon: _,
    readOnly: R,
    onFocus: V,
    onBlur: D,
    RightIcon: H,
    Spinner: W,
    value: J,
    max: B,
    onChangeValue: te,
    onKeyPress: E,
    currency: U,
    locale: M,
    name: K,
    defaultValue: Q,
    ...$
  } = Nn({ ...e, id: c, isError: h }, t), q = _ && !O, ie = H && !O, I = C === "left" && O, T = C === "right" && O;
  function j() {
    v || !(m != null && m.current) || (a(!0), m.current.focus());
  }
  function Z(G) {
    a(!0), V && V(G);
  }
  function le(G) {
    a(!1), D && D(G);
  }
  const X = (G) => {
    const [re, ke] = Nt(
      M,
      G,
      U
    );
    return !B || re <= B ? (i(ke), [re, ke]) : [ct(s), s];
  }, xe = (G) => {
    G.preventDefault();
    const [re, ke] = X(G.target.value);
    te(G, String(re), String(ke));
  }, he = (G) => E && E(G, G.key, G.key);
  return Ze(() => {
    const G = J || +Q * 100 || void 0, [, re] = Nt(M, G, U);
    i(re);
  }, [U, Q, J]), /* @__PURE__ */ r.jsxs(
    "section",
    {
      title: o,
      style: y,
      onClick: j,
      className: k,
      children: [
        x,
        I && W,
        q && /* @__PURE__ */ r.jsx(_, { size: b, strokeWidth: 2.5 }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            value: s,
            onChange: xe,
            onBlur: le,
            onFocus: Z,
            onKeyUp: he,
            disabled: v || O,
            readOnly: R,
            ...$
          }
        ),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "hidden",
            ref: m,
            name: K,
            value: ct(s)
          }
        ),
        T && W,
        ie && /* @__PURE__ */ r.jsx(H, { size: b, strokeWidth: 2.5 }),
        w
      ]
    }
  );
}
function En(e, t) {
  const {
    isLoading: a,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: v,
    readOnly: o,
    onFocus: y,
    onBlur: k,
    title: x,
    style: w,
    onChange: b,
    showMask: C = !1,
    type: O,
    ..._
  } = e, R = h ? "right" : "left", B = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${v || o || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, E = { md: 20, lg: 20 }[i];
  return {
    isLoading: a,
    className: B,
    prefix: Ee(c, E, "prefix"),
    sufix: Ee(u, E, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: v,
    readOnly: o,
    onFocus: y,
    onBlur: k,
    title: x,
    style: w,
    onChange: b,
    loadingPosition: R,
    iconSize: E,
    showMask: C,
    Spinner: /* @__PURE__ */ r.jsx($e, { className: "spinner", size: E, strokeWidth: 2.5 }),
    ..._
  };
}
const Sn = an((e, t) => /* @__PURE__ */ r.jsx("input", { ref: t, ...e }));
function Tn(e) {
  const [t, a] = ae(!1), s = Se(null), { inputRef: i, id: l, error: d } = ve(), c = i || s, u = e.isError || !!d, {
    disabled: m,
    title: h,
    style: v,
    className: o,
    prefix: y,
    sufix: k,
    iconSize: x,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: C,
    readOnly: O,
    onFocus: _,
    onBlur: R,
    RightIcon: V,
    Spinner: D,
    ...H
  } = En({ ...e, id: l, isError: u }, t), W = C && !b, J = V && !b, B = w === "left" && b, te = w === "right" && b;
  function E() {
    m || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function U(K) {
    a(!0), _ && _(K);
  }
  function M(K) {
    a(!1), R && R(K);
  }
  return /* @__PURE__ */ r.jsxs(
    "section",
    {
      title: h,
      style: v,
      onClick: E,
      className: o,
      children: [
        y,
        B && D,
        W && /* @__PURE__ */ r.jsx(C, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ r.jsx(
          dn,
          {
            component: Sn,
            ref: c,
            onFocus: U,
            onBlur: M,
            disabled: m,
            ...H
          }
        ),
        J && /* @__PURE__ */ r.jsx(V, { size: x, strokeWidth: 2.5 }),
        te && D,
        k
      ]
    }
  );
}
function Rn(e, t) {
  const {
    isLoading: a,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    sufix: u,
    leftIcon: m,
    rightIcon: h,
    disabled: v,
    readOnly: o,
    onFocus: y,
    onBlur: k,
    title: x,
    style: w,
    onChange: b,
    ...C
  } = e, O = h ? "right" : "left", W = `arkyn_input ${c ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${d} ${i} ${v || o || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, B = { md: 20, lg: 20 }[i];
  return {
    isLoading: a,
    className: W,
    prefix: Ee(c, B, "prefix"),
    sufix: Ee(u, B, "sufix"),
    LeftIcon: m,
    RightIcon: h,
    disabled: v,
    readOnly: o,
    onFocus: y,
    onBlur: k,
    title: x,
    style: w,
    onChange: b,
    loadingPosition: O,
    iconSize: B,
    Spinner: /* @__PURE__ */ r.jsx($e, { className: "spinner", size: B, strokeWidth: 2.5 }),
    ...C
  };
}
function $n(e) {
  const [t, a] = ae(!1), s = Se(null), { inputRef: i, id: l, error: d } = ve(), c = i || s, u = e.isError || !!d, {
    disabled: m,
    title: h,
    style: v,
    className: o,
    prefix: y,
    sufix: k,
    iconSize: x,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: C,
    readOnly: O,
    onFocus: _,
    onBlur: R,
    RightIcon: V,
    type: D,
    Spinner: H,
    ...W
  } = Rn({ ...e, id: l, isError: u }, t), J = C && !b, B = V && !b, te = w === "left" && b, E = w === "right" && b;
  function U() {
    m || !(c != null && c.current) || (a(!0), c.current.focus());
  }
  function M(Q) {
    a(!0), _ && _(Q);
  }
  function K(Q) {
    a(!1), R && R(Q);
  }
  return D === "hidden" ? /* @__PURE__ */ r.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: c,
      ...W
    }
  ) : /* @__PURE__ */ r.jsxs(
    "section",
    {
      title: h,
      style: v,
      onClick: U,
      className: o,
      children: [
        y,
        te && H,
        J && /* @__PURE__ */ r.jsx(C, { size: x, strokeWidth: 2.5 }),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            disabled: m || b,
            readOnly: O,
            ref: c,
            onFocus: M,
            onBlur: K,
            type: D,
            ...W
          }
        ),
        B && /* @__PURE__ */ r.jsx(V, { size: x, strokeWidth: 2.5 }),
        E && H,
        k
      ]
    }
  );
}
function _a(e) {
  return e.type === "currency" ? /* @__PURE__ */ r.jsx(jn, { ...e }) : e.type === "masked" ? /* @__PURE__ */ r.jsx(Tn, { ...e }) : e.type === "cpf-cnpj" ? /* @__PURE__ */ r.jsx(wn, { ...e }) : /* @__PURE__ */ r.jsx($n, { ...e });
}
const Lt = Ce({});
function Pn() {
  return ye(Lt);
}
function Fa(e) {
  const {
    defaultValue: t,
    name: a,
    value: s,
    onChange: i,
    size: l = "md",
    className: d = "",
    ...c
  } = e, [u, m] = ae(t || ""), { inputRef: h, id: v } = ve();
  function o(k) {
    m(k), i && i(k);
  }
  const y = `arkynRadioGroup ${l} ${d}`;
  return /* @__PURE__ */ r.jsxs(
    Lt.Provider,
    {
      value: { onChange: o, value: s || u, size: l },
      children: [
        /* @__PURE__ */ r.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: v,
            readOnly: !0,
            name: a,
            ref: h,
            value: s || u
          }
        ),
        /* @__PURE__ */ r.jsx("div", { className: y.trim(), ...c })
      ]
    }
  );
}
function Oa(e) {
  const {
    value: t,
    size: a,
    disabled: s,
    children: i,
    className: l = "",
    ...d
  } = e, { onChange: c, size: u, value: m } = Pn(), { error: h } = ve(), x = `arkynRadioBox ${a || u} ${m === t ? "checkedTrue" : "checkedFalse"} ${h ? "errorTrue" : "errorFalse"} ${s ? "disabledTrue" : "disabledFalse"} ${l}`;
  return /* @__PURE__ */ r.jsxs("label", { className: x.trim(), children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        disabled: s,
        onClick: () => c(t),
        onFocus: () => c(t),
        ...d
      }
    ),
    i
  ] });
}
function In(e, t) {
  const {
    isLoading: a,
    isError: s,
    size: i = "md",
    className: l = "",
    variant: d = "solid",
    prefix: c,
    leftIcon: u,
    disabled: m,
    readOnly: h,
    onFocus: v,
    onBlur: o,
    title: y,
    style: k,
    closeOnSelect: x = !0,
    ...w
  } = e, R = `arkyn_select ${c ? "hasPrefix" : ""} ${d} ${i} ${m || h || a ? "opacity" : ""} ${s ? "errored" : ""} ${t ? "focused" : ""} ${l}`, D = { md: 20, lg: 20 }[i];
  return {
    isLoading: a,
    className: R,
    prefix: yn(c, D, "prefix"),
    LeftIcon: u,
    disabled: m || a || h,
    onFocus: v,
    onBlur: o,
    title: y,
    closeOnSelect: x,
    style: k,
    iconSize: D,
    Spinner: /* @__PURE__ */ r.jsx($e, { className: "spinner", size: D, strokeWidth: 2.5 }),
    ...w
  };
}
function Ba(e) {
  var T;
  const [t, a] = ae(!1), { inputRef: s, id: i, error: l } = ve(), d = Se(null), c = s || d, u = e.isError || !!l, {
    disabled: m,
    title: h,
    style: v,
    className: o,
    prefix: y,
    iconSize: k,
    isLoading: x,
    LeftIcon: w,
    value: b = null,
    defaultValue: C = "",
    onFocus: O,
    onBlur: _,
    Spinner: R,
    name: V,
    placeholder: D,
    onSelect: H,
    options: W,
    optionMaxHeight: J,
    closeOnSelect: B,
    ...te
  } = In({ ...e, id: i, isError: u }, t), [E, U] = ae(C);
  function M() {
    m || !(c != null && c.current) || t || (a(!0), c.current.focus());
  }
  function K(j) {
    t || (a(!0), O && O(j));
  }
  function Q() {
    a(!1), _ && c.current && c.current.blur();
  }
  function $(j) {
    const { label: Z, value: le } = j;
    U(E !== le ? le : ""), H && H({ label: Z, value: le }), B && Q();
  }
  const q = typeof b == "string" ? b : E, ie = ((T = W.find((j) => j.value === q)) == null ? void 0 : T.label) || "", I = () => {
    if (!t && ie) return !0;
    if (!t && !ie) return !1;
    if (t && ie) return !0;
    if (t && !ie) return !1;
  };
  return /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
    /* @__PURE__ */ r.jsxs(
      "section",
      {
        title: h,
        style: v,
        onClick: M,
        className: `${o} placeholder_dark_${I()}`,
        children: [
          y,
          w && /* @__PURE__ */ r.jsx(w, { size: k, strokeWidth: 2.5 }),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              disabled: m,
              readOnly: !0,
              placeholder: ie || D,
              onFocus: K,
              ...te
            }
          ),
          /* @__PURE__ */ r.jsx(
            "input",
            {
              type: "hidden",
              ref: c,
              name: V,
              value: q || "",
              readOnly: !0
            }
          ),
          t && /* @__PURE__ */ r.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: J },
              children: [
                W.map(({ label: j, value: Z }) => /* @__PURE__ */ r.jsxs(
                  "div",
                  {
                    onClick: () => $({ label: j, value: Z }),
                    className: q === Z ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      j,
                      " ",
                      /* @__PURE__ */ r.jsx(Rt, {})
                    ]
                  },
                  Z
                )),
                W.length <= 0 && /* @__PURE__ */ r.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !x && /* @__PURE__ */ r.jsx(
            sn,
            {
              className: "arkyn_select_arrow",
              size: k,
              strokeWidth: 2.5
            }
          ),
          x && R
        ]
      }
    ),
    t && /* @__PURE__ */ r.jsx("aside", { className: "arkyn_select_overlay", onClick: Q })
  ] });
}
function za(e) {
  const {
    size: t = "lg",
    defaultChecked: a = !1,
    checked: s = null,
    value: i,
    name: l,
    className: d = "",
    onCheck: c,
    ...u
  } = e, [m, h] = ae(a), { id: v, inputRef: o } = ve();
  function y() {
    h(!m), c && c(a ? "" : i || "checked");
  }
  const k = typeof s == "boolean" ? s : m, w = `arkynSwitch ${k ? "checkedTrue" : "checkedFalse"} ${t} ${d}`;
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      id: v,
      type: "button",
      onClick: y,
      className: w,
      ...u,
      children: /* @__PURE__ */ r.jsx(
        "input",
        {
          type: "hidden",
          name: l,
          ref: o,
          value: k ? i || "checked" : ""
        }
      )
    }
  );
}
function Da(e) {
  const {
    variant: t = "solid",
    size: a = "md",
    className: s,
    disabled: i = !1,
    readOnly: l = !1,
    onFocus: d,
    onBlur: c,
    title: u,
    style: m,
    ...h
  } = e, [v, o] = ae(!1), { inputRef: y, id: k, error: x } = ve(), w = Se(null), b = y || w, O = e.isError || !!x ? "errorTrue" : "errorFalse", V = `arkynTextarea ${t} ${a} ${i || l ? "opacityTrue" : "opacityFalse"} ${O} ${v ? "focusedTrue" : "focusedFalse"} ${s}`;
  function D() {
    i || !(b != null && b.current) || (o(!0), b.current.focus());
  }
  function H(J) {
    o(!0), d && d(J);
  }
  function W(J) {
    o(!1), c && c(J);
  }
  return /* @__PURE__ */ r.jsx(
    "section",
    {
      title: u,
      style: m,
      onClick: D,
      className: V,
      children: /* @__PURE__ */ r.jsx(
        "textarea",
        {
          id: k,
          disabled: i,
          readOnly: l,
          ref: b,
          onFocus: H,
          onBlur: W,
          ...h
        }
      )
    }
  );
}
function Ma(e) {
  const { className: t = "", ...a } = e, s = `arkynBreadcrumbContainer ${t}`;
  return /* @__PURE__ */ r.jsx("nav", { className: s, ...a });
}
function La(e) {
  const { pathname: t } = It(), {
    className: a = "",
    disabled: s = !1,
    children: i,
    to: l,
    ...d
  } = e, u = `arkynBreadcrumbLink ${t === l ? "active" : "inactive"} ${a}`;
  return s ? /* @__PURE__ */ r.jsxs("p", { className: u, children: [
    /* @__PURE__ */ r.jsx(it, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ r.jsxs(cn, { to: l, className: u, ...d, children: [
    /* @__PURE__ */ r.jsx(it, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function _n(e = "") {
  const t = It(), a = new URLSearchParams(t.search), s = e ? `${e}:` : "", i = (l) => {
    Object.entries(l).forEach(([d, c]) => {
      c === void 0 ? a.delete(`${s}${d}`) : a.set(`${s}${d}`, String(c));
    });
  };
  return {
    getParam: (l) => a.get(`${s}${l}`),
    getScopedSearch: (l) => {
      i(l);
      let d = a.toString();
      return d && (d = "?" + d), d;
    }
  };
}
function Aa(e) {
  const {
    scope: t,
    totalCountRegisters: a,
    perPageKey: s = "per_page",
    pageKey: i = "page",
    siblingsCount: l = 2,
    ...d
  } = e, c = un(), { getParam: u, getScopedSearch: m } = _n(t), h = Number(u(i)) || 1, v = Number(u(s)) || 20, o = Math.ceil(a / v), y = bn(h, l), k = vn(h, l, o);
  function x(w) {
    c(m({ page: w }));
  }
  return /* @__PURE__ */ r.jsxs("div", { className: "arkynPagination", ...d, children: [
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: h <= 1,
        onClick: () => x(h - 1),
        children: /* @__PURE__ */ r.jsx(on, {})
      }
    ),
    h > 1 + l && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => x(1),
          children: "1"
        }
      ),
      h > 2 + l && /* @__PURE__ */ r.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ r.jsx(xt, {}) })
    ] }),
    y.map((w, b) => /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => x(w),
        className: "arkynPaginationPageButton",
        children: w
      },
      b
    )),
    /* @__PURE__ */ r.jsx("button", { className: "arkynPaginationCurrent", disabled: !0, children: h }),
    k.map((w, b) => /* @__PURE__ */ r.jsx(
      "button",
      {
        onClick: () => x(w),
        className: "arkynPaginationPageButton",
        children: w
      },
      b
    )),
    h + l < o && /* @__PURE__ */ r.jsxs(r.Fragment, { children: [
      h + 1 + l < o && /* @__PURE__ */ r.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ r.jsx(xt, {}) }),
      /* @__PURE__ */ r.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => x(o),
          children: o
        }
      )
    ] }),
    /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: h >= o,
        onClick: () => x(h + 1),
        children: /* @__PURE__ */ r.jsx(it, {})
      }
    )
  ] });
}
const ut = Ce({});
function Fn() {
  if (!ut)
    throw new Error("useTabContext must be used within a TabProvider");
  return ye(ut);
}
function Va(e) {
  const {
    children: t,
    onClick: a,
    defaultActive: s,
    className: i,
    ...l
  } = e, [d, c] = ae(s || ""), [u, m] = ae(!0), h = Se(null), v = `arkynTabContainer ${i || ""}`, [o, y] = ae({
    width: "0px",
    left: "0px",
    transition: "none"
  }), k = (w, b) => {
    const C = w.getBoundingClientRect(), O = h.current.getBoundingClientRect(), _ = b ? void 0 : "none";
    m(!1), y({
      transition: _,
      width: `${C.width}px`,
      left: `${C.left - O.left}px`
    });
  };
  Ze(() => {
    const w = h.current;
    if (!w) return;
    let b = null;
    b = w.querySelector("button.active"), b && k(b);
  }, []);
  const x = (w) => {
    const b = w.target;
    b && (c(b.value), b.classList.add("active"), k(b, !0), a && a(b.value));
  };
  return /* @__PURE__ */ r.jsxs("nav", { ref: h, className: v.trim(), ...l, children: [
    /* @__PURE__ */ r.jsx(ut.Provider, { value: { handleTabClick: x, showInitialTab: u, value: d }, children: t }),
    /* @__PURE__ */ r.jsx("div", { className: "activeLine", style: o })
  ] });
}
function Wa(e) {
  const { children: t, className: a = "", onClick: s, ...i } = e, { value: l, showInitialTab: d, handleTabClick: c } = Fn(), u = l === i.value && l ? "activeTrue" : "activeFalse", h = `arkynTabButton ${l === i.value && d ? "showBorderBottom" : ""} ${u} ${a}`;
  function v(o) {
    c(o), s && s(o);
  }
  return /* @__PURE__ */ r.jsx("button", { onClick: v, className: h.trim(), ...i, children: t });
}
const At = Ce({});
function Ya(e) {
  const {
    isVisibled: t,
    makeInvisible: a,
    orientation: s = "left",
    children: i,
    className: l,
    ...d
  } = e, c = s === "left" ? "-100%" : "100%", m = `arkynDrawerContainer ${s} ${t ? "visibleTrue" : "visibleFalse"} ${l}`;
  return /* @__PURE__ */ r.jsx(At.Provider, { value: { makeInvisible: a }, children: /* @__PURE__ */ r.jsx(_t, { children: t && /* @__PURE__ */ r.jsxs("aside", { className: m.trim(), ...d, children: [
    /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        className: "arkynDrawerContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: a
      }
    ),
    /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        className: "arkynDrawerContainerContent",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${c})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${c})` },
        children: i
      }
    )
  ] }) }) });
}
function Ha(e) {
  const {
    showCloseButton: t = !0,
    className: a,
    children: s,
    ...i
  } = e, { makeInvisible: l } = ye(At), d = `arkynDrawerHeader ${a}`;
  return /* @__PURE__ */ r.jsxs("header", { className: d.trim(), ...i, children: [
    s,
    t && /* @__PURE__ */ r.jsx(
      "button",
      {
        className: "arkynDrawerHeaderCloseButton",
        type: "button",
        onClick: l,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ r.jsx($t, { size: 24 })
      }
    )
  ] });
}
const Vt = Ce({});
function Ua(e) {
  const {
    isVisibled: t,
    makeInvisible: a,
    children: s,
    className: i = "",
    ...l
  } = e, c = `arkynModalContainer ${t ? "visibleTrue" : "visibleFalse"} ${i}`;
  return /* @__PURE__ */ r.jsx(Vt.Provider, { value: { makeInvisible: a }, children: /* @__PURE__ */ r.jsx(_t, { children: t && /* @__PURE__ */ r.jsxs("aside", { className: c.trim(), ...l, children: [
    /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        className: "arkynModalContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: a
      }
    ),
    /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        className: "arkynModalContainerContent",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: s
      }
    )
  ] }) }) });
}
function Ka(e) {
  const { alignment: t = "right", className: a, ...s } = e, i = `arkynModalFooter ${t} ${a}`;
  return /* @__PURE__ */ r.jsx("footer", { className: i.trim(), ...s });
}
function Xa(e) {
  const {
    showCloseButton: t = !0,
    className: a,
    children: s,
    ...i
  } = e, { makeInvisible: l } = ye(Vt), d = `arkynModalHeader ${a}`;
  return /* @__PURE__ */ r.jsxs("header", { className: d.trim(), ...i, children: [
    s,
    t && /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        onClick: l,
        "aria-label": "Close modal button",
        className: "arkynModalHeaderCloseButton",
        children: /* @__PURE__ */ r.jsx($t, { size: 24 })
      }
    )
  ] });
}
function Ga(e) {
  const { children: t, button: a, closeOnClick: s, orientation: i = "bottomLeft" } = e, [l, d] = ae(!1), u = `arkynPopover ${i} ${l ? "visibleTrue" : "visibleFalse"}`;
  function m() {
    l || d(!0);
  }
  return /* @__PURE__ */ r.jsxs("div", { className: u, onClick: m, children: [
    a,
    /* @__PURE__ */ r.jsx(
      Ve.div,
      {
        style: { visibility: l ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: l ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => s && d(!1),
        className: "arkynPopoverContent",
        children: t
      }
    ),
    l && /* @__PURE__ */ r.jsx("div", { onClick: () => d(!1), className: "arkynPopoverOverlay" })
  ] });
}
function On(e) {
  const { message: t, title: a, type: s, size: i = "lg" } = e, l = `arkynToast ${s} ${i}`;
  function d() {
    switch (s) {
      case "info":
        return /* @__PURE__ */ r.jsx(ot, {});
      case "success":
        return /* @__PURE__ */ r.jsx(Tt, {});
      case "danger":
        return /* @__PURE__ */ r.jsx(St, {});
      case "warning":
        return /* @__PURE__ */ r.jsx(ln, {});
      default:
        return /* @__PURE__ */ r.jsx(ot, {});
    }
  }
  return /* @__PURE__ */ r.jsxs("aside", { className: l, children: [
    /* @__PURE__ */ r.jsxs("div", { children: [
      /* @__PURE__ */ r.jsx("div", { className: "bg" }),
      /* @__PURE__ */ r.jsx(d, {})
    ] }),
    /* @__PURE__ */ r.jsxs("p", { children: [
      /* @__PURE__ */ r.jsx("strong", { title: a, children: a }),
      /* @__PURE__ */ r.jsx("span", { children: t })
    ] })
  ] });
}
function Ja(e) {
  const {
    text: t,
    size: a = "lg",
    children: s,
    orientation: i = "top",
    className: l = "",
    ...d
  } = e, c = `arkynTooltip ${a} ${i} ${l}`;
  return /* @__PURE__ */ r.jsxs("div", { className: c.trim(), ...d, children: [
    s,
    /* @__PURE__ */ r.jsx("div", { className: "arkynTooltipText", children: t })
  ] });
}
const mt = Ce({}), Wt = Ce({});
function Bn() {
  const e = ye(Wt);
  if (Object.entries(e).length === 0)
    throw new Error("useToast must be used within a Provider");
  return e;
}
function jt(e) {
  return e && typeof e.title == "string" && typeof e.message == "string" && (e.size === void 0 || e.size === "md" || e.size === "lg") && (e.type === "info" || e.type === "success" || e.type === "danger" || e.type === "warning");
}
function qa() {
  const e = Pt(), { closeModal: t } = ye(mt), { showToast: a } = Bn();
  Ze(() => {
    const s = e == null ? void 0 : e.closeModalKey;
    s && t(s);
  }, [e]), Ze(() => {
    const s = e == null ? void 0 : e.toast, i = e == null ? void 0 : e.message;
    jt(s) && a(s), !jt(s) && i && a({
      message: i,
      title: "Atenção!",
      type: "warning"
    });
  }, [e]);
}
const Yt = Ce({});
function Za(e) {
  const t = ye(Yt);
  if (Object.entries(t).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (e) {
    const {
      drawerData: a,
      drawerIsOpen: s,
      openDrawer: i,
      closeDrawer: l
    } = t, d = s(e), c = a(e);
    return { drawerIsOpen: d, drawerData: c, openDrawer: (h) => i(e, h), closeDrawer: () => l(e) };
  } else
    return t;
}
function Qa(e) {
  const t = ye(mt);
  if (Object.entries(t).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (e) {
    const {
      modalData: a,
      modalIsOpen: s,
      openModal: i,
      closeModal: l
    } = t, d = s(e), c = a(e);
    return { modalIsOpen: d, modalData: c, openModal: (h) => i(e, h), closeModal: () => l(e) };
  } else
    return t;
}
function er(e) {
  const { children: t = !1 } = e, [a, s] = ae([]);
  function i(u) {
    return !!a.some((m) => m.key === u);
  }
  function l(u) {
    var m;
    return (m = a.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function d(u, m) {
    const h = i(u);
    s(h ? (v) => [...v.filter((y) => y.key !== u), { key: u, data: m }] : [...a, { key: u, data: m }]);
  }
  function c(u) {
    s(a.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ r.jsx(
    Yt.Provider,
    {
      value: { drawerIsOpen: i, drawerData: l, openDrawer: d, closeDrawer: c },
      children: t
    }
  );
}
function tr(e) {
  const { children: t = !1 } = e, [a, s] = ae([]);
  function i(u) {
    return !!a.some((m) => m.key === u);
  }
  function l(u) {
    var m;
    return (m = a.find((h) => h.key === u)) == null ? void 0 : m.data;
  }
  function d(u, m) {
    const h = i(u);
    s(h ? (v) => [...v.filter((y) => y.key !== u), { key: u, data: m }] : [...a, { key: u, data: m }]);
  }
  function c(u) {
    s(a.filter((m) => m.key !== u));
  }
  return /* @__PURE__ */ r.jsx(
    mt.Provider,
    {
      value: { modalIsOpen: i, modalData: l, openModal: d, closeModal: c },
      children: t
    }
  );
}
var zn = (e) => {
  switch (e) {
    case "success":
      return Ln;
    case "info":
      return Vn;
    case "warning":
      return An;
    case "error":
      return Wn;
    default:
      return null;
  }
}, Dn = Array(12).fill(0), Mn = ({ visible: e }) => p.createElement("div", { className: "sonner-loading-wrapper", "data-visible": e }, p.createElement("div", { className: "sonner-spinner" }, Dn.map((t, a) => p.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${a}` })))), Ln = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z", clipRule: "evenodd" })), An = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z", clipRule: "evenodd" })), Vn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z", clipRule: "evenodd" })), Wn = p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" }, p.createElement("path", { fillRule: "evenodd", d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z", clipRule: "evenodd" })), Yn = () => {
  let [e, t] = p.useState(document.hidden);
  return p.useEffect(() => {
    let a = () => {
      t(document.hidden);
    };
    return document.addEventListener("visibilitychange", a), () => window.removeEventListener("visibilitychange", a);
  }, []), e;
}, dt = 1, Hn = class {
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
      let { message: a, ...s } = e, i = typeof (e == null ? void 0 : e.id) == "number" || ((t = e.id) == null ? void 0 : t.length) > 0 ? e.id : dt++, l = this.toasts.find((c) => c.id === i), d = e.dismissible === void 0 ? !0 : e.dismissible;
      return l ? this.toasts = this.toasts.map((c) => c.id === i ? (this.publish({ ...c, ...e, id: i, title: a }), { ...c, ...e, id: i, dismissible: d, title: a }) : c) : this.addToast({ title: a, ...s, dismissible: d, id: i }), i;
    }, this.dismiss = (e) => (e || this.toasts.forEach((t) => {
      this.subscribers.forEach((a) => a({ id: t.id, dismiss: !0 }));
    }), this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })), e), this.message = (e, t) => this.create({ ...t, message: e }), this.error = (e, t) => this.create({ ...t, message: e, type: "error" }), this.success = (e, t) => this.create({ ...t, type: "success", message: e }), this.info = (e, t) => this.create({ ...t, type: "info", message: e }), this.warning = (e, t) => this.create({ ...t, type: "warning", message: e }), this.loading = (e, t) => this.create({ ...t, type: "loading", message: e }), this.promise = (e, t) => {
      if (!t) return;
      let a;
      t.loading !== void 0 && (a = this.create({ ...t, promise: e, type: "loading", message: t.loading, description: typeof t.description != "function" ? t.description : void 0 }));
      let s = e instanceof Promise ? e : e(), i = a !== void 0;
      return s.then(async (l) => {
        if (Kn(l) && !l.ok) {
          i = !1;
          let d = typeof t.error == "function" ? await t.error(`HTTP error! status: ${l.status}`) : t.error, c = typeof t.description == "function" ? await t.description(`HTTP error! status: ${l.status}`) : t.description;
          this.create({ id: a, type: "error", message: d, description: c });
        } else if (t.success !== void 0) {
          i = !1;
          let d = typeof t.success == "function" ? await t.success(l) : t.success, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: a, type: "success", message: d, description: c });
        }
      }).catch(async (l) => {
        if (t.error !== void 0) {
          i = !1;
          let d = typeof t.error == "function" ? await t.error(l) : t.error, c = typeof t.description == "function" ? await t.description(l) : t.description;
          this.create({ id: a, type: "error", message: d, description: c });
        }
      }).finally(() => {
        var l;
        i && (this.dismiss(a), a = void 0), (l = t.finally) == null || l.call(t);
      }), a;
    }, this.custom = (e, t) => {
      let a = (t == null ? void 0 : t.id) || dt++;
      return this.create({ jsx: e(a), id: a, ...t }), a;
    }, this.subscribers = [], this.toasts = [];
  }
}, fe = new Hn(), Un = (e, t) => {
  let a = (t == null ? void 0 : t.id) || dt++;
  return fe.addToast({ title: e, ...t, id: a }), a;
}, Kn = (e) => e && typeof e == "object" && "ok" in e && typeof e.ok == "boolean" && "status" in e && typeof e.status == "number", Xn = Un, Gn = () => fe.toasts, Jn = Object.assign(Xn, { success: fe.success, info: fe.info, warning: fe.warning, error: fe.error, custom: fe.custom, message: fe.message, promise: fe.promise, dismiss: fe.dismiss, loading: fe.loading }, { getHistory: Gn });
function qn(e, { insertAt: t } = {}) {
  if (!e || typeof document > "u") return;
  let a = document.head || document.getElementsByTagName("head")[0], s = document.createElement("style");
  s.type = "text/css", t === "top" && a.firstChild ? a.insertBefore(s, a.firstChild) : a.appendChild(s), s.styleSheet ? s.styleSheet.cssText = e : s.appendChild(document.createTextNode(e));
}
qn(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999}:where([data-sonner-toaster][data-x-position="right"]){right:max(var(--offset),env(safe-area-inset-right))}:where([data-sonner-toaster][data-x-position="left"]){left:max(var(--offset),env(safe-area-inset-left))}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:max(var(--offset),env(safe-area-inset-top))}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:max(var(--offset),env(safe-area-inset-bottom))}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;background:var(--gray1);color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:0;right:0;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount, 0px));transition:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation:swipe-out .2s ease-out forwards}@keyframes swipe-out{0%{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount)));opacity:1}to{transform:translateY(calc(var(--lift) * var(--offset) + var(--swipe-amount) + var(--lift) * -100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;--mobile-offset: 16px;right:var(--mobile-offset);left:var(--mobile-offset);width:100%}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset)}[data-sonner-toaster][data-y-position=bottom]{bottom:20px}[data-sonner-toaster][data-y-position=top]{top:20px}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset);right:var(--mobile-offset);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function qe(e) {
  return e.label !== void 0;
}
var Zn = 3, Qn = "32px", ea = 4e3, ta = 356, na = 14, aa = 20, ra = 200;
function sa(...e) {
  return e.filter(Boolean).join(" ");
}
var oa = (e) => {
  var t, a, s, i, l, d, c, u, m, h;
  let { invert: v, toast: o, unstyled: y, interacting: k, setHeights: x, visibleToasts: w, heights: b, index: C, toasts: O, expanded: _, removeToast: R, defaultRichColors: V, closeButton: D, style: H, cancelButtonStyle: W, actionButtonStyle: J, className: B = "", descriptionClassName: te = "", duration: E, position: U, gap: M, loadingIcon: K, expandByDefault: Q, classNames: $, icons: q, closeButtonAriaLabel: ie = "Close toast", pauseWhenPageIsHidden: I, cn: T } = e, [j, Z] = p.useState(!1), [le, X] = p.useState(!1), [xe, he] = p.useState(!1), [G, re] = p.useState(!1), [ke, Pe] = p.useState(0), [et, We] = p.useState(0), Te = p.useRef(null), me = p.useRef(null), Ye = C === 0, He = C + 1 <= w, se = o.type, Ne = o.dismissible !== !1, tt = o.className || "", Oe = o.descriptionClassName || "", Ie = p.useMemo(() => b.findIndex((S) => S.toastId === o.id) || 0, [b, o.id]), nt = p.useMemo(() => {
    var S;
    return (S = o.closeButton) != null ? S : D;
  }, [o.closeButton, D]), Be = p.useMemo(() => o.duration || E || ea, [o.duration, E]), _e = p.useRef(0), pe = p.useRef(0), Ue = p.useRef(0), we = p.useRef(null), [ze, De] = U.split("-"), Ke = p.useMemo(() => b.reduce((S, L, A) => A >= Ie ? S : S + L.height, 0), [b, Ie]), Xe = Yn(), at = o.invert || v, Me = se === "loading";
  pe.current = p.useMemo(() => Ie * M + Ke, [Ie, Ke]), p.useEffect(() => {
    Z(!0);
  }, []), p.useLayoutEffect(() => {
    if (!j) return;
    let S = me.current, L = S.style.height;
    S.style.height = "auto";
    let A = S.getBoundingClientRect().height;
    S.style.height = L, We(A), x((oe) => oe.find((ue) => ue.toastId === o.id) ? oe.map((ue) => ue.toastId === o.id ? { ...ue, height: A } : ue) : [{ toastId: o.id, height: A, position: o.position }, ...oe]);
  }, [j, o.title, o.description, x, o.id]);
  let be = p.useCallback(() => {
    X(!0), Pe(pe.current), x((S) => S.filter((L) => L.toastId !== o.id)), setTimeout(() => {
      R(o);
    }, ra);
  }, [o, R, x, pe]);
  p.useEffect(() => {
    if (o.promise && se === "loading" || o.duration === 1 / 0 || o.type === "loading") return;
    let S, L = Be;
    return _ || k || I && Xe ? (() => {
      if (Ue.current < _e.current) {
        let A = (/* @__PURE__ */ new Date()).getTime() - _e.current;
        L = L - A;
      }
      Ue.current = (/* @__PURE__ */ new Date()).getTime();
    })() : L !== 1 / 0 && (_e.current = (/* @__PURE__ */ new Date()).getTime(), S = setTimeout(() => {
      var A;
      (A = o.onAutoClose) == null || A.call(o, o), be();
    }, L)), () => clearTimeout(S);
  }, [_, k, Q, o, Be, be, o.promise, se, I, Xe]), p.useEffect(() => {
    let S = me.current;
    if (S) {
      let L = S.getBoundingClientRect().height;
      return We(L), x((A) => [{ toastId: o.id, height: L, position: o.position }, ...A]), () => x((A) => A.filter((oe) => oe.toastId !== o.id));
    }
  }, [x, o.id]), p.useEffect(() => {
    o.delete && be();
  }, [be, o.delete]);
  function rt() {
    return q != null && q.loading ? p.createElement("div", { className: "sonner-loader", "data-visible": se === "loading" }, q.loading) : K ? p.createElement("div", { className: "sonner-loader", "data-visible": se === "loading" }, K) : p.createElement(Mn, { visible: se === "loading" });
  }
  return p.createElement("li", { "aria-live": o.important ? "assertive" : "polite", "aria-atomic": "true", role: "status", tabIndex: 0, ref: me, className: T(B, tt, $ == null ? void 0 : $.toast, (t = o == null ? void 0 : o.classNames) == null ? void 0 : t.toast, $ == null ? void 0 : $.default, $ == null ? void 0 : $[se], (a = o == null ? void 0 : o.classNames) == null ? void 0 : a[se]), "data-sonner-toast": "", "data-rich-colors": (s = o.richColors) != null ? s : V, "data-styled": !(o.jsx || o.unstyled || y), "data-mounted": j, "data-promise": !!o.promise, "data-removed": le, "data-visible": He, "data-y-position": ze, "data-x-position": De, "data-index": C, "data-front": Ye, "data-swiping": xe, "data-dismissible": Ne, "data-type": se, "data-invert": at, "data-swipe-out": G, "data-expanded": !!(_ || Q && j), style: { "--index": C, "--toasts-before": C, "--z-index": O.length - C, "--offset": `${le ? ke : pe.current}px`, "--initial-height": Q ? "auto" : `${et}px`, ...H, ...o.style }, onPointerDown: (S) => {
    Me || !Ne || (Te.current = /* @__PURE__ */ new Date(), Pe(pe.current), S.target.setPointerCapture(S.pointerId), S.target.tagName !== "BUTTON" && (he(!0), we.current = { x: S.clientX, y: S.clientY }));
  }, onPointerUp: () => {
    var S, L, A, oe;
    if (G || !Ne) return;
    we.current = null;
    let ue = Number(((S = me.current) == null ? void 0 : S.style.getPropertyValue("--swipe-amount").replace("px", "")) || 0), je = (/* @__PURE__ */ new Date()).getTime() - ((L = Te.current) == null ? void 0 : L.getTime()), Ge = Math.abs(ue) / je;
    if (Math.abs(ue) >= aa || Ge > 0.11) {
      Pe(pe.current), (A = o.onDismiss) == null || A.call(o, o), be(), re(!0);
      return;
    }
    (oe = me.current) == null || oe.style.setProperty("--swipe-amount", "0px"), he(!1);
  }, onPointerMove: (S) => {
    var L;
    if (!we.current || !Ne) return;
    let A = S.clientY - we.current.y, oe = S.clientX - we.current.x, ue = (ze === "top" ? Math.min : Math.max)(0, A), je = S.pointerType === "touch" ? 10 : 2;
    Math.abs(ue) > je ? (L = me.current) == null || L.style.setProperty("--swipe-amount", `${A}px`) : Math.abs(oe) > je && (we.current = null);
  } }, nt && !o.jsx ? p.createElement("button", { "aria-label": ie, "data-disabled": Me, "data-close-button": !0, onClick: Me || !Ne ? () => {
  } : () => {
    var S;
    be(), (S = o.onDismiss) == null || S.call(o, o);
  }, className: T($ == null ? void 0 : $.closeButton, (i = o == null ? void 0 : o.classNames) == null ? void 0 : i.closeButton) }, p.createElement("svg", { xmlns: "http://www.w3.org/2000/svg", width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }, p.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }), p.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" }))) : null, o.jsx || p.isValidElement(o.title) ? o.jsx || o.title : p.createElement(p.Fragment, null, se || o.icon || o.promise ? p.createElement("div", { "data-icon": "", className: T($ == null ? void 0 : $.icon, (l = o == null ? void 0 : o.classNames) == null ? void 0 : l.icon) }, o.promise || o.type === "loading" && !o.icon ? o.icon || rt() : null, o.type !== "loading" ? o.icon || (q == null ? void 0 : q[se]) || zn(se) : null) : null, p.createElement("div", { "data-content": "", className: T($ == null ? void 0 : $.content, (d = o == null ? void 0 : o.classNames) == null ? void 0 : d.content) }, p.createElement("div", { "data-title": "", className: T($ == null ? void 0 : $.title, (c = o == null ? void 0 : o.classNames) == null ? void 0 : c.title) }, o.title), o.description ? p.createElement("div", { "data-description": "", className: T(te, Oe, $ == null ? void 0 : $.description, (u = o == null ? void 0 : o.classNames) == null ? void 0 : u.description) }, o.description) : null), p.isValidElement(o.cancel) ? o.cancel : o.cancel && qe(o.cancel) ? p.createElement("button", { "data-button": !0, "data-cancel": !0, style: o.cancelButtonStyle || W, onClick: (S) => {
    var L, A;
    qe(o.cancel) && Ne && ((A = (L = o.cancel).onClick) == null || A.call(L, S), be());
  }, className: T($ == null ? void 0 : $.cancelButton, (m = o == null ? void 0 : o.classNames) == null ? void 0 : m.cancelButton) }, o.cancel.label) : null, p.isValidElement(o.action) ? o.action : o.action && qe(o.action) ? p.createElement("button", { "data-button": !0, "data-action": !0, style: o.actionButtonStyle || J, onClick: (S) => {
    var L, A;
    qe(o.action) && (S.defaultPrevented || ((A = (L = o.action).onClick) == null || A.call(L, S), be()));
  }, className: T($ == null ? void 0 : $.actionButton, (h = o == null ? void 0 : o.classNames) == null ? void 0 : h.actionButton) }, o.action.label) : null));
};
function Et() {
  if (typeof window > "u" || typeof document > "u") return "ltr";
  let e = document.documentElement.getAttribute("dir");
  return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
var ia = (e) => {
  let { invert: t, position: a = "bottom-right", hotkey: s = ["altKey", "KeyT"], expand: i, closeButton: l, className: d, offset: c, theme: u = "light", richColors: m, duration: h, style: v, visibleToasts: o = Zn, toastOptions: y, dir: k = Et(), gap: x = na, loadingIcon: w, icons: b, containerAriaLabel: C = "Notifications", pauseWhenPageIsHidden: O, cn: _ = sa } = e, [R, V] = p.useState([]), D = p.useMemo(() => Array.from(new Set([a].concat(R.filter((I) => I.position).map((I) => I.position)))), [R, a]), [H, W] = p.useState([]), [J, B] = p.useState(!1), [te, E] = p.useState(!1), [U, M] = p.useState(u !== "system" ? u : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"), K = p.useRef(null), Q = s.join("+").replace(/Key/g, "").replace(/Digit/g, ""), $ = p.useRef(null), q = p.useRef(!1), ie = p.useCallback((I) => {
    var T;
    (T = R.find((j) => j.id === I.id)) != null && T.delete || fe.dismiss(I.id), V((j) => j.filter(({ id: Z }) => Z !== I.id));
  }, [R]);
  return p.useEffect(() => fe.subscribe((I) => {
    if (I.dismiss) {
      V((T) => T.map((j) => j.id === I.id ? { ...j, delete: !0 } : j));
      return;
    }
    setTimeout(() => {
      fn.flushSync(() => {
        V((T) => {
          let j = T.findIndex((Z) => Z.id === I.id);
          return j !== -1 ? [...T.slice(0, j), { ...T[j], ...I }, ...T.slice(j + 1)] : [I, ...T];
        });
      });
    });
  }), []), p.useEffect(() => {
    if (u !== "system") {
      M(u);
      return;
    }
    u === "system" && (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? M("dark") : M("light")), typeof window < "u" && window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", ({ matches: I }) => {
      M(I ? "dark" : "light");
    });
  }, [u]), p.useEffect(() => {
    R.length <= 1 && B(!1);
  }, [R]), p.useEffect(() => {
    let I = (T) => {
      var j, Z;
      s.every((le) => T[le] || T.code === le) && (B(!0), (j = K.current) == null || j.focus()), T.code === "Escape" && (document.activeElement === K.current || (Z = K.current) != null && Z.contains(document.activeElement)) && B(!1);
    };
    return document.addEventListener("keydown", I), () => document.removeEventListener("keydown", I);
  }, [s]), p.useEffect(() => {
    if (K.current) return () => {
      $.current && ($.current.focus({ preventScroll: !0 }), $.current = null, q.current = !1);
    };
  }, [K.current]), R.length ? p.createElement("section", { "aria-label": `${C} ${Q}`, tabIndex: -1 }, D.map((I, T) => {
    var j;
    let [Z, le] = I.split("-");
    return p.createElement("ol", { key: I, dir: k === "auto" ? Et() : k, tabIndex: -1, ref: K, className: d, "data-sonner-toaster": !0, "data-theme": U, "data-y-position": Z, "data-x-position": le, style: { "--front-toast-height": `${((j = H[0]) == null ? void 0 : j.height) || 0}px`, "--offset": typeof c == "number" ? `${c}px` : c || Qn, "--width": `${ta}px`, "--gap": `${x}px`, ...v }, onBlur: (X) => {
      q.current && !X.currentTarget.contains(X.relatedTarget) && (q.current = !1, $.current && ($.current.focus({ preventScroll: !0 }), $.current = null));
    }, onFocus: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || q.current || (q.current = !0, $.current = X.relatedTarget);
    }, onMouseEnter: () => B(!0), onMouseMove: () => B(!0), onMouseLeave: () => {
      te || B(!1);
    }, onPointerDown: (X) => {
      X.target instanceof HTMLElement && X.target.dataset.dismissible === "false" || E(!0);
    }, onPointerUp: () => E(!1) }, R.filter((X) => !X.position && T === 0 || X.position === I).map((X, xe) => {
      var he, G;
      return p.createElement(oa, { key: X.id, icons: b, index: xe, toast: X, defaultRichColors: m, duration: (he = y == null ? void 0 : y.duration) != null ? he : h, className: y == null ? void 0 : y.className, descriptionClassName: y == null ? void 0 : y.descriptionClassName, invert: t, visibleToasts: o, closeButton: (G = y == null ? void 0 : y.closeButton) != null ? G : l, interacting: te, position: I, style: y == null ? void 0 : y.style, unstyled: y == null ? void 0 : y.unstyled, classNames: y == null ? void 0 : y.classNames, cancelButtonStyle: y == null ? void 0 : y.cancelButtonStyle, actionButtonStyle: y == null ? void 0 : y.actionButtonStyle, removeToast: ie, toasts: R.filter((re) => re.position == X.position), heights: H.filter((re) => re.position == X.position), setHeights: W, expandByDefault: i, gap: x, loadingIcon: w, expanded: J, pauseWhenPageIsHidden: O, cn: _ });
    }));
  })) : null;
};
function nr({ children: e }) {
  function t(a) {
    Jn.custom((s) => /* @__PURE__ */ r.jsx(On, { ...a }));
  }
  return /* @__PURE__ */ r.jsxs(Wt.Provider, { value: { showToast: t }, children: [
    /* @__PURE__ */ r.jsx(ia, {}),
    e
  ] });
}
export {
  ma as AlertContainer,
  pa as AlertContent,
  ga as AlertDescription,
  va as AlertIcon,
  pn as AlertTitle,
  ba as Badge,
  Ma as BreadcrumbContainer,
  La as BreadcrumbLink,
  Sa as Button,
  ya as Card,
  Ra as Checkbox,
  xa as Divider,
  Ya as DrawerContainer,
  Ha as DrawerHeader,
  er as DrawerProvider,
  Ta as FormController,
  $a as FormError,
  Pa as FormLabel,
  Ia as IconButton,
  _a as Input,
  Ua as ModalContainer,
  Ka as ModalFooter,
  Xa as ModalHeader,
  tr as ModalProvider,
  Aa as Pagination,
  Ga as Popover,
  Oa as RadioBox,
  Fa as RadioGroup,
  Ba as Select,
  wa as Skeleton,
  za as Switch,
  Wa as TabButton,
  Va as TabContainer,
  Ca as TableBody,
  ka as TableCaption,
  Na as TableContainer,
  ja as TableFooter,
  Ea as TableHeader,
  Da as Textarea,
  On as Toast,
  nr as ToastProvider,
  Ja as Tooltip,
  qa as useAutomation,
  Za as useDrawer,
  Qa as useModal,
  _n as useScopedParams,
  Bn as useToast
};
