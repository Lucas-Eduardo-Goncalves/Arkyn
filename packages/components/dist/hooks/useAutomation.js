import { useActionData } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { ModalContext } from "../context/ModalContext";
import { useToast } from "./useToast";
function isToastProps(obj) {
    return (obj &&
        typeof obj.title === "string" &&
        typeof obj.message === "string" &&
        (obj.size === undefined || obj.size === "md" || obj.size === "lg") &&
        (obj.type === "info" ||
            obj.type === "success" ||
            obj.type === "danger" ||
            obj.type === "warning"));
}
function useAutomation() {
    const actionData = useActionData();
    const { closeModal } = useContext(ModalContext);
    const { showToast } = useToast();
    useEffect(() => {
        const closeModalKey = actionData?.closeModalKey;
        if (closeModalKey)
            closeModal(closeModalKey);
    }, [actionData]);
    useEffect(() => {
        const existsToast = actionData?.toast;
        if (isToastProps(existsToast))
            showToast(existsToast);
    }, [actionData]);
}
export { useAutomation };
