import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Toaster, toast } from "sonner";
import { ToastContext } from "../context/ToastContext";
function ToastProvider({ children }) {
    function successToast(message) {
        toast.success(message);
    }
    function infoToast(message) {
        toast.info(message);
    }
    function errorToast(message) {
        toast.error(message);
    }
    function warningToast(message) {
        toast.warning(message);
    }
    return (_jsxs(ToastContext.Provider, { value: { errorToast, warningToast, successToast, infoToast }, children: [_jsx(Toaster, { richColors: true }), children] }));
}
export { ToastProvider };
