import { InputProps, BaseInputProps, CurrencyInputProps } from "@arkyn/types";

import { CurrencyInput } from "./CurrencyInput";
import { SimpleInput } from "./SimpleInput";
import "./styles.css";

function Input(args: InputProps) {
  if (args.type === "currency") {
    const props = args as CurrencyInputProps;
    return <CurrencyInput {...props} />;
  }

  const props = args as BaseInputProps;
  return <SimpleInput {...props} />;
}

export { Input };
