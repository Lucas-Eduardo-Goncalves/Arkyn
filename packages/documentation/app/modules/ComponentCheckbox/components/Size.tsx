import { Checkbox } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Size() {
  return (
    <>
      <Title as="h3">Sizes</Title>

      <Paragraph>
        Use <code>size</code> support to change the Checkbox size. You you can
        set the value as <code>lg</code>, <code>md</code> or <code>sm</code>.
      </Paragraph>

      <ExampleContainer>
        <Checkbox name="lg-checkbox" size="lg" />
        <Checkbox name="md-checkbox" size="md" />
        <Checkbox name="sm-checkbox" size="sm" />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Checkbox name="lg-checkbox" size="lg" />
<Checkbox name="md-checkbox" size="md" />
<Checkbox name="sm-checkbox size="sm" />`}
      </Fence>
    </>
  );
}

export { Size };
