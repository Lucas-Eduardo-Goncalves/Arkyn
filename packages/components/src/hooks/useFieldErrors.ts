import { useActionData, useFetcher } from "react-router";
import { useFetcherKey } from "./useFetcherKey";

function useFieldErrors() {
  const actionData = useActionData<any>();

  const fetcherKey = useFetcherKey();
  const fetcher = useFetcher({ key: fetcherKey });

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
