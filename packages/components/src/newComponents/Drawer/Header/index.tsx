import type { ModalHeaderProps } from "@arkyn/types";

import { X } from "lucide-react";
import { useContext } from "react";

import { drawerContext } from "../Container";
import "./styles.css";

function Header(args: ModalHeaderProps) {
  const { showCloseButton, className: baseClassName, children, ...rest } = args;
  const { makeInvisible } = useContext(drawerContext);

  const show = showCloseButton ? "show-close" : "";
  const className = `arkyn_drawer_header ${show} ${baseClassName}`;

  return (
    <header className={className.trim()} {...rest}>
      {children}
      <button type="button" onClick={makeInvisible}>
        <X size={24} />
      </button>
    </header>
  );
}

export { Header };
