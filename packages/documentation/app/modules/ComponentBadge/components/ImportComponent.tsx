import { Fence, Title } from "~/components";

function ImportComponent() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Fence language="js" type="tsx">
        {`import { Badge } from "@arkyn/components";`}
      </Fence>
    </>
  );
}

export { ImportComponent };
