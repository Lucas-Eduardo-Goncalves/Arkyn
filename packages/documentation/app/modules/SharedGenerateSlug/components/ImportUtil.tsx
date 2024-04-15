import { Fence, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Importar</Title>

      <Fence language="js" type="typescript">
        {`import { generateSlug } from "@arkyn/shared";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
