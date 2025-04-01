type Format = "DD/MM/YYYY" | "MM-DD-YYYY" | "YYYY-MM-DD";
type Config = {
    minYear?: number;
    maxYear?: number;
};
declare function validateDate(date: string, format: Format, config?: Config): boolean;
export { validateDate };
//# sourceMappingURL=validateDate.d.ts.map