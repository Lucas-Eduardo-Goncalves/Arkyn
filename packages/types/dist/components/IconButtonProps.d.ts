import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
type BaseIconButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "aria-label">;
type IconButtonProps = BaseIconButtonProps & {
    icon: LucideIcon;
    "aria-label": string;
    isLoading?: boolean;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost" | "invisible";
    scheme?: "primary" | "success" | "warning" | "danger" | "info";
};
export type { IconButtonProps };
//# sourceMappingURL=IconButtonProps.d.ts.map