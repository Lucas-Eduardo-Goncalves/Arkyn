function currencyFormat(value: number) {
  const format = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  }).format(value);

  return { value: format, valueWithoutPrefix: format.replace("R$", "").trim() };
}

export { currencyFormat };
