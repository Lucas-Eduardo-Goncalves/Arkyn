import { Fence, Paragraph, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Import</Title>

      <Paragraph>
        To use this function, the <code>@arkyn/types</code> package is
        mandatory. , which will bring the types of this function, facilitating
        its use for the developer.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { calculateCardInstallment } from "@arkyn/shared";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
