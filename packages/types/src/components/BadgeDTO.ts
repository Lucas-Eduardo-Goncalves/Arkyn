import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

type BadgeDTO = HTMLAttributes<HTMLDivElement> & {
  size?: "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  scheme?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

export type { BadgeDTO };
