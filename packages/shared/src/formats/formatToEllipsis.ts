function formatToEllipsis(text: string, size = 40): string {
  return text.length > size ? `${text.substring(0, size)}...` : text;
}

export { formatToEllipsis };
