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
 * Formats a date and time string based on the provided input and output formats.
 *
 * @param {[string, string]} dateTime - An array containing the date and optional time.
 *   - The first element is the date string.
 *   - The second element is the time string (default is "00:00:00").
 * @param {"brazilianDate" | "isoDate" | "timestamp"} inputFormat - The format of the input date.
 *   - "brazilianDate": Expects the date in "DD/MM/YYYY" format.
 *   - "isoDate": Expects the date in "YYYY-MM-DD" format.
 *   - "timestamp": Expects the date in "YYYY/MM/DD" format.
 * @param {string} outputFormat - The desired output format for the date.
 *   - Use placeholders like "YYYY", "MM", "DD", "hh", "mm", "ss" to define the format.
 * @param {number} [timezone=0] - The timezone offset in hours to apply to the date.
 *   - Defaults to 0 (UTC).
 * @returns {string} The formatted date string based on the output format.
 * @throws {Error} If the input format is invalid.
 * @throws {Error} If the date is invalid.
 *
 * @example
 * // Format a Brazilian date to ISO format
 * formatDate(["25/12/2023", "15:30:00"], "brazilianDate", "YYYY-MM-DD hh:mm:ss");
 * // Returns: "2023-12-25 15:30:00"
 *
 * @example
 * // Format an ISO date to a custom format with timezone adjustment
 * formatDate(["2023-12-25", "15:30:00"], "isoDate", "DD/MM/YYYY hh:mm:ss", -3);
 * // Returns: "25/12/2023 12:30:00"
 */

const formatDate: FormatDateFunction = (
  [date, time = "00:00:00"],
  inputFormat,
  outputFormat,
  timezone = 0
) => {
  const dateParts = date.split(/[-/]/).map(Number);
  const timeParts = time.split(".")[0].split(":").map(Number);

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
