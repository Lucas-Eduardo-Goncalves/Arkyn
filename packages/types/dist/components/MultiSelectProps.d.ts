import type { LucideIcon } from "lucide-react";
import type { FocusEvent } from "react";
type MultiSelectProps = {
    name: string;
    options: {
        label: string;
        value: string;
    }[];
    value?: string[];
    defaultValue?: string[];
    placeholder?: string;
    notFoundText?: string;
    className?: string;
    disabled?: boolean;
    readOnly?: boolean;
    isLoading?: boolean;
    isError?: boolean;
    isSearchable?: boolean;
    closeOnSelect?: boolean;
    onSearch?: (value: string) => void;
    onSelect?: (value: string[]) => void;
    onFocus?: () => void;
    onBlur?: (e: FocusEvent<HTMLDivElement>) => void;
    size?: "md" | "lg";
    variant?: "solid" | "outline" | "underline";
    prefix?: string | LucideIcon;
    leftIcon?: LucideIcon;
};
export type { MultiSelectProps };
//# sourceMappingURL=MultiSelectProps.d.ts.map