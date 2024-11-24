import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { useScopedParams } from "../../hooks/useScopedParams";
import "./styles.css";
function generatePagesArray(from, to) {
    return [...new Array(to - from)]
        .map((_, index) => {
        return from + index + 1;
    })
        .filter((page) => page > 0);
}
function Pagination(props) {
    const { scope, totalCountRegisters, perPageKey = "per_page", pageKey = "page", siblingsCount = 2, currentPage: baseCurrentPage = 1, registerPerPage: baseRegisterPerPage = 20, ...rest } = props;
    const navigate = useNavigate();
    const { getParam, getScopedSearch } = useScopedParams(scope);
    const currentPage = Number(getParam("page")) || baseCurrentPage;
    const registerPerPage = Number(getParam("per_page")) || baseRegisterPerPage;
    const lastPage = Math.ceil(totalCountRegisters / registerPerPage);
    const previosPages = currentPage > 1
        ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
        : [];
    const nextPages = currentPage < lastPage
        ? generatePagesArray(currentPage, Math.min(currentPage + siblingsCount, lastPage))
        : [];
    function handlePageChange(page) {
        navigate(getScopedSearch({ page }));
    }
    return (_jsxs("div", { className: "arkynPagination", ...rest, children: [_jsx("button", { className: "arkynPaginationIconButton", disabled: currentPage <= 1, onClick: () => handlePageChange(currentPage - 1), children: _jsx(ChevronLeft, {}) }), currentPage > 1 + siblingsCount && (_jsxs(_Fragment, { children: [_jsx("button", { className: "arkynPaginationPageButton", onClick: () => handlePageChange(1), children: "1" }), currentPage > 2 + siblingsCount && (_jsx("button", { disabled: true, className: "arkynPaginationSpread", children: _jsx(Ellipsis, {}) }))] })), previosPages.length > 0 &&
                previosPages.map((page, index) => (_jsx("button", { onClick: () => handlePageChange(page), className: "arkynPaginationPageButton", children: page }, index))), _jsx("button", { className: "arkynPaginationCurrent", disabled: true, children: currentPage }), nextPages.length > 0 &&
                nextPages.map((page, index) => (_jsx("button", { onClick: () => handlePageChange(page), className: "arkynPaginationPageButton", children: page }, index))), currentPage + siblingsCount < lastPage && (_jsxs(_Fragment, { children: [currentPage + 1 + siblingsCount < lastPage && (_jsx("button", { disabled: true, className: "arkynPaginationSpread", children: _jsx(Ellipsis, {}) })), _jsx("button", { className: "arkynPaginationPageButton", onClick: () => handlePageChange(lastPage), children: lastPage })] })), _jsx("button", { className: "arkynPaginationIconButton", disabled: currentPage >= lastPage, onClick: () => handlePageChange(currentPage + 1), children: _jsx(ChevronRight, {}) })] }));
}
export { Pagination };
