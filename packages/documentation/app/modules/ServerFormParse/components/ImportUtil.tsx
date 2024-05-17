import { Fence, Paragraph, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Import</Title>

      <Paragraph>
        To use this function, the <code>@arkyn/types</code> and <code>zod</code>{" "}
        package dependency is <strong>necessary</strong>.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { formParse } from "@arkyn/server";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
