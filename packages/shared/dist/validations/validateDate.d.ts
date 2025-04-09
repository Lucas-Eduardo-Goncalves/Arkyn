import type { ValidateDateFunction } from "@arkyn/types";
/**
 * Validates a date string based on the provided format and configuration.
 *
 * @param rawDate - The date string to validate.
 * @param config - Optional configuration object to customize validation.
 * @param config.inputFormat - The expected format of the input date.
 *                            Supported formats are "DD/MM/YYYY", "MM-DD-YYYY", and "YYYY-MM-DD".
 *                            Defaults to "DD/MM/YYYY".
 * @param config.minYear - The minimum allowed year for the date. Defaults to 1900.
 * @param config.maxYear - The maximum allowed year for the date. Defaults to 3000.
 *
 * @returns `true` if the date is valid according to the specified format and configuration, otherwise `false`.
 *
 * @throws {Error} If an invalid date format is provided in the configuration.
 *
 * @example
 * ```typescript
 * validateDate("31/12/2023"); // true
 * validateDate("12-31-2023", { inputFormat: "MM-DD-YYYY" }); // true
 * validateDate("2023-12-31", { inputFormat: "YYYY-MM-DD", minYear: 2000, maxYear: 2100 }); // true
 * validateDate("29/02/2024", { inputFormat: "DD/MM/YYYY" }); // true (leap year)
 * validateDate("29/02/2023", { inputFormat: "DD/MM/YYYY" }); // false (not a leap year)
 * validateDate("31/04/2023", { inputFormat: "DD/MM/YYYY" }); // false (April has 30 days)
 * ```
 */
declare const validateDate: ValidateDateFunction;
export { validateDate };
//# sourceMappingURL=validateDate.d.ts.map