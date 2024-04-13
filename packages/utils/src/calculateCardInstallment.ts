import type { CalculateCardInstallmentProps } from "@arkyn/types";

function calculateCardInstallment(args: CalculateCardInstallmentProps) {
  const { cash_price, number_installments, fees = 0.0349 } = args;

  let installment_price = 0;
  let total_price = 0;

  let numerator = Math.pow(1 + fees, number_installments) * fees;
  let denominator = Math.pow(1 + fees, number_installments) - 1;

  installment_price = cash_price * (numerator / denominator);
  total_price = number_installments * installment_price;

  return {
    total_price: +total_price.toFixed(2),
    installment_price: +installment_price.toFixed(2),
  };
}

export { calculateCardInstallment };
