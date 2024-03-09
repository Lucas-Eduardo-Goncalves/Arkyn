import { Container } from "./styles";

type GroupProps = {
  children: React.ReactNode;
};

export function Group(props: GroupProps) {
  return <Container>{props.children}</Container>;
}
