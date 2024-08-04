import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";
import "./styles.css";
function Toast({ message, title, type, size = "lg" }) {
    const className = `arkyn_toast ${type} ${size}`;
    function Icon() {
        switch (type) {
            case "info":
                return _jsx(Info, {});
            case "success":
                return _jsx(CheckCircle2, {});
            case "danger":
                return _jsx(XCircle, {});
            case "warning":
                return _jsx(AlertCircle, {});
            default:
                return _jsx(Info, {});
        }
    }
    return (_jsxs("aside", { className: className, children: [_jsxs("div", { children: [_jsx("div", { className: "bg" }), _jsx(Icon, {})] }), _jsxs("p", { children: [_jsx("strong", { title: title, children: title }), _jsx("span", { children: message })] })] }));
}
export { Toast };
