import { Button } from "@arkyn/components";
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
        <Button size="lg">Some Text</Button>
        <Button size="md">Some Text</Button>
        <Button size="sm">Some Text</Button>
        <Button size="xs">Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button size="lg">Some Text</Button>
<Button size="md">Some Text</Button>
<Button size="sm">Some Text</Button>
<Button size="xs">Some Text</Button>`}
      </Fence>
    </>
  );
}

export { Size };
