import { ToastProps } from "@arkyn/types";
import { AlertCircle, CheckCircle2, Info, XCircle } from "lucide-react";

import "./styles.css";

function Toast(props: ToastProps) {
  const { message, title, type, size = "lg" } = props;

  const className = `arkynToast ${type} ${size}`;

  function Icon() {
    switch (type) {
      case "info":
        return <Info />;
      case "success":
        return <CheckCircle2 />;
      case "danger":
        return <XCircle />;
      case "warning":
        return <AlertCircle />;
      default:
        return <Info />;
    }
  }

  return (
    <div className={className}>
      <div>
        <div className="bg" />
        <Icon />
      </div>
      <p>
        <strong title={title}>{title}</strong>
        <span>{message}</span>
      </p>
    </div>
  );
}

export { Toast };
