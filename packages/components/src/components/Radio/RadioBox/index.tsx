import { RadioBoxProps } from "@arkyn/types";

import { useFormController } from "../../Form/FormController";
import { useRadioGroup } from "../RadioGroup";

import "./styles.css";

function RadioBox(props: RadioBoxProps) {
  const {
    value: componentValue,
    size: componentSize,
    disabled,
    children,
    className: baseClassName = "",
    ...rest
  } = props;

  const { onChange, size: groupSize, value: selectedValue } = useRadioGroup();
  const { error } = useFormController();

  const size = componentSize || groupSize;
  const checkedClass =
    selectedValue === componentValue ? "checkedTrue" : "checkedFalse";
  const errorClass = !!error ? "errorTrue" : "errorFalse";
  const disabledClass = disabled ? "disabledTrue" : "disabledFalse";

  const className = `arkynRadioBox ${size} ${checkedClass} ${errorClass} ${disabledClass} ${baseClassName}`;

  return (
    <label className={className.trim()}>
      <button
        type="button"
        disabled={disabled}
        onClick={() => onChange(componentValue)}
        onFocus={() => onChange(componentValue)}
        {...rest}
      />

      {children}
    </label>
  );
}

export { RadioBox };
