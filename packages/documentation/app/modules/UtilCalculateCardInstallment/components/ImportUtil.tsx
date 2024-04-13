import { Fence, Paragraph, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Paragraph>
        Para o uso desta função é obrigatório o pacote <code>@arkyn/types</code>
        , o qual irá trazer os tipos dessa função facilitando seu uso para o
        desenvolvedor.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { calculateCardInstallment } from "@arkyn/utils";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
