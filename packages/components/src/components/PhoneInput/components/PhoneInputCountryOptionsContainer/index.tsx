import { PhoneInputCountryOptionsContainerProps } from "@arkyn/types";
import { ChangeEvent } from "react";

import "./styles.css";

function PhoneInputCountryOptionsContainer(
  props: PhoneInputCountryOptionsContainerProps
) {
  const { children, isOpen, onSearch, search, placeholder } = props;

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    onSearch(e.target.value);
  }

  if (!isOpen) return <></>;

  return (
    <div className="arkynPhoneInputCountryOptionsContainer">
      <input
        type="search"
        name="search-select"
        className="arkynPhoneInputCountryOptionsContainerSearchSelect"
        value={search}
        id="input-search"
        placeholder={placeholder}
        onChange={handleSearch}
      />

      {children}
    </div>
  );
}

export { PhoneInputCountryOptionsContainer };
