import { Button } from "@arkyn/components";
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
