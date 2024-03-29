import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Uso</Title>

      <ExampleContainer>
        <Button>Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Button>Some Text</Button>`}
      </Fence>
    </>
  );
}

export { Use };
