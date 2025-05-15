import { useContext } from "react";
import { FetcherKeyContext } from "../context/FetcherKeyContext";

function useFetcherKey() {
  const contextData = useContext(FetcherKeyContext);
  return contextData;
}

export { useFetcherKey };
