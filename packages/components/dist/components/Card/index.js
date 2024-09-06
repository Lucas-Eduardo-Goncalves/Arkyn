import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function Card(props) {
    const { className: baseClassName, ...rest } = props;
    const className = `arkynCard ${baseClassName}`;
    return _jsx("div", { className: className.trim(), ...rest });
}
export { Card };
