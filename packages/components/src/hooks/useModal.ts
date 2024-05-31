import { useContext } from "react";
import { ModalContext } from "../context/ModalContext";

type OpenModalProps = (e?: { data: any }) => void;

function useModal(key: string) {
  const contextData = useContext(ModalContext);

  if (Object.entries(contextData).length === 0) {
    throw new Error("useModal must be used within a Provider");
  }

  const {
    modalData: contextModalData,
    modalIsOpen: contextModalIsOpen,
    openModal: contextOpenModal,
    closeModal: contextCloseModal,
  } = contextData;

  const modalIsOpen = contextModalIsOpen(key);
  const modalData = contextModalData(key);

  const openModal: OpenModalProps = (data) => contextOpenModal(key, data?.data);
  const closeModal = () => contextCloseModal(key);

  return { modalIsOpen, modalData, openModal, closeModal };
}

export { useModal };
