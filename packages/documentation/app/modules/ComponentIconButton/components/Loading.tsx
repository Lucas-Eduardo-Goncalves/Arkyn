import { IconButton } from "@arkyn/components";
import { Car } from "lucide-react";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Loading() {
  return (
    <>
      <Title as="h3">Loading</Title>

      <Paragraph>
        Use <code>isLoading</code> support to show your load status. loading.
      </Paragraph>

      <ExampleContainer>
        <IconButton isLoading aria-label="Demo button" icon={Car} />
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<IconButton isLoading aria-label="Demo button" icon={Car} />`}
      </Fence>
    </>
  );
}

export { Loading };
