import { Badge } from "@arkyn/components";
import { ExampleContainer, Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">Badge</Title>

      <Paragraph>
        Os emblemas são usados para destacar o status de um item para
        reconhecimento rápido.
      </Paragraph>

      <ExampleContainer>
        <Badge>My Badge</Badge>
      </ExampleContainer>
    </>
  );
}

export { Introduction };
