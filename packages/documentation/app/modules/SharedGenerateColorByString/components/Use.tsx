import { Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Uso</Title>

      <Fence language="js" type="typescript">
        {`import { generateColorByString } from "@arkyn/shared";

generateColorByString("Lucas Gonçalves");`}
      </Fence>
    </>
  );
}

export { Use };
