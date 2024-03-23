import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

type BaseInputProps = {
  isLoading?: boolean;
  isError?: boolean;

  size?: "md" | "lg";
  variant?: "solid" | "outline" | "underline";

  prefix?: string | LucideIcon;
  sufix?: string | LucideIcon;

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix">;

type CurrencyInputProps = Omit<
  BaseInputProps,
  "max" | "defaultValue" | "value" | "onChange"
> & {
  defaultValue?: number;
  onChange?: (value: number) => void;
  value?: number;
  type: "currency";
  max?: number;
  showCents?: boolean;
};

type InputProps = BaseInputProps | CurrencyInputProps;

export type { BaseInputProps, CurrencyInputProps, InputProps };
