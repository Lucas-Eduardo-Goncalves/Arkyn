import { X } from "lucide-react";
import "./styles.css";

type MultiSelectMarkProps = {
  label: string;
  value: string;
  handleChangeValue: (value: string) => void;
};

function MultiSelectMark(props: MultiSelectMarkProps) {
  const { label, value, handleChangeValue } = props;

  return (
    <div className="arkynMultiSelectMark">
      {label}

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          handleChangeValue(value);
        }}
      >
        <X />
      </button>
    </div>
  );
}

export { MultiSelectMark };
