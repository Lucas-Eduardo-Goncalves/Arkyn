import { Paragraph, Title } from "~/components";

function Introduction() {
  return (
    <>
      <Title as="h1">calculateCardInstallment</Title>

      <Paragraph>
        Esta função, foi criada para calcular o valor das parcelas e o preço
        total de uma compra parcelada no cartão de crédito. Ela recebe um objeto
        contendo informações sobre a compra.
      </Paragraph>

      <Paragraph>
        Utilizando a fórmula do juros composto, a função calcula o valor de cada
        parcela (installment_price) e o preço total da compra parcelada
        (total_price).
      </Paragraph>

      <Paragraph>
        Essa função é ideal para ser usada em aplicações de e-commerce ou
        simuladores de financiamento, permitindo aos usuários visualizar o
        impacto do parcelamento no valor final da compra.
      </Paragraph>
    </>
  );
}

export { Introduction };
