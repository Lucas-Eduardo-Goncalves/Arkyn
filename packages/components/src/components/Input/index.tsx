import { InputProps } from "@arkyn/types";

import { CurrencyInput } from "./CurrencyInput";
import { MaskedInput } from "./MaskInput";
import { SimpleInput } from "./SimpleInput";

import "./styles.css";

function Input(props: InputProps) {
  if (props.type === "currency") return <CurrencyInput {...props} />;
  if (props.type === "masked") return <MaskedInput {...props} />;
  return <SimpleInput {...props} />;
}

export { Input };
