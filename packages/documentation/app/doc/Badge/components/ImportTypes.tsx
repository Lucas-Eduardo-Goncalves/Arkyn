import { Fence, Paragraph, Title } from "~/components";

function ImportType() {
  return (
    <>
      <Title as="h3">Tipos</Title>

      <Paragraph>Objeto de propriedades do badge.</Paragraph>

      <Fence language="js" type="typescript">
        {`import { BadgeProps } from "@arkyn/types";`}
      </Fence>
    </>
  );
}

export { ImportType };
