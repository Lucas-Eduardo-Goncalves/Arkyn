import { ModalProviderProps, OpenedModals } from "@arkyn/types";
import { useState } from "react";

import { ModalContext } from "../context/ModalContext";

function ModalProvider({ children }: ModalProviderProps) {
  const [openedModals, setOpenedModals] = useState<OpenedModals>([]);

  function modalIsOpen(key: string) {
    return !!openedModals.some((modal) => modal.key === key);
  }

  function modalData(key: string) {
    return openedModals.find((modal) => modal.key === key)?.data;
  }

  function openModal(key: string, data?: any) {
    setOpenedModals([...openedModals, { key, data }]);
  }

  function closeModal(key: string) {
    setOpenedModals(openedModals.filter((modal) => modal.key !== key));
  }

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, modalData, openModal, closeModal }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider };
