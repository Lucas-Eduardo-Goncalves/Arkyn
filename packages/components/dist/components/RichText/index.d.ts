import { Descendant } from "slate";
import "./styles.css";
type RichTextProps = {
    name: string;
    defaultValue?: string;
    isError?: boolean;
    onChange?: (value: Descendant[]) => void;
    onValueChange?: (value: string) => void;
};
declare function RichText({ name, defaultValue, onValueChange, onChange, isError: baseIsError, }: RichTextProps): import("react/jsx-runtime").JSX.Element;
export { RichText };
//# sourceMappingURL=index.d.ts.map