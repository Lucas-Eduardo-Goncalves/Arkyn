function currencyFormat(value) {
    const format = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
    return { value: format, valueWithotPrefix: format.replace("R$", "").trim() };
}
export { currencyFormat };
