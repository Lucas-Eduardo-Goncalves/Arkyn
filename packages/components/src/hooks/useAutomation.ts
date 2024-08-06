import { useActionData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { ToastProps } from "@arkyn/types";

import { ModalContext } from "../context/ModalContext";
import { useToast } from "./useToast";

function isToastProps(obj: any): obj is ToastProps {
  return (
    obj &&
    typeof obj.title === "string" &&
    typeof obj.message === "string" &&
    (obj.size === undefined || obj.size === "md" || obj.size === "lg") &&
    (obj.type === "info" ||
      obj.type === "success" ||
      obj.type === "danger" ||
      obj.type === "warning")
  );
}

function useAutomation() {
  const actionData = useActionData<any>();
  const { closeModal } = useContext(ModalContext);
  const { showToast } = useToast();

  useEffect(() => {
    const closeModalKey = actionData?.closeModalKey;
    if (closeModalKey) closeModal(closeModalKey);
  }, [actionData]);

  useEffect(() => {
    const existsToast = actionData?.toast;
    const existsMessage = actionData?.message;

    if (isToastProps(existsToast)) showToast(existsToast);
    if (!isToastProps(existsToast) && existsMessage) {
      showToast({
        message: existsMessage,
        title: "Atenção!",
        type: "warning",
      });
    }
  }, [actionData]);
}

export { useAutomation };
