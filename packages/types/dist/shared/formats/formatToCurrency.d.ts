import { countryCurrencies } from "@arkyn/templates";
type Currencies = keyof typeof countryCurrencies;
type Config = {
    showPrefix?: boolean;
};
type FormatToCurrency = (value: number, currency: Currencies, config?: Config) => string;
export type { FormatToCurrency };
//# sourceMappingURL=formatToCurrency.d.ts.map