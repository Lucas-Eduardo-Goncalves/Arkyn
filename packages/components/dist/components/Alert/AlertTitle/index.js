import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function AlertTitle(props) {
    const { className: baseClassName, ...rest } = props;
    const className = `arkynAlertTitle ${baseClassName}`;
    return _jsx("div", { className: className.trim(), ...rest });
}
export { AlertTitle };
