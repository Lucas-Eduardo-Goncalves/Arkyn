import { ModalContextProps } from "@arkyn/types";
type OpenModalProps = (e?: {
    data: any;
}) => void;
declare function useModal(): ModalContextProps;
declare function useModal(key: string): {
    modalIsOpen: boolean;
    modalData: any;
    openModal: OpenModalProps;
    closeModal: () => void;
};
export { useModal };
//# sourceMappingURL=useModal.d.ts.map