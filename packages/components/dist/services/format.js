const SYMBOL_LENGTH = 3;
const formatCurrency = (locale = "pt-BR", value, currencyType = "BRL", hideSymbol = true) => {
    const formatter = new Intl.NumberFormat(locale, {
        style: "currency",
        currency: currencyType,
        currencyDisplay: "symbol",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    const formattedValue = formatter.format(value);
    return formattedValue.slice(hideSymbol ? SYMBOL_LENGTH : 0);
};
export { formatCurrency };
