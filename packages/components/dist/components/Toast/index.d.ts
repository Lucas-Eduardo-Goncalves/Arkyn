type ToastProps = {
    title?: string;
    message: string;
    type: "success" | "warning" | "error" | "info";
};
import "./styles.css";
declare function Toast({ message, type, title }: ToastProps): import("react/jsx-runtime").JSX.Element;
export { Toast };
//# sourceMappingURL=index.d.ts.map