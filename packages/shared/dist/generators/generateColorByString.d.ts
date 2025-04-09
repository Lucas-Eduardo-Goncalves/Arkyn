import type { GenerateColorByStringFunction } from "@arkyn/types";
/**
 * Generates a hexadecimal color code based on the input string.
 * The function creates a hash from the string and uses it to calculate
 * RGB values, which are then converted to a hexadecimal color code.
 *
 * @param prop - The input string used to generate the color.
 * @returns A hexadecimal color code (e.g., "#a1b2c3") derived from the input string.
 * @example
 * const color = generateColorByString("example");
 * console.log(color); // Outputs a consistent hex color like "#5e8f9a"
 */
declare const generateColorByString: GenerateColorByStringFunction;
export { generateColorByString };
//# sourceMappingURL=generateColorByString.d.ts.map