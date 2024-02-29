import { ButtonDTO } from "@arkyn/types";
import { Loader } from "lucide-react";

import "./_global.css";
import "./_loading.css";
import "./_size.css";
import "./_variants.css";

const iconSize = { xs: 12, sm: 16, md: 20, lg: 24 };

function Button(args: ButtonDTO) {
  const {
    isLoading = false,
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
      className={`arkyn_button arkyn_button_${variant} arkyn_button_${size} arkyn_button_loading_${isLoading} ${className}`}
      {...rest}
    >
      <div className="arkyn_button_spinner">
        <Loader size={iconSize[size]} strokeWidth={2.5} />
      </div>

      <div className={`arkyn_button_content arkyn_button_content_${size}`}>
        {LeftIcon && <LeftIcon size={iconSize[size]} strokeWidth={2.5} />}
        {children}
        {RightIcon && <RightIcon size={iconSize[size]} strokeWidth={2.5} />}
      </div>
    </button>
  );
}

export { Button };
