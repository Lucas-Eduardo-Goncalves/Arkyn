import { Fence, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">Uso</Title>

      <Fence language="js" type="typescript">
        {`import { calculateCardInstallment } from "@arkyn/utils";

// Exemplo de uso da função calculateCardInstallment
const exampleProps = {
  cash_price: 1000,
  number_installments: 12,
  fees: 0.0349
};

const { total_price, installment_price } = calculateCardInstallment(exampleProps);

console.log("Preço total da compra:", total_price);
console.log("Preço da parcela:", installment_price);`}
      </Fence>
    </>
  );
}

export { Use };
