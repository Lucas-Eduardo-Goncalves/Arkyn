import type { ReactNode } from "react";

type ModalContextProps = {
  modalIsOpen(key: string): boolean;
  modalData(key: string): any;
  openModal(key: string, data?: any): void;
  closeModal(key: string): void;
};

type OpenedModals = {
  key: string;
  data?: any;
}[];

type ModalProviderProps = {
  children: ReactNode;
};

export type { ModalContextProps, OpenedModals, ModalProviderProps };
