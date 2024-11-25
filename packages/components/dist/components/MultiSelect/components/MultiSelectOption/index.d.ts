import "./styles.css";
type MultiSelectOptionProps = {
    value: string;
    label: string;
    size: "md" | "lg";
    optionHasSelected: (value: string) => boolean;
    handleChangeValue: (value: string) => void;
};
declare function MultiSelectOption(props: MultiSelectOptionProps): import("react/jsx-runtime").JSX.Element;
export { MultiSelectOption };
//# sourceMappingURL=index.d.ts.map