import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

const Container = styled(Link)`
  display: flex;
  align-items: center;
  padding: 1rem;
  gap: 1rem;

  flex: 1;
  min-width: 250px;

  font-size: 16px;
  font-weight: 700;

  text-decoration: none;
  color: var(--secondary-800);
  background: transparent;

  border: 1px solid var(--secondary-200);
  border-radius: 6px;

  transition: all 0.15s ease-in-out;

  svg {
    transition: all 0.15s ease-in-out;
    color: var(--secondary-800);
  }

  &:hover {
    background: var(--secondary-100);
    border-color: var(--secondary-300);

    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;

export { Container };
