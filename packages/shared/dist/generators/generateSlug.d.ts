/**
 * Generates a URL-friendly slug from a given string.
 *
 * The function performs the following transformations:
 * - Normalizes the string to remove diacritical marks (e.g., accents).
 * - Removes non-alphanumeric characters except for spaces and hyphens.
 * - Replaces spaces with hyphens.
 * - Converts the string to lowercase.
 * - Collapses multiple consecutive hyphens into a single hyphen.
 * - Trims leading and trailing hyphens.
 *
 * @param string - The input string to be converted into a slug.
 * @returns A URL-friendly slug derived from the input string.
 */
declare function generateSlug(prop: string): string;
export { generateSlug };
//# sourceMappingURL=generateSlug.d.ts.map