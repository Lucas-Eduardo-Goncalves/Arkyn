import { IconButton } from "@arkyn/components";
import { Car } from "lucide-react";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Variant() {
  return (
    <>
      <Title as="h3">Variantes</Title>

      <Paragraph>
        Use o suporte <code>variant</code> para alterar o estilo visual do
        botão. Você pode definir o valor como <code>solid</code>,{" "}
        <code>outline</code>,<code>ghost</code> ou <code>invisible</code>.
      </Paragraph>

      <ExampleContainer>
        <IconButton variant="solid" aria-label="Demo button" icon={Car} />
        <IconButton variant="outline" aria-label="Demo button" icon={Car} />
        <IconButton variant="ghost" aria-label="Demo button" icon={Car} />
        <IconButton variant="invisible" aria-label="Demo button" icon={Car} />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<IconButton variant="solid" aria-label="Demo button" icon={Car} />
<IconButton variant="outline" aria-label="Demo button" icon={Car} />
<IconButton variant="ghost" aria-label="Demo button" icon={Car} />
<IconButton variant="invisible" aria-label="Demo button" icon={Car} />`}
      </Fence>
    </>
  );
}

export { Variant };
