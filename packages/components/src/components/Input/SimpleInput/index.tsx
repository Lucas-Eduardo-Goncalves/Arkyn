import { BaseInputProps } from "@arkyn/types";
import { useRef, useState, FocusEvent } from "react";

import { getConfig } from "./getConfig";

function SimpleInput(props: BaseInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const {
    disabled,
    title,
    style,
    className,
    prefix,
    sufix,
    iconSize,
    loadingPosition,
    isLoading,
    LeftIcon,
    readOnly,
    onFocus,
    onBlur,
    RightIcon,
    Spinner,
    ...rest
  } = getConfig(props, isFocused);

  const showLeftIcon = LeftIcon && !isLoading;
  const showRightIcon = RightIcon && !isLoading;

  const showLeftSpinner = loadingPosition === "left" && isLoading;
  const showRightSpinner = loadingPosition === "right" && isLoading;

  function handleSectionClick() {
    if (disabled || !ref?.current) return;
    setIsFocused(true);
    ref.current.focus();
  }

  function handleFocus(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  }

  function handleBlur(e: FocusEvent<HTMLInputElement>) {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  }

  return (
    <section
      title={title}
      style={style}
      onClick={handleSectionClick}
      className={className}
    >
      {prefix}
      {showLeftSpinner && Spinner}
      {showLeftIcon && <LeftIcon size={iconSize} strokeWidth={2.5} />}

      <input
        disabled={disabled || isLoading}
        readOnly={readOnly}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />

      {showRightIcon && <RightIcon size={iconSize} strokeWidth={2.5} />}
      {showRightSpinner && Spinner}
      {sufix}
    </section>
  );
}

export { SimpleInput };
