import type { LucideIcon } from "lucide-react";
import type { ButtonHTMLAttributes } from "react";
type BaseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;
type ButtonProps = BaseButtonProps & {
    isLoading?: boolean;
    loadingText?: string;
    size?: "xs" | "sm" | "md" | "lg";
    variant?: "solid" | "outline" | "ghost" | "invisible";
    scheme?: "primary" | "success" | "warning" | "danger";
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
};
export type { ButtonProps };
//# sourceMappingURL=ButtonProps.d.ts.map