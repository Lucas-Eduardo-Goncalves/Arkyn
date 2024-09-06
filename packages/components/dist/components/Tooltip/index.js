import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function Tooltip(props) {
    const { text, size = "lg", children, orientation = "top", className: baseClassName = "", ...rest } = props;
    const className = `arkynTooltip ${size} ${orientation} ${baseClassName}`;
    return (_jsxs("div", { className: className.trim(), ...rest, children: [children, _jsx("div", { className: "arkynTooltipText", children: text })] }));
}
export { Tooltip };
