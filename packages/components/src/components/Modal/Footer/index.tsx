import { ModalFooterProps } from "@arkyn/types";
import "./styles.css";

function ModalFooter(args: ModalFooterProps) {
  const { alignment = "right", className: baseClassName, ...rest } = args;
  const className = `arkyn_modal_footer ${alignment} ${baseClassName}`;

  return <footer className={className.trim()} {...rest} />;
}

export { ModalFooter };
