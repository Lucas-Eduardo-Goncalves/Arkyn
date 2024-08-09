import { generatePagesArray } from "./generatePagerArray";

function getPreviousPages(currentPage: number, siblingsCount: number) {
  if (currentPage <= 1) return [];
  return generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1);
}

export { getPreviousPages };
