import { SharedCurrencyFormatClient } from "~/modules/SharedCurrencyFormat/client";

export const meta = SharedCurrencyFormatClient.meta;

export default function SharedCurrencyFormatRoute() {
  return <SharedCurrencyFormatClient.View />;
}
