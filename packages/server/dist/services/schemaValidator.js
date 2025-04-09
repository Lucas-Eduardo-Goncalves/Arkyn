import { Schema, z } from "zod";
import { ServerError } from "../http/badResponses/serverError";
import { UnprocessableEntity } from "../http/badResponses/unprocessableEntity";
import { formParse } from "./formParse";
import { getCaller } from "./getCaller";
import { httpDebug } from "./httpDebug";
function formatErrorMessage(error) {
    const title = "Error validating:";
    const lines = error.issues.map(({ path, message }) => `-> ${path.join(".")}: ${message}`);
    return [title, ...lines].join("\n");
}
class SchemaValidator {
    schema;
    functionName;
    callerInfo;
    constructor(schema) {
        this.schema = schema;
        const { callerInfo, functionName } = getCaller();
        this.callerInfo = callerInfo;
        this.functionName = functionName;
    }
    isValid(data) {
        return this.schema.safeParse(data).success;
    }
    safeValidate(data) {
        return this.schema.safeParse(data);
    }
    validate(data) {
        try {
            return this.schema.parse(data);
        }
        catch (error) {
            throw new ServerError(formatErrorMessage(error));
        }
    }
    formValidate(data, message) {
        const formParsed = formParse([data, this.schema]);
        if (!formParsed.success) {
            httpDebug("UnprocessableEntity", formParsed);
            const firstErrorKey = Object.keys(formParsed.fieldErrors)[0];
            throw new UnprocessableEntity({
                fields: formParsed.fields,
                fieldErrors: formParsed.fieldErrors,
                data: { scrollTo: firstErrorKey },
                message,
            }, false);
        }
        return formParsed.data;
    }
}
export { SchemaValidator };
