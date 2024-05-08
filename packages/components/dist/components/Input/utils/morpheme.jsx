function morpheme(data, iconSize, type) {
    if (!data)
        return <></>;
    if (typeof data === "string")
        return <p className={type}>{data}</p>;
    const Data = data;
    return (<p className={type}>
      <Data color="var(--secondary-600)" size={iconSize} strokeWidth={2.5}/>
    </p>);
}
export { morpheme };
