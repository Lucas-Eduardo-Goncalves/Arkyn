import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function MultiSelectContent(props) {
    const { children, size } = props;
    const className = `arkynMultiSelectContent ${size}`;
    return _jsx("div", { className: className, children: children });
}
export { MultiSelectContent };
