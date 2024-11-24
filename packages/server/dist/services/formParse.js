export function formParse([formData, schema,]) {
    const zodResponse = schema.safeParse(formData);
    if (zodResponse.success === false) {
        const errorsArray = Object.entries(zodResponse.error.formErrors.fieldErrors);
        const errorsObject = Object.fromEntries(errorsArray.map((item) => [item[0], item[1]?.[0] || "Error"]));
        return {
            success: zodResponse.success,
            fieldErrors: errorsObject,
            fields: formData,
        };
    }
    else {
        return { success: zodResponse.success, data: zodResponse.data };
    }
}
