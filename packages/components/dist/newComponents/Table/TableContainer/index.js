import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TableContainer(args) {
    const { children, className: baseClassName, ...rest } = args;
    const className = `arkyn_table_container ${baseClassName}`;
    return (_jsx("div", { className: className.trim(), ...rest, children: _jsx("table", { children: children }) }));
}
export { TableContainer };
