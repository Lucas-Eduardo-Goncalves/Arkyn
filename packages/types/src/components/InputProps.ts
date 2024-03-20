import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

type BaseInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix"
>;

type InputProps = BaseInputProps & {
  isLoading?: boolean;
  isError?: boolean;

  size?: "md" | "lg";
  variant?: "solid" | "outline" | "underline";

  prefix?: string | LucideIcon;
  sufix?: string | LucideIcon;

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

export type { InputProps };
