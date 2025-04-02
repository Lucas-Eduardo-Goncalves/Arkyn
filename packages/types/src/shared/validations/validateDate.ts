type ValidateDateConfig = {
  inputFormat?: "DD/MM/YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD";
  minYear?: number;
  maxYear?: number;
};

type ValidateDateFunction = (
  date: string,
  config?: ValidateDateConfig
) => boolean;

export type { ValidateDateFunction };
