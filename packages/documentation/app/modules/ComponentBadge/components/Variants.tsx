import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Variant() {
  return (
    <>
      <Title as="h3">Variantes</Title>

      <Paragraph>
        Use o suporte <code>variant</code> para alterar o estilo visual do
        emblema. Você pode definir o valor como <code>solid</code>,{" "}
        <code>outline</code> ou <code>ghost</code>.
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
