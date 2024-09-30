import { Descendant } from "slate";
import "./styles.css";
type RichTextProps = {
    name: string;
    maxLimit?: number;
    enforceCharacterLimit?: boolean;
    defaultValue?: string;
    isError?: boolean;
    onChangeCharactersCount: (e: number) => void;
    onChange?: (value: Descendant[]) => void;
    onValueChange?: (value: string) => void;
};
declare function RichText({ name, defaultValue, enforceCharacterLimit, onChangeCharactersCount, maxLimit, onValueChange, onChange, isError: baseIsError, }: RichTextProps): import("react/jsx-runtime").JSX.Element;
export { RichText };
//# sourceMappingURL=index.d.ts.map