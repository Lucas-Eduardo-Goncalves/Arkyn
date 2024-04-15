import { Fence, Paragraph, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Paragraph>
        Para o uso desta função é <strong>obrigatório</strong> a instalação do
        pacote <code>@remix/node</code>.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { badRequest } from "@arkyn/utils";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
