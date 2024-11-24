function formatToEllipsis(text, size = 40) {
    return text.length > size ? `${text.substring(0, size)}...` : text;
}
export { formatToEllipsis };
