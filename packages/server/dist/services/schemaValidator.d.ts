import { Schema, z } from "zod";
declare class SchemaValidator<T extends Schema> {
    readonly schema: T;
    functionName: string;
    callerInfo: string;
    constructor(schema: T);
    isValid(data: any): boolean;
    safeValidate(data: any): z.SafeParseReturnType<z.infer<T>, z.infer<T>>;
    validate(data: any): z.infer<T>;
    formValidate(data: any, message?: string): z.infer<T>;
}
export { SchemaValidator };
//# sourceMappingURL=schemaValidator.d.ts.map