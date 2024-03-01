import { GenerateButtonList } from "~/components";

export default function () {
  return (
    <>
      <h2>Primary Buttons</h2>
      <GenerateButtonList scheme="primary" variant="solid" />
      <GenerateButtonList scheme="primary" variant="outline" />
      <GenerateButtonList scheme="primary" variant="ghost" />
      <GenerateButtonList scheme="primary" variant="invisible" />

      <h2>Danger Buttons</h2>
      <GenerateButtonList scheme="danger" variant="solid" />
      <GenerateButtonList scheme="danger" variant="outline" />
      <GenerateButtonList scheme="danger" variant="ghost" />
      <GenerateButtonList scheme="danger" variant="invisible" />

      <h2>Success Buttons</h2>
      <GenerateButtonList scheme="success" variant="solid" />
      <GenerateButtonList scheme="success" variant="outline" />
      <GenerateButtonList scheme="success" variant="ghost" />
      <GenerateButtonList scheme="success" variant="invisible" />

      <h2>Warning Buttons</h2>
      <GenerateButtonList scheme="warning" variant="solid" />
      <GenerateButtonList scheme="warning" variant="outline" />
      <GenerateButtonList scheme="warning" variant="ghost" />
      <GenerateButtonList scheme="warning" variant="invisible" />
    </>
  );
}
