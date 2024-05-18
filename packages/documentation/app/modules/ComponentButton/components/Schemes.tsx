import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Color scheme</Title>

      <Paragraph>
        Use <code>scheme</code> support to change the color scheme of the
        button. You can set the value to <code>danger</code>,{" "}
        <code>primary</code>, <code>success</code> and <code>warning</code>.
      </Paragraph>

      <Note type="info">
        The colors are corresponding to the color palette imported into the
        library configuration.
      </Note>

      <ExampleContainer>
        <Button scheme="danger">Some Text</Button>
        <Button scheme="primary">Some Text</Button>
        <Button scheme="success">Some Text</Button>
        <Button scheme="warning">Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button scheme="danger">Some Text</Button>
<Button scheme="primary">Some Text</Button>
<Button scheme="success">Some Text</Button>
<Button scheme="warning">Some Text</Button>`}
      </Fence>
    </>
  );
}

export { Schemes };
