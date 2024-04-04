import { Paragraph, Title } from "~/components";

function Label() {
  return (
    <>
      <Title as="h2">Etiqueta</Title>

      <Paragraph>
        O botão de icone por não conter um conteúdo descritivo, é{" "}
        <strong>obrigatório</strong> o uso de uma propriedade{" "}
        <code>aria-label</code>, essa propriedade fará com que o botão tenha uma
        descrição sobre sua funcionalidade, fazendo com que pessoas com
        problemas visuais consigam utilizar seu website normalmente.
      </Paragraph>
    </>
  );
}

export { Label };
