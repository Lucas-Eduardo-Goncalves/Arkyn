const VALID_FIRST = /^[1-9]{1}$/;
const VALID_NEXT = /^[0-9]{1}$/;
const DELETE_KEY_CODE = 8;
function valueDisplay(inputValue, showBRL) {
    if (inputValue === 0)
        return "";
    const value = (inputValue / 100).toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL",
    });
    if (showBRL)
        return value;
    return value.replace("R$", "").trim();
}
function currencyInputKeyDown(args) {
    const { currencyValue, event, max, setCurrencyValue } = args;
    const { key, keyCode } = event;
    if ((currencyValue === 0 && !VALID_FIRST.test(key)) ||
        (currencyValue !== 0 &&
            !VALID_NEXT.test(key) &&
            keyCode !== DELETE_KEY_CODE)) {
        return;
    }
    const valueString = currencyValue.toString();
    let nextValue;
    if (keyCode !== DELETE_KEY_CODE) {
        const nextValueString = currencyValue === 0 ? key : `${valueString}${key}`;
        nextValue = Number.parseInt(nextValueString, 10);
    }
    else {
        const nextValueString = valueString.slice(0, -1);
        nextValue =
            nextValueString === "" ? 0 : Number.parseInt(nextValueString, 10);
    }
    if (nextValue > Number(max))
        return;
    setCurrencyValue(nextValue);
}
export { valueDisplay, currencyInputKeyDown };
