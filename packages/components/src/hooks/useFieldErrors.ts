import { useActionData, useFetcher } from "react-router";
import { useFormKey } from "./useFormKey";

function useFieldErrors() {
  const actionData = useActionData<any>();

  const formKey = useFormKey();
  const fetcher = useFetcher({ key: formKey });

  const responseFieldErrors =
    actionData?.fieldErrors || fetcher?.data?.fieldErrors;

  let mappedResponse: { [x: string]: string | undefined | null } = {};

  Object.entries(responseFieldErrors || {}).forEach(([key, value]) => {
    if (typeof value === "string" && typeof key === "string") {
      mappedResponse[key] = value;
    }
  });

  return mappedResponse;
}

export { useFieldErrors };
