import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { useContext } from "react";
import { drawerContext } from "../Container";
import "./styles.css";
function Header(args) {
    const { showCloseButton, className: baseClassName, children, ...rest } = args;
    const { makeInvisible } = useContext(drawerContext);
    const show = showCloseButton ? "show-close" : "";
    const className = `arkyn_drawer_header ${show} ${baseClassName}`;
    return (_jsxs("header", { className: className.trim(), ...rest, children: [children, _jsx("button", { type: "button", onClick: makeInvisible, children: _jsx(X, { size: 24 }) })] }));
}
export { Header };
