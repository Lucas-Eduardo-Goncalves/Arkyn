import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Color scheme</Title>

      <Paragraph>
        Use the <code>scheme</code> property to change the color scheme of the
        emblem. You can set the value to <code>danger</code>, <code>info</code>,{" "}
        <code>primary</code>, <code>secondary</code>, <code>success</code> or{" "}
        <code>warning</code>.
      </Paragraph>

      <Note type="info">
        The colors are correspondent to the color palette imported from the
        library configuration.
      </Note>

      <ExampleContainer>
        <Badge scheme="danger">Some Text</Badge>
        <Badge scheme="info">Some Text</Badge>
        <Badge scheme="primary">Some Text</Badge>
        <Badge scheme="secondary">Some Text</Badge>
        <Badge scheme="success">Some Text</Badge>
        <Badge scheme="warning">Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Badge scheme="danger">Some Text</Badge>
<Badge scheme="info">Some Text</Badge>
<Badge scheme="primary">Some Text</Badge>
<Badge scheme="secondary">Some Text</Badge>
<Badge scheme="success">Some Text</Badge>
<Badge scheme="warning">Some Text</Badge>
`}
      </Fence>
    </>
  );
}

export { Schemes };
