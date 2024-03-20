import { Dispatch, SetStateAction } from "react";

type ShowPrefixProps = {
  isPrefix?: boolean;
  setIsPrefix: Dispatch<SetStateAction<boolean>>;
};

function ShowPrefix({ isPrefix, setIsPrefix }: ShowPrefixProps) {
  return (
    <select
      value={`${isPrefix}`}
      onChange={(e) => setIsPrefix(e.target.value === "true")}
    >
      <option value="true">show prefix</option>
      <option value="false">hidden prefix</option>
    </select>
  );
}

export { ShowPrefix };
