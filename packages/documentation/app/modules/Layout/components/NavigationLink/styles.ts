import { styled } from "@linaria/react";
import { Link } from "@remix-run/react";

const Container = styled(Link)`
  display: flex;
  align-items: center;

  border-radius: 4px;
  padding: 6px 8px;

  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: var(--secondary-600);

  &:hover {
    background: var(--secondary-50);
  }

  &.active {
    font-weight: 500;
    background: var(--primary-50);
    color: var(--primary-500);
  }
`;

export { Container };
