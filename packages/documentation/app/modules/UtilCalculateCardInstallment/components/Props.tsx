import { Paragraph, Title } from "~/components";

function Props() {
  return (
    <>
      <Title as="h3">Propriedades</Title>

      <Paragraph>
        Esta função aceita um único argumento do tipo
        <code>CalculateCardInstallmentProps</code>, que define as propriedades
        necessárias para calcular o preço total e o preço da parcela em uma
        transação de compra parcelada com cartão de crédito.
      </Paragraph>

      <Paragraph>
        O objeto <code>CalculateCardInstallmentProps</code> contém as seguintes
        propriedades:
      </Paragraph>

      <Paragraph>
        <code>cash_price</code>(number): O preço à vista da transação em
        unidades monetárias. EX: (1000.50): Mil reais e cinquenta centavos
      </Paragraph>

      <Paragraph>
        <code>number_installments</code>(number): O número de parcelas desejadas
        para a transação.
      </Paragraph>

      <Paragraph>
        <code>fees</code>(number, opcional): As taxas de juros aplicadas à
        transação, representadas como uma porcentagem. Por padrão, assume-se o
        valor de 3.49% (0.0349)
      </Paragraph>
    </>
  );
}

export { Props };
