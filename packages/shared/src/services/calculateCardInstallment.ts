import type { CalculateCardInstallmentFunction } from "@arkyn/types";

/**
 * Calculates the installment price and total price for a card payment plan.
 *
 * @param props - The input parameters for the calculation.
 * @param props.cashPrice - The total cash price of the product or service.
 * @param props.numberInstallments - The number of installments for the payment plan.
 * @param props.fees - The interest rate per installment (default is 0.0349).
 *
 * @returns An object containing:
 * - `totalPrice`: The total price to be paid, rounded to two decimal places.
 * - `installmentPrice`: The price of each installment, rounded to two decimal places.
 *
 * @example
 * ```typescript
 * const result = calculateCardInstallment({
 *   cashPrice: 1000,
 *   numberInstallments: 12,
 *   fees: 0.02,
 * });
 * console.log(result);
 * // Output: { totalPrice: 1124.62, installmentPrice: 93.72 }
 * ```
 */

const calculateCardInstallment: CalculateCardInstallmentFunction = (props) => {
  const { cashPrice, numberInstallments, fees = 0.0349 } = props;

  let installmentPrice = 0;
  let totalPrice = 0;

  let numerator = Math.pow(1 + fees, numberInstallments) * fees;
  let denominator = Math.pow(1 + fees, numberInstallments) - 1;

  installmentPrice = cashPrice * (numerator / denominator);
  totalPrice = numberInstallments * installmentPrice;

  return {
    totalPrice: +totalPrice.toFixed(2),
    installmentPrice: +installmentPrice.toFixed(2),
  };
};

export { calculateCardInstallment };
