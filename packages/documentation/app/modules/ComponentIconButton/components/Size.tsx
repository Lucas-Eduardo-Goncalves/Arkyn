import { IconButton } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Size() {
  return (
    <>
      <Title as="h3">Sizes</Title>

      <Paragraph>
        Use the <code>size</code> property to change the button size. You can set
        the value as <code>xs</code>, <code>sm</code>, <code>md</code> or{" "}
        <code>lg</code>.
      </Paragraph>

      <ExampleContainer>
        <IconButton size="lg" aria-label="Demo Button" icon={CircleDashed} />
        <IconButton size="md" aria-label="Demo Button" icon={CircleDashed} />
        <IconButton size="sm" aria-label="Demo Button" icon={CircleDashed} />
        <IconButton size="xs" aria-label="Demo Button" icon={CircleDashed} />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<IconButton size="lg" aria-label="Demo Button" icon={CircleDashed} />
<IconButton size="md" aria-label="Demo Button" icon={CircleDashed} />
<IconButton size="sm" aria-label="Demo Button" icon={CircleDashed} />
<IconButton size="xs" aria-label="Demo Button" icon={CircleDashed} />`}
      </Fence>
    </>
  );
}

export { Size };
