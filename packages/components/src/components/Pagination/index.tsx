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

      {previosPages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className="arkyn_pagination-page_button"
        >
          {page}
        </button>
      ))}

      <button className="arkyn_pagination-current" disabled>
        {currentPage}
      </button>

      {nextPages.map((page, index) => (
        <button
          key={index}
          onClick={() => handlePageChange(page)}
          className="arkyn_pagination-page_button"
        >
          {page}
        </button>
      ))}

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
