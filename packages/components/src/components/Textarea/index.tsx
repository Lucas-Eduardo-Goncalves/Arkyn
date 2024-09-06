import { TextareaProps } from "@arkyn/types";
import { FocusEvent, useRef, useState } from "react";

import { useFormController } from "../Form/FormController";
import "./styles.css";

function Textarea(props: TextareaProps) {
  const {
    variant = "solid",
    size = "md",
    className: baseClassName,
    disabled = false,
    readOnly = false,
    onFocus,
    onBlur,
    title,
    style,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);
  const { inputRef, id, error } = useFormController();
  const baseRef = useRef<HTMLInputElement>(null);

  const ref = inputRef || baseRef;
  const isError = props.isError || !!error;

  const errorClass = isError ? "errorTrue" : "errorFalse";
  const opacityClass = disabled || readOnly ? "opacityTrue" : "opacityFalse";
  const focusedClass = isFocused ? "focusedTrue" : "focusedFalse";

  const className = `arkynTextarea ${variant} ${size} ${opacityClass} ${errorClass} ${focusedClass} ${baseClassName}`;

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
        id={id}
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
