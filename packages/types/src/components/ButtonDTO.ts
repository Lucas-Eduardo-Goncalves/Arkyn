import { ButtonHTMLAttributes } from "react";

type ButtonDTO = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading: boolean;
};

export type { ButtonDTO };
