import { Dispatch, SetStateAction } from "react";
import { VariantProps } from "../../_types";

type VariantSelectProps = {
  variant: VariantProps;
  setVariant: Dispatch<SetStateAction<VariantProps>>;
};

function VariantSelect({ variant, setVariant }: VariantSelectProps) {
  return (
    <select
      value={variant}
      onChange={(e) => setVariant(e.target.value as VariantProps)}
    >
      <option value="solid">variant: solid</option>
      <option value="outline">variant: outline</option>
      <option value="ghost">variant: ghost</option>
      <option value="invisible">variant: invisible</option>
    </select>
  );
}

export { VariantSelect };
