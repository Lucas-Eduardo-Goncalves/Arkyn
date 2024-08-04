import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster, toast } from "sonner";
import { ToastContext } from "../context/ToastContext";
import { Toast } from "../newComponents/Toast";
function ToastProvider({ children }) {
    function showToast(data) {
        toast.custom((ars) => _jsx(Toast, { ...data }));
    }
    return (_jsxs(ToastContext.Provider, { value: { showToast }, children: [_jsx(Toaster, {}), children] }));
}
export { ToastProvider };
