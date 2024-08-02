import type { ReactNode } from "react";
type DrawerContextProps = {
    drawerIsOpen(key: string): boolean;
    drawerData(key: string): any;
    openDrawer(key: string, data?: any): void;
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
//# sourceMappingURL=Drawer.d.ts.map