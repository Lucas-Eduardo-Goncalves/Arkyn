import { Loader2, LucideIcon } from "lucide-react";
import { ButtonHTMLAttributes } from "react";

import { IconRenderer } from "../../services/IconRenderer";
import "./styles.css";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
  loadingText?: string;
  size?: "xs" | "sm" | "md" | "lg";
  variant?: "solid" | "outline" | "ghost" | "invisible";
  scheme?: "primary" | "success" | "warning" | "danger" | "info";
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
};

function Button(args: ButtonProps) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    loadingText,
    size = "md",
    leftIcon,
    rightIcon,
    disabled,
    className: baseClassName = "",
    children,
    ...rest
  } = args;

  const iconSizes = { xs: 12, sm: 16, md: 20, lg: 24 };
  const iconSize = iconSizes[size];

  const loadingClass = isLoading ? "loadingTrue" : "loadingFalse";
  const loadingTextClass = !!loadingText
    ? "loadingTextTrue"
    : "loadingTextFalse";

  const className = `arkynButton ${loadingClass} ${variant} ${scheme} ${size} ${loadingTextClass} ${baseClassName}`;

  return (
    <button className={className} disabled={disabled || isLoading} {...rest}>
      <div className="arkynButtonSpinner">
        <Loader2 size={iconSize} strokeWidth={2.5} />
        {loadingText && loadingText}
      </div>

      <div className="arkynButtonContent">
        <IconRenderer iconSize={iconSize} Icon={leftIcon} />
        {children}
        <IconRenderer iconSize={iconSize} Icon={rightIcon} />
      </div>
    </button>
  );
}

export { Button };
