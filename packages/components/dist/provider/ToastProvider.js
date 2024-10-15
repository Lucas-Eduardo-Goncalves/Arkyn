import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toast, { Toaster } from "react-hot-toast";
import { ToastContext } from "../context/ToastContext";
function ToastProvider({ children }) {
    function showToast(props) {
        switch (props.type) {
            case "success":
                return toast.success(props.message);
            case "danger":
                return toast.error(props.message);
        }
    }
    return (_jsxs(ToastContext.Provider, { value: { showToast }, children: [_jsx(Toaster, { position: "top-right", containerStyle: { zIndex: 999999999999999 } }), children] }));
}
export { ToastProvider };
