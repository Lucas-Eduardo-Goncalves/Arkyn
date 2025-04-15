type InputFormatTypes = "brazilianDate" | "isoDate" | "timestamp";

type FormatDateFunction = (
  date: [date: string, time: string] | [date: string],
  inputFormat: InputFormatTypes,
  outputFormat: string,
  timezone?: number
) => string;

export type { FormatDateFunction };
