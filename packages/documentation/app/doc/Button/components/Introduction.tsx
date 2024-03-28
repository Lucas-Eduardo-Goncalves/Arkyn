import { Button } from "@arkyn/components";
import { ExampleContainer, Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">Button</Title>

      <Paragraph>
        Os botões podem ser configurados com diferentes tamanhos, variantes de
        estilo, esquemas de cores, icones e um estado de carregamento.
      </Paragraph>

      <ExampleContainer>
        <Button>My Button</Button>
      </ExampleContainer>
    </>
  );
}

export { Introduction };
