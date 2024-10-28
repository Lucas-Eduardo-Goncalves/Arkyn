import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import toast, { Toaster } from "react-hot-toast";
import { ToastContext } from "../context/ToastContext";
function ToastProvider({ children }) {
    function showToast(props) {
        switch (props.type) {
            case "success":
                return toast.success(props.message, {
                    style: {
                        background: "#10B981",
                        color: "#ffffff",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: 600,
                    },
                    iconTheme: {
                        primary: "#059669",
                        secondary: "#ffffff",
                    },
                });
            case "danger":
                return toast.error(props.message, {
                    style: {
                        background: "#E11D48",
                        color: "#ffffff",
                        padding: "12px 16px",
                        fontSize: "14px",
                        fontWeight: 600,
                    },
                    iconTheme: {
                        primary: "#BE123C",
                        secondary: "#ffffff",
                    },
                });
        }
    }
    return (_jsxs(ToastContext.Provider, { value: { showToast }, children: [_jsx(Toaster, { position: "top-right", containerStyle: { zIndex: 999999999999999 } }), children] }));
}
export { ToastProvider };
