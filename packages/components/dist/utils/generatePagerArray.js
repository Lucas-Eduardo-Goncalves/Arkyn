function generatePagesArray(from, to) {
    return [...new Array(to - from)]
        .map((_, index) => {
        return from + index + 1;
    })
        .filter((page) => page > 0);
}
export { generatePagesArray };
