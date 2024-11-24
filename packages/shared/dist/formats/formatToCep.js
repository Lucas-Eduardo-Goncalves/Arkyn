function formatToCep(value) {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{5})(\d{3})$/);
    if (match) {
        return `${match[1]}-${match[2]}`;
    }
    return value;
}
export { formatToCep };
