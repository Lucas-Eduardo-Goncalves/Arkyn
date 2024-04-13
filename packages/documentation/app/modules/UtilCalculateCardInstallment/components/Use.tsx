import { calculateCardInstallment } from "@arkyn/utils";
import { Fence, Paragraph, Title } from "~/components";

function Use() {
  console.log(
    calculateCardInstallment({ cash_price: 1000, number_installments: 12 })
  );

  return (
    <>
      <Title as="h3">Modo de uso</Title>

      <Paragraph>
        Esta função aceita um único argumento do tipo
        <code>CalculateCardInstallmentProps</code>. O objeto contém as seguintes
        propriedades: <br />
      </Paragraph>

      <Paragraph>
        <strong>cash_price:</strong> O preço à vista da transação em unidades
        monetárias. <br />
        <strong>number_installments:</strong> O número de parcelas desejadas
        para a transação. <br />
        <strong>fees:</strong> As taxas de juros aplicadas à transação. Por
        padrão, assume-se o valor de 3.49% (0.0349).
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { calculateCardInstallment } from "@arkyn/utils";

// Exemplo de uso da função calculateCardInstallment
const exampleProps = {
  cash_price: 1000,
  number_installments: 12,
  fees: 0.0349
};

const { total_price, installment_price } = calculateCardInstallment(exampleProps);

console.log("Preço total da compra:", total_price); // 1241.08 
console.log("Preço da parcela:", installment_price); // 103.42`}
      </Fence>
    </>
  );
}

export { Use };
