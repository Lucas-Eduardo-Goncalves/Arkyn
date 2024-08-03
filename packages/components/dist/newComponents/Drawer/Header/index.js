import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { useContext } from "react";
import { drawerContext } from "../Container";
import "./styles.css";
function DrawerHeader(args) {
    const { showCloseButton, className: baseClassName, children, ...rest } = args;
    const { makeInvisible } = useContext(drawerContext);
    const className = `arkyn_drawer_header ${baseClassName}`;
    return (_jsxs("header", { className: className.trim(), ...rest, children: [children, showCloseButton && (_jsx("button", { className: "arkyn_drawer_header-close_button", type: "button", onClick: makeInvisible, "aria-label": "Close drawer", children: _jsx(X, { size: 24 }) }))] }));
}
export { DrawerHeader };
