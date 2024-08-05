import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TableBody(args) {
    const { className: baseClassName, ...rest } = args;
    const className = `arkyn_table_body ${baseClassName}`;
    return _jsx("tbody", { className: className.trim(), ...rest });
}
export { TableBody };
