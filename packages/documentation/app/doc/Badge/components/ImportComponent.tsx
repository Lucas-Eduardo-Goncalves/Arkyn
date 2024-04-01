import { Fence, Paragraph, Title } from "~/components";

function ImportComponent() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Paragraph>
        O componente de badge possui suporte para ícones personalizados,
        estilos, etc.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { Badge } from "@arkyn/components";`}
      </Fence>
    </>
  );
}

export { ImportComponent };
