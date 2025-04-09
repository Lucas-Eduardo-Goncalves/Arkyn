import type { FormatDateFunction } from "@arkyn/types";
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
declare const formatDate: FormatDateFunction;
export { formatDate };
//# sourceMappingURL=formatDate.d.ts.map