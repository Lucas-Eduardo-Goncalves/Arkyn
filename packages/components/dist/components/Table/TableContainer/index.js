import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TableContainer(props) {
    const { children, className: baseClassName, ...rest } = props;
    const className = `arkynTableContainer ${baseClassName}`;
    return (_jsx("div", { className: className.trim(), ...rest, children: _jsx("table", { children: children }) }));
}
export { TableContainer };
