import { jsx as _jsx } from "react/jsx-runtime";
import { CpfCnpjInput } from "./CpfCpnjInput";
import { CurrencyInput } from "./CurrencyInput";
import { MaskedInput } from "./MaskInput";
import { SimpleInput } from "./SimpleInput";
import "./styles.css";
function Input(props) {
    if (props.type === "currency")
        return _jsx(CurrencyInput, { ...props });
    if (props.type === "masked")
        return _jsx(MaskedInput, { ...props });
    if (props.type === "cpf-cnpj")
        return _jsx(CpfCnpjInput, { ...props });
    return _jsx(SimpleInput, { ...props });
}
export { Input };
