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
    name,
    className: baseClassName = "",
    onCheck,
    ...rest
  } = props;

  const [isChecked, setIsChecked] = useState(defaultChecked);
  const { id, inputRef } = useFormController();

  function handleCheck() {
    setIsChecked(!isChecked);
    onCheck && onCheck(!defaultChecked ? value || "checked" : "");
  }

  const currentChecked =
    typeof baseChecked === "boolean" ? baseChecked : isChecked;

  const checkedClass = currentChecked ? "checkedTrue" : "checkedFalse";
  const className = `arkynSwitch ${checkedClass} ${size} ${baseClassName}`;

  return (
    <button
      id={id}
      type="button"
      onClick={handleCheck}
      className={className}
      {...rest}
    >
      <input
        type="hidden"
        name={name}
        ref={inputRef}
        value={currentChecked ? value || "checked" : ""}
      />
    </button>
  );
}

export { Switch };
