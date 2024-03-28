import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Esquema de cores</Title>

      <Paragraph>
        Use a propriedade <code>scheme</code> para alterar o esquema de cores do
        botão. Você pode definir o valor para qualquer uma das escalas de cores
        do seu sistema de design, como <code>danger</code>, <code>primary</code>
        , <code>success</code> e <code>warning</code>.
      </Paragraph>

      <ExampleContainer>
        <Button scheme="danger">Some Text</Button>
        <Button scheme="primary">Some Text</Button>
        <Button scheme="success">Some Text</Button>
        <Button scheme="warning">Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<div className="flex-div">
  <Button scheme="danger">Some Text</Button>
  <Button scheme="primary">Some Text</Button>
  <Button scheme="success">Some Text</Button>
  <Button scheme="warning">Some Text</Button>
</div>`}
      </Fence>
    </>
  );
}

export { Schemes };
