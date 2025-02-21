import { jsx as _jsx } from "react/jsx-runtime";
import "./styles.css";
function MultiSelectContainer(props) {
    const { children, handleContainerFocus, disabled, isError, isLoading, isFocused, className, readOnly, variant, size, id, prefixExists, } = props;
    const hasPrefix = prefixExists ? "hasPrefix" : "";
    const errored = isError ? "errored" : "";
    const opacity = disabled || readOnly || isLoading ? "opacity" : "";
    const focused = isFocused ? "focused" : "";
    return (_jsx("section", { id: id, className: `arkynMultiSelectContainer ${hasPrefix} ${variant} ${size} ${opacity} ${errored} ${focused} ${className}`, onClick: handleContainerFocus, children: children }));
}
export { MultiSelectContainer };
