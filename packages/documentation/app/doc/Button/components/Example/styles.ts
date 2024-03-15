import { styled } from "@linaria/react";

const Container = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  padding: 32px;

  > header {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`;

export { Container };
