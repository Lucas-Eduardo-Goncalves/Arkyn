import { ModalContextProps } from "@arkyn/types";
type OpenModalProps<T = any> = (data?: T) => void;
declare function useModal<T = any>(): ModalContextProps<T>;
declare function useModal<T = any>(key: string): {
    modalIsOpen: boolean;
    modalData: T;
    openModal: OpenModalProps<T>;
    closeModal: () => void;
};
export { useModal };
//# sourceMappingURL=useModal.d.ts.map