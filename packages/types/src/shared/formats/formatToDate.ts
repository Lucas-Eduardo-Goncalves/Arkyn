type InputFormatTypes = "brazilianDate" | "timestamp" | "isoDate";

type FormatToDateFunction = (
  date: [date: string, time: string] | [date: string],
  inputFormat: InputFormatTypes,
  timezone?: number
) => Date;

export type { FormatToDateFunction };
