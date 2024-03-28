import { Container } from "./styles";

type ExampleContainerProps = {
  children: React.ReactNode;
};

function ExampleContainer(args: ExampleContainerProps) {
  return <Container>{args.children}</Container>;
}

export { ExampleContainer };
