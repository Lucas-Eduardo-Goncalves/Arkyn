import { TabContainerProps } from "@arkyn/types";
import { MouseEvent } from "react";
import "./styles.css";
type TabContextType = {
    value: string;
    showInitialTab: boolean;
    handleTabClick: (event: MouseEvent<HTMLButtonElement>) => void;
};
declare function useTabContext(): TabContextType;
declare function TabContainer(props: TabContainerProps): import("react/jsx-runtime").JSX.Element;
export { TabContainer, useTabContext };
//# sourceMappingURL=index.d.ts.map