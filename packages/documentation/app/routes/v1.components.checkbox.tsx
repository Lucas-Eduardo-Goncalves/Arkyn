import { ComponentCheckboxClient } from "~/modules/ComponentCheckbox/client";

export const meta = ComponentCheckboxClient.meta;

export const action = () => {
  return { fieldErrors: { example: "ERRO" } };
};

export default function CheckboxRoute() {
  return <ComponentCheckboxClient.View />;
}
