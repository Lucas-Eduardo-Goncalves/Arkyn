import { ButtonProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import "./styles.css";

const iconSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
};

function Button(args: ButtonProps) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    disabled,
    className: baseClassName = "",
    children,
    ...rest
  } = args;

  const className = `arkyn_button ${variant} ${scheme} ${size} loading_${isLoading} ${baseClassName}`;

  return (
    <button
      disabled={disabled || isLoading}
      className={className.trim()}
      {...rest}
    >
      <div className="spinner">
        <Loader2 size={iconSize[size]} strokeWidth={2.5} />
      </div>

      <div className={"content " + size}>
        {LeftIcon && <LeftIcon size={iconSize[size]} strokeWidth={2.5} />}
        {children}
        {RightIcon && <RightIcon size={iconSize[size]} strokeWidth={2.5} />}
      </div>
    </button>
  );
}

export { Button };
