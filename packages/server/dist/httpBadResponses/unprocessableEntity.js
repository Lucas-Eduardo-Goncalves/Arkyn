function unprocessableEntity(error) {
    return Response.json({
        status: 400,
        success: false,
        name: error.name,
        message: error.message,
        data: error.data || null,
        fieldErrors: error.fieldErrors || null,
        fields: error.fields || null,
    }, { status: 400 });
}
class UnprocessableEntityError {
    name;
    message;
    fieldErrors;
    fields;
    data;
    constructor(data) {
        this.data = data?.data || null;
        this.fieldErrors = data?.fieldErrors || null;
        this.fields = data?.fields || null;
        this.name = "UnprocessableEntity";
        this.message = data?.message;
    }
}
export { unprocessableEntity, UnprocessableEntityError };
