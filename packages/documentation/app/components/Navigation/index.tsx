import { LucideIcon } from "lucide-react";
import { LinkContainer, NavContainer } from "./styles";
import { ReactNode } from "react";

type NavigationContainerProps = {
  children: ReactNode;
};

type NavigationButtonProps = {
  label: string;
  to: string;
  icon: LucideIcon;
};

function NavigationContainer({ children }: NavigationContainerProps) {
  return <NavContainer>{children}</NavContainer>;
}

function NavigationButton({ icon: Icon, label, to }: NavigationButtonProps) {
  return (
    <LinkContainer to={to}>
      <Icon size={24} />
      {label}
    </LinkContainer>
  );
}

export { NavigationContainer, NavigationButton };
