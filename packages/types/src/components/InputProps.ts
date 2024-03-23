import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

type InputBaseTypes =
  | "button"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "image"
  | "month"
  | "number"
  | "password"
  | "range"
  | "reset"
  | "search"
  | "submit"
  | "tel"
  | "text"
  | "time"
  | "url"
  | "week";

type BaseInputProps<T extends string> = {
  isLoading?: boolean;
  isError?: boolean;

  size?: "md" | "lg";
  variant?: "solid" | "outline" | "underline";

  prefix?: string | LucideIcon;
  sufix?: string | LucideIcon;

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  type: T;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type">;

type CurrencyInputProps = Omit<
  BaseInputProps<"currency">,
  "max" | "defaultValue" | "value" | "onChange"
> & {
  defaultValue?: number;
  onChange?: (value: number) => void;
  value?: number;
  max?: number;
  showCents?: boolean;
};

type MaskedInputProps = BaseInputProps<"masked"> & {
  mask: string | (string | RegExp)[];
  alwaysShowMask?: boolean;
  maskChar?: string | null | undefined;
};

type CpfCnpjInputProps = Omit<
  BaseInputProps<"cpf-cpnj">,
  "value" | "defaultValue"
> & {
  defaultValue?: string;
  value?: string;
};

type SimpleInputProps = BaseInputProps<InputBaseTypes>;

type InputProps =
  | CurrencyInputProps
  | SimpleInputProps
  | MaskedInputProps
  | CpfCnpjInputProps;

export type {
  BaseInputProps,
  CpfCnpjInputProps,
  CurrencyInputProps,
  InputProps,
  MaskedInputProps,
  SimpleInputProps,
};
