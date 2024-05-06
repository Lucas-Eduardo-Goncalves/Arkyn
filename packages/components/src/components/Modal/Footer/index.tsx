import type { ModalFooterProps } from "@arkyn/types";
import * as React from "react";

import "./styles.css";

function Footer(args: ModalFooterProps) {
  const { alignment = "right", className: baseClassName, ...rest } = args;
  const className = `arkyn_modal_footer ${alignment} ${baseClassName}`;

  return <footer className={className.trim()} {...rest} />;
}

export { Footer };
