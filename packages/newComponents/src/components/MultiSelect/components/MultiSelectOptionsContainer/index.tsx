import { Search } from "lucide-react";
import { ChangeEvent, ReactNode } from "react";

import { Input } from "../../../Input";

import "./styles.css";

type MultiSelectOptionsContainerProps = {
  isFocused: boolean;
  isSearchable: boolean;
  children: ReactNode;
  onSearch: (value: string) => void;
};

function MultiSelectOptionsContainer(props: MultiSelectOptionsContainerProps) {
  const { children, isFocused, isSearchable, onSearch } = props;

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    if (!isSearchable) return;
    onSearch(e.target.value);
  }

  if (!isFocused) return <></>;

  return (
    <div className="arkynMultiSelectOptionsContainer">
      {isSearchable && (
        <Input
          type="search"
          name="search-select"
          variant="underline"
          leftIcon={Search}
          onChange={handleSearch}
        />
      )}

      {children}
    </div>
  );
}

export { MultiSelectOptionsContainer };
