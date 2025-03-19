import { PhoneInputCountriesOverlayProps } from "@arkyn/types";
import "./styles.css";

function PhoneInputCountriesOverlay(props: PhoneInputCountriesOverlayProps) {
  const { isOpen, onClick } = props;
  if (!isOpen) return <></>;
  return (
    <aside className="arkynPhoneInputCountriesOverlay" onClick={onClick} />
  );
}

export { PhoneInputCountriesOverlay };
