import { AlertDescriptionProps } from "@arkyn/types";
import "./styles.css";

function AlertDescription(props: AlertDescriptionProps) {
  const { className: baseClassName, ...rest } = props;
  const className = `arkynAlertDescription ${baseClassName}`;

  return <div className={className.trim()} {...rest} />;
}

export { AlertDescription };
