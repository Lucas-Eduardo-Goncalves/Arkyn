import { countries } from "@arkyn/templates";
import type { ReactNode } from "react";
type CountryType = {
    name: string;
    code: string;
    iso: string;
    prefix: null | string;
    flag: string;
    mask: string;
};
type PhoneInputContainerProps = {
    children: ReactNode;
    onFocus: () => void;
    isError: boolean;
    disabled: boolean;
    readOnly: boolean;
    isLoading: boolean;
    isFocused: boolean;
    className?: string;
    id: string;
    variant: "solid" | "outline";
    size: "md" | "lg";
};
type PhoneInputCountriesOverlayProps = {
    isOpen: boolean;
    onClick: () => void;
};
type PhoneInputCountryOptionProps = {
    country: CountryType;
    size: "md" | "lg";
    isActive: boolean;
    handleChangeValue: (country: CountryType) => void;
};
type PhoneInputCountryOptionsContainerProps = {
    isOpen: boolean;
    children: ReactNode;
    search: string;
    placeholder: string;
    onSearch: (value: string) => void;
};
type PhoneInputCountrySelectorProps = {
    size: "md" | "lg";
    currentCountry: CountryType;
    onClick: () => void;
};
type PhoneInputMaskProps = {
    onFocus: () => void;
    onBlur: () => void;
    disabled: boolean;
    size: "md" | "lg";
    currentCountry: CountryType;
    value: string;
    onChange: (e: string) => void;
};
type PhoneInputProps = {
    disabled?: boolean;
    readOnly?: boolean;
    isError?: boolean;
    isLoading?: boolean;
    size?: "md" | "lg";
    variant?: "solid" | "outline";
    className?: string;
    defaultValue?: string;
    notFoundCountryText?: string;
    name: string;
    searchCountryPlaceholder?: string;
    defaultCountry?: (typeof countries)[number]["iso"];
    onChange?: (e: string) => void;
};
export type { CountryType, PhoneInputContainerProps, PhoneInputCountriesOverlayProps, PhoneInputCountryOptionProps, PhoneInputCountryOptionsContainerProps, PhoneInputCountrySelectorProps, PhoneInputMaskProps, PhoneInputProps, };
//# sourceMappingURL=PhoneInputProps.d.ts.map