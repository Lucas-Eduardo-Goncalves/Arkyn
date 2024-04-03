import { styled } from "@linaria/react";

const Container = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: transparent;
  border: none;

  border-radius: 4px;
  padding: 6px 8px;

  font-size: 14px;
  font-weight: 400;
  text-decoration: none;
  color: var(--secondary-500);

  &:hover {
    background: var(--secondary-100);
    color: var(--secondary-800);
  }

  &.active {
    font-weight: 600;
    background: var(--primary-100);
    color: var(--primary-500);

    svg {
      color: var(--primary-500);
    }
  }

  svg {
    background: inherit;
    border-radius: 4px;

    height: 16px;
    width: 20px;

    &:hover {
      filter: brightness(0.98);
      cursor: pointer;
    }
  }
`;

const OptionsContainer = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  padding-left: 8px;
  margin-left: 6px;
  border-left: 1px solid var(--secondary-200);
`;

export { Container, OptionsContainer };
