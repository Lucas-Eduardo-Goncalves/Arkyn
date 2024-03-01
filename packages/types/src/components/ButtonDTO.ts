import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type ButtonDTO = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "invisible";
  scheme?: "primary" | "success" | "warning" | "danger";

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

export type { ButtonDTO };
