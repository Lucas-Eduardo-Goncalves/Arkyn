/**
 * Converts a date and time input into a JavaScript `Date` object, formatted according to the specified input format and timezone.
 *
 * @param param0 - A tuple containing the date string and an optional time string.
 *                 The date string format depends on the `inputFormat` parameter.
 *                 The time string defaults to "00:00:00" if not provided.
 * @param inputFormat - The format of the input date string.
 *                      Supported formats are:
 *                      - `"brazilianDate"`: Expects the date in `DD/MM/YYYY` format.
 *                      - `"isoDate"`: Expects the date in `YYYY-MM-DD` format.
 *                      - `"timestamp"`: Expects the date in `YYYY-MM-DD` format (similar to `isoDate`).
 * @param timezone - An optional timezone offset in hours. Defaults to `0` (UTC).
 *
 * @returns A `Date` object representing the parsed date and time, adjusted for the specified timezone.
 *
 * @throws {Error} If the `inputFormat` is invalid.
 * @throws {Error} If the provided date or time is invalid.
 *
 * @example
 * ```typescript
 * import { formatToDate } from "./formatToIsoDate";
 *
 * const date = formatToDate(["25/12/2023", "15:30:00"], "brazilianDate", -3);
 * console.log(date); // Outputs a Date object for "2023-12-25T18:30:00.000Z" (UTC)
 * ```
 */
import type { FormatToDateFunction } from "@arkyn/types";

const formatToDate: FormatToDateFunction = (
  [date, time = "00:00:00"],
  inputFormat,
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

  const utcDate = new Date(
    Date.UTC(year, month - 1, day, hours - timezone, minutes, seconds)
  );

  if (isNaN(utcDate.getTime())) throw new Error("Invalid date");

  return utcDate;
};

export { formatToDate };
