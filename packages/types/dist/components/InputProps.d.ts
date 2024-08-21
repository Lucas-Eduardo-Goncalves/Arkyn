import type { Replacement } from "@react-input/mask";
import type { LucideIcon } from "lucide-react";
import type { ChangeEvent, InputHTMLAttributes, KeyboardEvent } from "react";
type InputBaseTypes = "button" | "color" | "date" | "datetime-local" | "email" | "file" | "hidden" | "image" | "month" | "number" | "password" | "range" | "reset" | "search" | "submit" | "tel" | "text" | "time" | "url" | "week";
type BaseInputProps<T extends string> = {
    isLoading?: boolean;
    isError?: boolean;
    size?: "md" | "lg";
    variant?: "solid" | "outline" | "underline";
    prefix?: string | LucideIcon;
    sufix?: string | LucideIcon;
    leftIcon?: LucideIcon;
    rightIcon?: LucideIcon;
    type: T;
    name: string;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "prefix" | "type" | "name">;
type CurrencyInputProps = Omit<BaseInputProps<"currency">, "max" | "defaultValue" | "value" | "onChange"> & {
    defaultValue?: string;
    onChangeValue?: (event: ChangeEvent<HTMLInputElement>, originalValue: string, maskedValue: string) => void;
    onKeyPress?: (event: KeyboardEvent<HTMLInputElement>, originalValue: string, maskedValue: string) => void;
    value?: string;
    max?: number;
    locale?: string;
    currency?: string;
};
type MaskedInputProps = BaseInputProps<"masked"> & {
    mask: string;
    separate?: boolean;
    replacement?: string | Replacement;
    showMask?: boolean;
};
type CpfCnpjInputProps = Omit<BaseInputProps<"cpf-cnpj">, "value" | "defaultValue"> & {
    defaultValue?: string;
    value?: string;
};
type SimpleInputProps = BaseInputProps<InputBaseTypes>;
type InputProps = CurrencyInputProps | SimpleInputProps | MaskedInputProps | CpfCnpjInputProps;
export type { BaseInputProps, CpfCnpjInputProps, CurrencyInputProps, InputProps, MaskedInputProps, SimpleInputProps, };
//# sourceMappingURL=InputProps.d.ts.map