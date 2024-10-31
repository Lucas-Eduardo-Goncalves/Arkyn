import { PaginationProps } from "@arkyn/types";
import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import { useScopedParams } from "../../hooks/useScopedParams";

import "./styles.css";

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

function Pagination(props: PaginationProps) {
  const {
    scope,
    totalCountRegisters,
    perPageKey = "per_page",
    pageKey = "page",
    siblingsCount = 2,
    currentPage: baseCurrentPage = 1,
    registerPerPage: baseRegisterPerPage = 20,
    ...rest
  } = props;

  const navigate = useNavigate();
  const { getParam, getScopedSearch } = useScopedParams(scope);

  const currentPage = Number(getParam("page")) || baseCurrentPage;
  const registerPerPage = Number(getParam("per_page")) || baseRegisterPerPage;

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
    <div className="arkynPagination" {...rest}>
      <button
        className="arkynPaginationIconButton"
        disabled={currentPage <= 1}
        onClick={() => handlePageChange(currentPage - 1)}
      >
        <ChevronLeft />
      </button>

      {currentPage > 1 + siblingsCount && (
        <>
          <button
            className="arkynPaginationPageButton"
            onClick={() => handlePageChange(1)}
          >
            1
          </button>

          {currentPage > 2 + siblingsCount && (
            <button disabled className="arkynPaginationSpread">
              <Ellipsis />
            </button>
          )}
        </>
      )}

      {previosPages.length > 0 &&
        previosPages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className="arkynPaginationPageButton"
          >
            {page}
          </button>
        ))}

      <button className="arkynPaginationCurrent" disabled>
        {currentPage}
      </button>

      {nextPages.length > 0 &&
        nextPages.map((page, index) => (
          <button
            key={index}
            onClick={() => handlePageChange(page)}
            className="arkynPaginationPageButton"
          >
            {page}
          </button>
        ))}

      {currentPage + siblingsCount < lastPage && (
        <>
          {currentPage + 1 + siblingsCount < lastPage && (
            <button disabled className="arkynPaginationSpread">
              <Ellipsis />
            </button>
          )}

          <button
            className="arkynPaginationPageButton"
            onClick={() => handlePageChange(lastPage)}
          >
            {lastPage}
          </button>
        </>
      )}

      <button
        className="arkynPaginationIconButton"
        disabled={currentPage >= lastPage}
        onClick={() => handlePageChange(currentPage + 1)}
      >
        <ChevronRight />
      </button>
    </div>
  );
}

export { Pagination };
