import type { ReactNode } from "react";
import type { ToastProps } from "../components/ToastProps";

type ToastContextProps = {
  showToast(toast: ToastProps): void;
};

type ToastProviderProps = {
  children: ReactNode;
};

export type { ToastContextProps, ToastProviderProps };
