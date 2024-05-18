import { Button } from "@arkyn/components";
import { ExampleContainer, Fence, Note, Paragraph, Title } from "~/components";

function Loading() {
  return (
    <>
      <Title as="h3">Loading</Title>

      <Paragraph>
        Use <code>isLoading</code> support to show your load status. loading. By
        default, the button will show a spinner and will leave the button width
        unchanged. <br />
        You can also pass the <code>loadingText</code> property to add text
        while loading.
      </Paragraph>

      <Note type="warning">
        If <code>loadingText</code> is larger than the inserted text + icon on
        the button itself, the button width characteristic will not be ignored,
        causing the bud to grow in size.
      </Note>

      <ExampleContainer>
        <Button isLoading>Some Text</Button>
        <Button isLoading loadingText="Loading...">
          Add Text
        </Button>
      </ExampleContainer>

      <Fence language="html" type="tsx">
        {`<Button isLoading>Some Text</Button>
<Button isLoading loadingText="Loading...">
  Add Text
</Button>`}
      </Fence>
    </>
  );
}

export { Loading };
