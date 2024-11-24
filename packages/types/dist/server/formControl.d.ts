import { Schema } from "zod";
type SuccessResponse<T extends FormControlProps> = {
    success: true;
    data: T[1] extends Schema<infer U> ? U : never;
};
type ErrorResponse = {
    success: false;
    fields: {
        [x: string]: string;
    };
    fieldErrors: {
        [x: string]: string;
    };
};
type FormControlProps = [formData: {
    [k: string]: any;
}, schema: Schema];
type FormControlReturnType<T extends FormControlProps> = SuccessResponse<T> | ErrorResponse;
export type { FormControlProps, FormControlReturnType };
//# sourceMappingURL=formControl.d.ts.map