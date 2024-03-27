import { ButtonProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import { buildButtonConfig } from "../../config/buildButtonConfig";
import "./styles.css";

function Button(args: ButtonProps) {
  const { size, leftIcon, rightIcon, iconSize, children, ...rest } =
    buildButtonConfig(args);

  return (
    <button {...rest}>
      <div className="spinner">
        <Loader2 size={iconSize} strokeWidth={2.5} />
      </div>

      <div className={`content ${size}`}>
        {leftIcon}
        {children}
        {rightIcon}
      </div>
    </button>
  );
}

export { Button };
