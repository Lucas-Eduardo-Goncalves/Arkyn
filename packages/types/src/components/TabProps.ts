import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  value: string;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "value" | "type"
>;

type TabContainerProps = {
  children: ReactNode;
  defaultActive?: string;
  onClick?: (index: string) => void;
} & Omit<HTMLAttributes<HTMLElement>, "onClick" | "children" | "ref">;

export type { TabButtonProps, TabContainerProps };
