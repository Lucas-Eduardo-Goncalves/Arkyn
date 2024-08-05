import { PaginationProps } from "@arkyn/types";
import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import { generatePagesArray } from "../../utils/generatePagerArray";
import { useScopedParams } from "../../hooks/useScopedParams";

import "./styles.css";

function Pagination(args: PaginationProps) {
  const { scope, totalCountRegisters, siblingsCount = 2, ...rest } = args;

  const navigate = useNavigate();
  const { getParam, getScopedSearch } = useScopedParams(scope);

  const currentPage = Number(getParam("page")) || 1;
  const registerPerPage = Number(getParam("per_page")) || 20;

  const lastPage = Math.ceil(totalCountRegisters / registerPerPage);

  const previosPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  function handlePageChange(page: number) {
    navigate(getScopedSearch({ page }));
  }

  return (
    <div className="arkyn_pagination" {...rest}>
      <button
        className="arkyn_pagination-icon_button"
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft />
      </button>

      {currentPage > 1 + siblingsCount && (
        <>
          <button
            className="arkyn_pagination-page_button"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>
          {currentPage > 2 + siblingsCount && (
            <button disabled className="arkyn_pagination-spread">
              <Ellipsis />
            </button>
          )}
        </>
      )}

      {previosPages.length > 0 &&
        previosPages.map((page, index) => {
          return (
            <button
              key={index}
              onClick={() => handlePageChange(page)}
              className="arkyn_pagination-page_button"
            >
              {page}
            </button>
          );
        })}

      <button className="arkyn_pagination-current" disabled>
        {currentPage}
      </button>

      {nextPages.length > 0 &&
        nextPages.map((page, index) => {
          return (
            <button
              key={"next-page-" + index}
              onClick={() => handlePageChange(page)}
              className="arkyn_pagination-page_button"
            >
              {page}
            </button>
          );
        })}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <button disabled className="arkyn_pagination-spread">
              <Ellipsis />
            </button>
          )}
          <button
            className="arkyn_pagination-page_button"
            onClick={() => handlePageChange(lastPage)}
          >
            {lastPage}
          </button>
        </>
      )}

      <button
        className="arkyn_pagination-icon_button"
        disabled={currentPage >= lastPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export { Pagination };
