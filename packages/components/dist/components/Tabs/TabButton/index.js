import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TabButton(props) {
    const { children, value, className: baseClassName, ...rest } = props;
    const className = `arkyn_tab_button ${props.defaultActive ? "active" : ""} ${baseClassName || ""}`;
    return (_jsx("button", { className: className.trim(), ...rest, children: children }));
}
export { TabButton };
