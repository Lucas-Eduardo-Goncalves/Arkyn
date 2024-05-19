import { styled } from "@linaria/react";

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 4px;

  position: sticky;
  top: 16px;

  min-width: 300px;
  max-width: 300px;

  max-height: calc(100vh - 32px);
  overflow: auto;
`;

export { Container };
