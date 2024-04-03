import { Dispatch, SetStateAction } from "react";

type ShowLeftIconProps = {
  isLeftIcon?: boolean;
  setIsLeftIcon: Dispatch<SetStateAction<boolean>>;
};

function ShowLeftIcon({ isLeftIcon, setIsLeftIcon }: ShowLeftIconProps) {
  return (
    <select
      value={`${isLeftIcon}`}
      onChange={(e) => setIsLeftIcon(e.target.value === "true")}
    >
      <option value="true">show LeftIcon</option>
      <option value="false">hidden LeftIcon</option>
    </select>
  );
}

export { ShowLeftIcon };
