import { jsx as _jsx } from "react/jsx-runtime";
import { useActionData } from "@remix-run/react";
import { createContext, useContext, useId, useRef } from "react";
import "./styles.css";
const FormControllerContext = createContext({});
function FormController(args) {
    const actionData = useActionData();
    const { children, className: baseClassName, ...rest } = args;
    const inputRef = useRef(null);
    const name = inputRef.current?.name || "";
    const error = actionData?.fieldErrors?.[name] || null;
    const id = useId();
    const className = `arkyn_form_controller ${baseClassName}`;
    return (_jsx(FormControllerContext.Provider, { value: { error, id, inputRef }, children: _jsx("section", { className: className.trim(), ...rest, children: children }) }));
}
function useFormController() {
    return useContext(FormControllerContext);
}
export { FormController, useFormController };
