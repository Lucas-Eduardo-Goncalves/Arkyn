import { InputProps } from "@arkyn/types";

import { CurrencyInput } from "./CurrencyInput";
import { SimpleInput } from "./SimpleInput";
import "./styles.css";

function Input(props: InputProps) {
  if (props.type === "currency") return <CurrencyInput {...props} />;
  return <SimpleInput {...props} />;
}

export { Input };
