import { IconButtonDTO } from "@arkyn/types";
import { Loader } from "lucide-react";

import "./styles.css";

const iconSize = {
  xs: 12,
  sm: 16,
  md: 20,
  lg: 24,
};

function IconButton(args: IconButtonDTO) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    size = "md",
    icon: Icon,
    disabled,
    className,
    ...rest
  } = args;

  return (
    <button
      disabled={disabled || isLoading}
      className={`arkyn_icon_button ${variant} ${scheme} ${size} loading_${isLoading} ${className}`}
      {...rest}
    >
      <div className="spinner">
        <Loader size={iconSize[size]} strokeWidth={2.5} />
      </div>

      <div className={"content " + size}>
        <Icon size={iconSize[size]} strokeWidth={2.5} />
      </div>
    </button>
  );
}

export { IconButton };
