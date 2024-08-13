import { ButtonHTMLAttributes, ReactNode } from "react";
import "./styles.css";
type TabButtonProps = {
    children: ReactNode;
    value: string;
    defaultActive?: boolean;
} & Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "value">;
declare function TabButton(props: TabButtonProps): import("react/jsx-runtime").JSX.Element;
export { TabButton };
//# sourceMappingURL=index.d.ts.map