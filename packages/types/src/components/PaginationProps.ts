import type { HTMLAttributes } from "react";

type PaginationProps = {
  scope?: string;
  pageKey?: string;
  perPageKey?: string;
  siblingsCount?: number;
  totalCountRegisters: number;
} & HTMLAttributes<HTMLDivElement>;

export type { PaginationProps };
