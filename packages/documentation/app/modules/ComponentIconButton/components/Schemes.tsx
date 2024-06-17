import { IconButton } from "@arkyn/components";
import { Banana } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Color scheme</Title>

      <Paragraph>
        Use the <code>scheme</code> property to change the color scheme of the
        button. You can set the value to <code>danger</code>,{" "}
        <code>primary</code>, <code>success</code> and <code>warning</code>.
      </Paragraph>

      <Note type="info">
        The colors are correspondent to the color palette imported from the
        library configuration.
      </Note>

      <ExampleContainer>
        <IconButton scheme="danger" icon={Banana} aria-label="Demo Button" />
        <IconButton scheme="primary" icon={Banana} aria-label="Demo Button" />
        <IconButton scheme="success" icon={Banana} aria-label="Demo Button" />
        <IconButton scheme="warning" icon={Banana} aria-label="Demo Button" />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<IconButton scheme="danger" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="primary" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="success" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="warning" icon={Banana} aria-label="Demo Button" />`}
      </Fence>
    </>
  );
}

export { Schemes };
