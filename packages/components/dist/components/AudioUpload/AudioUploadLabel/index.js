import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function AudioUploadLabel(props) {
    const { label, showAsterisk } = props;
    const show = showAsterisk ? "asteriskTrue" : "asteriskFalse";
    const className = `arkynAudioUploadLabel ${show}`;
    return _jsx("strong", { className: className.trim(), children: label });
}
export { AudioUploadLabel };
