import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">Button</Title>

      <Paragraph>
        Um botão significa uma operação (ou uma série de operações). Clicar em
        um botão acionará a lógica de negócios correspondente.
      </Paragraph>
    </>
  );
}

export { Introduction };
