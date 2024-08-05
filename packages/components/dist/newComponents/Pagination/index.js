import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useNavigate } from "@remix-run/react";
import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";
import { generatePagesArray } from "../../utils/generatePagerArray";
import { useScopedParams } from "../../hooks/useScopedParams";
import "./styles.css";
function Pagination(args) {
    const { scope, totalCountRegisters, siblingsCount = 2, ...rest } = args;
    const navigate = useNavigate();
    const { getParam, getScopedSearch } = useScopedParams(scope);
    const currentPage = Number(getParam("page")) || 1;
    const registerPerPage = Number(getParam("per_page")) || 20;
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
    return (_jsxs("div", { className: "arkyn_pagination", ...rest, children: [_jsx("button", { className: "arkyn_pagination-icon_button", disabled: currentPage <= 1, onClick: () => handlePageChange(currentPage - 1), children: _jsx(ChevronLeft, {}) }), currentPage > 1 + siblingsCount && (_jsxs(_Fragment, { children: [_jsx("button", { className: "arkyn_pagination-page_button", onClick: () => handlePageChange(1), children: "1" }), currentPage > 2 + siblingsCount && (_jsx("button", { disabled: true, className: "arkyn_pagination-spread", children: _jsx(Ellipsis, {}) }))] })), previosPages.length > 0 &&
                previosPages.map((page, index) => {
                    return (_jsx("button", { onClick: () => handlePageChange(page), className: "arkyn_pagination-page_button", children: page }, index));
                }), _jsx("button", { className: "arkyn_pagination-current", disabled: true, children: currentPage }), nextPages.length > 0 &&
                nextPages.map((page, index) => {
                    return (_jsx("button", { onClick: () => handlePageChange(page), className: "arkyn_pagination-page_button", children: page }, "next-page-" + index));
                }), currentPage + siblingsCount < lastPage && (_jsxs(_Fragment, { children: [currentPage + 1 + siblingsCount < lastPage && (_jsx("button", { disabled: true, className: "arkyn_pagination-spread", children: _jsx(Ellipsis, {}) })), _jsx("button", { className: "arkyn_pagination-page_button", onClick: () => handlePageChange(lastPage), children: lastPage })] })), _jsx("button", { className: "arkyn_pagination-icon_button", disabled: currentPage >= lastPage, onClick: () => handlePageChange(currentPage + 1), children: _jsx(ChevronRight, {}) })] }));
}
export { Pagination };
