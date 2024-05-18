import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Size() {
  return (
    <>
      <Title as="h3">Sizes</Title>

      <Paragraph>
        Use <code>size</code> support to change the button size. You you can set
        the value as <code>lg</code>, <code>md</code>, <code>sm</code> or{" "}
        <code>xs</code>.
      </Paragraph>

      <ExampleContainer>
        <Button size="lg">Some Text</Button>
        <Button size="md">Some Text</Button>
        <Button size="sm">Some Text</Button>
        <Button size="xs">Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button size="lg">Some Text</Button>
<Button size="md">Some Text</Button>
<Button size="sm">Some Text</Button>
<Button size="xs">Some Text</Button>`}
      </Fence>
    </>
  );
}

export { Size };
