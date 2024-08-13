import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from "react";
import { DrawerContext } from "../context/DrawerContext";
function DrawerProvider(args) {
    const { children = false } = args;
    const [openedDrawers, setOpenedDrawers] = useState([]);
    function drawerIsOpen(key) {
        return !!openedDrawers.some((drawer) => drawer.key === key);
    }
    function drawerData(key) {
        return openedDrawers.find((drawer) => drawer.key === key)?.data;
    }
    function openDrawer(key, data) {
        const alreadyExist = drawerIsOpen(key);
        if (alreadyExist) {
            setOpenedDrawers((old) => {
                const filtered = old.filter((drawer) => drawer.key !== key);
                return [...filtered, { key, data }];
            });
        }
        else
            setOpenedDrawers([...openedDrawers, { key, data }]);
    }
    function closeDrawer(key) {
        setOpenedDrawers(openedDrawers.filter((drawer) => drawer.key !== key));
    }
    return (_jsx(DrawerContext.Provider, { value: { drawerIsOpen, drawerData, openDrawer, closeDrawer }, children: children }));
}
export { DrawerProvider };
