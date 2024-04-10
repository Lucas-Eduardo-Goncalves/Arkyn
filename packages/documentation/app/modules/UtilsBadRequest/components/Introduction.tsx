import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">badRequest</Title>

      <Paragraph>
        É uma utilidade que facilita a criação de respostas de erro HTTP com o
        status de &quot;BadRequest&quot; (400). Essa função foi projetada para
        ser usada em aplicativos web construídos com <code>remix</code>.
      </Paragraph>

      <Paragraph>
        Ao chamar a função, os desenvolvedores podem retornar uma resposta{" "}
        <code>JSON</code> com dados específicos e um status de código{" "}
        <code>HTTP</code> personalizado, se necessário. Isso ajuda a manter o
        código claro e legível, além de fornecer uma maneira consistente de
        lidar com solicitações inválidas ou incorretas no aplicativo.
      </Paragraph>
    </>
  );
}

export { Introduction };
