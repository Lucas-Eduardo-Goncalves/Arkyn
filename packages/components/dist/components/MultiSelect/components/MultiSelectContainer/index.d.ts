import { ReactNode } from "react";
import "./styles.css";
type MultiSelectContainerProps = {
    children: ReactNode;
    handleContainerFocus: () => void;
    prefixExists: boolean;
    isError: boolean;
    disabled: boolean;
    readOnly: boolean;
    isLoading: boolean;
    isFocused: boolean;
    className?: string;
    id: string;
    variant: "solid" | "outline" | "underline";
    size: "md" | "lg";
};
declare function MultiSelectContainer(props: MultiSelectContainerProps): import("react/jsx-runtime").JSX.Element;
export { MultiSelectContainer };
//# sourceMappingURL=index.d.ts.map