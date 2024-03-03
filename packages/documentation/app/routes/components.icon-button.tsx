import { GenerateIconButtonList, Group } from "~/components";

export default () => (
  <>
    <h4>Primary Icon Buttons</h4>
    <Group>
      <GenerateIconButtonList scheme="primary" variant="solid" />
      <GenerateIconButtonList scheme="primary" variant="outline" />
      <GenerateIconButtonList scheme="primary" variant="ghost" />
      <GenerateIconButtonList scheme="primary" variant="invisible" />
    </Group>

    <h4>Danger Icon Buttons</h4>
    <Group>
      <GenerateIconButtonList scheme="danger" variant="solid" />
      <GenerateIconButtonList scheme="danger" variant="outline" />
      <GenerateIconButtonList scheme="danger" variant="ghost" />
      <GenerateIconButtonList scheme="danger" variant="invisible" />
    </Group>

    <h4>Success Icon Buttons</h4>
    <Group>
      <GenerateIconButtonList scheme="success" variant="solid" />
      <GenerateIconButtonList scheme="success" variant="outline" />
      <GenerateIconButtonList scheme="success" variant="ghost" />
      <GenerateIconButtonList scheme="success" variant="invisible" />
    </Group>

    <h4>Warning Icon Buttons</h4>
    <Group>
      <GenerateIconButtonList scheme="warning" variant="solid" />
      <GenerateIconButtonList scheme="warning" variant="outline" />
      <GenerateIconButtonList scheme="warning" variant="ghost" />
      <GenerateIconButtonList scheme="warning" variant="invisible" />
    </Group>
  </>
);
