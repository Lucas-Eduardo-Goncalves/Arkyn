import { useActionData } from "@remix-run/react";
import { useContext, useEffect } from "react";

import { ModalContext } from "../context/ModalContext";

function useAutomation() {
  const actionData = useActionData<any>();
  const { closeModal } = useContext(ModalContext);

  useEffect(() => {
    const closeModalKey = actionData?.closeModalKey;
    if (closeModalKey) closeModal(closeModalKey);
  }, [actionData]);
}

export { useAutomation };
