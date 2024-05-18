import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Variant() {
  return (
    <>
      <Title as="h3">Variants</Title>

      <Paragraph>
        Use <code>variant</code> support to change the visual style of the
        emblem. You can set the value to <code>solid</code>,{" "}
        <code>outline</code> or <code>ghost</code>.
      </Paragraph>

      <ExampleContainer>
        <Badge variant="solid">Some Text</Badge>
        <Badge variant="outline">Some Text</Badge>
        <Badge variant="ghost">Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Badge variant="solid">Some Text</Badge>
<Badge variant="outline">Some Text</Badge>
<Badge variant="ghost">Some Text</Badge>`}
      </Fence>
    </>
  );
}

export { Variant };
