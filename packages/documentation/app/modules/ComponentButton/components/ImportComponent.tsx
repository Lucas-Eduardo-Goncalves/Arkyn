import { Fence, Title } from "~/components";

function ImportComponent() {
  return (
    <>
      <Title as="h3">Import</Title>

      <Fence language="js" type="typescript">
        {`import { Button } from "@arkyn/components";`}
      </Fence>
    </>
  );
}

export { ImportComponent };
