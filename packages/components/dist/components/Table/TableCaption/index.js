import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TableCaption(props) {
    const { className: baseClassName, children, ...rest } = props;
    const className = `arkynTableCaption ${baseClassName}`;
    return (_jsx("caption", { className: className.trim(), ...rest, children: _jsx("div", { className: "arkynTableCaptionContent", children: children }) }));
}
export { TableCaption };
