import { SwitchProps } from "@arkyn/types";
import { useState } from "react";

import { useFormController } from "../Form/FormController";
import "./styles.css";

function Switch(props: SwitchProps) {
  const {
    size = "lg",
    defaultChecked = false,
    checked: baseChecked = null,
    value,
    unCheckedValue = "",
    name,
    className: baseClassName = "",
    onCheck,
    ...rest
  } = props;

  const [isChecked, setIsChecked] = useState(defaultChecked);
  const { id, inputRef } = useFormController();

  const currentChecked =
    typeof baseChecked === "boolean" ? baseChecked : isChecked;

  function handleCheck() {
    setIsChecked(!isChecked);
    onCheck && onCheck(!currentChecked ? value || "checked" : unCheckedValue);
  }

  const checkedClass = currentChecked ? "checkedTrue" : "checkedFalse";
  const className = `arkynSwitch ${checkedClass} ${size} ${baseClassName}`;

  return (
    <button type="button" onClick={handleCheck} className={className} {...rest}>
      <input
        id={id}
        type="hidden"
        name={name}
        ref={inputRef}
        onClick={handleCheck}
        value={currentChecked ? value || "checked" : unCheckedValue}
      />
    </button>
  );
}

export { Switch };
