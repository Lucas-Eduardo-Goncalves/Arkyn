import { PaginationProps } from "@arkyn/types";
import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

import { useScopedParams } from "../../hooks/useScopedParams";
import { getNextPages, getPreviousPages } from "../../services";

import "./styles.css";

function Pagination(props: PaginationProps) {
  const {
    scope,
    totalCountRegisters,
    perPageKey = "per_page",
    pageKey = "page",
    siblingsCount = 2,
    ...rest
  } = props;

  const navigate = useNavigate();
  const { getParam, getScopedSearch } = useScopedParams(scope);

  const currentPage = Number(getParam(pageKey)) || 1;
  const registerPerPage = Number(getParam(perPageKey)) || 20;

  const lastPage = Math.ceil(totalCountRegisters / registerPerPage);

  const previosPages = getPreviousPages(currentPage, siblingsCount);
  const nextPages = getNextPages(currentPage, siblingsCount, lastPage);

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

      {previosPages.map((page, index) => (
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

      {nextPages.map((page, index) => (
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
