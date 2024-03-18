import { Dispatch, SetStateAction } from "react";
import { SchemeProps } from "../../_types";

type SchemeSelectProps = {
  scheme: SchemeProps;
  setScheme: Dispatch<SetStateAction<SchemeProps>>;
};

function SchemeSelect({ scheme, setScheme }: SchemeSelectProps) {
  return (
    <select
      value={scheme}
      onChange={(e) => setScheme(e.target.value as SchemeProps)}
    >
      <option value="primary">scheme: primary</option>
      <option value="secondary">scheme: secondary</option>
      <option value="success">scheme: success</option>
      <option value="warning">scheme: warning</option>
      <option value="danger">scheme: danger</option>
      <option value="info">scheme: info</option>
    </select>
  );
}

export { SchemeSelect };
