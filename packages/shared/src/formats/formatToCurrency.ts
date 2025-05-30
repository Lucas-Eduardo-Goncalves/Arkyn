import { countryCurrencies } from "@arkyn/templates";
import { removeCurrencySymbols } from "../services/removeCurrencySymbols";

type Currencies = keyof typeof countryCurrencies;

type Config = {
  showPrefix?: boolean;
};

type FormatToCurrency = (
  value: number,
  currency: Currencies,
  config?: Config
) => string;

/**
 * Formats a numeric value into a currency string based on the specified currency and configuration.
 *
 * @param value - The numeric value to be formatted.
 * @param currency - The currency code used to determine the formatting style.
 * @param config - Optional configuration object.
 * @param config.showPrefix - Determines whether the currency symbol/prefix should be included in the formatted string. Defaults to `true`.
 *
 * @returns A formatted currency string. If `config.showPrefix` is `false`, the currency symbol is removed.
 *
 * @example
 * ```typescript
 * const formatted = formatToCurrency(1234.56, "USD", { showPrefix: true });
 * console.log(formatted); // "$1,234.56"
 *
 * const withoutPrefix = formatToCurrency(1234.56, "USD", { showPrefix: false });
 * console.log(withoutPrefix); // "1,234.56"
 *
 * const formattedBRL = formatToCurrency(1234.56, "BRL", { showPrefix: true });
 * console.log(formattedBRL); // "R$ 1.234,56"
 *
 * const withoutPrefixBRL = formatToCurrency(1234.56, "BRL", { showPrefix: false });
 * console.log(withoutPrefixBRL); // "1.234,56"
 * ```
 */

const formatToCurrency: FormatToCurrency = (
  value,
  currency,
  config = { showPrefix: true }
) => {
  if (!countryCurrencies[currency]) {
    throw new Error("Unsupported currency code");
  }

  const { countryCurrency, countryLanguage } = countryCurrencies[currency];

  const format = new Intl.NumberFormat(countryLanguage, {
    style: "currency",
    currency: countryCurrency,
  }).format(value);

  return config.showPrefix
    ? format.replace(/\s/g, " ")
    : removeCurrencySymbols(format).replace(/\s/g, " ");
};

export { formatToCurrency };
