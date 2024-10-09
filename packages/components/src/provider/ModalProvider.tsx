import { ModalProviderProps, OpenedModals } from "@arkyn/types";
import { useState } from "react";

import { ModalContext } from "../context/ModalContext";

function ModalProvider(args: ModalProviderProps) {
  const { children = false } = args;
  const [openedModals, setOpenedModals] = useState<OpenedModals>([]);

  function modalIsOpen(key: string) {
    return !!openedModals.some((modal) => modal.key === key);
  }

  function modalData(key: string) {
    return openedModals.find((modal) => modal.key === key)?.data;
  }

  function openModal(key: string, data?: any) {
    const alreadyExist = modalIsOpen(key);
    if (alreadyExist) {
      setOpenedModals((old) => {
        const filtered = old.filter((modal) => modal.key !== key);
        return [...filtered, { key, data }];
      });
    } else setOpenedModals([...openedModals, { key, data }]);
  }

  function closeModal(key: string) {
    setOpenedModals(openedModals.filter((modal) => modal.key !== key));
  }

  function closeAll() {
    setOpenedModals([]);
  }

  return (
    <ModalContext.Provider
      value={{ modalIsOpen, modalData, openModal, closeModal, closeAll }}
    >
      {children}
    </ModalContext.Provider>
  );
}

export { ModalProvider };
