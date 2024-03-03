import { GenerateButtonList, Group } from "~/components";

export default () => (
  <>
    <h4>Primary Buttons</h4>
    <Group>
      <GenerateButtonList scheme="primary" variant="solid" />
      <GenerateButtonList scheme="primary" variant="outline" />
      <GenerateButtonList scheme="primary" variant="ghost" />
      <GenerateButtonList scheme="primary" variant="invisible" />
    </Group>

    <h4>Danger Buttons</h4>
    <Group>
      <GenerateButtonList scheme="danger" variant="solid" />
      <GenerateButtonList scheme="danger" variant="outline" />
      <GenerateButtonList scheme="danger" variant="ghost" />
      <GenerateButtonList scheme="danger" variant="invisible" />
    </Group>

    <h4>Success Buttons</h4>
    <Group>
      <GenerateButtonList scheme="success" variant="solid" />
      <GenerateButtonList scheme="success" variant="outline" />
      <GenerateButtonList scheme="success" variant="ghost" />
      <GenerateButtonList scheme="success" variant="invisible" />
    </Group>

    <h4>Warning Buttons</h4>
    <Group>
      <GenerateButtonList scheme="warning" variant="solid" />
      <GenerateButtonList scheme="warning" variant="outline" />
      <GenerateButtonList scheme="warning" variant="ghost" />
      <GenerateButtonList scheme="warning" variant="invisible" />
    </Group>
  </>
);
