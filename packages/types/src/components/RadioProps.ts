import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

type RadioGroupProps = {
  name: string;
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  size?: "sm" | "md" | "lg";
} & Omit<HTMLAttributes<HTMLDivElement>, "onChange">;

type RadioGroupContextType = {
  value: string;
  size: "sm" | "md" | "lg";
  onChange: (value: string) => void;
};

type RadioBoxProps = {
  value: string;
  size?: "sm" | "md" | "lg";
} & ButtonHTMLAttributes<HTMLButtonElement>;

export type { RadioBoxProps, RadioGroupContextType, RadioGroupProps };
