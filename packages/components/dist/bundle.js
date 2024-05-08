import { Loader2 as W, ChevronRight as H, X as se } from "lucide-react";
import { useActionData as ce, useLocation as oe, Link as ae } from "@remix-run/react";
import { createContext as U, useRef as T, useId as ie, useContext as Z, useState as B } from "react";
import { InputMask as re } from "@react-input/mask";
import { AnimatePresence as le, motion as Y } from "framer-motion";
function A(e, n) {
  return n ? /* @__PURE__ */ React.createElement(n, { size: e, strokeWidth: 2.5 }) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}
function ue(e) {
  const {
    variant: n = "ghost",
    scheme: t = "primary",
    size: s = "md",
    leftIcon: c,
    rightIcon: o,
    className: i = "",
    children: a,
    ...l
  } = e, u = { md: 12, lg: 14 }[s];
  return {
    className: `arkyn_badge ${n} ${t} ${s} ${i}`.trim(),
    children: a,
    leftIcon: A(u, c),
    rightIcon: A(u, o),
    ...l
  };
}
function Oe(e) {
  const { leftIcon: n, children: t, rightIcon: s, ...c } = ue(e);
  return /* @__PURE__ */ React.createElement("div", { ...c }, n, t, s);
}
function Te(e) {
  const {
    className: n,
    orientation: t = "horizontal",
    ...s
  } = e, c = `arkyn_divider ${t} ${n}`;
  return /* @__PURE__ */ React.createElement("div", { className: c, ...s });
}
function fe(e) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: s = "solid",
    loadingText: c,
    size: o = "md",
    leftIcon: i,
    rightIcon: a,
    disabled: l,
    className: r = "",
    children: u,
    ...f
  } = e, R = { xs: 12, sm: 16, md: 20, lg: 24 }[o];
  return {
    className: `arkyn_button loading_text_${!!c} ${s} ${t} ${o} loading_${n} ${r}`.trim(),
    loadingText: c,
    children: u,
    iconSize: R,
    disabled: l || n,
    leftIcon: A(R, i),
    rightIcon: A(R, a),
    ...f
  };
}
function Ae(e) {
  const { leftIcon: n, rightIcon: t, iconSize: s, children: c, loadingText: o, ...i } = fe(e);
  return /* @__PURE__ */ React.createElement("button", { ...i }, /* @__PURE__ */ React.createElement("div", { className: "spinner" }, /* @__PURE__ */ React.createElement(W, { size: s, strokeWidth: 2.5 }), o && o), /* @__PURE__ */ React.createElement("div", { className: "content" }, n, c, t));
}
const ee = U({});
function Me({ children: e, ...n }) {
  var a, l;
  const t = ce(), s = T(null), c = ((a = s.current) == null ? void 0 : a.name) || "", o = ((l = t == null ? void 0 : t.fieldErrors) == null ? void 0 : l[c]) || null, i = ie();
  return /* @__PURE__ */ React.createElement(ee.Provider, { value: { error: o, id: i, inputRef: s } }, /* @__PURE__ */ React.createElement("section", { className: "arkyn_form_controller", ...n }, e));
}
function V() {
  return Z(ee);
}
function Ke() {
  const { error: e } = V();
  return e ? /* @__PURE__ */ React.createElement("strong", { className: "arkyn_form_error" }, e) : /* @__PURE__ */ React.createElement(React.Fragment, null);
}
function me(e) {
  const { showAsterisk: n = !1, className: t = "", ...s } = e;
  return {
    className: `arkyn_form_label ${n ? "show-asterisk" : ""} ${t}`.trim(),
    ...s
  };
}
function Je(e) {
  const { id: n } = V();
  return /* @__PURE__ */ React.createElement("label", { ...me(e), htmlFor: n });
}
const q = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24
};
function Xe(e) {
  const {
    isLoading: n = !1,
    scheme: t = "primary",
    variant: s = "solid",
    size: c = "md",
    icon: o,
    disabled: i,
    className: a = "",
    ...l
  } = e, r = `arkyn_icon_button ${s} ${t} ${c} loading_${n} ${a}`;
  return /* @__PURE__ */ React.createElement(
    "button",
    {
      disabled: i || n,
      className: r.trim(),
      ...l
    },
    /* @__PURE__ */ React.createElement("div", { className: "spinner" }, /* @__PURE__ */ React.createElement(W, { size: q[c], strokeWidth: 2.5 })),
    /* @__PURE__ */ React.createElement("div", { className: "content " + c }, /* @__PURE__ */ React.createElement(o, { size: q[c], strokeWidth: 2.5 }))
  );
}
function P(e, n, t) {
  if (!e)
    return /* @__PURE__ */ React.createElement(React.Fragment, null);
  if (typeof e == "string")
    return /* @__PURE__ */ React.createElement("p", { className: t }, e);
  const s = e;
  return /* @__PURE__ */ React.createElement("p", { className: t }, /* @__PURE__ */ React.createElement(s, { color: "var(--secondary-600)", size: n, strokeWidth: 2.5 }));
}
function de(e, n) {
  const {
    isLoading: t,
    isError: s,
    size: c = "md",
    className: o = "",
    variant: i = "solid",
    prefix: a,
    sufix: l,
    leftIcon: r,
    rightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    onChange: m,
    ...x
  } = e, d = u ? "right" : "left", S = `arkyn_input ${a ? "hasPrefix" : ""} ${l ? "hasSufix" : ""} ${i} ${c} ${f || h || t ? "opacity" : ""} ${s ? "errored" : ""} ${n ? "focused" : ""} ${o}`, g = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: S,
    prefix: P(a, g, "prefix"),
    sufix: P(l, g, "sufix"),
    LeftIcon: r,
    RightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    onChange: m,
    loadingPosition: d,
    iconSize: g,
    Spinner: /* @__PURE__ */ React.createElement(W, { className: "spinner", size: g, strokeWidth: 2.5 }),
    ...x
  };
}
function G(e) {
  return e && e.replace(/[^0-9]/g, "");
}
function he(e, n) {
  let t = "", s = 0;
  return Array.from(e).forEach((c, o) => {
    n[o + s].match(/[0-9]/) || (t += n[o + s], s++), t += c;
  }), t;
}
function ge(e) {
  return e.length > 11 ? "CNPJ" : "CPF";
}
const te = {
  CPF: "999.999.999-999",
  CNPJ: "99.999.999/9999-99"
}, Re = G(te.CNPJ).length;
function xe(e) {
  const [n, t] = B(!1), [s, c] = B(
    G((e == null ? void 0 : e.defaultValue) || "")
  ), o = T(null), { inputRef: i, id: a, error: l } = V(), r = i || o, u = e.isError || !!l, {
    disabled: f,
    title: h,
    style: R,
    className: y,
    prefix: E,
    sufix: N,
    iconSize: m,
    loadingPosition: x,
    isLoading: d,
    LeftIcon: b,
    readOnly: z,
    onFocus: p,
    onBlur: $,
    RightIcon: v,
    Spinner: S,
    onChange: C,
    value: g,
    defaultValue: I = "",
    ...k
  } = de({ ...e, id: a, isError: u }, n), D = b && !d, O = v && !d, w = x === "left" && d, M = x === "right" && d;
  function K() {
    f || !(r != null && r.current) || (t(!0), r.current.focus());
  }
  function J(L) {
    let F = G(L.target.value);
    const _ = ge(F);
    F.length > Re || (F = he(F, te[_]), L.target.value = F, c(F), C && C(L));
  }
  function X(L) {
    t(!0), p && p(L);
  }
  function j(L) {
    t(!1), $ && $(L);
  }
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      title: h,
      style: R,
      onClick: K,
      className: y
    },
    E,
    w && S,
    D && /* @__PURE__ */ React.createElement(b, { size: m, strokeWidth: 2.5 }),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        disabled: f || d,
        readOnly: z,
        ref: r,
        value: g || s,
        onFocus: X,
        onChange: J,
        onBlur: j,
        ...k
      }
    ),
    O && /* @__PURE__ */ React.createElement(v, { size: m, strokeWidth: 2.5 }),
    M && S,
    N
  );
}
function Ee(e, n) {
  const {
    isLoading: t,
    isError: s,
    size: c = "md",
    className: o = "",
    variant: i = "solid",
    prefix: a,
    sufix: l,
    leftIcon: r,
    rightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    showCents: m = !1,
    max: x = 1e9,
    onChange: d,
    ...b
  } = e, z = u ? "right" : "left", g = `arkyn_input ${a ? "hasPrefix" : ""} ${l ? "hasSufix" : ""} ${i} ${c} ${f || h || t ? "opacity" : ""} ${s ? "errored" : ""} ${n ? "focused" : ""} ${o}`, k = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: g,
    prefix: P(a, k, "prefix"),
    sufix: P(l, k, "sufix"),
    LeftIcon: r,
    RightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    max: x,
    onChange: d,
    showCents: m,
    loadingPosition: z,
    iconSize: k,
    Spinner: /* @__PURE__ */ React.createElement(W, { className: "spinner", size: k, strokeWidth: 2.5 }),
    ...b
  };
}
const Ne = /^[1-9]{1}$/, ye = /^[0-9]{1}$/, Q = 8;
function be(e, n) {
  if (e === 0)
    return "";
  const t = (e / 100).toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL"
  });
  return n ? t : t.replace("R$", "").trim();
}
function pe(e) {
  const { currencyValue: n, event: t, max: s, setCurrencyValue: c } = e, { key: o, keyCode: i } = t;
  if (n === 0 && !Ne.test(o) || n !== 0 && !ye.test(o) && i !== Q)
    return;
  const a = n.toString();
  let l;
  if (i !== Q) {
    const r = n === 0 ? o : `${a}${o}`;
    l = Number.parseInt(r, 10);
  } else {
    const r = a.slice(0, -1);
    l = r === "" ? 0 : Number.parseInt(r, 10);
  }
  l > Number(s) || c(l);
}
function $e(e) {
  const [n, t] = B(!1), [s, c] = B(e.defaultValue || 0), o = T(null), { inputRef: i, id: a, error: l } = V(), r = i || o, u = e.isError || !!l, {
    disabled: f,
    title: h,
    style: R,
    className: y,
    prefix: E,
    sufix: N,
    iconSize: m,
    loadingPosition: x,
    isLoading: d,
    LeftIcon: b,
    readOnly: z,
    onFocus: p,
    onBlur: $,
    RightIcon: v,
    Spinner: S,
    value: C,
    max: g,
    onKeyDown: I,
    onChange: k,
    showCents: D,
    ...O
  } = Ee({ ...e, id: a, isError: u }, n), w = b && !d, M = v && !d, K = x === "left" && d, J = x === "right" && d;
  function X() {
    f || !(r != null && r.current) || (t(!0), r.current.focus());
  }
  function j(_) {
    pe({ currencyValue: s, event: _, max: g, setCurrencyValue: c }), k && k(s), I && I(_);
  }
  function L(_) {
    t(!0), p && p(_);
  }
  function F(_) {
    t(!1), $ && $(_);
  }
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      title: h,
      style: R,
      onClick: X,
      className: y
    },
    E,
    K && S,
    w && /* @__PURE__ */ React.createElement(b, { size: m, strokeWidth: 2.5 }),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        value: be(C || s, D),
        onKeyDown: j,
        disabled: f || d,
        readOnly: z,
        ref: r,
        onFocus: L,
        onChange: () => {
        },
        onBlur: F,
        ...O
      }
    ),
    J && S,
    M && /* @__PURE__ */ React.createElement(v, { size: m, strokeWidth: 2.5 }),
    N
  );
}
function Se(e, n) {
  const {
    isLoading: t,
    isError: s,
    size: c = "md",
    className: o = "",
    variant: i = "solid",
    prefix: a,
    sufix: l,
    leftIcon: r,
    rightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    onChange: m,
    showMask: x = !0,
    ...d
  } = e, b = u ? "right" : "left", C = `arkyn_input ${a ? "hasPrefix" : ""} ${l ? "hasSufix" : ""} ${i} ${c} ${f || h || t ? "opacity" : ""} ${s ? "errored" : ""} ${n ? "focused" : ""} ${o}`, I = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: C,
    prefix: P(a, I, "prefix"),
    sufix: P(l, I, "sufix"),
    LeftIcon: r,
    RightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    onChange: m,
    loadingPosition: b,
    iconSize: I,
    showMask: x,
    Spinner: /* @__PURE__ */ React.createElement(W, { className: "spinner", size: I, strokeWidth: 2.5 }),
    ...d
  };
}
function Ce(e) {
  const [n, t] = B(!1), s = T(null), { inputRef: c, id: o, error: i } = V(), a = c || s, l = e.isError || !!i, {
    disabled: r,
    title: u,
    style: f,
    className: h,
    prefix: R,
    sufix: y,
    iconSize: E,
    loadingPosition: N,
    isLoading: m,
    LeftIcon: x,
    readOnly: d,
    onFocus: b,
    onBlur: z,
    RightIcon: p,
    Spinner: $,
    ...v
  } = Se({ ...e, id: o, isError: l }, n), S = x && !m, C = p && !m, g = N === "left" && m, I = N === "right" && m;
  function k() {
    r || !(a != null && a.current) || (t(!0), a.current.focus());
  }
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      title: u,
      style: f,
      onClick: k,
      className: h
    },
    R,
    g && $,
    S && /* @__PURE__ */ React.createElement(x, { size: E, strokeWidth: 2.5 }),
    /* @__PURE__ */ React.createElement(
      re,
      null
    ),
    C && /* @__PURE__ */ React.createElement(p, { size: E, strokeWidth: 2.5 }),
    I && $,
    y
  );
}
function Ie(e, n) {
  const {
    isLoading: t,
    isError: s,
    size: c = "md",
    className: o = "",
    variant: i = "solid",
    prefix: a,
    sufix: l,
    leftIcon: r,
    rightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    onChange: m,
    ...x
  } = e, d = u ? "right" : "left", S = `arkyn_input ${a ? "hasPrefix" : ""} ${l ? "hasSufix" : ""} ${i} ${c} ${f || h || t ? "opacity" : ""} ${s ? "errored" : ""} ${n ? "focused" : ""} ${o}`, g = { md: 14, lg: 16 }[c];
  return {
    isLoading: t,
    className: S,
    prefix: P(a, g, "prefix"),
    sufix: P(l, g, "sufix"),
    LeftIcon: r,
    RightIcon: u,
    disabled: f,
    readOnly: h,
    onFocus: R,
    onBlur: y,
    title: E,
    style: N,
    onChange: m,
    loadingPosition: d,
    iconSize: g,
    Spinner: /* @__PURE__ */ React.createElement(W, { className: "spinner", size: g, strokeWidth: 2.5 }),
    ...x
  };
}
function ke(e) {
  const [n, t] = B(!1), s = T(null), { inputRef: c, id: o, error: i } = V(), a = c || s, l = e.isError || !!i, {
    disabled: r,
    title: u,
    style: f,
    className: h,
    prefix: R,
    sufix: y,
    iconSize: E,
    loadingPosition: N,
    isLoading: m,
    LeftIcon: x,
    readOnly: d,
    onFocus: b,
    onBlur: z,
    RightIcon: p,
    Spinner: $,
    ...v
  } = Ie({ ...e, id: o, isError: l }, n), S = x && !m, C = p && !m, g = N === "left" && m, I = N === "right" && m;
  function k() {
    r || !(a != null && a.current) || (t(!0), a.current.focus());
  }
  function D(w) {
    t(!0), b && b(w);
  }
  function O(w) {
    t(!1), z && z(w);
  }
  return /* @__PURE__ */ React.createElement(
    "section",
    {
      title: u,
      style: f,
      onClick: k,
      className: h
    },
    R,
    g && $,
    S && /* @__PURE__ */ React.createElement(x, { size: E, strokeWidth: 2.5 }),
    /* @__PURE__ */ React.createElement(
      "input",
      {
        disabled: r || m,
        readOnly: d,
        ref: a,
        onFocus: D,
        onBlur: O,
        ...v
      }
    ),
    C && /* @__PURE__ */ React.createElement(p, { size: E, strokeWidth: 2.5 }),
    I && $,
    y
  );
}
function je(e) {
  return e.type === "currency" ? /* @__PURE__ */ React.createElement($e, { ...e }) : e.type === "masked" ? /* @__PURE__ */ React.createElement(Ce, { ...e }) : e.type === "cpf-cpnj" ? /* @__PURE__ */ React.createElement(xe, { ...e }) : /* @__PURE__ */ React.createElement(ke, { ...e });
}
function ze(e) {
  const { className: n = "", ...t } = e;
  return { className: `arkyn_breadcrumb ${n}`.trim(), ...t };
}
function ve(e) {
  const { pathname: n } = oe(), {
    className: t = "",
    disabled: s = !1,
    to: c,
    ...o
  } = e, i = n === c ? "active" : "inactive", a = `arkyn_breadcrumb_link ${i} ${t}`;
  return {
    to: c,
    className: a.trim(),
    disabled: s || i === "active",
    ...o
  };
}
function Ge(e) {
  const { className: n, ...t } = ze(e);
  return /* @__PURE__ */ React.createElement("nav", { className: n, ...t });
}
function He(e) {
  const { children: n, className: t, disabled: s, ...c } = ve(e);
  return s ? /* @__PURE__ */ React.createElement("p", { className: t }, /* @__PURE__ */ React.createElement(H, { size: 14, strokeWidth: 2.5 }), n) : /* @__PURE__ */ React.createElement(ae, { className: t, ...c }, /* @__PURE__ */ React.createElement(H, { size: 14, strokeWidth: 2.5 }), n);
}
const ne = U({});
function Le(e) {
  const {
    isVisibled: n,
    makeInvisible: t,
    children: s,
    className: c = "",
    ...o
  } = e, a = `arkyn_modal_container ${n ? "visible" : ""} ${c}`;
  return /* @__PURE__ */ React.createElement(ne.Provider, { value: { makeInvisible: t } }, /* @__PURE__ */ React.createElement(le, null, n && /* @__PURE__ */ React.createElement("aside", { className: a.trim(), ...o }, /* @__PURE__ */ React.createElement(
    Y.div,
    {
      className: "overlay",
      transition: { duration: 0.15, ease: "easeOut" },
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      onClick: t
    }
  ), /* @__PURE__ */ React.createElement(
    Y.div,
    {
      className: "content",
      transition: { duration: 0.15, ease: "easeOut" },
      initial: { opacity: 0, scale: 0.75 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0 }
    },
    s
  ))));
}
function Fe(e) {
  const { alignment: n = "right", className: t, ...s } = e, c = `arkyn_modal_footer ${n} ${t}`;
  return /* @__PURE__ */ React.createElement("footer", { className: c.trim(), ...s });
}
function _e(e) {
  const { showCloseButton: n, className: t, children: s, ...c } = e, { makeInvisible: o } = Z(ne), a = `arkyn_modal_header ${n ? "show-close" : ""} ${t}`;
  return /* @__PURE__ */ React.createElement("header", { className: a.trim(), ...c }, s, /* @__PURE__ */ React.createElement("button", { type: "button", onClick: o }, /* @__PURE__ */ React.createElement(se, { size: 24 })));
}
const Ye = { Container: Le, Header: _e, Footer: Fe };
function qe(e) {
  const {
    text: n,
    size: t = "lg",
    children: s,
    orientation: c = "top",
    className: o,
    ...i
  } = e;
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      className: `arkyn_tooltip ${t} ${c} ${o}`,
      ...i
    },
    s,
    /* @__PURE__ */ React.createElement("div", { className: "arkyn_tooltip_text" }, n)
  );
}
export {
  Oe as Badge,
  Ge as Breadcrumb,
  He as BreadcrumbLink,
  Ae as Button,
  Te as Divider,
  Me as FormController,
  Ke as FormError,
  Je as FormLabel,
  Xe as IconButton,
  je as Input,
  Ye as Modal,
  qe as Tooltip
};
