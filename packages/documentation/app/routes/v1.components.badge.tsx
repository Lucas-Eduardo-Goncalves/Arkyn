import { GenerateBadgeList, Group } from "~/components";

export default function BadgeRoute() {
  return (
    <>
      <h4>Badges</h4>
      <Group>
        <GenerateBadgeList variant="solid" />
        <GenerateBadgeList variant="ghost" />
        <GenerateBadgeList variant="outline" />
      </Group>
    </>
  );
}
