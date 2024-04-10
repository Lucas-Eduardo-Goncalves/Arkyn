import { Note, Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">badRequest</Title>

      <Paragraph>
        Esta função, foi criada para simplificar o processo de envio de
        respostas de erro do tipo "Bad Request" (400) em sua aplicação Remix.
      </Paragraph>

      <Paragraph>
        A função utiliza o utilitário <code>json</code> do Remix para converter
        os dados de erro para o formato JSON e enviá-los na resposta. Ao definir
        o código de status como 400, a função indica ao cliente que a requisição
        enviada está malformada ou contém informações inválidas.
      </Paragraph>

      <Note type="info">
        A função <code>badRequest</code> centraliza o tratamento de erros "Bad
        Request" em sua aplicação Remix, simplificando o código, padronizando
        respostas e oferecendo um ambiente de desenvolvimento mais clean e
        eficiente.
      </Note>
    </>
  );
}

export { Introduction };
