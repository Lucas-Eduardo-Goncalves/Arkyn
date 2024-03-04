import { HTMLAttributes } from "react";

type DividerDTO = HTMLAttributes<HTMLDivElement> & {
  orientation?: "horizontal" | "vertical";
};

export type { DividerDTO };
