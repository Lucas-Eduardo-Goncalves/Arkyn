import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

type TabButtonProps = {
  children: ReactNode;
  value: string;
  defaultActive?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "value">;

type TabContainerProps = {
  children: ReactNode;
  onClick?: (index: string) => void;
} & Omit<HTMLAttributes<HTMLElement>, "onClick" | "children" | "ref">;

export type { TabButtonProps, TabContainerProps };
