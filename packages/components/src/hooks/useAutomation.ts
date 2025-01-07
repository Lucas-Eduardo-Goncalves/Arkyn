import { ToastProps } from "@arkyn/types";
import {
  useActionData,
  useFetchers,
  useLocation,
  useNavigate,
} from "@remix-run/react";
import { useContext, useEffect } from "react";
import { animateScroll } from "react-scroll";

import { ModalContext } from "../context/ModalContext";
import { useScopedParams } from "./useScopedParams";
import { useToast } from "./useToast";

function isToastProps(obj: any): obj is ToastProps {
  return (
    obj &&
    typeof obj.title === "string" &&
    typeof obj.message === "string" &&
    (obj.size === undefined || obj.size === "md" || obj.size === "lg") &&
    (obj.type === "success" || obj.type === "danger")
  );
}

function useAutomation() {
  const actionData = useActionData<any>();
  const { closeModal, closeAll, modalIsOpen } = useContext(ModalContext);
  const { showToast } = useToast();

  const { getParam } = useScopedParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const closeAllModals = getParam("closeAllModals");

  const fetchers = useFetchers();

  useEffect(() => {
    const modalKey = fetchers[0]?.data?.closeModalKey || "";
    const isOpen = modalIsOpen(modalKey);

    if (modalKey && isOpen) closeModal(modalKey);
  }, [fetchers]);

  useEffect(() => {
    if (closeAllModals === "true") {
      closeAll();
      navigate(pathname);
    }
  }, [closeAllModals]);

  useEffect(() => {
    const closeModalKey = actionData?.closeModalKey;
    if (closeModalKey) closeModal(closeModalKey);
  }, [actionData]);

  useEffect(() => {
    const closeAllModals = actionData?.closeAllModals;
    if (typeof closeAllModals === "boolean" && closeAllModals) closeAll();
  }, [actionData]);

  useEffect(() => {
    const existsToast = actionData?.toast;
    const existsMessage = actionData?.message;

    if (isToastProps(existsToast)) showToast(existsToast);
    if (!isToastProps(existsToast) && existsMessage) {
      showToast({ message: existsMessage, type: "danger" });
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
