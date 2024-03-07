import { styled } from "@linaria/react";

const Container = styled.header`
  display: flex;
  align-items: center;
  border-bottom: 1px solid var(--secondary-200);

  padding: 16px;
  gap: 16px;

  h1 {
    margin-right: auto;
    font-size: 20px;
    font-weight: 600;
    color: var(--secondary-900);
  }

  nav {
    display: flex;
    align-items: center;
    gap: 16px;

    a {
      font-size: 16px;
      text-decoration: none;
      font-weight: 500;
      color: var(--secondary-600);

      &:hover {
        color: var(--primary-500);
      }
    }
  }
`;

export { Container };
