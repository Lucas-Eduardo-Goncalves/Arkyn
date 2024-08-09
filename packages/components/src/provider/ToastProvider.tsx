import { ToastProps, ToastProviderProps } from "@arkyn/types";
import { Toaster, toast } from "sonner";

import { ToastContext } from "../context/ToastContext";
import { Toast } from "../components/Toast";

function ToastProvider({ children }: ToastProviderProps) {
  function showToast(data: ToastProps) {
    toast.custom((ars) => <Toast {...data} />);
  }

  return (
    <ToastContext.Provider value={{ showToast }}>
      <Toaster />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider };
