import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function Skeleton({ className: baseClassName, ...rest }) {
    const className = "arkyn_skeleton " + baseClassName;
    return _jsx("div", { className: className.trim(), ...rest });
}
export { Skeleton };
