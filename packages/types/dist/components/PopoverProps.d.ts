import type { ReactNode } from "react";
type OrientationProps = "bottomLeft" | "bottomRight" | "topLeft" | "topRight" | "top" | "left" | "bottom" | "right";
type PopoverProps = {
    children: ReactNode;
    button: ReactNode;
    closeOnClick?: boolean;
    orientation?: OrientationProps;
};
export type { PopoverProps };
//# sourceMappingURL=PopoverProps.d.ts.map