function maskSensitiveData(jsonString, sensitiveKeys = ["password", "confirmPassword", "creditCard"]) {
    function maskValue(key, value) {
        if (sensitiveKeys.includes(key))
            return "****";
        return value;
    }
    function recursiveMask(obj) {
        if (Array.isArray(obj)) {
            return obj.map((item) => recursiveMask(item));
        }
        else if (obj !== null && typeof obj === "object") {
            return Object.keys(obj).reduce((acc, key) => {
                let value = obj[key];
                if (typeof value === "string") {
                    try {
                        const parsedValue = JSON.parse(value);
                        if (typeof parsedValue === "object") {
                            value = JSON.stringify(recursiveMask(parsedValue));
                        }
                    }
                    catch (e) { }
                }
                acc[key] = recursiveMask(maskValue(key, value));
                return acc;
            }, {});
        }
        return obj;
    }
    try {
        const jsonObject = JSON.parse(jsonString);
        const maskedObject = recursiveMask(jsonObject);
        return JSON.stringify(maskedObject);
    }
    catch (error) {
        return jsonString;
    }
}
export { maskSensitiveData };
