type InputFormatTypes = "brazilianDate" | "timestamp" | "isoDate";

type FormatToDateFunction = (
  date: string[], // [date: string, time?: string]
  inputFormat: InputFormatTypes,
  timezone?: number
) => Date;

export type { FormatToDateFunction };
