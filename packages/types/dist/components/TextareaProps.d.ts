import type { TextareaHTMLAttributes } from "react";
type TextareaProps = {
    isError?: boolean;
    size?: "md" | "lg";
    variant?: "solid" | "outline" | "underline";
    name: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;
export type { TextareaProps };
//# sourceMappingURL=TextareaProps.d.ts.map