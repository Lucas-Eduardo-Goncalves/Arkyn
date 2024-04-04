import type { HTMLAttributes } from "react";

type BaseModalProps = HTMLAttributes<HTMLElement>;

type ModalContainerProps = BaseModalProps & {
  isVisibled: boolean;
  makeInvisible: () => void;
};

type ModalHeaderProps = BaseModalProps & {
  showCloseButton?: boolean;
};

type ModalFooterProps = BaseModalProps & {
  alignment?: "left" | "center" | "right" | "between" | "around";
};

export type { ModalContainerProps, ModalHeaderProps, ModalFooterProps };
