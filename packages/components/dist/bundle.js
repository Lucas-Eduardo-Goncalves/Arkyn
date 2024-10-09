import * as lt from "react";
import me, { createContext as ct, useContext as je, memo as st, Children as _t, isValidElement as vc, cloneElement as gc, useState as I, useRef as Ue, useEffect as B, PureComponent as qe, createRef as Oi, useMemo as Gt, useId as $d, forwardRef as sa, useCallback as ze, useReducer as zd, useLayoutEffect as Wd, Component as Ud } from "react";
import { Info as Oo, AlertTriangle as Hd, XCircle as mc, CheckCircle2 as yc, MapPinned as Vd, Loader2 as kn, Check as Cc, Heading1 as qd, Heading2 as Gd, Quote as Zd, Bold as Yd, Italic as Kd, Underline as Xd, Code as Jd, AlignLeft as Qd, AlignRight as ep, AlignCenter as tp, AlignJustify as np, ChevronDown as rp, ChevronRight as So, ChevronLeft as ip, Ellipsis as Qa, X as Dc, AlertCircle as op } from "lucide-react";
import * as bc from "react-dom";
import Ec, { createPortal as Si } from "react-dom";
import { useActionData as wc, useLocation as ua, Link as ap, useNavigate as Bc } from "@remix-run/react";
import { InputMask as sp } from "@react-input/mask";
import { AnimatePresence as xc, motion as Dr } from "framer-motion";
var He = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Pi(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Po = { exports: {} }, ir = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var es;
function up() {
  if (es) return ir;
  es = 1;
  var t = me, e = Symbol.for("react.element"), n = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(s, u, l) {
    var c, d = {}, p = null, v = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (v = u.ref);
    for (c in u) r.call(u, c) && !o.hasOwnProperty(c) && (d[c] = u[c]);
    if (s && s.defaultProps) for (c in u = s.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: s, key: p, ref: v, props: d, _owner: i.current };
  }
  return ir.Fragment = n, ir.jsx = a, ir.jsxs = a, ir;
}
var or = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ts;
function lp() {
  return ts || (ts = 1, process.env.NODE_ENV !== "production" && function() {
    var t = me, e = Symbol.for("react.element"), n = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), s = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), v = Symbol.for("react.offscreen"), m = Symbol.iterator, h = "@@iterator";
    function f(A) {
      if (A === null || typeof A != "object")
        return null;
      var ee = m && A[m] || A[h];
      return typeof ee == "function" ? ee : null;
    }
    var C = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(A) {
      {
        for (var ee = arguments.length, ae = new Array(ee > 1 ? ee - 1 : 0), Ce = 1; Ce < ee; Ce++)
          ae[Ce - 1] = arguments[Ce];
        b("error", A, ae);
      }
    }
    function b(A, ee, ae) {
      {
        var Ce = C.ReactDebugCurrentFrame, ke = Ce.getStackAddendum();
        ke !== "" && (ee += "%s", ae = ae.concat([ke]));
        var Re = ae.map(function(Pe) {
          return String(Pe);
        });
        Re.unshift("Warning: " + ee), Function.prototype.apply.call(console[A], console, Re);
      }
    }
    var S = !1, D = !1, E = !1, L = !1, F = !1, H;
    H = Symbol.for("react.module.reference");
    function P(A) {
      return !!(typeof A == "string" || typeof A == "function" || A === r || A === o || F || A === i || A === l || A === c || L || A === v || S || D || E || typeof A == "object" && A !== null && (A.$$typeof === p || A.$$typeof === d || A.$$typeof === a || A.$$typeof === s || A.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      A.$$typeof === H || A.getModuleId !== void 0));
    }
    function $(A, ee, ae) {
      var Ce = A.displayName;
      if (Ce)
        return Ce;
      var ke = ee.displayName || ee.name || "";
      return ke !== "" ? ae + "(" + ke + ")" : ae;
    }
    function R(A) {
      return A.displayName || "Context";
    }
    function j(A) {
      if (A == null)
        return null;
      if (typeof A.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof A == "function")
        return A.displayName || A.name || null;
      if (typeof A == "string")
        return A;
      switch (A) {
        case r:
          return "Fragment";
        case n:
          return "Portal";
        case o:
          return "Profiler";
        case i:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case s:
            var ee = A;
            return R(ee) + ".Consumer";
          case a:
            var ae = A;
            return R(ae._context) + ".Provider";
          case u:
            return $(A, A.render, "ForwardRef");
          case d:
            var Ce = A.displayName || null;
            return Ce !== null ? Ce : j(A.type) || "Memo";
          case p: {
            var ke = A, Re = ke._payload, Pe = ke._init;
            try {
              return j(Pe(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var T = Object.assign, N = 0, K, _, oe, ie, k, U, J;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function te() {
      {
        if (N === 0) {
          K = console.log, _ = console.info, oe = console.warn, ie = console.error, k = console.group, U = console.groupCollapsed, J = console.groupEnd;
          var A = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: A,
            log: A,
            warn: A,
            error: A,
            group: A,
            groupCollapsed: A,
            groupEnd: A
          });
        }
        N++;
      }
    }
    function Y() {
      {
        if (N--, N === 0) {
          var A = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: T({}, A, {
              value: K
            }),
            info: T({}, A, {
              value: _
            }),
            warn: T({}, A, {
              value: oe
            }),
            error: T({}, A, {
              value: ie
            }),
            group: T({}, A, {
              value: k
            }),
            groupCollapsed: T({}, A, {
              value: U
            }),
            groupEnd: T({}, A, {
              value: J
            })
          });
        }
        N < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var y = C.ReactCurrentDispatcher, z;
    function W(A, ee, ae) {
      {
        if (z === void 0)
          try {
            throw Error();
          } catch (ke) {
            var Ce = ke.stack.trim().match(/\n( *(at )?)/);
            z = Ce && Ce[1] || "";
          }
        return `
` + z + A;
      }
    }
    var M = !1, X;
    {
      var ne = typeof WeakMap == "function" ? WeakMap : Map;
      X = new ne();
    }
    function G(A, ee) {
      if (!A || M)
        return "";
      {
        var ae = X.get(A);
        if (ae !== void 0)
          return ae;
      }
      var Ce;
      M = !0;
      var ke = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = y.current, y.current = null, te();
      try {
        if (ee) {
          var Pe = function() {
            throw Error();
          };
          if (Object.defineProperty(Pe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Pe, []);
            } catch (at) {
              Ce = at;
            }
            Reflect.construct(A, [], Pe);
          } else {
            try {
              Pe.call();
            } catch (at) {
              Ce = at;
            }
            A.call(Pe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (at) {
            Ce = at;
          }
          A();
        }
      } catch (at) {
        if (at && Ce && typeof at.stack == "string") {
          for (var Le = at.stack.split(`
`), ot = Ce.stack.split(`
`), Ge = Le.length - 1, Je = ot.length - 1; Ge >= 1 && Je >= 0 && Le[Ge] !== ot[Je]; )
            Je--;
          for (; Ge >= 1 && Je >= 0; Ge--, Je--)
            if (Le[Ge] !== ot[Je]) {
              if (Ge !== 1 || Je !== 1)
                do
                  if (Ge--, Je--, Je < 0 || Le[Ge] !== ot[Je]) {
                    var dt = `
` + Le[Ge].replace(" at new ", " at ");
                    return A.displayName && dt.includes("<anonymous>") && (dt = dt.replace("<anonymous>", A.displayName)), typeof A == "function" && X.set(A, dt), dt;
                  }
                while (Ge >= 1 && Je >= 0);
              break;
            }
        }
      } finally {
        M = !1, y.current = Re, Y(), Error.prepareStackTrace = ke;
      }
      var Wt = A ? A.displayName || A.name : "", Ut = Wt ? W(Wt) : "";
      return typeof A == "function" && X.set(A, Ut), Ut;
    }
    function le(A, ee, ae) {
      return G(A, !1);
    }
    function se(A) {
      var ee = A.prototype;
      return !!(ee && ee.isReactComponent);
    }
    function pe(A, ee, ae) {
      if (A == null)
        return "";
      if (typeof A == "function")
        return G(A, se(A));
      if (typeof A == "string")
        return W(A);
      switch (A) {
        case l:
          return W("Suspense");
        case c:
          return W("SuspenseList");
      }
      if (typeof A == "object")
        switch (A.$$typeof) {
          case u:
            return le(A.render);
          case d:
            return pe(A.type, ee, ae);
          case p: {
            var Ce = A, ke = Ce._payload, Re = Ce._init;
            try {
              return pe(Re(ke), ee, ae);
            } catch {
            }
          }
        }
      return "";
    }
    var he = Object.prototype.hasOwnProperty, De = {}, ye = C.ReactDebugCurrentFrame;
    function be(A) {
      if (A) {
        var ee = A._owner, ae = pe(A.type, A._source, ee ? ee.type : null);
        ye.setExtraStackFrame(ae);
      } else
        ye.setExtraStackFrame(null);
    }
    function ge(A, ee, ae, Ce, ke) {
      {
        var Re = Function.call.bind(he);
        for (var Pe in A)
          if (Re(A, Pe)) {
            var Le = void 0;
            try {
              if (typeof A[Pe] != "function") {
                var ot = Error((Ce || "React class") + ": " + ae + " type `" + Pe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof A[Pe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              Le = A[Pe](ee, Pe, Ce, ae, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ge) {
              Le = Ge;
            }
            Le && !(Le instanceof Error) && (be(ke), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Ce || "React class", ae, Pe, typeof Le), be(null)), Le instanceof Error && !(Le.message in De) && (De[Le.message] = !0, be(ke), w("Failed %s type: %s", ae, Le.message), be(null));
          }
      }
    }
    var Ne = Array.isArray;
    function ue(A) {
      return Ne(A);
    }
    function We(A) {
      {
        var ee = typeof Symbol == "function" && Symbol.toStringTag, ae = ee && A[Symbol.toStringTag] || A.constructor.name || "Object";
        return ae;
      }
    }
    function de(A) {
      try {
        return Be(A), !1;
      } catch {
        return !0;
      }
    }
    function Be(A) {
      return "" + A;
    }
    function Te(A) {
      if (de(A))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", We(A)), Be(A);
    }
    var Xe = C.ReactCurrentOwner, nt = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ae, vt, ft;
    ft = {};
    function Xt(A) {
      if (he.call(A, "ref")) {
        var ee = Object.getOwnPropertyDescriptor(A, "ref").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return A.ref !== void 0;
    }
    function Ot(A) {
      if (he.call(A, "key")) {
        var ee = Object.getOwnPropertyDescriptor(A, "key").get;
        if (ee && ee.isReactWarning)
          return !1;
      }
      return A.key !== void 0;
    }
    function Mt(A, ee) {
      if (typeof A.ref == "string" && Xe.current && ee && Xe.current.stateNode !== ee) {
        var ae = j(Xe.current.type);
        ft[ae] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', j(Xe.current.type), A.ref), ft[ae] = !0);
      }
    }
    function Rn(A, ee) {
      {
        var ae = function() {
          Ae || (Ae = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ae.isReactWarning = !0, Object.defineProperty(A, "key", {
          get: ae,
          configurable: !0
        });
      }
    }
    function In(A, ee) {
      {
        var ae = function() {
          vt || (vt = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ee));
        };
        ae.isReactWarning = !0, Object.defineProperty(A, "ref", {
          get: ae,
          configurable: !0
        });
      }
    }
    var jn = function(A, ee, ae, Ce, ke, Re, Pe) {
      var Le = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: A,
        key: ee,
        ref: ae,
        props: Pe,
        // Record the component responsible for creating this element.
        _owner: Re
      };
      return Le._store = {}, Object.defineProperty(Le._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Le, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ce
      }), Object.defineProperty(Le, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: ke
      }), Object.freeze && (Object.freeze(Le.props), Object.freeze(Le)), Le;
    };
    function Nn(A, ee, ae, Ce, ke) {
      {
        var Re, Pe = {}, Le = null, ot = null;
        ae !== void 0 && (Te(ae), Le = "" + ae), Ot(ee) && (Te(ee.key), Le = "" + ee.key), Xt(ee) && (ot = ee.ref, Mt(ee, ke));
        for (Re in ee)
          he.call(ee, Re) && !nt.hasOwnProperty(Re) && (Pe[Re] = ee[Re]);
        if (A && A.defaultProps) {
          var Ge = A.defaultProps;
          for (Re in Ge)
            Pe[Re] === void 0 && (Pe[Re] = Ge[Re]);
        }
        if (Le || ot) {
          var Je = typeof A == "function" ? A.displayName || A.name || "Unknown" : A;
          Le && Rn(Pe, Je), ot && In(Pe, Je);
        }
        return jn(A, Le, ot, ke, Ce, Xe.current, Pe);
      }
    }
    var Rt = C.ReactCurrentOwner, gn = C.ReactDebugCurrentFrame;
    function zt(A) {
      if (A) {
        var ee = A._owner, ae = pe(A.type, A._source, ee ? ee.type : null);
        gn.setExtraStackFrame(ae);
      } else
        gn.setExtraStackFrame(null);
    }
    var Jt;
    Jt = !1;
    function _n(A) {
      return typeof A == "object" && A !== null && A.$$typeof === e;
    }
    function Qn() {
      {
        if (Rt.current) {
          var A = j(Rt.current.type);
          if (A)
            return `

Check the render method of \`` + A + "`.";
        }
        return "";
      }
    }
    function $n(A) {
      {
        if (A !== void 0) {
          var ee = A.fileName.replace(/^.*[\\\/]/, ""), ae = A.lineNumber;
          return `

Check your code at ` + ee + ":" + ae + ".";
        }
        return "";
      }
    }
    var er = {};
    function Ir(A) {
      {
        var ee = Qn();
        if (!ee) {
          var ae = typeof A == "string" ? A : A.displayName || A.name;
          ae && (ee = `

Check the top-level render call using <` + ae + ">.");
        }
        return ee;
      }
    }
    function mn(A, ee) {
      {
        if (!A._store || A._store.validated || A.key != null)
          return;
        A._store.validated = !0;
        var ae = Ir(ee);
        if (er[ae])
          return;
        er[ae] = !0;
        var Ce = "";
        A && A._owner && A._owner !== Rt.current && (Ce = " It was passed a child from " + j(A._owner.type) + "."), zt(A), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', ae, Ce), zt(null);
      }
    }
    function tr(A, ee) {
      {
        if (typeof A != "object")
          return;
        if (ue(A))
          for (var ae = 0; ae < A.length; ae++) {
            var Ce = A[ae];
            _n(Ce) && mn(Ce, ee);
          }
        else if (_n(A))
          A._store && (A._store.validated = !0);
        else if (A) {
          var ke = f(A);
          if (typeof ke == "function" && ke !== A.entries)
            for (var Re = ke.call(A), Pe; !(Pe = Re.next()).done; )
              _n(Pe.value) && mn(Pe.value, ee);
        }
      }
    }
    function jr(A) {
      {
        var ee = A.type;
        if (ee == null || typeof ee == "string")
          return;
        var ae;
        if (typeof ee == "function")
          ae = ee.propTypes;
        else if (typeof ee == "object" && (ee.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ee.$$typeof === d))
          ae = ee.propTypes;
        else
          return;
        if (ae) {
          var Ce = j(ee);
          ge(ae, A.props, "prop", Ce, A);
        } else if (ee.PropTypes !== void 0 && !Jt) {
          Jt = !0;
          var ke = j(ee);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", ke || "Unknown");
        }
        typeof ee.getDefaultProps == "function" && !ee.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function zn(A) {
      {
        for (var ee = Object.keys(A.props), ae = 0; ae < ee.length; ae++) {
          var Ce = ee[ae];
          if (Ce !== "children" && Ce !== "key") {
            zt(A), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Ce), zt(null);
            break;
          }
        }
        A.ref !== null && (zt(A), w("Invalid attribute `ref` supplied to `React.Fragment`."), zt(null));
      }
    }
    var nr = {};
    function rr(A, ee, ae, Ce, ke, Re) {
      {
        var Pe = P(A);
        if (!Pe) {
          var Le = "";
          (A === void 0 || typeof A == "object" && A !== null && Object.keys(A).length === 0) && (Le += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = $n(ke);
          ot ? Le += ot : Le += Qn();
          var Ge;
          A === null ? Ge = "null" : ue(A) ? Ge = "array" : A !== void 0 && A.$$typeof === e ? (Ge = "<" + (j(A.type) || "Unknown") + " />", Le = " Did you accidentally export a JSX literal instead of a component?") : Ge = typeof A, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ge, Le);
        }
        var Je = Nn(A, ee, ae, ke, Re);
        if (Je == null)
          return Je;
        if (Pe) {
          var dt = ee.children;
          if (dt !== void 0)
            if (Ce)
              if (ue(dt)) {
                for (var Wt = 0; Wt < dt.length; Wt++)
                  tr(dt[Wt], A);
                Object.freeze && Object.freeze(dt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              tr(dt, A);
        }
        if (he.call(ee, "key")) {
          var Ut = j(A), at = Object.keys(ee).filter(function(_d) {
            return _d !== "key";
          }), Ee = at.length > 0 ? "{key: someKey, " + at.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!nr[Ut + Ee]) {
            var Nd = at.length > 0 ? "{" + at.join(": ..., ") + ": ...}" : "{}";
            w(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ee, Ut, Nd, Ut), nr[Ut + Ee] = !0;
          }
        }
        return A === r ? zn(Je) : jr(Je), Je;
      }
    }
    function Wn(A, ee, ae) {
      return rr(A, ee, ae, !0);
    }
    function Nr(A, ee, ae) {
      return rr(A, ee, ae, !1);
    }
    var _r = Nr, Un = Wn;
    or.Fragment = r, or.jsx = _r, or.jsxs = Un;
  }()), or;
}
process.env.NODE_ENV === "production" ? Po.exports = up() : Po.exports = lp();
var x = Po.exports;
function cp(t) {
  const { className: e, ...n } = t, r = `arkynAlertTitle ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
const Ac = ct({});
function fp() {
  return je(Ac);
}
function aw(t) {
  const { schema: e, children: n, className: r, ...i } = t, s = !((l) => {
    let c = !1;
    const d = (p) => {
      Array.isArray(p) ? p.forEach(d) : p && typeof p == "object" && "type" in p && (p.type === cp ? c = !0 : p.props && p.props.children && d(p.props.children));
    };
    return d(l), c;
  })(n) ? "nonExistsAlertTitle" : "existsAlertTitle", u = `arkynAlertContainer ${e} ${s} ${r}`;
  return /* @__PURE__ */ x.jsx(Ac.Provider, { value: t, children: /* @__PURE__ */ x.jsx("div", { className: u.trim(), ...i, children: n }) });
}
function sw(t) {
  const { className: e, ...n } = t, r = `arkynAlertContent ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
function uw(t) {
  const { className: e, ...n } = t, r = `arkynAlertDescription ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
function lw(t) {
  const { className: e, ...n } = t, { schema: r } = fp(), i = `arkynAlertIcon ${r} ${e}`;
  switch (r) {
    case "success":
      return /* @__PURE__ */ x.jsx(yc, { className: i, ...n });
    case "danger":
      return /* @__PURE__ */ x.jsx(mc, { className: i, ...n });
    case "warning":
      return /* @__PURE__ */ x.jsx(Hd, { className: i, ...n });
    case "info":
      return /* @__PURE__ */ x.jsx(Oo, { className: i, ...n });
  }
}
function mi(t, e) {
  return e ? /* @__PURE__ */ x.jsx(e, { size: t, strokeWidth: 2.5 }) : /* @__PURE__ */ x.jsx(x.Fragment, {});
}
function Lc(t, e) {
  return [...new Array(e - t)].map((n, r) => t + r + 1).filter((n) => n > 0);
}
function dp(t, e, n) {
  return t >= n ? [] : Lc(t, t + e);
}
function pp(t, e) {
  return t <= 1 ? [] : Lc(t - 1 - e, t - 1);
}
function hp(t, e, n) {
  if (!t) return /* @__PURE__ */ x.jsx(x.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ x.jsx("p", { className: n, children: t });
  const r = t;
  return /* @__PURE__ */ x.jsx("p", { className: n, children: /* @__PURE__ */ x.jsx(r, { color: "var(--secondary-600)", size: e, strokeWidth: 2.5 }) });
}
function cw(t) {
  const {
    variant: e = "ghost",
    scheme: n = "primary",
    size: r = "md",
    leftIcon: i,
    rightIcon: o,
    className: a = "",
    children: s,
    ...u
  } = t, c = { md: 12, lg: 14 }[r], d = `arkynBadge ${e} ${n} ${r} ${a}`;
  return /* @__PURE__ */ x.jsxs("div", { className: d.trim(), ...u, children: [
    mi(c, i),
    s,
    mi(c, i)
  ] });
}
function fw(t) {
  const { className: e, ...n } = t, r = `arkynCard ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: r.trim(), ...n });
}
function dw(t) {
  const {
    className: e,
    orientation: n = "horizontal",
    ...r
  } = t, i = `arkynDivider ${n} ${e}`;
  return /* @__PURE__ */ x.jsx("div", { className: i.trim(), ...r });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Fo = function(t, e) {
  return Fo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, r) {
    n.__proto__ = r;
  } || function(n, r) {
    for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (n[i] = r[i]);
  }, Fo(t, e);
};
function Ve(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Fo(t, e);
  function n() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (n.prototype = e.prototype, new n());
}
var ve = function() {
  return ve = Object.assign || function(e) {
    for (var n, r = 1, i = arguments.length; r < i; r++) {
      n = arguments[r];
      for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
    }
    return e;
  }, ve.apply(this, arguments);
};
function la(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
function vp(t, e, n, r) {
  function i(o) {
    return o instanceof n ? o : new n(function(a) {
      a(o);
    });
  }
  return new (n || (n = Promise))(function(o, a) {
    function s(c) {
      try {
        l(r.next(c));
      } catch (d) {
        a(d);
      }
    }
    function u(c) {
      try {
        l(r.throw(c));
      } catch (d) {
        a(d);
      }
    }
    function l(c) {
      c.done ? o(c.value) : i(c.value).then(s, u);
    }
    l((r = r.apply(t, e || [])).next());
  });
}
function gp(t, e) {
  var n = { label: 0, sent: function() {
    if (o[0] & 1) throw o[1];
    return o[1];
  }, trys: [], ops: [] }, r, i, o, a;
  return a = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (a[Symbol.iterator] = function() {
    return this;
  }), a;
  function s(l) {
    return function(c) {
      return u([l, c]);
    };
  }
  function u(l) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; n; ) try {
      if (r = 1, i && (o = l[0] & 2 ? i.return : l[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, l[1])).done) return o;
      switch (i = 0, o && (l = [l[0] & 2, o.value]), l[0]) {
        case 0:
        case 1:
          o = l;
          break;
        case 4:
          return n.label++, { value: l[1], done: !1 };
        case 5:
          n.label++, i = l[1], l = [0];
          continue;
        case 7:
          l = n.ops.pop(), n.trys.pop();
          continue;
        default:
          if (o = n.trys, !(o = o.length > 0 && o[o.length - 1]) && (l[0] === 6 || l[0] === 2)) {
            n = 0;
            continue;
          }
          if (l[0] === 3 && (!o || l[1] > o[0] && l[1] < o[3])) {
            n.label = l[1];
            break;
          }
          if (l[0] === 6 && n.label < o[1]) {
            n.label = o[1], o = l;
            break;
          }
          if (o && n.label < o[2]) {
            n.label = o[2], n.ops.push(l);
            break;
          }
          o[2] && n.ops.pop(), n.trys.pop();
          continue;
      }
      l = e.call(t, n);
    } catch (c) {
      l = [6, c], i = 0;
    } finally {
      r = o = 0;
    }
    if (l[0] & 5) throw l[1];
    return { value: l[0] ? l[1] : void 0, done: !0 };
  }
}
function Oc(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var mp = process.env.NODE_ENV, yp = function(t, e, n, r, i, o, a, s) {
  if (mp !== "production" && e === void 0)
    throw new Error("invariant requires an error message argument");
  if (!t) {
    var u;
    if (e === void 0)
      u = new Error(
        "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
      );
    else {
      var l = [n, r, i, o, a, s], c = 0;
      u = new Error(
        e.replace(/%s/g, function() {
          return l[c++];
        })
      ), u.name = "Invariant Violation";
    }
    throw u.framesToPop = 1, u;
  }
}, Cp = yp, it = /* @__PURE__ */ Oc(Cp), xe = ct(null);
function Dp() {
  it(!!je, "useGoogleMap is React hook and requires React version 16.8+");
  var t = je(xe);
  return it(!!t, "useGoogleMap needs a GoogleMap available up in the tree"), t;
}
function bp(t, e, n) {
  return Object.keys(t).reduce(function(i, o) {
    return e(i, t[o], o);
  }, n);
}
function Ep(t, e) {
  Object.keys(t).forEach(function(n) {
    return e(t[n], n);
  });
}
function wp(t, e, n, r) {
  var i = {}, o = function(a, s) {
    var u = n[s];
    u !== e[s] && (i[s] = u, a(r, u));
  };
  return Ep(t, o), i;
}
function Bp(t, e, n) {
  var r = bp(n, function(o, a, s) {
    return typeof t[s] == "function" && o.push(google.maps.event.addListener(e, a, t[s])), o;
  }, []);
  return r;
}
function xp(t) {
  google.maps.event.removeListener(t);
}
function Me(t) {
  t === void 0 && (t = []), t.forEach(xp);
}
function Se(t) {
  var e = t.updaterMap, n = t.eventMap, r = t.prevProps, i = t.nextProps, o = t.instance, a = Bp(i, o, n);
  return wp(e, r, i, o), a;
}
var ns = {
  onDblClick: "dblclick",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMapTypeIdChanged: "maptypeid_changed",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseDown: "mousedown",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onTilesLoaded: "tilesloaded",
  onBoundsChanged: "bounds_changed",
  onCenterChanged: "center_changed",
  onClick: "click",
  onDrag: "drag",
  onHeadingChanged: "heading_changed",
  onIdle: "idle",
  onProjectionChanged: "projection_changed",
  onResize: "resize",
  onTiltChanged: "tilt_changed",
  onZoomChanged: "zoom_changed"
}, rs = {
  extraMapTypes: function(t, e) {
    e.forEach(function(r, i) {
      t.mapTypes.set(String(i), r);
    });
  },
  center: function(t, e) {
    t.setCenter(e);
  },
  clickableIcons: function(t, e) {
    t.setClickableIcons(e);
  },
  heading: function(t, e) {
    t.setHeading(e);
  },
  mapTypeId: function(t, e) {
    t.setMapTypeId(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  streetView: function(t, e) {
    t.setStreetView(e);
  },
  tilt: function(t, e) {
    t.setTilt(e);
  },
  zoom: function(t, e) {
    t.setZoom(e);
  }
};
function Ap(t) {
  var e = t.children, n = t.options, r = t.id, i = t.mapContainerStyle, o = t.mapContainerClassName, a = t.center, s = t.onClick, u = t.onDblClick, l = t.onDrag, c = t.onDragEnd, d = t.onDragStart, p = t.onMouseMove, v = t.onMouseOut, m = t.onMouseOver, h = t.onMouseDown, f = t.onMouseUp, C = t.onRightClick, w = t.onCenterChanged, b = t.onLoad, S = t.onUnmount, D = I(null), E = D[0], L = D[1], F = Ue(null), H = I(null), P = H[0], $ = H[1], R = I(null), j = R[0], T = R[1], N = I(null), K = N[0], _ = N[1], oe = I(null), ie = oe[0], k = oe[1], U = I(null), J = U[0], q = U[1], te = I(null), Y = te[0], y = te[1], z = I(null), W = z[0], M = z[1], X = I(null), ne = X[0], G = X[1], le = I(null), se = le[0], pe = le[1], he = I(null), De = he[0], ye = he[1], be = I(null), ge = be[0], Ne = be[1], ue = I(null), We = ue[0], de = ue[1];
  return B(function() {
    n && E !== null && E.setOptions(n);
  }, [E, n]), B(function() {
    E !== null && typeof a < "u" && E.setCenter(a);
  }, [E, a]), B(function() {
    E && u && (j !== null && google.maps.event.removeListener(j), T(google.maps.event.addListener(E, "dblclick", u)));
  }, [u]), B(function() {
    E && c && (K !== null && google.maps.event.removeListener(K), _(google.maps.event.addListener(E, "dragend", c)));
  }, [c]), B(function() {
    E && d && (ie !== null && google.maps.event.removeListener(ie), k(google.maps.event.addListener(E, "dragstart", d)));
  }, [d]), B(function() {
    E && h && (J !== null && google.maps.event.removeListener(J), q(google.maps.event.addListener(E, "mousedown", h)));
  }, [h]), B(function() {
    E && p && (Y !== null && google.maps.event.removeListener(Y), y(google.maps.event.addListener(E, "mousemove", p)));
  }, [p]), B(function() {
    E && v && (W !== null && google.maps.event.removeListener(W), M(google.maps.event.addListener(E, "mouseout", v)));
  }, [v]), B(function() {
    E && m && (ne !== null && google.maps.event.removeListener(ne), G(google.maps.event.addListener(E, "mouseover", m)));
  }, [m]), B(function() {
    E && f && (se !== null && google.maps.event.removeListener(se), pe(google.maps.event.addListener(E, "mouseup", f)));
  }, [f]), B(function() {
    E && C && (De !== null && google.maps.event.removeListener(De), ye(google.maps.event.addListener(E, "rightclick", C)));
  }, [C]), B(function() {
    E && s && (ge !== null && google.maps.event.removeListener(ge), Ne(google.maps.event.addListener(E, "click", s)));
  }, [s]), B(function() {
    E && l && (We !== null && google.maps.event.removeListener(We), de(google.maps.event.addListener(E, "drag", l)));
  }, [l]), B(function() {
    E && w && (P !== null && google.maps.event.removeListener(P), $(google.maps.event.addListener(E, "center_changed", w)));
  }, [s]), B(function() {
    var Be = F.current === null ? null : new google.maps.Map(F.current, n);
    return L(Be), Be !== null && b && b(Be), function() {
      Be !== null && S && S(Be);
    };
  }, []), x.jsx("div", { id: r, ref: F, style: i, className: o, children: x.jsx(xe.Provider, { value: E, children: E !== null ? e : null }) });
}
st(Ap);
var Lp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.state = {
        map: null
      }, n.registeredEvents = [], n.mapRef = null, n.getInstance = function() {
        return n.mapRef === null ? null : new google.maps.Map(n.mapRef, n.props.options);
      }, n.panTo = function(r) {
        var i = n.getInstance();
        i && i.panTo(r);
      }, n.setMapCallback = function() {
        n.state.map !== null && n.props.onLoad && n.props.onLoad(n.state.map);
      }, n.getRef = function(r) {
        n.mapRef = r;
      }, n;
    }
    return e.prototype.componentDidMount = function() {
      var n = this.getInstance();
      this.registeredEvents = Se({
        updaterMap: rs,
        eventMap: ns,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(function() {
        return {
          map: n
        };
      }, this.setMapCallback);
    }, e.prototype.componentDidUpdate = function(n) {
      this.state.map !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
        updaterMap: rs,
        eventMap: ns,
        prevProps: n,
        nextProps: this.props,
        instance: this.state.map
      }));
    }, e.prototype.componentWillUnmount = function() {
      this.state.map !== null && (this.props.onUnmount && this.props.onUnmount(this.state.map), Me(this.registeredEvents));
    }, e.prototype.render = function() {
      return x.jsx("div", { id: this.props.id, ref: this.getRef, style: this.props.mapContainerStyle, className: this.props.mapContainerClassName, children: x.jsx(xe.Provider, { value: this.state.map, children: this.state.map !== null ? this.props.children : null }) });
    }, e;
  }(qe)
), Bn = typeof document < "u";
function Sc(t) {
  var e = t.url, n = t.id, r = t.nonce;
  return Bn ? new Promise(function(o, a) {
    var s = document.getElementById(n), u = window;
    if (s) {
      var l = s.getAttribute("data-state");
      if (s.src === e && l !== "error") {
        if (l === "ready")
          return o(n);
        var c = u.initMap, d = s.onerror;
        u.initMap = function() {
          c && c(), o(n);
        }, s.onerror = function(v) {
          d && d(v), a(v);
        };
        return;
      } else
        s.remove();
    }
    var p = document.createElement("script");
    p.type = "text/javascript", p.src = e, p.id = n, p.async = !0, p.nonce = r || "", p.onerror = function(m) {
      p.setAttribute("data-state", "error"), a(m);
    }, u.initMap = function() {
      p.setAttribute("data-state", "ready"), o(n);
    }, document.head.appendChild(p);
  }).catch(function(i) {
    throw console.error("injectScript error: ", i), i;
  }) : Promise.reject(new Error("document is undefined"));
}
function is(t) {
  var e = t.href;
  return e && (e.indexOf("https://fonts.googleapis.com/css?family=Roboto") === 0 || e.indexOf("https://fonts.googleapis.com/css?family=Google+Sans+Text") === 0) ? !0 : (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.styleSheet.cssText && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    t.styleSheet.cssText.replace(`\r
`, "").indexOf(".gm-style") === 0 ? (t.styleSheet.cssText = "", !0) : (
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      t.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      t.innerHTML && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      t.innerHTML.replace(`\r
`, "").indexOf(".gm-style") === 0 ? (t.innerHTML = "", !0) : (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        t.tagName.toLowerCase() === "style" && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !t.styleSheet && // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        !t.innerHTML
      )
    )
  );
}
function Pc() {
  var t = document.getElementsByTagName("head")[0];
  if (t) {
    var e = t.insertBefore.bind(t);
    t.insertBefore = function(i, o) {
      return is(i) || Reflect.apply(e, t, [i, o]), i;
    };
    var n = t.appendChild.bind(t);
    t.appendChild = function(i) {
      return is(i) || Reflect.apply(n, t, [i]), i;
    };
  }
}
function Fc(t) {
  var e = t.googleMapsApiKey, n = t.googleMapsClientId, r = t.version, i = r === void 0 ? "weekly" : r, o = t.language, a = t.region, s = t.libraries, u = t.channel, l = t.mapIds, c = t.authReferrerPolicy, d = [];
  return it(e && n || !(e && n), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."), e ? d.push("key=".concat(e)) : n && d.push("client=".concat(n)), i && d.push("v=".concat(i)), o && d.push("language=".concat(o)), a && d.push("region=".concat(a)), s && s.length && d.push("libraries=".concat(s.sort().join(","))), u && d.push("channel=".concat(u)), l && l.length && d.push("map_ids=".concat(l.join(","))), c && d.push("auth_referrer_policy=".concat(c)), d.push("callback=initMap"), "https://maps.googleapis.com/maps/api/js?".concat(d.join("&"));
}
var ar = !1;
function Mc() {
  return x.jsx("div", { children: "Loading..." });
}
var Mo = {
  id: "script-loader",
  version: "weekly"
}, Op = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.check = Oi(), n.state = {
        loaded: !1
      }, n.cleanupCallback = function() {
        delete window.google.maps, n.injectScript();
      }, n.isCleaningUp = function() {
        return vp(n, void 0, void 0, function() {
          function r(i) {
            if (!ar)
              i();
            else if (Bn)
              var o = window.setInterval(function() {
                ar || (window.clearInterval(o), i());
              }, 1);
          }
          return gp(this, function(i) {
            return [2, new Promise(r)];
          });
        });
      }, n.cleanup = function() {
        ar = !0;
        var r = document.getElementById(n.props.id);
        r && r.parentNode && r.parentNode.removeChild(r), Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(o) {
          return typeof o.src == "string" && o.src.includes("maps.googleapis");
        }).forEach(function(o) {
          o.parentNode && o.parentNode.removeChild(o);
        }), Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(o) {
          return o.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
        }).forEach(function(o) {
          o.parentNode && o.parentNode.removeChild(o);
        }), Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(o) {
          return o.innerText !== void 0 && o.innerText.length > 0 && o.innerText.includes(".gm-");
        }).forEach(function(o) {
          o.parentNode && o.parentNode.removeChild(o);
        });
      }, n.injectScript = function() {
        n.props.preventGoogleFontsLoading && Pc(), it(!!n.props.id, 'LoadScript requires "id" prop to be a string: %s', n.props.id);
        var r = {
          id: n.props.id,
          nonce: n.props.nonce,
          url: Fc(n.props)
        };
        Sc(r).then(function() {
          n.props.onLoad && n.props.onLoad(), n.setState(function() {
            return {
              loaded: !0
            };
          });
        }).catch(function(i) {
          n.props.onError && n.props.onError(i), console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(n.props.googleMapsApiKey || "-", ") or Client ID (").concat(n.props.googleMapsClientId || "-", `) to <LoadScript />
          Otherwise it is a Network issue.
        `));
        });
      }, n;
    }
    return e.prototype.componentDidMount = function() {
      if (Bn) {
        if (window.google && window.google.maps && !ar) {
          console.error("google api is already presented");
          return;
        }
        this.isCleaningUp().then(this.injectScript).catch(function(r) {
          console.error("Error at injecting script after cleaning up: ", r);
        });
      }
    }, e.prototype.componentDidUpdate = function(n) {
      this.props.libraries !== n.libraries && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), Bn && n.language !== this.props.language && (this.cleanup(), this.setState(function() {
        return {
          loaded: !1
        };
      }, this.cleanupCallback));
    }, e.prototype.componentWillUnmount = function() {
      var n = this;
      if (Bn) {
        this.cleanup();
        var r = function() {
          n.check.current || (delete window.google, ar = !1);
        };
        window.setTimeout(r, 1), this.props.onUnmount && this.props.onUnmount();
      }
    }, e.prototype.render = function() {
      return x.jsxs(x.Fragment, { children: [x.jsx("div", { ref: this.check }), this.state.loaded ? this.props.children : this.props.loadingElement || x.jsx(Mc, {})] });
    }, e.defaultProps = Mo, e;
  }(qe)
), os;
function Sp(t) {
  var e = t.id, n = e === void 0 ? Mo.id : e, r = t.version, i = r === void 0 ? Mo.version : r, o = t.nonce, a = t.googleMapsApiKey, s = t.googleMapsClientId, u = t.language, l = t.region, c = t.libraries, d = t.preventGoogleFontsLoading, p = t.channel, v = t.mapIds, m = t.authReferrerPolicy, h = Ue(!1), f = I(!1), C = f[0], w = f[1], b = I(void 0), S = b[0], D = b[1];
  B(function() {
    return h.current = !0, function() {
      h.current = !1;
    };
  }, []), B(function() {
    Bn && d && Pc();
  }, [d]), B(function() {
    C && it(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.");
  }, [C]);
  var E = Fc({
    version: i,
    googleMapsApiKey: a,
    googleMapsClientId: s,
    language: u,
    region: l,
    libraries: c,
    channel: p,
    mapIds: v,
    authReferrerPolicy: m
  });
  B(function() {
    if (!Bn)
      return;
    function H() {
      h.current && (w(!0), os = E);
    }
    if (window.google && window.google.maps && os === E) {
      H();
      return;
    }
    Sc({ id: n, url: E, nonce: o }).then(H).catch(function($) {
      h.current && D($), console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(a || "-", ") or Client ID (").concat(s || "-", `)
        Otherwise it is a Network issue.
      `)), console.error($);
    });
  }, [n, E, o]);
  var L = Ue();
  return B(function() {
    L.current && c !== L.current && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), L.current = c;
  }, [c]), { isLoaded: C, loadError: S, url: E };
}
var Pp = x.jsx(Mc, {});
function Fp(t) {
  var e = t.loadingElement, n = t.onLoad, r = t.onError, i = t.onUnmount, o = t.children, a = la(t, ["loadingElement", "onLoad", "onError", "onUnmount", "children"]), s = Sp(a), u = s.isLoaded, l = s.loadError;
  return B(function() {
    u && typeof n == "function" && n();
  }, [u, n]), B(function() {
    l && typeof r == "function" && r(l);
  }, [l, r]), B(function() {
    return function() {
      i && i();
    };
  }, [i]), u ? o : e || Pp;
}
st(Fp);
var as;
(function(t) {
  t[t.INITIALIZED = 0] = "INITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.SUCCESS = 2] = "SUCCESS", t[t.FAILURE = 3] = "FAILURE";
})(as || (as = {}));
var ss = {}, us = {
  options: function(t, e) {
    t.setOptions(e);
  }
};
function Mp(t) {
  var e = t.options, n = t.onLoad, r = t.onUnmount, i = je(xe), o = I(null), a = o[0], s = o[1];
  return B(function() {
    a !== null && a.setMap(i);
  }, [i]), B(function() {
    e && a !== null && a.setOptions(e);
  }, [a, e]), B(function() {
    var u = new google.maps.TrafficLayer(ve(ve({}, e || {}), { map: i }));
    return s(u), n && n(u), function() {
      a !== null && (r && r(a), a.setMap(null));
    };
  }, []), null;
}
st(Mp);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      trafficLayer: null
    }, n.setTrafficLayerCallback = function() {
      n.state.trafficLayer !== null && n.props.onLoad && n.props.onLoad(n.state.trafficLayer);
    }, n.registeredEvents = [], n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.TrafficLayer(ve(ve({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: us,
      eventMap: ss,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        trafficLayer: n
      };
    }, this.setTrafficLayerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.trafficLayer !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: us,
      eventMap: ss,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.trafficLayer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.trafficLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.trafficLayer), Me(this.registeredEvents), this.state.trafficLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
function kp(t) {
  var e = t.onLoad, n = t.onUnmount, r = je(xe), i = I(null), o = i[0], a = i[1];
  return B(function() {
    o !== null && o.setMap(r);
  }, [r]), B(function() {
    var s = new google.maps.BicyclingLayer();
    return a(s), s.setMap(r), e && e(s), function() {
      s !== null && (n && n(s), s.setMap(null));
    };
  }, []), null;
}
st(kp);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      bicyclingLayer: null
    }, n.setBicyclingLayerCallback = function() {
      n.state.bicyclingLayer !== null && (n.state.bicyclingLayer.setMap(n.context), n.props.onLoad && n.props.onLoad(n.state.bicyclingLayer));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.BicyclingLayer();
    this.setState(function() {
      return {
        bicyclingLayer: n
      };
    }, this.setBicyclingLayerCallback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.bicyclingLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.bicyclingLayer), this.state.bicyclingLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
function Tp(t) {
  var e = t.onLoad, n = t.onUnmount, r = je(xe), i = I(null), o = i[0], a = i[1];
  return B(function() {
    o !== null && o.setMap(r);
  }, [r]), B(function() {
    var s = new google.maps.TransitLayer();
    return a(s), s.setMap(r), e && e(s), function() {
      o !== null && (n && n(o), o.setMap(null));
    };
  }, []), null;
}
st(Tp);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      transitLayer: null
    }, n.setTransitLayerCallback = function() {
      n.state.transitLayer !== null && (n.state.transitLayer.setMap(n.context), n.props.onLoad && n.props.onLoad(n.state.transitLayer));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.TransitLayer();
    this.setState(function() {
      return {
        transitLayer: n
      };
    }, this.setTransitLayerCallback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.transitLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.transitLayer), this.state.transitLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var ls = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
}, cs = {
  drawingMode: function(t, e) {
    t.setDrawingMode(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  }
};
function Rp(t) {
  var e = t.options, n = t.drawingMode, r = t.onCircleComplete, i = t.onMarkerComplete, o = t.onOverlayComplete, a = t.onPolygonComplete, s = t.onPolylineComplete, u = t.onRectangleComplete, l = t.onLoad, c = t.onUnmount, d = je(xe), p = I(null), v = p[0], m = p[1], h = I(null), f = h[0], C = h[1], w = I(null), b = w[0], S = w[1], D = I(null), E = D[0], L = D[1], F = I(null), H = F[0], P = F[1], $ = I(null), R = $[0], j = $[1], T = I(null), N = T[0], K = T[1];
  return B(function() {
    v !== null && v.setMap(d);
  }, [d]), B(function() {
    e && v !== null && v.setOptions(e);
  }, [v, e]), B(function() {
    v !== null && v.setDrawingMode(n ?? null);
  }, [v, n]), B(function() {
    v && r && (f !== null && google.maps.event.removeListener(f), C(google.maps.event.addListener(v, "circlecomplete", r)));
  }, [v, r]), B(function() {
    v && i && (b !== null && google.maps.event.removeListener(b), S(google.maps.event.addListener(v, "markercomplete", i)));
  }, [v, i]), B(function() {
    v && o && (E !== null && google.maps.event.removeListener(E), L(google.maps.event.addListener(v, "overlaycomplete", o)));
  }, [v, o]), B(function() {
    v && a && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(v, "polygoncomplete", a)));
  }, [v, a]), B(function() {
    v && s && (R !== null && google.maps.event.removeListener(R), j(google.maps.event.addListener(v, "polylinecomplete", s)));
  }, [v, s]), B(function() {
    v && u && (N !== null && google.maps.event.removeListener(N), K(google.maps.event.addListener(v, "rectanglecomplete", u)));
  }, [v, u]), B(function() {
    it(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    var _ = new google.maps.drawing.DrawingManager(ve(ve({}, e || {}), { map: d }));
    return n && _.setDrawingMode(n), r && C(google.maps.event.addListener(_, "circlecomplete", r)), i && S(google.maps.event.addListener(_, "markercomplete", i)), o && L(google.maps.event.addListener(_, "overlaycomplete", o)), a && P(google.maps.event.addListener(_, "polygoncomplete", a)), s && j(google.maps.event.addListener(_, "polylinecomplete", s)), u && K(google.maps.event.addListener(_, "rectanglecomplete", u)), m(_), l && l(_), function() {
      v !== null && (f && google.maps.event.removeListener(f), b && google.maps.event.removeListener(b), E && google.maps.event.removeListener(E), H && google.maps.event.removeListener(H), R && google.maps.event.removeListener(R), N && google.maps.event.removeListener(N), c && c(v), v.setMap(null));
    };
  }, []), null;
}
st(Rp);
(function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this, n) || this;
    return r.registeredEvents = [], r.state = {
      drawingManager: null
    }, r.setDrawingManagerCallback = function() {
      r.state.drawingManager !== null && r.props.onLoad && r.props.onLoad(r.state.drawingManager);
    }, it(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing), r;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.drawing.DrawingManager(ve(ve({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: cs,
      eventMap: ls,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        drawingManager: n
      };
    }, this.setDrawingManagerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.drawingManager !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: cs,
      eventMap: ls,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.drawingManager
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.drawingManager !== null && (this.props.onUnmount && this.props.onUnmount(this.state.drawingManager), Me(this.registeredEvents), this.state.drawingManager.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var fs = {
  onAnimationChanged: "animation_changed",
  onClick: "click",
  onClickableChanged: "clickable_changed",
  onCursorChanged: "cursor_changed",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDraggableChanged: "draggable_changed",
  onDragStart: "dragstart",
  onFlatChanged: "flat_changed",
  onIconChanged: "icon_changed",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onPositionChanged: "position_changed",
  onRightClick: "rightclick",
  onShapeChanged: "shape_changed",
  onTitleChanged: "title_changed",
  onVisibleChanged: "visible_changed",
  onZindexChanged: "zindex_changed"
}, ds = {
  animation: function(t, e) {
    t.setAnimation(e);
  },
  clickable: function(t, e) {
    t.setClickable(e);
  },
  cursor: function(t, e) {
    t.setCursor(e);
  },
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  icon: function(t, e) {
    t.setIcon(e);
  },
  label: function(t, e) {
    t.setLabel(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  opacity: function(t, e) {
    t.setOpacity(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  position: function(t, e) {
    t.setPosition(e);
  },
  shape: function(t, e) {
    t.setShape(e);
  },
  title: function(t, e) {
    t.setTitle(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
}, yi = {};
function Ip(t) {
  var e = t.position, n = t.options, r = t.clusterer, i = t.noClustererRedraw, o = t.children, a = t.draggable, s = t.visible, u = t.animation, l = t.clickable, c = t.cursor, d = t.icon, p = t.label, v = t.opacity, m = t.shape, h = t.title, f = t.zIndex, C = t.onClick, w = t.onDblClick, b = t.onDrag, S = t.onDragEnd, D = t.onDragStart, E = t.onMouseOut, L = t.onMouseOver, F = t.onMouseUp, H = t.onMouseDown, P = t.onRightClick, $ = t.onClickableChanged, R = t.onCursorChanged, j = t.onAnimationChanged, T = t.onDraggableChanged, N = t.onFlatChanged, K = t.onIconChanged, _ = t.onPositionChanged, oe = t.onShapeChanged, ie = t.onTitleChanged, k = t.onVisibleChanged, U = t.onZindexChanged, J = t.onLoad, q = t.onUnmount, te = je(xe), Y = I(null), y = Y[0], z = Y[1], W = I(null), M = W[0], X = W[1], ne = I(null), G = ne[0], le = ne[1], se = I(null), pe = se[0], he = se[1], De = I(null), ye = De[0], be = De[1], ge = I(null), Ne = ge[0], ue = ge[1], We = I(null), de = We[0], Be = We[1], Te = I(null), Xe = Te[0], nt = Te[1], Ae = I(null), vt = Ae[0], ft = Ae[1], Xt = I(null), Ot = Xt[0], Mt = Xt[1], Rn = I(null), In = Rn[0], jn = Rn[1], Nn = I(null), Rt = Nn[0], gn = Nn[1], zt = I(null), Jt = zt[0], _n = zt[1], Qn = I(null), $n = Qn[0], er = Qn[1], Ir = I(null), mn = Ir[0], tr = Ir[1], jr = I(null), zn = jr[0], nr = jr[1], rr = I(null), Wn = rr[0], Nr = rr[1], _r = I(null), Un = _r[0], A = _r[1], ee = I(null), ae = ee[0], Ce = ee[1], ke = I(null), Re = ke[0], Pe = ke[1], Le = I(null), ot = Le[0], Ge = Le[1], Je = I(null), dt = Je[0], Wt = Je[1];
  B(function() {
    y !== null && y.setMap(te);
  }, [te]), B(function() {
    typeof n < "u" && y !== null && y.setOptions(n);
  }, [y, n]), B(function() {
    typeof a < "u" && y !== null && y.setDraggable(a);
  }, [y, a]), B(function() {
    e && y !== null && y.setPosition(e);
  }, [y, e]), B(function() {
    typeof s < "u" && y !== null && y.setVisible(s);
  }, [y, s]), B(function() {
    y == null || y.setAnimation(u);
  }, [y, u]), B(function() {
    y && l !== void 0 && y.setClickable(l);
  }, [y, l]), B(function() {
    y && c !== void 0 && y.setCursor(c);
  }, [y, c]), B(function() {
    y && d !== void 0 && y.setIcon(d);
  }, [y, d]), B(function() {
    y && p !== void 0 && y.setLabel(p);
  }, [y, p]), B(function() {
    y && v !== void 0 && y.setOpacity(v);
  }, [y, v]), B(function() {
    y && m !== void 0 && y.setShape(m);
  }, [y, m]), B(function() {
    y && h !== void 0 && y.setTitle(h);
  }, [y, h]), B(function() {
    y && f !== void 0 && y.setZIndex(f);
  }, [y, f]), B(function() {
    y && w && (M !== null && google.maps.event.removeListener(M), X(google.maps.event.addListener(y, "dblclick", w)));
  }, [w]), B(function() {
    y && S && (G !== null && google.maps.event.removeListener(G), le(google.maps.event.addListener(y, "dragend", S)));
  }, [S]), B(function() {
    y && D && (pe !== null && google.maps.event.removeListener(pe), he(google.maps.event.addListener(y, "dragstart", D)));
  }, [D]), B(function() {
    y && H && (ye !== null && google.maps.event.removeListener(ye), be(google.maps.event.addListener(y, "mousedown", H)));
  }, [H]), B(function() {
    y && E && (Ne !== null && google.maps.event.removeListener(Ne), ue(google.maps.event.addListener(y, "mouseout", E)));
  }, [E]), B(function() {
    y && L && (de !== null && google.maps.event.removeListener(de), Be(google.maps.event.addListener(y, "mouseover", L)));
  }, [L]), B(function() {
    y && F && (Xe !== null && google.maps.event.removeListener(Xe), nt(google.maps.event.addListener(y, "mouseup", F)));
  }, [F]), B(function() {
    y && P && (vt !== null && google.maps.event.removeListener(vt), ft(google.maps.event.addListener(y, "rightclick", P)));
  }, [P]), B(function() {
    y && C && (Ot !== null && google.maps.event.removeListener(Ot), Mt(google.maps.event.addListener(y, "click", C)));
  }, [C]), B(function() {
    y && b && (In !== null && google.maps.event.removeListener(In), jn(google.maps.event.addListener(y, "drag", b)));
  }, [b]), B(function() {
    y && $ && (Rt !== null && google.maps.event.removeListener(Rt), gn(google.maps.event.addListener(y, "clickable_changed", $)));
  }, [$]), B(function() {
    y && R && (Jt !== null && google.maps.event.removeListener(Jt), _n(google.maps.event.addListener(y, "cursor_changed", R)));
  }, [R]), B(function() {
    y && j && ($n !== null && google.maps.event.removeListener($n), er(google.maps.event.addListener(y, "animation_changed", j)));
  }, [j]), B(function() {
    y && T && (mn !== null && google.maps.event.removeListener(mn), tr(google.maps.event.addListener(y, "draggable_changed", T)));
  }, [T]), B(function() {
    y && N && (zn !== null && google.maps.event.removeListener(zn), nr(google.maps.event.addListener(y, "flat_changed", N)));
  }, [N]), B(function() {
    y && K && (Wn !== null && google.maps.event.removeListener(Wn), Nr(google.maps.event.addListener(y, "icon_changed", K)));
  }, [K]), B(function() {
    y && _ && (Un !== null && google.maps.event.removeListener(Un), A(google.maps.event.addListener(y, "position_changed", _)));
  }, [_]), B(function() {
    y && oe && (ae !== null && google.maps.event.removeListener(ae), Ce(google.maps.event.addListener(y, "shape_changed", oe)));
  }, [oe]), B(function() {
    y && ie && (Re !== null && google.maps.event.removeListener(Re), Pe(google.maps.event.addListener(y, "title_changed", ie)));
  }, [ie]), B(function() {
    y && k && (ot !== null && google.maps.event.removeListener(ot), Ge(google.maps.event.addListener(y, "visible_changed", k)));
  }, [k]), B(function() {
    y && U && (dt !== null && google.maps.event.removeListener(dt), Wt(google.maps.event.addListener(y, "zindex_changed", U)));
  }, [U]), B(function() {
    var at = ve(ve(ve({}, n || yi), r ? yi : { map: te }), { position: e }), Ee = new google.maps.Marker(at);
    return r ? r.addMarker(Ee, !!i) : Ee.setMap(te), e && Ee.setPosition(e), typeof s < "u" && Ee.setVisible(s), typeof a < "u" && Ee.setDraggable(a), typeof l < "u" && Ee.setClickable(l), typeof c == "string" && Ee.setCursor(c), d && Ee.setIcon(d), typeof p < "u" && Ee.setLabel(p), typeof v < "u" && Ee.setOpacity(v), m && Ee.setShape(m), typeof h == "string" && Ee.setTitle(h), typeof f == "number" && Ee.setZIndex(f), w && X(google.maps.event.addListener(Ee, "dblclick", w)), S && le(google.maps.event.addListener(Ee, "dragend", S)), D && he(google.maps.event.addListener(Ee, "dragstart", D)), H && be(google.maps.event.addListener(Ee, "mousedown", H)), E && ue(google.maps.event.addListener(Ee, "mouseout", E)), L && Be(google.maps.event.addListener(Ee, "mouseover", L)), F && nt(google.maps.event.addListener(Ee, "mouseup", F)), P && ft(google.maps.event.addListener(Ee, "rightclick", P)), C && Mt(google.maps.event.addListener(Ee, "click", C)), b && jn(google.maps.event.addListener(Ee, "drag", b)), $ && gn(google.maps.event.addListener(Ee, "clickable_changed", $)), R && _n(google.maps.event.addListener(Ee, "cursor_changed", R)), j && er(google.maps.event.addListener(Ee, "animation_changed", j)), T && tr(google.maps.event.addListener(Ee, "draggable_changed", T)), N && nr(google.maps.event.addListener(Ee, "flat_changed", N)), K && Nr(google.maps.event.addListener(Ee, "icon_changed", K)), _ && A(google.maps.event.addListener(Ee, "position_changed", _)), oe && Ce(google.maps.event.addListener(Ee, "shape_changed", oe)), ie && Pe(google.maps.event.addListener(Ee, "title_changed", ie)), k && Ge(google.maps.event.addListener(Ee, "visible_changed", k)), U && Wt(google.maps.event.addListener(Ee, "zindex_changed", U)), z(Ee), J && J(Ee), function() {
      M !== null && google.maps.event.removeListener(M), G !== null && google.maps.event.removeListener(G), pe !== null && google.maps.event.removeListener(pe), ye !== null && google.maps.event.removeListener(ye), Ne !== null && google.maps.event.removeListener(Ne), de !== null && google.maps.event.removeListener(de), Xe !== null && google.maps.event.removeListener(Xe), vt !== null && google.maps.event.removeListener(vt), Ot !== null && google.maps.event.removeListener(Ot), Rt !== null && google.maps.event.removeListener(Rt), Jt !== null && google.maps.event.removeListener(Jt), $n !== null && google.maps.event.removeListener($n), mn !== null && google.maps.event.removeListener(mn), zn !== null && google.maps.event.removeListener(zn), Wn !== null && google.maps.event.removeListener(Wn), Un !== null && google.maps.event.removeListener(Un), Re !== null && google.maps.event.removeListener(Re), ot !== null && google.maps.event.removeListener(ot), dt !== null && google.maps.event.removeListener(dt), q && q(Ee), r ? r.removeMarker(Ee, !!i) : Ee && Ee.setMap(null);
    };
  }, []);
  var Ut = Gt(function() {
    return o ? _t.map(o, function(at) {
      if (!vc(at))
        return at;
      var Ee = at;
      return gc(Ee, { anchor: y });
    }) : null;
  }, [o, y]);
  return x.jsx(x.Fragment, { children: Ut }) || null;
}
st(Ip);
var jp = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.registeredEvents = [], n;
    }
    return e.prototype.componentDidMount = function() {
      var n = ve(ve(ve({}, this.props.options || yi), this.props.clusterer ? yi : { map: this.context }), { position: this.props.position });
      this.marker = new google.maps.Marker(n), this.props.clusterer ? this.props.clusterer.addMarker(this.marker, !!this.props.noClustererRedraw) : this.marker.setMap(this.context), this.registeredEvents = Se({
        updaterMap: ds,
        eventMap: fs,
        prevProps: {},
        nextProps: this.props,
        instance: this.marker
      }), this.props.onLoad && this.props.onLoad(this.marker);
    }, e.prototype.componentDidUpdate = function(n) {
      this.marker && (Me(this.registeredEvents), this.registeredEvents = Se({
        updaterMap: ds,
        eventMap: fs,
        prevProps: n,
        nextProps: this.props,
        instance: this.marker
      }));
    }, e.prototype.componentWillUnmount = function() {
      this.marker && (this.props.onUnmount && this.props.onUnmount(this.marker), Me(this.registeredEvents), this.props.clusterer ? this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw) : this.marker && this.marker.setMap(null));
    }, e.prototype.render = function() {
      var n = this, r = null;
      return this.props.children && (r = _t.map(this.props.children, function(i) {
        if (!vc(i))
          return i;
        var o = i;
        return gc(o, { anchor: n.marker });
      })), r || null;
    }, e.contextType = xe, e;
  }(qe)
), Np = (
  /** @class */
  function() {
    function t(e, n) {
      e.getClusterer().extend(t, google.maps.OverlayView), this.cluster = e, this.clusterClassName = this.cluster.getClusterer().getClusterClass(), this.className = this.clusterClassName, this.styles = n, this.center = void 0, this.div = null, this.sums = null, this.visible = !1, this.boundsChangedListener = null, this.url = "", this.height = 0, this.width = 0, this.anchorText = [0, 0], this.anchorIcon = [0, 0], this.textColor = "black", this.textSize = 11, this.textDecoration = "none", this.fontWeight = "bold", this.fontStyle = "normal", this.fontFamily = "Arial,sans-serif", this.backgroundPosition = "0 0", this.cMouseDownInCluster = null, this.cDraggingMapByCluster = null, this.timeOut = null, this.setMap(e.getMap()), this.onBoundsChanged = this.onBoundsChanged.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onClick = this.onClick.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onAdd = this.onAdd.bind(this), this.onRemove = this.onRemove.bind(this), this.draw = this.draw.bind(this), this.hide = this.hide.bind(this), this.show = this.show.bind(this), this.useStyle = this.useStyle.bind(this), this.setCenter = this.setCenter.bind(this), this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    return t.prototype.onBoundsChanged = function() {
      this.cDraggingMapByCluster = this.cMouseDownInCluster;
    }, t.prototype.onMouseDown = function() {
      this.cMouseDownInCluster = !0, this.cDraggingMapByCluster = !1;
    }, t.prototype.onClick = function(e) {
      if (this.cMouseDownInCluster = !1, !this.cDraggingMapByCluster) {
        var n = this.cluster.getClusterer();
        if (google.maps.event.trigger(n, "click", this.cluster), google.maps.event.trigger(n, "clusterclick", this.cluster), n.getZoomOnClick()) {
          var r = n.getMaxZoom(), i = this.cluster.getBounds(), o = n.getMap();
          o !== null && "fitBounds" in o && o.fitBounds(i), this.timeOut = window.setTimeout(function() {
            var a = n.getMap();
            if (a !== null) {
              "fitBounds" in a && a.fitBounds(i);
              var s = a.getZoom() || 0;
              r !== null && s > r && a.setZoom(r + 1);
            }
          }, 100);
        }
        e.cancelBubble = !0, e.stopPropagation && e.stopPropagation();
      }
    }, t.prototype.onMouseOver = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseover", this.cluster);
    }, t.prototype.onMouseOut = function() {
      google.maps.event.trigger(this.cluster.getClusterer(), "mouseout", this.cluster);
    }, t.prototype.onAdd = function() {
      var e;
      this.div = document.createElement("div"), this.div.className = this.className, this.visible && this.show(), (e = this.getPanes()) === null || e === void 0 || e.overlayMouseTarget.appendChild(this.div);
      var n = this.getMap();
      n !== null && (this.boundsChangedListener = google.maps.event.addListener(n, "bounds_changed", this.onBoundsChanged), this.div.addEventListener("mousedown", this.onMouseDown), this.div.addEventListener("click", this.onClick), this.div.addEventListener("mouseover", this.onMouseOver), this.div.addEventListener("mouseout", this.onMouseOut));
    }, t.prototype.onRemove = function() {
      this.div && this.div.parentNode && (this.hide(), this.boundsChangedListener !== null && google.maps.event.removeListener(this.boundsChangedListener), this.div.removeEventListener("mousedown", this.onMouseDown), this.div.removeEventListener("click", this.onClick), this.div.removeEventListener("mouseover", this.onMouseOver), this.div.removeEventListener("mouseout", this.onMouseOut), this.div.parentNode.removeChild(this.div), this.timeOut !== null && (window.clearTimeout(this.timeOut), this.timeOut = null), this.div = null);
    }, t.prototype.draw = function() {
      if (this.visible && this.div !== null && this.center) {
        var e = this.getPosFromLatLng(this.center);
        this.div.style.top = e !== null ? "".concat(e.y, "px") : "0", this.div.style.left = e !== null ? "".concat(e.x, "px") : "0";
      }
    }, t.prototype.hide = function() {
      this.div && (this.div.style.display = "none"), this.visible = !1;
    }, t.prototype.show = function() {
      var e, n, r, i, o, a;
      if (this.div && this.center) {
        var s = this.sums === null || typeof this.sums.title > "u" || this.sums.title === "" ? this.cluster.getClusterer().getTitle() : this.sums.title, u = this.backgroundPosition.split(" "), l = parseInt(((e = u[0]) === null || e === void 0 ? void 0 : e.replace(/^\s+|\s+$/g, "")) || "0", 10), c = parseInt(((n = u[1]) === null || n === void 0 ? void 0 : n.replace(/^\s+|\s+$/g, "")) || "0", 10), d = this.getPosFromLatLng(this.center);
        this.div.className = this.className, this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(d !== null ? "".concat(d.y, "px") : "0", "; left: ").concat(d !== null ? "".concat(d.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
        var p = document.createElement("img");
        p.alt = s, p.src = this.url, p.width = this.width, p.height = this.height, p.setAttribute("style", "position: absolute; top: ".concat(c, "px; left: ").concat(l, "px")), this.cluster.getClusterer().enableRetinaIcons || (p.style.clip = "rect(-".concat(c, "px, -").concat(l + this.width, "px, -").concat(c + this.height, ", -").concat(l, ")"));
        var v = document.createElement("div");
        v.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px")), !((r = this.sums) === null || r === void 0) && r.text && (v.innerText = "".concat((i = this.sums) === null || i === void 0 ? void 0 : i.text)), !((o = this.sums) === null || o === void 0) && o.html && (v.innerHTML = "".concat((a = this.sums) === null || a === void 0 ? void 0 : a.html)), this.div.innerHTML = "", this.div.appendChild(p), this.div.appendChild(v), this.div.title = s, this.div.style.display = "";
      }
      this.visible = !0;
    }, t.prototype.useStyle = function(e) {
      this.sums = e;
      var n = this.cluster.getClusterer().getStyles(), r = n[Math.min(n.length - 1, Math.max(0, e.index - 1))];
      r && (this.url = r.url, this.height = r.height, this.width = r.width, r.className && (this.className = "".concat(this.clusterClassName, " ").concat(r.className)), this.anchorText = r.anchorText || [0, 0], this.anchorIcon = r.anchorIcon || [this.height / 2, this.width / 2], this.textColor = r.textColor || "black", this.textSize = r.textSize || 11, this.textDecoration = r.textDecoration || "none", this.fontWeight = r.fontWeight || "bold", this.fontStyle = r.fontStyle || "normal", this.fontFamily = r.fontFamily || "Arial,sans-serif", this.backgroundPosition = r.backgroundPosition || "0 0");
    }, t.prototype.setCenter = function(e) {
      this.center = e;
    }, t.prototype.getPosFromLatLng = function(e) {
      var n = this.getProjection().fromLatLngToDivPixel(e);
      return n !== null && (n.x -= this.anchorIcon[1], n.y -= this.anchorIcon[0]), n;
    }, t;
  }()
), _p = (
  /** @class */
  function() {
    function t(e) {
      this.markerClusterer = e, this.map = this.markerClusterer.getMap(), this.gridSize = this.markerClusterer.getGridSize(), this.minClusterSize = this.markerClusterer.getMinimumClusterSize(), this.averageCenter = this.markerClusterer.getAverageCenter(), this.markers = [], this.center = void 0, this.bounds = null, this.clusterIcon = new Np(this, this.markerClusterer.getStyles()), this.getSize = this.getSize.bind(this), this.getMarkers = this.getMarkers.bind(this), this.getCenter = this.getCenter.bind(this), this.getMap = this.getMap.bind(this), this.getClusterer = this.getClusterer.bind(this), this.getBounds = this.getBounds.bind(this), this.remove = this.remove.bind(this), this.addMarker = this.addMarker.bind(this), this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this), this.calculateBounds = this.calculateBounds.bind(this), this.updateIcon = this.updateIcon.bind(this), this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
    }
    return t.prototype.getSize = function() {
      return this.markers.length;
    }, t.prototype.getMarkers = function() {
      return this.markers;
    }, t.prototype.getCenter = function() {
      return this.center;
    }, t.prototype.getMap = function() {
      return this.map;
    }, t.prototype.getClusterer = function() {
      return this.markerClusterer;
    }, t.prototype.getBounds = function() {
      for (var e = new google.maps.LatLngBounds(this.center, this.center), n = this.getMarkers(), r = 0, i = n; r < i.length; r++) {
        var o = i[r], a = o.getPosition();
        a && e.extend(a);
      }
      return e;
    }, t.prototype.remove = function() {
      this.clusterIcon.setMap(null), this.markers = [], delete this.markers;
    }, t.prototype.addMarker = function(e) {
      var n;
      if (this.isMarkerAlreadyAdded(e))
        return !1;
      if (this.center) {
        if (this.averageCenter) {
          var r = e.getPosition();
          if (r) {
            var i = this.markers.length + 1;
            this.center = new google.maps.LatLng((this.center.lat() * (i - 1) + r.lat()) / i, (this.center.lng() * (i - 1) + r.lng()) / i), this.calculateBounds();
          }
        }
      } else {
        var r = e.getPosition();
        r && (this.center = r, this.calculateBounds());
      }
      e.isAdded = !0, this.markers.push(e);
      var o = this.markers.length, a = this.markerClusterer.getMaxZoom(), s = (n = this.map) === null || n === void 0 ? void 0 : n.getZoom();
      if (a !== null && typeof s < "u" && s > a)
        e.getMap() !== this.map && e.setMap(this.map);
      else if (o < this.minClusterSize)
        e.getMap() !== this.map && e.setMap(this.map);
      else if (o === this.minClusterSize)
        for (var u = 0, l = this.markers; u < l.length; u++) {
          var c = l[u];
          c.setMap(null);
        }
      else
        e.setMap(null);
      return !0;
    }, t.prototype.isMarkerInClusterBounds = function(e) {
      if (this.bounds !== null) {
        var n = e.getPosition();
        if (n)
          return this.bounds.contains(n);
      }
      return !1;
    }, t.prototype.calculateBounds = function() {
      this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    }, t.prototype.updateIcon = function() {
      var e, n = this.markers.length, r = this.markerClusterer.getMaxZoom(), i = (e = this.map) === null || e === void 0 ? void 0 : e.getZoom();
      if (r !== null && typeof i < "u" && i > r) {
        this.clusterIcon.hide();
        return;
      }
      if (n < this.minClusterSize) {
        this.clusterIcon.hide();
        return;
      }
      this.center && this.clusterIcon.setCenter(this.center), this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length)), this.clusterIcon.show();
    }, t.prototype.isMarkerAlreadyAdded = function(e) {
      if (this.markers.includes)
        return this.markers.includes(e);
      for (var n = 0; n < this.markers.length; n++)
        if (e === this.markers[n])
          return !0;
      return !1;
    }, t;
  }()
);
function $p(t, e) {
  var n = t.length, r = n.toString().length, i = Math.min(r, e);
  return {
    text: n.toString(),
    index: i,
    title: ""
  };
}
var zp = 2e3, Wp = 500, Up = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", Hp = "png", Vp = [53, 56, 66, 78, 90], qp = "cluster", kc = (
  /** @class */
  function() {
    function t(e, n, r) {
      n === void 0 && (n = []), r === void 0 && (r = {}), this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this), this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this), this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this), this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this), this.addToClosestCluster = this.addToClosestCluster.bind(this), this.getImageExtension = this.getImageExtension.bind(this), this.setImageExtension = this.setImageExtension.bind(this), this.getExtendedBounds = this.getExtendedBounds.bind(this), this.getAverageCenter = this.getAverageCenter.bind(this), this.setAverageCenter = this.setAverageCenter.bind(this), this.getTotalClusters = this.getTotalClusters.bind(this), this.fitMapToMarkers = this.fitMapToMarkers.bind(this), this.getIgnoreHidden = this.getIgnoreHidden.bind(this), this.setIgnoreHidden = this.setIgnoreHidden.bind(this), this.getClusterClass = this.getClusterClass.bind(this), this.setClusterClass = this.setClusterClass.bind(this), this.getTotalMarkers = this.getTotalMarkers.bind(this), this.getZoomOnClick = this.getZoomOnClick.bind(this), this.setZoomOnClick = this.setZoomOnClick.bind(this), this.getBatchSizeIE = this.getBatchSizeIE.bind(this), this.setBatchSizeIE = this.setBatchSizeIE.bind(this), this.createClusters = this.createClusters.bind(this), this.onZoomChanged = this.onZoomChanged.bind(this), this.getImageSizes = this.getImageSizes.bind(this), this.setImageSizes = this.setImageSizes.bind(this), this.getCalculator = this.getCalculator.bind(this), this.setCalculator = this.setCalculator.bind(this), this.removeMarkers = this.removeMarkers.bind(this), this.resetViewport = this.resetViewport.bind(this), this.getImagePath = this.getImagePath.bind(this), this.setImagePath = this.setImagePath.bind(this), this.pushMarkerTo = this.pushMarkerTo.bind(this), this.removeMarker = this.removeMarker.bind(this), this.clearMarkers = this.clearMarkers.bind(this), this.setupStyles = this.setupStyles.bind(this), this.getGridSize = this.getGridSize.bind(this), this.setGridSize = this.setGridSize.bind(this), this.getClusters = this.getClusters.bind(this), this.getMaxZoom = this.getMaxZoom.bind(this), this.setMaxZoom = this.setMaxZoom.bind(this), this.getMarkers = this.getMarkers.bind(this), this.addMarkers = this.addMarkers.bind(this), this.getStyles = this.getStyles.bind(this), this.setStyles = this.setStyles.bind(this), this.addMarker = this.addMarker.bind(this), this.onRemove = this.onRemove.bind(this), this.getTitle = this.getTitle.bind(this), this.setTitle = this.setTitle.bind(this), this.repaint = this.repaint.bind(this), this.onIdle = this.onIdle.bind(this), this.redraw = this.redraw.bind(this), this.onAdd = this.onAdd.bind(this), this.draw = this.draw.bind(this), this.extend = this.extend.bind(this), this.extend(t, google.maps.OverlayView), this.markers = [], this.clusters = [], this.listeners = [], this.activeMap = null, this.ready = !1, this.gridSize = r.gridSize || 60, this.minClusterSize = r.minimumClusterSize || 2, this.maxZoom = r.maxZoom || null, this.styles = r.styles || [], this.title = r.title || "", this.zoomOnClick = !0, r.zoomOnClick !== void 0 && (this.zoomOnClick = r.zoomOnClick), this.averageCenter = !1, r.averageCenter !== void 0 && (this.averageCenter = r.averageCenter), this.ignoreHidden = !1, r.ignoreHidden !== void 0 && (this.ignoreHidden = r.ignoreHidden), this.enableRetinaIcons = !1, r.enableRetinaIcons !== void 0 && (this.enableRetinaIcons = r.enableRetinaIcons), this.imagePath = r.imagePath || Up, this.imageExtension = r.imageExtension || Hp, this.imageSizes = r.imageSizes || Vp, this.calculator = r.calculator || $p, this.batchSize = r.batchSize || zp, this.batchSizeIE = r.batchSizeIE || Wp, this.clusterClass = r.clusterClass || qp, navigator.userAgent.toLowerCase().indexOf("msie") !== -1 && (this.batchSize = this.batchSizeIE), this.timerRefStatic = null, this.setupStyles(), this.addMarkers(n, !0), this.setMap(e);
    }
    return t.prototype.onZoomChanged = function() {
      var e, n;
      this.resetViewport(!1), (((e = this.getMap()) === null || e === void 0 ? void 0 : e.getZoom()) === (this.get("minZoom") || 0) || ((n = this.getMap()) === null || n === void 0 ? void 0 : n.getZoom()) === this.get("maxZoom")) && google.maps.event.trigger(this, "idle");
    }, t.prototype.onIdle = function() {
      this.redraw();
    }, t.prototype.onAdd = function() {
      var e = this.getMap();
      this.activeMap = e, this.ready = !0, this.repaint(), e !== null && (this.listeners = [
        google.maps.event.addListener(e, "zoom_changed", this.onZoomChanged),
        google.maps.event.addListener(e, "idle", this.onIdle)
      ]);
    }, t.prototype.onRemove = function() {
      for (var e = 0, n = this.markers; e < n.length; e++) {
        var r = n[e];
        r.getMap() !== this.activeMap && r.setMap(this.activeMap);
      }
      for (var i = 0, o = this.clusters; i < o.length; i++) {
        var a = o[i];
        a.remove();
      }
      this.clusters = [];
      for (var s = 0, u = this.listeners; s < u.length; s++) {
        var l = u[s];
        google.maps.event.removeListener(l);
      }
      this.listeners = [], this.activeMap = null, this.ready = !1;
    }, t.prototype.draw = function() {
    }, t.prototype.getMap = function() {
      return null;
    }, t.prototype.getPanes = function() {
      return null;
    }, t.prototype.getProjection = function() {
      return {
        fromContainerPixelToLatLng: function() {
          return null;
        },
        fromDivPixelToLatLng: function() {
          return null;
        },
        fromLatLngToContainerPixel: function() {
          return null;
        },
        fromLatLngToDivPixel: function() {
          return null;
        },
        getVisibleRegion: function() {
          return null;
        },
        getWorldWidth: function() {
          return 0;
        }
      };
    }, t.prototype.setMap = function() {
    }, t.prototype.addListener = function() {
      return {
        remove: function() {
        }
      };
    }, t.prototype.bindTo = function() {
    }, t.prototype.get = function() {
    }, t.prototype.notify = function() {
    }, t.prototype.set = function() {
    }, t.prototype.setValues = function() {
    }, t.prototype.unbind = function() {
    }, t.prototype.unbindAll = function() {
    }, t.prototype.setupStyles = function() {
      if (!(this.styles.length > 0))
        for (var e = 0; e < this.imageSizes.length; e++)
          this.styles.push({
            url: "".concat(this.imagePath + (e + 1), ".").concat(this.imageExtension),
            height: this.imageSizes[e] || 0,
            width: this.imageSizes[e] || 0
          });
    }, t.prototype.fitMapToMarkers = function() {
      for (var e = this.getMarkers(), n = new google.maps.LatLngBounds(), r = 0, i = e; r < i.length; r++) {
        var o = i[r], a = o.getPosition();
        a && n.extend(a);
      }
      var s = this.getMap();
      s !== null && "fitBounds" in s && s.fitBounds(n);
    }, t.prototype.getGridSize = function() {
      return this.gridSize;
    }, t.prototype.setGridSize = function(e) {
      this.gridSize = e;
    }, t.prototype.getMinimumClusterSize = function() {
      return this.minClusterSize;
    }, t.prototype.setMinimumClusterSize = function(e) {
      this.minClusterSize = e;
    }, t.prototype.getMaxZoom = function() {
      return this.maxZoom;
    }, t.prototype.setMaxZoom = function(e) {
      this.maxZoom = e;
    }, t.prototype.getStyles = function() {
      return this.styles;
    }, t.prototype.setStyles = function(e) {
      this.styles = e;
    }, t.prototype.getTitle = function() {
      return this.title;
    }, t.prototype.setTitle = function(e) {
      this.title = e;
    }, t.prototype.getZoomOnClick = function() {
      return this.zoomOnClick;
    }, t.prototype.setZoomOnClick = function(e) {
      this.zoomOnClick = e;
    }, t.prototype.getAverageCenter = function() {
      return this.averageCenter;
    }, t.prototype.setAverageCenter = function(e) {
      this.averageCenter = e;
    }, t.prototype.getIgnoreHidden = function() {
      return this.ignoreHidden;
    }, t.prototype.setIgnoreHidden = function(e) {
      this.ignoreHidden = e;
    }, t.prototype.getEnableRetinaIcons = function() {
      return this.enableRetinaIcons;
    }, t.prototype.setEnableRetinaIcons = function(e) {
      this.enableRetinaIcons = e;
    }, t.prototype.getImageExtension = function() {
      return this.imageExtension;
    }, t.prototype.setImageExtension = function(e) {
      this.imageExtension = e;
    }, t.prototype.getImagePath = function() {
      return this.imagePath;
    }, t.prototype.setImagePath = function(e) {
      this.imagePath = e;
    }, t.prototype.getImageSizes = function() {
      return this.imageSizes;
    }, t.prototype.setImageSizes = function(e) {
      this.imageSizes = e;
    }, t.prototype.getCalculator = function() {
      return this.calculator;
    }, t.prototype.setCalculator = function(e) {
      this.calculator = e;
    }, t.prototype.getBatchSizeIE = function() {
      return this.batchSizeIE;
    }, t.prototype.setBatchSizeIE = function(e) {
      this.batchSizeIE = e;
    }, t.prototype.getClusterClass = function() {
      return this.clusterClass;
    }, t.prototype.setClusterClass = function(e) {
      this.clusterClass = e;
    }, t.prototype.getMarkers = function() {
      return this.markers;
    }, t.prototype.getTotalMarkers = function() {
      return this.markers.length;
    }, t.prototype.getClusters = function() {
      return this.clusters;
    }, t.prototype.getTotalClusters = function() {
      return this.clusters.length;
    }, t.prototype.addMarker = function(e, n) {
      this.pushMarkerTo(e), n || this.redraw();
    }, t.prototype.addMarkers = function(e, n) {
      for (var r in e)
        if (Object.prototype.hasOwnProperty.call(e, r)) {
          var i = e[r];
          i && this.pushMarkerTo(i);
        }
      n || this.redraw();
    }, t.prototype.pushMarkerTo = function(e) {
      var n = this;
      e.getDraggable() && google.maps.event.addListener(e, "dragend", function() {
        n.ready && (e.isAdded = !1, n.repaint());
      }), e.isAdded = !1, this.markers.push(e);
    }, t.prototype.removeMarker_ = function(e) {
      var n = -1;
      if (this.markers.indexOf)
        n = this.markers.indexOf(e);
      else
        for (var r = 0; r < this.markers.length; r++)
          if (e === this.markers[r]) {
            n = r;
            break;
          }
      return n === -1 ? !1 : (e.setMap(null), this.markers.splice(n, 1), !0);
    }, t.prototype.removeMarker = function(e, n) {
      var r = this.removeMarker_(e);
      return !n && r && this.repaint(), r;
    }, t.prototype.removeMarkers = function(e, n) {
      for (var r = !1, i = 0, o = e; i < o.length; i++) {
        var a = o[i];
        r = r || this.removeMarker_(a);
      }
      return !n && r && this.repaint(), r;
    }, t.prototype.clearMarkers = function() {
      this.resetViewport(!0), this.markers = [];
    }, t.prototype.repaint = function() {
      var e = this.clusters.slice();
      this.clusters = [], this.resetViewport(!1), this.redraw(), setTimeout(function() {
        for (var r = 0, i = e; r < i.length; r++) {
          var o = i[r];
          o.remove();
        }
      }, 0);
    }, t.prototype.getExtendedBounds = function(e) {
      var n = this.getProjection(), r = n.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(e.getNorthEast().lat(), e.getNorthEast().lng())
      );
      r !== null && (r.x += this.gridSize, r.y -= this.gridSize);
      var i = n.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(e.getSouthWest().lat(), e.getSouthWest().lng())
      );
      if (i !== null && (i.x -= this.gridSize, i.y += this.gridSize), r !== null) {
        var o = n.fromDivPixelToLatLng(r);
        o !== null && e.extend(o);
      }
      if (i !== null) {
        var a = n.fromDivPixelToLatLng(i);
        a !== null && e.extend(a);
      }
      return e;
    }, t.prototype.redraw = function() {
      this.createClusters(0);
    }, t.prototype.resetViewport = function(e) {
      for (var n = 0, r = this.clusters; n < r.length; n++) {
        var i = r[n];
        i.remove();
      }
      this.clusters = [];
      for (var o = 0, a = this.markers; o < a.length; o++) {
        var s = a[o];
        s.isAdded = !1, e && s.setMap(null);
      }
    }, t.prototype.distanceBetweenPoints = function(e, n) {
      var r = 6371, i = (n.lat() - e.lat()) * Math.PI / 180, o = (n.lng() - e.lng()) * Math.PI / 180, a = Math.sin(i / 2) * Math.sin(i / 2) + Math.cos(e.lat() * Math.PI / 180) * Math.cos(n.lat() * Math.PI / 180) * Math.sin(o / 2) * Math.sin(o / 2);
      return r * (2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a)));
    }, t.prototype.isMarkerInBounds = function(e, n) {
      var r = e.getPosition();
      return r ? n.contains(r) : !1;
    }, t.prototype.addToClosestCluster = function(e) {
      for (var n, r = 4e4, i = null, o = 0, a = this.clusters; o < a.length; o++) {
        var s = a[o];
        n = s;
        var u = n.getCenter(), l = e.getPosition();
        if (u && l) {
          var c = this.distanceBetweenPoints(u, l);
          c < r && (r = c, i = n);
        }
      }
      i && i.isMarkerInClusterBounds(e) ? i.addMarker(e) : (n = new _p(this), n.addMarker(e), this.clusters.push(n));
    }, t.prototype.createClusters = function(e) {
      var n = this;
      if (this.ready) {
        e === 0 && (google.maps.event.trigger(this, "clusteringbegin", this), this.timerRefStatic !== null && (window.clearTimeout(this.timerRefStatic), delete this.timerRefStatic));
        for (var r = this.getMap(), i = r !== null && ("getBounds" in r) ? r.getBounds() : null, o = (r == null ? void 0 : r.getZoom()) || 0, a = o > 3 ? new google.maps.LatLngBounds(i == null ? void 0 : i.getSouthWest(), i == null ? void 0 : i.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625)), s = this.getExtendedBounds(a), u = Math.min(e + this.batchSize, this.markers.length), l = e; l < u; l++) {
          var c = this.markers[l];
          c && !c.isAdded && this.isMarkerInBounds(c, s) && (!this.ignoreHidden || this.ignoreHidden && c.getVisible()) && this.addToClosestCluster(c);
        }
        if (u < this.markers.length)
          this.timerRefStatic = window.setTimeout(function() {
            n.createClusters(u);
          }, 0);
        else {
          this.timerRefStatic = null, google.maps.event.trigger(this, "clusteringend", this);
          for (var d = 0, p = this.clusters; d < p.length; d++) {
            var v = p[d];
            v.updateIcon();
          }
        }
      }
    }, t.prototype.extend = function(e, n) {
      return (function(i) {
        for (var o in i.prototype) {
          var a = o;
          this.prototype[a] = i.prototype[a];
        }
        return this;
      }).apply(e, [n]);
    }, t;
  }()
), St = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
}, Ie = {
  averageCenter: function(t, e) {
    t.setAverageCenter(e);
  },
  batchSizeIE: function(t, e) {
    t.setBatchSizeIE(e);
  },
  calculator: function(t, e) {
    t.setCalculator(e);
  },
  clusterClass: function(t, e) {
    t.setClusterClass(e);
  },
  enableRetinaIcons: function(t, e) {
    t.setEnableRetinaIcons(e);
  },
  gridSize: function(t, e) {
    t.setGridSize(e);
  },
  ignoreHidden: function(t, e) {
    t.setIgnoreHidden(e);
  },
  imageExtension: function(t, e) {
    t.setImageExtension(e);
  },
  imagePath: function(t, e) {
    t.setImagePath(e);
  },
  imageSizes: function(t, e) {
    t.setImageSizes(e);
  },
  maxZoom: function(t, e) {
    t.setMaxZoom(e);
  },
  minimumClusterSize: function(t, e) {
    t.setMinimumClusterSize(e);
  },
  styles: function(t, e) {
    t.setStyles(e);
  },
  title: function(t, e) {
    t.setTitle(e);
  },
  zoomOnClick: function(t, e) {
    t.setZoomOnClick(e);
  }
}, Gp = {};
function Zp(t) {
  var e = t.children, n = t.options, r = t.averageCenter, i = t.batchSizeIE, o = t.calculator, a = t.clusterClass, s = t.enableRetinaIcons, u = t.gridSize, l = t.ignoreHidden, c = t.imageExtension, d = t.imagePath, p = t.imageSizes, v = t.maxZoom, m = t.minimumClusterSize, h = t.styles, f = t.title, C = t.zoomOnClick, w = t.onClick, b = t.onClusteringBegin, S = t.onClusteringEnd, D = t.onMouseOver, E = t.onMouseOut, L = t.onLoad, F = t.onUnmount, H = I(null), P = H[0], $ = H[1], R = je(xe), j = I(null), T = j[0], N = j[1], K = I(null), _ = K[0], oe = K[1], ie = I(null), k = ie[0], U = ie[1], J = I(null), q = J[0], te = J[1], Y = I(null), y = Y[0], z = Y[1];
  return B(function() {
    P && E && (q !== null && google.maps.event.removeListener(q), te(google.maps.event.addListener(P, St.onMouseOut, E)));
  }, [E]), B(function() {
    P && D && (y !== null && google.maps.event.removeListener(y), z(google.maps.event.addListener(P, St.onMouseOver, D)));
  }, [D]), B(function() {
    P && w && (T !== null && google.maps.event.removeListener(T), N(google.maps.event.addListener(P, St.onClick, w)));
  }, [w]), B(function() {
    P && b && (_ !== null && google.maps.event.removeListener(_), oe(google.maps.event.addListener(P, St.onClusteringBegin, b)));
  }, [b]), B(function() {
    P && S && (k !== null && google.maps.event.removeListener(k), oe(google.maps.event.addListener(P, St.onClusteringEnd, S)));
  }, [S]), B(function() {
    typeof r < "u" && P !== null && Ie.averageCenter(P, r);
  }, [P, r]), B(function() {
    typeof i < "u" && P !== null && Ie.batchSizeIE(P, i);
  }, [P, i]), B(function() {
    typeof o < "u" && P !== null && Ie.calculator(P, o);
  }, [P, o]), B(function() {
    typeof a < "u" && P !== null && Ie.clusterClass(P, a);
  }, [P, a]), B(function() {
    typeof s < "u" && P !== null && Ie.enableRetinaIcons(P, s);
  }, [P, s]), B(function() {
    typeof u < "u" && P !== null && Ie.gridSize(P, u);
  }, [P, u]), B(function() {
    typeof l < "u" && P !== null && Ie.ignoreHidden(P, l);
  }, [P, l]), B(function() {
    typeof c < "u" && P !== null && Ie.imageExtension(P, c);
  }, [P, c]), B(function() {
    typeof d < "u" && P !== null && Ie.imagePath(P, d);
  }, [P, d]), B(function() {
    typeof p < "u" && P !== null && Ie.imageSizes(P, p);
  }, [P, p]), B(function() {
    typeof v < "u" && P !== null && Ie.maxZoom(P, v);
  }, [P, v]), B(function() {
    typeof m < "u" && P !== null && Ie.minimumClusterSize(P, m);
  }, [P, m]), B(function() {
    typeof h < "u" && P !== null && Ie.styles(P, h);
  }, [P, h]), B(function() {
    typeof f < "u" && P !== null && Ie.title(P, f);
  }, [P, f]), B(function() {
    typeof C < "u" && P !== null && Ie.zoomOnClick(P, C);
  }, [P, C]), B(function() {
    if (R) {
      var W = ve({}, n || Gp), M = new kc(R, [], W);
      return r && Ie.averageCenter(M, r), i && Ie.batchSizeIE(M, i), o && Ie.calculator(M, o), a && Ie.clusterClass(M, a), s && Ie.enableRetinaIcons(M, s), u && Ie.gridSize(M, u), l && Ie.ignoreHidden(M, l), c && Ie.imageExtension(M, c), d && Ie.imagePath(M, d), p && Ie.imageSizes(M, p), v && Ie.maxZoom(M, v), m && Ie.minimumClusterSize(M, m), h && Ie.styles(M, h), f && Ie.title(M, f), C && Ie.zoomOnClick(M, C), E && te(google.maps.event.addListener(M, St.onMouseOut, E)), D && z(google.maps.event.addListener(M, St.onMouseOver, D)), w && N(google.maps.event.addListener(M, St.onClick, w)), b && oe(google.maps.event.addListener(M, St.onClusteringBegin, b)), S && U(google.maps.event.addListener(M, St.onClusteringEnd, S)), $(M), L && L(M), function() {
        q !== null && google.maps.event.removeListener(q), y !== null && google.maps.event.removeListener(y), T !== null && google.maps.event.removeListener(T), _ !== null && google.maps.event.removeListener(_), k !== null && google.maps.event.removeListener(k), F && F(M);
      };
    }
  }, []), P !== null && e(P) || null;
}
st(Zp);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      markerClusterer: null
    }, n.setClustererCallback = function() {
      n.state.markerClusterer !== null && n.props.onLoad && n.props.onLoad(n.state.markerClusterer);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    if (this.context) {
      var n = new kc(this.context, [], this.props.options);
      this.registeredEvents = Se({
        updaterMap: Ie,
        eventMap: St,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(function() {
        return {
          markerClusterer: n
        };
      }, this.setClustererCallback);
    }
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.markerClusterer && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Ie,
      eventMap: St,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.markerClusterer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.markerClusterer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.markerClusterer), Me(this.registeredEvents), this.state.markerClusterer.setMap(null));
  }, e.prototype.render = function() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  }, e.contextType = xe, e;
})(qe);
function ps(t) {
  t.cancelBubble = !0, t.stopPropagation && t.stopPropagation();
}
var Tc = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.getCloseClickHandler = this.getCloseClickHandler.bind(this), this.closeClickHandler = this.closeClickHandler.bind(this), this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this), this.addClickHandler = this.addClickHandler.bind(this), this.getCloseBoxImg = this.getCloseBoxImg.bind(this), this.getBoxWidths = this.getBoxWidths.bind(this), this.setBoxStyle = this.setBoxStyle.bind(this), this.setPosition = this.setPosition.bind(this), this.getPosition = this.getPosition.bind(this), this.setOptions = this.setOptions.bind(this), this.setContent = this.setContent.bind(this), this.setVisible = this.setVisible.bind(this), this.getContent = this.getContent.bind(this), this.getVisible = this.getVisible.bind(this), this.setZIndex = this.setZIndex.bind(this), this.getZIndex = this.getZIndex.bind(this), this.onRemove = this.onRemove.bind(this), this.panBox = this.panBox.bind(this), this.extend = this.extend.bind(this), this.close = this.close.bind(this), this.draw = this.draw.bind(this), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.open = this.open.bind(this), this.extend(t, google.maps.OverlayView), this.content = e.content || "", this.disableAutoPan = e.disableAutoPan || !1, this.maxWidth = e.maxWidth || 0, this.pixelOffset = e.pixelOffset || new google.maps.Size(0, 0), this.position = e.position || new google.maps.LatLng(0, 0), this.zIndex = e.zIndex || null, this.boxClass = e.boxClass || "infoBox", this.boxStyle = e.boxStyle || {}, this.closeBoxMargin = e.closeBoxMargin || "2px", this.closeBoxURL = e.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", e.closeBoxURL === "" && (this.closeBoxURL = ""), this.infoBoxClearance = e.infoBoxClearance || new google.maps.Size(1, 1), typeof e.visible > "u" && (typeof e.isHidden > "u" ? e.visible = !0 : e.visible = !e.isHidden), this.isHidden = !e.visible, this.alignBottom = e.alignBottom || !1, this.pane = e.pane || "floatPane", this.enableEventPropagation = e.enableEventPropagation || !1, this.div = null, this.closeListener = null, this.moveListener = null, this.mapListener = null, this.contextListener = null, this.eventListeners = null, this.fixedWidthSet = null;
    }
    return t.prototype.createInfoBoxDiv = function() {
      var e = this, n = function(l) {
        l.returnValue = !1, l.preventDefault && l.preventDefault(), e.enableEventPropagation || ps(l);
      };
      if (!this.div) {
        this.div = document.createElement("div"), this.setBoxStyle(), typeof this.content == "string" ? this.div.innerHTML = this.getCloseBoxImg() + this.content : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(this.content));
        var r = this.getPanes();
        if (r !== null && r[this.pane].appendChild(this.div), this.addClickHandler(), this.div.style.width)
          this.fixedWidthSet = !0;
        else if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth)
          this.div.style.width = this.maxWidth + "px", this.fixedWidthSet = !0;
        else {
          var i = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - i.left - i.right + "px", this.fixedWidthSet = !1;
        }
        if (this.panBox(this.disableAutoPan), !this.enableEventPropagation) {
          this.eventListeners = [];
          for (var o = [
            "mousedown",
            "mouseover",
            "mouseout",
            "mouseup",
            "click",
            "dblclick",
            "touchstart",
            "touchend",
            "touchmove"
          ], a = 0, s = o; a < s.length; a++) {
            var u = s[a];
            this.eventListeners.push(google.maps.event.addListener(this.div, u, ps));
          }
          this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", function() {
            e.div && (e.div.style.cursor = "default");
          }));
        }
        this.contextListener = google.maps.event.addListener(this.div, "contextmenu", n), google.maps.event.trigger(this, "domready");
      }
    }, t.prototype.getCloseBoxImg = function() {
      var e = "";
      return this.closeBoxURL !== "" && (e = '<img alt=""', e += ' aria-hidden="true"', e += " src='" + this.closeBoxURL + "'", e += " align=right", e += " style='", e += " position: relative;", e += " cursor: pointer;", e += " margin: " + this.closeBoxMargin + ";", e += "'>"), e;
    }, t.prototype.addClickHandler = function() {
      this.closeListener = this.div && this.div.firstChild && this.closeBoxURL !== "" ? google.maps.event.addListener(this.div.firstChild, "click", this.getCloseClickHandler()) : null;
    }, t.prototype.closeClickHandler = function(e) {
      e.cancelBubble = !0, e.stopPropagation && e.stopPropagation(), google.maps.event.trigger(this, "closeclick"), this.close();
    }, t.prototype.getCloseClickHandler = function() {
      return this.closeClickHandler;
    }, t.prototype.panBox = function(e) {
      if (this.div && !e) {
        var n = this.getMap();
        if (n instanceof google.maps.Map) {
          var r = 0, i = 0, o = n.getBounds();
          o && !o.contains(this.position) && n.setCenter(this.position);
          var a = n.getDiv(), s = a.offsetWidth, u = a.offsetHeight, l = this.pixelOffset.width, c = this.pixelOffset.height, d = this.div.offsetWidth, p = this.div.offsetHeight, v = this.infoBoxClearance.width, m = this.infoBoxClearance.height, h = this.getProjection(), f = h.fromLatLngToContainerPixel(this.position);
          f !== null && (f.x < -l + v ? r = f.x + l - v : f.x + d + l + v > s && (r = f.x + d + l + v - s), this.alignBottom ? f.y < -c + m + p ? i = f.y + c - m - p : f.y + c + m > u && (i = f.y + c + m - u) : f.y < -c + m ? i = f.y + c - m : f.y + p + c + m > u && (i = f.y + p + c + m - u)), r === 0 && i === 0 || n.panBy(r, i);
        }
      }
    }, t.prototype.setBoxStyle = function() {
      if (this.div) {
        this.div.className = this.boxClass, this.div.style.cssText = "";
        var e = this.boxStyle;
        for (var n in e)
          Object.prototype.hasOwnProperty.call(e, n) && (this.div.style[n] = e[n]);
        if (this.div.style.webkitTransform = "translateZ(0)", typeof this.div.style.opacity < "u" && this.div.style.opacity !== "") {
          var r = parseFloat(this.div.style.opacity || "");
          this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + r * 100 + ')"', this.div.style.filter = "alpha(opacity=" + r * 100 + ")";
        }
        this.div.style.position = "absolute", this.div.style.visibility = "hidden", this.zIndex !== null && (this.div.style.zIndex = this.zIndex + ""), this.div.style.overflow || (this.div.style.overflow = "auto");
      }
    }, t.prototype.getBoxWidths = function() {
      var e = { top: 0, bottom: 0, left: 0, right: 0 };
      if (!this.div)
        return e;
      if (document.defaultView) {
        var n = this.div.ownerDocument, r = n && n.defaultView ? n.defaultView.getComputedStyle(this.div, "") : null;
        r && (e.top = parseInt(r.borderTopWidth || "", 10) || 0, e.bottom = parseInt(r.borderBottomWidth || "", 10) || 0, e.left = parseInt(r.borderLeftWidth || "", 10) || 0, e.right = parseInt(r.borderRightWidth || "", 10) || 0);
      } else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle
      ) {
        var i = this.div.currentStyle;
        i && (e.top = parseInt(i.borderTopWidth || "", 10) || 0, e.bottom = parseInt(i.borderBottomWidth || "", 10) || 0, e.left = parseInt(i.borderLeftWidth || "", 10) || 0, e.right = parseInt(i.borderRightWidth || "", 10) || 0);
      }
      return e;
    }, t.prototype.onRemove = function() {
      this.div && this.div.parentNode && (this.div.parentNode.removeChild(this.div), this.div = null);
    }, t.prototype.draw = function() {
      if (this.createInfoBoxDiv(), this.div) {
        var e = this.getProjection(), n = e.fromLatLngToDivPixel(this.position);
        n !== null && (this.div.style.left = n.x + this.pixelOffset.width + "px", this.alignBottom ? this.div.style.bottom = -(n.y + this.pixelOffset.height) + "px" : this.div.style.top = n.y + this.pixelOffset.height + "px"), this.isHidden ? this.div.style.visibility = "hidden" : this.div.style.visibility = "visible";
      }
    }, t.prototype.setOptions = function(e) {
      e === void 0 && (e = {}), typeof e.boxClass < "u" && (this.boxClass = e.boxClass, this.setBoxStyle()), typeof e.boxStyle < "u" && (this.boxStyle = e.boxStyle, this.setBoxStyle()), typeof e.content < "u" && this.setContent(e.content), typeof e.disableAutoPan < "u" && (this.disableAutoPan = e.disableAutoPan), typeof e.maxWidth < "u" && (this.maxWidth = e.maxWidth), typeof e.pixelOffset < "u" && (this.pixelOffset = e.pixelOffset), typeof e.alignBottom < "u" && (this.alignBottom = e.alignBottom), typeof e.position < "u" && this.setPosition(e.position), typeof e.zIndex < "u" && this.setZIndex(e.zIndex), typeof e.closeBoxMargin < "u" && (this.closeBoxMargin = e.closeBoxMargin), typeof e.closeBoxURL < "u" && (this.closeBoxURL = e.closeBoxURL), typeof e.infoBoxClearance < "u" && (this.infoBoxClearance = e.infoBoxClearance), typeof e.isHidden < "u" && (this.isHidden = e.isHidden), typeof e.visible < "u" && (this.isHidden = !e.visible), typeof e.enableEventPropagation < "u" && (this.enableEventPropagation = e.enableEventPropagation), this.div && this.draw();
    }, t.prototype.setContent = function(e) {
      this.content = e, this.div && (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.fixedWidthSet || (this.div.style.width = ""), typeof e == "string" ? this.div.innerHTML = this.getCloseBoxImg() + e : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(e)), this.fixedWidthSet || (this.div.style.width = this.div.offsetWidth + "px", typeof e == "string" ? this.div.innerHTML = this.getCloseBoxImg() + e : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(e))), this.addClickHandler()), google.maps.event.trigger(this, "content_changed");
    }, t.prototype.setPosition = function(e) {
      this.position = e, this.div && this.draw(), google.maps.event.trigger(this, "position_changed");
    }, t.prototype.setVisible = function(e) {
      this.isHidden = !e, this.div && (this.div.style.visibility = this.isHidden ? "hidden" : "visible");
    }, t.prototype.setZIndex = function(e) {
      this.zIndex = e, this.div && (this.div.style.zIndex = e + ""), google.maps.event.trigger(this, "zindex_changed");
    }, t.prototype.getContent = function() {
      return this.content;
    }, t.prototype.getPosition = function() {
      return this.position;
    }, t.prototype.getZIndex = function() {
      return this.zIndex;
    }, t.prototype.getVisible = function() {
      var e = this.getMap();
      return typeof e > "u" || e === null ? !1 : !this.isHidden;
    }, t.prototype.show = function() {
      this.isHidden = !1, this.div && (this.div.style.visibility = "visible");
    }, t.prototype.hide = function() {
      this.isHidden = !0, this.div && (this.div.style.visibility = "hidden");
    }, t.prototype.open = function(e, n) {
      var r = this;
      n && (this.position = n.getPosition(), this.moveListener = google.maps.event.addListener(n, "position_changed", function() {
        var i = n.getPosition();
        r.setPosition(i);
      }), this.mapListener = google.maps.event.addListener(n, "map_changed", function() {
        r.setMap(n.map);
      })), this.setMap(e), this.div && this.panBox();
    }, t.prototype.close = function() {
      if (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.eventListeners) {
        for (var e = 0, n = this.eventListeners; e < n.length; e++) {
          var r = n[e];
          google.maps.event.removeListener(r);
        }
        this.eventListeners = null;
      }
      this.moveListener && (google.maps.event.removeListener(this.moveListener), this.moveListener = null), this.mapListener && (google.maps.event.removeListener(this.mapListener), this.mapListener = null), this.contextListener && (google.maps.event.removeListener(this.contextListener), this.contextListener = null), this.setMap(null);
    }, t.prototype.extend = function(e, n) {
      return (function(i) {
        for (var o in i.prototype)
          Object.prototype.hasOwnProperty.call(this, o) || (this.prototype[o] = i.prototype[o]);
        return this;
      }).apply(e, [n]);
    }, t;
  }()
), hs = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, vs = {
  options: function(t, e) {
    t.setOptions(e);
  },
  position: function(t, e) {
    e instanceof google.maps.LatLng ? t.setPosition(e) : t.setPosition(new google.maps.LatLng(e.lat, e.lng));
  },
  visible: function(t, e) {
    t.setVisible(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
}, Yp = {};
function Kp(t) {
  var e = t.children, n = t.anchor, r = t.options, i = t.position, o = t.zIndex, a = t.onCloseClick, s = t.onDomReady, u = t.onContentChanged, l = t.onPositionChanged, c = t.onZindexChanged, d = t.onLoad, p = t.onUnmount, v = je(xe), m = I(null), h = m[0], f = m[1], C = I(null), w = C[0], b = C[1], S = I(null), D = S[0], E = S[1], L = I(null), F = L[0], H = L[1], P = I(null), $ = P[0], R = P[1], j = I(null), T = j[0], N = j[1], K = Ue(null);
  return B(function() {
    v && h !== null && (h.close(), n ? h.open(v, n) : h.getPosition() && h.open(v));
  }, [v, h, n]), B(function() {
    r && h !== null && h.setOptions(r);
  }, [h, r]), B(function() {
    if (i && h !== null) {
      var _ = i instanceof google.maps.LatLng ? i : new google.maps.LatLng(i.lat, i.lng);
      h.setPosition(_);
    }
  }, [i]), B(function() {
    typeof o == "number" && h !== null && h.setZIndex(o);
  }, [o]), B(function() {
    h && a && (w !== null && google.maps.event.removeListener(w), b(google.maps.event.addListener(h, "closeclick", a)));
  }, [a]), B(function() {
    h && s && (D !== null && google.maps.event.removeListener(D), E(google.maps.event.addListener(h, "domready", s)));
  }, [s]), B(function() {
    h && u && (F !== null && google.maps.event.removeListener(F), H(google.maps.event.addListener(h, "content_changed", u)));
  }, [u]), B(function() {
    h && l && ($ !== null && google.maps.event.removeListener($), R(google.maps.event.addListener(h, "position_changed", l)));
  }, [l]), B(function() {
    h && c && (T !== null && google.maps.event.removeListener(T), N(google.maps.event.addListener(h, "zindex_changed", c)));
  }, [c]), B(function() {
    if (v) {
      var _ = r || Yp, oe = _.position, ie = la(_, ["position"]), k = void 0;
      oe && !(oe instanceof google.maps.LatLng) && (k = new google.maps.LatLng(oe.lat, oe.lng));
      var U = new Tc(ve(ve({}, ie), k ? { position: k } : {}));
      K.current = document.createElement("div"), f(U), a && b(google.maps.event.addListener(U, "closeclick", a)), s && E(google.maps.event.addListener(U, "domready", s)), u && H(google.maps.event.addListener(U, "content_changed", u)), l && R(google.maps.event.addListener(U, "position_changed", l)), c && N(google.maps.event.addListener(U, "zindex_changed", c)), U.setContent(K.current), n ? U.open(v, n) : U.getPosition() ? U.open(v) : it(!1, "You must provide either an anchor or a position prop for <InfoBox>."), d && d(U);
    }
    return function() {
      h !== null && (w && google.maps.event.removeListener(w), F && google.maps.event.removeListener(F), D && google.maps.event.removeListener(D), $ && google.maps.event.removeListener($), T && google.maps.event.removeListener(T), p && p(h), h.close());
    };
  }, []), K.current ? Si(_t.only(e), K.current) : null;
}
st(Kp);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.containerElement = null, n.state = {
      infoBox: null
    }, n.open = function(r, i) {
      i ? n.context !== null && r.open(n.context, i) : r.getPosition() ? n.context !== null && r.open(n.context) : it(!1, "You must provide either an anchor or a position prop for <InfoBox>.");
    }, n.setInfoBoxCallback = function() {
      n.state.infoBox !== null && n.containerElement !== null && (n.state.infoBox.setContent(n.containerElement), n.open(n.state.infoBox, n.props.anchor), n.props.onLoad && n.props.onLoad(n.state.infoBox));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = this.props.options || {}, r = n.position, i = la(n, ["position"]), o;
    r && !(r instanceof google.maps.LatLng) && (o = new google.maps.LatLng(r.lat, r.lng));
    var a = new Tc(ve(ve({}, i), o ? { position: o } : {}));
    this.containerElement = document.createElement("div"), this.registeredEvents = Se({
      updaterMap: vs,
      eventMap: hs,
      prevProps: {},
      nextProps: this.props,
      instance: a
    }), this.setState({ infoBox: a }, this.setInfoBoxCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    var r = this.state.infoBox;
    r !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: vs,
      eventMap: hs,
      prevProps: n,
      nextProps: this.props,
      instance: r
    }));
  }, e.prototype.componentWillUnmount = function() {
    var n = this.props.onUnmount, r = this.state.infoBox;
    r !== null && (n && n(r), Me(this.registeredEvents), r.close());
  }, e.prototype.render = function() {
    return this.containerElement ? Si(_t.only(this.props.children), this.containerElement) : null;
  }, e.contextType = xe, e;
})(qe);
var Xp = function t(e, n) {
  if (e === n) return !0;
  if (e && n && typeof e == "object" && typeof n == "object") {
    if (e.constructor !== n.constructor) return !1;
    var r, i, o;
    if (Array.isArray(e)) {
      if (r = e.length, r != n.length) return !1;
      for (i = r; i-- !== 0; )
        if (!t(e[i], n[i])) return !1;
      return !0;
    }
    if (e.constructor === RegExp) return e.source === n.source && e.flags === n.flags;
    if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === n.valueOf();
    if (e.toString !== Object.prototype.toString) return e.toString() === n.toString();
    if (o = Object.keys(e), r = o.length, r !== Object.keys(n).length) return !1;
    for (i = r; i-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(n, o[i])) return !1;
    for (i = r; i-- !== 0; ) {
      var a = o[i];
      if (!t(e[a], n[a])) return !1;
    }
    return !0;
  }
  return e !== e && n !== n;
}, gs = /* @__PURE__ */ Oc(Xp);
const ms = [
  Int8Array,
  Uint8Array,
  Uint8ClampedArray,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array
], Qi = 1, sr = 8;
class ca {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(e) {
    if (!(e instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    const [n, r] = new Uint8Array(e, 0, 2);
    if (n !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    const i = r >> 4;
    if (i !== Qi)
      throw new Error(`Got v${i} data when expected v${Qi}.`);
    const o = ms[r & 15];
    if (!o)
      throw new Error("Unrecognized array type.");
    const [a] = new Uint16Array(e, 2, 1), [s] = new Uint32Array(e, 4, 1);
    return new ca(s, a, o, e);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(e, n = 64, r = Float64Array, i) {
    if (isNaN(e) || e < 0) throw new Error(`Unpexpected numItems value: ${e}.`);
    this.numItems = +e, this.nodeSize = Math.min(Math.max(+n, 2), 65535), this.ArrayType = r, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
    const o = ms.indexOf(this.ArrayType), a = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, s = e * this.IndexArrayType.BYTES_PER_ELEMENT, u = (8 - s % 8) % 8;
    if (o < 0)
      throw new Error(`Unexpected typed array class: ${r}.`);
    i && i instanceof ArrayBuffer ? (this.data = i, this.ids = new this.IndexArrayType(this.data, sr, e), this.coords = new this.ArrayType(this.data, sr + s + u, e * 2), this._pos = e * 2, this._finished = !0) : (this.data = new ArrayBuffer(sr + a + s + u), this.ids = new this.IndexArrayType(this.data, sr, e), this.coords = new this.ArrayType(this.data, sr + s + u, e * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (Qi << 4) + o]), new Uint16Array(this.data, 2, 1)[0] = n, new Uint32Array(this.data, 4, 1)[0] = e);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(e, n) {
    const r = this._pos >> 1;
    return this.ids[r] = r, this.coords[this._pos++] = e, this.coords[this._pos++] = n, r;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    const e = this._pos >> 1;
    if (e !== this.numItems)
      throw new Error(`Added ${e} items when expected ${this.numItems}.`);
    return ko(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(e, n, r, i) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const { ids: o, coords: a, nodeSize: s } = this, u = [0, o.length - 1, 0], l = [];
    for (; u.length; ) {
      const c = u.pop() || 0, d = u.pop() || 0, p = u.pop() || 0;
      if (d - p <= s) {
        for (let f = p; f <= d; f++) {
          const C = a[2 * f], w = a[2 * f + 1];
          C >= e && C <= r && w >= n && w <= i && l.push(o[f]);
        }
        continue;
      }
      const v = p + d >> 1, m = a[2 * v], h = a[2 * v + 1];
      m >= e && m <= r && h >= n && h <= i && l.push(o[v]), (c === 0 ? e <= m : n <= h) && (u.push(p), u.push(v - 1), u.push(1 - c)), (c === 0 ? r >= m : i >= h) && (u.push(v + 1), u.push(d), u.push(1 - c));
    }
    return l;
  }
  /**
   * Search the index for items within a given radius.
   * @param {number} qx
   * @param {number} qy
   * @param {number} r Query radius.
   * @returns {number[]} An array of indices correponding to the found items.
   */
  within(e, n, r) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    const { ids: i, coords: o, nodeSize: a } = this, s = [0, i.length - 1, 0], u = [], l = r * r;
    for (; s.length; ) {
      const c = s.pop() || 0, d = s.pop() || 0, p = s.pop() || 0;
      if (d - p <= a) {
        for (let f = p; f <= d; f++)
          ys(o[2 * f], o[2 * f + 1], e, n) <= l && u.push(i[f]);
        continue;
      }
      const v = p + d >> 1, m = o[2 * v], h = o[2 * v + 1];
      ys(m, h, e, n) <= l && u.push(i[v]), (c === 0 ? e - r <= m : n - r <= h) && (s.push(p), s.push(v - 1), s.push(1 - c)), (c === 0 ? e + r >= m : n + r >= h) && (s.push(v + 1), s.push(d), s.push(1 - c));
    }
    return u;
  }
}
function ko(t, e, n, r, i, o) {
  if (i - r <= n) return;
  const a = r + i >> 1;
  Rc(t, e, a, r, i, o), ko(t, e, n, r, a - 1, 1 - o), ko(t, e, n, a + 1, i, 1 - o);
}
function Rc(t, e, n, r, i, o) {
  for (; i > r; ) {
    if (i - r > 600) {
      const l = i - r + 1, c = n - r + 1, d = Math.log(l), p = 0.5 * Math.exp(2 * d / 3), v = 0.5 * Math.sqrt(d * p * (l - p) / l) * (c - l / 2 < 0 ? -1 : 1), m = Math.max(r, Math.floor(n - c * p / l + v)), h = Math.min(i, Math.floor(n + (l - c) * p / l + v));
      Rc(t, e, n, m, h, o);
    }
    const a = e[2 * n + o];
    let s = r, u = i;
    for (ur(t, e, r, n), e[2 * i + o] > a && ur(t, e, r, i); s < u; ) {
      for (ur(t, e, s, u), s++, u--; e[2 * s + o] < a; ) s++;
      for (; e[2 * u + o] > a; ) u--;
    }
    e[2 * r + o] === a ? ur(t, e, r, u) : (u++, ur(t, e, u, i)), u <= n && (r = u + 1), n <= u && (i = u - 1);
  }
}
function ur(t, e, n, r) {
  eo(t, n, r), eo(e, 2 * n, 2 * r), eo(e, 2 * n + 1, 2 * r + 1);
}
function eo(t, e, n) {
  const r = t[e];
  t[e] = t[n], t[n] = r;
}
function ys(t, e, n, r) {
  const i = t - n, o = e - r;
  return i * i + o * o;
}
const Jp = {
  minZoom: 0,
  // min zoom to generate clusters on
  maxZoom: 16,
  // max zoom level to cluster the points on
  minPoints: 2,
  // minimum points to form a cluster
  radius: 40,
  // cluster radius in pixels
  extent: 512,
  // tile extent (radius is calculated relative to it)
  nodeSize: 64,
  // size of the KD-tree leaf node, affects performance
  log: !1,
  // whether to log timing info
  // whether to generate numeric ids for input features (in vector tiles)
  generateId: !1,
  // a reduce function for calculating custom cluster properties
  reduce: null,
  // (accumulated, props) => { accumulated.sum += props.sum; }
  // properties to use for individual points when running the reducer
  map: (t) => t
  // props => ({sum: props.my_value})
}, Cs = Math.fround || /* @__PURE__ */ ((t) => (e) => (t[0] = +e, t[0]))(new Float32Array(1)), yn = 2, rn = 3, to = 4, nn = 5, Ic = 6;
class Qp {
  constructor(e) {
    this.options = Object.assign(Object.create(Jp), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(e) {
    const { log: n, minZoom: r, maxZoom: i } = this.options;
    n && console.time("total time");
    const o = `prepare ${e.length} points`;
    n && console.time(o), this.points = e;
    const a = [];
    for (let u = 0; u < e.length; u++) {
      const l = e[u];
      if (!l.geometry) continue;
      const [c, d] = l.geometry.coordinates, p = Cs($r(c)), v = Cs(zr(d));
      a.push(
        p,
        v,
        // projected point coordinates
        1 / 0,
        // the last zoom the point was processed at
        u,
        // index of the source feature in the original input array
        -1,
        // parent cluster id
        1
        // number of points in a cluster
      ), this.options.reduce && a.push(0);
    }
    let s = this.trees[i + 1] = this._createTree(a);
    n && console.timeEnd(o);
    for (let u = i; u >= r; u--) {
      const l = +Date.now();
      s = this.trees[u] = this._createTree(this._cluster(s, u)), n && console.log("z%d: %d clusters in %dms", u, s.numItems, +Date.now() - l);
    }
    return n && console.timeEnd("total time"), this;
  }
  getClusters(e, n) {
    let r = ((e[0] + 180) % 360 + 360) % 360 - 180;
    const i = Math.max(-90, Math.min(90, e[1]));
    let o = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180;
    const a = Math.max(-90, Math.min(90, e[3]));
    if (e[2] - e[0] >= 360)
      r = -180, o = 180;
    else if (r > o) {
      const d = this.getClusters([r, i, 180, a], n), p = this.getClusters([-180, i, o, a], n);
      return d.concat(p);
    }
    const s = this.trees[this._limitZoom(n)], u = s.range($r(r), zr(a), $r(o), zr(i)), l = s.data, c = [];
    for (const d of u) {
      const p = this.stride * d;
      c.push(l[p + nn] > 1 ? Ds(l, p, this.clusterProps) : this.points[l[p + rn]]);
    }
    return c;
  }
  getChildren(e) {
    const n = this._getOriginId(e), r = this._getOriginZoom(e), i = "No cluster with the specified id.", o = this.trees[r];
    if (!o) throw new Error(i);
    const a = o.data;
    if (n * this.stride >= a.length) throw new Error(i);
    const s = this.options.radius / (this.options.extent * Math.pow(2, r - 1)), u = a[n * this.stride], l = a[n * this.stride + 1], c = o.within(u, l, s), d = [];
    for (const p of c) {
      const v = p * this.stride;
      a[v + to] === e && d.push(a[v + nn] > 1 ? Ds(a, v, this.clusterProps) : this.points[a[v + rn]]);
    }
    if (d.length === 0) throw new Error(i);
    return d;
  }
  getLeaves(e, n, r) {
    n = n || 10, r = r || 0;
    const i = [];
    return this._appendLeaves(i, e, n, r, 0), i;
  }
  getTile(e, n, r) {
    const i = this.trees[this._limitZoom(e)], o = Math.pow(2, e), { extent: a, radius: s } = this.options, u = s / a, l = (r - u) / o, c = (r + 1 + u) / o, d = {
      features: []
    };
    return this._addTileFeatures(
      i.range((n - u) / o, l, (n + 1 + u) / o, c),
      i.data,
      n,
      r,
      o,
      d
    ), n === 0 && this._addTileFeatures(
      i.range(1 - u / o, l, 1, c),
      i.data,
      o,
      r,
      o,
      d
    ), n === o - 1 && this._addTileFeatures(
      i.range(0, l, u / o, c),
      i.data,
      -1,
      r,
      o,
      d
    ), d.features.length ? d : null;
  }
  getClusterExpansionZoom(e) {
    let n = this._getOriginZoom(e) - 1;
    for (; n <= this.options.maxZoom; ) {
      const r = this.getChildren(e);
      if (n++, r.length !== 1) break;
      e = r[0].properties.cluster_id;
    }
    return n;
  }
  _appendLeaves(e, n, r, i, o) {
    const a = this.getChildren(n);
    for (const s of a) {
      const u = s.properties;
      if (u && u.cluster ? o + u.point_count <= i ? o += u.point_count : o = this._appendLeaves(e, u.cluster_id, r, i, o) : o < i ? o++ : e.push(s), e.length === r) break;
    }
    return o;
  }
  _createTree(e) {
    const n = new ca(e.length / this.stride | 0, this.options.nodeSize, Float32Array);
    for (let r = 0; r < e.length; r += this.stride) n.add(e[r], e[r + 1]);
    return n.finish(), n.data = e, n;
  }
  _addTileFeatures(e, n, r, i, o, a) {
    for (const s of e) {
      const u = s * this.stride, l = n[u + nn] > 1;
      let c, d, p;
      if (l)
        c = jc(n, u, this.clusterProps), d = n[u], p = n[u + 1];
      else {
        const h = this.points[n[u + rn]];
        c = h.properties;
        const [f, C] = h.geometry.coordinates;
        d = $r(f), p = zr(C);
      }
      const v = {
        type: 1,
        geometry: [[
          Math.round(this.options.extent * (d * o - r)),
          Math.round(this.options.extent * (p * o - i))
        ]],
        tags: c
      };
      let m;
      l || this.options.generateId ? m = n[u + rn] : m = this.points[n[u + rn]].id, m !== void 0 && (v.id = m), a.features.push(v);
    }
  }
  _limitZoom(e) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
  }
  _cluster(e, n) {
    const { radius: r, extent: i, reduce: o, minPoints: a } = this.options, s = r / (i * Math.pow(2, n)), u = e.data, l = [], c = this.stride;
    for (let d = 0; d < u.length; d += c) {
      if (u[d + yn] <= n) continue;
      u[d + yn] = n;
      const p = u[d], v = u[d + 1], m = e.within(u[d], u[d + 1], s), h = u[d + nn];
      let f = h;
      for (const C of m) {
        const w = C * c;
        u[w + yn] > n && (f += u[w + nn]);
      }
      if (f > h && f >= a) {
        let C = p * h, w = v * h, b, S = -1;
        const D = ((d / c | 0) << 5) + (n + 1) + this.points.length;
        for (const E of m) {
          const L = E * c;
          if (u[L + yn] <= n) continue;
          u[L + yn] = n;
          const F = u[L + nn];
          C += u[L] * F, w += u[L + 1] * F, u[L + to] = D, o && (b || (b = this._map(u, d, !0), S = this.clusterProps.length, this.clusterProps.push(b)), o(b, this._map(u, L)));
        }
        u[d + to] = D, l.push(C / f, w / f, 1 / 0, D, -1, f), o && l.push(S);
      } else {
        for (let C = 0; C < c; C++) l.push(u[d + C]);
        if (f > 1)
          for (const C of m) {
            const w = C * c;
            if (!(u[w + yn] <= n)) {
              u[w + yn] = n;
              for (let b = 0; b < c; b++) l.push(u[w + b]);
            }
          }
      }
    }
    return l;
  }
  // get index of the point from which the cluster originated
  _getOriginId(e) {
    return e - this.points.length >> 5;
  }
  // get zoom of the point from which the cluster originated
  _getOriginZoom(e) {
    return (e - this.points.length) % 32;
  }
  _map(e, n, r) {
    if (e[n + nn] > 1) {
      const a = this.clusterProps[e[n + Ic]];
      return r ? Object.assign({}, a) : a;
    }
    const i = this.points[e[n + rn]].properties, o = this.options.map(i);
    return r && o === i ? Object.assign({}, o) : o;
  }
}
function Ds(t, e, n) {
  return {
    type: "Feature",
    id: t[e + rn],
    properties: jc(t, e, n),
    geometry: {
      type: "Point",
      coordinates: [eh(t[e]), th(t[e + 1])]
    }
  };
}
function jc(t, e, n) {
  const r = t[e + nn], i = r >= 1e4 ? `${Math.round(r / 1e3)}k` : r >= 1e3 ? `${Math.round(r / 100) / 10}k` : r, o = t[e + Ic], a = o === -1 ? {} : Object.assign({}, n[o]);
  return Object.assign(a, {
    cluster: !0,
    cluster_id: t[e + rn],
    point_count: r,
    point_count_abbreviated: i
  });
}
function $r(t) {
  return t / 360 + 0.5;
}
function zr(t) {
  const e = Math.sin(t * Math.PI / 180), n = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
  return n < 0 ? 0 : n > 1 ? 1 : n;
}
function eh(t) {
  return (t - 0.5) * 360;
}
function th(t) {
  const e = (180 - t * 360) * Math.PI / 180;
  return 360 * Math.atan(Math.exp(e)) / Math.PI - 90;
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
function nh(t, e) {
  var n = {};
  for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && e.indexOf(r) < 0 && (n[r] = t[r]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(t); i < r.length; i++)
      e.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[i]) && (n[r[i]] = t[r[i]]);
  return n;
}
class wt {
  static isAdvancedMarkerAvailable(e) {
    return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(e) {
    return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(e, n) {
    this.isAdvancedMarker(e) ? e.map = n : e.setMap(n);
  }
  static getPosition(e) {
    if (this.isAdvancedMarker(e)) {
      if (e.position) {
        if (e.position instanceof google.maps.LatLng)
          return e.position;
        if (e.position.lat && e.position.lng)
          return new google.maps.LatLng(e.position.lat, e.position.lng);
      }
      return new google.maps.LatLng(null);
    }
    return e.getPosition();
  }
  static getVisible(e) {
    return this.isAdvancedMarker(e) ? !0 : e.getVisible();
  }
}
class To {
  constructor({ markers: e, position: n }) {
    this.markers = e, n && (n instanceof google.maps.LatLng ? this._position = n : this._position = new google.maps.LatLng(n));
  }
  get bounds() {
    if (this.markers.length === 0 && !this._position)
      return;
    const e = new google.maps.LatLngBounds(this._position, this._position);
    for (const n of this.markers)
      e.extend(wt.getPosition(n));
    return e;
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((e) => wt.getVisible(e)).length;
  }
  /**
   * Add a marker to the cluster.
   */
  push(e) {
    this.markers.push(e);
  }
  /**
   * Cleanup references and remove marker from map.
   */
  delete() {
    this.marker && (wt.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class rh {
  constructor({ maxZoom: e = 16 }) {
    this.maxZoom = e;
  }
  /**
   * Helper function to bypass clustering based upon some map state such as
   * zoom, number of markers, etc.
   *
   * ```typescript
   *  cluster({markers, map}: AlgorithmInput): Cluster[] {
   *    if (shouldBypassClustering(map)) {
   *      return this.noop({markers})
   *    }
   * }
   * ```
   */
  noop({ markers: e }) {
    return ih(e);
  }
}
const ih = (t) => t.map((n) => new To({
  position: wt.getPosition(n),
  markers: [n]
}));
class oh extends rh {
  constructor(e) {
    var { maxZoom: n, radius: r = 60 } = e, i = nh(e, ["maxZoom", "radius"]);
    super({ maxZoom: n }), this.state = { zoom: -1 }, this.superCluster = new Qp(Object.assign({ maxZoom: this.maxZoom, radius: r }, i));
  }
  calculate(e) {
    let n = !1;
    const r = { zoom: e.map.getZoom() };
    if (!gs(e.markers, this.markers)) {
      n = !0, this.markers = [...e.markers];
      const i = this.markers.map((o) => {
        const a = wt.getPosition(o);
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: [a.lng(), a.lat()]
          },
          properties: { marker: o }
        };
      });
      this.superCluster.load(i);
    }
    return n || (this.state.zoom <= this.maxZoom || r.zoom <= this.maxZoom) && (n = !gs(this.state, r)), this.state = r, n && (this.clusters = this.cluster(e)), { clusters: this.clusters, changed: n };
  }
  cluster({ map: e }) {
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(e.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster({ geometry: { coordinates: [e, n] }, properties: r }) {
    if (r.cluster)
      return new To({
        markers: this.superCluster.getLeaves(r.cluster_id, 1 / 0).map((o) => o.properties.marker),
        position: { lat: n, lng: e }
      });
    const i = r.marker;
    return new To({
      markers: [i],
      position: wt.getPosition(i)
    });
  }
}
class ah {
  constructor(e, n) {
    this.markers = { sum: e.length };
    const r = n.map((o) => o.count), i = r.reduce((o, a) => o + a, 0);
    this.clusters = {
      count: n.length,
      markers: {
        mean: i / n.length,
        sum: i,
        min: Math.min(...r),
        max: Math.max(...r)
      }
    };
  }
}
class sh {
  /**
   * The default render function for the library used by {@link MarkerClusterer}.
   *
   * Currently set to use the following:
   *
   * ```typescript
   * // change color if this cluster has more markers than the mean cluster
   * const color =
   *   count > Math.max(10, stats.clusters.markers.mean)
   *     ? "#ff0000"
   *     : "#0000ff";
   *
   * // create svg url with fill color
   * const svg = window.btoa(`
   * <svg fill="${color}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240">
   *   <circle cx="120" cy="120" opacity=".6" r="70" />
   *   <circle cx="120" cy="120" opacity=".3" r="90" />
   *   <circle cx="120" cy="120" opacity=".2" r="110" />
   *   <circle cx="120" cy="120" opacity=".1" r="130" />
   * </svg>`);
   *
   * // create marker using svg icon
   * return new google.maps.Marker({
   *   position,
   *   icon: {
   *     url: `data:image/svg+xml;base64,${svg}`,
   *     scaledSize: new google.maps.Size(45, 45),
   *   },
   *   label: {
   *     text: String(count),
   *     color: "rgba(255,255,255,0.9)",
   *     fontSize: "12px",
   *   },
   *   // adjust zIndex to be above other markers
   *   zIndex: 1000 + count,
   * });
   * ```
   */
  render({ count: e, position: n }, r, i) {
    const a = `<svg fill="${e > Math.max(10, r.clusters.markers.mean) ? "#ff0000" : "#0000ff"}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">${e}</text>
</svg>`, s = `Cluster of ${e} markers`, u = Number(google.maps.Marker.MAX_ZINDEX) + e;
    if (wt.isAdvancedMarkerAvailable(i)) {
      const d = new DOMParser().parseFromString(a, "image/svg+xml").documentElement;
      d.setAttribute("transform", "translate(0 25)");
      const p = {
        map: i,
        position: n,
        zIndex: u,
        title: s,
        content: d
      };
      return new google.maps.marker.AdvancedMarkerElement(p);
    }
    const l = {
      position: n,
      zIndex: u,
      title: s,
      icon: {
        url: `data:image/svg+xml;base64,${btoa(a)}`,
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(l);
  }
}
function uh(t, e) {
  for (let n in e.prototype)
    t.prototype[n] = e.prototype[n];
}
class fa {
  constructor() {
    uh(fa, google.maps.OverlayView);
  }
}
var pr;
(function(t) {
  t.CLUSTERING_BEGIN = "clusteringbegin", t.CLUSTERING_END = "clusteringend", t.CLUSTER_CLICK = "click";
})(pr || (pr = {}));
const lh = (t, e, n) => {
  n.fitBounds(e.bounds);
};
class ch extends fa {
  constructor({ map: e, markers: n = [], algorithmOptions: r = {}, algorithm: i = new oh(r), renderer: o = new sh(), onClusterClick: a = lh }) {
    super(), this.markers = [...n], this.clusters = [], this.algorithm = i, this.renderer = o, this.onClusterClick = a, e && this.setMap(e);
  }
  addMarker(e, n) {
    this.markers.includes(e) || (this.markers.push(e), n || this.render());
  }
  addMarkers(e, n) {
    e.forEach((r) => {
      this.addMarker(r, !0);
    }), n || this.render();
  }
  removeMarker(e, n) {
    const r = this.markers.indexOf(e);
    return r === -1 ? !1 : (wt.setMap(e, null), this.markers.splice(r, 1), n || this.render(), !0);
  }
  removeMarkers(e, n) {
    let r = !1;
    return e.forEach((i) => {
      r = this.removeMarker(i, !0) || r;
    }), r && !n && this.render(), r;
  }
  clearMarkers(e) {
    this.markers.length = 0, e || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    const e = this.getMap();
    if (e instanceof google.maps.Map && e.getProjection()) {
      google.maps.event.trigger(this, pr.CLUSTERING_BEGIN, this);
      const { clusters: n, changed: r } = this.algorithm.calculate({
        markers: this.markers,
        map: e,
        mapCanvasProjection: this.getProjection()
      });
      if (r || r == null) {
        const i = /* @__PURE__ */ new Set();
        for (const a of n)
          a.markers.length == 1 && i.add(a.markers[0]);
        const o = [];
        for (const a of this.clusters)
          a.marker != null && (a.markers.length == 1 ? i.has(a.marker) || wt.setMap(a.marker, null) : o.push(a.marker));
        this.clusters = n, this.renderClusters(), requestAnimationFrame(() => o.forEach((a) => wt.setMap(a, null)));
      }
      google.maps.event.trigger(this, pr.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((e) => wt.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
  }
  renderClusters() {
    const e = new ah(this.markers, this.clusters), n = this.getMap();
    this.clusters.forEach((r) => {
      r.markers.length === 1 ? r.marker = r.markers[0] : (r.marker = this.renderer.render(r, e, n), r.markers.forEach((i) => wt.setMap(i, null)), this.onClusterClick && r.marker.addListener(
        "click",
        /* istanbul ignore next */
        (i) => {
          google.maps.event.trigger(this, pr.CLUSTER_CLICK, r), this.onClusterClick(i, r, n);
        }
      )), wt.setMap(r.marker, n);
    });
  }
}
function fh(t) {
  var e = Dp(), n = I(null), r = n[0], i = n[1];
  return B(function() {
    if (e && r === null) {
      var o = new ch(ve(ve({}, t), { map: e }));
      i(o);
    }
  }, [e]), r;
}
function dh(t) {
  var e = t.children, n = t.options, r = fh(n);
  return r !== null ? e(r) : null;
}
st(dh);
var bs = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, Es = {
  options: function(t, e) {
    t.setOptions(e);
  },
  position: function(t, e) {
    t.setPosition(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
};
function ph(t) {
  var e = t.children, n = t.anchor, r = t.options, i = t.position, o = t.zIndex, a = t.onCloseClick, s = t.onDomReady, u = t.onContentChanged, l = t.onPositionChanged, c = t.onZindexChanged, d = t.onLoad, p = t.onUnmount, v = je(xe), m = I(null), h = m[0], f = m[1], C = I(null), w = C[0], b = C[1], S = I(null), D = S[0], E = S[1], L = I(null), F = L[0], H = L[1], P = I(null), $ = P[0], R = P[1], j = I(null), T = j[0], N = j[1], K = Ue(null);
  return B(function() {
    h !== null && (h.close(), n ? h.open(v, n) : h.getPosition() && h.open(v));
  }, [v, h, n]), B(function() {
    r && h !== null && h.setOptions(r);
  }, [h, r]), B(function() {
    i && h !== null && h.setPosition(i);
  }, [i]), B(function() {
    typeof o == "number" && h !== null && h.setZIndex(o);
  }, [o]), B(function() {
    h && a && (w !== null && google.maps.event.removeListener(w), b(google.maps.event.addListener(h, "closeclick", a)));
  }, [a]), B(function() {
    h && s && (D !== null && google.maps.event.removeListener(D), E(google.maps.event.addListener(h, "domready", s)));
  }, [s]), B(function() {
    h && u && (F !== null && google.maps.event.removeListener(F), H(google.maps.event.addListener(h, "content_changed", u)));
  }, [u]), B(function() {
    h && l && ($ !== null && google.maps.event.removeListener($), R(google.maps.event.addListener(h, "position_changed", l)));
  }, [l]), B(function() {
    h && c && (T !== null && google.maps.event.removeListener(T), N(google.maps.event.addListener(h, "zindex_changed", c)));
  }, [c]), B(function() {
    var _ = new google.maps.InfoWindow(ve({}, r || {}));
    return f(_), K.current = document.createElement("div"), a && b(google.maps.event.addListener(_, "closeclick", a)), s && E(google.maps.event.addListener(_, "domready", s)), u && H(google.maps.event.addListener(_, "content_changed", u)), l && R(google.maps.event.addListener(_, "position_changed", l)), c && N(google.maps.event.addListener(_, "zindex_changed", c)), _.setContent(K.current), i && _.setPosition(i), o && _.setZIndex(o), n ? _.open(v, n) : _.getPosition() ? _.open(v) : it(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."), d && d(_), function() {
      w && google.maps.event.removeListener(w), F && google.maps.event.removeListener(F), D && google.maps.event.removeListener(D), $ && google.maps.event.removeListener($), T && google.maps.event.removeListener(T), p && p(_), _.close();
    };
  }, []), K.current ? Si(_t.only(e), K.current) : null;
}
st(ph);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.containerElement = null, n.state = {
      infoWindow: null
    }, n.open = function(r, i) {
      i ? r.open(n.context, i) : r.getPosition() ? r.open(n.context) : it(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
    }, n.setInfoWindowCallback = function() {
      n.state.infoWindow !== null && n.containerElement !== null && (n.state.infoWindow.setContent(n.containerElement), n.open(n.state.infoWindow, n.props.anchor), n.props.onLoad && n.props.onLoad(n.state.infoWindow));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.InfoWindow(ve({}, this.props.options || {}));
    this.containerElement = document.createElement("div"), this.registeredEvents = Se({
      updaterMap: Es,
      eventMap: bs,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        infoWindow: n
      };
    }, this.setInfoWindowCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.infoWindow !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Es,
      eventMap: bs,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.infoWindow
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.infoWindow !== null && (Me(this.registeredEvents), this.props.onUnmount && this.props.onUnmount(this.state.infoWindow), this.state.infoWindow.close());
  }, e.prototype.render = function() {
    return this.containerElement ? Si(_t.only(this.props.children), this.containerElement) : null;
  }, e.contextType = xe, e;
})(qe);
var ws = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Bs = {
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  path: function(t, e) {
    t.setPath(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
}, hh = {};
function vh(t) {
  var e = t.options, n = t.draggable, r = t.editable, i = t.visible, o = t.path, a = t.onDblClick, s = t.onDragEnd, u = t.onDragStart, l = t.onMouseDown, c = t.onMouseMove, d = t.onMouseOut, p = t.onMouseOver, v = t.onMouseUp, m = t.onRightClick, h = t.onClick, f = t.onDrag, C = t.onLoad, w = t.onUnmount, b = je(xe), S = I(null), D = S[0], E = S[1], L = I(null), F = L[0], H = L[1], P = I(null), $ = P[0], R = P[1], j = I(null), T = j[0], N = j[1], K = I(null), _ = K[0], oe = K[1], ie = I(null), k = ie[0], U = ie[1], J = I(null), q = J[0], te = J[1], Y = I(null), y = Y[0], z = Y[1], W = I(null), M = W[0], X = W[1], ne = I(null), G = ne[0], le = ne[1], se = I(null), pe = se[0], he = se[1], De = I(null), ye = De[0], be = De[1];
  return B(function() {
    D !== null && D.setMap(b);
  }, [b]), B(function() {
    typeof e < "u" && D !== null && D.setOptions(e);
  }, [D, e]), B(function() {
    typeof n < "u" && D !== null && D.setDraggable(n);
  }, [D, n]), B(function() {
    typeof r < "u" && D !== null && D.setEditable(r);
  }, [D, r]), B(function() {
    typeof i < "u" && D !== null && D.setVisible(i);
  }, [D, i]), B(function() {
    typeof o < "u" && D !== null && D.setPath(o);
  }, [D, o]), B(function() {
    D && a && (F !== null && google.maps.event.removeListener(F), H(google.maps.event.addListener(D, "dblclick", a)));
  }, [a]), B(function() {
    D && s && ($ !== null && google.maps.event.removeListener($), R(google.maps.event.addListener(D, "dragend", s)));
  }, [s]), B(function() {
    D && u && (T !== null && google.maps.event.removeListener(T), N(google.maps.event.addListener(D, "dragstart", u)));
  }, [u]), B(function() {
    D && l && (_ !== null && google.maps.event.removeListener(_), oe(google.maps.event.addListener(D, "mousedown", l)));
  }, [l]), B(function() {
    D && c && (k !== null && google.maps.event.removeListener(k), U(google.maps.event.addListener(D, "mousemove", c)));
  }, [c]), B(function() {
    D && d && (q !== null && google.maps.event.removeListener(q), te(google.maps.event.addListener(D, "mouseout", d)));
  }, [d]), B(function() {
    D && p && (y !== null && google.maps.event.removeListener(y), z(google.maps.event.addListener(D, "mouseover", p)));
  }, [p]), B(function() {
    D && v && (M !== null && google.maps.event.removeListener(M), X(google.maps.event.addListener(D, "mouseup", v)));
  }, [v]), B(function() {
    D && m && (G !== null && google.maps.event.removeListener(G), le(google.maps.event.addListener(D, "rightclick", m)));
  }, [m]), B(function() {
    D && h && (pe !== null && google.maps.event.removeListener(pe), he(google.maps.event.addListener(D, "click", h)));
  }, [h]), B(function() {
    D && f && (ye !== null && google.maps.event.removeListener(ye), be(google.maps.event.addListener(D, "drag", f)));
  }, [f]), B(function() {
    var ge = new google.maps.Polyline(ve(ve({}, e || hh), { map: b }));
    return o && ge.setPath(o), typeof i < "u" && ge.setVisible(i), typeof r < "u" && ge.setEditable(r), typeof n < "u" && ge.setDraggable(n), a && H(google.maps.event.addListener(ge, "dblclick", a)), s && R(google.maps.event.addListener(ge, "dragend", s)), u && N(google.maps.event.addListener(ge, "dragstart", u)), l && oe(google.maps.event.addListener(ge, "mousedown", l)), c && U(google.maps.event.addListener(ge, "mousemove", c)), d && te(google.maps.event.addListener(ge, "mouseout", d)), p && z(google.maps.event.addListener(ge, "mouseover", p)), v && X(google.maps.event.addListener(ge, "mouseup", v)), m && le(google.maps.event.addListener(ge, "rightclick", m)), h && he(google.maps.event.addListener(ge, "click", h)), f && be(google.maps.event.addListener(ge, "drag", f)), E(ge), C && C(ge), function() {
      F !== null && google.maps.event.removeListener(F), $ !== null && google.maps.event.removeListener($), T !== null && google.maps.event.removeListener(T), _ !== null && google.maps.event.removeListener(_), k !== null && google.maps.event.removeListener(k), q !== null && google.maps.event.removeListener(q), y !== null && google.maps.event.removeListener(y), M !== null && google.maps.event.removeListener(M), G !== null && google.maps.event.removeListener(G), pe !== null && google.maps.event.removeListener(pe), w && w(ge), ge.setMap(null);
    };
  }, []), null;
}
st(vh);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      polyline: null
    }, n.setPolylineCallback = function() {
      n.state.polyline !== null && n.props.onLoad && n.props.onLoad(n.state.polyline);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Polyline(ve(ve({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: Bs,
      eventMap: ws,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        polyline: n
      };
    }, this.setPolylineCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.polyline !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Bs,
      eventMap: ws,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.polyline
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.polyline !== null && (this.props.onUnmount && this.props.onUnmount(this.state.polyline), Me(this.registeredEvents), this.state.polyline.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var xs = {
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, As = {
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  path: function(t, e) {
    t.setPath(e);
  },
  paths: function(t, e) {
    t.setPaths(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
};
function gh(t) {
  var e = t.options, n = t.draggable, r = t.editable, i = t.visible, o = t.path, a = t.paths, s = t.onDblClick, u = t.onDragEnd, l = t.onDragStart, c = t.onMouseDown, d = t.onMouseMove, p = t.onMouseOut, v = t.onMouseOver, m = t.onMouseUp, h = t.onRightClick, f = t.onClick, C = t.onDrag, w = t.onLoad, b = t.onUnmount, S = t.onEdit, D = je(xe), E = I(null), L = E[0], F = E[1], H = I(null), P = H[0], $ = H[1], R = I(null), j = R[0], T = R[1], N = I(null), K = N[0], _ = N[1], oe = I(null), ie = oe[0], k = oe[1], U = I(null), J = U[0], q = U[1], te = I(null), Y = te[0], y = te[1], z = I(null), W = z[0], M = z[1], X = I(null), ne = X[0], G = X[1], le = I(null), se = le[0], pe = le[1], he = I(null), De = he[0], ye = he[1], be = I(null), ge = be[0], Ne = be[1];
  return B(function() {
    L !== null && L.setMap(D);
  }, [D]), B(function() {
    typeof e < "u" && L !== null && L.setOptions(e);
  }, [L, e]), B(function() {
    typeof n < "u" && L !== null && L.setDraggable(n);
  }, [L, n]), B(function() {
    typeof r < "u" && L !== null && L.setEditable(r);
  }, [L, r]), B(function() {
    typeof i < "u" && L !== null && L.setVisible(i);
  }, [L, i]), B(function() {
    typeof o < "u" && L !== null && L.setPath(o);
  }, [L, o]), B(function() {
    typeof a < "u" && L !== null && L.setPaths(a);
  }, [L, a]), B(function() {
    L && s && (P !== null && google.maps.event.removeListener(P), $(google.maps.event.addListener(L, "dblclick", s)));
  }, [s]), B(function() {
    L && (google.maps.event.addListener(L.getPath(), "insert_at", function() {
      S == null || S(L);
    }), google.maps.event.addListener(L.getPath(), "set_at", function() {
      S == null || S(L);
    }));
  }, [L, S]), B(function() {
    L && u && (j !== null && google.maps.event.removeListener(j), T(google.maps.event.addListener(L, "dragend", u)));
  }, [u]), B(function() {
    L && l && (K !== null && google.maps.event.removeListener(K), _(google.maps.event.addListener(L, "dragstart", l)));
  }, [l]), B(function() {
    L && c && (ie !== null && google.maps.event.removeListener(ie), k(google.maps.event.addListener(L, "mousedown", c)));
  }, [c]), B(function() {
    L && d && (J !== null && google.maps.event.removeListener(J), q(google.maps.event.addListener(L, "mousemove", d)));
  }, [d]), B(function() {
    L && p && (Y !== null && google.maps.event.removeListener(Y), y(google.maps.event.addListener(L, "mouseout", p)));
  }, [p]), B(function() {
    L && v && (W !== null && google.maps.event.removeListener(W), M(google.maps.event.addListener(L, "mouseover", v)));
  }, [v]), B(function() {
    L && m && (ne !== null && google.maps.event.removeListener(ne), G(google.maps.event.addListener(L, "mouseup", m)));
  }, [m]), B(function() {
    L && h && (se !== null && google.maps.event.removeListener(se), pe(google.maps.event.addListener(L, "rightclick", h)));
  }, [h]), B(function() {
    L && f && (De !== null && google.maps.event.removeListener(De), ye(google.maps.event.addListener(L, "click", f)));
  }, [f]), B(function() {
    L && C && (ge !== null && google.maps.event.removeListener(ge), Ne(google.maps.event.addListener(L, "drag", C)));
  }, [C]), B(function() {
    var ue = new google.maps.Polygon(ve(ve({}, e || {}), { map: D }));
    return o && ue.setPath(o), a && ue.setPaths(a), typeof i < "u" && ue.setVisible(i), typeof r < "u" && ue.setEditable(r), typeof n < "u" && ue.setDraggable(n), s && $(google.maps.event.addListener(ue, "dblclick", s)), u && T(google.maps.event.addListener(ue, "dragend", u)), l && _(google.maps.event.addListener(ue, "dragstart", l)), c && k(google.maps.event.addListener(ue, "mousedown", c)), d && q(google.maps.event.addListener(ue, "mousemove", d)), p && y(google.maps.event.addListener(ue, "mouseout", p)), v && M(google.maps.event.addListener(ue, "mouseover", v)), m && G(google.maps.event.addListener(ue, "mouseup", m)), h && pe(google.maps.event.addListener(ue, "rightclick", h)), f && ye(google.maps.event.addListener(ue, "click", f)), C && Ne(google.maps.event.addListener(ue, "drag", C)), F(ue), w && w(ue), function() {
      P !== null && google.maps.event.removeListener(P), j !== null && google.maps.event.removeListener(j), K !== null && google.maps.event.removeListener(K), ie !== null && google.maps.event.removeListener(ie), J !== null && google.maps.event.removeListener(J), Y !== null && google.maps.event.removeListener(Y), W !== null && google.maps.event.removeListener(W), ne !== null && google.maps.event.removeListener(ne), se !== null && google.maps.event.removeListener(se), De !== null && google.maps.event.removeListener(De), b && b(ue), ue.setMap(null);
    };
  }, []), null;
}
st(gh);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      polygon: null
    }, n.setPolygonCallback = function() {
      n.state.polygon !== null && n.props.onLoad && n.props.onLoad(n.state.polygon);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Polygon(ve(ve({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: As,
      eventMap: xs,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        polygon: n
      };
    }, this.setPolygonCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.polygon !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: As,
      eventMap: xs,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.polygon
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.polygon !== null && (this.props.onUnmount && this.props.onUnmount(this.state.polygon), Me(this.registeredEvents), this.state.polygon && this.state.polygon.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var Ls = {
  onBoundsChanged: "bounds_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Os = {
  bounds: function(t, e) {
    t.setBounds(e);
  },
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
};
function mh(t) {
  var e = t.options, n = t.bounds, r = t.draggable, i = t.editable, o = t.visible, a = t.onDblClick, s = t.onDragEnd, u = t.onDragStart, l = t.onMouseDown, c = t.onMouseMove, d = t.onMouseOut, p = t.onMouseOver, v = t.onMouseUp, m = t.onRightClick, h = t.onClick, f = t.onDrag, C = t.onBoundsChanged, w = t.onLoad, b = t.onUnmount, S = je(xe), D = I(null), E = D[0], L = D[1], F = I(null), H = F[0], P = F[1], $ = I(null), R = $[0], j = $[1], T = I(null), N = T[0], K = T[1], _ = I(null), oe = _[0], ie = _[1], k = I(null), U = k[0], J = k[1], q = I(null), te = q[0], Y = q[1], y = I(null), z = y[0], W = y[1], M = I(null), X = M[0], ne = M[1], G = I(null), le = G[0], se = G[1], pe = I(null), he = pe[0], De = pe[1], ye = I(null), be = ye[0], ge = ye[1], Ne = I(null), ue = Ne[0], We = Ne[1];
  return B(function() {
    E !== null && E.setMap(S);
  }, [S]), B(function() {
    typeof e < "u" && E !== null && E.setOptions(e);
  }, [E, e]), B(function() {
    typeof r < "u" && E !== null && E.setDraggable(r);
  }, [E, r]), B(function() {
    typeof i < "u" && E !== null && E.setEditable(i);
  }, [E, i]), B(function() {
    typeof o < "u" && E !== null && E.setVisible(o);
  }, [E, o]), B(function() {
    typeof n < "u" && E !== null && E.setBounds(n);
  }, [E, n]), B(function() {
    E && a && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(E, "dblclick", a)));
  }, [a]), B(function() {
    E && s && (R !== null && google.maps.event.removeListener(R), j(google.maps.event.addListener(E, "dragend", s)));
  }, [s]), B(function() {
    E && u && (N !== null && google.maps.event.removeListener(N), K(google.maps.event.addListener(E, "dragstart", u)));
  }, [u]), B(function() {
    E && l && (oe !== null && google.maps.event.removeListener(oe), ie(google.maps.event.addListener(E, "mousedown", l)));
  }, [l]), B(function() {
    E && c && (U !== null && google.maps.event.removeListener(U), J(google.maps.event.addListener(E, "mousemove", c)));
  }, [c]), B(function() {
    E && d && (te !== null && google.maps.event.removeListener(te), Y(google.maps.event.addListener(E, "mouseout", d)));
  }, [d]), B(function() {
    E && p && (z !== null && google.maps.event.removeListener(z), W(google.maps.event.addListener(E, "mouseover", p)));
  }, [p]), B(function() {
    E && v && (X !== null && google.maps.event.removeListener(X), ne(google.maps.event.addListener(E, "mouseup", v)));
  }, [v]), B(function() {
    E && m && (le !== null && google.maps.event.removeListener(le), se(google.maps.event.addListener(E, "rightclick", m)));
  }, [m]), B(function() {
    E && h && (he !== null && google.maps.event.removeListener(he), De(google.maps.event.addListener(E, "click", h)));
  }, [h]), B(function() {
    E && f && (be !== null && google.maps.event.removeListener(be), ge(google.maps.event.addListener(E, "drag", f)));
  }, [f]), B(function() {
    E && C && (ue !== null && google.maps.event.removeListener(ue), We(google.maps.event.addListener(E, "bounds_changed", C)));
  }, [C]), B(function() {
    var de = new google.maps.Rectangle(ve(ve({}, e || {}), { map: S }));
    return typeof o < "u" && de.setVisible(o), typeof i < "u" && de.setEditable(i), typeof r < "u" && de.setDraggable(r), typeof n < "u" && de.setBounds(n), a && P(google.maps.event.addListener(de, "dblclick", a)), s && j(google.maps.event.addListener(de, "dragend", s)), u && K(google.maps.event.addListener(de, "dragstart", u)), l && ie(google.maps.event.addListener(de, "mousedown", l)), c && J(google.maps.event.addListener(de, "mousemove", c)), d && Y(google.maps.event.addListener(de, "mouseout", d)), p && W(google.maps.event.addListener(de, "mouseover", p)), v && ne(google.maps.event.addListener(de, "mouseup", v)), m && se(google.maps.event.addListener(de, "rightclick", m)), h && De(google.maps.event.addListener(de, "click", h)), f && ge(google.maps.event.addListener(de, "drag", f)), C && We(google.maps.event.addListener(de, "bounds_changed", C)), L(de), w && w(de), function() {
      H !== null && google.maps.event.removeListener(H), R !== null && google.maps.event.removeListener(R), N !== null && google.maps.event.removeListener(N), oe !== null && google.maps.event.removeListener(oe), U !== null && google.maps.event.removeListener(U), te !== null && google.maps.event.removeListener(te), z !== null && google.maps.event.removeListener(z), X !== null && google.maps.event.removeListener(X), le !== null && google.maps.event.removeListener(le), he !== null && google.maps.event.removeListener(he), be !== null && google.maps.event.removeListener(be), ue !== null && google.maps.event.removeListener(ue), b && b(de), de.setMap(null);
    };
  }, []), null;
}
st(mh);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      rectangle: null
    }, n.setRectangleCallback = function() {
      n.state.rectangle !== null && n.props.onLoad && n.props.onLoad(n.state.rectangle);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Rectangle(ve(ve({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: Os,
      eventMap: Ls,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        rectangle: n
      };
    }, this.setRectangleCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.rectangle !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Os,
      eventMap: Ls,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.rectangle
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.rectangle !== null && (this.props.onUnmount && this.props.onUnmount(this.state.rectangle), Me(this.registeredEvents), this.state.rectangle.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var Ss = {
  onCenterChanged: "center_changed",
  onRadiusChanged: "radius_changed",
  onClick: "click",
  onDblClick: "dblclick",
  onDrag: "drag",
  onDragEnd: "dragend",
  onDragStart: "dragstart",
  onMouseDown: "mousedown",
  onMouseMove: "mousemove",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick"
}, Ps = {
  center: function(t, e) {
    t.setCenter(e);
  },
  draggable: function(t, e) {
    t.setDraggable(e);
  },
  editable: function(t, e) {
    t.setEditable(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  radius: function(t, e) {
    t.setRadius(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  }
}, yh = {};
function Ch(t) {
  var e = t.options, n = t.center, r = t.radius, i = t.draggable, o = t.editable, a = t.visible, s = t.onDblClick, u = t.onDragEnd, l = t.onDragStart, c = t.onMouseDown, d = t.onMouseMove, p = t.onMouseOut, v = t.onMouseOver, m = t.onMouseUp, h = t.onRightClick, f = t.onClick, C = t.onDrag, w = t.onCenterChanged, b = t.onRadiusChanged, S = t.onLoad, D = t.onUnmount, E = je(xe), L = I(null), F = L[0], H = L[1], P = I(null), $ = P[0], R = P[1], j = I(null), T = j[0], N = j[1], K = I(null), _ = K[0], oe = K[1], ie = I(null), k = ie[0], U = ie[1], J = I(null), q = J[0], te = J[1], Y = I(null), y = Y[0], z = Y[1], W = I(null), M = W[0], X = W[1], ne = I(null), G = ne[0], le = ne[1], se = I(null), pe = se[0], he = se[1], De = I(null), ye = De[0], be = De[1], ge = I(null), Ne = ge[0], ue = ge[1], We = I(null), de = We[0], Be = We[1], Te = I(null), Xe = Te[0], nt = Te[1];
  return B(function() {
    F !== null && F.setMap(E);
  }, [E]), B(function() {
    typeof e < "u" && F !== null && F.setOptions(e);
  }, [F, e]), B(function() {
    typeof i < "u" && F !== null && F.setDraggable(i);
  }, [F, i]), B(function() {
    typeof o < "u" && F !== null && F.setEditable(o);
  }, [F, o]), B(function() {
    typeof a < "u" && F !== null && F.setVisible(a);
  }, [F, a]), B(function() {
    typeof r == "number" && F !== null && F.setRadius(r);
  }, [F, r]), B(function() {
    typeof n < "u" && F !== null && F.setCenter(n);
  }, [F, n]), B(function() {
    F && s && ($ !== null && google.maps.event.removeListener($), R(google.maps.event.addListener(F, "dblclick", s)));
  }, [s]), B(function() {
    F && u && (T !== null && google.maps.event.removeListener(T), N(google.maps.event.addListener(F, "dragend", u)));
  }, [u]), B(function() {
    F && l && (_ !== null && google.maps.event.removeListener(_), oe(google.maps.event.addListener(F, "dragstart", l)));
  }, [l]), B(function() {
    F && c && (k !== null && google.maps.event.removeListener(k), U(google.maps.event.addListener(F, "mousedown", c)));
  }, [c]), B(function() {
    F && d && (q !== null && google.maps.event.removeListener(q), te(google.maps.event.addListener(F, "mousemove", d)));
  }, [d]), B(function() {
    F && p && (y !== null && google.maps.event.removeListener(y), z(google.maps.event.addListener(F, "mouseout", p)));
  }, [p]), B(function() {
    F && v && (M !== null && google.maps.event.removeListener(M), X(google.maps.event.addListener(F, "mouseover", v)));
  }, [v]), B(function() {
    F && m && (G !== null && google.maps.event.removeListener(G), le(google.maps.event.addListener(F, "mouseup", m)));
  }, [m]), B(function() {
    F && h && (pe !== null && google.maps.event.removeListener(pe), he(google.maps.event.addListener(F, "rightclick", h)));
  }, [h]), B(function() {
    F && f && (ye !== null && google.maps.event.removeListener(ye), be(google.maps.event.addListener(F, "click", f)));
  }, [f]), B(function() {
    F && C && (Ne !== null && google.maps.event.removeListener(Ne), ue(google.maps.event.addListener(F, "drag", C)));
  }, [C]), B(function() {
    F && w && (de !== null && google.maps.event.removeListener(de), Be(google.maps.event.addListener(F, "center_changed", w)));
  }, [f]), B(function() {
    F && b && (Xe !== null && google.maps.event.removeListener(Xe), nt(google.maps.event.addListener(F, "radius_changed", b)));
  }, [b]), B(function() {
    var Ae = new google.maps.Circle(ve(ve({}, e || yh), { map: E }));
    return typeof r == "number" && Ae.setRadius(r), typeof n < "u" && Ae.setCenter(n), typeof r == "number" && Ae.setRadius(r), typeof a < "u" && Ae.setVisible(a), typeof o < "u" && Ae.setEditable(o), typeof i < "u" && Ae.setDraggable(i), s && R(google.maps.event.addListener(Ae, "dblclick", s)), u && N(google.maps.event.addListener(Ae, "dragend", u)), l && oe(google.maps.event.addListener(Ae, "dragstart", l)), c && U(google.maps.event.addListener(Ae, "mousedown", c)), d && te(google.maps.event.addListener(Ae, "mousemove", d)), p && z(google.maps.event.addListener(Ae, "mouseout", p)), v && X(google.maps.event.addListener(Ae, "mouseover", v)), m && le(google.maps.event.addListener(Ae, "mouseup", m)), h && he(google.maps.event.addListener(Ae, "rightclick", h)), f && be(google.maps.event.addListener(Ae, "click", f)), C && ue(google.maps.event.addListener(Ae, "drag", C)), w && Be(google.maps.event.addListener(Ae, "center_changed", w)), b && nt(google.maps.event.addListener(Ae, "radius_changed", b)), H(Ae), S && S(Ae), function() {
      $ !== null && google.maps.event.removeListener($), T !== null && google.maps.event.removeListener(T), _ !== null && google.maps.event.removeListener(_), k !== null && google.maps.event.removeListener(k), q !== null && google.maps.event.removeListener(q), y !== null && google.maps.event.removeListener(y), M !== null && google.maps.event.removeListener(M), G !== null && google.maps.event.removeListener(G), pe !== null && google.maps.event.removeListener(pe), ye !== null && google.maps.event.removeListener(ye), de !== null && google.maps.event.removeListener(de), Xe !== null && google.maps.event.removeListener(Xe), D && D(Ae), Ae.setMap(null);
    };
  }, []), null;
}
st(Ch);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      circle: null
    }, n.setCircleCallback = function() {
      n.state.circle !== null && n.props.onLoad && n.props.onLoad(n.state.circle);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.Circle(ve(ve({}, this.props.options || {}), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: Ps,
      eventMap: Ss,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        circle: n
      };
    }, this.setCircleCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.circle !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Ps,
      eventMap: Ss,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.circle
    }));
  }, e.prototype.componentWillUnmount = function() {
    var n;
    this.state.circle !== null && (this.props.onUnmount && this.props.onUnmount(this.state.circle), Me(this.registeredEvents), (n = this.state.circle) === null || n === void 0 || n.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var Fs = {
  onClick: "click",
  onDblClick: "dblclick",
  onMouseDown: "mousedown",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover",
  onMouseUp: "mouseup",
  onRightClick: "rightclick",
  onAddFeature: "addfeature",
  onRemoveFeature: "removefeature",
  onRemoveProperty: "removeproperty",
  onSetGeometry: "setgeometry",
  onSetProperty: "setproperty"
}, Ms = {
  add: function(t, e) {
    t.add(e);
  },
  addgeojson: function(t, e, n) {
    t.addGeoJson(e, n);
  },
  contains: function(t, e) {
    t.contains(e);
  },
  foreach: function(t, e) {
    t.forEach(e);
  },
  loadgeojson: function(t, e, n, r) {
    t.loadGeoJson(e, n, r);
  },
  overridestyle: function(t, e, n) {
    t.overrideStyle(e, n);
  },
  remove: function(t, e) {
    t.remove(e);
  },
  revertstyle: function(t, e) {
    t.revertStyle(e);
  },
  controlposition: function(t, e) {
    t.setControlPosition(e);
  },
  controls: function(t, e) {
    t.setControls(e);
  },
  drawingmode: function(t, e) {
    t.setDrawingMode(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  style: function(t, e) {
    t.setStyle(e);
  },
  togeojson: function(t, e) {
    t.toGeoJson(e);
  }
};
function Dh(t) {
  var e = t.options, n = t.onClick, r = t.onDblClick, i = t.onMouseDown, o = t.onMouseMove, a = t.onMouseOut, s = t.onMouseOver, u = t.onMouseUp, l = t.onRightClick, c = t.onAddFeature, d = t.onRemoveFeature, p = t.onRemoveProperty, v = t.onSetGeometry, m = t.onSetProperty, h = t.onLoad, f = t.onUnmount, C = je(xe), w = I(null), b = w[0], S = w[1], D = I(null), E = D[0], L = D[1], F = I(null), H = F[0], P = F[1], $ = I(null), R = $[0], j = $[1], T = I(null), N = T[0], K = T[1], _ = I(null), oe = _[0], ie = _[1], k = I(null), U = k[0], J = k[1], q = I(null), te = q[0], Y = q[1], y = I(null), z = y[0], W = y[1], M = I(null), X = M[0], ne = M[1], G = I(null), le = G[0], se = G[1], pe = I(null), he = pe[0], De = pe[1], ye = I(null), be = ye[0], ge = ye[1], Ne = I(null), ue = Ne[0], We = Ne[1];
  return B(function() {
    b !== null && b.setMap(C);
  }, [C]), B(function() {
    b && r && (E !== null && google.maps.event.removeListener(E), L(google.maps.event.addListener(b, "dblclick", r)));
  }, [r]), B(function() {
    b && i && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(b, "mousedown", i)));
  }, [i]), B(function() {
    b && o && (R !== null && google.maps.event.removeListener(R), j(google.maps.event.addListener(b, "mousemove", o)));
  }, [o]), B(function() {
    b && a && (N !== null && google.maps.event.removeListener(N), K(google.maps.event.addListener(b, "mouseout", a)));
  }, [a]), B(function() {
    b && s && (oe !== null && google.maps.event.removeListener(oe), ie(google.maps.event.addListener(b, "mouseover", s)));
  }, [s]), B(function() {
    b && u && (U !== null && google.maps.event.removeListener(U), J(google.maps.event.addListener(b, "mouseup", u)));
  }, [u]), B(function() {
    b && l && (te !== null && google.maps.event.removeListener(te), Y(google.maps.event.addListener(b, "rightclick", l)));
  }, [l]), B(function() {
    b && n && (z !== null && google.maps.event.removeListener(z), W(google.maps.event.addListener(b, "click", n)));
  }, [n]), B(function() {
    b && c && (X !== null && google.maps.event.removeListener(X), ne(google.maps.event.addListener(b, "addfeature", c)));
  }, [c]), B(function() {
    b && d && (le !== null && google.maps.event.removeListener(le), se(google.maps.event.addListener(b, "removefeature", d)));
  }, [d]), B(function() {
    b && p && (he !== null && google.maps.event.removeListener(he), De(google.maps.event.addListener(b, "removeproperty", p)));
  }, [p]), B(function() {
    b && v && (be !== null && google.maps.event.removeListener(be), ge(google.maps.event.addListener(b, "setgeometry", v)));
  }, [v]), B(function() {
    b && m && (ue !== null && google.maps.event.removeListener(ue), We(google.maps.event.addListener(b, "setproperty", m)));
  }, [m]), B(function() {
    if (C !== null) {
      var de = new google.maps.Data(ve(ve({}, e || {}), { map: C }));
      r && L(google.maps.event.addListener(de, "dblclick", r)), i && P(google.maps.event.addListener(de, "mousedown", i)), o && j(google.maps.event.addListener(de, "mousemove", o)), a && K(google.maps.event.addListener(de, "mouseout", a)), s && ie(google.maps.event.addListener(de, "mouseover", s)), u && J(google.maps.event.addListener(de, "mouseup", u)), l && Y(google.maps.event.addListener(de, "rightclick", l)), n && W(google.maps.event.addListener(de, "click", n)), c && ne(google.maps.event.addListener(de, "addfeature", c)), d && se(google.maps.event.addListener(de, "removefeature", d)), p && De(google.maps.event.addListener(de, "removeproperty", p)), v && ge(google.maps.event.addListener(de, "setgeometry", v)), m && We(google.maps.event.addListener(de, "setproperty", m)), S(de), h && h(de);
    }
    return function() {
      b && (E !== null && google.maps.event.removeListener(E), H !== null && google.maps.event.removeListener(H), R !== null && google.maps.event.removeListener(R), N !== null && google.maps.event.removeListener(N), oe !== null && google.maps.event.removeListener(oe), U !== null && google.maps.event.removeListener(U), te !== null && google.maps.event.removeListener(te), z !== null && google.maps.event.removeListener(z), X !== null && google.maps.event.removeListener(X), le !== null && google.maps.event.removeListener(le), he !== null && google.maps.event.removeListener(he), be !== null && google.maps.event.removeListener(be), ue !== null && google.maps.event.removeListener(ue), f && f(b), b.setMap(null));
    };
  }, []), null;
}
st(Dh);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      data: null
    }, n.setDataCallback = function() {
      n.state.data !== null && n.props.onLoad && n.props.onLoad(n.state.data);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    if (this.context !== null) {
      var n = new google.maps.Data(ve(ve({}, this.props.options || {}), { map: this.context }));
      this.registeredEvents = Se({
        updaterMap: Ms,
        eventMap: Fs,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(function() {
        return {
          data: n
        };
      }, this.setDataCallback);
    }
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.data !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Ms,
      eventMap: Fs,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.data
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.data !== null && (this.props.onUnmount && this.props.onUnmount(this.state.data), Me(this.registeredEvents), this.state.data && this.state.data.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var ks = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
}, Ts = {
  options: function(t, e) {
    t.setOptions(e);
  },
  url: function(t, e) {
    t.setUrl(e);
  },
  zIndex: function(t, e) {
    t.setZIndex(e);
  }
};
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      kmlLayer: null
    }, n.setKmlLayerCallback = function() {
      n.state.kmlLayer !== null && n.props.onLoad && n.props.onLoad(n.state.kmlLayer);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.KmlLayer(ve(ve({}, this.props.options), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: Ts,
      eventMap: ks,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        kmlLayer: n
      };
    }, this.setKmlLayerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.kmlLayer !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Ts,
      eventMap: ks,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.kmlLayer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.kmlLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.kmlLayer), Me(this.registeredEvents), this.state.kmlLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
function Nc(t, e) {
  return typeof e == "function" ? e(t.offsetWidth, t.offsetHeight) : {
    x: 0,
    y: 0
  };
}
function bh(t, e) {
  return new e(t.lat, t.lng);
}
function Eh(t, e) {
  return new e(new google.maps.LatLng(t.ne.lat, t.ne.lng), new google.maps.LatLng(t.sw.lat, t.sw.lng));
}
function wh(t, e, n) {
  return t instanceof e ? t : n(t, e);
}
function Bh(t, e, n) {
  return t instanceof e ? t : n(t, e);
}
function xh(t, e, n) {
  var r = t && t.fromLatLngToDivPixel(n.getNorthEast()), i = t && t.fromLatLngToDivPixel(n.getSouthWest());
  return r && i ? {
    left: "".concat(i.x + e.x, "px"),
    top: "".concat(r.y + e.y, "px"),
    width: "".concat(r.x - i.x - e.x, "px"),
    height: "".concat(i.y - r.y - e.y, "px")
  } : {
    left: "-9999px",
    top: "-9999px"
  };
}
function Ah(t, e, n) {
  var r = t && t.fromLatLngToDivPixel(n);
  if (r) {
    var i = r.x, o = r.y;
    return {
      left: "".concat(i + e.x, "px"),
      top: "".concat(o + e.y, "px")
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function _c(t, e, n, r) {
  return n !== void 0 ? xh(t, e, Bh(n, google.maps.LatLngBounds, Eh)) : Ah(t, e, wh(r, google.maps.LatLng, bh));
}
function Lh(t, e) {
  return t.left === e.left && t.top === e.top && t.width === e.height && t.height === e.height;
}
function Oh(t, e, n, r, i) {
  var o = (
    /** @class */
    function(a) {
      Ve(s, a);
      function s(u, l, c, d) {
        var p = a.call(this) || this;
        return p.container = u, p.pane = l, p.position = c, p.bounds = d, p;
      }
      return s.prototype.onAdd = function() {
        var u, l = (u = this.getPanes()) === null || u === void 0 ? void 0 : u[this.pane];
        l == null || l.appendChild(this.container);
      }, s.prototype.draw = function() {
        for (var u = this.getProjection(), l = ve({}, this.container ? Nc(this.container, i) : {
          x: 0,
          y: 0
        }), c = _c(u, l, this.bounds, this.position), d = 0, p = Object.entries(c); d < p.length; d++) {
          var v = p[d], m = v[0], h = v[1];
          this.container.style[m] = h;
        }
      }, s.prototype.onRemove = function() {
        this.container.parentNode !== null && this.container.parentNode.removeChild(this.container);
      }, s;
    }(google.maps.OverlayView)
  );
  return new o(t, e, n, r);
}
function Rs(t) {
  if (!t)
    return "";
  var e = t instanceof google.maps.LatLng ? t : new google.maps.LatLng(t.lat, t.lng);
  return e + "";
}
function Is(t) {
  if (!t)
    return "";
  var e = t instanceof google.maps.LatLngBounds ? t : new google.maps.LatLngBounds(new google.maps.LatLng(t.south, t.east), new google.maps.LatLng(t.north, t.west));
  return e + "";
}
function Sh(t) {
  var e = t.position, n = t.bounds, r = t.mapPaneName, i = t.zIndex, o = t.onLoad, a = t.onUnmount, s = t.getPixelPositionOffset, u = t.children, l = je(xe), c = Gt(function() {
    var p = document.createElement("div");
    return p.style.position = "absolute", p;
  }, []), d = Gt(function() {
    return Oh(c, r, e, n, s);
  }, [c, r, e, n]);
  return B(function() {
    return o == null || o(d), d == null || d.setMap(l), function() {
      a == null || a(d), d == null || d.setMap(null);
    };
  }, [l, d]), B(function() {
    c.style.zIndex = "".concat(i);
  }, [i, c]), bc.createPortal(u, c);
}
st(Sh);
(function(t) {
  Ve(e, t);
  function e(n) {
    var r = t.call(this, n) || this;
    r.state = {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: "absolute"
      }
    }, r.updatePane = function() {
      var o = r.props.mapPaneName, a = r.overlayView.getPanes();
      it(!!o, "OverlayView requires props.mapPaneName but got %s", o), a ? r.setState({
        paneEl: a[o]
      }) : r.setState({
        paneEl: null
      });
    }, r.onAdd = function() {
      var o, a;
      r.updatePane(), (a = (o = r.props).onLoad) === null || a === void 0 || a.call(o, r.overlayView);
    }, r.onPositionElement = function() {
      var o = r.overlayView.getProjection(), a = ve({ x: 0, y: 0 }, r.containerRef.current ? Nc(r.containerRef.current, r.props.getPixelPositionOffset) : {}), s = _c(o, a, r.props.bounds, r.props.position), u = r.state.containerStyle, l = u.left, c = u.top, d = u.width, p = u.height;
      Lh(s, { left: l, top: c, width: d, height: p }) || r.setState({
        containerStyle: {
          top: s.top || 0,
          left: s.left || 0,
          width: s.width || 0,
          height: s.height || 0,
          position: "absolute"
        }
      });
    }, r.draw = function() {
      r.onPositionElement();
    }, r.onRemove = function() {
      var o, a;
      r.setState(function() {
        return {
          paneEl: null
        };
      }), (a = (o = r.props).onUnmount) === null || a === void 0 || a.call(o, r.overlayView);
    }, r.containerRef = Oi();
    var i = new google.maps.OverlayView();
    return i.onAdd = r.onAdd, i.draw = r.draw, i.onRemove = r.onRemove, r.overlayView = i, r;
  }
  return e.prototype.componentDidMount = function() {
    this.overlayView.setMap(this.context);
  }, e.prototype.componentDidUpdate = function(n) {
    var r = Rs(n.position), i = Rs(this.props.position), o = Is(n.bounds), a = Is(this.props.bounds);
    (r !== i || o !== a) && this.overlayView.draw(), n.mapPaneName !== this.props.mapPaneName && this.updatePane();
  }, e.prototype.componentWillUnmount = function() {
    this.overlayView.setMap(null);
  }, e.prototype.render = function() {
    var n = this.state.paneEl;
    return n ? bc.createPortal(x.jsx("div", { ref: this.containerRef, style: this.state.containerStyle, children: _t.only(this.props.children) }), n) : null;
  }, e.FLOAT_PANE = "floatPane", e.MAP_PANE = "mapPane", e.MARKER_LAYER = "markerLayer", e.OVERLAY_LAYER = "overlayLayer", e.OVERLAY_MOUSE_TARGET = "overlayMouseTarget", e.contextType = xe, e;
})(qe);
function Ph() {
}
var js = {
  onDblClick: "dblclick",
  onClick: "click"
}, Ns = {
  opacity: function(t, e) {
    t.setOpacity(e);
  }
};
function Fh(t) {
  var e = t.url, n = t.bounds, r = t.options, i = t.visible, o = je(xe), a = new google.maps.LatLngBounds(new google.maps.LatLng(n.south, n.west), new google.maps.LatLng(n.north, n.east)), s = Gt(function() {
    var u = new google.maps.GroundOverlay(e, a, ve({}, r));
    return u;
  }, []);
  return B(function() {
    s !== null && s.setMap(o);
  }, [o]), B(function() {
    typeof e < "u" && s !== null && (s.set("url", e), s.setMap(o));
  }, [s, e]), B(function() {
    typeof i < "u" && s !== null && s.setOpacity(i ? 1 : 0);
  }, [s, i]), B(function() {
    var u = new google.maps.LatLngBounds(new google.maps.LatLng(n.south, n.west), new google.maps.LatLng(n.north, n.east));
    typeof n < "u" && s !== null && (s.set("bounds", u), s.setMap(o));
  }, [s, n]), null;
}
st(Fh);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      groundOverlay: null
    }, n.setGroundOverlayCallback = function() {
      n.state.groundOverlay !== null && n.props.onLoad && n.props.onLoad(n.state.groundOverlay);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    it(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
    var n = new google.maps.GroundOverlay(this.props.url, this.props.bounds, ve(ve({}, this.props.options), { map: this.context }));
    this.registeredEvents = Se({
      updaterMap: Ns,
      eventMap: js,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        groundOverlay: n
      };
    }, this.setGroundOverlayCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.groundOverlay !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Ns,
      eventMap: js,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.groundOverlay
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.groundOverlay && (this.props.onUnmount && this.props.onUnmount(this.state.groundOverlay), this.state.groundOverlay.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.defaultProps = {
    onLoad: Ph
  }, e.contextType = xe, e;
})(qe);
var _s = {}, $s = {
  data: function(t, e) {
    t.setData(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  }
};
function Mh(t) {
  var e = t.data, n = t.onLoad, r = t.onUnmount, i = t.options, o = je(xe), a = I(null), s = a[0], u = a[1];
  return B(function() {
    google.maps.visualization || it(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
  }, []), B(function() {
    it(!!e, "data property is required in HeatmapLayer %s", e);
  }, [e]), B(function() {
    s !== null && s.setMap(o);
  }, [o]), B(function() {
    i && s !== null && s.setOptions(i);
  }, [s, i]), B(function() {
    var l = new google.maps.visualization.HeatmapLayer(ve(ve({}, i || {}), { data: e, map: o }));
    return u(l), n && n(l), function() {
      s !== null && (r && r(s), s.setMap(null));
    };
  }, []), null;
}
st(Mh);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      heatmapLayer: null
    }, n.setHeatmapLayerCallback = function() {
      n.state.heatmapLayer !== null && n.props.onLoad && n.props.onLoad(n.state.heatmapLayer);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    it(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization), it(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
    var n = new google.maps.visualization.HeatmapLayer(ve(ve({}, this.props.options || {}), { data: this.props.data, map: this.context }));
    this.registeredEvents = Se({
      updaterMap: $s,
      eventMap: _s,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        heatmapLayer: n
      };
    }, this.setHeatmapLayerCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: $s,
      eventMap: _s,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  }, e.prototype.componentWillUnmount = function() {
    this.state.heatmapLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.heatmapLayer), Me(this.registeredEvents), this.state.heatmapLayer.setMap(null));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
var zs = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
}, Ws = {
  register: function(t, e, n) {
    t.registerPanoProvider(e, n);
  },
  links: function(t, e) {
    t.setLinks(e);
  },
  motionTracking: function(t, e) {
    t.setMotionTracking(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  pano: function(t, e) {
    t.setPano(e);
  },
  position: function(t, e) {
    t.setPosition(e);
  },
  pov: function(t, e) {
    t.setPov(e);
  },
  visible: function(t, e) {
    t.setVisible(e);
  },
  zoom: function(t, e) {
    t.setZoom(e);
  }
};
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      streetViewPanorama: null
    }, n.setStreetViewPanoramaCallback = function() {
      n.state.streetViewPanorama !== null && n.props.onLoad && n.props.onLoad(n.state.streetViewPanorama);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n, r, i = (r = (n = this.context) === null || n === void 0 ? void 0 : n.getStreetView()) !== null && r !== void 0 ? r : null;
    this.registeredEvents = Se({
      updaterMap: Ws,
      eventMap: zs,
      prevProps: {},
      nextProps: this.props,
      instance: i
    }), this.setState(function() {
      return {
        streetViewPanorama: i
      };
    }, this.setStreetViewPanoramaCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.streetViewPanorama !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Ws,
      eventMap: zs,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.streetViewPanorama
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.streetViewPanorama !== null && (this.props.onUnmount && this.props.onUnmount(this.state.streetViewPanorama), Me(this.registeredEvents), this.state.streetViewPanorama.setVisible(!1));
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      streetViewService: null
    }, n.setStreetViewServiceCallback = function() {
      n.state.streetViewService !== null && n.props.onLoad && n.props.onLoad(n.state.streetViewService);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.StreetViewService();
    this.setState(function() {
      return {
        streetViewService: n
      };
    }, this.setStreetViewServiceCallback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.streetViewService !== null && this.props.onUnmount && this.props.onUnmount(this.state.streetViewService);
  }, e.prototype.render = function() {
    return null;
  }, e.contextType = xe, e;
})(qe);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      directionsService: null
    }, n.setDirectionsServiceCallback = function() {
      n.state.directionsService !== null && n.props.onLoad && n.props.onLoad(n.state.directionsService);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    it(!!this.props.options, "DirectionsService expected options object as parameter, but got %s", this.props.options);
    var n = new google.maps.DirectionsService();
    this.setState(function() {
      return {
        directionsService: n
      };
    }, this.setDirectionsServiceCallback);
  }, e.prototype.componentDidUpdate = function() {
    this.state.directionsService !== null && this.state.directionsService.route(this.props.options, this.props.callback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.directionsService !== null && this.props.onUnmount && this.props.onUnmount(this.state.directionsService);
  }, e.prototype.render = function() {
    return null;
  }, e;
})(qe);
var Us = {
  onDirectionsChanged: "directions_changed"
}, Hs = {
  directions: function(t, e) {
    t.setDirections(e);
  },
  map: function(t, e) {
    t.setMap(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  panel: function(t, e) {
    t.setPanel(e);
  },
  routeIndex: function(t, e) {
    t.setRouteIndex(e);
  }
};
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.state = {
      directionsRenderer: null
    }, n.setDirectionsRendererCallback = function() {
      n.state.directionsRenderer !== null && (n.state.directionsRenderer.setMap(n.context), n.props.onLoad && n.props.onLoad(n.state.directionsRenderer));
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = Se({
      updaterMap: Hs,
      eventMap: Us,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(function() {
      return {
        directionsRenderer: n
      };
    }, this.setDirectionsRendererCallback);
  }, e.prototype.componentDidUpdate = function(n) {
    this.state.directionsRenderer !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Hs,
      eventMap: Us,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.directionsRenderer
    }));
  }, e.prototype.componentWillUnmount = function() {
    this.state.directionsRenderer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.directionsRenderer), Me(this.registeredEvents), this.state.directionsRenderer && this.state.directionsRenderer.setMap(null));
  }, e.prototype.render = function() {
    return x.jsx(x.Fragment, {});
  }, e.contextType = xe, e;
})(qe);
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.state = {
      distanceMatrixService: null
    }, n.setDistanceMatrixServiceCallback = function() {
      n.state.distanceMatrixService !== null && n.props.onLoad && n.props.onLoad(n.state.distanceMatrixService);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    it(!!this.props.options, "DistanceMatrixService expected options object as parameter, but go %s", this.props.options);
    var n = new google.maps.DistanceMatrixService();
    this.setState(function() {
      return {
        distanceMatrixService: n
      };
    }, this.setDistanceMatrixServiceCallback);
  }, e.prototype.componentDidUpdate = function() {
    this.state.distanceMatrixService !== null && this.state.distanceMatrixService.getDistanceMatrix(this.props.options, this.props.callback);
  }, e.prototype.componentWillUnmount = function() {
    this.state.distanceMatrixService !== null && this.props.onUnmount && this.props.onUnmount(this.state.distanceMatrixService);
  }, e.prototype.render = function() {
    return null;
  }, e;
})(qe);
var Vs = {
  onPlacesChanged: "places_changed"
}, qs = {
  bounds: function(t, e) {
    t.setBounds(e);
  }
}, kh = (
  /** @class */
  function(t) {
    Ve(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.registeredEvents = [], n.containerElement = Oi(), n.state = {
        searchBox: null
      }, n.setSearchBoxCallback = function() {
        n.state.searchBox !== null && n.props.onLoad && n.props.onLoad(n.state.searchBox);
      }, n;
    }
    return e.prototype.componentDidMount = function() {
      if (it(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places), this.containerElement !== null && this.containerElement.current !== null) {
        var n = this.containerElement.current.querySelector("input");
        if (n !== null) {
          var r = new google.maps.places.SearchBox(n, this.props.options);
          this.registeredEvents = Se({
            updaterMap: qs,
            eventMap: Vs,
            prevProps: {},
            nextProps: this.props,
            instance: r
          }), this.setState(function() {
            return {
              searchBox: r
            };
          }, this.setSearchBoxCallback);
        }
      }
    }, e.prototype.componentDidUpdate = function(n) {
      this.state.searchBox !== null && (Me(this.registeredEvents), this.registeredEvents = Se({
        updaterMap: qs,
        eventMap: Vs,
        prevProps: n,
        nextProps: this.props,
        instance: this.state.searchBox
      }));
    }, e.prototype.componentWillUnmount = function() {
      this.state.searchBox !== null && (this.props.onUnmount && this.props.onUnmount(this.state.searchBox), Me(this.registeredEvents));
    }, e.prototype.render = function() {
      return x.jsx("div", { ref: this.containerElement, children: _t.only(this.props.children) });
    }, e.contextType = xe, e;
  }(qe)
), Gs = {
  onPlaceChanged: "place_changed"
}, Zs = {
  bounds: function(t, e) {
    t.setBounds(e);
  },
  restrictions: function(t, e) {
    t.setComponentRestrictions(e);
  },
  fields: function(t, e) {
    t.setFields(e);
  },
  options: function(t, e) {
    t.setOptions(e);
  },
  types: function(t, e) {
    t.setTypes(e);
  }
};
(function(t) {
  Ve(e, t);
  function e() {
    var n = t !== null && t.apply(this, arguments) || this;
    return n.registeredEvents = [], n.containerElement = Oi(), n.state = {
      autocomplete: null
    }, n.setAutocompleteCallback = function() {
      n.state.autocomplete !== null && n.props.onLoad && n.props.onLoad(n.state.autocomplete);
    }, n;
  }
  return e.prototype.componentDidMount = function() {
    var n;
    it(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    var r = (n = this.containerElement.current) === null || n === void 0 ? void 0 : n.querySelector("input");
    if (r) {
      var i = new google.maps.places.Autocomplete(r, this.props.options);
      this.registeredEvents = Se({
        updaterMap: Zs,
        eventMap: Gs,
        prevProps: {},
        nextProps: this.props,
        instance: i
      }), this.setState(function() {
        return {
          autocomplete: i
        };
      }, this.setAutocompleteCallback);
    }
  }, e.prototype.componentDidUpdate = function(n) {
    Me(this.registeredEvents), this.registeredEvents = Se({
      updaterMap: Zs,
      eventMap: Gs,
      prevProps: n,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  }, e.prototype.componentWillUnmount = function() {
    this.state.autocomplete !== null && Me(this.registeredEvents);
  }, e.prototype.render = function() {
    return x.jsx("div", { ref: this.containerElement, className: this.props.className, children: _t.only(this.props.children) });
  }, e.defaultProps = {
    className: ""
  }, e.contextType = xe, e;
})(qe);
function pw({
  coordinates: t,
  zoom: e = 18,
  draggable: n = !1,
  className: r,
  ...i
}) {
  return t ? /* @__PURE__ */ x.jsx("div", { className: "arkynGoogleMapPinned " + r, ...i, children: /* @__PURE__ */ x.jsx(
    Lp,
    {
      zoom: e,
      center: t,
      mapContainerStyle: {
        borderRadius: "var(--rounded-cards)",
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ x.jsx(jp, { draggable: n, position: t })
    }
  ) }) : /* @__PURE__ */ x.jsx("div", { className: "arkynGoogleMapPinnedEmpty " + r, ...i, children: /* @__PURE__ */ x.jsx(Vd, {}) });
}
function hw(t) {
  const { className: e, ...n } = t, r = `arkynSkeleton ${e}`;
  return /* @__PURE__ */ x.jsx("aside", { className: r.trim(), ...n });
}
function vw(t) {
  const {
    emptyMessage: e = "Nenhum dado adicionado.",
    className: n,
    children: r,
    ...i
  } = t, o = `arkynTableBody ${n}`, a = _t.count(r) === 0;
  return /* @__PURE__ */ x.jsx("tbody", { className: o.trim(), ...i, children: a ? /* @__PURE__ */ x.jsx("tr", { className: "arkynTableBodyEmptyLine", children: /* @__PURE__ */ x.jsx("td", { colSpan: 100, children: /* @__PURE__ */ x.jsx("div", { children: e }) }) }) : r });
}
function gw(t) {
  const { className: e, children: n, ...r } = t, i = `arkynTableCaption ${e}`;
  return /* @__PURE__ */ x.jsx("caption", { className: i.trim(), ...r, children: /* @__PURE__ */ x.jsx("div", { className: "arkynTableCaptionContent", children: n }) });
}
function mw(t) {
  const { children: e, className: n, ...r } = t, i = `arkynTableContainer ${n}`;
  return /* @__PURE__ */ x.jsx("div", { className: i.trim(), ...r, children: /* @__PURE__ */ x.jsx("table", { children: e }) });
}
function yw(t) {
  const { className: e, children: n, ...r } = t, i = `arkynTableFooter ${e}`;
  return /* @__PURE__ */ x.jsxs("tfoot", { className: i.trim(), ...r, children: [
    /* @__PURE__ */ x.jsx("tr", { className: "spacingRow" }),
    /* @__PURE__ */ x.jsx("tr", { children: /* @__PURE__ */ x.jsx("th", { colSpan: 100, children: /* @__PURE__ */ x.jsx("div", { className: "arkynTableFooterContent", children: n }) }) })
  ] });
}
function Cw(t) {
  const { className: e, children: n, ...r } = t, i = `arkynTableHeader ${e}`;
  return /* @__PURE__ */ x.jsxs("thead", { className: i.trim(), ...r, children: [
    /* @__PURE__ */ x.jsx("tr", { children: n }),
    /* @__PURE__ */ x.jsx("tr", { className: "spacingRow" })
  ] });
}
function Dw(t) {
  const {
    isLoading: e = !1,
    scheme: n = "primary",
    variant: r = "solid",
    loadingText: i,
    size: o = "md",
    leftIcon: a,
    rightIcon: s,
    disabled: u,
    className: l = "",
    children: c,
    ...d
  } = t, v = { xs: 12, sm: 16, md: 20, lg: 24 }[o], f = `arkynButton ${e ? "loadingTrue" : "loadingFalse"} ${r} ${n} ${o} ${i ? "loadingTextTrue" : "loadingTextFalse"} ${l}`;
  return /* @__PURE__ */ x.jsxs("button", { className: f, disabled: u || e, ...d, children: [
    /* @__PURE__ */ x.jsxs("div", { className: "arkynButtonSpinner", children: [
      /* @__PURE__ */ x.jsx(kn, { size: v, strokeWidth: 2.5 }),
      i && i
    ] }),
    /* @__PURE__ */ x.jsxs("div", { className: "arkynButtonContent", children: [
      mi(v, a),
      c,
      mi(v, s)
    ] })
  ] });
}
const $c = ct({});
function bw(t) {
  var d, p;
  const e = wc(), {
    children: n,
    className: r,
    id: i,
    ...o
  } = t, a = Ue(null), s = ((d = a.current) == null ? void 0 : d.name) || "", u = ((p = e == null ? void 0 : e.fieldErrors) == null ? void 0 : p[s]) || null, l = $d(), c = `arkynFormController ${r}`;
  return /* @__PURE__ */ x.jsx($c.Provider, { value: { error: u, id: l, inputRef: a }, children: /* @__PURE__ */ x.jsx(
    "section",
    {
      id: i || s || void 0,
      className: c.trim(),
      ...o,
      children: n
    }
  ) });
}
function Lt() {
  return je($c);
}
function Ew(t) {
  const {
    name: e,
    className: n = "",
    size: r = "md",
    isError: i,
    defaultChecked: o = !1,
    checked: a = null,
    onCheck: s,
    value: u,
    ...l
  } = t, { id: c, inputRef: d, error: p } = Lt(), v = i || !!p, [m, h] = I(o || !1), f = typeof a == "boolean" ? a : m, b = `arkynCheckbox ${r} ${v ? "errorTrue" : "errorFalse"} ${f ? "checkedTrue" : "checkedFalse"} ${n}`;
  function S() {
    const D = m;
    h(!D), s && s(D ? "" : u || "checked");
  }
  return /* @__PURE__ */ x.jsxs(
    "button",
    {
      id: c,
      type: "button",
      className: b,
      onClick: S,
      ...l,
      children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "hidden",
            name: e,
            ref: d,
            value: f ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ x.jsx(Cc, {})
      ]
    }
  );
}
function ww(t) {
  const { children: e, className: n, ...r } = t, i = `arkynFormError ${n}`, { error: o } = Lt();
  return e ? /* @__PURE__ */ x.jsx("strong", { className: i.trim(), ...r, children: e }) : o ? /* @__PURE__ */ x.jsx("strong", { className: i.trim(), ...r, children: o }) : /* @__PURE__ */ x.jsx(x.Fragment, {});
}
function Bw(t) {
  const {
    showAsterisk: e = !1,
    className: n = "",
    ...r
  } = t, { id: i } = Lt(), a = `arkynFormLabel ${e ? "asteriskTrue" : "asteriskFalse"} ${n}`;
  return /* @__PURE__ */ x.jsx("label", { className: a.trim(), htmlFor: i, ...r });
}
function cn(t, e, n) {
  if (!t) return /* @__PURE__ */ x.jsx(x.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ x.jsx("p", { className: n, children: t });
  const r = t;
  return /* @__PURE__ */ x.jsx("p", { className: n, children: /* @__PURE__ */ x.jsx(r, { color: "var(--secondary-600)", size: e, strokeWidth: 2.5 }) });
}
function da(t) {
  return t && t.replace(/[^0-9]/g, "");
}
function zc(t, e) {
  let n = "", r = 0;
  return Array.from(t).forEach((i, o) => {
    e[o + r].match(/[0-9]/) || (n += e[o + r], r++), n += i;
  }), n;
}
function Wc(t) {
  return t.length > 11 ? "CNPJ" : "CPF";
}
const pa = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Uc = da(pa.CNPJ).length;
function Th(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: o = "",
    variant: a = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    defaultValue: p,
    readOnly: v,
    onFocus: m,
    onBlur: h,
    title: f,
    style: C,
    onChange: w,
    ...b
  } = t;
  function S(T) {
    let N = da(T);
    const K = Wc(N);
    if (!(N.length > Uc))
      return N = zc(N, pa[K]), N;
  }
  const D = c ? "right" : "left", $ = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${a} ${i} ${d || v || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${o}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: $,
    prefix: cn(s, j, "prefix"),
    sufix: cn(u, j, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    defaultValue: S(p || ""),
    disabled: d,
    readOnly: v,
    onFocus: m,
    onBlur: h,
    title: f,
    style: C,
    onChange: w,
    loadingPosition: D,
    iconSize: j,
    Spinner: /* @__PURE__ */ x.jsx(kn, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...b
  };
}
function Rh(t) {
  const [e, n] = I(!1), r = Ue(null), { inputRef: i, id: o, error: a } = Lt(), s = i || r, u = t.isError || !!a, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: v,
    sufix: m,
    iconSize: h,
    loadingPosition: f,
    isLoading: C,
    LeftIcon: w,
    readOnly: b,
    onFocus: S,
    onBlur: D,
    RightIcon: E,
    Spinner: L,
    onChange: F,
    value: H,
    defaultValue: P,
    ...$
  } = Th({ ...t, id: o, isError: u }, e), [R, j] = I(P), T = w && !C, N = E && !C, K = f === "left" && C, _ = f === "right" && C;
  function oe() {
    l || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function ie(J) {
    let q = da(J.target.value);
    const te = Wc(q);
    q.length > Uc || (q = zc(q, pa[te]), J.target.value = q, j(q), F && F(J));
  }
  function k(J) {
    n(!0), S && S(J);
  }
  function U(J) {
    n(!1), D && D(J);
  }
  return /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: c,
      style: d,
      onClick: oe,
      className: p,
      children: [
        v,
        K && L,
        T && /* @__PURE__ */ x.jsx(w, { size: h, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            disabled: l || C,
            readOnly: b,
            ref: s,
            value: H || R,
            onFocus: k,
            onChange: ie,
            onBlur: U,
            ...$
          }
        ),
        N && /* @__PURE__ */ x.jsx(E, { size: h, strokeWidth: 2.5 }),
        _ && L,
        m
      ]
    }
  );
}
const Ih = 3, jh = (t = "pt-BR", e, n = "BRL", r = !0) => new Intl.NumberFormat(t, {
  style: "currency",
  currency: n,
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(e).slice(r ? Ih : 0), Wr = 2, Ys = (t) => typeof t == "number" ? t : Number(t.toString().replace(/[^0-9-]/g, "")), Ro = (t) => {
  let e = t;
  return typeof t == "string" ? (e = Ys(t), e % 1 !== 0 && (e = e.toFixed(Wr))) : e = Number.isInteger(t) ? Number(t) * 10 ** Wr : t.toFixed(Wr), Ys(e) / 10 ** Wr;
}, Ks = (t, e, n) => {
  if (!e) return [0, ""];
  const r = Ro(e), i = jh(t, r, n);
  return [r, i];
};
function Nh(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: o = "",
    variant: a = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: v,
    onBlur: m,
    title: h,
    style: f,
    // showCents = false,
    max: C = 1e9,
    locale: w = "pt-BR",
    currency: b = "BRL",
    ...S
  } = t, D = c ? "right" : "left", $ = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${a} ${i} ${d || p || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${o}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: $,
    prefix: cn(s, j, "prefix"),
    sufix: cn(u, j, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: d,
    locale: w,
    currency: b,
    readOnly: p,
    onFocus: v,
    onBlur: m,
    title: h,
    style: f,
    max: C,
    // showCents,
    loadingPosition: D,
    iconSize: j,
    Spinner: /* @__PURE__ */ x.jsx(kn, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...S
  };
}
function _h(t) {
  const [e, n] = I(!1), [r, i] = I("0"), o = Ue(null), { inputRef: a, id: s, error: u } = Lt(), l = a || o, c = t.isError || !!u, {
    disabled: d,
    title: p,
    style: v,
    className: m,
    prefix: h,
    sufix: f,
    iconSize: C,
    loadingPosition: w,
    isLoading: b,
    LeftIcon: S,
    readOnly: D,
    onFocus: E,
    onBlur: L,
    RightIcon: F,
    Spinner: H,
    value: P,
    max: $,
    onChangeValue: R,
    onKeyPress: j,
    currency: T,
    locale: N,
    name: K,
    defaultValue: _,
    ...oe
  } = Nh({ ...t, id: s, isError: c }, e), ie = S && !b, k = F && !b, U = w === "left" && b, J = w === "right" && b;
  function q() {
    d || !(l != null && l.current) || (n(!0), l.current.focus());
  }
  function te(M) {
    n(!0), E && E(M);
  }
  function Y(M) {
    n(!1), L && L(M);
  }
  const y = (M) => {
    const [X, ne] = Ks(
      N,
      M,
      T
    );
    return !$ || X <= $ ? (i(ne), [X, ne]) : [Ro(r), r];
  }, z = (M) => {
    M.preventDefault();
    const [X, ne] = y(M.target.value);
    R(M, String(X), String(ne));
  }, W = (M) => j && j(M, M.key, M.key);
  return B(() => {
    const M = P || +_ || void 0, [, X] = Ks(N, M, T);
    i(X);
  }, [T, _, P]), /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: p,
      style: v,
      onClick: q,
      className: m,
      children: [
        h,
        U && H,
        ie && /* @__PURE__ */ x.jsx(S, { size: C, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            value: r,
            onChange: z,
            onBlur: Y,
            onFocus: te,
            onKeyUp: W,
            disabled: d || b,
            readOnly: D,
            ...oe
          }
        ),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            type: "hidden",
            ref: l,
            name: K,
            value: Ro(r)
          }
        ),
        J && H,
        k && /* @__PURE__ */ x.jsx(F, { size: C, strokeWidth: 2.5 }),
        f
      ]
    }
  );
}
function $h(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: o = "",
    variant: a = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: v,
    onBlur: m,
    title: h,
    style: f,
    onChange: C,
    showMask: w = !1,
    type: b,
    ...S
  } = t, D = c ? "right" : "left", $ = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${a} ${i} ${d || p || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${o}`, j = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: $,
    prefix: cn(s, j, "prefix"),
    sufix: cn(u, j, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: v,
    onBlur: m,
    title: h,
    style: f,
    onChange: C,
    loadingPosition: D,
    iconSize: j,
    showMask: w,
    Spinner: /* @__PURE__ */ x.jsx(kn, { className: "spinner", size: j, strokeWidth: 2.5 }),
    ...S
  };
}
const zh = sa((t, e) => /* @__PURE__ */ x.jsx("input", { ref: e, ...t }));
function Wh(t) {
  const [e, n] = I(!1), r = Ue(null), { inputRef: i, id: o, error: a } = Lt(), s = i || r, u = t.isError || !!a, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: v,
    sufix: m,
    iconSize: h,
    loadingPosition: f,
    isLoading: C,
    LeftIcon: w,
    readOnly: b,
    onFocus: S,
    onBlur: D,
    RightIcon: E,
    Spinner: L,
    ...F
  } = $h({ ...t, id: o, isError: u }, e), H = w && !C, P = E && !C, $ = f === "left" && C, R = f === "right" && C;
  function j() {
    l || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function T(K) {
    n(!0), S && S(K);
  }
  function N(K) {
    n(!1), D && D(K);
  }
  return /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: c,
      style: d,
      onClick: j,
      className: p,
      children: [
        v,
        $ && L,
        H && /* @__PURE__ */ x.jsx(w, { size: h, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          sp,
          {
            component: zh,
            ref: s,
            onFocus: T,
            onBlur: N,
            disabled: l,
            ...F
          }
        ),
        P && /* @__PURE__ */ x.jsx(E, { size: h, strokeWidth: 2.5 }),
        R && L,
        m
      ]
    }
  );
}
function Uh(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: o = "",
    variant: a = "solid",
    prefix: s,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: v,
    onBlur: m,
    title: h,
    style: f,
    onChange: C,
    ...w
  } = t, b = c ? "right" : "left", H = `arkyn_input ${s ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${a} ${i} ${d || p || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${o}`, $ = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: H,
    prefix: cn(s, $, "prefix"),
    sufix: cn(u, $, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: v,
    onBlur: m,
    title: h,
    style: f,
    onChange: C,
    loadingPosition: b,
    iconSize: $,
    Spinner: /* @__PURE__ */ x.jsx(kn, { className: "spinner", size: $, strokeWidth: 2.5 }),
    ...w
  };
}
function Hh(t) {
  const [e, n] = I(!1), r = Ue(null), { inputRef: i, id: o, error: a } = Lt(), s = i || r, u = t.isError || !!a, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: v,
    sufix: m,
    iconSize: h,
    loadingPosition: f,
    isLoading: C,
    LeftIcon: w,
    readOnly: b,
    onFocus: S,
    onBlur: D,
    RightIcon: E,
    type: L,
    Spinner: F,
    ...H
  } = Uh({ ...t, id: o, isError: u }, e), P = w && !C, $ = E && !C, R = f === "left" && C, j = f === "right" && C;
  function T() {
    l || !(s != null && s.current) || (n(!0), s.current.focus());
  }
  function N(_) {
    n(!0), S && S(_);
  }
  function K(_) {
    n(!1), D && D(_);
  }
  return L === "hidden" ? /* @__PURE__ */ x.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: s,
      ...H
    }
  ) : /* @__PURE__ */ x.jsxs(
    "section",
    {
      title: c,
      style: d,
      onClick: T,
      className: p,
      children: [
        v,
        R && F,
        P && /* @__PURE__ */ x.jsx(w, { size: h, strokeWidth: 2.5 }),
        /* @__PURE__ */ x.jsx(
          "input",
          {
            disabled: l || C,
            readOnly: b,
            ref: s,
            onFocus: N,
            onBlur: K,
            type: L,
            ...H
          }
        ),
        $ && /* @__PURE__ */ x.jsx(E, { size: h, strokeWidth: 2.5 }),
        j && F,
        m
      ]
    }
  );
}
function Vh(t) {
  return t.type === "currency" ? /* @__PURE__ */ x.jsx(_h, { ...t }) : t.type === "masked" ? /* @__PURE__ */ x.jsx(Wh, { ...t }) : t.type === "cpf-cnpj" ? /* @__PURE__ */ x.jsx(Rh, { ...t }) : /* @__PURE__ */ x.jsx(Hh, { ...t });
}
function xw({
  onChange: t,
  onPlaceChanged: e,
  options: n,
  ...r
}) {
  const [i, o] = I(null), a = (u) => o(u), s = () => {
    var v, m, h, f;
    const l = i.getPlaces()[0], c = l == null ? void 0 : l.address_components;
    function d(C) {
      const w = c.find((b) => b.types[0] === C);
      return w ? w.long_name : "";
    }
    function p(C) {
      const w = c.find((b) => b.types[0] === C);
      return w ? w.short_name : "";
    }
    if (l) {
      const C = d("route"), w = d("street_number"), b = d("sublocality_level_1"), S = d("administrative_area_level_2"), D = d("administrative_area_level_1"), E = p("administrative_area_level_1"), L = d("postal_code"), F = (m = (v = l.geometry) == null ? void 0 : v.location) == null ? void 0 : m.lat(), H = (f = (h = l.geometry) == null ? void 0 : h.location) == null ? void 0 : f.lng();
      e && e({
        street: C,
        city: S,
        state: D,
        district: b,
        cep: L,
        streetNumber: w,
        stateShortName: E,
        coordinates: { lat: F, lng: H }
      });
    }
  };
  return /* @__PURE__ */ x.jsx(
    kh,
    {
      onLoad: a,
      onPlacesChanged: s,
      options: n,
      children: /* @__PURE__ */ x.jsx(Vh, { type: "text", onChange: (u) => t(u.target.value), ...r })
    }
  );
}
function Aw(t) {
  const {
    isLoading: e = !1,
    scheme: n = "primary",
    variant: r = "solid",
    size: i = "md",
    icon: o,
    disabled: a,
    className: s = "",
    ...u
  } = t, l = { xs: 12, sm: 16, md: 20, lg: 24 }, d = `arkynIconButton ${r} ${n} ${i} ${e ? "loadingTrue" : "loadingFalse"} ${s}`;
  return /* @__PURE__ */ x.jsxs(
    "button",
    {
      disabled: a || e,
      className: d.trim(),
      ...u,
      children: [
        /* @__PURE__ */ x.jsx("div", { className: "arkynIconButtonSpinner", children: /* @__PURE__ */ x.jsx(kn, { size: l[i], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ x.jsx("div", { className: "arkynIconButtonContent", children: /* @__PURE__ */ x.jsx(o, { size: l[i], strokeWidth: 2.5 }) })
      ]
    }
  );
}
const Hc = ct({});
function qh() {
  return je(Hc);
}
function Lw(t) {
  const {
    defaultValue: e,
    name: n,
    value: r,
    onChange: i,
    size: o = "md",
    className: a = "",
    ...s
  } = t, [u, l] = I(e || ""), { inputRef: c, id: d } = Lt();
  function p(m) {
    l(m), i && i(m);
  }
  const v = `arkynRadioGroup ${o} ${a}`;
  return /* @__PURE__ */ x.jsxs(
    Hc.Provider,
    {
      value: { onChange: p, value: r || u, size: o },
      children: [
        /* @__PURE__ */ x.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: d,
            readOnly: !0,
            name: n,
            ref: c,
            value: r || u
          }
        ),
        /* @__PURE__ */ x.jsx("div", { className: v.trim(), ...s })
      ]
    }
  );
}
function Ow(t) {
  const {
    value: e,
    size: n,
    disabled: r,
    children: i,
    className: o = "",
    ...a
  } = t, { onChange: s, size: u, value: l } = qh(), { error: c } = Lt(), h = `arkynRadioBox ${n || u} ${l === e ? "checkedTrue" : "checkedFalse"} ${c ? "errorTrue" : "errorFalse"} ${r ? "disabledTrue" : "disabledFalse"} ${o}`;
  return /* @__PURE__ */ x.jsxs("label", { className: h.trim(), children: [
    /* @__PURE__ */ x.jsx(
      "button",
      {
        type: "button",
        disabled: r,
        onClick: () => s(e),
        onFocus: () => s(e),
        ...a
      }
    ),
    i
  ] });
}
var Kt = {};
Object.defineProperty(Kt, "__esModule", {
  value: !0
});
var Gh = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), no = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, Vc = {
  add: "+",
  break: "pause",
  cmd: "meta",
  command: "meta",
  ctl: "control",
  ctrl: "control",
  del: "delete",
  down: "arrowdown",
  esc: "escape",
  ins: "insert",
  left: "arrowleft",
  mod: Gh ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, ha = {
  backspace: 8,
  tab: 9,
  enter: 13,
  shift: 16,
  control: 17,
  alt: 18,
  pause: 19,
  capslock: 20,
  escape: 27,
  " ": 32,
  pageup: 33,
  pagedown: 34,
  end: 35,
  home: 36,
  arrowleft: 37,
  arrowup: 38,
  arrowright: 39,
  arrowdown: 40,
  insert: 45,
  delete: 46,
  meta: 91,
  numlock: 144,
  scrolllock: 145,
  ";": 186,
  "=": 187,
  ",": 188,
  "-": 189,
  ".": 190,
  "/": 191,
  "`": 192,
  "[": 219,
  "\\": 220,
  "]": 221,
  "'": 222
};
for (var Ur = 1; Ur < 20; Ur++)
  ha["f" + Ur] = 111 + Ur;
function Fi(t, e, n) {
  e && !("byKey" in e) && (n = e, e = null), Array.isArray(t) || (t = [t]);
  var r = t.map(function(a) {
    return qc(a, e);
  }), i = function(s) {
    return r.some(function(u) {
      return Gc(u, s);
    });
  }, o = n == null ? i : i(n);
  return o;
}
function Zh(t, e) {
  return Fi(t, e);
}
function Yh(t, e) {
  return Fi(t, { byKey: !0 }, e);
}
function qc(t, e) {
  var n = e && e.byKey, r = {};
  t = t.replace("++", "+add");
  var i = t.split("+"), o = i.length;
  for (var a in no)
    r[no[a]] = !1;
  var s = !0, u = !1, l = void 0;
  try {
    for (var c = i[Symbol.iterator](), d; !(s = (d = c.next()).done); s = !0) {
      var p = d.value, v = p.endsWith("?") && p.length > 1;
      v && (p = p.slice(0, -1));
      var m = va(p), h = no[m];
      if (p.length > 1 && !h && !Vc[p] && !ha[m])
        throw new TypeError('Unknown modifier: "' + p + '"');
      (o === 1 || !h) && (n ? r.key = m : r.which = Zc(p)), h && (r[h] = v ? null : !0);
    }
  } catch (f) {
    u = !0, l = f;
  } finally {
    try {
      !s && c.return && c.return();
    } finally {
      if (u)
        throw l;
    }
  }
  return r;
}
function Gc(t, e) {
  for (var n in t) {
    var r = t[n], i = void 0;
    if (r != null && (n === "key" && e.key != null ? i = e.key.toLowerCase() : n === "which" ? i = r === 91 && e.which === 93 ? 91 : e.which : i = e[n], !(i == null && r === !1) && i !== r))
      return !1;
  }
  return !0;
}
function Zc(t) {
  t = va(t);
  var e = ha[t] || t.toUpperCase().charCodeAt(0);
  return e;
}
function va(t) {
  return t = t.toLowerCase(), t = Vc[t] || t, t;
}
var Kh = Kt.default = Fi, ro = Kt.isHotkey = Fi;
Kt.isCodeHotkey = Zh;
Kt.isKeyHotkey = Yh;
Kt.parseHotkey = qc;
Kt.compareHotkey = Gc;
Kt.toKeyCode = Zc;
Kt.toKeyName = va;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Xs(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ht(t) {
  var e, n;
  return Xs(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (n = e.prototype, !(Xs(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
var Yc = Symbol.for("immer-nothing"), Js = Symbol.for("immer-draftable"), xt = Symbol.for("immer-state"), Xh = process.env.NODE_ENV !== "production" ? [
  // All error codes, starting by 0:
  function(t) {
    return `The plugin for '${t}' has not been loaded into Immer. To enable the plugin, import and call \`enable${t}()\` when initializing your application.`;
  },
  function(t) {
    return `produce can only be called on things that are draftable: plain objects, arrays, Map, Set or classes that are marked with '[immerable]: true'. Got '${t}'`;
  },
  "This object has been frozen and should not be mutated",
  function(t) {
    return "Cannot use a proxy that has been revoked. Did you pass an object from inside an immer function to an async process? " + t;
  },
  "An immer producer returned a new value *and* modified its draft. Either return a new value *or* modify the draft.",
  "Immer forbids circular references",
  "The first or second argument to `produce` must be a function",
  "The third argument to `produce` must be a function or undefined",
  "First argument to `createDraft` must be a plain object, an array, or an immerable object",
  "First argument to `finishDraft` must be a draft returned by `createDraft`",
  function(t) {
    return `'current' expects a draft, got: ${t}`;
  },
  "Object.defineProperty() cannot be used on an Immer draft",
  "Object.setPrototypeOf() cannot be used on an Immer draft",
  "Immer only supports deleting array indices",
  "Immer only supports setting array indices and the 'length' property",
  function(t) {
    return `'original' expects a draft, got: ${t}`;
  }
  // Note: if more errors are added, the errorOffset in Patches.ts should be increased
  // See Patches.ts for additional errors
] : [];
function bt(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const n = Xh[t], r = typeof n == "function" ? n.apply(null, e) : n;
    throw new Error(`[Immer] ${r}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var Zn = Object.getPrototypeOf;
function Pn(t) {
  return !!t && !!t[xt];
}
function Fn(t) {
  var e;
  return t ? Kc(t) || Array.isArray(t) || !!t[Js] || !!((e = t.constructor) != null && e[Js]) || ki(t) || Ti(t) : !1;
}
var Jh = Object.prototype.constructor.toString();
function Kc(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = Zn(t);
  if (e === null)
    return !0;
  const n = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return n === Object ? !0 : typeof n == "function" && Function.toString.call(n) === Jh;
}
function Ci(t, e) {
  Mi(t) === 0 ? Reflect.ownKeys(t).forEach((n) => {
    e(n, t[n], t);
  }) : t.forEach((n, r) => e(r, n, t));
}
function Mi(t) {
  const e = t[xt];
  return e ? e.type_ : Array.isArray(t) ? 1 : ki(t) ? 2 : Ti(t) ? 3 : 0;
}
function Io(t, e) {
  return Mi(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function Xc(t, e, n) {
  const r = Mi(t);
  r === 2 ? t.set(e, n) : r === 3 ? t.add(n) : t[e] = n;
}
function Qh(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function ki(t) {
  return t instanceof Map;
}
function Ti(t) {
  return t instanceof Set;
}
function bn(t) {
  return t.copy_ || t.base_;
}
function jo(t, e) {
  if (ki(t))
    return new Map(t);
  if (Ti(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const n = Kc(t);
  if (e === !0 || e === "class_only" && !n) {
    const r = Object.getOwnPropertyDescriptors(t);
    delete r[xt];
    let i = Reflect.ownKeys(r);
    for (let o = 0; o < i.length; o++) {
      const a = i[o], s = r[a];
      s.writable === !1 && (s.writable = !0, s.configurable = !0), (s.get || s.set) && (r[a] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: s.enumerable,
        value: t[a]
      });
    }
    return Object.create(Zn(t), r);
  } else {
    const r = Zn(t);
    if (r !== null && n)
      return { ...t };
    const i = Object.create(r);
    return Object.assign(i, t);
  }
}
function ga(t, e = !1) {
  return Ri(t) || Pn(t) || !Fn(t) || (Mi(t) > 1 && (t.set = t.add = t.clear = t.delete = ev), Object.freeze(t), e && Object.entries(t).forEach(([n, r]) => ga(r, !0))), t;
}
function ev() {
  bt(2);
}
function Ri(t) {
  return Object.isFrozen(t);
}
var tv = {};
function Mn(t) {
  const e = tv[t];
  return e || bt(0, t), e;
}
var br;
function Jc() {
  return br;
}
function nv(t, e) {
  return {
    drafts_: [],
    parent_: t,
    immer_: e,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: !0,
    unfinalizedDrafts_: 0
  };
}
function Qs(t, e) {
  e && (Mn("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function No(t) {
  _o(t), t.drafts_.forEach(rv), t.drafts_ = null;
}
function _o(t) {
  t === br && (br = t.parent_);
}
function eu(t) {
  return br = nv(br, t);
}
function rv(t) {
  const e = t[xt];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function tu(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const n = e.drafts_[0];
  return t !== void 0 && t !== n ? (n[xt].modified_ && (No(e), bt(4)), Fn(t) && (t = Di(e, t), e.parent_ || bi(e, t)), e.patches_ && Mn("Patches").generateReplacementPatches_(
    n[xt].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = Di(e, n, []), No(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== Yc ? t : void 0;
}
function Di(t, e, n) {
  if (Ri(e))
    return e;
  const r = e[xt];
  if (!r)
    return Ci(
      e,
      (i, o) => nu(t, r, e, i, o, n)
    ), e;
  if (r.scope_ !== t)
    return e;
  if (!r.modified_)
    return bi(t, r.base_, !0), r.base_;
  if (!r.finalized_) {
    r.finalized_ = !0, r.scope_.unfinalizedDrafts_--;
    const i = r.copy_;
    let o = i, a = !1;
    r.type_ === 3 && (o = new Set(i), i.clear(), a = !0), Ci(
      o,
      (s, u) => nu(t, r, i, s, u, n, a)
    ), bi(t, i, !1), n && t.patches_ && Mn("Patches").generatePatches_(
      r,
      n,
      t.patches_,
      t.inversePatches_
    );
  }
  return r.copy_;
}
function nu(t, e, n, r, i, o, a) {
  if (process.env.NODE_ENV !== "production" && i === n && bt(5), Pn(i)) {
    const s = o && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !Io(e.assigned_, r) ? o.concat(r) : void 0, u = Di(t, i, s);
    if (Xc(n, r, u), Pn(u))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else a && n.add(i);
  if (Fn(i) && !Ri(i)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    Di(t, i), (!e || !e.scope_.parent_) && typeof r != "symbol" && Object.prototype.propertyIsEnumerable.call(n, r) && bi(t, i);
  }
}
function bi(t, e, n = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && ga(e, n);
}
function iv(t, e) {
  const n = Array.isArray(t), r = {
    type_: n ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : Jc(),
    // True for both shallow and deep changes.
    modified_: !1,
    // Used during finalization.
    finalized_: !1,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: e,
    // The base state.
    base_: t,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: !1
  };
  let i = r, o = ma;
  n && (i = [r], o = Er);
  const { revoke: a, proxy: s } = Proxy.revocable(i, o);
  return r.draft_ = s, r.revoke_ = a, s;
}
var ma = {
  get(t, e) {
    if (e === xt)
      return t;
    const n = bn(t);
    if (!Io(n, e))
      return ov(t, n, e);
    const r = n[e];
    return t.finalized_ || !Fn(r) ? r : r === io(t.base_, e) ? (oo(t), t.copy_[e] = zo(r, t)) : r;
  },
  has(t, e) {
    return e in bn(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(bn(t));
  },
  set(t, e, n) {
    const r = Qc(bn(t), e);
    if (r != null && r.set)
      return r.set.call(t.draft_, n), !0;
    if (!t.modified_) {
      const i = io(bn(t), e), o = i == null ? void 0 : i[xt];
      if (o && o.base_ === n)
        return t.copy_[e] = n, t.assigned_[e] = !1, !0;
      if (Qh(n, i) && (n !== void 0 || Io(t.base_, e)))
        return !0;
      oo(t), $o(t);
    }
    return t.copy_[e] === n && // special case: handle new props with value 'undefined'
    (n !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(n) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = n, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return io(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, oo(t), $o(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const n = bn(t), r = Reflect.getOwnPropertyDescriptor(n, e);
    return r && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: r.enumerable,
      value: n[e]
    };
  },
  defineProperty() {
    bt(11);
  },
  getPrototypeOf(t) {
    return Zn(t.base_);
  },
  setPrototypeOf() {
    bt(12);
  }
}, Er = {};
Ci(ma, (t, e) => {
  Er[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Er.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && bt(13), Er.set.call(this, t, e, void 0);
};
Er.set = function(t, e, n) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && bt(14), ma.set.call(this, t[0], e, n, t[0]);
};
function io(t, e) {
  const n = t[xt];
  return (n ? bn(n) : t)[e];
}
function ov(t, e, n) {
  var i;
  const r = Qc(e, n);
  return r ? "value" in r ? r.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (i = r.get) == null ? void 0 : i.call(t.draft_)
  ) : void 0;
}
function Qc(t, e) {
  if (!(e in t))
    return;
  let n = Zn(t);
  for (; n; ) {
    const r = Object.getOwnPropertyDescriptor(n, e);
    if (r)
      return r;
    n = Zn(n);
  }
}
function $o(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && $o(t.parent_));
}
function oo(t) {
  t.copy_ || (t.copy_ = jo(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var av = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, n, r) => {
      if (typeof e == "function" && typeof n != "function") {
        const o = n;
        n = e;
        const a = this;
        return function(u = o, ...l) {
          return a.produce(u, (c) => n.call(this, c, ...l));
        };
      }
      typeof n != "function" && bt(6), r !== void 0 && typeof r != "function" && bt(7);
      let i;
      if (Fn(e)) {
        const o = eu(this), a = zo(e, void 0);
        let s = !0;
        try {
          i = n(a), s = !1;
        } finally {
          s ? No(o) : _o(o);
        }
        return Qs(o, r), tu(i, o);
      } else if (!e || typeof e != "object") {
        if (i = n(e), i === void 0 && (i = e), i === Yc && (i = void 0), this.autoFreeze_ && ga(i, !0), r) {
          const o = [], a = [];
          Mn("Patches").generateReplacementPatches_(e, i, o, a), r(o, a);
        }
        return i;
      } else
        bt(1, e);
    }, this.produceWithPatches = (e, n) => {
      if (typeof e == "function")
        return (a, ...s) => this.produceWithPatches(a, (u) => e(u, ...s));
      let r, i;
      return [this.produce(e, n, (a, s) => {
        r = a, i = s;
      }), r, i];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Fn(t) || bt(8), Pn(t) && (t = sv(t));
    const e = eu(this), n = zo(t, void 0);
    return n[xt].isManual_ = !0, _o(e), n;
  }
  finishDraft(t, e) {
    const n = t && t[xt];
    (!n || !n.isManual_) && bt(9);
    const { scope_: r } = n;
    return Qs(r, e), tu(void 0, r);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(t) {
    this.autoFreeze_ = t;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(t) {
    this.useStrictShallowCopy_ = t;
  }
  applyPatches(t, e) {
    let n;
    for (n = e.length - 1; n >= 0; n--) {
      const i = e[n];
      if (i.path.length === 0 && i.op === "replace") {
        t = i.value;
        break;
      }
    }
    n > -1 && (e = e.slice(n + 1));
    const r = Mn("Patches").applyPatches_;
    return Pn(t) ? r(t, e) : this.produce(
      t,
      (i) => r(i, e)
    );
  }
};
function zo(t, e) {
  const n = ki(t) ? Mn("MapSet").proxyMap_(t, e) : Ti(t) ? Mn("MapSet").proxySet_(t, e) : iv(t, e);
  return (e ? e.scope_ : Jc()).drafts_.push(n), n;
}
function sv(t) {
  return Pn(t) || bt(10, t), ef(t);
}
function ef(t) {
  if (!Fn(t) || Ri(t))
    return t;
  const e = t[xt];
  let n;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, n = jo(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    n = jo(t, !0);
  return Ci(n, (r, i) => {
    Xc(n, r, ef(i));
  }), e && (e.finalized_ = !1), n;
}
var At = new av(), ya = At.produce;
At.produceWithPatches.bind(
  At
);
At.setAutoFreeze.bind(At);
At.setUseStrictShallowCopy.bind(At);
At.applyPatches.bind(At);
var ru = At.createDraft.bind(At), iu = At.finishDraft.bind(At), uv = {
  transform(t, e) {
    var {
      current: n,
      affinity: r
    } = t;
    if (n != null) {
      var i = O.transform(n, e, {
        affinity: r
      });
      t.current = i, i == null && t.unref();
    }
  }
}, lv = {
  transform(t, e) {
    var {
      current: n,
      affinity: r
    } = t;
    if (n != null) {
      var i = Oe.transform(n, e, {
        affinity: r
      });
      t.current = i, i == null && t.unref();
    }
  }
}, cv = {
  transform(t, e) {
    var {
      current: n,
      affinity: r
    } = t;
    if (n != null) {
      var i = V.transform(n, e, {
        affinity: r
      });
      t.current = i, i == null && t.unref();
    }
  }
}, Ei = /* @__PURE__ */ new WeakMap(), wi = /* @__PURE__ */ new WeakMap(), hr = /* @__PURE__ */ new WeakMap(), tf = /* @__PURE__ */ new WeakMap(), ou = /* @__PURE__ */ new WeakMap(), au = /* @__PURE__ */ new WeakMap(), su = /* @__PURE__ */ new WeakMap(), O = {
  ancestors(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = e, r = O.levels(t, e);
    return n ? r = r.slice(1) : r = r.slice(0, -1), r;
  },
  common(t, e) {
    for (var n = [], r = 0; r < t.length && r < e.length; r++) {
      var i = t[r], o = e[r];
      if (i !== o)
        break;
      n.push(i);
    }
    return n;
  },
  compare(t, e) {
    for (var n = Math.min(t.length, e.length), r = 0; r < n; r++) {
      if (t[r] < e[r]) return -1;
      if (t[r] > e[r]) return 1;
    }
    return 0;
  },
  endsAfter(t, e) {
    var n = t.length - 1, r = t.slice(0, n), i = e.slice(0, n), o = t[n], a = e[n];
    return O.equals(r, i) && o > a;
  },
  endsAt(t, e) {
    var n = t.length, r = t.slice(0, n), i = e.slice(0, n);
    return O.equals(r, i);
  },
  endsBefore(t, e) {
    var n = t.length - 1, r = t.slice(0, n), i = e.slice(0, n), o = t[n], a = e[n];
    return O.equals(r, i) && o < a;
  },
  equals(t, e) {
    return t.length === e.length && t.every((n, r) => n === e[r]);
  },
  hasPrevious(t) {
    return t[t.length - 1] > 0;
  },
  isAfter(t, e) {
    return O.compare(t, e) === 1;
  },
  isAncestor(t, e) {
    return t.length < e.length && O.compare(t, e) === 0;
  },
  isBefore(t, e) {
    return O.compare(t, e) === -1;
  },
  isChild(t, e) {
    return t.length === e.length + 1 && O.compare(t, e) === 0;
  },
  isCommon(t, e) {
    return t.length <= e.length && O.compare(t, e) === 0;
  },
  isDescendant(t, e) {
    return t.length > e.length && O.compare(t, e) === 0;
  },
  isParent(t, e) {
    return t.length + 1 === e.length && O.compare(t, e) === 0;
  },
  isPath(t) {
    return Array.isArray(t) && (t.length === 0 || typeof t[0] == "number");
  },
  isSibling(t, e) {
    if (t.length !== e.length)
      return !1;
    var n = t.slice(0, -1), r = e.slice(0, -1), i = t[t.length - 1], o = e[e.length - 1];
    return i !== o && O.equals(n, r);
  },
  levels(t) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = e, r = [], i = 0; i <= t.length; i++)
      r.push(t.slice(0, i));
    return n && r.reverse(), r;
  },
  next(t) {
    if (t.length === 0)
      throw new Error("Cannot get the next path of a root path [".concat(t, "], because it has no next index."));
    var e = t[t.length - 1];
    return t.slice(0, -1).concat(e + 1);
  },
  operationCanTransformPath(t) {
    switch (t.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "split_node":
      case "move_node":
        return !0;
      default:
        return !1;
    }
  },
  parent(t) {
    if (t.length === 0)
      throw new Error("Cannot get the parent path of the root path [".concat(t, "]."));
    return t.slice(0, -1);
  },
  previous(t) {
    if (t.length === 0)
      throw new Error("Cannot get the previous path of a root path [".concat(t, "], because it has no previous index."));
    var e = t[t.length - 1];
    if (e <= 0)
      throw new Error("Cannot get the previous path of a first child path [".concat(t, "] because it would result in a negative index."));
    return t.slice(0, -1).concat(e - 1);
  },
  relative(t, e) {
    if (!O.isAncestor(e, t) && !O.equals(t, e))
      throw new Error("Cannot get the relative path of [".concat(t, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return t.slice(e.length);
  },
  transform(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t) return null;
    var r = [...t], {
      affinity: i = "forward"
    } = n;
    if (t.length === 0)
      return r;
    switch (e.type) {
      case "insert_node": {
        var {
          path: o
        } = e;
        (O.equals(o, r) || O.endsBefore(o, r) || O.isAncestor(o, r)) && (r[o.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: a
        } = e;
        if (O.equals(a, r) || O.isAncestor(a, r))
          return null;
        O.endsBefore(a, r) && (r[a.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: s,
          position: u
        } = e;
        O.equals(s, r) || O.endsBefore(s, r) ? r[s.length - 1] -= 1 : O.isAncestor(s, r) && (r[s.length - 1] -= 1, r[s.length] += u);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = e;
        if (O.equals(l, r)) {
          if (i === "forward")
            r[r.length - 1] += 1;
          else if (i !== "backward") return null;
        } else O.endsBefore(l, r) ? r[l.length - 1] += 1 : O.isAncestor(l, r) && t[l.length] >= c && (r[l.length - 1] += 1, r[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: p
        } = e;
        if (O.equals(d, p))
          return r;
        if (O.isAncestor(d, r) || O.equals(d, r)) {
          var v = p.slice();
          return O.endsBefore(d, p) && d.length < p.length && (v[d.length - 1] -= 1), v.concat(r.slice(d.length));
        } else O.isSibling(d, p) && (O.isAncestor(p, r) || O.equals(p, r)) ? O.endsBefore(d, r) ? r[d.length - 1] -= 1 : r[d.length - 1] += 1 : O.endsBefore(p, r) || O.equals(p, r) || O.isAncestor(p, r) ? (O.endsBefore(d, r) && (r[d.length - 1] -= 1), r[p.length - 1] += 1) : O.endsBefore(d, r) && (O.equals(p, r) && (r[p.length - 1] += 1), r[d.length - 1] -= 1);
        break;
      }
    }
    return r;
  }
};
function wr(t) {
  "@babel/helpers - typeof";
  return wr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wr(t);
}
function fv(t, e) {
  if (wr(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (wr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function dv(t) {
  var e = fv(t, "string");
  return wr(e) === "symbol" ? e : String(e);
}
function yt(t, e, n) {
  return e = dv(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
function uu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function lr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? uu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : uu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var pv = (t, e, n) => {
  switch (n.type) {
    case "insert_node": {
      var {
        path: r,
        node: i
      } = n, o = re.parent(t, r), a = r[r.length - 1];
      if (a > o.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(r, "] because the destination is past the end of the node."));
      if (o.children.splice(a, 0, i), e)
        for (var [s, u] of V.points(e))
          e[u] = Oe.transform(s, n);
      break;
    }
    case "insert_text": {
      var {
        path: l,
        offset: c,
        text: d
      } = n;
      if (d.length === 0) break;
      var p = re.leaf(t, l), v = p.text.slice(0, c), m = p.text.slice(c);
      if (p.text = v + d + m, e)
        for (var [h, f] of V.points(e))
          e[f] = Oe.transform(h, n);
      break;
    }
    case "merge_node": {
      var {
        path: C
      } = n, w = re.get(t, C), b = O.previous(C), S = re.get(t, b), D = re.parent(t, C), E = C[C.length - 1];
      if (fe.isText(w) && fe.isText(S))
        S.text += w.text;
      else if (!fe.isText(w) && !fe.isText(S))
        S.children.push(...w.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(C, "] to nodes of different interfaces: ").concat(ut.stringify(w), " ").concat(ut.stringify(S)));
      if (D.children.splice(E, 1), e)
        for (var [L, F] of V.points(e))
          e[F] = Oe.transform(L, n);
      break;
    }
    case "move_node": {
      var {
        path: H,
        newPath: P
      } = n;
      if (O.isAncestor(H, P))
        throw new Error("Cannot move a path [".concat(H, "] to new path [").concat(P, "] because the destination is inside itself."));
      var $ = re.get(t, H), R = re.parent(t, H), j = H[H.length - 1];
      R.children.splice(j, 1);
      var T = O.transform(H, n), N = re.get(t, O.parent(T)), K = T[T.length - 1];
      if (N.children.splice(K, 0, $), e)
        for (var [_, oe] of V.points(e))
          e[oe] = Oe.transform(_, n);
      break;
    }
    case "remove_node": {
      var {
        path: ie
      } = n, k = ie[ie.length - 1], U = re.parent(t, ie);
      if (U.children.splice(k, 1), e)
        for (var [J, q] of V.points(e)) {
          var te = Oe.transform(J, n);
          if (e != null && te != null)
            e[q] = te;
          else {
            var Y = void 0, y = void 0;
            for (var [z, W] of re.texts(t))
              if (O.compare(W, ie) === -1)
                Y = [z, W];
              else {
                y = [z, W];
                break;
              }
            var M = !1;
            Y && y && (O.equals(y[1], ie) ? M = !O.hasPrevious(y[1]) : M = O.common(Y[1], ie).length < O.common(y[1], ie).length), Y && !M ? (J.path = Y[1], J.offset = Y[0].text.length) : y ? (J.path = y[1], J.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: X,
        offset: ne,
        text: G
      } = n;
      if (G.length === 0) break;
      var le = re.leaf(t, X), se = le.text.slice(0, ne), pe = le.text.slice(ne + G.length);
      if (le.text = se + pe, e)
        for (var [he, De] of V.points(e))
          e[De] = Oe.transform(he, n);
      break;
    }
    case "set_node": {
      var {
        path: ye,
        properties: be,
        newProperties: ge
      } = n;
      if (ye.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var Ne = re.get(t, ye);
      for (var ue in ge) {
        if (ue === "children" || ue === "text")
          throw new Error('Cannot set the "'.concat(ue, '" property of nodes!'));
        var We = ge[ue];
        We == null ? delete Ne[ue] : Ne[ue] = We;
      }
      for (var de in be)
        ge.hasOwnProperty(de) || delete Ne[de];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Be
      } = n;
      if (Be == null)
        e = Be;
      else {
        if (e == null) {
          if (!V.isRange(Be))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(ut.stringify(Be), " when there is no current selection."));
          e = lr({}, Be);
        }
        for (var Te in Be) {
          var Xe = Be[Te];
          if (Xe == null) {
            if (Te === "anchor" || Te === "focus")
              throw new Error('Cannot remove the "'.concat(Te, '" selection property'));
            delete e[Te];
          } else
            e[Te] = Xe;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: nt,
        position: Ae,
        properties: vt
      } = n;
      if (nt.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(nt, "] because the root node cannot be split."));
      var ft = re.get(t, nt), Xt = re.parent(t, nt), Ot = nt[nt.length - 1], Mt;
      if (fe.isText(ft)) {
        var Rn = ft.text.slice(0, Ae), In = ft.text.slice(Ae);
        ft.text = Rn, Mt = lr(lr({}, vt), {}, {
          text: In
        });
      } else {
        var jn = ft.children.slice(0, Ae), Nn = ft.children.slice(Ae);
        ft.children = jn, Mt = lr(lr({}, vt), {}, {
          children: Nn
        });
      }
      if (Xt.children.splice(Ot + 1, 0, Mt), e)
        for (var [Rt, gn] of V.points(e))
          e[gn] = Oe.transform(Rt, n);
      break;
    }
  }
  return e;
}, hv = {
  transform(t, e) {
    t.children = ru(t.children);
    var n = t.selection && ru(t.selection);
    try {
      n = pv(t, n, e);
    } finally {
      t.children = iu(t.children), n ? t.selection = Pn(n) ? iu(n) : n : t.selection = null;
    }
  }
}, vv = {
  insertNodes(t, e, n) {
    t.insertNodes(e, n);
  },
  liftNodes(t, e) {
    t.liftNodes(e);
  },
  mergeNodes(t, e) {
    t.mergeNodes(e);
  },
  moveNodes(t, e) {
    t.moveNodes(e);
  },
  removeNodes(t, e) {
    t.removeNodes(e);
  },
  setNodes(t, e, n) {
    t.setNodes(e, n);
  },
  splitNodes(t, e) {
    t.splitNodes(e);
  },
  unsetNodes(t, e, n) {
    t.unsetNodes(e, n);
  },
  unwrapNodes(t, e) {
    t.unwrapNodes(e);
  },
  wrapNodes(t, e, n) {
    t.wrapNodes(e, n);
  }
}, gv = {
  collapse(t, e) {
    t.collapse(e);
  },
  deselect(t) {
    t.deselect();
  },
  move(t, e) {
    t.move(e);
  },
  select(t, e) {
    t.select(e);
  },
  setPoint(t, e, n) {
    t.setPoint(e, n);
  },
  setSelection(t, e) {
    t.setSelection(e);
  }
}, nf = (t, e) => {
  for (var n in t) {
    var r = t[n], i = e[n];
    if (ht(r) && ht(i)) {
      if (!nf(r, i)) return !1;
    } else if (Array.isArray(r) && Array.isArray(i)) {
      if (r.length !== i.length) return !1;
      for (var o = 0; o < r.length; o++)
        if (r[o] !== i[o]) return !1;
    } else if (r !== i)
      return !1;
  }
  for (var a in e)
    if (t[a] === void 0 && e[a] !== void 0)
      return !1;
  return !0;
};
function mv(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Zt(t, e) {
  if (t == null) return {};
  var n = mv(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
var yv = ["anchor", "focus"];
function lu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Cv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? lu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : lu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var V = {
  edges(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: n = !1
    } = e, {
      anchor: r,
      focus: i
    } = t;
    return V.isBackward(t) === n ? [r, i] : [i, r];
  },
  end(t) {
    var [, e] = V.edges(t);
    return e;
  },
  equals(t, e) {
    return Oe.equals(t.anchor, e.anchor) && Oe.equals(t.focus, e.focus);
  },
  includes(t, e) {
    if (V.isRange(e)) {
      if (V.includes(t, e.anchor) || V.includes(t, e.focus))
        return !0;
      var [n, r] = V.edges(t), [i, o] = V.edges(e);
      return Oe.isBefore(n, i) && Oe.isAfter(r, o);
    }
    var [a, s] = V.edges(t), u = !1, l = !1;
    return Oe.isPoint(e) ? (u = Oe.compare(e, a) >= 0, l = Oe.compare(e, s) <= 0) : (u = O.compare(e, a.path) >= 0, l = O.compare(e, s.path) <= 0), u && l;
  },
  intersection(t, e) {
    var n = Zt(t, yv), [r, i] = V.edges(t), [o, a] = V.edges(e), s = Oe.isBefore(r, o) ? o : r, u = Oe.isBefore(i, a) ? i : a;
    return Oe.isBefore(u, s) ? null : Cv({
      anchor: s,
      focus: u
    }, n);
  },
  isBackward(t) {
    var {
      anchor: e,
      focus: n
    } = t;
    return Oe.isAfter(e, n);
  },
  isCollapsed(t) {
    var {
      anchor: e,
      focus: n
    } = t;
    return Oe.equals(e, n);
  },
  isExpanded(t) {
    return !V.isCollapsed(t);
  },
  isForward(t) {
    return !V.isBackward(t);
  },
  isRange(t) {
    return ht(t) && Oe.isPoint(t.anchor) && Oe.isPoint(t.focus);
  },
  *points(t) {
    yield [t.anchor, "anchor"], yield [t.focus, "focus"];
  },
  start(t) {
    var [e] = V.edges(t);
    return e;
  },
  transform(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return ya(t, (r) => {
      if (r === null)
        return null;
      var {
        affinity: i = "inward"
      } = n, o, a;
      if (i === "inward") {
        var s = V.isCollapsed(r);
        V.isForward(r) ? (o = "forward", a = s ? o : "backward") : (o = "backward", a = s ? o : "forward");
      } else i === "outward" ? V.isForward(r) ? (o = "backward", a = "forward") : (o = "forward", a = "backward") : (o = i, a = i);
      var u = Oe.transform(r.anchor, e, {
        affinity: o
      }), l = Oe.transform(r.focus, e, {
        affinity: a
      });
      if (!u || !l)
        return null;
      r.anchor = u, r.focus = l;
    });
  }
}, cu = (t) => ht(t) && re.isNodeList(t.children) && !g.isEditor(t), ce = {
  isAncestor(t) {
    return ht(t) && re.isNodeList(t.children);
  },
  isElement: cu,
  isElementList(t) {
    return Array.isArray(t) && t.every((e) => ce.isElement(e));
  },
  isElementProps(t) {
    return t.children !== void 0;
  },
  isElementType: function(e, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return cu(e) && e[r] === n;
  },
  matches(t, e) {
    for (var n in e)
      if (n !== "children" && t[n] !== e[n])
        return !1;
    return !0;
  }
}, Dv = ["children"], bv = ["text"], fu = /* @__PURE__ */ new WeakMap(), re = {
  ancestor(t, e) {
    var n = re.get(t, e);
    if (fe.isText(n))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(ut.stringify(n)));
    return n;
  },
  ancestors(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var r of O.ancestors(e, n)) {
        var i = re.ancestor(t, r), o = [i, r];
        yield o;
      }
    }();
  },
  child(t, e) {
    if (fe.isText(t))
      throw new Error("Cannot get the child of a text node: ".concat(ut.stringify(t)));
    var n = t.children[e];
    if (n == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(ut.stringify(t)));
    return n;
  },
  children(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: r = !1
      } = n, i = re.ancestor(t, e), {
        children: o
      } = i, a = r ? o.length - 1 : 0; r ? a >= 0 : a < o.length; ) {
        var s = re.child(i, a), u = e.concat(a);
        yield [s, u], a = r ? a - 1 : a + 1;
      }
    }();
  },
  common(t, e, n) {
    var r = O.common(e, n), i = re.get(t, r);
    return [i, r];
  },
  descendant(t, e) {
    var n = re.get(t, e);
    if (g.isEditor(n))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(ut.stringify(n)));
    return n;
  },
  descendants(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of re.nodes(t, e))
        r.length !== 0 && (yield [n, r]);
    }();
  },
  elements(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of re.nodes(t, e))
        ce.isElement(n) && (yield [n, r]);
    }();
  },
  extractProps(t) {
    if (ce.isAncestor(t)) {
      var e = Zt(t, Dv);
      return e;
    } else {
      var e = Zt(t, bv);
      return e;
    }
  },
  first(t, e) {
    for (var n = e.slice(), r = re.get(t, n); r && !(fe.isText(r) || r.children.length === 0); )
      r = r.children[0], n.push(0);
    return [r, n];
  },
  fragment(t, e) {
    if (fe.isText(t))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(ut.stringify(t)));
    var n = ya({
      children: t.children
    }, (r) => {
      var [i, o] = V.edges(e), a = re.nodes(r, {
        reverse: !0,
        pass: (p) => {
          var [, v] = p;
          return !V.includes(e, v);
        }
      });
      for (var [, s] of a) {
        if (!V.includes(e, s)) {
          var u = re.parent(r, s), l = s[s.length - 1];
          u.children.splice(l, 1);
        }
        if (O.equals(s, o.path)) {
          var c = re.leaf(r, s);
          c.text = c.text.slice(0, o.offset);
        }
        if (O.equals(s, i.path)) {
          var d = re.leaf(r, s);
          d.text = d.text.slice(i.offset);
        }
      }
      g.isEditor(r) && (r.selection = null);
    });
    return n.children;
  },
  get(t, e) {
    for (var n = t, r = 0; r < e.length; r++) {
      var i = e[r];
      if (fe.isText(n) || !n.children[i])
        throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(ut.stringify(t)));
      n = n.children[i];
    }
    return n;
  },
  has(t, e) {
    for (var n = t, r = 0; r < e.length; r++) {
      var i = e[r];
      if (fe.isText(n) || !n.children[i])
        return !1;
      n = n.children[i];
    }
    return !0;
  },
  isNode(t) {
    return fe.isText(t) || ce.isElement(t) || g.isEditor(t);
  },
  isNodeList(t) {
    if (!Array.isArray(t))
      return !1;
    var e = fu.get(t);
    if (e !== void 0)
      return e;
    var n = t.every((r) => re.isNode(r));
    return fu.set(t, n), n;
  },
  last(t, e) {
    for (var n = e.slice(), r = re.get(t, n); r && !(fe.isText(r) || r.children.length === 0); ) {
      var i = r.children.length - 1;
      r = r.children[i], n.push(i);
    }
    return [r, n];
  },
  leaf(t, e) {
    var n = re.get(t, e);
    if (!fe.isText(n))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(ut.stringify(n)));
    return n;
  },
  levels(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var r of O.levels(e, n)) {
        var i = re.get(t, r);
        yield [i, r];
      }
    }();
  },
  matches(t, e) {
    return ce.isElement(t) && ce.isElementProps(e) && ce.matches(t, e) || fe.isText(t) && fe.isTextProps(e) && fe.matches(t, e);
  },
  nodes(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: n,
        reverse: r = !1
      } = e, {
        from: i = [],
        to: o
      } = e, a = /* @__PURE__ */ new Set(), s = [], u = t; !(o && (r ? O.isBefore(s, o) : O.isAfter(s, o))); ) {
        if (a.has(u) || (yield [u, s]), !a.has(u) && !fe.isText(u) && u.children.length !== 0 && (n == null || n([u, s]) === !1)) {
          a.add(u);
          var l = r ? u.children.length - 1 : 0;
          O.isAncestor(s, i) && (l = i[s.length]), s = s.concat(l), u = re.get(t, s);
          continue;
        }
        if (s.length === 0)
          break;
        if (!r) {
          var c = O.next(s);
          if (re.has(t, c)) {
            s = c, u = re.get(t, s);
            continue;
          }
        }
        if (r && s[s.length - 1] !== 0) {
          var d = O.previous(s);
          s = d, u = re.get(t, s);
          continue;
        }
        s = O.parent(s), u = re.get(t, s), a.add(u);
      }
    }();
  },
  parent(t, e) {
    var n = O.parent(e), r = re.get(t, n);
    if (fe.isText(r))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return r;
  },
  string(t) {
    return fe.isText(t) ? t.text : t.children.map(re.string).join("");
  },
  texts(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [n, r] of re.nodes(t, e))
        fe.isText(n) && (yield [n, r]);
    }();
  }
};
function du(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ze(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? du(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : du(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var un = {
  isNodeOperation(t) {
    return un.isOperation(t) && t.type.endsWith("_node");
  },
  isOperation(t) {
    if (!ht(t))
      return !1;
    switch (t.type) {
      case "insert_node":
        return O.isPath(t.path) && re.isNode(t.node);
      case "insert_text":
        return typeof t.offset == "number" && typeof t.text == "string" && O.isPath(t.path);
      case "merge_node":
        return typeof t.position == "number" && O.isPath(t.path) && ht(t.properties);
      case "move_node":
        return O.isPath(t.path) && O.isPath(t.newPath);
      case "remove_node":
        return O.isPath(t.path) && re.isNode(t.node);
      case "remove_text":
        return typeof t.offset == "number" && typeof t.text == "string" && O.isPath(t.path);
      case "set_node":
        return O.isPath(t.path) && ht(t.properties) && ht(t.newProperties);
      case "set_selection":
        return t.properties === null && V.isRange(t.newProperties) || t.newProperties === null && V.isRange(t.properties) || ht(t.properties) && ht(t.newProperties);
      case "split_node":
        return O.isPath(t.path) && typeof t.position == "number" && ht(t.properties);
      default:
        return !1;
    }
  },
  isOperationList(t) {
    return Array.isArray(t) && t.every((e) => un.isOperation(e));
  },
  isSelectionOperation(t) {
    return un.isOperation(t) && t.type.endsWith("_selection");
  },
  isTextOperation(t) {
    return un.isOperation(t) && t.type.endsWith("_text");
  },
  inverse(t) {
    switch (t.type) {
      case "insert_node":
        return Ze(Ze({}, t), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return Ze(Ze({}, t), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return Ze(Ze({}, t), {}, {
          type: "split_node",
          path: O.previous(t.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: n
        } = t;
        if (O.equals(e, n))
          return t;
        if (O.isSibling(n, e))
          return Ze(Ze({}, t), {}, {
            path: e,
            newPath: n
          });
        var r = O.transform(n, t), i = O.transform(O.next(n), t);
        return Ze(Ze({}, t), {}, {
          path: r,
          newPath: i
        });
      }
      case "remove_node":
        return Ze(Ze({}, t), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return Ze(Ze({}, t), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: o,
          newProperties: a
        } = t;
        return Ze(Ze({}, t), {}, {
          properties: a,
          newProperties: o
        });
      }
      case "set_selection": {
        var {
          properties: s,
          newProperties: u
        } = t;
        return s == null ? Ze(Ze({}, t), {}, {
          properties: u,
          newProperties: null
        }) : u == null ? Ze(Ze({}, t), {}, {
          properties: null,
          newProperties: s
        }) : Ze(Ze({}, t), {}, {
          properties: u,
          newProperties: s
        });
      }
      case "split_node":
        return Ze(Ze({}, t), {}, {
          type: "merge_node",
          path: O.next(t.path)
        });
    }
  }
}, pu = /* @__PURE__ */ new WeakMap(), Ev = (t) => {
  var e = pu.get(t);
  if (e !== void 0)
    return e;
  if (!ht(t))
    return !1;
  var n = typeof t.addMark == "function" && typeof t.apply == "function" && typeof t.deleteFragment == "function" && typeof t.insertBreak == "function" && typeof t.insertSoftBreak == "function" && typeof t.insertFragment == "function" && typeof t.insertNode == "function" && typeof t.insertText == "function" && typeof t.isElementReadOnly == "function" && typeof t.isInline == "function" && typeof t.isSelectable == "function" && typeof t.isVoid == "function" && typeof t.normalizeNode == "function" && typeof t.onChange == "function" && typeof t.removeMark == "function" && typeof t.getDirtyPaths == "function" && (t.marks === null || ht(t.marks)) && (t.selection === null || V.isRange(t.selection)) && re.isNodeList(t.children) && un.isOperationList(t.operations);
  return pu.set(t, n), n;
}, g = {
  above(t, e) {
    return t.above(e);
  },
  addMark(t, e, n) {
    t.addMark(e, n);
  },
  after(t, e, n) {
    return t.after(e, n);
  },
  before(t, e, n) {
    return t.before(e, n);
  },
  deleteBackward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: n = "character"
    } = e;
    t.deleteBackward(n);
  },
  deleteForward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: n = "character"
    } = e;
    t.deleteForward(n);
  },
  deleteFragment(t, e) {
    t.deleteFragment(e);
  },
  edges(t, e) {
    return t.edges(e);
  },
  elementReadOnly(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return t.elementReadOnly(e);
  },
  end(t, e) {
    return t.end(e);
  },
  first(t, e) {
    return t.first(e);
  },
  fragment(t, e) {
    return t.fragment(e);
  },
  hasBlocks(t, e) {
    return t.hasBlocks(e);
  },
  hasInlines(t, e) {
    return t.hasInlines(e);
  },
  hasPath(t, e) {
    return t.hasPath(e);
  },
  hasTexts(t, e) {
    return t.hasTexts(e);
  },
  insertBreak(t) {
    t.insertBreak();
  },
  insertFragment(t, e, n) {
    t.insertFragment(e, n);
  },
  insertNode(t, e) {
    t.insertNode(e);
  },
  insertSoftBreak(t) {
    t.insertSoftBreak();
  },
  insertText(t, e) {
    t.insertText(e);
  },
  isBlock(t, e) {
    return t.isBlock(e);
  },
  isEdge(t, e, n) {
    return t.isEdge(e, n);
  },
  isEditor(t) {
    return Ev(t);
  },
  isElementReadOnly(t, e) {
    return t.isElementReadOnly(e);
  },
  isEmpty(t, e) {
    return t.isEmpty(e);
  },
  isEnd(t, e, n) {
    return t.isEnd(e, n);
  },
  isInline(t, e) {
    return t.isInline(e);
  },
  isNormalizing(t) {
    return t.isNormalizing();
  },
  isSelectable(t, e) {
    return t.isSelectable(e);
  },
  isStart(t, e, n) {
    return t.isStart(e, n);
  },
  isVoid(t, e) {
    return t.isVoid(e);
  },
  last(t, e) {
    return t.last(e);
  },
  leaf(t, e, n) {
    return t.leaf(e, n);
  },
  levels(t, e) {
    return t.levels(e);
  },
  marks(t) {
    return t.getMarks();
  },
  next(t, e) {
    return t.next(e);
  },
  node(t, e, n) {
    return t.node(e, n);
  },
  nodes(t, e) {
    return t.nodes(e);
  },
  normalize(t, e) {
    t.normalize(e);
  },
  parent(t, e, n) {
    return t.parent(e, n);
  },
  path(t, e, n) {
    return t.path(e, n);
  },
  pathRef(t, e, n) {
    return t.pathRef(e, n);
  },
  pathRefs(t) {
    return t.pathRefs();
  },
  point(t, e, n) {
    return t.point(e, n);
  },
  pointRef(t, e, n) {
    return t.pointRef(e, n);
  },
  pointRefs(t) {
    return t.pointRefs();
  },
  positions(t, e) {
    return t.positions(e);
  },
  previous(t, e) {
    return t.previous(e);
  },
  range(t, e, n) {
    return t.range(e, n);
  },
  rangeRef(t, e, n) {
    return t.rangeRef(e, n);
  },
  rangeRefs(t) {
    return t.rangeRefs();
  },
  removeMark(t, e) {
    t.removeMark(e);
  },
  setNormalizing(t, e) {
    t.setNormalizing(e);
  },
  start(t, e) {
    return t.start(e);
  },
  string(t, e, n) {
    return t.string(e, n);
  },
  unhangRange(t, e, n) {
    return t.unhangRange(e, n);
  },
  void(t, e) {
    return t.void(e);
  },
  withoutNormalizing(t, e) {
    t.withoutNormalizing(e);
  },
  shouldMergeNodesRemovePrevNode: (t, e, n) => t.shouldMergeNodesRemovePrevNode(e, n)
}, wv = {
  isSpan(t) {
    return Array.isArray(t) && t.length === 2 && t.every(O.isPath);
  }
};
function hu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function vu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : hu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Oe = {
  compare(t, e) {
    var n = O.compare(t.path, e.path);
    return n === 0 ? t.offset < e.offset ? -1 : t.offset > e.offset ? 1 : 0 : n;
  },
  isAfter(t, e) {
    return Oe.compare(t, e) === 1;
  },
  isBefore(t, e) {
    return Oe.compare(t, e) === -1;
  },
  equals(t, e) {
    return t.offset === e.offset && O.equals(t.path, e.path);
  },
  isPoint(t) {
    return ht(t) && typeof t.offset == "number" && O.isPath(t.path);
  },
  transform(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return ya(t, (r) => {
      if (r === null)
        return null;
      var {
        affinity: i = "forward"
      } = n, {
        path: o,
        offset: a
      } = r;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          r.path = O.transform(o, e, n);
          break;
        }
        case "insert_text": {
          O.equals(e.path, o) && (e.offset < a || e.offset === a && i === "forward") && (r.offset += e.text.length);
          break;
        }
        case "merge_node": {
          O.equals(e.path, o) && (r.offset += e.position), r.path = O.transform(o, e, n);
          break;
        }
        case "remove_text": {
          O.equals(e.path, o) && e.offset <= a && (r.offset -= Math.min(a - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (O.equals(e.path, o) || O.isAncestor(e.path, o))
            return null;
          r.path = O.transform(o, e, n);
          break;
        }
        case "split_node": {
          if (O.equals(e.path, o)) {
            if (e.position === a && i == null)
              return null;
            (e.position < a || e.position === a && i === "forward") && (r.offset -= e.position, r.path = O.transform(o, e, vu(vu({}, n), {}, {
              affinity: "forward"
            })));
          } else
            r.path = O.transform(o, e, n);
          break;
        }
      }
    });
  }
}, gu = void 0, ut = {
  setScrubber(t) {
    gu = t;
  },
  stringify(t) {
    return JSON.stringify(t, gu);
  }
}, Bv = ["text"], xv = ["anchor", "focus"];
function mu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ht(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? mu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : mu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var fe = {
  equals(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: r = !1
    } = n;
    function i(o) {
      var a = Zt(o, Bv);
      return a;
    }
    return nf(r ? i(t) : t, r ? i(e) : e);
  },
  isText(t) {
    return ht(t) && typeof t.text == "string";
  },
  isTextList(t) {
    return Array.isArray(t) && t.every((e) => fe.isText(e));
  },
  isTextProps(t) {
    return t.text !== void 0;
  },
  matches(t, e) {
    for (var n in e)
      if (n !== "text" && (!t.hasOwnProperty(n) || t[n] !== e[n]))
        return !1;
    return !0;
  },
  decorations(t, e) {
    var n = [Ht({}, t)];
    for (var r of e) {
      var i = Zt(r, xv), [o, a] = V.edges(r), s = [], u = 0, l = o.offset, c = a.offset;
      for (var d of n) {
        var {
          length: p
        } = d.text, v = u;
        if (u += p, l <= v && u <= c) {
          Object.assign(d, i), s.push(d);
          continue;
        }
        if (l !== c && (l === u || c === v) || l > u || c < v || c === v && v !== 0) {
          s.push(d);
          continue;
        }
        var m = d, h = void 0, f = void 0;
        if (c < u) {
          var C = c - v;
          f = Ht(Ht({}, m), {}, {
            text: m.text.slice(C)
          }), m = Ht(Ht({}, m), {}, {
            text: m.text.slice(0, C)
          });
        }
        if (l > v) {
          var w = l - v;
          h = Ht(Ht({}, m), {}, {
            text: m.text.slice(0, w)
          }), m = Ht(Ht({}, m), {}, {
            text: m.text.slice(w)
          });
        }
        Object.assign(m, i), h && s.push(h), s.push(m), f && s.push(f);
      }
      n = s;
    }
    return n;
  }
}, Ca = (t) => t.selection ? t.selection : t.children.length > 0 ? g.end(t, []) : [0], Xn = (t, e) => {
  var [n] = g.node(t, e);
  return (r) => r === n;
}, Da = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = !n, i = n ? Fv(e) : e, o = we.None, a = we.None, s = 0, u = null, l = null;
  for (var c of i) {
    var d = c.codePointAt(0);
    if (!d) break;
    var p = Uv(c, d);
    if ([o, a] = r ? [a, p] : [p, o], Vn(o, we.ZWJ) && Vn(a, we.ExtPict) && (r ? u = yu(e.substring(0, s)) : u = yu(e.substring(0, e.length - s)), !u) || Vn(o, we.RI) && Vn(a, we.RI) && (l !== null ? l = !l : r ? l = !0 : l = Zv(e.substring(0, e.length - s)), !l) || o !== we.None && a !== we.None && Vv(o, a))
      break;
    s += c.length;
  }
  return s || 1;
}, Av = /\s/, Lv = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Ov = /['\u2018\u2019]/, Sv = function(e) {
  for (var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, r = 0, i = !1; e.length > 0; ) {
    var o = Da(e, n), [a, s] = ba(e, o, n);
    if (Pv(a, s, n))
      i = !0, r += o;
    else if (!i)
      r += o;
    else
      break;
    e = s;
  }
  return r;
}, ba = (t, e, n) => {
  if (n) {
    var r = t.length - e;
    return [t.slice(r, t.length), t.slice(0, r)];
  }
  return [t.slice(0, e), t.slice(e)];
}, Pv = function t(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (Av.test(e))
    return !1;
  if (Ov.test(e)) {
    var i = Da(n, r), [o, a] = ba(n, i, r);
    if (t(o, a, r))
      return !0;
  }
  return !Lv.test(e);
}, Fv = function* (e) {
  for (var n = e.length - 1, r = 0; r < e.length; r++) {
    var i = e.charAt(n - r);
    if (kv(i.charCodeAt(0))) {
      var o = e.charAt(n - r - 1);
      if (Mv(o.charCodeAt(0))) {
        yield o + i, r++;
        continue;
      }
    }
    yield i;
  }
}, Mv = (t) => t >= 55296 && t <= 56319, kv = (t) => t >= 56320 && t <= 57343, we;
(function(t) {
  t[t.None = 0] = "None", t[t.Extend = 1] = "Extend", t[t.ZWJ = 2] = "ZWJ", t[t.RI = 4] = "RI", t[t.Prepend = 8] = "Prepend", t[t.SpacingMark = 16] = "SpacingMark", t[t.L = 32] = "L", t[t.V = 64] = "V", t[t.T = 128] = "T", t[t.LV = 256] = "LV", t[t.LVT = 512] = "LVT", t[t.ExtPict = 1024] = "ExtPict", t[t.Any = 2048] = "Any";
})(we || (we = {}));
var Tv = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Rv = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, Iv = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, jv = /^[\u1100-\u115F\uA960-\uA97C]$/, Nv = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, _v = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, $v = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, zv = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, Wv = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, Uv = (t, e) => {
  var n = we.Any;
  return t.search(Tv) !== -1 && (n |= we.Extend), e === 8205 && (n |= we.ZWJ), e >= 127462 && e <= 127487 && (n |= we.RI), t.search(Rv) !== -1 && (n |= we.Prepend), t.search(Iv) !== -1 && (n |= we.SpacingMark), t.search(jv) !== -1 && (n |= we.L), t.search(Nv) !== -1 && (n |= we.V), t.search(_v) !== -1 && (n |= we.T), t.search($v) !== -1 && (n |= we.LV), t.search(zv) !== -1 && (n |= we.LVT), t.search(Wv) !== -1 && (n |= we.ExtPict), n;
};
function Vn(t, e) {
  return (t & e) !== 0;
}
var Hv = [
  // GB6
  [we.L, we.L | we.V | we.LV | we.LVT],
  // GB7
  [we.LV | we.V, we.V | we.T],
  // GB8
  [we.LVT | we.T, we.T],
  // GB9
  [we.Any, we.Extend | we.ZWJ],
  // GB9a
  [we.Any, we.SpacingMark],
  // GB9b
  [we.Prepend, we.Any],
  // GB11
  [we.ZWJ, we.ExtPict],
  // GB12 and GB13
  [we.RI, we.RI]
];
function Vv(t, e) {
  return Hv.findIndex((n) => Vn(t, n[0]) && Vn(e, n[1])) === -1;
}
var qv = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, yu = (t) => t.search(qv) !== -1, Gv = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, Zv = (t) => {
  var e = t.match(Gv);
  if (e === null)
    return !1;
  var n = e[0].length / 2;
  return n % 2 === 1;
}, Yv = {
  delete(t, e) {
    t.delete(e);
  },
  insertFragment(t, e, n) {
    t.insertFragment(e, n);
  },
  insertText(t, e) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    g.withoutNormalizing(t, () => {
      var {
        voids: r = !1
      } = n, {
        at: i = Ca(t)
      } = n;
      if (O.isPath(i) && (i = g.range(t, i)), V.isRange(i))
        if (V.isCollapsed(i))
          i = i.anchor;
        else {
          var o = V.end(i);
          if (!r && g.void(t, {
            at: o
          }))
            return;
          var a = V.start(i), s = g.pointRef(t, a), u = g.pointRef(t, o);
          Q.delete(t, {
            at: i,
            voids: r
          });
          var l = s.unref(), c = u.unref();
          i = l || c, Q.setSelection(t, {
            anchor: i,
            focus: i
          });
        }
      if (!(!r && g.void(t, {
        at: i
      }) || g.elementReadOnly(t, {
        at: i
      }))) {
        var {
          path: d,
          offset: p
        } = i;
        e.length > 0 && t.apply({
          type: "insert_text",
          path: d,
          offset: p,
          text: e
        });
      }
    });
  }
};
function Cu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Hr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Cu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Cu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Q = Hr(Hr(Hr(Hr({}, hv), vv), gv), Yv), ui = /* @__PURE__ */ new WeakMap(), Kv = (t) => ui.get(t) || !1, Xv = (t, e, n) => {
  var r = ui.get(t) || !1;
  ui.set(t, !0);
  try {
    e(), n();
  } finally {
    ui.set(t, r);
  }
};
function rf(t, e, n) {
  var r = Ei.get(t) || [], i = wi.get(t) || /* @__PURE__ */ new Set(), o, a, s = (d) => {
    if (d) {
      var p = d.join(",");
      a.has(p) || (a.add(p), o.push(d));
    }
  };
  if (n) {
    o = [], a = /* @__PURE__ */ new Set();
    for (var u of r) {
      var l = n(u);
      s(l);
    }
  } else
    o = r, a = i;
  for (var c of e)
    s(c);
  Ei.set(t, o), wi.set(t, a);
}
var Jv = (t, e) => {
  for (var n of g.pathRefs(t))
    uv.transform(n, e);
  for (var r of g.pointRefs(t))
    lv.transform(r, e);
  for (var i of g.rangeRefs(t))
    cv.transform(i, e);
  if (!Kv(t)) {
    var o = O.operationCanTransformPath(e) ? (a) => O.transform(a, e) : void 0;
    rf(t, t.getDirtyPaths(e), o);
  }
  Q.transform(t, e), t.operations.push(e), g.normalize(t, {
    operation: e
  }), e.type === "set_selection" && (t.marks = null), hr.get(t) || (hr.set(t, !0), Promise.resolve().then(() => {
    hr.set(t, !1), t.onChange({
      operation: e
    }), t.operations = [];
  }));
}, Qv = (t, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: n
      } = e;
      return O.levels(n);
    }
    case "insert_node": {
      var {
        node: r,
        path: i
      } = e, o = O.levels(i), a = fe.isText(r) ? [] : Array.from(re.nodes(r), (P) => {
        var [, $] = P;
        return i.concat($);
      });
      return [...o, ...a];
    }
    case "merge_node": {
      var {
        path: s
      } = e, u = O.ancestors(s), l = O.previous(s);
      return [...u, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = e;
      if (O.equals(c, d))
        return [];
      var p = [], v = [];
      for (var m of O.ancestors(c)) {
        var h = O.transform(m, e);
        p.push(h);
      }
      for (var f of O.ancestors(d)) {
        var C = O.transform(f, e);
        v.push(C);
      }
      var w = v[v.length - 1], b = d[d.length - 1], S = w.concat(b);
      return [...p, ...v, S];
    }
    case "remove_node": {
      var {
        path: D
      } = e, E = O.ancestors(D);
      return [...E];
    }
    case "split_node": {
      var {
        path: L
      } = e, F = O.levels(L), H = O.next(L);
      return [...F, H];
    }
    default:
      return [];
  }
}, eg = (t) => {
  var {
    selection: e
  } = t;
  return e ? re.fragment(t, e) : [];
}, tg = (t, e) => {
  var [n, r] = e;
  if (!fe.isText(n)) {
    if (ce.isElement(n) && n.children.length === 0) {
      var i = {
        text: ""
      };
      Q.insertNodes(t, i, {
        at: r.concat(0),
        voids: !0
      });
      return;
    }
    for (var o = g.isEditor(n) ? !1 : ce.isElement(n) && (t.isInline(n) || n.children.length === 0 || fe.isText(n.children[0]) || t.isInline(n.children[0])), a = 0, s = 0; s < n.children.length; s++, a++) {
      var u = re.get(t, r);
      if (!fe.isText(u)) {
        var l = u.children[a], c = u.children[a - 1], d = s === n.children.length - 1, p = fe.isText(l) || ce.isElement(l) && t.isInline(l);
        if (p !== o)
          Q.removeNodes(t, {
            at: r.concat(a),
            voids: !0
          }), a--;
        else if (ce.isElement(l)) {
          if (t.isInline(l)) {
            if (c == null || !fe.isText(c)) {
              var v = {
                text: ""
              };
              Q.insertNodes(t, v, {
                at: r.concat(a),
                voids: !0
              }), a++;
            } else if (d) {
              var m = {
                text: ""
              };
              Q.insertNodes(t, m, {
                at: r.concat(a + 1),
                voids: !0
              }), a++;
            }
          }
        } else {
          if (!fe.isText(l) && !("children" in l)) {
            var h = l;
            h.children = [];
          }
          c != null && fe.isText(c) && (fe.equals(l, c, {
            loose: !0
          }) ? (Q.mergeNodes(t, {
            at: r.concat(a),
            voids: !0
          }), a--) : c.text === "" ? (Q.removeNodes(t, {
            at: r.concat(a - 1),
            voids: !0
          }), a--) : l.text === "" && (Q.removeNodes(t, {
            at: r.concat(a),
            voids: !0
          }), a--));
        }
      }
    }
  }
}, ng = (t, e) => {
  var {
    iteration: n,
    initialDirtyPathsLength: r
  } = e, i = r * 42;
  if (n > i)
    throw new Error("Could not completely normalize the editor after ".concat(i, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, rg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: r = !1,
    mode: i = "lowest",
    at: o = e.selection,
    match: a
  } = n;
  if (o) {
    var s = g.path(e, o), u = i === "lowest";
    for (var [l, c] of g.levels(e, {
      at: s,
      voids: r,
      match: a,
      reverse: u
    }))
      if (!fe.isText(l)) {
        if (V.isRange(o)) {
          if (O.isAncestor(c, o.anchor.path) && O.isAncestor(c, o.focus.path))
            return [l, c];
        } else if (!O.equals(s, c))
          return [l, c];
      }
  }
};
function Du(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function bu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Du(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Du(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var ig = (t, e, n) => {
  var {
    selection: r
  } = t;
  if (r) {
    var i = (d, p) => {
      if (!fe.isText(d))
        return !1;
      var [v, m] = g.parent(t, p);
      return !t.isVoid(v) || t.markableVoid(v);
    }, o = V.isExpanded(r), a = !1;
    if (!o) {
      var [s, u] = g.node(t, r);
      if (s && i(s, u)) {
        var [l] = g.parent(t, u);
        a = l && t.markableVoid(l);
      }
    }
    if (o || a)
      Q.setNodes(t, {
        [e]: n
      }, {
        match: i,
        split: !0,
        voids: !0
      });
    else {
      var c = bu(bu({}, g.marks(t) || {}), {}, {
        [e]: n
      });
      t.marks = c, hr.get(t) || t.onChange();
    }
  }
};
function Eu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Eu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Eu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var og = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.point(e, n, {
    edge: "end"
  }), o = g.end(e, []), a = {
    anchor: i,
    focus: o
  }, {
    distance: s = 1
  } = r, u = 0, l;
  for (var c of g.positions(e, wu(wu({}, r), {}, {
    at: a
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
};
function Bu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function xu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Bu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var ag = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.start(e, []), o = g.point(e, n, {
    edge: "start"
  }), a = {
    anchor: i,
    focus: o
  }, {
    distance: s = 1
  } = r, u = 0, l;
  for (var c of g.positions(e, xu(xu({}, r), {}, {
    at: a,
    reverse: !0
  }))) {
    if (u > s)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
}, sg = (t, e) => {
  var {
    selection: n
  } = t;
  n && V.isCollapsed(n) && Q.delete(t, {
    unit: e,
    reverse: !0
  });
}, ug = (t, e) => {
  var {
    selection: n
  } = t;
  n && V.isCollapsed(n) && Q.delete(t, {
    unit: e
  });
}, lg = function(e) {
  var {
    direction: n = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: r
  } = e;
  r && V.isExpanded(r) && Q.delete(e, {
    reverse: n === "backward"
  });
}, cg = (t, e) => [g.start(t, e), g.end(t, e)];
function Au(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Lu(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Au(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Au(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var fg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g.above(e, Lu(Lu({}, n), {}, {
    match: (r) => ce.isElement(r) && g.isElementReadOnly(e, r)
  }));
}, dg = (t, e) => g.point(t, e, {
  edge: "end"
}), pg = (t, e) => {
  var n = g.path(t, e, {
    edge: "start"
  });
  return g.node(t, n);
}, hg = (t, e) => {
  var n = g.range(t, e);
  return re.fragment(t, n);
};
function Ou(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Su(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ou(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Ou(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var vg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g.above(e, Su(Su({}, n), {}, {
    match: (r) => ce.isElement(r) && g.isVoid(e, r)
  }));
}, gg = (t, e) => e.children.some((n) => ce.isElement(n) && g.isBlock(t, n)), mg = (t, e) => e.children.some((n) => fe.isText(n) || g.isInline(t, n)), yg = (t, e) => re.has(t, e), Cg = (t, e) => e.children.every((n) => fe.isText(n)), Dg = (t) => {
  Q.splitNodes(t, {
    always: !0
  });
}, bg = (t, e, n) => {
  Q.insertNodes(t, e, n);
}, Eg = (t) => {
  Q.splitNodes(t, {
    always: !0
  });
};
function Pu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function wg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Pu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Pu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Bg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: i,
    marks: o
  } = e;
  if (i) {
    if (o) {
      var a = wg({
        text: n
      }, o);
      Q.insertNodes(e, a, {
        at: r.at,
        voids: r.voids
      });
    } else
      Q.insertText(e, n, r);
    e.marks = null;
  }
}, xg = (t, e) => !t.isInline(e), Ag = (t, e, n) => g.isStart(t, e, n) || g.isEnd(t, e, n), Lg = (t, e) => {
  var {
    children: n
  } = e, [r] = n;
  return n.length === 0 || n.length === 1 && fe.isText(r) && r.text === "" && !t.isVoid(e);
}, Og = (t, e, n) => {
  var r = g.end(t, n);
  return Oe.equals(e, r);
}, Sg = (t) => {
  var e = tf.get(t);
  return e === void 0 ? !0 : e;
}, Pg = (t, e, n) => {
  if (e.offset !== 0)
    return !1;
  var r = g.start(t, n);
  return Oe.equals(e, r);
}, Fg = (t, e) => {
  var n = g.path(t, e, {
    edge: "end"
  });
  return g.node(t, n);
}, Mg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.path(e, n, r), o = re.leaf(e, i);
  return [o, i];
};
function kg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: n = t.selection,
      reverse: r = !1,
      voids: i = !1
    } = e, {
      match: o
    } = e;
    if (o == null && (o = () => !0), !!n) {
      var a = [], s = g.path(t, n);
      for (var [u, l] of re.levels(t, s))
        if (o(u, l) && (a.push([u, l]), !i && ce.isElement(u) && g.isVoid(t, u)))
          break;
      r && a.reverse(), yield* a;
    }
  }();
}
var Tg = ["text"], Rg = ["text"], Ig = function(e) {
  var {
    marks: n,
    selection: r
  } = e;
  if (!r)
    return null;
  var {
    anchor: i,
    focus: o
  } = r;
  if (n)
    return n;
  if (V.isExpanded(r)) {
    var a = g.isEnd(e, i, i.path);
    if (a) {
      var s = g.after(e, i);
      s && (i = s);
    }
    var [u] = g.nodes(e, {
      match: fe.isText,
      at: {
        anchor: i,
        focus: o
      }
    });
    if (u) {
      var [l] = u, c = Zt(l, Tg);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = i, [p] = g.leaf(e, d);
  if (i.offset === 0) {
    var v = g.previous(e, {
      at: d,
      match: fe.isText
    }), m = g.above(e, {
      match: (S) => ce.isElement(S) && g.isVoid(e, S) && e.markableVoid(S)
    });
    if (!m) {
      var h = g.above(e, {
        match: (S) => ce.isElement(S) && g.isBlock(e, S)
      });
      if (v && h) {
        var [f, C] = v, [, w] = h;
        O.isAncestor(w, C) && (p = f);
      }
    }
  }
  var b = Zt(p, Rg);
  return b;
}, jg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: r = "lowest",
    voids: i = !1
  } = n, {
    match: o,
    at: a = e.selection
  } = n;
  if (a) {
    var s = g.after(e, a, {
      voids: i
    });
    if (s) {
      var [, u] = g.last(e, []), l = [s.path, u];
      if (O.isPath(a) && a.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (o == null)
        if (O.isPath(a)) {
          var [c] = g.parent(e, a);
          o = (p) => c.children.includes(p);
        } else
          o = () => !0;
      var [d] = g.nodes(e, {
        at: l,
        match: o,
        mode: r,
        voids: i
      });
      return d;
    }
  }
}, Ng = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.path(e, n, r), o = re.get(e, i);
  return [o, i];
};
function _g(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: n = t.selection,
      mode: r = "all",
      universal: i = !1,
      reverse: o = !1,
      voids: a = !1,
      ignoreNonSelectable: s = !1
    } = e, {
      match: u
    } = e;
    if (u || (u = () => !0), !!n) {
      var l, c;
      if (wv.isSpan(n))
        l = n[0], c = n[1];
      else {
        var d = g.path(t, n, {
          edge: "start"
        }), p = g.path(t, n, {
          edge: "end"
        });
        l = o ? p : d, c = o ? d : p;
      }
      var v = re.nodes(t, {
        reverse: o,
        from: l,
        to: c,
        pass: (S) => {
          var [D] = S;
          return ce.isElement(D) ? !!(!a && (g.isVoid(t, D) || g.isElementReadOnly(t, D)) || s && !g.isSelectable(t, D)) : !1;
        }
      }), m = [], h;
      for (var [f, C] of v)
        if (!(s && ce.isElement(f) && !g.isSelectable(t, f))) {
          var w = h && O.compare(C, h[1]) === 0;
          if (!(r === "highest" && w)) {
            if (!u(f, C)) {
              if (i && !w && fe.isText(f))
                return;
              continue;
            }
            if (r === "lowest" && w) {
              h = [f, C];
              continue;
            }
            var b = r === "lowest" ? h : [f, C];
            b && (i ? m.push(b) : yield b), h = [f, C];
          }
        }
      r === "lowest" && h && (i ? m.push(h) : yield h), i && (yield* m);
    }
  }();
}
var $g = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: r = !1,
    operation: i
  } = n, o = (c) => Ei.get(c) || [], a = (c) => wi.get(c) || /* @__PURE__ */ new Set(), s = (c) => {
    var d = o(c).pop(), p = d.join(",");
    return a(c).delete(p), d;
  };
  if (g.isNormalizing(e)) {
    if (r) {
      var u = Array.from(re.nodes(e), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(u.map((c) => c.join(",")));
      Ei.set(e, u), wi.set(e, l);
    }
    o(e).length !== 0 && g.withoutNormalizing(e, () => {
      for (var c of o(e))
        if (re.has(e, c)) {
          var d = g.node(e, c), [p, v] = d;
          ce.isElement(p) && p.children.length === 0 && e.normalizeNode(d, {
            operation: i
          });
        }
      for (var m = o(e), h = m.length, f = 0; m.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: m,
          iteration: f,
          initialDirtyPathsLength: h,
          operation: i
        }))
          return;
        var C = s(e);
        if (re.has(e, C)) {
          var w = g.node(e, C);
          e.normalizeNode(w, {
            operation: i
          });
        }
        f++, m = o(e);
      }
    });
  }
}, zg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = g.path(e, n, r), o = O.parent(i), a = g.node(e, o);
  return a;
}, Wg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: i = "forward"
  } = r, o = {
    current: n,
    affinity: i,
    unref() {
      var {
        current: s
      } = o, u = g.pathRefs(e);
      return u.delete(o), o.current = null, s;
    }
  }, a = g.pathRefs(e);
  return a.add(o), o;
}, Ug = (t) => {
  var e = ou.get(t);
  return e || (e = /* @__PURE__ */ new Set(), ou.set(t, e)), e;
}, Hg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: i,
    edge: o
  } = r;
  if (O.isPath(n)) {
    if (o === "start") {
      var [, a] = re.first(e, n);
      n = a;
    } else if (o === "end") {
      var [, s] = re.last(e, n);
      n = s;
    }
  }
  return V.isRange(n) && (o === "start" ? n = V.start(n) : o === "end" ? n = V.end(n) : n = O.common(n.anchor.path, n.focus.path)), Oe.isPoint(n) && (n = n.path), i != null && (n = n.slice(0, i)), n;
}, Vg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: i = "forward"
  } = r, o = {
    current: n,
    affinity: i,
    unref() {
      var {
        current: s
      } = o, u = g.pointRefs(e);
      return u.delete(o), o.current = null, s;
    }
  }, a = g.pointRefs(e);
  return a.add(o), o;
}, qg = (t) => {
  var e = au.get(t);
  return e || (e = /* @__PURE__ */ new Set(), au.set(t, e)), e;
}, Gg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: i = "start"
  } = r;
  if (O.isPath(n)) {
    var o;
    if (i === "end") {
      var [, a] = re.last(e, n);
      o = a;
    } else {
      var [, s] = re.first(e, n);
      o = s;
    }
    var u = re.get(e, o);
    if (!fe.isText(u))
      throw new Error("Cannot get the ".concat(i, " point in the node at path [").concat(n, "] because it has no ").concat(i, " text node."));
    return {
      path: o,
      offset: i === "end" ? u.text.length : 0
    };
  }
  if (V.isRange(n)) {
    var [l, c] = V.edges(n);
    return i === "start" ? l : c;
  }
  return n;
};
function Zg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: n = t.selection,
      unit: r = "offset",
      reverse: i = !1,
      voids: o = !1,
      ignoreNonSelectable: a = !1
    } = e;
    if (!n)
      return;
    var s = g.range(t, n), [u, l] = V.edges(s), c = i ? l : u, d = !1, p = "", v = 0, m = 0, h = 0;
    for (var [f, C] of g.nodes(t, {
      at: n,
      reverse: i,
      voids: o,
      ignoreNonSelectable: a
    })) {
      if (ce.isElement(f)) {
        if (!o && (t.isVoid(f) || t.isElementReadOnly(f))) {
          yield g.start(t, C);
          continue;
        }
        if (t.isInline(f)) continue;
        if (g.hasInlines(t, f)) {
          var w = O.isAncestor(C, l.path) ? l : g.end(t, C), b = O.isAncestor(C, u.path) ? u : g.start(t, C);
          p = g.string(t, {
            anchor: b,
            focus: w
          }, {
            voids: o
          }), d = !0;
        }
      }
      if (fe.isText(f)) {
        var S = O.equals(C, c.path);
        for (S ? (m = i ? c.offset : f.text.length - c.offset, h = c.offset) : (m = f.text.length, h = i ? m : 0), (S || d || r === "offset") && (yield {
          path: C,
          offset: h
        }, d = !1); ; ) {
          if (v === 0) {
            if (p === "") break;
            v = D(p, r, i), p = ba(p, v, i)[1];
          }
          if (h = i ? h - v : h + v, m = m - v, m < 0) {
            v = -m;
            break;
          }
          v = 0, yield {
            path: C,
            offset: h
          };
        }
      }
    }
    function D(E, L, F) {
      return L === "character" ? Da(E, F) : L === "word" ? Sv(E, F) : L === "line" || L === "block" ? E.length : 1;
    }
  }();
}
var Yg = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: r = "lowest",
    voids: i = !1
  } = n, {
    match: o,
    at: a = e.selection
  } = n;
  if (a) {
    var s = g.before(e, a, {
      voids: i
    });
    if (s) {
      var [, u] = g.first(e, []), l = [s.path, u];
      if (O.isPath(a) && a.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (o == null)
        if (O.isPath(a)) {
          var [c] = g.parent(e, a);
          o = (p) => c.children.includes(p);
        } else
          o = () => !0;
      var [d] = g.nodes(e, {
        reverse: !0,
        at: l,
        match: o,
        mode: r,
        voids: i
      });
      return d;
    }
  }
}, Kg = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: i = "forward"
  } = r, o = {
    current: n,
    affinity: i,
    unref() {
      var {
        current: s
      } = o, u = g.rangeRefs(e);
      return u.delete(o), o.current = null, s;
    }
  }, a = g.rangeRefs(e);
  return a.add(o), o;
}, Xg = (t) => {
  var e = su.get(t);
  return e || (e = /* @__PURE__ */ new Set(), su.set(t, e)), e;
}, Jg = (t, e, n) => {
  if (V.isRange(e) && !n)
    return e;
  var r = g.start(t, e), i = g.end(t, n || e);
  return {
    anchor: r,
    focus: i
  };
};
function Fu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Qg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Fu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var em = (t, e) => {
  var {
    selection: n
  } = t;
  if (n) {
    var r = (c, d) => {
      if (!fe.isText(c))
        return !1;
      var [p, v] = g.parent(t, d);
      return !t.isVoid(p) || t.markableVoid(p);
    }, i = V.isExpanded(n), o = !1;
    if (!i) {
      var [a, s] = g.node(t, n);
      if (a && r(a, s)) {
        var [u] = g.parent(t, s);
        o = u && t.markableVoid(u);
      }
    }
    if (i || o)
      Q.unsetNodes(t, e, {
        match: r,
        split: !0,
        voids: !0
      });
    else {
      var l = Qg({}, g.marks(t) || {});
      delete l[e], t.marks = l, hr.get(t) || t.onChange();
    }
  }
}, tm = (t, e) => {
  tf.set(t, e);
}, nm = (t, e) => g.point(t, e, {
  edge: "start"
}), rm = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: i = !1
  } = r, o = g.range(e, n), [a, s] = V.edges(o), u = "";
  for (var [l, c] of g.nodes(e, {
    at: o,
    match: fe.isText,
    voids: i
  })) {
    var d = l.text;
    O.equals(c, s.path) && (d = d.slice(0, s.offset)), O.equals(c, a.path) && (d = d.slice(a.offset)), u += d;
  }
  return u;
}, im = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: i = !1
  } = r, [o, a] = V.edges(n);
  if (o.offset !== 0 || a.offset !== 0 || V.isCollapsed(n) || O.hasPrevious(a.path))
    return n;
  var s = g.above(e, {
    at: a,
    match: (m) => ce.isElement(m) && g.isBlock(e, m),
    voids: i
  }), u = s ? s[1] : [], l = g.start(e, o), c = {
    anchor: l,
    focus: a
  }, d = !0;
  for (var [p, v] of g.nodes(e, {
    at: c,
    match: fe.isText,
    reverse: !0,
    voids: i
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (p.text !== "" || O.isBefore(v, u)) {
      a = {
        path: v,
        offset: p.text.length
      };
      break;
    }
  }
  return {
    anchor: o,
    focus: a
  };
}, om = (t, e) => {
  var n = g.isNormalizing(t);
  g.setNormalizing(t, !1);
  try {
    e();
  } finally {
    g.setNormalizing(t, n);
  }
  g.normalize(t);
}, am = (t, e, n) => {
  var [r, i] = e;
  return ce.isElement(r) && g.isEmpty(t, r) || fe.isText(r) && r.text === "" && i[i.length - 1] !== 0;
}, sm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var r, i, {
      reverse: o = !1,
      unit: a = "character",
      distance: s = 1,
      voids: u = !1
    } = n, {
      at: l = e.selection,
      hanging: c = !1
    } = n;
    if (l) {
      var d = !1;
      if (V.isRange(l) && V.isCollapsed(l) && (d = !0, l = l.anchor), Oe.isPoint(l)) {
        var p = g.void(e, {
          at: l,
          mode: "highest"
        });
        if (!u && p) {
          var [, v] = p;
          l = v;
        } else {
          var m = {
            unit: a,
            distance: s
          }, h = o ? g.before(e, l, m) || g.start(e, []) : g.after(e, l, m) || g.end(e, []);
          l = {
            anchor: l,
            focus: h
          }, c = !0;
        }
      }
      if (O.isPath(l)) {
        Q.removeNodes(e, {
          at: l,
          voids: u
        });
        return;
      }
      if (!V.isCollapsed(l)) {
        if (!c) {
          var [, f] = V.edges(l), C = g.end(e, []);
          Oe.equals(f, C) || (l = g.unhangRange(e, l, {
            voids: u
          }));
        }
        var [w, b] = V.edges(l), S = g.above(e, {
          match: (se) => ce.isElement(se) && g.isBlock(e, se),
          at: w,
          voids: u
        }), D = g.above(e, {
          match: (se) => ce.isElement(se) && g.isBlock(e, se),
          at: b,
          voids: u
        }), E = S && D && !O.equals(S[1], D[1]), L = O.equals(w.path, b.path), F = u ? null : (r = g.void(e, {
          at: w,
          mode: "highest"
        })) !== null && r !== void 0 ? r : g.elementReadOnly(e, {
          at: w,
          mode: "highest"
        }), H = u ? null : (i = g.void(e, {
          at: b,
          mode: "highest"
        })) !== null && i !== void 0 ? i : g.elementReadOnly(e, {
          at: b,
          mode: "highest"
        });
        if (F) {
          var P = g.before(e, w);
          P && S && O.isAncestor(S[1], P.path) && (w = P);
        }
        if (H) {
          var $ = g.after(e, b);
          $ && D && O.isAncestor(D[1], $.path) && (b = $);
        }
        var R = [], j;
        for (var T of g.nodes(e, {
          at: l,
          voids: u
        })) {
          var [N, K] = T;
          j && O.compare(K, j) === 0 || (!u && ce.isElement(N) && (g.isVoid(e, N) || g.isElementReadOnly(e, N)) || !O.isCommon(K, w.path) && !O.isCommon(K, b.path)) && (R.push(T), j = K);
        }
        var _ = Array.from(R, (se) => {
          var [, pe] = se;
          return g.pathRef(e, pe);
        }), oe = g.pointRef(e, w), ie = g.pointRef(e, b), k = "";
        if (!L && !F) {
          var U = oe.current, [J] = g.leaf(e, U), {
            path: q
          } = U, {
            offset: te
          } = w, Y = J.text.slice(te);
          Y.length > 0 && (e.apply({
            type: "remove_text",
            path: q,
            offset: te,
            text: Y
          }), k = Y);
        }
        if (_.reverse().map((se) => se.unref()).filter((se) => se !== null).forEach((se) => Q.removeNodes(e, {
          at: se,
          voids: u
        })), !H) {
          var y = ie.current, [z] = g.leaf(e, y), {
            path: W
          } = y, M = L ? w.offset : 0, X = z.text.slice(M, b.offset);
          X.length > 0 && (e.apply({
            type: "remove_text",
            path: W,
            offset: M,
            text: X
          }), k = X);
        }
        !L && E && ie.current && oe.current && Q.mergeNodes(e, {
          at: ie.current,
          hanging: !0,
          voids: u
        }), d && o && a === "character" && k.length > 1 && k.match(/[\u0E00-\u0E7F]+/) && Q.insertText(e, k.slice(0, k.length - s));
        var ne = oe.unref(), G = ie.unref(), le = o ? ne || G : G || ne;
        n.at == null && le && Q.select(e, le);
      }
    }
  });
}, um = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: i = !1,
      voids: o = !1
    } = r, {
      at: a = Ca(e),
      batchDirty: s = !0
    } = r;
    if (n.length) {
      if (V.isRange(a))
        if (i || (a = g.unhangRange(e, a, {
          voids: o
        })), V.isCollapsed(a))
          a = a.anchor;
        else {
          var [, u] = V.edges(a);
          if (!o && g.void(e, {
            at: u
          }))
            return;
          var l = g.pointRef(e, u);
          Q.delete(e, {
            at: a
          }), a = l.unref();
        }
      else O.isPath(a) && (a = g.start(e, a));
      if (!(!o && g.void(e, {
        at: a
      }))) {
        var c = g.above(e, {
          at: a,
          match: (Y) => ce.isElement(Y) && g.isInline(e, Y),
          mode: "highest",
          voids: o
        });
        if (c) {
          var [, d] = c;
          if (g.isEnd(e, a, d)) {
            var p = g.after(e, d);
            a = p;
          } else if (g.isStart(e, a, d)) {
            var v = g.before(e, d);
            a = v;
          }
        }
        var m = g.above(e, {
          match: (Y) => ce.isElement(Y) && g.isBlock(e, Y),
          at: a,
          voids: o
        }), [, h] = m, f = g.isStart(e, a, h), C = g.isEnd(e, a, h), w = f && C, b = !f || f && C, S = !C, [, D] = re.first({
          children: n
        }, []), [, E] = re.last({
          children: n
        }, []), L = [], F = (Y) => {
          var [y, z] = Y, W = z.length === 0;
          return W ? !1 : w ? !0 : !(b && O.isAncestor(z, D) && ce.isElement(y) && !e.isVoid(y) && !e.isInline(y) || S && O.isAncestor(z, E) && ce.isElement(y) && !e.isVoid(y) && !e.isInline(y));
        };
        for (var H of re.nodes({
          children: n
        }, {
          pass: F
        }))
          F(H) && L.push(H);
        var P = [], $ = [], R = [], j = !0, T = !1;
        for (var [N] of L)
          ce.isElement(N) && !e.isInline(N) ? (j = !1, T = !0, $.push(N)) : j ? P.push(N) : R.push(N);
        var [K] = g.nodes(e, {
          at: a,
          match: (Y) => fe.isText(Y) || g.isInline(e, Y),
          mode: "highest",
          voids: o
        }), [, _] = K, oe = g.isStart(e, a, _), ie = g.isEnd(e, a, _), k = g.pathRef(e, C && !R.length ? O.next(h) : h), U = g.pathRef(e, ie ? O.next(_) : _);
        Q.splitNodes(e, {
          at: a,
          match: (Y) => T ? ce.isElement(Y) && g.isBlock(e, Y) : fe.isText(Y) || g.isInline(e, Y),
          mode: T ? "lowest" : "highest",
          always: T && (!f || P.length > 0) && (!C || R.length > 0),
          voids: o
        });
        var J = g.pathRef(e, !oe || oe && ie ? O.next(_) : _);
        if (Q.insertNodes(e, P, {
          at: J.current,
          match: (Y) => fe.isText(Y) || g.isInline(e, Y),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), w && !P.length && $.length && !R.length && Q.delete(e, {
          at: h,
          voids: o
        }), Q.insertNodes(e, $, {
          at: k.current,
          match: (Y) => ce.isElement(Y) && g.isBlock(e, Y),
          mode: "lowest",
          voids: o,
          batchDirty: s
        }), Q.insertNodes(e, R, {
          at: U.current,
          match: (Y) => fe.isText(Y) || g.isInline(e, Y),
          mode: "highest",
          voids: o,
          batchDirty: s
        }), !r.at) {
          var q;
          if (R.length > 0 && U.current ? q = O.previous(U.current) : $.length > 0 && k.current ? q = O.previous(k.current) : J.current && (q = O.previous(J.current)), q) {
            var te = g.end(e, q);
            Q.select(e, te);
          }
        }
        J.unref(), k.unref(), U.unref();
      }
    }
  });
}, lm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: r = "anchor"
  } = n, {
    selection: i
  } = e;
  if (i) {
    if (r === "anchor")
      Q.select(e, i.anchor);
    else if (r === "focus")
      Q.select(e, i.focus);
    else if (r === "start") {
      var [o] = V.edges(i);
      Q.select(e, o);
    } else if (r === "end") {
      var [, a] = V.edges(i);
      Q.select(e, a);
    }
  } else return;
}, cm = (t) => {
  var {
    selection: e
  } = t;
  e && t.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, fm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: r
  } = e, {
    distance: i = 1,
    unit: o = "character",
    reverse: a = !1
  } = n, {
    edge: s = null
  } = n;
  if (r) {
    s === "start" && (s = V.isBackward(r) ? "focus" : "anchor"), s === "end" && (s = V.isBackward(r) ? "anchor" : "focus");
    var {
      anchor: u,
      focus: l
    } = r, c = {
      distance: i,
      unit: o,
      ignoreNonSelectable: !0
    }, d = {};
    if (s == null || s === "anchor") {
      var p = a ? g.before(e, u, c) : g.after(e, u, c);
      p && (d.anchor = p);
    }
    if (s == null || s === "focus") {
      var v = a ? g.before(e, l, c) : g.after(e, l, c);
      v && (d.focus = v);
    }
    Q.setSelection(e, d);
  }
}, dm = (t, e) => {
  var {
    selection: n
  } = t;
  if (e = g.range(t, e), n) {
    Q.setSelection(t, e);
    return;
  }
  if (!V.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(ut.stringify(e)));
  t.apply({
    type: "set_selection",
    properties: n,
    newProperties: e
  });
};
function Mu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ku(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Mu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Mu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var pm = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: i
  } = e, {
    edge: o = "both"
  } = r;
  if (i) {
    o === "start" && (o = V.isBackward(i) ? "focus" : "anchor"), o === "end" && (o = V.isBackward(i) ? "anchor" : "focus");
    var {
      anchor: a,
      focus: s
    } = i, u = o === "anchor" ? a : s;
    Q.setSelection(e, {
      [o === "anchor" ? "anchor" : "focus"]: ku(ku({}, u), n)
    });
  }
}, hm = (t, e) => {
  var {
    selection: n
  } = t, r = {}, i = {};
  if (n) {
    for (var o in e)
      (o === "anchor" && e.anchor != null && !Oe.equals(e.anchor, n.anchor) || o === "focus" && e.focus != null && !Oe.equals(e.focus, n.focus) || o !== "anchor" && o !== "focus" && e[o] !== n[o]) && (r[o] = n[o], i[o] = e[o]);
    Object.keys(r).length > 0 && t.apply({
      type: "set_selection",
      properties: r,
      newProperties: i
    });
  }
}, vm = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: i = !1,
      voids: o = !1,
      mode: a = "lowest",
      batchDirty: s = !0
    } = r, {
      at: u,
      match: l,
      select: c
    } = r;
    if (re.isNode(n) && (n = [n]), n.length !== 0) {
      var [d] = n;
      if (u || (u = Ca(e), c !== !1 && (c = !0)), c == null && (c = !1), V.isRange(u))
        if (i || (u = g.unhangRange(e, u, {
          voids: o
        })), V.isCollapsed(u))
          u = u.anchor;
        else {
          var [, p] = V.edges(u), v = g.pointRef(e, p);
          Q.delete(e, {
            at: u
          }), u = v.unref();
        }
      if (Oe.isPoint(u)) {
        l == null && (fe.isText(d) ? l = (P) => fe.isText(P) : e.isInline(d) ? l = (P) => fe.isText(P) || g.isInline(e, P) : l = (P) => ce.isElement(P) && g.isBlock(e, P));
        var [m] = g.nodes(e, {
          at: u.path,
          match: l,
          mode: a,
          voids: o
        });
        if (m) {
          var [, h] = m, f = g.pathRef(e, h), C = g.isEnd(e, u, h);
          Q.splitNodes(e, {
            at: u,
            match: l,
            mode: a,
            voids: o
          });
          var w = f.unref();
          u = C ? O.next(w) : w;
        } else
          return;
      }
      var b = O.parent(u), S = u[u.length - 1];
      if (!(!o && g.void(e, {
        at: b
      }))) {
        if (s) {
          var D = [], E = O.levels(b);
          Xv(e, () => {
            var P = function() {
              var j = b.concat(S);
              S++;
              var T = {
                type: "insert_node",
                path: j,
                node: $
              };
              e.apply(T), u = O.next(u), D.push(T), fe.isText ? E.push(...Array.from(re.nodes($), (N) => {
                var [, K] = N;
                return j.concat(K);
              })) : E.push(j);
            };
            for (var $ of n)
              P();
          }, () => {
            rf(e, E, (P) => {
              var $ = P;
              for (var R of D)
                if (O.operationCanTransformPath(R) && ($ = O.transform($, R), !$))
                  return null;
              return $;
            });
          });
        } else
          for (var L of n) {
            var F = b.concat(S);
            S++, e.apply({
              type: "insert_node",
              path: F,
              node: L
            }), u = O.next(u);
          }
        if (u = O.previous(u), c) {
          var H = g.end(e, u);
          H && Q.select(e, H);
        }
      }
    }
  });
}, gm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      at: r = e.selection,
      mode: i = "lowest",
      voids: o = !1
    } = n, {
      match: a
    } = n;
    if (a == null && (a = O.isPath(r) ? Xn(e, r) : (S) => ce.isElement(S) && g.isBlock(e, S)), !!r) {
      var s = g.nodes(e, {
        at: r,
        match: a,
        mode: i,
        voids: o
      }), u = Array.from(s, (S) => {
        var [, D] = S;
        return g.pathRef(e, D);
      });
      for (var l of u) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = g.node(e, O.parent(c)), [p, v] = d, m = c[c.length - 1], {
          length: h
        } = p.children;
        if (h === 1) {
          var f = O.next(v);
          Q.moveNodes(e, {
            at: c,
            to: f,
            voids: o
          }), Q.removeNodes(e, {
            at: v,
            voids: o
          });
        } else if (m === 0)
          Q.moveNodes(e, {
            at: c,
            to: v,
            voids: o
          });
        else if (m === h - 1) {
          var C = O.next(v);
          Q.moveNodes(e, {
            at: c,
            to: C,
            voids: o
          });
        } else {
          var w = O.next(c), b = O.next(v);
          Q.splitNodes(e, {
            at: w,
            voids: o
          }), Q.moveNodes(e, {
            at: c,
            to: b,
            voids: o
          });
        }
      }
    }
  });
}, mm = ["text"], ym = ["children"], of = (t, e) => {
  if (ce.isElement(e)) {
    var n = e;
    return g.isVoid(t, e) ? !0 : n.children.length === 1 ? of(t, n.children[0]) : !1;
  } else return !g.isEditor(e);
}, Cm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      match: r,
      at: i = e.selection
    } = n, {
      hanging: o = !1,
      voids: a = !1,
      mode: s = "lowest"
    } = n;
    if (i) {
      if (r == null)
        if (O.isPath(i)) {
          var [u] = g.parent(e, i);
          r = (P) => u.children.includes(P);
        } else
          r = (P) => ce.isElement(P) && g.isBlock(e, P);
      if (!o && V.isRange(i) && (i = g.unhangRange(e, i, {
        voids: a
      })), V.isRange(i))
        if (V.isCollapsed(i))
          i = i.anchor;
        else {
          var [, l] = V.edges(i), c = g.pointRef(e, l);
          Q.delete(e, {
            at: i
          }), i = c.unref(), n.at == null && Q.select(e, i);
        }
      var [d] = g.nodes(e, {
        at: i,
        match: r,
        voids: a,
        mode: s
      }), p = g.previous(e, {
        at: i,
        match: r,
        voids: a,
        mode: s
      });
      if (!(!d || !p)) {
        var [v, m] = d, [h, f] = p;
        if (!(m.length === 0 || f.length === 0)) {
          var C = O.next(f), w = O.common(m, f), b = O.isSibling(m, f), S = Array.from(g.levels(e, {
            at: m
          }), (P) => {
            var [$] = P;
            return $;
          }).slice(w.length).slice(0, -1), D = g.above(e, {
            at: m,
            mode: "highest",
            match: (P) => S.includes(P) && of(e, P)
          }), E = D && g.pathRef(e, D[1]), L, F;
          if (fe.isText(v) && fe.isText(h)) {
            var H = Zt(v, mm);
            F = h.text.length, L = H;
          } else if (ce.isElement(v) && ce.isElement(h)) {
            var H = Zt(v, ym);
            F = h.children.length, L = H;
          } else
            throw new Error("Cannot merge the node at path [".concat(m, "] with the previous sibling because it is not the same kind: ").concat(ut.stringify(v), " ").concat(ut.stringify(h)));
          b || Q.moveNodes(e, {
            at: m,
            to: C,
            voids: a
          }), E && Q.removeNodes(e, {
            at: E.current,
            voids: a
          }), g.shouldMergeNodesRemovePrevNode(e, p, d) ? Q.removeNodes(e, {
            at: f,
            voids: a
          }) : e.apply({
            type: "merge_node",
            path: C,
            position: F,
            properties: L
          }), E && E.unref();
        }
      }
    }
  });
}, Dm = (t, e) => {
  g.withoutNormalizing(t, () => {
    var {
      to: n,
      at: r = t.selection,
      mode: i = "lowest",
      voids: o = !1
    } = e, {
      match: a
    } = e;
    if (r) {
      a == null && (a = O.isPath(r) ? Xn(t, r) : (v) => ce.isElement(v) && g.isBlock(t, v));
      var s = g.pathRef(t, n), u = g.nodes(t, {
        at: r,
        match: a,
        mode: i,
        voids: o
      }), l = Array.from(u, (v) => {
        var [, m] = v;
        return g.pathRef(t, m);
      });
      for (var c of l) {
        var d = c.unref(), p = s.current;
        d.length !== 0 && t.apply({
          type: "move_node",
          path: d,
          newPath: p
        }), s.current && O.isSibling(p, d) && O.isAfter(p, d) && (s.current = O.next(s.current));
      }
      s.unref();
    }
  });
}, bm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: r = !1,
      voids: i = !1,
      mode: o = "lowest"
    } = n, {
      at: a = e.selection,
      match: s
    } = n;
    if (a) {
      s == null && (s = O.isPath(a) ? Xn(e, a) : (v) => ce.isElement(v) && g.isBlock(e, v)), !r && V.isRange(a) && (a = g.unhangRange(e, a, {
        voids: i
      }));
      var u = g.nodes(e, {
        at: a,
        match: s,
        mode: o,
        voids: i
      }), l = Array.from(u, (v) => {
        var [, m] = v;
        return g.pathRef(e, m);
      });
      for (var c of l) {
        var d = c.unref();
        if (d) {
          var [p] = g.node(e, d);
          e.apply({
            type: "remove_node",
            path: d,
            node: p
          });
        }
      }
    }
  });
}, Em = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      match: i,
      at: o = e.selection,
      compare: a,
      merge: s
    } = r, {
      hanging: u = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: d = !1
    } = r;
    if (o) {
      if (i == null && (i = O.isPath(o) ? Xn(e, o) : (F) => ce.isElement(F) && g.isBlock(e, F)), !u && V.isRange(o) && (o = g.unhangRange(e, o, {
        voids: d
      })), c && V.isRange(o)) {
        if (V.isCollapsed(o) && g.leaf(e, o.anchor)[0].text.length > 0)
          return;
        var p = g.rangeRef(e, o, {
          affinity: "inward"
        }), [v, m] = V.edges(o), h = l === "lowest" ? "lowest" : "highest", f = g.isEnd(e, m, m.path);
        Q.splitNodes(e, {
          at: m,
          match: i,
          mode: h,
          voids: d,
          always: !f
        });
        var C = g.isStart(e, v, v.path);
        Q.splitNodes(e, {
          at: v,
          match: i,
          mode: h,
          voids: d,
          always: !C
        }), o = p.unref(), r.at == null && Q.select(e, o);
      }
      a || (a = (F, H) => F !== H);
      for (var [w, b] of g.nodes(e, {
        at: o,
        match: i,
        mode: l,
        voids: d
      })) {
        var S = {}, D = {};
        if (b.length !== 0) {
          var E = !1;
          for (var L in n)
            L === "children" || L === "text" || a(n[L], w[L]) && (E = !0, w.hasOwnProperty(L) && (S[L] = w[L]), s ? n[L] != null && (D[L] = s(w[L], n[L])) : n[L] != null && (D[L] = n[L]));
          E && e.apply({
            type: "set_node",
            path: b,
            properties: S,
            newProperties: D
          });
        }
      }
    }
  });
}, wm = (t, e) => {
  if (V.isCollapsed(e))
    return e.anchor;
  var [, n] = V.edges(e), r = g.pointRef(t, n);
  return Q.delete(t, {
    at: e
  }), r.unref();
}, Bm = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: r = "lowest",
      voids: i = !1
    } = n, {
      match: o,
      at: a = e.selection,
      height: s = 0,
      always: u = !1
    } = n;
    if (o == null && (o = (ie) => ce.isElement(ie) && g.isBlock(e, ie)), V.isRange(a) && (a = wm(e, a)), O.isPath(a)) {
      var l = a, c = g.point(e, l), [d] = g.parent(e, l);
      o = (ie) => ie === d, s = c.path.length - l.length + 1, a = c, u = !0;
    }
    if (a) {
      var p = g.pointRef(e, a, {
        affinity: "backward"
      }), v;
      try {
        var [m] = g.nodes(e, {
          at: a,
          match: o,
          mode: r,
          voids: i
        });
        if (!m)
          return;
        var h = g.void(e, {
          at: a,
          mode: "highest"
        }), f = 0;
        if (!i && h) {
          var [C, w] = h;
          if (ce.isElement(C) && e.isInline(C)) {
            var b = g.after(e, w);
            if (!b) {
              var S = {
                text: ""
              }, D = O.next(w);
              Q.insertNodes(e, S, {
                at: D,
                voids: i
              }), b = g.point(e, D);
            }
            a = b, u = !0;
          }
          var E = a.path.length - w.length;
          s = E + 1, u = !0;
        }
        v = g.pointRef(e, a);
        var L = a.path.length - s, [, F] = m, H = a.path.slice(0, L), P = s === 0 ? a.offset : a.path[L] + f;
        for (var [$, R] of g.levels(e, {
          at: H,
          reverse: !0,
          voids: i
        })) {
          var j = !1;
          if (R.length < F.length || R.length === 0 || !i && ce.isElement($) && g.isVoid(e, $))
            break;
          var T = p.current, N = g.isEnd(e, T, R);
          if (u || !p || !g.isEdge(e, T, R)) {
            j = !0;
            var K = re.extractProps($);
            e.apply({
              type: "split_node",
              path: R,
              position: P,
              properties: K
            });
          }
          P = R[R.length - 1] + (j || N ? 1 : 0);
        }
        if (n.at == null) {
          var _ = v.current || g.end(e, []);
          Q.select(e, _);
        }
      } finally {
        var oe;
        p.unref(), (oe = v) === null || oe === void 0 || oe.unref();
      }
    }
  });
}, xm = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(n) || (n = [n]);
  var i = {};
  for (var o of n)
    i[o] = null;
  Q.setNodes(e, i, r);
}, Am = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: r = "lowest",
      split: i = !1,
      voids: o = !1
    } = n, {
      at: a = e.selection,
      match: s
    } = n;
    if (a) {
      s == null && (s = O.isPath(a) ? Xn(e, a) : (v) => ce.isElement(v) && g.isBlock(e, v)), O.isPath(a) && (a = g.range(e, a));
      var u = V.isRange(a) ? g.rangeRef(e, a) : null, l = g.nodes(e, {
        at: a,
        match: s,
        mode: r,
        voids: o
      }), c = Array.from(
        l,
        (v) => {
          var [, m] = v;
          return g.pathRef(e, m);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var m = p.unref(), [h] = g.node(e, m), f = g.range(e, m);
        i && u && (f = V.intersection(u.current, f)), Q.liftNodes(e, {
          at: f,
          match: (C) => ce.isAncestor(h) && h.children.includes(C),
          voids: o
        });
      };
      for (var p of c)
        d();
      u && u.unref();
    }
  });
};
function Tu(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Ru(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Tu(Object(n), !0).forEach(function(r) {
      yt(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : Tu(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Lm = function(e, n) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: i = "lowest",
      split: o = !1,
      voids: a = !1
    } = r, {
      match: s,
      at: u = e.selection
    } = r;
    if (u) {
      if (s == null && (O.isPath(u) ? s = Xn(e, u) : e.isInline(n) ? s = (f) => ce.isElement(f) && g.isInline(e, f) || fe.isText(f) : s = (f) => ce.isElement(f) && g.isBlock(e, f)), o && V.isRange(u)) {
        var [l, c] = V.edges(u), d = g.rangeRef(e, u, {
          affinity: "inward"
        });
        Q.splitNodes(e, {
          at: c,
          match: s,
          voids: a
        }), Q.splitNodes(e, {
          at: l,
          match: s,
          voids: a
        }), u = d.unref(), r.at == null && Q.select(e, u);
      }
      var p = Array.from(g.nodes(e, {
        at: u,
        match: e.isInline(n) ? (f) => ce.isElement(f) && g.isBlock(e, f) : (f) => g.isEditor(f),
        mode: "lowest",
        voids: a
      })), v = function() {
        var C = V.isRange(u) ? V.intersection(u, g.range(e, h)) : u;
        if (!C)
          return 0;
        var w = Array.from(g.nodes(e, {
          at: C,
          match: s,
          mode: i,
          voids: a
        }));
        if (w.length > 0) {
          var [b] = w, S = w[w.length - 1], [, D] = b, [, E] = S;
          if (D.length === 0 && E.length === 0)
            return 0;
          var L = O.equals(D, E) ? O.parent(D) : O.common(D, E), F = g.range(e, D, E), H = g.node(e, L), [P] = H, $ = L.length + 1, R = O.next(E.slice(0, $)), j = Ru(Ru({}, n), {}, {
            children: []
          });
          Q.insertNodes(e, j, {
            at: R,
            voids: a
          }), Q.moveNodes(e, {
            at: F,
            match: (T) => ce.isAncestor(P) && P.children.includes(T),
            to: R.concat(0),
            voids: a
          });
        }
      }, m;
      for (var [, h] of p)
        m = v();
    }
  });
}, Om = () => {
  var t = {
    children: [],
    operations: [],
    selection: null,
    marks: null,
    isElementReadOnly: () => !1,
    isInline: () => !1,
    isSelectable: () => !0,
    isVoid: () => !1,
    markableVoid: () => !1,
    onChange: () => {
    },
    // Core
    apply: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Jv(t, ...r);
    },
    // Editor
    addMark: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ig(t, ...r);
    },
    deleteBackward: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return sg(t, ...r);
    },
    deleteForward: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ug(t, ...r);
    },
    deleteFragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return lg(t, ...r);
    },
    getFragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return eg(t, ...r);
    },
    insertBreak: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Dg(t, ...r);
    },
    insertSoftBreak: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Eg(t, ...r);
    },
    insertFragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return um(t, ...r);
    },
    insertNode: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return bg(t, ...r);
    },
    insertText: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Bg(t, ...r);
    },
    normalizeNode: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return tg(t, ...r);
    },
    removeMark: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return em(t, ...r);
    },
    getDirtyPaths: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Qv(t, ...r);
    },
    shouldNormalize: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ng(t, ...r);
    },
    // Editor interface
    above: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return rg(t, ...r);
    },
    after: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return og(t, ...r);
    },
    before: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return ag(t, ...r);
    },
    collapse: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return lm(t, ...r);
    },
    delete: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return sm(t, ...r);
    },
    deselect: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return cm(t, ...r);
    },
    edges: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return cg(t, ...r);
    },
    elementReadOnly: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return fg(t, ...r);
    },
    end: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return dg(t, ...r);
    },
    first: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return pg(t, ...r);
    },
    fragment: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return hg(t, ...r);
    },
    getMarks: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ig(t, ...r);
    },
    hasBlocks: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return gg(t, ...r);
    },
    hasInlines: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return mg(t, ...r);
    },
    hasPath: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return yg(t, ...r);
    },
    hasTexts: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Cg(t, ...r);
    },
    insertNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return vm(t, ...r);
    },
    isBlock: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return xg(t, ...r);
    },
    isEdge: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ag(t, ...r);
    },
    isEmpty: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Lg(t, ...r);
    },
    isEnd: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Og(t, ...r);
    },
    isNormalizing: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Sg(t, ...r);
    },
    isStart: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Pg(t, ...r);
    },
    last: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Fg(t, ...r);
    },
    leaf: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Mg(t, ...r);
    },
    levels: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return kg(t, ...r);
    },
    liftNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return gm(t, ...r);
    },
    mergeNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Cm(t, ...r);
    },
    move: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return fm(t, ...r);
    },
    moveNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Dm(t, ...r);
    },
    next: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return jg(t, ...r);
    },
    node: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ng(t, ...r);
    },
    nodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return _g(t, ...r);
    },
    normalize: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return $g(t, ...r);
    },
    parent: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return zg(t, ...r);
    },
    path: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Hg(t, ...r);
    },
    pathRef: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Wg(t, ...r);
    },
    pathRefs: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Ug(t, ...r);
    },
    point: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Gg(t, ...r);
    },
    pointRef: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Vg(t, ...r);
    },
    pointRefs: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return qg(t, ...r);
    },
    positions: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Zg(t, ...r);
    },
    previous: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Yg(t, ...r);
    },
    range: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Jg(t, ...r);
    },
    rangeRef: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Kg(t, ...r);
    },
    rangeRefs: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Xg(t, ...r);
    },
    removeNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return bm(t, ...r);
    },
    select: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return dm(t, ...r);
    },
    setNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Em(t, ...r);
    },
    setNormalizing: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return tm(t, ...r);
    },
    setPoint: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return pm(t, ...r);
    },
    setSelection: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return hm(t, ...r);
    },
    splitNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Bm(t, ...r);
    },
    start: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return nm(t, ...r);
    },
    string: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return rm(t, ...r);
    },
    unhangRange: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return im(t, ...r);
    },
    unsetNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return xm(t, ...r);
    },
    unwrapNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Am(t, ...r);
    },
    void: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return vg(t, ...r);
    },
    withoutNormalizing: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return om(t, ...r);
    },
    wrapNodes: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return Lm(t, ...r);
    },
    shouldMergeNodesRemovePrevNode: function() {
      for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++)
        r[i] = arguments[i];
      return am(t, ...r);
    }
  };
  return t;
};
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Iu(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function Sm(t) {
  var e, n;
  return Iu(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (n = e.prototype, !(Iu(n) === !1 || n.hasOwnProperty("isPrototypeOf") === !1)));
}
var Pm = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(t) {
    return Sm(t) && Array.isArray(t.redos) && Array.isArray(t.undos) && (t.redos.length === 0 || un.isOperationList(t.redos[0].operations)) && (t.undos.length === 0 || un.isOperationList(t.undos[0].operations));
  }
}, ao = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), xn = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(t) {
    return Pm.isHistory(t.history) && g.isEditor(t);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(t) {
    return cr.get(t);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(t) {
    return ao.get(t);
  },
  /**
   * Redo to the previous saved state.
   */
  redo(t) {
    t.redo();
  },
  /**
   * Undo to the previous saved state.
   */
  undo(t) {
    t.undo();
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, These operations will
   * be merged into the previous history.
   */
  withMerging(t, e) {
    var n = xn.isMerging(t);
    cr.set(t, !0), e(), cr.set(t, n);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(t, e) {
    var n = xn.isMerging(t);
    cr.set(t, !1), e(), cr.set(t, n);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(t, e) {
    var n = xn.isSaving(t);
    ao.set(t, !1), e(), ao.set(t, n);
  }
}, Fm = (t) => {
  var e = t, {
    apply: n
  } = e;
  return e.history = {
    undos: [],
    redos: []
  }, e.redo = () => {
    var {
      history: r
    } = e, {
      redos: i
    } = r;
    if (i.length > 0) {
      var o = i[i.length - 1];
      o.selectionBefore && Q.setSelection(e, o.selectionBefore), xn.withoutSaving(e, () => {
        g.withoutNormalizing(e, () => {
          for (var a of o.operations)
            e.apply(a);
        });
      }), r.redos.pop(), e.writeHistory("undos", o);
    }
  }, e.undo = () => {
    var {
      history: r
    } = e, {
      undos: i
    } = r;
    if (i.length > 0) {
      var o = i[i.length - 1];
      xn.withoutSaving(e, () => {
        g.withoutNormalizing(e, () => {
          var a = o.operations.map(un.inverse).reverse();
          for (var s of a)
            e.apply(s);
          o.selectionBefore && Q.setSelection(e, o.selectionBefore);
        });
      }), e.writeHistory("redos", o), r.undos.pop();
    }
  }, e.apply = (r) => {
    var {
      operations: i,
      history: o
    } = e, {
      undos: a
    } = o, s = a[a.length - 1], u = s && s.operations[s.operations.length - 1], l = xn.isSaving(e), c = xn.isMerging(e);
    if (l == null && (l = km(r)), l) {
      if (c == null && (s == null ? c = !1 : i.length !== 0 ? c = !0 : c = Mm(r, u)), s && c)
        s.operations.push(r);
      else {
        var d = {
          operations: [r],
          selectionBefore: e.selection
        };
        e.writeHistory("undos", d);
      }
      for (; a.length > 100; )
        a.shift();
      o.redos = [];
    }
    n(r);
  }, e.writeHistory = (r, i) => {
    e.history[r].push(i);
  }, e;
}, Mm = (t, e) => !!(e && t.type === "insert_text" && e.type === "insert_text" && t.offset === e.offset + e.text.length && O.equals(t.path, e.path) || e && t.type === "remove_text" && e.type === "remove_text" && t.offset + t.text.length === e.offset && O.equals(t.path, e.path)), km = (t, e) => t.type !== "set_selection", Tm = jm, af = "֑-߿יִ-﷽ﹰ-ﻼ", sf = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Rm = new RegExp("^[^" + sf + "]*[" + af + "]"), Im = new RegExp("^[^" + af + "]*[" + sf + "]");
function jm(t) {
  return t = String(t || ""), Rm.test(t) ? "rtl" : Im.test(t) ? "ltr" : "neutral";
}
const uf = /* @__PURE__ */ Pi(Tm);
function Nm(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var Ea = Nm, _m = typeof He == "object" && He && He.Object === Object && He, $m = _m, zm = $m, Wm = typeof self == "object" && self && self.Object === Object && self, Um = zm || Wm || Function("return this")(), lf = Um, Hm = lf, Vm = function() {
  return Hm.Date.now();
}, qm = Vm, Gm = /\s/;
function Zm(t) {
  for (var e = t.length; e-- && Gm.test(t.charAt(e)); )
    ;
  return e;
}
var Ym = Zm, Km = Ym, Xm = /^\s+/;
function Jm(t) {
  return t && t.slice(0, Km(t) + 1).replace(Xm, "");
}
var Qm = Jm, ey = lf, ty = ey.Symbol, cf = ty, ju = cf, ff = Object.prototype, ny = ff.hasOwnProperty, ry = ff.toString, fr = ju ? ju.toStringTag : void 0;
function iy(t) {
  var e = ny.call(t, fr), n = t[fr];
  try {
    t[fr] = void 0;
    var r = !0;
  } catch {
  }
  var i = ry.call(t);
  return r && (e ? t[fr] = n : delete t[fr]), i;
}
var oy = iy, ay = Object.prototype, sy = ay.toString;
function uy(t) {
  return sy.call(t);
}
var ly = uy, Nu = cf, cy = oy, fy = ly, dy = "[object Null]", py = "[object Undefined]", _u = Nu ? Nu.toStringTag : void 0;
function hy(t) {
  return t == null ? t === void 0 ? py : dy : _u && _u in Object(t) ? cy(t) : fy(t);
}
var vy = hy;
function gy(t) {
  return t != null && typeof t == "object";
}
var my = gy, yy = vy, Cy = my, Dy = "[object Symbol]";
function by(t) {
  return typeof t == "symbol" || Cy(t) && yy(t) == Dy;
}
var Ey = by, wy = Qm, $u = Ea, By = Ey, zu = NaN, xy = /^[-+]0x[0-9a-f]+$/i, Ay = /^0b[01]+$/i, Ly = /^0o[0-7]+$/i, Oy = parseInt;
function Sy(t) {
  if (typeof t == "number")
    return t;
  if (By(t))
    return zu;
  if ($u(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = $u(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = wy(t);
  var n = Ay.test(t);
  return n || Ly.test(t) ? Oy(t.slice(2), n ? 2 : 8) : xy.test(t) ? zu : +t;
}
var Py = Sy, Fy = Ea, so = qm, Wu = Py, My = "Expected a function", ky = Math.max, Ty = Math.min;
function Ry(t, e, n) {
  var r, i, o, a, s, u, l = 0, c = !1, d = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(My);
  e = Wu(e) || 0, Fy(n) && (c = !!n.leading, d = "maxWait" in n, o = d ? ky(Wu(n.maxWait) || 0, e) : o, p = "trailing" in n ? !!n.trailing : p);
  function v(E) {
    var L = r, F = i;
    return r = i = void 0, l = E, a = t.apply(F, L), a;
  }
  function m(E) {
    return l = E, s = setTimeout(C, e), c ? v(E) : a;
  }
  function h(E) {
    var L = E - u, F = E - l, H = e - L;
    return d ? Ty(H, o - F) : H;
  }
  function f(E) {
    var L = E - u, F = E - l;
    return u === void 0 || L >= e || L < 0 || d && F >= o;
  }
  function C() {
    var E = so();
    if (f(E))
      return w(E);
    s = setTimeout(C, h(E));
  }
  function w(E) {
    return s = void 0, p && r ? v(E) : (r = i = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0;
  }
  function S() {
    return s === void 0 ? a : w(so());
  }
  function D() {
    var E = so(), L = f(E);
    if (r = arguments, i = this, u = E, L) {
      if (s === void 0)
        return m(u);
      if (d)
        return clearTimeout(s), s = setTimeout(C, e), v(u);
    }
    return s === void 0 && (s = setTimeout(C, e)), a;
  }
  return D.cancel = b, D.flush = S, D;
}
var df = Ry;
const Iy = /* @__PURE__ */ Pi(df);
var jy = df, Ny = Ea, _y = "Expected a function";
function $y(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(_y);
  return Ny(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), jy(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
var zy = $y;
const Wy = /* @__PURE__ */ Pi(zy), Uu = (t) => typeof t == "object" && t != null && t.nodeType === 1, Hu = (t, e) => (!e || t !== "hidden") && t !== "visible" && t !== "clip", uo = (t, e) => {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    const n = getComputedStyle(t, null);
    return Hu(n.overflowY, e) || Hu(n.overflowX, e) || ((r) => {
      const i = ((o) => {
        if (!o.ownerDocument || !o.ownerDocument.defaultView) return null;
        try {
          return o.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(r);
      return !!i && (i.clientHeight < r.scrollHeight || i.clientWidth < r.scrollWidth);
    })(t);
  }
  return !1;
}, Vr = (t, e, n, r, i, o, a, s) => o < t && a > e || o > t && a < e ? 0 : o <= t && s <= n || a >= e && s >= n ? o - t - r : a > e && s < n || o < t && s > n ? a - e + i : 0, Uy = (t) => {
  const e = t.parentElement;
  return e ?? (t.getRootNode().host || null);
}, Vu = (t, e) => {
  var n, r, i, o;
  if (typeof document > "u") return [];
  const { scrollMode: a, block: s, inline: u, boundary: l, skipOverflowHiddenElements: c } = e, d = typeof l == "function" ? l : (K) => K !== l;
  if (!Uu(t)) throw new TypeError("Invalid target");
  const p = document.scrollingElement || document.documentElement, v = [];
  let m = t;
  for (; Uu(m) && d(m); ) {
    if (m = Uy(m), m === p) {
      v.push(m);
      break;
    }
    m != null && m === document.body && uo(m) && !uo(document.documentElement) || m != null && uo(m, c) && v.push(m);
  }
  const h = (r = (n = window.visualViewport) == null ? void 0 : n.width) != null ? r : innerWidth, f = (o = (i = window.visualViewport) == null ? void 0 : i.height) != null ? o : innerHeight, { scrollX: C, scrollY: w } = window, { height: b, width: S, top: D, right: E, bottom: L, left: F } = t.getBoundingClientRect(), { top: H, right: P, bottom: $, left: R } = ((K) => {
    const _ = window.getComputedStyle(K);
    return { top: parseFloat(_.scrollMarginTop) || 0, right: parseFloat(_.scrollMarginRight) || 0, bottom: parseFloat(_.scrollMarginBottom) || 0, left: parseFloat(_.scrollMarginLeft) || 0 };
  })(t);
  let j = s === "start" || s === "nearest" ? D - H : s === "end" ? L + $ : D + b / 2 - H + $, T = u === "center" ? F + S / 2 - R + P : u === "end" ? E + P : F - R;
  const N = [];
  for (let K = 0; K < v.length; K++) {
    const _ = v[K], { height: oe, width: ie, top: k, right: U, bottom: J, left: q } = _.getBoundingClientRect();
    if (a === "if-needed" && D >= 0 && F >= 0 && L <= f && E <= h && D >= k && L <= J && F >= q && E <= U) return N;
    const te = getComputedStyle(_), Y = parseInt(te.borderLeftWidth, 10), y = parseInt(te.borderTopWidth, 10), z = parseInt(te.borderRightWidth, 10), W = parseInt(te.borderBottomWidth, 10);
    let M = 0, X = 0;
    const ne = "offsetWidth" in _ ? _.offsetWidth - _.clientWidth - Y - z : 0, G = "offsetHeight" in _ ? _.offsetHeight - _.clientHeight - y - W : 0, le = "offsetWidth" in _ ? _.offsetWidth === 0 ? 0 : ie / _.offsetWidth : 0, se = "offsetHeight" in _ ? _.offsetHeight === 0 ? 0 : oe / _.offsetHeight : 0;
    if (p === _) M = s === "start" ? j : s === "end" ? j - f : s === "nearest" ? Vr(w, w + f, f, y, W, w + j, w + j + b, b) : j - f / 2, X = u === "start" ? T : u === "center" ? T - h / 2 : u === "end" ? T - h : Vr(C, C + h, h, Y, z, C + T, C + T + S, S), M = Math.max(0, M + w), X = Math.max(0, X + C);
    else {
      M = s === "start" ? j - k - y : s === "end" ? j - J + W + G : s === "nearest" ? Vr(k, J, oe, y, W + G, j, j + b, b) : j - (k + oe / 2) + G / 2, X = u === "start" ? T - q - Y : u === "center" ? T - (q + ie / 2) + ne / 2 : u === "end" ? T - U + z + ne : Vr(q, U, ie, Y, z + ne, T, T + S, S);
      const { scrollLeft: pe, scrollTop: he } = _;
      M = se === 0 ? 0 : Math.max(0, Math.min(he + M / se, _.scrollHeight - oe / se + G)), X = le === 0 ? 0 : Math.max(0, Math.min(pe + X / le, _.scrollWidth - ie / le + ne)), j += he - M, T += pe - X;
    }
    N.push({ el: _, top: M, left: X });
  }
  return N;
}, Hy = (t) => t === !1 ? { block: "end", inline: "nearest" } : ((e) => e === Object(e) && Object.keys(e).length !== 0)(t) ? t : { block: "start", inline: "nearest" };
function Vy(t, e) {
  if (!t.isConnected || !((i) => {
    let o = i;
    for (; o && o.parentNode; ) {
      if (o.parentNode === document) return !0;
      o = o.parentNode instanceof ShadowRoot ? o.parentNode.host : o.parentNode;
    }
    return !1;
  })(t)) return;
  const n = ((i) => {
    const o = window.getComputedStyle(i);
    return { top: parseFloat(o.scrollMarginTop) || 0, right: parseFloat(o.scrollMarginRight) || 0, bottom: parseFloat(o.scrollMarginBottom) || 0, left: parseFloat(o.scrollMarginLeft) || 0 };
  })(t);
  if (((i) => typeof i == "object" && typeof i.behavior == "function")(e)) return e.behavior(Vu(t, e));
  const r = typeof e == "boolean" || e == null ? void 0 : e.behavior;
  for (const { el: i, top: o, left: a } of Vu(t, Hy(e))) {
    const s = o - n.top + n.bottom, u = a - n.left + n.right;
    i.scroll({ top: s, left: u, behavior: r });
  }
}
var Ln = [], qy = function() {
  return Ln.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, Gy = function() {
  return Ln.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, qu = "ResizeObserver loop completed with undelivered notifications.", Zy = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: qu
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = qu), window.dispatchEvent(t);
}, Br;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Br || (Br = {}));
var On = function(t) {
  return Object.freeze(t);
}, Yy = /* @__PURE__ */ function() {
  function t(e, n) {
    this.inlineSize = e, this.blockSize = n, On(this);
  }
  return t;
}(), pf = function() {
  function t(e, n, r, i) {
    return this.x = e, this.y = n, this.width = r, this.height = i, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, On(this);
  }
  return t.prototype.toJSON = function() {
    var e = this, n = e.x, r = e.y, i = e.top, o = e.right, a = e.bottom, s = e.left, u = e.width, l = e.height;
    return { x: n, y: r, top: i, right: o, bottom: a, left: s, width: u, height: l };
  }, t.fromRect = function(e) {
    return new t(e.x, e.y, e.width, e.height);
  }, t;
}(), wa = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, hf = function(t) {
  if (wa(t)) {
    var e = t.getBBox(), n = e.width, r = e.height;
    return !n && !r;
  }
  var i = t, o = i.offsetWidth, a = i.offsetHeight;
  return !(o || a || t.getClientRects().length);
}, Gu = function(t) {
  var e;
  if (t instanceof Element)
    return !0;
  var n = (e = t == null ? void 0 : t.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(n && t instanceof n.Element);
}, Ky = function(t) {
  switch (t.tagName) {
    case "INPUT":
      if (t.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return !0;
  }
  return !1;
}, vr = typeof window < "u" ? window : {}, qr = /* @__PURE__ */ new WeakMap(), Zu = /auto|scroll/, Xy = /^tb|vertical/, Jy = /msie|trident/i.test(vr.navigator && vr.navigator.userAgent), It = function(t) {
  return parseFloat(t || "0");
}, Gn = function(t, e, n) {
  return t === void 0 && (t = 0), e === void 0 && (e = 0), n === void 0 && (n = !1), new Yy((n ? e : t) || 0, (n ? t : e) || 0);
}, Yu = On({
  devicePixelContentBoxSize: Gn(),
  borderBoxSize: Gn(),
  contentBoxSize: Gn(),
  contentRect: new pf(0, 0, 0, 0)
}), vf = function(t, e) {
  if (e === void 0 && (e = !1), qr.has(t) && !e)
    return qr.get(t);
  if (hf(t))
    return qr.set(t, Yu), Yu;
  var n = getComputedStyle(t), r = wa(t) && t.ownerSVGElement && t.getBBox(), i = !Jy && n.boxSizing === "border-box", o = Xy.test(n.writingMode || ""), a = !r && Zu.test(n.overflowY || ""), s = !r && Zu.test(n.overflowX || ""), u = r ? 0 : It(n.paddingTop), l = r ? 0 : It(n.paddingRight), c = r ? 0 : It(n.paddingBottom), d = r ? 0 : It(n.paddingLeft), p = r ? 0 : It(n.borderTopWidth), v = r ? 0 : It(n.borderRightWidth), m = r ? 0 : It(n.borderBottomWidth), h = r ? 0 : It(n.borderLeftWidth), f = d + l, C = u + c, w = h + v, b = p + m, S = s ? t.offsetHeight - b - t.clientHeight : 0, D = a ? t.offsetWidth - w - t.clientWidth : 0, E = i ? f + w : 0, L = i ? C + b : 0, F = r ? r.width : It(n.width) - E - D, H = r ? r.height : It(n.height) - L - S, P = F + f + D + w, $ = H + C + S + b, R = On({
    devicePixelContentBoxSize: Gn(Math.round(F * devicePixelRatio), Math.round(H * devicePixelRatio), o),
    borderBoxSize: Gn(P, $, o),
    contentBoxSize: Gn(F, H, o),
    contentRect: new pf(d, u, F, H)
  });
  return qr.set(t, R), R;
}, gf = function(t, e, n) {
  var r = vf(t, n), i = r.borderBoxSize, o = r.contentBoxSize, a = r.devicePixelContentBoxSize;
  switch (e) {
    case Br.DEVICE_PIXEL_CONTENT_BOX:
      return a;
    case Br.BORDER_BOX:
      return i;
    default:
      return o;
  }
}, Qy = /* @__PURE__ */ function() {
  function t(e) {
    var n = vf(e);
    this.target = e, this.contentRect = n.contentRect, this.borderBoxSize = On([n.borderBoxSize]), this.contentBoxSize = On([n.contentBoxSize]), this.devicePixelContentBoxSize = On([n.devicePixelContentBoxSize]);
  }
  return t;
}(), mf = function(t) {
  if (hf(t))
    return 1 / 0;
  for (var e = 0, n = t.parentNode; n; )
    e += 1, n = n.parentNode;
  return e;
}, e0 = function() {
  var t = 1 / 0, e = [];
  Ln.forEach(function(a) {
    if (a.activeTargets.length !== 0) {
      var s = [];
      a.activeTargets.forEach(function(l) {
        var c = new Qy(l.target), d = mf(l.target);
        s.push(c), l.lastReportedSize = gf(l.target, l.observedBox), d < t && (t = d);
      }), e.push(function() {
        a.callback.call(a.observer, s, a.observer);
      }), a.activeTargets.splice(0, a.activeTargets.length);
    }
  });
  for (var n = 0, r = e; n < r.length; n++) {
    var i = r[n];
    i();
  }
  return t;
}, Ku = function(t) {
  Ln.forEach(function(n) {
    n.activeTargets.splice(0, n.activeTargets.length), n.skippedTargets.splice(0, n.skippedTargets.length), n.observationTargets.forEach(function(i) {
      i.isActive() && (mf(i.target) > t ? n.activeTargets.push(i) : n.skippedTargets.push(i));
    });
  });
}, t0 = function() {
  var t = 0;
  for (Ku(t); qy(); )
    t = e0(), Ku(t);
  return Gy() && Zy(), t > 0;
}, lo, yf = [], n0 = function() {
  return yf.splice(0).forEach(function(t) {
    return t();
  });
}, r0 = function(t) {
  if (!lo) {
    var e = 0, n = document.createTextNode(""), r = { characterData: !0 };
    new MutationObserver(function() {
      return n0();
    }).observe(n, r), lo = function() {
      n.textContent = "".concat(e ? e-- : e++);
    };
  }
  yf.push(t), lo();
}, i0 = function(t) {
  r0(function() {
    requestAnimationFrame(t);
  });
}, li = 0, o0 = function() {
  return !!li;
}, a0 = 250, s0 = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Xu = [
  "resize",
  "load",
  "transitionend",
  "animationend",
  "animationstart",
  "animationiteration",
  "keyup",
  "keydown",
  "mouseup",
  "mousedown",
  "mouseover",
  "mouseout",
  "blur",
  "focus"
], Ju = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, co = !1, u0 = function() {
  function t() {
    var e = this;
    this.stopped = !0, this.listener = function() {
      return e.schedule();
    };
  }
  return t.prototype.run = function(e) {
    var n = this;
    if (e === void 0 && (e = a0), !co) {
      co = !0;
      var r = Ju(e);
      i0(function() {
        var i = !1;
        try {
          i = t0();
        } finally {
          if (co = !1, e = r - Ju(), !o0())
            return;
          i ? n.run(1e3) : e > 0 ? n.run(e) : n.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var e = this, n = function() {
      return e.observer && e.observer.observe(document.body, s0);
    };
    document.body ? n() : vr.addEventListener("DOMContentLoaded", n);
  }, t.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Xu.forEach(function(n) {
      return vr.addEventListener(n, e.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), Xu.forEach(function(n) {
      return vr.removeEventListener(n, e.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Wo = new u0(), Qu = function(t) {
  !li && t > 0 && Wo.start(), li += t, !li && Wo.stop();
}, l0 = function(t) {
  return !wa(t) && !Ky(t) && getComputedStyle(t).display === "inline";
}, c0 = function() {
  function t(e, n) {
    this.target = e, this.observedBox = n || Br.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var e = gf(this.target, this.observedBox, !0);
    return l0(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, t;
}(), f0 = /* @__PURE__ */ function() {
  function t(e, n) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = n;
  }
  return t;
}(), Gr = /* @__PURE__ */ new WeakMap(), el = function(t, e) {
  for (var n = 0; n < t.length; n += 1)
    if (t[n].target === e)
      return n;
  return -1;
}, Zr = function() {
  function t() {
  }
  return t.connect = function(e, n) {
    var r = new f0(e, n);
    Gr.set(e, r);
  }, t.observe = function(e, n, r) {
    var i = Gr.get(e), o = i.observationTargets.length === 0;
    el(i.observationTargets, n) < 0 && (o && Ln.push(i), i.observationTargets.push(new c0(n, r && r.box)), Qu(1), Wo.schedule());
  }, t.unobserve = function(e, n) {
    var r = Gr.get(e), i = el(r.observationTargets, n), o = r.observationTargets.length === 1;
    i >= 0 && (o && Ln.splice(Ln.indexOf(r), 1), r.observationTargets.splice(i, 1), Qu(-1));
  }, t.disconnect = function(e) {
    var n = this, r = Gr.get(e);
    r.observationTargets.slice().forEach(function(i) {
      return n.unobserve(e, i.target);
    }), r.activeTargets.splice(0, r.activeTargets.length);
  }, t;
}(), d0 = function() {
  function t(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Zr.connect(this, e);
  }
  return t.prototype.observe = function(e, n) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Gu(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Zr.observe(this, e, n);
  }, t.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Gu(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Zr.unobserve(this, e);
  }, t.prototype.disconnect = function() {
    Zr.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
function p0(t, e) {
  if (t == null) return {};
  var n = {}, r = Object.keys(t), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(e.indexOf(i) >= 0) && (n[i] = t[i]);
  return n;
}
function Yn(t, e) {
  if (t == null) return {};
  var n = p0(t, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(t);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(t, r) && (n[r] = t[r]);
  }
  return n;
}
function xr(t) {
  "@babel/helpers - typeof";
  return xr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, xr(t);
}
function h0(t, e) {
  if (xr(t) !== "object" || t === null) return t;
  var n = t[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(t, e || "default");
    if (xr(r) !== "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function v0(t) {
  var e = h0(t, "string");
  return xr(e) === "symbol" ? e : String(e);
}
function Ft(t, e, n) {
  return e = v0(e), e in t ? Object.defineProperty(t, e, {
    value: n,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = n, t;
}
var Ba = /* @__PURE__ */ ct(null), dn = () => {
  var t = je(Ba);
  if (!t)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return t;
}, fo, po, Cf = parseInt(me.version.split(".")[0], 10), Df = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, tl = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), mt = typeof navigator < "u" && /Android/.test(navigator.userAgent), qn = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), En = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), g0 = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), bf = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), m0 = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), y0 = mt && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), C0 = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), D0 = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), b0 = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), ci = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
typeof navigator < "u" && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((fo = navigator.userAgent.match(/Version\/(\d+)/)) !== null && fo !== void 0 && fo[1] && parseInt((po = navigator.userAgent.match(/Version\/(\d+)/)) === null || po === void 0 ? void 0 : po[1], 10) < 17);
var Qt = (!m0 || !y0) && !g0 && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", xa = /* @__PURE__ */ new WeakMap(), Aa = /* @__PURE__ */ new WeakMap(), Ef = /* @__PURE__ */ new WeakMap(), fi = /* @__PURE__ */ new WeakMap(), Uo = /* @__PURE__ */ new WeakMap(), Ar = /* @__PURE__ */ new WeakMap(), Sn = /* @__PURE__ */ new WeakMap(), Bi = /* @__PURE__ */ new WeakMap(), Ii = /* @__PURE__ */ new WeakMap(), Ho = /* @__PURE__ */ new WeakMap(), ln = /* @__PURE__ */ new WeakMap(), An = /* @__PURE__ */ new WeakMap(), gr = /* @__PURE__ */ new WeakMap(), Vo = /* @__PURE__ */ new WeakMap(), La = /* @__PURE__ */ new WeakMap(), kt = /* @__PURE__ */ new WeakMap(), qt = /* @__PURE__ */ new WeakMap(), Dt = /* @__PURE__ */ new WeakMap(), on = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), wf = /* @__PURE__ */ new WeakMap(), Kn = Symbol("placeholder"), Bf = Symbol("mark-placeholder"), xf = globalThis.Node, E0 = globalThis.Text, Oa = (t) => t && t.ownerDocument && t.ownerDocument.defaultView || null, w0 = (t) => fn(t) && t.nodeType === 8, Pt = (t) => fn(t) && t.nodeType === 1, fn = (t) => {
  var e = Oa(t);
  return !!e && t instanceof e.Node;
}, qo = (t) => {
  var e = t && t.anchorNode && Oa(t.anchorNode);
  return !!e && t instanceof e.Selection;
}, Af = (t) => fn(t) && t.nodeType === 3, B0 = (t) => t.clipboardData && t.clipboardData.getData("text/plain") !== "" && t.clipboardData.types.length === 1, x0 = (t) => {
  var [e, n] = t;
  if (Pt(e) && e.childNodes.length) {
    var r = n === e.childNodes.length, i = r ? n - 1 : n;
    for ([e, i] = Lf(e, i, r ? "backward" : "forward"), r = i < n; Pt(e) && e.childNodes.length; ) {
      var o = r ? e.childNodes.length - 1 : 0;
      e = L0(e, o, r ? "backward" : "forward");
    }
    n = r && e.textContent != null ? e.textContent.length : 0;
  }
  return [e, n];
}, A0 = (t) => {
  for (var e = t && t.parentNode; e; ) {
    if (e.toString() === "[object ShadowRoot]")
      return !0;
    e = e.parentNode;
  }
  return !1;
}, Lf = (t, e, n) => {
  for (var {
    childNodes: r
  } = t, i = r[e], o = e, a = !1, s = !1; (w0(i) || Pt(i) && i.childNodes.length === 0 || Pt(i) && i.getAttribute("contenteditable") === "false") && !(a && s); ) {
    if (o >= r.length) {
      a = !0, o = e - 1, n = "backward";
      continue;
    }
    if (o < 0) {
      s = !0, o = e + 1, n = "forward";
      continue;
    }
    i = r[o], e = o, o += n === "forward" ? 1 : -1;
  }
  return [i, e];
}, L0 = (t, e, n) => {
  var [r] = Lf(t, e, n);
  return r;
}, Of = (t) => {
  var e = "";
  if (Af(t) && t.nodeValue)
    return t.nodeValue;
  if (Pt(t)) {
    for (var n of Array.from(t.childNodes))
      e += Of(n);
    var r = getComputedStyle(t).getPropertyValue("display");
    (r === "block" || r === "list" || t.tagName === "BR") && (e += `
`);
  }
  return e;
}, O0 = /data-slate-fragment="(.+?)"/m, S0 = (t) => {
  var e = t.getData("text/html"), [, n] = e.match(O0) || [];
  return n;
}, mr = (t) => t.getSelection != null ? t.getSelection() : document.getSelection(), Sa = (t, e, n) => {
  var {
    target: r
  } = e;
  if (Pt(r) && r.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: i
  } = Z.getWindow(t);
  if (i.contains(r))
    return Z.hasDOMNode(t, r, {
      editable: !0
    });
  var o = n.find((a) => {
    var {
      addedNodes: s,
      removedNodes: u
    } = a;
    for (var l of s)
      if (l === r || l.contains(r))
        return !0;
    for (var c of u)
      if (c === r || c.contains(r))
        return !0;
  });
  return !o || o === e ? !1 : Sa(t, o, n);
}, P0 = () => {
  for (var t = document.activeElement; (e = t) !== null && e !== void 0 && e.shadowRoot && (n = t.shadowRoot) !== null && n !== void 0 && n.activeElement; ) {
    var e, n, r;
    t = (r = t) === null || r === void 0 || (r = r.shadowRoot) === null || r === void 0 ? void 0 : r.activeElement;
  }
  return t;
}, nl = (t, e) => !!(t.compareDocumentPosition(e) & xf.DOCUMENT_POSITION_PRECEDING), F0 = (t, e) => !!(t.compareDocumentPosition(e) & xf.DOCUMENT_POSITION_FOLLOWING), M0 = 0;
class k0 {
  constructor() {
    Ft(this, "id", void 0), this.id = "".concat(M0++);
  }
}
var Z = {
  androidPendingDiffs: (t) => Dt.get(t),
  androidScheduleFlush: (t) => {
    var e;
    (e = La.get(t)) === null || e === void 0 || e();
  },
  blur: (t) => {
    var e = Z.toDOMNode(t, t), n = Z.findDocumentOrShadowRoot(t);
    ln.set(t, !1), n.activeElement === e && e.blur();
  },
  deselect: (t) => {
    var {
      selection: e
    } = t, n = Z.findDocumentOrShadowRoot(t), r = mr(n);
    r && r.rangeCount > 0 && r.removeAllRanges(), e && Q.deselect(t);
  },
  findDocumentOrShadowRoot: (t) => {
    var e = Z.toDOMNode(t, t), n = e.getRootNode();
    return n instanceof Document || n instanceof ShadowRoot ? n : e.ownerDocument;
  },
  findEventRange: (t, e) => {
    "nativeEvent" in e && (e = e.nativeEvent);
    var {
      clientX: n,
      clientY: r,
      target: i
    } = e;
    if (n == null || r == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var o = Z.toSlateNode(t, e.target), a = Z.findPath(t, o);
    if (ce.isElement(o) && g.isVoid(t, o)) {
      var s = i.getBoundingClientRect(), u = t.isInline(o) ? n - s.left < s.left + s.width - n : r - s.top < s.top + s.height - r, l = g.point(t, a, {
        edge: u ? "start" : "end"
      }), c = u ? g.before(t, l) : g.after(t, l);
      if (c) {
        var d = g.range(t, c);
        return d;
      }
    }
    var p, {
      document: v
    } = Z.getWindow(t);
    if (v.caretRangeFromPoint)
      p = v.caretRangeFromPoint(n, r);
    else {
      var m = v.caretPositionFromPoint(n, r);
      m && (p = v.createRange(), p.setStart(m.offsetNode, m.offset), p.setEnd(m.offsetNode, m.offset));
    }
    if (!p)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var h = Z.toSlateRange(t, p, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return h;
  },
  findKey: (t, e) => {
    var n = Bi.get(e);
    return n || (n = new k0(), Bi.set(e, n)), n;
  },
  findPath: (t, e) => {
    for (var n = [], r = e; ; ) {
      var i = Aa.get(r);
      if (i == null) {
        if (g.isEditor(r))
          return n;
        break;
      }
      var o = xa.get(r);
      if (o == null)
        break;
      n.unshift(o), r = i;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(ut.stringify(e)));
  },
  focus: function(e) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!ln.get(e)) {
      if (n.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (e.operations.length > 0) {
        setTimeout(() => {
          Z.focus(e, {
            retries: n.retries - 1
          });
        }, 10);
        return;
      }
      var r = Z.toDOMNode(e, e), i = Z.findDocumentOrShadowRoot(e);
      if (i.activeElement !== r) {
        if (e.selection && i instanceof Document) {
          var o = mr(i), a = Z.toDOMRange(e, e.selection);
          o == null || o.removeAllRanges(), o == null || o.addRange(a);
        }
        e.selection || Q.select(e, g.start(e, [])), ln.set(e, !0), r.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (t) => {
    var e = Ef.get(t);
    if (!e)
      throw new Error("Unable to find a host window element for this editor");
    return e;
  },
  hasDOMNode: function(e, n) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: i = !1
    } = r, o = Z.toDOMNode(e, e), a;
    try {
      a = Pt(n) ? n : n.parentElement;
    } catch (s) {
      if (s instanceof Error && !s.message.includes('Permission denied to access property "nodeType"'))
        throw s;
    }
    return a ? a.closest("[data-slate-editor]") === o && (!i || a.isContentEditable ? !0 : typeof a.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    a.closest('[contenteditable="false"]') === o || !!a.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (t, e) => fn(e) && Z.hasDOMNode(t, e, {
    editable: !0
  }),
  hasRange: (t, e) => {
    var {
      anchor: n,
      focus: r
    } = e;
    return g.hasPath(t, n.path) && g.hasPath(t, r.path);
  },
  hasSelectableTarget: (t, e) => Z.hasEditableTarget(t, e) || Z.isTargetInsideNonReadonlyVoid(t, e),
  hasTarget: (t, e) => fn(e) && Z.hasDOMNode(t, e),
  insertData: (t, e) => {
    t.insertData(e);
  },
  insertFragmentData: (t, e) => t.insertFragmentData(e),
  insertTextData: (t, e) => t.insertTextData(e),
  isComposing: (t) => !!An.get(t),
  isFocused: (t) => !!ln.get(t),
  isReadOnly: (t) => !!Ho.get(t),
  isTargetInsideNonReadonlyVoid: (t, e) => {
    if (Ho.get(t)) return !1;
    var n = Z.hasTarget(t, e) && Z.toSlateNode(t, e);
    return ce.isElement(n) && g.isVoid(t, n);
  },
  setFragmentData: (t, e, n) => t.setFragmentData(e, n),
  toDOMNode: (t, e) => {
    var n = Ii.get(t), r = g.isEditor(e) ? fi.get(t) : n == null ? void 0 : n.get(Z.findKey(t, e));
    if (!r)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(ut.stringify(e)));
    return r;
  },
  toDOMPoint: (t, e) => {
    var [n] = g.node(t, e.path), r = Z.toDOMNode(t, n), i;
    g.void(t, {
      at: e
    }) && (e = {
      path: e.path,
      offset: 0
    });
    for (var o = "[data-slate-string], [data-slate-zero-width]", a = Array.from(r.querySelectorAll(o)), s = 0, u = 0; u < a.length; u++) {
      var l = a[u], c = l.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: d
        } = c.textContent, p = l.getAttribute("data-slate-length"), v = p == null ? d : parseInt(p, 10), m = s + v, h = a[u + 1];
        if (e.offset === m && h !== null && h !== void 0 && h.hasAttribute("data-slate-mark-placeholder")) {
          var f, C = h.childNodes[0];
          i = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            C instanceof E0 ? C : h,
            (f = h.textContent) !== null && f !== void 0 && f.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (e.offset <= m) {
          var w = Math.min(d, Math.max(0, e.offset - s));
          i = [c, w];
          break;
        }
        s = m;
      }
    }
    if (!i)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(ut.stringify(e)));
    return i;
  },
  toDOMRange: (t, e) => {
    var {
      anchor: n,
      focus: r
    } = e, i = V.isBackward(e), o = Z.toDOMPoint(t, n), a = V.isCollapsed(e) ? o : Z.toDOMPoint(t, r), s = Z.getWindow(t), u = s.document.createRange(), [l, c] = i ? a : o, [d, p] = i ? o : a, v = Pt(l) ? l : l.parentElement, m = !!v.getAttribute("data-slate-zero-width"), h = Pt(d) ? d : d.parentElement, f = !!h.getAttribute("data-slate-zero-width");
    return u.setStart(l, m ? 1 : c), u.setEnd(d, f ? 1 : p), u;
  },
  toSlateNode: (t, e) => {
    var n = Pt(e) ? e : e.parentElement;
    n && !n.hasAttribute("data-slate-node") && (n = n.closest("[data-slate-node]"));
    var r = n ? Ar.get(n) : null;
    if (!r)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(n));
    return r;
  },
  toSlatePoint: (t, e, n) => {
    var {
      exactMatch: r,
      suppressThrow: i,
      searchDirection: o = "backward"
    } = n, [a, s] = r ? e : x0(e), u = a.parentNode, l = null, c = 0;
    if (u) {
      var d, p, v = Z.toDOMNode(t, t), m = u.closest('[data-slate-void="true"]'), h = m && v.contains(m) ? m : null, f = u.closest('[contenteditable="false"]'), C = f && v.contains(f) ? f : null, w = u.closest("[data-slate-leaf]"), b = null;
      if (w) {
        if (l = w.closest('[data-slate-node="text"]'), l) {
          var S = Z.getWindow(t), D = S.document.createRange();
          D.setStart(l, 0), D.setEnd(a, s);
          var E = D.cloneContents(), L = [...Array.prototype.slice.call(E.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(E.querySelectorAll("[contenteditable=false]"))];
          L.forEach((q) => {
            if (mt && !r && q.hasAttribute("data-slate-zero-width") && q.textContent.length > 0 && q.textContext !== "\uFEFF") {
              q.textContent.startsWith("\uFEFF") && (q.textContent = q.textContent.slice(1));
              return;
            }
            q.parentNode.removeChild(q);
          }), c = E.textContent.length, b = l;
        }
      } else if (h) {
        for (var F = h.querySelectorAll("[data-slate-leaf]"), H = 0; H < F.length; H++) {
          var P = F[H];
          if (Z.hasDOMNode(t, P)) {
            w = P;
            break;
          }
        }
        w ? (l = w.closest('[data-slate-node="text"]'), b = w, c = b.textContent.length, b.querySelectorAll("[data-slate-zero-width]").forEach((q) => {
          c -= q.textContent.length;
        })) : c = 1;
      } else if (C) {
        var $ = (q) => q ? q.querySelectorAll(
          // Exclude leaf nodes in nested editors
          "[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])"
        ) : [], R = C.closest('[data-slate-node="element"]');
        if (o === "forward") {
          var j, T = [...$(R), ...$(R == null ? void 0 : R.nextElementSibling)];
          w = (j = T.find((q) => F0(C, q))) !== null && j !== void 0 ? j : null;
        } else {
          var N, K = [...$(R == null ? void 0 : R.previousElementSibling), ...$(R)];
          w = (N = K.findLast((q) => nl(C, q))) !== null && N !== void 0 ? N : null;
        }
        w && (l = w.closest('[data-slate-node="text"]'), b = w, o === "forward" ? c = 0 : (c = b.textContent.length, b.querySelectorAll("[data-slate-zero-width]").forEach((q) => {
          c -= q.textContent.length;
        })));
      }
      b && c === b.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      mt && b.getAttribute("data-slate-zero-width") === "z" && (d = b.textContent) !== null && d !== void 0 && d.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (u.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      qn && (p = b.textContent) !== null && p !== void 0 && p.endsWith(`

`)) && c--;
    }
    if (mt && !l && !r) {
      var _ = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
      if (_ && Z.hasDOMNode(t, _, {
        editable: !0
      })) {
        var oe = Z.toSlateNode(t, _), {
          path: ie,
          offset: k
        } = g.start(t, Z.findPath(t, oe));
        return _.querySelector("[data-slate-leaf]") || (k = s), {
          path: ie,
          offset: k
        };
      }
    }
    if (!l) {
      if (i)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(e));
    }
    var U = Z.toSlateNode(t, l), J = Z.findPath(t, U);
    return {
      path: J,
      offset: c
    };
  },
  toSlateRange: (t, e, n) => {
    var r, {
      exactMatch: i,
      suppressThrow: o
    } = n, a = qo(e) ? e.anchorNode : e.startContainer, s, u, l, c, d;
    if (a)
      if (qo(e)) {
        if (qn && e.rangeCount > 1) {
          l = e.focusNode;
          var p = e.getRangeAt(0), v = e.getRangeAt(e.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement && v.startContainer instanceof HTMLTableRowElement) {
            let E = function(L) {
              return L.childElementCount > 0 ? E(L.children[0]) : L;
            };
            var m = p.startContainer, h = v.startContainer, f = E(m.children[p.startOffset]), C = E(h.children[v.startOffset]);
            c = 0, C.childNodes.length > 0 ? s = C.childNodes[0] : s = C, f.childNodes.length > 0 ? l = f.childNodes[0] : l = f, C instanceof HTMLElement ? u = C.innerHTML.length : u = 0;
          } else
            p.startContainer === l ? (s = v.endContainer, u = v.endOffset, c = p.startOffset) : (s = p.startContainer, u = p.endOffset, c = v.startOffset);
        } else
          s = e.anchorNode, u = e.anchorOffset, l = e.focusNode, c = e.focusOffset;
        bf && A0(s) || qn ? d = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset : d = e.isCollapsed;
      } else
        s = e.startContainer, u = e.startOffset, l = e.endContainer, c = e.endOffset, d = e.collapsed;
    if (s == null || l == null || u == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(e));
    qn && (r = l.textContent) !== null && r !== void 0 && r.endsWith(`

`) && c === l.textContent.length && c--;
    var w = Z.toSlatePoint(t, [s, u], {
      exactMatch: i,
      suppressThrow: o
    });
    if (!w)
      return null;
    var b = nl(s, l) || s === l && c < u, S = d ? w : Z.toSlatePoint(t, [l, c], {
      exactMatch: i,
      suppressThrow: o,
      searchDirection: b ? "forward" : "backward"
    });
    if (!S)
      return null;
    var D = {
      anchor: w,
      focus: S
    };
    return V.isExpanded(D) && V.isForward(D) && Pt(l) && g.void(t, {
      at: D.focus,
      mode: "highest"
    }) && (D = g.unhangRange(t, D, {
      voids: !0
    })), D;
  }
};
function T0(t, e) {
  var {
    path: n,
    diff: r
  } = e;
  if (!g.hasPath(t, n))
    return !1;
  var i = re.get(t, n);
  if (!fe.isText(i))
    return !1;
  if (r.start !== i.text.length || r.text.length === 0)
    return i.text.slice(r.start, r.start + r.text.length) === r.text;
  var o = O.next(n);
  if (!g.hasPath(t, o))
    return !1;
  var a = re.get(t, o);
  return fe.isText(a) && a.text.startsWith(r.text);
}
function Sf(t) {
  for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
    n[r - 1] = arguments[r];
  return n.reduce((i, o) => i.slice(0, o.start) + o.text + i.slice(o.end), t);
}
function R0(t, e) {
  for (var n = Math.min(t.length, e.length), r = 0; r < n; r++)
    if (t.charAt(r) !== e.charAt(r))
      return r;
  return n;
}
function I0(t, e, n) {
  for (var r = Math.min(t.length, e.length, n), i = 0; i < r; i++)
    if (t.charAt(t.length - i - 1) !== e.charAt(e.length - i - 1))
      return i;
  return r;
}
function Pf(t, e) {
  var {
    start: n,
    end: r,
    text: i
  } = e, o = t.slice(n, r), a = R0(o, i), s = Math.min(o.length - a, i.length - a), u = I0(o, i, s), l = {
    start: n + a,
    end: r - u,
    text: i.slice(a, i.length - u)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function j0(t, e, n) {
  var r = Math.min(e.start, n.start), i = Math.max(0, Math.min(e.start + e.text.length, n.end) - n.start), o = Sf(t, e, n), a = Math.max(n.start + n.text.length, e.start + e.text.length + (e.start + e.text.length > n.start ? n.text.length : 0) - i), s = o.slice(r, a), u = Math.max(e.end, n.end - e.text.length + (e.end - e.start));
  return Pf(t, {
    start: r,
    end: u,
    text: s
  });
}
function N0(t) {
  var {
    path: e,
    diff: n
  } = t;
  return {
    anchor: {
      path: e,
      offset: n.start
    },
    focus: {
      path: e,
      offset: n.end
    }
  };
}
function Go(t, e) {
  var {
    path: n,
    offset: r
  } = e;
  if (!g.hasPath(t, n))
    return null;
  var i = re.get(t, n);
  if (!fe.isText(i))
    return null;
  var o = g.above(t, {
    match: (s) => ce.isElement(s) && g.isBlock(t, s),
    at: n
  });
  if (!o)
    return null;
  for (; r > i.text.length; ) {
    var a = g.next(t, {
      at: n,
      match: fe.isText
    });
    if (!a || !O.isDescendant(a[1], o[1]))
      return null;
    r -= i.text.length, i = a[0], n = a[1];
  }
  return {
    path: n,
    offset: r
  };
}
function rl(t, e) {
  var n = Go(t, e.anchor);
  if (!n)
    return null;
  if (V.isCollapsed(e))
    return {
      anchor: n,
      focus: n
    };
  var r = Go(t, e.focus);
  return r ? {
    anchor: n,
    focus: r
  } : null;
}
function Zo(t, e, n) {
  var r = Dt.get(t), i = r == null ? void 0 : r.find((c) => {
    var {
      path: d
    } = c;
    return O.equals(d, e.path);
  });
  if (!i || e.offset <= i.diff.start)
    return Oe.transform(e, n, {
      affinity: "backward"
    });
  var {
    diff: o
  } = i;
  if (e.offset <= o.start + o.text.length) {
    var a = {
      path: e.path,
      offset: o.start
    }, s = Oe.transform(a, n, {
      affinity: "backward"
    });
    return s ? {
      path: s.path,
      offset: s.offset + e.offset - o.start
    } : null;
  }
  var u = {
    path: e.path,
    offset: e.offset - o.text.length + o.end - o.start
  }, l = Oe.transform(u, n, {
    affinity: "backward"
  });
  return l ? n.type === "split_node" && O.equals(n.path, e.path) && u.offset < n.position && o.start < n.position ? l : {
    path: l.path,
    offset: l.offset + o.text.length - o.end + o.start
  } : null;
}
function il(t, e, n) {
  var r = Zo(t, e.anchor, n);
  if (!r)
    return null;
  if (V.isCollapsed(e))
    return {
      anchor: r,
      focus: r
    };
  var i = Zo(t, e.focus, n);
  return i ? {
    anchor: r,
    focus: i
  } : null;
}
function _0(t, e) {
  var {
    path: n,
    diff: r,
    id: i
  } = t;
  switch (e.type) {
    case "insert_text":
      return !O.equals(e.path, n) || e.offset >= r.end ? t : e.offset <= r.start ? {
        diff: {
          start: e.text.length + r.start,
          end: e.text.length + r.end,
          text: r.text
        },
        id: i,
        path: n
      } : {
        diff: {
          start: r.start,
          end: r.end + e.text.length,
          text: r.text
        },
        id: i,
        path: n
      };
    case "remove_text":
      return !O.equals(e.path, n) || e.offset >= r.end ? t : e.offset + e.text.length <= r.start ? {
        diff: {
          start: r.start - e.text.length,
          end: r.end - e.text.length,
          text: r.text
        },
        id: i,
        path: n
      } : {
        diff: {
          start: r.start,
          end: r.end - e.text.length,
          text: r.text
        },
        id: i,
        path: n
      };
    case "split_node":
      return !O.equals(e.path, n) || e.position >= r.end ? {
        diff: r,
        id: i,
        path: O.transform(n, e, {
          affinity: "backward"
        })
      } : e.position > r.start ? {
        diff: {
          start: r.start,
          end: Math.min(e.position, r.end),
          text: r.text
        },
        id: i,
        path: n
      } : {
        diff: {
          start: r.start - e.position,
          end: r.end - e.position,
          text: r.text
        },
        id: i,
        path: O.transform(n, e, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return O.equals(e.path, n) ? {
        diff: {
          start: r.start + e.position,
          end: r.end + e.position,
          text: r.text
        },
        id: i,
        path: O.transform(n, e)
      } : {
        diff: r,
        id: i,
        path: O.transform(n, e)
      };
  }
  var o = O.transform(n, e);
  return o ? {
    diff: r,
    path: o,
    id: i
  } : null;
}
function ol(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ol(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ol(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var $0 = 25, z0 = 200, W0 = function() {
}, U0 = (t) => (t == null ? void 0 : t.constructor.name) === "DataTransfer";
function H0(t) {
  var {
    editor: e,
    scheduleOnDOMSelectionChange: n,
    onDOMSelectionChange: r
  } = t, i = !1, o = null, a = null, s = null, u = 0, l = !1, c = () => {
    var R = an.get(e);
    if (an.delete(e), R) {
      var {
        selection: j
      } = e, T = rl(e, R);
      T && (!j || !V.equals(T, j)) && Q.select(e, T);
    }
  }, d = () => {
    var R = on.get(e);
    if (on.delete(e), !!R) {
      if (R.at) {
        var j = Oe.isPoint(R.at) ? Go(e, R.at) : rl(e, R.at);
        if (!j)
          return;
        var T = g.range(e, j);
        (!e.selection || !V.equals(e.selection, T)) && Q.select(e, j);
      }
      R.run();
    }
  }, p = () => {
    if (a && (clearTimeout(a), a = null), s && (clearTimeout(s), s = null), !S() && !b()) {
      c();
      return;
    }
    i || (i = !0, setTimeout(() => i = !1)), b() && (i = "action");
    var R = e.selection && g.rangeRef(e, e.selection, {
      affinity: "forward"
    });
    qt.set(e, e.marks), W0("flush", on.get(e), Dt.get(e));
    for (var j = S(), T; T = (N = Dt.get(e)) === null || N === void 0 ? void 0 : N[0]; ) {
      var N, K, _ = kt.get(e);
      _ !== void 0 && (kt.delete(e), e.marks = _), _ && l === !1 && (l = null);
      var oe = N0(T);
      (!e.selection || !V.equals(e.selection, oe)) && Q.select(e, oe), T.diff.text ? g.insertText(e, T.diff.text) : g.deleteFragment(e), Dt.set(e, (K = Dt.get(e)) === null || K === void 0 ? void 0 : K.filter((U) => {
        var {
          id: J
        } = U;
        return J !== T.id;
      })), T0(e, T) || (j = !1, on.delete(e), qt.delete(e), i = "action", an.delete(e), n.cancel(), r.cancel(), R == null || R.unref());
    }
    var ie = R == null ? void 0 : R.unref();
    if (ie && !an.get(e) && (!e.selection || !V.equals(ie, e.selection)) && Q.select(e, ie), b()) {
      d();
      return;
    }
    j && n(), n.flush(), r.flush(), c();
    var k = qt.get(e);
    qt.delete(e), k !== void 0 && (e.marks = k, e.onChange());
  }, v = (R) => {
    o && clearTimeout(o), o = setTimeout(() => {
      An.set(e, !1), p();
    }, $0);
  }, m = (R) => {
    An.set(e, !0), o && (clearTimeout(o), o = null);
  }, h = function() {
    var j = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, T = Uo.get(e);
    if (T) {
      if (S() || j) {
        T.style.display = "none";
        return;
      }
      T.style.removeProperty("display");
    }
  }, f = (R, j) => {
    var T, N = (T = Dt.get(e)) !== null && T !== void 0 ? T : [];
    Dt.set(e, N);
    var K = re.leaf(e, R), _ = N.findIndex((k) => O.equals(k.path, R));
    if (_ < 0) {
      var oe = Pf(K.text, j);
      oe && N.push({
        path: R,
        diff: j,
        id: u++
      }), h();
      return;
    }
    var ie = j0(K.text, N[_].diff, j);
    if (!ie) {
      N.splice(_, 1), h();
      return;
    }
    N[_] = Yr(Yr({}, N[_]), {}, {
      diff: ie
    });
  }, C = function(j) {
    var {
      at: T
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, an.delete(e), n.cancel(), r.cancel(), b() && p(), on.set(e, {
      at: T,
      run: j
    }), s = setTimeout(p);
  }, w = (R) => {
    var j;
    a && (clearTimeout(a), a = null);
    var {
      inputType: T
    } = R, N = null, K = R.dataTransfer || R.data || void 0;
    l !== !1 && T !== "insertText" && T !== "insertCompositionText" && (l = !1);
    var [_] = R.getTargetRanges();
    _ && (N = Z.toSlateRange(e, _, {
      exactMatch: !1,
      suppressThrow: !0
    }));
    var oe = Z.getWindow(e), ie = oe.getSelection();
    if (!N && ie && (_ = ie, N = Z.toSlateRange(e, ie, {
      exactMatch: !1,
      suppressThrow: !0
    })), N = (j = N) !== null && j !== void 0 ? j : e.selection, !!N) {
      var k = !0;
      if (T.startsWith("delete")) {
        if (V.isExpanded(N)) {
          var [U, J] = V.edges(N), q = re.leaf(e, U.path);
          if (q.text.length === U.offset && J.offset === 0) {
            var te = g.next(e, {
              at: U.path,
              match: fe.isText
            });
            te && O.equals(te[1], J.path) && (N = {
              anchor: J,
              focus: J
            });
          }
        }
        var Y = T.endsWith("Backward") ? "backward" : "forward", [y, z] = V.edges(N), [W, M] = g.leaf(e, y.path), X = {
          text: "",
          start: y.offset,
          end: z.offset
        }, ne = Dt.get(e), G = ne == null ? void 0 : ne.find((nt) => O.equals(nt.path, M)), le = G ? [G.diff, X] : [X], se = Sf(W.text, ...le);
        if (se.length === 0 && (k = !1), V.isExpanded(N)) {
          if (k && O.equals(N.anchor.path, N.focus.path)) {
            var pe = {
              path: N.anchor.path,
              offset: y.offset
            }, he = g.range(e, pe, pe);
            return L(he), f(N.anchor.path, {
              text: "",
              end: z.offset,
              start: y.offset
            });
          }
          return C(() => g.deleteFragment(e, {
            direction: Y
          }), {
            at: N
          });
        }
      }
      switch (T) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag":
          return C(() => g.deleteFragment(e), {
            at: N
          });
        case "deleteContent":
        case "deleteContentForward": {
          var {
            anchor: De
          } = N;
          if (k && V.isCollapsed(N)) {
            var ye = re.leaf(e, De.path);
            if (De.offset < ye.text.length)
              return f(De.path, {
                text: "",
                start: De.offset,
                end: De.offset + 1
              });
          }
          return C(() => g.deleteForward(e), {
            at: N
          });
        }
        case "deleteContentBackward": {
          var be, {
            anchor: ge
          } = N, Ne = qo(_) ? _.isCollapsed : !!((be = _) !== null && be !== void 0 && be.collapsed);
          return k && Ne && V.isCollapsed(N) && ge.offset > 0 ? f(ge.path, {
            text: "",
            start: ge.offset - 1,
            end: ge.offset
          }) : C(() => g.deleteBackward(e), {
            at: N
          });
        }
        case "deleteEntireSoftLine":
          return C(() => {
            g.deleteBackward(e, {
              unit: "line"
            }), g.deleteForward(e, {
              unit: "line"
            });
          }, {
            at: N
          });
        case "deleteHardLineBackward":
          return C(() => g.deleteBackward(e, {
            unit: "block"
          }), {
            at: N
          });
        case "deleteSoftLineBackward":
          return C(() => g.deleteBackward(e, {
            unit: "line"
          }), {
            at: N
          });
        case "deleteHardLineForward":
          return C(() => g.deleteForward(e, {
            unit: "block"
          }), {
            at: N
          });
        case "deleteSoftLineForward":
          return C(() => g.deleteForward(e, {
            unit: "line"
          }), {
            at: N
          });
        case "deleteWordBackward":
          return C(() => g.deleteBackward(e, {
            unit: "word"
          }), {
            at: N
          });
        case "deleteWordForward":
          return C(() => g.deleteForward(e, {
            unit: "word"
          }), {
            at: N
          });
        case "insertLineBreak":
          return C(() => g.insertSoftBreak(e), {
            at: N
          });
        case "insertParagraph":
          return C(() => g.insertBreak(e), {
            at: N
          });
        case "insertCompositionText":
        case "deleteCompositionText":
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          if (U0(K))
            return C(() => Z.insertData(e, K), {
              at: N
            });
          var ue = K ?? "";
          if (kt.get(e) && (ue = ue.replace("\uFEFF", "")), T === "insertText" && /.*\n.*\n$/.test(ue) && (ue = ue.slice(0, -1)), ue.includes(`
`))
            return C(() => {
              var nt = ue.split(`
`);
              nt.forEach((Ae, vt) => {
                Ae && g.insertText(e, Ae), vt !== nt.length - 1 && g.insertSoftBreak(e);
              });
            }, {
              at: N
            });
          if (O.equals(N.anchor.path, N.focus.path)) {
            var [We, de] = V.edges(N), Be = {
              start: We.offset,
              end: de.offset,
              text: ue
            };
            if (ue && l && T === "insertCompositionText") {
              var Te = l.start + l.text.search(/\S|$/), Xe = Be.start + Be.text.search(/\S|$/);
              Xe === Te + 1 && Be.end === l.start + l.text.length ? (Be.start -= 1, l = null, P()) : l = !1;
            } else T === "insertText" ? l === null ? l = Be : l && V.isCollapsed(N) && l.end + l.text.length === We.offset ? l = Yr(Yr({}, l), {}, {
              text: l.text + ue
            }) : l = !1 : l = !1;
            if (k) {
              f(We.path, Be);
              return;
            }
          }
          return C(() => g.insertText(e, ue), {
            at: N
          });
        }
      }
    }
  }, b = () => !!on.get(e), S = () => {
    var R;
    return !!((R = Dt.get(e)) !== null && R !== void 0 && R.length);
  }, D = () => b() || S(), E = () => i, L = (R) => {
    an.set(e, R), a && (clearTimeout(a), a = null);
    var {
      selection: j
    } = e;
    if (R) {
      var T = !j || !O.equals(j.anchor.path, R.anchor.path), N = !j || !O.equals(j.anchor.path.slice(0, -1), R.anchor.path.slice(0, -1));
      (T && l || N) && (l = !1), (T || S()) && (a = setTimeout(p, z0));
    }
  }, F = () => {
    (b() || !S()) && p();
  }, H = (R) => {
    S() || (h(!0), setTimeout(h));
  }, P = () => {
    b() || (s = setTimeout(p));
  }, $ = (R) => {
    if (!(S() || b()) && R.some((T) => Sa(e, T, R))) {
      var j;
      (j = wf.get(e)) === null || j === void 0 || j();
    }
  };
  return {
    flush: p,
    scheduleFlush: P,
    hasPendingDiffs: S,
    hasPendingAction: b,
    hasPendingChanges: D,
    isFlushing: E,
    handleUserSelect: L,
    handleCompositionEnd: v,
    handleCompositionStart: m,
    handleDOMBeforeInput: w,
    handleKeyDown: H,
    handleDomMutations: $,
    handleInput: F
  };
}
function V0() {
  var t = Ue(!1);
  return B(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t.current;
}
var Lr = ci ? Wd : B;
function q0(t, e, n) {
  var [r] = I(() => new MutationObserver(e));
  Lr(() => {
    r.takeRecords();
  }), B(() => {
    if (!t.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return r.observe(t.current, n), () => r.disconnect();
  }, [r, t, n]);
}
var G0 = ["node"];
function al(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Z0(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? al(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : al(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var Y0 = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, K0 = mt ? (t) => {
  var {
    node: e
  } = t, n = Yn(t, G0);
  if (!mt)
    return null;
  var r = dn(), i = V0(), [o] = I(() => H0(Z0({
    editor: r
  }, n)));
  return q0(e, o.handleDomMutations, Y0), La.set(r, o.scheduleFlush), i && o.flush(), o;
} : () => null, X0 = ["anchor", "focus"], J0 = ["anchor", "focus"], Q0 = (t, e) => Object.keys(t).length === Object.keys(e).length && Object.keys(t).every((n) => e.hasOwnProperty(n) && t[n] === e[n]), Ff = (t, e) => {
  var n = Yn(t, X0), r = Yn(e, J0);
  return t[Kn] === e[Kn] && Q0(n, r);
}, eC = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], i = e[n];
    if (!V.equals(r, i) || !Ff(r, i))
      return !1;
  }
  return !0;
}, tC = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var n = 0; n < t.length; n++) {
    var r = t[n], i = e[n];
    if (r.anchor.offset !== i.anchor.offset || r.focus.offset !== i.focus.offset || !Ff(r, i))
      return !1;
  }
  return !0;
};
function sl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function nC(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? sl(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : sl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var rC = (t) => {
  var {
    isLast: e,
    leaf: n,
    parent: r,
    text: i
  } = t, o = dn(), a = Z.findPath(o, i), s = O.parent(a), u = !!n[Bf];
  return o.isVoid(r) ? /* @__PURE__ */ me.createElement(ho, {
    length: re.string(r).length
  }) : n.text === "" && r.children[r.children.length - 1] === i && !o.isInline(r) && g.string(o, s) === "" ? /* @__PURE__ */ me.createElement(ho, {
    isLineBreak: !0,
    isMarkPlaceholder: u
  }) : n.text === "" ? /* @__PURE__ */ me.createElement(ho, {
    isMarkPlaceholder: u
  }) : e && n.text.slice(-1) === `
` ? /* @__PURE__ */ me.createElement(ul, {
    isTrailing: !0,
    text: n.text
  }) : /* @__PURE__ */ me.createElement(ul, {
    text: n.text
  });
}, ul = (t) => {
  var {
    text: e,
    isTrailing: n = !1
  } = t, r = Ue(null), i = () => "".concat(e ?? "").concat(n ? `
` : ""), [o] = I(i);
  return Lr(() => {
    var a = i();
    r.current && r.current.textContent !== a && (r.current.textContent = a);
  }), /* @__PURE__ */ me.createElement(iC, {
    ref: r
  }, o);
}, iC = /* @__PURE__ */ st(/* @__PURE__ */ sa((t, e) => /* @__PURE__ */ me.createElement("span", {
  "data-slate-string": !0,
  ref: e
}, t.children))), ho = (t) => {
  var {
    length: e = 0,
    isLineBreak: n = !1,
    isMarkPlaceholder: r = !1
  } = t, i = {
    "data-slate-zero-width": n ? "n" : "z",
    "data-slate-length": e
  };
  return r && (i["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ me.createElement("span", nC({}, i), !(mt || Df) || !n ? "\uFEFF" : null, n ? /* @__PURE__ */ me.createElement("br", null) : null);
};
function ll(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Mf(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ll(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : ll(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var oC = mt ? 300 : 0;
function aC(t, e) {
  t.current && (t.current.disconnect(), e && (t.current = null));
}
function cl(t) {
  t.current && (clearTimeout(t.current), t.current = null);
}
var sC = (t) => {
  var {
    leaf: e,
    isLast: n,
    text: r,
    parent: i,
    renderPlaceholder: o,
    renderLeaf: a = (w) => /* @__PURE__ */ me.createElement(lC, Mf({}, w))
  } = t, s = dn(), u = Ue(null), l = Ue(null), [c, d] = I(!1), p = Ue(null), v = ze((w) => {
    if (aC(u, w == null), w == null) {
      var b;
      Uo.delete(s), (b = e.onPlaceholderResize) === null || b === void 0 || b.call(e, null);
    } else {
      if (Uo.set(s, w), !u.current) {
        var S = window.ResizeObserver || d0;
        u.current = new S(() => {
          var D;
          (D = e.onPlaceholderResize) === null || D === void 0 || D.call(e, w);
        });
      }
      u.current.observe(w), l.current = w;
    }
  }, [l, e, s]), m = /* @__PURE__ */ me.createElement(rC, {
    isLast: n,
    leaf: e,
    parent: i,
    text: r
  }), h = !!e[Kn];
  if (B(() => (h ? p.current || (p.current = setTimeout(() => {
    d(!0), p.current = null;
  }, oC)) : (cl(p), d(!1)), () => cl(p)), [h, d]), h && c) {
    var f = {
      children: e.placeholder,
      attributes: {
        "data-slate-placeholder": !0,
        style: {
          position: "absolute",
          top: 0,
          pointerEvents: "none",
          width: "100%",
          maxWidth: "100%",
          display: "block",
          opacity: "0.333",
          userSelect: "none",
          textDecoration: "none",
          // Fixes https://github.com/udecode/plate/issues/2315
          WebkitUserModify: En ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: v
      }
    };
    m = /* @__PURE__ */ me.createElement(me.Fragment, null, o(f), m);
  }
  var C = {
    "data-slate-leaf": !0
  };
  return a({
    attributes: C,
    children: m,
    leaf: e,
    text: r
  });
}, uC = /* @__PURE__ */ me.memo(sC, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && fe.equals(e.leaf, t.leaf) && e.leaf[Kn] === t.leaf[Kn]), lC = (t) => {
  var {
    attributes: e,
    children: n
  } = t;
  return /* @__PURE__ */ me.createElement("span", Mf({}, e), n);
}, cC = (t) => {
  for (var {
    decorations: e,
    isLast: n,
    parent: r,
    renderPlaceholder: i,
    renderLeaf: o,
    text: a
  } = t, s = dn(), u = Ue(null), l = fe.decorations(a, e), c = Z.findKey(s, a), d = [], p = 0; p < l.length; p++) {
    var v = l[p];
    d.push(/* @__PURE__ */ me.createElement(uC, {
      isLast: n && p === l.length - 1,
      key: "".concat(c.id, "-").concat(p),
      renderPlaceholder: i,
      leaf: v,
      text: a,
      parent: r,
      renderLeaf: o
    }));
  }
  var m = ze((h) => {
    var f = Ii.get(s);
    h ? (f == null || f.set(c, h), Sn.set(a, h), Ar.set(h, a)) : (f == null || f.delete(c), Sn.delete(a), u.current && Ar.delete(u.current)), u.current = h;
  }, [u, s, c, a]);
  return /* @__PURE__ */ me.createElement("span", {
    "data-slate-node": "text",
    ref: m
  }, d);
}, kf = /* @__PURE__ */ me.memo(cC, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && tC(e.decorations, t.decorations));
function fl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function Yo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fl(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : fl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var fC = (t) => {
  var {
    decorations: e,
    element: n,
    renderElement: r = (w) => /* @__PURE__ */ me.createElement(pC, Yo({}, w)),
    renderPlaceholder: i,
    renderLeaf: o,
    selection: a
  } = t, s = dn(), u = gC(), l = s.isInline(n), c = Z.findKey(s, n), d = ze((w) => {
    var b = Ii.get(s);
    w ? (b == null || b.set(c, w), Sn.set(n, w), Ar.set(w, n)) : (b == null || b.delete(c), Sn.delete(n));
  }, [s, c, n]), p = Rf({
    decorations: e,
    node: n,
    renderElement: r,
    renderPlaceholder: i,
    renderLeaf: o,
    selection: a
  }), v = {
    "data-slate-node": "element",
    ref: d
  };
  if (l && (v["data-slate-inline"] = !0), !l && g.hasInlines(s, n)) {
    var m = re.string(n), h = uf(m);
    h === "rtl" && (v.dir = h);
  }
  if (g.isVoid(s, n)) {
    v["data-slate-void"] = !0, !u && l && (v.contentEditable = !1);
    var f = l ? "span" : "div", [[C]] = re.texts(n);
    p = /* @__PURE__ */ me.createElement(f, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ me.createElement(kf, {
      renderPlaceholder: i,
      decorations: [],
      isLast: !1,
      parent: n,
      text: C
    })), xa.set(C, 0), Aa.set(C, n);
  }
  return r({
    attributes: v,
    children: p,
    element: n
  });
}, dC = /* @__PURE__ */ me.memo(fC, (t, e) => t.element === e.element && t.renderElement === e.renderElement && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && eC(t.decorations, e.decorations) && (t.selection === e.selection || !!t.selection && !!e.selection && V.equals(t.selection, e.selection))), pC = (t) => {
  var {
    attributes: e,
    children: n,
    element: r
  } = t, i = dn(), o = i.isInline(r) ? "span" : "div";
  return /* @__PURE__ */ me.createElement(o, Yo(Yo({}, e), {}, {
    style: {
      position: "relative"
    }
  }), n);
}, Tf = /* @__PURE__ */ ct(() => []), hC = () => je(Tf), vC = /* @__PURE__ */ ct(!1), Rf = (t) => {
  for (var {
    decorations: e,
    node: n,
    renderElement: r,
    renderPlaceholder: i,
    renderLeaf: o,
    selection: a
  } = t, s = hC(), u = dn(), l = Z.findPath(u, n), c = [], d = ce.isElement(n) && !u.isInline(n) && g.hasInlines(u, n), p = 0; p < n.children.length; p++) {
    var v = l.concat(p), m = n.children[p], h = Z.findKey(u, m), f = g.range(u, v), C = a && V.intersection(f, a), w = s([m, v]);
    for (var b of e) {
      var S = V.intersection(b, f);
      S && w.push(S);
    }
    ce.isElement(m) ? c.push(/* @__PURE__ */ me.createElement(vC.Provider, {
      key: "provider-".concat(h.id),
      value: !!C
    }, /* @__PURE__ */ me.createElement(dC, {
      decorations: w,
      element: m,
      key: h.id,
      renderElement: r,
      renderPlaceholder: i,
      renderLeaf: o,
      selection: C
    }))) : c.push(/* @__PURE__ */ me.createElement(kf, {
      decorations: w,
      key: h.id,
      isLast: d && p === n.children.length - 1,
      parent: n,
      renderPlaceholder: i,
      renderLeaf: o,
      text: m
    })), xa.set(m, p), Aa.set(m, n);
  }
  return c;
}, If = /* @__PURE__ */ ct(!1), gC = () => je(If), jf = /* @__PURE__ */ ct(null), Pa = () => {
  var t = je(jf);
  if (!t)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: e
  } = t;
  return e;
};
function mC() {
  var t = dn(), e = Ue(!1), n = Ue(0), r = ze(() => {
    if (!e.current) {
      e.current = !0;
      var i = Z.getWindow(t);
      i.cancelAnimationFrame(n.current), n.current = i.requestAnimationFrame(() => {
        e.current = !1;
      });
    }
  }, [t]);
  return B(() => () => cancelAnimationFrame(n.current), []), {
    receivedUserInput: e,
    onUserInput: r
  };
}
var yC = 3, CC = {
  bold: "mod+b",
  compose: ["down", "left", "right", "up", "backspace", "enter"],
  moveBackward: "left",
  moveForward: "right",
  moveWordBackward: "ctrl+left",
  moveWordForward: "ctrl+right",
  deleteBackward: "shift?+backspace",
  deleteForward: "shift?+delete",
  extendBackward: "shift+left",
  extendForward: "shift+right",
  italic: "mod+i",
  insertSoftBreak: "shift+enter",
  splitBlock: "enter",
  undo: "mod+z"
}, DC = {
  moveLineBackward: "opt+up",
  moveLineForward: "opt+down",
  moveWordBackward: "opt+left",
  moveWordForward: "opt+right",
  deleteBackward: ["ctrl+backspace", "ctrl+h"],
  deleteForward: ["ctrl+delete", "ctrl+d"],
  deleteLineBackward: "cmd+shift?+backspace",
  deleteLineForward: ["cmd+shift?+delete", "ctrl+k"],
  deleteWordBackward: "opt+shift?+backspace",
  deleteWordForward: "opt+shift?+delete",
  extendLineBackward: "opt+shift+up",
  extendLineForward: "opt+shift+down",
  redo: "cmd+shift+z",
  transposeCharacter: "ctrl+t"
}, bC = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, Ye = (t) => {
  var e = CC[t], n = DC[t], r = bC[t], i = e && ro(e), o = n && ro(n), a = r && ro(r);
  return (s) => !!(i && i(s) || tl && o && o(s) || !tl && a && a(s));
}, Qe = {
  isBold: Ye("bold"),
  isCompose: Ye("compose"),
  isMoveBackward: Ye("moveBackward"),
  isMoveForward: Ye("moveForward"),
  isDeleteBackward: Ye("deleteBackward"),
  isDeleteForward: Ye("deleteForward"),
  isDeleteLineBackward: Ye("deleteLineBackward"),
  isDeleteLineForward: Ye("deleteLineForward"),
  isDeleteWordBackward: Ye("deleteWordBackward"),
  isDeleteWordForward: Ye("deleteWordForward"),
  isExtendBackward: Ye("extendBackward"),
  isExtendForward: Ye("extendForward"),
  isExtendLineBackward: Ye("extendLineBackward"),
  isExtendLineForward: Ye("extendLineForward"),
  isItalic: Ye("italic"),
  isMoveLineBackward: Ye("moveLineBackward"),
  isMoveLineForward: Ye("moveLineForward"),
  isMoveWordBackward: Ye("moveWordBackward"),
  isMoveWordForward: Ye("moveWordForward"),
  isRedo: Ye("redo"),
  isSoftBreak: Ye("insertSoftBreak"),
  isSplitBlock: Ye("splitBlock"),
  isTransposeCharacter: Ye("transposeCharacter"),
  isUndo: Ye("undo")
}, EC = (t, e) => {
  var n = [], r = () => {
    n = [];
  }, i = (a) => {
    if (e.current) {
      var s = a.filter((u) => Sa(t, u, a));
      n.push(...s);
    }
  };
  function o() {
    n.length > 0 && (n.reverse().forEach((a) => {
      a.type !== "characterData" && (a.removedNodes.forEach((s) => {
        a.target.insertBefore(s, a.nextSibling);
      }), a.addedNodes.forEach((s) => {
        a.target.removeChild(s);
      }));
    }), r());
  }
  return {
    registerMutations: i,
    restoreDOM: o,
    clear: r
  };
}, wC = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Nf extends Ud {
  constructor() {
    super(...arguments), Ft(this, "context", null), Ft(this, "manager", null), Ft(this, "mutationObserver", null);
  }
  observe() {
    var e, {
      node: n
    } = this.props;
    if (!n.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (e = this.mutationObserver) === null || e === void 0 || e.observe(n.current, wC);
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, n = this.context;
    this.manager = EC(n, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var e, n, r, i = (e = this.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords();
    if (i != null && i.length) {
      var o;
      (o = this.manager) === null || o === void 0 || o.registerMutations(i);
    }
    return (n = this.mutationObserver) === null || n === void 0 || n.disconnect(), (r = this.manager) === null || r === void 0 || r.restoreDOM(), null;
  }
  componentDidUpdate() {
    var e;
    (e = this.manager) === null || e === void 0 || e.clear(), this.observe();
  }
  componentWillUnmount() {
    var e;
    (e = this.mutationObserver) === null || e === void 0 || e.disconnect();
  }
  render() {
    return this.props.children;
  }
}
Ft(Nf, "contextType", Ba);
var BC = mt ? Nf : (t) => {
  var {
    children: e
  } = t;
  return /* @__PURE__ */ me.createElement(me.Fragment, null, e);
}, xC = /* @__PURE__ */ ct(!1), AC = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], LC = ["text"];
function dl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function jt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? dl(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : dl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var OC = (t) => /* @__PURE__ */ me.createElement(me.Fragment, null, Rf(t)), SC = /* @__PURE__ */ sa((t, e) => {
  var n = ze((y) => /* @__PURE__ */ me.createElement(PC, jt({}, y)), []), {
    autoFocus: r,
    decorate: i = FC,
    onDOMBeforeInput: o,
    placeholder: a,
    readOnly: s = !1,
    renderElement: u,
    renderLeaf: l,
    renderPlaceholder: c = n,
    scrollSelectionIntoView: d = MC,
    style: p = {},
    as: v = "div",
    disableDefaultStyles: m = !1
  } = t, h = Yn(t, AC), f = Pa(), [C, w] = I(!1), b = Ue(null), S = Ue([]), [D, E] = I(), L = Ue(!1), {
    onUserInput: F,
    receivedUserInput: H
  } = mC(), [, P] = zd((y) => y + 1, 0);
  wf.set(f, P), Ho.set(f, s);
  var $ = Gt(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  B(() => {
    b.current && r && b.current.focus();
  }, [r]);
  var R = Ue(), j = Gt(() => Wy(() => {
    var y = Z.toDOMNode(f, f), z = y.getRootNode();
    if (!L.current && En && z instanceof ShadowRoot) {
      L.current = !0;
      var W = P0();
      W ? document.execCommand("indent") : Q.deselect(f), L.current = !1;
      return;
    }
    var M = R.current;
    if ((mt || !Z.isComposing(f)) && (!$.isUpdatingSelection || M != null && M.isFlushing()) && !$.isDraggingInternally) {
      var X = Z.findDocumentOrShadowRoot(f), {
        activeElement: ne
      } = X, G = Z.toDOMNode(f, f), le = mr(X);
      if (ne === G ? ($.latestElement = ne, ln.set(f, !0)) : ln.delete(f), !le)
        return Q.deselect(f);
      var {
        anchorNode: se,
        focusNode: pe
      } = le, he = Z.hasEditableTarget(f, se) || Z.isTargetInsideNonReadonlyVoid(f, se), De = Z.hasTarget(f, pe);
      if (he && De) {
        var ye = Z.toSlateRange(f, le, {
          exactMatch: !1,
          suppressThrow: !0
        });
        ye && (!Z.isComposing(f) && !(M != null && M.hasPendingChanges()) && !(M != null && M.isFlushing()) ? Q.select(f, ye) : M == null || M.handleUserSelect(ye));
      }
      s && (!he || !De) && Q.deselect(f);
    }
  }, 100), [f, s, $]), T = Gt(() => Iy(j, 0), [j]);
  R.current = K0({
    node: b,
    onDOMSelectionChange: j,
    scheduleOnDOMSelectionChange: T
  }), Lr(() => {
    var y, z, W;
    b.current && (W = Oa(b.current)) ? (Ef.set(f, W), fi.set(f, b.current), Sn.set(f, b.current), Ar.set(b.current, f)) : Sn.delete(f);
    var {
      selection: M
    } = f, X = Z.findDocumentOrShadowRoot(f), ne = mr(X);
    if (!(!ne || !Z.isFocused(f) || (y = R.current) !== null && y !== void 0 && y.hasPendingAction())) {
      var G = (he) => {
        var De = ne.type !== "None";
        if (!(!M && !De)) {
          var ye = ne.focusNode, be;
          if (qn && ne.rangeCount > 1) {
            var ge = ne.getRangeAt(0), Ne = ne.getRangeAt(ne.rangeCount - 1);
            ge.startContainer === ye ? be = Ne.endContainer : be = ge.startContainer;
          } else
            be = ne.anchorNode;
          var ue = fi.get(f), We = !1;
          if (ue.contains(be) && ue.contains(ye) && (We = !0), De && We && M && !he) {
            var de = Z.toSlateRange(f, ne, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (de && V.equals(de, M)) {
              var Be;
              if (!$.hasMarkPlaceholder || (Be = be) !== null && Be !== void 0 && (Be = Be.parentElement) !== null && Be !== void 0 && Be.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (M && !Z.hasRange(f, M)) {
            f.selection = Z.toSlateRange(f, ne, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          $.isUpdatingSelection = !0;
          var Te = M && Z.toDOMRange(f, M);
          return Te ? (Z.isComposing(f) && !mt ? ne.collapseToEnd() : V.isBackward(M) ? ne.setBaseAndExtent(Te.endContainer, Te.endOffset, Te.startContainer, Te.startOffset) : ne.setBaseAndExtent(Te.startContainer, Te.startOffset, Te.endContainer, Te.endOffset), d(f, Te)) : ne.removeAllRanges(), Te;
        }
      };
      ne.rangeCount <= 1 && G();
      var le = ((z = R.current) === null || z === void 0 ? void 0 : z.isFlushing()) === "action";
      if (!mt || !le) {
        setTimeout(() => {
          $.isUpdatingSelection = !1;
        });
        return;
      }
      var se = null, pe = requestAnimationFrame(() => {
        if (le) {
          var he = (De) => {
            try {
              var ye = Z.toDOMNode(f, f);
              ye.focus(), G(De);
            } catch {
            }
          };
          he(), se = setTimeout(() => {
            he(!0), $.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(pe), se && clearTimeout(se);
      };
    }
  });
  var N = ze((y) => {
    var z = Z.toDOMNode(f, f), W = z.getRootNode();
    if (L != null && L.current && En && W instanceof ShadowRoot) {
      var M = y.getTargetRanges(), X = M[0], ne = new window.Range();
      ne.setStart(X.startContainer, X.startOffset), ne.setEnd(X.endContainer, X.endOffset);
      var G = Z.toSlateRange(f, ne, {
        exactMatch: !1,
        suppressThrow: !1
      });
      Q.select(f, G), y.preventDefault(), y.stopImmediatePropagation();
      return;
    }
    if (F(), !s && Z.hasEditableTarget(f, y.target) && !kC(y, o)) {
      var le;
      if (R.current)
        return R.current.handleDOMBeforeInput(y);
      T.flush(), j.flush();
      var {
        selection: se
      } = f, {
        inputType: pe
      } = y, he = y.dataTransfer || y.data || void 0, De = pe === "insertCompositionText" || pe === "deleteCompositionText";
      if (De && Z.isComposing(f))
        return;
      var ye = !1;
      if (pe === "insertText" && se && V.isCollapsed(se) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      y.data && y.data.length === 1 && /[a-z ]/i.test(y.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      se.anchor.offset !== 0) {
        var be, ge;
        ye = !0, f.marks && (ye = !1);
        var {
          anchor: Ne
        } = se, [ue, We] = Z.toDOMPoint(f, Ne), de = (be = ue.parentElement) === null || be === void 0 ? void 0 : be.closest("a"), Be = Z.getWindow(f);
        if (ye && de && Z.hasDOMNode(f, de)) {
          var Te, Xe = Be == null ? void 0 : Be.document.createTreeWalker(de, NodeFilter.SHOW_TEXT).lastChild();
          Xe === ue && ((Te = Xe.textContent) === null || Te === void 0 ? void 0 : Te.length) === We && (ye = !1);
        }
        if (ye && ue.parentElement && (Be == null || (ge = Be.getComputedStyle(ue.parentElement)) === null || ge === void 0 ? void 0 : ge.whiteSpace) === "pre") {
          var nt = g.above(f, {
            at: Ne.path,
            match: (Mt) => ce.isElement(Mt) && g.isBlock(f, Mt)
          });
          nt && re.string(nt[0]).includes("	") && (ye = !1);
        }
      }
      if (!pe.startsWith("delete") || pe.startsWith("deleteBy")) {
        var [Ae] = y.getTargetRanges();
        if (Ae) {
          var vt = Z.toSlateRange(f, Ae, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!se || !V.equals(se, vt)) {
            ye = !1;
            var ft = !De && f.selection && g.rangeRef(f, f.selection);
            Q.select(f, vt), ft && gr.set(f, ft);
          }
        }
      }
      if (De)
        return;
      if (ye || y.preventDefault(), se && V.isExpanded(se) && pe.startsWith("delete")) {
        var Xt = pe.endsWith("Backward") ? "backward" : "forward";
        g.deleteFragment(f, {
          direction: Xt
        });
        return;
      }
      switch (pe) {
        case "deleteByComposition":
        case "deleteByCut":
        case "deleteByDrag": {
          g.deleteFragment(f);
          break;
        }
        case "deleteContent":
        case "deleteContentForward": {
          g.deleteForward(f);
          break;
        }
        case "deleteContentBackward": {
          g.deleteBackward(f);
          break;
        }
        case "deleteEntireSoftLine": {
          g.deleteBackward(f, {
            unit: "line"
          }), g.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineBackward": {
          g.deleteBackward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineBackward": {
          g.deleteBackward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteHardLineForward": {
          g.deleteForward(f, {
            unit: "block"
          });
          break;
        }
        case "deleteSoftLineForward": {
          g.deleteForward(f, {
            unit: "line"
          });
          break;
        }
        case "deleteWordBackward": {
          g.deleteBackward(f, {
            unit: "word"
          });
          break;
        }
        case "deleteWordForward": {
          g.deleteForward(f, {
            unit: "word"
          });
          break;
        }
        case "insertLineBreak":
          g.insertSoftBreak(f);
          break;
        case "insertParagraph": {
          g.insertBreak(f);
          break;
        }
        case "insertFromComposition":
        case "insertFromDrop":
        case "insertFromPaste":
        case "insertFromYank":
        case "insertReplacementText":
        case "insertText": {
          pe === "insertFromComposition" && Z.isComposing(f) && (w(!1), An.set(f, !1)), (he == null ? void 0 : he.constructor.name) === "DataTransfer" ? Z.insertData(f, he) : typeof he == "string" && (ye ? S.current.push(() => g.insertText(f, he)) : g.insertText(f, he));
          break;
        }
      }
      var Ot = (le = gr.get(f)) === null || le === void 0 ? void 0 : le.unref();
      gr.delete(f), Ot && (!f.selection || !V.equals(f.selection, Ot)) && Q.select(f, Ot);
    }
  }, [f, j, F, o, s, T]), K = ze((y) => {
    y == null ? (j.cancel(), T.cancel(), fi.delete(f), Sn.delete(f), b.current && Qt && b.current.removeEventListener("beforeinput", N)) : Qt && y.addEventListener("beforeinput", N), b.current = y, typeof e == "function" ? e(y) : e && (e.current = y);
  }, [j, T, f, N, e]);
  Lr(() => {
    var y = Z.getWindow(f);
    y.document.addEventListener("selectionchange", T);
    var z = () => {
      $.isDraggingInternally = !1;
    };
    return y.document.addEventListener("dragend", z), y.document.addEventListener("drop", z), () => {
      y.document.removeEventListener("selectionchange", T), y.document.removeEventListener("dragend", z), y.document.removeEventListener("drop", z);
    };
  }, [T, $]);
  var _ = i([f, []]), oe = a && f.children.length === 1 && Array.from(re.texts(f)).length === 1 && re.string(f) === "" && !C, ie = ze((y) => {
    if (y && oe) {
      var z;
      E((z = y.getBoundingClientRect()) === null || z === void 0 ? void 0 : z.height);
    } else
      E(void 0);
  }, [oe]);
  if (oe) {
    var k = g.start(f, []);
    _.push({
      [Kn]: !0,
      placeholder: a,
      onPlaceholderResize: ie,
      anchor: k,
      focus: k
    });
  }
  var {
    marks: U
  } = f;
  if ($.hasMarkPlaceholder = !1, f.selection && V.isCollapsed(f.selection) && U) {
    var {
      anchor: J
    } = f.selection, q = re.leaf(f, J.path), te = Yn(q, LC);
    if (!fe.equals(q, U, {
      loose: !0
    })) {
      $.hasMarkPlaceholder = !0;
      var Y = Object.fromEntries(Object.keys(te).map((y) => [y, null]));
      _.push(jt(jt(jt({
        [Bf]: !0
      }, Y), U), {}, {
        anchor: J,
        focus: J
      }));
    }
  }
  return B(() => {
    setTimeout(() => {
      var {
        selection: y
      } = f;
      if (y) {
        var {
          anchor: z
        } = y, W = re.leaf(f, z.path);
        if (U && !fe.equals(W, U, {
          loose: !0
        })) {
          kt.set(f, U);
          return;
        }
      }
      kt.delete(f);
    });
  }), /* @__PURE__ */ me.createElement(If.Provider, {
    value: s
  }, /* @__PURE__ */ me.createElement(xC.Provider, {
    value: C
  }, /* @__PURE__ */ me.createElement(Tf.Provider, {
    value: i
  }, /* @__PURE__ */ me.createElement(BC, {
    node: b,
    receivedUserInput: H
  }, /* @__PURE__ */ me.createElement(v, jt(jt({
    role: s ? void 0 : "textbox",
    "aria-multiline": s ? void 0 : !0
  }, h), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Qt || !ci ? h.spellCheck : !1,
    autoCorrect: Qt || !ci ? h.autoCorrect : "false",
    autoCapitalize: Qt || !ci ? h.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !s,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: K,
    style: jt(jt({}, m ? {} : jt({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, D ? {
      minHeight: D
    } : {})), p),
    onBeforeInput: ze((y) => {
      if (!Qt && !s && !gt(y, h.onBeforeInput) && Z.hasSelectableTarget(f, y.target) && (y.preventDefault(), !Z.isComposing(f))) {
        var z = y.data;
        g.insertText(f, z);
      }
    }, [h.onBeforeInput, f, s]),
    onInput: ze((y) => {
      if (!gt(y, h.onInput)) {
        if (R.current) {
          R.current.handleInput();
          return;
        }
        for (var z of S.current)
          z();
        S.current = [];
      }
    }, [h.onInput]),
    onBlur: ze((y) => {
      if (!(s || $.isUpdatingSelection || !Z.hasSelectableTarget(f, y.target) || gt(y, h.onBlur))) {
        var z = Z.findDocumentOrShadowRoot(f);
        if ($.latestElement !== z.activeElement) {
          var {
            relatedTarget: W
          } = y, M = Z.toDOMNode(f, f);
          if (W !== M && !(Pt(W) && W.hasAttribute("data-slate-spacer"))) {
            if (W != null && fn(W) && Z.hasDOMNode(f, W)) {
              var X = Z.toSlateNode(f, W);
              if (ce.isElement(X) && !f.isVoid(X))
                return;
            }
            if (En) {
              var ne = mr(z);
              ne == null || ne.removeAllRanges();
            }
            ln.delete(f);
          }
        }
      }
    }, [s, $.isUpdatingSelection, $.latestElement, f, h.onBlur]),
    onClick: ze((y) => {
      if (Z.hasTarget(f, y.target) && !gt(y, h.onClick) && fn(y.target)) {
        var z = Z.toSlateNode(f, y.target), W = Z.findPath(f, z);
        if (!g.hasPath(f, W) || re.get(f, W) !== z)
          return;
        if (y.detail === yC && W.length >= 1) {
          var M = W;
          if (!(ce.isElement(z) && g.isBlock(f, z))) {
            var X, ne = g.above(f, {
              match: (ye) => ce.isElement(ye) && g.isBlock(f, ye),
              at: W
            });
            M = (X = ne == null ? void 0 : ne[1]) !== null && X !== void 0 ? X : W.slice(0, 1);
          }
          var G = g.range(f, M);
          Q.select(f, G);
          return;
        }
        if (s)
          return;
        var le = g.start(f, W), se = g.end(f, W), pe = g.void(f, {
          at: le
        }), he = g.void(f, {
          at: se
        });
        if (pe && he && O.equals(pe[1], he[1])) {
          var De = g.range(f, le);
          Q.select(f, De);
        }
      }
    }, [f, h.onClick, s]),
    onCompositionEnd: ze((y) => {
      if (Z.hasSelectableTarget(f, y.target)) {
        var z;
        if (Z.isComposing(f) && Promise.resolve().then(() => {
          w(!1), An.set(f, !1);
        }), (z = R.current) === null || z === void 0 || z.handleCompositionEnd(y), gt(y, h.onCompositionEnd) || mt)
          return;
        if (!En && !C0 && !Df && !b0 && !D0 && y.data) {
          var W = kt.get(f);
          kt.delete(f), W !== void 0 && (qt.set(f, f.marks), f.marks = W), g.insertText(f, y.data);
          var M = qt.get(f);
          qt.delete(f), M !== void 0 && (f.marks = M);
        }
      }
    }, [h.onCompositionEnd, f]),
    onCompositionUpdate: ze((y) => {
      Z.hasSelectableTarget(f, y.target) && !gt(y, h.onCompositionUpdate) && (Z.isComposing(f) || (w(!0), An.set(f, !0)));
    }, [h.onCompositionUpdate, f]),
    onCompositionStart: ze((y) => {
      if (Z.hasSelectableTarget(f, y.target)) {
        var z;
        if ((z = R.current) === null || z === void 0 || z.handleCompositionStart(y), gt(y, h.onCompositionStart) || mt)
          return;
        w(!0);
        var {
          selection: W
        } = f;
        if (W && V.isExpanded(W)) {
          g.deleteFragment(f);
          return;
        }
      }
    }, [h.onCompositionStart, f]),
    onCopy: ze((y) => {
      Z.hasSelectableTarget(f, y.target) && !gt(y, h.onCopy) && !pl(y) && (y.preventDefault(), Z.setFragmentData(f, y.clipboardData, "copy"));
    }, [h.onCopy, f]),
    onCut: ze((y) => {
      if (!s && Z.hasSelectableTarget(f, y.target) && !gt(y, h.onCut) && !pl(y)) {
        y.preventDefault(), Z.setFragmentData(f, y.clipboardData, "cut");
        var {
          selection: z
        } = f;
        if (z)
          if (V.isExpanded(z))
            g.deleteFragment(f);
          else {
            var W = re.parent(f, z.anchor.path);
            g.isVoid(f, W) && Q.delete(f);
          }
      }
    }, [s, f, h.onCut]),
    onDragOver: ze((y) => {
      if (Z.hasTarget(f, y.target) && !gt(y, h.onDragOver)) {
        var z = Z.toSlateNode(f, y.target);
        ce.isElement(z) && g.isVoid(f, z) && y.preventDefault();
      }
    }, [h.onDragOver, f]),
    onDragStart: ze((y) => {
      if (!s && Z.hasTarget(f, y.target) && !gt(y, h.onDragStart)) {
        var z = Z.toSlateNode(f, y.target), W = Z.findPath(f, z), M = ce.isElement(z) && g.isVoid(f, z) || g.void(f, {
          at: W,
          voids: !0
        });
        if (M) {
          var X = g.range(f, W);
          Q.select(f, X);
        }
        $.isDraggingInternally = !0, Z.setFragmentData(f, y.dataTransfer, "drag");
      }
    }, [s, f, h.onDragStart, $]),
    onDrop: ze((y) => {
      if (!s && Z.hasTarget(f, y.target) && !gt(y, h.onDrop)) {
        y.preventDefault();
        var z = f.selection, W = Z.findEventRange(f, y), M = y.dataTransfer;
        Q.select(f, W), $.isDraggingInternally && z && !V.equals(z, W) && !g.void(f, {
          at: W,
          voids: !0
        }) && Q.delete(f, {
          at: z
        }), Z.insertData(f, M), Z.isFocused(f) || Z.focus(f);
      }
    }, [s, f, h.onDrop, $]),
    onDragEnd: ze((y) => {
      !s && $.isDraggingInternally && h.onDragEnd && Z.hasTarget(f, y.target) && h.onDragEnd(y);
    }, [s, $, h, f]),
    onFocus: ze((y) => {
      if (!s && !$.isUpdatingSelection && Z.hasEditableTarget(f, y.target) && !gt(y, h.onFocus)) {
        var z = Z.toDOMNode(f, f), W = Z.findDocumentOrShadowRoot(f);
        if ($.latestElement = W.activeElement, qn && y.target !== z) {
          z.focus();
          return;
        }
        ln.set(f, !0);
      }
    }, [s, $, f, h.onFocus]),
    onKeyDown: ze((y) => {
      if (!s && Z.hasEditableTarget(f, y.target)) {
        var z;
        (z = R.current) === null || z === void 0 || z.handleKeyDown(y);
        var {
          nativeEvent: W
        } = y;
        if (Z.isComposing(f) && W.isComposing === !1 && (An.set(f, !1), w(!1)), gt(y, h.onKeyDown) || Z.isComposing(f))
          return;
        var {
          selection: M
        } = f, X = f.children[M !== null ? M.focus.path[0] : 0], ne = uf(re.string(X)) === "rtl";
        if (Qe.isRedo(W)) {
          y.preventDefault();
          var G = f;
          typeof G.redo == "function" && G.redo();
          return;
        }
        if (Qe.isUndo(W)) {
          y.preventDefault();
          var le = f;
          typeof le.undo == "function" && le.undo();
          return;
        }
        if (Qe.isMoveLineBackward(W)) {
          y.preventDefault(), Q.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (Qe.isMoveLineForward(W)) {
          y.preventDefault(), Q.move(f, {
            unit: "line"
          });
          return;
        }
        if (Qe.isExtendLineBackward(W)) {
          y.preventDefault(), Q.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (Qe.isExtendLineForward(W)) {
          y.preventDefault(), Q.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Qe.isMoveBackward(W)) {
          y.preventDefault(), M && V.isCollapsed(M) ? Q.move(f, {
            reverse: !ne
          }) : Q.collapse(f, {
            edge: ne ? "end" : "start"
          });
          return;
        }
        if (Qe.isMoveForward(W)) {
          y.preventDefault(), M && V.isCollapsed(M) ? Q.move(f, {
            reverse: ne
          }) : Q.collapse(f, {
            edge: ne ? "start" : "end"
          });
          return;
        }
        if (Qe.isMoveWordBackward(W)) {
          y.preventDefault(), M && V.isExpanded(M) && Q.collapse(f, {
            edge: "focus"
          }), Q.move(f, {
            unit: "word",
            reverse: !ne
          });
          return;
        }
        if (Qe.isMoveWordForward(W)) {
          y.preventDefault(), M && V.isExpanded(M) && Q.collapse(f, {
            edge: "focus"
          }), Q.move(f, {
            unit: "word",
            reverse: ne
          });
          return;
        }
        if (Qt) {
          if ((bf || En) && M && (Qe.isDeleteBackward(W) || Qe.isDeleteForward(W)) && V.isCollapsed(M)) {
            var se = re.parent(f, M.anchor.path);
            if (ce.isElement(se) && g.isVoid(f, se) && (g.isInline(f, se) || g.isBlock(f, se))) {
              y.preventDefault(), g.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (Qe.isBold(W) || Qe.isItalic(W) || Qe.isTransposeCharacter(W)) {
            y.preventDefault();
            return;
          }
          if (Qe.isSoftBreak(W)) {
            y.preventDefault(), g.insertSoftBreak(f);
            return;
          }
          if (Qe.isSplitBlock(W)) {
            y.preventDefault(), g.insertBreak(f);
            return;
          }
          if (Qe.isDeleteBackward(W)) {
            y.preventDefault(), M && V.isExpanded(M) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f);
            return;
          }
          if (Qe.isDeleteForward(W)) {
            y.preventDefault(), M && V.isExpanded(M) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f);
            return;
          }
          if (Qe.isDeleteLineBackward(W)) {
            y.preventDefault(), M && V.isExpanded(M) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (Qe.isDeleteLineForward(W)) {
            y.preventDefault(), M && V.isExpanded(M) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (Qe.isDeleteWordBackward(W)) {
            y.preventDefault(), M && V.isExpanded(M) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (Qe.isDeleteWordForward(W)) {
            y.preventDefault(), M && V.isExpanded(M) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [s, f, h.onKeyDown]),
    onPaste: ze((y) => {
      !s && Z.hasEditableTarget(f, y.target) && !gt(y, h.onPaste) && (!Qt || B0(y.nativeEvent) || En) && (y.preventDefault(), Z.insertData(f, y.clipboardData));
    }, [s, f, h.onPaste])
  }), /* @__PURE__ */ me.createElement(OC, {
    decorations: _,
    node: f,
    renderElement: u,
    renderPlaceholder: c,
    renderLeaf: l,
    selection: f.selection
  }))))));
}), PC = (t) => {
  var {
    attributes: e,
    children: n
  } = t;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ me.createElement("span", jt({}, e), n, mt && /* @__PURE__ */ me.createElement("br", null))
  );
}, FC = () => [], MC = (t, e) => {
  if (e.getBoundingClientRect && (!t.selection || t.selection && V.isCollapsed(t.selection))) {
    var n = e.startContainer.parentElement;
    n.getBoundingClientRect = e.getBoundingClientRect.bind(e), Vy(n, {
      scrollMode: "if-needed"
    }), delete n.getBoundingClientRect;
  }
}, gt = (t, e) => {
  if (!e)
    return !1;
  var n = e(t);
  return n ?? (t.isDefaultPrevented() || t.isPropagationStopped());
}, pl = (t) => fn(t.target) && (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement), kC = (t, e) => {
  if (!e)
    return !1;
  var n = e(t);
  return n ?? t.defaultPrevented;
}, TC = /* @__PURE__ */ ct(!1), RC = /* @__PURE__ */ ct({});
function IC(t) {
  var e = Ue([]).current, n = Ue({
    editor: t
  }).current, r = ze((o) => {
    n.editor = o, e.forEach((a) => a(o));
  }, [e, n]), i = Gt(() => ({
    getSlate: () => n.editor,
    addEventListener: (o) => (e.push(o), () => {
      e.splice(e.indexOf(o), 1);
    })
  }), [e, n]);
  return {
    selectorContext: i,
    onChange: r
  };
}
var jC = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], NC = (t) => {
  var {
    editor: e,
    children: n,
    onChange: r,
    onSelectionChange: i,
    onValueChange: o,
    initialValue: a
  } = t, s = Yn(t, jC), [u, l] = me.useState(() => {
    if (!re.isNodeList(a))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(ut.stringify(a)));
    if (!g.isEditor(e))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(ut.stringify(e)));
    return e.children = a, Object.assign(e, s), {
      v: 0,
      editor: e
    };
  }), {
    selectorContext: c,
    onChange: d
  } = IC(e), p = ze((h) => {
    var f;
    switch (r && r(e.children), h == null || (f = h.operation) === null || f === void 0 ? void 0 : f.type) {
      case "set_selection":
        i == null || i(e.selection);
        break;
      default:
        o == null || o(e.children);
    }
    l((C) => ({
      v: C.v + 1,
      editor: e
    })), d(e);
  }, [e, d, r, i, o]);
  B(() => (Vo.set(e, p), () => {
    Vo.set(e, () => {
    });
  }), [e, p]);
  var [v, m] = I(Z.isFocused(e));
  return B(() => {
    m(Z.isFocused(e));
  }, [e]), Lr(() => {
    var h = () => m(Z.isFocused(e));
    return Cf >= 17 ? (document.addEventListener("focusin", h), document.addEventListener("focusout", h), () => {
      document.removeEventListener("focusin", h), document.removeEventListener("focusout", h);
    }) : (document.addEventListener("focus", h, !0), document.addEventListener("blur", h, !0), () => {
      document.removeEventListener("focus", h, !0), document.removeEventListener("blur", h, !0);
    });
  }, []), /* @__PURE__ */ me.createElement(RC.Provider, {
    value: c
  }, /* @__PURE__ */ me.createElement(jf.Provider, {
    value: u
  }, /* @__PURE__ */ me.createElement(Ba.Provider, {
    value: u.editor
  }, /* @__PURE__ */ me.createElement(TC.Provider, {
    value: v
  }, n))));
}, hl = (t, e) => {
  var n = (e.top + e.bottom) / 2;
  return t.top <= n && t.bottom >= n;
}, vl = (t, e, n) => {
  var r = Z.toDOMRange(t, e).getBoundingClientRect(), i = Z.toDOMRange(t, n).getBoundingClientRect();
  return hl(r, i) && hl(i, r);
}, _C = (t, e) => {
  var n = g.range(t, V.end(e)), r = Array.from(g.positions(t, {
    at: e
  })), i = 0, o = r.length, a = Math.floor(o / 2);
  if (vl(t, g.range(t, r[i]), n))
    return g.range(t, r[i], n);
  if (r.length < 2)
    return g.range(t, r[r.length - 1], n);
  for (; a !== r.length && a !== i; )
    vl(t, g.range(t, r[a]), n) ? o = a : i = a, a = Math.floor((i + o) / 2);
  return g.range(t, r[o], n);
};
function gl(t, e) {
  var n = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(t);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function ml(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e] != null ? arguments[e] : {};
    e % 2 ? gl(Object(n), !0).forEach(function(r) {
      Ft(t, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : gl(Object(n)).forEach(function(r) {
      Object.defineProperty(t, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return t;
}
var $C = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", r = e, {
    apply: i,
    onChange: o,
    deleteBackward: a,
    addMark: s,
    removeMark: u
  } = r;
  return Ii.set(r, /* @__PURE__ */ new WeakMap()), r.addMark = (l, c) => {
    var d, p;
    (d = La.get(r)) === null || d === void 0 || d(), !kt.get(r) && (p = Dt.get(r)) !== null && p !== void 0 && p.length && kt.set(r, null), qt.delete(r), s(l, c);
  }, r.removeMark = (l) => {
    var c;
    !kt.get(r) && (c = Dt.get(r)) !== null && c !== void 0 && c.length && kt.set(r, null), qt.delete(r), u(l);
  }, r.deleteBackward = (l) => {
    if (l !== "line")
      return a(l);
    if (r.selection && V.isCollapsed(r.selection)) {
      var c = g.above(r, {
        match: (m) => ce.isElement(m) && g.isBlock(r, m),
        at: r.selection
      });
      if (c) {
        var [, d] = c, p = g.range(r, d, r.selection.anchor), v = _C(r, p);
        V.isCollapsed(v) || Q.delete(r, {
          at: v
        });
      }
    }
  }, r.apply = (l) => {
    var c = [], d = [], p = Dt.get(r);
    if (p != null && p.length) {
      var v = p.map((T) => _0(T, l)).filter(Boolean);
      Dt.set(r, v);
    }
    var m = an.get(r);
    m && an.set(r, il(r, m, l));
    var h = on.get(r);
    if (h != null && h.at) {
      var f = Oe.isPoint(h == null ? void 0 : h.at) ? Zo(r, h.at, l) : il(r, h.at, l);
      on.set(r, f ? ml(ml({}, h), {}, {
        at: f
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...Hn(r, l.path));
        break;
      }
      case "set_selection": {
        var C;
        (C = gr.get(r)) === null || C === void 0 || C.unref(), gr.delete(r);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...Hn(r, O.parent(l.path)));
        break;
      }
      case "merge_node": {
        var w = O.previous(l.path);
        c.push(...Hn(r, w));
        break;
      }
      case "move_node": {
        var b = O.common(O.parent(l.path), O.parent(l.newPath));
        c.push(...Hn(r, b));
        var S;
        O.isBefore(l.path, l.newPath) ? (c.push(...Hn(r, O.parent(l.path))), S = l.newPath) : (c.push(...Hn(r, O.parent(l.newPath))), S = l.path);
        var D = re.get(e, O.parent(S)), E = Z.findKey(r, D), L = g.pathRef(r, O.parent(S));
        d.push([L, E]);
        break;
      }
    }
    i(l);
    for (var [F, H] of c) {
      var [P] = g.node(r, F);
      Bi.set(P, H);
    }
    for (var [$, R] of d)
      if ($.current) {
        var [j] = g.node(r, $.current);
        Bi.set(j, R);
      }
  }, r.setFragmentData = (l) => {
    var {
      selection: c
    } = r;
    if (c) {
      var [d, p] = V.edges(c), v = g.void(r, {
        at: d.path
      }), m = g.void(r, {
        at: p.path
      });
      if (!(V.isCollapsed(c) && !v)) {
        var h = Z.toDOMRange(r, c), f = h.cloneContents(), C = f.childNodes[0];
        if (f.childNodes.forEach((P) => {
          P.textContent && P.textContent.trim() !== "" && (C = P);
        }), m) {
          var [w] = m, b = h.cloneRange(), S = Z.toDOMNode(r, w);
          b.setEndAfter(S), f = b.cloneContents();
        }
        if (v && (C = f.querySelector("[data-slate-spacer]")), Array.from(f.querySelectorAll("[data-slate-zero-width]")).forEach((P) => {
          var $ = P.getAttribute("data-slate-zero-width") === "n";
          P.textContent = $ ? `
` : "";
        }), Af(C)) {
          var D = C.ownerDocument.createElement("span");
          D.style.whiteSpace = "pre", D.appendChild(C), f.appendChild(D), C = D;
        }
        var E = r.getFragment(), L = JSON.stringify(E), F = window.btoa(encodeURIComponent(L));
        C.setAttribute("data-slate-fragment", F), l.setData("application/".concat(n), F);
        var H = f.ownerDocument.createElement("div");
        return H.appendChild(f), H.setAttribute("hidden", "true"), f.ownerDocument.body.appendChild(H), l.setData("text/html", H.innerHTML), l.setData("text/plain", Of(H)), f.ownerDocument.body.removeChild(H), l;
      }
    }
  }, r.insertData = (l) => {
    r.insertFragmentData(l) || r.insertTextData(l);
  }, r.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(n)) || S0(l);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), p = JSON.parse(d);
      return r.insertFragment(p), !0;
    }
    return !1;
  }, r.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), p = !1;
      for (var v of d)
        p && Q.splitNodes(r, {
          always: !0
        }), r.insertText(v), p = !0;
      return !0;
    }
    return !1;
  }, r.onChange = (l) => {
    var c = Cf < 18 ? Ec.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = Vo.get(r);
      d && d(l), o(l);
    });
  }, r;
}, Hn = (t, e) => {
  var n = [];
  for (var [r, i] of g.levels(t, {
    at: e
  })) {
    var o = Z.findKey(t, r);
    n.push([i, o]);
  }
  return n;
};
function _f(t, e, n = "type") {
  const { selection: r } = t;
  if (!r) return !1;
  const [i] = Array.from(
    g.nodes(t, {
      at: g.unhangRange(t, r),
      match: (o) => !g.isEditor(o) && ce.isElement(o) && o[n] === e
    })
  );
  return !!i;
}
const yl = ["listItem", "numberedList"], di = ["left", "center", "right", "justify"];
function zC(t, e) {
  const n = di.includes(e) ? "align" : "type", r = _f(t, e, n), i = yl.includes(e);
  Q.unwrapNodes(t, {
    match: (a) => !g.isEditor(a) && ce.isElement(a) && yl.includes(a.type) && !di.includes(e),
    split: !0
  });
  let o;
  if (di.includes(e) ? o = { align: r ? void 0 : e } : o = {
    type: r ? "paragraph" : i ? "listItem" : e
  }, Q.setNodes(t, o), !r && i) {
    const a = { type: e, children: [] };
    Q.wrapNodes(t, a);
  }
}
function Cn({ format: t, icon: e }) {
  const n = Pa(), r = di.includes(t) ? "align" : "type", o = _f(n, t, r) ? "activeTrue" : "activeFalse";
  function a(s) {
    s.preventDefault(), zC(n, t);
  }
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      type: "button",
      className: "arkynRichTextBlockButton " + o,
      onMouseDown: a,
      children: /* @__PURE__ */ x.jsx(e, {})
    }
  );
}
function WC({ attributes: t, children: e, element: n }) {
  const r = { textAlign: n.align };
  switch (n.type) {
    case "blockQuote":
      return /* @__PURE__ */ x.jsx(
        "blockquote",
        {
          className: "arkynElementBlockquote",
          style: r,
          ...t,
          children: e
        }
      );
    case "bulletedList":
      return /* @__PURE__ */ x.jsx("ul", { className: "arkynElementBulletList", style: r, ...t, children: e });
    case "headingOne":
      return /* @__PURE__ */ x.jsx("h1", { className: "arkynElementHeadingOne", style: r, ...t, children: e });
    case "headingTwo":
      return /* @__PURE__ */ x.jsx("h2", { className: "arkynElementHeadingTwo", style: r, ...t, children: e });
    case "listItem":
      return /* @__PURE__ */ x.jsx("li", { className: "arkynElementListItem", style: r, ...t, children: e });
    case "numberedList":
      return /* @__PURE__ */ x.jsx("ol", { className: "arkynElementNumberedList", style: r, ...t, children: e });
    default:
      return /* @__PURE__ */ x.jsx("p", { className: "arkynElementParagraph", style: r, ...t, children: e });
  }
}
function UC({ attributes: t, children: e, leaf: n }) {
  return n.bold && (e = /* @__PURE__ */ x.jsx("strong", { children: e })), n.code && (e = /* @__PURE__ */ x.jsx("code", { children: e })), n.italic && (e = /* @__PURE__ */ x.jsx("em", { children: e })), n.underline && (e = /* @__PURE__ */ x.jsx("u", { children: e })), /* @__PURE__ */ x.jsx("span", { ...t, children: e });
}
function $f(t, e) {
  const n = g.marks(t);
  return n ? n[e] === !0 : !1;
}
function zf(t, e) {
  $f(t, e) ? g.removeMark(t, e) : g.addMark(t, e, !0);
}
function Kr({ format: t, icon: e }) {
  const n = Pa(), i = $f(n, t) ? "activeTrue" : "activeFalse";
  function o(a) {
    a.preventDefault(), zf(n, t);
  }
  return /* @__PURE__ */ x.jsx(
    "button",
    {
      type: "button",
      className: "arkynRichTextMarkButton " + i,
      onMouseDown: o,
      children: /* @__PURE__ */ x.jsx(e, {})
    }
  );
}
function HC({ children: t }) {
  return /* @__PURE__ */ x.jsx("div", { className: "arkynRichTextToolbar", children: t });
}
const Cl = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
}, VC = [
  {
    type: "paragraph",
    children: [{ text: "" }]
  }
];
var Wf = {}, Fa = {}, Ma = {};
Object.defineProperty(Ma, "__esModule", { value: !0 });
Ma.default = YC;
var Dl = "html", bl = "head", Xr = "body", qC = /<([a-zA-Z]+[0-9]?)/, El = /<head[^]*>/i, wl = /<body[^]*>/i, xi = function(t, e) {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
}, Ko = function(t, e) {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
}, Bl = typeof window == "object" && window.DOMParser;
if (typeof Bl == "function") {
  var GC = new Bl(), ZC = "text/html";
  Ko = function(t, e) {
    return e && (t = "<".concat(e, ">").concat(t, "</").concat(e, ">")), GC.parseFromString(t, ZC);
  }, xi = Ko;
}
if (typeof document == "object" && document.implementation) {
  var Jr = document.implementation.createHTMLDocument();
  xi = function(t, e) {
    if (e) {
      var n = Jr.documentElement.querySelector(e);
      return n && (n.innerHTML = t), Jr;
    }
    return Jr.documentElement.innerHTML = t, Jr;
  };
}
var Qr = typeof document == "object" && document.createElement("template"), Xo;
Qr && Qr.content && (Xo = function(t) {
  return Qr.innerHTML = t, Qr.content.childNodes;
});
function YC(t) {
  var e, n, r = t.match(qC), i = r && r[1] ? r[1].toLowerCase() : "";
  switch (i) {
    case Dl: {
      var o = Ko(t);
      if (!El.test(t)) {
        var a = o.querySelector(bl);
        (e = a == null ? void 0 : a.parentNode) === null || e === void 0 || e.removeChild(a);
      }
      if (!wl.test(t)) {
        var a = o.querySelector(Xr);
        (n = a == null ? void 0 : a.parentNode) === null || n === void 0 || n.removeChild(a);
      }
      return o.querySelectorAll(Dl);
    }
    case bl:
    case Xr: {
      var s = xi(t).querySelectorAll(i);
      return wl.test(t) && El.test(t) ? s[0].parentNode.childNodes : s;
    }
    default: {
      if (Xo)
        return Xo(t);
      var a = xi(t, Xr).querySelector(Xr);
      return a.childNodes;
    }
  }
}
var ji = {}, ka = {}, Ta = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0;
  var e;
  (function(r) {
    r.Root = "root", r.Text = "text", r.Directive = "directive", r.Comment = "comment", r.Script = "script", r.Style = "style", r.Tag = "tag", r.CDATA = "cdata", r.Doctype = "doctype";
  })(e = t.ElementType || (t.ElementType = {}));
  function n(r) {
    return r.type === e.Tag || r.type === e.Script || r.type === e.Style;
  }
  t.isTag = n, t.Root = e.Root, t.Text = e.Text, t.Directive = e.Directive, t.Comment = e.Comment, t.Script = e.Script, t.Style = e.Style, t.Tag = e.Tag, t.CDATA = e.CDATA, t.Doctype = e.Doctype;
})(Ta);
var Fe = {}, pn = He && He.__extends || /* @__PURE__ */ function() {
  var t = function(e, n) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, i) {
      r.__proto__ = i;
    } || function(r, i) {
      for (var o in i) Object.prototype.hasOwnProperty.call(i, o) && (r[o] = i[o]);
    }, t(e, n);
  };
  return function(e, n) {
    if (typeof n != "function" && n !== null)
      throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");
    t(e, n);
    function r() {
      this.constructor = e;
    }
    e.prototype = n === null ? Object.create(n) : (r.prototype = n.prototype, new r());
  };
}(), yr = He && He.__assign || function() {
  return yr = Object.assign || function(t) {
    for (var e, n = 1, r = arguments.length; n < r; n++) {
      e = arguments[n];
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
    }
    return t;
  }, yr.apply(this, arguments);
};
Object.defineProperty(Fe, "__esModule", { value: !0 });
Fe.cloneNode = Fe.hasChildren = Fe.isDocument = Fe.isDirective = Fe.isComment = Fe.isText = Fe.isCDATA = Fe.isTag = Fe.Element = Fe.Document = Fe.CDATA = Fe.NodeWithChildren = Fe.ProcessingInstruction = Fe.Comment = Fe.Text = Fe.DataNode = Fe.Node = void 0;
var Et = Ta, Ra = (
  /** @class */
  function() {
    function t() {
      this.parent = null, this.prev = null, this.next = null, this.startIndex = null, this.endIndex = null;
    }
    return Object.defineProperty(t.prototype, "parentNode", {
      // Read-write aliases for properties
      /**
       * Same as {@link parent}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.parent;
      },
      set: function(e) {
        this.parent = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "previousSibling", {
      /**
       * Same as {@link prev}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.prev;
      },
      set: function(e) {
        this.prev = e;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(t.prototype, "nextSibling", {
      /**
       * Same as {@link next}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.next;
      },
      set: function(e) {
        this.next = e;
      },
      enumerable: !1,
      configurable: !0
    }), t.prototype.cloneNode = function(e) {
      return e === void 0 && (e = !1), Ia(this, e);
    }, t;
  }()
);
Fe.Node = Ra;
var Ni = (
  /** @class */
  function(t) {
    pn(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return r.data = n, r;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(n) {
        this.data = n;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ra)
);
Fe.DataNode = Ni;
var Uf = (
  /** @class */
  function(t) {
    pn(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = Et.ElementType.Text, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ni)
);
Fe.Text = Uf;
var Hf = (
  /** @class */
  function(t) {
    pn(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = Et.ElementType.Comment, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ni)
);
Fe.Comment = Hf;
var Vf = (
  /** @class */
  function(t) {
    pn(e, t);
    function e(n, r) {
      var i = t.call(this, r) || this;
      return i.name = n, i.type = Et.ElementType.Directive, i;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ni)
);
Fe.ProcessingInstruction = Vf;
var _i = (
  /** @class */
  function(t) {
    pn(e, t);
    function e(n) {
      var r = t.call(this) || this;
      return r.children = n, r;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var n;
        return (n = this.children[0]) !== null && n !== void 0 ? n : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "lastChild", {
      /** Last child of the node. */
      get: function() {
        return this.children.length > 0 ? this.children[this.children.length - 1] : null;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "childNodes", {
      /**
       * Same as {@link children}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.children;
      },
      set: function(n) {
        this.children = n;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ra)
);
Fe.NodeWithChildren = _i;
var qf = (
  /** @class */
  function(t) {
    pn(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = Et.ElementType.CDATA, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(_i)
);
Fe.CDATA = qf;
var Gf = (
  /** @class */
  function(t) {
    pn(e, t);
    function e() {
      var n = t !== null && t.apply(this, arguments) || this;
      return n.type = Et.ElementType.Root, n;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(_i)
);
Fe.Document = Gf;
var Zf = (
  /** @class */
  function(t) {
    pn(e, t);
    function e(n, r, i, o) {
      i === void 0 && (i = []), o === void 0 && (o = n === "script" ? Et.ElementType.Script : n === "style" ? Et.ElementType.Style : Et.ElementType.Tag);
      var a = t.call(this, i) || this;
      return a.name = n, a.attribs = r, a.type = o, a;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "tagName", {
      // DOM Level 1 aliases
      /**
       * Same as {@link name}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.name;
      },
      set: function(n) {
        this.name = n;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var n = this;
        return Object.keys(this.attribs).map(function(r) {
          var i, o;
          return {
            name: r,
            value: n.attribs[r],
            namespace: (i = n["x-attribsNamespace"]) === null || i === void 0 ? void 0 : i[r],
            prefix: (o = n["x-attribsPrefix"]) === null || o === void 0 ? void 0 : o[r]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(_i)
);
Fe.Element = Zf;
function Yf(t) {
  return (0, Et.isTag)(t);
}
Fe.isTag = Yf;
function Kf(t) {
  return t.type === Et.ElementType.CDATA;
}
Fe.isCDATA = Kf;
function Xf(t) {
  return t.type === Et.ElementType.Text;
}
Fe.isText = Xf;
function Jf(t) {
  return t.type === Et.ElementType.Comment;
}
Fe.isComment = Jf;
function Qf(t) {
  return t.type === Et.ElementType.Directive;
}
Fe.isDirective = Qf;
function ed(t) {
  return t.type === Et.ElementType.Root;
}
Fe.isDocument = ed;
function KC(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
Fe.hasChildren = KC;
function Ia(t, e) {
  e === void 0 && (e = !1);
  var n;
  if (Xf(t))
    n = new Uf(t.data);
  else if (Jf(t))
    n = new Hf(t.data);
  else if (Yf(t)) {
    var r = e ? vo(t.children) : [], i = new Zf(t.name, yr({}, t.attribs), r);
    r.forEach(function(u) {
      return u.parent = i;
    }), t.namespace != null && (i.namespace = t.namespace), t["x-attribsNamespace"] && (i["x-attribsNamespace"] = yr({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (i["x-attribsPrefix"] = yr({}, t["x-attribsPrefix"])), n = i;
  } else if (Kf(t)) {
    var r = e ? vo(t.children) : [], o = new qf(r);
    r.forEach(function(l) {
      return l.parent = o;
    }), n = o;
  } else if (ed(t)) {
    var r = e ? vo(t.children) : [], a = new Gf(r);
    r.forEach(function(l) {
      return l.parent = a;
    }), t["x-mode"] && (a["x-mode"] = t["x-mode"]), n = a;
  } else if (Qf(t)) {
    var s = new Vf(t.name, t.data);
    t["x-name"] != null && (s["x-name"] = t["x-name"], s["x-publicId"] = t["x-publicId"], s["x-systemId"] = t["x-systemId"]), n = s;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return n.startIndex = t.startIndex, n.endIndex = t.endIndex, t.sourceCodeLocation != null && (n.sourceCodeLocation = t.sourceCodeLocation), n;
}
Fe.cloneNode = Ia;
function vo(t) {
  for (var e = t.map(function(r) {
    return Ia(r, !0);
  }), n = 1; n < e.length; n++)
    e[n].prev = e[n - 1], e[n - 1].next = e[n];
  return e;
}
(function(t) {
  var e = He && He.__createBinding || (Object.create ? function(s, u, l, c) {
    c === void 0 && (c = l);
    var d = Object.getOwnPropertyDescriptor(u, l);
    (!d || ("get" in d ? !u.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
      return u[l];
    } }), Object.defineProperty(s, c, d);
  } : function(s, u, l, c) {
    c === void 0 && (c = l), s[c] = u[l];
  }), n = He && He.__exportStar || function(s, u) {
    for (var l in s) l !== "default" && !Object.prototype.hasOwnProperty.call(u, l) && e(u, s, l);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomHandler = void 0;
  var r = Ta, i = Fe;
  n(Fe, t);
  var o = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, a = (
    /** @class */
    function() {
      function s(u, l, c) {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof l == "function" && (c = l, l = o), typeof u == "object" && (l = u, u = void 0), this.callback = u ?? null, this.options = l ?? o, this.elementCB = c ?? null;
      }
      return s.prototype.onparserinit = function(u) {
        this.parser = u;
      }, s.prototype.onreset = function() {
        this.dom = [], this.root = new i.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, s.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, s.prototype.onerror = function(u) {
        this.handleCallback(u);
      }, s.prototype.onclosetag = function() {
        this.lastNode = null;
        var u = this.tagStack.pop();
        this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u);
      }, s.prototype.onopentag = function(u, l) {
        var c = this.options.xmlMode ? r.ElementType.Tag : void 0, d = new i.Element(u, l, void 0, c);
        this.addNode(d), this.tagStack.push(d);
      }, s.prototype.ontext = function(u) {
        var l = this.lastNode;
        if (l && l.type === r.ElementType.Text)
          l.data += u, this.options.withEndIndices && (l.endIndex = this.parser.endIndex);
        else {
          var c = new i.Text(u);
          this.addNode(c), this.lastNode = c;
        }
      }, s.prototype.oncomment = function(u) {
        if (this.lastNode && this.lastNode.type === r.ElementType.Comment) {
          this.lastNode.data += u;
          return;
        }
        var l = new i.Comment(u);
        this.addNode(l), this.lastNode = l;
      }, s.prototype.oncommentend = function() {
        this.lastNode = null;
      }, s.prototype.oncdatastart = function() {
        var u = new i.Text(""), l = new i.CDATA([u]);
        this.addNode(l), u.parent = l, this.lastNode = u;
      }, s.prototype.oncdataend = function() {
        this.lastNode = null;
      }, s.prototype.onprocessinginstruction = function(u, l) {
        var c = new i.ProcessingInstruction(u, l);
        this.addNode(c);
      }, s.prototype.handleCallback = function(u) {
        if (typeof this.callback == "function")
          this.callback(u, this.dom);
        else if (u)
          throw u;
      }, s.prototype.addNode = function(u) {
        var l = this.tagStack[this.tagStack.length - 1], c = l.children[l.children.length - 1];
        this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), l.children.push(u), c && (u.prev = c, c.next = u), u.parent = l, this.lastNode = null;
      }, s;
    }()
  );
  t.DomHandler = a, t.default = a;
})(ka);
var td = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES = void 0, t.CASE_SENSITIVE_TAG_NAMES = [
    "animateMotion",
    "animateTransform",
    "clipPath",
    "feBlend",
    "feColorMatrix",
    "feComponentTransfer",
    "feComposite",
    "feConvolveMatrix",
    "feDiffuseLighting",
    "feDisplacementMap",
    "feDropShadow",
    "feFlood",
    "feFuncA",
    "feFuncB",
    "feFuncG",
    "feFuncR",
    "feGaussianBlur",
    "feImage",
    "feMerge",
    "feMergeNode",
    "feMorphology",
    "feOffset",
    "fePointLight",
    "feSpecularLighting",
    "feSpotLight",
    "feTile",
    "feTurbulence",
    "foreignObject",
    "linearGradient",
    "radialGradient",
    "textPath"
  ], t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce(function(e, n) {
    return e[n.toLowerCase()] = n, e;
  }, {});
})(td);
Object.defineProperty(ji, "__esModule", { value: !0 });
ji.formatAttributes = nd;
ji.formatDOM = rd;
var ei = ka, XC = td;
function JC(t) {
  return XC.CASE_SENSITIVE_TAG_NAMES_MAP[t];
}
function nd(t) {
  for (var e = {}, n = 0, r = t.length; n < r; n++) {
    var i = t[n];
    e[i.name] = i.value;
  }
  return e;
}
function QC(t) {
  t = t.toLowerCase();
  var e = JC(t);
  return e || t;
}
function rd(t, e, n) {
  e === void 0 && (e = null);
  for (var r = [], i, o = 0, a = t.length; o < a; o++) {
    var s = t[o];
    switch (s.nodeType) {
      case 1: {
        var u = QC(s.nodeName);
        i = new ei.Element(u, nd(s.attributes)), i.children = rd(
          // template children are on content
          u === "template" ? s.content.childNodes : s.childNodes,
          i
        );
        break;
      }
      case 3:
        i = new ei.Text(s.nodeValue);
        break;
      case 8:
        i = new ei.Comment(s.nodeValue);
        break;
      default:
        continue;
    }
    var l = r[o - 1] || null;
    l && (l.next = i), i.parent = e, i.prev = l, i.next = null, r.push(i);
  }
  return n && (i = new ei.ProcessingInstruction(n.substring(0, n.indexOf(" ")).toLowerCase(), n), i.next = r[0] || null, i.parent = e, r.unshift(i), r[1] && (r[1].prev = r[0])), r;
}
var eD = He && He.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Fa, "__esModule", { value: !0 });
Fa.default = iD;
var tD = eD(Ma), nD = ji, rD = /<(![a-zA-Z\s]+)>/;
function iD(t) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t)
    return [];
  var e = t.match(rD), n = e ? e[1] : void 0;
  return (0, nD.formatDOM)((0, tD.default)(t), null, n);
}
var $i = {}, Tt = {}, zi = {}, oD = 0;
zi.SAME = oD;
var aD = 1;
zi.CAMELCASE = aD;
zi.possibleStandardNames = {
  accept: 0,
  acceptCharset: 1,
  "accept-charset": "acceptCharset",
  accessKey: 1,
  action: 0,
  allowFullScreen: 1,
  alt: 0,
  as: 0,
  async: 0,
  autoCapitalize: 1,
  autoComplete: 1,
  autoCorrect: 1,
  autoFocus: 1,
  autoPlay: 1,
  autoSave: 1,
  capture: 0,
  cellPadding: 1,
  cellSpacing: 1,
  challenge: 0,
  charSet: 1,
  checked: 0,
  children: 0,
  cite: 0,
  class: "className",
  classID: 1,
  className: 1,
  cols: 0,
  colSpan: 1,
  content: 0,
  contentEditable: 1,
  contextMenu: 1,
  controls: 0,
  controlsList: 1,
  coords: 0,
  crossOrigin: 1,
  dangerouslySetInnerHTML: 1,
  data: 0,
  dateTime: 1,
  default: 0,
  defaultChecked: 1,
  defaultValue: 1,
  defer: 0,
  dir: 0,
  disabled: 0,
  disablePictureInPicture: 1,
  disableRemotePlayback: 1,
  download: 0,
  draggable: 0,
  encType: 1,
  enterKeyHint: 1,
  for: "htmlFor",
  form: 0,
  formMethod: 1,
  formAction: 1,
  formEncType: 1,
  formNoValidate: 1,
  formTarget: 1,
  frameBorder: 1,
  headers: 0,
  height: 0,
  hidden: 0,
  high: 0,
  href: 0,
  hrefLang: 1,
  htmlFor: 1,
  httpEquiv: 1,
  "http-equiv": "httpEquiv",
  icon: 0,
  id: 0,
  innerHTML: 1,
  inputMode: 1,
  integrity: 0,
  is: 0,
  itemID: 1,
  itemProp: 1,
  itemRef: 1,
  itemScope: 1,
  itemType: 1,
  keyParams: 1,
  keyType: 1,
  kind: 0,
  label: 0,
  lang: 0,
  list: 0,
  loop: 0,
  low: 0,
  manifest: 0,
  marginWidth: 1,
  marginHeight: 1,
  max: 0,
  maxLength: 1,
  media: 0,
  mediaGroup: 1,
  method: 0,
  min: 0,
  minLength: 1,
  multiple: 0,
  muted: 0,
  name: 0,
  noModule: 1,
  nonce: 0,
  noValidate: 1,
  open: 0,
  optimum: 0,
  pattern: 0,
  placeholder: 0,
  playsInline: 1,
  poster: 0,
  preload: 0,
  profile: 0,
  radioGroup: 1,
  readOnly: 1,
  referrerPolicy: 1,
  rel: 0,
  required: 0,
  reversed: 0,
  role: 0,
  rows: 0,
  rowSpan: 1,
  sandbox: 0,
  scope: 0,
  scoped: 0,
  scrolling: 0,
  seamless: 0,
  selected: 0,
  shape: 0,
  size: 0,
  sizes: 0,
  span: 0,
  spellCheck: 1,
  src: 0,
  srcDoc: 1,
  srcLang: 1,
  srcSet: 1,
  start: 0,
  step: 0,
  style: 0,
  summary: 0,
  tabIndex: 1,
  target: 0,
  title: 0,
  type: 0,
  useMap: 1,
  value: 0,
  width: 0,
  wmode: 0,
  wrap: 0,
  about: 0,
  accentHeight: 1,
  "accent-height": "accentHeight",
  accumulate: 0,
  additive: 0,
  alignmentBaseline: 1,
  "alignment-baseline": "alignmentBaseline",
  allowReorder: 1,
  alphabetic: 0,
  amplitude: 0,
  arabicForm: 1,
  "arabic-form": "arabicForm",
  ascent: 0,
  attributeName: 1,
  attributeType: 1,
  autoReverse: 1,
  azimuth: 0,
  baseFrequency: 1,
  baselineShift: 1,
  "baseline-shift": "baselineShift",
  baseProfile: 1,
  bbox: 0,
  begin: 0,
  bias: 0,
  by: 0,
  calcMode: 1,
  capHeight: 1,
  "cap-height": "capHeight",
  clip: 0,
  clipPath: 1,
  "clip-path": "clipPath",
  clipPathUnits: 1,
  clipRule: 1,
  "clip-rule": "clipRule",
  color: 0,
  colorInterpolation: 1,
  "color-interpolation": "colorInterpolation",
  colorInterpolationFilters: 1,
  "color-interpolation-filters": "colorInterpolationFilters",
  colorProfile: 1,
  "color-profile": "colorProfile",
  colorRendering: 1,
  "color-rendering": "colorRendering",
  contentScriptType: 1,
  contentStyleType: 1,
  cursor: 0,
  cx: 0,
  cy: 0,
  d: 0,
  datatype: 0,
  decelerate: 0,
  descent: 0,
  diffuseConstant: 1,
  direction: 0,
  display: 0,
  divisor: 0,
  dominantBaseline: 1,
  "dominant-baseline": "dominantBaseline",
  dur: 0,
  dx: 0,
  dy: 0,
  edgeMode: 1,
  elevation: 0,
  enableBackground: 1,
  "enable-background": "enableBackground",
  end: 0,
  exponent: 0,
  externalResourcesRequired: 1,
  fill: 0,
  fillOpacity: 1,
  "fill-opacity": "fillOpacity",
  fillRule: 1,
  "fill-rule": "fillRule",
  filter: 0,
  filterRes: 1,
  filterUnits: 1,
  floodOpacity: 1,
  "flood-opacity": "floodOpacity",
  floodColor: 1,
  "flood-color": "floodColor",
  focusable: 0,
  fontFamily: 1,
  "font-family": "fontFamily",
  fontSize: 1,
  "font-size": "fontSize",
  fontSizeAdjust: 1,
  "font-size-adjust": "fontSizeAdjust",
  fontStretch: 1,
  "font-stretch": "fontStretch",
  fontStyle: 1,
  "font-style": "fontStyle",
  fontVariant: 1,
  "font-variant": "fontVariant",
  fontWeight: 1,
  "font-weight": "fontWeight",
  format: 0,
  from: 0,
  fx: 0,
  fy: 0,
  g1: 0,
  g2: 0,
  glyphName: 1,
  "glyph-name": "glyphName",
  glyphOrientationHorizontal: 1,
  "glyph-orientation-horizontal": "glyphOrientationHorizontal",
  glyphOrientationVertical: 1,
  "glyph-orientation-vertical": "glyphOrientationVertical",
  glyphRef: 1,
  gradientTransform: 1,
  gradientUnits: 1,
  hanging: 0,
  horizAdvX: 1,
  "horiz-adv-x": "horizAdvX",
  horizOriginX: 1,
  "horiz-origin-x": "horizOriginX",
  ideographic: 0,
  imageRendering: 1,
  "image-rendering": "imageRendering",
  in2: 0,
  in: 0,
  inlist: 0,
  intercept: 0,
  k1: 0,
  k2: 0,
  k3: 0,
  k4: 0,
  k: 0,
  kernelMatrix: 1,
  kernelUnitLength: 1,
  kerning: 0,
  keyPoints: 1,
  keySplines: 1,
  keyTimes: 1,
  lengthAdjust: 1,
  letterSpacing: 1,
  "letter-spacing": "letterSpacing",
  lightingColor: 1,
  "lighting-color": "lightingColor",
  limitingConeAngle: 1,
  local: 0,
  markerEnd: 1,
  "marker-end": "markerEnd",
  markerHeight: 1,
  markerMid: 1,
  "marker-mid": "markerMid",
  markerStart: 1,
  "marker-start": "markerStart",
  markerUnits: 1,
  markerWidth: 1,
  mask: 0,
  maskContentUnits: 1,
  maskUnits: 1,
  mathematical: 0,
  mode: 0,
  numOctaves: 1,
  offset: 0,
  opacity: 0,
  operator: 0,
  order: 0,
  orient: 0,
  orientation: 0,
  origin: 0,
  overflow: 0,
  overlinePosition: 1,
  "overline-position": "overlinePosition",
  overlineThickness: 1,
  "overline-thickness": "overlineThickness",
  paintOrder: 1,
  "paint-order": "paintOrder",
  panose1: 0,
  "panose-1": "panose1",
  pathLength: 1,
  patternContentUnits: 1,
  patternTransform: 1,
  patternUnits: 1,
  pointerEvents: 1,
  "pointer-events": "pointerEvents",
  points: 0,
  pointsAtX: 1,
  pointsAtY: 1,
  pointsAtZ: 1,
  prefix: 0,
  preserveAlpha: 1,
  preserveAspectRatio: 1,
  primitiveUnits: 1,
  property: 0,
  r: 0,
  radius: 0,
  refX: 1,
  refY: 1,
  renderingIntent: 1,
  "rendering-intent": "renderingIntent",
  repeatCount: 1,
  repeatDur: 1,
  requiredExtensions: 1,
  requiredFeatures: 1,
  resource: 0,
  restart: 0,
  result: 0,
  results: 0,
  rotate: 0,
  rx: 0,
  ry: 0,
  scale: 0,
  security: 0,
  seed: 0,
  shapeRendering: 1,
  "shape-rendering": "shapeRendering",
  slope: 0,
  spacing: 0,
  specularConstant: 1,
  specularExponent: 1,
  speed: 0,
  spreadMethod: 1,
  startOffset: 1,
  stdDeviation: 1,
  stemh: 0,
  stemv: 0,
  stitchTiles: 1,
  stopColor: 1,
  "stop-color": "stopColor",
  stopOpacity: 1,
  "stop-opacity": "stopOpacity",
  strikethroughPosition: 1,
  "strikethrough-position": "strikethroughPosition",
  strikethroughThickness: 1,
  "strikethrough-thickness": "strikethroughThickness",
  string: 0,
  stroke: 0,
  strokeDasharray: 1,
  "stroke-dasharray": "strokeDasharray",
  strokeDashoffset: 1,
  "stroke-dashoffset": "strokeDashoffset",
  strokeLinecap: 1,
  "stroke-linecap": "strokeLinecap",
  strokeLinejoin: 1,
  "stroke-linejoin": "strokeLinejoin",
  strokeMiterlimit: 1,
  "stroke-miterlimit": "strokeMiterlimit",
  strokeWidth: 1,
  "stroke-width": "strokeWidth",
  strokeOpacity: 1,
  "stroke-opacity": "strokeOpacity",
  suppressContentEditableWarning: 1,
  suppressHydrationWarning: 1,
  surfaceScale: 1,
  systemLanguage: 1,
  tableValues: 1,
  targetX: 1,
  targetY: 1,
  textAnchor: 1,
  "text-anchor": "textAnchor",
  textDecoration: 1,
  "text-decoration": "textDecoration",
  textLength: 1,
  textRendering: 1,
  "text-rendering": "textRendering",
  to: 0,
  transform: 0,
  typeof: 0,
  u1: 0,
  u2: 0,
  underlinePosition: 1,
  "underline-position": "underlinePosition",
  underlineThickness: 1,
  "underline-thickness": "underlineThickness",
  unicode: 0,
  unicodeBidi: 1,
  "unicode-bidi": "unicodeBidi",
  unicodeRange: 1,
  "unicode-range": "unicodeRange",
  unitsPerEm: 1,
  "units-per-em": "unitsPerEm",
  unselectable: 0,
  vAlphabetic: 1,
  "v-alphabetic": "vAlphabetic",
  values: 0,
  vectorEffect: 1,
  "vector-effect": "vectorEffect",
  version: 0,
  vertAdvY: 1,
  "vert-adv-y": "vertAdvY",
  vertOriginX: 1,
  "vert-origin-x": "vertOriginX",
  vertOriginY: 1,
  "vert-origin-y": "vertOriginY",
  vHanging: 1,
  "v-hanging": "vHanging",
  vIdeographic: 1,
  "v-ideographic": "vIdeographic",
  viewBox: 1,
  viewTarget: 1,
  visibility: 0,
  vMathematical: 1,
  "v-mathematical": "vMathematical",
  vocab: 0,
  widths: 0,
  wordSpacing: 1,
  "word-spacing": "wordSpacing",
  writingMode: 1,
  "writing-mode": "writingMode",
  x1: 0,
  x2: 0,
  x: 0,
  xChannelSelector: 1,
  xHeight: 1,
  "x-height": "xHeight",
  xlinkActuate: 1,
  "xlink:actuate": "xlinkActuate",
  xlinkArcrole: 1,
  "xlink:arcrole": "xlinkArcrole",
  xlinkHref: 1,
  "xlink:href": "xlinkHref",
  xlinkRole: 1,
  "xlink:role": "xlinkRole",
  xlinkShow: 1,
  "xlink:show": "xlinkShow",
  xlinkTitle: 1,
  "xlink:title": "xlinkTitle",
  xlinkType: 1,
  "xlink:type": "xlinkType",
  xmlBase: 1,
  "xml:base": "xmlBase",
  xmlLang: 1,
  "xml:lang": "xmlLang",
  xmlns: 0,
  "xml:space": "xmlSpace",
  xmlnsXlink: 1,
  "xmlns:xlink": "xmlnsXlink",
  xmlSpace: 1,
  y1: 0,
  y2: 0,
  y: 0,
  yChannelSelector: 1,
  z: 0,
  zoomAndPan: 1
};
const id = 0, hn = 1, Wi = 2, Ui = 3, ja = 4, od = 5, ad = 6;
function sD(t) {
  return pt.hasOwnProperty(t) ? pt[t] : null;
}
function Ct(t, e, n, r, i, o, a) {
  this.acceptsBooleans = e === Wi || e === Ui || e === ja, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = t, this.type = e, this.sanitizeURL = o, this.removeEmptyString = a;
}
const pt = {}, uD = [
  "children",
  "dangerouslySetInnerHTML",
  // TODO: This prevents the assignment of defaultValue to regular
  // elements (not just inputs). Now that ReactDOMInput assigns to the
  // defaultValue property -- do we need this?
  "defaultValue",
  "defaultChecked",
  "innerHTML",
  "suppressContentEditableWarning",
  "suppressHydrationWarning",
  "style"
];
uD.forEach((t) => {
  pt[t] = new Ct(
    t,
    id,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"]
].forEach(([t, e]) => {
  pt[t] = new Ct(
    t,
    hn,
    !1,
    // mustUseProperty
    e,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["contentEditable", "draggable", "spellCheck", "value"].forEach((t) => {
  pt[t] = new Ct(
    t,
    Wi,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha"
].forEach((t) => {
  pt[t] = new Ct(
    t,
    Wi,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "allowFullScreen",
  "async",
  // Note: there is a special case that prevents it from being written to the DOM
  // on the client side because the browsers are inconsistent. Instead we call focus().
  "autoFocus",
  "autoPlay",
  "controls",
  "default",
  "defer",
  "disabled",
  "disablePictureInPicture",
  "disableRemotePlayback",
  "formNoValidate",
  "hidden",
  "loop",
  "noModule",
  "noValidate",
  "open",
  "playsInline",
  "readOnly",
  "required",
  "reversed",
  "scoped",
  "seamless",
  // Microdata
  "itemScope"
].forEach((t) => {
  pt[t] = new Ct(
    t,
    Ui,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "checked",
  // Note: `option.selected` is not updated if `select.multiple` is
  // disabled with `removeAttribute`. We have special logic for handling this.
  "multiple",
  "muted",
  "selected"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((t) => {
  pt[t] = new Ct(
    t,
    Ui,
    !0,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "capture",
  "download"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((t) => {
  pt[t] = new Ct(
    t,
    ja,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "cols",
  "rows",
  "size",
  "span"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((t) => {
  pt[t] = new Ct(
    t,
    ad,
    !1,
    // mustUseProperty
    t,
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["rowSpan", "start"].forEach((t) => {
  pt[t] = new Ct(
    t,
    od,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
const Na = /[\-\:]([a-z])/g, _a = (t) => t[1].toUpperCase();
[
  "accent-height",
  "alignment-baseline",
  "arabic-form",
  "baseline-shift",
  "cap-height",
  "clip-path",
  "clip-rule",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "dominant-baseline",
  "enable-background",
  "fill-opacity",
  "fill-rule",
  "flood-color",
  "flood-opacity",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-name",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "horiz-adv-x",
  "horiz-origin-x",
  "image-rendering",
  "letter-spacing",
  "lighting-color",
  "marker-end",
  "marker-mid",
  "marker-start",
  "overline-position",
  "overline-thickness",
  "paint-order",
  "panose-1",
  "pointer-events",
  "rendering-intent",
  "shape-rendering",
  "stop-color",
  "stop-opacity",
  "strikethrough-position",
  "strikethrough-thickness",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-decoration",
  "text-rendering",
  "underline-position",
  "underline-thickness",
  "unicode-bidi",
  "unicode-range",
  "units-per-em",
  "v-alphabetic",
  "v-hanging",
  "v-ideographic",
  "v-mathematical",
  "vector-effect",
  "vert-adv-y",
  "vert-origin-x",
  "vert-origin-y",
  "word-spacing",
  "writing-mode",
  "xmlns:xlink",
  "x-height"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((t) => {
  const e = t.replace(Na, _a);
  pt[e] = new Ct(
    e,
    hn,
    !1,
    // mustUseProperty
    t,
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "xlink:actuate",
  "xlink:arcrole",
  "xlink:role",
  "xlink:show",
  "xlink:title",
  "xlink:type"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((t) => {
  const e = t.replace(Na, _a);
  pt[e] = new Ct(
    e,
    hn,
    !1,
    // mustUseProperty
    t,
    "http://www.w3.org/1999/xlink",
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
[
  "xml:base",
  "xml:lang",
  "xml:space"
  // NOTE: if you add a camelCased prop to this list,
  // you'll need to set attributeName to name.toLowerCase()
  // instead in the assignment below.
].forEach((t) => {
  const e = t.replace(Na, _a);
  pt[e] = new Ct(
    e,
    hn,
    !1,
    // mustUseProperty
    t,
    "http://www.w3.org/XML/1998/namespace",
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
["tabIndex", "crossOrigin"].forEach((t) => {
  pt[t] = new Ct(
    t,
    hn,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !1,
    // sanitizeURL
    !1
    // removeEmptyString
  );
});
const lD = "xlinkHref";
pt[lD] = new Ct(
  "xlinkHref",
  hn,
  !1,
  // mustUseProperty
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  // sanitizeURL
  !1
  // removeEmptyString
);
["src", "href", "action", "formAction"].forEach((t) => {
  pt[t] = new Ct(
    t,
    hn,
    !1,
    // mustUseProperty
    t.toLowerCase(),
    // attributeName
    null,
    // attributeNamespace
    !0,
    // sanitizeURL
    !0
    // removeEmptyString
  );
});
const {
  CAMELCASE: cD,
  SAME: fD,
  possibleStandardNames: xl
} = zi, dD = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", pD = dD + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", hD = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + pD + "]*$")
), vD = Object.keys(
  xl
).reduce((t, e) => {
  const n = xl[e];
  return n === fD ? t[e] = e : n === cD ? t[e.toLowerCase()] = e : t[e] = n, t;
}, {});
Tt.BOOLEAN = Ui;
Tt.BOOLEANISH_STRING = Wi;
Tt.NUMERIC = od;
Tt.OVERLOADED_BOOLEAN = ja;
Tt.POSITIVE_NUMERIC = ad;
Tt.RESERVED = id;
Tt.STRING = hn;
Tt.getPropertyInfo = sD;
Tt.isCustomAttribute = hD;
Tt.possibleStandardNames = vD;
var $a = {}, za = {}, Al = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, gD = /\n/g, mD = /^\s*/, yD = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, CD = /^:\s*/, DD = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, bD = /^[;\s]*/, ED = /^\s+|\s+$/g, wD = `
`, Ll = "/", Ol = "*", wn = "", BD = "comment", xD = "declaration", AD = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var n = 1, r = 1;
  function i(m) {
    var h = m.match(gD);
    h && (n += h.length);
    var f = m.lastIndexOf(wD);
    r = ~f ? m.length - f : r + m.length;
  }
  function o() {
    var m = { line: n, column: r };
    return function(h) {
      return h.position = new a(m), l(), h;
    };
  }
  function a(m) {
    this.start = m, this.end = { line: n, column: r }, this.source = e.source;
  }
  a.prototype.content = t;
  function s(m) {
    var h = new Error(
      e.source + ":" + n + ":" + r + ": " + m
    );
    if (h.reason = m, h.filename = e.source, h.line = n, h.column = r, h.source = t, !e.silent) throw h;
  }
  function u(m) {
    var h = m.exec(t);
    if (h) {
      var f = h[0];
      return i(f), t = t.slice(f.length), h;
    }
  }
  function l() {
    u(mD);
  }
  function c(m) {
    var h;
    for (m = m || []; h = d(); )
      h !== !1 && m.push(h);
    return m;
  }
  function d() {
    var m = o();
    if (!(Ll != t.charAt(0) || Ol != t.charAt(1))) {
      for (var h = 2; wn != t.charAt(h) && (Ol != t.charAt(h) || Ll != t.charAt(h + 1)); )
        ++h;
      if (h += 2, wn === t.charAt(h - 1))
        return s("End of comment missing");
      var f = t.slice(2, h - 2);
      return r += 2, i(f), t = t.slice(h), r += 2, m({
        type: BD,
        comment: f
      });
    }
  }
  function p() {
    var m = o(), h = u(yD);
    if (h) {
      if (d(), !u(CD)) return s("property missing ':'");
      var f = u(DD), C = m({
        type: xD,
        property: Sl(h[0].replace(Al, wn)),
        value: f ? Sl(f[0].replace(Al, wn)) : wn
      });
      return u(bD), C;
    }
  }
  function v() {
    var m = [];
    c(m);
    for (var h; h = p(); )
      h !== !1 && (m.push(h), c(m));
    return m;
  }
  return l(), v();
};
function Sl(t) {
  return t ? t.replace(ED, wn) : wn;
}
var LD = He && He.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(za, "__esModule", { value: !0 });
za.default = SD;
var OD = LD(AD);
function SD(t, e) {
  var n = null;
  if (!t || typeof t != "string")
    return n;
  var r = (0, OD.default)(t), i = typeof e == "function";
  return r.forEach(function(o) {
    if (o.type === "declaration") {
      var a = o.property, s = o.value;
      i ? e(a, s, o) : s && (n = n || {}, n[a] = s);
    }
  }), n;
}
var Hi = {};
Object.defineProperty(Hi, "__esModule", { value: !0 });
Hi.camelCase = void 0;
var PD = /^--[a-zA-Z0-9-]+$/, FD = /-([a-z])/g, MD = /^[^-]+$/, kD = /^-(webkit|moz|ms|o|khtml)-/, TD = /^-(ms)-/, RD = function(t) {
  return !t || MD.test(t) || PD.test(t);
}, ID = function(t, e) {
  return e.toUpperCase();
}, Pl = function(t, e) {
  return "".concat(e, "-");
}, jD = function(t, e) {
  return e === void 0 && (e = {}), RD(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(TD, Pl) : t = t.replace(kD, Pl), t.replace(FD, ID));
};
Hi.camelCase = jD;
var ND = He && He.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
}, _D = ND(za), $D = Hi;
function Jo(t, e) {
  var n = {};
  return !t || typeof t != "string" || (0, _D.default)(t, function(r, i) {
    r && i && (n[(0, $D.camelCase)(r, e)] = i);
  }), n;
}
Jo.default = Jo;
var zD = Jo;
(function(t) {
  var e = He && He.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.returnFirstArg = t.canTextBeChildOfNode = t.ELEMENTS_WITH_NO_TEXT_CHILDREN = t.PRESERVE_CUSTOM_ATTRIBUTES = void 0, t.isCustomComponent = o, t.setStyleProp = s;
  var n = me, r = e(zD), i = /* @__PURE__ */ new Set([
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph"
  ]);
  function o(c, d) {
    return c.includes("-") ? !i.has(c) : !!(d && typeof d.is == "string");
  }
  var a = {
    reactCompat: !0
  };
  function s(c, d) {
    if (typeof c == "string") {
      if (!c.trim()) {
        d.style = {};
        return;
      }
      try {
        d.style = (0, r.default)(c, a);
      } catch {
        d.style = {};
      }
    }
  }
  t.PRESERVE_CUSTOM_ATTRIBUTES = Number(n.version.split(".")[0]) >= 16, t.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
    "tr",
    "tbody",
    "thead",
    "tfoot",
    "colgroup",
    "table",
    "head",
    "html",
    "frameset"
  ]);
  var u = function(c) {
    return !t.ELEMENTS_WITH_NO_TEXT_CHILDREN.has(c.name);
  };
  t.canTextBeChildOfNode = u;
  var l = function(c) {
    return c;
  };
  t.returnFirstArg = l;
})($a);
Object.defineProperty($i, "__esModule", { value: !0 });
$i.default = VD;
var dr = Tt, Fl = $a, WD = ["checked", "value"], UD = ["input", "select", "textarea"], HD = {
  reset: !0,
  submit: !0
};
function VD(t, e) {
  t === void 0 && (t = {});
  var n = {}, r = !!(t.type && HD[t.type]);
  for (var i in t) {
    var o = t[i];
    if ((0, dr.isCustomAttribute)(i)) {
      n[i] = o;
      continue;
    }
    var a = i.toLowerCase(), s = Ml(a);
    if (s) {
      var u = (0, dr.getPropertyInfo)(s);
      switch (WD.includes(s) && UD.includes(e) && !r && (s = Ml("default" + a)), n[s] = o, u && u.type) {
        case dr.BOOLEAN:
          n[s] = !0;
          break;
        case dr.OVERLOADED_BOOLEAN:
          o === "" && (n[s] = !0);
          break;
      }
      continue;
    }
    Fl.PRESERVE_CUSTOM_ATTRIBUTES && (n[i] = o);
  }
  return (0, Fl.setStyleProp)(t.style, n), n;
}
function Ml(t) {
  return dr.possibleStandardNames[t];
}
var Wa = {}, qD = He && He.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Wa, "__esModule", { value: !0 });
Wa.default = sd;
var go = me, GD = qD($i), Cr = $a, ZD = {
  cloneElement: go.cloneElement,
  createElement: go.createElement,
  isValidElement: go.isValidElement
};
function sd(t, e) {
  e === void 0 && (e = {});
  for (var n = [], r = typeof e.replace == "function", i = e.transform || Cr.returnFirstArg, o = e.library || ZD, a = o.cloneElement, s = o.createElement, u = o.isValidElement, l = t.length, c = 0; c < l; c++) {
    var d = t[c];
    if (r) {
      var p = e.replace(d, c);
      if (u(p)) {
        l > 1 && (p = a(p, {
          key: p.key || c
        })), n.push(i(p, d, c));
        continue;
      }
    }
    if (d.type === "text") {
      var v = !d.data.trim().length;
      if (v && d.parent && !(0, Cr.canTextBeChildOfNode)(d.parent) || e.trim && v)
        continue;
      n.push(i(d.data, d, c));
      continue;
    }
    var m = d, h = {};
    YD(m) ? ((0, Cr.setStyleProp)(m.attribs.style, m.attribs), h = m.attribs) : m.attribs && (h = (0, GD.default)(m.attribs, m.name));
    var f = void 0;
    switch (d.type) {
      case "script":
      case "style":
        d.children[0] && (h.dangerouslySetInnerHTML = {
          __html: d.children[0].data
        });
        break;
      case "tag":
        d.name === "textarea" && d.children[0] ? h.defaultValue = d.children[0].data : d.children && d.children.length && (f = sd(d.children, e));
        break;
      default:
        continue;
    }
    l > 1 && (h.key = c), n.push(i(s(d.name, h, f), d, c));
  }
  return n.length === 1 ? n[0] : n;
}
function YD(t) {
  return Cr.PRESERVE_CUSTOM_ATTRIBUTES && t.type === "tag" && (0, Cr.isCustomComponent)(t.name, t.attribs);
}
(function(t) {
  var e = He && He.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0, t.default = s;
  var n = e(Fa);
  t.htmlToDOM = n.default;
  var r = e($i);
  t.attributesToProps = r.default;
  var i = e(Wa);
  t.domToReact = i.default;
  var o = ka;
  Object.defineProperty(t, "Comment", { enumerable: !0, get: function() {
    return o.Comment;
  } }), Object.defineProperty(t, "Element", { enumerable: !0, get: function() {
    return o.Element;
  } }), Object.defineProperty(t, "ProcessingInstruction", { enumerable: !0, get: function() {
    return o.ProcessingInstruction;
  } }), Object.defineProperty(t, "Text", { enumerable: !0, get: function() {
    return o.Text;
  } });
  var a = { lowerCaseAttributeNames: !1 };
  function s(u, l) {
    if (typeof u != "string")
      throw new TypeError("First argument must be a string");
    return u ? (0, i.default)((0, n.default)(u, (l == null ? void 0 : l.htmlparser2) || a), l) : [];
  }
})(Wf);
const kl = /* @__PURE__ */ Pi(Wf), KD = kl.default || kl, Qo = (t) => {
  if (typeof t == "string") return { text: t || "" };
  function e(i) {
    return i.map((o) => Qo(o));
  }
  const n = Array.isArray(t.props.children) ? e(t.props.children) : [{ text: t.props.children }], r = typeof t.props.children == "string" ? t.props.children : "";
  switch (t.type) {
    case "p":
      return { type: "paragraph", children: n };
    case "blockquote":
      return { type: "blockQuote", children: n };
    case "ul":
      return { type: "bulletedList", children: n };
    case "h1":
      return { type: "headingOne", children: n };
    case "h2":
      return { type: "headingTwo", children: n };
    case "li":
      return { type: "listItem", children: n };
    case "ol":
      return { type: "numberedList", children: n };
    case "strong":
      return { type: "paragraph", text: r, bold: !0 };
    case "code":
      return { text: r, code: !0 };
    case "em":
      return { text: r, italic: !0 };
    case "u":
      return { text: r, underline: !0 };
    default:
      return { text: r };
  }
}, XD = (t) => {
  const e = KD(t);
  return Array.isArray(e) ? e.flatMap((n) => typeof n == "string" ? { text: n } : Qo(n)) : typeof e == "string" ? [{ text: e }] : [Qo(e)];
};
function Tl(t) {
  return t.map((e) => re.string(e)).join("");
}
const ud = (t) => {
  if (fe.isText(t)) {
    let e = t.text;
    return t.bold && (e = `<strong>${e}</strong>`), t.code && (e = `<code>${e}</code>`), t.italic && (e = `<em>${e}</em>`), t.underline && (e = `<u>${e}</u>`), e;
  }
  if (ce.isElement(t)) {
    const e = t.children.map((n) => ud(n)).join("");
    switch (t.type) {
      case "paragraph":
        return `<p>${e}</p>`;
      case "blockQuote":
        return `<blockquote>${e}</blockquote>`;
      case "bulletedList":
        return `<ul>${e}</ul>`;
      case "headingOne":
        return `<h1>${e}</h1>`;
      case "headingTwo":
        return `<h2>${e}</h2>`;
      case "listItem":
        return `<li>${e}</li>`;
      case "numberedList":
        return `<ol>${e}</ol>`;
      default:
        return e;
    }
  }
  return "";
}, Rl = (t) => t.children.map((e) => ud(e)).join(""), Il = (t) => /<\/?[a-z][\s\S]*>/i.test(t);
function Sw({
  name: t,
  defaultValue: e,
  enforceCharacterLimit: n = !1,
  onChangeCharactersCount: r,
  maxLimit: i = 2e3,
  onValueChange: o,
  onChange: a,
  isError: s
}) {
  const u = Gt(() => Fm($C(Om())), []), { id: l, inputRef: c, error: d } = Lt(), p = Ue(null), v = Il(e) ? XD(e) : VC, m = Tl(v), [h, f] = I(m.length), [C, w] = I(
    Il(e) ? e : ""
  ), [b, S] = I(!1), D = c || p, E = s || !!d, L = ze(UC, []), F = ze(WC, []);
  function H(T) {
    const N = Tl(T);
    f(N.length), r && r(N.length), !(n && N.length >= i) && (w(Rl(u)), a && a(T), o && o(Rl(u)), u.children = T, Q.setNodes(u, { children: T }));
  }
  const P = b ? "focusTrue" : "focusFalse", R = `arkynRichText ${E || i < h ? "errorTrue" : "errorFalse"} ${P}`, j = i - h;
  return /* @__PURE__ */ x.jsxs(
    NC,
    {
      editor: u,
      initialValue: v,
      onChange: H,
      onValueChange: H,
      children: [
        /* @__PURE__ */ x.jsxs("div", { className: R, children: [
          /* @__PURE__ */ x.jsxs(HC, { children: [
            /* @__PURE__ */ x.jsx(Cn, { format: "headingOne", icon: qd }),
            /* @__PURE__ */ x.jsx(Cn, { format: "headingTwo", icon: Gd }),
            /* @__PURE__ */ x.jsx(Cn, { format: "blockQuote", icon: Zd }),
            /* @__PURE__ */ x.jsx(Kr, { format: "bold", icon: Yd }),
            /* @__PURE__ */ x.jsx(Kr, { format: "italic", icon: Kd }),
            /* @__PURE__ */ x.jsx(Kr, { format: "underline", icon: Xd }),
            /* @__PURE__ */ x.jsx(Kr, { format: "code", icon: Jd }),
            /* @__PURE__ */ x.jsx(Cn, { format: "left", icon: Qd }),
            /* @__PURE__ */ x.jsx(Cn, { format: "right", icon: ep }),
            /* @__PURE__ */ x.jsx(Cn, { format: "center", icon: tp }),
            /* @__PURE__ */ x.jsx(Cn, { format: "justify", icon: np })
          ] }),
          /* @__PURE__ */ x.jsx(
            SC,
            {
              className: "editorContainer",
              renderElement: F,
              renderLeaf: L,
              spellCheck: !0,
              id: l,
              onFocus: () => S(!0),
              onBlur: () => S(!1),
              onKeyDown: (T) => {
                for (const N in Cl)
                  if (Kh(N, T)) {
                    T.preventDefault();
                    const K = Cl[N];
                    zf(u, K);
                  }
              }
            }
          ),
          j < 0 && /* @__PURE__ */ x.jsx("div", { className: "restatesCharacters", children: j })
        ] }),
        /* @__PURE__ */ x.jsx("input", { ref: D, type: "hidden", name: t, value: C }),
        /* @__PURE__ */ x.jsx("input", { type: "hidden", name: `${t}Count`, value: h })
      ]
    }
  );
}
function JD(t, e) {
  const {
    isLoading: n,
    isError: r,
    size: i = "md",
    className: o = "",
    variant: a = "solid",
    prefix: s,
    leftIcon: u,
    disabled: l,
    readOnly: c,
    onFocus: d,
    onBlur: p,
    title: v,
    style: m,
    closeOnSelect: h = !0,
    ...f
  } = t, D = `arkyn_select ${s ? "hasPrefix" : ""} ${a} ${i} ${l || c || n ? "opacity" : ""} ${r ? "errored" : ""} ${e ? "focused" : ""} ${o}`, L = { md: 20, lg: 20 }[i];
  return {
    isLoading: n,
    className: D,
    prefix: hp(s, L, "prefix"),
    LeftIcon: u,
    disabled: l || n || c,
    onFocus: d,
    onBlur: p,
    title: v,
    closeOnSelect: h,
    style: m,
    iconSize: L,
    Spinner: /* @__PURE__ */ x.jsx(kn, { className: "spinner", size: L, strokeWidth: 2.5 }),
    ...f
  };
}
function Pw(t) {
  var J;
  const [e, n] = I(!1), { inputRef: r, id: i, error: o } = Lt(), a = Ue(null), s = r || a, u = t.isError || !!o, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: v,
    iconSize: m,
    isLoading: h,
    LeftIcon: f,
    value: C = null,
    defaultValue: w = "",
    onFocus: b,
    onBlur: S,
    Spinner: D,
    name: E,
    placeholder: L,
    onSelect: F,
    options: H,
    optionMaxHeight: P,
    closeOnSelect: $,
    ...R
  } = JD({ ...t, id: i, isError: u }, e), [j, T] = I(w);
  function N() {
    l || !(s != null && s.current) || e || (n(!0), s.current.focus());
  }
  function K(q) {
    e || (n(!0), b && b(q));
  }
  function _() {
    n(!1), S && s.current && s.current.blur();
  }
  function oe(q) {
    const { label: te, value: Y } = q;
    T(j !== Y ? Y : ""), F && F({ label: te, value: Y }), $ && _();
  }
  const ie = typeof C == "string" ? C : j, k = ((J = H.find((q) => q.value === ie)) == null ? void 0 : J.label) || "", U = () => {
    if (!e && k) return !0;
    if (!e && !k) return !1;
    if (e && k) return !0;
    if (e && !k) return !1;
  };
  return /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
    /* @__PURE__ */ x.jsxs(
      "section",
      {
        title: c,
        style: d,
        onClick: N,
        className: `${p} placeholder_dark_${U()}`,
        children: [
          v,
          f && /* @__PURE__ */ x.jsx(f, { size: m, strokeWidth: 2.5 }),
          /* @__PURE__ */ x.jsx(
            "input",
            {
              disabled: l,
              readOnly: !0,
              placeholder: k || L,
              onFocus: K,
              ...R
            }
          ),
          /* @__PURE__ */ x.jsx(
            "input",
            {
              type: "hidden",
              ref: s,
              name: E,
              value: ie || "",
              readOnly: !0
            }
          ),
          e && /* @__PURE__ */ x.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: P },
              children: [
                H.map(({ label: q, value: te }) => /* @__PURE__ */ x.jsxs(
                  "div",
                  {
                    onClick: () => oe({ label: q, value: te }),
                    className: ie === te ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      q,
                      " ",
                      /* @__PURE__ */ x.jsx(Cc, {})
                    ]
                  },
                  te
                )),
                H.length <= 0 && /* @__PURE__ */ x.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !h && /* @__PURE__ */ x.jsx(
            rp,
            {
              className: "arkyn_select_arrow",
              size: m,
              strokeWidth: 2.5
            }
          ),
          h && D
        ]
      }
    ),
    e && /* @__PURE__ */ x.jsx("aside", { className: "arkyn_select_overlay", onClick: _ })
  ] });
}
function Fw(t) {
  const {
    size: e = "lg",
    defaultChecked: n = !1,
    checked: r = null,
    value: i,
    unCheckedValue: o = "",
    name: a,
    className: s = "",
    onCheck: u,
    ...l
  } = t, [c, d] = I(n), { id: p, inputRef: v } = Lt(), m = typeof r == "boolean" ? r : c;
  function h() {
    d(!c), u && u(m ? o : i || "checked");
  }
  const C = `arkynSwitch ${m ? "checkedTrue" : "checkedFalse"} ${e} ${s}`;
  return /* @__PURE__ */ x.jsx("button", { type: "button", onClick: h, className: C, ...l, children: /* @__PURE__ */ x.jsx(
    "input",
    {
      id: p,
      type: "hidden",
      name: a,
      ref: v,
      onClick: h,
      value: m ? i || "checked" : o
    }
  ) });
}
function Mw(t) {
  const {
    variant: e = "solid",
    size: n = "md",
    className: r,
    disabled: i = !1,
    readOnly: o = !1,
    onFocus: a,
    onBlur: s,
    title: u,
    style: l,
    ...c
  } = t, [d, p] = I(!1), { inputRef: v, id: m, error: h } = Lt(), f = Ue(null), C = v || f, b = t.isError || !!h ? "errorTrue" : "errorFalse", E = `arkynTextarea ${e} ${n} ${i || o ? "opacityTrue" : "opacityFalse"} ${b} ${d ? "focusedTrue" : "focusedFalse"} ${r}`;
  function L() {
    i || !(C != null && C.current) || (p(!0), C.current.focus());
  }
  function F(P) {
    p(!0), a && a(P);
  }
  function H(P) {
    p(!1), s && s(P);
  }
  return /* @__PURE__ */ x.jsx(
    "section",
    {
      title: u,
      style: l,
      onClick: L,
      className: E,
      children: /* @__PURE__ */ x.jsx(
        "textarea",
        {
          id: m,
          disabled: i,
          readOnly: o,
          ref: C,
          onFocus: F,
          onBlur: H,
          ...c
        }
      )
    }
  );
}
function kw(t) {
  const { className: e = "", ...n } = t, r = `arkynBreadcrumbContainer ${e}`;
  return /* @__PURE__ */ x.jsx("nav", { className: r, ...n });
}
function Tw(t) {
  const { pathname: e } = ua(), {
    className: n = "",
    disabled: r = !1,
    children: i,
    to: o,
    ...a
  } = t, u = `arkynBreadcrumbLink ${e === o ? "active" : "inactive"} ${n}`;
  return r ? /* @__PURE__ */ x.jsxs("p", { className: u, children: [
    /* @__PURE__ */ x.jsx(So, { size: 14, strokeWidth: 2.5 }),
    i
  ] }) : /* @__PURE__ */ x.jsxs(ap, { to: o, className: u, ...a, children: [
    /* @__PURE__ */ x.jsx(So, { size: 14, strokeWidth: 2.5 }),
    i
  ] });
}
function ld(t = "") {
  const e = ua(), n = new URLSearchParams(e.search), r = t ? `${t}:` : "", i = (o) => {
    Object.entries(o).forEach(([a, s]) => {
      s === void 0 ? n.delete(`${r}${a}`) : n.set(`${r}${a}`, String(s));
    });
  };
  return {
    getParam: (o) => n.get(`${r}${o}`),
    getScopedSearch: (o) => {
      i(o);
      let a = n.toString();
      return a && (a = "?" + a), a;
    }
  };
}
function Rw(t) {
  const {
    scope: e,
    totalCountRegisters: n,
    perPageKey: r = "per_page",
    pageKey: i = "page",
    siblingsCount: o = 2,
    ...a
  } = t, s = Bc(), { getParam: u, getScopedSearch: l } = ld(e), c = Number(u(i)) || 1, d = Number(u(r)) || 20, p = Math.ceil(n / d), v = pp(c, o), m = dp(c, o, p);
  function h(f) {
    s(l({ page: f }));
  }
  return /* @__PURE__ */ x.jsxs("div", { className: "arkynPagination", ...a, children: [
    /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: c <= 1,
        onClick: () => h(c - 1),
        children: /* @__PURE__ */ x.jsx(ip, {})
      }
    ),
    c > 1 + o && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => h(1),
          children: "1"
        }
      ),
      c > 2 + o && /* @__PURE__ */ x.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ x.jsx(Qa, {}) })
    ] }),
    v.map((f, C) => /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: () => h(f),
        className: "arkynPaginationPageButton",
        children: f
      },
      C
    )),
    /* @__PURE__ */ x.jsx("button", { className: "arkynPaginationCurrent", disabled: !0, children: c }),
    m.map((f, C) => /* @__PURE__ */ x.jsx(
      "button",
      {
        onClick: () => h(f),
        className: "arkynPaginationPageButton",
        children: f
      },
      C
    )),
    c + o < p && /* @__PURE__ */ x.jsxs(x.Fragment, { children: [
      c + 1 + o < p && /* @__PURE__ */ x.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ x.jsx(Qa, {}) }),
      /* @__PURE__ */ x.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => h(p),
          children: p
        }
      )
    ] }),
    /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: c >= p,
        onClick: () => h(c + 1),
        children: /* @__PURE__ */ x.jsx(So, {})
      }
    )
  ] });
}
const ea = ct({});
function QD() {
  if (!ea)
    throw new Error("useTabContext must be used within a TabProvider");
  return je(ea);
}
function Iw(t) {
  const {
    children: e,
    onClick: n,
    defaultActive: r,
    className: i,
    ...o
  } = t, [a, s] = I(r || ""), [u, l] = I(!0), c = Ue(null), d = `arkynTabContainer ${i || ""}`, [p, v] = I({
    width: "0px",
    left: "0px",
    transition: "none"
  }), m = (f, C) => {
    const w = f.getBoundingClientRect(), b = c.current.getBoundingClientRect(), S = C ? void 0 : "none";
    l(!1), v({
      transition: S,
      width: `${w.width}px`,
      left: `${w.left - b.left}px`
    });
  };
  B(() => {
    const f = c.current;
    if (!f) return;
    let C = null;
    C = f.querySelector("button.activeTrue"), C && m(C);
  }, []);
  const h = (f) => {
    const C = f.target;
    C && (s(C.value), C.classList.add("activeTrue"), m(C, !0), n && n(C.value));
  };
  return /* @__PURE__ */ x.jsxs("nav", { ref: c, className: d.trim(), ...o, children: [
    /* @__PURE__ */ x.jsx(ea.Provider, { value: { handleTabClick: h, showInitialTab: u, value: a }, children: e }),
    /* @__PURE__ */ x.jsx("div", { className: "activeLine", style: p })
  ] });
}
function jw(t) {
  const { children: e, className: n = "", onClick: r, ...i } = t, { value: o, showInitialTab: a, handleTabClick: s } = QD(), u = o === i.value && o ? "activeTrue" : "activeFalse", c = `arkynTabButton ${o === i.value && a ? "showBorderBottom" : ""} ${u} ${n}`;
  function d(p) {
    s(p), r && r(p);
  }
  return /* @__PURE__ */ x.jsx("button", { onClick: d, className: c.trim(), ...i, children: e });
}
const cd = ct({});
function Nw(t) {
  const {
    isVisibled: e,
    makeInvisible: n,
    orientation: r = "left",
    children: i,
    className: o,
    ...a
  } = t, s = r === "left" ? "-100%" : "100%", l = `arkynDrawerContainer ${r} ${e ? "visibleTrue" : "visibleFalse"} ${o}`;
  return /* @__PURE__ */ x.jsx(cd.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ x.jsx(xc, { children: e && /* @__PURE__ */ x.jsxs("aside", { className: l.trim(), ...a, children: [
    /* @__PURE__ */ x.jsx(
      Dr.div,
      {
        className: "arkynDrawerContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ x.jsx(
      Dr.div,
      {
        className: "arkynDrawerContainerContent",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${s})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${s})` },
        children: i
      }
    )
  ] }) }) });
}
function _w(t) {
  const {
    showCloseButton: e = !0,
    className: n,
    children: r,
    ...i
  } = t, { makeInvisible: o } = je(cd), a = `arkynDrawerHeader ${n}`;
  return /* @__PURE__ */ x.jsxs("header", { className: a.trim(), ...i, children: [
    r,
    e && /* @__PURE__ */ x.jsx(
      "button",
      {
        className: "arkynDrawerHeaderCloseButton",
        type: "button",
        onClick: o,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ x.jsx(Dc, { size: 24 })
      }
    )
  ] });
}
const fd = ct({});
function $w(t) {
  const {
    isVisibled: e,
    makeInvisible: n,
    children: r,
    className: i = "",
    ...o
  } = t, s = `arkynModalContainer ${e ? "visibleTrue" : "visibleFalse"} ${i}`;
  return /* @__PURE__ */ x.jsx(fd.Provider, { value: { makeInvisible: n }, children: /* @__PURE__ */ x.jsx(xc, { children: e && /* @__PURE__ */ x.jsxs("aside", { className: s.trim(), ...o, children: [
    /* @__PURE__ */ x.jsx(
      Dr.div,
      {
        className: "arkynModalContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: n
      }
    ),
    /* @__PURE__ */ x.jsx(
      Dr.div,
      {
        className: "arkynModalContainerContent",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: r
      }
    )
  ] }) }) });
}
function zw(t) {
  const { alignment: e = "right", className: n, ...r } = t, i = `arkynModalFooter ${e} ${n}`;
  return /* @__PURE__ */ x.jsx("footer", { className: i.trim(), ...r });
}
function Ww(t) {
  const {
    showCloseButton: e = !0,
    className: n,
    children: r,
    ...i
  } = t, { makeInvisible: o } = je(fd), a = `arkynModalHeader ${n}`;
  return /* @__PURE__ */ x.jsxs("header", { className: a.trim(), ...i, children: [
    r,
    e && /* @__PURE__ */ x.jsx(
      "button",
      {
        type: "button",
        onClick: o,
        "aria-label": "Close modal button",
        className: "arkynModalHeaderCloseButton",
        children: /* @__PURE__ */ x.jsx(Dc, { size: 24 })
      }
    )
  ] });
}
function Uw(t) {
  const { children: e, button: n, closeOnClick: r, orientation: i = "bottomLeft" } = t, [o, a] = I(!1), u = `arkynPopover ${i} ${o ? "visibleTrue" : "visibleFalse"}`;
  function l() {
    o || a(!0);
  }
  return /* @__PURE__ */ x.jsxs("div", { className: u, onClick: l, children: [
    n,
    /* @__PURE__ */ x.jsx(
      Dr.div,
      {
        style: { visibility: o ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: o ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => r && a(!1),
        className: "arkynPopoverContent",
        children: e
      }
    ),
    o && /* @__PURE__ */ x.jsx("div", { onClick: () => a(!1), className: "arkynPopoverOverlay" })
  ] });
}
function eb(t) {
  const { message: e, title: n, type: r, size: i = "lg" } = t, o = `arkynToast ${r} ${i}`;
  function a() {
    switch (r) {
      case "info":
        return /* @__PURE__ */ x.jsx(Oo, {});
      case "success":
        return /* @__PURE__ */ x.jsx(yc, {});
      case "danger":
        return /* @__PURE__ */ x.jsx(mc, {});
      case "warning":
        return /* @__PURE__ */ x.jsx(op, {});
      default:
        return /* @__PURE__ */ x.jsx(Oo, {});
    }
  }
  return /* @__PURE__ */ x.jsxs("div", { className: o, children: [
    /* @__PURE__ */ x.jsxs("div", { children: [
      /* @__PURE__ */ x.jsx("div", { className: "bg" }),
      /* @__PURE__ */ x.jsx(a, {})
    ] }),
    /* @__PURE__ */ x.jsxs("p", { children: [
      /* @__PURE__ */ x.jsx("strong", { title: n, children: n }),
      /* @__PURE__ */ x.jsx("span", { children: e })
    ] })
  ] });
}
function Hw(t) {
  const {
    text: e,
    size: n = "lg",
    children: r,
    orientation: i = "top",
    className: o = "",
    ...a
  } = t, s = `arkynTooltip ${n} ${i} ${o}`;
  return /* @__PURE__ */ x.jsxs("div", { className: s.trim(), ...a, children: [
    r,
    /* @__PURE__ */ x.jsx("div", { className: "arkynTooltipText", children: e })
  ] });
}
var rt = {}, Ua = {}, Or = {}, Sr = {}, dd = "Expected a function", jl = NaN, tb = "[object Symbol]", nb = /^\s+|\s+$/g, rb = /^[-+]0x[0-9a-f]+$/i, ib = /^0b[01]+$/i, ob = /^0o[0-7]+$/i, ab = parseInt, sb = typeof He == "object" && He && He.Object === Object && He, ub = typeof self == "object" && self && self.Object === Object && self, lb = sb || ub || Function("return this")(), cb = Object.prototype, fb = cb.toString, db = Math.max, pb = Math.min, mo = function() {
  return lb.Date.now();
};
function hb(t, e, n) {
  var r, i, o, a, s, u, l = 0, c = !1, d = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(dd);
  e = Nl(e) || 0, Ai(n) && (c = !!n.leading, d = "maxWait" in n, o = d ? db(Nl(n.maxWait) || 0, e) : o, p = "trailing" in n ? !!n.trailing : p);
  function v(E) {
    var L = r, F = i;
    return r = i = void 0, l = E, a = t.apply(F, L), a;
  }
  function m(E) {
    return l = E, s = setTimeout(C, e), c ? v(E) : a;
  }
  function h(E) {
    var L = E - u, F = E - l, H = e - L;
    return d ? pb(H, o - F) : H;
  }
  function f(E) {
    var L = E - u, F = E - l;
    return u === void 0 || L >= e || L < 0 || d && F >= o;
  }
  function C() {
    var E = mo();
    if (f(E))
      return w(E);
    s = setTimeout(C, h(E));
  }
  function w(E) {
    return s = void 0, p && r ? v(E) : (r = i = void 0, a);
  }
  function b() {
    s !== void 0 && clearTimeout(s), l = 0, r = u = i = s = void 0;
  }
  function S() {
    return s === void 0 ? a : w(mo());
  }
  function D() {
    var E = mo(), L = f(E);
    if (r = arguments, i = this, u = E, L) {
      if (s === void 0)
        return m(u);
      if (d)
        return s = setTimeout(C, e), v(u);
    }
    return s === void 0 && (s = setTimeout(C, e)), a;
  }
  return D.cancel = b, D.flush = S, D;
}
function vb(t, e, n) {
  var r = !0, i = !0;
  if (typeof t != "function")
    throw new TypeError(dd);
  return Ai(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), hb(t, e, {
    leading: r,
    maxWait: e,
    trailing: i
  });
}
function Ai(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function gb(t) {
  return !!t && typeof t == "object";
}
function mb(t) {
  return typeof t == "symbol" || gb(t) && fb.call(t) == tb;
}
function Nl(t) {
  if (typeof t == "number")
    return t;
  if (mb(t))
    return jl;
  if (Ai(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = Ai(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(nb, "");
  var n = ib.test(t);
  return n || ob.test(t) ? ab(t.slice(2), n ? 2 : 8) : rb.test(t) ? jl : +t;
}
var yb = vb, Pr = {};
Object.defineProperty(Pr, "__esModule", {
  value: !0
});
Pr.addPassiveEventListener = function(e, n, r) {
  var i = r.name;
  i || (i = n, console.warn("Listener must be a named function.")), pi.has(n) || pi.set(n, /* @__PURE__ */ new Set());
  var o = pi.get(n);
  if (!o.has(i)) {
    var a = function() {
      var s = !1;
      try {
        var u = Object.defineProperty({}, "passive", {
          get: function() {
            s = !0;
          }
        });
        window.addEventListener("test", null, u);
      } catch {
      }
      return s;
    }();
    e.addEventListener(n, r, a ? { passive: !0 } : !1), o.add(i);
  }
};
Pr.removePassiveEventListener = function(e, n, r) {
  e.removeEventListener(n, r), pi.get(n).delete(r.name || n);
};
var pi = /* @__PURE__ */ new Map();
Object.defineProperty(Sr, "__esModule", {
  value: !0
});
var Cb = yb, Db = Eb(Cb), bb = Pr;
function Eb(t) {
  return t && t.__esModule ? t : { default: t };
}
var wb = function(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
  return (0, Db.default)(e, n);
}, et = {
  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],
  mount: function(e, n) {
    if (e) {
      var r = wb(function(i) {
        et.scrollHandler(e);
      }, n);
      et.scrollSpyContainers.push(e), (0, bb.addPassiveEventListener)(e, "scroll", r);
    }
  },
  isMounted: function(e) {
    return et.scrollSpyContainers.indexOf(e) !== -1;
  },
  currentPositionX: function(e) {
    if (e === document) {
      var n = window.pageYOffset !== void 0, r = (document.compatMode || "") === "CSS1Compat";
      return n ? window.pageXOffset : r ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else
      return e.scrollLeft;
  },
  currentPositionY: function(e) {
    if (e === document) {
      var n = window.pageXOffset !== void 0, r = (document.compatMode || "") === "CSS1Compat";
      return n ? window.pageYOffset : r ? document.documentElement.scrollTop : document.body.scrollTop;
    } else
      return e.scrollTop;
  },
  scrollHandler: function(e) {
    var n = et.scrollSpyContainers[et.scrollSpyContainers.indexOf(e)].spyCallbacks || [];
    n.forEach(function(r) {
      return r(et.currentPositionX(e), et.currentPositionY(e));
    });
  },
  addStateHandler: function(e) {
    et.spySetState.push(e);
  },
  addSpyHandler: function(e, n) {
    var r = et.scrollSpyContainers[et.scrollSpyContainers.indexOf(n)];
    r.spyCallbacks || (r.spyCallbacks = []), r.spyCallbacks.push(e), e(et.currentPositionX(n), et.currentPositionY(n));
  },
  updateStates: function() {
    et.spySetState.forEach(function(e) {
      return e();
    });
  },
  unmount: function(e, n) {
    et.scrollSpyContainers.forEach(function(r) {
      return r.spyCallbacks && r.spyCallbacks.length && r.spyCallbacks.indexOf(n) > -1 && r.spyCallbacks.splice(r.spyCallbacks.indexOf(n), 1);
    }), et.spySetState && et.spySetState.length && et.spySetState.indexOf(e) > -1 && et.spySetState.splice(et.spySetState.indexOf(e), 1), document.removeEventListener("scroll", et.scrollHandler);
  },
  update: function() {
    return et.scrollSpyContainers.forEach(function(e) {
      return et.scrollHandler(e);
    });
  }
};
Sr.default = et;
var Jn = {}, Fr = {};
Object.defineProperty(Fr, "__esModule", {
  value: !0
});
var Bb = function(e, n) {
  var r = e.indexOf("#") === 0 ? e.substring(1) : e, i = r ? "#" + r : "", o = window && window.location, a = i ? o.pathname + o.search + i : o.pathname + o.search;
  n ? history.pushState(history.state, "", a) : history.replaceState(history.state, "", a);
}, xb = function() {
  return window.location.hash.replace(/^#/, "");
}, Ab = function(e) {
  return function(n) {
    return e.contains ? e != n && e.contains(n) : !!(e.compareDocumentPosition(n) & 16);
  };
}, Lb = function(e) {
  return getComputedStyle(e).position !== "static";
}, yo = function(e, n) {
  for (var r = e.offsetTop, i = e.offsetParent; i && !n(i); )
    r += i.offsetTop, i = i.offsetParent;
  return { offsetTop: r, offsetParent: i };
}, Ob = function(e, n, r) {
  if (r)
    return e === document ? n.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(e).position !== "static" ? n.offsetLeft : n.offsetLeft - e.offsetLeft;
  if (e === document)
    return n.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
  if (Lb(e)) {
    if (n.offsetParent !== e) {
      var i = function(c) {
        return c === e || c === document;
      }, o = yo(n, i), a = o.offsetTop, s = o.offsetParent;
      if (s !== e)
        throw new Error("Seems containerElement is not an ancestor of the Element");
      return a;
    }
    return n.offsetTop;
  }
  if (n.offsetParent === e.offsetParent)
    return n.offsetTop - e.offsetTop;
  var u = function(c) {
    return c === document;
  };
  return yo(n, u).offsetTop - yo(e, u).offsetTop;
};
Fr.default = {
  updateHash: Bb,
  getHash: xb,
  filterElementInContainer: Ab,
  scrollOffset: Ob
};
var Vi = {}, Ha = {};
Object.defineProperty(Ha, "__esModule", {
  value: !0
});
Ha.default = {
  /*
   * https://github.com/oblador/angular-scroll (duScrollDefaultEasing)
   */
  defaultEasing: function(e) {
    return e < 0.5 ? Math.pow(e * 2, 2) / 2 : 1 - Math.pow((1 - e) * 2, 2) / 2;
  },
  /*
   * https://gist.github.com/gre/1650294
   */
  // no easing, no acceleration
  linear: function(e) {
    return e;
  },
  // accelerating from zero velocity
  easeInQuad: function(e) {
    return e * e;
  },
  // decelerating to zero velocity
  easeOutQuad: function(e) {
    return e * (2 - e);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function(e) {
    return e < 0.5 ? 2 * e * e : -1 + (4 - 2 * e) * e;
  },
  // accelerating from zero velocity 
  easeInCubic: function(e) {
    return e * e * e;
  },
  // decelerating to zero velocity π
  easeOutCubic: function(e) {
    return --e * e * e + 1;
  },
  // acceleration until halfway, then deceleration 
  easeInOutCubic: function(e) {
    return e < 0.5 ? 4 * e * e * e : (e - 1) * (2 * e - 2) * (2 * e - 2) + 1;
  },
  // accelerating from zero velocity 
  easeInQuart: function(e) {
    return e * e * e * e;
  },
  // decelerating to zero velocity 
  easeOutQuart: function(e) {
    return 1 - --e * e * e * e;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function(e) {
    return e < 0.5 ? 8 * e * e * e * e : 1 - 8 * --e * e * e * e;
  },
  // accelerating from zero velocity
  easeInQuint: function(e) {
    return e * e * e * e * e;
  },
  // decelerating to zero velocity
  easeOutQuint: function(e) {
    return 1 + --e * e * e * e * e;
  },
  // acceleration until halfway, then deceleration 
  easeInOutQuint: function(e) {
    return e < 0.5 ? 16 * e * e * e * e * e : 1 + 16 * --e * e * e * e * e;
  }
};
var Va = {};
Object.defineProperty(Va, "__esModule", {
  value: !0
});
var Sb = Pr, Pb = ["mousedown", "mousewheel", "touchmove", "keydown"];
Va.default = {
  subscribe: function(e) {
    return typeof document < "u" && Pb.forEach(function(n) {
      return (0, Sb.addPassiveEventListener)(document, n, e);
    });
  }
};
var Mr = {};
Object.defineProperty(Mr, "__esModule", {
  value: !0
});
var ta = {
  registered: {},
  scrollEvent: {
    register: function(e, n) {
      ta.registered[e] = n;
    },
    remove: function(e) {
      ta.registered[e] = null;
    }
  }
};
Mr.default = ta;
Object.defineProperty(Vi, "__esModule", {
  value: !0
});
var Fb = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Mb = Fr;
qi(Mb);
var kb = Ha, _l = qi(kb), Tb = Va, Rb = qi(Tb), Ib = Mr, Nt = qi(Ib);
function qi(t) {
  return t && t.__esModule ? t : { default: t };
}
var pd = function(e) {
  return _l.default[e.smooth] || _l.default.defaultEasing;
}, jb = function(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}, Nb = function() {
  if (typeof window < "u")
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
}, na = function() {
  return Nb() || function(t, e, n) {
    window.setTimeout(t, n || 1e3 / 60, (/* @__PURE__ */ new Date()).getTime());
  };
}(), hd = function() {
  return {
    currentPosition: 0,
    startPosition: 0,
    targetPosition: 0,
    progress: 0,
    duration: 0,
    cancel: !1,
    target: null,
    containerElement: null,
    to: null,
    start: null,
    delta: null,
    percent: null,
    delayTimeout: null
  };
}, vd = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollLeft;
  var r = window.pageXOffset !== void 0, i = (document.compatMode || "") === "CSS1Compat";
  return r ? window.pageXOffset : i ? document.documentElement.scrollLeft : document.body.scrollLeft;
}, gd = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollTop;
  var r = window.pageXOffset !== void 0, i = (document.compatMode || "") === "CSS1Compat";
  return r ? window.pageYOffset : i ? document.documentElement.scrollTop : document.body.scrollTop;
}, _b = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollWidth - n.offsetWidth;
  var r = document.body, i = document.documentElement;
  return Math.max(r.scrollWidth, r.offsetWidth, i.clientWidth, i.scrollWidth, i.offsetWidth);
}, $b = function(e) {
  var n = e.data.containerElement;
  if (n && n !== document && n !== document.body)
    return n.scrollHeight - n.offsetHeight;
  var r = document.body, i = document.documentElement;
  return Math.max(r.scrollHeight, r.offsetHeight, i.clientHeight, i.scrollHeight, i.offsetHeight);
}, zb = function t(e, n, r) {
  var i = n.data;
  if (!n.ignoreCancelEvents && i.cancel) {
    Nt.default.registered.end && Nt.default.registered.end(i.to, i.target, i.currentPositionY);
    return;
  }
  if (i.delta = Math.round(i.targetPosition - i.startPosition), i.start === null && (i.start = r), i.progress = r - i.start, i.percent = i.progress >= i.duration ? 1 : e(i.progress / i.duration), i.currentPosition = i.startPosition + Math.ceil(i.delta * i.percent), i.containerElement && i.containerElement !== document && i.containerElement !== document.body ? n.horizontal ? i.containerElement.scrollLeft = i.currentPosition : i.containerElement.scrollTop = i.currentPosition : n.horizontal ? window.scrollTo(i.currentPosition, 0) : window.scrollTo(0, i.currentPosition), i.percent < 1) {
    var o = t.bind(null, e, n);
    na.call(window, o);
    return;
  }
  Nt.default.registered.end && Nt.default.registered.end(i.to, i.target, i.currentPosition);
}, qa = function(e) {
  e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null;
}, kr = function(e, n, r, i) {
  n.data = n.data || hd(), window.clearTimeout(n.data.delayTimeout);
  var o = function() {
    n.data.cancel = !0;
  };
  if (Rb.default.subscribe(o), qa(n), n.data.start = null, n.data.cancel = !1, n.data.startPosition = n.horizontal ? vd(n) : gd(n), n.data.targetPosition = n.absolute ? e : e + n.data.startPosition, n.data.startPosition === n.data.targetPosition) {
    Nt.default.registered.end && Nt.default.registered.end(n.data.to, n.data.target, n.data.currentPosition);
    return;
  }
  n.data.delta = Math.round(n.data.targetPosition - n.data.startPosition), n.data.duration = jb(n.duration)(n.data.delta), n.data.duration = isNaN(parseFloat(n.data.duration)) ? 1e3 : parseFloat(n.data.duration), n.data.to = r, n.data.target = i;
  var a = pd(n), s = zb.bind(null, a, n);
  if (n && n.delay > 0) {
    n.data.delayTimeout = window.setTimeout(function() {
      Nt.default.registered.begin && Nt.default.registered.begin(n.data.to, n.data.target), na.call(window, s);
    }, n.delay);
    return;
  }
  Nt.default.registered.begin && Nt.default.registered.begin(n.data.to, n.data.target), na.call(window, s);
}, Gi = function(e) {
  return e = Fb({}, e), e.data = e.data || hd(), e.absolute = !0, e;
}, Wb = function(e) {
  kr(0, Gi(e));
}, Ub = function(e, n) {
  kr(e, Gi(n));
}, Hb = function(e) {
  e = Gi(e), qa(e), kr(e.horizontal ? _b(e) : $b(e), e);
}, Vb = function(e, n) {
  n = Gi(n), qa(n);
  var r = n.horizontal ? vd(n) : gd(n);
  kr(e + r, n);
};
Vi.default = {
  animateTopScroll: kr,
  getAnimationType: pd,
  scrollToTop: Wb,
  scrollToBottom: Hb,
  scrollTo: Ub,
  scrollMore: Vb
};
Object.defineProperty(Jn, "__esModule", {
  value: !0
});
var qb = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, Gb = Fr, Zb = Ga(Gb), Yb = Vi, Kb = Ga(Yb), Xb = Mr, ti = Ga(Xb);
function Ga(t) {
  return t && t.__esModule ? t : { default: t };
}
var ni = {}, $l = void 0;
Jn.default = {
  unmount: function() {
    ni = {};
  },
  register: function(e, n) {
    ni[e] = n;
  },
  unregister: function(e) {
    delete ni[e];
  },
  get: function(e) {
    return ni[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0];
  },
  setActiveLink: function(e) {
    return $l = e;
  },
  getActiveLink: function() {
    return $l;
  },
  scrollTo: function(e, n) {
    var r = this.get(e);
    if (!r) {
      console.warn("target Element not found");
      return;
    }
    n = qb({}, n, { absolute: !1 });
    var i = n.containerId, o = n.container, a = void 0;
    i ? a = document.getElementById(i) : o && o.nodeType ? a = o : a = document, n.absolute = !0;
    var s = n.horizontal, u = Zb.default.scrollOffset(a, r, s) + (n.offset || 0);
    if (!n.smooth) {
      ti.default.registered.begin && ti.default.registered.begin(e, r), a === document ? n.horizontal ? window.scrollTo(u, 0) : window.scrollTo(0, u) : a.scrollTop = u, ti.default.registered.end && ti.default.registered.end(e, r);
      return;
    }
    Kb.default.animateTopScroll(u, n, e, r);
  }
};
var ra = { exports: {} }, ri = { exports: {} }, _e = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var zl;
function Jb() {
  if (zl) return _e;
  zl = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, v = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, f = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function b(D) {
    if (typeof D == "object" && D !== null) {
      var E = D.$$typeof;
      switch (E) {
        case e:
          switch (D = D.type, D) {
            case u:
            case l:
            case r:
            case o:
            case i:
            case d:
              return D;
            default:
              switch (D = D && D.$$typeof, D) {
                case s:
                case c:
                case m:
                case v:
                case a:
                  return D;
                default:
                  return E;
              }
          }
        case n:
          return E;
      }
    }
  }
  function S(D) {
    return b(D) === l;
  }
  return _e.AsyncMode = u, _e.ConcurrentMode = l, _e.ContextConsumer = s, _e.ContextProvider = a, _e.Element = e, _e.ForwardRef = c, _e.Fragment = r, _e.Lazy = m, _e.Memo = v, _e.Portal = n, _e.Profiler = o, _e.StrictMode = i, _e.Suspense = d, _e.isAsyncMode = function(D) {
    return S(D) || b(D) === u;
  }, _e.isConcurrentMode = S, _e.isContextConsumer = function(D) {
    return b(D) === s;
  }, _e.isContextProvider = function(D) {
    return b(D) === a;
  }, _e.isElement = function(D) {
    return typeof D == "object" && D !== null && D.$$typeof === e;
  }, _e.isForwardRef = function(D) {
    return b(D) === c;
  }, _e.isFragment = function(D) {
    return b(D) === r;
  }, _e.isLazy = function(D) {
    return b(D) === m;
  }, _e.isMemo = function(D) {
    return b(D) === v;
  }, _e.isPortal = function(D) {
    return b(D) === n;
  }, _e.isProfiler = function(D) {
    return b(D) === o;
  }, _e.isStrictMode = function(D) {
    return b(D) === i;
  }, _e.isSuspense = function(D) {
    return b(D) === d;
  }, _e.isValidElementType = function(D) {
    return typeof D == "string" || typeof D == "function" || D === r || D === l || D === o || D === i || D === d || D === p || typeof D == "object" && D !== null && (D.$$typeof === m || D.$$typeof === v || D.$$typeof === a || D.$$typeof === s || D.$$typeof === c || D.$$typeof === f || D.$$typeof === C || D.$$typeof === w || D.$$typeof === h);
  }, _e.typeOf = b, _e;
}
var $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Wl;
function Qb() {
  return Wl || (Wl = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, n = t ? Symbol.for("react.portal") : 60106, r = t ? Symbol.for("react.fragment") : 60107, i = t ? Symbol.for("react.strict_mode") : 60108, o = t ? Symbol.for("react.profiler") : 60114, a = t ? Symbol.for("react.provider") : 60109, s = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, v = t ? Symbol.for("react.memo") : 60115, m = t ? Symbol.for("react.lazy") : 60116, h = t ? Symbol.for("react.block") : 60121, f = t ? Symbol.for("react.fundamental") : 60117, C = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function b(G) {
      return typeof G == "string" || typeof G == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      G === r || G === l || G === o || G === i || G === d || G === p || typeof G == "object" && G !== null && (G.$$typeof === m || G.$$typeof === v || G.$$typeof === a || G.$$typeof === s || G.$$typeof === c || G.$$typeof === f || G.$$typeof === C || G.$$typeof === w || G.$$typeof === h);
    }
    function S(G) {
      if (typeof G == "object" && G !== null) {
        var le = G.$$typeof;
        switch (le) {
          case e:
            var se = G.type;
            switch (se) {
              case u:
              case l:
              case r:
              case o:
              case i:
              case d:
                return se;
              default:
                var pe = se && se.$$typeof;
                switch (pe) {
                  case s:
                  case c:
                  case m:
                  case v:
                  case a:
                    return pe;
                  default:
                    return le;
                }
            }
          case n:
            return le;
        }
      }
    }
    var D = u, E = l, L = s, F = a, H = e, P = c, $ = r, R = m, j = v, T = n, N = o, K = i, _ = d, oe = !1;
    function ie(G) {
      return oe || (oe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), k(G) || S(G) === u;
    }
    function k(G) {
      return S(G) === l;
    }
    function U(G) {
      return S(G) === s;
    }
    function J(G) {
      return S(G) === a;
    }
    function q(G) {
      return typeof G == "object" && G !== null && G.$$typeof === e;
    }
    function te(G) {
      return S(G) === c;
    }
    function Y(G) {
      return S(G) === r;
    }
    function y(G) {
      return S(G) === m;
    }
    function z(G) {
      return S(G) === v;
    }
    function W(G) {
      return S(G) === n;
    }
    function M(G) {
      return S(G) === o;
    }
    function X(G) {
      return S(G) === i;
    }
    function ne(G) {
      return S(G) === d;
    }
    $e.AsyncMode = D, $e.ConcurrentMode = E, $e.ContextConsumer = L, $e.ContextProvider = F, $e.Element = H, $e.ForwardRef = P, $e.Fragment = $, $e.Lazy = R, $e.Memo = j, $e.Portal = T, $e.Profiler = N, $e.StrictMode = K, $e.Suspense = _, $e.isAsyncMode = ie, $e.isConcurrentMode = k, $e.isContextConsumer = U, $e.isContextProvider = J, $e.isElement = q, $e.isForwardRef = te, $e.isFragment = Y, $e.isLazy = y, $e.isMemo = z, $e.isPortal = W, $e.isProfiler = M, $e.isStrictMode = X, $e.isSuspense = ne, $e.isValidElementType = b, $e.typeOf = S;
  }()), $e;
}
var Ul;
function md() {
  return Ul || (Ul = 1, process.env.NODE_ENV === "production" ? ri.exports = Jb() : ri.exports = Qb()), ri.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Co, Hl;
function eE() {
  if (Hl) return Co;
  Hl = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function r(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function i() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(a).map(function(c) {
        return a[c];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(c) {
        l[c] = c;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return Co = i() ? Object.assign : function(o, a) {
    for (var s, u = r(o), l, c = 1; c < arguments.length; c++) {
      s = Object(arguments[c]);
      for (var d in s)
        e.call(s, d) && (u[d] = s[d]);
      if (t) {
        l = t(s);
        for (var p = 0; p < l.length; p++)
          n.call(s, l[p]) && (u[l[p]] = s[l[p]]);
      }
    }
    return u;
  }, Co;
}
var Do, Vl;
function Za() {
  if (Vl) return Do;
  Vl = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Do = t, Do;
}
var bo, ql;
function yd() {
  return ql || (ql = 1, bo = Function.call.bind(Object.prototype.hasOwnProperty)), bo;
}
var Eo, Gl;
function tE() {
  if (Gl) return Eo;
  Gl = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = Za(), n = {}, r = yd();
    t = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function i(o, a, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in o)
        if (r(o, c)) {
          var d;
          try {
            if (typeof o[c] != "function") {
              var p = Error(
                (u || "React class") + ": " + s + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = o[c](a, c, u, s, null, e);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && t(
            (u || "React class") + ": type specification of " + s + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var v = l ? l() : "";
            t(
              "Failed " + s + " type: " + d.message + (v ?? "")
            );
          }
        }
    }
  }
  return i.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Eo = i, Eo;
}
var wo, Zl;
function nE() {
  if (Zl) return wo;
  Zl = 1;
  var t = md(), e = eE(), n = Za(), r = yd(), i = tE(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return wo = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(k) {
      var U = k && (l && k[l] || k[c]);
      if (typeof U == "function")
        return U;
    }
    var p = "<<anonymous>>", v = {
      array: C("array"),
      bigint: C("bigint"),
      bool: C("boolean"),
      func: C("function"),
      number: C("number"),
      object: C("object"),
      string: C("string"),
      symbol: C("symbol"),
      any: w(),
      arrayOf: b,
      element: S(),
      elementType: D(),
      instanceOf: E,
      node: P(),
      objectOf: F,
      oneOf: L,
      oneOfType: H,
      shape: R,
      exact: j
    };
    function m(k, U) {
      return k === U ? k !== 0 || 1 / k === 1 / U : k !== k && U !== U;
    }
    function h(k, U) {
      this.message = k, this.data = U && typeof U == "object" ? U : {}, this.stack = "";
    }
    h.prototype = Error.prototype;
    function f(k) {
      if (process.env.NODE_ENV !== "production")
        var U = {}, J = 0;
      function q(Y, y, z, W, M, X, ne) {
        if (W = W || p, X = X || z, ne !== n) {
          if (u) {
            var G = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw G.name = "Invariant Violation", G;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var le = W + ":" + z;
            !U[le] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + X + "` prop on `" + W + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), U[le] = !0, J++);
          }
        }
        return y[z] == null ? Y ? y[z] === null ? new h("The " + M + " `" + X + "` is marked as required " + ("in `" + W + "`, but its value is `null`.")) : new h("The " + M + " `" + X + "` is marked as required in " + ("`" + W + "`, but its value is `undefined`.")) : null : k(y, z, W, M, X);
      }
      var te = q.bind(null, !1);
      return te.isRequired = q.bind(null, !0), te;
    }
    function C(k) {
      function U(J, q, te, Y, y, z) {
        var W = J[q], M = K(W);
        if (M !== k) {
          var X = _(W);
          return new h(
            "Invalid " + Y + " `" + y + "` of type " + ("`" + X + "` supplied to `" + te + "`, expected ") + ("`" + k + "`."),
            { expectedType: k }
          );
        }
        return null;
      }
      return f(U);
    }
    function w() {
      return f(a);
    }
    function b(k) {
      function U(J, q, te, Y, y) {
        if (typeof k != "function")
          return new h("Property `" + y + "` of component `" + te + "` has invalid PropType notation inside arrayOf.");
        var z = J[q];
        if (!Array.isArray(z)) {
          var W = K(z);
          return new h("Invalid " + Y + " `" + y + "` of type " + ("`" + W + "` supplied to `" + te + "`, expected an array."));
        }
        for (var M = 0; M < z.length; M++) {
          var X = k(z, M, te, Y, y + "[" + M + "]", n);
          if (X instanceof Error)
            return X;
        }
        return null;
      }
      return f(U);
    }
    function S() {
      function k(U, J, q, te, Y) {
        var y = U[J];
        if (!s(y)) {
          var z = K(y);
          return new h("Invalid " + te + " `" + Y + "` of type " + ("`" + z + "` supplied to `" + q + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(k);
    }
    function D() {
      function k(U, J, q, te, Y) {
        var y = U[J];
        if (!t.isValidElementType(y)) {
          var z = K(y);
          return new h("Invalid " + te + " `" + Y + "` of type " + ("`" + z + "` supplied to `" + q + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(k);
    }
    function E(k) {
      function U(J, q, te, Y, y) {
        if (!(J[q] instanceof k)) {
          var z = k.name || p, W = ie(J[q]);
          return new h("Invalid " + Y + " `" + y + "` of type " + ("`" + W + "` supplied to `" + te + "`, expected ") + ("instance of `" + z + "`."));
        }
        return null;
      }
      return f(U);
    }
    function L(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function U(J, q, te, Y, y) {
        for (var z = J[q], W = 0; W < k.length; W++)
          if (m(z, k[W]))
            return null;
        var M = JSON.stringify(k, function(ne, G) {
          var le = _(G);
          return le === "symbol" ? String(G) : G;
        });
        return new h("Invalid " + Y + " `" + y + "` of value `" + String(z) + "` " + ("supplied to `" + te + "`, expected one of " + M + "."));
      }
      return f(U);
    }
    function F(k) {
      function U(J, q, te, Y, y) {
        if (typeof k != "function")
          return new h("Property `" + y + "` of component `" + te + "` has invalid PropType notation inside objectOf.");
        var z = J[q], W = K(z);
        if (W !== "object")
          return new h("Invalid " + Y + " `" + y + "` of type " + ("`" + W + "` supplied to `" + te + "`, expected an object."));
        for (var M in z)
          if (r(z, M)) {
            var X = k(z, M, te, Y, y + "." + M, n);
            if (X instanceof Error)
              return X;
          }
        return null;
      }
      return f(U);
    }
    function H(k) {
      if (!Array.isArray(k))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var U = 0; U < k.length; U++) {
        var J = k[U];
        if (typeof J != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + oe(J) + " at index " + U + "."
          ), a;
      }
      function q(te, Y, y, z, W) {
        for (var M = [], X = 0; X < k.length; X++) {
          var ne = k[X], G = ne(te, Y, y, z, W, n);
          if (G == null)
            return null;
          G.data && r(G.data, "expectedType") && M.push(G.data.expectedType);
        }
        var le = M.length > 0 ? ", expected one of type [" + M.join(", ") + "]" : "";
        return new h("Invalid " + z + " `" + W + "` supplied to " + ("`" + y + "`" + le + "."));
      }
      return f(q);
    }
    function P() {
      function k(U, J, q, te, Y) {
        return T(U[J]) ? null : new h("Invalid " + te + " `" + Y + "` supplied to " + ("`" + q + "`, expected a ReactNode."));
      }
      return f(k);
    }
    function $(k, U, J, q, te) {
      return new h(
        (k || "React class") + ": " + U + " type `" + J + "." + q + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + te + "`."
      );
    }
    function R(k) {
      function U(J, q, te, Y, y) {
        var z = J[q], W = K(z);
        if (W !== "object")
          return new h("Invalid " + Y + " `" + y + "` of type `" + W + "` " + ("supplied to `" + te + "`, expected `object`."));
        for (var M in k) {
          var X = k[M];
          if (typeof X != "function")
            return $(te, Y, y, M, _(X));
          var ne = X(z, M, te, Y, y + "." + M, n);
          if (ne)
            return ne;
        }
        return null;
      }
      return f(U);
    }
    function j(k) {
      function U(J, q, te, Y, y) {
        var z = J[q], W = K(z);
        if (W !== "object")
          return new h("Invalid " + Y + " `" + y + "` of type `" + W + "` " + ("supplied to `" + te + "`, expected `object`."));
        var M = e({}, J[q], k);
        for (var X in M) {
          var ne = k[X];
          if (r(k, X) && typeof ne != "function")
            return $(te, Y, y, X, _(ne));
          if (!ne)
            return new h(
              "Invalid " + Y + " `" + y + "` key `" + X + "` supplied to `" + te + "`.\nBad object: " + JSON.stringify(J[q], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(k), null, "  ")
            );
          var G = ne(z, X, te, Y, y + "." + X, n);
          if (G)
            return G;
        }
        return null;
      }
      return f(U);
    }
    function T(k) {
      switch (typeof k) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !k;
        case "object":
          if (Array.isArray(k))
            return k.every(T);
          if (k === null || s(k))
            return !0;
          var U = d(k);
          if (U) {
            var J = U.call(k), q;
            if (U !== k.entries) {
              for (; !(q = J.next()).done; )
                if (!T(q.value))
                  return !1;
            } else
              for (; !(q = J.next()).done; ) {
                var te = q.value;
                if (te && !T(te[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function N(k, U) {
      return k === "symbol" ? !0 : U ? U["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && U instanceof Symbol : !1;
    }
    function K(k) {
      var U = typeof k;
      return Array.isArray(k) ? "array" : k instanceof RegExp ? "object" : N(U, k) ? "symbol" : U;
    }
    function _(k) {
      if (typeof k > "u" || k === null)
        return "" + k;
      var U = K(k);
      if (U === "object") {
        if (k instanceof Date)
          return "date";
        if (k instanceof RegExp)
          return "regexp";
      }
      return U;
    }
    function oe(k) {
      var U = _(k);
      switch (U) {
        case "array":
        case "object":
          return "an " + U;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + U;
        default:
          return U;
      }
    }
    function ie(k) {
      return !k.constructor || !k.constructor.name ? p : k.constructor.name;
    }
    return v.checkPropTypes = i, v.resetWarningCache = i.resetWarningCache, v.PropTypes = v, v;
  }, wo;
}
var Bo, Yl;
function rE() {
  if (Yl) return Bo;
  Yl = 1;
  var t = Za();
  function e() {
  }
  function n() {
  }
  return n.resetWarningCache = e, Bo = function() {
    function r(a, s, u, l, c, d) {
      if (d !== t) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    r.isRequired = r;
    function i() {
      return r;
    }
    var o = {
      array: r,
      bigint: r,
      bool: r,
      func: r,
      number: r,
      object: r,
      string: r,
      symbol: r,
      any: r,
      arrayOf: i,
      element: r,
      elementType: r,
      instanceOf: i,
      node: r,
      objectOf: i,
      oneOf: i,
      oneOfType: i,
      shape: i,
      exact: i,
      checkPropTypes: n,
      resetWarningCache: e
    };
    return o.PropTypes = o, o;
  }, Bo;
}
if (process.env.NODE_ENV !== "production") {
  var iE = md(), oE = !0;
  ra.exports = nE()(iE.isElement, oE);
} else
  ra.exports = rE()();
var Zi = ra.exports, Yi = {};
Object.defineProperty(Yi, "__esModule", {
  value: !0
});
var aE = Fr, xo = sE(aE);
function sE(t) {
  return t && t.__esModule ? t : { default: t };
}
var uE = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function(e) {
    this.scroller = e, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0;
  },
  mapContainer: function(e, n) {
    this.containers[e] = n;
  },
  isMounted: function() {
    return this.mountFlag;
  },
  isInitialized: function() {
    return this.initialized;
  },
  initStateFromHash: function() {
    var e = this, n = this.getHash();
    n ? window.setTimeout(function() {
      e.scrollTo(n, !0), e.initialized = !0;
    }, 10) : this.initialized = !0;
  },
  scrollTo: function(e, n) {
    var r = this.scroller, i = r.get(e);
    if (i && (n || e !== r.getActiveLink())) {
      var o = this.containers[e] || document;
      r.scrollTo(e, { container: o });
    }
  },
  getHash: function() {
    return xo.default.getHash();
  },
  changeHash: function(e, n) {
    this.isInitialized() && xo.default.getHash() !== e && xo.default.updateHash(e, n);
  },
  handleHashChange: function() {
    this.scrollTo(this.getHash());
  },
  unmount: function() {
    this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange);
  }
};
Yi.default = uE;
Object.defineProperty(Or, "__esModule", {
  value: !0
});
var ii = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, lE = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), cE = me, Kl = Tr(cE), fE = Sr, oi = Tr(fE), dE = Jn, pE = Tr(dE), hE = Zi, Ke = Tr(hE), vE = Yi, en = Tr(vE);
function Tr(t) {
  return t && t.__esModule ? t : { default: t };
}
function gE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function mE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function yE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Xl = {
  to: Ke.default.string.isRequired,
  containerId: Ke.default.string,
  container: Ke.default.object,
  activeClass: Ke.default.string,
  activeStyle: Ke.default.object,
  spy: Ke.default.bool,
  horizontal: Ke.default.bool,
  smooth: Ke.default.oneOfType([Ke.default.bool, Ke.default.string]),
  offset: Ke.default.number,
  delay: Ke.default.number,
  isDynamic: Ke.default.bool,
  onClick: Ke.default.func,
  duration: Ke.default.oneOfType([Ke.default.number, Ke.default.func]),
  absolute: Ke.default.bool,
  onSetActive: Ke.default.func,
  onSetInactive: Ke.default.func,
  ignoreCancelEvents: Ke.default.bool,
  hashSpy: Ke.default.bool,
  saveHashHistory: Ke.default.bool,
  spyThrottle: Ke.default.number
};
Or.default = function(t, e) {
  var n = e || pE.default, r = function(o) {
    yE(a, o);
    function a(s) {
      gE(this, a);
      var u = mE(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, s));
      return i.call(u), u.state = {
        active: !1
      }, u;
    }
    return lE(a, [{
      key: "getScrollSpyContainer",
      value: function() {
        var u = this.props.containerId, l = this.props.container;
        return u && !l ? document.getElementById(u) : l && l.nodeType ? l : document;
      }
    }, {
      key: "componentDidMount",
      value: function() {
        if (this.props.spy || this.props.hashSpy) {
          var u = this.getScrollSpyContainer();
          oi.default.isMounted(u) || oi.default.mount(u, this.props.spyThrottle), this.props.hashSpy && (en.default.isMounted() || en.default.mount(n), en.default.mapContainer(this.props.to, u)), oi.default.addSpyHandler(this.spyHandler, u), this.setState({
            container: u
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        oi.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: "render",
      value: function() {
        var u = "";
        this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
        var l = {};
        this.state && this.state.active ? l = ii({}, this.props.style, this.props.activeStyle) : l = ii({}, this.props.style);
        var c = ii({}, this.props);
        for (var d in Xl)
          c.hasOwnProperty(d) && delete c[d];
        return c.className = u, c.style = l, c.onClick = this.handleClick, Kl.default.createElement(t, c);
      }
    }]), a;
  }(Kl.default.PureComponent), i = function() {
    var a = this;
    this.scrollTo = function(s, u) {
      n.scrollTo(s, ii({}, a.state, u));
    }, this.handleClick = function(s) {
      a.props.onClick && a.props.onClick(s), s.stopPropagation && s.stopPropagation(), s.preventDefault && s.preventDefault(), a.scrollTo(a.props.to, a.props);
    }, this.spyHandler = function(s, u) {
      var l = a.getScrollSpyContainer();
      if (!(en.default.isMounted() && !en.default.isInitialized())) {
        var c = a.props.horizontal, d = a.props.to, p = null, v = void 0, m = void 0;
        if (c) {
          var h = 0, f = 0, C = 0;
          if (l.getBoundingClientRect) {
            var w = l.getBoundingClientRect();
            C = w.left;
          }
          if (!p || a.props.isDynamic) {
            if (p = n.get(d), !p)
              return;
            var b = p.getBoundingClientRect();
            h = b.left - C + s, f = h + b.width;
          }
          var S = s - a.props.offset;
          v = S >= Math.floor(h) && S < Math.floor(f), m = S < Math.floor(h) || S >= Math.floor(f);
        } else {
          var D = 0, E = 0, L = 0;
          if (l.getBoundingClientRect) {
            var F = l.getBoundingClientRect();
            L = F.top;
          }
          if (!p || a.props.isDynamic) {
            if (p = n.get(d), !p)
              return;
            var H = p.getBoundingClientRect();
            D = H.top - L + u, E = D + H.height;
          }
          var P = u - a.props.offset;
          v = P >= Math.floor(D) && P < Math.floor(E), m = P < Math.floor(D) || P >= Math.floor(E);
        }
        var $ = n.getActiveLink();
        if (m) {
          if (d === $ && n.setActiveLink(void 0), a.props.hashSpy && en.default.getHash() === d) {
            var R = a.props.saveHashHistory, j = R === void 0 ? !1 : R;
            en.default.changeHash("", j);
          }
          a.props.spy && a.state.active && (a.setState({ active: !1 }), a.props.onSetInactive && a.props.onSetInactive(d, p));
        }
        if (v && ($ !== d || a.state.active === !1)) {
          n.setActiveLink(d);
          var T = a.props.saveHashHistory, N = T === void 0 ? !1 : T;
          a.props.hashSpy && en.default.changeHash(d, N), a.props.spy && (a.setState({ active: !0 }), a.props.onSetActive && a.props.onSetActive(d, p));
        }
      }
    };
  };
  return r.propTypes = Xl, r.defaultProps = { offset: 0 }, r;
};
Object.defineProperty(Ua, "__esModule", {
  value: !0
});
var CE = me, Jl = Cd(CE), DE = Or, bE = Cd(DE);
function Cd(t) {
  return t && t.__esModule ? t : { default: t };
}
function EE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Ql(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function wE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var BE = function(t) {
  wE(e, t);
  function e() {
    var n, r, i, o;
    EE(this, e);
    for (var a = arguments.length, s = Array(a), u = 0; u < a; u++)
      s[u] = arguments[u];
    return o = (r = (i = Ql(this, (n = e.__proto__ || Object.getPrototypeOf(e)).call.apply(n, [this].concat(s))), i), i.render = function() {
      return Jl.default.createElement(
        "a",
        i.props,
        i.props.children
      );
    }, r), Ql(i, o);
  }
  return e;
}(Jl.default.Component);
Ua.default = (0, bE.default)(BE);
var Ya = {};
Object.defineProperty(Ya, "__esModule", {
  value: !0
});
var xE = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), AE = me, ec = Dd(AE), LE = Or, OE = Dd(LE);
function Dd(t) {
  return t && t.__esModule ? t : { default: t };
}
function SE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function PE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function FE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ME = function(t) {
  FE(e, t);
  function e() {
    return SE(this, e), PE(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return xE(e, [{
    key: "render",
    value: function() {
      return ec.default.createElement(
        "button",
        this.props,
        this.props.children
      );
    }
  }]), e;
}(ec.default.Component);
Ya.default = (0, OE.default)(ME);
var Ka = {}, Ki = {};
Object.defineProperty(Ki, "__esModule", {
  value: !0
});
var kE = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, TE = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), RE = me, tc = Xi(RE), IE = Ec;
Xi(IE);
var jE = Jn, nc = Xi(jE), NE = Zi, rc = Xi(NE);
function Xi(t) {
  return t && t.__esModule ? t : { default: t };
}
function _E(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function $E(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function zE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
Ki.default = function(t) {
  var e = function(n) {
    zE(r, n);
    function r(i) {
      _E(this, r);
      var o = $E(this, (r.__proto__ || Object.getPrototypeOf(r)).call(this, i));
      return o.childBindings = {
        domNode: null
      }, o;
    }
    return TE(r, [{
      key: "componentDidMount",
      value: function() {
        if (typeof window > "u")
          return !1;
        this.registerElems(this.props.name);
      }
    }, {
      key: "componentDidUpdate",
      value: function(o) {
        this.props.name !== o.name && this.registerElems(this.props.name);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        if (typeof window > "u")
          return !1;
        nc.default.unregister(this.props.name);
      }
    }, {
      key: "registerElems",
      value: function(o) {
        nc.default.register(o, this.childBindings.domNode);
      }
    }, {
      key: "render",
      value: function() {
        return tc.default.createElement(t, kE({}, this.props, { parentBindings: this.childBindings }));
      }
    }]), r;
  }(tc.default.Component);
  return e.propTypes = {
    name: rc.default.string,
    id: rc.default.string
  }, e;
};
Object.defineProperty(Ka, "__esModule", {
  value: !0
});
var ic = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, WE = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}(), UE = me, oc = Xa(UE), HE = Ki, VE = Xa(HE), qE = Zi, ac = Xa(qE);
function Xa(t) {
  return t && t.__esModule ? t : { default: t };
}
function GE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function ZE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function YE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var bd = function(t) {
  YE(e, t);
  function e() {
    return GE(this, e), ZE(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return WE(e, [{
    key: "render",
    value: function() {
      var r = this, i = ic({}, this.props);
      return delete i.name, i.parentBindings && delete i.parentBindings, oc.default.createElement(
        "div",
        ic({}, i, { ref: function(a) {
          r.props.parentBindings.domNode = a;
        } }),
        this.props.children
      );
    }
  }]), e;
}(oc.default.Component);
bd.propTypes = {
  name: ac.default.string,
  id: ac.default.string
};
Ka.default = (0, VE.default)(bd);
var Ao = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var n = arguments[e];
    for (var r in n)
      Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
  }
  return t;
}, sc = /* @__PURE__ */ function() {
  function t(e, n) {
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i);
    }
  }
  return function(e, n, r) {
    return n && t(e.prototype, n), r && t(e, r), e;
  };
}();
function uc(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function lc(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function cc(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ai = me, Dn = Sr, Lo = Jn, tt = Zi, tn = Yi, fc = {
  to: tt.string.isRequired,
  containerId: tt.string,
  container: tt.object,
  activeClass: tt.string,
  spy: tt.bool,
  smooth: tt.oneOfType([tt.bool, tt.string]),
  offset: tt.number,
  delay: tt.number,
  isDynamic: tt.bool,
  onClick: tt.func,
  duration: tt.oneOfType([tt.number, tt.func]),
  absolute: tt.bool,
  onSetActive: tt.func,
  onSetInactive: tt.func,
  ignoreCancelEvents: tt.bool,
  hashSpy: tt.bool,
  spyThrottle: tt.number
}, KE = {
  Scroll: function(e, n) {
    console.warn("Helpers.Scroll is deprecated since v1.7.0");
    var r = n || Lo, i = function(a) {
      cc(s, a);
      function s(u) {
        uc(this, s);
        var l = lc(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, u));
        return o.call(l), l.state = {
          active: !1
        }, l;
      }
      return sc(s, [{
        key: "getScrollSpyContainer",
        value: function() {
          var l = this.props.containerId, c = this.props.container;
          return l ? document.getElementById(l) : c && c.nodeType ? c : document;
        }
      }, {
        key: "componentDidMount",
        value: function() {
          if (this.props.spy || this.props.hashSpy) {
            var l = this.getScrollSpyContainer();
            Dn.isMounted(l) || Dn.mount(l, this.props.spyThrottle), this.props.hashSpy && (tn.isMounted() || tn.mount(r), tn.mapContainer(this.props.to, l)), this.props.spy && Dn.addStateHandler(this.stateHandler), Dn.addSpyHandler(this.spyHandler, l), this.setState({
              container: l
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          Dn.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: "render",
        value: function() {
          var l = "";
          this.state && this.state.active ? l = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : l = this.props.className;
          var c = Ao({}, this.props);
          for (var d in fc)
            c.hasOwnProperty(d) && delete c[d];
          return c.className = l, c.onClick = this.handleClick, ai.createElement(e, c);
        }
      }]), s;
    }(ai.Component), o = function() {
      var s = this;
      this.scrollTo = function(u, l) {
        r.scrollTo(u, Ao({}, s.state, l));
      }, this.handleClick = function(u) {
        s.props.onClick && s.props.onClick(u), u.stopPropagation && u.stopPropagation(), u.preventDefault && u.preventDefault(), s.scrollTo(s.props.to, s.props);
      }, this.stateHandler = function() {
        r.getActiveLink() !== s.props.to && (s.state !== null && s.state.active && s.props.onSetInactive && s.props.onSetInactive(), s.setState({ active: !1 }));
      }, this.spyHandler = function(u) {
        var l = s.getScrollSpyContainer();
        if (!(tn.isMounted() && !tn.isInitialized())) {
          var c = s.props.to, d = null, p = 0, v = 0, m = 0;
          if (l.getBoundingClientRect) {
            var h = l.getBoundingClientRect();
            m = h.top;
          }
          if (!d || s.props.isDynamic) {
            if (d = r.get(c), !d)
              return;
            var f = d.getBoundingClientRect();
            p = f.top - m + u, v = p + f.height;
          }
          var C = u - s.props.offset, w = C >= Math.floor(p) && C < Math.floor(v), b = C < Math.floor(p) || C >= Math.floor(v), S = r.getActiveLink();
          if (b)
            return c === S && r.setActiveLink(void 0), s.props.hashSpy && tn.getHash() === c && tn.changeHash(), s.props.spy && s.state.active && (s.setState({ active: !1 }), s.props.onSetInactive && s.props.onSetInactive()), Dn.updateStates();
          if (w && S !== c)
            return r.setActiveLink(c), s.props.hashSpy && tn.changeHash(c), s.props.spy && (s.setState({ active: !0 }), s.props.onSetActive && s.props.onSetActive(c)), Dn.updateStates();
        }
      };
    };
    return i.propTypes = fc, i.defaultProps = { offset: 0 }, i;
  },
  Element: function(e) {
    console.warn("Helpers.Element is deprecated since v1.7.0");
    var n = function(r) {
      cc(i, r);
      function i(o) {
        uc(this, i);
        var a = lc(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, o));
        return a.childBindings = {
          domNode: null
        }, a;
      }
      return sc(i, [{
        key: "componentDidMount",
        value: function() {
          if (typeof window > "u")
            return !1;
          this.registerElems(this.props.name);
        }
      }, {
        key: "componentDidUpdate",
        value: function(a) {
          this.props.name !== a.name && this.registerElems(this.props.name);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          if (typeof window > "u")
            return !1;
          Lo.unregister(this.props.name);
        }
      }, {
        key: "registerElems",
        value: function(a) {
          Lo.register(a, this.childBindings.domNode);
        }
      }, {
        key: "render",
        value: function() {
          return ai.createElement(e, Ao({}, this.props, { parentBindings: this.childBindings }));
        }
      }]), i;
    }(ai.Component);
    return n.propTypes = {
      name: tt.string,
      id: tt.string
    }, n;
  }
}, XE = KE;
Object.defineProperty(rt, "__esModule", {
  value: !0
});
rt.Helpers = rt.ScrollElement = rt.ScrollLink = Md = rt.animateScroll = rt.scrollSpy = rt.Events = rt.scroller = rt.Element = rt.Button = rt.Link = void 0;
var JE = Ua, Ed = $t(JE), QE = Ya, wd = $t(QE), e1 = Ka, Bd = $t(e1), t1 = Jn, xd = $t(t1), n1 = Mr, Ad = $t(n1), r1 = Sr, Ld = $t(r1), i1 = Vi, Od = $t(i1), o1 = Or, Sd = $t(o1), a1 = Ki, Pd = $t(a1), s1 = XE, Fd = $t(s1);
function $t(t) {
  return t && t.__esModule ? t : { default: t };
}
rt.Link = Ed.default;
rt.Button = wd.default;
rt.Element = Bd.default;
rt.scroller = xd.default;
rt.Events = Ad.default;
rt.scrollSpy = Ld.default;
var Md = rt.animateScroll = Od.default;
rt.ScrollLink = Sd.default;
rt.ScrollElement = Pd.default;
rt.Helpers = Fd.default;
rt.default = { Link: Ed.default, Button: wd.default, Element: Bd.default, scroller: xd.default, Events: Ad.default, scrollSpy: Ld.default, animateScroll: Od.default, ScrollLink: Sd.default, ScrollElement: Pd.default, Helpers: Fd.default };
const Ja = ct({}), kd = ct({});
function u1() {
  const t = je(kd);
  if (Object.entries(t).length === 0)
    throw new Error("useToast must be used within a Provider");
  return t;
}
function dc(t) {
  return t && typeof t.title == "string" && typeof t.message == "string" && (t.size === void 0 || t.size === "md" || t.size === "lg") && (t.type === "info" || t.type === "success" || t.type === "danger" || t.type === "warning");
}
function Vw() {
  const t = wc(), { closeModal: e, closeAll: n } = je(Ja), { showToast: r } = u1(), { getParam: i } = ld(), { pathname: o } = ua(), a = Bc(), s = i("closeAllModals");
  B(() => {
    s === "true" && (n(), a(o));
  }, [s]), B(() => {
    const u = t == null ? void 0 : t.closeModalKey;
    u && e(u);
  }, [t]), B(() => {
    const u = t == null ? void 0 : t.toast, l = t == null ? void 0 : t.message;
    dc(u) && r(u), !dc(u) && l && r({
      message: l,
      title: "Atenção!",
      type: "warning"
    });
  }, [t]), B(() => {
    var u, l;
    if (typeof ((u = t == null ? void 0 : t.data) == null ? void 0 : u.scrollTo) == "string") {
      const c = document.getElementById((l = t == null ? void 0 : t.data) == null ? void 0 : l.scrollTo);
      c && Md.scrollTo(c.offsetTop - 200);
    }
  }, [t]);
}
const Td = ct({});
function qw(t) {
  const e = je(Td);
  if (Object.entries(e).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (t) {
    const {
      drawerData: n,
      drawerIsOpen: r,
      openDrawer: i,
      closeDrawer: o
    } = e, a = r(t), s = n(t);
    return { drawerIsOpen: a, drawerData: s, openDrawer: (c) => i(t, c), closeDrawer: () => o(t) };
  } else
    return e;
}
function Gw(t) {
  const e = je(Ja);
  if (Object.entries(e).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (t) {
    const {
      modalData: n,
      modalIsOpen: r,
      openModal: i,
      closeModal: o
    } = e, a = r(t), s = n(t);
    return { modalIsOpen: a, modalData: s, openModal: (c) => i(t, c), closeModal: () => o(t) };
  } else
    return e;
}
function Zw(t) {
  const { children: e = !1 } = t, [n, r] = I([]);
  function i(u) {
    return !!n.some((l) => l.key === u);
  }
  function o(u) {
    var l;
    return (l = n.find((c) => c.key === u)) == null ? void 0 : l.data;
  }
  function a(u, l) {
    const c = i(u);
    r(c ? (d) => [...d.filter((v) => v.key !== u), { key: u, data: l }] : [...n, { key: u, data: l }]);
  }
  function s(u) {
    r(n.filter((l) => l.key !== u));
  }
  return /* @__PURE__ */ x.jsx(
    Td.Provider,
    {
      value: { drawerIsOpen: i, drawerData: o, openDrawer: a, closeDrawer: s },
      children: e
    }
  );
}
function Yw({
  googleMapsApiKey: t,
  children: e,
  ...n
}) {
  return /* @__PURE__ */ x.jsx(
    Op,
    {
      libraries: ["places", "marker", "maps"],
      googleMapsApiKey: t,
      ...n,
      children: e
    }
  );
}
function Kw(t) {
  const { children: e = !1 } = t, [n, r] = I([]);
  function i(l) {
    return !!n.some((c) => c.key === l);
  }
  function o(l) {
    var c;
    return (c = n.find((d) => d.key === l)) == null ? void 0 : c.data;
  }
  function a(l, c) {
    const d = i(l);
    r(d ? (p) => [...p.filter((m) => m.key !== l), { key: l, data: c }] : [...n, { key: l, data: c }]);
  }
  function s(l) {
    r(n.filter((c) => c.key !== l));
  }
  function u() {
    r([]);
  }
  return /* @__PURE__ */ x.jsx(
    Ja.Provider,
    {
      value: { modalIsOpen: i, modalData: o, openModal: a, closeModal: s, closeAll: u },
      children: e
    }
  );
}
let l1 = { data: "" }, c1 = (t) => typeof window == "object" ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t || l1, f1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, d1 = /\/\*[^]*?\*\/|  +/g, pc = /\n+/g, sn = (t, e) => {
  let n = "", r = "", i = "";
  for (let o in t) {
    let a = t[o];
    o[0] == "@" ? o[1] == "i" ? n = o + " " + a + ";" : r += o[1] == "f" ? sn(a, o) : o + "{" + sn(a, o[1] == "k" ? "" : e) + "}" : typeof a == "object" ? r += sn(a, e ? e.replace(/([^,])+/g, (s) => o.replace(/(^:.*)|([^,])+/g, (u) => /&/.test(u) ? u.replace(/&/g, s) : s ? s + " " + u : u)) : o) : a != null && (o = /^--/.test(o) ? o : o.replace(/[A-Z]/g, "-$&").toLowerCase(), i += sn.p ? sn.p(o, a) : o + ":" + a + ";");
  }
  return n + (e && i ? e + "{" + i + "}" : i) + r;
}, Vt = {}, Rd = (t) => {
  if (typeof t == "object") {
    let e = "";
    for (let n in t) e += n + Rd(t[n]);
    return e;
  }
  return t;
}, p1 = (t, e, n, r, i) => {
  let o = Rd(t), a = Vt[o] || (Vt[o] = ((u) => {
    let l = 0, c = 11;
    for (; l < u.length; ) c = 101 * c + u.charCodeAt(l++) >>> 0;
    return "go" + c;
  })(o));
  if (!Vt[a]) {
    let u = o !== t ? t : ((l) => {
      let c, d, p = [{}];
      for (; c = f1.exec(l.replace(d1, "")); ) c[4] ? p.shift() : c[3] ? (d = c[3].replace(pc, " ").trim(), p.unshift(p[0][d] = p[0][d] || {})) : p[0][c[1]] = c[2].replace(pc, " ").trim();
      return p[0];
    })(t);
    Vt[a] = sn(i ? { ["@keyframes " + a]: u } : u, n ? "" : "." + a);
  }
  let s = n && Vt.g ? Vt.g : null;
  return n && (Vt.g = Vt[a]), ((u, l, c, d) => {
    d ? l.data = l.data.replace(d, u) : l.data.indexOf(u) === -1 && (l.data = c ? u + l.data : l.data + u);
  })(Vt[a], e, r, s), a;
}, h1 = (t, e, n) => t.reduce((r, i, o) => {
  let a = e[o];
  if (a && a.call) {
    let s = a(n), u = s && s.props && s.props.className || /^go/.test(s) && s;
    a = u ? "." + u : s && typeof s == "object" ? s.props ? "" : sn(s, "") : s === !1 ? "" : s;
  }
  return r + i + (a ?? "");
}, "");
function Ji(t) {
  let e = this || {}, n = t.call ? t(e.p) : t;
  return p1(n.unshift ? n.raw ? h1(n, [].slice.call(arguments, 1), e.p) : n.reduce((r, i) => Object.assign(r, i && i.call ? i(e.p) : i), {}) : n, c1(e.target), e.g, e.o, e.k);
}
let Id, ia, oa;
Ji.bind({ g: 1 });
let Yt = Ji.bind({ k: 1 });
function v1(t, e, n, r) {
  sn.p = e, Id = t, ia = n, oa = r;
}
function vn(t, e) {
  let n = this || {};
  return function() {
    let r = arguments;
    function i(o, a) {
      let s = Object.assign({}, o), u = s.className || i.className;
      n.p = Object.assign({ theme: ia && ia() }, s), n.o = / *go\d+/.test(u), s.className = Ji.apply(n, r) + (u ? " " + u : ""), e && (s.ref = a);
      let l = t;
      return t[0] && (l = s.as || t, delete s.as), oa && l[0] && oa(s), Id(l, s);
    }
    return e ? e(i) : i;
  };
}
var g1 = (t) => typeof t == "function", Li = (t, e) => g1(t) ? t(e) : t, m1 = /* @__PURE__ */ (() => {
  let t = 0;
  return () => (++t).toString();
})(), jd = /* @__PURE__ */ (() => {
  let t;
  return () => {
    if (t === void 0 && typeof window < "u") {
      let e = matchMedia("(prefers-reduced-motion: reduce)");
      t = !e || e.matches;
    }
    return t;
  };
})(), y1 = 20, hi = /* @__PURE__ */ new Map(), C1 = 1e3, hc = (t) => {
  if (hi.has(t)) return;
  let e = setTimeout(() => {
    hi.delete(t), Tn({ type: 4, toastId: t });
  }, C1);
  hi.set(t, e);
}, D1 = (t) => {
  let e = hi.get(t);
  e && clearTimeout(e);
}, aa = (t, e) => {
  switch (e.type) {
    case 0:
      return { ...t, toasts: [e.toast, ...t.toasts].slice(0, y1) };
    case 1:
      return e.toast.id && D1(e.toast.id), { ...t, toasts: t.toasts.map((o) => o.id === e.toast.id ? { ...o, ...e.toast } : o) };
    case 2:
      let { toast: n } = e;
      return t.toasts.find((o) => o.id === n.id) ? aa(t, { type: 1, toast: n }) : aa(t, { type: 0, toast: n });
    case 3:
      let { toastId: r } = e;
      return r ? hc(r) : t.toasts.forEach((o) => {
        hc(o.id);
      }), { ...t, toasts: t.toasts.map((o) => o.id === r || r === void 0 ? { ...o, visible: !1 } : o) };
    case 4:
      return e.toastId === void 0 ? { ...t, toasts: [] } : { ...t, toasts: t.toasts.filter((o) => o.id !== e.toastId) };
    case 5:
      return { ...t, pausedAt: e.time };
    case 6:
      let i = e.time - (t.pausedAt || 0);
      return { ...t, pausedAt: void 0, toasts: t.toasts.map((o) => ({ ...o, pauseDuration: o.pauseDuration + i })) };
  }
}, vi = [], gi = { toasts: [], pausedAt: void 0 }, Tn = (t) => {
  gi = aa(gi, t), vi.forEach((e) => {
    e(gi);
  });
}, b1 = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, E1 = (t = {}) => {
  let [e, n] = I(gi);
  B(() => (vi.push(n), () => {
    let i = vi.indexOf(n);
    i > -1 && vi.splice(i, 1);
  }), [e]);
  let r = e.toasts.map((i) => {
    var o, a;
    return { ...t, ...t[i.type], ...i, duration: i.duration || ((o = t[i.type]) == null ? void 0 : o.duration) || (t == null ? void 0 : t.duration) || b1[i.type], style: { ...t.style, ...(a = t[i.type]) == null ? void 0 : a.style, ...i.style } };
  });
  return { ...e, toasts: r };
}, w1 = (t, e = "blank", n) => ({ createdAt: Date.now(), visible: !0, type: e, ariaProps: { role: "status", "aria-live": "polite" }, message: t, pauseDuration: 0, ...n, id: (n == null ? void 0 : n.id) || m1() }), Rr = (t) => (e, n) => {
  let r = w1(e, t, n);
  return Tn({ type: 2, toast: r }), r.id;
}, Bt = (t, e) => Rr("blank")(t, e);
Bt.error = Rr("error");
Bt.success = Rr("success");
Bt.loading = Rr("loading");
Bt.custom = Rr("custom");
Bt.dismiss = (t) => {
  Tn({ type: 3, toastId: t });
};
Bt.remove = (t) => Tn({ type: 4, toastId: t });
Bt.promise = (t, e, n) => {
  let r = Bt.loading(e.loading, { ...n, ...n == null ? void 0 : n.loading });
  return t.then((i) => (Bt.success(Li(e.success, i), { id: r, ...n, ...n == null ? void 0 : n.success }), i)).catch((i) => {
    Bt.error(Li(e.error, i), { id: r, ...n, ...n == null ? void 0 : n.error });
  }), t;
};
var B1 = (t, e) => {
  Tn({ type: 1, toast: { id: t, height: e } });
}, x1 = () => {
  Tn({ type: 5, time: Date.now() });
}, A1 = (t) => {
  let { toasts: e, pausedAt: n } = E1(t);
  B(() => {
    if (n) return;
    let o = Date.now(), a = e.map((s) => {
      if (s.duration === 1 / 0) return;
      let u = (s.duration || 0) + s.pauseDuration - (o - s.createdAt);
      if (u < 0) {
        s.visible && Bt.dismiss(s.id);
        return;
      }
      return setTimeout(() => Bt.dismiss(s.id), u);
    });
    return () => {
      a.forEach((s) => s && clearTimeout(s));
    };
  }, [e, n]);
  let r = ze(() => {
    n && Tn({ type: 6, time: Date.now() });
  }, [n]), i = ze((o, a) => {
    let { reverseOrder: s = !1, gutter: u = 8, defaultPosition: l } = a || {}, c = e.filter((v) => (v.position || l) === (o.position || l) && v.height), d = c.findIndex((v) => v.id === o.id), p = c.filter((v, m) => m < d && v.visible).length;
    return c.filter((v) => v.visible).slice(...s ? [p + 1] : [0, p]).reduce((v, m) => v + (m.height || 0) + u, 0);
  }, [e]);
  return { toasts: e, handlers: { updateHeight: B1, startPause: x1, endPause: r, calculateOffset: i } };
}, L1 = Yt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, O1 = Yt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, S1 = Yt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, P1 = vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${L1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${O1} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${(t) => t.secondary || "#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${S1} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, F1 = Yt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, M1 = vn("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${F1} 1s linear infinite;
`, k1 = Yt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, T1 = Yt`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`, R1 = vn("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${k1} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${T1} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${(t) => t.secondary || "#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`, I1 = vn("div")`
  position: absolute;
`, j1 = vn("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, N1 = Yt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, _1 = vn("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${N1} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, $1 = ({ toast: t }) => {
  let { icon: e, type: n, iconTheme: r } = t;
  return e !== void 0 ? typeof e == "string" ? lt.createElement(_1, null, e) : e : n === "blank" ? null : lt.createElement(j1, null, lt.createElement(M1, { ...r }), n !== "loading" && lt.createElement(I1, null, n === "error" ? lt.createElement(P1, { ...r }) : lt.createElement(R1, { ...r })));
}, z1 = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, W1 = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`, U1 = "0%{opacity:0;} 100%{opacity:1;}", H1 = "0%{opacity:1;} 100%{opacity:0;}", V1 = vn("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`, q1 = vn("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, G1 = (t, e) => {
  let n = t.includes("top") ? 1 : -1, [r, i] = jd() ? [U1, H1] : [z1(n), W1(n)];
  return { animation: e ? `${Yt(r)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${Yt(i)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, Z1 = lt.memo(({ toast: t, position: e, style: n, children: r }) => {
  let i = t.height ? G1(t.position || e || "top-center", t.visible) : { opacity: 0 }, o = lt.createElement($1, { toast: t }), a = lt.createElement(q1, { ...t.ariaProps }, Li(t.message, t));
  return lt.createElement(V1, { className: t.className, style: { ...i, ...n, ...t.style } }, typeof r == "function" ? r({ icon: o, message: a }) : lt.createElement(lt.Fragment, null, o, a));
});
v1(lt.createElement);
var Y1 = ({ id: t, className: e, style: n, onHeightUpdate: r, children: i }) => {
  let o = lt.useCallback((a) => {
    if (a) {
      let s = () => {
        let u = a.getBoundingClientRect().height;
        r(t, u);
      };
      s(), new MutationObserver(s).observe(a, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [t, r]);
  return lt.createElement("div", { ref: o, className: e, style: n }, i);
}, K1 = (t, e) => {
  let n = t.includes("top"), r = n ? { top: 0 } : { bottom: 0 }, i = t.includes("center") ? { justifyContent: "center" } : t.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: jd() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${e * (n ? 1 : -1)}px)`, ...r, ...i };
}, X1 = Ji`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, si = 16, J1 = ({ reverseOrder: t, position: e = "top-center", toastOptions: n, gutter: r, children: i, containerStyle: o, containerClassName: a }) => {
  let { toasts: s, handlers: u } = A1(n);
  return lt.createElement("div", { style: { position: "fixed", zIndex: 9999, top: si, left: si, right: si, bottom: si, pointerEvents: "none", ...o }, className: a, onMouseEnter: u.startPause, onMouseLeave: u.endPause }, s.map((l) => {
    let c = l.position || e, d = u.calculateOffset(l, { reverseOrder: t, gutter: r, defaultPosition: e }), p = K1(c, d);
    return lt.createElement(Y1, { id: l.id, key: l.id, onHeightUpdate: u.updateHeight, className: l.visible ? X1 : "", style: p }, l.type === "custom" ? Li(l.message, l) : i ? i(l) : lt.createElement(Z1, { toast: l, position: c }));
  }));
}, Q1 = Bt;
function Xw({ children: t }) {
  function e(n) {
    Q1((r) => /* @__PURE__ */ x.jsx(eb, { ...n }), {
      style: {
        padding: 0,
        background: "transparent",
        boxShadow: "none"
      }
    });
  }
  return /* @__PURE__ */ x.jsxs(kd.Provider, { value: { showToast: e }, children: [
    /* @__PURE__ */ x.jsx(J1, { position: "top-right" }),
    t
  ] });
}
export {
  aw as AlertContainer,
  sw as AlertContent,
  uw as AlertDescription,
  lw as AlertIcon,
  cp as AlertTitle,
  cw as Badge,
  kw as BreadcrumbContainer,
  Tw as BreadcrumbLink,
  Dw as Button,
  fw as Card,
  Ew as Checkbox,
  dw as Divider,
  Nw as DrawerContainer,
  _w as DrawerHeader,
  Zw as DrawerProvider,
  bw as FormController,
  ww as FormError,
  Bw as FormLabel,
  pw as GoogleMap,
  Yw as GoogleProvider,
  xw as GoogleSearchPlaces,
  Aw as IconButton,
  Vh as Input,
  $w as ModalContainer,
  zw as ModalFooter,
  Ww as ModalHeader,
  Kw as ModalProvider,
  Rw as Pagination,
  Uw as Popover,
  Ow as RadioBox,
  Lw as RadioGroup,
  Sw as RichText,
  Pw as Select,
  hw as Skeleton,
  Fw as Switch,
  jw as TabButton,
  Iw as TabContainer,
  vw as TableBody,
  gw as TableCaption,
  mw as TableContainer,
  yw as TableFooter,
  Cw as TableHeader,
  Mw as Textarea,
  eb as Toast,
  Xw as ToastProvider,
  Hw as Tooltip,
  Vw as useAutomation,
  qw as useDrawer,
  Gw as useModal,
  ld as useScopedParams,
  u1 as useToast
};
