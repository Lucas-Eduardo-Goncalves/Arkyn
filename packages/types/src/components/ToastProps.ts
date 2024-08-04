type ToastProps = {
  title: string;
  message: string;
  size?: "md" | "lg";
  type: "info" | "success" | "danger" | "warning";
};

export type { ToastProps };
