import { LucideIcon } from "lucide-react";
import { HTMLAttributes } from "react";

import { IconRenderer } from "../../services/IconRenderer";
import "./styles.css";

type BadgeProps = HTMLAttributes<HTMLDivElement> & {
  size?: "md" | "lg";
  variant?: "solid" | "outline" | "ghost";
  scheme?: "primary" | "secondary" | "success" | "warning" | "danger" | "info";
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

function Badge(args: BadgeProps) {
  const {
    variant = "ghost",
    scheme = "primary",
    size = "md",
    leftIcon,
    rightIcon,
    className: baseClassName = "",
    children,
    ...rest
  } = args;

  const iconSizes = { md: 12, lg: 14 };
  const iconSize = iconSizes[size];

  const className = `arkynBadge ${variant} ${scheme} ${size} ${baseClassName}`;

  return (
    <div className={className.trim()} {...rest}>
      <IconRenderer iconSize={iconSize} Icon={leftIcon} />
      {children}
      <IconRenderer iconSize={iconSize} Icon={rightIcon} />
    </div>
  );
}

export { Badge };
