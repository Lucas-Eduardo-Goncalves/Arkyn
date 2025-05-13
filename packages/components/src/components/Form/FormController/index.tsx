import { FormControllerContextProps, FormControllerProps } from "@arkyn/types";
import { createContext, useContext, useId, useRef } from "react";

import { useFieldErrors } from "../../../hooks/useFieldErrors";
import "./styles.css";

const FormControllerContext = createContext({} as FormControllerContextProps);

function FormController(props: FormControllerProps) {
  const {
    children,
    className: baseClassName,
    id: formControllerId,
    ...rest
  } = props;

  const fieldErrors = useFieldErrors();
  const inputRef = useRef<HTMLInputElement>(null);

  const name = inputRef.current?.name || "";
  const error = fieldErrors?.[name] || null;

  const id = useId();
  const className = `arkynFormController ${baseClassName}`;

  return (
    <FormControllerContext.Provider value={{ error, id, inputRef }}>
      <section
        id={formControllerId || name || undefined}
        className={className.trim()}
        {...rest}
      >
        {children}
      </section>
    </FormControllerContext.Provider>
  );
}

function useFormController() {
  return useContext(FormControllerContext);
}

export { FormController, useFormController };
