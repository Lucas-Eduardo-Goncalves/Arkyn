import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        The function takes a single argument, being a string in which the
        function is will be based on creating the color in hexadecimal.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { generateColorByString } from "@arkyn/shared";

function someFunction() {
  return generateColorByString("I love my cat"); // #c7a679
}`}
      </Fence>
    </>
  );
}

export { Use };
