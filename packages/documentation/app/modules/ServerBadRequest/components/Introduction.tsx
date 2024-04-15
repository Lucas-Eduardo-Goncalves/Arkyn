import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">badRequest</Title>

      <Paragraph>
        Uma função simples para simplificar o processo de envio de respostas de
        erro em sua aplicação Remix.
      </Paragraph>

      <Paragraph>
        A função utiliza o utilitário <code>json</code> do Remix para converter
        os dados de erro para o formato JSON e enviá-los na resposta. Ao definir
        o código de status como 400 (padrão), a função indica ao cliente que a
        requisição enviada está malformada ou contém informações inválidas.
      </Paragraph>

      <Paragraph>
        Seu intuito é centralizar o tratamento de erros em sua aplicação,
        simplificando o código, padronizando respostas e oferecendo um ambiente
        de desenvolvimento mais eficiente.
      </Paragraph>
    </>
  );
}

export { Introduction };
