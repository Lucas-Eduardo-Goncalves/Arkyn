import type { HTMLAttributes, LabelHTMLAttributes, ReactNode, RefObject } from "react";
type FormControllerContextProps = {
    error?: string;
    inputRef: RefObject<HTMLInputElement>;
    id: string;
};
type FormControllerProps = {
    children: ReactNode;
} & HTMLAttributes<HTMLElement>;
type FormLabelProps = {
    showAsterisk?: boolean;
} & LabelHTMLAttributes<HTMLLabelElement>;
export type { FormControllerContextProps, FormControllerProps, FormLabelProps };
//# sourceMappingURL=FormProps.d.ts.map