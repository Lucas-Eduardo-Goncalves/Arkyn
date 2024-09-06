import { ModalFooterProps } from "@arkyn/types";
import "./styles.css";

function ModalFooter(args: ModalFooterProps) {
  const { alignment = "right", className: baseClassName, ...rest } = args;
  const className = `arkynModalFooter ${alignment} ${baseClassName}`;

  return <footer className={className.trim()} {...rest} />;
}

export { ModalFooter };
