import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function Tooltip(args) {
    const { text, size = "lg", children, orientation = "top", className: baseClassName, ...rest } = args;
    const className = `arkyn_tooltip ${size} ${orientation} ${baseClassName}`;
    return (_jsxs("div", { className: className.trim(), ...rest, children: [children, _jsx("div", { className: "arkyn_tooltip-text", children: text })] }));
}
export { Tooltip };
