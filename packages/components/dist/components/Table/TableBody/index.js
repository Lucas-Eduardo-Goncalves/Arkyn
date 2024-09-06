import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TableBody(props) {
    const { className: baseClassName, ...rest } = props;
    const className = `arkynTableBody ${baseClassName}`;
    return _jsx("tbody", { className: className.trim(), ...rest });
}
export { TableBody };
