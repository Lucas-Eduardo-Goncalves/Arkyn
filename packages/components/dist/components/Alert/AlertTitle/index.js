import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function AlertTitle(props) {
    const { children, className: baseClassName, ...rest } = props;
    const className = `arkyn_title ${baseClassName}`;
    return (_jsx("div", { className: className.trim(), ...rest, children: children }));
}
export { AlertTitle };
