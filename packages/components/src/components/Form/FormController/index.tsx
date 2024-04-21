import type { ReactNode, RefObject } from "react";
import { createContext, useContext, useRef } from "react";

import "./styles.css";
import { useActionData } from "@remix-run/react";

type FormControllerContextProps = {
  error?: string;
  inputRef: RefObject<HTMLInputElement>;
};

type FormControllerProps = {
  children: ReactNode;
};

const FormControllerContext = createContext({} as FormControllerContextProps);

function FormController({ children }: FormControllerProps) {
  const actionData = useActionData<any>();

  const inputRef = useRef<HTMLInputElement>(null);

  const name = inputRef.current?.name || "";
  const error = actionData?.fieldErrors?.[name] || null;

  return (
    <FormControllerContext.Provider value={{ error, inputRef }}>
      <section className="arkyn_form_controller">{children}</section>
    </FormControllerContext.Provider>
  );
}

function useFormController() {
  return useContext(FormControllerContext);
}

export { FormController, useFormController };
