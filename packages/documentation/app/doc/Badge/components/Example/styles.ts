import { styled } from "@linaria/react";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  gap: 24px;
  padding: 32px;

  border: 1px solid var(--secondary-200);
  border-radius: 8px;

  &:hover {
    border-color: var(--secondary-300);
    box-shadow: 3px 3px 4px rgba(0, 0, 0, 0.05);
  }

  > header {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export { Container };
