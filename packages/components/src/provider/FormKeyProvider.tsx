import { FormKeyContext } from "../context/FormKeyContext";

function FormKeyProvider(args: { children: React.ReactNode; rawKey: string }) {
  const { children, rawKey } = args;

  return (
    <FormKeyContext.Provider value={rawKey}>{children}</FormKeyContext.Provider>
  );
}

export { FormKeyProvider };
