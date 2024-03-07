import { HTMLAttributes } from "react";

type ModalContainerDTO = HTMLAttributes<HTMLElement> & {
  isVisibled: boolean;
  makeInvisible: () => void;
};

type ModalHeaderDTO = HTMLAttributes<HTMLElement> & {
  showCloseButton?: boolean;
};

type ModalFooterDTO = HTMLAttributes<HTMLElement> & {
  alignment?: "left" | "center" | "right" | "between" | "around";
};

export type { ModalContainerDTO, ModalHeaderDTO, ModalFooterDTO };
