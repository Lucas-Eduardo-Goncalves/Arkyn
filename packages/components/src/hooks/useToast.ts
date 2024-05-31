import { useContext } from "react";
import { ToastContext } from "../context/ToastContext";

function useToast() {
  const contextData = useContext(ToastContext);

  if (Object.entries(contextData).length === 0) {
    throw new Error("useToast must be used within a Provider");
  }

  return contextData;
}

export { useToast };
