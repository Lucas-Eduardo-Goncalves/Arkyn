import { MaskedInputProps } from "@arkyn/types";
import { FocusEvent, useRef, useState } from "react";
import ReactMaskInput from "react-input-mask";

import { getConfig } from "./getConfig";

function MaskedInput(props: MaskedInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const ref = useRef<any>(null);

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

  function setInputRef(element: HTMLInputElement | null) {
    if (!element) return;
    if (!ref.current) ref.current = element;
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

      <ReactMaskInput
        disabled={disabled || isLoading}
        readOnly={readOnly}
        inputRef={(el) => setInputRef(el)}
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

export { MaskedInput };
