function unprocessableEntity(error) {
    return {
        status: 400,
        success: false,
        name: error.name,
        message: error.message,
        data: error.data || null,
        fieldErrors: error.fieldErrors || null,
        fields: error.fields || null,
    };
}
class UnprocessableEntityError extends Error {
    fieldErrors;
    fields;
    data;
    constructor(data) {
        super(data.message);
        this.data = data?.data || null;
        this.fieldErrors = data?.fieldErrors || null;
        this.fields = data?.fields || null;
        this.name = "UnprocessableEntityError";
    }
}
export { unprocessableEntity, UnprocessableEntityError };
