import type { TextareaProps } from "@arkyn/types";
import { useRef, useState, FocusEvent } from "react";

import { getConfig } from "./getConfig";
import { useFormController } from "../Form/FormController";

import "./styles.css";

function Textarea(props: TextareaProps) {
  const [isFocused, setIsFocused] = useState(false);

  const baseRef = useRef<HTMLInputElement>(null);

  const { inputRef, id, error } = useFormController();

  const ref = inputRef || baseRef;
  const isError = props.isError || !!error;

  const {
    disabled,
    title,
    style,
    className,
    readOnly,
    onFocus,
    onBlur,
    ...rest
  } = getConfig({ ...props, id, isError }, isFocused);

  function handleSectionClick() {
    if (disabled || !ref?.current) return;
    setIsFocused(true);
    ref.current.focus();
  }

  function handleFocus(e: FocusEvent<HTMLTextAreaElement>) {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  }

  function handleBlur(e: FocusEvent<HTMLTextAreaElement>) {
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
      <textarea
        disabled={disabled}
        readOnly={readOnly}
        ref={ref as any}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...rest}
      />
    </section>
  );
}

export { Textarea };
