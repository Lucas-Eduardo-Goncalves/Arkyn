type InputFormatTypes = "brazilianDate" | "isoDate" | "timestamp";

type FormatDateFunction = (
  date: string,
  time: string,
  inputFormat: InputFormatTypes,
  outputFormat: string,
  timezone?: number
) => string;

export type { FormatDateFunction };
