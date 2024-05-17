import type { CurrencyInputProps } from "@arkyn/types";
import type { FocusEvent, KeyboardEvent } from "react";

import { useRef, useState } from "react";

import { useFormController } from "../../Form/FormController";
import { getConfig } from "./getConfig";
import { currencyInputKeyDown, valueDisplay } from "./utils";

function CurrencyInput(props: CurrencyInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [currencyValue, setCurrencyValue] = useState(props.defaultValue || 0);

  const baseRef = useRef<HTMLInputElement>(null);

  const { inputRef, id, error } = useFormController();

  const ref = inputRef || baseRef;
  const isError = props.isError || !!error;

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
    value,
    max,
    onKeyDown,
    onChange,
    showCents,
    ...rest
  } = getConfig({ ...props, id, isError }, isFocused);

  const showLeftIcon = LeftIcon && !isLoading;
  const showRightIcon = RightIcon && !isLoading;

  const showLeftSpinner = loadingPosition === "left" && isLoading;
  const showRightSpinner = loadingPosition === "right" && isLoading;

  function handleSectionClick() {
    if (disabled || !ref?.current) return;
    setIsFocused(true);
    ref.current.focus();
  }

  function handleKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    currencyInputKeyDown({ currencyValue, event, max, setCurrencyValue });
    onChange && onChange(currencyValue);
    onKeyDown && onKeyDown(event);
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
        value={valueDisplay(value || currencyValue, showCents)}
        onKeyDown={handleKeyDown}
        disabled={disabled || isLoading}
        readOnly={readOnly}
        ref={ref}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={() => {}}
        {...rest}
      />

      {showRightSpinner && Spinner}
      {showRightIcon && <RightIcon size={iconSize} strokeWidth={2.5} />}
      {sufix}
    </section>
  );
}

export { CurrencyInput };
