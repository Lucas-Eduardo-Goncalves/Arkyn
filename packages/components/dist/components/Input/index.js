import { CpfCnpjInput } from "./CpfCpnjInput";
import { CurrencyInput } from "./CurrencyInput";
import { MaskedInput } from "./MaskInput";
import { SimpleInput } from "./SimpleInput";
import "./styles.css";
function Input(props) {
    if (props.type === "currency")
        return React.createElement(CurrencyInput, { ...props });
    if (props.type === "masked")
        return React.createElement(MaskedInput, { ...props });
    if (props.type === "cpf-cpnj")
        return React.createElement(CpfCnpjInput, { ...props });
    return React.createElement(SimpleInput, { ...props });
}
export { Input };
