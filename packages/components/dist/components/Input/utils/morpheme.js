function morpheme(data, iconSize, type) {
    if (!data)
        return React.createElement(React.Fragment, null);
    if (typeof data === "string")
        return React.createElement("p", { className: type }, data);
    const Data = data;
    return (React.createElement("p", { className: type },
        React.createElement(Data, { color: "var(--secondary-600)", size: iconSize, strokeWidth: 2.5 })));
}
export { morpheme };
