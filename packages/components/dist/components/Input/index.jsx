import { CpfCnpjInput } from "./CpfCpnjInput";
import { CurrencyInput } from "./CurrencyInput";
import { MaskedInput } from "./MaskInput";
import { SimpleInput } from "./SimpleInput";
import "./styles.css";
function Input(props) {
    if (props.type === "currency")
        return <CurrencyInput {...props}/>;
    if (props.type === "masked")
        return <MaskedInput {...props}/>;
    if (props.type === "cpf-cpnj")
        return <CpfCnpjInput {...props}/>;
    return <SimpleInput {...props}/>;
}
export { Input };