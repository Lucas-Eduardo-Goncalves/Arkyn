function formatToCNPJ(value: string): string {
  const cleaned = value.replace(/\D/g, "");
  const match = cleaned.match(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/);
  if (match) {
    return `${match[1]}.${match[2]}.${match[3]}/${match[4]}-${match[5]}`;
  }
  return value;
}

export { formatToCNPJ };
