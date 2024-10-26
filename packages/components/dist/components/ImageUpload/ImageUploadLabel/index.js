import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function ImageUploadLabel(props) {
    const { label, showAsterisk } = props;
    const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
    const className = `arkynImageUploadLabel ${show}`;
    return _jsx("strong", { className: className.trim(), children: label });
}
export { ImageUploadLabel };
