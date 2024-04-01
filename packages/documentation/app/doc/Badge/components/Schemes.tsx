import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Esquema de cores</Title>

      <Paragraph>
        Use a propriedade <code>scheme</code> para alterar o esquema de cores do
        badge. Você pode definir o valor para qualquer uma das escalas de cores
        do seu sistema de design, como <code>danger</code>, <code>info</code>,{" "}
        <code>primary</code>, <code>secondary</code>, <code>success</code> e{" "}
        <code>warning</code>.
      </Paragraph>

      <ExampleContainer>
        <Badge scheme="danger">Some Text</Badge>
        <Badge scheme="info">Some Text</Badge>
        <Badge scheme="primary">Some Text</Badge>
        <Badge scheme="secondary">Some Text</Badge>
        <Badge scheme="success">Some Text</Badge>
        <Badge scheme="warning">Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<div className="flex-div">
  <Badge scheme="danger">Some Text</Badge>
  <Badge scheme="info">Some Text</Badge>
  <Badge scheme="primary">Some Text</Badge>
  <Badge scheme="secondary">Some Text</Badge>
  <Badge scheme="success">Some Text</Badge>
  <Badge scheme="warning">Some Text</Badge>
</div>`}
      </Fence>
    </>
  );
}

export { Schemes };
