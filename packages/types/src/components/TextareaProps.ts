import type { TextareaHTMLAttributes } from "react";

type TextareaProps = {
  isError?: boolean;

  size?: "md" | "lg";
  variant?: "solid" | "outline";

  name: string;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "name">;

export type { TextareaProps };
