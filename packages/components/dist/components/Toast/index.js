import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { CheckCircle2, Info, XCircle } from "lucide-react";
import "./styles.css";
function Toast(props) {
    const { message, type } = props;
    const className = `arkynToast ${type}}`;
    function Icon() {
        switch (type) {
            case "success":
                return _jsx(CheckCircle2, {});
            case "danger":
                return _jsx(XCircle, {});
            default:
                return _jsx(Info, {});
        }
    }
    return (_jsxs("div", { className: className, children: [_jsxs("div", { children: [_jsx("div", { className: "bg" }), _jsx(Icon, {})] }), _jsx("p", { children: _jsx("span", { children: message }) })] }));
}
export { Toast };
