import { IconButton } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Size() {
  return (
    <>
      <Title as="h3">Tamanhos</Title>

      <Paragraph>
        Use o suporte <code>size</code> para alterar o tamanho do botão. Você
        pode definir o valor como <code>xs</code>, <code>sm</code>,{" "}
        <code>md</code> ou <code>lg</code>.
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
