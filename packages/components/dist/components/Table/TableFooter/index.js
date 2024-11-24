import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function TableFooter(props) {
    const { className: baseClassName, children, ...rest } = props;
    const className = `arkynTableFooter ${baseClassName}`;
    return (_jsxs("tfoot", { className: className.trim(), ...rest, children: [_jsx("tr", { className: "spacingRow" }), _jsx("tr", { children: _jsx("th", { colSpan: 100, children: _jsx("div", { className: "arkynTableFooterContent", children: children }) }) })] }));
}
export { TableFooter };
