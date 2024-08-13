import { DrawerContextProps } from "@arkyn/types";
type OpenDrawerProps = (e?: {
    data: any;
}) => void;
declare function useDrawer(): DrawerContextProps;
declare function useDrawer(key: string): {
    drawerIsOpen: boolean;
    drawerData: any;
    openDrawer: OpenDrawerProps;
    closeDrawer: () => void;
};
export { useDrawer };
//# sourceMappingURL=useDrawer.d.ts.map