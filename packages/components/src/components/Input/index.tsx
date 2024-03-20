import { InputProps } from "@arkyn/types";
import { Loader2 } from "lucide-react";

import "./styles.css";
import { useRef, useState } from "react";

const iconSize = {
  md: 14,
  lg: 16,
};

function Input(args: InputProps) {
  const {
    isLoading,
    isError,
    size = "md",
    className: baseClassName = "",
    variant = "solid",
    prefix: Prefix,
    sufix: Sufix,
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

  const loadingPosition = RightIcon ? "right" : "left";

  const hasPrefix = !!Prefix ? "hasPrefix" : "";
  const hasSufix = !!Sufix ? "hasSufix" : "";
  const errored = isError ? "errored" : "";
  const opacity = disabled || readOnly || isLoading ? "opacity" : "";
  const focused = isFocused ? "focused" : "";

  const className = `arkyn_input ${hasPrefix} ${hasSufix} ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;

  return (
    <section
      title={title}
      style={style}
      onClick={handleFocus}
      className={className.trim()}
    >
      {Prefix && (
        <p className="prefix">
          {typeof Prefix === "string" ? (
            Prefix
          ) : (
            <Prefix
              color="var(--secondary-600)"
              size={iconSize[size]}
              strokeWidth={2.5}
            />
          )}
        </p>
      )}

      {loadingPosition === "left" && isLoading && (
        <Loader2 className="spinner" size={iconSize[size]} strokeWidth={2.5} />
      )}

      {LeftIcon && !isLoading && (
        <LeftIcon size={iconSize[size]} strokeWidth={2.5} />
      )}

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

      {loadingPosition === "right" && isLoading && (
        <Loader2 className="spinner" size={iconSize[size]} strokeWidth={2.5} />
      )}

      {RightIcon && !isLoading && (
        <RightIcon size={iconSize[size]} strokeWidth={2.5} />
      )}

      {Sufix && (
        <p className="sufix">
          {typeof Sufix === "string" ? (
            Sufix
          ) : (
            <Sufix
              color="var(--secondary-600)"
              size={iconSize[size]}
              strokeWidth={2.5}
            />
          )}
        </p>
      )}
    </section>
  );
}

export { Input };
