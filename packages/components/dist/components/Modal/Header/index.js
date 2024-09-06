import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { X } from "lucide-react";
import { useContext } from "react";
import { modalContext } from "../Container";
import "./styles.css";
function ModalHeader(args) {
    const { showCloseButton = true, className: baseClassName, children, ...rest } = args;
    const { makeInvisible } = useContext(modalContext);
    const className = `arkynModalHeader ${baseClassName}`;
    return (_jsxs("header", { className: className.trim(), ...rest, children: [children, showCloseButton && (_jsx("button", { type: "button", onClick: makeInvisible, "aria-label": "Close modal button", className: "arkynModalHeaderCloseButton", children: _jsx(X, { size: 24 }) }))] }));
}
export { ModalHeader };
