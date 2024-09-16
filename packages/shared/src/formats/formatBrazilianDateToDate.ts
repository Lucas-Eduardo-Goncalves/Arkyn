function formatBrazilianDateToDate(brazilianData: string) {
  const [day, month, year] = brazilianData.split("/").map(Number);
  const formattedDate = `${year}-${month}-${day}`;

  return new Date(formattedDate);
}

export { formatBrazilianDateToDate };
