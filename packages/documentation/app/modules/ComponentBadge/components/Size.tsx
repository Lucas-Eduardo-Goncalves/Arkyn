import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Size() {
  return (
    <>
      <Title as="h3">Sizes</Title>

      <Paragraph>
        Use the <code>size</code> property to change the size of the badge.
        You can set the value to <code>md</code> or <code>lg</code>.
      </Paragraph>

      <ExampleContainer>
        <Badge size="md">Some Text</Badge>
        <Badge size="lg">Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Badge size="md">Some Text</Badge>
<Badge size="lg">Some Text</Badge>`}
      </Fence>
    </>
  );
}

export { Size };
