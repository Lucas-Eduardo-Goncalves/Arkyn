import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useId, useRef, } from "react";
import "./styles.css";
import { useFieldErrors } from "../../../hooks/useFieldErrors";
const FormControllerContext = createContext({});
function FormController(props) {
    const { children, className: baseClassName, id: formControllerId, ...rest } = props;
    const fieldErrors = useFieldErrors();
    const inputRef = useRef(null);
    const name = inputRef.current?.name || "";
    const error = fieldErrors?.[name] || null;
    const id = useId();
    const className = `arkynFormController ${baseClassName}`;
    return (_jsx(FormControllerContext.Provider, { value: { error, id, inputRef }, children: _jsx("section", { id: formControllerId || name || undefined, className: className.trim(), ...rest, children: children }) }));
}
function useFormController() {
    return useContext(FormControllerContext);
}
export { FormController, useFormController };
