import { AlertContentProps } from "@arkyn/types";
import "./styles.css";

function AlertContent(props: AlertContentProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkynAlertContent ${baseClassName}`;

  return <div className={className.trim()} {...rest} />;
}

export { AlertContent };
