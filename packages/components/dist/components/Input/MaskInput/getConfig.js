import { Loader2 } from "lucide-react";
import * as React from "react";
import { morpheme } from "../utils/morpheme";
function getConfig(props, isFocused) {
    const { isLoading, isError, size = "md", className: baseClassName = "", variant = "solid", prefix: basePrefix, sufix: baseSufix, leftIcon: LeftIcon, rightIcon: RightIcon, disabled, readOnly, onFocus, onBlur, title, style, onChange, showMask = true, ...rest } = props;
    const loadingPosition = RightIcon ? "right" : "left";
    const hasPrefix = !!basePrefix ? "hasPrefix" : "";
    const hasSufix = !!baseSufix ? "hasSufix" : "";
    const errored = isError ? "errored" : "";
    const opacity = disabled || readOnly || isLoading ? "opacity" : "";
    const focused = isFocused ? "focused" : "";
    const className = `arkyn_input ${hasPrefix} ${hasSufix} ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;
    const iconSizes = { md: 14, lg: 16 };
    const iconSize = iconSizes[size];
    return {
        isLoading,
        className,
        prefix: morpheme(basePrefix, iconSize, "prefix"),
        sufix: morpheme(baseSufix, iconSize, "sufix"),
        LeftIcon,
        RightIcon,
        disabled,
        readOnly,
        onFocus,
        onBlur,
        title,
        style,
        onChange,
        loadingPosition,
        iconSize: iconSize,
        showMask,
        Spinner: React.createElement(Loader2, { className: "spinner", size: iconSize, strokeWidth: 2.5 }),
        ...rest,
    };
}
export { getConfig };
