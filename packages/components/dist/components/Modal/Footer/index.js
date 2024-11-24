import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function ModalFooter(args) {
    const { alignment = "right", className: baseClassName, ...rest } = args;
    const className = `arkynModalFooter ${alignment} ${baseClassName}`;
    return _jsx("footer", { className: className.trim(), ...rest });
}
export { ModalFooter };
