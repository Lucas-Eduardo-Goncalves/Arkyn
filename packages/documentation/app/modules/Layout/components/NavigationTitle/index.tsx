import { Container } from "./styles";

type NavigationLinkProps = {
  label: string;
};

function NavigationTitle(args: NavigationLinkProps) {
  return <Container>{args.label}</Container>;
}

export { NavigationTitle };
