type GenerateColorByStringFunction = (prop: string) => string;

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

const generateColorByString: GenerateColorByStringFunction = (prop) => {
  var hash = 0;

  for (var i = 0; i < prop.length; i++) {
    hash = prop.charCodeAt(i) + ((hash << 5) - hash);
  }

  var red = (hash & 0xff0000) >> 16;
  var green = (hash & 0x00ff00) >> 8;
  var blue = hash & 0x0000ff;

  var redHex = red.toString(16).padStart(2, "0");
  var greenHex = green.toString(16).padStart(2, "0");
  var blueHex = blue.toString(16).padStart(2, "0");

  return "#" + redHex + greenHex + blueHex;
};

export { generateColorByString };
