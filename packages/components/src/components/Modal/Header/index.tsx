import type { ModalHeaderProps } from "@arkyn/types";

import { X } from "lucide-react";
import { useContext } from "react";
import * as React from "react";

import { modalContext } from "../Container";
import "./styles.css";

function Header(args: ModalHeaderProps) {
  const { showCloseButton, className: baseClassName, children, ...rest } = args;
  const { makeInvisible } = useContext(modalContext);

  const show = showCloseButton ? "show-close" : "";
  const className = `arkyn_modal_header ${show} ${baseClassName}`;

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
