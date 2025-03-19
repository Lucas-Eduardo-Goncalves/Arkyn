import { PhoneInputCountrySelectorProps } from "@arkyn/types";
import { ChevronDown } from "lucide-react";

import { Divider } from "../../../Divider";
import "./styles.css";

function PhoneInputCountrySelector(props: PhoneInputCountrySelectorProps) {
  const { currentCountry, onClick } = props;

  return (
    <div className="phoneInputSelectCountry" onClick={onClick}>
      <img
        className="flag"
        src={currentCountry.flag}
        alt={currentCountry.name}
      />
      <ChevronDown className="chevronDown" strokeWidth={2.5} />
      <Divider orientation="vertical" />
    </div>
  );
}

export { PhoneInputCountrySelector };
