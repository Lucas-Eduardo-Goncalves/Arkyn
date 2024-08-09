import type { ReactNode } from "react";
type OrientationProps = "bottom-left" | "bottom-right" | "top-left" | "top-right" | "top" | "left" | "bottom" | "right";
type PopoverProps = {
    children: ReactNode;
    button: ReactNode;
    closeOnClick?: boolean;
    orientation?: OrientationProps;
};
export type { PopoverProps };
//# sourceMappingURL=PopoverProps.d.ts.map