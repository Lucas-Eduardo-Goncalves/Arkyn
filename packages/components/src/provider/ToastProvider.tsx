import { ToastProps, ToastProviderProps } from "@arkyn/types";
import toast, { Toaster } from "react-hot-toast";

import { ToastContext } from "../context/ToastContext";

function ToastProvider({ children }: ToastProviderProps) {
  function showToast(props: ToastProps) {
    switch (props.type) {
      case "success":
        return toast.success(props.message);
      case "danger":
        return toast.error(props.message);
    }
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toaster
        position="top-right"
        containerStyle={{ zIndex: 999999999999999 }}
      />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider };
