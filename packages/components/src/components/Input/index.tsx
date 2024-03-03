import { InputDTO } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import "./styles.css";
import { useRef, useState } from "react";

const iconSize = {
  md: 20,
  lg: 24,
};

const defaultSize = "md";

function Input(args: InputDTO) {
  const {
    isLoading,
    inError,
    size = defaultSize,
    className: baseClassName = "",
    variant = "solid",
    prefix: BasePrefix,
    sufix: BaseSufix,
    leftIcon: LeftIcon,
    rightIcon: RightIcon,
    disabled,
    readOnly,
    onFocus,
    onBlur,
    title,
    style,
    ...rest
  } = args;

  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  function handleFocus() {
    if (disabled) return;

    setIsFocused(true);
    if (ref?.current) ref.current.focus();
  }

  const errored = inError ? "errored" : "";
  const opacity = disabled || readOnly || isLoading ? "opacity" : "";
  const focused = isFocused ? "focused" : "";

  const className = `arkyn_input ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;

  return (
    <section
      title={title}
      style={style}
      onClick={handleFocus}
      className={className.trim()}
    >
      {LeftIcon &&
        (isLoading ? (
          <Loader2
            className="spinner"
            size={iconSize[size]}
            strokeWidth={2.5}
          />
        ) : (
          <LeftIcon size={iconSize[size]} strokeWidth={2.5} />
        ))}

      <input
        onFocus={(e) => {
          setIsFocused(true);
          if (onFocus) onFocus(e);
        }}
        onBlur={(e) => {
          setIsFocused(false);
          if (onBlur) onBlur(e);
        }}
        disabled={disabled || isLoading}
        readOnly={readOnly}
        ref={ref}
        {...rest}
      />

      {RightIcon &&
        (isLoading ? (
          <Loader2
            className="spinner"
            size={iconSize[size]}
            strokeWidth={2.5}
          />
        ) : (
          <RightIcon size={iconSize[size]} strokeWidth={2.5} />
        ))}
    </section>
  );
}

export { Input };
