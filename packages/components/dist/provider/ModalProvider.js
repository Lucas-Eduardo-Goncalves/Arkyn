import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ModalContext } from "../context/ModalContext";
function ModalProvider(args) {
    const { children = false } = args;
    const [openedModals, setOpenedModals] = useState([]);
    function modalIsOpen(key) {
        return !!openedModals.some((modal) => modal.key === key);
    }
    function modalData(key) {
        return openedModals.find((modal) => modal.key === key)?.data;
    }
    function openModal(key, data) {
        const alreadyExist = modalIsOpen(key);
        if (alreadyExist) {
            setOpenedModals((old) => {
                const filtered = old.filter((modal) => modal.key !== key);
                return [...filtered, { key, data }];
            });
        }
        else
            setOpenedModals([...openedModals, { key, data }]);
    }
    function closeModal(key) {
        setOpenedModals(openedModals.filter((modal) => modal.key !== key));
    }
    function closeAll() {
        setOpenedModals([]);
    }
    return (_jsx(ModalContext.Provider, { value: { modalIsOpen, modalData, openModal, closeModal, closeAll }, children: children }));
}
export { ModalProvider };
