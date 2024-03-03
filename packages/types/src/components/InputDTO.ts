import { LucideIcon } from "lucide-react";
import { InputHTMLAttributes } from "react";

type InputDTO = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size" | "prefix"
> & {
  isLoading?: boolean;
  inError?: boolean;

  size?: "md" | "lg";
  variant?: "solid" | "outline" | "underline";

  prefix?: string | LucideIcon;
  sufix?: string | LucideIcon;

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

export type { InputDTO };
