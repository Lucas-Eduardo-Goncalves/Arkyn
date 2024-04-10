import { Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Uso</Title>

      <Fence language="js" type="typescript">
        {`import { generateColorByString } from "@arkyn/utils";

generateColorByString("Lucas Gonçalves");`}
      </Fence>
    </>
  );
}

export { Use };
