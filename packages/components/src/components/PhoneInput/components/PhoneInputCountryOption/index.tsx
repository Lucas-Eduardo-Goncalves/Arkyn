import { PhoneInputCountryOptionProps } from "@arkyn/types";
import { Check } from "lucide-react";
import "./styles.css";

function PhoneInputCountryOption(props: PhoneInputCountryOptionProps) {
  const { country, isActive, handleChangeValue, size } = props;

  const hasActive = isActive ? "active" : "";
  const className = `arkynPhoneInputCountryOption ${size} ${hasActive}`;

  return (
    <div onClick={() => handleChangeValue(country)} className={className}>
      <img src={country.flag} alt={country.name} className="flag" />
      {country.name} <span>{country.code}</span>
      <Check className="check" />
    </div>
  );
}

export { PhoneInputCountryOption };
