import { Fence, Paragraph, Title } from "~/components";

function ImportUtil() {
  return (
    <>
      <Title as="h3">Import</Title>

      <Paragraph>
        To use this function, the <code>@remix/node</code> package dependency is{" "}
        <strong>necessary</strong>.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { getScopedParams } from "@arkyn/server";`}
      </Fence>
    </>
  );
}

export { ImportUtil };
