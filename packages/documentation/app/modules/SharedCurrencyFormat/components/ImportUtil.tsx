import { Fence, Paragraph, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Import</Title>

      <Paragraph>To use this function, you do not need a dependency.</Paragraph>

      <Fence language="js" type="typescript">
        {`import { currecyFormat } from "@arkyn/shared";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
