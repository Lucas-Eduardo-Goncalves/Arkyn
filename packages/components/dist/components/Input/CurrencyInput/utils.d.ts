import type { KeyboardEvent } from "react";
type OnKeyDownProps = {
    event: KeyboardEvent<HTMLDivElement>;
    currencyValue: number;
    setCurrencyValue: (value: number) => void;
    max: number;
};
declare function valueDisplay(inputValue: number, showBRL: boolean): string;
declare function currencyInputKeyDown(args: OnKeyDownProps): void;
export { valueDisplay, currencyInputKeyDown };
//# sourceMappingURL=utils.d.ts.map