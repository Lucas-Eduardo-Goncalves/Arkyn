import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./styles.css";
function Toast({ message, type, title }) {
    return (_jsxs("div", { className: "arkyn_toast " + type, children: [title && _jsx("strong", { children: title }), _jsx("strong", { children: "Sucesso" }), _jsx("p", { children: message })] }));
}
export { Toast };
