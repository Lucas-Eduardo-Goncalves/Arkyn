function formatToBRL(value, showPrefix = true) {
    const format = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL",
    }).format(value);
    return showPrefix ? format : format.replace("R$", "").trim();
}
export { formatToBRL };
