import * as it from "react";
import de, { createContext as st, useContext as Se, Children as Nt, useState as k, useEffect as x, useRef as Re, useId as Ip, forwardRef as vs, useCallback as ke, useReducer as Np, useMemo as Ut, useLayoutEffect as _p, Component as $p, memo as Xe, useSyncExternalStore as zp, PureComponent as He, createRef as ka, isValidElement as Qc, cloneElement as ef } from "react";
import { Info as tf, AlertTriangle as Wp, XCircle as rf, CheckCircle2 as nf, Loader2 as cr, Check as gs, RefreshCw as Hp, ChevronDown as af, X as ms, Search as sf, Image as Up, Heading1 as Vp, Heading2 as qp, Quote as Gp, Bold as Zp, Italic as Kp, Underline as Yp, Code as Xp, AlignLeft as Jp, AlignRight as Qp, AlignCenter as eh, AlignJustify as th, ChevronRight as Ni, ChevronLeft as rh, Ellipsis as co, MapPinned as nh } from "lucide-react";
import { useActionData as of, useNavigation as ah, useFetchers as ih, useLocation as ys, Link as sh, useNavigate as uf } from "@remix-run/react";
import { InputMask as oh } from "@react-input/mask";
import * as lf from "react-dom";
import cf, { createPortal as ja } from "react-dom";
import { AnimatePresence as ff, motion as yn } from "framer-motion";
var Ie = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Ra(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var _i = { exports: {} }, tn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var fo;
function uh() {
  if (fo) return tn;
  fo = 1;
  var t = de, e = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function s(o, u, l) {
    var c, d = {}, p = null, m = null;
    l !== void 0 && (p = "" + l), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (m = u.ref);
    for (c in u) n.call(u, c) && !i.hasOwnProperty(c) && (d[c] = u[c]);
    if (o && o.defaultProps) for (c in u = o.defaultProps, u) d[c] === void 0 && (d[c] = u[c]);
    return { $$typeof: e, type: o, key: p, ref: m, props: d, _owner: a.current };
  }
  return tn.Fragment = r, tn.jsx = s, tn.jsxs = s, tn;
}
var rn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var po;
function lh() {
  return po || (po = 1, process.env.NODE_ENV !== "production" && function() {
    var t = de, e = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), s = Symbol.for("react.provider"), o = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), c = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), h = Symbol.iterator, v = "@@iterator";
    function f(L) {
      if (L === null || typeof L != "object")
        return null;
      var ae = h && L[h] || L[v];
      return typeof ae == "function" ? ae : null;
    }
    var D = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function b(L) {
      {
        for (var ae = arguments.length, oe = new Array(ae > 1 ? ae - 1 : 0), he = 1; he < ae; he++)
          oe[he - 1] = arguments[he];
        B("error", L, oe);
      }
    }
    function B(L, ae, oe) {
      {
        var he = D.ReactDebugCurrentFrame, Fe = he.getStackAddendum();
        Fe !== "" && (ae += "%s", oe = oe.concat([Fe]));
        var Ne = oe.map(function(xe) {
          return String(xe);
        });
        Ne.unshift("Warning: " + ae), Function.prototype.apply.call(console[L], console, Ne);
      }
    }
    var E = !1, C = !1, O = !1, A = !1, H = !1, P;
    P = Symbol.for("react.module.reference");
    function W(L) {
      return !!(typeof L == "string" || typeof L == "function" || L === n || L === i || H || L === a || L === l || L === c || A || L === m || E || C || O || typeof L == "object" && L !== null && (L.$$typeof === p || L.$$typeof === d || L.$$typeof === s || L.$$typeof === o || L.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      L.$$typeof === P || L.getModuleId !== void 0));
    }
    function R(L, ae, oe) {
      var he = L.displayName;
      if (he)
        return he;
      var Fe = ae.displayName || ae.name || "";
      return Fe !== "" ? oe + "(" + Fe + ")" : oe;
    }
    function M(L) {
      return L.displayName || "Context";
    }
    function z(L) {
      if (L == null)
        return null;
      if (typeof L.tag == "number" && b("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof L == "function")
        return L.displayName || L.name || null;
      if (typeof L == "string")
        return L;
      switch (L) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case a:
          return "StrictMode";
        case l:
          return "Suspense";
        case c:
          return "SuspenseList";
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case o:
            var ae = L;
            return M(ae) + ".Consumer";
          case s:
            var oe = L;
            return M(oe._context) + ".Provider";
          case u:
            return R(L, L.render, "ForwardRef");
          case d:
            var he = L.displayName || null;
            return he !== null ? he : z(L.type) || "Memo";
          case p: {
            var Fe = L, Ne = Fe._payload, xe = Fe._init;
            try {
              return z(xe(Ne));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _ = Object.assign, $ = 0, Y, V, ee, ie, j, G, J;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function ne() {
      {
        if ($ === 0) {
          Y = console.log, V = console.info, ee = console.warn, ie = console.error, j = console.group, G = console.groupCollapsed, J = console.groupEnd;
          var L = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: L,
            log: L,
            warn: L,
            error: L,
            group: L,
            groupCollapsed: L,
            groupEnd: L
          });
        }
        $++;
      }
    }
    function F() {
      {
        if ($--, $ === 0) {
          var L = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _({}, L, {
              value: Y
            }),
            info: _({}, L, {
              value: V
            }),
            warn: _({}, L, {
              value: ee
            }),
            error: _({}, L, {
              value: ie
            }),
            group: _({}, L, {
              value: j
            }),
            groupCollapsed: _({}, L, {
              value: G
            }),
            groupEnd: _({}, L, {
              value: J
            })
          });
        }
        $ < 0 && b("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var w = D.ReactCurrentDispatcher, N;
    function T(L, ae, oe) {
      {
        if (N === void 0)
          try {
            throw Error();
          } catch (Fe) {
            var he = Fe.stack.trim().match(/\n( *(at )?)/);
            N = he && he[1] || "";
          }
        return `
` + N + L;
      }
    }
    var I = !1, Z;
    {
      var te = typeof WeakMap == "function" ? WeakMap : Map;
      Z = new te();
    }
    function Q(L, ae) {
      if (!L || I)
        return "";
      {
        var oe = Z.get(L);
        if (oe !== void 0)
          return oe;
      }
      var he;
      I = !0;
      var Fe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ne;
      Ne = w.current, w.current = null, ne();
      try {
        if (ae) {
          var xe = function() {
            throw Error();
          };
          if (Object.defineProperty(xe.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(xe, []);
            } catch (gt) {
              he = gt;
            }
            Reflect.construct(L, [], xe);
          } else {
            try {
              xe.call();
            } catch (gt) {
              he = gt;
            }
            L.call(xe.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (gt) {
            he = gt;
          }
          L();
        }
      } catch (gt) {
        if (gt && he && typeof gt.stack == "string") {
          for (var Ee = gt.stack.split(`
`), ft = he.stack.split(`
`), Ze = Ee.length - 1, Ye = ft.length - 1; Ze >= 1 && Ye >= 0 && Ee[Ze] !== ft[Ye]; )
            Ye--;
          for (; Ze >= 1 && Ye >= 0; Ze--, Ye--)
            if (Ee[Ze] !== ft[Ye]) {
              if (Ze !== 1 || Ye !== 1)
                do
                  if (Ze--, Ye--, Ye < 0 || Ee[Ze] !== ft[Ye]) {
                    var Lt = `
` + Ee[Ze].replace(" at new ", " at ");
                    return L.displayName && Lt.includes("<anonymous>") && (Lt = Lt.replace("<anonymous>", L.displayName)), typeof L == "function" && Z.set(L, Lt), Lt;
                  }
                while (Ze >= 1 && Ye >= 0);
              break;
            }
        }
      } finally {
        I = !1, w.current = Ne, F(), Error.prepareStackTrace = Fe;
      }
      var _r = L ? L.displayName || L.name : "", mr = _r ? T(_r) : "";
      return typeof L == "function" && Z.set(L, mr), mr;
    }
    function pe(L, ae, oe) {
      return Q(L, !1);
    }
    function fe(L) {
      var ae = L.prototype;
      return !!(ae && ae.isReactComponent);
    }
    function ce(L, ae, oe) {
      if (L == null)
        return "";
      if (typeof L == "function")
        return Q(L, fe(L));
      if (typeof L == "string")
        return T(L);
      switch (L) {
        case l:
          return T("Suspense");
        case c:
          return T("SuspenseList");
      }
      if (typeof L == "object")
        switch (L.$$typeof) {
          case u:
            return pe(L.render);
          case d:
            return ce(L.type, ae, oe);
          case p: {
            var he = L, Fe = he._payload, Ne = he._init;
            try {
              return ce(Ne(Fe), ae, oe);
            } catch {
            }
          }
        }
      return "";
    }
    var we = Object.prototype.hasOwnProperty, je = {}, Le = D.ReactDebugCurrentFrame;
    function _e(L) {
      if (L) {
        var ae = L._owner, oe = ce(L.type, L._source, ae ? ae.type : null);
        Le.setExtraStackFrame(oe);
      } else
        Le.setExtraStackFrame(null);
    }
    function Ke(L, ae, oe, he, Fe) {
      {
        var Ne = Function.call.bind(we);
        for (var xe in L)
          if (Ne(L, xe)) {
            var Ee = void 0;
            try {
              if (typeof L[xe] != "function") {
                var ft = Error((he || "React class") + ": " + oe + " type `" + xe + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof L[xe] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ft.name = "Invariant Violation", ft;
              }
              Ee = L[xe](ae, xe, he, oe, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Ze) {
              Ee = Ze;
            }
            Ee && !(Ee instanceof Error) && (_e(Fe), b("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", he || "React class", oe, xe, typeof Ee), _e(null)), Ee instanceof Error && !(Ee.message in je) && (je[Ee.message] = !0, _e(Fe), b("Failed %s type: %s", oe, Ee.message), _e(null));
          }
      }
    }
    var ot = Array.isArray;
    function Be(L) {
      return ot(L);
    }
    function tt(L) {
      {
        var ae = typeof Symbol == "function" && Symbol.toStringTag, oe = ae && L[Symbol.toStringTag] || L.constructor.name || "Object";
        return oe;
      }
    }
    function lt(L) {
      try {
        return Oe(L), !1;
      } catch {
        return !0;
      }
    }
    function Oe(L) {
      return "" + L;
    }
    function Pe(L) {
      if (lt(L))
        return b("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", tt(L)), Oe(L);
    }
    var rt = D.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, nt, bt, Qe;
    Qe = {};
    function Zt(L) {
      if (we.call(L, "ref")) {
        var ae = Object.getOwnPropertyDescriptor(L, "ref").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return L.ref !== void 0;
    }
    function Bt(L) {
      if (we.call(L, "key")) {
        var ae = Object.getOwnPropertyDescriptor(L, "key").get;
        if (ae && ae.isReactWarning)
          return !1;
      }
      return L.key !== void 0;
    }
    function Ft(L, ae) {
      if (typeof L.ref == "string" && rt.current && ae && rt.current.stateNode !== ae) {
        var oe = z(rt.current.type);
        Qe[oe] || (b('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(rt.current.type), L.ref), Qe[oe] = !0);
      }
    }
    function Kt(L, ae) {
      {
        var oe = function() {
          nt || (nt = !0, b("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        oe.isReactWarning = !0, Object.defineProperty(L, "key", {
          get: oe,
          configurable: !0
        });
      }
    }
    function kr(L, ae) {
      {
        var oe = function() {
          bt || (bt = !0, b("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", ae));
        };
        oe.isReactWarning = !0, Object.defineProperty(L, "ref", {
          get: oe,
          configurable: !0
        });
      }
    }
    var Yt = function(L, ae, oe, he, Fe, Ne, xe) {
      var Ee = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: L,
        key: ae,
        ref: oe,
        props: xe,
        // Record the component responsible for creating this element.
        _owner: Ne
      };
      return Ee._store = {}, Object.defineProperty(Ee._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(Ee, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: he
      }), Object.defineProperty(Ee, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Fe
      }), Object.freeze && (Object.freeze(Ee.props), Object.freeze(Ee)), Ee;
    };
    function jr(L, ae, oe, he, Fe) {
      {
        var Ne, xe = {}, Ee = null, ft = null;
        oe !== void 0 && (Pe(oe), Ee = "" + oe), Bt(ae) && (Pe(ae.key), Ee = "" + ae.key), Zt(ae) && (ft = ae.ref, Ft(ae, Fe));
        for (Ne in ae)
          we.call(ae, Ne) && !Je.hasOwnProperty(Ne) && (xe[Ne] = ae[Ne]);
        if (L && L.defaultProps) {
          var Ze = L.defaultProps;
          for (Ne in Ze)
            xe[Ne] === void 0 && (xe[Ne] = Ze[Ne]);
        }
        if (Ee || ft) {
          var Ye = typeof L == "function" ? L.displayName || L.name || "Unknown" : L;
          Ee && Kt(xe, Ye), ft && kr(xe, Ye);
        }
        return Yt(L, Ee, ft, Fe, he, rt.current, xe);
      }
    }
    var kt = D.ReactCurrentOwner, vr = D.ReactDebugCurrentFrame;
    function $t(L) {
      if (L) {
        var ae = L._owner, oe = ce(L.type, L._source, ae ? ae.type : null);
        vr.setExtraStackFrame(oe);
      } else
        vr.setExtraStackFrame(null);
    }
    var Rr;
    Rr = !1;
    function Xt(L) {
      return typeof L == "object" && L !== null && L.$$typeof === e;
    }
    function Jr() {
      {
        if (kt.current) {
          var L = z(kt.current.type);
          if (L)
            return `

Check the render method of \`` + L + "`.";
        }
        return "";
      }
    }
    function Ir(L) {
      return "";
    }
    var Qr = {};
    function Nr(L) {
      {
        var ae = Jr();
        if (!ae) {
          var oe = typeof L == "string" ? L : L.displayName || L.name;
          oe && (ae = `

Check the top-level render call using <` + oe + ">.");
        }
        return ae;
      }
    }
    function en(L, ae) {
      {
        if (!L._store || L._store.validated || L.key != null)
          return;
        L._store.validated = !0;
        var oe = Nr(ae);
        if (Qr[oe])
          return;
        Qr[oe] = !0;
        var he = "";
        L && L._owner && L._owner !== kt.current && (he = " It was passed a child from " + z(L._owner.type) + "."), $t(L), b('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', oe, he), $t(null);
      }
    }
    function jn(L, ae) {
      {
        if (typeof L != "object")
          return;
        if (Be(L))
          for (var oe = 0; oe < L.length; oe++) {
            var he = L[oe];
            Xt(he) && en(he, ae);
          }
        else if (Xt(L))
          L._store && (L._store.validated = !0);
        else if (L) {
          var Fe = f(L);
          if (typeof Fe == "function" && Fe !== L.entries)
            for (var Ne = Fe.call(L), xe; !(xe = Ne.next()).done; )
              Xt(xe.value) && en(xe.value, ae);
        }
      }
    }
    function gr(L) {
      {
        var ae = L.type;
        if (ae == null || typeof ae == "string")
          return;
        var oe;
        if (typeof ae == "function")
          oe = ae.propTypes;
        else if (typeof ae == "object" && (ae.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        ae.$$typeof === d))
          oe = ae.propTypes;
        else
          return;
        if (oe) {
          var he = z(ae);
          Ke(oe, L.props, "prop", he, L);
        } else if (ae.PropTypes !== void 0 && !Rr) {
          Rr = !0;
          var Fe = z(ae);
          b("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Fe || "Unknown");
        }
        typeof ae.getDefaultProps == "function" && !ae.getDefaultProps.isReactClassApproved && b("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ge(L) {
      {
        for (var ae = Object.keys(L.props), oe = 0; oe < ae.length; oe++) {
          var he = ae[oe];
          if (he !== "children" && he !== "key") {
            $t(L), b("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", he), $t(null);
            break;
          }
        }
        L.ref !== null && ($t(L), b("Invalid attribute `ref` supplied to `React.Fragment`."), $t(null));
      }
    }
    var uo = {};
    function lo(L, ae, oe, he, Fe, Ne) {
      {
        var xe = W(L);
        if (!xe) {
          var Ee = "";
          (L === void 0 || typeof L == "object" && L !== null && Object.keys(L).length === 0) && (Ee += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ft = Ir();
          ft ? Ee += ft : Ee += Jr();
          var Ze;
          L === null ? Ze = "null" : Be(L) ? Ze = "array" : L !== void 0 && L.$$typeof === e ? (Ze = "<" + (z(L.type) || "Unknown") + " />", Ee = " Did you accidentally export a JSX literal instead of a component?") : Ze = typeof L, b("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Ze, Ee);
        }
        var Ye = jr(L, ae, oe, Fe, Ne);
        if (Ye == null)
          return Ye;
        if (xe) {
          var Lt = ae.children;
          if (Lt !== void 0)
            if (he)
              if (Be(Lt)) {
                for (var _r = 0; _r < Lt.length; _r++)
                  jn(Lt[_r], L);
                Object.freeze && Object.freeze(Lt);
              } else
                b("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              jn(Lt, L);
        }
        if (we.call(ae, "key")) {
          var mr = z(L), gt = Object.keys(ae).filter(function(Rp) {
            return Rp !== "key";
          }), oi = gt.length > 0 ? "{key: someKey, " + gt.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!uo[mr + oi]) {
            var jp = gt.length > 0 ? "{" + gt.join(": ..., ") + ": ...}" : "{}";
            b(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, oi, mr, jp, mr), uo[mr + oi] = !0;
          }
        }
        return L === n ? ge(Ye) : gr(Ye), Ye;
      }
    }
    function Fp(L, ae, oe) {
      return lo(L, ae, oe, !0);
    }
    function Tp(L, ae, oe) {
      return lo(L, ae, oe, !1);
    }
    var Mp = Tp, kp = Fp;
    rn.Fragment = n, rn.jsx = Mp, rn.jsxs = kp;
  }()), rn;
}
process.env.NODE_ENV === "production" ? _i.exports = uh() : _i.exports = lh();
var y = _i.exports;
function ch(t) {
  const { className: e, ...r } = t, n = `arkynAlertTitle ${e}`;
  return /* @__PURE__ */ y.jsx("div", { className: n.trim(), ...r });
}
const df = st({});
function fh() {
  return Se(df);
}
function VO(t) {
  const { schema: e, children: r, className: n, ...a } = t, o = !((l) => {
    let c = !1;
    const d = (p) => {
      Array.isArray(p) ? p.forEach(d) : p && typeof p == "object" && "type" in p && (p.type === ch ? c = !0 : p.props && p.props.children && d(p.props.children));
    };
    return d(l), c;
  })(r) ? "nonExistsAlertTitle" : "existsAlertTitle", u = `arkynAlertContainer ${e} ${o} ${n}`;
  return /* @__PURE__ */ y.jsx(df.Provider, { value: t, children: /* @__PURE__ */ y.jsx("div", { className: u.trim(), ...a, children: r }) });
}
function qO(t) {
  const { className: e, ...r } = t, n = `arkynAlertContent ${e}`;
  return /* @__PURE__ */ y.jsx("div", { className: n.trim(), ...r });
}
function GO(t) {
  const { className: e, ...r } = t, n = `arkynAlertDescription ${e}`;
  return /* @__PURE__ */ y.jsx("div", { className: n.trim(), ...r });
}
function ZO(t) {
  const { className: e, ...r } = t, { schema: n } = fh(), a = `arkynAlertIcon ${n} ${e}`;
  switch (n) {
    case "success":
      return /* @__PURE__ */ y.jsx(nf, { className: a, ...r });
    case "danger":
      return /* @__PURE__ */ y.jsx(rf, { className: a, ...r });
    case "warning":
      return /* @__PURE__ */ y.jsx(Wp, { className: a, ...r });
    case "info":
      return /* @__PURE__ */ y.jsx(tf, { className: a, ...r });
  }
}
function ha(t, e) {
  return e ? /* @__PURE__ */ y.jsx(e, { size: t, strokeWidth: 2.5 }) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function ho(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ct(t) {
  var e, r;
  return ho(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(ho(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var pf = Symbol.for("immer-nothing"), vo = Symbol.for("immer-draftable"), Ot = Symbol.for("immer-state"), dh = process.env.NODE_ENV !== "production" ? [
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
function yt(t, ...e) {
  if (process.env.NODE_ENV !== "production") {
    const r = dh[t], n = typeof r == "function" ? r.apply(null, e) : r;
    throw new Error(`[Immer] ${n}`);
  }
  throw new Error(
    `[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`
  );
}
var qr = Object.getPrototypeOf;
function Pr(t) {
  return !!t && !!t[Ot];
}
function Fr(t) {
  var e;
  return t ? hf(t) || Array.isArray(t) || !!t[vo] || !!((e = t.constructor) != null && e[vo]) || Na(t) || _a(t) : !1;
}
var ph = Object.prototype.constructor.toString();
function hf(t) {
  if (!t || typeof t != "object")
    return !1;
  const e = qr(t);
  if (e === null)
    return !0;
  const r = Object.hasOwnProperty.call(e, "constructor") && e.constructor;
  return r === Object ? !0 : typeof r == "function" && Function.toString.call(r) === ph;
}
function va(t, e) {
  Ia(t) === 0 ? Reflect.ownKeys(t).forEach((r) => {
    e(r, t[r], t);
  }) : t.forEach((r, n) => e(n, r, t));
}
function Ia(t) {
  const e = t[Ot];
  return e ? e.type_ : Array.isArray(t) ? 1 : Na(t) ? 2 : _a(t) ? 3 : 0;
}
function $i(t, e) {
  return Ia(t) === 2 ? t.has(e) : Object.prototype.hasOwnProperty.call(t, e);
}
function vf(t, e, r) {
  const n = Ia(t);
  n === 2 ? t.set(e, r) : n === 3 ? t.add(r) : t[e] = r;
}
function hh(t, e) {
  return t === e ? t !== 0 || 1 / t === 1 / e : t !== t && e !== e;
}
function Na(t) {
  return t instanceof Map;
}
function _a(t) {
  return t instanceof Set;
}
function br(t) {
  return t.copy_ || t.base_;
}
function zi(t, e) {
  if (Na(t))
    return new Map(t);
  if (_a(t))
    return new Set(t);
  if (Array.isArray(t))
    return Array.prototype.slice.call(t);
  const r = hf(t);
  if (e === !0 || e === "class_only" && !r) {
    const n = Object.getOwnPropertyDescriptors(t);
    delete n[Ot];
    let a = Reflect.ownKeys(n);
    for (let i = 0; i < a.length; i++) {
      const s = a[i], o = n[s];
      o.writable === !1 && (o.writable = !0, o.configurable = !0), (o.get || o.set) && (n[s] = {
        configurable: !0,
        writable: !0,
        // could live with !!desc.set as well here...
        enumerable: o.enumerable,
        value: t[s]
      });
    }
    return Object.create(qr(t), n);
  } else {
    const n = qr(t);
    if (n !== null && r)
      return { ...t };
    const a = Object.create(n);
    return Object.assign(a, t);
  }
}
function Cs(t, e = !1) {
  return $a(t) || Pr(t) || !Fr(t) || (Ia(t) > 1 && (t.set = t.add = t.clear = t.delete = vh), Object.freeze(t), e && Object.entries(t).forEach(([r, n]) => Cs(n, !0))), t;
}
function vh() {
  yt(2);
}
function $a(t) {
  return Object.isFrozen(t);
}
var gh = {};
function Tr(t) {
  const e = gh[t];
  return e || yt(0, t), e;
}
var Cn;
function gf() {
  return Cn;
}
function mh(t, e) {
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
function go(t, e) {
  e && (Tr("Patches"), t.patches_ = [], t.inversePatches_ = [], t.patchListener_ = e);
}
function Wi(t) {
  Hi(t), t.drafts_.forEach(yh), t.drafts_ = null;
}
function Hi(t) {
  t === Cn && (Cn = t.parent_);
}
function mo(t) {
  return Cn = mh(Cn, t);
}
function yh(t) {
  const e = t[Ot];
  e.type_ === 0 || e.type_ === 1 ? e.revoke_() : e.revoked_ = !0;
}
function yo(t, e) {
  e.unfinalizedDrafts_ = e.drafts_.length;
  const r = e.drafts_[0];
  return t !== void 0 && t !== r ? (r[Ot].modified_ && (Wi(e), yt(4)), Fr(t) && (t = ga(e, t), e.parent_ || ma(e, t)), e.patches_ && Tr("Patches").generateReplacementPatches_(
    r[Ot].base_,
    t,
    e.patches_,
    e.inversePatches_
  )) : t = ga(e, r, []), Wi(e), e.patches_ && e.patchListener_(e.patches_, e.inversePatches_), t !== pf ? t : void 0;
}
function ga(t, e, r) {
  if ($a(e))
    return e;
  const n = e[Ot];
  if (!n)
    return va(
      e,
      (a, i) => Co(t, n, e, a, i, r)
    ), e;
  if (n.scope_ !== t)
    return e;
  if (!n.modified_)
    return ma(t, n.base_, !0), n.base_;
  if (!n.finalized_) {
    n.finalized_ = !0, n.scope_.unfinalizedDrafts_--;
    const a = n.copy_;
    let i = a, s = !1;
    n.type_ === 3 && (i = new Set(a), a.clear(), s = !0), va(
      i,
      (o, u) => Co(t, n, a, o, u, r, s)
    ), ma(t, a, !1), r && t.patches_ && Tr("Patches").generatePatches_(
      n,
      r,
      t.patches_,
      t.inversePatches_
    );
  }
  return n.copy_;
}
function Co(t, e, r, n, a, i, s) {
  if (process.env.NODE_ENV !== "production" && a === r && yt(5), Pr(a)) {
    const o = i && e && e.type_ !== 3 && // Set objects are atomic since they have no keys.
    !$i(e.assigned_, n) ? i.concat(n) : void 0, u = ga(t, a, o);
    if (vf(r, n, u), Pr(u))
      t.canAutoFreeze_ = !1;
    else
      return;
  } else s && r.add(a);
  if (Fr(a) && !$a(a)) {
    if (!t.immer_.autoFreeze_ && t.unfinalizedDrafts_ < 1)
      return;
    ga(t, a), (!e || !e.scope_.parent_) && typeof n != "symbol" && Object.prototype.propertyIsEnumerable.call(r, n) && ma(t, a);
  }
}
function ma(t, e, r = !1) {
  !t.parent_ && t.immer_.autoFreeze_ && t.canAutoFreeze_ && Cs(e, r);
}
function Ch(t, e) {
  const r = Array.isArray(t), n = {
    type_: r ? 1 : 0,
    // Track which produce call this is associated with.
    scope_: e ? e.scope_ : gf(),
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
  let a = n, i = Ds;
  r && (a = [n], i = Dn);
  const { revoke: s, proxy: o } = Proxy.revocable(a, i);
  return n.draft_ = o, n.revoke_ = s, o;
}
var Ds = {
  get(t, e) {
    if (e === Ot)
      return t;
    const r = br(t);
    if (!$i(r, e))
      return Dh(t, r, e);
    const n = r[e];
    return t.finalized_ || !Fr(n) ? n : n === ui(t.base_, e) ? (li(t), t.copy_[e] = Vi(n, t)) : n;
  },
  has(t, e) {
    return e in br(t);
  },
  ownKeys(t) {
    return Reflect.ownKeys(br(t));
  },
  set(t, e, r) {
    const n = mf(br(t), e);
    if (n != null && n.set)
      return n.set.call(t.draft_, r), !0;
    if (!t.modified_) {
      const a = ui(br(t), e), i = a == null ? void 0 : a[Ot];
      if (i && i.base_ === r)
        return t.copy_[e] = r, t.assigned_[e] = !1, !0;
      if (hh(r, a) && (r !== void 0 || $i(t.base_, e)))
        return !0;
      li(t), Ui(t);
    }
    return t.copy_[e] === r && // special case: handle new props with value 'undefined'
    (r !== void 0 || e in t.copy_) || // special case: NaN
    Number.isNaN(r) && Number.isNaN(t.copy_[e]) || (t.copy_[e] = r, t.assigned_[e] = !0), !0;
  },
  deleteProperty(t, e) {
    return ui(t.base_, e) !== void 0 || e in t.base_ ? (t.assigned_[e] = !1, li(t), Ui(t)) : delete t.assigned_[e], t.copy_ && delete t.copy_[e], !0;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(t, e) {
    const r = br(t), n = Reflect.getOwnPropertyDescriptor(r, e);
    return n && {
      writable: !0,
      configurable: t.type_ !== 1 || e !== "length",
      enumerable: n.enumerable,
      value: r[e]
    };
  },
  defineProperty() {
    yt(11);
  },
  getPrototypeOf(t) {
    return qr(t.base_);
  },
  setPrototypeOf() {
    yt(12);
  }
}, Dn = {};
va(Ds, (t, e) => {
  Dn[t] = function() {
    return arguments[0] = arguments[0][0], e.apply(this, arguments);
  };
});
Dn.deleteProperty = function(t, e) {
  return process.env.NODE_ENV !== "production" && isNaN(parseInt(e)) && yt(13), Dn.set.call(this, t, e, void 0);
};
Dn.set = function(t, e, r) {
  return process.env.NODE_ENV !== "production" && e !== "length" && isNaN(parseInt(e)) && yt(14), Ds.set.call(this, t[0], e, r, t[0]);
};
function ui(t, e) {
  const r = t[Ot];
  return (r ? br(r) : t)[e];
}
function Dh(t, e, r) {
  var a;
  const n = mf(e, r);
  return n ? "value" in n ? n.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    (a = n.get) == null ? void 0 : a.call(t.draft_)
  ) : void 0;
}
function mf(t, e) {
  if (!(e in t))
    return;
  let r = qr(t);
  for (; r; ) {
    const n = Object.getOwnPropertyDescriptor(r, e);
    if (n)
      return n;
    r = qr(r);
  }
}
function Ui(t) {
  t.modified_ || (t.modified_ = !0, t.parent_ && Ui(t.parent_));
}
function li(t) {
  t.copy_ || (t.copy_ = zi(
    t.base_,
    t.scope_.immer_.useStrictShallowCopy_
  ));
}
var bh = class {
  constructor(t) {
    this.autoFreeze_ = !0, this.useStrictShallowCopy_ = !1, this.produce = (e, r, n) => {
      if (typeof e == "function" && typeof r != "function") {
        const i = r;
        r = e;
        const s = this;
        return function(u = i, ...l) {
          return s.produce(u, (c) => r.call(this, c, ...l));
        };
      }
      typeof r != "function" && yt(6), n !== void 0 && typeof n != "function" && yt(7);
      let a;
      if (Fr(e)) {
        const i = mo(this), s = Vi(e, void 0);
        let o = !0;
        try {
          a = r(s), o = !1;
        } finally {
          o ? Wi(i) : Hi(i);
        }
        return go(i, n), yo(a, i);
      } else if (!e || typeof e != "object") {
        if (a = r(e), a === void 0 && (a = e), a === pf && (a = void 0), this.autoFreeze_ && Cs(a, !0), n) {
          const i = [], s = [];
          Tr("Patches").generateReplacementPatches_(e, a, i, s), n(i, s);
        }
        return a;
      } else
        yt(1, e);
    }, this.produceWithPatches = (e, r) => {
      if (typeof e == "function")
        return (s, ...o) => this.produceWithPatches(s, (u) => e(u, ...o));
      let n, a;
      return [this.produce(e, r, (s, o) => {
        n = s, a = o;
      }), n, a];
    }, typeof (t == null ? void 0 : t.autoFreeze) == "boolean" && this.setAutoFreeze(t.autoFreeze), typeof (t == null ? void 0 : t.useStrictShallowCopy) == "boolean" && this.setUseStrictShallowCopy(t.useStrictShallowCopy);
  }
  createDraft(t) {
    Fr(t) || yt(8), Pr(t) && (t = Eh(t));
    const e = mo(this), r = Vi(t, void 0);
    return r[Ot].isManual_ = !0, Hi(e), r;
  }
  finishDraft(t, e) {
    const r = t && t[Ot];
    (!r || !r.isManual_) && yt(9);
    const { scope_: n } = r;
    return go(n, e), yo(void 0, n);
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
    let r;
    for (r = e.length - 1; r >= 0; r--) {
      const a = e[r];
      if (a.path.length === 0 && a.op === "replace") {
        t = a.value;
        break;
      }
    }
    r > -1 && (e = e.slice(r + 1));
    const n = Tr("Patches").applyPatches_;
    return Pr(t) ? n(t, e) : this.produce(
      t,
      (a) => n(a, e)
    );
  }
};
function Vi(t, e) {
  const r = Na(t) ? Tr("MapSet").proxyMap_(t, e) : _a(t) ? Tr("MapSet").proxySet_(t, e) : Ch(t, e);
  return (e ? e.scope_ : gf()).drafts_.push(r), r;
}
function Eh(t) {
  return Pr(t) || yt(10, t), yf(t);
}
function yf(t) {
  if (!Fr(t) || $a(t))
    return t;
  const e = t[Ot];
  let r;
  if (e) {
    if (!e.modified_)
      return e.base_;
    e.finalized_ = !0, r = zi(t, e.scope_.immer_.useStrictShallowCopy_);
  } else
    r = zi(t, !0);
  return va(r, (n, a) => {
    vf(r, n, yf(a));
  }), e && (e.finalized_ = !1), r;
}
var xt = new bh(), bs = xt.produce;
xt.produceWithPatches.bind(
  xt
);
xt.setAutoFreeze.bind(xt);
xt.setUseStrictShallowCopy.bind(xt);
xt.applyPatches.bind(xt);
var Do = xt.createDraft.bind(xt), bo = xt.finishDraft.bind(xt), wh = {
  transform(t, e) {
    var {
      current: r,
      affinity: n
    } = t;
    if (r != null) {
      var a = S.transform(r, e, {
        affinity: n
      });
      t.current = a, a == null && t.unref();
    }
  }
}, Oh = {
  transform(t, e) {
    var {
      current: r,
      affinity: n
    } = t;
    if (r != null) {
      var a = ye.transform(r, e, {
        affinity: n
      });
      t.current = a, a == null && t.unref();
    }
  }
}, xh = {
  transform(t, e) {
    var {
      current: r,
      affinity: n
    } = t;
    if (r != null) {
      var a = q.transform(r, e, {
        affinity: n
      });
      t.current = a, a == null && t.unref();
    }
  }
}, ya = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), fn = /* @__PURE__ */ new WeakMap(), Cf = /* @__PURE__ */ new WeakMap(), Eo = /* @__PURE__ */ new WeakMap(), wo = /* @__PURE__ */ new WeakMap(), Oo = /* @__PURE__ */ new WeakMap(), S = {
  ancestors(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, n = S.levels(t, e);
    return r ? n = n.slice(1) : n = n.slice(0, -1), n;
  },
  common(t, e) {
    for (var r = [], n = 0; n < t.length && n < e.length; n++) {
      var a = t[n], i = e[n];
      if (a !== i)
        break;
      r.push(a);
    }
    return r;
  },
  compare(t, e) {
    for (var r = Math.min(t.length, e.length), n = 0; n < r; n++) {
      if (t[n] < e[n]) return -1;
      if (t[n] > e[n]) return 1;
    }
    return 0;
  },
  endsAfter(t, e) {
    var r = t.length - 1, n = t.slice(0, r), a = e.slice(0, r), i = t[r], s = e[r];
    return S.equals(n, a) && i > s;
  },
  endsAt(t, e) {
    var r = t.length, n = t.slice(0, r), a = e.slice(0, r);
    return S.equals(n, a);
  },
  endsBefore(t, e) {
    var r = t.length - 1, n = t.slice(0, r), a = e.slice(0, r), i = t[r], s = e[r];
    return S.equals(n, a) && i < s;
  },
  equals(t, e) {
    return t.length === e.length && t.every((r, n) => r === e[n]);
  },
  hasPrevious(t) {
    return t[t.length - 1] > 0;
  },
  isAfter(t, e) {
    return S.compare(t, e) === 1;
  },
  isAncestor(t, e) {
    return t.length < e.length && S.compare(t, e) === 0;
  },
  isBefore(t, e) {
    return S.compare(t, e) === -1;
  },
  isChild(t, e) {
    return t.length === e.length + 1 && S.compare(t, e) === 0;
  },
  isCommon(t, e) {
    return t.length <= e.length && S.compare(t, e) === 0;
  },
  isDescendant(t, e) {
    return t.length > e.length && S.compare(t, e) === 0;
  },
  isParent(t, e) {
    return t.length + 1 === e.length && S.compare(t, e) === 0;
  },
  isPath(t) {
    return Array.isArray(t) && (t.length === 0 || typeof t[0] == "number");
  },
  isSibling(t, e) {
    if (t.length !== e.length)
      return !1;
    var r = t.slice(0, -1), n = e.slice(0, -1), a = t[t.length - 1], i = e[e.length - 1];
    return a !== i && S.equals(r, n);
  },
  levels(t) {
    for (var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, n = [], a = 0; a <= t.length; a++)
      n.push(t.slice(0, a));
    return r && n.reverse(), n;
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
    if (!S.isAncestor(e, t) && !S.equals(t, e))
      throw new Error("Cannot get the relative path of [".concat(t, "] inside ancestor [").concat(e, "], because it is not above or equal to the path."));
    return t.slice(e.length);
  },
  transform(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    if (!t) return null;
    var n = [...t], {
      affinity: a = "forward"
    } = r;
    if (t.length === 0)
      return n;
    switch (e.type) {
      case "insert_node": {
        var {
          path: i
        } = e;
        (S.equals(i, n) || S.endsBefore(i, n) || S.isAncestor(i, n)) && (n[i.length - 1] += 1);
        break;
      }
      case "remove_node": {
        var {
          path: s
        } = e;
        if (S.equals(s, n) || S.isAncestor(s, n))
          return null;
        S.endsBefore(s, n) && (n[s.length - 1] -= 1);
        break;
      }
      case "merge_node": {
        var {
          path: o,
          position: u
        } = e;
        S.equals(o, n) || S.endsBefore(o, n) ? n[o.length - 1] -= 1 : S.isAncestor(o, n) && (n[o.length - 1] -= 1, n[o.length] += u);
        break;
      }
      case "split_node": {
        var {
          path: l,
          position: c
        } = e;
        if (S.equals(l, n)) {
          if (a === "forward")
            n[n.length - 1] += 1;
          else if (a !== "backward") return null;
        } else S.endsBefore(l, n) ? n[l.length - 1] += 1 : S.isAncestor(l, n) && t[l.length] >= c && (n[l.length - 1] += 1, n[l.length] -= c);
        break;
      }
      case "move_node": {
        var {
          path: d,
          newPath: p
        } = e;
        if (S.equals(d, p))
          return n;
        if (S.isAncestor(d, n) || S.equals(d, n)) {
          var m = p.slice();
          return S.endsBefore(d, p) && d.length < p.length && (m[d.length - 1] -= 1), m.concat(n.slice(d.length));
        } else S.isSibling(d, p) && (S.isAncestor(p, n) || S.equals(p, n)) ? S.endsBefore(d, n) ? n[d.length - 1] -= 1 : n[d.length - 1] += 1 : S.endsBefore(p, n) || S.equals(p, n) || S.isAncestor(p, n) ? (S.endsBefore(d, n) && (n[d.length - 1] -= 1), n[p.length - 1] += 1) : S.endsBefore(d, n) && (S.equals(p, n) && (n[p.length - 1] += 1), n[d.length - 1] -= 1);
        break;
      }
    }
    return n;
  }
};
function bn(t) {
  "@babel/helpers - typeof";
  return bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, bn(t);
}
function Bh(t, e) {
  if (bn(t) !== "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (bn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function Lh(t) {
  var e = Bh(t, "string");
  return bn(e) === "symbol" ? e : String(e);
}
function ht(t, e, r) {
  return e = Lh(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function xo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function nn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? xo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : xo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Ah = (t, e, r) => {
  switch (r.type) {
    case "insert_node": {
      var {
        path: n,
        node: a
      } = r, i = se.parent(t, n), s = n[n.length - 1];
      if (s > i.children.length)
        throw new Error('Cannot apply an "insert_node" operation at path ['.concat(n, "] because the destination is past the end of the node."));
      if (i.children.splice(s, 0, a), e)
        for (var [o, u] of q.points(e))
          e[u] = ye.transform(o, r);
      break;
    }
    case "insert_text": {
      var {
        path: l,
        offset: c,
        text: d
      } = r;
      if (d.length === 0) break;
      var p = se.leaf(t, l), m = p.text.slice(0, c), h = p.text.slice(c);
      if (p.text = m + d + h, e)
        for (var [v, f] of q.points(e))
          e[f] = ye.transform(v, r);
      break;
    }
    case "merge_node": {
      var {
        path: D
      } = r, b = se.get(t, D), B = S.previous(D), E = se.get(t, B), C = se.parent(t, D), O = D[D.length - 1];
      if (le.isText(b) && le.isText(E))
        E.text += b.text;
      else if (!le.isText(b) && !le.isText(E))
        E.children.push(...b.children);
      else
        throw new Error('Cannot apply a "merge_node" operation at path ['.concat(D, "] to nodes of different interfaces: ").concat(at.stringify(b), " ").concat(at.stringify(E)));
      if (C.children.splice(O, 1), e)
        for (var [A, H] of q.points(e))
          e[H] = ye.transform(A, r);
      break;
    }
    case "move_node": {
      var {
        path: P,
        newPath: W
      } = r;
      if (S.isAncestor(P, W))
        throw new Error("Cannot move a path [".concat(P, "] to new path [").concat(W, "] because the destination is inside itself."));
      var R = se.get(t, P), M = se.parent(t, P), z = P[P.length - 1];
      M.children.splice(z, 1);
      var _ = S.transform(P, r), $ = se.get(t, S.parent(_)), Y = _[_.length - 1];
      if ($.children.splice(Y, 0, R), e)
        for (var [V, ee] of q.points(e))
          e[ee] = ye.transform(V, r);
      break;
    }
    case "remove_node": {
      var {
        path: ie
      } = r, j = ie[ie.length - 1], G = se.parent(t, ie);
      if (G.children.splice(j, 1), e)
        for (var [J, U] of q.points(e)) {
          var ne = ye.transform(J, r);
          if (e != null && ne != null)
            e[U] = ne;
          else {
            var F = void 0, w = void 0;
            for (var [N, T] of se.texts(t))
              if (S.compare(T, ie) === -1)
                F = [N, T];
              else {
                w = [N, T];
                break;
              }
            var I = !1;
            F && w && (S.equals(w[1], ie) ? I = !S.hasPrevious(w[1]) : I = S.common(F[1], ie).length < S.common(w[1], ie).length), F && !I ? (J.path = F[1], J.offset = F[0].text.length) : w ? (J.path = w[1], J.offset = 0) : e = null;
          }
        }
      break;
    }
    case "remove_text": {
      var {
        path: Z,
        offset: te,
        text: Q
      } = r;
      if (Q.length === 0) break;
      var pe = se.leaf(t, Z), fe = pe.text.slice(0, te), ce = pe.text.slice(te + Q.length);
      if (pe.text = fe + ce, e)
        for (var [we, je] of q.points(e))
          e[je] = ye.transform(we, r);
      break;
    }
    case "set_node": {
      var {
        path: Le,
        properties: _e,
        newProperties: Ke
      } = r;
      if (Le.length === 0)
        throw new Error("Cannot set properties on the root node!");
      var ot = se.get(t, Le);
      for (var Be in Ke) {
        if (Be === "children" || Be === "text")
          throw new Error('Cannot set the "'.concat(Be, '" property of nodes!'));
        var tt = Ke[Be];
        tt == null ? delete ot[Be] : ot[Be] = tt;
      }
      for (var lt in _e)
        Ke.hasOwnProperty(lt) || delete ot[lt];
      break;
    }
    case "set_selection": {
      var {
        newProperties: Oe
      } = r;
      if (Oe == null)
        e = Oe;
      else {
        if (e == null) {
          if (!q.isRange(Oe))
            throw new Error('Cannot apply an incomplete "set_selection" operation properties '.concat(at.stringify(Oe), " when there is no current selection."));
          e = nn({}, Oe);
        }
        for (var Pe in Oe) {
          var rt = Oe[Pe];
          if (rt == null) {
            if (Pe === "anchor" || Pe === "focus")
              throw new Error('Cannot remove the "'.concat(Pe, '" selection property'));
            delete e[Pe];
          } else
            e[Pe] = rt;
        }
      }
      break;
    }
    case "split_node": {
      var {
        path: Je,
        position: nt,
        properties: bt
      } = r;
      if (Je.length === 0)
        throw new Error('Cannot apply a "split_node" operation at path ['.concat(Je, "] because the root node cannot be split."));
      var Qe = se.get(t, Je), Zt = se.parent(t, Je), Bt = Je[Je.length - 1], Ft;
      if (le.isText(Qe)) {
        var Kt = Qe.text.slice(0, nt), kr = Qe.text.slice(nt);
        Qe.text = Kt, Ft = nn(nn({}, bt), {}, {
          text: kr
        });
      } else {
        var Yt = Qe.children.slice(0, nt), jr = Qe.children.slice(nt);
        Qe.children = Yt, Ft = nn(nn({}, bt), {}, {
          children: jr
        });
      }
      if (Zt.children.splice(Bt + 1, 0, Ft), e)
        for (var [kt, vr] of q.points(e))
          e[vr] = ye.transform(kt, r);
      break;
    }
  }
  return e;
}, Sh = {
  transform(t, e) {
    t.children = Do(t.children);
    var r = t.selection && Do(t.selection);
    try {
      r = Ah(t, r, e);
    } finally {
      t.children = bo(t.children), r ? t.selection = Pr(r) ? bo(r) : r : t.selection = null;
    }
  }
}, Ph = {
  insertNodes(t, e, r) {
    t.insertNodes(e, r);
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
  setNodes(t, e, r) {
    t.setNodes(e, r);
  },
  splitNodes(t, e) {
    t.splitNodes(e);
  },
  unsetNodes(t, e, r) {
    t.unsetNodes(e, r);
  },
  unwrapNodes(t, e) {
    t.unwrapNodes(e);
  },
  wrapNodes(t, e, r) {
    t.wrapNodes(e, r);
  }
}, Fh = {
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
  setPoint(t, e, r) {
    t.setPoint(e, r);
  },
  setSelection(t, e) {
    t.setSelection(e);
  }
}, Df = (t, e) => {
  for (var r in t) {
    var n = t[r], a = e[r];
    if (ct(n) && ct(a)) {
      if (!Df(n, a)) return !1;
    } else if (Array.isArray(n) && Array.isArray(a)) {
      if (n.length !== a.length) return !1;
      for (var i = 0; i < n.length; i++)
        if (n[i] !== a[i]) return !1;
    } else if (n !== a)
      return !1;
  }
  for (var s in e)
    if (t[s] === void 0 && e[s] !== void 0)
      return !1;
  return !0;
};
function Th(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Vt(t, e) {
  if (t == null) return {};
  var r = Th(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
var Mh = ["anchor", "focus"];
function Bo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function kh(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Bo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Bo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var q = {
  edges(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      reverse: r = !1
    } = e, {
      anchor: n,
      focus: a
    } = t;
    return q.isBackward(t) === r ? [n, a] : [a, n];
  },
  end(t) {
    var [, e] = q.edges(t);
    return e;
  },
  equals(t, e) {
    return ye.equals(t.anchor, e.anchor) && ye.equals(t.focus, e.focus);
  },
  includes(t, e) {
    if (q.isRange(e)) {
      if (q.includes(t, e.anchor) || q.includes(t, e.focus))
        return !0;
      var [r, n] = q.edges(t), [a, i] = q.edges(e);
      return ye.isBefore(r, a) && ye.isAfter(n, i);
    }
    var [s, o] = q.edges(t), u = !1, l = !1;
    return ye.isPoint(e) ? (u = ye.compare(e, s) >= 0, l = ye.compare(e, o) <= 0) : (u = S.compare(e, s.path) >= 0, l = S.compare(e, o.path) <= 0), u && l;
  },
  intersection(t, e) {
    var r = Vt(t, Mh), [n, a] = q.edges(t), [i, s] = q.edges(e), o = ye.isBefore(n, i) ? i : n, u = ye.isBefore(a, s) ? a : s;
    return ye.isBefore(u, o) ? null : kh({
      anchor: o,
      focus: u
    }, r);
  },
  isBackward(t) {
    var {
      anchor: e,
      focus: r
    } = t;
    return ye.isAfter(e, r);
  },
  isCollapsed(t) {
    var {
      anchor: e,
      focus: r
    } = t;
    return ye.equals(e, r);
  },
  isExpanded(t) {
    return !q.isCollapsed(t);
  },
  isForward(t) {
    return !q.isBackward(t);
  },
  isRange(t) {
    return ct(t) && ye.isPoint(t.anchor) && ye.isPoint(t.focus);
  },
  *points(t) {
    yield [t.anchor, "anchor"], yield [t.focus, "focus"];
  },
  start(t) {
    var [e] = q.edges(t);
    return e;
  },
  transform(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return bs(t, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "inward"
      } = r, i, s;
      if (a === "inward") {
        var o = q.isCollapsed(n);
        q.isForward(n) ? (i = "forward", s = o ? i : "backward") : (i = "backward", s = o ? i : "forward");
      } else a === "outward" ? q.isForward(n) ? (i = "backward", s = "forward") : (i = "forward", s = "backward") : (i = a, s = a);
      var u = ye.transform(n.anchor, e, {
        affinity: i
      }), l = ye.transform(n.focus, e, {
        affinity: s
      });
      if (!u || !l)
        return null;
      n.anchor = u, n.focus = l;
    });
  }
}, Lo = (t) => ct(t) && se.isNodeList(t.children) && !g.isEditor(t), ue = {
  isAncestor(t) {
    return ct(t) && se.isNodeList(t.children);
  },
  isElement: Lo,
  isElementList(t) {
    return Array.isArray(t) && t.every((e) => ue.isElement(e));
  },
  isElementProps(t) {
    return t.children !== void 0;
  },
  isElementType: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "type";
    return Lo(e) && e[n] === r;
  },
  matches(t, e) {
    for (var r in e)
      if (r !== "children" && t[r] !== e[r])
        return !1;
    return !0;
  }
}, jh = ["children"], Rh = ["text"], Ao = /* @__PURE__ */ new WeakMap(), se = {
  ancestor(t, e) {
    var r = se.get(t, e);
    if (le.isText(r))
      throw new Error("Cannot get the ancestor node at path [".concat(e, "] because it refers to a text node instead: ").concat(at.stringify(r)));
    return r;
  },
  ancestors(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of S.ancestors(e, r)) {
        var a = se.ancestor(t, n), i = [a, n];
        yield i;
      }
    }();
  },
  child(t, e) {
    if (le.isText(t))
      throw new Error("Cannot get the child of a text node: ".concat(at.stringify(t)));
    var r = t.children[e];
    if (r == null)
      throw new Error("Cannot get child at index `".concat(e, "` in node: ").concat(at.stringify(t)));
    return r;
  },
  children(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var {
        reverse: n = !1
      } = r, a = se.ancestor(t, e), {
        children: i
      } = a, s = n ? i.length - 1 : 0; n ? s >= 0 : s < i.length; ) {
        var o = se.child(a, s), u = e.concat(s);
        yield [o, u], s = n ? s - 1 : s + 1;
      }
    }();
  },
  common(t, e, r) {
    var n = S.common(e, r), a = se.get(t, n);
    return [a, n];
  },
  descendant(t, e) {
    var r = se.get(t, e);
    if (g.isEditor(r))
      throw new Error("Cannot get the descendant node at path [".concat(e, "] because it refers to the root editor node instead: ").concat(at.stringify(r)));
    return r;
  },
  descendants(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of se.nodes(t, e))
        n.length !== 0 && (yield [r, n]);
    }();
  },
  elements(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of se.nodes(t, e))
        ue.isElement(r) && (yield [r, n]);
    }();
  },
  extractProps(t) {
    if (ue.isAncestor(t)) {
      var e = Vt(t, jh);
      return e;
    } else {
      var e = Vt(t, Rh);
      return e;
    }
  },
  first(t, e) {
    for (var r = e.slice(), n = se.get(t, r); n && !(le.isText(n) || n.children.length === 0); )
      n = n.children[0], r.push(0);
    return [n, r];
  },
  fragment(t, e) {
    if (le.isText(t))
      throw new Error("Cannot get a fragment starting from a root text node: ".concat(at.stringify(t)));
    var r = bs({
      children: t.children
    }, (n) => {
      var [a, i] = q.edges(e), s = se.nodes(n, {
        reverse: !0,
        pass: (p) => {
          var [, m] = p;
          return !q.includes(e, m);
        }
      });
      for (var [, o] of s) {
        if (!q.includes(e, o)) {
          var u = se.parent(n, o), l = o[o.length - 1];
          u.children.splice(l, 1);
        }
        if (S.equals(o, i.path)) {
          var c = se.leaf(n, o);
          c.text = c.text.slice(0, i.offset);
        }
        if (S.equals(o, a.path)) {
          var d = se.leaf(n, o);
          d.text = d.text.slice(a.offset);
        }
      }
      g.isEditor(n) && (n.selection = null);
    });
    return r.children;
  },
  get(t, e) {
    for (var r = t, n = 0; n < e.length; n++) {
      var a = e[n];
      if (le.isText(r) || !r.children[a])
        throw new Error("Cannot find a descendant at path [".concat(e, "] in node: ").concat(at.stringify(t)));
      r = r.children[a];
    }
    return r;
  },
  has(t, e) {
    for (var r = t, n = 0; n < e.length; n++) {
      var a = e[n];
      if (le.isText(r) || !r.children[a])
        return !1;
      r = r.children[a];
    }
    return !0;
  },
  isNode(t) {
    return le.isText(t) || ue.isElement(t) || g.isEditor(t);
  },
  isNodeList(t) {
    if (!Array.isArray(t))
      return !1;
    var e = Ao.get(t);
    if (e !== void 0)
      return e;
    var r = t.every((n) => se.isNode(n));
    return Ao.set(t, r), r;
  },
  last(t, e) {
    for (var r = e.slice(), n = se.get(t, r); n && !(le.isText(n) || n.children.length === 0); ) {
      var a = n.children.length - 1;
      n = n.children[a], r.push(a);
    }
    return [n, r];
  },
  leaf(t, e) {
    var r = se.get(t, e);
    if (!le.isText(r))
      throw new Error("Cannot get the leaf node at path [".concat(e, "] because it refers to a non-leaf node: ").concat(at.stringify(r)));
    return r;
  },
  levels(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return function* () {
      for (var n of S.levels(e, r)) {
        var a = se.get(t, n);
        yield [a, n];
      }
    }();
  },
  matches(t, e) {
    return ue.isElement(t) && ue.isElementProps(e) && ue.matches(t, e) || le.isText(t) && le.isTextProps(e) && le.matches(t, e);
  },
  nodes(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var {
        pass: r,
        reverse: n = !1
      } = e, {
        from: a = [],
        to: i
      } = e, s = /* @__PURE__ */ new Set(), o = [], u = t; !(i && (n ? S.isBefore(o, i) : S.isAfter(o, i))); ) {
        if (s.has(u) || (yield [u, o]), !s.has(u) && !le.isText(u) && u.children.length !== 0 && (r == null || r([u, o]) === !1)) {
          s.add(u);
          var l = n ? u.children.length - 1 : 0;
          S.isAncestor(o, a) && (l = a[o.length]), o = o.concat(l), u = se.get(t, o);
          continue;
        }
        if (o.length === 0)
          break;
        if (!n) {
          var c = S.next(o);
          if (se.has(t, c)) {
            o = c, u = se.get(t, o);
            continue;
          }
        }
        if (n && o[o.length - 1] !== 0) {
          var d = S.previous(o);
          o = d, u = se.get(t, o);
          continue;
        }
        o = S.parent(o), u = se.get(t, o), s.add(u);
      }
    }();
  },
  parent(t, e) {
    var r = S.parent(e), n = se.get(t, r);
    if (le.isText(n))
      throw new Error("Cannot get the parent of path [".concat(e, "] because it does not exist in the root."));
    return n;
  },
  string(t) {
    return le.isText(t) ? t.text : t.children.map(se.string).join("");
  },
  texts(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    return function* () {
      for (var [r, n] of se.nodes(t, e))
        le.isText(r) && (yield [r, n]);
    }();
  }
};
function So(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? So(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : So(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var sr = {
  isNodeOperation(t) {
    return sr.isOperation(t) && t.type.endsWith("_node");
  },
  isOperation(t) {
    if (!ct(t))
      return !1;
    switch (t.type) {
      case "insert_node":
        return S.isPath(t.path) && se.isNode(t.node);
      case "insert_text":
        return typeof t.offset == "number" && typeof t.text == "string" && S.isPath(t.path);
      case "merge_node":
        return typeof t.position == "number" && S.isPath(t.path) && ct(t.properties);
      case "move_node":
        return S.isPath(t.path) && S.isPath(t.newPath);
      case "remove_node":
        return S.isPath(t.path) && se.isNode(t.node);
      case "remove_text":
        return typeof t.offset == "number" && typeof t.text == "string" && S.isPath(t.path);
      case "set_node":
        return S.isPath(t.path) && ct(t.properties) && ct(t.newProperties);
      case "set_selection":
        return t.properties === null && q.isRange(t.newProperties) || t.newProperties === null && q.isRange(t.properties) || ct(t.properties) && ct(t.newProperties);
      case "split_node":
        return S.isPath(t.path) && typeof t.position == "number" && ct(t.properties);
      default:
        return !1;
    }
  },
  isOperationList(t) {
    return Array.isArray(t) && t.every((e) => sr.isOperation(e));
  },
  isSelectionOperation(t) {
    return sr.isOperation(t) && t.type.endsWith("_selection");
  },
  isTextOperation(t) {
    return sr.isOperation(t) && t.type.endsWith("_text");
  },
  inverse(t) {
    switch (t.type) {
      case "insert_node":
        return $e($e({}, t), {}, {
          type: "remove_node"
        });
      case "insert_text":
        return $e($e({}, t), {}, {
          type: "remove_text"
        });
      case "merge_node":
        return $e($e({}, t), {}, {
          type: "split_node",
          path: S.previous(t.path)
        });
      case "move_node": {
        var {
          newPath: e,
          path: r
        } = t;
        if (S.equals(e, r))
          return t;
        if (S.isSibling(r, e))
          return $e($e({}, t), {}, {
            path: e,
            newPath: r
          });
        var n = S.transform(r, t), a = S.transform(S.next(r), t);
        return $e($e({}, t), {}, {
          path: n,
          newPath: a
        });
      }
      case "remove_node":
        return $e($e({}, t), {}, {
          type: "insert_node"
        });
      case "remove_text":
        return $e($e({}, t), {}, {
          type: "insert_text"
        });
      case "set_node": {
        var {
          properties: i,
          newProperties: s
        } = t;
        return $e($e({}, t), {}, {
          properties: s,
          newProperties: i
        });
      }
      case "set_selection": {
        var {
          properties: o,
          newProperties: u
        } = t;
        return o == null ? $e($e({}, t), {}, {
          properties: u,
          newProperties: null
        }) : u == null ? $e($e({}, t), {}, {
          properties: null,
          newProperties: o
        }) : $e($e({}, t), {}, {
          properties: u,
          newProperties: o
        });
      }
      case "split_node":
        return $e($e({}, t), {}, {
          type: "merge_node",
          path: S.next(t.path)
        });
    }
  }
}, Po = /* @__PURE__ */ new WeakMap(), Ih = (t) => {
  var e = Po.get(t);
  if (e !== void 0)
    return e;
  if (!ct(t))
    return !1;
  var r = typeof t.addMark == "function" && typeof t.apply == "function" && typeof t.deleteFragment == "function" && typeof t.insertBreak == "function" && typeof t.insertSoftBreak == "function" && typeof t.insertFragment == "function" && typeof t.insertNode == "function" && typeof t.insertText == "function" && typeof t.isElementReadOnly == "function" && typeof t.isInline == "function" && typeof t.isSelectable == "function" && typeof t.isVoid == "function" && typeof t.normalizeNode == "function" && typeof t.onChange == "function" && typeof t.removeMark == "function" && typeof t.getDirtyPaths == "function" && (t.marks === null || ct(t.marks)) && (t.selection === null || q.isRange(t.selection)) && se.isNodeList(t.children) && sr.isOperationList(t.operations);
  return Po.set(t, r), r;
}, g = {
  above(t, e) {
    return t.above(e);
  },
  addMark(t, e, r) {
    t.addMark(e, r);
  },
  after(t, e, r) {
    return t.after(e, r);
  },
  before(t, e, r) {
    return t.before(e, r);
  },
  deleteBackward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = e;
    t.deleteBackward(r);
  },
  deleteForward(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
      unit: r = "character"
    } = e;
    t.deleteForward(r);
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
  insertFragment(t, e, r) {
    t.insertFragment(e, r);
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
  isEdge(t, e, r) {
    return t.isEdge(e, r);
  },
  isEditor(t) {
    return Ih(t);
  },
  isElementReadOnly(t, e) {
    return t.isElementReadOnly(e);
  },
  isEmpty(t, e) {
    return t.isEmpty(e);
  },
  isEnd(t, e, r) {
    return t.isEnd(e, r);
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
  isStart(t, e, r) {
    return t.isStart(e, r);
  },
  isVoid(t, e) {
    return t.isVoid(e);
  },
  last(t, e) {
    return t.last(e);
  },
  leaf(t, e, r) {
    return t.leaf(e, r);
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
  node(t, e, r) {
    return t.node(e, r);
  },
  nodes(t, e) {
    return t.nodes(e);
  },
  normalize(t, e) {
    t.normalize(e);
  },
  parent(t, e, r) {
    return t.parent(e, r);
  },
  path(t, e, r) {
    return t.path(e, r);
  },
  pathRef(t, e, r) {
    return t.pathRef(e, r);
  },
  pathRefs(t) {
    return t.pathRefs();
  },
  point(t, e, r) {
    return t.point(e, r);
  },
  pointRef(t, e, r) {
    return t.pointRef(e, r);
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
  range(t, e, r) {
    return t.range(e, r);
  },
  rangeRef(t, e, r) {
    return t.rangeRef(e, r);
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
  string(t, e, r) {
    return t.string(e, r);
  },
  unhangRange(t, e, r) {
    return t.unhangRange(e, r);
  },
  void(t, e) {
    return t.void(e);
  },
  withoutNormalizing(t, e) {
    t.withoutNormalizing(e);
  },
  shouldMergeNodesRemovePrevNode: (t, e, r) => t.shouldMergeNodesRemovePrevNode(e, r)
}, Nh = {
  isSpan(t) {
    return Array.isArray(t) && t.length === 2 && t.every(S.isPath);
  }
};
function Fo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function To(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Fo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var ye = {
  compare(t, e) {
    var r = S.compare(t.path, e.path);
    return r === 0 ? t.offset < e.offset ? -1 : t.offset > e.offset ? 1 : 0 : r;
  },
  isAfter(t, e) {
    return ye.compare(t, e) === 1;
  },
  isBefore(t, e) {
    return ye.compare(t, e) === -1;
  },
  equals(t, e) {
    return t.offset === e.offset && S.equals(t.path, e.path);
  },
  isPoint(t) {
    return ct(t) && typeof t.offset == "number" && S.isPath(t.path);
  },
  transform(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return bs(t, (n) => {
      if (n === null)
        return null;
      var {
        affinity: a = "forward"
      } = r, {
        path: i,
        offset: s
      } = n;
      switch (e.type) {
        case "insert_node":
        case "move_node": {
          n.path = S.transform(i, e, r);
          break;
        }
        case "insert_text": {
          S.equals(e.path, i) && (e.offset < s || e.offset === s && a === "forward") && (n.offset += e.text.length);
          break;
        }
        case "merge_node": {
          S.equals(e.path, i) && (n.offset += e.position), n.path = S.transform(i, e, r);
          break;
        }
        case "remove_text": {
          S.equals(e.path, i) && e.offset <= s && (n.offset -= Math.min(s - e.offset, e.text.length));
          break;
        }
        case "remove_node": {
          if (S.equals(e.path, i) || S.isAncestor(e.path, i))
            return null;
          n.path = S.transform(i, e, r);
          break;
        }
        case "split_node": {
          if (S.equals(e.path, i)) {
            if (e.position === s && a == null)
              return null;
            (e.position < s || e.position === s && a === "forward") && (n.offset -= e.position, n.path = S.transform(i, e, To(To({}, r), {}, {
              affinity: "forward"
            })));
          } else
            n.path = S.transform(i, e, r);
          break;
        }
      }
    });
  }
}, Mo = void 0, at = {
  setScrubber(t) {
    Mo = t;
  },
  stringify(t) {
    return JSON.stringify(t, Mo);
  }
}, _h = ["text"], $h = ["anchor", "focus"];
function ko(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function zt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? ko(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : ko(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var le = {
  equals(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      loose: n = !1
    } = r;
    function a(i) {
      var s = Vt(i, _h);
      return s;
    }
    return Df(n ? a(t) : t, n ? a(e) : e);
  },
  isText(t) {
    return ct(t) && typeof t.text == "string";
  },
  isTextList(t) {
    return Array.isArray(t) && t.every((e) => le.isText(e));
  },
  isTextProps(t) {
    return t.text !== void 0;
  },
  matches(t, e) {
    for (var r in e)
      if (r !== "text" && (!t.hasOwnProperty(r) || t[r] !== e[r]))
        return !1;
    return !0;
  },
  decorations(t, e) {
    var r = [zt({}, t)];
    for (var n of e) {
      var a = Vt(n, $h), [i, s] = q.edges(n), o = [], u = 0, l = i.offset, c = s.offset;
      for (var d of r) {
        var {
          length: p
        } = d.text, m = u;
        if (u += p, l <= m && u <= c) {
          Object.assign(d, a), o.push(d);
          continue;
        }
        if (l !== c && (l === u || c === m) || l > u || c < m || c === m && m !== 0) {
          o.push(d);
          continue;
        }
        var h = d, v = void 0, f = void 0;
        if (c < u) {
          var D = c - m;
          f = zt(zt({}, h), {}, {
            text: h.text.slice(D)
          }), h = zt(zt({}, h), {}, {
            text: h.text.slice(0, D)
          });
        }
        if (l > m) {
          var b = l - m;
          v = zt(zt({}, h), {}, {
            text: h.text.slice(0, b)
          }), h = zt(zt({}, h), {}, {
            text: h.text.slice(b)
          });
        }
        Object.assign(h, a), v && o.push(v), o.push(h), f && o.push(f);
      }
      r = o;
    }
    return r;
  }
}, Es = (t) => t.selection ? t.selection : t.children.length > 0 ? g.end(t, []) : [0], Kr = (t, e) => {
  var [r] = g.node(t, e);
  return (n) => n === r;
}, ws = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = !r, a = r ? qh(e) : e, i = ve.None, s = ve.None, o = 0, u = null, l = null;
  for (var c of a) {
    var d = c.codePointAt(0);
    if (!d) break;
    var p = av(c, d);
    if ([i, s] = n ? [s, p] : [p, i], zr(i, ve.ZWJ) && zr(s, ve.ExtPict) && (n ? u = jo(e.substring(0, o)) : u = jo(e.substring(0, e.length - o)), !u) || zr(i, ve.RI) && zr(s, ve.RI) && (l !== null ? l = !l : n ? l = !0 : l = lv(e.substring(0, e.length - o)), !l) || i !== ve.None && s !== ve.None && sv(i, s))
      break;
    o += c.length;
  }
  return o || 1;
}, zh = /\s/, Wh = /[\u002B\u0021-\u0023\u0025-\u002A\u002C-\u002F\u003A\u003B\u003F\u0040\u005B-\u005D\u005F\u007B\u007D\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u0AF0\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166D\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E3B\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/, Hh = /['\u2018\u2019]/, Uh = function(e) {
  for (var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, n = 0, a = !1; e.length > 0; ) {
    var i = ws(e, r), [s, o] = Os(e, i, r);
    if (Vh(s, o, r))
      a = !0, n += i;
    else if (!a)
      n += i;
    else
      break;
    e = o;
  }
  return n;
}, Os = (t, e, r) => {
  if (r) {
    var n = t.length - e;
    return [t.slice(n, t.length), t.slice(0, n)];
  }
  return [t.slice(0, e), t.slice(e)];
}, Vh = function t(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
  if (zh.test(e))
    return !1;
  if (Hh.test(e)) {
    var a = ws(r, n), [i, s] = Os(r, a, n);
    if (t(i, s, n))
      return !0;
  }
  return !Wh.test(e);
}, qh = function* (e) {
  for (var r = e.length - 1, n = 0; n < e.length; n++) {
    var a = e.charAt(r - n);
    if (Zh(a.charCodeAt(0))) {
      var i = e.charAt(r - n - 1);
      if (Gh(i.charCodeAt(0))) {
        yield i + a, n++;
        continue;
      }
    }
    yield a;
  }
}, Gh = (t) => t >= 55296 && t <= 56319, Zh = (t) => t >= 56320 && t <= 57343, ve;
(function(t) {
  t[t.None = 0] = "None", t[t.Extend = 1] = "Extend", t[t.ZWJ = 2] = "ZWJ", t[t.RI = 4] = "RI", t[t.Prepend = 8] = "Prepend", t[t.SpacingMark = 16] = "SpacingMark", t[t.L = 32] = "L", t[t.V = 64] = "V", t[t.T = 128] = "T", t[t.LV = 256] = "LV", t[t.LVT = 512] = "LVT", t[t.ExtPict = 1024] = "ExtPict", t[t.Any = 2048] = "Any";
})(ve || (ve = {}));
var Kh = /^(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])$/, Yh = /^(?:[\u0600-\u0605\u06DD\u070F\u0890\u0891\u08E2\u0D4E]|\uD804[\uDCBD\uDCCD\uDDC2\uDDC3]|\uD806[\uDD3F\uDD41\uDE3A\uDE84-\uDE89]|\uD807\uDD46)$/, Xh = /^(?:[\u0903\u093B\u093E-\u0940\u0949-\u094C\u094E\u094F\u0982\u0983\u09BF\u09C0\u09C7\u09C8\u09CB\u09CC\u0A03\u0A3E-\u0A40\u0A83\u0ABE-\u0AC0\u0AC9\u0ACB\u0ACC\u0B02\u0B03\u0B40\u0B47\u0B48\u0B4B\u0B4C\u0BBF\u0BC1\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCC\u0C01-\u0C03\u0C41-\u0C44\u0C82\u0C83\u0CBE\u0CC0\u0CC1\u0CC3\u0CC4\u0CC7\u0CC8\u0CCA\u0CCB\u0D02\u0D03\u0D3F\u0D40\u0D46-\u0D48\u0D4A-\u0D4C\u0D82\u0D83\u0DD0\u0DD1\u0DD8-\u0DDE\u0DF2\u0DF3\u0E33\u0EB3\u0F3E\u0F3F\u0F7F\u1031\u103B\u103C\u1056\u1057\u1084\u1715\u1734\u17B6\u17BE-\u17C5\u17C7\u17C8\u1923-\u1926\u1929-\u192B\u1930\u1931\u1933-\u1938\u1A19\u1A1A\u1A55\u1A57\u1A6D-\u1A72\u1B04\u1B3B\u1B3D-\u1B41\u1B43\u1B44\u1B82\u1BA1\u1BA6\u1BA7\u1BAA\u1BE7\u1BEA-\u1BEC\u1BEE\u1BF2\u1BF3\u1C24-\u1C2B\u1C34\u1C35\u1CE1\u1CF7\uA823\uA824\uA827\uA880\uA881\uA8B4-\uA8C3\uA952\uA953\uA983\uA9B4\uA9B5\uA9BA\uA9BB\uA9BE-\uA9C0\uAA2F\uAA30\uAA33\uAA34\uAA4D\uAAEB\uAAEE\uAAEF\uAAF5\uABE3\uABE4\uABE6\uABE7\uABE9\uABEA\uABEC]|\uD804[\uDC00\uDC02\uDC82\uDCB0-\uDCB2\uDCB7\uDCB8\uDD2C\uDD45\uDD46\uDD82\uDDB3-\uDDB5\uDDBF\uDDC0\uDDCE\uDE2C-\uDE2E\uDE32\uDE33\uDE35\uDEE0-\uDEE2\uDF02\uDF03\uDF3F\uDF41-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF62\uDF63]|\uD805[\uDC35-\uDC37\uDC40\uDC41\uDC45\uDCB1\uDCB2\uDCB9\uDCBB\uDCBC\uDCBE\uDCC1\uDDB0\uDDB1\uDDB8-\uDDBB\uDDBE\uDE30-\uDE32\uDE3B\uDE3C\uDE3E\uDEAC\uDEAE\uDEAF\uDEB6\uDF26]|\uD806[\uDC2C-\uDC2E\uDC38\uDD31-\uDD35\uDD37\uDD38\uDD3D\uDD40\uDD42\uDDD1-\uDDD3\uDDDC-\uDDDF\uDDE4\uDE39\uDE57\uDE58\uDE97]|\uD807[\uDC2F\uDC3E\uDCA9\uDCB1\uDCB4\uDD8A-\uDD8E\uDD93\uDD94\uDD96\uDEF5\uDEF6]|\uD81B[\uDF51-\uDF87\uDFF0\uDFF1]|\uD834[\uDD66\uDD6D])$/, Jh = /^[\u1100-\u115F\uA960-\uA97C]$/, Qh = /^[\u1160-\u11A7\uD7B0-\uD7C6]$/, ev = /^[\u11A8-\u11FF\uD7CB-\uD7FB]$/, tv = /^[\uAC00\uAC1C\uAC38\uAC54\uAC70\uAC8C\uACA8\uACC4\uACE0\uACFC\uAD18\uAD34\uAD50\uAD6C\uAD88\uADA4\uADC0\uADDC\uADF8\uAE14\uAE30\uAE4C\uAE68\uAE84\uAEA0\uAEBC\uAED8\uAEF4\uAF10\uAF2C\uAF48\uAF64\uAF80\uAF9C\uAFB8\uAFD4\uAFF0\uB00C\uB028\uB044\uB060\uB07C\uB098\uB0B4\uB0D0\uB0EC\uB108\uB124\uB140\uB15C\uB178\uB194\uB1B0\uB1CC\uB1E8\uB204\uB220\uB23C\uB258\uB274\uB290\uB2AC\uB2C8\uB2E4\uB300\uB31C\uB338\uB354\uB370\uB38C\uB3A8\uB3C4\uB3E0\uB3FC\uB418\uB434\uB450\uB46C\uB488\uB4A4\uB4C0\uB4DC\uB4F8\uB514\uB530\uB54C\uB568\uB584\uB5A0\uB5BC\uB5D8\uB5F4\uB610\uB62C\uB648\uB664\uB680\uB69C\uB6B8\uB6D4\uB6F0\uB70C\uB728\uB744\uB760\uB77C\uB798\uB7B4\uB7D0\uB7EC\uB808\uB824\uB840\uB85C\uB878\uB894\uB8B0\uB8CC\uB8E8\uB904\uB920\uB93C\uB958\uB974\uB990\uB9AC\uB9C8\uB9E4\uBA00\uBA1C\uBA38\uBA54\uBA70\uBA8C\uBAA8\uBAC4\uBAE0\uBAFC\uBB18\uBB34\uBB50\uBB6C\uBB88\uBBA4\uBBC0\uBBDC\uBBF8\uBC14\uBC30\uBC4C\uBC68\uBC84\uBCA0\uBCBC\uBCD8\uBCF4\uBD10\uBD2C\uBD48\uBD64\uBD80\uBD9C\uBDB8\uBDD4\uBDF0\uBE0C\uBE28\uBE44\uBE60\uBE7C\uBE98\uBEB4\uBED0\uBEEC\uBF08\uBF24\uBF40\uBF5C\uBF78\uBF94\uBFB0\uBFCC\uBFE8\uC004\uC020\uC03C\uC058\uC074\uC090\uC0AC\uC0C8\uC0E4\uC100\uC11C\uC138\uC154\uC170\uC18C\uC1A8\uC1C4\uC1E0\uC1FC\uC218\uC234\uC250\uC26C\uC288\uC2A4\uC2C0\uC2DC\uC2F8\uC314\uC330\uC34C\uC368\uC384\uC3A0\uC3BC\uC3D8\uC3F4\uC410\uC42C\uC448\uC464\uC480\uC49C\uC4B8\uC4D4\uC4F0\uC50C\uC528\uC544\uC560\uC57C\uC598\uC5B4\uC5D0\uC5EC\uC608\uC624\uC640\uC65C\uC678\uC694\uC6B0\uC6CC\uC6E8\uC704\uC720\uC73C\uC758\uC774\uC790\uC7AC\uC7C8\uC7E4\uC800\uC81C\uC838\uC854\uC870\uC88C\uC8A8\uC8C4\uC8E0\uC8FC\uC918\uC934\uC950\uC96C\uC988\uC9A4\uC9C0\uC9DC\uC9F8\uCA14\uCA30\uCA4C\uCA68\uCA84\uCAA0\uCABC\uCAD8\uCAF4\uCB10\uCB2C\uCB48\uCB64\uCB80\uCB9C\uCBB8\uCBD4\uCBF0\uCC0C\uCC28\uCC44\uCC60\uCC7C\uCC98\uCCB4\uCCD0\uCCEC\uCD08\uCD24\uCD40\uCD5C\uCD78\uCD94\uCDB0\uCDCC\uCDE8\uCE04\uCE20\uCE3C\uCE58\uCE74\uCE90\uCEAC\uCEC8\uCEE4\uCF00\uCF1C\uCF38\uCF54\uCF70\uCF8C\uCFA8\uCFC4\uCFE0\uCFFC\uD018\uD034\uD050\uD06C\uD088\uD0A4\uD0C0\uD0DC\uD0F8\uD114\uD130\uD14C\uD168\uD184\uD1A0\uD1BC\uD1D8\uD1F4\uD210\uD22C\uD248\uD264\uD280\uD29C\uD2B8\uD2D4\uD2F0\uD30C\uD328\uD344\uD360\uD37C\uD398\uD3B4\uD3D0\uD3EC\uD408\uD424\uD440\uD45C\uD478\uD494\uD4B0\uD4CC\uD4E8\uD504\uD520\uD53C\uD558\uD574\uD590\uD5AC\uD5C8\uD5E4\uD600\uD61C\uD638\uD654\uD670\uD68C\uD6A8\uD6C4\uD6E0\uD6FC\uD718\uD734\uD750\uD76C\uD788]$/, rv = /^[\uAC01-\uAC1B\uAC1D-\uAC37\uAC39-\uAC53\uAC55-\uAC6F\uAC71-\uAC8B\uAC8D-\uACA7\uACA9-\uACC3\uACC5-\uACDF\uACE1-\uACFB\uACFD-\uAD17\uAD19-\uAD33\uAD35-\uAD4F\uAD51-\uAD6B\uAD6D-\uAD87\uAD89-\uADA3\uADA5-\uADBF\uADC1-\uADDB\uADDD-\uADF7\uADF9-\uAE13\uAE15-\uAE2F\uAE31-\uAE4B\uAE4D-\uAE67\uAE69-\uAE83\uAE85-\uAE9F\uAEA1-\uAEBB\uAEBD-\uAED7\uAED9-\uAEF3\uAEF5-\uAF0F\uAF11-\uAF2B\uAF2D-\uAF47\uAF49-\uAF63\uAF65-\uAF7F\uAF81-\uAF9B\uAF9D-\uAFB7\uAFB9-\uAFD3\uAFD5-\uAFEF\uAFF1-\uB00B\uB00D-\uB027\uB029-\uB043\uB045-\uB05F\uB061-\uB07B\uB07D-\uB097\uB099-\uB0B3\uB0B5-\uB0CF\uB0D1-\uB0EB\uB0ED-\uB107\uB109-\uB123\uB125-\uB13F\uB141-\uB15B\uB15D-\uB177\uB179-\uB193\uB195-\uB1AF\uB1B1-\uB1CB\uB1CD-\uB1E7\uB1E9-\uB203\uB205-\uB21F\uB221-\uB23B\uB23D-\uB257\uB259-\uB273\uB275-\uB28F\uB291-\uB2AB\uB2AD-\uB2C7\uB2C9-\uB2E3\uB2E5-\uB2FF\uB301-\uB31B\uB31D-\uB337\uB339-\uB353\uB355-\uB36F\uB371-\uB38B\uB38D-\uB3A7\uB3A9-\uB3C3\uB3C5-\uB3DF\uB3E1-\uB3FB\uB3FD-\uB417\uB419-\uB433\uB435-\uB44F\uB451-\uB46B\uB46D-\uB487\uB489-\uB4A3\uB4A5-\uB4BF\uB4C1-\uB4DB\uB4DD-\uB4F7\uB4F9-\uB513\uB515-\uB52F\uB531-\uB54B\uB54D-\uB567\uB569-\uB583\uB585-\uB59F\uB5A1-\uB5BB\uB5BD-\uB5D7\uB5D9-\uB5F3\uB5F5-\uB60F\uB611-\uB62B\uB62D-\uB647\uB649-\uB663\uB665-\uB67F\uB681-\uB69B\uB69D-\uB6B7\uB6B9-\uB6D3\uB6D5-\uB6EF\uB6F1-\uB70B\uB70D-\uB727\uB729-\uB743\uB745-\uB75F\uB761-\uB77B\uB77D-\uB797\uB799-\uB7B3\uB7B5-\uB7CF\uB7D1-\uB7EB\uB7ED-\uB807\uB809-\uB823\uB825-\uB83F\uB841-\uB85B\uB85D-\uB877\uB879-\uB893\uB895-\uB8AF\uB8B1-\uB8CB\uB8CD-\uB8E7\uB8E9-\uB903\uB905-\uB91F\uB921-\uB93B\uB93D-\uB957\uB959-\uB973\uB975-\uB98F\uB991-\uB9AB\uB9AD-\uB9C7\uB9C9-\uB9E3\uB9E5-\uB9FF\uBA01-\uBA1B\uBA1D-\uBA37\uBA39-\uBA53\uBA55-\uBA6F\uBA71-\uBA8B\uBA8D-\uBAA7\uBAA9-\uBAC3\uBAC5-\uBADF\uBAE1-\uBAFB\uBAFD-\uBB17\uBB19-\uBB33\uBB35-\uBB4F\uBB51-\uBB6B\uBB6D-\uBB87\uBB89-\uBBA3\uBBA5-\uBBBF\uBBC1-\uBBDB\uBBDD-\uBBF7\uBBF9-\uBC13\uBC15-\uBC2F\uBC31-\uBC4B\uBC4D-\uBC67\uBC69-\uBC83\uBC85-\uBC9F\uBCA1-\uBCBB\uBCBD-\uBCD7\uBCD9-\uBCF3\uBCF5-\uBD0F\uBD11-\uBD2B\uBD2D-\uBD47\uBD49-\uBD63\uBD65-\uBD7F\uBD81-\uBD9B\uBD9D-\uBDB7\uBDB9-\uBDD3\uBDD5-\uBDEF\uBDF1-\uBE0B\uBE0D-\uBE27\uBE29-\uBE43\uBE45-\uBE5F\uBE61-\uBE7B\uBE7D-\uBE97\uBE99-\uBEB3\uBEB5-\uBECF\uBED1-\uBEEB\uBEED-\uBF07\uBF09-\uBF23\uBF25-\uBF3F\uBF41-\uBF5B\uBF5D-\uBF77\uBF79-\uBF93\uBF95-\uBFAF\uBFB1-\uBFCB\uBFCD-\uBFE7\uBFE9-\uC003\uC005-\uC01F\uC021-\uC03B\uC03D-\uC057\uC059-\uC073\uC075-\uC08F\uC091-\uC0AB\uC0AD-\uC0C7\uC0C9-\uC0E3\uC0E5-\uC0FF\uC101-\uC11B\uC11D-\uC137\uC139-\uC153\uC155-\uC16F\uC171-\uC18B\uC18D-\uC1A7\uC1A9-\uC1C3\uC1C5-\uC1DF\uC1E1-\uC1FB\uC1FD-\uC217\uC219-\uC233\uC235-\uC24F\uC251-\uC26B\uC26D-\uC287\uC289-\uC2A3\uC2A5-\uC2BF\uC2C1-\uC2DB\uC2DD-\uC2F7\uC2F9-\uC313\uC315-\uC32F\uC331-\uC34B\uC34D-\uC367\uC369-\uC383\uC385-\uC39F\uC3A1-\uC3BB\uC3BD-\uC3D7\uC3D9-\uC3F3\uC3F5-\uC40F\uC411-\uC42B\uC42D-\uC447\uC449-\uC463\uC465-\uC47F\uC481-\uC49B\uC49D-\uC4B7\uC4B9-\uC4D3\uC4D5-\uC4EF\uC4F1-\uC50B\uC50D-\uC527\uC529-\uC543\uC545-\uC55F\uC561-\uC57B\uC57D-\uC597\uC599-\uC5B3\uC5B5-\uC5CF\uC5D1-\uC5EB\uC5ED-\uC607\uC609-\uC623\uC625-\uC63F\uC641-\uC65B\uC65D-\uC677\uC679-\uC693\uC695-\uC6AF\uC6B1-\uC6CB\uC6CD-\uC6E7\uC6E9-\uC703\uC705-\uC71F\uC721-\uC73B\uC73D-\uC757\uC759-\uC773\uC775-\uC78F\uC791-\uC7AB\uC7AD-\uC7C7\uC7C9-\uC7E3\uC7E5-\uC7FF\uC801-\uC81B\uC81D-\uC837\uC839-\uC853\uC855-\uC86F\uC871-\uC88B\uC88D-\uC8A7\uC8A9-\uC8C3\uC8C5-\uC8DF\uC8E1-\uC8FB\uC8FD-\uC917\uC919-\uC933\uC935-\uC94F\uC951-\uC96B\uC96D-\uC987\uC989-\uC9A3\uC9A5-\uC9BF\uC9C1-\uC9DB\uC9DD-\uC9F7\uC9F9-\uCA13\uCA15-\uCA2F\uCA31-\uCA4B\uCA4D-\uCA67\uCA69-\uCA83\uCA85-\uCA9F\uCAA1-\uCABB\uCABD-\uCAD7\uCAD9-\uCAF3\uCAF5-\uCB0F\uCB11-\uCB2B\uCB2D-\uCB47\uCB49-\uCB63\uCB65-\uCB7F\uCB81-\uCB9B\uCB9D-\uCBB7\uCBB9-\uCBD3\uCBD5-\uCBEF\uCBF1-\uCC0B\uCC0D-\uCC27\uCC29-\uCC43\uCC45-\uCC5F\uCC61-\uCC7B\uCC7D-\uCC97\uCC99-\uCCB3\uCCB5-\uCCCF\uCCD1-\uCCEB\uCCED-\uCD07\uCD09-\uCD23\uCD25-\uCD3F\uCD41-\uCD5B\uCD5D-\uCD77\uCD79-\uCD93\uCD95-\uCDAF\uCDB1-\uCDCB\uCDCD-\uCDE7\uCDE9-\uCE03\uCE05-\uCE1F\uCE21-\uCE3B\uCE3D-\uCE57\uCE59-\uCE73\uCE75-\uCE8F\uCE91-\uCEAB\uCEAD-\uCEC7\uCEC9-\uCEE3\uCEE5-\uCEFF\uCF01-\uCF1B\uCF1D-\uCF37\uCF39-\uCF53\uCF55-\uCF6F\uCF71-\uCF8B\uCF8D-\uCFA7\uCFA9-\uCFC3\uCFC5-\uCFDF\uCFE1-\uCFFB\uCFFD-\uD017\uD019-\uD033\uD035-\uD04F\uD051-\uD06B\uD06D-\uD087\uD089-\uD0A3\uD0A5-\uD0BF\uD0C1-\uD0DB\uD0DD-\uD0F7\uD0F9-\uD113\uD115-\uD12F\uD131-\uD14B\uD14D-\uD167\uD169-\uD183\uD185-\uD19F\uD1A1-\uD1BB\uD1BD-\uD1D7\uD1D9-\uD1F3\uD1F5-\uD20F\uD211-\uD22B\uD22D-\uD247\uD249-\uD263\uD265-\uD27F\uD281-\uD29B\uD29D-\uD2B7\uD2B9-\uD2D3\uD2D5-\uD2EF\uD2F1-\uD30B\uD30D-\uD327\uD329-\uD343\uD345-\uD35F\uD361-\uD37B\uD37D-\uD397\uD399-\uD3B3\uD3B5-\uD3CF\uD3D1-\uD3EB\uD3ED-\uD407\uD409-\uD423\uD425-\uD43F\uD441-\uD45B\uD45D-\uD477\uD479-\uD493\uD495-\uD4AF\uD4B1-\uD4CB\uD4CD-\uD4E7\uD4E9-\uD503\uD505-\uD51F\uD521-\uD53B\uD53D-\uD557\uD559-\uD573\uD575-\uD58F\uD591-\uD5AB\uD5AD-\uD5C7\uD5C9-\uD5E3\uD5E5-\uD5FF\uD601-\uD61B\uD61D-\uD637\uD639-\uD653\uD655-\uD66F\uD671-\uD68B\uD68D-\uD6A7\uD6A9-\uD6C3\uD6C5-\uD6DF\uD6E1-\uD6FB\uD6FD-\uD717\uD719-\uD733\uD735-\uD74F\uD751-\uD76B\uD76D-\uD787\uD789-\uD7A3]$/, nv = /^(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])$/, av = (t, e) => {
  var r = ve.Any;
  return t.search(Kh) !== -1 && (r |= ve.Extend), e === 8205 && (r |= ve.ZWJ), e >= 127462 && e <= 127487 && (r |= ve.RI), t.search(Yh) !== -1 && (r |= ve.Prepend), t.search(Xh) !== -1 && (r |= ve.SpacingMark), t.search(Jh) !== -1 && (r |= ve.L), t.search(Qh) !== -1 && (r |= ve.V), t.search(ev) !== -1 && (r |= ve.T), t.search(tv) !== -1 && (r |= ve.LV), t.search(rv) !== -1 && (r |= ve.LVT), t.search(nv) !== -1 && (r |= ve.ExtPict), r;
};
function zr(t, e) {
  return (t & e) !== 0;
}
var iv = [
  // GB6
  [ve.L, ve.L | ve.V | ve.LV | ve.LVT],
  // GB7
  [ve.LV | ve.V, ve.V | ve.T],
  // GB8
  [ve.LVT | ve.T, ve.T],
  // GB9
  [ve.Any, ve.Extend | ve.ZWJ],
  // GB9a
  [ve.Any, ve.SpacingMark],
  // GB9b
  [ve.Prepend, ve.Any],
  // GB11
  [ve.ZWJ, ve.ExtPict],
  // GB12 and GB13
  [ve.RI, ve.RI]
];
function sv(t, e) {
  return iv.findIndex((r) => zr(t, r[0]) && zr(e, r[1])) === -1;
}
var ov = /(?:[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2605\u2607-\u2612\u2614-\u2685\u2690-\u2705\u2708-\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763-\u2767\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC00-\uDCFF\uDD0D-\uDD0F\uDD2F\uDD6C-\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDAD-\uDDE5\uDE01-\uDE0F\uDE1A\uDE2F\uDE32-\uDE3A\uDE3C-\uDE3F\uDE49-\uDFFA]|\uD83D[\uDC00-\uDD3D\uDD46-\uDE4F\uDE80-\uDEFF\uDF74-\uDF7F\uDFD5-\uDFFF]|\uD83E[\uDC0C-\uDC0F\uDC48-\uDC4F\uDC5A-\uDC5F\uDC88-\uDC8F\uDCAE-\uDCFF\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDEFF]|\uD83F[\uDC00-\uDFFD])(?:[\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0902\u093A\u093C\u0941-\u0948\u094D\u0951-\u0957\u0962\u0963\u0981\u09BC\u09BE\u09C1-\u09C4\u09CD\u09D7\u09E2\u09E3\u09FE\u0A01\u0A02\u0A3C\u0A41\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81\u0A82\u0ABC\u0AC1-\u0AC5\u0AC7\u0AC8\u0ACD\u0AE2\u0AE3\u0AFA-\u0AFF\u0B01\u0B3C\u0B3E\u0B3F\u0B41-\u0B44\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B82\u0BBE\u0BC0\u0BCD\u0BD7\u0C00\u0C04\u0C3C\u0C3E-\u0C40\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81\u0CBC\u0CBF\u0CC2\u0CC6\u0CCC\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D00\u0D01\u0D3B\u0D3C\u0D3E\u0D41-\u0D44\u0D4D\u0D57\u0D62\u0D63\u0D81\u0DCA\u0DCF\u0DD2-\u0DD4\u0DD6\u0DDF\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0F18\u0F19\u0F35\u0F37\u0F39\u0F71-\u0F7E\u0F80-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102D-\u1030\u1032-\u1037\u1039\u103A\u103D\u103E\u1058\u1059\u105E-\u1060\u1071-\u1074\u1082\u1085\u1086\u108D\u109D\u135D-\u135F\u1712-\u1714\u1732\u1733\u1752\u1753\u1772\u1773\u17B4\u17B5\u17B7-\u17BD\u17C6\u17C9-\u17D3\u17DD\u180B-\u180D\u180F\u1885\u1886\u18A9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193B\u1A17\u1A18\u1A1B\u1A56\u1A58-\u1A5E\u1A60\u1A62\u1A65-\u1A6C\u1A73-\u1A7C\u1A7F\u1AB0-\u1ACE\u1B00-\u1B03\u1B34-\u1B3A\u1B3C\u1B42\u1B6B-\u1B73\u1B80\u1B81\u1BA2-\u1BA5\u1BA8\u1BA9\u1BAB-\u1BAD\u1BE6\u1BE8\u1BE9\u1BED\u1BEF-\u1BF1\u1C2C-\u1C33\u1C36\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE0\u1CE2-\u1CE8\u1CED\u1CF4\u1CF8\u1CF9\u1DC0-\u1DFF\u200C\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA825\uA826\uA82C\uA8C4\uA8C5\uA8E0-\uA8F1\uA8FF\uA926-\uA92D\uA947-\uA951\uA980-\uA982\uA9B3\uA9B6-\uA9B9\uA9BC\uA9BD\uA9E5\uAA29-\uAA2E\uAA31\uAA32\uAA35\uAA36\uAA43\uAA4C\uAA7C\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEC\uAAED\uAAF6\uABE5\uABE8\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFF9E\uFF9F]|\uD800[\uDDFD\uDEE0\uDF76-\uDF7A]|\uD802[\uDE01-\uDE03\uDE05\uDE06\uDE0C-\uDE0F\uDE38-\uDE3A\uDE3F\uDEE5\uDEE6]|\uD803[\uDD24-\uDD27\uDEAB\uDEAC\uDEFD-\uDEFF\uDF46-\uDF50\uDF82-\uDF85]|\uD804[\uDC01\uDC38-\uDC46\uDC70\uDC73\uDC74\uDC7F-\uDC81\uDCB3-\uDCB6\uDCB9\uDCBA\uDCC2\uDD00-\uDD02\uDD27-\uDD2B\uDD2D-\uDD34\uDD73\uDD80\uDD81\uDDB6-\uDDBE\uDDC9-\uDDCC\uDDCF\uDE2F-\uDE31\uDE34\uDE36\uDE37\uDE3E\uDE41\uDEDF\uDEE3-\uDEEA\uDF00\uDF01\uDF3B\uDF3C\uDF3E\uDF40\uDF57\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC38-\uDC3F\uDC42-\uDC44\uDC46\uDC5E\uDCB0\uDCB3-\uDCB8\uDCBA\uDCBD\uDCBF\uDCC0\uDCC2\uDCC3\uDDAF\uDDB2-\uDDB5\uDDBC\uDDBD\uDDBF\uDDC0\uDDDC\uDDDD\uDE33-\uDE3A\uDE3D\uDE3F\uDE40\uDEAB\uDEAD\uDEB0-\uDEB5\uDEB7\uDF1D-\uDF1F\uDF22-\uDF25\uDF27-\uDF2B]|\uD806[\uDC2F-\uDC37\uDC39\uDC3A\uDD30\uDD3B\uDD3C\uDD3E\uDD43\uDDD4-\uDDD7\uDDDA\uDDDB\uDDE0\uDE01-\uDE0A\uDE33-\uDE38\uDE3B-\uDE3E\uDE47\uDE51-\uDE56\uDE59-\uDE5B\uDE8A-\uDE96\uDE98\uDE99]|\uD807[\uDC30-\uDC36\uDC38-\uDC3D\uDC3F\uDC92-\uDCA7\uDCAA-\uDCB0\uDCB2\uDCB3\uDCB5\uDCB6\uDD31-\uDD36\uDD3A\uDD3C\uDD3D\uDD3F-\uDD45\uDD47\uDD90\uDD91\uDD95\uDD97\uDEF3\uDEF4\uDF00\uDF01\uDF36-\uDF3A\uDF40\uDF42]|\uD80D[\uDC40\uDC47-\uDC55]|\uD81A[\uDEF0-\uDEF4\uDF30-\uDF36]|\uD81B[\uDF4F\uDF8F-\uDF92\uDFE4]|\uD82F[\uDC9D\uDC9E]|\uD833[\uDF00-\uDF2D\uDF30-\uDF46]|\uD834[\uDD65\uDD67-\uDD69\uDD6E-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A\uDC8F\uDD30-\uDD36\uDEAE\uDEEC-\uDEEF]|\uD839[\uDCEC-\uDCEF]|\uD83A[\uDCD0-\uDCD6\uDD44-\uDD4A]|\uD83C[\uDFFB-\uDFFF]|\uDB40[\uDC20-\uDC7F\uDD00-\uDDEF])*\u200D$/, jo = (t) => t.search(ov) !== -1, uv = /(?:\uD83C[\uDDE6-\uDDFF])+$/g, lv = (t) => {
  var e = t.match(uv);
  if (e === null)
    return !1;
  var r = e[0].length / 2;
  return r % 2 === 1;
}, cv = {
  delete(t, e) {
    t.delete(e);
  },
  insertFragment(t, e, r) {
    t.insertFragment(e, r);
  },
  insertText(t, e) {
    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    g.withoutNormalizing(t, () => {
      var {
        voids: n = !1
      } = r, {
        at: a = Es(t)
      } = r;
      if (S.isPath(a) && (a = g.range(t, a)), q.isRange(a))
        if (q.isCollapsed(a))
          a = a.anchor;
        else {
          var i = q.end(a);
          if (!n && g.void(t, {
            at: i
          }))
            return;
          var s = q.start(a), o = g.pointRef(t, s), u = g.pointRef(t, i);
          re.delete(t, {
            at: a,
            voids: n
          });
          var l = o.unref(), c = u.unref();
          a = l || c, re.setSelection(t, {
            anchor: a,
            focus: a
          });
        }
      if (!(!n && g.void(t, {
        at: a
      }) || g.elementReadOnly(t, {
        at: a
      }))) {
        var {
          path: d,
          offset: p
        } = a;
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
function Ro(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ro(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ro(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var re = Rn(Rn(Rn(Rn({}, Sh), Ph), Fh), cv), ia = /* @__PURE__ */ new WeakMap(), fv = (t) => ia.get(t) || !1, dv = (t, e, r) => {
  var n = ia.get(t) || !1;
  ia.set(t, !0);
  try {
    e(), r();
  } finally {
    ia.set(t, n);
  }
};
function bf(t, e, r) {
  var n = ya.get(t) || [], a = Ca.get(t) || /* @__PURE__ */ new Set(), i, s, o = (d) => {
    if (d) {
      var p = d.join(",");
      s.has(p) || (s.add(p), i.push(d));
    }
  };
  if (r) {
    i = [], s = /* @__PURE__ */ new Set();
    for (var u of n) {
      var l = r(u);
      o(l);
    }
  } else
    i = n, s = a;
  for (var c of e)
    o(c);
  ya.set(t, i), Ca.set(t, s);
}
var pv = (t, e) => {
  for (var r of g.pathRefs(t))
    wh.transform(r, e);
  for (var n of g.pointRefs(t))
    Oh.transform(n, e);
  for (var a of g.rangeRefs(t))
    xh.transform(a, e);
  if (!fv(t)) {
    var i = S.operationCanTransformPath(e) ? (s) => S.transform(s, e) : void 0;
    bf(t, t.getDirtyPaths(e), i);
  }
  re.transform(t, e), t.operations.push(e), g.normalize(t, {
    operation: e
  }), e.type === "set_selection" && (t.marks = null), fn.get(t) || (fn.set(t, !0), Promise.resolve().then(() => {
    fn.set(t, !1), t.onChange({
      operation: e
    }), t.operations = [];
  }));
}, hv = (t, e) => {
  switch (e.type) {
    case "insert_text":
    case "remove_text":
    case "set_node": {
      var {
        path: r
      } = e;
      return S.levels(r);
    }
    case "insert_node": {
      var {
        node: n,
        path: a
      } = e, i = S.levels(a), s = le.isText(n) ? [] : Array.from(se.nodes(n), (W) => {
        var [, R] = W;
        return a.concat(R);
      });
      return [...i, ...s];
    }
    case "merge_node": {
      var {
        path: o
      } = e, u = S.ancestors(o), l = S.previous(o);
      return [...u, l];
    }
    case "move_node": {
      var {
        path: c,
        newPath: d
      } = e;
      if (S.equals(c, d))
        return [];
      var p = [], m = [];
      for (var h of S.ancestors(c)) {
        var v = S.transform(h, e);
        p.push(v);
      }
      for (var f of S.ancestors(d)) {
        var D = S.transform(f, e);
        m.push(D);
      }
      var b = m[m.length - 1], B = d[d.length - 1], E = b.concat(B);
      return [...p, ...m, E];
    }
    case "remove_node": {
      var {
        path: C
      } = e, O = S.ancestors(C);
      return [...O];
    }
    case "split_node": {
      var {
        path: A
      } = e, H = S.levels(A), P = S.next(A);
      return [...H, P];
    }
    default:
      return [];
  }
}, vv = (t) => {
  var {
    selection: e
  } = t;
  return e ? se.fragment(t, e) : [];
}, gv = (t, e) => {
  var [r, n] = e;
  if (!le.isText(r)) {
    if (ue.isElement(r) && r.children.length === 0) {
      var a = {
        text: ""
      };
      re.insertNodes(t, a, {
        at: n.concat(0),
        voids: !0
      });
      return;
    }
    for (var i = g.isEditor(r) ? !1 : ue.isElement(r) && (t.isInline(r) || r.children.length === 0 || le.isText(r.children[0]) || t.isInline(r.children[0])), s = 0, o = 0; o < r.children.length; o++, s++) {
      var u = se.get(t, n);
      if (!le.isText(u)) {
        var l = u.children[s], c = u.children[s - 1], d = o === r.children.length - 1, p = le.isText(l) || ue.isElement(l) && t.isInline(l);
        if (p !== i)
          re.removeNodes(t, {
            at: n.concat(s),
            voids: !0
          }), s--;
        else if (ue.isElement(l)) {
          if (t.isInline(l)) {
            if (c == null || !le.isText(c)) {
              var m = {
                text: ""
              };
              re.insertNodes(t, m, {
                at: n.concat(s),
                voids: !0
              }), s++;
            } else if (d) {
              var h = {
                text: ""
              };
              re.insertNodes(t, h, {
                at: n.concat(s + 1),
                voids: !0
              }), s++;
            }
          }
        } else {
          if (!le.isText(l) && !("children" in l)) {
            var v = l;
            v.children = [];
          }
          c != null && le.isText(c) && (le.equals(l, c, {
            loose: !0
          }) ? (re.mergeNodes(t, {
            at: n.concat(s),
            voids: !0
          }), s--) : c.text === "" ? (re.removeNodes(t, {
            at: n.concat(s - 1),
            voids: !0
          }), s--) : l.text === "" && (re.removeNodes(t, {
            at: n.concat(s),
            voids: !0
          }), s--));
        }
      }
    }
  }
}, mv = (t, e) => {
  var {
    iteration: r,
    initialDirtyPathsLength: n
  } = e, a = n * 42;
  if (r > a)
    throw new Error("Could not completely normalize the editor after ".concat(a, " iterations! This is usually due to incorrect normalization logic that leaves a node in an invalid state."));
  return !0;
}, yv = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    voids: n = !1,
    mode: a = "lowest",
    at: i = e.selection,
    match: s
  } = r;
  if (i) {
    var o = g.path(e, i), u = a === "lowest";
    for (var [l, c] of g.levels(e, {
      at: o,
      voids: n,
      match: s,
      reverse: u
    }))
      if (!le.isText(l)) {
        if (q.isRange(i)) {
          if (S.isAncestor(c, i.anchor.path) && S.isAncestor(c, i.focus.path))
            return [l, c];
        } else if (!S.equals(o, c))
          return [l, c];
      }
  }
};
function Io(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function No(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Io(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Io(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Cv = (t, e, r) => {
  var {
    selection: n
  } = t;
  if (n) {
    var a = (d, p) => {
      if (!le.isText(d))
        return !1;
      var [m, h] = g.parent(t, p);
      return !t.isVoid(m) || t.markableVoid(m);
    }, i = q.isExpanded(n), s = !1;
    if (!i) {
      var [o, u] = g.node(t, n);
      if (o && a(o, u)) {
        var [l] = g.parent(t, u);
        s = l && t.markableVoid(l);
      }
    }
    if (i || s)
      re.setNodes(t, {
        [e]: r
      }, {
        match: a,
        split: !0,
        voids: !0
      });
    else {
      var c = No(No({}, g.marks(t) || {}), {}, {
        [e]: r
      });
      t.marks = c, fn.get(t) || t.onChange();
    }
  }
};
function _o(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $o(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _o(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _o(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Dv = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = g.point(e, r, {
    edge: "end"
  }), i = g.end(e, []), s = {
    anchor: a,
    focus: i
  }, {
    distance: o = 1
  } = n, u = 0, l;
  for (var c of g.positions(e, $o($o({}, n), {}, {
    at: s
  }))) {
    if (u > o)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
};
function zo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Wo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var bv = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = g.start(e, []), i = g.point(e, r, {
    edge: "start"
  }), s = {
    anchor: a,
    focus: i
  }, {
    distance: o = 1
  } = n, u = 0, l;
  for (var c of g.positions(e, Wo(Wo({}, n), {}, {
    at: s,
    reverse: !0
  }))) {
    if (u > o)
      break;
    u !== 0 && (l = c), u++;
  }
  return l;
}, Ev = (t, e) => {
  var {
    selection: r
  } = t;
  r && q.isCollapsed(r) && re.delete(t, {
    unit: e,
    reverse: !0
  });
}, wv = (t, e) => {
  var {
    selection: r
  } = t;
  r && q.isCollapsed(r) && re.delete(t, {
    unit: e
  });
}, Ov = function(e) {
  var {
    direction: r = "forward"
  } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e;
  n && q.isExpanded(n) && re.delete(e, {
    reverse: r === "backward"
  });
}, xv = (t, e) => [g.start(t, e), g.end(t, e)];
function Ho(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Uo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ho(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ho(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Bv = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g.above(e, Uo(Uo({}, r), {}, {
    match: (n) => ue.isElement(n) && g.isElementReadOnly(e, n)
  }));
}, Lv = (t, e) => g.point(t, e, {
  edge: "end"
}), Av = (t, e) => {
  var r = g.path(t, e, {
    edge: "start"
  });
  return g.node(t, r);
}, Sv = (t, e) => {
  var r = g.range(t, e);
  return se.fragment(t, r);
};
function Vo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function qo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Vo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Vo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Pv = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return g.above(e, qo(qo({}, r), {}, {
    match: (n) => ue.isElement(n) && g.isVoid(e, n)
  }));
}, Fv = (t, e) => e.children.some((r) => ue.isElement(r) && g.isBlock(t, r)), Tv = (t, e) => e.children.some((r) => le.isText(r) || g.isInline(t, r)), Mv = (t, e) => se.has(t, e), kv = (t, e) => e.children.every((r) => le.isText(r)), jv = (t) => {
  re.splitNodes(t, {
    always: !0
  });
}, Rv = (t, e, r) => {
  re.insertNodes(t, e, r);
}, Iv = (t) => {
  re.splitNodes(t, {
    always: !0
  });
};
function Go(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Nv(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Go(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Go(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var _v = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a,
    marks: i
  } = e;
  if (a) {
    if (i) {
      var s = Nv({
        text: r
      }, i);
      re.insertNodes(e, s, {
        at: n.at,
        voids: n.voids
      });
    } else
      re.insertText(e, r, n);
    e.marks = null;
  }
}, $v = (t, e) => !t.isInline(e), zv = (t, e, r) => g.isStart(t, e, r) || g.isEnd(t, e, r), Wv = (t, e) => {
  var {
    children: r
  } = e, [n] = r;
  return r.length === 0 || r.length === 1 && le.isText(n) && n.text === "" && !t.isVoid(e);
}, Hv = (t, e, r) => {
  var n = g.end(t, r);
  return ye.equals(e, n);
}, Uv = (t) => {
  var e = Cf.get(t);
  return e === void 0 ? !0 : e;
}, Vv = (t, e, r) => {
  if (e.offset !== 0)
    return !1;
  var n = g.start(t, r);
  return ye.equals(e, n);
}, qv = (t, e) => {
  var r = g.path(t, e, {
    edge: "end"
  });
  return g.node(t, r);
}, Gv = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = g.path(e, r, n), i = se.leaf(e, a);
  return [i, a];
};
function Zv(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = t.selection,
      reverse: n = !1,
      voids: a = !1
    } = e, {
      match: i
    } = e;
    if (i == null && (i = () => !0), !!r) {
      var s = [], o = g.path(t, r);
      for (var [u, l] of se.levels(t, o))
        if (i(u, l) && (s.push([u, l]), !a && ue.isElement(u) && g.isVoid(t, u)))
          break;
      n && s.reverse(), yield* s;
    }
  }();
}
var Kv = ["text"], Yv = ["text"], Xv = function(e) {
  var {
    marks: r,
    selection: n
  } = e;
  if (!n)
    return null;
  var {
    anchor: a,
    focus: i
  } = n;
  if (r)
    return r;
  if (q.isExpanded(n)) {
    var s = g.isEnd(e, a, a.path);
    if (s) {
      var o = g.after(e, a);
      o && (a = o);
    }
    var [u] = g.nodes(e, {
      match: le.isText,
      at: {
        anchor: a,
        focus: i
      }
    });
    if (u) {
      var [l] = u, c = Vt(l, Kv);
      return c;
    } else
      return {};
  }
  var {
    path: d
  } = a, [p] = g.leaf(e, d);
  if (a.offset === 0) {
    var m = g.previous(e, {
      at: d,
      match: le.isText
    }), h = g.above(e, {
      match: (E) => ue.isElement(E) && g.isVoid(e, E) && e.markableVoid(E)
    });
    if (!h) {
      var v = g.above(e, {
        match: (E) => ue.isElement(E) && g.isBlock(e, E)
      });
      if (m && v) {
        var [f, D] = m, [, b] = v;
        S.isAncestor(b, D) && (p = f);
      }
    }
  }
  var B = Vt(p, Yv);
  return B;
}, Jv = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: i,
    at: s = e.selection
  } = r;
  if (s) {
    var o = g.after(e, s, {
      voids: a
    });
    if (o) {
      var [, u] = g.last(e, []), l = [o.path, u];
      if (S.isPath(s) && s.length === 0)
        throw new Error("Cannot get the next node from the root node!");
      if (i == null)
        if (S.isPath(s)) {
          var [c] = g.parent(e, s);
          i = (p) => c.children.includes(p);
        } else
          i = () => !0;
      var [d] = g.nodes(e, {
        at: l,
        match: i,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, Qv = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = g.path(e, r, n), i = se.get(e, a);
  return [i, a];
};
function eg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = t.selection,
      mode: n = "all",
      universal: a = !1,
      reverse: i = !1,
      voids: s = !1,
      ignoreNonSelectable: o = !1
    } = e, {
      match: u
    } = e;
    if (u || (u = () => !0), !!r) {
      var l, c;
      if (Nh.isSpan(r))
        l = r[0], c = r[1];
      else {
        var d = g.path(t, r, {
          edge: "start"
        }), p = g.path(t, r, {
          edge: "end"
        });
        l = i ? p : d, c = i ? d : p;
      }
      var m = se.nodes(t, {
        reverse: i,
        from: l,
        to: c,
        pass: (E) => {
          var [C] = E;
          return ue.isElement(C) ? !!(!s && (g.isVoid(t, C) || g.isElementReadOnly(t, C)) || o && !g.isSelectable(t, C)) : !1;
        }
      }), h = [], v;
      for (var [f, D] of m)
        if (!(o && ue.isElement(f) && !g.isSelectable(t, f))) {
          var b = v && S.compare(D, v[1]) === 0;
          if (!(n === "highest" && b)) {
            if (!u(f, D)) {
              if (a && !b && le.isText(f))
                return;
              continue;
            }
            if (n === "lowest" && b) {
              v = [f, D];
              continue;
            }
            var B = n === "lowest" ? v : [f, D];
            B && (a ? h.push(B) : yield B), v = [f, D];
          }
        }
      n === "lowest" && v && (a ? h.push(v) : yield v), a && (yield* h);
    }
  }();
}
var tg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    force: n = !1,
    operation: a
  } = r, i = (c) => ya.get(c) || [], s = (c) => Ca.get(c) || /* @__PURE__ */ new Set(), o = (c) => {
    var d = i(c).pop(), p = d.join(",");
    return s(c).delete(p), d;
  };
  if (g.isNormalizing(e)) {
    if (n) {
      var u = Array.from(se.nodes(e), (c) => {
        var [, d] = c;
        return d;
      }), l = new Set(u.map((c) => c.join(",")));
      ya.set(e, u), Ca.set(e, l);
    }
    i(e).length !== 0 && g.withoutNormalizing(e, () => {
      for (var c of i(e))
        if (se.has(e, c)) {
          var d = g.node(e, c), [p, m] = d;
          ue.isElement(p) && p.children.length === 0 && e.normalizeNode(d, {
            operation: a
          });
        }
      for (var h = i(e), v = h.length, f = 0; h.length !== 0; ) {
        if (!e.shouldNormalize({
          dirtyPaths: h,
          iteration: f,
          initialDirtyPathsLength: v,
          operation: a
        }))
          return;
        var D = o(e);
        if (se.has(e, D)) {
          var b = g.node(e, D);
          e.normalizeNode(b, {
            operation: a
          });
        }
        f++, h = i(e);
      }
    });
  }
}, rg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = g.path(e, r, n), i = S.parent(a), s = g.node(e, i);
  return s;
}, ng = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: o
      } = i, u = g.pathRefs(e);
      return u.delete(i), i.current = null, o;
    }
  }, s = g.pathRefs(e);
  return s.add(i), i;
}, ag = (t) => {
  var e = Eo.get(t);
  return e || (e = /* @__PURE__ */ new Set(), Eo.set(t, e)), e;
}, ig = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    depth: a,
    edge: i
  } = n;
  if (S.isPath(r)) {
    if (i === "start") {
      var [, s] = se.first(e, r);
      r = s;
    } else if (i === "end") {
      var [, o] = se.last(e, r);
      r = o;
    }
  }
  return q.isRange(r) && (i === "start" ? r = q.start(r) : i === "end" ? r = q.end(r) : r = S.common(r.anchor.path, r.focus.path)), ye.isPoint(r) && (r = r.path), a != null && (r = r.slice(0, a)), r;
}, sg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: o
      } = i, u = g.pointRefs(e);
      return u.delete(i), i.current = null, o;
    }
  }, s = g.pointRefs(e);
  return s.add(i), i;
}, og = (t) => {
  var e = wo.get(t);
  return e || (e = /* @__PURE__ */ new Set(), wo.set(t, e)), e;
}, ug = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    edge: a = "start"
  } = n;
  if (S.isPath(r)) {
    var i;
    if (a === "end") {
      var [, s] = se.last(e, r);
      i = s;
    } else {
      var [, o] = se.first(e, r);
      i = o;
    }
    var u = se.get(e, i);
    if (!le.isText(u))
      throw new Error("Cannot get the ".concat(a, " point in the node at path [").concat(r, "] because it has no ").concat(a, " text node."));
    return {
      path: i,
      offset: a === "end" ? u.text.length : 0
    };
  }
  if (q.isRange(r)) {
    var [l, c] = q.edges(r);
    return a === "start" ? l : c;
  }
  return r;
};
function lg(t) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  return function* () {
    var {
      at: r = t.selection,
      unit: n = "offset",
      reverse: a = !1,
      voids: i = !1,
      ignoreNonSelectable: s = !1
    } = e;
    if (!r)
      return;
    var o = g.range(t, r), [u, l] = q.edges(o), c = a ? l : u, d = !1, p = "", m = 0, h = 0, v = 0;
    for (var [f, D] of g.nodes(t, {
      at: r,
      reverse: a,
      voids: i,
      ignoreNonSelectable: s
    })) {
      if (ue.isElement(f)) {
        if (!i && (t.isVoid(f) || t.isElementReadOnly(f))) {
          yield g.start(t, D);
          continue;
        }
        if (t.isInline(f)) continue;
        if (g.hasInlines(t, f)) {
          var b = S.isAncestor(D, l.path) ? l : g.end(t, D), B = S.isAncestor(D, u.path) ? u : g.start(t, D);
          p = g.string(t, {
            anchor: B,
            focus: b
          }, {
            voids: i
          }), d = !0;
        }
      }
      if (le.isText(f)) {
        var E = S.equals(D, c.path);
        for (E ? (h = a ? c.offset : f.text.length - c.offset, v = c.offset) : (h = f.text.length, v = a ? h : 0), (E || d || n === "offset") && (yield {
          path: D,
          offset: v
        }, d = !1); ; ) {
          if (m === 0) {
            if (p === "") break;
            m = C(p, n, a), p = Os(p, m, a)[1];
          }
          if (v = a ? v - m : v + m, h = h - m, h < 0) {
            m = -h;
            break;
          }
          m = 0, yield {
            path: D,
            offset: v
          };
        }
      }
    }
    function C(O, A, H) {
      return A === "character" ? ws(O, H) : A === "word" ? Uh(O, H) : A === "line" || A === "block" ? O.length : 1;
    }
  }();
}
var cg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    mode: n = "lowest",
    voids: a = !1
  } = r, {
    match: i,
    at: s = e.selection
  } = r;
  if (s) {
    var o = g.before(e, s, {
      voids: a
    });
    if (o) {
      var [, u] = g.first(e, []), l = [o.path, u];
      if (S.isPath(s) && s.length === 0)
        throw new Error("Cannot get the previous node from the root node!");
      if (i == null)
        if (S.isPath(s)) {
          var [c] = g.parent(e, s);
          i = (p) => c.children.includes(p);
        } else
          i = () => !0;
      var [d] = g.nodes(e, {
        reverse: !0,
        at: l,
        match: i,
        mode: n,
        voids: a
      });
      return d;
    }
  }
}, fg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    affinity: a = "forward"
  } = n, i = {
    current: r,
    affinity: a,
    unref() {
      var {
        current: o
      } = i, u = g.rangeRefs(e);
      return u.delete(i), i.current = null, o;
    }
  }, s = g.rangeRefs(e);
  return s.add(i), i;
}, dg = (t) => {
  var e = Oo.get(t);
  return e || (e = /* @__PURE__ */ new Set(), Oo.set(t, e)), e;
}, pg = (t, e, r) => {
  if (q.isRange(e) && !r)
    return e;
  var n = g.start(t, e), a = g.end(t, r || e);
  return {
    anchor: n,
    focus: a
  };
};
function Zo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function hg(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Zo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Zo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var vg = (t, e) => {
  var {
    selection: r
  } = t;
  if (r) {
    var n = (c, d) => {
      if (!le.isText(c))
        return !1;
      var [p, m] = g.parent(t, d);
      return !t.isVoid(p) || t.markableVoid(p);
    }, a = q.isExpanded(r), i = !1;
    if (!a) {
      var [s, o] = g.node(t, r);
      if (s && n(s, o)) {
        var [u] = g.parent(t, o);
        i = u && t.markableVoid(u);
      }
    }
    if (a || i)
      re.unsetNodes(t, e, {
        match: n,
        split: !0,
        voids: !0
      });
    else {
      var l = hg({}, g.marks(t) || {});
      delete l[e], t.marks = l, fn.get(t) || t.onChange();
    }
  }
}, gg = (t, e) => {
  Cf.set(t, e);
}, mg = (t, e) => g.point(t, e, {
  edge: "start"
}), yg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, i = g.range(e, r), [s, o] = q.edges(i), u = "";
  for (var [l, c] of g.nodes(e, {
    at: i,
    match: le.isText,
    voids: a
  })) {
    var d = l.text;
    S.equals(c, o.path) && (d = d.slice(0, o.offset)), S.equals(c, s.path) && (d = d.slice(s.offset)), u += d;
  }
  return u;
}, Cg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    voids: a = !1
  } = n, [i, s] = q.edges(r);
  if (i.offset !== 0 || s.offset !== 0 || q.isCollapsed(r) || S.hasPrevious(s.path))
    return r;
  var o = g.above(e, {
    at: s,
    match: (h) => ue.isElement(h) && g.isBlock(e, h),
    voids: a
  }), u = o ? o[1] : [], l = g.start(e, i), c = {
    anchor: l,
    focus: s
  }, d = !0;
  for (var [p, m] of g.nodes(e, {
    at: c,
    match: le.isText,
    reverse: !0,
    voids: a
  })) {
    if (d) {
      d = !1;
      continue;
    }
    if (p.text !== "" || S.isBefore(m, u)) {
      s = {
        path: m,
        offset: p.text.length
      };
      break;
    }
  }
  return {
    anchor: i,
    focus: s
  };
}, Dg = (t, e) => {
  var r = g.isNormalizing(t);
  g.setNormalizing(t, !1);
  try {
    e();
  } finally {
    g.setNormalizing(t, r);
  }
  g.normalize(t);
}, bg = (t, e, r) => {
  var [n, a] = e;
  return ue.isElement(n) && g.isEmpty(t, n) || le.isText(n) && n.text === "" && a[a.length - 1] !== 0;
}, Eg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var n, a, {
      reverse: i = !1,
      unit: s = "character",
      distance: o = 1,
      voids: u = !1
    } = r, {
      at: l = e.selection,
      hanging: c = !1
    } = r;
    if (l) {
      var d = !1;
      if (q.isRange(l) && q.isCollapsed(l) && (d = !0, l = l.anchor), ye.isPoint(l)) {
        var p = g.void(e, {
          at: l,
          mode: "highest"
        });
        if (!u && p) {
          var [, m] = p;
          l = m;
        } else {
          var h = {
            unit: s,
            distance: o
          }, v = i ? g.before(e, l, h) || g.start(e, []) : g.after(e, l, h) || g.end(e, []);
          l = {
            anchor: l,
            focus: v
          }, c = !0;
        }
      }
      if (S.isPath(l)) {
        re.removeNodes(e, {
          at: l,
          voids: u
        });
        return;
      }
      if (!q.isCollapsed(l)) {
        if (!c) {
          var [, f] = q.edges(l), D = g.end(e, []);
          ye.equals(f, D) || (l = g.unhangRange(e, l, {
            voids: u
          }));
        }
        var [b, B] = q.edges(l), E = g.above(e, {
          match: (fe) => ue.isElement(fe) && g.isBlock(e, fe),
          at: b,
          voids: u
        }), C = g.above(e, {
          match: (fe) => ue.isElement(fe) && g.isBlock(e, fe),
          at: B,
          voids: u
        }), O = E && C && !S.equals(E[1], C[1]), A = S.equals(b.path, B.path), H = u ? null : (n = g.void(e, {
          at: b,
          mode: "highest"
        })) !== null && n !== void 0 ? n : g.elementReadOnly(e, {
          at: b,
          mode: "highest"
        }), P = u ? null : (a = g.void(e, {
          at: B,
          mode: "highest"
        })) !== null && a !== void 0 ? a : g.elementReadOnly(e, {
          at: B,
          mode: "highest"
        });
        if (H) {
          var W = g.before(e, b);
          W && E && S.isAncestor(E[1], W.path) && (b = W);
        }
        if (P) {
          var R = g.after(e, B);
          R && C && S.isAncestor(C[1], R.path) && (B = R);
        }
        var M = [], z;
        for (var _ of g.nodes(e, {
          at: l,
          voids: u
        })) {
          var [$, Y] = _;
          z && S.compare(Y, z) === 0 || (!u && ue.isElement($) && (g.isVoid(e, $) || g.isElementReadOnly(e, $)) || !S.isCommon(Y, b.path) && !S.isCommon(Y, B.path)) && (M.push(_), z = Y);
        }
        var V = Array.from(M, (fe) => {
          var [, ce] = fe;
          return g.pathRef(e, ce);
        }), ee = g.pointRef(e, b), ie = g.pointRef(e, B), j = "";
        if (!A && !H) {
          var G = ee.current, [J] = g.leaf(e, G), {
            path: U
          } = G, {
            offset: ne
          } = b, F = J.text.slice(ne);
          F.length > 0 && (e.apply({
            type: "remove_text",
            path: U,
            offset: ne,
            text: F
          }), j = F);
        }
        if (V.reverse().map((fe) => fe.unref()).filter((fe) => fe !== null).forEach((fe) => re.removeNodes(e, {
          at: fe,
          voids: u
        })), !P) {
          var w = ie.current, [N] = g.leaf(e, w), {
            path: T
          } = w, I = A ? b.offset : 0, Z = N.text.slice(I, B.offset);
          Z.length > 0 && (e.apply({
            type: "remove_text",
            path: T,
            offset: I,
            text: Z
          }), j = Z);
        }
        !A && O && ie.current && ee.current && re.mergeNodes(e, {
          at: ie.current,
          hanging: !0,
          voids: u
        }), d && i && s === "character" && j.length > 1 && j.match(/[\u0E00-\u0E7F]+/) && re.insertText(e, j.slice(0, j.length - o));
        var te = ee.unref(), Q = ie.unref(), pe = i ? te || Q : Q || te;
        r.at == null && pe && re.select(e, pe);
      }
    }
  });
}, wg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: i = !1
    } = n, {
      at: s = Es(e),
      batchDirty: o = !0
    } = n;
    if (r.length) {
      if (q.isRange(s))
        if (a || (s = g.unhangRange(e, s, {
          voids: i
        })), q.isCollapsed(s))
          s = s.anchor;
        else {
          var [, u] = q.edges(s);
          if (!i && g.void(e, {
            at: u
          }))
            return;
          var l = g.pointRef(e, u);
          re.delete(e, {
            at: s
          }), s = l.unref();
        }
      else S.isPath(s) && (s = g.start(e, s));
      if (!(!i && g.void(e, {
        at: s
      }))) {
        var c = g.above(e, {
          at: s,
          match: (F) => ue.isElement(F) && g.isInline(e, F),
          mode: "highest",
          voids: i
        });
        if (c) {
          var [, d] = c;
          if (g.isEnd(e, s, d)) {
            var p = g.after(e, d);
            s = p;
          } else if (g.isStart(e, s, d)) {
            var m = g.before(e, d);
            s = m;
          }
        }
        var h = g.above(e, {
          match: (F) => ue.isElement(F) && g.isBlock(e, F),
          at: s,
          voids: i
        }), [, v] = h, f = g.isStart(e, s, v), D = g.isEnd(e, s, v), b = f && D, B = !f || f && D, E = !D, [, C] = se.first({
          children: r
        }, []), [, O] = se.last({
          children: r
        }, []), A = [], H = (F) => {
          var [w, N] = F, T = N.length === 0;
          return T ? !1 : b ? !0 : !(B && S.isAncestor(N, C) && ue.isElement(w) && !e.isVoid(w) && !e.isInline(w) || E && S.isAncestor(N, O) && ue.isElement(w) && !e.isVoid(w) && !e.isInline(w));
        };
        for (var P of se.nodes({
          children: r
        }, {
          pass: H
        }))
          H(P) && A.push(P);
        var W = [], R = [], M = [], z = !0, _ = !1;
        for (var [$] of A)
          ue.isElement($) && !e.isInline($) ? (z = !1, _ = !0, R.push($)) : z ? W.push($) : M.push($);
        var [Y] = g.nodes(e, {
          at: s,
          match: (F) => le.isText(F) || g.isInline(e, F),
          mode: "highest",
          voids: i
        }), [, V] = Y, ee = g.isStart(e, s, V), ie = g.isEnd(e, s, V), j = g.pathRef(e, D && !M.length ? S.next(v) : v), G = g.pathRef(e, ie ? S.next(V) : V);
        re.splitNodes(e, {
          at: s,
          match: (F) => _ ? ue.isElement(F) && g.isBlock(e, F) : le.isText(F) || g.isInline(e, F),
          mode: _ ? "lowest" : "highest",
          always: _ && (!f || W.length > 0) && (!D || M.length > 0),
          voids: i
        });
        var J = g.pathRef(e, !ee || ee && ie ? S.next(V) : V);
        if (re.insertNodes(e, W, {
          at: J.current,
          match: (F) => le.isText(F) || g.isInline(e, F),
          mode: "highest",
          voids: i,
          batchDirty: o
        }), b && !W.length && R.length && !M.length && re.delete(e, {
          at: v,
          voids: i
        }), re.insertNodes(e, R, {
          at: j.current,
          match: (F) => ue.isElement(F) && g.isBlock(e, F),
          mode: "lowest",
          voids: i,
          batchDirty: o
        }), re.insertNodes(e, M, {
          at: G.current,
          match: (F) => le.isText(F) || g.isInline(e, F),
          mode: "highest",
          voids: i,
          batchDirty: o
        }), !n.at) {
          var U;
          if (M.length > 0 && G.current ? U = S.previous(G.current) : R.length > 0 && j.current ? U = S.previous(j.current) : J.current && (U = S.previous(J.current)), U) {
            var ne = g.end(e, U);
            re.select(e, ne);
          }
        }
        J.unref(), j.unref(), G.unref();
      }
    }
  });
}, Og = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    edge: n = "anchor"
  } = r, {
    selection: a
  } = e;
  if (a) {
    if (n === "anchor")
      re.select(e, a.anchor);
    else if (n === "focus")
      re.select(e, a.focus);
    else if (n === "start") {
      var [i] = q.edges(a);
      re.select(e, i);
    } else if (n === "end") {
      var [, s] = q.edges(a);
      re.select(e, s);
    }
  } else return;
}, xg = (t) => {
  var {
    selection: e
  } = t;
  e && t.apply({
    type: "set_selection",
    properties: e,
    newProperties: null
  });
}, Bg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, {
    selection: n
  } = e, {
    distance: a = 1,
    unit: i = "character",
    reverse: s = !1
  } = r, {
    edge: o = null
  } = r;
  if (n) {
    o === "start" && (o = q.isBackward(n) ? "focus" : "anchor"), o === "end" && (o = q.isBackward(n) ? "anchor" : "focus");
    var {
      anchor: u,
      focus: l
    } = n, c = {
      distance: a,
      unit: i,
      ignoreNonSelectable: !0
    }, d = {};
    if (o == null || o === "anchor") {
      var p = s ? g.before(e, u, c) : g.after(e, u, c);
      p && (d.anchor = p);
    }
    if (o == null || o === "focus") {
      var m = s ? g.before(e, l, c) : g.after(e, l, c);
      m && (d.focus = m);
    }
    re.setSelection(e, d);
  }
}, Lg = (t, e) => {
  var {
    selection: r
  } = t;
  if (e = g.range(t, e), r) {
    re.setSelection(t, e);
    return;
  }
  if (!q.isRange(e))
    throw new Error("When setting the selection and the current selection is `null` you must provide at least an `anchor` and `focus`, but you passed: ".concat(at.stringify(e)));
  t.apply({
    type: "set_selection",
    properties: r,
    newProperties: e
  });
};
function Ko(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Yo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ko(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ko(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Ag = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
    selection: a
  } = e, {
    edge: i = "both"
  } = n;
  if (a) {
    i === "start" && (i = q.isBackward(a) ? "focus" : "anchor"), i === "end" && (i = q.isBackward(a) ? "anchor" : "focus");
    var {
      anchor: s,
      focus: o
    } = a, u = i === "anchor" ? s : o;
    re.setSelection(e, {
      [i === "anchor" ? "anchor" : "focus"]: Yo(Yo({}, u), r)
    });
  }
}, Sg = (t, e) => {
  var {
    selection: r
  } = t, n = {}, a = {};
  if (r) {
    for (var i in e)
      (i === "anchor" && e.anchor != null && !ye.equals(e.anchor, r.anchor) || i === "focus" && e.focus != null && !ye.equals(e.focus, r.focus) || i !== "anchor" && i !== "focus" && e[i] !== r[i]) && (n[i] = r[i], a[i] = e[i]);
    Object.keys(n).length > 0 && t.apply({
      type: "set_selection",
      properties: n,
      newProperties: a
    });
  }
}, Pg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: a = !1,
      voids: i = !1,
      mode: s = "lowest",
      batchDirty: o = !0
    } = n, {
      at: u,
      match: l,
      select: c
    } = n;
    if (se.isNode(r) && (r = [r]), r.length !== 0) {
      var [d] = r;
      if (u || (u = Es(e), c !== !1 && (c = !0)), c == null && (c = !1), q.isRange(u))
        if (a || (u = g.unhangRange(e, u, {
          voids: i
        })), q.isCollapsed(u))
          u = u.anchor;
        else {
          var [, p] = q.edges(u), m = g.pointRef(e, p);
          re.delete(e, {
            at: u
          }), u = m.unref();
        }
      if (ye.isPoint(u)) {
        l == null && (le.isText(d) ? l = (W) => le.isText(W) : e.isInline(d) ? l = (W) => le.isText(W) || g.isInline(e, W) : l = (W) => ue.isElement(W) && g.isBlock(e, W));
        var [h] = g.nodes(e, {
          at: u.path,
          match: l,
          mode: s,
          voids: i
        });
        if (h) {
          var [, v] = h, f = g.pathRef(e, v), D = g.isEnd(e, u, v);
          re.splitNodes(e, {
            at: u,
            match: l,
            mode: s,
            voids: i
          });
          var b = f.unref();
          u = D ? S.next(b) : b;
        } else
          return;
      }
      var B = S.parent(u), E = u[u.length - 1];
      if (!(!i && g.void(e, {
        at: B
      }))) {
        if (o) {
          var C = [], O = S.levels(B);
          dv(e, () => {
            var W = function() {
              var z = B.concat(E);
              E++;
              var _ = {
                type: "insert_node",
                path: z,
                node: R
              };
              e.apply(_), u = S.next(u), C.push(_), le.isText ? O.push(...Array.from(se.nodes(R), ($) => {
                var [, Y] = $;
                return z.concat(Y);
              })) : O.push(z);
            };
            for (var R of r)
              W();
          }, () => {
            bf(e, O, (W) => {
              var R = W;
              for (var M of C)
                if (S.operationCanTransformPath(M) && (R = S.transform(R, M), !R))
                  return null;
              return R;
            });
          });
        } else
          for (var A of r) {
            var H = B.concat(E);
            E++, e.apply({
              type: "insert_node",
              path: H,
              node: A
            }), u = S.next(u);
          }
        if (u = S.previous(u), c) {
          var P = g.end(e, u);
          P && re.select(e, P);
        }
      }
    }
  });
}, Fg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      at: n = e.selection,
      mode: a = "lowest",
      voids: i = !1
    } = r, {
      match: s
    } = r;
    if (s == null && (s = S.isPath(n) ? Kr(e, n) : (E) => ue.isElement(E) && g.isBlock(e, E)), !!n) {
      var o = g.nodes(e, {
        at: n,
        match: s,
        mode: a,
        voids: i
      }), u = Array.from(o, (E) => {
        var [, C] = E;
        return g.pathRef(e, C);
      });
      for (var l of u) {
        var c = l.unref();
        if (c.length < 2)
          throw new Error("Cannot lift node at a path [".concat(c, "] because it has a depth of less than `2`."));
        var d = g.node(e, S.parent(c)), [p, m] = d, h = c[c.length - 1], {
          length: v
        } = p.children;
        if (v === 1) {
          var f = S.next(m);
          re.moveNodes(e, {
            at: c,
            to: f,
            voids: i
          }), re.removeNodes(e, {
            at: m,
            voids: i
          });
        } else if (h === 0)
          re.moveNodes(e, {
            at: c,
            to: m,
            voids: i
          });
        else if (h === v - 1) {
          var D = S.next(m);
          re.moveNodes(e, {
            at: c,
            to: D,
            voids: i
          });
        } else {
          var b = S.next(c), B = S.next(m);
          re.splitNodes(e, {
            at: b,
            voids: i
          }), re.moveNodes(e, {
            at: c,
            to: B,
            voids: i
          });
        }
      }
    }
  });
}, Tg = ["text"], Mg = ["children"], Ef = (t, e) => {
  if (ue.isElement(e)) {
    var r = e;
    return g.isVoid(t, e) ? !0 : r.children.length === 1 ? Ef(t, r.children[0]) : !1;
  } else return !g.isEditor(e);
}, kg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      match: n,
      at: a = e.selection
    } = r, {
      hanging: i = !1,
      voids: s = !1,
      mode: o = "lowest"
    } = r;
    if (a) {
      if (n == null)
        if (S.isPath(a)) {
          var [u] = g.parent(e, a);
          n = (W) => u.children.includes(W);
        } else
          n = (W) => ue.isElement(W) && g.isBlock(e, W);
      if (!i && q.isRange(a) && (a = g.unhangRange(e, a, {
        voids: s
      })), q.isRange(a))
        if (q.isCollapsed(a))
          a = a.anchor;
        else {
          var [, l] = q.edges(a), c = g.pointRef(e, l);
          re.delete(e, {
            at: a
          }), a = c.unref(), r.at == null && re.select(e, a);
        }
      var [d] = g.nodes(e, {
        at: a,
        match: n,
        voids: s,
        mode: o
      }), p = g.previous(e, {
        at: a,
        match: n,
        voids: s,
        mode: o
      });
      if (!(!d || !p)) {
        var [m, h] = d, [v, f] = p;
        if (!(h.length === 0 || f.length === 0)) {
          var D = S.next(f), b = S.common(h, f), B = S.isSibling(h, f), E = Array.from(g.levels(e, {
            at: h
          }), (W) => {
            var [R] = W;
            return R;
          }).slice(b.length).slice(0, -1), C = g.above(e, {
            at: h,
            mode: "highest",
            match: (W) => E.includes(W) && Ef(e, W)
          }), O = C && g.pathRef(e, C[1]), A, H;
          if (le.isText(m) && le.isText(v)) {
            var P = Vt(m, Tg);
            H = v.text.length, A = P;
          } else if (ue.isElement(m) && ue.isElement(v)) {
            var P = Vt(m, Mg);
            H = v.children.length, A = P;
          } else
            throw new Error("Cannot merge the node at path [".concat(h, "] with the previous sibling because it is not the same kind: ").concat(at.stringify(m), " ").concat(at.stringify(v)));
          B || re.moveNodes(e, {
            at: h,
            to: D,
            voids: s
          }), O && re.removeNodes(e, {
            at: O.current,
            voids: s
          }), g.shouldMergeNodesRemovePrevNode(e, p, d) ? re.removeNodes(e, {
            at: f,
            voids: s
          }) : e.apply({
            type: "merge_node",
            path: D,
            position: H,
            properties: A
          }), O && O.unref();
        }
      }
    }
  });
}, jg = (t, e) => {
  g.withoutNormalizing(t, () => {
    var {
      to: r,
      at: n = t.selection,
      mode: a = "lowest",
      voids: i = !1
    } = e, {
      match: s
    } = e;
    if (n) {
      s == null && (s = S.isPath(n) ? Kr(t, n) : (m) => ue.isElement(m) && g.isBlock(t, m));
      var o = g.pathRef(t, r), u = g.nodes(t, {
        at: n,
        match: s,
        mode: a,
        voids: i
      }), l = Array.from(u, (m) => {
        var [, h] = m;
        return g.pathRef(t, h);
      });
      for (var c of l) {
        var d = c.unref(), p = o.current;
        d.length !== 0 && t.apply({
          type: "move_node",
          path: d,
          newPath: p
        }), o.current && S.isSibling(p, d) && S.isAfter(p, d) && (o.current = S.next(o.current));
      }
      o.unref();
    }
  });
}, Rg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      hanging: n = !1,
      voids: a = !1,
      mode: i = "lowest"
    } = r, {
      at: s = e.selection,
      match: o
    } = r;
    if (s) {
      o == null && (o = S.isPath(s) ? Kr(e, s) : (m) => ue.isElement(m) && g.isBlock(e, m)), !n && q.isRange(s) && (s = g.unhangRange(e, s, {
        voids: a
      }));
      var u = g.nodes(e, {
        at: s,
        match: o,
        mode: i,
        voids: a
      }), l = Array.from(u, (m) => {
        var [, h] = m;
        return g.pathRef(e, h);
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
}, Ig = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      match: a,
      at: i = e.selection,
      compare: s,
      merge: o
    } = n, {
      hanging: u = !1,
      mode: l = "lowest",
      split: c = !1,
      voids: d = !1
    } = n;
    if (i) {
      if (a == null && (a = S.isPath(i) ? Kr(e, i) : (H) => ue.isElement(H) && g.isBlock(e, H)), !u && q.isRange(i) && (i = g.unhangRange(e, i, {
        voids: d
      })), c && q.isRange(i)) {
        if (q.isCollapsed(i) && g.leaf(e, i.anchor)[0].text.length > 0)
          return;
        var p = g.rangeRef(e, i, {
          affinity: "inward"
        }), [m, h] = q.edges(i), v = l === "lowest" ? "lowest" : "highest", f = g.isEnd(e, h, h.path);
        re.splitNodes(e, {
          at: h,
          match: a,
          mode: v,
          voids: d,
          always: !f
        });
        var D = g.isStart(e, m, m.path);
        re.splitNodes(e, {
          at: m,
          match: a,
          mode: v,
          voids: d,
          always: !D
        }), i = p.unref(), n.at == null && re.select(e, i);
      }
      s || (s = (H, P) => H !== P);
      for (var [b, B] of g.nodes(e, {
        at: i,
        match: a,
        mode: l,
        voids: d
      })) {
        var E = {}, C = {};
        if (B.length !== 0) {
          var O = !1;
          for (var A in r)
            A === "children" || A === "text" || s(r[A], b[A]) && (O = !0, b.hasOwnProperty(A) && (E[A] = b[A]), o ? r[A] != null && (C[A] = o(b[A], r[A])) : r[A] != null && (C[A] = r[A]));
          O && e.apply({
            type: "set_node",
            path: B,
            properties: E,
            newProperties: C
          });
        }
      }
    }
  });
}, Ng = (t, e) => {
  if (q.isCollapsed(e))
    return e.anchor;
  var [, r] = q.edges(e), n = g.pointRef(t, r);
  return re.delete(t, {
    at: e
  }), n.unref();
}, _g = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      voids: a = !1
    } = r, {
      match: i,
      at: s = e.selection,
      height: o = 0,
      always: u = !1
    } = r;
    if (i == null && (i = (ie) => ue.isElement(ie) && g.isBlock(e, ie)), q.isRange(s) && (s = Ng(e, s)), S.isPath(s)) {
      var l = s, c = g.point(e, l), [d] = g.parent(e, l);
      i = (ie) => ie === d, o = c.path.length - l.length + 1, s = c, u = !0;
    }
    if (s) {
      var p = g.pointRef(e, s, {
        affinity: "backward"
      }), m;
      try {
        var [h] = g.nodes(e, {
          at: s,
          match: i,
          mode: n,
          voids: a
        });
        if (!h)
          return;
        var v = g.void(e, {
          at: s,
          mode: "highest"
        }), f = 0;
        if (!a && v) {
          var [D, b] = v;
          if (ue.isElement(D) && e.isInline(D)) {
            var B = g.after(e, b);
            if (!B) {
              var E = {
                text: ""
              }, C = S.next(b);
              re.insertNodes(e, E, {
                at: C,
                voids: a
              }), B = g.point(e, C);
            }
            s = B, u = !0;
          }
          var O = s.path.length - b.length;
          o = O + 1, u = !0;
        }
        m = g.pointRef(e, s);
        var A = s.path.length - o, [, H] = h, P = s.path.slice(0, A), W = o === 0 ? s.offset : s.path[A] + f;
        for (var [R, M] of g.levels(e, {
          at: P,
          reverse: !0,
          voids: a
        })) {
          var z = !1;
          if (M.length < H.length || M.length === 0 || !a && ue.isElement(R) && g.isVoid(e, R))
            break;
          var _ = p.current, $ = g.isEnd(e, _, M);
          if (u || !p || !g.isEdge(e, _, M)) {
            z = !0;
            var Y = se.extractProps(R);
            e.apply({
              type: "split_node",
              path: M,
              position: W,
              properties: Y
            });
          }
          W = M[M.length - 1] + (z || $ ? 1 : 0);
        }
        if (r.at == null) {
          var V = m.current || g.end(e, []);
          re.select(e, V);
        }
      } finally {
        var ee;
        p.unref(), (ee = m) === null || ee === void 0 || ee.unref();
      }
    }
  });
}, $g = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  Array.isArray(r) || (r = [r]);
  var a = {};
  for (var i of r)
    a[i] = null;
  re.setNodes(e, a, n);
}, zg = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: n = "lowest",
      split: a = !1,
      voids: i = !1
    } = r, {
      at: s = e.selection,
      match: o
    } = r;
    if (s) {
      o == null && (o = S.isPath(s) ? Kr(e, s) : (m) => ue.isElement(m) && g.isBlock(e, m)), S.isPath(s) && (s = g.range(e, s));
      var u = q.isRange(s) ? g.rangeRef(e, s) : null, l = g.nodes(e, {
        at: s,
        match: o,
        mode: n,
        voids: i
      }), c = Array.from(
        l,
        (m) => {
          var [, h] = m;
          return g.pathRef(e, h);
        }
        // unwrapNode will call liftNode which does not support splitting the node when nested.
        // If we do not reverse the order and call it from top to the bottom, it will remove all blocks
        // that wrap target node. So we reverse the order.
      ).reverse(), d = function() {
        var h = p.unref(), [v] = g.node(e, h), f = g.range(e, h);
        a && u && (f = q.intersection(u.current, f)), re.liftNodes(e, {
          at: f,
          match: (D) => ue.isAncestor(v) && v.children.includes(D),
          voids: i
        });
      };
      for (var p of c)
        d();
      u && u.unref();
    }
  });
};
function Xo(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Jo(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xo(Object(r), !0).forEach(function(n) {
      ht(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Xo(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Wg = function(e, r) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  g.withoutNormalizing(e, () => {
    var {
      mode: a = "lowest",
      split: i = !1,
      voids: s = !1
    } = n, {
      match: o,
      at: u = e.selection
    } = n;
    if (u) {
      if (o == null && (S.isPath(u) ? o = Kr(e, u) : e.isInline(r) ? o = (f) => ue.isElement(f) && g.isInline(e, f) || le.isText(f) : o = (f) => ue.isElement(f) && g.isBlock(e, f)), i && q.isRange(u)) {
        var [l, c] = q.edges(u), d = g.rangeRef(e, u, {
          affinity: "inward"
        });
        re.splitNodes(e, {
          at: c,
          match: o,
          voids: s
        }), re.splitNodes(e, {
          at: l,
          match: o,
          voids: s
        }), u = d.unref(), n.at == null && re.select(e, u);
      }
      var p = Array.from(g.nodes(e, {
        at: u,
        match: e.isInline(r) ? (f) => ue.isElement(f) && g.isBlock(e, f) : (f) => g.isEditor(f),
        mode: "lowest",
        voids: s
      })), m = function() {
        var D = q.isRange(u) ? q.intersection(u, g.range(e, v)) : u;
        if (!D)
          return 0;
        var b = Array.from(g.nodes(e, {
          at: D,
          match: o,
          mode: a,
          voids: s
        }));
        if (b.length > 0) {
          var [B] = b, E = b[b.length - 1], [, C] = B, [, O] = E;
          if (C.length === 0 && O.length === 0)
            return 0;
          var A = S.equals(C, O) ? S.parent(C) : S.common(C, O), H = g.range(e, C, O), P = g.node(e, A), [W] = P, R = A.length + 1, M = S.next(O.slice(0, R)), z = Jo(Jo({}, r), {}, {
            children: []
          });
          re.insertNodes(e, z, {
            at: M,
            voids: s
          }), re.moveNodes(e, {
            at: H,
            match: (_) => ue.isAncestor(W) && W.children.includes(_),
            to: M.concat(0),
            voids: s
          });
        }
      }, h;
      for (var [, v] of p)
        h = m();
    }
  });
}, Hg = () => {
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
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pv(t, ...n);
    },
    // Editor
    addMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Cv(t, ...n);
    },
    deleteBackward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ev(t, ...n);
    },
    deleteForward: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wv(t, ...n);
    },
    deleteFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ov(t, ...n);
    },
    getFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vv(t, ...n);
    },
    insertBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jv(t, ...n);
    },
    insertSoftBreak: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Iv(t, ...n);
    },
    insertFragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return wg(t, ...n);
    },
    insertNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Rv(t, ...n);
    },
    insertText: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _v(t, ...n);
    },
    normalizeNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gv(t, ...n);
    },
    removeMark: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return vg(t, ...n);
    },
    getDirtyPaths: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return hv(t, ...n);
    },
    shouldNormalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mv(t, ...n);
    },
    // Editor interface
    above: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yv(t, ...n);
    },
    after: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Dv(t, ...n);
    },
    before: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bv(t, ...n);
    },
    collapse: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Og(t, ...n);
    },
    delete: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Eg(t, ...n);
    },
    deselect: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xg(t, ...n);
    },
    edges: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return xv(t, ...n);
    },
    elementReadOnly: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Bv(t, ...n);
    },
    end: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Lv(t, ...n);
    },
    first: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Av(t, ...n);
    },
    fragment: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sv(t, ...n);
    },
    getMarks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Xv(t, ...n);
    },
    hasBlocks: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fv(t, ...n);
    },
    hasInlines: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Tv(t, ...n);
    },
    hasPath: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Mv(t, ...n);
    },
    hasTexts: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return kv(t, ...n);
    },
    insertNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Pg(t, ...n);
    },
    isBlock: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $v(t, ...n);
    },
    isEdge: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zv(t, ...n);
    },
    isEmpty: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wv(t, ...n);
    },
    isEnd: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Hv(t, ...n);
    },
    isNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Uv(t, ...n);
    },
    isStart: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Vv(t, ...n);
    },
    last: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return qv(t, ...n);
    },
    leaf: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Gv(t, ...n);
    },
    levels: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Zv(t, ...n);
    },
    liftNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Fg(t, ...n);
    },
    mergeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return kg(t, ...n);
    },
    move: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Bg(t, ...n);
    },
    moveNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return jg(t, ...n);
    },
    next: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Jv(t, ...n);
    },
    node: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Qv(t, ...n);
    },
    nodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return eg(t, ...n);
    },
    normalize: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return tg(t, ...n);
    },
    parent: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return rg(t, ...n);
    },
    path: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ig(t, ...n);
    },
    pathRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ng(t, ...n);
    },
    pathRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ag(t, ...n);
    },
    point: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return ug(t, ...n);
    },
    pointRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return sg(t, ...n);
    },
    pointRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return og(t, ...n);
    },
    positions: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return lg(t, ...n);
    },
    previous: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return cg(t, ...n);
    },
    range: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return pg(t, ...n);
    },
    rangeRef: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return fg(t, ...n);
    },
    rangeRefs: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return dg(t, ...n);
    },
    removeNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Rg(t, ...n);
    },
    select: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Lg(t, ...n);
    },
    setNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ig(t, ...n);
    },
    setNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return gg(t, ...n);
    },
    setPoint: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Ag(t, ...n);
    },
    setSelection: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Sg(t, ...n);
    },
    splitNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return _g(t, ...n);
    },
    start: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return mg(t, ...n);
    },
    string: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return yg(t, ...n);
    },
    unhangRange: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Cg(t, ...n);
    },
    unsetNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return $g(t, ...n);
    },
    unwrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return zg(t, ...n);
    },
    void: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Pv(t, ...n);
    },
    withoutNormalizing: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Dg(t, ...n);
    },
    wrapNodes: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return Wg(t, ...n);
    },
    shouldMergeNodesRemovePrevNode: function() {
      for (var r = arguments.length, n = new Array(r), a = 0; a < r; a++)
        n[a] = arguments[a];
      return bg(t, ...n);
    }
  };
  return t;
};
const wf = (t) => {
  if (le.isText(t)) {
    let e = t.text;
    return t.bold && (e = `<strong>${e}</strong>`), t.code && (e = `<code>${e}</code>`), t.italic && (e = `<em>${e}</em>`), t.underline && (e = `<u>${e}</u>`), e;
  }
  if (ue.isElement(t)) {
    const e = t.children.map((n) => wf(n)).join(""), r = t.align || "left";
    switch (t.type) {
      case "image":
        return `<img src="${t.src}" class="align_${r}" />`;
      case "paragraph":
        return `<p class="align_${r}">${e}</p>`;
      case "blockQuote":
        return `<blockquote class="align_${r}">${e}</blockquote>`;
      case "bulletedList":
        return `<ul class="align_${r}">${e}</ul>`;
      case "headingOne":
        return `<h1 class="align_${r}">${e}</h1>`;
      case "headingTwo":
        return `<h2 class="align_${r}">${e}</h2>`;
      case "listItem":
        return `<li class="align_${r}">${e}</li>`;
      case "numberedList":
        return `<ol class="align_${r}">${e}</ol>`;
      default:
        return e;
    }
  }
  return "";
}, KO = (t) => t.map((e) => wf(e)).join("");
var Of = {}, xs = {}, Bs = {};
Object.defineProperty(Bs, "__esModule", { value: !0 });
Bs.default = Gg;
var Qo = "html", eu = "head", In = "body", Ug = /<([a-zA-Z]+[0-9]?)/, tu = /<head[^]*>/i, ru = /<body[^]*>/i, Da = function(t, e) {
  throw new Error("This browser does not support `document.implementation.createHTMLDocument`");
}, qi = function(t, e) {
  throw new Error("This browser does not support `DOMParser.prototype.parseFromString`");
}, nu = typeof window == "object" && window.DOMParser;
if (typeof nu == "function") {
  var Vg = new nu(), qg = "text/html";
  qi = function(t, e) {
    return e && (t = "<".concat(e, ">").concat(t, "</").concat(e, ">")), Vg.parseFromString(t, qg);
  }, Da = qi;
}
if (typeof document == "object" && document.implementation) {
  var Nn = document.implementation.createHTMLDocument();
  Da = function(t, e) {
    if (e) {
      var r = Nn.documentElement.querySelector(e);
      return r && (r.innerHTML = t), Nn;
    }
    return Nn.documentElement.innerHTML = t, Nn;
  };
}
var _n = typeof document == "object" && document.createElement("template"), Gi;
_n && _n.content && (Gi = function(t) {
  return _n.innerHTML = t, _n.content.childNodes;
});
function Gg(t) {
  var e, r, n = t.match(Ug), a = n && n[1] ? n[1].toLowerCase() : "";
  switch (a) {
    case Qo: {
      var i = qi(t);
      if (!tu.test(t)) {
        var s = i.querySelector(eu);
        (e = s == null ? void 0 : s.parentNode) === null || e === void 0 || e.removeChild(s);
      }
      if (!ru.test(t)) {
        var s = i.querySelector(In);
        (r = s == null ? void 0 : s.parentNode) === null || r === void 0 || r.removeChild(s);
      }
      return i.querySelectorAll(Qo);
    }
    case eu:
    case In: {
      var o = Da(t).querySelectorAll(a);
      return ru.test(t) && tu.test(t) ? o[0].parentNode.childNodes : o;
    }
    default: {
      if (Gi)
        return Gi(t);
      var s = Da(t, In).querySelector(In);
      return s.childNodes;
    }
  }
}
var za = {}, Ls = {}, As = {};
(function(t) {
  Object.defineProperty(t, "__esModule", { value: !0 }), t.Doctype = t.CDATA = t.Tag = t.Style = t.Script = t.Comment = t.Directive = t.Text = t.Root = t.isTag = t.ElementType = void 0;
  var e;
  (function(n) {
    n.Root = "root", n.Text = "text", n.Directive = "directive", n.Comment = "comment", n.Script = "script", n.Style = "style", n.Tag = "tag", n.CDATA = "cdata", n.Doctype = "doctype";
  })(e = t.ElementType || (t.ElementType = {}));
  function r(n) {
    return n.type === e.Tag || n.type === e.Script || n.type === e.Style;
  }
  t.isTag = r, t.Root = e.Root, t.Text = e.Text, t.Directive = e.Directive, t.Comment = e.Comment, t.Script = e.Script, t.Style = e.Style, t.Tag = e.Tag, t.CDATA = e.CDATA, t.Doctype = e.Doctype;
})(As);
var De = {}, fr = Ie && Ie.__extends || /* @__PURE__ */ function() {
  var t = function(e, r) {
    return t = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, a) {
      n.__proto__ = a;
    } || function(n, a) {
      for (var i in a) Object.prototype.hasOwnProperty.call(a, i) && (n[i] = a[i]);
    }, t(e, r);
  };
  return function(e, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    t(e, r);
    function n() {
      this.constructor = e;
    }
    e.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), dn = Ie && Ie.__assign || function() {
  return dn = Object.assign || function(t) {
    for (var e, r = 1, n = arguments.length; r < n; r++) {
      e = arguments[r];
      for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    }
    return t;
  }, dn.apply(this, arguments);
};
Object.defineProperty(De, "__esModule", { value: !0 });
De.cloneNode = De.hasChildren = De.isDocument = De.isDirective = De.isComment = De.isText = De.isCDATA = De.isTag = De.Element = De.Document = De.CDATA = De.NodeWithChildren = De.ProcessingInstruction = De.Comment = De.Text = De.DataNode = De.Node = void 0;
var Ct = As, Ss = (
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
      return e === void 0 && (e = !1), Ps(this, e);
    }, t;
  }()
);
De.Node = Ss;
var Wa = (
  /** @class */
  function(t) {
    fr(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return n.data = r, n;
    }
    return Object.defineProperty(e.prototype, "nodeValue", {
      /**
       * Same as {@link data}.
       * [DOM spec](https://dom.spec.whatwg.org)-compatible alias.
       */
      get: function() {
        return this.data;
      },
      set: function(r) {
        this.data = r;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ss)
);
De.DataNode = Wa;
var xf = (
  /** @class */
  function(t) {
    fr(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Ct.ElementType.Text, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 3;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Wa)
);
De.Text = xf;
var Bf = (
  /** @class */
  function(t) {
    fr(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Ct.ElementType.Comment, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 8;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Wa)
);
De.Comment = Bf;
var Lf = (
  /** @class */
  function(t) {
    fr(e, t);
    function e(r, n) {
      var a = t.call(this, n) || this;
      return a.name = r, a.type = Ct.ElementType.Directive, a;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 1;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Wa)
);
De.ProcessingInstruction = Lf;
var Ha = (
  /** @class */
  function(t) {
    fr(e, t);
    function e(r) {
      var n = t.call(this) || this;
      return n.children = r, n;
    }
    return Object.defineProperty(e.prototype, "firstChild", {
      // Aliases
      /** First child of the node. */
      get: function() {
        var r;
        return (r = this.children[0]) !== null && r !== void 0 ? r : null;
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
      set: function(r) {
        this.children = r;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ss)
);
De.NodeWithChildren = Ha;
var Af = (
  /** @class */
  function(t) {
    fr(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Ct.ElementType.CDATA, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 4;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ha)
);
De.CDATA = Af;
var Sf = (
  /** @class */
  function(t) {
    fr(e, t);
    function e() {
      var r = t !== null && t.apply(this, arguments) || this;
      return r.type = Ct.ElementType.Root, r;
    }
    return Object.defineProperty(e.prototype, "nodeType", {
      get: function() {
        return 9;
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ha)
);
De.Document = Sf;
var Pf = (
  /** @class */
  function(t) {
    fr(e, t);
    function e(r, n, a, i) {
      a === void 0 && (a = []), i === void 0 && (i = r === "script" ? Ct.ElementType.Script : r === "style" ? Ct.ElementType.Style : Ct.ElementType.Tag);
      var s = t.call(this, a) || this;
      return s.name = r, s.attribs = n, s.type = i, s;
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
      set: function(r) {
        this.name = r;
      },
      enumerable: !1,
      configurable: !0
    }), Object.defineProperty(e.prototype, "attributes", {
      get: function() {
        var r = this;
        return Object.keys(this.attribs).map(function(n) {
          var a, i;
          return {
            name: n,
            value: r.attribs[n],
            namespace: (a = r["x-attribsNamespace"]) === null || a === void 0 ? void 0 : a[n],
            prefix: (i = r["x-attribsPrefix"]) === null || i === void 0 ? void 0 : i[n]
          };
        });
      },
      enumerable: !1,
      configurable: !0
    }), e;
  }(Ha)
);
De.Element = Pf;
function Ff(t) {
  return (0, Ct.isTag)(t);
}
De.isTag = Ff;
function Tf(t) {
  return t.type === Ct.ElementType.CDATA;
}
De.isCDATA = Tf;
function Mf(t) {
  return t.type === Ct.ElementType.Text;
}
De.isText = Mf;
function kf(t) {
  return t.type === Ct.ElementType.Comment;
}
De.isComment = kf;
function jf(t) {
  return t.type === Ct.ElementType.Directive;
}
De.isDirective = jf;
function Rf(t) {
  return t.type === Ct.ElementType.Root;
}
De.isDocument = Rf;
function Zg(t) {
  return Object.prototype.hasOwnProperty.call(t, "children");
}
De.hasChildren = Zg;
function Ps(t, e) {
  e === void 0 && (e = !1);
  var r;
  if (Mf(t))
    r = new xf(t.data);
  else if (kf(t))
    r = new Bf(t.data);
  else if (Ff(t)) {
    var n = e ? ci(t.children) : [], a = new Pf(t.name, dn({}, t.attribs), n);
    n.forEach(function(u) {
      return u.parent = a;
    }), t.namespace != null && (a.namespace = t.namespace), t["x-attribsNamespace"] && (a["x-attribsNamespace"] = dn({}, t["x-attribsNamespace"])), t["x-attribsPrefix"] && (a["x-attribsPrefix"] = dn({}, t["x-attribsPrefix"])), r = a;
  } else if (Tf(t)) {
    var n = e ? ci(t.children) : [], i = new Af(n);
    n.forEach(function(l) {
      return l.parent = i;
    }), r = i;
  } else if (Rf(t)) {
    var n = e ? ci(t.children) : [], s = new Sf(n);
    n.forEach(function(l) {
      return l.parent = s;
    }), t["x-mode"] && (s["x-mode"] = t["x-mode"]), r = s;
  } else if (jf(t)) {
    var o = new Lf(t.name, t.data);
    t["x-name"] != null && (o["x-name"] = t["x-name"], o["x-publicId"] = t["x-publicId"], o["x-systemId"] = t["x-systemId"]), r = o;
  } else
    throw new Error("Not implemented yet: ".concat(t.type));
  return r.startIndex = t.startIndex, r.endIndex = t.endIndex, t.sourceCodeLocation != null && (r.sourceCodeLocation = t.sourceCodeLocation), r;
}
De.cloneNode = Ps;
function ci(t) {
  for (var e = t.map(function(n) {
    return Ps(n, !0);
  }), r = 1; r < e.length; r++)
    e[r].prev = e[r - 1], e[r - 1].next = e[r];
  return e;
}
(function(t) {
  var e = Ie && Ie.__createBinding || (Object.create ? function(o, u, l, c) {
    c === void 0 && (c = l);
    var d = Object.getOwnPropertyDescriptor(u, l);
    (!d || ("get" in d ? !u.__esModule : d.writable || d.configurable)) && (d = { enumerable: !0, get: function() {
      return u[l];
    } }), Object.defineProperty(o, c, d);
  } : function(o, u, l, c) {
    c === void 0 && (c = l), o[c] = u[l];
  }), r = Ie && Ie.__exportStar || function(o, u) {
    for (var l in o) l !== "default" && !Object.prototype.hasOwnProperty.call(u, l) && e(u, o, l);
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.DomHandler = void 0;
  var n = As, a = De;
  r(De, t);
  var i = {
    withStartIndices: !1,
    withEndIndices: !1,
    xmlMode: !1
  }, s = (
    /** @class */
    function() {
      function o(u, l, c) {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null, typeof l == "function" && (c = l, l = i), typeof u == "object" && (l = u, u = void 0), this.callback = u ?? null, this.options = l ?? i, this.elementCB = c ?? null;
      }
      return o.prototype.onparserinit = function(u) {
        this.parser = u;
      }, o.prototype.onreset = function() {
        this.dom = [], this.root = new a.Document(this.dom), this.done = !1, this.tagStack = [this.root], this.lastNode = null, this.parser = null;
      }, o.prototype.onend = function() {
        this.done || (this.done = !0, this.parser = null, this.handleCallback(null));
      }, o.prototype.onerror = function(u) {
        this.handleCallback(u);
      }, o.prototype.onclosetag = function() {
        this.lastNode = null;
        var u = this.tagStack.pop();
        this.options.withEndIndices && (u.endIndex = this.parser.endIndex), this.elementCB && this.elementCB(u);
      }, o.prototype.onopentag = function(u, l) {
        var c = this.options.xmlMode ? n.ElementType.Tag : void 0, d = new a.Element(u, l, void 0, c);
        this.addNode(d), this.tagStack.push(d);
      }, o.prototype.ontext = function(u) {
        var l = this.lastNode;
        if (l && l.type === n.ElementType.Text)
          l.data += u, this.options.withEndIndices && (l.endIndex = this.parser.endIndex);
        else {
          var c = new a.Text(u);
          this.addNode(c), this.lastNode = c;
        }
      }, o.prototype.oncomment = function(u) {
        if (this.lastNode && this.lastNode.type === n.ElementType.Comment) {
          this.lastNode.data += u;
          return;
        }
        var l = new a.Comment(u);
        this.addNode(l), this.lastNode = l;
      }, o.prototype.oncommentend = function() {
        this.lastNode = null;
      }, o.prototype.oncdatastart = function() {
        var u = new a.Text(""), l = new a.CDATA([u]);
        this.addNode(l), u.parent = l, this.lastNode = u;
      }, o.prototype.oncdataend = function() {
        this.lastNode = null;
      }, o.prototype.onprocessinginstruction = function(u, l) {
        var c = new a.ProcessingInstruction(u, l);
        this.addNode(c);
      }, o.prototype.handleCallback = function(u) {
        if (typeof this.callback == "function")
          this.callback(u, this.dom);
        else if (u)
          throw u;
      }, o.prototype.addNode = function(u) {
        var l = this.tagStack[this.tagStack.length - 1], c = l.children[l.children.length - 1];
        this.options.withStartIndices && (u.startIndex = this.parser.startIndex), this.options.withEndIndices && (u.endIndex = this.parser.endIndex), l.children.push(u), c && (u.prev = c, c.next = u), u.parent = l, this.lastNode = null;
      }, o;
    }()
  );
  t.DomHandler = s, t.default = s;
})(Ls);
var If = {};
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
  ], t.CASE_SENSITIVE_TAG_NAMES_MAP = t.CASE_SENSITIVE_TAG_NAMES.reduce(function(e, r) {
    return e[r.toLowerCase()] = r, e;
  }, {});
})(If);
Object.defineProperty(za, "__esModule", { value: !0 });
za.formatAttributes = Nf;
za.formatDOM = _f;
var $n = Ls, Kg = If;
function Yg(t) {
  return Kg.CASE_SENSITIVE_TAG_NAMES_MAP[t];
}
function Nf(t) {
  for (var e = {}, r = 0, n = t.length; r < n; r++) {
    var a = t[r];
    e[a.name] = a.value;
  }
  return e;
}
function Xg(t) {
  t = t.toLowerCase();
  var e = Yg(t);
  return e || t;
}
function _f(t, e, r) {
  e === void 0 && (e = null);
  for (var n = [], a, i = 0, s = t.length; i < s; i++) {
    var o = t[i];
    switch (o.nodeType) {
      case 1: {
        var u = Xg(o.nodeName);
        a = new $n.Element(u, Nf(o.attributes)), a.children = _f(
          // template children are on content
          u === "template" ? o.content.childNodes : o.childNodes,
          a
        );
        break;
      }
      case 3:
        a = new $n.Text(o.nodeValue);
        break;
      case 8:
        a = new $n.Comment(o.nodeValue);
        break;
      default:
        continue;
    }
    var l = n[i - 1] || null;
    l && (l.next = a), a.parent = e, a.prev = l, a.next = null, n.push(a);
  }
  return r && (a = new $n.ProcessingInstruction(r.substring(0, r.indexOf(" ")).toLowerCase(), r), a.next = n[0] || null, a.parent = e, n.unshift(a), n[1] && (n[1].prev = n[0])), n;
}
var Jg = Ie && Ie.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(xs, "__esModule", { value: !0 });
xs.default = rm;
var Qg = Jg(Bs), em = za, tm = /<(![a-zA-Z\s]+)>/;
function rm(t) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t)
    return [];
  var e = t.match(tm), r = e ? e[1] : void 0;
  return (0, em.formatDOM)((0, Qg.default)(t), null, r);
}
var Ua = {}, Mt = {}, Va = {}, nm = 0;
Va.SAME = nm;
var am = 1;
Va.CAMELCASE = am;
Va.possibleStandardNames = {
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
const $f = 0, dr = 1, qa = 2, Ga = 3, Fs = 4, zf = 5, Wf = 6;
function im(t) {
  return ut.hasOwnProperty(t) ? ut[t] : null;
}
function vt(t, e, r, n, a, i, s) {
  this.acceptsBooleans = e === qa || e === Ga || e === Fs, this.attributeName = n, this.attributeNamespace = a, this.mustUseProperty = r, this.propertyName = t, this.type = e, this.sanitizeURL = i, this.removeEmptyString = s;
}
const ut = {}, sm = [
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
sm.forEach((t) => {
  ut[t] = new vt(
    t,
    $f,
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
  ut[t] = new vt(
    t,
    dr,
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
  ut[t] = new vt(
    t,
    qa,
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
  ut[t] = new vt(
    t,
    qa,
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
  ut[t] = new vt(
    t,
    Ga,
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
  ut[t] = new vt(
    t,
    Ga,
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
  ut[t] = new vt(
    t,
    Fs,
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
  ut[t] = new vt(
    t,
    Wf,
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
  ut[t] = new vt(
    t,
    zf,
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
const Ts = /[\-\:]([a-z])/g, Ms = (t) => t[1].toUpperCase();
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
  const e = t.replace(Ts, Ms);
  ut[e] = new vt(
    e,
    dr,
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
  const e = t.replace(Ts, Ms);
  ut[e] = new vt(
    e,
    dr,
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
  const e = t.replace(Ts, Ms);
  ut[e] = new vt(
    e,
    dr,
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
  ut[t] = new vt(
    t,
    dr,
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
const om = "xlinkHref";
ut[om] = new vt(
  "xlinkHref",
  dr,
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
  ut[t] = new vt(
    t,
    dr,
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
  CAMELCASE: um,
  SAME: lm,
  possibleStandardNames: au
} = Va, cm = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", fm = cm + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", dm = RegExp.prototype.test.bind(
  // eslint-disable-next-line no-misleading-character-class
  new RegExp("^(data|aria)-[" + fm + "]*$")
), pm = Object.keys(
  au
).reduce((t, e) => {
  const r = au[e];
  return r === lm ? t[e] = e : r === um ? t[e.toLowerCase()] = e : t[e] = r, t;
}, {});
Mt.BOOLEAN = Ga;
Mt.BOOLEANISH_STRING = qa;
Mt.NUMERIC = zf;
Mt.OVERLOADED_BOOLEAN = Fs;
Mt.POSITIVE_NUMERIC = Wf;
Mt.RESERVED = $f;
Mt.STRING = dr;
Mt.getPropertyInfo = im;
Mt.isCustomAttribute = dm;
Mt.possibleStandardNames = pm;
var ks = {}, js = {}, iu = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, hm = /\n/g, vm = /^\s*/, gm = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, mm = /^:\s*/, ym = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, Cm = /^[;\s]*/, Dm = /^\s+|\s+$/g, bm = `
`, su = "/", ou = "*", wr = "", Em = "comment", wm = "declaration", Om = function(t, e) {
  if (typeof t != "string")
    throw new TypeError("First argument must be a string");
  if (!t) return [];
  e = e || {};
  var r = 1, n = 1;
  function a(h) {
    var v = h.match(hm);
    v && (r += v.length);
    var f = h.lastIndexOf(bm);
    n = ~f ? h.length - f : n + h.length;
  }
  function i() {
    var h = { line: r, column: n };
    return function(v) {
      return v.position = new s(h), l(), v;
    };
  }
  function s(h) {
    this.start = h, this.end = { line: r, column: n }, this.source = e.source;
  }
  s.prototype.content = t;
  function o(h) {
    var v = new Error(
      e.source + ":" + r + ":" + n + ": " + h
    );
    if (v.reason = h, v.filename = e.source, v.line = r, v.column = n, v.source = t, !e.silent) throw v;
  }
  function u(h) {
    var v = h.exec(t);
    if (v) {
      var f = v[0];
      return a(f), t = t.slice(f.length), v;
    }
  }
  function l() {
    u(vm);
  }
  function c(h) {
    var v;
    for (h = h || []; v = d(); )
      v !== !1 && h.push(v);
    return h;
  }
  function d() {
    var h = i();
    if (!(su != t.charAt(0) || ou != t.charAt(1))) {
      for (var v = 2; wr != t.charAt(v) && (ou != t.charAt(v) || su != t.charAt(v + 1)); )
        ++v;
      if (v += 2, wr === t.charAt(v - 1))
        return o("End of comment missing");
      var f = t.slice(2, v - 2);
      return n += 2, a(f), t = t.slice(v), n += 2, h({
        type: Em,
        comment: f
      });
    }
  }
  function p() {
    var h = i(), v = u(gm);
    if (v) {
      if (d(), !u(mm)) return o("property missing ':'");
      var f = u(ym), D = h({
        type: wm,
        property: uu(v[0].replace(iu, wr)),
        value: f ? uu(f[0].replace(iu, wr)) : wr
      });
      return u(Cm), D;
    }
  }
  function m() {
    var h = [];
    c(h);
    for (var v; v = p(); )
      v !== !1 && (h.push(v), c(h));
    return h;
  }
  return l(), m();
};
function uu(t) {
  return t ? t.replace(Dm, wr) : wr;
}
var xm = Ie && Ie.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(js, "__esModule", { value: !0 });
js.default = Lm;
var Bm = xm(Om);
function Lm(t, e) {
  var r = null;
  if (!t || typeof t != "string")
    return r;
  var n = (0, Bm.default)(t), a = typeof e == "function";
  return n.forEach(function(i) {
    if (i.type === "declaration") {
      var s = i.property, o = i.value;
      a ? e(s, o, i) : o && (r = r || {}, r[s] = o);
    }
  }), r;
}
var Za = {};
Object.defineProperty(Za, "__esModule", { value: !0 });
Za.camelCase = void 0;
var Am = /^--[a-zA-Z0-9_-]+$/, Sm = /-([a-z])/g, Pm = /^[^-]+$/, Fm = /^-(webkit|moz|ms|o|khtml)-/, Tm = /^-(ms)-/, Mm = function(t) {
  return !t || Pm.test(t) || Am.test(t);
}, km = function(t, e) {
  return e.toUpperCase();
}, lu = function(t, e) {
  return "".concat(e, "-");
}, jm = function(t, e) {
  return e === void 0 && (e = {}), Mm(t) ? t : (t = t.toLowerCase(), e.reactCompat ? t = t.replace(Tm, lu) : t = t.replace(Fm, lu), t.replace(Sm, km));
};
Za.camelCase = jm;
var Rm = Ie && Ie.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
}, Im = Rm(js), Nm = Za;
function Zi(t, e) {
  var r = {};
  return !t || typeof t != "string" || (0, Im.default)(t, function(n, a) {
    n && a && (r[(0, Nm.camelCase)(n, e)] = a);
  }), r;
}
Zi.default = Zi;
var _m = Zi;
(function(t) {
  var e = Ie && Ie.__importDefault || function(c) {
    return c && c.__esModule ? c : { default: c };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.returnFirstArg = t.canTextBeChildOfNode = t.ELEMENTS_WITH_NO_TEXT_CHILDREN = t.PRESERVE_CUSTOM_ATTRIBUTES = void 0, t.isCustomComponent = i, t.setStyleProp = o;
  var r = de, n = e(_m), a = /* @__PURE__ */ new Set([
    "annotation-xml",
    "color-profile",
    "font-face",
    "font-face-src",
    "font-face-uri",
    "font-face-format",
    "font-face-name",
    "missing-glyph"
  ]);
  function i(c, d) {
    return c.includes("-") ? !a.has(c) : !!(d && typeof d.is == "string");
  }
  var s = {
    reactCompat: !0
  };
  function o(c, d) {
    if (typeof c == "string") {
      if (!c.trim()) {
        d.style = {};
        return;
      }
      try {
        d.style = (0, n.default)(c, s);
      } catch {
        d.style = {};
      }
    }
  }
  t.PRESERVE_CUSTOM_ATTRIBUTES = Number(r.version.split(".")[0]) >= 16, t.ELEMENTS_WITH_NO_TEXT_CHILDREN = /* @__PURE__ */ new Set([
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
})(ks);
Object.defineProperty(Ua, "__esModule", { value: !0 });
Ua.default = Hm;
var cn = Mt, cu = ks, $m = ["checked", "value"], zm = ["input", "select", "textarea"], Wm = {
  reset: !0,
  submit: !0
};
function Hm(t, e) {
  t === void 0 && (t = {});
  var r = {}, n = !!(t.type && Wm[t.type]);
  for (var a in t) {
    var i = t[a];
    if ((0, cn.isCustomAttribute)(a)) {
      r[a] = i;
      continue;
    }
    var s = a.toLowerCase(), o = fu(s);
    if (o) {
      var u = (0, cn.getPropertyInfo)(o);
      switch ($m.includes(o) && zm.includes(e) && !n && (o = fu("default" + s)), r[o] = i, u && u.type) {
        case cn.BOOLEAN:
          r[o] = !0;
          break;
        case cn.OVERLOADED_BOOLEAN:
          i === "" && (r[o] = !0);
          break;
      }
      continue;
    }
    cu.PRESERVE_CUSTOM_ATTRIBUTES && (r[a] = i);
  }
  return (0, cu.setStyleProp)(t.style, r), r;
}
function fu(t) {
  return cn.possibleStandardNames[t];
}
var Rs = {}, Um = Ie && Ie.__importDefault || function(t) {
  return t && t.__esModule ? t : { default: t };
};
Object.defineProperty(Rs, "__esModule", { value: !0 });
Rs.default = Hf;
var fi = de, Vm = Um(Ua), pn = ks, qm = {
  cloneElement: fi.cloneElement,
  createElement: fi.createElement,
  isValidElement: fi.isValidElement
};
function Hf(t, e) {
  e === void 0 && (e = {});
  for (var r = [], n = typeof e.replace == "function", a = e.transform || pn.returnFirstArg, i = e.library || qm, s = i.cloneElement, o = i.createElement, u = i.isValidElement, l = t.length, c = 0; c < l; c++) {
    var d = t[c];
    if (n) {
      var p = e.replace(d, c);
      if (u(p)) {
        l > 1 && (p = s(p, {
          key: p.key || c
        })), r.push(a(p, d, c));
        continue;
      }
    }
    if (d.type === "text") {
      var m = !d.data.trim().length;
      if (m && d.parent && !(0, pn.canTextBeChildOfNode)(d.parent) || e.trim && m)
        continue;
      r.push(a(d.data, d, c));
      continue;
    }
    var h = d, v = {};
    Gm(h) ? ((0, pn.setStyleProp)(h.attribs.style, h.attribs), v = h.attribs) : h.attribs && (v = (0, Vm.default)(h.attribs, h.name));
    var f = void 0;
    switch (d.type) {
      case "script":
      case "style":
        d.children[0] && (v.dangerouslySetInnerHTML = {
          __html: d.children[0].data
        });
        break;
      case "tag":
        d.name === "textarea" && d.children[0] ? v.defaultValue = d.children[0].data : d.children && d.children.length && (f = Hf(d.children, e));
        break;
      default:
        continue;
    }
    l > 1 && (v.key = c), r.push(a(o(d.name, v, f), d, c));
  }
  return r.length === 1 ? r[0] : r;
}
function Gm(t) {
  return pn.PRESERVE_CUSTOM_ATTRIBUTES && t.type === "tag" && (0, pn.isCustomComponent)(t.name, t.attribs);
}
(function(t) {
  var e = Ie && Ie.__importDefault || function(u) {
    return u && u.__esModule ? u : { default: u };
  };
  Object.defineProperty(t, "__esModule", { value: !0 }), t.htmlToDOM = t.domToReact = t.attributesToProps = t.Text = t.ProcessingInstruction = t.Element = t.Comment = void 0, t.default = o;
  var r = e(xs);
  t.htmlToDOM = r.default;
  var n = e(Ua);
  t.attributesToProps = n.default;
  var a = e(Rs);
  t.domToReact = a.default;
  var i = Ls;
  Object.defineProperty(t, "Comment", { enumerable: !0, get: function() {
    return i.Comment;
  } }), Object.defineProperty(t, "Element", { enumerable: !0, get: function() {
    return i.Element;
  } }), Object.defineProperty(t, "ProcessingInstruction", { enumerable: !0, get: function() {
    return i.ProcessingInstruction;
  } }), Object.defineProperty(t, "Text", { enumerable: !0, get: function() {
    return i.Text;
  } });
  var s = { lowerCaseAttributeNames: !1 };
  function o(u, l) {
    if (typeof u != "string")
      throw new TypeError("First argument must be a string");
    return u ? (0, a.default)((0, r.default)(u, (l == null ? void 0 : l.htmlparser2) || s), l) : [];
  }
})(Of);
const du = /* @__PURE__ */ Ra(Of), Zm = du.default || du, Ki = (t) => {
  var n;
  if (typeof t == "string")
    return { text: t };
  const e = Array.isArray(t.props.children) ? t.props.children.map((a) => Ki(a)) : [{ text: t.props.children || "" }], r = (n = t.props.className) == null ? void 0 : n.replace("align_", "");
  switch (t.type) {
    case "img":
      return {
        type: "image",
        align: r,
        src: t.props.src,
        children: [{ text: "" }]
      };
    case "p":
      return { type: "paragraph", align: r, children: e };
    case "blockquote":
      return { type: "blockQuote", align: r, children: e };
    case "ul":
      return { type: "bulletedList", align: r, children: e };
    case "ol":
      return { type: "numberedList", align: r, children: e };
    case "li":
      return { type: "listItem", align: r, children: e };
    case "h1":
      return { type: "headingOne", align: r, children: e };
    case "h2":
      return { type: "headingTwo", align: r, children: e };
    case "strong":
      return { text: t.props.children, bold: !0 };
    case "code":
      return { text: t.props.children, code: !0 };
    case "em":
      return { text: t.props.children, italic: !0 };
    case "u":
      return { text: t.props.children, underline: !0 };
    default:
      return { text: t.props.children || "" };
  }
}, YO = (t) => {
  const e = Zm(t);
  return Array.isArray(e) ? e.map((r) => typeof r == "string" ? { text: r } : Ki(r)) : typeof e == "string" ? [{ text: e }] : [Ki(e)];
}, XO = (t) => /<\/?[a-z][\s\S]*>/i.test(t);
function Uf(t, e, r) {
  if (!t) return /* @__PURE__ */ y.jsx(y.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ y.jsx("p", { className: r, children: t });
  const n = t;
  return /* @__PURE__ */ y.jsx("p", { className: r, children: /* @__PURE__ */ y.jsx(n, { color: "var(--secondary-600)", size: e, strokeWidth: 2.5 }) });
}
function JO(t) {
  const {
    variant: e = "ghost",
    scheme: r = "primary",
    size: n = "md",
    leftIcon: a,
    rightIcon: i,
    className: s = "",
    children: o,
    ...u
  } = t, c = { md: 12, lg: 14 }[n], d = `arkynBadge ${e} ${r} ${n} ${s}`;
  return /* @__PURE__ */ y.jsxs("div", { className: d.trim(), ...u, children: [
    ha(c, a),
    o,
    ha(c, a)
  ] });
}
function QO(t) {
  const { className: e, ...r } = t, n = `arkynCard ${e}`;
  return /* @__PURE__ */ y.jsx("div", { className: n.trim(), ...r });
}
function ex(t) {
  const {
    className: e,
    orientation: r = "horizontal",
    ...n
  } = t, a = `arkynDivider ${r} ${e}`;
  return /* @__PURE__ */ y.jsx("div", { className: a.trim(), ...n });
}
function tx(t) {
  const { className: e, ...r } = t, n = `arkynSkeleton ${e}`;
  return /* @__PURE__ */ y.jsx("aside", { className: n.trim(), ...r });
}
function rx(t) {
  const {
    emptyMessage: e = "Nenhum dado adicionado.",
    className: r,
    children: n,
    ...a
  } = t, i = `arkynTableBody ${r}`, s = Nt.count(n) === 0;
  return /* @__PURE__ */ y.jsx("tbody", { className: i.trim(), ...a, children: s ? /* @__PURE__ */ y.jsx("tr", { className: "arkynTableBodyEmptyLine", children: /* @__PURE__ */ y.jsx("td", { colSpan: 100, children: /* @__PURE__ */ y.jsx("div", { children: e }) }) }) : n });
}
function nx(t) {
  const { className: e, children: r, ...n } = t, a = `arkynTableCaption ${e}`;
  return /* @__PURE__ */ y.jsx("caption", { className: a.trim(), ...n, children: /* @__PURE__ */ y.jsx("div", { className: "arkynTableCaptionContent", children: r }) });
}
function ax(t) {
  const { children: e, className: r, ...n } = t, a = `arkynTableContainer ${r}`;
  return /* @__PURE__ */ y.jsx("div", { className: a.trim(), ...n, children: /* @__PURE__ */ y.jsx("table", { children: e }) });
}
function ix(t) {
  const { className: e, children: r, ...n } = t, a = `arkynTableFooter ${e}`;
  return /* @__PURE__ */ y.jsxs("tfoot", { className: a.trim(), ...n, children: [
    /* @__PURE__ */ y.jsx("tr", { className: "spacingRow" }),
    /* @__PURE__ */ y.jsx("tr", { children: /* @__PURE__ */ y.jsx("th", { colSpan: 100, children: /* @__PURE__ */ y.jsx("div", { className: "arkynTableFooterContent", children: r }) }) })
  ] });
}
function sx(t) {
  const { className: e, children: r, ...n } = t, a = `arkynTableHeader ${e}`;
  return /* @__PURE__ */ y.jsxs("thead", { className: a.trim(), ...n, children: [
    /* @__PURE__ */ y.jsx("tr", { children: r }),
    /* @__PURE__ */ y.jsx("tr", { className: "spacingRow" })
  ] });
}
function ba(t) {
  const {
    isLoading: e = !1,
    scheme: r = "primary",
    variant: n = "solid",
    loadingText: a,
    size: i = "md",
    leftIcon: s,
    rightIcon: o,
    disabled: u,
    className: l = "",
    children: c,
    ...d
  } = t, m = { xs: 12, sm: 16, md: 20, lg: 24 }[i], f = `arkynButton ${e ? "loadingTrue" : "loadingFalse"} ${n} ${r} ${i} ${a ? "loadingTextTrue" : "loadingTextFalse"} ${l}`;
  return /* @__PURE__ */ y.jsxs("button", { className: f, disabled: u || e, ...d, children: [
    /* @__PURE__ */ y.jsxs("div", { className: "arkynButtonSpinner", children: [
      /* @__PURE__ */ y.jsx(cr, { size: m, strokeWidth: 2.5 }),
      a && a
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "arkynButtonContent", children: [
      ha(m, s),
      c,
      ha(m, o)
    ] })
  ] });
}
function Vf() {
  const t = of(), e = ah(), r = ih(), [n, a] = k(null);
  function i(l, c) {
    return JSON.stringify(l) === JSON.stringify(c);
  }
  function s() {
    n && a(null);
  }
  x(() => {
    var c, d;
    let l = ((d = (c = r[0]) == null ? void 0 : c.data) == null ? void 0 : d.fieldErrors) || {};
    i(n, l) || Object.entries(l).length !== 0 && a(l);
  }, [r, t]), x(() => {
    var l;
    ((l = r[0]) == null ? void 0 : l.state) === "submitting" && s();
  }, [r, e]);
  const o = (t == null ? void 0 : t.fieldErrors) || n;
  let u = {};
  return Object.entries(o || {}).forEach(([l, c]) => {
    typeof c == "string" && typeof l == "string" && (u[l] = c);
  }), u;
}
const qf = st({});
function pu(t) {
  var d;
  const {
    children: e,
    className: r,
    id: n,
    ...a
  } = t, i = Vf(), s = Re(null), o = ((d = s.current) == null ? void 0 : d.name) || "", u = (i == null ? void 0 : i[o]) || null, l = Ip(), c = `arkynFormController ${r}`;
  return /* @__PURE__ */ y.jsx(qf.Provider, { value: { error: u, id: l, inputRef: s }, children: /* @__PURE__ */ y.jsx(
    "section",
    {
      id: n || o || void 0,
      className: c.trim(),
      ...a,
      children: e
    }
  ) });
}
function Dt() {
  return Se(qf);
}
function ox(t) {
  const {
    name: e,
    className: r = "",
    size: n = "md",
    isError: a,
    defaultChecked: i = !1,
    checked: s = null,
    onCheck: o,
    value: u,
    ...l
  } = t, { id: c, inputRef: d, error: p } = Dt(), m = a || !!p, [h, v] = k(i || !1), f = typeof s == "boolean" ? s : h, B = `arkynCheckbox ${n} ${m ? "errorTrue" : "errorFalse"} ${f ? "checkedTrue" : "checkedFalse"} ${r}`;
  function E() {
    const C = h;
    v(!C), o && o(C ? "" : u || "checked");
  }
  return /* @__PURE__ */ y.jsxs(
    "button",
    {
      id: c,
      type: "button",
      className: B,
      onClick: E,
      ...l,
      children: [
        /* @__PURE__ */ y.jsx(
          "input",
          {
            type: "hidden",
            name: e,
            ref: d,
            value: f ? u || "checked" : ""
          }
        ),
        /* @__PURE__ */ y.jsx(gs, {})
      ]
    }
  );
}
function ux(t) {
  const { children: e, className: r, ...n } = t, a = `arkynFormError ${r}`, { error: i } = Dt();
  return e ? /* @__PURE__ */ y.jsx("strong", { className: a.trim(), ...n, children: e }) : i ? /* @__PURE__ */ y.jsx("strong", { className: a.trim(), ...n, children: i }) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function hu(t) {
  const {
    showAsterisk: e = !1,
    className: r = "",
    ...n
  } = t, { id: a } = Dt(), s = `arkynFormLabel ${e ? "asteriskTrue" : "asteriskFalse"} ${r}`;
  return /* @__PURE__ */ y.jsx("label", { className: s.trim(), htmlFor: a, ...n });
}
function Km(t) {
  const {
    isLoading: e = !1,
    scheme: r = "primary",
    variant: n = "solid",
    size: a = "md",
    icon: i,
    disabled: s,
    className: o = "",
    ...u
  } = t, l = { xs: 12, sm: 16, md: 20, lg: 24 }, d = `arkynIconButton ${n} ${r} ${a} ${e ? "loadingTrue" : "loadingFalse"} ${o}`;
  return /* @__PURE__ */ y.jsxs(
    "button",
    {
      disabled: s || e,
      className: d.trim(),
      ...u,
      children: [
        /* @__PURE__ */ y.jsx("div", { className: "arkynIconButtonSpinner", children: /* @__PURE__ */ y.jsx(cr, { size: l[a], strokeWidth: 2.5 }) }),
        /* @__PURE__ */ y.jsx("div", { className: "arkynIconButtonContent", children: /* @__PURE__ */ y.jsx(i, { size: l[a], strokeWidth: 2.5 }) })
      ]
    }
  );
}
function Ym(t) {
  const {
    text: e,
    size: r = "lg",
    children: n,
    orientation: a = "top",
    className: i = "",
    ...s
  } = t, o = `arkynTooltip ${r} ${a} ${i}`;
  return /* @__PURE__ */ y.jsxs("div", { className: o.trim(), ...s, children: [
    n,
    /* @__PURE__ */ y.jsx("div", { className: "arkynTooltipText", children: e })
  ] });
}
function Xm(t) {
  const {
    filePath: e,
    isLoading: r,
    acceptImage: n,
    changeImageButtonText: a,
    handleSelectFile: i,
    reSendImage: s
  } = t;
  function o() {
    const u = document.createElement("input");
    u.type = "file", u.accept = n, u.onchange = (l) => {
      var d;
      const c = (d = l.target.files) == null ? void 0 : d[0];
      c && i(c);
    }, u.click();
  }
  return /* @__PURE__ */ y.jsxs(
    "div",
    {
      className: "arkynImageUploadHasFileContent",
      style: { backgroundImage: `url("${e}")` },
      children: [
        s && /* @__PURE__ */ y.jsx(Ym, { orientation: "bottom", text: "Reenviar imagem", children: /* @__PURE__ */ y.jsx(
          Km,
          {
            type: "button",
            "aria-label": "resend image",
            variant: "outline",
            scheme: "danger",
            size: "sm",
            isLoading: r,
            onClick: s,
            icon: Hp
          }
        ) }),
        /* @__PURE__ */ y.jsx(
          ba,
          {
            isLoading: r,
            onClick: o,
            variant: "outline",
            size: "sm",
            type: "button",
            children: a
          }
        )
      ]
    }
  );
}
function Jm(t) {
  const { error: e } = t, r = "arkynImageUploadError";
  return e ? /* @__PURE__ */ y.jsx("strong", { className: r, children: e }) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function Qm(t) {
  const { label: e, showAsterisk: r } = t, a = `arkynImageUploadLabel ${r ? "asteriskTrue" : "asteriskFalse"}`;
  return /* @__PURE__ */ y.jsx("strong", { className: a.trim(), children: e });
}
function ey(t) {
  const {
    dropImageText: e,
    isLoading: r,
    acceptImage: n,
    handleSelectFile: a,
    selectImageButtonText: i
  } = t;
  function s(u) {
    u.preventDefault();
    const l = u.dataTransfer.files[0];
    l && a(l);
  }
  function o() {
    const u = document.createElement("input");
    u.type = "file", u.accept = n, u.onchange = (l) => {
      var d;
      const c = (d = l.target.files) == null ? void 0 : d[0];
      c && a(c);
    }, u.click();
  }
  return /* @__PURE__ */ y.jsxs("div", { onDrop: s, className: "arkynImageUploadNoFileContent", children: [
    /* @__PURE__ */ y.jsx(
      ba,
      {
        isLoading: r,
        onClick: o,
        variant: "ghost",
        size: "sm",
        type: "button",
        children: i
      }
    ),
    /* @__PURE__ */ y.jsx("p", { children: e })
  ] });
}
function ty(t) {
  const {
    name: e,
    defaultValue: r = "",
    label: n,
    showAsterisk: a = !1,
    action: i,
    fileName: s = "file",
    method: o = "POST",
    acceptImage: u = "image/*",
    fileResponseName: l = "url",
    changeImageButtonText: c = "Alterar imagem",
    selectImageButtonText: d = "Selecionar imagem",
    dropImageText: p = "Ou arraste e solte a imagem aqui",
    onUpload: m
  } = t, v = Vf()[e], [f, D] = k(r), [b, B] = k(""), [E, C] = k(null), [O, A] = k(r), [H, P] = k(!1);
  async function W(Y) {
    P(!0), C(Y), B("");
    const V = new FormData();
    V.append(s, Y), await fetch(i, { method: o, body: V }).then(async (ee) => await ee.json()).then((ee) => {
      ee != null && ee.error ? B(ee.error) : D(ee == null ? void 0 : ee[l]), m && m(ee == null ? void 0 : ee[l]);
    }).catch((ee) => {
      console.error(ee), B("Erro ao enviar imagem");
    }).finally(() => P(!1));
  }
  function R(Y) {
    A(URL.createObjectURL(Y)), W(Y);
  }
  const M = v || b, $ = `arkynImageUpload ${M ? "hasError" : "noHasError"} ${O ? "hasImage" : "noHasImage"}`;
  return /* @__PURE__ */ y.jsxs("div", { className: "arkynImageUploadContainer", children: [
    n && /* @__PURE__ */ y.jsx(Qm, { label: n, showAsterisk: a }),
    /* @__PURE__ */ y.jsxs("div", { className: $, children: [
      /* @__PURE__ */ y.jsx("input", { type: "hidden", name: e, value: f || "" }),
      !O && /* @__PURE__ */ y.jsx(
        ey,
        {
          isLoading: H,
          acceptImage: u,
          dropImageText: p,
          handleSelectFile: R,
          selectImageButtonText: d
        }
      ),
      O && /* @__PURE__ */ y.jsx(
        Xm,
        {
          isLoading: H,
          acceptImage: u,
          filePath: O,
          handleSelectFile: R,
          changeImageButtonText: c,
          reSendImage: M && E ? () => W(E) : void 0
        }
      )
    ] }),
    M && /* @__PURE__ */ y.jsx(Jm, { error: M })
  ] });
}
function ur(t, e, r) {
  if (!t) return /* @__PURE__ */ y.jsx(y.Fragment, {});
  if (typeof t == "string") return /* @__PURE__ */ y.jsx("p", { className: r, children: t });
  const n = t;
  return /* @__PURE__ */ y.jsx("p", { className: r, children: /* @__PURE__ */ y.jsx(n, { color: "var(--secondary-600)", size: e, strokeWidth: 2.5 }) });
}
function Is(t) {
  return t && t.replace(/[^0-9]/g, "");
}
function Gf(t, e) {
  let r = "", n = 0;
  return Array.from(t).forEach((a, i) => {
    e[i + n].match(/[0-9]/) || (r += e[i + n], n++), r += a;
  }), r;
}
function Zf(t) {
  return t.length > 11 ? "CNPJ" : "CPF";
}
const Ns = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Kf = Is(Ns.CNPJ).length;
function ry(t, e) {
  const {
    isLoading: r,
    isError: n,
    size: a = "md",
    className: i = "",
    variant: s = "solid",
    prefix: o,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    defaultValue: p,
    readOnly: m,
    onFocus: h,
    onBlur: v,
    title: f,
    style: D,
    onChange: b,
    ...B
  } = t;
  function E(_) {
    let $ = Is(_);
    const Y = Zf($);
    if (!($.length > Kf))
      return $ = Gf($, Ns[Y]), $;
  }
  const C = c ? "right" : "left", R = `arkyn_input ${o ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${s} ${a} ${d || m || r ? "opacity" : ""} ${n ? "errored" : ""} ${e ? "focused" : ""} ${i}`, z = { md: 20, lg: 20 }[a];
  return {
    isLoading: r,
    className: R,
    prefix: ur(o, z, "prefix"),
    sufix: ur(u, z, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    defaultValue: E(p || ""),
    disabled: d,
    readOnly: m,
    onFocus: h,
    onBlur: v,
    title: f,
    style: D,
    onChange: b,
    loadingPosition: C,
    iconSize: z,
    Spinner: /* @__PURE__ */ y.jsx(cr, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...B
  };
}
function ny(t) {
  const [e, r] = k(!1), n = Re(null), { inputRef: a, id: i, error: s } = Dt(), o = a || n, u = t.isError || !!s, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: m,
    sufix: h,
    iconSize: v,
    loadingPosition: f,
    isLoading: D,
    LeftIcon: b,
    readOnly: B,
    onFocus: E,
    onBlur: C,
    RightIcon: O,
    Spinner: A,
    onChange: H,
    value: P,
    defaultValue: W,
    ...R
  } = ry({ ...t, id: i, isError: u }, e), [M, z] = k(W), _ = b && !D, $ = O && !D, Y = f === "left" && D, V = f === "right" && D;
  function ee() {
    l || !(o != null && o.current) || (r(!0), o.current.focus());
  }
  function ie(J) {
    let U = Is(J.target.value);
    const ne = Zf(U);
    U.length > Kf || (U = Gf(U, Ns[ne]), J.target.value = U, z(U), H && H(J));
  }
  function j(J) {
    r(!0), E && E(J);
  }
  function G(J) {
    r(!1), C && C(J);
  }
  return /* @__PURE__ */ y.jsxs(
    "section",
    {
      title: c,
      style: d,
      onClick: ee,
      className: p,
      children: [
        m,
        Y && A,
        _ && /* @__PURE__ */ y.jsx(b, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ y.jsx(
          "input",
          {
            disabled: l || D,
            readOnly: B,
            ref: o,
            value: P || M,
            onFocus: j,
            onChange: ie,
            onBlur: G,
            ...R
          }
        ),
        $ && /* @__PURE__ */ y.jsx(O, { size: v, strokeWidth: 2.5 }),
        V && A,
        h
      ]
    }
  );
}
const ay = 3, iy = (t = "pt-BR", e, r = "BRL", n = !0) => new Intl.NumberFormat(t, {
  style: "currency",
  currency: r,
  currencyDisplay: "symbol",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(e).slice(n ? ay : 0), zn = 2, vu = (t) => typeof t == "number" ? t : Number(t.toString().replace(/[^0-9-]/g, "")), Yi = (t) => {
  let e = t;
  return typeof t == "string" ? (e = vu(t), e % 1 !== 0 && (e = e.toFixed(zn))) : e = Number.isInteger(t) ? Number(t) * 10 ** zn : t.toFixed(zn), vu(e) / 10 ** zn;
}, gu = (t, e, r) => {
  if (!e) return [0, ""];
  const n = Yi(e), a = iy(t, n, r);
  return [n, a];
};
function sy(t, e) {
  const {
    isLoading: r,
    isError: n,
    size: a = "md",
    className: i = "",
    variant: s = "solid",
    prefix: o,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: m,
    onBlur: h,
    title: v,
    style: f,
    // showCents = false,
    max: D = 1e9,
    locale: b = "pt-BR",
    currency: B = "BRL",
    ...E
  } = t, C = c ? "right" : "left", R = `arkyn_input ${o ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${s} ${a} ${d || p || r ? "opacity" : ""} ${n ? "errored" : ""} ${e ? "focused" : ""} ${i}`, z = { md: 20, lg: 20 }[a];
  return {
    isLoading: r,
    className: R,
    prefix: ur(o, z, "prefix"),
    sufix: ur(u, z, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: d,
    locale: b,
    currency: B,
    readOnly: p,
    onFocus: m,
    onBlur: h,
    title: v,
    style: f,
    max: D,
    // showCents,
    loadingPosition: C,
    iconSize: z,
    Spinner: /* @__PURE__ */ y.jsx(cr, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...E
  };
}
function oy(t) {
  const [e, r] = k(!1), [n, a] = k("0"), i = Re(null), { inputRef: s, id: o, error: u } = Dt(), l = s || i, c = t.isError || !!u, {
    disabled: d,
    title: p,
    style: m,
    className: h,
    prefix: v,
    sufix: f,
    iconSize: D,
    loadingPosition: b,
    isLoading: B,
    LeftIcon: E,
    readOnly: C,
    onFocus: O,
    onBlur: A,
    RightIcon: H,
    Spinner: P,
    value: W,
    max: R,
    onChangeValue: M,
    onKeyPress: z,
    currency: _,
    locale: $,
    name: Y,
    defaultValue: V,
    ...ee
  } = sy({ ...t, id: o, isError: c }, e), ie = E && !B, j = H && !B, G = b === "left" && B, J = b === "right" && B;
  function U() {
    d || !(l != null && l.current) || (r(!0), l.current.focus());
  }
  function ne(I) {
    r(!0), O && O(I);
  }
  function F(I) {
    r(!1), A && A(I);
  }
  const w = (I) => {
    const [Z, te] = gu(
      $,
      I,
      _
    );
    return !R || Z <= R ? (a(te), [Z, te]) : [Yi(n), n];
  }, N = (I) => {
    I.preventDefault();
    const [Z, te] = w(I.target.value);
    M && M(I, String(Z), String(te));
  }, T = (I) => z && z(I, I.key, I.key);
  return x(() => {
    const I = W || +V || void 0, [, Z] = gu($, I, _);
    a(Z);
  }, [_, V, W]), /* @__PURE__ */ y.jsxs(
    "section",
    {
      title: p,
      style: m,
      onClick: U,
      className: h,
      children: [
        v,
        G && P,
        ie && /* @__PURE__ */ y.jsx(E, { size: D, strokeWidth: 2.5 }),
        /* @__PURE__ */ y.jsx(
          "input",
          {
            value: n,
            onChange: N,
            onBlur: F,
            onFocus: ne,
            onKeyUp: T,
            disabled: d || B,
            readOnly: C,
            ...ee
          }
        ),
        /* @__PURE__ */ y.jsx(
          "input",
          {
            type: "hidden",
            ref: l,
            name: Y,
            value: Yi(n)
          }
        ),
        J && P,
        j && /* @__PURE__ */ y.jsx(H, { size: D, strokeWidth: 2.5 }),
        f
      ]
    }
  );
}
function uy(t, e) {
  const {
    isLoading: r,
    isError: n,
    size: a = "md",
    className: i = "",
    variant: s = "solid",
    prefix: o,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: m,
    onBlur: h,
    title: v,
    style: f,
    onChange: D,
    showMask: b = !1,
    type: B,
    ...E
  } = t, C = c ? "right" : "left", R = `arkyn_input ${o ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${s} ${a} ${d || p || r ? "opacity" : ""} ${n ? "errored" : ""} ${e ? "focused" : ""} ${i}`, z = { md: 20, lg: 20 }[a];
  return {
    isLoading: r,
    className: R,
    prefix: ur(o, z, "prefix"),
    sufix: ur(u, z, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: m,
    onBlur: h,
    title: v,
    style: f,
    onChange: D,
    loadingPosition: C,
    iconSize: z,
    showMask: b,
    Spinner: /* @__PURE__ */ y.jsx(cr, { className: "spinner", size: z, strokeWidth: 2.5 }),
    ...E
  };
}
const ly = vs((t, e) => /* @__PURE__ */ y.jsx("input", { ref: e, ...t }));
function cy(t) {
  const [e, r] = k(!1), n = Re(null), { inputRef: a, id: i, error: s } = Dt(), o = a || n, u = t.isError || !!s, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: m,
    sufix: h,
    iconSize: v,
    loadingPosition: f,
    isLoading: D,
    LeftIcon: b,
    readOnly: B,
    onFocus: E,
    onBlur: C,
    RightIcon: O,
    Spinner: A,
    ...H
  } = uy({ ...t, id: i, isError: u }, e), P = b && !D, W = O && !D, R = f === "left" && D, M = f === "right" && D;
  function z() {
    l || !(o != null && o.current) || (r(!0), o.current.focus());
  }
  function _(Y) {
    r(!0), E && E(Y);
  }
  function $(Y) {
    r(!1), C && C(Y);
  }
  return /* @__PURE__ */ y.jsxs(
    "section",
    {
      title: c,
      style: d,
      onClick: z,
      className: p,
      children: [
        m,
        R && A,
        P && /* @__PURE__ */ y.jsx(b, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ y.jsx(
          oh,
          {
            component: ly,
            ref: o,
            onFocus: _,
            onBlur: $,
            disabled: l,
            ...H
          }
        ),
        W && /* @__PURE__ */ y.jsx(O, { size: v, strokeWidth: 2.5 }),
        M && A,
        h
      ]
    }
  );
}
function fy(t, e) {
  const {
    isLoading: r,
    isError: n,
    size: a = "md",
    className: i = "",
    variant: s = "solid",
    prefix: o,
    sufix: u,
    leftIcon: l,
    rightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: m,
    onBlur: h,
    title: v,
    style: f,
    onChange: D,
    ...b
  } = t, B = c ? "right" : "left", P = `arkyn_input ${o ? "hasPrefix" : ""} ${u ? "hasSufix" : ""} ${s} ${a} ${d || p || r ? "opacity" : ""} ${n ? "errored" : ""} ${e ? "focused" : ""} ${i}`, R = { md: 20, lg: 20 }[a];
  return {
    isLoading: r,
    className: P,
    prefix: ur(o, R, "prefix"),
    sufix: ur(u, R, "sufix"),
    LeftIcon: l,
    RightIcon: c,
    disabled: d,
    readOnly: p,
    onFocus: m,
    onBlur: h,
    title: v,
    style: f,
    onChange: D,
    loadingPosition: B,
    iconSize: R,
    Spinner: /* @__PURE__ */ y.jsx(cr, { className: "spinner", size: R, strokeWidth: 2.5 }),
    ...b
  };
}
function dy(t) {
  const [e, r] = k(!1), n = Re(null), { inputRef: a, id: i, error: s } = Dt(), o = a || n, u = t.isError || !!s, {
    disabled: l,
    title: c,
    style: d,
    className: p,
    prefix: m,
    sufix: h,
    iconSize: v,
    loadingPosition: f,
    isLoading: D,
    LeftIcon: b,
    readOnly: B,
    onFocus: E,
    onBlur: C,
    RightIcon: O,
    type: A,
    Spinner: H,
    ...P
  } = fy({ ...t, id: i, isError: u }, e), W = b && !D, R = O && !D, M = f === "left" && D, z = f === "right" && D;
  function _() {
    l || !(o != null && o.current) || (r(!0), o.current.focus());
  }
  function $(V) {
    r(!0), E && E(V);
  }
  function Y(V) {
    r(!1), C && C(V);
  }
  return A === "hidden" ? /* @__PURE__ */ y.jsx(
    "input",
    {
      style: { display: "none" },
      readOnly: !0,
      type: "text",
      ref: o,
      ...P
    }
  ) : /* @__PURE__ */ y.jsxs(
    "section",
    {
      title: c,
      style: d,
      onClick: _,
      className: p,
      children: [
        m,
        M && H,
        W && /* @__PURE__ */ y.jsx(b, { size: v, strokeWidth: 2.5 }),
        /* @__PURE__ */ y.jsx(
          "input",
          {
            disabled: l || D,
            readOnly: B,
            ref: o,
            onFocus: $,
            onBlur: Y,
            type: A,
            ...P
          }
        ),
        R && /* @__PURE__ */ y.jsx(O, { size: v, strokeWidth: 2.5 }),
        z && H,
        h
      ]
    }
  );
}
function Ka(t) {
  return t.type === "currency" ? /* @__PURE__ */ y.jsx(oy, { ...t }) : t.type === "masked" ? /* @__PURE__ */ y.jsx(cy, { ...t }) : t.type === "cpf-cnpj" ? /* @__PURE__ */ y.jsx(ny, { ...t }) : /* @__PURE__ */ y.jsx(dy, { ...t });
}
function py(t) {
  const { iconSize: e, isLoading: r, disabled: n, readOnly: a, isFocused: i } = t, u = `arkynMultiSelectChevron ${n || a ? "notAnimate" : ""} ${i ? "focused" : ""}`;
  return r ? /* @__PURE__ */ y.jsx(y.Fragment, {}) : /* @__PURE__ */ y.jsx(af, { className: u, size: e, strokeWidth: 2.5 });
}
function hy(t) {
  const {
    children: e,
    handleContainerFocus: r,
    disabled: n,
    isError: a,
    isLoading: i,
    isFocused: s,
    className: o,
    readOnly: u,
    variant: l,
    size: c,
    id: d,
    prefixExists: p
  } = t, m = p ? "hasPrefix" : "", h = a ? "errored" : "", v = n || u || i ? "opacity" : "", f = s ? "focused" : "";
  return /* @__PURE__ */ y.jsx(
    "section",
    {
      onClick: r,
      id: d,
      className: `arkynMultiSelectContainer ${m} ${l} ${c} ${v} ${h} ${f} ${o}`,
      children: e
    }
  );
}
function vy(t) {
  const { children: e, size: r } = t, n = `arkynMultiSelectContent ${r}`;
  return /* @__PURE__ */ y.jsx("div", { className: n, children: e });
}
function gy(t) {
  const { label: e, value: r, handleChangeValue: n } = t;
  return /* @__PURE__ */ y.jsxs("div", { className: "arkynMultiSelectMark", children: [
    e,
    /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        onClick: (a) => {
          a.stopPropagation(), n(r);
        },
        children: /* @__PURE__ */ y.jsx(ms, {})
      }
    )
  ] });
}
function my(t) {
  const { label: e, optionHasSelected: r, handleChangeValue: n, value: a, size: i } = t, s = r(a) ? "active" : "", o = `arkynMultiSelectOption ${i} ${s}`;
  return /* @__PURE__ */ y.jsxs("div", { onClick: () => n(a), className: o, children: [
    e,
    " ",
    /* @__PURE__ */ y.jsx(gs, {})
  ] });
}
function yy(t) {
  const { children: e, isFocused: r, isSearchable: n, onSearch: a } = t;
  function i(s) {
    n && a(s.target.value);
  }
  return r ? /* @__PURE__ */ y.jsxs("div", { className: "arkynMultiSelectOptionsContainer", children: [
    n && /* @__PURE__ */ y.jsx(
      Ka,
      {
        type: "search",
        name: "search-select",
        variant: "underline",
        leftIcon: sf,
        onChange: i
      }
    ),
    e
  ] }) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function Cy(t) {
  const { isFocused: e, handleBlur: r } = t;
  return e ? /* @__PURE__ */ y.jsx("aside", { className: "arkynMultiSelectOverlay", onClick: r }) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function Dy(t) {
  const { iconSize: e, isLoading: r } = t;
  return r ? /* @__PURE__ */ y.jsx(
    cr,
    {
      className: "arkynMultiSelectSpinner",
      size: e,
      strokeWidth: 2.5
    }
  ) : /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function lx(t) {
  const {
    name: e,
    options: r,
    className: n = "",
    placeholder: a = "Selecione...",
    closeOnSelect: i = !1,
    defaultValue: s = [],
    isError: o,
    isLoading: u = !1,
    readOnly: l = !1,
    isSearchable: c = !1,
    leftIcon: d,
    onSearch: p,
    onSelect: m,
    onBlur: h,
    notFoundText: v = "Sem opções disponíveis",
    onFocus: f,
    disabled: D = !1,
    prefix: b,
    size: B = "md",
    value: E,
    variant: C = "solid"
  } = t, O = Dt(), A = Re(null), H = O.inputRef || A, P = O.id, W = o || !!O.error, M = { md: 20, lg: 20 }[B], z = Uf(b, M, "prefix"), [_, $] = k(""), [Y, V] = k(!1), [ee, ie] = k(s), j = E || ee;
  function G(T) {
    return j.includes(T);
  }
  function J(T) {
    const I = r.find((Z) => Z.value === T);
    return (I == null ? void 0 : I.label) || "";
  }
  function U() {
    D || !(H != null && H.current) || Y || (V(!0), H.current.focus(), f && f());
  }
  function ne() {
    V(!1), h && H.current && H.current.blur();
  }
  function F(T) {
    $(T), p && p(T);
  }
  function w(T) {
    G(T) ? ie(ee.filter((I) => I !== T)) : ie([...ee, T]), m && m(ee), i && ne();
  }
  const N = r.filter((T) => !!(t.onSearch || !t.isSearchable || T.label.toLowerCase().includes(_.toLowerCase())));
  return /* @__PURE__ */ y.jsxs(
    hy,
    {
      handleContainerFocus: U,
      disabled: D,
      isError: W,
      isFocused: Y,
      isLoading: u,
      readOnly: l,
      size: B,
      variant: C,
      className: n,
      prefixExists: !!b,
      id: P,
      children: [
        /* @__PURE__ */ y.jsx(
          "input",
          {
            ref: H,
            name: e,
            value: JSON.stringify(j),
            type: "hidden"
          }
        ),
        z,
        d && /* @__PURE__ */ y.jsx(d, { size: M, strokeWidth: 2.5 }),
        /* @__PURE__ */ y.jsxs(vy, { size: B, children: [
          j.map((T) => /* @__PURE__ */ y.jsx(
            gy,
            {
              label: J(T),
              value: T,
              handleChangeValue: w
            },
            T
          )),
          j.length <= 0 && /* @__PURE__ */ y.jsx("p", { children: a })
        ] }),
        /* @__PURE__ */ y.jsxs(
          yy,
          {
            isFocused: Y,
            isSearchable: c,
            onSearch: F,
            children: [
              N.map(({ label: T, value: I }) => /* @__PURE__ */ y.jsx(
                my,
                {
                  label: T,
                  value: I,
                  size: B,
                  handleChangeValue: w,
                  optionHasSelected: G
                },
                I
              )),
              N.length <= 0 && /* @__PURE__ */ y.jsx("p", { children: v })
            ]
          }
        ),
        /* @__PURE__ */ y.jsx(
          py,
          {
            disabled: D,
            isFocused: Y,
            readOnly: l,
            iconSize: M,
            isLoading: u
          }
        ),
        /* @__PURE__ */ y.jsx(Dy, { iconSize: M, isLoading: u }),
        /* @__PURE__ */ y.jsx(Cy, { handleBlur: ne, isFocused: Y })
      ]
    }
  );
}
const Yf = st({});
function by() {
  return Se(Yf);
}
function cx(t) {
  const {
    defaultValue: e,
    name: r,
    value: n,
    onChange: a,
    size: i = "md",
    className: s = "",
    ...o
  } = t, [u, l] = k(e || ""), { inputRef: c, id: d } = Dt();
  function p(h) {
    l(h), a && a(h);
  }
  const m = `arkynRadioGroup ${i} ${s}`;
  return /* @__PURE__ */ y.jsxs(
    Yf.Provider,
    {
      value: { onChange: p, value: n || u, size: i },
      children: [
        /* @__PURE__ */ y.jsx(
          "input",
          {
            style: { display: "none" },
            type: "text",
            id: d,
            readOnly: !0,
            name: r,
            ref: c,
            value: n || u
          }
        ),
        /* @__PURE__ */ y.jsx("div", { className: m.trim(), ...o })
      ]
    }
  );
}
function fx(t) {
  const {
    value: e,
    size: r,
    disabled: n,
    children: a,
    className: i = "",
    ...s
  } = t, { onChange: o, size: u, value: l } = by(), { error: c } = Dt(), v = `arkynRadioBox ${r || u} ${l === e ? "checkedTrue" : "checkedFalse"} ${c ? "errorTrue" : "errorFalse"} ${n ? "disabledTrue" : "disabledFalse"} ${i}`;
  return /* @__PURE__ */ y.jsxs("label", { className: v.trim(), children: [
    /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        disabled: n,
        onClick: () => o(e),
        onFocus: () => o(e),
        ...s
      }
    ),
    a
  ] });
}
var Gt = {};
Object.defineProperty(Gt, "__esModule", {
  value: !0
});
var Ey = typeof window < "u" && /Mac|iPod|iPhone|iPad/.test(window.navigator.platform), di = {
  alt: "altKey",
  control: "ctrlKey",
  meta: "metaKey",
  shift: "shiftKey"
}, Xf = {
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
  mod: Ey ? "meta" : "control",
  opt: "alt",
  option: "alt",
  return: "enter",
  right: "arrowright",
  space: " ",
  spacebar: " ",
  up: "arrowup",
  win: "meta",
  windows: "meta"
}, _s = {
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
for (var Wn = 1; Wn < 20; Wn++)
  _s["f" + Wn] = 111 + Wn;
function Ya(t, e, r) {
  e && !("byKey" in e) && (r = e, e = null), Array.isArray(t) || (t = [t]);
  var n = t.map(function(s) {
    return Jf(s, e);
  }), a = function(o) {
    return n.some(function(u) {
      return Qf(u, o);
    });
  }, i = r == null ? a : a(r);
  return i;
}
function wy(t, e) {
  return Ya(t, e);
}
function Oy(t, e) {
  return Ya(t, { byKey: !0 }, e);
}
function Jf(t, e) {
  var r = e && e.byKey, n = {};
  t = t.replace("++", "+add");
  var a = t.split("+"), i = a.length;
  for (var s in di)
    n[di[s]] = !1;
  var o = !0, u = !1, l = void 0;
  try {
    for (var c = a[Symbol.iterator](), d; !(o = (d = c.next()).done); o = !0) {
      var p = d.value, m = p.endsWith("?") && p.length > 1;
      m && (p = p.slice(0, -1));
      var h = $s(p), v = di[h];
      if (p.length > 1 && !v && !Xf[p] && !_s[h])
        throw new TypeError('Unknown modifier: "' + p + '"');
      (i === 1 || !v) && (r ? n.key = h : n.which = ed(p)), v && (n[v] = m ? null : !0);
    }
  } catch (f) {
    u = !0, l = f;
  } finally {
    try {
      !o && c.return && c.return();
    } finally {
      if (u)
        throw l;
    }
  }
  return n;
}
function Qf(t, e) {
  for (var r in t) {
    var n = t[r], a = void 0;
    if (n != null && (r === "key" && e.key != null ? a = e.key.toLowerCase() : r === "which" ? a = n === 91 && e.which === 93 ? 91 : e.which : a = e[r], !(a == null && n === !1) && a !== n))
      return !1;
  }
  return !0;
}
function ed(t) {
  t = $s(t);
  var e = _s[t] || t.toUpperCase().charCodeAt(0);
  return e;
}
function $s(t) {
  return t = t.toLowerCase(), t = Xf[t] || t, t;
}
var xy = Gt.default = Ya, pi = Gt.isHotkey = Ya;
Gt.isCodeHotkey = wy;
Gt.isKeyHotkey = Oy;
Gt.parseHotkey = Jf;
Gt.compareHotkey = Qf;
Gt.toKeyCode = ed;
Gt.toKeyName = $s;
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function mu(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function By(t) {
  var e, r;
  return mu(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(mu(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
var Ly = {
  /**
   * Check if a value is a `History` object.
   */
  isHistory(t) {
    return By(t) && Array.isArray(t.redos) && Array.isArray(t.undos) && (t.redos.length === 0 || sr.isOperationList(t.redos[0].operations)) && (t.undos.length === 0 || sr.isOperationList(t.undos[0].operations));
  }
}, hi = /* @__PURE__ */ new WeakMap(), an = /* @__PURE__ */ new WeakMap(), Or = {
  /**
   * Check if a value is a `HistoryEditor` object.
   */
  isHistoryEditor(t) {
    return Ly.isHistory(t.history) && g.isEditor(t);
  },
  /**
   * Get the merge flag's current value.
   */
  isMerging(t) {
    return an.get(t);
  },
  /**
   * Get the saving flag's current value.
   */
  isSaving(t) {
    return hi.get(t);
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
    var r = Or.isMerging(t);
    an.set(t, !0), e(), an.set(t, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without merging any of
   * the new operations into previous save point in the history.
   */
  withoutMerging(t, e) {
    var r = Or.isMerging(t);
    an.set(t, !1), e(), an.set(t, r);
  },
  /**
   * Apply a series of changes inside a synchronous `fn`, without saving any of
   * their operations into the history.
   */
  withoutSaving(t, e) {
    var r = Or.isSaving(t);
    hi.set(t, !1), e(), hi.set(t, r);
  }
}, Ay = (t) => {
  var e = t, {
    apply: r
  } = e;
  return e.history = {
    undos: [],
    redos: []
  }, e.redo = () => {
    var {
      history: n
    } = e, {
      redos: a
    } = n;
    if (a.length > 0) {
      var i = a[a.length - 1];
      i.selectionBefore && re.setSelection(e, i.selectionBefore), Or.withoutSaving(e, () => {
        g.withoutNormalizing(e, () => {
          for (var s of i.operations)
            e.apply(s);
        });
      }), n.redos.pop(), e.writeHistory("undos", i);
    }
  }, e.undo = () => {
    var {
      history: n
    } = e, {
      undos: a
    } = n;
    if (a.length > 0) {
      var i = a[a.length - 1];
      Or.withoutSaving(e, () => {
        g.withoutNormalizing(e, () => {
          var s = i.operations.map(sr.inverse).reverse();
          for (var o of s)
            e.apply(o);
          i.selectionBefore && re.setSelection(e, i.selectionBefore);
        });
      }), e.writeHistory("redos", i), n.undos.pop();
    }
  }, e.apply = (n) => {
    var {
      operations: a,
      history: i
    } = e, {
      undos: s
    } = i, o = s[s.length - 1], u = o && o.operations[o.operations.length - 1], l = Or.isSaving(e), c = Or.isMerging(e);
    if (l == null && (l = Py(n)), l) {
      if (c == null && (o == null ? c = !1 : a.length !== 0 ? c = !0 : c = Sy(n, u)), o && c)
        o.operations.push(n);
      else {
        var d = {
          operations: [n],
          selectionBefore: e.selection
        };
        e.writeHistory("undos", d);
      }
      for (; s.length > 100; )
        s.shift();
      i.redos = [];
    }
    r(n);
  }, e.writeHistory = (n, a) => {
    e.history[n].push(a);
  }, e;
}, Sy = (t, e) => !!(e && t.type === "insert_text" && e.type === "insert_text" && t.offset === e.offset + e.text.length && S.equals(t.path, e.path) || e && t.type === "remove_text" && e.type === "remove_text" && t.offset + t.text.length === e.offset && S.equals(t.path, e.path)), Py = (t, e) => t.type !== "set_selection", Fy = ky, td = "֑-߿יִ-﷽ﹰ-ﻼ", rd = "A-Za-zÀ-ÖØ-öø-ʸ̀-֐ࠀ-῿‎Ⰰ-﬜︀-﹯﻽-￿", Ty = new RegExp("^[^" + rd + "]*[" + td + "]"), My = new RegExp("^[^" + td + "]*[" + rd + "]");
function ky(t) {
  return t = String(t || ""), Ty.test(t) ? "rtl" : My.test(t) ? "ltr" : "neutral";
}
const nd = /* @__PURE__ */ Ra(Fy);
function jy(t) {
  var e = typeof t;
  return t != null && (e == "object" || e == "function");
}
var zs = jy, Ry = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, Iy = Ry, Ny = Iy, _y = typeof self == "object" && self && self.Object === Object && self, $y = Ny || _y || Function("return this")(), ad = $y, zy = ad, Wy = function() {
  return zy.Date.now();
}, Hy = Wy, Uy = /\s/;
function Vy(t) {
  for (var e = t.length; e-- && Uy.test(t.charAt(e)); )
    ;
  return e;
}
var qy = Vy, Gy = qy, Zy = /^\s+/;
function Ky(t) {
  return t && t.slice(0, Gy(t) + 1).replace(Zy, "");
}
var Yy = Ky, Xy = ad, Jy = Xy.Symbol, id = Jy, yu = id, sd = Object.prototype, Qy = sd.hasOwnProperty, e0 = sd.toString, sn = yu ? yu.toStringTag : void 0;
function t0(t) {
  var e = Qy.call(t, sn), r = t[sn];
  try {
    t[sn] = void 0;
    var n = !0;
  } catch {
  }
  var a = e0.call(t);
  return n && (e ? t[sn] = r : delete t[sn]), a;
}
var r0 = t0, n0 = Object.prototype, a0 = n0.toString;
function i0(t) {
  return a0.call(t);
}
var s0 = i0, Cu = id, o0 = r0, u0 = s0, l0 = "[object Null]", c0 = "[object Undefined]", Du = Cu ? Cu.toStringTag : void 0;
function f0(t) {
  return t == null ? t === void 0 ? c0 : l0 : Du && Du in Object(t) ? o0(t) : u0(t);
}
var d0 = f0;
function p0(t) {
  return t != null && typeof t == "object";
}
var h0 = p0, v0 = d0, g0 = h0, m0 = "[object Symbol]";
function y0(t) {
  return typeof t == "symbol" || g0(t) && v0(t) == m0;
}
var C0 = y0, D0 = Yy, bu = zs, b0 = C0, Eu = NaN, E0 = /^[-+]0x[0-9a-f]+$/i, w0 = /^0b[01]+$/i, O0 = /^0o[0-7]+$/i, x0 = parseInt;
function B0(t) {
  if (typeof t == "number")
    return t;
  if (b0(t))
    return Eu;
  if (bu(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = bu(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = D0(t);
  var r = w0.test(t);
  return r || O0.test(t) ? x0(t.slice(2), r ? 2 : 8) : E0.test(t) ? Eu : +t;
}
var L0 = B0, A0 = zs, vi = Hy, wu = L0, S0 = "Expected a function", P0 = Math.max, F0 = Math.min;
function T0(t, e, r) {
  var n, a, i, s, o, u, l = 0, c = !1, d = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError(S0);
  e = wu(e) || 0, A0(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? P0(wu(r.maxWait) || 0, e) : i, p = "trailing" in r ? !!r.trailing : p);
  function m(O) {
    var A = n, H = a;
    return n = a = void 0, l = O, s = t.apply(H, A), s;
  }
  function h(O) {
    return l = O, o = setTimeout(D, e), c ? m(O) : s;
  }
  function v(O) {
    var A = O - u, H = O - l, P = e - A;
    return d ? F0(P, i - H) : P;
  }
  function f(O) {
    var A = O - u, H = O - l;
    return u === void 0 || A >= e || A < 0 || d && H >= i;
  }
  function D() {
    var O = vi();
    if (f(O))
      return b(O);
    o = setTimeout(D, v(O));
  }
  function b(O) {
    return o = void 0, p && n ? m(O) : (n = a = void 0, s);
  }
  function B() {
    o !== void 0 && clearTimeout(o), l = 0, n = u = a = o = void 0;
  }
  function E() {
    return o === void 0 ? s : b(vi());
  }
  function C() {
    var O = vi(), A = f(O);
    if (n = arguments, a = this, u = O, A) {
      if (o === void 0)
        return h(u);
      if (d)
        return clearTimeout(o), o = setTimeout(D, e), m(u);
    }
    return o === void 0 && (o = setTimeout(D, e)), s;
  }
  return C.cancel = B, C.flush = E, C;
}
var od = T0;
const M0 = /* @__PURE__ */ Ra(od);
var k0 = od, j0 = zs, R0 = "Expected a function";
function I0(t, e, r) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError(R0);
  return j0(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), k0(t, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
var N0 = I0;
const _0 = /* @__PURE__ */ Ra(N0), Ou = (t) => typeof t == "object" && t != null && t.nodeType === 1, xu = (t, e) => (!e || t !== "hidden") && t !== "visible" && t !== "clip", gi = (t, e) => {
  if (t.clientHeight < t.scrollHeight || t.clientWidth < t.scrollWidth) {
    const r = getComputedStyle(t, null);
    return xu(r.overflowY, e) || xu(r.overflowX, e) || ((n) => {
      const a = ((i) => {
        if (!i.ownerDocument || !i.ownerDocument.defaultView) return null;
        try {
          return i.ownerDocument.defaultView.frameElement;
        } catch {
          return null;
        }
      })(n);
      return !!a && (a.clientHeight < n.scrollHeight || a.clientWidth < n.scrollWidth);
    })(t);
  }
  return !1;
}, Hn = (t, e, r, n, a, i, s, o) => i < t && s > e || i > t && s < e ? 0 : i <= t && o <= r || s >= e && o >= r ? i - t - n : s > e && o < r || i < t && o > r ? s - e + a : 0, $0 = (t) => {
  const e = t.parentElement;
  return e ?? (t.getRootNode().host || null);
}, Bu = (t, e) => {
  var r, n, a, i;
  if (typeof document > "u") return [];
  const { scrollMode: s, block: o, inline: u, boundary: l, skipOverflowHiddenElements: c } = e, d = typeof l == "function" ? l : (Y) => Y !== l;
  if (!Ou(t)) throw new TypeError("Invalid target");
  const p = document.scrollingElement || document.documentElement, m = [];
  let h = t;
  for (; Ou(h) && d(h); ) {
    if (h = $0(h), h === p) {
      m.push(h);
      break;
    }
    h != null && h === document.body && gi(h) && !gi(document.documentElement) || h != null && gi(h, c) && m.push(h);
  }
  const v = (n = (r = window.visualViewport) == null ? void 0 : r.width) != null ? n : innerWidth, f = (i = (a = window.visualViewport) == null ? void 0 : a.height) != null ? i : innerHeight, { scrollX: D, scrollY: b } = window, { height: B, width: E, top: C, right: O, bottom: A, left: H } = t.getBoundingClientRect(), { top: P, right: W, bottom: R, left: M } = ((Y) => {
    const V = window.getComputedStyle(Y);
    return { top: parseFloat(V.scrollMarginTop) || 0, right: parseFloat(V.scrollMarginRight) || 0, bottom: parseFloat(V.scrollMarginBottom) || 0, left: parseFloat(V.scrollMarginLeft) || 0 };
  })(t);
  let z = o === "start" || o === "nearest" ? C - P : o === "end" ? A + R : C + B / 2 - P + R, _ = u === "center" ? H + E / 2 - M + W : u === "end" ? O + W : H - M;
  const $ = [];
  for (let Y = 0; Y < m.length; Y++) {
    const V = m[Y], { height: ee, width: ie, top: j, right: G, bottom: J, left: U } = V.getBoundingClientRect();
    if (s === "if-needed" && C >= 0 && H >= 0 && A <= f && O <= v && C >= j && A <= J && H >= U && O <= G) return $;
    const ne = getComputedStyle(V), F = parseInt(ne.borderLeftWidth, 10), w = parseInt(ne.borderTopWidth, 10), N = parseInt(ne.borderRightWidth, 10), T = parseInt(ne.borderBottomWidth, 10);
    let I = 0, Z = 0;
    const te = "offsetWidth" in V ? V.offsetWidth - V.clientWidth - F - N : 0, Q = "offsetHeight" in V ? V.offsetHeight - V.clientHeight - w - T : 0, pe = "offsetWidth" in V ? V.offsetWidth === 0 ? 0 : ie / V.offsetWidth : 0, fe = "offsetHeight" in V ? V.offsetHeight === 0 ? 0 : ee / V.offsetHeight : 0;
    if (p === V) I = o === "start" ? z : o === "end" ? z - f : o === "nearest" ? Hn(b, b + f, f, w, T, b + z, b + z + B, B) : z - f / 2, Z = u === "start" ? _ : u === "center" ? _ - v / 2 : u === "end" ? _ - v : Hn(D, D + v, v, F, N, D + _, D + _ + E, E), I = Math.max(0, I + b), Z = Math.max(0, Z + D);
    else {
      I = o === "start" ? z - j - w : o === "end" ? z - J + T + Q : o === "nearest" ? Hn(j, J, ee, w, T + Q, z, z + B, B) : z - (j + ee / 2) + Q / 2, Z = u === "start" ? _ - U - F : u === "center" ? _ - (U + ie / 2) + te / 2 : u === "end" ? _ - G + N + te : Hn(U, G, ie, F, N + te, _, _ + E, E);
      const { scrollLeft: ce, scrollTop: we } = V;
      I = fe === 0 ? 0 : Math.max(0, Math.min(we + I / fe, V.scrollHeight - ee / fe + Q)), Z = pe === 0 ? 0 : Math.max(0, Math.min(ce + Z / pe, V.scrollWidth - ie / pe + te)), z += we - I, _ += ce - Z;
    }
    $.push({ el: V, top: I, left: Z });
  }
  return $;
}, z0 = (t) => t === !1 ? { block: "end", inline: "nearest" } : ((e) => e === Object(e) && Object.keys(e).length !== 0)(t) ? t : { block: "start", inline: "nearest" };
function W0(t, e) {
  if (!t.isConnected || !((a) => {
    let i = a;
    for (; i && i.parentNode; ) {
      if (i.parentNode === document) return !0;
      i = i.parentNode instanceof ShadowRoot ? i.parentNode.host : i.parentNode;
    }
    return !1;
  })(t)) return;
  const r = ((a) => {
    const i = window.getComputedStyle(a);
    return { top: parseFloat(i.scrollMarginTop) || 0, right: parseFloat(i.scrollMarginRight) || 0, bottom: parseFloat(i.scrollMarginBottom) || 0, left: parseFloat(i.scrollMarginLeft) || 0 };
  })(t);
  if (((a) => typeof a == "object" && typeof a.behavior == "function")(e)) return e.behavior(Bu(t, e));
  const n = typeof e == "boolean" || e == null ? void 0 : e.behavior;
  for (const { el: a, top: i, left: s } of Bu(t, z0(e))) {
    const o = i - r.top + r.bottom, u = s - r.left + r.right;
    a.scroll({ top: o, left: u, behavior: n });
  }
}
var Lr = [], H0 = function() {
  return Lr.some(function(t) {
    return t.activeTargets.length > 0;
  });
}, U0 = function() {
  return Lr.some(function(t) {
    return t.skippedTargets.length > 0;
  });
}, Lu = "ResizeObserver loop completed with undelivered notifications.", V0 = function() {
  var t;
  typeof ErrorEvent == "function" ? t = new ErrorEvent("error", {
    message: Lu
  }) : (t = document.createEvent("Event"), t.initEvent("error", !1, !1), t.message = Lu), window.dispatchEvent(t);
}, En;
(function(t) {
  t.BORDER_BOX = "border-box", t.CONTENT_BOX = "content-box", t.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(En || (En = {}));
var Ar = function(t) {
  return Object.freeze(t);
}, q0 = /* @__PURE__ */ function() {
  function t(e, r) {
    this.inlineSize = e, this.blockSize = r, Ar(this);
  }
  return t;
}(), ud = function() {
  function t(e, r, n, a) {
    return this.x = e, this.y = r, this.width = n, this.height = a, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, Ar(this);
  }
  return t.prototype.toJSON = function() {
    var e = this, r = e.x, n = e.y, a = e.top, i = e.right, s = e.bottom, o = e.left, u = e.width, l = e.height;
    return { x: r, y: n, top: a, right: i, bottom: s, left: o, width: u, height: l };
  }, t.fromRect = function(e) {
    return new t(e.x, e.y, e.width, e.height);
  }, t;
}(), Ws = function(t) {
  return t instanceof SVGElement && "getBBox" in t;
}, ld = function(t) {
  if (Ws(t)) {
    var e = t.getBBox(), r = e.width, n = e.height;
    return !r && !n;
  }
  var a = t, i = a.offsetWidth, s = a.offsetHeight;
  return !(i || s || t.getClientRects().length);
}, Au = function(t) {
  var e;
  if (t instanceof Element)
    return !0;
  var r = (e = t == null ? void 0 : t.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(r && t instanceof r.Element);
}, G0 = function(t) {
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
}, hn = typeof window < "u" ? window : {}, Un = /* @__PURE__ */ new WeakMap(), Su = /auto|scroll/, Z0 = /^tb|vertical/, K0 = /msie|trident/i.test(hn.navigator && hn.navigator.userAgent), jt = function(t) {
  return parseFloat(t || "0");
}, Hr = function(t, e, r) {
  return t === void 0 && (t = 0), e === void 0 && (e = 0), r === void 0 && (r = !1), new q0((r ? e : t) || 0, (r ? t : e) || 0);
}, Pu = Ar({
  devicePixelContentBoxSize: Hr(),
  borderBoxSize: Hr(),
  contentBoxSize: Hr(),
  contentRect: new ud(0, 0, 0, 0)
}), cd = function(t, e) {
  if (e === void 0 && (e = !1), Un.has(t) && !e)
    return Un.get(t);
  if (ld(t))
    return Un.set(t, Pu), Pu;
  var r = getComputedStyle(t), n = Ws(t) && t.ownerSVGElement && t.getBBox(), a = !K0 && r.boxSizing === "border-box", i = Z0.test(r.writingMode || ""), s = !n && Su.test(r.overflowY || ""), o = !n && Su.test(r.overflowX || ""), u = n ? 0 : jt(r.paddingTop), l = n ? 0 : jt(r.paddingRight), c = n ? 0 : jt(r.paddingBottom), d = n ? 0 : jt(r.paddingLeft), p = n ? 0 : jt(r.borderTopWidth), m = n ? 0 : jt(r.borderRightWidth), h = n ? 0 : jt(r.borderBottomWidth), v = n ? 0 : jt(r.borderLeftWidth), f = d + l, D = u + c, b = v + m, B = p + h, E = o ? t.offsetHeight - B - t.clientHeight : 0, C = s ? t.offsetWidth - b - t.clientWidth : 0, O = a ? f + b : 0, A = a ? D + B : 0, H = n ? n.width : jt(r.width) - O - C, P = n ? n.height : jt(r.height) - A - E, W = H + f + C + b, R = P + D + E + B, M = Ar({
    devicePixelContentBoxSize: Hr(Math.round(H * devicePixelRatio), Math.round(P * devicePixelRatio), i),
    borderBoxSize: Hr(W, R, i),
    contentBoxSize: Hr(H, P, i),
    contentRect: new ud(d, u, H, P)
  });
  return Un.set(t, M), M;
}, fd = function(t, e, r) {
  var n = cd(t, r), a = n.borderBoxSize, i = n.contentBoxSize, s = n.devicePixelContentBoxSize;
  switch (e) {
    case En.DEVICE_PIXEL_CONTENT_BOX:
      return s;
    case En.BORDER_BOX:
      return a;
    default:
      return i;
  }
}, Y0 = /* @__PURE__ */ function() {
  function t(e) {
    var r = cd(e);
    this.target = e, this.contentRect = r.contentRect, this.borderBoxSize = Ar([r.borderBoxSize]), this.contentBoxSize = Ar([r.contentBoxSize]), this.devicePixelContentBoxSize = Ar([r.devicePixelContentBoxSize]);
  }
  return t;
}(), dd = function(t) {
  if (ld(t))
    return 1 / 0;
  for (var e = 0, r = t.parentNode; r; )
    e += 1, r = r.parentNode;
  return e;
}, X0 = function() {
  var t = 1 / 0, e = [];
  Lr.forEach(function(s) {
    if (s.activeTargets.length !== 0) {
      var o = [];
      s.activeTargets.forEach(function(l) {
        var c = new Y0(l.target), d = dd(l.target);
        o.push(c), l.lastReportedSize = fd(l.target, l.observedBox), d < t && (t = d);
      }), e.push(function() {
        s.callback.call(s.observer, o, s.observer);
      }), s.activeTargets.splice(0, s.activeTargets.length);
    }
  });
  for (var r = 0, n = e; r < n.length; r++) {
    var a = n[r];
    a();
  }
  return t;
}, Fu = function(t) {
  Lr.forEach(function(r) {
    r.activeTargets.splice(0, r.activeTargets.length), r.skippedTargets.splice(0, r.skippedTargets.length), r.observationTargets.forEach(function(a) {
      a.isActive() && (dd(a.target) > t ? r.activeTargets.push(a) : r.skippedTargets.push(a));
    });
  });
}, J0 = function() {
  var t = 0;
  for (Fu(t); H0(); )
    t = X0(), Fu(t);
  return U0() && V0(), t > 0;
}, mi, pd = [], Q0 = function() {
  return pd.splice(0).forEach(function(t) {
    return t();
  });
}, eC = function(t) {
  if (!mi) {
    var e = 0, r = document.createTextNode(""), n = { characterData: !0 };
    new MutationObserver(function() {
      return Q0();
    }).observe(r, n), mi = function() {
      r.textContent = "".concat(e ? e-- : e++);
    };
  }
  pd.push(t), mi();
}, tC = function(t) {
  eC(function() {
    requestAnimationFrame(t);
  });
}, sa = 0, rC = function() {
  return !!sa;
}, nC = 250, aC = { attributes: !0, characterData: !0, childList: !0, subtree: !0 }, Tu = [
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
], Mu = function(t) {
  return t === void 0 && (t = 0), Date.now() + t;
}, yi = !1, iC = function() {
  function t() {
    var e = this;
    this.stopped = !0, this.listener = function() {
      return e.schedule();
    };
  }
  return t.prototype.run = function(e) {
    var r = this;
    if (e === void 0 && (e = nC), !yi) {
      yi = !0;
      var n = Mu(e);
      tC(function() {
        var a = !1;
        try {
          a = J0();
        } finally {
          if (yi = !1, e = n - Mu(), !rC())
            return;
          a ? r.run(1e3) : e > 0 ? r.run(e) : r.start();
        }
      });
    }
  }, t.prototype.schedule = function() {
    this.stop(), this.run();
  }, t.prototype.observe = function() {
    var e = this, r = function() {
      return e.observer && e.observer.observe(document.body, aC);
    };
    document.body ? r() : hn.addEventListener("DOMContentLoaded", r);
  }, t.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = !1, this.observer = new MutationObserver(this.listener), this.observe(), Tu.forEach(function(r) {
      return hn.addEventListener(r, e.listener, !0);
    }));
  }, t.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), Tu.forEach(function(r) {
      return hn.removeEventListener(r, e.listener, !0);
    }), this.stopped = !0);
  }, t;
}(), Xi = new iC(), ku = function(t) {
  !sa && t > 0 && Xi.start(), sa += t, !sa && Xi.stop();
}, sC = function(t) {
  return !Ws(t) && !G0(t) && getComputedStyle(t).display === "inline";
}, oC = function() {
  function t(e, r) {
    this.target = e, this.observedBox = r || En.CONTENT_BOX, this.lastReportedSize = {
      inlineSize: 0,
      blockSize: 0
    };
  }
  return t.prototype.isActive = function() {
    var e = fd(this.target, this.observedBox, !0);
    return sC(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, t;
}(), uC = /* @__PURE__ */ function() {
  function t(e, r) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = r;
  }
  return t;
}(), Vn = /* @__PURE__ */ new WeakMap(), ju = function(t, e) {
  for (var r = 0; r < t.length; r += 1)
    if (t[r].target === e)
      return r;
  return -1;
}, qn = function() {
  function t() {
  }
  return t.connect = function(e, r) {
    var n = new uC(e, r);
    Vn.set(e, n);
  }, t.observe = function(e, r, n) {
    var a = Vn.get(e), i = a.observationTargets.length === 0;
    ju(a.observationTargets, r) < 0 && (i && Lr.push(a), a.observationTargets.push(new oC(r, n && n.box)), ku(1), Xi.schedule());
  }, t.unobserve = function(e, r) {
    var n = Vn.get(e), a = ju(n.observationTargets, r), i = n.observationTargets.length === 1;
    a >= 0 && (i && Lr.splice(Lr.indexOf(n), 1), n.observationTargets.splice(a, 1), ku(-1));
  }, t.disconnect = function(e) {
    var r = this, n = Vn.get(e);
    n.observationTargets.slice().forEach(function(a) {
      return r.unobserve(e, a.target);
    }), n.activeTargets.splice(0, n.activeTargets.length);
  }, t;
}(), lC = function() {
  function t(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    qn.connect(this, e);
  }
  return t.prototype.observe = function(e, r) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Au(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    qn.observe(this, e, r);
  }, t.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Au(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    qn.unobserve(this, e);
  }, t.prototype.disconnect = function() {
    qn.disconnect(this);
  }, t.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, t;
}();
function cC(t, e) {
  if (t == null) return {};
  var r = {}, n = Object.keys(t), a, i;
  for (i = 0; i < n.length; i++)
    a = n[i], !(e.indexOf(a) >= 0) && (r[a] = t[a]);
  return r;
}
function Gr(t, e) {
  if (t == null) return {};
  var r = cC(t, e), n, a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (a = 0; a < i.length; a++)
      n = i[a], !(e.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(t, n) && (r[n] = t[n]);
  }
  return r;
}
function wn(t) {
  "@babel/helpers - typeof";
  return wn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, wn(t);
}
function fC(t, e) {
  if (wn(t) !== "object" || t === null) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (wn(n) !== "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function dC(t) {
  var e = fC(t, "string");
  return wn(e) === "symbol" ? e : String(e);
}
function Pt(t, e, r) {
  return e = dC(e), e in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
var Hs = /* @__PURE__ */ st(null), pr = () => {
  var t = Se(Hs);
  if (!t)
    throw new Error("The `useSlateStatic` hook must be used inside the <Slate> component's context.");
  return t;
}, Ci, Di, hd = parseInt(de.version.split(".")[0], 10), vd = typeof navigator < "u" && typeof window < "u" && /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream, Ru = typeof navigator < "u" && /Mac OS X/.test(navigator.userAgent), pt = typeof navigator < "u" && /Android/.test(navigator.userAgent), Wr = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox).*/i.test(navigator.userAgent), Er = typeof navigator < "u" && /AppleWebKit(?!.*Chrome)/i.test(navigator.userAgent), pC = typeof navigator < "u" && /Edge?\/(?:[0-6][0-9]|[0-7][0-8])(?:\.)/i.test(navigator.userAgent), gd = typeof navigator < "u" && /Chrome/i.test(navigator.userAgent), hC = typeof navigator < "u" && /Chrome?\/(?:[0-7][0-5]|[0-6][0-9])(?:\.)/i.test(navigator.userAgent), vC = pt && typeof navigator < "u" && /Chrome?\/(?:[0-5]?\d)(?:\.)/i.test(navigator.userAgent), gC = typeof navigator < "u" && /^(?!.*Seamonkey)(?=.*Firefox\/(?:[0-7][0-9]|[0-8][0-6])(?:\.)).*/i.test(navigator.userAgent), mC = typeof navigator < "u" && /.*UCBrowser/.test(navigator.userAgent), yC = typeof navigator < "u" && /.*Wechat/.test(navigator.userAgent) && !/.*MacWechat/.test(navigator.userAgent), oa = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u";
typeof navigator < "u" && /Safari/.test(navigator.userAgent) && /Version\/(\d+)/.test(navigator.userAgent) && ((Ci = navigator.userAgent.match(/Version\/(\d+)/)) !== null && Ci !== void 0 && Ci[1] && parseInt((Di = navigator.userAgent.match(/Version\/(\d+)/)) === null || Di === void 0 ? void 0 : Di[1], 10) < 17);
var Jt = (!hC || !vC) && !pC && // globalThis is undefined in older browsers
typeof globalThis < "u" && globalThis.InputEvent && // @ts-ignore The `getTargetRanges` property isn't recognized.
typeof globalThis.InputEvent.prototype.getTargetRanges == "function", Ur = /* @__PURE__ */ new WeakMap(), Us = /* @__PURE__ */ new WeakMap(), Vs = /* @__PURE__ */ new WeakMap(), md = /* @__PURE__ */ new WeakMap(), ua = /* @__PURE__ */ new WeakMap(), Ji = /* @__PURE__ */ new WeakMap(), On = /* @__PURE__ */ new WeakMap(), Sr = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Xa = /* @__PURE__ */ new WeakMap(), Qi = /* @__PURE__ */ new WeakMap(), or = /* @__PURE__ */ new WeakMap(), xr = /* @__PURE__ */ new WeakMap(), vn = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Tt = /* @__PURE__ */ new WeakMap(), Ht = /* @__PURE__ */ new WeakMap(), mt = /* @__PURE__ */ new WeakMap(), rr = /* @__PURE__ */ new WeakMap(), nr = /* @__PURE__ */ new WeakMap(), yd = /* @__PURE__ */ new WeakMap(), Zr = Symbol("placeholder"), Cd = Symbol("mark-placeholder"), Dd = globalThis.Node, CC = globalThis.Text, Gs = (t) => t && t.ownerDocument && t.ownerDocument.defaultView || null, DC = (t) => lr(t) && t.nodeType === 8, St = (t) => lr(t) && t.nodeType === 1, lr = (t) => {
  var e = Gs(t);
  return !!e && t instanceof e.Node;
}, ts = (t) => {
  var e = t && t.anchorNode && Gs(t.anchorNode);
  return !!e && t instanceof e.Selection;
}, bd = (t) => lr(t) && t.nodeType === 3, bC = (t) => t.clipboardData && t.clipboardData.getData("text/plain") !== "" && t.clipboardData.types.length === 1, EC = (t) => {
  var [e, r] = t;
  if (St(e) && e.childNodes.length) {
    var n = r === e.childNodes.length, a = n ? r - 1 : r;
    for ([e, a] = Ed(e, a, n ? "backward" : "forward"), n = a < r; St(e) && e.childNodes.length; ) {
      var i = n ? e.childNodes.length - 1 : 0;
      e = OC(e, i, n ? "backward" : "forward");
    }
    r = n && e.textContent != null ? e.textContent.length : 0;
  }
  return [e, r];
}, wC = (t) => {
  for (var e = t && t.parentNode; e; ) {
    if (e.toString() === "[object ShadowRoot]")
      return !0;
    e = e.parentNode;
  }
  return !1;
}, Ed = (t, e, r) => {
  for (var {
    childNodes: n
  } = t, a = n[e], i = e, s = !1, o = !1; (DC(a) || St(a) && a.childNodes.length === 0 || St(a) && a.getAttribute("contenteditable") === "false") && !(s && o); ) {
    if (i >= n.length) {
      s = !0, i = e - 1, r = "backward";
      continue;
    }
    if (i < 0) {
      o = !0, i = e + 1, r = "forward";
      continue;
    }
    a = n[i], e = i, i += r === "forward" ? 1 : -1;
  }
  return [a, e];
}, OC = (t, e, r) => {
  var [n] = Ed(t, e, r);
  return n;
}, wd = (t) => {
  var e = "";
  if (bd(t) && t.nodeValue)
    return t.nodeValue;
  if (St(t)) {
    for (var r of Array.from(t.childNodes))
      e += wd(r);
    var n = getComputedStyle(t).getPropertyValue("display");
    (n === "block" || n === "list" || t.tagName === "BR") && (e += `
`);
  }
  return e;
}, xC = /data-slate-fragment="(.+?)"/m, BC = (t) => {
  var e = t.getData("text/html"), [, r] = e.match(xC) || [];
  return r;
}, gn = (t) => t.getSelection != null ? t.getSelection() : document.getSelection(), Zs = (t, e, r) => {
  var {
    target: n
  } = e;
  if (St(n) && n.matches('[contentEditable="false"]'))
    return !1;
  var {
    document: a
  } = X.getWindow(t);
  if (a.contains(n))
    return X.hasDOMNode(t, n, {
      editable: !0
    });
  var i = r.find((s) => {
    var {
      addedNodes: o,
      removedNodes: u
    } = s;
    for (var l of o)
      if (l === n || l.contains(n))
        return !0;
    for (var c of u)
      if (c === n || c.contains(n))
        return !0;
  });
  return !i || i === e ? !1 : Zs(t, i, r);
}, LC = () => {
  for (var t = document.activeElement; (e = t) !== null && e !== void 0 && e.shadowRoot && (r = t.shadowRoot) !== null && r !== void 0 && r.activeElement; ) {
    var e, r, n;
    t = (n = t) === null || n === void 0 || (n = n.shadowRoot) === null || n === void 0 ? void 0 : n.activeElement;
  }
  return t;
}, Iu = (t, e) => !!(t.compareDocumentPosition(e) & Dd.DOCUMENT_POSITION_PRECEDING), AC = (t, e) => !!(t.compareDocumentPosition(e) & Dd.DOCUMENT_POSITION_FOLLOWING), SC = 0;
class PC {
  constructor() {
    Pt(this, "id", void 0), this.id = "".concat(SC++);
  }
}
var X = {
  androidPendingDiffs: (t) => mt.get(t),
  androidScheduleFlush: (t) => {
    var e;
    (e = qs.get(t)) === null || e === void 0 || e();
  },
  blur: (t) => {
    var e = X.toDOMNode(t, t), r = X.findDocumentOrShadowRoot(t);
    or.set(t, !1), r.activeElement === e && e.blur();
  },
  deselect: (t) => {
    var {
      selection: e
    } = t, r = X.findDocumentOrShadowRoot(t), n = gn(r);
    n && n.rangeCount > 0 && n.removeAllRanges(), e && re.deselect(t);
  },
  findDocumentOrShadowRoot: (t) => {
    var e = X.toDOMNode(t, t), r = e.getRootNode();
    return r instanceof Document || r instanceof ShadowRoot ? r : e.ownerDocument;
  },
  findEventRange: (t, e) => {
    "nativeEvent" in e && (e = e.nativeEvent);
    var {
      clientX: r,
      clientY: n,
      target: a
    } = e;
    if (r == null || n == null)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var i = X.toSlateNode(t, e.target), s = X.findPath(t, i);
    if (ue.isElement(i) && g.isVoid(t, i)) {
      var o = a.getBoundingClientRect(), u = t.isInline(i) ? r - o.left < o.left + o.width - r : n - o.top < o.top + o.height - n, l = g.point(t, s, {
        edge: u ? "start" : "end"
      }), c = u ? g.before(t, l) : g.after(t, l);
      if (c) {
        var d = g.range(t, c);
        return d;
      }
    }
    var p, {
      document: m
    } = X.getWindow(t);
    if (m.caretRangeFromPoint)
      p = m.caretRangeFromPoint(r, n);
    else {
      var h = m.caretPositionFromPoint(r, n);
      h && (p = m.createRange(), p.setStart(h.offsetNode, h.offset), p.setEnd(h.offsetNode, h.offset));
    }
    if (!p)
      throw new Error("Cannot resolve a Slate range from a DOM event: ".concat(e));
    var v = X.toSlateRange(t, p, {
      exactMatch: !1,
      suppressThrow: !1
    });
    return v;
  },
  findKey: (t, e) => {
    var r = Ea.get(e);
    return r || (r = new PC(), Ea.set(e, r)), r;
  },
  findPath: (t, e) => {
    for (var r = [], n = e; ; ) {
      var a = Vs.get(n);
      if (a == null) {
        if (g.isEditor(n))
          return r;
        break;
      }
      var i = Us.get(n);
      if (i == null)
        break;
      r.unshift(i), n = a;
    }
    throw new Error("Unable to find the path for Slate node: ".concat(at.stringify(e)));
  },
  focus: function(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {
      retries: 5
    };
    if (!or.get(e)) {
      if (r.retries <= 0)
        throw new Error("Could not set focus, editor seems stuck with pending operations");
      if (e.operations.length > 0) {
        setTimeout(() => {
          X.focus(e, {
            retries: r.retries - 1
          });
        }, 10);
        return;
      }
      var n = X.toDOMNode(e, e), a = X.findDocumentOrShadowRoot(e);
      if (a.activeElement !== n) {
        if (e.selection && a instanceof Document) {
          var i = gn(a), s = X.toDOMRange(e, e.selection);
          i == null || i.removeAllRanges(), i == null || i.addRange(s);
        }
        e.selection || re.select(e, g.start(e, [])), or.set(e, !0), n.focus({
          preventScroll: !0
        });
      }
    }
  },
  getWindow: (t) => {
    var e = md.get(t);
    if (!e)
      throw new Error("Unable to find a host window element for this editor");
    return e;
  },
  hasDOMNode: function(e, r) {
    var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, {
      editable: a = !1
    } = n, i = X.toDOMNode(e, e), s;
    try {
      s = St(r) ? r : r.parentElement;
    } catch (o) {
      if (o instanceof Error && !o.message.includes('Permission denied to access property "nodeType"'))
        throw o;
    }
    return s ? s.closest("[data-slate-editor]") === i && (!a || s.isContentEditable ? !0 : typeof s.isContentEditable == "boolean" && // isContentEditable exists only on HTMLElement, and on other nodes it will be undefined
    // this is the core logic that lets you know you got the right editor.selection instead of null when editor is contenteditable="false"(readOnly)
    s.closest('[contenteditable="false"]') === i || !!s.getAttribute("data-slate-zero-width")) : !1;
  },
  hasEditableTarget: (t, e) => lr(e) && X.hasDOMNode(t, e, {
    editable: !0
  }),
  hasRange: (t, e) => {
    var {
      anchor: r,
      focus: n
    } = e;
    return g.hasPath(t, r.path) && g.hasPath(t, n.path);
  },
  hasSelectableTarget: (t, e) => X.hasEditableTarget(t, e) || X.isTargetInsideNonReadonlyVoid(t, e),
  hasTarget: (t, e) => lr(e) && X.hasDOMNode(t, e),
  insertData: (t, e) => {
    t.insertData(e);
  },
  insertFragmentData: (t, e) => t.insertFragmentData(e),
  insertTextData: (t, e) => t.insertTextData(e),
  isComposing: (t) => !!xr.get(t),
  isFocused: (t) => !!or.get(t),
  isReadOnly: (t) => !!Qi.get(t),
  isTargetInsideNonReadonlyVoid: (t, e) => {
    if (Qi.get(t)) return !1;
    var r = X.hasTarget(t, e) && X.toSlateNode(t, e);
    return ue.isElement(r) && g.isVoid(t, r);
  },
  setFragmentData: (t, e, r) => t.setFragmentData(e, r),
  toDOMNode: (t, e) => {
    var r = Xa.get(t), n = g.isEditor(e) ? ua.get(t) : r == null ? void 0 : r.get(X.findKey(t, e));
    if (!n)
      throw new Error("Cannot resolve a DOM node from Slate node: ".concat(at.stringify(e)));
    return n;
  },
  toDOMPoint: (t, e) => {
    var [r] = g.node(t, e.path), n = X.toDOMNode(t, r), a;
    g.void(t, {
      at: e
    }) && (e = {
      path: e.path,
      offset: 0
    });
    for (var i = "[data-slate-string], [data-slate-zero-width]", s = Array.from(n.querySelectorAll(i)), o = 0, u = 0; u < s.length; u++) {
      var l = s[u], c = l.childNodes[0];
      if (!(c == null || c.textContent == null)) {
        var {
          length: d
        } = c.textContent, p = l.getAttribute("data-slate-length"), m = p == null ? d : parseInt(p, 10), h = o + m, v = s[u + 1];
        if (e.offset === h && v !== null && v !== void 0 && v.hasAttribute("data-slate-mark-placeholder")) {
          var f, D = v.childNodes[0];
          a = [
            // COMPAT: If we don't explicity set the dom point to be on the actual
            // dom text element, chrome will put the selection behind the actual dom
            // text element, causing domRange.getBoundingClientRect() calls on a collapsed
            // selection to return incorrect zero values (https://bugs.chromium.org/p/chromium/issues/detail?id=435438)
            // which will cause issues when scrolling to it.
            D instanceof CC ? D : v,
            (f = v.textContent) !== null && f !== void 0 && f.startsWith("\uFEFF") ? 1 : 0
          ];
          break;
        }
        if (e.offset <= h) {
          var b = Math.min(d, Math.max(0, e.offset - o));
          a = [c, b];
          break;
        }
        o = h;
      }
    }
    if (!a)
      throw new Error("Cannot resolve a DOM point from Slate point: ".concat(at.stringify(e)));
    return a;
  },
  toDOMRange: (t, e) => {
    var {
      anchor: r,
      focus: n
    } = e, a = q.isBackward(e), i = X.toDOMPoint(t, r), s = q.isCollapsed(e) ? i : X.toDOMPoint(t, n), o = X.getWindow(t), u = o.document.createRange(), [l, c] = a ? s : i, [d, p] = a ? i : s, m = St(l) ? l : l.parentElement, h = !!m.getAttribute("data-slate-zero-width"), v = St(d) ? d : d.parentElement, f = !!v.getAttribute("data-slate-zero-width");
    return u.setStart(l, h ? 1 : c), u.setEnd(d, f ? 1 : p), u;
  },
  toSlateNode: (t, e) => {
    var r = St(e) ? e : e.parentElement;
    r && !r.hasAttribute("data-slate-node") && (r = r.closest("[data-slate-node]"));
    var n = r ? On.get(r) : null;
    if (!n)
      throw new Error("Cannot resolve a Slate node from DOM node: ".concat(r));
    return n;
  },
  toSlatePoint: (t, e, r) => {
    var {
      exactMatch: n,
      suppressThrow: a,
      searchDirection: i = "backward"
    } = r, [s, o] = n ? e : EC(e), u = s.parentNode, l = null, c = 0;
    if (u) {
      var d, p, m = X.toDOMNode(t, t), h = u.closest('[data-slate-void="true"]'), v = h && m.contains(h) ? h : null, f = u.closest('[contenteditable="false"]'), D = f && m.contains(f) ? f : null, b = u.closest("[data-slate-leaf]"), B = null;
      if (b) {
        if (l = b.closest('[data-slate-node="text"]'), l) {
          var E = X.getWindow(t), C = E.document.createRange();
          C.setStart(l, 0), C.setEnd(s, o);
          var O = C.cloneContents(), A = [...Array.prototype.slice.call(O.querySelectorAll("[data-slate-zero-width]")), ...Array.prototype.slice.call(O.querySelectorAll("[contenteditable=false]"))];
          A.forEach((U) => {
            if (pt && !n && U.hasAttribute("data-slate-zero-width") && U.textContent.length > 0 && U.textContext !== "\uFEFF") {
              U.textContent.startsWith("\uFEFF") && (U.textContent = U.textContent.slice(1));
              return;
            }
            U.parentNode.removeChild(U);
          }), c = O.textContent.length, B = l;
        }
      } else if (v) {
        for (var H = v.querySelectorAll("[data-slate-leaf]"), P = 0; P < H.length; P++) {
          var W = H[P];
          if (X.hasDOMNode(t, W)) {
            b = W;
            break;
          }
        }
        b ? (l = b.closest('[data-slate-node="text"]'), B = b, c = B.textContent.length, B.querySelectorAll("[data-slate-zero-width]").forEach((U) => {
          c -= U.textContent.length;
        })) : c = 1;
      } else if (D) {
        var R = (U) => U ? U.querySelectorAll(
          // Exclude leaf nodes in nested editors
          "[data-slate-leaf]:not(:scope [data-slate-editor] [data-slate-leaf])"
        ) : [], M = D.closest('[data-slate-node="element"]');
        if (i === "forward") {
          var z, _ = [...R(M), ...R(M == null ? void 0 : M.nextElementSibling)];
          b = (z = _.find((U) => AC(D, U))) !== null && z !== void 0 ? z : null;
        } else {
          var $, Y = [...R(M == null ? void 0 : M.previousElementSibling), ...R(M)];
          b = ($ = Y.findLast((U) => Iu(D, U))) !== null && $ !== void 0 ? $ : null;
        }
        b && (l = b.closest('[data-slate-node="text"]'), B = b, i === "forward" ? c = 0 : (c = B.textContent.length, B.querySelectorAll("[data-slate-zero-width]").forEach((U) => {
          c -= U.textContent.length;
        })));
      }
      B && c === B.textContent.length && // COMPAT: Android IMEs might remove the zero width space while composing,
      // and we don't add it for line-breaks.
      pt && B.getAttribute("data-slate-zero-width") === "z" && (d = B.textContent) !== null && d !== void 0 && d.startsWith("\uFEFF") && // COMPAT: If the parent node is a Slate zero-width space, editor is
      // because the text node should have no characters. However, during IME
      // composition the ASCII characters will be prepended to the zero-width
      // space, so subtract 1 from the offset to account for the zero-width
      // space character.
      (u.hasAttribute("data-slate-zero-width") || // COMPAT: In Firefox, `range.cloneContents()` returns an extra trailing '\n'
      // when the document ends with a new-line character. This results in the offset
      // length being off by one, so we need to subtract one to account for this.
      Wr && (p = B.textContent) !== null && p !== void 0 && p.endsWith(`

`)) && c--;
    }
    if (pt && !l && !n) {
      var V = u.hasAttribute("data-slate-node") ? u : u.closest("[data-slate-node]");
      if (V && X.hasDOMNode(t, V, {
        editable: !0
      })) {
        var ee = X.toSlateNode(t, V), {
          path: ie,
          offset: j
        } = g.start(t, X.findPath(t, ee));
        return V.querySelector("[data-slate-leaf]") || (j = o), {
          path: ie,
          offset: j
        };
      }
    }
    if (!l) {
      if (a)
        return null;
      throw new Error("Cannot resolve a Slate point from DOM point: ".concat(e));
    }
    var G = X.toSlateNode(t, l), J = X.findPath(t, G);
    return {
      path: J,
      offset: c
    };
  },
  toSlateRange: (t, e, r) => {
    var n, {
      exactMatch: a,
      suppressThrow: i
    } = r, s = ts(e) ? e.anchorNode : e.startContainer, o, u, l, c, d;
    if (s)
      if (ts(e)) {
        if (Wr && e.rangeCount > 1) {
          l = e.focusNode;
          var p = e.getRangeAt(0), m = e.getRangeAt(e.rangeCount - 1);
          if (l instanceof HTMLTableRowElement && p.startContainer instanceof HTMLTableRowElement && m.startContainer instanceof HTMLTableRowElement) {
            let O = function(A) {
              return A.childElementCount > 0 ? O(A.children[0]) : A;
            };
            var h = p.startContainer, v = m.startContainer, f = O(h.children[p.startOffset]), D = O(v.children[m.startOffset]);
            c = 0, D.childNodes.length > 0 ? o = D.childNodes[0] : o = D, f.childNodes.length > 0 ? l = f.childNodes[0] : l = f, D instanceof HTMLElement ? u = D.innerHTML.length : u = 0;
          } else
            p.startContainer === l ? (o = m.endContainer, u = m.endOffset, c = p.startOffset) : (o = p.startContainer, u = p.endOffset, c = m.startOffset);
        } else
          o = e.anchorNode, u = e.anchorOffset, l = e.focusNode, c = e.focusOffset;
        gd && wC(o) || Wr ? d = e.anchorNode === e.focusNode && e.anchorOffset === e.focusOffset : d = e.isCollapsed;
      } else
        o = e.startContainer, u = e.startOffset, l = e.endContainer, c = e.endOffset, d = e.collapsed;
    if (o == null || l == null || u == null || c == null)
      throw new Error("Cannot resolve a Slate range from DOM range: ".concat(e));
    Wr && (n = l.textContent) !== null && n !== void 0 && n.endsWith(`

`) && c === l.textContent.length && c--;
    var b = X.toSlatePoint(t, [o, u], {
      exactMatch: a,
      suppressThrow: i
    });
    if (!b)
      return null;
    var B = Iu(o, l) || o === l && c < u, E = d ? b : X.toSlatePoint(t, [l, c], {
      exactMatch: a,
      suppressThrow: i,
      searchDirection: B ? "forward" : "backward"
    });
    if (!E)
      return null;
    var C = {
      anchor: b,
      focus: E
    };
    return q.isExpanded(C) && q.isForward(C) && St(l) && g.void(t, {
      at: C.focus,
      mode: "highest"
    }) && (C = g.unhangRange(t, C, {
      voids: !0
    })), C;
  }
};
function FC(t, e) {
  var {
    path: r,
    diff: n
  } = e;
  if (!g.hasPath(t, r))
    return !1;
  var a = se.get(t, r);
  if (!le.isText(a))
    return !1;
  if (n.start !== a.text.length || n.text.length === 0)
    return a.text.slice(n.start, n.start + n.text.length) === n.text;
  var i = S.next(r);
  if (!g.hasPath(t, i))
    return !1;
  var s = se.get(t, i);
  return le.isText(s) && s.text.startsWith(n.text);
}
function Od(t) {
  for (var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)
    r[n - 1] = arguments[n];
  return r.reduce((a, i) => a.slice(0, i.start) + i.text + a.slice(i.end), t);
}
function TC(t, e) {
  for (var r = Math.min(t.length, e.length), n = 0; n < r; n++)
    if (t.charAt(n) !== e.charAt(n))
      return n;
  return r;
}
function MC(t, e, r) {
  for (var n = Math.min(t.length, e.length, r), a = 0; a < n; a++)
    if (t.charAt(t.length - a - 1) !== e.charAt(e.length - a - 1))
      return a;
  return n;
}
function xd(t, e) {
  var {
    start: r,
    end: n,
    text: a
  } = e, i = t.slice(r, n), s = TC(i, a), o = Math.min(i.length - s, a.length - s), u = MC(i, a, o), l = {
    start: r + s,
    end: n - u,
    text: a.slice(s, a.length - u)
  };
  return l.start === l.end && l.text.length === 0 ? null : l;
}
function kC(t, e, r) {
  var n = Math.min(e.start, r.start), a = Math.max(0, Math.min(e.start + e.text.length, r.end) - r.start), i = Od(t, e, r), s = Math.max(r.start + r.text.length, e.start + e.text.length + (e.start + e.text.length > r.start ? r.text.length : 0) - a), o = i.slice(n, s), u = Math.max(e.end, r.end - e.text.length + (e.end - e.start));
  return xd(t, {
    start: n,
    end: u,
    text: o
  });
}
function jC(t) {
  var {
    path: e,
    diff: r
  } = t;
  return {
    anchor: {
      path: e,
      offset: r.start
    },
    focus: {
      path: e,
      offset: r.end
    }
  };
}
function rs(t, e) {
  var {
    path: r,
    offset: n
  } = e;
  if (!g.hasPath(t, r))
    return null;
  var a = se.get(t, r);
  if (!le.isText(a))
    return null;
  var i = g.above(t, {
    match: (o) => ue.isElement(o) && g.isBlock(t, o),
    at: r
  });
  if (!i)
    return null;
  for (; n > a.text.length; ) {
    var s = g.next(t, {
      at: r,
      match: le.isText
    });
    if (!s || !S.isDescendant(s[1], i[1]))
      return null;
    n -= a.text.length, a = s[0], r = s[1];
  }
  return {
    path: r,
    offset: n
  };
}
function Nu(t, e) {
  var r = rs(t, e.anchor);
  if (!r)
    return null;
  if (q.isCollapsed(e))
    return {
      anchor: r,
      focus: r
    };
  var n = rs(t, e.focus);
  return n ? {
    anchor: r,
    focus: n
  } : null;
}
function ns(t, e, r) {
  var n = mt.get(t), a = n == null ? void 0 : n.find((c) => {
    var {
      path: d
    } = c;
    return S.equals(d, e.path);
  });
  if (!a || e.offset <= a.diff.start)
    return ye.transform(e, r, {
      affinity: "backward"
    });
  var {
    diff: i
  } = a;
  if (e.offset <= i.start + i.text.length) {
    var s = {
      path: e.path,
      offset: i.start
    }, o = ye.transform(s, r, {
      affinity: "backward"
    });
    return o ? {
      path: o.path,
      offset: o.offset + e.offset - i.start
    } : null;
  }
  var u = {
    path: e.path,
    offset: e.offset - i.text.length + i.end - i.start
  }, l = ye.transform(u, r, {
    affinity: "backward"
  });
  return l ? r.type === "split_node" && S.equals(r.path, e.path) && u.offset < r.position && i.start < r.position ? l : {
    path: l.path,
    offset: l.offset + i.text.length - i.end + i.start
  } : null;
}
function _u(t, e, r) {
  var n = ns(t, e.anchor, r);
  if (!n)
    return null;
  if (q.isCollapsed(e))
    return {
      anchor: n,
      focus: n
    };
  var a = ns(t, e.focus, r);
  return a ? {
    anchor: n,
    focus: a
  } : null;
}
function RC(t, e) {
  var {
    path: r,
    diff: n,
    id: a
  } = t;
  switch (e.type) {
    case "insert_text":
      return !S.equals(e.path, r) || e.offset >= n.end ? t : e.offset <= n.start ? {
        diff: {
          start: e.text.length + n.start,
          end: e.text.length + n.end,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end + e.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "remove_text":
      return !S.equals(e.path, r) || e.offset >= n.end ? t : e.offset + e.text.length <= n.start ? {
        diff: {
          start: n.start - e.text.length,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start,
          end: n.end - e.text.length,
          text: n.text
        },
        id: a,
        path: r
      };
    case "split_node":
      return !S.equals(e.path, r) || e.position >= n.end ? {
        diff: n,
        id: a,
        path: S.transform(r, e, {
          affinity: "backward"
        })
      } : e.position > n.start ? {
        diff: {
          start: n.start,
          end: Math.min(e.position, n.end),
          text: n.text
        },
        id: a,
        path: r
      } : {
        diff: {
          start: n.start - e.position,
          end: n.end - e.position,
          text: n.text
        },
        id: a,
        path: S.transform(r, e, {
          affinity: "forward"
        })
      };
    case "merge_node":
      return S.equals(e.path, r) ? {
        diff: {
          start: n.start + e.position,
          end: n.end + e.position,
          text: n.text
        },
        id: a,
        path: S.transform(r, e)
      } : {
        diff: n,
        id: a,
        path: S.transform(r, e)
      };
  }
  var i = S.transform(r, e);
  return i ? {
    diff: n,
    path: i,
    id: a
  } : null;
}
function $u(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Gn(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? $u(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : $u(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var IC = 25, NC = 200, _C = function() {
}, $C = (t) => (t == null ? void 0 : t.constructor.name) === "DataTransfer";
function zC(t) {
  var {
    editor: e,
    scheduleOnDOMSelectionChange: r,
    onDOMSelectionChange: n
  } = t, a = !1, i = null, s = null, o = null, u = 0, l = !1, c = () => {
    var M = nr.get(e);
    if (nr.delete(e), M) {
      var {
        selection: z
      } = e, _ = Nu(e, M);
      _ && (!z || !q.equals(_, z)) && re.select(e, _);
    }
  }, d = () => {
    var M = rr.get(e);
    if (rr.delete(e), !!M) {
      if (M.at) {
        var z = ye.isPoint(M.at) ? rs(e, M.at) : Nu(e, M.at);
        if (!z)
          return;
        var _ = g.range(e, z);
        (!e.selection || !q.equals(e.selection, _)) && re.select(e, z);
      }
      M.run();
    }
  }, p = () => {
    if (s && (clearTimeout(s), s = null), o && (clearTimeout(o), o = null), !E() && !B()) {
      c();
      return;
    }
    a || (a = !0, setTimeout(() => a = !1)), B() && (a = "action");
    var M = e.selection && g.rangeRef(e, e.selection, {
      affinity: "forward"
    });
    Ht.set(e, e.marks), _C("flush", rr.get(e), mt.get(e));
    for (var z = E(), _; _ = ($ = mt.get(e)) === null || $ === void 0 ? void 0 : $[0]; ) {
      var $, Y, V = Tt.get(e);
      V !== void 0 && (Tt.delete(e), e.marks = V), V && l === !1 && (l = null);
      var ee = jC(_);
      (!e.selection || !q.equals(e.selection, ee)) && re.select(e, ee), _.diff.text ? g.insertText(e, _.diff.text) : g.deleteFragment(e), mt.set(e, (Y = mt.get(e)) === null || Y === void 0 ? void 0 : Y.filter((G) => {
        var {
          id: J
        } = G;
        return J !== _.id;
      })), FC(e, _) || (z = !1, rr.delete(e), Ht.delete(e), a = "action", nr.delete(e), r.cancel(), n.cancel(), M == null || M.unref());
    }
    var ie = M == null ? void 0 : M.unref();
    if (ie && !nr.get(e) && (!e.selection || !q.equals(ie, e.selection)) && re.select(e, ie), B()) {
      d();
      return;
    }
    z && r(), r.flush(), n.flush(), c();
    var j = Ht.get(e);
    Ht.delete(e), j !== void 0 && (e.marks = j, e.onChange());
  }, m = (M) => {
    i && clearTimeout(i), i = setTimeout(() => {
      xr.set(e, !1), p();
    }, IC);
  }, h = (M) => {
    xr.set(e, !0), i && (clearTimeout(i), i = null);
  }, v = function() {
    var z = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, _ = Ji.get(e);
    if (_) {
      if (E() || z) {
        _.style.display = "none";
        return;
      }
      _.style.removeProperty("display");
    }
  }, f = (M, z) => {
    var _, $ = (_ = mt.get(e)) !== null && _ !== void 0 ? _ : [];
    mt.set(e, $);
    var Y = se.leaf(e, M), V = $.findIndex((j) => S.equals(j.path, M));
    if (V < 0) {
      var ee = xd(Y.text, z);
      ee && $.push({
        path: M,
        diff: z,
        id: u++
      }), v();
      return;
    }
    var ie = kC(Y.text, $[V].diff, z);
    if (!ie) {
      $.splice(V, 1), v();
      return;
    }
    $[V] = Gn(Gn({}, $[V]), {}, {
      diff: ie
    });
  }, D = function(z) {
    var {
      at: _
    } = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    l = !1, nr.delete(e), r.cancel(), n.cancel(), B() && p(), rr.set(e, {
      at: _,
      run: z
    }), o = setTimeout(p);
  }, b = (M) => {
    var z;
    if (s && (clearTimeout(s), s = null), !Ur.get(e)) {
      var {
        inputType: _
      } = M, $ = null, Y = M.dataTransfer || M.data || void 0;
      l !== !1 && _ !== "insertText" && _ !== "insertCompositionText" && (l = !1);
      var [V] = M.getTargetRanges();
      V && ($ = X.toSlateRange(e, V, {
        exactMatch: !1,
        suppressThrow: !0
      }));
      var ee = X.getWindow(e), ie = ee.getSelection();
      if (!$ && ie && (V = ie, $ = X.toSlateRange(e, ie, {
        exactMatch: !1,
        suppressThrow: !0
      })), $ = (z = $) !== null && z !== void 0 ? z : e.selection, !!$) {
        var j = !0;
        if (_.startsWith("delete")) {
          if (q.isExpanded($)) {
            var [G, J] = q.edges($), U = se.leaf(e, G.path);
            if (U.text.length === G.offset && J.offset === 0) {
              var ne = g.next(e, {
                at: G.path,
                match: le.isText
              });
              ne && S.equals(ne[1], J.path) && ($ = {
                anchor: J,
                focus: J
              });
            }
          }
          var F = _.endsWith("Backward") ? "backward" : "forward", [w, N] = q.edges($), [T, I] = g.leaf(e, w.path), Z = {
            text: "",
            start: w.offset,
            end: N.offset
          }, te = mt.get(e), Q = te == null ? void 0 : te.find((Je) => S.equals(Je.path, I)), pe = Q ? [Q.diff, Z] : [Z], fe = Od(T.text, ...pe);
          if (fe.length === 0 && (j = !1), q.isExpanded($)) {
            if (j && S.equals($.anchor.path, $.focus.path)) {
              var ce = {
                path: $.anchor.path,
                offset: w.offset
              }, we = g.range(e, ce, ce);
              return A(we), f($.anchor.path, {
                text: "",
                end: N.offset,
                start: w.offset
              });
            }
            return D(() => g.deleteFragment(e, {
              direction: F
            }), {
              at: $
            });
          }
        }
        switch (_) {
          case "deleteByComposition":
          case "deleteByCut":
          case "deleteByDrag":
            return D(() => g.deleteFragment(e), {
              at: $
            });
          case "deleteContent":
          case "deleteContentForward": {
            var {
              anchor: je
            } = $;
            if (j && q.isCollapsed($)) {
              var Le = se.leaf(e, je.path);
              if (je.offset < Le.text.length)
                return f(je.path, {
                  text: "",
                  start: je.offset,
                  end: je.offset + 1
                });
            }
            return D(() => g.deleteForward(e), {
              at: $
            });
          }
          case "deleteContentBackward": {
            var _e, {
              anchor: Ke
            } = $, ot = ts(V) ? V.isCollapsed : !!((_e = V) !== null && _e !== void 0 && _e.collapsed);
            return j && ot && q.isCollapsed($) && Ke.offset > 0 ? f(Ke.path, {
              text: "",
              start: Ke.offset - 1,
              end: Ke.offset
            }) : D(() => g.deleteBackward(e), {
              at: $
            });
          }
          case "deleteEntireSoftLine":
            return D(() => {
              g.deleteBackward(e, {
                unit: "line"
              }), g.deleteForward(e, {
                unit: "line"
              });
            }, {
              at: $
            });
          case "deleteHardLineBackward":
            return D(() => g.deleteBackward(e, {
              unit: "block"
            }), {
              at: $
            });
          case "deleteSoftLineBackward":
            return D(() => g.deleteBackward(e, {
              unit: "line"
            }), {
              at: $
            });
          case "deleteHardLineForward":
            return D(() => g.deleteForward(e, {
              unit: "block"
            }), {
              at: $
            });
          case "deleteSoftLineForward":
            return D(() => g.deleteForward(e, {
              unit: "line"
            }), {
              at: $
            });
          case "deleteWordBackward":
            return D(() => g.deleteBackward(e, {
              unit: "word"
            }), {
              at: $
            });
          case "deleteWordForward":
            return D(() => g.deleteForward(e, {
              unit: "word"
            }), {
              at: $
            });
          case "insertLineBreak":
            return D(() => g.insertSoftBreak(e), {
              at: $
            });
          case "insertParagraph":
            return D(() => g.insertBreak(e), {
              at: $
            });
          case "insertCompositionText":
          case "deleteCompositionText":
          case "insertFromComposition":
          case "insertFromDrop":
          case "insertFromPaste":
          case "insertFromYank":
          case "insertReplacementText":
          case "insertText": {
            if ($C(Y))
              return D(() => X.insertData(e, Y), {
                at: $
              });
            var Be = Y ?? "";
            if (Tt.get(e) && (Be = Be.replace("\uFEFF", "")), _ === "insertText" && /.*\n.*\n$/.test(Be) && (Be = Be.slice(0, -1)), Be.includes(`
`))
              return D(() => {
                var Je = Be.split(`
`);
                Je.forEach((nt, bt) => {
                  nt && g.insertText(e, nt), bt !== Je.length - 1 && g.insertSoftBreak(e);
                });
              }, {
                at: $
              });
            if (S.equals($.anchor.path, $.focus.path)) {
              var [tt, lt] = q.edges($), Oe = {
                start: tt.offset,
                end: lt.offset,
                text: Be
              };
              if (Be && l && _ === "insertCompositionText") {
                var Pe = l.start + l.text.search(/\S|$/), rt = Oe.start + Oe.text.search(/\S|$/);
                rt === Pe + 1 && Oe.end === l.start + l.text.length ? (Oe.start -= 1, l = null, W()) : l = !1;
              } else _ === "insertText" ? l === null ? l = Oe : l && q.isCollapsed($) && l.end + l.text.length === tt.offset ? l = Gn(Gn({}, l), {}, {
                text: l.text + Be
              }) : l = !1 : l = !1;
              if (j) {
                f(tt.path, Oe);
                return;
              }
            }
            return D(() => g.insertText(e, Be), {
              at: $
            });
          }
        }
      }
    }
  }, B = () => !!rr.get(e), E = () => {
    var M;
    return !!((M = mt.get(e)) !== null && M !== void 0 && M.length);
  }, C = () => B() || E(), O = () => a, A = (M) => {
    nr.set(e, M), s && (clearTimeout(s), s = null);
    var {
      selection: z
    } = e;
    if (M) {
      var _ = !z || !S.equals(z.anchor.path, M.anchor.path), $ = !z || !S.equals(z.anchor.path.slice(0, -1), M.anchor.path.slice(0, -1));
      (_ && l || $) && (l = !1), (_ || E()) && (s = setTimeout(p, NC));
    }
  }, H = () => {
    (B() || !E()) && p();
  }, P = (M) => {
    E() || (v(!0), setTimeout(v));
  }, W = () => {
    B() || (o = setTimeout(p));
  }, R = (M) => {
    if (!(E() || B()) && M.some((_) => Zs(e, _, M))) {
      var z;
      (z = yd.get(e)) === null || z === void 0 || z();
    }
  };
  return {
    flush: p,
    scheduleFlush: W,
    hasPendingDiffs: E,
    hasPendingAction: B,
    hasPendingChanges: C,
    isFlushing: O,
    handleUserSelect: A,
    handleCompositionEnd: m,
    handleCompositionStart: h,
    handleDOMBeforeInput: b,
    handleKeyDown: P,
    handleDomMutations: R,
    handleInput: H
  };
}
function WC() {
  var t = Re(!1);
  return x(() => (t.current = !0, () => {
    t.current = !1;
  }), []), t.current;
}
var xn = oa ? _p : x;
function HC(t, e, r) {
  var [n] = k(() => new MutationObserver(e));
  xn(() => {
    n.takeRecords();
  }), x(() => {
    if (!t.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    return n.observe(t.current, r), () => n.disconnect();
  }, [n, t, r]);
}
var UC = ["node"];
function zu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function VC(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zu(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var qC = {
  subtree: !0,
  childList: !0,
  characterData: !0
}, GC = pt ? (t) => {
  var {
    node: e
  } = t, r = Gr(t, UC);
  if (!pt)
    return null;
  var n = pr(), a = WC(), [i] = k(() => zC(VC({
    editor: n
  }, r)));
  return HC(e, i.handleDomMutations, qC), qs.set(n, i.scheduleFlush), a && i.flush(), i;
} : () => null, ZC = ["anchor", "focus"], KC = ["anchor", "focus"], YC = (t, e) => Object.keys(t).length === Object.keys(e).length && Object.keys(t).every((r) => e.hasOwnProperty(r) && t[r] === e[r]), Bd = (t, e) => {
  var r = Gr(t, ZC), n = Gr(e, KC);
  return t[Zr] === e[Zr] && YC(r, n);
}, XC = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++) {
    var n = t[r], a = e[r];
    if (!q.equals(n, a) || !Bd(n, a))
      return !1;
  }
  return !0;
}, JC = (t, e) => {
  if (t.length !== e.length)
    return !1;
  for (var r = 0; r < t.length; r++) {
    var n = t[r], a = e[r];
    if (n.anchor.offset !== a.anchor.offset || n.focus.offset !== a.focus.offset || !Bd(n, a))
      return !1;
  }
  return !0;
};
function Wu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function QC(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Wu(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Wu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var eD = (t) => {
  var {
    isLast: e,
    leaf: r,
    parent: n,
    text: a
  } = t, i = pr(), s = X.findPath(i, a), o = S.parent(s), u = !!r[Cd];
  return i.isVoid(n) ? /* @__PURE__ */ de.createElement(bi, {
    length: se.string(n).length
  }) : r.text === "" && n.children[n.children.length - 1] === a && !i.isInline(n) && g.string(i, o) === "" ? /* @__PURE__ */ de.createElement(bi, {
    isLineBreak: !0,
    isMarkPlaceholder: u
  }) : r.text === "" ? /* @__PURE__ */ de.createElement(bi, {
    isMarkPlaceholder: u
  }) : e && r.text.slice(-1) === `
` ? /* @__PURE__ */ de.createElement(Hu, {
    isTrailing: !0,
    text: r.text
  }) : /* @__PURE__ */ de.createElement(Hu, {
    text: r.text
  });
}, Hu = (t) => {
  var {
    text: e,
    isTrailing: r = !1
  } = t, n = Re(null), a = () => "".concat(e ?? "").concat(r ? `
` : ""), [i] = k(a);
  return xn(() => {
    var s = a();
    n.current && n.current.textContent !== s && (n.current.textContent = s);
  }), /* @__PURE__ */ de.createElement(tD, {
    ref: n
  }, i);
}, tD = /* @__PURE__ */ Xe(/* @__PURE__ */ vs((t, e) => /* @__PURE__ */ de.createElement("span", {
  "data-slate-string": !0,
  ref: e
}, t.children))), bi = (t) => {
  var {
    length: e = 0,
    isLineBreak: r = !1,
    isMarkPlaceholder: n = !1
  } = t, a = {
    "data-slate-zero-width": r ? "n" : "z",
    "data-slate-length": e
  };
  return n && (a["data-slate-mark-placeholder"] = !0), /* @__PURE__ */ de.createElement("span", QC({}, a), !(pt || vd) || !r ? "\uFEFF" : null, r ? /* @__PURE__ */ de.createElement("br", null) : null);
};
function Uu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ld(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Uu(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Uu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var rD = pt ? 300 : 0;
function nD(t, e) {
  t.current && (t.current.disconnect(), e && (t.current = null));
}
function Vu(t) {
  t.current && (clearTimeout(t.current), t.current = null);
}
var aD = (t) => {
  var {
    leaf: e,
    isLast: r,
    text: n,
    parent: a,
    renderPlaceholder: i,
    renderLeaf: s = (b) => /* @__PURE__ */ de.createElement(sD, Ld({}, b))
  } = t, o = pr(), u = Re(null), l = Re(null), [c, d] = k(!1), p = Re(null), m = ke((b) => {
    if (nD(u, b == null), b == null) {
      var B;
      Ji.delete(o), (B = e.onPlaceholderResize) === null || B === void 0 || B.call(e, null);
    } else {
      if (Ji.set(o, b), !u.current) {
        var E = window.ResizeObserver || lC;
        u.current = new E(() => {
          var C;
          (C = e.onPlaceholderResize) === null || C === void 0 || C.call(e, b);
        });
      }
      u.current.observe(b), l.current = b;
    }
  }, [l, e, o]), h = /* @__PURE__ */ de.createElement(eD, {
    isLast: r,
    leaf: e,
    parent: a,
    text: n
  }), v = !!e[Zr];
  if (x(() => (v ? p.current || (p.current = setTimeout(() => {
    d(!0), p.current = null;
  }, rD)) : (Vu(p), d(!1)), () => Vu(p)), [v, d]), v && c) {
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
          WebkitUserModify: Er ? "inherit" : void 0
        },
        contentEditable: !1,
        ref: m
      }
    };
    h = /* @__PURE__ */ de.createElement(de.Fragment, null, i(f), h);
  }
  var D = {
    "data-slate-leaf": !0
  };
  return s({
    attributes: D,
    children: h,
    leaf: e,
    text: n
  });
}, iD = /* @__PURE__ */ de.memo(aD, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && le.equals(e.leaf, t.leaf) && e.leaf[Zr] === t.leaf[Zr]), sD = (t) => {
  var {
    attributes: e,
    children: r
  } = t;
  return /* @__PURE__ */ de.createElement("span", Ld({}, e), r);
}, oD = (t) => {
  for (var {
    decorations: e,
    isLast: r,
    parent: n,
    renderPlaceholder: a,
    renderLeaf: i,
    text: s
  } = t, o = pr(), u = Re(null), l = le.decorations(s, e), c = X.findKey(o, s), d = [], p = 0; p < l.length; p++) {
    var m = l[p];
    d.push(/* @__PURE__ */ de.createElement(iD, {
      isLast: r && p === l.length - 1,
      key: "".concat(c.id, "-").concat(p),
      renderPlaceholder: a,
      leaf: m,
      text: s,
      parent: n,
      renderLeaf: i
    }));
  }
  var h = ke((v) => {
    var f = Xa.get(o);
    v ? (f == null || f.set(c, v), Sr.set(s, v), On.set(v, s)) : (f == null || f.delete(c), Sr.delete(s), u.current && On.delete(u.current)), u.current = v;
  }, [u, o, c, s]);
  return /* @__PURE__ */ de.createElement("span", {
    "data-slate-node": "text",
    ref: h
  }, d);
}, Ad = /* @__PURE__ */ de.memo(oD, (t, e) => e.parent === t.parent && e.isLast === t.isLast && e.renderLeaf === t.renderLeaf && e.renderPlaceholder === t.renderPlaceholder && e.text === t.text && JC(e.decorations, t.decorations));
function qu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function as(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? qu(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : qu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var uD = (t) => {
  var {
    decorations: e,
    element: r,
    renderElement: n = (b) => /* @__PURE__ */ de.createElement(cD, as({}, b)),
    renderPlaceholder: a,
    renderLeaf: i,
    selection: s
  } = t, o = pr(), u = pD(), l = o.isInline(r), c = X.findKey(o, r), d = ke((b) => {
    var B = Xa.get(o);
    b ? (B == null || B.set(c, b), Sr.set(r, b), On.set(b, r)) : (B == null || B.delete(c), Sr.delete(r));
  }, [o, c, r]), p = Pd({
    decorations: e,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: i,
    selection: s
  }), m = {
    "data-slate-node": "element",
    ref: d
  };
  if (l && (m["data-slate-inline"] = !0), !l && g.hasInlines(o, r)) {
    var h = se.string(r), v = nd(h);
    v === "rtl" && (m.dir = v);
  }
  if (g.isVoid(o, r)) {
    m["data-slate-void"] = !0, !u && l && (m.contentEditable = !1);
    var f = l ? "span" : "div", [[D]] = se.texts(r);
    p = /* @__PURE__ */ de.createElement(f, {
      "data-slate-spacer": !0,
      style: {
        height: "0",
        color: "transparent",
        outline: "none",
        position: "absolute"
      }
    }, /* @__PURE__ */ de.createElement(Ad, {
      renderPlaceholder: a,
      decorations: [],
      isLast: !1,
      parent: r,
      text: D
    })), Us.set(D, 0), Vs.set(D, r);
  }
  return n({
    attributes: m,
    children: p,
    element: r
  });
}, lD = /* @__PURE__ */ de.memo(uD, (t, e) => t.element === e.element && t.renderElement === e.renderElement && t.renderLeaf === e.renderLeaf && t.renderPlaceholder === e.renderPlaceholder && XC(t.decorations, e.decorations) && (t.selection === e.selection || !!t.selection && !!e.selection && q.equals(t.selection, e.selection))), cD = (t) => {
  var {
    attributes: e,
    children: r,
    element: n
  } = t, a = pr(), i = a.isInline(n) ? "span" : "div";
  return /* @__PURE__ */ de.createElement(i, as(as({}, e), {}, {
    style: {
      position: "relative"
    }
  }), r);
}, Sd = /* @__PURE__ */ st(() => []), fD = () => Se(Sd), dD = /* @__PURE__ */ st(!1), Pd = (t) => {
  var {
    decorations: e,
    node: r,
    renderElement: n,
    renderPlaceholder: a,
    renderLeaf: i,
    selection: s
  } = t, o = fD(), u = pr();
  Ur.set(u, !1);
  for (var l = X.findPath(u, r), c = [], d = ue.isElement(r) && !u.isInline(r) && g.hasInlines(u, r), p = 0; p < r.children.length; p++) {
    var m = l.concat(p), h = r.children[p], v = X.findKey(u, h), f = g.range(u, m), D = s && q.intersection(f, s), b = o([h, m]);
    for (var B of e) {
      var E = q.intersection(B, f);
      E && b.push(E);
    }
    ue.isElement(h) ? c.push(/* @__PURE__ */ de.createElement(dD.Provider, {
      key: "provider-".concat(v.id),
      value: !!D
    }, /* @__PURE__ */ de.createElement(lD, {
      decorations: b,
      element: h,
      key: v.id,
      renderElement: n,
      renderPlaceholder: a,
      renderLeaf: i,
      selection: D
    }))) : c.push(/* @__PURE__ */ de.createElement(Ad, {
      decorations: b,
      key: v.id,
      isLast: d && p === r.children.length - 1,
      parent: r,
      renderPlaceholder: a,
      renderLeaf: i,
      text: h
    })), Us.set(h, p), Vs.set(h, r);
  }
  return c;
}, Fd = /* @__PURE__ */ st(!1), pD = () => Se(Fd), Td = /* @__PURE__ */ st(null), Ja = () => {
  var t = Se(Td);
  if (!t)
    throw new Error("The `useSlate` hook must be used inside the <Slate> component's context.");
  var {
    editor: e
  } = t;
  return e;
};
function hD() {
  var t = pr(), e = Re(!1), r = Re(0), n = ke(() => {
    if (!e.current) {
      e.current = !0;
      var a = X.getWindow(t);
      a.cancelAnimationFrame(r.current), r.current = a.requestAnimationFrame(() => {
        e.current = !1;
      });
    }
  }, [t]);
  return x(() => () => cancelAnimationFrame(r.current), []), {
    receivedUserInput: e,
    onUserInput: n
  };
}
var vD = 3, gD = {
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
}, mD = {
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
}, yD = {
  deleteWordBackward: "ctrl+shift?+backspace",
  deleteWordForward: "ctrl+shift?+delete",
  redo: ["ctrl+y", "ctrl+shift+z"]
}, ze = (t) => {
  var e = gD[t], r = mD[t], n = yD[t], a = e && pi(e), i = r && pi(r), s = n && pi(n);
  return (o) => !!(a && a(o) || Ru && i && i(o) || !Ru && s && s(o));
}, Ue = {
  isBold: ze("bold"),
  isCompose: ze("compose"),
  isMoveBackward: ze("moveBackward"),
  isMoveForward: ze("moveForward"),
  isDeleteBackward: ze("deleteBackward"),
  isDeleteForward: ze("deleteForward"),
  isDeleteLineBackward: ze("deleteLineBackward"),
  isDeleteLineForward: ze("deleteLineForward"),
  isDeleteWordBackward: ze("deleteWordBackward"),
  isDeleteWordForward: ze("deleteWordForward"),
  isExtendBackward: ze("extendBackward"),
  isExtendForward: ze("extendForward"),
  isExtendLineBackward: ze("extendLineBackward"),
  isExtendLineForward: ze("extendLineForward"),
  isItalic: ze("italic"),
  isMoveLineBackward: ze("moveLineBackward"),
  isMoveLineForward: ze("moveLineForward"),
  isMoveWordBackward: ze("moveWordBackward"),
  isMoveWordForward: ze("moveWordForward"),
  isRedo: ze("redo"),
  isSoftBreak: ze("insertSoftBreak"),
  isSplitBlock: ze("splitBlock"),
  isTransposeCharacter: ze("transposeCharacter"),
  isUndo: ze("undo")
}, CD = (t, e) => {
  var r = [], n = () => {
    r = [];
  }, a = (s) => {
    if (e.current) {
      var o = s.filter((u) => Zs(t, u, s));
      r.push(...o);
    }
  };
  function i() {
    r.length > 0 && (r.reverse().forEach((s) => {
      s.type !== "characterData" && (s.removedNodes.forEach((o) => {
        s.target.insertBefore(o, s.nextSibling);
      }), s.addedNodes.forEach((o) => {
        s.target.removeChild(o);
      }));
    }), n());
  }
  return {
    registerMutations: a,
    restoreDOM: i,
    clear: n
  };
}, DD = {
  subtree: !0,
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0
};
class Md extends $p {
  constructor() {
    super(...arguments), Pt(this, "context", null), Pt(this, "manager", null), Pt(this, "mutationObserver", null);
  }
  observe() {
    var e, {
      node: r
    } = this.props;
    if (!r.current)
      throw new Error("Failed to attach MutationObserver, `node` is undefined");
    (e = this.mutationObserver) === null || e === void 0 || e.observe(r.current, DD);
  }
  componentDidMount() {
    var {
      receivedUserInput: e
    } = this.props, r = this.context;
    this.manager = CD(r, e), this.mutationObserver = new MutationObserver(this.manager.registerMutations), this.observe();
  }
  getSnapshotBeforeUpdate() {
    var e, r, n, a = (e = this.mutationObserver) === null || e === void 0 ? void 0 : e.takeRecords();
    if (a != null && a.length) {
      var i;
      (i = this.manager) === null || i === void 0 || i.registerMutations(a);
    }
    return (r = this.mutationObserver) === null || r === void 0 || r.disconnect(), (n = this.manager) === null || n === void 0 || n.restoreDOM(), null;
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
Pt(Md, "contextType", Hs);
var bD = pt ? Md : (t) => {
  var {
    children: e
  } = t;
  return /* @__PURE__ */ de.createElement(de.Fragment, null, e);
}, ED = /* @__PURE__ */ st(!1), wD = ["autoFocus", "decorate", "onDOMBeforeInput", "placeholder", "readOnly", "renderElement", "renderLeaf", "renderPlaceholder", "scrollSelectionIntoView", "style", "as", "disableDefaultStyles"], OD = ["text"];
function Gu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rt(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Gu(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Gu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var xD = (t) => /* @__PURE__ */ de.createElement(de.Fragment, null, Pd(t)), BD = /* @__PURE__ */ vs((t, e) => {
  var r = ke((w) => /* @__PURE__ */ de.createElement(LD, Rt({}, w)), []), {
    autoFocus: n,
    decorate: a = AD,
    onDOMBeforeInput: i,
    placeholder: s,
    readOnly: o = !1,
    renderElement: u,
    renderLeaf: l,
    renderPlaceholder: c = r,
    scrollSelectionIntoView: d = SD,
    style: p = {},
    as: m = "div",
    disableDefaultStyles: h = !1
  } = t, v = Gr(t, wD), f = Ja(), [D, b] = k(!1), B = Re(null), E = Re([]), [C, O] = k(), A = Re(!1), {
    onUserInput: H,
    receivedUserInput: P
  } = hD(), [, W] = Np((w) => w + 1, 0);
  yd.set(f, W), Qi.set(f, o);
  var R = Ut(() => ({
    isDraggingInternally: !1,
    isUpdatingSelection: !1,
    latestElement: null,
    hasMarkPlaceholder: !1
  }), []);
  x(() => {
    B.current && n && B.current.focus();
  }, [n]);
  var M = Re(), z = Ut(() => _0(() => {
    if (Ur.get(f)) {
      z();
      return;
    }
    var w = X.toDOMNode(f, f), N = w.getRootNode();
    if (!A.current && Er && N instanceof ShadowRoot) {
      A.current = !0;
      var T = LC();
      T ? document.execCommand("indent") : re.deselect(f), A.current = !1;
      return;
    }
    var I = M.current;
    if ((pt || !X.isComposing(f)) && (!R.isUpdatingSelection || I != null && I.isFlushing()) && !R.isDraggingInternally) {
      var Z = X.findDocumentOrShadowRoot(f), {
        activeElement: te
      } = Z, Q = X.toDOMNode(f, f), pe = gn(Z);
      if (te === Q ? (R.latestElement = te, or.set(f, !0)) : or.delete(f), !pe)
        return re.deselect(f);
      var {
        anchorNode: fe,
        focusNode: ce
      } = pe, we = X.hasEditableTarget(f, fe) || X.isTargetInsideNonReadonlyVoid(f, fe), je = X.hasTarget(f, ce);
      if (we && je) {
        var Le = X.toSlateRange(f, pe, {
          exactMatch: !1,
          suppressThrow: !0
        });
        Le && (!X.isComposing(f) && !(I != null && I.hasPendingChanges()) && !(I != null && I.isFlushing()) ? re.select(f, Le) : I == null || I.handleUserSelect(Le));
      }
      o && (!we || !je) && re.deselect(f);
    }
  }, 100), [f, o, R]), _ = Ut(() => M0(z, 0), [z]);
  M.current = GC({
    node: B,
    onDOMSelectionChange: z,
    scheduleOnDOMSelectionChange: _
  }), xn(() => {
    var w, N, T;
    B.current && (T = Gs(B.current)) ? (md.set(f, T), ua.set(f, B.current), Sr.set(f, B.current), On.set(B.current, f)) : Sr.delete(f);
    var {
      selection: I
    } = f, Z = X.findDocumentOrShadowRoot(f), te = gn(Z);
    if (!(!te || !X.isFocused(f) || (w = M.current) !== null && w !== void 0 && w.hasPendingAction())) {
      var Q = (we) => {
        var je = te.type !== "None";
        if (!(!I && !je)) {
          var Le = te.focusNode, _e;
          if (Wr && te.rangeCount > 1) {
            var Ke = te.getRangeAt(0), ot = te.getRangeAt(te.rangeCount - 1);
            Ke.startContainer === Le ? _e = ot.endContainer : _e = Ke.startContainer;
          } else
            _e = te.anchorNode;
          var Be = ua.get(f), tt = !1;
          if (Be.contains(_e) && Be.contains(Le) && (tt = !0), je && tt && I && !we) {
            var lt = X.toSlateRange(f, te, {
              exactMatch: !0,
              // domSelection is not necessarily a valid Slate range
              // (e.g. when clicking on contentEditable:false element)
              suppressThrow: !0
            });
            if (lt && q.equals(lt, I)) {
              var Oe;
              if (!R.hasMarkPlaceholder || (Oe = _e) !== null && Oe !== void 0 && (Oe = Oe.parentElement) !== null && Oe !== void 0 && Oe.hasAttribute("data-slate-mark-placeholder"))
                return;
            }
          }
          if (I && !X.hasRange(f, I)) {
            f.selection = X.toSlateRange(f, te, {
              exactMatch: !1,
              suppressThrow: !0
            });
            return;
          }
          R.isUpdatingSelection = !0;
          var Pe = I && X.toDOMRange(f, I);
          return Pe ? (X.isComposing(f) && !pt ? te.collapseToEnd() : q.isBackward(I) ? te.setBaseAndExtent(Pe.endContainer, Pe.endOffset, Pe.startContainer, Pe.startOffset) : te.setBaseAndExtent(Pe.startContainer, Pe.startOffset, Pe.endContainer, Pe.endOffset), d(f, Pe)) : te.removeAllRanges(), Pe;
        }
      };
      te.rangeCount <= 1 && Q();
      var pe = ((N = M.current) === null || N === void 0 ? void 0 : N.isFlushing()) === "action";
      if (!pt || !pe) {
        setTimeout(() => {
          R.isUpdatingSelection = !1;
        });
        return;
      }
      var fe = null, ce = requestAnimationFrame(() => {
        if (pe) {
          var we = (je) => {
            try {
              var Le = X.toDOMNode(f, f);
              Le.focus(), Q(je);
            } catch {
            }
          };
          we(), fe = setTimeout(() => {
            we(!0), R.isUpdatingSelection = !1;
          });
        }
      });
      return () => {
        cancelAnimationFrame(ce), fe && clearTimeout(fe);
      };
    }
  });
  var $ = ke((w) => {
    var N = X.toDOMNode(f, f), T = N.getRootNode();
    if (A != null && A.current && Er && T instanceof ShadowRoot) {
      var I = w.getTargetRanges(), Z = I[0], te = new window.Range();
      te.setStart(Z.startContainer, Z.startOffset), te.setEnd(Z.endContainer, Z.endOffset);
      var Q = X.toSlateRange(f, te, {
        exactMatch: !1,
        suppressThrow: !1
      });
      re.select(f, Q), w.preventDefault(), w.stopImmediatePropagation();
      return;
    }
    if (H(), !o && X.hasEditableTarget(f, w.target) && !PD(w, i)) {
      var pe;
      if (M.current)
        return M.current.handleDOMBeforeInput(w);
      _.flush(), z.flush();
      var {
        selection: fe
      } = f, {
        inputType: ce
      } = w, we = w.dataTransfer || w.data || void 0, je = ce === "insertCompositionText" || ce === "deleteCompositionText";
      if (je && X.isComposing(f))
        return;
      var Le = !1;
      if (ce === "insertText" && fe && q.isCollapsed(fe) && // Only use native character insertion for single characters a-z or space for now.
      // Long-press events (hold a + press 4 = ä) to choose a special character otherwise
      // causes duplicate inserts.
      w.data && w.data.length === 1 && /[a-z ]/i.test(w.data) && // Chrome has issues correctly editing the start of nodes: https://bugs.chromium.org/p/chromium/issues/detail?id=1249405
      // When there is an inline element, e.g. a link, and you select
      // right after it (the start of the next node).
      fe.anchor.offset !== 0 && (Le = !0, f.marks && (Le = !1), !Ur.get(f))) {
        var _e, Ke, {
          anchor: ot
        } = fe, [Be, tt] = X.toDOMPoint(f, ot), lt = (_e = Be.parentElement) === null || _e === void 0 ? void 0 : _e.closest("a"), Oe = X.getWindow(f);
        if (Le && lt && X.hasDOMNode(f, lt)) {
          var Pe, rt = Oe == null ? void 0 : Oe.document.createTreeWalker(lt, NodeFilter.SHOW_TEXT).lastChild();
          rt === Be && ((Pe = rt.textContent) === null || Pe === void 0 ? void 0 : Pe.length) === tt && (Le = !1);
        }
        if (Le && Be.parentElement && (Oe == null || (Ke = Oe.getComputedStyle(Be.parentElement)) === null || Ke === void 0 ? void 0 : Ke.whiteSpace) === "pre") {
          var Je = g.above(f, {
            at: ot.path,
            match: (Ft) => ue.isElement(Ft) && g.isBlock(f, Ft)
          });
          Je && se.string(Je[0]).includes("	") && (Le = !1);
        }
      }
      if ((!ce.startsWith("delete") || ce.startsWith("deleteBy")) && !Ur.get(f)) {
        var [nt] = w.getTargetRanges();
        if (nt) {
          var bt = X.toSlateRange(f, nt, {
            exactMatch: !1,
            suppressThrow: !1
          });
          if (!fe || !q.equals(fe, bt)) {
            Le = !1;
            var Qe = !je && f.selection && g.rangeRef(f, f.selection);
            re.select(f, bt), Qe && vn.set(f, Qe);
          }
        }
      }
      if (je)
        return;
      if (Le || w.preventDefault(), fe && q.isExpanded(fe) && ce.startsWith("delete")) {
        var Zt = ce.endsWith("Backward") ? "backward" : "forward";
        g.deleteFragment(f, {
          direction: Zt
        });
        return;
      }
      switch (ce) {
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
          ce === "insertFromComposition" && X.isComposing(f) && (b(!1), xr.set(f, !1)), (we == null ? void 0 : we.constructor.name) === "DataTransfer" ? X.insertData(f, we) : typeof we == "string" && (Le ? E.current.push(() => g.insertText(f, we)) : g.insertText(f, we));
          break;
        }
      }
      var Bt = (pe = vn.get(f)) === null || pe === void 0 ? void 0 : pe.unref();
      vn.delete(f), Bt && (!f.selection || !q.equals(f.selection, Bt)) && re.select(f, Bt);
    }
  }, [f, z, H, i, o, _]), Y = ke((w) => {
    w == null ? (z.cancel(), _.cancel(), ua.delete(f), Sr.delete(f), B.current && Jt && B.current.removeEventListener("beforeinput", $)) : Jt && w.addEventListener("beforeinput", $), B.current = w, typeof e == "function" ? e(w) : e && (e.current = w);
  }, [z, _, f, $, e]);
  xn(() => {
    var w = X.getWindow(f);
    w.document.addEventListener("selectionchange", _);
    var N = () => {
      R.isDraggingInternally = !1;
    };
    return w.document.addEventListener("dragend", N), w.document.addEventListener("drop", N), () => {
      w.document.removeEventListener("selectionchange", _), w.document.removeEventListener("dragend", N), w.document.removeEventListener("drop", N);
    };
  }, [_, R]);
  var V = a([f, []]), ee = s && f.children.length === 1 && Array.from(se.texts(f)).length === 1 && se.string(f) === "" && !D, ie = ke((w) => {
    if (w && ee) {
      var N;
      O((N = w.getBoundingClientRect()) === null || N === void 0 ? void 0 : N.height);
    } else
      O(void 0);
  }, [ee]);
  if (ee) {
    var j = g.start(f, []);
    V.push({
      [Zr]: !0,
      placeholder: s,
      onPlaceholderResize: ie,
      anchor: j,
      focus: j
    });
  }
  var {
    marks: G
  } = f;
  if (R.hasMarkPlaceholder = !1, f.selection && q.isCollapsed(f.selection) && G) {
    var {
      anchor: J
    } = f.selection, U = se.leaf(f, J.path), ne = Gr(U, OD);
    if (!le.equals(U, G, {
      loose: !0
    })) {
      R.hasMarkPlaceholder = !0;
      var F = Object.fromEntries(Object.keys(ne).map((w) => [w, null]));
      V.push(Rt(Rt(Rt({
        [Cd]: !0
      }, F), G), {}, {
        anchor: J,
        focus: J
      }));
    }
  }
  return x(() => {
    setTimeout(() => {
      var {
        selection: w
      } = f;
      if (w) {
        var {
          anchor: N
        } = w, T = se.leaf(f, N.path);
        if (G && !le.equals(T, G, {
          loose: !0
        })) {
          Tt.set(f, G);
          return;
        }
      }
      Tt.delete(f);
    });
  }), /* @__PURE__ */ de.createElement(Fd.Provider, {
    value: o
  }, /* @__PURE__ */ de.createElement(ED.Provider, {
    value: D
  }, /* @__PURE__ */ de.createElement(Sd.Provider, {
    value: a
  }, /* @__PURE__ */ de.createElement(bD, {
    node: B,
    receivedUserInput: P
  }, /* @__PURE__ */ de.createElement(m, Rt(Rt({
    role: o ? void 0 : "textbox",
    "aria-multiline": o ? void 0 : !0
  }, v), {}, {
    // COMPAT: Certain browsers don't support the `beforeinput` event, so we'd
    // have to use hacks to make these replacement-based features work.
    // For SSR situations HAS_BEFORE_INPUT_SUPPORT is false and results in prop
    // mismatch warning app moves to browser. Pass-through consumer props when
    // not CAN_USE_DOM (SSR) and default to falsy value
    spellCheck: Jt || !oa ? v.spellCheck : !1,
    autoCorrect: Jt || !oa ? v.autoCorrect : "false",
    autoCapitalize: Jt || !oa ? v.autoCapitalize : "false",
    "data-slate-editor": !0,
    "data-slate-node": "value",
    // explicitly set this
    contentEditable: !o,
    // in some cases, a decoration needs access to the range / selection to decorate a text node,
    // then you will select the whole text node when you select part the of text
    // this magic zIndex="-1" will fix it
    zindex: -1,
    suppressContentEditableWarning: !0,
    ref: Y,
    style: Rt(Rt({}, h ? {} : Rt({
      // Allow positioning relative to the editable element.
      position: "relative",
      // Preserve adjacent whitespace and new lines.
      whiteSpace: "pre-wrap",
      // Allow words to break if they are too long.
      wordWrap: "break-word"
    }, C ? {
      minHeight: C
    } : {})), p),
    onBeforeInput: ke((w) => {
      if (!Jt && !o && !dt(w, v.onBeforeInput) && X.hasSelectableTarget(f, w.target) && (w.preventDefault(), !X.isComposing(f))) {
        var N = w.data;
        g.insertText(f, N);
      }
    }, [v.onBeforeInput, f, o]),
    onInput: ke((w) => {
      if (!dt(w, v.onInput)) {
        if (M.current) {
          M.current.handleInput();
          return;
        }
        for (var N of E.current)
          N();
        if (E.current = [], !X.isFocused(f)) {
          var T = w.nativeEvent, I = f;
          if (T.inputType === "historyUndo" && typeof I.undo == "function") {
            I.undo();
            return;
          }
          if (T.inputType === "historyRedo" && typeof I.redo == "function") {
            I.redo();
            return;
          }
        }
      }
    }, [v.onInput, f]),
    onBlur: ke((w) => {
      if (!(o || R.isUpdatingSelection || !X.hasSelectableTarget(f, w.target) || dt(w, v.onBlur))) {
        var N = X.findDocumentOrShadowRoot(f);
        if (R.latestElement !== N.activeElement) {
          var {
            relatedTarget: T
          } = w, I = X.toDOMNode(f, f);
          if (T !== I && !(St(T) && T.hasAttribute("data-slate-spacer"))) {
            if (T != null && lr(T) && X.hasDOMNode(f, T)) {
              var Z = X.toSlateNode(f, T);
              if (ue.isElement(Z) && !f.isVoid(Z))
                return;
            }
            if (Er) {
              var te = gn(N);
              te == null || te.removeAllRanges();
            }
            or.delete(f);
          }
        }
      }
    }, [o, R.isUpdatingSelection, R.latestElement, f, v.onBlur]),
    onClick: ke((w) => {
      if (X.hasTarget(f, w.target) && !dt(w, v.onClick) && lr(w.target)) {
        var N = X.toSlateNode(f, w.target), T = X.findPath(f, N);
        if (!g.hasPath(f, T) || se.get(f, T) !== N)
          return;
        if (w.detail === vD && T.length >= 1) {
          var I = T;
          if (!(ue.isElement(N) && g.isBlock(f, N))) {
            var Z, te = g.above(f, {
              match: (Le) => ue.isElement(Le) && g.isBlock(f, Le),
              at: T
            });
            I = (Z = te == null ? void 0 : te[1]) !== null && Z !== void 0 ? Z : T.slice(0, 1);
          }
          var Q = g.range(f, I);
          re.select(f, Q);
          return;
        }
        if (o)
          return;
        var pe = g.start(f, T), fe = g.end(f, T), ce = g.void(f, {
          at: pe
        }), we = g.void(f, {
          at: fe
        });
        if (ce && we && S.equals(ce[1], we[1])) {
          var je = g.range(f, pe);
          re.select(f, je);
        }
      }
    }, [f, v.onClick, o]),
    onCompositionEnd: ke((w) => {
      if (X.hasSelectableTarget(f, w.target)) {
        var N;
        if (X.isComposing(f) && Promise.resolve().then(() => {
          b(!1), xr.set(f, !1);
        }), (N = M.current) === null || N === void 0 || N.handleCompositionEnd(w), dt(w, v.onCompositionEnd) || pt)
          return;
        if (!Er && !gC && !vd && !yC && !mC && w.data) {
          var T = Tt.get(f);
          Tt.delete(f), T !== void 0 && (Ht.set(f, f.marks), f.marks = T), g.insertText(f, w.data);
          var I = Ht.get(f);
          Ht.delete(f), I !== void 0 && (f.marks = I);
        }
      }
    }, [v.onCompositionEnd, f]),
    onCompositionUpdate: ke((w) => {
      X.hasSelectableTarget(f, w.target) && !dt(w, v.onCompositionUpdate) && (X.isComposing(f) || (b(!0), xr.set(f, !0)));
    }, [v.onCompositionUpdate, f]),
    onCompositionStart: ke((w) => {
      if (X.hasSelectableTarget(f, w.target)) {
        var N;
        if ((N = M.current) === null || N === void 0 || N.handleCompositionStart(w), dt(w, v.onCompositionStart) || pt)
          return;
        b(!0);
        var {
          selection: T
        } = f;
        if (T && q.isExpanded(T)) {
          g.deleteFragment(f);
          return;
        }
      }
    }, [v.onCompositionStart, f]),
    onCopy: ke((w) => {
      X.hasSelectableTarget(f, w.target) && !dt(w, v.onCopy) && !Zu(w) && (w.preventDefault(), X.setFragmentData(f, w.clipboardData, "copy"));
    }, [v.onCopy, f]),
    onCut: ke((w) => {
      if (!o && X.hasSelectableTarget(f, w.target) && !dt(w, v.onCut) && !Zu(w)) {
        w.preventDefault(), X.setFragmentData(f, w.clipboardData, "cut");
        var {
          selection: N
        } = f;
        if (N)
          if (q.isExpanded(N))
            g.deleteFragment(f);
          else {
            var T = se.parent(f, N.anchor.path);
            g.isVoid(f, T) && re.delete(f);
          }
      }
    }, [o, f, v.onCut]),
    onDragOver: ke((w) => {
      if (X.hasTarget(f, w.target) && !dt(w, v.onDragOver)) {
        var N = X.toSlateNode(f, w.target);
        ue.isElement(N) && g.isVoid(f, N) && w.preventDefault();
      }
    }, [v.onDragOver, f]),
    onDragStart: ke((w) => {
      if (!o && X.hasTarget(f, w.target) && !dt(w, v.onDragStart)) {
        var N = X.toSlateNode(f, w.target), T = X.findPath(f, N), I = ue.isElement(N) && g.isVoid(f, N) || g.void(f, {
          at: T,
          voids: !0
        });
        if (I) {
          var Z = g.range(f, T);
          re.select(f, Z);
        }
        R.isDraggingInternally = !0, X.setFragmentData(f, w.dataTransfer, "drag");
      }
    }, [o, f, v.onDragStart, R]),
    onDrop: ke((w) => {
      if (!o && X.hasTarget(f, w.target) && !dt(w, v.onDrop)) {
        w.preventDefault();
        var N = f.selection, T = X.findEventRange(f, w), I = w.dataTransfer;
        re.select(f, T), R.isDraggingInternally && N && !q.equals(N, T) && !g.void(f, {
          at: T,
          voids: !0
        }) && re.delete(f, {
          at: N
        }), X.insertData(f, I), X.isFocused(f) || X.focus(f);
      }
    }, [o, f, v.onDrop, R]),
    onDragEnd: ke((w) => {
      !o && R.isDraggingInternally && v.onDragEnd && X.hasTarget(f, w.target) && v.onDragEnd(w);
    }, [o, R, v, f]),
    onFocus: ke((w) => {
      if (!o && !R.isUpdatingSelection && X.hasEditableTarget(f, w.target) && !dt(w, v.onFocus)) {
        var N = X.toDOMNode(f, f), T = X.findDocumentOrShadowRoot(f);
        if (R.latestElement = T.activeElement, Wr && w.target !== N) {
          N.focus();
          return;
        }
        or.set(f, !0);
      }
    }, [o, R, f, v.onFocus]),
    onKeyDown: ke((w) => {
      if (!o && X.hasEditableTarget(f, w.target)) {
        var N;
        (N = M.current) === null || N === void 0 || N.handleKeyDown(w);
        var {
          nativeEvent: T
        } = w;
        if (X.isComposing(f) && T.isComposing === !1 && (xr.set(f, !1), b(!1)), dt(w, v.onKeyDown) || X.isComposing(f))
          return;
        var {
          selection: I
        } = f, Z = f.children[I !== null ? I.focus.path[0] : 0], te = nd(se.string(Z)) === "rtl";
        if (Ue.isRedo(T)) {
          w.preventDefault();
          var Q = f;
          typeof Q.redo == "function" && Q.redo();
          return;
        }
        if (Ue.isUndo(T)) {
          w.preventDefault();
          var pe = f;
          typeof pe.undo == "function" && pe.undo();
          return;
        }
        if (Ue.isMoveLineBackward(T)) {
          w.preventDefault(), re.move(f, {
            unit: "line",
            reverse: !0
          });
          return;
        }
        if (Ue.isMoveLineForward(T)) {
          w.preventDefault(), re.move(f, {
            unit: "line"
          });
          return;
        }
        if (Ue.isExtendLineBackward(T)) {
          w.preventDefault(), re.move(f, {
            unit: "line",
            edge: "focus",
            reverse: !0
          });
          return;
        }
        if (Ue.isExtendLineForward(T)) {
          w.preventDefault(), re.move(f, {
            unit: "line",
            edge: "focus"
          });
          return;
        }
        if (Ue.isMoveBackward(T)) {
          w.preventDefault(), I && q.isCollapsed(I) ? re.move(f, {
            reverse: !te
          }) : re.collapse(f, {
            edge: te ? "end" : "start"
          });
          return;
        }
        if (Ue.isMoveForward(T)) {
          w.preventDefault(), I && q.isCollapsed(I) ? re.move(f, {
            reverse: te
          }) : re.collapse(f, {
            edge: te ? "start" : "end"
          });
          return;
        }
        if (Ue.isMoveWordBackward(T)) {
          w.preventDefault(), I && q.isExpanded(I) && re.collapse(f, {
            edge: "focus"
          }), re.move(f, {
            unit: "word",
            reverse: !te
          });
          return;
        }
        if (Ue.isMoveWordForward(T)) {
          w.preventDefault(), I && q.isExpanded(I) && re.collapse(f, {
            edge: "focus"
          }), re.move(f, {
            unit: "word",
            reverse: te
          });
          return;
        }
        if (Jt) {
          if ((gd || Er) && I && (Ue.isDeleteBackward(T) || Ue.isDeleteForward(T)) && q.isCollapsed(I)) {
            var fe = se.parent(f, I.anchor.path);
            if (ue.isElement(fe) && g.isVoid(f, fe) && (g.isInline(f, fe) || g.isBlock(f, fe))) {
              w.preventDefault(), g.deleteBackward(f, {
                unit: "block"
              });
              return;
            }
          }
        } else {
          if (Ue.isBold(T) || Ue.isItalic(T) || Ue.isTransposeCharacter(T)) {
            w.preventDefault();
            return;
          }
          if (Ue.isSoftBreak(T)) {
            w.preventDefault(), g.insertSoftBreak(f);
            return;
          }
          if (Ue.isSplitBlock(T)) {
            w.preventDefault(), g.insertBreak(f);
            return;
          }
          if (Ue.isDeleteBackward(T)) {
            w.preventDefault(), I && q.isExpanded(I) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f);
            return;
          }
          if (Ue.isDeleteForward(T)) {
            w.preventDefault(), I && q.isExpanded(I) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f);
            return;
          }
          if (Ue.isDeleteLineBackward(T)) {
            w.preventDefault(), I && q.isExpanded(I) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f, {
              unit: "line"
            });
            return;
          }
          if (Ue.isDeleteLineForward(T)) {
            w.preventDefault(), I && q.isExpanded(I) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f, {
              unit: "line"
            });
            return;
          }
          if (Ue.isDeleteWordBackward(T)) {
            w.preventDefault(), I && q.isExpanded(I) ? g.deleteFragment(f, {
              direction: "backward"
            }) : g.deleteBackward(f, {
              unit: "word"
            });
            return;
          }
          if (Ue.isDeleteWordForward(T)) {
            w.preventDefault(), I && q.isExpanded(I) ? g.deleteFragment(f, {
              direction: "forward"
            }) : g.deleteForward(f, {
              unit: "word"
            });
            return;
          }
        }
      }
    }, [o, f, v.onKeyDown]),
    onPaste: ke((w) => {
      !o && X.hasEditableTarget(f, w.target) && !dt(w, v.onPaste) && (!Jt || bC(w.nativeEvent) || Er) && (w.preventDefault(), X.insertData(f, w.clipboardData));
    }, [o, f, v.onPaste])
  }), /* @__PURE__ */ de.createElement(xD, {
    decorations: V,
    node: f,
    renderElement: u,
    renderPlaceholder: c,
    renderLeaf: l,
    selection: f.selection
  }))))));
}), LD = (t) => {
  var {
    attributes: e,
    children: r
  } = t;
  return (
    // COMPAT: Artificially add a line-break to the end on the placeholder element
    // to prevent Android IMEs to pick up its content in autocorrect and to auto-capitalize the first letter
    /* @__PURE__ */ de.createElement("span", Rt({}, e), r, pt && /* @__PURE__ */ de.createElement("br", null))
  );
}, AD = () => [], SD = (t, e) => {
  if (e.getBoundingClientRect && (!t.selection || t.selection && q.isCollapsed(t.selection))) {
    var r = e.startContainer.parentElement;
    r.getBoundingClientRect = e.getBoundingClientRect.bind(e), W0(r, {
      scrollMode: "if-needed"
    }), delete r.getBoundingClientRect;
  }
}, dt = (t, e) => {
  if (!e)
    return !1;
  var r = e(t);
  return r ?? (t.isDefaultPrevented() || t.isPropagationStopped());
}, Zu = (t) => lr(t.target) && (t.target instanceof HTMLInputElement || t.target instanceof HTMLTextAreaElement), PD = (t, e) => {
  if (!e)
    return !1;
  var r = e(t);
  return r ?? t.defaultPrevented;
}, FD = /* @__PURE__ */ st(!1), TD = /* @__PURE__ */ st({});
function MD(t) {
  var e = Re([]).current, r = Re({
    editor: t
  }).current, n = ke((i) => {
    r.editor = i, e.forEach((s) => s(i));
  }, [e, r]), a = Ut(() => ({
    getSlate: () => r.editor,
    addEventListener: (i) => (e.push(i), () => {
      e.splice(e.indexOf(i), 1);
    })
  }), [e, r]);
  return {
    selectorContext: a,
    onChange: n
  };
}
var kD = ["editor", "children", "onChange", "onSelectionChange", "onValueChange", "initialValue"], jD = (t) => {
  var {
    editor: e,
    children: r,
    onChange: n,
    onSelectionChange: a,
    onValueChange: i,
    initialValue: s
  } = t, o = Gr(t, kD), [u, l] = de.useState(() => {
    if (!se.isNodeList(s))
      throw new Error("[Slate] initialValue is invalid! Expected a list of elements but got: ".concat(at.stringify(s)));
    if (!g.isEditor(e))
      throw new Error("[Slate] editor is invalid! You passed: ".concat(at.stringify(e)));
    return e.children = s, Object.assign(e, o), {
      v: 0,
      editor: e
    };
  }), {
    selectorContext: c,
    onChange: d
  } = MD(e), p = ke((v) => {
    var f;
    switch (n && n(e.children), v == null || (f = v.operation) === null || f === void 0 ? void 0 : f.type) {
      case "set_selection":
        a == null || a(e.selection);
        break;
      default:
        i == null || i(e.children);
    }
    l((D) => ({
      v: D.v + 1,
      editor: e
    })), d(e);
  }, [e, d, n, a, i]);
  x(() => (es.set(e, p), () => {
    es.set(e, () => {
    });
  }), [e, p]);
  var [m, h] = k(X.isFocused(e));
  return x(() => {
    h(X.isFocused(e));
  }, [e]), xn(() => {
    var v = () => h(X.isFocused(e));
    return hd >= 17 ? (document.addEventListener("focusin", v), document.addEventListener("focusout", v), () => {
      document.removeEventListener("focusin", v), document.removeEventListener("focusout", v);
    }) : (document.addEventListener("focus", v, !0), document.addEventListener("blur", v, !0), () => {
      document.removeEventListener("focus", v, !0), document.removeEventListener("blur", v, !0);
    });
  }, []), /* @__PURE__ */ de.createElement(TD.Provider, {
    value: c
  }, /* @__PURE__ */ de.createElement(Td.Provider, {
    value: u
  }, /* @__PURE__ */ de.createElement(Hs.Provider, {
    value: u.editor
  }, /* @__PURE__ */ de.createElement(FD.Provider, {
    value: m
  }, r))));
}, Ku = (t, e) => {
  var r = (e.top + e.bottom) / 2;
  return t.top <= r && t.bottom >= r;
}, Yu = (t, e, r) => {
  var n = X.toDOMRange(t, e).getBoundingClientRect(), a = X.toDOMRange(t, r).getBoundingClientRect();
  return Ku(n, a) && Ku(a, n);
}, RD = (t, e) => {
  var r = g.range(t, q.end(e)), n = Array.from(g.positions(t, {
    at: e
  })), a = 0, i = n.length, s = Math.floor(i / 2);
  if (Yu(t, g.range(t, n[a]), r))
    return g.range(t, n[a], r);
  if (n.length < 2)
    return g.range(t, n[n.length - 1], r);
  for (; s !== n.length && s !== a; )
    Yu(t, g.range(t, n[s]), r) ? i = s : a = s, s = Math.floor((a + i) / 2);
  return g.range(t, n[i], r);
};
function Xu(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ju(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Xu(Object(r), !0).forEach(function(n) {
      Pt(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Xu(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var ID = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "x-slate-fragment", n = e, {
    apply: a,
    onChange: i,
    deleteBackward: s,
    addMark: o,
    removeMark: u
  } = n;
  return Xa.set(n, /* @__PURE__ */ new WeakMap()), n.addMark = (l, c) => {
    var d, p;
    (d = qs.get(n)) === null || d === void 0 || d(), !Tt.get(n) && (p = mt.get(n)) !== null && p !== void 0 && p.length && Tt.set(n, null), Ht.delete(n), o(l, c);
  }, n.removeMark = (l) => {
    var c;
    !Tt.get(n) && (c = mt.get(n)) !== null && c !== void 0 && c.length && Tt.set(n, null), Ht.delete(n), u(l);
  }, n.deleteBackward = (l) => {
    if (l !== "line")
      return s(l);
    if (n.selection && q.isCollapsed(n.selection)) {
      var c = g.above(n, {
        match: (h) => ue.isElement(h) && g.isBlock(n, h),
        at: n.selection
      });
      if (c) {
        var [, d] = c, p = g.range(n, d, n.selection.anchor), m = RD(n, p);
        q.isCollapsed(m) || re.delete(n, {
          at: m
        });
      }
    }
  }, n.apply = (l) => {
    var c = [], d = [], p = mt.get(n);
    if (p != null && p.length) {
      var m = p.map((_) => RC(_, l)).filter(Boolean);
      mt.set(n, m);
    }
    var h = nr.get(n);
    h && nr.set(n, _u(n, h, l));
    var v = rr.get(n);
    if (v != null && v.at) {
      var f = ye.isPoint(v == null ? void 0 : v.at) ? ns(n, v.at, l) : _u(n, v.at, l);
      rr.set(n, f ? Ju(Ju({}, v), {}, {
        at: f
      }) : null);
    }
    switch (l.type) {
      case "insert_text":
      case "remove_text":
      case "set_node":
      case "split_node": {
        c.push(...$r(n, l.path));
        break;
      }
      case "set_selection": {
        var D;
        (D = vn.get(n)) === null || D === void 0 || D.unref(), vn.delete(n);
        break;
      }
      case "insert_node":
      case "remove_node": {
        c.push(...$r(n, S.parent(l.path)));
        break;
      }
      case "merge_node": {
        var b = S.previous(l.path);
        c.push(...$r(n, b));
        break;
      }
      case "move_node": {
        var B = S.common(S.parent(l.path), S.parent(l.newPath));
        c.push(...$r(n, B));
        var E;
        S.isBefore(l.path, l.newPath) ? (c.push(...$r(n, S.parent(l.path))), E = l.newPath) : (c.push(...$r(n, S.parent(l.newPath))), E = l.path);
        var C = se.get(e, S.parent(E)), O = X.findKey(n, C), A = g.pathRef(n, S.parent(E));
        d.push([A, O]);
        break;
      }
    }
    switch (a(l), l.type) {
      case "insert_node":
      case "remove_node":
      case "merge_node":
      case "move_node":
      case "split_node":
        Ur.set(n, !0);
    }
    for (var [H, P] of c) {
      var [W] = g.node(n, H);
      Ea.set(W, P);
    }
    for (var [R, M] of d) {
      if (R.current) {
        var [z] = g.node(n, R.current);
        Ea.set(z, M);
      }
      R.unref();
    }
  }, n.setFragmentData = (l) => {
    var {
      selection: c
    } = n;
    if (c) {
      var [d, p] = q.edges(c), m = g.void(n, {
        at: d.path
      }), h = g.void(n, {
        at: p.path
      });
      if (!(q.isCollapsed(c) && !m)) {
        var v = X.toDOMRange(n, c), f = v.cloneContents(), D = f.childNodes[0];
        if (f.childNodes.forEach((W) => {
          W.textContent && W.textContent.trim() !== "" && (D = W);
        }), h) {
          var [b] = h, B = v.cloneRange(), E = X.toDOMNode(n, b);
          B.setEndAfter(E), f = B.cloneContents();
        }
        if (m && (D = f.querySelector("[data-slate-spacer]")), Array.from(f.querySelectorAll("[data-slate-zero-width]")).forEach((W) => {
          var R = W.getAttribute("data-slate-zero-width") === "n";
          W.textContent = R ? `
` : "";
        }), bd(D)) {
          var C = D.ownerDocument.createElement("span");
          C.style.whiteSpace = "pre", C.appendChild(D), f.appendChild(C), D = C;
        }
        var O = n.getFragment(), A = JSON.stringify(O), H = window.btoa(encodeURIComponent(A));
        D.setAttribute("data-slate-fragment", H), l.setData("application/".concat(r), H);
        var P = f.ownerDocument.createElement("div");
        return P.appendChild(f), P.setAttribute("hidden", "true"), f.ownerDocument.body.appendChild(P), l.setData("text/html", P.innerHTML), l.setData("text/plain", wd(P)), f.ownerDocument.body.removeChild(P), l;
      }
    }
  }, n.insertData = (l) => {
    n.insertFragmentData(l) || n.insertTextData(l);
  }, n.insertFragmentData = (l) => {
    var c = l.getData("application/".concat(r)) || BC(l);
    if (c) {
      var d = decodeURIComponent(window.atob(c)), p = JSON.parse(d);
      return n.insertFragment(p), !0;
    }
    return !1;
  }, n.insertTextData = (l) => {
    var c = l.getData("text/plain");
    if (c) {
      var d = c.split(/\r\n|\r|\n/), p = !1;
      for (var m of d)
        p && re.splitNodes(n, {
          always: !0
        }), n.insertText(m), p = !0;
      return !0;
    }
    return !1;
  }, n.onChange = (l) => {
    var c = hd < 18 ? cf.unstable_batchedUpdates : (d) => d();
    c(() => {
      var d = es.get(n);
      d && d(l), i(l);
    });
  }, n;
}, $r = (t, e) => {
  var r = [];
  for (var [n, a] of g.levels(t, {
    at: e
  })) {
    var i = X.findKey(t, n);
    r.push([a, i]);
  }
  return r;
};
function kd(t, e, r = "type") {
  const { selection: n } = t;
  if (!n) return !1;
  const [a] = Array.from(
    g.nodes(t, {
      at: g.unhangRange(t, n),
      match: (i) => !g.isEditor(i) && ue.isElement(i) && i[r] === e
    })
  );
  return !!a;
}
const Qu = ["listItem", "numberedList"], la = ["left", "center", "right", "justify"];
function ND(t, e) {
  const r = la.includes(e) ? "align" : "type", n = kd(t, e, r), a = Qu.includes(e);
  re.unwrapNodes(t, {
    match: (s) => !g.isEditor(s) && ue.isElement(s) && Qu.includes(s.type) && !la.includes(e),
    split: !0
  });
  let i;
  if (la.includes(e) ? i = { align: n ? void 0 : e } : i = {
    type: n ? "paragraph" : a ? "listItem" : e
  }, re.setNodes(t, i), !n && a) {
    const s = { type: e, children: [] };
    re.wrapNodes(t, s);
  }
}
function yr({ format: t, icon: e }) {
  const r = Ja(), n = la.includes(t) ? "align" : "type", i = kd(r, t, n) ? "activeTrue" : "activeFalse";
  function s(o) {
    o.preventDefault(), ND(r, t);
  }
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      className: "arkynRichTextBlockButton " + i,
      onMouseDown: s,
      children: /* @__PURE__ */ y.jsx(e, {})
    }
  );
}
function _D({ attributes: t, children: e, element: r }) {
  const n = { textAlign: r.align };
  switch (r.type) {
    case "blockQuote":
      return /* @__PURE__ */ y.jsx(
        "blockquote",
        {
          className: "arkynElementBlockquote",
          style: n,
          ...t,
          children: e
        }
      );
    case "bulletedList":
      return /* @__PURE__ */ y.jsx("ul", { className: "arkynElementBulletList", style: n, ...t, children: e });
    case "headingOne":
      return /* @__PURE__ */ y.jsx("h1", { className: "arkynElementHeadingOne", style: n, ...t, children: e });
    case "headingTwo":
      return /* @__PURE__ */ y.jsx("h2", { className: "arkynElementHeadingTwo", style: n, ...t, children: e });
    case "listItem":
      return /* @__PURE__ */ y.jsx("li", { className: "arkynElementListItem", style: n, ...t, children: e });
    case "numberedList":
      return /* @__PURE__ */ y.jsx("ol", { className: "arkynElementNumberedList", style: n, ...t, children: e });
    case "image":
      return /* @__PURE__ */ y.jsxs("div", { style: n, ...t, children: [
        /* @__PURE__ */ y.jsx(
          "img",
          {
            className: "arkynElementImage",
            alt: "arkynElementImage",
            src: (r == null ? void 0 : r.src) || ""
          }
        ),
        e
      ] });
    default:
      return /* @__PURE__ */ y.jsx("p", { className: "arkynElementParagraph", style: n, ...t, children: e });
  }
}
const jd = st({});
function $D(t) {
  const {
    isVisibled: e,
    makeInvisible: r,
    children: n,
    className: a = "",
    ...i
  } = t, o = `arkynModalContainer ${e ? "visibleTrue" : "visibleFalse"} ${a}`;
  return /* @__PURE__ */ y.jsx(jd.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ y.jsx(ff, { children: e && /* @__PURE__ */ y.jsxs("aside", { className: o.trim(), ...i, children: [
    /* @__PURE__ */ y.jsx(
      yn.div,
      {
        className: "arkynModalContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ y.jsx(
      yn.div,
      {
        className: "arkynModalContainerContent",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0, scale: 0.75 },
        animate: { opacity: 1, scale: 1 },
        exit: { opacity: 0, scale: 0 },
        children: n
      }
    )
  ] }) }) });
}
function zD(t) {
  const { alignment: e = "right", className: r, ...n } = t, a = `arkynModalFooter ${e} ${r}`;
  return /* @__PURE__ */ y.jsx("footer", { className: a.trim(), ...n });
}
function WD(t) {
  const {
    showCloseButton: e = !0,
    className: r,
    children: n,
    ...a
  } = t, { makeInvisible: i } = Se(jd), s = `arkynModalHeader ${r}`;
  return /* @__PURE__ */ y.jsxs("header", { className: s.trim(), ...a, children: [
    n,
    e && /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        onClick: i,
        "aria-label": "Close modal button",
        className: "arkynModalHeaderCloseButton",
        children: /* @__PURE__ */ y.jsx(ms, { size: 24 })
      }
    )
  ] });
}
const is = st({});
function HD() {
  if (!is)
    throw new Error("useTabContext must be used within a TabProvider");
  return Se(is);
}
function UD(t) {
  const {
    children: e,
    onClick: r,
    defaultActive: n,
    className: a,
    ...i
  } = t, [s, o] = k(n || ""), [u, l] = k(!0), c = Re(null), d = `arkynTabContainer ${a || ""}`, [p, m] = k({
    width: "0px",
    left: "0px",
    transition: "none"
  }), h = (f, D) => {
    const b = f.getBoundingClientRect(), B = c.current.getBoundingClientRect(), E = D ? void 0 : "none";
    l(!1), m({
      transition: E,
      width: `${b.width}px`,
      left: `${b.left - B.left}px`
    });
  };
  x(() => {
    const f = c.current;
    if (!f) return;
    let D = null;
    D = f.querySelector("button.activeTrue"), D && h(D);
  }, []);
  const v = (f) => {
    const D = f.target;
    D && (o(D.value), D.classList.add("activeTrue"), h(D, !0), r && r(D.value));
  };
  return /* @__PURE__ */ y.jsxs("nav", { ref: c, className: d.trim(), ...i, children: [
    /* @__PURE__ */ y.jsx(is.Provider, { value: { handleTabClick: v, showInitialTab: u, value: s }, children: e }),
    /* @__PURE__ */ y.jsx("div", { className: "activeLine", style: p })
  ] });
}
function el(t) {
  const { children: e, className: r = "", onClick: n, ...a } = t, { value: i, showInitialTab: s, handleTabClick: o } = HD(), u = i === a.value && i ? "activeTrue" : "activeFalse", c = `arkynTabButton ${i === a.value && s ? "showBorderBottom" : ""} ${u} ${r}`;
  function d(p) {
    o(p), n && n(p);
  }
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      onClick: d,
      className: c.trim(),
      ...a,
      type: "button",
      children: e
    }
  );
}
function VD(t) {
  const {
    action: e,
    tabLabels: r = ["Adicionar URL", "Upload de arquivo"],
    modalCancelButton: n = "Cancelar",
    modalConfirmButton: a = "Confirmar",
    modalInputImageLabel: i = "Imagem:",
    modalInputUrlLabel: s = "URL da imagem:",
    modalTitle: o = "Inserir imagem"
  } = t, u = Ja(), [l, c] = k(!1), [d, p] = k(""), [m, h] = k("url");
  function v(f) {
    f.preventDefault(), !(!d || d === "") && (u.insertNodes([
      { type: "paragraph", children: [{ text: "" }] },
      { type: "image", src: d, children: [{ text: "" }] },
      { type: "paragraph", children: [{ text: "" }] }
    ]), c(!1));
  }
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsx(
      "button",
      {
        type: "button",
        className: "arkynRichTextInsertImage",
        onMouseDown: () => c(!0),
        children: /* @__PURE__ */ y.jsx(Up, {})
      }
    ),
    /* @__PURE__ */ y.jsxs(
      $D,
      {
        isVisibled: l,
        makeInvisible: () => c(!1),
        children: [
          /* @__PURE__ */ y.jsx(WD, { children: o }),
          /* @__PURE__ */ y.jsxs("div", { className: "arkynRichTextInsertImageModalContent", children: [
            /* @__PURE__ */ y.jsxs(UD, { defaultActive: m, onClick: h, children: [
              /* @__PURE__ */ y.jsx(el, { value: "url", children: r[0] }),
              /* @__PURE__ */ y.jsx(el, { value: "file", children: r[1] })
            ] }),
            m === "url" && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
              /* @__PURE__ */ y.jsxs(pu, { children: [
                /* @__PURE__ */ y.jsx(hu, { children: s }),
                /* @__PURE__ */ y.jsx(
                  Ka,
                  {
                    type: "text",
                    name: "richTextimageURL",
                    defaultValue: d,
                    onChange: (f) => p(f.target.value)
                  }
                )
              ] }),
              d && /* @__PURE__ */ y.jsx(
                "img",
                {
                  className: "arkynRichTextInsertImageModalPreviewImage",
                  src: d,
                  alt: "preview"
                }
              )
            ] }),
            m === "file" && /* @__PURE__ */ y.jsxs(pu, { children: [
              /* @__PURE__ */ y.jsx(hu, { children: i }),
              /* @__PURE__ */ y.jsx(
                ty,
                {
                  name: "richTextimageURL",
                  action: e,
                  defaultValue: d,
                  onUpload: (f) => p(f || "")
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ y.jsxs(zD, { children: [
            /* @__PURE__ */ y.jsx(
              ba,
              {
                type: "button",
                scheme: "danger",
                variant: "outline",
                onClick: () => c(!1),
                children: n
              }
            ),
            /* @__PURE__ */ y.jsx(ba, { type: "button", onClick: v, children: a })
          ] })
        ]
      }
    )
  ] });
}
function qD({ attributes: t, children: e, leaf: r }) {
  return r.bold && (e = /* @__PURE__ */ y.jsx("strong", { children: e })), r.code && (e = /* @__PURE__ */ y.jsx("code", { children: e })), r.italic && (e = /* @__PURE__ */ y.jsx("em", { children: e })), r.underline && (e = /* @__PURE__ */ y.jsx("u", { children: e })), /* @__PURE__ */ y.jsx("span", { ...t, children: e });
}
function Rd(t, e) {
  const r = g.marks(t);
  return r ? r[e] === !0 : !1;
}
function Id(t, e) {
  Rd(t, e) ? g.removeMark(t, e) : g.addMark(t, e, !0);
}
function Zn({ format: t, icon: e }) {
  const r = Ja(), a = Rd(r, t) ? "activeTrue" : "activeFalse";
  function i(s) {
    s.preventDefault(), Id(r, t);
  }
  return /* @__PURE__ */ y.jsx(
    "button",
    {
      type: "button",
      className: "arkynRichTextMarkButton " + a,
      onMouseDown: i,
      children: /* @__PURE__ */ y.jsx(e, {})
    }
  );
}
function GD({ children: t }) {
  return /* @__PURE__ */ y.jsx("div", { className: "arkynRichTextToolbar", children: t });
}
function tl(t) {
  return t.map((e) => se.string(e)).join("");
}
const rl = {
  "mod+b": "bold",
  "mod+i": "italic",
  "mod+u": "underline",
  "mod+`": "code"
}, Kn = [
  {
    type: "paragraph",
    children: [{ text: "" }]
  }
];
function dx(t) {
  const {
    name: e,
    hiddenButtons: r,
    imageConfig: n,
    defaultValue: a = "[]",
    enforceCharacterLimit: i = !1,
    onChangeCharactersCount: s,
    maxLimit: o = 2e3,
    onChange: u,
    isError: l
  } = t, c = Ut(() => Ay(ID(Hg())), []), { id: d, inputRef: p, error: m } = Dt(), h = Re(null);
  function v() {
    try {
      const V = JSON.parse(a);
      return !Array.isArray(V) || V.length <= 0 ? Kn : V.every(
        (ie) => typeof ie == "object" && ie !== null && "type" in ie && "children" in ie
      ) ? V : Kn;
    } catch {
      return Kn;
    }
  }
  const f = tl(v()), [D, b] = k(f.length), [B, E] = k(
    JSON.stringify(v()) || "[]"
  ), [C, O] = k(!1), A = p || h, H = l || !!m, P = ke(qD, []), W = ke(_D, []);
  function R(V) {
    const ee = tl(V);
    b(ee.length), s && s(ee.length), !(i && ee.length >= o) && (E(JSON.stringify(V)), u && u(V), c.children = V, re.setNodes(c, { children: V }));
  }
  const M = C ? "focusTrue" : "focusFalse", _ = `arkynRichText ${H || o < D ? "errorTrue" : "errorFalse"} ${M}`, $ = o - D;
  function Y(V) {
    return !(r != null && r.includes(V));
  }
  return /* @__PURE__ */ y.jsxs(
    jD,
    {
      editor: c,
      initialValue: v(),
      onChange: R,
      onValueChange: R,
      children: [
        /* @__PURE__ */ y.jsxs("div", { className: _, children: [
          /* @__PURE__ */ y.jsxs(GD, { children: [
            Y("headingOne") && /* @__PURE__ */ y.jsx(yr, { format: "headingOne", icon: Vp }),
            Y("headingTwo") && /* @__PURE__ */ y.jsx(yr, { format: "headingTwo", icon: qp }),
            Y("blockQuote") && /* @__PURE__ */ y.jsx(yr, { format: "blockQuote", icon: Gp }),
            Y("bold") && /* @__PURE__ */ y.jsx(Zn, { format: "bold", icon: Zp }),
            Y("italic") && /* @__PURE__ */ y.jsx(Zn, { format: "italic", icon: Kp }),
            Y("underline") && /* @__PURE__ */ y.jsx(Zn, { format: "underline", icon: Yp }),
            Y("code") && /* @__PURE__ */ y.jsx(Zn, { format: "code", icon: Xp }),
            Y("left") && /* @__PURE__ */ y.jsx(yr, { format: "left", icon: Jp }),
            Y("right") && /* @__PURE__ */ y.jsx(yr, { format: "right", icon: Qp }),
            Y("center") && /* @__PURE__ */ y.jsx(yr, { format: "center", icon: eh }),
            Y("justify") && /* @__PURE__ */ y.jsx(yr, { format: "justify", icon: th }),
            n && Y("image") && /* @__PURE__ */ y.jsx(VD, { ...n })
          ] }),
          /* @__PURE__ */ y.jsx(
            BD,
            {
              className: "editorContainer",
              renderElement: W,
              renderLeaf: P,
              spellCheck: !0,
              id: d,
              onFocus: () => O(!0),
              onBlur: () => O(!1),
              onKeyDown: (V) => {
                for (const ee in rl)
                  if (xy(ee, V)) {
                    V.preventDefault();
                    const ie = rl[ee];
                    Id(c, ie);
                  }
              }
            }
          ),
          $ < 0 && /* @__PURE__ */ y.jsx("div", { className: "restatesCharacters", children: $ })
        ] }),
        /* @__PURE__ */ y.jsx("input", { type: "hidden", ref: A, name: e, value: B }),
        /* @__PURE__ */ y.jsx("input", { type: "hidden", name: `${e}Count`, value: D })
      ]
    }
  );
}
function ZD(t, e) {
  const {
    isLoading: r,
    isError: n,
    size: a = "md",
    className: i = "",
    variant: s = "solid",
    prefix: o,
    leftIcon: u,
    disabled: l,
    readOnly: c,
    onFocus: d,
    onBlur: p,
    title: m,
    style: h,
    closeOnSelect: v = !0,
    ...f
  } = t, C = `arkyn_select ${o ? "hasPrefix" : ""} ${s} ${a} ${l || c || r ? "opacity" : ""} ${n ? "errored" : ""} ${e ? "focused" : ""} ${i}`, A = { md: 20, lg: 20 }[a];
  return {
    isLoading: r,
    className: C,
    prefix: Uf(o, A, "prefix"),
    LeftIcon: u,
    disabled: l || r || c,
    onFocus: d,
    onBlur: p,
    title: m,
    closeOnSelect: v,
    style: h,
    iconSize: A,
    Spinner: /* @__PURE__ */ y.jsx(cr, { className: "spinner", size: A, strokeWidth: 2.5 }),
    ...f
  };
}
function px(t) {
  var w;
  const [e, r] = k(""), [n, a] = k(!1), { inputRef: i, id: s, error: o } = Dt(), u = Re(null), l = i || u, c = t.isError || !!o, {
    disabled: d,
    title: p,
    style: m,
    className: h,
    prefix: v,
    iconSize: f,
    isLoading: D,
    LeftIcon: b,
    value: B = null,
    defaultValue: E = "",
    onFocus: C,
    onBlur: O,
    Spinner: A,
    name: H,
    placeholder: P,
    onSelect: W,
    options: R,
    optionMaxHeight: M,
    closeOnSelect: z,
    isSearchable: _,
    onSearch: $,
    ...Y
  } = ZD({ ...t, id: s, isError: c }, n), [V, ee] = k(E);
  function ie() {
    d || !(l != null && l.current) || n || (a(!0), l.current.focus());
  }
  function j(N) {
    n || (a(!0), C && C(N));
  }
  function G() {
    a(!1), O && l.current && l.current.blur();
  }
  function J(N) {
    const { label: T, value: I } = N;
    ee(V !== I ? I : ""), W && W({ label: T, value: I }), z && G();
  }
  const U = typeof B == "string" ? B : V, ne = ((w = R.find((N) => N.value === U)) == null ? void 0 : w.label) || "", F = () => {
    if (!n && ne) return !0;
    if (!n && !ne) return !1;
    if (n && ne) return !0;
    if (n && !ne) return !1;
  };
  return /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
    /* @__PURE__ */ y.jsxs(
      "section",
      {
        title: p,
        style: m,
        onClick: ie,
        className: `${h} placeholder_dark_${F()}`,
        children: [
          v,
          b && /* @__PURE__ */ y.jsx(b, { size: f, strokeWidth: 2.5 }),
          /* @__PURE__ */ y.jsx(
            "input",
            {
              disabled: d,
              readOnly: !0,
              placeholder: ne || P,
              onFocus: j,
              ...Y
            }
          ),
          /* @__PURE__ */ y.jsx(
            "input",
            {
              type: "hidden",
              ref: l,
              name: H,
              value: U || "",
              readOnly: !0
            }
          ),
          n && /* @__PURE__ */ y.jsxs(
            "div",
            {
              className: "arkyn_select_content",
              style: { overflow: "auto", maxHeight: M },
              children: [
                _ && /* @__PURE__ */ y.jsx(
                  Ka,
                  {
                    type: "search",
                    name: "search-select",
                    variant: "underline",
                    leftIcon: sf,
                    onChange: (N) => r(N.target.value)
                  }
                ),
                R.filter((N) => !!(t.onSearch || !t.isSearchable || N.label.toLowerCase().includes(e.toLowerCase()))).map(({ label: N, value: T }) => /* @__PURE__ */ y.jsxs(
                  "div",
                  {
                    onClick: () => J({ label: N, value: T }),
                    className: U === T ? "arkyn_select_option active" : "arkyn_select_option",
                    children: [
                      N,
                      " ",
                      /* @__PURE__ */ y.jsx(gs, {})
                    ]
                  },
                  T
                )),
                R.length <= 0 && /* @__PURE__ */ y.jsx("p", { children: "Sem opções disponíveis" })
              ]
            }
          ),
          !D && /* @__PURE__ */ y.jsx(
            af,
            {
              className: "arkyn_select_arrow",
              size: f,
              strokeWidth: 2.5
            }
          ),
          D && A
        ]
      }
    ),
    n && /* @__PURE__ */ y.jsx("aside", { className: "arkyn_select_overlay", onClick: G })
  ] });
}
function hx(t) {
  const {
    size: e = "lg",
    defaultChecked: r = !1,
    checked: n = null,
    value: a,
    unCheckedValue: i = "",
    name: s,
    className: o = "",
    onCheck: u,
    ...l
  } = t, [c, d] = k(r), { id: p, inputRef: m } = Dt(), h = typeof n == "boolean" ? n : c;
  function v() {
    d(!c), u && u(h ? i : a || "checked");
  }
  const D = `arkynSwitch ${h ? "checkedTrue" : "checkedFalse"} ${e} ${o}`;
  return /* @__PURE__ */ y.jsx("button", { type: "button", onClick: v, className: D, ...l, children: /* @__PURE__ */ y.jsx(
    "input",
    {
      id: p,
      type: "hidden",
      name: s,
      ref: m,
      onClick: v,
      value: h ? a || "checked" : i
    }
  ) });
}
function vx(t) {
  const {
    variant: e = "solid",
    size: r = "md",
    className: n,
    disabled: a = !1,
    readOnly: i = !1,
    onFocus: s,
    onBlur: o,
    title: u,
    style: l,
    ...c
  } = t, [d, p] = k(!1), { inputRef: m, id: h, error: v } = Dt(), f = Re(null), D = m || f, B = t.isError || !!v ? "errorTrue" : "errorFalse", O = `arkynTextarea ${e} ${r} ${a || i ? "opacityTrue" : "opacityFalse"} ${B} ${d ? "focusedTrue" : "focusedFalse"} ${n}`;
  function A() {
    a || !(D != null && D.current) || (p(!0), D.current.focus());
  }
  function H(W) {
    p(!0), s && s(W);
  }
  function P(W) {
    p(!1), o && o(W);
  }
  return /* @__PURE__ */ y.jsx(
    "section",
    {
      title: u,
      style: l,
      onClick: A,
      className: O,
      children: /* @__PURE__ */ y.jsx(
        "textarea",
        {
          id: h,
          disabled: a,
          readOnly: i,
          ref: D,
          onFocus: H,
          onBlur: P,
          ...c
        }
      )
    }
  );
}
function gx(t) {
  const { className: e = "", ...r } = t, n = `arkynBreadcrumbContainer ${e}`;
  return /* @__PURE__ */ y.jsx("nav", { className: n, ...r });
}
function mx(t) {
  const { pathname: e } = ys(), {
    className: r = "",
    disabled: n = !1,
    children: a,
    to: i,
    ...s
  } = t, u = `arkynBreadcrumbLink ${e === i ? "active" : "inactive"} ${r}`;
  return n ? /* @__PURE__ */ y.jsxs("p", { className: u, children: [
    /* @__PURE__ */ y.jsx(Ni, { size: 14, strokeWidth: 2.5 }),
    a
  ] }) : /* @__PURE__ */ y.jsxs(sh, { to: i, className: u, ...s, children: [
    /* @__PURE__ */ y.jsx(Ni, { size: 14, strokeWidth: 2.5 }),
    a
  ] });
}
function Nd(t = "") {
  const e = ys(), r = new URLSearchParams(e.search), n = t ? `${t}:` : "", a = (i) => {
    Object.entries(i).forEach(([s, o]) => {
      o === void 0 ? r.delete(`${n}${s}`) : r.set(`${n}${s}`, String(o));
    });
  };
  return {
    getParam: (i) => r.get(`${n}${i}`),
    getScopedSearch: (i) => {
      a(i);
      let s = r.toString();
      return s && (s = "?" + s), s;
    }
  };
}
function nl(t, e) {
  return [...new Array(e - t)].map((r, n) => t + n + 1).filter((r) => r > 0);
}
function yx(t) {
  const {
    scope: e,
    totalCountRegisters: r,
    perPageKey: n = "per_page",
    pageKey: a = "page",
    siblingsCount: i = 2,
    currentPage: s = 1,
    registerPerPage: o = 20,
    ...u
  } = t, l = uf(), { getParam: c, getScopedSearch: d } = Nd(e), p = Number(c("page")) || s, m = Number(c("per_page")) || o, h = Math.ceil(r / m), v = p > 1 ? nl(p - 1 - i, p - 1) : [], f = p < h ? nl(
    p,
    Math.min(p + i, h)
  ) : [];
  function D(b) {
    l(d({ page: b }));
  }
  return /* @__PURE__ */ y.jsxs("div", { className: "arkynPagination", ...u, children: [
    /* @__PURE__ */ y.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: p <= 1,
        onClick: () => D(p - 1),
        children: /* @__PURE__ */ y.jsx(rh, {})
      }
    ),
    p > 1 + i && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      /* @__PURE__ */ y.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => D(1),
          children: "1"
        }
      ),
      p > 2 + i && /* @__PURE__ */ y.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ y.jsx(co, {}) })
    ] }),
    v.length > 0 && v.map((b, B) => /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => D(b),
        className: "arkynPaginationPageButton",
        children: b
      },
      B
    )),
    /* @__PURE__ */ y.jsx("button", { className: "arkynPaginationCurrent", disabled: !0, children: p }),
    f.length > 0 && f.map((b, B) => /* @__PURE__ */ y.jsx(
      "button",
      {
        onClick: () => D(b),
        className: "arkynPaginationPageButton",
        children: b
      },
      B
    )),
    p + i < h && /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      p + 1 + i < h && /* @__PURE__ */ y.jsx("button", { disabled: !0, className: "arkynPaginationSpread", children: /* @__PURE__ */ y.jsx(co, {}) }),
      /* @__PURE__ */ y.jsx(
        "button",
        {
          className: "arkynPaginationPageButton",
          onClick: () => D(h),
          children: h
        }
      )
    ] }),
    /* @__PURE__ */ y.jsx(
      "button",
      {
        className: "arkynPaginationIconButton",
        disabled: p >= h,
        onClick: () => D(p + 1),
        children: /* @__PURE__ */ y.jsx(Ni, {})
      }
    )
  ] });
}
const _d = st({});
function Cx(t) {
  const {
    isVisibled: e,
    makeInvisible: r,
    orientation: n = "left",
    children: a,
    className: i,
    ...s
  } = t, o = n === "left" ? "-100%" : "100%", l = `arkynDrawerContainer ${n} ${e ? "visibleTrue" : "visibleFalse"} ${i}`;
  return /* @__PURE__ */ y.jsx(_d.Provider, { value: { makeInvisible: r }, children: /* @__PURE__ */ y.jsx(ff, { children: e && /* @__PURE__ */ y.jsxs("aside", { className: l.trim(), ...s, children: [
    /* @__PURE__ */ y.jsx(
      yn.div,
      {
        className: "arkynDrawerContainerOverlay",
        transition: { duration: 0.15, ease: "easeOut" },
        initial: { opacity: 0 },
        animate: { opacity: 1 },
        exit: { opacity: 0 },
        onClick: r
      }
    ),
    /* @__PURE__ */ y.jsx(
      yn.div,
      {
        className: "arkynDrawerContainerContent",
        transition: { ease: "easeOut", duration: 0.15 },
        initial: { transform: `translateX(${o})` },
        animate: { transform: "translateX(0px)" },
        exit: { transform: `translateX(${o})` },
        children: a
      }
    )
  ] }) }) });
}
function Dx(t) {
  const {
    showCloseButton: e = !0,
    className: r,
    children: n,
    ...a
  } = t, { makeInvisible: i } = Se(_d), s = `arkynDrawerHeader ${r}`;
  return /* @__PURE__ */ y.jsxs("header", { className: s.trim(), ...a, children: [
    n,
    e && /* @__PURE__ */ y.jsx(
      "button",
      {
        className: "arkynDrawerHeaderCloseButton",
        type: "button",
        onClick: i,
        "aria-label": "Close drawer",
        children: /* @__PURE__ */ y.jsx(ms, { size: 24 })
      }
    )
  ] });
}
function bx(t) {
  const { children: e, button: r, closeOnClick: n, orientation: a = "bottomLeft" } = t, [i, s] = k(!1), u = `arkynPopover ${a} ${i ? "visibleTrue" : "visibleFalse"}`;
  function l() {
    i || s(!0);
  }
  return /* @__PURE__ */ y.jsxs("div", { className: u, onClick: l, children: [
    r,
    /* @__PURE__ */ y.jsx(
      yn.div,
      {
        style: { visibility: i ? "visible" : "hidden" },
        transition: { ease: "easeOut", duration: 0 },
        initial: { opacity: 0 },
        animate: { opacity: i ? 1 : 0 },
        exit: { opacity: 0 },
        onClick: () => n && s(!1),
        className: "arkynPopoverContent",
        children: e
      }
    ),
    i && /* @__PURE__ */ y.jsx("div", { onClick: () => s(!1), className: "arkynPopoverOverlay" })
  ] });
}
function Ex(t) {
  const { message: e, type: r } = t, n = `arkynToast ${r}}`;
  function a() {
    switch (r) {
      case "success":
        return /* @__PURE__ */ y.jsx(nf, {});
      case "danger":
        return /* @__PURE__ */ y.jsx(rf, {});
      default:
        return /* @__PURE__ */ y.jsx(tf, {});
    }
  }
  return /* @__PURE__ */ y.jsxs("div", { className: n, children: [
    /* @__PURE__ */ y.jsxs("div", { children: [
      /* @__PURE__ */ y.jsx("div", { className: "bg" }),
      /* @__PURE__ */ y.jsx(a, {})
    ] }),
    /* @__PURE__ */ y.jsx("p", { children: /* @__PURE__ */ y.jsx("span", { children: e }) })
  ] });
}
var Ge = {}, Ks = {}, Ln = {}, An = {}, $d = "Expected a function", al = NaN, KD = "[object Symbol]", YD = /^\s+|\s+$/g, XD = /^[-+]0x[0-9a-f]+$/i, JD = /^0b[01]+$/i, QD = /^0o[0-7]+$/i, eb = parseInt, tb = typeof Ie == "object" && Ie && Ie.Object === Object && Ie, rb = typeof self == "object" && self && self.Object === Object && self, nb = tb || rb || Function("return this")(), ab = Object.prototype, ib = ab.toString, sb = Math.max, ob = Math.min, Ei = function() {
  return nb.Date.now();
};
function ub(t, e, r) {
  var n, a, i, s, o, u, l = 0, c = !1, d = !1, p = !0;
  if (typeof t != "function")
    throw new TypeError($d);
  e = il(e) || 0, wa(r) && (c = !!r.leading, d = "maxWait" in r, i = d ? sb(il(r.maxWait) || 0, e) : i, p = "trailing" in r ? !!r.trailing : p);
  function m(O) {
    var A = n, H = a;
    return n = a = void 0, l = O, s = t.apply(H, A), s;
  }
  function h(O) {
    return l = O, o = setTimeout(D, e), c ? m(O) : s;
  }
  function v(O) {
    var A = O - u, H = O - l, P = e - A;
    return d ? ob(P, i - H) : P;
  }
  function f(O) {
    var A = O - u, H = O - l;
    return u === void 0 || A >= e || A < 0 || d && H >= i;
  }
  function D() {
    var O = Ei();
    if (f(O))
      return b(O);
    o = setTimeout(D, v(O));
  }
  function b(O) {
    return o = void 0, p && n ? m(O) : (n = a = void 0, s);
  }
  function B() {
    o !== void 0 && clearTimeout(o), l = 0, n = u = a = o = void 0;
  }
  function E() {
    return o === void 0 ? s : b(Ei());
  }
  function C() {
    var O = Ei(), A = f(O);
    if (n = arguments, a = this, u = O, A) {
      if (o === void 0)
        return h(u);
      if (d)
        return o = setTimeout(D, e), m(u);
    }
    return o === void 0 && (o = setTimeout(D, e)), s;
  }
  return C.cancel = B, C.flush = E, C;
}
function lb(t, e, r) {
  var n = !0, a = !0;
  if (typeof t != "function")
    throw new TypeError($d);
  return wa(r) && (n = "leading" in r ? !!r.leading : n, a = "trailing" in r ? !!r.trailing : a), ub(t, e, {
    leading: n,
    maxWait: e,
    trailing: a
  });
}
function wa(t) {
  var e = typeof t;
  return !!t && (e == "object" || e == "function");
}
function cb(t) {
  return !!t && typeof t == "object";
}
function fb(t) {
  return typeof t == "symbol" || cb(t) && ib.call(t) == KD;
}
function il(t) {
  if (typeof t == "number")
    return t;
  if (fb(t))
    return al;
  if (wa(t)) {
    var e = typeof t.valueOf == "function" ? t.valueOf() : t;
    t = wa(e) ? e + "" : e;
  }
  if (typeof t != "string")
    return t === 0 ? t : +t;
  t = t.replace(YD, "");
  var r = JD.test(t);
  return r || QD.test(t) ? eb(t.slice(2), r ? 2 : 8) : XD.test(t) ? al : +t;
}
var db = lb, Sn = {};
Object.defineProperty(Sn, "__esModule", {
  value: !0
});
Sn.addPassiveEventListener = function(e, r, n) {
  var a = n.name;
  a || (a = r, console.warn("Listener must be a named function.")), ca.has(r) || ca.set(r, /* @__PURE__ */ new Set());
  var i = ca.get(r);
  if (!i.has(a)) {
    var s = function() {
      var o = !1;
      try {
        var u = Object.defineProperty({}, "passive", {
          get: function() {
            o = !0;
          }
        });
        window.addEventListener("test", null, u);
      } catch {
      }
      return o;
    }();
    e.addEventListener(r, n, s ? { passive: !0 } : !1), i.add(a);
  }
};
Sn.removePassiveEventListener = function(e, r, n) {
  e.removeEventListener(r, n), ca.get(r).delete(n.name || r);
};
var ca = /* @__PURE__ */ new Map();
Object.defineProperty(An, "__esModule", {
  value: !0
});
var pb = db, hb = gb(pb), vb = Sn;
function gb(t) {
  return t && t.__esModule ? t : { default: t };
}
var mb = function(e) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 66;
  return (0, hb.default)(e, r);
}, Ve = {
  spyCallbacks: [],
  spySetState: [],
  scrollSpyContainers: [],
  mount: function(e, r) {
    if (e) {
      var n = mb(function(a) {
        Ve.scrollHandler(e);
      }, r);
      Ve.scrollSpyContainers.push(e), (0, vb.addPassiveEventListener)(e, "scroll", n);
    }
  },
  isMounted: function(e) {
    return Ve.scrollSpyContainers.indexOf(e) !== -1;
  },
  currentPositionX: function(e) {
    if (e === document) {
      var r = window.pageYOffset !== void 0, n = (document.compatMode || "") === "CSS1Compat";
      return r ? window.pageXOffset : n ? document.documentElement.scrollLeft : document.body.scrollLeft;
    } else
      return e.scrollLeft;
  },
  currentPositionY: function(e) {
    if (e === document) {
      var r = window.pageXOffset !== void 0, n = (document.compatMode || "") === "CSS1Compat";
      return r ? window.pageYOffset : n ? document.documentElement.scrollTop : document.body.scrollTop;
    } else
      return e.scrollTop;
  },
  scrollHandler: function(e) {
    var r = Ve.scrollSpyContainers[Ve.scrollSpyContainers.indexOf(e)].spyCallbacks || [];
    r.forEach(function(n) {
      return n(Ve.currentPositionX(e), Ve.currentPositionY(e));
    });
  },
  addStateHandler: function(e) {
    Ve.spySetState.push(e);
  },
  addSpyHandler: function(e, r) {
    var n = Ve.scrollSpyContainers[Ve.scrollSpyContainers.indexOf(r)];
    n.spyCallbacks || (n.spyCallbacks = []), n.spyCallbacks.push(e), e(Ve.currentPositionX(r), Ve.currentPositionY(r));
  },
  updateStates: function() {
    Ve.spySetState.forEach(function(e) {
      return e();
    });
  },
  unmount: function(e, r) {
    Ve.scrollSpyContainers.forEach(function(n) {
      return n.spyCallbacks && n.spyCallbacks.length && n.spyCallbacks.indexOf(r) > -1 && n.spyCallbacks.splice(n.spyCallbacks.indexOf(r), 1);
    }), Ve.spySetState && Ve.spySetState.length && Ve.spySetState.indexOf(e) > -1 && Ve.spySetState.splice(Ve.spySetState.indexOf(e), 1), document.removeEventListener("scroll", Ve.scrollHandler);
  },
  update: function() {
    return Ve.scrollSpyContainers.forEach(function(e) {
      return Ve.scrollHandler(e);
    });
  }
};
An.default = Ve;
var Yr = {}, Pn = {};
Object.defineProperty(Pn, "__esModule", {
  value: !0
});
var yb = function(e, r) {
  var n = e.indexOf("#") === 0 ? e.substring(1) : e, a = n ? "#" + n : "", i = window && window.location, s = a ? i.pathname + i.search + a : i.pathname + i.search;
  r ? history.pushState(history.state, "", s) : history.replaceState(history.state, "", s);
}, Cb = function() {
  return window.location.hash.replace(/^#/, "");
}, Db = function(e) {
  return function(r) {
    return e.contains ? e != r && e.contains(r) : !!(e.compareDocumentPosition(r) & 16);
  };
}, bb = function(e) {
  return getComputedStyle(e).position !== "static";
}, wi = function(e, r) {
  for (var n = e.offsetTop, a = e.offsetParent; a && !r(a); )
    n += a.offsetTop, a = a.offsetParent;
  return { offsetTop: n, offsetParent: a };
}, Eb = function(e, r, n) {
  if (n)
    return e === document ? r.getBoundingClientRect().left + (window.scrollX || window.pageXOffset) : getComputedStyle(e).position !== "static" ? r.offsetLeft : r.offsetLeft - e.offsetLeft;
  if (e === document)
    return r.getBoundingClientRect().top + (window.scrollY || window.pageYOffset);
  if (bb(e)) {
    if (r.offsetParent !== e) {
      var a = function(c) {
        return c === e || c === document;
      }, i = wi(r, a), s = i.offsetTop, o = i.offsetParent;
      if (o !== e)
        throw new Error("Seems containerElement is not an ancestor of the Element");
      return s;
    }
    return r.offsetTop;
  }
  if (r.offsetParent === e.offsetParent)
    return r.offsetTop - e.offsetTop;
  var u = function(c) {
    return c === document;
  };
  return wi(r, u).offsetTop - wi(e, u).offsetTop;
};
Pn.default = {
  updateHash: yb,
  getHash: Cb,
  filterElementInContainer: Db,
  scrollOffset: Eb
};
var Qa = {}, Ys = {};
Object.defineProperty(Ys, "__esModule", {
  value: !0
});
Ys.default = {
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
var Xs = {};
Object.defineProperty(Xs, "__esModule", {
  value: !0
});
var wb = Sn, Ob = ["mousedown", "mousewheel", "touchmove", "keydown"];
Xs.default = {
  subscribe: function(e) {
    return typeof document < "u" && Ob.forEach(function(r) {
      return (0, wb.addPassiveEventListener)(document, r, e);
    });
  }
};
var Fn = {};
Object.defineProperty(Fn, "__esModule", {
  value: !0
});
var ss = {
  registered: {},
  scrollEvent: {
    register: function(e, r) {
      ss.registered[e] = r;
    },
    remove: function(e) {
      ss.registered[e] = null;
    }
  }
};
Fn.default = ss;
Object.defineProperty(Qa, "__esModule", {
  value: !0
});
var xb = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}, Bb = Pn;
ei(Bb);
var Lb = Ys, sl = ei(Lb), Ab = Xs, Sb = ei(Ab), Pb = Fn, It = ei(Pb);
function ei(t) {
  return t && t.__esModule ? t : { default: t };
}
var zd = function(e) {
  return sl.default[e.smooth] || sl.default.defaultEasing;
}, Fb = function(e) {
  return typeof e == "function" ? e : function() {
    return e;
  };
}, Tb = function() {
  if (typeof window < "u")
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame;
}, os = function() {
  return Tb() || function(t, e, r) {
    window.setTimeout(t, r || 1e3 / 60, (/* @__PURE__ */ new Date()).getTime());
  };
}(), Wd = function() {
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
}, Hd = function(e) {
  var r = e.data.containerElement;
  if (r && r !== document && r !== document.body)
    return r.scrollLeft;
  var n = window.pageXOffset !== void 0, a = (document.compatMode || "") === "CSS1Compat";
  return n ? window.pageXOffset : a ? document.documentElement.scrollLeft : document.body.scrollLeft;
}, Ud = function(e) {
  var r = e.data.containerElement;
  if (r && r !== document && r !== document.body)
    return r.scrollTop;
  var n = window.pageXOffset !== void 0, a = (document.compatMode || "") === "CSS1Compat";
  return n ? window.pageYOffset : a ? document.documentElement.scrollTop : document.body.scrollTop;
}, Mb = function(e) {
  var r = e.data.containerElement;
  if (r && r !== document && r !== document.body)
    return r.scrollWidth - r.offsetWidth;
  var n = document.body, a = document.documentElement;
  return Math.max(n.scrollWidth, n.offsetWidth, a.clientWidth, a.scrollWidth, a.offsetWidth);
}, kb = function(e) {
  var r = e.data.containerElement;
  if (r && r !== document && r !== document.body)
    return r.scrollHeight - r.offsetHeight;
  var n = document.body, a = document.documentElement;
  return Math.max(n.scrollHeight, n.offsetHeight, a.clientHeight, a.scrollHeight, a.offsetHeight);
}, jb = function t(e, r, n) {
  var a = r.data;
  if (!r.ignoreCancelEvents && a.cancel) {
    It.default.registered.end && It.default.registered.end(a.to, a.target, a.currentPositionY);
    return;
  }
  if (a.delta = Math.round(a.targetPosition - a.startPosition), a.start === null && (a.start = n), a.progress = n - a.start, a.percent = a.progress >= a.duration ? 1 : e(a.progress / a.duration), a.currentPosition = a.startPosition + Math.ceil(a.delta * a.percent), a.containerElement && a.containerElement !== document && a.containerElement !== document.body ? r.horizontal ? a.containerElement.scrollLeft = a.currentPosition : a.containerElement.scrollTop = a.currentPosition : r.horizontal ? window.scrollTo(a.currentPosition, 0) : window.scrollTo(0, a.currentPosition), a.percent < 1) {
    var i = t.bind(null, e, r);
    os.call(window, i);
    return;
  }
  It.default.registered.end && It.default.registered.end(a.to, a.target, a.currentPosition);
}, Js = function(e) {
  e.data.containerElement = e ? e.containerId ? document.getElementById(e.containerId) : e.container && e.container.nodeType ? e.container : document : null;
}, Tn = function(e, r, n, a) {
  r.data = r.data || Wd(), window.clearTimeout(r.data.delayTimeout);
  var i = function() {
    r.data.cancel = !0;
  };
  if (Sb.default.subscribe(i), Js(r), r.data.start = null, r.data.cancel = !1, r.data.startPosition = r.horizontal ? Hd(r) : Ud(r), r.data.targetPosition = r.absolute ? e : e + r.data.startPosition, r.data.startPosition === r.data.targetPosition) {
    It.default.registered.end && It.default.registered.end(r.data.to, r.data.target, r.data.currentPosition);
    return;
  }
  r.data.delta = Math.round(r.data.targetPosition - r.data.startPosition), r.data.duration = Fb(r.duration)(r.data.delta), r.data.duration = isNaN(parseFloat(r.data.duration)) ? 1e3 : parseFloat(r.data.duration), r.data.to = n, r.data.target = a;
  var s = zd(r), o = jb.bind(null, s, r);
  if (r && r.delay > 0) {
    r.data.delayTimeout = window.setTimeout(function() {
      It.default.registered.begin && It.default.registered.begin(r.data.to, r.data.target), os.call(window, o);
    }, r.delay);
    return;
  }
  It.default.registered.begin && It.default.registered.begin(r.data.to, r.data.target), os.call(window, o);
}, ti = function(e) {
  return e = xb({}, e), e.data = e.data || Wd(), e.absolute = !0, e;
}, Rb = function(e) {
  Tn(0, ti(e));
}, Ib = function(e, r) {
  Tn(e, ti(r));
}, Nb = function(e) {
  e = ti(e), Js(e), Tn(e.horizontal ? Mb(e) : kb(e), e);
}, _b = function(e, r) {
  r = ti(r), Js(r);
  var n = r.horizontal ? Hd(r) : Ud(r);
  Tn(e + n, r);
};
Qa.default = {
  animateTopScroll: Tn,
  getAnimationType: zd,
  scrollToTop: Rb,
  scrollToBottom: Nb,
  scrollTo: Ib,
  scrollMore: _b
};
Object.defineProperty(Yr, "__esModule", {
  value: !0
});
var $b = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}, zb = Pn, Wb = Qs(zb), Hb = Qa, Ub = Qs(Hb), Vb = Fn, Yn = Qs(Vb);
function Qs(t) {
  return t && t.__esModule ? t : { default: t };
}
var Xn = {}, ol = void 0;
Yr.default = {
  unmount: function() {
    Xn = {};
  },
  register: function(e, r) {
    Xn[e] = r;
  },
  unregister: function(e) {
    delete Xn[e];
  },
  get: function(e) {
    return Xn[e] || document.getElementById(e) || document.getElementsByName(e)[0] || document.getElementsByClassName(e)[0];
  },
  setActiveLink: function(e) {
    return ol = e;
  },
  getActiveLink: function() {
    return ol;
  },
  scrollTo: function(e, r) {
    var n = this.get(e);
    if (!n) {
      console.warn("target Element not found");
      return;
    }
    r = $b({}, r, { absolute: !1 });
    var a = r.containerId, i = r.container, s = void 0;
    a ? s = document.getElementById(a) : i && i.nodeType ? s = i : s = document, r.absolute = !0;
    var o = r.horizontal, u = Wb.default.scrollOffset(s, n, o) + (r.offset || 0);
    if (!r.smooth) {
      Yn.default.registered.begin && Yn.default.registered.begin(e, n), s === document ? r.horizontal ? window.scrollTo(u, 0) : window.scrollTo(0, u) : s.scrollTop = u, Yn.default.registered.end && Yn.default.registered.end(e, n);
      return;
    }
    Ub.default.animateTopScroll(u, r, e, n);
  }
};
var us = { exports: {} }, Jn = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ul;
function qb() {
  if (ul) return Te;
  ul = 1;
  var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, f = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
  function B(C) {
    if (typeof C == "object" && C !== null) {
      var O = C.$$typeof;
      switch (O) {
        case e:
          switch (C = C.type, C) {
            case u:
            case l:
            case n:
            case i:
            case a:
            case d:
              return C;
            default:
              switch (C = C && C.$$typeof, C) {
                case o:
                case c:
                case h:
                case m:
                case s:
                  return C;
                default:
                  return O;
              }
          }
        case r:
          return O;
      }
    }
  }
  function E(C) {
    return B(C) === l;
  }
  return Te.AsyncMode = u, Te.ConcurrentMode = l, Te.ContextConsumer = o, Te.ContextProvider = s, Te.Element = e, Te.ForwardRef = c, Te.Fragment = n, Te.Lazy = h, Te.Memo = m, Te.Portal = r, Te.Profiler = i, Te.StrictMode = a, Te.Suspense = d, Te.isAsyncMode = function(C) {
    return E(C) || B(C) === u;
  }, Te.isConcurrentMode = E, Te.isContextConsumer = function(C) {
    return B(C) === o;
  }, Te.isContextProvider = function(C) {
    return B(C) === s;
  }, Te.isElement = function(C) {
    return typeof C == "object" && C !== null && C.$$typeof === e;
  }, Te.isForwardRef = function(C) {
    return B(C) === c;
  }, Te.isFragment = function(C) {
    return B(C) === n;
  }, Te.isLazy = function(C) {
    return B(C) === h;
  }, Te.isMemo = function(C) {
    return B(C) === m;
  }, Te.isPortal = function(C) {
    return B(C) === r;
  }, Te.isProfiler = function(C) {
    return B(C) === i;
  }, Te.isStrictMode = function(C) {
    return B(C) === a;
  }, Te.isSuspense = function(C) {
    return B(C) === d;
  }, Te.isValidElementType = function(C) {
    return typeof C == "string" || typeof C == "function" || C === n || C === l || C === i || C === a || C === d || C === p || typeof C == "object" && C !== null && (C.$$typeof === h || C.$$typeof === m || C.$$typeof === s || C.$$typeof === o || C.$$typeof === c || C.$$typeof === f || C.$$typeof === D || C.$$typeof === b || C.$$typeof === v);
  }, Te.typeOf = B, Te;
}
var Me = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll;
function Gb() {
  return ll || (ll = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, e = t ? Symbol.for("react.element") : 60103, r = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, a = t ? Symbol.for("react.strict_mode") : 60108, i = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, o = t ? Symbol.for("react.context") : 60110, u = t ? Symbol.for("react.async_mode") : 60111, l = t ? Symbol.for("react.concurrent_mode") : 60111, c = t ? Symbol.for("react.forward_ref") : 60112, d = t ? Symbol.for("react.suspense") : 60113, p = t ? Symbol.for("react.suspense_list") : 60120, m = t ? Symbol.for("react.memo") : 60115, h = t ? Symbol.for("react.lazy") : 60116, v = t ? Symbol.for("react.block") : 60121, f = t ? Symbol.for("react.fundamental") : 60117, D = t ? Symbol.for("react.responder") : 60118, b = t ? Symbol.for("react.scope") : 60119;
    function B(Q) {
      return typeof Q == "string" || typeof Q == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      Q === n || Q === l || Q === i || Q === a || Q === d || Q === p || typeof Q == "object" && Q !== null && (Q.$$typeof === h || Q.$$typeof === m || Q.$$typeof === s || Q.$$typeof === o || Q.$$typeof === c || Q.$$typeof === f || Q.$$typeof === D || Q.$$typeof === b || Q.$$typeof === v);
    }
    function E(Q) {
      if (typeof Q == "object" && Q !== null) {
        var pe = Q.$$typeof;
        switch (pe) {
          case e:
            var fe = Q.type;
            switch (fe) {
              case u:
              case l:
              case n:
              case i:
              case a:
              case d:
                return fe;
              default:
                var ce = fe && fe.$$typeof;
                switch (ce) {
                  case o:
                  case c:
                  case h:
                  case m:
                  case s:
                    return ce;
                  default:
                    return pe;
                }
            }
          case r:
            return pe;
        }
      }
    }
    var C = u, O = l, A = o, H = s, P = e, W = c, R = n, M = h, z = m, _ = r, $ = i, Y = a, V = d, ee = !1;
    function ie(Q) {
      return ee || (ee = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), j(Q) || E(Q) === u;
    }
    function j(Q) {
      return E(Q) === l;
    }
    function G(Q) {
      return E(Q) === o;
    }
    function J(Q) {
      return E(Q) === s;
    }
    function U(Q) {
      return typeof Q == "object" && Q !== null && Q.$$typeof === e;
    }
    function ne(Q) {
      return E(Q) === c;
    }
    function F(Q) {
      return E(Q) === n;
    }
    function w(Q) {
      return E(Q) === h;
    }
    function N(Q) {
      return E(Q) === m;
    }
    function T(Q) {
      return E(Q) === r;
    }
    function I(Q) {
      return E(Q) === i;
    }
    function Z(Q) {
      return E(Q) === a;
    }
    function te(Q) {
      return E(Q) === d;
    }
    Me.AsyncMode = C, Me.ConcurrentMode = O, Me.ContextConsumer = A, Me.ContextProvider = H, Me.Element = P, Me.ForwardRef = W, Me.Fragment = R, Me.Lazy = M, Me.Memo = z, Me.Portal = _, Me.Profiler = $, Me.StrictMode = Y, Me.Suspense = V, Me.isAsyncMode = ie, Me.isConcurrentMode = j, Me.isContextConsumer = G, Me.isContextProvider = J, Me.isElement = U, Me.isForwardRef = ne, Me.isFragment = F, Me.isLazy = w, Me.isMemo = N, Me.isPortal = T, Me.isProfiler = I, Me.isStrictMode = Z, Me.isSuspense = te, Me.isValidElementType = B, Me.typeOf = E;
  }()), Me;
}
var cl;
function Vd() {
  return cl || (cl = 1, process.env.NODE_ENV === "production" ? Jn.exports = qb() : Jn.exports = Gb()), Jn.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var Oi, fl;
function Zb() {
  if (fl) return Oi;
  fl = 1;
  var t = Object.getOwnPropertySymbols, e = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function a() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var s = {}, o = 0; o < 10; o++)
        s["_" + String.fromCharCode(o)] = o;
      var u = Object.getOwnPropertyNames(s).map(function(c) {
        return s[c];
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
  return Oi = a() ? Object.assign : function(i, s) {
    for (var o, u = n(i), l, c = 1; c < arguments.length; c++) {
      o = Object(arguments[c]);
      for (var d in o)
        e.call(o, d) && (u[d] = o[d]);
      if (t) {
        l = t(o);
        for (var p = 0; p < l.length; p++)
          r.call(o, l[p]) && (u[l[p]] = o[l[p]]);
      }
    }
    return u;
  }, Oi;
}
var xi, dl;
function eo() {
  if (dl) return xi;
  dl = 1;
  var t = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xi = t, xi;
}
var Bi, pl;
function qd() {
  return pl || (pl = 1, Bi = Function.call.bind(Object.prototype.hasOwnProperty)), Bi;
}
var Li, hl;
function Kb() {
  if (hl) return Li;
  hl = 1;
  var t = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var e = eo(), r = {}, n = qd();
    t = function(i) {
      var s = "Warning: " + i;
      typeof console < "u" && console.error(s);
      try {
        throw new Error(s);
      } catch {
      }
    };
  }
  function a(i, s, o, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var c in i)
        if (n(i, c)) {
          var d;
          try {
            if (typeof i[c] != "function") {
              var p = Error(
                (u || "React class") + ": " + o + " type `" + c + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[c] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            d = i[c](s, c, u, o, null, e);
          } catch (h) {
            d = h;
          }
          if (d && !(d instanceof Error) && t(
            (u || "React class") + ": type specification of " + o + " `" + c + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var m = l ? l() : "";
            t(
              "Failed " + o + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return a.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Li = a, Li;
}
var Ai, vl;
function Yb() {
  if (vl) return Ai;
  vl = 1;
  var t = Vd(), e = Zb(), r = eo(), n = qd(), a = Kb(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(o) {
    var u = "Warning: " + o;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function s() {
    return null;
  }
  return Ai = function(o, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, c = "@@iterator";
    function d(j) {
      var G = j && (l && j[l] || j[c]);
      if (typeof G == "function")
        return G;
    }
    var p = "<<anonymous>>", m = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: b(),
      arrayOf: B,
      element: E(),
      elementType: C(),
      instanceOf: O,
      node: W(),
      objectOf: H,
      oneOf: A,
      oneOfType: P,
      shape: M,
      exact: z
    };
    function h(j, G) {
      return j === G ? j !== 0 || 1 / j === 1 / G : j !== j && G !== G;
    }
    function v(j, G) {
      this.message = j, this.data = G && typeof G == "object" ? G : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function f(j) {
      if (process.env.NODE_ENV !== "production")
        var G = {}, J = 0;
      function U(F, w, N, T, I, Z, te) {
        if (T = T || p, Z = Z || N, te !== r) {
          if (u) {
            var Q = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw Q.name = "Invariant Violation", Q;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var pe = T + ":" + N;
            !G[pe] && // Avoid spamming the console because they are often not actionable except for lib authors
            J < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + Z + "` prop on `" + T + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), G[pe] = !0, J++);
          }
        }
        return w[N] == null ? F ? w[N] === null ? new v("The " + I + " `" + Z + "` is marked as required " + ("in `" + T + "`, but its value is `null`.")) : new v("The " + I + " `" + Z + "` is marked as required in " + ("`" + T + "`, but its value is `undefined`.")) : null : j(w, N, T, I, Z);
      }
      var ne = U.bind(null, !1);
      return ne.isRequired = U.bind(null, !0), ne;
    }
    function D(j) {
      function G(J, U, ne, F, w, N) {
        var T = J[U], I = Y(T);
        if (I !== j) {
          var Z = V(T);
          return new v(
            "Invalid " + F + " `" + w + "` of type " + ("`" + Z + "` supplied to `" + ne + "`, expected ") + ("`" + j + "`."),
            { expectedType: j }
          );
        }
        return null;
      }
      return f(G);
    }
    function b() {
      return f(s);
    }
    function B(j) {
      function G(J, U, ne, F, w) {
        if (typeof j != "function")
          return new v("Property `" + w + "` of component `" + ne + "` has invalid PropType notation inside arrayOf.");
        var N = J[U];
        if (!Array.isArray(N)) {
          var T = Y(N);
          return new v("Invalid " + F + " `" + w + "` of type " + ("`" + T + "` supplied to `" + ne + "`, expected an array."));
        }
        for (var I = 0; I < N.length; I++) {
          var Z = j(N, I, ne, F, w + "[" + I + "]", r);
          if (Z instanceof Error)
            return Z;
        }
        return null;
      }
      return f(G);
    }
    function E() {
      function j(G, J, U, ne, F) {
        var w = G[J];
        if (!o(w)) {
          var N = Y(w);
          return new v("Invalid " + ne + " `" + F + "` of type " + ("`" + N + "` supplied to `" + U + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(j);
    }
    function C() {
      function j(G, J, U, ne, F) {
        var w = G[J];
        if (!t.isValidElementType(w)) {
          var N = Y(w);
          return new v("Invalid " + ne + " `" + F + "` of type " + ("`" + N + "` supplied to `" + U + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(j);
    }
    function O(j) {
      function G(J, U, ne, F, w) {
        if (!(J[U] instanceof j)) {
          var N = j.name || p, T = ie(J[U]);
          return new v("Invalid " + F + " `" + w + "` of type " + ("`" + T + "` supplied to `" + ne + "`, expected ") + ("instance of `" + N + "`."));
        }
        return null;
      }
      return f(G);
    }
    function A(j) {
      if (!Array.isArray(j))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), s;
      function G(J, U, ne, F, w) {
        for (var N = J[U], T = 0; T < j.length; T++)
          if (h(N, j[T]))
            return null;
        var I = JSON.stringify(j, function(te, Q) {
          var pe = V(Q);
          return pe === "symbol" ? String(Q) : Q;
        });
        return new v("Invalid " + F + " `" + w + "` of value `" + String(N) + "` " + ("supplied to `" + ne + "`, expected one of " + I + "."));
      }
      return f(G);
    }
    function H(j) {
      function G(J, U, ne, F, w) {
        if (typeof j != "function")
          return new v("Property `" + w + "` of component `" + ne + "` has invalid PropType notation inside objectOf.");
        var N = J[U], T = Y(N);
        if (T !== "object")
          return new v("Invalid " + F + " `" + w + "` of type " + ("`" + T + "` supplied to `" + ne + "`, expected an object."));
        for (var I in N)
          if (n(N, I)) {
            var Z = j(N, I, ne, F, w + "." + I, r);
            if (Z instanceof Error)
              return Z;
          }
        return null;
      }
      return f(G);
    }
    function P(j) {
      if (!Array.isArray(j))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), s;
      for (var G = 0; G < j.length; G++) {
        var J = j[G];
        if (typeof J != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ee(J) + " at index " + G + "."
          ), s;
      }
      function U(ne, F, w, N, T) {
        for (var I = [], Z = 0; Z < j.length; Z++) {
          var te = j[Z], Q = te(ne, F, w, N, T, r);
          if (Q == null)
            return null;
          Q.data && n(Q.data, "expectedType") && I.push(Q.data.expectedType);
        }
        var pe = I.length > 0 ? ", expected one of type [" + I.join(", ") + "]" : "";
        return new v("Invalid " + N + " `" + T + "` supplied to " + ("`" + w + "`" + pe + "."));
      }
      return f(U);
    }
    function W() {
      function j(G, J, U, ne, F) {
        return _(G[J]) ? null : new v("Invalid " + ne + " `" + F + "` supplied to " + ("`" + U + "`, expected a ReactNode."));
      }
      return f(j);
    }
    function R(j, G, J, U, ne) {
      return new v(
        (j || "React class") + ": " + G + " type `" + J + "." + U + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + ne + "`."
      );
    }
    function M(j) {
      function G(J, U, ne, F, w) {
        var N = J[U], T = Y(N);
        if (T !== "object")
          return new v("Invalid " + F + " `" + w + "` of type `" + T + "` " + ("supplied to `" + ne + "`, expected `object`."));
        for (var I in j) {
          var Z = j[I];
          if (typeof Z != "function")
            return R(ne, F, w, I, V(Z));
          var te = Z(N, I, ne, F, w + "." + I, r);
          if (te)
            return te;
        }
        return null;
      }
      return f(G);
    }
    function z(j) {
      function G(J, U, ne, F, w) {
        var N = J[U], T = Y(N);
        if (T !== "object")
          return new v("Invalid " + F + " `" + w + "` of type `" + T + "` " + ("supplied to `" + ne + "`, expected `object`."));
        var I = e({}, J[U], j);
        for (var Z in I) {
          var te = j[Z];
          if (n(j, Z) && typeof te != "function")
            return R(ne, F, w, Z, V(te));
          if (!te)
            return new v(
              "Invalid " + F + " `" + w + "` key `" + Z + "` supplied to `" + ne + "`.\nBad object: " + JSON.stringify(J[U], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(j), null, "  ")
            );
          var Q = te(N, Z, ne, F, w + "." + Z, r);
          if (Q)
            return Q;
        }
        return null;
      }
      return f(G);
    }
    function _(j) {
      switch (typeof j) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !j;
        case "object":
          if (Array.isArray(j))
            return j.every(_);
          if (j === null || o(j))
            return !0;
          var G = d(j);
          if (G) {
            var J = G.call(j), U;
            if (G !== j.entries) {
              for (; !(U = J.next()).done; )
                if (!_(U.value))
                  return !1;
            } else
              for (; !(U = J.next()).done; ) {
                var ne = U.value;
                if (ne && !_(ne[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function $(j, G) {
      return j === "symbol" ? !0 : G ? G["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && G instanceof Symbol : !1;
    }
    function Y(j) {
      var G = typeof j;
      return Array.isArray(j) ? "array" : j instanceof RegExp ? "object" : $(G, j) ? "symbol" : G;
    }
    function V(j) {
      if (typeof j > "u" || j === null)
        return "" + j;
      var G = Y(j);
      if (G === "object") {
        if (j instanceof Date)
          return "date";
        if (j instanceof RegExp)
          return "regexp";
      }
      return G;
    }
    function ee(j) {
      var G = V(j);
      switch (G) {
        case "array":
        case "object":
          return "an " + G;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + G;
        default:
          return G;
      }
    }
    function ie(j) {
      return !j.constructor || !j.constructor.name ? p : j.constructor.name;
    }
    return m.checkPropTypes = a, m.resetWarningCache = a.resetWarningCache, m.PropTypes = m, m;
  }, Ai;
}
var Si, gl;
function Xb() {
  if (gl) return Si;
  gl = 1;
  var t = eo();
  function e() {
  }
  function r() {
  }
  return r.resetWarningCache = e, Si = function() {
    function n(s, o, u, l, c, d) {
      if (d !== t) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function a() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: a,
      element: n,
      elementType: n,
      instanceOf: a,
      node: n,
      objectOf: a,
      oneOf: a,
      oneOfType: a,
      shape: a,
      exact: a,
      checkPropTypes: r,
      resetWarningCache: e
    };
    return i.PropTypes = i, i;
  }, Si;
}
if (process.env.NODE_ENV !== "production") {
  var Jb = Vd(), Qb = !0;
  us.exports = Yb()(Jb.isElement, Qb);
} else
  us.exports = Xb()();
var ri = us.exports, ni = {};
Object.defineProperty(ni, "__esModule", {
  value: !0
});
var eE = Pn, Pi = tE(eE);
function tE(t) {
  return t && t.__esModule ? t : { default: t };
}
var rE = {
  mountFlag: !1,
  initialized: !1,
  scroller: null,
  containers: {},
  mount: function(e) {
    this.scroller = e, this.handleHashChange = this.handleHashChange.bind(this), window.addEventListener("hashchange", this.handleHashChange), this.initStateFromHash(), this.mountFlag = !0;
  },
  mapContainer: function(e, r) {
    this.containers[e] = r;
  },
  isMounted: function() {
    return this.mountFlag;
  },
  isInitialized: function() {
    return this.initialized;
  },
  initStateFromHash: function() {
    var e = this, r = this.getHash();
    r ? window.setTimeout(function() {
      e.scrollTo(r, !0), e.initialized = !0;
    }, 10) : this.initialized = !0;
  },
  scrollTo: function(e, r) {
    var n = this.scroller, a = n.get(e);
    if (a && (r || e !== n.getActiveLink())) {
      var i = this.containers[e] || document;
      n.scrollTo(e, { container: i });
    }
  },
  getHash: function() {
    return Pi.default.getHash();
  },
  changeHash: function(e, r) {
    this.isInitialized() && Pi.default.getHash() !== e && Pi.default.updateHash(e, r);
  },
  handleHashChange: function() {
    this.scrollTo(this.getHash());
  },
  unmount: function() {
    this.scroller = null, this.containers = null, window.removeEventListener("hashchange", this.handleHashChange);
  }
};
ni.default = rE;
Object.defineProperty(Ln, "__esModule", {
  value: !0
});
var Qn = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}, nE = /* @__PURE__ */ function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), aE = de, ml = Mn(aE), iE = An, ea = Mn(iE), sE = Yr, oE = Mn(sE), uE = ri, We = Mn(uE), lE = ni, Qt = Mn(lE);
function Mn(t) {
  return t && t.__esModule ? t : { default: t };
}
function cE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function fE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function dE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var yl = {
  to: We.default.string.isRequired,
  containerId: We.default.string,
  container: We.default.object,
  activeClass: We.default.string,
  activeStyle: We.default.object,
  spy: We.default.bool,
  horizontal: We.default.bool,
  smooth: We.default.oneOfType([We.default.bool, We.default.string]),
  offset: We.default.number,
  delay: We.default.number,
  isDynamic: We.default.bool,
  onClick: We.default.func,
  duration: We.default.oneOfType([We.default.number, We.default.func]),
  absolute: We.default.bool,
  onSetActive: We.default.func,
  onSetInactive: We.default.func,
  ignoreCancelEvents: We.default.bool,
  hashSpy: We.default.bool,
  saveHashHistory: We.default.bool,
  spyThrottle: We.default.number
};
Ln.default = function(t, e) {
  var r = e || oE.default, n = function(i) {
    dE(s, i);
    function s(o) {
      cE(this, s);
      var u = fE(this, (s.__proto__ || Object.getPrototypeOf(s)).call(this, o));
      return a.call(u), u.state = {
        active: !1
      }, u;
    }
    return nE(s, [{
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
          ea.default.isMounted(u) || ea.default.mount(u, this.props.spyThrottle), this.props.hashSpy && (Qt.default.isMounted() || Qt.default.mount(r), Qt.default.mapContainer(this.props.to, u)), ea.default.addSpyHandler(this.spyHandler, u), this.setState({
            container: u
          });
        }
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        ea.default.unmount(this.stateHandler, this.spyHandler);
      }
    }, {
      key: "render",
      value: function() {
        var u = "";
        this.state && this.state.active ? u = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : u = this.props.className;
        var l = {};
        this.state && this.state.active ? l = Qn({}, this.props.style, this.props.activeStyle) : l = Qn({}, this.props.style);
        var c = Qn({}, this.props);
        for (var d in yl)
          c.hasOwnProperty(d) && delete c[d];
        return c.className = u, c.style = l, c.onClick = this.handleClick, ml.default.createElement(t, c);
      }
    }]), s;
  }(ml.default.PureComponent), a = function() {
    var s = this;
    this.scrollTo = function(o, u) {
      r.scrollTo(o, Qn({}, s.state, u));
    }, this.handleClick = function(o) {
      s.props.onClick && s.props.onClick(o), o.stopPropagation && o.stopPropagation(), o.preventDefault && o.preventDefault(), s.scrollTo(s.props.to, s.props);
    }, this.spyHandler = function(o, u) {
      var l = s.getScrollSpyContainer();
      if (!(Qt.default.isMounted() && !Qt.default.isInitialized())) {
        var c = s.props.horizontal, d = s.props.to, p = null, m = void 0, h = void 0;
        if (c) {
          var v = 0, f = 0, D = 0;
          if (l.getBoundingClientRect) {
            var b = l.getBoundingClientRect();
            D = b.left;
          }
          if (!p || s.props.isDynamic) {
            if (p = r.get(d), !p)
              return;
            var B = p.getBoundingClientRect();
            v = B.left - D + o, f = v + B.width;
          }
          var E = o - s.props.offset;
          m = E >= Math.floor(v) && E < Math.floor(f), h = E < Math.floor(v) || E >= Math.floor(f);
        } else {
          var C = 0, O = 0, A = 0;
          if (l.getBoundingClientRect) {
            var H = l.getBoundingClientRect();
            A = H.top;
          }
          if (!p || s.props.isDynamic) {
            if (p = r.get(d), !p)
              return;
            var P = p.getBoundingClientRect();
            C = P.top - A + u, O = C + P.height;
          }
          var W = u - s.props.offset;
          m = W >= Math.floor(C) && W < Math.floor(O), h = W < Math.floor(C) || W >= Math.floor(O);
        }
        var R = r.getActiveLink();
        if (h) {
          if (d === R && r.setActiveLink(void 0), s.props.hashSpy && Qt.default.getHash() === d) {
            var M = s.props.saveHashHistory, z = M === void 0 ? !1 : M;
            Qt.default.changeHash("", z);
          }
          s.props.spy && s.state.active && (s.setState({ active: !1 }), s.props.onSetInactive && s.props.onSetInactive(d, p));
        }
        if (m && (R !== d || s.state.active === !1)) {
          r.setActiveLink(d);
          var _ = s.props.saveHashHistory, $ = _ === void 0 ? !1 : _;
          s.props.hashSpy && Qt.default.changeHash(d, $), s.props.spy && (s.setState({ active: !0 }), s.props.onSetActive && s.props.onSetActive(d, p));
        }
      }
    };
  };
  return n.propTypes = yl, n.defaultProps = { offset: 0 }, n;
};
Object.defineProperty(Ks, "__esModule", {
  value: !0
});
var pE = de, Cl = Gd(pE), hE = Ln, vE = Gd(hE);
function Gd(t) {
  return t && t.__esModule ? t : { default: t };
}
function gE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Dl(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function mE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var yE = function(t) {
  mE(e, t);
  function e() {
    var r, n, a, i;
    gE(this, e);
    for (var s = arguments.length, o = Array(s), u = 0; u < s; u++)
      o[u] = arguments[u];
    return i = (n = (a = Dl(this, (r = e.__proto__ || Object.getPrototypeOf(e)).call.apply(r, [this].concat(o))), a), a.render = function() {
      return Cl.default.createElement(
        "a",
        a.props,
        a.props.children
      );
    }, n), Dl(a, i);
  }
  return e;
}(Cl.default.Component);
Ks.default = (0, vE.default)(yE);
var to = {};
Object.defineProperty(to, "__esModule", {
  value: !0
});
var CE = /* @__PURE__ */ function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), DE = de, bl = Zd(DE), bE = Ln, EE = Zd(bE);
function Zd(t) {
  return t && t.__esModule ? t : { default: t };
}
function wE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function OE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function xE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var BE = function(t) {
  xE(e, t);
  function e() {
    return wE(this, e), OE(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return CE(e, [{
    key: "render",
    value: function() {
      return bl.default.createElement(
        "button",
        this.props,
        this.props.children
      );
    }
  }]), e;
}(bl.default.Component);
to.default = (0, EE.default)(BE);
var ro = {}, ai = {};
Object.defineProperty(ai, "__esModule", {
  value: !0
});
var LE = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}, AE = /* @__PURE__ */ function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), SE = de, El = ii(SE), PE = cf;
ii(PE);
var FE = Yr, wl = ii(FE), TE = ri, Ol = ii(TE);
function ii(t) {
  return t && t.__esModule ? t : { default: t };
}
function ME(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function kE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function jE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
ai.default = function(t) {
  var e = function(r) {
    jE(n, r);
    function n(a) {
      ME(this, n);
      var i = kE(this, (n.__proto__ || Object.getPrototypeOf(n)).call(this, a));
      return i.childBindings = {
        domNode: null
      }, i;
    }
    return AE(n, [{
      key: "componentDidMount",
      value: function() {
        if (typeof window > "u")
          return !1;
        this.registerElems(this.props.name);
      }
    }, {
      key: "componentDidUpdate",
      value: function(i) {
        this.props.name !== i.name && this.registerElems(this.props.name);
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        if (typeof window > "u")
          return !1;
        wl.default.unregister(this.props.name);
      }
    }, {
      key: "registerElems",
      value: function(i) {
        wl.default.register(i, this.childBindings.domNode);
      }
    }, {
      key: "render",
      value: function() {
        return El.default.createElement(t, LE({}, this.props, { parentBindings: this.childBindings }));
      }
    }]), n;
  }(El.default.Component);
  return e.propTypes = {
    name: Ol.default.string,
    id: Ol.default.string
  }, e;
};
Object.defineProperty(ro, "__esModule", {
  value: !0
});
var xl = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}, RE = /* @__PURE__ */ function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}(), IE = de, Bl = no(IE), NE = ai, _E = no(NE), $E = ri, Ll = no($E);
function no(t) {
  return t && t.__esModule ? t : { default: t };
}
function zE(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function WE(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function HE(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var Kd = function(t) {
  HE(e, t);
  function e() {
    return zE(this, e), WE(this, (e.__proto__ || Object.getPrototypeOf(e)).apply(this, arguments));
  }
  return RE(e, [{
    key: "render",
    value: function() {
      var n = this, a = xl({}, this.props);
      return delete a.name, a.parentBindings && delete a.parentBindings, Bl.default.createElement(
        "div",
        xl({}, a, { ref: function(s) {
          n.props.parentBindings.domNode = s;
        } }),
        this.props.children
      );
    }
  }]), e;
}(Bl.default.Component);
Kd.propTypes = {
  name: Ll.default.string,
  id: Ll.default.string
};
ro.default = (0, _E.default)(Kd);
var Fi = Object.assign || function(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e];
    for (var n in r)
      Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
  }
  return t;
}, Al = /* @__PURE__ */ function() {
  function t(e, r) {
    for (var n = 0; n < r.length; n++) {
      var a = r[n];
      a.enumerable = a.enumerable || !1, a.configurable = !0, "value" in a && (a.writable = !0), Object.defineProperty(e, a.key, a);
    }
  }
  return function(e, r, n) {
    return r && t(e.prototype, r), n && t(e, n), e;
  };
}();
function Sl(t, e) {
  if (!(t instanceof e))
    throw new TypeError("Cannot call a class as a function");
}
function Pl(t, e) {
  if (!t)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e && (typeof e == "object" || typeof e == "function") ? e : t;
}
function Fl(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof e);
  t.prototype = Object.create(e && e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } }), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e);
}
var ta = de, Cr = An, Ti = Yr, qe = ri, er = ni, Tl = {
  to: qe.string.isRequired,
  containerId: qe.string,
  container: qe.object,
  activeClass: qe.string,
  spy: qe.bool,
  smooth: qe.oneOfType([qe.bool, qe.string]),
  offset: qe.number,
  delay: qe.number,
  isDynamic: qe.bool,
  onClick: qe.func,
  duration: qe.oneOfType([qe.number, qe.func]),
  absolute: qe.bool,
  onSetActive: qe.func,
  onSetInactive: qe.func,
  ignoreCancelEvents: qe.bool,
  hashSpy: qe.bool,
  spyThrottle: qe.number
}, UE = {
  Scroll: function(e, r) {
    console.warn("Helpers.Scroll is deprecated since v1.7.0");
    var n = r || Ti, a = function(s) {
      Fl(o, s);
      function o(u) {
        Sl(this, o);
        var l = Pl(this, (o.__proto__ || Object.getPrototypeOf(o)).call(this, u));
        return i.call(l), l.state = {
          active: !1
        }, l;
      }
      return Al(o, [{
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
            Cr.isMounted(l) || Cr.mount(l, this.props.spyThrottle), this.props.hashSpy && (er.isMounted() || er.mount(n), er.mapContainer(this.props.to, l)), this.props.spy && Cr.addStateHandler(this.stateHandler), Cr.addSpyHandler(this.spyHandler, l), this.setState({
              container: l
            });
          }
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          Cr.unmount(this.stateHandler, this.spyHandler);
        }
      }, {
        key: "render",
        value: function() {
          var l = "";
          this.state && this.state.active ? l = ((this.props.className || "") + " " + (this.props.activeClass || "active")).trim() : l = this.props.className;
          var c = Fi({}, this.props);
          for (var d in Tl)
            c.hasOwnProperty(d) && delete c[d];
          return c.className = l, c.onClick = this.handleClick, ta.createElement(e, c);
        }
      }]), o;
    }(ta.Component), i = function() {
      var o = this;
      this.scrollTo = function(u, l) {
        n.scrollTo(u, Fi({}, o.state, l));
      }, this.handleClick = function(u) {
        o.props.onClick && o.props.onClick(u), u.stopPropagation && u.stopPropagation(), u.preventDefault && u.preventDefault(), o.scrollTo(o.props.to, o.props);
      }, this.stateHandler = function() {
        n.getActiveLink() !== o.props.to && (o.state !== null && o.state.active && o.props.onSetInactive && o.props.onSetInactive(), o.setState({ active: !1 }));
      }, this.spyHandler = function(u) {
        var l = o.getScrollSpyContainer();
        if (!(er.isMounted() && !er.isInitialized())) {
          var c = o.props.to, d = null, p = 0, m = 0, h = 0;
          if (l.getBoundingClientRect) {
            var v = l.getBoundingClientRect();
            h = v.top;
          }
          if (!d || o.props.isDynamic) {
            if (d = n.get(c), !d)
              return;
            var f = d.getBoundingClientRect();
            p = f.top - h + u, m = p + f.height;
          }
          var D = u - o.props.offset, b = D >= Math.floor(p) && D < Math.floor(m), B = D < Math.floor(p) || D >= Math.floor(m), E = n.getActiveLink();
          if (B)
            return c === E && n.setActiveLink(void 0), o.props.hashSpy && er.getHash() === c && er.changeHash(), o.props.spy && o.state.active && (o.setState({ active: !1 }), o.props.onSetInactive && o.props.onSetInactive()), Cr.updateStates();
          if (b && E !== c)
            return n.setActiveLink(c), o.props.hashSpy && er.changeHash(c), o.props.spy && (o.setState({ active: !0 }), o.props.onSetActive && o.props.onSetActive(c)), Cr.updateStates();
        }
      };
    };
    return a.propTypes = Tl, a.defaultProps = { offset: 0 }, a;
  },
  Element: function(e) {
    console.warn("Helpers.Element is deprecated since v1.7.0");
    var r = function(n) {
      Fl(a, n);
      function a(i) {
        Sl(this, a);
        var s = Pl(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this, i));
        return s.childBindings = {
          domNode: null
        }, s;
      }
      return Al(a, [{
        key: "componentDidMount",
        value: function() {
          if (typeof window > "u")
            return !1;
          this.registerElems(this.props.name);
        }
      }, {
        key: "componentDidUpdate",
        value: function(s) {
          this.props.name !== s.name && this.registerElems(this.props.name);
        }
      }, {
        key: "componentWillUnmount",
        value: function() {
          if (typeof window > "u")
            return !1;
          Ti.unregister(this.props.name);
        }
      }, {
        key: "registerElems",
        value: function(s) {
          Ti.register(s, this.childBindings.domNode);
        }
      }, {
        key: "render",
        value: function() {
          return ta.createElement(e, Fi({}, this.props, { parentBindings: this.childBindings }));
        }
      }]), a;
    }(ta.Component);
    return r.propTypes = {
      name: qe.string,
      id: qe.string
    }, r;
  }
}, VE = UE;
Object.defineProperty(Ge, "__esModule", {
  value: !0
});
Ge.Helpers = Ge.ScrollElement = Ge.ScrollLink = sp = Ge.animateScroll = Ge.scrollSpy = Ge.Events = Ge.scroller = Ge.Element = Ge.Button = Ge.Link = void 0;
var qE = Ks, Yd = _t(qE), GE = to, Xd = _t(GE), ZE = ro, Jd = _t(ZE), KE = Yr, Qd = _t(KE), YE = Fn, ep = _t(YE), XE = An, tp = _t(XE), JE = Qa, rp = _t(JE), QE = Ln, np = _t(QE), ew = ai, ap = _t(ew), tw = VE, ip = _t(tw);
function _t(t) {
  return t && t.__esModule ? t : { default: t };
}
Ge.Link = Yd.default;
Ge.Button = Xd.default;
Ge.Element = Jd.default;
Ge.scroller = Qd.default;
Ge.Events = ep.default;
Ge.scrollSpy = tp.default;
var sp = Ge.animateScroll = rp.default;
Ge.ScrollLink = np.default;
Ge.ScrollElement = ap.default;
Ge.Helpers = ip.default;
Ge.default = { Link: Yd.default, Button: Xd.default, Element: Jd.default, scroller: Qd.default, Events: ep.default, scrollSpy: tp.default, animateScroll: rp.default, ScrollLink: np.default, ScrollElement: ap.default, Helpers: ip.default };
const ao = st({}), op = st({});
function rw() {
  const t = Se(op);
  if (Object.entries(t).length === 0)
    throw new Error("useToast must be used within a Provider");
  return t;
}
function Ml(t) {
  return t && typeof t.title == "string" && typeof t.message == "string" && (t.size === void 0 || t.size === "md" || t.size === "lg") && (t.type === "success" || t.type === "danger");
}
function wx() {
  const t = of(), { closeModal: e, closeAll: r } = Se(ao), { showToast: n } = rw(), { getParam: a } = Nd(), { pathname: i } = ys(), s = uf(), o = a("closeAllModals");
  x(() => {
    o === "true" && (r(), s(i));
  }, [o]), x(() => {
    const u = t == null ? void 0 : t.closeModalKey;
    u && e(u);
  }, [t]), x(() => {
    const u = t == null ? void 0 : t.closeAllModals;
    typeof u == "boolean" && u && r();
  }, [t]), x(() => {
    const u = t == null ? void 0 : t.toast, l = t == null ? void 0 : t.message;
    Ml(u) && n(u), !Ml(u) && l && n({ message: l, type: "danger" });
  }, [t]), x(() => {
    var u, l;
    if (typeof ((u = t == null ? void 0 : t.data) == null ? void 0 : u.scrollTo) == "string") {
      const c = document.getElementById((l = t == null ? void 0 : t.data) == null ? void 0 : l.scrollTo);
      c && sp.scrollTo(c.offsetTop - 200);
    }
  }, [t]);
}
const up = st({});
function Ox(t) {
  const e = Se(up);
  if (Object.entries(e).length === 0)
    throw new Error("useDrawer must be used within a Provider");
  if (t) {
    const {
      drawerData: r,
      drawerIsOpen: n,
      openDrawer: a,
      closeDrawer: i
    } = e, s = n(t), o = r(t);
    return { drawerIsOpen: s, drawerData: o, openDrawer: (c) => a(t, c), closeDrawer: () => i(t) };
  } else
    return e;
}
function nw() {
  return () => {
  };
}
function aw() {
  return zp(
    nw,
    () => !0,
    () => !1
  );
}
function xx(t) {
  const e = Se(ao);
  if (Object.entries(e).length === 0)
    throw new Error("useModal must be used within a Provider");
  if (t) {
    const {
      modalData: r,
      modalIsOpen: n,
      openModal: a,
      closeModal: i
    } = e, s = n(t), o = r(t);
    return { modalIsOpen: s, modalData: o, openModal: (c) => a(t, c), closeModal: () => i(t) };
  } else
    return e;
}
function Bx(t) {
  const { children: e = !1 } = t, [r, n] = k([]);
  function a(u) {
    return !!r.some((l) => l.key === u);
  }
  function i(u) {
    var l;
    return (l = r.find((c) => c.key === u)) == null ? void 0 : l.data;
  }
  function s(u, l) {
    const c = a(u);
    n(c ? (d) => [...d.filter((m) => m.key !== u), { key: u, data: l }] : [...r, { key: u, data: l }]);
  }
  function o(u) {
    n(r.filter((l) => l.key !== u));
  }
  return /* @__PURE__ */ y.jsx(
    up.Provider,
    {
      value: { drawerIsOpen: a, drawerData: i, openDrawer: s, closeDrawer: o },
      children: e
    }
  );
}
function Bn(t) {
  "@babel/helpers - typeof";
  return Bn = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
    return typeof e;
  } : function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, Bn(t);
}
function iw(t, e) {
  if (Bn(t) != "object" || !t) return t;
  var r = t[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(t, e || "default");
    if (Bn(n) != "object") return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (e === "string" ? String : Number)(t);
}
function sw(t) {
  var e = iw(t, "string");
  return Bn(e) == "symbol" ? e : e + "";
}
function K(t, e, r) {
  return (e = sw(e)) in t ? Object.defineProperty(t, e, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[e] = r, t;
}
function lp(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Mi, kl;
function ow() {
  if (kl) return Mi;
  kl = 1;
  var t = process.env.NODE_ENV, e = function(n, a, i, s, o, u, l, c) {
    if (t !== "production" && a === void 0)
      throw new Error("invariant requires an error message argument");
    if (!n) {
      var d;
      if (a === void 0)
        d = new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
      else {
        var p = [i, s, o, u, l, c], m = 0;
        d = new Error(a.replace(/%s/g, function() {
          return p[m++];
        })), d.name = "Invariant Violation";
      }
      throw d.framesToPop = 1, d;
    }
  };
  return Mi = e, Mi;
}
var uw = ow(), et = /* @__PURE__ */ lp(uw), me = st(null);
function lw() {
  et(!!Se, "useGoogleMap is React hook and requires React version 16.8+");
  var t = Se(me);
  return et(!!t, "useGoogleMap needs a GoogleMap available up in the tree"), t;
}
function cw(t, e, r) {
  return Object.keys(t).reduce(function(a, i) {
    return e(a, t[i], i);
  }, r);
}
function fw(t, e) {
  Object.keys(t).forEach((r) => e(t[r], r));
}
function dw(t, e, r, n) {
  var a = {}, i = (s, o) => {
    var u = r[o];
    u !== e[o] && (a[o] = u, s(n, u));
  };
  return fw(t, i), a;
}
function pw(t, e, r) {
  var n = cw(r, function(i, s, o) {
    return typeof t[o] == "function" && i.push(google.maps.event.addListener(e, s, t[o])), i;
  }, []);
  return n;
}
function hw(t) {
  google.maps.event.removeListener(t);
}
function be() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  t.forEach(hw);
}
function Ce(t) {
  var {
    updaterMap: e,
    eventMap: r,
    prevProps: n,
    nextProps: a,
    instance: i
  } = t, s = pw(a, i, r);
  return dw(e, n, a, i), s;
}
var jl = {
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
}, Rl = {
  extraMapTypes(t, e) {
    e.forEach(function(n, a) {
      t.mapTypes.set(String(a), n);
    });
  },
  center(t, e) {
    t.setCenter(e);
  },
  clickableIcons(t, e) {
    t.setClickableIcons(e);
  },
  heading(t, e) {
    t.setHeading(e);
  },
  mapTypeId(t, e) {
    t.setMapTypeId(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  streetView(t, e) {
    t.setStreetView(e);
  },
  tilt(t, e) {
    t.setTilt(e);
  },
  zoom(t, e) {
    t.setZoom(e);
  }
};
function vw(t) {
  var {
    children: e,
    options: r,
    id: n,
    mapContainerStyle: a,
    mapContainerClassName: i,
    center: s,
    // clickableIcons,
    // extraMapTypes,
    // heading,
    // mapTypeId,
    onClick: o,
    onDblClick: u,
    onDrag: l,
    onDragEnd: c,
    onDragStart: d,
    onMouseMove: p,
    onMouseOut: m,
    onMouseOver: h,
    onMouseDown: v,
    onMouseUp: f,
    onRightClick: D,
    // onMapTypeIdChanged,
    // onTilesLoaded,
    // onBoundsChanged,
    onCenterChanged: b,
    // onHeadingChanged,
    // onIdle,
    // onProjectionChanged,
    // onResize,
    // onTiltChanged,
    // onZoomChanged,
    onLoad: B,
    onUnmount: E
  } = t, [C, O] = k(null), A = Re(null), [H, P] = k(null), [W, R] = k(null), [M, z] = k(null), [_, $] = k(null), [Y, V] = k(null), [ee, ie] = k(null), [j, G] = k(null), [J, U] = k(null), [ne, F] = k(null), [w, N] = k(null), [T, I] = k(null), [Z, te] = k(null);
  return x(() => {
    r && C !== null && C.setOptions(r);
  }, [C, r]), x(() => {
    C !== null && typeof s < "u" && C.setCenter(s);
  }, [C, s]), x(() => {
    C && u && (W !== null && google.maps.event.removeListener(W), R(google.maps.event.addListener(C, "dblclick", u)));
  }, [u]), x(() => {
    C && c && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(C, "dragend", c)));
  }, [c]), x(() => {
    C && d && (_ !== null && google.maps.event.removeListener(_), $(google.maps.event.addListener(C, "dragstart", d)));
  }, [d]), x(() => {
    C && v && (Y !== null && google.maps.event.removeListener(Y), V(google.maps.event.addListener(C, "mousedown", v)));
  }, [v]), x(() => {
    C && p && (ee !== null && google.maps.event.removeListener(ee), ie(google.maps.event.addListener(C, "mousemove", p)));
  }, [p]), x(() => {
    C && m && (j !== null && google.maps.event.removeListener(j), G(google.maps.event.addListener(C, "mouseout", m)));
  }, [m]), x(() => {
    C && h && (J !== null && google.maps.event.removeListener(J), U(google.maps.event.addListener(C, "mouseover", h)));
  }, [h]), x(() => {
    C && f && (ne !== null && google.maps.event.removeListener(ne), F(google.maps.event.addListener(C, "mouseup", f)));
  }, [f]), x(() => {
    C && D && (w !== null && google.maps.event.removeListener(w), N(google.maps.event.addListener(C, "rightclick", D)));
  }, [D]), x(() => {
    C && o && (T !== null && google.maps.event.removeListener(T), I(google.maps.event.addListener(C, "click", o)));
  }, [o]), x(() => {
    C && l && (Z !== null && google.maps.event.removeListener(Z), te(google.maps.event.addListener(C, "drag", l)));
  }, [l]), x(() => {
    C && b && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(C, "center_changed", b)));
  }, [o]), x(() => {
    var Q = A.current === null ? null : new google.maps.Map(A.current, r);
    return O(Q), Q !== null && B && B(Q), () => {
      Q !== null && E && E(Q);
    };
  }, []), y.jsx("div", {
    id: n,
    ref: A,
    style: a,
    className: i,
    children: y.jsx(me.Provider, {
      value: C,
      children: C !== null ? e : null
    })
  });
}
Xe(vw);
let gw = class extends He {
  constructor() {
    super(...arguments), K(this, "state", {
      map: null
    }), K(this, "registeredEvents", []), K(this, "mapRef", null), K(this, "getInstance", () => this.mapRef === null ? null : new google.maps.Map(this.mapRef, this.props.options)), K(this, "panTo", (e) => {
      var r = this.getInstance();
      r && r.panTo(e);
    }), K(this, "setMapCallback", () => {
      this.state.map !== null && this.props.onLoad && this.props.onLoad(this.state.map);
    }), K(this, "getRef", (e) => {
      this.mapRef = e;
    });
  }
  componentDidMount() {
    var e = this.getInstance();
    this.registeredEvents = Ce({
      updaterMap: Rl,
      eventMap: jl,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        map: e
      };
    }, this.setMapCallback);
  }
  componentDidUpdate(e) {
    this.state.map !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Rl,
      eventMap: jl,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.map
    }));
  }
  componentWillUnmount() {
    this.state.map !== null && (this.props.onUnmount && this.props.onUnmount(this.state.map), be(this.registeredEvents));
  }
  render() {
    return y.jsx("div", {
      id: this.props.id,
      ref: this.getRef,
      style: this.props.mapContainerStyle,
      className: this.props.mapContainerClassName,
      children: y.jsx(me.Provider, {
        value: this.state.map,
        children: this.state.map !== null ? this.props.children : null
      })
    });
  }
};
function Il(t, e, r, n, a, i, s) {
  try {
    var o = t[i](s), u = o.value;
  } catch (l) {
    return void r(l);
  }
  o.done ? e(u) : Promise.resolve(u).then(n, a);
}
function cp(t) {
  return function() {
    var e = this, r = arguments;
    return new Promise(function(n, a) {
      var i = t.apply(e, r);
      function s(u) {
        Il(i, n, a, s, o, "next", u);
      }
      function o(u) {
        Il(i, n, a, s, o, "throw", u);
      }
      s(void 0);
    });
  };
}
function fp(t) {
  var {
    googleMapsApiKey: e,
    googleMapsClientId: r,
    version: n = "weekly",
    language: a,
    region: i,
    libraries: s,
    channel: o,
    mapIds: u,
    authReferrerPolicy: l
  } = t, c = [];
  return et(e && r || !(e && r), "You need to specify either googleMapsApiKey or googleMapsClientId for @react-google-maps/api load script to work. You cannot use both at the same time."), e ? c.push("key=".concat(e)) : r && c.push("client=".concat(r)), n && c.push("v=".concat(n)), a && c.push("language=".concat(a)), i && c.push("region=".concat(i)), s && s.length && c.push("libraries=".concat(s.sort().join(","))), o && c.push("channel=".concat(o)), u && u.length && c.push("map_ids=".concat(u.join(","))), l && c.push("auth_referrer_policy=".concat(l)), c.push("loading=async"), c.push("callback=initMap"), "https://maps.googleapis.com/maps/api/js?".concat(c.join("&"));
}
var Br = typeof document < "u";
function dp(t) {
  var {
    url: e,
    id: r,
    nonce: n
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } = t;
  return Br ? new Promise(function(i, s) {
    var o = document.getElementById(r), u = window;
    if (o) {
      var l = o.getAttribute("data-state");
      if (o.src === e && l !== "error") {
        if (l === "ready")
          return i(r);
        var c = u.initMap, d = o.onerror;
        u.initMap = function() {
          c && c(), i(r);
        }, o.onerror = function(m) {
          d && d(m), s(m);
        };
        return;
      } else
        o.remove();
    }
    var p = document.createElement("script");
    p.type = "text/javascript", p.src = e, p.id = r, p.async = !0, p.nonce = n || "", p.onerror = function(h) {
      p.setAttribute("data-state", "error"), s(h);
    }, u.initMap = function() {
      p.setAttribute("data-state", "ready"), i(r);
    }, document.head.appendChild(p);
  }).catch((a) => {
    throw console.error("injectScript error: ", a), a;
  }) : Promise.reject(new Error("document is undefined"));
}
function Nl(t) {
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
function pp() {
  var t = document.getElementsByTagName("head")[0];
  if (t) {
    var e = t.insertBefore.bind(t);
    t.insertBefore = function(a, i) {
      return Nl(a) || Reflect.apply(e, t, [a, i]), a;
    };
    var r = t.appendChild.bind(t);
    t.appendChild = function(a) {
      return Nl(a) || Reflect.apply(r, t, [a]), a;
    };
  }
}
var on = !1;
function hp() {
  return y.jsx("div", {
    children: "Loading..."
  });
}
var ls = {
  id: "script-loader",
  version: "weekly"
};
class vp extends He {
  constructor() {
    super(...arguments), K(this, "check", ka()), K(this, "state", {
      loaded: !1
    }), K(this, "cleanupCallback", () => {
      delete window.google.maps, this.injectScript();
    }), K(this, "isCleaningUp", /* @__PURE__ */ cp(function* () {
      function e(r) {
        if (!on)
          r();
        else if (Br)
          var n = window.setInterval(function() {
            on || (window.clearInterval(n), r());
          }, 1);
      }
      return new Promise(e);
    })), K(this, "cleanup", () => {
      on = !0;
      var e = document.getElementById(this.props.id);
      e && e.parentNode && e.parentNode.removeChild(e), Array.prototype.slice.call(document.getElementsByTagName("script")).filter(function(n) {
        return typeof n.src == "string" && n.src.includes("maps.googleapis");
      }).forEach(function(n) {
        n.parentNode && n.parentNode.removeChild(n);
      }), Array.prototype.slice.call(document.getElementsByTagName("link")).filter(function(n) {
        return n.href === "https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Google+Sans";
      }).forEach(function(n) {
        n.parentNode && n.parentNode.removeChild(n);
      }), Array.prototype.slice.call(document.getElementsByTagName("style")).filter(function(n) {
        return n.innerText !== void 0 && n.innerText.length > 0 && n.innerText.includes(".gm-");
      }).forEach(function(n) {
        n.parentNode && n.parentNode.removeChild(n);
      });
    }), K(this, "injectScript", () => {
      this.props.preventGoogleFontsLoading && pp(), et(!!this.props.id, 'LoadScript requires "id" prop to be a string: %s', this.props.id);
      var e = {
        id: this.props.id,
        nonce: this.props.nonce,
        url: fp(this.props)
      };
      dp(e).then(() => {
        this.props.onLoad && this.props.onLoad(), this.setState(function() {
          return {
            loaded: !0
          };
        });
      }).catch((r) => {
        this.props.onError && this.props.onError(r), console.error(`
          There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(this.props.googleMapsApiKey || "-", ") or Client ID (").concat(this.props.googleMapsClientId || "-", `) to <LoadScript />
          Otherwise it is a Network issue.
        `));
      });
    });
  }
  componentDidMount() {
    if (Br) {
      if (window.google && window.google.maps && !on) {
        console.error("google api is already presented");
        return;
      }
      this.isCleaningUp().then(this.injectScript).catch(function(r) {
        console.error("Error at injecting script after cleaning up: ", r);
      });
    }
  }
  componentDidUpdate(e) {
    this.props.libraries !== e.libraries && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), Br && e.language !== this.props.language && (this.cleanup(), this.setState(function() {
      return {
        loaded: !1
      };
    }, this.cleanupCallback));
  }
  componentWillUnmount() {
    if (Br) {
      this.cleanup();
      var e = () => {
        this.check.current || (delete window.google, on = !1);
      };
      window.setTimeout(e, 1), this.props.onUnmount && this.props.onUnmount();
    }
  }
  render() {
    return y.jsxs(y.Fragment, {
      children: [y.jsx("div", {
        ref: this.check
      }), this.state.loaded ? this.props.children : this.props.loadingElement || y.jsx(hp, {})]
    });
  }
}
K(vp, "defaultProps", ls);
function mw(t, e) {
  if (t == null) return {};
  var r = {};
  for (var n in t) if ({}.hasOwnProperty.call(t, n)) {
    if (e.includes(n)) continue;
    r[n] = t[n];
  }
  return r;
}
function io(t, e) {
  if (t == null) return {};
  var r, n, a = mw(t, e);
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(t);
    for (n = 0; n < i.length; n++) r = i[n], e.includes(r) || {}.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
  }
  return a;
}
var _l;
function yw(t) {
  var {
    id: e = ls.id,
    version: r = ls.version,
    nonce: n,
    googleMapsApiKey: a,
    googleMapsClientId: i,
    language: s,
    region: o,
    libraries: u,
    preventGoogleFontsLoading: l,
    channel: c,
    mapIds: d,
    authReferrerPolicy: p
  } = t, m = Re(!1), [h, v] = k(!1), [f, D] = k(void 0);
  x(function() {
    return m.current = !0, () => {
      m.current = !1;
    };
  }, []), x(function() {
    Br && l && pp();
  }, [l]), x(function() {
    h && et(!!window.google, "useLoadScript was marked as loaded, but window.google is not present. Something went wrong.");
  }, [h]);
  var b = fp({
    version: r,
    googleMapsApiKey: a,
    googleMapsClientId: i,
    language: s,
    region: o,
    libraries: u,
    channel: c,
    mapIds: d,
    authReferrerPolicy: p
  });
  x(function() {
    if (!Br)
      return;
    function C() {
      m.current && (v(!0), _l = b);
    }
    if (window.google && window.google.maps && _l === b) {
      C();
      return;
    }
    dp({
      id: e,
      url: b,
      nonce: n
    }).then(C).catch(function(A) {
      m.current && D(A), console.warn(`
        There has been an Error with loading Google Maps API script, please check that you provided correct google API key (`.concat(a || "-", ") or Client ID (").concat(i || "-", `)
        Otherwise it is a Network issue.
      `)), console.error(A);
    });
  }, [e, b, n]);
  var B = Re();
  return x(function() {
    B.current && u !== B.current && console.warn("Performance warning! LoadScript has been reloaded unintentionally! You should not pass `libraries` prop as new array. Please keep an array of libraries as static class property for Components and PureComponents, or just a const variable outside of component, or somewhere in config files or ENV variables"), B.current = u;
  }, [u]), {
    isLoaded: h,
    loadError: f,
    url: b
  };
}
var Cw = ["loadingElement", "onLoad", "onError", "onUnmount", "children"], Dw = y.jsx(hp, {});
function bw(t) {
  var {
    loadingElement: e,
    onLoad: r,
    onError: n,
    onUnmount: a,
    children: i
  } = t, s = io(t, Cw), {
    isLoaded: o,
    loadError: u
  } = yw(s);
  return x(function() {
    o && typeof r == "function" && r();
  }, [o, r]), x(function() {
    u && typeof n == "function" && n(u);
  }, [u, n]), x(function() {
    return () => {
      a && a();
    };
  }, [a]), o ? i : e || Dw;
}
Xe(bw);
var $l;
(function(t) {
  t[t.INITIALIZED = 0] = "INITIALIZED", t[t.LOADING = 1] = "LOADING", t[t.SUCCESS = 2] = "SUCCESS", t[t.FAILURE = 3] = "FAILURE";
})($l || ($l = {}));
function zl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Oa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? zl(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : zl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Wl = {}, Hl = {
  options(t, e) {
    t.setOptions(e);
  }
};
function Ew(t) {
  var {
    options: e,
    onLoad: r,
    onUnmount: n
  } = t, a = Se(me), [i, s] = k(null);
  return x(() => {
    i !== null && i.setMap(a);
  }, [a]), x(() => {
    e && i !== null && i.setOptions(e);
  }, [i, e]), x(() => {
    var o = new google.maps.TrafficLayer(Oa(Oa({}, e), {}, {
      map: a
    }));
    return s(o), r && r(o), () => {
      i !== null && (n && n(i), i.setMap(null));
    };
  }, []), null;
}
Xe(Ew);
class ww extends He {
  constructor() {
    super(...arguments), K(this, "state", {
      trafficLayer: null
    }), K(this, "setTrafficLayerCallback", () => {
      this.state.trafficLayer !== null && this.props.onLoad && this.props.onLoad(this.state.trafficLayer);
    }), K(this, "registeredEvents", []);
  }
  componentDidMount() {
    var e = new google.maps.TrafficLayer(Oa(Oa({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: Hl,
      eventMap: Wl,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        trafficLayer: e
      };
    }, this.setTrafficLayerCallback);
  }
  componentDidUpdate(e) {
    this.state.trafficLayer !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Hl,
      eventMap: Wl,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.trafficLayer
    }));
  }
  componentWillUnmount() {
    this.state.trafficLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.trafficLayer), be(this.registeredEvents), this.state.trafficLayer.setMap(null));
  }
  render() {
    return null;
  }
}
K(ww, "contextType", me);
function Ow(t) {
  var {
    onLoad: e,
    onUnmount: r
  } = t, n = Se(me), [a, i] = k(null);
  return x(() => {
    a !== null && a.setMap(n);
  }, [n]), x(() => {
    var s = new google.maps.BicyclingLayer();
    return i(s), s.setMap(n), e && e(s), () => {
      s !== null && (r && r(s), s.setMap(null));
    };
  }, []), null;
}
Xe(Ow);
class xw extends He {
  constructor() {
    super(...arguments), K(this, "state", {
      bicyclingLayer: null
    }), K(this, "setBicyclingLayerCallback", () => {
      this.state.bicyclingLayer !== null && (this.state.bicyclingLayer.setMap(this.context), this.props.onLoad && this.props.onLoad(this.state.bicyclingLayer));
    });
  }
  componentDidMount() {
    var e = new google.maps.BicyclingLayer();
    this.setState(() => ({
      bicyclingLayer: e
    }), this.setBicyclingLayerCallback);
  }
  componentWillUnmount() {
    this.state.bicyclingLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.bicyclingLayer), this.state.bicyclingLayer.setMap(null));
  }
  render() {
    return null;
  }
}
K(xw, "contextType", me);
function Bw(t) {
  var {
    onLoad: e,
    onUnmount: r
  } = t, n = Se(me), [a, i] = k(null);
  return x(() => {
    a !== null && a.setMap(n);
  }, [n]), x(() => {
    var s = new google.maps.TransitLayer();
    return i(s), s.setMap(n), e && e(s), () => {
      a !== null && (r && r(a), a.setMap(null));
    };
  }, []), null;
}
Xe(Bw);
class Lw extends He {
  constructor() {
    super(...arguments), K(this, "state", {
      transitLayer: null
    }), K(this, "setTransitLayerCallback", () => {
      this.state.transitLayer !== null && (this.state.transitLayer.setMap(this.context), this.props.onLoad && this.props.onLoad(this.state.transitLayer));
    });
  }
  componentDidMount() {
    var e = new google.maps.TransitLayer();
    this.setState(function() {
      return {
        transitLayer: e
      };
    }, this.setTransitLayerCallback);
  }
  componentWillUnmount() {
    this.state.transitLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.transitLayer), this.state.transitLayer.setMap(null));
  }
  render() {
    return null;
  }
}
K(Lw, "contextType", me);
function Ul(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function xa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Ul(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Ul(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Vl = {
  onCircleComplete: "circlecomplete",
  onMarkerComplete: "markercomplete",
  onOverlayComplete: "overlaycomplete",
  onPolygonComplete: "polygoncomplete",
  onPolylineComplete: "polylinecomplete",
  onRectangleComplete: "rectanglecomplete"
}, ql = {
  drawingMode(t, e) {
    t.setDrawingMode(e);
  },
  options(t, e) {
    t.setOptions(e);
  }
};
function Aw(t) {
  var {
    options: e,
    drawingMode: r,
    onCircleComplete: n,
    onMarkerComplete: a,
    onOverlayComplete: i,
    onPolygonComplete: s,
    onPolylineComplete: o,
    onRectangleComplete: u,
    onLoad: l,
    onUnmount: c
  } = t, d = Se(me), [p, m] = k(null), [h, v] = k(null), [f, D] = k(null), [b, B] = k(null), [E, C] = k(null), [O, A] = k(null), [H, P] = k(null);
  return x(() => {
    p !== null && p.setMap(d);
  }, [d]), x(() => {
    e && p !== null && p.setOptions(e);
  }, [p, e]), x(() => {
    p !== null && p.setDrawingMode(r ?? null);
  }, [p, r]), x(() => {
    p && n && (h !== null && google.maps.event.removeListener(h), v(google.maps.event.addListener(p, "circlecomplete", n)));
  }, [p, n]), x(() => {
    p && a && (f !== null && google.maps.event.removeListener(f), D(google.maps.event.addListener(p, "markercomplete", a)));
  }, [p, a]), x(() => {
    p && i && (b !== null && google.maps.event.removeListener(b), B(google.maps.event.addListener(p, "overlaycomplete", i)));
  }, [p, i]), x(() => {
    p && s && (E !== null && google.maps.event.removeListener(E), C(google.maps.event.addListener(p, "polygoncomplete", s)));
  }, [p, s]), x(() => {
    p && o && (O !== null && google.maps.event.removeListener(O), A(google.maps.event.addListener(p, "polylinecomplete", o)));
  }, [p, o]), x(() => {
    p && u && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(p, "rectanglecomplete", u)));
  }, [p, u]), x(() => {
    et(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
    var W = new google.maps.drawing.DrawingManager(xa(xa({}, e), {}, {
      map: d
    }));
    return r && W.setDrawingMode(r), n && v(google.maps.event.addListener(W, "circlecomplete", n)), a && D(google.maps.event.addListener(W, "markercomplete", a)), i && B(google.maps.event.addListener(W, "overlaycomplete", i)), s && C(google.maps.event.addListener(W, "polygoncomplete", s)), o && A(google.maps.event.addListener(W, "polylinecomplete", o)), u && P(google.maps.event.addListener(W, "rectanglecomplete", u)), m(W), l && l(W), () => {
      p !== null && (h && google.maps.event.removeListener(h), f && google.maps.event.removeListener(f), b && google.maps.event.removeListener(b), E && google.maps.event.removeListener(E), O && google.maps.event.removeListener(O), H && google.maps.event.removeListener(H), c && c(p), p.setMap(null));
    };
  }, []), null;
}
Xe(Aw);
class Sw extends He {
  constructor(e) {
    super(e), K(this, "registeredEvents", []), K(this, "state", {
      drawingManager: null
    }), K(this, "setDrawingManagerCallback", () => {
      this.state.drawingManager !== null && this.props.onLoad && this.props.onLoad(this.state.drawingManager);
    }), et(!!google.maps.drawing, "Did you include prop libraries={['drawing']} in the URL? %s", google.maps.drawing);
  }
  componentDidMount() {
    var e = new google.maps.drawing.DrawingManager(xa(xa({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: ql,
      eventMap: Vl,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        drawingManager: e
      };
    }, this.setDrawingManagerCallback);
  }
  componentDidUpdate(e) {
    this.state.drawingManager !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: ql,
      eventMap: Vl,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.drawingManager
    }));
  }
  componentWillUnmount() {
    this.state.drawingManager !== null && (this.props.onUnmount && this.props.onUnmount(this.state.drawingManager), be(this.registeredEvents), this.state.drawingManager.setMap(null));
  }
  render() {
    return null;
  }
}
K(Sw, "contextType", me);
function Gl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Vr(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Gl(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Gl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Zl = {
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
}, Kl = {
  animation(t, e) {
    t.setAnimation(e);
  },
  clickable(t, e) {
    t.setClickable(e);
  },
  cursor(t, e) {
    t.setCursor(e);
  },
  draggable(t, e) {
    t.setDraggable(e);
  },
  icon(t, e) {
    t.setIcon(e);
  },
  label(t, e) {
    t.setLabel(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  opacity(t, e) {
    t.setOpacity(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  position(t, e) {
    t.setPosition(e);
  },
  shape(t, e) {
    t.setShape(e);
  },
  title(t, e) {
    t.setTitle(e);
  },
  visible(t, e) {
    t.setVisible(e);
  },
  zIndex(t, e) {
    t.setZIndex(e);
  }
}, Ba = {};
function Pw(t) {
  var {
    position: e,
    options: r,
    clusterer: n,
    noClustererRedraw: a,
    children: i,
    draggable: s,
    visible: o,
    animation: u,
    clickable: l,
    cursor: c,
    icon: d,
    label: p,
    opacity: m,
    shape: h,
    title: v,
    zIndex: f,
    onClick: D,
    onDblClick: b,
    onDrag: B,
    onDragEnd: E,
    onDragStart: C,
    onMouseOut: O,
    onMouseOver: A,
    onMouseUp: H,
    onMouseDown: P,
    onRightClick: W,
    onClickableChanged: R,
    onCursorChanged: M,
    onAnimationChanged: z,
    onDraggableChanged: _,
    onFlatChanged: $,
    onIconChanged: Y,
    onPositionChanged: V,
    onShapeChanged: ee,
    onTitleChanged: ie,
    onVisibleChanged: j,
    onZindexChanged: G,
    onLoad: J,
    onUnmount: U
  } = t, ne = Se(me), [F, w] = k(null), [N, T] = k(null), [I, Z] = k(null), [te, Q] = k(null), [pe, fe] = k(null), [ce, we] = k(null), [je, Le] = k(null), [_e, Ke] = k(null), [ot, Be] = k(null), [tt, lt] = k(null), [Oe, Pe] = k(null), [rt, Je] = k(null), [nt, bt] = k(null), [Qe, Zt] = k(null), [Bt, Ft] = k(null), [Kt, kr] = k(null), [Yt, jr] = k(null), [kt, vr] = k(null), [$t, Rr] = k(null), [Xt, Jr] = k(null), [Ir, Qr] = k(null), [Nr, en] = k(null);
  x(() => {
    F !== null && F.setMap(ne);
  }, [ne]), x(() => {
    typeof r < "u" && F !== null && F.setOptions(r);
  }, [F, r]), x(() => {
    typeof s < "u" && F !== null && F.setDraggable(s);
  }, [F, s]), x(() => {
    e && F !== null && F.setPosition(e);
  }, [F, e]), x(() => {
    typeof o < "u" && F !== null && F.setVisible(o);
  }, [F, o]), x(() => {
    F == null || F.setAnimation(u);
  }, [F, u]), x(() => {
    F && l !== void 0 && F.setClickable(l);
  }, [F, l]), x(() => {
    F && c !== void 0 && F.setCursor(c);
  }, [F, c]), x(() => {
    F && d !== void 0 && F.setIcon(d);
  }, [F, d]), x(() => {
    F && p !== void 0 && F.setLabel(p);
  }, [F, p]), x(() => {
    F && m !== void 0 && F.setOpacity(m);
  }, [F, m]), x(() => {
    F && h !== void 0 && F.setShape(h);
  }, [F, h]), x(() => {
    F && v !== void 0 && F.setTitle(v);
  }, [F, v]), x(() => {
    F && f !== void 0 && F.setZIndex(f);
  }, [F, f]), x(() => {
    F && b && (N !== null && google.maps.event.removeListener(N), T(google.maps.event.addListener(F, "dblclick", b)));
  }, [b]), x(() => {
    F && E && (I !== null && google.maps.event.removeListener(I), Z(google.maps.event.addListener(F, "dragend", E)));
  }, [E]), x(() => {
    F && C && (te !== null && google.maps.event.removeListener(te), Q(google.maps.event.addListener(F, "dragstart", C)));
  }, [C]), x(() => {
    F && P && (pe !== null && google.maps.event.removeListener(pe), fe(google.maps.event.addListener(F, "mousedown", P)));
  }, [P]), x(() => {
    F && O && (ce !== null && google.maps.event.removeListener(ce), we(google.maps.event.addListener(F, "mouseout", O)));
  }, [O]), x(() => {
    F && A && (je !== null && google.maps.event.removeListener(je), Le(google.maps.event.addListener(F, "mouseover", A)));
  }, [A]), x(() => {
    F && H && (_e !== null && google.maps.event.removeListener(_e), Ke(google.maps.event.addListener(F, "mouseup", H)));
  }, [H]), x(() => {
    F && W && (ot !== null && google.maps.event.removeListener(ot), Be(google.maps.event.addListener(F, "rightclick", W)));
  }, [W]), x(() => {
    F && D && (tt !== null && google.maps.event.removeListener(tt), lt(google.maps.event.addListener(F, "click", D)));
  }, [D]), x(() => {
    F && B && (Oe !== null && google.maps.event.removeListener(Oe), Pe(google.maps.event.addListener(F, "drag", B)));
  }, [B]), x(() => {
    F && R && (rt !== null && google.maps.event.removeListener(rt), Je(google.maps.event.addListener(F, "clickable_changed", R)));
  }, [R]), x(() => {
    F && M && (nt !== null && google.maps.event.removeListener(nt), bt(google.maps.event.addListener(F, "cursor_changed", M)));
  }, [M]), x(() => {
    F && z && (Qe !== null && google.maps.event.removeListener(Qe), Zt(google.maps.event.addListener(F, "animation_changed", z)));
  }, [z]), x(() => {
    F && _ && (Bt !== null && google.maps.event.removeListener(Bt), Ft(google.maps.event.addListener(F, "draggable_changed", _)));
  }, [_]), x(() => {
    F && $ && (Kt !== null && google.maps.event.removeListener(Kt), kr(google.maps.event.addListener(F, "flat_changed", $)));
  }, [$]), x(() => {
    F && Y && (Yt !== null && google.maps.event.removeListener(Yt), jr(google.maps.event.addListener(F, "icon_changed", Y)));
  }, [Y]), x(() => {
    F && V && (kt !== null && google.maps.event.removeListener(kt), vr(google.maps.event.addListener(F, "position_changed", V)));
  }, [V]), x(() => {
    F && ee && ($t !== null && google.maps.event.removeListener($t), Rr(google.maps.event.addListener(F, "shape_changed", ee)));
  }, [ee]), x(() => {
    F && ie && (Xt !== null && google.maps.event.removeListener(Xt), Jr(google.maps.event.addListener(F, "title_changed", ie)));
  }, [ie]), x(() => {
    F && j && (Ir !== null && google.maps.event.removeListener(Ir), Qr(google.maps.event.addListener(F, "visible_changed", j)));
  }, [j]), x(() => {
    F && G && (Nr !== null && google.maps.event.removeListener(Nr), en(google.maps.event.addListener(F, "zindex_changed", G)));
  }, [G]), x(() => {
    var gr = Vr(Vr(Vr({}, r || Ba), n ? Ba : {
      map: ne
    }), {}, {
      position: e
    }), ge = new google.maps.Marker(gr);
    return n ? n.addMarker(ge, !!a) : ge.setMap(ne), e && ge.setPosition(e), typeof o < "u" && ge.setVisible(o), typeof s < "u" && ge.setDraggable(s), typeof l < "u" && ge.setClickable(l), typeof c == "string" && ge.setCursor(c), d && ge.setIcon(d), typeof p < "u" && ge.setLabel(p), typeof m < "u" && ge.setOpacity(m), h && ge.setShape(h), typeof v == "string" && ge.setTitle(v), typeof f == "number" && ge.setZIndex(f), b && T(google.maps.event.addListener(ge, "dblclick", b)), E && Z(google.maps.event.addListener(ge, "dragend", E)), C && Q(google.maps.event.addListener(ge, "dragstart", C)), P && fe(google.maps.event.addListener(ge, "mousedown", P)), O && we(google.maps.event.addListener(ge, "mouseout", O)), A && Le(google.maps.event.addListener(ge, "mouseover", A)), H && Ke(google.maps.event.addListener(ge, "mouseup", H)), W && Be(google.maps.event.addListener(ge, "rightclick", W)), D && lt(google.maps.event.addListener(ge, "click", D)), B && Pe(google.maps.event.addListener(ge, "drag", B)), R && Je(google.maps.event.addListener(ge, "clickable_changed", R)), M && bt(google.maps.event.addListener(ge, "cursor_changed", M)), z && Zt(google.maps.event.addListener(ge, "animation_changed", z)), _ && Ft(google.maps.event.addListener(ge, "draggable_changed", _)), $ && kr(google.maps.event.addListener(ge, "flat_changed", $)), Y && jr(google.maps.event.addListener(ge, "icon_changed", Y)), V && vr(google.maps.event.addListener(ge, "position_changed", V)), ee && Rr(google.maps.event.addListener(ge, "shape_changed", ee)), ie && Jr(google.maps.event.addListener(ge, "title_changed", ie)), j && Qr(google.maps.event.addListener(ge, "visible_changed", j)), G && en(google.maps.event.addListener(ge, "zindex_changed", G)), w(ge), J && J(ge), () => {
      N !== null && google.maps.event.removeListener(N), I !== null && google.maps.event.removeListener(I), te !== null && google.maps.event.removeListener(te), pe !== null && google.maps.event.removeListener(pe), ce !== null && google.maps.event.removeListener(ce), je !== null && google.maps.event.removeListener(je), _e !== null && google.maps.event.removeListener(_e), ot !== null && google.maps.event.removeListener(ot), tt !== null && google.maps.event.removeListener(tt), rt !== null && google.maps.event.removeListener(rt), nt !== null && google.maps.event.removeListener(nt), Qe !== null && google.maps.event.removeListener(Qe), Bt !== null && google.maps.event.removeListener(Bt), Kt !== null && google.maps.event.removeListener(Kt), Yt !== null && google.maps.event.removeListener(Yt), kt !== null && google.maps.event.removeListener(kt), Xt !== null && google.maps.event.removeListener(Xt), Ir !== null && google.maps.event.removeListener(Ir), Nr !== null && google.maps.event.removeListener(Nr), U && U(ge), n ? n.removeMarker(ge, !!a) : ge && ge.setMap(null);
    };
  }, []);
  var jn = Ut(() => i ? Nt.map(i, (gr) => {
    if (!Qc(gr))
      return gr;
    var ge = gr;
    return ef(ge, {
      anchor: F
    });
  }) : null, [i, F]);
  return y.jsx(y.Fragment, {
    children: jn
  }) || null;
}
Xe(Pw);
class gp extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []);
  }
  componentDidMount() {
    var e = this;
    return cp(function* () {
      var r = Vr(Vr(Vr({}, e.props.options || Ba), e.props.clusterer ? Ba : {
        map: e.context
      }), {}, {
        position: e.props.position
      });
      e.marker = new google.maps.Marker(r), e.props.clusterer ? e.props.clusterer.addMarker(e.marker, !!e.props.noClustererRedraw) : e.marker.setMap(e.context), e.registeredEvents = Ce({
        updaterMap: Kl,
        eventMap: Zl,
        prevProps: {},
        nextProps: e.props,
        instance: e.marker
      }), e.props.onLoad && e.props.onLoad(e.marker);
    })();
  }
  componentDidUpdate(e) {
    this.marker && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Kl,
      eventMap: Zl,
      prevProps: e,
      nextProps: this.props,
      instance: this.marker
    }));
  }
  componentWillUnmount() {
    this.marker && (this.props.onUnmount && this.props.onUnmount(this.marker), be(this.registeredEvents), this.props.clusterer ? this.props.clusterer.removeMarker(this.marker, !!this.props.noClustererRedraw) : this.marker && this.marker.setMap(null));
  }
  render() {
    var e = this.props.children ? Nt.map(this.props.children, (r) => {
      if (!Qc(r))
        return r;
      var n = r;
      return ef(n, {
        anchor: this.marker
      });
    }) : null;
    return e || null;
  }
}
K(gp, "contextType", me);
var Fw = (
  /** @class */
  function() {
    function t(e, r) {
      e.getClusterer().extend(t, google.maps.OverlayView), this.cluster = e, this.clusterClassName = this.cluster.getClusterer().getClusterClass(), this.className = this.clusterClassName, this.styles = r, this.center = void 0, this.div = null, this.sums = null, this.visible = !1, this.boundsChangedListener = null, this.url = "", this.height = 0, this.width = 0, this.anchorText = [0, 0], this.anchorIcon = [0, 0], this.textColor = "black", this.textSize = 11, this.textDecoration = "none", this.fontWeight = "bold", this.fontStyle = "normal", this.fontFamily = "Arial,sans-serif", this.backgroundPosition = "0 0", this.cMouseDownInCluster = null, this.cDraggingMapByCluster = null, this.timeOut = null, this.setMap(e.getMap()), this.onBoundsChanged = this.onBoundsChanged.bind(this), this.onMouseDown = this.onMouseDown.bind(this), this.onClick = this.onClick.bind(this), this.onMouseOver = this.onMouseOver.bind(this), this.onMouseOut = this.onMouseOut.bind(this), this.onAdd = this.onAdd.bind(this), this.onRemove = this.onRemove.bind(this), this.draw = this.draw.bind(this), this.hide = this.hide.bind(this), this.show = this.show.bind(this), this.useStyle = this.useStyle.bind(this), this.setCenter = this.setCenter.bind(this), this.getPosFromLatLng = this.getPosFromLatLng.bind(this);
    }
    return t.prototype.onBoundsChanged = function() {
      this.cDraggingMapByCluster = this.cMouseDownInCluster;
    }, t.prototype.onMouseDown = function() {
      this.cMouseDownInCluster = !0, this.cDraggingMapByCluster = !1;
    }, t.prototype.onClick = function(e) {
      if (this.cMouseDownInCluster = !1, !this.cDraggingMapByCluster) {
        var r = this.cluster.getClusterer();
        if (google.maps.event.trigger(r, "click", this.cluster), google.maps.event.trigger(r, "clusterclick", this.cluster), r.getZoomOnClick()) {
          var n = r.getMaxZoom(), a = this.cluster.getBounds(), i = r.getMap();
          i !== null && "fitBounds" in i && i.fitBounds(a), this.timeOut = window.setTimeout(function() {
            var s = r.getMap();
            if (s !== null) {
              "fitBounds" in s && s.fitBounds(a);
              var o = s.getZoom() || 0;
              n !== null && o > n && s.setZoom(n + 1);
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
      var r = this.getMap();
      r !== null && (this.boundsChangedListener = google.maps.event.addListener(r, "bounds_changed", this.onBoundsChanged), this.div.addEventListener("mousedown", this.onMouseDown), this.div.addEventListener("click", this.onClick), this.div.addEventListener("mouseover", this.onMouseOver), this.div.addEventListener("mouseout", this.onMouseOut));
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
      var e, r, n, a, i, s;
      if (this.div && this.center) {
        var o = this.sums === null || typeof this.sums.title > "u" || this.sums.title === "" ? this.cluster.getClusterer().getTitle() : this.sums.title, u = this.backgroundPosition.split(" "), l = parseInt(((e = u[0]) === null || e === void 0 ? void 0 : e.replace(/^\s+|\s+$/g, "")) || "0", 10), c = parseInt(((r = u[1]) === null || r === void 0 ? void 0 : r.replace(/^\s+|\s+$/g, "")) || "0", 10), d = this.getPosFromLatLng(this.center);
        this.div.className = this.className, this.div.setAttribute("style", "cursor: pointer; position: absolute; top: ".concat(d !== null ? "".concat(d.y, "px") : "0", "; left: ").concat(d !== null ? "".concat(d.x, "px") : "0", "; width: ").concat(this.width, "px; height: ").concat(this.height, "px; "));
        var p = document.createElement("img");
        p.alt = o, p.src = this.url, p.width = this.width, p.height = this.height, p.setAttribute("style", "position: absolute; top: ".concat(c, "px; left: ").concat(l, "px")), this.cluster.getClusterer().enableRetinaIcons || (p.style.clip = "rect(-".concat(c, "px, -").concat(l + this.width, "px, -").concat(c + this.height, ", -").concat(l, ")"));
        var m = document.createElement("div");
        m.setAttribute("style", "position: absolute; top: ".concat(this.anchorText[0], "px; left: ").concat(this.anchorText[1], "px; color: ").concat(this.textColor, "; font-size: ").concat(this.textSize, "px; font-family: ").concat(this.fontFamily, "; font-weight: ").concat(this.fontWeight, "; fontStyle: ").concat(this.fontStyle, "; text-decoration: ").concat(this.textDecoration, "; text-align: center; width: ").concat(this.width, "px; line-height: ").concat(this.height, "px")), !((n = this.sums) === null || n === void 0) && n.text && (m.innerText = "".concat((a = this.sums) === null || a === void 0 ? void 0 : a.text)), !((i = this.sums) === null || i === void 0) && i.html && (m.innerHTML = "".concat((s = this.sums) === null || s === void 0 ? void 0 : s.html)), this.div.innerHTML = "", this.div.appendChild(p), this.div.appendChild(m), this.div.title = o, this.div.style.display = "";
      }
      this.visible = !0;
    }, t.prototype.useStyle = function(e) {
      this.sums = e;
      var r = this.cluster.getClusterer().getStyles(), n = r[Math.min(r.length - 1, Math.max(0, e.index - 1))];
      n && (this.url = n.url, this.height = n.height, this.width = n.width, n.className && (this.className = "".concat(this.clusterClassName, " ").concat(n.className)), this.anchorText = n.anchorText || [0, 0], this.anchorIcon = n.anchorIcon || [this.height / 2, this.width / 2], this.textColor = n.textColor || "black", this.textSize = n.textSize || 11, this.textDecoration = n.textDecoration || "none", this.fontWeight = n.fontWeight || "bold", this.fontStyle = n.fontStyle || "normal", this.fontFamily = n.fontFamily || "Arial,sans-serif", this.backgroundPosition = n.backgroundPosition || "0 0");
    }, t.prototype.setCenter = function(e) {
      this.center = e;
    }, t.prototype.getPosFromLatLng = function(e) {
      var r = this.getProjection().fromLatLngToDivPixel(e);
      return r !== null && (r.x -= this.anchorIcon[1], r.y -= this.anchorIcon[0]), r;
    }, t;
  }()
), Tw = (
  /** @class */
  function() {
    function t(e) {
      this.markerClusterer = e, this.map = this.markerClusterer.getMap(), this.gridSize = this.markerClusterer.getGridSize(), this.minClusterSize = this.markerClusterer.getMinimumClusterSize(), this.averageCenter = this.markerClusterer.getAverageCenter(), this.markers = [], this.center = void 0, this.bounds = null, this.clusterIcon = new Fw(this, this.markerClusterer.getStyles()), this.getSize = this.getSize.bind(this), this.getMarkers = this.getMarkers.bind(this), this.getCenter = this.getCenter.bind(this), this.getMap = this.getMap.bind(this), this.getClusterer = this.getClusterer.bind(this), this.getBounds = this.getBounds.bind(this), this.remove = this.remove.bind(this), this.addMarker = this.addMarker.bind(this), this.isMarkerInClusterBounds = this.isMarkerInClusterBounds.bind(this), this.calculateBounds = this.calculateBounds.bind(this), this.updateIcon = this.updateIcon.bind(this), this.isMarkerAlreadyAdded = this.isMarkerAlreadyAdded.bind(this);
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
      for (var e = new google.maps.LatLngBounds(this.center, this.center), r = this.getMarkers(), n = 0, a = r; n < a.length; n++) {
        var i = a[n], s = i.getPosition();
        s && e.extend(s);
      }
      return e;
    }, t.prototype.remove = function() {
      this.clusterIcon.setMap(null), this.markers = [], delete this.markers;
    }, t.prototype.addMarker = function(e) {
      var r;
      if (this.isMarkerAlreadyAdded(e))
        return !1;
      if (this.center) {
        if (this.averageCenter) {
          var n = e.getPosition();
          if (n) {
            var a = this.markers.length + 1;
            this.center = new google.maps.LatLng((this.center.lat() * (a - 1) + n.lat()) / a, (this.center.lng() * (a - 1) + n.lng()) / a), this.calculateBounds();
          }
        }
      } else {
        var n = e.getPosition();
        n && (this.center = n, this.calculateBounds());
      }
      e.isAdded = !0, this.markers.push(e);
      var i = this.markers.length, s = this.markerClusterer.getMaxZoom(), o = (r = this.map) === null || r === void 0 ? void 0 : r.getZoom();
      if (s !== null && typeof o < "u" && o > s)
        e.getMap() !== this.map && e.setMap(this.map);
      else if (i < this.minClusterSize)
        e.getMap() !== this.map && e.setMap(this.map);
      else if (i === this.minClusterSize)
        for (var u = 0, l = this.markers; u < l.length; u++) {
          var c = l[u];
          c.setMap(null);
        }
      else
        e.setMap(null);
      return !0;
    }, t.prototype.isMarkerInClusterBounds = function(e) {
      if (this.bounds !== null) {
        var r = e.getPosition();
        if (r)
          return this.bounds.contains(r);
      }
      return !1;
    }, t.prototype.calculateBounds = function() {
      this.bounds = this.markerClusterer.getExtendedBounds(new google.maps.LatLngBounds(this.center, this.center));
    }, t.prototype.updateIcon = function() {
      var e, r = this.markers.length, n = this.markerClusterer.getMaxZoom(), a = (e = this.map) === null || e === void 0 ? void 0 : e.getZoom();
      if (n !== null && typeof a < "u" && a > n) {
        this.clusterIcon.hide();
        return;
      }
      if (r < this.minClusterSize) {
        this.clusterIcon.hide();
        return;
      }
      this.center && this.clusterIcon.setCenter(this.center), this.clusterIcon.useStyle(this.markerClusterer.getCalculator()(this.markers, this.markerClusterer.getStyles().length)), this.clusterIcon.show();
    }, t.prototype.isMarkerAlreadyAdded = function(e) {
      if (this.markers.includes)
        return this.markers.includes(e);
      for (var r = 0; r < this.markers.length; r++)
        if (e === this.markers[r])
          return !0;
      return !1;
    }, t;
  }()
);
function Mw(t, e) {
  var r = t.length, n = r.toString().length, a = Math.min(n, e);
  return {
    text: r.toString(),
    index: a,
    title: ""
  };
}
var kw = 2e3, jw = 500, Rw = "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", Iw = "png", Nw = [53, 56, 66, 78, 90], _w = "cluster", mp = (
  /** @class */
  function() {
    function t(e, r, n) {
      r === void 0 && (r = []), n === void 0 && (n = {}), this.getMinimumClusterSize = this.getMinimumClusterSize.bind(this), this.setMinimumClusterSize = this.setMinimumClusterSize.bind(this), this.getEnableRetinaIcons = this.getEnableRetinaIcons.bind(this), this.setEnableRetinaIcons = this.setEnableRetinaIcons.bind(this), this.addToClosestCluster = this.addToClosestCluster.bind(this), this.getImageExtension = this.getImageExtension.bind(this), this.setImageExtension = this.setImageExtension.bind(this), this.getExtendedBounds = this.getExtendedBounds.bind(this), this.getAverageCenter = this.getAverageCenter.bind(this), this.setAverageCenter = this.setAverageCenter.bind(this), this.getTotalClusters = this.getTotalClusters.bind(this), this.fitMapToMarkers = this.fitMapToMarkers.bind(this), this.getIgnoreHidden = this.getIgnoreHidden.bind(this), this.setIgnoreHidden = this.setIgnoreHidden.bind(this), this.getClusterClass = this.getClusterClass.bind(this), this.setClusterClass = this.setClusterClass.bind(this), this.getTotalMarkers = this.getTotalMarkers.bind(this), this.getZoomOnClick = this.getZoomOnClick.bind(this), this.setZoomOnClick = this.setZoomOnClick.bind(this), this.getBatchSizeIE = this.getBatchSizeIE.bind(this), this.setBatchSizeIE = this.setBatchSizeIE.bind(this), this.createClusters = this.createClusters.bind(this), this.onZoomChanged = this.onZoomChanged.bind(this), this.getImageSizes = this.getImageSizes.bind(this), this.setImageSizes = this.setImageSizes.bind(this), this.getCalculator = this.getCalculator.bind(this), this.setCalculator = this.setCalculator.bind(this), this.removeMarkers = this.removeMarkers.bind(this), this.resetViewport = this.resetViewport.bind(this), this.getImagePath = this.getImagePath.bind(this), this.setImagePath = this.setImagePath.bind(this), this.pushMarkerTo = this.pushMarkerTo.bind(this), this.removeMarker = this.removeMarker.bind(this), this.clearMarkers = this.clearMarkers.bind(this), this.setupStyles = this.setupStyles.bind(this), this.getGridSize = this.getGridSize.bind(this), this.setGridSize = this.setGridSize.bind(this), this.getClusters = this.getClusters.bind(this), this.getMaxZoom = this.getMaxZoom.bind(this), this.setMaxZoom = this.setMaxZoom.bind(this), this.getMarkers = this.getMarkers.bind(this), this.addMarkers = this.addMarkers.bind(this), this.getStyles = this.getStyles.bind(this), this.setStyles = this.setStyles.bind(this), this.addMarker = this.addMarker.bind(this), this.onRemove = this.onRemove.bind(this), this.getTitle = this.getTitle.bind(this), this.setTitle = this.setTitle.bind(this), this.repaint = this.repaint.bind(this), this.onIdle = this.onIdle.bind(this), this.redraw = this.redraw.bind(this), this.onAdd = this.onAdd.bind(this), this.draw = this.draw.bind(this), this.extend = this.extend.bind(this), this.extend(t, google.maps.OverlayView), this.markers = [], this.clusters = [], this.listeners = [], this.activeMap = null, this.ready = !1, this.gridSize = n.gridSize || 60, this.minClusterSize = n.minimumClusterSize || 2, this.maxZoom = n.maxZoom || null, this.styles = n.styles || [], this.title = n.title || "", this.zoomOnClick = !0, n.zoomOnClick !== void 0 && (this.zoomOnClick = n.zoomOnClick), this.averageCenter = !1, n.averageCenter !== void 0 && (this.averageCenter = n.averageCenter), this.ignoreHidden = !1, n.ignoreHidden !== void 0 && (this.ignoreHidden = n.ignoreHidden), this.enableRetinaIcons = !1, n.enableRetinaIcons !== void 0 && (this.enableRetinaIcons = n.enableRetinaIcons), this.imagePath = n.imagePath || Rw, this.imageExtension = n.imageExtension || Iw, this.imageSizes = n.imageSizes || Nw, this.calculator = n.calculator || Mw, this.batchSize = n.batchSize || kw, this.batchSizeIE = n.batchSizeIE || jw, this.clusterClass = n.clusterClass || _w, navigator.userAgent.toLowerCase().indexOf("msie") !== -1 && (this.batchSize = this.batchSizeIE), this.timerRefStatic = null, this.setupStyles(), this.addMarkers(r, !0), this.setMap(e);
    }
    return t.prototype.onZoomChanged = function() {
      var e, r;
      this.resetViewport(!1), (((e = this.getMap()) === null || e === void 0 ? void 0 : e.getZoom()) === (this.get("minZoom") || 0) || ((r = this.getMap()) === null || r === void 0 ? void 0 : r.getZoom()) === this.get("maxZoom")) && google.maps.event.trigger(this, "idle");
    }, t.prototype.onIdle = function() {
      this.redraw();
    }, t.prototype.onAdd = function() {
      var e = this.getMap();
      this.activeMap = e, this.ready = !0, this.repaint(), e !== null && (this.listeners = [google.maps.event.addListener(e, "zoom_changed", this.onZoomChanged), google.maps.event.addListener(e, "idle", this.onIdle)]);
    }, t.prototype.onRemove = function() {
      for (var e = 0, r = this.markers; e < r.length; e++) {
        var n = r[e];
        n.getMap() !== this.activeMap && n.setMap(this.activeMap);
      }
      for (var a = 0, i = this.clusters; a < i.length; a++) {
        var s = i[a];
        s.remove();
      }
      this.clusters = [];
      for (var o = 0, u = this.listeners; o < u.length; o++) {
        var l = u[o];
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
      for (var e = this.getMarkers(), r = new google.maps.LatLngBounds(), n = 0, a = e; n < a.length; n++) {
        var i = a[n], s = i.getPosition();
        s && r.extend(s);
      }
      var o = this.getMap();
      o !== null && "fitBounds" in o && o.fitBounds(r);
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
    }, t.prototype.addMarker = function(e, r) {
      this.pushMarkerTo(e), r || this.redraw();
    }, t.prototype.addMarkers = function(e, r) {
      for (var n in e)
        if (Object.prototype.hasOwnProperty.call(e, n)) {
          var a = e[n];
          a && this.pushMarkerTo(a);
        }
      r || this.redraw();
    }, t.prototype.pushMarkerTo = function(e) {
      var r = this;
      e.getDraggable() && google.maps.event.addListener(e, "dragend", function() {
        r.ready && (e.isAdded = !1, r.repaint());
      }), e.isAdded = !1, this.markers.push(e);
    }, t.prototype.removeMarker_ = function(e) {
      var r = -1;
      if (this.markers.indexOf)
        r = this.markers.indexOf(e);
      else
        for (var n = 0; n < this.markers.length; n++)
          if (e === this.markers[n]) {
            r = n;
            break;
          }
      return r === -1 ? !1 : (e.setMap(null), this.markers.splice(r, 1), !0);
    }, t.prototype.removeMarker = function(e, r) {
      var n = this.removeMarker_(e);
      return !r && n && this.repaint(), n;
    }, t.prototype.removeMarkers = function(e, r) {
      for (var n = !1, a = 0, i = e; a < i.length; a++) {
        var s = i[a];
        n = n || this.removeMarker_(s);
      }
      return !r && n && this.repaint(), n;
    }, t.prototype.clearMarkers = function() {
      this.resetViewport(!0), this.markers = [];
    }, t.prototype.repaint = function() {
      var e = this.clusters.slice();
      this.clusters = [], this.resetViewport(!1), this.redraw(), setTimeout(function() {
        for (var n = 0, a = e; n < a.length; n++) {
          var i = a[n];
          i.remove();
        }
      }, 0);
    }, t.prototype.getExtendedBounds = function(e) {
      var r = this.getProjection(), n = r.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(e.getNorthEast().lat(), e.getNorthEast().lng())
      );
      n !== null && (n.x += this.gridSize, n.y -= this.gridSize);
      var a = r.fromLatLngToDivPixel(
        // Turn the bounds into latlng.
        new google.maps.LatLng(e.getSouthWest().lat(), e.getSouthWest().lng())
      );
      if (a !== null && (a.x -= this.gridSize, a.y += this.gridSize), n !== null) {
        var i = r.fromDivPixelToLatLng(n);
        i !== null && e.extend(i);
      }
      if (a !== null) {
        var s = r.fromDivPixelToLatLng(a);
        s !== null && e.extend(s);
      }
      return e;
    }, t.prototype.redraw = function() {
      this.createClusters(0);
    }, t.prototype.resetViewport = function(e) {
      for (var r = 0, n = this.clusters; r < n.length; r++) {
        var a = n[r];
        a.remove();
      }
      this.clusters = [];
      for (var i = 0, s = this.markers; i < s.length; i++) {
        var o = s[i];
        o.isAdded = !1, e && o.setMap(null);
      }
    }, t.prototype.distanceBetweenPoints = function(e, r) {
      var n = 6371, a = (r.lat() - e.lat()) * Math.PI / 180, i = (r.lng() - e.lng()) * Math.PI / 180, s = Math.sin(a / 2) * Math.sin(a / 2) + Math.cos(e.lat() * Math.PI / 180) * Math.cos(r.lat() * Math.PI / 180) * Math.sin(i / 2) * Math.sin(i / 2);
      return n * (2 * Math.atan2(Math.sqrt(s), Math.sqrt(1 - s)));
    }, t.prototype.isMarkerInBounds = function(e, r) {
      var n = e.getPosition();
      return n ? r.contains(n) : !1;
    }, t.prototype.addToClosestCluster = function(e) {
      for (var r, n = 4e4, a = null, i = 0, s = this.clusters; i < s.length; i++) {
        var o = s[i];
        r = o;
        var u = r.getCenter(), l = e.getPosition();
        if (u && l) {
          var c = this.distanceBetweenPoints(u, l);
          c < n && (n = c, a = r);
        }
      }
      a && a.isMarkerInClusterBounds(e) ? a.addMarker(e) : (r = new Tw(this), r.addMarker(e), this.clusters.push(r));
    }, t.prototype.createClusters = function(e) {
      var r = this;
      if (this.ready) {
        e === 0 && (google.maps.event.trigger(this, "clusteringbegin", this), this.timerRefStatic !== null && (window.clearTimeout(this.timerRefStatic), delete this.timerRefStatic));
        for (var n = this.getMap(), a = n !== null && ("getBounds" in n) ? n.getBounds() : null, i = (n == null ? void 0 : n.getZoom()) || 0, s = i > 3 ? new google.maps.LatLngBounds(a == null ? void 0 : a.getSouthWest(), a == null ? void 0 : a.getNorthEast()) : new google.maps.LatLngBounds(new google.maps.LatLng(85.02070771743472, -178.48388434375), new google.maps.LatLng(-85.08136444384544, 178.00048865625)), o = this.getExtendedBounds(s), u = Math.min(e + this.batchSize, this.markers.length), l = e; l < u; l++) {
          var c = this.markers[l];
          c && !c.isAdded && this.isMarkerInBounds(c, o) && (!this.ignoreHidden || this.ignoreHidden && c.getVisible()) && this.addToClosestCluster(c);
        }
        if (u < this.markers.length)
          this.timerRefStatic = window.setTimeout(function() {
            r.createClusters(u);
          }, 0);
        else {
          this.timerRefStatic = null, google.maps.event.trigger(this, "clusteringend", this);
          for (var d = 0, p = this.clusters; d < p.length; d++) {
            var m = p[d];
            m.updateIcon();
          }
        }
      }
    }, t.prototype.extend = function(e, r) {
      return (function(a) {
        for (var i in a.prototype) {
          var s = i;
          this.prototype[s] = a.prototype[s];
        }
        return this;
      }).apply(e, [r]);
    }, t;
  }()
);
function Yl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $w(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Yl(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Yl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var At = {
  onClick: "click",
  onClusteringBegin: "clusteringbegin",
  onClusteringEnd: "clusteringend",
  onMouseOut: "mouseout",
  onMouseOver: "mouseover"
}, Ae = {
  averageCenter(t, e) {
    t.setAverageCenter(e);
  },
  batchSizeIE(t, e) {
    t.setBatchSizeIE(e);
  },
  calculator(t, e) {
    t.setCalculator(e);
  },
  clusterClass(t, e) {
    t.setClusterClass(e);
  },
  enableRetinaIcons(t, e) {
    t.setEnableRetinaIcons(e);
  },
  gridSize(t, e) {
    t.setGridSize(e);
  },
  ignoreHidden(t, e) {
    t.setIgnoreHidden(e);
  },
  imageExtension(t, e) {
    t.setImageExtension(e);
  },
  imagePath(t, e) {
    t.setImagePath(e);
  },
  imageSizes(t, e) {
    t.setImageSizes(e);
  },
  maxZoom(t, e) {
    t.setMaxZoom(e);
  },
  minimumClusterSize(t, e) {
    t.setMinimumClusterSize(e);
  },
  styles(t, e) {
    t.setStyles(e);
  },
  title(t, e) {
    t.setTitle(e);
  },
  zoomOnClick(t, e) {
    t.setZoomOnClick(e);
  }
}, zw = {};
function Ww(t) {
  var {
    children: e,
    options: r,
    averageCenter: n,
    batchSizeIE: a,
    calculator: i,
    clusterClass: s,
    enableRetinaIcons: o,
    gridSize: u,
    ignoreHidden: l,
    imageExtension: c,
    imagePath: d,
    imageSizes: p,
    maxZoom: m,
    minimumClusterSize: h,
    styles: v,
    title: f,
    zoomOnClick: D,
    onClick: b,
    onClusteringBegin: B,
    onClusteringEnd: E,
    onMouseOver: C,
    onMouseOut: O,
    onLoad: A,
    onUnmount: H
  } = t, [P, W] = k(null), R = Se(me), [M, z] = k(null), [_, $] = k(null), [Y, V] = k(null), [ee, ie] = k(null), [j, G] = k(null);
  return x(() => {
    P && O && (ee !== null && google.maps.event.removeListener(ee), ie(google.maps.event.addListener(P, At.onMouseOut, O)));
  }, [O]), x(() => {
    P && C && (j !== null && google.maps.event.removeListener(j), G(google.maps.event.addListener(P, At.onMouseOver, C)));
  }, [C]), x(() => {
    P && b && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(P, At.onClick, b)));
  }, [b]), x(() => {
    P && B && (_ !== null && google.maps.event.removeListener(_), $(google.maps.event.addListener(P, At.onClusteringBegin, B)));
  }, [B]), x(() => {
    P && E && (Y !== null && google.maps.event.removeListener(Y), $(google.maps.event.addListener(P, At.onClusteringEnd, E)));
  }, [E]), x(() => {
    typeof n < "u" && P !== null && Ae.averageCenter(P, n);
  }, [P, n]), x(() => {
    typeof a < "u" && P !== null && Ae.batchSizeIE(P, a);
  }, [P, a]), x(() => {
    typeof i < "u" && P !== null && Ae.calculator(P, i);
  }, [P, i]), x(() => {
    typeof s < "u" && P !== null && Ae.clusterClass(P, s);
  }, [P, s]), x(() => {
    typeof o < "u" && P !== null && Ae.enableRetinaIcons(P, o);
  }, [P, o]), x(() => {
    typeof u < "u" && P !== null && Ae.gridSize(P, u);
  }, [P, u]), x(() => {
    typeof l < "u" && P !== null && Ae.ignoreHidden(P, l);
  }, [P, l]), x(() => {
    typeof c < "u" && P !== null && Ae.imageExtension(P, c);
  }, [P, c]), x(() => {
    typeof d < "u" && P !== null && Ae.imagePath(P, d);
  }, [P, d]), x(() => {
    typeof p < "u" && P !== null && Ae.imageSizes(P, p);
  }, [P, p]), x(() => {
    typeof m < "u" && P !== null && Ae.maxZoom(P, m);
  }, [P, m]), x(() => {
    typeof h < "u" && P !== null && Ae.minimumClusterSize(P, h);
  }, [P, h]), x(() => {
    typeof v < "u" && P !== null && Ae.styles(P, v);
  }, [P, v]), x(() => {
    typeof f < "u" && P !== null && Ae.title(P, f);
  }, [P, f]), x(() => {
    typeof D < "u" && P !== null && Ae.zoomOnClick(P, D);
  }, [P, D]), x(() => {
    if (R) {
      var J = $w({}, r || zw), U = new mp(R, [], J);
      return n && Ae.averageCenter(U, n), a && Ae.batchSizeIE(U, a), i && Ae.calculator(U, i), s && Ae.clusterClass(U, s), o && Ae.enableRetinaIcons(U, o), u && Ae.gridSize(U, u), l && Ae.ignoreHidden(U, l), c && Ae.imageExtension(U, c), d && Ae.imagePath(U, d), p && Ae.imageSizes(U, p), m && Ae.maxZoom(U, m), h && Ae.minimumClusterSize(U, h), v && Ae.styles(U, v), f && Ae.title(U, f), D && Ae.zoomOnClick(U, D), O && ie(google.maps.event.addListener(U, At.onMouseOut, O)), C && G(google.maps.event.addListener(U, At.onMouseOver, C)), b && z(google.maps.event.addListener(U, At.onClick, b)), B && $(google.maps.event.addListener(U, At.onClusteringBegin, B)), E && V(google.maps.event.addListener(U, At.onClusteringEnd, E)), W(U), A && A(U), () => {
        ee !== null && google.maps.event.removeListener(ee), j !== null && google.maps.event.removeListener(j), M !== null && google.maps.event.removeListener(M), _ !== null && google.maps.event.removeListener(_), Y !== null && google.maps.event.removeListener(Y), H && H(U);
      };
    }
  }, []), P !== null && e(P) || null;
}
Xe(Ww);
class Hw extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      markerClusterer: null
    }), K(this, "setClustererCallback", () => {
      this.state.markerClusterer !== null && this.props.onLoad && this.props.onLoad(this.state.markerClusterer);
    });
  }
  componentDidMount() {
    if (this.context) {
      var e = new mp(this.context, [], this.props.options);
      this.registeredEvents = Ce({
        updaterMap: Ae,
        eventMap: At,
        prevProps: {},
        nextProps: this.props,
        instance: e
      }), this.setState(() => ({
        markerClusterer: e
      }), this.setClustererCallback);
    }
  }
  componentDidUpdate(e) {
    this.state.markerClusterer && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Ae,
      eventMap: At,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.markerClusterer
    }));
  }
  componentWillUnmount() {
    this.state.markerClusterer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.markerClusterer), be(this.registeredEvents), this.state.markerClusterer.setMap(null));
  }
  render() {
    return this.state.markerClusterer !== null ? this.props.children(this.state.markerClusterer) : null;
  }
}
K(Hw, "contextType", me);
function Xl(t) {
  t.cancelBubble = !0, t.stopPropagation && t.stopPropagation();
}
var yp = (
  /** @class */
  function() {
    function t(e) {
      e === void 0 && (e = {}), this.getCloseClickHandler = this.getCloseClickHandler.bind(this), this.closeClickHandler = this.closeClickHandler.bind(this), this.createInfoBoxDiv = this.createInfoBoxDiv.bind(this), this.addClickHandler = this.addClickHandler.bind(this), this.getCloseBoxImg = this.getCloseBoxImg.bind(this), this.getBoxWidths = this.getBoxWidths.bind(this), this.setBoxStyle = this.setBoxStyle.bind(this), this.setPosition = this.setPosition.bind(this), this.getPosition = this.getPosition.bind(this), this.setOptions = this.setOptions.bind(this), this.setContent = this.setContent.bind(this), this.setVisible = this.setVisible.bind(this), this.getContent = this.getContent.bind(this), this.getVisible = this.getVisible.bind(this), this.setZIndex = this.setZIndex.bind(this), this.getZIndex = this.getZIndex.bind(this), this.onRemove = this.onRemove.bind(this), this.panBox = this.panBox.bind(this), this.extend = this.extend.bind(this), this.close = this.close.bind(this), this.draw = this.draw.bind(this), this.show = this.show.bind(this), this.hide = this.hide.bind(this), this.open = this.open.bind(this), this.extend(t, google.maps.OverlayView), this.content = e.content || "", this.disableAutoPan = e.disableAutoPan || !1, this.maxWidth = e.maxWidth || 0, this.pixelOffset = e.pixelOffset || new google.maps.Size(0, 0), this.position = e.position || new google.maps.LatLng(0, 0), this.zIndex = e.zIndex || null, this.boxClass = e.boxClass || "infoBox", this.boxStyle = e.boxStyle || {}, this.closeBoxMargin = e.closeBoxMargin || "2px", this.closeBoxURL = e.closeBoxURL || "http://www.google.com/intl/en_us/mapfiles/close.gif", e.closeBoxURL === "" && (this.closeBoxURL = ""), this.infoBoxClearance = e.infoBoxClearance || new google.maps.Size(1, 1), typeof e.visible > "u" && (typeof e.isHidden > "u" ? e.visible = !0 : e.visible = !e.isHidden), this.isHidden = !e.visible, this.alignBottom = e.alignBottom || !1, this.pane = e.pane || "floatPane", this.enableEventPropagation = e.enableEventPropagation || !1, this.div = null, this.closeListener = null, this.moveListener = null, this.mapListener = null, this.contextListener = null, this.eventListeners = null, this.fixedWidthSet = null;
    }
    return t.prototype.createInfoBoxDiv = function() {
      var e = this, r = function(c) {
        c.returnValue = !1, c.preventDefault && c.preventDefault(), e.enableEventPropagation || Xl(c);
      };
      if (!this.div) {
        this.div = document.createElement("div"), this.setBoxStyle(), typeof this.content == "string" ? this.div.innerHTML = this.getCloseBoxImg() + this.content : (this.div.innerHTML = this.getCloseBoxImg(), this.div.appendChild(this.content));
        var n = this.getPanes();
        if (n !== null && n[this.pane].appendChild(this.div), this.addClickHandler(), this.div.style.width)
          this.fixedWidthSet = !0;
        else if (this.maxWidth !== 0 && this.div.offsetWidth > this.maxWidth)
          this.div.style.width = this.maxWidth + "px", this.fixedWidthSet = !0;
        else {
          var a = this.getBoxWidths();
          this.div.style.width = this.div.offsetWidth - a.left - a.right + "px", this.fixedWidthSet = !1;
        }
        if (this.panBox(this.disableAutoPan), !this.enableEventPropagation) {
          this.eventListeners = [];
          for (var i = ["mousedown", "mouseover", "mouseout", "mouseup", "click", "dblclick", "touchstart", "touchend", "touchmove"], s = 0, o = i; s < o.length; s++) {
            var u = o[s];
            this.eventListeners.push(google.maps.event.addListener(this.div, u, Xl));
          }
          this.eventListeners.push(google.maps.event.addListener(this.div, "mouseover", function() {
            e.div && (e.div.style.cursor = "default");
          }));
        }
        this.contextListener = google.maps.event.addListener(this.div, "contextmenu", r), google.maps.event.trigger(this, "domready");
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
        var r = this.getMap();
        if (r instanceof google.maps.Map) {
          var n = 0, a = 0, i = r.getBounds();
          i && !i.contains(this.position) && r.setCenter(this.position);
          var s = r.getDiv(), o = s.offsetWidth, u = s.offsetHeight, l = this.pixelOffset.width, c = this.pixelOffset.height, d = this.div.offsetWidth, p = this.div.offsetHeight, m = this.infoBoxClearance.width, h = this.infoBoxClearance.height, v = this.getProjection(), f = v.fromLatLngToContainerPixel(this.position);
          f !== null && (f.x < -l + m ? n = f.x + l - m : f.x + d + l + m > o && (n = f.x + d + l + m - o), this.alignBottom ? f.y < -c + h + p ? a = f.y + c - h - p : f.y + c + h > u && (a = f.y + c + h - u) : f.y < -c + h ? a = f.y + c - h : f.y + p + c + h > u && (a = f.y + p + c + h - u)), n === 0 && a === 0 || r.panBy(n, a);
        }
      }
    }, t.prototype.setBoxStyle = function() {
      if (this.div) {
        this.div.className = this.boxClass, this.div.style.cssText = "";
        var e = this.boxStyle;
        for (var r in e)
          Object.prototype.hasOwnProperty.call(e, r) && (this.div.style[r] = e[r]);
        if (this.div.style.webkitTransform = "translateZ(0)", typeof this.div.style.opacity < "u" && this.div.style.opacity !== "") {
          var n = parseFloat(this.div.style.opacity || "");
          this.div.style.msFilter = '"progid:DXImageTransform.Microsoft.Alpha(Opacity=' + n * 100 + ')"', this.div.style.filter = "alpha(opacity=" + n * 100 + ")";
        }
        this.div.style.position = "absolute", this.div.style.visibility = "hidden", this.zIndex !== null && (this.div.style.zIndex = this.zIndex + ""), this.div.style.overflow || (this.div.style.overflow = "auto");
      }
    }, t.prototype.getBoxWidths = function() {
      var e = {
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
      };
      if (!this.div)
        return e;
      if (document.defaultView) {
        var r = this.div.ownerDocument, n = r && r.defaultView ? r.defaultView.getComputedStyle(this.div, "") : null;
        n && (e.top = parseInt(n.borderTopWidth || "", 10) || 0, e.bottom = parseInt(n.borderBottomWidth || "", 10) || 0, e.left = parseInt(n.borderLeftWidth || "", 10) || 0, e.right = parseInt(n.borderRightWidth || "", 10) || 0);
      } else if (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        document.documentElement.currentStyle
      ) {
        var a = this.div.currentStyle;
        a && (e.top = parseInt(a.borderTopWidth || "", 10) || 0, e.bottom = parseInt(a.borderBottomWidth || "", 10) || 0, e.left = parseInt(a.borderLeftWidth || "", 10) || 0, e.right = parseInt(a.borderRightWidth || "", 10) || 0);
      }
      return e;
    }, t.prototype.onRemove = function() {
      this.div && this.div.parentNode && (this.div.parentNode.removeChild(this.div), this.div = null);
    }, t.prototype.draw = function() {
      if (this.createInfoBoxDiv(), this.div) {
        var e = this.getProjection(), r = e.fromLatLngToDivPixel(this.position);
        r !== null && (this.div.style.left = r.x + this.pixelOffset.width + "px", this.alignBottom ? this.div.style.bottom = -(r.y + this.pixelOffset.height) + "px" : this.div.style.top = r.y + this.pixelOffset.height + "px"), this.isHidden ? this.div.style.visibility = "hidden" : this.div.style.visibility = "visible";
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
    }, t.prototype.open = function(e, r) {
      var n = this;
      r && (this.position = r.getPosition(), this.moveListener = google.maps.event.addListener(r, "position_changed", function() {
        var a = r.getPosition();
        n.setPosition(a);
      }), this.mapListener = google.maps.event.addListener(r, "map_changed", function() {
        n.setMap(r.map);
      })), this.setMap(e), this.div && this.panBox();
    }, t.prototype.close = function() {
      if (this.closeListener && (google.maps.event.removeListener(this.closeListener), this.closeListener = null), this.eventListeners) {
        for (var e = 0, r = this.eventListeners; e < r.length; e++) {
          var n = r[e];
          google.maps.event.removeListener(n);
        }
        this.eventListeners = null;
      }
      this.moveListener && (google.maps.event.removeListener(this.moveListener), this.moveListener = null), this.mapListener && (google.maps.event.removeListener(this.mapListener), this.mapListener = null), this.contextListener && (google.maps.event.removeListener(this.contextListener), this.contextListener = null), this.setMap(null);
    }, t.prototype.extend = function(e, r) {
      return (function(a) {
        for (var i in a.prototype)
          Object.prototype.hasOwnProperty.call(this, i) || (this.prototype[i] = a.prototype[i]);
        return this;
      }).apply(e, [r]);
    }, t;
  }()
), Uw = ["position"], Vw = ["position"];
function Jl(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function La(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Jl(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Jl(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Ql = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, ec = {
  options(t, e) {
    t.setOptions(e);
  },
  position(t, e) {
    e instanceof google.maps.LatLng ? t.setPosition(e) : t.setPosition(new google.maps.LatLng(e.lat, e.lng));
  },
  visible(t, e) {
    t.setVisible(e);
  },
  zIndex(t, e) {
    t.setZIndex(e);
  }
}, qw = {};
function Gw(t) {
  var {
    children: e,
    anchor: r,
    options: n,
    position: a,
    zIndex: i,
    onCloseClick: s,
    onDomReady: o,
    onContentChanged: u,
    onPositionChanged: l,
    onZindexChanged: c,
    onLoad: d,
    onUnmount: p
  } = t, m = Se(me), [h, v] = k(null), [f, D] = k(null), [b, B] = k(null), [E, C] = k(null), [O, A] = k(null), [H, P] = k(null), W = Re(null);
  return x(() => {
    m && h !== null && (h.close(), r ? h.open(m, r) : h.getPosition() && h.open(m));
  }, [m, h, r]), x(() => {
    n && h !== null && h.setOptions(n);
  }, [h, n]), x(() => {
    if (a && h !== null) {
      var R = a instanceof google.maps.LatLng ? a : (
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        new google.maps.LatLng(a.lat, a.lng)
      );
      h.setPosition(R);
    }
  }, [a]), x(() => {
    typeof i == "number" && h !== null && h.setZIndex(i);
  }, [i]), x(() => {
    h && s && (f !== null && google.maps.event.removeListener(f), D(google.maps.event.addListener(h, "closeclick", s)));
  }, [s]), x(() => {
    h && o && (b !== null && google.maps.event.removeListener(b), B(google.maps.event.addListener(h, "domready", o)));
  }, [o]), x(() => {
    h && u && (E !== null && google.maps.event.removeListener(E), C(google.maps.event.addListener(h, "content_changed", u)));
  }, [u]), x(() => {
    h && l && (O !== null && google.maps.event.removeListener(O), A(google.maps.event.addListener(h, "position_changed", l)));
  }, [l]), x(() => {
    h && c && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(h, "zindex_changed", c)));
  }, [c]), x(() => {
    if (m) {
      var R = n || qw, {
        position: M
      } = R, z = io(R, Uw), _;
      M && !(M instanceof google.maps.LatLng) && (_ = new google.maps.LatLng(M.lat, M.lng));
      var $ = new yp(La(La({}, z), _ ? {
        position: _
      } : {}));
      W.current = document.createElement("div"), v($), s && D(google.maps.event.addListener($, "closeclick", s)), o && B(google.maps.event.addListener($, "domready", o)), u && C(google.maps.event.addListener($, "content_changed", u)), l && A(google.maps.event.addListener($, "position_changed", l)), c && P(google.maps.event.addListener($, "zindex_changed", c)), $.setContent(W.current), r ? $.open(m, r) : $.getPosition() ? $.open(m) : et(!1, "You must provide either an anchor or a position prop for <InfoBox>."), d && d($);
    }
    return () => {
      h !== null && (f && google.maps.event.removeListener(f), E && google.maps.event.removeListener(E), b && google.maps.event.removeListener(b), O && google.maps.event.removeListener(O), H && google.maps.event.removeListener(H), p && p(h), h.close());
    };
  }, []), W.current ? ja(Nt.only(e), W.current) : null;
}
Xe(Gw);
class Zw extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "containerElement", null), K(this, "state", {
      infoBox: null
    }), K(this, "open", (e, r) => {
      r ? this.context !== null && e.open(this.context, r) : e.getPosition() ? this.context !== null && e.open(this.context) : et(!1, "You must provide either an anchor or a position prop for <InfoBox>.");
    }), K(this, "setInfoBoxCallback", () => {
      this.state.infoBox !== null && this.containerElement !== null && (this.state.infoBox.setContent(this.containerElement), this.open(this.state.infoBox, this.props.anchor), this.props.onLoad && this.props.onLoad(this.state.infoBox));
    });
  }
  componentDidMount() {
    var e = this.props.options || {}, {
      position: r
    } = e, n = io(e, Vw), a;
    r && !(r instanceof google.maps.LatLng) && (a = new google.maps.LatLng(r.lat, r.lng));
    var i = new yp(La(La({}, n), a ? {
      position: a
    } : {}));
    this.containerElement = document.createElement("div"), this.registeredEvents = Ce({
      updaterMap: ec,
      eventMap: Ql,
      prevProps: {},
      nextProps: this.props,
      instance: i
    }), this.setState({
      infoBox: i
    }, this.setInfoBoxCallback);
  }
  componentDidUpdate(e) {
    var {
      infoBox: r
    } = this.state;
    r !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: ec,
      eventMap: Ql,
      prevProps: e,
      nextProps: this.props,
      instance: r
    }));
  }
  componentWillUnmount() {
    var {
      onUnmount: e
    } = this.props, {
      infoBox: r
    } = this.state;
    r !== null && (e && e(r), be(this.registeredEvents), r.close());
  }
  render() {
    return this.containerElement ? ja(Nt.only(this.props.children), this.containerElement) : null;
  }
}
K(Zw, "contextType", me);
var ki, tc;
function Kw() {
  return tc || (tc = 1, ki = function t(e, r) {
    if (e === r) return !0;
    if (e && r && typeof e == "object" && typeof r == "object") {
      if (e.constructor !== r.constructor) return !1;
      var n, a, i;
      if (Array.isArray(e)) {
        if (n = e.length, n != r.length) return !1;
        for (a = n; a-- !== 0; ) if (!t(e[a], r[a])) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === r.source && e.flags === r.flags;
      if (e.valueOf !== Object.prototype.valueOf) return e.valueOf() === r.valueOf();
      if (e.toString !== Object.prototype.toString) return e.toString() === r.toString();
      if (i = Object.keys(e), n = i.length, n !== Object.keys(r).length) return !1;
      for (a = n; a-- !== 0; ) if (!Object.prototype.hasOwnProperty.call(r, i[a])) return !1;
      for (a = n; a-- !== 0; ) {
        var s = i[a];
        if (!t(e[s], r[s])) return !1;
      }
      return !0;
    }
    return e !== e && r !== r;
  }), ki;
}
var Yw = Kw(), rc = /* @__PURE__ */ lp(Yw), nc = [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], ji = 1, un = 8;
class so {
  /**
   * Creates an index from raw `ArrayBuffer` data.
   * @param {ArrayBuffer} data
   */
  static from(e) {
    if (!(e instanceof ArrayBuffer))
      throw new Error("Data must be an instance of ArrayBuffer.");
    var [r, n] = new Uint8Array(e, 0, 2);
    if (r !== 219)
      throw new Error("Data does not appear to be in a KDBush format.");
    var a = n >> 4;
    if (a !== ji)
      throw new Error("Got v".concat(a, " data when expected v").concat(ji, "."));
    var i = nc[n & 15];
    if (!i)
      throw new Error("Unrecognized array type.");
    var [s] = new Uint16Array(e, 2, 1), [o] = new Uint32Array(e, 4, 1);
    return new so(o, s, i, e);
  }
  /**
   * Creates an index that will hold a given number of items.
   * @param {number} numItems
   * @param {number} [nodeSize=64] Size of the KD-tree node (64 by default).
   * @param {TypedArrayConstructor} [ArrayType=Float64Array] The array type used for coordinates storage (`Float64Array` by default).
   * @param {ArrayBuffer} [data] (For internal use only)
   */
  constructor(e) {
    var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 64, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Float64Array, a = arguments.length > 3 ? arguments[3] : void 0;
    if (isNaN(e) || e < 0) throw new Error("Unpexpected numItems value: ".concat(e, "."));
    this.numItems = +e, this.nodeSize = Math.min(Math.max(+r, 2), 65535), this.ArrayType = n, this.IndexArrayType = e < 65536 ? Uint16Array : Uint32Array;
    var i = nc.indexOf(this.ArrayType), s = e * 2 * this.ArrayType.BYTES_PER_ELEMENT, o = e * this.IndexArrayType.BYTES_PER_ELEMENT, u = (8 - o % 8) % 8;
    if (i < 0)
      throw new Error("Unexpected typed array class: ".concat(n, "."));
    a && a instanceof ArrayBuffer ? (this.data = a, this.ids = new this.IndexArrayType(this.data, un, e), this.coords = new this.ArrayType(this.data, un + o + u, e * 2), this._pos = e * 2, this._finished = !0) : (this.data = new ArrayBuffer(un + s + o + u), this.ids = new this.IndexArrayType(this.data, un, e), this.coords = new this.ArrayType(this.data, un + o + u, e * 2), this._pos = 0, this._finished = !1, new Uint8Array(this.data, 0, 2).set([219, (ji << 4) + i]), new Uint16Array(this.data, 2, 1)[0] = r, new Uint32Array(this.data, 4, 1)[0] = e);
  }
  /**
   * Add a point to the index.
   * @param {number} x
   * @param {number} y
   * @returns {number} An incremental index associated with the added item (starting from `0`).
   */
  add(e, r) {
    var n = this._pos >> 1;
    return this.ids[n] = n, this.coords[this._pos++] = e, this.coords[this._pos++] = r, n;
  }
  /**
   * Perform indexing of the added points.
   */
  finish() {
    var e = this._pos >> 1;
    if (e !== this.numItems)
      throw new Error("Added ".concat(e, " items when expected ").concat(this.numItems, "."));
    return cs(this.ids, this.coords, this.nodeSize, 0, this.numItems - 1, 0), this._finished = !0, this;
  }
  /**
   * Search the index for items within a given bounding box.
   * @param {number} minX
   * @param {number} minY
   * @param {number} maxX
   * @param {number} maxY
   * @returns {number[]} An array of indices correponding to the found items.
   */
  range(e, r, n, a) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    for (var {
      ids: i,
      coords: s,
      nodeSize: o
    } = this, u = [0, i.length - 1, 0], l = []; u.length; ) {
      var c = u.pop() || 0, d = u.pop() || 0, p = u.pop() || 0;
      if (d - p <= o) {
        for (var m = p; m <= d; m++) {
          var h = s[2 * m], v = s[2 * m + 1];
          h >= e && h <= n && v >= r && v <= a && l.push(i[m]);
        }
        continue;
      }
      var f = p + d >> 1, D = s[2 * f], b = s[2 * f + 1];
      D >= e && D <= n && b >= r && b <= a && l.push(i[f]), (c === 0 ? e <= D : r <= b) && (u.push(p), u.push(f - 1), u.push(1 - c)), (c === 0 ? n >= D : a >= b) && (u.push(f + 1), u.push(d), u.push(1 - c));
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
  within(e, r, n) {
    if (!this._finished) throw new Error("Data not yet indexed - call index.finish().");
    for (var {
      ids: a,
      coords: i,
      nodeSize: s
    } = this, o = [0, a.length - 1, 0], u = [], l = n * n; o.length; ) {
      var c = o.pop() || 0, d = o.pop() || 0, p = o.pop() || 0;
      if (d - p <= s) {
        for (var m = p; m <= d; m++)
          ac(i[2 * m], i[2 * m + 1], e, r) <= l && u.push(a[m]);
        continue;
      }
      var h = p + d >> 1, v = i[2 * h], f = i[2 * h + 1];
      ac(v, f, e, r) <= l && u.push(a[h]), (c === 0 ? e - n <= v : r - n <= f) && (o.push(p), o.push(h - 1), o.push(1 - c)), (c === 0 ? e + n >= v : r + n >= f) && (o.push(h + 1), o.push(d), o.push(1 - c));
    }
    return u;
  }
}
function cs(t, e, r, n, a, i) {
  if (!(a - n <= r)) {
    var s = n + a >> 1;
    Cp(t, e, s, n, a, i), cs(t, e, r, n, s - 1, 1 - i), cs(t, e, r, s + 1, a, 1 - i);
  }
}
function Cp(t, e, r, n, a, i) {
  for (; a > n; ) {
    if (a - n > 600) {
      var s = a - n + 1, o = r - n + 1, u = Math.log(s), l = 0.5 * Math.exp(2 * u / 3), c = 0.5 * Math.sqrt(u * l * (s - l) / s) * (o - s / 2 < 0 ? -1 : 1), d = Math.max(n, Math.floor(r - o * l / s + c)), p = Math.min(a, Math.floor(r + (s - o) * l / s + c));
      Cp(t, e, r, d, p, i);
    }
    var m = e[2 * r + i], h = n, v = a;
    for (ln(t, e, n, r), e[2 * a + i] > m && ln(t, e, n, a); h < v; ) {
      for (ln(t, e, h, v), h++, v--; e[2 * h + i] < m; ) h++;
      for (; e[2 * v + i] > m; ) v--;
    }
    e[2 * n + i] === m ? ln(t, e, n, v) : (v++, ln(t, e, v, a)), v <= r && (n = v + 1), r <= v && (a = v - 1);
  }
}
function ln(t, e, r, n) {
  Ri(t, r, n), Ri(e, 2 * r, 2 * n), Ri(e, 2 * r + 1, 2 * n + 1);
}
function Ri(t, e, r) {
  var n = t[e];
  t[e] = t[r], t[r] = n;
}
function ac(t, e, r, n) {
  var a = t - r, i = e - n;
  return a * a + i * i;
}
var Xw = {
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
}, ic = Math.fround || /* @__PURE__ */ ((t) => (e) => (t[0] = +e, t[0]))(new Float32Array(1)), Dr = 2, ar = 3, Ii = 4, tr = 5, Dp = 6;
class Jw {
  constructor(e) {
    this.options = Object.assign(Object.create(Xw), e), this.trees = new Array(this.options.maxZoom + 1), this.stride = this.options.reduce ? 7 : 6, this.clusterProps = [];
  }
  load(e) {
    var {
      log: r,
      minZoom: n,
      maxZoom: a
    } = this.options;
    r && console.time("total time");
    var i = "prepare ".concat(e.length, " points");
    r && console.time(i), this.points = e;
    for (var s = [], o = 0; o < e.length; o++) {
      var u = e[o];
      if (u.geometry) {
        var [l, c] = u.geometry.coordinates, d = ic(ra(l)), p = ic(na(c));
        s.push(
          d,
          p,
          // projected point coordinates
          1 / 0,
          // the last zoom the point was processed at
          o,
          // index of the source feature in the original input array
          -1,
          // parent cluster id
          1
          // number of points in a cluster
        ), this.options.reduce && s.push(0);
      }
    }
    var m = this.trees[a + 1] = this._createTree(s);
    r && console.timeEnd(i);
    for (var h = a; h >= n; h--) {
      var v = +Date.now();
      m = this.trees[h] = this._createTree(this._cluster(m, h)), r && console.log("z%d: %d clusters in %dms", h, m.numItems, +Date.now() - v);
    }
    return r && console.timeEnd("total time"), this;
  }
  getClusters(e, r) {
    var n = ((e[0] + 180) % 360 + 360) % 360 - 180, a = Math.max(-90, Math.min(90, e[1])), i = e[2] === 180 ? 180 : ((e[2] + 180) % 360 + 360) % 360 - 180, s = Math.max(-90, Math.min(90, e[3]));
    if (e[2] - e[0] >= 360)
      n = -180, i = 180;
    else if (n > i) {
      var o = this.getClusters([n, a, 180, s], r), u = this.getClusters([-180, a, i, s], r);
      return o.concat(u);
    }
    var l = this.trees[this._limitZoom(r)], c = l.range(ra(n), na(s), ra(i), na(a)), d = l.data, p = [];
    for (var m of c) {
      var h = this.stride * m;
      p.push(d[h + tr] > 1 ? sc(d, h, this.clusterProps) : this.points[d[h + ar]]);
    }
    return p;
  }
  getChildren(e) {
    var r = this._getOriginId(e), n = this._getOriginZoom(e), a = "No cluster with the specified id.", i = this.trees[n];
    if (!i) throw new Error(a);
    var s = i.data;
    if (r * this.stride >= s.length) throw new Error(a);
    var o = this.options.radius / (this.options.extent * Math.pow(2, n - 1)), u = s[r * this.stride], l = s[r * this.stride + 1], c = i.within(u, l, o), d = [];
    for (var p of c) {
      var m = p * this.stride;
      s[m + Ii] === e && d.push(s[m + tr] > 1 ? sc(s, m, this.clusterProps) : this.points[s[m + ar]]);
    }
    if (d.length === 0) throw new Error(a);
    return d;
  }
  getLeaves(e, r, n) {
    r = r || 10, n = n || 0;
    var a = [];
    return this._appendLeaves(a, e, r, n, 0), a;
  }
  getTile(e, r, n) {
    var a = this.trees[this._limitZoom(e)], i = Math.pow(2, e), {
      extent: s,
      radius: o
    } = this.options, u = o / s, l = (n - u) / i, c = (n + 1 + u) / i, d = {
      features: []
    };
    return this._addTileFeatures(a.range((r - u) / i, l, (r + 1 + u) / i, c), a.data, r, n, i, d), r === 0 && this._addTileFeatures(a.range(1 - u / i, l, 1, c), a.data, i, n, i, d), r === i - 1 && this._addTileFeatures(a.range(0, l, u / i, c), a.data, -1, n, i, d), d.features.length ? d : null;
  }
  getClusterExpansionZoom(e) {
    for (var r = this._getOriginZoom(e) - 1; r <= this.options.maxZoom; ) {
      var n = this.getChildren(e);
      if (r++, n.length !== 1) break;
      e = n[0].properties.cluster_id;
    }
    return r;
  }
  _appendLeaves(e, r, n, a, i) {
    var s = this.getChildren(r);
    for (var o of s) {
      var u = o.properties;
      if (u && u.cluster ? i + u.point_count <= a ? i += u.point_count : i = this._appendLeaves(e, u.cluster_id, n, a, i) : i < a ? i++ : e.push(o), e.length === n) break;
    }
    return i;
  }
  _createTree(e) {
    for (var r = new so(e.length / this.stride | 0, this.options.nodeSize, Float32Array), n = 0; n < e.length; n += this.stride) r.add(e[n], e[n + 1]);
    return r.finish(), r.data = e, r;
  }
  _addTileFeatures(e, r, n, a, i, s) {
    for (var o of e) {
      var u = o * this.stride, l = r[u + tr] > 1, c = void 0, d = void 0, p = void 0;
      if (l)
        c = bp(r, u, this.clusterProps), d = r[u], p = r[u + 1];
      else {
        var m = this.points[r[u + ar]];
        c = m.properties;
        var [h, v] = m.geometry.coordinates;
        d = ra(h), p = na(v);
      }
      var f = {
        type: 1,
        geometry: [[Math.round(this.options.extent * (d * i - n)), Math.round(this.options.extent * (p * i - a))]],
        tags: c
      }, D = void 0;
      l || this.options.generateId ? D = r[u + ar] : D = this.points[r[u + ar]].id, D !== void 0 && (f.id = D), s.features.push(f);
    }
  }
  _limitZoom(e) {
    return Math.max(this.options.minZoom, Math.min(Math.floor(+e), this.options.maxZoom + 1));
  }
  _cluster(e, r) {
    for (var {
      radius: n,
      extent: a,
      reduce: i,
      minPoints: s
    } = this.options, o = n / (a * Math.pow(2, r)), u = e.data, l = [], c = this.stride, d = 0; d < u.length; d += c)
      if (!(u[d + Dr] <= r)) {
        u[d + Dr] = r;
        var p = u[d], m = u[d + 1], h = e.within(u[d], u[d + 1], o), v = u[d + tr], f = v;
        for (var D of h) {
          var b = D * c;
          u[b + Dr] > r && (f += u[b + tr]);
        }
        if (f > v && f >= s) {
          var B = p * v, E = m * v, C = void 0, O = -1, A = ((d / c | 0) << 5) + (r + 1) + this.points.length;
          for (var H of h) {
            var P = H * c;
            if (!(u[P + Dr] <= r)) {
              u[P + Dr] = r;
              var W = u[P + tr];
              B += u[P] * W, E += u[P + 1] * W, u[P + Ii] = A, i && (C || (C = this._map(u, d, !0), O = this.clusterProps.length, this.clusterProps.push(C)), i(C, this._map(u, P)));
            }
          }
          u[d + Ii] = A, l.push(B / f, E / f, 1 / 0, A, -1, f), i && l.push(O);
        } else {
          for (var R = 0; R < c; R++) l.push(u[d + R]);
          if (f > 1)
            for (var M of h) {
              var z = M * c;
              if (!(u[z + Dr] <= r)) {
                u[z + Dr] = r;
                for (var _ = 0; _ < c; _++) l.push(u[z + _]);
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
  _map(e, r, n) {
    if (e[r + tr] > 1) {
      var a = this.clusterProps[e[r + Dp]];
      return n ? Object.assign({}, a) : a;
    }
    var i = this.points[e[r + ar]].properties, s = this.options.map(i);
    return n && s === i ? Object.assign({}, s) : s;
  }
}
function sc(t, e, r) {
  return {
    type: "Feature",
    id: t[e + ar],
    properties: bp(t, e, r),
    geometry: {
      type: "Point",
      coordinates: [Qw(t[e]), e1(t[e + 1])]
    }
  };
}
function bp(t, e, r) {
  var n = t[e + tr], a = n >= 1e4 ? "".concat(Math.round(n / 1e3), "k") : n >= 1e3 ? "".concat(Math.round(n / 100) / 10, "k") : n, i = t[e + Dp], s = i === -1 ? {} : Object.assign({}, r[i]);
  return Object.assign(s, {
    cluster: !0,
    cluster_id: t[e + ar],
    point_count: n,
    point_count_abbreviated: a
  });
}
function ra(t) {
  return t / 360 + 0.5;
}
function na(t) {
  var e = Math.sin(t * Math.PI / 180), r = 0.5 - 0.25 * Math.log((1 + e) / (1 - e)) / Math.PI;
  return r < 0 ? 0 : r > 1 ? 1 : r;
}
function Qw(t) {
  return (t - 0.5) * 360;
}
function e1(t) {
  var e = (180 - t * 360) * Math.PI / 180;
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
function t1(t, e) {
  var r = {};
  for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && typeof Object.getOwnPropertySymbols == "function") for (var a = 0, n = Object.getOwnPropertySymbols(t); a < n.length; a++)
    e.indexOf(n[a]) < 0 && Object.prototype.propertyIsEnumerable.call(t, n[a]) && (r[n[a]] = t[n[a]]);
  return r;
}
class Et {
  static isAdvancedMarkerAvailable(e) {
    return google.maps.marker && e.getMapCapabilities().isAdvancedMarkersAvailable === !0;
  }
  static isAdvancedMarker(e) {
    return google.maps.marker && e instanceof google.maps.marker.AdvancedMarkerElement;
  }
  static setMap(e, r) {
    this.isAdvancedMarker(e) ? e.map = r : e.setMap(r);
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
class fs {
  constructor(e) {
    var {
      markers: r,
      position: n
    } = e;
    this.markers = r, n && (n instanceof google.maps.LatLng ? this._position = n : this._position = new google.maps.LatLng(n));
  }
  get bounds() {
    if (!(this.markers.length === 0 && !this._position)) {
      var e = new google.maps.LatLngBounds(this._position, this._position);
      for (var r of this.markers)
        e.extend(Et.getPosition(r));
      return e;
    }
  }
  get position() {
    return this._position || this.bounds.getCenter();
  }
  /**
   * Get the count of **visible** markers.
   */
  get count() {
    return this.markers.filter((e) => Et.getVisible(e)).length;
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
    this.marker && (Et.setMap(this.marker, null), this.marker = void 0), this.markers.length = 0;
  }
}
class r1 {
  constructor(e) {
    var {
      maxZoom: r = 16
    } = e;
    this.maxZoom = r;
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
  noop(e) {
    var {
      markers: r
    } = e;
    return n1(r);
  }
}
var n1 = (t) => {
  var e = t.map((r) => new fs({
    position: Et.getPosition(r),
    markers: [r]
  }));
  return e;
};
class a1 extends r1 {
  constructor(e) {
    var {
      maxZoom: r,
      radius: n = 60
    } = e, a = t1(e, ["maxZoom", "radius"]);
    super({
      maxZoom: r
    }), this.state = {
      zoom: -1
    }, this.superCluster = new Jw(Object.assign({
      maxZoom: this.maxZoom,
      radius: n
    }, a));
  }
  calculate(e) {
    var r = !1, n = {
      zoom: e.map.getZoom()
    };
    if (!rc(e.markers, this.markers)) {
      r = !0, this.markers = [...e.markers];
      var a = this.markers.map((i) => {
        var s = Et.getPosition(i), o = [s.lng(), s.lat()];
        return {
          type: "Feature",
          geometry: {
            type: "Point",
            coordinates: o
          },
          properties: {
            marker: i
          }
        };
      });
      this.superCluster.load(a);
    }
    return r || (this.state.zoom <= this.maxZoom || n.zoom <= this.maxZoom) && (r = !rc(this.state, n)), this.state = n, r && (this.clusters = this.cluster(e)), {
      clusters: this.clusters,
      changed: r
    };
  }
  cluster(e) {
    var {
      map: r
    } = e;
    return this.superCluster.getClusters([-180, -90, 180, 90], Math.round(r.getZoom())).map((n) => this.transformCluster(n));
  }
  transformCluster(e) {
    var {
      geometry: {
        coordinates: [r, n]
      },
      properties: a
    } = e;
    if (a.cluster)
      return new fs({
        markers: this.superCluster.getLeaves(a.cluster_id, 1 / 0).map((s) => s.properties.marker),
        position: {
          lat: n,
          lng: r
        }
      });
    var i = a.marker;
    return new fs({
      markers: [i],
      position: Et.getPosition(i)
    });
  }
}
class i1 {
  constructor(e, r) {
    this.markers = {
      sum: e.length
    };
    var n = r.map((i) => i.count), a = n.reduce((i, s) => i + s, 0);
    this.clusters = {
      count: r.length,
      markers: {
        mean: a / r.length,
        sum: a,
        min: Math.min(...n),
        max: Math.max(...n)
      }
    };
  }
}
class s1 {
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
  render(e, r, n) {
    var {
      count: a,
      position: i
    } = e, s = a > Math.max(10, r.clusters.markers.mean) ? "#ff0000" : "#0000ff", o = '<svg fill="'.concat(s, `" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240 240" width="50" height="50">
<circle cx="120" cy="120" opacity=".6" r="70" />
<circle cx="120" cy="120" opacity=".3" r="90" />
<circle cx="120" cy="120" opacity=".2" r="110" />
<text x="50%" y="50%" style="fill:#fff" text-anchor="middle" font-size="50" dominant-baseline="middle" font-family="roboto,arial,sans-serif">`).concat(a, `</text>
</svg>`), u = "Cluster of ".concat(a, " markers"), l = Number(google.maps.Marker.MAX_ZINDEX) + a;
    if (Et.isAdvancedMarkerAvailable(n)) {
      var c = new DOMParser(), d = c.parseFromString(o, "image/svg+xml").documentElement;
      d.setAttribute("transform", "translate(0 25)");
      var p = {
        map: n,
        position: i,
        zIndex: l,
        title: u,
        content: d
      };
      return new google.maps.marker.AdvancedMarkerElement(p);
    }
    var m = {
      position: i,
      zIndex: l,
      title: u,
      icon: {
        url: "data:image/svg+xml;base64,".concat(btoa(o)),
        anchor: new google.maps.Point(25, 25)
      }
    };
    return new google.maps.Marker(m);
  }
}
function o1(t, e) {
  for (var r in e.prototype)
    t.prototype[r] = e.prototype[r];
}
class oo {
  constructor() {
    o1(oo, google.maps.OverlayView);
  }
}
var mn;
(function(t) {
  t.CLUSTERING_BEGIN = "clusteringbegin", t.CLUSTERING_END = "clusteringend", t.CLUSTER_CLICK = "click";
})(mn || (mn = {}));
var u1 = (t, e, r) => {
  r.fitBounds(e.bounds);
};
class l1 extends oo {
  constructor(e) {
    var {
      map: r,
      markers: n = [],
      algorithmOptions: a = {},
      algorithm: i = new a1(a),
      renderer: s = new s1(),
      onClusterClick: o = u1
    } = e;
    super(), this.markers = [...n], this.clusters = [], this.algorithm = i, this.renderer = s, this.onClusterClick = o, r && this.setMap(r);
  }
  addMarker(e, r) {
    this.markers.includes(e) || (this.markers.push(e), r || this.render());
  }
  addMarkers(e, r) {
    e.forEach((n) => {
      this.addMarker(n, !0);
    }), r || this.render();
  }
  removeMarker(e, r) {
    var n = this.markers.indexOf(e);
    return n === -1 ? !1 : (Et.setMap(e, null), this.markers.splice(n, 1), r || this.render(), !0);
  }
  removeMarkers(e, r) {
    var n = !1;
    return e.forEach((a) => {
      n = this.removeMarker(a, !0) || n;
    }), n && !r && this.render(), n;
  }
  clearMarkers(e) {
    this.markers.length = 0, e || this.render();
  }
  /**
   * Recalculates and draws all the marker clusters.
   */
  render() {
    var e = this.getMap();
    if (e instanceof google.maps.Map && e.getProjection()) {
      google.maps.event.trigger(this, mn.CLUSTERING_BEGIN, this);
      var {
        clusters: r,
        changed: n
      } = this.algorithm.calculate({
        markers: this.markers,
        map: e,
        mapCanvasProjection: this.getProjection()
      });
      if (n || n == null) {
        var a = /* @__PURE__ */ new Set();
        for (var i of r)
          i.markers.length == 1 && a.add(i.markers[0]);
        var s = [];
        for (var o of this.clusters)
          o.marker != null && (o.markers.length == 1 ? a.has(o.marker) || Et.setMap(o.marker, null) : s.push(o.marker));
        this.clusters = r, this.renderClusters(), requestAnimationFrame(() => s.forEach((u) => Et.setMap(u, null)));
      }
      google.maps.event.trigger(this, mn.CLUSTERING_END, this);
    }
  }
  onAdd() {
    this.idleListener = this.getMap().addListener("idle", this.render.bind(this)), this.render();
  }
  onRemove() {
    google.maps.event.removeListener(this.idleListener), this.reset();
  }
  reset() {
    this.markers.forEach((e) => Et.setMap(e, null)), this.clusters.forEach((e) => e.delete()), this.clusters = [];
  }
  renderClusters() {
    var e = new i1(this.markers, this.clusters), r = this.getMap();
    this.clusters.forEach((n) => {
      n.markers.length === 1 ? n.marker = n.markers[0] : (n.marker = this.renderer.render(n, e, r), n.markers.forEach((a) => Et.setMap(a, null)), this.onClusterClick && n.marker.addListener(
        "click",
        /* istanbul ignore next */
        (a) => {
          google.maps.event.trigger(this, mn.CLUSTER_CLICK, n), this.onClusterClick(a, n, r);
        }
      )), Et.setMap(n.marker, r);
    });
  }
}
function oc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function uc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? oc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : oc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function c1(t) {
  var e = lw(), [r, n] = k(null);
  return x(() => {
    if (e && r === null) {
      var a = new l1(uc(uc({}, t), {}, {
        map: e
      }));
      n(a);
    }
  }, [e]), r;
}
function f1(t) {
  var {
    children: e,
    options: r
  } = t, n = c1(r);
  return n !== null ? e(n) : null;
}
Xe(f1);
var lc = {
  onCloseClick: "closeclick",
  onContentChanged: "content_changed",
  onDomReady: "domready",
  onPositionChanged: "position_changed",
  onZindexChanged: "zindex_changed"
}, cc = {
  options(t, e) {
    t.setOptions(e);
  },
  position(t, e) {
    t.setPosition(e);
  },
  zIndex(t, e) {
    t.setZIndex(e);
  }
};
function d1(t) {
  var {
    children: e,
    anchor: r,
    options: n,
    position: a,
    zIndex: i,
    onCloseClick: s,
    onDomReady: o,
    onContentChanged: u,
    onPositionChanged: l,
    onZindexChanged: c,
    onLoad: d,
    onUnmount: p
  } = t, m = Se(me), [h, v] = k(null), [f, D] = k(null), [b, B] = k(null), [E, C] = k(null), [O, A] = k(null), [H, P] = k(null), W = Re(null);
  return x(() => {
    h !== null && (h.close(), r ? h.open(m, r) : h.getPosition() && h.open(m));
  }, [m, h, r]), x(() => {
    n && h !== null && h.setOptions(n);
  }, [h, n]), x(() => {
    a && h !== null && h.setPosition(a);
  }, [a]), x(() => {
    typeof i == "number" && h !== null && h.setZIndex(i);
  }, [i]), x(() => {
    h && s && (f !== null && google.maps.event.removeListener(f), D(google.maps.event.addListener(h, "closeclick", s)));
  }, [s]), x(() => {
    h && o && (b !== null && google.maps.event.removeListener(b), B(google.maps.event.addListener(h, "domready", o)));
  }, [o]), x(() => {
    h && u && (E !== null && google.maps.event.removeListener(E), C(google.maps.event.addListener(h, "content_changed", u)));
  }, [u]), x(() => {
    h && l && (O !== null && google.maps.event.removeListener(O), A(google.maps.event.addListener(h, "position_changed", l)));
  }, [l]), x(() => {
    h && c && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(h, "zindex_changed", c)));
  }, [c]), x(() => {
    var R = new google.maps.InfoWindow(n);
    return v(R), W.current = document.createElement("div"), s && D(google.maps.event.addListener(R, "closeclick", s)), o && B(google.maps.event.addListener(R, "domready", o)), u && C(google.maps.event.addListener(R, "content_changed", u)), l && A(google.maps.event.addListener(R, "position_changed", l)), c && P(google.maps.event.addListener(R, "zindex_changed", c)), R.setContent(W.current), a && R.setPosition(a), i && R.setZIndex(i), r ? R.open(m, r) : R.getPosition() ? R.open(m) : et(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>."), d && d(R), () => {
      f && google.maps.event.removeListener(f), E && google.maps.event.removeListener(E), b && google.maps.event.removeListener(b), O && google.maps.event.removeListener(O), H && google.maps.event.removeListener(H), p && p(R), R.close();
    };
  }, []), W.current ? ja(Nt.only(e), W.current) : null;
}
Xe(d1);
class p1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "containerElement", null), K(this, "state", {
      infoWindow: null
    }), K(this, "open", (e, r) => {
      r ? e.open(this.context, r) : e.getPosition() ? e.open(this.context) : et(!1, "You must provide either an anchor (typically render it inside a <Marker>) or a position props for <InfoWindow>.");
    }), K(this, "setInfoWindowCallback", () => {
      this.state.infoWindow !== null && this.containerElement !== null && (this.state.infoWindow.setContent(this.containerElement), this.open(this.state.infoWindow, this.props.anchor), this.props.onLoad && this.props.onLoad(this.state.infoWindow));
    });
  }
  componentDidMount() {
    var e = new google.maps.InfoWindow(this.props.options);
    this.containerElement = document.createElement("div"), this.registeredEvents = Ce({
      updaterMap: cc,
      eventMap: lc,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(() => ({
      infoWindow: e
    }), this.setInfoWindowCallback);
  }
  componentDidUpdate(e) {
    this.state.infoWindow !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: cc,
      eventMap: lc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.infoWindow
    }));
  }
  componentWillUnmount() {
    this.state.infoWindow !== null && (be(this.registeredEvents), this.props.onUnmount && this.props.onUnmount(this.state.infoWindow), this.state.infoWindow.close());
  }
  render() {
    return this.containerElement ? ja(Nt.only(this.props.children), this.containerElement) : null;
  }
}
K(p1, "contextType", me);
function fc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Aa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? fc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : fc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var dc = {
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
}, pc = {
  draggable(t, e) {
    t.setDraggable(e);
  },
  editable(t, e) {
    t.setEditable(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  path(t, e) {
    t.setPath(e);
  },
  visible(t, e) {
    t.setVisible(e);
  }
}, h1 = {};
function v1(t) {
  var {
    options: e,
    draggable: r,
    editable: n,
    visible: a,
    path: i,
    onDblClick: s,
    onDragEnd: o,
    onDragStart: u,
    onMouseDown: l,
    onMouseMove: c,
    onMouseOut: d,
    onMouseOver: p,
    onMouseUp: m,
    onRightClick: h,
    onClick: v,
    onDrag: f,
    onLoad: D,
    onUnmount: b
  } = t, B = Se(me), [E, C] = k(null), [O, A] = k(null), [H, P] = k(null), [W, R] = k(null), [M, z] = k(null), [_, $] = k(null), [Y, V] = k(null), [ee, ie] = k(null), [j, G] = k(null), [J, U] = k(null), [ne, F] = k(null), [w, N] = k(null);
  return x(() => {
    E !== null && E.setMap(B);
  }, [B]), x(() => {
    typeof e < "u" && E !== null && E.setOptions(e);
  }, [E, e]), x(() => {
    typeof r < "u" && E !== null && E.setDraggable(r);
  }, [E, r]), x(() => {
    typeof n < "u" && E !== null && E.setEditable(n);
  }, [E, n]), x(() => {
    typeof a < "u" && E !== null && E.setVisible(a);
  }, [E, a]), x(() => {
    typeof i < "u" && E !== null && E.setPath(i);
  }, [E, i]), x(() => {
    E && s && (O !== null && google.maps.event.removeListener(O), A(google.maps.event.addListener(E, "dblclick", s)));
  }, [s]), x(() => {
    E && o && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(E, "dragend", o)));
  }, [o]), x(() => {
    E && u && (W !== null && google.maps.event.removeListener(W), R(google.maps.event.addListener(E, "dragstart", u)));
  }, [u]), x(() => {
    E && l && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(E, "mousedown", l)));
  }, [l]), x(() => {
    E && c && (_ !== null && google.maps.event.removeListener(_), $(google.maps.event.addListener(E, "mousemove", c)));
  }, [c]), x(() => {
    E && d && (Y !== null && google.maps.event.removeListener(Y), V(google.maps.event.addListener(E, "mouseout", d)));
  }, [d]), x(() => {
    E && p && (ee !== null && google.maps.event.removeListener(ee), ie(google.maps.event.addListener(E, "mouseover", p)));
  }, [p]), x(() => {
    E && m && (j !== null && google.maps.event.removeListener(j), G(google.maps.event.addListener(E, "mouseup", m)));
  }, [m]), x(() => {
    E && h && (J !== null && google.maps.event.removeListener(J), U(google.maps.event.addListener(E, "rightclick", h)));
  }, [h]), x(() => {
    E && v && (ne !== null && google.maps.event.removeListener(ne), F(google.maps.event.addListener(E, "click", v)));
  }, [v]), x(() => {
    E && f && (w !== null && google.maps.event.removeListener(w), N(google.maps.event.addListener(E, "drag", f)));
  }, [f]), x(() => {
    var T = new google.maps.Polyline(Aa(Aa({}, e || h1), {}, {
      map: B
    }));
    return i && T.setPath(i), typeof a < "u" && T.setVisible(a), typeof n < "u" && T.setEditable(n), typeof r < "u" && T.setDraggable(r), s && A(google.maps.event.addListener(T, "dblclick", s)), o && P(google.maps.event.addListener(T, "dragend", o)), u && R(google.maps.event.addListener(T, "dragstart", u)), l && z(google.maps.event.addListener(T, "mousedown", l)), c && $(google.maps.event.addListener(T, "mousemove", c)), d && V(google.maps.event.addListener(T, "mouseout", d)), p && ie(google.maps.event.addListener(T, "mouseover", p)), m && G(google.maps.event.addListener(T, "mouseup", m)), h && U(google.maps.event.addListener(T, "rightclick", h)), v && F(google.maps.event.addListener(T, "click", v)), f && N(google.maps.event.addListener(T, "drag", f)), C(T), D && D(T), () => {
      O !== null && google.maps.event.removeListener(O), H !== null && google.maps.event.removeListener(H), W !== null && google.maps.event.removeListener(W), M !== null && google.maps.event.removeListener(M), _ !== null && google.maps.event.removeListener(_), Y !== null && google.maps.event.removeListener(Y), ee !== null && google.maps.event.removeListener(ee), j !== null && google.maps.event.removeListener(j), J !== null && google.maps.event.removeListener(J), ne !== null && google.maps.event.removeListener(ne), b && b(T), T.setMap(null);
    };
  }, []), null;
}
Xe(v1);
class g1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      polyline: null
    }), K(this, "setPolylineCallback", () => {
      this.state.polyline !== null && this.props.onLoad && this.props.onLoad(this.state.polyline);
    });
  }
  componentDidMount() {
    var e = new google.maps.Polyline(Aa(Aa({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: pc,
      eventMap: dc,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        polyline: e
      };
    }, this.setPolylineCallback);
  }
  componentDidUpdate(e) {
    this.state.polyline !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: pc,
      eventMap: dc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.polyline
    }));
  }
  componentWillUnmount() {
    this.state.polyline !== null && (this.props.onUnmount && this.props.onUnmount(this.state.polyline), be(this.registeredEvents), this.state.polyline.setMap(null));
  }
  render() {
    return null;
  }
}
K(g1, "contextType", me);
function hc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function vc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? hc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : hc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var gc = {
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
}, mc = {
  draggable(t, e) {
    t.setDraggable(e);
  },
  editable(t, e) {
    t.setEditable(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  path(t, e) {
    t.setPath(e);
  },
  paths(t, e) {
    t.setPaths(e);
  },
  visible(t, e) {
    t.setVisible(e);
  }
};
function m1(t) {
  var {
    options: e,
    draggable: r,
    editable: n,
    visible: a,
    path: i,
    paths: s,
    onDblClick: o,
    onDragEnd: u,
    onDragStart: l,
    onMouseDown: c,
    onMouseMove: d,
    onMouseOut: p,
    onMouseOver: m,
    onMouseUp: h,
    onRightClick: v,
    onClick: f,
    onDrag: D,
    onLoad: b,
    onUnmount: B,
    onEdit: E
  } = t, C = Se(me), [O, A] = k(null), [H, P] = k(null), [W, R] = k(null), [M, z] = k(null), [_, $] = k(null), [Y, V] = k(null), [ee, ie] = k(null), [j, G] = k(null), [J, U] = k(null), [ne, F] = k(null), [w, N] = k(null), [T, I] = k(null);
  return x(() => {
    O !== null && O.setMap(C);
  }, [C]), x(() => {
    typeof e < "u" && O !== null && O.setOptions(e);
  }, [O, e]), x(() => {
    typeof r < "u" && O !== null && O.setDraggable(r);
  }, [O, r]), x(() => {
    typeof n < "u" && O !== null && O.setEditable(n);
  }, [O, n]), x(() => {
    typeof a < "u" && O !== null && O.setVisible(a);
  }, [O, a]), x(() => {
    typeof i < "u" && O !== null && O.setPath(i);
  }, [O, i]), x(() => {
    typeof s < "u" && O !== null && O.setPaths(s);
  }, [O, s]), x(() => {
    O && typeof o == "function" && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(O, "dblclick", o)));
  }, [o]), x(() => {
    O && (google.maps.event.addListener(O.getPath(), "insert_at", () => {
      E == null || E(O);
    }), google.maps.event.addListener(O.getPath(), "set_at", () => {
      E == null || E(O);
    }), google.maps.event.addListener(O.getPath(), "remove_at", () => {
      E == null || E(O);
    }));
  }, [O, E]), x(() => {
    O && typeof u == "function" && (W !== null && google.maps.event.removeListener(W), R(google.maps.event.addListener(O, "dragend", u)));
  }, [u]), x(() => {
    O && typeof l == "function" && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(O, "dragstart", l)));
  }, [l]), x(() => {
    O && typeof c == "function" && (_ !== null && google.maps.event.removeListener(_), $(google.maps.event.addListener(O, "mousedown", c)));
  }, [c]), x(() => {
    O && typeof d == "function" && (Y !== null && google.maps.event.removeListener(Y), V(google.maps.event.addListener(O, "mousemove", d)));
  }, [d]), x(() => {
    O && typeof p == "function" && (ee !== null && google.maps.event.removeListener(ee), ie(google.maps.event.addListener(O, "mouseout", p)));
  }, [p]), x(() => {
    O && typeof m == "function" && (j !== null && google.maps.event.removeListener(j), G(google.maps.event.addListener(O, "mouseover", m)));
  }, [m]), x(() => {
    O && typeof h == "function" && (J !== null && google.maps.event.removeListener(J), U(google.maps.event.addListener(O, "mouseup", h)));
  }, [h]), x(() => {
    O && typeof v == "function" && (ne !== null && google.maps.event.removeListener(ne), F(google.maps.event.addListener(O, "rightclick", v)));
  }, [v]), x(() => {
    O && typeof f == "function" && (w !== null && google.maps.event.removeListener(w), N(google.maps.event.addListener(O, "click", f)));
  }, [f]), x(() => {
    O && typeof D == "function" && (T !== null && google.maps.event.removeListener(T), I(google.maps.event.addListener(O, "drag", D)));
  }, [D]), x(() => {
    var Z = new google.maps.Polygon(vc(vc({}, e), {}, {
      map: C
    }));
    return i && Z.setPath(i), s && Z.setPaths(s), typeof a < "u" && Z.setVisible(a), typeof n < "u" && Z.setEditable(n), typeof r < "u" && Z.setDraggable(r), o && P(google.maps.event.addListener(Z, "dblclick", o)), u && R(google.maps.event.addListener(Z, "dragend", u)), l && z(google.maps.event.addListener(Z, "dragstart", l)), c && $(google.maps.event.addListener(Z, "mousedown", c)), d && V(google.maps.event.addListener(Z, "mousemove", d)), p && ie(google.maps.event.addListener(Z, "mouseout", p)), m && G(google.maps.event.addListener(Z, "mouseover", m)), h && U(google.maps.event.addListener(Z, "mouseup", h)), v && F(google.maps.event.addListener(Z, "rightclick", v)), f && N(google.maps.event.addListener(Z, "click", f)), D && I(google.maps.event.addListener(Z, "drag", D)), A(Z), b && b(Z), () => {
      H !== null && google.maps.event.removeListener(H), W !== null && google.maps.event.removeListener(W), M !== null && google.maps.event.removeListener(M), _ !== null && google.maps.event.removeListener(_), Y !== null && google.maps.event.removeListener(Y), ee !== null && google.maps.event.removeListener(ee), j !== null && google.maps.event.removeListener(j), J !== null && google.maps.event.removeListener(J), ne !== null && google.maps.event.removeListener(ne), w !== null && google.maps.event.removeListener(w), B && B(Z), Z.setMap(null);
    };
  }, []), null;
}
Xe(m1);
class y1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []);
  }
  componentDidMount() {
    var e = this.props.options || {};
    this.polygon = new google.maps.Polygon(e), this.polygon.setMap(this.context), this.registeredEvents = Ce({
      updaterMap: mc,
      eventMap: gc,
      prevProps: {},
      nextProps: this.props,
      instance: this.polygon
    }), this.props.onLoad && this.props.onLoad(this.polygon);
  }
  componentDidUpdate(e) {
    this.polygon && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: mc,
      eventMap: gc,
      prevProps: e,
      nextProps: this.props,
      instance: this.polygon
    }));
  }
  componentWillUnmount() {
    this.polygon && (this.props.onUnmount && this.props.onUnmount(this.polygon), be(this.registeredEvents), this.polygon && this.polygon.setMap(null));
  }
  render() {
    return null;
  }
}
K(y1, "contextType", me);
function yc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Sa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? yc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : yc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Cc = {
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
}, Dc = {
  bounds(t, e) {
    t.setBounds(e);
  },
  draggable(t, e) {
    t.setDraggable(e);
  },
  editable(t, e) {
    t.setEditable(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  visible(t, e) {
    t.setVisible(e);
  }
};
function C1(t) {
  var {
    options: e,
    bounds: r,
    draggable: n,
    editable: a,
    visible: i,
    onDblClick: s,
    onDragEnd: o,
    onDragStart: u,
    onMouseDown: l,
    onMouseMove: c,
    onMouseOut: d,
    onMouseOver: p,
    onMouseUp: m,
    onRightClick: h,
    onClick: v,
    onDrag: f,
    onBoundsChanged: D,
    onLoad: b,
    onUnmount: B
  } = t, E = Se(me), [C, O] = k(null), [A, H] = k(null), [P, W] = k(null), [R, M] = k(null), [z, _] = k(null), [$, Y] = k(null), [V, ee] = k(null), [ie, j] = k(null), [G, J] = k(null), [U, ne] = k(null), [F, w] = k(null), [N, T] = k(null), [I, Z] = k(null);
  return x(() => {
    C !== null && C.setMap(E);
  }, [E]), x(() => {
    typeof e < "u" && C !== null && C.setOptions(e);
  }, [C, e]), x(() => {
    typeof n < "u" && C !== null && C.setDraggable(n);
  }, [C, n]), x(() => {
    typeof a < "u" && C !== null && C.setEditable(a);
  }, [C, a]), x(() => {
    typeof i < "u" && C !== null && C.setVisible(i);
  }, [C, i]), x(() => {
    typeof r < "u" && C !== null && C.setBounds(r);
  }, [C, r]), x(() => {
    C && s && (A !== null && google.maps.event.removeListener(A), H(google.maps.event.addListener(C, "dblclick", s)));
  }, [s]), x(() => {
    C && o && (P !== null && google.maps.event.removeListener(P), W(google.maps.event.addListener(C, "dragend", o)));
  }, [o]), x(() => {
    C && u && (R !== null && google.maps.event.removeListener(R), M(google.maps.event.addListener(C, "dragstart", u)));
  }, [u]), x(() => {
    C && l && (z !== null && google.maps.event.removeListener(z), _(google.maps.event.addListener(C, "mousedown", l)));
  }, [l]), x(() => {
    C && c && ($ !== null && google.maps.event.removeListener($), Y(google.maps.event.addListener(C, "mousemove", c)));
  }, [c]), x(() => {
    C && d && (V !== null && google.maps.event.removeListener(V), ee(google.maps.event.addListener(C, "mouseout", d)));
  }, [d]), x(() => {
    C && p && (ie !== null && google.maps.event.removeListener(ie), j(google.maps.event.addListener(C, "mouseover", p)));
  }, [p]), x(() => {
    C && m && (G !== null && google.maps.event.removeListener(G), J(google.maps.event.addListener(C, "mouseup", m)));
  }, [m]), x(() => {
    C && h && (U !== null && google.maps.event.removeListener(U), ne(google.maps.event.addListener(C, "rightclick", h)));
  }, [h]), x(() => {
    C && v && (F !== null && google.maps.event.removeListener(F), w(google.maps.event.addListener(C, "click", v)));
  }, [v]), x(() => {
    C && f && (N !== null && google.maps.event.removeListener(N), T(google.maps.event.addListener(C, "drag", f)));
  }, [f]), x(() => {
    C && D && (I !== null && google.maps.event.removeListener(I), Z(google.maps.event.addListener(C, "bounds_changed", D)));
  }, [D]), x(() => {
    var te = new google.maps.Rectangle(Sa(Sa({}, e), {}, {
      map: E
    }));
    return typeof i < "u" && te.setVisible(i), typeof a < "u" && te.setEditable(a), typeof n < "u" && te.setDraggable(n), typeof r < "u" && te.setBounds(r), s && H(google.maps.event.addListener(te, "dblclick", s)), o && W(google.maps.event.addListener(te, "dragend", o)), u && M(google.maps.event.addListener(te, "dragstart", u)), l && _(google.maps.event.addListener(te, "mousedown", l)), c && Y(google.maps.event.addListener(te, "mousemove", c)), d && ee(google.maps.event.addListener(te, "mouseout", d)), p && j(google.maps.event.addListener(te, "mouseover", p)), m && J(google.maps.event.addListener(te, "mouseup", m)), h && ne(google.maps.event.addListener(te, "rightclick", h)), v && w(google.maps.event.addListener(te, "click", v)), f && T(google.maps.event.addListener(te, "drag", f)), D && Z(google.maps.event.addListener(te, "bounds_changed", D)), O(te), b && b(te), () => {
      A !== null && google.maps.event.removeListener(A), P !== null && google.maps.event.removeListener(P), R !== null && google.maps.event.removeListener(R), z !== null && google.maps.event.removeListener(z), $ !== null && google.maps.event.removeListener($), V !== null && google.maps.event.removeListener(V), ie !== null && google.maps.event.removeListener(ie), G !== null && google.maps.event.removeListener(G), U !== null && google.maps.event.removeListener(U), F !== null && google.maps.event.removeListener(F), N !== null && google.maps.event.removeListener(N), I !== null && google.maps.event.removeListener(I), B && B(te), te.setMap(null);
    };
  }, []), null;
}
Xe(C1);
class D1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      rectangle: null
    }), K(this, "setRectangleCallback", () => {
      this.state.rectangle !== null && this.props.onLoad && this.props.onLoad(this.state.rectangle);
    });
  }
  componentDidMount() {
    var e = new google.maps.Rectangle(Sa(Sa({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: Dc,
      eventMap: Cc,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        rectangle: e
      };
    }, this.setRectangleCallback);
  }
  componentDidUpdate(e) {
    this.state.rectangle !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Dc,
      eventMap: Cc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.rectangle
    }));
  }
  componentWillUnmount() {
    this.state.rectangle !== null && (this.props.onUnmount && this.props.onUnmount(this.state.rectangle), be(this.registeredEvents), this.state.rectangle.setMap(null));
  }
  render() {
    return null;
  }
}
K(D1, "contextType", me);
function bc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Pa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? bc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : bc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Ec = {
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
}, wc = {
  center(t, e) {
    t.setCenter(e);
  },
  draggable(t, e) {
    t.setDraggable(e);
  },
  editable(t, e) {
    t.setEditable(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  radius(t, e) {
    t.setRadius(e);
  },
  visible(t, e) {
    t.setVisible(e);
  }
}, b1 = {};
function E1(t) {
  var {
    options: e,
    center: r,
    radius: n,
    draggable: a,
    editable: i,
    visible: s,
    onDblClick: o,
    onDragEnd: u,
    onDragStart: l,
    onMouseDown: c,
    onMouseMove: d,
    onMouseOut: p,
    onMouseOver: m,
    onMouseUp: h,
    onRightClick: v,
    onClick: f,
    onDrag: D,
    onCenterChanged: b,
    onRadiusChanged: B,
    onLoad: E,
    onUnmount: C
  } = t, O = Se(me), [A, H] = k(null), [P, W] = k(null), [R, M] = k(null), [z, _] = k(null), [$, Y] = k(null), [V, ee] = k(null), [ie, j] = k(null), [G, J] = k(null), [U, ne] = k(null), [F, w] = k(null), [N, T] = k(null), [I, Z] = k(null), [te, Q] = k(null), [pe, fe] = k(null);
  return x(() => {
    A !== null && A.setMap(O);
  }, [O]), x(() => {
    typeof e < "u" && A !== null && A.setOptions(e);
  }, [A, e]), x(() => {
    typeof a < "u" && A !== null && A.setDraggable(a);
  }, [A, a]), x(() => {
    typeof i < "u" && A !== null && A.setEditable(i);
  }, [A, i]), x(() => {
    typeof s < "u" && A !== null && A.setVisible(s);
  }, [A, s]), x(() => {
    typeof n == "number" && A !== null && A.setRadius(n);
  }, [A, n]), x(() => {
    typeof r < "u" && A !== null && A.setCenter(r);
  }, [A, r]), x(() => {
    A && o && (P !== null && google.maps.event.removeListener(P), W(google.maps.event.addListener(A, "dblclick", o)));
  }, [o]), x(() => {
    A && u && (R !== null && google.maps.event.removeListener(R), M(google.maps.event.addListener(A, "dragend", u)));
  }, [u]), x(() => {
    A && l && (z !== null && google.maps.event.removeListener(z), _(google.maps.event.addListener(A, "dragstart", l)));
  }, [l]), x(() => {
    A && c && ($ !== null && google.maps.event.removeListener($), Y(google.maps.event.addListener(A, "mousedown", c)));
  }, [c]), x(() => {
    A && d && (V !== null && google.maps.event.removeListener(V), ee(google.maps.event.addListener(A, "mousemove", d)));
  }, [d]), x(() => {
    A && p && (ie !== null && google.maps.event.removeListener(ie), j(google.maps.event.addListener(A, "mouseout", p)));
  }, [p]), x(() => {
    A && m && (G !== null && google.maps.event.removeListener(G), J(google.maps.event.addListener(A, "mouseover", m)));
  }, [m]), x(() => {
    A && h && (U !== null && google.maps.event.removeListener(U), ne(google.maps.event.addListener(A, "mouseup", h)));
  }, [h]), x(() => {
    A && v && (F !== null && google.maps.event.removeListener(F), w(google.maps.event.addListener(A, "rightclick", v)));
  }, [v]), x(() => {
    A && f && (N !== null && google.maps.event.removeListener(N), T(google.maps.event.addListener(A, "click", f)));
  }, [f]), x(() => {
    A && D && (I !== null && google.maps.event.removeListener(I), Z(google.maps.event.addListener(A, "drag", D)));
  }, [D]), x(() => {
    A && b && (te !== null && google.maps.event.removeListener(te), Q(google.maps.event.addListener(A, "center_changed", b)));
  }, [f]), x(() => {
    A && B && (pe !== null && google.maps.event.removeListener(pe), fe(google.maps.event.addListener(A, "radius_changed", B)));
  }, [B]), x(() => {
    var ce = new google.maps.Circle(Pa(Pa({}, e || b1), {}, {
      map: O
    }));
    return typeof n == "number" && ce.setRadius(n), typeof r < "u" && ce.setCenter(r), typeof n == "number" && ce.setRadius(n), typeof s < "u" && ce.setVisible(s), typeof i < "u" && ce.setEditable(i), typeof a < "u" && ce.setDraggable(a), o && W(google.maps.event.addListener(ce, "dblclick", o)), u && M(google.maps.event.addListener(ce, "dragend", u)), l && _(google.maps.event.addListener(ce, "dragstart", l)), c && Y(google.maps.event.addListener(ce, "mousedown", c)), d && ee(google.maps.event.addListener(ce, "mousemove", d)), p && j(google.maps.event.addListener(ce, "mouseout", p)), m && J(google.maps.event.addListener(ce, "mouseover", m)), h && ne(google.maps.event.addListener(ce, "mouseup", h)), v && w(google.maps.event.addListener(ce, "rightclick", v)), f && T(google.maps.event.addListener(ce, "click", f)), D && Z(google.maps.event.addListener(ce, "drag", D)), b && Q(google.maps.event.addListener(ce, "center_changed", b)), B && fe(google.maps.event.addListener(ce, "radius_changed", B)), H(ce), E && E(ce), () => {
      P !== null && google.maps.event.removeListener(P), R !== null && google.maps.event.removeListener(R), z !== null && google.maps.event.removeListener(z), $ !== null && google.maps.event.removeListener($), V !== null && google.maps.event.removeListener(V), ie !== null && google.maps.event.removeListener(ie), G !== null && google.maps.event.removeListener(G), U !== null && google.maps.event.removeListener(U), F !== null && google.maps.event.removeListener(F), N !== null && google.maps.event.removeListener(N), te !== null && google.maps.event.removeListener(te), pe !== null && google.maps.event.removeListener(pe), C && C(ce), ce.setMap(null);
    };
  }, []), null;
}
Xe(E1);
class w1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      circle: null
    }), K(this, "setCircleCallback", () => {
      this.state.circle !== null && this.props.onLoad && this.props.onLoad(this.state.circle);
    });
  }
  componentDidMount() {
    var e = new google.maps.Circle(Pa(Pa({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: wc,
      eventMap: Ec,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        circle: e
      };
    }, this.setCircleCallback);
  }
  componentDidUpdate(e) {
    this.state.circle !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: wc,
      eventMap: Ec,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.circle
    }));
  }
  componentWillUnmount() {
    if (this.state.circle !== null) {
      var e;
      this.props.onUnmount && this.props.onUnmount(this.state.circle), be(this.registeredEvents), (e = this.state.circle) === null || e === void 0 || e.setMap(null);
    }
  }
  render() {
    return null;
  }
}
K(w1, "contextType", me);
function Oc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Fa(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Oc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Oc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var xc = {
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
}, Bc = {
  add(t, e) {
    t.add(e);
  },
  addgeojson(t, e, r) {
    t.addGeoJson(e, r);
  },
  contains(t, e) {
    t.contains(e);
  },
  foreach(t, e) {
    t.forEach(e);
  },
  loadgeojson(t, e, r, n) {
    t.loadGeoJson(e, r, n);
  },
  overridestyle(t, e, r) {
    t.overrideStyle(e, r);
  },
  remove(t, e) {
    t.remove(e);
  },
  revertstyle(t, e) {
    t.revertStyle(e);
  },
  controlposition(t, e) {
    t.setControlPosition(e);
  },
  controls(t, e) {
    t.setControls(e);
  },
  drawingmode(t, e) {
    t.setDrawingMode(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  style(t, e) {
    t.setStyle(e);
  },
  togeojson(t, e) {
    t.toGeoJson(e);
  }
};
function O1(t) {
  var {
    options: e,
    onClick: r,
    onDblClick: n,
    onMouseDown: a,
    onMouseMove: i,
    onMouseOut: s,
    onMouseOver: o,
    onMouseUp: u,
    onRightClick: l,
    onAddFeature: c,
    onRemoveFeature: d,
    onRemoveProperty: p,
    onSetGeometry: m,
    onSetProperty: h,
    onLoad: v,
    onUnmount: f
  } = t, D = Se(me), [b, B] = k(null), [E, C] = k(null), [O, A] = k(null), [H, P] = k(null), [W, R] = k(null), [M, z] = k(null), [_, $] = k(null), [Y, V] = k(null), [ee, ie] = k(null), [j, G] = k(null), [J, U] = k(null), [ne, F] = k(null), [w, N] = k(null), [T, I] = k(null);
  return x(() => {
    b !== null && b.setMap(D);
  }, [D]), x(() => {
    b && n && (E !== null && google.maps.event.removeListener(E), C(google.maps.event.addListener(b, "dblclick", n)));
  }, [n]), x(() => {
    b && a && (O !== null && google.maps.event.removeListener(O), A(google.maps.event.addListener(b, "mousedown", a)));
  }, [a]), x(() => {
    b && i && (H !== null && google.maps.event.removeListener(H), P(google.maps.event.addListener(b, "mousemove", i)));
  }, [i]), x(() => {
    b && s && (W !== null && google.maps.event.removeListener(W), R(google.maps.event.addListener(b, "mouseout", s)));
  }, [s]), x(() => {
    b && o && (M !== null && google.maps.event.removeListener(M), z(google.maps.event.addListener(b, "mouseover", o)));
  }, [o]), x(() => {
    b && u && (_ !== null && google.maps.event.removeListener(_), $(google.maps.event.addListener(b, "mouseup", u)));
  }, [u]), x(() => {
    b && l && (Y !== null && google.maps.event.removeListener(Y), V(google.maps.event.addListener(b, "rightclick", l)));
  }, [l]), x(() => {
    b && r && (ee !== null && google.maps.event.removeListener(ee), ie(google.maps.event.addListener(b, "click", r)));
  }, [r]), x(() => {
    b && c && (j !== null && google.maps.event.removeListener(j), G(google.maps.event.addListener(b, "addfeature", c)));
  }, [c]), x(() => {
    b && d && (J !== null && google.maps.event.removeListener(J), U(google.maps.event.addListener(b, "removefeature", d)));
  }, [d]), x(() => {
    b && p && (ne !== null && google.maps.event.removeListener(ne), F(google.maps.event.addListener(b, "removeproperty", p)));
  }, [p]), x(() => {
    b && m && (w !== null && google.maps.event.removeListener(w), N(google.maps.event.addListener(b, "setgeometry", m)));
  }, [m]), x(() => {
    b && h && (T !== null && google.maps.event.removeListener(T), I(google.maps.event.addListener(b, "setproperty", h)));
  }, [h]), x(() => {
    if (D !== null) {
      var Z = new google.maps.Data(Fa(Fa({}, e), {}, {
        map: D
      }));
      n && C(google.maps.event.addListener(Z, "dblclick", n)), a && A(google.maps.event.addListener(Z, "mousedown", a)), i && P(google.maps.event.addListener(Z, "mousemove", i)), s && R(google.maps.event.addListener(Z, "mouseout", s)), o && z(google.maps.event.addListener(Z, "mouseover", o)), u && $(google.maps.event.addListener(Z, "mouseup", u)), l && V(google.maps.event.addListener(Z, "rightclick", l)), r && ie(google.maps.event.addListener(Z, "click", r)), c && G(google.maps.event.addListener(Z, "addfeature", c)), d && U(google.maps.event.addListener(Z, "removefeature", d)), p && F(google.maps.event.addListener(Z, "removeproperty", p)), m && N(google.maps.event.addListener(Z, "setgeometry", m)), h && I(google.maps.event.addListener(Z, "setproperty", h)), B(Z), v && v(Z);
    }
    return () => {
      b && (E !== null && google.maps.event.removeListener(E), O !== null && google.maps.event.removeListener(O), H !== null && google.maps.event.removeListener(H), W !== null && google.maps.event.removeListener(W), M !== null && google.maps.event.removeListener(M), _ !== null && google.maps.event.removeListener(_), Y !== null && google.maps.event.removeListener(Y), ee !== null && google.maps.event.removeListener(ee), j !== null && google.maps.event.removeListener(j), J !== null && google.maps.event.removeListener(J), ne !== null && google.maps.event.removeListener(ne), w !== null && google.maps.event.removeListener(w), T !== null && google.maps.event.removeListener(T), f && f(b), b.setMap(null));
    };
  }, []), null;
}
Xe(O1);
class x1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      data: null
    }), K(this, "setDataCallback", () => {
      this.state.data !== null && this.props.onLoad && this.props.onLoad(this.state.data);
    });
  }
  componentDidMount() {
    if (this.context !== null) {
      var e = new google.maps.Data(Fa(Fa({}, this.props.options), {}, {
        map: this.context
      }));
      this.registeredEvents = Ce({
        updaterMap: Bc,
        eventMap: xc,
        prevProps: {},
        nextProps: this.props,
        instance: e
      }), this.setState(() => ({
        data: e
      }), this.setDataCallback);
    }
  }
  componentDidUpdate(e) {
    this.state.data !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Bc,
      eventMap: xc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.data
    }));
  }
  componentWillUnmount() {
    this.state.data !== null && (this.props.onUnmount && this.props.onUnmount(this.state.data), be(this.registeredEvents), this.state.data && this.state.data.setMap(null));
  }
  render() {
    return null;
  }
}
K(x1, "contextType", me);
function Lc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ac(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Lc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Lc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Sc = {
  onClick: "click",
  onDefaultViewportChanged: "defaultviewport_changed",
  onStatusChanged: "status_changed"
}, Pc = {
  options(t, e) {
    t.setOptions(e);
  },
  url(t, e) {
    t.setUrl(e);
  },
  zIndex(t, e) {
    t.setZIndex(e);
  }
};
class B1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      kmlLayer: null
    }), K(this, "setKmlLayerCallback", () => {
      this.state.kmlLayer !== null && this.props.onLoad && this.props.onLoad(this.state.kmlLayer);
    });
  }
  componentDidMount() {
    var e = new google.maps.KmlLayer(Ac(Ac({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: Pc,
      eventMap: Sc,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        kmlLayer: e
      };
    }, this.setKmlLayerCallback);
  }
  componentDidUpdate(e) {
    this.state.kmlLayer !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Pc,
      eventMap: Sc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.kmlLayer
    }));
  }
  componentWillUnmount() {
    this.state.kmlLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.kmlLayer), be(this.registeredEvents), this.state.kmlLayer.setMap(null));
  }
  render() {
    return null;
  }
}
K(B1, "contextType", me);
function Ep(t, e) {
  return typeof e == "function" ? e(t.offsetWidth, t.offsetHeight) : {
    x: 0,
    y: 0
  };
}
function L1(t, e) {
  return new e(t.lat, t.lng);
}
function A1(t, e) {
  return new e(new google.maps.LatLng(t.ne.lat, t.ne.lng), new google.maps.LatLng(t.sw.lat, t.sw.lng));
}
function S1(t, e, r) {
  return t instanceof e ? t : r(t, e);
}
function P1(t, e, r) {
  return t instanceof e ? t : r(t, e);
}
function F1(t, e, r) {
  var n = t && t.fromLatLngToDivPixel(r.getNorthEast()), a = t && t.fromLatLngToDivPixel(r.getSouthWest());
  return n && a ? {
    left: "".concat(a.x + e.x, "px"),
    top: "".concat(n.y + e.y, "px"),
    width: "".concat(n.x - a.x - e.x, "px"),
    height: "".concat(a.y - n.y - e.y, "px")
  } : {
    left: "-9999px",
    top: "-9999px"
  };
}
function T1(t, e, r) {
  var n = t && t.fromLatLngToDivPixel(r);
  if (n) {
    var {
      x: a,
      y: i
    } = n;
    return {
      left: "".concat(a + e.x, "px"),
      top: "".concat(i + e.y, "px")
    };
  }
  return {
    left: "-9999px",
    top: "-9999px"
  };
}
function wp(t, e, r, n) {
  return r !== void 0 ? F1(t, e, P1(r, google.maps.LatLngBounds, A1)) : T1(t, e, S1(n, google.maps.LatLng, L1));
}
function M1(t, e) {
  return t.left === e.left && t.top === e.top && t.width === e.height && t.height === e.height;
}
function Fc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function k1(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Fc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function j1(t, e, r, n, a) {
  class i extends google.maps.OverlayView {
    constructor(o, u, l, c) {
      super(), this.container = o, this.pane = u, this.position = l, this.bounds = c;
    }
    onAdd() {
      var o, u = (o = this.getPanes()) === null || o === void 0 ? void 0 : o[this.pane];
      u == null || u.appendChild(this.container);
    }
    draw() {
      var o = this.getProjection(), u = k1({}, this.container ? Ep(this.container, a) : {
        x: 0,
        y: 0
      }), l = wp(o, u, this.bounds, this.position);
      for (var [c, d] of Object.entries(l))
        this.container.style[c] = d;
    }
    onRemove() {
      this.container.parentNode !== null && this.container.parentNode.removeChild(this.container);
    }
  }
  return new i(t, e, r, n);
}
function Tc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function R1(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Tc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Tc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function Mc(t) {
  if (!t)
    return "";
  var e = t instanceof google.maps.LatLng ? t : new google.maps.LatLng(t.lat, t.lng);
  return e + "";
}
function kc(t) {
  if (!t)
    return "";
  var e = t instanceof google.maps.LatLngBounds ? t : new google.maps.LatLngBounds(new google.maps.LatLng(t.south, t.east), new google.maps.LatLng(t.north, t.west));
  return e + "";
}
function I1(t) {
  var {
    position: e,
    bounds: r,
    mapPaneName: n,
    zIndex: a,
    onLoad: i,
    onUnmount: s,
    getPixelPositionOffset: o,
    children: u
  } = t, l = Se(me), c = Ut(() => {
    var p = document.createElement("div");
    return p.style.position = "absolute", p;
  }, []), d = Ut(() => j1(c, n, e, r, o), [c, n, e, r]);
  return x(() => (i == null || i(d), d == null || d.setMap(l), () => {
    s == null || s(d), d == null || d.setMap(null);
  }), [l, d]), x(() => {
    c.style.zIndex = "".concat(a);
  }, [a, c]), lf.createPortal(u, c);
}
Xe(I1);
class Xr extends He {
  constructor(e) {
    super(e), K(this, "state", {
      paneEl: null,
      containerStyle: {
        // set initial position
        position: "absolute"
      }
    }), K(this, "updatePane", () => {
      var n = this.props.mapPaneName, a = this.overlayView.getPanes();
      et(!!n, "OverlayView requires props.mapPaneName but got %s", n), a ? this.setState({
        paneEl: a[n]
      }) : this.setState({
        paneEl: null
      });
    }), K(this, "onAdd", () => {
      var n, a;
      this.updatePane(), (n = (a = this.props).onLoad) === null || n === void 0 || n.call(a, this.overlayView);
    }), K(this, "onPositionElement", () => {
      var n = this.overlayView.getProjection(), a = R1({
        x: 0,
        y: 0
      }, this.containerRef.current ? Ep(this.containerRef.current, this.props.getPixelPositionOffset) : {}), i = wp(n, a, this.props.bounds, this.props.position);
      if (!M1(i, {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        left: this.state.containerStyle.left,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        top: this.state.containerStyle.top,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        width: this.state.containerStyle.width,
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        height: this.state.containerStyle.height
      })) {
        var s, o, u, l;
        this.setState({
          containerStyle: {
            top: (s = i.top) !== null && s !== void 0 ? s : 0,
            left: (o = i.left) !== null && o !== void 0 ? o : 0,
            width: (u = i.width) !== null && u !== void 0 ? u : 0,
            height: (l = i.height) !== null && l !== void 0 ? l : 0,
            position: "absolute"
          }
        });
      }
    }), K(this, "draw", () => {
      this.onPositionElement();
    }), K(this, "onRemove", () => {
      var n, a;
      this.setState(() => ({
        paneEl: null
      })), (n = (a = this.props).onUnmount) === null || n === void 0 || n.call(a, this.overlayView);
    }), this.containerRef = ka();
    var r = new google.maps.OverlayView();
    r.onAdd = this.onAdd, r.draw = this.draw, r.onRemove = this.onRemove, this.overlayView = r;
  }
  componentDidMount() {
    this.overlayView.setMap(this.context);
  }
  componentDidUpdate(e) {
    var r = Mc(e.position), n = Mc(this.props.position), a = kc(e.bounds), i = kc(this.props.bounds);
    (r !== n || a !== i) && this.overlayView.draw(), e.mapPaneName !== this.props.mapPaneName && this.updatePane();
  }
  componentWillUnmount() {
    this.overlayView.setMap(null);
  }
  render() {
    var e = this.state.paneEl;
    return e ? lf.createPortal(y.jsx("div", {
      ref: this.containerRef,
      style: this.state.containerStyle,
      children: Nt.only(this.props.children)
    }), e) : null;
  }
}
K(Xr, "FLOAT_PANE", "floatPane");
K(Xr, "MAP_PANE", "mapPane");
K(Xr, "MARKER_LAYER", "markerLayer");
K(Xr, "OVERLAY_LAYER", "overlayLayer");
K(Xr, "OVERLAY_MOUSE_TARGET", "overlayMouseTarget");
K(Xr, "contextType", me);
function N1() {
}
function jc(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Rc(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? jc(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : jc(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var Ic = {
  onDblClick: "dblclick",
  onClick: "click"
}, Nc = {
  opacity(t, e) {
    t.setOpacity(e);
  }
};
function _1(t) {
  var {
    url: e,
    bounds: r,
    options: n,
    visible: a
  } = t, i = Se(me), s = new google.maps.LatLngBounds(new google.maps.LatLng(r.south, r.west), new google.maps.LatLng(r.north, r.east)), o = Ut(() => new google.maps.GroundOverlay(e, s, n), []);
  return x(() => {
    o !== null && o.setMap(i);
  }, [i]), x(() => {
    typeof e < "u" && o !== null && (o.set("url", e), o.setMap(i));
  }, [o, e]), x(() => {
    typeof a < "u" && o !== null && o.setOpacity(a ? 1 : 0);
  }, [o, a]), x(() => {
    var u = new google.maps.LatLngBounds(new google.maps.LatLng(r.south, r.west), new google.maps.LatLng(r.north, r.east));
    typeof r < "u" && o !== null && (o.set("bounds", u), o.setMap(i));
  }, [o, r]), null;
}
Xe(_1);
class Op extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      groundOverlay: null
    }), K(this, "setGroundOverlayCallback", () => {
      this.state.groundOverlay !== null && this.props.onLoad && this.props.onLoad(this.state.groundOverlay);
    });
  }
  componentDidMount() {
    et(!!this.props.url || !!this.props.bounds, "For GroundOverlay, url and bounds are passed in to constructor and are immutable after instantiated. This is the behavior of Google Maps JavaScript API v3 ( See https://developers.google.com/maps/documentation/javascript/reference#GroundOverlay) Hence, use the corresponding two props provided by `react-google-maps-api`, url and bounds. In some cases, you'll need the GroundOverlay component to reflect the changes of url and bounds. You can leverage the React's key property to remount the component. Typically, just `key={url}` would serve your need. See https://github.com/tomchentw/react-google-maps/issues/655");
    var e = new google.maps.GroundOverlay(this.props.url, this.props.bounds, Rc(Rc({}, this.props.options), {}, {
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: Nc,
      eventMap: Ic,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        groundOverlay: e
      };
    }, this.setGroundOverlayCallback);
  }
  componentDidUpdate(e) {
    this.state.groundOverlay !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Nc,
      eventMap: Ic,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.groundOverlay
    }));
  }
  componentWillUnmount() {
    this.state.groundOverlay && (this.props.onUnmount && this.props.onUnmount(this.state.groundOverlay), this.state.groundOverlay.setMap(null));
  }
  render() {
    return null;
  }
}
K(Op, "defaultProps", {
  onLoad: N1
});
K(Op, "contextType", me);
function _c(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(a) {
      return Object.getOwnPropertyDescriptor(t, a).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function Ta(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? _c(Object(r), !0).forEach(function(n) {
      K(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : _c(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
var $c = {}, zc = {
  data(t, e) {
    t.setData(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  options(t, e) {
    t.setOptions(e);
  }
};
function $1(t) {
  var {
    data: e,
    onLoad: r,
    onUnmount: n,
    options: a
  } = t, i = Se(me), [s, o] = k(null);
  return x(() => {
    google.maps.visualization || et(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} in useJsApiScript? %s', google.maps.visualization);
  }, []), x(() => {
    et(!!e, "data property is required in HeatmapLayer %s", e);
  }, [e]), x(() => {
    s !== null && s.setMap(i);
  }, [i]), x(() => {
    a && s !== null && s.setOptions(a);
  }, [s, a]), x(() => {
    var u = new google.maps.visualization.HeatmapLayer(Ta(Ta({}, a), {}, {
      data: e,
      map: i
    }));
    return o(u), r && r(u), () => {
      s !== null && (n && n(s), s.setMap(null));
    };
  }, []), null;
}
Xe($1);
class z1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      heatmapLayer: null
    }), K(this, "setHeatmapLayerCallback", () => {
      this.state.heatmapLayer !== null && this.props.onLoad && this.props.onLoad(this.state.heatmapLayer);
    });
  }
  componentDidMount() {
    et(!!google.maps.visualization, 'Did you include prop libraries={["visualization"]} to <LoadScript />? %s', google.maps.visualization), et(!!this.props.data, "data property is required in HeatmapLayer %s", this.props.data);
    var e = new google.maps.visualization.HeatmapLayer(Ta(Ta({}, this.props.options), {}, {
      data: this.props.data,
      map: this.context
    }));
    this.registeredEvents = Ce({
      updaterMap: zc,
      eventMap: $c,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        heatmapLayer: e
      };
    }, this.setHeatmapLayerCallback);
  }
  componentDidUpdate(e) {
    be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: zc,
      eventMap: $c,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.heatmapLayer
    });
  }
  componentWillUnmount() {
    this.state.heatmapLayer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.heatmapLayer), be(this.registeredEvents), this.state.heatmapLayer.setMap(null));
  }
  render() {
    return null;
  }
}
K(z1, "contextType", me);
var Wc = {
  onCloseClick: "closeclick",
  onPanoChanged: "pano_changed",
  onPositionChanged: "position_changed",
  onPovChanged: "pov_changed",
  onResize: "resize",
  onStatusChanged: "status_changed",
  onVisibleChanged: "visible_changed",
  onZoomChanged: "zoom_changed"
}, Hc = {
  register(t, e, r) {
    t.registerPanoProvider(e, r);
  },
  links(t, e) {
    t.setLinks(e);
  },
  motionTracking(t, e) {
    t.setMotionTracking(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  pano(t, e) {
    t.setPano(e);
  },
  position(t, e) {
    t.setPosition(e);
  },
  pov(t, e) {
    t.setPov(e);
  },
  visible(t, e) {
    t.setVisible(e);
  },
  zoom(t, e) {
    t.setZoom(e);
  }
};
class W1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      streetViewPanorama: null
    }), K(this, "setStreetViewPanoramaCallback", () => {
      this.state.streetViewPanorama !== null && this.props.onLoad && this.props.onLoad(this.state.streetViewPanorama);
    });
  }
  componentDidMount() {
    var e, r, n = (e = (r = this.context) === null || r === void 0 ? void 0 : r.getStreetView()) !== null && e !== void 0 ? e : null;
    this.registeredEvents = Ce({
      updaterMap: Hc,
      eventMap: Wc,
      prevProps: {},
      nextProps: this.props,
      instance: n
    }), this.setState(() => ({
      streetViewPanorama: n
    }), this.setStreetViewPanoramaCallback);
  }
  componentDidUpdate(e) {
    this.state.streetViewPanorama !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Hc,
      eventMap: Wc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.streetViewPanorama
    }));
  }
  componentWillUnmount() {
    this.state.streetViewPanorama !== null && (this.props.onUnmount && this.props.onUnmount(this.state.streetViewPanorama), be(this.registeredEvents), this.state.streetViewPanorama.setVisible(!1));
  }
  render() {
    return null;
  }
}
K(W1, "contextType", me);
class H1 extends He {
  constructor() {
    super(...arguments), K(this, "state", {
      streetViewService: null
    }), K(this, "setStreetViewServiceCallback", () => {
      this.state.streetViewService !== null && this.props.onLoad && this.props.onLoad(this.state.streetViewService);
    });
  }
  componentDidMount() {
    var e = new google.maps.StreetViewService();
    this.setState(function() {
      return {
        streetViewService: e
      };
    }, this.setStreetViewServiceCallback);
  }
  componentWillUnmount() {
    this.state.streetViewService !== null && this.props.onUnmount && this.props.onUnmount(this.state.streetViewService);
  }
  render() {
    return null;
  }
}
K(H1, "contextType", me);
var Uc = {
  onDirectionsChanged: "directions_changed"
}, Vc = {
  directions(t, e) {
    t.setDirections(e);
  },
  map(t, e) {
    t.setMap(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  panel(t, e) {
    t.setPanel(e);
  },
  routeIndex(t, e) {
    t.setRouteIndex(e);
  }
};
class U1 extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "state", {
      directionsRenderer: null
    }), K(this, "setDirectionsRendererCallback", () => {
      this.state.directionsRenderer !== null && (this.state.directionsRenderer.setMap(this.context), this.props.onLoad && this.props.onLoad(this.state.directionsRenderer));
    });
  }
  componentDidMount() {
    var e = new google.maps.DirectionsRenderer(this.props.options);
    this.registeredEvents = Ce({
      updaterMap: Vc,
      eventMap: Uc,
      prevProps: {},
      nextProps: this.props,
      instance: e
    }), this.setState(function() {
      return {
        directionsRenderer: e
      };
    }, this.setDirectionsRendererCallback);
  }
  componentDidUpdate(e) {
    this.state.directionsRenderer !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Vc,
      eventMap: Uc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.directionsRenderer
    }));
  }
  componentWillUnmount() {
    this.state.directionsRenderer !== null && (this.props.onUnmount && this.props.onUnmount(this.state.directionsRenderer), be(this.registeredEvents), this.state.directionsRenderer && this.state.directionsRenderer.setMap(null));
  }
  render() {
    return null;
  }
}
K(U1, "contextType", me);
var qc = {
  onPlacesChanged: "places_changed"
}, Gc = {
  bounds(t, e) {
    t.setBounds(e);
  }
};
class xp extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "containerElement", ka()), K(this, "state", {
      searchBox: null
    }), K(this, "setSearchBoxCallback", () => {
      this.state.searchBox !== null && this.props.onLoad && this.props.onLoad(this.state.searchBox);
    });
  }
  componentDidMount() {
    if (et(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places), this.containerElement !== null && this.containerElement.current !== null) {
      var e = this.containerElement.current.querySelector("input");
      if (e !== null) {
        var r = new google.maps.places.SearchBox(e, this.props.options);
        this.registeredEvents = Ce({
          updaterMap: Gc,
          eventMap: qc,
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
  }
  componentDidUpdate(e) {
    this.state.searchBox !== null && (be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Gc,
      eventMap: qc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.searchBox
    }));
  }
  componentWillUnmount() {
    this.state.searchBox !== null && (this.props.onUnmount && this.props.onUnmount(this.state.searchBox), be(this.registeredEvents));
  }
  render() {
    return y.jsx("div", {
      ref: this.containerElement,
      children: Nt.only(this.props.children)
    });
  }
}
K(xp, "contextType", me);
var Zc = {
  onPlaceChanged: "place_changed"
}, Kc = {
  bounds(t, e) {
    t.setBounds(e);
  },
  restrictions(t, e) {
    t.setComponentRestrictions(e);
  },
  fields(t, e) {
    t.setFields(e);
  },
  options(t, e) {
    t.setOptions(e);
  },
  types(t, e) {
    t.setTypes(e);
  }
};
class Bp extends He {
  constructor() {
    super(...arguments), K(this, "registeredEvents", []), K(this, "containerElement", ka()), K(this, "state", {
      autocomplete: null
    }), K(this, "setAutocompleteCallback", () => {
      this.state.autocomplete !== null && this.props.onLoad && this.props.onLoad(this.state.autocomplete);
    });
  }
  componentDidMount() {
    var e;
    et(!!google.maps.places, 'You need to provide libraries={["places"]} prop to <LoadScript /> component %s', google.maps.places);
    var r = (e = this.containerElement.current) === null || e === void 0 ? void 0 : e.querySelector("input");
    if (r) {
      var n = new google.maps.places.Autocomplete(r, this.props.options);
      this.registeredEvents = Ce({
        updaterMap: Kc,
        eventMap: Zc,
        prevProps: {},
        nextProps: this.props,
        instance: n
      }), this.setState(() => ({
        autocomplete: n
      }), this.setAutocompleteCallback);
    }
  }
  componentDidUpdate(e) {
    be(this.registeredEvents), this.registeredEvents = Ce({
      updaterMap: Kc,
      eventMap: Zc,
      prevProps: e,
      nextProps: this.props,
      instance: this.state.autocomplete
    });
  }
  componentWillUnmount() {
    this.state.autocomplete !== null && be(this.registeredEvents);
  }
  render() {
    return y.jsx("div", {
      ref: this.containerElement,
      className: this.props.className,
      children: Nt.only(this.props.children)
    });
  }
}
K(Bp, "defaultProps", {
  className: ""
});
K(Bp, "contextType", me);
function Ax({
  googleMapsApiKey: t,
  children: e,
  ...r
}) {
  return /* @__PURE__ */ y.jsx(
    vp,
    {
      libraries: ["places", "marker", "maps"],
      googleMapsApiKey: t,
      ...r,
      children: e
    }
  );
}
function Sx(t) {
  const { children: e = !1 } = t, [r, n] = k([]);
  function a(l) {
    return !!r.some((c) => c.key === l);
  }
  function i(l) {
    var c;
    return (c = r.find((d) => d.key === l)) == null ? void 0 : c.data;
  }
  function s(l, c) {
    const d = a(l);
    n(d ? (p) => [...p.filter((h) => h.key !== l), { key: l, data: c }] : [...r, { key: l, data: c }]);
  }
  function o(l) {
    n(r.filter((c) => c.key !== l));
  }
  function u() {
    n([]);
  }
  return /* @__PURE__ */ y.jsx(
    ao.Provider,
    {
      value: { modalIsOpen: a, modalData: i, openModal: s, closeModal: o, closeAll: u },
      children: e
    }
  );
}
let V1 = { data: "" }, q1 = (t) => typeof window == "object" ? ((t ? t.querySelector("#_goober") : window._goober) || Object.assign((t || document.head).appendChild(document.createElement("style")), { innerHTML: " ", id: "_goober" })).firstChild : t || V1, G1 = /(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g, Z1 = /\/\*[^]*?\*\/|  +/g, Yc = /\n+/g, ir = (t, e) => {
  let r = "", n = "", a = "";
  for (let i in t) {
    let s = t[i];
    i[0] == "@" ? i[1] == "i" ? r = i + " " + s + ";" : n += i[1] == "f" ? ir(s, i) : i + "{" + ir(s, i[1] == "k" ? "" : e) + "}" : typeof s == "object" ? n += ir(s, e ? e.replace(/([^,])+/g, (o) => i.replace(/(^:.*)|([^,])+/g, (u) => /&/.test(u) ? u.replace(/&/g, o) : o ? o + " " + u : u)) : i) : s != null && (i = /^--/.test(i) ? i : i.replace(/[A-Z]/g, "-$&").toLowerCase(), a += ir.p ? ir.p(i, s) : i + ":" + s + ";");
  }
  return r + (e && a ? e + "{" + a + "}" : a) + n;
}, Wt = {}, Lp = (t) => {
  if (typeof t == "object") {
    let e = "";
    for (let r in t) e += r + Lp(t[r]);
    return e;
  }
  return t;
}, K1 = (t, e, r, n, a) => {
  let i = Lp(t), s = Wt[i] || (Wt[i] = ((u) => {
    let l = 0, c = 11;
    for (; l < u.length; ) c = 101 * c + u.charCodeAt(l++) >>> 0;
    return "go" + c;
  })(i));
  if (!Wt[s]) {
    let u = i !== t ? t : ((l) => {
      let c, d, p = [{}];
      for (; c = G1.exec(l.replace(Z1, "")); ) c[4] ? p.shift() : c[3] ? (d = c[3].replace(Yc, " ").trim(), p.unshift(p[0][d] = p[0][d] || {})) : p[0][c[1]] = c[2].replace(Yc, " ").trim();
      return p[0];
    })(t);
    Wt[s] = ir(a ? { ["@keyframes " + s]: u } : u, r ? "" : "." + s);
  }
  let o = r && Wt.g ? Wt.g : null;
  return r && (Wt.g = Wt[s]), ((u, l, c, d) => {
    d ? l.data = l.data.replace(d, u) : l.data.indexOf(u) === -1 && (l.data = c ? u + l.data : l.data + u);
  })(Wt[s], e, n, o), s;
}, Y1 = (t, e, r) => t.reduce((n, a, i) => {
  let s = e[i];
  if (s && s.call) {
    let o = s(r), u = o && o.props && o.props.className || /^go/.test(o) && o;
    s = u ? "." + u : o && typeof o == "object" ? o.props ? "" : ir(o, "") : o === !1 ? "" : o;
  }
  return n + a + (s ?? "");
}, "");
function si(t) {
  let e = this || {}, r = t.call ? t(e.p) : t;
  return K1(r.unshift ? r.raw ? Y1(r, [].slice.call(arguments, 1), e.p) : r.reduce((n, a) => Object.assign(n, a && a.call ? a(e.p) : a), {}) : r, q1(e.target), e.g, e.o, e.k);
}
let Ap, ds, ps;
si.bind({ g: 1 });
let qt = si.bind({ k: 1 });
function X1(t, e, r, n) {
  ir.p = e, Ap = t, ds = r, ps = n;
}
function hr(t, e) {
  let r = this || {};
  return function() {
    let n = arguments;
    function a(i, s) {
      let o = Object.assign({}, i), u = o.className || a.className;
      r.p = Object.assign({ theme: ds && ds() }, o), r.o = / *go\d+/.test(u), o.className = si.apply(r, n) + (u ? " " + u : "");
      let l = t;
      return t[0] && (l = o.as || t, delete o.as), ps && l[0] && ps(o), Ap(l, o);
    }
    return a;
  };
}
var J1 = (t) => typeof t == "function", Ma = (t, e) => J1(t) ? t(e) : t, Q1 = /* @__PURE__ */ (() => {
  let t = 0;
  return () => (++t).toString();
})(), Sp = /* @__PURE__ */ (() => {
  let t;
  return () => {
    if (t === void 0 && typeof window < "u") {
      let e = matchMedia("(prefers-reduced-motion: reduce)");
      t = !e || e.matches;
    }
    return t;
  };
})(), eO = 20, fa = /* @__PURE__ */ new Map(), tO = 1e3, Xc = (t) => {
  if (fa.has(t)) return;
  let e = setTimeout(() => {
    fa.delete(t), Mr({ type: 4, toastId: t });
  }, tO);
  fa.set(t, e);
}, rO = (t) => {
  let e = fa.get(t);
  e && clearTimeout(e);
}, hs = (t, e) => {
  switch (e.type) {
    case 0:
      return { ...t, toasts: [e.toast, ...t.toasts].slice(0, eO) };
    case 1:
      return e.toast.id && rO(e.toast.id), { ...t, toasts: t.toasts.map((i) => i.id === e.toast.id ? { ...i, ...e.toast } : i) };
    case 2:
      let { toast: r } = e;
      return t.toasts.find((i) => i.id === r.id) ? hs(t, { type: 1, toast: r }) : hs(t, { type: 0, toast: r });
    case 3:
      let { toastId: n } = e;
      return n ? Xc(n) : t.toasts.forEach((i) => {
        Xc(i.id);
      }), { ...t, toasts: t.toasts.map((i) => i.id === n || n === void 0 ? { ...i, visible: !1 } : i) };
    case 4:
      return e.toastId === void 0 ? { ...t, toasts: [] } : { ...t, toasts: t.toasts.filter((i) => i.id !== e.toastId) };
    case 5:
      return { ...t, pausedAt: e.time };
    case 6:
      let a = e.time - (t.pausedAt || 0);
      return { ...t, pausedAt: void 0, toasts: t.toasts.map((i) => ({ ...i, pauseDuration: i.pauseDuration + a })) };
  }
}, da = [], pa = { toasts: [], pausedAt: void 0 }, Mr = (t) => {
  pa = hs(pa, t), da.forEach((e) => {
    e(pa);
  });
}, nO = { blank: 4e3, error: 4e3, success: 2e3, loading: 1 / 0, custom: 4e3 }, aO = (t = {}) => {
  let [e, r] = k(pa);
  x(() => (da.push(r), () => {
    let a = da.indexOf(r);
    a > -1 && da.splice(a, 1);
  }), [e]);
  let n = e.toasts.map((a) => {
    var i, s;
    return { ...t, ...t[a.type], ...a, duration: a.duration || ((i = t[a.type]) == null ? void 0 : i.duration) || (t == null ? void 0 : t.duration) || nO[a.type], style: { ...t.style, ...(s = t[a.type]) == null ? void 0 : s.style, ...a.style } };
  });
  return { ...e, toasts: n };
}, iO = (t, e = "blank", r) => ({ createdAt: Date.now(), visible: !0, type: e, ariaProps: { role: "status", "aria-live": "polite" }, message: t, pauseDuration: 0, ...r, id: (r == null ? void 0 : r.id) || Q1() }), kn = (t) => (e, r) => {
  let n = iO(e, t, r);
  return Mr({ type: 2, toast: n }), n.id;
}, wt = (t, e) => kn("blank")(t, e);
wt.error = kn("error");
wt.success = kn("success");
wt.loading = kn("loading");
wt.custom = kn("custom");
wt.dismiss = (t) => {
  Mr({ type: 3, toastId: t });
};
wt.remove = (t) => Mr({ type: 4, toastId: t });
wt.promise = (t, e, r) => {
  let n = wt.loading(e.loading, { ...r, ...r == null ? void 0 : r.loading });
  return t.then((a) => (wt.success(Ma(e.success, a), { id: n, ...r, ...r == null ? void 0 : r.success }), a)).catch((a) => {
    wt.error(Ma(e.error, a), { id: n, ...r, ...r == null ? void 0 : r.error });
  }), t;
};
var sO = (t, e) => {
  Mr({ type: 1, toast: { id: t, height: e } });
}, oO = () => {
  Mr({ type: 5, time: Date.now() });
}, uO = (t) => {
  let { toasts: e, pausedAt: r } = aO(t);
  x(() => {
    if (r) return;
    let i = Date.now(), s = e.map((o) => {
      if (o.duration === 1 / 0) return;
      let u = (o.duration || 0) + o.pauseDuration - (i - o.createdAt);
      if (u < 0) {
        o.visible && wt.dismiss(o.id);
        return;
      }
      return setTimeout(() => wt.dismiss(o.id), u);
    });
    return () => {
      s.forEach((o) => o && clearTimeout(o));
    };
  }, [e, r]);
  let n = ke(() => {
    r && Mr({ type: 6, time: Date.now() });
  }, [r]), a = ke((i, s) => {
    let { reverseOrder: o = !1, gutter: u = 8, defaultPosition: l } = s || {}, c = e.filter((m) => (m.position || l) === (i.position || l) && m.height), d = c.findIndex((m) => m.id === i.id), p = c.filter((m, h) => h < d && m.visible).length;
    return c.filter((m) => m.visible).slice(...o ? [p + 1] : [0, p]).reduce((m, h) => m + (h.height || 0) + u, 0);
  }, [e]);
  return { toasts: e, handlers: { updateHeight: sO, startPause: oO, endPause: n, calculateOffset: a } };
}, lO = qt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`, cO = qt`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`, fO = qt`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`, dO = hr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${lO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${cO} 0.15s ease-out forwards;
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
    animation: ${fO} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`, pO = qt`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`, hO = hr("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${(t) => t.secondary || "#e0e0e0"};
  border-right-color: ${(t) => t.primary || "#616161"};
  animation: ${pO} 1s linear infinite;
`, vO = qt`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`, gO = qt`
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
}`, mO = hr("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${(t) => t.primary || "#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vO} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${gO} 0.2s ease-out forwards;
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
`, yO = hr("div")`
  position: absolute;
`, CO = hr("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`, DO = qt`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`, bO = hr("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${DO} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`, EO = ({ toast: t }) => {
  let { icon: e, type: r, iconTheme: n } = t;
  return e !== void 0 ? typeof e == "string" ? it.createElement(bO, null, e) : e : r === "blank" ? null : it.createElement(CO, null, it.createElement(hO, { ...n }), r !== "loading" && it.createElement(yO, null, r === "error" ? it.createElement(dO, { ...n }) : it.createElement(mO, { ...n })));
}, wO = (t) => `
0% {transform: translate3d(0,${t * -200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`, OO = (t) => `
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t * -150}%,-1px) scale(.6); opacity:0;}
`, xO = "0%{opacity:0;} 100%{opacity:1;}", BO = "0%{opacity:1;} 100%{opacity:0;}", LO = hr("div")`
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
`, AO = hr("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`, SO = (t, e) => {
  let r = t.includes("top") ? 1 : -1, [n, a] = Sp() ? [xO, BO] : [wO(r), OO(r)];
  return { animation: e ? `${qt(n)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards` : `${qt(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)` };
}, PO = it.memo(({ toast: t, position: e, style: r, children: n }) => {
  let a = t.height ? SO(t.position || e || "top-center", t.visible) : { opacity: 0 }, i = it.createElement(EO, { toast: t }), s = it.createElement(AO, { ...t.ariaProps }, Ma(t.message, t));
  return it.createElement(LO, { className: t.className, style: { ...a, ...r, ...t.style } }, typeof n == "function" ? n({ icon: i, message: s }) : it.createElement(it.Fragment, null, i, s));
});
X1(it.createElement);
var FO = ({ id: t, className: e, style: r, onHeightUpdate: n, children: a }) => {
  let i = it.useCallback((s) => {
    if (s) {
      let o = () => {
        let u = s.getBoundingClientRect().height;
        n(t, u);
      };
      o(), new MutationObserver(o).observe(s, { subtree: !0, childList: !0, characterData: !0 });
    }
  }, [t, n]);
  return it.createElement("div", { ref: i, className: e, style: r }, a);
}, TO = (t, e) => {
  let r = t.includes("top"), n = r ? { top: 0 } : { bottom: 0 }, a = t.includes("center") ? { justifyContent: "center" } : t.includes("right") ? { justifyContent: "flex-end" } : {};
  return { left: 0, right: 0, display: "flex", position: "absolute", transition: Sp() ? void 0 : "all 230ms cubic-bezier(.21,1.02,.73,1)", transform: `translateY(${e * (r ? 1 : -1)}px)`, ...n, ...a };
}, MO = si`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`, aa = 16, kO = ({ reverseOrder: t, position: e = "top-center", toastOptions: r, gutter: n, children: a, containerStyle: i, containerClassName: s }) => {
  let { toasts: o, handlers: u } = uO(r);
  return it.createElement("div", { style: { position: "fixed", zIndex: 9999, top: aa, left: aa, right: aa, bottom: aa, pointerEvents: "none", ...i }, className: s, onMouseEnter: u.startPause, onMouseLeave: u.endPause }, o.map((l) => {
    let c = l.position || e, d = u.calculateOffset(l, { reverseOrder: t, gutter: n, defaultPosition: e }), p = TO(c, d);
    return it.createElement(FO, { id: l.id, key: l.id, onHeightUpdate: u.updateHeight, className: l.visible ? MO : "", style: p }, l.type === "custom" ? Ma(l.message, l) : a ? a(l) : it.createElement(PO, { toast: l, position: c }));
  }));
}, Jc = wt;
function Px({ children: t }) {
  function e(r) {
    switch (r.type) {
      case "success":
        return Jc.success(r.message, {
          style: {
            background: "#10B981",
            color: "#ffffff",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: 600
          },
          iconTheme: {
            primary: "#059669",
            secondary: "#ffffff"
          }
        });
      case "danger":
        return Jc.error(r.message, {
          style: {
            background: "#E11D48",
            color: "#ffffff",
            padding: "12px 16px",
            fontSize: "14px",
            fontWeight: 600
          },
          iconTheme: {
            primary: "#BE123C",
            secondary: "#ffffff"
          }
        });
    }
  }
  return /* @__PURE__ */ y.jsxs(op.Provider, { value: { showToast: e }, children: [
    /* @__PURE__ */ y.jsx(
      kO,
      {
        position: "top-right",
        containerStyle: { zIndex: 999999999999999 }
      }
    ),
    t
  ] });
}
function jO({ children: t, fallback: e = null }) {
  return aw() ? /* @__PURE__ */ y.jsx(y.Fragment, { children: t() }) : /* @__PURE__ */ y.jsx(y.Fragment, { children: e });
}
function Fx({
  coordinates: t,
  zoom: e = 18,
  draggable: r = !1,
  className: n,
  ...a
}) {
  return t ? /* @__PURE__ */ y.jsx("div", { className: "arkynGoogleMapPinned " + n, ...a, children: /* @__PURE__ */ y.jsx(
    gw,
    {
      zoom: e,
      center: t,
      mapContainerStyle: {
        borderRadius: "var(--rounded-cards)",
        width: "100%",
        height: "100%"
      },
      children: /* @__PURE__ */ y.jsx(gp, { draggable: r, position: t })
    }
  ) }) : /* @__PURE__ */ y.jsx("div", { className: "arkynGoogleMapPinnedEmpty " + n, ...a, children: /* @__PURE__ */ y.jsx(nh, {}) });
}
function Tx({
  onChange: t,
  onPlaceChanged: e,
  options: r,
  ...n
}) {
  const [a, i] = k(null), s = (u) => i(u), o = () => {
    var m, h, v, f;
    const l = a.getPlaces()[0], c = l == null ? void 0 : l.address_components;
    function d(D) {
      const b = c.find((B) => B.types[0] === D);
      return b ? b.long_name : "";
    }
    function p(D) {
      const b = c.find((B) => B.types[0] === D);
      return b ? b.short_name : "";
    }
    if (l) {
      const D = d("route"), b = d("street_number"), B = d("sublocality_level_1"), E = d("administrative_area_level_2"), C = d("administrative_area_level_1"), O = p("administrative_area_level_1"), A = d("postal_code"), H = (h = (m = l.geometry) == null ? void 0 : m.location) == null ? void 0 : h.lat(), P = (f = (v = l.geometry) == null ? void 0 : v.location) == null ? void 0 : f.lng();
      e && e({
        street: D,
        city: E,
        state: C,
        district: B,
        cep: A,
        streetNumber: b,
        stateShortName: O,
        coordinates: { lat: H, lng: P }
      });
    }
  };
  return /* @__PURE__ */ y.jsx(
    xp,
    {
      onLoad: s,
      onPlacesChanged: o,
      options: r,
      children: /* @__PURE__ */ y.jsx(Ka, { type: "text", onChange: (u) => t(u.target.value), ...n })
    }
  );
}
function Pp(t) {
  const { dataLayer: e, dataLayerName: r } = t;
  return `
  window.${r} = window.${r} || [];
  window.${r}.push(${JSON.stringify(e)})`;
}
function RO(t) {
  const { id: e, events: r, dataLayer: n, dataLayerName: a, preview: i, auth: s } = t, o = `&gtm_auth=${s}`, u = `&gtm_preview=${i}`;
  e || console.warn("GTM Id is required");
  const l = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=${e}${o}${u}&gtm_cookies_win=x"
      height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>`, c = `
    (function(w,d,s,l,i){w[l]=w[l]||[];
      w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${JSON.stringify(
    r
  ).slice(1, -1)}});
      var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
      j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'${o}${u}&gtm_cookies_win=x';
      f.parentNode.insertBefore(j,f);
    })(window,document,'script','${a}','${e}');`, d = Pp({ dataLayer: n, dataLayerName: a });
  return {
    iframe: l,
    script: c,
    dataLayerVar: d
  };
}
let IO = class {
  initializeDataScript(e) {
    const r = document.createElement("script");
    return r.innerHTML = e, r;
  }
  initializeGTMElements(e) {
    const r = RO(e), n = () => {
      const s = document.createElement("noscript");
      return s.innerHTML = r.iframe, s;
    }, a = () => {
      const s = document.createElement("script");
      return s.innerHTML = r.script, s;
    }, i = this.initializeDataScript(r.dataLayerVar);
    return {
      noScript: n,
      script: a,
      dataScript: i
    };
  }
  initializeDataLayer(e) {
    const { dataLayer: r, dataLayerName: n } = e;
    if (window[n]) return window[n].push(r);
    const a = Pp({ dataLayer: r, dataLayerName: n }), i = this.initializeDataScript(a);
    document.head.insertBefore(i, document.head.childNodes[0]);
  }
  initialize(e) {
    const {
      events: r,
      gtmId: n,
      dataLayer: a,
      auth: i = "",
      preview: s = "",
      dataLayerName: o = "dataLayer"
    } = e, u = this.initializeGTMElements({
      id: n,
      events: r,
      dataLayer: a || void 0,
      dataLayerName: o,
      auth: i,
      preview: s
    });
    a && document.head.appendChild(u.dataScript), document.head.insertBefore(u.script(), document.head.childNodes[0]), document.body.insertBefore(u.noScript(), document.body.childNodes[0]);
  }
};
function NO(t) {
  return new IO().initialize(t), /* @__PURE__ */ y.jsx(y.Fragment, {});
}
function kx(t) {
  const {
    gtmId: e,
    auth: r = "",
    preview: n = "",
    dataLayerName: a = "dataLayer",
    events: i = {},
    dataLayer: s = {}
  } = t;
  return /* @__PURE__ */ y.jsx(jO, { children: () => /* @__PURE__ */ y.jsx(
    NO,
    {
      auth: r,
      dataLayer: s,
      dataLayerName: a,
      events: i,
      gtmId: e,
      preview: n
    }
  ) });
}
export {
  VO as AlertContainer,
  qO as AlertContent,
  GO as AlertDescription,
  ZO as AlertIcon,
  ch as AlertTitle,
  JO as Badge,
  gx as BreadcrumbContainer,
  mx as BreadcrumbLink,
  ba as Button,
  QO as Card,
  ox as Checkbox,
  jO as ClientOnly,
  ex as Divider,
  Cx as DrawerContainer,
  Dx as DrawerHeader,
  Bx as DrawerProvider,
  pu as FormController,
  ux as FormError,
  hu as FormLabel,
  Fx as GoogleMap,
  Ax as GoogleProvider,
  Tx as GoogleSearchPlaces,
  kx as GoogleTagManager,
  Km as IconButton,
  ty as ImageUpload,
  Ka as Input,
  $D as ModalContainer,
  zD as ModalFooter,
  WD as ModalHeader,
  Sx as ModalProvider,
  lx as MultiSelect,
  yx as Pagination,
  bx as Popover,
  fx as RadioBox,
  cx as RadioGroup,
  dx as RichText,
  px as Select,
  tx as Skeleton,
  hx as Switch,
  el as TabButton,
  UD as TabContainer,
  rx as TableBody,
  nx as TableCaption,
  ax as TableContainer,
  ix as TableFooter,
  sx as TableHeader,
  vx as Textarea,
  Ex as Toast,
  Px as ToastProvider,
  Ym as Tooltip,
  KO as getHtmlFromRichTextValue,
  YO as getRichTextValueFromHtml,
  XO as isHtml,
  Uf as morpheme,
  wx as useAutomation,
  Ox as useDrawer,
  Vf as useFieldErrors,
  Dt as useFormController,
  aw as useHydrated,
  xx as useModal,
  Nd as useScopedParams,
  rw as useToast
};
