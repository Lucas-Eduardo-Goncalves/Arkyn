import { PhoneInputContainerProps } from "@arkyn/types";
import "./styles.css";

function PhoneInputContainer(props: PhoneInputContainerProps) {
  const {
    children,
    onFocus,
    disabled,
    isError,
    isLoading,
    isFocused,
    className: baseClassName = "",
    readOnly,
    variant,
    size,
    id,
  } = props;

  const errored = isError ? "errored" : "";
  const opacity = disabled || readOnly || isLoading ? "opacity" : "";
  const focused = isFocused ? "focused" : "";

  const className = `arkynPhoneInputContainer ${variant} ${size} ${opacity} ${errored} ${focused} ${baseClassName}`;

  return (
    <section id={id} className={className.trim()} onClick={onFocus}>
      {children}
    </section>
  );
}

export { PhoneInputContainer };
