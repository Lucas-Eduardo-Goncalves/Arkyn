import type { ReactNode } from "react";

type DrawerContextProps<T = any> = {
  drawerIsOpen(key: string): boolean;
  drawerData(key: string): T;
  openDrawer(key: string, data?: T): void;
  closeDrawer(key: string): void;
};

type OpenedDrawers = {
  key: string;
  data?: any;
}[];

type DrawerProviderProps = {
  children: ReactNode;
  enableDrawerAutomation?: boolean;
};

export type { DrawerContextProps, OpenedDrawers, DrawerProviderProps };
