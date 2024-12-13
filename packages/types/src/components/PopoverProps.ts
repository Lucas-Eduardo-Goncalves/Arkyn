import type { ReactNode } from "react";

type OrientationProps =
  | "bottomLeft"
  | "bottomRight"
  | "topLeft"
  | "topRight"
  | "top"
  | "left"
  | "bottom"
  | "right";

type PopoverProps = {
  children: ReactNode;
  button: ReactNode;
  closeOnClick?: boolean;
  orientation?: OrientationProps;
  className?: string;
};

export type { PopoverProps };
