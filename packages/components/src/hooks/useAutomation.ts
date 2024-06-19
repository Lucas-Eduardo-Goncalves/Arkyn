import { useActionData } from "@remix-run/react";
import { useContext, useEffect } from "react";

import { ModalContext } from "../context/ModalContext";
import { useToast } from "./useToast";

function useAutomation() {
  const actionData = useActionData<any>();
  const { closeModal } = useContext(ModalContext);
  const { successToast, errorToast } = useToast();

  useEffect(() => {
    const closeModalKey = actionData?.closeModalKey;
    if (closeModalKey) closeModal(closeModalKey);
  }, [actionData]);

  useEffect(() => {
    const showToast =
      typeof actionData?.message === "string" &&
      typeof actionData?.success === "boolean";

    if (showToast) {
      if (actionData?.success) successToast(actionData?.message);
      else errorToast(actionData?.message);
    }
  }, [actionData]);
}

export { useAutomation };
