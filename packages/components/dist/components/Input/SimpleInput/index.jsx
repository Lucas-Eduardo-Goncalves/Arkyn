import { useRef, useState } from "react";
import { useFormController } from "../../Form/FormController";
import { getConfig } from "./getConfig";
function SimpleInput(props) {
    const [isFocused, setIsFocused] = useState(false);
    const baseRef = useRef(null);
    const { inputRef, id, error } = useFormController();
    const ref = inputRef || baseRef;
    const isError = props.isError || !!error;
    const { disabled, title, style, className, prefix, sufix, iconSize, loadingPosition, isLoading, LeftIcon, readOnly, onFocus, onBlur, RightIcon, Spinner, ...rest } = getConfig({ ...props, id, isError }, isFocused);
    const showLeftIcon = LeftIcon && !isLoading;
    const showRightIcon = RightIcon && !isLoading;
    const showLeftSpinner = loadingPosition === "left" && isLoading;
    const showRightSpinner = loadingPosition === "right" && isLoading;
    function handleSectionClick() {
        if (disabled || !ref?.current)
            return;
        setIsFocused(true);
        ref.current.focus();
    }
    function handleFocus(e) {
        setIsFocused(true);
        if (onFocus)
            onFocus(e);
    }
    function handleBlur(e) {
        setIsFocused(false);
        if (onBlur)
            onBlur(e);
    }
    return (<section title={title} style={style} onClick={handleSectionClick} className={className}>
      {prefix}
      {showLeftSpinner && Spinner}
      {showLeftIcon && <LeftIcon size={iconSize} strokeWidth={2.5}/>}

      <input disabled={disabled || isLoading} readOnly={readOnly} ref={ref} onFocus={handleFocus} onBlur={handleBlur} {...rest}/>

      {showRightIcon && <RightIcon size={iconSize} strokeWidth={2.5}/>}
      {showRightSpinner && Spinner}
      {sufix}
    </section>);
}
export { SimpleInput };
