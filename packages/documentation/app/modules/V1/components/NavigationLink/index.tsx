import { useLocation } from "@remix-run/react";
import { Container } from "./styles";

type NavigationLinkProps = {
  to: string;
  label: string;
};

function NavigationLink(args: NavigationLinkProps) {
  const { pathname } = useLocation();
  const isActive = pathname === args.to ? "active" : "";

  return (
    <Container className={isActive} to={args.to}>
      {args.label}
    </Container>
  );
}

export { NavigationLink };
