import { DrawerContextProps } from "@arkyn/types";
import { useContext } from "react";

import { DrawerContext } from "../context/DrawerContext";

type OpenDrawerProps = (e?: { data: any }) => void;

function useDrawer(): DrawerContextProps;
function useDrawer(key: string): {
  drawerIsOpen: boolean;
  drawerData: any;
  openDrawer: OpenDrawerProps;
  closeDrawer: () => void;
};

function useDrawer(key?: string) {
  const contextData = useContext(DrawerContext);

  if (Object.entries(contextData).length === 0) {
    throw new Error("useDrawer must be used within a Provider");
  }

  if (key) {
    const {
      drawerData: contextDrawerData,
      drawerIsOpen: contextDrawerIsOpen,
      openDrawer: contextOpenDrawer,
      closeDrawer: contextCloseDrawer,
    } = contextData;

    const drawerIsOpen = contextDrawerIsOpen(key);
    const drawerData = contextDrawerData(key);

    const openDrawer: OpenDrawerProps = (data) =>
      contextOpenDrawer(key, data?.data);

    const closeDrawer = () => contextCloseDrawer(key);

    return { drawerIsOpen, drawerData, openDrawer, closeDrawer };
  } else {
    return contextData;
  }
}

export { useDrawer };
