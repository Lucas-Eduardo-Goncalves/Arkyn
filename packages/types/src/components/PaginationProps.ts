import type { HTMLAttributes } from "react";

type PaginationProps = {
  scope?: string;
  totalCountRegisters: number;
  siblingsCount?: number;
} & HTMLAttributes<HTMLDivElement>;

export type { PaginationProps };
