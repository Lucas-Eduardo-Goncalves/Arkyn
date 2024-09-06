import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function AlertContent(props) {
    const { className: baseClassName, ...rest } = props;
    const className = `arkynAlertContent ${baseClassName}`;
    return _jsx("div", { className: className.trim(), ...rest });
}
export { AlertContent };
