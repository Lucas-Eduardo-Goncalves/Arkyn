import { Fence, Paragraph, Title } from "~/components";

function ImportType() {
  return (
    <>
      <Title as="h3">Tipos</Title>

      <Paragraph>Objeto de propriedades do botão.</Paragraph>

      <Fence language="js" type="typescript">
        {`import { ButtonProps } from "@arkyn/types";`}
      </Fence>
    </>
  );
}

export { ImportType };
