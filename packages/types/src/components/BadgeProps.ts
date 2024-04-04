import type { LucideIcon } from "lucide-react";
import type { HTMLAttributes } from "react";

type BaseBadgeProps = HTMLAttributes<HTMLDivElement>;

type BadgeProps = BaseBadgeProps & {
  size?: "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  scheme?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";

  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

export type { BadgeProps };
