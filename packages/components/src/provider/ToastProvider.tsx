import { ToastProps, ToastProviderProps } from "@arkyn/types";
import toast, { Toaster } from "react-hot-toast";

import { ToastContext } from "../context/ToastContext";
import { Toast } from "../components/Toast";

function ToastProvider({ children }: ToastProviderProps) {
  function showToast(props: ToastProps) {
    toast((t) => <Toast {...props} />, {
      style: {
        padding: 0,
        background: "transparent",
        boxShadow: "none",
      },
    });
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toaster position="top-right" />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider };
