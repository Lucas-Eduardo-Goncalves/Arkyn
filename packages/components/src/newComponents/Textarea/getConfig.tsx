import type { TextareaProps } from "@arkyn/types";

function getConfig(props: TextareaProps, isFocused: boolean) {
  const {
    isError,
    size = "md",
    className: baseClassName = "",
    variant = "solid",
    prefix: basePrefix,
    disabled,
    readOnly,
    onFocus,
    onBlur,
    title,
    style,
    onChange,
    rows = 3,
    ...rest
  } = props;

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
    rows,
    title,
    style,
    onChange,
    ...rest,
  };
}

export { getConfig };
