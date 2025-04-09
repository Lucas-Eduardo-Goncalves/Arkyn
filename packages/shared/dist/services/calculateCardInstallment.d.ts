import type { CalculateCardInstallmentFunction } from "@arkyn/types";
/**
 * Calculates the installment price and total price for a card payment plan.
 *
 * @remarks
 * **Important:** When the interest amount (`fees`) is equal to 0 or the number of installments (`numberInstallments`) is equal to 1, no interest will be charged.
 *
 * @throws Will throw an error if the number of installments is less than or equal to 0.
 * @throws Will throw an error if the fees are less than 0.
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
declare const calculateCardInstallment: CalculateCardInstallmentFunction;
export { calculateCardInstallment };
//# sourceMappingURL=calculateCardInstallment.d.ts.map