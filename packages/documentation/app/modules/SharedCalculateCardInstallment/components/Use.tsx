import { Fence, Paragraph, Title } from "~/components";

function Use() {
  return (
    <>
      <Title as="h3">How to use</Title>

      <Paragraph>
        This function accepts a single value of the type
        <code>CalculateCardInstallmentProps</code>. The object contains the
        following properties: <br />
      </Paragraph>

      <Paragraph>
        <strong>cash_price:</strong> The cash price of the transaction in monetary units.
         <br />
        <strong>number_installments:</strong> The number of installations
        desired for the transaction. <br />
        <strong>fees:</strong> The interest rates applied to the transaction.
        Per standard, the value of 3.49% (0.0349) is assumed.
      </Paragraph>

      <Fence language="js" type="typescript">
        {`import { calculateCardInstallment } from "@arkyn/shared";

const exampleProps = {
  cash_price: 1000,
  number_installments: 12,
  fees: 0.0349
};

const { total_price, installment_price } = calculateCardInstallment(exampleProps);

console.log("Total purchase price:", total_price); // 1241.08 
console.log("Installment price:", installment_price); // 103.42`}
      </Fence>
    </>
  );
}

export { Use };
