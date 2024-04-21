import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">generateColorByString</Title>

      <Paragraph>
        This function was created to generate unique colors based on a string
        input. It converts each character in the string into a numeric value and
        uses these values ​​to calculate values ​​for the red channels, green
        and blue (RGB).
      </Paragraph>

      <Paragraph>
        Based on these channel values, the function generates a color code
        hexadecimal that represents the final color.
      </Paragraph>

      <Paragraph>
        This approach allows different strings to generate different colors,
        making it useful for situations where you want to associate colors with
        specific elements based on their name or identifier.
      </Paragraph>
    </>
  );
}

export { Introduction };
