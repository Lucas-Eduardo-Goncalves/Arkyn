import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function Divider(props) {
    const { className: baseClassName, orientation = "horizontal", ...rest } = props;
    const className = `arkynDivider ${orientation} ${baseClassName}`;
    return _jsx("div", { className: className.trim(), ...rest });
}
export { Divider };
