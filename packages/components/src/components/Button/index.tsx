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

  const className = `arkyn_button loading_text_${!!loadingText} ${variant} ${scheme} ${size} loading_${isLoading} ${baseClassName}`;

  return (
    <button className={className} disabled={disabled || isLoading} {...rest}>
      <div className="arkyn_button-spinner">
        <Loader2 size={iconSize} strokeWidth={2.5} />
        {loadingText && loadingText}
      </div>

      <div className="arkyn_button-content">
        {GenerateIcon(iconSize, leftIcon)}
        {children}
        {GenerateIcon(iconSize, rightIcon)}
      </div>
    </button>
  );
}

export { Button };
