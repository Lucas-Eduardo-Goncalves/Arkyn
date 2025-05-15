import { useContext } from "react";
import { FormKeyContext } from "../context/FormKeyContext";

function useFormKey() {
  const contextData = useContext(FormKeyContext);
  return contextData;
}

export { useFormKey };
