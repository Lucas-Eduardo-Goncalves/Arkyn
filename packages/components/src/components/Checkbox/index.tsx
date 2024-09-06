import { CheckboxProps } from "@arkyn/types";
import { Check } from "lucide-react";
import { useState } from "react";

import { useFormController } from "../Form/FormController";
import "./styles.css";

function Checkbox(props: CheckboxProps) {
  const {
    name,
    className: baseClassName = "",
    size = "md",
    isError: defaultIsError,
    defaultChecked = false,
    checked: baseChecked = null,
    onCheck,
    value,
    ...rest
  } = props;

  const { id, inputRef, error } = useFormController();
  const isError = defaultIsError || !!error;

  const [isChecked, setIsChecked] = useState(defaultChecked || false);
  const currentChecked =
    typeof baseChecked === "boolean" ? baseChecked : isChecked;

  const errorClass = isError ? "errorTrue" : "errorFalse";
  const currentCheckedClass = currentChecked ? "checkedTrue" : "checkedFalse";

  const className = `arkynCheckbox ${size} ${errorClass} ${currentCheckedClass} ${baseClassName}`;

  function handleCheck() {
    const defaultChecked = isChecked;
    setIsChecked(!defaultChecked);
    onCheck && onCheck(!defaultChecked ? value || "checked" : "");
  }

  return (
    <button
      id={id}
      type="button"
      className={className}
      onClick={handleCheck}
      {...rest}
    >
      <input
        type="hidden"
        name={name}
        ref={inputRef}
        value={currentChecked ? value || "checked" : ""}
      />

      <Check />
    </button>
  );
}

export { Checkbox };
