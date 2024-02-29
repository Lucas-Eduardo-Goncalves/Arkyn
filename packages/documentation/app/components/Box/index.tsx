import { BoxContainer } from "./styles";

type BoxProps = {
  children: React.ReactNode;
};

export function Box(props: BoxProps) {
  return <BoxContainer>{props.children}</BoxContainer>;
}
