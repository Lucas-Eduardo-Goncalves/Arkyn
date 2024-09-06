import { ModalHeaderProps } from "@arkyn/types";

import { X } from "lucide-react";
import { useContext } from "react";

import { drawerContext } from "../Container";
import "./styles.css";

function DrawerHeader(props: ModalHeaderProps) {
  const {
    showCloseButton = true,
    className: baseClassName,
    children,
    ...rest
  } = props;

  const { makeInvisible } = useContext(drawerContext);
  const className = `arkynDrawerHeader ${baseClassName}`;

  return (
    <header className={className.trim()} {...rest}>
      {children}

      {showCloseButton && (
        <button
          className="arkynDrawerHeaderCloseButton"
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
