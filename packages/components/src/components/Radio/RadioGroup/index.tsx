import { RadioGroupContextType, RadioGroupProps } from "@arkyn/types";
import { createContext, useContext, useState } from "react";

import { useFormController } from "../../Form/FormController";

import "./styles.css";

const RadioContext = createContext({} as RadioGroupContextType);

function useRadioGroup() {
  return useContext(RadioContext);
}

function RadioGroup(props: RadioGroupProps) {
  const {
    defaultValue,
    name,
    value: forceValue,
    onChange,
    size = "md",
    className: baseClassName,
    ...rest
  } = props;

  const [value, setValue] = useState(defaultValue || "");
  const { inputRef, id } = useFormController();

  function handleChange(value: string) {
    setValue(value);
    onChange && onChange(value);
  }

  const className = `arkyn_radio_group ${size} ${baseClassName || ""}`;

  return (
    <RadioContext.Provider
      value={{ onChange: handleChange, value: forceValue || value, size }}
    >
      <input
        style={{ display: "none" }}
        type="text"
        id={id}
        readOnly
        name={name}
        ref={inputRef}
        value={value}
      />

      <div className={className.trim()} {...rest} />
    </RadioContext.Provider>
  );
}

export { RadioGroup, useRadioGroup };
