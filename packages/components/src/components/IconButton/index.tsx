import { IconButtonProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import "./styles.css";

function IconButton(props: IconButtonProps) {
  const {
    isLoading = false,
    scheme = "primary",
    variant = "solid",
    size = "md",
    icon: Icon,
    disabled,
    className: baseClassName = "",
    ...rest
  } = props;

  const iconSize = { xs: 12, sm: 16, md: 20, lg: 24 };
  const loading = isLoading ? "loadingTrue" : "loadingFalse";
  const className = `arkynIconButton ${variant} ${scheme} ${size} ${loading} ${baseClassName}`;

  return (
    <button
      disabled={disabled || isLoading}
      className={className.trim()}
      {...rest}
    >
      <div className="arkynIconButtonSpinner">
        <Loader2 size={iconSize[size]} strokeWidth={2.5} />
      </div>

      <div className="arkynIconButtonContent">
        <Icon size={iconSize[size]} strokeWidth={2.5} />
      </div>
    </button>
  );
}

export { IconButton };
