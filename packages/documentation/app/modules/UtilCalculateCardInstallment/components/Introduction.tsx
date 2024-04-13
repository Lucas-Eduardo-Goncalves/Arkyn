import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">calculateCardInstallment</Title>

      <Paragraph>
        Uma função para um nicho bem específico, é utilizada para calcular o
        valor das parcelas e o preço total de uma compra parcelada no cartão de
        crédito utilizando uma fórmula do juros compostos.
      </Paragraph>

      <Paragraph>
        È ideal para ser usada em aplicações de e-commerce ou simuladores de
        financiamento, permitindo aos usuários visualizar o impacto do
        parcelamento no valor final da compra.
      </Paragraph>
    </>
  );
}

export { Introduction };
