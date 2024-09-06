import { AlertIconProps } from "@arkyn/types";
import { AlertTriangle, CheckCircle2, Info, XCircle } from "lucide-react";

import { useAlertContainer } from "../AlertContainer";
import "./styles.css";

function AlertIcon(props: AlertIconProps) {
  const { className: baseClassName, ...rest } = props;
  const { schema } = useAlertContainer();

  const className = `arkynAlertIcon ${schema} ${baseClassName}`;

  switch (schema) {
    case "success":
      return <CheckCircle2 className={className} {...rest} />;
    case "danger":
      return <XCircle className={className} {...rest} />;
    case "warning":
      return <AlertTriangle className={className} {...rest} />;
    case "info":
      return <Info className={className} {...rest} />;
  }
}

export { AlertIcon };
