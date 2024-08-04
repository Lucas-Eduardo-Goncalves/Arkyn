import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";
import { ToastProps } from "@arkyn/types";

import "./styles.css";

function Toast({ message, title, type, size = "lg" }: ToastProps) {
  const className = `arkyn_toast ${type} ${size}`;

  function Icon() {
    switch (type) {
      case "info":
        return <Info />;
      case "success":
        return <CheckCircle />;
      case "danger":
        return <XCircle />;
      case "warning":
        return <AlertCircle />;
      default:
        return <Info />;
    }
  }

  return (
    <aside className={className}>
      <div>
        <div className="bg" />
        <Icon />
      </div>
      <p>
        <strong title={title}>{title}</strong>
        <span>{message}</span>
      </p>
    </aside>
  );
}

export { Toast };
