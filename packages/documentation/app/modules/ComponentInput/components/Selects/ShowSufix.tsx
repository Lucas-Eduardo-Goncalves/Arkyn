import { Dispatch, SetStateAction } from "react";

type ShowSufixProps = {
  isSufix?: boolean;
  setIsSufix: Dispatch<SetStateAction<boolean>>;
};

function ShowSufix({ isSufix, setIsSufix }: ShowSufixProps) {
  return (
    <select
      value={`${isSufix}`}
      onChange={(e) => setIsSufix(e.target.value === "true")}
    >
      <option value="true">show sufix</option>
      <option value="false">hidden sufix</option>
    </select>
  );
}

export { ShowSufix };
