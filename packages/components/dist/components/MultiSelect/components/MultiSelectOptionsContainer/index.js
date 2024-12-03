import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Search } from "lucide-react";
import { Input } from "../../../Input";
import "./styles.css";
function MultiSelectOptionsContainer(props) {
    const { children, isFocused, isSearchable, onSearch } = props;
    function handleSearch(e) {
        if (!isSearchable)
            return;
        onSearch(e.target.value);
    }
    if (!isFocused)
        return _jsx(_Fragment, {});
    return (_jsxs("div", { className: "arkynMultiSelectOptionsContainer", children: [isSearchable && (_jsx(Input, { type: "search", name: "search-select", variant: "underline", leftIcon: Search, onChange: handleSearch })), children] }));
}
export { MultiSelectOptionsContainer };
