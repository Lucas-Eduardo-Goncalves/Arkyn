import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function AlertDescription(props) {
    const { className: baseClassName, ...rest } = props;
    const className = `arkynAlertDescription ${baseClassName}`;
    return _jsx("div", { className: className.trim(), ...rest });
}
export { AlertDescription };
