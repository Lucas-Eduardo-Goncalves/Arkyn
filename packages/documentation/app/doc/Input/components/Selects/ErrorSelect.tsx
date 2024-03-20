import { Dispatch, SetStateAction } from "react";

type ErrorSelectProps = {
  isError?: boolean;
  setIsError: Dispatch<SetStateAction<boolean>>;
};

function ErrorSelect({ isError, setIsError }: ErrorSelectProps) {
  return (
    <select
      value={`${isError}`}
      onChange={(e) => setIsError(e.target.value === "true")}
    >
      <option value="true">isError: true</option>
      <option value="false">isError: false</option>
    </select>
  );
}

export { ErrorSelect };
