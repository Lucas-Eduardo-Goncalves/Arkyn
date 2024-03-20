import { Dispatch, SetStateAction } from "react";

type ShowRightIconProps = {
  isRightIcon?: boolean;
  setIsRightIcon: Dispatch<SetStateAction<boolean>>;
};

function ShowRightIcon({ isRightIcon, setIsRightIcon }: ShowRightIconProps) {
  return (
    <select
      value={`${isRightIcon}`}
      onChange={(e) => setIsRightIcon(e.target.value === "true")}
    >
      <option value="true">show RightIcon</option>
      <option value="false">hidden RightIcon</option>
    </select>
  );
}

export { ShowRightIcon };
