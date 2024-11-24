import type { HTMLAttributes, ReactNode } from "react";
type BaseTooltipProps = Omit<HTMLAttributes<HTMLDivElement>, "children">;
type TooltipProps = BaseTooltipProps & {
    text: string;
    children: ReactNode;
    orientation?: "top" | "right" | "bottom" | "left";
    size?: "md" | "lg";
};
export type { TooltipProps };
//# sourceMappingURL=TooltipProps.d.ts.map