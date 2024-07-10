import { Checkbox } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function IsError() {
  return (
    <>
      <Title as="h3">isError</Title>

      <Paragraph>
        Use the <code>isError</code> property to change the Checkbox in error state.
      </Paragraph>

      <ExampleContainer>
        <Checkbox isError name="error-lg-checkbox" size="lg" />
        <Checkbox isError name="error-md-checkbox" size="md" />
        <Checkbox isError name="error-sm-checkbox" size="sm" />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Checkbox isError name="error-lg-checkbox" size="lg" />
<Checkbox isError name="error-md-checkbox" size="md" />
<Checkbox isError name="error-sm-checkbox size="sm" />`}
      </Fence>
    </>
  );
}

export { IsError };
