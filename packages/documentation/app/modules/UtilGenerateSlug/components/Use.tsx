import { Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Uso</Title>

      <Fence language="js" type="typescript">
        {`import { generateSlug } from "@arkyn/utils";

generateSlug("Lucas Gonçalves");`}
      </Fence>
    </>
  );
}

export { Use };
