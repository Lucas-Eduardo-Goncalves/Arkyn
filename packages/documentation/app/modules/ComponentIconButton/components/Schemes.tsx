import { IconButton } from "@arkyn/components";
import { Banana } from "lucide-react";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Schemes() {
  return (
    <>
      <Title as="h3">Esquema de cores</Title>

      <Paragraph>
        Use o suporte <code>scheme</code> para alterar o esquema de cores do
        botão. Você pode definir o valor para <code>danger</code>,{" "}
        <code>primary</code>, <code>success</code> e <code>warning</code>.
      </Paragraph>

      <Note type="info">
        As cores são respectivas com a palheta de cores importada na
        configuração da biblioteca.
      </Note>

      <ExampleContainer>
        <IconButton scheme="danger" icon={Banana} aria-label="Demo Button" />
        <IconButton scheme="primary" icon={Banana} aria-label="Demo Button" />
        <IconButton scheme="success" icon={Banana} aria-label="Demo Button" />
        <IconButton scheme="warning" icon={Banana} aria-label="Demo Button" />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<IconButton scheme="danger" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="primary" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="success" icon={Banana} aria-label="Demo Button" />
<IconButton scheme="warning" icon={Banana} aria-label="Demo Button" />`}
      </Fence>
    </>
  );
}

export { Schemes };
