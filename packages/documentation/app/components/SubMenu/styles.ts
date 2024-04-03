import { styled } from "@linaria/react";
import { Link } from "react-scroll";

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 12px;

  width: 200px;
  position: sticky;
  top: 16px;

  strong {
    font-size: 14px;
    color: var(--secondary-900);
    font-weight: 600;
    margin-bottom: 10px;
  }

  > nav {
    position: unset;
    background: 100%;
    padding-left: 16px;

    strong {
      display: none;
    }
  }
`;

const LinkContainer = styled(Link)`
  font-size: 14px;
  color: var(--secondary-500);
  font-weight: 400;
  text-decoration: none;

  &:hover {
    cursor: pointer;
    color: var(--secondary-900);
  }
`;

export { NavContainer, LinkContainer };
