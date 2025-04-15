import { describe, it, expect } from "vitest";
import { formatToDate } from "../formatToDate";

describe("formatToDate", () => {
  it("should correctly parse a Brazilian date with time", () => {
    const result = formatToDate(
      ["25/12/2023", "15:30:00"],
      "brazilianDate",
      -3
    );
    expect(result.toISOString()).toBe("2023-12-25T18:30:00.000Z");
  });

  it("should correctly parse a Brazilian date without time", () => {
    const result = formatToDate(["25/12/2023"], "brazilianDate", -3);
    expect(result.toISOString()).toBe("2023-12-25T03:00:00.000Z");
  });

  it("should correctly parse an ISO date with time", () => {
    const result = formatToDate(["2023-12-25", "15:30:00"], "isoDate", 0);
    expect(result.toISOString()).toBe("2023-12-25T15:30:00.000Z");
  });

  it("should correctly parse an ISO date without time", () => {
    const result = formatToDate(["2023-12-25"], "isoDate", 0);
    expect(result.toISOString()).toBe("2023-12-25T00:00:00.000Z");
  });

  it("should correctly parse a timestamp with time", () => {
    const result = formatToDate(["2023-12-25", "15:30:00"], "timestamp", 2);
    expect(result.toISOString()).toBe("2023-12-25T13:30:00.000Z");
  });

  it("should correctly parse a timestamp without time", () => {
    const result = formatToDate(["2023-12-25"], "timestamp", 2);
    expect(result.toISOString()).toBe("2023-12-24T22:00:00.000Z");
  });

  it("should throw an error for an invalid input format", () => {
    expect(() =>
      formatToDate(["25/12/2023"], "invalidFormat" as any, 0)
    ).toThrow("Invalid input format");
  });

  it("should throw an error for an invalid date", () => {
    expect(() => formatToDate(["invalid-date"], "brazilianDate", 0)).toThrow(
      "Invalid date"
    );
  });

  it("should throw an error for an invalid time", () => {
    expect(() =>
      formatToDate(["25/12/2023", "invalid-time"], "brazilianDate", 0)
    ).toThrow("Invalid date");
  });
});
