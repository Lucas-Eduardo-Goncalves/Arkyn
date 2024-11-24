import { useContext } from "react";
import { DrawerContext } from "../context/DrawerContext";
function useDrawer(key) {
    const contextData = useContext(DrawerContext);
    if (Object.entries(contextData).length === 0) {
        throw new Error("useDrawer must be used within a Provider");
    }
    if (key) {
        const { drawerData: contextDrawerData, drawerIsOpen: contextDrawerIsOpen, openDrawer: contextOpenDrawer, closeDrawer: contextCloseDrawer, } = contextData;
        const drawerIsOpen = contextDrawerIsOpen(key);
        const drawerData = contextDrawerData(key);
        const openDrawer = (data) => contextOpenDrawer(key, data);
        const closeDrawer = () => contextCloseDrawer(key);
        return { drawerIsOpen, drawerData, openDrawer, closeDrawer };
    }
    else {
        return contextData;
    }
}
export { useDrawer };
