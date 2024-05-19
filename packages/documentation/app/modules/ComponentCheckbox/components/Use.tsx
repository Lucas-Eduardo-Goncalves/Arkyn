import { Checkbox } from "@arkyn/components";
import { ExampleContainer, Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h2">How to use</Title>

      <ExampleContainer>
        <Checkbox name="my-checkbox" />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Checkbox name="my-checkbox"/>`}
      </Fence>
    </>
  );
}

export { Use };
