import type { ButtonHTMLAttributes } from "react";

type SwitchProps = {
  size?: "sm" | "md" | "lg";
  defaultChecked?: boolean;
  checked?: boolean;
  value?: string;
  name: string;
  onCheck?: (value: string) => void;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "onChange" | "defaultValue" | "onCheck" | "value"
>;

export type { SwitchProps };
