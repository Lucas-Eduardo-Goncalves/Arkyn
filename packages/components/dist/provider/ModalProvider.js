import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { ModalContext } from "../context/ModalContext";
function ModalProvider({ children }) {
    const [openedModals, setOpenedModals] = useState([]);
    function modalIsOpen(key) {
        return !!openedModals.some((modal) => modal.key === key);
    }
    function modalData(key) {
        return openedModals.find((modal) => modal.key === key)?.data;
    }
    function openModal(key, data) {
        setOpenedModals([...openedModals, { key, data }]);
    }
    function closeModal(key) {
        setOpenedModals(openedModals.filter((modal) => modal.key !== key));
    }
    return (_jsx(ModalContext.Provider, { value: { modalIsOpen, modalData, openModal, closeModal }, children: children }));
}
export { ModalProvider };
