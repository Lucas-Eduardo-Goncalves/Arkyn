import { IconButton } from "@arkyn/components";
import { Car } from "lucide-react";
import { ExampleContainer, Fence, Paragraph, Title } from "~/components";

function Loading() {
  return (
    <>
      <Title as="h3">Loading</Title>

      <Paragraph>
        Use the <code>isLoading</code> property to show your loading status.
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
