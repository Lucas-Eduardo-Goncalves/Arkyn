import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Variant() {
  return (
    <>
      <Title as="h3">Variants</Title>

      <Paragraph>
        Use <code>variant</code> support to change the visual style of the
        button. You can set the value to <code>solid</code>,{" "}
        <code>outline</code>,<code>ghost</code> or <code>invisible</code>.
      </Paragraph>

      <ExampleContainer>
        <Button variant="solid">Some Text</Button>
        <Button variant="outline">Some Text</Button>
        <Button variant="ghost">Some Text</Button>
        <Button variant="invisible">Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button variant="solid">Some Text</Button>
<Button variant="outline">Some Text</Button>
<Button variant="ghost">Some Text</Button>
<Button variant="invisible">Some Text</Button>`}
      </Fence>
    </>
  );
}

export { Variant };
