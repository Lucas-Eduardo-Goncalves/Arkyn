import { ModalHeaderProps } from "@arkyn/types";
import { X } from "lucide-react";
import { useContext } from "react";

import { modalContext } from "../Container";
import "./styles.css";

function ModalHeader(args: ModalHeaderProps) {
  const {
    showCloseButton = true,
    className: baseClassName,
    children,
    ...rest
  } = args;

  const { makeInvisible } = useContext(modalContext);
  const className = `arkyn_modal_header ${baseClassName}`;

  return (
    <header className={className.trim()} {...rest}>
      {children}

      {showCloseButton && (
        <button
          type="button"
          onClick={makeInvisible}
          aria-label="Close modal button"
          className="arkyn_modal_header-close_button"
        >
          <X size={24} />
        </button>
      )}
    </header>
  );
}

export { ModalHeader };
