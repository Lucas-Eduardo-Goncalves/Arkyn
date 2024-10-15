import { FormControllerContextProps, FormControllerProps } from "@arkyn/types";
import { useActionData, useFetchers } from "@remix-run/react";
import {
  createContext,
  useContext,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";

import "./styles.css";
import { useFieldErrors } from "../../../hooks/useFieldErrors";

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
