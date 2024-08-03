import { IconButtonProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import "./styles.css";

function IconButton(args: IconButtonProps) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    size = "md",
    icon: Icon,
    disabled,
    className: baseClassName = "",
    ...rest
  } = args;

  const iconSize = { xs: 12, sm: 16, md: 20, lg: 24 };
  const className = `arkyn_icon_button ${variant} ${scheme} ${size} loading_${isLoading} ${baseClassName}`;

  return (
    <button
      disabled={disabled || isLoading}
      className={className.trim()}
      {...rest}
    >
      <div className="arkyn_icon_button-spinner">
        <Loader2 size={iconSize[size]} strokeWidth={2.5} />
      </div>

      <div className="arkyn_icon_button-content">
        <Icon size={iconSize[size]} strokeWidth={2.5} />
      </div>
    </button>
  );
}

export { IconButton };
