import { HTMLAttributes, ReactNode } from "react";
import "./styles.css";
type TabContainerProps = {
    children: ReactNode;
    onClick?: (index: string) => void;
} & Omit<HTMLAttributes<HTMLElement>, "onClick" | "children" | "ref">;
declare function TabContainer(props: TabContainerProps): import("react/jsx-runtime").JSX.Element;
export { TabContainer };
//# sourceMappingURL=index.d.ts.map