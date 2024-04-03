import { Dispatch, SetStateAction } from "react";
import { VariantProps } from "../../types";

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
      <option value="underline">variant: underline</option>
    </select>
  );
}

export { VariantSelect };
