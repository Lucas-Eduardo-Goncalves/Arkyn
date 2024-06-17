import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">Button</Title>

      <Paragraph>
        A button means an operation (or a series of operations). Clicking on a
        button will trigger the corresponding business logic.
      </Paragraph>
    </>
  );
}

export { Introduction };
