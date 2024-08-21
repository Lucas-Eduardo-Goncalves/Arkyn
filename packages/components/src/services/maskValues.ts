import { formatCurrency } from "./format";
import { normalizeValue } from "./normalizeValue";

const maskValues = (
  locale: string,
  inputFieldValue: string | number | undefined,
  currency: string
): [number, string] => {
  if (!inputFieldValue) return [0, ""];

  const value = normalizeValue(inputFieldValue);
  const maskedValue = formatCurrency(locale, value, currency);

  return [value, maskedValue];
};

export { maskValues };
