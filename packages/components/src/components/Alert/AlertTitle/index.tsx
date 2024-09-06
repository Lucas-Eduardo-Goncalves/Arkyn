import { AlertTitleProps } from "@arkyn/types";
import "./styles.css";

function AlertTitle(props: AlertTitleProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkynAlertTitle ${baseClassName}`;

  return <div className={className.trim()} {...rest} />;
}

export { AlertTitle };
