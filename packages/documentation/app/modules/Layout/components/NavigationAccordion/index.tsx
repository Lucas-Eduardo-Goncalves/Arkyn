import { useLocation, useNavigate } from "@remix-run/react";
import { ReactNode, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import { Container, OptionsContainer } from "./styles";

type NavigationAccordionProps = {
  to: string;
  label: string;
  children: ReactNode;
};

const baseIcon = {
  true: ChevronDown,
  false: ChevronUp,
};

function NavigationAccordion(args: NavigationAccordionProps) {
  const { pathname } = useLocation();
  const isActive = pathname === args.to ? "active" : "";

  const [isOpen, setIsOpen] = useState(false);
  const [inOptionEnter, setInOptionEnter] = useState(false);

  const navigate = useNavigate();
  function handleNavigateAccordionClick() {
    if (!inOptionEnter) navigate(args.to);
  }

  const Icon = baseIcon[isOpen ? "true" : "false"];

  return (
    <>
      <Container className={isActive} onClick={handleNavigateAccordionClick}>
        {args.label}

        <Icon
          size={12}
          onClick={() => setIsOpen(!isOpen)}
          onMouseUp={() => setInOptionEnter(true)}
          onMouseLeave={() => setInOptionEnter(false)}
        />
      </Container>

      {isOpen && <OptionsContainer>{args.children}</OptionsContainer>}
    </>
  );
}

export { NavigationAccordion };
