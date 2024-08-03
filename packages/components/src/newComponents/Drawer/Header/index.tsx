import { ModalHeaderProps } from "@arkyn/types";

import { X } from "lucide-react";
import { useContext } from "react";

import { drawerContext } from "../Container";
import "./styles.css";

function DrawerHeader(args: ModalHeaderProps) {
  const { showCloseButton, className: baseClassName, children, ...rest } = args;
  const { makeInvisible } = useContext(drawerContext);

  const className = `arkyn_drawer_header ${baseClassName}`;

  return (
    <header className={className.trim()} {...rest}>
      {children}

      {showCloseButton && (
        <button
          className="arkyn_drawer_header:close_button"
          type="button"
          onClick={makeInvisible}
          aria-label="Close drawer"
        >
          <X size={24} />
        </button>
      )}
    </header>
  );
}

export { DrawerHeader };
