import type { LucideIcon } from "lucide-react";
import type { InputHTMLAttributes } from "react";

type SelectProps = {
  isLoading?: boolean;
  isError?: boolean;
  isSearchable?: boolean;

  size?: "md" | "lg";
  variant?: "solid" | "outline" | "underline";

  prefix?: string | LucideIcon;
  leftIcon?: LucideIcon;

  name: string;

  value?: string;
  defaultValue?: string;

  options: { label: string; value: string }[];
  onSelect?: (value: { label: string; value: string }) => void;
} & Omit<
  InputHTMLAttributes<HTMLInputElement>,
  | "size"
  | "prefix"
  | "type"
  | "name"
  | "defaultValue"
  | "value"
  | "onChange"
  | "onSelect"
>;

export type { SelectProps };
