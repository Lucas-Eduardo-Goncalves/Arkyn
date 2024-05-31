import { ToastProviderProps } from "@arkyn/types";
import { Toaster, toast } from "sonner";

import { ToastContext } from "../context/ToastContext";

function ToastProvider({ children }: ToastProviderProps) {
  function successToast(message: string) {
    toast.success(message);
  }

  function infoToast(message: string) {
    toast.info(message);
  }

  function errorToast(message: string) {
    toast.error(message);
  }

  function warningToast(message: string) {
    toast.warning(message);
  }

  return (
    <ToastContext.Provider
      value={{ errorToast, warningToast, successToast, infoToast }}
    >
      <Toaster richColors />
      {children}
    </ToastContext.Provider>
  );
}

export { ToastProvider };
