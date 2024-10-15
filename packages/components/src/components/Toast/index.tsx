import { ToastProps } from "@arkyn/types";
import { CheckCircle2, Info, XCircle } from "lucide-react";

import "./styles.css";

function Toast(props: ToastProps) {
  const { message, type } = props;

  const className = `arkynToast ${type}}`;

  function Icon() {
    switch (type) {
      case "success":
        return <CheckCircle2 />;
      case "danger":
        return <XCircle />;
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
        {/* <strong title={title}>{title}</strong> */}
        <span>{message}</span>
      </p>
    </div>
  );
}

export { Toast };
