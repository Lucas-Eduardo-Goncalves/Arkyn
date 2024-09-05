import { generatePagesArray } from "./generatePagerArray";

function getNextPages(
  currentPage: number,
  siblingsCount: number,
  lastPage: number
) {
  if (currentPage >= lastPage) return [];
  return generatePagesArray(currentPage, currentPage + siblingsCount);
}

export { getNextPages };
