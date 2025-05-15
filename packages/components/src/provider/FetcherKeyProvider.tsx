import { useId } from "react";
import { FetcherKeyContext } from "../context/FetcherKeyContext";

function FetcherKeyProvider(args: {
  children: React.ReactNode;
  rawKey?: string;
}) {
  const { children, rawKey } = args;

  let fetcherKey = "";

  if (!rawKey) fetcherKey = useId();
  else fetcherKey = rawKey;

  return (
    <FetcherKeyContext.Provider value={fetcherKey}>
      {children}
    </FetcherKeyContext.Provider>
  );
}

export { FetcherKeyProvider };
