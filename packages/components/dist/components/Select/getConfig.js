import { jsx as _jsx } from "react/jsx-runtime";
import { Loader2 } from "lucide-react";
import { morpheme } from "./utils/morpheme";
function getConfig(props, isFocused) {
    const { isLoading, isError, size = "md", className: baseClassName = "", variant = "solid", prefix: basePrefix, leftIcon: LeftIcon, disabled, readOnly, onFocus, onBlur, title, style, isSearchable = false, closeOnSelect = true, ...rest } = props;
    const hasPrefix = !!basePrefix ? "hasPrefix" : "";
    const errored = isError ? "errored" : "";
    const opacity = disabled || readOnly || isLoading ? "opacity" : "";
    const focused = isFocused ? "focused" : "";
    const className = `arkyn_select ${hasPrefix} ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;
    const iconSizes = { md: 20, lg: 20 };
    const iconSize = iconSizes[size];
    return {
        isLoading,
        className,
        prefix: morpheme(basePrefix, iconSize, "prefix"),
        LeftIcon,
        disabled,
        readOnly,
        onFocus,
        onBlur,
        title,
        closeOnSelect,
        style,
        isSearchable,
        iconSize: iconSize,
        Spinner: _jsx(Loader2, { className: "spinner", size: iconSize, strokeWidth: 2.5 }),
        ...rest,
    };
}
export { getConfig };
