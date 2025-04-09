import { describe, it, expect } from "vitest";
import { calculateCardInstallment } from "../calculateCardInstallment";

describe("calculateCardInstallment", () => {
  it("should calculate the total and installment price with default fees", () => {
    const result = calculateCardInstallment({
      cashPrice: 1000,
      numberInstallments: 12,
    });

    expect(result).toEqual({
      totalPrice: 1241.08,
      installmentPrice: 103.42,
    });
  });

  it("should calculate the total and installment price with custom fees", () => {
    const result = calculateCardInstallment({
      cashPrice: 1000,
      numberInstallments: 12,
      fees: 0.02,
    });

    expect(result).toEqual({
      totalPrice: 1134.72,
      installmentPrice: 94.56,
    });
  });

  it("should calculate correctly for a single installment (no interest)", () => {
    const result = calculateCardInstallment({
      cashPrice: 1000,
      numberInstallments: 1,
      fees: 0,
    });

    expect(result).toEqual({
      totalPrice: 1000,
      installmentPrice: 1000,
    });
  });

  it("should calculate correctly for zero fees", () => {
    const result = calculateCardInstallment({
      cashPrice: 500,
      numberInstallments: 5,
      fees: 0,
    });

    expect(result).toEqual({
      totalPrice: 500,
      installmentPrice: 100,
    });
  });

  it("should handle edge case with zero installments", () => {
    expect(() =>
      calculateCardInstallment({
        cashPrice: 1000,
        numberInstallments: 0,
      })
    ).toThrow("Number of installments must be greater than 0");
  });

  it("should handle edge case with negative fees", () => {
    expect(() =>
      calculateCardInstallment({
        cashPrice: 1000,
        numberInstallments: 12,
        fees: -0.01,
      })
    ).toThrow("Fees must be greater than or equal to 0");
  });

  it("should handle large numbers for cash price and installments", () => {
    const result = calculateCardInstallment({
      cashPrice: 1000000,
      numberInstallments: 24,
      fees: 0.01,
    });

    expect(result).toEqual({
      totalPrice: 1129763.33,
      installmentPrice: 47073.47,
    });
  });
});
