type ToastProps = {
  title?: string;
  message: string;
  type: "success" | "warning" | "error" | "info";
};

import "./styles.css";

function Toast({ message, type, title }: ToastProps) {
  return (
    <div className={"arkyn_toast " + type}>
      {title && <strong>{title}</strong>}
      <strong>Sucesso</strong>
      <p>{message}</p>
    </div>
  );
}

export { Toast };
