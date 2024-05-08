import type { CpfCnpjInputProps } from "@arkyn/types";
import type { ChangeEvent, FocusEvent } from "react";

import { useRef, useState } from "react";

import { useFormController } from "../../Form/FormController";
import { getConfig } from "./getConfig";
import { MAX_LENGTH, TYPES, applyMask, clear, getMask } from "./utils";

function CpfCnpjInput(props: CpfCnpjInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [inputValue, setInputValue] = useState(
    clear(props?.defaultValue || "")
  );

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
    onChange,
    value,
    defaultValue = "",
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

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    let value = clear(event.target.value);
    const mask = getMask(value);

    let nextLength = value.length;

    if (nextLength > MAX_LENGTH) return;

    value = applyMask(value, TYPES[mask] as "CPF" | "CNPJ");

    event.target.value = value;

    setInputValue(value);
    onChange && onChange(event);
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
        value={value || inputValue}
        onFocus={handleFocus}
        onChange={handleChange}
        onBlur={handleBlur}
        {...rest}
      />

      {showRightIcon && <RightIcon size={iconSize} strokeWidth={2.5} />}
      {showRightSpinner && Spinner}
      {sufix}
    </section>
  );
}

export { CpfCnpjInput };
