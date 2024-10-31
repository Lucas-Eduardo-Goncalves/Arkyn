import type { HTMLAttributes } from "react";
type PaginationProps = {
    scope?: string;
    pageKey?: string;
    perPageKey?: string;
    siblingsCount?: number;
    totalCountRegisters: number;
    currentPage?: number;
    registerPerPage?: number;
} & HTMLAttributes<HTMLDivElement>;
export type { PaginationProps };
//# sourceMappingURL=PaginationProps.d.ts.map