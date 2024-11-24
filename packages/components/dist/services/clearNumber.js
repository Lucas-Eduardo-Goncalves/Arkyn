const clearNumber = (number) => {
    if (typeof number === "number")
        return number;
    return Number(number.toString().replace(/[^0-9-]/g, ""));
};
export { clearNumber };
