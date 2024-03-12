import { LucideIcon } from "lucide-react";
import { Container } from "./styles";

type NavigationButtonProps = {
  label: string;
  to: string;
  icon: LucideIcon;
};

function NavigationButton({ icon: Icon, label, to }: NavigationButtonProps) {
  return (
    <Container to={to}>
      <Icon size={24} />
      {label}
    </Container>
  );
}

export { NavigationButton };
