import { styled } from "@linaria/react";

const Container = styled.div`
  font-family: monospace;

  font-size: 14px;
  font-weight: 500;
  color: var(--secondary-700);
  border-radius: 8px;
  background: var(--secondary-50);

  > header {
    left: 0;
    top: 0;
    right: 0;
    height: 30px;
    border-radius: 8px 8px 0 0;
    background: var(--secondary-100);

    color: var(--secondary-400);

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;

    font-size: 12px;
    font-weight: 400;
  }
`;

export { Container };
