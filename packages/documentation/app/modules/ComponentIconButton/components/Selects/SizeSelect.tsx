import { Dispatch, SetStateAction } from "react";
import { SizeProps } from "../../types";

type SizeSelectProps = {
  size: SizeProps;
  setSize: Dispatch<SetStateAction<SizeProps>>;
};

function SizeSelect({ size, setSize }: SizeSelectProps) {
  return (
    <select value={size} onChange={(e) => setSize(e.target.value as SizeProps)}>
      <option value="xs">size: xs</option>
      <option value="sm">size: sm</option>
      <option value="md">size: md</option>
      <option value="lg">size: lg</option>
    </select>
  );
}

export { SizeSelect };
