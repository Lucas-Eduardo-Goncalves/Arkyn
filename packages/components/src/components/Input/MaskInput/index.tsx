import type { MaskedInputProps } from "@arkyn/types";
import type { FocusEvent } from "react";

import { InputMask } from "@react-input/mask";
import { useRef, useState } from "react";

import { useFormController } from "../../Form/FormController";
import { SimpleInput } from "../SimpleInput";

function MaskedInput(props: MaskedInputProps) {
  // const [isFocused, setIsFocused] = useState(false);

  // const baseRef = useRef<any>(null);

  // const { inputRef, id, error } = useFormController();

  // const ref = inputRef || baseRef;
  // const isError = props.isError || !!error;

  // const {
  //   disabled,
  //   title,
  //   style,
  //   className,
  //   prefix,
  //   sufix,
  //   iconSize,
  //   loadingPosition,
  //   isLoading,
  //   LeftIcon,
  //   readOnly,
  //   onFocus,
  //   onBlur,
  //   RightIcon,
  //   Spinner,
  //   ...rest
  // } = getConfig({ ...props, id, isError }, isFocused);

  // const showLeftIcon = LeftIcon && !isLoading;
  // const showRightIcon = RightIcon && !isLoading;

  // const showLeftSpinner = loadingPosition === "left" && isLoading;
  // const showRightSpinner = loadingPosition === "right" && isLoading;

  // function handleSectionClick() {
  //   if (disabled || !ref?.current) return;
  //   setIsFocused(true);
  //   ref.current.focus();
  // }

  // function handleFocus(e: FocusEvent<HTMLInputElement>) {
  //   setIsFocused(true);
  //   if (onFocus) onFocus(e);
  // }

  // function handleBlur(e: FocusEvent<HTMLInputElement>) {
  //   setIsFocused(false);
  //   if (onBlur) onBlur(e);
  // }

  return (
    // <section
    //   title={title}
    //   style={style}
    //   onClick={handleSectionClick}
    //   className={className}
    // >
    //   {prefix}
    //   {showLeftSpinner && Spinner}
    //   {showLeftIcon && <LeftIcon size={iconSize} strokeWidth={2.5} />}

    <InputMask component={SimpleInput} {...props} type="text" />

    //   {showRightIcon && <RightIcon size={iconSize} strokeWidth={2.5} />}
    //   {showRightSpinner && Spinner}
    //   {sufix}
    // </section>
  );
}

export { MaskedInput };
