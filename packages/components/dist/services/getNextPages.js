import { generatePagesArray } from "./generatePagerArray";
function getNextPages(currentPage, siblingsCount, lastPage) {
    if (currentPage >= lastPage)
        return [];
    return generatePagesArray(currentPage + 1, currentPage + siblingsCount);
}
export { getNextPages };
