import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h2">Uso</Title>

      <ExampleContainer>
        <Button>Some Text</Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button>Some Text</Button>`}
      </Fence>
    </>
  );
}

export { Use };
