import { Dispatch, SetStateAction } from "react";

type LoadingSelectProps = {
  isLoading?: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
};

function LoadingSelect({ isLoading, setIsLoading }: LoadingSelectProps) {
  return (
    <select
      value={`${isLoading}`}
      onChange={(e) => setIsLoading(e.target.value === "true")}
    >
      <option value="true">isLoading: true</option>
      <option value="false">isLoading: false</option>
    </select>
  );
}

export { LoadingSelect };
