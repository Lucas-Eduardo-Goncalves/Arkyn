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

  const className = `arkyn_checkbox ${size} ${isError ? "error" : ""} ${
    currentChecked ? "checked" : ""
  } ${baseClassName}`;

  function handleCheck() {
    const defaultChecked = isChecked;
    setIsChecked(!defaultChecked);
    onCheck && onCheck(!defaultChecked ? value || "checked" : "");
  }

  return (
    <div id={id} className={className} onClick={handleCheck} {...rest}>
      <input
        type="hidden"
        name={name}
        ref={inputRef}
        value={currentChecked ? value || "checked" : ""}
      />
      <Check />
    </div>
  );
}

export { Checkbox };
