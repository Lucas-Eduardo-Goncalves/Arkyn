function getConfig(props, isFocused) {
    const { isError, size = "md", className: baseClassName = "", variant = "solid", prefix: basePrefix, disabled, readOnly, onFocus, onBlur, title, style, onChange, ...rest } = props;
    const errored = isError ? "errored" : "";
    const opacity = disabled || readOnly ? "opacity" : "";
    const focused = isFocused ? "focused" : "";
    const className = `arkyn_textarea ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;
    return {
        className,
        disabled,
        readOnly,
        onFocus,
        onBlur,
        title,
        style,
        onChange,
        ...rest,
    };
}
export { getConfig };
