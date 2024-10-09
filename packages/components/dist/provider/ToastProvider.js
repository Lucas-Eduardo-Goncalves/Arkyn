import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toast, { Toaster } from "react-hot-toast";
import { ToastContext } from "../context/ToastContext";
import { Toast } from "../components/Toast";
function ToastProvider({ children }) {
    function showToast(props) {
        toast((t) => _jsx(Toast, { ...props }), {
            style: {
                padding: 0,
                background: "transparent",
                boxShadow: "none",
            },
        });
    }
    return (_jsxs(ToastContext.Provider, { value: { showToast }, children: [_jsx(Toaster, { position: "top-right" }), children] }));
}
export { ToastProvider };
