import { Fence, Title } from "~/components";

function ImportComponent() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Fence language="js" type="typescript">
        {`import { IconButton } from "@arkyn/components";`}
      </Fence>
    </>
  );
}

export { ImportComponent };
