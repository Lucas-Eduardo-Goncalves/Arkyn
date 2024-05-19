import type { InputHTMLAttributes } from "react";
type CheckboxProps = {
    isError?: boolean;
    size?: "md" | "lg" | "sm";
    name: string;
    value?: string;
    defaultChecked?: boolean;
    onCheck?: (value: string) => void;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type" | "name" | "defaultValue" | "value" | "onChange" | "onSelect">;
export type { CheckboxProps };
//# sourceMappingURL=CheckboxProps.d.ts.map