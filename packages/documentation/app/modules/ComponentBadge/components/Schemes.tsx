import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Esquema de cores</Title>

      <Paragraph>
        Use o suporte <code>scheme</code> para alterar o esquema de cores do
        emblema. Você pode definir o valor para <code>danger</code>,{" "}
        <code>info</code>, <code>primary</code>, <code>secondary</code>,{" "}
        <code>success</code> ou <code>warning</code>.
      </Paragraph>

      <Note type="info">
        As cores são respectivas com a palheta de cores importada na
        configuração da biblioteca.
      </Note>

      <ExampleContainer>
        <Badge scheme="danger">Some Text</Badge>
        <Badge scheme="info">Some Text</Badge>
        <Badge scheme="primary">Some Text</Badge>
        <Badge scheme="secondary">Some Text</Badge>
        <Badge scheme="success">Some Text</Badge>
        <Badge scheme="warning">Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Badge scheme="danger">Some Text</Badge>
<Badge scheme="info">Some Text</Badge>
<Badge scheme="primary">Some Text</Badge>
<Badge scheme="secondary">Some Text</Badge>
<Badge scheme="success">Some Text</Badge>
<Badge scheme="warning">Some Text</Badge>
`}
      </Fence>
    </>
  );
}

export { Schemes };
