import type { ReactNode } from "react";

type ToastContextProps = {
  errorToast(message: string): void;
  warningToast(message: string): void;
  successToast(message: string): void;
  infoToast(message: string): void;
};

type ToastProviderProps = {
  children: ReactNode;
};

export type { ToastContextProps, ToastProviderProps };
