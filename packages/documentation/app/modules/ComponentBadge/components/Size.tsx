import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Size() {
  return (
    <>
      <Title as="h3">Tamanhos</Title>

      <Paragraph>
        Use o suporte <code>size</code> para alterar o tamanho do botão. Você
        pode definir o valor como <code>md</code> ou <code>lg</code>.
      </Paragraph>

      <ExampleContainer>
        <Badge size="md">Some Text</Badge>
        <Badge size="lg">Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<div className="flex-div">
  <Badge size="md">Some Text</Badge>
  <Badge size="lg">Some Text</Badge>
</div>`}
      </Fence>
    </>
  );
}

export { Size };
