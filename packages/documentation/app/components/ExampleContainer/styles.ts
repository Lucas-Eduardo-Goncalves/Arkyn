import { styled } from "@linaria/react";

const Container = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 24px;
  padding: 32px;

  border: 1px solid var(--secondary-200);
  border-radius: 8px;

  transition: all 0.15s ease-in-out;

  > header {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export { Container };
