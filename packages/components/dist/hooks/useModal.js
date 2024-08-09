import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";
function useModal(key) {
    const contextData = useContext(ModalContext);
    if (Object.entries(contextData).length === 0) {
        throw new Error("useModal must be used within a Provider");
    }
    if (key) {
        const { modalData: contextModalData, modalIsOpen: contextModalIsOpen, openModal: contextOpenModal, closeModal: contextCloseModal, } = contextData;
        const modalIsOpen = contextModalIsOpen(key);
        const modalData = contextModalData(key);
        const openModal = (data) => contextOpenModal(key, data);
        const closeModal = () => contextCloseModal(key);
        return { modalIsOpen, modalData, openModal, closeModal };
    }
    else {
        return contextData;
    }
}
export { useModal };
