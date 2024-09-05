import { generatePagesArray } from "./generatePagerArray";
function getNextPages(currentPage, siblingsCount, lastPage) {
    if (currentPage >= lastPage)
        return [];
    return generatePagesArray(currentPage, currentPage + siblingsCount);
}
export { getNextPages };
