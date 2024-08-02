declare function clear(value: string): string;
declare function applyMask(value: string, mask: "CPF" | "CNPJ"): string;
declare function getMask(value: string): "CNPJ" | "CPF";
declare const TYPES: {
    CPF: string;
    CNPJ: string;
};
declare const MAX_LENGTH: number;
export { clear, applyMask, MAX_LENGTH, TYPES, getMask };
//# sourceMappingURL=utils.d.ts.map