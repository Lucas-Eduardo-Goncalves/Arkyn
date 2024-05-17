import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">formParse</Title>

      <Paragraph>
        It is a simple-to-use function for validating and standardizing errors
        on a common form.
      </Paragraph>

      <Paragraph>
        This function is useful for handling errors using the <code>zod</code>{" "}
        package, an object validator. With its strong and dynamic typing, it is
        possible to work with forms in the simplest way possible.
      </Paragraph>
    </>
  );
}

export { Introduction };
