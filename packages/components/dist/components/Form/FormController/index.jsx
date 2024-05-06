import { useActionData } from "@remix-run/react";
import { createContext, useContext, useId, useRef } from "react";
import "./styles.css";
const FormControllerContext = createContext({});
function FormController({ children, ...rest }) {
    const actionData = useActionData();
    const inputRef = useRef(null);
    const name = inputRef.current?.name || "";
    const error = actionData?.fieldErrors?.[name] || null;
    const id = useId();
    return (<FormControllerContext.Provider value={{ error, id, inputRef }}>
      <section className="arkyn_form_controller" {...rest}>
        {children}
      </section>
    </FormControllerContext.Provider>);
}
function useFormController() {
    return useContext(FormControllerContext);
}
export { FormController, useFormController };
