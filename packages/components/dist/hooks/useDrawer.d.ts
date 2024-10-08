import { DrawerContextProps } from "@arkyn/types";
type OpenDrawerProps<T = any> = (data?: T) => void;
declare function useDrawer<T = any>(): DrawerContextProps<T>;
declare function useDrawer<T = any>(key: string): {
    drawerIsOpen: boolean;
    drawerData: T;
    openDrawer: OpenDrawerProps<T>;
    closeDrawer: () => void;
};
export { useDrawer };
//# sourceMappingURL=useDrawer.d.ts.map