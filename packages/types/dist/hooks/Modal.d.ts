import type { ReactNode } from "react";
type ModalContextProps<T = any> = {
    modalIsOpen(key: string): boolean;
    modalData(key: string): T;
    openModal(key: string, data?: T): void;
    closeModal(key: string): void;
    closeAll(): void;
};
type OpenedModals = {
    key: string;
    data?: any;
}[];
type ModalProviderProps = {
    children: ReactNode;
    enableModalAutomation?: boolean;
};
export type { ModalContextProps, OpenedModals, ModalProviderProps };
//# sourceMappingURL=Modal.d.ts.map