import { Fence, Paragraph, Title } from "~/components";

function ImportComponent() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Paragraph>
        O componente de botão com suporte para ícones personalizados, estilos,
        etc.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { Button } from "@arkyn/components";`}
      </Fence>
    </>
  );
}

export { ImportComponent };
