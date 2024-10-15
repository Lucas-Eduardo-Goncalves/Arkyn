import { useActionData, useFetchers, useNavigation } from "@remix-run/react";
import { useEffect, useState } from "react";
function useFieldErrors() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const fetchers = useFetchers();
    const [fetcherFieldErrors, setFetcherFieldErrors] = useState(null);
    function compareObjects(obj1, obj2) {
        return JSON.stringify(obj1) === JSON.stringify(obj2);
    }
    function handleClearFields() {
        if (fetcherFieldErrors)
            setFetcherFieldErrors(null);
        return;
    }
    // create field errors
    useEffect(() => {
        let newFieldErrors = fetchers[0]?.data?.fieldErrors || {};
        if (!compareObjects(fetcherFieldErrors, newFieldErrors)) {
            if (Object.entries(newFieldErrors).length !== 0) {
                setFetcherFieldErrors(newFieldErrors);
            }
        }
    }, [fetchers, actionData]);
    // clear field errors
    useEffect(() => {
        if (fetchers[0]?.state === "submitting")
            handleClearFields();
    }, [fetchers, navigation]);
    const responseFieldErrors = actionData?.fieldErrors || fetcherFieldErrors;
    let mappedResponse = {};
    Object.entries(responseFieldErrors || {}).forEach(([key, value]) => {
        if (typeof value === "string" && typeof key === "string") {
            mappedResponse[key] = value;
        }
    });
    return mappedResponse;
}
export { useFieldErrors };
