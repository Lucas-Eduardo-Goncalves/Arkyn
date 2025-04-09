import type { FormatToEllipsisFunction } from "@arkyn/types";

/**
 * Truncates a given text to a specified maximum length and appends an ellipsis ("...")
 * if the text exceeds the maximum length.
 *
 * @param text - The input string to be truncated.
 * @param maxLength - The maximum allowed length of the string before truncation.
 * @returns The truncated string with an ellipsis if the input exceeds the maximum length,
 *          or the original string if it does not.
 * @example
 * const result = formatToEllipsis("Hello, world!", 5);
 * console.log(result); // Output: "Hello..."
 */

const formatToEllipsis: FormatToEllipsisFunction = (text, maxLength) => {
  if (text.length > maxLength) {
    let trimmedText = text.substring(0, maxLength).trimEnd();
    trimmedText = trimmedText.replace(/[.,!?;:]$/, "");
    return `${trimmedText}...`;
  }
  return text;
};

export { formatToEllipsis };
