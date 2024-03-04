import { HTMLAttributes, ReactNode } from "react";

type TooltipDTO = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
  text: string;
  children: ReactNode;
  orientation?: "top" | "right" | "bottom" | "left";
  size?: "md" | "lg";
};

export type { TooltipDTO };
