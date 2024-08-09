import { ModalContextProps } from "@arkyn/types";
type OpenModalProps = (e?: {
    data: any;
}) => void;
declare function useModal<T = any>(): ModalContextProps<T>;
declare function useModal<T = any>(key: string): {
    modalIsOpen: boolean;
    modalData: T;
    openModal: OpenModalProps;
    closeModal: () => void;
};
export { useModal };
//# sourceMappingURL=useModal.d.ts.map