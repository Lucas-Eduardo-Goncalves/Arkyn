import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function FileUploadLabel(props) {
    const { label, showAsterisk } = props;
    const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
    const className = `arkynFileUploadLabel ${show}`;
    return _jsx("strong", { className: className.trim(), children: label });
}
export { FileUploadLabel };
