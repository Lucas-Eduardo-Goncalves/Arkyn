import { ButtonProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import { GenerateIcon } from "../../services";
import "./styles.css";

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
        {GenerateIcon(iconSize, leftIcon)}
        {children}
        {GenerateIcon(iconSize, rightIcon)}
      </div>
    </button>
  );
}

export { Button };
