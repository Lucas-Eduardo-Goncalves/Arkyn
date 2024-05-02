import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function Tooltip(args) {
    const { text, size = "lg", children, orientation = "top", className, ...rest } = args;
    return (_jsxs("div", { className: `arkyn_tooltip ${size} ${orientation} ${className}`, ...rest, children: [children, _jsx("div", { className: "arkyn_tooltip_text", children: text })] }));
}
export { Tooltip };
