import { Fence, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Fence language="js" type="typescript">
        {`import { badRequest } from "@arkyn/utils";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
