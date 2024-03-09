import { Container } from "./styles";

type BoxProps = {
  children: React.ReactNode;
};

export function Box(props: BoxProps) {
  return <Container>{props.children}</Container>;
}
