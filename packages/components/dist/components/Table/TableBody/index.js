import { jsx as _jsx } from "react/jsx-runtime";
import { Children } from "react";
import "./styles.css";
function TableBody(props) {
    const { emptyMessage = "Nenhum dado adicionado.", className: baseClassName, children, ...rest } = props;
    const className = `arkynTableBody ${baseClassName}`;
    const isEmpty = Children.count(children) === 0;
    return (_jsx("tbody", { className: className.trim(), ...rest, children: isEmpty ? (_jsx("tr", { className: "arkynTableBodyEmptyLine", children: _jsx("td", { colSpan: 100, children: _jsx("div", { children: emptyMessage }) }) })) : (children) }));
}
export { TableBody };
