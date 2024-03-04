import { GenerateBadgeList, Group } from "~/components";

export default () => (
  <>
    <h4>Badges</h4>
    <Group>
      <GenerateBadgeList variant="solid" />
      <GenerateBadgeList variant="ghost" />
      <GenerateBadgeList variant="outline" />
    </Group>
  </>
);
