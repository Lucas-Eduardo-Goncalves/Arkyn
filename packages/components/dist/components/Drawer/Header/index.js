import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { useContext } from "react";
import { drawerContext } from "../Container";
import "./styles.css";
function DrawerHeader(props) {
    const { showCloseButton = true, className: baseClassName, children, ...rest } = props;
    const { makeInvisible } = useContext(drawerContext);
    const className = `arkynDrawerHeader ${baseClassName}`;
    return (_jsxs("header", { className: className.trim(), ...rest, children: [children, showCloseButton && (_jsx("button", { className: "arkynDrawerHeaderCloseButton", type: "button", onClick: makeInvisible, "aria-label": "Close drawer", children: _jsx(X, { size: 24 }) }))] }));
}
export { DrawerHeader };
