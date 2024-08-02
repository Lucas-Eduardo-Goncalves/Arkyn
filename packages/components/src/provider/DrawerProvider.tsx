import { DrawerProviderProps, OpenedDrawers } from "@arkyn/types";
import { useState } from "react";

import { DrawerContext } from "../context/DrawerContext";

function DrawerProvider(args: DrawerProviderProps) {
  const { children = false } = args;
  const [openedDrawers, setOpenedDrawers] = useState<OpenedDrawers>([]);

  function drawerIsOpen(key: string) {
    return !!openedDrawers.some((drawer) => drawer.key === key);
  }

  function drawerData(key: string) {
    return openedDrawers.find((drawer) => drawer.key === key)?.data;
  }

  function openDrawer(key: string, data?: any) {
    const alreadyExist = drawerIsOpen(key);
    if (alreadyExist) {
      setOpenedDrawers((old) => {
        const filtered = old.filter((drawer) => drawer.key !== key);
        return [...filtered, { key, data }];
      });
    } else setOpenedDrawers([...openedDrawers, { key, data }]);
  }

  function closeDrawer(key: string) {
    setOpenedDrawers(openedDrawers.filter((drawer) => drawer.key !== key));
  }

  return (
    <DrawerContext.Provider
      value={{ drawerIsOpen, drawerData, openDrawer, closeDrawer }}
    >
      {children}
    </DrawerContext.Provider>
  );
}

export { DrawerProvider };
