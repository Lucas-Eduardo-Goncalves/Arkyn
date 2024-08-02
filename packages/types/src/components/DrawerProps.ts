import type { HTMLAttributes } from "react";

type BaseDrawerProps = HTMLAttributes<HTMLElement>;

type DrawerContainerProps = BaseDrawerProps & {
  isVisibled: boolean;
  makeInvisible: () => void;
  orientation?: "left" | "right";
};

type DrawerHeaderProps = BaseDrawerProps & {
  showCloseButton?: boolean;
};

export type { DrawerContainerProps, DrawerHeaderProps };
