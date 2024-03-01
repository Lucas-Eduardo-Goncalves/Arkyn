import { ButtonDTO } from "@arkyn/types";
import { Loader } from "lucide-react";

import "./styles.css";

const iconSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
};

function Button(args: ButtonDTO) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    size = "md",
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    disabled,
    className,
    children,
    ...rest
  } = args;

  return (
    <button
      disabled={disabled || isLoading}
      className={`arkyn_button ${variant} ${scheme} ${size} loading_${isLoading} ${className}`}
      {...rest}
    >
      <div className="spinner">
        <Loader size={iconSize[size]} strokeWidth={2.5} />
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
