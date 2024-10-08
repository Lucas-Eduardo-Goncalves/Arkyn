import { FormControllerContextProps, FormControllerProps } from "@arkyn/types";
import { useActionData } from "@remix-run/react";
import { createContext, useContext, useId, useRef } from "react";

import "./styles.css";

const FormControllerContext = createContext({} as FormControllerContextProps);

function FormController(props: FormControllerProps) {
  const actionData = useActionData<any>();
  const {
    children,
    className: baseClassName,
    id: formControllerId,
    ...rest
  } = props;

  const inputRef = useRef<HTMLInputElement>(null);

  const name = inputRef.current?.name || "";
  const error = actionData?.fieldErrors?.[name] || null;

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
