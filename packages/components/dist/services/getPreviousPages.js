import { generatePagesArray } from "./generatePagerArray";
function getPreviousPages(currentPage, siblingsCount) {
    if (currentPage <= 1)
        return [];
    return generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1);
}
export { getPreviousPages };
