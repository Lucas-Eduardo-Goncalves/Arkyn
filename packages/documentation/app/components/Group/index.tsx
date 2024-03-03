import { GroupContainer } from "./styles";

type GroupProps = {
  children: React.ReactNode;
};

export function Group(props: GroupProps) {
  return <GroupContainer>{props.children}</GroupContainer>;
}
