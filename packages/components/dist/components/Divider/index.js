import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function Divider(props) {
    const { className: baseClassName, orientation = "horizontal", ...rest } = props;
    const className = `arkyn_divider ${orientation} ${baseClassName}`;
    return _jsx("div", { className: className, ...rest });
}
export { Divider };
