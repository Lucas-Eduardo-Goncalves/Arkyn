import { useActionData, useLocation, useNavigate } from "@remix-run/react";
import { useContext, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { ModalContext } from "../context/ModalContext";
import { useScopedParams } from "./useScopedParams";
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
    const { closeModal, closeAll } = useContext(ModalContext);
    const { showToast } = useToast();
    const { getParam } = useScopedParams();
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const closeAllModals = getParam("closeAllModals");
    useEffect(() => {
        if (closeAllModals === "true") {
            closeAll();
            navigate(pathname);
        }
    }, [closeAllModals]);
    useEffect(() => {
        const closeModalKey = actionData?.closeModalKey;
        if (closeModalKey)
            closeModal(closeModalKey);
    }, [actionData]);
    useEffect(() => {
        const existsToast = actionData?.toast;
        const existsMessage = actionData?.message;
        if (isToastProps(existsToast))
            showToast(existsToast);
        if (!isToastProps(existsToast) && existsMessage) {
            showToast({
                message: existsMessage,
                title: "Atenção!",
                type: "warning",
            });
        }
    }, [actionData]);
    useEffect(() => {
        if (typeof actionData?.data?.scrollTo === "string") {
            const element = document.getElementById(actionData?.data?.scrollTo);
            element && animateScroll.scrollTo(element.offsetTop - 200);
        }
    }, [actionData]);
}
export { useAutomation };
