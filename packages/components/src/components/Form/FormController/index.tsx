import type {
  FormControllerContextProps,
  FormControllerProps,
} from "@arkyn/types";

import { useActionData } from "@remix-run/react";
import { createContext, useContext, useId, useRef } from "react";

import "./styles.css";

const FormControllerContext = createContext({} as FormControllerContextProps);

function FormController({ children, ...rest }: FormControllerProps) {
  const actionData = useActionData<any>();

  const inputRef = useRef<HTMLInputElement>(null);

  const name = inputRef.current?.name || "";
  const error = actionData?.fieldErrors?.[name] || null;

  const id = useId();

  return (
    <FormControllerContext.Provider value={{ error, id, inputRef }}>
      <section className="arkyn_form_controller" {...rest}>
        {children}
      </section>
    </FormControllerContext.Provider>
  );
}

function useFormController() {
  return useContext(FormControllerContext);
}

export { FormController, useFormController };
