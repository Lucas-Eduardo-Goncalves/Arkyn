import { IconButton } from "@arkyn/components";
import { CircleDashed } from "lucide-react";
import { ExampleContainer, Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h2">Uso</Title>

      <ExampleContainer>
        <IconButton icon={CircleDashed} aria-label="Demo button" />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<IconButton icon={CircleDashed} aria-label="Demo button"/>`}
      </Fence>
    </>
  );
}

export { Use };
