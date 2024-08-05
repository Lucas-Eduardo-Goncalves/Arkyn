import type { HTMLAttributes, TableHTMLAttributes } from "react";

type TableBodyProps = HTMLAttributes<HTMLTableSectionElement>;
type TableCaptionProps = HTMLAttributes<HTMLElement>;
type TableContainerProps = TableHTMLAttributes<HTMLTableElement>;
type TableFooterProps = HTMLAttributes<HTMLTableSectionElement>;
type TableHeaderProps = HTMLAttributes<HTMLTableSectionElement>;

export type {
  TableBodyProps,
  TableCaptionProps,
  TableContainerProps,
  TableFooterProps,
  TableHeaderProps,
};
