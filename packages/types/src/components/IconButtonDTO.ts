import { LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

type IconButtonDTO = Omit<
  ButtonHTMLAttributes<HTMLButtonElement>,
  "children" | "aria-label"
> & {
  icon: LucideIcon;
  "aria-label": string;

  isLoading?: boolean;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "invisible";
  scheme?: "primary" | "success" | "warning" | "danger";
};

export type { IconButtonDTO };
