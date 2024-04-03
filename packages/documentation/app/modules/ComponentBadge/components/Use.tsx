import { Badge } from "@arkyn/components";
import { ExampleContainer, Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h2">Uso</Title>

      <ExampleContainer>
        <Badge>Some Text</Badge>
      </ExampleContainer>

      <Fence language="html" type="typescript">
        {`<Badge>Some Text</Badge>`}
      </Fence>
    </>
  );
}

export { Use };
