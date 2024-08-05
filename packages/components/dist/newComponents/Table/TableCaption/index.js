import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function TableCaption(args) {
    const { className: baseClassName, children, ...rest } = args;
    const className = `arkyn_table_caption ${baseClassName}`;
    return (_jsx("caption", { className: className.trim(), ...rest, children: _jsx("div", { className: "arkyn_table_caption-content", children: children }) }));
}
export { TableCaption };
