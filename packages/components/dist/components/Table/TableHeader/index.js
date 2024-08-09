import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function TableHeader(props) {
    const { className: baseClassName, children, ...rest } = props;
    const className = `arkyn_table_header ${baseClassName}`;
    return (_jsxs("thead", { className: className.trim(), ...rest, children: [_jsx("tr", { children: children }), _jsx("tr", { className: "spacing-row" })] }));
}
export { TableHeader };
