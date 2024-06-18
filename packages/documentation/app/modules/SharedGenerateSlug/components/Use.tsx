import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        The function takes a single value, being a string in which the
        function will be used to create the slug.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { generateSlug } from "@arkyn/shared";

function someFunction() {
  const slug = generateSlug("I love my cat");
  return slug; // "i-love-my-cat"
}`}
      </Fence>
    </>
  );
}

export { Use };
