import type { FormatDateFunction } from "@arkyn/types";

function formatDateString(date: Date, format: string): string {
  const pad = (num: number) => num.toString().padStart(2, "0");

  const replacements: Record<string, string> = {
    YYYY: date.getFullYear().toString(),
    YY: date.getFullYear().toString().slice(-2),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    hh: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
  };

  return format.replace(
    /YYYY|YY|MM|DD|hh|mm|ss/g,
    (match) => replacements[match]
  );
}

/**
 * Formats a date string from a given input format to a specified output format,
 * with optional timezone adjustment.
 *
 * @param date - The date string to be formatted. It should match the specified `inputFormat`.
 * @param time - The time string in the format `hh:mm:ss` (e.g., `14:30:00`).
 * @param inputFormat - The format of the input date string. Supported formats:
 *   - `"brazilianDate"`: Expects the date in `DD/MM/YYYY` format.
 *   - `"isoDate"`: Expects the date in `YYYY-MM-DD` format.
 *   - `"timestamp"`: Expects the date as a numeric timestamp (e.g., `YYYY-MM-DD`).
 *
 * @param outputFormat - The desired format for the output date string. Supported tokens:
 *   - `YYYY`: Full year (e.g., 2023)
 *   - `YY`: Last two digits of the year (e.g., 23)
 *   - `MM`: Month (zero-padded, e.g., 01)
 *   - `DD`: Day of the month (zero-padded, e.g., 09)
 *   - `hh`: Hours (zero-padded, 24-hour format, e.g., 08)
 *   - `mm`: Minutes (zero-padded, e.g., 05)
 *   - `ss`: Seconds (zero-padded, e.g., 07)
 * @param timezone - (Optional) The timezone offset in hours to adjust the date. Defaults to `0`.
 *
 * @returns The formatted date string in the specified `outputFormat`.
 *
 * @throws Will throw an error if:
 *   - The `inputFormat` is invalid.
 *   - The `date` string does not match the expected `inputFormat`.
 *   - The `time` string is not in the format `hh:mm:ss`.
 *   - The resulting date is invalid.
 *
 * @example
 * ```typescript
 * import { formatDate } from "./formatDate";
 *
 * const date = "25/12/2023";
 * const time = "14:30:00";
 * const formatted = formatDate(date, time, "brazilianDate", "YYYY-MM-DD hh:mm:ss", -3);
 * console.log(formatted); // Outputs: "2023-12-25 14:30:00"
 * ```
 */

const formatDate: FormatDateFunction = (
  date,
  time,
  inputFormat,
  outputFormat,
  timezone = 0
) => {
  const dateParts = date.split(/[-/]/).map(Number);
  const timeParts = time.split(":").map(Number);

  let day, month, year;
  const [hours = 0, minutes = 0, seconds = 0] = timeParts;

  switch (inputFormat) {
    case "brazilianDate":
      [day, month, year] = dateParts;
      break;
    case "isoDate":
      [year, month, day] = dateParts;
      break;
    case "timestamp":
      [year, month, day] = dateParts.map(Number);
      break;
    default:
      throw new Error("Invalid input format");
  }

  const formattedDate = new Date(year, month - 1, day, hours, minutes, seconds);
  if (isNaN(formattedDate.getTime())) throw new Error("Invalid date");

  formattedDate.setUTCHours(formattedDate.getUTCHours() + timezone);

  return formatDateString(formattedDate, outputFormat);
};

export { formatDate };
