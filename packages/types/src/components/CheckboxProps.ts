import type { ButtonHTMLAttributes } from "react";

type CheckboxProps = {
  isError?: boolean;

  size?: "md" | "lg" | "sm";

  name: string;
  value?: string;

  checked?: boolean;
  defaultChecked?: boolean;
  onCheck?: (value: string) => void;
} & Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  | "size"
  | "prefix"
  | "type"
  | "name"
  | "defaultValue"
  | "value"
  | "onChange"
  | "onSelect"
  | "onClick"
>;

export type { CheckboxProps };
