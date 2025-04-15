import { describe, expect, it } from "vitest";
import { formatDate } from "../formatDate";

describe("formatDate", () => {
  it("should format a Brazilian date to ISO format", () => {
    const result = formatDate(["25/12/2023"], "brazilianDate", "YYYY-MM-DD");
    expect(result).toBe("2023-12-25");
  });

  it("should format an ISO date to Brazilian format", () => {
    const result = formatDate(["2023-12-25"], "isoDate", "DD/MM/YYYY");
    expect(result).toBe("25/12/2023");
  });

  it("should format a date with time components", () => {
    const result = formatDate(
      ["2023-12-25", "14:30:00"],
      "isoDate",
      "YYYY-MM-DD hh:mm:ss"
    );
    expect(result).toBe("2023-12-25 14:30:00");
  });

  it("should apply timezone adjustment when formatting", () => {
    const result = formatDate(
      ["2023-12-25", "14:30:00"],
      "isoDate",
      "YYYY-MM-DD hh:mm:ss",
      -3
    );

    expect(result).toBe("2023-12-25 11:30:00");
  });

  it("should handle single-digit days and months in Brazilian format", () => {
    const result = formatDate(
      ["5/1/2023", "00:00:00"],
      "brazilianDate",
      "YYYY-MM-DD"
    );
    expect(result).toBe("2023-01-05");
  });

  it("should handle single-digit days and months in ISO format", () => {
    const result = formatDate(
      ["2023-1-5", "00:00:00"],
      "isoDate",
      "DD/MM/YYYY"
    );

    expect(result).toBe("05/01/2023");
  });

  it("should handle leap years correctly", () => {
    const result = formatDate(
      ["29/02/2024", "00:00:00"],
      "brazilianDate",
      "YYYY-MM-DD"
    );
    expect(result).toBe("2024-02-29");
  });

  it("should throw an error for invalid input format", () => {
    expect(() =>
      formatDate(
        ["25/12/2023", "00:00:00"],
        "invalidFormat" as any,
        "YYYY-MM-DD"
      )
    ).toThrow("Invalid input format");
  });

  it("should throw an error for invalid date string", () => {
    expect(() =>
      formatDate(["invalid-date", "00:00:00"], "brazilianDate", "YYYY-MM-DD")
    ).toThrow("Invalid date");
  });

  it("should throw an error for invalid time string", () => {
    expect(() =>
      formatDate(["25/12/2023", "invalid-time"], "brazilianDate", "YYYY-MM-DD")
    ).toThrow("Invalid date");
  });
});
